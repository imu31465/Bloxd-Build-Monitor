export const id = 86;
export const ids = [86];
export const modules = {
  36919: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Iu,
      h: () => Wu
    });
    var su = ju(58),
      Uu = ju(1986),
      Zu = ju(36925),
      Xu = ju.n(Zu),
      lu = ju(4726),
      qu = ju(1964),
      fu = ju(1499),
      Cu = ju(91),
      bu = ju(107),
      cu = ju(349),
      Nu = ju(1105),
      Ou = ju.n(Nu),
      Yu = ju(22),
      hu = ju(1116),
      Du = ju(1687),
      gu = ju(1779),
      Mu = ju(1727),
      eu = ju(2050),
      Gu = ju(1461),
      pu = ju(2139),
      wu = ju(1443),
      Ju = ju(3825),
      du = ju(36934),
      au = ju(36958),
      Pu = ju(1524),
      ou = ju(2545),
      ku = ju(1244),
      mu = ju(36965);
    var vu = ju(34501),
      Ku = ju(1335);
    var Vu = ju(1154);
    const ru = ju(36973),
      Qu = ["enter", "t", "/"];
    let iu = !1;

    function Wu() {
      return iu || (0, gu.isTextEntry)(document.activeElement)
    }

    function Su() {
      var uu, Eu;
      (0, pu.b)();
      const ju = null !== (uu = null === (Eu = (0, Gu.e)()) || void 0 === Eu ? void 0 : Eu.getBoundButton("keyboardChannel")) && void 0 !== uu ? uu : null;
      return ju ? (0, Vu.jsx)(eu.d, {
        className: "ChatInputChannelGlyph",
        glyph: ju
      }) : null
    }

    function Iu() {
      const {
        t: uu
      } = (0, ku.A)(), {
        isTouchScreen: Eu
      } = (0, Yu.l)(["isTouchScreen"]), ju = (0, wu.t)(), [Zu, Nu] = (0, su.useState)(!1), eu = (0, su.useRef)(Zu), Gu = (0, su.useRef)(null), {
        messages: pu,
        reportedPlayers: Wu,
        channel: Iu
      } = (0, Ju.l)(), Bu = (0, su.useRef)(0), Lu = (0, su.useRef)(""), tu = (0, su.useRef)(null);
      var xu;
      xu = tu, (0, su.useEffect)((() => {
        if (!(0, Cu.isIOS)()) return;
        const uu = xu.current;
        let Eu = null;
        const ju = ju => {
            const su = ju.changedTouches[0];
            Eu = "none" === getComputedStyle(uu).pointerEvents ? {
              id: su.identifier,
              y: su.clientY
            } : null
          },
          su = ju => {
            const su = Eu,
              Uu = su && (0, mu.b)(ju.changedTouches, su.id);
            Uu && (ju.preventDefault(), uu.scrollBy({
              top: su.y - Uu.clientY,
              behavior: "instant"
            }), su.y = Uu.clientY)
          };
        return uu.addEventListener("touchstart", ju, {
          passive: !0
        }), uu.addEventListener("touchmove", su, {
          passive: !1
        }), () => {
          uu.removeEventListener("touchstart", ju), uu.removeEventListener("touchmove", su)
        }
      }), [xu]);
      const [Tu, Hu] = (0, su.useState)(!1), [Au, nu] = (0, su.useState)(!1), yu = (0, su.useRef)(Tu), zu = (0, su.useRef)(null), Ru = (0, su.useRef)(!1), uE = (0, su.useRef)(null), EE = (0, su.useRef)(null), jE = (0, su.useRef)(null), sE = (0, su.useRef)(lE);
      sE.current = lE;
      const UE = (0, ou.n)();

      function ZE() {
        eu.current = !1, Nu(!1), EE.current.blur()
      }

      function XE(uu) {
        yu.current = uu, Hu(uu)
      }

      function lE() {
        const uu = EE.current.value;
        EE.current.value = "", qE(uu)
      }

      function qE(uu) {
        (0, Ju.i)(uu), Bu.current = 0, XE(!1)
      }

      function fE(uu, Eu) {
        0 === Bu.current && (Lu.current = EE.current.value);
        const ju = (0, Ju.g)(Bu.current + uu, Eu);
        Bu.current = ju.stepsBack, EE.current.value = 0 === ju.stepsBack ? Lu.current : ju.text, setTimeout((() => {
          EE.current && EE.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function CE() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        tu.current && (!uu && yu.current || (tu.current.scrollTop = 1e5))
      }
      return (0, lu.e)(!0, Zu, "ChatComponent"), (0, su.useEffect)((() => (iu = Zu, () => {
          iu = !1
        })), [Zu]), (0, fu.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Du.t)() && Nu(!1)
        })), (0, su.useEffect)((() => {
          EE.current.addEventListener("blur", (uu => {
            if (null === EE.current) return;
            Array.from(document.querySelectorAll(":hover")).some((uu => uu.classList.contains("ChatInputChannel") || uu.classList.contains("ChatMsgSelectWrapper"))) || ((0, Cu.isMobile)() && eu.current && "" !== EE.current.value && sE.current(), Nu(!1))
          }));
          const uu = uu => {
            Gu.current.contains(uu.target) || (0, Mu.l)(uu.target) || Nu(!1)
          };
          document.addEventListener("touchstart", uu, {
            capture: !0
          });
          const Eu = uu => {
            (0, au.g)(uu.target) && (eu.current = !1, Nu(!1))
          };
          document.addEventListener("mousedown", Eu, {
            capture: !0
          });
          const ju = () => {
              clearTimeout(zu.current), XE(!0)
            },
            su = () => {
              clearTimeout(zu.current), zu.current = setTimeout((() => {
                XE(!1), CE()
              }), 4e3)
            },
            Zu = () => {
              document.pointerLockElement ? (Nu(!1), nu(!0), Ru.current = !1, XE(!1), CE()) : nu(!1)
            };
          tu.current.addEventListener("pointermove", (uu => {
            "touch" === uu.pointerType || Ru.current || document.pointerLockElement || (Ru.current = !0, clearTimeout(zu.current))
          })), tu.current.addEventListener("pointerleave", (uu => {
            "touch" !== uu.pointerType && (Ru.current = !1, yu.current && su())
          })), tu.current.addEventListener("pointerdown", (uu => {
            "touch" === uu.pointerType || document.pointerLockElement || (Ru.current = !0, ju())
          })), tu.current.addEventListener("wheel", (uu => {
            document.pointerLockElement || uu.deltaY >= 0 && Math.abs(tu.current.scrollTop) < 1 || (ju(), Ru.current || (zu.current = setTimeout((() => {
              XE(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), tu.current.addEventListener("touchstart", ju), tu.current.addEventListener("touchend", su), tu.current.addEventListener("touchcancel", su), document.addEventListener("pointerlockchange", Zu);
          const lu = uu => {
            if (UE.shown && (eu.current || ! function(uu) {
                if ((0, gu.isTypingInInput)()) return !0;
                const Eu = document.activeElement;
                return (Eu instanceof HTMLButtonElement || "button" === (null === Eu || void 0 === Eu ? void 0 : Eu.getAttribute("role"))) && ["Enter", " "].includes(uu.key)
              }(uu)) && "codeEditor" !== Yu.d.get("openInGameMenuName") && "lobbyCodeEditor" !== Yu.d.get("openInGameMenuName") && !Uu.gameBridge.latest("connectedGame").replay)
              if (eu.current || !(0, Du.t)()) {
                if (eu.current) {
                  if ("ArrowUp" === uu.code || "ArrowDown" === uu.code) return fE("ArrowUp" === uu.code ? 1 : -1, !1), void uu.stopPropagation();
                  if ("Tab" === uu.code) return Ju.d.selectNextChannel(), uu.stopPropagation(), void uu.preventDefault();
                  if (uu.ctrlKey && Fu.includes(ru[uu.keyCode])) return uu.preventDefault(), void uu.stopPropagation()
                }
                if ([...Qu, "esc"].includes(Xu()(uu)))
                  if ("esc" !== Xu()(uu)) {
                    if (!eu.current || "/" !== Xu()(uu)) {
                      if ("t" === Xu()(uu)) {
                        if (eu.current) return void uu.stopPropagation();
                        uu.preventDefault()
                      }
                      eu.current && "" !== EE.current.value && sE.current(), uu.repeat || (eu.current || "/" === Xu()(uu) && (EE.current.value = "/", uu.preventDefault()), Nu(!eu.current))
                    }
                  } else eu.current && (Nu(!1), uu.stopPropagation());
                else eu.current && uu.stopPropagation()
              } else Qu.includes(Xu()(uu)) && (uu.preventDefault(), uu.stopPropagation(), (0, Du.e)(uu))
          };
          document.addEventListener("keydown", lu, {
            capture: !0
          });
          const qu = tu.current;
          let fu = !1;
          const bu = new ResizeObserver((() => {
              fu && (fu = !1, CE())
            })),
            cu = () => {
              fu = !0, bu.unobserve(qu), bu.observe(qu)
            };
          uE.current = cu;
          const Ou = new MutationObserver(cu);
          return Ou.observe(qu, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", lu, {
              capture: !0
            }), document.removeEventListener("touchstart", uu, {
              capture: !0
            }), document.removeEventListener("mousedown", Eu, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Zu), uE.current = null, Ou.disconnect(), bu.disconnect(), clearTimeout(zu.current)
          }
        }), []), (0, Mu.r)(EE, {
          open: () => {
            Nu(!0)
          },
          close: () => {
            ZE()
          },
          submit: () => {
            "" !== EE.current.value && lE(), ZE()
          },
          stepHistory: () => {
            fE(1, !0)
          },
          sendLine: uu => {
            qE(uu), ZE()
          },
          selectNextChannel: () => {
            Ju.d.selectNextChannel()
          }
        }), (0, su.useEffect)((() => {
          var uu;
          (eu.current = Zu, EE.current) && (Zu ? (Bu.current = 0, EE.current.focus()) : (EE.current.blur(), null === (uu = uE.current) || void 0 === uu || uu.call(uE)))
        }), [Zu]),
        function(uu, Eu) {
          (0, su.useLayoutEffect)((() => {
            if (!Eu) return;
            vu.c.hold();
            const ju = uu.current.closest(".InGameHeaderAndChat"),
              su = (0, Ku.b)((uu => {
                let {
                  top: Eu,
                  height: su
                } = uu;
                ju.style.setProperty("--keyboard-top", `${Eu+su}px`)
              }));
            return () => {
              su(), ju.style.removeProperty("--keyboard-top"), vu.c.release()
            }
          }), [uu, Eu])
        }(Gu, Zu && Eu), (0, Vu.jsx)(Vu.Fragment, {
          children: (0, Vu.jsxs)("div", {
            ref: Gu,
            className: Ou()("Chat", {
              Chatting: Zu
            }),
            "data-camera-keeper": Zu ? "" : void 0,
            children: [(0, Vu.jsx)("div", {
              ref: tu,
              className: Ou()("ChatMessages", {
                HideScrollbar: !Tu && !Zu,
                NoScrolling: !(0, Cu.isMobile)() && Au
              }),
              children: (0, Vu.jsx)(du.c, {
                messages: pu,
                reportedPlayers: Wu
              })
            }), Eu && !Zu && (0, Vu.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": uu("general:chat"),
              ...(0, Pu.g)((() => {
                Nu(!0), jE.current.style.display = "flex", (0, Cu.isIOS)() && EE.current.focus()
              }), "pointerup"),
              children: (0, Vu.jsx)(hu.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, Vu.jsxs)("div", {
              ref: jE,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Zu ? "flex" : "none")
              },
              children: [Iu && (0, Vu.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: Iu.elementBgColor
                },
                onClick: uu => {
                  Ju.d.selectNextChannel(), EE.current.focus()
                },
                children: (0, Vu.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, Vu.jsx)(qu.d, {
                    text: Iu.elementContent
                  })
                })
              }), Iu && ju && (0, Vu.jsx)(Su, {}), (0, Vu.jsx)("input", {
                className: "ChatInput",
                maxLength: cu.hd,
                ref: EE,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": uu("general:chat"),
                placeholder: Iu ? `${Iu.channelName} Chat${"touchOnly"===(0,bu.c)()||ju?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Fu = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36934: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => du
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(3829),
      lu = ju(24),
      qu = ju(2488),
      fu = ju(3787),
      Cu = ju(2075),
      bu = ju(22),
      cu = ju(1964),
      Nu = ju(36940),
      Ou = ju(2260),
      Yu = ju(36946),
      hu = ju(2752),
      Du = ju(2732),
      gu = ju(2724),
      Mu = ju(3802),
      eu = ju(36948),
      Gu = ju(3290),
      pu = ju(2027),
      wu = ju(1154);

    function Ju(uu) {
      for (let ju = uu.length - 1; ju >= 0; ju--) {
        const su = "string" === typeof(Eu = uu[ju]) ? Eu : "str" in Eu && "string" === typeof Eu.str ? Eu.str : "";
        if ("" !== su.trim()) return su
      }
      var Eu;
      return ""
    }

    function du(uu) {
      let {
        messages: Eu,
        reportedPlayers: ju
      } = uu;
      return (0, wu.jsx)(wu.Fragment, {
        children: Eu.map((uu => (0, wu.jsx)(au, {
          message: uu,
          reportedPlayers: ju
        }, uu.clientChatMsgId)))
      })
    }
    const au = (0, su.memo)((function(uu) {
      var Eu;
      let {
        message: ju,
        reportedPlayers: Uu
      } = uu;
      const du = (0, su.useRef)(null),
        [au] = (0, su.useState)(Gu.h),
        {
          author: Pu
        } = ju,
        ou = null === Pu || void 0 === Pu ? void 0 : Pu.id,
        ku = null !== (Eu = null === Pu || void 0 === Pu ? void 0 : Pu.name) && void 0 !== Eu ? Eu : void 0,
        mu = (0, Cu.b)(ku),
        vu = null !== Pu && void 0 !== Pu && Pu.profileEffect ? Ou.e[Pu.profileEffect] : void 0,
        Ku = null !== Pu && !Pu.local,
        Vu = null === Pu && null !== ju.serverChatMsgId,
        ru = (0, pu.d)("hiddenPlayerNames", (uu => (0, Yu.d)(Ku, ku, uu))),
        Qu = null === ju.serverChatMsgId || null === Pu ? null : {
          text: Ju(ju.content),
          serverChatMsgId: ju.serverChatMsgId,
          authorId: Pu.id
        },
        iu = Vu || null !== Qu && !Uu.includes(ou),
        Wu = (0, fu.k)(Ku && null !== ku && void 0 !== ku ? ku : null),
        Su = (0, gu.i)(du);
      (0, su.useEffect)((() => () => {
        gu.c.closeIfOwner(du)
      }), []);
      const Iu = () => {
          Vu ? lu.h.TY("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            VC: (0, Xu.b)(ju.content),
            serverChatMsgId: ju.serverChatMsgId
          }) : null !== Qu ? lu.h.TY("OpenReportMenu", {
            playerEId: ou,
            playerName: ku,
            VC: Qu.text,
            serverChatMsgId: Qu.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Fu = void 0 === ku ? [] : (0, Mu.e)(Wu, ku, Qu);
      return (0, wu.jsxs)("div", {
        ref: du,
        className: Zu()("MessageWrapper", {
          ChatMsgSelectWrapper: ou,
          Still: au
        }),
        onContextMenu: ru ? uu => {
          (0, hu.d)(du, uu, {
            ...(0, Yu.c)(ou, ku),
            showLocation: !1,
            status: null,
            extraActions: iu ? [{
              icon: "flag",
              text: "Report",
              onClick: Iu
            }] : [],
            moderationActions: (0, eu.b)(ku),
            friendRequestSource: "chat"
          }, bu.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: ru ? uu => {
          (0, Du.d)(uu, (() => (0, Yu.c)(ou, ku).playerSocialPreview))
        } : void 0,
        children: [vu && (0, wu.jsx)(vu, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Ku || Vu) && !Su && (0, wu.jsx)(Nu.e, {
          className: "ChatFloatingActions",
          triggerElementRef: du,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Iu,
            show: iu
          }, ...Fu, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: uu => {
              (0, qu.l)(ku, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: ru && "blocked" !== Wu
          }]
        }), (0, wu.jsx)(cu.d, {
          text: ju.content,
          friendBadgeFor: mu ? ku : void 0
        }, ju.clientChatMsgId)]
      }, ju.clientChatMsgId)
    }))
  },
  36990: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      h: () => Ou,
      k: () => cu,
      n: () => bu
    });
    var su = ju(34547),
      Uu = ju(36992),
      Zu = ju(36998),
      Xu = ju(8942),
      lu = ju(1499),
      qu = ju(58),
      fu = ju(65),
      Cu = ju(1154);

    function bu() {
      var uu;
      return (0, lu.g)(Uu.c, (0, Uu.l)()), (0, Cu.jsx)(Cu.Fragment, {
        children: null === (uu = (0, Uu.l)()) || void 0 === uu ? void 0 : uu.content
      })
    }

    function cu(uu) {
      var Eu;
      let {
        show: ju
      } = uu;
      (0, lu.g)(Uu.c, (0, Uu.l)());
      const fu = null === (Eu = (0, Uu.l)()) || void 0 === Eu ? void 0 : Eu.menu;
      return (0, qu.useEffect)((() => {
        var uu;
        ju || (null === fu || void 0 === fu || null === (uu = fu.onClose) || void 0 === uu || uu.call(fu), (0, Zu.q)())
      }), [ju, fu]), (0, qu.useEffect)((() => ju ? (0, Xu.f)(Zu.x, Zu.h) : void 0), [ju]), (0, Cu.jsx)(su.b, {
        showing: ju,
        globallyUniqueKey: "clientGameMenu",
        children: null === fu || void 0 === fu ? void 0 : fu.content
      })
    }

    function Nu(uu) {
      let {
        placement: Eu = "bottom"
      } = uu;
      return (0, Cu.jsx)("div", {
        id: `clientGameHud-${Eu}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ou(uu) {
      let {
        children: Eu,
        placement: ju = "bottom"
      } = uu;
      const [su, Uu] = (0, qu.useState)(null);
      return (0, qu.useEffect)((() => {
        Uu(document.getElementById(`clientGameHud-${ju}`))
      }), [ju]), su ? (0, fu.createPortal)(Eu, su) : null
    }
  },
  37290: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => bu,
      e: () => Cu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1506),
      lu = ju(1154);
    const qu = 200,
      fu = 160;

    function Cu() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function bu(uu) {
      let {
        side: Eu,
        defaultSize: ju,
        covers: Uu,
        onClose: Cu,
        children: bu
      } = uu;
      const cu = (0, su.useRef)(null),
        [Nu, Ou] = (0, su.useState)(null),
        [Yu, hu] = (0, su.useState)(ju);
      Yu !== ju && (hu(ju), Ou(null));
      const Du = (0, su.useRef)(null),
        gu = "top" === Eu,
        Mu = uu => gu ? uu.clientY : uu.clientX,
        eu = () => {
          Du.current = null
        };
      return (0, lu.jsxs)("div", {
        ref: cu,
        className: Zu()("ResizableSidePanel", Eu && `ResizableSidePanel-${Eu}`, {
          Covers: "always" === Uu,
          CoversWhenNarrow: "narrow" === Uu,
          Dragged: null !== Nu
        }),
        style: {
          [gu ? "height" : "width"]: null !== Nu && void 0 !== Nu ? Nu : ju
        },
        children: [bu, Eu && (0, lu.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": gu ? "horizontal" : "vertical",
          onPointerDown: uu => {
            if (0 !== uu.button) return;
            uu.preventDefault();
            const Eu = cu.current,
              ju = Array.from(Eu.parentElement.children).reduce(((uu, ju) => ju !== Eu && "0" !== getComputedStyle(ju).flexGrow ? uu + (uu => gu ? uu.clientHeight : uu.clientWidth)(ju) : uu), 0),
              su = gu ? Eu.offsetHeight : Eu.offsetWidth,
              Uu = Math.min(qu, su),
              Zu = Math.max(Uu, su + Math.max(0, ju - fu));
            Du.current = {
              start: Mu(uu),
              startSize: su,
              minSize: Uu,
              maxSize: Zu
            }, uu.currentTarget.setPointerCapture(uu.pointerId)
          },
          onPointerMove: uu => {
            const ju = Du.current;
            if (!ju) return;
            const su = "right" === Eu ? ju.start - uu.clientX : Mu(uu) - ju.start;
            Ou(Math.min(ju.maxSize, Math.max(ju.minSize, ju.startSize + su)))
          },
          onPointerUp: eu,
          onPointerCancel: eu,
          onLostPointerCapture: eu
        }), Cu && (0, lu.jsx)(Xu.l, {
          className: "ResizableSidePanelClose",
          onClick: Cu
        })]
      })
    }
  },
  37308: (uu, Eu, ju) => {
    ju.d(Eu, {
      B: () => Uu,
      D: () => wu,
      d: () => Mu,
      h: () => hu,
      i: () => Ou,
      k: () => Nu,
      o: () => gu,
      p: () => du,
      s: () => eu,
      t: () => pu,
      x: () => Gu,
      y: () => Ju
    });
    var su = ju(58);
    const Uu = 5e3,
      Zu = 500,
      Xu = 3e3;
    let lu = null,
      qu = null,
      fu = null;
    const Cu = new Set;

    function bu(uu) {
      lu = uu;
      for (const Eu of Cu) Eu()
    }

    function cu() {
      if (!lu || void 0 !== lu.endedAt) return;
      null !== qu && (clearTimeout(qu), qu = null), bu({
        ...lu,
        endedAt: Date.now()
      });
      const uu = fu;
      fu = null, null === uu || void 0 === uu || uu()
    }

    function Nu(uu, Eu) {
      let {
        submit: ju,
        reopen: su
      } = Eu;
      null !== qu && clearTimeout(qu), fu = su, bu({
        ...uu,
        startedAt: Date.now(),
        errors: []
      }), qu = setTimeout(cu, Xu), ju()
    }

    function Ou() {
      lu && void 0 === lu.endedAt && void 0 === lu.ranAt && (null !== qu && clearTimeout(qu), bu({
        ...lu,
        ranAt: Date.now()
      }), qu = setTimeout(cu, Uu))
    }
    const Yu = 3;

    function hu(uu) {
      if (!lu || void 0 === lu.ranAt || void 0 !== lu.endedAt || lu.errors.includes(uu) || lu.errors.length >= Yu) return;
      const Eu = 0 === lu.errors.length;
      bu({
        ...lu,
        errors: [...lu.errors, uu]
      }), Eu && (null !== qu && clearTimeout(qu), qu = setTimeout(cu, Zu))
    }

    function Du(uu) {
      var Eu;
      return (null === (Eu = lu) || void 0 === Eu ? void 0 : Eu.chatKey) === uu ? lu : null
    }

    function gu(uu) {
      const Eu = Du(uu);
      return Eu && void 0 !== Eu.endedAt ? (bu(null), Eu) : null
    }

    function Mu(uu) {
      var Eu;
      (null === (Eu = lu) || void 0 === Eu ? void 0 : Eu.chatKey) === uu && (null !== qu && (clearTimeout(qu), qu = null), fu = null, bu(null))
    }
    const eu = "These changes from your last answer didn't go in. Make them again.";

    function Gu(uu) {
      const Eu = [...new Set(uu)].slice(0, Yu);
      return `Fix this in your change: when it ran, the world showed ${1===Eu.length?"this error":"these errors"}: ${Eu.join(" ")}`
    }

    function pu(uu) {
      return `Your change didn't go in, because the code wouldn't run at all: ${uu.join(" ")} Send the whole change again with that fixed.`
    }

    function wu(uu) {
      return `Fix this in your change: ${uu.join(" ")}`
    }

    function Ju(uu) {
      var Eu;
      if (void 0 === uu.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const ju = Math.max(1, Math.round(((null !== (Eu = uu.endedAt) && void 0 !== Eu ? Eu : uu.ranAt) - uu.ranAt) / 1e3)),
        su = `Your change ran in your world for ${ju} ${1===ju?"second":"seconds"}`;
      return 0 === uu.errors.length ? {
        title: "Tested: no errors",
        text: `${su} without an error.`
      } : {
        title: 1 === uu.errors.length ? "Tested: it showed an error" : `Tested: it showed ${uu.errors.length} errors`,
        text: `${su} and showed: ${uu.errors.join(" ")}`
      }
    }

    function du(uu) {
      const [Eu, ju] = (0, su.useState)((() => Du(uu)));
      return (0, su.useEffect)((() => {
        const Eu = () => {
          ju(Du(uu))
        };
        return Eu(), Cu.add(Eu), () => {
          Cu.delete(Eu)
        }
      }), [uu]), Eu
    }
  },
  37317: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      f: () => su
    });
    const su = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Uu(uu, Eu, ju) {
      return {
        key: uu,
        label: `Code block at ${Eu.join(", ")}`,
        codeBlock: !0,
        pos: Eu,
        canChangePos: ju
      }
    }
  },
  37304: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      c: () => Zu,
      e: () => Xu,
      i: () => Uu
    });
    const su = "code block",
      Uu = "World Code/";

    function Zu(uu) {
      return uu.trim().toLowerCase().startsWith(Uu.toLowerCase())
    }

    function Xu(uu) {
      return uu.trim().slice(Uu.length).replace(/^\.?\//, "")
    }
  },
  37276: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      h: () => fu,
      i: () => lu,
      l: () => Cu
    });
    var su = ju(58),
      Uu = ju(31),
      Zu = ju(91);
    class Xu {
      constructor(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = uu, this.defaultValue = Eu, this.canChange = ju, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const uu = Uu.k.getItem(this.storageKey);
            this.value = "boolean" === typeof uu ? uu : this.defaultValue
          }
          return this.value
        }, this.set = uu => {
          this.value = uu, Uu.k.setItem(this.storageKey, uu);
          for (const Eu of this.listeners) Eu(uu)
        }
      }
      subscribe(uu) {
        return this.listeners.add(uu), () => {
          this.listeners.delete(uu)
        }
      }
    }
    const lu = new Xu("codeEditorLightMode", !1),
      qu = new Xu("codeEditorAiHints", !0),
      fu = new Xu("codeEditorAiKeySafetyCheck", !0, Zu.featureFlags.isOwnTopLevelSite);

    function Cu(uu) {
      const [Eu, ju] = (0, su.useState)(uu.get);
      return (0, su.useEffect)((() => {
        const Eu = uu.subscribe(ju);
        return ju(uu.get()), Eu
      }), [uu]), [Eu, uu.set]
    }
  },
  37271: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      E: () => Ku,
      F: () => Ju,
      G: () => du,
      I: () => vu,
      b: () => Ou,
      c: () => qu,
      g: () => Yu,
      h: () => Pu,
      i: () => lu,
      k: () => Cu,
      l: () => Nu,
      p: () => hu,
      s: () => eu,
      u: () => ou,
      y: () => au
    });
    var su = ju(2541),
      Uu = ju(37264);
    const Zu = "bloxd-world-code-directory-sync",
      Xu = "handles",
      lu = "[INVALID SCHEMATIC PLACEHOLDER]";

    function qu(uu, Eu) {
      return `${uu}::${Eu}`
    }
    const fu = new Set(["node_modules", ".git"]);

    function Cu() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function bu() {
      return new Promise(((uu, Eu) => {
        const ju = indexedDB.open(Zu, 1);
        ju.onupgradeneeded = () => {
          const uu = ju.result;
          uu.objectStoreNames.contains(Xu) || uu.createObjectStore(Xu)
        }, ju.onsuccess = () => {
          uu(ju.result)
        }, ju.onerror = () => {
          var uu;
          Eu(null !== (uu = ju.error) && void 0 !== uu ? uu : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function cu(uu, Eu) {
      const ju = await bu();
      try {
        await new Promise(((su, Uu) => {
          const Zu = ju.transaction(Xu, "readwrite");
          Zu.objectStore(Xu).put(Eu, uu), Zu.oncomplete = () => {
            su()
          }, Zu.onerror = () => {
            var uu;
            Uu(null !== (uu = Zu.error) && void 0 !== uu ? uu : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        ju.close()
      }
    }
    async function Nu(uu) {
      const Eu = await bu();
      try {
        return await new Promise(((ju, su) => {
          const Uu = Eu.transaction(Xu, "readonly").objectStore(Xu).get(uu);
          Uu.onsuccess = () => {
            var uu;
            ju(null !== (uu = Uu.result) && void 0 !== uu ? uu : null)
          }, Uu.onerror = () => {
            var uu;
            su(null !== (uu = Uu.error) && void 0 !== uu ? uu : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        Eu.close()
      }
    }
    async function Ou(uu) {
      const Eu = await bu();
      try {
        await new Promise(((ju, su) => {
          const Uu = Eu.transaction(Xu, "readwrite");
          Uu.objectStore(Xu).delete(uu), Uu.oncomplete = () => {
            ju()
          }, Uu.onerror = () => {
            var uu;
            su(null !== (uu = Uu.error) && void 0 !== uu ? uu : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        Eu.close()
      }
    }
    async function Yu(uu) {
      const Eu = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await uu.queryPermission(Eu) || "granted" === await uu.requestPermission(Eu)
    }
    async function hu(uu) {
      if (!Cu()) return null;
      try {
        const Eu = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await cu(uu, Eu), Eu
      } catch (Eu) {
        if (function(uu) {
            return uu instanceof DOMException && "AbortError" === uu.name
          }(Eu)) return null;
        throw Eu
      }
    }

    function Du(uu) {
      return uu.startsWith(".") || fu.has(uu)
    }

    function gu(uu) {
      if (!uu) return !0;
      const Eu = uu.split("/");
      for (const ju of Eu)
        if ("" === ju || "." === ju || ".." === ju) return !1;
      return !0
    }
    async function Mu(uu, Eu, ju) {
      for await (const [Zu, Xu] of uu.entries()) {
        if ("directory" === Xu.kind) {
          if (Du(Zu)) continue;
          const uu = Eu ? `${Eu}/${Zu}` : Zu;
          if (!gu(uu)) continue;
          await Mu(Xu, uu, ju);
          continue
        }
        const uu = Eu ? `${Eu}/${Zu}` : Zu;
        if (!(0, su.m)(uu) && !(0, Uu.b)(uu)) continue;
        const lu = await Xu.getFile();
        ju[uu] = (0, Uu.b)(uu) ? await ku(lu) : await lu.text()
      }
    }
    async function eu(uu) {
      const Eu = {};
      return await Mu(uu, "", Eu), Eu
    }

    function Gu(uu) {
      return !(!uu || uu !== uu.trim() || uu.startsWith("/") || uu.includes("\\") || uu.includes("\0")) && gu(uu)
    }
    async function pu(uu, Eu, ju) {
      const su = Eu.split("/"),
        Uu = su[su.length - 1];
      let Zu = uu;
      for (let Xu = 0; Xu < su.length - 1; Xu++) Zu = await Zu.getDirectoryHandle(su[Xu], {
        create: ju
      });
      return {
        dir: Zu,
        fileName: Uu
      }
    }
    async function wu(uu, Eu, ju) {
      if (!Gu(Eu)) throw new Error(`Refusing to write unsafe path: ${Eu}`);
      const {
        dir: su,
        fileName: Uu
      } = await pu(uu, Eu, !0), Zu = await su.getFileHandle(Uu, {
        create: !0
      }), Xu = await Zu.createWritable();
      await Xu.write(ju), await Xu.close()
    }
    async function Ju(uu, Eu, ju) {
      const su = await async function(uu, Eu) {
        if (!Gu(Eu)) return null;
        try {
          const {
            dir: ju,
            fileName: su
          } = await pu(uu, Eu, !1), Uu = await ju.getFileHandle(su), Zu = await Uu.getFile();
          return await Zu.text()
        } catch (ju) {
          if (ju instanceof DOMException && ("NotFoundError" === ju.name || "NotAllowedError" === ju.name)) return null;
          throw ju
        }
      }(uu, Eu);
      su !== ju && await wu(uu, Eu, ju)
    }
    async function du(uu, Eu, ju) {
      if (!(0, su.m)(Eu) && !(0, Uu.b)(Eu)) throw new Error(`Refusing to write non-allowlisted path: ${Eu}`);
      if ((0, Uu.b)(Eu)) {
        if (await mu(uu, Eu) === lu) throw new Error(`Move the binary schematic ${Eu} outside the linked folder before syncing its placeholder`)
      }
      await wu(uu, Eu, ju)
    }
    async function au(uu, Eu) {
      if (!Gu(Eu)) throw new Error(`Refusing to remove unsafe path: ${Eu}`);
      try {
        const {
          dir: ju,
          fileName: su
        } = await pu(uu, Eu, !1);
        await ju.removeEntry(su)
      } catch (ju) {
        if (ju instanceof DOMException && ("NotFoundError" === ju.name || "NotAllowedError" === ju.name)) return;
        throw ju
      }
    }
    async function Pu(uu, Eu) {
      if (!Gu(Eu)) return null;
      try {
        const ju = Eu.split("/");
        let su = uu;
        for (const uu of ju) su = await su.getDirectoryHandle(uu);
        return su
      } catch (ju) {
        if (ju instanceof DOMException && ("NotFoundError" === ju.name || "NotAllowedError" === ju.name)) return null;
        throw ju
      }
    }
    async function ou(uu, Eu) {
      if ((0, su.m)(Eu) || (0, Uu.b)(Eu)) {
        if ((0, Uu.b)(Eu)) {
          if (await mu(uu, Eu) === lu) throw new Error(`Refusing to remove a binary schematic: ${Eu}`)
        }
        await au(uu, Eu)
      }
    }
    async function ku(uu) {
      if (uu.size > 64) return lu;
      const Eu = await uu.text();
      return Array.from(Eu).some((uu => {
        const Eu = uu.charCodeAt(0);
        return Eu < 9 || Eu > 13 && Eu < 32 || 65533 === Eu
      })) ? lu : Eu
    }
    async function mu(uu, Eu) {
      try {
        const {
          dir: ju,
          fileName: su
        } = await pu(uu, Eu, !1);
        return await ku(await (await ju.getFileHandle(su)).getFile())
      } catch (ju) {
        if (ju instanceof DOMException && "NotFoundError" === ju.name) return null;
        throw ju
      }
    }
    async function vu(uu, Eu) {
      const ju = await eu(uu);
      for (const su of Object.keys(ju)) su in Eu || (0, Uu.b)(su) || await ou(uu, su);
      for (const [Zu, Xu] of Object.entries(Eu))((0, su.m)(Zu) || (0, Uu.b)(Zu)) && await du(uu, Zu, Xu)
    }

    function Ku(uu, Eu) {
      var ju, su;
      let Uu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Zu = null !== (ju = Uu.debounceMs) && void 0 !== ju ? ju : 300,
        Xu = null !== (su = Uu.pollMs) && void 0 !== su ? su : 1e3;
      let lu = !1,
        qu = null,
        fu = null,
        Cu = null;
      const bu = () => {
          lu || (qu && clearTimeout(qu), qu = setTimeout((() => {
            qu = null, cu()
          }), Zu))
        },
        cu = async () => {
          if (!lu) try {
            if (!await Yu(uu, "readwrite")) return;
            const ju = await eu(uu);
            lu || Eu(ju)
          } catch (ju) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", ju)
          }
        };
      cu();
      const Nu = window.FileSystemObserver;
      if (Nu) try {
        Cu = new Nu((() => {
          bu()
        })), Cu.observe(uu, {
          recursive: !0
        })
      } catch (Ou) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", Ou), Cu = null
      }
      return Cu || (fu = setInterval((() => {
        bu()
      }), Xu)), () => {
        lu = !0, qu && clearTimeout(qu), fu && clearInterval(fu), Cu && Cu.disconnect()
      }
    }
  },
  4997: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => hu,
      e: () => Du
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(58),
      Xu = ju(1244),
      lu = ju(4999),
      qu = ju(1964),
      fu = ju(2543),
      Cu = ju(5003),
      bu = ju(1154);
    const cu = new WeakMap;
    let Nu = 0;

    function Ou(uu) {
      let Eu = cu.get(uu);
      return void 0 === Eu && (Eu = Nu++, cu.set(uu, Eu)), Eu
    }

    function Yu(uu) {
      let {
        piece: Eu
      } = uu;
      return "space" === Eu.kind ? (0, bu.jsx)(bu.Fragment, {
        children: Eu.text
      }) : (0, bu.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Eu.delayMs}ms`
        },
        children: (0, bu.jsx)(lu.e, {
          text: "icon" === Eu.kind ? `[[${Eu.icon}]]` : Eu.text
        })
      })
    }

    function hu(uu) {
      let {
        display: Eu
      } = uu;
      const {
        selectedLanguage: ju
      } = (0, Xu.A)(), su = (0, Zu.useMemo)((() => (0, Cu.e)((0, Cu.i)(Eu).plan.pieces)), [Eu, ju.code]);
      return (0, bu.jsxs)("div", {
        className: Uu()("Dialogue", {
          DialogueAnimateIn: !1 !== Eu.animateIn
        }),
        children: [Eu.speakerName && (0, bu.jsx)(qu.d, {
          text: Eu.speakerName,
          className: "DialogueSpeaker"
        }), (0, bu.jsx)("p", {
          className: "DialogueLine",
          children: su.map(((uu, Eu) => 1 === uu.length && "space" === uu[0].kind ? uu[0].text : (0, bu.jsx)("span", {
            className: "DialogueGlue",
            children: uu.map(((uu, Eu) => (0, bu.jsx)(Yu, {
              piece: uu
            }, Eu)))
          }, Eu)))
        })]
      })
    }
    const Du = (0, Zu.memo)((function() {
      const uu = (0, fu.h)("dialogue");
      return (0, bu.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: uu && (0, bu.jsx)(hu, {
          display: uu
        }, Ou(uu))
      })
    }))
  },
  37061: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Yu,
      f: () => hu
    });
    var su = ju(58),
      Uu = ju(1499),
      Zu = ju(2027),
      Xu = ju(37011),
      lu = ju(649),
      qu = ju(1105),
      fu = ju.n(qu),
      Cu = ju(1154);
    const bu = [cu()];

    function cu() {
      return {
        source: null,
        direction: null,
        qI: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Nu(uu) {
      return bu.find((Eu => null !== Eu.source && Eu.source === uu))
    }

    function Ou(uu) {
      clearTimeout(uu.timeout), uu.source = null, uu.direction = null, uu.writtenAngle = null, uu.qI && (uu.qI.style.rotate = "")
    }
    const Yu = (0, su.memo)((function() {
      const [, uu] = (0, su.useReducer)((uu => uu + 1), 0);
      return (0, Uu.f)("damagedByOtherPlayer", (Eu => {
        let {
          Dj: ju,
          direction: su
        } = Eu;
        const Uu = ju || "nonDirectional",
          Zu = function(uu) {
            var Eu;
            const ju = null !== (Eu = Nu(uu)) && void 0 !== Eu ? Eu : bu.find((uu => null === uu.source));
            if (ju) return ju;
            const su = {
              source: null,
              direction: null,
              qI: null,
              timeout: void 0,
              writtenAngle: null
            };
            return bu.push(su), su
          }(Uu);
        clearTimeout(Zu.timeout), Zu.source = Uu, Zu.direction = su, Zu.timeout = setTimeout((() => {
          Ou(Zu), uu()
        }), 800), uu()
      })), (0, Zu.b)("kill", (Eu => {
        let {
          killer: ju,
          victim: su
        } = Eu;
        const Uu = ju.local && Nu(su.id);
        Uu && (Ou(Uu), uu())
      })), (0, su.useEffect)((() => {
        const uu = (0, Xu.d)("turnDamageIndicators", hu);
        return () => {
          uu(), bu.forEach(Ou)
        }
      }), []), (0, Cu.jsx)("div", {
        className: "DirectionalDamage",
        children: bu.map(((uu, Eu) => (0, Cu.jsx)("div", {
          ref: Eu => {
            uu.qI = Eu
          },
          className: fu()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, lu.H)(uu.direction),
            DamageIndicatorIdle: null === uu.source
          })
        }, Eu)))
      })
    }));

    function hu(uu) {
      for (const Eu of bu) {
        if (null === Eu.source || (0, lu.H)(Eu.direction)) continue;
        const ju = Eu.direction - uu;
        ju !== Eu.writtenAngle && (Eu.writtenAngle = ju, Eu.qI.style.rotate = `${ju}rad`)
      }
    }
  },
  8997: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => mu,
      h: () => au,
      i: () => Pu
    });
    var su = ju(58),
      Uu = ju(4726),
      Zu = ju(1178),
      Xu = ju(1499),
      lu = ju(24),
      qu = ju(3620),
      fu = ju(2338),
      Cu = ju(1298),
      bu = ju(2690),
      cu = ju(1986),
      Nu = ju(2027),
      Ou = ju(1244),
      Yu = ju(22),
      hu = ju(1687),
      Du = ju(1105),
      gu = ju.n(Du),
      Mu = ju(9006),
      eu = ju(9013),
      Gu = ju(9015),
      pu = ju(8933),
      wu = ju(9017),
      Ju = (ju(9026), ju(1154));
    let du = null;

    function au() {
      return null !== du
    }

    function Pu() {
      return "pad" === du
    }

    function ou() {
      return "inGame" === Yu.d.get("gameState") && !(0, hu.s)()
    }

    function ku(uu) {
      return (0, eu.q)(uu, Cu.n, eu.f, eu.h, eu.i)
    }
    const mu = (0, su.memo)((function() {
      const {
        t: uu
      } = (0, Ou.A)(), {
        userContext: Eu
      } = (0, Zu.c)(), [ju, Yu] = (0, su.useState)(null), [Du, au] = (0, su.useState)(null), Pu = (0, su.useRef)(null), mu = (0, su.useCallback)((uu => {
        Pu.current = uu, au(uu)
      }), []), vu = (0, su.useRef)(0), Ku = (0, su.useRef)(null), Vu = (0, su.useRef)({
        x: 0,
        y: 0
      }), [ru, Qu] = (0, su.useState)(0), iu = (0, su.useMemo)((() => function(uu) {
        const Eu = [];
        for (let su = 0; su < Cu.n; su++) {
          var ju;
          Eu.push(null !== (ju = uu[su]) && void 0 !== ju ? ju : null)
        }
        return Eu
      }((0, bu.f)(Eu.getPlayerCosmetics().emote))), [Eu, ru]);
      (0, Nu.b)("cosmeticsUpdated", (uu => {
        uu.some((uu => uu.local && "emote" === uu.iZ)) && Qu((uu => uu + 1))
      }));
      const Wu = (0, su.useRef)(!1),
        Su = (0, su.useCallback)((function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === uu && (0, Gu.g)(), Wu.current = Eu, Vu.current = {
            x: 0,
            y: 0
          }, mu(null), Yu(uu)
        }), [mu]),
        Iu = (0, su.useCallback)((() => {
          Yu(null), mu(null), Vu.current = {
            x: 0,
            y: 0
          }
        }), [mu]),
        Fu = (0, su.useCallback)((uu => {
          if (Date.now() < vu.current) return;
          const Eu = (0, fu.k)(uu),
            ju = !!Eu.holdUntilMove,
            su = ju ? 600 : Math.ceil(1e3 * Eu.animation.animation_length / fu.e) + 200;
          vu.current = Date.now() + su, Ku.current = uu, cu.gameBridge.send("playEmote", uu), cu.gameBridge.send("applyTemporaryThirdPerson", ju ? {} : {
            durationMs: su
          })
        }), []);
      (0, Xu.f)("requestToggleEmoteWheel", (() => {
        null === ju ? ou() && Su("click") : Iu()
      })), (0, Xu.f)("requestEmoteWheelHoldOpen", (() => {
        null === ju && ou() && Su((0, Mu.c)() ? "hold" : "click")
      })), (0, Xu.f)("requestEmoteWheelPadOpen", (uu => {
        null !== ju || !ou() || (0, pu.d)() || (0, wu.o)() || Su("pad", uu)
      })), (0, Xu.f)("requestEmoteRepeatLast", (() => {
        if (null !== ju || !ou() || (0, pu.d)() || (0, wu.o)()) return;
        const uu = Ku.current;
        null !== uu && iu.includes(uu) ? Fu(uu) : Su("pad", !0)
      }));
      const Bu = () => {
        const uu = Pu.current,
          Eu = null !== uu ? iu[uu] : null;
        null !== Eu && "pad" === ju && Date.now() < vu.current || (Iu(), null !== Eu && Fu(Eu))
      };
      (0, Xu.f)("emoteWheelPadAim", (uu => {
        if ("pad" !== ju) return;
        const Eu = (0, eu.y)(uu, Cu.n, Pu.current);
        mu(null !== Eu && null !== iu[Eu] ? Eu : null)
      })), (0, Xu.f)("requestEmoteWheelPadCommit", (uu => {
        "pad" !== ju || uu && Wu.current || Bu()
      })), (0, Xu.f)("appManagerUpdated|activeInputDevice", (uu => {
        null !== ju && "pad" === ju !== ("gamepad" === uu) && Iu()
      })), (0, su.useLayoutEffect)((() => (du = ju, (0, qu.z)("emoteWheel", "pad" === ju), lu.h.TY(qu.r), () => {
        du = null, (0, qu.z)("emoteWheel", !1), lu.h.TY(qu.r)
      })), [ju]), (0, Xu.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === ju && Bu()
      })), (0, Xu.f)("requestEmoteWheelClose", (() => {
        null !== ju && Iu()
      })), (0, Xu.f)("appManagerUpdated|gameState", (uu => {
        "inGame" !== uu && Iu()
      }));
      const Lu = () => {
        (0, hu.s)() && Iu()
      };
      if ((0, Xu.f)("appManagerUpdated|openEverythingMenuName", Lu), (0, Xu.f)("appManagerUpdated|openInGameMenuName", Lu), (0, Xu.f)("pointerLockUpdate", (uu => {
          uu || "hold" !== ju || Iu()
        })), (0, su.useEffect)((() => {
          if (null === ju) return;
          const uu = uu => {
            "Escape" === uu.key && (uu.stopImmediatePropagation(), uu.preventDefault(), Iu())
          };
          return document.addEventListener("keydown", uu, !0), () => {
            document.removeEventListener("keydown", uu, !0)
          }
        }), [ju, Iu]), (0, Uu.e)(!0, "click" === ju, "EmoteWheelOverlay"), (0, su.useEffect)((() => {
          if ("hold" === ju) return cu.gameBridge.send("holdEmoteWheel", !0), () => {
            cu.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [ju]), (0, su.useEffect)((() => {
          if ("hold" !== ju) return;
          const uu = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Eu = eu.n * uu,
            su = eu.l * uu,
            Uu = uu => {
              let ju = Vu.current.x + uu.movementX,
                Uu = Vu.current.y + uu.movementY;
              const Zu = Math.hypot(ju, Uu);
              if (Zu > Eu) {
                const uu = Eu / Zu;
                ju *= uu, Uu *= uu
              }
              Vu.current = {
                x: ju,
                y: Uu
              }, mu(function(uu, Eu, ju, su) {
                if (Math.hypot(uu, Eu) < ju) return null;
                const Uu = (0, eu.s)(uu, Eu, Cu.n);
                return null === su[Uu] ? null : Uu
              }(ju, Uu, su, iu))
            };
          return document.addEventListener("mousemove", Uu), () => {
            document.removeEventListener("mousemove", Uu)
          }
        }), [ju, iu, mu]), null === ju) return null;
      const tu = "hold" === ju || "pad" === ju,
        xu = null !== Du ? iu[Du] : null,
        Tu = null !== xu ? (0, fu.k)(xu).displayName : uu("emotes:pickEmote");
      return (0, Ju.jsx)("div", {
        className: gu()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === ju
        }),
        onMouseDown: uu => {
          uu.target === uu.currentTarget && Iu()
        },
        children: (0, Ju.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * eu.n + "rem",
            height: 2 * eu.n + "rem"
          },
          children: [(0, Ju.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${eu.j} ${eu.j}`,
            children: [iu.map(((Eu, ju) => {
              const su = null !== Eu,
                Uu = tu && ju === Du;
              return (0, Ju.jsx)("path", {
                d: ku(ju),
                className: gu()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Uu,
                  EmoteWheelWedgeDisabled: !su
                }),
                onClick: uu => {
                  uu.stopPropagation(), null !== Eu && (uu => {
                    Iu(), Fu(uu)
                  })(Eu)
                },
                "aria-label": null !== Eu ? (0, fu.k)(Eu).displayName : uu("emotes:emptySlot")
              }, ju)
            })), (0, Ju.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: eu.f,
              cy: eu.f,
              r: eu.i
            }), (0, Ju.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: eu.f,
              cy: eu.f,
              r: eu.h
            }), tu && null !== Du && (0, Ju.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: ku(Du)
            })]
          }), iu.map(((uu, Eu) => {
            const ju = null !== uu,
              su = tu && Eu === Du,
              Uu = (0, eu.u)(Eu, Cu.n),
              Zu = eu.c * Math.cos(Uu),
              Xu = eu.c * Math.sin(Uu);
            return (0, Ju.jsx)("div", {
              className: gu()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: su,
                EmoteWheelSlotIconDisabled: !ju
              }),
              style: {
                left: `calc(50% + ${Zu}rem)`,
                top: `calc(50% + ${Xu}rem)`,
                backgroundImage: ju ? `url(/textures/charSkins/previews/emote_${uu}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Eu)
          })), (0, Ju.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Tu
          })]
        })
      })
    }))
  },
  36940: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu
    });
    var su = ju(58),
      Uu = ju(65),
      Zu = ju(1244),
      Xu = ju(1105),
      lu = ju.n(Xu),
      qu = ju(1779),
      fu = ju(1116),
      Cu = ju(1330),
      bu = ju(1533),
      cu = ju(1710),
      Nu = ju(1524),
      Ou = ju(1154);
    const Yu = 14;

    function hu(uu) {
      let {
        className: Eu,
        triggerElementRef: ju,
        options: Xu
      } = uu;
      const {
        t: hu
      } = (0, Zu.A)(), [Du, gu] = (0, su.useState)(!1), [Mu, eu] = (0, su.useState)({
        x: 0,
        y: 0
      }), Gu = (0, su.useRef)(null);
      (0, su.useEffect)((() => {
        let uu = null;
        const Eu = Eu => {
            uu = {
              x: Eu.clientX,
              y: Eu.clientY
            }
          },
          su = Eu => {
            if (null === uu || !(0, Nu.d)(uu, Eu)) return;
            uu = null;
            const ju = Yu * (0, qu.getRemInPx)();
            eu({
              x: Math.min(Eu.clientX, window.innerWidth - ju - 5),
              y: Eu.clientY
            }), gu((uu => !uu))
          },
          Uu = uu => {
            var Eu;
            null !== (Eu = Gu.current) && void 0 !== Eu && Eu.contains(uu.relatedTarget) || gu(!1)
          },
          Zu = ju.current;
        return Zu.addEventListener("pointerdown", Eu), Zu.addEventListener("pointerup", su), Zu.addEventListener("mouseleave", Uu), () => {
          Zu.removeEventListener("pointerdown", Eu), Zu.removeEventListener("pointerup", su), Zu.removeEventListener("mouseleave", Uu)
        }
      }), [ju]), (0, su.useEffect)((() => {
        if (Du) return (0, cu.b)("pointerdown", (uu => {
          !Gu.current || Gu.current.contains(uu.target) || ju.current.contains(uu.target) || gu(!1)
        }))
      }), [Du, ju]), (0, su.useLayoutEffect)((() => {
        if (!Du || !Gu.current) return;
        const uu = Gu.current.getBoundingClientRect().height,
          Eu = Math.max(5, window.innerHeight - uu - 5);
        Mu.y > Eu && eu({
          x: Mu.x,
          y: Eu
        })
      }), [Du, Mu]), (0, Cu.w)("popup", Gu, (() => {
        gu(!1)
      }), Du);
      const pu = Xu.filter((uu => !1 !== uu.show));
      return Du && 0 !== pu.length ? (0, Uu.createPortal)((0, Ou.jsx)("div", {
        ref: Gu,
        className: lu()("FloatingActions", {
          [Eu]: Eu
        }),
        style: {
          width: `${Yu}rem`,
          top: Mu.y,
          left: Mu.x
        },
        children: pu.map((uu => {
          let {
            icon: Eu,
            text: ju,
            onPointerDown: su,
            analyticsClick: Uu
          } = uu;
          return (0, Ou.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: uu => {
              void 0 !== Uu && (0, bu.reportAnalyticsClick)(Uu), su(uu), gu(!1), uu.stopPropagation()
            },
            children: [(0, Ou.jsx)(fu.e, {
              name: Eu
            }), (0, Ou.jsx)("div", {
              children: hu(ju)
            })]
          }, ju)
        }))
      }), function() {
        var uu;
        return null !== (uu = document.querySelector(".WholeAppWrapperInner")) && void 0 !== uu ? uu : document.body
      }()) : null
    }
  },
  37078: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => XX
    });
    var su = ju(36990),
      Uu = ju(58),
      Zu = ju(2130),
      Xu = ju(4719),
      lu = ju(4723),
      qu = ju(2543),
      fu = ju(1986),
      Cu = ju(1154);

    function bu(uu) {
      let {
        className: Eu,
        style: ju,
        vw: su,
        maxPx: Uu,
        children: Zu
      } = uu;
      console.assert("number" === typeof su && "number" === typeof Uu, "vw and maxPx passed to Text must be numbers");
      const Xu = window.innerWidth * (su / 100) > Uu ? `${Uu}px` : `${su}vw`;
      return (0, Cu.jsx)("div", {
        className: Eu,
        style: {
          ...ju,
          fontSize: Xu
        },
        children: Zu
      })
    }
    var cu = ju(37080),
      Nu = ju(1506),
      Ou = ju(24),
      Yu = ju(2011),
      hu = ju(1116);

    function Du(uu) {
      let {
        tasks: Eu,
        lastDisplayedTasks: ju
      } = uu;
      return (0, Cu.jsx)(Cu.Fragment, {
        children: Object.keys(Eu).map((uu => (0, Cu.jsx)(gu, {
          task: Eu[uu],
          lastDisplayedAs: ju[uu]
        }, Eu[uu].text)))
      })
    }

    function gu(uu) {
      let {
        task: Eu,
        lastDisplayedAs: ju
      } = uu;
      const [su, Zu] = (0, Uu.useState)(null !== ju && void 0 !== ju && ju.progress ? ju.progress / Eu.goal : 0), [Xu, lu] = (0, Uu.useState)(!1), [qu, fu] = (0, Uu.useState)(Eu.claimed || !1);
      return (0, Uu.useEffect)((() => {
        Zu(Eu.progress / Eu.goal)
      }), [Eu.progress, Eu.goal]), qu ? null : (0, Cu.jsxs)("div", {
        className: "Task",
        children: [(0, Cu.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Cu.jsx)(bu, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: Eu.text
          })
        }), Eu.progress < Eu.goal ? (0, Cu.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== su ? (0, Cu.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * su + "%"
            }
          }) : null, (0, Cu.jsx)("div", {
            className: "TaskProgressText",
            children: `${Eu.progress}/${Eu.goal}`
          })]
        }) : (0, Cu.jsx)(Nu.p, {
          className: "ClaimRewardButton",
          onClick: () => {
            lu(!0)
          },
          children: (0, Cu.jsx)(bu, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Xu ? (0, Cu.jsx)(Mu, {
          task: Eu,
          close: () => {
            Eu.claimed = !0, fu(!0), lu(!1)
          }
        }) : null]
      })
    }

    function Mu(uu) {
      let {
        task: Eu,
        close: ju
      } = uu;
      const [su, Zu] = (0, Uu.useState)({}), [Xu, lu] = (0, Uu.useState)("closed");
      (0, Uu.useEffect)((() => {
        let uu;
        return "animStart" === Xu && (uu = setTimeout((() => {
          lu("animEnd")
        }), 700)), () => {
          clearTimeout(uu)
        }
      }), [Xu]), (0, cu.d)((() => {
        fu.gameBridge.send("completeTask", Eu.text)
      }));
      const bu = (0, qu.h)("currencyAmounts");
      return (0, Cu.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Xu)
            if (0 === Eu.rewards.length) ju(), fu.gameBridge.send("completeTask", Eu.text);
            else {
              const uu = {
                ...Yu.e.get("currencyAmounts")
              };
              for (const Eu in su) uu[Eu] = {
                ...uu[Eu],
                amount: uu[Eu].amount + su[Eu]
              };
              Yu.e.apply({
                currencyAmounts: uu
              }), lu("closed")
            }
          else "closed" === Xu && (Zu(Eu.rewards.pop()), lu("animStart"))
        },
        children: [(0, Cu.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Xu ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Xu?"open":"closed"}.png`
        }), (0, Cu.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Xu ? Object.keys(su).map((uu => {
            const Eu = null === bu || void 0 === bu ? void 0 : bu[uu];
            return !Eu || Eu.hidden ? null : (0, Cu.jsxs)("div", {
              className: "Reward",
              children: [(0, Cu.jsx)(hu.e, {
                name: Eu.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: Eu.iconColour
                }
              }), (0, Cu.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Xu ? 0 : su[uu]
              })]
            }, uu)
          })) : null
        }), "animStart" === Xu ? (0, Cu.jsx)(eu, {}) : null, (0, Cu.jsx)("div", {
          className: "ChestsLeft",
          children: Eu.rewards.length
        })]
      })
    }

    function eu() {
      const [uu, Eu] = (0, Uu.useState)(0);
      (0, Uu.useEffect)((() => {
        Eu(1)
      }), []);
      return (0, Cu.jsx)(Cu.Fragment, {
        children: Array.from({
          length: 40
        }).map(((Eu, ju) => (0, Cu.jsx)(hu.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * uu * Math.cos(ju / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * uu * Math.sin(ju / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === uu ? 1 : 0
          }
        }, ju)))
      })
    }
    Ou.h.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const uu = new Image,
          Eu = new Image;
        uu.src = "/textures/miscImages/Treasure Chest open.png", Eu.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Gu = ju(3309),
      pu = ju(1178),
      wu = ju(1964),
      Ju = ju(1499),
      du = ju(349),
      au = ju(2027),
      Pu = ju(1393);

    function ou(uu) {
      var Eu, ju;
      let {
        byId: su,
        localId: Uu
      } = uu;
      return null === Uu ? null : null !== (Eu = null === (ju = su[Uu]) || void 0 === ju ? void 0 : ju.name) && void 0 !== Eu ? Eu : null
    }

    function ku(uu) {
      let {
        lbStats: Eu,
        storedState: ju = {}
      } = uu;
      const {
        userContext: su
      } = (0, pu.c)(), Zu = (0, au.d)("players", ou), [Xu, lu] = (0, Uu.useState)(ju.selectedCat || (null === Eu || void 0 === Eu ? void 0 : Eu[0]) || null), [qu, bu] = (0, Uu.useState)(ju.selectedTimeframe || "Today"), [cu, Nu] = (0, Uu.useState)(null);
      (0, Uu.useEffect)((() => {
        null === Xu && null !== Eu && Eu.length > 0 && lu(Eu[0])
      }), [Eu, Xu]);
      const [Ou, Yu] = (0, Uu.useState)(ju.seeingTop || !1), [hu, Du] = (0, Uu.useState)(!1), gu = (0, Uu.useCallback)((() => {
        null !== Xu && null !== qu && (fu.gameBridge.send("requestLeaderboard", {
          category: Xu.value,
          timeframe: qu,
          seeTop: Ou
        }), eu(!0), Ku && Vu(null))
      }), [Xu, qu, ju, Ou]);
      (0, Uu.useEffect)((() => {
        gu(), ju.selectedCat = Xu, ju.selectedTimeframe = qu, ju.seeingTop = Ou
      }), [Xu, qu, ju, Ou, gu]), (0, Uu.useEffect)((() => {
        if ((null === cu || void 0 === cu ? void 0 : cu.length) > 0)
          if (Ou) Ou && Du(null === ku(cu));
          else {
            for (const uu of cu)
              if (1 === uu.place) return void Du(!1);
            Du(!0)
          }
      }), [cu, Ou]), (0, Ju.f)("leaderboardResponse", (uu => {
        let {
          category: ju,
          timeframe: su,
          data: Uu
        } = uu;
        for (let Zu = 0; Zu < Eu; Zu++)
          if (Eu[Zu].value === ju) {
            lu(Eu[Zu]);
            break
          } bu(su), Nu(Uu), eu(!1)
      }));
      const [Mu, eu] = (0, Uu.useState)(!0);

      function ku(uu) {
        const Eu = ou(fu.gameBridge.latest("players"));
        for (let ju = 0; ju < uu.length; ju++)
          if (uu[ju].name === Eu) return uu[ju].place;
        return null
      }
      const [mu, vu] = (0, Uu.useState)(!1), [Ku, Vu] = (0, Uu.useState)(null);
      (0, Uu.useEffect)((() => {
        if (cu && !mu) {
          const uu = ku(cu);
          uu < (ju.lastSeenPlayerPlace || 0) && Vu(ju.lastSeenPlayerPlace - uu), vu(!0)
        }
      }), [cu, ju, mu]), (0, Uu.useEffect)((() => () => {
        cu && (ju.lastSeenPlayerPlace = ku(cu))
      }), [cu, ju]);
      const ru = (0, Uu.useRef)(null),
        [Qu, iu] = (0, Uu.useState)(void 0);
      return (0, Uu.useEffect)((() => {
        var uu, Eu;
        Qu !== (null === (uu = ru.current) || void 0 === uu ? void 0 : uu.offsetHeight) && iu(null === (Eu = ru.current) || void 0 === Eu ? void 0 : Eu.offsetHeight)
      })), su.isLoggedIn() ? (0, Cu.jsxs)(Cu.Fragment, {
        children: [(0, Cu.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Cu.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Cu.jsx)(Gu.c, {
              options: Eu.map((uu => ({
                label: uu.label,
                value: uu.value
              }))),
              value: Xu,
              onChange: uu => {
                lu(uu)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Cu.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Cu.jsx)(Gu.c, {
              options: du.Sc.map((uu => ({
                value: uu,
                label: uu,
                className: "LBDropdownMenuItem"
              }))),
              value: qu,
              onChange: uu => {
                bu(uu.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), hu ? (0, Cu.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Yu(!Ou)
            },
            children: Ou ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Cu.jsx)("div", {
          className: "LBTableWrapper",
          children: Mu ? (0, Cu.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Cu.jsx)(Pu.b, {})
          }) : null === Ku ? (0, Cu.jsx)(Cu.Fragment, {
            children: (0, Cu.jsxs)("table", {
              className: "LBTable",
              children: [(0, Cu.jsx)("thead", {
                className: "LBTableTHead",
                ref: ru,
                children: (0, Cu.jsxs)("tr", {
                  children: [(0, Cu.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Cu.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Cu.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Xu.label.toUpperCase()
                  })]
                })
              }), (0, Cu.jsx)("tbody", {
                children: cu.map((uu => (0, Cu.jsxs)("tr", {
                  className: "LBTableTR " + (uu.name === Zu ? "LBTableTRYou" : ""),
                  children: [(0, Cu.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${uu.place}`
                  }), (0, Cu.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Cu.jsx)(wu.d, {
                      text: [{
                        entityName: uu.name
                      }]
                    })
                  }), (0, Cu.jsx)("td", {
                    className: "LBTableTD",
                    children: uu.stat
                  })]
                }, uu.name)))
              })]
            })
          }) : (0, Cu.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Vu(null)
            },
            children: (0, Cu.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Cu.jsx)("div", {
                className: "TriangleUp"
              }), (0, Cu.jsx)("div", {
                className: "LBIncreaseText",
                children: `${Ku} Place${Ku>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Cu.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Cu.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Cu.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var mu = ju(3285),
      vu = ju(91),
      Ku = ju(31),
      Vu = ju(3613);
    const ru = (0, Uu.memo)((function(uu) {
      let {
        show: Eu,
        onClose: ju
      } = uu;
      (0, mu.d)();
      const su = (0, qu.h)("_tasks"),
        Zu = (0, qu.h)("_availableLeaderboards"),
        [fu, bu] = (0, Uu.useState)({});
      su && Object.keys(su).length > 0 && 0 === Object.keys(fu).length && bu(su);
      const [cu] = (0, Uu.useState)({
        tasks: {},
        leaderboard: {}
      }), Nu = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!su && Object.keys(su).length > 0,
          content: (0, Cu.jsx)(Du, {
            tasks: su,
            lastDisplayedTasks: fu
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Zu || void 0 === Zu ? void 0 : Zu.length) > 0,
          content: (0, Cu.jsx)(ku, {
            lbStats: Zu,
            storedState: cu.leaderboard
          })
        }
      };

      function Ou() {
        for (const uu in Nu)
          if (Nu[uu].getIsDefined()) return uu;
        return null
      }
      const [Yu, hu] = (0, Uu.useState)(Ou());

      function gu() {
        bu({
          ...su
        }), ju()
      }(0, Uu.useEffect)((() => {
        Yu || hu(Ou())
      }), [Ou()]), (0, lu.e)(!0, Yu && Eu), (0, Uu.useEffect)((() => {
        Eu && !Yu && (console.log("CLOSE"), gu())
      }), [Eu, Yu]);
      const [Mu, eu] = (0, Uu.useState)(!1);
      return (0, Uu.useEffect)((() => {
        Eu && Yu && !Mu && eu(!0)
      }), [Eu, Mu, Yu]), (0, Uu.useEffect)((() => {
        !Mu && su && "tasks" !== Yu && hu("tasks")
      }), [Mu, su, Yu]), (0, Cu.jsx)(Cu.Fragment, {
        children: Yu ? (0, Cu.jsx)(Vu.b, {
          className: "RetentionFeaturesWrapper",
          show: Eu,
          children: (0, Cu.jsxs)(Xu.c, {
            close: gu,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Cu.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Cu.jsx)(iu, {}), (0, Cu.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Cu.jsx)(Qu, {
                  setCategory: hu,
                  menuCategories: Nu,
                  selectedCat: Yu
                }), (0, Cu.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Nu[Yu].content
                })]
              })]
            }), (0, Cu.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: vu.featureFlags.useDiscord && (0, Cu.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Cu.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Cu.jsx)(Wu, {
                    tasks: su
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Qu(uu) {
      let {
        selectedCat: Eu,
        setCategory: ju,
        menuCategories: su
      } = uu;
      return (0, Cu.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(su).map((uu => su[uu].getIsDefined() ? (0, Cu.jsx)("div", {
          className: "MenuHeaderCategory " + (uu === Eu ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            ju(uu)
          },
          children: su[uu].Title
        }, uu) : null))
      })
    }

    function iu() {
      const uu = (0, qu.h)("currencyAmounts");
      return (0, Cu.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== uu && void 0 !== uu ? uu : {}).map((Eu => {
          const ju = uu[Eu];
          return ju.hidden ? null : (0, Cu.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Cu.jsx)(hu.e, {
              name: ju.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: ju.iconColour
              }
            }), (0, Cu.jsx)("div", {
              className: "UiCurrencyAmount",
              children: ju.amount
            })]
          }, Eu)
        }))
      })
    }

    function Wu(uu) {
      let {
        tasks: Eu
      } = uu;
      return (0, Cu.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Cu.jsx)(hu.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            Ku.k.setItem("DiscordPressed", !0), fu.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in Eu && Ou.h.TY("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Cu.jsx)(Zu.d, {})]
      })
    }
    var Su = ju(22),
      Iu = ju(1687),
      Fu = ju(36919),
      Bu = ju(34457),
      Lu = ju(4809),
      tu = ju(166),
      xu = ju(1268),
      Tu = ju(1419),
      Hu = ju(2777),
      Au = ju(1244),
      nu = ju(1693),
      yu = ju(2504),
      zu = ju(2488),
      Ru = ju(1906),
      uE = ju(2091),
      EE = ju(1314),
      jE = ju(1533),
      sE = ju(37087),
      UE = ju(37091),
      ZE = ju(37099),
      XE = ju(37101),
      lE = ju(37109),
      qE = ju(2848);

    function fE(uu) {
      let {
        playersHere: Eu,
        exclude: ju,
        lG: su
      } = uu;
      const {
        t: Zu
      } = (0, Au.A)(), Xu = (0, qE.n)(qE.h), [lu, qu] = (0, Uu.useState)([]), fu = [], bu = (uu, Eu) => {
        const su = [...ju, ...fu.map((uu => uu.player.name))];
        fu.length < 3 && !(0, UE.l)(su, uu.name) && fu.push({
          player: uu,
          status: Eu
        })
      };
      for (const Uu of Eu) bu((0, lE.h)(Uu.name, Uu.cosmetics, Uu.ranks), Zu("worldSocial:inThisWorld"));
      if ("loaded" === Xu.state.status)
        for (const Uu of Xu.state.recentPlayers) Uu.preview.name && !Uu.preview.isError && bu({
          ...Uu.preview,
          location: {
            status: "offline"
          }
        }, Zu("worldSocial:playedWithYou"));
      const cu = uu => {
        qu((Eu => [...Eu, uu])), su(uu).finally((() => {
          qu((Eu => Eu.filter((Eu => Eu !== uu))))
        }))
      };
      return (0, Cu.jsx)(Cu.Fragment, {
        children: fu.map(((uu, Eu) => {
          let {
            player: ju,
            status: su
          } = uu;
          return (0, Cu.jsx)(lE.f, {
            zIndex: fu.length - Eu,
            player: ju,
            status: su,
            onSendFriendRequest: () => {
              cu(ju.name)
            },
            actions: (0, Cu.jsx)(Tu.e, {
              tooltipInner: (0, Cu.jsx)(Cu.Fragment, {
                children: Zu("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Cu.jsx)(Nu.f, {
                className: "FriendRequestButton",
                disabled: lu.includes(ju.name),
                ariaLabel: `${Zu("recentPlayers:addFriend")} ${ju.name}`,
                onClick: () => {
                  cu(ju.name)
                },
                children: (0, Cu.jsx)(hu.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${ju.name}`)
        }))
      })
    }
    var CE = ju(37123),
      bE = ju(37130),
      cE = ju(1278),
      NE = ju(1555),
      OE = ju(4492),
      YE = ju(284),
      hE = ju(4794);
    const DE = ["auto", "auto_existing"];

    function gE(uu) {
      return DE.includes(uu)
    }

    function ME(uu, Eu) {
      const ju = (0, cE.tb)(uu);
      return null !== Eu && (0, cE.tb)(Eu) === ju || (0, hE.d)().some((uu => (0, cE.tb)(uu.name) === ju))
    }
    const eE = new Set;

    function GE(uu) {
      return `worldSocialSeen:${uu}`
    }

    function pE(uu) {
      return !uu || eE.has(uu) || !0 === Ku.k.getItem(GE(uu))
    }

    function wE(uu) {
      uu && !eE.has(uu) && (eE.add(uu), Ku.k.setItem(GE(uu), !0))
    }
    var JE = ju(2552),
      dE = ju(2560);

    function aE(uu) {
      let {
        show: Eu,
        onClose: ju,
        opener: su
      } = uu;
      const {
        lobbyName: Zu,
        shownLobbyName: lu
      } = (0, au.f)("connectedGame");
      return (0, Uu.useEffect)((() => {
        Eu && (0, jE.reportAnalyticsClick)({
          id: "world_social.open",
          value: su
        })
      }), [Eu]), (0, Cu.jsx)(Xu.c, {
        show: Eu && null !== Zu,
        close: ju,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== su,
        children: Eu && null !== Zu && (0, Cu.jsx)(PE, {
          lobbyName: Zu,
          worldCode: null !== lu && void 0 !== lu ? lu : Zu,
          onClose: ju
        }, Zu)
      })
    }

    function PE(uu) {
      var Eu;
      let {
        lobbyName: ju,
        worldCode: su,
        onClose: Zu
      } = uu;
      const {
        t: Xu
      } = (0, Au.A)(), lu = (0, Uu.useRef)(null), {
        settings: qu,
        loading: fu,
        answered: bu,
        change: cu,
        retry: Ou
      } = (0, sE.k)(ju), Yu = (0, nu.m)(), Du = (0, au.f)("players"), gu = (0, au.f)("hiddenPlayerNames"), [Mu, eu] = (0, Uu.useState)([]), [Gu, wu] = (0, Uu.useState)([]), [Ju, du] = (0, Uu.useState)(!1), ou = (0, JE.b)(), ku = (0, Uu.useMemo)((() => {
        var uu, Eu;
        const ju = null === Du.localId ? null : null !== (uu = null === (Eu = Du.byId[Du.localId]) || void 0 === Eu ? void 0 : Eu.name) && void 0 !== uu ? uu : null;
        return Du.ids.flatMap((uu => {
          const Eu = Du.byId[uu];
          return null !== Eu && void 0 !== Eu && Eu.name && Eu.name !== ju ? [{
            name: Eu.name,
            cosmetics: Eu.cosmetics,
            ranks: Eu.ranks
          }] : []
        }))
      }), [Du]), mu = (0, Uu.useMemo)((() => (0, UE.i)(Yu.friends, ju, ku.map((uu => uu.name)))), [Yu.friends, ju, ku]), Ku = vu.featureFlags.canSeeRealPlayerNames ? ku.filter((uu => null === (0, EE.d)(uu.name, gu))) : [], Vu = null !== qu && void 0 !== qu && qu.canManage ? qu : null, ru = null !== Vu, Qu = null !== (Eu = null === qu || void 0 === qu ? void 0 : qu.visibility) && void 0 !== Eu ? Eu : null, iu = "whitelist" === (null === Vu || void 0 === Vu ? void 0 : Vu.visibility), Wu = "private" === Qu || "whitelist" === Qu && !ru, {
        userContext: Su
      } = (0, pu.c)();
      (0, Uu.useEffect)((() => {
        ru && ME(ju, Su.getPersonalWorldLobbyName()) && wE(Su.whamm)
      }), [ru, ju, Su]);
      const Iu = Wu ? Xu("whitelist" === Qu ? "socialBar:inviteWorldManagersOnly" : ru ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        Bu = null === Iu;
      (0, Uu.useEffect)((() => Wu ? void 0 : Ru.f.quietFriendAdded()), [Wu]), (0, Uu.useEffect)((() => Ru.f.quietFriendRequests()), []);
      const qE = (0, Uu.useRef)(!1);
      (0, Uu.useEffect)((() => {
        const uu = lu.current,
          Eu = !qE.current;
        qE.current = !0;
        const ju = null === document.activeElement || document.activeElement === document.body;
        null !== uu && void 0 !== uu && uu.contains(document.activeElement) || !Eu && !ju || (0, Fu.h)() || null === uu || void 0 === uu || uu.focus({
          preventScroll: !0
        })
      }), [Bu]), (0, Uu.useEffect)((() => {
        const uu = uu => {
          "Escape" !== uu.key || null !== document.activeElement && document.activeElement !== document.body || Zu()
        };
        return document.addEventListener("keydown", uu), () => {
          document.removeEventListener("keydown", uu)
        }
      }), [Zu]);
      const cE = null === qu && !bu,
        NE = (fu || Yu.loading) && 0 === Yu.friends.length,
        OE = Yu.friends.flatMap((uu => uu.name ? [uu.name] : [])),
        YE = Mu.filter((uu => !(0, UE.l)(OE, uu))),
        hE = mu.length + 3,
        DE = YE.length + hE,
        gE = Ju ? Yu.requests : Yu.requests.slice(0, 1),
        eE = async function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const ju of (0, UE.o)(uu, Lu.E)) {
            if (!await cu({
                whitelistAdd: ju
              }, (uu => (0, UE.r)(uu, ju, !0)), {
                quiet: Eu
              })) return !1
          }
          return !0
        }, GE = uu => {
          if (iu && Vu) return {
            on: (0, UE.l)(Vu.whitelist, uu),
            onChange: Eu => {
              (0, jE.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: Eu ? "on" : "off"
              }), cu(Eu ? {
                whitelistAdd: [uu]
              } : {
                whitelistRemove: uu
              }, (ju => (0, UE.r)(ju, [uu], Eu)))
            }
          }
        }, pE = async (uu, Eu) => {
          (0, jE.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: Eu
          });
          const ju = await (0, zu.j)(uu, "world_social");
          return (0, zu.e)(ju, uu, {
            announceSent: !1
          }), "failed" !== ju.kind && ("sent" === ju.kind && eu((Eu => (0, UE.l)(Eu, uu) ? Eu : [...Eu, uu])), iu && await eE([uu]), !0)
        };
      return (0, Cu.jsxs)("div", {
        ref: lu,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: uu => {
          uu.target === uu.currentTarget && " " === uu.key && uu.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Cu.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Cu.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Xu("worldSocial:title")
          }), (0, Cu.jsx)(Nu.l, {
            className: "WorldSocialClose",
            onClick: Zu
          })]
        }), cE && (0, Cu.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Cu.jsx)(Pu.b, {})
        }), !cE && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)(ZE.d, {
            worldCode: su,
            message: Iu
          }), null === qu && !fu && (0, Cu.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: Ou,
            children: Xu("worldSocial:loadFailed")
          }), ru && null !== Qu && (0, Cu.jsx)(XE.d, {
            visibility: Qu,
            onPick: uu => {
              (async uu => {
                if (uu === Qu) return;
                (0, jE.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: uu
                });
                const Eu = [...(0, bE.e)(ju), ...Gu],
                  su = "whitelist" === uu && qu ? (0, UE.e)(mu, Eu, qu.whitelist) : [];
                await cu({
                  setVisibility: uu
                }, (Eu => ({
                  ...Eu,
                  visibility: uu
                }))) && await eE(su)
              })(uu)
            }
          }), Yu.requests.length > 0 && (0, Cu.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Cu.jsx)(Hu.b, {
              label: (0, Cu.jsxs)(Cu.Fragment, {
                children: [(0, Cu.jsx)(hu.e, {
                  name: uE.f
                }), " ", Xu("socialBar:requests")]
              }),
              meta: (0, Cu.jsxs)(Cu.Fragment, {
                children: [Yu.requests.length, Yu.requests.length === xu.q && (0, Cu.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Xu("socialBar:limitReached")
                }), !Ju && Yu.requests.length > 1 && (0, Cu.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    du(!0)
                  },
                  children: Xu("worldSocial:moreRequests", {
                    count: Yu.requests.length - 1
                  })
                })]
              })
            }), (0, Cu.jsx)("div", {
              className: "PlayerRows",
              children: gE.map(((uu, Eu) => (0, Cu.jsx)(lE.f, {
                zIndex: gE.length - Eu,
                player: uu,
                actions: (0, Cu.jsxs)(Cu.Fragment, {
                  children: [(0, Cu.jsx)(Tu.e, {
                    tooltipInner: (0, Cu.jsx)(Cu.Fragment, {
                      children: Xu("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Cu.jsx)(Nu.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Xu("general:accept")} ${uu.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, zu.f)(uu.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Cu.jsx)(hu.e, {
                        name: "check"
                      })
                    })
                  }), (0, Cu.jsx)(Tu.e, {
                    tooltipInner: (0, Cu.jsx)(Cu.Fragment, {
                      children: Xu("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Cu.jsx)(Nu.i, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Xu("general:decline")} ${uu.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, zu.f)(uu.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Cu.jsx)(hu.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${uu.name}`)))
            })]
          }), (0, Cu.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Cu.jsx)(Hu.b, {
              label: (0, Cu.jsxs)(Cu.Fragment, {
                children: [(0, Cu.jsx)(hu.e, {
                  name: uE.c
                }), " ", Xu("socialBar:friends")]
              }),
              meta: Yu.loaded && !Wu ? Yu.friends.length : void 0
            }), (0, Cu.jsx)(CE.d, {
              label: Xu("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: Xu("worldSocial:addFriendPlaceholder"),
              onSubmit: async uu => await pE(uu, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), NE && (0, Cu.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Cu.jsx)(Pu.b, {})
            }), !NE && (0, Cu.jsxs)(Cu.Fragment, {
              children: [(0, Cu.jsxs)("div", {
                className: "PlayerRows",
                children: [YE.map(((uu, Eu) => (0, Cu.jsx)(lE.f, {
                  zIndex: DE - Eu,
                  player: (0, lE.h)(uu, null),
                  status: Xu("worldSocial:requestSent"),
                  Tb: GE(uu)
                }, `request:${uu}`))), !Wu && mu.map(((uu, Eu) => (0, Cu.jsx)(lE.c, {
                  zIndex: hE - Eu,
                  row: uu,
                  Tb: GE(uu.friend.name),
                  canInvite: (0, UE.b)(qu) && "here" !== uu.place,
                  invited: Gu.includes(uu.friend.name),
                  onInvite: () => {
                    (async uu => {
                      (0, jE.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const Eu = () => {
                        wu((Eu => Eu.filter((Eu => Eu !== uu))))
                      };
                      wu((Eu => [...Eu, uu]));
                      const su = (0, UE.q)(qu, uu);
                      if ("none" !== su) {
                        const ju = eE([uu], "quiet" === su);
                        if ("required" === su && !await ju) return void Eu()
                      }
                      await (0, yu.m)(uu, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, bE.h)(ju, uu), setTimeout(Eu, tu.m)) : Eu()
                    })(uu.friend.name)
                  }
                }, uu.friend.name))), Yu.loaded && 0 === Yu.friends.length && (0, Cu.jsx)(fE, {
                  playersHere: Ku,
                  exclude: Mu,
                  lG: uu => pE(uu, "suggestion")
                })]
              }), iu && Yu.loaded && 0 === Yu.friends.length && 0 === YE.length && (0, Cu.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Xu("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), ou && (0, Cu.jsxs)(Nu.$, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, dE.f)({
              page: "players",
              source: "invite_popup"
            }), Zu()
          },
          children: [(0, Cu.jsx)(hu.e, {
            name: "users-gear"
          }), " ", Xu("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var oE = ju(2596),
      kE = ju(2545);

    function mE(uu) {
      let {
        show: Eu,
        onClose: ju,
        option: su
      } = uu;
      const Zu = (0, au.d)("connectedGame", (uu => (0, oE.c)(uu) ? uu.lobbyName : null));
      return function(uu) {
        const {
          gameEntrySource: Eu,
          loadingOverlayVisible: ju
        } = (0, Su.l)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: su
        } = (0, pu.c)(), Zu = (0, au.f)("localPlayerAlive"), Xu = (0, au.d)("players", (uu => null !== uu.localId && void 0 !== uu.byId[uu.localId])), lu = (0, kE.n)(), qu = (0, Uu.useRef)(null), fu = (0, Uu.useRef)(null), Cu = "worldCreation" === Eu, bu = su.whamm, cu = su.getPersonalWorldLobbyName();
        (0, Uu.useEffect)((() => {
          var Eu;
          null !== uu && (null === (Eu = fu.current) || void 0 === Eu ? void 0 : Eu.lobbyName) !== uu && null !== rE(uu, Cu, bu, cu) && (fu.current = (0, sE.h)(uu))
        }), [Cu, uu, bu, cu]), (0, Uu.useEffect)((() => {
          if (null !== uu && (!ju && Zu && Xu)) return lu.whenShown((() => {
            var Eu;
            const ju = qu.current === uu ? null : rE(uu, Cu, bu, cu);
            if (null === ju) return;
            const su = (null === (Eu = fu.current) || void 0 === Eu ? void 0 : Eu.lobbyName) === uu ? fu.current : (0, sE.h)(uu);
            fu.current = null, qu.current = uu,
              function(uu, Eu, ju, su) {
                const {
                  lobbyName: Uu
                } = uu, Zu = () => {
                  ! function(uu, Eu) {
                    if (!IE()) return void Eu(!0);
                    const ju = performance.now() + WE;
                    let su = 0;
                    const Uu = () => {
                      su = IE() ? 0 : su + 1, su >= 2 ? Eu(!0) : !SE(uu) || performance.now() > ju ? Eu(!1) : setTimeout(Uu, iE)
                    };
                    setTimeout(Uu, iE)
                  }(Uu, (Zu => {
                    su();
                    const Xu = "auto_existing" === Eu && pE(ju);
                    Zu && SE(Uu) && !KE(Uu) && !Xu && (QE(uu) ? VE(Uu) : (VE(Uu), wE(ju), function(uu) {
                      const Eu = YE.d.world_social_popup_v1;
                      return (0, YE.k)("world_social_popup_v1"), (0, jE.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${Eu}:${(0,OE.e)()}:${uu}`
                      }), (0, NE.flushClientAnalyticsEvents)(), "auto_open" === Eu
                    }(Eu) && ((0, sE.e)(uu), Ou.h.TY("toggleMenu", `inviteLink|${Eu}`), "inviteLink" !== Su.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === Eu && !QE(uu)) return void Zu();
                uu.response.then((uu => {
                  if (!("error" in uu)) return uu.settings.canManage ? void Zu() : (VE(Uu), void su());
                  su()
                }))
              }(su, ju, bu, (() => {
                qu.current === uu && (qu.current = null)
              }))
          }))
        }), [lu, Cu, ju, uu, Zu, Xu, bu, cu])
      }(Zu), (0, Uu.useEffect)((() => {
        Eu && null !== Zu && VE(Zu)
      }), [Eu, Zu]), null !== Zu ? (0, Cu.jsx)(aE, {
        show: Eu,
        onClose: ju,
        opener: gE(su) ? su : "icon"
      }) : (0, Cu.jsx)(Bu.d, {
        show: Eu,
        onClose: ju
      })
    }
    const vE = new Set;

    function KE(uu) {
      return vE.has(uu) || !!Ku.l.getItem(`worldSocialShown:${uu}`)
    }

    function VE(uu) {
      vE.add(uu), Ku.l.setItem(`worldSocialShown:${uu}`, !0)
    }

    function rE(uu, Eu, ju, su) {
      return KE(uu) ? null : function(uu) {
        let {
          justMade: Eu,
          playerId: ju,
          lobbyName: su,
          personalWorld: Uu
        } = uu;
        return Eu ? "auto" : !pE(ju) && ME(su, Uu) ? "auto_existing" : null
      }({
        justMade: Eu,
        playerId: ju,
        lobbyName: uu,
        personalWorld: su
      })
    }

    function QE(uu) {
      let {
        answer: Eu
      } = uu;
      return null !== Eu && "settings" in Eu && !Eu.settings.canManage
    }
    const iE = 500,
      WE = 3e4;

    function SE(uu) {
      return "inGame" === Su.d.get("gameState") && fu.gameBridge.latest("connectedGame").lobbyName === uu
    }

    function IE() {
      return (0, Fu.h)() || Su.d.get("loadingOverlayVisible") || (0, Iu.s)()
    }
    var FE = ju(37139),
      BE = ju(3340),
      LE = ju(2040),
      tE = ju(3336);

    function xE(uu, Eu, ju) {
      return tE.d.overridesTexture(uu) ? tE.d.getTexture(uu, Eu).url : ju
    }
    var TE = ju(10180);
    const HE = (uu, Eu) => {
        (0, Uu.useEffect)((() => {
          setTimeout((() => {
            uu && uu.current && uu.current.focus()
          }), 1)
        }), [Eu])
      },
      AE = (0, Uu.memo)((function(uu) {
        let {
          isInputActive: Eu,
          onClose: ju,
          onChange: su,
          textAreaRef: Uu,
          fontSize: Zu,
          lineHeight: Xu,
          currText: lu
        } = uu;
        return (0, Cu.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Cu.jsx)("img", {
            src: xE("board_full", BE.i.BLOCK, TE),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Cu.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: lu,
            ref: Uu,
            style: {
              fontSize: `${Zu}rem`,
              lineHeight: `${Xu}rem`
            },
            onKeyDown: uu => {
              var Eu;
              "Escape" !== uu.key && (uu.stopPropagation(), "Tab" === uu.key && function(uu) {
                uu.preventDefault();
                const Eu = uu.target,
                  {
                    value: ju
                  } = Eu;
                let su = Eu.selectionStart,
                  Uu = Eu.selectionEnd,
                  Zu = ju.slice(su, Uu);
                if (!Zu.includes("\n") && !uu.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; su > 0 && "\n" !== ju[su - 1];) su--;
                const Xu = "\n" === ju[Uu - 1];
                Xu && Uu--;
                Zu = ju.slice(su, Uu);
                const lu = Zu.split("\n").map((Eu => uu.shiftKey ? Eu.replace(/^\t/, "") : "\t" + Eu)).join("\n");
                if (uu.shiftKey && ju.slice(su, Uu) === lu) return;
                let {
                  selectionStart: qu
                } = Eu;
                Eu.setSelectionRange(su, Uu), qu > su && (!uu.shiftKey || "\t" === Zu[0]) && (qu += uu.shiftKey ? -1 : 1);
                Uu = su + lu.length + (Xu ? 1 : 0), document.execCommand("insertText", !1, lu), Eu.setSelectionRange(qu, Uu)
              }(uu), /^F\d+$/i.test(uu.code) && null !== (Eu = LE.z.OpenCodeEditor) && void 0 !== Eu && Eu.includes(uu.code) && ju())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: su
          })]
        })
      }));

    function nE(uu) {
      return 1.3 * uu
    }
    var yE = ju(1727);
    const zE = (0, Uu.memo)((function(uu) {
        let {
          show: Eu,
          onOpen: ju,
          onClose: su
        } = uu;
        const [Zu, lu] = (0, Uu.useState)(null), [qu, bu] = (0, Uu.useState)(""), [cu, Ou] = (0, Uu.useState)(0), [Yu, hu] = (0, Uu.useState)(null), [Du, gu] = (0, Uu.useState)({
          text: "",
          textSize: 0
        }), Mu = (uu, Eu) => Yu ? (0, FE.k)(uu, Eu, Yu.width, Yu.height) : (0, FE.f)(uu, Eu), eu = uu => {
          bu(Mu(qu, uu)), Ou(uu), Ku.k.setItem("lastBoardTextSize", uu)
        }, Gu = () => {
          su(), Yu && qu === Du.text && cu === Du.textSize || fu.gameBridge.send("writeOnBoard", {
            pos: Zu,
            text: qu,
            textSize: cu
          })
        };
        (0, au.b)("boardEditRequested", (uu => {
          var Uu, Zu;
          if (!vu.featureFlags.canSeePlayerWrittenText) return;
          if (null === uu) return lu(null), void(Eu && su());
          const {
            pos: Xu,
            noticeboardSpan: qu,
            text: fu
          } = uu;
          lu(Xu), hu(qu), bu(fu);
          const Cu = null !== (Uu = null !== (Zu = uu.textSize) && void 0 !== Zu ? Zu : Ku.k.getItem("lastBoardTextSize")) && void 0 !== Uu ? Uu : 0;
          Ou(Cu), gu({
            text: fu,
            textSize: Cu
          }), Ku.k.setItem("lastBoardTextSize", Cu), ju()
        }));
        const pu = (0, Uu.useRef)(null);
        HE(pu, Eu), (0, yE.s)(pu, {
          kind: "sign",
          submit: Gu
        });
        const wu = function(uu, Eu) {
            const ju = FE.d[uu];
            if (!Eu) return ju.uiFontSize;
            const {
              numLines: su,
              charsPerLine: Uu
            } = (0, FE.n)(Eu.width, Eu.height, uu);
            return ju.uiFontSize * Math.min(ju.charsPerLine / Uu, ju.numLines / su)
          }(cu, Yu),
          Ju = nE(wu);
        return (0, Cu.jsxs)(Xu.c, {
          className: "WriteOnBoardBg",
          close: Gu,
          escDoesExit: !0,
          show: Eu,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Cu.jsx)(AE, {
            isInputActive: () => Eu,
            onClose: Gu,
            onChange: uu => {
              bu(Mu(uu.target.value, cu))
            },
            textAreaRef: pu,
            fontSize: wu,
            lineHeight: Ju,
            currText: qu
          }), (0, Cu.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Cu.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Cu.jsx)(Nu.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                eu(0)
              },
              disabled: 0 === cu,
              children: "Small"
            }), (0, Cu.jsx)(Nu.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                eu(1)
              },
              disabled: 1 === cu,
              children: "Medium"
            }), (0, Cu.jsx)(Nu.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                eu(2)
              },
              disabled: 2 === cu,
              children: "Large"
            })]
          })]
        })
      })),
      RE = (0, Uu.memo)((function(uu) {
        let {
          show: Eu,
          onOpen: ju,
          onClose: su
        } = uu;
        const [Zu, lu] = (0, Uu.useState)(""), qu = () => {
          su(), fu.gameBridge.send("writeNameTag", Zu)
        };
        (0, Ju.f)("EditNameTag", (uu => {
          vu.featureFlags.canSeePlayerWrittenText && null !== uu && (lu(uu), ju())
        }));
        const bu = (0, Uu.useRef)(null);
        HE(bu, Eu), (0, yE.s)(bu, {
          kind: "nameTag",
          submit: qu
        });
        const cu = FE.u.nameTag.uiFontSize,
          Ou = nE(cu);
        return (0, Cu.jsxs)(Xu.c, {
          className: "WriteOnBoardBg",
          close: qu,
          escDoesExit: !0,
          show: Eu,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Cu.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Cu.jsx)(AE, {
              isInputActive: () => Eu,
              onClose: qu,
              onChange: uu => {
                const Eu = uu.target.value.replaceAll("\n", "");
                lu((0, FE.l)(Eu, "nameTag"))
              },
              textAreaRef: bu,
              fontSize: cu,
              lineHeight: Ou,
              currText: Zu
            })
          }), (0, Cu.jsx)(Nu.f, {
            onClick: qu,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var uj = ju(18325);
    const Ej = (0, Uu.memo)((function(uu) {
      let {
        show: Eu,
        onOpen: ju,
        onClose: su
      } = uu;
      const [Zu, lu] = (0, Uu.useState)(""), [qu, bu] = (0, Uu.useState)(0), [cu, Ou] = (0, Uu.useState)(!1), [Yu, hu] = (0, Uu.useState)(["", "", "", "", "", "", "", "", "", ""]), [Du, gu] = (0, Uu.useState)("Title"), [Mu, eu] = (0, Uu.useState)(!0), [Gu, pu] = (0, Uu.useState)(!1);
      (0, Ju.f)("EditBook", (uu => {
        let {
          pages: Eu,
          title: su,
          isPublished: Uu
        } = uu;
        var Zu;
        vu.featureFlags.canSeePlayerWrittenText && (null !== Eu ? (hu(Eu), lu(null !== (Zu = Eu[0]) && void 0 !== Zu ? Zu : ""), gu(su), bu(0), Ou(!1), eu(!Uu), pu(!1), ju()) : hu(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const wu = (0, Uu.useRef)(null),
        du = (0, Uu.useRef)(null);
      HE(wu, Eu), (0, yE.s)(wu, {
        kind: "book"
      }), (0, yE.s)(du, {
        kind: "yX"
      });
      const au = FE.u.book.uiFontSize,
        Pu = nE(au),
        ou = () => {
          (Mu || Gu) && fu.gameBridge.send("writeBook", {
            pages: [...Yu],
            title: Du,
            published: !Mu && Gu
          })
        },
        ku = uu => {
          cu && (Yu[qu] = Zu, Ou(!1)), lu(Yu[uu]), bu(uu)
        };
      return (0, Cu.jsxs)(Xu.c, {
        className: "WriteOnBoardBg",
        close: () => {
          su(), Yu[qu] = Zu, ou()
        },
        escDoesExit: !0,
        show: Eu,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Cu.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Cu.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Du,
            ref: du,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Pu}rem`
            },
            onKeyDown: uu => {
              Mu && uu.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: uu => {
              let Eu = uu.target.value;
              Eu = (0, FE.l)(Eu, "yX"), gu(Eu)
            },
            readOnly: !Mu
          }), (0, Cu.jsx)("img", {
            src: xE("book_page", BE.i.ITEM, uj),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Cu.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Cu.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Zu,
              ref: wu,
              style: {
                fontSize: `${au}rem`,
                lineHeight: `${Pu}rem`
              },
              onKeyDown: uu => {
                Mu && uu.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: uu => {
                const Eu = uu.target.value;
                lu((0, FE.l)(Eu, "book")), Ou(!0)
              },
              readOnly: !Mu
            })
          })]
        }), (0, Cu.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Cu.jsx)(Nu.f, {
            disabled: 0 === qu,
            onClick: () => {
              ku(qu - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Cu.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Cu.jsx)(Nu.f, {
            disabled: 9 === qu,
            onClick: () => {
              ku(qu + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Cu.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Cu.jsx)(Nu.f, {
            onClick: () => {
              eu(!Mu), pu(!0)
            },
            className: "BookNavButton",
            children: Mu ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var jj = ju(36998),
      sj = ju(8903),
      Uj = ju(1443),
      Zj = ju(1971);

    function Xj(uu) {
      let {
        show: Eu,
        buttons: ju
      } = uu;
      const {
        t: su
      } = (0, Au.A)(), Zu = (0, Uu.useRef)(null);
      return (0, Uu.useEffect)((() => {
        var uu, ju;
        const su = Eu ? (0, jj.y)() : null;
        if (!su || !(0, Uj.g)()) return;
        const Uu = (0, jj.k)().findIndex((uu => uu.id === su));
        (0, sj.n)(null !== (uu = null === (ju = Zu.current) || void 0 === ju ? void 0 : ju.children[Uu]) && void 0 !== uu ? uu : null)
      }), [Eu]), 0 === ju.length ? null : (0, Cu.jsx)("div", {
        ref: Zu,
        className: "ClientGameInventoryButtons",
        onPointerDown: uu => {
          uu.stopPropagation()
        },
        onPointerUp: uu => {
          uu.stopPropagation()
        },
        children: ju.map((uu => {
          const Eu = su(uu.labelKey);
          return (0, Cu.jsxs)(Nu.p, {
            className: uu.className,
            disabled: uu.disabled,
            onClick: () => {
              (0, jj.r)(uu)
            },
            ariaLabel: uu.iconOnly ? Eu : void 0,
            title: uu.iconOnly ? Eu : void 0,
            children: [uu.icon && (0, Cu.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === uu.icon.kind && (0, Cu.jsx)(Zj.d, {
                itemName: uu.icon.name,
                amount: 0
              }), "image" === uu.icon.kind && (0, Cu.jsx)("img", {
                src: uu.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === uu.icon.kind && (0, Cu.jsx)(hu.e, {
                name: uu.icon.name
              })]
            }), !uu.iconOnly && Eu]
          }, uu.id)
        }))
      })
    }
    var lj = ju(37145),
      qj = ju(2871),
      fj = ju(34559),
      Cj = ju(36912),
      bj = ju(36904);
    let cj = null;
    window.setShowInventoryAdsOverride = uu => {
      cj = uu
    };
    const Nj = 24e4;
    var Oj = ju(1979);

    function Yj(uu) {
      var Eu;
      let {
        draggedInfo: {
          name: ju,
          attributes: su,
          amount: Uu
        },
        toAddRef: Zu
      } = uu;
      return (0, Cu.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Zu,
        children: (0, Cu.jsx)(Zj.d, {
          itemName: ju,
          amount: Uu,
          enchantmentTier: null === su || void 0 === su || null === (Eu = su.customAttributes) || void 0 === Eu ? void 0 : Eu.enchantmentTier,
          bar: (0, Oj.f)(su)
        })
      })
    }

    function hj(uu) {
      let {
        className: Eu = "",
        displayInfo: ju,
        domRef: su
      } = uu;
      return (0, Cu.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${Eu}`,
        ref: su,
        children: [(0, Cu.jsx)(wu.d, {
          text: (0, du.qb)(ju.name, {
            fontStyle: ju.fontStyle
          })
        }), (0, Cu.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Cu.jsx)(wu.d, {
            text: ju.desc
          })
        })]
      })
    }

    function Dj(uu) {
      let {
        info: Eu,
        draggedInfo: ju
      } = uu;
      const su = (0, Uu.useRef)(null);
      return (0, Uu.useLayoutEffect)((() => {
        const uu = su.current,
          {
            left: ju,
            top: Uu
          } = function(uu, Eu, ju, su) {
            const Uu = su.left * ju.width / 100 + 4,
              Zu = ju.width - su.right * ju.width / 100 - 4 - Eu.width,
              Xu = su.top * ju.height / 100 + 4,
              lu = ju.height - 4 - Eu.height;
            return {
              left: Math.max(Uu, Math.min(uu.x - Eu.width / 2, Zu)),
              top: Math.max(Xu, Math.min(uu.y - 48 - Eu.height, lu))
            }
          }({
            x: Eu.initTouchX,
            y: Eu.initTouchY
          }, {
            width: uu.offsetWidth,
            height: uu.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, Su.d.get("notchSize"));
        uu.style.left = `${ju}px`, uu.style.top = `${Uu}px`
      }), [Eu]), (0, Cu.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: su,
        children: [(0, Cu.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: ju.amount / Eu.maxAmount * 100 + "%"
          }
        }), (0, Cu.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [ju.amount, "/", Eu.maxAmount]
        })]
      })
    }
    var gj = ju(1105),
      Mj = ju.n(gj),
      ej = ju(202);
    const Gj = (0, Uu.memo)((function(uu) {
      let {
        show: Eu,
        onOpen: ju,
        onClose: su
      } = uu;
      const Zu = (0, Uu.useRef)({
          pos: null
        }),
        [lu, qu] = (0, Uu.useState)([0, 0, 0, 0]),
        {
          userContext: bu
        } = (0, pu.c)();
      (0, au.b)("ironChestOpenRequested", (uu => {
        let {
          pos: Eu,
          ownerDbId: su,
          cachedPasskey: Uu
        } = uu;
        if (Zu.current.pos = Eu, su !== bu.whamm) return null !== Uu ? (qu(Uu), void cu(Uu)) : void ju();
        cu(lu)
      })), (0, au.b)("localEffectUpdated", (uu => {
        "Thief" === uu && su()
      }));
      const cu = uu => {
        const {
          pos: Eu
        } = Zu.current;
        fu.gameBridge.send("openIronChest", {
          pos: Eu,
          wl: uu
        })
      };
      return (0, Cu.jsx)(Xu.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: su,
        escDoesExit: !0,
        show: Eu,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Cu.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Cu.jsx)(pj, {
            wl: lu,
            onPasskeyUpdated: qu,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              cu(lu)
            }
          })
        })
      })
    }));

    function pj(uu) {
      let {
        className: Eu = "",
        wl: ju,
        onPasskeyUpdated: su,
        confirmText: Uu,
        onConfirm: Zu
      } = uu;
      const {
        t: Xu
      } = (0, Au.A)();
      return (0, Cu.jsxs)("div", {
        className: `${Eu} IronChestPasskeyInput`,
        children: [(0, Cu.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Xu("ironChest:passkeyInputTitle")
        }), (0, Cu.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(ej.e.ironChestPasskeyLength).fill(0).map(((uu, Eu) => (0, Cu.jsx)(wj, {
            digit: ju[Eu],
            onPasskeyDigitUpdated: uu => {
              const Uu = [...ju];
              Uu[Eu] = uu, su(Uu)
            }
          }, Eu)))
        }), (0, Cu.jsx)(Nu.p, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Zu,
          children: Xu(Uu)
        })]
      })
    }

    function wj(uu) {
      let {
        digit: Eu,
        onPasskeyDigitUpdated: ju
      } = uu;
      return (0, Cu.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Cu.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Cu.jsx)(Nu.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ju(du.b.mod(Eu + 1, 10))
            },
            children: (0, Cu.jsx)(hu.e, {
              name: "angle-up"
            })
          }), (0, Cu.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: Eu
          }), (0, Cu.jsx)(Nu.p, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ju(du.b.mod(Eu - 1, 10))
            },
            children: (0, Cu.jsx)(hu.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Jj = ju(34557),
      dj = ju(37202),
      aj = ju(36902);

    function Pj(uu) {
      let {
        specialItemInfo: Eu,
        setHovered: ju,
        pointerDown: su,
        pointerUp: Zu,
        enchantingTablePosition: Xu,
        enchantingTableBlockName: lu
      } = uu;
      const {
        t: bu
      } = (0, Au.A)(), [cu, Ou] = (0, Uu.useState)(null), [Yu, hu] = (0, Uu.useState)(null), Du = (0, qu.h)("auraPerLevel"), gu = Math.floor((0, au.f)("aura") / Du);
      (0, Uu.useEffect)((() => {
        if (!Eu) return void Ou(null);
        let uu = !0;
        return fu.gameBridge.query("enchantingOffer", {
          slot: Eu.idx,
          name: Eu.name,
          blockName: lu
        }).then((ju => {
          var su, Uu;
          let {
            perks: Zu,
            options: Xu
          } = ju;
          if (!uu) return;
          const lu = {
            isEnchantable: Zu.length > 0,
            possibleEnchantments: Zu,
            options: Xu.map((uu => {
              let {
                level: Eu,
                odds: ju
              } = uu;
              return {
                level: Eu,
                possibilities: Object.fromEntries(ju.map(((uu, Eu) => [`Tier ${Eu+1}`, uu])))
              }
            })),
            isAlreadyEnchanted: Zu.length > 0 && void 0 !== (null === (su = Eu.attributes) || void 0 === su || null === (Uu = su.customAttributes) || void 0 === Uu ? void 0 : Uu.enchantmentTier)
          };
          Ou(lu), (uu => {
            const Eu = uu.options.map((uu => Object.entries(uu.possibilities).map((uu => {
              let [Eu, ju] = uu;
              return {
                str: `${Eu}: ${ju>0?ju<.01?ju.toPrecision(1):ju.toFixed(2):0}%\n`,
                style: {
                  color: du.jb[Eu]
                }
              }
            }))));
            hu(Eu)
          })(lu)
        })), () => {
          uu = !1
        }
      }), [Eu, Xu, lu]);
      const Mu = [];
      for (let Uu = 0; Uu < dj.c; Uu++) {
        const uu = null === cu || void 0 === cu ? void 0 : cu.options[Uu],
          su = !uu || uu.level > gu;
        Mu.push((0, Cu.jsx)(Nu.f, {
          className: "EnchantmentButton",
          onPointerEnter: uu ? uu => null === ju || void 0 === ju ? void 0 : ju()(!0, {
            name: "",
            desc: Yu[Uu]
          }, uu) : void 0,
          onPointerLeave: uu ? () => null === ju || void 0 === ju ? void 0 : ju()(!1) : void 0,
          onClick: su ? void 0 : () => {
            fu.gameBridge.send("enchantItem", {
              slot: Eu.idx,
              level: uu.level,
              tablePos: Xu
            }), Ou(null)
          },
          disabled: su,
          children: uu ? (0, Cu.jsxs)(Cu.Fragment, {
            children: [(0, Cu.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Cu.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [bu("enchantments:cost"), ": "]
              }), " ", bu("enchantments:levels", {
                level: uu.level
              })]
            }), (0, Cu.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Cu.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Cu.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: bu("enchantments:tier")
                }), Object.entries(uu.possibilities).map((uu => {
                  let [Eu, ju] = uu;
                  return 0 === ju ? null : (0, Cu.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: du.jb[Eu]
                    },
                    children: Eu
                  }, Eu)
                }))]
              }), (0, Cu.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Cu.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: bu("enchantments:odds")
                }), Object.entries(uu.possibilities).map((uu => {
                  let [Eu, ju] = uu;
                  return 0 === ju ? null : (0, Cu.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: du.jb[Eu]
                    },
                    children: [ju > 0 && ju < .1 ? "<0.1" : ju.toFixed(0 < ju && ju < .95 ? 1 : 0), "%"]
                  }, Eu)
                }))]
              })]
            })]
          }) : !1 === (null === cu || void 0 === cu ? void 0 : cu.isEnchantable) ? (0, Cu.jsx)("h1", {
            className: "EnchantmentLevels",
            children: bu("enchantments:notEnchantable")
          }) : (0, Cu.jsx)("h1", {
            className: "EnchantmentLevels",
            children: bu("enchantments:enterItem")
          })
        }, Uu))
      }
      return (0, Cu.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Cu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: lu
        }), (0, Cu.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Cu.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Cu.jsx)(aj.e, {
              idx: bj.h,
              setHovered: uu => {
                null === ju || void 0 === ju || ju(bj.h)(uu)
              },
              pointerDown: su,
              pointerUp: Zu,
              draggedInfo: null,
              specialItemInfo: Eu,
              variation: "Enchanting Table"
            }), cu && cu.possibleEnchantments.length > 0 && (0, Cu.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Cu.jsx)("h2", {
                children: "Possible Perks:"
              }), cu.possibleEnchantments.map((uu => (0, Cu.jsxs)(Uu.Fragment, {
                children: [(0, Cu.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Cu.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Cu.jsx)(Zj.d, {
                      itemName: `${uu} Enchantment`,
                      amount: 1
                    })
                  }), (0, Cu.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: uu
                  })]
                }), (0, Cu.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: bu((0, Jj.k)(uu).translationKey)
                })]
              }, uu)))]
            })]
          }), (0, Cu.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [cu && cu.isAlreadyEnchanted && (0, Cu.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: bu("enchantments:alreadyEnchanted")
            }), Mu]
          })]
        })]
      })
    }
    var oj = ju(37208);

    function kj(uu) {
      var Eu;
      let {
        specialItemInfo: ju,
        setSpecialItemInfo: su,
        setHovered: Zu,
        pointerDown: Xu,
        pointerUp: lu
      } = uu;
      const {
        t: qu
      } = (0, Au.A)(), bu = (0, au.d)("inventory", (uu => uu.freeSlots)), [cu, Ou] = (0, Uu.useState)(null);
      (0, Uu.useEffect)((() => {
        if (ju) {
          const uu = (0, oj.d)(ju.name, ju.amount);
          Ou({
            salvageable: !!uu,
            produces: uu
          })
        } else Ou(null)
      }), [ju, null === ju || void 0 === ju ? void 0 : ju.name, null === ju || void 0 === ju ? void 0 : ju.amount]);
      const Yu = !!ju && !(null === cu || void 0 === cu || !cu.salvageable) && !(null !== (Eu = cu.produces) && void 0 !== Eu && Eu.some((uu => {
        let {
          amt: Eu
        } = uu;
        return Eu < 1
      })));
      return (0, Cu.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Cu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: qu("item:salvagingTable")
        }), (0, Cu.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Cu.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Cu.jsx)(aj.e, {
              idx: bj.h,
              setHovered: uu => {
                null === Zu || void 0 === Zu || Zu(bj.h)(uu)
              },
              pointerDown: Xu,
              pointerUp: lu,
              draggedInfo: null,
              specialItemInfo: ju,
              variation: "Salvaging Table"
            })
          }), (0, Cu.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Cu.jsx)(Nu.f, {
              className: "SalvageButton",
              onClick: Yu ? () => {
                const {
                  idx: uu,
                  name: Eu,
                  amount: Uu
                } = ju;
                fu.gameBridge.send("salvageItem", {
                  slot: uu,
                  name: Eu,
                  amount: Uu
                }) && (Ou(null), su(null))
              } : void 0,
              disabled: !Yu,
              children: cu ? cu.salvageable ? cu.produces.some((uu => {
                let {
                  amt: Eu
                } = uu;
                return Eu < 1
              })) ? (0, Cu.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Cu.jsx)("div", {
                  className: "SalvageText Error",
                  children: qu("salvagingTable:notEnoughResources")
                })
              }) : bu < cu.produces.length ? (0, Cu.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Cu.jsx)("div", {
                  className: "SalvageText Error",
                  children: qu("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Cu.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Cu.jsx)("div", {
                  className: "SalvageText",
                  children: qu("salvagingTable:salvage")
                }), (0, Cu.jsx)("div", {
                  className: "SalvageIcons",
                  children: cu.produces.map(((uu, Eu) => {
                    let {
                      item: ju,
                      amt: su
                    } = uu;
                    return (0, Cu.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: ju,
                        amount: Math.floor(su)
                      })
                    }, Eu)
                  }))
                })]
              }) : (0, Cu.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Cu.jsx)("div", {
                  className: "SalvageText Error",
                  children: qu("salvagingTable:unsalvageable")
                })
              }) : (0, Cu.jsx)(Cu.Fragment, {})
            })
          })]
        })]
      })
    }
    var mj = ju(207),
      vj = ju(9409),
      Kj = ju(2831),
      Vj = ju(1723),
      rj = ju(8915),
      Qj = ju(8909),
      ij = ju(1710),
      Wj = ju(2050),
      Sj = ju(1461),
      Ij = ju(2139);

    function Fj(uu, Eu, ju) {
      const su = uu.trim().toLowerCase();
      if ("" === su) return 0;
      let Uu = null;
      for (const Zu of Eu) {
        const uu = Zu.toLowerCase().indexOf(su);
        if (0 === uu) return 0;
        uu > 0 && (Uu = 1)
      }
      if (null !== Uu) return Uu;
      for (const Zu of ju)
        if (Zu.toLowerCase().includes(su)) return 2;
      return null
    }

    function Bj(uu) {
      return uu.map((uu => {
        var Eu;
        return uu ? {
          name: uu.name,
          amount: null !== (Eu = uu.amount) && void 0 !== Eu ? Eu : 1
        } : null
      }))
    }

    function Lj(uu) {
      return uu < 1e3 ? `${uu}` : uu < 1e4 ? Math.floor(uu / 100) / 10 + "k" : `${Math.floor(uu/1e3)}k`
    }
    var tj = ju(37217);
    const xj = Nu.f,
      Tj = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      Hj = () => {
        const uu = (0, Sj.e)();
        return uu ? uu.getPadRepeatTiming(Tj) : Tj
      };

    function Aj(uu, Eu, ju) {
      var su, Uu;
      const Zu = (0, fj.t)(Eu, uu);
      let Xu = null === (su = Eu[uu]) || void 0 === su ? void 0 : su.description;
      if (ju && (null === (Uu = (0, tj.f)().get(uu)) || void 0 === Uu || !Uu.hideIngredients)) {
        Xu ? (Xu = (0, du.qb)(Xu), Xu.push({
          str: "\n"
        })) : Xu = [], Xu.push({
          str: "\n"
        }), Xu.push({
          str: "Can be crafted from:\n"
        });
        for (const uu of ju) "string" === typeof uu && (Xu.push({
          icon: uu,
          style: {
            fontSize: "1.5em"
          }
        }), Xu.push({
          str: " "
        }), Xu.push(...(0, du.qb)((0, fj.t)(Eu, uu))), Xu.push({
          str: "\n"
        }))
      }
      return {
        name: Zu,
        desc: Xu
      }
    }

    function nj(uu) {
      let {
        name: Eu,
        dC: ju
      } = uu;
      return `${Eu}_${ju}`
    }

    function yj(uu) {
      var Eu;
      let {
        onClick: ju,
        itemName: su,
        recipeId: Zu,
        isSelected: Xu,
        haveIngredients: lu,
        craftable: qu,
        setHovered: fu,
        padActions: bu,
        marked: cu,
        lock: Nu,
        itemInfo: Ou
      } = uu;
      const Yu = (0, Uu.useRef)(null);
      return (0, rj.c)(Yu, {
        press: uu => !lu || "secondary" === uu && !qu ? (bu.refuse(), !1) : "primary" === uu ? (bu.choose(), !0) : bu.craft(),
        release: bu.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Cu.jsxs)("div", {
        ref: Yu,
        className: Mj()("InvenItem", {
          CraftableItemNotEnoughIngredients: !lu && !Nu,
          CraftableItemMarked: cu,
          CraftableItemLocked: void 0 !== Nu,
          CraftableItemLockedFar: (null !== (Eu = null === Nu || void 0 === Nu ? void 0 : Nu.stepsAway) && void 0 !== Eu ? Eu : 1) > 1
        }),
        "data-recipe-key": Zu,
        "data-pad-inventory-default": Xu ? "" : void 0,
        onClick: ju,
        style: {
          cursor: Xu ? null : "pointer"
        },
        onPointerEnter: uu => {
          null === fu || void 0 === fu || fu(!0, Aj(su, Ou)), !Xu && (0, ij.s)(uu.nativeEvent) && (0, Qj.g)() && ju()
        },
        onPointerLeave: () => {
          null === fu || void 0 === fu || fu(!1)
        },
        children: [(0, Cu.jsx)(Zj.d, {
          itemName: su,
          amount: 1
        }), cu && (0, Cu.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Nu && (0, Cu.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Cu.jsx)(hu.e, {
            name: "lock"
          }), (0, Cu.jsx)(wu.d, {
            text: Nu.tag
          })]
        })]
      })
    }

    function zj(uu) {
      let {
        idx: Eu,
        status: ju,
        shownItem: su,
        dim: Zu,
        onHoverStart: Xu,
        onHoverEnd: lu,
        onPadBack: qu
      } = uu;
      const fu = (0, Uu.useRef)(null);
      (0, rj.c)(fu, {
        press: () => !1,
        back: qu,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const bu = ju.need > 0 ? Math.min(ju.have / ju.need, 1) : 1;
      return (0, Cu.jsxs)("div", {
        ref: fu,
        className: Mj()("CupTile", {
          Short: ju.missing > 0
        }),
        style: {
          width: Zu,
          height: Zu
        },
        "data-craft-ingredient": Eu,
        onPointerEnter: Xu,
        onPointerLeave: lu,
        children: [(0, Cu.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${bu})`
          }
        }), (0, Cu.jsx)(Zj.d, {
          itemName: su,
          amount: 0
        }), (0, Cu.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Lj(ju.have), "/", Lj(ju.need)]
        })]
      })
    }

    function Rj(uu) {
      var Eu, ju, su, Zu, Xu;
      let {
        show: lu,
        recipeItem: {
          name: qu,
          dC: bu,
          requires: cu,
          produces: Nu,
          haveIngredients: Ou
        },
        detail: Yu,
        onCraft: hu,
        setHovered: Du,
        craftButtonRef: gu,
        onPadBack: Mu,
        showPadShortcut: eu,
        refusedCount: Gu,
        lock: pu,
        itemInfo: Ju
      } = uu;
      const {
        t: du
      } = (0, Au.A)(), au = null !== Yu && !Yu.roomForOne, Pu = null !== (Eu = null === Yu || void 0 === Yu ? void 0 : Yu.craftAllTimes) && void 0 !== Eu ? Eu : 0, ou = function(uu, Eu) {
        return uu.map((uu => {
          let {
            items: ju,
            amt: su
          } = uu, Uu = 0;
          const Zu = [];
          for (const Xu of ju) {
            const uu = Eu(Xu);
            Uu += uu, uu > 0 && Zu.push(Xu)
          }
          return 0 === Zu.length && Zu.push(ju[0]), {
            shownItems: Zu,
            need: su,
            have: Uu,
            missing: Math.max(su - Uu, 0)
          }
        }))
      }(cu, (uu => {
        var Eu;
        return null !== (Eu = null === Yu || void 0 === Yu ? void 0 : Yu.amounts[uu]) && void 0 !== Eu ? Eu : 0
      }));
      let ku = "4rem",
        mu = 4;
      3 === cu.length || 4 === cu.length ? ku = "3.75rem" : cu.length >= 5 && (ku = "3rem"), 4 === cu.length ? mu = 2 : cu.length <= 6 && (mu = 3);
      const vu = `calc(${mu} * ${ku} + ${mu-1} * 0.4rem + 1px)`,
        Ku = (0, Uu.useRef)(null),
        Vu = (0, Uu.useRef)(null);
      (0, Uu.useLayoutEffect)((() => {
        Ku.current.scrollTop = 0
      }), [qu, bu]);
      const ru = (0, Uu.useRef)(Gu);
      (0, Uu.useEffect)((() => {
        if (Gu === ru.current) return;
        ru.current = Gu;
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
        for (const su of null !== (Eu = null === (ju = Ku.current) || void 0 === ju ? void 0 : ju.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== Eu ? Eu : []) {
          var Eu, ju;
          su.animate(uu, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Gu]);
      const Qu = (uu, Eu, ju) => {
          var su;
          if ((0, tj.f)().has(qu)) return void(ju && clearInterval(iu.current));
          const Uu = null !== (su = null === Yu || void 0 === Yu ? void 0 : Yu.resultStackable) && void 0 !== su && su,
            Zu = Bj(fu.gameBridge.latest("inventory").player),
            {
              aC: Xu,
              yl: lu,
              amountAddedToSlot: Cu
            } = fu.gameBridge.send("craftRecipe", {
              name: qu,
              dC: bu,
              times: Eu || uu && Uu ? null : 1
            });
          if (Xu > 0) {
            const Eu = [],
              su = new Set(cu.flatMap((uu => {
                let {
                  items: Eu
                } = uu;
                return Eu
              }))),
              Xu = function(uu, Eu, ju) {
                const su = [];
                for (let Uu = 0; Uu < uu.length; Uu++) {
                  const Zu = uu[Uu];
                  if (!Zu || !ju.has(Zu.name)) continue;
                  const Xu = Eu[Uu],
                    lu = (null === Xu || void 0 === Xu ? void 0 : Xu.name) === Zu.name ? Xu.amount : 0;
                  lu < Zu.amount && su.push({
                    idx: Uu,
                    itemName: Zu.name,
                    amount: Zu.amount - lu
                  })
                }
                return su
              }(Zu, Bj(fu.gameBridge.latest("inventory").player), su).slice(0, 12),
              bu = ju ? 0 : Math.min(50, 400 / Xu.length),
              Ou = ju ? 220 : 320;
            for (const uu of Xu) {
              var Nu;
              const ju = cu.findIndex((Eu => {
                  let {
                    items: ju
                  } = Eu;
                  return ju.includes(uu.itemName)
                })),
                su = null === (Nu = Ku.current) || void 0 === Nu ? void 0 : Nu.querySelector(`[data-craft-ingredient="${ju}"]`),
                Uu = (0, fj.i)(uu.idx);
              su && Uu && Eu.push({
                kind: "ingredient",
                itemName: uu.itemName,
                amount: uu.amount,
                yl: uu.idx,
                from: Uu,
                to: (0, fj.i)(su),
                delayMs: Math.round(Eu.length * bu),
                durationMs: Ou
              })
            }
            let Yu;
            if (null !== lu && Cu > 0 && Vu.current) {
              const uu = Eu.length > 0 ? Eu[Eu.length - 1].delayMs + .6 * Ou : 0;
              Yu = {
                itemName: qu,
                amount: Cu,
                yl: lu,
                from: (0, fj.i)(Vu.current),
                delayMs: Math.round(uu)
              }
            }
            hu(Yu, uu && !Uu ? lu : null, Eu), lj.e.play("wood1", .5).rate(1.75)
          }
        },
        iu = (0, Uu.useRef)(null);
      (0, Uu.useEffect)((() => () => {
        clearInterval(iu.current)
      }), []);
      const Wu = (uu, Eu) => {
          Qu(uu, !1, !1), clearInterval(iu.current), Eu && (iu.current = setTimeout((() => {
            iu.current = setInterval((() => {
              Qu(uu, !1, !0)
            }), Eu.intervalMs)
          }), Eu.initialDelayMs))
        },
        Su = () => {
          clearInterval(iu.current)
        },
        Iu = !Ou || au || Boolean(pu),
        Fu = (0, Uu.useRef)(null),
        Bu = null !== (ju = null === (su = (0, Ij.b)()) || void 0 === su ? void 0 : su.hideButtonHints) && void 0 !== ju && ju,
        Lu = null !== (Zu = null === (Xu = (0, Sj.e)()) || void 0 === Xu ? void 0 : Xu.getBoundButton("inventorySecondary")) && void 0 !== Zu ? Zu : null,
        tu = () => !Iu && (Qu(!1, !0, !1), !0);
      (0, rj.c)(gu, {
        press: uu => "secondary" === uu ? tu() : !Iu && (Wu(!1, Hj()), !0),
        release: Su,
        back: Mu,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, rj.c)(Fu, {
        press: tu,
        back: Mu,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [xu, Tu] = (0, Uu.useState)(0), [Hu, nu] = (0, Uu.useState)(null);
      (0, Uu.useEffect)((() => {
        if (!0 === lu) {
          Tu(0);
          const uu = setInterval((() => {
            Tu((uu => uu + 1))
          }), 1e3);
          return () => {
            clearInterval(uu)
          }
        }
        return () => {}
      }), [lu]);
      const yu = null === Yu || void 0 === Yu ? void 0 : Yu.ingredientsCraftedFrom,
        zu = (0, Uu.useRef)(Du);
      (0, Uu.useEffect)((() => {
        zu.current = Du
      }), [Du]);
      const Ru = !(null === pu || void 0 === pu || !pu.hideIngredients);
      (0, Uu.useEffect)((() => {
        var uu, Eu;
        if (!Hu) return;
        if (Ru) return nu(null), void(null === (Eu = zu.current) || void 0 === Eu || Eu.call(zu, !1));
        const ju = Hu[xu % Hu.length];
        null === (uu = zu.current) || void 0 === uu || uu.call(zu, !0, Aj(ju, Ju, null === yu || void 0 === yu ? void 0 : yu[ju]))
      }), [Hu, xu, Ju, yu, Ru]);
      const uE = !!pu,
        EE = (0, Uu.useRef)(!1);
      (0, Uu.useEffect)((() => {
        var uu;
        uE && (clearInterval(iu.current), Ru && EE.current && (EE.current = !1, null === (uu = zu.current) || void 0 === uu || uu.call(zu, !1)))
      }), [uE, Ru]);
      const jE = (0, fj.t)(Ju, qu);
      return (0, Cu.jsxs)("div", {
        ref: Ku,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Cu.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Cu.jsx)(wu.d, {
            text: jE
          })
        }), !Ru && (0, Cu.jsx)("div", {
          className: Mj()("CraftableIngredients", {
            Compact: cu.length >= 5
          }),
          style: {
            maxWidth: vu
          },
          children: ou.map(((uu, Eu) => {
            const ju = uu.shownItems[xu % uu.shownItems.length];
            return (0, Cu.jsx)(zj, {
              idx: Eu,
              status: uu,
              shownItem: ju,
              dim: ku,
              onHoverStart: () => {
                nu(uu.shownItems)
              },
              onHoverEnd: () => {
                nu(null), null === Du || void 0 === Du || Du(!1)
              },
              onPadBack: Mu
            }, Eu)
          }))
        }), pu && (0, Cu.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Cu.jsx)(wu.d, {
            text: pu.reason
          })
        }), !pu && (!Ou || au) && (0, Cu.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!Ou && "Missing ingredients", (0, Cu.jsx)("br", {}), au && "Inventory is full"]
        }), !Ru && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsxs)(xj, {
            ref: gu,
            className: "DoCraftButton",
            onPointerDown: uu => {
              Wu((0, fj.v)(uu), (0, ij.s)(uu.nativeEvent) ? Hj() : Tj)
            },
            onPointerUp: Su,
            onPointerLeave: Su,
            disabled: Iu,
            children: [eu && Lu && !Iu && !Bu && (0, Cu.jsx)(Wj.d, {
              className: "CraftShortcutGlyph",
              glyph: Lu
            }), (0, Cu.jsx)("div", {
              ref: Vu,
              className: "DoCraftItem",
              onPointerEnter: () => {
                EE.current = !0, null === Du || void 0 === Du || Du(!0, Aj(qu, Ju))
              },
              onPointerLeave: () => {
                EE.current = !1, null === Du || void 0 === Du || Du(!1)
              },
              children: (0, Cu.jsx)(Zj.d, {
                itemName: qu,
                amount: Nu
              })
            })]
          }), (0, Cu.jsxs)(xj, {
            ref: Fu,
            className: "DoCraftAllButton",
            onPointerDown: uu => {
              Qu((0, fj.v)(uu), !0, !1)
            },
            disabled: Iu,
            children: [(0, Cu.jsx)("span", {
              className: "CraftAllLabel",
              children: du("general:craftAll")
            }), Pu > 0 && (0, Cu.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Lj(Pu)]
            })]
          })]
        })]
      })
    }

    function us(uu) {
      let {
        selectedIdx: Eu,
        hidden: ju
      } = uu;
      const su = (0, Uj.t)(),
        Zu = (0, Uu.useRef)(null);
      return (0, Uu.useLayoutEffect)((() => {
        const uu = Zu.current,
          su = null === uu || void 0 === uu ? void 0 : uu.parentElement;
        if (!su || !uu) return;
        const Uu = su.querySelector(".CraftableItems"),
          Xu = () => {
            var Zu, Xu;
            if (ju) return void(uu.style.opacity = "0");
            const lu = null === Uu || void 0 === Uu ? void 0 : Uu.children[Eu],
              qu = null === (Zu = null !== (Xu = null === lu || void 0 === lu ? void 0 : lu.querySelector(".InvenItem")) && void 0 !== Xu ? Xu : lu) || void 0 === Zu ? void 0 : Zu.getBoundingClientRect();
            if (!qu || 0 === qu.width) return void(uu.style.opacity = "0");
            const fu = su.getBoundingClientRect();
            uu.style.opacity = "1", uu.style.width = `${qu.width}px`, uu.style.height = `${qu.height}px`, uu.style.transform = `translate(${qu.left-fu.left+su.scrollLeft}px, ${qu.top-fu.top+su.scrollTop}px)`
          };
        Xu();
        const lu = new MutationObserver(Xu),
          qu = new ResizeObserver(Xu);
        return qu.observe(su), Uu && (lu.observe(Uu, {
          childList: !0,
          subtree: !0
        }), qu.observe(Uu)), () => {
          lu.disconnect(), qu.disconnect()
        }
      }), [Eu, ju]), (0, Cu.jsx)("div", {
        ref: Zu,
        className: Mj()("SelectionReticle", {
          Secondary: su
        })
      })
    }

    function Es(uu, Eu, ju) {
      return uu ? (0, mj.c)(vj.f, uu) ? ss(uu, Eu, ju) : uu : ju("classicGame:handCrafting")
    }

    function ss(uu, Eu, ju) {
      var su;
      const Uu = null === (su = Eu[uu]) || void 0 === su ? void 0 : su.displayName;
      if ("string" === typeof Uu) return ju(Uu);
      const Zu = fu.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Uu) ? Uu.map((uu => {
        if ("string" === typeof uu) return uu;
        if ("translationKey" in uu) return ju(uu.translationKey, (0, Au.r)(uu.params, Zu));
        if ("str" in uu) {
          if ("string" === typeof uu.str) return uu.str;
          if ("translationKey" in uu.str) return ju(uu.str.translationKey, (0, Au.r)(uu.str.params, Zu))
        }
        return ""
      })).join("") : Uu && "translationKey" in Uu ? ju(Uu.translationKey, (0, Au.r)(Uu.params, Zu)) : uu
    }

    function Us(uu, Eu) {
      return uu === Eu || null !== uu && null !== Eu && uu.name === Eu.name && uu.dC === Eu.dC
    }

    function Zs(uu) {
      var Eu, ju, su;
      let {
        show: Zu,
        onCraft: Xu,
        dispatchSelectedCraftable: lu,
        selectedCraftable: qu,
        craftingStation: bu,
        setHovered: cu
      } = uu;
      const {
        t: Nu
      } = (0, Au.A)(), [Ou, Yu] = (0, Uu.useState)(""), [hu, Du] = (0, Uu.useState)(0);
      (0, Uu.useEffect)((() => {
        Zu || (Yu(""), Du((uu => uu + 1)))
      }), [Zu]);
      const [gu, Mu] = (0, Uu.useState)(bu);
      gu !== bu && (Mu(bu), "" !== Ou && (Yu(""), Du((uu => uu + 1))));
      const eu = (0, Uu.useRef)(null),
        Gu = (0, Uu.useRef)(null),
        pu = (0, Qj.h)(),
        wu = pu.showing && "recipe" === pu.kind,
        [Ju, du] = (0, Uu.useState)(0),
        Pu = null !== bu && void 0 !== bu ? bu : null,
        ou = (0, Uu.useRef)(null),
        ku = uu => {
          return !((Eu = ou.current) === (ju = uu) || null !== Eu && null !== ju && Eu.station === ju.station && Us(Eu.recipe, ju.recipe)) && (ou.current = uu, fu.gameBridge.send("focusCrafting", uu), !0);
          var Eu, ju
        };
      ku(Zu ? {
        station: Pu,
        recipe: (null === (Eu = ou.current) || void 0 === Eu ? void 0 : Eu.station) === Pu ? ou.current.recipe : null
      } : null);
      let mu = fu.gameBridge.latest("crafting");
      const vu = (0, au.f)("itemInfo"),
        Ku = "" !== Ou.trim(),
        Vu = (0, tj.z)(),
        ru = (0, tj.y)(),
        Qu = (0, tj.C)(),
        iu = function(uu, Eu) {
          const [ju, su] = (0, Uu.useState)(!1);
          (0, Uu.useEffect)((() => {
            if (!uu) return void su(!1);
            const Eu = setTimeout((() => {
              su(!0)
            }), 0);
            return () => {
              clearTimeout(Eu)
            }
          }), [uu]);
          const Zu = uu && ju,
            Xu = (0, Uu.useRef)({
              station: Eu,
              at: new Map
            });
          return (Xu.current.station !== Eu || !Zu && Xu.current.at.size > 0) && (Xu.current = {
            station: Eu,
            at: new Map
          }), Zu ? Xu.current.at : null
        }(Zu, bu);
      let Wu = mu.recipes.filter((uu => {
        let {
          listed: Eu
        } = uu;
        return Eu
      }));
      if (Ku) {
        const uu = [];
        for (const Eu of mu.recipes) {
          var Su;
          const ju = null !== (Su = ru.get(Eu.name)) && void 0 !== Su && Su.hideIngredients ? [] : Eu.requires.flatMap((uu => {
              let {
                items: Eu
              } = uu;
              return Eu.flatMap((uu => [uu, ss(uu, vu, Nu)]))
            })),
            su = Fj(Ou, [Eu.name, ss(Eu.name, vu, Nu)], ju);
          null !== su && uu.push({
            item: Eu,
            rank: su
          })
        }
        uu.sort(((uu, Eu) => uu.rank - Eu.rank)), Wu = uu.map((uu => {
          let {
            item: Eu
          } = uu;
          return Eu
        }))
      } else {
        if (iu && iu.size > 0) {
          const uu = mu.recipes.filter((uu => !uu.listed && iu.has(nj(uu))));
          Wu = Wu.concat(uu)
        }
        Wu = (0, tj.l)(Wu, Vu, ru, Qu), iu && (Wu = (0, tj.h)(Wu, iu, nj))
      }
      const Iu = uu => Wu.find((Eu => nj(Eu) === uu)),
        Fu = `${bu}|${Ou}`,
        [Bu, Lu] = (0, Uu.useState)(null),
        tu = (null === Bu || void 0 === Bu ? void 0 : Bu.context) === Fu ? Bu.key : null,
        xu = qu ? nj(qu) : null,
        Tu = null !== (ju = null !== (su = Iu(xu)) && void 0 !== su ? su : Iu(tu)) && void 0 !== ju ? ju : Wu[0],
        Hu = Tu ? nj(Tu) : null,
        nu = Tu ? {
          name: Tu.name,
          dC: Tu.dC
        } : null;
      Zu && ku({
        station: Pu,
        recipe: nu
      }) && (mu = fu.gameBridge.latest("crafting")), Hu !== xu && Hu !== tu && Lu(Hu ? {
        context: Fu,
        key: Hu
      } : null), (0, Uu.useEffect)((() => () => {
        ou.current = null, fu.gameBridge.send("focusCrafting", null)
      }), []);
      const yu = Us(mu.detail, nu) ? mu.detail : null,
        zu = null !== yu && !yu.roomForOne,
        Ru = Wu.findIndex((uu => nj(uu) === nj(Tu))),
        uE = () => Gu.current ? (0, rj.b)(Gu.current) : null,
        EE = (0, Uu.useRef)(null),
        jE = (0, Uu.useRef)(0);
      jE.current++;
      const sE = jE.current;
      (0, Uu.useEffect)((() => {
        const uu = EE.current;
        if (!uu || sE <= uu.afterRender) return;
        if (EE.current = null, uu.key !== Hu) return;
        const Eu = uE();
        var ju;
        null !== Eu && void 0 !== Eu && Eu.press("primary") && !uu.dl && (null === (ju = Eu.release) || void 0 === ju || ju.call(Eu))
      }));
      const UE = uu => {
          const Eu = {
            name: uu.name,
            dC: uu.dC
          };
          return {
            choose: () => {
              lu(Eu), (0, sj.n)(Gu.current)
            },
            craft: () => {
              var uu, ju;
              return lu(Eu), nj(Eu) !== nj(Tu) ? (EE.current = {
                key: nj(Eu),
                dl: !0,
                afterRender: jE.current
              }, !0) : null !== (uu = null === (ju = uE()) || void 0 === ju ? void 0 : ju.press("primary")) && void 0 !== uu && uu
            },
            stopCraft: () => {
              var uu, Eu;
              EE.current ? EE.current.dl = !1 : null === (uu = uE()) || void 0 === uu || null === (Eu = uu.release) || void 0 === Eu || Eu.call(uu)
            },
            refuse: () => {
              nj(Eu) !== nj(Tu) && lu(Eu), du((uu => uu + 1))
            }
          }
        },
        ZE = () => {
          var uu, Eu, ju;
          (0, sj.n)(null !== (uu = null === (Eu = eu.current) || void 0 === Eu || null === (ju = Eu.querySelector(".CraftableItems")) || void 0 === ju ? void 0 : ju.children[Ru]) && void 0 !== uu ? uu : null)
        },
        XE = Wu.map(nj).join("|"),
        lE = (0, Uu.useRef)(XE);
      return (0, Uu.useEffect)((() => {
        lE.current !== XE && (lE.current = XE, wu && Ru >= 0 && (0, Qj.g)() && ZE())
      })), (0, Cu.jsxs)("div", {
        className: "Craftables",
        children: [(0, Cu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Es(bu, vu, Nu)
        }), (0, Cu.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Cu.jsx)(Vj.d, {
            className: "CraftingSearch",
            placeholderText: Nu("general:searchRecipes"),
            defaultValue: Ou,
            maxLength: 100,
            onValueChange: uu => {
              Yu(uu)
            },
            blurOnEnter: !0
          }, hu), 0 === Wu.length && Ku && (0, Cu.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Nu("general:noRecipesMatchSearch")
          }), Wu.length > 0 && (0, Cu.jsxs)(Cu.Fragment, {
            children: [(0, Cu.jsxs)("div", {
              ref: eu,
              className: "CraftablesLeftSide",
              children: [(0, Cu.jsx)(Kj.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Wu.map((uu => {
                  let {
                    name: Eu,
                    dC: ju,
                    haveIngredients: su
                  } = uu;
                  return {
                    name: Eu,
                    dC: ju,
                    haveIngredients: su
                  }
                })))],
                observing: Zu,
                children: Wu.map((uu => {
                  const {
                    name: Eu,
                    dC: ju,
                    haveIngredients: su
                  } = uu, Uu = nj(uu);
                  return (0, Cu.jsx)(yj, {
                    recipeId: Uu,
                    itemName: Eu,
                    onClick: () => {
                      lu({
                        name: Eu,
                        dC: ju
                      })
                    },
                    isSelected: nj(Tu) === Uu,
                    haveIngredients: su,
                    craftable: su && !ru.has(Eu) && !(nj(Tu) === Uu && zu),
                    setHovered: cu,
                    padActions: UE(uu),
                    marked: Vu.has(Eu),
                    lock: ru.get(Eu),
                    itemInfo: vu
                  }, Uu)
                }))
              }), (0, Cu.jsx)(us, {
                selectedIdx: Ru,
                hidden: wu && pu.steppingSlots
              })]
            }), (0, Cu.jsx)(Rj, {
              show: Zu,
              recipeItem: Tu,
              detail: yu,
              onCraft: Xu,
              setHovered: cu,
              craftButtonRef: Gu,
              onPadBack: ZE,
              showPadShortcut: wu,
              refusedCount: Ju,
              lock: ru.get(Tu.name),
              itemInfo: vu
            })]
          })]
        })]
      })
    }
    var Xs = ju(34565),
      ls = ju(3475),
      qs = ju(2180),
      fs = ju(8891);
    class Cs {
      constructor(uu, Eu, ju) {
        this.commit = uu, this.delayMs = Eu, this.defers = ju, this.pending = null, this.timer = void 0, this.dl = !1, this.flush = () => {
          clearTimeout(this.timer);
          const uu = this.pending;
          null !== uu && (this.pending = null, this.commit(uu))
        }
      }
      type(uu) {
        this.pending = uu, clearTimeout(this.timer), this.dl || this.defers() ? this.dl || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(uu) {
        var Eu;
        return null !== (Eu = this.pending) && void 0 !== Eu ? Eu : uu
      }
      isHeld() {
        return this.dl
      }
      setHeld(uu) {
        this.dl = uu, uu || this.flush()
      }
    }

    function bs(uu) {
      return null === uu ? "creativeInventory:all" : `creativeInventory:${uu}`
    }

    function cs(uu) {
      let {
        category: Eu
      } = uu;
      return null === Eu ? (0, Cu.jsx)(hu.e, {
        name: "layer-group"
      }) : (0, Cu.jsx)(Zj.d, {
        itemName: Xs.creativeItemCategoryIcons[Eu],
        amount: 0
      })
    }

    function Ns(uu) {
      let {
        labelKey: Eu,
        isSelected: ju,
        onSelect: su,
        setHovered: Uu,
        children: Zu
      } = uu;
      return (0, Cu.jsx)("div", {
        className: Mj()("CreativeCategoryTab", {
          Selected: ju
        }),
        onClick: su,
        onPointerEnter: uu => {
          (0, fj.r)(uu) || Uu(!0, {
            name: {
              translationKey: Eu
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Uu(!1)
        },
        children: Zu
      })
    }

    function Os(uu) {
      let {
        categories: Eu,
        selectedCategory: ju,
        onSelect: su
      } = uu;
      const {
        t: Zu
      } = (0, Au.A)(), [Xu, lu] = (0, Uu.useState)(!1), qu = (0, Uu.useRef)(null), fu = (0, Uu.useCallback)((() => {
        lu(!1)
      }), []);
      return (0, qs.c)(qu, fu), (0, Cu.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: qu,
        children: [(0, Cu.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            lu(!Xu)
          },
          children: [(0, Cu.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Cu.jsx)(cs, {
              category: ju
            })
          }), (0, Cu.jsx)("span", {
            children: Zu(bs(ju))
          }), (0, Cu.jsx)(hu.e, {
            name: Xu ? "caret-up" : "caret-down"
          })]
        }), Xu && (0, Cu.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: Eu.map((uu => (0, Cu.jsxs)("div", {
            className: Mj()("CreativeCategoryDropdownOption", {
              Selected: ju === uu
            }),
            onClick: () => {
              su(uu), lu(!1)
            },
            children: [(0, Cu.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Cu.jsx)(cs, {
                category: uu
              })
            }), (0, Cu.jsx)("span", {
              children: Zu(bs(uu))
            })]
          }, null !== uu && void 0 !== uu ? uu : "all")))
        })]
      })
    }
    const Ys = (0, Uu.memo)((function(uu) {
      let {
        creativeScrollDiv: Eu,
        playerInvenNumSlots: ju,
        getSetHoveringForIdx: su,
        getPointerDownForIdx: Zu,
        getPointerUpForIdx: Xu,
        creativeSearchVal: lu,
        setCreativeSearchVal: fu,
        creativeCategory: bu,
        setCreativeCategory: cu,
        show: Nu
      } = uu;
      const {
        t: Ou
      } = (0, Au.A)(), Yu = (0, au.f)("creativeVisibility"), {
        userContext: Du
      } = (0, pu.c)(), gu = (0, qu.h)("canUseDevCreativeItems"), Mu = Du.playerHasRank("developer") || !!gu, eu = (0, Uu.useMemo)((() => Ds("", Yu, Mu)), [Yu, Mu]), Gu = (0, Uu.useMemo)((() => {
        const uu = (0, Xs.creativeItemIds)(),
          Eu = new Set(eu.map((Eu => (0, Xs.creativeCategoryOf)(uu[Eu]))));
        return Xs.creativeItemCategories.filter((uu => Eu.has(uu)))
      }), [eu]), wu = null !== bu && Gu.includes(bu) ? bu : null, du = (0, Uu.useMemo)((() => "" === lu ? eu : Ds(lu, Yu, Mu)), [eu, lu, Yu, Mu]), Pu = (0, Uu.useMemo)((() => {
        const uu = (0, Xs.creativeItemIds)();
        return null !== wu ? du.filter((Eu => (0, Xs.creativeCategoryOf)(uu[Eu]) === wu)) : "" === lu ? du.filter((Eu => !(0, Xs.showOnlyInCreativeCategory)(uu[Eu]))) : du
      }), [du, wu, lu]), ou = su();

      function ku(uu) {
        cu(uu), Eu.current.scrollTop = 0
      }
      const mu = [null, ...Gu],
        {
          isTouchScreen: vu
        } = (0, Su.l)(["isTouchScreen"]),
        Ku = !vu,
        Vu = (0, Uu.useRef)(null),
        [ru, Qu] = (0, Uu.useState)(0);
      (0, Uu.useEffect)((() => {
        const uu = Vu.current;
        if (!uu) return;
        const Eu = new ResizeObserver((uu => {
          Qu(uu[0].contentRect.height)
        }));
        return Eu.observe(uu), () => {
          Eu.disconnect()
        }
      }), [Ku]);
      const iu = (0, Uu.useRef)(null),
        Wu = (0, Uu.useCallback)((function uu() {
          "up" === iu.current ? Eu.current.scrollTop -= 10 : "down" === iu.current && (Eu.current.scrollTop += 10), iu.current && requestAnimationFrame(uu)
        }), [Eu]),
        Iu = (0, Uu.useCallback)((function(uu) {
          iu.current || (iu.current = uu, Wu())
        }), [Wu]);

      function Fu() {
        iu.current = null
      }
      const Bu = (0, Uu.useRef)({
        creativeSearchVal: lu,
        setCreativeSearchVal: fu
      });
      Bu.current = {
        creativeSearchVal: lu,
        setCreativeSearchVal: fu
      };
      const [Lu] = (0, Uu.useState)((() => new Cs((uu => {
        Bu.current.setCreativeSearchVal(uu)
      }), 250, Uj.g))), tu = uu => {
        var ju;
        null === (ju = Eu.current) || void 0 === ju || ju.classList.toggle("CreativeItemSlotsStale", uu)
      };
      (0, Ju.f)(fs.d, (uu => {
        Lu.setHeld(uu), uu || tu(!1)
      })), (0, Uu.useEffect)((() => Lu.flush), [Lu]);
      const xu = (0, Cu.jsx)(Vj.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: lu,
          maxLength: 1e4,
          onValueChange: (uu, Eu) => {
            "" === Lu.getTyped(Bu.current.creativeSearchVal) && "" !== uu && cu(null), Lu.type(uu), tu(Lu.isHeld())
          },
          onEnter: Lu.flush,
          blurOnEnter: !0
        }),
        Tu = (0, Cu.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [vu && (0, Cu.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Cu.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Iu("up")
              },
              onPointerLeave: Fu,
              onPointerUp: Fu,
              children: (0, Cu.jsx)(hu.e, {
                name: "arrow-up"
              })
            }), (0, Cu.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Iu("down")
              },
              onPointerLeave: Fu,
              onPointerUp: Fu,
              children: (0, Cu.jsx)(hu.e, {
                name: "arrow-up"
              })
            })]
          }), (0, Cu.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: Eu,
            children: [0 === Pu.length && "" !== lu && (0, Cu.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: Ou("general:noResults")
            }), (0, Cu.jsx)(Kj.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [lu, wu],
              observerRoot: "CreativeItemSlots",
              observing: Nu,
              children: Pu.map((uu => {
                const Eu = ju + uu;
                return (0, Cu.jsx)(aj.e, {
                  idx: Eu,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: su(Eu),
                  pointerDown: Zu(Eu),
                  pointerUp: Xu(Eu)
                }, Eu)
              }))
            })]
          })]
        });
      return (0, Cu.jsxs)("div", {
        className: Mj()("CreativeItemSlotsWrapper", Ku ? "WithRail" : "WithDropdown"),
        children: [Ku && (0, Cu.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Vu,
          style: {
            "--rail-height": ru > 0 ? `${ru}px` : void 0,
            "--tab-rows": Math.ceil(mu.length / 2)
          },
          children: mu.map((uu => (0, Cu.jsx)(Ns, {
            labelKey: bs(uu),
            isSelected: wu === uu,
            onSelect: () => {
              ku(uu)
            },
            setHovered: ou,
            children: (0, Cu.jsx)(cs, {
              category: uu
            })
          }, null !== uu && void 0 !== uu ? uu : "all")))
        }), (0, Cu.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Cu.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [xu, !Ku && (0, Cu.jsx)(Os, {
              categories: mu,
              selectedCategory: wu,
              onSelect: ku
            })]
          }), Tu]
        })]
      })
    }));

    function hs(uu) {
      var Eu;
      return null !== (Eu = (0, ls.c)(uu)) && void 0 !== Eu ? Eu : ""
    }

    function Ds(uu, Eu, ju) {
      let {
        publicLobby: su,
        shownInGame: Uu
      } = Eu;
      const Zu = uu.toLowerCase(),
        Xu = (0, Xs.creativeItemIds)(),
        lu = uu => {
          var Eu;
          const Zu = Xu[uu];
          return !(0, Xs.itemIsDisabled)(Zu, su, null === (Eu = Uu[hs(Zu)]) || void 0 === Eu || Eu, ju)
        };
      if ("" === Zu) return Xu.map(((uu, Eu) => Eu)).filter((uu => !(0, Xs.showOnlyInCreativeSearch)(Xu[uu]))).filter(lu);
      const qu = [];
      for (let fu = 0; fu < Xu.length; fu++) hs(Xu[fu]).toLowerCase().includes(Zu) && qu.push(fu);
      qu.sort(((uu, Eu) => {
        const ju = hs(Xu[uu]).toLowerCase(),
          su = hs(Xu[Eu]).toLowerCase();
        return ju.indexOf(Zu) - su.indexOf(Zu)
      }));
      for (const [fu, Cu] of(0, Xs.creativeAltNames)())
        for (const uu of Cu)
          if (uu.toLowerCase().includes(Zu)) {
            const uu = Xu.indexOf(fu);
            qu.includes(uu) || qu.push(uu)
          } return qu.filter(lu)
    }
    var gs = ju(37224),
      Ms = ju(649);

    function es(uu) {
      return uu > Ms.l
    }

    function Gs(uu) {
      const Eu = uu / 2,
        ju = [];
      for (let su = 0; su < Eu / 6; su++)
        for (let uu = 0; uu < 12; uu++) {
          const Uu = uu < 6 ? 0 : Eu;
          ju.push(Uu + 6 * su + uu % 6)
        }
      return ju
    }

    function ps(uu) {
      let {
        numSlots: Eu,
        renderSlot: ju
      } = uu;
      const {
        t: su
      } = (0, Au.A)(), Zu = (0, Uu.useRef)(null);
      var Xu;
      return Xu = Zu, (0, Uu.useLayoutEffect)((() => {
        var uu;
        const Eu = null === (uu = Xu.current) || void 0 === uu ? void 0 : uu.closest(".InvenBody");
        if (!Eu) return;
        const ju = () => {
          Eu.style.zoom = "";
          const uu = parseFloat(getComputedStyle(document.documentElement).fontSize),
            ju = window.innerWidth - 2 * uu,
            su = Eu.getBoundingClientRect().width;
          su > ju && (Eu.style.zoom = "" + ju / su)
        };
        return ju(), window.addEventListener("resize", ju), () => {
          window.removeEventListener("resize", ju), Eu.style.zoom = ""
        }
      }), [Xu]), (0, Cu.jsxs)("div", {
        ref: Zu,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Cu.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: su("doubleChest:title")
        }), (0, Cu.jsx)("div", {
          className: "GridItemSlots",
          children: Gs(Eu).map((uu => ju(uu)))
        })]
      })
    }

    function ws(uu) {
      let {
        RU: Eu,
        initialPasskey: ju
      } = uu;
      const {
        t: su
      } = (0, Au.A)(), [Zu, Xu] = (0, Uu.useState)(ju), [lu, qu] = (0, Uu.useState)(ju);
      (0, Uu.useEffect)((() => {
        Xu(ju), qu(ju)
      }), [...Eu]);
      return (0, Cu.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Cu.jsx)("div", {
          className: "SmallTextBold",
          children: su("ironChest:currentPasskey", {
            currentPasskey: Zu.join("")
          })
        }), (0, Cu.jsx)(pj, {
          className: "IronChestPasskeyEditor",
          wl: lu,
          onPasskeyUpdated: qu,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            fu.gameBridge.send("changeIronChestPasskey", {
              pos: [...Eu],
              wl: [...lu]
            }), Xu([...lu])
          }
        })]
      })
    }

    function ds(uu, Eu) {
      return "Iron" === uu.type && uu.ironChest.ownerDbId === Eu
    }

    function as(uu) {
      let {
        variation: Eu,
        canCraft: ju,
        show: su,
        creativeMounted: Uu,
        specialItemRef: Zu,
        draggedInfo: Xu,
        getSetHovering: lu,
        getPointerDownForIdx: qu,
        getPointerUpForIdx: fu,
        enchantingTablePosition: bu,
        enchantingTableBlockName: cu,
        selectedCraftable: Nu,
        dispatchSelectedCraftable: Ou,
        creativeScrollDiv: Yu,
        creativeSearchVal: hu,
        setCreativeSearchVal: Du,
        creativeCategory: gu,
        setCreativeCategory: Mu,
        onCraft: eu
      } = uu;
      const {
        userContext: Gu
      } = (0, pu.c)(), {
        t: wu
      } = (0, Au.A)(), Ju = (0, au.d)("inventory", (uu => uu.chest)), du = (0, au.d)("inventory", (uu => uu.player.length)), Pu = (0, au.d)("inventory", (uu => uu.creative));
      if (0 === du) return null;
      let ou, ku;
      const mu = uu => {
          const Eu = du + uu;
          return (0, Cu.jsx)(aj.e, {
            idx: Eu,
            draggedInfo: Xu,
            specialItemInfo: Zu.current,
            setHovered: lu(Eu),
            pointerDown: qu(Eu),
            pointerUp: fu(Eu)
          }, Eu)
        },
        vu = Ju ? (0, gs.d)(Ju.type) : null;
      if (vu) ou = Mj()("InvenLeftSideChestCustom", vu.className), ku = (0, Cu.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: vu.render({
          RU: Ju.pos,
          renderSlot: mu
        })
      });
      else if (Ju) {
        const uu = Ju.pos,
          Eu = "Iron" === Ju.type || "Moonstone" === Ju.type ? Ju.type : "Standard";
        ou = `InvenLeftSideChest${Eu}`;
        const ju = es(Ju.numSlots);
        ku = (0, Cu.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [ds(Ju, Gu.whamm) && (0, Cu.jsx)(ws, {
            RU: uu,
            initialPasskey: Ju.ironChest.wl
          }), ju && (0, Cu.jsx)(ps, {
            numSlots: Ju.numSlots,
            renderSlot: mu
          }), !ju && (0, Cu.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Cu.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: wu("Moonstone" === Eu ? "item:moonstoneChest" : "Iron" === Eu ? "item:ironChest" : "item:chest")
            }), (0, Cu.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(Ju.numSlots).fill(0).map(((uu, Eu) => mu(Eu)))
            })]
          })]
        })
      } else if (!Pu || Eu && ju)
        if (ju && "Enchanting Table" === Eu) ou = `InvenLeftSide${(null!==cu&&void 0!==cu?cu:"").replace(/ /gi,"")}`, ku = (0, Cu.jsx)(Pj, {
          specialItemInfo: Zu.current,
          setHovered: lu,
          pointerDown: qu(bj.h),
          pointerUp: fu(bj.h),
          enchantingTablePosition: bu,
          enchantingTableBlockName: cu
        });
        else if (ju && "Salvaging Table" === Eu) ou = "InvenLeftSideSalvagingTable", ku = (0, Cu.jsx)(kj, {
        specialItemInfo: Zu.current,
        setSpecialItemInfo: uu => {
          Zu.current = uu
        },
        setHovered: lu,
        pointerDown: qu(bj.h),
        pointerUp: fu(bj.h)
      });
      else {
        if (!ju) return null;
        ou = `InvenLeftSide${(null!==Eu&&void 0!==Eu?Eu:"HandCrafting").replace(/ /gi,"")}`, ku = (0, Cu.jsx)(Zs, {
          show: su,
          onCraft: eu,
          craftingStation: Eu,
          selectedCraftable: Nu,
          dispatchSelectedCraftable: Ou,
          setHovered: lu()
        })
      } else ou = "InvenLeftSideCreative", ku = Uu ? (0, Cu.jsx)(Ys, {
        creativeScrollDiv: Yu,
        playerInvenNumSlots: du,
        getSetHoveringForIdx: lu,
        getPointerDownForIdx: qu,
        getPointerUpForIdx: fu,
        creativeSearchVal: hu,
        setCreativeSearchVal: Du,
        creativeCategory: gu,
        setCreativeCategory: Mu,
        show: su
      }) : null;
      const Ku = !!Ju || ju && !!Eu;
      return (0, Cu.jsx)("div", {
        className: `InvenLeftSide ${ou}`,
        "data-pad-inventory-start": Ku ? "" : void 0,
        children: ku
      })
    }
    var Ps = ju(636),
      os = ju(20242),
      ks = ju(20247),
      ms = ju(20254);
    const vs = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: ju(20262)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: ks
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: ms
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: ju(20267)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: os
      }
    };

    function Ks(uu) {
      const {
        sprite: Eu,
        image: ju
      } = vs[uu];
      return xE(Eu, BE.i.ITEM, ju)
    }

    function Vs(uu) {
      let {
        draggedInfo: Eu,
        specialItemInfo: ju,
        craftFlyAnims: su,
        getSetHovering: Uu,
        getPointerDownForIdx: Zu,
        getPointerUpForIdx: Xu,
        variation: lu,
        canCraft: qu,
        isNewSlot: fu
      } = uu;
      const bu = (0, au.d)("inventory", (uu => uu.player.length));
      return 0 === bu ? null : (0, Cu.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Cu.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Ps.d.length).fill(0).map(((uu, cu) => {
            const Nu = bu - Ps.d.length + cu;
            return (0, Cu.jsx)(aj.e, {
              idx: Nu,
              draggedInfo: Eu,
              specialItemInfo: ju,
              craftFlyHoldbackInfo: (0, Cj.g)(su, Nu),
              setHovered: Uu(Nu),
              pointerDown: Zu(Nu),
              pointerUp: Xu(Nu),
              defaultIconB64: Ks(Ps.d[cu]),
              variation: qu ? lu : void 0,
              showNewDot: fu(Nu)
            }, Nu)
          }))
        }), (0, Cu.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(bu - 10 - Ps.d.length).fill(0).map(((uu, cu) => {
            const Nu = bu - Ps.d.length - cu - 1;
            return (0, Cu.jsx)(aj.e, {
              idx: Nu,
              draggedInfo: Eu,
              specialItemInfo: ju,
              craftFlyHoldbackInfo: (0, Cj.g)(su, Nu),
              setHovered: Uu(Nu),
              pointerDown: Zu(Nu),
              pointerUp: Xu(Nu),
              variation: qu ? lu : void 0,
              showNewDot: fu(Nu)
            }, Nu)
          }))
        })]
      })
    }
    var rs = ju(37230),
      Qs = ju(37237);

    function is(uu) {
      const {
        e: Eu,
        idx: ju
      } = uu, su = (0, fj.m)(uu.readInventory(), ju), Uu = (0, fj.p)(Eu);
      ju === bj.e ? function(uu, Eu) {
        const {
          draggedInfoRef: ju,
          removeItem: su,
          removeDraggedInfoRef: Uu,
          close: Zu
        } = uu;
        if (ju.current) {
          const uu = Eu && ju.current.amount || 1;
          su(ju.current.idx, uu, !0) && (ju.current.amount -= uu, ju.current.amount <= 0 && Uu())
        } else Eu && Zu()
      }(uu, Uu) : ju === bj.h ? function(uu, Eu) {
        const {
          e: ju,
          draggedInfoRef: su,
          specialItemRef: Uu,
          moveAmtIntoSlot: Zu,
          removeDraggedInfoRef: Xu
        } = uu;
        if ((0, fj.v)(ju) && Uu.current) Uu.current = null;
        else if (su.current && Uu.current && (su.current.idx === Uu.current.idx || (0, Qs.b)(su.current, Uu.current)) && su.current.amount > 0 && Uu.current.amount > 0 && Uu.current.amount < ej.e.maxItemStackSize)
          if (su.current.idx === Uu.current.idx) {
            if (Eu) {
              const uu = Math.min(su.current.amount, ej.e.maxItemStackSize - Uu.current.amount);
              Uu.current.amount += uu, su.current.amount -= uu
            } else su.current.amount--, Uu.current.amount++;
            su.current.amount <= 0 && Xu()
          } else if (Eu) {
          const uu = Math.min(su.current.amount, ej.e.maxItemStackSize - Uu.current.amount);
          Zu(Uu.current.idx, uu) && (Uu.current.amount += uu)
        } else {
          Zu(Uu.current.idx, 1) && Uu.current.amount++
        } else if (su.current && !Uu.current && !Eu && su.current.amount > 0) su.current.amount--, Uu.current = {
          idx: su.current.idx,
          name: su.current.name,
          attributes: su.current.attributes,
          amount: 1
        }, su.current.amount <= 0 && Xu();
        else {
          const uu = su.current;
          su.current = Uu.current, Uu.current = uu
        }
      }(uu, Uu) : (0, fj.v)(Eu) ? function(uu, Eu) {
        var ju, su;
        const {
          idx: Uu,
          draggedInfoRef: Zu,
          specialItemRef: Xu,
          canCraft: lu,
          variation: qu,
          swapSlots: fu,
          moveIntoSlots: Cu
        } = uu;
        if (!Eu) return;
        let bu = Eu.amount;
        Uu === (null === (ju = Zu.current) || void 0 === ju ? void 0 : ju.idx) && (bu = Zu.current.amount <= 0 ? 0 : Eu.amount - Zu.current.amount);
        Uu === (null === (su = Xu.current) || void 0 === su ? void 0 : su.idx) && (bu = Xu.current.amount <= 0 ? 0 : Eu.amount - Xu.current.amount);
        if (0 === bu) return;
        const cu = uu.readInventory(),
          Nu = cu.player.length,
          Ou = cu.chest,
          Yu = Nu - Ps.d.length,
          hu = () => {
            if (!(0, Uj.g)()) return void Cu(10, Yu, Uu, bu);
            const uu = uu => {
              const ju = (0, fj.m)(cu, uu);
              return ju ? {
                amount: ju.amount,
                stacksWithMoved: (0, Qs.b)(ju, Eu)
              } : null
            };
            for (const Eu of ((uu, Eu, ju, su, Uu) => {
                const Zu = [];
                let Xu = su;
                if (null !== su) {
                  let lu = 0;
                  for (let su = Eu; su < ju; su++) {
                    const Eu = uu(su);
                    null !== Eu && void 0 !== Eu && Eu.stacksWithMoved && null !== Eu.amount && Eu.amount > 0 && (lu += Math.max(0, Uu - Eu.amount))
                  }
                  const qu = Math.min(su, lu);
                  if (qu > 0 && (Zu.push({
                      start: Eu,
                      end: ju,
                      amount: qu
                    }), Xu = su - qu), Xu <= 0) return Zu
                }
                for (let lu = ju - 1; lu >= Eu; lu--)
                  if (null === uu(lu)) {
                    Zu.push({
                      start: lu,
                      end: lu + 1,
                      amount: Xu
                    });
                    break
                  } return Zu
              })(uu, 10, Yu, bu, ej.e.maxItemStackSize)) Cu(Eu.start, Eu.end, Uu, Eu.amount)
          };
        if (!lu || "Enchanting Table" !== qu && "Salvaging Table" !== qu) {
          const ju = (0, du.zb)(Eu.name),
            su = ju ? (0, du.xb)(ju) : null;
          if (!Ps.d.includes(ju) || Uu !== su && (0, fj.o)(cu, uu.itemInfo, su, Uu))
            if (Ou)
              if (Uu < Nu) {
                var Du, gu;
                const [uu, Eu] = null !== (Du = null === (gu = (0, gs.d)(Ou.type)) || void 0 === gu ? void 0 : gu.quickMoveRange) && void 0 !== Du ? Du : [0, Ou.numSlots];
                Cu(Nu + uu, Nu + Eu, Uu, bu)
              } else Cu(0, Nu - Ps.d.length, Uu, bu);
          else cu.creative ? Uu < 10 ? hu() : Uu < Nu ? Cu(0, 10, Uu, bu) : Cu(0, Nu - Ps.d.length, Uu, null !== Eu.amount ? ej.e.maxItemStackSize : null) : Uu < 10 ? hu() : Cu(0, 10, Uu, bu);
          else Uu < Nu - Ps.d.length || Uu >= Nu ? fu(su, Uu) : (Cu(0, Nu - Ps.d.length, su, bu), lj.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Xu.current = {
          idx: Uu,
          name: Eu.name,
          attributes: Eu.attributes,
          amount: null !== Eu.amount ? bu : 0
        }
      }(uu, su) : uu.draggedInfoRef.current ? function(uu, Eu, ju, su) {
        const {
          draggedInfoRef: Uu,
          specialItemRef: Zu,
          moveAmtIntoSlot: Xu,
          swapSlots: lu,
          removeItem: qu,
          removeDraggedInfoRef: fu
        } = uu, Cu = uu.readInventory(), bu = Uu.current.idx;
        if (ju && (Eu === bu || (0, Qs.b)(Uu.current, ju)) && Uu.current.amount > 0 && (0, fj.e)(ju) > 0 && (ju.amount < ej.e.maxItemStackSize || Eu === bu)) su ? ju.amount + Uu.current.amount <= ej.e.maxItemStackSize || Eu === bu ? Xu(Eu, Uu.current.amount) : Xu(Eu, ej.e.maxItemStackSize - ju.amount) : Xu(Eu, 1);
        else if (Uu.current.amount > 0 && !ju) Xu(Eu, su ? Uu.current.amount : 1);
        else if (su || ju || 0 === Uu.current.amount)
          if (Cu.creative && !Cu.chest && Eu >= Cu.player.length) {
            const uu = 0 === Uu.current.amount ? 1 : Uu.current.amount;
            qu(Uu.current.idx, uu, !1) && fu()
          } else {
            var cu;
            const ju = (null === (cu = Zu.current) || void 0 === cu ? void 0 : cu.idx) === Eu;
            if (lu(Eu, Uu.current.idx)) {
              const su = uu.readInventory(),
                Xu = (0, fj.m)(su, bu),
                lu = !su.chest && su.creative && Uu.current.idx >= su.player.length;
              if (Xu && Uu.current.idx !== Eu && !lu) {
                let uu = (0, fj.e)(Xu);
                ju && (uu -= Zu.current.amount), Uu.current = ju && 0 === uu ? null : {
                  idx: Uu.current.idx,
                  name: Xu.name,
                  attributes: Xu.attributes,
                  amount: uu
                }
              } else fu()
            }
          }
        else Xu(Eu, 1)
      }(uu, ju, su, Uu) : function(uu, Eu, ju, su) {
        var Uu;
        const {
          draggedInfoRef: Zu,
          specialItemRef: Xu
        } = uu;
        if (!ju) return;
        let lu = (0, fj.e)(ju);
        const qu = (null === (Uu = Xu.current) || void 0 === Uu ? void 0 : Uu.idx) === Eu;
        qu && (lu -= Xu.current.amount);
        su || (lu = Math.ceil(lu / 2));
        Zu.current = qu && 0 === lu ? null : {
          idx: Eu,
          name: ju.name,
          attributes: ju.attributes,
          amount: lu
        }
      }(uu, ju, su, Uu)
    }

    function Ws(uu, Eu) {
      return !!Eu && Eu.name === uu.name
    }

    function Ss() {
      return fu.gameBridge.latest("inventory")
    }

    function Is(uu, Eu, ju) {
      return fu.gameBridge.send("removeInventoryItem", {
        slot: uu,
        amount: Eu,
        drop: ju
      })
    }

    function Fs(uu) {
      return (0, fj.l)(uu, fu.gameBridge.latest("itemInfo"), fu.gameBridge.latest("stationItems").enchantable)
    }

    function Bs(uu) {
      let {
        show: Eu,
        close: ju,
        canCraft: su,
        variation: Zu,
        inventoryItemsMoveable: Xu,
        setCraftFlyAnims: lu
      } = uu;
      (0, au.f)("itemInfo");
      const [qu, Cu] = (0, Uu.useState)(null), [bu, cu] = (0, Uu.useState)(null), [Nu, Ou] = (0, Uu.useState)(!1), Yu = (0, Uu.useRef)(null), hu = (0, Uu.useRef)(null), Du = (0, Uu.useRef)(null), gu = (0, Uu.useRef)(null), [Mu, eu] = (0, Uu.useReducer)((uu => uu + 1), 0), Gu = (0, Uu.useCallback)((() => {
        Eu && eu()
      }), [Eu, eu]), pu = (0, Uu.useCallback)((() => {
        hu.current = null, ru.current = null, Gu()
      }), [Gu]), wu = (0, Uu.useCallback)(((uu, Eu) => {
        lu((ju => ju.map((ju => "ingredient" === ju.kind ? ju : ju.yl === uu ? {
          ...ju,
          yl: Eu,
          to: (0, fj.i)(Eu)
        } : ju.yl === Eu ? {
          ...ju,
          yl: uu,
          to: (0, fj.i)(uu)
        } : ju))))
      }), [lu]), Ju = (0, Uu.useCallback)(((uu, Eu) => {
        const ju = Wu.current;
        if (ju.x = uu, ju.y = Eu, Yu.current) !Su.current.isTouch || Su.current.itemBeingDragged && !ru.current ? (Yu.current.style.transform = `translate(${ju.x}px, ${ju.y}px)`, Ou(Su.current.isTouch && !ru.current)) : (Yu.current.style.transform = "translate(0.5rem, 0.5rem)", Ou(!0));
        else if (gu.current) {
          const ju = gu.current;
          let su = uu + 10,
            Uu = Eu + 10;
          const Zu = ju.offsetWidth,
            Xu = ju.offsetHeight;
          su + Zu > window.innerWidth && (su = uu - Zu - 10), Uu + Xu > window.innerHeight && (Uu = Eu - Xu - 10), su < 0 && (su = 0), Uu < 0 && (Uu = 0), gu.current.style.transform = `translate(${su}px, ${Uu}px)`
        }
      }), []), Pu = (0, Uu.useCallback)((uu => (Eu, ju, su) => {
        if (Cu(Eu && void 0 !== uu ? uu : null), Eu) {
          if (void 0 === uu && !ju) return void(0, rs.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== uu) {
            var Uu;
            const Eu = Ss();
            let ju;
            if (ju = uu === bj.h ? Du.current ? (0, fj.m)(Eu, Du.current.idx) : null : (0, fj.m)(Eu, uu), !ju) return void cu(null);
            if ((null === (Uu = Du.current) || void 0 === Uu ? void 0 : Uu.idx) === uu) {
              if (0 === (0, fj.e)(ju) - Du.current.amount) return void cu(null)
            }
            cu(Fs(ju))
          } else cu({
            name: ju.name,
            desc: ju.desc,
            fontStyle: "normal"
          })
        } else cu(null);
        su && setTimeout((() => {
          Ju(su.pageX, su.pageY)
        }), 0)
      }), [Ju]), ou = (0, Uu.useCallback)(((uu, Eu) => {
        const ju = fu.gameBridge.send("moveInventoryItem", {
          from: hu.current.idx,
          to: uu,
          amount: Eu
        });
        return ju ? (hu.current.amount -= Eu, hu.current.amount <= 0 && pu()) : console.error("moveInventoryItem failed"), ju
      }), [pu]), ku = (0, Uu.useCallback)(((uu, Eu) => {
        const ju = Du.current,
          su = null === ju || void 0 === ju ? void 0 : ju.idx;
        ju && (ju.idx = function(uu, Eu, ju) {
          return uu === Eu ? ju : uu === ju ? Eu : uu
        }(su, uu, Eu));
        const Uu = fu.gameBridge.send("swapInventorySlots", {
          a: uu,
          b: Eu
        });
        return Uu ? wu(uu, Eu) : ju && (ju.idx = su), Uu
      }), [wu]), mu = (0, Uu.useCallback)(((uu, Eu, ju, su) => {
        const Uu = fu.gameBridge.send("quickMoveInventoryItem", {
          slot: ju,
          start: uu,
          end: Eu,
          amount: su
        });
        null !== Uu && wu(ju, Uu)
      }), [wu]), vu = (0, Uu.useCallback)(((uu, Eu) => {
        var Uu;
        ((uu, Eu, ju) => {
          const su = uu - (ju - Ps.d.length);
          return !(!Eu || su < 0 || su >= Ps.d.length) && (0, du.zb)(Eu) !== Ps.d[su]
        })(Eu, null === (Uu = hu.current) || void 0 === Uu ? void 0 : Uu.name, Ss().player.length) || (is({
          e: uu,
          idx: Eu,
          readInventory: Ss,
          itemInfo: fu.gameBridge.latest("itemInfo"),
          draggedInfoRef: hu,
          specialItemRef: Du,
          moveAmtIntoSlot: ou,
          swapSlots: ku,
          moveIntoSlots: mu,
          removeItem: Is,
          removeDraggedInfoRef: pu,
          close: ju,
          canCraft: su,
          variation: Zu
        }), Gu())
      }), [su, ju, ou, mu, pu, ku, Zu, Gu]), Ku = (0, Uu.useRef)(0), Vu = (0, Uu.useRef)(null), ru = (0, Uu.useRef)(null), Qu = (0, Uu.useRef)(null), iu = (0, Uu.useRef)(new Set), Wu = (0, Uu.useRef)({
        x: 0,
        y: 0
      }), Su = (0, Uu.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Iu = (0, Uu.useCallback)((() => (Qu.current = null, Su.current.itemBeingDragged = !1, clearTimeout(Vu.current), !!ru.current && (ru.current = null, Gu(), !0))), [Gu]);
      (0, Uu.useEffect)((() => {
        Iu(), iu.current.clear()
      }), [Eu]);
      const Fu = uu => void 0 !== uu && (iu.current.has(uu) || null !== Qu.current && uu !== Qu.current),
        Bu = uu => {
          Su.current.isTouch = (0, fj.r)(uu)
        },
        Lu = (0, Uu.useCallback)((uu => Eu => {
          const su = (0, fj.r)(Eu);
          if (su || Ju(Eu.pageX, Eu.pageY), Xu)
            if (Fu(Eu.pointerId)) void 0 !== Eu.pointerId && iu.current.add(Eu.pointerId);
            else {
              if (Bu(Eu), su) {
                Ku.current = Eu.timeStamp, Su.current.itemBeingDragged = !0, Qu.current = Eu.pointerId;
                const ju = (0, fj.m)(Ss(), uu);
                if (ju && ju.amount && ju.amount > 0) {
                  const ju = Eu.pageX,
                    su = Eu.pageY,
                    Uu = Wu.current.x,
                    Zu = Wu.current.y;
                  clearTimeout(Vu.current), Vu.current = setTimeout((() => {
                    if (hu.current && hu.current.idx === uu && (Math.abs(ju - Wu.current.x) < 20 && Math.abs(su - Wu.current.y) < 20 || Uu === Wu.current.x && Zu === Wu.current.y) && Su.current.itemBeingDragged) {
                      const uu = Ss(),
                        ju = uu.creative && !uu.chest && hu.current.idx >= ej.e.numInvenSlots && null !== (0, fj.m)(uu, hu.current.idx).amount ? ej.e.maxItemStackSize : hu.current.amount;
                      ru.current = {
                        initTouchX: Eu.pageX,
                        initTouchY: Eu.pageY,
                        maxAmount: ju
                      }, hu.current.amount = Math.ceil(hu.current.amount / 2), Yu.current.style.transform = "translate(0.5rem, 0.5rem)", Ou(!0), Gu()
                    }
                  }), 500)
                }
              }
              vu(Eu, uu)
            }
          else uu === bj.e && (0, fj.p)(Eu) && ju()
        }), [Ju, vu, Xu, ju, Gu]),
        tu = (0, Uu.useCallback)((uu => uu => {
          if (Fu(uu.pointerId)) return;
          const Eu = (0, fj.r)(uu);
          if (Bu(uu), !Iu()) {
            if (Eu && hu.current && uu.timeStamp - Ku.current > 150) {
              const Eu = document.elementFromPoint(uu.clientX, uu.clientY);
              if (null !== Eu) {
                const ju = Eu.getAttribute("data-inven-idx");
                null !== ju ? vu(uu, parseInt(ju)) : Eu.classList.contains("InventoryBackgroundScreen") && vu(uu, -1)
              }
            }
            Ju(uu.pageX, uu.pageY)
          }
        }), [Ju, vu, Iu]);
      (0, Uu.useEffect)((() => {
        let uu;
        const ju = ["pointerup", "pointercancel"],
          su = uu => {
            iu.current.has(uu.pointerId) ? setTimeout((() => {
              iu.current.delete(uu.pointerId)
            }), 0) : uu.pointerId === Qu.current && setTimeout((() => {
              Qu.current === uu.pointerId && Iu()
            }), 0)
          };
        if (Eu) {
          for (const uu of ju) document.addEventListener(uu, su, !0);
          if (!Su.current.isTouch) {
            const uu = Wu.current;
            Ju(uu.x, uu.y)
          }
          uu = uu => {
            uu.preventDefault(), Fu(uu.pointerId) || (Bu(uu), Ju(uu.pageX, uu.pageY), ru.current && uu.pointerId === Qu.current && (uu => {
              if (!hu.current) return ru.current = null, void Gu();
              const {
                initTouchX: Eu,
                maxAmount: ju
              } = ru.current, su = (uu.pageX - Eu) * ru.current.maxAmount / 160, Uu = Math.ceil(ju / 2) + Math.ceil(su);
              hu.current.amount = Math.min(ju, Math.max(1, Uu)), Gu()
            })(uu))
          }, document.addEventListener("pointermove", uu, !0)
        }
        return () => {
          document.removeEventListener("pointermove", uu, !0);
          for (const uu of ju) document.removeEventListener(uu, su, !0)
        }
      }));
      const xu = (0, Uu.useCallback)((() => {
          if (hu.current) {
            const uu = (0, fj.m)(Ss(), hu.current.idx);
            (!Ws(hu.current, uu) || uu.amount < hu.current.amount) && pu()
          }
        }), [pu]),
        Tu = (0, Uu.useCallback)((() => {
          const uu = hu.current;
          if (uu) {
            const Eu = (0, fj.m)(Ss(), uu.idx);
            Ws(uu, Eu) && (uu.attributes = Eu.attributes)
          }
        }), []);
      return {
        draggedDomRef: Yu,
        draggedInfoRef: hu,
        specialItemRef: Du,
        hoverInfoDomRef: gu,
        longHoldSplitInfoRef: ru,
        currHoveredIdx: qu,
        currHoveredDisplayInfo: bu,
        displayDraggedItemName: Nu,
        forceRerenderIfVisible: Gu,
        removeDraggedInfoRef: pu,
        checkDraggedItemConsistencyWithInven: xu,
        refreshDraggedAttributes: Tu,
        swapSlots: ku,
        getPointerDownForIdx: Lu,
        getPointerUpForIdx: tu,
        getSetHovering: Pu,
        setCurrHoveredDisplayInfo: cu,
        moveFollowerTo: Ju
      }
    }
    class Ls {
      constructor(uu) {
        this.snapshot = [], this.newSlots = new Set, this.update(uu, !1)
      }
      update(uu, Eu) {
        const ju = uu.map((uu => {
          var Eu;
          return uu ? {
            name: uu.name,
            amount: null !== (Eu = uu.amount) && void 0 !== Eu ? Eu : 1
          } : null
        }));
        ju.forEach(((uu, ju) => {
          const su = this.snapshot[ju],
            Uu = (null === uu || void 0 === uu ? void 0 : uu.name) !== (null === su || void 0 === su ? void 0 : su.name);
          (!uu || Uu || uu.amount < su.amount) && this.newSlots.delete(ju), Eu && uu && (Uu || uu.amount > su.amount) && this.newSlots.add(ju)
        })), this.snapshot = ju
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(uu) {
        return this.newSlots.has(uu)
      }
    }
    const ts = (uu, Eu, ju) => ({
      button: Eu,
      shiftKey: ju,
      pageX: uu.clientX,
      pageY: uu.clientY,
      clientX: uu.clientX,
      clientY: uu.clientY,
      pointerType: "mouse"
    });

    function xs(uu) {
      const [Eu, ju] = (0, Uu.useState)(uu);
      return uu && !Eu && ju(!0), (0, Uu.useEffect)((() => {
        if (Eu) return;
        let uu = !0;
        const su = () => {
            uu && (uu = !1, ju(!0))
          },
          Uu = "function" === typeof window.requestIdleCallback,
          Zu = Uu ? window.requestIdleCallback(su, {
            timeout: 2e3
          }) : void 0,
          Xu = setTimeout(su, Uu ? 2e3 : 1e3);
        return () => {
          uu = !1, clearTimeout(Xu), void 0 !== Zu && window.cancelIdleCallback(Zu)
        }
      }), [Eu]), Eu
    }
    const Ts = (0, Uu.memo)((function(uu) {
      var Eu;
      let {
        show: ju,
        onOpen: su,
        onClose: Zu,
        variation: lu
      } = uu;
      const bu = (0, Uu.useRef)(null),
        cu = (0, Uu.useRef)(null),
        Nu = function(uu) {
          const [Eu, ju] = (0, Uu.useState)(!0), [su, Zu] = (0, Uu.useState)(!1), Xu = (0, Uu.useRef)(null), lu = (0, Uu.useRef)(null), fu = (0, qu.h)("_shield"), Cu = (0, Uu.useRef)(null), bu = (0, qu.h)("_health"), cu = (0, Uu.useRef)(null);

          function Nu(uu) {
            const Eu = Date.now() + uu;
            Eu < lu.current || (ju(!1), clearTimeout(Xu.current), lu.current = Eu, Xu.current = setTimeout((() => {
              ju(!0)
            }), uu))
          }
          return (0, Uu.useEffect)((() => {
            Nu(Nj);
            const uu = Ou.h.subscribe("requestingPlayVideoAd", (() => {
              Nu(Nj)
            }));
            return () => {
              clearTimeout(Xu.current), Ou.h.unsubscribe(uu)
            }
          }), []), (0, Uu.useEffect)((() => {
            (Cu.current > fu || cu.current > bu) && Nu(6e4), Cu.current = fu, cu.current = bu
          }), [fu, bu]), (0, Uu.useEffect)((() => {
            let Eu = null;
            return uu ? Eu = setTimeout((() => {
              Zu(!0)
            }), 250) : Zu(!1), () => {
              clearTimeout(Eu)
            }
          }), [uu]), Eu && su
        }(ju);
      (0, Ju.g)(jj.d, null);
      const Yu = (0, jj.k)(),
        hu = Yu.some((uu => uu.panel)),
        {
          userContext: Du
        } = (0, pu.c)(),
        gu = (0, au.d)("inventory", (uu => {
          const Eu = uu.chest;
          return null !== Eu && (es(Eu.numSlots) || ds(Eu, Du.whamm))
        })),
        Mu = xs(ju),
        eu = xs(ju),
        [Gu, wu] = (0, Uu.useState)([]),
        Pu = (0, Uu.useCallback)((uu => {
          wu((Eu => Eu.filter((Eu => Eu.id !== uu))))
        }), []),
        ou = (0, Uu.useRef)(null),
        ku = (0, Uu.useRef)(0),
        mu = (0, Uu.useCallback)((() => {
          ou.current && (ku.current = ou.current.scrollTop), Zu()
        }), [Zu]),
        vu = (0, qu.h)("inventoryItemsMoveable"),
        Ku = (0, qu.h)("canCraft"),
        {
          clientEscMenuOptions: ru
        } = (0, Su.l)(["clientEscMenuOptions"]),
        Qu = (0, Uu.useRef)(null);
      Qu.current || (Qu.current = new Ls(fu.gameBridge.latest("inventory").player));
      const iu = Qu.current,
        {
          draggedDomRef: Wu,
          draggedInfoRef: Iu,
          specialItemRef: Fu,
          hoverInfoDomRef: Bu,
          longHoldSplitInfoRef: Lu,
          currHoveredIdx: tu,
          currHoveredDisplayInfo: xu,
          displayDraggedItemName: Tu,
          forceRerenderIfVisible: Hu,
          removeDraggedInfoRef: Au,
          checkDraggedItemConsistencyWithInven: nu,
          refreshDraggedAttributes: yu,
          swapSlots: zu,
          getPointerDownForIdx: Ru,
          getPointerUpForIdx: uE,
          getSetHovering: EE,
          setCurrHoveredDisplayInfo: jE,
          moveFollowerTo: sE
        } = Bs({
          show: ju,
          close: mu,
          canCraft: Ku,
          variation: lu,
          inventoryItemsMoveable: vu,
          setCraftFlyAnims: wu
        });
      (0, Uu.useEffect)((() => {
        const uu = !ju && null !== fu.gameBridge.latest("inventory").chest;
        if (uu && fu.gameBridge.send("closeChest", null), ju || (iu.clearMarks(), EE(null)(!1)), uu) {
          lj.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [ju]), (0, au.b)("chestToggled", (uu => {
        if (uu ? su() : ju && mu(), uu) {
          lj.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const UE = (0, kE.n)();
      (0, au.b)("inventory", (uu => {
        let {
          player: Eu
        } = uu;
        var su, Uu, Zu;
        (iu.update(Eu, !ju && UE.shown), Fu.current) && (Fu.current = (Uu = Fu.current, Zu = null !== (su = Eu[Fu.current.idx]) && void 0 !== su ? su : null, Ws(Uu, Zu) ? (Uu.attributes = Zu.attributes, null !== Zu.amount && Uu.amount > Zu.amount && (Uu.amount = Zu.amount), Uu) : null));
        yu(), null !== tu && EE(tu)(!0), Hu()
      })), (0, Uu.useEffect)((() => (fu.gameBridge.send("setInventoryOpen", ju), () => {
        fu.gameBridge.send("setInventoryOpen", !1)
      })), [ju]);
      const ZE = (uu, Eu) => {
        if (uu === bj.h) return void(uu => {
          const Eu = Fu.current;
          if (!Eu || null === (0, fj.m)(fu.gameBridge.latest("inventory"), Eu.idx)) return;
          const ju = uu ? Math.max(Eu.amount, 1) : 1,
            su = Eu.amount - ju;
          if (!fu.gameBridge.send("removeInventoryItem", {
              slot: Eu.idx,
              amount: ju,
              drop: !0
            })) return;
          const Uu = Fu.current;
          Uu && (Uu.amount = Math.min(Uu.amount, su), Uu.amount <= 0 && (Fu.current = null)), Hu()
        })(Eu);
        const ju = null === uu ? null : (0, fj.m)(fu.gameBridge.latest("inventory"), uu);
        if (null !== ju) {
          var su, Uu, Zu;
          const Xu = Eu && null !== (su = ju.amount) && void 0 !== su ? su : 1;
          fu.gameBridge.send("removeInventoryItem", {
            slot: uu,
            amount: Xu,
            drop: !0
          }), uu === (null === (Uu = Iu.current) || void 0 === Uu ? void 0 : Uu.idx) && (Iu.current.amount -= Xu, Iu.current.amount <= 0 && Au(), Hu()), uu === (null === (Zu = Fu.current) || void 0 === Zu ? void 0 : Zu.idx) && (Fu.current = null, Hu())
        }
      };
      (0, au.b)("inventoryDropRequested", (uu => {
        ju && tu !== bj.h && ZE(tu, uu)
      }));
      const XE = (uu, Eu) => {
        let ju = Eu;
        if (Eu === bj.h) {
          if (!Fu.current) return;
          ju = Fu.current.idx
        }
        const su = zu(uu, ju);
        if (su && Iu.current && (Iu.current.idx === ju ? Iu.current.idx = uu : Iu.current.idx === uu && (Iu.current.idx = ju)), su && Eu === bj.h) {
          const uu = (0, fj.m)(fu.gameBridge.latest("inventory"), ju);
          Fu.current = uu ? {
            idx: ju,
            name: uu.name,
            attributes: uu.attributes,
            amount: (0, fj.e)(uu)
          } : null
        }
        Hu()
      };
      (0, au.b)("numberKeyPressed", (uu => {
        null !== tu && ju && XE(uu - 1, tu)
      })), (0, Uu.useEffect)((() => {
        ju || (Fu.current = null, Au(), jE(null))
      }), [ju, Au, jE, Fu]);
      const lE = Fu.current;
      (0, Uu.useEffect)((() => {
        tu === bj.h && EE(bj.h)(!0)
      }), [lE, tu, EE]);
      const qE = () => {
        nu(), yu(), Hu()
      };
      (0, au.b)("chestRefreshed", qE), (0, au.b)("inventorySynced", qE);
      const [fE, CE] = (0, Uu.useState)(new Map), bE = null !== (Eu = fE.get(lu)) && void 0 !== Eu ? Eu : null, cE = (uu, Eu) => {
        CE((ju => {
          const su = ju.get(uu);
          return su && su.name === Eu.name && su.dC === Eu.dC ? ju : new Map(ju).set(uu, Eu)
        }))
      };
      (0, Ju.f)("craftingRecipesEdited", (() => {
        Hu()
      })), (0, Ju.f)(tj.e, (uu => {
        let {
          variation: Eu,
          itemName: ju
        } = uu;
        cE(Eu, {
          name: ju,
          dC: 0
        })
      }));
      const [NE, OE] = (0, Uu.useState)(null), [YE, hE] = (0, Uu.useState)(null);
      (0, au.b)("enchantingTableOpened", (uu => {
        let {
          position: Eu,
          blockName: ju
        } = uu;
        OE(Eu), hE(ju)
      }));
      const [DE, gE] = (0, Uu.useState)(""), [ME, eE] = (0, Uu.useState)(null);
      (0, Uu.useEffect)((() => {
        ju && ou.current && (ou.current.scrollTop = ku.current)
      }), [ju]);
      return (uu => {
        const Eu = (0, Uu.useRef)(uu);
        Eu.current = uu, (0, Uu.useEffect)((() => {
          if (!uu.show) return;
          const ju = (uu, ju, su, Uu) => {
              const {
                getPointerDownForIdx: Zu,
                getPointerUpForIdx: Xu
              } = Eu.current;
              Zu(uu)(ts(ju, su, Uu)), Xu(uu)(ts(ju, su, Uu))
            },
            su = {
              primary: (uu, Eu) => {
                ju(uu, Eu, 0, !1)
              },
              secondary: (uu, Eu) => {
                ju(uu, Eu, 2, !1)
              },
              quickMove: (uu, Eu) => {
                ju(uu, Eu, 0, !0)
              },
              dropHeld: (uu, ju) => {
                Eu.current.getPointerDownForIdx(bj.e)(ts(ju, uu ? 0 : 2, !1))
              },
              dropSlot: (uu, ju) => {
                Eu.current.dropFromIdx(uu, ju)
              },
              swapWithHotbar: (uu, ju) => {
                Eu.current.swapWithHotbar(uu, ju)
              },
              cancel: () => {
                Eu.current.removeDraggedInfoRef()
              },
              isHolding: () => !!Eu.current.draggedInfoRef.current,
              hasItemAt: uu => {
                const {
                  draggedInfoRef: ju,
                  specialItemRef: su
                } = Eu.current;
                if (uu === bj.h) return !!su.current;
                const Uu = (0, fj.m)(fu.gameBridge.latest("inventory"), uu);
                return !!Uu && (0, aj.f)(uu, (0, fj.e)(Uu), [ju.current, su.current]).shown
              },
              hover: (uu, ju) => {
                const {
                  moveFollowerTo: su,
                  getSetHovering: Uu
                } = Eu.current;
                su(ju.clientX, ju.clientY), Uu(null !== uu && void 0 !== uu ? uu : void 0)(null !== uu, void 0, {
                  pageX: ju.clientX,
                  pageY: ju.clientY
                })
              },
              moveTo: uu => {
                Eu.current.moveFollowerTo(uu.clientX, uu.clientY)
              },
              close: () => {
                Eu.current.close()
              }
            };
          return (0, sj.m)(su)
        }), [uu.show])
      })({
        show: ju,
        close: mu,
        draggedInfoRef: Iu,
        specialItemRef: Fu,
        getPointerDownForIdx: Ru,
        getPointerUpForIdx: uE,
        getSetHovering: EE,
        moveFollowerTo: sE,
        removeDraggedInfoRef: Au,
        dropFromIdx: ZE,
        swapWithHotbar: XE
      }), (0, Uu.useEffect)((() => {
        Ou.h.TY("inventoryDraggedItemUpdated", {
          draggedInfo: Iu.current,
          specialItemInfo: Fu.current,
          setHovered: EE,
          pointerDown: Ru,
          pointerUp: uE,
          variation: Ku ? lu : void 0,
          craftFlyAnims: Gu
        })
      })), (0, Cu.jsxs)(Vu.b, {
        show: ju,
        style: {
          touchAction: ju ? "none" : void 0
        },
        children: [Iu.current && (0, Cu.jsx)(Yj, {
          draggedInfo: Iu.current,
          toAddRef: Wu
        }), Iu.current && Tu && (0, Cu.jsx)(hj, {
          className: "DraggedInvenItemName",
          displayInfo: Fs(Iu.current),
          domRef: null
        }), !Iu.current && xu && (0, Cu.jsx)(hj, {
          displayInfo: xu,
          domRef: Bu
        }), Lu.current && Iu.current && (0, Cu.jsx)(Dj, {
          info: Lu.current,
          draggedInfo: Iu.current
        }), Gu.map((uu => (0, Cu.jsx)(Cj.e, {
          anim: uu,
          onComplete: Pu
        }, uu.id))), (0, Cu.jsx)(Xu.c, {
          show: ju,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: mu,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: Ru(bj.e),
          pointerUp: uE(bj.e),
          doGameplayStartStopOnShow: !0
        }), Mu && (0, Cu.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Cu.jsx)("div", {
            ref: bu,
            className: "InventoryAdOuter",
            children: (0, Cu.jsx)(qj.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: bu
              },
              verticalAlign: "start",
              showing: ju && Nu,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Cu.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Cu.jsxs)("div", {
              className: Mj()("Inventory", {
                WithGameButtons: Yu.length > 0,
                WithPanelButtons: hu,
                WideChestOpen: gu
              }),
              children: [(0, Cu.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Cu.jsx)(Xj, {
                show: ju,
                buttons: Yu
              }), (0, Cu.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Cu.jsx)(as, {
                  variation: lu,
                  canCraft: Ku,
                  show: ju,
                  creativeMounted: eu,
                  specialItemRef: Fu,
                  draggedInfo: Iu.current,
                  getSetHovering: EE,
                  getPointerDownForIdx: Ru,
                  getPointerUpForIdx: uE,
                  enchantingTablePosition: NE,
                  enchantingTableBlockName: YE,
                  selectedCraftable: bE,
                  dispatchSelectedCraftable: uu => {
                    cE(lu, uu)
                  },
                  creativeScrollDiv: ou,
                  creativeSearchVal: DE,
                  setCreativeSearchVal: gE,
                  creativeCategory: ME,
                  setCreativeCategory: eE,
                  onCraft: function(uu, Eu) {
                    let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (nu(), (uu || ju.length > 0) && wu((Eu => {
                        const su = [...Eu],
                          Uu = Eu.filter((uu => "ingredient" === uu.kind)).length;
                        for (const uu of ju.slice(0, Math.max(0, 24 - Uu))) su.push({
                          id: (0, Cj.f)(),
                          ...uu,
                          to: uu.to
                        });
                        return uu && su.push({
                          id: (0, Cj.f)(),
                          ...uu,
                          to: (0, fj.i)(uu.yl)
                        }), su
                      })), null !== Eu) {
                      var su;
                      const uu = fu.gameBridge.latest("inventory");
                      (0, du.zb)(null === (su = (0, fj.m)(uu, Eu)) || void 0 === su ? void 0 : su.name) ? Ru(Eu)({
                        button: 0,
                        shiftKey: !0
                      }): zu(Eu, uu.selectedSlot)
                    }
                  }
                }), (0, Cu.jsx)(Vs, {
                  draggedInfo: Iu.current,
                  specialItemInfo: Fu.current,
                  craftFlyAnims: Gu,
                  getSetHovering: EE,
                  getPointerDownForIdx: Ru,
                  getPointerUpForIdx: uE,
                  variation: lu,
                  canCraft: Ku,
                  isNewSlot: uu => ru.showNewItemIndicator && iu.isNew(uu)
                })]
              })]
            }), (0, Cu.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Cu.jsx)("div", {
                ref: cu,
                className: "InventoryAd",
                children: (0, Cu.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Hs = ju(1487),
      As = ju(131);
    const ns = (0, Uu.memo)((function(uu) {
      let {
        show: Eu,
        onOpen: ju,
        onClose: su
      } = uu;
      const Zu = (0, Uu.useRef)(0),
        lu = () => (0, Hs.i)() && !(0, Hs.o)() && Zu.current <= 2;
      Eu = lu() && Eu;
      const qu = () => {
        Zu.current++, su()
      };
      (0, Ju.f)("ctrlCrouchWithoutFullscreen", (() => {
        lu() && ju()
      })), (0, Ju.f)("displaymodeFullscreenChange", (uu => {
        Eu && uu && qu()
      }));
      const fu = "crazygames" === As.siteUsed;
      return (0, Cu.jsx)(Xu.c, {
        close: qu,
        escDoesExit: !0,
        show: Eu,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Cu.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Cu.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), fu && (0, Cu.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Cu.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Cu.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!fu && (0, Cu.jsx)(Nu.p, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Hs.q)(), qu()
              },
              children: (0, Cu.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Cu.jsx)(Nu.R, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                qu()
              },
              children: (0, Cu.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var ys = ju(3804),
      zs = ju(3821),
      Rs = ju(1405),
      uU = ju(3787),
      EU = ju(1413),
      jU = ju(36946),
      sU = ju(3799),
      UU = ju(3802);

    function ZU(uu, Eu) {
      return (0, jU.d)(!0, uu, Eu) ? () => {
        !async function(uu) {
          await uU.d.refresh();
          const {
            data: Eu,
            failed: ju
          } = uU.d.getState();
          if (null === Eu || ju) return;
          const su = uU.d.getExclusion(uu);
          if ("blocked" === su) return;
          const Uu = null === su;
          Rs.NotificationProvider.showCustomPopup({
            body: Eu => {
              const ju = ju => ({
                text: sU.g[ju].text,
                onClick: () => {
                  Eu(), (0, UU.f)(ju, uu, null)
                }
              });
              return (0, Cu.jsx)(EU.h, {
                title: Uu ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: uu
                  }
                },
                secondary: Uu ? ju("ignore") : void 0,
                confirm: ju("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: Eu
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
    ju(3812);
    const XU = (0, Uu.memo)((function(uu) {
      let {
        show: Eu,
        onOpen: ju,
        onClose: su
      } = uu;
      const [Zu, lu] = (0, Uu.useState)(""), [qu, bu] = (0, Uu.useState)(""), [cu, Nu] = (0, Uu.useState)(null), [Ou, Yu] = (0, Uu.useState)(null), hu = (0, au.f)("hiddenPlayerNames"), Du = {
        kind: "worldCodeLine",
        onSubmit: (uu, Eu) => {
          su(), fu.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: Ou,
            ql: uu,
            details: Eu
          })
        }
      }, gu = {
        kind: "player",
        shownPlayerName: (0, EE.e)(Zu, hu),
        onSubmit: (uu, Eu) => {
          su(), (0, zs.b)({
            playerId: qu,
            playerName: Zu,
            chatMsgId: Ou,
            policyId: uu,
            details: Eu,
            onAccepted: ZU(Zu, hu)
          })
        }
      };
      return (0, Ju.f)("OpenReportMenu", (uu => {
        let {
          playerEId: Eu,
          playerName: su,
          VC: Uu,
          serverChatMsgId: Zu
        } = uu;
        bu(Eu), lu(su), Nu(Uu), Yu(Zu), ju()
      })), (0, Cu.jsx)(Xu.c, {
        show: Eu,
        close: su,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Cu.jsx)("div", {
          className: "ReportPanel",
          children: Eu && (0, Cu.jsx)(ys.c, {
            reported: null === qu ? Du : gu,
            chatMessage: cu,
            inGame: !0,
            onCancel: su
          })
        })
      })
    }));
    var lU = ju(37241),
      qU = ju(3810);
    const fU = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      CU = (0, Uu.memo)((function(uu) {
        var Eu, ju;
        let {
          show: su,
          onOpen: Zu,
          onClose: lu
        } = uu;
        const {
          t: qu
        } = (0, Au.A)(), [bu, cu] = (0, Uu.useState)(null), [Ou, Yu] = (0, Uu.useState)(0);
        (0, Ju.f)("OpenDiscordReportBox", (uu => {
          fu.gameBridge.send("requestDiscordReportKey", uu), cu(null), Yu(0), Zu()
        })), (0, Ju.f)("setDiscordReportKey", cu);
        const hu = su && null === bu;
        (0, Uu.useEffect)((() => {
          if (!hu) return;
          const uu = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), cu({
              UX: null,
              ZX: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(uu)
          }
        }), [hu]);
        const Du = null !== (Eu = null === bu || void 0 === bu ? void 0 : bu.UX) && void 0 !== Eu ? Eu : null,
          gu = null !== (ju = null === bu || void 0 === bu ? void 0 : bu.ZX) && void 0 !== ju ? ju : null;
        return (0, Cu.jsx)(Xu.c, {
          show: su,
          close: lu,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, Cu.jsx)("div", {
            className: "ReportPanel",
            children: (0, Cu.jsxs)(EU.h, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === gu ? "report:discordReportDescription" : void 0,
              confirm: null === gu ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(lU.e, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === gu ? "general:cancel" : "general:ok",
                onClick: lu
              },
              padStartsOn: "cancel",
              children: [null !== gu && (0, Cu.jsx)(qU.b, {
                children: qu(fU[gu])
              }), null === gu && (0, Cu.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, Cu.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== Du && void 0 !== Du ? Du : qu("report:loadingReportKey")
                }), (0, Cu.jsx)(Nu.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(Du).catch((uu => {
                      console.error("Failed to copy report key:", uu)
                    })), Yu(Date.now())
                  },
                  disabled: Date.now() - Ou < 1e3 || !Du,
                  children: Date.now() - Ou < 1e3 ? qu("general:copied") : qu("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var bU = ju(1343);
    const cU = {
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
      NU = (0, Uu.memo)((function(uu) {
        let {
          show: Eu,
          onOpen: ju,
          onClose: su
        } = uu;
        const [Zu, lu] = (0, Uu.useState)(null), qu = (0, Uu.useRef)(0), bu = (0, Uu.useRef)(null), {
          t: cu
        } = (0, Au.A)();
        (0, Ju.f)("EditCustomLobbyBlock", (uu => {
          let {
            pos: Eu
          } = uu;
          lu(Eu), null !== Eu && ju(), bu.current.scrollTo(0, qu.current)
        }));
        const Nu = uu => {
          fu.gameBridge.send("setCustomLobbyBlock", {
            pos: Zu,
            blockName: uu
          }), su()
        };
        return (0, Cu.jsx)(Xu.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: su,
          escDoesExit: !0,
          show: Eu,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Cu.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: bu,
            onScroll: () => {
              qu.current = bu.current.scrollTop
            },
            children: (0, Cu.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(cU).map((uu => {
                let [Eu, ju] = uu;
                return (0, Cu.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Cu.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: cu(Eu)
                  }), (0, Cu.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(ju).map((uu => {
                      let [Eu, {
                        tooltip: ju,
                        blocks: su
                      }] = uu;
                      return (0, Cu.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Cu.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [cu(Eu), (0, Cu.jsx)(Tu.c, {
                            hoverInfo: cu(ju),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Cu.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: su.map((uu => (0, Cu.jsx)(OU, {
                            blockName: uu,
                            selectBlock: Nu
                          }, uu)))
                        })]
                      }, Eu)
                    }))
                  })]
                }, Eu)
              }))
            })
          })
        })
      })),
      OU = (0, Uu.memo)((function(uu) {
        var Eu;
        let {
          blockName: ju,
          selectBlock: su
        } = uu;
        const Uu = (0, ls.b)(ju),
          Zu = null !== (Eu = void 0 === Uu ? void 0 : (0, Xs.displayNameOf)(Uu)) && void 0 !== Eu ? Eu : ju,
          Xu = void 0 === Uu ? void 0 : (0, Xs.descriptionOf)(Uu);
        return (0, Cu.jsx)(Tu.e, {
          tooltipInner: (0, Cu.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Cu.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Cu.jsx)(wu.d, {
                text: Zu
              })
            }), Xu && (0, Cu.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Cu.jsx)(wu.d, {
                text: Xu
              })
            })]
          }),
          children: (0, Cu.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => su(ju),
            children: (0, Cu.jsx)(Zj.d, {
              itemName: ju,
              amount: 1
            })
          })
        }, ju)
      }));
    var YU = ju(3179),
      hU = ju(4411),
      DU = ju(34583);

    function gU() {
      const uu = (0, au.f)("itemInfo");
      return (0, Uu.useMemo)((() => function(uu) {
        return {
          getDefaultItemStat(Eu, ju) {
            var su;
            const Uu = uu[Eu];
            return "description" === ju ? null === Uu || void 0 === Uu ? void 0 : Uu.description : null !== (su = null === Uu || void 0 === Uu ? void 0 : Uu.displayName) && void 0 !== su ? su : Eu
          }
        }
      }(uu)), [uu])
    }
    const MU = (0, Uu.memo)((function(uu) {
        var Eu, ju, su, Zu, lu, qu, fu, bu, cu, Nu, Ou, Yu, Du, gu, Mu, eu, Gu, pu, wu, du, au, Pu, ou;
        let {
          togglePointerLock: ku,
          show: mu,
          onOpen: vu,
          onClose: Ku
        } = uu;
        const {
          t: Vu
        } = (0, Au.A)(), ru = gU(), Qu = (0, Uu.useRef)(null), iu = (0, Uu.useRef)(hU.e.MobHungerLevel.Hungry), Wu = (0, Uu.useRef)(null), Su = (0, YU.b)(), Iu = (0, Uu.useRef)(null), Fu = (0, Uu.useRef)(null), Bu = Qu.current;
        (0, Uu.useEffect)((() => {
          if (!mu) return;
          const uu = DU.k.openPet(Iu.current);
          return Fu.current = uu, () => {
            uu.close(), Fu.current = null
          }
        }), [mu]), (0, Uu.useEffect)((() => {
          mu && Bu && Fu.current.show(function(uu) {
            var Eu;
            let {
              mobType: ju,
              mobSettings: su
            } = uu;
            return {
              mobType: ju,
              variation: null !== (Eu = su.variation) && void 0 !== Eu ? Eu : "default",
              metaInfo: su.metaInfo,
              tamed: !(0, Ms.H)(su.ownerDbId)
            }
          }(Bu))
        }), [mu, Bu]), (0, Uu.useEffect)((() => {
          const uu = () => {
            var uu;
            const Eu = hU.e.getMobHungerLevel(null === (uu = Qu.current) || void 0 === uu ? void 0 : uu.mobSettings.petInfo.lastFedAt);
            if (Eu !== iu.current && (iu.current = Eu, Su()), Wu.current) {
              var ju;
              const uu = Date.now(),
                Eu = hU.e.getNextStateAt(null === (ju = Qu.current) || void 0 === ju ? void 0 : ju.mobSettings.petInfo.lastFedAt);
              let su = Math.floor((Eu - uu) / 1e3),
                Uu = "";
              if (su > 3600) {
                Uu += Math.floor(su / 60 / 60).toString().padStart(2, "0"), Uu += ":", su %= 3600
              }
              const Zu = su % 60;
              Uu += Math.floor(su / 60).toString().padStart(2, "0"), Uu += ":", Uu += Zu.toString().padStart(2, "0"), Wu.current.textContent = Uu
            }
          };
          uu();
          const Eu = setInterval(uu, 250);
          return () => {
            clearInterval(Eu)
          }
        }), [Bu, Su]), (0, Ju.f)("showPetUi", (uu => {
          let {
            mobType: Eu,
            mobSettings: ju
          } = uu;
          Qu.current = {
            mobType: Eu,
            mobSettings: ju
          }, mu || vu()
        }));
        const Lu = null === (Eu = Qu.current) || void 0 === Eu ? void 0 : Eu.mobSettings.health,
          tu = null === (ju = Qu.current) || void 0 === ju ? void 0 : ju.mobSettings.maxHealth,
          xu = hU.e.getFriendshipLevelInfo(null !== (su = null === (Zu = Qu.current) || void 0 === Zu ? void 0 : Zu.mobSettings.petInfo.friendshipPoints) && void 0 !== su ? su : 0);
        return (0, Cu.jsx)(Xu.c, {
          className: "PetUIOuter",
          close: Ku,
          escDoesExit: !0,
          show: mu,
          togglePointerLock: ku,
          forcePointerUnlock: mu,
          globallyUniqueKey: "PetUI",
          children: (0, Cu.jsx)("div", {
            className: "PetUI",
            children: (0, Cu.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Cu.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Cu.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (lu = null === (qu = Qu.current) || void 0 === qu ? void 0 : qu.mobSettings.name) && void 0 !== lu ? lu : "Your Pet"
                }), (0, Cu.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Iu
                })]
              }), (0, Cu.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Ms.H)(null === (fu = Qu.current) || void 0 === fu ? void 0 : fu.mobSettings.petInfo.friendshipPoints) && (0, Cu.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Cu.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Vu("mobAiPlugin:friendshipTitle")
                  }), (0, Cu.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: hU.e.getIconsFromFriendshipPoints(null !== (bu = Qu.current.mobSettings.petInfo.friendshipPoints) && void 0 !== bu ? bu : 0).map(((uu, Eu) => (0, Cu.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: uu,
                        amount: 1
                      })
                    }, Eu)))
                  }), (0, Cu.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Cu.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Cu.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${xu.totalPointsForNextLevel>0?Math.max(xu.pointsIntoCurrentLevel/xu.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Cu.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: xu.totalPointsForNextLevel > 0 ? ` ${Math.ceil(xu.pointsIntoCurrentLevel)}/${Math.ceil(xu.totalPointsForNextLevel)}` : Math.ceil(xu.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Cu.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Cu.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Vu("mobAiPlugin:hungerTitle")
                  }), (0, Cu.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: hU.e.hungerLevelIcons[iu.current].map(((uu, Eu) => (0, Cu.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: uu,
                        amount: 1
                      })
                    }, Eu)))
                  }), (0, Cu.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Vu(hU.e.hungerLevelTranslations[iu.current].translationKey), iu.current !== hU.e.MobHungerLevel.Starving && !(0, Ms.H)(null === (cu = Qu.current) || void 0 === cu ? void 0 : cu.mobSettings.petInfo.lastFedAt) && (0, Cu.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Vu("mobAiPlugin:nextFeedIn", {
                        state: Vu(hU.e.hungerLevelTranslations[iu.current + 1].translationKey)
                      }), ":", " ", (0, Cu.jsx)("span", {
                        ref: Wu
                      })]
                    })]
                  })]
                }), (0, Cu.jsx)(Tu.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Cu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vu("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Cu.jsxs)("div", {
                    className: Mj()("PetUIQuickStatsItem", {
                      Disabled: (0, Ms.H)(Lu) || (0, Ms.H)(tu)
                    }),
                    children: [(0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Ms.H)(Lu) || (0, Ms.H)(tu) ? "" : (0, Cu.jsxs)(Cu.Fragment, {
                        children: [Math.ceil(Lu), (0, Cu.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(tu)]
                        })]
                      })
                    })]
                  })
                }), (0, Cu.jsx)(Tu.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Cu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vu("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Cu.jsxs)("div", {
                    className: Mj()("PetUIQuickStatsItem", {
                      Disabled: (0, Ms.H)(null === (Nu = Qu.current) || void 0 === Nu ? void 0 : Nu.mobSettings.attackDamage) || Qu.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Ou = Qu.current) || void 0 === Ou ? void 0 : Ou.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Cu.jsx)(Tu.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Cu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vu("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Cu.jsxs)("div", {
                    className: Mj()("PetUIQuickStatsItem", {
                      Disabled: (0, Ms.H)(null === (Yu = Qu.current) || void 0 === Yu ? void 0 : Yu.mobSettings.secondaryAttackDamage) || Qu.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Du = Qu.current) || void 0 === Du ? void 0 : Du.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Cu.jsx)(Tu.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Cu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vu("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Cu.jsxs)("div", {
                    className: Mj()("PetUIQuickStatsItem", {
                      Disabled: (0, Ms.H)(null === (gu = Qu.current) || void 0 === gu ? void 0 : gu.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Mu = null === (eu = Qu.current) || void 0 === eu || null === (Gu = eu.mobSettings.baseRunningSpeed) || void 0 === Gu ? void 0 : Gu.toFixed(2)) && void 0 !== Mu ? Mu : ""
                    })]
                  })
                }), (0, Cu.jsx)(Tu.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Cu.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Vu("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Cu.jsxs)("div", {
                    className: Mj()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (pu = Qu.current) || void 0 === pu ? void 0 : pu.mobSettings.metaInfo)
                    }),
                    children: [(0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Cu.jsx)(Zj.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Cu.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (wu = Qu.current) || void 0 === wu ? void 0 : wu.mobSettings.metaInfo) ? (0, Cu.jsx)(hu.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Ms.H)(null === (du = Qu.current) || void 0 === du ? void 0 : du.mobSettings.tameInfo) && (0, Cu.jsxs)(Cu.Fragment, {
                  children: [(0, Cu.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Cu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Cu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Cu.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: hU.e.feedTextColours[hU.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Cu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Cu.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Qu.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Cu.jsx)(eU, {
                            food: Qu.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Cu.jsx)(GU, {
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
                    }), (0, Cu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Cu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Cu.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: hU.e.feedTextColours[hU.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Cu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (au = Qu.current.mobSettings.tameInfo.likedFoods) || void 0 === au ? void 0 : au.filter((uu => !Qu.current.mobSettings.petInfo.superlikedFoodKnown || uu !== Qu.current.mobSettings.petInfo.superlikedFood)).map((uu => (0, Cu.jsx)(eU, {
                          food: uu
                        }, uu)))
                      })]
                    }), (0, Cu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Cu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Cu.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: hU.e.feedTextColours[hU.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Cu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Pu = Qu.current.mobSettings.tameInfo.neutralFoods) || void 0 === Pu ? void 0 : Pu.map((uu => (0, Cu.jsx)(eU, {
                          food: uu
                        }, uu)))
                      })]
                    }), (0, Cu.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Cu.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Cu.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: hU.e.feedTextColours[hU.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Cu.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (ou = Qu.current.mobSettings.tameInfo.dislikedFoods) || void 0 === ou ? void 0 : ou.map((uu => (0, Cu.jsx)(eU, {
                          food: uu
                        }, uu)))
                      })]
                    })]
                  }), Qu.current.mobSettings.tameInfo.levelUpBonuses && (0, Cu.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: hU.e.MAX_LEVEL + 1
                    }).map(((uu, Eu) => {
                      const ju = Eu;
                      if (0 === ju) return null;
                      const su = Qu.current.mobSettings.tameInfo.levelUpBonuses[ju],
                        Uu = hU.e.getBonusDisplayInfo(ru, Qu.current.mobSettings, Qu.current.mobType, su);
                      return (0, Cu.jsxs)("div", {
                        className: Mj()("PetUIFeedDropContainer", {
                          Selected: ju === hU.e.getFriendshipLevelInfo(Qu.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Cu.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: ju
                          }).map(((uu, Eu) => (0, Cu.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Cu.jsx)(Zj.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${ju}-${Eu}`)))
                        }), (0, Cu.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Uu && (0, Cu.jsx)(GU, {
                            icon: Uu.icon,
                            displayName: Uu.displayName,
                            description: Uu.description
                          })
                        })]
                      }, ju)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      eU = (0, Uu.memo)((function(uu) {
        let {
          food: Eu,
          includeDescription: ju = !1
        } = uu;
        const su = gU(),
          Uu = su.getDefaultItemStat(Eu, "displayName"),
          Zu = su.getDefaultItemStat(Eu, "description");
        return (0, Cu.jsx)(GU, {
          icon: Eu,
          displayName: Uu,
          description: ju ? Zu : null
        })
      })),
      GU = (0, Uu.memo)((function(uu) {
        let {
          icon: Eu,
          displayName: ju,
          description: su,
          tintColor: Uu,
          className: Zu = "PetUIFoodItem"
        } = uu;
        return (0, Cu.jsx)(Tu.e, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Cu.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Cu.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Cu.jsx)(wu.d, {
                text: ju
              })
            }), su && (0, Cu.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Cu.jsx)(wu.d, {
                text: su
              })
            })]
          }),
          children: (0, Cu.jsx)("div", {
            className: Zu,
            children: (0, Cu.jsx)(Zj.d, {
              itemName: Eu,
              amount: 1,
              tintColor: Uu
            })
          })
        })
      }));
    var pU = ju(3946),
      wU = ju(1183),
      JU = ju(1298),
      dU = ju(2541),
      aU = ju(37257),
      PU = ju(1069),
      oU = ju(2479);

    function kU(uu) {
      let {
        peers: Eu
      } = uu;
      const [ju, su] = (0, Uu.useState)(null), Zu = (0, au.f)("players");
      return (0, Cu.jsx)("div", {
        className: "CodeEditorPresence",
        children: Eu.map((uu => {
          var Eu, Uu;
          const Xu = null !== (Eu = null === (Uu = Zu.byId[uu.playerId]) || void 0 === Uu ? void 0 : Uu.cosmetics) && void 0 !== Eu ? Eu : {};
          return (0, Cu.jsxs)("div", {
            className: Mj()("PresenceIcon", {
              Viewer: !uu.isEditor
            }),
            style: {
              backgroundColor: uu.colour
            },
            onMouseEnter: () => {
              su(uu.playerId)
            },
            onMouseLeave: () => {
              su(null)
            },
            children: [(0, Cu.jsx)(oU.d, {
              cosmetics: Xu
            }), ju === uu.playerId && (0, Cu.jsx)("div", {
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
    var mU = ju(692),
      vU = ju(37248),
      KU = ju(36940),
      VU = ju(37264);

    function rU(uu) {
      const Eu = uu.split("/"),
        ju = [];
      for (let su = 1; su < Eu.length; su++) ju.push(Eu.slice(0, su).join("/"));
      return ju
    }

    function QU(uu) {
      return uu.slice(uu.lastIndexOf("/") + 1)
    }
    const iU = (0, Uu.memo)((function(uu) {
      var Eu;
      let {
        files: ju,
        activePath: su,
        canEdit: Zu,
        directoryLinked: Xu,
        pluginNames: lu,
        activePluginName: qu,
        activePluginFile: fu,
        onSelect: bu,
        onSelectPlugin: cu,
        onCreate: Ou,
        onRename: Yu,
        onRenameFolder: Du,
        onDelete: gu,
        onToggleDirectorySync: Mu,
        schematics: eu,
        onManageSchematic: Gu
      } = uu;
      const {
        t: pu
      } = (0, Au.A)(), wu = null !== (Eu = (0, aU.d)(ju)) && void 0 !== Eu ? Eu : JU.h, Ju = Object.keys(ju), [du, au] = (0, Uu.useState)((() => new Set)), Pu = function(uu, Eu, ju) {
        const su = {
          folders: new Map,
          files: []
        };
        for (const Xu of uu) {
          if (Xu === Eu) continue;
          let uu = su;
          for (const Eu of rU(Xu)) {
            let ju = uu.folders.get(Eu);
            ju || (ju = {
              folders: new Map,
              files: []
            }, uu.folders.set(Eu, ju)), uu = ju
          }
          uu.files.push(Xu)
        }
        const Uu = [];
        uu.includes(Eu) && Uu.push({
          kind: "file",
          path: Eu,
          name: QU(Eu),
          depth: 0
        });
        const Zu = (uu, Eu) => {
          const su = [...uu.folders.entries()].sort(((uu, Eu) => {
            let [ju] = uu, [su] = Eu;
            return ju.localeCompare(su)
          }));
          for (const [Xu, lu] of su) {
            const uu = ju.has(Xu);
            Uu.push({
              kind: "folder",
              path: Xu,
              name: QU(Xu),
              depth: Eu,
              collapsed: uu
            }), uu || Zu(lu, Eu + 1)
          }
          uu.files.sort(((uu, Eu) => uu.localeCompare(Eu)));
          for (const ju of uu.files) Uu.push({
            kind: "file",
            path: ju,
            name: QU(ju),
            depth: Eu
          })
        };
        return Zu(su, 0), Uu
      }(Ju, wu, du);
      (0, Uu.useEffect)((() => {
        au((uu => {
          const Eu = new Set(uu);
          let ju = !1;
          for (const Uu of rU(su)) ju = Eu.delete(Uu) || ju;
          return ju ? Eu : uu
        }))
      }), [su]);
      const ou = Ju.length >= FE.r,
        ku = (uu, Eu) => {
          if (uu.length > dU.o) return `Path must be at most ${dU.o} characters`;
          if (!(0, dU.m)(uu)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === uu) return "index.d.ts cannot be the world-code entry";
          const su = !!Eu && (0, aU.h)(Eu, uu);
          if (Eu && (0, aU.j)(Eu) && !su) return `Cannot rename ${Eu} (only swapping ${JU.h} and ${JU.j} is allowed)`;
          if (uu in ju) return "A file with that path already exists";
          if ((0, aU.j)(uu) && !su) {
            if ((uu === JU.h ? JU.j : JU.h) in ju) return `World code cannot have both ${JU.h} and ${JU.j}`
          }
          return null
        },
        mu = uu => {
          Rs.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === uu ? void 0 : `${uu}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: uu => ku(uu)
          }).getResult().then((uu => {
            "notificationTornDown" !== uu && null !== uu && "submit" === uu.type && Ou(uu.value)
          }))
        },
        vu = uu => {
          Rs.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: uu,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Eu => Eu === uu ? "That is already the file's path" : ku(Eu, uu)
          }).getResult().then((Eu => {
            "notificationTornDown" !== Eu && null !== Eu && "submit" === Eu.type && Yu(uu, Eu.value)
          }))
        },
        Ku = uu => {
          const Eu = uu => uu.replace(/\/+$/, "");
          Rs.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: uu,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ju => {
              const su = Eu(ju);
              if (su === uu) return "That is already the folder's path";
              for (const [Eu, Uu] of(0, aU.p)(Ju, uu, su)) {
                const uu = ku(Uu, Eu);
                if (null !== uu) return uu
              }
              return null
            }
          }).getResult().then((ju => {
            "notificationTornDown" !== ju && null !== ju && "submit" === ju.type && Du(uu, Eu(ju.value))
          }))
        },
        Vu = uu => {
          Rs.NotificationProvider.showPromptPopup({
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
          }).getResult().then((Eu => {
            !0 === Eu && gu(uu)
          }))
        };
      return (0, Cu.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Cu.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Cu.jsx)("span", {
            children: "Files"
          }), Zu && !ou && (0, Cu.jsx)(Nu.x, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              mu()
            },
            children: (0, Cu.jsx)(hu.e, {
              name: "plus"
            })
          })]
        }), (0, Cu.jsxs)("div", {
          className: "FileTreeList",
          children: [Pu.map((uu => {
            const Eu = uu.path;
            if ("folder" === uu.kind) return (0, Cu.jsx)(IU, {
              path: Eu,
              name: uu.name,
              depth: uu.depth,
              collapsed: uu.collapsed,
              onToggle: () => {
                var uu;
                uu = Eu, au((Eu => {
                  const ju = new Set(Eu);
                  return ju.delete(uu) || ju.add(uu), ju
                }))
              },
              canCreate: Zu && !ou,
              canRename: Zu,
              onCreate: mu,
              onRename: Ku
            }, `folder:${Eu}`);
            const Uu = (0, aU.j)(Eu),
              Xu = JU.h in ju && JU.j in ju,
              lu = !Uu || Xu,
              fu = null === qu && Eu === su;
            return (0, Cu.jsx)(BU, {
              path: Eu,
              label: uu.name,
              depth: uu.depth,
              isActive: fu,
              canRename: Zu,
              onSelect: bu,
              onRename: vu,
              onDelete: Vu,
              canDelete: lu && Zu
            }, Eu)
          })), (0, Cu.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Cu.jsxs)("span", {
              children: ["Schematics (", Object.keys(eu).length, "/", VU.f, ")"]
            }), Zu && (0, Cu.jsx)(Nu.x, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(eu).length >= VU.f,
              onClick: () => {
                Gu("")
              },
              children: (0, Cu.jsx)(hu.e, {
                name: "plus"
              })
            })]
          }), Object.keys(eu).sort().map((uu => (0, Cu.jsx)(BU, {
            path: uu,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Gu
          }, uu))), lu.length > 0 && (0, Cu.jsxs)(Cu.Fragment, {
            children: [(0, Cu.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Cu.jsx)("span", {
                children: "Plugins"
              })
            }), lu.map((uu => {
              var Eu;
              const ju = vU.h[uu],
                su = Object.keys(null !== (Eu = null === ju || void 0 === ju ? void 0 : ju.files) && void 0 !== Eu ? Eu : {
                  "index.ts": ""
                }).sort(((uu, Eu) => "index.ts" === uu ? -1 : "index.ts" === Eu ? 1 : uu.localeCompare(Eu)));
              return (0, Cu.jsxs)("div", {
                children: [(0, Cu.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, aU.y)(uu)
                }), su.map((Eu => (0, Cu.jsx)(BU, {
                  path: Eu,
                  nested: !0,
                  isActive: qu === uu && fu === Eu,
                  canRename: !1,
                  onSelect: () => {
                    cu(uu, Eu)
                  },
                  canDelete: !1
                }, Eu)))]
              }, uu)
            }))]
          })]
        }), (0, Cu.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Cu.jsx)(Nu.f, {
            className: "FileTreeFooterButton",
            onClick: Mu,
            children: pu(Xu ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function WU(uu) {
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

    function SU(uu) {
      let {
        depth: Eu
      } = uu;
      return (0, Cu.jsx)(Cu.Fragment, {
        children: Array.from({
          length: Eu
        }, ((uu, Eu) => (0, Cu.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": Eu
          }
        }, Eu)))
      })
    }

    function IU(uu) {
      let {
        path: Eu,
        name: ju,
        depth: su,
        collapsed: Uu,
        onToggle: Zu,
        canCreate: Xu,
        canRename: lu,
        onCreate: qu,
        onRename: fu
      } = uu;
      const bu = [];
      Xu && bu.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          qu(Eu)
        }
      }), lu && bu.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          fu(Eu)
        }
      });
      const cu = WU(su);
      return (0, Cu.jsxs)("div", {
        className: Mj()("FileTreeItem FileTreeFolder", cu.className),
        style: cu.style,
        children: [(0, Cu.jsx)(SU, {
          depth: su
        }), (0, Cu.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Uu,
          onClick: Zu,
          children: [(0, Cu.jsx)(hu.e, {
            className: "FileTreeFolderCaret",
            name: Uu ? "caret-right" : "caret-down"
          }), (0, Cu.jsx)(hu.e, {
            className: "FileTreeFolderIcon",
            name: Uu ? "folder" : "folder-open"
          }), ju]
        }), (0, Cu.jsx)(FU, {
          path: Eu,
          actions: bu
        })]
      })
    }

    function FU(uu) {
      let {
        path: Eu,
        actions: ju
      } = uu;
      const su = (0, Uu.useRef)(null);
      return 0 === ju.length ? null : (0, Cu.jsxs)("div", {
        ref: su,
        className: "FileTreeItemActions",
        children: [(0, Cu.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${Eu}`,
          children: (0, Cu.jsx)(hu.e, {
            name: "ellipsis"
          })
        }), (0, Cu.jsx)(KU.e, {
          triggerElementRef: su,
          options: ju
        })]
      })
    }

    function BU(uu) {
      let {
        path: Eu,
        label: ju = Eu,
        depth: su = 0,
        isActive: Uu,
        canRename: Zu,
        onSelect: Xu,
        onRename: lu,
        onDelete: qu,
        canDelete: fu,
        nested: bu
      } = uu;
      const cu = [];
      Zu && lu && cu.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          lu(Eu)
        }
      }), fu && qu && cu.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          qu(Eu)
        }
      });
      const Nu = WU(su);
      return (0, Cu.jsxs)("div", {
        className: Mj()("FileTreeItem", Nu.className, {
          Active: Uu,
          Nested: bu
        }),
        style: Nu.style,
        children: [(0, Cu.jsx)(SU, {
          depth: su
        }), (0, Cu.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: ju === Eu ? void 0 : Eu,
          onClick: () => {
            Xu(Eu)
          },
          children: ju
        }), (0, Cu.jsx)(FU, {
          path: Eu,
          actions: cu
        })]
      })
    }
    async function LU(uu) {
      const Eu = (0, aU.d)(uu);
      if (!Eu || "" === uu[Eu].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: su
      } = await Promise.all([ju.e(303), ju.e(304)]).then((() => ju(41753)));
      return (0, vU.e)(su(uu))
    }
    var tU = ju(37271);

    function xU(uu, Eu) {
      const ju = Object.keys(uu),
        su = Object.keys(Eu);
      if (ju.length !== su.length) return !1;
      for (const Uu of ju)
        if (!(Uu in Eu) || uu[Uu] !== Eu[Uu]) return !1;
      return !0
    }

    function TU(uu, Eu) {
      const ju = [],
        su = [],
        Uu = [];
      for (const Zu of Object.keys(Eu)) Zu in uu ? uu[Zu] !== Eu[Zu] && Uu.push(Zu) : ju.push(Zu);
      for (const Zu of Object.keys(uu)) Zu in Eu || su.push(Zu);
      return ju.sort(), su.sort(), Uu.sort(), {
        creates: ju,
        deletes: su,
        updates: Uu
      }
    }

    function HU(uu, Eu) {
      var ju;
      const su = {
          ...uu
        },
        Uu = (0, aU.d)(Eu),
        Zu = (0, aU.d)(su);
      if (JU.h in su && JU.j in su) {
        const uu = null !== Uu && void 0 !== Uu ? Uu : JU.j,
          ju = uu === JU.h ? JU.j : JU.h;
        var Xu;
        if (!(uu in su)) su[uu] = null !== (Xu = Eu[uu]) && void 0 !== Xu ? Xu : "";
        return delete su[ju], su
      }
      var lu;
      return Uu && !(Uu in su) ? (Zu || (su[Uu] = null !== (lu = Eu[Uu]) && void 0 !== lu ? lu : ""), su) : (Zu || Uu || (su[JU.h] = null !== (ju = su[JU.h]) && void 0 !== ju ? ju : "", delete su[JU.j]), su)
    }

    function AU(uu, Eu) {
      const ju = (0, aU.d)(Eu),
        su = JU.h in Eu && JU.j in Eu;
      return uu.filter((uu => !(0, aU.j)(uu) || (!!su || ju !== uu)))
    }
    async function nU(uu, Eu, su) {
      const Uu = uu.getLobbyFiles(),
        Zu = (0, FE.j)(su, (0, aU.t)(Uu, Eu)),
        Xu = await uu.ensureJoined(Eu),
        lu = (0, dU.r)(Xu.docKey);
      if (Xu.doc === Zu) return;
      for (let ju = 0; ju < 100; ju++) {
        const ju = uu.getCollabSnapshot();
        if (ju && (0, dU.r)(ju.docKey) === lu && uu.getActivePath() === Eu) {
          if (uu.replaceActiveDoc(lu, Zu)) return;
          await (0, Ms.K)(40)
        } else await (0, Ms.K)(40)
      }
      const {
        ChangeSet: qu
      } = await ju.e(299).then((() => ju(41550))), Cu = uu.getCollabSnapshot(), bu = Cu && (0, dU.r)(Cu.docKey) === lu ? Cu : Xu;
      await async function(uu, Eu, ju, su) {
        const Uu = uu.of({
            from: 0,
            to: ju.length,
            insert: su
          }, ju.length),
          Zu = JSON.stringify([{
            clientID: Eu.clientID,
            changes: Uu.toJSON()
          }]),
          Xu = (0, dU.r)(Eu.docKey);
        Zu.length <= dU.g ? fu.gameBridge.send("sendCodeCollab", {
          lZ: dU.d.Push,
          qZ: Xu,
          fZ: Eu.version,
          cZ: Zu
        }) : await (0, wU.postJsonWithMetricsCookiesAndJsonResponse)(`${Eu.httpConfig.gsUrl}/code/collab-push`, pU.p["collab-push"].toBuffer({
          gameNameWithVariation: Eu.httpConfig.gameNameWithVariation,
          lobbyName: Eu.httpConfig.lobbyName,
          docKey: Xu,
          version: Eu.version,
          updates: Zu
        }), {
          retries: 0
        })
      }(qu, bu, bu.doc, Zu)
    }
    class yU {
      constructor(uu) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = uu
      }
      async writeLobbyFiles(uu) {
        const Eu = {
            ...this.bridge.getLobbyFiles()
          },
          ju = {
            ...Eu
          };
        for (const {
            path: Zu,
            text: Xu
          }
          of uu) ju[Zu] = Xu;
        if (!uu.every((uu => {
            let {
              path: Eu,
              text: su
            } = uu;
            return (0, FE.j)(su, (0, aU.t)(ju, Eu)) === su
          }))) return !1;
        const su = [];
        try {
          for (const {
              path: Eu,
              text: ju
            }
            of uu) su.push(Eu), Eu in this.bridge.getLobbyFiles() || (this.bridge.createFile(Eu, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(Eu, !0)), await nU(this.bridge, Eu, ju)
        } catch (Uu) {
          for (const uu of su) uu in Eu ? await nU(this.bridge, uu, Eu[uu]).catch((Eu => {
            console.error("World Code AI: couldn't put back", uu, Eu)
          })) : this.bridge.deleteFile(uu);
          throw Uu
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const uu = await (0, tU.p)(this.bridge.getStorageKey());
        return !!uu && (this.handle = uu, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(uu), !0)
      }
      async unlinkFolder() {
        const uu = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, tU.b)(uu), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const uu = this.bridge.getStorageKey(),
          Eu = await (0, tU.l)(uu);
        return !!Eu && (!!await (0, tU.g)(Eu, "readwrite") && (this.handle = Eu, this.linked = !0, await (0, tU.A)(uu, Eu), await this.scaffoldLocalTypes(Eu), !0))
      }
      scaffoldLocalTypes(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const su = (await LU(Eu)).map((uu => vU.h[uu])),
              Uu = su.map((uu => {
                var Eu;
                return `${uu.name}:${Object.keys(null!==(Eu=null===uu||void 0===uu?void 0:uu.files)&&void 0!==Eu?Eu:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Uu) return;
            const {
              ensureLocalBloxdTypes: Zu
            } = await Promise.all([ju.e(85), ju.e(301), ju.e(306)]).then((() => ju(41756)));
            await Zu(uu, su), this.scaffoldedPluginNamesKey = Uu
          } catch (su) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", su)
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
      async onDocTextChanged(uu, Eu) {
        if (!this.handle) return;
        const ju = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [uu]: Eu
        })];
        this.running && (this.pendingDocText.set(uu, Eu), ju.push(this.flushDocTextToDisk())), await Promise.all(ju)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const uu = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const Eu = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [ju, su] of Eu) this.lastSynced[ju] !== su && (await (0, tU.G)(uu, ju, su), this.lastSynced = {
              ...this.lastSynced,
              [ju]: su
            })
          }
        } catch (Eu) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", Eu), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, tU.s)(this.handle))
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
            if (!await (0, tU.g)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const Eu = this.bridge.getLobbyFiles(),
              ju = await (0, tU.s)(this.handle);
            for (const uu of Object.keys(Eu).filter(VU.b)) {
              if (ju[uu] === tU.i) return void this.bridge.setMessage(`Move ${uu} outside the linked folder before syncing its placeholder.`, "warning");
              ju[uu] = VU.m
            }
            if (xU(ju, Eu)) {
              for (const uu of Object.keys(Eu).filter(VU.b)) await (0, tU.G)(this.handle, uu, VU.m);
              return this.lastSynced = {
                ...ju
              }, void this.beginWatch()
            }
            const su = await this.promptReconcile(function(uu) {
              return null !== (0, aU.d)(uu)
            }(ju));
            if ("unlink" === su) return void await this.unlinkFolder();
            if ("dismissed" === su) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === su) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(ju);
                for (const uu of Object.keys(Eu).filter(VU.b)) await (0, tU.G)(this.handle, uu, VU.m);
                this.lastSynced = {
                  ...await (0, tU.s)(this.handle)
                }
              } else await (0, tU.I)(this.handle, Eu), this.lastSynced = {
                ...Eu
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
        return await new Promise((Eu => {
          const ju = [{
              choice: "local",
              Button: Nu.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Nu.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Nu.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            su = (0, Cu.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Cu.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Cu.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: uu ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Cu.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: ju.filter((Eu => "local" !== Eu.choice || uu)).map((uu => {
                  let {
                    choice: ju,
                    Button: su,
                    labelKey: Zu,
                    descriptionKey: Xu
                  } = uu;
                  return (0, Cu.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Cu.jsx)(su, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (uu => {
                          Uu.tearDownNotification(), Eu(uu)
                        })(ju)
                      },
                      children: this.bridge.t(`codeEditor:${Zu}`)
                    }), (0, Cu.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Xu}`)
                    })]
                  }, ju)
                }))
              })]
            }),
            Uu = Rs.NotificationProvider.showCustomPopup({
              body: su,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Uu.getResult().then((uu => {
            "notificationTornDown" === uu && Eu("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, tU.E)(this.handle, (uu => {
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
        const Eu = this.bridge.getLobbyFiles();
        let ju = HU(uu, this.lastSynced);
        for (const Zu in Eu)
          if ((0, VU.b)(Zu) && ju[Zu] === tU.i) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const su = Object.keys(ju).filter((uu => (0, VU.b)(uu) && !(uu in Eu)));
        su.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Zu of Object.keys(Eu).filter(VU.b))(Zu in ju || su.length > 0 || !(Zu in this.lastSynced)) && (ju[Zu] = VU.m);
        if (!xU(ju, uu)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(uu, ju), ju = HU(await (0, tU.s)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!xU(ju, this.lastSynced)) {
          this.applying = !0;
          try {
            const uu = TU(this.lastSynced, ju);
            if (await this.pushDiskDeltaToLobby(ju, Eu), null !== this.lastLobbySeen)
              for (const ju of [...uu.creates, ...uu.updates, ...uu.deletes])(0, VU.b)(ju) || (ju in Eu ? this.lastLobbySeen[ju] = Eu[ju] : delete this.lastLobbySeen[ju]);
            this.lastSynced = {
              ...ju
            }
          } catch (Uu) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Uu), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(uu, Eu) {
        if (this.handle) {
          for (const ju of Object.keys(uu)) ju in Eu || await (0, tU.u)(this.handle, ju);
          for (const [ju, su] of Object.entries(Eu)) uu[ju] !== su && await (0, tU.G)(this.handle, ju, su)
        }
      }
      async applyRemoteTreeToDisk(uu) {
        if (!this.handle) return;
        const Eu = this.lastLobbySeen;
        if (null === Eu) return void(this.lastLobbySeen = {
          ...uu
        });
        const ju = Object.keys(uu).filter((ju => Eu[ju] !== uu[ju])),
          su = Object.keys(Eu).filter((Eu => !(Eu in uu)));
        if (0 !== ju.length || 0 !== su.length) {
          this.applying = !0;
          try {
            for (const Eu of [...su, ...ju]) try {
              if (Eu in uu) await (0, tU.G)(this.handle, Eu, uu[Eu]), this.lastSynced = {
                ...this.lastSynced,
                [Eu]: uu[Eu]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [Eu]: uu[Eu]
              };
              else {
                await (0, tU.u)(this.handle, Eu);
                const uu = {
                  ...this.lastSynced
                };
                delete uu[Eu], this.lastSynced = uu;
                const ju = {
                  ...this.lastLobbySeen
                };
                delete ju[Eu], this.lastLobbySeen = ju
              }
            } catch (Uu) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Uu), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(uu, Eu) {
        const ju = function(uu, Eu) {
          const ju = (0, aU.d)(uu),
            su = (0, aU.d)(Eu);
          return ju && su && ju !== su ? {
            from: ju,
            to: su
          } : null
        }(uu, Eu);
        return !!ju && (this.bridge.renameFile(ju.from, ju.to), await this.bridge.waitForLobbyPath(ju.to, !0), !0)
      }
      async applyLocalTreeToLobby(uu) {
        var Eu;
        const ju = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), uu);
        const su = this.bridge.getLobbyFiles(),
          Uu = TU(su, uu),
          Zu = AU(Uu.deletes, su);
        for (const fu of Uu.creates)(0, VU.b)(fu) || (this.bridge.createFile(fu, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(fu, !0));
        for (const fu of Zu)(0, VU.b)(fu) || (this.bridge.deleteFile(fu), await this.bridge.waitForLobbyPath(fu, !1));
        if (!(0, aU.d)(this.bridge.getLobbyFiles()) && !(0, aU.d)(uu)) {
          if (this.bridge.createFile(JU.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(JU.h, !0), !this.handle) return;
          await (0, tU.G)(this.handle, JU.h, ""), uu = {
            ...uu,
            [JU.h]: ""
          }
        }
        const Xu = this.bridge.getLobbyFiles();
        for (const fu of Object.keys(uu))(0, VU.b)(fu) || Xu[fu] !== uu[fu] && await nU(this.bridge, fu, uu[fu]);
        const lu = this.bridge.getLobbyFiles(),
          qu = ju in lu ? ju : null !== (Eu = (0, aU.d)(lu)) && void 0 !== Eu ? Eu : JU.h;
        await this.bridge.ensureJoined(qu)
      }
      async pushDiskDeltaToLobby(uu, Eu) {
        const ju = this.bridge.getActivePath(),
          su = await this.renameLobbyEntryIfSwitched(Eu, uu) ? this.bridge.getLobbyFiles() : Eu,
          Uu = TU(this.lastSynced, uu),
          Zu = AU(Uu.deletes, su).filter((uu => uu in su));
        for (const Xu of Uu.creates)(0, VU.b)(Xu) || (Xu in this.bridge.getLobbyFiles() || (this.bridge.createFile(Xu, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Xu, !0)), await nU(this.bridge, Xu, uu[Xu]));
        for (const Xu of Zu)(0, VU.b)(Xu) ? await this.bridge.deleteSchematic(Xu) : (this.bridge.deleteFile(Xu), await this.bridge.waitForLobbyPath(Xu, !1));
        for (const Xu of Uu.updates)(0, VU.b)(Xu) || await nU(this.bridge, Xu, uu[Xu]);
        ju in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== ju && await this.bridge.ensureJoined(ju)
      }
    }
    var zU = ju(1255);

    function RU() {
      const {
        websocketUrl: uu,
        gameNameWithVariation: Eu,
        lobbyName: ju
      } = fu.gameBridge.latest("connectedGame");
      return {
        gsUrl: zU.clientSideServerUrls.getHttpUrlFromWebSocketUrl(uu),
        gameNameWithVariation: Eu,
        lobbyName: ju
      }
    }
    async function uZ(uu) {
      const {
        gsUrl: Eu,
        gameNameWithVariation: ju,
        lobbyName: su
      } = RU();
      return await (0, wU.postBinaryWithMetricsCookiesAndCustomResponse)(`${Eu}/code/schematics`, pU.dk.schematics.toBuffer({
        gameNameWithVariation: ju,
        lobbyName: su,
        request: JSON.stringify(uu)
      }), {
        retries: 0
      }, wU.HttpPayloadType.json)
    }
    var EZ = ju(36740);

    function jZ(uu) {
      let {
        path: Eu,
        revision: ju
      } = uu;
      const [su, Zu] = (0, Uu.useState)(""), [Xu, lu] = (0, Uu.useState)(!1), [qu, fu] = (0, Uu.useState)(0);
      return (0, Uu.useEffect)((() => {
        let uu = !1;
        return Zu(""), lu(!1), uZ({
          action: "preview",
          path: Eu
        }).then((Eu => {
          uu || Zu(`data:image/webp;base64,${Eu.previewBase64}`)
        })).catch((Eu => {
          console.error("Could not load schematic preview", Eu), uu || lu(!0)
        })), () => {
          uu = !0
        }
      }), [Eu, ju, qu]), (0, Cu.jsxs)("div", {
        className: "SchematicPreview",
        children: [su && (0, Cu.jsx)("img", {
          src: su,
          alt: `Preview of ${Eu}`
        }), !su && !Xu && (0, Cu.jsx)(Pu.b, {
          loaderType: "Secondary"
        }), Xu && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Cu.jsx)(Nu.f, {
            onClick: () => {
              fu(qu + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var sZ = ju(3318);

    function UZ(uu) {
      var Eu;
      let {
        initialPath: ju,
        onChanged: su,
        onClose: Zu
      } = uu;
      const Xu = "" === ju,
        [lu, qu] = (0, Uu.useState)(null),
        [fu, bu] = (0, Uu.useState)(ju),
        [cu, Ou] = (0, Uu.useState)(!1),
        [Yu, hu] = (0, Uu.useState)(!1),
        [Du, gu] = (0, Uu.useState)(null),
        [Mu, eu] = (0, Uu.useState)(!1),
        [Gu, pu] = (0, Uu.useState)(""),
        wu = (0, Uu.useRef)(null),
        Ju = (0, Uu.useRef)(!1),
        du = (0, Uu.useRef)(!0);
      (0, Uu.useEffect)((() => (du.current = !0, uZ({
        action: "state"
      }).then((uu => {
        du.current && qu(uu)
      })).catch((uu => {
        console.error("Could not load schematic assets", uu), du.current && pu("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        du.current = !1
      })), []);
      const au = null === lu || void 0 === lu ? void 0 : lu.assets[ju],
        Pu = Object.keys(null !== (Eu = null === lu || void 0 === lu ? void 0 : lu.assets) && void 0 !== Eu ? Eu : {}).length,
        ou = fu.trim(),
        ku = ou ? (0, VU.b)(ou) ? null !== lu && void 0 !== lu && lu.assets[ou] && (Xu || ou !== ju) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        mu = !!ou && !ku && (Xu ? Pu < VU.f : ou !== ju),
        vu = Mu || !lu;
      async function Ku(uu) {
        if (!Ju.current && du.current) {
          Ju.current = !0, eu(!0), pu("");
          try {
            const Eu = await uZ({
              ...uu,
              expectedRevision: lu.revision
            });
            su(Eu), du.current && Zu()
          } catch (ju) {
            var Eu;
            if (console.error("Schematic asset operation failed", ju), du.current) pu(ju instanceof tu.b ? null !== (Eu = ju.errorMessageForUser) && void 0 !== Eu ? Eu : ju.message : String(ju));
            try {
              const uu = await uZ({
                action: "state"
              });
              su(uu), du.current && qu(uu)
            } catch (Uu) {
              console.error("Could not refresh schematic assets", Uu)
            }
          } finally {
            Ju.current = !1, du.current && eu(!1)
          }
        }
      }
      return (0, Cu.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Cu.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Xu ? "New schematic" : cu ? "Rename schematic" : "Schematic"
        }), Gu && (0, Cu.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Gu
        }), !lu && !Gu && (0, Cu.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Cu.jsxs)("fieldset", {
          disabled: vu,
          children: [Xu || cu ? (0, Cu.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Cu.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Cu.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Cu.jsx)(Vj.d, {
                className: "InputGenericPopupInput",
                defaultValue: ju,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: bu
              }, cu ? "rename" : "create")
            })]
          }) : (0, Cu.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: ju
          }), (Xu || cu) && ku && (0, Cu.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: ku
          }), Xu ? (0, Cu.jsxs)(Cu.Fragment, {
            children: [Pu >= VU.f && (0, Cu.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", VU.f, " maximum)."]
            }), Yu ? (0, Cu.jsxs)(Cu.Fragment, {
              children: [(0, Cu.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Cu.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": vu || !mu,
                children: (0, Cu.jsx)(EZ.c, {
                  loading: null === Du,
                  schematics: null !== Du && void 0 !== Du ? Du : [],
                  disableAutoExport: !0,
                  onSchematicPicked: uu => {
                    !vu && mu && Ku({
                      action: "profile",
                      path: ou,
                      schematicId: uu.schematicId
                    })
                  }
                })
              }), (0, Cu.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Cu.jsx)(Nu.f, {
                  className: "InputGenericPopupButton",
                  disabled: vu,
                  onClick: () => {
                    hu(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Cu.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Cu.jsx)(Nu.f, {
                className: "InputGenericPopupButton",
                disabled: vu || !mu,
                onClick: () => {
                  (0, sZ.e)(wu.current)
                },
                children: "Upload Schematic"
              }), (0, Cu.jsx)(Nu.f, {
                className: "InputGenericPopupButton",
                disabled: vu || !mu,
                onClick: () => {
                  !async function() {
                    if (hu(!0), pu(""), !Du) try {
                      const uu = await (0, wU.postJsonWithMetricsCookiesAndJsonResponse)(`${zU.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      du.current && gu(uu)
                    } catch (uu) {
                      console.error("Could not load profile schematics", uu), du.current && (hu(!1), pu("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Cu.jsx)("input", {
              ref: wu,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: uu => {
                var Eu;
                const ju = null === (Eu = uu.target.files) || void 0 === Eu ? void 0 : Eu[0];
                if (uu.target.value = "", !ju) return;
                if (ju.size > VU.j) return void pu("The schematic file is too large.");
                const su = ou;
                eu(!0);
                const Uu = new FileReader;
                Uu.onload = () => {
                  Ku({
                    action: "upload",
                    path: su,
                    base64: String(Uu.result).split(",")[1]
                  })
                }, Uu.onerror = () => {
                  console.error("Could not read schematic file", Uu.error), du.current && (eu(!1), pu("Could not read the selected file."))
                }, Uu.readAsDataURL(ju)
              }
            })]
          }) : au ? (0, Cu.jsxs)(Cu.Fragment, {
            children: [!cu && (0, Cu.jsx)(jZ, {
              path: ju,
              revision: lu.revision
            }), !cu && (0, Cu.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(au.byteSize / 1024), " KB \xb7 ", au.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Cu.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: cu ? (0, Cu.jsxs)(Cu.Fragment, {
                children: [(0, Cu.jsx)(Nu.f, {
                  className: "InputGenericPopupButton",
                  disabled: vu || !mu,
                  onClick: () => {
                    Ku({
                      action: "rename",
                      path: ju,
                      newPath: ou
                    })
                  },
                  children: "Rename"
                }), (0, Cu.jsx)(Nu.f, {
                  className: "InputGenericPopupButton",
                  disabled: vu,
                  onClick: () => {
                    Ou(!1), bu(ju)
                  },
                  children: "Cancel"
                })]
              }) : (0, Cu.jsxs)(Cu.Fragment, {
                children: [(0, Cu.jsx)(Nu.f, {
                  className: "InputGenericPopupButton",
                  disabled: vu,
                  onClick: () => {
                    Ou(!0)
                  },
                  children: "Rename"
                }), (0, Cu.jsx)(Nu.R, {
                  className: "InputGenericPopupButton",
                  disabled: vu,
                  onClick: () => {
                    Ku({
                      action: "remove",
                      path: ju
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : lu && (0, Cu.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function ZZ(uu) {
      if ("string" !== typeof uu) return null;
      try {
        const Eu = JSON.parse(uu);
        return (0, aU.n)(null === Eu || void 0 === Eu ? void 0 : Eu.worldCodeEngine) && "boolean" === typeof Eu.engineLocked && function(uu) {
          if (null === uu) return !0;
          const Eu = null === uu || void 0 === uu ? void 0 : uu.location;
          return "string" === typeof(null === uu || void 0 === uu ? void 0 : uu.reason) && (null === Eu || "string" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.path) && Number.isInteger(Eu.line))
        }(Eu.fallback) ? Eu : (console.error("[CodeCollab] Malformed engine settings", uu), null)
      } catch (Eu) {
        return console.error("[CodeCollab] Failed to parse engine settings", Eu), null
      }
    }

    function XZ(uu) {
      let {
        fallback: Eu,
        onGoToLine: ju
      } = uu;
      const {
        t: su
      } = (0, Au.A)(), {
        location: Uu
      } = Eu;
      return (0, Cu.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [su("codeEditorEngine:notice", {
          reason: Eu.reason
        }), Uu && (0, Cu.jsxs)(Cu.Fragment, {
          children: [" ", (0, Cu.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              ju(Uu.path, Uu.line)
            },
            children: su("codeEditorEngine:goToLine", {
              line: String(Uu.line)
            })
          })]
        })]
      })
    }
    var lZ = ju(5102),
      qZ = ju(4528),
      fZ = ju(37276);

    function CZ(uu) {
      let {
        label: Eu,
        hint: ju,
        checked: su,
        onChange: Uu
      } = uu;
      return (0, Cu.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Cu.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Cu.jsx)("span", {
            children: Eu
          }), (0, Cu.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: ju
          })]
        }), (0, Cu.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Cu.jsx)(qZ.d, {
            className: "SwitchCheckbox",
            checked: su,
            onChange: uu => {
              Uu(uu.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function bZ(uu) {
      let {
        engine: Eu,
        onSetEngine: ju,
        aiHints: su,
        variation: Uu
      } = uu;
      const {
        t: Zu
      } = (0, Au.A)(), [Xu, lu] = (0, fZ.l)(fZ.h);
      return (0, Cu.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Cu.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Zu("codeEditor:moreOptions")
        }), Eu && (0, Cu.jsx)(CZ, {
          label: Zu("codeEditorEngine:toggle"),
          hint: Zu("codeEditorEngine:toggleHint"),
          checked: "ses" === Eu,
          onChange: uu => {
            ju(uu ? "ses" : "quickjs")
          }
        }), su && (0, Cu.jsx)(CZ, {
          label: Zu("codeEditorAiHints:toggle"),
          hint: Zu("codeEditorAiHints:toggleHint"),
          checked: su.shown,
          onChange: su.setShown
        }), su && fZ.h.canChange && (0, Cu.jsx)(CZ, {
          label: Zu("codeEditorAiKeySafetyCheck:toggle"),
          hint: Zu("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: Xu,
          onChange: uu => {
            uu ? lu(!0) : Rs.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((uu => {
              !0 === uu && lu(!1)
            }))
          }
        }), Uu && (0, Cu.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Cu.jsx)(lZ.e, {
            label: "codeEditor:variationLabel",
            children: (0, Cu.jsx)(Vj.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Uu.name,
              onValueChange: Uu.setName,
              onEnter: Uu.reload
            })
          }), (0, Cu.jsx)(Nu.C, {
            className: "CodeEditorButton",
            onClick: Uu.reload,
            children: Zu("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var cZ = ju(37282),
      NZ = ju(37284);

    function OZ(uu) {
      let {
        close: Eu
      } = uu;
      const {
        t: ju
      } = (0, Au.A)(), su = [{
        name: ju("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: ju("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: ju("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Cu.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Cu.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: ju("codeEditor:tutorialsTitle")
        }), (0, Cu.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: su.map((uu => (0, Cu.jsx)(Nu.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              Eu(), (0, NZ.K)(uu.tutorial)
            },
            children: uu.name
          }, uu.tutorial)))
        })]
      })
    }
    var YZ = ju(107),
      hZ = ju(36934),
      DZ = ju(3825);
    const gZ = (0, Uu.forwardRef)((function(uu, Eu) {
      let {
        value: ju,
        onChange: su,
        onSubmit: Uu,
        placeholder: Zu,
        maxLength: Xu,
        rows: lu = 2,
        allowNewLines: qu = !1,
        onKeyDown: fu,
        before: bu
      } = uu;
      const {
        t: cu
      } = (0, Au.A)(), Ou = "" !== ju.trim(), Yu = () => {
        Ou && Uu()
      };
      return (0, Cu.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [bu, (0, Cu.jsx)("textarea", {
          ref: Eu,
          className: "PanelPromptInput",
          value: ju,
          maxLength: Xu,
          rows: lu,
          placeholder: Zu,
          spellCheck: !1,
          autoComplete: "off",
          onChange: uu => {
            su(qu ? uu.target.value : uu.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: uu => {
            uu.nativeEvent.isComposing || 229 === uu.nativeEvent.keyCode ? uu.stopPropagation() : "Escape" !== uu.key && (uu.stopPropagation(), null === fu || void 0 === fu || fu(uu), uu.defaultPrevented || "Enter" !== uu.key || qu && uu.shiftKey || (uu.preventDefault(), Yu()))
          }
        }), (0, Cu.jsx)(Nu.f, {
          className: "PanelPromptSend",
          disabled: !Ou,
          onClick: Yu,
          ariaLabel: cu("codeEditorPanels:send"),
          children: (0, Cu.jsx)(hu.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function MZ(uu) {
      let {
        inputRef: Eu
      } = uu;
      const {
        t: ju
      } = (0, Au.A)(), {
        messages: su,
        reportedPlayers: Zu,
        channel: Xu
      } = (0, DZ.l)(), [lu, qu] = (0, Uu.useState)(""), fu = (0, Uu.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Cu.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Cu.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Cu.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: ju("codeEditorChat:title")
          })
        }), 0 === su.length ? (0, Cu.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: ju("codeEditorChat:empty")
        }) : (0, Cu.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Cu.jsx)(hZ.c, {
            messages: su,
            reportedPlayers: Zu
          })
        }), (0, Cu.jsx)(gZ, {
          ref: Eu,
          value: lu,
          onChange: qu,
          onSubmit: () => {
            (0, DZ.i)(lu), qu(""), fu.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: du.hd,
          rows: 1,
          placeholder: Xu ? ju("touchOnly" === (0, YZ.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Xu.channelName
          }) : ju("codeEditorChat:placeholder"),
          before: Xu && (0, Cu.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Xu.elementBgColor
            },
            onClick: () => {
              DZ.d.selectNextChannel(), Eu.current.focus()
            },
            children: (0, Cu.jsx)(wu.d, {
              text: Xu.elementContent
            })
          }),
          onKeyDown: uu => {
            const Eu = lu === fu.current.text;
            if ("ArrowUp" !== uu.key && "ArrowDown" !== uu.key || !Eu && "" !== lu) "Tab" === uu.key && !uu.shiftKey && Xu && (uu.preventDefault(), DZ.d.selectNextChannel());
            else {
              uu.preventDefault();
              const ju = Eu ? fu.current.stepsBack : 0;
              fu.current = (0, DZ.g)(ju + ("ArrowUp" === uu.key ? 1 : -1)), qu(fu.current.text)
            }
          }
        })]
      })
    }
    var eZ = ju(37290);

    function GZ(uu) {
      return "expanded" === uu ? "always" : "shown" === uu ? "narrow" : void 0
    }

    function pZ(uu) {
      var Eu;
      let {
        zb: ju,
        worldPanel: su,
        closeWorld: Uu,
        aiShown: Zu,
        defaultWidth: Xu,
        children: lu
      } = uu;
      const qu = "hidden" !== ju;
      return (0, Cu.jsx)(eZ.c, {
        side: "right",
        defaultSize: qu ? "max(18rem, 40%)" : Xu,
        covers: null !== (Eu = GZ(ju)) && void 0 !== Eu ? Eu : Zu ? "narrow" : void 0,
        children: (0, Cu.jsxs)("div", {
          className: Mj()("CodeEditorRightColumn", {
            WorldShown: qu,
            WorldExpanded: "expanded" === ju
          }),
          children: [qu && (0, Cu.jsx)(eZ.c, {
            side: "top",
            onClose: Uu,
            children: su
          }), lu]
        })
      })
    }
    var wZ = ju(2031),
      JZ = ju(1175),
      dZ = ju(1353);
    class aZ {
      constructor(uu, Eu, ju) {
        this.measure = uu, this.apply = Eu, this.now = ju, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.last) || void 0 === Eu ? void 0 : Eu.rect) && void 0 !== uu ? uu : null
      }
      sync() {
        const uu = function(uu) {
          const Eu = Math.round(uu.left),
            ju = Math.round(uu.top);
          return {
            left: Eu,
            top: ju,
            width: Math.round(uu.right) - Eu,
            height: Math.round(uu.bottom) - ju
          }
        }(this.measure());
        if (uu.width <= 0 || uu.height <= 0) return;
        const Eu = this.now(),
          ju = this.last;
        let su = {
          width: uu.width,
          height: uu.height
        };
        null === ju || uu.width === ju.rect.width && uu.height === ju.rect.height || (this.resizing = Eu - this.resizedAt < 100, this.resizedAt = Eu);
        const Uu = null !== ju && this.resizing && Eu - this.resizedAt < 100 && (uu.width !== ju.bufferSize.width || uu.height !== ju.bufferSize.height);
        Uu && (this.stretchedAt ??= Eu), Uu && Eu - this.stretchedAt < 250 ? su = ju.bufferSize : this.stretchedAt = null;
        const Zu = {
          rect: uu,
          bufferSize: su
        };
        var Xu, lu;
        null !== ju && (lu = Zu, (Xu = ju).rect.left === lu.rect.left && Xu.rect.top === lu.rect.top && Xu.rect.width === lu.rect.width && Xu.rect.height === lu.rect.height && Xu.bufferSize.width === lu.bufferSize.width && Xu.bufferSize.height === lu.bufferSize.height) || (this.last = Zu, this.apply(Zu))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function PZ(uu) {
      const {
        style: Eu
      } = document.documentElement;
      for (const [ju, su] of [
          ["--worldViewLeft", null === uu || void 0 === uu ? void 0 : uu.left],
          ["--worldViewTop", null === uu || void 0 === uu ? void 0 : uu.top],
          ["--worldViewWidth", null === uu || void 0 === uu ? void 0 : uu.width],
          ["--worldViewHeight", null === uu || void 0 === uu ? void 0 : uu.height]
        ]) void 0 === su ? Eu.removeProperty(ju) : Eu.setProperty(ju, `${su}px`)
    }
    var oZ = ju(1779),
      kZ = ju(2042);

    function mZ(uu, Eu) {
      (0, Uu.useEffect)((() => {
        if (!uu) return;
        const ju = uu => {
          var ju;
          "Escape" === uu.key ? (uu.stopPropagation(), uu.preventDefault(), Eu()) : (ju = uu.code, Object.entries(LE.z).some((uu => {
            let [Eu, su] = uu;
            const Uu = kZ.h[Eu];
            return Uu.includes("ui") && !Uu.includes("core") && su.includes(ju)
          })) && !(0, oZ.isTextEntry)(uu.target) && uu.preventDefault())
        };
        window.addEventListener("keydown", ju, !0);
        const su = (0, Iu.o)(Eu);
        return () => {
          window.removeEventListener("keydown", ju, !0), su()
        }
      }), [uu, Eu])
    }

    function vZ() {
      return (0, bU.p)().some((uu => uu !== bU.b))
    }

    function KZ(uu, Eu) {
      return uu.map((uu => Eu ? String(uu) : uu.toFixed(1))).join(", ")
    }

    function VZ(uu) {
      let {
        freeCamera: Eu,
        picking: ju,
        hovered: su
      } = uu;
      const {
        t: Zu
      } = (0, Au.A)(), Xu = (0, Uu.useRef)(null), lu = (0, Uu.useRef)(null);
      return (0, Uu.useEffect)((() => {
        const uu = (uu, Eu) => {
            uu.textContent !== Eu && (uu.textContent = Eu)
          },
          ju = () => {
            const ju = Eu ? fu.gameBridge.lookup("freeCameraPos", null) : null;
            uu(Xu.current, KZ(null !== ju && void 0 !== ju ? ju : fu.gameBridge.lookup("localPos", null), !1));
            const su = fu.gameBridge.lookup("targetedBlockPos", null);
            uu(lu.current, su ? KZ(su, !0) : "-")
          };
        return ju(), (0, dZ.y)(ju)
      }), [Eu]), (0, Cu.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Cu.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Zu(Eu ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Cu.jsx)("span", {
          ref: Xu
        }), (0, Cu.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Zu("codeEditorWorld:lookingAt")
        }), (0, Cu.jsx)("span", {
          ref: lu,
          hidden: ju
        }), ju && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)("span", {
            children: su ? KZ(su.pos, !0) : "-"
          }), su && (0, Cu.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: su.name
          })]
        })]
      })
    }
    var rZ = ju(37294),
      QZ = ju(1524);

    function iZ(uu) {
      const Eu = uu.currentTarget.getBoundingClientRect();
      return {
        x: (uu.clientX - Eu.left) / Eu.width,
        y: (uu.clientY - Eu.top) / Eu.height
      }
    }

    function WZ(uu) {
      const [Eu, ju] = (0, Uu.useState)(!1), [su, Zu] = (0, Uu.useState)(null), Xu = (0, Uu.useRef)(null);
      (0, Uu.useEffect)((() => {
        if (!Eu) return;
        let uu = null,
          ju = null,
          su = 1 / 0;
        const Uu = (0, dZ.u)((Eu => {
          su += Eu;
          const Uu = Xu.current;
          if (Uu === ju && su < 100) return;
          ju = Uu, su = 0;
          const lu = Uu && fu.gameBridge.lookup("blockAtViewPoint", Uu);
          var qu, Cu;
          (qu = lu) === (Cu = uu) || null !== qu && null !== Cu && qu.name === Cu.name && (0, rZ.f)(qu.pos, Cu.pos) && (0, rZ.f)(qu.normal, Cu.normal) || (uu = lu, Zu(lu), fu.gameBridge.send("setBlockHighlight", lu))
        }));
        return () => {
          Uu(), null !== uu && fu.gameBridge.send("setBlockHighlight", null), Zu(null)
        }
      }), [Eu]);
      const lu = (0, Uu.useCallback)((() => {
        ju(!1)
      }), []);
      mZ(Eu, lu);
      const qu = su => {
          if (!Eu) return;
          const Uu = fu.gameBridge.lookup("blockAtViewPoint", iZ(su));
          null !== Uu && (ju(!1), uu(Uu.pos))
        },
        Cu = Eu ? (0, QZ.g)(qu, "pointerup") : null,
        bu = {
          onPointerDown: uu => {
            null === Cu || void 0 === Cu || Cu.onPointerDown(uu)
          },
          onPointerMove: uu => {
            Xu.current = iZ(uu)
          },
          onPointerLeave: () => {
            Xu.current = null
          },
          onPointerUp: null === Cu || void 0 === Cu ? void 0 : Cu.onPointerUp,
          onClick: uu => {
            "pointerType" in uu.nativeEvent && "touch" === uu.nativeEvent.pointerType || qu(uu)
          }
        };
      return {
        picking: Eu,
        setPicking: ju,
        hovered: su,
        slotHandlers: bu
      }
    }

    function SZ(uu) {
      fu.gameBridge.send("setFreeCameraMovesFly", uu)
    }

    function IZ(uu) {
      let {
        shown: Eu,
        setShown: ju,
        canInsertCode: su
      } = uu;
      const {
        t: Zu
      } = (0, Au.A)(), {
        isTouchScreen: Xu
      } = (0, Su.l)(["isTouchScreen"]), lu = (0, Uu.useRef)(null), fu = (0, Uu.useCallback)((() => {
        var uu;
        null === (uu = lu.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === uu || uu.focus()
      }), []), {
        control: bu,
        take: cu,
        release: Yu,
        blocked: Du
      } = function(uu) {
        const [Eu, ju] = (0, Uu.useState)("none"), su = (0, Uu.useRef)("none"), [Zu, Xu] = (0, Uu.useState)(!1), lu = uu => {
          su.current = uu, ju(uu)
        }, qu = (0, Uu.useCallback)((() => {
          const Eu = su.current;
          "none" !== Eu && (lu("none"), (0, bU.t)(bU.b), "mouse" === Eu && uu())
        }), [uu]), fu = (0, Uu.useCallback)((uu => {
          vZ() ? Xu(!0) : (lu("mouse" === uu && "touchOnly" !== (0, YZ.c)() ? "mouse" : "touch"), (0, bU.q)(bU.b))
        }), []);
        return (0, Ju.f)("pointerLockUpdate", (uu => {
          uu && "touch" === su.current && "touchOnly" !== (0, YZ.c)() ? lu("mouse") : uu || "mouse" !== su.current || qu()
        })), (0, Uu.useEffect)((() => {
          if (!Zu) return;
          const uu = () => {
            vZ() || Xu(!1)
          };
          return uu(), (0, bU.j)(uu)
        }), [Zu]), mZ("none" !== Eu, qu), (0, Uu.useEffect)((() => {
          if ("none" === Eu) return;
          const uu = uu => {
            (0, oZ.isTextEntry)(uu.target) && qu()
          };
          return document.addEventListener("focusin", uu), () => {
            document.removeEventListener("focusin", uu)
          }
        }), [Eu, qu]), (0, Uu.useEffect)((() => (document.addEventListener("pointerlockerror", qu), () => {
          document.removeEventListener("pointerlockerror", qu)
        })), [qu]), (0, Uu.useEffect)((() => () => {
          "none" !== su.current && null !== Su.d.get("openInGameMenuName") && (0, bU.t)(bU.b)
        }), []), {
          control: Eu,
          take: fu,
          release: qu,
          blocked: Zu
        }
      }(fu), gu = (0, JZ.r)(eZ.e);
      (0, Uu.useEffect)((() => {
        "touch" !== bu || "shown" !== Eu || gu ? "none" === bu && "expanded" === Eu && ju("shown") : ju("expanded")
      }), [bu, gu]),
      function(uu, Eu) {
        const ju = (0, Uu.useRef)(Eu);
        ju.current = Eu;
        const su = (0, Uu.useRef)(null);
        (0, Uu.useLayoutEffect)((() => {
          const Eu = new aZ((() => uu.current.getBoundingClientRect()), (uu => {
            var Eu;
            "none" !== ju.current && PZ(null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.rect) && void 0 !== Eu ? Eu : null), (0, dZ.E)().setGameView(uu)
          }), (() => performance.now()));
          su.current = Eu, Eu.sync();
          const Uu = (0, dZ.t)((() => {
            Eu.sync()
          }));
          return () => {
            Uu(), Su.d.set({
              worldPanelHud: null
            }), Eu.stop()
          }
        }), [uu]), (0, Uu.useLayoutEffect)((() => {
          su.current.sync(), PZ("none" === Eu ? null : su.current.rect), Su.d.set({
            worldPanelHud: Eu
          })
        }), [Eu])
      }(lu, "touch" === bu ? "touchControls" : "none");
      const {
        picking: Mu,
        setPicking: eu,
        hovered: Gu,
        slotHandlers: {
          onPointerDown: pu,
          ...wu
        }
      } = WZ((uu => {
        Ou.h.TY("CodeEditorInsertText", {
          text: `[${uu.join(", ")}]`,
          focus: !Xu
        }), (0, eZ.e)() && ju("hidden")
      })), du = function() {
        const {
          allowed: uu,
          movesFly: Eu
        } = (0, au.f)("freeCamera"), ju = (0, Uu.useRef)(Eu), su = (0, Uu.useRef)(Eu);
        return su.current !== Eu && (su.current = Eu, ju.current = Eu), (0, Uu.useEffect)((() => () => {
          ju.current && SZ(!1)
        }), []), {
          allowed: uu,
          on: Eu,
          toggle: () => {
            ju.current = !Eu, SZ(!Eu)
          }
        }
      }(), Pu = (0, qu.h)("hideCoordinates"), ou = (0, au.f)("localPlayerAlive"), ku = !ou || Du;
      (0, Uu.useEffect)((() => {
        ou || Yu()
      }), [ou, Yu]), (0, Uu.useEffect)((() => {
        !ku && su || eu(!1)
      }), [ku, su, eu]);
      const mu = du.on ? Nu.p : Nu.f,
        vu = Mu ? Nu.p : Nu.f;
      return (0, Cu.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Cu.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Cu.jsx)("span", {
            className: "WorldPanelTitle",
            children: Zu("codeEditorWorld:title")
          }), "touch" === bu && !gu && (0, Cu.jsx)(Nu.f, {
            className: "WorldPanelButton",
            onClick: Yu,
            children: Zu("codeEditorWorld:backToCode")
          }), !ku && du.allowed && !Xu && (0, Cu.jsx)(Tu.e, {
            tooltipInner: Zu("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Cu.jsx)(mu, {
              className: "WorldPanelButton",
              ariaPressed: du.on,
              ariaLabel: Zu("codeEditorWorld:freeCamera"),
              onClick: du.toggle,
              children: (0, Cu.jsx)(hu.e, {
                name: "video"
              })
            })
          }), !ku && su && (0, Cu.jsx)(Tu.e, {
            tooltipInner: Zu("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Cu.jsxs)(vu, {
              className: "WorldPanelButton",
              ariaPressed: Mu,
              onClick: () => {
                Yu(), eu(!Mu)
              },
              children: [(0, Cu.jsx)(hu.e, {
                name: "crosshairs"
              }), Zu("codeEditorWorld:pick")]
            })
          })]
        }), !Pu && (0, Cu.jsx)(VZ, {
          freeCamera: du.on,
          picking: Mu,
          hovered: Gu
        }), (0, Cu.jsxs)("div", {
          ref: lu,
          className: Mj()("WorldPanelSlot", {
            TouchControl: "touch" === bu,
            Picking: Mu
          }),
          onPointerDown: uu => {
            0 !== uu.button || ku || Mu || cu(uu.pointerType), pu(uu)
          },
          ...wu,
          children: [!ku && !Mu && (0, Cu.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !ku && "touch" !== bu && (0, Cu.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Mu && Zu(Xu ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Mu && "none" === bu && !du.on && Zu(Xu ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Mu && "none" === bu && du.on && Zu("codeEditorWorld:clickToFly"), "mouse" === bu && (0, Cu.jsxs)(Cu.Fragment, {
              children: [(0, Cu.jsx)(wZ.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), Zu("codeEditorWorld:backToCode")]
            })]
          }), ku && (0, Cu.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Cu.jsx)("span", {
              children: Zu(ou ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Cu.jsx)(Nu.f, {
              onClick: Iu.h,
              children: Zu("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var FZ = ju(5179);

    function BZ(uu) {
      let {
        zb: Eu,
        setWorld: ju,
        toggleWorld: su,
        aiShown: Uu,
        closeAi: Zu
      } = uu;
      const {
        t: Xu
      } = (0, Au.A)(), lu = Uu ? "ai" : "hidden" !== Eu ? "world" : "code", qu = [{
        value: "code",
        label: Xu("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Xu("codeEditorWorld:title")
      }];
      Uu && qu.push({
        value: "ai",
        label: Xu("codeEditorWorld:aiPane")
      });
      return (0, Cu.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Cu.jsx)(FZ.c, {
          options: qu,
          value: lu,
          onChange: uu => {
            "world" !== uu ? (Uu && Zu(), ju("hidden")) : "hidden" === Eu ? su() : Zu()
          },
          ariaLabel: Xu("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var LZ = ju(37299),
      tZ = ju(37304),
      xZ = ju(37308),
      TZ = ju(37317);
    const HZ = (0, Uu.lazy)((() => Promise.all([ju.e(303), ju.e(299), ju.e(302), ju.e(298), ju.e(85), ju.e(301), ju.e(300), ju.e(297)]).then((() => ju(41533))))),
      AZ = (0, Uu.lazy)((() => Promise.all([ju.e(80), ju.e(83), ju.e(84), ju.e(82), ju.e(305)]).then((() => ju(41734))))),
      nZ = (0, Uu.lazy)((() => Promise.all([ju.e(303), ju.e(302), ju.e(85), ju.e(83), ju.e(84), ju.e(82), ju.e(301), ju.e(300), ju.e(81), ju.e(92)]).then((() => ju(41743)))));

    function yZ(uu) {
      return fu.gameBridge.query("worldCodeAiChunk", uu)
    }

    function zZ() {
      return fu.gameBridge.query("worldCodeAiGameState", null)
    }

    function RZ(uu) {
      const {
        gsUrl: Eu,
        gameNameWithVariation: ju,
        lobbyName: su
      } = RU();
      return (0, wU.postJsonWithMetricsCookiesAndJsonResponse)(`${Eu}/code/get-lobby-code`, pU.dk["get-lobby-code"].toBuffer({
        gameNameWithVariation: ju,
        lobbyName: su,
        path: uu
      }), {
        retries: 1
      })
    }
    let uX = !1;
    const EX = [],
      jX = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      sX = (0, Uu.memo)((function(uu) {
        var Eu, ju;
        let {
          show: su,
          onOpen: Zu,
          onClose: lu,
          isLobbyCode: bu
        } = uu;
        const cu = (0, Uu.useRef)(""),
          [Yu, Du] = (0, Uu.useState)(null),
          gu = (0, Uu.useRef)(bu),
          [Mu, eu] = (0, Uu.useState)({
            message: null,
            type: null
          }),
          [Gu, pu] = (0, Uu.useState)(""),
          wu = Mu.message ? Mu : {
            message: Gu,
            type: "warning"
          },
          [ou, ku] = (0, Uu.useState)(!0),
          [mu, Ku] = (0, fZ.l)(fZ.i),
          [Vu, ru] = (0, fZ.l)(fZ.d),
          [Qu, iu] = (0, Uu.useState)(!1),
          [Wu, Fu] = (0, Uu.useState)(!1),
          Bu = (0, Uu.useRef)(null),
          Lu = (0, Uu.useRef)(!1);
        (0, Uu.useEffect)((() => {
          var uu;
          Wu && Lu.current && (Lu.current = !1, null === (uu = Bu.current) || void 0 === uu || uu.focus())
        }), [Wu]);
        const tu = (0, LZ.e)(),
          xu = (0, Uu.useRef)(null),
          Hu = (0, Uu.useRef)(null),
          {
            openInGameMenuName: nu,
            openEverythingMenuName: yu,
            worldPanelHud: zu
          } = (0, Su.l)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          Ru = uu => {
            su && (xu.current = uu, aE.current = !0)
          };
        (0, Ju.f)("OpenReportMenu", (() => {
          Ru("HN")
        })), (0, Ju.f)("OpenStoreFromCodeEditor", (() => {
          Ru("store")
        })), (0, Uu.useEffect)((() => {
          const uu = xu.current;
          null === uu || "HN" === uu && ("makeReport" === nu || "makeDiscordReport" === nu) || "store" === uu && null !== yu || (xu.current = null, null === nu && null === yu ? bu ? (Hu.current = sj.current, Ou.h.TY("EditLobbyCode", Yu)) : Ou.h.TY("EditCodeBlock", {
            pos: Yu,
            canChangePos: gu.current
          }) : (0, NZ.A)())
        }), [nu, yu, bu, Yu]), (0, Uu.useEffect)((() => {
          if (su) return () => {
            Hu.current = null
          }
        }), [su]);
        const [uE, EE] = function() {
          const [uu, Eu] = (0, Uu.useState)(uX);
          return (0, Ju.f)("CodeEditorAiHelperShown", (uu => {
            Eu(uu)
          })), [uu, (0, Uu.useCallback)((uu => {
            uX = uu, Ou.h.TY("CodeEditorAiHelperShown", uu)
          }), [])]
        }(), [jE, sE] = (0, Uu.useState)(null), [UE, ZE] = (0, Uu.useState)([]), [XE, lE] = (0, Uu.useState)(0), [qE, fE] = (0, Uu.useState)(0), [CE, bE] = (0, Uu.useState)(""), NE = (0, Uu.useRef)(null), [OE, YE] = (0, Uu.useState)(bu ? TZ.f : null), hE = bu || null !== Yu, DE = (0, qu.h)("canEditCode"), gE = (0, qu.h)("canUseDevCreativeItems"), ME = (0, cZ.i)("welcome"), eE = (0, cZ.i)("docsOverview"), GE = eE ? "docsOverview" : "welcome", pE = null !== eE && void 0 !== eE ? eE : ME, wE = (0, cZ.i)("aiHelperOverview"), JE = wE ? "aiHelperOverview" : "welcome", dE = null !== wE && void 0 !== wE ? wE : ME, aE = (0, Uu.useRef)(!1), PE = (0, Uu.useRef)(!1), oE = (0, Uu.useRef)(null), [kE, mE] = (0, Uu.useState)(""), [vE, KE] = (0, Uu.useState)(!1), [VE, rE] = (0, Uu.useState)(null), QE = (0, au.f)("connectedGame"), iE = bu && DE && "classic" === QE.gameNameWithVariation && !(0, cE.N)(QE.lobbyName), [WE, SE] = (0, Uu.useState)(null), [IE, BE] = (0, Uu.useState)({
          [JU.h]: ""
        }), [tE, xE] = (0, Uu.useState)({
          assets: {},
          revision: 0
        }), TE = (0, Uu.useRef)(tE), HE = (0, Uu.useCallback)((uu => {
          var Eu;
          uu.revision < TE.current.revision || (TE.current = uu, xE(uu), pu(uu.startupError ? `Schematics could not load: ${uu.startupError}` : ""), null === (Eu = Yj.current) || void 0 === Eu || Eu.onLobbyFilesChanged({
            ...qj.current,
            ...(0, VU.l)(uu.assets)
          }))
        }), []), [AE, nE] = (0, Uu.useState)(JU.h), [yE, zE] = (0, Uu.useState)(null), [RE, uj] = (0, Uu.useState)(null), Ej = (0, Uu.useRef)(!1), jj = (0, Uu.useRef)(null), sj = (0, Uu.useRef)(AE);
        sj.current = AE;
        const Uj = (0, Uu.useRef)(yE);
        Uj.current = yE;
        const Zj = yE ? null : VE,
          Xj = Zj && !Zj.engineLocked ? Zj.worldCodeEngine : null,
          lj = (0, Uu.useRef)(RE);
        lj.current = RE;
        const qj = (0, Uu.useRef)(IE);
        qj.current = IE;
        const fj = (0, Uu.useRef)(null),
          Cj = (0, Uu.useRef)(null),
          [bj, cj] = (0, Uu.useState)(!1),
          Nj = (0, tU.k)(),
          Oj = (0, Uu.useRef)([]),
          Yj = (0, Uu.useRef)(null),
          hj = (0, Uu.useRef)(null),
          Dj = (0, Uu.useRef)(null);

        function gj(uu) {
          eu(uu), clearTimeout(oE.current), oE.current = setTimeout((() => {
            eu({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const ej = (0, Uu.useCallback)((function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Ej.current && jj.current && (fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.Leave,
              qZ: (0, dU.r)(jj.current),
              mC: !!uu || null
            }), Ej.current = !1, jj.current = null), SE(null)
          }), []),
          Gj = (0, Uu.useCallback)((uu => {
            const Eu = {
              kind: "lobby",
              path: uu
            };
            jj.current = Eu, nE(uu), cu.current = "", fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.Join,
              qZ: (0, dU.r)(Eu)
            }), Ej.current = !0
          }), []),
          pj = (0, Uu.useCallback)((uu => {
            var Eu;
            const ju = null === (Eu = hj.current) || void 0 === Eu ? void 0 : Eu.collabState;
            return ju && "lobby" === ju.docKey.kind && ju.docKey.path === uu && sj.current === uu ? Promise.resolve({
              doc: ju.doc,
              version: ju.version,
              clientID: ju.clientID,
              docKey: ju.docKey,
              httpConfig: ju.httpConfig
            }) : new Promise(((Eu, ju) => {
              const su = setTimeout((() => {
                  Oj.current = Oj.current.filter((uu => uu !== Uu)), ju(new Error(`Timed out joining ${uu}`))
                }), 15e3),
                Uu = ju => {
                  "lobby" === ju.docKey.kind && ju.docKey.path === uu && (clearTimeout(su), Oj.current = Oj.current.filter((uu => uu !== Uu)), Eu(ju))
                };
              Oj.current.push(Uu), sj.current !== uu ? (ej(!0), Gj(uu)) : Ej.current || Gj(uu)
            }))
          }), [Gj, ej]),
          wj = (0, Uu.useCallback)((async function(uu, Eu) {
            let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const su = Date.now();
            let Uu = uu in qj.current;
            for (; Uu !== Eu;) {
              if (Date.now() - su > ju) throw new Error(`Timed out waiting for lobby path ${uu} present=${Eu}`);
              await (0, Ms.K)(50), Uu = uu in qj.current
            }
          }), []),
          Jj = (0, Uu.useCallback)((uu => {
            const Eu = qj.current,
              ju = JU.h in Eu && JU.j in Eu;
            if (!(0, aU.j)(uu) || ju) {
              if (sj.current === uu) {
                var su;
                const Uu = ju && (0, aU.j)(uu) ? uu === JU.h ? JU.j : JU.h : null !== (su = (0, aU.d)(Eu)) && void 0 !== su ? su : JU.h;
                Cj.current = {
                  fromPath: uu,
                  toPath: Uu
                }, nE(Uu)
              }
              fu.gameBridge.send("sendCodeCollab", {
                lZ: dU.d.DeleteFile,
                qZ: (0, dU.r)({
                  kind: "lobby",
                  path: sj.current
                }),
                vC: uu
              })
            }
          }), []),
          dj = (0, Uu.useCallback)((uu => {
            Hu.current = null, zE(null), uj(null), !bu || uu === sj.current && Ej.current || (ej(!0), Gj(uu))
          }), [bu, ej, Gj]),
          aj = (0, Uu.useCallback)(((uu, Eu) => {
            const ju = vU.h[uu],
              su = ju && Eu in ju.files ? Eu : "index.ts";
            if (uu !== Uj.current || su !== lj.current) {
              var Uu;
              if (uu !== Uj.current) null === (Uu = Yj.current) || void 0 === Uu || Uu.stopContinuousSync(), ej(!0);
              zE(uu), uj(su)
            }
          }), [ej]),
          Pj = (0, Uu.useCallback)((uu => {
            var Eu;
            const ju = sj.current,
              su = qj.current[ju],
              Uu = Ej.current && !Uj.current && ju in uu && void 0 !== su ? {
                ...uu,
                [ju]: su
              } : uu;
            BE(Uu);
            const Zu = fj.current;
            if (Zu && Zu in uu) fj.current = null, Zu !== sj.current && dj(Zu);
            else if (!(sj.current in uu) && Ej.current && !Uj.current) {
              var Xu;
              dj(null !== (Xu = (0, aU.d)(uu)) && void 0 !== Xu ? Xu : JU.h)
            }
            null === (Eu = Yj.current) || void 0 === Eu || Eu.onLobbyFilesChanged({
              ...Uu,
              ...(0, VU.l)(TE.current.assets)
            })
          }), [dj]),
          oj = (0, Uu.useCallback)((() => RZ(sj.current).then((async uu => {
            if (!Ej.current || !uu.files) return null;
            Pj(uu.files);
            const Eu = await uZ({
              action: "state"
            });
            return HE(Eu), {
              ...uu.files,
              ...(0, VU.l)(Eu.assets)
            }
          })).catch((uu => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", uu), gj({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Pj, HE]),
          kj = () => {
            lu()
          };
        (0, Uu.useEffect)((() => {
          if (pu(""), !su || !bu) return;
          let uu = !1;
          return TE.current = {
            assets: {},
            revision: 0
          }, xE(TE.current), uZ({
            action: "state"
          }).then((Eu => {
            uu || HE(Eu)
          })).catch((Eu => {
            console.error("Could not load project schematics", Eu), uu || pu("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            uu = !0
          }
        }), [su, bu, HE]);
        const mj = (0, Uu.useCallback)((function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            jj.current && fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.Submit,
              qZ: (0, dU.r)(jj.current),
              ...uu ? {
                cZ: "keepOpen"
              } : {}
            })
          }), []),
          vj = (0, Uu.useCallback)((() => {
            if (!jj.current || "lobby" !== jj.current.kind) return;
            const uu = kE.trim();
            (0, PU.s)(uu) ? (fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.ReloadAsVariation,
              qZ: (0, dU.r)(jj.current),
              cZ: uu
            }), KE(!1)) : gj({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [kE]),
          Kj = (0, Uu.useCallback)((uu => {
            fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.SetEngine,
              qZ: (0, dU.r)({
                kind: "lobby",
                path: sj.current
              }),
              cZ: uu
            })
          }), []),
          Vj = (0, Uu.useCallback)((uu => {
            if (!Uj.current && DE && (gu.current || bu)) {
              if (bu) {
                var Eu;
                const ju = (0, aU.t)(qj.current, sj.current),
                  su = Math.min(FE.p, Math.max(0, FE.t - ju)),
                  Uu = uu.slice(0, su);
                return cu.current = Uu, BE((uu => ({
                  ...uu,
                  [sj.current]: Uu
                }))), void(null === (Eu = Yj.current) || void 0 === Eu || Eu.onDocTextChanged(sj.current, Uu))
              }
              cu.current = uu, bE(uu)
            }
          }), [DE, bu]);
        (0, Ju.f)("EditLobbyCode", (uu => {
          var Eu;
          vu.featureFlags.canSeePlayerWrittenText && bu && (ej(), Du(uu), cu.current = "", BE({
            [JU.h]: ""
          }), rE(null), nE(JU.h), zE(null), uj(null), fj.current = null, Cj.current = null, null === (Eu = Yj.current) || void 0 === Eu || Eu.stopContinuousSync(), Zu(), Gj(JU.h))
        })), (0, Ju.f)("EditCodeBlock", (uu => {
          let {
            pos: Eu,
            canChangePos: ju
          } = uu;
          if (vu.featureFlags.canSeePlayerWrittenText && !bu)
            if (ej(), null !== Eu && (Eu = [...Eu]), Du(Eu), gu.current = ju, null !== Eu) {
              cu.current = "", bE(""), Zu();
              const uu = {
                  kind: "codeBlock",
                  pos: Eu
                },
                su = (0, dU.r)(uu);
              NE.current !== su && (NE.current = su, ZE([]), fE(XE)), YE((0, TZ.c)(su, [Eu[0], Eu[1], Eu[2]], !!ju)), jj.current = uu, fu.gameBridge.send("sendCodeCollab", {
                lZ: dU.d.Join,
                qZ: (0, dU.r)(uu)
              }), Ej.current = !0
            } else su && lu()
        })), (0, Ju.f)("codeCollabRejoin", (uu => {
          const Eu = jj.current ? (0, dU.r)(jj.current) : null;
          Eu && uu.docKey === Eu && (cu.current = uu.doc, bu || bE(uu.doc), SE((Eu => Eu ? {
            ...Eu,
            doc: uu.doc,
            version: uu.version,
            clientID: (0, mU.e)()
          } : Eu)))
        })), (0, Ju.f)("codeCollab", (uu => {
          var Eu;
          const ju = jj.current ? (0, dU.r)(jj.current) : null;
          if (uu.type === dU.f.LobbyFilesChanged && bu) {
            if ("string" !== typeof uu.files) return void oj();
            try {
              Pj(JSON.parse(uu.files))
            } catch (fu) {
              console.error("[CodeCollab] Failed to parse lobby files", fu), oj()
            }
            return
          }
          if (uu.type === dU.f.EngineSettings && bu) return void rE(ZZ(uu.engineSettings));
          const Uu = uu.type === dU.f.Joined ? (0, dU.h)(uu.docKey) : null,
            Zu = bu && "lobby" === (null === (Eu = jj.current) || void 0 === Eu ? void 0 : Eu.kind) && (0, aU.j)(jj.current.path) && "lobby" === (null === Uu || void 0 === Uu ? void 0 : Uu.kind) && (0, aU.j)(Uu.path);
          if (!ju || uu.docKey === ju || Zu)
            if (uu.type !== dU.f.ForceClose) {
              if (su)
                if (uu.type === dU.f.Joined) {
                  var Xu;
                  const Cu = JSON.parse(uu.peers),
                    Nu = uu.existingCursors ? JSON.parse(uu.existingCursors) : [],
                    hu = (0, mU.e)(),
                    Du = RU(),
                    {
                      gsUrl: gu,
                      gameNameWithVariation: Mu,
                      lobbyName: Gu
                    } = Du,
                    pu = null !== (Xu = (0, dU.h)(uu.docKey)) && void 0 !== Xu ? Xu : jj.current;
                  pu && (jj.current = pu, "lobby" === pu.kind && (nE(pu.path), sj.current = pu.path));
                  const wu = pu || (bu ? {
                    kind: "lobby",
                    path: sj.current
                  } : {
                    kind: "codeBlock",
                    pos: Yu
                  });

                  function Ju(Eu) {
                    var ju, su;
                    if (!Ej.current) return;
                    const Uu = null !== (ju = Eu.code) && void 0 !== ju ? ju : "",
                      Zu = null !== (su = Eu.collabVersion) && void 0 !== su ? su : 0;
                    cu.current = Uu, bu || bE(Uu), bu && Eu.files ? BE(Eu.files) : bu && BE((uu => ({
                      ...uu,
                      [sj.current]: Uu
                    })));
                    const Xu = {
                      doc: Uu,
                      version: Zu,
                      clientID: hu,
                      docKey: wu,
                      peers: Cu,
                      editorCount: uu.editorCount,
                      existingCursors: Nu,
                      httpConfig: Du
                    };
                    if (SE(Xu), "lobby" === wu.kind) {
                      var lu;
                      const uu = {
                        doc: Uu,
                        version: Zu,
                        clientID: hu,
                        docKey: wu,
                        httpConfig: Du
                      };
                      for (const Eu of [...Oj.current]) Eu(uu);
                      null === (lu = Yj.current) || void 0 === lu || lu.startWhenReady()
                    }
                    Eu.canSeeCode ? (clearTimeout(oE.current), eu({
                      message: null,
                      type: null
                    })) : function(uu) {
                      clearTimeout(oE.current), eu(uu)
                    }(jX);
                    const qu = Hu.current;
                    Hu.current = null, bu && qu && Eu.files && qu in Eu.files && qu !== sj.current && dj(qu)
                  }
                  bu ? RZ(sj.current).then(Ju).catch((uu => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", uu), ej()
                  })) : (0, wU.postJsonWithMetricsCookiesAndJsonResponse)(`${gu}/code/get-code-block`, pU.dk["get-code-block"].toBuffer({
                    gameNameWithVariation: Mu,
                    lobbyName: Gu,
                    pos: Yu
                  }), {
                    retries: 1
                  }).then(Ju).catch((uu => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", uu), ej()
                  }))
                } else if (uu.type === dU.f.Presence) {
                if (!ju) return;
                const du = JSON.parse(uu.peers);
                SE((Eu => Eu ? {
                  ...Eu,
                  peers: du,
                  editorCount: uu.editorCount
                } : Eu))
              }
            } else {
              var qu;
              if (!ju) return;
              su && bu && "keptOpen" === uu.updates && Ou.h.TY("CodeEditorKeepEdits");
              const au = jj.current;
              Ej.current = !1, jj.current = null, SE(null);
              if (!bu || "close" === uu.updates) return (0, xZ.i)(), void(su && lu());
              if (!su) return;
              const Pu = qj.current,
                ou = Cj.current;
              Cj.current = null;
              const ku = "lobby" === (null === au || void 0 === au ? void 0 : au.kind) && au.path === (null === ou || void 0 === ou ? void 0 : ou.fromPath),
                mu = ou && (ku || ou.toPath in Pu || (0, aU.j)(ou.toPath)) ? ou.toPath : sj.current in Pu ? sj.current : null !== (qu = (0, aU.d)(Pu)) && void 0 !== qu ? qu : JU.h;
              Gj(mu)
            }
        })), (0, Ju.f)("refetchCode", (() => {
          vu.featureFlags.canSeePlayerWrittenText && su && Ej.current && (DE || (ej(), bu ? Ou.h.TY("EditLobbyCode", Yu) : Ou.h.TY("EditCodeBlock", {
            pos: Yu,
            canChangePos: gu.current
          })))
        }));
        const rj = (0, Uu.useCallback)((() => {
            su && (iu(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [su]),
          Qj = (0, Uu.useCallback)((() => {
            iu(!1)
          }), []);
        (0, Uu.useEffect)((() => {
          su && DE && ("docsButton" === pE && Qu ? (0, NZ.f)("docsButton") : pE && NZ.i.includes(pE) && !Qu && (iu(!0), EE(!1)))
        }), [su, DE, pE, Qu, EE]);
        const ij = (0, Uu.useCallback)((() => {
          EE(!1)
        }), [EE]);
        (0, Uu.useEffect)((() => {
          su && DE && hE && ("aiHelperButton" === dE && uE ? (0, NZ.f)("aiHelperButton") : dE && NZ.d.includes(dE) && !uE && (EE(!0), iu(!1)))
        }), [su, DE, hE, dE, uE, EE]), (0, Uu.useEffect)((() => {
          if (!su || !DE) return;
          const uu = bu ? "worldCode" : "codeBlock";
          return (0, NZ.E)(uu, !0), () => {
            (0, NZ.E)(uu, !1)
          }
        }), [su, DE, bu]), (0, Uu.useEffect)((() => {
          if (su) return () => {
            aE.current ? aE.current = !1 : (0, NZ.A)()
          }
        }), [su]), (0, Uu.useEffect)((() => {
          (0, NZ.G)("exportButton", !!gE)
        }), [gE]);
        const {
          t: Wj
        } = (0, Au.A)(), Sj = !uE && XE > qE, Ij = Sj ? Nu.R : Nu.C, Fj = (0, Uu.useCallback)(((uu, Eu) => {
          Ou.h.TY("CodeEditorGoToLine", {
            path: uu,
            line: Eu
          }), dj(uu)
        }), [dj]), Bj = (0, Uu.useCallback)((uu => {
          Dj.current = uu
        }), []), Lj = function(uu, Eu) {
          const [ju, su] = (0, Uu.useState)(null);
          return (0, Uu.useEffect)((() => {
            if (!Eu) return void su(null);
            let ju = !1;
            return LU(uu).then((uu => {
              ju || su(uu)
            }), (uu => {
              console.error("[CodeEditor] could not collect the imported plugins", uu), ju || su(null)
            })), () => {
              ju = !0
            }
          }), [uu, Eu]), ju
        }(IE, su);
        (0, Uu.useEffect)((() => {
          Lj && yE && !Lj.includes(yE) && (zE(null), uj(null), bu && !Ej.current && Gj(sj.current))
        }), [yE, Lj, bu, Gj]), hj.current = {
          collabState: WE,
          ensureJoinedPath: pj,
          waitForLobbyPath: wj,
          pullLobbyFiles: oj,
          t: Wj,
          canEditCode: !!DE
        }, Yj.current || (Yj.current = new yU({
          getLobbyFiles: () => ({
            ...qj.current,
            ...(0, VU.l)(TE.current.assets)
          }),
          deleteSchematic: async uu => {
            const Eu = await uZ({
              action: "remove",
              path: uu,
              expectedRevision: TE.current.revision
            });
            HE(Eu)
          },
          getActivePath: () => sj.current,
          getCollabSnapshot: () => {
            var uu;
            if (Uj.current) return null;
            const Eu = null === (uu = hj.current) || void 0 === uu ? void 0 : uu.collabState;
            return Eu ? {
              doc: Eu.doc,
              version: Eu.version,
              clientID: Eu.clientID,
              docKey: Eu.docKey,
              httpConfig: Eu.httpConfig
            } : null
          },
          replaceActiveDoc: (uu, Eu) => {
            var ju, su;
            return null !== (ju = null === (su = Dj.current) || void 0 === su ? void 0 : su.call(Dj, uu, Eu)) && void 0 !== ju && ju
          },
          ensureJoined: uu => hj.current.ensureJoinedPath(uu),
          createFile: (uu, Eu) => {
            !1 !== (null === Eu || void 0 === Eu ? void 0 : Eu.focus) && (fj.current = uu), fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.CreateFile,
              qZ: (0, dU.r)({
                kind: "lobby",
                path: sj.current
              }),
              vC: uu
            })
          },
          renameFile: (uu, Eu) => {
            const ju = (0, dU.r)({
              kind: "lobby",
              path: sj.current
            });
            sj.current === uu && (Cj.current = {
              fromPath: uu,
              toPath: Eu
            }, nE(Eu)), fu.gameBridge.send("sendCodeCollab", {
              lZ: dU.d.RenameFile,
              qZ: ju,
              vC: uu,
              KC: Eu
            })
          },
          deleteFile: uu => {
            Jj(uu)
          },
          waitForLobbyPath: (uu, Eu, ju) => hj.current.waitForLobbyPath(uu, Eu, ju),
          pullLobbyFiles: () => hj.current.pullLobbyFiles(),
          setMessage: (uu, Eu) => {
            gj({
              message: uu,
              type: Eu
            })
          },
          onUnlinked: () => {
            cj(!1)
          },
          t: uu => hj.current.t(uu),
          canEditCode: () => hj.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: uu,
              lobbyName: Eu
            } = fu.gameBridge.latest("connectedGame");
            return (0, tU.c)(uu, Eu)
          }
        }));
        const tj = (0, Uu.useCallback)((async uu => {
            const Eu = Yj.current;
            if (!Eu) return !1;
            try {
              return await Eu.writeLobbyFiles(uu)
            } catch (ju) {
              return console.error("World Code AI: couldn't write the change", ju), !1
            }
          }), []),
          xj = (0, Uu.useCallback)((async uu => {
            var Eu, ju;
            const su = null === (Eu = uu.find((uu => uu.path === tZ.b))) || void 0 === Eu ? void 0 : Eu.text,
              Uu = jj.current;
            return void 0 !== su && "codeBlock" === (null === Uu || void 0 === Uu ? void 0 : Uu.kind) && (!(null === (ju = Dj.current) || void 0 === ju || !ju.call(Dj, (0, dU.r)(Uu), su)) && (cu.current = su, bE(su), !0))
          }), []),
          Tj = (0, Uu.useCallback)((async () => {
            try {
              var uu, Eu;
              const ju = await RZ(JU.h);
              return !1 === ju.canSeeCode ? null : null !== (uu = ju.files) && void 0 !== uu ? uu : {
                [JU.h]: null !== (Eu = ju.code) && void 0 !== Eu ? Eu : ""
              }
            } catch (ju) {
              return console.error("World Code AI: couldn't read World Code for a code block", ju), null
            }
          }), []),
          Hj = (0, Uu.useMemo)((() => ({
            [tZ.b]: CE
          })), [CE]),
          Aj = (0, Uu.useCallback)(((uu, Eu) => {
            Ou.h.TY("CodeEditorGoToLine", {
              path: tZ.b,
              line: Eu
            })
          }), []);
        (0, Uu.useEffect)((() => {
          uE && su && fE(XE)
        }), [uE, su, XE]);
        const nj = (0, Uu.useCallback)((() => {
            var uu, Eu;
            mj();
            const ju = (0, vu.isTouchscreen)() ? "open World Code again" : `press ${null!==(uu=null===(Eu=LE.z.OpenCodeEditor)||void 0===Eu?void 0:Eu[0])&&void 0!==uu?uu:"F8"}`,
              su = bu ? `\ud83e\udd16 Try out your change, then ${ju} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            Ou.h.TY("chat", {
              content: [{
                str: su,
                style: {
                  color: du.G.cyanUiText
                }
              }]
            })
          }), [mj, bu]),
          yj = (0, Uu.useCallback)((uu => {
            const Eu = Yu,
              ju = gu.current;
            bu || !Eu || fu.gameBridge.lookup("codeBlockClickable", Eu) ? (0, xZ.k)(uu, {
              submit: () => {
                mj(), Ou.h.TY("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: du.G.cyanUiText
                    }
                  }]
                }), !bu && Eu && setTimeout((() => {
                  fu.gameBridge.send("clickCodeBlock", Eu)
                }), 1e3)
              },
              reopen: () => {
                (0, Iu.s)() || (bu ? Ou.h.TY("EditLobbyCode", Eu) : Ou.h.TY("EditCodeBlock", {
                  pos: Eu,
                  canChangePos: ju
                }))
              }
            }) : nj()
          }), [mj, bu, Yu, nj]),
          zj = (0, Uu.useCallback)((() => {
            EE(!1)
          }), [EE]),
          Rj = (0, Uu.useRef)(kj);
        Rj.current = kj;
        const us = (0, Uu.useCallback)((function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            Ou.h.TY("WorldCodeAiDraft", {
              text: uu,
              send: Eu
            }), Rj.current(), Ou.h.TY("EditLobbyCode", Yu)
          }), [Yu]),
          Es = (0, Uu.useCallback)((uu => {
            Rj.current(), uu.codeBlock ? Ou.h.TY("EditCodeBlock", {
              pos: [...uu.pos],
              canChangePos: uu.canChangePos
            }) : Ou.h.TY("EditLobbyCode", Yu)
          }), [Yu]);
        (0, Ju.f)("WorldCodeAiDraft", (uu => {
          bu && (sE(uu), EE(!0))
        }));
        const ss = !!DE && !!pE && NZ.i.includes(pE),
          Us = !!DE && !!dE && NZ.d.includes(dE);
        (0, Uu.useEffect)((() => {
          su && uE && hE && !ss && iu(!1)
        }), [su, uE, hE, ss]);
        const Zs = (0, Uu.useCallback)((() => {
            EE(!1), iu(!1)
          }), [EE]),
          {
            zb: Xs,
            setWorld: ls,
            toggleWorld: qs
          } = function(uu) {
            let {
              showAi: Eu,
              showDocs: ju,
              showChat: su,
              hideOtherRightPanels: Zu
            } = uu;
            const [Xu, lu] = (0, Uu.useState)("hidden"), qu = (0, Uu.useRef)(null), fu = (0, Uu.useCallback)((() => {
              qu.current = null, lu((uu => "hidden" === uu ? uu : (0, eZ.e)() ? "hidden" : "shown"))
            }), []);
            (0, Uu.useEffect)((() => {
              (Eu || ju) && fu()
            }), [Eu, ju, fu]), (0, Uu.useEffect)((() => {
              su && fu()
            }), [su, fu]);
            const Cu = "hidden" !== Xu && (0, eZ.e)();
            (0, Uu.useLayoutEffect)((() => {
              if (Cu) {
                const uu = document.activeElement;
                uu instanceof HTMLElement && uu.closest(".cm-content") && (qu.current = uu, uu.blur())
              } else {
                var uu;
                null === (uu = qu.current) || void 0 === uu || uu.focus(), qu.current = null
              }
            }), [Cu]);
            const bu = (0, Uu.useCallback)((() => {
              "hidden" === Xu ? (lu("shown"), (0, eZ.e)() && Zu()) : lu("hidden")
            }), [Xu, Zu]);
            return {
              zb: Xu,
              setWorld: lu,
              toggleWorld: bu
            }
          }({
            showAi: uE,
            showDocs: Qu,
            showChat: Wu,
            hideOtherRightPanels: Zs
          }),
          fs = uE && null !== OE && hE,
          Cs = (0, Uu.useCallback)((() => {
            sE(null)
          }), []),
          [bs, cs] = (0, Uu.useState)(null);
        (0, Ju.f)("WorldCodeAiSelection", (uu => {
          su && (cs(uu), EE(!0), iu(!1))
        }));
        const Ns = (0, Uu.useCallback)((() => {
          cs(null)
        }), []);
        (0, Ju.f)("chat", (uu => {
          let {
            content: Eu
          } = uu;
          if (!bu && null === NE.current) return;
          const ju = Array.isArray(Eu) ? Eu : [Eu],
            su = ju.some((uu => {
              var Eu;
              return (null === uu || void 0 === uu || null === (Eu = uu.style) || void 0 === Eu ? void 0 : Eu.color) === du.G.redUiText
            })),
            Uu = ju.map((uu => {
              var Eu;
              const ju = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.str) && void 0 !== Eu ? Eu : uu;
              return "string" === typeof ju ? ju : ""
            })).join("");
          su && /world code|error/i.test(Uu) && (ZE((uu => [...uu, Uu].slice(-10))), lE((uu => uu + 1)), (0, xZ.h)(Uu))
        })), (0, Uu.useEffect)((() => {
          if (!su || !bu || !Nj) return;
          let uu = !1;
          return (async (Eu, ju) => {
            const su = await (null === (Eu = Yj.current) || void 0 === Eu ? void 0 : Eu.tryRestoreHandle());
            !uu && su && (cj(!0), null === (ju = Yj.current) || void 0 === ju || ju.startWhenReady())
          })(), () => {
            uu = !0
          }
        }), [su, bu, Nj]), (0, Uu.useEffect)((() => {
          var uu;
          su || (null === (uu = Yj.current) || void 0 === uu || uu.stopContinuousSync(), ej(!1), PE.current && (PE.current = !1, fu.gameBridge.send("sendChatMessage", {
            VC: "//export",
            channelName: null
          })))
        }), [su, ej]);
        const Os = (0, Uu.useCallback)((async () => {
            if (Nj && Yj.current) try {
              if (!await Yj.current.linkFolder()) return;
              cj(!0), await Yj.current.startWhenReady()
            } catch (uu) {
              console.error("[WorldCodeDirectorySync] Link failed", uu), gj({
                message: Wj("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Nj, Wj]),
          Ys = (0, Uu.useCallback)((async () => {
            Yj.current && await Yj.current.unlinkFolder()
          }), []),
          hs = (0, Uu.useCallback)((() => {
            Nj ? bj ? Ys() : Os() : Rs.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Nj, bj, Os, Ys]),
          Ds = bu && "hidden" !== Xs;
        return (0, Cu.jsxs)(Xu.c, {
          className: Mj()("CodeEditorBg", {
            CodeEditorLight: mu,
            WorldShown: "hidden" !== Xs,
            WorldTouchControl: "touchControls" === zu
          }),
          close: kj,
          escDoesExit: !0,
          show: su,
          togglePointerLock: !1,
          globallyUniqueKey: bu ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Cu.jsx)(cZ.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Wj("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!DE && !bu
          }), (0, Cu.jsx)(cZ.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Cu.jsxs)(Cu.Fragment, {
              children: [(0, Cu.jsx)("p", {
                children: Wj("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Cu.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Cu.jsx)("li", {
                  children: Wj("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Cu.jsx)("li", {
                  children: Wj("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Cu.jsx)("li", {
                  children: Wj("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!DE && bu
          }), (0, Cu.jsx)("div", {
            className: "CodeEditorTitle",
            children: bu ? "World Code" : "Code Block"
          }), (0, Cu.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Cu.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Cu.jsx)(Tu.e, {
                tooltipInner: Wj(gE ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: gE ? void 0 : 0,
                hideTooltip: "exportButton" === ME,
                children: (0, Cu.jsx)(cZ.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Wj("codeEditor:tutorialExport"),
                  enabled: !!DE,
                  children: (0, Cu.jsx)(Nu.p, {
                    className: "CodeEditorButton",
                    disabled: !gE,
                    onClick: () => {
                      "exportButton" === ME && ((0, NZ.f)("exportButton"), aE.current = !0), PE.current = !0, kj()
                    },
                    padDestructive: !0,
                    children: Wj("codeEditor:exportWorld")
                  })
                })
              }), (0, Cu.jsx)(BZ, {
                zb: Xs,
                setWorld: ls,
                toggleWorld: qs,
                aiShown: fs,
                closeAi: zj
              })]
            }), (0, Cu.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [DE && (0, Cu.jsx)(Tu.e, {
                tooltipInner: Wj("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === ME,
                children: (0, Cu.jsx)(cZ.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Wj("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Cu.jsx)(Nu.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Wj("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, NZ.f)("helpButton"), Rs.NotificationProvider.showCustomPopup({
                        body: uu => (0, Cu.jsx)(OZ, {
                          close: uu
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Cu.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Cu.jsx)(hu.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Cu.jsx)(Tu.e, {
                tooltipInner: Wj("codeEditor:closeTooltip"),
                children: (0, Cu.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    kj()
                  },
                  children: (0, Cu.jsx)(Nu.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Cu.jsx)(kU, {
            peers: null !== (Eu = null === WE || void 0 === WE ? void 0 : WE.peers) && void 0 !== Eu ? Eu : []
          }), (0, Cu.jsxs)("div", {
            className: Mj()("CodeEditorMainArea", {
              WorldCovers: "always" === GZ(Xs),
              WorldCoversWhenNarrow: "narrow" === GZ(Xs)
            }),
            children: [Wu && tu && (0, Cu.jsx)(eZ.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                Fu(!1)
              },
              children: (0, Cu.jsx)(MZ, {
                inputRef: Bu
              })
            }), bu && (0, Cu.jsx)(iU, {
              schematics: tE.assets,
              onManageSchematic: uu => {
                DE && Rs.NotificationProvider.showCustomPopup({
                  body: Eu => (0, Cu.jsx)(UZ, {
                    initialPath: uu,
                    onChanged: HE,
                    onClose: Eu
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: IE,
              activePath: AE,
              canEdit: !!DE,
              directoryLinked: bj,
              pluginNames: null !== Lj && void 0 !== Lj ? Lj : EX,
              activePluginName: yE,
              activePluginFile: RE,
              onSelect: dj,
              onSelectPlugin: aj,
              onToggleDirectorySync: hs,
              onCreate: uu => {
                fj.current = uu, fu.gameBridge.send("sendCodeCollab", {
                  lZ: dU.d.CreateFile,
                  qZ: (0, dU.r)({
                    kind: "lobby",
                    path: sj.current
                  }),
                  vC: uu
                })
              },
              onRename: (uu, Eu) => {
                sj.current === uu && (Cj.current = {
                  fromPath: uu,
                  toPath: Eu
                }, nE(Eu)), fu.gameBridge.send("sendCodeCollab", {
                  lZ: dU.d.RenameFile,
                  qZ: (0, dU.r)({
                    kind: "lobby",
                    path: sj.current
                  }),
                  vC: uu,
                  KC: Eu
                })
              },
              onRenameFolder: (uu, Eu) => {
                const [ju] = (0, aU.p)([sj.current], uu, Eu);
                ju && (Cj.current = {
                  fromPath: ju[0],
                  toPath: ju[1]
                }, nE(ju[1])), fu.gameBridge.send("sendCodeCollab", {
                  lZ: dU.d.RenameFolder,
                  qZ: (0, dU.r)({
                    kind: "lobby",
                    path: sj.current
                  }),
                  vC: uu,
                  KC: Eu
                })
              },
              onDelete: Jj
            }), (0, Cu.jsx)("div", {
              className: Mj()("CodeEditorMessage", {
                CodeEditorMessageHidden: !wu.message,
                CodeEditorMessageSuccess: "success" === wu.type
              }),
              children: wu.message && (0, Cu.jsx)("div", {
                className: "CodeEditorMessageText",
                children: wu.message
              })
            }), (0, Cu.jsx)(Uu.Suspense, {
              fallback: (0, Cu.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Cu.jsx)(Pu.b, {})
              }),
              children: (0, Cu.jsx)(HZ, {
                isLobbyCode: bu,
                code: WE ? WE.doc : cu.current,
                files: bu ? IE : void 0,
                activePath: bu ? AE : void 0,
                pluginName: yE,
                pluginFile: RE,
                pluginSource: yE && RE ? null === (ju = vU.h[yE]) || void 0 === ju ? void 0 : ju.files[RE] : void 0,
                onChange: Vj,
                canEditCode: DE,
                setTemporaryMessage: gj,
                close: kj,
                showTooltips: ou,
                lightMode: mu,
                collabState: WE,
                setActiveDocReplacer: Bj,
                showAiHints: hE && Vu,
                canAiChangeCode: !!DE && (bu || !!gu.current),
                onRemoteDocChange: uu => {
                  var Eu;
                  (cu.current = uu, bu) ? (BE((Eu => ({
                    ...Eu,
                    [sj.current]: uu
                  }))), null === (Eu = Yj.current) || void 0 === Eu || Eu.onDocTextChanged(sj.current, uu)) : bE(uu)
                }
              })
            }), (Qu || fs || "hidden" !== Xs) && (0, Cu.jsxs)(pZ, {
              zb: Xs,
              worldPanel: (0, Cu.jsx)(IZ, {
                shown: Xs,
                setShown: ls,
                canInsertCode: !!DE && !yE
              }),
              closeWorld: () => {
                ls("hidden")
              },
              aiShown: fs,
              defaultWidth: Qu ? "40%" : "max(18rem, 36%)",
              children: [Qu && (0, Cu.jsx)(eZ.c, {
                onClose: ss ? void 0 : Qj,
                children: (0, Cu.jsx)(Uu.Suspense, {
                  fallback: (0, Cu.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Cu.jsx)(Pu.b, {})
                  }),
                  children: (0, Cu.jsx)(AZ, {
                    popOutDocs: rj,
                    hideDocs: Qj,
                    tutorialEnabled: !!DE
                  })
                })
              }), fs && (0, Cu.jsx)(eZ.c, {
                onClose: Us ? void 0 : zj,
                children: (0, Cu.jsx)(Uu.Suspense, {
                  fallback: (0, Cu.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Cu.jsx)(Pu.b, {})
                  }),
                  children: (0, Cu.jsx)(nZ, {
                    target: OE,
                    chatKey: `${QE.gameNameWithVariation}/${QE.lobbyName}/aiHelper`,
                    historyKey: `${QE.gameNameWithVariation}/${QE.lobbyName}/${OE.key}`,
                    files: OE.codeBlock ? Hj : IE,
                    activePath: OE.codeBlock ? tZ.b : AE,
                    canEdit: !!DE && (OE.codeBlock ? !!gu.current : !yE),
                    isLoaded: null !== WE,
                    errors: UE,
                    errorCount: XE,
                    applyFiles: OE.codeBlock ? xj : tj,
                    submit: nj,
                    testRun: yj,
                    close: zj,
                    goToLine: OE.codeBlock ? Aj : Fj,
                    openWorldCode: OE.codeBlock ? us : void 0,
                    readWorldCode: OE.codeBlock ? Tj : void 0,
                    viewChunk: yZ,
                    viewGameState: zZ,
                    openTarget: DE ? Es : void 0,
                    draft: jE,
                    onDraftUsed: Cs,
                    selection: bs,
                    onSelectionUsed: Ns
                  }, OE.key)
                })
              })]
            })]
          }), (null === Zj || void 0 === Zj ? void 0 : Zj.fallback) && (0, Cu.jsx)(XZ, {
            fallback: Zj.fallback,
            onGoToLine: Fj
          }), (0, Cu.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj(mu ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Wj(mu ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  Ku(!mu)
                },
                children: (0, Cu.jsx)(hu.e, {
                  name: mu ? "moon" : "sun-bright"
                })
              })
            }), (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj(Ds ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.p, {
                className: "CodeEditorButton",
                onClick: () => {
                  mj(Ds)
                },
                padDefaultFocus: !0,
                children: Wj("codeEditor:submitCode")
              })
            }), (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj(Qu ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === pE || "hideDocsButton" === pE,
              children: (0, Cu.jsx)(cZ.h, {
                tutorial: GE,
                step: Qu ? "hideDocsButton" : "docsButton",
                text: Wj(Qu ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!DE,
                placement: "top",
                waitForClick: !0,
                onPrevious: Qu && "welcome" === GE ? Qj : void 0,
                children: (0, Cu.jsx)(Nu.C, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, NZ.f)(Qu ? "hideDocsButton" : "docsButton"), iu(!Qu), EE(!1)
                  },
                  children: Wj(Qu ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), hE && (0, Cu.jsx)(cZ.h, {
              tutorial: JE,
              step: uE ? "hideAiHelperButton" : "aiHelperButton",
              text: Wj(uE ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === JE ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!DE,
              placement: "top",
              waitForClick: !0,
              onPrevious: uE && "welcome" === JE ? ij : void 0,
              children: (0, Cu.jsx)(Ij, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, NZ.f)(uE ? "hideAiHelperButton" : "aiHelperButton"), EE(!uE), iu(!1)
                },
                children: uE ? "Hide AI Helper" : Sj ? "Fix error with AI" : "AI Helper"
              })
            }), tu && (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj(Wu ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.C, {
                className: "CodeEditorButton",
                onClick: () => {
                  Lu.current = !Wu, Fu(!Wu)
                },
                children: Wj(Wu ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj("hidden" === Xs ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.C, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: qs,
                children: Wj("hidden" === Xs ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  Ou.h.TY("FormatCode")
                },
                children: Wj("codeEditor:formatCode")
              })
            }), (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(cu.current).then((() => {
                    gj({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    gj({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Wj("codeEditor:copyCode")
              })
            }), (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj(ou ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  ku(!ou)
                },
                children: Wj(ou ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !bu && (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === ME,
              children: (0, Cu.jsx)(cZ.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Wj("codeEditor:tutorialWorldCodeButton"),
                enabled: !!DE,
                placement: "top",
                waitForClick: !0,
                children: (0, Cu.jsx)(Nu.C, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === ME && ((0, NZ.f)("worldCodeButton"), aE.current = !0), kj(), Ou.h.TY("EditLobbyCode", Yu)
                  },
                  children: Wj("codeEditor:worldCode")
                })
              })
            }), (iE || Xj || hE) && (0, Cu.jsx)(Tu.e, {
              tooltipInner: Wj("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Cu.jsx)(Nu.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  KE(!0)
                },
                children: (0, Cu.jsx)(hu.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), vE && (0, Cu.jsx)(EU.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              KE(!1)
            },
            body: (0, Cu.jsx)(bZ, {
              engine: Xj,
              onSetEngine: Kj,
              aiHints: hE ? {
                shown: Vu,
                setShown: ru
              } : null,
              variation: iE ? {
                name: kE,
                setName: mE,
                reload: vj
              } : null
            })
          })]
        })
      })),
      UX = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function ZX(uu) {
      return "inventory" === uu
    }
    const XX = (0, Uu.memo)((function() {
      const {
        openEverythingMenuName: uu,
        openInGameMenuName: Eu
      } = (0, Su.l)(["openEverythingMenuName", "openInGameMenuName"]), ju = (0, au.f)("fullInventory"), Zu = (0, Uu.useRef)(null), Xu = (0, kE.n)();
      (0, Ju.f)("toggleMenu", (uu => {
        var Eu;
        if (!Xu.shown) return;
        const ju = Su.d.get("openInGameMenuName");
        let su = uu.split("|")[0];
        const Uu = null !== (Eu = uu.split("|")[1]) && void 0 !== Eu ? Eu : null;
        ("closeCurrentMenu" === Uu && ju || su === ju) && (Zu.current = null, su = null);
        const lu = "closeCurrentMenu" === Uu ? null : Uu;
        Zu.current !== lu && (Zu.current = lu), null !== su && (0, bU.t)(bU.b, {
          keepsMovement: ZX(su)
        }), Su.d.set({
          openInGameMenuName: su
        })
      }));
      const lu = (0, Uu.useCallback)((uu => () => {
          Ou.h.TY("toggleMenu", uu)
        }), []),
        qu = (0, Uu.useRef)({
          cantCrouchIfNotFullscreen: lu("cantCrouchIfNotFullscreen"),
          makeReport: lu("makeReport"),
          makeDiscordReport: lu("makeDiscordReport"),
          editBook: lu("editBook"),
          editNameTag: lu("editNameTag"),
          inventory: lu("inventory"),
          inviteLink: lu("inviteLink"),
          writeOnBoard: lu("writeOnBoard"),
          codeEditor: lu("codeEditor"),
          lobbyCodeEditor: lu("lobbyCodeEditor"),
          customLobbyBlockEditor: lu("customLobbyBlockEditor"),
          ironChestPasskeyInput: lu("ironChestPasskeyInput"),
          petUi: lu("petUi")
        }),
        fu = (0, Uu.useCallback)((() => {
          Su.d.set({
            openInGameMenuName: null
          })
        }), []),
        bu = (0, Uu.useRef)(null);
      return (0, Uu.useEffect)((() => {
        if (Eu) {
          var uu;
          (0, bU.t)(bU.b, {
            keepsMovement: ZX(Eu)
          }), bu.current = UX.has(Eu) ? null !== (uu = Su.d.get("openEverythingMenuName")) && void 0 !== uu ? uu : bu.current : null, Su.d.set({
            openEverythingMenuName: null
          })
        } else {
          const uu = bu.current;
          bu.current = null, null !== uu && null === Su.d.get("openEverythingMenuName") && Su.d.set({
            openEverythingMenuName: uu
          }), Zu.current = null, (0, bU.q)(bU.b)
        }
      }), [Eu]), (0, Uu.useEffect)((() => {
        null !== uu && fu()
      }), [uu, fu]), (0, Cu.jsxs)(Cu.Fragment, {
        children: [(0, Cu.jsx)(su.k, {
          show: "clientGame" === Eu
        }), (0, Cu.jsx)(ns, {
          show: "cantCrouchIfNotFullscreen" === Eu,
          onOpen: qu.current.cantCrouchIfNotFullscreen,
          onClose: fu
        }), (0, Cu.jsx)(XU, {
          show: "makeReport" === Eu,
          onOpen: qu.current.makeReport,
          onClose: fu
        }), (0, Cu.jsx)(CU, {
          show: "makeDiscordReport" === Eu,
          onOpen: qu.current.makeDiscordReport,
          onClose: fu
        }), (0, Cu.jsx)(Ej, {
          show: "editBook" === Eu,
          onOpen: qu.current.editBook,
          onClose: fu
        }), (0, Cu.jsx)(RE, {
          show: "editNameTag" === Eu,
          onOpen: qu.current.editNameTag,
          onClose: fu
        }), ju && (0, Cu.jsx)(Ts, {
          show: "inventory" === Eu,
          onOpen: qu.current.inventory,
          onClose: fu,
          variation: Zu.current
        }), (0, Cu.jsx)(mE, {
          show: "inviteLink" === Eu,
          onClose: fu,
          option: Zu.current
        }), (0, Cu.jsx)(ru, {
          show: "retentionFeatures" === Eu,
          onClose: fu
        }), (0, Cu.jsx)(zE, {
          show: "writeOnBoard" === Eu,
          onOpen: qu.current.writeOnBoard,
          onClose: fu
        }), (0, Cu.jsx)(sX, {
          show: "lobbyCodeEditor" === Eu,
          onOpen: qu.current.lobbyCodeEditor,
          onClose: fu,
          isLobbyCode: !0
        }), (0, Cu.jsx)(sX, {
          show: "codeEditor" === Eu,
          onOpen: qu.current.codeEditor,
          onClose: fu,
          isLobbyCode: !1
        }), (0, Cu.jsx)(NU, {
          show: "customLobbyBlockEditor" === Eu,
          onOpen: qu.current.customLobbyBlockEditor,
          onClose: fu
        }), (0, Cu.jsx)(Gj, {
          show: "ironChestPasskeyInput" === Eu,
          onOpen: qu.current.ironChestPasskeyInput,
          onClose: fu
        }), (0, Cu.jsx)(MU, {
          togglePointerLock: !0,
          show: "petUi" === Eu,
          onOpen: qu.current.petUi,
          onClose: fu
        })]
      })
    }))
  },
  36882: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => VX
    });
    ju(36890);
    var su = ju(1856),
      Uu = ju(58),
      Zu = ju(1105),
      Xu = ju.n(Zu),
      lu = ju(3930),
      qu = ju(1499),
      fu = ju(1964),
      Cu = ju(1154);

    function bu() {
      const uu = 2e3,
        [Eu, ju] = (0, Uu.useState)(null),
        [su, Zu] = (0, Uu.useState)(null),
        bu = (0, Uu.useRef)(null);
      (0, qu.f)("showBottomMessage", (Eu => {
        let {
          message: ju,
          timeoutLength: su = uu,
          type: Uu
        } = Eu;
        Zu({
          message: ju,
          type: Uu
        }), clearTimeout(bu.current), bu.current = setTimeout((() => {
          Zu(null)
        }), su)
      })), (0, qu.f)("showPermanentBottomMessage", (uu => {
        ju(uu)
      })), (0, Uu.useEffect)((() => ((0, lu.e)((() => {
        ju(null)
      })), () => {
        clearTimeout(bu.current)
      })), []);
      const cu = su || Eu;
      return cu ? (0, Cu.jsx)("div", {
        className: Xu()("BottomScreenMessage", cu.type),
        children: (0, Cu.jsx)(fu.d, {
          text: cu.message
        })
      }) : null
    }
    var cu = ju(2471),
      Nu = ju(1986),
      Ou = ju(1570),
      Yu = ju(2545);

    function hu() {
      let uu;
      const Eu = () => {
          clearTimeout(uu), uu = setTimeout((() => {
            Nu.gameBridge.latest("connectedGame").replay || (Nu.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Ou.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        ju = () => {
          clearTimeout(uu)
        };
      return window.addEventListener("focus", ju), window.addEventListener("blur", Eu), () => {
        window.removeEventListener("blur", Eu), window.removeEventListener("focus", ju), clearTimeout(uu)
      }
    }
    var Du = ju(1178),
      gu = ju(3285),
      Mu = ju(337),
      eu = ju(2543),
      Gu = ju(24),
      pu = ju(2011),
      wu = ju(31),
      Ju = ju(2027),
      du = ju(22),
      au = ju(2031),
      Pu = ju(1443),
      ou = ju(9032),
      ku = ju(2058),
      mu = ju(1244);
    const vu = (0, Uu.memo)((function() {
      const {
        isTouchScreen: uu,
        loadingOverlayVisible: Eu,
        openInGameMenuName: ju,
        openEverythingMenuName: su
      } = (0, du.l)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Zu = (0, Pu.t)();
      (0, gu.d)();
      const lu = (0, eu.h)("showBasicMovementControls"),
        [qu, fu] = (0, Uu.useState)("movement"),
        bu = "movement" === qu,
        cu = Zu && !1 !== lu;
      (0, Uu.useEffect)((() => {
        "padActions" !== qu || cu || fu("done")
      }), [qu, cu]);
      const Nu = Eu || null !== ju || null !== su,
        Ou = (0, Uu.useRef)({
          step: qu,
          ms: 0
        });
      return (0, Uu.useEffect)((() => {
        if (Nu || "done" === qu) return;
        Ou.current.step !== qu && (Ou.current = {
          step: qu,
          ms: 0
        });
        const uu = Ou.current,
          Eu = performance.now(),
          ju = setTimeout((() => {
            fu("movement" === qu && (0, Pu.g)() ? "padActions" : "done")
          }), 7e3 - uu.ms);
        return () => {
          clearTimeout(ju), uu.ms += performance.now() - Eu
        }
      }), [Nu, qu]), wu.k.getItem(Mu.Jb) > 2 ? (0, Cu.jsx)(Qu, {
        showingMovementControls: !1
      }) : (0, Cu.jsxs)(Cu.Fragment, {
        children: [uu && !Zu || !bu || !1 === lu ? null : (0, Cu.jsxs)("div", {
          className: Xu()("ControlsTutorialDiv", {
            Covered: Nu
          }),
          children: [(0, Cu.jsx)(Ku, {}), (0, Cu.jsx)(ru, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Cu.jsx)(ru, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === qu && cu && (0, Cu.jsx)(Vu, {
          covered: Nu
        }), (0, Cu.jsx)(Qu, {
          showingMovementControls: "done" !== qu
        })]
      })
    }));

    function Ku() {
      const uu = (0, Pu.t)();
      return (0, Cu.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Cu.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), uu && (0, Cu.jsx)(au.b, {
          noaAction: "forward"
        }), !uu && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Cu.jsx)(au.b, {
              noaAction: "forward"
            })
          }), (0, Cu.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Cu.jsx)(au.b, {
              noaAction: "left"
            }), (0, Cu.jsx)(au.b, {
              noaAction: "backward"
            }), (0, Cu.jsx)(au.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Vu(uu) {
      let {
        covered: Eu
      } = uu;
      const {
        t: ju
      } = (0, mu.A)(), su = (0, eu.h)("useInventory");
      return (0, Cu.jsxs)("div", {
        className: Xu()("ControlsTutorialDiv", {
          Covered: Eu
        }),
        children: [(0, Cu.jsx)(ru, {
          header: ju("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Cu.jsx)(ru, {
          header: ju("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== su && (0, Cu.jsx)(ru, {
          header: ju("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Cu.jsx)(ru, {
          header: ju("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function ru(uu) {
      let {
        header: Eu,
        noaAction: ju
      } = uu;
      return (0, Cu.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Cu.jsx)("div", {
          className: "KeyHeader",
          children: Eu
        }), (0, Cu.jsx)(au.b, {
          noaAction: ju
        })]
      })
    }

    function Qu(uu) {
      let {
        showingMovementControls: Eu
      } = uu;
      const {
        isTouchScreen: ju
      } = (0, du.l)(["isTouchScreen"]), su = (0, Pu.t)(), Zu = (0, ku.b)("OpenShop"), [Xu, lu] = (0, Uu.useState)(!1), qu = `SeenShopControls|${(0,Ju.d)("connectedGame",(uu=>uu.gameNameWithVariation))}`, fu = () => (!(0, Pu.g)() || null !== (0, ou.e)("OpenShop")) && !wu.k.getItem(qu) && pu.e.get("shopInfo") && !Eu, bu = () => (lu(!0), wu.k.setItem(qu, !0), (0, Pu.g)() || Gu.h.TY("showShopTouchTutorial"), setTimeout((() => {
        lu(!1)
      }), 7e3));
      (0, Uu.useEffect)((() => {
        let uu;
        const Eu = Gu.h.subscribe("showShopTutorial", (() => {
          fu() && (uu = bu())
        }));
        return () => {
          clearTimeout(uu), Gu.h.unsubscribe(Eu)
        }
      }), [Eu]);
      const cu = (0, Uu.useRef)();
      return (0, eu.e)("currencyAmounts", (uu => {
        if (fu()) {
          let ju = !1;
          const su = pu.e.get("shopInfo");
          for (const Uu in su) {
            for (const Zu in su[Uu].items) {
              var Eu;
              const Xu = su[Uu].items[Zu];
              if (void 0 !== Xu.currency && uu[Xu.currency] && Xu.cost <= uu[Xu.currency].amount && (null === (Eu = Xu.hidden) || void 0 === Eu || !Eu)) {
                ju = !0;
                break
              }
            }
            if (ju) break
          }
          ju && (cu.current = bu())
        }
      })), (0, Uu.useEffect)((() => () => {
        clearTimeout(cu.current)
      }), [Eu]), !Xu || su && !Zu ? null : (0, Cu.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: ju && !su ? null : (0, Cu.jsx)(ru, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var iu = ju(1419),
      Wu = ju(1116);
    const Su = (0, Uu.memo)((function() {
      return (0, gu.d)(), (0, Cu.jsx)(Iu, {})
    }));
    class Iu extends Uu.Component {
      constructor(uu) {
        super(uu), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = Gu.h.subscribe("TopRightHelper", (uu => {
          this.showQueue.push(uu), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        Gu.h.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(uu, Eu) {
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
        let uu, Eu, ju, su, Uu, Zu = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, uu = "slideIn") : "slideOut" === this.state.currState ? uu = "slideOut" : null === this.currMessage && (Zu = !1), this.currMessage) {
          const Zu = this.currMessage.color || "rgb(102, 102, 102)";
          Eu = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === uu ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, ju = {
            backgroundColor: Zu
          }, su = {
            animation: "2s " + ("slideOut" === uu ? "CloseNotification" : "ExpandNotification")
          }, Uu = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === uu ? "textDisappear" : "textAppear")
          }
        }
        return Zu ? (0, Cu.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...Eu
          },
          children: [(0, Cu.jsx)("div", {
            className: "LeftSide",
            style: ju,
            children: (0, Cu.jsx)(Wu.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Cu.jsx)("div", {
            className: "RightSide",
            style: su,
            children: (0, Cu.jsx)("div", {
              className: "HelperText",
              style: Uu,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Fu = ju(36896),
      Bu = ju(1461);
    const Lu = (0, Bu.i)((uu => uu.PadSneakChip));

    function tu(uu) {
      const [Eu, ju, su] = function(uu) {
        const Eu = parseInt(uu.substring(1), 16),
          ju = (Eu >> 16) / 255,
          su = (Eu >> 8 & 255) / 255,
          Uu = (255 & Eu) / 255,
          Zu = Math.max(ju, su, Uu),
          Xu = Math.min(ju, su, Uu),
          lu = (Zu + Xu) / 2,
          qu = Zu - Xu;
        if (0 === qu) return [0, 0, lu];
        const fu = qu / (1 - Math.abs(2 * lu - 1));
        let Cu;
        Cu = Zu === ju ? (su - Uu) / qu % 6 : Zu === su ? (Uu - ju) / qu + 2 : (ju - su) / qu + 4;
        return [(60 * Cu + 360) % 360, fu, lu]
      }(uu), Uu = 0 === ju ? 0 : Math.min(.6, ju + .03), Zu = su > .5 ? -1 : 1, Xu = xu(su + .09 * Zu);
      return {
        panel: uu,
        slot: Tu(Eu, Uu, Xu),
        slotSelected: Tu(Eu, Uu, xu(Xu + .2 * Zu)),
        slotUnavailable: Tu(Eu, Uu, xu(su + -.1 * Zu))
      }
    }

    function xu(uu) {
      return Math.min(1, Math.max(0, uu))
    }

    function Tu(uu, Eu, ju) {
      const su = (1 - Math.abs(2 * ju - 1)) * Eu,
        Uu = su * (1 - Math.abs(uu / 60 % 2 - 1)),
        Zu = ju - su / 2;
      let Xu;
      return Xu = uu < 60 ? [su, Uu, 0] : uu < 120 ? [Uu, su, 0] : uu < 180 ? [0, su, Uu] : uu < 240 ? [0, Uu, su] : uu < 300 ? [Uu, 0, su] : [su, 0, Uu], "#" + Xu.map((uu => function(uu) {
        return Math.round(255 * uu).toString(16).padStart(2, "0")
      }(uu + Zu))).join("")
    }
    var Hu = ju(36919),
      Au = ju(4452),
      nu = ju(2516),
      yu = ju(2519),
      zu = ju(36981),
      Ru = ju(4986),
      uE = ju(1520),
      EE = ju(649);

    function jE(uu, Eu, ju, su) {
      uu.style.display = "";
      const Uu = uu.offsetWidth,
        Zu = uu.offsetHeight,
        Xu = Math.min(Math.max((Eu.left + Eu.right) / 2 - Uu / 2, 8), window.innerWidth - 8 - Uu);
      let lu = Eu.top - ju - Zu;
      const qu = [...su].sort(((uu, Eu) => Eu.top - uu.top));
      for (const fu of qu) Xu < fu.right && Xu + Uu > fu.left && lu < fu.bottom && lu + Zu > fu.top && (lu = fu.top - 8 - Zu);
      return lu < 8 ? (uu.style.display = "none", null) : (uu.style.transform = `translate(${Xu-Eu.left}px, ${lu-Eu.top}px)`, {
        left: Xu,
        top: lu,
        right: Xu + Uu,
        bottom: lu + Zu
      })
    }

    function sE(uu) {
      const Eu = [];
      for (const ju of document.querySelectorAll(uu)) {
        const uu = ju.getBoundingClientRect();
        uu.width > 0 && "visible" === getComputedStyle(ju).visibility && Eu.push(uu)
      }
      return Eu
    }

    function UE(uu, Eu) {
      return uu.clientX >= Eu.left - 8 && uu.clientX <= Eu.right + 8 && uu.clientY >= Eu.top - 8 && uu.clientY <= Eu.bottom + 8
    }
    var ZE = ju(9091);
    class XE {
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
      hold(uu, Eu) {
        this.suspended || (this.offered ? Eu || this.setPhase("idle") : uu && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : uu || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(uu) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const Eu = this.phase;
        this.phase = uu, this.deps.onPhase(uu, Eu)
      }
    }
    const lE = 25 * Math.PI / 180,
      qE = 45 * Math.PI / 180;
    class fE extends XE {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(uu, Eu, ju) {
        this.speed = ju;
        const su = Math.hypot(uu, Eu),
          Uu = su > 0 ? Math.acos(Math.min(1, -Eu / su)) : Math.PI;
        this.hold(su >= .8 && Uu <= lE, su >= .5 && Uu <= qE)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var CE = ju(1343);

    function bE(uu, Eu) {
      const ju = (0, Uu.useRef)(null),
        su = (0, Uu.useRef)(Eu);
      return su.current = Eu, (0, Uu.useEffect)((() => {
        if (!uu) return;
        const {
          create: Eu,
          elementRef: Uu,
          ringRef: Zu,
          classPrefix: Xu,
          keptBehindMovementPanels: lu,
          resizeEnds: qu
        } = su.current, fu = {
          charging: `${Xu}Charging`,
          armed: `${Xu}Armed`,
          ready: `${Xu}Ready`,
          locked: `${Xu}Locked`
        };
        let Cu = null;
        const bu = Eu({
          onPhase: (uu, Eu) => {
            const ju = Uu.current;
            if (null !== ju) {
              for (const [Eu, su] of Object.entries(fu)) ju.classList.toggle(su, Eu === uu);
              if ("charging" === uu) Cu = Zu.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === uu) {
                var Xu;
                null === (Xu = Cu) || void 0 === Xu || Xu.cancel(), Cu = null
              }
              var lu, qu;
              if ("armed" === uu && "charging" === Eu && su.current.onArmed(), "ready" === uu && ZE.e.play("lockReady"), "locked" === uu) ZE.e.play("lockLocked"), null === (lu = (qu = su.current).onLocked) || void 0 === lu || lu.call(qu);
              "locked" === Eu && su.current.onUnlocked()
            }
          }
        });
        ju.current = bu;
        const cu = () => {
            bu.suspend()
          },
          Nu = () => {
            "hidden" === document.visibilityState && cu()
          },
          Ou = () => {
            qu ? bu.suspend() : bu.suspendArming()
          },
          Yu = (0, CE.n)((uu => {
            let {
              keepsMovement: Eu
            } = uu;
            Eu && lu ? bu.suspendArming() : cu()
          }));
        return document.addEventListener("visibilitychange", Nu), window.addEventListener("blur", cu), window.addEventListener("resize", Ou), () => {
          Yu(), document.removeEventListener("visibilitychange", Nu), window.removeEventListener("blur", cu), window.removeEventListener("resize", Ou), bu.cancel(), ju.current = null
        }
      }), [uu]), (0, Ju.b)("localPlayerAliveSet", (() => {
        var uu;
        null === (uu = ju.current) || void 0 === uu || uu.suspend()
      })), ju
    }
    const cE = "data-joystick-tap";

    function NE(uu) {
      var Eu, ju;
      const su = null === (Eu = (ju = uu).closest) || void 0 === Eu ? void 0 : Eu.call(ju, `[${cE}]`);
      return su instanceof HTMLElement ? su : null
    }
    class OE {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var uu, Eu;
        return null !== (uu = null === (Eu = this.tap) || void 0 === Eu ? void 0 : Eu.id) && void 0 !== uu ? uu : null
      }
      land(uu, Eu) {
        null === this.tap && (this.tap = {
          key: uu,
          id: Eu.identifier,
          x: Eu.clientX,
          y: Eu.clientY
        }, (0, uE.g)(uu, !0))
      }
      slidFrom(uu) {
        const Eu = this.tap,
          ju = Eu ? uu.find((uu => uu.identifier === Eu.id)) : void 0;
        return !ju || Math.hypot(ju.clientX - Eu.x, ju.clientY - Eu.y) <= 12 ? null : (this.end(!1), {
          identifier: Eu.id,
          clientX: Eu.x,
          clientY: Eu.y
        })
      }
      end(uu) {
        const Eu = this.tap;
        Eu && (this.tap = null, (0, uE.g)(Eu.key, !1), uu && Eu.key.click())
      }
    }
    var YE = ju(2581),
      hE = ju(2600),
      DE = ju(1170),
      gE = ju(3601),
      ME = ju(2610);

    function eE(uu, Eu, ju) {
      const su = function(uu, Eu, ju) {
        const su = ju.map((ju => ({
            left: Math.max(0, ju.left),
            top: Math.max(0, ju.top),
            right: Math.min(uu, ju.right),
            bottom: Math.min(Eu, ju.bottom)
          }))).filter((uu => uu.right > uu.left && uu.bottom > uu.top)),
          Uu = [...new Set([0, Eu, ...su.flatMap((uu => [uu.top, uu.bottom]))])].sort(((uu, Eu) => uu - Eu)),
          Zu = [];
        for (let Xu = 0; Xu < Uu.length - 1; Xu++) {
          const Eu = Uu[Xu],
            ju = Uu[Xu + 1],
            lu = su.filter((uu => uu.top <= Eu && uu.bottom >= ju)).map((uu => [uu.left, uu.right])).sort(((uu, Eu) => uu[0] - Eu[0]));
          let qu = 0;
          for (const [uu, su] of lu) uu > qu && Zu.push({
            left: qu,
            top: Eu,
            right: uu,
            bottom: ju
          }), qu = Math.max(qu, su);
          qu < uu && Zu.push({
            left: qu,
            top: Eu,
            right: uu,
            bottom: ju
          })
        }
        return Zu
      }(uu, Eu, ju);
      if (0 === su.length) return 'path("M0 0Z")';
      if (1 === su.length && 0 === su[0].left && 0 === su[0].top && su[0].right === uu && su[0].bottom === Eu) return "";
      const Uu = uu => Math.round(10 * uu) / 10;
      return `path("${su.map((uu=>`M${Uu(uu.left)} ${Uu(uu.top)}H${Uu(uu.right)}V${Uu(uu.bottom)}H${Uu(uu.left)}Z`)).join("")}")`
    }

    function GE(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Uu = [],
        Zu = 2 * ju / su;
      for (let Xu = 0; Xu < su; Xu++) {
        const su = Eu - ju + Xu * Zu,
          lu = su + Zu,
          qu = Math.min(Math.max(Eu, su), lu) - Eu,
          fu = Math.sqrt(Math.max(0, ju * ju - qu * qu));
        Uu.push({
          left: uu - fu,
          top: su,
          right: uu + fu,
          bottom: lu
        })
      }
      return Uu
    }
    var pE = ju(9103),
      wE = ju(36958);

    function JE(uu) {
      const Eu = uu.getBoundingClientRect(),
        ju = {
          left: Eu.left,
          top: Eu.top,
          right: Eu.right,
          bottom: Eu.bottom
        },
        su = (0, zu.h)(uu);
      if (su.whole) return [ju];
      const Uu = function(uu) {
          const Eu = uu.right - uu.left,
            ju = uu.bottom - uu.top,
            su = Math.min(Eu, ju) / 2,
            Uu = (uu.left + uu.right) / 2,
            Zu = (uu.top + uu.bottom) / 2;
          return Eu >= ju ? [{
            left: uu.left + su,
            top: uu.top,
            right: uu.right - su,
            bottom: uu.bottom
          }, ...GE(uu.left + su, Zu, su), ...GE(uu.right - su, Zu, su)] : [{
            left: uu.left,
            top: uu.top + su,
            right: uu.right,
            bottom: uu.bottom - su
          }, ...GE(Uu, uu.top + su, su), ...GE(Uu, uu.bottom - su, su)]
        }(ju),
        Zu = su.keyBox;
      if (Zu) {
        const uu = (ju.left + ju.right) / 2,
          Eu = (ju.top + ju.bottom) / 2;
        Uu.push({
          left: uu - Zu.width / 2,
          top: Eu - Zu.height / 2,
          right: uu + Zu.width / 2,
          bottom: Eu + Zu.height / 2
        })
      }
      return Uu
    }

    function dE(uu) {
      const Eu = uu.getBoundingClientRect();
      return 0 === Eu.width && 0 === Eu.height || "visible" !== getComputedStyle(uu).visibility ? [] : [(0, pE.u)(Eu, 44)]
    }

    function aE(uu, Eu) {
      (0, Uu.useEffect)((() => {
        const ju = uu.current;
        if (!Eu || !ju) return;
        const su = () => {
          const uu = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            Eu = uu.find((uu => uu.classList.contains("TouchInteractHit")));
          Eu !== Uu && (Uu && Zu.unobserve(Uu), Uu = Eu, Eu && Zu.observe(Eu));
          const su = Array.from(document.querySelectorAll(ME.b)),
            Xu = [...uu.flatMap((uu => JE(uu))), ...su.flatMap(dE)],
            lu = function(uu, Eu) {
              const ju = Eu.map((Eu => ({
                left: Eu.left - uu.left,
                top: Eu.top - uu.top,
                right: Eu.right - uu.left,
                bottom: Eu.bottom - uu.top
              })));
              return eE(Math.ceil(uu.width), Math.ceil(uu.height), ju)
            }(ju.getBoundingClientRect(), Xu);
          ju.style.clipPath !== lu && (ju.style.clipPath = lu)
        };
        let Uu;
        const Zu = new ResizeObserver((() => {
          su()
        }));
        su(), Zu.observe(ju);
        const Xu = ju.closest(".InGameUi"),
          lu = new MutationObserver(su);
        Xu && lu.observe(Xu, {
          attributes: !0,
          attributeFilter: ["class", wE.f]
        });
        const qu = [(0, Gu.l)(gE.b, su), (0, Gu.l)(ME.q, su), (0, Gu.l)(ME.d, su)];
        return () => {
          Zu.disconnect(), lu.disconnect();
          for (const uu of qu) uu();
          ju.style.clipPath = ""
        }
      }), [uu, Eu])
    }
    var PE = ju(4588);

    function oE(uu) {
      var Eu;
      let {
        onMove: ju,
        mode: su,
        speedCurve: Zu,
        autorun: Xu = !1,
        keys: lu
      } = uu;
      const qu = (0, Uu.useRef)(null),
        fu = (0, Uu.useRef)(null),
        bu = (0, Uu.useRef)(null),
        cu = (0, Uu.useRef)(null),
        Ou = (0, Uu.useRef)(null),
        Yu = (0, Uu.useRef)(null),
        hu = (0, Uu.useRef)(new OE).current,
        Du = (0, Uu.useRef)(null),
        gu = (0, Uu.useRef)(null),
        Mu = (0, Uu.useRef)(null),
        eu = (0, Uu.useRef)(!1),
        Gu = (0, Uu.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: pu
        } = (0, mu.A)(),
        wu = (0, PE.k)(su),
        Ju = (0, du.l)(["notchSize"]).notchSize,
        au = Ju.left,
        Pu = (0, Uu.useRef)(16),
        ou = (0, hE.i)(),
        [ku, vu, Ku] = "pinned" === su ? YE.q : null !== (Eu = ou.hudElements.joystick) && void 0 !== Eu ? Eu : YE.q,
        Vu = "pinned" === su ? null : ou.hudSafe,
        ru = Math.max(PE.e, PE.h * Ku);
      aE(fu, "pinned" !== su);
      const Qu = function(uu, Eu, ju, su, Zu) {
        const Xu = (0, Uu.useRef)(null),
          lu = () => {
            clearInterval(Xu.current), Xu.current = null
          },
          qu = bE(uu, {
            create: uu => new fE(uu),
            elementRef: Eu,
            ringRef: ju,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Zu,
            onLocked: () => {
              Xu.current = setInterval((() => {
                Nu.gameBridge.lookup("dropAhead", null) && (ZE.e.play("autorunLedgeStop"), qu.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              lu(), su()
            }
          });
        return (0, Uu.useEffect)((() => lu), []), qu
      }(Xu, bu, Du, (() => {
        tu(), Lu()
      }), (() => {
        iu(), null === Mu.current && Qu.current.suspend()
      }));

      function iu() {
        const uu = bu.current.getBoundingClientRect();
        Mu.current = jE(gu.current, uu, 80, sE(`.TouchInventoryKey, .TouchSprintKey, ${ME.b}`)), eu.current = null !== Mu.current && UE(Gu.current, Mu.current)
      }

      function Su() {
        const {
          innerWidth: uu,
          innerHeight: Eu
        } = window, ju = (0, ME.B)(Vu, uu, Eu, (0, ME.F)(Ju, uu, Eu), Pu.current);
        return {
          left: ju[3],
          bottom: ju[2]
        }
      }

      function Iu(uu) {
        bu.current.style.transform = `translate(${uu.x-ru}px, ${uu.y-ru}px)`
      }

      function Fu(uu) {
        const Eu = bu.current;
        Eu.classList.add("Resting"), Eu.classList.toggle("Returning", uu), Eu.style.display = "fixed_hidden" === su ? "none" : "block", Iu(function() {
          const {
            innerWidth: uu,
            innerHeight: Eu
          } = window, ju = Su(), su = au * uu / 100 + ju.left, Uu = qu.current.offsetHeight || Eu, Zu = ((0, DE.d)(uu, Eu) ? PE.c : PE.b) + ju.bottom;
          return {
            x: Math.min(uu - ru, Math.max(ru, su + PE.d + ku * uu)),
            y: Math.min(Uu - ru, Math.max(ru, Uu - Zu + vu * Uu))
          }
        }())
      }
      const Bu = (0, Uu.useRef)({
        restFixed: Fu,
        release: xu
      });

      function Lu() {
        wu ? Fu("fixed_shown" === su) : "floating" === su && (bu.current.style.display = "none"), ju({
          x: 0,
          y: 0
        })
      }

      function tu() {
        Yu.current = null, Ou.current = null, cu.current.style.transform = "translate(-50%, -50%)"
      }

      function xu(uu) {
        tu();
        const Eu = Qu.current;
        uu && null !== Eu && void 0 !== Eu && Eu.lift() ? ju({
          x: 0,
          y: -Eu.lockedSpeed
        }) : (null === Eu || void 0 === Eu || Eu.cancel(), Lu())
      }

      function Tu(uu) {
        var Eu;
        if (null === (Eu = Qu.current) || void 0 === Eu || Eu.startTouch(), "pinned" === su) {
          const uu = bu.current.getBoundingClientRect();
          Ou.current = {
            x: uu.left + uu.width / 2,
            y: uu.top + uu.height / 2
          }
        } else {
          Ou.current = {
            x: uu.clientX,
            y: uu.clientY
          }, bu.current.classList.remove("Resting", "Returning"), bu.current.style.display = "block";
          const Eu = qu.current.getBoundingClientRect();
          Iu({
            x: uu.clientX - Eu.left,
            y: uu.clientY - Eu.top
          }), Xu && (Gu.current = {
            clientX: uu.clientX,
            clientY: uu.clientY
          }, iu())
        }
      }

      function Hu(uu) {
        const Eu = hu.slidFrom(Array.from(uu.touches));
        Eu && null === Yu.current && (Yu.current = Eu.identifier, Tu(Eu));
        const su = Array.from(uu.touches).find((uu => uu.identifier === Yu.current));
        if (null === Ou.current || null === Yu.current || (0, EE.H)(su)) return;
        const Uu = Qu.current,
          Xu = su.clientX - Ou.current.x,
          lu = su.clientY - Ou.current.y,
          qu = Math.hypot(Xu, lu),
          fu = qu > 0 ? Math.min(1, ru / qu) : 0,
          Cu = Xu * fu,
          bu = lu * fu,
          Nu = Math.hypot(Cu, bu) / ru,
          Du = Zu && Nu > 0 ? Zu(Nu) / Nu : 1;
        cu.current.style.transform = `translate(calc(-50% + ${Cu}px), calc(-50% + ${bu}px))`;
        const gu = Cu / ru,
          pu = bu / ru;
        if (ju({
            x: gu * Du,
            y: pu * Du
          }), null !== Uu && null !== Mu.current) {
          Uu.move(gu, pu, Nu * Du), Gu.current = {
            clientX: su.clientX,
            clientY: su.clientY
          };
          const uu = eu.current;
          eu.current = UE(su, Mu.current), eu.current !== uu && Uu.target(eu.current)
        }
      }
      return Bu.current = {
        restFixed: Fu,
        release: xu
      }, (0, Uu.useLayoutEffect)((() => {
        if (!wu) return;
        const uu = () => {
          Pu.current = (0, ME.K)(document)
        };
        uu(), null === Yu.current && Bu.current.restFixed(!1);
        const Eu = new ResizeObserver((() => {
          uu(), null === Yu.current && Bu.current.restFixed(!1)
        }));
        Eu.observe(qu.current);
        const ju = bu.current;
        return () => {
          Eu.disconnect(), ju.classList.remove("Resting", "Returning"), null === Yu.current && (ju.style.display = "", ju.style.transform = "")
        }
      }), [wu, su, Ju, ku, vu, ru, Vu]), (0, Uu.useEffect)((() => {
        const uu = (uu, Eu) => void 0 === Eu || null === Eu || Array.from(uu.touches).some((uu => uu.identifier === Eu)) ? null : {
            lifted: "touchend" === uu.type && Array.from(uu.changedTouches).some((uu => uu.identifier === Eu))
          },
          Eu = Eu => {
            const ju = uu(Eu, Yu.current);
            ju && Bu.current.release(ju.lifted);
            const su = uu(Eu, hu.touchId);
            su && hu.end(su.lifted)
          },
          ju = () => {
            null !== Yu.current && Bu.current.release(!1), hu.end(!1)
          },
          su = () => {
            "hidden" === document.visibilityState && ju()
          };
        document.addEventListener("touchstart", Eu, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", Eu, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", Eu, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", Eu, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", ju), document.addEventListener("visibilitychange", su);
        const Uu = (0, CE.n)((uu => {
          let {
            keepsMovement: Eu
          } = uu;
          Eu || ju()
        }));
        return () => {
          Uu(), document.removeEventListener("touchstart", Eu, {
            capture: !0
          }), document.removeEventListener("touchmove", Eu, {
            capture: !0
          }), document.removeEventListener("touchend", Eu, {
            capture: !0
          }), document.removeEventListener("touchcancel", Eu, {
            capture: !0
          }), window.removeEventListener("blur", ju), document.removeEventListener("visibilitychange", su)
        }
      }), []), (0, Uu.useEffect)((() => {
        const uu = qu.current,
          Eu = uu => {
            uu.preventDefault()
          };
        return uu.addEventListener("touchstart", Eu, {
          passive: !1
        }), () => {
          uu.removeEventListener("touchstart", Eu)
        }
      }), []), (0, Cu.jsxs)("div", {
        ref: qu,
        className: "JoystickZone",
        style: wu && (ku > 0 || Ku > 1 || Su().left > 0) ? {
          width: `max(35vw, calc(${au+100*ku}vw + ${Su().left+PE.d+ru+24}px))`
        } : void 0,
        onTouchStart: function(uu) {
          const Eu = Array.from(uu.changedTouches).filter((uu => {
            var Eu;
            return null === (Eu = qu.current) || void 0 === Eu ? void 0 : Eu.contains(uu.target)
          }));
          for (const su of Eu) {
            const uu = NE(su.target);
            uu && hu.land(uu, su)
          }
          const ju = Eu.find((uu => null === NE(uu.target)));
          ju && null === Yu.current && (Yu.current = ju.identifier, Tu(ju), Hu(uu))
        },
        onTouchMove: Hu,
        children: [(0, Cu.jsx)("div", {
          ref: fu,
          className: "JoystickTouchLayer"
        }), (0, Cu.jsxs)("div", {
          ref: bu,
          className: "Joystick",
          style: {
            width: 2 * ru + "px",
            height: 2 * ru + "px",
            transform: "pinned" === su ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Cu.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * ru + "px",
              height: 2 * ru + "px"
            }
          }), Xu && (0, Cu.jsxs)(Cu.Fragment, {
            children: [(0, Cu.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Cu.jsx)("circle", {
                ref: Du,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Cu.jsxs)("div", {
              ref: gu,
              className: "AutorunTarget",
              children: [(0, Cu.jsx)(Wu.e, {
                name: "lock"
              }), pu("settingsMenu:autoRun")]
            })]
          }), (0, Cu.jsx)("div", {
            ref: cu,
            className: "JoystickKnob",
            style: {
              width: `${ru}px`,
              height: `${ru}px`
            }
          })]
        }), lu]
      })
    }
    var kE = ju(284);
    const mE = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      vE = {
        short_creep: {
          ...mE,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...mE,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...mE,
          deadZone: .05
        },
        control: mE
      };

    function KE(uu) {
      return function(uu, Eu) {
        const {
          deadZone: ju,
          creepEnd: su,
          fullSpeedAt: Uu,
          creepMin: Zu,
          creepMax: Xu
        } = uu;
        if (Eu < ju) return 0;
        if (Eu < su) {
          const uu = (Eu - ju) / (su - ju);
          return Zu + (Xu - Zu) * uu * uu
        }
        return Eu < Uu ? Xu + (1 - Xu) * (Eu - su) / (Uu - su) : 1
      }(vE[kE.d.mobile_walk_curve_v1], uu)
    }
    var VE = ju(9110);

    function rE(uu, Eu) {
      const ju = (0, Uu.useRef)(null);
      return (0, Uu.useLayoutEffect)((() => (zu.j.set(uu, ju.current, Eu), () => {
        zu.j.set(uu, null)
      })), [uu, Eu]), ju
    }
    const QE = "C",
      iE = "J",
      WE = "U",
      SE = "A",
      IE = "G",
      FE = "X",
      BE = (0, Uu.forwardRef)((function(uu, Eu) {
        let {
          slot: ju,
          canvasZone: su = !1,
          lit: Zu = !1,
          label: lu,
          className: qu,
          children: fu,
          ...bu
        } = uu;
        return (0, Uu.useEffect)((() => (Gu.h.TY(gE.b), () => {
          Gu.h.TY(gE.b)
        })), []), (0, Cu.jsx)("div", {
          ref: Eu,
          className: Xu()("TouchKeyHit", `TouchSlot${ju}`, qu, {
            CanvasZone: su
          }),
          ...bu,
          children: (0, Cu.jsxs)("div", {
            className: Xu()("TouchKey", {
              Lit: Zu,
              Labelled: void 0 !== lu
            }),
            children: [fu, void 0 !== lu && (0, Cu.jsx)("span", {
              className: "TouchKeyLabel",
              children: lu
            })]
          })
        })
      }));

    function LE(uu, Eu) {
      (0, Uu.useEffect)((() => () => {
        Eu.current && (Eu.current = !1, (0, yu.w)(uu, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function tE(uu, Eu) {
      const ju = (0, VE.l)(Eu);
      return uu.filter((uu => null !== uu)).slice(0, ju.length).map(((uu, Eu) => {
        const su = ju[Eu];
        return (0, Cu.jsx)(Uu.Fragment, {
          children: uu.render(su)
        }, `${uu.id}:${su}`)
      }))
    }
    var xE = ju(36965);
    class TE extends XE {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(uu, Eu) {
        this.start = {
          x: uu,
          y: Eu
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(uu, Eu, ju) {
        const su = Math.hypot(uu - this.start.x, Eu - this.start.y) <= 12;
        this.moved ||= !su;
        const Uu = null !== ju && Eu < this.start.y - 12 && UE({
          clientX: uu,
          clientY: Eu
        }, ju);
        this.hold(!this.moved, su || Uu)
      }
    }
    const HE = new Set;

    function AE(uu) {
      const Eu = new Set(Array.from(uu.touches, (uu => uu.identifier)));
      for (const ju of HE) {
        for (const uu of ju.ids) Eu.has(uu) || ju.ids.delete(uu);
        if (0 === ju.ids.size) {
          HE.delete(ju);
          ju.pressesOnPointerDown && "touchstart" === uu.type && Array.from(uu.changedTouches).some((uu => uu.target instanceof Node && ju.element.contains(uu.target))) || ju.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const tX of ["touchstart", "touchmove"]) window.addEventListener(tX, AE, {
        capture: !0,
        passive: !0
      });

    function nE(uu) {
      let {
        pressesOnPointerDown: Eu = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ju = (0, Uu.useRef)(uu);
      ju.current = uu;
      const su = (0, Uu.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: Eu,
        release: () => {
          ju.current()
        }
      });
      (0, Uu.useEffect)((() => {
        const uu = su.current;
        return () => {
          HE.delete(uu), uu.ids.clear()
        }
      }), []);
      const Zu = uu => {
        const Eu = su.current;
        for (const ju of Array.from(uu.changedTouches)) Eu.ids.delete(ju.identifier);
        0 === Eu.ids.size && HE.delete(Eu)
      };
      return {
        onTouchStart: uu => {
          const Eu = su.current;
          Eu.element = uu.currentTarget;
          for (const ju of Array.from(uu.changedTouches)) ju.target instanceof Node && uu.currentTarget.contains(ju.target) && Eu.ids.add(ju.identifier);
          Eu.ids.size > 0 && HE.add(Eu)
        },
        onTouchEnd: Zu,
        onTouchCancel: Zu
      }
    }

    function yE(uu, Eu) {
      return null === Eu ? null : (0, xE.b)(uu.nativeEvent.changedTouches, Eu.id)
    }

    function zE(uu) {
      let {
        lockable: Eu
      } = uu;
      const {
        t: ju
      } = (0, mu.A)(), su = "round" === (0, YE.bb)().hudShape, Zu = (0, Uu.useRef)(!1);
      LE(nu.w.Jump, Zu);
      const Xu = (0, Uu.useRef)(null),
        lu = (0, Uu.useRef)(null),
        qu = (0, Uu.useRef)(null),
        fu = (0, Uu.useRef)(null),
        bu = (0, Uu.useRef)(null),
        cu = (0, Uu.useRef)(null),
        Nu = (0, Uu.useRef)(!1),
        Ou = (uu, Eu) => {
          Zu.current = uu, (0, yu.w)(nu.w.Jump, uu, Eu)
        },
        Yu = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Zu.current && (Xu.current && (0, uE.g)(Xu.current, !1), Ou(!1, uu))
        },
        hu = bE(Eu, {
          create: uu => new TE(uu),
          elementRef: Xu,
          ringRef: lu,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const uu = Xu.current.getBoundingClientRect(),
              Eu = qu.current.parentElement,
              ju = Eu.getBoundingClientRect(),
              su = {
                left: ju.left + Eu.clientLeft,
                top: ju.top + Eu.clientTop,
                right: ju.right - Eu.clientLeft,
                bottom: ju.bottom - Eu.clientTop
              };
            if (bu.current = jE(qu.current, su, 16, sE(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${ME.b}`)), null === bu.current) return void hu.current.suspend();
            const Uu = bu.current;
            cu.current = {
              left: Math.min(uu.left, Uu.left),
              top: Uu.top,
              right: Math.max(uu.right, Uu.right),
              bottom: uu.bottom
            }, Nu.current = null !== fu.current && UE({
              clientX: fu.current.x,
              clientY: fu.current.y
            }, Uu)
          },
          onUnlocked: () => {
            null === fu.current && Yu()
          }
        }),
        Du = uu => {
          var Eu;
          fu.current = null, null === (Eu = hu.current) || void 0 === Eu || Eu.cancel(), Yu(uu)
        },
        gu = nE((() => {
          Du()
        })),
        Mu = uu => {
          const Eu = fu.current;
          var ju;
          return null === Eu ? null !== (ju = hu.current) && void 0 !== ju && ju.locked ? null : "lifted" : yE(uu, Eu) ? "lifted" : (0, xE.f)(uu.nativeEvent.touches, Eu.id) ? null : "dropped"
        };
      return (0, Cu.jsxs)(BE, {
        ref: Xu,
        slot: iE,
        className: "JumpKey",
        onTouchStart: uu => {
          gu.onTouchStart(uu), (0, uE.g)(uu.currentTarget, !0), null === fu.current || (0, xE.f)(uu.nativeEvent.touches, fu.current.id) || Du();
          const Eu = uu.changedTouches[0];
          var ju;
          null === fu.current && Eu && (fu.current = {
            id: Eu.identifier,
            x: Eu.clientX,
            y: Eu.clientY
          }, null === (ju = hu.current) || void 0 === ju || ju.press(Eu.clientX, Eu.clientY));
          Zu.current || Ou(!0, uu.nativeEvent)
        },
        onTouchMove: uu => {
          const Eu = fu.current,
            ju = yE(uu, Eu);
          if (!ju) return;
          const su = hu.current;
          if (null === su || void 0 === su || su.move(ju.clientX, ju.clientY, cu.current), null !== su && void 0 !== su && su.offered) {
            const uu = UE(ju, bu.current);
            uu !== Nu.current && (Nu.current = uu, su.target(uu))
          }
          Eu.x = ju.clientX, Eu.y = ju.clientY
        },
        onTouchEnd: uu => {
          var Eu;
          gu.onTouchEnd(uu);
          const ju = Mu(uu);
          null !== ju && ("dropped" !== ju ? (fu.current = null, null !== (Eu = hu.current) && void 0 !== Eu && Eu.lift() ? (0, uE.g)(uu.currentTarget, !1) : Yu(uu.nativeEvent)) : Du(uu.nativeEvent))
        },
        onTouchCancel: uu => {
          gu.onTouchCancel(uu), null !== Mu(uu) && Du(uu.nativeEvent)
        },
        children: [(0, Cu.jsx)(Wu.e, {
          name: "arrow-up-from-line"
        }), Eu && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Cu.jsx)(Wu.e, {
              name: "lock"
            })
          }), (0, Cu.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Cu.jsx)("rect", {
              ref: lu,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: su ? 48 : 0,
              pathLength: 1
            })
          }), (0, Cu.jsxs)("div", {
            ref: qu,
            className: "JumpLockTarget",
            children: [(0, Cu.jsx)(Wu.e, {
              name: "lock"
            }), ju("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var RE = ju(36988);

    function uj(uu) {
      let {
        atHome: Eu
      } = uu;
      const {
        t: ju
      } = (0, mu.A)(), su = (Zu = (0, eu.h)("runningSpeed"), lu = (0, eu.h)("walkingSpeed"), null !== Zu && null !== lu && Zu > lu);
      var Zu, lu;
      const fu = (0, YE.u)((0, hE.i)().hudElements, "sprint"),
        bu = (0, qu.g)(RE.e, (0, RE.i)());
      return (0, Uu.useEffect)((() => {
        su && !fu || (0, RE.j)(!0)
      }), [su, fu]), (0, Uu.useEffect)((() => () => {
        (0, RE.j)(!0)
      }), []), su ? (0, Cu.jsx)("div", {
        className: Xu()("TouchSprintHit", {
          AtHome: Eu
        }),
        role: "switch",
        "aria-checked": bu,
        "aria-label": ju("touchKeys:sprint"),
        [cE]: "",
        onClick: () => {
          (0, RE.j)(!(0, RE.i)())
        },
        children: (0, Cu.jsx)("div", {
          className: Xu()("TouchKey TouchSprintKey", {
            Lit: bu
          }),
          children: (0, Cu.jsx)(Wu.e, {
            name: bu ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const Ej = new WeakMap;
    class jj {
      constructor(uu) {
        this.zones = uu, this.followed = new Map, this.onStart = uu => {
          if (this.releaseMissing(uu.touches), uu.target instanceof HTMLCanvasElement)
            for (let ju = 0; ju < uu.changedTouches.length; ju++) {
              var Eu;
              const {
                identifier: su,
                clientX: Uu,
                clientY: Zu
              } = uu.changedTouches[ju];
              this.release(su);
              const Xu = this.zones.hitZone(Uu, Zu);
              if (!Xu) continue;
              const {
                key: lu
              } = Xu;
              null === (Eu = Ej.get(lu)) || void 0 === Eu || Eu.cancel();
              const qu = {
                hit: Xu.element,
                key: lu,
                x: Xu.x,
                y: Xu.y,
                reach: .6 * Xu.radius
              };
              this.followed.set(su, qu), (0, uE.g)(Xu.element, !0), sj(qu, Uu, Zu)
            }
        }, this.onMove = uu => {
          this.releaseMissing(uu.touches);
          for (let Eu = 0; Eu < uu.changedTouches.length; Eu++) {
            const {
              identifier: ju,
              clientX: su,
              clientY: Uu
            } = uu.changedTouches[Eu], Zu = this.followed.get(ju);
            Zu && sj(Zu, su, Uu)
          }
        }, this.onEnd = uu => {
          for (let Eu = 0; Eu < uu.changedTouches.length; Eu++) this.release(uu.changedTouches[Eu].identifier)
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
        for (const Eu of [...this.followed.keys()])(0, xE.f)(uu, Eu) || this.release(Eu)
      }
      releaseAll() {
        for (const uu of [...this.followed.keys()]) this.release(uu)
      }
      release(uu) {
        const Eu = this.followed.get(uu);
        if (!Eu) return;
        this.followed.delete(uu);
        for (const Uu of this.followed.values())
          if (Uu.key === Eu.key) return;
        (0, uE.g)(Eu.hit, !1);
        const {
          key: ju
        } = Eu, su = ju.style.translate;
        ju.style.translate = "", su && Ej.set(ju, ju.animate({
          translate: [su, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function sj(uu, Eu, ju) {
      let {
        key: su,
        x: Uu,
        y: Zu,
        reach: Xu
      } = uu;
      const lu = Eu - Uu,
        qu = ju - Zu,
        fu = Math.min(1, Xu / (Math.hypot(lu, qu) || 1));
      su.style.translate = `${lu*fu}px ${qu*fu}px`
    }
    var Uj = ju(1533),
      Zj = ju(91),
      Xj = ju(1405);
    const lj = "threeFingerHintShown",
      qj = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let fj = 0,
      Cj = !1;

    function bj() {
      const uu = new Set;
      let Eu = -1 / 0,
        ju = -1 / 0,
        su = null,
        Uu = 0;
      const Zu = () => {
          uu.clear()
        },
        Xu = Zu => {
          if (Zu.touches.length > 0) return;
          for (let Eu = 0; Eu < Zu.changedTouches.length; Eu++) uu.add(Zu.changedTouches[Eu].identifier);
          const Xu = uu.size;
          if (Xu < 3 || !(0, CE.w)()) return;
          if (Uu = Xu, null !== su) return;
          const lu = performance.now(),
            qu = Eu >= lu - 200;
          su = setTimeout((() => {
            if (su = null, !(0, CE.w)()) return;
            const uu = ju >= lu - 200 || document.hidden;
            ! function(uu, Eu) {
              var ju;
              const su = (0, Zj.getOperatingSystem)();
              fj < 5 && (fj++, (0, Uj.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === Eu ? `${su}:${uu}` : `${su}:${uu}:${Eu}`
              })), null === Eu && (Cj || !0 === wu.k.getItem(lj) || (Cj = !0, wu.k.setItem(lj, !0), Xj.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (ju = qj[su]) && void 0 !== ju ? ju : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(Uu, uu ? "hide" : qu ? "blur" : null)
          }), 500)
        },
        lu = () => {
          ju = performance.now()
        },
        qu = () => {
          Eu = performance.now()
        },
        fu = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", Zu, fu), document.addEventListener("touchcancel", Xu, fu), document.addEventListener("visibilitychange", lu), window.addEventListener("blur", qu), window.addEventListener("resize", lu), window.addEventListener("orientationchange", lu), () => {
        document.removeEventListener("touchstart", Zu, fu), document.removeEventListener("touchcancel", Xu, fu), document.removeEventListener("visibilitychange", lu), window.removeEventListener("blur", qu), window.removeEventListener("resize", lu), window.removeEventListener("orientationchange", lu), null !== su && clearTimeout(su)
      }
    }
    const cj = () => {
      const uu = (0, Au.k)(),
        Eu = (0, Pu.w)();
      return uu || Eu
    };

    function Nj(uu) {
      (0, zu.n)(uu.x, uu.y)
    }
    const Oj = (0, Uu.memo)((function() {
        const uu = cj(),
          {
            joystickMode: Eu,
            touchSpeedCurve: ju,
            autorun: su
          } = (0, du.l)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Uu.useEffect)((() => ((0, Ru.g)(nu.x.TouchControls, nu.x.TouchControls), () => {
          (0, Ru.g)(nu.x.TouchControls, 0), (0, zu.n)(0, 0)
        })), []), (0, Uu.useEffect)(bj, []), (0, Cu.jsx)("div", {
          className: Xu()("TouchMovementWrapper", {
            Hidden: uu
          }),
          "data-camera-keeper": "",
          children: (0, Cu.jsx)(oE, {
            onMove: Nj,
            mode: Eu,
            speedCurve: ju ? KE : void 0,
            autorun: su,
            keys: (0, Cu.jsx)(uj, {
              atHome: !(0, PE.k)(Eu)
            })
          })
        })
      })),
      Yj = (0, Uu.memo)((function() {
        const uu = cj(),
          {
            clientEscMenuOptions: Eu
          } = (0, du.l)(["clientEscMenuOptions"]),
          ju = Eu.touchActionButtons;
        return (0, Uu.useEffect)((() => new jj(zu.j).start()), []), (0, Uu.useEffect)((() => {
          Gu.h.TY(gE.b)
        }), [uu]), (0, Cu.jsxs)("div", {
          className: Xu()("TouchComponentsButtons", {
            Hidden: uu
          }),
          "data-camera-keeper": "",
          children: [(0, Cu.jsx)(zE, {
            lockable: Eu.jumpLock && !uu
          }), (0, Cu.jsx)(Pj, {
            hidden: uu,
            actionButtons: ju
          }), (0, Cu.jsx)(Dj, {})]
        })
      }));

    function hj(uu) {
      const Eu = Eu => ju => {
        (0, uE.g)(ju.currentTarget, Eu), uu(Eu, ju.nativeEvent)
      };
      return {
        onPointerDown: Eu(!0),
        onPointerUp: Eu(!1),
        onPointerCancel: Eu(!1)
      }
    }

    function Dj() {
      const uu = (0, eu.h)("canCrouch"),
        Eu = (0, Ju.f)("crouching"),
        ju = (0, Uu.useRef)(!1);
      LE(nu.w.Crouch, ju);
      const su = (uu, Eu) => {
          ju.current = uu, (0, yu.w)(nu.w.Crouch, uu, Eu)
        },
        Zu = (0, Uu.useRef)(null),
        Xu = () => {
          ju.current && (Zu.current && (0, uE.g)(Zu.current, !1), su(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        lu = nE(Xu);
      return (0, Uu.useEffect)((() => {
        !1 === uu && Xu()
      }), [uu]), !1 === uu ? null : (0, Cu.jsx)(BE, {
        ref: Zu,
        slot: QE,
        className: "CrouchKey",
        lit: Eu,
        ...lu,
        ...hj(su),
        children: (0, Cu.jsx)(Wu.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const gj = [{
        icon: "arrows-rotate"
      }],
      Mj = [{
        icon: "Arrow"
      }],
      ej = [{
        icon: "crosshairs"
      }],
      Gj = [{
        icon: "swords"
      }],
      pj = [{
        icon: "hand-back-point-up"
      }],
      wj = [{
        icon: "Firecracker"
      }];

    function Jj(uu, Eu, ju, su) {
      return {
        id: JSON.stringify(Eu),
        render: Uu => (0, Cu.jsx)(oj, {
          code: uu,
          slot: Uu,
          icon: Eu,
          label: su,
          hidden: ju
        })
      }
    }

    function dj(uu, Eu) {
      return {
        id: "fly",
        render: ju => (0, Cu.jsx)(aj, {
          slot: ju,
          flying: uu,
          label: Eu
        })
      }
    }

    function aj(uu) {
      let {
        slot: Eu,
        flying: ju,
        label: su
      } = uu;
      return (0, Cu.jsx)(BE, {
        slot: Eu,
        className: "FlyKey",
        lit: ju,
        label: su,
        ...hj(((uu, Eu) => {
          (0, yu.w)(nu.w.Fly, uu, Eu)
        })),
        children: (0, Cu.jsx)(Wu.e, {
          name: "feather-pointed"
        })
      })
    }

    function Pj(uu) {
      var Eu, ju;
      let {
        hidden: su,
        actionButtons: Uu
      } = uu;
      const {
        t: Zu
      } = (0, mu.A)(), {
        gun: Xu,
        aimable: lu,
        chargeName: qu
      } = (0, Ju.f)("heldItemAim"), fu = (0, Ju.f)("gliderBoostFuel"), {
        canFly: bu,
        flying: cu
      } = (0, Ju.f)("flight"), Nu = (0, eu.h)("touchscreenActionButton"), Ou = Xu ? gj : Nu, Yu = lu ? {
        icon: Mj,
        label: Zu("touchKeys:aim")
      } : null, hu = null !== qu ? {
        icon: [{
          icon: qu
        }]
      } : null, Du = null !== Yu && void 0 !== Yu ? Yu : hu, gu = null !== (Eu = null === (ju = Xu ? Yu : null !== hu && void 0 !== hu ? hu : Yu) || void 0 === ju ? void 0 : ju.icon) && void 0 !== Eu ? Eu : pj, Mu = [!Uu && Du ? Jj(zu.d.Action2, Du.icon, su, Du.label) : null, Xu ? Jj(zu.d.Action3, ej, su, Zu("touchKeys:scope")) : null, bu ? dj(cu, Zu("touchKeys:fly")) : null];
      return (0, Cu.jsxs)(Cu.Fragment, {
        children: [Ou && (0, Cu.jsx)(oj, {
          code: zu.d.Action1,
          slot: IE,
          icon: Ou,
          label: Xu ? Zu("touchKeys:reload") : void 0,
          hidden: su
        }, JSON.stringify(Ou)), Uu && (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)(oj, {
            code: zu.d.Attack,
            slot: SE,
            icon: Gj,
            name: Zu("touchKeys:attack"),
            hidden: su
          }), (0, Cu.jsx)(oj, {
            code: zu.d.Use,
            slot: WE,
            icon: gu,
            name: Zu("touchKeys:use"),
            hidden: su
          })]
        }), tE(Mu, Uu), fu > 0 && (0, Cu.jsx)(oj, {
          code: zu.d.Boost,
          slot: FE,
          icon: wj,
          label: Zu("touchKeys:boost", {
            fuel: fu > 99 ? "99+" : fu
          }),
          hidden: su
        })]
      })
    }

    function oj(uu) {
      let {
        code: Eu,
        slot: ju,
        icon: su,
        label: Uu,
        name: Zu,
        hidden: Xu
      } = uu;
      const lu = rE(Eu, Xu);
      return (0, Cu.jsx)(BE, {
        ref: lu,
        slot: ju,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Uu,
        role: void 0 !== Zu ? "img" : void 0,
        "aria-label": Zu,
        children: (0, Cu.jsx)(fu.d, {
          text: su
        })
      })
    }
    var kj = ju(4437),
      mj = ju(3179),
      vj = ju(692);
    const Kj = (0, Uu.memo)((function() {
      (0, gu.d)();
      const uu = (0, Uu.useRef)([]),
        Eu = (0, mj.b)(),
        ju = (0, Uu.useRef)(0),
        su = (0, Uu.useRef)(0),
        Zu = (0, Uu.useRef)([]),
        Xu = (0, Uu.useRef)(null);

      function lu(ju, su, Uu, Zu) {
        const Xu = (0, vj.e)(),
          lu = setTimeout((() => {
            uu.current = uu.current.filter((uu => uu.id !== Xu)), Eu()
          }), Zu);
        Nu.gameBridge.send("recordFlyingMiddleText", {
          content: ju,
          IZ: su,
          angle: Uu,
          FZ: Zu
        }), uu.current.push({
          id: Xu,
          content: ju,
          IZ: su,
          FZ: Zu,
          removeTimeout: lu,
          angle: Uu
        }), Eu()
      }
      return (0, Ju.b)("shotDamageToShow", (uu => {
        let {
          damage: Eu,
          wasCrit: ju,
          distance: su
        } = uu;
        const Uu = -Math.PI / 4 + Math.random() * Math.PI / 2;
        lu(ju ? [{
          str: Eu.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [Eu.toString()], su, Uu, 1e3)
      })), (0, qu.f)("flyingMiddleMessage", (uu => {
        let {
          content: Eu,
          IZ: Uu,
          FZ: qu
        } = uu;
        Zu.current.push({
          content: Eu,
          IZ: Uu,
          FZ: qu
        });
        const fu = () => {
          const {
            content: uu,
            IZ: Eu,
            FZ: Uu
          } = Zu.current.shift(), Xu = function(uu) {
            const Eu = -Math.PI / 4,
              ju = Math.PI / 4,
              su = ju - Eu,
              Uu = (1 + Math.sqrt(5)) / 2,
              Zu = 2 * Math.PI / (Uu * Uu);
            let Xu = uu + Zu;
            for (; Xu > ju;) Xu -= su;
            for (; Xu < Eu;) Xu += su;
            const lu = Math.PI / 6;
            if (Math.abs(Xu - uu) < lu) {
              Xu = uu + (Math.sign(Xu - uu) || 1) * lu, Xu > ju && (Xu = uu - lu), Xu < Eu && (Xu = uu + lu)
            }
            return Xu
          }(su.current);
          su.current = Xu, ju.current = Date.now(), lu(uu, Eu, Xu, Uu)
        };
        if (!Xu.current) {
          const uu = () => {
            Zu.current.length > 0 && fu(), 0 === Zu.current.length && (clearInterval(Xu.current), Xu.current = null)
          };
          Xu.current = setInterval(uu, 200), ju.current + 200 < Date.now() && uu()
        }
        for (; Zu.current.length > 4;) fu()
      })), (0, qu.f)("forceFlyingMiddleMessage", (uu => {
        let {
          content: Eu,
          IZ: ju,
          angle: su,
          FZ: Uu
        } = uu;
        lu(Eu, ju, su, Uu)
      })), (0, Uu.useEffect)((() => () => {
        clearInterval(Xu.current), Xu.current = null;
        for (const Eu of uu.current) clearTimeout(Eu.removeTimeout)
      }), []), (0, Cu.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: uu.current.map((uu => {
          const {
            id: Eu,
            content: ju,
            IZ: su,
            FZ: Uu,
            angle: Zu
          } = uu;
          return uu.pos || (uu.pos = function(uu, Eu) {
            const ju = 50 / (uu ** .7 * .35);
            return {
              x: ju * Math.sin(Eu),
              y: -ju * Math.cos(Eu)
            }
          }(su, Zu)), (0, Cu.jsx)(Vj, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Uu,
            enterActiveStyle: {
              transform: `translate(${uu.pos.x}vw, ${uu.pos.y}vh)`,
              transition: `transform ${Uu}ms ease-out`
            },
            children: (0, Cu.jsx)("div", {
              children: (0, Cu.jsx)(fu.d, {
                text: ju
              })
            })
          }, Eu)
        }))
      })
    }));

    function Vj(uu) {
      let {
        children: Eu,
        className: ju,
        classNames: su,
        timeout: Zu,
        enterActiveStyle: Xu
      } = uu;
      const [lu, qu] = (0, Uu.useState)(!1), [fu, bu] = (0, Uu.useState)(!1), cu = (0, Uu.useRef)(null);
      return (0, Uu.useEffect)((() => {
        qu(!0)
      }), []), (0, Cu.jsx)(kj.d, {
        className: ju,
        classNames: su || ju,
        in: lu,
        timeout: Zu,
        nodeRef: cu,
        onEntering: () => {
          bu(!0)
        },
        children: (0, Uu.cloneElement)(Eu, {
          ref: cu,
          style: fu && Xu || void 0
        })
      })
    }
    var rj = ju(36990);

    function Qj() {
      const uu = (0, Ju.f)("health");
      return (0, Cu.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Cu.jsx)(rj.d, {
          placement: "statBars"
        }), (0, Cu.jsx)(ij, {
          actualValue: uu.shield,
          maxValue: uu.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Cu.jsx)(ij, {
          actualValue: uu.health,
          maxValue: uu.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function ij(uu) {
      let {
        actualValue: Eu,
        maxValue: ju,
        hideAtValue: su,
        icon: Uu,
        className: Zu
      } = uu;
      return (0, gu.f)(), null === Eu || null === ju || Eu === su || ju === su ? null : (0, Cu.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Cu.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Cu.jsx)("div", {
            className: `BottomScreenStatBar ${Zu}`,
            style: {
              transform: `scaleX(${Math.max(Eu/ju,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Cu.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Cu.jsx)(Wu.e, {
              name: Uu
            }), ` ${Math.ceil(Eu)}/${ju}`]
          })]
        })
      })
    }
    var Wj = ju(34547),
      Sj = ju(4719),
      Ij = ju(1376),
      Fj = ju(2871),
      Bj = ju(1506),
      Lj = ju(1362),
      tj = ju(3613),
      xj = ju(3148),
      Tj = ju(2215),
      Hj = ju(822),
      Aj = ju(3667),
      nj = ju(131),
      yj = ju(1735),
      zj = ju(34481);

    function Rj(uu) {
      let {
        showing: Eu,
        enabled: ju,
        autoRespawn: su
      } = uu;
      const {
        t: Zu
      } = (0, mu.A)(), Xu = (0, Pu.t)(), {
        mobilePushNotificationsCanAsk: lu
      } = (0, du.l)(["mobilePushNotificationsCanAsk"]), [qu, fu] = (0, Uu.useState)(null), [bu, cu] = (0, Uu.useState)(!1), [Nu, Ou] = (0, Uu.useState)(null);
      Eu && null === Nu ? Ou(Xu) : Eu || null === Nu || Ou(null);
      const Yu = Eu && null !== qu && !1 === Nu;
      if ((0, Uu.useEffect)((() => {
          if (Eu) return;
          fu(null), cu(!1);
          let uu = !0;
          return (0, zj.e)().then((Eu => {
            uu && fu((() => Eu))
          }), (uu => {
            console.error("Failed to tell whether to offer push notifications:", uu)
          })), () => {
            uu = !1
          }
        }), [Eu, lu]), (0, Uu.useEffect)((() => {
          Yu && !su && (0, zj.i)()
        }), [Yu, su]), !Yu) return null;
      const hu = () => {
          (0, zj.i)(), cu(!0)
        },
        Du = yj.d.supports("notifications") ? "app" : "browser";
      return (0, Cu.jsxs)("div", {
        className: "RespawnNotificationOptIn",
        style: bu ? {
          visibility: "hidden"
        } : void 0,
        children: [(0, Cu.jsxs)("div", {
          className: "RespawnPanelSectionTitle",
          children: [(0, Cu.jsx)(Wu.e, {
            name: "bell"
          }), Zu("mobilePushNotifications:optInTitle")]
        }), (0, Cu.jsxs)("div", {
          className: "RespawnNotificationOptInButtons",
          children: [(0, Cu.jsx)(Bj.f, {
            onClick: () => {
              hu(), qu().catch((uu => {
                console.error("Failed to ask for push notifications:", uu)
              }))
            },
            disabled: !ju || bu,
            analyticsClick: {
              id: "push.allow",
              value: Du
            },
            touchPressOn: "pointerup",
            children: Zu("mobilePushNotifications:optInConfirm")
          }), (0, Cu.jsx)(Bj.i, {
            onClick: hu,
            disabled: !ju || bu,
            analyticsClick: {
              id: "push.deny",
              value: Du
            },
            touchPressOn: "pointerup",
            children: Zu("mobilePushNotifications:optInCancel")
          })]
        })]
      })
    }
    var us = ju(349);

    function Es(uu, Eu) {
      let {
        shownName: ju,
        lifeformType: su
      } = uu;
      return null !== ju ? ju : null !== su ? Eu(`lifeform:${(0,us.ze)(su)}`) : null
    }
    var ss = ju(3623),
      Us = ju(3625);
    const Zs = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Xs = (0, Uu.memo)((function() {
        var uu, Eu;
        const ju = (0, gu.d)(),
          su = (0, Ou.useNavigatePreserveSearch)(),
          {
            t: Zu
          } = (0, mu.A)(),
          {
            loadingOverlayVisible: lu
          } = (0, du.l)(["loadingOverlayVisible"]),
          fu = (0, Pu.t)(),
          [bu, cu] = (0, Uu.useState)(!1),
          [Yu, hu] = (0, Uu.useState)(!0),
          [Du, Mu] = (0, Uu.useState)(null),
          Gu = (0, mj.b)(),
          wu = (0, eu.h)("respawnButtonText"),
          au = (0, eu.h)("usePlayAgainButton"),
          ou = (0, eu.h)("useRespawnButton"),
          {
            gameNameWithVariation: ku
          } = (0, Ju.f)("connectedGame"),
          vu = (0, Uu.useRef)(pu.e.get("secsToRespawn")),
          Ku = (0, Uu.useRef)(Nu.gameBridge.latest("localPlayerAlive")),
          Vu = (0, Uu.useRef)(pu.e.get("secsToRespawn")),
          ru = (0, Uu.useRef)(pu.e.get("autoRespawn")),
          Qu = (0, Uu.useRef)(null),
          iu = (0, Uu.useRef)(0),
          Su = (0, Uu.useRef)(0),
          [Iu, Fu] = (0, Uu.useState)(!1),
          Lu = (0, Uu.useRef)(null),
          tu = (0, Uu.useRef)(null),
          xu = (0, Uu.useRef)(null);
        (0, eu.e)("secsToRespawn", (uu => {
          console.log("Received new secsToRespawn with", uu, "and current canRespawn value of ", ru.current), Vu.current = uu, nu()
        })), (0, eu.e)("autoRespawn", (uu => {
          console.log("Received autorespawn", uu, "current canRespawn value of ", vu.current), ru.current = uu, nu()
        }));
        const Tu = uu => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", uu), uu || iu.current++, Ku.current = uu, nu()
        };
        (0, Ju.b)("localPlayerAliveSet", Tu), (0, qu.f)(xj.m, (uu => {
          "connected" === uu && !Ku.current && ru.current && vu.current <= 0 && (Su.current = 0, yu())
        })), (0, Uu.useEffect)((() => {
          const uu = Nu.gameBridge.latest("localPlayerAlive");
          uu === Ku.current ? (console.log("Updating respawn component from initial mount"), nu()) : Tu(uu)
        }), []), (0, Uu.useEffect)((() => {
          if (bu) {
            Fu(!1);
            const uu = setTimeout((() => {
              Fu(!0)
            }), 600);
            return () => {
              clearTimeout(uu)
            }
          }
          return () => {}
        }), [bu]);
        (0, Ju.b)("kill", (uu => {
          let {
            killer: Eu,
            victim: ju,
            withItem: su
          } = uu;
          if (!ju.local) return;
          const Uu = ((uu, Eu) => {
            if (uu.local) {
              const uu = Zs[Eu];
              return uu ? Zu(uu) : null
            }
            const ju = Es(uu, Zu);
            return ju ? Zu("respawnPage:killedBy", {
              name: ju
            }) : null
          })(Eu, su);
          Uu && Mu({
            text: Uu,
            deathCount: Ku.current ? iu.current + 1 : iu.current
          })
        }));
        const Hu = () => {
            bu && ru.current && Ku.current && Iu && cu(!1)
          },
          Au = bu && ru.current && Ku.current && Iu && !lu;
        (0, qu.f)("usedKeyboard", (() => {
          Hu()
        })), (0, Us.e)("respawn", Au, Hu);
        const nu = () => {
            hu(Vu.current >= 3 || !ru.current), Ku.current ? (clearInterval(Qu.current), Qu.current = null, ru.current ? Gu() : cu(!1)) : (cu(!0), vu.current = Vu.current, Gu(), console.log("Running respawn stats updated", ru.current, vu.current), ru.current && vu.current <= 0 && yu(), clearInterval(Qu.current), vu.current > 0 && (Qu.current = setInterval((() => {
              vu.current = Math.max(vu.current - 1, 0), Gu(), vu.current <= 0 && (clearInterval(Qu.current), Qu.current = null, pu.e.get("autoRespawn") && yu())
            }), 1e3)))
          },
          yu = () => {
            if (Date.now() - Su.current > 1e3) {
              const uu = () => {
                Nu.gameBridge.send("respawn", null), Su.current = Date.now()
              };
              pu.e.get("autoRespawn") ? uu() : (0, Lj.R)((() => {
                uu()
              }), "video_respawn")
            }
          },
          zu = (0, Uu.useMemo)((() => {
            var uu;
            return null === (uu = (0, Hj.j)(ku)) || void 0 === uu ? void 0 : uu.otherGameLinksOnRespawnPage
          }), [ku]),
          Ru = 0 === vu.current,
          uE = (null === Du || void 0 === Du ? void 0 : Du.deathCount) === iu.current ? Du.text : null,
          EE = bu && Yu && !lu,
          jE = fu && Au && null !== (uu = null === (Eu = (0, Bu.e)()) || void 0 === Eu ? void 0 : Eu.getBoundButton("menuConfirm")) && void 0 !== uu ? uu : null,
          sE = uu => Ru ? uu : Zu("respawnPage:actionInSeconds", {
            action: uu,
            seconds: vu.current
          });
        return (0, Cu.jsx)(Wj.b, {
          showing: bu,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Cu.jsx)(tj.b, {
            show: bu,
            "data-holds-camera-keeper": "",
            children: (0, Cu.jsxs)(Sj.c, {
              close: () => {
                cu(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: ru.current || lu ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, nj.is99NightsCrazyGamesBundle)() && (0, Cu.jsx)(Bj.d, {
                onClick: Tj.d,
                children: Zu("homePage:backToGames")
              }), (0, Cu.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Hu,
                children: [(0, Cu.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Cu.jsx)("div", {
                    ref: tu,
                    className: "RespawnSideSquareBannerDiv",
                    children: ju[0] > 925 && (0, Cu.jsx)(Fj.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: tu
                      },
                      showing: EE,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Cu.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Cu.jsxs)("div", {
                      className: Xu()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: fu
                      }),
                      children: [ru.current && (0, Cu.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Cu.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Cu.jsx)(Wu.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Zu("respawnPage:youDied")]
                        }), (0, Cu.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === jE && (Ku.current ? Zu("respawnPage:pressAnywhereToContinue") : Ru ? Zu("respawnPage:respawning") : sE(Zu("general:respawn"))), null !== jE && (0, Cu.jsx)(ss.d, {
                            text: Zu("controller:screensPressToContinue", {
                              button: ss.e
                            }),
                            glyph: jE,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), uE && (0, Cu.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: uE
                        })]
                      }), !ru.current && (0, Cu.jsxs)(Cu.Fragment, {
                        children: [(0, Cu.jsxs)("div", {
                          className: Xu()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !zu
                          }),
                          children: [au && (0, Cu.jsx)(Bj.p, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, Lj.R)((() => {
                                (0, du.j)("inGameReplay");
                                const uu = (0, Ij.c)(ku);
                                su(uu)
                              }), "video_start")
                            },
                            disabled: !Ru || !Iu,
                            touchPressOn: "pointerup",
                            children: sE(Zu("respawnPage:playAgain"))
                          }), ou && (0, Cu.jsx)(Bj.f, {
                            className: "RespawnPageButton",
                            onClick: yu,
                            padDefaultFocus: !au,
                            padBack: "sessionBasedGame:stayInLobby" === wu,
                            disabled: !Ru || !Iu,
                            touchPressOn: "pointerup",
                            children: sE(Zu(wu))
                          }), !(0, nj.is99NightsCrazyGamesBundle)() && (0, Cu.jsx)(Bj.R, {
                            className: "RespawnPageButton",
                            onClick: Tj.d,
                            disabled: !Ru || !Iu,
                            touchPressOn: "pointerup",
                            children: sE(Zu("respawnPage:exitGame"))
                          })]
                        }), zu && (0, Cu.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Cu.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: Zu("respawnPage:orTry")
                          }), (0, Cu.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: zu.map((uu => (0, Cu.jsx)(Aj.e, {
                              source: {
                                type: "game",
                                gameNameWithVariation: uu
                              },
                              disabled: !Ru || !Iu,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, du.j)("inGameReplay");
                                const Eu = (0, Ij.c)(uu);
                                su(Eu)
                              }
                            }, uu)))
                          })]
                        })]
                      }), (0, Cu.jsx)(Rj, {
                        showing: bu,
                        enabled: Iu,
                        autoRespawn: ru.current
                      })]
                    })
                  }), (0, Cu.jsx)("div", {
                    ref: xu,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Cu.jsx)("div", {
                  ref: Lu,
                  className: "RespawnBottom",
                  children: (0, Cu.jsx)(Fj.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Lu
                    },
                    showing: EE,
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
    var ls = ju(37001);
    const qs = [{
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
      fs = [{
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
      Cs = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      bs = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      cs = (0, Uu.memo)((function() {
        const uu = (0, Uu.useRef)(null),
          Eu = (0, Uu.useRef)(null);

        function ju(ju) {
          var su;
          let {
            FE: Uu,
            screenPos: Zu
          } = ju;
          const Xu = uu.current;
          null === (su = Eu.current) || void 0 === su || su.cancel(), Xu.classList.remove("HitmarkerCrit"), Zu ? (Xu.style.left = `${Zu.x}%`, Xu.style.top = `${Zu.y}%`) : (Xu.style.left = "50%", Xu.style.top = "50%"), Xu.style.rotate = 16 * (Math.random() - .5) + "deg", Uu && Xu.classList.add("HitmarkerCrit");
          const lu = Xu.animate(Uu ? fs : qs, Uu ? bs : Cs);
          Eu.current = lu, lu.onfinish = () => {
            Xu.classList.remove("HitmarkerCrit")
          }
        }
        return (0, qu.f)("localGunHitmarker", (uu => {
          let {
            FE: Eu
          } = uu;
          ju({
            FE: Eu
          })
        })), (0, qu.f)("yourAttackHit", (uu => {
          let {
            FE: Eu,
            screenPos: su
          } = uu;
          ju({
            FE: Eu,
            screenPos: du.d.get("isTouchScreen") ? su : void 0
          })
        })), (0, qu.f)("sendHitmarker", (uu => {
          let {
            FE: Eu,
            screenPos: su
          } = uu;
          ju({
            FE: Eu,
            screenPos: su
          })
        })), (0, Cu.jsxs)("div", {
          ref: uu,
          className: "Hitmarker",
          children: [(0, Cu.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Cu.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Cu.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Cu.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Ns() {
      const uu = (0, Uu.useRef)(!0);
      return (0, qu.f)("localBlockMined", (() => {
        ZE.e.play("blockMined")
      })), (0, qu.f)("yourAttackHit", (() => {
        ZE.e.play("hitLanded")
      })), (0, qu.f)("localGunHitmarker", (() => {
        ZE.e.play("hitLanded")
      })), (0, qu.f)("damagedByOtherPlayer", (() => {
        ZE.e.play("damageTaken")
      })), (0, Ju.b)("localPlayerAliveSet", (Eu => {
        !Eu && uu.current && ZE.e.play("death"), uu.current = Eu
      })), null
    }
    var Os = ju(1971),
      Ys = ju(37013),
      hs = ju.n(Ys),
      Ds = ju(2083),
      gs = ju(2070),
      Ms = ju(3475),
      es = ju(34565);
    const Gs = us.oe ? 7e7 : 7e3,
      ps = hs()("#ffffff").alpha(.5).string();

    function ws(uu) {
      const Eu = (0, Ms.b)(uu);
      return void 0 !== Eu && "Gun" === (0, es.itemTypeOf)(Eu)
    }

    function ds(uu) {
      if (!uu) return console.error(`Killfeed colour was ${uu}`), ps;
      try {
        return hs()(uu).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${uu} is not a colour`), ps
      }
    }
    const as = (0, Uu.memo)((function() {
      const {
        t: uu
      } = (0, mu.A)(), Eu = (0, Uu.useRef)([]), ju = (0, mj.b)();
      return (0, Ju.b)("kill", (function(su) {
        var Uu, Zu;
        let {
          killer: Xu,
          victim: lu,
          withItem: qu,
          killstreak: fu
        } = su;
        const Cu = Eu.current;
        if (Cu.length >= 3) {
          const uu = Cu.shift();
          clearTimeout(uu.timeout)
        }
        const bu = Nu.gameBridge.latest("hiddenPlayerNames"),
          cu = {
            deadName: Es(lu, uu),
            killerName: Es(Xu, uu),
            isFriend: {
              killer: (0, Ds.e)(Xu.realName, bu),
              dead: (0, Ds.e)(lu.realName, bu)
            },
            withItem: qu,
            wasHeadshot: !1,
            killstreak: fu,
            timeout: setTimeout((() => {
              Cu.shift(), ju()
            }), Gs),
            reactId: `${null!==(Uu=Xu.id)&&void 0!==Uu?Uu:Xu.shownName}|${null!==(Zu=lu.id)&&void 0!==Zu?Zu:lu.shownName}|${Date.now()}`,
            killerBackground: ds(Xu.colour),
            deadBackground: ds(lu.colour)
          };
        Cu.push(cu), ju()
      })), (0, Uu.useEffect)((() => {
        const uu = Eu.current;
        return () => {
          for (; uu.length > 0;) {
            const {
              timeout: Eu
            } = uu.pop();
            clearTimeout(Eu)
          }
        }
      }), []), (0, Cu.jsx)("div", {
        className: "Killfeed",
        children: Eu.current.map((uu => {
          let {
            deadName: Eu,
            killerName: ju,
            withItem: su,
            wasHeadshot: Uu,
            killstreak: Zu,
            killerBackground: Xu,
            deadBackground: lu,
            reactId: qu,
            isFriend: fu
          } = uu;
          return (0, Cu.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Xu} calc(100% - 10rem), ${lu} 100%)`
            },
            children: [Zu >= 2 ? (0, Cu.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, us.N)(Zu)
            }) : null, (0, Cu.jsx)("div", {
              className: "KillfeedKillerName",
              children: ju
            }), fu.killer && (0, Cu.jsx)(gs.e, {}), (0, Cu.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: ws(su) ? "7.5vmin" : "5vmin"
              },
              children: (0, Cu.jsx)(Os.d, {
                itemName: su,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Uu ? (0, Cu.jsx)(Wu.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Cu.jsx)("div", {
              className: "KillfeedDeadName",
              children: Eu
            }), fu.dead && (0, Cu.jsx)(gs.e, {})]
          }, qu)
        }))
      })
    }));
    var Ps = ju(37061),
      os = ju(1187),
      ks = ju.n(os),
      ms = ju(3599),
      vs = ju(37066),
      Ks = ju(1353);
    const Vs = {},
      rs = (0, Uu.memo)((function() {
        const uu = (0, Uu.useRef)({}),
          [, Eu] = (0, Uu.useReducer)((uu => uu + 1), 0);
        (0, qu.f)("setDirectionArrow", (ju => {
          let {
            id: su,
            position: Uu,
            style: Zu,
            text: Xu,
            rE: lu
          } = ju;
          const qu = uu.current,
            fu = Zu || Vs,
            Cu = Xu,
            bu = qu[su];
          if (!bu) return qu[su] = {
            position: Uu,
            style: fu,
            text: Cu,
            shouldShowDistance: lu,
            qI: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void Eu();
          const cu = !ks()(bu.style, fu) || !ks()(bu.text, Cu) || bu.shouldShowDistance !== lu;
          bu.position = Uu, bu.style = fu, bu.text = Cu, bu.shouldShowDistance = lu, cu && Eu()
        })), (0, qu.f)("clearDirectionArrow", (ju => {
          let {
            id: su
          } = ju;
          const Uu = uu.current;
          if (null === su)
            for (const uu in Uu) delete Uu[uu];
          else delete Uu[su];
          Eu()
        })), (0, Uu.useEffect)((() => {
          const Eu = uu.current,
            ju = (0, Ks.u)((() => {
              ! function(uu) {
                const Eu = Nu.gameBridge.lookup("localPos", null),
                  ju = ms.b - Qs,
                  su = (0, ms.h)() - Qs;
                for (const Uu in uu) {
                  const Zu = uu[Uu];
                  if (!Zu.qI) continue;
                  const Xu = Nu.gameBridge.lookup("screenPos", Zu.position),
                    lu = Xu.x - 50,
                    qu = Xu.y - 50;
                  Xu.x === Zu.lastScreenX && Xu.y === Zu.lastScreenY || (Zu.lastScreenX = Xu.x, Zu.lastScreenY = Xu.y, Zu.qI.style.translate = `${Xu.x}vw ${Xu.y}vh`, Zu.chevronElement && (Zu.chevronElement.style.rotate = `${us.b.fastATan2(qu,lu)}rad`));
                  const fu = Math.abs(lu) < ju && Math.abs(qu) < su;
                  if (fu !== Zu.onScreen && (Zu.onScreen = fu, Zu.qI.classList.toggle("DirectionArrowOnScreen", fu)), Zu.shouldShowDistance && Zu.distanceElement) {
                    const uu = Zu.position[0] - Eu[0],
                      ju = Zu.position[1] - Eu[1],
                      su = Zu.position[2] - Eu[2],
                      Uu = Math.round(Math.sqrt(uu * uu + ju * ju + su * su));
                    (-1 === Zu.lastRenderedDist || (0, vs.c)(Uu, Zu.lastRenderedDist, Zu.lastDistUpdateTime)) && (Zu.distanceElement.textContent = `${Uu}m`, Zu.lastRenderedDist = Uu, Zu.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(Eu)
            }));
          return () => {
            ju();
            for (const uu in Eu) delete Eu[uu]
          }
        }), []);
        const ju = uu.current;
        return (0, Cu.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(ju).map((uu => {
            var Eu;
            let [su, Uu] = uu;
            const Zu = null !== (Eu = (0, Mu.Yb)(Uu.style)) && void 0 !== Eu ? Eu : "#ffffff";
            return (0, Cu.jsxs)("div", {
              ref: uu => {
                ju[su] && (ju[su].qI = uu)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Uu.style.fontSize,
                opacity: Uu.style.opacity
              },
              children: [(0, Cu.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: uu => {
                  ju[su] && (ju[su].chevronElement = uu)
                },
                children: [(0, Cu.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Cu.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Cu.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Cu.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Cu.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Zu
                    }
                  }), (0, Cu.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Zu
                    }
                  })]
                })]
              }), (0, Cu.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Zu,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Zu}`
                }
              }), Uu.text && (0, Cu.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Zu,
                  fontWeight: Uu.style.fontWeight,
                  fontStyle: Uu.style.fontStyle
                },
                children: (0, Cu.jsx)(fu.d, {
                  text: Uu.text
                })
              }), Uu.shouldShowDistance && (0, Cu.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: uu => {
                  ju[su] && (ju[su].distanceElement = uu)
                },
                style: {
                  color: Zu,
                  fontWeight: Uu.style.fontWeight,
                  fontStyle: Uu.style.fontStyle
                }
              })]
            }, su)
          }))
        })
      })),
      Qs = .5;
    const is = (0, Uu.memo)((function(uu) {
        let {
          isTouchScreen: Eu
        } = uu;
        return (0, Cu.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Cu.jsx)(Fs, {}), Eu && (0, Cu.jsx)(Yj, {})]
        })
      })),
      Ws = {
        readyForNext: 0,
        running: 1
      },
      Ss = 50;

    function Is(uu) {
      console.assert(uu.state.current === Ws.readyForNext);
      const Eu = uu.queue.current,
        ju = uu.foreground.current;
      if (Eu.length > 0 && ju) {
        const {
          toFraction: su,
          toDuration: Uu
        } = Eu.shift();
        uu.state.current = Ws.running, ju.style.transition = `transform ${Math.max(Uu-Ss,0)}ms linear`, ju.classList.remove("Complete"), uu.timeout.current = setTimeout((() => {
          ju.style.transform = `scaleX(${su})`, uu.timeout.current = setTimeout((() => {
            1 === su && ju.classList.add("Complete"), uu.state.current = Ws.readyForNext, Is(uu)
          }), Math.max(Uu - Ss, 0))
        }), Ss)
      }
    }

    function Fs() {
      const uu = (0, Uu.useRef)([]),
        Eu = (0, Uu.useRef)(Ws.readyForNext),
        ju = (0, Uu.useRef)(void 0),
        su = (0, Uu.useRef)(null),
        Zu = (0, Uu.useRef)({
          queue: uu,
          state: Eu,
          timeout: ju,
          foreground: su
        }),
        Xu = (0, eu.h)("showProgressBar");
      if ((0, Uu.useLayoutEffect)((() => (Xu && Eu.current === Ws.readyForNext && Is(Zu.current), () => {
          Eu.current = Ws.readyForNext, clearTimeout(ju.current), Xu && (uu.current.length = 0)
        })), [Xu]), (0, qu.f)("progressBarUpdate", (ju => {
          let {
            toFraction: su,
            toDuration: Uu
          } = ju;
          uu.current.push({
            toFraction: su,
            toDuration: Uu
          }), Eu.current === Ws.readyForNext && Is(Zu.current)
        })), !Xu) return null;
      return (0, Cu.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Cu.jsx)("div", {
          className: "ProgressBarForeground",
          ref: su,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var Bs = ju(37075),
      Ls = ju(2589);
    const ts = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function xs(uu) {
      let {
        classes: Eu,
        gone: ju
      } = uu;
      const su = document.documentElement;
      su.classList.remove(...Eu);
      for (const Uu of ju) Uu.style.display = "block";
      return () => {
        su.classList.add(...Eu);
        for (const uu of ju) uu.style.display = ""
      }
    }

    function Ts(uu) {
      const {
        isTouchScreen: Eu
      } = (0, du.l)(["isTouchScreen"]);
      (0, Uu.useLayoutEffect)((() => {
        if (!Eu) return;
        const ju = uu.current,
          su = document.querySelector(`.${Bs.i}`),
          Uu = uu => {
            const Eu = () => {
              const Eu = uu.querySelector(Ls.f),
                su = function(uu) {
                  const Eu = document.documentElement;
                  return {
                    classes: YE.D.map(ME.t).filter((uu => Eu.classList.contains(uu))),
                    gone: [...uu.querySelectorAll(`.TopRightTrayToggle.${Ls.g}`)]
                  }
                }(uu);
              Eu && function(uu, Eu) {
                (0, Ls.A)(uu, Eu.classes.length > 0 || Eu.gone.length > 0, (() => xs(Eu)))
              }(Eu, su);
              const Uu = `${Math.floor(function(uu,Eu,ju){const su=document.documentElement,Uu=su.classList.contains((0,ME.y)("menu")),Zu=su.style.getPropertyValue((0,ME.E)("menu"));if(!Uu&&""===Zu)return uu.getBoundingClientRect().left;const Xu=Eu?(0,Ls.n)(Eu):()=>{},lu=xs(ju);su.classList.remove((0,ME.y)("menu")),su.style.removeProperty((0,ME.E)("menu"));const qu=uu.getBoundingClientRect().left;return lu(),Xu(),Uu&&su.classList.add((0,ME.y)("menu")),""!==Zu&&su.style.setProperty((0,ME.E)("menu"),Zu),qu}(uu,Eu,su)-ju.getBoundingClientRect().left-4)}px`;
              ju.style.getPropertyValue("--InGameHeaderMaxWidth") !== Uu && ju.style.setProperty("--InGameHeaderMaxWidth", Uu)
            };
            Eu();
            const Uu = new ResizeObserver(Eu);
            Uu.observe(uu), Uu.observe(su), window.addEventListener("resize", Eu);
            const Zu = () => ts.map((uu => document.documentElement.style.getPropertyValue(uu))).join();
            let Xu = Zu();
            const lu = new MutationObserver((() => {
              const uu = Zu();
              uu !== Xu && (Xu = uu, Eu())
            }));
            lu.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const qu = (0, Gu.l)(ME.d, Eu),
              fu = new MutationObserver(Eu);
            return fu.observe(uu, {
              childList: !0,
              subtree: !0
            }), () => {
              Uu.disconnect(), lu.disconnect(), fu.disconnect(), qu(), window.removeEventListener("resize", Eu);
              const ju = uu.querySelector(Ls.f);
              ju && (0, Ls.n)(ju)
            }
          },
          Zu = () => su.querySelector(".TopRightIconsContainer"),
          Xu = Zu();
        let lu;
        if (Xu) lu = Uu(Xu);
        else {
          const uu = new MutationObserver((() => {
            const Eu = Zu();
            Eu && (uu.disconnect(), lu = Uu(Eu))
          }));
          uu.observe(su, {
            childList: !0,
            subtree: !0
          }), lu = () => {
            uu.disconnect()
          }
        }
        return () => {
          lu(), ju.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [Eu, uu])
    }
    var Hs = ju(3872),
      As = ju(3870),
      ns = ju(1687),
      ys = ju(1559),
      zs = ju(1693),
      Rs = ju(1779),
      uU = ju(1906),
      EU = ju(1183),
      jU = ju(4456),
      sU = ju(1413);
    const UU = 2e4,
      ZU = 6e5,
      XU = new Set;

    function lU() {
      const {
        gameEntrySource: uu,
        loadingOverlayVisible: Eu
      } = (0, du.l)(["gameEntrySource", "loadingOverlayVisible"]), ju = (0, Ju.d)("connectedGame", (uu => (0, jU.h)(uu) ? uu.lobbyName : null)), su = (0, Ju.f)("localPlayerAlive"), Zu = (0, Ju.d)("players", (uu => null !== uu.localId && void 0 !== uu.byId[uu.localId])), [Xu, lu] = (0, Uu.useState)(null);
      return !Eu && su && Zu && null !== ju && Xu !== ju && lu(ju), (0, Uu.useEffect)((() => {
        if (!(0, jU.l)(uu) || null === Xu || Xu !== ju || XU.has(Xu)) return;
        const Eu = setTimeout((() => {
          XU.add(Xu), async function(uu) {
            const Eu = await EU.userContextManager.getCurrentUserContext();
            let ju;
            try {
              ju = (await ys.b.getWorldOwnerFriendOffer(Eu)).owner
            } catch (Uu) {
              return void console.warn("Couldn't ask who owns this world", Uu)
            }
            if (!ju || (0, jU.t)(ju.name, Date.now())) return;
            const su = ju;
            ! function(uu, Eu) {
              const ju = Date.now() + ZU;
              let su = Date.now(),
                Uu = 0;
              const Zu = () => {
                const Xu = Date.now(),
                  lu = Nu.gameBridge.latest("connectedGame");
                lu.lobbyName !== uu || Xu > ju || (null === lu.websocketUrl ? su = 1 / 0 : su === 1 / 0 && !du.d.get("loadingOverlayVisible") && Nu.gameBridge.latest("localPlayerAlive") && (su = Xu + UU), Uu = Xu < su || !Nu.gameBridge.latest("localPlayerAlive") || du.d.get("isUiHidden") || du.d.get("isUiHiddenByCamera") || (0, Rs.isTypingInInput)() || du.d.get("loadingOverlayVisible") || (0, ns.s)() || (0, Hs.e)() || (0, sU.i)() ? 0 : Uu + 1, Uu >= 2 ? Eu() : setTimeout(Zu, 500))
              };
              Zu()
            }(uu, (() => {
              (0, jU.f)(zs.b.getSocialState().friends, su.name) || ((0, jU.p)(su.name, Date.now()), uU.f.showWorldOwnerOffer(su), (0, Uj.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Xu).catch((uu => {
            console.error("Failed to offer the world's owner as a friend", uu)
          }))
        }), UU);
        return () => {
          clearTimeout(Eu)
        }
      }), [uu, Xu, ju]), null
    }
    var qU = ju(1967);
    const fU = (0, Uu.memo)((function(uu) {
        let {
          durationMs: Eu,
          endsAtMs: ju
        } = uu;
        const [, su] = (0, Uu.useReducer)((uu => uu + 1), 0), Zu = null === ju ? Eu : Math.max(ju - Date.now(), 0);
        return (0, Uu.useEffect)((() => {
          if (null === ju || Zu <= 0) return;
          const uu = setTimeout(su, Zu - 1e3 * (Math.ceil(Zu / 1e3) - 1));
          return () => {
            clearTimeout(uu)
          }
        })), (0, Cu.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, us.$)(Zu)
        })
      })),
      CU = (0, Uu.memo)((function() {
        const uu = (0, Ju.f)("localEffects");
        return (0, Cu.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(uu).map((uu => {
            let [Eu, {
              icon: ju,
              displayName: su,
              durationMs: Uu,
              endsAtMs: Zu,
              level: Xu
            }] = uu;
            return (0, Cu.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Cu.jsx)(qU.b, {
                icon: ju,
                className: "EffectInfoIcon"
              }), (0, Cu.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Uu ? "0" : "1rem"
                },
                children: [(0, Cu.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Cu.jsx)(fu.d, {
                    text: null !== su && void 0 !== su ? su : Eu,
                    className: "EffectInfoName SmallTextBold"
                  }), Xu > 1 && (0, Cu.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, us.N)(Xu)
                  })]
                }), null !== Uu && (0, Cu.jsx)(fU, {
                  durationMs: Uu,
                  endsAtMs: Zu
                })]
              })]
            }, Eu)
          }))
        })
      }));
    var bU = ju(37078),
      cU = ju(37299),
      NU = ju(202),
      OU = ju(2888),
      YU = ju(3093);

    function hU(uu, Eu) {
      (0, Uu.useLayoutEffect)((() => {
        let Eu, ju;
        const su = requestAnimationFrame((() => {
          ju = setTimeout((() => {
            ju = void 0;
            const su = uu();
            Eu = "function" === typeof su ? su : void 0
          }), 0)
        }));
        return () => {
          var uu;
          cancelAnimationFrame(su), clearTimeout(ju), null === (uu = Eu) || void 0 === uu || uu()
        }
      }), Eu)
    }
    const DU = [5, 5, 5],
      gU = [7, 4, 4, 4];

    function MU(uu) {
      return uu.reduce(((uu, Eu) => uu + Eu), 0)
    }

    function eU(uu, Eu, ju, su, Uu) {
      const Zu = uu.getContext("2d");
      if (!Zu) return null;
      const Xu = Eu.color,
        lu = `${Eu.fontWeight} ${Uu}px ${Eu.fontFamily}`,
        qu = () => {
          uu.width = ju, uu.height = su, Zu.fillStyle = Xu, Zu.textAlign = "center", Zu.textBaseline = "middle", Zu.font = lu
        };
      return qu(), {
        ctx: Zu,
        reset: qu
      }
    }
    const GU = (0, Uu.memo)((function(uu) {
      let {
        show: Eu
      } = uu;
      const ju = (0, Uu.useRef)(null),
        su = (0, Uu.useRef)(null),
        Zu = (0, Uu.useRef)(null),
        Xu = (0, Yu.n)();
      return (0, Uu.useEffect)((() => Xu.whenShown((() => {
        let uu = 0,
          Eu = 0,
          ju = performance.now(),
          Uu = 0;
        const Xu = (0, Ks.u)((() => {
          var Xu, lu, qu;
          uu++, Eu++;
          const fu = performance.now();
          if (fu - ju < 1e3) return;
          const Cu = Math.round(uu / (fu - ju) * 1e3);
          if (su.current = Cu, null === (Xu = Zu.current) || void 0 === Xu || Xu.call(Zu, Cu), uu = 0, ju = fu, Cu >= 55) return void(Uu = 0);
          if (Uu += 1, Uu < 15) return;
          const bu = null !== (lu = wu.k.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== lu ? lu : 0,
            [cu, Ou] = pu.e.get("minChunkAddDist");
          if (function(uu, Eu) {
              const ju = Nu.gameBridge.lookup("rM", null);
              return null !== ju && (ju.horizontal > uu || ju.vertical > Eu)
            }(cu, Ou) && (null !== (qu = wu.k.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== qu ? qu : 0) + 432e5 < Date.now() && bu < 3) {
            wu.k.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            Xj.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((uu => {
              "notificationTornDown" !== uu && (uu ? (Nu.gameBridge.send("setChunkAddDistance", {
                horizontal: cu,
                vertical: Ou
              }), wu.k.setItem("chunkHorizAddDist", cu), wu.k.setItem("chunkVertAddDist", Ou), Gu.h.TY("updatedChunkLoadDist"), wu.k.setItem("decreaseLoadDistPromptDeniedCount", 0)) : wu.k.setItem("decreaseLoadDistPromptDeniedCount", bu + 1))
            }))
          }
        }));
        let lu = performance.now();
        Eu = 0;
        let qu = null,
          fu = !document.hidden,
          Cu = !1;

        function bu() {
          const uu = performance.now() - lu,
            ju = 1e3 * Eu / uu;
          fu && !Cu && (null === qu && (qu = ju), OU.b.setFps(ju, qu)), Eu = 0, lu = performance.now()
        }
        let cu = setInterval(bu, YU.e);

        function Ou() {
          Eu = 0, lu = performance.now(), clearInterval(cu), cu = setInterval(bu, YU.e)
        }

        function Yu() {
          const uu = fu;
          fu = !document.hidden, !uu && fu && Ou()
        }
        document.addEventListener("visibilitychange", Yu);
        const hu = (0, Gu.l)(xj.m, (uu => {
          const Eu = Cu;
          Cu = (0, xj.p)(uu), Eu && !Cu && Ou()
        }));
        return () => {
          Xu(), document.removeEventListener("visibilitychange", Yu), hu(), clearInterval(cu)
        }
      }))), [Xu]), hU((() => {
        var uu;
        if (!Eu || Zu.current) return;
        const Uu = ju.current,
          Xu = window.getComputedStyle(Uu.parentElement),
          lu = null !== (uu = window.devicePixelRatio) && void 0 !== uu ? uu : 1,
          qu = parseFloat(Xu.fontSize) * lu,
          fu = Math.round(3 * qu),
          Cu = Math.round(qu),
          bu = eU(Uu, Xu, fu, Cu, qu);
        if (!bu) return;
        const {
          ctx: cu,
          reset: Nu
        } = bu, Ou = uu => {
          Nu(), cu.fillText(uu.toString(), Uu.width / 2, Uu.height / 2)
        };
        Zu.current = Ou, null !== su.current && Ou(su.current)
      }), [Eu]), (0, Cu.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: Eu ? "flex" : "none"
        },
        children: [(0, Cu.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Cu.jsx)("canvas", {
          className: "FpsCanvas",
          ref: ju,
          width: 48,
          height: 16
        })]
      })
    }));

    function pU(uu) {
      return Math.sign(uu) * Math.round(100 * Math.abs(uu))
    }

    function wU(uu) {
      let {
        getCoordinates: Eu,
        showChunkCoords: ju,
        columns: su
      } = uu;
      const Zu = (0, Uu.useRef)(null);
      return hU((() => {
        var uu;
        const Uu = Zu.current,
          Xu = window.getComputedStyle(Uu.parentElement),
          lu = null !== (uu = window.devicePixelRatio) && void 0 !== uu ? uu : 1,
          qu = parseFloat(Xu.fontSize) * lu,
          fu = Math.round(qu * MU(su)),
          Cu = Math.round(qu),
          bu = eU(Uu, Xu, fu, Cu, qu);
        if (!bu) return;
        const {
          ctx: cu,
          reset: Ou
        } = bu;
        let Yu = !0,
          hu = 0,
          Du = 0,
          gu = 0,
          Mu = 0,
          eu = 0,
          Gu = 0;
        const pu = () => {
          Yu = !0
        };
        document.fonts.load(cu.font).then(pu, pu);
        const wu = () => {
          Ou(), pu()
        };
        Uu.addEventListener("contextrestored", wu);
        let Ju = performance.now();
        const du = (0, Ks.y)((() => {
          var uu, Zu, Xu, lu, fu, Cu;
          const bu = performance.now();
          bu - Ju >= 1e3 && (Ju = bu, Ou(), pu());
          const [wu, du, au] = Eu(), Pu = pU(wu), ou = pU(du), ku = pU(au);
          let mu = null;
          if (ju) {
            const uu = Nu.gameBridge.lookup("localPos", null);
            mu = (0, EE.Y)(uu[0], uu[1], uu[2])
          }
          const vu = null !== (uu = null === (Zu = mu) || void 0 === Zu ? void 0 : Zu[0]) && void 0 !== uu ? uu : 0,
            Ku = null !== (Xu = null === (lu = mu) || void 0 === lu ? void 0 : lu[1]) && void 0 !== Xu ? Xu : 0,
            Vu = null !== (fu = null === (Cu = mu) || void 0 === Cu ? void 0 : Cu[2]) && void 0 !== fu ? fu : 0;
          if (!Yu && Pu === hu && ou === Du && ku === gu && vu === Mu && Ku === eu && Vu === Gu) return;
          Yu = !1, hu = Pu, Du = ou, gu = ku, Mu = vu, eu = Ku, Gu = Vu;
          const ru = [(Pu / 100).toFixed(2), (ou / 100).toFixed(2), (ku / 100).toFixed(2)];
          mu && ru.unshift(`${vu} ${Ku} ${Vu}`), cu.clearRect(0, 0, Uu.width, Uu.height);
          const Qu = Uu.height / 2;
          let iu = 0;
          for (let Eu = 0; Eu < ru.length; Eu++) {
            const uu = qu * su[Eu];
            cu.fillText(ru[Eu], iu + uu / 2, Qu, uu), iu += uu
          }
        }));
        return () => {
          du(), Uu.removeEventListener("contextrestored", wu)
        }
      }), [Eu, ju, su]), (0, Cu.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Cu.jsx)("canvas", {
          ref: Zu,
          className: "CoordinateCanvas",
          width: 16 * MU(su),
          height: 16
        })
      })
    }
    const JU = (0, Uu.memo)((function() {
        const uu = (0, Uu.useCallback)((() => {
          const uu = Nu.gameBridge.lookup("localPos", null);
          return [uu[0], uu[1], uu[2]]
        }), []);
        return (0, Cu.jsx)(wU, {
          getCoordinates: uu,
          showChunkCoords: !1,
          columns: DU
        })
      })),
      dU = (0, Uu.memo)((function() {
        const uu = (0, Uu.useCallback)((() => {
          const uu = Nu.gameBridge.lookup("localPos", null),
            Eu = NU.e.hO;
          let ju = uu[0] % Eu,
            su = uu[1] % Eu,
            Uu = uu[2] % Eu;
          return ju < 0 && (ju += Eu), su < 0 && (su += Eu), Uu < 0 && (Uu += Eu), [ju, su, Uu]
        }), []);
        return (0, Cu.jsx)(wU, {
          getCoordinates: uu,
          showChunkCoords: !0,
          columns: gU
        })
      }));
    var aU = ju(2114),
      PU = ju(1393),
      oU = ju(1069),
      kU = ju(1278),
      mU = ju(37145),
      vU = ju(1510),
      KU = ju(3336);
    const VU = (0, Uu.memo)((function() {
      const uu = (0, eu.h)("maxAuraLevel");
      return 0 === uu ? null : (0, Cu.jsx)(rU, {
        maxLevel: uu
      })
    }));

    function rU(uu) {
      let {
        maxLevel: Eu
      } = uu;
      const ju = (0, eu.h)("auraPerLevel"),
        [su, Zu] = (0, Uu.useState)((() => {
          var uu;
          return null !== (uu = Nu.gameBridge.latest("aura")) && void 0 !== uu ? uu : void 0
        })),
        [Xu, lu] = (0, Uu.useState)((() => Mu(su))),
        [qu, fu] = (0, Uu.useReducer)((uu => uu + 1), 0),
        bu = (0, Uu.useRef)(null),
        cu = (0, Uu.useRef)([]),
        Ou = (0, Uu.useRef)({
          width: 0,
          level: 0
        }),
        Yu = (0, Uu.useRef)(null),
        hu = (0, Uu.useRef)(null);

      function Du() {
        if (null !== Yu.current) return;
        if (0 === cu.current.length) return;
        const {
          width: uu,
          level: Eu
        } = cu.current.shift();
        let ju;
        if (Eu !== Ou.current.level && Eu > Ou.current.level !== uu > Ou.current.width) {
          const su = Eu > Ou.current.level;
          ju = su ? uu : 100 - uu, bu.current.style.transition = "none", bu.current.style.width = su ? "0%" : "100%", bu.current.offsetWidth
        } else ju = Math.abs(uu - Ou.current.width);
        const su = 100 * ju / 20;
        bu.current.style.transition = `width ${su}ms linear`, lu(uu), Ou.current = {
          width: uu,
          level: Eu
        }, cu.current.length > 0 && (Yu.current = setTimeout((() => {
          Yu.current = null, Du()
        }), su))
      }

      function Mu(uu) {
        return Math.floor(uu / ju) === Eu ? 100 : uu % ju / ju * 100
      }
      return (0, Uu.useEffect)((() => () => {
        clearTimeout(Yu.current), clearTimeout(hu.current), Yu.current = null, hu.current = null
      }), []), (0, Ju.b)("aura", (uu => {
        if (hu.current && clearTimeout(hu.current), null === uu) return clearTimeout(Yu.current), hu.current = null, Yu.current = null, cu.current = [], Ou.current = {
          width: 0,
          level: 0
        }, Zu(void 0), void lu(0);
        hu.current = setTimeout((() => {
          const Eu = Math.floor(su / ju),
            Uu = Math.floor(uu / ju),
            Xu = Mu(uu);
          uu > su && mU.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Uu > Eu ? (Uu % 5 === 0 && mU.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), fu(), cu.current.push({
            width: 100,
            level: Eu
          })) : Uu < Eu && cu.current.push({
            width: 0,
            level: Eu
          }), uu === su && Uu === Eu || cu.current.push({
            width: Xu,
            level: Uu
          }), Zu(uu), Du()
        }), 50)
      })), (0, gu.f)(), (0, Cu.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Cu.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Cu.jsx)(vU.c, {
            showSignal: qu,
            particleElement: (0, Cu.jsx)("img", {
              src: (0, KU.h)("glint"),
              alt: ""
            })
          }), (0, Cu.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, KU.h)("glint"),
            alt: "aura"
          }), (0, Cu.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== su && void 0 !== su ? su : 0) / ju)
          })]
        }), (0, Cu.jsx)("div", {
          className: "AuraBar",
          children: (0, Cu.jsx)("div", {
            ref: bu,
            className: "AuraBarBackground",
            style: {
              width: `${Xu}%`
            }
          })
        })]
      })
    }
    var QU = ju(2698);

    function iU(uu) {
      uu.timed && (uu.endedAnimation = uu.timed.animation, uu.timed = null)
    }
    const WU = (0, Uu.memo)((function() {
      const uu = (0, Uu.useRef)(null),
        Eu = (0, Uu.useRef)(null),
        ju = (0, Uu.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, qu.f)("middleScreenBarInitiate", (uu => {
        var su;
        let {
          duration: Uu,
          LU: Zu,
          horizBarRemOffset: Xu
        } = uu;
        const lu = ju.current;
        iU(lu);
        const qu = Eu.current;
        if (!(Uu >= 0) || !qu) return;
        null === (su = lu.endedAnimation) || void 0 === su || su.cancel(), lu.endedAnimation = null;
        const fu = qu.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Uu,
          fill: "forwards"
        });
        lu.timed = {
          LU: Zu,
          horizBarRemOffset: Xu,
          animation: fu
        }
      })), (0, qu.f)("middleScreenBarRemove", (() => {
        iU(ju.current)
      })), (0, Uu.useEffect)((() => {
        const su = ju.current;
        let Uu = Number.NaN,
          Zu = Number.NaN,
          Xu = Number.NaN;
        return (0, Ks.t)((() => {
          var ju, lu, qu, fu;
          const Cu = uu.current,
            bu = Eu.current;
          if (!Cu || !bu) return;
          null !== (ju = su.timed) && void 0 !== ju && ju.LU && "finished" === su.timed.animation.playState && iU(su), null === (lu = su.endedAnimation) || void 0 === lu || lu.cancel(), su.endedAnimation = null;
          let cu = su.timed ? 1 : 0;
          if (!su.timed) {
            const uu = Nu.gameBridge.lookup("momentumFrac", null);
            cu = uu > 0 ? 1 : 0, uu !== Xu && (Xu = uu, bu.style.transform = `scaleX(${uu})`)
          }
          const Ou = null !== (qu = null === (fu = su.timed) || void 0 === fu ? void 0 : fu.horizBarRemOffset) && void 0 !== qu ? qu : 0;
          Ou === Uu && cu === Zu || (Uu = Ou, Zu = cu, Cu.style.transform = `translateX(calc(-50% + ${Ou}rem)) scaleX(${cu})`)
        }))
      }), []), (0, Cu.jsx)("div", {
        className: "MiddleScreenBar",
        ref: uu,
        children: (0, Cu.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: Eu
        })
      })
    }));
    var SU = ju(4858),
      IU = ju(2866);

    function FU() {
      const {
        t: uu
      } = (0, mu.A)(), Eu = (0, qu.g)("serverUpdating", null), ju = (0, IU.c)(250, null !== Eu);
      return null === Eu || ju - Eu > 3e4 ? null : (0, Cu.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Cu.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: uu("updateWaiting:updatingIn", {
            countdown: (0, SU.r)(Eu - ju)
          })
        }), (0, Cu.jsx)("div", {
          children: uu("updateWaiting:bringYouBack")
        })]
      })
    }
    var BU = ju(37322),
      LU = ju(2040);
    const tU = [{
        translationKey: "general:interact"
      }],
      xU = (0, Uu.memo)((function() {
        const uu = (0, eu.h)("crosshairText"),
          {
            interactPrompt: Eu,
            blockText: ju,
            neededTool: su
          } = (0, Ju.f)("crosshairTarget"),
          {
            isTouchScreen: Zu
          } = (0, du.l)(["isTouchScreen"]),
          Xu = (0, Pu.t)(),
          lu = (0, ku.b)("alt-fire");
        (0, Uu.useEffect)((() => {
          Nu.gameBridge.send("setCrosshairInteractPrompt", !Zu || Xu ? "key" : "touch")
        }), [Zu, Xu]);
        const [bu, cu] = (0, Uu.useReducer)((uu => uu + 1), 0);
        (0, qu.f)("customBindingsChanged", cu);
        var Ou;
        if (null !== Eu && (Xu && null !== lu || !Zu && null !== (0, LU.r)("alt-fire"))) return (0, Cu.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Cu.jsx)(au.b, {
            noaAction: "alt-fire"
          }), (0, Cu.jsx)(fu.d, {
            text: null !== (Ou = Eu.label) && void 0 !== Ou ? Ou : tU
          })]
        });
        let Yu = null;
        return null !== ju ? Yu = ju : null !== uu && "" !== uu ? Yu = uu : null !== su && (Yu = [{
          icon: su,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Yu ? (0, Cu.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Cu.jsx)(fu.d, {
            text: Yu
          })
        }) : null
      }));
    var TU = ju(2701);
    const HU = (0, Uu.memo)((function() {
      var uu;
      const {
        interactPrompt: Eu
      } = (0, Ju.f)("crosshairTarget"), {
        openInGameMenuName: ju,
        openEverythingMenuName: su
      } = (0, du.l)(["openInGameMenuName", "openEverythingMenuName"]), Uu = (0, qu.g)("aimingOverlay", "none"), Zu = (0, Au.k)(), Xu = (0, TU.d)();
      return null === Eu || null !== ju || null !== su || "sniper" === Uu || Zu || Xu ? null : (0, Cu.jsx)(AU, {
        label: null !== (uu = Eu.label) && void 0 !== uu ? uu : tU
      })
    }));

    function AU(uu) {
      let {
        label: Eu
      } = uu;
      const ju = rE(zu.d.Interact, !1);
      return (0, Uu.useEffect)((() => (Gu.h.TY(ME.q), () => {
        Gu.h.TY(ME.q)
      })), []), (0, Cu.jsx)("div", {
        ref: ju,
        className: "TouchInteractHit",
        children: (0, Cu.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Cu.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Cu.jsx)(Wu.e, {
              name: "hand-back-point-up"
            })
          }), (0, Cu.jsx)(fu.d, {
            text: Eu
          })]
        })
      })
    }
    var nU = ju(65),
      yU = ju(34464),
      zU = ju(1802),
      RU = ju(34476);
    const uZ = "ScreenshotMode";
    let EZ = [];
    const jZ = new Set;

    function sZ(uu) {
      EZ = uu;
      for (const Eu of jZ) Eu(uu)
    }
    const UZ = (0, Uu.memo)((function() {
      const {
        screenshotMode: uu,
        isTouchScreen: Eu,
        openEverythingMenuName: ju,
        openInGameMenuName: su
      } = (0, du.l)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), Zu = null !== ju || null !== su, Xu = (0, Ju.f)("localPlayerAlive");
      return (0, Uu.useEffect)((() => {
        !uu || !Zu && Eu && Xu || (0, yU.g)()
      }), [uu, Zu, Eu, Xu]), (0, Uu.useEffect)((() => yU.g), []), (0, Uu.useEffect)((() => {
        if (uu) return document.documentElement.classList.add(uZ), (0, Ru.g)(nu.x.ScreenshotMode, nu.x.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(uZ), (0, Ru.g)(nu.x.ScreenshotMode, 0, "screenshotMode")
        }
      }), [uu]), uu ? (0, nU.createPortal)((0, Cu.jsx)(ZZ, {}), document.body) : null
    }));

    function ZZ() {
      const {
        t: uu
      } = (0, mu.A)(), [Eu, ju] = (0, Uu.useState)(!1), [su, Zu] = (0, Uu.useState)(0), [Xu, lu] = (0, Uu.useState)(null), qu = function() {
        const [uu, Eu] = (0, Uu.useState)(EZ);
        return (0, Uu.useEffect)((() => (jZ.add(Eu), Eu(EZ), () => {
          jZ.delete(Eu)
        })), []), uu
      }(), fu = (0, Uu.useRef)(), bu = (0, Uu.useRef)(!1);
      (0, Uu.useEffect)((() => () => {
        clearTimeout(fu.current)
      }), []);
      const cu = uu => {
          clearTimeout(fu.current), lu(uu), uu && (fu.current = setTimeout((() => {
            lu(null)
          }), 2e3))
        },
        Nu = (Eu, ju) => {
          switch (Eu) {
            case "saved":
              cu(uu("screenshotMode:saved"));
              break;
            case "denied":
              cu(uu("screenshotMode:denied"));
              break;
            case "needsTap":
              EZ.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), cu(uu("screenshotMode:saveWaitingFirst"))) : sZ([...EZ, ju])
          }
        },
        Ou = Eu => {
          console.error("Screenshot mode: the photo wasn't saved", Eu), cu(uu("screenshotMode:failed"))
        };
      return (0, Cu.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, Cu.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, Cu.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), su > 0 && (0, Cu.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, su), (0, Cu.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": uu("screenshotMode:back"),
          onClick: yU.g,
          children: (0, Cu.jsx)(Wu.e, {
            name: "arrow-left"
          })
        }), (0, Cu.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": uu("screenshotMode:takePhoto"),
          "aria-busy": Eu,
          onClick: () => {
            (async () => {
              if (!Eu) {
                ju(!0), cu(null);
                try {
                  const uu = await (0, yU.k)();
                  Zu((uu => uu + 1)), Nu(await (0, RU.c)(uu), uu)
                } catch (uu) {
                  Ou(uu)
                } finally {
                  ju(!1)
                }
              }
            })()
          },
          children: (0, Cu.jsx)(Wu.e, {
            name: "camera-alt"
          })
        }), null !== Xu ? (0, Cu.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: Xu
        }) : qu.length > 0 && (0, Cu.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (bu.current) return;
            bu.current = !0;
            const [uu] = EZ;
            sZ(EZ.slice(1));
            const Eu = Eu => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", Eu), (0, zU.d)(uu, uu.name), Nu("saved", uu)
            };
            (0, RU.f)(uu).then((ju => {
              "needsTap" === ju ? Eu(ju) : Nu(ju, uu)
            }), Eu).catch(Ou).finally((() => {
              bu.current = !1
            }))
          },
          children: [(0, Cu.jsx)(Wu.e, {
            name: "image"
          }), uu("screenshotMode:savePhoto"), qu.length > 1 && ` (${qu.length})`]
        })]
      })
    }
    var XZ = ju(4944),
      lZ = ju(4997);
    const qZ = (0, Uu.forwardRef)((function(uu, Eu) {
        let {
          text: ju,
          className: su,
          children: Uu
        } = uu;
        return ju.hasText ? (0, Cu.jsx)("div", {
          ref: Eu,
          className: Xu()("HudTextPanel", su, {
            NoBackground: !ju.showBackground
          }),
          children: null !== Uu && void 0 !== Uu ? Uu : (0, Cu.jsx)(fu.d, {
            text: ju.content
          })
        }) : null
      })),
      fZ = (0, Uu.memo)((function() {
        const uu = (0, eu.l)("middleTextTop"),
          [Eu, ju] = (0, Uu.useState)(null),
          su = (0, Bs.l)(Eu);
        return uu.hasText ? (0, Cu.jsx)("div", {
          className: Xu()("MiddleTextTopContainer", {
            MiddleTextTopBelow: su
          }),
          children: (0, Cu.jsx)(qZ, {
            ref: ju,
            className: "MiddleTextTop",
            text: uu
          })
        }) : null
      })),
      CZ = (0, Uu.memo)((function() {
        const uu = (0, eu.d)();
        return (0, Cu.jsx)(Cu.Fragment, {
          children: uu.map(((uu, Eu) => (0, Cu.jsx)(qZ, {
            className: "HeaderChip",
            text: uu
          }, Eu)))
        })
      }));
    var bZ = ju(3814),
      cZ = ju(4785);
    const NZ = (0, Uu.memo)((function() {
      const {
        t: uu
      } = (0, mu.A)(), [Eu, ju] = (0, Uu.useState)(!1), su = (0, Uu.useRef)(!1), Zu = function(uu) {
        let {
          gameNameWithVariation: Eu,
          lobbyName: ju
        } = uu;
        if ((0, oU.l)(Eu)) return OZ;
        if ((0, kU.H)(ju)) return YZ;
        return null
      }((0, Ju.f)("connectedGame"));
      if (!Zu || Eu) return null;
      const Xu = cZ.d[Zu.target];
      return (0, Cu.jsx)(iu.e, {
        tooltipInner: (0, Cu.jsx)("div", {
          children: uu(Xu.reportButtonTooltip)
        }),
        children: (0, Cu.jsx)("div", {
          children: (0, Cu.jsx)(Bj.Y, {
            onClick: () => {
              su.current || (su.current = !0, (0, cZ.f)(Zu.reportPolicyIds, Xu).then((uu => {
                null !== uu && void 0 !== uu && uu.selectedPolicyId && (Nu.gameBridge.send("reportLobbyOrGame", {
                  target: Zu.target,
                  ql: uu.selectedPolicyId,
                  details: uu.fl
                }), ju(!0))
              })).finally((() => {
                su.current = !1
              })))
            }
          })
        })
      })
    }));
    const OZ = {
        target: "customGame",
        reportPolicyIds: bZ.e
      },
      YZ = {
        target: "lobby",
        reportPolicyIds: bZ.i
      };
    var hZ = ju(8997),
      DZ = ju(37334),
      gZ = ju(37349),
      MZ = ju(37351),
      eZ = ju(37353),
      GZ = ju(37341);
    let pZ = !1;
    async function wZ(uu, Eu) {
      var ju, su;
      const {
        files: Uu
      } = Eu, Zu = Uu.replayKey();
      if (null === Zu) return "none";
      if (pZ) throw new Error(GZ.c.saveBusy.text);
      const Xu = null !== (ju = null === (su = Uu.saveRefusal) || void 0 === su ? void 0 : su.call(Uu)) && void 0 !== ju ? ju : null;
      if (null !== Xu) throw new Error(Xu);
      pZ = !0;
      try {
        return await async function(uu, Eu, ju) {
          const {
            files: su
          } = Eu, Uu = () => su.replayKey() === ju, Zu = (uu, Eu) => {
            Uu() && su.markSaved(uu, Eu)
          };
          let Xu = null;
          if (Eu.pickerSupported()) {
            try {
              if (Xu = await Eu.chooseFile(uu ? null : su.fileHandle()), null === Xu) return "Lj"
            } catch (qu) {
              Eu.onFallback(qu)
            }
            if (!Uu()) throw new Error(GZ.c.saveClosed.text)
          }
          const lu = await su.encode();
          if (null === lu) {
            if (null !== Xu) throw new Error(GZ.c.saveClosed.text);
            return "none"
          }
          if (null !== Xu) try {
            return await Eu.write(Xu, lu), Zu(Xu), "written"
          } catch (qu) {
            Eu.onFallback(qu)
          }
          return Zu(null, Eu.download(lu)), "downloaded"
        }(uu, Eu, Zu)
      } finally {
        pZ = !1
      }
    }
    var JZ = ju(37383),
      dZ = ju(4726);
    const aZ = [1, 2, 4, 8, 16, 32, 64];

    function PZ(uu, Eu) {
      return Math.max(0, Math.min(uu, Eu))
    }

    function oZ(uu, Eu, ju) {
      return ju <= Eu ? 0 : (uu - Eu) / (ju - Eu) * 100
    }

    function kZ(uu, Eu, ju) {
      const su = ju - Eu;
      return Math.round(Eu + uu / 100 * su)
    }

    function mZ(uu, Eu) {
      const ju = Math.floor(uu / Eu / 60),
        su = Math.floor(uu / Eu % 60),
        Uu = uu % Eu;
      return `${ju.toString().padStart(2,"0")}:${su.toString().padStart(2,"0")}:${Uu.toString().padStart(2,"0")}`
    }

    function vZ(uu) {
      return Number.isInteger(uu) || aZ.includes(uu) ? `${Math.round(uu)}\xd7` : `${uu.toFixed(1)}\xd7`
    }

    function KZ(uu, Eu) {
      const ju = aZ.indexOf(uu);
      if (-1 !== ju) return "in" === Eu ? aZ[Math.min(ju + 1, aZ.length - 1)] : aZ[Math.max(ju - 1, 0)];
      if ("in" === Eu) {
        for (const Eu of aZ)
          if (Eu >= uu) return Eu;
        return uu
      }
      for (let su = aZ.length - 1; su >= 0; su--)
        if (aZ[su] <= uu) return aZ[su];
      return aZ[0]
    }

    function VZ(uu, Eu) {
      const ju = Eu.getBoundingClientRect();
      if (ju.width <= 0) return 0;
      const su = (uu - ju.left) / ju.width * 100;
      return Math.max(0, Math.min(100, su))
    }

    function rZ(uu, Eu) {
      return Eu <= 0 ? 0 : uu / Eu * 100
    }

    function QZ(uu, Eu, ju) {
      const su = [];
      let Uu = Math.ceil(uu / ju) * ju;
      for (; Uu <= Eu;) su.push(Uu), Uu += ju;
      return su
    }
    var iZ = ju(37386);
    const WZ = [{
        label: "Linear",
        easing: iZ.n
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: iZ.g
      }, {
        label: "Ease Out",
        easing: iZ.j
      }, {
        label: "Ease In Out",
        easing: iZ.c
      }],
      SZ = 200,
      IZ = 150;

    function FZ(uu) {
      const Eu = uu => Number(uu.toFixed(3)).toString();
      return `cubic-bezier(${Eu(uu[0])}, ${Eu(uu[1])}, ${Eu(uu[2])}, ${Eu(uu[3])})`
    }

    function BZ(uu, Eu) {
      return {
        cx: 25 + uu * IZ,
        cy: 25 + (1 - Eu) * IZ
      }
    }

    function LZ(uu, Eu, ju) {
      const su = uu - ju.left,
        Uu = Eu - ju.top;
      return {
        x: us.b.clamp((su - 25) / IZ, 0, 1),
        y: us.b.clamp(1 - (Uu - 25) / IZ, -1, 2)
      }
    }

    function tZ(uu, Eu, ju, su, Uu) {
      return {
        x: (0, iZ.v)(uu, ju, Uu),
        y: (0, iZ.v)(Eu, su, Uu)
      }
    }
    const xZ = (0, Uu.memo)((function(uu) {
      let {
        value: Eu,
        onChange: ju
      } = uu;
      const su = (0, Uu.useRef)(null),
        Zu = (0, Uu.useRef)(null),
        [Xu, lu] = (0, Uu.useState)(null),
        qu = (0, Uu.useCallback)((() => {
          const uu = su.current;
          if (!uu) return;
          const ju = uu.getContext("2d");
          if (!ju) return;
          const Uu = window.devicePixelRatio || 1;
          uu.width = SZ * Uu, uu.height = SZ * Uu, ju.setTransform(Uu, 0, 0, Uu, 0, 0), ju.clearRect(0, 0, SZ, SZ), ju.fillStyle = "rgba(38, 52, 93, 0.85)", ju.fillRect(0, 0, SZ, SZ), ju.beginPath();
          const Zu = BZ(0, 0),
            lu = BZ(1, 1);
          ju.moveTo(Zu.cx, Zu.cy), ju.lineTo(lu.cx, lu.cy), ju.strokeStyle = "rgba(164, 164, 164, 0.35)", ju.setLineDash([3, 3]), ju.stroke(), ju.setLineDash([]);
          const [qu, fu, Cu, bu] = Eu, cu = BZ(qu, fu), Nu = BZ(Cu, bu);
          ju.strokeStyle = "rgba(252, 211, 115, 0.55)", ju.lineWidth = 1.5, ju.beginPath(), ju.moveTo(Zu.cx, Zu.cy), ju.lineTo(cu.cx, cu.cy), ju.moveTo(lu.cx, lu.cy), ju.lineTo(Nu.cx, Nu.cy), ju.stroke(), ju.strokeStyle = "#fcd373", ju.lineWidth = 2, ju.beginPath();
          for (let Eu = 0; Eu <= 50; Eu++) {
            const uu = tZ(qu, fu, Cu, bu, Eu / 50),
              su = BZ(uu.x, uu.y);
            0 === Eu ? ju.moveTo(su.cx, su.cy) : ju.lineTo(su.cx, su.cy)
          }
          ju.stroke();
          const Ou = (uu, Eu, su) => {
            ju.beginPath(), ju.arc(uu, Eu, su ? 6 : 5, 0, 2 * Math.PI), ju.fillStyle = su ? "#ffb914" : "#fcd373", ju.fill(), ju.strokeStyle = "#1a1f2e", ju.lineWidth = 1.5, ju.stroke()
          };
          Ou(cu.cx, cu.cy, "p1" === Xu), Ou(Nu.cx, Nu.cy, "p2" === Xu)
        }), [Xu, Eu]);
      (0, Uu.useEffect)((() => {
        qu()
      }), [qu]);
      const fu = (0, Uu.useCallback)(((uu, Uu) => {
          const Xu = su.current,
            lu = Zu.current;
          if (!Xu || !lu) return;
          const qu = Xu.getBoundingClientRect(),
            {
              x: fu,
              y: Cu
            } = LZ(uu, Uu, qu);
          ju("p1" === lu ? [fu, Cu, Eu[2], Eu[3]] : [Eu[0], Eu[1], fu, Cu])
        }), [ju, Eu]),
        bu = (0, Uu.useCallback)((uu => {
          const ju = su.current;
          if (!ju) return;
          const Uu = ju.getBoundingClientRect();
          let {
            x: Xu,
            y: qu
          } = LZ(uu.clientX, uu.clientY, Uu);
          Xu = us.b.clamp(Xu, 0, 1), qu = us.b.clamp(qu, 0, 1);
          const [Cu, bu, cu, Nu] = Eu.map((uu => us.b.clamp(uu, 0, 1))), Ou = Math.hypot(Xu - Cu, qu - bu), Yu = Math.hypot(Xu - cu, qu - Nu), hu = Ou <= Yu ? "p1" : "p2";
          ("p1" === hu ? Ou : Yu) > .12 || (Zu.current = hu, lu(hu), ju.setPointerCapture(uu.pointerId), fu(uu.clientX, uu.clientY))
        }), [fu, Eu]),
        cu = (0, Uu.useCallback)((uu => {
          Zu.current && fu(uu.clientX, uu.clientY)
        }), [fu]),
        Nu = (0, Uu.useCallback)((uu => {
          Zu.current = null, lu(null), uu.currentTarget.hasPointerCapture(uu.pointerId) && uu.currentTarget.releasePointerCapture(uu.pointerId)
        }), []);
      return (0, Cu.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Cu.jsx)("canvas", {
          ref: su,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: SZ,
            height: SZ
          },
          onPointerDown: bu,
          onPointerMove: cu,
          onPointerUp: Nu,
          onPointerCancel: Nu
        }), (0, Cu.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: FZ(Eu)
        })]
      })
    }));
    var TZ = ju(1727),
      HZ = ju(1710);
    const AZ = 12;

    function nZ(uu) {
      return {
        left: uu.left + uu.width / 2,
        top: uu.top - 8
      }
    }

    function yZ(uu, Eu) {
      const [ju, su] = (0, Uu.useState)(null);
      return (0, Uu.useLayoutEffect)((() => {
        const ju = uu.current;
        if (!ju) return;
        const {
          width: Uu,
          height: Zu
        } = ju.getBoundingClientRect();
        su(function(uu, Eu, ju) {
          const su = window.innerWidth,
            Uu = window.innerHeight,
            Zu = Eu / 2;
          let Xu = uu.left + uu.width / 2;
          Xu = Math.max(AZ + Zu, Math.min(Xu, su - AZ - Zu));
          const lu = uu.top - 8 - AZ,
            qu = Uu - uu.bottom - 8 - AZ,
            fu = lu < ju && qu >= lu;
          let Cu;
          fu ? (Cu = uu.bottom + 8, Cu + ju > Uu - AZ && (Cu = Uu - AZ - ju), Cu = Math.max(AZ, Cu)) : (Cu = uu.top - 8, Cu - ju < AZ && (Cu = AZ + ju));
          return {
            left: Xu,
            top: Cu,
            placeBelow: fu
          }
        }(Eu, Uu, Zu))
      }), [Eu, uu]), ju
    }

    function zZ(uu, Eu, ju) {
      (0, Uu.useEffect)((() => (0, HZ.b)("pointerdown", (su => {
        var Uu, Zu;
        const Xu = su.target;
        Xu instanceof Node && (null !== (Uu = uu.current) && void 0 !== Uu && Uu.contains(Xu) || null !== ju && void 0 !== ju && null !== (Zu = ju.current) && void 0 !== Zu && Zu.contains(Xu) || (0, TZ.l)(Xu) || Eu())
      }))), [ju, Eu, uu])
    }

    function RZ(uu) {
      let {
        label: Eu,
        value: ju,
        onChange: su
      } = uu;
      return (0, Cu.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Cu.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: Eu
        }), (0, Cu.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((uu, Eu) => (0, Cu.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Cu.jsx)("span", {
              children: uu
            }), (0, Cu.jsx)("input", {
              type: "number",
              step: "any",
              value: ju[Eu],
              onChange: uu => {
                const Uu = Number.parseFloat(uu.target.value);
                if (Number.isNaN(Uu)) return;
                const Zu = [ju[0], ju[1], ju[2]];
                Zu[Eu] = Uu, su(Zu)
              }
            })]
          }, uu)))
        })]
      })
    }
    const uX = (0, Uu.memo)((function(uu) {
        var Eu, ju, su;
        let {
          keyframe: Zu,
          anchor: lu,
          hasOutgoingSegment: qu,
          onClose: fu,
          onApply: bu,
          onDelete: cu,
          onUseCurrentCamera: Nu
        } = uu;
        const Ou = (0, Uu.useRef)(null),
          Yu = yZ(Ou, lu.rect),
          [hu, Du] = (0, Uu.useState)((() => [Zu.position[0], Zu.position[1], Zu.position[2]])),
          [gu, Mu] = (0, Uu.useState)((() => [Zu.direction[0], Zu.direction[1], Zu.direction[2]])),
          [eu, Gu] = (0, Uu.useState)((() => Zu.easing));
        (0, Uu.useEffect)((() => {
          Du([Zu.position[0], Zu.position[1], Zu.position[2]]), Mu([Zu.direction[0], Zu.direction[1], Zu.direction[2]]), Gu(Zu.easing)
        }), [Zu]), zZ(Ou, fu);
        const pu = (0, Uu.useCallback)((() => {
            bu({
              Tb: Zu.Tb,
              position: hu,
              direction: gu,
              easing: eu
            }), fu()
          }), [gu, eu, Zu.Tb, bu, fu, hu]),
          wu = (0, Uu.useCallback)((() => {
            cu(Zu.Tb), fu()
          }), [Zu.Tb, cu, fu]),
          Ju = (0, Uu.useCallback)((() => {
            const uu = Nu();
            uu && (Du([uu.position[0], uu.position[1], uu.position[2]]), Mu([uu.direction[0], uu.direction[1], uu.direction[2]]))
          }), [Nu]),
          du = nZ(lu.rect);
        return (0, Cu.jsxs)("div", {
          ref: Ou,
          className: Xu()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (Eu = null === Yu || void 0 === Yu ? void 0 : Yu.placeBelow) && void 0 !== Eu && Eu,
            Positioned: null !== Yu
          }),
          style: {
            left: `${null!==(ju=null===Yu||void 0===Yu?void 0:Yu.left)&&void 0!==ju?ju:du.left}px`,
            top: `${null!==(su=null===Yu||void 0===Yu?void 0:Yu.top)&&void 0!==su?su:du.top}px`
          },
          onPointerDown: uu => {
            uu.stopPropagation()
          },
          children: [(0, Cu.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Cu.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Cu.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", lu.Tb]
            })]
          }), (0, Cu.jsx)(RZ, {
            label: "Position",
            value: hu,
            onChange: Du
          }), (0, Cu.jsx)(RZ, {
            label: "Direction",
            value: gu,
            onChange: Mu
          }), qu && (0, Cu.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Cu.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Cu.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: WZ.map((uu => {
                const Eu = (ju = eu, su = uu.easing, ju[0] === su[0] && ju[1] === su[1] && ju[2] === su[2] && ju[3] === su[3]);
                var ju, su;
                return (0, Cu.jsx)(Bj.$, {
                  className: Xu()("ReplayKeyframePopoverPreset", {
                    Active: Eu
                  }),
                  onClick: () => {
                    Gu(uu.easing)
                  },
                  children: uu.label
                }, uu.label)
              }))
            }), (0, Cu.jsx)(xZ, {
              value: eu,
              onChange: Gu
            })]
          }), (0, Cu.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Cu.jsx)(Bj.f, {
              className: "ReplayViewerCompactButton",
              onClick: Ju,
              children: "Use current view"
            }), (0, Cu.jsx)(Bj.p, {
              className: "ReplayViewerCompactButton",
              onClick: pu,
              children: "Apply"
            }), (0, Cu.jsx)(Bj.R, {
              className: "ReplayViewerCompactButton",
              onClick: wu,
              children: "Delete"
            })]
          })]
        })
      })),
      EX = (0, Uu.memo)((function(uu) {
        var Eu, ju, su;
        let {
          anchor: Zu,
          hasPlaybackMark: lu,
          onClose: qu,
          onMark: fu,
          onZoom: bu,
          onCrop: cu,
          onDeleteKeyframes: Nu,
          onClearMark: Ou
        } = uu;
        const Yu = (0, Uu.useRef)(null),
          hu = yZ(Yu, Zu.rect),
          Du = nZ(Zu.rect),
          gu = {
            startTick: Zu.startTick,
            endTick: Zu.endTick
          },
          Mu = Zu.endTick > Zu.startTick;
        return zZ(Yu, qu), (0, Cu.jsx)("div", {
          ref: Yu,
          className: Xu()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (Eu = null === hu || void 0 === hu ? void 0 : hu.placeBelow) && void 0 !== Eu && Eu,
            Positioned: null !== hu
          }),
          style: {
            left: `${null!==(ju=null===hu||void 0===hu?void 0:hu.left)&&void 0!==ju?ju:Du.left}px`,
            top: `${null!==(su=null===hu||void 0===hu?void 0:hu.top)&&void 0!==su?su:Du.top}px`
          },
          onPointerDown: uu => {
            uu.stopPropagation()
          },
          children: (0, Cu.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Cu.jsx)(Bj.p, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                fu(gu)
              },
              disabled: !Mu,
              children: (0, Cu.jsx)("span", {
                children: " Play range "
              })
            }), (0, Cu.jsx)(Bj.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                bu(gu)
              },
              children: (0, Cu.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Cu.jsx)(Bj.$, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                cu(gu)
              },
              disabled: !Mu,
              children: (0, Cu.jsx)("span", {
                children: " Crop "
              })
            }), (0, Cu.jsx)(Bj.$, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Nu(gu)
              },
              children: (0, Cu.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), lu && (0, Cu.jsx)(Bj.$, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Ou()
              },
              children: (0, Cu.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      jX = (0, Uu.memo)((function(uu) {
        var Eu, ju;
        let {
          maxTick: su,
          displayTick: Zu,
          cV: lu,
          cameraKeyframes: qu,
          playbackMark: fu,
          onSeek: bu,
          onPause: cu,
          onScrubTickChange: Nu,
          onMoveCameraKeyframe: Ou,
          onUpdateCameraKeyframe: Yu,
          onDeleteCameraKeyframe: hu,
          onUseCurrentCamera: Du,
          onMarkRange: gu,
          onCropRange: Mu,
          onDeleteKeyframesInRange: eu,
          onClearMark: Gu,
          zoomLevel: pu,
          onZoomLevelChange: wu
        } = uu;
        const Ju = (0, Uu.useRef)(null),
          du = (0, Uu.useRef)(null),
          au = (0, Uu.useRef)(!1),
          Pu = (0, Uu.useRef)(!1),
          ou = (0, Uu.useRef)(pu),
          ku = (0, Uu.useRef)(null),
          mu = (0, Uu.useRef)(null),
          vu = (0, Uu.useRef)(null),
          Ku = (0, Uu.useRef)(null),
          [Vu, ru] = (0, Uu.useState)(null),
          [Qu, iu] = (0, Uu.useState)(Zu),
          [Wu, Su] = (0, Uu.useState)(null),
          [Iu, Fu] = (0, Uu.useState)(null),
          [Bu, Lu] = (0, Uu.useState)(null),
          [tu, xu] = (0, Uu.useState)(null),
          Tu = (0, Uu.useMemo)((() => qu.map((uu => uu.Tb))), [qu]),
          Hu = null !== Vu && void 0 !== Vu ? Vu : Zu,
          {
            viewStart: Au,
            viewEnd: nu
          } = (0, Uu.useMemo)((() => function(uu) {
            const Eu = uu.maxTick + 1,
              ju = Math.max(1, Math.ceil(Eu / uu.zoomLevel)),
              su = Math.floor(ju / 2);
            let Uu = uu.centerTick - su;
            return Uu = Math.max(0, Math.min(Uu, uu.maxTick - ju + 1)), {
              viewStart: Uu,
              viewEnd: Math.min(uu.maxTick, Uu + ju - 1)
            }
          }({
            maxTick: su,
            zoomLevel: pu,
            centerTick: Qu
          })), [su, pu, Qu]);
        (0, Uu.useEffect)((() => {
          if (null !== Vu || null !== mu.current || null !== vu.current || null !== Ku.current) return;
          if (au.current) return void(au.current = !1);
          if (Pu.current) return void(Pu.current = !1);
          const uu = ou.current !== pu;
          ou.current = pu, uu && iu(Zu)
        }), [pu, Zu, Vu]);
        const yu = (0, Uu.useCallback)((uu => {
            let Eu = PZ(uu, su);
            return fu && (Eu = Math.max(fu.inTick, Math.min(Eu, fu.outTick))), Eu
          }), [su, fu]),
          zu = (0, Uu.useCallback)(((uu, Eu) => {
            const ju = yu(uu);
            bu(ju), Eu && iu(ju)
          }), [yu, bu]),
          Ru = (0, Uu.useCallback)(((uu, Eu) => {
            const ju = yu(uu);
            ru(ju), Nu(ju), zu(ju, Eu)
          }), [yu, zu, Nu]),
          uE = (0, Uu.useCallback)((() => {
            ru((uu => (null !== uu && iu(uu), null))), Nu(null)
          }), [Nu]),
          EE = (0, Uu.useCallback)((() => {
            Lu(null), xu(null)
          }), []),
          jE = (0, Uu.useCallback)((uu => {
            const Eu = Ju.current;
            if (!Eu) return 0;
            return PZ(kZ(VZ(uu, Eu), Au, nu), su)
          }), [su, nu, Au]),
          sE = (0, Uu.useCallback)((uu => {
            const Eu = du.current;
            if (!Eu) return 0;
            return PZ(kZ(VZ(uu, Eu), 0, su), su)
          }), [su]),
          UE = (0, Uu.useMemo)((() => {
            if (!Wu) return [...Tu];
            const uu = Tu.filter((uu => uu !== Wu.fromTick));
            return uu.push(Wu.previewTick), uu.sort(((uu, Eu) => uu - Eu)), uu
          }), [Tu, Wu]),
          ZE = (0, Uu.useMemo)((() => {
            var uu;
            return Iu && null !== (uu = qu.find((uu => uu.Tb === Iu.Tb))) && void 0 !== uu ? uu : null
          }), [qu, Iu]),
          XE = (0, Uu.useMemo)((() => !!ZE && qu.some((uu => uu.Tb > ZE.Tb))), [qu, ZE]);
        (0, Uu.useEffect)((() => {
          Iu && !ZE && Fu(null)
        }), [Iu, ZE]), (0, Uu.useEffect)((() => {
          if (!tu) return () => {};
          const uu = uu => {
            "Escape" === uu.key && EE()
          };
          return window.addEventListener("keydown", uu), () => {
            window.removeEventListener("keydown", uu)
          }
        }), [EE, tu]);
        const lE = (0, Uu.useCallback)(((uu, Eu) => {
            EE(), cu(), bu(uu, {
              ignorePlaybackMark: !0
            }), Fu({
              Tb: uu,
              rect: Eu.getBoundingClientRect()
            })
          }), [EE, cu, bu]),
          qE = (0, Uu.useCallback)(((uu, Eu) => ju => {
            0 === ju.button && (ju.stopPropagation(), Fu(null), EE(), cu(), ku.current = {
              fromTick: uu,
              startX: ju.clientX,
              startY: ju.clientY,
              didDrag: !1,
              track: Eu
            }, Su({
              fromTick: uu,
              previewTick: uu,
              track: Eu
            }), ju.currentTarget.setPointerCapture(ju.pointerId))
          }), [EE, cu]),
          fE = (0, Uu.useCallback)((uu => {
            if (!Wu) return;
            uu.stopPropagation();
            const Eu = ku.current;
            if (Eu && !Eu.didDrag) {
              const ju = uu.clientX - Eu.startX,
                su = uu.clientY - Eu.startY;
              Math.hypot(ju, su) > 5 && (Eu.didDrag = !0)
            }
            const ju = "detail" === Wu.track ? jE(uu.clientX) : sE(uu.clientX);
            ju !== Wu.previewTick && Su({
              ...Wu,
              previewTick: ju
            })
          }), [Wu, jE, sE]),
          CE = (0, Uu.useCallback)((uu => {
            if (!Wu) return;
            uu.stopPropagation();
            const Eu = ku.current,
              ju = "detail" === Wu.track ? jE(uu.clientX) : sE(uu.clientX);
            Eu && !Eu.didDrag ? lE(Eu.fromTick, uu.currentTarget) : ju !== Wu.fromTick && Ou(Wu.fromTick, ju), Su(null), ku.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId)
          }), [Wu, Ou, lE, jE, sE]),
          bE = (0, Uu.useCallback)((uu => {
            if (0 !== uu.button) return;
            Fu(null), cu();
            const Eu = jE(uu.clientX);
            mu.current = {
              pointerId: uu.pointerId,
              startX: uu.clientX,
              startY: uu.clientY,
              startTick: Eu,
              currentTick: Eu,
              didSelect: !1
            }, Lu(null), xu(null), uu.currentTarget.setPointerCapture(uu.pointerId)
          }), [cu, jE]),
          cE = (0, Uu.useCallback)((uu => {
            const Eu = mu.current;
            if (!Eu || Eu.pointerId !== uu.pointerId) return;
            const ju = jE(uu.clientX);
            if (Eu.currentTick = ju, !Eu.didSelect) {
              const ju = uu.clientX - Eu.startX,
                su = uu.clientY - Eu.startY;
              if (Math.hypot(ju, su) <= 5) return;
              Eu.didSelect = !0
            }
            const su = Math.min(Eu.startTick, ju),
              Uu = Math.max(Eu.startTick, ju);
            Lu({
              startTick: su,
              endTick: Uu
            })
          }), [jE]),
          NE = (0, Uu.useCallback)((uu => {
            const Eu = mu.current;
            if (!Eu || Eu.pointerId !== uu.pointerId) return;
            if (mu.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId), !Eu.didSelect) return EE(), void zu(Eu.startTick, !0);
            const ju = jE(uu.clientX),
              su = Math.min(Eu.startTick, ju),
              Uu = Math.max(Eu.startTick, ju),
              Zu = {
                startTick: su,
                endTick: Uu
              };
            Lu(Zu);
            const Xu = Ju.current;
            if (!Xu) return;
            const lu = Xu.getBoundingClientRect(),
              qu = oZ(su, Au, nu) / 100,
              fu = oZ(Uu, Au, nu) / 100,
              Cu = lu.left + qu * lu.width,
              bu = lu.left + fu * lu.width;
            xu({
              ...Zu,
              rect: new DOMRect(Cu, lu.top, Math.max(bu - Cu, 1), lu.height)
            })
          }), [EE, zu, jE, nu, Au]),
          OE = (0, Uu.useCallback)((uu => Eu => {
            if (0 !== Eu.button) return;
            Eu.stopPropagation(), Fu(null), EE(), cu(), vu.current = {
              pointerId: Eu.pointerId,
              track: uu
            }, Eu.currentTarget.setPointerCapture(Eu.pointerId);
            const ju = "detail" === uu ? jE(Eu.clientX) : sE(Eu.clientX);
            Ru(ju, !1)
          }), [EE, cu, Ru, jE, sE]),
          YE = (0, Uu.useCallback)((uu => {
            const Eu = vu.current;
            if (!Eu || Eu.pointerId !== uu.pointerId) return;
            uu.stopPropagation();
            const ju = "detail" === Eu.track ? jE(uu.clientX) : sE(uu.clientX);
            Ru(ju, !1)
          }), [Ru, jE, sE]),
          hE = (0, Uu.useCallback)((uu => {
            const Eu = vu.current;
            Eu && Eu.pointerId === uu.pointerId && (uu.stopPropagation(), vu.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId), uE())
          }), [uE]),
          DE = (0, Uu.useCallback)((uu => {
            0 === uu.button && (EE(), cu(), Ku.current = {
              pointerId: uu.pointerId
            }, uu.currentTarget.setPointerCapture(uu.pointerId), Ru(sE(uu.clientX), !0))
          }), [EE, cu, Ru, sE]),
          gE = (0, Uu.useCallback)((uu => {
            const Eu = Ku.current;
            Eu && Eu.pointerId === uu.pointerId && Ru(sE(uu.clientX), !0)
          }), [Ru, sE]),
          ME = (0, Uu.useCallback)((uu => {
            const Eu = Ku.current;
            Eu && Eu.pointerId === uu.pointerId && (Ku.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId), uE())
          }), [uE]),
          eE = (0, Uu.useCallback)((uu => {
            const Eu = Math.max(1, uu.endTick - uu.startTick + 1),
              ju = su + 1,
              Uu = ju / Eu,
              Zu = Math.max(1, Math.ceil(ju / Uu)),
              Xu = uu.startTick + Math.floor((Zu - 1) / 2);
            Pu.current = !0, ou.current = Uu, iu(PZ(Xu, su)), wu(Uu), EE()
          }), [EE, su, wu]),
          GE = (0, Uu.useCallback)((uu => {
            gu(uu), EE()
          }), [EE, gu]),
          pE = (0, Uu.useCallback)((uu => {
            Mu(uu), EE()
          }), [EE, Mu]),
          wE = (0, Uu.useCallback)((uu => {
            eu(uu), EE()
          }), [EE, eu]),
          JE = (0, Uu.useCallback)((() => {
            Gu(), EE()
          }), [EE, Gu]);
        (0, Uu.useEffect)((() => {
          const uu = Ju.current;
          if (!uu) return () => {};
          const Eu = Eu => {
            Eu.preventDefault();
            const ju = PZ(kZ(VZ(Eu.clientX, uu), Au, nu), su),
              Uu = Eu.deltaY < 0 ? "in" : "out",
              Zu = KZ(pu, Uu);
            Zu !== pu && (au.current = !0, iu(ju), wu(Zu))
          };
          return uu.addEventListener("wheel", Eu, {
            passive: !1
          }), () => {
            uu.removeEventListener("wheel", Eu)
          }
        }), [su, wu, nu, Au, pu]);
        const dE = oZ(Hu, Au, nu),
          aE = rZ(Hu, su),
          PE = rZ(Au, su),
          oE = su > 0 ? rZ(nu, su) : 100,
          kE = null !== fu,
          mE = null !== (Eu = null === fu || void 0 === fu ? void 0 : fu.inTick) && void 0 !== Eu ? Eu : 0,
          vE = null !== (ju = null === fu || void 0 === fu ? void 0 : fu.outTick) && void 0 !== ju ? ju : su,
          KE = rZ(mE, su),
          VE = Math.max(rZ(vE, su) - KE, 0),
          rE = oZ(Math.max(mE, Au), Au, nu),
          QE = oZ(Math.min(vE, nu), Au, nu),
          iE = Math.max(QE - rE, 0),
          WE = kE && vE >= Au && mE <= nu,
          SE = oZ(mE, Au, nu),
          IE = oZ(vE, Au, nu),
          FE = kE && mE >= Au && mE <= nu,
          BE = kE && vE >= Au && vE <= nu,
          LE = rZ(mE, su),
          tE = rZ(vE, su),
          xE = null !== Bu && void 0 !== Bu ? Bu : tu ? {
            startTick: tu.startTick,
            endTick: tu.endTick
          } : null,
          TE = xE ? oZ(Math.max(xE.startTick, Au), Au, nu) : 0,
          HE = xE ? oZ(Math.min(xE.endTick, nu), Au, nu) : 0,
          AE = Math.max(HE - TE, 0),
          nE = null !== xE && xE.endTick >= Au && xE.startTick <= nu,
          yE = (0, Uu.useMemo)((() => QZ(0, su, lu)), [su, lu]),
          zE = (0, Uu.useMemo)((() => QZ(Au, nu, lu)), [Au, nu, lu]),
          RE = (0, Uu.useMemo)((() => UE.filter((uu => uu >= Au && uu <= nu))), [UE, nu, Au]),
          uj = (0, Uu.useCallback)(((uu, Eu, ju) => {
            const Uu = "detail" === Eu ? oZ(uu, Au, nu) : rZ(uu, su),
              Zu = null !== Wu && ju === Wu.fromTick,
              lu = null !== Iu && Iu.Tb === ju;
            return (0, Cu.jsx)("button", {
              type: "button",
              className: Xu()("ReplayTimelineCameraKeyframeMarker", "detail" === Eu ? "Detail" : "Overview", {
                Dragging: Zu,
                Selected: lu
              }),
              style: {
                left: `${Uu}%`
              },
              onPointerDown: qE(ju, Eu),
              onPointerMove: fE,
              onPointerUp: CE,
              onPointerCancel: CE,
              "aria-label": `Camera keyframe at tick ${ju}`
            }, `cam-${Eu}-${ju}`)
          }), [qE, Iu, CE, Wu, su, fE, nu, Au]),
          Ej = (0, Uu.useCallback)((uu => Wu && uu === Wu.previewTick ? Wu.fromTick : uu), [Wu]);
        return su <= 0 ? null : (0, Cu.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Iu && ZE && (0, nU.createPortal)((0, Cu.jsx)(uX, {
            keyframe: ZE,
            anchor: Iu,
            hasOutgoingSegment: XE,
            onClose: () => {
              Fu(null)
            },
            onApply: Yu,
            onDelete: hu,
            onUseCurrentCamera: Du
          }), document.body), tu && (0, nU.createPortal)((0, Cu.jsx)(EX, {
            anchor: tu,
            hasPlaybackMark: kE,
            onClose: EE,
            onMark: GE,
            onZoom: eE,
            onCrop: pE,
            onDeleteKeyframes: wE,
            onClearMark: JE
          }), document.body), (0, Cu.jsxs)("div", {
            className: Xu()("ReplayTimelineOverviewSection", {
              Hidden: pu <= 1
            }),
            children: [(0, Cu.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Cu.jsxs)("div", {
              ref: du,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: DE,
              onPointerMove: gE,
              onPointerUp: ME,
              onPointerCancel: ME,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": su,
              "aria-valuenow": Hu,
              tabIndex: 0,
              children: [yE.map((uu => {
                const Eu = rZ(uu, su);
                return (0, Cu.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${Eu}%`
                  }
                }, uu)
              })), kE && (0, Cu.jsxs)(Cu.Fragment, {
                children: [(0, Cu.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${KE}%`,
                    width: `${VE}%`
                  }
                }), (0, Cu.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${LE}%`
                  },
                  "aria-hidden": !0
                }), (0, Cu.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${tE}%`
                  },
                  "aria-hidden": !0
                })]
              }), UE.map((uu => uj(uu, "overview", Ej(uu)))), (0, Cu.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${PE}%`,
                  width: `${Math.max(oE-PE,.5)}%`
                }
              }), (0, Cu.jsx)("button", {
                type: "button",
                className: Xu()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Vu
                }),
                style: {
                  left: `${aE}%`
                },
                onPointerDown: OE("overview"),
                onPointerMove: YE,
                onPointerUp: hE,
                onPointerCancel: hE,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Cu.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Cu.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Cu.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Cu.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [mZ(Au, lu), " \u2013 ", mZ(nu, lu), pu > 1 && (0, Cu.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: vZ(pu)
                })]
              })]
            }), (0, Cu.jsxs)("div", {
              ref: Ju,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: bE,
              onPointerMove: cE,
              onPointerUp: NE,
              onPointerCancel: NE,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Au,
              "aria-valuemax": nu,
              "aria-valuenow": Hu,
              tabIndex: 0,
              children: [zE.map((uu => {
                const Eu = oZ(uu, Au, nu);
                return (0, Cu.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${Eu}%`
                  }
                }, uu)
              })), WE && (0, Cu.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${rE}%`,
                  width: `${iE}%`
                }
              }), FE && (0, Cu.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${SE}%`
                },
                "aria-label": `Play range start at tick ${mE}`
              }), BE && (0, Cu.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${IE}%`
                },
                "aria-label": `Play range end at tick ${vE}`
              }), nE && xE && (0, Cu.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${TE}%`,
                  width: `${AE}%`
                }
              }), RE.map((uu => uj(uu, "detail", Ej(uu)))), (0, Cu.jsx)("button", {
                type: "button",
                className: Xu()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Vu
                }),
                style: {
                  left: `${dE}%`
                },
                onPointerDown: OE("detail"),
                onPointerMove: YE,
                onPointerUp: hE,
                onPointerCancel: hE,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Cu.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Cu.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      sX = (0, Uu.memo)((function(uu) {
        let {
          enabled: Eu
        } = uu;
        const ju = (0, Uu.useRef)(!1),
          su = (0, Uu.useRef)(null),
          [Zu, lu] = (0, Uu.useState)(!1),
          qu = (0, Uu.useCallback)((uu => {
            Eu && 0 === uu.button && (ju.current = !0, lu(!0), su.current = {
              x: uu.clientX,
              y: uu.clientY
            }, uu.currentTarget.setPointerCapture(uu.pointerId))
          }), [Eu]),
          fu = (0, Uu.useCallback)((uu => {
            if (!Eu || !ju.current || !su.current) return;
            const Uu = uu.clientX - su.current.x,
              Zu = uu.clientY - su.current.y;
            su.current = {
              x: uu.clientX,
              y: uu.clientY
            }, Nu.gameBridge.send("dragReplayCamera", {
              dx: Uu,
              dy: Zu
            })
          }), [Eu]),
          bu = (0, Uu.useCallback)((uu => {
            ju.current && (ju.current = !1, lu(!1), su.current = null, uu.currentTarget.releasePointerCapture(uu.pointerId))
          }), []);
        return Eu ? (0, Cu.jsx)("div", {
          className: Xu()("ReplayViewerCameraDragSurface", {
            Dragging: Zu
          }),
          onPointerDown: qu,
          onPointerMove: fu,
          onPointerUp: bu,
          onPointerCancel: bu,
          "aria-hidden": !0
        }) : null
      }));
    var UX = ju(37391),
      ZX = ju(37400);
    const XX = (0, Uu.memo)((function(uu) {
        var Eu, ju, su;
        let {
          anchorRect: Zu,
          anchorRef: lu,
          onClose: fu
        } = uu;
        const bu = (0, Uu.useRef)(null),
          cu = yZ(bu, Zu),
          [Nu, Ou] = (0, Uu.useState)(ZX.c),
          Yu = (0, Uu.useMemo)((() => Object.values(Nu).every((uu => uu))), [Nu]);
        (0, qu.f)("replayViewer|uiVisibilityChanged", (() => {
          Ou((0, ZX.c)())
        })), zZ(bu, fu, lu);
        const hu = (0, Uu.useCallback)(((uu, Eu) => {
            (0, ZX.j)(uu, Eu), Ou((0, ZX.c)())
          }), []),
          Du = (0, Uu.useCallback)((uu => {
            for (const {
                group: Eu
              }
              of UX.f)(0, ZX.j)(Eu, uu);
            Ou((0, ZX.c)())
          }), []),
          gu = nZ(Zu);
        return (0, nU.createPortal)((0, Cu.jsxs)("div", {
          ref: bu,
          className: Xu()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (Eu = null === cu || void 0 === cu ? void 0 : cu.placeBelow) && void 0 !== Eu && Eu,
            Positioned: null !== cu
          }),
          style: {
            left: `${null!==(ju=null===cu||void 0===cu?void 0:cu.left)&&void 0!==ju?ju:gu.left}px`,
            top: `${null!==(su=null===cu||void 0===cu?void 0:cu.top)&&void 0!==su?su:gu.top}px`
          },
          onPointerDown: uu => {
            uu.stopPropagation()
          },
          children: [(0, Cu.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Cu.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Cu.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Cu.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Cu.jsx)("input", {
                type: "checkbox",
                checked: Yu,
                onChange: uu => {
                  Du(uu.target.checked)
                }
              }), (0, Cu.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), UX.f.map((uu => {
              let {
                group: Eu,
                label: ju
              } = uu;
              return (0, Cu.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Cu.jsx)("input", {
                  type: "checkbox",
                  checked: Nu[Eu],
                  onChange: uu => {
                    hu(Eu, uu.target.checked)
                  }
                }), (0, Cu.jsx)("span", {
                  children: ju
                })]
              }, Eu)
            }))]
          })]
        }), document.body)
      })),
      lX = (0, Uu.memo)((function(uu) {
        let {
          disabled: Eu
        } = uu;
        const ju = (0, Uu.useRef)(null),
          [su, Zu] = (0, Uu.useState)(!1),
          [Xu, lu] = (0, Uu.useState)(null),
          qu = (0, Uu.useCallback)((() => {
            ju.current && (lu(ju.current.getBoundingClientRect()), Zu((uu => !uu)))
          }), []),
          fu = (0, Uu.useCallback)((() => {
            Zu(!1)
          }), []);
        return (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsx)("div", {
            ref: ju,
            children: (0, Cu.jsx)(Bj.f, {
              className: "ReplayViewerActionButton",
              onClick: qu,
              disabled: Eu,
              children: (0, Cu.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), su && Xu && (0, Cu.jsx)(XX, {
            anchorRect: Xu,
            anchorRef: ju,
            onClose: fu
          })]
        })
      })),
      qX = ["freeCamUp", "freeCamDown"];

    function fX(uu, Eu) {
      Nu.gameBridge.send("holdReplayFreecamVertical", {
        action: uu,
        dl: Eu
      })
    }
    const CX = (0, Uu.memo)((function() {
      (0, Uu.useEffect)((() => () => {
        ! function() {
          Nu.gameBridge.send("moveReplayFreecam", null);
          for (const uu of qX) fX(uu, !1)
        }()
      }), []);
      const uu = (0, Uu.useCallback)((uu => {
          Nu.gameBridge.send("moveReplayFreecam", uu)
        }), []),
        Eu = (0, Uu.useCallback)((uu => ({
          onTouchStart: Eu => {
            Eu.preventDefault(), Eu.stopPropagation(), fX(uu, !0)
          },
          onTouchEnd: Eu => {
            Eu.preventDefault(), Eu.stopPropagation(), fX(uu, !1)
          },
          onTouchCancel: Eu => {
            Eu.preventDefault(), Eu.stopPropagation(), fX(uu, !1)
          }
        })), []);
      return (0, Cu.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, Cu.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, Cu.jsx)(oE, {
            onMove: uu,
            mode: "pinned"
          })
        }), (0, Cu.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, Cu.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...Eu("freeCamUp"),
            children: (0, Cu.jsx)(Wu.e, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, Cu.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...Eu("freeCamDown"),
            children: (0, Cu.jsx)(Wu.e, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var bX = ju(3318);
    const cX = [],
      NX = "Failed to load recording";

    function OX(uu, Eu, ju) {
      var su;
      console.error(Eu), Xj.NotificationProvider.showAlertPopup({
        title: uu,
        subtitle: null !== (su = (0, GZ.i)(Eu)) && void 0 !== su ? su : ju,
        confirmText: "OK"
      })
    }

    function YX(uu) {
      OX(NX, uu, GZ.c.cantOpen.text)
    }
    const hX = (0, Uu.memo)((function() {
        const uu = (0, Au.k)(),
          {
            gameState: Eu
          } = (0, du.l)(["gameState"]),
          ju = "inGame" === Eu;
        return (0, Ju.b)("replayViewerRequested", (uu => {
          (0, Au.h)("toggle" === uu ? !(0, Au.f)() : "open" === uu)
        })), (0, Uu.useEffect)((() => {
          ju && (0, JZ.e)().then((uu => {
            if (null !== uu) return (0, Au.h)(!0), (0, DZ.e)().open(uu.bytes, uu.source)
          })).catch((uu => {
            (0, Au.h)(!0), YX(uu)
          }))
        }), [ju]), uu ? (0, Cu.jsx)(DX, {}) : null
      })),
      DX = (0, Uu.memo)((function() {
        var uu, Eu, ju, su, Zu, lu, qu, fu, bu, cu, Ou, Yu;
        const hu = Uu.useRef(null),
          [Du, gu] = (0, Uu.useState)(1),
          [Mu, eu] = (0, Uu.useState)(null),
          [Gu, pu] = (0, Uu.useState)(!1),
          {
            isTouchScreen: wu
          } = (0, du.l)(["isTouchScreen"]),
          Pu = (0, Ju.f)("replay"),
          ou = (0, Ju.f)("replayEdits"),
          ku = null !== Pu,
          mu = null !== (uu = null === Pu || void 0 === Pu ? void 0 : Pu.Tb) && void 0 !== uu ? uu : 0,
          vu = null !== (Eu = null === Pu || void 0 === Pu ? void 0 : Pu.totalTicks) && void 0 !== Eu ? Eu : 0,
          Ku = Math.max(0, vu - 1),
          Vu = null !== (ju = null === Pu || void 0 === Pu ? void 0 : Pu.playing) && void 0 !== ju && ju,
          ru = null !== (su = null === Pu || void 0 === Pu ? void 0 : Pu.speed) && void 0 !== su ? su : 1,
          Qu = null !== (Zu = null === Pu || void 0 === Pu ? void 0 : Pu.cV) && void 0 !== Zu ? Zu : 20,
          Su = null !== Mu && void 0 !== Mu ? Mu : mu,
          Iu = null !== (lu = null === Pu || void 0 === Pu ? void 0 : Pu.freecam) && void 0 !== lu && lu,
          Fu = null !== (qu = null === Pu || void 0 === Pu ? void 0 : Pu.cameraMode) && void 0 !== qu ? qu : "recording",
          Bu = null !== (fu = null === ou || void 0 === ou ? void 0 : ou.cameraKeyframes) && void 0 !== fu ? fu : cX,
          Lu = null !== (bu = null === ou || void 0 === ou ? void 0 : ou.playbackMark) && void 0 !== bu ? bu : null,
          tu = null !== (cu = null === ou || void 0 === ou ? void 0 : ou.fileName) && void 0 !== cu ? cu : null,
          xu = null !== (Ou = null === ou || void 0 === ou ? void 0 : ou.unsavedChanges) && void 0 !== Ou && Ou,
          Tu = null !== (Yu = null === ou || void 0 === ou ? void 0 : ou.suggestSaveAs) && void 0 !== Yu && Yu,
          Hu = (0, Ju.f)("replayVideoExporting"),
          nu = !Hu && ku && ("freecam" === Fu || ("recording" === Fu || "keyframe" === Fu) && !Vu),
          yu = wu && ku && "freecam" === Fu && !Hu && !Gu;
        (0, dZ.e)(!0, !0, "ReplayViewerOverlay"), (0, Uu.useEffect)((() => {
          Nu.gameBridge.send("syncReplayCameraMode", null)
        }), [Iu]);
        const zu = (0, Uu.useCallback)(((uu, Eu) => {
            Nu.gameBridge.send("seekReplay", {
              Tb: uu,
              ignorePlaybackMark: null === Eu || void 0 === Eu ? void 0 : Eu.ignorePlaybackMark
            })
          }), []),
          Ru = (0, Uu.useCallback)((() => {
            Nu.gameBridge.send("setReplayPlaying", !1)
          }), []),
          uE = (0, Uu.useCallback)(((uu, Eu) => {
            Nu.gameBridge.send("moveReplayCameraKeyframe", {
              from: uu,
              to: Eu
            })
          }), []),
          EE = (0, Uu.useCallback)((uu => {
            Nu.gameBridge.send("setReplayCameraKeyframe", uu)
          }), []),
          jE = (0, Uu.useCallback)((uu => {
            Nu.gameBridge.send("deleteReplayCameraKeyframes", {
              start: uu,
              end: uu
            })
          }), []),
          sE = (0, Uu.useCallback)((uu => {
            Nu.gameBridge.send("deleteReplayCameraKeyframes", {
              start: uu.startTick,
              end: uu.endTick
            })
          }), []),
          UE = (0, Uu.useCallback)((() => Nu.gameBridge.lookup("replayCamera", null)), []),
          ZE = (0, Uu.useCallback)((uu => {
            eu(uu)
          }), []),
          XE = (0, Uu.useCallback)((uu => {
            Nu.gameBridge.send("setReplayPlaybackMark", {
              inTick: uu.startTick,
              outTick: uu.endTick
            })
          }), []),
          lE = (0, Uu.useCallback)((() => {
            Nu.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          qE = (0, Uu.useCallback)((uu => {
            const Eu = Nu.gameBridge.latest("replay");
            if (null === Eu || uu.endTick <= uu.startTick) return;
            const ju = uu.startTick,
              su = uu.endTick;
            Xj.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((uu => {
              var Uu;
              if (!0 !== uu) return;
              if ((null === (Uu = Nu.gameBridge.latest("replay")) || void 0 === Uu ? void 0 : Uu.id) !== Eu.id) return;
              Nu.gameBridge.send("cropReplay", {
                start: ju,
                end: su
              }) && (eu(null), gu(1))
            }))
          }), []),
          fE = (0, Uu.useCallback)(((uu, Eu) => {
            gu(1), eu(null), (0, DZ.e)().open(uu, Eu).catch(YX)
          }), []),
          CE = (0, Uu.useCallback)(((uu, Eu) => {
            null !== Nu.gameBridge.latest("connectedGame").websocketUrl ? Xj.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((ju => {
              !0 === ju && fE(uu, Eu)
            })) : fE(uu, Eu)
          }), [fE]),
          bE = (0, Uu.useCallback)((uu => {
            var Eu;
            const ju = null === (Eu = uu.target.files) || void 0 === Eu ? void 0 : Eu[0];
            if (uu.target.value = "", !ju) return;
            const su = new FileReader;
            su.onload = () => {
              CE(new Uint8Array(su.result), {
                fileName: ju.name
              })
            }, su.onerror = () => {
              YX(su.error)
            }, su.readAsArrayBuffer(ju)
          }), [CE]),
          cE = (0, Uu.useCallback)((() => {
            const uu = () => {
              null !== hu.current && (0, bX.e)(hu.current)
            };
            (0, eZ.m)() ? (0, eZ.h)().then((uu => {
              uu && CE(uu.bytes, {
                fileHandle: uu.handle
              })
            })).catch((Eu => {
              console.error(Eu), Xj.NotificationProvider.showPromptPopup({
                title: NX,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((Eu => {
                !0 === Eu && uu()
              }))
            })): uu()
          }), [CE]),
          NE = (0, Uu.useCallback)((async function() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let Eu;
            try {
              Eu = await wZ(uu, {
                files: (0, DZ.e)(),
                pickerSupported: eZ.m,
                chooseFile: eZ.d,
                write: eZ.n,
                download: MZ.g,
                onFallback: console.error
              })
            } catch (ju) {
              return void OX("Failed to save recording", ju)
            }
            "written" !== Eu && "downloaded" !== Eu || (() => {
              const uu = Xj.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                uu.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          OE = (0, Uu.useCallback)((uu => {
            Nu.gameBridge.send("replayAction", uu)
          }), []),
          YE = (0, Uu.useCallback)((uu => {
            gu((Eu => KZ(Eu, uu)))
          }), []),
          hE = (0, Uu.useCallback)((uu => {
            if (!Nu.gameBridge.latest("replayVideoExporting")) switch (uu) {
              case "replayLoad":
                cE();
                break;
              case "replaySave":
                NE(!1);
                break;
              case "replaySaveAs":
                NE(!0);
                break;
              case "replayTimelineZoomIn":
                YE("in");
                break;
              case "replayTimelineZoomOut":
                YE("out")
            }
          }), [cE, NE, YE]);
        (0, Ju.b)("replayUiActionRequested", hE);
        const DE = (0, Uu.useCallback)((uu => {
            Nu.gameBridge.send("setReplayCameraMode", uu)
          }), []),
          gE = ku ? Bj.f : Bj.p,
          ME = xu && !Tu ? Bj.p : Bj.f,
          eE = xu && Tu ? Bj.p : Bj.f;
        return (0, Cu.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Cu.jsx)(sX, {
            enabled: nu
          }), yu && (0, Cu.jsx)(CX, {}), (0, Cu.jsx)("input", {
            ref: hu,
            type: "file",
            accept: MZ.d,
            className: "ReplayViewerFileInput",
            onChange: bE
          }), (0, Cu.jsxs)("div", {
            className: Xu()("ReplayViewerBar", {
              Collapsed: Gu
            }),
            children: [(0, Cu.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Gu ? pu(!1) : ku ? pu(!0) : (0, Au.d)()
              },
              "aria-expanded": !Gu,
              "aria-label": Gu ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Cu.jsx)(Wu.e, {
                name: Gu ? "angle-up" : "angle-down"
              })
            }), !Gu && (0, Cu.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [ku && vu > 0 && (0, Cu.jsx)(jX, {
                maxTick: Ku,
                displayTick: Su,
                cV: Qu,
                cameraKeyframes: Bu,
                playbackMark: Lu,
                onSeek: zu,
                onPause: Ru,
                onScrubTickChange: ZE,
                onMoveCameraKeyframe: uE,
                onUpdateCameraKeyframe: EE,
                onDeleteCameraKeyframe: jE,
                onUseCurrentCamera: UE,
                onMarkRange: XE,
                onCropRange: qE,
                onDeleteKeyframesInRange: sE,
                onClearMark: lE,
                zoomLevel: Du,
                onZoomLevelChange: gu
              }, Ku), (0, Cu.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Cu.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Cu.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [ku && (0, Cu.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== tu && void 0 !== tu ? tu : "Unsaved recording", xu ? " *" : ""]
                    }), (0, Cu.jsxs)(gE, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        hE("replayLoad")
                      },
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Cu.jsxs)(Bj.f, {
                      className: "ReplayViewerActionButton",
                      onClick: Au.d,
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Cu.jsxs)(ME, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        hE("replaySave")
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Cu.jsxs)(Bj.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Nu.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Cu.jsxs)(eE, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        hE("replaySaveAs")
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Cu.jsxs)(Bj.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Nu.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !ku || 0 === vu || Hu,
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Cu.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Cu.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Cu.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Cu.jsx)(au.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Cu.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Cu.jsx)(iu.e, {
                        tooltipInner: (0, Cu.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Cu.jsxs)(Bj.$, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Fu,
                          onClick: () => {
                            DE("recording")
                          },
                          disabled: !ku,
                          children: ["Recorded ", (0, Cu.jsx)(Wu.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Cu.jsx)(iu.e, {
                        tooltipInner: (0, Cu.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Cu.jsxs)(Bj.$, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Fu,
                          onClick: () => {
                            DE("freecam")
                          },
                          disabled: !ku,
                          children: ["Free ", (0, Cu.jsx)(Wu.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Cu.jsx)(iu.e, {
                        tooltipInner: (0, Cu.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Cu.jsxs)(Bj.$, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Fu,
                          onClick: () => {
                            DE("keyframe")
                          },
                          disabled: !ku,
                          children: ["Preview ", (0, Cu.jsx)(Wu.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Cu.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Cu.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Cu.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Cu.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: mZ(Su, Qu)
                      }), (0, Cu.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Cu.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: mZ(Ku, Qu)
                      })]
                    }), (0, Cu.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Su, " / ", Ku]
                    })]
                  }), (0, Cu.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Cu.jsxs)(Bj.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        OE("replaySkipBack")
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsxs)("span", {
                        children: [" ", (0, Cu.jsx)(Wu.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Cu.jsx)(au.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Cu.jsxs)(Bj.p, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Nu.gameBridge.send("setReplayPlaying", !Vu)
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsxs)("span", {
                        children: [" ", Vu ? (0, Cu.jsx)(Wu.e, {
                          name: "pause"
                        }) : (0, Cu.jsx)(Wu.e, {
                          name: "play"
                        }), " "]
                      }), (0, Cu.jsx)(au.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Cu.jsxs)(Bj.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        OE("replaySkipForward")
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsxs)("span", {
                        children: [" ", (0, Cu.jsx)(Wu.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Cu.jsx)(au.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Cu.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Cu.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Cu.jsxs)(Bj.p, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        OE("replayRecordKeyframe")
                      },
                      disabled: !ku,
                      children: [(0, Cu.jsx)(au.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Cu.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Cu.jsx)(lX, {
                      disabled: !ku
                    }), Lu && (0, Cu.jsx)(Bj.$, {
                      className: "ReplayViewerActionButton",
                      onClick: lE,
                      disabled: !ku,
                      children: (0, Cu.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Cu.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Cu.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Cu.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Cu.jsx)(Bj.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          OE("replaySpeedDown")
                        },
                        disabled: !ku || (0, gZ.h)(ru),
                        children: (0, Cu.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Cu.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [ru, "\xd7"]
                      }), (0, Cu.jsx)(Bj.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          OE("replaySpeedUp")
                        },
                        disabled: !ku || (0, gZ.e)(ru),
                        children: (0, Cu.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Cu.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Cu.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Cu.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Cu.jsxs)(Bj.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          hE("replayTimelineZoomOut")
                        },
                        disabled: !ku || Du <= aZ[0],
                        children: [(0, Cu.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Cu.jsx)(au.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Cu.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: vZ(Du)
                      }), (0, Cu.jsxs)(Bj.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          hE("replayTimelineZoomIn")
                        },
                        disabled: !ku || Du >= aZ[aZ.length - 1],
                        children: [(0, Cu.jsx)("span", {
                          children: " + "
                        }), (0, Cu.jsx)(au.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Cu.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !ku && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var gX = ju(1369);

    function MX() {
      const [, uu] = (0, Uu.useState)(0);
      return (0, qu.f)("replayViewer|uiVisibilityChanged", (() => {
          uu((uu => uu + 1))
        })), (0, qu.f)("replayViewer|replayLoaded", (() => {
          uu((uu => uu + 1))
        })),
        function() {
          if (!(0, gX.c)()) return {};
          const uu = {
              [UX.b]: "true"
            },
            Eu = (0, ZX.c)();
          for (const {
              group: ju,
              dataAttr: su
            }
            of UX.f) su && !Eu[ju] && (uu[su] = "true");
          return uu
        }()
    }
    var eX = ju(34538),
      GX = ju(2121),
      pX = ju(8968),
      wX = ju(8956),
      JX = ju(2139);
    const dX = (0, Uu.memo)((function() {
      var uu, Eu, ju;
      const su = (0, eu.h)("customButtons");
      (0, Uu.useEffect)((() => su ? (Nu.gameBridge.send("bindCustomButtonKeys", su.filter(pX.e).map((uu => {
        let {
          id: Eu,
          keycode: ju
        } = uu;
        return {
          id: Eu,
          keycode: ju
        }
      }))), () => {
        Nu.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [su]);
      const Zu = null !== (uu = null === su || void 0 === su ? void 0 : su.filter(pX.e)) && void 0 !== uu ? uu : [],
        Xu = (0, wX.i)(),
        lu = null !== (Eu = null === (ju = (0, JX.b)()) || void 0 === ju ? void 0 : ju.hideButtonHints) && void 0 !== Eu && Eu,
        qu = "customButton" !== (null === Xu || void 0 === Xu ? void 0 : Xu.kind) || lu ? null : Xu.id,
        fu = Zu.length > 0,
        bu = (0, Uu.useRef)(null);
      return (0, Uu.useLayoutEffect)((() => {
        if (!fu) return () => {};
        const uu = bu.current,
          Eu = uu.closest(".InGameUi"),
          ju = () => {
            Eu.style.setProperty("--custom-buttons-top", `${uu.offsetTop}px`)
          };
        ju();
        const su = new ResizeObserver(ju);
        return su.observe(uu), su.observe(uu.parentElement), () => {
          su.disconnect(), Eu.style.removeProperty("--custom-buttons-top")
        }
      }), [fu]), (0, Cu.jsx)("div", {
        ref: bu,
        className: "" + ((0, Zj.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Zu.map((uu => {
          var Eu, ju;
          return (0, Cu.jsx)(aX, {
            button: uu,
            padGlyph: uu.id === qu && null !== (Eu = null === (ju = (0, Bu.e)()) || void 0 === ju ? void 0 : ju.getBoundButton("actionButton")) && void 0 !== Eu ? Eu : null
          }, uu.id)
        }))
      })
    }));

    function aX(uu) {
      let {
        button: Eu,
        padGlyph: ju
      } = uu;
      const su = (0, Uu.useRef)(null),
        Zu = () => {
          null !== su.current && (su.current = null, Nu.gameBridge.send("pressCustomButton", {
            id: Eu.id,
            down: !1
          }))
        };
      (0, Uu.useEffect)((() => Zu), []);
      const Xu = nE(Zu, {
          pressesOnPointerDown: !0
        }),
        lu = uu => {
          su.current === uu.pointerId && Zu()
        };
      return (0, Cu.jsxs)("div", {
        className: "CustomIcon",
        ...Xu,
        onLostPointerCapture: lu,
        children: [(0, Cu.jsx)(GX.c, {
          icon: Eu.icon,
          keyboardHint: (0, pX.d)(Eu.keycode),
          padGlyph: ju,
          onPointerDown: uu => {
            try {
              uu.currentTarget.setPointerCapture(uu.pointerId)
            } catch {
              return
            }
            null === su.current && Nu.gameBridge.send("pressCustomButton", {
              id: Eu.id,
              down: !0
            }), su.current = uu.pointerId
          },
          onPointerUp: lu,
          onPointerCancel: lu,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), Eu.description && (0, Cu.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: Eu.description
        })]
      })
    }
    var PX = ju(2531),
      oX = ju(257);
    const kX = {
      frame: uu => {
        const Eu = requestAnimationFrame((() => {
          uu()
        }));
        return () => {
          cancelAnimationFrame(Eu)
        }
      },
      afterFrame: uu => {
        const Eu = setTimeout(uu, 0);
        return () => {
          clearTimeout(Eu)
        }
      }
    };
    class mX {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oX.b,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kX,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = uu, this.frames = Eu, this.onHiddenMount = ju, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (uu(), () => {}) : (Eu ? this.waiting.unshift(uu) : this.waiting.push(uu), this.schedule(), () => {
          const Eu = this.waiting.indexOf(uu);
          Eu >= 0 && (this.waiting.splice(Eu, 1), this.settle())
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
        const uu = this.waiting.shift(),
          Eu = !this.shown,
          ju = performance.now();
        try {
          uu()
        } finally {
          Eu && this.onHiddenMount(performance.now() - ju), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var uu, Eu, ju;
        null === (uu = this.cancelIdle) || void 0 === uu || uu.call(this), this.cancelIdle = null, null === (Eu = this.cancelFrame) || void 0 === Eu || Eu.call(this), this.cancelFrame = null, null === (ju = this.cancelAfterFrame) || void 0 === ju || ju.call(this), this.cancelAfterFrame = null
      }
    }
    const vX = (0, Uu.createContext)(null);

    function KX(uu) {
      let {
        children: Eu,
        first: ju = !1
      } = uu;
      const su = (0, Uu.useContext)(vX),
        [Zu, Xu] = (0, Uu.useState)(null === su);
      return (0, Uu.useEffect)((() => {
        if (!Zu && null !== su) return su.request((() => {
          Xu(!0)
        }), ju)
      }), [ju, Zu, su]), Zu ? (0, Uu.createElement)(Uu.Fragment, null, Eu) : null
    }
    const VX = (0, Uu.memo)((function(uu) {
        let {
          shown: Eu
        } = uu;
        const [ju] = (0, Uu.useState)((() => new Yu.g(Eu))), [Zu] = (0, Uu.useState)((() => Eu ? null : new mX(void 0, void 0, (uu => {
          su.e.noteWorkDuringAdmissionWait(uu)
        }))));
        return (0, Uu.useLayoutEffect)((() => {
          Eu && (null === Zu || void 0 === Zu || Zu.show(), ju.show())
        }), [Eu, ju, Zu]), (0, Cu.jsx)(Yu.d.Provider, {
          value: ju,
          children: (0, Cu.jsx)(vX.Provider, {
            value: Zu,
            children: (0, Cu.jsx)(rX, {})
          })
        })
      })),
      rX = (0, Uu.memo)((function() {
        const {
          isUiHidden: uu,
          isUiHiddenByCamera: Eu,
          worldPanelHud: ju,
          isTouchScreen: su
        } = (0, du.l)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Zu = (0, cU.e)(), lu = MX(), qu = (0, Yu.n)(), fu = (0, Uu.useRef)(null), bu = (0, eu.h)("showKillfeed");
        return function() {
            const uu = (0, Yu.n)();
            (0, Uu.useEffect)((() => uu.whenShown(hu)), [uu])
          }(),
          function() {
            const uu = (0, eu.h)("inventoryColourOverride");
            (0, Uu.useEffect)((() => {
              if (!uu) return;
              const {
                panel: Eu,
                slot: ju,
                slotSelected: su,
                slotUnavailable: Uu
              } = tu(uu), Zu = document.documentElement.style;
              return Zu.setProperty("--InventoryPanelColour", Eu), Zu.setProperty("--InventorySlotColour", ju), Zu.setProperty("--InventorySlotSelectedColour", su), Zu.setProperty("--InventorySlotUnavailableColour", Uu), () => {
                Zu.removeProperty("--InventoryPanelColour"), Zu.removeProperty("--InventorySlotColour"), Zu.removeProperty("--InventorySlotSelectedColour"), Zu.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [uu])
          }(), (0, Uu.useLayoutEffect)((() => qu.whenShown((() => {
            var uu;
            null === (uu = fu.current) || void 0 === uu || uu.classList.remove("PreMounted")
          }))), [qu]), (0, Cu.jsxs)(Cu.Fragment, {
            children: [(0, Cu.jsxs)("div", {
              ref: fu,
              className: Xu()("InGameUi", {
                PreMounted: !qu.shown,
                Hidden: uu,
                HiddenByCamera: Eu,
                HiddenByWorldPanel: null !== ju,
                WorldPanelTouchControl: "touchControls" === ju
              }),
              ...lu,
              children: [(0, Cu.jsxs)(KX, {
                children: [(0, Cu.jsx)(ls.d, {}), (0, Cu.jsx)(cs, {})]
              }), (0, Cu.jsx)(Yu.j, {
                children: (0, Cu.jsx)(Ns, {})
              }), (0, Cu.jsxs)(KX, {
                children: [(0, Cu.jsx)(WU, {}), (0, Cu.jsx)(xU, {}), su && (0, Cu.jsx)(HU, {})]
              }), (0, Cu.jsxs)(KX, {
                children: [(0, Cu.jsx)(Kj, {}), (0, Cu.jsx)(Ps.e, {}), (0, Cu.jsx)(rs, {})]
              }), (0, Cu.jsx)(Yu.j, {
                children: (0, Cu.jsx)(Xs, {})
              }), (0, Cu.jsxs)(KX, {
                children: [(0, Cu.jsx)(BU.b, {}), (0, Cu.jsx)(hX, {})]
              }), (0, Cu.jsxs)(KX, {
                children: [(0, Cu.jsx)(XZ.d, {}), (0, Cu.jsx)(lZ.e, {})]
              }), (0, Cu.jsx)(KX, {
                children: (0, Cu.jsx)(rj.n, {})
              }), (0, Cu.jsx)(KX, {
                children: (0, Cu.jsx)(BX, {
                  showChat: Zu
                })
              }), (0, Cu.jsxs)(KX, {
                children: [(0, Cu.jsx)(fZ, {}), (0, Cu.jsx)(FU, {})]
              }), (0, Cu.jsxs)("div", {
                className: Xu()("RightElements", {
                  RightElementsTouchscreen: su
                }),
                "data-camera-keeper-host": "",
                children: [(0, Cu.jsxs)("div", {
                  className: Bs.i,
                  "data-holds-camera-keeper": "",
                  children: [(0, Cu.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Cu.jsx)(KX, {
                      children: (0, Cu.jsx)(aU.c, {})
                    }), (0, Cu.jsxs)(KX, {
                      children: [(0, Cu.jsx)(Su, {}), (0, Cu.jsx)(Hs.b, {})]
                    }), Zj.featureFlags.useSocialFeatures && (0, Cu.jsx)(Yu.j, {
                      children: (0, Cu.jsx)(As.c, {
                        placement: "inGame"
                      })
                    }), Zj.featureFlags.useSocialFeatures && (0, Cu.jsx)(Yu.j, {
                      children: (0, Cu.jsx)(lU, {})
                    }), bu && (0, Cu.jsx)(Yu.j, {
                      children: (0, Cu.jsx)(as, {})
                    }), (0, Cu.jsx)(KX, {
                      children: (0, Cu.jsx)(eX.d, {})
                    })]
                  }), Zj.featureFlags.useSocialFeatures && (0, Cu.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Cu.jsx)(KX, {
                      children: (0, Cu.jsx)(QU.e, {})
                    })
                  })]
                }), (0, Cu.jsxs)(KX, {
                  children: [(0, Cu.jsx)(rj.d, {
                    placement: "topRight"
                  }), (0, Cu.jsx)(LX, {})]
                })]
              }), (0, Cu.jsx)("div", {
                className: "LeftCentre",
                children: (0, Cu.jsx)(KX, {
                  children: (0, Cu.jsx)(dX, {})
                })
              }), (0, Cu.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": su ? "" : void 0,
                children: [(0, Cu.jsx)(Yu.j, {
                  children: (0, Cu.jsx)(vu, {})
                }), (0, Cu.jsx)(KX, {
                  children: (0, Cu.jsx)(iX, {})
                }), (0, Cu.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": su ? "" : void 0,
                  children: [(0, Cu.jsx)("div", {
                    className: Xu()("BottomLeftElements", {
                      Touch: su
                    }),
                    children: (0, Cu.jsxs)(KX, {
                      children: [(0, Cu.jsx)(CU, {}), !su && (0, Cu.jsx)(PX.b, {})]
                    })
                  }), (0, Cu.jsx)(KX, {
                    children: (0, Cu.jsx)(FX, {})
                  }), (0, Cu.jsx)(KX, {
                    children: (0, Cu.jsx)(is, {
                      isTouchScreen: su
                    })
                  })]
                })]
              }), (0, Cu.jsx)("div", {
                className: "MiddleLeft"
              }), su && (0, Cu.jsx)(KX, {
                children: (0, Cu.jsx)(Oj, {})
              }), (0, Cu.jsx)("div", {
                className: "CameraFadeHost",
                ref: wE.h
              })]
            }), (0, Cu.jsx)(Yu.j, {
              children: (0, Cu.jsx)(hZ.d, {})
            }), (0, Cu.jsx)(Yu.j, {
              children: (0, Cu.jsx)(UZ, {})
            }), (0, Cu.jsx)(KX, {
              first: !0,
              children: (0, Cu.jsx)(bU.e, {})
            }), (0, Cu.jsx)(Yu.j, {
              children: (0, Cu.jsx)(QX, {})
            })]
          })
      }));

    function QX() {
      return (0, Uu.useEffect)((() => {
        const uu = setTimeout((() => {
          (0, Gu.f)()
        }), 0);
        return () => {
          clearTimeout(uu), Gu.h.bD(!1)
        }
      }), []), null
    }
    const iX = (0, Uu.memo)((function() {
        const uu = (0, qu.g)("aimingOverlay", "none");
        (0, gu.d)();
        const Eu = (0, eu.l)("middleTextUpper"),
          ju = (0, eu.l)("middleTextLower");
        return (0, Cu.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === uu ? {
            visibility: "hidden"
          } : {},
          children: [(0, Cu.jsx)(IX, {
            text: Eu,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: WX
          }), (0, Cu.jsx)(IX, {
            text: ju,
            className: "MiddleText",
            maxHeightFraction: SX
          })]
        })
      })),
      WX = .3,
      SX = .2;

    function IX(uu) {
      let {
        text: Eu,
        className: ju,
        maxHeightFraction: su
      } = uu;
      const Zu = (0, Uu.useRef)(null),
        Xu = (0, Uu.useRef)(null);
      return function(uu, Eu, ju, su) {
        (0, Uu.useLayoutEffect)((() => {
          const su = uu.current,
            Uu = Eu.current;
          if (!su || !Uu) return;
          let Zu = -1,
            Xu = -1;
          const lu = uu => (Uu.style.setProperty("zoom", String(uu)), su.getBoundingClientRect().height),
            qu = () => {
              const uu = document.documentElement.clientHeight * ju;
              let Eu = 1;
              if (lu(1) > uu) {
                let ju = .5,
                  su = 1;
                for (let Eu = 0; Eu < 6; Eu++) {
                  const Eu = (ju + su) / 2;
                  lu(Eu) <= uu ? ju = Eu : su = Eu
                }
                Eu = ju
              }
              Xu = lu(Eu), Zu = su.getBoundingClientRect().width
            };
          qu();
          let fu = 0;
          const Cu = () => {
              cancelAnimationFrame(fu), fu = requestAnimationFrame(qu)
            },
            bu = new ResizeObserver((() => {
              const {
                width: uu,
                height: Eu
              } = su.getBoundingClientRect();
              uu === Zu && Eu === Xu || Cu()
            }));
          return bu.observe(su), window.addEventListener("resize", Cu), () => {
            bu.disconnect(), window.removeEventListener("resize", Cu), cancelAnimationFrame(fu), Uu.style.removeProperty("zoom")
          }
        }), [uu, Eu, ju, su])
      }(Zu, Xu, su, Eu.content), (0, Cu.jsx)("div", {
        ref: Zu,
        className: "MiddleTextFit",
        children: (0, Cu.jsx)(qZ, {
          ref: Xu,
          text: Eu,
          className: ju
        })
      })
    }
    const FX = (0, Uu.memo)((function() {
        const uu = (0, qu.g)("aimingOverlay", "none");
        (0, gu.d)();
        const Eu = (0, eu.h)("useInventory");
        return (0, Cu.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === uu ? {
            visibility: "hidden"
          } : {},
          children: [(0, Cu.jsx)(bu, {}), (0, Cu.jsx)(rj.d, {}), (0, Cu.jsx)(Qj, {}), (0, Cu.jsx)(Yu.j, {
            children: (0, Cu.jsx)(VU, {})
          }), (0, Cu.jsxs)("div", {
            className: "HotBarRow",
            children: [Eu ? (0, Cu.jsx)(Fu.b, {}) : (0, Cu.jsx)(Fu.c, {}), (0, Cu.jsx)(Lu, {})]
          })]
        })
      })),
      BX = (0, Uu.memo)((function(uu) {
        let {
          showChat: Eu
        } = uu;
        const {
          t: ju
        } = (0, mu.A)(), {
          clientEscMenuOptions: su,
          isTouchScreen: Zu
        } = (0, du.l)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, gu.d)();
        const {
          userContext: lu,
          isUserContextUpdating: qu
        } = (0, Du.c)(), fu = (0, eu.h)("hideCoordinates"), bu = (0, eu.h)("customVariationTitle"), {
          requestedGameNameWithVariation: Nu,
          gameNameWithVariation: Ou,
          lobbyName: Yu,
          shownLobbyName: hu
        } = (0, Ju.f)("connectedGame"), Gu = (0, cu.e)(Nu, Yu, !1), [pu, wu] = (0, Uu.useState)(null), au = (0, oU.m)(Ou || Nu || ""), Pu = bu || au || "";
        (0, Uu.useEffect)((() => {
          qu || ys.b.getFavouriteLobbies(lu).then((uu => {
            console.log("Got favourite lobbies", uu), wu(uu)
          }))
        }), [qu, lu]);
        const ou = (0, Uu.useRef)(null);
        return (0, Uu.useLayoutEffect)((() => {
          const uu = ou.current,
            Eu = document.documentElement,
            ju = new ResizeObserver((() => {
              Eu.style.setProperty("--InGameHeaderRowsHeight", `${uu.offsetHeight}px`)
            }));
          return ju.observe(uu), () => {
            ju.disconnect(), Eu.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), Ts(ou), (0, Cu.jsxs)(Cu.Fragment, {
          children: [(0, Cu.jsxs)("div", {
            className: Xu()(Bs.f, {
              Touchscreen: Zu
            }),
            ref: ou,
            children: [(0, Cu.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Cu.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: uu => {
                  uu.stopPropagation(), uu.preventDefault()
                },
                onClick: () => {
                  du.d.set({
                    openEverythingMenuName: Mu.o.SETTINGS
                  })
                },
                children: [(0, Cu.jsx)(PU.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Cu.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Cu.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Gu && (0, Cu.jsx)(PU.b, {}), null !== Gu && (0, Cu.jsxs)(Cu.Fragment, {
                  children: [Gu, Pu && ` ${Pu}`]
                })]
              }), (0, Cu.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Cu.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: hu
              }), (0, kU.H)(Yu) && (0, Cu.jsx)(iu.e, {
                tooltipInner: (0, Cu.jsx)("div", {
                  children: ju(null !== pu && pu.includes(Yu) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Cu.jsx)("div", {
                  children: (0, Cu.jsx)(Bj.A, {
                    isLiked: null !== pu && pu.includes(Yu),
                    onClick: () => {
                      try {
                        if (!pu) return;
                        pu.includes(Yu) ? (ys.b.unfavouriteLobby(lu, Yu).catch((uu => {
                          console.error("Failed to favourite lobby", uu)
                        })), wu(pu.filter((uu => uu !== Yu)))) : (ys.b.favouriteLobby(lu, Yu).catch((uu => {
                          console.error("Failed to favourite lobby", uu)
                        })), wu([...pu, Yu]))
                      } catch (uu) {
                        console.error("Failed to like lobby", uu)
                      }
                    },
                    isLoading: null === pu
                  })
                })
              }), (0, Cu.jsx)(NZ, {})]
            }), (0, Cu.jsx)(GU, {
              show: su.showFPS
            }), !fu && su.showCoordinates && (0, Cu.jsx)(JU, {}), !fu && su.showChunkCoordinates && (0, Cu.jsx)(dU, {}), (0, Cu.jsx)(CZ, {})]
          }), (0, Cu.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Cu.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: Eu && (0, Cu.jsx)(Hu.e, {})
            })
          })]
        })
      })),
      LX = (0, Uu.memo)((function() {
        (0, gu.d)();
        const uu = (0, eu.l)("RightInfoText"),
          [Eu, ju] = (0, Uu.useState)(null);
        return (0, gE.g)(Eu, ".RightElements"), uu.hasText ? (0, Cu.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Cu.jsx)(qZ, {
            ref: ju,
            text: uu,
            className: "RightInfoDiv",
            children: (0, Cu.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Cu.jsx)(fu.d, {
                text: uu.content
              })
            })
          })
        }) : null
      }))
  },
  4999: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu
    });
    var su = ju(58),
      Uu = ju(337),
      Zu = ju(1971),
      Xu = ju(1154);

    function lu(uu) {
      let {
        text: Eu
      } = uu;
      const ju = [];
      let lu = "";
      return (0, Uu.gc)(Eu).forEach(((uu, Eu) => {
        if ("string" === typeof uu || !(0, Zu.h)(uu.icon)) return void(lu += "string" === typeof uu ? uu : uu.icon);
        const Uu = Math.max(0, lu.trimEnd().search(/\S{1,12}$/));
        ju.push((0, Xu.jsxs)(su.Fragment, {
          children: [lu.slice(0, Uu), (0, Xu.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [lu.slice(Uu), (0, Xu.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": uu.icon,
              children: (0, Xu.jsx)(Zu.d, {
                itemName: uu.icon,
                amount: 0
              })
            })]
          })]
        }, Eu)), lu = ""
      })), ju.push(lu), (0, Xu.jsx)(Xu.Fragment, {
        children: ju
      })
    }
  },
  36912: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => cu,
      f: () => Cu,
      g: () => bu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1971),
      lu = ju(1154);
    const qu = 350;
    let fu = 0;

    function Cu() {
      return fu += 1, fu
    }

    function bu(uu, Eu) {
      let ju = 0;
      for (const su of uu) "ingredient" !== su.kind && su.yl === Eu && (ju += su.amount);
      return ju > 0 ? {
        idx: Eu,
        amount: ju
      } : null
    }

    function cu(uu) {
      var Eu, ju;
      let {
        anim: Uu,
        onComplete: fu
      } = uu;
      const Cu = null !== (Eu = Uu.delayMs) && void 0 !== Eu ? Eu : 0,
        bu = null !== (ju = Uu.durationMs) && void 0 !== ju ? ju : qu,
        [cu, Nu] = (0, su.useState)(Uu.from),
        [Ou, Yu] = (0, su.useState)(0 === Cu),
        [hu, Du] = (0, su.useState)(!1),
        gu = (0, su.useRef)(!1);
      return (0, su.useEffect)((() => {
        let uu, Eu;
        const ju = () => {
            gu.current = !0, Yu(!0), uu = requestAnimationFrame((() => {
              Eu = requestAnimationFrame((() => {
                Nu({
                  x: Uu.to.x,
                  y: Uu.to.y
                }), Du(!0)
              }))
            }))
          },
          su = gu.current ? 0 : Cu;
        let Zu;
        su > 0 ? Zu = setTimeout(ju, su) : ju();
        const Xu = setTimeout((() => {
          fu(Uu.id)
        }), su + bu + 50);
        return () => {
          clearTimeout(Zu), cancelAnimationFrame(uu), cancelAnimationFrame(Eu), clearTimeout(Xu)
        }
      }), [Uu.id, Uu.to.x, Uu.to.y, fu, Cu, bu]), (0, lu.jsx)("div", {
        className: Zu()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Uu.kind,
          Waiting: !Ou,
          Arrived: hu
        }),
        style: {
          left: cu.x,
          top: cu.y,
          "--fly-duration": `${bu}ms`
        },
        children: (0, lu.jsx)(Xu.d, {
          itemName: Uu.itemName,
          amount: Uu.amount
        })
      })
    }
  },
  36896: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Qu,
      c: () => Su
    });
    var su = ju(58),
      Uu = ju(3179),
      Zu = ju(6777),
      Xu = ju(2121),
      lu = ju(2543),
      qu = ju(9036),
      fu = ju(349),
      Cu = ju(24),
      bu = ju(1499),
      cu = ju(31),
      Nu = ju(1105),
      Ou = ju.n(Nu),
      Yu = ju(337),
      hu = ju(36902),
      Du = ju(1964),
      gu = ju(2027),
      Mu = ju(8909),
      eu = ju(1154);

    function Gu(uu) {
      var Eu, ju;
      let {
        slotIdx: Zu
      } = uu;
      const Xu = (0, gu.d)("hotbar", (uu => {
          var Eu;
          return null !== (Eu = uu.items[Zu]) && void 0 !== Eu ? Eu : null
        })),
        qu = (0, gu.d)("hotbar", (uu => uu.ammo)),
        [Cu, bu] = (0, su.useState)(!1),
        cu = (0, su.useRef)(null),
        [Nu, Yu] = (0, su.useState)(null),
        [hu, Gu] = (0, su.useState)(null),
        pu = (0, lu.h)("maxAuraLevel"),
        wu = (0, Uu.b)(),
        Ju = (0, su.useCallback)((() => {
          if (clearTimeout(cu.current), Xu) {
            var uu, Eu, ju, su;
            const qu = Xu.displayName,
              Cu = [],
              bu = Array.isArray(qu) ? qu : [qu],
              cu = {
                fontStyle: null !== (uu = Xu.attributes.customAttributes) && void 0 !== uu && uu.author ? "italic" : "normal"
              };
            for (const uu of bu) uu.str ? Cu.push(uu) : Cu.push({
              str: uu,
              style: cu
            });
            if (null !== (Eu = Xu.attributes.customAttributes) && void 0 !== Eu && Eu.enchantments) {
              Cu.push(" ");
              const uu = Object.entries(Xu.attributes.customAttributes.enchantments).sort(((uu, Eu) => Eu[1] - uu[1])),
                Eu = Xu.attributes.customAttributes.enchantmentData;
              for (const [ju, su] of uu) {
                var Uu, Zu;
                const uu = null !== (Uu = null === Eu || void 0 === Eu || null === (Zu = Eu[ju]) || void 0 === Zu ? void 0 : Zu.icon) && void 0 !== Uu ? Uu : `${ju} Enchantment`;
                var lu;
                if (su < 4)
                  for (let Eu = 0; Eu < su; Eu++) Cu.push({
                    icon: uu,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Cu.push({
                  icon: uu,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Cu.push(null !== (lu = (0, fu.N)(su)) && void 0 !== lu ? lu : su.toString())
              }
            }
            Yu(Cu), Gu(null !== (ju = null === (su = Xu.attributes.customAttributes) || void 0 === su ? void 0 : su.enchantmentTier) && void 0 !== ju ? ju : null)
          } else Yu(null), Gu(null);
          bu(!0), wu();
          const qu = null === Xu || void 0 === Xu ? void 0 : Xu.attributes.customAttributes;
          void 0 === (null === qu || void 0 === qu ? void 0 : qu.shotsLeft) && (cu.current = setTimeout((() => {
            bu(!1)
          }), 2e3))
        }), [null === Xu || void 0 === Xu ? void 0 : Xu.name, Zu, null === Xu || void 0 === Xu ? void 0 : Xu.instance, null === Xu || void 0 === Xu ? void 0 : Xu.displayName]);
      (0, su.useEffect)((() => (Ju(), () => {
        clearTimeout(cu.current), bu(!1)
      })), [null === Xu || void 0 === Xu ? void 0 : Xu.name, Zu, null === Xu || void 0 === Xu ? void 0 : Xu.instance, Ju]);
      const du = null === Xu || void 0 === Xu || null === (Eu = Xu.attributes.customAttributes) || void 0 === Eu ? void 0 : Eu.shotsLeft,
        au = void 0 === du ? null : (0, eu.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${du}|${Xu.requiresAmmo?`${qu}x${Xu.clipSize}`:Xu.clipSize}`
        }),
        Pu = (0, Mu.h)();
      return (0, eu.jsx)(eu.Fragment, {
        children: Cu && Xu && !Pu.showing ? (0, eu.jsxs)("div", {
          className: Ou()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === pu,
            Enchanted: null !== hu
          }),
          style: {
            "--enchantmentColour": null !== (ju = fu.jb[hu]) && void 0 !== ju ? ju : fu.jb.None,
            "--duration": hu ? (0, fu.cb)(hu) + "s" : void 0
          },
          children: [hu && (0, eu.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, eu.jsx)(Du.d, {
              text: Nu
            }), au]
          }), (0, eu.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, eu.jsx)(Du.d, {
              text: Nu
            }), au]
          })]
        }) : null
      })
    }
    var pu = ju(36912),
      wu = ju(22),
      Ju = ju(1986),
      du = ju(649),
      au = ju(2545),
      Pu = ju(3599),
      ou = ju(3601);
    var ku = ju(1175),
      mu = ju(1170),
      vu = ju(2610);

    function Ku() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Vu = ju(9118),
      ru = ju(1520);
    const Qu = (0, su.memo)((function() {
      const [uu, Eu] = (0, su.useState)(0), ju = (0, lu.h)("useFullInventory"), Xu = (0, lu.h)("highlightedHotbarSlots"), {
        isTouchScreen: qu,
        openInGameMenuName: fu
      } = (0, wu.l)(["isTouchScreen", "openInGameMenuName"]), cu = null !== fu && "inventory" !== fu, Nu = (0, gu.f)("fullInventory") && "inventory" === fu, Yu = function() {
        const uu = (0, ku.r)(((uu, Eu) => `${uu}:${(0,mu.d)(uu,Eu)?"portrait":"landscape"}`)),
          [Eu, ju] = (0, su.useState)(Ku);
        return (0, su.useLayoutEffect)((() => {
          ju(Ku())
        }), [uu]), (0, bu.f)(vu.d, (() => {
          ju(Ku())
        })), Eu
      }(), Du = qu && !Yu;
      ! function(uu, Eu, ju) {
        (0, su.useLayoutEffect)((() => {
          const su = document.documentElement.classList;
          return uu && (su.add("TouchHotbar"), su.toggle("TouchHotbarKeysAbove", Eu), su.toggle("TouchHotbarHasBag", ju)), (0, Pu.g)(), Cu.h.TY(ou.b), () => {
            su.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Pu.g)(), Cu.h.TY(ou.b)
          }
        }), [uu, Eu, ju])
      }(qu, Du, ju);
      const [Mu, au] = (0, Zu.c)("changedHotbarUsingNumkeys", !0), Vu = (0, gu.d)("hotbar", (uu => uu.selectedSlot)), ru = null !== Vu && void 0 !== Vu ? Vu : uu, Qu = (0, Uu.b)(), Iu = (0, su.useRef)(null), Fu = (0, bu.g)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, bu.f)("inventoryDraggedItemUpdated", (uu => {
        Iu.current = uu, Qu()
      })), (0, gu.b)("hotbarScrolled", (uu => {
        null === Vu && tu(uu)
      })), (0, gu.b)("hotbarSlotRequested", (uu => {
        Lu(uu), au(!1)
      })), (0, gu.b)("numberKeyPressed", (() => {
        au(!1)
      })), (0, gu.b)("hotbarDropRequested", (uu => {
        const Eu = Ju.gameBridge.latest("hotbar").items[ru];
        if (Eu) {
          var ju;
          const su = uu && null !== (ju = Eu.amount) && void 0 !== ju ? ju : 1;
          Ju.gameBridge.send("removeInventoryItem", {
            slot: ru,
            amount: su,
            drop: !0
          })
        }
      }));
      const Lu = uu => {
          Ju.gameBridge.send("selectHotbarSlot", uu), Eu(uu)
        },
        tu = uu => {
          Lu((ru + uu + du.o) % du.o)
        };
      let xu, Tu = null,
        Hu = null,
        Au = uu => uu => {},
        nu = uu => Eu => {
          Lu(uu)
        },
        yu = uu => uu => {},
        zu = [];
      if (Nu) {
        var Ru;
        const uu = Iu.current;
        if (null === uu || void 0 === uu || !uu.setHovered) return (0, eu.jsx)("div", {
          className: Ou()("HotBarContainer", {
            Touch: qu,
            KeysAbove: Du
          }),
          children: (0, eu.jsx)("div", {
            className: "HotBar"
          })
        });
        Tu = uu.draggedInfo, Hu = uu.specialItemInfo, Au = uu.setHovered, nu = uu.pointerDown, yu = uu.pointerUp, xu = uu.variation, zu = null !== (Ru = uu.craftFlyAnims) && void 0 !== Ru ? Ru : []
      }
      return (0, eu.jsxs)("div", {
        className: Ou()("HotBarContainer", {
          Touch: qu,
          PopupOpen: qu && cu,
          KeysAbove: Du
        }),
        children: [(0, eu.jsxs)("div", {
          className: Ou()("HotBar", {
            HoverDisabled: Fu
          }),
          children: [qu && (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsx)(Wu, {
              useFullInventory: ju,
              inventoryOpen: Nu
            }), (0, eu.jsx)(iu, {
              direction: "Previous",
              onPress: () => {
                tu(-1)
              }
            })]
          }), !qu && (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsx)(Su, {}), (0, eu.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, eu.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((uu, Eu) => (0, eu.jsx)(hu.e, {
              idx: Eu,
              draggedInfo: Tu,
              specialItemInfo: Hu,
              craftFlyHoldbackInfo: (0, pu.g)(zu, Eu),
              setHovered: Au(Eu),
              pointerDown: nu(Eu),
              pointerUp: yu(Eu),
              variation: xu,
              isSelected: Eu === ru,
              hotbarHighlighted: !0 === (null === Xu || void 0 === Xu ? void 0 : Xu.includes(Eu)),
              hoverDisabled: Fu,
              showNumber: Mu && !qu
            }, Eu)))
          }), qu && (0, eu.jsx)(iu, {
            direction: "Next",
            onPress: () => {
              tu(1)
            }
          }), !qu && (0, eu.jsxs)(eu.Fragment, {
            children: [(0, eu.jsx)("div", {
              className: "HotBarFiller"
            }), (0, eu.jsx)("div", {
              className: Ou()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !ju
              }),
              onPointerDown: () => {
                Cu.h.TY("toggleMenu", "inventory")
              },
              children: (0, eu.jsx)(Bu, {})
            })]
          })]
        }), (0, eu.jsx)(Gu, {
          slotIdx: ru
        })]
      })
    }));

    function iu(uu) {
      let {
        direction: Eu,
        onPress: ju
      } = uu;
      return (0, eu.jsx)("div", {
        className: Ou()("HotBarArrow", Eu),
        ...ru.e,
        children: (0, eu.jsx)(Xu.c, {
          icon: "Previous" === Eu ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: ju
        })
      })
    }
    const Wu = (0, su.memo)((function(uu) {
        let {
          useFullInventory: Eu,
          inventoryOpen: ju
        } = uu;
        const Uu = (0, lu.h)("maxAuraLevel"),
          Zu = (0, su.useRef)(null),
          Xu = (0, qu.b)();
        return function(uu, Eu, ju) {
          (0, su.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", Eu), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [Eu]), (0, su.useLayoutEffect)((() => {
            const Eu = uu.current.closest(".BottomMiddleElements");
            return Eu.classList.toggle("TouchInventoryOpen", ju), () => {
              Eu.classList.remove("TouchInventoryOpen")
            }
          }), [uu, ju])
        }(Zu, Xu, ju), (0, Vu.h)(Zu, Xu, ju), (0, eu.jsxs)("div", {
          ref: Zu,
          className: Ou()("TouchInventoryKeys", {
            NoAuraBar: 0 === Uu,
            InventoryOpen: ju
          }),
          children: [(0, eu.jsx)(Su, {
            touchKey: !0
          }), (0, eu.jsx)("div", {
            className: Ou()("TouchInventoryKey BagKey", {
              Hidden: !Eu
            }),
            ...ru.e,
            children: (0, eu.jsx)(Bu, {
              touchKey: !0
            })
          })]
        })
      })),
      Su = (0, su.memo)((function(uu) {
        let {
          touchKey: Eu = !1
        } = uu;
        const ju = (0, qu.b)();
        return (0, eu.jsx)("div", {
          className: Eu ? Ou()("TouchInventoryKey ShopKey", {
            Hidden: !ju
          }) : Ou()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !ju
          }),
          ...Eu ? ru.e : {},
          children: (0, eu.jsx)(Xu.c, {
            icon: (0, fu.gc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              ju && wu.d.set({
                openEverythingMenuName: Yu.o.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Iu(uu) {
      let {
        player: Eu
      } = uu;
      return Eu.some((uu => null !== uu && fu._c.includes(uu.name)))
    }

    function Fu(uu) {
      uu.creative || cu.k.getItem("LogInInventoryRedDotTutorialComplete") || (Iu(uu) ? (Cu.h.TY("RedDotOpenInventoryIcon", !0), Cu.h.TY("TouchTutorialOpenInventoryIcon", !0)) : (Cu.h.TY("RedDotOpenInventoryIcon", !1), Cu.h.TY("TouchTutorialOpenInventoryIcon", !1)))
    }
    const Bu = (0, su.memo)((function(uu) {
      let {
        touchKey: Eu = !1
      } = uu;
      (0, su.useEffect)((() => {
        Fu(Ju.gameBridge.latest("inventory"))
      }), []), (0, gu.b)("inventory", Fu);
      const ju = (0, au.n)();
      return (0, bu.f)("toggleMenu", (uu => {
        ju.shown && (null !== uu && void 0 !== uu && uu.startsWith("inventory") && Iu(Ju.gameBridge.latest("inventory")) ? (cu.k.setItem("LogInInventoryRedDotTutorialComplete", !0), Cu.h.TY("RedDotOpenInventoryIcon", !1), Cu.h.TY("TouchTutorialOpenInventoryIcon", !1)) : "shop" === uu && Cu.h.TY("showShopTouchTutorial", !1))
      })), Eu ? (0, eu.jsx)(Xu.c, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Cu.h.TY("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, eu.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Cu.h.TY("toggleMenu", "inventory")
        },
        children: (0, eu.jsx)(Xu.c, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: uu => {
            Cu.h.TY("toggleMenu", "inventory"), uu.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36902: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu,
      f: () => Ou
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1979),
      lu = ju(1971),
      qu = ju(1986),
      fu = ju(2027),
      Cu = ju(36904),
      bu = ju(34559),
      cu = ju(1443),
      Nu = ju(1154);
    const Ou = (uu, Eu, ju) => {
      let su = Eu,
        Uu = !1;
      for (const Zu of ju)(null === Zu || void 0 === Zu ? void 0 : Zu.idx) === uu && (Uu = !0, su > 0 && (su -= Zu.amount));
      return {
        displayedAmt: su,
        shown: !Uu || su > 0
      }
    };
    const Yu = uu => {
        let {
          idx: Eu
        } = uu;
        return (0, cu.t)() ? null : (0, Nu.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: Eu < 9 ? Eu + 1 : 0
        })
      },
      hu = (0, su.memo)((function(uu) {
        var Eu, ju, su;
        let {
          idx: Uu,
          setHovered: cu,
          pointerDown: hu,
          pointerUp: Du,
          draggedInfo: gu,
          specialItemInfo: Mu,
          craftFlyHoldbackInfo: eu,
          defaultIconB64: Gu = null,
          variation: pu,
          isSelected: wu = !1,
          hotbarHighlighted: Ju = !1,
          hoverDisabled: du = !1,
          showNumber: au = !1,
          showNewDot: Pu = !1
        } = uu;
        const ou = (0, fu.d)("inventory", (uu => Uu === Cu.h ? null : (0, bu.m)(uu, Uu)));
        let ku, mu, vu, Ku;
        if (Uu === Cu.h) Mu && (ku = Mu.name, vu = Mu.amount, Ku = Mu.attributes);
        else if (ou) {
          var Vu;
          ku = ou.name, mu = ou.icon, vu = null !== (Vu = ou.amount) && void 0 !== Vu ? Vu : 0, Ku = ou.attributes
        }
        const ru = null === (Eu = Ku) || void 0 === Eu || null === (ju = Eu.customAttributes) || void 0 === ju ? void 0 : ju.enchantmentTier,
          Qu = (0, Xu.f)(Ku),
          {
            displayedAmt: iu,
            shown: Wu
          } = Ou(Uu, vu, [gu, Mu, eu]),
          Su = ku && Wu,
          Iu = void 0 !== pu && function(uu, Eu) {
            const {
              enchantable: ju,
              salvageable: su
            } = qu.gameBridge.latest("stationItems");
            return "Enchanting Table" === uu ? !0 === ju[Eu] : "Salvaging Table" === uu && !0 === su[Eu]
          }(pu, ku);
        return (0, Nu.jsxs)("div", {
          className: Zu()("InvenItem", {
            Highlighted: Su && Iu,
            Selected: wu,
            HotbarHighlighted: Ju,
            HoverDisabled: du
          }),
          onPointerEnter: () => {
            null === cu || void 0 === cu || cu(!0)
          },
          onPointerLeave: () => {
            null === cu || void 0 === cu || cu(!1)
          },
          onPointerDown: hu,
          onPointerUp: Du,
          "data-inven-idx": Uu,
          children: [Su && (0, Nu.jsx)(lu.d, {
            itemName: null !== (su = mu) && void 0 !== su ? su : ku,
            amount: iu,
            enchantmentTier: ru,
            bar: Qu
          }), Su && Pu && (0, Nu.jsx)("div", {
            className: "InvenItemNewDot"
          }), au && (0, Nu.jsx)(Yu, {
            idx: Uu
          }), Gu && !Su && (0, Nu.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Gu})`
            }
          })]
        })
      }))
  },
  36904: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Uu
    });
    const su = -1,
      Uu = -2
  },
  37406: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => du
    });
    var su = ju(58),
      Uu = ju(37411),
      Zu = ju(1964),
      Xu = ju(628),
      lu = ju(24),
      qu = ju(1105),
      fu = ju.n(qu),
      Cu = ju(36940),
      bu = ju(2724),
      cu = ju(36946),
      Nu = ju(2752),
      Ou = ju(2732),
      Yu = ju(3802),
      hu = ju(36948),
      Du = ju(22),
      gu = ju(2083),
      Mu = ju(2479),
      eu = ju(1278),
      Gu = ju(5084),
      pu = ju(2027),
      wu = ju(91),
      Ju = ju(1154);
    const du = (0, su.memo)((function() {
      const uu = (0, Uu.c)(),
        Eu = (0, pu.f)("players"),
        ju = (0, pu.f)("lobbyLeaderboardRows"),
        lu = (0, pu.f)("hiddenPlayerNames"),
        qu = (0, su.useRef)(null),
        [fu, Cu] = (0, su.useReducer)((uu => uu + 1), 0);
      return (0, su.useEffect)((() => (0, gu.b)((() => {
        Cu()
      }))), []), (0, Ju.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, Ju.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!uu) return (0, Ju.jsx)(Ju.Fragment, {});
            const su = [...Eu.ids],
              Uu = {},
              fu = {};
            for (const uu of su) {
              var Cu, bu;
              Uu[uu] = null === (Cu = ju[uu]) || void 0 === Cu ? void 0 : Cu.colour;
              const Eu = null === (bu = ju[uu]) || void 0 === bu ? void 0 : bu.values;
              Eu && (fu[uu] = {
                ...Eu
              })
            }
            const Nu = Object.keys(uu);
            Nu.sort(((Eu, ju) => uu[Eu].sortPriority - uu[ju].sortPriority)), su.sort(((Eu, ju) => {
              if (!fu[Eu] || !fu[ju]) return 0;
              for (const su of Nu) {
                const Uu = fu[Eu][su],
                  Zu = fu[ju][su];
                let Xu = 0;
                if ("string" == typeof Uu && "string" == typeof Zu ? Xu = Uu.localeCompare(Zu) : "number" == typeof Uu && "number" == typeof Zu ? Xu = Uu - Zu : "number" == typeof Uu && "string" == typeof Zu ? Xu = 1 : "string" == typeof Uu && "number" == typeof Zu && (Xu = -1), Xu) return Xu * ("ascending" === uu[su].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const uu of su) {
              var Ou, Yu, hu;
              const {
                name: su,
                ranks: Uu,
                cosmetics: Zu
              } = Eu.byId[uu], lu = [], qu = null !== (Ou = null === (Yu = ju[uu]) || void 0 === Yu || null === (hu = Yu.tags) || void 0 === hu ? void 0 : hu.flatMap((uu => 0 === uu.length ? uu : [...uu, String.fromCharCode(8198)]))) && void 0 !== Ou ? Ou : [];
              lu.push(...qu), lu.push(...(0, eu.w)(Uu, su, (null === Zu || void 0 === Zu ? void 0 : Zu.nameColour) === Xu.e || null === Zu || void 0 === Zu ? void 0 : Zu.nameColour)), fu[uu] ??= {}, fu[uu].name = lu
            }

            function Du(uu, ju) {
              if (fu[uu] && void 0 !== fu[uu][ju]) {
                if ("name" === ju) {
                  const {
                    name: su,
                    cosmetics: Uu
                  } = Eu.byId[uu];
                  return (0, Ju.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Uu && (0, Ju.jsx)(Mu.d, {
                      cosmetics: Uu
                    }), " ", (0, Ju.jsx)(Zu.d, {
                      text: fu[uu][ju],
                      friendBadgeFor: (0, gu.e)(su, lu) ? su : void 0
                    })]
                  })
                }
                return (0, Ju.jsx)(Zu.d, {
                  text: fu[uu][ju]
                })
              }
              return ""
            }
            const pu = Object.keys(uu).filter((Eu => !0 !== uu[Eu].hidden)).map((Eu => {
              var ju;
              return {
                key: Eu,
                header: (0, Ju.jsx)(Zu.d, {
                  text: null !== (ju = uu[Eu].displayName) && void 0 !== ju ? ju : ""
                })
              }
            }));
            return (0, Ju.jsx)("div", {
              ref: qu,
              className: "LobbyLeaderboard",
              children: (0, Ju.jsx)(Gu.d, {
                columns: pu,
                rows: su,
                getRowKey: uu => uu,
                renderRow: ju => {
                  const su = ju !== Eu.localId;
                  return (0, Ju.jsx)(au, {
                    playerId: ju,
                    playerName: Eu.byId[ju].name,
                    isOtherPlayer: su,
                    opensProfileCard: (0, cu.d)(su, Eu.byId[ju].name, lu),
                    lobbyLeaderboardInfo: uu,
                    getPlayerValue: Du,
                    playerColors: Uu
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function au(uu) {
      let {
        playerId: Eu,
        playerName: ju,
        isOtherPlayer: Uu,
        opensProfileCard: Zu,
        lobbyLeaderboardInfo: Xu,
        getPlayerValue: qu,
        playerColors: gu
      } = uu;
      const Mu = (0, su.useRef)(null);
      (0, su.useEffect)((() => () => {
        bu.c.closeIfOwner(Mu)
      }), []);
      const eu = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            lu.h.TY("OpenReportMenu", {
              playerEId: Eu,
              playerName: ju,
              VC: null,
              serverChatMsgId: null
            })
          }
        },
        Gu = () => ({
          ...(0, cu.c)(Eu, ju),
          showLocation: !1,
          status: null,
          extraActions: [eu],
          moderationActions: null === ju ? [] : (0, hu.b)(ju),
          friendRequestSource: "leaderboard"
        });
      return (0, Ju.jsxs)("tr", {
        ref: Mu,
        "data-pad-focusable": Zu || void 0,
        [bu.e]: Zu || void 0,
        onClick: Zu ? () => {
          var uu;
          bu.c.toggle(Mu, {
            ...Gu(),
            anchor: null !== (uu = Mu.current.querySelector(".PlayerPfpAndName")) && void 0 !== uu ? uu : Mu.current
          })
        } : void 0,
        onContextMenu: Zu ? uu => {
          (0, Nu.d)(Mu, uu, Gu(), Du.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Zu ? uu => {
          (0, Ou.d)(uu, (() => (0, cu.c)(Eu, ju).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Xu).map((uu => !0 === Xu[uu].hidden ? null : (0, Ju.jsxs)("td", {
          className: fu()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Uu
          }),
          children: [(0, Ju.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: qu(Eu, uu)
          }), (0, Ju.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: gu[Eu]
            }
          })]
        }, uu))), Uu && !Zu && (0, Ju.jsx)(Cu.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Mu,
          options: [{
            icon: eu.icon,
            text: eu.text,
            onPointerDown: eu.onClick
          }, ...null === ju || wu.featureFlags.useSocialFeatures ? [] : (0, Yu.e)(null, ju)]
        })]
      })
    }
  },
  36948: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu
    });
    var su = ju(2011),
      Uu = ju(2560),
      Zu = ju(36951);
    const Xu = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function lu(uu, Eu) {
      return async () => function(uu, Eu, ju) {
        return null === Eu ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : Eu.ok ? {
          message: {
            key: Xu[uu.type]
          },
          next: ju
        } : {
          message: {
            fromServer: Eu.message
          },
          next: null
        }
      }(uu, await (0, Zu.f)(uu), Eu())
    }

    function qu(uu) {
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
        run: lu({
          type: "ban",
          name: uu
        }, (() => function(uu) {
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
            run: lu({
              type: "unban",
              name: uu
            }, (() => null))
          }
        }(uu)))
      }
    }

    function fu(uu, Eu) {
      if (null === uu) return [];
      const ju = [],
        su = function(uu, Eu) {
          var ju, su;
          return null !== (ju = null !== (su = uu.here.find((uu => uu.name === Eu))) && void 0 !== su ? su : uu.away.find((uu => uu.name === Eu))) && void 0 !== ju ? ju : null
        }(uu, Eu);
      var Zu, Xu;
      return null !== su && void 0 !== su && su.can.kick && ju.push((Zu = Eu, Xu = su.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: lu({
          type: "kick",
          name: Zu
        }, (() => Xu ? qu(Zu) : null))
      })), null !== su && void 0 !== su && su.can.ban && ju.push(qu(Eu)), ju.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, Uu.f)({
            page: "players",
            focusName: Eu,
            source: "profile_card"
          })
        }
      }), ju
    }

    function Cu(uu) {
      var Eu;
      return fu(null !== (Eu = su.e.get("lobbyManage")) && void 0 !== Eu ? Eu : null, uu)
    }
  },
  36951: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu,
      f: () => qu
    });
    var su = ju(1533),
      Uu = ju(2011),
      Zu = ju(1986);
    const Xu = 1e4;
    let lu = 0;

    function qu(uu) {
      const Eu = ++lu;
      return new Promise((ju => {
        const lu = Eu => {
            qu(), clearTimeout(fu), !1 === (null === Eu || void 0 === Eu ? void 0 : Eu.ok) && (0, su.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: uu.type
            }), ju(Eu)
          },
          qu = Uu.e.subscribe("lobbyManage", (uu => {
            const ju = function(uu, Eu) {
              var ju;
              return null !== (ju = null === uu || void 0 === uu ? void 0 : uu.results.find((uu => uu.requestId === Eu))) && void 0 !== ju ? ju : null
            }(uu, Eu);
            null !== ju && lu(ju)
          })),
          fu = setTimeout((() => {
            lu(null)
          }), Xu);
        Zu.gameBridge.send("lobbyManage", {
          ...uu,
          requestId: Eu
        })
      }))
    }
    const fu = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Cu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qu;
        this.onChange = uu, this.sendAction = Eu, this.pending = new Map, this.statuses = new Map
      }
      send(uu, Eu, ju) {
        var su;
        return this.statuses.delete(Eu), this.pending.set(Eu, (null !== (su = this.pending.get(Eu)) && void 0 !== su ? su : 0) + 1), this.sendAction(uu).then((uu => {
          var su;
          const Uu = null !== uu && void 0 !== uu ? uu : {
              requestId: -1,
              ok: !1,
              message: fu
            },
            Zu = (null !== (su = this.pending.get(Eu)) && void 0 !== su ? su : 1) - 1;
          Zu > 0 ? this.pending.set(Eu, Zu) : this.pending.delete(Eu);
          const Xu = !Uu.ok || Uu.message.length > 0 ? Uu.message : null === ju ? null : [ju];
          return null !== Xu && this.statuses.set(Eu, {
            ok: Uu.ok,
            text: Xu,
            until: Date.now() + 4e3
          }), this.onChange(), Uu
        }))
      }
      show(uu, Eu) {
        this.statuses.set(uu, {
          ...Eu,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(uu) {
        for (const [Eu, ju] of this.statuses) ju.until <= uu && this.statuses.delete(Eu)
      }
      nextDeadline() {
        let uu = null;
        for (const ju of this.statuses.values()) {
          var Eu;
          uu = Math.min(null !== (Eu = uu) && void 0 !== Eu ? Eu : 1 / 0, ju.until)
        }
        return uu
      }
      statusOf(uu, Eu) {
        const ju = this.statuses.get(uu);
        return !ju || ju.until <= Eu ? null : {
          ok: ju.ok,
          text: ju.text
        }
      }
      isPending(uu) {
        return this.pending.has(uu)
      }
    }
  },
  4944: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => gu,
      b: () => Du
    });
    var su = ju(58),
      Uu = ju(1499),
      Zu = ju(1964),
      Xu = ju(4952),
      lu = ju(1154);
    const qu = (0, su.memo)((function(uu) {
      let {
        initialParameters: Eu
      } = uu;
      const ju = (0, su.useRef)(null),
        Uu = (0, su.useRef)(null),
        qu = (0, su.useRef)(0),
        fu = (0, su.useRef)(null),
        Cu = Eu.description,
        bu = Eu.UE,
        {
          scale: cu,
          rotation: Nu
        } = null !== Eu && void 0 !== Eu ? Eu : {},
        Ou = (0, Xu.d)();
      return (0, su.useEffect)((() => {
        const uu = Ou.onFrame((() => {
          const uu = Ou.getState();
          if (!uu.isActive || !ju.current || !Uu.current) return;
          const Eu = uu.state;
          if (ju.current.value = Eu.progress, Eu.clickCount > qu.current) {
            qu.current = Eu.clickCount;
            const uu = Uu.current;
            uu.classList.add("pulse"), fu.current = setTimeout((() => {
              uu.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(fu.current), uu()
        }
      }), [Ou]), (0, lu.jsx)(lu.Fragment, {
        children: (0, lu.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== cu && {
              "--scale": cu
            },
            ...null !== Nu && {
              "--rotation": `${Nu}deg`
            }
          },
          children: [(0, lu.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: ju
          }), (0, lu.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Uu,
            children: (0, lu.jsx)(Zu.d, {
              text: [{
                icon: bu
              }]
            })
          }), (0, lu.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, lu.jsx)(Zu.d, {
              text: Cu
            })
          })]
        })
      })
    }));
    var fu = ju(1105),
      Cu = ju.n(fu);
    const bu = 2 * Math.PI * 90,
      cu = (0, su.memo)((function(uu) {
        let {
          initialParameters: Eu
        } = uu;
        const ju = (0, su.useRef)(null),
          Uu = (0, su.useRef)(null),
          qu = (0, su.useRef)(null),
          fu = Eu.label,
          cu = Eu.icon,
          Nu = Eu.lE,
          {
            scale: Ou,
            rotation: Yu,
            qE: hu
          } = null !== Eu && void 0 !== Eu ? Eu : {},
          Du = (0, Xu.d)();
        return (0, su.useEffect)((() => {
          const uu = Du.onFrame((() => {
            var uu, Eu;
            const su = Du.getState();
            if (!su.isActive || !Uu.current) return;
            const Zu = su.state,
              Xu = null !== (uu = Zu.timeRemaining) && void 0 !== uu ? uu : 0,
              lu = null !== (Eu = Zu.XE) && void 0 !== Eu ? Eu : 1,
              fu = bu * (1 - Xu / lu);
            Uu.current.style.strokeDashoffset = `${fu}`, ju.current && (ju.current.style.opacity = Xu > 0 ? "1" : "0"), qu.current && Nu && (qu.current.textContent = `${(Xu/1e3).toFixed(1)}s`)
          }));
          return () => {
            uu()
          }
        }), [Du, Nu]), (0, lu.jsxs)("div", {
          className: "QTETimedClick",
          ref: ju,
          style: {
            ...null !== Ou && {
              "--scale": Ou
            },
            ...null !== Yu && {
              "--rotation": `${Yu}deg`
            }
          },
          children: [(0, lu.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, lu.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, lu.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, lu.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: bu,
                ref: Uu
              })]
            }), (0, lu.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, lu.jsx)(Zu.d, {
                text: [{
                  icon: cu
                }],
                className: Cu()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: hu
                })
              })
            })]
          }), (0, lu.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, lu.jsx)(Zu.d, {
              text: fu,
              className: "QTETimedClickLabelText"
            }), Nu && (0, lu.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: qu
            })]
          })]
        })
      })),
      Nu = (0, su.memo)((function(uu) {
        let {
          initialParameters: Eu
        } = uu;
        const ju = (0, su.useRef)(null),
          Uu = (0, su.useRef)(null),
          qu = (0, su.useRef)(null),
          fu = (0, su.useRef)(!1),
          Cu = Eu.description,
          bu = null === Eu || void 0 === Eu ? void 0 : Eu.icon,
          cu = (0, Xu.d)();
        return (0, su.useEffect)((() => {
          const uu = cu.onFrame((() => {
            const uu = cu.getState();
            if (!uu.isActive) return;
            const Eu = uu.state;
            if (ju.current) {
              const uu = 100 * (Eu.catchZonePosition - Eu.CE / 2);
              ju.current.style.left = `${uu}%`, ju.current.style.width = 100 * Eu.CE + "%", Eu.isCatching !== fu.current && (fu.current = Eu.isCatching, Eu.isCatching ? ju.current.classList.add("catching") : ju.current.classList.remove("catching"))
            }
            Uu.current && (Uu.current.style.left = 100 * Eu.moverPosition + "%"), qu.current && (qu.current.value = Eu.progress)
          }));
          return () => {
            uu()
          }
        }), [cu]), (0, lu.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, lu.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, lu.jsx)(Zu.d, {
              text: Cu
            })
          }), (0, lu.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: qu
          }), (0, lu.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, lu.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: ju
            }), (0, lu.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Uu,
              children: (0, lu.jsx)("span", {
                children: bu && (0, lu.jsx)(Zu.d, {
                  text: [{
                    icon: bu,
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
    var Ou = ju(649);
    const Yu = (0, su.memo)((function(uu) {
        let {
          initialParameters: Eu
        } = uu;
        const ju = (0, su.useRef)(null),
          Uu = Eu.label,
          qu = Eu.DE,
          {
            icon: fu,
            scale: Cu,
            rotation: bu
          } = null !== Eu && void 0 !== Eu ? Eu : {},
          cu = 100 * (.5 - qu / 2),
          Nu = 100 * qu,
          Yu = (0, Xu.d)();
        return (0, su.useEffect)((() => {
          const uu = Yu.onFrame((() => {
            const uu = Yu.getState();
            if (!uu.isActive || !ju.current) return;
            const Eu = uu.state;
            ju.current.style.left = 100 * Eu.markerPosition + "%"
          }));
          return () => {
            uu()
          }
        }), [Yu]), (0, lu.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, Ou.H)(Cu) && {
              "--scale": Cu
            },
            ...!(0, Ou.H)(bu) && {
              "--rotation": `${bu}deg`
            }
          },
          children: [fu && (0, lu.jsx)(Zu.d, {
            text: [{
              icon: fu
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, lu.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, lu.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${cu}%`,
                width: `${Nu}%`
              }
            }), (0, lu.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: ju
            })]
          }), (0, lu.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, lu.jsx)(Zu.d, {
              text: Uu
            })
          })]
        })
      })),
      hu = (0, su.memo)((function(uu) {
        let {
          initialParameters: Eu
        } = uu;
        const ju = (0, su.useRef)(null),
          [Uu, qu] = (0, su.useState)((() => new Array(Eu.ME).fill("pending"))),
          [fu, Cu] = (0, su.useState)((() => {
            const uu = Eu.pE;
            return (0, Ou.H)(uu) || uu <= 0 ? [] : new Array(uu).fill("pending")
          })),
          bu = Eu.label,
          {
            icon: cu
          } = Eu,
          Nu = (0, su.useRef)(0),
          Yu = (0, su.useRef)(0),
          hu = (0, su.useRef)([]),
          Du = (0, Xu.d)();
        return (0, su.useEffect)((() => {
          const uu = Du.onFrame((() => {
            const uu = Du.getState();
            if (!uu.isActive || !ju.current) return;
            const Eu = uu.state,
              su = 30 + 60 * Eu.outerCircleProgress;
            if (ju.current.setAttribute("r", String(su)), !0 === Eu.lastClickResult && Eu.successes > Nu.current) {
              ju.current.classList.remove("QTERhythmClickOuterCircle--miss"), ju.current.classList.add("QTERhythmClickOuterCircle--hit");
              const uu = setTimeout((() => {
                var uu;
                null === (uu = ju.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              hu.current.push(uu)
            } else if (!1 === Eu.lastClickResult && Eu.misses > Yu.current) {
              ju.current.classList.remove("QTERhythmClickOuterCircle--hit"), ju.current.classList.add("QTERhythmClickOuterCircle--miss");
              const uu = setTimeout((() => {
                var uu;
                null === (uu = ju.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              hu.current.push(uu)
            }
            Eu.successes === Nu.current && Eu.misses === Yu.current || (Nu.current = Eu.successes, Yu.current = Eu.misses, qu((uu => {
              const ju = [...uu];
              for (let su = 0; su < Eu.ME; su++) ju[su] = su < Eu.successes ? "success" : "pending";
              return ju
            })), Cu((uu => {
              if (0 === uu.length) return uu;
              const ju = [...uu];
              for (let su = 0; su < ju.length; su++) ju[su] = su < Eu.misses ? "miss" : "pending";
              return ju
            })))
          }));
          return () => {
            uu();
            for (const uu of hu.current) clearTimeout(uu);
            hu.current = []
          }
        }), [Du]), (0, lu.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, lu.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Uu.map(((uu, Eu) => (0, lu.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === uu ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, Eu)))
          }), (0, lu.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, lu.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, lu.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, lu.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: ju
              })]
            }), cu && (0, lu.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, lu.jsx)(Zu.d, {
                text: [{
                  icon: cu
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), fu.length > 0 && (0, lu.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: fu.map(((uu, Eu) => (0, lu.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === uu ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, Eu)))
          }), (0, lu.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, lu.jsx)(Zu.d, {
              text: bu
            })
          })]
        })
      }));

    function Du(uu) {
      let {
        qte: Eu
      } = uu;
      switch (Eu.type) {
        case "progressBar":
          return (0, lu.jsx)(qu, {
            initialParameters: Eu.parameters
          });
        case "timedClick":
          return (0, lu.jsx)(cu, {
            initialParameters: Eu.parameters
          });
        case "gravityBar":
          return (0, lu.jsx)(Nu, {
            initialParameters: Eu.parameters
          });
        case "precisionBar":
          return (0, lu.jsx)(Yu, {
            initialParameters: Eu.parameters
          });
        case "rhythmClick":
          return (0, lu.jsx)(hu, {
            initialParameters: Eu.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const gu = (0, su.memo)((function() {
      const [uu, Eu] = (0, su.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Uu.f)("qteStateUpdated", (uu => {
        Eu(uu)
      })), uu.isActive && uu.type ? (0, lu.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, lu.jsx)(Du, {
          qte: uu
        })
      }) : null
    }))
  },
  4952: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      d: () => qu
    });
    var su = ju(58),
      Uu = ju(1353),
      Zu = ju(4958);
    const Xu = {
        getState: () => Zu.d.getCurrentState(),
        onFrame: Uu.t
      },
      lu = (0, su.createContext)(Xu);

    function qu() {
      return (0, su.useContext)(lu)
    }
  },
  36740: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu,
      e: () => cu
    });
    var su = ju(58),
      Uu = ju(1405),
      Zu = ju(1244),
      Xu = ju(1393),
      lu = ju(3667),
      qu = ju(5099),
      fu = ju(1154);

    function Cu(uu) {
      let {
        loading: Eu,
        schematics: ju,
        onSchematicPicked: su,
        selectedSchematicIdList: Uu = [],
        disableAutoExport: qu
      } = uu;
      const {
        t: Cu
      } = (0, Zu.A)();
      return (0, fu.jsxs)("div", {
        className: "SchematicList",
        children: [Eu && (0, fu.jsx)(Xu.b, {}), !Eu && 0 === ju.length && (0, fu.jsx)("div", {
          className: "NoSchematicsText",
          children: Cu("worldBuilder:noSavedSchematic")
        }), !Eu && ju.map((uu => (0, fu.jsx)(lu.e, {
          source: {
            type: "schematic",
            schematic: uu
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            su(uu)
          },
          isSelected: Uu.includes(uu.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: uu.isAutoExported && qu,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, uu.schematicId)))]
      })
    }

    function bu(uu) {
      let {
        ownedSchematics: Eu,
        currentWorldSchematicId: ju,
        onClose: Uu
      } = uu;
      const {
        t: Xu
      } = (0, Zu.A)(), [lu, bu] = (0, su.useState)(null);
      return (0, fu.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === lu && (0, fu.jsxs)(fu.Fragment, {
          children: [(0, fu.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Xu("worldBuilder:schematicList")
          }), (0, fu.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Xu("worldBuilder:clickSchematicForOptions")
          }), (0, fu.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, fu.jsx)(Cu, {
              loading: !1,
              schematics: Eu,
              onSchematicPicked: uu => {
                bu(uu)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== lu && (0, fu.jsx)(qu.h, {
          schematic: lu,
          inSourceWorld: lu.schematicId === ju,
          onSchematicUpdate: uu => {
            bu(uu)
          },
          onClose: () => {
            bu(null), Uu()
          }
        })]
      })
    }

    function cu(uu) {
      let {
        ownedSchematics: Eu,
        currentWorldSchematicId: ju,
        onClose: su
      } = uu;
      Uu.NotificationProvider.showCustomPopup({
        body: uu => (0, fu.jsx)(bu, {
          ownedSchematics: Eu,
          currentWorldSchematicId: ju,
          onClose: uu
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: su,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37322: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Gu,
      c: () => eu
    });
    var su = ju(4437),
      Uu = ju(1499),
      Zu = ju(58),
      Xu = ju(6677),
      lu = ju(4430),
      qu = ju(1343),
      fu = ju(1986),
      Cu = ju(1964),
      bu = ju(1506),
      cu = ju(1244),
      Nu = ju(37328),
      Ou = ju(1105),
      Yu = ju.n(Ou),
      hu = ju(1362),
      Du = ju(1116),
      gu = ju(1330),
      Mu = ju(1154);
    const eu = "SleepingOverlay";

    function Gu() {
      const {
        t: uu
      } = (0, cu.A)(), [Eu, ju] = (0, Zu.useState)(!1), [Ou, Gu] = (0, Zu.useState)(null), [wu, Ju] = (0, Zu.useState)(1), [du, au] = (0, Zu.useState)(!1), [Pu, ou] = (0, Zu.useState)(!1), ku = (0, Zu.useRef)(0), mu = (0, Zu.useRef)(!1), vu = (0, Zu.useRef)(!1), Ku = (0, Zu.useRef)(), Vu = (0, Zu.useRef)(null);

      function ru() {
        const uu = null !== Ou && void 0 !== Ou ? Ou : "Rested Speed";
        fu.gameBridge.send("wakeUp", Pu ? uu : null), Vu.current = null, ju(!1), Gu(null), Ju(1), au(!1), ou(!1)
      }

      function Qu() {
        return !du && (ru(), !0)
      }
      return (0, Uu.f)("PlayerPhysicsTypeUpdate", (uu => {
        uu !== Vu.current && (Vu.current = uu, uu === Xu.v.SLEEPING ? (vu.current || (ku.current = fu.gameBridge.lookup("cameraZoom", null), vu.current = !0), mu.current = !0, fu.gameBridge.send("setCameraZoom", 3), ju(!0), Ju(function() {
          for (const uu of fu.gameBridge.lookup("blocksStandingOn", null)) {
            if (Nu.b.leafBeds.includes(uu)) return console.log(`Found leaf bed: ${uu}`), 1;
            if (Nu.b.woolBeds.includes(uu)) return console.log(`Found woold bed: ${uu}`), 2;
            if (Nu.b.strongBeds.includes(uu)) return console.log(`Found strong bed ${uu}`), 3
          }
          return 1
        }())) : (vu.current = !1, ju(!1), Gu(null), Ju(1)))
      })), (0, Zu.useEffect)((() => () => {
        (0, qu.q)(eu)
      }), []), (0, Zu.useEffect)((() => {
        Eu ? (0, qu.t)(eu) : ((0, qu.q)(eu), mu.current && (fu.gameBridge.send("setCameraZoom", ku.current), mu.current = !1))
      }), [Eu]), (0, gu.w)("overlay", Ku, Qu, Eu), (0, Mu.jsx)(su.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Eu,
        timeout: 300,
        nodeRef: Ku,
        unmountOnExit: !0,
        children: (0, Mu.jsx)("div", {
          ref: Ku,
          onClick: uu => {
            Qu() && uu.stopPropagation()
          },
          children: (0, Mu.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Mu.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: lu.j.map((Eu => (0, Mu.jsxs)(pu, {
                restedEffect: Eu,
                wq: Ou,
                setChosenRestedEffect: Gu,
                children: [(0, Mu.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Mu.jsx)(Cu.d, {
                    text: [{
                      icon: Eu
                    }]
                  }), lu.i[Eu].shortName]
                }), (0, Mu.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: uu(lu.i[Eu].description, {
                    time: lu.i[Eu].effectLevelDurations[wu] / 6e4
                  })
                })]
              }, Eu)))
            }), (0, Mu.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Mu.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Mu.jsxs)(bu.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: uu => {
                  Pu ? ru() : (au(!0), (0, hu.O)((() => {
                    au(!1), ou(!0)
                  }), !0)), uu.stopPropagation()
                },
                loading: du,
                children: [!Pu && (0, Mu.jsxs)(Mu.Fragment, {
                  children: [(0, Mu.jsx)(Du.e, {
                    name: "film"
                  }), " ", uu("classicGame:watchAdToGetRestedPerk")]
                }), Pu && uu("classicGame:wakeUp")]
              }), (0, Mu.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Mu.jsx)("div", {
                  className: Yu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === wu
                  }),
                  children: (0, Mu.jsx)(Cu.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Mu.jsx)("div", {
                  className: Yu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === wu
                  }),
                  children: (0, Mu.jsx)(Cu.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Mu.jsx)("div", {
                  className: Yu()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === wu
                  }),
                  children: (0, Mu.jsx)(Cu.d, {
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
    const pu = (0, Zu.memo)((function(uu) {
      let {
        children: Eu,
        restedEffect: ju,
        wq: su,
        setChosenRestedEffect: Uu
      } = uu;
      return ju === su ? (0, Mu.jsx)(bu.p, {
        onClick: uu => {
          uu.stopPropagation()
        },
        children: Eu
      }) : (0, Mu.jsx)(bu.i, {
        onClick: uu => {
          Uu(ju), uu.stopPropagation()
        },
        children: Eu
      })
    }))
  },
  36946: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      d: () => qu
    });
    var su = ju(628),
      Uu = ju(1986),
      Zu = ju(1693),
      Xu = ju(91),
      lu = ju(1314);

    function qu(uu, Eu, ju) {
      return Xu.featureFlags.useSocialFeatures && uu && null === (0, lu.d)(Eu, ju)
    }

    function fu(uu, Eu) {
      var ju, Xu;
      const lu = Zu.b.getSocialState().friends.find((uu => uu.name.toLowerCase() === Eu.toLowerCase())),
        qu = Uu.gameBridge.latest("players").byId[uu],
        fu = void 0 !== qu && qu.name === Eu,
        Cu = fu && null !== (ju = qu.cosmetics) && void 0 !== ju ? ju : void 0,
        bu = lu && Cu ? {
          ...lu,
          cosmetics: Cu
        } : lu;
      return {
        playerSocialPreview: null !== bu && void 0 !== bu ? bu : {
          isError: !1,
          name: Eu,
          ranks: fu ? [...qu.ranks] : [],
          cosmetics: null !== Cu && void 0 !== Cu ? Cu : {},
          nameColour: null !== (Xu = null === Cu || void 0 === Cu ? void 0 : Cu.nameColour) && void 0 !== Xu ? Xu : su.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== lu
      }
    }
  },
  5084: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1154);

    function lu(uu) {
      let {
        columns: Eu,
        rows: ju,
        getRowKey: Uu,
        renderRow: lu,
        className: qu
      } = uu;
      return (0, Xu.jsxs)("table", {
        className: Zu()("Table", qu),
        children: [(0, Xu.jsx)("thead", {
          children: (0, Xu.jsx)("tr", {
            children: Eu.map((uu => (0, Xu.jsx)("th", {
              children: uu.header
            }, uu.key)))
          })
        }), (0, Xu.jsx)("tbody", {
          children: ju.map((uu => (0, Xu.jsx)(su.Fragment, {
            children: lu(uu)
          }, Uu(uu))))
        })]
      })
    }
  },
  37075: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      f: () => Xu,
      i: () => lu,
      l: () => qu
    });
    var su = ju(58),
      Uu = ju(3285);
    const Zu = 8,
      Xu = "InGameHeaderContainer",
      lu = "TopRightElements";

    function qu(uu) {
      const [Eu] = (0, Uu.d)(), [ju, qu] = (0, su.useState)(!1);
      return (0, su.useLayoutEffect)((() => {
        if (!uu) return;
        const Eu = document.querySelector(`.${Xu}`),
          ju = document.querySelector(`.${lu}`),
          su = () => {
            const su = uu.getBoundingClientRect(),
              Uu = Eu ? Eu.getBoundingClientRect().right : 0,
              Xu = ju ? ju.getBoundingClientRect().left : window.innerWidth,
              lu = su.left < Uu + Zu,
              fu = su.right > Xu - Zu;
            qu(lu || fu)
          };
        su();
        const Uu = new ResizeObserver(su);
        return Uu.observe(uu), Eu && Uu.observe(Eu), ju && Uu.observe(ju), () => {
          Uu.disconnect()
        }
      }), [uu, Eu]), ju
    }
  },
  37123: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1723),
      lu = ju(1506),
      qu = ju(1393),
      fu = ju(1116),
      Cu = ju(1154);

    function bu(uu) {
      let {
        label: Eu,
        icon: ju,
        placeholder: Uu,
        onSubmit: bu
      } = uu;
      const cu = (0, su.useRef)(null),
        [Nu, Ou] = (0, su.useState)(""),
        [Yu, hu] = (0, su.useState)("Enter"),
        [Du, gu] = (0, su.useState)(null);
      (0, su.useEffect)((() => {
        if ("Success" !== Yu && "Error" !== Yu) return;
        const uu = setTimeout((() => {
          "Success" === Yu && cu.current && (cu.current.value = "", Ou("")), hu("Enter")
        }), "Success" === Yu ? 1e3 : 4e3);
        return () => {
          clearTimeout(uu)
        }
      }), [Yu]);
      const Mu = () => {
        const uu = Nu.trim();
        "" !== uu && "Enter" === Yu && (hu("Loading"), bu(uu).then((uu => {
          cu.current && ("error" in uu ? null === uu.error ? hu("Enter") : (gu(uu.error), hu("Error")) : hu("Success"))
        })))
      };
      return (0, Cu.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: uu => {
          uu.target === cu.current && "Escape" !== uu.key && uu.stopPropagation()
        },
        children: [(0, Cu.jsxs)("div", {
          className: Zu()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Yu}`),
          children: ["Loading" === Yu && (0, Cu.jsx)(qu.b, {}), "Success" === Yu && (0, Cu.jsx)(fu.e, {
            name: "check"
          }), "Error" === Yu && Du]
        }), (0, Cu.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Cu.jsx)(Xu.d, {
            className: "PlayerSearchInput",
            domRef: cu,
            maxLength: 32,
            placeholderText: Uu,
            ariaLabel: Uu,
            stopPropagation: !1,
            onValueChange: uu => {
              Ou(uu)
            },
            onEnter: Mu
          }), (0, Cu.jsxs)(lu.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Yu || "" === Nu.trim(),
            onClick: Mu,
            children: [(0, Cu.jsx)(fu.e, {
              name: ju
            }), " ", Eu]
          })]
        })]
      })
    }
  },
  37101: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1244),
      lu = ju(1116),
      qu = ju(1154);
    const fu = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Cu = ["unlisted", "public", "whitelist", "private"];

    function bu(uu) {
      let {
        visibility: Eu,
        onPick: ju
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)(), bu = (0, su.useRef)([]);
      return (0, qu.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Uu("worldSocial:whoCanJoin"),
        children: Cu.map(((uu, su) => {
          const Xu = uu === Eu;
          return (0, qu.jsxs)("button", {
            ref: uu => {
              bu.current[su] = uu
            },
            type: "button",
            className: Zu()("WorldSocialTile", {
              WorldSocialTileSelected: Xu
            }),
            "aria-pressed": Xu,
            tabIndex: Xu ? 0 : -1,
            onKeyDown: uu => {
              ((uu, Eu) => {
                const ju = "ArrowRight" === uu.key || "ArrowDown" === uu.key ? 1 : "ArrowLeft" === uu.key || "ArrowUp" === uu.key ? -1 : 0;
                var su;
                0 !== ju && (uu.preventDefault(), null === (su = bu.current[(Eu + ju + Cu.length) % Cu.length]) || void 0 === su || su.focus())
              })(uu, su)
            },
            onClick: () => {
              ju(uu)
            },
            children: [(0, qu.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, qu.jsx)(lu.e, {
                name: fu[uu]
              })
            }), (0, qu.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, qu.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Uu(`worldSocial:${uu}`)
              }), (0, qu.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Uu(`worldSocial:${uu}Description`)
              })]
            })]
          }, uu)
        }))
      })
    }
  },
  37115: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(1244),
      Uu = ju(2774),
      Zu = ju(4528),
      Xu = ju(1154);

    function lu(uu) {
      let {
        Tb: Eu,
        children: ju,
        ...lu
      } = uu;
      const {
        t: qu
      } = (0, su.A)();
      return (0, Xu.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Eu.onChange(!Eu.on)
        },
        children: (0, Xu.jsx)(Uu.g, {
          ...lu,
          opensProfileCard: !1,
          children: (0, Xu.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: uu => {
              uu.stopPropagation()
            },
            children: [ju, (0, Xu.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Xu.jsx)(Zu.d, {
                checked: Eu.on,
                disabled: !1,
                ariaLabel: qu("worldSocial:letJoin", {
                  playerName: lu.playerSocialPreview.name
                }),
                onChange: uu => {
                  Eu.onChange(uu.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37099: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Ou
    });
    var su = ju(58),
      Uu = ju(1244),
      Zu = ju(1906),
      Xu = ju(91),
      lu = ju(22),
      qu = ju(1533),
      fu = ju(2806),
      Cu = ju(34457),
      bu = ju(1506),
      cu = ju(1116),
      Nu = ju(1154);

    function Ou(uu) {
      let {
        worldCode: Eu,
        message: ju
      } = uu;
      const {
        t: Ou
      } = (0, Uu.A)(), {
        isTouchScreen: Yu
      } = (0, lu.l)(["isTouchScreen"]), hu = Xu.featureFlags.canUseInviteLinks, Du = (0, Cu.k)(hu && null === ju), [gu, Mu] = (0, fu.f)(), eu = (0, su.useRef)(null);
      if (null !== ju) return (0, Nu.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Nu.jsx)(cu.e, {
          name: "lock"
        }), (0, Nu.jsx)("span", {
          children: ju
        })]
      });
      const Gu = hu ? Du : Eu,
        pu = Yu && hu && (0, fu.b)();
      return (0, Nu.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!hu && (0, Nu.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ou("worldSocial:worldCode")
        }), (0, Nu.jsx)("input", {
          ref: eu,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Gu && void 0 !== Gu ? Gu : "",
          "aria-label": Ou(hu ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: uu => {
            uu.currentTarget.select()
          }
        }), (0, Nu.jsxs)(bu.f, {
          className: "WorldSocialCopy",
          disabled: null === Gu,
          onClick: () => {
            null !== Gu && (0, fu.d)(Gu, {
              useShareSheet: pu,
              onOutcome: uu => {
                if ((0, qu.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== uu || hu ? uu : "code"
                  }), "copied" === uu) Mu();
                else if ("failed" === uu) {
                  var Eu;
                  null === (Eu = eu.current) || void 0 === Eu || Eu.focus(), Zu.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Nu.jsx)(cu.e, {
            name: gu ? "check" : pu ? "up-from-bracket" : "copy"
          }), " ", Ou(gu ? "general:copied" : pu ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37109: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Nu,
      f: () => cu,
      h: () => bu
    });
    var su = ju(628),
      Uu = ju(1244),
      Zu = ju(1693),
      Xu = ju(2774),
      lu = ju(2716),
      qu = ju(1506),
      fu = ju(37115),
      Cu = ju(1154);

    function bu(uu, Eu) {
      var ju;
      return {
        isError: !1,
        name: uu,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Eu && void 0 !== Eu ? Eu : {},
        nameColour: null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.nameColour) && void 0 !== ju ? ju : su.e,
        location: {
          status: "offline"
        }
      }
    }

    function cu(uu) {
      let {
        player: Eu,
        isFriend: ju = !1,
        status: su,
        showLocation: qu = void 0 === su,
        Tb: bu,
        onSendFriendRequest: cu,
        actions: Nu,
        zIndex: Ou
      } = uu;
      const {
        t: Yu
      } = (0, Uu.A)();
      let hu = su;
      null !== bu && void 0 !== bu && bu.on && (hu = (0, Cu.jsxs)(Cu.Fragment, {
        children: [null !== su && void 0 !== su ? su : (0, Cu.jsx)(lu.b, {
          socialPreview: Eu
        }), (0, Cu.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Yu("worldSocial:canJoin")]
        })]
      }));
      const Du = {
        playerSocialPreview: Eu,
        isFriend: ju,
        hideFriendBadge: !0,
        onFriendRemoved: ju ? uu => {
          Zu.b.removeFriendFromState(uu)
        } : void 0,
        status: hu,
        showLocation: qu,
        onSendFriendRequest: cu,
        zIndex: Ou
      };
      return bu ? (0, Cu.jsx)(fu.d, {
        ...Du,
        Tb: bu,
        children: Nu
      }) : (0, Cu.jsx)(Xu.g, {
        ...Du,
        opensProfileCard: !1,
        children: Nu || void 0
      })
    }

    function Nu(uu) {
      let {
        row: Eu,
        Tb: ju,
        canInvite: su,
        invited: Zu,
        onInvite: Xu,
        zIndex: lu
      } = uu;
      const {
        t: fu
      } = (0, Uu.A)(), bu = "online" === Eu.place ? qu.f : qu.i;
      return (0, Cu.jsx)(cu, {
        player: Eu.friend,
        isFriend: !0,
        status: "here" === Eu.place ? fu("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Tb: ju,
        zIndex: lu,
        actions: su && (0, Cu.jsx)(bu, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Zu,
          onClick: Xu,
          ariaLabel: `${fu("worldSocial:invite")} ${Eu.friend.name}`,
          children: fu(Zu ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37087: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      h: () => Xu,
      k: () => fu
    });
    var su = ju(58),
      Uu = ju(4769),
      Zu = ju(1906);

    function Xu(uu) {
      const Eu = {
        lobbyName: uu,
        answer: null,
        response: Uu.d.getSocialSettings(uu)
      };
      return Eu.response.then((uu => {
        Eu.answer = uu
      })), Eu
    }
    const lu = new Map;

    function qu(uu) {
      lu.set(uu.lobbyName, uu)
    }

    function fu(uu) {
      const [Eu] = (0, su.useState)((() => function(uu) {
        var Eu;
        const ju = null !== (Eu = lu.get(uu)) && void 0 !== Eu ? Eu : null;
        return null !== ju && void 0 !== ju && ju.answer && "error" in ju.answer ? null : ju
      }(uu))), [ju, Xu] = (0, su.useState)((() => null !== Eu && void 0 !== Eu && Eu.answer && "settings" in Eu.answer ? Eu.answer.settings : null)), [qu, fu] = (0, su.useState)(!0), [Cu, bu] = (0, su.useState)(null !== ju), cu = (0, su.useRef)(ju);
      cu.current = ju;
      const Nu = (0, su.useRef)(0),
        Ou = (0, su.useRef)(0),
        Yu = (0, su.useRef)(!1),
        hu = (0, su.useRef)(!0),
        Du = (0, su.useCallback)((async Eu => {
          const ju = ++Nu.current,
            su = await (null !== Eu && void 0 !== Eu ? Eu : Uu.d.getSocialSettings(uu));
          hu.current && ju === Nu.current && (bu(!0), fu(!1), "error" in su || Xu(su.settings))
        }), [uu]),
        gu = (0, su.useCallback)((() => {
          fu(!0), Du()
        }), [Du]),
        Mu = (0, su.useCallback)((() => {
          Ou.current > 0 ? Yu.current = !0 : Du()
        }), [Du]);
      (0, su.useEffect)((() => (hu.current = !0, lu.delete(uu), fu(!0), Du(null === Eu || void 0 === Eu ? void 0 : Eu.response), () => {
        hu.current = !1
      })), [Du, uu, Eu]);
      const eu = uu => {
        Nu.current++, fu(!1), cu.current = uu, Xu(uu)
      };
      return {
        settings: ju,
        loading: qu,
        answered: Cu,
        retry: gu,
        refresh: Mu,
        change: async function(Eu, ju) {
          let {
            quiet: su = !1,
            onAnswer: Xu
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const lu = cu.current;
          if (null === lu) return !1;
          eu(ju(lu)), Ou.current > 0 && (Yu.current = !0), Ou.current++;
          const qu = await Uu.d.setSocialSettings(uu, Eu);
          Ou.current--;
          const fu = !("error" in qu);
          if (!hu.current) return fu;
          if (null === Xu || void 0 === Xu || Xu(qu), su);
          else if ("error" in qu) Zu.f.showMessage({
            translationKey: qu.error
          });
          else
            for (const uu of qu.notFound) Zu.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: uu
              }
            });
          if (Ou.current > 0) return fu;
          const Cu = Yu.current;
          return Yu.current = !1, !Cu && "settings" in qu ? eu(qu.settings) : (Cu || eu(lu), Du()), fu
        }
      }
    }
  },
  37130: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => Zu
    });
    var su = ju(166);
    const Uu = new Map;

    function Zu(uu, Eu) {
      var ju;
      const su = null !== (ju = Uu.get(uu)) && void 0 !== ju ? ju : new Map;
      su.set(Eu, Date.now()), Uu.set(uu, su)
    }

    function Xu(uu) {
      const Eu = Uu.get(uu);
      if (!Eu) return [];
      const ju = Date.now();
      for (const [Uu, Zu] of Eu) ju - Zu >= su.l && Eu.delete(Uu);
      return [...Eu.keys()]
    }
  },
  37091: (uu, Eu, ju) => {
    function su(uu, Eu) {
      const ju = Eu.toLowerCase();
      for (const su of uu)
        if (su.toLowerCase() === ju) return !0;
      return !1
    }

    function Uu(uu, Eu, ju) {
      const Uu = [],
        Zu = [],
        Xu = [];
      for (const lu of uu) !lu.isError && lu.name && ("inGame" === lu.location.status && lu.location.inLobbyName === Eu || su(ju, lu.name) ? Zu.push({
        friend: lu,
        place: "here"
      }) : "offline" === lu.location.status ? Xu.push({
        friend: lu,
        place: "offline"
      }) : Uu.push({
        friend: lu,
        place: "online"
      }));
      return [...Uu, ...Zu, ...Xu]
    }

    function Zu(uu, Eu, ju) {
      const Uu = [],
        Zu = uu.flatMap((uu => "here" === uu.place ? [uu.friend.name] : []));
      for (const Xu of [...Zu, ...Eu]) su(Uu, Xu) || su(ju, Xu) || Uu.push(Xu);
      return Uu
    }

    function Xu(uu, Eu) {
      return null === uu || void 0 === uu || !uu.canManage || su(uu.whitelist, Eu) ? "none" : "whitelist" === uu.visibility ? "required" : "quiet"
    }

    function lu(uu) {
      if (null === uu) return !0;
      const {
        visibility: Eu
      } = uu;
      return "public" === Eu || "unlisted" === Eu || "whitelist" === Eu && uu.canManage
    }

    function qu(uu, Eu, ju) {
      if (ju) {
        const ju = Eu.filter((Eu => !su(uu.whitelist, Eu)));
        return {
          ...uu,
          whitelist: [...uu.whitelist, ...ju]
        }
      }
      return {
        ...uu,
        whitelist: uu.whitelist.filter((uu => !su(Eu, uu)))
      }
    }

    function fu(uu, Eu) {
      const ju = [];
      for (let su = 0; su < uu.length; su += Eu) ju.push(uu.slice(su, su + Eu));
      return ju
    }
    ju.d(Eu, {
      b: () => lu,
      e: () => Zu,
      i: () => Uu,
      l: () => su,
      o: () => fu,
      q: () => Xu,
      r: () => qu
    })
  },
  8968: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      e: () => Zu
    });
    var su = ju(2045);
    const Uu = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Zu = uu => "string" === typeof uu.icon && "" !== uu.icon && "string" === typeof uu.keycode && Uu.test(uu.keycode),
      Xu = uu => "Space" === uu ? "_" : su.h[uu]
  },
  9006: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    var su = ju(22);

    function Uu() {
      return !su.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  9013: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      f: () => lu,
      h: () => fu,
      i: () => qu,
      j: () => Xu,
      l: () => Uu,
      n: () => su,
      q: () => Ou,
      s: () => bu,
      u: () => Cu,
      w: () => cu,
      y: () => Nu
    });
    const su = 14,
      Uu = 6,
      Zu = (su + Uu) / 2,
      Xu = 200,
      lu = Xu / 2,
      qu = Xu / 2 - 1,
      fu = Uu / su * (Xu / 2),
      Cu = (uu, Eu) => -Math.PI / 2 + 2 * uu * Math.PI / Eu,
      bu = (uu, Eu, ju) => {
        const su = 2 * Math.PI / ju;
        return (Math.round((Math.atan2(Eu, uu) + Math.PI / 2) / su) % ju + ju) % ju
      },
      cu = .5,
      Nu = (uu, Eu, ju) => Math.hypot(uu.x, uu.y) < cu ? ju : bu(uu.x, uu.y, Eu),
      Ou = (uu, Eu, ju, su, Uu) => {
        const Zu = Math.PI / Eu,
          Xu = Cu(uu, Eu),
          lu = Xu - Zu,
          qu = Xu + Zu,
          fu = (uu, Eu) => `${ju+uu*Math.cos(Eu)} ${ju+uu*Math.sin(Eu)}`;
        return [`M ${fu(su,lu)}`, `L ${fu(Uu,lu)}`, `A ${Uu} ${Uu} 0 0 1 ${fu(Uu,qu)}`, `L ${fu(su,qu)}`, `A ${su} ${su} 0 0 0 ${fu(su,lu)}`, "Z"].join(" ")
      }
  },
  37299: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(22),
      Uu = ju(1362);

    function Zu() {
      const {
        clientEscMenuOptions: uu
      } = (0, su.l)(["clientEscMenuOptions"]);
      return (0, Uu.s)() && uu.showChat
    }
  },
  9036: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(58),
      Uu = ju(8992),
      Zu = ju(2543);

    function Xu() {
      const uu = (0, Zu.h)("shopInfo"),
        [, Eu] = (0, su.useReducer)((uu => uu + 1), 0);
      return (0, Zu.e)("shopInfo", Eu), !(0, Uu.b)(uu)
    }
  },
  37411: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(58),
      Uu = ju(2543);

    function Zu() {
      const uu = (0, Uu.h)("lobbyLeaderboardInfo");
      return (0, su.useMemo)((() => function(uu) {
        if (null === uu) return null;
        const Eu = Object.entries(uu),
          ju = Eu.filter((uu => {
            let [, Eu] = uu;
            return void 0 !== Eu
          }));
        if (ju.length === Eu.length) return uu;
        const su = Object.fromEntries(ju),
          Uu = Object.keys(uu).filter((uu => !Object.hasOwn(su, uu)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Uu.join(", ")}`), su
      }(uu)), [uu])
    }
  },
  37230: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => qu
    });
    var su = ju(2893),
      Uu = ju(3879),
      Zu = ju(3074);
    const Xu = ["Unable to create vertex buffer"];
    let lu = {};

    function qu(uu, Eu) {
      const ju = new Date;
      console.error(`${ju.getUTCHours()}:${ju.getUTCMinutes()}:${ju.getUTCSeconds()}`, uu, Eu, null === Eu || void 0 === Eu ? void 0 : Eu.stack), Xu.includes(null === Eu || void 0 === Eu ? void 0 : Eu.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, su.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${Eu.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Zu.logError)("warning", `${uu}\n ${Eu} "\n" ${null===Eu||void 0===Eu?void 0:Eu.stack}`);
      const Uu = uu + Eu + (null === Eu || void 0 === Eu ? void 0 : Eu.stack);
      Uu in lu || ((0, Zu.logError)("error", `${uu}\n ${Eu} "\n" ${null===Eu||void 0===Eu?void 0:Eu.stack}`), lu[Uu] = !0)
    }(0, Uu.onGameReset)((() => {
      lu = {}
    }))
  },
  5003: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Vu,
      i: () => Ku
    });
    var su = ju(5011),
      Uu = ju(337);
    const Zu = 120,
      Xu = 260,
      lu = 1.15,
      qu = 1.2,
      fu = 2,
      Cu = 1.08,
      bu = .8,
      cu = .95,
      Nu = 8,
      Ou = "[\"')\\]\u300d\u300f\uff09]*",
      Yu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ou}$`),
      hu = new RegExp(`[?\uff1f]${Ou}$`),
      Du = new RegExp(`[!\uff01]${Ou}$`),
      gu = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Mu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      eu = new RegExp(`[${Mu}]`),
      Gu = new RegExp(`[${Mu}]|[^${Mu}]+`, "g"),
      pu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function wu(uu) {
      let Eu = 2166136261;
      for (let ju = 0; ju < uu.length; ju++) Eu ^= uu.charCodeAt(ju), Eu = Math.imul(Eu, 16777619);
      return (Eu >>> 0) / 4294967295 * 2 - 1
    }

    function Ju(uu) {
      var Eu;
      if (eu.test(uu)) return 1;
      const ju = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        su = ju.replace(/[^0-9]/g, "");
      if (su.length > 0 && !/\p{L}/u.test(ju)) return Math.min(su.length, 4);
      const Uu = null !== (Eu = ju.match(pu)) && void 0 !== Eu ? Eu : [];
      if (0 === Uu.length) {
        var Zu, Xu;
        const uu = null !== (Zu = null === (Xu = ju.match(/\p{L}/gu)) || void 0 === Xu ? void 0 : Xu.length) && void 0 !== Zu ? Zu : 0;
        return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), Nu)
      }
      const lu = ju.replace(/[^\p{L}]/gu, ""),
        qu = Uu.length > 1 && "e" === Uu.at(-1) && lu.endsWith("e") && !lu.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
      return Math.min(Uu.length - (qu ? 1 : 0), Nu)
    }

    function du(uu) {
      return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function au(uu) {
      const Eu = uu.replace(/[^\p{L}]/gu, "");
      return Eu.length >= 2 && Eu === Eu.toUpperCase() && Eu !== Eu.toLowerCase()
    }

    function Pu(uu, Eu) {
      var ju;
      const Nu = Eu && (0, su.l)(Eu),
        Ou = null !== (ju = null === Nu || void 0 === Nu ? void 0 : Nu.syllableMs) && void 0 !== ju ? ju : su.e,
        Mu = function(uu) {
          const Eu = [];
          for (const su of (0, Uu.gc)(uu))
            if ("string" === typeof su)
              for (const uu of su.split(/(\s+)/)) {
                if ("" === uu) continue;
                if (/^\s+$/.test(uu)) {
                  Eu.push({
                    kind: "space",
                    text: uu
                  });
                  continue
                }
                if (!eu.test(uu)) {
                  Eu.push({
                    kind: "word",
                    text: uu,
                    delayMs: 0
                  });
                  continue
                }
                let su = !0;
                for (const Uu of null !== (ju = uu.match(Gu)) && void 0 !== ju ? ju : []) {
                  var ju;
                  const uu = Eu.at(-1);
                  su || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || eu.test(Uu) || /[\p{L}\p{N}]/u.test(Uu) ? (su || Eu.push({
                    kind: "space",
                    text: "\u200b"
                  }), Eu.push({
                    kind: "word",
                    text: Uu,
                    delayMs: 0
                  }), su = !1) : uu.text += Uu
                }
              } else Eu.push({
                kind: "icon",
                text: su.icon,
                delayMs: 0
              });
          return Eu
        }(uu),
        pu = [];
      let Pu = [];
      for (const su of Mu) "space" !== su.kind && (Pu.push(su), Yu.test(su.text) && (pu.push(Pu), Pu = []));
      pu.push(Pu);
      const ou = [];
      let ku = 0;
      for (const su of pu) {
        var mu, vu;
        const uu = null !== (mu = null === (vu = su.at(-1)) || void 0 === vu ? void 0 : vu.text) && void 0 !== mu ? mu : "",
          Eu = hu.test(uu),
          ju = Du.test(uu),
          Uu = su.map((uu => "word" === uu.kind ? Ju(uu.text) : 1)),
          Mu = Uu.findLastIndex((uu => uu > 0));
        for (const [hu, Du] of su.entries()) {
          const uu = "word" === Du.kind,
            su = Uu[hu];
          Du.delayMs = ku;
          for (let Uu = 0; Nu && Uu < su; Uu++) {
            const {
              intonation: Zu
            } = Nu;
            let Xu = Mu > 0 ? -Zu.declineSemitones * (hu / Mu) : 0;
            Xu += wu(`${du(Du.text)}|${Uu}`) * Zu.variationSemitones;
            const Yu = Math.min(1, Zu.variationSemitones);
            let gu = Nu.glideSemitones,
              eu = 1;
            ju && (Xu += Zu.exclaimLiftSemitones, eu *= lu), Eu && hu === Mu && (Xu += Zu.questionRiseSemitones * (su > 1 ? .5 + .5 * Uu / (su - 1) : 1), Uu === su - 1 && (gu = Math.abs(gu) + Zu.questionRiseSemitones / 2)), uu && au(Du.text) && (Xu += fu * Yu, eu *= qu), su > 1 && 0 === Uu && (Xu += bu * Yu, eu *= Cu), ou.push({
              atMs: ku + Uu * Ou,
              semitones: Xu,
              glideSemitones: gu,
              durationMs: Uu < su - 1 ? Math.min(Nu.durationMs, Ou * cu) : Nu.durationMs,
              level: eu
            })
          }
          ku += su * Ou + (Yu.test(Du.text) ? Xu : gu.test(Du.text) ? Zu : 0)
        }
      }
      return {
        pieces: Mu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
          kind: "icon",
          icon: uu.text,
          delayMs: uu.delayMs
        } : {
          kind: "word",
          text: uu.text,
          delayMs: uu.delayMs
        })),
        blips: ou
      }
    }
    var ou = ju(1244),
      ku = ju(1303),
      mu = ju(1995);

    function vu(uu) {
      if ("string" === typeof uu) return uu;
      const Eu = ku.h.get().getCurrentLanguageCode();
      return (0, ou.u)(Eu, uu.translationKey, (0, ou.r)(uu.params, mu.e.shown))
    }

    function Ku(uu) {
      const Eu = void 0 === uu.voice ? null : (0, su.o)(uu.voice),
        ju = Eu && (0, su.l)(Eu);
      return {
        plan: Pu(vu(uu.line), ju),
        synth: ju
      }
    }

    function Vu(uu) {
      const Eu = [];
      let ju = [];
      for (const [Uu, Zu] of uu.entries()) {
        var su;
        "space" === Zu.kind && (" " !== Zu.text || "icon" !== (null === (su = uu[Uu + 1]) || void 0 === su ? void 0 : su.kind)) ? (ju.length > 0 && Eu.push(ju), Eu.push([Zu]), ju = []) : ju.push(Zu)
      }
      return ju.length > 0 && Eu.push(ju), Eu
    }
  },
  37066: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    const su = [{
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

    function Uu(uu, Eu, ju) {
      const Uu = Math.abs(uu - Eu),
        Zu = Date.now() - ju;
      for (const Xu of su)
        if (uu < Xu.maxDist) return Uu >= Xu.hardUpdateDist || Zu > Xu.timeBetweenSoftChecks && Uu >= Xu.softUpdateDist;
      return !1
    }
  },
  37383: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      e: () => cu
    });
    var su = ju(649),
      Uu = ju(31),
      Zu = ju(37341);
    const Xu = "replayFileKeptForReload",
      lu = "replayFileKeptForReloadAt",
      qu = "replayFileKeptForReloadTab",
      fu = 3e5,
      Cu = 5e3;
    async function bu(uu, Eu) {
      const ju = Date.now(),
        Zu = {
          at: ju,
          bytes: uu,
          source: Eu
        },
        fu = await Promise.race([(async () => await Uu.h.setItem(lu, ju) && Uu.h.setItem(Xu, Zu))(), (0, su.K)(Cu).then((() => !1))]);
      fu || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const bu = {
        at: ju,
        oN: fu
      };
      Uu.l.setItem(qu, bu)
    }
    async function cu() {
      var uu;
      const Eu = Uu.l.getItem(qu);
      null !== Eu && Uu.l.removeItem(qu);
      const ju = Date.now(),
        su = await Uu.h.getItem(lu),
        Cu = null !== Eu && ju - Eu.at <= fu,
        bu = null !== Eu && su === Eu.at;
      let cu = null;
      if (null !== su && (bu || ("number" !== typeof su || ju - su > fu)) && (cu = Cu && bu && Eu.oN ? await Uu.h.getItem(Xu) : null, await Promise.all([Uu.h.removeItem(lu), Uu.h.removeItem(Xu)])), !Cu) return null;
      if ((null === (uu = cu) || void 0 === uu ? void 0 : uu.at) !== Eu.at) throw new Error(Zu.c.replayNotKept.text);
      return {
        bytes: cu.bytes,
        source: cu.source
      }
    }
  },
  37375: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su,
      f: () => Zu,
      i: () => Uu
    });
    const su = [9];

    function Uu(uu) {
      return su.includes(uu)
    }

    function Zu(uu) {
      return null !== uu && uu >= 3 && uu < su[0]
    }
  },
  37349: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => Zu,
      l: () => Uu
    });
    const su = [.25, .5, 1, 2, 4, 8, 16];

    function Uu(uu, Eu) {
      const ju = su;
      let Uu = ju.indexOf(uu);
      return -1 === Uu && (Uu = ju.findIndex((Eu => Eu >= uu)), -1 === Uu && (Uu = ju.length - 1)), "up" === Eu ? ju[Math.min(Uu + 1, ju.length - 1)] : ju[Math.max(Uu - 1, 0)]
    }

    function Zu(uu) {
      return uu <= su[0]
    }

    function Xu(uu) {
      return uu >= su[su.length - 1]
    }
  },
  37391: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Uu
    });
    const su = "data-replay-ui-active",
      Uu = [{
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
  37400: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      f: () => bu,
      j: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(37391);

    function Xu() {
      const uu = {};
      for (const {
          group: Eu
        }
        of Zu.f) uu[Eu] = !0;
      return uu
    }
    let lu = Xu();

    function qu() {
      Uu.h.TY("replayViewer|uiVisibilityChanged")
    }

    function fu() {
      return lu
    }

    function Cu(uu, Eu) {
      lu[uu] !== Eu && (lu = {
        ...lu,
        [uu]: Eu
      }, "nametag" === uu && su.d.set({
        areNametagsHidden: !Eu
      }), qu())
    }

    function bu() {
      lu = Xu(), su.d.set({
        areNametagsHidden: !1
      }), qu()
    }
  },
  8961: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      e: () => Xu,
      f: () => lu,
      g: () => Uu
    });
    var su = ju(8968);
    const Uu = uu => {
        const Eu = [];
        uu.holdingGun && Eu.push({
          kind: "reload"
        }), uu.touchscreenActionButton && Eu.push({
          kind: "touchButton",
          label: uu.touchscreenActionButton
        });
        for (const Zu of null !== (ju = null === (Uu = uu.customButtons) || void 0 === Uu ? void 0 : Uu.filter(su.e)) && void 0 !== ju ? ju : []) {
          var ju, Uu;
          Eu.push({
            kind: "customButton",
            id: Zu.id,
            icon: Zu.icon,
            description: Zu.description
          })
        }
        return Eu
      },
      Zu = uu => uu.length >= 2,
      Xu = uu => "specialAction" !== uu.kind,
      lu = (uu, Eu) => {
        if (null === uu || null === Eu) return uu === Eu;
        if (uu.kind !== Eu.kind) return !1;
        switch (uu.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return uu.action === Eu.action;
          case "customButton":
            return uu.id === Eu.id && uu.icon === Eu.icon;
          case "touchButton":
            return uu.label === Eu.label
        }
      }
  },
  8956: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      g: () => Nu,
      i: () => bu,
      k: () => Ou
    });
    var su = ju(58),
      Uu = ju(24),
      Zu = ju(1499),
      Xu = ju(8961),
      lu = ju(8973);
    let qu = null;
    const fu = () => qu,
      Cu = uu => {
        (0, Xu.f)(qu, uu) || (qu = uu, Uu.h.TY(lu.g, qu))
      },
      bu = () => {
        const [uu, Eu] = (0, su.useState)(fu);
        return (0, Zu.f)(lu.g, Eu), uu
      };
    let cu = !1;
    const Nu = uu => {
        uu !== cu && (cu = uu, Uu.h.TY(lu.i, uu))
      },
      Ou = () => {
        const [uu, Eu] = (0, su.useState)(cu);
        return (0, Zu.f)(lu.i, Eu), uu
      }
  },
  8973: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      g: () => su,
      i: () => Uu,
      m: () => lu,
      q: () => qu,
      r: () => fu,
      v: () => Xu
    });
    const su = "controllerActionHintChanged",
      Uu = "controllerActionWheelHintChanged",
      Zu = "controllerOpenChat",
      Xu = "controllerSneakToggledChanged",
      lu = "controllerAttackLatchedChanged",
      qu = "controllerDropStackHoldChanged",
      fu = "controllerPickBlockHintChanged"
  },
  8909: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Zu,
      g: () => qu,
      h: () => lu
    });
    var su = ju(1499),
      Uu = ju(1461);
    const Zu = "controllerInventoryCursorChanged",
      Xu = {
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
      lu = () => {
        var uu, Eu;
        return (0, su.g)(Zu, null !== (uu = null === (Eu = (0, Uu.e)()) || void 0 === Eu ? void 0 : Eu.getInventoryCursorState()) && void 0 !== uu ? uu : Xu)
      },
      qu = () => {
        var uu, Eu;
        return null !== (uu = null === (Eu = (0, Uu.e)()) || void 0 === Eu ? void 0 : Eu.isPadSteppingSlots()) && void 0 !== uu && uu
      }
  },
  8903: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      e: () => lu,
      h: () => qu,
      j: () => Xu,
      m: () => Zu,
      n: () => Cu,
      p: () => bu
    });
    let su = null;
    const Uu = new Set,
      Zu = uu => (su = uu, () => {
        if (su === uu) {
          su = null;
          for (const uu of Uu) uu()
        }
      }),
      Xu = uu => (Uu.add(uu), () => {
        Uu.delete(uu)
      }),
      lu = () => su,
      qu = () => null !== su;
    let fu = null;
    const Cu = uu => {
        fu = uu
      },
      bu = () => {
        const uu = fu;
        return fu = null, uu
      },
      cu = (uu, Eu) => {
        var ju, su;
        return null !== (ju = null !== (su = uu.find((uu => uu.element === Eu))) && void 0 !== su ? su : uu.find((uu => uu.element.contains(Eu)))) && void 0 !== ju ? ju : null
      }
  },
  8915: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      c: () => Xu
    });
    var su = ju(58);
    const Uu = new WeakMap,
      Zu = uu => {
        var Eu, ju;
        return null !== (Eu = null === (ju = Uu.get(uu)) || void 0 === ju ? void 0 : ju.current) && void 0 !== Eu ? Eu : null
      },
      Xu = (uu, Eu) => {
        const ju = (0, su.useRef)(Eu);
        ju.current = Eu;
        const Zu = (0, su.useRef)(null);
        (0, su.useEffect)((() => {
          const Eu = uu.current,
            su = Zu.current;
          Eu !== su && (su && Uu.get(su) === ju && Uu.delete(su), Zu.current = Eu, Eu && Uu.set(Eu, ju))
        })), (0, su.useEffect)((() => () => {
          const uu = Zu.current;
          uu && Uu.get(uu) === ju && Uu.delete(uu), Zu.current = null
        }), [])
      }
  },
  9032: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      h: () => fu,
      i: () => bu,
      k: () => Cu,
      n: () => qu,
      q: () => Nu
    });
    var su = ju(24),
      Uu = ju(2065),
      Zu = ju(1461),
      Xu = ju(1443);
    const lu = uu => {
        var Eu, ju;
        return (0, Xu.g)() && null !== (Eu = null === (ju = (0, Zu.e)()) || void 0 === ju ? void 0 : ju.getGlyphForNoaAction(uu)) && void 0 !== Eu ? Eu : null
      },
      qu = "controllerGlyph:",
      fu = uu => {
        var Eu, ju;
        return null !== (Eu = null === (ju = (0, Zu.e)()) || void 0 === ju ? void 0 : ju.getPadGlyphIconName(uu)) && void 0 !== Eu ? Eu : `${qu}xbox/${uu}`
      },
      Cu = uu => uu.startsWith(qu),
      bu = uu => {
        var Eu, ju;
        return Cu(uu) && null !== (Eu = null === (ju = (0, Zu.e)()) || void 0 === ju ? void 0 : ju.getPadGlyphIconUrl(uu)) && void 0 !== Eu ? Eu : null
      },
      cu = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Xu.b, Uu.e, Uu.c],
      Nu = uu => {
        const Eu = cu.map((Eu => su.h.subscribe(Eu, uu)));
        return () => {
          for (const uu of Eu) su.h.unsubscribe(uu)
        }
      }
  },
  8942: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    let su = null;
    const Uu = function(uu) {
        const Eu = {
          cycle: uu,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return su = Eu, () => {
          su === Eu && (su = null)
        }
      },
      Zu = () => {
        var uu;
        return null !== (uu = su) && void 0 !== uu && uu.canCycle() ? su.cycle : null
      }
  },
  9017: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Xu,
      h: () => Zu,
      l: () => su,
      n: () => lu,
      o: () => fu,
      q: () => Cu
    });
    const su = "controllerActionWheelOpen",
      Uu = "controllerActionWheelAim",
      Zu = "controllerActionWheelCommit",
      Xu = "controllerActionWheelClose",
      lu = "controllerActionWheelPick";
    let qu = !1;
    const fu = () => qu,
      Cu = uu => {
        qu = uu
      }
  },
  9015: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu,
      g: () => Uu
    });
    let su = 0;
    const Uu = () => {
        su++
      },
      Zu = () => su
  },
  8933: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      f: () => Uu,
      g: () => Xu,
      h: () => Zu,
      k: () => su,
      m: () => fu
    });
    const su = "controllerQuickChatWheelOpen",
      Uu = "controllerQuickChatWheelAim",
      Zu = "controllerQuickChatWheelCommit",
      Xu = "controllerQuickChatWheelClose";
    let lu = !1;
    const qu = () => lu,
      fu = uu => {
        lu = uu
      }
  },
  37224: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      g: () => Zu
    });
    const su = new Map;

    function Uu(uu) {
      var Eu;
      return null === uu ? null : null !== (Eu = su.get(uu)) && void 0 !== Eu ? Eu : null
    }

    function Zu(uu, Eu) {
      return su.set(uu, Eu), () => {
        su.get(uu) === Eu && su.delete(uu)
      }
    }
  },
  37360: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => RE,
      e: () => zE
    });
    var su = ju(4427),
      Uu = ju(649),
      Zu = ju(3932),
      Xu = ju(3948),
      lu = ju.n(Xu);
    const qu = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      fu = "EV_boolean",
      Cu = "EV_double",
      bu = "EV_string",
      cu = "EV_doubleArr",
      Nu = "EV_armour",
      Ou = "EV_other",
      Yu = "EV_cosmetics",
      hu = "OEV_boolean",
      Du = "OEV_int",
      gu = "OEV_double",
      Mu = "OEV_string",
      eu = "OEV_stringArr",
      Gu = "OEV_meshScaling",
      pu = "IV_int",
      wu = "IV_string",
      Ju = "IV_doubleArr",
      du = "IV_double",
      au = "HV_int",
      Pu = "HV_slots",
      ou = "EnvV_string",
      ku = "EnvV_double",
      mu = "EnvV_doubleArr",
      vu = "EnvV_boolean",
      Ku = {
        type: bu,
        name: bu,
        position: cu,
        rotation: cu,
        scale: Cu,
        speed: Cu,
        jumping: fu,
        crouching: fu,
        cameraPitch: Cu,
        armSwinging: fu,
        heldItemName: bu,
        heldItemEnchantmentTier: bu,
        pose: bu,
        followingEId: bu,
        ridingVehicleEId: bu,
        leaderboardTop: bu,
        meshKind: bu,
        meshOpts: bu,
        followingOffset: cu,
        shouldMatchFollowingEntityRotation: fu,
        meshOffset: cu,
        baseRenderHeading: Cu,
        armour: Nu,
        EQ: Ou,
        playerCustomisations: Yu,
        variation: bu,
        metaInfo: bu,
        soundName: bu,
        volume: Cu,
        refDistance: Cu,
        maxHearDist: Cu,
        rate: Cu,
        aiState: bu
      },
      Vu = {
        opacity: gu,
        zIndex: Du,
        overlayColour: Mu,
        canSee: hu,
        meshScaling: Gu,
        nameTagInfo: Mu,
        multilineTextBox: Mu,
        hasPriorityNametag: hu,
        ranks: eu,
        nameColour: Mu,
        _isAlive: hu,
        _invisibleEffect: hu,
        _invincible: hu,
        killfeedColour: Mu,
        hideNameSeed: Du,
        _glowingEffect: hu,
        lockHeadToBody: hu
      },
      ru = {
        itemName: wu,
        amount: pu,
        position: Ju,
        size: du,
        attributes: wu
      },
      Qu = {
        skyBox: ou,
        fogColourOverride: ou,
        fogChunkDistanceOverride: ku,
        cameraTint: mu,
        fogOnSkybox: vu,
        fogBlockDistanceOverride: ku
      },
      iu = {
        type: "array",
        items: "double"
      },
      Wu = {
        type: "array",
        items: "int"
      },
      Su = {
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
      Iu = {
        type: "map",
        values: iu
      };

    function Fu(uu, Eu) {
      return {
        type: "record",
        name: uu,
        fields: [{
          name: "x",
          type: Eu
        }]
      }
    }
    const Bu = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Fu(hu, "boolean"), Fu(Du, "int"), Fu(gu, "double"), Fu(Mu, "string"), Fu(eu, {
              type: "array",
              items: "string"
            }), Fu(Gu, Iu)]
          }]
        }
      },
      Lu = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Fu(fu, "boolean"), Fu(Cu, "double"), Fu(bu, "string"), Fu(cu, iu), Fu(Nu, Su), Fu(Ou, Bu), Fu(Yu, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      tu = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Fu(pu, "int"), Fu(wu, "string"), Fu(du, "double"), Fu(Ju, iu)]
          }]
        }
      },
      xu = {
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
      Tu = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Fu(au, "int"), Fu(Pu, xu)]
        }]
      },
      Hu = {
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
      Au = {
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
      nu = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Fu(ou, "string"), Fu(ku, "double"), Fu(mu, iu), Fu(vu, "boolean")]
          }]
        }
      },
      yu = [{
        name: "lK",
        type: "record",
        fields: [{
          name: "pos",
          type: Wu
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
          type: Wu
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
      zu = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "uu",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Uu",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "Zu",
              type: ["null", "string", iu],
              default: null
            }, {
              name: "Xu",
              type: ["null", "double"],
              default: null
            }, {
              name: "lu",
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
          name: "ys",
          type: "string"
        }, {
          name: "zs",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Rs",
          type: "double"
        }, {
          name: "uU",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Dj",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: iu
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Qu",
          type: "string"
        }, {
          name: "aE",
          type: ["null", "double"],
          default: null
        }, {
          name: "PE",
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
          name: "IZ",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "FZ",
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
      Ru = [{
        name: "position",
        type: iu
      }, {
        name: "direction",
        type: iu
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

    function uE() {
      const uu = [{
        name: "entities",
        type: {
          type: "map",
          values: Lu
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: tu
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Ru
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
              items: Tu
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Hu],
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
              name: "Qu",
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
        type: Au
      }, {
        name: "environment",
        type: nu
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: yu
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: zu
        }
      }), uu
    }
    const EE = {
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
                name: "Tb",
                type: "int"
              }, {
                name: "position",
                type: iu
              }, {
                name: "direction",
                type: iu
              }, {
                name: "easing",
                type: iu
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
    let jE;

    function sE(uu) {
      if (9 === uu) return jE ??= (Eu = [{
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
            name: "cV",
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
              type: Wu
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
            fields: uE()
          }
        }
      }, EE], lu().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: Eu
      }, {
        sN: Object.create(null)
      })), jE;
      var Eu
    }
    var UE = ju(2955);
    let ZE, XE, lE, qE;
    const fE = 12;
    var CE, bE;
    const cE = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 3, 91, 8191, 88, 13, 14, null, 10, 16, 127, 128, 129, 4, 130, 131, !0, 15, 2, 5, 11, 9];

    function NE(uu) {
      return typeof CE[uu] === cE[5] ? CE[uu] = function(uu) {
        var Eu, ju, su, Uu, Zu, Xu, lu;
        for (hE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = cE[0], Zu = cE[0], Xu = -cE[1]), lu = cE[0]; lu < ju; lu++) {
          var qu = '3pJsQZDb&+]!yY/=d(BCP"50a),[|xG2n@cT9i:g6l;kVzKtAS1^HUL`<>jIRX%wW}{NM_h$*.4rEmf#e78qO~?voFu'.indexOf(Eu[lu]);
          if (qu !== -cE[1])
            if (Xu < cE[0]) Xu = qu;
            else {
              hE(Xu += qu * cE[13], Uu |= Xu << Zu, Zu += (Xu & cE[14]) > cE[15] ? cE[16] : cE[17]);
              do {
                hE(su.push(Uu & cE[3]), Uu >>= cE[2], Zu -= cE[2])
              } while (Zu > cE[9]);
              Xu = -cE[1]
            }
        }
        return Xu > -cE[1] && su.push((Uu | Xu << Zu) & cE[3]), OE(su)
      }(bE[uu]) : CE[uu]
    }

    function OE(uu) {
      return typeof sj !== cE[5] && sj ? (new sj).decode(new Uj(uu)) : typeof Zj !== cE[5] && Zj ? Zj.from(uu).toString("utf-8") : qj(uu)
    }

    function YE() {}

    function hE() {
      hE = function() {}
    }
    var DE, gE;
    hE(CE = {}, bE = ["E(#.itfyXU]^g8B|6L4&:Xt>dBjSf7JB", "M^_]sc~bdy7h0[3(mIgLG~9WR/!s>A9Gnx3D{R!pK=7wuS+)IAPxY4LBQ", "Si3L.RKyV!Z#kh2i", "9M8m_U%y|}OmZ7}ilM^4E9LKcC,", "_0g+LwxCR%LS3=|lI%bf~$twLjM|KY+28i0E[", "K(S[.RpCP>Br<=+2w0LEY", "2c}^uICxK<Veds", "g^kn=>wtvjsDh7tg4MNmF.5Hq+", 'G4y]Pq|&|"LB@d::m<P4V8Sl3"CD.Q2i">F&eEF(fw1TzQ', "gxMUNAv0>%</O=WB#h<.]?()[P3r|s", '>AvSb1vbAB{K,ZTi"x5Q3#=bQ', '~sUbZA$l4P0%:S"Td,_4P19Hij|j3[3G:}+GjhEjkIEK{7E:XMJnit3', ";^%20$@CzIJLP$9GK%(Di<_p4}3@5Z}2|MM$[", "N+hH#:f6tBUe%h30H^B[1hxUMLu45,H|%0@D;e~0`P9AT1P|[LFDy", "u}gQ]RejZY", "t6f|}#.xr!F5=8i2_^|`KSrl4/xA|[lBV%PmLw$x%BF9p", 'F<WD?@W?AyM!&gH|u<s]cS?K!I3Mn[zCUchb"63hvYFNPRz[pkg.,:lTG"', 'wM7D%m$_8RR"yg|;_sT*s4*j:CI/=Jq6+K{m`cK6D', "NMsx^g^TK&=`~a[0bno.U<itwyUQIj!)aKgQ(q;J*(uZ|[d[bw1UG", 'K$"4J7L6,P/GNj+C|}TxJ?!l+}7!hS~T', ">+2H9t]BZ", 'UPtH.>jB_L,jh_0l_AhQ68f?V%X.rqr:c6NnLKIl"L`wT8J(U>p', "J{vDh_pYx%P`}*NBzks", '`^"bXg!)Wwd#zd.,o}HUD`PWXUO<.9Zk', "*PxbRmUly%qnpRhB}^I&3K~xqR~);S6C)Kh20EEcZYPYu_+2^AB[):%J", "7^TnHm1BwBJ^Tjy", "k(<Dt8uaz!8)3gf6f}pGO%3", "OA0fV<lt&Yjm3", "8Iz|E`44ny_.Q9Y", "4^f+Aw/9o(5##=P[o%b@A<=pUWonYR8|h.~19~ttmBQY>*,l&TY]kX4B*}A", "`zU`|~BHqRU|rhqcl}T]qIlYNR3@57Dilk.LN*E4TCXpy[VC", "pkx2UrDHl/aDI8&BIMA^;MYp", "4A$Sf1^r%&0Y;)S,8|1&", "CBhQH*u4xIC*v=:).^iE^^l_rI{IcS5lUA3GPI^pp{5s)Q", "|c%|4%o6y(zE(RYC<%z2<cmp0P/0dqn07^1m&RF~$Y", "H>@GtS)r<j<bpOaT}3", "$0`E/7fy+}s[O$%a4}sZofEaC+}H!J", "#c#._cCt/{KEM[wi@^{Us?+lKB^.{_k:=DoD", "9R5`_4P4mU|_:hkC_2eDwUhH#w0%KYZGGp", '3>%Hh7?4JL7BXQt,YR.L7_vbNL3^iQm[fcX2s*(Tl}w"Zd/', "/n(fMc44IIM&e=W0ADV]o@(bz/F5o=LlIi0+V^caD", "I%IxqfBK^WIbPs30nK_1Ujw^{L7)RI=g_PJ", 'S^o^~qsl&`H"j)Kg)=`+@.(CI!IQWIgiozTnD#xxb', 'o|oDYE#lHC08$,@Gkk+[{OhD/I3rO$XTe.(^$%*D[%mmg/pa;^"`G', "[}O1ti3", '1iwEu:Oe#w~R+dUcjLrm%cecV"', "$^z|th%jnRB#p", "^s=H*R}p", "pB8&b#Q97>>hx*e,04&D", "*}vL6er^3B", "<6KH&4F(0WEQ|t|0", '|PFL{OhHI/d(Asg)Uc/Hg.VeG{Iw/ip(4/vS7`.>TRS"q/i)Gp', "lA/HO:/HpLRm/,%9Z=bHShxT,((DT1@2rMG`R#AJ", "sTnDRA?j7=2}Y9Za34d@Hi8j:Yc{*=>lH3", "!KmHx$)bUWG#rhGx+BaLe>7b{LMTW=.)=6nLHw;6(>NeL8_C@^MZG$_0!PFN3", ">+X`m_3;%&Z0}aNG:kK`Xm3?zI,D%_/", "MzsZ#1Fx0jE<R=I9R%G+(`#ls>e5<IE,EMtHR#!UFjZP|qgC=D&DfEa?D", 'cxZ`gSHHJLP*|QcaBnx`Fz<Jbj?m$IPcRsrn8_wT{RbGCJk:fMS^"', "|c!n/%7~HWm4cj<|XLGH[:#>V(_T}ax;HAQ1XOIpSRjIgjyCsw&[LUHJ", "ncc[^m+lvj(_cYJiB6D2sA3", 'Uc#E~ECU4PF>E$4,Ozz|Q?.pAwq1$j|GP>ymQU~(w<]r8)$a</<.LK"UhWH', "xKJ^TIsrt=([RsGTw+J", '"$%|FzlpJ=ZJ(9.C>$Vx^KaJe=NeH[u51Di4p7kYe>V/4_20L+%|m43', '*DtH{*Pjz"_"jX$)N|0|b4)CxB', "}MQ4f:RGZWz{K)p9hz@[B9:Br%fhjjY[", "/$7D968KK=a", "Z>jUeH!)2=rN>*YCB,qmdqP&Z", "D$a[)fqlF/asHqbi6%}^N`ABuI1/.AIl`c{&B", "zc.^QcKyp>1Ij_@(w0Z`cf|?}w<e]X|0b0$+QAnJ", 'BD:2f%[TOCh"Ihp926E477Q?JR}U#/2afc6.uL"7}+e<UAL6TM[x3jkT%!ZLp', "9L?E81(x^+4Tw8z[e}xE~z+CZ]Qr=s`6ZM:ELO?cc=", 'dD5HRR"ly}1e~RQk<LGb', "4(:2wUO4OWR", "DQ/27$P9aY`{mQLT!wYH=q}_@w#&Ki86@cM4ce&K1w+}qJ9G<00QRAyH,IL", '"PibSrqlGISaMI.2w0GECqTYWU~N:Xr,<s?2<^:J', "xMT]k.BK8>zaJX?lV4?HJK)l(wDMytMGVDOURO!p", '"LWL47HKCR.KVIx9C>~2|q@x4}qZD7XT=,3L2tmlDY', "*zbfXjlTW+1{Esi:O}2Q#$+p/=0^}Q}aiki`vfeyQ", 'DR?$`wk_2"`/#:7gR}f$[6N^&(rpGi|T(B2QzX?KvP;%EI~T2ROb', "oAgHC%>TPCD8n[Wx<6M1Si_rA{%<Pq{BcAf.O1_w8L)[IhmCC,gH.>3", ",i:`zM3", "2+0Eg.&KiW:.c8?dCL:SsU.xdy`", "l4U4d$gT0Pxc^/c0q26LN*@>eyDtd$Wa9$smP", "wIsZkhaa7=G2LY~6?hLS3R3BTC8m_73;2R~Eb?sUYI^!}adc1^um?$caLCeRp", "LP#QYq{j(=,j|tZ)Y,Zb^iCU)/IQdsRlU3", 'WM.^U8"x+/C*M[0c%ANn%#44]/n*cX2(aRd[TSvp', "n0WLqIhap{[2x*sGlMw|1m`l0P8=kJ3;6s2.J%?cewV(0/Oc", ":skm2HTYDWsjX9?luUF^$RdJqy", "m!][BE~p", "W%A.f9+pVI9AGZFcfIp", "DLb+wjp_;/Lebg|9O;}D)6c9k<z_adhi5y<+/", "A}tQWg@lV/VeyA6CCx;npAfc7RKE~a!:6%e+UjqbLjz%>*`x24:b4RztvPiap", "E!0+}7v#=w6s<=3G,KhS_#tl{+LSk/9a", "F}H4XRfB>j>mYZSgOsbE`8HKw<[2nqNGq)>LKS|9(B3$)Q", "`>!4`gmx<}XbN/Ix^>#H}7}lZW=#wsI;Q$#.cL_b](H", "[LvEp7{B1y_hs1Cc", "1>fQr_469L}B/7n0sTlD+97pwR[b^/m[x$*+", "e<%`r4}^2wm&_Rwx|MXQRm8at<QX)d=", "T4[x>*#xr&Yr3O166>qU^8oc?W&M$s|;|=#H@Hd9m&", "4AQ]vz[lZ]&+2Jax>z9][L%M;%yc%S>|mP2HCIkt]P$exAU[U,o+", 'J49xrALG|"t2Y*{iog^&~z*j}+T#%jw(_+v.)>$Y_LPsthP[:AmHe4TTXBL', "f!:QLi%yA=f=shiC+wp", "Us2H*c%j3y]s!Je,Gy5bD_;6|}x_**{aYKx]cfml4(y}wjvlK$n+", 'gyeL$#v~]PCrSY&BTA"2R*jMD', ":A(*jmJagj9]]XnByQ}^Aw[xA>q4wI%GUzH]oq>t1y", "fi&GZAiTvP;(s:U[}LR4`gMDb", "3L`|Fq+7q++dq:?6G6QZ3c*ay(Uw57AgDT#+_*pUdwy*#=ul9RcmC:/J", "Z,`QZ9#>fB:bkj|G@k`S>*^p", "~PsZ!:+UA{1/FQ&B", "a,:2~z=U$P!0oTn;$}0|w`oyR!kbh_YCdKgDlSLG[/", "$!NUnfSpH+&YytC[(K%bkLiT%&=i87Ma6P>^QR|yCC12yq],V,MZ", "W(Qx.RxC6jA(cXgBNMmQZAIwUC[}p", '$s0+nL4yE<@E8/A[fhY2B>oax"0cci%a`+f2B9Oyp=ZP`/6i_.~2B', "^s0Skw.^m%L2URK,QSZ`c.AHBLux3s3;[xaL(", 'r<N&CI1WWBBc{_])">6^nfJhABrQyI}2"$&@XA9a;(=rp', 'j+a@>Oaa"WPiv/zgfc+[ir46W>`)9sTGA^+DzT7TYB1"oqFx', 'v;)f@~d?_C#hWq>xfh"Q', "l,f2PI6j;}3D_AO[Bnl^Qc2TJ>9c]7)TMA3^nLAKz&BrzAR9{3", ".0@[t8:e/Bh.]Jm[Cx=E2LsvG{Re21!)tDNUB", '"wj&>*vTqyW.<s0ls=,rE4,&5CiHh7udRIlLLgcHG"', ">MTn>mBJ", ".Uq,Q_RJ", "2=@h,", "Cdxv}|_G", "!!lRz", "g,vEE>~P", "/RpL|$KJ", "M{A#}BbU", "|0vZ@", "_gjR", "qgA#C2%U", "N0MD", "H?105{JU", "[gmk6oVU", ".P2ZPpJU", ";Ay*", "w0BR", "rAq+|T0@"]), hE(jj = function() {
      var uu, Eu, ju, su = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      hE(uu = void 0, Eu = []);
      try {
        hE(uu = Object, Eu[cE[11]]("".__proto__.constructor.name))
      } catch (Uj) {}
      uu: for (ju = cE[0]; ju < su[cE[4]]; ju++) try {
        var Uu;
        for (uu = su[ju](), Uu = cE[0]; Uu < Eu[cE[4]]; Uu++)
          if (typeof uu[Eu[Uu]] === cE[5]) continue uu;
        return uu
      } catch (Uj) {}
      return uu || this
    }() || {}, sj = jj.TextDecoder, Uj = jj.Uint8Array, Zj = jj.qO, Xj = jj.String || String, lj = jj.Array || Array, qj = function() {
      var uu, Eu, ju = new lj(cE[22]);
      return hE(uu = Xj[cE[8]] || Xj.fromCharCode, Eu = []),
        function(su) {
          var Uu, Zu, Xu, lu;
          for (hE(Zu = void 0, Xu = su[cE[4]], Eu[cE[4]] = cE[0]), lu = cE[0]; lu < Xu;) hE(Zu = su[lu++], Zu <= cE[21] ? Uu = Zu : Zu <= 223 ? Uu = (31 & Zu) << cE[7] | su[lu++] & cE[6] : Zu <= 239 ? Uu = (Zu & cE[28]) << cE[10] | (su[lu++] & cE[6]) << cE[7] | su[lu++] & cE[6] : Xj[cE[8]] ? Uu = (Zu & cE[9]) << 18 | (su[lu++] & cE[6]) << cE[10] | (su[lu++] & cE[6]) << cE[7] | su[lu++] & cE[6] : (Uu = cE[6], lu += cE[12]), Eu[cE[11]](ju[Uu] || (ju[Uu] = uu(Uu))));
          return Eu.join("")
        }
    }()), (() => {
      const uu = cE[20],
        Eu = NE(120) + NE(121) + NE(122),
        ju = [cE[0], cE[1], cE[29], cE[12]].map((uu => {
          let ju = cE[0];
          for (let su = cE[12]; su >= cE[0]; su--) {
            function Uu(uu) {
              var Eu, ju, su, Uu, Zu, Xu, lu;
              for (hE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = cE[0], Zu = cE[0], Xu = -cE[1]), lu = cE[0]; lu < ju; lu++) {
                var qu = ';bGfkR18tBHAFT2!{9:P3yNdqpu6+z.ZSrLDX`n}_%$0*,]|s^QmxvC>Y(c<UW/J=Eajl4Ko#w@OgVIe5i7&[~?)M"h'.indexOf(Eu[lu]);
                if (qu !== -cE[1])
                  if (Xu < cE[0]) Xu = qu;
                  else {
                    hE(Xu += qu * cE[13], Uu |= Xu << Zu, Zu += (Xu & cE[14]) > cE[15] ? cE[16] : cE[17]);
                    do {
                      hE(su.push(Uu & cE[3]), Uu >>= cE[2], Zu -= cE[2])
                    } while (Zu > cE[9]);
                    Xu = -cE[1]
                  }
              }
              return Xu > -cE[1] && su.push((Uu | Xu << Zu) & cE[3]), OE(su)
            }

            function Zu(uu) {
              return typeof CE[uu] === cE[5] ? CE[uu] = Uu(bE[uu]) : CE[uu]
            }
            ju = ju << cE[2] | Eu[Zu(123) + Zu(124)](uu * cE[24] + su)
          }
          return ju >>> cE[0]
        })),
        su = (uu, Eu) => uu << Eu | uu >>> 32 - Eu,
        Uu = (uu, Eu, ju, Uu, Zu) => {
          (function(uu) {
            return typeof CE[uu] === cE[5] ? CE[uu] = function(uu) {
              var Eu, ju, su, Uu, Zu, Xu, lu;
              for (hE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = cE[0], Zu = cE[0], Xu = -cE[1]), lu = cE[0]; lu < ju; lu++) {
                var qu = 'U[PNcfFmVQB1`l}nh9<K,A5C7ZzpLrIa*+t]uxq^XDeMGO!/=w_0"g&R4HWi~Sd:{skjT>@b2$y3EoJv6|)Y.(?#%;8'.indexOf(Eu[lu]);
                if (qu !== -cE[1])
                  if (Xu < cE[0]) Xu = qu;
                  else {
                    hE(Xu += qu * cE[13], Uu |= Xu << Zu, Zu += (Xu & cE[14]) > cE[15] ? cE[16] : cE[17]);
                    do {
                      hE(su.push(Uu & cE[3]), Uu >>= cE[2], Zu -= cE[2])
                    } while (Zu > cE[9]);
                    Xu = -cE[1]
                  }
              }
              return Xu > -cE[1] && su.push((Uu | Xu << Zu) & cE[3]), OE(su)
            }(bE[uu]) : CE[uu]
          })(125) in YE && function() {
            var uu;

            function Eu() {}
            hE(uu = function(uu, ju) {
              var su, Uu, Zu, Xu, lu, qu = cE[0];
              for (hE(su = cE[0], Uu = new Eu(cE[0]), Zu = Uu, Xu = uu, lu = ju); Xu !== cE[18] || lu !== cE[18];) hE(su = (Xu ? Xu.val : cE[0]) + (lu ? lu.val : cE[0]) + qu, qu = Math.floor(su / cE[19]), Zu.next = new Eu(su % cE[19]), Zu = Zu.next, Xu = Xu ? Xu.next : cE[18], lu = lu ? lu.next : cE[18]);
              return qu && (Zu.next = new Eu(qu)), Uu.next
            }, console.log(uu))
          }(), hE(uu[Eu] += uu[ju], uu[Zu] = su(uu[Zu] ^ uu[Eu], cE[20]), uu[Uu] += uu[Zu], uu[ju] = su(uu[ju] ^ uu[Uu], cE[10]), uu[Eu] += uu[ju], uu[Zu] = su(uu[Zu] ^ uu[Eu], cE[2]), uu[Uu] += uu[Zu], uu[ju] = su(uu[ju] ^ uu[Uu], cE[9]))
        };
      qE = (Eu, su, Zu, Xu) => {
        function lu(uu) {
          return typeof CE[uu] === cE[5] ? CE[uu] = function(uu) {
            var Eu, ju, su, Uu, Zu, Xu, lu;
            for (hE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = cE[0], Zu = cE[0], Xu = -cE[1]), lu = cE[0]; lu < ju; lu++) {
              var qu = 'X1UTDFhCZSR,rxHg]Lq)mjb[8<VQ5@_"#+9!4M%l3Yc^>*JePf(p|W0B&`:I?.aEKiNAwtz{yO2$}k6;Godvus7n~/='.indexOf(Eu[lu]);
              if (qu !== -cE[1])
                if (Xu < cE[0]) Xu = qu;
                else {
                  hE(Xu += qu * cE[13], Uu |= Xu << Zu, Zu += (Xu & cE[14]) > cE[15] ? cE[16] : cE[17]);
                  do {
                    hE(su.push(Uu & cE[3]), Uu >>= cE[2], Zu -= cE[2])
                  } while (Zu > cE[9]);
                  Xu = -cE[1]
                }
            }
            return Xu > -cE[1] && su.push((Uu | Xu << Zu) & cE[3]), OE(su)
          }(bE[uu]) : CE[uu]
        }
        const qu = new DataView(su[NE(126)], su[lu(cE[21]) + lu(cE[22])], fE),
          fu = new Uint32Array(uu);
        hE(fu[lu(cE[23])](ju), fu[lu(cE[23])](Eu, cE[24]), fu[cE[16]] = qu[lu(cE[25]) + lu(cE[26])](cE[0], cE[27]), fu[cE[17]] = qu[lu(cE[25]) + lu(cE[26])](cE[24], cE[27]), fu[cE[28]] = qu[lu(cE[25]) + lu(cE[26])](cE[2], cE[27]));
        const Cu = new Uint32Array(uu),
          bu = new Uint8Array(Cu[lu(132)]);
        for (let cu = cE[0], Nu = Zu; cu < Xu[lu(133)]; cu += uu * cE[24], Nu++) {
          function Ou(uu) {
            var Eu, ju, su, Uu, Zu, Xu, lu;
            for (hE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = cE[0], Zu = cE[0], Xu = -cE[1]), lu = cE[0]; lu < ju; lu++) {
              var qu = 'x)@_9ajfmR*kH.?A"gSMqyLruI0o&!;3]#ze:tG,1[E8KvJwdF{Wn>~/$6ZUP=lDBVcpbhN%O5(`X+|7CTsiQ<^Y42}'.indexOf(Eu[lu]);
              if (qu !== -cE[1])
                if (Xu < cE[0]) Xu = qu;
                else {
                  hE(Xu += qu * cE[13], Uu |= Xu << Zu, Zu += (Xu & cE[14]) > cE[15] ? cE[16] : cE[17]);
                  do {
                    hE(su.push(Uu & cE[3]), Uu >>= cE[2], Zu -= cE[2])
                  } while (Zu > cE[9]);
                  Xu = -cE[1]
                }
            }
            return Xu > -cE[1] && su.push((Uu | Xu << Zu) & cE[3]), OE(su)
          }

          function Yu(uu) {
            return typeof CE[uu] === cE[5] ? CE[uu] = Ou(bE[uu]) : CE[uu]
          }

          function hu() {
            console.log((function(uu) {
              var Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu = uu.length;
              if (bu < cE[29]) return cE[0];
              if (hE(Eu = Math.max(...uu), ju = Math.min(...uu)), Eu === ju) return cE[0];
              for (hE(su = Array(bu - cE[1]).fill(Number.MAX_SAFE_INTEGER), Uu = Array(bu - cE[1]).fill(Number.MIN_SAFE_INTEGER), Zu = Math.ceil((Eu - ju) / (bu - cE[1])), Xu = cE[0]), lu = cE[0]; lu < bu; lu++) uu[lu] !== ju && uu[lu] !== Eu && hE(Xu = Math.floor((uu[lu] - ju) / Zu), su[Xu] = Math.min(su[Xu], uu[lu]), Uu[Xu] = Math.max(Uu[Xu], uu[lu]));
              for (hE(qu = Number.MIN_SAFE_INTEGER, fu = ju), Cu = cE[0]; Cu < bu - cE[1]; Cu++) su[Cu] === Number.MAX_SAFE_INTEGER && Uu[Cu] === Number.MIN_SAFE_INTEGER || hE(qu = Math.max(qu, su[Cu] - fu), fu = Uu[Cu]);
              return qu = Math.max(qu, Eu - fu)
            }))
          }
          lu(134) in YE && hu(), hE(fu[cE[10]] = Nu, Cu[Yu(135)](fu));
          for (let gu = cE[0]; gu < cE[19]; gu++) hE(Uu(Cu, cE[0], cE[24], cE[2], cE[10]), Uu(Cu, cE[1], cE[30], cE[32], cE[16]), Uu(Cu, cE[29], cE[7], cE[19], cE[17]), Uu(Cu, cE[12], cE[9], cE[31], cE[28]), Uu(Cu, cE[0], cE[30], cE[19], cE[28]), Uu(Cu, cE[1], cE[7], cE[31], cE[10]), Uu(Cu, cE[29], cE[9], cE[2], cE[16]), Uu(Cu, cE[12], cE[24], cE[32], cE[17]));
          for (let Mu = cE[0]; Mu < uu; Mu++) Cu[Mu] += fu[Mu];
          const Du = Math[Yu(136)](uu * cE[24], Xu[Yu(137)] - cu);
          for (let eu = cE[0]; eu < Du; eu++) Xu[cu + eu] ^= bu[eu]
        }
      }
    })();
    const ME = [2, 0, 1, 8, 3, "a", 124, "g", 5, 6, "d", 255, "length", "b", 4, "undefined", void 0, 25, 63, "fromCodePoint", 7, 12, "push", "c", 137, 92, 231, 91, 19, "f", 8191, 88, 13, 14, !1, !0, 207, 238, 9, 50, "i", 112, 141, 66, 55, 133, 184, 93, 233, null, 237, 10, 128, 187, "e", 212, 135, 155, 100, 103, 99, 72, 61, 108, 177, 106];

    function eE(...uu) {
      return uu[ME[12]] = ME[2], typeof sj !== ME[15] && sj ? (new sj).decode(new Uj(uu[ME[1]])) : typeof Zj !== ME[15] && Zj ? Zj.from(uu[ME[1]]).toString("utf-8") : qj(uu[ME[1]])
    }

    function GE() {}

    function pE() {
      pE = function() {}
    }
    pE(DE = {}, gE = ['74?3D!h5.9fc~?%Xz*k1,"&D:_J~^t&}+eqkanF(xpbn,pWL', "cmb2wn*0aIZ&AO[L+*{h*gD$De.@ht&>!ub4R[*v9_{", "?;on],e)]QVS.6)q=;G3", "Ui;J;%$#6I@!j6?H5&{~e", "Qi1CIh5q}SuIy`?@MM?noUSqz)", '+8z2JDi~aP2^p$2rhejJALFg",t)cHfmIK.lzvMF4', "C^:)9Q~_&DscA>LM%u9h1Xf@U)vm0Y`&q_7[k(U5QqM$ew`L2JT3]&A_Lq", 'T8ck9diy,Tac!Yy}bmIQ^12~DKe$[>=``J%?nDrQdYL"KT0@fI4}M', "e[`!Ol/)w", "Ch%iilmM+p#$dZ7BS,D*2o:$W0.4Nw5M5na?Uhs@I)kGRNF(lLTn!14M8YZ", 't6@JNXD;Xe?"4NVkfhd4][pMzA,+uIwKqDy', 'D(Q}ld9pNYo)1tCXo*"Zpd+*36', "]h2kDdAy}Mgv|FNXY,oQ`Cin)eznK>Sm0A&3", "li{~S(V,2[z`ct<;qnS1+A7~?q#uF.3`*,Q%`EsdKY$t8T0v8uy", "@<.%Zork%)sc.wBX9UgJVhHve[]%N48BkjwzR&1#bpb_.yWm", "Zid4`%tg4", 'E8V}w!1$"QYK]I6', "6T2Q=Z[(wT^/}y)HS(V58TOGwD@!qyc>0N$n4vX.p6)e,HF(", "3jpk@%]0peRCnGb(N(ezjAs(/S8FTTa``k`~p!v@2DdGJ>{@h}w", "YDgZRZ*v2DkG2HIk3Ds<AnygPe", 'PK}mZa>$`pqp3>#vs);4e:yp*p`!)TV&<uMrJN,./SRCp>j>HTmn+n""8D1', "RDLk$:5`PK7aB+ox|7", "5D+JeG]M40j#w2@B/T,J`", "?Jbn(C..x0OkaHMLK_,Z^GrQFDwL(.qREmWmf%udie(Fu!^`k_w", 'HKo?1"}k{YnPuwC}:X[%Ihf__K}!u:Q&8Ax}[X4BLTume.n`~#', 'm8}[nTO#tqi@Y6=XOmI)BZ^GW$S$er;("^8*', '[DQmC":&AQ?pA$nXnP@rX[(0`K^[|45', 'oe6%?vzkI^H"ai~kkdhnU><l#T+F2V,~', "3M~%NZ=$LD0^FriR.8Lz(C1R8,=KQTD;9*R[rE^$$MY8~V8}gmbj]P7", ",JHmH.%@aAozD!NL|KIkAQkk.Sqar.BHP*vk$D7", "y&6}t:9MH$f0X+r&", "T[v1_vrOW$S}0r;Rz*w", "!^azQpX5l$Wz;IX`Xia)lzH~*", '>Y#h0"+_g0fcOverCAPC?!q$&T|zwYv>NJk3GT.RO,cQ(w5', "Qeb5LbDRcJy!.p{KpKC*", "tUm}dFldU^IMDN5`oCNJ7d`ksKM~NId(Qed%H>dyh0gc3H*`2D4?E20@S$Wz7", 'YDlky!|G>qjCLtsRqhc2_NV$A)q"N4', '+J&<}CGD51*"#', ",}~1|UY.mA&", "{L1%qI=#", "sL3<)T^Qs^@$%r&~9Uk4:A;5retP%:ni;hu5lPG5?3+T)X.X1({~m", "B>:Q~EaRAMMr&H!ig*I<=hq5R6;p7w", "4Jy<fI`qne]9[$`RlU]}~l+*},$1mjC`<L/[j2T~#,#hryErj6dm4A_p?", "Tue5(&mMDpH}[`Niei=kcdR&wTmA`47K.A+}OG~~*q(6+$mKM#", "$ix4=ZZ$eDq!`4{MI[#", "0>_z0v/v#Y", "m;KER>tl#[*u:61RxDAZKlwqXeX&E`~K~Db4;D4py_tdQ!3`q,y", "_,;%nHp@eD&wb@$q0}o2!T(@2J,Z.t)i/jLz1pB_,QO+#", "rTo}h+&5%6lG!@jH,6.l}Cp@vD*urwPBSjZ!Qz:5%I++%I^X", "c;#E|C55f$tYZT?qdD(a)1mFsA)hQ!)iikw<zn|&;$gn0@lrW*U3", "JdfhkC!d7J&Nri!Hde1%h+V&4", ".}PCXZI#L,$!~i9~IeakKD7p8D1ZDvw}", "FwJhfI4MY9n+<r_qWC;%h>Y#~,Xw&2!i", "h>lz+Q|R<Jbc*>Mmk(ir1Xc#7Y%F7XbRY*FC*nrq~Y[", 'q<~mUV[p9_fqFY8B?iLhXt""qqS$<w', "~d#[KHnM1ejzc6gmQ;)*]hoL{YTF{!gLTL2h=+c#", 'C8<*uAFpLY]GxV;&N=on+";#', "vD*%;lelE,d@Yt>q1814", "Z8Mhr:7", 'heQ3Z,[dreM*fY3ex<EjB>~y"_#*:H/iR=wkx%^#Qp~G7', "OmK[UzbR}_fn)TuH0>C*@2R${D3!Z/=ieDl1[zi@O[<", 'R;<ZFA7MEPh96O[RSu:kY:"k~Y]Nw+{@pjb}9TX.]Q[F|@=XYhih{jaRp6:d#', 'Zj`rFH|5aIACGG7="C|[iDU.4[t,fwdr`#', "*T^z&({,6MD^@w|;!hBkd,#O4", "mYun3O.$T)#/TI3", ":X?}+Gq5kSD", 'ST|*mHVR?qzk<w<;mY^!/:#W2TL"S/*q`T/{Zuc$Hq5V7j}~|CE5~.J$"YT', '[U<ha1"RAYk}3Od(', "I8!JJT!M(KACDTMe:N_z]V/@L[PP^2A@*;S1}b.#$ABw#", 'E+%kq:!d]8r!X.YXI(?}p!`k2_)/2>v}8A{[u1gLm8r"Hy', "fNf*iC9py_B", "~(cz/%Z&2JDF[$LMm;$3YGb&+0Bw.y", "tNB!8OAyJ3/u4v[LVujmun2ln8#y(rk&H=vzsH7", '@d~JAzSkK9Ja>$<v{TZ**2pdDA}!@/f/0LW4tlJanAe"y+G@uhKhR>xF.SH', "?uP*2dBdY9d@TY$", 'M,Nr],$qH0g,4jkvkYWZyLm)Lqq"t`@L444nr&~M%)`pFr4K', "iT&nHu5$u[[,tZhL/iS55GUbTA4;E`DRsKEm1>0pNTQ9{!7@Y<.Jb%7", "FAkn=[5#", "BY5!P/tA", "@C=R;c4L", "Zw(!j)=T", "Ut$!J9k1", "R:*3JVhT", "J=(!8piT", "+L;R:{5T", "{X`dR31", "~wk]5g&tY:$snA:2*XBm@I4qV[", '*xIs/9NxL"%(6>mtnt+Y;i_IK[', ".yQBd){2<KY.0]7v=D)9]gn2it", "Cw=Ml$+L", "upKBl:hL", "WO*~w1Xu", "ew.kMdEL", "[Kk^b`^b", "BnN{YYt4wv:", "KOCq>b0d", "OFu@Yi$*", "Il+45in*", ",FG?", "FFAS9i)*", 'ivy"b', '<FQ,M"A', "<F>E3xB*", "cFM?", "|oo[o|Xx", "J=ra.<gx", "e62e1OnieT", "$1#ARt:x", "37sB", "u6EBg", "t[zB", "s1Se(_#", "f=5+Ld:x"]), pE(jj = function(...uu) {
        pE(uu[ME[12]] = ME[1], uu[ME[5]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], uu[ME[13]] = ME[16], uu[ME[0]] = []);
        try {
          pE(uu[ME[13]] = Object, uu[ME[0]][ME[22]]("".__proto__.constructor.name))
        } catch (gE) {}
        uu: for (uu[ME[10]] = ME[1]; uu[ME[10]] < uu[ME[5]][ME[12]]; uu[ME[10]]++) try {
          for (uu[ME[13]] = uu[ME[5]][uu[ME[10]]](), uu[ME[14]] = ME[1]; uu[ME[14]] < uu[ME[0]][ME[12]]; uu[ME[14]]++)
            if (typeof uu[ME[13]][uu[ME[0]][uu[ME[14]]]] === ME[15]) continue uu;
          return uu[ME[13]]
        } catch (gE) {}
        return uu[ME[13]] || this
      }() || {}, sj = jj.TextDecoder, Uj = jj.Uint8Array, Zj = jj.qO, Xj = jj.String || String, lj = jj.Array || Array, qj = function(...uu) {
        return pE(uu[ME[12]] = ME[1], uu[ME[13]] = new lj(ME[52]), uu[ME[23]] = Xj[ME[19]] || Xj.fromCharCode, uu[ME[0]] = []),
          function(...Eu) {
            for (pE(Eu[ME[12]] = ME[2], Eu[ME[2]] = ME[16], Eu[ME[0]] = ME[16], Eu[-ME[17]] = Eu[ME[1]][ME[12]], uu[ME[0]][ME[12]] = ME[1]), Eu[ME[10]] = ME[1]; Eu[ME[10]] < Eu[-ME[17]];) pE(Eu[ME[0]] = Eu[ME[1]][Eu[ME[10]]++], Eu[ME[0]] <= 127 ? Eu[ME[2]] = Eu[ME[0]] : Eu[ME[0]] <= 223 ? Eu[ME[2]] = (31 & Eu[ME[0]]) << ME[9] | Eu[ME[1]][Eu[ME[10]]++] & ME[18] : Eu[ME[0]] <= 239 ? Eu[ME[2]] = (15 & Eu[ME[0]]) << ME[21] | (Eu[ME[1]][Eu[ME[10]]++] & ME[18]) << ME[9] | Eu[ME[1]][Eu[ME[10]]++] & ME[18] : Xj[ME[19]] ? Eu[ME[2]] = (Eu[ME[0]] & ME[20]) << 18 | (Eu[ME[1]][Eu[ME[10]]++] & ME[18]) << ME[21] | (Eu[ME[1]][Eu[ME[10]]++] & ME[18]) << ME[9] | Eu[ME[1]][Eu[ME[10]]++] & ME[18] : (Eu[ME[2]] = ME[18], Eu[ME[10]] += ME[4]), uu[ME[0]][ME[22]](uu[ME[13]][Eu[ME[2]]] || (uu[ME[13]][Eu[ME[2]]] = uu[ME[23]](Eu[ME[2]]))));
            return uu[ME[0]].join("")
          }
      }()),
      function(...uu) {
        return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = function(...uu) {
          for (pE(uu[ME[12]] = ME[2], uu[ME[5]] = '7#yw4?*5)J3^_$6Y/KMqeSx;@`irmk~}<{L&v>HX(RB=]Ud.NZ2hlQ[1PDpITVA,089cuG+j!Cna%zE"FOt:obgWf|s', uu[ME[0]] = "" + (uu[ME[1]] || ""), uu[ME[4]] = uu[ME[0]].length, uu[ME[10]] = [], uu[ME[8]] = ME[1], uu[ME[9]] = ME[1], uu[ME[7]] = -ME[2]), uu[ME[3]] = ME[1]; uu[ME[3]] < uu[ME[4]]; uu[ME[3]]++)
            if (uu[-ME[6]] = uu[ME[5]].indexOf(uu[ME[0]][uu[ME[3]]]), uu[-ME[6]] !== -ME[2])
              if (uu[ME[7]] < ME[1]) uu[ME[7]] = uu[-ME[6]];
              else {
                pE(uu[ME[7]] += uu[-ME[6]] * ME[27], uu[ME[8]] |= uu[ME[7]] << uu[ME[9]], uu[ME[9]] += (uu[ME[7]] & ME[30]) > ME[31] ? ME[32] : ME[33]);
                do {
                  pE(uu[ME[10]].push(uu[ME[8]] & ME[11]), uu[ME[8]] >>= ME[3], uu[ME[9]] -= ME[3])
                } while (uu[ME[9]] > ME[20]);
                uu[ME[7]] = -ME[2]
              } return uu[ME[7]] > -ME[2] && uu[ME[10]].push((uu[ME[8]] | uu[ME[7]] << uu[ME[9]]) & ME[11]), eE(uu[ME[10]])
        }(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
      }(77) + "4" in GE && function(...uu) {
        uu[ME[12]] = ME[1]
      }(), (() => {
        function uu(...uu) {
          return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = function(uu) {
            var Eu, ju, su, Uu, Zu, Xu, lu;
            for (pE(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = ME[1], Zu = ME[1], Xu = -ME[2]), lu = ME[1]; lu < ju; lu++) {
              var qu = '1LTXYQaq[!zyxSwG/t,v;Up+$6AmM0J?d*2IPg5@i%N7uWhjf]BFoH:Rl<~D=|K"kCe`)E39sbO8c4V.(>{}#_n&Zr^'.indexOf(Eu[lu]);
              if (qu !== -ME[2])
                if (Xu < ME[1]) Xu = qu;
                else {
                  pE(Xu += qu * ME[27], Uu |= Xu << Zu, Zu += (Xu & ME[30]) > ME[31] ? ME[32] : ME[33]);
                  do {
                    pE(su.push(Uu & ME[11]), Uu >>= ME[3], Zu -= ME[3])
                  } while (Zu > ME[20]);
                  Xu = -ME[2]
                }
            }
            return Xu > -ME[2] && su.push((Uu | Xu << Zu) & ME[11]), eE(su)
          }(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
        } [][ME[12]] = ME[1], uu(79) + "6" in GE && function(...uu) {
          pE(uu[ME[12]] = ME[1], uu[ME[5]] = function(...uu) {
            for (pE(uu[ME[12]] = ME[2], uu[ME[5]] = uu[ME[1]].length, uu[ME[0]] = [], uu[ME[4]] = ME[1]), uu[-ME[36]] = ME[1]; uu[-ME[36]] < uu[ME[5]]; uu[-ME[36]]++) uu[ME[0]].push(uu[-ME[36]] !== ME[1] && uu[ME[1]][uu[-ME[36]]] > uu[ME[1]][uu[-ME[36]] - ME[2]] ? uu[ME[0]][uu[-ME[36]] - ME[2]] + ME[2] : ME[2]);
            for (uu[ME[37]] = uu[ME[5]] - ME[2]; uu[ME[37]] >= ME[1]; uu[ME[37]]--) uu[ME[37]] !== uu[ME[5]] - ME[2] && uu[ME[1]][uu[ME[37]]] > uu[ME[1]][uu[ME[37]] + ME[2]] && (uu[ME[0]][uu[ME[37]]] = Math.max(uu[ME[0]][uu[ME[37]]], uu[ME[0]][uu[ME[37]] + ME[2]] + ME[2])), uu[ME[4]] += uu[ME[0]][uu[ME[37]]];
            return uu[ME[4]]
          }, console.log(uu[ME[5]]))
        }();
        const Eu = ME[38],
          ju = uu(80) + uu(81) + uu(82) + uu(83) + uu(84) + uu(85),
          su = {
            [ME[38]]: uu(86) + uu(87) + uu(ME[31]) + "1"
          },
          Uu = (...uu) => {
            uu[ME[12]] = ME[2];
            const Eu = su[uu[ME[1]]];
            if (!Eu) {
              function ju(...uu) {
                for (pE(uu[ME[12]] = ME[2], uu[ME[2]] = 'uOLGpCrcbiBoQ4<gN6Ynhfm;q"tv(eWlkV^,TDZAU@+w!*>MxJE.jR%3aysFSK)IXPHzd08$7&2:~`=51?/}{][|_9#', uu[ME[13]] = "" + (uu[ME[1]] || ""), uu[ME[39]] = uu[ME[13]].length, uu[ME[14]] = [], uu[ME[8]] = ME[1], uu[ME[41]] = ME[1], uu[ME[20]] = -ME[2]), uu[ME[3]] = ME[1]; uu[ME[3]] < uu[ME[39]]; uu[ME[3]]++)
                  if (uu[ME[40]] = uu[ME[2]].indexOf(uu[ME[13]][uu[ME[3]]]), uu[ME[40]] !== -ME[2])
                    if (uu[ME[20]] < ME[1]) uu[ME[20]] = uu[ME[40]];
                    else {
                      pE(uu[ME[20]] += uu[ME[40]] * ME[27], uu[ME[8]] |= uu[ME[20]] << uu[ME[41]], uu[ME[41]] += (uu[ME[20]] & ME[30]) > ME[31] ? ME[32] : ME[33]);
                      do {
                        pE(uu[ME[14]].push(uu[ME[8]] & ME[11]), uu[ME[8]] >>= ME[3], uu[ME[41]] -= ME[3])
                      } while (uu[ME[41]] > ME[20]);
                      uu[ME[20]] = -ME[2]
                    } return uu[ME[20]] > -ME[2] && uu[ME[14]].push((uu[ME[8]] | uu[ME[20]] << uu[ME[41]]) & ME[11]), eE(uu[ME[14]])
              }

              function Uu(...uu) {
                return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = ju(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
              }
              throw new Error(Uu(89) + Uu(90) + Uu(ME[27]) + Uu(ME[25]) + " v" + uu[ME[1]])
            }
            return [ME[1], ME[2], ME[0], ME[4], ME[14], ME[8], ME[9], ME[20]].map(((...uu) => {
              function ju(...uu) {
                return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = function(...uu) {
                  for (pE(uu[ME[12]] = ME[2], uu[ME[5]] = 'xbCI5dm^_X>*]toNc0L~@r$3/l17g)[B&(E9`pwhJT6DRAkiP!s:|4KzyM=+nQ8Gv}2HSZV#;<".{FfjuYq?e,%aUOW', uu[ME[42]] = "" + (uu[ME[1]] || ""), uu[-ME[44]] = uu[ME[42]].length, uu[ME[46]] = [], uu[ME[4]] = ME[1], uu[ME[29]] = ME[1], uu[-ME[45]] = -ME[2]), uu[ME[43]] = ME[1]; uu[ME[43]] < uu[-ME[44]]; uu[ME[43]]++)
                    if (uu[ME[40]] = uu[ME[5]].indexOf(uu[ME[42]][uu[ME[43]]]), uu[ME[40]] !== -ME[2])
                      if (uu[-ME[45]] < ME[1]) uu[-ME[45]] = uu[ME[40]];
                      else {
                        pE(uu[-ME[45]] += uu[ME[40]] * ME[27], uu[ME[4]] |= uu[-ME[45]] << uu[ME[29]], uu[ME[29]] += (uu[-ME[45]] & ME[30]) > ME[31] ? ME[32] : ME[33]);
                        do {
                          pE(uu[ME[46]].push(uu[ME[4]] & ME[11]), uu[ME[4]] >>= ME[3], uu[ME[29]] -= ME[3])
                        } while (uu[ME[29]] > ME[20]);
                        uu[-ME[45]] = -ME[2]
                      } return uu[-ME[45]] > -ME[2] && uu[ME[46]].push((uu[ME[4]] | uu[-ME[45]] << uu[ME[29]]) & ME[11]), eE(uu[ME[46]])
                }(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
              }
              return uu[ME[12]] = ME[2], ju(ME[47]) + "8" in GE && function(...uu) {
                function Eu() {}
                uu[ME[12]] = ME[1], pE(uu[-ME[47]] = function(...uu) {
                  for (pE(uu[ME[12]] = ME[0], uu[ME[5]] = ME[1], uu[ME[13]] = ME[1], uu[ME[14]] = new Eu(ME[1]), uu[ME[50]] = uu[ME[14]], uu[ME[48]] = uu[ME[1]], uu[ME[29]] = uu[ME[2]]); uu[ME[48]] !== ME[49] || uu[ME[29]] !== ME[49];) pE(uu[ME[13]] = (uu[ME[48]] ? uu[ME[48]].val : ME[1]) + (uu[ME[29]] ? uu[ME[29]].val : ME[1]) + uu[ME[5]], uu[ME[5]] = Math.floor(uu[ME[13]] / ME[51]), uu[ME[50]].next = new Eu(uu[ME[13]] % ME[51]), uu[ME[50]] = uu[ME[50]].next, uu[ME[48]] = uu[ME[48]] ? uu[ME[48]].next : ME[49], uu[ME[29]] = uu[ME[29]] ? uu[ME[29]].next : ME[49]);
                  return uu[ME[5]] && (uu[ME[50]].next = new Eu(uu[ME[5]])), uu[ME[14]].next
                }, console.log(uu[-ME[47]]))
              }(), parseInt(Eu[ju(94)](uu[ME[1]] * ME[3], uu[ME[1]] * ME[3] + ME[3]), 16)
            }))
          };
        pE(ZE = (...uu) => (uu[ME[12]] = ME[2], function(...uu) {
          return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = function(...uu) {
            for (pE(uu[ME[12]] = ME[2], uu[ME[2]] = ';dcm<J:n61}=[HFgUR!{uYsZ~XqWki&ojS8l)OMTrxa(EQv@_"G`N>BIK,yAz/9f342#C^|0PD57$w.h%et?bp+V]L*', uu[ME[0]] = "" + (uu[ME[1]] || ""), uu[ME[4]] = uu[ME[0]].length, uu[ME[10]] = [], uu[-ME[53]] = ME[1], uu[ME[9]] = ME[1], uu[ME[52]] = -ME[2]), uu[ME[3]] = ME[1]; uu[ME[3]] < uu[ME[4]]; uu[ME[3]]++)
              if (uu[ME[40]] = uu[ME[2]].indexOf(uu[ME[0]][uu[ME[3]]]), uu[ME[40]] !== -ME[2])
                if (uu[ME[52]] < ME[1]) uu[ME[52]] = uu[ME[40]];
                else {
                  pE(uu[ME[52]] += uu[ME[40]] * ME[27], uu[-ME[53]] |= uu[ME[52]] << uu[ME[9]], uu[ME[9]] += (uu[ME[52]] & ME[30]) > ME[31] ? ME[32] : ME[33]);
                  do {
                    pE(uu[ME[10]].push(uu[-ME[53]] & ME[11]), uu[-ME[53]] >>= ME[3], uu[ME[9]] -= ME[3])
                  } while (uu[ME[9]] > ME[20]);
                  uu[ME[52]] = -ME[2]
                } return uu[ME[52]] > -ME[2] && uu[ME[10]].push((uu[-ME[53]] | uu[ME[52]] << uu[ME[9]]) & ME[11]), eE(uu[ME[10]])
          }(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
        }(95) + "v" in GE && function(...uu) {
          function Eu() {}
          uu[ME[12]] = ME[1], pE(uu[ME[57]] = function(...uu) {
            for (pE(uu[ME[12]] = ME[0], uu[ME[5]] = ME[1], uu[ME[4]] = ME[1], uu[ME[23]] = new Eu(ME[1]), uu[ME[56]] = uu[ME[23]], uu[ME[54]] = uu[ME[1]], uu[-ME[55]] = uu[ME[2]]); uu[ME[54]] !== ME[49] || uu[-ME[55]] !== ME[49];) pE(uu[ME[4]] = (uu[ME[54]] ? uu[ME[54]].val : ME[1]) + (uu[-ME[55]] ? uu[-ME[55]].val : ME[1]) + uu[ME[5]], uu[ME[5]] = Math.floor(uu[ME[4]] / ME[51]), uu[ME[56]].next = new Eu(uu[ME[4]] % ME[51]), uu[ME[56]] = uu[ME[56]].next, uu[ME[54]] = uu[ME[54]] ? uu[ME[54]].next : ME[49], uu[-ME[55]] = uu[-ME[55]] ? uu[-ME[55]].next : ME[49]);
            return uu[ME[5]] && (uu[ME[56]].next = new Eu(uu[ME[5]])), uu[ME[23]].next
          }, console.log(uu[ME[57]]))
        }(), uu[ME[1]] >= Eu), XE = (...uu) => {
          function Eu(...uu) {
            return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = function(...uu) {
              for (pE(uu[ME[12]] = ME[2], uu[-ME[58]] = 'A;*%Jdy^TS?esG2F}=Om>Mu<WNBI#bch,]nUC&$PY5{lja098.)v/t4@|+`R_f1wH:7[ikpzro!6"E3(~xgQLqKVXDZ', uu[ME[0]] = "" + (uu[ME[1]] || ""), uu[-ME[56]] = uu[ME[0]].length, uu[ME[14]] = [], uu[ME[8]] = ME[1], uu[ME[9]] = ME[1], uu[ME[18]] = -ME[2]), uu[ME[3]] = ME[1]; uu[ME[3]] < uu[-ME[56]]; uu[ME[3]]++)
                if (uu[ME[38]] = uu[-ME[58]].indexOf(uu[ME[0]][uu[ME[3]]]), uu[ME[38]] !== -ME[2])
                  if (uu[ME[18]] < ME[1]) uu[ME[18]] = uu[ME[38]];
                  else {
                    pE(uu[ME[18]] += uu[ME[38]] * ME[27], uu[ME[8]] |= uu[ME[18]] << uu[ME[9]], uu[ME[9]] += (uu[ME[18]] & ME[30]) > ME[31] ? ME[32] : ME[33]);
                    do {
                      pE(uu[ME[14]].push(uu[ME[8]] & ME[11]), uu[ME[8]] >>= ME[3], uu[ME[9]] -= ME[3])
                    } while (uu[ME[9]] > ME[20]);
                    uu[ME[18]] = -ME[2]
                  } return uu[ME[18]] > -ME[2] && uu[ME[14]].push((uu[ME[8]] | uu[ME[18]] << uu[ME[9]]) & ME[11]), eE(uu[ME[14]])
            }(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
          }
          uu[ME[12]] = ME[0];
          const ju = crypto[Eu(96) + Eu(97) + Eu(98)](new Uint8Array(fE)),
            su = UE[ME[10]][Eu(ME[60]) + Eu(ME[58])](uu[ME[2]], {
              [Eu(101)]: ME[2]
            });
          qE(Uu(uu[ME[1]]), ju, ME[2], su);
          const Zu = new Uint8Array(fE + su[Eu(102)]);
          return pE(Zu[Eu(ME[59])](ju), Zu[Eu(ME[59])](su, fE)), Zu
        }, lE = (...uu) => {
          function Eu(...uu) {
            return uu[ME[12]] = ME[2], typeof DE[uu[ME[1]]] === ME[15] ? DE[uu[ME[1]]] = function(...uu) {
              for (pE(uu[ME[12]] = ME[2], uu[ME[61]] = '#;xy7z3WiAB`nE2=H$KFrTXJ{Lg0ufSe+VqcUY&v1!N]QspRCm:[w|Z(%,/568j)>oIktl_PGD@~da."O<bh4M?}^9*', uu[ME[13]] = "" + (uu[ME[1]] || ""), uu[ME[23]] = uu[ME[13]].length, uu[ME[14]] = [], uu[ME[62]] = ME[1], uu[ME[29]] = ME[1], uu[ME[20]] = -ME[2]), uu[-ME[60]] = ME[1]; uu[-ME[60]] < uu[ME[23]]; uu[-ME[60]]++)
                if (uu[ME[38]] = uu[ME[61]].indexOf(uu[ME[13]][uu[-ME[60]]]), uu[ME[38]] !== -ME[2])
                  if (uu[ME[20]] < ME[1]) uu[ME[20]] = uu[ME[38]];
                  else {
                    pE(uu[ME[20]] += uu[ME[38]] * ME[27], uu[ME[62]] |= uu[ME[20]] << uu[ME[29]], uu[ME[29]] += (uu[ME[20]] & ME[30]) > ME[31] ? ME[32] : ME[33]);
                    do {
                      pE(uu[ME[14]].push(uu[ME[62]] & ME[11]), uu[ME[62]] >>= ME[3], uu[ME[29]] -= ME[3])
                    } while (uu[ME[29]] > ME[20]);
                    uu[ME[20]] = -ME[2]
                  } return uu[ME[20]] > -ME[2] && uu[ME[14]].push((uu[ME[62]] | uu[ME[20]] << uu[ME[29]]) & ME[11]), eE(uu[ME[14]])
            }(gE[uu[ME[1]]]) : DE[uu[ME[1]]]
          }
          if (uu[ME[12]] = ME[0], Eu(104) in GE && function(...uu) {
              pE(uu[ME[12]] = ME[1], uu[ME[13]] = function(...uu) {
                for (pE(uu[ME[12]] = ME[2], uu[-ME[63]] = uu[ME[1]].length, uu[-ME[64]] = [], uu[ME[23]] = ME[1]), uu[ME[10]] = ME[1]; uu[ME[10]] < uu[-ME[63]]; uu[ME[10]]++) uu[-ME[64]].push(uu[ME[10]] !== ME[1] && uu[ME[1]][uu[ME[10]]] > uu[ME[1]][uu[ME[10]] - ME[2]] ? uu[-ME[64]][uu[ME[10]] - ME[2]] + ME[2] : ME[2]);
                for (uu[ME[54]] = uu[-ME[63]] - ME[2]; uu[ME[54]] >= ME[1]; uu[ME[54]]--) uu[ME[54]] !== uu[-ME[63]] - ME[2] && uu[ME[1]][uu[ME[54]]] > uu[ME[1]][uu[ME[54]] + ME[2]] && (uu[-ME[64]][uu[ME[54]]] = Math.max(uu[-ME[64]][uu[ME[54]]], uu[-ME[64]][uu[ME[54]] + ME[2]] + ME[2])), uu[ME[23]] += uu[-ME[64]][uu[ME[54]]];
                return uu[ME[23]]
              }, console.log(uu[ME[13]]))
            }(), uu[ME[2]][Eu(105)] < fE) throw new Error(ju);
          const su = new Uint8Array(uu[ME[2]][Eu(ME[65])](fE));
          qE(Uu(uu[ME[1]]), uu[ME[2]][Eu(ME[65])](ME[1], fE), ME[2], su);
          const Zu = new(UE[ME[10]][Eu(107) + ME[54]])({
            [Eu(ME[63])]: ME[35]
          });
          if (Zu[Eu(109)](su), Zu[Eu(110)] || !Zu[Eu(111)]) throw new Error(ju);
          return Zu[Eu(ME[41])]
        })
      })();
    var wE = ju(37367),
      JE = ju(37370),
      dE = ju(37375);

    function aE(uu) {
      return Zu.qO.from(Uint8Array.from(uu))
    }

    function PE(uu) {
      return Array.from(uu)
    }

    function oE(uu, Eu) {
      return {
        [uu]: {
          x: Eu
        }
      }
    }

    function kE(uu) {
      if (null === uu || "object" !== typeof uu || Array.isArray(uu)) return uu;
      const Eu = Object.keys(uu);
      if (1 !== Eu.length) return uu;
      const ju = uu[Eu[0]];
      return null !== ju && "object" === typeof ju && !Array.isArray(ju) && "x" in ju ? ju.x : uu
    }

    function mE(uu, Eu) {
      return void 0 === Eu ? null : qu.has(uu) ? null === Eu ? null : JSON.stringify(Eu) : Eu
    }

    function vE(uu, Eu) {
      return null === Eu && qu.has(uu) ? null : "string" === typeof Eu && qu.has(uu) ? JSON.parse(Eu) : Eu
    }

    function KE(uu, Eu, ju) {
      return (0, Uu.H)(ju) ? null : oE(uu, mE(Eu, ju))
    }

    function VE(uu, Eu) {
      return (0, Uu.H)(Eu) ? null : vE(uu, kE(Eu))
    }

    function rE(uu) {
      const Eu = {};
      for (const ju in uu) {
        const su = uu[ju];
        Eu[ju] = void 0 === su ? null : su
      }
      return Eu
    }

    function QE(uu) {
      const Eu = {};
      for (const ju in uu) {
        const su = uu[ju];
        null !== su && void 0 !== su && (Eu[ju] = su)
      }
      return Eu
    }

    function iE(uu, Eu) {
      return Object.prototype.hasOwnProperty.call(uu, Eu)
    }

    function WE(uu, Eu) {
      const ju = {};
      for (const su in uu) {
        const Uu = uu[su];
        ju[su] = Eu(Uu)
      }
      return ju
    }

    function SE(uu, Eu, ju) {
      const su = [];
      for (let Uu = 0; Uu < Eu.length; Uu++) {
        const Zu = Eu[Uu];
        iE(uu, Zu) && su.push({
          i: Uu,
          v: ju(Zu, uu[Zu])
        })
      }
      return su
    }

    function IE(uu, Eu, ju) {
      const su = {};
      for (const Uu of uu) {
        const uu = Eu[Uu.i];
        void 0 !== uu ? su[uu] = ju(uu, Uu.v) : console.error(`Unknown Partial field index ${Uu.i}`)
      }
      return su
    }

    function FE(uu, Eu) {
      return (0, Uu.H)(Eu) ? null : "EQ" === uu ? function(uu) {
        return oE(Ou, SE(uu, JE.A, ((uu, Eu) => KE(Vu[uu], uu, Eu))))
      }(Eu) : KE(Ku[uu], uu, Eu)
    }

    function BE(uu, Eu) {
      return (0, Uu.H)(Eu) ? null : "EQ" === uu ? function(uu) {
        return (0, Uu.H)(uu) ? null : IE(uu, JE.A, VE)
      }(kE(Eu)) : VE(uu, Eu)
    }

    function LE(uu) {
      const {
        type: Eu,
        ...ju
      } = uu, su = {};
      for (const Uu in ju) {
        const uu = ju[Uu];
        su[Uu] = mE(Uu, uu)
      }
      if ("chunkAdded" === Eu || "chunkRemoved" === Eu) su.rle = aE(su.rle);
      else if ("playSound" === Eu) {
        const uu = su.Uu;
        su.Uu = (0, Uu.H)(uu) ? null : rE(uu)
      } else if ("customKillfeed" === Eu) {
        var Zu, Xu;
        su.killer = rE(null !== (Zu = su.killer) && void 0 !== Zu ? Zu : {}), su.victim = rE(null !== (Xu = su.victim) && void 0 !== Xu ? Xu : {})
      }
      return {
        [Eu]: su
      }
    }

    function tE(uu) {
      const Eu = Object.keys(uu)[0],
        ju = uu[Eu],
        su = {};
      for (const Uu in ju) {
        const uu = ju[Uu];
        su[Uu] = vE(Uu, uu)
      }
      if ("chunkAdded" === Eu || "chunkRemoved" === Eu) su.rle = PE(su.rle);
      else if ("playSound" === Eu) {
        const uu = su.Uu;
        su.Uu = (0, Uu.H)(uu) ? null : QE(uu)
      } else if ("customKillfeed" === Eu) {
        var Zu, Xu;
        su.killer = QE(null !== (Zu = su.killer) && void 0 !== Zu ? Zu : {}), su.victim = QE(null !== (Xu = su.victim) && void 0 !== Xu ? Xu : {})
      } else "animateEntity" === Eu && function(uu) {
        const Eu = null === uu || void 0 === uu ? void 0 : uu.XU;
        if ((0, Uu.H)(Eu)) return;
        for (const ju in Eu) Eu[ju].scale ??= []
      }(su.animationScript);
      return {
        type: Eu,
        ...su
      }
    }

    function xE(uu) {
      var Eu, ju;
      return (0, Uu.H)(uu) ? null : {
        name: uu.name,
        amount: null !== (Eu = uu.amount) && void 0 !== Eu ? Eu : null,
        attributes: JSON.stringify(null !== (ju = uu.attributes) && void 0 !== ju ? ju : {})
      }
    }

    function TE(uu) {
      if ((0, Uu.H)(uu)) return null;
      const Eu = uu;
      return {
        name: Eu.name,
        amount: Eu.amount,
        attributes: JSON.parse(Eu.attributes)
      }
    }

    function HE(uu) {
      if ((0, Uu.H)(uu)) return null;
      return {
        fullSlotsArray: Array.isArray(uu.slots),
        entries: SE(uu, JE.n, ((uu, Eu) => {
          if ((0, Uu.H)(Eu)) return null;
          if ("slots" === uu) {
            const uu = Array.isArray(Eu) ? function(uu) {
              const Eu = {};
              for (let ju = 0; ju < uu.length; ju++) Eu[ju] = uu[ju];
              return Eu
            }(Eu) : Eu;
            return oE(Pu, function(uu) {
              const Eu = {};
              for (const ju in uu) {
                const su = uu[ju];
                Eu[ju] = xE(su)
              }
              return Eu
            }(uu))
          }
          return oE(au, Eu)
        }))
      }
    }

    function AE(uu) {
      if ((0, Uu.H)(uu)) return;
      const Eu = uu.fullSlotsArray;
      return IE(uu.entries, JE.n, ((uu, ju) => {
        if ((0, Uu.H)(ju)) return null;
        if ("slots" === uu) {
          const uu = function(uu) {
            const Eu = {};
            for (const ju in uu) {
              const su = uu[ju];
              Eu[Number(ju)] = TE(su)
            }
            return Eu
          }(kE(ju));
          return Eu ? function(uu) {
            const Eu = [];
            for (let ju = 0; ju < Uu.o; ju++) Eu.push(ju in uu ? uu[ju] : null);
            return Eu
          }(uu) : uu
        }
        return kE(ju)
      }))
    }

    function nE(uu) {
      return {
        entities: WE(uu.entities, (uu => SE(uu, JE.m, FE))),
        items: WE(uu.items, (uu => SE(uu, JE.r, ((uu, Eu) => KE(ru[uu], uu, Eu))))),
        camera: uu.camera,
        hotbar: HE(uu.hotbar),
        playerHud: (0, Uu.H)(uu.playerHud) ? null : SE(uu.playerHud, JE.v, ((uu, Eu) => (0, Uu.H)(Eu) ? null : function(uu, Eu) {
          return {
            [uu]: Eu
          }
        }("double", Eu))),
        effects: (0, Uu.H)(uu.effects) ? null : (0, wE.l)(uu.effects),
        uiElements: SE(uu.uiElements, JE.B, ((uu, Eu) => (0, Uu.H)(Eu) ? null : JSON.stringify(Eu))),
        environment: SE(uu.environment, JE.w, ((uu, Eu) => KE(Qu[uu], uu, Eu))),
        structuralEvents: uu.structuralEvents.map(LE),
        ephemeralEvents: uu.ephemeralEvents.map(LE)
      }
    }

    function yE(uu) {
      var Eu;
      const ju = {
          entities: WE(uu.entities, (uu => {
            const Eu = IE(uu, JE.m, BE),
              ju = Eu.type ? (0, su.q)(Eu.type) : null;
            return ju && (Eu.type = "Mesh", Eu.meshKind = ju.meshKind, Eu.meshOpts = ju.meshOpts), Eu
          })),
          items: WE(uu.items, (uu => IE(uu, JE.r, VE))),
          camera: {
            ...uu.camera,
            charging: null !== (Eu = uu.camera.charging) && void 0 !== Eu && Eu
          },
          uiElements: IE(uu.uiElements, JE.B, ((uu, Eu) => "string" === typeof Eu ? JSON.parse(Eu) : Eu)),
          environment: IE(uu.environment, JE.w, VE),
          structuralEvents: uu.structuralEvents.map((uu => {
            const Eu = tE(uu);
            return "lK" === Eu.type ? (Eu.fromBlockData ??= null, Eu.toBlockData ??= null) : "chunkAdded" !== Eu.type && "chunkRemoved" !== Eu.type || (Eu.sharedBlockData ??= []), Eu
          })),
          ephemeralEvents: uu.ephemeralEvents.map((uu => tE(uu)))
        },
        Zu = AE(uu.hotbar);
      return void 0 !== Zu && (ju.hotbar = Zu), (0, Uu.H)(uu.playerHud) || (ju.playerHud = IE(uu.playerHud, JE.v, ((uu, Eu) => (0, Uu.H)(Eu) ? null : function(uu) {
        if (null === uu || "object" !== typeof uu || Array.isArray(uu)) return uu;
        const Eu = Object.keys(uu);
        return 1 !== Eu.length || "int" !== Eu[0] && "double" !== Eu[0] ? uu : uu[Eu[0]]
      }(Eu)))), (0, Uu.H)(uu.effects) || (ju.effects = (0, wE.g)(uu.effects)), ju
    }
    let zE, RE;
    var uj, Ej, jj, sj, Uj, Zj, Xj, lj, qj, fj, Cj;
    const bj = [0, 1, 8, 255, "length", "undefined", void 0, 2, 4, "c", "b", "a", 63, 6, "fromCodePoint", 7, 12, "push", 130, 3, "h", 168, "i", "g", 91, "e", "f", 8191, 88, 13, 14, "d", 177, 67, !1, 236, 118, 33, 182, 50, 9, "join", ".", 55, 95, 108, 23, 144, 209, 16, 512, 205, 27, 38, 248, 222, 204, 115, 15, 100, 244, 52, 131, 129, 5, 29, 1023, 127, 31, 128, 240, 18, 145, 143, 32, 24, 10, 19, 64, 187, 65535, 203, 61, !0, 232, 242, 109, 212, 247, 235, 72, 157, null, 202, 155, 192, 198, 184, 33554432, 67108864, 78, 158, 199, 174, 117, 135, 241, 60, 62, 193, 112, "qO"];

    function cj(...uu) {
      return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(uu) {
        var Eu, ju, su, Uu, Zu, Xu, lu;
        for (Dj(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = bj[0], Zu = bj[0], Xu = -bj[1]), lu = bj[0]; lu < ju; lu++) {
          var qu = '[djBcF#w9_%e?3IgiN/u)S].Ttbaph|O2ZWvAVP1LQfoRHrU};K<6$8M7@^*4Yl>syC0(m5x`GD"!~,E&n:+JXz{q=k'.indexOf(Eu[lu]);
          if (qu !== -bj[1])
            if (Xu < bj[0]) Xu = qu;
            else {
              Dj(Xu += qu * bj[24], Uu |= Xu << Zu, Zu += (Xu & bj[27]) > bj[28] ? bj[29] : bj[30]);
              do {
                Dj(su.push(Uu & bj[3]), Uu >>= bj[2], Zu -= bj[2])
              } while (Zu > bj[15]);
              Xu = -bj[1]
            }
        }
        return Xu > -bj[1] && su.push((Uu | Xu << Zu) & bj[3]), Nj(su)
      }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
    }

    function Nj(...uu) {
      return uu[bj[4]] = bj[1], typeof sj !== bj[5] && sj ? (new sj).decode(new Uj(uu[bj[0]])) : typeof Zj !== bj[5] && Zj ? Zj.from(uu[bj[0]]).toString("utf-8") : qj(uu[bj[0]])
    }

    function Oj(...uu) {
      if (uu[bj[4]] = bj[19], uu[bj[0]] === function(...uu) {
          return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
            for (Dj(uu[bj[4]] = bj[1], uu[bj[21]] = '9]x=%5+uCs_,{F`W/Tc(X*6d7VL^n@8EB2o#[p1ZDH~v$hg;tSQwUIyO&aqAbreRJ>")P.mlKG?zjkMNY3|i}<f04!:', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[9]] = uu[bj[10]].length, uu[bj[31]] = [], uu[bj[25]] = bj[0], uu[bj[26]] = bj[0], uu[bj[23]] = -bj[1]), uu[bj[20]] = bj[0]; uu[bj[20]] < uu[bj[9]]; uu[bj[20]]++)
              if (uu[bj[22]] = uu[bj[21]].indexOf(uu[bj[10]][uu[bj[20]]]), uu[bj[22]] !== -bj[1])
                if (uu[bj[23]] < bj[0]) uu[bj[23]] = uu[bj[22]];
                else {
                  Dj(uu[bj[23]] += uu[bj[22]] * bj[24], uu[bj[25]] |= uu[bj[23]] << uu[bj[26]], uu[bj[26]] += (uu[bj[23]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                  do {
                    Dj(uu[bj[31]].push(uu[bj[25]] & bj[3]), uu[bj[25]] >>= bj[2], uu[bj[26]] -= bj[2])
                  } while (uu[bj[26]] > bj[15]);
                  uu[bj[23]] = -bj[1]
                } return uu[bj[23]] > -bj[1] && uu[bj[31]].push((uu[bj[25]] | uu[bj[23]] << uu[bj[26]]) & bj[3]), Nj(uu[bj[31]])
          }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
        }(97) + bj[11]) return uu[bj[1]] + uu[bj[7]]
    }

    function Yj() {}

    function hj(uu, Eu, ju, su = {}, Uu, Zu, Xu, lu) {
      if (Zu || (Zu = function(...uu) {
          return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = Uu(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
        }), Uu || (Uu = function(...uu) {
          for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = 'p[D+B1Fu)5jLOX,(b$v!o06gh>I|H~CltUwq"_dNeEYQ/;7}RJ*c2P]Makfs4`S9^TKmAZx@.y8?n#W<GV3{:rz=&%i', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[10]].length, uu[bj[31]] = [], uu[bj[37]] = bj[0], uu[bj[38]] = bj[0], uu[bj[15]] = -bj[1]), uu[bj[35]] = bj[0]; uu[bj[35]] < uu[bj[19]]; uu[bj[35]]++)
            if (uu[bj[36]] = uu[bj[11]].indexOf(uu[bj[10]][uu[bj[35]]]), uu[bj[36]] !== -bj[1])
              if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[bj[36]];
              else {
                Dj(uu[bj[15]] += uu[bj[36]] * bj[24], uu[bj[37]] |= uu[bj[15]] << uu[bj[38]], uu[bj[38]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(uu[bj[31]].push(uu[bj[37]] & bj[3]), uu[bj[37]] >>= bj[2], uu[bj[38]] -= bj[2])
                } while (uu[bj[38]] > bj[15]);
                uu[bj[15]] = -bj[1]
              } return uu[bj[15]] > -bj[1] && uu[bj[31]].push((uu[bj[37]] | uu[bj[15]] << uu[bj[38]]) & bj[3]), Nj(uu[bj[31]])
        }), Dj(Xu = void 0, lu = {
          [cj(bj[59])]: function(...uu) {
            function Eu(...uu) {
              return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
                for (Dj(uu[bj[4]] = bj[1], uu[bj[39]] = 'T5AtHPdRgObIMGXE~31U@7B9zhy#=&,L%>xWDo*8c{QSrws?Fkj)C^l/|4$]!Y(."uv_2;aKnmiJf}qV0N<`6pZ+[e:', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[10]].length, uu[bj[31]] = [], uu[bj[25]] = bj[0], uu[bj[26]] = bj[0], uu[bj[23]] = -bj[1]), uu[bj[2]] = bj[0]; uu[bj[2]] < uu[bj[19]]; uu[bj[2]]++)
                  if (uu[bj[40]] = uu[bj[39]].indexOf(uu[bj[10]][uu[bj[2]]]), uu[bj[40]] !== -bj[1])
                    if (uu[bj[23]] < bj[0]) uu[bj[23]] = uu[bj[40]];
                    else {
                      Dj(uu[bj[23]] += uu[bj[40]] * bj[24], uu[bj[25]] |= uu[bj[23]] << uu[bj[26]], uu[bj[26]] += (uu[bj[23]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                      do {
                        Dj(uu[bj[31]].push(uu[bj[25]] & bj[3]), uu[bj[25]] >>= bj[2], uu[bj[26]] -= bj[2])
                      } while (uu[bj[26]] > bj[15]);
                      uu[bj[23]] = -bj[1]
                    } return uu[bj[23]] > -bj[1] && uu[bj[31]].push((uu[bj[25]] | uu[bj[23]] << uu[bj[26]]) & bj[3]), Nj(uu[bj[31]])
              }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
            }
            Dj([
              [uu[bj[11]], uu[bj[44]], uu[bj[43]]], uu[bj[19]]
            ] = Cj, console[Eu(101)]("" + uu[bj[11]][bj[41]](bj[42]) + (Eu(102) + Eu(103)) + uu[bj[43]][Eu(104) + "me"] + Eu(105) + uu[bj[44]]))
          }
        }), Eu === Zu(106) + Zu(107)) {
        function qu(...uu) {
          Dj(uu[bj[4]] = bj[0], uu[bj[70]] = function(...uu) {
            function Eu(...uu) {
              return uu[bj[4]] = bj[7], Xu(su(lu(uu[bj[0]]), lu(uu[bj[1]])))
            }

            function ju(uu, Eu, ju) {
              return function(...uu) {
                var Eu, ju, su, Uu;
                for (Dj(uu[bj[4]] = bj[7], uu[bj[11]] = uu[bj[1]].length, uu[bj[10]] = Array()), uu[bj[9]] = Array(Math.ceil(uu[bj[0]].length / bj[7])), Eu = bj[0]; Eu < uu[bj[9]].length; Eu++) uu[bj[9]][Eu] = uu[bj[0]].charCodeAt(Eu * bj[7]) << bj[2] | uu[bj[0]].charCodeAt(Eu * bj[7] + bj[1]);
                for (; uu[bj[9]].length > bj[0];) {
                  for (Dj(Uu = Array(), su = bj[0]), Eu = bj[0]; Eu < uu[bj[9]].length; Eu++) Dj(su = (su << bj[49]) + uu[bj[9]][Eu], ju = Math.floor(su / uu[bj[11]]), su -= ju * uu[bj[11]]), (Uu.length > bj[0] || ju > bj[0]) && (Uu[Uu.length] = ju);
                  Dj(uu[bj[10]][uu[bj[10]].length] = su, uu[bj[9]] = Uu)
                }
                for (uu[-bj[16]] = "", Eu = uu[bj[10]].length - bj[1]; Eu >= bj[0]; Eu--) uu[-bj[16]] += uu[bj[1]].charAt(uu[bj[10]][Eu]);
                for (uu[bj[65]] = Math.ceil(uu[bj[0]].length * bj[2] / (Math.log(uu[bj[1]].length) / Math.log(bj[7]))), Eu = uu[-bj[16]].length; Eu < uu[bj[65]]; Eu++) uu[-bj[16]] = uu[bj[1]][bj[0]] + uu[-bj[16]];
                return uu[-bj[16]]
              }(su(lu(uu), lu(Eu)), ju)
            }

            function su(...uu) {
              Dj(uu[bj[4]] = bj[7], uu[bj[11]] = qu(uu[bj[0]])), uu[bj[11]].length > bj[49] && (uu[bj[11]] = gu(uu[bj[11]], uu[bj[0]].length * bj[2]));
              var Eu = Array(bj[49]),
                ju = Array(bj[49]);
              for (uu[bj[10]] = bj[0]; uu[bj[10]] < bj[49]; uu[bj[10]]++) Dj(Eu[uu[bj[10]]] = 909522486 ^ uu[bj[11]][uu[bj[10]]], ju[uu[bj[10]]] = 1549556828 ^ uu[bj[11]][uu[bj[10]]]);
              return uu[bj[8]] = gu(Eu.concat(qu(uu[bj[1]])), bj[50] + uu[bj[1]].length * bj[2]), fu(gu(ju.concat(uu[bj[8]]), Oj(Zu(114) + bj[11], bj[50], 256)))
            }

            function Uu(Eu) {
              var ju, su, Uu, Zu;

              function lu(...uu) {
                return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
                  for (Dj(uu[bj[4]] = bj[1], uu[bj[54]] = 'qjA]9B;[#*%h+6=/@ic~}ORP3pI48(!a2WJUL,C"SbeM1{Df0zsry&$Yx)`7m.wXKZv>|_QHV<Tuokg5NE:F?tndlG^', uu[-bj[51]] = "" + (uu[bj[0]] || ""), uu[-bj[53]] = uu[-bj[51]].length, uu[bj[8]] = [], uu[-bj[56]] = bj[0], uu[bj[26]] = bj[0], uu[bj[15]] = -bj[1]), uu[-bj[52]] = bj[0]; uu[-bj[52]] < uu[-bj[53]]; uu[-bj[52]]++)
                    if (uu[-bj[55]] = uu[bj[54]].indexOf(uu[-bj[51]][uu[-bj[52]]]), uu[-bj[55]] !== -bj[1])
                      if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[-bj[55]];
                      else {
                        Dj(uu[bj[15]] += uu[-bj[55]] * bj[24], uu[-bj[56]] |= uu[bj[15]] << uu[bj[26]], uu[bj[26]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                        do {
                          Dj(uu[bj[8]].push(uu[-bj[56]] & bj[3]), uu[-bj[56]] >>= bj[2], uu[bj[26]] -= bj[2])
                        } while (uu[bj[26]] > bj[15]);
                        uu[bj[15]] = -bj[1]
                      } return uu[bj[15]] > -bj[1] && uu[bj[8]].push((uu[-bj[56]] | uu[bj[15]] << uu[bj[26]]) & bj[3]), Nj(uu[bj[8]])
                }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
              }
              try {
                uu[bj[11]]
              } catch (Xu) {
                uu[bj[11]] = bj[0]
              }
              for (Dj(ju = uu[bj[11]] ? lu(bj[57]) + lu(116) + lu(bj[104]) : lu(bj[57]) + lu(bj[36]) + lu(119), su = "", Uu = void 0), Zu = bj[0]; Zu < Eu.length; Zu++) Dj(Uu = Eu.charCodeAt(Zu), su += ju.charAt(Uu >>> bj[8] & bj[58]) + ju.charAt(Uu & bj[58]));
              return su
            }

            function Xu(...Eu) {
              function su(...uu) {
                return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
                  for (Dj(uu[bj[4]] = bj[1], uu[bj[1]] = 'z*!;0_:/`,"]MUu7fbL|Zpa8tR^e?E>KiVQDndCq%}2T$P#hr(Bs6O93+5<xXA=Fc1.omyNSvYH4@&Jlg)[{jGI~Wwk', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[10]].length, uu[bj[31]] = [], uu[-bj[59]] = bj[0], uu[bj[26]] = bj[0], uu[bj[15]] = -bj[1]), uu[bj[2]] = bj[0]; uu[bj[2]] < uu[bj[19]]; uu[bj[2]]++)
                    if (uu[bj[22]] = uu[bj[1]].indexOf(uu[bj[10]][uu[bj[2]]]), uu[bj[22]] !== -bj[1])
                      if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[bj[22]];
                      else {
                        Dj(uu[bj[15]] += uu[bj[22]] * bj[24], uu[-bj[59]] |= uu[bj[15]] << uu[bj[26]], uu[bj[26]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                        do {
                          Dj(uu[bj[31]].push(uu[-bj[59]] & bj[3]), uu[-bj[59]] >>= bj[2], uu[bj[26]] -= bj[2])
                        } while (uu[bj[26]] > bj[15]);
                        uu[bj[15]] = -bj[1]
                      } return uu[bj[15]] > -bj[1] && uu[bj[31]].push((uu[-bj[59]] | uu[bj[15]] << uu[bj[26]]) & bj[3]), Nj(uu[bj[31]])
                }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
              }
              Eu[bj[4]] = bj[1];
              try {
                uu[-bj[60]]
              } catch (ju) {
                uu[-bj[60]] = ""
              }
              for (Dj(Eu[-bj[63]] = su(120) + su(121) + su(122) + su(123), Eu[bj[10]] = "", Eu[-bj[62]] = Eu[bj[0]].length), Eu[bj[61]] = bj[0]; Eu[bj[61]] < Eu[-bj[62]]; Eu[bj[61]] += bj[19])
                for (Eu[bj[64]] = Eu[bj[0]].charCodeAt(Eu[bj[61]]) << bj[49] | (Eu[bj[61]] + bj[1] < Eu[-bj[62]] ? Eu[bj[0]].charCodeAt(Eu[bj[61]] + bj[1]) << bj[2] : bj[0]) | (Eu[bj[61]] + bj[7] < Eu[-bj[62]] ? Eu[bj[0]].charCodeAt(Eu[bj[61]] + bj[7]) : bj[0]), Eu[bj[26]] = bj[0]; Eu[bj[26]] < bj[8]; Eu[bj[26]]++) Eu[bj[61]] * bj[2] + Eu[bj[26]] * bj[13] > Eu[bj[0]].length * bj[2] ? Eu[bj[10]] += uu[-bj[60]] : Eu[bj[10]] += Eu[-bj[63]].charAt(Eu[bj[64]] >>> bj[13] * (bj[19] - Eu[bj[26]]) & bj[12]);
              return Eu[bj[10]]
            }

            function lu(uu) {
              var Eu, ju, su, Uu = "";
              for (Eu = -bj[1]; ++Eu < uu.length;) Dj(ju = uu.charCodeAt(Eu), su = Eu + bj[1] < uu.length ? uu.charCodeAt(Eu + bj[1]) : bj[0]), 55296 <= ju && ju <= 56319 && 56320 <= su && su <= 57343 && Dj(ju = 65536 + ((ju & bj[66]) << bj[76]) + (su & bj[66]), Eu++), ju <= bj[67] ? Uu += String.fromCharCode(ju) : ju <= 2047 ? Uu += String.fromCharCode(bj[95] | ju >>> bj[13] & bj[68], bj[69] | ju & bj[12]) : ju <= bj[80] ? Uu += String.fromCharCode(224 | ju >>> bj[16] & bj[58], bj[69] | ju >>> bj[13] & bj[12], bj[69] | ju & bj[12]) : ju <= 2097151 && (Uu += String.fromCharCode(bj[70] | ju >>> bj[71] & bj[15], bj[69] | ju >>> bj[16] & bj[12], bj[69] | ju >>> bj[13] & bj[12], bj[69] | ju & bj[12]));
              return Uu
            }

            function qu(...uu) {
              for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = Array(uu[bj[0]].length >> bj[7])), uu[bj[10]] = bj[0]; uu[bj[10]] < uu[bj[11]].length; uu[bj[10]]++) uu[bj[11]][uu[bj[10]]] = bj[0];
              for (uu[bj[10]] = bj[0]; uu[bj[10]] < uu[bj[0]].length * bj[2]; uu[bj[10]] += bj[2]) uu[bj[11]][uu[bj[10]] >> bj[64]] |= (uu[bj[0]].charCodeAt(uu[bj[10]] / bj[2]) & bj[3]) << bj[75] - uu[bj[10]] % bj[74];
              return uu[bj[11]]
            }

            function fu(...uu) {
              for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = ""), uu[bj[73]] = bj[0]; uu[bj[73]] < uu[bj[0]].length * bj[74]; uu[bj[73]] += bj[2]) uu[bj[11]] += String.fromCharCode(uu[bj[0]][uu[bj[73]] >> bj[64]] >>> bj[75] - uu[bj[73]] % bj[74] & bj[3]);
              return uu[bj[11]]
            }

            function Cu(...uu) {
              return uu[bj[4]] = bj[7], uu[bj[0]] >>> uu[bj[1]] | uu[bj[0]] << bj[74] - uu[bj[1]]
            }

            function bu(...uu) {
              return uu[bj[4]] = bj[7], uu[bj[0]] >>> uu[bj[1]]
            }

            function cu(...uu) {
              return uu[bj[4]] = bj[19], uu[bj[0]] & uu[bj[1]] ^ ~uu[bj[0]] & uu[bj[7]]
            }

            function Nu(...uu) {
              return uu[bj[4]] = bj[19], uu[bj[0]] & uu[bj[1]] ^ uu[bj[0]] & uu[bj[7]] ^ uu[bj[1]] & uu[bj[7]]
            }

            function Ou(...uu) {
              return uu[bj[4]] = bj[1], Cu(uu[bj[0]], bj[7]) ^ Cu(uu[bj[0]], bj[29]) ^ Cu(uu[bj[0]], 22)
            }

            function Yu(...uu) {
              return uu[bj[4]] = bj[1], Cu(uu[bj[0]], bj[13]) ^ Cu(uu[bj[0]], 11) ^ Cu(uu[bj[0]], 25)
            }

            function hu(uu) {
              return Cu(uu, bj[15]) ^ Cu(uu, bj[71]) ^ bu(uu, bj[19])
            }

            function Du(...uu) {
              return uu[bj[4]] = bj[1], Cu(uu[bj[0]], 17) ^ Cu(uu[bj[0]], bj[77]) ^ bu(uu[bj[0]], bj[76])
            }

            function gu(...Eu) {
              var ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, gu, eu;
              for (Dj(Eu[bj[4]] = bj[7], Eu[bj[7]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Eu[bj[79]] = new Array(bj[78])), Dj(Eu[bj[0]][Eu[bj[1]] >> bj[64]] |= bj[69] << bj[75] - Eu[bj[1]] % bj[74], Eu[bj[0]][(Eu[bj[1]] + bj[78] >> bj[40] << bj[8]) + bj[58]] = Eu[bj[1]]), Cu = bj[0]; Cu < Eu[bj[0]].length; Cu += bj[49]) {
                for (Dj(ju = Eu[bj[7]][bj[0]], su = Eu[bj[7]][bj[1]], Uu = Eu[bj[7]][bj[7]], Zu = Eu[bj[7]][bj[19]], Xu = Eu[bj[7]][bj[8]], lu = Eu[bj[7]][bj[64]], qu = Eu[bj[7]][bj[13]], fu = Eu[bj[7]][bj[15]]), bu = bj[0]; bu < bj[78]; bu++) Dj(bu < bj[49] ? Eu[bj[79]][bu] = Eu[bj[0]][bu + Cu] : Eu[bj[79]][bu] = Mu(Mu(Mu(Du(Eu[bj[79]][bu - bj[7]]), Eu[bj[79]][bu - bj[15]]), hu(Eu[bj[79]][bu - bj[58]])), Eu[bj[79]][bu - bj[49]]), gu = Mu(Mu(Mu(Mu(fu, Yu(Xu)), cu(Xu, lu, qu)), uu[bj[7]][bu]), Eu[bj[79]][bu]), eu = Mu(Ou(ju), Nu(ju, su, Uu)), fu = qu, qu = lu, lu = Xu, Xu = Mu(Zu, gu), Zu = Uu, Uu = su, su = ju, ju = Mu(gu, eu));
                Dj(Eu[bj[7]][bj[0]] = Mu(ju, Eu[bj[7]][bj[0]]), Eu[bj[7]][bj[1]] = Mu(su, Eu[bj[7]][bj[1]]), Eu[bj[7]][bj[7]] = Mu(Uu, Eu[bj[7]][bj[7]]), Eu[bj[7]][bj[19]] = Mu(Zu, Eu[bj[7]][bj[19]]), Eu[bj[7]][bj[8]] = Mu(Xu, Eu[bj[7]][bj[8]]), Eu[bj[7]][bj[64]] = Mu(lu, Eu[bj[7]][bj[64]]), Eu[bj[7]][bj[13]] = Mu(qu, Eu[bj[7]][bj[13]]), Eu[bj[7]][bj[15]] = Mu(fu, Eu[bj[7]][bj[15]]))
              }
              return Eu[bj[7]]
            }

            function Mu(...uu) {
              return Dj(uu[bj[4]] = bj[7], uu[-bj[56]] = (uu[bj[0]] & bj[80]) + (uu[bj[1]] & bj[80]), uu[bj[10]] = (uu[bj[0]] >> bj[49]) + (uu[bj[1]] >> bj[49]) + (uu[-bj[56]] >> bj[49])), uu[bj[10]] << bj[49] | uu[-bj[56]] & bj[80]
            }
            return Dj(uu[bj[4]] = bj[0], uu[bj[11]] = bj[0], uu[-bj[60]] = ""), uu[bj[7]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...uu) {
                return uu[bj[4]] = bj[1], Uu(function(...uu) {
                  return uu[bj[4]] = bj[1], fu(gu(qu(uu[bj[0]]), uu[bj[0]].length * bj[2]))
                }(lu(uu[bj[0]])))
              },
              b64: Eu,
              any: ju,
              hex_hmac: function(...uu) {
                return uu[bj[4]] = bj[7], Uu(su(lu(uu[bj[0]]), lu(uu[bj[1]])))
              },
              b64_hmac: Eu,
              any_hmac: ju
            }
          }(), console.log(uu[bj[70]]))
        }
        Zu(bj[45]) in Yj && qu(), Cj = []
      }
      if (Eu === Zu(124) + Zu(125)) {
        function fu(uu) {
          var Eu, ju, su, Uu, Zu, Xu, lu;
          for (Dj(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = bj[0], Zu = bj[0], Xu = -bj[1]), lu = bj[0]; lu < ju; lu++) {
            var qu = 'E:Qa9}LA_bSu5WzyRqPH>%GkXvjh][f0gU21NTY;#J"pKC?c.B^rVo!D&ieF<w,6n~@td(I{OMmZslx=*)3/487`$|+'.indexOf(Eu[lu]);
            if (qu !== -bj[1])
              if (Xu < bj[0]) Xu = qu;
              else {
                Dj(Xu += qu * bj[24], Uu |= Xu << Zu, Zu += (Xu & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(su.push(Uu & bj[3]), Uu >>= bj[2], Zu -= bj[2])
                } while (Zu > bj[15]);
                Xu = -bj[1]
              }
          }
          return Xu > -bj[1] && su.push((Uu | Xu << Zu) & bj[3]), Nj(su)
        }

        function Cu(uu) {
          return typeof uj[uu] === bj[5] ? uj[uu] = fu(Ej[uu]) : uj[uu]
        }

        function bu(...uu) {
          Dj(uu[bj[4]] = bj[0], uu[-bj[62]] = function(...uu) {
            for (Dj(uu[bj[4]] = bj[1], uu[bj[81]] = uu[bj[0]].length, uu[bj[7]] = [], uu[bj[9]] = bj[0], uu[bj[31]] = bj[0], uu[bj[0]].sort(((uu, Eu) => uu - Eu))), uu[bj[25]] = bj[0]; uu[bj[25]] < uu[bj[81]]; uu[bj[25]]++)
              if (!(uu[bj[25]] > bj[0] && uu[bj[0]][uu[bj[25]]] === uu[bj[0]][uu[bj[25]] - bj[1]]))
                for (Dj(uu[bj[9]] = uu[bj[25]] + bj[1], uu[bj[31]] = uu[bj[81]] - bj[1]); uu[bj[9]] < uu[bj[31]];)
                  if (uu[bj[0]][uu[bj[25]]] + uu[bj[0]][uu[bj[9]]] + uu[bj[0]][uu[bj[31]]] < bj[0]) uu[bj[9]]++;
                  else if (uu[bj[0]][uu[bj[25]]] + uu[bj[0]][uu[bj[9]]] + uu[bj[0]][uu[bj[31]]] > bj[0]) uu[bj[31]]--;
            else {
              for (uu[bj[7]].push([uu[bj[0]][uu[bj[25]]], uu[bj[0]][uu[bj[9]]], uu[bj[0]][uu[bj[31]]]]); uu[bj[9]] < uu[bj[31]] && uu[bj[0]][uu[bj[9]]] === uu[bj[0]][uu[bj[9]] + bj[1]];) uu[bj[9]]++;
              for (; uu[bj[9]] < uu[bj[31]] && uu[bj[0]][uu[bj[31]]] === uu[bj[0]][uu[bj[31]] - bj[1]];) uu[bj[31]]--;
              Dj(uu[bj[9]]++, uu[bj[31]]--)
            }
            return uu[bj[7]]
          }, console.log(uu[-bj[62]]))
        }

        function cu() {
          var Eu = function(...Eu) {
            return function(...uu) {
              return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
                for (Dj(uu[bj[4]] = bj[1], uu[-bj[82]] = 'Ud0PGEqViIkhfejstRMgHOoWub)L3;=?p94C2c>+KTB7~y&m#5lFXA^NaSZQJ[Dn1zx`r:Y!v_{w.},(8%"@|6$]*</', uu[bj[7]] = "" + (uu[bj[0]] || ""), uu[bj[9]] = uu[bj[7]].length, uu[bj[31]] = [], uu[bj[25]] = bj[0], uu[bj[46]] = bj[0], uu[bj[23]] = -bj[1]), uu[bj[2]] = bj[0]; uu[bj[2]] < uu[bj[9]]; uu[bj[2]]++)
                  if (uu[bj[40]] = uu[-bj[82]].indexOf(uu[bj[7]][uu[bj[2]]]), uu[bj[40]] !== -bj[1])
                    if (uu[bj[23]] < bj[0]) uu[bj[23]] = uu[bj[40]];
                    else {
                      Dj(uu[bj[23]] += uu[bj[40]] * bj[24], uu[bj[25]] |= uu[bj[23]] << uu[bj[46]], uu[bj[46]] += (uu[bj[23]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                      do {
                        Dj(uu[bj[31]].push(uu[bj[25]] & bj[3]), uu[bj[25]] >>= bj[2], uu[bj[46]] -= bj[2])
                      } while (uu[bj[46]] > bj[15]);
                      uu[bj[23]] = -bj[1]
                    } return uu[bj[23]] > -bj[1] && uu[bj[31]].push((uu[bj[25]] | uu[bj[23]] << uu[bj[46]]) & bj[3]), Nj(uu[bj[31]])
              }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
            }(bj[67]) in Yj && function(...uu) {
              Dj(uu[bj[4]] = bj[0], uu[bj[11]] = function(...Eu) {
                return Dj(Eu[bj[4]] = bj[19], Eu[bj[74]] = {}), Eu[bj[7]].length !== Eu[bj[0]].length + Eu[bj[1]].length ? bj[34] : uu[bj[1]](Eu[bj[0]], Eu[bj[1]], Eu[bj[7]], bj[0], bj[0], bj[0], Eu[bj[74]])
              }, uu[bj[1]] = function(...Eu) {
                return Dj(Eu[bj[4]] = bj[15], Eu[bj[15]] = bj[34]), Eu[bj[64]] >= Eu[bj[7]].length ? bj[83] : Eu[bj[13]]["" + Eu[bj[19]] + Eu[bj[8]] + Eu[bj[64]]] !== bj[6] ? Eu[bj[13]]["" + Eu[bj[19]] + Eu[bj[8]] + Eu[bj[64]]] : (Eu[bj[7]][Eu[bj[64]]] === Eu[bj[0]][Eu[bj[19]]] && Eu[bj[7]][Eu[bj[64]]] === Eu[bj[1]][Eu[bj[8]]] ? Eu[bj[15]] = uu[bj[1]](Eu[bj[0]], Eu[bj[1]], Eu[bj[7]], Eu[bj[19]] + bj[1], Eu[bj[8]], Eu[bj[64]] + bj[1], Eu[bj[13]]) || uu[bj[1]](Eu[bj[0]], Eu[bj[1]], Eu[bj[7]], Eu[bj[19]], Eu[bj[8]] + bj[1], Eu[bj[64]] + bj[1], Eu[bj[13]]) : Eu[bj[7]][Eu[bj[64]]] === Eu[bj[0]][Eu[bj[19]]] ? Eu[bj[15]] = uu[bj[1]](Eu[bj[0]], Eu[bj[1]], Eu[bj[7]], Eu[bj[19]] + bj[1], Eu[bj[8]], Eu[bj[64]] + bj[1], Eu[bj[13]]) : Eu[bj[7]][Eu[bj[64]]] === Eu[bj[1]][Eu[bj[8]]] && (Eu[bj[15]] = uu[bj[1]](Eu[bj[0]], Eu[bj[1]], Eu[bj[7]], Eu[bj[19]], Eu[bj[8]] + bj[1], Eu[bj[64]] + bj[1], Eu[bj[13]])), Eu[bj[13]]["" + Eu[bj[19]] + Eu[bj[8]] + Eu[bj[64]]] = Eu[bj[15]], Eu[bj[15]])
              }, console.log(uu[bj[11]]))
            }(), Cj = Eu, lu[uu].apply(this)
          };
          if (su[uu]) {
            function ju(...uu) {
              for (Dj(uu[bj[4]] = bj[1], uu[bj[1]] = '/nTHQ+<e]1i54u|GRXr8).dABzCv?,`j9l%kKhM_D^Yf3w*a}EbWNIL${;"[>cm26PpqJ7#(S~ox0ZU:F&V!=ytgs@O', uu[bj[7]] = "" + (uu[bj[0]] || ""), uu[bj[9]] = uu[bj[7]].length, uu[bj[31]] = [], uu[bj[64]] = bj[0], uu[bj[13]] = bj[0], uu[bj[15]] = -bj[1]), uu[-bj[84]] = bj[0]; uu[-bj[84]] < uu[bj[9]]; uu[-bj[84]]++)
                if (uu[bj[40]] = uu[bj[1]].indexOf(uu[bj[7]][uu[-bj[84]]]), uu[bj[40]] !== -bj[1])
                  if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[bj[40]];
                  else {
                    Dj(uu[bj[15]] += uu[bj[40]] * bj[24], uu[bj[64]] |= uu[bj[15]] << uu[bj[13]], uu[bj[13]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                    do {
                      Dj(uu[bj[31]].push(uu[bj[64]] & bj[3]), uu[bj[64]] >>= bj[2], uu[bj[13]] -= bj[2])
                    } while (uu[bj[13]] > bj[15]);
                    uu[bj[15]] = -bj[1]
                  } return uu[bj[15]] > -bj[1] && uu[bj[31]].push((uu[bj[64]] | uu[bj[15]] << uu[bj[13]]) & bj[3]), Nj(uu[bj[31]])
            }

            function Uu(...uu) {
              return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = ju(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
            }

            function Zu(...uu) {
              uu[bj[4]] = bj[0]
            }
            Uu(bj[69]) in Yj && Zu()
          }
          return Eu
        }
        Cu(126) in Yj && bu(), Xu = fj[uu] || (fj[uu] = cu())
      } else {
        function Nu(uu) {
          var Eu, ju, su, Uu, Zu, Xu, lu;
          for (Dj(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = bj[0], Zu = bj[0], Xu = -bj[1]), lu = bj[0]; lu < ju; lu++) {
            var qu = 'XNwk+xEpH)F10Y:6!;Zcv#eM2Dl"]sQJUj8Rb<%yh_`LKOW[Sum/.5P&I@^f,tqzoT~4Cr?9B=g37}|$*(a>nAGVid{'.indexOf(Eu[lu]);
            if (qu !== -bj[1])
              if (Xu < bj[0]) Xu = qu;
              else {
                Dj(Xu += qu * bj[24], Uu |= Xu << Zu, Zu += (Xu & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(su.push(Uu & bj[3]), Uu >>= bj[2], Zu -= bj[2])
                } while (Zu > bj[15]);
                Xu = -bj[1]
              }
          }
          return Xu > -bj[1] && su.push((Uu | Xu << Zu) & bj[3]), Nj(su)
        }

        function Ou(uu) {
          return typeof uj[uu] === bj[5] ? uj[uu] = Nu(Ej[uu]) : uj[uu]
        }

        function Yu() {
          module.exports = async (uu = () => {
            throw new Error(Ou(bj[18]))
          }) => {
            const Eu = new Set(process.argv.slice(bj[7]));
            if (!Eu.has(Ou(bj[62]))) {
              if (Eu.size !== bj[1]) return bj[34];
              if (!Eu.has("-v")) return bj[34]
            }
            return await (async () => {
              function Eu(...uu) {
                return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
                  for (Dj(uu[bj[4]] = bj[1], uu[bj[1]] = '1BUYqamVCdF]6eI*%uMQ.tTvZ/DzjO7n2lc$_?wh9RN3,AiW5|+;G8fJ=gsL`X{"4pk)&P}(o:#bxr[SE>HKy0<~@^!', uu[bj[13]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[13]].length, uu[bj[31]] = [], uu[bj[64]] = bj[0], uu[-bj[87]] = bj[0], uu[-bj[86]] = -bj[1]), uu[bj[2]] = bj[0]; uu[bj[2]] < uu[bj[19]]; uu[bj[2]]++)
                    if (uu[bj[40]] = uu[bj[1]].indexOf(uu[bj[13]][uu[bj[2]]]), uu[bj[40]] !== -bj[1])
                      if (uu[-bj[86]] < bj[0]) uu[-bj[86]] = uu[bj[40]];
                      else {
                        Dj(uu[-bj[86]] += uu[bj[40]] * bj[24], uu[bj[64]] |= uu[-bj[86]] << uu[-bj[87]], uu[-bj[87]] += (uu[-bj[86]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                        do {
                          Dj(uu[bj[31]].push(uu[bj[64]] & bj[3]), uu[bj[64]] >>= bj[2], uu[-bj[87]] -= bj[2])
                        } while (uu[-bj[87]] > bj[15]);
                        uu[-bj[86]] = -bj[1]
                      } return uu[-bj[86]] > -bj[1] && uu[bj[31]].push((uu[bj[64]] | uu[-bj[86]] << uu[-bj[87]]) & bj[3]), Nj(uu[bj[31]])
                }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
              }
              return void 0 === await uu() ? Eu(134) + "l)" : ""
            })(), bj[83]
          }
        }
        Ou(bj[63]) + "J" in Yj && Yu(), Xu = lu[uu]()
      }
      if (ju === Zu(bj[105]) + Zu(136)) {
        function hu(...uu) {
          for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = '"PUABpyLTeCgaWb4xD`tRnN_:%rHc=1|&VE7Fjo,3XGSYI5.q6}k[/@^!8K]fMOlhs9miQwvZ?$>Jd{<;0*~2#(+z)u', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[88]] = uu[bj[10]].length, uu[bj[8]] = [], uu[bj[25]] = bj[0], uu[bj[13]] = bj[0], uu[bj[90]] = -bj[1]), uu[bj[2]] = bj[0]; uu[bj[2]] < uu[bj[88]]; uu[bj[2]]++)
            if (uu[bj[89]] = uu[bj[11]].indexOf(uu[bj[10]][uu[bj[2]]]), uu[bj[89]] !== -bj[1])
              if (uu[bj[90]] < bj[0]) uu[bj[90]] = uu[bj[89]];
              else {
                Dj(uu[bj[90]] += uu[bj[89]] * bj[24], uu[bj[25]] |= uu[bj[90]] << uu[bj[13]], uu[bj[13]] += (uu[bj[90]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(uu[bj[8]].push(uu[bj[25]] & bj[3]), uu[bj[25]] >>= bj[2], uu[bj[13]] -= bj[2])
                } while (uu[bj[13]] > bj[15]);
                uu[bj[90]] = -bj[1]
              } return uu[bj[90]] > -bj[1] && uu[bj[8]].push((uu[bj[25]] | uu[bj[90]] << uu[bj[13]]) & bj[3]), Nj(uu[bj[8]])
        }

        function Du(...uu) {
          return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = hu(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
        }

        function gu() {
          var uu;

          function Eu() {}
          Dj(uu = function(...uu) {
            for (Dj(uu[bj[4]] = bj[7], uu[bj[94]] = bj[0], uu[bj[19]] = bj[0], uu[bj[9]] = new Eu(bj[0]), uu[bj[31]] = uu[bj[9]], uu[bj[91]] = uu[bj[0]], uu[-bj[93]] = uu[bj[1]]); uu[bj[91]] !== bj[92] || uu[-bj[93]] !== bj[92];) Dj(uu[bj[19]] = (uu[bj[91]] ? uu[bj[91]].val : bj[0]) + (uu[-bj[93]] ? uu[-bj[93]].val : bj[0]) + uu[bj[94]], uu[bj[94]] = Math.floor(uu[bj[19]] / bj[76]), uu[bj[31]].next = new Eu(uu[bj[19]] % bj[76]), uu[bj[31]] = uu[bj[31]].next, uu[bj[91]] = uu[bj[91]] ? uu[bj[91]].next : bj[92], uu[-bj[93]] = uu[-bj[93]] ? uu[-bj[93]].next : bj[92]);
            return uu[bj[94]] && (uu[bj[31]].next = new Eu(uu[bj[94]])), uu[bj[9]].next
          }, console.log(uu))
        }
        return Du(137) in Yj && gu(), {
          [Du(138) + Du(139)]: Xu
        }
      }
      return Xu
    }

    function Dj() {
      Dj = function() {}
    }
    Dj(uj = {}, Ej = ["s}1;_Am>K?;&1jBtE5pM(MA&;>,>G}{hxyd", ":Oc%2*3d", "7(&Gp*y<c8q2wKO.Ty;`lrR/QIg.S}euRDJ~;5dQX3h`0gO.2r5G#M%|+_", 'R?VD~K(?c8=sEbZOt.g6!D<3*NN")4OhV).Z:KjAX37', "4N+~PX5#A3O`Pb@W%LmwQ;m3gS", "ry1_2x_tSsR&_n=vE*C90}Quc", "8#j2#4aU4eLl4+OVhL~DBD>U,>AEs+(|%L~w3A>3Y9]V7*sf<OM_I", "d?*9nP}zQy=F`+yNABA~0`9Tfe<&/:{]o.!~?!wnuu/Vd", "mft#K7xhd/,4@icO9rh%`lB$3I6w)UPTuDm%", "P?TZ44nws4rcjV7faVs8N", ";}ROp&~<|/tBsB+Q#8U_945?4l|y?BkQHW.c6<HUHIOys*QusG<`ynr?#", 'o)Pp9l,6Xu|yZi>hyW5OT+OQj4["``>|QVk2M1,L.)LBEP)L', 'W@<Djr>"OS6&|;]QEy+hDl0v$^C~L+9Od>6Dux#Ax^y72B8Q_rB', "YGt8T*Qw#", "Z<k994nww", "HomwwM{.]u+/6+kpsOj`eK)AYe0&hc=fRDphc4Mwo)", "gx$!$`T6pl0>tig)TLj", "N<F%sDC|E7!e1b.Q{yohdJ>3fy9Y<I^.0}PckPL^^))E[", "Q)28Z6x<w)S`=}Qt", "Z<xp!As&0_98hiot]4Fw:mi9HeIM.:@pNbphU<j^r7uWyTV/28q#}1BuB", "JOA%v,G<F^p", "h8x8D@?^@^nF&atW|4%`cWA?0@9YEPzWc@y<P8I9y8=2Cn7v(G]O?", ",*FOsAgU4l2`_FXL0}];a*@UJuFjY4Lbgd", "E<[aHV{NC>.B<^/)vb;<wE6|i/iN)B", "?@3!YJ*vy>X/F}[T4(Z|H~_w:4I:Vc", "Sr`G2*ahpIVEpiLtJtc~Z,fj", "yp.!EK%rj8=Doanbeo5O>4p94e", ']4{_t@~wggd#wbPO)/"F`!iAi>Uw?gbpM<U#,A"hal1!U:cPf@O;qx[', '@y^$Y4H"_yE0ca~aj;{6IDHwY9Cpojp.ENuh{mm>r/l6[B', "r<BFJKl^YlMp~T]Q[rb2G@YQ&_H!1*Fu!*/~81qLk)ksK;Ptoy=9", "T2PO/+_n_yg`uI[A/>1;(}kTrgF3d", 't()hf&t$RNKp3}kpP_p%"D5rZ4[(f57vE[', "8NMGxl!/M)5~u:]Q9?SwMJ1us?z/(g*f%2]w", 'c_T|NMJW;_3yM^:phVAh}1&6}/KT(aRPl_.ccMR/**:28tw/>V"F', 'pxX6t*7(RIn7}*MWd8PO.!n@r$[)7+kfH.E_Z6ahY*"v"Pbh', "G#W2tP4(eNX/4B", 'aL1;$"Tr#sAE5P_', ".4k9]XgwI*g`d", "K8~p8V%6w", "mV)~(Mu$2/##Kt]p>VJ~4W,#E/_yqBNb(},OJ!=vB", ":<M6lDW6>>X5wbP/NglcTK`|_I_(}g`OYyC<_4L/B?}c7B9OU)zpiP/r=NuWd", 'mpch4El^]sm4EIfbo@d"8>xw6sr%i+*Q&OJh0$nXHSc"[', "j8N2p6TTE?", "@)~wI!T|N47*k;i)g@_,~!j5dg%#|V1uCp:2h+A^0uh!>IkAL?,wzm]^N?", "]bmOfG:^g/", 'uxI_f7sT24"hd', 'y}bh"nxw_yMtyAp|v}x;&6Mh0?w<R*qv)g_|7JSvn4PpD;I', 'vo"$9!%r[/c"<P}W_.v~8V#AZgNW#n*.x(#_.XSh/?i`>5lf$(l_', 'i@h6ilgUAu5G74p|?.3D"M^^j4qt=AZNNorc&nZQ(sZ!QY>.x}+bxm[', "K8XOAvy<`3B<R*eP$Bj", "?>WhJ6ed", "g4Z2h+ShR$=0|IIbJ#|!J!Fd", "F>W2z6OQRyI^^VjV9/z!z,Sn#%wBp++aB>$%}:KrF", "I@)%5mdQSsErM:KpU<DhZ8~Q[?ZadA%t.d", '9@t`ZvC&[4"&`x`uur@8N+L6N>>7d', "B2`;+*KLW?T^M:vOi_p%?D:6v?uEi4ebShB~<V(#k*~~l3;bGN%`?", "fo+FMrN$=y`GxB<pF2C<ix3uK@q0?A1P3xRMwDr/O/3%FAC|$}F%4}[", "?rO#$$DLi/z27a3", "{l^hQG*QI/)!jPY.A4U;OxOQ]^O`IFqhP.8psDqWc_x0:IzLp.XbX*+d", "eLc~]Xgtt^pm]:bpnG$O^$_3>73::t?urym6t", "tL98sWSwC8amXcBN", "u2r!>D7|s$awx51PKy6Dy}_dM)cUGT^fV#OcM>!r.^fC:;}ac8_,aPQ3)@qhd", "}Lfawl$hi4zhJg4A&e>G?", "I_N,xMuuOgGGubhNoo`_`MmQwsXn?+qi|y(F{m[", '&)FK]6RL(s>tEPa.7<N2`Mv@2?>57B{h7(%"n@&?u4O!,j9tCL~wxE(zR7A', "EW@<gm_QZ4h)GTC|{NL#@EUvGl|wZcSLo<IOzZw{9).l6+9u![", "C8~xulA^8^xGlt.p/8q8g@pTN_F:Dm2/*W=8(Mt$N/", "mNBFFEK6M3;I|;mTpDgZjz)6rg8&GTNamHB", "{W)hS*=Ee*.}o:=iX}=#9K*mq^a}EIotoo&8T", "|8fajJ)6}gBY/Y*.8}Iw", 'rO@#+Z4|,/oN&vvt"[', '.8[<O6u$cuBi"Pl|&HJOTKNu^)vCuISaN>;9J+.u&_6muIbh=l"FD@DW!NY', "rxM_*5>h#%98*:c|l*A%IA!DE>TlwP?", "(GUGbL[9O>/%`*`P4*faaX/Da*{A@T*vOh&#mD$d", 'cgUck60<8upO"P3)m.AhR<d$oIWy?+Tvhr7Go5[', "gg[,E!^T?IE7U5(PjD>!I!yQ;>2}a:`ui@!~v,[", "p)Jh:Pn3Bu", '1lzGu*.v0_PEvB~azym%"}<woe_B+P|fGVmMXm:6rg', "R#>6b@ShDep)+PFO:pxc81)6UgW", ':OIwB$IAg?WCqB0|"lx6k@au"ewj=c', "!H0hvvOvr$<78;&W8BQ<4`cA}@PwDtZNwrE#(rg$,*<mlVI", "`Nzp5A,^a)", "6<t8M5M3i@FiMI#V].L;26H30?K&;`#", '5GXbbL)TPu3|?1zi)<w8V**QYlrC!xON"({GXXwd', 'EpXbQ(mQ%le|IFDtX19Z7JATplg"d', "L}._5n.du4ONAU[A;b>c", '5lN"Nn[', "&pPOD@n@el=nV}LO$WZ8k6%9*Nx06gjNHLj", "Wox;N!3mq)4*m}RP>#EGSmUwk*UG+v`/58|pF4N3;8T!UI,a&l|p{!Md", "DI8O(}%z)sUw)*%PyWlOVL1n*y&dK3cOt85pf5!T)u6&J*bA(Vj", "K?PwPV,Lcs0eOI2.TxFw", "3;(Oj`?zDlQBoj", "1Nx!L&)rP^BU*^zW", "=)n8y14T4ysdCte", "~7ehP;B$3CZy@}xOd8`;5EPA9ys*W3Tf}o@<b", "Q?;<|8kLY*Z!7*bQ3xrO(r5||S*SBKjN:p(F", "Q.3DG!#rK4t)L+qpu@KaFm0vLN%%;i/)%r1;|Y$vke5;jF", "VB)k,Q$x", "5lVc[zEd", "C<PO~n)j", "l}~b>D*d", "2)C}S0T", "!:cHj8b5", "%4`gKBT", "/KW%M/MA", "s:#`pc%T", "=wS2*#]D", "?As)X", "0AM2z*Z[", ":c4X", ".W)m_BfDnh|0BF,BTg[X", "s8XS(s[Ev~5=@]uTT[Zm", "X6x!Oo(cm<rv5,Qes!uX", "U/Im)!ns?X.7OjSTsW*X", ">tm#L*/D", "20?HKL/j", "4ZS45{bj", "^h*ri", "4ZS4J|=A", "a+?&p", "K:{_1rj%152uErfe_T_/", "rsE/*XR}(X_dS^IQ77z,", '<8R9(4h4Cc]m$e9%iXd"', "4m=3`Q>Mz,@HU)y|6KU0", "fRQjGnhD", "(Q*tb", "0TcBZm{:", "s)})o.zd", "Vw>e=!:n", "O<Q&{AAN", "xL|[J93pL;q.<+yyQ@!)||aG3Tc/`u0", "E<(U_*655c&", "|e1FuC%w", "KYqr`r.U", "[TUryP6U", '9H<HV"`[', "`wg5$", "}@p^B<vP", ",AP1,7RU", "br0kR", 'e&"wd<!.', ",CIi@yI@", "&&:mA}^[7D", "=17Gy,T.", "vfS;D6d", "Gm@KN%/8?", "vfS;D6ER", "gD]@", "u0(x,+.S", "?W}>|%BS", "An.K~3IH", "?#@pV", "|KFKZI]S", "]u.PY", "1GSg1JEH", "#>Z:E", "t9>4`T#", '"uDb5}J.', "g_s4kSq.", ".(hOaG}j", "x3}G}", "vF~Gk^Ar", "&A]j{", "p$3*nS6o", "ZIK)^^Oo", "+Su+=0@*+]", "9@/</", "9@/<vz+[pbyPp"]), Dj(jj = function() {
      var uu, Eu, ju, su = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      Dj(uu = void 0, Eu = []);
      try {
        Dj(uu = Object, Eu[bj[17]]("".__proto__.constructor.name))
      } catch (Uj) {}
      uu: for (ju = bj[0]; ju < su[bj[4]]; ju++) try {
        var Uu;
        for (uu = su[ju](), Uu = bj[0]; Uu < Eu[bj[4]]; Uu++)
          if (typeof uu[Eu[Uu]] === bj[5]) continue uu;
        return uu
      } catch (Uj) {}
      return uu || this
    }() || {}, sj = jj.TextDecoder, Uj = jj.Uint8Array, Zj = jj[bj[111]], Xj = jj.String || String, lj = jj.Array || Array, qj = function(...uu) {
      return Dj(uu[bj[4]] = bj[0], uu[-bj[18]] = new lj(bj[69]), uu[bj[1]] = Xj[bj[14]] || Xj.fromCharCode, uu[bj[7]] = []),
        function(...Eu) {
          for (Dj(Eu[bj[4]] = bj[1], Eu[bj[11]] = bj[6], Eu[bj[10]] = bj[6], Eu[bj[9]] = Eu[bj[0]][bj[4]], uu[bj[7]][bj[4]] = bj[0]), Eu[bj[8]] = bj[0]; Eu[bj[8]] < Eu[bj[9]];) Dj(Eu[bj[10]] = Eu[bj[0]][Eu[bj[8]]++], Eu[bj[10]] <= bj[67] ? Eu[bj[11]] = Eu[bj[10]] : Eu[bj[10]] <= 223 ? Eu[bj[11]] = (Eu[bj[10]] & bj[68]) << bj[13] | Eu[bj[0]][Eu[bj[8]]++] & bj[12] : Eu[bj[10]] <= 239 ? Eu[bj[11]] = (Eu[bj[10]] & bj[58]) << bj[16] | (Eu[bj[0]][Eu[bj[8]]++] & bj[12]) << bj[13] | Eu[bj[0]][Eu[bj[8]]++] & bj[12] : Xj[bj[14]] ? Eu[bj[11]] = (Eu[bj[10]] & bj[15]) << bj[71] | (Eu[bj[0]][Eu[bj[8]]++] & bj[12]) << bj[16] | (Eu[bj[0]][Eu[bj[8]]++] & bj[12]) << bj[13] | Eu[bj[0]][Eu[bj[8]]++] & bj[12] : (Eu[bj[11]] = bj[12], Eu[bj[8]] += bj[19]), uu[bj[7]][bj[17]](uu[-bj[18]][Eu[bj[11]]] || (uu[-bj[18]][Eu[bj[11]]] = uu[bj[1]](Eu[bj[11]]))));
          return uu[bj[7]][bj[41]]("")
        }
    }()), cj(98) + "G" in Yj && function(...uu) {
      Dj(uu[bj[4]] = bj[0], uu[bj[10]] = function(...Eu) {
        return Dj(Eu[bj[4]] = bj[1], Eu[bj[11]] = []), (Eu[bj[0]] === bj[1] || Eu[bj[0]] >= bj[8]) && uu[bj[32]](Eu[bj[11]], [], Eu[bj[0]], bj[0]), Eu[bj[11]]
      }, uu[bj[32]] = function(...Eu) {
        for (Eu[bj[4]] = bj[8], Eu[bj[8]] = Eu[bj[19]]; Eu[bj[8]] < Eu[bj[7]]; Eu[bj[8]]++) {
          if (Eu[bj[1]].length !== Eu[bj[8]]) return;
          for (Eu[bj[10]] = bj[0]; Eu[bj[10]] < Eu[bj[7]]; Eu[bj[10]]++) uu[bj[7]](Eu[bj[1]], [Eu[bj[8]], Eu[bj[10]]]) && (Dj(Eu[bj[1]].push([Eu[bj[8]], Eu[bj[10]]]), uu[bj[32]](Eu[bj[0]], Eu[bj[1]], Eu[bj[7]], Eu[bj[8]] + bj[1])), Eu[bj[1]].length === Eu[bj[7]] && Eu[bj[0]].push(uu[bj[25]](Eu[bj[1]])), Eu[bj[1]].pop())
        }
      }, uu[bj[25]] = function(...uu) {
        for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = [], uu[bj[7]] = uu[bj[0]].length), uu[bj[19]] = bj[0]; uu[bj[19]] < uu[bj[7]]; uu[bj[19]]++)
          for (uu[bj[11]][uu[bj[19]]] = "", uu[bj[8]] = bj[0]; uu[bj[8]] < uu[bj[7]]; uu[bj[8]]++) uu[bj[11]][uu[bj[19]]] += uu[bj[0]][uu[bj[19]]][bj[1]] === uu[bj[8]] ? "Q" : bj[42];
        return uu[bj[11]]
      }, uu[bj[7]] = function(...uu) {
        for (Dj(uu[bj[4]] = bj[7], uu[bj[33]] = uu[bj[0]].length), uu[bj[19]] = bj[0]; uu[bj[19]] < uu[bj[33]]; uu[bj[19]]++) {
          if (uu[bj[0]][uu[bj[19]]][bj[0]] === uu[bj[1]][bj[0]] || uu[bj[0]][uu[bj[19]]][bj[1]] === uu[bj[1]][bj[1]]) return bj[34];
          if (Math.abs((uu[bj[0]][uu[bj[19]]][bj[0]] - uu[bj[1]][bj[0]]) / (uu[bj[0]][uu[bj[19]]][bj[1]] - uu[bj[1]][bj[1]])) === bj[1]) return bj[34]
        }
        return bj[83]
      }, console.log(uu[bj[10]]))
    }(), Dj(fj = Object[cj(99)](bj[92]), Cj = void 0), Dj(zE = (...uu) => {
      function Eu(...uu) {
        return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
          for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = '#.:1>%]wNb$iv+*M6g3fXLezDBEk;[p75A9S<R2Q_FC)|ora8!yuW=(x,UlhIq@Kc/~OsT^}{0&tG4dJZPnj`?"mHVY', uu[bj[7]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[7]].length, uu[bj[97]] = [], uu[bj[64]] = bj[0], uu[bj[26]] = bj[0], uu[bj[95]] = -bj[1]), uu[bj[2]] = bj[0]; uu[bj[2]] < uu[bj[19]]; uu[bj[2]]++)
            if (uu[-bj[96]] = uu[bj[11]].indexOf(uu[bj[7]][uu[bj[2]]]), uu[-bj[96]] !== -bj[1])
              if (uu[bj[95]] < bj[0]) uu[bj[95]] = uu[-bj[96]];
              else {
                Dj(uu[bj[95]] += uu[-bj[96]] * bj[24], uu[bj[64]] |= uu[bj[95]] << uu[bj[26]], uu[bj[26]] += (uu[bj[95]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(uu[bj[97]].push(uu[bj[64]] & bj[3]), uu[bj[64]] >>= bj[2], uu[bj[26]] -= bj[2])
                } while (uu[bj[26]] > bj[15]);
                uu[bj[95]] = -bj[1]
              } return uu[bj[95]] > -bj[1] && uu[bj[97]].push((uu[bj[64]] | uu[bj[95]] << uu[bj[26]]) & bj[3]), Nj(uu[bj[97]])
        }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
      }
      uu[bj[4]] = bj[1], Eu(140) in Yj && function(...uu) {
        function Eu(uu) {
          return uu[bj[1]] * bj[99] + (uu[bj[0]] < bj[0] ? bj[98] | uu[bj[0]] : uu[bj[0]])
        }

        function ju(...uu) {
          switch (uu[bj[4]] = bj[1], ((uu[bj[0]] & bj[98]) !== bj[0]) * bj[1] + (uu[bj[0]] < bj[0]) * bj[7]) {
            case bj[0]:
              return [uu[bj[0]] % bj[98], Math.trunc(uu[bj[0]] / bj[99])];
            case bj[1]:
              return [uu[bj[0]] % bj[98] - bj[98], Math.trunc(uu[bj[0]] / bj[99]) + bj[1]];
            case bj[7]:
              return [((uu[bj[0]] + bj[98]) % bj[98] + bj[98]) % bj[98], Math.round(uu[bj[0]] / bj[99])];
            case bj[19]:
              return [uu[bj[0]] % bj[98], Math.trunc(uu[bj[0]] / bj[99])]
          }
        }
        uu[bj[4]] = bj[0], Dj(uu[bj[25]] = Eu([bj[7], bj[8]]), uu[bj[100]] = Eu([bj[1], bj[7]]), uu[bj[7]] = uu[bj[25]] + uu[bj[100]], uu[bj[101]] = uu[bj[7]] - uu[bj[100]], uu[bj[29]] = uu[bj[101]] * bj[7], uu[bj[64]] = uu[bj[29]] / bj[7], console.log(ju(uu[bj[7]])), console.log(ju(uu[bj[101]])), console.log(ju(uu[bj[29]])), console.log(ju(uu[bj[64]])))
      }();
      const ju = function(uu) {
          var Eu;
          return {
            meta: {
              ...uu.meta,
              formatVersion: JE.h,
              variation: null !== (Eu = uu.meta.variation) && void 0 !== Eu ? Eu : null
            },
            initialChunks: uu.initialChunks.map((uu => ({
              chunkPos: uu.chunkPos,
              rle: aE(uu.rle),
              sharedBlockData: mE("sharedBlockData", uu.sharedBlockData)
            }))),
            ticks: uu.ticks.map(nE),
            editState: uu.editState
          }
        }(uu[bj[0]]),
        su = sE(JE[bj[20]]);
      uu[bj[1]] = bj[6];
      try {
        function lu(...uu) {
          for (Dj(uu[bj[4]] = bj[1], uu[bj[1]] = 'N@fsoAiRXe7gJB)/wCYvD3Tnu;$lmh[:Sb^*_Q1>+V4&P|k62`r!9?]EFI8tG%dz(L.y~MK{}q5j"=HaOpUW<#Z,xc0', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[9]] = uu[bj[10]].length, uu[bj[102]] = [], uu[bj[64]] = bj[0], uu[bj[13]] = bj[0], uu[bj[15]] = -bj[1]), uu[bj[20]] = bj[0]; uu[bj[20]] < uu[bj[9]]; uu[bj[20]]++)
            if (uu[bj[22]] = uu[bj[1]].indexOf(uu[bj[10]][uu[bj[20]]]), uu[bj[22]] !== -bj[1])
              if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[bj[22]];
              else {
                Dj(uu[bj[15]] += uu[bj[22]] * bj[24], uu[bj[64]] |= uu[bj[15]] << uu[bj[13]], uu[bj[13]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(uu[bj[102]].push(uu[bj[64]] & bj[3]), uu[bj[64]] >>= bj[2], uu[bj[13]] -= bj[2])
                } while (uu[bj[13]] > bj[15]);
                uu[bj[15]] = -bj[1]
              } return uu[bj[15]] > -bj[1] && uu[bj[102]].push((uu[bj[64]] | uu[bj[15]] << uu[bj[13]]) & bj[3]), Nj(uu[bj[102]])
        }

        function qu(...uu) {
          return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = lu(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
        }

        function fu(...uu) {
          Dj(uu[bj[4]] = bj[0], uu[bj[11]] = function(uu) {
            var Eu, ju, su, Uu, Zu = uu.length;
            for (Dj(Eu = [], ju = bj[0], su = bj[0], uu.sort(((uu, Eu) => uu - Eu))), Uu = bj[0]; Uu < Zu; Uu++)
              if (!(Uu > bj[0] && uu[Uu] === uu[Uu - bj[1]]))
                for (Dj(ju = Uu + bj[1], su = Zu - bj[1]); ju < su;)
                  if (uu[Uu] + uu[ju] + uu[su] < bj[0]) ju++;
                  else if (uu[Uu] + uu[ju] + uu[su] > bj[0]) su--;
            else {
              for (Eu.push([uu[Uu], uu[ju], uu[su]]); ju < su && uu[ju] === uu[ju + bj[1]];) ju++;
              for (; ju < su && uu[su] === uu[su - bj[1]];) su--;
              Dj(ju++, su--)
            }
            return Eu
          }, console.log(uu[bj[11]]))
        }
        qu(141) + "k" in Yj && fu(), uu[bj[1]] = su[qu(142)](ju)
      } catch (cj) {
        function bu(...uu) {
          for (Dj(uu[bj[4]] = bj[1], uu[bj[1]] = 'dRp*lZ?xt@9WM}Y#ukayN(iq82XUBPK[|sLO.Ig3]7HDVzA&<ncfSEmGF41r>:`h5Q"{vCeT,0/J%;+j6_^ow)$!=~b', uu[-bj[103]] = "" + (uu[bj[0]] || ""), uu[bj[107]] = uu[-bj[103]].length, uu[-bj[104]] = [], uu[bj[105]] = bj[0], uu[bj[26]] = bj[0], uu[bj[28]] = -bj[1]), uu[bj[106]] = bj[0]; uu[bj[106]] < uu[bj[107]]; uu[bj[106]]++)
            if (uu[bj[22]] = uu[bj[1]].indexOf(uu[-bj[103]][uu[bj[106]]]), uu[bj[22]] !== -bj[1])
              if (uu[bj[28]] < bj[0]) uu[bj[28]] = uu[bj[22]];
              else {
                Dj(uu[bj[28]] += uu[bj[22]] * bj[24], uu[bj[105]] |= uu[bj[28]] << uu[bj[26]], uu[bj[26]] += (uu[bj[28]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(uu[-bj[104]].push(uu[bj[105]] & bj[3]), uu[bj[105]] >>= bj[2], uu[bj[26]] -= bj[2])
                } while (uu[bj[26]] > bj[15]);
                uu[bj[28]] = -bj[1]
              } return uu[bj[28]] > -bj[1] && uu[-bj[104]].push((uu[bj[105]] | uu[bj[28]] << uu[bj[26]]) & bj[3]), Nj(uu[-bj[104]])
        }

        function cu(...uu) {
          return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = bu(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
        }

        function Nu(...uu) {
          Dj(uu[bj[4]] = bj[0], uu[bj[108]] = function(...Eu) {
            return Dj(Eu[bj[4]] = bj[7], Eu[bj[7]] = [], Eu[bj[10]] = Eu[bj[0]].length, Eu[bj[0]].sort(((uu, Eu) => uu - Eu)), uu[bj[9]](Eu[bj[7]], [], bj[0], Eu[bj[10]], Eu[bj[0]], Eu[bj[1]])), Eu[bj[7]]
          }, uu[bj[9]] = function(...Eu) {
            if (Dj(Eu[bj[4]] = bj[13], Eu[bj[11]] = bj[92]), !(Eu[bj[64]] < bj[0])) {
              if (Eu[bj[64]] === bj[0]) return Eu[bj[0]].push(Eu[bj[1]]);
              for (Eu[bj[10]] = Eu[bj[7]]; Eu[bj[10]] < Eu[bj[19]] && !(Eu[bj[8]][Eu[bj[10]]] > Eu[bj[64]]); Eu[bj[10]]++) Eu[bj[10]] > Eu[bj[7]] && Eu[bj[8]][Eu[bj[10]]] === Eu[bj[8]][Eu[bj[10]] - bj[1]] || Dj(Eu[bj[11]] = Array.from(Eu[bj[1]]), Eu[bj[11]].push(Eu[bj[8]][Eu[bj[10]]]), uu[bj[9]](Eu[bj[0]], Eu[bj[11]], Eu[bj[10]] + bj[1], Eu[bj[19]], Eu[bj[8]], Eu[bj[64]] - Eu[bj[8]][Eu[bj[10]]]))
            }
          }, console.log(uu[bj[108]]))
        }
        throw Eu(bj[73]) in Yj && Nu(), Dj(console[cu(bj[47])](ju), su[cu(bj[72])](ju, {
          [cu(146) + cu(147)](...uu) {
            function Eu(...uu) {
              return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
                for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = '"SHGmclXTPQAsh#=NY[zEV_.CL>oK,gDMauJIeb1v*{@ki7wWn3:x2R5O/dB&]?|Uj64!qtyp`%;)}~FrZ8+<^($0f9', uu[bj[109]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[109]].length, uu[-bj[91]] = [], uu[bj[25]] = bj[0], uu[bj[13]] = bj[0], uu[bj[15]] = -bj[1]), uu[bj[68]] = bj[0]; uu[bj[68]] < uu[bj[19]]; uu[bj[68]]++)
                  if (uu[-bj[110]] = uu[bj[11]].indexOf(uu[bj[109]][uu[bj[68]]]), uu[-bj[110]] !== -bj[1])
                    if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[-bj[110]];
                    else {
                      Dj(uu[bj[15]] += uu[-bj[110]] * bj[24], uu[bj[25]] |= uu[bj[15]] << uu[bj[13]], uu[bj[13]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                      do {
                        Dj(uu[-bj[91]].push(uu[bj[25]] & bj[3]), uu[bj[25]] >>= bj[2], uu[bj[13]] -= bj[2])
                      } while (uu[bj[13]] > bj[15]);
                      uu[bj[15]] = -bj[1]
                    } return uu[bj[15]] > -bj[1] && uu[-bj[91]].push((uu[bj[25]] | uu[bj[15]] << uu[bj[13]]) & bj[3]), Nj(uu[-bj[91]])
              }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
            }
            return Eu(148) + "w" in Yj && function(...uu) {
              Dj(uu[bj[4]] = bj[0], uu[bj[11]] = function(...Eu) {
                return Dj(Eu[bj[4]] = bj[7], Eu[bj[11]] = [], Eu[bj[19]] = Eu[bj[0]].length, Eu[bj[0]].sort(((uu, Eu) => uu - Eu)), uu[bj[1]](Eu[bj[11]], [], bj[0], Eu[bj[19]], Eu[bj[0]], Eu[bj[1]])), Eu[bj[11]]
              }, uu[bj[1]] = function(...Eu) {
                if (Dj(Eu[bj[4]] = bj[13], Eu[bj[13]] = bj[92]), !(Eu[bj[64]] < bj[0])) {
                  if (Eu[bj[64]] === bj[0]) return Eu[bj[0]].push(Eu[bj[1]]);
                  for (Eu[bj[15]] = Eu[bj[7]]; Eu[bj[15]] < Eu[bj[19]] && !(Eu[bj[8]][Eu[bj[15]]] > Eu[bj[64]]); Eu[bj[15]]++) Eu[bj[15]] > Eu[bj[7]] && Eu[bj[8]][Eu[bj[15]]] === Eu[bj[8]][Eu[bj[15]] - bj[1]] || Dj(Eu[bj[13]] = Array.from(Eu[bj[1]]), Eu[bj[13]].push(Eu[bj[8]][Eu[bj[15]]]), uu[bj[1]](Eu[bj[0]], Eu[bj[13]], Eu[bj[15]] + bj[1], Eu[bj[19]], Eu[bj[8]], Eu[bj[64]] - Eu[bj[8]][Eu[bj[15]]]))
                }
              }, console.log(uu[bj[11]]))
            }(), Cj = [uu, {}], new hj(Eu(149), Eu(150) + Eu(151), Eu(152) + Eu(153))[Eu(154) + Eu(bj[94])]
          }
        })), cj
      }
      const Uu = XE(JE[bj[20]], uu[bj[1]]),
        Xu = Zu[bj[111]][Eu(156)](bj[8]);
      return Xu[Eu(bj[91]) + Eu(bj[101]) + "E"](JE[bj[20]]), Zu[bj[111]].concat([Xu, Uu])
    }, RE = uu => {
      function Eu(...uu) {
        return uu[bj[4]] = bj[1], typeof uj[uu[bj[0]]] === bj[5] ? uj[uu[bj[0]]] = function(...uu) {
          for (Dj(uu[bj[4]] = bj[1], uu[bj[11]] = 'BorNbn1c*9jY@:u$M|C5A]H8J>{}Tp2+G?#z!vE/=qDZ.L(OK)l3h^m6_IaiS,7ePgk~RxdFQ%U<y`tw04&W"[VfsX;', uu[bj[10]] = "" + (uu[bj[0]] || ""), uu[bj[19]] = uu[bj[10]].length, uu[bj[8]] = [], uu[bj[25]] = bj[0], uu[bj[13]] = bj[0], uu[bj[15]] = -bj[1]), uu[bj[20]] = bj[0]; uu[bj[20]] < uu[bj[19]]; uu[bj[20]]++)
            if (uu[bj[22]] = uu[bj[11]].indexOf(uu[bj[10]][uu[bj[20]]]), uu[bj[22]] !== -bj[1])
              if (uu[bj[15]] < bj[0]) uu[bj[15]] = uu[bj[22]];
              else {
                Dj(uu[bj[15]] += uu[bj[22]] * bj[24], uu[bj[25]] |= uu[bj[15]] << uu[bj[13]], uu[bj[13]] += (uu[bj[15]] & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(uu[bj[8]].push(uu[bj[25]] & bj[3]), uu[bj[25]] >>= bj[2], uu[bj[13]] -= bj[2])
                } while (uu[bj[13]] > bj[15]);
                uu[bj[15]] = -bj[1]
              } return uu[bj[15]] > -bj[1] && uu[bj[8]].push((uu[bj[25]] | uu[bj[15]] << uu[bj[13]]) & bj[3]), Nj(uu[bj[8]])
        }(Ej[uu[bj[0]]]) : uj[uu[bj[0]]]
      }
      cj(159) + "u" in Yj && function(...uu) {
        uu[bj[4]] = bj[0]
      }();
      const ju = Zu[bj[111]][Eu(160)](uu),
        su = ju[Eu(161) + Eu(162)] >= bj[8] ? ju[Eu(163) + Eu(164)](bj[0]) : bj[92];
      if (su !== bj[92] && (bj[0], dE[bj[22]])(su)) {
        function Xu(uu) {
          var Eu, ju, su, Uu, Zu, Xu, lu;
          for (Dj(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = bj[0], Zu = bj[0], Xu = -bj[1]), lu = bj[0]; lu < ju; lu++) {
            var qu = 'cpHtFWq=B>{ILho(]4R)YC0#l*Z/:G+d<eDS[EKAr&Q$T}zOJX.@a8|Msn^fNi,buvV~!9P;?kU3mj65yw%17"x2_`g'.indexOf(Eu[lu]);
            if (qu !== -bj[1])
              if (Xu < bj[0]) Xu = qu;
              else {
                Dj(Xu += qu * bj[24], Uu |= Xu << Zu, Zu += (Xu & bj[27]) > bj[28] ? bj[29] : bj[30]);
                do {
                  Dj(su.push(Uu & bj[3]), Uu >>= bj[2], Zu -= bj[2])
                } while (Zu > bj[15]);
                Xu = -bj[1]
              }
          }
          return Xu > -bj[1] && su.push((Uu | Xu << Zu) & bj[3]), Nj(su)
        }

        function lu(uu) {
          return typeof uj[uu] === bj[5] ? uj[uu] = Xu(Ej[uu]) : uj[uu]
        }
        const qu = ju[Eu(165)](bj[8]),
          fu = ZE(su) ? Zu[bj[111]][lu(166)](lE(su, qu)) : qu;
        return function(uu) {
          var Eu, ju, su, Zu, Xu;
          const lu = null === (Eu = uu.meta) || void 0 === Eu ? void 0 : Eu.formatVersion;
          if (!(0, dE.i)(lu)) throw new Error(`Unsupported recording format version: ${lu}`);
          if (!Array.isArray(uu.initialChunks) || !Array.isArray(uu.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const Uu of uu.ticks)
            if (!Array.isArray(Uu.structuralEvents) || !Array.isArray(Uu.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const qu = {
            ...uu.meta
          };
          return qu.formatVersion = JE.h, (0, Uu.H)(qu.variation) && delete qu.variation, {
            meta: qu,
            initialChunks: uu.initialChunks.map((uu => {
              var Eu;
              return {
                chunkPos: uu.chunkPos,
                rle: PE(uu.rle),
                sharedBlockData: null !== (Eu = vE("sharedBlockData", uu.sharedBlockData)) && void 0 !== Eu ? Eu : []
              }
            })),
            ticks: uu.ticks.map(yE),
            editState: {
              cameraKeyframes: null !== (ju = null === (su = uu.editState) || void 0 === su ? void 0 : su.cameraKeyframes) && void 0 !== ju ? ju : [],
              playbackMark: null !== (Zu = null === (Xu = uu.editState) || void 0 === Xu ? void 0 : Xu.playbackMark) && void 0 !== Zu ? Zu : null
            }
          }
        }(sE(su)[lu(167)](fu))
      }
      throw new JE.j(su)
    })
  },
  37370: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => Cu,
      B: () => lu,
      d: () => Xu,
      h: () => Uu,
      j: () => Zu,
      m: () => bu,
      n: () => cu,
      r: () => fu,
      v: () => Nu,
      w: () => qu
    });
    var su = ju(37375);
    const Uu = 9;
    class Zu extends Error {
      constructor(uu) {
        super(`Unsupported recording format: header ${null!==uu&&void 0!==uu?uu:"missing"}, reading v${su.c.join(", v")}`), this.older = void 0, this.older = (0, su.f)(uu)
      }
    }
    const Xu = 100,
      lu = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      qu = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      fu = ["itemName", "amount", "position", "size", "attributes"],
      Cu = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      bu = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "EQ", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      cu = ["selectedSlotIndex", "slots"],
      Nu = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37367: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      e: () => Ou,
      g: () => qu,
      i: () => Xu,
      l: () => lu,
      n: () => fu
    });
    var su = ju(349),
      Uu = ju(24);

    function Zu(uu) {
      return null === uu || void 0 === uu ? null : "string" === typeof uu ? uu : null
    }

    function Xu(uu, Eu) {
      return JSON.stringify(uu) === JSON.stringify(Eu)
    }

    function lu(uu) {
      const Eu = [];
      for (const ju of Object.keys(uu)) {
        const su = uu[ju];
        for (const uu of Object.keys(su)) Eu.push({
          Qu: ju,
          name: uu,
          ...su[uu]
        })
      }
      return Eu
    }

    function qu(uu) {
      const Eu = {};
      for (const Zu of uu) {
        var ju, su, Uu;
        Eu[Zu.Qu] || (Eu[Zu.Qu] = {}), Eu[Zu.Qu][Zu.name] = {
          icon: Zu.icon,
          level: Zu.level,
          displayName: null !== (ju = Zu.displayName) && void 0 !== ju ? ju : null,
          endTick: null !== (su = Zu.endTick) && void 0 !== su ? su : null,
          showInNametag: null === (Uu = Zu.showInNametag) || void 0 === Uu || Uu
        }
      }
      return Eu
    }

    function fu(uu, Eu) {
      const ju = {};
      for (const Uu of Object.keys(uu)) {
        const Zu = {};
        for (const ju of Object.keys(uu[Uu])) {
          const su = uu[Uu][ju];
          null !== su.endTick && su.endTick < Eu || (Zu[ju] = {
            ...su,
            endTick: null === su.endTick ? null : su.endTick - Eu
          })
        }(0, su.Dc)(Zu) || (ju[Uu] = Zu)
      }
      return ju
    }

    function Cu(uu, Eu, ju) {
      if (null !== uu) return Math.max(0, 1e3 * (uu - Eu) / ju)
    }
    class bu {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(uu, Eu) {
        this.clear();
        const ju = Date.now();
        for (const lu of uu.iterateEntityIds()) {
          const qu = uu.getEffects(lu);
          if ((0, su.Dc)(qu)) continue;
          const fu = Eu(lu);
          for (const uu of Object.keys(qu)) {
            var Uu, Xu;
            const Eu = qu[uu];
            this.upsert(fu, uu, {
              icon: Eu.icon,
              level: Eu.level,
              displayName: Zu(Eu.displayName),
              showInNametag: null === (Uu = Eu.showInNametag) || void 0 === Uu || Uu,
              endTime: void 0 !== Eu.duration && null !== Eu.duration ? (null !== (Xu = Eu.appliedAt) && void 0 !== Xu ? Xu : ju) + Eu.duration : null
            })
          }
        }
      }
      upsert(uu, Eu, ju) {
        this.tracked[uu] || (this.tracked[uu] = {}), this.tracked[uu][Eu] = ju
      }
      remove(uu, Eu) {
        const ju = this.tracked[uu];
        ju && (delete ju[Eu], (0, su.Dc)(ju) && delete this.tracked[uu])
      }
      handleUpdate(uu) {
        var Eu;
        0 !== uu.duration ? this.upsert(uu.Qu, uu.name, {
          icon: uu.icon,
          level: uu.level,
          displayName: Zu(uu.displayName),
          showInNametag: null === (Eu = uu.showInNametag) || void 0 === Eu || Eu,
          endTime: void 0 !== uu.duration && null !== uu.duration ? Date.now() + uu.duration : null
        }) : this.remove(uu.Qu, uu.name)
      }
      handleRemove(uu, Eu) {
        this.remove(uu, Eu)
      }
      sample(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Uu = {},
          Zu = 1e3 / Eu;
        for (const Xu of Object.keys(this.tracked)) {
          const Eu = this.tracked[Xu],
            lu = {};
          for (const su of Object.keys(Eu)) {
            const Uu = Eu[su];
            let qu = null;
            if (null !== Uu.endTime) {
              const Eu = Math.max(0, Uu.endTime - ju);
              if (0 === Eu) {
                this.remove(Xu, su);
                continue
              }
              qu = uu + Math.ceil(Eu / Zu)
            }
            lu[su] = {
              icon: Uu.icon,
              level: Uu.level,
              displayName: Uu.displayName,
              endTick: qu,
              showInNametag: Uu.showInNametag
            }
          }(0, su.Dc)(lu) || (Uu[Xu] = lu)
        }
        return Uu
      }
    }

    function cu(uu, Eu, ju, su) {
      uu.hasEntity(Eu) ? uu.updateEffect(Eu, ju, su) : function(uu, Eu, ju) {
        Uu.h.TY("EffectUpdate", {
          Qu: uu,
          name: Eu,
          ...ju
        }, !0)
      }(Eu, ju, su)
    }

    function Nu(uu, Eu, ju) {
      uu.hasEntity(Eu) ? uu.removeEffect(Eu, ju) : function(uu, Eu) {
        Uu.h.TY("RemoveEffect", {
          Qu: uu,
          name: Eu
        }, !0)
      }(Eu, ju)
    }

    function Ou(uu, Eu, ju, su, Uu, Zu, Xu) {
      for (const Cu of Object.keys(ju))
        for (const Zu of Object.keys(ju[Cu])) {
          var lu;
          null !== (lu = Eu[Cu]) && void 0 !== lu && lu[Zu] || (Nu(uu, Cu, Zu), su && Cu === su && String(Uu) !== String(Cu) && Nu(uu, Uu, Zu))
        }
      for (const Yu of Object.keys(Eu))
        for (const lu of Object.keys(Eu[Yu])) {
          var qu, fu;
          const hu = Eu[Yu][lu],
            Du = Cu(hu.endTick, Zu, Xu);
          if (0 === Du) {
            Nu(uu, Yu, lu), su && Yu === su && String(Uu) !== String(Yu) && Nu(uu, Uu, lu);
            continue
          }
          const gu = null === (qu = ju[Yu]) || void 0 === qu ? void 0 : qu[lu],
            Mu = gu && (Ou = hu, (bu = gu).icon === Ou.icon && bu.level === Ou.level && bu.displayName === Ou.displayName && bu.endTick === Ou.endTick && bu.showInNametag === Ou.showInNametag),
            eu = {
              icon: hu.icon,
              level: hu.level,
              displayName: null !== (fu = hu.displayName) && void 0 !== fu ? fu : void 0,
              duration: Du,
              showInNametag: hu.showInNametag
            };
          Mu || cu(uu, Yu, lu, eu), su && Yu === su && cu(uu, Uu, lu, {
            ...eu,
            showInNametag: !1
          })
        }
      var bu, Ou
    }
  },
  37353: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      h: () => fu,
      i: () => cu,
      m: () => lu,
      n: () => bu
    });
    var su = ju(37351),
      Uu = ju(37360),
      Zu = ju(308);
    const Xu = {
      description: "Bloxd Replay",
      accept: {
        [su.e]: su.d
      }
    };

    function lu() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Zu.b)()
    }

    function qu(uu) {
      return uu instanceof DOMException && "AbortError" === uu.name
    }
    async function fu() {
      try {
        const [uu] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Xu]
        }), Eu = await uu.getFile();
        return {
          handle: uu,
          bytes: new Uint8Array(await Eu.arrayBuffer())
        }
      } catch (uu) {
        if (qu(uu)) return null;
        throw uu
      }
    }
    async function Cu(uu) {
      if (uu && await async function(uu) {
          const Eu = {
            mode: "readwrite"
          };
          return "granted" === await uu.queryPermission(Eu) || "granted" === await uu.requestPermission(Eu)
        }(uu)) return uu;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, su.k)(),
          types: [Xu]
        })
      } catch (Eu) {
        if (qu(Eu)) return null;
        throw Eu
      }
    }
    async function bu(uu, Eu) {
      const ju = await uu.createWritable();
      await ju.write(new Blob([Eu], {
        type: su.e
      })), await ju.close()
    }

    function cu(uu) {
      return (0, su.g)((0, Uu.e)(uu))
    }
  },
  36840: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    var su = ju(22),
      Uu = ju(91),
      Zu = ju(31),
      Xu = ju(3774),
      lu = ju(3651),
      qu = ju(6854);
    const fu = "shaderPackListingCheckedAt",
      Cu = 36e5;

    function bu() {
      const {
        canUseShaderPacks: uu
      } = Uu.featureFlags.settings;
      var Eu, bu;
      (0, lu.i)(uu) && !(0, lu.e)(uu) && (Eu = Zu.k.getItem(fu), bu = Date.now(), "number" !== typeof Eu || bu < Eu || bu - Eu >= Cu) && (0, Xu.e)((() => {
        (async function() {
          if ("landingPage" !== su.d.get("gameState")) return;
          const uu = await (0, qu.e)();
          if (void 0 === (null === uu || void 0 === uu ? void 0 : uu.listing)) return;
          Zu.k.setItem(fu, Date.now());
          const {
            followListingUpdates: Eu
          } = await Promise.all([ju.e(78), ju.e(136), ju.e(132)]).then((() => ju(41529)));
          await Eu(uu, uu.listing) || Zu.k.removeItem(fu)
        })().catch((uu => {
          console.error("Failed to check the shader pack listing for an update", uu)
        }))
      }))
    }
  },
  9152: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      e: () => Uu,
      h: () => Zu,
      j: () => Xu
    });
    let su = null;

    function Uu(uu, Eu) {
      return `${Eu}\n${null!==uu&&void 0!==uu?uu:""}`
    }

    function Zu(uu) {
      su = uu
    }

    function Xu(uu) {
      const Eu = su;
      return su = null, null !== Eu && Eu.key === uu ? Eu.settled : null
    }

    function lu(uu, Eu, ju, su) {
      let Uu = !1;
      null !== Eu && setTimeout((() => {
        su() && !Uu && Eu()
      }), 0), uu.then((uu => {
        Uu = !0, ju(uu)
      }))
    }
  },
  36873: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => qu
    });
    var su = ju(337),
      Uu = ju(22),
      Zu = ju(36876),
      Xu = ju(1687),
      lu = ju(2040);

    function qu(uu, Eu) {
      var ju, qu, fu;
      if (!Uu.d.get("isKeydownEnabled") || uu.repeat) return;
      const Cu = uu.code;
      "Escape" === uu.key ? (0, Xu.j)(uu) : null !== (ju = lu.z.OpenSettings) && void 0 !== ju && ju.includes(Cu) ? (0, Xu.x)(uu, su.o.SETTINGS) : null !== (qu = lu.z.OpenCharacterCustomization) && void 0 !== qu && qu.includes(Cu) ? (0, Zu.c)() || (0, Xu.x)(uu, su.o.CUSTOMISATION, Eu()) : null !== (fu = lu.z.ShowDebugOverlay) && void 0 !== fu && fu.includes(Cu) && Uu.d.set({
        showDebugOverlay: !Uu.d.get("showDebugOverlay")
      })
    }
  },
  36845: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Vu,
      g: () => Wu
    });
    var su = ju(649),
      Uu = ju(1285),
      Zu = ju(166);
    const Xu = "cf-";

    function lu(uu) {
      return `${Xu}${uu}`
    }

    function qu(uu) {
      return uu.startsWith(lu("game-server-"))
    }

    function fu(uu) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(uu)
    }
    var Cu = ju(1301),
      bu = ju(1278),
      cu = ju(24),
      Nu = ju(1259),
      Ou = ju(1817),
      Yu = ju(1856),
      hu = ju(3135),
      Du = ju(1362),
      gu = ju(1369),
      Mu = ju(1559),
      eu = ju(1255),
      Gu = ju(36850),
      pu = ju(31),
      wu = ju(131),
      Ju = ju(1866),
      du = ju(36870);
    const au = Date.UTC(2026, 11, 8),
      Pu = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      ou = "gameServerRoute";
    async function ku(uu) {
      if (!uu.ok) {
        const Eu = await uu.text().catch((() => ""));
        return 403 === uu.status && "ipv6_unsupported" === Eu ? "ipv6Refused" : "other"
      }
      const Eu = await uu.json().catch((() => null));
      return "object" === typeof Eu && null !== Eu && Number.isFinite(Eu.version) ? "ours" : "other"
    }
    const mu = new class {
      constructor(uu) {
        this.deps = uu, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(uu) {
        return this.deps.enabled && fu(uu) && "cloudflare" === this.heldRoute() ? lu(uu) : uu
      }
      async afterJoinFailed(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const su = new URL(uu).hostname;
        return qu(su) ? await this.afterAliasJoinFailed(su, Eu, ju) : void 0 !== Eu.gameServerUnreachable && this.checksJoinsTo(su) && this.settle(await this.check(su)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(uu) {
        const Eu = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(Eu, uu).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(uu) {
        this.deps.enabled && this.deps.HN("game_server_route", "cf_retry_joined", uu)
      }
      afterAutoRetryFailed(uu) {
        if (!this.deps.enabled) return;
        if (null === uu) return void this.deps.HN("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: Eu
        } = uu;
        void 0 === Eu ? this.deps.HN("game_server_route", "cf_retry_failed:other", 0) : "refused" === Eu.at ? this.deps.HN("game_server_route", "cf_retry_failed:refused", Eu.code) : this.deps.HN("game_server_route", `cf_retry_failed:${Eu.at}`, Eu.code)
      }
      afterMatchmade(uu) {
        var Eu;
        if (!this.deps.enabled) return;
        const ju = null === (Eu = this.stored()) || void 0 === Eu ? void 0 : Eu.recoveryArm;
        if (void 0 !== ju && null !== this.heldRoute() && this.reportArm(ju), null === this.aliasFailedAt) return;
        const su = qu(new URL(uu).hostname);
        this.deps.HN("game_server_route", su ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(uu, Eu, ju) {
        const su = new URL(uu).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(su) || !await this.deps.seatLegs.whenSlow(Eu)) return null;
        const Uu = this.deps.seatLegs.answered,
          Zu = await this.check(su);
        return ju() ? this.settle(Zu) ? "blocked" : "reported" : "blocked" !== Zu.outcome || Eu.aborted || this.deps.seatLegs.answered !== Uu ? null : (this.settle(Zu), "blocked")
      }
      afterAliasJoinLeft(uu) {
        this.deps.enabled && (this.reportArm(), this.deps.HN("game_server_route", "cf_join_left", uu))
      }
      afterJoined(uu) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const Eu = new URL(uu).hostname,
          ju = qu(Eu);
        if (ju) this.reportArm(), this.deps.HN("game_server_route", "cf_join", 0);
        else if (!fu(Eu) || this.deps.random() >= .01) return;
        const su = ju ? Eu.slice(Xu.length) : Eu;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(su, "direct", "direct_failed"), await this.reportRtt(lu(su), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(uu, Eu, ju) {
        let {
          gameServerUnreachable: su,
          joinFailure: Uu
        } = Eu;
        if (void 0 === Uu) return null;
        if ("refused" === Uu.at) return this.reportArm(), this.deps.HN("game_server_route", "cf_join_refused", Uu.code), null;
        const Zu = this.recoveryArm();
        if (this.reportArm(Zu), this.deps.HN("game_server_route", `cf_join_failed:${Uu.at}`, Uu.code), null !== ju && this.deps.HN("game_server_route", "cf_failed_since_route", ju), this.aliasFailedAt = this.deps.now(), void 0 === su) return null;
        const Xu = this.stored();
        return "cloudflare" !== (null === Xu || void 0 === Xu ? void 0 : Xu.route) || "on" !== Zu && Xu.aliasFailedOnce || "ours" !== (await this.probeHost(uu)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === Zu ? (this.store({
          ...Xu,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && Pu.has(Uu.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= au) return "on";
        const uu = this.stored();
        return void 0 !== (null === uu || void 0 === uu ? void 0 : uu.recoveryArm) ? uu.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== uu && this.store(uu), this.pageArm)
      }
      reportArm(uu) {
        this.armReported || this.deps.now() >= au || (this.armReported = !0, this.deps.HN("game_server_route", "holdout" === (null !== uu && void 0 !== uu ? uu : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(uu) {
        return fu(uu) && "direct" !== this.heldRoute()
      }
      settle(uu) {
        let {
          outcome: Eu,
          cfMs: ju
        } = uu;
        return this.deps.HN("game_server_route", Eu, ju), "blocked" === Eu && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(uu) {
        const Eu = this.probeHost(lu(uu));
        if ("none" !== (await this.probeHost(uu)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: ju,
          ms: su
        } = await Eu;
        return "ours" !== ju && "ipv6Refused" !== ju ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(uu)).answer ? {
          outcome: "direct_reachable",
          cfMs: su
        } : {
          outcome: "ipv6Refused" === ju ? "blocked_ipv6" : "blocked",
          cfMs: su
        }
      }
      async reportRtt(uu, Eu, ju) {
        const su = "ours" === (await this.probeHost(uu)).answer ? await this.probeHost(uu) : null;
        "ours" === (null === su || void 0 === su ? void 0 : su.answer) ? this.deps.HN("game_server_rtt", Eu, su.ms): this.deps.HN("game_server_rtt", ju, 0)
      }
      probeHost(uu) {
        return this.deps.probe(`https://${uu}/version`, 8e3)
      }
      stored() {
        return function(uu) {
          if ("object" !== typeof uu || null === uu) return null;
          const {
            route: Eu,
            until: ju,
            aliasFailedOnce: su,
            recoveryArm: Uu
          } = uu;
          return "cloudflare" !== Eu && "direct" !== Eu || "number" !== typeof ju ? null : {
            route: Eu,
            until: ju,
            ...!0 === su ? {
              aliasFailedOnce: su
            } : {},
            ..."on" === Uu || "holdout" === Uu ? {
              recoveryArm: Uu
            } : {}
          }
        }(this.deps.storage.getItem(ou))
      }
      heldRoute() {
        const uu = this.stored();
        return null !== uu && uu.until > this.deps.now() ? uu.route : null
      }
      store(uu) {
        var Eu, ju, su, Uu;
        const Zu = null !== (Eu = null !== (ju = null !== (su = uu.recoveryArm) && void 0 !== su ? su : null === (Uu = this.stored()) || void 0 === Uu ? void 0 : Uu.recoveryArm) && void 0 !== ju ? ju : this.pageArm) && void 0 !== Eu ? Eu : void 0;
        this.deps.storage.setItem(ou, void 0 === Zu ? uu : {
          ...uu,
          recoveryArm: Zu
        })
      }
    }({
      storage: pu.k,
      probe: async function(uu, Eu) {
        const ju = performance.now(),
          su = await (0, Nu.m)(uu, {
            cache: "no-store"
          }, Eu, (async uu => {
            const Eu = Math.round(performance.now() - ju);
            return {
              answer: await ku(uu),
              ms: Eu
            }
          }));
        return null !== su && void 0 !== su ? su : {
          answer: "none",
          ms: 0
        }
      },
      HN: Ou.p,
      enabled: !(0, wu.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: uu => new Promise((Eu => {
        setTimeout(Eu, uu)
      })),
      sleep: Ju.b,
      seatLegs: du.i
    });
    var vu = ju(1767),
      Ku = ju(9152);

    function Vu(uu) {
      return async (Eu, ju, Xu, lu, fu) => {
        let bu, Mu = performance.now();
        if ((0, su.H)(Xu)) {
          if (fu.aborted) return Qu();
          const uu = Eu instanceof Uu.f ? null : (0, Ku.j)((0, Ku.e)(Eu, ju));
          let su = await (null !== uu && void 0 !== uu ? uu : Wu(Eu, ju, lu));
          if (null !== uu && performance.now() - su.at > iu && !fu.aborted) {
            const uu = await Wu(Eu, ju, lu);
            uu.result.isError() && !su.result.isError() || (su = uu)
          }
          const Zu = su.result;
          if (Mu = su.at, fu.aborted || hu.f.matchmakingEnded(Zu.isError() ? null : su.at), Zu.isError()) {
            const uu = Zu.asError();
            return console.log("Join room did not succeed, reason:", uu.message), uu.forward()
          }
          bu = Zu.getValue(), mu.afterMatchmade(bu.endpoint)
        } else {
          hu.f.skipPlayWait();
          const uu = Iu(Xu.replace("https://", "").replace("http://", ""));
          if (uu.isError()) return uu.asError().forward();
          bu = {
            endpoint: uu.getValue(),
            gameNameWithVariation: ju,
            lobbyName: Eu instanceof Uu.f ? Eu.getLobbyName() : Eu
          }
        }
        if (fu.aborted) return Qu();
        console.log(`Connecting to ${bu.gameNameWithVariation} in lobby ${bu.lobbyName} on game server ${bu.endpoint}`), cu.h.TY("matchmakeAndPlayStepCompleted", {
          step: Zu.j.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Ou.h)(), Yu.e.markGameLoadStart((0, vu.d)()), (0, gu.m)({
          websocketUrl: bu.endpoint,
          gameNameWithVariation: bu.gameNameWithVariation,
          lobbyName: bu.lobbyName
        }), cu.h.TY("loadingScreenState", "loadingPage:loadingGame");
        const eu = async () => {
          const uu = await async function(uu, Eu, ju, su) {
            const Uu = await Su(uu, Eu, ju);
            if (!Uu.isError() && !su.aborted) {
              const {
                endpoint: uu,
                gameNameWithVariation: Eu,
                lobbyName: ju
              } = Uu.getValue();
              (0, gu.m)({
                websocketUrl: uu,
                gameNameWithVariation: Eu,
                lobbyName: ju
              })
            }
            return Uu
          }(Eu, ju, lu, fu);
          return uu.isError() || (bu = uu.getValue(), Mu = performance.now()), uu
        }, Gu = !(0, su.H)(Xu), pu = Eu => uu({
          place: bu,
          userContext: lu,
          direct: Gu,
          matchedAt: Mu,
          rematch: eu
        }, Eu), wu = () => qu(new URL(bu.endpoint).hostname), Ju = wu() ? performance.now() : null, du = Gu ? {
          result: await pu(fu),
          blockedAt: null,
          failureChecked: !1
        } : await async function(uu, Eu, ju) {
          const su = new Nu.d(ju),
            Uu = new AbortController;
          let Zu = null,
            Xu = !1,
            lu = null;
          const qu = mu.checkStalledJoin(uu, Uu.signal, (() => Xu)).then((uu => {
            lu = uu, "blocked" === uu && (Zu = performance.now(), su.controller.abort())
          }));
          try {
            const uu = await Eu(su.signal);
            return Xu = uu.isError() && void 0 !== uu.asError().debugResult.gameServerUnreachable, Uu.abort(), Xu && await qu, {
              result: uu,
              blockedAt: Zu,
              failureChecked: "reported" === lu
            }
          } finally {
            Uu.abort(), su.unfollow()
          }
        }(bu.endpoint, pu, fu);
        let au = null !== Ju && void 0 !== Ju ? Ju : du.blockedAt,
          Pu = du.result;
        const ou = () => null === au ? null : performance.now() - au,
          ku = Pu.isError() && !0 === Pu.asError().debugResult.rematch;
        let Vu = null;
        if (!Pu.isError() || Gu || fu.aborted || ku || null !== du.blockedAt || du.failureChecked || (Vu = await mu.afterJoinFailed(bu.endpoint, Pu.asError().debugResult, ou())), Pu.isError() && !Gu && ("reroute" === Vu || !fu.aborted && (ku || null !== du.blockedAt))) {
          if (ku || (au ??= performance.now(), cu.h.TY("gameServerRouteSwitched")), fu.aborted) return ru(au), Qu();
          console.log("Matchmaking again");
          const uu = await eu();
          if (uu.isError()) return uu.asError().forward();
          if (fu.aborted) return ru(au), Qu();
          Pu = await pu(fu), Vu = null, !Pu.isError() || fu.aborted || ku && !wu() || (Vu = await mu.afterJoinFailed(bu.endpoint, Pu.asError().debugResult, ou()))
        }
        if (Pu.isError() && "retry" === Vu && !fu.aborted && mu.takeAutoRetry()) {
          if (!await mu.waitToRetry(fu)) return Qu();
          console.log("Joining through Cloudflare again");
          const uu = await eu();
          if (fu.aborted) return Qu();
          if (uu.isError()) return mu.afterAutoRetryFailed(null), Pu.asError().forward();
          if (Pu = await pu(fu), Pu.isError() && !fu.aborted) {
            const uu = Pu.asError().debugResult;
            await mu.afterJoinFailed(bu.endpoint, uu, null), mu.afterAutoRetryFailed(uu)
          } else if (!Pu.isError()) {
            var Fu;
            mu.afterAutoRetryJoined(null !== (Fu = ou()) && void 0 !== Fu ? Fu : 0)
          }
        }
        return Pu.isError() ? (!0 === Pu.asError().debugResult.Lj && fu.aborted && ru(au), Pu.asError().forward()) : (mu.afterJoined(bu.endpoint), (0, Du.G)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Cu.c.value({
          gameNameWithVariation: bu.gameNameWithVariation,
          lobbyName: bu.lobbyName
        }))
      }
    }

    function ru(uu) {
      null !== uu && mu.afterAliasJoinLeft(performance.now() - uu)
    }

    function Qu() {
      return Cu.c.errorWithCode("Left the game while it loaded", Zu.j.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Lj: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const iu = 1e4;

    function Wu(uu, Eu, ju) {
      return Su(uu, Eu, ju).then((uu => ({
        result: uu,
        at: performance.now()
      })))
    }
    async function Su(uu, Eu, ju) {
      return (0, su.H)(uu) || uu instanceof Uu.f || !(uu.length > bu.P) ? await Mu.b.matchmakePlayer(ju, uu, Eu, (0, Gu.c)()).then((uu => {
        if (!1 === uu.succeeded) return Cu.c.errorWithCode(uu.failReason, Zu.j.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: Eu,
          lobbyName: ju,
          gameNameWithVariation: su
        } = uu, Uu = Iu(mu.hostFor(Eu));
        return Uu.isError() ? Uu.asError().forward() : Cu.c.value({
          endpoint: Uu.getValue(),
          gameNameWithVariation: su,
          lobbyName: ju
        })
      })).catch((uu => (console.error("Bad response from the matchmaking server:", uu), Cu.c.errorWithCode(uu.toString(), Zu.j.REQUEST_TO_MATCHMAKING, {
        error: uu,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", uu), Cu.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", Zu.j.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function Iu(uu) {
      const Eu = eu.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(uu);
      return Eu.isError() ? Cu.c.errorWithCode(Eu.asError().message, Zu.j.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Cu.c.value(Eu.getValue())
    }
    window.leaveGame = () => {
      (0, gu.i)("/")
    }
  },
  8992: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(8995),
      Uu = ju(649),
      Zu = ju(131);

    function Xu(uu) {
      var Eu, ju;
      if ((0, Uu.H)(uu)) return !0;
      const Xu = null !== (Eu = null === (ju = Zu.siteUsedData[Zu.siteUsed]) || void 0 === ju ? void 0 : ju.adConfig.showRewardedAds) && void 0 !== Eu && Eu;
      for (const Uu in uu) {
        const Eu = uu[Uu];
        if (null !== Eu && void 0 !== Eu && Eu.items)
          for (const uu in Eu.items)
            if ((0, su.l)(Eu.items[uu], Xu)) return !1
      }
      return !0
    }
  },
  36965: (uu, Eu, ju) => {
    function su(uu, Eu) {
      for (let ju = 0; ju < uu.length; ju++)
        if (uu[ju].identifier === Eu) return uu[ju];
      return null
    }

    function Uu(uu, Eu) {
      return null !== su(uu, Eu)
    }
    ju.d(Eu, {
      b: () => su,
      f: () => Uu
    })
  },
  36981: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      h: () => cu,
      j: () => Du,
      n: () => fu
    });
    var su = ju(22),
      Uu = ju(2516),
      Zu = ju(2519),
      Xu = ju(2522),
      lu = ju(2610),
      qu = ju(24);

    function fu(uu, Eu) {
      return (!(0, Xu.e)() || 0 === uu && 0 === Eu) && (0, Zu.v)(Uu.h.Joystick, 0, uu, Eu, 0)
    }
    const Cu = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function bu(uu) {
      return uu.classList.contains("TouchKeyHit") && Nu() ? null : uu.firstElementChild
    }

    function cu(uu) {
      return uu.classList.contains("TouchKeyHit") && !uu.classList.contains("CanvasZone") ? {
        whole: !Nu(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Ou(bu(uu))
      }
    }

    function Nu() {
      return document.documentElement.classList.contains(lu.i)
    }

    function Ou(uu) {
      return !(uu instanceof HTMLElement) || uu.offsetWidth <= 0 || uu.offsetHeight <= 0 ? null : {
        width: uu.offsetWidth,
        height: uu.offsetHeight
      }
    }

    function Yu(uu, Eu) {
      const ju = uu => Math.min(65535, Math.round(4 * uu));
      return (ju(uu) | ju(Eu) << 16) >>> 0
    }

    function hu(uu) {
      return {
        x: uu.left + uu.width / 2,
        y: uu.top + uu.height / 2,
        radius: Math.min(uu.width, uu.height) / 2
      }
    }
    const Du = new class {
      constructor(uu) {
        this.write = uu, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Eu ? this.elements.set(uu, {
          element: Eu,
          hidden: ju
        }) : this.elements.delete(uu), this.measureOne(uu)
      }
      measure() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = uu.left, this.canvasTop = uu.top;
        for (const Eu of this.elements.keys()) this.measureOne(Eu)
      }
      hitZone(uu, Eu) {
        let ju = null,
          su = 1;
        for (const Uu of this.elements.keys()) {
          const Zu = this.shown(Uu);
          if (!Zu) continue;
          const {
            rect: Xu,
            element: lu
          } = Zu, qu = hu(Xu), fu = Math.max(0, Xu.width / 2 - qu.radius), Cu = Math.max(0, Xu.height / 2 - qu.radius), cu = Math.max(0, Math.abs(uu - qu.x) - fu), Nu = Math.max(0, Math.abs(Eu - qu.y) - Cu), Yu = lu.firstElementChild;
          let Du = Math.hypot(cu, Nu) / qu.radius;
          const gu = Ou(bu(lu));
          gu && (Du = Math.min(Du, Math.max(2 * Math.abs(uu - qu.x) / gu.width, 2 * Math.abs(Eu - qu.y) / gu.height))), Du < su && (ju = {
            code: Uu,
            element: lu,
            key: Yu,
            ...qu
          }, su = Du)
        }
        return ju
      }
      measureOne(uu) {
        const Eu = this.shown(uu);
        if (!Eu) return void this.write(Uu.h.TouchZone, uu, 0, 0, 0);
        const {
          rect: ju,
          element: su
        } = Eu, Zu = hu(ju);
        this.write(Uu.h.TouchZone, uu, Zu.x - this.canvasLeft, Zu.y - this.canvasTop, Yu(ju.width, ju.height));
        const Xu = Ou(bu(su));
        this.write(Uu.h.TouchZone, 256 | uu, 0, 0, Xu ? Yu(Xu.width, Xu.height) : 0)
      }
      shown(uu) {
        const Eu = this.elements.get(uu),
          ju = su.d.get("worldPanelHud");
        if (!Eu || Eu.hidden || "none" === ju) return null;
        const Uu = Eu.element.getBoundingClientRect();
        return Uu.width <= 0 || Uu.height <= 0 ? null : {
          rect: Uu,
          element: Eu.element
        }
      }
    }(Zu.v);
    (0, qu.l)(lu.d, (() => {
      Du.measure()
    }))
  },
  37241: (uu, Eu, ju) => {
    function su(uu) {
      return "fetch" === uu || "timeout" === uu || "integrity" === uu ? "download" : "browser"
    }
    ju.d(Eu, {
      e: () => Uu,
      h: () => Xu,
      k: () => qu,
      l: () => lu,
      m: () => su,
      q: () => Zu
    });
    const Uu = "https://discord.gg/playbloxd";

    function Zu(uu) {
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

    function Xu(uu, Eu) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Eu ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: uu.code
        },
        discordLink: Eu,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function lu() {
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

    function qu(uu, Eu, ju) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ju ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: uu.reason
        },
        discordLink: null === uu.name,
        confirm: Eu ? "general:reconnect" : uu.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37294: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return null === uu || null === Eu ? uu === Eu : uu[0] === Eu[0] && uu[1] === Eu[1] && uu[2] === Eu[2]
    }

    function Uu(uu) {
      return [uu[0] + .5, uu[1] + .5, uu[2] + .5]
    }
    ju.d(Eu, {
      c: () => Uu,
      f: () => su
    })
  },
  37248: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      h: () => lu
    });
    const su = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Uu = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Zu = {
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
      Xu = {
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
      lu = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: su.files,
          dependencies: su.dependencies,
          bundledSource: su.bundledSource,
          types: su.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Uu.files,
          dependencies: Uu.dependencies,
          bundledSource: Uu.bundledSource,
          types: Uu.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Zu.files,
          dependencies: Zu.dependencies,
          bundledSource: Zu.bundledSource,
          types: Zu.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Xu.files,
          dependencies: Xu.dependencies,
          bundledSource: Xu.bundledSource,
          types: Xu.types
        }
      };

    function qu(uu) {
      const Eu = [],
        ju = new Set,
        su = uu => {
          if (ju.has(uu)) return;
          const Uu = lu[uu];
          if (Uu) {
            ju.add(uu);
            for (const uu of Uu.dependencies) su(uu);
            Eu.push(uu)
          }
        };
      for (const Uu of uu) su(Uu);
      return Eu
    }
  },
  37257: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      h: () => lu,
      j: () => Xu,
      n: () => Zu,
      p: () => fu,
      t: () => Cu,
      u: () => Ou,
      x: () => Nu,
      y: () => cu
    });
    var su = ju(1298);
    const Uu = ["quickjs", "ses"];

    function Zu(uu) {
      return Uu.includes(uu)
    }

    function Xu(uu) {
      return uu === su.h || uu === su.j
    }

    function lu(uu, Eu) {
      return uu === su.h && Eu === su.j || uu === su.j && Eu === su.h
    }

    function qu(uu) {
      const Eu = su.j in uu,
        ju = su.h in uu;
      return Eu && ju ? null : Eu ? su.j : ju ? su.h : null
    }

    function fu(uu, Eu, ju) {
      const su = `${Eu}/`;
      return uu.filter((uu => uu.startsWith(su))).map((uu => [uu, `${ju}/${uu.slice(su.length)}`]))
    }

    function Cu(uu, Eu) {
      let ju = 0;
      for (const [su, Uu] of Object.entries(uu)) su !== Eu && (ju += Uu.length);
      return ju
    }
    const bu = "@plugins/";

    function cu(uu) {
      return `${bu}${uu}`
    }

    function Nu(uu, Eu) {
      return `/node_modules/@plugins/${uu}/${Eu}`
    }

    function Ou(uu) {
      if (!uu.startsWith(bu)) return null;
      const Eu = uu.slice(bu.length);
      return function(uu) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(uu)
      }(Eu) ? Eu : null
    }
  },
  37264: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      f: () => Uu,
      j: () => Xu,
      l: () => qu,
      m: () => Zu
    });
    var su = ju(2541);
    const Uu = 5,
      Zu = "[SCHEMATIC]",
      Xu = 1024e4;

    function lu(uu) {
      return uu.endsWith(".bloxdschem") && (0, su.m)(uu.slice(0, -11) + ".ts") && uu.length <= 64
    }

    function qu(uu) {
      return Object.fromEntries(Object.keys(uu).map((uu => [uu, Zu])))
    }
  },
  5011: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => su,
      j: () => Zu,
      l: () => qu,
      o: () => Xu
    });
    const su = ["sine", "triangle", "square", "sawtooth"],
      Uu = 55,
      Zu = {
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

    function Xu(uu) {
      return "string" !== typeof uu ? uu : Object.hasOwn(Zu, uu) ? Zu[uu] : null
    }

    function lu(uu, Eu, ju) {
      return Math.min(ju, Math.max(Eu, uu))
    }

    function qu(uu) {
      const Eu = lu(uu.durationMs, 10, 500),
        ju = lu(uu.attackMs, 0, Eu),
        {
          intonation: Uu
        } = uu;
      return {
        waveform: su.includes(uu.waveform) ? uu.waveform : "sine",
        pitchHz: lu(uu.pitchHz, 20, 4e3),
        glideSemitones: lu(uu.glideSemitones, -24, 24),
        durationMs: Eu,
        attackMs: ju,
        releaseMs: lu(uu.releaseMs, 0, Eu - ju),
        lowpassHz: null === uu.lowpassHz ? null : lu(uu.lowpassHz, 20, 2e4),
        volume: lu(uu.volume, 0, 2),
        intonation: {
          variationSemitones: lu(Uu.variationSemitones, 0, 6),
          declineSemitones: lu(Uu.declineSemitones, 0, 12),
          questionRiseSemitones: lu(Uu.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: lu(Uu.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: lu(uu.syllableMs, 25, 200)
      }
    }
  },
  9026: () => {},
  10180: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18325: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20242: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20247: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20254: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20262: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20267: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);