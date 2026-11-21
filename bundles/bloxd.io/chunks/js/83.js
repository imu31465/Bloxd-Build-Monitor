export const id = 83;
export const ids = [83];
export const modules = {
  36703: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Dd,
      f: () => Ud
    });
    var pd = kd(56),
      Nd = kd(1932),
      Wd = kd(36706),
      Pd = kd.n(Wd),
      Zd = kd(4397),
      gd = kd(1904),
      Cd = kd(1459),
      Kd = kd(95),
      od = kd(108),
      ld = kd(313),
      Qd = kd(1044),
      Ld = kd.n(Qd),
      Od = kd(22),
      ed = kd(1059),
      Rd = kd(1670),
      Id = kd(1753),
      Gd = kd(1723),
      vd = kd(1986),
      xd = kd(1417),
      qd = kd(2049),
      Bd = kd(1404),
      sd = kd(8688),
      ad = kd(36712),
      Md = kd(36736),
      Fd = kd(1488),
      Yd = kd(2365),
      md = kd(1211),
      bd = kd(36754);
    var Sd = kd(9169);
    var jd = kd(1103);
    const Xd = kd(36760),
      fd = ["enter", "t", "/"];
    let nd = !1;

    function Ud() {
      return nd || (0, Id.isTextEntry)(document.activeElement)
    }

    function yd() {
      var dd, Jd;
      (0, qd.b)();
      const kd = null !== (dd = null === (Jd = (0, xd.g)()) || void 0 === Jd ? void 0 : Jd.getBoundButton("keyboardChannel")) && void 0 !== dd ? dd : null;
      return kd ? (0, jd.jsx)(vd.c, {
        className: "ChatInputChannelGlyph",
        glyph: kd
      }) : null
    }

    function Dd() {
      const {
        t: dd
      } = (0, md.B)(), {
        isTouchScreen: Jd
      } = (0, Od.j)(["isTouchScreen"]), kd = (0, Bd.m)(), [Wd, Qd] = (0, pd.useState)(!1), vd = (0, pd.useRef)(Wd), xd = (0, pd.useRef)(null), {
        messages: qd,
        reportedPlayers: Ud,
        channel: Dd
      } = (0, sd.q)(), Ed = (0, pd.useRef)(0), cd = (0, pd.useRef)(""), hd = (0, pd.useRef)(null);
      var rd;
      rd = hd, (0, pd.useEffect)((() => {
        if (!(0, Kd.isIOS)()) return;
        const dd = rd.current;
        let Jd = null;
        const kd = kd => {
            const pd = kd.changedTouches[0];
            Jd = "none" === getComputedStyle(dd).pointerEvents ? {
              id: pd.identifier,
              y: pd.clientY
            } : null
          },
          pd = kd => {
            const pd = Jd,
              Nd = pd && (0, bd.e)(kd.changedTouches, pd.id);
            Nd && (kd.preventDefault(), dd.scrollBy({
              top: pd.y - Nd.clientY,
              behavior: "instant"
            }), pd.y = Nd.clientY)
          };
        return dd.addEventListener("touchstart", kd, {
          passive: !0
        }), dd.addEventListener("touchmove", pd, {
          passive: !1
        }), () => {
          dd.removeEventListener("touchstart", kd), dd.removeEventListener("touchmove", pd)
        }
      }), [rd]);
      const [ud, td] = (0, pd.useState)(!1), [Vd, zd] = (0, pd.useState)(!1), Hd = (0, pd.useRef)(ud), wd = (0, pd.useRef)(null), Ad = (0, pd.useRef)(!1), dJ = (0, pd.useRef)(null), JJ = (0, pd.useRef)(null), kJ = (0, pd.useRef)(null), pJ = (0, pd.useRef)(ZJ);
      pJ.current = ZJ;
      const NJ = (0, Yd.o)();

      function WJ() {
        vd.current = !1, Qd(!1), JJ.current.blur()
      }

      function PJ(dd) {
        Hd.current = dd, td(dd)
      }

      function ZJ() {
        const dd = JJ.current.value;
        JJ.current.value = "", gJ(dd)
      }

      function gJ(dd) {
        (0, sd.m)(dd), Ed.current = 0, PJ(!1)
      }

      function CJ(dd, Jd) {
        0 === Ed.current && (cd.current = JJ.current.value);
        const kd = (0, sd.i)(Ed.current + dd, Jd);
        Ed.current = kd.stepsBack, JJ.current.value = 0 === kd.stepsBack ? cd.current : kd.text, setTimeout((() => {
          JJ.current && JJ.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function KJ() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        hd.current && (!dd && Hd.current || (hd.current.scrollTop = 1e5))
      }
      return (0, Zd.d)(!0, Wd, "ChatComponent"), (0, pd.useEffect)((() => (nd = Wd, () => {
          nd = !1
        })), [Wd]), (0, Cd.h)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Rd.q)() && Qd(!1)
        })), (0, pd.useEffect)((() => {
          JJ.current.addEventListener("blur", (dd => {
            if (null === JJ.current) return;
            Array.from(document.querySelectorAll(":hover")).some((dd => dd.classList.contains("ChatInputChannel") || dd.classList.contains("ChatMsgSelectWrapper"))) || ((0, Kd.isMobile)() && vd.current && "" !== JJ.current.value && pJ.current(), Qd(!1))
          }));
          const dd = dd => {
            xd.current.contains(dd.target) || (0, Gd.g)(dd.target) || Qd(!1)
          };
          document.addEventListener("touchstart", dd, {
            capture: !0
          });
          const Jd = dd => {
            (0, Md.e)(dd.target) && (vd.current = !1, Qd(!1))
          };
          document.addEventListener("mousedown", Jd, {
            capture: !0
          });
          const kd = () => {
              clearTimeout(wd.current), PJ(!0)
            },
            pd = () => {
              clearTimeout(wd.current), wd.current = setTimeout((() => {
                PJ(!1), KJ()
              }), 4e3)
            },
            Wd = () => {
              document.pointerLockElement ? (Qd(!1), zd(!0), Ad.current = !1, PJ(!1), KJ()) : zd(!1)
            };
          hd.current.addEventListener("pointermove", (dd => {
            "touch" === dd.pointerType || Ad.current || document.pointerLockElement || (Ad.current = !0, clearTimeout(wd.current))
          })), hd.current.addEventListener("pointerleave", (dd => {
            "touch" !== dd.pointerType && (Ad.current = !1, Hd.current && pd())
          })), hd.current.addEventListener("pointerdown", (dd => {
            "touch" === dd.pointerType || document.pointerLockElement || (Ad.current = !0, kd())
          })), hd.current.addEventListener("wheel", (dd => {
            document.pointerLockElement || dd.deltaY >= 0 && Math.abs(hd.current.scrollTop) < 1 || (kd(), Ad.current || (wd.current = setTimeout((() => {
              PJ(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), hd.current.addEventListener("touchstart", kd), hd.current.addEventListener("touchend", pd), hd.current.addEventListener("touchcancel", pd), document.addEventListener("pointerlockchange", Wd);
          const Zd = dd => {
            if (NJ.shown && (vd.current || ! function(dd) {
                if ((0, Id.isTypingInInput)()) return !0;
                const Jd = document.activeElement;
                return (Jd instanceof HTMLButtonElement || "button" === (null === Jd || void 0 === Jd ? void 0 : Jd.getAttribute("role"))) && ["Enter", " "].includes(dd.key)
              }(dd)) && "codeEditor" !== Od.d.get("openInGameMenuName") && "lobbyCodeEditor" !== Od.d.get("openInGameMenuName") && !Nd.gameBridge.latest("connectedGame").replay)
              if (vd.current || !(0, Rd.q)()) {
                if (vd.current) {
                  if ("ArrowUp" === dd.code || "ArrowDown" === dd.code) return CJ("ArrowUp" === dd.code ? 1 : -1, !1), void dd.stopPropagation();
                  if ("Tab" === dd.code) return sd.b.selectNextChannel(), dd.stopPropagation(), void dd.preventDefault();
                  if (dd.ctrlKey && Td.includes(Xd[dd.keyCode])) return dd.preventDefault(), void dd.stopPropagation()
                }
                if ([...fd, "esc"].includes(Pd()(dd)))
                  if ("esc" !== Pd()(dd)) {
                    if (!vd.current || "/" !== Pd()(dd)) {
                      if ("t" === Pd()(dd)) {
                        if (vd.current) return void dd.stopPropagation();
                        dd.preventDefault()
                      }
                      vd.current && "" !== JJ.current.value && pJ.current(), dd.repeat || (vd.current || "/" === Pd()(dd) && (JJ.current.value = "/", dd.preventDefault()), Qd(!vd.current))
                    }
                  } else vd.current && (Qd(!1), dd.stopPropagation());
                else vd.current && dd.stopPropagation()
              } else fd.includes(Pd()(dd)) && (dd.preventDefault(), dd.stopPropagation(), (0, Rd.d)(dd))
          };
          document.addEventListener("keydown", Zd, {
            capture: !0
          });
          const gd = hd.current;
          let Cd = !1;
          const od = new ResizeObserver((() => {
              Cd && (Cd = !1, KJ())
            })),
            ld = () => {
              Cd = !0, od.unobserve(gd), od.observe(gd)
            };
          dJ.current = ld;
          const Ld = new MutationObserver(ld);
          return Ld.observe(gd, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Zd, {
              capture: !0
            }), document.removeEventListener("touchstart", dd, {
              capture: !0
            }), document.removeEventListener("mousedown", Jd, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Wd), dJ.current = null, Ld.disconnect(), od.disconnect(), clearTimeout(wd.current)
          }
        }), []), (0, Gd.k)(JJ, {
          open: () => {
            Qd(!0)
          },
          close: () => {
            WJ()
          },
          submit: () => {
            "" !== JJ.current.value && ZJ(), WJ()
          },
          stepHistory: () => {
            CJ(1, !0)
          },
          sendLine: dd => {
            gJ(dd), WJ()
          },
          selectNextChannel: () => {
            sd.b.selectNextChannel()
          }
        }), (0, pd.useEffect)((() => {
          var dd;
          (vd.current = Wd, JJ.current) && (Wd ? (Ed.current = 0, JJ.current.focus()) : (JJ.current.blur(), null === (dd = dJ.current) || void 0 === dd || dd.call(dJ)))
        }), [Wd]),
        function(dd, Jd) {
          (0, pd.useLayoutEffect)((() => {
            if (!Jd) return;
            Sd.d.hold();
            const kd = dd.current.closest(".InGameHeaderAndChat"),
              pd = window.visualViewport;
            let Nd = "";
            const Wd = () => {
              const dd = `${pd.offsetTop+pd.height}px`;
              dd !== Nd && (Nd = dd, kd.style.setProperty("--keyboard-top", dd))
            };
            return Wd(), pd.addEventListener("resize", Wd), pd.addEventListener("scroll", Wd), () => {
              pd.removeEventListener("resize", Wd), pd.removeEventListener("scroll", Wd), kd.style.removeProperty("--keyboard-top"), Sd.d.release()
            }
          }), [dd, Jd])
        }(xd, Wd && Jd), (0, jd.jsx)(jd.Fragment, {
          children: (0, jd.jsxs)("div", {
            ref: xd,
            className: Ld()("Chat", {
              Chatting: Wd
            }),
            "data-camera-keeper": Wd ? "" : void 0,
            children: [(0, jd.jsx)("div", {
              ref: hd,
              className: Ld()("ChatMessages", {
                HideScrollbar: !ud && !Wd,
                NoScrolling: !(0, Kd.isMobile)() && Vd
              }),
              children: (0, jd.jsx)(ad.c, {
                messages: qd,
                reportedPlayers: Ud
              })
            }), Jd && !Wd && (0, jd.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": dd("general:chat"),
              ...(0, Fd.c)((() => {
                Qd(!0), kJ.current.style.display = "flex", (0, Kd.isIOS)() && JJ.current.focus()
              }), "pointerup"),
              children: (0, jd.jsx)(ed.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, jd.jsxs)("div", {
              ref: kJ,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Wd ? "flex" : "none")
              },
              children: [Dd && (0, jd.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: Dd.elementBgColor
                },
                onClick: dd => {
                  sd.b.selectNextChannel(), JJ.current.focus()
                },
                children: (0, jd.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, jd.jsx)(gd.c, {
                    text: Dd.elementContent
                  })
                })
              }), Dd && kd && (0, jd.jsx)(yd, {}), (0, jd.jsx)("input", {
                className: "ChatInput",
                maxLength: ld.gd,
                ref: JJ,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": dd("general:chat"),
                placeholder: Dd ? `${Dd.channelName} Chat${"touchOnly"===(0,od.e)()||kd?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Td = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36712: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ad
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(8691),
      Zd = kd(29),
      gd = kd(2319),
      Cd = kd(3462),
      Kd = kd(2004),
      od = kd(22),
      ld = kd(1904),
      Qd = kd(36715),
      Ld = kd(2126),
      Od = kd(36720),
      ed = kd(2511),
      Rd = kd(2495),
      Id = kd(2486),
      Gd = kd(3478),
      vd = kd(36726),
      xd = kd(2980),
      qd = kd(1968),
      Bd = kd(1103);

    function sd(dd) {
      for (let kd = dd.length - 1; kd >= 0; kd--) {
        const pd = "string" === typeof(Jd = dd[kd]) ? Jd : "str" in Jd && "string" === typeof Jd.str ? Jd.str : "";
        if ("" !== pd.trim()) return pd
      }
      var Jd;
      return ""
    }

    function ad(dd) {
      let {
        messages: Jd,
        reportedPlayers: kd
      } = dd;
      return (0, Bd.jsx)(Bd.Fragment, {
        children: Jd.map((dd => (0, Bd.jsx)(Md, {
          message: dd,
          reportedPlayers: kd
        }, dd.clientChatMsgId)))
      })
    }
    const Md = (0, pd.memo)((function(dd) {
      var Jd;
      let {
        message: kd,
        reportedPlayers: Nd
      } = dd;
      const ad = (0, pd.useRef)(null),
        [Md] = (0, pd.useState)(xd.g),
        {
          author: Fd
        } = kd,
        Yd = null === Fd || void 0 === Fd ? void 0 : Fd.id,
        md = null !== (Jd = null === Fd || void 0 === Fd ? void 0 : Fd.name) && void 0 !== Jd ? Jd : void 0,
        bd = (0, Kd.e)(md),
        Sd = null !== Fd && void 0 !== Fd && Fd.profileEffect ? Ld.c[Fd.profileEffect] : void 0,
        jd = null !== Fd && !Fd.local,
        Xd = null === Fd && null !== kd.serverChatMsgId,
        fd = (0, qd.g)("hiddenPlayerNames", (dd => (0, Od.g)(jd, md, dd))),
        nd = null === kd.serverChatMsgId || null === Fd ? null : {
          text: sd(kd.content),
          serverChatMsgId: kd.serverChatMsgId,
          authorId: Fd.id
        },
        Ud = Xd || null !== nd && !Nd.includes(Yd),
        yd = (0, Cd.j)(jd && null !== md && void 0 !== md ? md : null),
        Dd = (0, Id.h)(ad);
      (0, pd.useEffect)((() => () => {
        Id.b.closeIfOwner(ad)
      }), []);
      const Td = () => {
          Xd ? Zd.j.nO("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            IC: (0, Pd.d)(kd.content),
            serverChatMsgId: kd.serverChatMsgId
          }) : null !== nd ? Zd.j.nO("OpenReportMenu", {
            playerEId: Yd,
            playerName: md,
            IC: nd.text,
            serverChatMsgId: nd.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Ed = void 0 === md ? [] : (0, Gd.d)(yd, md, nd);
      return (0, Bd.jsxs)("div", {
        ref: ad,
        className: Wd()("MessageWrapper", {
          ChatMsgSelectWrapper: Yd,
          Still: Md
        }),
        onContextMenu: fd ? dd => {
          (0, ed.d)(ad, dd, {
            ...(0, Od.c)(Yd, md),
            showLocation: !1,
            status: null,
            extraActions: Ud ? [{
              icon: "flag",
              text: "Report",
              onClick: Td
            }] : [],
            moderationActions: (0, vd.e)(md),
            friendRequestSource: "chat"
          }, od.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: fd ? dd => {
          (0, Rd.c)(dd, (() => (0, Od.c)(Yd, md).playerSocialPreview))
        } : void 0,
        children: [Sd && (0, Bd.jsx)(Sd, {
          className: "ChatMessageBackground",
          simple: !0
        }), (jd || Xd) && !Dd && (0, Bd.jsx)(Qd.c, {
          className: "ChatFloatingActions",
          triggerElementRef: ad,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Td,
            show: Ud
          }, ...Ed, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: dd => {
              (0, gd.j)(md, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: fd && "blocked" !== yd
          }]
        }), (0, Bd.jsx)(ld.c, {
          text: kd.content,
          friendBadgeFor: bd ? md : void 0
        }, kd.clientChatMsgId)]
      }, kd.clientChatMsgId)
    }))
  },
  36772: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      g: () => Ld,
      h: () => ld,
      j: () => od
    });
    var pd = kd(9234),
      Nd = kd(36779),
      Wd = kd(36783),
      Pd = kd(8620),
      Zd = kd(1459),
      gd = kd(56),
      Cd = kd(72),
      Kd = kd(1103);

    function od() {
      var dd;
      return (0, Zd.i)(Nd.e, (0, Nd.o)()), (0, Kd.jsx)(Kd.Fragment, {
        children: null === (dd = (0, Nd.o)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function ld(dd) {
      var Jd;
      let {
        show: kd
      } = dd;
      (0, Zd.i)(Nd.e, (0, Nd.o)());
      const Cd = null === (Jd = (0, Nd.o)()) || void 0 === Jd ? void 0 : Jd.menu;
      return (0, gd.useEffect)((() => {
        var dd;
        kd || (null === Cd || void 0 === Cd || null === (dd = Cd.onClose) || void 0 === dd || dd.call(Cd), (0, Wd.s)())
      }), [kd, Cd]), (0, gd.useEffect)((() => kd ? (0, Pd.g)(Wd.B, Wd.h) : void 0), [kd]), (0, Kd.jsx)(pd.b, {
        showing: kd,
        globallyUniqueKey: "clientGameMenu",
        children: null === Cd || void 0 === Cd ? void 0 : Cd.content
      })
    }

    function Qd(dd) {
      let {
        placement: Jd = "bottom"
      } = dd;
      return (0, Kd.jsx)("div", {
        id: `clientGameHud-${Jd}`,
        style: {
          display: "contents"
        }
      })
    }

    function Ld(dd) {
      let {
        children: Jd,
        placement: kd = "bottom"
      } = dd;
      const [pd, Nd] = (0, gd.useState)(null);
      return (0, gd.useEffect)((() => {
        Nd(document.getElementById(`clientGameHud-${kd}`))
      }), [kd]), pd ? (0, Cd.createPortal)(Jd, pd) : null
    }
  },
  37070: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od,
      d: () => Kd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1461),
      Zd = kd(1103);
    const gd = 200,
      Cd = 160;

    function Kd() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function od(dd) {
      let {
        side: Jd,
        defaultSize: kd,
        covers: Nd,
        onClose: Kd,
        children: od
      } = dd;
      const ld = (0, pd.useRef)(null),
        [Qd, Ld] = (0, pd.useState)(null),
        [Od, ed] = (0, pd.useState)(kd);
      Od !== kd && (ed(kd), Ld(null));
      const Rd = (0, pd.useRef)(null),
        Id = "top" === Jd,
        Gd = dd => Id ? dd.clientY : dd.clientX,
        vd = () => {
          Rd.current = null
        };
      return (0, Zd.jsxs)("div", {
        ref: ld,
        className: Wd()("ResizableSidePanel", Jd && `ResizableSidePanel-${Jd}`, {
          Covers: "always" === Nd,
          CoversWhenNarrow: "narrow" === Nd,
          Dragged: null !== Qd
        }),
        style: {
          [Id ? "height" : "width"]: null !== Qd && void 0 !== Qd ? Qd : kd
        },
        children: [od, Jd && (0, Zd.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Id ? "horizontal" : "vertical",
          onPointerDown: dd => {
            if (0 !== dd.button) return;
            dd.preventDefault();
            const Jd = ld.current,
              kd = Array.from(Jd.parentElement.children).reduce(((dd, kd) => kd !== Jd && "0" !== getComputedStyle(kd).flexGrow ? dd + (dd => Id ? dd.clientHeight : dd.clientWidth)(kd) : dd), 0),
              pd = Id ? Jd.offsetHeight : Jd.offsetWidth,
              Nd = Math.min(gd, pd),
              Wd = Math.max(Nd, pd + Math.max(0, kd - Cd));
            Rd.current = {
              start: Gd(dd),
              startSize: pd,
              minSize: Nd,
              maxSize: Wd
            }, dd.currentTarget.setPointerCapture(dd.pointerId)
          },
          onPointerMove: dd => {
            const kd = Rd.current;
            if (!kd) return;
            const pd = "right" === Jd ? kd.start - dd.clientX : Gd(dd) - kd.start;
            Ld(Math.min(kd.maxSize, Math.max(kd.minSize, kd.startSize + pd)))
          },
          onPointerUp: vd,
          onPointerCancel: vd,
          onLostPointerCapture: vd
        }), Kd && (0, Zd.jsx)(Pd.i, {
          className: "ResizableSidePanelClose",
          onClick: Kd
        })]
      })
    }
  },
  37087: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Bd,
      c: () => Gd,
      f: () => ed,
      g: () => Ld,
      i: () => Qd,
      m: () => Id,
      o: () => ad,
      s: () => vd,
      u: () => qd,
      v: () => xd,
      x: () => sd,
      y: () => Nd
    });
    var pd = kd(56);
    const Nd = 5e3,
      Wd = 500,
      Pd = 3e3;
    let Zd = null,
      gd = null,
      Cd = null;
    const Kd = new Set;

    function od(dd) {
      Zd = dd;
      for (const Jd of Kd) Jd()
    }

    function ld() {
      if (!Zd || void 0 !== Zd.endedAt) return;
      null !== gd && (clearTimeout(gd), gd = null), od({
        ...Zd,
        endedAt: Date.now()
      });
      const dd = Cd;
      Cd = null, null === dd || void 0 === dd || dd()
    }

    function Qd(dd, Jd) {
      let {
        submit: kd,
        reopen: pd
      } = Jd;
      null !== gd && clearTimeout(gd), Cd = pd, od({
        ...dd,
        startedAt: Date.now(),
        errors: []
      }), gd = setTimeout(ld, Pd), kd()
    }

    function Ld() {
      Zd && void 0 === Zd.endedAt && void 0 === Zd.ranAt && (null !== gd && clearTimeout(gd), od({
        ...Zd,
        ranAt: Date.now()
      }), gd = setTimeout(ld, Nd))
    }
    const Od = 3;

    function ed(dd) {
      if (!Zd || void 0 === Zd.ranAt || void 0 !== Zd.endedAt || Zd.errors.includes(dd) || Zd.errors.length >= Od) return;
      const Jd = 0 === Zd.errors.length;
      od({
        ...Zd,
        errors: [...Zd.errors, dd]
      }), Jd && (null !== gd && clearTimeout(gd), gd = setTimeout(ld, Wd))
    }

    function Rd(dd) {
      var Jd;
      return (null === (Jd = Zd) || void 0 === Jd ? void 0 : Jd.chatKey) === dd ? Zd : null
    }

    function Id(dd) {
      const Jd = Rd(dd);
      return Jd && void 0 !== Jd.endedAt ? (od(null), Jd) : null
    }

    function Gd(dd) {
      var Jd;
      (null === (Jd = Zd) || void 0 === Jd ? void 0 : Jd.chatKey) === dd && (null !== gd && (clearTimeout(gd), gd = null), Cd = null, od(null))
    }
    const vd = "These changes from your last answer didn't go in. Make them again.";

    function xd(dd) {
      const Jd = [...new Set(dd)].slice(0, Od);
      return `Fix this in your change: when it ran, the world showed ${1===Jd.length?"this error":"these errors"}: ${Jd.join(" ")}`
    }

    function qd(dd) {
      return `Your change didn't go in, because the code wouldn't run at all: ${dd.join(" ")} Send the whole change again with that fixed.`
    }

    function Bd(dd) {
      return `Fix this in your change: ${dd.join(" ")}`
    }

    function sd(dd) {
      var Jd;
      if (void 0 === dd.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const kd = Math.max(1, Math.round(((null !== (Jd = dd.endedAt) && void 0 !== Jd ? Jd : dd.ranAt) - dd.ranAt) / 1e3)),
        pd = `Your change ran in your world for ${kd} ${1===kd?"second":"seconds"}`;
      return 0 === dd.errors.length ? {
        title: "Tested: no errors",
        text: `${pd} without an error.`
      } : {
        title: 1 === dd.errors.length ? "Tested: it showed an error" : `Tested: it showed ${dd.errors.length} errors`,
        text: `${pd} and showed: ${dd.errors.join(" ")}`
      }
    }

    function ad(dd) {
      const [Jd, kd] = (0, pd.useState)((() => Rd(dd)));
      return (0, pd.useEffect)((() => {
        const Jd = () => {
          kd(Rd(dd))
        };
        return Jd(), Kd.add(Jd), () => {
          Kd.delete(Jd)
        }
      }), [dd]), Jd
    }
  },
  37091: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      d: () => pd
    });
    const pd = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Nd(dd, Jd, kd) {
      return {
        key: dd,
        label: `Code block at ${Jd.join(", ")}`,
        codeBlock: !0,
        pos: Jd,
        canChangePos: kd
      }
    }
  },
  37080: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Wd,
      j: () => Pd,
      m: () => Nd
    });
    const pd = "code block",
      Nd = "World Code/";

    function Wd(dd) {
      return dd.trim().toLowerCase().startsWith(Nd.toLowerCase())
    }

    function Pd(dd) {
      return dd.trim().slice(Nd.length).replace(/^\.?\//, "")
    }
  },
  37059: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Cd,
      g: () => Zd,
      k: () => Kd
    });
    var pd = kd(56),
      Nd = kd(33),
      Wd = kd(95);
    class Pd {
      constructor(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = dd, this.defaultValue = Jd, this.canChange = kd, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const dd = Nd.i.getItem(this.storageKey);
            this.value = "boolean" === typeof dd ? dd : this.defaultValue
          }
          return this.value
        }, this.set = dd => {
          this.value = dd, Nd.i.setItem(this.storageKey, dd);
          for (const Jd of this.listeners) Jd(dd)
        }
      }
      subscribe(dd) {
        return this.listeners.add(dd), () => {
          this.listeners.delete(dd)
        }
      }
    }
    const Zd = new Pd("codeEditorLightMode", !1),
      gd = new Pd("codeEditorAiHints", !0),
      Cd = new Pd("codeEditorAiKeySafetyCheck", !0, Wd.featureFlags.isOwnTopLevelSite);

    function Kd(dd) {
      const [Jd, kd] = (0, pd.useState)(dd.get);
      return (0, pd.useEffect)((() => {
        const Jd = dd.subscribe(kd);
        return kd(dd.get()), Jd
      }), [dd]), [Jd, dd.set]
    }
  },
  37050: (dd, Jd, kd) => {
    kd.d(Jd, {
      C: () => jd,
      D: () => sd,
      E: () => ad,
      I: () => Sd,
      e: () => Ld,
      f: () => gd,
      h: () => Od,
      j: () => Fd,
      k: () => Zd,
      l: () => Kd,
      m: () => Qd,
      o: () => ed,
      s: () => vd,
      u: () => Yd,
      x: () => Md,
      y: () => ld
    });
    var pd = kd(37041),
      Nd = kd(37048);
    const Wd = "bloxd-world-code-directory-sync",
      Pd = "handles",
      Zd = "[INVALID SCHEMATIC PLACEHOLDER]";

    function gd(dd, Jd) {
      return `${dd}::${Jd}`
    }
    const Cd = new Set(["node_modules", ".git"]);

    function Kd() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function od() {
      return new Promise(((dd, Jd) => {
        const kd = indexedDB.open(Wd, 1);
        kd.onupgradeneeded = () => {
          const dd = kd.result;
          dd.objectStoreNames.contains(Pd) || dd.createObjectStore(Pd)
        }, kd.onsuccess = () => {
          dd(kd.result)
        }, kd.onerror = () => {
          var dd;
          Jd(null !== (dd = kd.error) && void 0 !== dd ? dd : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function ld(dd, Jd) {
      const kd = await od();
      try {
        await new Promise(((pd, Nd) => {
          const Wd = kd.transaction(Pd, "readwrite");
          Wd.objectStore(Pd).put(Jd, dd), Wd.oncomplete = () => {
            pd()
          }, Wd.onerror = () => {
            var dd;
            Nd(null !== (dd = Wd.error) && void 0 !== dd ? dd : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        kd.close()
      }
    }
    async function Qd(dd) {
      const Jd = await od();
      try {
        return await new Promise(((kd, pd) => {
          const Nd = Jd.transaction(Pd, "readonly").objectStore(Pd).get(dd);
          Nd.onsuccess = () => {
            var dd;
            kd(null !== (dd = Nd.result) && void 0 !== dd ? dd : null)
          }, Nd.onerror = () => {
            var dd;
            pd(null !== (dd = Nd.error) && void 0 !== dd ? dd : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        Jd.close()
      }
    }
    async function Ld(dd) {
      const Jd = await od();
      try {
        await new Promise(((kd, pd) => {
          const Nd = Jd.transaction(Pd, "readwrite");
          Nd.objectStore(Pd).delete(dd), Nd.oncomplete = () => {
            kd()
          }, Nd.onerror = () => {
            var dd;
            pd(null !== (dd = Nd.error) && void 0 !== dd ? dd : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        Jd.close()
      }
    }
    async function Od(dd) {
      const Jd = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await dd.queryPermission(Jd) || "granted" === await dd.requestPermission(Jd)
    }
    async function ed(dd) {
      if (!Kd()) return null;
      try {
        const Jd = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await ld(dd, Jd), Jd
      } catch (Jd) {
        if (function(dd) {
            return dd instanceof DOMException && "AbortError" === dd.name
          }(Jd)) return null;
        throw Jd
      }
    }

    function Rd(dd) {
      return dd.startsWith(".") || Cd.has(dd)
    }

    function Id(dd) {
      if (!dd) return !0;
      const Jd = dd.split("/");
      for (const kd of Jd)
        if ("" === kd || "." === kd || ".." === kd) return !1;
      return !0
    }
    async function Gd(dd, Jd, kd) {
      for await (const [Wd, Pd] of dd.entries()) {
        if ("directory" === Pd.kind) {
          if (Rd(Wd)) continue;
          const dd = Jd ? `${Jd}/${Wd}` : Wd;
          if (!Id(dd)) continue;
          await Gd(Pd, dd, kd);
          continue
        }
        const dd = Jd ? `${Jd}/${Wd}` : Wd;
        if (!(0, pd.p)(dd) && !(0, Nd.d)(dd)) continue;
        const Zd = await Pd.getFile();
        kd[dd] = (0, Nd.d)(dd) ? await md(Zd) : await Zd.text()
      }
    }
    async function vd(dd) {
      const Jd = {};
      return await Gd(dd, "", Jd), Jd
    }

    function xd(dd) {
      return !(!dd || dd !== dd.trim() || dd.startsWith("/") || dd.includes("\\") || dd.includes("\0")) && Id(dd)
    }
    async function qd(dd, Jd, kd) {
      const pd = Jd.split("/"),
        Nd = pd[pd.length - 1];
      let Wd = dd;
      for (let Pd = 0; Pd < pd.length - 1; Pd++) Wd = await Wd.getDirectoryHandle(pd[Pd], {
        create: kd
      });
      return {
        dir: Wd,
        fileName: Nd
      }
    }
    async function Bd(dd, Jd, kd) {
      if (!xd(Jd)) throw new Error(`Refusing to write unsafe path: ${Jd}`);
      const {
        dir: pd,
        fileName: Nd
      } = await qd(dd, Jd, !0), Wd = await pd.getFileHandle(Nd, {
        create: !0
      }), Pd = await Wd.createWritable();
      await Pd.write(kd), await Pd.close()
    }
    async function sd(dd, Jd, kd) {
      const pd = await async function(dd, Jd) {
        if (!xd(Jd)) return null;
        try {
          const {
            dir: kd,
            fileName: pd
          } = await qd(dd, Jd, !1), Nd = await kd.getFileHandle(pd), Wd = await Nd.getFile();
          return await Wd.text()
        } catch (kd) {
          if (kd instanceof DOMException && ("NotFoundError" === kd.name || "NotAllowedError" === kd.name)) return null;
          throw kd
        }
      }(dd, Jd);
      pd !== kd && await Bd(dd, Jd, kd)
    }
    async function ad(dd, Jd, kd) {
      if (!(0, pd.p)(Jd) && !(0, Nd.d)(Jd)) throw new Error(`Refusing to write non-allowlisted path: ${Jd}`);
      if ((0, Nd.d)(Jd)) {
        if (await bd(dd, Jd) === Zd) throw new Error(`Move the binary schematic ${Jd} outside the linked folder before syncing its placeholder`)
      }
      await Bd(dd, Jd, kd)
    }
    async function Md(dd, Jd) {
      if (!xd(Jd)) throw new Error(`Refusing to remove unsafe path: ${Jd}`);
      try {
        const {
          dir: kd,
          fileName: pd
        } = await qd(dd, Jd, !1);
        await kd.removeEntry(pd)
      } catch (kd) {
        if (kd instanceof DOMException && ("NotFoundError" === kd.name || "NotAllowedError" === kd.name)) return;
        throw kd
      }
    }
    async function Fd(dd, Jd) {
      if (!xd(Jd)) return null;
      try {
        const kd = Jd.split("/");
        let pd = dd;
        for (const dd of kd) pd = await pd.getDirectoryHandle(dd);
        return pd
      } catch (kd) {
        if (kd instanceof DOMException && ("NotFoundError" === kd.name || "NotAllowedError" === kd.name)) return null;
        throw kd
      }
    }
    async function Yd(dd, Jd) {
      if ((0, pd.p)(Jd) || (0, Nd.d)(Jd)) {
        if ((0, Nd.d)(Jd)) {
          if (await bd(dd, Jd) === Zd) throw new Error(`Refusing to remove a binary schematic: ${Jd}`)
        }
        await Md(dd, Jd)
      }
    }
    async function md(dd) {
      if (dd.size > 64) return Zd;
      const Jd = await dd.text();
      return Array.from(Jd).some((dd => {
        const Jd = dd.charCodeAt(0);
        return Jd < 9 || Jd > 13 && Jd < 32 || 65533 === Jd
      })) ? Zd : Jd
    }
    async function bd(dd, Jd) {
      try {
        const {
          dir: kd,
          fileName: pd
        } = await qd(dd, Jd, !1);
        return await md(await (await kd.getFileHandle(pd)).getFile())
      } catch (kd) {
        if (kd instanceof DOMException && "NotFoundError" === kd.name) return null;
        throw kd
      }
    }
    async function Sd(dd, Jd) {
      const kd = await vd(dd);
      for (const pd of Object.keys(kd)) pd in Jd || (0, Nd.d)(pd) || await Yd(dd, pd);
      for (const [Wd, Pd] of Object.entries(Jd))((0, pd.p)(Wd) || (0, Nd.d)(Wd)) && await ad(dd, Wd, Pd)
    }

    function jd(dd, Jd) {
      var kd, pd;
      let Nd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Wd = null !== (kd = Nd.debounceMs) && void 0 !== kd ? kd : 300,
        Pd = null !== (pd = Nd.pollMs) && void 0 !== pd ? pd : 1e3;
      let Zd = !1,
        gd = null,
        Cd = null,
        Kd = null;
      const od = () => {
          Zd || (gd && clearTimeout(gd), gd = setTimeout((() => {
            gd = null, ld()
          }), Wd))
        },
        ld = async () => {
          if (!Zd) try {
            if (!await Od(dd, "readwrite")) return;
            const kd = await vd(dd);
            Zd || Jd(kd)
          } catch (kd) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", kd)
          }
        };
      ld();
      const Qd = window.FileSystemObserver;
      if (Qd) try {
        Kd = new Qd((() => {
          od()
        })), Kd.observe(dd, {
          recursive: !0
        })
      } catch (Ld) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", Ld), Kd = null
      }
      return Kd || (Cd = setInterval((() => {
        od()
      }), Pd)), () => {
        Zd = !0, gd && clearTimeout(gd), Cd && clearInterval(Cd), Kd && Kd.disconnect()
      }
    }
  },
  4722: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ed,
      d: () => Rd
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(1211),
      Zd = kd(4726),
      gd = kd(1904),
      Cd = kd(2357),
      Kd = kd(4729),
      od = kd(1103);
    const ld = new WeakMap;
    let Qd = 0;

    function Ld(dd) {
      let Jd = ld.get(dd);
      return void 0 === Jd && (Jd = Qd++, ld.set(dd, Jd)), Jd
    }

    function Od(dd) {
      let {
        piece: Jd
      } = dd;
      return "space" === Jd.kind ? (0, od.jsx)(od.Fragment, {
        children: Jd.text
      }) : (0, od.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Jd.delayMs}ms`
        },
        children: (0, od.jsx)(Zd.b, {
          text: "icon" === Jd.kind ? `[[${Jd.icon}]]` : Jd.text
        })
      })
    }

    function ed(dd) {
      let {
        display: Jd
      } = dd;
      const {
        selectedLanguage: kd
      } = (0, Pd.B)(), pd = (0, Wd.useMemo)((() => (0, Kd.c)((0, Kd.d)(Jd).plan.pieces)), [Jd, kd.code]);
      return (0, od.jsxs)("div", {
        className: Nd()("Dialogue", {
          DialogueAnimateIn: !1 !== Jd.animateIn
        }),
        children: [Jd.speakerName && (0, od.jsx)(gd.c, {
          text: Jd.speakerName,
          className: "DialogueSpeaker"
        }), (0, od.jsx)("p", {
          className: "DialogueLine",
          children: pd.map(((dd, Jd) => 1 === dd.length && "space" === dd[0].kind ? dd[0].text : (0, od.jsx)("span", {
            className: "DialogueGlue",
            children: dd.map(((dd, Jd) => (0, od.jsx)(Od, {
              piece: dd
            }, Jd)))
          }, Jd)))
        })]
      })
    }
    const Rd = (0, Wd.memo)((function() {
      const dd = (0, Cd.j)("dialogue");
      return (0, od.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: dd && (0, od.jsx)(ed, {
          display: dd
        }, Ld(dd))
      })
    }))
  },
  36848: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Od,
      e: () => ed
    });
    var pd = kd(56),
      Nd = kd(1459),
      Wd = kd(1968),
      Pd = kd(36798),
      Zd = kd(610),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(1103);
    const od = [ld()];

    function ld() {
      return {
        source: null,
        direction: null,
        dD: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Qd(dd) {
      return od.find((Jd => null !== Jd.source && Jd.source === dd))
    }

    function Ld(dd) {
      clearTimeout(dd.timeout), dd.source = null, dd.direction = null, dd.writtenAngle = null, dd.dD && (dd.dD.style.rotate = "")
    }
    const Od = (0, pd.memo)((function() {
      const [, dd] = (0, pd.useReducer)((dd => dd + 1), 0);
      return (0, Nd.h)("damagedByOtherPlayer", (Jd => {
        let {
          Yp: kd,
          direction: pd
        } = Jd;
        const Nd = kd || "nonDirectional",
          Wd = function(dd) {
            var Jd;
            const kd = null !== (Jd = Qd(dd)) && void 0 !== Jd ? Jd : od.find((dd => null === dd.source));
            if (kd) return kd;
            const pd = {
              source: null,
              direction: null,
              dD: null,
              timeout: void 0,
              writtenAngle: null
            };
            return od.push(pd), pd
          }(Nd);
        clearTimeout(Wd.timeout), Wd.source = Nd, Wd.direction = pd, Wd.timeout = setTimeout((() => {
          Ld(Wd), dd()
        }), 800), dd()
      })), (0, Wd.d)("kill", (Jd => {
        let {
          killer: kd,
          victim: pd
        } = Jd;
        const Nd = kd.local && Qd(pd.id);
        Nd && (Ld(Nd), dd())
      })), (0, pd.useEffect)((() => {
        const dd = (0, Pd.i)("turnDamageIndicators", ed);
        return () => {
          dd(), od.forEach(Ld)
        }
      }), []), (0, Kd.jsx)("div", {
        className: "DirectionalDamage",
        children: od.map(((dd, Jd) => (0, Kd.jsx)("div", {
          ref: Jd => {
            dd.dD = Jd
          },
          className: Cd()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Zd.I)(dd.direction),
            DamageIndicatorIdle: null === dd.source
          })
        }, Jd)))
      })
    }));

    function ed(dd) {
      for (const Jd of od) {
        if (null === Jd.source || (0, Zd.I)(Jd.direction)) continue;
        const kd = Jd.direction - dd;
        kd !== Jd.writtenAngle && (Jd.writtenAngle = kd, Jd.dD.style.rotate = `${kd}rad`)
      }
    }
  },
  36715: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ed
    });
    var pd = kd(56),
      Nd = kd(72),
      Wd = kd(1211),
      Pd = kd(1044),
      Zd = kd.n(Pd),
      gd = kd(1753),
      Cd = kd(1059),
      Kd = kd(1302),
      od = kd(1492),
      ld = kd(1699),
      Qd = kd(1488),
      Ld = kd(1103);
    const Od = 14;

    function ed(dd) {
      let {
        className: Jd,
        triggerElementRef: kd,
        options: Pd
      } = dd;
      const {
        t: ed
      } = (0, Wd.B)(), [Rd, Id] = (0, pd.useState)(!1), [Gd, vd] = (0, pd.useState)({
        x: 0,
        y: 0
      }), xd = (0, pd.useRef)(null);
      (0, pd.useEffect)((() => {
        let dd = null;
        const Jd = Jd => {
            dd = {
              x: Jd.clientX,
              y: Jd.clientY
            }
          },
          pd = Jd => {
            if (null === dd || !(0, Qd.b)(dd, Jd)) return;
            dd = null;
            const kd = Od * (0, gd.getRemInPx)();
            vd({
              x: Math.min(Jd.clientX, window.innerWidth - kd - 5),
              y: Jd.clientY
            }), Id((dd => !dd))
          },
          Nd = dd => {
            var Jd;
            null !== (Jd = xd.current) && void 0 !== Jd && Jd.contains(dd.relatedTarget) || Id(!1)
          },
          Wd = kd.current;
        return Wd.addEventListener("pointerdown", Jd), Wd.addEventListener("pointerup", pd), Wd.addEventListener("mouseleave", Nd), () => {
          Wd.removeEventListener("pointerdown", Jd), Wd.removeEventListener("pointerup", pd), Wd.removeEventListener("mouseleave", Nd)
        }
      }), [kd]), (0, pd.useEffect)((() => {
        if (Rd) return (0, ld.d)("pointerdown", (dd => {
          !xd.current || xd.current.contains(dd.target) || kd.current.contains(dd.target) || Id(!1)
        }))
      }), [Rd, kd]), (0, pd.useLayoutEffect)((() => {
        if (!Rd || !xd.current) return;
        const dd = xd.current.getBoundingClientRect().height,
          Jd = Math.max(5, window.innerHeight - dd - 5);
        Gd.y > Jd && vd({
          x: Gd.x,
          y: Jd
        })
      }), [Rd, Gd]), (0, Kd.s)("popup", xd, (() => {
        Id(!1)
      }), Rd);
      const qd = Pd.filter((dd => !1 !== dd.show));
      return Rd && 0 !== qd.length ? (0, Nd.createPortal)((0, Ld.jsx)("div", {
        ref: xd,
        className: Zd()("FloatingActions", {
          [Jd]: Jd
        }),
        style: {
          width: `${Od}rem`,
          top: Gd.y,
          left: Gd.x
        },
        children: qd.map((dd => {
          let {
            icon: Jd,
            text: kd,
            onPointerDown: pd,
            analyticsClick: Nd
          } = dd;
          return (0, Ld.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: dd => {
              void 0 !== Nd && (0, od.reportAnalyticsClick)(Nd), pd(dd), Id(!1), dd.stopPropagation()
            },
            children: [(0, Ld.jsx)(Cd.e, {
              name: Jd
            }), (0, Ld.jsx)("div", {
              children: ed(kd)
            })]
          }, kd)
        }))
      }), function() {
        var dd;
        return null !== (dd = document.querySelector(".WholeAppWrapperInner")) && void 0 !== dd ? dd : document.body
      }()) : null
    }
  },
  36861: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => kP
    });
    var pd = kd(36772),
      Nd = kd(56),
      Wd = kd(2041),
      Pd = kd(4389),
      Zd = kd(4393),
      gd = kd(2357),
      Cd = kd(1932),
      Kd = kd(1103);

    function od(dd) {
      let {
        className: Jd,
        style: kd,
        vw: pd,
        maxPx: Nd,
        children: Wd
      } = dd;
      console.assert("number" === typeof pd && "number" === typeof Nd, "vw and maxPx passed to Text must be numbers");
      const Pd = window.innerWidth * (pd / 100) > Nd ? `${Nd}px` : `${pd}vw`;
      return (0, Kd.jsx)("div", {
        className: Jd,
        style: {
          ...kd,
          fontSize: Pd
        },
        children: Wd
      })
    }
    var ld = kd(36870),
      Qd = kd(1461),
      Ld = kd(29),
      Od = kd(1955),
      ed = kd(1059);

    function Rd(dd) {
      let {
        tasks: Jd,
        lastDisplayedTasks: kd
      } = dd;
      return (0, Kd.jsx)(Kd.Fragment, {
        children: Object.keys(Jd).map((dd => (0, Kd.jsx)(Id, {
          task: Jd[dd],
          lastDisplayedAs: kd[dd]
        }, Jd[dd].text)))
      })
    }

    function Id(dd) {
      let {
        task: Jd,
        lastDisplayedAs: kd
      } = dd;
      const [pd, Wd] = (0, Nd.useState)(null !== kd && void 0 !== kd && kd.progress ? kd.progress / Jd.goal : 0), [Pd, Zd] = (0, Nd.useState)(!1), [gd, Cd] = (0, Nd.useState)(Jd.claimed || !1);
      return (0, Nd.useEffect)((() => {
        Wd(Jd.progress / Jd.goal)
      }), [Jd.progress, Jd.goal]), gd ? null : (0, Kd.jsxs)("div", {
        className: "Task",
        children: [(0, Kd.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Kd.jsx)(od, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: Jd.text
          })
        }), Jd.progress < Jd.goal ? (0, Kd.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== pd ? (0, Kd.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * pd + "%"
            }
          }) : null, (0, Kd.jsx)("div", {
            className: "TaskProgressText",
            children: `${Jd.progress}/${Jd.goal}`
          })]
        }) : (0, Kd.jsx)(Qd.j, {
          className: "ClaimRewardButton",
          onClick: () => {
            Zd(!0)
          },
          children: (0, Kd.jsx)(od, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Pd ? (0, Kd.jsx)(Gd, {
          task: Jd,
          close: () => {
            Jd.claimed = !0, Cd(!0), Zd(!1)
          }
        }) : null]
      })
    }

    function Gd(dd) {
      let {
        task: Jd,
        close: kd
      } = dd;
      const [pd, Wd] = (0, Nd.useState)({}), [Pd, Zd] = (0, Nd.useState)("closed");
      (0, Nd.useEffect)((() => {
        let dd;
        return "animStart" === Pd && (dd = setTimeout((() => {
          Zd("animEnd")
        }), 700)), () => {
          clearTimeout(dd)
        }
      }), [Pd]), (0, ld.e)((() => {
        Cd.gameBridge.send("completeTask", Jd.text)
      }));
      const od = (0, gd.j)("currencyAmounts");
      return (0, Kd.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Pd)
            if (0 === Jd.rewards.length) kd(), Cd.gameBridge.send("completeTask", Jd.text);
            else {
              const dd = {
                ...Od.b.get("currencyAmounts")
              };
              for (const Jd in pd) dd[Jd] = {
                ...dd[Jd],
                amount: dd[Jd].amount + pd[Jd]
              };
              Od.b.apply({
                currencyAmounts: dd
              }), Zd("closed")
            }
          else "closed" === Pd && (Wd(Jd.rewards.pop()), Zd("animStart"))
        },
        children: [(0, Kd.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Pd ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Pd?"open":"closed"}.png`
        }), (0, Kd.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Pd ? Object.keys(pd).map((dd => {
            const Jd = null === od || void 0 === od ? void 0 : od[dd];
            return !Jd || Jd.hidden ? null : (0, Kd.jsxs)("div", {
              className: "Reward",
              children: [(0, Kd.jsx)(ed.e, {
                name: Jd.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: Jd.iconColour
                }
              }), (0, Kd.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Pd ? 0 : pd[dd]
              })]
            }, dd)
          })) : null
        }), "animStart" === Pd ? (0, Kd.jsx)(vd, {}) : null, (0, Kd.jsx)("div", {
          className: "ChestsLeft",
          children: Jd.rewards.length
        })]
      })
    }

    function vd() {
      const [dd, Jd] = (0, Nd.useState)(0);
      (0, Nd.useEffect)((() => {
        Jd(1)
      }), []);
      return (0, Kd.jsx)(Kd.Fragment, {
        children: Array.from({
          length: 40
        }).map(((Jd, kd) => (0, Kd.jsx)(ed.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * dd * Math.cos(kd / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * dd * Math.sin(kd / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === dd ? 1 : 0
          }
        }, kd)))
      })
    }
    Ld.j.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const dd = new Image,
          Jd = new Image;
        dd.src = "/textures/miscImages/Treasure Chest open.png", Jd.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var xd = kd(2999),
      qd = kd(1140),
      Bd = kd(1904),
      sd = kd(1459),
      ad = kd(313),
      Md = kd(1968),
      Fd = kd(1359);

    function Yd(dd) {
      var Jd, kd;
      let {
        byId: pd,
        localId: Nd
      } = dd;
      return null === Nd ? null : null !== (Jd = null === (kd = pd[Nd]) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : null
    }

    function md(dd) {
      let {
        lbStats: Jd,
        storedState: kd = {}
      } = dd;
      const {
        userContext: pd
      } = (0, qd.c)(), Wd = (0, Md.g)("players", Yd), [Pd, Zd] = (0, Nd.useState)(kd.selectedCat || (null === Jd || void 0 === Jd ? void 0 : Jd[0]) || null), [gd, od] = (0, Nd.useState)(kd.selectedTimeframe || "Today"), [ld, Qd] = (0, Nd.useState)(null);
      (0, Nd.useEffect)((() => {
        null === Pd && null !== Jd && Jd.length > 0 && Zd(Jd[0])
      }), [Jd, Pd]);
      const [Ld, Od] = (0, Nd.useState)(kd.seeingTop || !1), [ed, Rd] = (0, Nd.useState)(!1), Id = (0, Nd.useCallback)((() => {
        null !== Pd && null !== gd && (Cd.gameBridge.send("requestLeaderboard", {
          category: Pd.value,
          timeframe: gd,
          seeTop: Ld
        }), vd(!0), jd && Xd(null))
      }), [Pd, gd, kd, Ld]);
      (0, Nd.useEffect)((() => {
        Id(), kd.selectedCat = Pd, kd.selectedTimeframe = gd, kd.seeingTop = Ld
      }), [Pd, gd, kd, Ld, Id]), (0, Nd.useEffect)((() => {
        if ((null === ld || void 0 === ld ? void 0 : ld.length) > 0)
          if (Ld) Ld && Rd(null === md(ld));
          else {
            for (const dd of ld)
              if (1 === dd.place) return void Rd(!1);
            Rd(!0)
          }
      }), [ld, Ld]), (0, sd.h)("leaderboardResponse", (dd => {
        let {
          category: kd,
          timeframe: pd,
          data: Nd
        } = dd;
        for (let Wd = 0; Wd < Jd; Wd++)
          if (Jd[Wd].value === kd) {
            Zd(Jd[Wd]);
            break
          } od(pd), Qd(Nd), vd(!1)
      }));
      const [Gd, vd] = (0, Nd.useState)(!0);

      function md(dd) {
        const Jd = Yd(Cd.gameBridge.latest("players"));
        for (let kd = 0; kd < dd.length; kd++)
          if (dd[kd].name === Jd) return dd[kd].place;
        return null
      }
      const [bd, Sd] = (0, Nd.useState)(!1), [jd, Xd] = (0, Nd.useState)(null);
      (0, Nd.useEffect)((() => {
        if (ld && !bd) {
          const dd = md(ld);
          dd < (kd.lastSeenPlayerPlace || 0) && Xd(kd.lastSeenPlayerPlace - dd), Sd(!0)
        }
      }), [ld, kd, bd]), (0, Nd.useEffect)((() => () => {
        ld && (kd.lastSeenPlayerPlace = md(ld))
      }), [ld, kd]);
      const fd = (0, Nd.useRef)(null),
        [nd, Ud] = (0, Nd.useState)(void 0);
      return (0, Nd.useEffect)((() => {
        var dd, Jd;
        nd !== (null === (dd = fd.current) || void 0 === dd ? void 0 : dd.offsetHeight) && Ud(null === (Jd = fd.current) || void 0 === Jd ? void 0 : Jd.offsetHeight)
      })), pd.isLoggedIn() ? (0, Kd.jsxs)(Kd.Fragment, {
        children: [(0, Kd.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Kd.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Kd.jsx)(xd.c, {
              options: Jd.map((dd => ({
                label: dd.label,
                value: dd.value
              }))),
              value: Pd,
              onChange: dd => {
                Zd(dd)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Kd.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Kd.jsx)(xd.c, {
              options: ad._c.map((dd => ({
                value: dd,
                label: dd,
                className: "LBDropdownMenuItem"
              }))),
              value: gd,
              onChange: dd => {
                od(dd.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), ed ? (0, Kd.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Od(!Ld)
            },
            children: Ld ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Kd.jsx)("div", {
          className: "LBTableWrapper",
          children: Gd ? (0, Kd.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Kd.jsx)(Fd.b, {})
          }) : null === jd ? (0, Kd.jsx)(Kd.Fragment, {
            children: (0, Kd.jsxs)("table", {
              className: "LBTable",
              children: [(0, Kd.jsx)("thead", {
                className: "LBTableTHead",
                ref: fd,
                children: (0, Kd.jsxs)("tr", {
                  children: [(0, Kd.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Kd.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Kd.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Pd.label.toUpperCase()
                  })]
                })
              }), (0, Kd.jsx)("tbody", {
                children: ld.map((dd => (0, Kd.jsxs)("tr", {
                  className: "LBTableTR " + (dd.name === Wd ? "LBTableTRYou" : ""),
                  children: [(0, Kd.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${dd.place}`
                  }), (0, Kd.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Kd.jsx)(Bd.c, {
                      text: [{
                        entityName: dd.name
                      }]
                    })
                  }), (0, Kd.jsx)("td", {
                    className: "LBTableTD",
                    children: dd.stat
                  })]
                }, dd.name)))
              })]
            })
          }) : (0, Kd.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Xd(null)
            },
            children: (0, Kd.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Kd.jsx)("div", {
                className: "TriangleUp"
              }), (0, Kd.jsx)("div", {
                className: "LBIncreaseText",
                children: `${jd} Place${jd>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Kd.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Kd.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Kd.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var bd = kd(2974),
      Sd = kd(95),
      jd = kd(33),
      Xd = kd(3253);
    const fd = (0, Nd.memo)((function(dd) {
      let {
        show: Jd,
        onClose: kd
      } = dd;
      (0, bd.b)();
      const pd = (0, gd.j)("_tasks"),
        Wd = (0, gd.j)("_availableLeaderboards"),
        [Cd, od] = (0, Nd.useState)({});
      pd && Object.keys(pd).length > 0 && 0 === Object.keys(Cd).length && od(pd);
      const [ld] = (0, Nd.useState)({
        tasks: {},
        leaderboard: {}
      }), Qd = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!pd && Object.keys(pd).length > 0,
          content: (0, Kd.jsx)(Rd, {
            tasks: pd,
            lastDisplayedTasks: Cd
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Wd || void 0 === Wd ? void 0 : Wd.length) > 0,
          content: (0, Kd.jsx)(md, {
            lbStats: Wd,
            storedState: ld.leaderboard
          })
        }
      };

      function Ld() {
        for (const dd in Qd)
          if (Qd[dd].getIsDefined()) return dd;
        return null
      }
      const [Od, ed] = (0, Nd.useState)(Ld());

      function Id() {
        od({
          ...pd
        }), kd()
      }(0, Nd.useEffect)((() => {
        Od || ed(Ld())
      }), [Ld()]), (0, Zd.c)(!0, Od && Jd), (0, Nd.useEffect)((() => {
        Jd && !Od && (console.log("CLOSE"), Id())
      }), [Jd, Od]);
      const [Gd, vd] = (0, Nd.useState)(!1);
      return (0, Nd.useEffect)((() => {
        Jd && Od && !Gd && vd(!0)
      }), [Jd, Gd, Od]), (0, Nd.useEffect)((() => {
        !Gd && pd && "tasks" !== Od && ed("tasks")
      }), [Gd, pd, Od]), (0, Kd.jsx)(Kd.Fragment, {
        children: Od ? (0, Kd.jsx)(Xd.b, {
          className: "RetentionFeaturesWrapper",
          show: Jd,
          children: (0, Kd.jsxs)(Pd.e, {
            close: Id,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Kd.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Kd.jsx)(Ud, {}), (0, Kd.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Kd.jsx)(nd, {
                  setCategory: ed,
                  menuCategories: Qd,
                  selectedCat: Od
                }), (0, Kd.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Qd[Od].content
                })]
              })]
            }), (0, Kd.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Sd.featureFlags.useDiscord && (0, Kd.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Kd.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Kd.jsx)(yd, {
                    tasks: pd
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function nd(dd) {
      let {
        selectedCat: Jd,
        setCategory: kd,
        menuCategories: pd
      } = dd;
      return (0, Kd.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(pd).map((dd => pd[dd].getIsDefined() ? (0, Kd.jsx)("div", {
          className: "MenuHeaderCategory " + (dd === Jd ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            kd(dd)
          },
          children: pd[dd].Title
        }, dd) : null))
      })
    }

    function Ud() {
      const dd = (0, gd.j)("currencyAmounts");
      return (0, Kd.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== dd && void 0 !== dd ? dd : {}).map((Jd => {
          const kd = dd[Jd];
          return kd.hidden ? null : (0, Kd.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Kd.jsx)(ed.e, {
              name: kd.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: kd.iconColour
              }
            }), (0, Kd.jsx)("div", {
              className: "UiCurrencyAmount",
              children: kd.amount
            })]
          }, Jd)
        }))
      })
    }

    function yd(dd) {
      let {
        tasks: Jd
      } = dd;
      return (0, Kd.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Kd.jsx)(ed.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            jd.i.setItem("DiscordPressed", !0), Cd.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in Jd && Ld.j.nO("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Kd.jsx)(Wd.e, {})]
      })
    }
    var Dd = kd(22),
      Td = kd(1670),
      Ed = kd(36703),
      cd = kd(9134),
      hd = kd(4482),
      rd = kd(149),
      ud = kd(1230),
      td = kd(1384),
      Vd = kd(2530),
      zd = kd(1211),
      Hd = kd(1675),
      wd = kd(2324),
      Ad = kd(2319),
      dJ = kd(1858),
      JJ = kd(2013),
      kJ = kd(1279),
      pJ = kd(1492),
      NJ = kd(36877),
      WJ = kd(36880),
      PJ = kd(36887),
      ZJ = kd(36890),
      gJ = kd(36896),
      CJ = kd(2589);

    function KJ(dd) {
      let {
        playersHere: Jd,
        exclude: kd,
        QG: pd
      } = dd;
      const {
        t: Wd
      } = (0, zd.B)(), Pd = (0, CJ.o)(CJ.j), [Zd, gd] = (0, Nd.useState)([]), Cd = [], od = (dd, Jd) => {
        const pd = [...kd, ...Cd.map((dd => dd.player.name))];
        Cd.length < 3 && !(0, WJ.l)(pd, dd.name) && Cd.push({
          player: dd,
          status: Jd
        })
      };
      for (const Nd of Jd) od((0, gJ.h)(Nd.name, Nd.cosmetics, Nd.ranks), Wd("worldSocial:inThisWorld"));
      if ("loaded" === Pd.state.status)
        for (const Nd of Pd.state.recentPlayers) Nd.preview.name && !Nd.preview.isError && od({
          ...Nd.preview,
          location: {
            status: "offline"
          }
        }, Wd("worldSocial:playedWithYou"));
      const ld = dd => {
        gd((Jd => [...Jd, dd])), pd(dd).finally((() => {
          gd((Jd => Jd.filter((Jd => Jd !== dd))))
        }))
      };
      return (0, Kd.jsx)(Kd.Fragment, {
        children: Cd.map(((dd, Jd) => {
          let {
            player: kd,
            status: pd
          } = dd;
          return (0, Kd.jsx)(gJ.f, {
            zIndex: Cd.length - Jd,
            player: kd,
            status: pd,
            onSendFriendRequest: () => {
              ld(kd.name)
            },
            actions: (0, Kd.jsx)(td.f, {
              tooltipInner: (0, Kd.jsx)(Kd.Fragment, {
                children: Wd("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Kd.jsx)(Qd.d, {
                className: "FriendRequestButton",
                disabled: Zd.includes(kd.name),
                ariaLabel: `${Wd("recentPlayers:addFriend")} ${kd.name}`,
                onClick: () => {
                  ld(kd.name)
                },
                children: (0, Kd.jsx)(ed.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${kd.name}`)
        }))
      })
    }
    var oJ = kd(36907),
      lJ = kd(36911),
      QJ = kd(1245),
      LJ = kd(1515),
      OJ = kd(4480),
      eJ = kd(284),
      RJ = kd(4460);
    const IJ = ["auto", "auto_existing"];

    function GJ(dd) {
      return IJ.includes(dd)
    }

    function vJ(dd, Jd) {
      const kd = (0, QJ.tb)(dd);
      return null !== Jd && (0, QJ.tb)(Jd) === kd || (0, RJ.d)().some((dd => (0, QJ.tb)(dd.name) === kd))
    }
    const xJ = new Set;

    function qJ(dd) {
      return `worldSocialSeen:${dd}`
    }

    function BJ(dd) {
      return !dd || xJ.has(dd) || !0 === jd.i.getItem(qJ(dd))
    }

    function sJ(dd) {
      dd && !xJ.has(dd) && (xJ.add(dd), jd.i.setItem(qJ(dd), !0))
    }
    var iJ = kd(2369),
      aJ = kd(2372);

    function MJ(dd) {
      let {
        show: Jd,
        onClose: kd,
        opener: pd
      } = dd;
      const {
        lobbyName: Wd,
        shownLobbyName: Zd
      } = (0, Md.k)("connectedGame");
      return (0, Nd.useEffect)((() => {
        Jd && (0, pJ.reportAnalyticsClick)({
          id: "world_social.open",
          value: pd
        })
      }), [Jd]), (0, Kd.jsx)(Pd.e, {
        show: Jd && null !== Wd,
        close: kd,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== pd,
        children: Jd && null !== Wd && (0, Kd.jsx)(FJ, {
          lobbyName: Wd,
          worldCode: null !== Zd && void 0 !== Zd ? Zd : Wd,
          onClose: kd
        }, Wd)
      })
    }

    function FJ(dd) {
      var Jd;
      let {
        lobbyName: kd,
        worldCode: pd,
        onClose: Wd
      } = dd;
      const {
        t: Pd
      } = (0, zd.B)(), Zd = (0, Nd.useRef)(null), {
        settings: gd,
        loading: Cd,
        answered: od,
        change: ld,
        retry: Ld
      } = (0, NJ.g)(kd), Od = (0, Hd.j)(), Rd = (0, Md.k)("players"), Id = (0, Md.k)("hiddenPlayerNames"), [Gd, vd] = (0, Nd.useState)([]), [xd, Bd] = (0, Nd.useState)([]), [sd, ad] = (0, Nd.useState)(!1), Yd = (0, iJ.d)(), md = (0, Nd.useMemo)((() => {
        var dd, Jd;
        const kd = null === Rd.localId ? null : null !== (dd = null === (Jd = Rd.byId[Rd.localId]) || void 0 === Jd ? void 0 : Jd.name) && void 0 !== dd ? dd : null;
        return Rd.ids.flatMap((dd => {
          const Jd = Rd.byId[dd];
          return null !== Jd && void 0 !== Jd && Jd.name && Jd.name !== kd ? [{
            name: Jd.name,
            cosmetics: Jd.cosmetics,
            ranks: Jd.ranks
          }] : []
        }))
      }), [Rd]), bd = (0, Nd.useMemo)((() => (0, WJ.j)(Od.friends, kd, md.map((dd => dd.name)))), [Od.friends, kd, md]), jd = Sd.featureFlags.canSeeRealPlayerNames ? md.filter((dd => null === (0, kJ.d)(dd.name, Id))) : [], Xd = null !== gd && void 0 !== gd && gd.canManage ? gd : null, fd = null !== Xd, nd = null !== (Jd = null === gd || void 0 === gd ? void 0 : gd.visibility) && void 0 !== Jd ? Jd : null, Ud = "whitelist" === (null === Xd || void 0 === Xd ? void 0 : Xd.visibility), yd = "private" === nd || "whitelist" === nd && !fd, {
        userContext: Dd
      } = (0, qd.c)();
      (0, Nd.useEffect)((() => {
        fd && vJ(kd, Dd.getPersonalWorldLobbyName()) && sJ(Dd.whamm)
      }), [fd, kd, Dd]);
      const Td = yd ? Pd("whitelist" === nd ? "socialBar:inviteWorldManagersOnly" : fd ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        cd = null === Td;
      (0, Nd.useEffect)((() => yd ? void 0 : dJ.f.quietFriendAdded()), [yd]), (0, Nd.useEffect)((() => dJ.f.quietFriendRequests()), []);
      const CJ = (0, Nd.useRef)(!1);
      (0, Nd.useEffect)((() => {
        const dd = Zd.current,
          Jd = !CJ.current;
        CJ.current = !0;
        const kd = null === document.activeElement || document.activeElement === document.body;
        null !== dd && void 0 !== dd && dd.contains(document.activeElement) || !Jd && !kd || (0, Ed.f)() || null === dd || void 0 === dd || dd.focus({
          preventScroll: !0
        })
      }), [cd]), (0, Nd.useEffect)((() => {
        const dd = dd => {
          "Escape" !== dd.key || null !== document.activeElement && document.activeElement !== document.body || Wd()
        };
        return document.addEventListener("keydown", dd), () => {
          document.removeEventListener("keydown", dd)
        }
      }), [Wd]);
      const QJ = null === gd && !od,
        LJ = (Cd || Od.loading) && 0 === Od.friends.length,
        OJ = Od.friends.flatMap((dd => dd.name ? [dd.name] : [])),
        eJ = Gd.filter((dd => !(0, WJ.l)(OJ, dd))),
        RJ = bd.length + 3,
        IJ = eJ.length + RJ,
        GJ = sd ? Od.requests : Od.requests.slice(0, 1),
        xJ = async function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const kd of (0, WJ.o)(dd, hd.x)) {
            if (!await ld({
                whitelistAdd: kd
              }, (dd => (0, WJ.t)(dd, kd, !0)), {
                quiet: Jd
              })) return !1
          }
          return !0
        }, qJ = dd => {
          if (Ud && Xd) return {
            on: (0, WJ.l)(Xd.whitelist, dd),
            onChange: Jd => {
              (0, pJ.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: Jd ? "on" : "off"
              }), ld(Jd ? {
                whitelistAdd: [dd]
              } : {
                whitelistRemove: dd
              }, (kd => (0, WJ.t)(kd, [dd], Jd)))
            }
          }
        }, BJ = async (dd, Jd) => {
          (0, pJ.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: Jd
          });
          const kd = await (0, Ad.i)(dd, "world_social");
          return (0, Ad.d)(kd, dd, {
            announceSent: !1
          }), "failed" !== kd.kind && ("sent" === kd.kind && vd((Jd => (0, WJ.l)(Jd, dd) ? Jd : [...Jd, dd])), Ud && await xJ([dd]), !0)
        };
      return (0, Kd.jsxs)("div", {
        ref: Zd,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: dd => {
          dd.target === dd.currentTarget && " " === dd.key && dd.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Kd.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Kd.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Pd("worldSocial:title")
          }), (0, Kd.jsx)(Qd.i, {
            className: "WorldSocialClose",
            onClick: Wd
          })]
        }), QJ && (0, Kd.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Kd.jsx)(Fd.b, {})
        }), !QJ && (0, Kd.jsxs)(Kd.Fragment, {
          children: [(0, Kd.jsx)(PJ.c, {
            worldCode: pd,
            message: Td
          }), null === gd && !Cd && (0, Kd.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: Ld,
            children: Pd("worldSocial:loadFailed")
          }), fd && null !== nd && (0, Kd.jsx)(ZJ.c, {
            visibility: nd,
            onPick: dd => {
              (async dd => {
                if (dd === nd) return;
                (0, pJ.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: dd
                });
                const Jd = [...(0, lJ.c)(kd), ...xd],
                  pd = "whitelist" === dd && gd ? (0, WJ.g)(bd, Jd, gd.whitelist) : [];
                await ld({
                  setVisibility: dd
                }, (Jd => ({
                  ...Jd,
                  visibility: dd
                }))) && await xJ(pd)
              })(dd)
            }
          }), Od.requests.length > 0 && (0, Kd.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Kd.jsx)(Vd.c, {
              label: (0, Kd.jsxs)(Kd.Fragment, {
                children: [(0, Kd.jsx)(ed.e, {
                  name: JJ.f
                }), " ", Pd("socialBar:requests")]
              }),
              meta: (0, Kd.jsxs)(Kd.Fragment, {
                children: [Od.requests.length, Od.requests.length === ud.l && (0, Kd.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Pd("socialBar:limitReached")
                }), !sd && Od.requests.length > 1 && (0, Kd.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    ad(!0)
                  },
                  children: Pd("worldSocial:moreRequests", {
                    count: Od.requests.length - 1
                  })
                })]
              })
            }), (0, Kd.jsx)("div", {
              className: "PlayerRows",
              children: GJ.map(((dd, Jd) => (0, Kd.jsx)(gJ.f, {
                zIndex: GJ.length - Jd,
                player: dd,
                actions: (0, Kd.jsxs)(Kd.Fragment, {
                  children: [(0, Kd.jsx)(td.f, {
                    tooltipInner: (0, Kd.jsx)(Kd.Fragment, {
                      children: Pd("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Kd.jsx)(Qd.d, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Pd("general:accept")} ${dd.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Ad.f)(dd.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Kd.jsx)(ed.e, {
                        name: "check"
                      })
                    })
                  }), (0, Kd.jsx)(td.f, {
                    tooltipInner: (0, Kd.jsx)(Kd.Fragment, {
                      children: Pd("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Kd.jsx)(Qd.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Pd("general:decline")} ${dd.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Ad.f)(dd.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Kd.jsx)(ed.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${dd.name}`)))
            })]
          }), (0, Kd.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Kd.jsx)(Vd.c, {
              label: (0, Kd.jsxs)(Kd.Fragment, {
                children: [(0, Kd.jsx)(ed.e, {
                  name: JJ.c
                }), " ", Pd("socialBar:friends")]
              }),
              meta: Od.loaded && !yd ? Od.friends.length : void 0
            }), (0, Kd.jsx)(oJ.e, {
              label: Pd("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: Pd("worldSocial:addFriendPlaceholder"),
              onSubmit: async dd => await BJ(dd, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), LJ && (0, Kd.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Kd.jsx)(Fd.b, {})
            }), !LJ && (0, Kd.jsxs)(Kd.Fragment, {
              children: [(0, Kd.jsxs)("div", {
                className: "PlayerRows",
                children: [eJ.map(((dd, Jd) => (0, Kd.jsx)(gJ.f, {
                  zIndex: IJ - Jd,
                  player: (0, gJ.h)(dd, null),
                  status: Pd("worldSocial:requestSent"),
                  Do: qJ(dd)
                }, `request:${dd}`))), !yd && bd.map(((dd, Jd) => (0, Kd.jsx)(gJ.b, {
                  zIndex: RJ - Jd,
                  row: dd,
                  Do: qJ(dd.friend.name),
                  canInvite: (0, WJ.c)(gd) && "here" !== dd.place,
                  invited: xd.includes(dd.friend.name),
                  onInvite: () => {
                    (async dd => {
                      (0, pJ.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const Jd = () => {
                        Bd((Jd => Jd.filter((Jd => Jd !== dd))))
                      };
                      Bd((Jd => [...Jd, dd]));
                      const pd = (0, WJ.r)(gd, dd);
                      if ("none" !== pd) {
                        const kd = xJ([dd], "quiet" === pd);
                        if ("required" === pd && !await kd) return void Jd()
                      }
                      await (0, wd.k)(dd, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, lJ.g)(kd, dd), setTimeout(Jd, rd.t)) : Jd()
                    })(dd.friend.name)
                  }
                }, dd.friend.name))), Od.loaded && 0 === Od.friends.length && (0, Kd.jsx)(KJ, {
                  playersHere: jd,
                  exclude: Gd,
                  QG: dd => BJ(dd, "suggestion")
                })]
              }), Ud && Od.loaded && 0 === Od.friends.length && 0 === eJ.length && (0, Kd.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Pd("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), Yd && (0, Kd.jsxs)(Qd.G, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, aJ.f)({
              page: "players",
              source: "invite_popup"
            }), Wd()
          },
          children: [(0, Kd.jsx)(ed.e, {
            name: "users-gear"
          }), " ", Pd("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var YJ = kd(2394),
      mJ = kd(2365);

    function bJ(dd) {
      let {
        show: Jd,
        onClose: kd,
        option: pd
      } = dd;
      const Wd = (0, Md.g)("connectedGame", (dd => (0, YJ.d)(dd) ? dd.lobbyName : null));
      return function(dd) {
        const {
          gameEntrySource: Jd,
          loadingOverlayVisible: kd
        } = (0, Dd.j)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: pd
        } = (0, qd.c)(), Wd = (0, Md.k)("localPlayerAlive"), Pd = (0, Md.g)("players", (dd => null !== dd.localId && void 0 !== dd.byId[dd.localId])), Zd = (0, mJ.o)(), gd = (0, Nd.useRef)(null), Cd = (0, Nd.useRef)(null), Kd = "worldCreation" === Jd, od = pd.whamm, ld = pd.getPersonalWorldLobbyName();
        (0, Nd.useEffect)((() => {
          var Jd;
          null !== dd && (null === (Jd = Cd.current) || void 0 === Jd ? void 0 : Jd.lobbyName) !== dd && null !== fJ(dd, Kd, od, ld) && (Cd.current = (0, NJ.e)(dd))
        }), [Kd, dd, od, ld]), (0, Nd.useEffect)((() => {
          if (null !== dd && (!kd && Wd && Pd)) return Zd.whenShown((() => {
            var Jd;
            const kd = gd.current === dd ? null : fJ(dd, Kd, od, ld);
            if (null === kd) return;
            const pd = (null === (Jd = Cd.current) || void 0 === Jd ? void 0 : Jd.lobbyName) === dd ? Cd.current : (0, NJ.e)(dd);
            Cd.current = null, gd.current = dd,
              function(dd, Jd, kd, pd) {
                const {
                  lobbyName: Nd
                } = dd, Wd = () => {
                  ! function(dd, Jd) {
                    if (!TJ()) return void Jd(!0);
                    const kd = performance.now() + yJ;
                    let pd = 0;
                    const Nd = () => {
                      pd = TJ() ? 0 : pd + 1, pd >= 2 ? Jd(!0) : !DJ(dd) || performance.now() > kd ? Jd(!1) : setTimeout(Nd, UJ)
                    };
                    setTimeout(Nd, UJ)
                  }(Nd, (Wd => {
                    pd();
                    const Pd = "auto_existing" === Jd && BJ(kd);
                    Wd && DJ(Nd) && !jJ(Nd) && !Pd && (nJ(dd) ? XJ(Nd) : (XJ(Nd), sJ(kd), function(dd) {
                      const Jd = eJ.c.world_social_popup_v1;
                      return (0, eJ.g)("world_social_popup_v1"), (0, pJ.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${Jd}:${(0,OJ.d)()}:${dd}`
                      }), (0, LJ.flushClientAnalyticsEvents)(), "auto_open" === Jd
                    }(Jd) && ((0, NJ.c)(dd), Ld.j.nO("toggleMenu", `inviteLink|${Jd}`), "inviteLink" !== Dd.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === Jd && !nJ(dd)) return void Wd();
                dd.response.then((dd => {
                  if (!("error" in dd)) return dd.settings.canManage ? void Wd() : (XJ(Nd), void pd());
                  pd()
                }))
              }(pd, kd, od, (() => {
                gd.current === dd && (gd.current = null)
              }))
          }))
        }), [Zd, Kd, kd, dd, Wd, Pd, od, ld])
      }(Wd), (0, Nd.useEffect)((() => {
        Jd && null !== Wd && XJ(Wd)
      }), [Jd, Wd]), null !== Wd ? (0, Kd.jsx)(MJ, {
        show: Jd,
        onClose: kd,
        opener: GJ(pd) ? pd : "icon"
      }) : (0, Kd.jsx)(cd.b, {
        show: Jd,
        onClose: kd
      })
    }
    const SJ = new Set;

    function jJ(dd) {
      return SJ.has(dd) || !!jd.k.getItem(`worldSocialShown:${dd}`)
    }

    function XJ(dd) {
      SJ.add(dd), jd.k.setItem(`worldSocialShown:${dd}`, !0)
    }

    function fJ(dd, Jd, kd, pd) {
      return jJ(dd) ? null : function(dd) {
        let {
          justMade: Jd,
          playerId: kd,
          lobbyName: pd,
          personalWorld: Nd
        } = dd;
        return Jd ? "auto" : !BJ(kd) && vJ(pd, Nd) ? "auto_existing" : null
      }({
        justMade: Jd,
        playerId: kd,
        lobbyName: dd,
        personalWorld: pd
      })
    }

    function nJ(dd) {
      let {
        answer: Jd
      } = dd;
      return null !== Jd && "settings" in Jd && !Jd.settings.canManage
    }
    const UJ = 500,
      yJ = 3e4;

    function DJ(dd) {
      return "inGame" === Dd.d.get("gameState") && Cd.gameBridge.latest("connectedGame").lobbyName === dd
    }

    function TJ() {
      return (0, Ed.f)() || Dd.d.get("loadingOverlayVisible") || (0, Td.n)()
    }
    var EJ = kd(36919),
      cJ = kd(3014),
      hJ = kd(1975),
      rJ = kd(3011);

    function uJ(dd, Jd, kd) {
      return rJ.d.overridesTexture(dd) ? rJ.d.getTexture(dd, Jd).url : kd
    }
    var tJ = kd(10077);
    const VJ = (dd, Jd) => {
        (0, Nd.useEffect)((() => {
          setTimeout((() => {
            dd && dd.current && dd.current.focus()
          }), 1)
        }), [Jd])
      },
      zJ = (0, Nd.memo)((function(dd) {
        let {
          isInputActive: Jd,
          onClose: kd,
          onChange: pd,
          textAreaRef: Nd,
          fontSize: Wd,
          lineHeight: Pd,
          currText: Zd
        } = dd;
        return (0, Kd.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Kd.jsx)("img", {
            src: uJ("board_full", cJ.h.BLOCK, tJ),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Kd.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Zd,
            ref: Nd,
            style: {
              fontSize: `${Wd}rem`,
              lineHeight: `${Pd}rem`
            },
            onKeyDown: dd => {
              var Jd;
              "Escape" !== dd.key && (dd.stopPropagation(), "Tab" === dd.key && function(dd) {
                dd.preventDefault();
                const Jd = dd.target,
                  {
                    value: kd
                  } = Jd;
                let pd = Jd.selectionStart,
                  Nd = Jd.selectionEnd,
                  Wd = kd.slice(pd, Nd);
                if (!Wd.includes("\n") && !dd.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; pd > 0 && "\n" !== kd[pd - 1];) pd--;
                const Pd = "\n" === kd[Nd - 1];
                Pd && Nd--;
                Wd = kd.slice(pd, Nd);
                const Zd = Wd.split("\n").map((Jd => dd.shiftKey ? Jd.replace(/^\t/, "") : "\t" + Jd)).join("\n");
                if (dd.shiftKey && kd.slice(pd, Nd) === Zd) return;
                let {
                  selectionStart: gd
                } = Jd;
                Jd.setSelectionRange(pd, Nd), gd > pd && (!dd.shiftKey || "\t" === Wd[0]) && (gd += dd.shiftKey ? -1 : 1);
                Nd = pd + Zd.length + (Pd ? 1 : 0), document.execCommand("insertText", !1, Zd), Jd.setSelectionRange(gd, Nd)
              }(dd), /^F\d+$/i.test(dd.code) && null !== (Jd = hJ.x.OpenCodeEditor) && void 0 !== Jd && Jd.includes(dd.code) && kd())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: pd
          })]
        })
      }));

    function HJ(dd) {
      return 1.3 * dd
    }
    var wJ = kd(1723);
    const AJ = (0, Nd.memo)((function(dd) {
        let {
          show: Jd,
          onOpen: kd,
          onClose: pd
        } = dd;
        const [Wd, Zd] = (0, Nd.useState)(null), [gd, od] = (0, Nd.useState)(""), [ld, Ld] = (0, Nd.useState)(0), [Od, ed] = (0, Nd.useState)(null), [Rd, Id] = (0, Nd.useState)({
          text: "",
          textSize: 0
        }), Gd = (dd, Jd) => Od ? (0, EJ.m)(dd, Jd, Od.width, Od.height) : (0, EJ.f)(dd, Jd), vd = dd => {
          od(Gd(gd, dd)), Ld(dd), jd.i.setItem("lastBoardTextSize", dd)
        }, xd = () => {
          pd(), Od && gd === Rd.text && ld === Rd.textSize || Cd.gameBridge.send("writeOnBoard", {
            pos: Wd,
            text: gd,
            textSize: ld
          })
        };
        (0, Md.d)("boardEditRequested", (dd => {
          var Nd, Wd;
          if (!Sd.featureFlags.canSeePlayerWrittenText) return;
          if (null === dd) return Zd(null), void(Jd && pd());
          const {
            pos: Pd,
            noticeboardSpan: gd,
            text: Cd
          } = dd;
          Zd(Pd), ed(gd), od(Cd);
          const Kd = null !== (Nd = null !== (Wd = dd.textSize) && void 0 !== Wd ? Wd : jd.i.getItem("lastBoardTextSize")) && void 0 !== Nd ? Nd : 0;
          Ld(Kd), Id({
            text: Cd,
            textSize: Kd
          }), jd.i.setItem("lastBoardTextSize", Kd), kd()
        }));
        const qd = (0, Nd.useRef)(null);
        VJ(qd, Jd), (0, wJ.n)(qd, {
          kind: "sign",
          submit: xd
        });
        const Bd = function(dd, Jd) {
            const kd = EJ.c[dd];
            if (!Jd) return kd.uiFontSize;
            const {
              numLines: pd,
              charsPerLine: Nd
            } = (0, EJ.v)(Jd.width, Jd.height, dd);
            return kd.uiFontSize * Math.min(kd.charsPerLine / Nd, kd.numLines / pd)
          }(ld, Od),
          sd = HJ(Bd);
        return (0, Kd.jsxs)(Pd.e, {
          className: "WriteOnBoardBg",
          close: xd,
          escDoesExit: !0,
          show: Jd,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Kd.jsx)(zJ, {
            isInputActive: () => Jd,
            onClose: xd,
            onChange: dd => {
              od(Gd(dd.target.value, ld))
            },
            textAreaRef: qd,
            fontSize: Bd,
            lineHeight: sd,
            currText: gd
          }), (0, Kd.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Kd.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Kd.jsx)(Qd.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                vd(0)
              },
              disabled: 0 === ld,
              children: "Small"
            }), (0, Kd.jsx)(Qd.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                vd(1)
              },
              disabled: 1 === ld,
              children: "Medium"
            }), (0, Kd.jsx)(Qd.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                vd(2)
              },
              disabled: 2 === ld,
              children: "Large"
            })]
          })]
        })
      })),
      dk = (0, Nd.memo)((function(dd) {
        let {
          show: Jd,
          onOpen: kd,
          onClose: pd
        } = dd;
        const [Wd, Zd] = (0, Nd.useState)(""), gd = () => {
          pd(), Cd.gameBridge.send("writeNameTag", Wd)
        };
        (0, sd.h)("EditNameTag", (dd => {
          Sd.featureFlags.canSeePlayerWrittenText && null !== dd && (Zd(dd), kd())
        }));
        const od = (0, Nd.useRef)(null);
        VJ(od, Jd), (0, wJ.n)(od, {
          kind: "nameTag",
          submit: gd
        });
        const ld = EJ.E.nameTag.uiFontSize,
          Ld = HJ(ld);
        return (0, Kd.jsxs)(Pd.e, {
          className: "WriteOnBoardBg",
          close: gd,
          escDoesExit: !0,
          show: Jd,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Kd.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Kd.jsx)(zJ, {
              isInputActive: () => Jd,
              onClose: gd,
              onChange: dd => {
                const Jd = dd.target.value.replaceAll("\n", "");
                Zd((0, EJ.q)(Jd, "nameTag"))
              },
              textAreaRef: od,
              fontSize: ld,
              lineHeight: Ld,
              currText: Wd
            })
          }), (0, Kd.jsx)(Qd.d, {
            onClick: gd,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Jk = kd(18427);
    const kk = (0, Nd.memo)((function(dd) {
      let {
        show: Jd,
        onOpen: kd,
        onClose: pd
      } = dd;
      const [Wd, Zd] = (0, Nd.useState)(""), [gd, od] = (0, Nd.useState)(0), [ld, Ld] = (0, Nd.useState)(!1), [Od, ed] = (0, Nd.useState)(["", "", "", "", "", "", "", "", "", ""]), [Rd, Id] = (0, Nd.useState)("Title"), [Gd, vd] = (0, Nd.useState)(!0), [xd, qd] = (0, Nd.useState)(!1);
      (0, sd.h)("EditBook", (dd => {
        let {
          pages: Jd,
          title: pd,
          isPublished: Nd
        } = dd;
        var Wd;
        Sd.featureFlags.canSeePlayerWrittenText && (null !== Jd ? (ed(Jd), Zd(null !== (Wd = Jd[0]) && void 0 !== Wd ? Wd : ""), Id(pd), od(0), Ld(!1), vd(!Nd), qd(!1), kd()) : ed(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const Bd = (0, Nd.useRef)(null),
        ad = (0, Nd.useRef)(null);
      VJ(Bd, Jd), (0, wJ.n)(Bd, {
        kind: "book"
      }), (0, wJ.n)(ad, {
        kind: "iC"
      });
      const Md = EJ.E.book.uiFontSize,
        Fd = HJ(Md),
        Yd = () => {
          (Gd || xd) && Cd.gameBridge.send("writeBook", {
            pages: [...Od],
            title: Rd,
            published: !Gd && xd
          })
        },
        md = dd => {
          ld && (Od[gd] = Wd, Ld(!1)), Zd(Od[dd]), od(dd)
        };
      return (0, Kd.jsxs)(Pd.e, {
        className: "WriteOnBoardBg",
        close: () => {
          pd(), Od[gd] = Wd, Yd()
        },
        escDoesExit: !0,
        show: Jd,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Kd.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Kd.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Rd,
            ref: ad,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Fd}rem`
            },
            onKeyDown: dd => {
              Gd && dd.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: dd => {
              let Jd = dd.target.value;
              Jd = (0, EJ.q)(Jd, "iC"), Id(Jd)
            },
            readOnly: !Gd
          }), (0, Kd.jsx)("img", {
            src: uJ("book_page", cJ.h.ITEM, Jk),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Kd.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Kd.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Wd,
              ref: Bd,
              style: {
                fontSize: `${Md}rem`,
                lineHeight: `${Fd}rem`
              },
              onKeyDown: dd => {
                Gd && dd.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: dd => {
                const Jd = dd.target.value;
                Zd((0, EJ.q)(Jd, "book")), Ld(!0)
              },
              readOnly: !Gd
            })
          })]
        }), (0, Kd.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Kd.jsx)(Qd.d, {
            disabled: 0 === gd,
            onClick: () => {
              md(gd - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Kd.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Kd.jsx)(Qd.d, {
            disabled: 9 === gd,
            onClick: () => {
              md(gd + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Kd.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Kd.jsx)(Qd.d, {
            onClick: () => {
              vd(!Gd), qd(!0)
            },
            className: "BookNavButton",
            children: Gd ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var pk = kd(36783),
      Nk = kd(8588),
      Wk = kd(1404),
      Pk = kd(1924);

    function Zk(dd) {
      let {
        show: Jd,
        buttons: kd
      } = dd;
      const {
        t: pd
      } = (0, zd.B)(), Wd = (0, Nd.useRef)(null);
      return (0, Nd.useEffect)((() => {
        var dd, kd;
        const pd = Jd ? (0, pk.D)() : null;
        if (!pd || !(0, Wk.d)()) return;
        const Nd = (0, pk.m)().findIndex((dd => dd.id === pd));
        (0, Nk.l)(null !== (dd = null === (kd = Wd.current) || void 0 === kd ? void 0 : kd.children[Nd]) && void 0 !== dd ? dd : null)
      }), [Jd]), 0 === kd.length ? null : (0, Kd.jsx)("div", {
        ref: Wd,
        className: "ClientGameInventoryButtons",
        onPointerDown: dd => {
          dd.stopPropagation()
        },
        onPointerUp: dd => {
          dd.stopPropagation()
        },
        children: kd.map((dd => {
          const Jd = pd(dd.labelKey);
          return (0, Kd.jsxs)(Qd.j, {
            className: dd.className,
            disabled: dd.disabled,
            onClick: () => {
              (0, pk.w)(dd)
            },
            ariaLabel: dd.iconOnly ? Jd : void 0,
            title: dd.iconOnly ? Jd : void 0,
            children: [dd.icon && (0, Kd.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === dd.icon.kind && (0, Kd.jsx)(Pk.d, {
                itemName: dd.icon.name,
                amount: 0
              }), "image" === dd.icon.kind && (0, Kd.jsx)("img", {
                src: dd.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === dd.icon.kind && (0, Kd.jsx)(ed.e, {
                name: dd.icon.name
              })]
            }), !dd.iconOnly && Jd]
          }, dd.id)
        }))
      })
    }
    var gk = kd(36926),
      Ck = kd(2610),
      Kk = kd(9250),
      lk = kd(36701),
      Qk = kd(36692);
    let Lk = null;
    window.setShowInventoryAdsOverride = dd => {
      Lk = dd
    };
    const Ok = 24e4;
    var ek = kd(1928);

    function Rk(dd) {
      var Jd;
      let {
        draggedInfo: {
          name: kd,
          attributes: pd,
          amount: Nd
        },
        toAddRef: Wd
      } = dd;
      return (0, Kd.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Wd,
        children: (0, Kd.jsx)(Pk.d, {
          itemName: kd,
          amount: Nd,
          enchantmentTier: null === pd || void 0 === pd || null === (Jd = pd.customAttributes) || void 0 === Jd ? void 0 : Jd.enchantmentTier,
          bar: (0, ek.f)(pd)
        })
      })
    }

    function Ik(dd) {
      let {
        className: Jd = "",
        displayInfo: kd,
        domRef: pd
      } = dd;
      return (0, Kd.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${Jd}`,
        ref: pd,
        children: [(0, Kd.jsx)(Bd.c, {
          text: (0, ad.yb)(kd.name, {
            fontStyle: kd.fontStyle
          })
        }), (0, Kd.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Kd.jsx)(Bd.c, {
            text: kd.desc
          })
        })]
      })
    }

    function Gk(dd) {
      let {
        info: Jd,
        draggedInfo: kd
      } = dd;
      const pd = (0, Nd.useRef)(null);
      return (0, Nd.useLayoutEffect)((() => {
        const dd = pd.current,
          {
            left: kd,
            top: Nd
          } = function(dd, Jd, kd, pd) {
            const Nd = pd.left * kd.width / 100 + 4,
              Wd = kd.width - pd.right * kd.width / 100 - 4 - Jd.width,
              Pd = pd.top * kd.height / 100 + 4,
              Zd = kd.height - 4 - Jd.height;
            return {
              left: Math.max(Nd, Math.min(dd.x - Jd.width / 2, Wd)),
              top: Math.max(Pd, Math.min(dd.y - 48 - Jd.height, Zd))
            }
          }({
            x: Jd.initTouchX,
            y: Jd.initTouchY
          }, {
            width: dd.offsetWidth,
            height: dd.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, Dd.d.get("notchSize"));
        dd.style.left = `${kd}px`, dd.style.top = `${Nd}px`
      }), [Jd]), (0, Kd.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: pd,
        children: [(0, Kd.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: kd.amount / Jd.maxAmount * 100 + "%"
          }
        }), (0, Kd.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [kd.amount, "/", Jd.maxAmount]
        })]
      })
    }
    var vk = kd(1044),
      xk = kd.n(vk),
      qk = kd(193);
    const Bk = (0, Nd.memo)((function(dd) {
      let {
        show: Jd,
        onOpen: kd,
        onClose: pd
      } = dd;
      const Wd = (0, Nd.useRef)({
          pos: null
        }),
        [Zd, gd] = (0, Nd.useState)([0, 0, 0, 0]),
        {
          userContext: od
        } = (0, qd.c)();
      (0, Md.d)("ironChestOpenRequested", (dd => {
        let {
          pos: Jd,
          ownerDbId: pd,
          cachedPasskey: Nd
        } = dd;
        if (Wd.current.pos = Jd, pd !== od.whamm) return null !== Nd ? (gd(Nd), void ld(Nd)) : void kd();
        ld(Zd)
      })), (0, Md.d)("localEffectUpdated", (dd => {
        "Thief" === dd && pd()
      }));
      const ld = dd => {
        const {
          pos: Jd
        } = Wd.current;
        Cd.gameBridge.send("openIronChest", {
          pos: Jd,
          oK: dd
        })
      };
      return (0, Kd.jsx)(Pd.e, {
        className: "IronChestPasskeyInputScreenOuter",
        close: pd,
        escDoesExit: !0,
        show: Jd,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Kd.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Kd.jsx)(sk, {
            oK: Zd,
            onPasskeyUpdated: gd,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              ld(Zd)
            }
          })
        })
      })
    }));

    function sk(dd) {
      let {
        className: Jd = "",
        oK: kd,
        onPasskeyUpdated: pd,
        confirmText: Nd,
        onConfirm: Wd
      } = dd;
      const {
        t: Pd
      } = (0, zd.B)();
      return (0, Kd.jsxs)("div", {
        className: `${Jd} IronChestPasskeyInput`,
        children: [(0, Kd.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Pd("ironChest:passkeyInputTitle")
        }), (0, Kd.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(qk.g.ironChestPasskeyLength).fill(0).map(((dd, Jd) => (0, Kd.jsx)(ik, {
            digit: kd[Jd],
            onPasskeyDigitUpdated: dd => {
              const Nd = [...kd];
              Nd[Jd] = dd, pd(Nd)
            }
          }, Jd)))
        }), (0, Kd.jsx)(Qd.j, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Wd,
          children: Pd(Nd)
        })]
      })
    }

    function ik(dd) {
      let {
        digit: Jd,
        onPasskeyDigitUpdated: kd
      } = dd;
      return (0, Kd.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Kd.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Kd.jsx)(Qd.j, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              kd(ad.b.mod(Jd + 1, 10))
            },
            children: (0, Kd.jsx)(ed.e, {
              name: "angle-up"
            })
          }), (0, Kd.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: Jd
          }), (0, Kd.jsx)(Qd.j, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              kd(ad.b.mod(Jd - 1, 10))
            },
            children: (0, Kd.jsx)(ed.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var ak = kd(9247),
      Mk = kd(36981),
      Fk = kd(36686);

    function Yk(dd) {
      let {
        specialItemInfo: Jd,
        setHovered: kd,
        pointerDown: pd,
        pointerUp: Wd,
        enchantingTablePosition: Pd,
        enchantingTableBlockName: Zd
      } = dd;
      const {
        t: od
      } = (0, zd.B)(), [ld, Ld] = (0, Nd.useState)(null), [Od, ed] = (0, Nd.useState)(null), Rd = (0, gd.j)("auraPerLevel"), Id = Math.floor((0, Md.k)("aura") / Rd);
      (0, Nd.useEffect)((() => {
        if (!Jd) return void Ld(null);
        let dd = !0;
        return Cd.gameBridge.query("enchantingOffer", {
          slot: Jd.idx,
          name: Jd.name,
          blockName: Zd
        }).then((kd => {
          var pd, Nd;
          let {
            perks: Wd,
            options: Pd
          } = kd;
          if (!dd) return;
          const Zd = {
            isEnchantable: Wd.length > 0,
            possibleEnchantments: Wd,
            options: Pd.map((dd => {
              let {
                level: Jd,
                odds: kd
              } = dd;
              return {
                level: Jd,
                possibilities: Object.fromEntries(kd.map(((dd, Jd) => [`Tier ${Jd+1}`, dd])))
              }
            })),
            isAlreadyEnchanted: Wd.length > 0 && void 0 !== (null === (pd = Jd.attributes) || void 0 === pd || null === (Nd = pd.customAttributes) || void 0 === Nd ? void 0 : Nd.enchantmentTier)
          };
          Ld(Zd), (dd => {
            const Jd = dd.options.map((dd => Object.entries(dd.possibilities).map((dd => {
              let [Jd, kd] = dd;
              return {
                str: `${Jd}: ${kd>0?kd<.01?kd.toPrecision(1):kd.toFixed(2):0}%\n`,
                style: {
                  color: ad.tb[Jd]
                }
              }
            }))));
            ed(Jd)
          })(Zd)
        })), () => {
          dd = !1
        }
      }), [Jd, Pd, Zd]);
      const Gd = [];
      for (let Nd = 0; Nd < Mk.e; Nd++) {
        const dd = null === ld || void 0 === ld ? void 0 : ld.options[Nd],
          pd = !dd || dd.level > Id;
        Gd.push((0, Kd.jsx)(Qd.d, {
          className: "EnchantmentButton",
          onPointerEnter: dd ? dd => null === kd || void 0 === kd ? void 0 : kd()(!0, {
            name: "",
            desc: Od[Nd]
          }, dd) : void 0,
          onPointerLeave: dd ? () => null === kd || void 0 === kd ? void 0 : kd()(!1) : void 0,
          onClick: pd ? void 0 : () => {
            Cd.gameBridge.send("enchantItem", {
              slot: Jd.idx,
              level: dd.level,
              tablePos: Pd
            }), Ld(null)
          },
          disabled: pd,
          children: dd ? (0, Kd.jsxs)(Kd.Fragment, {
            children: [(0, Kd.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Kd.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [od("enchantments:cost"), ": "]
              }), " ", od("enchantments:levels", {
                level: dd.level
              })]
            }), (0, Kd.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Kd.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Kd.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: od("enchantments:tier")
                }), Object.entries(dd.possibilities).map((dd => {
                  let [Jd, kd] = dd;
                  return 0 === kd ? null : (0, Kd.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: ad.tb[Jd]
                    },
                    children: Jd
                  }, Jd)
                }))]
              }), (0, Kd.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Kd.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: od("enchantments:odds")
                }), Object.entries(dd.possibilities).map((dd => {
                  let [Jd, kd] = dd;
                  return 0 === kd ? null : (0, Kd.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: ad.tb[Jd]
                    },
                    children: [kd > 0 && kd < .1 ? "<0.1" : kd.toFixed(0 < kd && kd < .95 ? 1 : 0), "%"]
                  }, Jd)
                }))]
              })]
            })]
          }) : !1 === (null === ld || void 0 === ld ? void 0 : ld.isEnchantable) ? (0, Kd.jsx)("h1", {
            className: "EnchantmentLevels",
            children: od("enchantments:notEnchantable")
          }) : (0, Kd.jsx)("h1", {
            className: "EnchantmentLevels",
            children: od("enchantments:enterItem")
          })
        }, Nd))
      }
      return (0, Kd.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Kd.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Zd
        }), (0, Kd.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Kd.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Kd.jsx)(Fk.b, {
              idx: Qk.g,
              setHovered: dd => {
                null === kd || void 0 === kd || kd(Qk.g)(dd)
              },
              pointerDown: pd,
              pointerUp: Wd,
              draggedInfo: null,
              specialItemInfo: Jd,
              variation: "Enchanting Table"
            }), ld && ld.possibleEnchantments.length > 0 && (0, Kd.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Kd.jsx)("h2", {
                children: "Possible Perks:"
              }), ld.possibleEnchantments.map((dd => (0, Kd.jsxs)(Nd.Fragment, {
                children: [(0, Kd.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Kd.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Kd.jsx)(Pk.d, {
                      itemName: `${dd} Enchantment`,
                      amount: 1
                    })
                  }), (0, Kd.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: dd
                  })]
                }), (0, Kd.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: od((0, ak.k)(dd).translationKey)
                })]
              }, dd)))]
            })]
          }), (0, Kd.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [ld && ld.isAlreadyEnchanted && (0, Kd.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: od("enchantments:alreadyEnchanted")
            }), Gd]
          })]
        })]
      })
    }
    var mk = kd(36987);

    function bk(dd) {
      var Jd;
      let {
        specialItemInfo: kd,
        setSpecialItemInfo: pd,
        setHovered: Wd,
        pointerDown: Pd,
        pointerUp: Zd
      } = dd;
      const {
        t: gd
      } = (0, zd.B)(), od = (0, Md.g)("inventory", (dd => dd.freeSlots)), [ld, Ld] = (0, Nd.useState)(null);
      (0, Nd.useEffect)((() => {
        if (kd) {
          const dd = (0, mk.b)(kd.name, kd.amount);
          Ld({
            salvageable: !!dd,
            produces: dd
          })
        } else Ld(null)
      }), [kd, null === kd || void 0 === kd ? void 0 : kd.name, null === kd || void 0 === kd ? void 0 : kd.amount]);
      const Od = !!kd && !(null === ld || void 0 === ld || !ld.salvageable) && !(null !== (Jd = ld.produces) && void 0 !== Jd && Jd.some((dd => {
        let {
          amt: Jd
        } = dd;
        return Jd < 1
      })));
      return (0, Kd.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Kd.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: gd("item:salvagingTable")
        }), (0, Kd.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Kd.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Kd.jsx)(Fk.b, {
              idx: Qk.g,
              setHovered: dd => {
                null === Wd || void 0 === Wd || Wd(Qk.g)(dd)
              },
              pointerDown: Pd,
              pointerUp: Zd,
              draggedInfo: null,
              specialItemInfo: kd,
              variation: "Salvaging Table"
            })
          }), (0, Kd.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Kd.jsx)(Qd.d, {
              className: "SalvageButton",
              onClick: Od ? () => {
                const {
                  idx: dd,
                  name: Jd,
                  amount: Nd
                } = kd;
                Cd.gameBridge.send("salvageItem", {
                  slot: dd,
                  name: Jd,
                  amount: Nd
                }) && (Ld(null), pd(null))
              } : void 0,
              disabled: !Od,
              children: ld ? ld.salvageable ? ld.produces.some((dd => {
                let {
                  amt: Jd
                } = dd;
                return Jd < 1
              })) ? (0, Kd.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Kd.jsx)("div", {
                  className: "SalvageText Error",
                  children: gd("salvagingTable:notEnoughResources")
                })
              }) : od < ld.produces.length ? (0, Kd.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Kd.jsx)("div", {
                  className: "SalvageText Error",
                  children: gd("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Kd.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Kd.jsx)("div", {
                  className: "SalvageText",
                  children: gd("salvagingTable:salvage")
                }), (0, Kd.jsx)("div", {
                  className: "SalvageIcons",
                  children: ld.produces.map(((dd, Jd) => {
                    let {
                      item: kd,
                      amt: pd
                    } = dd;
                    return (0, Kd.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: kd,
                        amount: Math.floor(pd)
                      })
                    }, Jd)
                  }))
                })]
              }) : (0, Kd.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Kd.jsx)("div", {
                  className: "SalvageText Error",
                  children: gd("salvagingTable:unsalvageable")
                })
              }) : (0, Kd.jsx)(Kd.Fragment, {})
            })
          })]
        })]
      })
    }
    var Sk = kd(201),
      jk = kd(9331),
      Xk = kd(2581),
      fk = kd(1714),
      nk = kd(8598),
      Uk = kd(8593),
      yk = kd(1699),
      Dk = kd(1986),
      Tk = kd(1417),
      Ek = kd(2049);

    function ck(dd, Jd, kd) {
      const pd = dd.trim().toLowerCase();
      if ("" === pd) return 0;
      let Nd = null;
      for (const Wd of Jd) {
        const dd = Wd.toLowerCase().indexOf(pd);
        if (0 === dd) return 0;
        dd > 0 && (Nd = 1)
      }
      if (null !== Nd) return Nd;
      for (const Wd of kd)
        if (Wd.toLowerCase().includes(pd)) return 2;
      return null
    }

    function hk(dd) {
      return dd.map((dd => {
        var Jd;
        return dd ? {
          name: dd.name,
          amount: null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : 1
        } : null
      }))
    }

    function rk(dd) {
      return dd < 1e3 ? `${dd}` : dd < 1e4 ? Math.floor(dd / 100) / 10 + "k" : `${Math.floor(dd/1e3)}k`
    }
    var uk = kd(36991);
    const tk = Qd.d,
      Vk = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      zk = () => {
        const dd = (0, Tk.g)();
        return dd ? dd.getPadRepeatTiming(Vk) : Vk
      };

    function Hk(dd, Jd, kd) {
      var pd, Nd;
      const Wd = (0, Kk.o)(Jd, dd);
      let Pd = null === (pd = Jd[dd]) || void 0 === pd ? void 0 : pd.description;
      if (kd && (null === (Nd = (0, uk.e)().get(dd)) || void 0 === Nd || !Nd.hideIngredients)) {
        Pd ? (Pd = (0, ad.yb)(Pd), Pd.push({
          str: "\n"
        })) : Pd = [], Pd.push({
          str: "\n"
        }), Pd.push({
          str: "Can be crafted from:\n"
        });
        for (const dd of kd) "string" === typeof dd && (Pd.push({
          icon: dd,
          style: {
            fontSize: "1.5em"
          }
        }), Pd.push({
          str: " "
        }), Pd.push(...(0, ad.yb)((0, Kk.o)(Jd, dd))), Pd.push({
          str: "\n"
        }))
      }
      return {
        name: Wd,
        desc: Pd
      }
    }

    function wk(dd) {
      let {
        name: Jd,
        QC: kd
      } = dd;
      return `${Jd}_${kd}`
    }

    function Ak(dd) {
      var Jd;
      let {
        onClick: kd,
        itemName: pd,
        recipeId: Wd,
        isSelected: Pd,
        haveIngredients: Zd,
        craftable: gd,
        setHovered: Cd,
        padActions: od,
        marked: ld,
        lock: Qd,
        itemInfo: Ld
      } = dd;
      const Od = (0, Nd.useRef)(null);
      return (0, nk.d)(Od, {
        press: dd => !Zd || "secondary" === dd && !gd ? (od.refuse(), !1) : "primary" === dd ? (od.choose(), !0) : od.craft(),
        release: od.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Kd.jsxs)("div", {
        ref: Od,
        className: xk()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Zd && !Qd,
          CraftableItemMarked: ld,
          CraftableItemLocked: void 0 !== Qd,
          CraftableItemLockedFar: (null !== (Jd = null === Qd || void 0 === Qd ? void 0 : Qd.stepsAway) && void 0 !== Jd ? Jd : 1) > 1
        }),
        "data-recipe-key": Wd,
        "data-pad-inventory-default": Pd ? "" : void 0,
        onClick: kd,
        style: {
          cursor: Pd ? null : "pointer"
        },
        onPointerEnter: dd => {
          null === Cd || void 0 === Cd || Cd(!0, Hk(pd, Ld)), !Pd && (0, yk.o)(dd.nativeEvent) && (0, Uk.f)() && kd()
        },
        onPointerLeave: () => {
          null === Cd || void 0 === Cd || Cd(!1)
        },
        children: [(0, Kd.jsx)(Pk.d, {
          itemName: pd,
          amount: 1
        }), ld && (0, Kd.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Qd && (0, Kd.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Kd.jsx)(ed.e, {
            name: "lock"
          }), (0, Kd.jsx)(Bd.c, {
            text: Qd.tag
          })]
        })]
      })
    }

    function dp(dd) {
      let {
        idx: Jd,
        status: kd,
        shownItem: pd,
        dim: Wd,
        onHoverStart: Pd,
        onHoverEnd: Zd,
        onPadBack: gd
      } = dd;
      const Cd = (0, Nd.useRef)(null);
      (0, nk.d)(Cd, {
        press: () => !1,
        back: gd,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const od = kd.need > 0 ? Math.min(kd.have / kd.need, 1) : 1;
      return (0, Kd.jsxs)("div", {
        ref: Cd,
        className: xk()("CupTile", {
          Short: kd.missing > 0
        }),
        style: {
          width: Wd,
          height: Wd
        },
        "data-craft-ingredient": Jd,
        onPointerEnter: Pd,
        onPointerLeave: Zd,
        children: [(0, Kd.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${od})`
          }
        }), (0, Kd.jsx)(Pk.d, {
          itemName: pd,
          amount: 0
        }), (0, Kd.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [rk(kd.have), "/", rk(kd.need)]
        })]
      })
    }

    function Jp(dd) {
      var Jd, kd, pd, Wd, Pd;
      let {
        show: Zd,
        recipeItem: {
          name: gd,
          QC: od,
          requires: ld,
          produces: Qd,
          haveIngredients: Ld
        },
        detail: Od,
        onCraft: ed,
        setHovered: Rd,
        craftButtonRef: Id,
        onPadBack: Gd,
        showPadShortcut: vd,
        refusedCount: xd,
        lock: qd,
        itemInfo: sd
      } = dd;
      const {
        t: ad
      } = (0, zd.B)(), Md = null !== Od && !Od.roomForOne, Fd = null !== (Jd = null === Od || void 0 === Od ? void 0 : Od.craftAllTimes) && void 0 !== Jd ? Jd : 0, Yd = function(dd, Jd) {
        return dd.map((dd => {
          let {
            items: kd,
            amt: pd
          } = dd, Nd = 0;
          const Wd = [];
          for (const Pd of kd) {
            const dd = Jd(Pd);
            Nd += dd, dd > 0 && Wd.push(Pd)
          }
          return 0 === Wd.length && Wd.push(kd[0]), {
            shownItems: Wd,
            need: pd,
            have: Nd,
            missing: Math.max(pd - Nd, 0)
          }
        }))
      }(ld, (dd => {
        var Jd;
        return null !== (Jd = null === Od || void 0 === Od ? void 0 : Od.amounts[dd]) && void 0 !== Jd ? Jd : 0
      }));
      let md = "4rem",
        bd = 4;
      3 === ld.length || 4 === ld.length ? md = "3.75rem" : ld.length >= 5 && (md = "3rem"), 4 === ld.length ? bd = 2 : ld.length <= 6 && (bd = 3);
      const Sd = `calc(${bd} * ${md} + ${bd-1} * 0.4rem + 1px)`,
        jd = (0, Nd.useRef)(null),
        Xd = (0, Nd.useRef)(null);
      (0, Nd.useLayoutEffect)((() => {
        jd.current.scrollTop = 0
      }), [gd, od]);
      const fd = (0, Nd.useRef)(xd);
      (0, Nd.useEffect)((() => {
        if (xd === fd.current) return;
        fd.current = xd;
        const dd = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const pd of null !== (Jd = null === (kd = jd.current) || void 0 === kd ? void 0 : kd.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== Jd ? Jd : []) {
          var Jd, kd;
          pd.animate(dd, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [xd]);
      const nd = (dd, Jd, kd) => {
          var pd;
          if ((0, uk.e)().has(gd)) return void(kd && clearInterval(Ud.current));
          const Nd = null !== (pd = null === Od || void 0 === Od ? void 0 : Od.resultStackable) && void 0 !== pd && pd,
            Wd = hk(Cd.gameBridge.latest("inventory").player),
            {
              LC: Pd,
              wg: Zd,
              amountAddedToSlot: Kd
            } = Cd.gameBridge.send("craftRecipe", {
              name: gd,
              QC: od,
              times: Jd || dd && Nd ? null : 1
            });
          if (Pd > 0) {
            const Jd = [],
              pd = new Set(ld.flatMap((dd => {
                let {
                  items: Jd
                } = dd;
                return Jd
              }))),
              Pd = function(dd, Jd, kd) {
                const pd = [];
                for (let Nd = 0; Nd < dd.length; Nd++) {
                  const Wd = dd[Nd];
                  if (!Wd || !kd.has(Wd.name)) continue;
                  const Pd = Jd[Nd],
                    Zd = (null === Pd || void 0 === Pd ? void 0 : Pd.name) === Wd.name ? Pd.amount : 0;
                  Zd < Wd.amount && pd.push({
                    idx: Nd,
                    itemName: Wd.name,
                    amount: Wd.amount - Zd
                  })
                }
                return pd
              }(Wd, hk(Cd.gameBridge.latest("inventory").player), pd).slice(0, 12),
              od = kd ? 0 : Math.min(50, 400 / Pd.length),
              Ld = kd ? 220 : 320;
            for (const dd of Pd) {
              var Qd;
              const kd = ld.findIndex((Jd => {
                  let {
                    items: kd
                  } = Jd;
                  return kd.includes(dd.itemName)
                })),
                pd = null === (Qd = jd.current) || void 0 === Qd ? void 0 : Qd.querySelector(`[data-craft-ingredient="${kd}"]`),
                Nd = (0, Kk.c)(dd.idx);
              pd && Nd && Jd.push({
                kind: "ingredient",
                itemName: dd.itemName,
                amount: dd.amount,
                wg: dd.idx,
                from: Nd,
                to: (0, Kk.c)(pd),
                delayMs: Math.round(Jd.length * od),
                durationMs: Ld
              })
            }
            let Od;
            if (null !== Zd && Kd > 0 && Xd.current) {
              const dd = Jd.length > 0 ? Jd[Jd.length - 1].delayMs + .6 * Ld : 0;
              Od = {
                itemName: gd,
                amount: Kd,
                wg: Zd,
                from: (0, Kk.c)(Xd.current),
                delayMs: Math.round(dd)
              }
            }
            ed(Od, dd && !Nd ? Zd : null, Jd), gk.b.play("wood1", .5).rate(1.75)
          }
        },
        Ud = (0, Nd.useRef)(null);
      (0, Nd.useEffect)((() => () => {
        clearInterval(Ud.current)
      }), []);
      const yd = (dd, Jd) => {
          nd(dd, !1, !1), clearInterval(Ud.current), Jd && (Ud.current = setTimeout((() => {
            Ud.current = setInterval((() => {
              nd(dd, !1, !0)
            }), Jd.intervalMs)
          }), Jd.initialDelayMs))
        },
        Dd = () => {
          clearInterval(Ud.current)
        },
        Td = !Ld || Md || Boolean(qd),
        Ed = (0, Nd.useRef)(null),
        cd = null !== (kd = null === (pd = (0, Ek.b)()) || void 0 === pd ? void 0 : pd.hideButtonHints) && void 0 !== kd && kd,
        hd = null !== (Wd = null === (Pd = (0, Tk.g)()) || void 0 === Pd ? void 0 : Pd.getBoundButton("inventorySecondary")) && void 0 !== Wd ? Wd : null,
        rd = () => !Td && (nd(!1, !0, !1), !0);
      (0, nk.d)(Id, {
        press: dd => "secondary" === dd ? rd() : !Td && (yd(!1, zk()), !0),
        release: Dd,
        back: Gd,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, nk.d)(Ed, {
        press: rd,
        back: Gd,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [ud, td] = (0, Nd.useState)(0), [Vd, Hd] = (0, Nd.useState)(null);
      (0, Nd.useEffect)((() => {
        if (!0 === Zd) {
          td(0);
          const dd = setInterval((() => {
            td((dd => dd + 1))
          }), 1e3);
          return () => {
            clearInterval(dd)
          }
        }
        return () => {}
      }), [Zd]);
      const wd = null === Od || void 0 === Od ? void 0 : Od.ingredientsCraftedFrom,
        Ad = (0, Nd.useRef)(Rd);
      (0, Nd.useEffect)((() => {
        Ad.current = Rd
      }), [Rd]);
      const dJ = !(null === qd || void 0 === qd || !qd.hideIngredients);
      (0, Nd.useEffect)((() => {
        var dd, Jd;
        if (!Vd) return;
        if (dJ) return Hd(null), void(null === (Jd = Ad.current) || void 0 === Jd || Jd.call(Ad, !1));
        const kd = Vd[ud % Vd.length];
        null === (dd = Ad.current) || void 0 === dd || dd.call(Ad, !0, Hk(kd, sd, null === wd || void 0 === wd ? void 0 : wd[kd]))
      }), [Vd, ud, sd, wd, dJ]);
      const JJ = !!qd,
        kJ = (0, Nd.useRef)(!1);
      (0, Nd.useEffect)((() => {
        var dd;
        JJ && (clearInterval(Ud.current), dJ && kJ.current && (kJ.current = !1, null === (dd = Ad.current) || void 0 === dd || dd.call(Ad, !1)))
      }), [JJ, dJ]);
      const pJ = (0, Kk.o)(sd, gd);
      return (0, Kd.jsxs)("div", {
        ref: jd,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Kd.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Kd.jsx)(Bd.c, {
            text: pJ
          })
        }), !dJ && (0, Kd.jsx)("div", {
          className: xk()("CraftableIngredients", {
            Compact: ld.length >= 5
          }),
          style: {
            maxWidth: Sd
          },
          children: Yd.map(((dd, Jd) => {
            const kd = dd.shownItems[ud % dd.shownItems.length];
            return (0, Kd.jsx)(dp, {
              idx: Jd,
              status: dd,
              shownItem: kd,
              dim: md,
              onHoverStart: () => {
                Hd(dd.shownItems)
              },
              onHoverEnd: () => {
                Hd(null), null === Rd || void 0 === Rd || Rd(!1)
              },
              onPadBack: Gd
            }, Jd)
          }))
        }), qd && (0, Kd.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Kd.jsx)(Bd.c, {
            text: qd.reason
          })
        }), !qd && (!Ld || Md) && (0, Kd.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!Ld && "Missing ingredients", (0, Kd.jsx)("br", {}), Md && "Inventory is full"]
        }), !dJ && (0, Kd.jsxs)(Kd.Fragment, {
          children: [(0, Kd.jsxs)(tk, {
            ref: Id,
            className: "DoCraftButton",
            onPointerDown: dd => {
              yd((0, Kk.s)(dd), (0, yk.o)(dd.nativeEvent) ? zk() : Vk)
            },
            onPointerUp: Dd,
            onPointerLeave: Dd,
            disabled: Td,
            children: [vd && hd && !Td && !cd && (0, Kd.jsx)(Dk.c, {
              className: "CraftShortcutGlyph",
              glyph: hd
            }), (0, Kd.jsx)("div", {
              ref: Xd,
              className: "DoCraftItem",
              onPointerEnter: () => {
                kJ.current = !0, null === Rd || void 0 === Rd || Rd(!0, Hk(gd, sd))
              },
              onPointerLeave: () => {
                kJ.current = !1, null === Rd || void 0 === Rd || Rd(!1)
              },
              children: (0, Kd.jsx)(Pk.d, {
                itemName: gd,
                amount: Qd
              })
            })]
          }), (0, Kd.jsxs)(tk, {
            ref: Ed,
            className: "DoCraftAllButton",
            onPointerDown: dd => {
              nd((0, Kk.s)(dd), !0, !1)
            },
            disabled: Td,
            children: [(0, Kd.jsx)("span", {
              className: "CraftAllLabel",
              children: ad("general:craftAll")
            }), Fd > 0 && (0, Kd.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", rk(Fd)]
            })]
          })]
        })]
      })
    }

    function kp(dd) {
      let {
        selectedIdx: Jd,
        hidden: kd
      } = dd;
      const pd = (0, Wk.m)(),
        Wd = (0, Nd.useRef)(null);
      return (0, Nd.useLayoutEffect)((() => {
        const dd = Wd.current,
          pd = null === dd || void 0 === dd ? void 0 : dd.parentElement;
        if (!pd || !dd) return;
        const Nd = pd.querySelector(".CraftableItems"),
          Pd = () => {
            var Wd, Pd;
            if (kd) return void(dd.style.opacity = "0");
            const Zd = null === Nd || void 0 === Nd ? void 0 : Nd.children[Jd],
              gd = null === (Wd = null !== (Pd = null === Zd || void 0 === Zd ? void 0 : Zd.querySelector(".InvenItem")) && void 0 !== Pd ? Pd : Zd) || void 0 === Wd ? void 0 : Wd.getBoundingClientRect();
            if (!gd || 0 === gd.width) return void(dd.style.opacity = "0");
            const Cd = pd.getBoundingClientRect();
            dd.style.opacity = "1", dd.style.width = `${gd.width}px`, dd.style.height = `${gd.height}px`, dd.style.transform = `translate(${gd.left-Cd.left+pd.scrollLeft}px, ${gd.top-Cd.top+pd.scrollTop}px)`
          };
        Pd();
        const Zd = new MutationObserver(Pd),
          gd = new ResizeObserver(Pd);
        return gd.observe(pd), Nd && (Zd.observe(Nd, {
          childList: !0,
          subtree: !0
        }), gd.observe(Nd)), () => {
          Zd.disconnect(), gd.disconnect()
        }
      }), [Jd, kd]), (0, Kd.jsx)("div", {
        ref: Wd,
        className: xk()("SelectionReticle", {
          Secondary: pd
        })
      })
    }

    function pp(dd, Jd, kd) {
      return dd ? (0, Sk.d)(jk.g, dd) ? Np(dd, Jd, kd) : dd : kd("classicGame:handCrafting")
    }

    function Np(dd, Jd, kd) {
      var pd;
      const Nd = null === (pd = Jd[dd]) || void 0 === pd ? void 0 : pd.displayName;
      if ("string" === typeof Nd) return kd(Nd);
      const Wd = Cd.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Nd) ? Nd.map((dd => {
        if ("string" === typeof dd) return dd;
        if ("translationKey" in dd) return kd(dd.translationKey, (0, zd.r)(dd.params, Wd));
        if ("str" in dd) {
          if ("string" === typeof dd.str) return dd.str;
          if ("translationKey" in dd.str) return kd(dd.str.translationKey, (0, zd.r)(dd.str.params, Wd))
        }
        return ""
      })).join("") : Nd && "translationKey" in Nd ? kd(Nd.translationKey, (0, zd.r)(Nd.params, Wd)) : dd
    }

    function Wp(dd, Jd) {
      return dd === Jd || null !== dd && null !== Jd && dd.name === Jd.name && dd.QC === Jd.QC
    }

    function Pp(dd) {
      var Jd, kd, pd;
      let {
        show: Wd,
        onCraft: Pd,
        dispatchSelectedCraftable: Zd,
        selectedCraftable: gd,
        craftingStation: od,
        setHovered: ld
      } = dd;
      const {
        t: Qd
      } = (0, zd.B)(), [Ld, Od] = (0, Nd.useState)(""), [ed, Rd] = (0, Nd.useState)(0);
      (0, Nd.useEffect)((() => {
        Wd || (Od(""), Rd((dd => dd + 1)))
      }), [Wd]);
      const [Id, Gd] = (0, Nd.useState)(od);
      Id !== od && (Gd(od), "" !== Ld && (Od(""), Rd((dd => dd + 1))));
      const vd = (0, Nd.useRef)(null),
        xd = (0, Nd.useRef)(null),
        qd = (0, Uk.h)(),
        Bd = qd.showing && "recipe" === qd.kind,
        [sd, ad] = (0, Nd.useState)(0),
        Fd = null !== od && void 0 !== od ? od : null,
        Yd = (0, Nd.useRef)(null),
        md = dd => {
          return !((Jd = Yd.current) === (kd = dd) || null !== Jd && null !== kd && Jd.station === kd.station && Wp(Jd.recipe, kd.recipe)) && (Yd.current = dd, Cd.gameBridge.send("focusCrafting", dd), !0);
          var Jd, kd
        };
      md(Wd ? {
        station: Fd,
        recipe: (null === (Jd = Yd.current) || void 0 === Jd ? void 0 : Jd.station) === Fd ? Yd.current.recipe : null
      } : null);
      let bd = Cd.gameBridge.latest("crafting");
      const Sd = (0, Md.k)("itemInfo"),
        jd = "" !== Ld.trim(),
        Xd = (0, uk.A)(),
        fd = (0, uk.y)(),
        nd = (0, uk.C)(),
        Ud = function(dd, Jd) {
          const [kd, pd] = (0, Nd.useState)(!1);
          (0, Nd.useEffect)((() => {
            if (!dd) return void pd(!1);
            const Jd = setTimeout((() => {
              pd(!0)
            }), 0);
            return () => {
              clearTimeout(Jd)
            }
          }), [dd]);
          const Wd = dd && kd,
            Pd = (0, Nd.useRef)({
              station: Jd,
              at: new Map
            });
          return (Pd.current.station !== Jd || !Wd && Pd.current.at.size > 0) && (Pd.current = {
            station: Jd,
            at: new Map
          }), Wd ? Pd.current.at : null
        }(Wd, od);
      let yd = bd.recipes.filter((dd => {
        let {
          listed: Jd
        } = dd;
        return Jd
      }));
      if (jd) {
        const dd = [];
        for (const Jd of bd.recipes) {
          var Dd;
          const kd = null !== (Dd = fd.get(Jd.name)) && void 0 !== Dd && Dd.hideIngredients ? [] : Jd.requires.flatMap((dd => {
              let {
                items: Jd
              } = dd;
              return Jd.flatMap((dd => [dd, Np(dd, Sd, Qd)]))
            })),
            pd = ck(Ld, [Jd.name, Np(Jd.name, Sd, Qd)], kd);
          null !== pd && dd.push({
            item: Jd,
            rank: pd
          })
        }
        dd.sort(((dd, Jd) => dd.rank - Jd.rank)), yd = dd.map((dd => {
          let {
            item: Jd
          } = dd;
          return Jd
        }))
      } else {
        if (Ud && Ud.size > 0) {
          const dd = bd.recipes.filter((dd => !dd.listed && Ud.has(wk(dd))));
          yd = yd.concat(dd)
        }
        yd = (0, uk.j)(yd, Xd, fd, nd), Ud && (yd = (0, uk.f)(yd, Ud, wk))
      }
      const Td = dd => yd.find((Jd => wk(Jd) === dd)),
        Ed = `${od}|${Ld}`,
        [cd, hd] = (0, Nd.useState)(null),
        rd = (null === cd || void 0 === cd ? void 0 : cd.context) === Ed ? cd.key : null,
        ud = gd ? wk(gd) : null,
        td = null !== (kd = null !== (pd = Td(ud)) && void 0 !== pd ? pd : Td(rd)) && void 0 !== kd ? kd : yd[0],
        Vd = td ? wk(td) : null,
        Hd = td ? {
          name: td.name,
          QC: td.QC
        } : null;
      Wd && md({
        station: Fd,
        recipe: Hd
      }) && (bd = Cd.gameBridge.latest("crafting")), Vd !== ud && Vd !== rd && hd(Vd ? {
        context: Ed,
        key: Vd
      } : null), (0, Nd.useEffect)((() => () => {
        Yd.current = null, Cd.gameBridge.send("focusCrafting", null)
      }), []);
      const wd = Wp(bd.detail, Hd) ? bd.detail : null,
        Ad = null !== wd && !wd.roomForOne,
        dJ = yd.findIndex((dd => wk(dd) === wk(td))),
        JJ = () => xd.current ? (0, nk.b)(xd.current) : null,
        kJ = (0, Nd.useRef)(null),
        pJ = (0, Nd.useRef)(0);
      pJ.current++;
      const NJ = pJ.current;
      (0, Nd.useEffect)((() => {
        const dd = kJ.current;
        if (!dd || NJ <= dd.afterRender) return;
        if (kJ.current = null, dd.key !== Vd) return;
        const Jd = JJ();
        var kd;
        null !== Jd && void 0 !== Jd && Jd.press("primary") && !dd.EC && (null === (kd = Jd.release) || void 0 === kd || kd.call(Jd))
      }));
      const WJ = dd => {
          const Jd = {
            name: dd.name,
            QC: dd.QC
          };
          return {
            choose: () => {
              Zd(Jd), (0, Nk.l)(xd.current)
            },
            craft: () => {
              var dd, kd;
              return Zd(Jd), wk(Jd) !== wk(td) ? (kJ.current = {
                key: wk(Jd),
                EC: !0,
                afterRender: pJ.current
              }, !0) : null !== (dd = null === (kd = JJ()) || void 0 === kd ? void 0 : kd.press("primary")) && void 0 !== dd && dd
            },
            stopCraft: () => {
              var dd, Jd;
              kJ.current ? kJ.current.EC = !1 : null === (dd = JJ()) || void 0 === dd || null === (Jd = dd.release) || void 0 === Jd || Jd.call(dd)
            },
            refuse: () => {
              wk(Jd) !== wk(td) && Zd(Jd), ad((dd => dd + 1))
            }
          }
        },
        PJ = () => {
          var dd, Jd, kd;
          (0, Nk.l)(null !== (dd = null === (Jd = vd.current) || void 0 === Jd || null === (kd = Jd.querySelector(".CraftableItems")) || void 0 === kd ? void 0 : kd.children[dJ]) && void 0 !== dd ? dd : null)
        },
        ZJ = yd.map(wk).join("|"),
        gJ = (0, Nd.useRef)(ZJ);
      return (0, Nd.useEffect)((() => {
        gJ.current !== ZJ && (gJ.current = ZJ, Bd && dJ >= 0 && (0, Uk.f)() && PJ())
      })), (0, Kd.jsxs)("div", {
        className: "Craftables",
        children: [(0, Kd.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: pp(od, Sd, Qd)
        }), (0, Kd.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Kd.jsx)(fk.e, {
            className: "CraftingSearch",
            placeholderText: Qd("general:searchRecipes"),
            defaultValue: Ld,
            maxLength: 100,
            onValueChange: dd => {
              Od(dd)
            },
            blurOnEnter: !0
          }, ed), 0 === yd.length && jd && (0, Kd.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Qd("general:noRecipesMatchSearch")
          }), yd.length > 0 && (0, Kd.jsxs)(Kd.Fragment, {
            children: [(0, Kd.jsxs)("div", {
              ref: vd,
              className: "CraftablesLeftSide",
              children: [(0, Kd.jsx)(Xk.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(yd.map((dd => {
                  let {
                    name: Jd,
                    QC: kd,
                    haveIngredients: pd
                  } = dd;
                  return {
                    name: Jd,
                    QC: kd,
                    haveIngredients: pd
                  }
                })))],
                observing: Wd,
                children: yd.map((dd => {
                  const {
                    name: Jd,
                    QC: kd,
                    haveIngredients: pd
                  } = dd, Nd = wk(dd);
                  return (0, Kd.jsx)(Ak, {
                    recipeId: Nd,
                    itemName: Jd,
                    onClick: () => {
                      Zd({
                        name: Jd,
                        QC: kd
                      })
                    },
                    isSelected: wk(td) === Nd,
                    haveIngredients: pd,
                    craftable: pd && !fd.has(Jd) && !(wk(td) === Nd && Ad),
                    setHovered: ld,
                    padActions: WJ(dd),
                    marked: Xd.has(Jd),
                    lock: fd.get(Jd),
                    itemInfo: Sd
                  }, Nd)
                }))
              }), (0, Kd.jsx)(kp, {
                selectedIdx: dJ,
                hidden: Bd && qd.steppingSlots
              })]
            }), (0, Kd.jsx)(Jp, {
              show: Wd,
              recipeItem: td,
              detail: wd,
              onCraft: Pd,
              setHovered: ld,
              craftButtonRef: xd,
              onPadBack: PJ,
              showPadShortcut: Bd,
              refusedCount: sd,
              lock: fd.get(td.name),
              itemInfo: Sd
            })]
          })]
        })]
      })
    }
    var Zp = kd(9252),
      gp = kd(3130),
      Cp = kd(2079),
      Kp = kd(8565);
    class op {
      constructor(dd, Jd, kd) {
        this.commit = dd, this.delayMs = Jd, this.defers = kd, this.pending = null, this.timer = void 0, this.EC = !1, this.flush = () => {
          clearTimeout(this.timer);
          const dd = this.pending;
          null !== dd && (this.pending = null, this.commit(dd))
        }
      }
      type(dd) {
        this.pending = dd, clearTimeout(this.timer), this.EC || this.defers() ? this.EC || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(dd) {
        var Jd;
        return null !== (Jd = this.pending) && void 0 !== Jd ? Jd : dd
      }
      isHeld() {
        return this.EC
      }
      setHeld(dd) {
        this.EC = dd, dd || this.flush()
      }
    }

    function lp(dd) {
      return null === dd ? "creativeInventory:all" : `creativeInventory:${dd}`
    }

    function Qp(dd) {
      let {
        category: Jd
      } = dd;
      return null === Jd ? (0, Kd.jsx)(ed.e, {
        name: "layer-group"
      }) : (0, Kd.jsx)(Pk.d, {
        itemName: Zp.creativeItemCategoryIcons[Jd],
        amount: 0
      })
    }

    function Lp(dd) {
      let {
        labelKey: Jd,
        isSelected: kd,
        onSelect: pd,
        setHovered: Nd,
        children: Wd
      } = dd;
      return (0, Kd.jsx)("div", {
        className: xk()("CreativeCategoryTab", {
          Selected: kd
        }),
        onClick: pd,
        onPointerEnter: dd => {
          (0, Kk.l)(dd) || Nd(!0, {
            name: {
              translationKey: Jd
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Nd(!1)
        },
        children: Wd
      })
    }

    function Op(dd) {
      let {
        categories: Jd,
        selectedCategory: kd,
        onSelect: pd
      } = dd;
      const {
        t: Wd
      } = (0, zd.B)(), [Pd, Zd] = (0, Nd.useState)(!1), gd = (0, Nd.useRef)(null), Cd = (0, Nd.useCallback)((() => {
        Zd(!1)
      }), []);
      return (0, Cp.e)(gd, Cd), (0, Kd.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: gd,
        children: [(0, Kd.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Zd(!Pd)
          },
          children: [(0, Kd.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Kd.jsx)(Qp, {
              category: kd
            })
          }), (0, Kd.jsx)("span", {
            children: Wd(lp(kd))
          }), (0, Kd.jsx)(ed.e, {
            name: Pd ? "caret-up" : "caret-down"
          })]
        }), Pd && (0, Kd.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: Jd.map((dd => (0, Kd.jsxs)("div", {
            className: xk()("CreativeCategoryDropdownOption", {
              Selected: kd === dd
            }),
            onClick: () => {
              pd(dd), Zd(!1)
            },
            children: [(0, Kd.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Kd.jsx)(Qp, {
                category: dd
              })
            }), (0, Kd.jsx)("span", {
              children: Wd(lp(dd))
            })]
          }, null !== dd && void 0 !== dd ? dd : "all")))
        })]
      })
    }
    const ep = (0, Nd.memo)((function(dd) {
      let {
        creativeScrollDiv: Jd,
        playerInvenNumSlots: kd,
        getSetHoveringForIdx: pd,
        getPointerDownForIdx: Wd,
        getPointerUpForIdx: Pd,
        creativeSearchVal: Zd,
        setCreativeSearchVal: Cd,
        creativeCategory: od,
        setCreativeCategory: ld,
        show: Qd
      } = dd;
      const {
        t: Ld
      } = (0, zd.B)(), Od = (0, Md.k)("creativeVisibility"), {
        userContext: Rd
      } = (0, qd.c)(), Id = (0, gd.j)("canUseDevCreativeItems"), Gd = Rd.playerHasRank("developer") || !!Id, vd = (0, Nd.useMemo)((() => Ip("", Od, Gd)), [Od, Gd]), xd = (0, Nd.useMemo)((() => {
        const dd = (0, Zp.creativeItemIds)(),
          Jd = new Set(vd.map((Jd => (0, Zp.creativeCategoryOf)(dd[Jd]))));
        return Zp.creativeItemCategories.filter((dd => Jd.has(dd)))
      }), [vd]), Bd = null !== od && xd.includes(od) ? od : null, ad = (0, Nd.useMemo)((() => "" === Zd ? vd : Ip(Zd, Od, Gd)), [vd, Zd, Od, Gd]), Fd = (0, Nd.useMemo)((() => {
        const dd = (0, Zp.creativeItemIds)();
        return null !== Bd ? ad.filter((Jd => (0, Zp.creativeCategoryOf)(dd[Jd]) === Bd)) : "" === Zd ? ad.filter((Jd => !(0, Zp.showOnlyInCreativeCategory)(dd[Jd]))) : ad
      }), [ad, Bd, Zd]), Yd = pd();

      function md(dd) {
        ld(dd), Jd.current.scrollTop = 0
      }
      const bd = [null, ...xd],
        {
          isTouchScreen: Sd
        } = (0, Dd.j)(["isTouchScreen"]),
        jd = !Sd,
        Xd = (0, Nd.useRef)(null),
        [fd, nd] = (0, Nd.useState)(0);
      (0, Nd.useEffect)((() => {
        const dd = Xd.current;
        if (!dd) return;
        const Jd = new ResizeObserver((dd => {
          nd(dd[0].contentRect.height)
        }));
        return Jd.observe(dd), () => {
          Jd.disconnect()
        }
      }), [jd]);
      const Ud = (0, Nd.useRef)(null),
        yd = (0, Nd.useCallback)((function dd() {
          "up" === Ud.current ? Jd.current.scrollTop -= 10 : "down" === Ud.current && (Jd.current.scrollTop += 10), Ud.current && requestAnimationFrame(dd)
        }), [Jd]),
        Td = (0, Nd.useCallback)((function(dd) {
          Ud.current || (Ud.current = dd, yd())
        }), [yd]);

      function Ed() {
        Ud.current = null
      }
      const cd = (0, Nd.useRef)({
        creativeSearchVal: Zd,
        setCreativeSearchVal: Cd
      });
      cd.current = {
        creativeSearchVal: Zd,
        setCreativeSearchVal: Cd
      };
      const [hd] = (0, Nd.useState)((() => new op((dd => {
        cd.current.setCreativeSearchVal(dd)
      }), 250, Wk.d))), rd = dd => {
        var kd;
        null === (kd = Jd.current) || void 0 === kd || kd.classList.toggle("CreativeItemSlotsStale", dd)
      };
      (0, sd.h)(Kp.b, (dd => {
        hd.setHeld(dd), dd || rd(!1)
      })), (0, Nd.useEffect)((() => hd.flush), [hd]);
      const ud = (0, Kd.jsx)(fk.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Zd,
          maxLength: 1e4,
          onValueChange: (dd, Jd) => {
            "" === hd.getTyped(cd.current.creativeSearchVal) && "" !== dd && ld(null), hd.type(dd), rd(hd.isHeld())
          },
          onEnter: hd.flush,
          blurOnEnter: !0
        }),
        td = (0, Kd.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Sd && (0, Kd.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Kd.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Td("up")
              },
              onPointerLeave: Ed,
              onPointerUp: Ed,
              children: (0, Kd.jsx)(ed.e, {
                name: "arrow-up"
              })
            }), (0, Kd.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Td("down")
              },
              onPointerLeave: Ed,
              onPointerUp: Ed,
              children: (0, Kd.jsx)(ed.e, {
                name: "arrow-up"
              })
            })]
          }), (0, Kd.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: Jd,
            children: [0 === Fd.length && "" !== Zd && (0, Kd.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: Ld("general:noResults")
            }), (0, Kd.jsx)(Xk.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Zd, Bd],
              observerRoot: "CreativeItemSlots",
              observing: Qd,
              children: Fd.map((dd => {
                const Jd = kd + dd;
                return (0, Kd.jsx)(Fk.b, {
                  idx: Jd,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: pd(Jd),
                  pointerDown: Wd(Jd),
                  pointerUp: Pd(Jd)
                }, Jd)
              }))
            })]
          })]
        });
      return (0, Kd.jsxs)("div", {
        className: xk()("CreativeItemSlotsWrapper", jd ? "WithRail" : "WithDropdown"),
        children: [jd && (0, Kd.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Xd,
          style: {
            "--rail-height": fd > 0 ? `${fd}px` : void 0,
            "--tab-rows": Math.ceil(bd.length / 2)
          },
          children: bd.map((dd => (0, Kd.jsx)(Lp, {
            labelKey: lp(dd),
            isSelected: Bd === dd,
            onSelect: () => {
              md(dd)
            },
            setHovered: Yd,
            children: (0, Kd.jsx)(Qp, {
              category: dd
            })
          }, null !== dd && void 0 !== dd ? dd : "all")))
        }), (0, Kd.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Kd.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [ud, !jd && (0, Kd.jsx)(Op, {
              categories: bd,
              selectedCategory: Bd,
              onSelect: md
            })]
          }), td]
        })]
      })
    }));

    function Rp(dd) {
      var Jd;
      return null !== (Jd = (0, gp.d)(dd)) && void 0 !== Jd ? Jd : ""
    }

    function Ip(dd, Jd, kd) {
      let {
        publicLobby: pd,
        shownInGame: Nd
      } = Jd;
      const Wd = dd.toLowerCase(),
        Pd = (0, Zp.creativeItemIds)(),
        Zd = dd => {
          var Jd;
          const Wd = Pd[dd];
          return !(0, Zp.itemIsDisabled)(Wd, pd, null === (Jd = Nd[Rp(Wd)]) || void 0 === Jd || Jd, kd)
        };
      if ("" === Wd) return Pd.map(((dd, Jd) => Jd)).filter((dd => !(0, Zp.showOnlyInCreativeSearch)(Pd[dd]))).filter(Zd);
      const gd = [];
      for (let Cd = 0; Cd < Pd.length; Cd++) Rp(Pd[Cd]).toLowerCase().includes(Wd) && gd.push(Cd);
      gd.sort(((dd, Jd) => {
        const kd = Rp(Pd[dd]).toLowerCase(),
          pd = Rp(Pd[Jd]).toLowerCase();
        return kd.indexOf(Wd) - pd.indexOf(Wd)
      }));
      for (const [Cd, Kd] of(0, Zp.creativeAltNames)())
        for (const dd of Kd)
          if (dd.toLowerCase().includes(Wd)) {
            const dd = Pd.indexOf(Cd);
            gd.includes(dd) || gd.push(dd)
          } return gd.filter(Zd)
    }
    var Gp = kd(37009),
      vp = kd(610);

    function xp(dd) {
      return dd > vp.n
    }

    function qp(dd) {
      const Jd = dd / 2,
        kd = [];
      for (let pd = 0; pd < Jd / 6; pd++)
        for (let dd = 0; dd < 12; dd++) {
          const Nd = dd < 6 ? 0 : Jd;
          kd.push(Nd + 6 * pd + dd % 6)
        }
      return kd
    }

    function Bp(dd) {
      let {
        numSlots: Jd,
        renderSlot: kd
      } = dd;
      const {
        t: pd
      } = (0, zd.B)(), Wd = (0, Nd.useRef)(null);
      var Pd;
      return Pd = Wd, (0, Nd.useLayoutEffect)((() => {
        var dd;
        const Jd = null === (dd = Pd.current) || void 0 === dd ? void 0 : dd.closest(".InvenBody");
        if (!Jd) return;
        const kd = () => {
          Jd.style.zoom = "";
          const dd = parseFloat(getComputedStyle(document.documentElement).fontSize),
            kd = window.innerWidth - 2 * dd,
            pd = Jd.getBoundingClientRect().width;
          pd > kd && (Jd.style.zoom = "" + kd / pd)
        };
        return kd(), window.addEventListener("resize", kd), () => {
          window.removeEventListener("resize", kd), Jd.style.zoom = ""
        }
      }), [Pd]), (0, Kd.jsxs)("div", {
        ref: Wd,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Kd.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: pd("doubleChest:title")
        }), (0, Kd.jsx)("div", {
          className: "GridItemSlots",
          children: qp(Jd).map((dd => kd(dd)))
        })]
      })
    }

    function sp(dd) {
      let {
        zd: Jd,
        initialPasskey: kd
      } = dd;
      const {
        t: pd
      } = (0, zd.B)(), [Wd, Pd] = (0, Nd.useState)(kd), [Zd, gd] = (0, Nd.useState)(kd);
      (0, Nd.useEffect)((() => {
        Pd(kd), gd(kd)
      }), [...Jd]);
      return (0, Kd.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Kd.jsx)("div", {
          className: "SmallTextBold",
          children: pd("ironChest:currentPasskey", {
            currentPasskey: Wd.join("")
          })
        }), (0, Kd.jsx)(sk, {
          className: "IronChestPasskeyEditor",
          oK: Zd,
          onPasskeyUpdated: gd,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Cd.gameBridge.send("changeIronChestPasskey", {
              pos: [...Jd],
              oK: [...Zd]
            }), Pd([...Zd])
          }
        })]
      })
    }

    function ip(dd) {
      let {
        variation: Jd,
        canCraft: kd,
        show: pd,
        creativeMounted: Nd,
        specialItemRef: Wd,
        draggedInfo: Pd,
        getSetHovering: Zd,
        getPointerDownForIdx: gd,
        getPointerUpForIdx: Cd,
        enchantingTablePosition: od,
        enchantingTableBlockName: ld,
        selectedCraftable: Qd,
        dispatchSelectedCraftable: Ld,
        creativeScrollDiv: Od,
        creativeSearchVal: ed,
        setCreativeSearchVal: Rd,
        creativeCategory: Id,
        setCreativeCategory: Gd,
        onCraft: vd
      } = dd;
      const {
        userContext: xd
      } = (0, qd.c)(), {
        t: Bd
      } = (0, zd.B)(), sd = (0, Md.g)("inventory", (dd => dd.chest)), ad = (0, Md.g)("inventory", (dd => dd.player.length)), Fd = (0, Md.g)("inventory", (dd => dd.creative));
      if (0 === ad) return null;
      let Yd, md;
      const bd = dd => {
          const Jd = ad + dd;
          return (0, Kd.jsx)(Fk.b, {
            idx: Jd,
            draggedInfo: Pd,
            specialItemInfo: Wd.current,
            setHovered: Zd(Jd),
            pointerDown: gd(Jd),
            pointerUp: Cd(Jd)
          }, Jd)
        },
        Sd = sd ? (0, Gp.b)(sd.type) : null;
      if (Sd) Yd = xk()("InvenLeftSideChestCustom", Sd.className), md = (0, Kd.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Sd.render({
          zd: sd.pos,
          renderSlot: bd
        })
      });
      else if (sd) {
        const dd = sd.pos,
          Jd = "Iron" === sd.type || "Moonstone" === sd.type ? sd.type : "Standard";
        let kd = !1,
          pd = null;
        "Iron" === Jd && (kd = sd.ironChest.ownerDbId === xd.whamm, pd = sd.ironChest.oK), Yd = `InvenLeftSideChest${Jd}`;
        const Nd = xp(sd.numSlots);
        md = (0, Kd.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [kd && (0, Kd.jsx)(sp, {
            zd: dd,
            initialPasskey: pd
          }), Nd && (0, Kd.jsx)(Bp, {
            numSlots: sd.numSlots,
            renderSlot: bd
          }), !Nd && (0, Kd.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Kd.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: Bd("Moonstone" === Jd ? "item:moonstoneChest" : "Iron" === Jd ? "item:ironChest" : "item:chest")
            }), (0, Kd.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(sd.numSlots).fill(0).map(((dd, Jd) => bd(Jd)))
            })]
          })]
        })
      } else if (!Fd || Jd && kd)
        if (kd && "Enchanting Table" === Jd) Yd = `InvenLeftSide${(null!==ld&&void 0!==ld?ld:"").replace(/ /gi,"")}`, md = (0, Kd.jsx)(Yk, {
          specialItemInfo: Wd.current,
          setHovered: Zd,
          pointerDown: gd(Qk.g),
          pointerUp: Cd(Qk.g),
          enchantingTablePosition: od,
          enchantingTableBlockName: ld
        });
        else if (kd && "Salvaging Table" === Jd) Yd = "InvenLeftSideSalvagingTable", md = (0, Kd.jsx)(bk, {
        specialItemInfo: Wd.current,
        setSpecialItemInfo: dd => {
          Wd.current = dd
        },
        setHovered: Zd,
        pointerDown: gd(Qk.g),
        pointerUp: Cd(Qk.g)
      });
      else {
        if (!kd) return null;
        Yd = `InvenLeftSide${(null!==Jd&&void 0!==Jd?Jd:"HandCrafting").replace(/ /gi,"")}`, md = (0, Kd.jsx)(Pp, {
          show: pd,
          onCraft: vd,
          craftingStation: Jd,
          selectedCraftable: Qd,
          dispatchSelectedCraftable: Ld,
          setHovered: Zd()
        })
      } else Yd = "InvenLeftSideCreative", md = Nd ? (0, Kd.jsx)(ep, {
        creativeScrollDiv: Od,
        playerInvenNumSlots: ad,
        getSetHoveringForIdx: Zd,
        getPointerDownForIdx: gd,
        getPointerUpForIdx: Cd,
        creativeSearchVal: ed,
        setCreativeSearchVal: Rd,
        creativeCategory: Id,
        setCreativeCategory: Gd,
        show: pd
      }) : null;
      const jd = !!sd || kd && !!Jd;
      return (0, Kd.jsx)("div", {
        className: `InvenLeftSide ${Yd}`,
        "data-pad-inventory-start": jd ? "" : void 0,
        children: md
      })
    }
    var ap = kd(597),
      Mp = kd(20493),
      Fp = kd(20502),
      Yp = kd(20506);
    const mp = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: kd(20510)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: Fp
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: Yp
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: kd(20518)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: Mp
      }
    };

    function bp(dd) {
      const {
        sprite: Jd,
        image: kd
      } = mp[dd];
      return uJ(Jd, cJ.h.ITEM, kd)
    }

    function Sp(dd) {
      let {
        draggedInfo: Jd,
        specialItemInfo: kd,
        craftFlyAnims: pd,
        getSetHovering: Nd,
        getPointerDownForIdx: Wd,
        getPointerUpForIdx: Pd,
        variation: Zd,
        canCraft: gd,
        isNewSlot: Cd
      } = dd;
      const od = (0, Md.g)("inventory", (dd => dd.player.length));
      return 0 === od ? null : (0, Kd.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Kd.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(ap.c.length).fill(0).map(((dd, ld) => {
            const Qd = od - ap.c.length + ld;
            return (0, Kd.jsx)(Fk.b, {
              idx: Qd,
              draggedInfo: Jd,
              specialItemInfo: kd,
              craftFlyHoldbackInfo: (0, lk.g)(pd, Qd),
              setHovered: Nd(Qd),
              pointerDown: Wd(Qd),
              pointerUp: Pd(Qd),
              defaultIconB64: bp(ap.c[ld]),
              variation: gd ? Zd : void 0,
              showNewDot: Cd(Qd)
            }, Qd)
          }))
        }), (0, Kd.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(od - 10 - ap.c.length).fill(0).map(((dd, ld) => {
            const Qd = od - ap.c.length - ld - 1;
            return (0, Kd.jsx)(Fk.b, {
              idx: Qd,
              draggedInfo: Jd,
              specialItemInfo: kd,
              craftFlyHoldbackInfo: (0, lk.g)(pd, Qd),
              setHovered: Nd(Qd),
              pointerDown: Wd(Qd),
              pointerUp: Pd(Qd),
              variation: gd ? Zd : void 0,
              showNewDot: Cd(Qd)
            }, Qd)
          }))
        })]
      })
    }
    var jp = kd(37011),
      Xp = kd(37015);

    function fp(dd) {
      const {
        e: Jd,
        idx: kd
      } = dd, pd = (0, Kk.f)(dd.readInventory(), kd), Nd = (0, Kk.i)(Jd);
      kd === Qk.c ? function(dd, Jd) {
        const {
          draggedInfoRef: kd,
          removeItem: pd,
          removeDraggedInfoRef: Nd,
          close: Wd
        } = dd;
        if (kd.current) {
          const dd = Jd && kd.current.amount || 1;
          pd(kd.current.idx, dd, !0) && (kd.current.amount -= dd, kd.current.amount <= 0 && Nd())
        } else Jd && Wd()
      }(dd, Nd) : kd === Qk.g ? function(dd, Jd) {
        const {
          e: kd,
          draggedInfoRef: pd,
          specialItemRef: Nd,
          moveAmtIntoSlot: Wd,
          removeDraggedInfoRef: Pd
        } = dd;
        if ((0, Kk.s)(kd) && Nd.current) Nd.current = null;
        else if (pd.current && Nd.current && (pd.current.idx === Nd.current.idx || (0, Xp.d)(pd.current, Nd.current)) && pd.current.amount > 0 && Nd.current.amount > 0 && Nd.current.amount < qk.g.maxItemStackSize)
          if (pd.current.idx === Nd.current.idx) {
            if (Jd) {
              const dd = Math.min(pd.current.amount, qk.g.maxItemStackSize - Nd.current.amount);
              Nd.current.amount += dd, pd.current.amount -= dd
            } else pd.current.amount--, Nd.current.amount++;
            pd.current.amount <= 0 && Pd()
          } else if (Jd) {
          const dd = Math.min(pd.current.amount, qk.g.maxItemStackSize - Nd.current.amount);
          Wd(Nd.current.idx, dd) && (Nd.current.amount += dd)
        } else {
          Wd(Nd.current.idx, 1) && Nd.current.amount++
        } else if (!pd.current || Nd.current || Jd) {
          const dd = pd.current;
          pd.current = Nd.current, Nd.current = dd
        } else pd.current.amount--, Nd.current = {
          idx: pd.current.idx,
          name: pd.current.name,
          attributes: pd.current.attributes,
          amount: 1
        }
      }(dd, Nd) : (0, Kk.s)(Jd) ? function(dd, Jd) {
        var kd, pd;
        const {
          idx: Nd,
          draggedInfoRef: Wd,
          specialItemRef: Pd,
          canCraft: Zd,
          variation: gd,
          swapSlots: Cd,
          moveIntoSlots: Kd
        } = dd;
        if (!Jd) return;
        let od = Jd.amount;
        Nd === (null === (kd = Wd.current) || void 0 === kd ? void 0 : kd.idx) && (od = Wd.current.amount <= 0 ? 0 : Jd.amount - Wd.current.amount);
        Nd === (null === (pd = Pd.current) || void 0 === pd ? void 0 : pd.idx) && (od = Pd.current.amount <= 0 ? 0 : Jd.amount - Pd.current.amount);
        if (0 === od) return;
        const ld = dd.readInventory(),
          Qd = ld.player.length,
          Ld = ld.chest,
          Od = Qd - ap.c.length,
          ed = () => {
            if (!(0, Wk.d)()) return void Kd(10, Od, Nd, od);
            const dd = dd => {
              const kd = (0, Kk.f)(ld, dd);
              return kd ? {
                amount: kd.amount,
                stacksWithMoved: (0, Xp.d)(kd, Jd)
              } : null
            };
            for (const Jd of ((dd, Jd, kd, pd, Nd) => {
                const Wd = [];
                let Pd = pd;
                if (null !== pd) {
                  let Zd = 0;
                  for (let pd = Jd; pd < kd; pd++) {
                    const Jd = dd(pd);
                    null !== Jd && void 0 !== Jd && Jd.stacksWithMoved && null !== Jd.amount && Jd.amount > 0 && (Zd += Math.max(0, Nd - Jd.amount))
                  }
                  const gd = Math.min(pd, Zd);
                  if (gd > 0 && (Wd.push({
                      start: Jd,
                      end: kd,
                      amount: gd
                    }), Pd = pd - gd), Pd <= 0) return Wd
                }
                for (let Zd = kd - 1; Zd >= Jd; Zd--)
                  if (null === dd(Zd)) {
                    Wd.push({
                      start: Zd,
                      end: Zd + 1,
                      amount: Pd
                    });
                    break
                  } return Wd
              })(dd, 10, Od, od, qk.g.maxItemStackSize)) Kd(Jd.start, Jd.end, Nd, Jd.amount)
          };
        if (!Zd || "Enchanting Table" !== gd && "Salvaging Table" !== gd) {
          const kd = (0, ad.Eb)(Jd.name),
            pd = kd ? (0, ad.Cb)(kd) : null;
          if (!ap.c.includes(kd) || Nd !== pd && (0, Kk.g)(ld, dd.itemInfo, pd, Nd))
            if (Ld)
              if (Nd < Qd) {
                var Rd, Id;
                const [dd, Jd] = null !== (Rd = null === (Id = (0, Gp.b)(Ld.type)) || void 0 === Id ? void 0 : Id.quickMoveRange) && void 0 !== Rd ? Rd : [0, Ld.numSlots];
                Kd(Qd + dd, Qd + Jd, Nd, od)
              } else Kd(0, Qd - ap.c.length, Nd, od);
          else ld.creative ? Nd < 10 ? ed() : Nd < Qd ? Kd(0, 10, Nd, od) : Kd(0, Qd - ap.c.length, Nd, null !== Jd.amount ? qk.g.maxItemStackSize : null) : Nd < 10 ? ed() : Kd(0, 10, Nd, od);
          else Nd < Qd - ap.c.length || Nd >= Qd ? Cd(pd, Nd) : (Kd(0, Qd - ap.c.length, pd, od), gk.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Pd.current = {
          idx: Nd,
          name: Jd.name,
          attributes: Jd.attributes,
          amount: null !== Jd.amount ? od : 0
        }
      }(dd, pd) : dd.draggedInfoRef.current ? function(dd, Jd, kd, pd) {
        const {
          draggedInfoRef: Nd,
          specialItemRef: Wd,
          moveAmtIntoSlot: Pd,
          swapSlots: Zd,
          removeItem: gd,
          removeDraggedInfoRef: Cd
        } = dd, Kd = dd.readInventory(), od = Nd.current.idx;
        if (kd && (Jd === od || (0, Xp.d)(Nd.current, kd)) && Nd.current.amount > 0 && (0, Kk.b)(kd) > 0 && (kd.amount < qk.g.maxItemStackSize || Jd === od)) pd ? kd.amount + Nd.current.amount <= qk.g.maxItemStackSize || Jd === od ? Pd(Jd, Nd.current.amount) : Pd(Jd, qk.g.maxItemStackSize - kd.amount) : Pd(Jd, 1);
        else if (Nd.current.amount > 0 && !kd) Pd(Jd, pd ? Nd.current.amount : 1);
        else if (pd || kd || 0 === Nd.current.amount)
          if (Kd.creative && !Kd.chest && Jd >= Kd.player.length) {
            const dd = 0 === Nd.current.amount ? 1 : Nd.current.amount;
            gd(Nd.current.idx, dd, !1) && Cd()
          } else {
            var ld;
            const kd = (null === (ld = Wd.current) || void 0 === ld ? void 0 : ld.idx) === Jd;
            if (Zd(Jd, Nd.current.idx)) {
              const pd = dd.readInventory(),
                Pd = (0, Kk.f)(pd, od),
                Zd = !pd.chest && pd.creative && Nd.current.idx >= pd.player.length;
              if (Pd && Nd.current.idx !== Jd && !Zd) {
                let dd = (0, Kk.b)(Pd);
                kd && (dd -= Wd.current.amount), Nd.current = kd && 0 === dd ? null : {
                  idx: Nd.current.idx,
                  name: Pd.name,
                  attributes: Pd.attributes,
                  amount: dd
                }
              } else Cd()
            }
          }
        else Pd(Jd, 1)
      }(dd, kd, pd, Nd) : function(dd, Jd, kd, pd) {
        var Nd;
        const {
          draggedInfoRef: Wd,
          specialItemRef: Pd
        } = dd;
        if (!kd) return;
        let Zd = (0, Kk.b)(kd);
        const gd = (null === (Nd = Pd.current) || void 0 === Nd ? void 0 : Nd.idx) === Jd;
        gd && (Zd -= Pd.current.amount);
        pd || (Zd = Math.ceil(Zd / 2));
        Wd.current = gd && 0 === Zd ? null : {
          idx: Jd,
          name: kd.name,
          attributes: kd.attributes,
          amount: Zd
        }
      }(dd, kd, pd, Nd)
    }

    function np(dd, Jd) {
      return !!Jd && Jd.name === dd.name
    }

    function Up() {
      return Cd.gameBridge.latest("inventory")
    }

    function yp(dd, Jd, kd) {
      return Cd.gameBridge.send("removeInventoryItem", {
        slot: dd,
        amount: Jd,
        drop: kd
      })
    }

    function Dp(dd) {
      return (0, Kk.e)(dd, Cd.gameBridge.latest("itemInfo"), Cd.gameBridge.latest("stationItems").enchantable)
    }

    function Tp(dd) {
      let {
        show: Jd,
        close: kd,
        canCraft: pd,
        variation: Wd,
        inventoryItemsMoveable: Pd,
        setCraftFlyAnims: Zd
      } = dd;
      (0, Md.k)("itemInfo");
      const [gd, Kd] = (0, Nd.useState)(null), [od, ld] = (0, Nd.useState)(null), [Qd, Ld] = (0, Nd.useState)(!1), Od = (0, Nd.useRef)(null), ed = (0, Nd.useRef)(null), Rd = (0, Nd.useRef)(null), Id = (0, Nd.useRef)(null), [Gd, vd] = (0, Nd.useReducer)((dd => dd + 1), 0), xd = (0, Nd.useCallback)((() => {
        Jd && vd()
      }), [Jd, vd]), qd = (0, Nd.useCallback)((() => {
        ed.current = null, fd.current = null, xd()
      }), [xd]), Bd = (0, Nd.useCallback)(((dd, Jd) => {
        Zd((kd => kd.map((kd => "ingredient" === kd.kind ? kd : kd.wg === dd ? {
          ...kd,
          wg: Jd,
          to: (0, Kk.c)(Jd)
        } : kd.wg === Jd ? {
          ...kd,
          wg: dd,
          to: (0, Kk.c)(dd)
        } : kd))))
      }), [Zd]), sd = (0, Nd.useCallback)(((dd, Jd) => {
        const kd = yd.current;
        if (kd.x = dd, kd.y = Jd, Od.current) !Dd.current.isTouch || Dd.current.itemBeingDragged && !fd.current ? (Od.current.style.transform = `translate(${kd.x}px, ${kd.y}px)`, Ld(Dd.current.isTouch && !fd.current)) : (Od.current.style.transform = "translate(0.5rem, 0.5rem)", Ld(!0));
        else if (Id.current) {
          const kd = Id.current;
          let pd = dd + 10,
            Nd = Jd + 10;
          const Wd = kd.offsetWidth,
            Pd = kd.offsetHeight;
          pd + Wd > window.innerWidth && (pd = dd - Wd - 10), Nd + Pd > window.innerHeight && (Nd = Jd - Pd - 10), pd < 0 && (pd = 0), Nd < 0 && (Nd = 0), Id.current.style.transform = `translate(${pd}px, ${Nd}px)`
        }
      }), []), Fd = (0, Nd.useCallback)((dd => (Jd, kd, pd) => {
        if (Kd(Jd && void 0 !== dd ? dd : null), Jd) {
          if (void 0 === dd && !kd) return void(0, jp.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== dd) {
            var Nd;
            const Jd = Up();
            let kd;
            if (kd = dd === Qk.g ? Rd.current ? (0, Kk.f)(Jd, Rd.current.idx) : null : (0, Kk.f)(Jd, dd), !kd) return void ld(null);
            if ((null === (Nd = Rd.current) || void 0 === Nd ? void 0 : Nd.idx) === dd) {
              if (0 === (0, Kk.b)(kd) - Rd.current.amount) return void ld(null)
            }
            ld(Dp(kd))
          } else ld({
            name: kd.name,
            desc: kd.desc,
            fontStyle: "normal"
          })
        } else ld(null);
        pd && setTimeout((() => {
          sd(pd.pageX, pd.pageY)
        }), 0)
      }), [sd]), Yd = (0, Nd.useCallback)(((dd, Jd) => {
        const kd = Cd.gameBridge.send("moveInventoryItem", {
          from: ed.current.idx,
          to: dd,
          amount: Jd
        });
        return kd ? (ed.current.amount -= Jd, ed.current.amount <= 0 && qd()) : console.error("moveInventoryItem failed"), kd
      }), [qd]), md = (0, Nd.useCallback)(((dd, Jd) => {
        const kd = Rd.current,
          pd = null === kd || void 0 === kd ? void 0 : kd.idx;
        kd && (kd.idx = function(dd, Jd, kd) {
          return dd === Jd ? kd : dd === kd ? Jd : dd
        }(pd, dd, Jd));
        const Nd = Cd.gameBridge.send("swapInventorySlots", {
          a: dd,
          b: Jd
        });
        return Nd ? Bd(dd, Jd) : kd && (kd.idx = pd), Nd
      }), [Bd]), bd = (0, Nd.useCallback)(((dd, Jd, kd, pd) => {
        const Nd = Cd.gameBridge.send("quickMoveInventoryItem", {
          slot: kd,
          start: dd,
          end: Jd,
          amount: pd
        });
        null !== Nd && Bd(kd, Nd)
      }), [Bd]), Sd = (0, Nd.useCallback)(((dd, Jd) => {
        var Nd;
        ((dd, Jd, kd) => {
          const pd = dd - (kd - ap.c.length);
          return !(!Jd || pd < 0 || pd >= ap.c.length) && (0, ad.Eb)(Jd) !== ap.c[pd]
        })(Jd, null === (Nd = ed.current) || void 0 === Nd ? void 0 : Nd.name, Up().player.length) || (fp({
          e: dd,
          idx: Jd,
          readInventory: Up,
          itemInfo: Cd.gameBridge.latest("itemInfo"),
          draggedInfoRef: ed,
          specialItemRef: Rd,
          moveAmtIntoSlot: Yd,
          swapSlots: md,
          moveIntoSlots: bd,
          removeItem: yp,
          removeDraggedInfoRef: qd,
          close: kd,
          canCraft: pd,
          variation: Wd
        }), xd())
      }), [pd, kd, Yd, bd, qd, md, Wd, xd]), jd = (0, Nd.useRef)(0), Xd = (0, Nd.useRef)(null), fd = (0, Nd.useRef)(null), nd = (0, Nd.useRef)(null), Ud = (0, Nd.useRef)(new Set), yd = (0, Nd.useRef)({
        x: 0,
        y: 0
      }), Dd = (0, Nd.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Td = (0, Nd.useCallback)((() => (nd.current = null, Dd.current.itemBeingDragged = !1, clearTimeout(Xd.current), !!fd.current && (fd.current = null, xd(), !0))), [xd]);
      (0, Nd.useEffect)((() => {
        Td(), Ud.current.clear()
      }), [Jd]);
      const Ed = dd => void 0 !== dd && (Ud.current.has(dd) || null !== nd.current && dd !== nd.current),
        cd = dd => {
          Dd.current.isTouch = (0, Kk.l)(dd)
        },
        hd = (0, Nd.useCallback)((dd => Jd => {
          const pd = (0, Kk.l)(Jd);
          if (pd || sd(Jd.pageX, Jd.pageY), Pd)
            if (Ed(Jd.pointerId)) void 0 !== Jd.pointerId && Ud.current.add(Jd.pointerId);
            else {
              if (cd(Jd), pd) {
                jd.current = Jd.timeStamp, Dd.current.itemBeingDragged = !0, nd.current = Jd.pointerId;
                const kd = (0, Kk.f)(Up(), dd);
                if (kd && kd.amount && kd.amount > 0) {
                  const kd = Jd.pageX,
                    pd = Jd.pageY,
                    Nd = yd.current.x,
                    Wd = yd.current.y;
                  clearTimeout(Xd.current), Xd.current = setTimeout((() => {
                    if (ed.current && ed.current.idx === dd && (Math.abs(kd - yd.current.x) < 20 && Math.abs(pd - yd.current.y) < 20 || Nd === yd.current.x && Wd === yd.current.y) && Dd.current.itemBeingDragged) {
                      const dd = Up(),
                        kd = dd.creative && !dd.chest && ed.current.idx >= qk.g.numInvenSlots && null !== (0, Kk.f)(dd, ed.current.idx).amount ? qk.g.maxItemStackSize : ed.current.amount;
                      fd.current = {
                        initTouchX: Jd.pageX,
                        initTouchY: Jd.pageY,
                        maxAmount: kd
                      }, ed.current.amount = Math.ceil(ed.current.amount / 2), Od.current.style.transform = "translate(0.5rem, 0.5rem)", Ld(!0), xd()
                    }
                  }), 500)
                }
              }
              Sd(Jd, dd)
            }
          else dd === Qk.c && (0, Kk.i)(Jd) && kd()
        }), [sd, Sd, Pd, kd, xd]),
        rd = (0, Nd.useCallback)((dd => dd => {
          if (Ed(dd.pointerId)) return;
          const Jd = (0, Kk.l)(dd);
          if (cd(dd), !Td()) {
            if (Jd && ed.current && dd.timeStamp - jd.current > 150) {
              const Jd = document.elementFromPoint(dd.clientX, dd.clientY);
              if (null !== Jd) {
                const kd = Jd.getAttribute("data-inven-idx");
                null !== kd ? Sd(dd, parseInt(kd)) : Jd.classList.contains("InventoryBackgroundScreen") && Sd(dd, -1)
              }
            }
            sd(dd.pageX, dd.pageY)
          }
        }), [sd, Sd, Td]);
      (0, Nd.useEffect)((() => {
        let dd;
        const kd = ["pointerup", "pointercancel"],
          pd = dd => {
            Ud.current.has(dd.pointerId) ? setTimeout((() => {
              Ud.current.delete(dd.pointerId)
            }), 0) : dd.pointerId === nd.current && setTimeout((() => {
              nd.current === dd.pointerId && Td()
            }), 0)
          };
        if (Jd) {
          for (const dd of kd) document.addEventListener(dd, pd, !0);
          if (!Dd.current.isTouch) {
            const dd = yd.current;
            sd(dd.x, dd.y)
          }
          dd = dd => {
            dd.preventDefault(), Ed(dd.pointerId) || (cd(dd), sd(dd.pageX, dd.pageY), fd.current && dd.pointerId === nd.current && (dd => {
              if (!ed.current) return fd.current = null, void xd();
              const {
                initTouchX: Jd,
                maxAmount: kd
              } = fd.current, pd = (dd.pageX - Jd) * fd.current.maxAmount / 160, Nd = Math.ceil(kd / 2) + Math.ceil(pd);
              ed.current.amount = Math.min(kd, Math.max(1, Nd)), xd()
            })(dd))
          }, document.addEventListener("pointermove", dd, !0)
        }
        return () => {
          document.removeEventListener("pointermove", dd, !0);
          for (const dd of kd) document.removeEventListener(dd, pd, !0)
        }
      }));
      const ud = (0, Nd.useCallback)((() => {
          if (ed.current) {
            const dd = (0, Kk.f)(Up(), ed.current.idx);
            (!np(ed.current, dd) || dd.amount < ed.current.amount) && qd()
          }
        }), [qd]),
        td = (0, Nd.useCallback)((() => {
          const dd = ed.current;
          if (dd) {
            const Jd = (0, Kk.f)(Up(), dd.idx);
            np(dd, Jd) && (dd.attributes = Jd.attributes)
          }
        }), []);
      return {
        draggedDomRef: Od,
        draggedInfoRef: ed,
        specialItemRef: Rd,
        hoverInfoDomRef: Id,
        longHoldSplitInfoRef: fd,
        currHoveredIdx: gd,
        currHoveredDisplayInfo: od,
        displayDraggedItemName: Qd,
        forceRerenderIfVisible: xd,
        removeDraggedInfoRef: qd,
        checkDraggedItemConsistencyWithInven: ud,
        refreshDraggedAttributes: td,
        swapSlots: md,
        getPointerDownForIdx: hd,
        getPointerUpForIdx: rd,
        getSetHovering: Fd,
        setCurrHoveredDisplayInfo: ld,
        moveFollowerTo: sd
      }
    }
    class Ep {
      constructor(dd) {
        this.snapshot = [], this.newSlots = new Set, this.update(dd, !1)
      }
      update(dd, Jd) {
        const kd = dd.map((dd => {
          var Jd;
          return dd ? {
            name: dd.name,
            amount: null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : 1
          } : null
        }));
        kd.forEach(((dd, kd) => {
          const pd = this.snapshot[kd],
            Nd = (null === dd || void 0 === dd ? void 0 : dd.name) !== (null === pd || void 0 === pd ? void 0 : pd.name);
          (!dd || Nd || dd.amount < pd.amount) && this.newSlots.delete(kd), Jd && dd && (Nd || dd.amount > pd.amount) && this.newSlots.add(kd)
        })), this.snapshot = kd
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(dd) {
        return this.newSlots.has(dd)
      }
    }
    const cp = (dd, Jd, kd) => ({
      button: Jd,
      shiftKey: kd,
      pageX: dd.clientX,
      pageY: dd.clientY,
      clientX: dd.clientX,
      clientY: dd.clientY,
      pointerType: "mouse"
    });

    function hp(dd) {
      const [Jd, kd] = (0, Nd.useState)(dd);
      return dd && !Jd && kd(!0), (0, Nd.useEffect)((() => {
        if (Jd) return;
        let dd = !0;
        const pd = () => {
            dd && (dd = !1, kd(!0))
          },
          Nd = "function" === typeof window.requestIdleCallback,
          Wd = Nd ? window.requestIdleCallback(pd, {
            timeout: 2e3
          }) : void 0,
          Pd = setTimeout(pd, Nd ? 2e3 : 1e3);
        return () => {
          dd = !1, clearTimeout(Pd), void 0 !== Wd && window.cancelIdleCallback(Wd)
        }
      }), [Jd]), Jd
    }
    const rp = (0, Nd.memo)((function(dd) {
      var Jd;
      let {
        show: kd,
        onOpen: pd,
        onClose: Wd,
        variation: Zd
      } = dd;
      const od = (0, Nd.useRef)(null),
        ld = (0, Nd.useRef)(null),
        Qd = function(dd) {
          const [Jd, kd] = (0, Nd.useState)(!0), [pd, Wd] = (0, Nd.useState)(!1), Pd = (0, Nd.useRef)(null), Zd = (0, Nd.useRef)(null), Cd = (0, gd.j)("_shield"), Kd = (0, Nd.useRef)(null), od = (0, gd.j)("_health"), ld = (0, Nd.useRef)(null);

          function Qd(dd) {
            const Jd = Date.now() + dd;
            Jd < Zd.current || (kd(!1), clearTimeout(Pd.current), Zd.current = Jd, Pd.current = setTimeout((() => {
              kd(!0)
            }), dd))
          }
          return (0, Nd.useEffect)((() => {
            Qd(Ok);
            const dd = Ld.j.subscribe("requestingPlayVideoAd", (() => {
              Qd(Ok)
            }));
            return () => {
              clearTimeout(Pd.current), Ld.j.unsubscribe(dd)
            }
          }), []), (0, Nd.useEffect)((() => {
            (Kd.current > Cd || ld.current > od) && Qd(6e4), Kd.current = Cd, ld.current = od
          }), [Cd, od]), (0, Nd.useEffect)((() => {
            let Jd = null;
            return dd ? Jd = setTimeout((() => {
              Wd(!0)
            }), 250) : Wd(!1), () => {
              clearTimeout(Jd)
            }
          }), [dd]), Jd && pd
        }(kd);
      (0, sd.i)(pk.e, null);
      const Od = (0, pk.m)(),
        ed = Od.some((dd => dd.panel)),
        Rd = (0, Md.g)("inventory", (dd => null !== dd.chest && (null !== dd.chest.ironChest || xp(dd.chest.numSlots)))),
        Id = hp(kd),
        Gd = hp(kd),
        [vd, xd] = (0, Nd.useState)([]),
        qd = (0, Nd.useCallback)((dd => {
          xd((Jd => Jd.filter((Jd => Jd.id !== dd))))
        }), []),
        Bd = (0, Nd.useRef)(null),
        Fd = (0, Nd.useRef)(0),
        Yd = (0, Nd.useCallback)((() => {
          Bd.current && (Fd.current = Bd.current.scrollTop), Wd()
        }), [Wd]),
        md = (0, gd.j)("inventoryItemsMoveable"),
        bd = (0, gd.j)("canCraft"),
        {
          clientEscMenuOptions: Sd
        } = (0, Dd.j)(["clientEscMenuOptions"]),
        jd = (0, Nd.useRef)(null);
      jd.current || (jd.current = new Ep(Cd.gameBridge.latest("inventory").player));
      const fd = jd.current,
        {
          draggedDomRef: nd,
          draggedInfoRef: Ud,
          specialItemRef: yd,
          hoverInfoDomRef: Td,
          longHoldSplitInfoRef: Ed,
          currHoveredIdx: cd,
          currHoveredDisplayInfo: hd,
          displayDraggedItemName: rd,
          forceRerenderIfVisible: ud,
          removeDraggedInfoRef: td,
          checkDraggedItemConsistencyWithInven: Vd,
          refreshDraggedAttributes: zd,
          swapSlots: Hd,
          getPointerDownForIdx: wd,
          getPointerUpForIdx: Ad,
          getSetHovering: dJ,
          setCurrHoveredDisplayInfo: JJ,
          moveFollowerTo: kJ
        } = Tp({
          show: kd,
          close: Yd,
          canCraft: bd,
          variation: Zd,
          inventoryItemsMoveable: md,
          setCraftFlyAnims: xd
        });
      (0, Nd.useEffect)((() => {
        const dd = !kd && null !== Cd.gameBridge.latest("inventory").chest;
        if (dd && Cd.gameBridge.send("closeChest", null), kd || (fd.clearMarks(), dJ(null)(!1)), dd) {
          gk.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [kd]), (0, Md.d)("chestToggled", (dd => {
        if (dd ? pd() : kd && Yd(), dd) {
          gk.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const pJ = (0, mJ.o)();
      (0, Md.d)("inventory", (dd => {
        let {
          player: Jd
        } = dd;
        var pd, Nd, Wd;
        (fd.update(Jd, !kd && pJ.shown), yd.current) && (yd.current = (Nd = yd.current, Wd = null !== (pd = Jd[yd.current.idx]) && void 0 !== pd ? pd : null, np(Nd, Wd) ? (Nd.attributes = Wd.attributes, null !== Wd.amount && Nd.amount > Wd.amount && (Nd.amount = Wd.amount), Nd) : null));
        zd(), null !== cd && dJ(cd)(!0), ud()
      })), (0, Nd.useEffect)((() => (Cd.gameBridge.send("setInventoryOpen", kd), () => {
        Cd.gameBridge.send("setInventoryOpen", !1)
      })), [kd]);
      const NJ = (dd, Jd) => {
        if (dd === Qk.g) return void(dd => {
          const Jd = yd.current;
          if (!Jd || null === (0, Kk.f)(Cd.gameBridge.latest("inventory"), Jd.idx)) return;
          const kd = dd ? Math.max(Jd.amount, 1) : 1,
            pd = Jd.amount - kd;
          if (!Cd.gameBridge.send("removeInventoryItem", {
              slot: Jd.idx,
              amount: kd,
              drop: !0
            })) return;
          const Nd = yd.current;
          Nd && (Nd.amount = Math.min(Nd.amount, pd), Nd.amount <= 0 && (yd.current = null)), ud()
        })(Jd);
        const kd = null === dd ? null : (0, Kk.f)(Cd.gameBridge.latest("inventory"), dd);
        if (null !== kd) {
          var pd, Nd, Wd;
          const Pd = Jd && null !== (pd = kd.amount) && void 0 !== pd ? pd : 1;
          Cd.gameBridge.send("removeInventoryItem", {
            slot: dd,
            amount: Pd,
            drop: !0
          }), dd === (null === (Nd = Ud.current) || void 0 === Nd ? void 0 : Nd.idx) && (Ud.current.amount -= Pd, Ud.current.amount <= 0 && td(), ud()), dd === (null === (Wd = yd.current) || void 0 === Wd ? void 0 : Wd.idx) && (yd.current = null, ud())
        }
      };
      (0, Md.d)("inventoryDropRequested", (dd => {
        kd && cd !== Qk.g && NJ(cd, dd)
      }));
      const WJ = (dd, Jd) => {
        let kd = Jd;
        if (Jd === Qk.g) {
          if (!yd.current) return;
          kd = yd.current.idx
        }
        const pd = Hd(dd, kd);
        if (pd && Ud.current && (Ud.current.idx === kd ? Ud.current.idx = dd : Ud.current.idx === dd && (Ud.current.idx = kd)), pd && Jd === Qk.g) {
          const dd = (0, Kk.f)(Cd.gameBridge.latest("inventory"), kd);
          yd.current = dd ? {
            idx: kd,
            name: dd.name,
            attributes: dd.attributes,
            amount: dd.amount
          } : null
        }
        ud()
      };
      (0, Md.d)("numberKeyPressed", (dd => {
        null !== cd && kd && WJ(dd - 1, cd)
      })), (0, Nd.useEffect)((() => {
        kd || (yd.current = null, td(), JJ(null))
      }), [kd, td, JJ, yd]);
      const PJ = yd.current;
      (0, Nd.useEffect)((() => {
        cd === Qk.g && dJ(Qk.g)(!0)
      }), [PJ, cd, dJ]);
      const ZJ = () => {
        Vd(), zd(), ud()
      };
      (0, Md.d)("chestRefreshed", ZJ), (0, Md.d)("inventorySynced", ZJ);
      const [gJ, CJ] = (0, Nd.useState)(new Map), KJ = null !== (Jd = gJ.get(Zd)) && void 0 !== Jd ? Jd : null, oJ = (dd, Jd) => {
        CJ((kd => {
          const pd = kd.get(dd);
          return pd && pd.name === Jd.name && pd.QC === Jd.QC ? kd : new Map(kd).set(dd, Jd)
        }))
      };
      (0, sd.h)("craftingRecipesEdited", (() => {
        ud()
      })), (0, sd.h)(uk.b, (dd => {
        let {
          variation: Jd,
          itemName: kd
        } = dd;
        oJ(Jd, {
          name: kd,
          QC: 0
        })
      }));
      const [lJ, QJ] = (0, Nd.useState)(null), [LJ, OJ] = (0, Nd.useState)(null);
      (0, Md.d)("enchantingTableOpened", (dd => {
        let {
          position: Jd,
          blockName: kd
        } = dd;
        QJ(Jd), OJ(kd)
      }));
      const [eJ, RJ] = (0, Nd.useState)(""), [IJ, GJ] = (0, Nd.useState)(null);
      (0, Nd.useEffect)((() => {
        kd && Bd.current && (Bd.current.scrollTop = Fd.current)
      }), [kd]);
      return (dd => {
        const Jd = (0, Nd.useRef)(dd);
        Jd.current = dd, (0, Nd.useEffect)((() => {
          if (!dd.show) return;
          const kd = (dd, kd, pd, Nd) => {
              const {
                getPointerDownForIdx: Wd,
                getPointerUpForIdx: Pd
              } = Jd.current;
              Wd(dd)(cp(kd, pd, Nd)), Pd(dd)(cp(kd, pd, Nd))
            },
            pd = {
              primary: (dd, Jd) => {
                kd(dd, Jd, 0, !1)
              },
              secondary: (dd, Jd) => {
                kd(dd, Jd, 2, !1)
              },
              quickMove: (dd, Jd) => {
                kd(dd, Jd, 0, !0)
              },
              dropHeld: (dd, kd) => {
                Jd.current.getPointerDownForIdx(Qk.c)(cp(kd, dd ? 0 : 2, !1))
              },
              dropSlot: (dd, kd) => {
                Jd.current.dropFromIdx(dd, kd)
              },
              swapWithHotbar: (dd, kd) => {
                Jd.current.swapWithHotbar(dd, kd)
              },
              cancel: () => {
                Jd.current.removeDraggedInfoRef()
              },
              isHolding: () => !!Jd.current.draggedInfoRef.current,
              hasItemAt: dd => {
                const {
                  draggedInfoRef: kd,
                  specialItemRef: pd
                } = Jd.current;
                if (dd === Qk.g) return !!pd.current;
                const Nd = (0, Kk.f)(Cd.gameBridge.latest("inventory"), dd);
                return !!Nd && (0, Fk.d)(dd, (0, Kk.b)(Nd), [kd.current, pd.current]).shown
              },
              hover: (dd, kd) => {
                const {
                  moveFollowerTo: pd,
                  getSetHovering: Nd
                } = Jd.current;
                pd(kd.clientX, kd.clientY), Nd(null !== dd && void 0 !== dd ? dd : void 0)(null !== dd, void 0, {
                  pageX: kd.clientX,
                  pageY: kd.clientY
                })
              },
              moveTo: dd => {
                Jd.current.moveFollowerTo(dd.clientX, dd.clientY)
              },
              close: () => {
                Jd.current.close()
              }
            };
          return (0, Nk.k)(pd)
        }), [dd.show])
      })({
        show: kd,
        close: Yd,
        draggedInfoRef: Ud,
        specialItemRef: yd,
        getPointerDownForIdx: wd,
        getPointerUpForIdx: Ad,
        getSetHovering: dJ,
        moveFollowerTo: kJ,
        removeDraggedInfoRef: td,
        dropFromIdx: NJ,
        swapWithHotbar: WJ
      }), (0, Nd.useEffect)((() => {
        Ld.j.nO("inventoryDraggedItemUpdated", {
          draggedInfo: Ud.current,
          specialItemInfo: yd.current,
          setHovered: dJ,
          pointerDown: wd,
          pointerUp: Ad,
          variation: bd ? Zd : void 0,
          craftFlyAnims: vd
        })
      })), (0, Kd.jsxs)(Xd.b, {
        show: kd,
        style: {
          touchAction: kd ? "none" : void 0
        },
        children: [Ud.current && (0, Kd.jsx)(Rk, {
          draggedInfo: Ud.current,
          toAddRef: nd
        }), Ud.current && rd && (0, Kd.jsx)(Ik, {
          className: "DraggedInvenItemName",
          displayInfo: Dp(Ud.current),
          domRef: null
        }), !Ud.current && hd && (0, Kd.jsx)(Ik, {
          displayInfo: hd,
          domRef: Td
        }), Ed.current && Ud.current && (0, Kd.jsx)(Gk, {
          info: Ed.current,
          draggedInfo: Ud.current
        }), vd.map((dd => (0, Kd.jsx)(lk.d, {
          anim: dd,
          onComplete: qd
        }, dd.id))), (0, Kd.jsx)(Pd.e, {
          show: kd,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Yd,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: wd(Qk.c),
          pointerUp: Ad(Qk.c),
          doGameplayStartStopOnShow: !0
        }), Id && (0, Kd.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Kd.jsx)("div", {
            ref: od,
            className: "InventoryAdOuter",
            children: (0, Kd.jsx)(Ck.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: od
              },
              verticalAlign: "start",
              showing: kd && Qd,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Kd.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Kd.jsxs)("div", {
              className: xk()("Inventory", {
                WithPanelButtons: ed,
                WideChestOpen: Rd
              }),
              children: [(0, Kd.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Kd.jsx)(Zk, {
                show: kd,
                buttons: Od
              }), (0, Kd.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Kd.jsx)(ip, {
                  variation: Zd,
                  canCraft: bd,
                  show: kd,
                  creativeMounted: Gd,
                  specialItemRef: yd,
                  draggedInfo: Ud.current,
                  getSetHovering: dJ,
                  getPointerDownForIdx: wd,
                  getPointerUpForIdx: Ad,
                  enchantingTablePosition: lJ,
                  enchantingTableBlockName: LJ,
                  selectedCraftable: KJ,
                  dispatchSelectedCraftable: dd => {
                    oJ(Zd, dd)
                  },
                  creativeScrollDiv: Bd,
                  creativeSearchVal: eJ,
                  setCreativeSearchVal: RJ,
                  creativeCategory: IJ,
                  setCreativeCategory: GJ,
                  onCraft: function(dd, Jd) {
                    let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Vd(), (dd || kd.length > 0) && xd((Jd => {
                        const pd = [...Jd],
                          Nd = Jd.filter((dd => "ingredient" === dd.kind)).length;
                        for (const dd of kd.slice(0, Math.max(0, 24 - Nd))) pd.push({
                          id: (0, lk.f)(),
                          ...dd,
                          to: dd.to
                        });
                        return dd && pd.push({
                          id: (0, lk.f)(),
                          ...dd,
                          to: (0, Kk.c)(dd.wg)
                        }), pd
                      })), null !== Jd) {
                      var pd;
                      const dd = Cd.gameBridge.latest("inventory");
                      (0, ad.Eb)(null === (pd = (0, Kk.f)(dd, Jd)) || void 0 === pd ? void 0 : pd.name) ? wd(Jd)({
                        button: 0,
                        shiftKey: !0
                      }): Hd(Jd, dd.selectedSlot)
                    }
                  }
                }), (0, Kd.jsx)(Sp, {
                  draggedInfo: Ud.current,
                  specialItemInfo: yd.current,
                  craftFlyAnims: vd,
                  getSetHovering: dJ,
                  getPointerDownForIdx: wd,
                  getPointerUpForIdx: Ad,
                  variation: Zd,
                  canCraft: bd,
                  isNewSlot: dd => Sd.showNewItemIndicator && fd.isNew(dd)
                })]
              })]
            }), (0, Kd.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Kd.jsx)("div", {
                ref: ld,
                className: "InventoryAd",
                children: (0, Kd.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var tp = kd(1453),
      Vp = kd(126);
    const zp = (0, Nd.memo)((function(dd) {
      let {
        show: Jd,
        onOpen: kd,
        onClose: pd
      } = dd;
      const Wd = (0, Nd.useRef)(0),
        Zd = () => (0, tp.i)() && !(0, tp.r)() && Wd.current <= 2;
      Jd = Zd() && Jd;
      const gd = () => {
        Wd.current++, pd()
      };
      (0, sd.h)("ctrlCrouchWithoutFullscreen", (() => {
        Zd() && kd()
      })), (0, sd.h)("displaymodeFullscreenChange", (dd => {
        Jd && dd && gd()
      }));
      const Cd = "crazygames" === Vp.t;
      return (0, Kd.jsx)(Pd.e, {
        close: gd,
        escDoesExit: !0,
        show: Jd,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Kd.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Kd.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Cd && (0, Kd.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Kd.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Kd.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Cd && (0, Kd.jsx)(Qd.j, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, tp.u)(), gd()
              },
              children: (0, Kd.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Kd.jsx)(Qd.B, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                gd()
              },
              children: (0, Kd.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Hp = kd(3487),
      wp = kd(3511),
      Ap = kd(1371),
      dN = kd(3462),
      JN = kd(1380),
      kN = kd(36720),
      pN = kd(3473),
      NN = kd(3478);

    function WN(dd, Jd) {
      return (0, kN.g)(!0, dd, Jd) ? () => {
        !async function(dd) {
          await dN.d.refresh();
          const {
            data: Jd,
            failed: kd
          } = dN.d.getState();
          if (null === Jd || kd) return;
          const pd = dN.d.getExclusion(dd);
          if ("blocked" === pd) return;
          const Nd = null === pd;
          Ap.NotificationProvider.showCustomPopup({
            body: Jd => {
              const kd = kd => ({
                text: pN.j[kd].text,
                onClick: () => {
                  Jd(), (0, NN.e)(kd, dd, null)
                }
              });
              return (0, Kd.jsx)(JN.i, {
                title: Nd ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: dd
                  }
                },
                secondary: Nd ? kd("ignore") : void 0,
                confirm: kd("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: Jd
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(dd)
      } : null
    }
    kd(3497);
    const PN = (0, Nd.memo)((function(dd) {
      let {
        show: Jd,
        onOpen: kd,
        onClose: pd
      } = dd;
      const [Wd, Zd] = (0, Nd.useState)(""), [gd, od] = (0, Nd.useState)(""), [ld, Qd] = (0, Nd.useState)(null), [Ld, Od] = (0, Nd.useState)(null), ed = (0, Md.k)("hiddenPlayerNames"), Rd = {
        kind: "worldCodeLine",
        onSubmit: (dd, Jd) => {
          pd(), Cd.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: Ld,
            WC: dd,
            details: Jd
          })
        }
      }, Id = {
        kind: "player",
        shownPlayerName: (0, kJ.e)(Wd, ed),
        onSubmit: (dd, Jd) => {
          pd(), (0, wp.c)({
            playerId: gd,
            playerName: Wd,
            chatMsgId: Ld,
            policyId: dd,
            details: Jd,
            onAccepted: WN(Wd, ed)
          })
        }
      };
      return (0, sd.h)("OpenReportMenu", (dd => {
        let {
          playerEId: Jd,
          playerName: pd,
          IC: Nd,
          serverChatMsgId: Wd
        } = dd;
        od(Jd), Zd(pd), Qd(Nd), Od(Wd), kd()
      })), (0, Kd.jsx)(Pd.e, {
        show: Jd,
        close: pd,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Kd.jsx)("div", {
          className: "ReportPanel",
          children: Jd && (0, Kd.jsx)(Hp.c, {
            reported: null === gd ? Rd : Id,
            chatMessage: ld,
            inGame: !0,
            onCancel: pd
          })
        })
      })
    }));
    var ZN = kd(37023);
    const gN = (0, Nd.memo)((function(dd) {
      let {
        show: Jd,
        onOpen: kd,
        onClose: pd
      } = dd;
      const {
        t: Wd
      } = (0, zd.B)(), [Zd, gd] = (0, Nd.useState)(null), [od, ld] = (0, Nd.useState)(0);
      (0, sd.h)("OpenDiscordReportBox", (dd => {
        Cd.gameBridge.send("requestDiscordReportKey", dd), ld(0), kd()
      }));
      const Ld = () => {
        pd(), gd(null), ld(0)
      };
      return (0, sd.h)("setDiscordReportKey", (dd => {
        gd(dd)
      })), (0, Kd.jsx)(Pd.e, {
        show: Jd,
        close: Ld,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, Kd.jsx)("div", {
          className: "ReportPanel",
          children: (0, Kd.jsx)(JN.i, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(ZN.d, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: Ld
            },
            padStartsOn: "cancel",
            children: (0, Kd.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, Kd.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== Zd && void 0 !== Zd ? Zd : Wd("report:loadingReportKey")
              }), (0, Kd.jsx)(Qd.d, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(Zd).catch((dd => {
                    console.error("Failed to copy report key:", dd)
                  })), ld(Date.now())
                },
                disabled: Date.now() - od < 1e3 || !Zd,
                children: Date.now() - od < 1e3 ? Wd("general:copied") : Wd("general:copy")
              })]
            })
          })
        })
      })
    }));
    var CN = kd(1307);
    const KN = {
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
      oN = (0, Nd.memo)((function(dd) {
        let {
          show: Jd,
          onOpen: kd,
          onClose: pd
        } = dd;
        const [Wd, Zd] = (0, Nd.useState)(null), gd = (0, Nd.useRef)(0), od = (0, Nd.useRef)(null), {
          t: ld
        } = (0, zd.B)();
        (0, sd.h)("EditCustomLobbyBlock", (dd => {
          let {
            pos: Jd
          } = dd;
          Zd(Jd), null !== Jd && kd(), od.current.scrollTo(0, gd.current)
        }));
        const Qd = dd => {
          Cd.gameBridge.send("setCustomLobbyBlock", {
            pos: Wd,
            blockName: dd
          }), pd()
        };
        return (0, Kd.jsx)(Pd.e, {
          className: "CustomLobbyBlockEditorOuter",
          close: pd,
          escDoesExit: !0,
          show: Jd,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Kd.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: od,
            onScroll: () => {
              gd.current = od.current.scrollTop
            },
            children: (0, Kd.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(KN).map((dd => {
                let [Jd, kd] = dd;
                return (0, Kd.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Kd.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: ld(Jd)
                  }), (0, Kd.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(kd).map((dd => {
                      let [Jd, {
                        tooltip: kd,
                        blocks: pd
                      }] = dd;
                      return (0, Kd.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Kd.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [ld(Jd), (0, Kd.jsx)(td.e, {
                            hoverInfo: ld(kd),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Kd.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: pd.map((dd => (0, Kd.jsx)(lN, {
                            blockName: dd,
                            selectBlock: Qd
                          }, dd)))
                        })]
                      }, Jd)
                    }))
                  })]
                }, Jd)
              }))
            })
          })
        })
      })),
      lN = (0, Nd.memo)((function(dd) {
        var Jd;
        let {
          blockName: kd,
          selectBlock: pd
        } = dd;
        const Nd = (0, gp.c)(kd),
          Wd = null !== (Jd = void 0 === Nd ? void 0 : (0, Zp.displayNameOf)(Nd)) && void 0 !== Jd ? Jd : kd,
          Pd = void 0 === Nd ? void 0 : (0, Zp.descriptionOf)(Nd);
        return (0, Kd.jsx)(td.f, {
          tooltipInner: (0, Kd.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Kd.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Kd.jsx)(Bd.c, {
                text: Wd
              })
            }), Pd && (0, Kd.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Kd.jsx)(Bd.c, {
                text: Pd
              })
            })]
          }),
          children: (0, Kd.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => pd(kd),
            children: (0, Kd.jsx)(Pk.d, {
              itemName: kd,
              amount: 1
            })
          })
        }, kd)
      }));
    var QN = kd(2851),
      LN = kd(4085),
      ON = kd(9272);

    function eN() {
      const dd = (0, Md.k)("itemInfo");
      return (0, Nd.useMemo)((() => function(dd) {
        return {
          getDefaultItemStat(Jd, kd) {
            var pd;
            const Nd = dd[Jd];
            return "description" === kd ? null === Nd || void 0 === Nd ? void 0 : Nd.description : null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.displayName) && void 0 !== pd ? pd : Jd
          }
        }
      }(dd)), [dd])
    }
    const RN = (0, Nd.memo)((function(dd) {
        var Jd, kd, pd, Wd, Zd, gd, Cd, od, ld, Qd, Ld, Od, Rd, Id, Gd, vd, xd, qd, Bd, ad, Md, Fd, Yd;
        let {
          togglePointerLock: md,
          show: bd,
          onOpen: Sd,
          onClose: jd
        } = dd;
        const {
          t: Xd
        } = (0, zd.B)(), fd = eN(), nd = (0, Nd.useRef)(null), Ud = (0, Nd.useRef)(LN.b.MobHungerLevel.Hungry), yd = (0, Nd.useRef)(null), Dd = (0, QN.b)(), Td = (0, Nd.useRef)(null), Ed = (0, Nd.useRef)(null), cd = nd.current;
        (0, Nd.useEffect)((() => {
          if (!bd) return;
          const dd = ON.j.openPet(Td.current);
          return Ed.current = dd, () => {
            dd.close(), Ed.current = null
          }
        }), [bd]), (0, Nd.useEffect)((() => {
          bd && cd && Ed.current.show(function(dd) {
            var Jd;
            let {
              mobType: kd,
              mobSettings: pd
            } = dd;
            return {
              mobType: kd,
              variation: null !== (Jd = pd.variation) && void 0 !== Jd ? Jd : "default",
              metaInfo: pd.metaInfo,
              tamed: !(0, vp.I)(pd.ownerDbId)
            }
          }(cd))
        }), [bd, cd]), (0, Nd.useEffect)((() => {
          const dd = () => {
            var dd;
            const Jd = LN.b.getMobHungerLevel(null === (dd = nd.current) || void 0 === dd ? void 0 : dd.mobSettings.petInfo.lastFedAt);
            if (Jd !== Ud.current && (Ud.current = Jd, Dd()), yd.current) {
              var kd;
              const dd = Date.now(),
                Jd = LN.b.getNextStateAt(null === (kd = nd.current) || void 0 === kd ? void 0 : kd.mobSettings.petInfo.lastFedAt);
              let pd = Math.floor((Jd - dd) / 1e3),
                Nd = "";
              if (pd > 3600) {
                Nd += Math.floor(pd / 60 / 60).toString().padStart(2, "0"), Nd += ":", pd %= 3600
              }
              const Wd = pd % 60;
              Nd += Math.floor(pd / 60).toString().padStart(2, "0"), Nd += ":", Nd += Wd.toString().padStart(2, "0"), yd.current.textContent = Nd
            }
          };
          dd();
          const Jd = setInterval(dd, 250);
          return () => {
            clearInterval(Jd)
          }
        }), [cd, Dd]), (0, sd.h)("showPetUi", (dd => {
          let {
            mobType: Jd,
            mobSettings: kd
          } = dd;
          nd.current = {
            mobType: Jd,
            mobSettings: kd
          }, bd || Sd()
        }));
        const hd = null === (Jd = nd.current) || void 0 === Jd ? void 0 : Jd.mobSettings.health,
          rd = null === (kd = nd.current) || void 0 === kd ? void 0 : kd.mobSettings.maxHealth,
          ud = LN.b.getFriendshipLevelInfo(null !== (pd = null === (Wd = nd.current) || void 0 === Wd ? void 0 : Wd.mobSettings.petInfo.friendshipPoints) && void 0 !== pd ? pd : 0);
        return (0, Kd.jsx)(Pd.e, {
          className: "PetUIOuter",
          close: jd,
          escDoesExit: !0,
          show: bd,
          togglePointerLock: md,
          forcePointerUnlock: bd,
          globallyUniqueKey: "PetUI",
          children: (0, Kd.jsx)("div", {
            className: "PetUI",
            children: (0, Kd.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Kd.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Kd.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Zd = null === (gd = nd.current) || void 0 === gd ? void 0 : gd.mobSettings.name) && void 0 !== Zd ? Zd : "Your Pet"
                }), (0, Kd.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Td
                })]
              }), (0, Kd.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, vp.I)(null === (Cd = nd.current) || void 0 === Cd ? void 0 : Cd.mobSettings.petInfo.friendshipPoints) && (0, Kd.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Kd.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Xd("mobAiPlugin:friendshipTitle")
                  }), (0, Kd.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: LN.b.getIconsFromFriendshipPoints(null !== (od = nd.current.mobSettings.petInfo.friendshipPoints) && void 0 !== od ? od : 0).map(((dd, Jd) => (0, Kd.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: dd,
                        amount: 1
                      })
                    }, Jd)))
                  }), (0, Kd.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Kd.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Kd.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${ud.totalPointsForNextLevel>0?Math.max(ud.pointsIntoCurrentLevel/ud.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Kd.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: ud.totalPointsForNextLevel > 0 ? ` ${Math.ceil(ud.pointsIntoCurrentLevel)}/${Math.ceil(ud.totalPointsForNextLevel)}` : Math.ceil(ud.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Kd.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Kd.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Xd("mobAiPlugin:hungerTitle")
                  }), (0, Kd.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: LN.b.hungerLevelIcons[Ud.current].map(((dd, Jd) => (0, Kd.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: dd,
                        amount: 1
                      })
                    }, Jd)))
                  }), (0, Kd.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Xd(LN.b.hungerLevelTranslations[Ud.current].translationKey), Ud.current !== LN.b.MobHungerLevel.Starving && !(0, vp.I)(null === (ld = nd.current) || void 0 === ld ? void 0 : ld.mobSettings.petInfo.lastFedAt) && (0, Kd.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Xd("mobAiPlugin:nextFeedIn", {
                        state: Xd(LN.b.hungerLevelTranslations[Ud.current + 1].translationKey)
                      }), ":", " ", (0, Kd.jsx)("span", {
                        ref: yd
                      })]
                    })]
                  })]
                }), (0, Kd.jsx)(td.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kd.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Xd("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Kd.jsxs)("div", {
                    className: xk()("PetUIQuickStatsItem", {
                      Disabled: (0, vp.I)(hd) || (0, vp.I)(rd)
                    }),
                    children: [(0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, vp.I)(hd) || (0, vp.I)(rd) ? "" : (0, Kd.jsxs)(Kd.Fragment, {
                        children: [Math.ceil(hd), (0, Kd.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(rd)]
                        })]
                      })
                    })]
                  })
                }), (0, Kd.jsx)(td.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kd.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Xd("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Kd.jsxs)("div", {
                    className: xk()("PetUIQuickStatsItem", {
                      Disabled: (0, vp.I)(null === (Qd = nd.current) || void 0 === Qd ? void 0 : Qd.mobSettings.attackDamage) || nd.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Ld = nd.current) || void 0 === Ld ? void 0 : Ld.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Kd.jsx)(td.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kd.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Xd("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Kd.jsxs)("div", {
                    className: xk()("PetUIQuickStatsItem", {
                      Disabled: (0, vp.I)(null === (Od = nd.current) || void 0 === Od ? void 0 : Od.mobSettings.secondaryAttackDamage) || nd.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Rd = nd.current) || void 0 === Rd ? void 0 : Rd.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Kd.jsx)(td.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kd.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Xd("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Kd.jsxs)("div", {
                    className: xk()("PetUIQuickStatsItem", {
                      Disabled: (0, vp.I)(null === (Id = nd.current) || void 0 === Id ? void 0 : Id.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Gd = null === (vd = nd.current) || void 0 === vd || null === (xd = vd.mobSettings.baseRunningSpeed) || void 0 === xd ? void 0 : xd.toFixed(2)) && void 0 !== Gd ? Gd : ""
                    })]
                  })
                }), (0, Kd.jsx)(td.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Kd.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Xd("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Kd.jsxs)("div", {
                    className: xk()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (qd = nd.current) || void 0 === qd ? void 0 : qd.mobSettings.metaInfo)
                    }),
                    children: [(0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Kd.jsx)(Pk.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Kd.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (Bd = nd.current) || void 0 === Bd ? void 0 : Bd.mobSettings.metaInfo) ? (0, Kd.jsx)(ed.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, vp.I)(null === (ad = nd.current) || void 0 === ad ? void 0 : ad.mobSettings.tameInfo) && (0, Kd.jsxs)(Kd.Fragment, {
                  children: [(0, Kd.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Kd.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kd.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kd.jsx)(GN, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: LN.b.feedTextColours[LN.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kd.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Kd.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: nd.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Kd.jsx)(IN, {
                            food: nd.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Kd.jsx)(GN, {
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
                    }), (0, Kd.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kd.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kd.jsx)(GN, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: LN.b.feedTextColours[LN.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kd.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Md = nd.current.mobSettings.tameInfo.likedFoods) || void 0 === Md ? void 0 : Md.filter((dd => !nd.current.mobSettings.petInfo.superlikedFoodKnown || dd !== nd.current.mobSettings.petInfo.superlikedFood)).map((dd => (0, Kd.jsx)(IN, {
                          food: dd
                        }, dd)))
                      })]
                    }), (0, Kd.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kd.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kd.jsx)(GN, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: LN.b.feedTextColours[LN.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kd.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Fd = nd.current.mobSettings.tameInfo.neutralFoods) || void 0 === Fd ? void 0 : Fd.map((dd => (0, Kd.jsx)(IN, {
                          food: dd
                        }, dd)))
                      })]
                    }), (0, Kd.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Kd.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Kd.jsx)(GN, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: LN.b.feedTextColours[LN.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Kd.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Yd = nd.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Yd ? void 0 : Yd.map((dd => (0, Kd.jsx)(IN, {
                          food: dd
                        }, dd)))
                      })]
                    })]
                  }), nd.current.mobSettings.tameInfo.levelUpBonuses && (0, Kd.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: LN.b.MAX_LEVEL + 1
                    }).map(((dd, Jd) => {
                      const kd = Jd;
                      if (0 === kd) return null;
                      const pd = nd.current.mobSettings.tameInfo.levelUpBonuses[kd],
                        Nd = LN.b.getBonusDisplayInfo(fd, nd.current.mobSettings, nd.current.mobType, pd);
                      return (0, Kd.jsxs)("div", {
                        className: xk()("PetUIFeedDropContainer", {
                          Selected: kd === LN.b.getFriendshipLevelInfo(nd.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Kd.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: kd
                          }).map(((dd, Jd) => (0, Kd.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Kd.jsx)(Pk.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${kd}-${Jd}`)))
                        }), (0, Kd.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Nd && (0, Kd.jsx)(GN, {
                            icon: Nd.icon,
                            displayName: Nd.displayName,
                            description: Nd.description
                          })
                        })]
                      }, kd)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      IN = (0, Nd.memo)((function(dd) {
        let {
          food: Jd,
          includeDescription: kd = !1
        } = dd;
        const pd = eN(),
          Nd = pd.getDefaultItemStat(Jd, "displayName"),
          Wd = pd.getDefaultItemStat(Jd, "description");
        return (0, Kd.jsx)(GN, {
          icon: Jd,
          displayName: Nd,
          description: kd ? Wd : null
        })
      })),
      GN = (0, Nd.memo)((function(dd) {
        let {
          icon: Jd,
          displayName: kd,
          description: pd,
          tintColor: Nd,
          className: Wd = "PetUIFoodItem"
        } = dd;
        return (0, Kd.jsx)(td.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Kd.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Kd.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Kd.jsx)(Bd.c, {
                text: kd
              })
            }), pd && (0, Kd.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Kd.jsx)(Bd.c, {
                text: pd
              })
            })]
          }),
          children: (0, Kd.jsx)("div", {
            className: Wd,
            children: (0, Kd.jsx)(Pk.d, {
              itemName: Jd,
              amount: 1,
              tintColor: Nd
            })
          })
        })
      }));
    var vN = kd(3624),
      xN = kd(1147),
      qN = kd(1260),
      BN = kd(37041),
      sN = kd(37035),
      iN = kd(1013),
      aN = kd(2316);

    function MN(dd) {
      let {
        peers: Jd
      } = dd;
      const [kd, pd] = (0, Nd.useState)(null), Wd = (0, Md.k)("players");
      return (0, Kd.jsx)("div", {
        className: "CodeEditorPresence",
        children: Jd.map((dd => {
          var Jd, Nd;
          const Pd = null !== (Jd = null === (Nd = Wd.byId[dd.playerId]) || void 0 === Nd ? void 0 : Nd.cosmetics) && void 0 !== Jd ? Jd : {};
          return (0, Kd.jsxs)("div", {
            className: xk()("PresenceIcon", {
              Viewer: !dd.isEditor
            }),
            style: {
              backgroundColor: dd.colour
            },
            onMouseEnter: () => {
              pd(dd.playerId)
            },
            onMouseLeave: () => {
              pd(null)
            },
            children: [(0, Kd.jsx)(aN.e, {
              cosmetics: Pd
            }), kd === dd.playerId && (0, Kd.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: dd.colour
              },
              children: dd.playerName
            })]
          }, dd.playerId)
        }))
      })
    }
    var FN = kd(638),
      YN = kd(37030),
      mN = kd(36715),
      bN = kd(37048);

    function SN(dd) {
      const Jd = dd.split("/"),
        kd = [];
      for (let pd = 1; pd < Jd.length; pd++) kd.push(Jd.slice(0, pd).join("/"));
      return kd
    }

    function jN(dd) {
      return dd.slice(dd.lastIndexOf("/") + 1)
    }
    const XN = (0, Nd.memo)((function(dd) {
      var Jd;
      let {
        files: kd,
        activePath: pd,
        canEdit: Wd,
        directoryLinked: Pd,
        pluginNames: Zd,
        activePluginName: gd,
        activePluginFile: Cd,
        onSelect: od,
        onSelectPlugin: ld,
        onCreate: Ld,
        onRename: Od,
        onRenameFolder: Rd,
        onDelete: Id,
        onToggleDirectorySync: Gd,
        schematics: vd,
        onManageSchematic: xd
      } = dd;
      const {
        t: qd
      } = (0, zd.B)(), Bd = null !== (Jd = (0, sN.e)(kd)) && void 0 !== Jd ? Jd : qN.h, sd = Object.keys(kd), [ad, Md] = (0, Nd.useState)((() => new Set)), Fd = function(dd, Jd, kd) {
        const pd = {
          folders: new Map,
          files: []
        };
        for (const Pd of dd) {
          if (Pd === Jd) continue;
          let dd = pd;
          for (const Jd of SN(Pd)) {
            let kd = dd.folders.get(Jd);
            kd || (kd = {
              folders: new Map,
              files: []
            }, dd.folders.set(Jd, kd)), dd = kd
          }
          dd.files.push(Pd)
        }
        const Nd = [];
        dd.includes(Jd) && Nd.push({
          kind: "file",
          path: Jd,
          name: jN(Jd),
          depth: 0
        });
        const Wd = (dd, Jd) => {
          const pd = [...dd.folders.entries()].sort(((dd, Jd) => {
            let [kd] = dd, [pd] = Jd;
            return kd.localeCompare(pd)
          }));
          for (const [Pd, Zd] of pd) {
            const dd = kd.has(Pd);
            Nd.push({
              kind: "folder",
              path: Pd,
              name: jN(Pd),
              depth: Jd,
              collapsed: dd
            }), dd || Wd(Zd, Jd + 1)
          }
          dd.files.sort(((dd, Jd) => dd.localeCompare(Jd)));
          for (const kd of dd.files) Nd.push({
            kind: "file",
            path: kd,
            name: jN(kd),
            depth: Jd
          })
        };
        return Wd(pd, 0), Nd
      }(sd, Bd, ad);
      (0, Nd.useEffect)((() => {
        Md((dd => {
          const Jd = new Set(dd);
          let kd = !1;
          for (const Nd of SN(pd)) kd = Jd.delete(Nd) || kd;
          return kd ? Jd : dd
        }))
      }), [pd]);
      const Yd = sd.length >= EJ.B,
        md = (dd, Jd) => {
          if (dd.length > BN.s) return `Path must be at most ${BN.s} characters`;
          if (!(0, BN.p)(dd)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === dd) return "index.d.ts cannot be the world-code entry";
          const pd = !!Jd && (0, sN.h)(Jd, dd);
          if (Jd && (0, sN.l)(Jd) && !pd) return `Cannot rename ${Jd} (only swapping ${qN.h} and ${qN.l} is allowed)`;
          if (dd in kd) return "A file with that path already exists";
          if ((0, sN.l)(dd) && !pd) {
            if ((dd === qN.h ? qN.l : qN.h) in kd) return `World code cannot have both ${qN.h} and ${qN.l}`
          }
          return null
        },
        bd = dd => {
          Ap.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === dd ? void 0 : `${dd}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: dd => md(dd)
          }).getResult().then((dd => {
            "notificationTornDown" !== dd && null !== dd && "submit" === dd.type && Ld(dd.value)
          }))
        },
        Sd = dd => {
          Ap.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: dd,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Jd => Jd === dd ? "That is already the file's path" : md(Jd, dd)
          }).getResult().then((Jd => {
            "notificationTornDown" !== Jd && null !== Jd && "submit" === Jd.type && Od(dd, Jd.value)
          }))
        },
        jd = dd => {
          const Jd = dd => dd.replace(/\/+$/, "");
          Ap.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: dd,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: kd => {
              const pd = Jd(kd);
              if (pd === dd) return "That is already the folder's path";
              for (const [Jd, Nd] of(0, sN.q)(sd, dd, pd)) {
                const dd = md(Nd, Jd);
                if (null !== dd) return dd
              }
              return null
            }
          }).getResult().then((kd => {
            "notificationTornDown" !== kd && null !== kd && "submit" === kd.type && Rd(dd, Jd(kd.value))
          }))
        },
        Xd = dd => {
          Ap.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: dd
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((Jd => {
            !0 === Jd && Id(dd)
          }))
        };
      return (0, Kd.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Kd.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Kd.jsx)("span", {
            children: "Files"
          }), Wd && !Yd && (0, Kd.jsx)(Qd.n, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              bd()
            },
            children: (0, Kd.jsx)(ed.e, {
              name: "plus"
            })
          })]
        }), (0, Kd.jsxs)("div", {
          className: "FileTreeList",
          children: [Fd.map((dd => {
            const Jd = dd.path;
            if ("folder" === dd.kind) return (0, Kd.jsx)(UN, {
              path: Jd,
              name: dd.name,
              depth: dd.depth,
              collapsed: dd.collapsed,
              onToggle: () => {
                var dd;
                dd = Jd, Md((Jd => {
                  const kd = new Set(Jd);
                  return kd.delete(dd) || kd.add(dd), kd
                }))
              },
              canCreate: Wd && !Yd,
              canRename: Wd,
              onCreate: bd,
              onRename: jd
            }, `folder:${Jd}`);
            const Nd = (0, sN.l)(Jd),
              Pd = qN.h in kd && qN.l in kd,
              Zd = !Nd || Pd,
              Cd = null === gd && Jd === pd;
            return (0, Kd.jsx)(DN, {
              path: Jd,
              label: dd.name,
              depth: dd.depth,
              isActive: Cd,
              canRename: Wd,
              onSelect: od,
              onRename: Sd,
              onDelete: Xd,
              canDelete: Zd && Wd
            }, Jd)
          })), (0, Kd.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Kd.jsxs)("span", {
              children: ["Schematics (", Object.keys(vd).length, "/", bN.g, ")"]
            }), Wd && (0, Kd.jsx)(Qd.n, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(vd).length >= bN.g,
              onClick: () => {
                xd("")
              },
              children: (0, Kd.jsx)(ed.e, {
                name: "plus"
              })
            })]
          }), Object.keys(vd).sort().map((dd => (0, Kd.jsx)(DN, {
            path: dd,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: xd
          }, dd))), Zd.length > 0 && (0, Kd.jsxs)(Kd.Fragment, {
            children: [(0, Kd.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Kd.jsx)("span", {
                children: "Plugins"
              })
            }), Zd.map((dd => {
              var Jd;
              const kd = YN.g[dd],
                pd = Object.keys(null !== (Jd = null === kd || void 0 === kd ? void 0 : kd.files) && void 0 !== Jd ? Jd : {
                  "index.ts": ""
                }).sort(((dd, Jd) => "index.ts" === dd ? -1 : "index.ts" === Jd ? 1 : dd.localeCompare(Jd)));
              return (0, Kd.jsxs)("div", {
                children: [(0, Kd.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, sN.D)(dd)
                }), pd.map((Jd => (0, Kd.jsx)(DN, {
                  path: Jd,
                  nested: !0,
                  isActive: gd === dd && Cd === Jd,
                  canRename: !1,
                  onSelect: () => {
                    ld(dd, Jd)
                  },
                  canDelete: !1
                }, Jd)))]
              }, dd)
            }))]
          })]
        }), (0, Kd.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Kd.jsx)(Qd.d, {
            className: "FileTreeFooterButton",
            onClick: Gd,
            children: qd(Pd ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function fN(dd) {
      return dd > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": dd
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function nN(dd) {
      let {
        depth: Jd
      } = dd;
      return (0, Kd.jsx)(Kd.Fragment, {
        children: Array.from({
          length: Jd
        }, ((dd, Jd) => (0, Kd.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": Jd
          }
        }, Jd)))
      })
    }

    function UN(dd) {
      let {
        path: Jd,
        name: kd,
        depth: pd,
        collapsed: Nd,
        onToggle: Wd,
        canCreate: Pd,
        canRename: Zd,
        onCreate: gd,
        onRename: Cd
      } = dd;
      const od = [];
      Pd && od.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          gd(Jd)
        }
      }), Zd && od.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Cd(Jd)
        }
      });
      const ld = fN(pd);
      return (0, Kd.jsxs)("div", {
        className: xk()("FileTreeItem FileTreeFolder", ld.className),
        style: ld.style,
        children: [(0, Kd.jsx)(nN, {
          depth: pd
        }), (0, Kd.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Nd,
          onClick: Wd,
          children: [(0, Kd.jsx)(ed.e, {
            className: "FileTreeFolderCaret",
            name: Nd ? "caret-right" : "caret-down"
          }), (0, Kd.jsx)(ed.e, {
            className: "FileTreeFolderIcon",
            name: Nd ? "folder" : "folder-open"
          }), kd]
        }), (0, Kd.jsx)(yN, {
          path: Jd,
          actions: od
        })]
      })
    }

    function yN(dd) {
      let {
        path: Jd,
        actions: kd
      } = dd;
      const pd = (0, Nd.useRef)(null);
      return 0 === kd.length ? null : (0, Kd.jsxs)("div", {
        ref: pd,
        className: "FileTreeItemActions",
        children: [(0, Kd.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${Jd}`,
          children: (0, Kd.jsx)(ed.e, {
            name: "ellipsis"
          })
        }), (0, Kd.jsx)(mN.c, {
          triggerElementRef: pd,
          options: kd
        })]
      })
    }

    function DN(dd) {
      let {
        path: Jd,
        label: kd = Jd,
        depth: pd = 0,
        isActive: Nd,
        canRename: Wd,
        onSelect: Pd,
        onRename: Zd,
        onDelete: gd,
        canDelete: Cd,
        nested: od
      } = dd;
      const ld = [];
      Wd && Zd && ld.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Zd(Jd)
        }
      }), Cd && gd && ld.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          gd(Jd)
        }
      });
      const Qd = fN(pd);
      return (0, Kd.jsxs)("div", {
        className: xk()("FileTreeItem", Qd.className, {
          Active: Nd,
          Nested: od
        }),
        style: Qd.style,
        children: [(0, Kd.jsx)(nN, {
          depth: pd
        }), (0, Kd.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: kd === Jd ? void 0 : Jd,
          onClick: () => {
            Pd(Jd)
          },
          children: kd
        }), (0, Kd.jsx)(yN, {
          path: Jd,
          actions: ld
        })]
      })
    }
    async function TN(dd) {
      const Jd = (0, sN.e)(dd);
      if (!Jd || "" === dd[Jd].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: pd
      } = await Promise.all([kd.e(290), kd.e(291)]).then((() => kd(41448)));
      return (0, YN.c)(pd(dd))
    }
    var EN = kd(37050);

    function cN(dd, Jd) {
      const kd = Object.keys(dd),
        pd = Object.keys(Jd);
      if (kd.length !== pd.length) return !1;
      for (const Nd of kd)
        if (!(Nd in Jd) || dd[Nd] !== Jd[Nd]) return !1;
      return !0
    }

    function hN(dd, Jd) {
      const kd = [],
        pd = [],
        Nd = [];
      for (const Wd of Object.keys(Jd)) Wd in dd ? dd[Wd] !== Jd[Wd] && Nd.push(Wd) : kd.push(Wd);
      for (const Wd of Object.keys(dd)) Wd in Jd || pd.push(Wd);
      return kd.sort(), pd.sort(), Nd.sort(), {
        creates: kd,
        deletes: pd,
        updates: Nd
      }
    }

    function rN(dd, Jd) {
      var kd;
      const pd = {
          ...dd
        },
        Nd = (0, sN.e)(Jd),
        Wd = (0, sN.e)(pd);
      if (qN.h in pd && qN.l in pd) {
        const dd = null !== Nd && void 0 !== Nd ? Nd : qN.l,
          kd = dd === qN.h ? qN.l : qN.h;
        var Pd;
        if (!(dd in pd)) pd[dd] = null !== (Pd = Jd[dd]) && void 0 !== Pd ? Pd : "";
        return delete pd[kd], pd
      }
      var Zd;
      return Nd && !(Nd in pd) ? (Wd || (pd[Nd] = null !== (Zd = Jd[Nd]) && void 0 !== Zd ? Zd : ""), pd) : (Wd || Nd || (pd[qN.h] = null !== (kd = pd[qN.h]) && void 0 !== kd ? kd : "", delete pd[qN.l]), pd)
    }

    function uN(dd, Jd) {
      const kd = (0, sN.e)(Jd),
        pd = qN.h in Jd && qN.l in Jd;
      return dd.filter((dd => !(0, sN.l)(dd) || (!!pd || kd !== dd)))
    }
    async function tN(dd, Jd, pd) {
      const Nd = dd.getLobbyFiles(),
        Wd = (0, EJ.l)(pd, (0, sN.s)(Nd, Jd)),
        Pd = await dd.ensureJoined(Jd),
        Zd = (0, BN.v)(Pd.docKey);
      if (Pd.doc === Wd) return;
      for (let kd = 0; kd < 100; kd++) {
        const kd = dd.getCollabSnapshot();
        if (kd && (0, BN.v)(kd.docKey) === Zd && dd.getActivePath() === Jd) {
          if (dd.replaceActiveDoc(Zd, Wd)) return;
          await (0, vp.O)(40)
        } else await (0, vp.O)(40)
      }
      const {
        ChangeSet: gd
      } = await kd.e(286).then((() => kd(41273))), Kd = dd.getCollabSnapshot(), od = Kd && (0, BN.v)(Kd.docKey) === Zd ? Kd : Pd;
      await async function(dd, Jd, kd, pd) {
        const Nd = dd.of({
            from: 0,
            to: kd.length,
            insert: pd
          }, kd.length),
          Wd = JSON.stringify([{
            clientID: Jd.clientID,
            changes: Nd.toJSON()
          }]),
          Pd = (0, BN.v)(Jd.docKey);
        Wd.length <= BN.e ? Cd.gameBridge.send("sendCodeCollab", {
          SJ: BN.c.Push,
          jJ: Pd,
          XJ: Jd.version,
          UJ: Wd
        }) : await (0, xN.postJsonWithMetricsCookiesAndJsonResponse)(`${Jd.httpConfig.gsUrl}/code/collab-push`, vN.r["collab-push"].toBuffer({
          gameNameWithVariation: Jd.httpConfig.gameNameWithVariation,
          lobbyName: Jd.httpConfig.lobbyName,
          docKey: Pd,
          version: Jd.version,
          updates: Wd
        }), {
          retries: 0
        })
      }(gd, od, od.doc, Wd)
    }
    class VN {
      constructor(dd) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = dd
      }
      async writeLobbyFiles(dd) {
        const Jd = {
            ...this.bridge.getLobbyFiles()
          },
          kd = {
            ...Jd
          };
        for (const {
            path: Wd,
            text: Pd
          }
          of dd) kd[Wd] = Pd;
        if (!dd.every((dd => {
            let {
              path: Jd,
              text: pd
            } = dd;
            return (0, EJ.l)(pd, (0, sN.s)(kd, Jd)) === pd
          }))) return !1;
        const pd = [];
        try {
          for (const {
              path: Jd,
              text: kd
            }
            of dd) pd.push(Jd), Jd in this.bridge.getLobbyFiles() || (this.bridge.createFile(Jd, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(Jd, !0)), await tN(this.bridge, Jd, kd)
        } catch (Nd) {
          for (const dd of pd) dd in Jd ? await tN(this.bridge, dd, Jd[dd]).catch((Jd => {
            console.error("World Code AI: couldn't put back", dd, Jd)
          })) : this.bridge.deleteFile(dd);
          throw Nd
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const dd = await (0, EN.o)(this.bridge.getStorageKey());
        return !!dd && (this.handle = dd, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(dd), !0)
      }
      async unlinkFolder() {
        const dd = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, EN.e)(dd), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const dd = this.bridge.getStorageKey(),
          Jd = await (0, EN.m)(dd);
        return !!Jd && (!!await (0, EN.h)(Jd, "readwrite") && (this.handle = Jd, this.linked = !0, await (0, EN.y)(dd, Jd), await this.scaffoldLocalTypes(Jd), !0))
      }
      scaffoldLocalTypes(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const pd = (await TN(Jd)).map((dd => YN.g[dd])),
              Nd = pd.map((dd => {
                var Jd;
                return `${dd.name}:${Object.keys(null!==(Jd=null===dd||void 0===dd?void 0:dd.files)&&void 0!==Jd?Jd:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Nd) return;
            const {
              ensureLocalBloxdTypes: Wd
            } = await Promise.all([kd.e(82), kd.e(288), kd.e(293)]).then((() => kd(41457)));
            await Wd(dd, pd), this.scaffoldedPluginNamesKey = Nd
          } catch (pd) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", pd)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(dd) {
        this.handle && await this.scaffoldLocalTypes(this.handle, dd), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(dd)
      }
      async onDocTextChanged(dd, Jd) {
        if (!this.handle) return;
        const kd = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [dd]: Jd
        })];
        this.running && (this.pendingDocText.set(dd, Jd), kd.push(this.flushDocTextToDisk())), await Promise.all(kd)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const dd = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const Jd = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [kd, pd] of Jd) this.lastSynced[kd] !== pd && (await (0, EN.E)(dd, kd, pd), this.lastSynced = {
              ...this.lastSynced,
              [kd]: pd
            })
          }
        } catch (Jd) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", Jd), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, EN.s)(this.handle))
          } catch (dd) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", dd)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, EN.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const Jd = this.bridge.getLobbyFiles(),
              kd = await (0, EN.s)(this.handle);
            for (const dd of Object.keys(Jd).filter(bN.d)) {
              if (kd[dd] === EN.k) return void this.bridge.setMessage(`Move ${dd} outside the linked folder before syncing its placeholder.`, "warning");
              kd[dd] = bN.m
            }
            if (cN(kd, Jd)) {
              for (const dd of Object.keys(Jd).filter(bN.d)) await (0, EN.E)(this.handle, dd, bN.m);
              return this.lastSynced = {
                ...kd
              }, void this.beginWatch()
            }
            const pd = await this.promptReconcile(function(dd) {
              return null !== (0, sN.e)(dd)
            }(kd));
            if ("unlink" === pd) return void await this.unlinkFolder();
            if ("dismissed" === pd) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === pd) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(kd);
                for (const dd of Object.keys(Jd).filter(bN.d)) await (0, EN.E)(this.handle, dd, bN.m);
                this.lastSynced = {
                  ...await (0, EN.s)(this.handle)
                }
              } else await (0, EN.I)(this.handle, Jd), this.lastSynced = {
                ...Jd
              }
            } catch (dd) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", dd), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(dd) {
        return await new Promise((Jd => {
          const kd = [{
              choice: "local",
              Button: Qd.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Qd.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Qd.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            pd = (0, Kd.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Kd.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Kd.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: dd ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Kd.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: kd.filter((Jd => "local" !== Jd.choice || dd)).map((dd => {
                  let {
                    choice: kd,
                    Button: pd,
                    labelKey: Wd,
                    descriptionKey: Pd
                  } = dd;
                  return (0, Kd.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Kd.jsx)(pd, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (dd => {
                          Nd.tearDownNotification(), Jd(dd)
                        })(kd)
                      },
                      children: this.bridge.t(`codeEditor:${Wd}`)
                    }), (0, Kd.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Pd}`)
                    })]
                  }, kd)
                }))
              })]
            }),
            Nd = Ap.NotificationProvider.showCustomPopup({
              body: pd,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Nd.getResult().then((dd => {
            "notificationTornDown" === dd && Jd("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, EN.C)(this.handle, (dd => {
          this.onDiskFilesChanged(dd)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (dd) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", dd)
        }
      }
      async onDiskFilesChanged(dd) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const Jd = this.bridge.getLobbyFiles();
        let kd = rN(dd, this.lastSynced);
        for (const Wd in Jd)
          if ((0, bN.d)(Wd) && kd[Wd] === EN.k) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const pd = Object.keys(kd).filter((dd => (0, bN.d)(dd) && !(dd in Jd)));
        pd.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Wd of Object.keys(Jd).filter(bN.d))(Wd in kd || pd.length > 0 || !(Wd in this.lastSynced)) && (kd[Wd] = bN.m);
        if (!cN(kd, dd)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(dd, kd), kd = rN(await (0, EN.s)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!cN(kd, this.lastSynced)) {
          this.applying = !0;
          try {
            const dd = hN(this.lastSynced, kd);
            if (await this.pushDiskDeltaToLobby(kd, Jd), null !== this.lastLobbySeen)
              for (const kd of [...dd.creates, ...dd.updates, ...dd.deletes])(0, bN.d)(kd) || (kd in Jd ? this.lastLobbySeen[kd] = Jd[kd] : delete this.lastLobbySeen[kd]);
            this.lastSynced = {
              ...kd
            }
          } catch (Nd) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Nd), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(dd, Jd) {
        if (this.handle) {
          for (const kd of Object.keys(dd)) kd in Jd || await (0, EN.u)(this.handle, kd);
          for (const [kd, pd] of Object.entries(Jd)) dd[kd] !== pd && await (0, EN.E)(this.handle, kd, pd)
        }
      }
      async applyRemoteTreeToDisk(dd) {
        if (!this.handle) return;
        const Jd = this.lastLobbySeen;
        if (null === Jd) return void(this.lastLobbySeen = {
          ...dd
        });
        const kd = Object.keys(dd).filter((kd => Jd[kd] !== dd[kd])),
          pd = Object.keys(Jd).filter((Jd => !(Jd in dd)));
        if (0 !== kd.length || 0 !== pd.length) {
          this.applying = !0;
          try {
            for (const Jd of [...pd, ...kd]) try {
              if (Jd in dd) await (0, EN.E)(this.handle, Jd, dd[Jd]), this.lastSynced = {
                ...this.lastSynced,
                [Jd]: dd[Jd]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [Jd]: dd[Jd]
              };
              else {
                await (0, EN.u)(this.handle, Jd);
                const dd = {
                  ...this.lastSynced
                };
                delete dd[Jd], this.lastSynced = dd;
                const kd = {
                  ...this.lastLobbySeen
                };
                delete kd[Jd], this.lastLobbySeen = kd
              }
            } catch (Nd) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Nd), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(dd, Jd) {
        const kd = function(dd, Jd) {
          const kd = (0, sN.e)(dd),
            pd = (0, sN.e)(Jd);
          return kd && pd && kd !== pd ? {
            from: kd,
            to: pd
          } : null
        }(dd, Jd);
        return !!kd && (this.bridge.renameFile(kd.from, kd.to), await this.bridge.waitForLobbyPath(kd.to, !0), !0)
      }
      async applyLocalTreeToLobby(dd) {
        var Jd;
        const kd = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), dd);
        const pd = this.bridge.getLobbyFiles(),
          Nd = hN(pd, dd),
          Wd = uN(Nd.deletes, pd);
        for (const Cd of Nd.creates)(0, bN.d)(Cd) || (this.bridge.createFile(Cd, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Cd, !0));
        for (const Cd of Wd)(0, bN.d)(Cd) || (this.bridge.deleteFile(Cd), await this.bridge.waitForLobbyPath(Cd, !1));
        if (!(0, sN.e)(this.bridge.getLobbyFiles()) && !(0, sN.e)(dd)) {
          if (this.bridge.createFile(qN.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(qN.h, !0), !this.handle) return;
          await (0, EN.E)(this.handle, qN.h, ""), dd = {
            ...dd,
            [qN.h]: ""
          }
        }
        const Pd = this.bridge.getLobbyFiles();
        for (const Cd of Object.keys(dd))(0, bN.d)(Cd) || Pd[Cd] !== dd[Cd] && await tN(this.bridge, Cd, dd[Cd]);
        const Zd = this.bridge.getLobbyFiles(),
          gd = kd in Zd ? kd : null !== (Jd = (0, sN.e)(Zd)) && void 0 !== Jd ? Jd : qN.h;
        await this.bridge.ensureJoined(gd)
      }
      async pushDiskDeltaToLobby(dd, Jd) {
        const kd = this.bridge.getActivePath(),
          pd = await this.renameLobbyEntryIfSwitched(Jd, dd) ? this.bridge.getLobbyFiles() : Jd,
          Nd = hN(this.lastSynced, dd),
          Wd = uN(Nd.deletes, pd).filter((dd => dd in pd));
        for (const Pd of Nd.creates)(0, bN.d)(Pd) || (Pd in this.bridge.getLobbyFiles() || (this.bridge.createFile(Pd, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Pd, !0)), await tN(this.bridge, Pd, dd[Pd]));
        for (const Pd of Wd)(0, bN.d)(Pd) ? await this.bridge.deleteSchematic(Pd) : (this.bridge.deleteFile(Pd), await this.bridge.waitForLobbyPath(Pd, !1));
        for (const Pd of Nd.updates)(0, bN.d)(Pd) || await tN(this.bridge, Pd, dd[Pd]);
        kd in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== kd && await this.bridge.ensureJoined(kd)
      }
    }
    var zN = kd(1220);

    function HN() {
      const {
        websocketUrl: dd,
        gameNameWithVariation: Jd,
        lobbyName: kd
      } = Cd.gameBridge.latest("connectedGame");
      return {
        gsUrl: zN.clientSideServerUrls.getHttpUrlFromWebSocketUrl(dd),
        gameNameWithVariation: Jd,
        lobbyName: kd
      }
    }
    async function wN(dd) {
      const {
        gsUrl: Jd,
        gameNameWithVariation: kd,
        lobbyName: pd
      } = HN();
      return await (0, xN.postBinaryWithMetricsCookiesAndCustomResponse)(`${Jd}/code/schematics`, vN.sk.schematics.toBuffer({
        gameNameWithVariation: kd,
        lobbyName: pd,
        request: JSON.stringify(dd)
      }), {
        retries: 0
      }, xN.HttpPayloadType.json)
    }
    var AN = kd(36522);

    function dW(dd) {
      let {
        path: Jd,
        revision: kd
      } = dd;
      const [pd, Wd] = (0, Nd.useState)(""), [Pd, Zd] = (0, Nd.useState)(!1), [gd, Cd] = (0, Nd.useState)(0);
      return (0, Nd.useEffect)((() => {
        let dd = !1;
        return Wd(""), Zd(!1), wN({
          action: "preview",
          path: Jd
        }).then((Jd => {
          dd || Wd(`data:image/webp;base64,${Jd.previewBase64}`)
        })).catch((Jd => {
          console.error("Could not load schematic preview", Jd), dd || Zd(!0)
        })), () => {
          dd = !0
        }
      }), [Jd, kd, gd]), (0, Kd.jsxs)("div", {
        className: "SchematicPreview",
        children: [pd && (0, Kd.jsx)("img", {
          src: pd,
          alt: `Preview of ${Jd}`
        }), !pd && !Pd && (0, Kd.jsx)(Fd.b, {
          loaderType: "Secondary"
        }), Pd && (0, Kd.jsxs)(Kd.Fragment, {
          children: [(0, Kd.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Kd.jsx)(Qd.d, {
            onClick: () => {
              Cd(gd + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function JW(dd) {
      var Jd;
      let {
        initialPath: kd,
        onChanged: pd,
        onClose: Wd
      } = dd;
      const Pd = "" === kd,
        [Zd, gd] = (0, Nd.useState)(null),
        [Cd, od] = (0, Nd.useState)(kd),
        [ld, Ld] = (0, Nd.useState)(!1),
        [Od, ed] = (0, Nd.useState)(!1),
        [Rd, Id] = (0, Nd.useState)(null),
        [Gd, vd] = (0, Nd.useState)(!1),
        [xd, qd] = (0, Nd.useState)(""),
        Bd = (0, Nd.useRef)(null),
        sd = (0, Nd.useRef)(!1),
        ad = (0, Nd.useRef)(!0);
      (0, Nd.useEffect)((() => (ad.current = !0, wN({
        action: "state"
      }).then((dd => {
        ad.current && gd(dd)
      })).catch((dd => {
        console.error("Could not load schematic assets", dd), ad.current && qd("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        ad.current = !1
      })), []);
      const Md = null === Zd || void 0 === Zd ? void 0 : Zd.assets[kd],
        Fd = Object.keys(null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.assets) && void 0 !== Jd ? Jd : {}).length,
        Yd = Cd.trim(),
        md = Yd ? (0, bN.d)(Yd) ? null !== Zd && void 0 !== Zd && Zd.assets[Yd] && (Pd || Yd !== kd) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        bd = !!Yd && !md && (Pd ? Fd < bN.g : Yd !== kd),
        Sd = Gd || !Zd;
      async function jd(dd) {
        if (!sd.current && ad.current) {
          sd.current = !0, vd(!0), qd("");
          try {
            const Jd = await wN({
              ...dd,
              expectedRevision: Zd.revision
            });
            pd(Jd), ad.current && Wd()
          } catch (kd) {
            var Jd;
            if (console.error("Schematic asset operation failed", kd), ad.current) qd(kd instanceof rd.c ? null !== (Jd = kd.errorMessageForUser) && void 0 !== Jd ? Jd : kd.message : String(kd));
            try {
              const dd = await wN({
                action: "state"
              });
              pd(dd), ad.current && gd(dd)
            } catch (Nd) {
              console.error("Could not refresh schematic assets", Nd)
            }
          } finally {
            sd.current = !1, ad.current && vd(!1)
          }
        }
      }
      return (0, Kd.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Kd.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Pd ? "New schematic" : ld ? "Rename schematic" : "Schematic"
        }), xd && (0, Kd.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: xd
        }), !Zd && !xd && (0, Kd.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Kd.jsxs)("fieldset", {
          disabled: Sd,
          children: [Pd || ld ? (0, Kd.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Kd.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Kd.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Kd.jsx)(fk.e, {
                className: "InputGenericPopupInput",
                defaultValue: kd,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: od
              }, ld ? "rename" : "create")
            })]
          }) : (0, Kd.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: kd
          }), (Pd || ld) && md && (0, Kd.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: md
          }), Pd ? (0, Kd.jsxs)(Kd.Fragment, {
            children: [Fd >= bN.g && (0, Kd.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", bN.g, " maximum)."]
            }), Od ? (0, Kd.jsxs)(Kd.Fragment, {
              children: [(0, Kd.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Kd.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Sd || !bd,
                children: (0, Kd.jsx)(AN.c, {
                  loading: null === Rd,
                  schematics: null !== Rd && void 0 !== Rd ? Rd : [],
                  disableAutoExport: !0,
                  onSchematicPicked: dd => {
                    !Sd && bd && jd({
                      action: "profile",
                      path: Yd,
                      schematicId: dd.schematicId
                    })
                  }
                })
              }), (0, Kd.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Kd.jsx)(Qd.d, {
                  className: "InputGenericPopupButton",
                  disabled: Sd,
                  onClick: () => {
                    ed(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Kd.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Kd.jsx)(Qd.d, {
                className: "InputGenericPopupButton",
                disabled: Sd || !bd,
                onClick: () => {
                  Bd.current.click()
                },
                children: "Upload Schematic"
              }), (0, Kd.jsx)(Qd.d, {
                className: "InputGenericPopupButton",
                disabled: Sd || !bd,
                onClick: () => {
                  !async function() {
                    if (ed(!0), qd(""), !Rd) try {
                      const dd = await (0, xN.postJsonWithMetricsCookiesAndJsonResponse)(`${zN.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      ad.current && Id(dd)
                    } catch (dd) {
                      console.error("Could not load profile schematics", dd), ad.current && (ed(!1), qd("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Kd.jsx)("input", {
              ref: Bd,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: dd => {
                var Jd;
                const kd = null === (Jd = dd.target.files) || void 0 === Jd ? void 0 : Jd[0];
                if (dd.target.value = "", !kd) return;
                if (kd.size > bN.h) return void qd("The schematic file is too large.");
                const pd = Yd;
                vd(!0);
                const Nd = new FileReader;
                Nd.onload = () => {
                  jd({
                    action: "upload",
                    path: pd,
                    base64: String(Nd.result).split(",")[1]
                  })
                }, Nd.onerror = () => {
                  console.error("Could not read schematic file", Nd.error), ad.current && (vd(!1), qd("Could not read the selected file."))
                }, Nd.readAsDataURL(kd)
              }
            })]
          }) : Md ? (0, Kd.jsxs)(Kd.Fragment, {
            children: [!ld && (0, Kd.jsx)(dW, {
              path: kd,
              revision: Zd.revision
            }), !ld && (0, Kd.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Md.byteSize / 1024), " KB \xb7 ", Md.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Kd.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: ld ? (0, Kd.jsxs)(Kd.Fragment, {
                children: [(0, Kd.jsx)(Qd.d, {
                  className: "InputGenericPopupButton",
                  disabled: Sd || !bd,
                  onClick: () => {
                    jd({
                      action: "rename",
                      path: kd,
                      newPath: Yd
                    })
                  },
                  children: "Rename"
                }), (0, Kd.jsx)(Qd.d, {
                  className: "InputGenericPopupButton",
                  disabled: Sd,
                  onClick: () => {
                    Ld(!1), od(kd)
                  },
                  children: "Cancel"
                })]
              }) : (0, Kd.jsxs)(Kd.Fragment, {
                children: [(0, Kd.jsx)(Qd.d, {
                  className: "InputGenericPopupButton",
                  disabled: Sd,
                  onClick: () => {
                    Ld(!0)
                  },
                  children: "Rename"
                }), (0, Kd.jsx)(Qd.B, {
                  className: "InputGenericPopupButton",
                  disabled: Sd,
                  onClick: () => {
                    jd({
                      action: "remove",
                      path: kd
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Zd && (0, Kd.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function kW(dd) {
      if ("string" !== typeof dd) return null;
      try {
        const Jd = JSON.parse(dd);
        return (0, sN.o)(null === Jd || void 0 === Jd ? void 0 : Jd.worldCodeEngine) && "boolean" === typeof Jd.engineLocked && function(dd) {
          if (null === dd) return !0;
          const Jd = null === dd || void 0 === dd ? void 0 : dd.location;
          return "string" === typeof(null === dd || void 0 === dd ? void 0 : dd.reason) && (null === Jd || "string" === typeof(null === Jd || void 0 === Jd ? void 0 : Jd.path) && Number.isInteger(Jd.line))
        }(Jd.fallback) ? Jd : (console.error("[CodeCollab] Malformed engine settings", dd), null)
      } catch (Jd) {
        return console.error("[CodeCollab] Failed to parse engine settings", Jd), null
      }
    }

    function pW(dd) {
      let {
        fallback: Jd,
        onGoToLine: kd
      } = dd;
      const {
        t: pd
      } = (0, zd.B)(), {
        location: Nd
      } = Jd;
      return (0, Kd.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [pd("codeEditorEngine:notice", {
          reason: Jd.reason
        }), Nd && (0, Kd.jsxs)(Kd.Fragment, {
          children: [" ", (0, Kd.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              kd(Nd.path, Nd.line)
            },
            children: pd("codeEditorEngine:goToLine", {
              line: String(Nd.line)
            })
          })]
        })]
      })
    }
    var NW = kd(4821),
      WW = kd(4203),
      PW = kd(37059);

    function ZW(dd) {
      let {
        label: Jd,
        hint: kd,
        checked: pd,
        onChange: Nd
      } = dd;
      return (0, Kd.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Kd.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Kd.jsx)("span", {
            children: Jd
          }), (0, Kd.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: kd
          })]
        }), (0, Kd.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Kd.jsx)(WW.e, {
            className: "SwitchCheckbox",
            checked: pd,
            onChange: dd => {
              Nd(dd.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function gW(dd) {
      let {
        engine: Jd,
        onSetEngine: kd,
        aiHints: pd,
        variation: Nd
      } = dd;
      const {
        t: Wd
      } = (0, zd.B)(), [Pd, Zd] = (0, PW.k)(PW.e);
      return (0, Kd.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Kd.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Wd("codeEditor:moreOptions")
        }), Jd && (0, Kd.jsx)(ZW, {
          label: Wd("codeEditorEngine:toggle"),
          hint: Wd("codeEditorEngine:toggleHint"),
          checked: "ses" === Jd,
          onChange: dd => {
            kd(dd ? "ses" : "quickjs")
          }
        }), pd && (0, Kd.jsx)(ZW, {
          label: Wd("codeEditorAiHints:toggle"),
          hint: Wd("codeEditorAiHints:toggleHint"),
          checked: pd.shown,
          onChange: pd.setShown
        }), pd && PW.e.canChange && (0, Kd.jsx)(ZW, {
          label: Wd("codeEditorAiKeySafetyCheck:toggle"),
          hint: Wd("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: Pd,
          onChange: dd => {
            dd ? Zd(!0) : Ap.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((dd => {
              !0 === dd && Zd(!1)
            }))
          }
        }), Nd && (0, Kd.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Kd.jsx)(NW.c, {
            label: "codeEditor:variationLabel",
            children: (0, Kd.jsx)(fk.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Nd.name,
              onValueChange: Nd.setName,
              onEnter: Nd.reload
            })
          }), (0, Kd.jsx)(Qd.t, {
            className: "CodeEditorButton",
            onClick: Nd.reload,
            children: Wd("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var CW = kd(37061),
      KW = kd(37068);

    function oW(dd) {
      let {
        close: Jd
      } = dd;
      const {
        t: kd
      } = (0, zd.B)(), pd = [{
        name: kd("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: kd("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: kd("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Kd.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Kd.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: kd("codeEditor:tutorialsTitle")
        }), (0, Kd.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: pd.map((dd => (0, Kd.jsx)(Qd.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              Jd(), (0, KW.H)(dd.tutorial)
            },
            children: dd.name
          }, dd.tutorial)))
        })]
      })
    }
    var lW = kd(108),
      QW = kd(36712),
      LW = kd(8688);
    const OW = (0, Nd.forwardRef)((function(dd, Jd) {
      let {
        value: kd,
        onChange: pd,
        onSubmit: Nd,
        placeholder: Wd,
        maxLength: Pd,
        rows: Zd = 2,
        allowNewLines: gd = !1,
        onKeyDown: Cd,
        before: od
      } = dd;
      const {
        t: ld
      } = (0, zd.B)(), Ld = "" !== kd.trim(), Od = () => {
        Ld && Nd()
      };
      return (0, Kd.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [od, (0, Kd.jsx)("textarea", {
          ref: Jd,
          className: "PanelPromptInput",
          value: kd,
          maxLength: Pd,
          rows: Zd,
          placeholder: Wd,
          spellCheck: !1,
          autoComplete: "off",
          onChange: dd => {
            pd(gd ? dd.target.value : dd.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: dd => {
            dd.nativeEvent.isComposing || 229 === dd.nativeEvent.keyCode ? dd.stopPropagation() : "Escape" !== dd.key && (dd.stopPropagation(), null === Cd || void 0 === Cd || Cd(dd), dd.defaultPrevented || "Enter" !== dd.key || gd && dd.shiftKey || (dd.preventDefault(), Od()))
          }
        }), (0, Kd.jsx)(Qd.d, {
          className: "PanelPromptSend",
          disabled: !Ld,
          onClick: Od,
          ariaLabel: ld("codeEditorPanels:send"),
          children: (0, Kd.jsx)(ed.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function eW(dd) {
      let {
        inputRef: Jd
      } = dd;
      const {
        t: kd
      } = (0, zd.B)(), {
        messages: pd,
        reportedPlayers: Wd,
        channel: Pd
      } = (0, LW.q)(), [Zd, gd] = (0, Nd.useState)(""), Cd = (0, Nd.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Kd.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Kd.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Kd.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: kd("codeEditorChat:title")
          })
        }), 0 === pd.length ? (0, Kd.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: kd("codeEditorChat:empty")
        }) : (0, Kd.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Kd.jsx)(QW.c, {
            messages: pd,
            reportedPlayers: Wd
          })
        }), (0, Kd.jsx)(OW, {
          ref: Jd,
          value: Zd,
          onChange: gd,
          onSubmit: () => {
            (0, LW.m)(Zd), gd(""), Cd.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: ad.gd,
          rows: 1,
          placeholder: Pd ? kd("touchOnly" === (0, lW.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Pd.channelName
          }) : kd("codeEditorChat:placeholder"),
          before: Pd && (0, Kd.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Pd.elementBgColor
            },
            onClick: () => {
              LW.b.selectNextChannel(), Jd.current.focus()
            },
            children: (0, Kd.jsx)(Bd.c, {
              text: Pd.elementContent
            })
          }),
          onKeyDown: dd => {
            const Jd = Zd === Cd.current.text;
            if ("ArrowUp" !== dd.key && "ArrowDown" !== dd.key || !Jd && "" !== Zd) "Tab" === dd.key && !dd.shiftKey && Pd && (dd.preventDefault(), LW.b.selectNextChannel());
            else {
              dd.preventDefault();
              const kd = Jd ? Cd.current.stepsBack : 0;
              Cd.current = (0, LW.i)(kd + ("ArrowUp" === dd.key ? 1 : -1)), gd(Cd.current.text)
            }
          }
        })]
      })
    }
    var RW = kd(37070);

    function IW(dd) {
      return "expanded" === dd ? "always" : "shown" === dd ? "narrow" : void 0
    }

    function GW(dd) {
      var Jd;
      let {
        Vo: kd,
        worldPanel: pd,
        closeWorld: Nd,
        aiShown: Wd,
        defaultWidth: Pd,
        children: Zd
      } = dd;
      const gd = "hidden" !== kd;
      return (0, Kd.jsx)(RW.c, {
        side: "right",
        defaultSize: gd ? "max(18rem, 40%)" : Pd,
        covers: null !== (Jd = IW(kd)) && void 0 !== Jd ? Jd : Wd ? "narrow" : void 0,
        children: (0, Kd.jsxs)("div", {
          className: xk()("CodeEditorRightColumn", {
            WorldShown: gd,
            WorldExpanded: "expanded" === kd
          }),
          children: [gd && (0, Kd.jsx)(RW.c, {
            side: "top",
            onClose: Nd,
            children: pd
          }), Zd]
        })
      })
    }
    var vW = kd(1971),
      xW = kd(1131),
      qW = kd(1320);
    class BW {
      constructor(dd, Jd, kd) {
        this.measure = dd, this.apply = Jd, this.now = kd, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.last) || void 0 === Jd ? void 0 : Jd.rect) && void 0 !== dd ? dd : null
      }
      sync() {
        const dd = function(dd) {
          const Jd = Math.round(dd.left),
            kd = Math.round(dd.top);
          return {
            left: Jd,
            top: kd,
            width: Math.round(dd.right) - Jd,
            height: Math.round(dd.bottom) - kd
          }
        }(this.measure());
        if (dd.width <= 0 || dd.height <= 0) return;
        const Jd = this.now(),
          kd = this.last;
        let pd = {
          width: dd.width,
          height: dd.height
        };
        null === kd || dd.width === kd.rect.width && dd.height === kd.rect.height || (this.resizing = Jd - this.resizedAt < 100, this.resizedAt = Jd);
        const Nd = null !== kd && this.resizing && Jd - this.resizedAt < 100 && (dd.width !== kd.bufferSize.width || dd.height !== kd.bufferSize.height);
        Nd && (this.stretchedAt ??= Jd), Nd && Jd - this.stretchedAt < 250 ? pd = kd.bufferSize : this.stretchedAt = null;
        const Wd = {
          rect: dd,
          bufferSize: pd
        };
        var Pd, Zd;
        null !== kd && (Zd = Wd, (Pd = kd).rect.left === Zd.rect.left && Pd.rect.top === Zd.rect.top && Pd.rect.width === Zd.rect.width && Pd.rect.height === Zd.rect.height && Pd.bufferSize.width === Zd.bufferSize.width && Pd.bufferSize.height === Zd.bufferSize.height) || (this.last = Wd, this.apply(Wd))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function sW(dd) {
      const {
        style: Jd
      } = document.documentElement;
      for (const [kd, pd] of [
          ["--worldViewLeft", null === dd || void 0 === dd ? void 0 : dd.left],
          ["--worldViewTop", null === dd || void 0 === dd ? void 0 : dd.top],
          ["--worldViewWidth", null === dd || void 0 === dd ? void 0 : dd.width],
          ["--worldViewHeight", null === dd || void 0 === dd ? void 0 : dd.height]
        ]) void 0 === pd ? Jd.removeProperty(kd) : Jd.setProperty(kd, `${pd}px`)
    }
    var iW = kd(1753),
      aW = kd(1980);

    function MW(dd, Jd) {
      (0, Nd.useEffect)((() => {
        if (!dd) return;
        const kd = dd => {
          var kd;
          "Escape" === dd.key ? (dd.stopPropagation(), dd.preventDefault(), Jd()) : (kd = dd.code, Object.entries(hJ.x).some((dd => {
            let [Jd, pd] = dd;
            const Nd = aW.g[Jd];
            return Nd.includes("ui") && !Nd.includes("core") && pd.includes(kd)
          })) && !(0, iW.isTextEntry)(dd.target) && dd.preventDefault())
        };
        window.addEventListener("keydown", kd, !0);
        const pd = (0, Td.l)(Jd);
        return () => {
          window.removeEventListener("keydown", kd, !0), pd()
        }
      }), [dd, Jd])
    }

    function FW() {
      return (0, CN.k)().some((dd => dd !== CN.d))
    }

    function YW(dd, Jd) {
      return dd.map((dd => Jd ? String(dd) : dd.toFixed(1))).join(", ")
    }

    function mW(dd) {
      let {
        freeCamera: Jd,
        picking: kd,
        hovered: pd
      } = dd;
      const {
        t: Wd
      } = (0, zd.B)(), Pd = (0, Nd.useRef)(null), Zd = (0, Nd.useRef)(null);
      return (0, Nd.useEffect)((() => {
        const dd = (dd, Jd) => {
            dd.textContent !== Jd && (dd.textContent = Jd)
          },
          kd = () => {
            const kd = Jd ? Cd.gameBridge.lookup("freeCameraPos", null) : null;
            dd(Pd.current, YW(null !== kd && void 0 !== kd ? kd : Cd.gameBridge.lookup("localPos", null), !1));
            const pd = Cd.gameBridge.lookup("targetedBlockPos", null);
            dd(Zd.current, pd ? YW(pd, !0) : "-")
          };
        return kd(), (0, qW.s)(kd)
      }), [Jd]), (0, Kd.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Kd.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Wd(Jd ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Kd.jsx)("span", {
          ref: Pd
        }), (0, Kd.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Wd("codeEditorWorld:lookingAt")
        }), (0, Kd.jsx)("span", {
          ref: Zd,
          hidden: kd
        }), kd && (0, Kd.jsxs)(Kd.Fragment, {
          children: [(0, Kd.jsx)("span", {
            children: pd ? YW(pd.pos, !0) : "-"
          }), pd && (0, Kd.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: pd.name
          })]
        })]
      })
    }
    var bW = kd(37072);

    function SW(dd) {
      const Jd = dd.currentTarget.getBoundingClientRect();
      return {
        x: (dd.clientX - Jd.left) / Jd.width,
        y: (dd.clientY - Jd.top) / Jd.height
      }
    }

    function jW(dd) {
      const [Jd, kd] = (0, Nd.useState)(!1), [pd, Wd] = (0, Nd.useState)(null), Pd = (0, Nd.useRef)(null);
      (0, Nd.useEffect)((() => {
        if (!Jd) return;
        let dd = null,
          kd = null,
          pd = 1 / 0;
        const Nd = (0, qW.q)((Jd => {
          pd += Jd;
          const Nd = Pd.current;
          if (Nd === kd && pd < 100) return;
          kd = Nd, pd = 0;
          const Zd = Nd && Cd.gameBridge.lookup("blockAtViewPoint", Nd);
          var gd, Kd;
          (gd = Zd) === (Kd = dd) || null !== gd && null !== Kd && gd.name === Kd.name && (0, bW.h)(gd.pos, Kd.pos) && (0, bW.h)(gd.normal, Kd.normal) || (dd = Zd, Wd(Zd), Cd.gameBridge.send("setBlockHighlight", Zd))
        }));
        return () => {
          Nd(), null !== dd && Cd.gameBridge.send("setBlockHighlight", null), Wd(null)
        }
      }), [Jd]);
      const Zd = (0, Nd.useCallback)((() => {
        kd(!1)
      }), []);
      MW(Jd, Zd);
      const gd = {
        onPointerMove: dd => {
          Pd.current = SW(dd)
        },
        onPointerLeave: () => {
          Pd.current = null
        },
        onClick: pd => {
          if (!Jd) return;
          const Nd = Cd.gameBridge.lookup("blockAtViewPoint", SW(pd));
          null !== Nd && (kd(!1), dd(Nd.pos))
        }
      };
      return {
        picking: Jd,
        setPicking: kd,
        hovered: pd,
        slotHandlers: gd
      }
    }

    function XW(dd) {
      Cd.gameBridge.send("setFreeCameraMovesFly", dd)
    }

    function fW(dd) {
      let {
        shown: Jd,
        setShown: kd,
        canInsertCode: pd
      } = dd;
      const {
        t: Wd
      } = (0, zd.B)(), {
        isTouchScreen: Pd
      } = (0, Dd.j)(["isTouchScreen"]), Zd = (0, Nd.useRef)(null), Cd = (0, Nd.useCallback)((() => {
        var dd;
        null === (dd = Zd.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === dd || dd.focus()
      }), []), {
        control: od,
        take: ld,
        release: Od,
        blocked: Rd
      } = function(dd) {
        const [Jd, kd] = (0, Nd.useState)("none"), pd = (0, Nd.useRef)("none"), [Wd, Pd] = (0, Nd.useState)(!1), Zd = dd => {
          pd.current = dd, kd(dd)
        }, gd = (0, Nd.useCallback)((() => {
          const Jd = pd.current;
          "none" !== Jd && (Zd("none"), (0, CN.p)(CN.d), "mouse" === Jd && dd())
        }), [dd]), Cd = (0, Nd.useCallback)((dd => {
          FW() ? Pd(!0) : (Zd("mouse" === dd && "touchOnly" !== (0, lW.e)() ? "mouse" : "touch"), (0, CN.o)(CN.d))
        }), []);
        return (0, sd.h)("pointerLockUpdate", (dd => {
          dd && "touch" === pd.current && "touchOnly" !== (0, lW.e)() ? Zd("mouse") : dd || "mouse" !== pd.current || gd()
        })), (0, Nd.useEffect)((() => {
          if (!Wd) return;
          const dd = () => {
            FW() || Pd(!1)
          };
          return dd(), (0, CN.f)(dd)
        }), [Wd]), MW("none" !== Jd, gd), (0, Nd.useEffect)((() => {
          if ("none" === Jd) return;
          const dd = dd => {
            (0, iW.isTextEntry)(dd.target) && gd()
          };
          return document.addEventListener("focusin", dd), () => {
            document.removeEventListener("focusin", dd)
          }
        }), [Jd, gd]), (0, Nd.useEffect)((() => (document.addEventListener("pointerlockerror", gd), () => {
          document.removeEventListener("pointerlockerror", gd)
        })), [gd]), (0, Nd.useEffect)((() => () => {
          "none" !== pd.current && null !== Dd.d.get("openInGameMenuName") && (0, CN.p)(CN.d)
        }), []), {
          control: Jd,
          take: Cd,
          release: gd,
          blocked: Wd
        }
      }(Cd), Id = (0, xW.k)(RW.d);
      (0, Nd.useEffect)((() => {
        "touch" !== od || "shown" !== Jd || Id ? "none" === od && "expanded" === Jd && kd("shown") : kd("expanded")
      }), [od, Id]),
      function(dd, Jd) {
        const kd = (0, Nd.useRef)(Jd);
        kd.current = Jd;
        const pd = (0, Nd.useRef)(null);
        (0, Nd.useLayoutEffect)((() => {
          const Jd = new BW((() => dd.current.getBoundingClientRect()), (dd => {
            var Jd;
            "none" !== kd.current && sW(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.rect) && void 0 !== Jd ? Jd : null), (0, qW.w)().setGameView(dd)
          }), (() => performance.now()));
          pd.current = Jd, Jd.sync();
          const Nd = (0, qW.p)((() => {
            Jd.sync()
          }));
          return () => {
            Nd(), Dd.d.set({
              worldPanelHud: null
            }), Jd.stop()
          }
        }), [dd]), (0, Nd.useLayoutEffect)((() => {
          pd.current.sync(), sW("none" === Jd ? null : pd.current.rect), Dd.d.set({
            worldPanelHud: Jd
          })
        }), [Jd])
      }(Zd, "touch" === od ? "touchControls" : "none");
      const {
        picking: Gd,
        setPicking: vd,
        hovered: xd,
        slotHandlers: qd
      } = jW((dd => {
        Ld.j.nO("CodeEditorInsertText", {
          text: `[${dd.join(", ")}]`,
          focus: !Pd
        }), (0, RW.d)() && kd("hidden")
      })), Bd = function() {
        const {
          allowed: dd,
          movesFly: Jd
        } = (0, Md.k)("freeCamera"), kd = (0, Nd.useRef)(Jd), pd = (0, Nd.useRef)(Jd);
        return pd.current !== Jd && (pd.current = Jd, kd.current = Jd), (0, Nd.useEffect)((() => () => {
          kd.current && XW(!1)
        }), []), {
          allowed: dd,
          on: Jd,
          toggle: () => {
            kd.current = !Jd, XW(!Jd)
          }
        }
      }(), ad = (0, gd.j)("hideCoordinates"), Fd = (0, Md.k)("localPlayerAlive"), Yd = !Fd || Rd;
      (0, Nd.useEffect)((() => {
        Fd || Od()
      }), [Fd, Od]), (0, Nd.useEffect)((() => {
        !Yd && pd || vd(!1)
      }), [Yd, pd, vd]);
      const md = Bd.on ? Qd.j : Qd.d,
        bd = Gd ? Qd.j : Qd.d;
      return (0, Kd.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Kd.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Kd.jsx)("span", {
            className: "WorldPanelTitle",
            children: Wd("codeEditorWorld:title")
          }), "touch" === od && !Id && (0, Kd.jsx)(Qd.d, {
            className: "WorldPanelButton",
            onClick: Od,
            children: Wd("codeEditorWorld:backToCode")
          }), !Yd && Bd.allowed && !Pd && (0, Kd.jsx)(td.f, {
            tooltipInner: Wd("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Kd.jsx)(md, {
              className: "WorldPanelButton",
              ariaPressed: Bd.on,
              ariaLabel: Wd("codeEditorWorld:freeCamera"),
              onClick: Bd.toggle,
              children: (0, Kd.jsx)(ed.e, {
                name: "video"
              })
            })
          }), !Yd && pd && (0, Kd.jsx)(td.f, {
            tooltipInner: Wd("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Kd.jsxs)(bd, {
              className: "WorldPanelButton",
              ariaPressed: Gd,
              onClick: () => {
                Od(), vd(!Gd)
              },
              children: [(0, Kd.jsx)(ed.e, {
                name: "crosshairs"
              }), Wd("codeEditorWorld:pick")]
            })
          })]
        }), !ad && (0, Kd.jsx)(mW, {
          freeCamera: Bd.on,
          picking: Gd,
          hovered: xd
        }), (0, Kd.jsxs)("div", {
          ref: Zd,
          className: xk()("WorldPanelSlot", {
            TouchControl: "touch" === od,
            Picking: Gd
          }),
          onPointerDown: dd => {
            0 !== dd.button || Yd || Gd || ld(dd.pointerType)
          },
          ...qd,
          children: [!Yd && !Gd && (0, Kd.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Yd && "touch" !== od && (0, Kd.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Gd && Wd(Pd ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Gd && "none" === od && !Bd.on && Wd(Pd ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Gd && "none" === od && Bd.on && Wd("codeEditorWorld:clickToFly"), "mouse" === od && (0, Kd.jsxs)(Kd.Fragment, {
              children: [(0, Kd.jsx)(vW.c, {
                noaAction: "OpenLobbyLeaderboard"
              }), Wd("codeEditorWorld:backToCode")]
            })]
          }), Yd && (0, Kd.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Kd.jsx)("span", {
              children: Wd(Fd ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Kd.jsx)(Qd.d, {
              onClick: Td.e,
              children: Wd("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var nW = kd(4904);

    function UW(dd) {
      let {
        Vo: Jd,
        setWorld: kd,
        toggleWorld: pd,
        aiShown: Nd,
        closeAi: Wd
      } = dd;
      const {
        t: Pd
      } = (0, zd.B)(), Zd = Nd ? "ai" : "hidden" !== Jd ? "world" : "code", gd = [{
        value: "code",
        label: Pd("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Pd("codeEditorWorld:title")
      }];
      Nd && gd.push({
        value: "ai",
        label: Pd("codeEditorWorld:aiPane")
      });
      return (0, Kd.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Kd.jsx)(nW.c, {
          options: gd,
          value: Zd,
          onChange: dd => {
            "world" !== dd ? (Nd && Wd(), kd("hidden")) : "hidden" === Jd ? pd() : Wd()
          },
          ariaLabel: Pd("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var yW = kd(37076),
      DW = kd(37080),
      TW = kd(37087),
      EW = kd(37091);
    const cW = (0, Nd.lazy)((() => Promise.all([kd.e(290), kd.e(286), kd.e(289), kd.e(285), kd.e(82), kd.e(288), kd.e(287), kd.e(284)]).then((() => kd(41261))))),
      hW = (0, Nd.lazy)((() => Promise.all([kd.e(77), kd.e(80), kd.e(81), kd.e(79), kd.e(292)]).then((() => kd(41434))))),
      rW = (0, Nd.lazy)((() => Promise.all([kd.e(290), kd.e(289), kd.e(82), kd.e(80), kd.e(81), kd.e(79), kd.e(288), kd.e(287), kd.e(78), kd.e(89)]).then((() => kd(41437)))));

    function uW(dd) {
      return Cd.gameBridge.query("worldCodeAiChunk", dd)
    }

    function tW() {
      return Cd.gameBridge.query("worldCodeAiGameState", null)
    }

    function VW(dd) {
      const {
        gsUrl: Jd,
        gameNameWithVariation: kd,
        lobbyName: pd
      } = HN();
      return (0, xN.postJsonWithMetricsCookiesAndJsonResponse)(`${Jd}/code/get-lobby-code`, vN.sk["get-lobby-code"].toBuffer({
        gameNameWithVariation: kd,
        lobbyName: pd,
        path: dd
      }), {
        retries: 1
      })
    }
    let zW = !1;
    const HW = [],
      wW = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      AW = (0, Nd.memo)((function(dd) {
        var Jd, kd;
        let {
          show: pd,
          onOpen: Wd,
          onClose: Zd,
          isLobbyCode: od
        } = dd;
        const ld = (0, Nd.useRef)(""),
          [Od, Rd] = (0, Nd.useState)(null),
          Id = (0, Nd.useRef)(od),
          [Gd, vd] = (0, Nd.useState)({
            message: null,
            type: null
          }),
          [xd, qd] = (0, Nd.useState)(""),
          Bd = Gd.message ? Gd : {
            message: xd,
            type: "warning"
          },
          [Yd, md] = (0, Nd.useState)(!0),
          [bd, jd] = (0, PW.k)(PW.g),
          [Xd, fd] = (0, PW.k)(PW.c),
          [nd, Ud] = (0, Nd.useState)(!1),
          [yd, Ed] = (0, Nd.useState)(!1),
          cd = (0, Nd.useRef)(null),
          hd = (0, Nd.useRef)(!1);
        (0, Nd.useEffect)((() => {
          var dd;
          yd && hd.current && (hd.current = !1, null === (dd = cd.current) || void 0 === dd || dd.focus())
        }), [yd]);
        const rd = (0, yW.e)(),
          ud = (0, Nd.useRef)(null),
          Vd = (0, Nd.useRef)(null),
          {
            openInGameMenuName: Hd,
            openEverythingMenuName: wd,
            worldPanelHud: Ad
          } = (0, Dd.j)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          dJ = dd => {
            pd && (ud.current = dd, MJ.current = !0)
          };
        (0, sd.h)("OpenReportMenu", (() => {
          dJ("TQ")
        })), (0, sd.h)("OpenStoreFromCodeEditor", (() => {
          dJ("store")
        })), (0, Nd.useEffect)((() => {
          const dd = ud.current;
          null === dd || "TQ" === dd && ("makeReport" === Hd || "makeDiscordReport" === Hd) || "store" === dd && null !== wd || (ud.current = null, null === Hd && null === wd ? od ? (Vd.current = Nk.current, Ld.j.nO("EditLobbyCode", Od)) : Ld.j.nO("EditCodeBlock", {
            pos: Od,
            canChangePos: Id.current
          }) : (0, KW.y)())
        }), [Hd, wd, od, Od]), (0, Nd.useEffect)((() => {
          if (pd) return () => {
            Vd.current = null
          }
        }), [pd]);
        const [JJ, kJ] = function() {
          const [dd, Jd] = (0, Nd.useState)(zW);
          return (0, sd.h)("CodeEditorAiHelperShown", (dd => {
            Jd(dd)
          })), [dd, (0, Nd.useCallback)((dd => {
            zW = dd, Ld.j.nO("CodeEditorAiHelperShown", dd)
          }), [])]
        }(), [pJ, NJ] = (0, Nd.useState)(null), [WJ, PJ] = (0, Nd.useState)([]), [ZJ, gJ] = (0, Nd.useState)(0), [CJ, KJ] = (0, Nd.useState)(0), [oJ, lJ] = (0, Nd.useState)(""), LJ = (0, Nd.useRef)(null), [OJ, eJ] = (0, Nd.useState)(od ? EW.d : null), RJ = od || null !== Od, IJ = (0, gd.j)("canEditCode"), GJ = (0, gd.j)("canUseDevCreativeItems"), vJ = (0, CW.j)("welcome"), xJ = (0, CW.j)("docsOverview"), qJ = xJ ? "docsOverview" : "welcome", BJ = null !== xJ && void 0 !== xJ ? xJ : vJ, sJ = (0, CW.j)("aiHelperOverview"), iJ = sJ ? "aiHelperOverview" : "welcome", aJ = null !== sJ && void 0 !== sJ ? sJ : vJ, MJ = (0, Nd.useRef)(!1), FJ = (0, Nd.useRef)(!1), YJ = (0, Nd.useRef)(null), [mJ, bJ] = (0, Nd.useState)(""), [SJ, jJ] = (0, Nd.useState)(!1), [XJ, fJ] = (0, Nd.useState)(null), nJ = (0, Md.k)("connectedGame"), UJ = od && IJ && "classic" === nJ.gameNameWithVariation && !(0, QJ.M)(nJ.lobbyName), [yJ, DJ] = (0, Nd.useState)(null), [TJ, cJ] = (0, Nd.useState)({
          [qN.h]: ""
        }), [rJ, uJ] = (0, Nd.useState)({
          assets: {},
          revision: 0
        }), tJ = (0, Nd.useRef)(rJ), VJ = (0, Nd.useCallback)((dd => {
          var Jd;
          dd.revision < tJ.current.revision || (tJ.current = dd, uJ(dd), qd(dd.startupError ? `Schematics could not load: ${dd.startupError}` : ""), null === (Jd = Rk.current) || void 0 === Jd || Jd.onLobbyFilesChanged({
            ...Ck.current,
            ...(0, bN.k)(dd.assets)
          }))
        }), []), [zJ, HJ] = (0, Nd.useState)(qN.h), [wJ, AJ] = (0, Nd.useState)(null), [dk, Jk] = (0, Nd.useState)(null), kk = (0, Nd.useRef)(!1), pk = (0, Nd.useRef)(null), Nk = (0, Nd.useRef)(zJ);
        Nk.current = zJ;
        const Wk = (0, Nd.useRef)(wJ);
        Wk.current = wJ;
        const Pk = wJ ? null : XJ,
          Zk = Pk && !Pk.engineLocked ? Pk.worldCodeEngine : null,
          gk = (0, Nd.useRef)(dk);
        gk.current = dk;
        const Ck = (0, Nd.useRef)(TJ);
        Ck.current = TJ;
        const Kk = (0, Nd.useRef)(null),
          lk = (0, Nd.useRef)(null),
          [Qk, Lk] = (0, Nd.useState)(!1),
          Ok = (0, EN.l)(),
          ek = (0, Nd.useRef)([]),
          Rk = (0, Nd.useRef)(null),
          Ik = (0, Nd.useRef)(null),
          Gk = (0, Nd.useRef)(null);

        function vk(dd) {
          vd(dd), clearTimeout(YJ.current), YJ.current = setTimeout((() => {
            vd({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const qk = (0, Nd.useCallback)((function() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            kk.current && pk.current && (Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.Leave,
              jJ: (0, BN.v)(pk.current),
              BP: !!dd || null
            }), kk.current = !1, pk.current = null), DJ(null)
          }), []),
          Bk = (0, Nd.useCallback)((dd => {
            const Jd = {
              kind: "lobby",
              path: dd
            };
            pk.current = Jd, HJ(dd), ld.current = "", Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.Join,
              jJ: (0, BN.v)(Jd)
            }), kk.current = !0
          }), []),
          sk = (0, Nd.useCallback)((dd => {
            var Jd;
            const kd = null === (Jd = Ik.current) || void 0 === Jd ? void 0 : Jd.collabState;
            return kd && "lobby" === kd.docKey.kind && kd.docKey.path === dd && Nk.current === dd ? Promise.resolve({
              doc: kd.doc,
              version: kd.version,
              clientID: kd.clientID,
              docKey: kd.docKey,
              httpConfig: kd.httpConfig
            }) : new Promise(((Jd, kd) => {
              const pd = setTimeout((() => {
                  ek.current = ek.current.filter((dd => dd !== Nd)), kd(new Error(`Timed out joining ${dd}`))
                }), 15e3),
                Nd = kd => {
                  "lobby" === kd.docKey.kind && kd.docKey.path === dd && (clearTimeout(pd), ek.current = ek.current.filter((dd => dd !== Nd)), Jd(kd))
                };
              ek.current.push(Nd), Nk.current !== dd ? (qk(!0), Bk(dd)) : kk.current || Bk(dd)
            }))
          }), [Bk, qk]),
          ik = (0, Nd.useCallback)((async function(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const pd = Date.now();
            let Nd = dd in Ck.current;
            for (; Nd !== Jd;) {
              if (Date.now() - pd > kd) throw new Error(`Timed out waiting for lobby path ${dd} present=${Jd}`);
              await (0, vp.O)(50), Nd = dd in Ck.current
            }
          }), []),
          ak = (0, Nd.useCallback)((dd => {
            const Jd = Ck.current,
              kd = qN.h in Jd && qN.l in Jd;
            if (!(0, sN.l)(dd) || kd) {
              if (Nk.current === dd) {
                var pd;
                const Nd = kd && (0, sN.l)(dd) ? dd === qN.h ? qN.l : qN.h : null !== (pd = (0, sN.e)(Jd)) && void 0 !== pd ? pd : qN.h;
                lk.current = {
                  fromPath: dd,
                  toPath: Nd
                }, HJ(Nd)
              }
              Cd.gameBridge.send("sendCodeCollab", {
                SJ: BN.c.DeleteFile,
                jJ: (0, BN.v)({
                  kind: "lobby",
                  path: Nk.current
                }),
                sP: dd
              })
            }
          }), []),
          Mk = (0, Nd.useCallback)((dd => {
            Vd.current = null, AJ(null), Jk(null), !od || dd === Nk.current && kk.current || (qk(!0), Bk(dd))
          }), [od, qk, Bk]),
          Fk = (0, Nd.useCallback)(((dd, Jd) => {
            const kd = YN.g[dd],
              pd = kd && Jd in kd.files ? Jd : "index.ts";
            if (dd !== Wk.current || pd !== gk.current) {
              var Nd;
              if (dd !== Wk.current) null === (Nd = Rk.current) || void 0 === Nd || Nd.stopContinuousSync(), qk(!0);
              AJ(dd), Jk(pd)
            }
          }), [qk]),
          Yk = (0, Nd.useCallback)((dd => {
            var Jd;
            const kd = Nk.current,
              pd = Ck.current[kd],
              Nd = kk.current && !Wk.current && kd in dd && void 0 !== pd ? {
                ...dd,
                [kd]: pd
              } : dd;
            cJ(Nd);
            const Wd = Kk.current;
            if (Wd && Wd in dd) Kk.current = null, Wd !== Nk.current && Mk(Wd);
            else if (!(Nk.current in dd) && kk.current && !Wk.current) {
              var Pd;
              Mk(null !== (Pd = (0, sN.e)(dd)) && void 0 !== Pd ? Pd : qN.h)
            }
            null === (Jd = Rk.current) || void 0 === Jd || Jd.onLobbyFilesChanged({
              ...Nd,
              ...(0, bN.k)(tJ.current.assets)
            })
          }), [Mk]),
          mk = (0, Nd.useCallback)((() => VW(Nk.current).then((async dd => {
            if (!kk.current || !dd.files) return null;
            Yk(dd.files);
            const Jd = await wN({
              action: "state"
            });
            return VJ(Jd), {
              ...dd.files,
              ...(0, bN.k)(Jd.assets)
            }
          })).catch((dd => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", dd), vk({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Yk, VJ]),
          bk = () => {
            Zd()
          };
        (0, Nd.useEffect)((() => {
          if (qd(""), !pd || !od) return;
          let dd = !1;
          return tJ.current = {
            assets: {},
            revision: 0
          }, uJ(tJ.current), wN({
            action: "state"
          }).then((Jd => {
            dd || VJ(Jd)
          })).catch((Jd => {
            console.error("Could not load project schematics", Jd), dd || qd("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            dd = !0
          }
        }), [pd, od, VJ]);
        const Sk = (0, Nd.useCallback)((function() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            pk.current && Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.Submit,
              jJ: (0, BN.v)(pk.current),
              ...dd ? {
                UJ: "keepOpen"
              } : {}
            })
          }), []),
          jk = (0, Nd.useCallback)((() => {
            if (!pk.current || "lobby" !== pk.current.kind) return;
            const dd = mJ.trim();
            (0, iN.s)(dd) ? (Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.ReloadAsVariation,
              jJ: (0, BN.v)(pk.current),
              UJ: dd
            }), jJ(!1)) : vk({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [mJ]),
          Xk = (0, Nd.useCallback)((dd => {
            Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.SetEngine,
              jJ: (0, BN.v)({
                kind: "lobby",
                path: Nk.current
              }),
              UJ: dd
            })
          }), []),
          fk = (0, Nd.useCallback)((dd => {
            if (!Wk.current && IJ && (Id.current || od)) {
              if (od) {
                var Jd;
                const kd = (0, sN.s)(Ck.current, Nk.current),
                  pd = Math.min(EJ.y, Math.max(0, EJ.C - kd)),
                  Nd = dd.slice(0, pd);
                return ld.current = Nd, cJ((dd => ({
                  ...dd,
                  [Nk.current]: Nd
                }))), void(null === (Jd = Rk.current) || void 0 === Jd || Jd.onDocTextChanged(Nk.current, Nd))
              }
              ld.current = dd, lJ(dd)
            }
          }), [IJ, od]);
        (0, sd.h)("EditLobbyCode", (dd => {
          var Jd;
          Sd.featureFlags.canSeePlayerWrittenText && od && (qk(), Rd(dd), ld.current = "", cJ({
            [qN.h]: ""
          }), fJ(null), HJ(qN.h), AJ(null), Jk(null), Kk.current = null, lk.current = null, null === (Jd = Rk.current) || void 0 === Jd || Jd.stopContinuousSync(), Wd(), Bk(qN.h))
        })), (0, sd.h)("EditCodeBlock", (dd => {
          let {
            pos: Jd,
            canChangePos: kd
          } = dd;
          if (Sd.featureFlags.canSeePlayerWrittenText && !od)
            if (qk(), null !== Jd && (Jd = [...Jd]), Rd(Jd), Id.current = kd, null !== Jd) {
              ld.current = "", lJ(""), Wd();
              const dd = {
                  kind: "codeBlock",
                  pos: Jd
                },
                pd = (0, BN.v)(dd);
              LJ.current !== pd && (LJ.current = pd, PJ([]), KJ(ZJ)), eJ((0, EW.c)(pd, [Jd[0], Jd[1], Jd[2]], !!kd)), pk.current = dd, Cd.gameBridge.send("sendCodeCollab", {
                SJ: BN.c.Join,
                jJ: (0, BN.v)(dd)
              }), kk.current = !0
            } else pd && Zd()
        })), (0, sd.h)("codeCollabRejoin", (dd => {
          const Jd = pk.current ? (0, BN.v)(pk.current) : null;
          Jd && dd.docKey === Jd && (ld.current = dd.doc, od || lJ(dd.doc), DJ((Jd => Jd ? {
            ...Jd,
            doc: dd.doc,
            version: dd.version,
            clientID: (0, FN.e)()
          } : Jd)))
        })), (0, sd.h)("codeCollab", (dd => {
          var Jd;
          const kd = pk.current ? (0, BN.v)(pk.current) : null;
          if (dd.type === BN.d.LobbyFilesChanged && od) {
            if ("string" !== typeof dd.files) return void mk();
            try {
              Yk(JSON.parse(dd.files))
            } catch (Cd) {
              console.error("[CodeCollab] Failed to parse lobby files", Cd), mk()
            }
            return
          }
          if (dd.type === BN.d.EngineSettings && od) return void fJ(kW(dd.engineSettings));
          const Nd = dd.type === BN.d.Joined ? (0, BN.f)(dd.docKey) : null,
            Wd = od && "lobby" === (null === (Jd = pk.current) || void 0 === Jd ? void 0 : Jd.kind) && (0, sN.l)(pk.current.path) && "lobby" === (null === Nd || void 0 === Nd ? void 0 : Nd.kind) && (0, sN.l)(Nd.path);
          if (!kd || dd.docKey === kd || Wd)
            if (dd.type !== BN.d.ForceClose) {
              if (pd)
                if (dd.type === BN.d.Joined) {
                  var Pd;
                  const Kd = JSON.parse(dd.peers),
                    Qd = dd.existingCursors ? JSON.parse(dd.existingCursors) : [],
                    ed = (0, FN.e)(),
                    Rd = HN(),
                    {
                      gsUrl: Id,
                      gameNameWithVariation: Gd,
                      lobbyName: xd
                    } = Rd,
                    qd = null !== (Pd = (0, BN.f)(dd.docKey)) && void 0 !== Pd ? Pd : pk.current;
                  qd && (pk.current = qd, "lobby" === qd.kind && (HJ(qd.path), Nk.current = qd.path));
                  const Bd = qd || (od ? {
                    kind: "lobby",
                    path: Nk.current
                  } : {
                    kind: "codeBlock",
                    pos: Od
                  });

                  function sd(Jd) {
                    var kd, pd;
                    if (!kk.current) return;
                    const Nd = null !== (kd = Jd.code) && void 0 !== kd ? kd : "",
                      Wd = null !== (pd = Jd.collabVersion) && void 0 !== pd ? pd : 0;
                    ld.current = Nd, od || lJ(Nd), od && Jd.files ? cJ(Jd.files) : od && cJ((dd => ({
                      ...dd,
                      [Nk.current]: Nd
                    })));
                    const Pd = {
                      doc: Nd,
                      version: Wd,
                      clientID: ed,
                      docKey: Bd,
                      peers: Kd,
                      editorCount: dd.editorCount,
                      existingCursors: Qd,
                      httpConfig: Rd
                    };
                    if (DJ(Pd), "lobby" === Bd.kind) {
                      var Zd;
                      const dd = {
                        doc: Nd,
                        version: Wd,
                        clientID: ed,
                        docKey: Bd,
                        httpConfig: Rd
                      };
                      for (const Jd of [...ek.current]) Jd(dd);
                      null === (Zd = Rk.current) || void 0 === Zd || Zd.startWhenReady()
                    }
                    Jd.canSeeCode ? (clearTimeout(YJ.current), vd({
                      message: null,
                      type: null
                    })) : function(dd) {
                      clearTimeout(YJ.current), vd(dd)
                    }(wW);
                    const gd = Vd.current;
                    Vd.current = null, od && gd && Jd.files && gd in Jd.files && gd !== Nk.current && Mk(gd)
                  }
                  od ? VW(Nk.current).then(sd).catch((dd => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", dd), qk()
                  })) : (0, xN.postJsonWithMetricsCookiesAndJsonResponse)(`${Id}/code/get-code-block`, vN.sk["get-code-block"].toBuffer({
                    gameNameWithVariation: Gd,
                    lobbyName: xd,
                    pos: Od
                  }), {
                    retries: 1
                  }).then(sd).catch((dd => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", dd), qk()
                  }))
                } else if (dd.type === BN.d.Presence) {
                if (!kd) return;
                const ad = JSON.parse(dd.peers);
                DJ((Jd => Jd ? {
                  ...Jd,
                  peers: ad,
                  editorCount: dd.editorCount
                } : Jd))
              }
            } else {
              var gd;
              if (!kd) return;
              pd && od && "keptOpen" === dd.updates && Ld.j.nO("CodeEditorKeepEdits");
              const Md = pk.current;
              kk.current = !1, pk.current = null, DJ(null);
              if (!od || "close" === dd.updates) return (0, TW.g)(), void(pd && Zd());
              if (!pd) return;
              const Fd = Ck.current,
                Yd = lk.current;
              lk.current = null;
              const md = "lobby" === (null === Md || void 0 === Md ? void 0 : Md.kind) && Md.path === (null === Yd || void 0 === Yd ? void 0 : Yd.fromPath),
                bd = Yd && (md || Yd.toPath in Fd || (0, sN.l)(Yd.toPath)) ? Yd.toPath : Nk.current in Fd ? Nk.current : null !== (gd = (0, sN.e)(Fd)) && void 0 !== gd ? gd : qN.h;
              Bk(bd)
            }
        })), (0, sd.h)("refetchCode", (() => {
          Sd.featureFlags.canSeePlayerWrittenText && pd && kk.current && (IJ || (qk(), od ? Ld.j.nO("EditLobbyCode", Od) : Ld.j.nO("EditCodeBlock", {
            pos: Od,
            canChangePos: Id.current
          })))
        }));
        const nk = (0, Nd.useCallback)((() => {
            pd && (Ud(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [pd]),
          Uk = (0, Nd.useCallback)((() => {
            Ud(!1)
          }), []);
        (0, Nd.useEffect)((() => {
          pd && IJ && ("docsButton" === BJ && nd ? (0, KW.h)("docsButton") : BJ && KW.i.includes(BJ) && !nd && (Ud(!0), kJ(!1)))
        }), [pd, IJ, BJ, nd, kJ]);
        const yk = (0, Nd.useCallback)((() => {
          kJ(!1)
        }), [kJ]);
        (0, Nd.useEffect)((() => {
          pd && IJ && RJ && ("aiHelperButton" === aJ && JJ ? (0, KW.h)("aiHelperButton") : aJ && KW.d.includes(aJ) && !JJ && (kJ(!0), Ud(!1)))
        }), [pd, IJ, RJ, aJ, JJ, kJ]), (0, Nd.useEffect)((() => {
          if (!pd || !IJ) return;
          const dd = od ? "worldCode" : "codeBlock";
          return (0, KW.A)(dd, !0), () => {
            (0, KW.A)(dd, !1)
          }
        }), [pd, IJ, od]), (0, Nd.useEffect)((() => {
          if (pd) return () => {
            MJ.current ? MJ.current = !1 : (0, KW.y)()
          }
        }), [pd]), (0, Nd.useEffect)((() => {
          (0, KW.D)("exportButton", !!GJ)
        }), [GJ]);
        const {
          t: Dk
        } = (0, zd.B)(), Tk = !JJ && ZJ > CJ, Ek = Tk ? Qd.B : Qd.t, ck = (0, Nd.useCallback)(((dd, Jd) => {
          Ld.j.nO("CodeEditorGoToLine", {
            path: dd,
            line: Jd
          }), Mk(dd)
        }), [Mk]), hk = (0, Nd.useCallback)((dd => {
          Gk.current = dd
        }), []), rk = function(dd, Jd) {
          const [kd, pd] = (0, Nd.useState)(null);
          return (0, Nd.useEffect)((() => {
            if (!Jd) return void pd(null);
            let kd = !1;
            return TN(dd).then((dd => {
              kd || pd(dd)
            }), (dd => {
              console.error("[CodeEditor] could not collect the imported plugins", dd), kd || pd(null)
            })), () => {
              kd = !0
            }
          }), [dd, Jd]), kd
        }(TJ, pd);
        (0, Nd.useEffect)((() => {
          rk && wJ && !rk.includes(wJ) && (AJ(null), Jk(null), od && !kk.current && Bk(Nk.current))
        }), [wJ, rk, od, Bk]), Ik.current = {
          collabState: yJ,
          ensureJoinedPath: sk,
          waitForLobbyPath: ik,
          pullLobbyFiles: mk,
          t: Dk,
          canEditCode: !!IJ
        }, Rk.current || (Rk.current = new VN({
          getLobbyFiles: () => ({
            ...Ck.current,
            ...(0, bN.k)(tJ.current.assets)
          }),
          deleteSchematic: async dd => {
            const Jd = await wN({
              action: "remove",
              path: dd,
              expectedRevision: tJ.current.revision
            });
            VJ(Jd)
          },
          getActivePath: () => Nk.current,
          getCollabSnapshot: () => {
            var dd;
            if (Wk.current) return null;
            const Jd = null === (dd = Ik.current) || void 0 === dd ? void 0 : dd.collabState;
            return Jd ? {
              doc: Jd.doc,
              version: Jd.version,
              clientID: Jd.clientID,
              docKey: Jd.docKey,
              httpConfig: Jd.httpConfig
            } : null
          },
          replaceActiveDoc: (dd, Jd) => {
            var kd, pd;
            return null !== (kd = null === (pd = Gk.current) || void 0 === pd ? void 0 : pd.call(Gk, dd, Jd)) && void 0 !== kd && kd
          },
          ensureJoined: dd => Ik.current.ensureJoinedPath(dd),
          createFile: (dd, Jd) => {
            !1 !== (null === Jd || void 0 === Jd ? void 0 : Jd.focus) && (Kk.current = dd), Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.CreateFile,
              jJ: (0, BN.v)({
                kind: "lobby",
                path: Nk.current
              }),
              sP: dd
            })
          },
          renameFile: (dd, Jd) => {
            const kd = (0, BN.v)({
              kind: "lobby",
              path: Nk.current
            });
            Nk.current === dd && (lk.current = {
              fromPath: dd,
              toPath: Jd
            }, HJ(Jd)), Cd.gameBridge.send("sendCodeCollab", {
              SJ: BN.c.RenameFile,
              jJ: kd,
              sP: dd,
              iP: Jd
            })
          },
          deleteFile: dd => {
            ak(dd)
          },
          waitForLobbyPath: (dd, Jd, kd) => Ik.current.waitForLobbyPath(dd, Jd, kd),
          pullLobbyFiles: () => Ik.current.pullLobbyFiles(),
          setMessage: (dd, Jd) => {
            vk({
              message: dd,
              type: Jd
            })
          },
          onUnlinked: () => {
            Lk(!1)
          },
          t: dd => Ik.current.t(dd),
          canEditCode: () => Ik.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: dd,
              lobbyName: Jd
            } = Cd.gameBridge.latest("connectedGame");
            return (0, EN.f)(dd, Jd)
          }
        }));
        const uk = (0, Nd.useCallback)((async dd => {
            const Jd = Rk.current;
            if (!Jd) return !1;
            try {
              return await Jd.writeLobbyFiles(dd)
            } catch (kd) {
              return console.error("World Code AI: couldn't write the change", kd), !1
            }
          }), []),
          tk = (0, Nd.useCallback)((async dd => {
            var Jd, kd;
            const pd = null === (Jd = dd.find((dd => dd.path === DW.c))) || void 0 === Jd ? void 0 : Jd.text,
              Nd = pk.current;
            return void 0 !== pd && "codeBlock" === (null === Nd || void 0 === Nd ? void 0 : Nd.kind) && (!(null === (kd = Gk.current) || void 0 === kd || !kd.call(Gk, (0, BN.v)(Nd), pd)) && (ld.current = pd, lJ(pd), !0))
          }), []),
          Vk = (0, Nd.useCallback)((async () => {
            try {
              var dd, Jd;
              const kd = await VW(qN.h);
              return !1 === kd.canSeeCode ? null : null !== (dd = kd.files) && void 0 !== dd ? dd : {
                [qN.h]: null !== (Jd = kd.code) && void 0 !== Jd ? Jd : ""
              }
            } catch (kd) {
              return console.error("World Code AI: couldn't read World Code for a code block", kd), null
            }
          }), []),
          zk = (0, Nd.useMemo)((() => ({
            [DW.c]: oJ
          })), [oJ]),
          Hk = (0, Nd.useCallback)(((dd, Jd) => {
            Ld.j.nO("CodeEditorGoToLine", {
              path: DW.c,
              line: Jd
            })
          }), []);
        (0, Nd.useEffect)((() => {
          JJ && pd && KJ(ZJ)
        }), [JJ, pd, ZJ]);
        const wk = (0, Nd.useCallback)((() => {
            var dd, Jd;
            Sk();
            const kd = (0, Sd.isTouchscreen)() ? "open World Code again" : `press ${null!==(dd=null===(Jd=hJ.x.OpenCodeEditor)||void 0===Jd?void 0:Jd[0])&&void 0!==dd?dd:"F8"}`,
              pd = od ? `\ud83e\udd16 Try out your change, then ${kd} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            Ld.j.nO("chat", {
              content: [{
                str: pd,
                style: {
                  color: ad.M.cyanUiText
                }
              }]
            })
          }), [Sk, od]),
          Ak = (0, Nd.useCallback)((dd => {
            const Jd = Od,
              kd = Id.current;
            od || !Jd || Cd.gameBridge.lookup("codeBlockClickable", Jd) ? (0, TW.i)(dd, {
              submit: () => {
                Sk(), Ld.j.nO("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: ad.M.cyanUiText
                    }
                  }]
                }), !od && Jd && setTimeout((() => {
                  Cd.gameBridge.send("clickCodeBlock", Jd)
                }), 1e3)
              },
              reopen: () => {
                (0, Td.n)() || (od ? Ld.j.nO("EditLobbyCode", Jd) : Ld.j.nO("EditCodeBlock", {
                  pos: Jd,
                  canChangePos: kd
                }))
              }
            }) : wk()
          }), [Sk, od, Od, wk]),
          dp = (0, Nd.useCallback)((() => {
            kJ(!1)
          }), [kJ]),
          Jp = (0, Nd.useRef)(bk);
        Jp.current = bk;
        const kp = (0, Nd.useCallback)((function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            Ld.j.nO("WorldCodeAiDraft", {
              text: dd,
              send: Jd
            }), Jp.current(), Ld.j.nO("EditLobbyCode", Od)
          }), [Od]),
          pp = (0, Nd.useCallback)((dd => {
            Jp.current(), dd.codeBlock ? Ld.j.nO("EditCodeBlock", {
              pos: [...dd.pos],
              canChangePos: dd.canChangePos
            }) : Ld.j.nO("EditLobbyCode", Od)
          }), [Od]);
        (0, sd.h)("WorldCodeAiDraft", (dd => {
          od && (NJ(dd), kJ(!0))
        }));
        const Np = !!IJ && !!BJ && KW.i.includes(BJ),
          Wp = !!IJ && !!aJ && KW.d.includes(aJ);
        (0, Nd.useEffect)((() => {
          pd && JJ && RJ && !Np && Ud(!1)
        }), [pd, JJ, RJ, Np]);
        const Pp = (0, Nd.useCallback)((() => {
            kJ(!1), Ud(!1)
          }), [kJ]),
          {
            Vo: Zp,
            setWorld: gp,
            toggleWorld: Cp
          } = function(dd) {
            let {
              showAi: Jd,
              showDocs: kd,
              showChat: pd,
              hideOtherRightPanels: Wd
            } = dd;
            const [Pd, Zd] = (0, Nd.useState)("hidden"), gd = (0, Nd.useRef)(null), Cd = (0, Nd.useCallback)((() => {
              gd.current = null, Zd((dd => "hidden" === dd ? dd : (0, RW.d)() ? "hidden" : "shown"))
            }), []);
            (0, Nd.useEffect)((() => {
              (Jd || kd) && Cd()
            }), [Jd, kd, Cd]), (0, Nd.useEffect)((() => {
              pd && Cd()
            }), [pd, Cd]);
            const Kd = "hidden" !== Pd && (0, RW.d)();
            (0, Nd.useLayoutEffect)((() => {
              if (Kd) {
                const dd = document.activeElement;
                dd instanceof HTMLElement && dd.closest(".cm-content") && (gd.current = dd, dd.blur())
              } else {
                var dd;
                null === (dd = gd.current) || void 0 === dd || dd.focus(), gd.current = null
              }
            }), [Kd]);
            const od = (0, Nd.useCallback)((() => {
              "hidden" === Pd ? (Zd("shown"), (0, RW.d)() && Wd()) : Zd("hidden")
            }), [Pd, Wd]);
            return {
              Vo: Pd,
              setWorld: Zd,
              toggleWorld: od
            }
          }({
            showAi: JJ,
            showDocs: nd,
            showChat: yd,
            hideOtherRightPanels: Pp
          }),
          Kp = JJ && null !== OJ && RJ,
          op = (0, Nd.useCallback)((() => {
            NJ(null)
          }), []),
          [lp, Qp] = (0, Nd.useState)(null);
        (0, sd.h)("WorldCodeAiSelection", (dd => {
          pd && (Qp(dd), kJ(!0), Ud(!1))
        }));
        const Lp = (0, Nd.useCallback)((() => {
          Qp(null)
        }), []);
        (0, sd.h)("chat", (dd => {
          let {
            content: Jd
          } = dd;
          if (!od && null === LJ.current) return;
          const kd = Array.isArray(Jd) ? Jd : [Jd],
            pd = kd.some((dd => {
              var Jd;
              return (null === dd || void 0 === dd || null === (Jd = dd.style) || void 0 === Jd ? void 0 : Jd.color) === ad.M.redUiText
            })),
            Nd = kd.map((dd => {
              var Jd;
              const kd = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.str) && void 0 !== Jd ? Jd : dd;
              return "string" === typeof kd ? kd : ""
            })).join("");
          pd && /world code|error/i.test(Nd) && (PJ((dd => [...dd, Nd].slice(-10))), gJ((dd => dd + 1)), (0, TW.f)(Nd))
        })), (0, Nd.useEffect)((() => {
          if (!pd || !od || !Ok) return;
          let dd = !1;
          return (async (Jd, kd) => {
            const pd = await (null === (Jd = Rk.current) || void 0 === Jd ? void 0 : Jd.tryRestoreHandle());
            !dd && pd && (Lk(!0), null === (kd = Rk.current) || void 0 === kd || kd.startWhenReady())
          })(), () => {
            dd = !0
          }
        }), [pd, od, Ok]), (0, Nd.useEffect)((() => {
          var dd;
          pd || (null === (dd = Rk.current) || void 0 === dd || dd.stopContinuousSync(), qk(!1), FJ.current && (FJ.current = !1, Cd.gameBridge.send("sendChatMessage", {
            IC: "//export",
            channelName: null
          })))
        }), [pd, qk]);
        const Op = (0, Nd.useCallback)((async () => {
            if (Ok && Rk.current) try {
              if (!await Rk.current.linkFolder()) return;
              Lk(!0), await Rk.current.startWhenReady()
            } catch (dd) {
              console.error("[WorldCodeDirectorySync] Link failed", dd), vk({
                message: Dk("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Ok, Dk]),
          ep = (0, Nd.useCallback)((async () => {
            Rk.current && await Rk.current.unlinkFolder()
          }), []),
          Rp = (0, Nd.useCallback)((() => {
            Ok ? Qk ? ep() : Op() : Ap.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Ok, Qk, Op, ep]),
          Ip = od && "hidden" !== Zp;
        return (0, Kd.jsxs)(Pd.e, {
          className: xk()("CodeEditorBg", {
            CodeEditorLight: bd,
            WorldShown: "hidden" !== Zp,
            WorldTouchControl: "touchControls" === Ad
          }),
          close: bk,
          escDoesExit: !0,
          show: pd,
          togglePointerLock: !1,
          globallyUniqueKey: od ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Kd.jsx)(CW.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Dk("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!IJ && !od
          }), (0, Kd.jsx)(CW.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Kd.jsxs)(Kd.Fragment, {
              children: [(0, Kd.jsx)("p", {
                children: Dk("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Kd.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Kd.jsx)("li", {
                  children: Dk("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Kd.jsx)("li", {
                  children: Dk("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Kd.jsx)("li", {
                  children: Dk("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!IJ && od
          }), (0, Kd.jsx)("div", {
            className: "CodeEditorTitle",
            children: od ? "World Code" : "Code Block"
          }), (0, Kd.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Kd.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Kd.jsx)(td.f, {
                tooltipInner: Dk(GJ ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: GJ ? void 0 : 0,
                hideTooltip: "exportButton" === vJ,
                children: (0, Kd.jsx)(CW.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Dk("codeEditor:tutorialExport"),
                  enabled: !!IJ,
                  children: (0, Kd.jsx)(Qd.j, {
                    className: "CodeEditorButton",
                    disabled: !GJ,
                    onClick: () => {
                      "exportButton" === vJ && ((0, KW.h)("exportButton"), MJ.current = !0), FJ.current = !0, bk()
                    },
                    padDestructive: !0,
                    children: Dk("codeEditor:exportWorld")
                  })
                })
              }), (0, Kd.jsx)(UW, {
                Vo: Zp,
                setWorld: gp,
                toggleWorld: Cp,
                aiShown: Kp,
                closeAi: dp
              })]
            }), (0, Kd.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [IJ && (0, Kd.jsx)(td.f, {
                tooltipInner: Dk("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === vJ,
                children: (0, Kd.jsx)(CW.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Dk("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Kd.jsx)(Qd.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Dk("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, KW.h)("helpButton"), Ap.NotificationProvider.showCustomPopup({
                        body: dd => (0, Kd.jsx)(oW, {
                          close: dd
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Kd.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Kd.jsx)(ed.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Kd.jsx)(td.f, {
                tooltipInner: Dk("codeEditor:closeTooltip"),
                children: (0, Kd.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    bk()
                  },
                  children: (0, Kd.jsx)(Qd.i, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Kd.jsx)(MN, {
            peers: null !== (Jd = null === yJ || void 0 === yJ ? void 0 : yJ.peers) && void 0 !== Jd ? Jd : []
          }), (0, Kd.jsxs)("div", {
            className: xk()("CodeEditorMainArea", {
              WorldCovers: "always" === IW(Zp),
              WorldCoversWhenNarrow: "narrow" === IW(Zp)
            }),
            children: [yd && rd && (0, Kd.jsx)(RW.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                Ed(!1)
              },
              children: (0, Kd.jsx)(eW, {
                inputRef: cd
              })
            }), od && (0, Kd.jsx)(XN, {
              schematics: rJ.assets,
              onManageSchematic: dd => {
                IJ && Ap.NotificationProvider.showCustomPopup({
                  body: Jd => (0, Kd.jsx)(JW, {
                    initialPath: dd,
                    onChanged: VJ,
                    onClose: Jd
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: TJ,
              activePath: zJ,
              canEdit: !!IJ,
              directoryLinked: Qk,
              pluginNames: null !== rk && void 0 !== rk ? rk : HW,
              activePluginName: wJ,
              activePluginFile: dk,
              onSelect: Mk,
              onSelectPlugin: Fk,
              onToggleDirectorySync: Rp,
              onCreate: dd => {
                Kk.current = dd, Cd.gameBridge.send("sendCodeCollab", {
                  SJ: BN.c.CreateFile,
                  jJ: (0, BN.v)({
                    kind: "lobby",
                    path: Nk.current
                  }),
                  sP: dd
                })
              },
              onRename: (dd, Jd) => {
                Nk.current === dd && (lk.current = {
                  fromPath: dd,
                  toPath: Jd
                }, HJ(Jd)), Cd.gameBridge.send("sendCodeCollab", {
                  SJ: BN.c.RenameFile,
                  jJ: (0, BN.v)({
                    kind: "lobby",
                    path: Nk.current
                  }),
                  sP: dd,
                  iP: Jd
                })
              },
              onRenameFolder: (dd, Jd) => {
                const [kd] = (0, sN.q)([Nk.current], dd, Jd);
                kd && (lk.current = {
                  fromPath: kd[0],
                  toPath: kd[1]
                }, HJ(kd[1])), Cd.gameBridge.send("sendCodeCollab", {
                  SJ: BN.c.RenameFolder,
                  jJ: (0, BN.v)({
                    kind: "lobby",
                    path: Nk.current
                  }),
                  sP: dd,
                  iP: Jd
                })
              },
              onDelete: ak
            }), (0, Kd.jsx)("div", {
              className: xk()("CodeEditorMessage", {
                CodeEditorMessageHidden: !Bd.message,
                CodeEditorMessageSuccess: "success" === Bd.type
              }),
              children: Bd.message && (0, Kd.jsx)("div", {
                className: "CodeEditorMessageText",
                children: Bd.message
              })
            }), (0, Kd.jsx)(Nd.Suspense, {
              fallback: (0, Kd.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Kd.jsx)(Fd.b, {})
              }),
              children: (0, Kd.jsx)(cW, {
                isLobbyCode: od,
                code: yJ ? yJ.doc : ld.current,
                files: od ? TJ : void 0,
                activePath: od ? zJ : void 0,
                pluginName: wJ,
                pluginFile: dk,
                pluginSource: wJ && dk ? null === (kd = YN.g[wJ]) || void 0 === kd ? void 0 : kd.files[dk] : void 0,
                onChange: fk,
                canEditCode: IJ,
                setTemporaryMessage: vk,
                close: bk,
                showTooltips: Yd,
                lightMode: bd,
                collabState: yJ,
                setActiveDocReplacer: hk,
                showAiHints: RJ && Xd,
                canAiChangeCode: !!IJ && (od || !!Id.current),
                onRemoteDocChange: dd => {
                  var Jd;
                  (ld.current = dd, od) ? (cJ((Jd => ({
                    ...Jd,
                    [Nk.current]: dd
                  }))), null === (Jd = Rk.current) || void 0 === Jd || Jd.onDocTextChanged(Nk.current, dd)) : lJ(dd)
                }
              })
            }), (nd || Kp || "hidden" !== Zp) && (0, Kd.jsxs)(GW, {
              Vo: Zp,
              worldPanel: (0, Kd.jsx)(fW, {
                shown: Zp,
                setShown: gp,
                canInsertCode: !!IJ && !wJ
              }),
              closeWorld: () => {
                gp("hidden")
              },
              aiShown: Kp,
              defaultWidth: nd ? "40%" : "max(18rem, 36%)",
              children: [nd && (0, Kd.jsx)(RW.c, {
                onClose: Np ? void 0 : Uk,
                children: (0, Kd.jsx)(Nd.Suspense, {
                  fallback: (0, Kd.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Kd.jsx)(Fd.b, {})
                  }),
                  children: (0, Kd.jsx)(hW, {
                    popOutDocs: nk,
                    hideDocs: Uk,
                    tutorialEnabled: !!IJ
                  })
                })
              }), Kp && (0, Kd.jsx)(RW.c, {
                onClose: Wp ? void 0 : dp,
                children: (0, Kd.jsx)(Nd.Suspense, {
                  fallback: (0, Kd.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Kd.jsx)(Fd.b, {})
                  }),
                  children: (0, Kd.jsx)(rW, {
                    target: OJ,
                    chatKey: `${nJ.gameNameWithVariation}/${nJ.lobbyName}/aiHelper`,
                    historyKey: `${nJ.gameNameWithVariation}/${nJ.lobbyName}/${OJ.key}`,
                    files: OJ.codeBlock ? zk : TJ,
                    activePath: OJ.codeBlock ? DW.c : zJ,
                    canEdit: !!IJ && (OJ.codeBlock ? !!Id.current : !wJ),
                    isLoaded: null !== yJ,
                    errors: WJ,
                    errorCount: ZJ,
                    applyFiles: OJ.codeBlock ? tk : uk,
                    submit: wk,
                    testRun: Ak,
                    close: dp,
                    goToLine: OJ.codeBlock ? Hk : ck,
                    openWorldCode: OJ.codeBlock ? kp : void 0,
                    readWorldCode: OJ.codeBlock ? Vk : void 0,
                    viewChunk: uW,
                    viewGameState: tW,
                    openTarget: IJ ? pp : void 0,
                    draft: pJ,
                    onDraftUsed: op,
                    selection: lp,
                    onSelectionUsed: Lp
                  }, OJ.key)
                })
              })]
            })]
          }), (null === Pk || void 0 === Pk ? void 0 : Pk.fallback) && (0, Kd.jsx)(pW, {
            fallback: Pk.fallback,
            onGoToLine: ck
          }), (0, Kd.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Kd.jsx)(td.f, {
              tooltipInner: Dk(bd ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Dk(bd ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  jd(!bd)
                },
                children: (0, Kd.jsx)(ed.e, {
                  name: bd ? "moon" : "sun-bright"
                })
              })
            }), (0, Kd.jsx)(td.f, {
              tooltipInner: Dk(Ip ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.j, {
                className: "CodeEditorButton",
                onClick: () => {
                  Sk(Ip)
                },
                padDefaultFocus: !0,
                children: Dk("codeEditor:submitCode")
              })
            }), (0, Kd.jsx)(td.f, {
              tooltipInner: Dk(nd ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === BJ || "hideDocsButton" === BJ,
              children: (0, Kd.jsx)(CW.h, {
                tutorial: qJ,
                step: nd ? "hideDocsButton" : "docsButton",
                text: Dk(nd ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!IJ,
                placement: "top",
                waitForClick: !0,
                onPrevious: nd && "welcome" === qJ ? Uk : void 0,
                children: (0, Kd.jsx)(Qd.t, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, KW.h)(nd ? "hideDocsButton" : "docsButton"), Ud(!nd), kJ(!1)
                  },
                  children: Dk(nd ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), RJ && (0, Kd.jsx)(CW.h, {
              tutorial: iJ,
              step: JJ ? "hideAiHelperButton" : "aiHelperButton",
              text: Dk(JJ ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === iJ ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!IJ,
              placement: "top",
              waitForClick: !0,
              onPrevious: JJ && "welcome" === iJ ? yk : void 0,
              children: (0, Kd.jsx)(Ek, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, KW.h)(JJ ? "hideAiHelperButton" : "aiHelperButton"), kJ(!JJ), Ud(!1)
                },
                children: JJ ? "Hide AI Helper" : Tk ? "Fix error with AI" : "AI Helper"
              })
            }), rd && (0, Kd.jsx)(td.f, {
              tooltipInner: Dk(yd ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.t, {
                className: "CodeEditorButton",
                onClick: () => {
                  hd.current = !yd, Ed(!yd)
                },
                children: Dk(yd ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Kd.jsx)(td.f, {
              tooltipInner: Dk("hidden" === Zp ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.t, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: Cp,
                children: Dk("hidden" === Zp ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Kd.jsx)(td.f, {
              tooltipInner: Dk("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  Ld.j.nO("FormatCode")
                },
                children: Dk("codeEditor:formatCode")
              })
            }), (0, Kd.jsx)(td.f, {
              tooltipInner: Dk("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(ld.current).then((() => {
                    vk({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    vk({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Dk("codeEditor:copyCode")
              })
            }), (0, Kd.jsx)(td.f, {
              tooltipInner: Dk(Yd ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  md(!Yd)
                },
                children: Dk(Yd ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !od && (0, Kd.jsx)(td.f, {
              tooltipInner: Dk("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === vJ,
              children: (0, Kd.jsx)(CW.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Dk("codeEditor:tutorialWorldCodeButton"),
                enabled: !!IJ,
                placement: "top",
                waitForClick: !0,
                children: (0, Kd.jsx)(Qd.t, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === vJ && ((0, KW.h)("worldCodeButton"), MJ.current = !0), bk(), Ld.j.nO("EditLobbyCode", Od)
                  },
                  children: Dk("codeEditor:worldCode")
                })
              })
            }), (UJ || Zk || RJ) && (0, Kd.jsx)(td.f, {
              tooltipInner: Dk("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Kd.jsx)(Qd.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  jJ(!0)
                },
                children: (0, Kd.jsx)(ed.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), SJ && (0, Kd.jsx)(JN.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              jJ(!1)
            },
            body: (0, Kd.jsx)(gW, {
              engine: Zk,
              onSetEngine: Xk,
              aiHints: RJ ? {
                shown: Xd,
                setShown: fd
              } : null,
              variation: UJ ? {
                name: mJ,
                setName: bJ,
                reload: jk
              } : null
            })
          })]
        })
      })),
      dP = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function JP(dd) {
      return "inventory" === dd
    }
    const kP = (0, Nd.memo)((function() {
      const {
        openEverythingMenuName: dd,
        openInGameMenuName: Jd
      } = (0, Dd.j)(["openEverythingMenuName", "openInGameMenuName"]), kd = (0, Md.k)("fullInventory"), Wd = (0, Nd.useRef)(null), Pd = (0, mJ.o)();
      (0, sd.h)("toggleMenu", (dd => {
        var Jd;
        if (!Pd.shown) return;
        const kd = Dd.d.get("openInGameMenuName");
        let pd = dd.split("|")[0];
        const Nd = null !== (Jd = dd.split("|")[1]) && void 0 !== Jd ? Jd : null;
        ("closeCurrentMenu" === Nd && kd || pd === kd) && (Wd.current = null, pd = null);
        const Zd = "closeCurrentMenu" === Nd ? null : Nd;
        Wd.current !== Zd && (Wd.current = Zd), null !== pd && (0, CN.p)(CN.d, {
          keepsMovement: JP(pd)
        }), Dd.d.set({
          openInGameMenuName: pd
        })
      }));
      const Zd = (0, Nd.useCallback)((dd => () => {
          Ld.j.nO("toggleMenu", dd)
        }), []),
        gd = (0, Nd.useRef)({
          cantCrouchIfNotFullscreen: Zd("cantCrouchIfNotFullscreen"),
          makeReport: Zd("makeReport"),
          makeDiscordReport: Zd("makeDiscordReport"),
          editBook: Zd("editBook"),
          editNameTag: Zd("editNameTag"),
          inventory: Zd("inventory"),
          inviteLink: Zd("inviteLink"),
          writeOnBoard: Zd("writeOnBoard"),
          codeEditor: Zd("codeEditor"),
          lobbyCodeEditor: Zd("lobbyCodeEditor"),
          customLobbyBlockEditor: Zd("customLobbyBlockEditor"),
          ironChestPasskeyInput: Zd("ironChestPasskeyInput"),
          petUi: Zd("petUi")
        }),
        Cd = (0, Nd.useCallback)((() => {
          Dd.d.set({
            openInGameMenuName: null
          })
        }), []),
        od = (0, Nd.useRef)(null);
      return (0, Nd.useEffect)((() => {
        if (Jd) {
          var dd;
          (0, CN.p)(CN.d, {
            keepsMovement: JP(Jd)
          }), od.current = dP.has(Jd) ? null !== (dd = Dd.d.get("openEverythingMenuName")) && void 0 !== dd ? dd : od.current : null, Dd.d.set({
            openEverythingMenuName: null
          })
        } else {
          const dd = od.current;
          od.current = null, null !== dd && null === Dd.d.get("openEverythingMenuName") && Dd.d.set({
            openEverythingMenuName: dd
          }), Wd.current = null, (0, CN.o)(CN.d)
        }
      }), [Jd]), (0, Nd.useEffect)((() => {
        null !== dd && Cd()
      }), [dd, Cd]), (0, Kd.jsxs)(Kd.Fragment, {
        children: [(0, Kd.jsx)(pd.h, {
          show: "clientGame" === Jd
        }), (0, Kd.jsx)(zp, {
          show: "cantCrouchIfNotFullscreen" === Jd,
          onOpen: gd.current.cantCrouchIfNotFullscreen,
          onClose: Cd
        }), (0, Kd.jsx)(PN, {
          show: "makeReport" === Jd,
          onOpen: gd.current.makeReport,
          onClose: Cd
        }), (0, Kd.jsx)(gN, {
          show: "makeDiscordReport" === Jd,
          onOpen: gd.current.makeDiscordReport,
          onClose: Cd
        }), (0, Kd.jsx)(kk, {
          show: "editBook" === Jd,
          onOpen: gd.current.editBook,
          onClose: Cd
        }), (0, Kd.jsx)(dk, {
          show: "editNameTag" === Jd,
          onOpen: gd.current.editNameTag,
          onClose: Cd
        }), kd && (0, Kd.jsx)(rp, {
          show: "inventory" === Jd,
          onOpen: gd.current.inventory,
          onClose: Cd,
          variation: Wd.current
        }), (0, Kd.jsx)(bJ, {
          show: "inviteLink" === Jd,
          onClose: Cd,
          option: Wd.current
        }), (0, Kd.jsx)(fd, {
          show: "retentionFeatures" === Jd,
          onClose: Cd
        }), (0, Kd.jsx)(AJ, {
          show: "writeOnBoard" === Jd,
          onOpen: gd.current.writeOnBoard,
          onClose: Cd
        }), (0, Kd.jsx)(AW, {
          show: "lobbyCodeEditor" === Jd,
          onOpen: gd.current.lobbyCodeEditor,
          onClose: Cd,
          isLobbyCode: !0
        }), (0, Kd.jsx)(AW, {
          show: "codeEditor" === Jd,
          onOpen: gd.current.codeEditor,
          onClose: Cd,
          isLobbyCode: !1
        }), (0, Kd.jsx)(oN, {
          show: "customLobbyBlockEditor" === Jd,
          onOpen: gd.current.customLobbyBlockEditor,
          onClose: Cd
        }), (0, Kd.jsx)(Bk, {
          show: "ironChestPasskeyInput" === Jd,
          onOpen: gd.current.ironChestPasskeyInput,
          onClose: Cd
        }), (0, Kd.jsx)(RN, {
          togglePointerLock: !0,
          show: "petUi" === Jd,
          onOpen: gd.current.petUi,
          onClose: Cd
        })]
      })
    }))
  },
  36667: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gP
    });
    kd(36671);
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(3613),
      Zd = kd(1459),
      gd = kd(1904),
      Cd = kd(1103);

    function Kd() {
      const dd = 2e3,
        [Jd, kd] = (0, pd.useState)(null),
        [Nd, Kd] = (0, pd.useState)(null),
        od = (0, pd.useRef)(null);
      (0, Zd.h)("showBottomMessage", (Jd => {
        let {
          message: kd,
          timeoutLength: pd = dd,
          type: Nd
        } = Jd;
        Kd({
          message: kd,
          type: Nd
        }), clearTimeout(od.current), od.current = setTimeout((() => {
          Kd(null)
        }), pd)
      })), (0, Zd.h)("showPermanentBottomMessage", (dd => {
        kd(dd)
      })), (0, pd.useEffect)((() => ((0, Pd.c)((() => {
        kd(null)
      })), () => {
        clearTimeout(od.current)
      })), []);
      const ld = Nd || Jd;
      return ld ? (0, Cd.jsx)("div", {
        className: Wd()("BottomScreenMessage", ld.type),
        children: (0, Cd.jsx)(gd.c, {
          text: ld.message
        })
      }) : null
    }
    var od = kd(2308),
      ld = kd(1932),
      Qd = kd(1543),
      Ld = kd(2365);

    function Od() {
      let dd;
      const Jd = () => {
          clearTimeout(dd), dd = setTimeout((() => {
            ld.gameBridge.latest("connectedGame").replay || (ld.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Qd.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        kd = () => {
          clearTimeout(dd)
        };
      return window.addEventListener("focus", kd), window.addEventListener("blur", Jd), () => {
        window.removeEventListener("blur", Jd), window.removeEventListener("focus", kd), clearTimeout(dd)
      }
    }
    var ed = kd(1140),
      Rd = kd(2974),
      Id = kd(300),
      Gd = kd(2357),
      vd = kd(29),
      xd = kd(1955),
      qd = kd(33),
      Bd = kd(1968),
      sd = kd(22),
      ad = kd(1971),
      Md = kd(1404),
      Fd = kd(8737),
      Yd = kd(1988),
      md = kd(1211);
    const bd = (0, pd.memo)((function() {
      const {
        isTouchScreen: dd,
        loadingOverlayVisible: Jd,
        openInGameMenuName: kd,
        openEverythingMenuName: Nd
      } = (0, sd.j)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Pd = (0, Md.m)();
      (0, Rd.b)();
      const Zd = (0, Gd.j)("showBasicMovementControls"),
        [gd, Kd] = (0, pd.useState)("movement"),
        od = "movement" === gd,
        ld = Pd && !1 !== Zd;
      (0, pd.useEffect)((() => {
        "padActions" !== gd || ld || Kd("done")
      }), [gd, ld]);
      const Qd = Jd || null !== kd || null !== Nd,
        Ld = (0, pd.useRef)({
          step: gd,
          ms: 0
        });
      return (0, pd.useEffect)((() => {
        if (Qd || "done" === gd) return;
        Ld.current.step !== gd && (Ld.current = {
          step: gd,
          ms: 0
        });
        const dd = Ld.current,
          Jd = performance.now(),
          kd = setTimeout((() => {
            Kd("movement" === gd && (0, Md.d)() ? "padActions" : "done")
          }), 7e3 - dd.ms);
        return () => {
          clearTimeout(kd), dd.ms += performance.now() - Jd
        }
      }), [Qd, gd]), qd.i.getItem(Id.Cb) > 2 ? (0, Cd.jsx)(fd, {
        showingMovementControls: !1
      }) : (0, Cd.jsxs)(Cd.Fragment, {
        children: [dd && !Pd || !od || !1 === Zd ? null : (0, Cd.jsxs)("div", {
          className: Wd()("ControlsTutorialDiv", {
            Covered: Qd
          }),
          children: [(0, Cd.jsx)(Sd, {}), (0, Cd.jsx)(Xd, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Cd.jsx)(Xd, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === gd && ld && (0, Cd.jsx)(jd, {
          covered: Qd
        }), (0, Cd.jsx)(fd, {
          showingMovementControls: "done" !== gd
        })]
      })
    }));

    function Sd() {
      const dd = (0, Md.m)();
      return (0, Cd.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Cd.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), dd && (0, Cd.jsx)(ad.c, {
          noaAction: "forward"
        }), !dd && (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Cd.jsx)(ad.c, {
              noaAction: "forward"
            })
          }), (0, Cd.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Cd.jsx)(ad.c, {
              noaAction: "left"
            }), (0, Cd.jsx)(ad.c, {
              noaAction: "backward"
            }), (0, Cd.jsx)(ad.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function jd(dd) {
      let {
        covered: Jd
      } = dd;
      const {
        t: kd
      } = (0, md.B)(), pd = (0, Gd.j)("useInventory");
      return (0, Cd.jsxs)("div", {
        className: Wd()("ControlsTutorialDiv", {
          Covered: Jd
        }),
        children: [(0, Cd.jsx)(Xd, {
          header: kd("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Cd.jsx)(Xd, {
          header: kd("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== pd && (0, Cd.jsx)(Xd, {
          header: kd("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Cd.jsx)(Xd, {
          header: kd("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Xd(dd) {
      let {
        header: Jd,
        noaAction: kd
      } = dd;
      return (0, Cd.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Cd.jsx)("div", {
          className: "KeyHeader",
          children: Jd
        }), (0, Cd.jsx)(ad.c, {
          noaAction: kd
        })]
      })
    }

    function fd(dd) {
      let {
        showingMovementControls: Jd
      } = dd;
      const {
        isTouchScreen: kd
      } = (0, sd.j)(["isTouchScreen"]), Nd = (0, Md.m)(), Wd = (0, Yd.c)("OpenShop"), [Pd, Zd] = (0, pd.useState)(!1), gd = `SeenShopControls|${(0,Bd.g)("connectedGame",(dd=>dd.gameNameWithVariation))}`, Kd = () => (!(0, Md.d)() || null !== (0, Fd.c)("OpenShop")) && !qd.i.getItem(gd) && xd.b.get("shopInfo") && !Jd, od = () => (Zd(!0), qd.i.setItem(gd, !0), (0, Md.d)() || vd.j.nO("showShopTouchTutorial"), setTimeout((() => {
        Zd(!1)
      }), 7e3));
      (0, pd.useEffect)((() => {
        let dd;
        const Jd = vd.j.subscribe("showShopTutorial", (() => {
          Kd() && (dd = od())
        }));
        return () => {
          clearTimeout(dd), vd.j.unsubscribe(Jd)
        }
      }), [Jd]);
      const ld = (0, pd.useRef)();
      return (0, Gd.g)("currencyAmounts", (dd => {
        if (Kd()) {
          let kd = !1;
          const pd = xd.b.get("shopInfo");
          for (const Nd in pd) {
            for (const Wd in pd[Nd].items) {
              var Jd;
              const Pd = pd[Nd].items[Wd];
              if (void 0 !== Pd.currency && dd[Pd.currency] && Pd.cost <= dd[Pd.currency].amount && (null === (Jd = Pd.hidden) || void 0 === Jd || !Jd)) {
                kd = !0;
                break
              }
            }
            if (kd) break
          }
          kd && (ld.current = od())
        }
      })), (0, pd.useEffect)((() => () => {
        clearTimeout(ld.current)
      }), [Jd]), !Pd || Nd && !Wd ? null : (0, Cd.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: kd && !Nd ? null : (0, Cd.jsx)(Xd, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var nd = kd(1384),
      Ud = kd(1059);
    const yd = (0, pd.memo)((function() {
      return (0, Rd.b)(), (0, Cd.jsx)(Dd, {})
    }));
    class Dd extends pd.Component {
      constructor(dd) {
        super(dd), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = vd.j.subscribe("TopRightHelper", (dd => {
          this.showQueue.push(dd), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        vd.j.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(dd, Jd) {
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
        let dd, Jd, kd, pd, Nd, Wd = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, dd = "slideIn") : "slideOut" === this.state.currState ? dd = "slideOut" : null === this.currMessage && (Wd = !1), this.currMessage) {
          const Wd = this.currMessage.color || "rgb(102, 102, 102)";
          Jd = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === dd ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, kd = {
            backgroundColor: Wd
          }, pd = {
            animation: "2s " + ("slideOut" === dd ? "CloseNotification" : "ExpandNotification")
          }, Nd = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === dd ? "textDisappear" : "textAppear")
          }
        }
        return Wd ? (0, Cd.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...Jd
          },
          children: [(0, Cd.jsx)("div", {
            className: "LeftSide",
            style: kd,
            children: (0, Cd.jsx)(Ud.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Cd.jsx)("div", {
            className: "RightSide",
            style: pd,
            children: (0, Cd.jsx)("div", {
              className: "HelperText",
              style: Nd,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Td = kd(36677),
      Ed = kd(1417);
    const cd = (0, Ed.k)((dd => dd.PadSneakChip));

    function hd(dd) {
      const [Jd, kd, pd] = function(dd) {
        const Jd = parseInt(dd.substring(1), 16),
          kd = (Jd >> 16) / 255,
          pd = (Jd >> 8 & 255) / 255,
          Nd = (255 & Jd) / 255,
          Wd = Math.max(kd, pd, Nd),
          Pd = Math.min(kd, pd, Nd),
          Zd = (Wd + Pd) / 2,
          gd = Wd - Pd;
        if (0 === gd) return [0, 0, Zd];
        const Cd = gd / (1 - Math.abs(2 * Zd - 1));
        let Kd;
        Kd = Wd === kd ? (pd - Nd) / gd % 6 : Wd === pd ? (Nd - kd) / gd + 2 : (kd - pd) / gd + 4;
        return [(60 * Kd + 360) % 360, Cd, Zd]
      }(dd), Nd = 0 === kd ? 0 : Math.min(.6, kd + .03), Wd = pd > .5 ? -1 : 1, Pd = rd(pd + .09 * Wd);
      return {
        panel: dd,
        slot: ud(Jd, Nd, Pd),
        slotSelected: ud(Jd, Nd, rd(Pd + .2 * Wd)),
        slotUnavailable: ud(Jd, Nd, rd(pd + -.1 * Wd))
      }
    }

    function rd(dd) {
      return Math.min(1, Math.max(0, dd))
    }

    function ud(dd, Jd, kd) {
      const pd = (1 - Math.abs(2 * kd - 1)) * Jd,
        Nd = pd * (1 - Math.abs(dd / 60 % 2 - 1)),
        Wd = kd - pd / 2;
      let Pd;
      return Pd = dd < 60 ? [pd, Nd, 0] : dd < 120 ? [Nd, pd, 0] : dd < 180 ? [0, pd, Nd] : dd < 240 ? [0, Nd, pd] : dd < 300 ? [Nd, 0, pd] : [pd, 0, Nd], "#" + Pd.map((dd => function(dd) {
        return Math.round(255 * dd).toString(16).padStart(2, "0")
      }(dd + Wd))).join("")
    }
    var td = kd(36703),
      Vd = kd(4131),
      zd = kd(2337),
      Hd = kd(2345),
      wd = kd(36765),
      Ad = kd(4709),
      dJ = kd(1482),
      JJ = kd(610);

    function kJ(dd, Jd, kd, pd) {
      dd.style.display = "";
      const Nd = dd.offsetWidth,
        Wd = dd.offsetHeight,
        Pd = Math.min(Math.max((Jd.left + Jd.right) / 2 - Nd / 2, 8), window.innerWidth - 8 - Nd);
      let Zd = Jd.top - kd - Wd;
      const gd = [...pd].sort(((dd, Jd) => Jd.top - dd.top));
      for (const Cd of gd) Pd < Cd.right && Pd + Nd > Cd.left && Zd < Cd.bottom && Zd + Wd > Cd.top && (Zd = Cd.top - 8 - Wd);
      return Zd < 8 ? (dd.style.display = "none", null) : (dd.style.transform = `translate(${Pd-Jd.left}px, ${Zd-Jd.top}px)`, {
        left: Pd,
        top: Zd,
        right: Pd + Nd,
        bottom: Zd + Wd
      })
    }

    function pJ(dd) {
      const Jd = [];
      for (const kd of document.querySelectorAll(dd)) {
        const dd = kd.getBoundingClientRect();
        dd.width > 0 && "visible" === getComputedStyle(kd).visibility && Jd.push(dd)
      }
      return Jd
    }

    function NJ(dd, Jd) {
      return dd.clientX >= Jd.left - 8 && dd.clientX <= Jd.right + 8 && dd.clientY >= Jd.top - 8 && dd.clientY <= Jd.bottom + 8
    }
    var WJ = kd(8809);
    class PJ {
      constructor(dd) {
        this.deps = dd, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(dd) {
        dd && "armed" === this.phase ? this.setPhase("ready") : dd || "ready" !== this.phase || this.setPhase("armed")
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
      hold(dd, Jd) {
        this.suspended || (this.offered ? Jd || this.setPhase("idle") : dd && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : dd || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(dd) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const Jd = this.phase;
        this.phase = dd, this.deps.onPhase(dd, Jd)
      }
    }
    const ZJ = 25 * Math.PI / 180,
      gJ = 45 * Math.PI / 180;
    class CJ extends PJ {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(dd, Jd, kd) {
        this.speed = kd;
        const pd = Math.hypot(dd, Jd),
          Nd = pd > 0 ? Math.acos(Math.min(1, -Jd / pd)) : Math.PI;
        this.hold(pd >= .8 && Nd <= ZJ, pd >= .5 && Nd <= gJ)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var KJ = kd(1307);

    function oJ(dd, Jd) {
      const kd = (0, pd.useRef)(null),
        Nd = (0, pd.useRef)(Jd);
      return Nd.current = Jd, (0, pd.useEffect)((() => {
        if (!dd) return;
        const {
          create: Jd,
          elementRef: pd,
          ringRef: Wd,
          classPrefix: Pd,
          keptBehindMovementPanels: Zd,
          resizeEnds: gd
        } = Nd.current, Cd = {
          charging: `${Pd}Charging`,
          armed: `${Pd}Armed`,
          ready: `${Pd}Ready`,
          locked: `${Pd}Locked`
        };
        let Kd = null;
        const od = Jd({
          onPhase: (dd, Jd) => {
            const kd = pd.current;
            if (null !== kd) {
              for (const [Jd, pd] of Object.entries(Cd)) kd.classList.toggle(pd, Jd === dd);
              if ("charging" === dd) Kd = Wd.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === dd) {
                var Pd;
                null === (Pd = Kd) || void 0 === Pd || Pd.cancel(), Kd = null
              }
              var Zd, gd;
              if ("armed" === dd && "charging" === Jd && Nd.current.onArmed(), "ready" === dd && WJ.d.play("lockReady"), "locked" === dd) WJ.d.play("lockLocked"), null === (Zd = (gd = Nd.current).onLocked) || void 0 === Zd || Zd.call(gd);
              "locked" === Jd && Nd.current.onUnlocked()
            }
          }
        });
        kd.current = od;
        const ld = () => {
            od.suspend()
          },
          Qd = () => {
            "hidden" === document.visibilityState && ld()
          },
          Ld = () => {
            gd ? od.suspend() : od.suspendArming()
          },
          Od = (0, KJ.g)((dd => {
            let {
              keepsMovement: Jd
            } = dd;
            Jd && Zd ? od.suspendArming() : ld()
          }));
        return document.addEventListener("visibilitychange", Qd), window.addEventListener("blur", ld), window.addEventListener("resize", Ld), () => {
          Od(), document.removeEventListener("visibilitychange", Qd), window.removeEventListener("blur", ld), window.removeEventListener("resize", Ld), od.cancel(), kd.current = null
        }
      }), [dd]), (0, Bd.d)("localPlayerAliveSet", (() => {
        var dd;
        null === (dd = kd.current) || void 0 === dd || dd.suspend()
      })), kd
    }
    var lJ = kd(2382),
      QJ = kd(2398),
      LJ = kd(1124),
      OJ = kd(3247),
      eJ = kd(2405);

    function RJ(dd, Jd, kd) {
      const pd = function(dd, Jd, kd) {
        const pd = kd.map((kd => ({
            left: Math.max(0, kd.left),
            top: Math.max(0, kd.top),
            right: Math.min(dd, kd.right),
            bottom: Math.min(Jd, kd.bottom)
          }))).filter((dd => dd.right > dd.left && dd.bottom > dd.top)),
          Nd = [...new Set([0, Jd, ...pd.flatMap((dd => [dd.top, dd.bottom]))])].sort(((dd, Jd) => dd - Jd)),
          Wd = [];
        for (let Pd = 0; Pd < Nd.length - 1; Pd++) {
          const Jd = Nd[Pd],
            kd = Nd[Pd + 1],
            Zd = pd.filter((dd => dd.top <= Jd && dd.bottom >= kd)).map((dd => [dd.left, dd.right])).sort(((dd, Jd) => dd[0] - Jd[0]));
          let gd = 0;
          for (const [dd, pd] of Zd) dd > gd && Wd.push({
            left: gd,
            top: Jd,
            right: dd,
            bottom: kd
          }), gd = Math.max(gd, pd);
          gd < dd && Wd.push({
            left: gd,
            top: Jd,
            right: dd,
            bottom: kd
          })
        }
        return Wd
      }(dd, Jd, kd);
      if (0 === pd.length) return 'path("M0 0Z")';
      if (1 === pd.length && 0 === pd[0].left && 0 === pd[0].top && pd[0].right === dd && pd[0].bottom === Jd) return "";
      const Nd = dd => Math.round(10 * dd) / 10;
      return `path("${pd.map((dd=>`M${Nd(dd.left)} ${Nd(dd.top)}H${Nd(dd.right)}V${Nd(dd.bottom)}H${Nd(dd.left)}Z`)).join("")}")`
    }

    function IJ(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Nd = [],
        Wd = 2 * kd / pd;
      for (let Pd = 0; Pd < pd; Pd++) {
        const pd = Jd - kd + Pd * Wd,
          Zd = pd + Wd,
          gd = Math.min(Math.max(Jd, pd), Zd) - Jd,
          Cd = Math.sqrt(Math.max(0, kd * kd - gd * gd));
        Nd.push({
          left: dd - Cd,
          top: pd,
          right: dd + Cd,
          bottom: Zd
        })
      }
      return Nd
    }
    var GJ = kd(8815),
      vJ = kd(36736);

    function xJ(dd) {
      const Jd = dd.getBoundingClientRect(),
        kd = {
          left: Jd.left,
          top: Jd.top,
          right: Jd.right,
          bottom: Jd.bottom
        },
        pd = (0, wd.i)(dd);
      if (pd.whole) return [kd];
      const Nd = function(dd) {
          const Jd = dd.right - dd.left,
            kd = dd.bottom - dd.top,
            pd = Math.min(Jd, kd) / 2,
            Nd = (dd.left + dd.right) / 2,
            Wd = (dd.top + dd.bottom) / 2;
          return Jd >= kd ? [{
            left: dd.left + pd,
            top: dd.top,
            right: dd.right - pd,
            bottom: dd.bottom
          }, ...IJ(dd.left + pd, Wd, pd), ...IJ(dd.right - pd, Wd, pd)] : [{
            left: dd.left,
            top: dd.top + pd,
            right: dd.right,
            bottom: dd.bottom - pd
          }, ...IJ(Nd, dd.top + pd, pd), ...IJ(Nd, dd.bottom - pd, pd)]
        }(kd),
        Wd = pd.keyBox;
      if (Wd) {
        const dd = (kd.left + kd.right) / 2,
          Jd = (kd.top + kd.bottom) / 2;
        Nd.push({
          left: dd - Wd.width / 2,
          top: Jd - Wd.height / 2,
          right: dd + Wd.width / 2,
          bottom: Jd + Wd.height / 2
        })
      }
      return Nd
    }

    function qJ(dd) {
      const Jd = dd.getBoundingClientRect();
      return 0 === Jd.width && 0 === Jd.height || "visible" !== getComputedStyle(dd).visibility ? [] : [(0, GJ.o)(Jd, 44)]
    }

    function BJ(dd, Jd) {
      (0, pd.useEffect)((() => {
        const kd = dd.current;
        if (!Jd || !kd) return;
        const pd = () => {
          const dd = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            Jd = dd.find((dd => dd.classList.contains("TouchInteractHit")));
          Jd !== Nd && (Nd && Wd.unobserve(Nd), Nd = Jd, Jd && Wd.observe(Jd));
          const pd = Array.from(document.querySelectorAll(eJ.c)),
            Pd = [...dd.flatMap((dd => xJ(dd))), ...pd.flatMap(qJ)],
            Zd = function(dd, Jd) {
              const kd = Jd.map((Jd => ({
                left: Jd.left - dd.left,
                top: Jd.top - dd.top,
                right: Jd.right - dd.left,
                bottom: Jd.bottom - dd.top
              })));
              return RJ(Math.ceil(dd.width), Math.ceil(dd.height), kd)
            }(kd.getBoundingClientRect(), Pd);
          kd.style.clipPath !== Zd && (kd.style.clipPath = Zd)
        };
        let Nd;
        const Wd = new ResizeObserver((() => {
          pd()
        }));
        pd(), Wd.observe(kd);
        const Pd = kd.closest(".InGameUi"),
          Zd = new MutationObserver(pd);
        Pd && Zd.observe(Pd, {
          attributes: !0,
          attributeFilter: ["class", vJ.c]
        });
        const gd = [(0, vd.n)(OJ.b, pd), (0, vd.n)(eJ.o, pd), (0, vd.n)(eJ.e, pd)];
        return () => {
          Wd.disconnect(), Zd.disconnect();
          for (const dd of gd) dd();
          kd.style.clipPath = ""
        }
      }), [dd, Jd])
    }
    var sJ = kd(4249);

    function iJ(dd) {
      var Jd;
      let {
        onMove: kd,
        mode: Nd,
        speedCurve: Wd,
        autorun: Pd = !1
      } = dd;
      const Zd = (0, pd.useRef)(null),
        gd = (0, pd.useRef)(null),
        Kd = (0, pd.useRef)(null),
        od = (0, pd.useRef)(null),
        Qd = (0, pd.useRef)(null),
        Ld = (0, pd.useRef)(null),
        Od = (0, pd.useRef)(null),
        ed = (0, pd.useRef)(null),
        Rd = (0, pd.useRef)(null),
        Id = (0, pd.useRef)(!1),
        Gd = (0, pd.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: vd
        } = (0, md.B)(),
        xd = (0, sJ.p)(Nd),
        qd = (0, sd.j)(["notchSize"]).notchSize,
        Bd = qd.left,
        ad = (0, pd.useRef)(16),
        Md = (0, QJ.b)(),
        [Fd, Yd, bd] = "pinned" === Nd ? lJ.p : null !== (Jd = Md.hudElements.joystick) && void 0 !== Jd ? Jd : lJ.p,
        Sd = "pinned" === Nd ? null : Md.hudSafe,
        jd = Math.max(sJ.l, sJ.m * bd);
      BJ(gd, "pinned" !== Nd);
      const Xd = function(dd, Jd, kd, Nd, Wd) {
        const Pd = (0, pd.useRef)(null),
          Zd = () => {
            clearInterval(Pd.current), Pd.current = null
          },
          gd = oJ(dd, {
            create: dd => new CJ(dd),
            elementRef: Jd,
            ringRef: kd,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Wd,
            onLocked: () => {
              Pd.current = setInterval((() => {
                ld.gameBridge.lookup("dropAhead", null) && (WJ.d.play("autorunLedgeStop"), gd.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Zd(), Nd()
            }
          });
        return (0, pd.useEffect)((() => Zd), []), gd
      }(Pd, Kd, Od, (() => {
        cd(), Ed()
      }), (() => {
        fd(), null === Rd.current && Xd.current.suspend()
      }));

      function fd() {
        const dd = Kd.current.getBoundingClientRect();
        Rd.current = kJ(ed.current, dd, 80, pJ(`.TouchInventoryKey, ${eJ.c}`)), Id.current = null !== Rd.current && NJ(Gd.current, Rd.current)
      }

      function nd() {
        const {
          innerWidth: dd,
          innerHeight: Jd
        } = window, kd = (0, eJ.B)(Sd, dd, Jd, (0, eJ.J)(qd, dd, Jd), ad.current);
        return {
          left: kd[3],
          bottom: kd[2]
        }
      }

      function yd(dd) {
        Kd.current.style.transform = `translate(${dd.x-jd}px, ${dd.y-jd}px)`
      }

      function Dd(dd) {
        const Jd = Kd.current;
        Jd.classList.add("Resting"), Jd.classList.toggle("Returning", dd), Jd.style.display = "fixed_hidden" === Nd ? "none" : "block", yd(function() {
          const {
            innerWidth: dd,
            innerHeight: Jd
          } = window, kd = nd(), pd = Bd * dd / 100 + kd.left, Nd = Zd.current.offsetHeight || Jd, Wd = ((0, LJ.b)(dd, Jd) ? sJ.f : sJ.c) + kd.bottom;
          return {
            x: Math.min(dd - jd, Math.max(jd, pd + sJ.h + Fd * dd)),
            y: Math.min(Nd - jd, Math.max(jd, Nd - Wd + Yd * Nd))
          }
        }())
      }
      const Td = (0, pd.useRef)({
        restFixed: Dd,
        release: hd
      });

      function Ed() {
        xd ? Dd("fixed_shown" === Nd) : "floating" === Nd && (Kd.current.style.display = "none"), kd({
          x: 0,
          y: 0
        })
      }

      function cd() {
        Ld.current = null, Qd.current = null, od.current.style.transform = "translate(-50%, -50%)"
      }

      function hd(dd) {
        cd();
        const Jd = Xd.current;
        dd && null !== Jd && void 0 !== Jd && Jd.lift() ? kd({
          x: 0,
          y: -Jd.lockedSpeed
        }) : (null === Jd || void 0 === Jd || Jd.cancel(), Ed())
      }

      function rd(dd) {
        const Jd = Array.from(dd.touches).find((dd => dd.identifier === Ld.current));
        if (null === Qd.current || null === Ld.current || (0, JJ.I)(Jd)) return;
        const pd = Xd.current,
          Nd = Jd.clientX - Qd.current.x,
          Pd = Jd.clientY - Qd.current.y,
          Zd = Math.hypot(Nd, Pd),
          gd = Zd > 0 ? Math.min(1, jd / Zd) : 0,
          Cd = Nd * gd,
          Kd = Pd * gd,
          ld = Math.hypot(Cd, Kd) / jd,
          Od = Wd && ld > 0 ? Wd(ld) / ld : 1;
        od.current.style.transform = `translate(calc(-50% + ${Cd}px), calc(-50% + ${Kd}px))`;
        const ed = Cd / jd,
          vd = Kd / jd;
        if (kd({
            x: ed * Od,
            y: vd * Od
          }), null !== pd && null !== Rd.current) {
          pd.move(ed, vd, ld * Od), Gd.current = {
            clientX: Jd.clientX,
            clientY: Jd.clientY
          };
          const dd = Id.current;
          Id.current = NJ(Jd, Rd.current), Id.current !== dd && pd.target(Id.current)
        }
      }
      return Td.current = {
        restFixed: Dd,
        release: hd
      }, (0, pd.useLayoutEffect)((() => {
        if (!xd) return;
        const dd = () => {
          ad.current = (0, eJ.O)(document)
        };
        dd(), null === Ld.current && Td.current.restFixed(!1);
        const Jd = new ResizeObserver((() => {
          dd(), null === Ld.current && Td.current.restFixed(!1)
        }));
        Jd.observe(Zd.current);
        const kd = Kd.current;
        return () => {
          Jd.disconnect(), kd.classList.remove("Resting", "Returning"), null === Ld.current && (kd.style.display = "", kd.style.transform = "")
        }
      }), [xd, Nd, qd, Fd, Yd, jd, Sd]), (0, pd.useEffect)((() => {
        const dd = dd => {
            const Jd = Ld.current;
            null === Jd || Array.from(dd.touches).some((dd => dd.identifier === Jd)) || Td.current.release("touchend" === dd.type && Array.from(dd.changedTouches).some((dd => dd.identifier === Jd)))
          },
          Jd = () => {
            null !== Ld.current && Td.current.release(!1)
          },
          kd = () => {
            "hidden" === document.visibilityState && Jd()
          };
        document.addEventListener("touchstart", dd, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", dd, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", dd, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", dd, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", Jd), document.addEventListener("visibilitychange", kd);
        const pd = (0, KJ.g)((dd => {
          let {
            keepsMovement: kd
          } = dd;
          kd || Jd()
        }));
        return () => {
          pd(), document.removeEventListener("touchstart", dd, {
            capture: !0
          }), document.removeEventListener("touchmove", dd, {
            capture: !0
          }), document.removeEventListener("touchend", dd, {
            capture: !0
          }), document.removeEventListener("touchcancel", dd, {
            capture: !0
          }), window.removeEventListener("blur", Jd), document.removeEventListener("visibilitychange", kd)
        }
      }), []), (0, pd.useEffect)((() => {
        const dd = Zd.current,
          Jd = dd => {
            dd.preventDefault()
          };
        return dd.addEventListener("touchstart", Jd, {
          passive: !1
        }), () => {
          dd.removeEventListener("touchstart", Jd)
        }
      }), []), (0, Cd.jsxs)("div", {
        ref: Zd,
        className: "JoystickZone",
        style: xd && (Fd > 0 || bd > 1 || nd().left > 0) ? {
          width: `max(35vw, calc(${Bd+100*Fd}vw + ${nd().left+sJ.h+jd+24}px))`
        } : void 0,
        onTouchStart: function(dd) {
          var Jd;
          if (null !== Ld.current) return;
          const kd = Array.from(dd.changedTouches).find((dd => {
            var Jd;
            return null === (Jd = Zd.current) || void 0 === Jd ? void 0 : Jd.contains(dd.target)
          }));
          if (kd) {
            if (null === (Jd = Xd.current) || void 0 === Jd || Jd.startTouch(), Ld.current = kd.identifier, "pinned" === Nd) {
              const dd = Kd.current.getBoundingClientRect();
              Qd.current = {
                x: dd.left + dd.width / 2,
                y: dd.top + dd.height / 2
              }
            } else {
              Qd.current = {
                x: kd.clientX,
                y: kd.clientY
              }, Kd.current.classList.remove("Resting", "Returning"), Kd.current.style.display = "block";
              const dd = Zd.current.getBoundingClientRect();
              yd({
                x: kd.clientX - dd.left,
                y: kd.clientY - dd.top
              }), Pd && (Gd.current = {
                clientX: kd.clientX,
                clientY: kd.clientY
              }, fd())
            }
            rd(dd)
          }
        },
        onTouchMove: rd,
        children: [(0, Cd.jsx)("div", {
          ref: gd,
          className: "JoystickTouchLayer"
        }), (0, Cd.jsxs)("div", {
          ref: Kd,
          className: "Joystick",
          style: {
            width: 2 * jd + "px",
            height: 2 * jd + "px",
            transform: "pinned" === Nd ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Cd.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * jd + "px",
              height: 2 * jd + "px"
            }
          }), Pd && (0, Cd.jsxs)(Cd.Fragment, {
            children: [(0, Cd.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Cd.jsx)("circle", {
                ref: Od,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Cd.jsxs)("div", {
              ref: ed,
              className: "AutorunTarget",
              children: [(0, Cd.jsx)(Ud.e, {
                name: "lock"
              }), vd("settingsMenu:autoRun")]
            })]
          }), (0, Cd.jsx)("div", {
            ref: od,
            className: "JoystickKnob",
            style: {
              width: `${jd}px`,
              height: `${jd}px`
            }
          })]
        })]
      })
    }
    const aJ = .35,
      MJ = .22;

    function FJ(dd) {
      if (dd < .1) return 0;
      if (dd < aJ) {
        const Jd = (dd - .1) / (aJ - .1);
        return .06 + .16 * Jd * Jd
      }
      return dd < .85 ? MJ + .78 * (dd - aJ) / .5 : 1
    }

    function YJ(dd, Jd) {
      const kd = (0, pd.useRef)(null);
      return (0, pd.useLayoutEffect)((() => (wd.m.set(dd, kd.current, Jd), () => {
        wd.m.set(dd, null)
      })), [dd, Jd]), kd
    }
    const mJ = "C",
      bJ = "J",
      SJ = "U",
      jJ = "P",
      XJ = "A",
      fJ = "G",
      nJ = "X",
      UJ = (0, pd.forwardRef)((function(dd, Jd) {
        let {
          slot: kd,
          canvasZone: Nd = !1,
          lit: Pd = !1,
          label: Zd,
          className: gd,
          children: Kd,
          ...od
        } = dd;
        return (0, pd.useEffect)((() => (vd.j.nO(OJ.b), () => {
          vd.j.nO(OJ.b)
        })), []), (0, Cd.jsx)("div", {
          ref: Jd,
          className: Wd()("TouchKeyHit", `TouchSlot${kd}`, gd, {
            CanvasZone: Nd
          }),
          ...od,
          children: (0, Cd.jsxs)("div", {
            className: Wd()("TouchKey", {
              Lit: Pd,
              Labelled: void 0 !== Zd
            }),
            children: [Kd, void 0 !== Zd && (0, Cd.jsx)("span", {
              className: "TouchKeyLabel",
              children: Zd
            })]
          })
        })
      }));

    function yJ(dd, Jd) {
      (0, pd.useEffect)((() => () => {
        Jd.current && (Jd.current = !1, (0, Hd.D)(dd, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function DJ(dd, Jd) {
      const kd = Jd ? [nJ] : [jJ, nJ];
      return dd.filter((dd => null !== dd)).slice(0, kd.length).map(((dd, Jd) => {
        const Nd = kd[Jd];
        return (0, Cd.jsx)(pd.Fragment, {
          children: dd.render(Nd)
        }, `${dd.id}:${Nd}`)
      }))
    }
    var TJ = kd(36754);
    class EJ extends PJ {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(dd, Jd) {
        this.start = {
          x: dd,
          y: Jd
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(dd, Jd, kd) {
        const pd = Math.hypot(dd - this.start.x, Jd - this.start.y) <= 12;
        this.moved ||= !pd;
        const Nd = null !== kd && Jd < this.start.y - 12 && NJ({
          clientX: dd,
          clientY: Jd
        }, kd);
        this.hold(!this.moved, pd || Nd)
      }
    }
    const cJ = new Set;

    function hJ(dd) {
      const Jd = new Set(Array.from(dd.touches, (dd => dd.identifier)));
      for (const kd of cJ) {
        for (const dd of kd.ids) Jd.has(dd) || kd.ids.delete(dd);
        if (0 === kd.ids.size) {
          cJ.delete(kd);
          kd.pressesOnPointerDown && "touchstart" === dd.type && Array.from(dd.changedTouches).some((dd => dd.target instanceof Node && kd.element.contains(dd.target))) || kd.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const IP of ["touchstart", "touchmove"]) window.addEventListener(IP, hJ, {
        capture: !0,
        passive: !0
      });

    function rJ(dd) {
      let {
        pressesOnPointerDown: Jd = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const kd = (0, pd.useRef)(dd);
      kd.current = dd;
      const Nd = (0, pd.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: Jd,
        release: () => {
          kd.current()
        }
      });
      (0, pd.useEffect)((() => {
        const dd = Nd.current;
        return () => {
          cJ.delete(dd), dd.ids.clear()
        }
      }), []);
      const Wd = dd => {
        const Jd = Nd.current;
        for (const kd of Array.from(dd.changedTouches)) Jd.ids.delete(kd.identifier);
        0 === Jd.ids.size && cJ.delete(Jd)
      };
      return {
        onTouchStart: dd => {
          const Jd = Nd.current;
          Jd.element = dd.currentTarget;
          for (const kd of Array.from(dd.changedTouches)) kd.target instanceof Node && dd.currentTarget.contains(kd.target) && Jd.ids.add(kd.identifier);
          Jd.ids.size > 0 && cJ.add(Jd)
        },
        onTouchEnd: Wd,
        onTouchCancel: Wd
      }
    }

    function uJ(dd, Jd) {
      return null === Jd ? null : (0, TJ.e)(dd.nativeEvent.changedTouches, Jd.id)
    }

    function tJ(dd) {
      let {
        lockable: Jd
      } = dd;
      const {
        t: kd
      } = (0, md.B)(), Nd = "round" === (0, lJ.fb)().hudShape, Wd = (0, pd.useRef)(!1);
      yJ(zd.u.Jump, Wd);
      const Pd = (0, pd.useRef)(null),
        Zd = (0, pd.useRef)(null),
        gd = (0, pd.useRef)(null),
        Kd = (0, pd.useRef)(null),
        od = (0, pd.useRef)(null),
        ld = (0, pd.useRef)(null),
        Qd = (0, pd.useRef)(!1),
        Ld = (dd, Jd) => {
          Wd.current = dd, (0, Hd.D)(zd.u.Jump, dd, Jd)
        },
        Od = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Wd.current && (Pd.current && (0, dJ.j)(Pd.current, !1), Ld(!1, dd))
        },
        ed = oJ(Jd, {
          create: dd => new EJ(dd),
          elementRef: Pd,
          ringRef: Zd,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const dd = Pd.current.getBoundingClientRect(),
              Jd = gd.current.parentElement,
              kd = Jd.getBoundingClientRect(),
              pd = {
                left: kd.left + Jd.clientLeft,
                top: kd.top + Jd.clientTop,
                right: kd.right - Jd.clientLeft,
                bottom: kd.bottom - Jd.clientTop
              };
            if (od.current = kJ(gd.current, pd, 16, pJ(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${eJ.c}`)), null === od.current) return void ed.current.suspend();
            const Nd = od.current;
            ld.current = {
              left: Math.min(dd.left, Nd.left),
              top: Nd.top,
              right: Math.max(dd.right, Nd.right),
              bottom: dd.bottom
            }, Qd.current = null !== Kd.current && NJ({
              clientX: Kd.current.x,
              clientY: Kd.current.y
            }, Nd)
          },
          onUnlocked: () => {
            null === Kd.current && Od()
          }
        }),
        Rd = dd => {
          var Jd;
          Kd.current = null, null === (Jd = ed.current) || void 0 === Jd || Jd.cancel(), Od(dd)
        },
        Id = rJ((() => {
          Rd()
        })),
        Gd = dd => {
          const Jd = Kd.current;
          var kd;
          return null === Jd ? null !== (kd = ed.current) && void 0 !== kd && kd.locked ? null : "lifted" : uJ(dd, Jd) ? "lifted" : (0, TJ.g)(dd.nativeEvent.touches, Jd.id) ? null : "dropped"
        };
      return (0, Cd.jsxs)(UJ, {
        ref: Pd,
        slot: bJ,
        className: "JumpKey",
        onTouchStart: dd => {
          Id.onTouchStart(dd), (0, dJ.j)(dd.currentTarget, !0), null === Kd.current || (0, TJ.g)(dd.nativeEvent.touches, Kd.current.id) || Rd();
          const Jd = dd.changedTouches[0];
          var kd;
          null === Kd.current && Jd && (Kd.current = {
            id: Jd.identifier,
            x: Jd.clientX,
            y: Jd.clientY
          }, null === (kd = ed.current) || void 0 === kd || kd.press(Jd.clientX, Jd.clientY));
          Wd.current || Ld(!0, dd.nativeEvent)
        },
        onTouchMove: dd => {
          const Jd = Kd.current,
            kd = uJ(dd, Jd);
          if (!kd) return;
          const pd = ed.current;
          if (null === pd || void 0 === pd || pd.move(kd.clientX, kd.clientY, ld.current), null !== pd && void 0 !== pd && pd.offered) {
            const dd = NJ(kd, od.current);
            dd !== Qd.current && (Qd.current = dd, pd.target(dd))
          }
          Jd.x = kd.clientX, Jd.y = kd.clientY
        },
        onTouchEnd: dd => {
          var Jd;
          Id.onTouchEnd(dd);
          const kd = Gd(dd);
          null !== kd && ("dropped" !== kd ? (Kd.current = null, null !== (Jd = ed.current) && void 0 !== Jd && Jd.lift() ? (0, dJ.j)(dd.currentTarget, !1) : Od(dd.nativeEvent)) : Rd(dd.nativeEvent))
        },
        onTouchCancel: dd => {
          Id.onTouchCancel(dd), null !== Gd(dd) && Rd(dd.nativeEvent)
        },
        children: [(0, Cd.jsx)(Ud.e, {
          name: "arrow-up-from-line"
        }), Jd && (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Cd.jsx)(Ud.e, {
              name: "lock"
            })
          }), (0, Cd.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Cd.jsx)("rect", {
              ref: Zd,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Nd ? 48 : 0,
              pathLength: 1
            })
          }), (0, Cd.jsxs)("div", {
            ref: gd,
            className: "JumpLockTarget",
            children: [(0, Cd.jsx)(Ud.e, {
              name: "lock"
            }), kd("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const VJ = new WeakMap;
    class zJ {
      constructor(dd) {
        this.zones = dd, this.followed = new Map, this.onStart = dd => {
          if (this.releaseMissing(dd.touches), dd.target instanceof HTMLCanvasElement)
            for (let kd = 0; kd < dd.changedTouches.length; kd++) {
              var Jd;
              const {
                identifier: pd,
                clientX: Nd,
                clientY: Wd
              } = dd.changedTouches[kd];
              this.release(pd);
              const Pd = this.zones.hitZone(Nd, Wd);
              if (!Pd) continue;
              const {
                key: Zd
              } = Pd;
              null === (Jd = VJ.get(Zd)) || void 0 === Jd || Jd.cancel();
              const gd = {
                hit: Pd.element,
                key: Zd,
                x: Pd.x,
                y: Pd.y,
                reach: .6 * Pd.radius
              };
              this.followed.set(pd, gd), (0, dJ.j)(Pd.element, !0), HJ(gd, Nd, Wd)
            }
        }, this.onMove = dd => {
          this.releaseMissing(dd.touches);
          for (let Jd = 0; Jd < dd.changedTouches.length; Jd++) {
            const {
              identifier: kd,
              clientX: pd,
              clientY: Nd
            } = dd.changedTouches[Jd], Wd = this.followed.get(kd);
            Wd && HJ(Wd, pd, Nd)
          }
        }, this.onEnd = dd => {
          for (let Jd = 0; Jd < dd.changedTouches.length; Jd++) this.release(dd.changedTouches[Jd].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const dd = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, dd), document.addEventListener("touchmove", this.onMove, dd), document.addEventListener("touchend", this.onEnd, dd), document.addEventListener("touchcancel", this.onEnd, dd), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(dd) {
        for (const Jd of [...this.followed.keys()])(0, TJ.g)(dd, Jd) || this.release(Jd)
      }
      releaseAll() {
        for (const dd of [...this.followed.keys()]) this.release(dd)
      }
      release(dd) {
        const Jd = this.followed.get(dd);
        if (!Jd) return;
        this.followed.delete(dd);
        for (const Nd of this.followed.values())
          if (Nd.key === Jd.key) return;
        (0, dJ.j)(Jd.hit, !1);
        const {
          key: kd
        } = Jd, pd = kd.style.translate;
        kd.style.translate = "", pd && VJ.set(kd, kd.animate({
          translate: [pd, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function HJ(dd, Jd, kd) {
      let {
        key: pd,
        x: Nd,
        y: Wd,
        reach: Pd
      } = dd;
      const Zd = Jd - Nd,
        gd = kd - Wd,
        Cd = Math.min(1, Pd / (Math.hypot(Zd, gd) || 1));
      pd.style.translate = `${Zd*Cd}px ${gd*Cd}px`
    }
    const wJ = () => {
      const dd = (0, Vd.m)(),
        Jd = (0, Md.m)();
      return dd || Jd
    };

    function AJ(dd) {
      (0, wd.n)(dd.x, dd.y)
    }
    const dk = (0, pd.memo)((function() {
        const dd = wJ(),
          {
            joystickMode: Jd,
            touchSpeedCurve: kd,
            autorun: Nd
          } = (0, sd.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, pd.useEffect)((() => ((0, Ad.i)(zd.y.TouchControls, zd.y.TouchControls), () => {
          (0, Ad.i)(zd.y.TouchControls, 0), (0, wd.n)(0, 0)
        })), []), (0, Cd.jsx)("div", {
          className: Wd()("TouchMovementWrapper", {
            Hidden: dd
          }),
          "data-camera-keeper": "",
          children: (0, Cd.jsx)(iJ, {
            onMove: AJ,
            mode: Jd,
            speedCurve: kd ? FJ : void 0,
            autorun: Nd
          })
        })
      })),
      Jk = (0, pd.memo)((function() {
        const dd = wJ(),
          {
            clientEscMenuOptions: Jd
          } = (0, sd.j)(["clientEscMenuOptions"]),
          kd = Jd.touchActionButtons;
        return (0, pd.useEffect)((() => new zJ(wd.m).start()), []), (0, pd.useEffect)((() => {
          vd.j.nO(OJ.b)
        }), [dd]), (0, Cd.jsxs)("div", {
          className: Wd()("TouchComponentsButtons", {
            Hidden: dd
          }),
          "data-camera-keeper": "",
          children: [(0, Cd.jsx)(tJ, {
            lockable: Jd.jumpLock && !dd
          }), (0, Cd.jsx)(Lk, {
            hidden: dd,
            actionButtons: kd
          }), (0, Cd.jsx)(pk, {})]
        })
      }));

    function kk(dd) {
      const Jd = Jd => kd => {
        (0, dJ.j)(kd.currentTarget, Jd), dd(Jd, kd.nativeEvent)
      };
      return {
        onPointerDown: Jd(!0),
        onPointerUp: Jd(!1),
        onPointerCancel: Jd(!1)
      }
    }

    function pk() {
      const dd = (0, Gd.j)("canCrouch"),
        Jd = (0, Bd.k)("crouching"),
        kd = (0, pd.useRef)(!1);
      yJ(zd.u.Crouch, kd);
      const Nd = (dd, Jd) => {
          kd.current = dd, (0, Hd.D)(zd.u.Crouch, dd, Jd)
        },
        Wd = (0, pd.useRef)(null),
        Pd = () => {
          kd.current && (Wd.current && (0, dJ.j)(Wd.current, !1), Nd(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Zd = rJ(Pd);
      return (0, pd.useEffect)((() => {
        !1 === dd && Pd()
      }), [dd]), !1 === dd ? null : (0, Cd.jsx)(UJ, {
        ref: Wd,
        slot: mJ,
        className: "CrouchKey",
        lit: Jd,
        ...Zd,
        ...kk(Nd),
        children: (0, Cd.jsx)(Ud.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Nk = [{
        icon: "arrows-rotate"
      }],
      Wk = [{
        icon: "Arrow"
      }],
      Pk = [{
        icon: "crosshairs"
      }],
      Zk = [{
        icon: "swords"
      }],
      gk = [{
        icon: "hand-back-point-up"
      }],
      Ck = [{
        icon: "Firecracker"
      }];

    function Kk(dd, Jd, kd, pd) {
      return {
        id: JSON.stringify(Jd),
        render: Nd => (0, Cd.jsx)(Ok, {
          code: dd,
          slot: Nd,
          icon: Jd,
          label: pd,
          hidden: kd
        })
      }
    }

    function lk(dd, Jd) {
      return {
        id: "fly",
        render: kd => (0, Cd.jsx)(Qk, {
          slot: kd,
          flying: dd,
          label: Jd
        })
      }
    }

    function Qk(dd) {
      let {
        slot: Jd,
        flying: kd,
        label: pd
      } = dd;
      return (0, Cd.jsx)(UJ, {
        slot: Jd,
        className: "FlyKey",
        lit: kd,
        label: pd,
        ...kk(((dd, Jd) => {
          (0, Hd.D)(zd.u.Fly, dd, Jd)
        })),
        children: (0, Cd.jsx)(Ud.e, {
          name: "feather-pointed"
        })
      })
    }

    function Lk(dd) {
      var Jd, kd;
      let {
        hidden: pd,
        actionButtons: Nd
      } = dd;
      const {
        t: Wd
      } = (0, md.B)(), {
        gun: Pd,
        aimable: Zd,
        chargeName: gd
      } = (0, Bd.k)("heldItemAim"), Kd = (0, Bd.k)("gliderBoostFuel"), {
        canFly: od,
        flying: ld
      } = (0, Bd.k)("flight"), Qd = (0, Gd.j)("touchscreenActionButton"), Ld = Pd ? Nk : Qd, Od = Zd ? {
        icon: Wk,
        label: Wd("touchKeys:aim")
      } : null, ed = null !== gd ? {
        icon: [{
          icon: gd
        }]
      } : null, Rd = null !== Od && void 0 !== Od ? Od : ed, Id = null !== (Jd = null === (kd = Pd ? Od : null !== ed && void 0 !== ed ? ed : Od) || void 0 === kd ? void 0 : kd.icon) && void 0 !== Jd ? Jd : gk, vd = [!Nd && Rd ? Kk(wd.e.Action2, Rd.icon, pd, Rd.label) : null, Pd ? Kk(wd.e.Action3, Pk, pd, Wd("touchKeys:scope")) : null, od ? lk(ld, Wd("touchKeys:fly")) : null];
      return (0, Cd.jsxs)(Cd.Fragment, {
        children: [Ld && (0, Cd.jsx)(Ok, {
          code: wd.e.Action1,
          slot: fJ,
          icon: Ld,
          label: Pd ? Wd("touchKeys:reload") : void 0,
          hidden: pd
        }, JSON.stringify(Ld)), Nd && (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)(Ok, {
            code: wd.e.Attack,
            slot: XJ,
            icon: Zk,
            name: Wd("touchKeys:attack"),
            hidden: pd
          }), (0, Cd.jsx)(Ok, {
            code: wd.e.Use,
            slot: SJ,
            icon: Id,
            name: Wd("touchKeys:use"),
            hidden: pd
          })]
        }), DJ(vd, Nd), Kd > 0 && (0, Cd.jsx)(Ok, {
          code: wd.e.Boost,
          slot: nJ,
          icon: Ck,
          label: Wd("touchKeys:boost", {
            fuel: Kd > 99 ? "99+" : Kd
          }),
          hidden: pd
        })]
      })
    }

    function Ok(dd) {
      let {
        code: Jd,
        slot: kd,
        icon: pd,
        label: Nd,
        name: Wd,
        hidden: Pd
      } = dd;
      const Zd = YJ(Jd, Pd);
      return (0, Cd.jsx)(UJ, {
        ref: Zd,
        slot: kd,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Nd,
        role: void 0 !== Wd ? "img" : void 0,
        "aria-label": Wd,
        children: (0, Cd.jsx)(gd.c, {
          text: pd
        })
      })
    }
    var ek = kd(4107),
      Rk = kd(2851),
      Ik = kd(638);
    const Gk = (0, pd.memo)((function() {
      (0, Rd.b)();
      const dd = (0, pd.useRef)([]),
        Jd = (0, Rk.b)(),
        kd = (0, pd.useRef)(0),
        Nd = (0, pd.useRef)(0),
        Wd = (0, pd.useRef)([]),
        Pd = (0, pd.useRef)(null);

      function Kd(kd, pd, Nd, Wd) {
        const Pd = (0, Ik.e)(),
          Zd = setTimeout((() => {
            dd.current = dd.current.filter((dd => dd.id !== Pd)), Jd()
          }), Wd);
        ld.gameBridge.send("recordFlyingMiddleText", {
          content: kd,
          Xk: pd,
          angle: Nd,
          fk: Wd
        }), dd.current.push({
          id: Pd,
          content: kd,
          Xk: pd,
          fk: Wd,
          removeTimeout: Zd,
          angle: Nd
        }), Jd()
      }
      return (0, Bd.d)("shotDamageToShow", (dd => {
        let {
          damage: Jd,
          wasCrit: kd,
          distance: pd
        } = dd;
        const Nd = -Math.PI / 4 + Math.random() * Math.PI / 2;
        Kd(kd ? [{
          str: Jd.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [Jd.toString()], pd, Nd, 1e3)
      })), (0, Zd.h)("flyingMiddleMessage", (dd => {
        let {
          content: Jd,
          Xk: pd,
          fk: Zd
        } = dd;
        Wd.current.push({
          content: Jd,
          Xk: pd,
          fk: Zd
        });
        const gd = () => {
          const {
            content: dd,
            Xk: Jd,
            fk: pd
          } = Wd.current.shift(), Pd = function(dd) {
            const Jd = -Math.PI / 4,
              kd = Math.PI / 4,
              pd = kd - Jd,
              Nd = (1 + Math.sqrt(5)) / 2,
              Wd = 2 * Math.PI / (Nd * Nd);
            let Pd = dd + Wd;
            for (; Pd > kd;) Pd -= pd;
            for (; Pd < Jd;) Pd += pd;
            const Zd = Math.PI / 6;
            if (Math.abs(Pd - dd) < Zd) {
              Pd = dd + (Math.sign(Pd - dd) || 1) * Zd, Pd > kd && (Pd = dd - Zd), Pd < Jd && (Pd = dd + Zd)
            }
            return Pd
          }(Nd.current);
          Nd.current = Pd, kd.current = Date.now(), Kd(dd, Jd, Pd, pd)
        };
        if (!Pd.current) {
          const dd = () => {
            Wd.current.length > 0 && gd(), 0 === Wd.current.length && (clearInterval(Pd.current), Pd.current = null)
          };
          Pd.current = setInterval(dd, 200), kd.current + 200 < Date.now() && dd()
        }
        for (; Wd.current.length > 4;) gd()
      })), (0, Zd.h)("forceFlyingMiddleMessage", (dd => {
        let {
          content: Jd,
          Xk: kd,
          angle: pd,
          fk: Nd
        } = dd;
        Kd(Jd, kd, pd, Nd)
      })), (0, pd.useEffect)((() => () => {
        clearInterval(Pd.current), Pd.current = null;
        for (const Jd of dd.current) clearTimeout(Jd.removeTimeout)
      }), []), (0, Cd.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: dd.current.map((dd => {
          const {
            id: Jd,
            content: kd,
            Xk: pd,
            fk: Nd,
            angle: Wd
          } = dd;
          return dd.pos || (dd.pos = function(dd, Jd) {
            const kd = 50 / (dd ** .7 * .35);
            return {
              x: kd * Math.sin(Jd),
              y: -kd * Math.cos(Jd)
            }
          }(pd, Wd)), (0, Cd.jsx)(vk, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Nd,
            enterActiveStyle: {
              transform: `translate(${dd.pos.x}vw, ${dd.pos.y}vh)`,
              transition: `transform ${Nd}ms ease-out`
            },
            children: (0, Cd.jsx)("div", {
              children: (0, Cd.jsx)(gd.c, {
                text: kd
              })
            })
          }, Jd)
        }))
      })
    }));

    function vk(dd) {
      let {
        children: Jd,
        className: kd,
        classNames: Nd,
        timeout: Wd,
        enterActiveStyle: Pd
      } = dd;
      const [Zd, gd] = (0, pd.useState)(!1), [Kd, od] = (0, pd.useState)(!1), ld = (0, pd.useRef)(null);
      return (0, pd.useEffect)((() => {
        gd(!0)
      }), []), (0, Cd.jsx)(ek.b, {
        className: kd,
        classNames: Nd || kd,
        in: Zd,
        timeout: Wd,
        nodeRef: ld,
        onEntering: () => {
          od(!0)
        },
        children: (0, pd.cloneElement)(Jd, {
          ref: ld,
          style: Kd && Pd || void 0
        })
      })
    }
    var xk = kd(36772);

    function qk() {
      const dd = (0, Bd.k)("health");
      return (0, Cd.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Cd.jsx)(xk.d, {
          placement: "statBars"
        }), (0, Cd.jsx)(Bk, {
          actualValue: dd.shield,
          maxValue: dd.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Cd.jsx)(Bk, {
          actualValue: dd.health,
          maxValue: dd.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Bk(dd) {
      let {
        actualValue: Jd,
        maxValue: kd,
        hideAtValue: pd,
        icon: Nd,
        className: Wd
      } = dd;
      return (0, Rd.d)(), null === Jd || null === kd || Jd === pd || kd === pd ? null : (0, Cd.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Cd.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Cd.jsx)("div", {
            className: `BottomScreenStatBar ${Wd}`,
            style: {
              transform: `scaleX(${Math.max(Jd/kd,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Cd.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Cd.jsx)(Ud.e, {
              name: Nd
            }), ` ${Math.ceil(Jd)}/${kd}`]
          })]
        })
      })
    }
    var sk = kd(9234),
      ik = kd(4389),
      ak = kd(1352),
      Mk = kd(2610),
      Fk = kd(1461),
      Yk = kd(1332),
      mk = kd(3253),
      bk = kd(3308),
      Sk = kd(3269),
      jk = kd(756),
      Xk = kd(3332),
      fk = kd(126),
      nk = kd(9142),
      Uk = kd(313);

    function yk(dd, Jd) {
      let {
        shownName: kd,
        lifeformType: pd
      } = dd;
      return null !== kd ? kd : null !== pd ? Jd(`lifeform:${(0,Uk.Be)(pd)}`) : null
    }
    var Dk = kd(3262),
      Tk = kd(3266);
    const Ek = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      ck = (0, pd.memo)((function() {
        var dd, Jd;
        const kd = (0, Rd.b)(),
          Nd = (0, Qd.useNavigatePreserveSearch)(),
          {
            t: Pd
          } = (0, md.B)(),
          {
            loadingOverlayVisible: gd
          } = (0, sd.j)(["loadingOverlayVisible"]),
          Kd = (0, Md.m)(),
          [od, Ld] = (0, pd.useState)(!1),
          [Od, ed] = (0, pd.useState)(!0),
          [Id, vd] = (0, pd.useState)(null),
          qd = (0, Rk.b)(),
          ad = (0, Gd.j)("respawnButtonText"),
          Fd = (0, Gd.j)("usePlayAgainButton"),
          Yd = (0, Gd.j)("useRespawnButton"),
          {
            gameNameWithVariation: bd
          } = (0, Bd.k)("connectedGame"),
          Sd = (0, pd.useRef)(xd.b.get("secsToRespawn")),
          jd = (0, pd.useRef)(ld.gameBridge.latest("localPlayerAlive")),
          Xd = (0, pd.useRef)(xd.b.get("secsToRespawn")),
          fd = (0, pd.useRef)(xd.b.get("autoRespawn")),
          nd = (0, pd.useRef)(null),
          yd = (0, pd.useRef)(0),
          Dd = (0, pd.useRef)(0),
          [Td, cd] = (0, pd.useState)(!1),
          hd = (0, pd.useRef)(null),
          rd = (0, pd.useRef)(null),
          ud = (0, pd.useRef)(null);
        (0, Gd.g)("secsToRespawn", (dd => {
          console.log("Received new secsToRespawn with", dd, "and current canRespawn value of ", fd.current), Xd.current = dd, Hd()
        })), (0, Gd.g)("autoRespawn", (dd => {
          console.log("Received autorespawn", dd, "current canRespawn value of ", Sd.current), fd.current = dd, Hd()
        }));
        const td = dd => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", dd), dd || yd.current++, jd.current = dd, Hd()
        };
        (0, Bd.d)("localPlayerAliveSet", td), (0, Zd.h)(bk.i, (dd => {
          "connected" === dd && !jd.current && fd.current && Sd.current <= 0 && (Dd.current = 0, wd())
        })), (0, pd.useEffect)((() => {
          const dd = ld.gameBridge.latest("localPlayerAlive");
          dd === jd.current ? (console.log("Updating respawn component from initial mount"), Hd()) : td(dd)
        }), []), (0, pd.useEffect)((() => {
          if (od) {
            cd(!1);
            const dd = setTimeout((() => {
              cd(!0)
            }), 600);
            return (0, nk.e)(), () => {
              clearTimeout(dd)
            }
          }
          return () => {}
        }), [od]);
        (0, Bd.d)("kill", (dd => {
          let {
            killer: Jd,
            victim: kd,
            withItem: pd
          } = dd;
          if (!kd.local) return;
          const Nd = ((dd, Jd) => {
            if (dd.local) {
              const dd = Ek[Jd];
              return dd ? Pd(dd) : null
            }
            const kd = yk(dd, Pd);
            return kd ? Pd("respawnPage:killedBy", {
              name: kd
            }) : null
          })(Jd, pd);
          Nd && vd({
            text: Nd,
            deathCount: jd.current ? yd.current + 1 : yd.current
          })
        }));
        const Vd = () => {
            od && fd.current && jd.current && Td && Ld(!1)
          },
          zd = od && fd.current && jd.current && Td && !gd;
        (0, Zd.h)("usedKeyboard", (() => {
          Vd()
        })), (0, Tk.d)("respawn", zd, Vd);
        const Hd = () => {
            ed(Xd.current >= 3 || !fd.current), jd.current ? (clearInterval(nd.current), nd.current = null, fd.current ? qd() : Ld(!1)) : (Ld(!0), Sd.current = Xd.current, qd(), console.log("Running respawn stats updated", fd.current, Sd.current), fd.current && Sd.current <= 0 && wd(), clearInterval(nd.current), Sd.current > 0 && (nd.current = setInterval((() => {
              Sd.current = Math.max(Sd.current - 1, 0), qd(), Sd.current <= 0 && (clearInterval(nd.current), nd.current = null, xd.b.get("autoRespawn") && wd())
            }), 1e3)))
          },
          wd = () => {
            if (Date.now() - Dd.current > 1e3) {
              const dd = () => {
                ld.gameBridge.send("respawn", null), Dd.current = Date.now()
              };
              xd.b.get("autoRespawn") ? dd() : (0, Yk.U)((() => {
                dd()
              }), "video_respawn")
            }
          },
          Ad = (0, pd.useMemo)((() => {
            var dd;
            return null === (dd = (0, jk.o)(bd)) || void 0 === dd ? void 0 : dd.otherGameLinksOnRespawnPage
          }), [bd]),
          dJ = 0 === Sd.current,
          JJ = (null === Id || void 0 === Id ? void 0 : Id.deathCount) === yd.current ? Id.text : null,
          kJ = od && Od && !gd,
          pJ = Kd && zd && null !== (dd = null === (Jd = (0, Ed.g)()) || void 0 === Jd ? void 0 : Jd.getBoundButton("menuConfirm")) && void 0 !== dd ? dd : null,
          NJ = dd => dJ ? dd : Pd("respawnPage:actionInSeconds", {
            action: dd,
            seconds: Sd.current
          });
        return (0, Cd.jsx)(sk.b, {
          showing: od,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Cd.jsx)(mk.b, {
            show: od,
            "data-holds-camera-keeper": "",
            children: (0, Cd.jsxs)(ik.e, {
              close: () => {
                Ld(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: fd.current || gd ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, fk.n)() && (0, Cd.jsx)(Fk.b, {
                onClick: Sk.b,
                children: Pd("homePage:backToGames")
              }), (0, Cd.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Vd,
                children: [(0, Cd.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Cd.jsx)("div", {
                    ref: rd,
                    className: "RespawnSideSquareBannerDiv",
                    children: kd[0] > 925 && (0, Cd.jsx)(Mk.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: rd
                      },
                      showing: kJ,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Cd.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Cd.jsxs)("div", {
                      className: Wd()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Kd
                      }),
                      children: [fd.current && (0, Cd.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Cd.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Cd.jsx)(Ud.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Pd("respawnPage:youDied")]
                        }), (0, Cd.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === pJ && (jd.current ? Pd("respawnPage:pressAnywhereToContinue") : dJ ? Pd("respawnPage:respawning") : NJ(Pd("general:respawn"))), null !== pJ && (0, Cd.jsx)(Dk.c, {
                            text: Pd("controller:screensPressToContinue", {
                              button: Dk.f
                            }),
                            glyph: pJ,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), JJ && (0, Cd.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: JJ
                        })]
                      }), !fd.current && (0, Cd.jsxs)(Cd.Fragment, {
                        children: [(0, Cd.jsxs)("div", {
                          className: Wd()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Ad
                          }),
                          children: [Fd && (0, Cd.jsx)(Fk.j, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, Yk.U)((() => {
                                (0, sd.f)("inGameReplay");
                                const dd = (0, ak.c)(bd);
                                Nd(dd)
                              }), "video_start")
                            },
                            disabled: !dJ || !Td,
                            touchPressOn: "pointerup",
                            children: NJ(Pd("respawnPage:playAgain"))
                          }), Yd && (0, Cd.jsx)(Fk.d, {
                            className: "RespawnPageButton",
                            onClick: wd,
                            padDefaultFocus: !Fd,
                            padBack: "sessionBasedGame:stayInLobby" === ad,
                            disabled: !dJ || !Td,
                            touchPressOn: "pointerup",
                            children: NJ(Pd(ad))
                          }), !(0, fk.n)() && (0, Cd.jsx)(Fk.B, {
                            className: "RespawnPageButton",
                            onClick: Sk.b,
                            disabled: !dJ || !Td,
                            touchPressOn: "pointerup",
                            children: NJ(Pd("respawnPage:exitGame"))
                          })]
                        }), Ad && (0, Cd.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Cd.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: Pd("respawnPage:orTry")
                          }), (0, Cd.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Ad.map((dd => (0, Cd.jsx)(Xk.h, {
                              source: {
                                type: "game",
                                gameNameWithVariation: dd
                              },
                              disabled: !dJ || !Td,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, sd.f)("inGameReplay");
                                const Jd = (0, ak.c)(dd);
                                Nd(Jd)
                              }
                            }, dd)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Cd.jsx)("div", {
                    ref: ud,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Cd.jsx)("div", {
                  ref: hd,
                  className: "RespawnBottom",
                  children: (0, Cd.jsx)(Mk.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: hd
                    },
                    showing: kJ,
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
    var hk = kd(36788);
    const rk = [{
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
      uk = [{
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
      tk = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Vk = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      zk = (0, pd.memo)((function() {
        const dd = (0, pd.useRef)(null),
          Jd = (0, pd.useRef)(null);

        function kd(kd) {
          var pd;
          let {
            Fd: Nd,
            screenPos: Wd
          } = kd;
          const Pd = dd.current;
          null === (pd = Jd.current) || void 0 === pd || pd.cancel(), Pd.classList.remove("HitmarkerCrit"), Wd ? (Pd.style.left = `${Wd.x}%`, Pd.style.top = `${Wd.y}%`) : (Pd.style.left = "50%", Pd.style.top = "50%"), Pd.style.rotate = 16 * (Math.random() - .5) + "deg", Nd && Pd.classList.add("HitmarkerCrit");
          const Zd = Pd.animate(Nd ? uk : rk, Nd ? Vk : tk);
          Jd.current = Zd, Zd.onfinish = () => {
            Pd.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Zd.h)("localGunHitmarker", (dd => {
          let {
            Fd: Jd
          } = dd;
          kd({
            Fd: Jd
          })
        })), (0, Zd.h)("yourAttackHit", (dd => {
          let {
            Fd: Jd,
            screenPos: pd
          } = dd;
          kd({
            Fd: Jd,
            screenPos: sd.d.get("isTouchScreen") ? pd : void 0
          })
        })), (0, Zd.h)("sendHitmarker", (dd => {
          let {
            Fd: Jd,
            screenPos: pd
          } = dd;
          kd({
            Fd: Jd,
            screenPos: pd
          })
        })), (0, Cd.jsxs)("div", {
          ref: dd,
          className: "Hitmarker",
          children: [(0, Cd.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Cd.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Cd.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Cd.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Hk() {
      const dd = (0, pd.useRef)(!0);
      return (0, Zd.h)("localBlockMined", (() => {
        WJ.d.play("blockMined")
      })), (0, Zd.h)("yourAttackHit", (() => {
        WJ.d.play("hitLanded")
      })), (0, Zd.h)("localGunHitmarker", (() => {
        WJ.d.play("hitLanded")
      })), (0, Zd.h)("damagedByOtherPlayer", (() => {
        WJ.d.play("damageTaken")
      })), (0, Bd.d)("localPlayerAliveSet", (Jd => {
        !Jd && dd.current && WJ.d.play("death"), dd.current = Jd
      })), null
    }
    var wk = kd(1924),
      Ak = kd(36800),
      dp = kd.n(Ak),
      Jp = kd(2011),
      kp = kd(2e3),
      pp = kd(3130),
      Np = kd(9252);
    const Wp = Uk.se ? 7e7 : 7e3,
      Pp = dp()("#ffffff").alpha(.5).string();

    function Zp(dd) {
      const Jd = (0, pp.c)(dd);
      return void 0 !== Jd && "Gun" === (0, Np.itemTypeOf)(Jd)
    }

    function gp(dd) {
      if (!dd) return console.error(`Killfeed colour was ${dd}`), Pp;
      try {
        return dp()(dd).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${dd} is not a colour`), Pp
      }
    }
    const Cp = (0, pd.memo)((function() {
      const {
        t: dd
      } = (0, md.B)(), Jd = (0, pd.useRef)([]), kd = (0, Rk.b)();
      return (0, Bd.d)("kill", (function(pd) {
        var Nd, Wd;
        let {
          killer: Pd,
          victim: Zd,
          withItem: gd,
          killstreak: Cd
        } = pd;
        const Kd = Jd.current;
        if (Kd.length >= 3) {
          const dd = Kd.shift();
          clearTimeout(dd.timeout)
        }
        const od = ld.gameBridge.latest("hiddenPlayerNames"),
          Qd = {
            deadName: yk(Zd, dd),
            killerName: yk(Pd, dd),
            isFriend: {
              killer: (0, Jp.f)(Pd.realName, od),
              dead: (0, Jp.f)(Zd.realName, od)
            },
            withItem: gd,
            wasHeadshot: !1,
            killstreak: Cd,
            timeout: setTimeout((() => {
              Kd.shift(), kd()
            }), Wp),
            reactId: `${null!==(Nd=Pd.id)&&void 0!==Nd?Nd:Pd.shownName}|${null!==(Wd=Zd.id)&&void 0!==Wd?Wd:Zd.shownName}|${Date.now()}`,
            killerBackground: gp(Pd.colour),
            deadBackground: gp(Zd.colour)
          };
        Kd.push(Qd), kd()
      })), (0, pd.useEffect)((() => {
        const dd = Jd.current;
        return () => {
          for (; dd.length > 0;) {
            const {
              timeout: Jd
            } = dd.pop();
            clearTimeout(Jd)
          }
        }
      }), []), (0, Cd.jsx)("div", {
        className: "Killfeed",
        children: Jd.current.map((dd => {
          let {
            deadName: Jd,
            killerName: kd,
            withItem: pd,
            wasHeadshot: Nd,
            killstreak: Wd,
            killerBackground: Pd,
            deadBackground: Zd,
            reactId: gd,
            isFriend: Kd
          } = dd;
          return (0, Cd.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Pd} calc(100% - 10rem), ${Zd} 100%)`
            },
            children: [Wd >= 2 ? (0, Cd.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Uk.V)(Wd)
            }) : null, (0, Cd.jsx)("div", {
              className: "KillfeedKillerName",
              children: kd
            }), Kd.killer && (0, Cd.jsx)(kp.c, {}), (0, Cd.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Zp(pd) ? "7.5vmin" : "5vmin"
              },
              children: (0, Cd.jsx)(wk.d, {
                itemName: pd,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Nd ? (0, Cd.jsx)(Ud.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Cd.jsx)("div", {
              className: "KillfeedDeadName",
              children: Jd
            }), Kd.dead && (0, Cd.jsx)(kp.c, {})]
          }, gd)
        }))
      })
    }));
    var Kp = kd(36848),
      op = kd(1155),
      lp = kd.n(op),
      Qp = kd(3240),
      Lp = kd(36853),
      Op = kd(1320);
    const ep = {},
      Rp = (0, pd.memo)((function() {
        const dd = (0, pd.useRef)({}),
          [, Jd] = (0, pd.useReducer)((dd => dd + 1), 0);
        (0, Zd.h)("setDirectionArrow", (kd => {
          let {
            id: pd,
            position: Nd,
            style: Wd,
            text: Pd,
            vp: Zd
          } = kd;
          const gd = dd.current,
            Cd = Wd || ep,
            Kd = Pd,
            od = gd[pd];
          if (!od) return gd[pd] = {
            position: Nd,
            style: Cd,
            text: Kd,
            shouldShowDistance: Zd,
            dD: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void Jd();
          const ld = !lp()(od.style, Cd) || !lp()(od.text, Kd) || od.shouldShowDistance !== Zd;
          od.position = Nd, od.style = Cd, od.text = Kd, od.shouldShowDistance = Zd, ld && Jd()
        })), (0, Zd.h)("clearDirectionArrow", (kd => {
          let {
            id: pd
          } = kd;
          const Nd = dd.current;
          if (null === pd)
            for (const dd in Nd) delete Nd[dd];
          else delete Nd[pd];
          Jd()
        })), (0, pd.useEffect)((() => {
          const Jd = dd.current,
            kd = (0, Op.q)((() => {
              ! function(dd) {
                const Jd = ld.gameBridge.lookup("localPos", null),
                  kd = Qp.b - Ip,
                  pd = (0, Qp.k)() - Ip;
                for (const Nd in dd) {
                  const Wd = dd[Nd];
                  if (!Wd.dD) continue;
                  const Pd = ld.gameBridge.lookup("screenPos", Wd.position),
                    Zd = Pd.x - 50,
                    gd = Pd.y - 50;
                  Pd.x === Wd.lastScreenX && Pd.y === Wd.lastScreenY || (Wd.lastScreenX = Pd.x, Wd.lastScreenY = Pd.y, Wd.dD.style.translate = `${Pd.x}vw ${Pd.y}vh`, Wd.chevronElement && (Wd.chevronElement.style.rotate = `${Uk.b.fastATan2(gd,Zd)}rad`));
                  const Cd = Math.abs(Zd) < kd && Math.abs(gd) < pd;
                  if (Cd !== Wd.onScreen && (Wd.onScreen = Cd, Wd.dD.classList.toggle("DirectionArrowOnScreen", Cd)), Wd.shouldShowDistance && Wd.distanceElement) {
                    const dd = Wd.position[0] - Jd[0],
                      kd = Wd.position[1] - Jd[1],
                      pd = Wd.position[2] - Jd[2],
                      Nd = Math.round(Math.sqrt(dd * dd + kd * kd + pd * pd));
                    (-1 === Wd.lastRenderedDist || (0, Lp.e)(Nd, Wd.lastRenderedDist, Wd.lastDistUpdateTime)) && (Wd.distanceElement.textContent = `${Nd}m`, Wd.lastRenderedDist = Nd, Wd.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(Jd)
            }));
          return () => {
            kd();
            for (const dd in Jd) delete Jd[dd]
          }
        }), []);
        const kd = dd.current;
        return (0, Cd.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(kd).map((dd => {
            var Jd;
            let [pd, Nd] = dd;
            const Wd = null !== (Jd = (0, Id.Ob)(Nd.style)) && void 0 !== Jd ? Jd : "#ffffff";
            return (0, Cd.jsxs)("div", {
              ref: dd => {
                kd[pd] && (kd[pd].dD = dd)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Nd.style.fontSize,
                opacity: Nd.style.opacity
              },
              children: [(0, Cd.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: dd => {
                  kd[pd] && (kd[pd].chevronElement = dd)
                },
                children: [(0, Cd.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Cd.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Cd.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Cd.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Cd.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Wd
                    }
                  }), (0, Cd.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Wd
                    }
                  })]
                })]
              }), (0, Cd.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Wd,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Wd}`
                }
              }), Nd.text && (0, Cd.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Wd,
                  fontWeight: Nd.style.fontWeight,
                  fontStyle: Nd.style.fontStyle
                },
                children: (0, Cd.jsx)(gd.c, {
                  text: Nd.text
                })
              }), Nd.shouldShowDistance && (0, Cd.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: dd => {
                  kd[pd] && (kd[pd].distanceElement = dd)
                },
                style: {
                  color: Wd,
                  fontWeight: Nd.style.fontWeight,
                  fontStyle: Nd.style.fontStyle
                }
              })]
            }, pd)
          }))
        })
      })),
      Ip = .5;
    const Gp = (0, pd.memo)((function(dd) {
        let {
          isTouchScreen: Jd
        } = dd;
        return (0, Cd.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Cd.jsx)(Bp, {}), Jd && (0, Cd.jsx)(Jk, {})]
        })
      })),
      vp = {
        readyForNext: 0,
        running: 1
      },
      xp = 50;

    function qp(dd) {
      console.assert(dd.state.current === vp.readyForNext);
      const Jd = dd.queue.current,
        kd = dd.foreground.current;
      if (Jd.length > 0 && kd) {
        const {
          toFraction: pd,
          toDuration: Nd
        } = Jd.shift();
        dd.state.current = vp.running, kd.style.transition = `transform ${Math.max(Nd-xp,0)}ms linear`, kd.classList.remove("Complete"), dd.timeout.current = setTimeout((() => {
          kd.style.transform = `scaleX(${pd})`, dd.timeout.current = setTimeout((() => {
            1 === pd && kd.classList.add("Complete"), dd.state.current = vp.readyForNext, qp(dd)
          }), Math.max(Nd - xp, 0))
        }), xp)
      }
    }

    function Bp() {
      const dd = (0, pd.useRef)([]),
        Jd = (0, pd.useRef)(vp.readyForNext),
        kd = (0, pd.useRef)(void 0),
        Nd = (0, pd.useRef)(null),
        Wd = (0, pd.useRef)({
          queue: dd,
          state: Jd,
          timeout: kd,
          foreground: Nd
        }),
        Pd = (0, Gd.j)("showProgressBar");
      if ((0, pd.useLayoutEffect)((() => (Pd && Jd.current === vp.readyForNext && qp(Wd.current), () => {
          Jd.current = vp.readyForNext, clearTimeout(kd.current), Pd && (dd.current.length = 0)
        })), [Pd]), (0, Zd.h)("progressBarUpdate", (kd => {
          let {
            toFraction: pd,
            toDuration: Nd
          } = kd;
          dd.current.push({
            toFraction: pd,
            toDuration: Nd
          }), Jd.current === vp.readyForNext && qp(Wd.current)
        })), !Pd) return null;
      return (0, Cd.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Cd.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Nd,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var sp = kd(36857),
      ip = kd(2385);
    const ap = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Mp(dd) {
      let {
        classes: Jd,
        gone: kd
      } = dd;
      const pd = document.documentElement;
      pd.classList.remove(...Jd);
      for (const Nd of kd) Nd.style.display = "block";
      return () => {
        pd.classList.add(...Jd);
        for (const dd of kd) dd.style.display = ""
      }
    }

    function Fp(dd) {
      const {
        isTouchScreen: Jd
      } = (0, sd.j)(["isTouchScreen"]);
      (0, pd.useLayoutEffect)((() => {
        if (!Jd) return;
        const kd = dd.current,
          pd = document.querySelector(`.${sp.k}`),
          Nd = dd => {
            const Jd = () => {
              const Jd = dd.querySelector(ip.i),
                pd = function(dd) {
                  const Jd = document.documentElement;
                  return {
                    classes: lJ.F.map(eJ.u).filter((dd => Jd.classList.contains(dd))),
                    gone: [...dd.querySelectorAll(`.TopRightTrayToggle.${ip.j}`)]
                  }
                }(dd);
              Jd && function(dd, Jd) {
                (0, ip.z)(dd, Jd.classes.length > 0 || Jd.gone.length > 0, (() => Mp(Jd)))
              }(Jd, pd);
              const Nd = `${Math.floor(function(dd,Jd,kd){const pd=document.documentElement,Nd=pd.classList.contains((0,eJ.y)("menu")),Wd=pd.style.getPropertyValue((0,eJ.F)("menu"));if(!Nd&&""===Wd)return dd.getBoundingClientRect().left;const Pd=Jd?(0,ip.l)(Jd):()=>{},Zd=Mp(kd);pd.classList.remove((0,eJ.y)("menu")),pd.style.removeProperty((0,eJ.F)("menu"));const gd=dd.getBoundingClientRect().left;return Zd(),Pd(),Nd&&pd.classList.add((0,eJ.y)("menu")),""!==Wd&&pd.style.setProperty((0,eJ.F)("menu"),Wd),gd}(dd,Jd,pd)-kd.getBoundingClientRect().left-4)}px`;
              kd.style.getPropertyValue("--InGameHeaderMaxWidth") !== Nd && kd.style.setProperty("--InGameHeaderMaxWidth", Nd)
            };
            Jd();
            const Nd = new ResizeObserver(Jd);
            Nd.observe(dd), Nd.observe(pd), window.addEventListener("resize", Jd);
            const Wd = () => ap.map((dd => document.documentElement.style.getPropertyValue(dd))).join();
            let Pd = Wd();
            const Zd = new MutationObserver((() => {
              const dd = Wd();
              dd !== Pd && (Pd = dd, Jd())
            }));
            Zd.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const gd = (0, vd.n)(eJ.e, Jd),
              Cd = new MutationObserver(Jd);
            return Cd.observe(dd, {
              childList: !0,
              subtree: !0
            }), () => {
              Nd.disconnect(), Zd.disconnect(), Cd.disconnect(), gd(), window.removeEventListener("resize", Jd);
              const kd = dd.querySelector(ip.i);
              kd && (0, ip.l)(kd)
            }
          },
          Wd = () => pd.querySelector(".TopRightIconsContainer"),
          Pd = Wd();
        let Zd;
        if (Pd) Zd = Nd(Pd);
        else {
          const dd = new MutationObserver((() => {
            const Jd = Wd();
            Jd && (dd.disconnect(), Zd = Nd(Jd))
          }));
          dd.observe(pd, {
            childList: !0,
            subtree: !0
          }), Zd = () => {
            dd.disconnect()
          }
        }
        return () => {
          Zd(), kd.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [Jd, dd])
    }
    var Yp = kd(3562),
      mp = kd(3558),
      bp = kd(1670),
      Sp = kd(1520),
      jp = kd(1675),
      Xp = kd(1753),
      fp = kd(1858),
      np = kd(1147),
      Up = kd(4136),
      yp = kd(1492),
      Dp = kd(1380);
    const Tp = 2e4,
      Ep = 6e5,
      cp = new Set;

    function hp() {
      const {
        gameEntrySource: dd,
        loadingOverlayVisible: Jd
      } = (0, sd.j)(["gameEntrySource", "loadingOverlayVisible"]), kd = (0, Bd.g)("connectedGame", (dd => (0, Up.i)(dd) ? dd.lobbyName : null)), Nd = (0, Bd.k)("localPlayerAlive"), Wd = (0, Bd.g)("players", (dd => null !== dd.localId && void 0 !== dd.byId[dd.localId])), [Pd, Zd] = (0, pd.useState)(null);
      return !Jd && Nd && Wd && null !== kd && Pd !== kd && Zd(kd), (0, pd.useEffect)((() => {
        if (!(0, Up.j)(dd) || null === Pd || Pd !== kd || cp.has(Pd)) return;
        const Jd = setTimeout((() => {
          cp.add(Pd), async function(dd) {
            const Jd = await np.userContextManager.getCurrentUserContext();
            let kd;
            try {
              kd = (await Sp.d.getWorldOwnerFriendOffer(Jd)).owner
            } catch (Nd) {
              return void console.warn("Couldn't ask who owns this world", Nd)
            }
            if (!kd || (0, Up.p)(kd.name, Date.now())) return;
            const pd = kd;
            ! function(dd, Jd) {
              const kd = Date.now() + Ep;
              let pd = Date.now(),
                Nd = 0;
              const Wd = () => {
                const Pd = Date.now(),
                  Zd = ld.gameBridge.latest("connectedGame");
                Zd.lobbyName !== dd || Pd > kd || (null === Zd.websocketUrl ? pd = 1 / 0 : pd === 1 / 0 && !sd.d.get("loadingOverlayVisible") && ld.gameBridge.latest("localPlayerAlive") && (pd = Pd + Tp), Nd = Pd < pd || !ld.gameBridge.latest("localPlayerAlive") || sd.d.get("isUiHidden") || sd.d.get("isUiHiddenByCamera") || (0, Xp.isTypingInInput)() || sd.d.get("loadingOverlayVisible") || (0, bp.n)() || (0, Yp.g)() || (0, Dp.j)() ? 0 : Nd + 1, Nd >= 2 ? Jd() : setTimeout(Wd, 500))
              };
              Wd()
            }(dd, (() => {
              (0, Up.f)(jp.c.getSocialState().friends, pd.name) || ((0, Up.l)(pd.name, Date.now()), fp.f.showWorldOwnerOffer(pd), (0, yp.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Pd).catch((dd => {
            console.error("Failed to offer the world's owner as a friend", dd)
          }))
        }), Tp);
        return () => {
          clearTimeout(Jd)
        }
      }), [dd, Pd, kd]), null
    }
    var rp = kd(1910);
    const tp = (0, pd.memo)((function(dd) {
        let {
          durationMs: Jd,
          endsAtMs: kd
        } = dd;
        const [, Nd] = (0, pd.useReducer)((dd => dd + 1), 0), Wd = null === kd ? Jd : Math.max(kd - Date.now(), 0);
        return (0, pd.useEffect)((() => {
          if (null === kd || Wd <= 0) return;
          const dd = setTimeout(Nd, Wd - 1e3 * (Math.ceil(Wd / 1e3) - 1));
          return () => {
            clearTimeout(dd)
          }
        })), (0, Cd.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Uk.lb)(Wd)
        })
      })),
      Vp = (0, pd.memo)((function() {
        const dd = (0, Bd.k)("localEffects");
        return (0, Cd.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(dd).map((dd => {
            let [Jd, {
              icon: kd,
              displayName: pd,
              durationMs: Nd,
              endsAtMs: Wd,
              level: Pd
            }] = dd;
            return (0, Cd.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Cd.jsx)(rp.e, {
                icon: kd,
                className: "EffectInfoIcon"
              }), (0, Cd.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Nd ? "0" : "1rem"
                },
                children: [(0, Cd.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Cd.jsx)(gd.c, {
                    text: null !== pd && void 0 !== pd ? pd : Jd,
                    className: "EffectInfoName SmallTextBold"
                  }), Pd > 1 && (0, Cd.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Uk.V)(Pd)
                  })]
                }), null !== Nd && (0, Cd.jsx)(tp, {
                  durationMs: Nd,
                  endsAtMs: Wd
                })]
              })]
            }, Jd)
          }))
        })
      }));
    var zp = kd(36861),
      Hp = kd(37076),
      wp = kd(193),
      Ap = kd(1371),
      dN = kd(2628),
      JN = kd(2807);

    function kN(dd, Jd) {
      (0, pd.useLayoutEffect)((() => {
        let Jd, kd;
        const pd = requestAnimationFrame((() => {
          kd = setTimeout((() => {
            kd = void 0;
            const pd = dd();
            Jd = "function" === typeof pd ? pd : void 0
          }), 0)
        }));
        return () => {
          var dd;
          cancelAnimationFrame(pd), clearTimeout(kd), null === (dd = Jd) || void 0 === dd || dd()
        }
      }), Jd)
    }
    const pN = [5, 5, 5],
      NN = [7, 4, 4, 4];

    function WN(dd) {
      return dd.reduce(((dd, Jd) => dd + Jd), 0)
    }

    function PN(dd, Jd, kd, pd, Nd) {
      const Wd = dd.getContext("2d");
      if (!Wd) return null;
      const Pd = Jd.fontFamily,
        Zd = Jd.fontWeight;
      return dd.width = kd, dd.height = pd, Wd.fillStyle = Jd.color, Wd.textAlign = "center", Wd.textBaseline = "middle", Wd.font = `${Zd} ${Nd}px ${Pd}`, Wd
    }
    const ZN = (0, pd.memo)((function(dd) {
      let {
        show: Jd
      } = dd;
      const kd = (0, pd.useRef)(null),
        Nd = (0, pd.useRef)(null),
        Wd = (0, pd.useRef)(null),
        Pd = (0, Ld.o)();
      return (0, pd.useEffect)((() => Pd.whenShown((() => {
        let dd = 0,
          Jd = 0,
          kd = performance.now(),
          pd = 0;
        const Pd = (0, Op.q)((() => {
          var Pd, Zd, gd;
          dd++, Jd++;
          const Cd = performance.now();
          if (Cd - kd < 1e3) return;
          const Kd = Math.round(dd / (Cd - kd) * 1e3);
          if (Nd.current = Kd, null === (Pd = Wd.current) || void 0 === Pd || Pd.call(Wd, Kd), dd = 0, kd = Cd, Kd >= 55) return void(pd = 0);
          if (pd += 1, pd < 15) return;
          const od = null !== (Zd = qd.i.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Zd ? Zd : 0,
            [Qd, Ld] = xd.b.get("minChunkAddDist");
          if (function(dd, Jd) {
              const kd = ld.gameBridge.lookup("WG", null);
              return null !== kd && (kd.horizontal > dd || kd.vertical > Jd)
            }(Qd, Ld) && (null !== (gd = qd.i.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== gd ? gd : 0) + 432e5 < Date.now() && od < 3) {
            qd.i.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            Ap.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((dd => {
              "notificationTornDown" !== dd && (dd ? (ld.gameBridge.send("setChunkAddDistance", {
                horizontal: Qd,
                vertical: Ld
              }), qd.i.setItem("chunkHorizAddDist", Qd), qd.i.setItem("chunkVertAddDist", Ld), vd.j.nO("updatedChunkLoadDist"), qd.i.setItem("decreaseLoadDistPromptDeniedCount", 0)) : qd.i.setItem("decreaseLoadDistPromptDeniedCount", od + 1))
            }))
          }
        }));
        let Zd = performance.now();
        Jd = 0;
        let gd = null,
          Cd = !document.hidden;

        function Kd() {
          const dd = performance.now() - Zd,
            kd = 1e3 * Jd / dd;
          Cd && (null === gd && (gd = kd), dN.e.setFps(kd, gd)), Jd = 0, Zd = performance.now()
        }
        let od = setInterval(Kd, JN.e);

        function Qd() {
          const dd = Cd;
          Cd = !document.hidden, !dd && Cd && (Jd = 0, Zd = performance.now(), clearInterval(od), od = setInterval(Kd, JN.e))
        }
        return document.addEventListener("visibilitychange", Qd), () => {
          Pd(), document.removeEventListener("visibilitychange", Qd), clearInterval(od)
        }
      }))), [Pd]), kN((() => {
        var dd;
        if (!Jd || Wd.current) return;
        const pd = kd.current,
          Pd = window.getComputedStyle(pd.parentElement),
          Zd = null !== (dd = window.devicePixelRatio) && void 0 !== dd ? dd : 1,
          gd = parseFloat(Pd.fontSize) * Zd,
          Cd = Math.round(3 * gd),
          Kd = Math.round(gd),
          od = PN(pd, Pd, Cd, Kd, gd);
        if (!od) return;
        const ld = dd => {
          od.clearRect(0, 0, pd.width, pd.height), od.fillText(dd.toString(), pd.width / 2, pd.height / 2)
        };
        Wd.current = ld, null !== Nd.current && ld(Nd.current)
      }), [Jd]), (0, Cd.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: Jd ? "flex" : "none"
        },
        children: [(0, Cd.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Cd.jsx)("canvas", {
          className: "FpsCanvas",
          ref: kd,
          width: 48,
          height: 16
        })]
      })
    }));

    function gN(dd) {
      return Math.sign(dd) * Math.round(100 * Math.abs(dd))
    }

    function CN(dd) {
      let {
        getCoordinates: Jd,
        showChunkCoords: kd,
        columns: Nd
      } = dd;
      const Wd = (0, pd.useRef)(null);
      return kN((() => {
        var dd;
        const pd = Wd.current,
          Pd = window.getComputedStyle(pd.parentElement),
          Zd = null !== (dd = window.devicePixelRatio) && void 0 !== dd ? dd : 1,
          gd = parseFloat(Pd.fontSize) * Zd,
          Cd = Math.round(gd * WN(Nd)),
          Kd = Math.round(gd),
          od = PN(pd, Pd, Cd, Kd, gd);
        if (!od) return;
        let Qd = !0,
          Ld = 0,
          Od = 0,
          ed = 0,
          Rd = 0,
          Id = 0,
          Gd = 0;
        const vd = () => {
          Qd = !0
        };
        document.fonts.load(od.font).then(vd, vd);
        const xd = () => {
          PN(pd, Pd, Cd, Kd, gd), vd()
        };
        pd.addEventListener("contextrestored", xd);
        const qd = (0, Op.s)((() => {
          var dd, Wd, Pd, Zd, Cd, Kd;
          const [vd, xd, qd] = Jd(), Bd = gN(vd), sd = gN(xd), ad = gN(qd);
          let Md = null;
          if (kd) {
            const dd = ld.gameBridge.lookup("localPos", null);
            Md = (0, JJ.$)(dd[0], dd[1], dd[2])
          }
          const Fd = null !== (dd = null === (Wd = Md) || void 0 === Wd ? void 0 : Wd[0]) && void 0 !== dd ? dd : 0,
            Yd = null !== (Pd = null === (Zd = Md) || void 0 === Zd ? void 0 : Zd[1]) && void 0 !== Pd ? Pd : 0,
            md = null !== (Cd = null === (Kd = Md) || void 0 === Kd ? void 0 : Kd[2]) && void 0 !== Cd ? Cd : 0;
          if (!Qd && Bd === Ld && sd === Od && ad === ed && Fd === Rd && Yd === Id && md === Gd) return;
          Qd = !1, Ld = Bd, Od = sd, ed = ad, Rd = Fd, Id = Yd, Gd = md;
          const bd = [(Bd / 100).toFixed(2), (sd / 100).toFixed(2), (ad / 100).toFixed(2)];
          Md && bd.unshift(`${Fd} ${Yd} ${md}`), od.clearRect(0, 0, pd.width, pd.height);
          const Sd = pd.height / 2;
          let jd = 0;
          for (let Jd = 0; Jd < bd.length; Jd++) {
            const dd = gd * Nd[Jd];
            od.fillText(bd[Jd], jd + dd / 2, Sd, dd), jd += dd
          }
        }));
        return () => {
          qd(), pd.removeEventListener("contextrestored", xd)
        }
      }), [Jd, kd, Nd]), (0, Cd.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Cd.jsx)("canvas", {
          ref: Wd,
          className: "CoordinateCanvas",
          width: 16 * WN(Nd),
          height: 16
        })
      })
    }
    const KN = (0, pd.memo)((function() {
        const dd = (0, pd.useCallback)((() => {
          const dd = ld.gameBridge.lookup("localPos", null);
          return [dd[0], dd[1], dd[2]]
        }), []);
        return (0, Cd.jsx)(CN, {
          getCoordinates: dd,
          showChunkCoords: !1,
          columns: pN
        })
      })),
      oN = (0, pd.memo)((function() {
        const dd = (0, pd.useCallback)((() => {
          const dd = ld.gameBridge.lookup("localPos", null),
            Jd = wp.g.KL;
          let kd = dd[0] % Jd,
            pd = dd[1] % Jd,
            Nd = dd[2] % Jd;
          return kd < 0 && (kd += Jd), pd < 0 && (pd += Jd), Nd < 0 && (Nd += Jd), [kd, pd, Nd]
        }), []);
        return (0, Cd.jsx)(CN, {
          getCoordinates: dd,
          showChunkCoords: !0,
          columns: NN
        })
      }));
    var lN = kd(2028),
      QN = kd(1359),
      LN = kd(1013),
      ON = kd(1245),
      eN = kd(95),
      RN = kd(36926),
      IN = kd(1469),
      GN = kd(3011);
    const vN = (0, pd.memo)((function() {
      const dd = (0, Gd.j)("maxAuraLevel");
      return 0 === dd ? null : (0, Cd.jsx)(xN, {
        maxLevel: dd
      })
    }));

    function xN(dd) {
      let {
        maxLevel: Jd
      } = dd;
      const kd = (0, Gd.j)("auraPerLevel"),
        [Nd, Wd] = (0, pd.useState)((() => {
          var dd;
          return null !== (dd = ld.gameBridge.latest("aura")) && void 0 !== dd ? dd : void 0
        })),
        [Pd, Zd] = (0, pd.useState)((() => vd(Nd))),
        [gd, Kd] = (0, pd.useReducer)((dd => dd + 1), 0),
        od = (0, pd.useRef)(null),
        Qd = (0, pd.useRef)([]),
        Ld = (0, pd.useRef)({
          width: 0,
          level: 0
        }),
        Od = (0, pd.useRef)(null),
        ed = (0, pd.useRef)(null);

      function Id() {
        if (null !== Od.current) return;
        if (0 === Qd.current.length) return;
        const {
          width: dd,
          level: Jd
        } = Qd.current.shift();
        let kd;
        if (Jd !== Ld.current.level && Jd > Ld.current.level !== dd > Ld.current.width) {
          const pd = Jd > Ld.current.level;
          kd = pd ? dd : 100 - dd, od.current.style.transition = "none", od.current.style.width = pd ? "0%" : "100%", od.current.offsetWidth
        } else kd = Math.abs(dd - Ld.current.width);
        const pd = 100 * kd / 20;
        od.current.style.transition = `width ${pd}ms linear`, Zd(dd), Ld.current = {
          width: dd,
          level: Jd
        }, Qd.current.length > 0 && (Od.current = setTimeout((() => {
          Od.current = null, Id()
        }), pd))
      }

      function vd(dd) {
        return Math.floor(dd / kd) === Jd ? 100 : dd % kd / kd * 100
      }
      return (0, pd.useEffect)((() => () => {
        clearTimeout(Od.current), clearTimeout(ed.current), Od.current = null, ed.current = null
      }), []), (0, Bd.d)("aura", (dd => {
        if (ed.current && clearTimeout(ed.current), null === dd) return clearTimeout(Od.current), ed.current = null, Od.current = null, Qd.current = [], Ld.current = {
          width: 0,
          level: 0
        }, Wd(void 0), void Zd(0);
        ed.current = setTimeout((() => {
          const Jd = Math.floor(Nd / kd),
            pd = Math.floor(dd / kd),
            Pd = vd(dd);
          dd > Nd && RN.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), pd > Jd ? (pd % 5 === 0 && RN.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Kd(), Qd.current.push({
            width: 100,
            level: Jd
          })) : pd < Jd && Qd.current.push({
            width: 0,
            level: Jd
          }), dd === Nd && pd === Jd || Qd.current.push({
            width: Pd,
            level: pd
          }), Wd(dd), Id()
        }), 50)
      })), (0, Rd.d)(), (0, Cd.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Cd.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Cd.jsx)(IN.e, {
            showSignal: gd,
            particleElement: (0, Cd.jsx)("img", {
              src: (0, GN.h)("glint"),
              alt: ""
            })
          }), (0, Cd.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, GN.h)("glint"),
            alt: "aura"
          }), (0, Cd.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Nd && void 0 !== Nd ? Nd : 0) / kd)
          })]
        }), (0, Cd.jsx)("div", {
          className: "AuraBar",
          children: (0, Cd.jsx)("div", {
            ref: od,
            className: "AuraBarBackground",
            style: {
              width: `${Pd}%`
            }
          })
        })]
      })
    }
    var qN = kd(2458);

    function BN(dd) {
      dd.timed && (dd.endedAnimation = dd.timed.animation, dd.timed = null)
    }
    const sN = (0, pd.memo)((function() {
      const dd = (0, pd.useRef)(null),
        Jd = (0, pd.useRef)(null),
        kd = (0, pd.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Zd.h)("middleScreenBarInitiate", (dd => {
        var pd;
        let {
          duration: Nd,
          OJ: Wd,
          horizBarRemOffset: Pd
        } = dd;
        const Zd = kd.current;
        BN(Zd);
        const gd = Jd.current;
        if (!(Nd >= 0) || !gd) return;
        null === (pd = Zd.endedAnimation) || void 0 === pd || pd.cancel(), Zd.endedAnimation = null;
        const Cd = gd.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Nd,
          fill: "forwards"
        });
        Zd.timed = {
          OJ: Wd,
          horizBarRemOffset: Pd,
          animation: Cd
        }
      })), (0, Zd.h)("middleScreenBarRemove", (() => {
        BN(kd.current)
      })), (0, pd.useEffect)((() => {
        const pd = kd.current;
        let Nd = Number.NaN,
          Wd = Number.NaN,
          Pd = Number.NaN;
        return (0, Op.p)((() => {
          var kd, Zd, gd, Cd;
          const Kd = dd.current,
            od = Jd.current;
          if (!Kd || !od) return;
          null !== (kd = pd.timed) && void 0 !== kd && kd.OJ && "finished" === pd.timed.animation.playState && BN(pd), null === (Zd = pd.endedAnimation) || void 0 === Zd || Zd.cancel(), pd.endedAnimation = null;
          let Qd = pd.timed ? 1 : 0;
          if (!pd.timed) {
            const dd = ld.gameBridge.lookup("momentumFrac", null);
            Qd = dd > 0 ? 1 : 0, dd !== Pd && (Pd = dd, od.style.transform = `scaleX(${dd})`)
          }
          const Ld = null !== (gd = null === (Cd = pd.timed) || void 0 === Cd ? void 0 : Cd.horizBarRemOffset) && void 0 !== gd ? gd : 0;
          Ld === Nd && Qd === Wd || (Nd = Ld, Wd = Qd, Kd.style.transform = `translateX(calc(-50% + ${Ld}rem)) scaleX(${Qd})`)
        }))
      }), []), (0, Cd.jsx)("div", {
        className: "MiddleScreenBar",
        ref: dd,
        children: (0, Cd.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: Jd
        })
      })
    }));
    var iN = kd(4543),
      aN = kd(2606);

    function MN() {
      const {
        t: dd
      } = (0, md.B)(), Jd = (0, Zd.i)("serverUpdating", null), kd = (0, aN.b)(250, null !== Jd);
      return null === Jd || kd - Jd > 3e4 ? null : (0, Cd.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Cd.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: dd("updateWaiting:updatingIn", {
            countdown: (0, iN.t)(Jd - kd)
          })
        }), (0, Cd.jsx)("div", {
          children: dd("updateWaiting:bringYouBack")
        })]
      })
    }
    var FN = kd(37095),
      YN = kd(1975);
    const mN = [{
        translationKey: "general:interact"
      }],
      bN = (0, pd.memo)((function() {
        const dd = (0, Gd.j)("crosshairText"),
          {
            interactPrompt: Jd,
            blockText: kd,
            neededTool: Nd
          } = (0, Bd.k)("crosshairTarget"),
          {
            isTouchScreen: Wd
          } = (0, sd.j)(["isTouchScreen"]),
          Pd = (0, Md.m)(),
          Kd = (0, Yd.c)("alt-fire");
        (0, pd.useEffect)((() => {
          ld.gameBridge.send("setCrosshairInteractPrompt", !Wd || Pd ? "key" : "touch")
        }), [Wd, Pd]);
        const [od, Qd] = (0, pd.useReducer)((dd => dd + 1), 0);
        (0, Zd.h)("customBindingsChanged", Qd);
        var Ld;
        if (null !== Jd && (Pd && null !== Kd || !Wd && null !== (0, YN.t)("alt-fire"))) return (0, Cd.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Cd.jsx)(ad.c, {
            noaAction: "alt-fire"
          }), (0, Cd.jsx)(gd.c, {
            text: null !== (Ld = Jd.label) && void 0 !== Ld ? Ld : mN
          })]
        });
        let Od = null;
        return null !== kd ? Od = kd : null !== dd && "" !== dd ? Od = dd : null !== Nd && (Od = [{
          icon: Nd,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Od ? (0, Cd.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Cd.jsx)(gd.c, {
            text: Od
          })
        }) : null
      }));
    var SN = kd(2465);
    const jN = (0, pd.memo)((function() {
      var dd;
      const {
        interactPrompt: Jd
      } = (0, Bd.k)("crosshairTarget"), {
        openInGameMenuName: kd,
        openEverythingMenuName: pd
      } = (0, sd.j)(["openInGameMenuName", "openEverythingMenuName"]), Nd = (0, Zd.i)("aimingOverlay", "none"), Wd = (0, Vd.m)(), Pd = (0, SN.d)();
      return null === Jd || null !== kd || null !== pd || "sniper" === Nd || Wd || Pd ? null : (0, Cd.jsx)(XN, {
        label: null !== (dd = Jd.label) && void 0 !== dd ? dd : mN
      })
    }));

    function XN(dd) {
      let {
        label: Jd
      } = dd;
      const kd = YJ(wd.e.Interact, !1);
      return (0, pd.useEffect)((() => (vd.j.nO(eJ.o), () => {
        vd.j.nO(eJ.o)
      })), []), (0, Cd.jsx)("div", {
        ref: kd,
        className: "TouchInteractHit",
        children: (0, Cd.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Cd.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Cd.jsx)(Ud.e, {
              name: "hand-back-point-up"
            })
          }), (0, Cd.jsx)(gd.c, {
            text: Jd
          })]
        })
      })
    }
    var fN = kd(4642),
      nN = kd(4722);
    const UN = (0, pd.forwardRef)((function(dd, Jd) {
        let {
          text: kd,
          className: pd,
          children: Nd
        } = dd;
        return kd.hasText ? (0, Cd.jsx)("div", {
          ref: Jd,
          className: Wd()("HudTextPanel", pd, {
            NoBackground: !kd.showBackground
          }),
          children: null !== Nd && void 0 !== Nd ? Nd : (0, Cd.jsx)(gd.c, {
            text: kd.content
          })
        }) : null
      })),
      yN = (0, pd.memo)((function() {
        const dd = (0, Gd.n)("middleTextTop"),
          [Jd, kd] = (0, pd.useState)(null),
          Nd = (0, sp.m)(Jd);
        return dd.hasText ? (0, Cd.jsx)("div", {
          className: Wd()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Nd
          }),
          children: (0, Cd.jsx)(UN, {
            ref: kd,
            className: "MiddleTextTop",
            text: dd
          })
        }) : null
      })),
      DN = (0, pd.memo)((function() {
        const dd = (0, Gd.e)();
        return (0, Cd.jsx)(Cd.Fragment, {
          children: dd.map(((dd, Jd) => (0, Cd.jsx)(UN, {
            className: "HeaderChip",
            text: dd
          }, Jd)))
        })
      }));
    var TN = kd(3504),
      EN = kd(4451);
    const cN = (0, pd.memo)((function() {
      const {
        t: dd
      } = (0, md.B)(), [Jd, kd] = (0, pd.useState)(!1), Nd = (0, pd.useRef)(!1), Wd = function(dd) {
        let {
          gameNameWithVariation: Jd,
          lobbyName: kd
        } = dd;
        if ((0, LN.i)(Jd)) return hN;
        if ((0, ON.G)(kd)) return rN;
        return null
      }((0, Bd.k)("connectedGame"));
      if (!Wd || Jd) return null;
      const Pd = EN.d[Wd.target];
      return (0, Cd.jsx)(nd.f, {
        tooltipInner: (0, Cd.jsx)("div", {
          children: dd(Pd.reportButtonTooltip)
        }),
        children: (0, Cd.jsx)("div", {
          children: (0, Cd.jsx)(Fk.F, {
            onClick: () => {
              Nd.current || (Nd.current = !0, (0, EN.g)(Wd.reportPolicyIds, Pd).then((dd => {
                null !== dd && void 0 !== dd && dd.selectedPolicyId && (ld.gameBridge.send("reportLobbyOrGame", {
                  target: Wd.target,
                  WC: dd.selectedPolicyId,
                  details: dd.PC
                }), kd(!0))
              })).finally((() => {
                Nd.current = !1
              })))
            }
          })
        })
      })
    }));
    const hN = {
        target: "customGame",
        reportPolicyIds: TN.c
      },
      rN = {
        target: "lobby",
        reportPolicyIds: TN.g
      };
    var uN = kd(8699),
      tN = kd(37112),
      VN = kd(37117),
      zN = kd(37119),
      HN = kd(37125),
      wN = kd(37141);

    function AN(dd) {
      return dd instanceof Error && dW.has(dd.message) ? dd.message : void 0
    }
    const dW = new Set([wN.e.saveBusy.text, wN.e.saveClosed.text, wN.e.cropBusy.text]);
    let JW = !1;
    async function kW(dd, Jd) {
      var kd, pd;
      const {
        files: Nd
      } = Jd, Wd = Nd.replayKey();
      if (null === Wd) return "none";
      if (JW) throw new Error(wN.e.saveBusy.text);
      const Pd = null !== (kd = null === (pd = Nd.saveRefusal) || void 0 === pd ? void 0 : pd.call(Nd)) && void 0 !== kd ? kd : null;
      if (null !== Pd) throw new Error(Pd);
      JW = !0;
      try {
        return await async function(dd, Jd, kd) {
          const {
            files: pd
          } = Jd, Nd = () => pd.replayKey() === kd, Wd = (dd, Jd) => {
            Nd() && pd.markSaved(dd, Jd)
          };
          let Pd = null;
          if (Jd.pickerSupported()) {
            try {
              if (Pd = await Jd.chooseFile(dd ? null : pd.fileHandle()), null === Pd) return "CJ"
            } catch (gd) {
              Jd.onFallback(gd)
            }
            if (!Nd()) throw new Error(wN.e.saveClosed.text)
          }
          const Zd = await pd.encode();
          if (null === Zd) {
            if (null !== Pd) throw new Error(wN.e.saveClosed.text);
            return "none"
          }
          if (null !== Pd) try {
            return await Jd.write(Pd, Zd), Wd(Pd), "written"
          } catch (gd) {
            Jd.onFallback(gd)
          }
          return Wd(null, Jd.download(Zd)), "downloaded"
        }(dd, Jd, Wd)
      } finally {
        JW = !1
      }
    }
    var pW = kd(4397),
      NW = kd(72);
    const WW = [1, 2, 4, 8, 16, 32, 64];

    function PW(dd, Jd) {
      return Math.max(0, Math.min(dd, Jd))
    }

    function ZW(dd, Jd, kd) {
      return kd <= Jd ? 0 : (dd - Jd) / (kd - Jd) * 100
    }

    function gW(dd, Jd, kd) {
      const pd = kd - Jd;
      return Math.round(Jd + dd / 100 * pd)
    }

    function CW(dd, Jd) {
      const kd = Math.floor(dd / Jd / 60),
        pd = Math.floor(dd / Jd % 60),
        Nd = dd % Jd;
      return `${kd.toString().padStart(2,"0")}:${pd.toString().padStart(2,"0")}:${Nd.toString().padStart(2,"0")}`
    }

    function KW(dd) {
      return Number.isInteger(dd) || WW.includes(dd) ? `${Math.round(dd)}\xd7` : `${dd.toFixed(1)}\xd7`
    }

    function oW(dd, Jd) {
      const kd = WW.indexOf(dd);
      if (-1 !== kd) return "in" === Jd ? WW[Math.min(kd + 1, WW.length - 1)] : WW[Math.max(kd - 1, 0)];
      if ("in" === Jd) {
        for (const Jd of WW)
          if (Jd >= dd) return Jd;
        return dd
      }
      for (let pd = WW.length - 1; pd >= 0; pd--)
        if (WW[pd] <= dd) return WW[pd];
      return WW[0]
    }

    function lW(dd, Jd) {
      const kd = Jd.getBoundingClientRect();
      if (kd.width <= 0) return 0;
      const pd = (dd - kd.left) / kd.width * 100;
      return Math.max(0, Math.min(100, pd))
    }

    function QW(dd, Jd) {
      return Jd <= 0 ? 0 : dd / Jd * 100
    }

    function LW(dd, Jd, kd) {
      const pd = [];
      let Nd = Math.ceil(dd / kd) * kd;
      for (; Nd <= Jd;) pd.push(Nd), Nd += kd;
      return pd
    }
    var OW = kd(37150);
    const eW = [{
        label: "Linear",
        easing: OW.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: OW.c
      }, {
        label: "Ease Out",
        easing: OW.f
      }, {
        label: "Ease In Out",
        easing: OW.b
      }],
      RW = 200,
      IW = 150;

    function GW(dd) {
      const Jd = dd => Number(dd.toFixed(3)).toString();
      return `cubic-bezier(${Jd(dd[0])}, ${Jd(dd[1])}, ${Jd(dd[2])}, ${Jd(dd[3])})`
    }

    function vW(dd, Jd) {
      return {
        cx: 25 + dd * IW,
        cy: 25 + (1 - Jd) * IW
      }
    }

    function xW(dd, Jd, kd) {
      const pd = dd - kd.left,
        Nd = Jd - kd.top;
      return {
        x: Uk.b.clamp((pd - 25) / IW, 0, 1),
        y: Uk.b.clamp(1 - (Nd - 25) / IW, -1, 2)
      }
    }

    function qW(dd, Jd, kd, pd, Nd) {
      return {
        x: (0, OW.n)(dd, kd, Nd),
        y: (0, OW.n)(Jd, pd, Nd)
      }
    }
    const BW = (0, pd.memo)((function(dd) {
      let {
        value: Jd,
        onChange: kd
      } = dd;
      const Nd = (0, pd.useRef)(null),
        Wd = (0, pd.useRef)(null),
        [Pd, Zd] = (0, pd.useState)(null),
        gd = (0, pd.useCallback)((() => {
          const dd = Nd.current;
          if (!dd) return;
          const kd = dd.getContext("2d");
          if (!kd) return;
          const pd = window.devicePixelRatio || 1;
          dd.width = RW * pd, dd.height = RW * pd, kd.setTransform(pd, 0, 0, pd, 0, 0), kd.clearRect(0, 0, RW, RW), kd.fillStyle = "rgba(38, 52, 93, 0.85)", kd.fillRect(0, 0, RW, RW), kd.beginPath();
          const Wd = vW(0, 0),
            Zd = vW(1, 1);
          kd.moveTo(Wd.cx, Wd.cy), kd.lineTo(Zd.cx, Zd.cy), kd.strokeStyle = "rgba(164, 164, 164, 0.35)", kd.setLineDash([3, 3]), kd.stroke(), kd.setLineDash([]);
          const [gd, Cd, Kd, od] = Jd, ld = vW(gd, Cd), Qd = vW(Kd, od);
          kd.strokeStyle = "rgba(252, 211, 115, 0.55)", kd.lineWidth = 1.5, kd.beginPath(), kd.moveTo(Wd.cx, Wd.cy), kd.lineTo(ld.cx, ld.cy), kd.moveTo(Zd.cx, Zd.cy), kd.lineTo(Qd.cx, Qd.cy), kd.stroke(), kd.strokeStyle = "#fcd373", kd.lineWidth = 2, kd.beginPath();
          for (let Jd = 0; Jd <= 50; Jd++) {
            const dd = qW(gd, Cd, Kd, od, Jd / 50),
              pd = vW(dd.x, dd.y);
            0 === Jd ? kd.moveTo(pd.cx, pd.cy) : kd.lineTo(pd.cx, pd.cy)
          }
          kd.stroke();
          const Ld = (dd, Jd, pd) => {
            kd.beginPath(), kd.arc(dd, Jd, pd ? 6 : 5, 0, 2 * Math.PI), kd.fillStyle = pd ? "#ffb914" : "#fcd373", kd.fill(), kd.strokeStyle = "#1a1f2e", kd.lineWidth = 1.5, kd.stroke()
          };
          Ld(ld.cx, ld.cy, "p1" === Pd), Ld(Qd.cx, Qd.cy, "p2" === Pd)
        }), [Pd, Jd]);
      (0, pd.useEffect)((() => {
        gd()
      }), [gd]);
      const Kd = (0, pd.useCallback)(((dd, pd) => {
          const Pd = Nd.current,
            Zd = Wd.current;
          if (!Pd || !Zd) return;
          const gd = Pd.getBoundingClientRect(),
            {
              x: Cd,
              y: Kd
            } = xW(dd, pd, gd);
          kd("p1" === Zd ? [Cd, Kd, Jd[2], Jd[3]] : [Jd[0], Jd[1], Cd, Kd])
        }), [kd, Jd]),
        od = (0, pd.useCallback)((dd => {
          const kd = Nd.current;
          if (!kd) return;
          const pd = kd.getBoundingClientRect();
          let {
            x: Pd,
            y: gd
          } = xW(dd.clientX, dd.clientY, pd);
          Pd = Uk.b.clamp(Pd, 0, 1), gd = Uk.b.clamp(gd, 0, 1);
          const [Cd, od, ld, Qd] = Jd.map((dd => Uk.b.clamp(dd, 0, 1))), Ld = Math.hypot(Pd - Cd, gd - od), Od = Math.hypot(Pd - ld, gd - Qd), ed = Ld <= Od ? "p1" : "p2";
          ("p1" === ed ? Ld : Od) > .12 || (Wd.current = ed, Zd(ed), kd.setPointerCapture(dd.pointerId), Kd(dd.clientX, dd.clientY))
        }), [Kd, Jd]),
        ld = (0, pd.useCallback)((dd => {
          Wd.current && Kd(dd.clientX, dd.clientY)
        }), [Kd]),
        Qd = (0, pd.useCallback)((dd => {
          Wd.current = null, Zd(null), dd.currentTarget.hasPointerCapture(dd.pointerId) && dd.currentTarget.releasePointerCapture(dd.pointerId)
        }), []);
      return (0, Cd.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Cd.jsx)("canvas", {
          ref: Nd,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: RW,
            height: RW
          },
          onPointerDown: od,
          onPointerMove: ld,
          onPointerUp: Qd,
          onPointerCancel: Qd
        }), (0, Cd.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: GW(Jd)
        })]
      })
    }));
    var sW = kd(1723),
      iW = kd(1699);
    const aW = 12;

    function MW(dd) {
      return {
        left: dd.left + dd.width / 2,
        top: dd.top - 8
      }
    }

    function FW(dd, Jd) {
      const [kd, Nd] = (0, pd.useState)(null);
      return (0, pd.useLayoutEffect)((() => {
        const kd = dd.current;
        if (!kd) return;
        const {
          width: pd,
          height: Wd
        } = kd.getBoundingClientRect();
        Nd(function(dd, Jd, kd) {
          const pd = window.innerWidth,
            Nd = window.innerHeight,
            Wd = Jd / 2;
          let Pd = dd.left + dd.width / 2;
          Pd = Math.max(aW + Wd, Math.min(Pd, pd - aW - Wd));
          const Zd = dd.top - 8 - aW,
            gd = Nd - dd.bottom - 8 - aW,
            Cd = Zd < kd && gd >= Zd;
          let Kd;
          Cd ? (Kd = dd.bottom + 8, Kd + kd > Nd - aW && (Kd = Nd - aW - kd), Kd = Math.max(aW, Kd)) : (Kd = dd.top - 8, Kd - kd < aW && (Kd = aW + kd));
          return {
            left: Pd,
            top: Kd,
            placeBelow: Cd
          }
        }(Jd, pd, Wd))
      }), [Jd, dd]), kd
    }

    function YW(dd, Jd, kd) {
      (0, pd.useEffect)((() => (0, iW.d)("pointerdown", (pd => {
        var Nd, Wd;
        const Pd = pd.target;
        Pd instanceof Node && (null !== (Nd = dd.current) && void 0 !== Nd && Nd.contains(Pd) || null !== kd && void 0 !== kd && null !== (Wd = kd.current) && void 0 !== Wd && Wd.contains(Pd) || (0, sW.g)(Pd) || Jd())
      }))), [kd, Jd, dd])
    }

    function mW(dd) {
      let {
        label: Jd,
        value: kd,
        onChange: pd
      } = dd;
      return (0, Cd.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Cd.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: Jd
        }), (0, Cd.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((dd, Jd) => (0, Cd.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Cd.jsx)("span", {
              children: dd
            }), (0, Cd.jsx)("input", {
              type: "number",
              step: "any",
              value: kd[Jd],
              onChange: dd => {
                const Nd = Number.parseFloat(dd.target.value);
                if (Number.isNaN(Nd)) return;
                const Wd = [kd[0], kd[1], kd[2]];
                Wd[Jd] = Nd, pd(Wd)
              }
            })]
          }, dd)))
        })]
      })
    }
    const bW = (0, pd.memo)((function(dd) {
        var Jd, kd, Nd;
        let {
          keyframe: Pd,
          anchor: Zd,
          hasOutgoingSegment: gd,
          onClose: Kd,
          onApply: od,
          onDelete: ld,
          onUseCurrentCamera: Qd
        } = dd;
        const Ld = (0, pd.useRef)(null),
          Od = FW(Ld, Zd.rect),
          [ed, Rd] = (0, pd.useState)((() => [Pd.position[0], Pd.position[1], Pd.position[2]])),
          [Id, Gd] = (0, pd.useState)((() => [Pd.direction[0], Pd.direction[1], Pd.direction[2]])),
          [vd, xd] = (0, pd.useState)((() => Pd.easing));
        (0, pd.useEffect)((() => {
          Rd([Pd.position[0], Pd.position[1], Pd.position[2]]), Gd([Pd.direction[0], Pd.direction[1], Pd.direction[2]]), xd(Pd.easing)
        }), [Pd]), YW(Ld, Kd);
        const qd = (0, pd.useCallback)((() => {
            od({
              Do: Pd.Do,
              position: ed,
              direction: Id,
              easing: vd
            }), Kd()
          }), [Id, vd, Pd.Do, od, Kd, ed]),
          Bd = (0, pd.useCallback)((() => {
            ld(Pd.Do), Kd()
          }), [Pd.Do, ld, Kd]),
          sd = (0, pd.useCallback)((() => {
            const dd = Qd();
            dd && (Rd([dd.position[0], dd.position[1], dd.position[2]]), Gd([dd.direction[0], dd.direction[1], dd.direction[2]]))
          }), [Qd]),
          ad = MW(Zd.rect);
        return (0, Cd.jsxs)("div", {
          ref: Ld,
          className: Wd()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (Jd = null === Od || void 0 === Od ? void 0 : Od.placeBelow) && void 0 !== Jd && Jd,
            Positioned: null !== Od
          }),
          style: {
            left: `${null!==(kd=null===Od||void 0===Od?void 0:Od.left)&&void 0!==kd?kd:ad.left}px`,
            top: `${null!==(Nd=null===Od||void 0===Od?void 0:Od.top)&&void 0!==Nd?Nd:ad.top}px`
          },
          onPointerDown: dd => {
            dd.stopPropagation()
          },
          children: [(0, Cd.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Cd.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Cd.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Zd.Do]
            })]
          }), (0, Cd.jsx)(mW, {
            label: "Position",
            value: ed,
            onChange: Rd
          }), (0, Cd.jsx)(mW, {
            label: "Direction",
            value: Id,
            onChange: Gd
          }), gd && (0, Cd.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Cd.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Cd.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: eW.map((dd => {
                const Jd = (kd = vd, pd = dd.easing, kd[0] === pd[0] && kd[1] === pd[1] && kd[2] === pd[2] && kd[3] === pd[3]);
                var kd, pd;
                return (0, Cd.jsx)(Fk.G, {
                  className: Wd()("ReplayKeyframePopoverPreset", {
                    Active: Jd
                  }),
                  onClick: () => {
                    xd(dd.easing)
                  },
                  children: dd.label
                }, dd.label)
              }))
            }), (0, Cd.jsx)(BW, {
              value: vd,
              onChange: xd
            })]
          }), (0, Cd.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Cd.jsx)(Fk.d, {
              className: "ReplayViewerCompactButton",
              onClick: sd,
              children: "Use current view"
            }), (0, Cd.jsx)(Fk.j, {
              className: "ReplayViewerCompactButton",
              onClick: qd,
              children: "Apply"
            }), (0, Cd.jsx)(Fk.B, {
              className: "ReplayViewerCompactButton",
              onClick: Bd,
              children: "Delete"
            })]
          })]
        })
      })),
      SW = (0, pd.memo)((function(dd) {
        var Jd, kd, Nd;
        let {
          anchor: Pd,
          hasPlaybackMark: Zd,
          onClose: gd,
          onMark: Kd,
          onZoom: od,
          onCrop: ld,
          onDeleteKeyframes: Qd,
          onClearMark: Ld
        } = dd;
        const Od = (0, pd.useRef)(null),
          ed = FW(Od, Pd.rect),
          Rd = MW(Pd.rect),
          Id = {
            startTick: Pd.startTick,
            endTick: Pd.endTick
          },
          Gd = Pd.endTick > Pd.startTick;
        return YW(Od, gd), (0, Cd.jsx)("div", {
          ref: Od,
          className: Wd()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (Jd = null === ed || void 0 === ed ? void 0 : ed.placeBelow) && void 0 !== Jd && Jd,
            Positioned: null !== ed
          }),
          style: {
            left: `${null!==(kd=null===ed||void 0===ed?void 0:ed.left)&&void 0!==kd?kd:Rd.left}px`,
            top: `${null!==(Nd=null===ed||void 0===ed?void 0:ed.top)&&void 0!==Nd?Nd:Rd.top}px`
          },
          onPointerDown: dd => {
            dd.stopPropagation()
          },
          children: (0, Cd.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Cd.jsx)(Fk.j, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Kd(Id)
              },
              disabled: !Gd,
              children: (0, Cd.jsx)("span", {
                children: " Play range "
              })
            }), (0, Cd.jsx)(Fk.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                od(Id)
              },
              children: (0, Cd.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Cd.jsx)(Fk.G, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                ld(Id)
              },
              disabled: !Gd,
              children: (0, Cd.jsx)("span", {
                children: " Crop "
              })
            }), (0, Cd.jsx)(Fk.G, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Qd(Id)
              },
              children: (0, Cd.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Zd && (0, Cd.jsx)(Fk.G, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Ld()
              },
              children: (0, Cd.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      jW = (0, pd.memo)((function(dd) {
        var Jd, kd;
        let {
          maxTick: Nd,
          displayTick: Pd,
          AY: Zd,
          cameraKeyframes: gd,
          playbackMark: Kd,
          onSeek: od,
          onPause: ld,
          onScrubTickChange: Qd,
          onMoveCameraKeyframe: Ld,
          onUpdateCameraKeyframe: Od,
          onDeleteCameraKeyframe: ed,
          onUseCurrentCamera: Rd,
          onMarkRange: Id,
          onCropRange: Gd,
          onDeleteKeyframesInRange: vd,
          onClearMark: xd,
          zoomLevel: qd,
          onZoomLevelChange: Bd
        } = dd;
        const sd = (0, pd.useRef)(null),
          ad = (0, pd.useRef)(null),
          Md = (0, pd.useRef)(!1),
          Fd = (0, pd.useRef)(!1),
          Yd = (0, pd.useRef)(qd),
          md = (0, pd.useRef)(null),
          bd = (0, pd.useRef)(null),
          Sd = (0, pd.useRef)(null),
          jd = (0, pd.useRef)(null),
          [Xd, fd] = (0, pd.useState)(null),
          [nd, Ud] = (0, pd.useState)(Pd),
          [yd, Dd] = (0, pd.useState)(null),
          [Td, Ed] = (0, pd.useState)(null),
          [cd, hd] = (0, pd.useState)(null),
          [rd, ud] = (0, pd.useState)(null),
          td = (0, pd.useMemo)((() => gd.map((dd => dd.Do))), [gd]),
          Vd = null !== Xd && void 0 !== Xd ? Xd : Pd,
          {
            viewStart: zd,
            viewEnd: Hd
          } = (0, pd.useMemo)((() => function(dd) {
            const Jd = dd.maxTick + 1,
              kd = Math.max(1, Math.ceil(Jd / dd.zoomLevel)),
              pd = Math.floor(kd / 2);
            let Nd = dd.centerTick - pd;
            return Nd = Math.max(0, Math.min(Nd, dd.maxTick - kd + 1)), {
              viewStart: Nd,
              viewEnd: Math.min(dd.maxTick, Nd + kd - 1)
            }
          }({
            maxTick: Nd,
            zoomLevel: qd,
            centerTick: nd
          })), [Nd, qd, nd]);
        (0, pd.useEffect)((() => {
          if (null !== Xd || null !== bd.current || null !== Sd.current || null !== jd.current) return;
          if (Md.current) return void(Md.current = !1);
          if (Fd.current) return void(Fd.current = !1);
          const dd = Yd.current !== qd;
          Yd.current = qd, dd && Ud(Pd)
        }), [qd, Pd, Xd]);
        const wd = (0, pd.useCallback)((dd => {
            let Jd = PW(dd, Nd);
            return Kd && (Jd = Math.max(Kd.inTick, Math.min(Jd, Kd.outTick))), Jd
          }), [Nd, Kd]),
          Ad = (0, pd.useCallback)(((dd, Jd) => {
            const kd = wd(dd);
            od(kd), Jd && Ud(kd)
          }), [wd, od]),
          dJ = (0, pd.useCallback)(((dd, Jd) => {
            const kd = wd(dd);
            fd(kd), Qd(kd), Ad(kd, Jd)
          }), [wd, Ad, Qd]),
          JJ = (0, pd.useCallback)((() => {
            fd((dd => (null !== dd && Ud(dd), null))), Qd(null)
          }), [Qd]),
          kJ = (0, pd.useCallback)((() => {
            hd(null), ud(null)
          }), []),
          pJ = (0, pd.useCallback)((dd => {
            const Jd = sd.current;
            if (!Jd) return 0;
            return PW(gW(lW(dd, Jd), zd, Hd), Nd)
          }), [Nd, Hd, zd]),
          NJ = (0, pd.useCallback)((dd => {
            const Jd = ad.current;
            if (!Jd) return 0;
            return PW(gW(lW(dd, Jd), 0, Nd), Nd)
          }), [Nd]),
          WJ = (0, pd.useMemo)((() => {
            if (!yd) return [...td];
            const dd = td.filter((dd => dd !== yd.fromTick));
            return dd.push(yd.previewTick), dd.sort(((dd, Jd) => dd - Jd)), dd
          }), [td, yd]),
          PJ = (0, pd.useMemo)((() => {
            var dd;
            return Td && null !== (dd = gd.find((dd => dd.Do === Td.Do))) && void 0 !== dd ? dd : null
          }), [gd, Td]),
          ZJ = (0, pd.useMemo)((() => !!PJ && gd.some((dd => dd.Do > PJ.Do))), [gd, PJ]);
        (0, pd.useEffect)((() => {
          Td && !PJ && Ed(null)
        }), [Td, PJ]), (0, pd.useEffect)((() => {
          if (!rd) return () => {};
          const dd = dd => {
            "Escape" === dd.key && kJ()
          };
          return window.addEventListener("keydown", dd), () => {
            window.removeEventListener("keydown", dd)
          }
        }), [kJ, rd]);
        const gJ = (0, pd.useCallback)(((dd, Jd) => {
            kJ(), ld(), od(dd, {
              ignorePlaybackMark: !0
            }), Ed({
              Do: dd,
              rect: Jd.getBoundingClientRect()
            })
          }), [kJ, ld, od]),
          CJ = (0, pd.useCallback)(((dd, Jd) => kd => {
            0 === kd.button && (kd.stopPropagation(), Ed(null), kJ(), ld(), md.current = {
              fromTick: dd,
              startX: kd.clientX,
              startY: kd.clientY,
              didDrag: !1,
              track: Jd
            }, Dd({
              fromTick: dd,
              previewTick: dd,
              track: Jd
            }), kd.currentTarget.setPointerCapture(kd.pointerId))
          }), [kJ, ld]),
          KJ = (0, pd.useCallback)((dd => {
            if (!yd) return;
            dd.stopPropagation();
            const Jd = md.current;
            if (Jd && !Jd.didDrag) {
              const kd = dd.clientX - Jd.startX,
                pd = dd.clientY - Jd.startY;
              Math.hypot(kd, pd) > 5 && (Jd.didDrag = !0)
            }
            const kd = "detail" === yd.track ? pJ(dd.clientX) : NJ(dd.clientX);
            kd !== yd.previewTick && Dd({
              ...yd,
              previewTick: kd
            })
          }), [yd, pJ, NJ]),
          oJ = (0, pd.useCallback)((dd => {
            if (!yd) return;
            dd.stopPropagation();
            const Jd = md.current,
              kd = "detail" === yd.track ? pJ(dd.clientX) : NJ(dd.clientX);
            Jd && !Jd.didDrag ? gJ(Jd.fromTick, dd.currentTarget) : kd !== yd.fromTick && Ld(yd.fromTick, kd), Dd(null), md.current = null, dd.currentTarget.releasePointerCapture(dd.pointerId)
          }), [yd, Ld, gJ, pJ, NJ]),
          lJ = (0, pd.useCallback)((dd => {
            if (0 !== dd.button) return;
            Ed(null), ld();
            const Jd = pJ(dd.clientX);
            bd.current = {
              pointerId: dd.pointerId,
              startX: dd.clientX,
              startY: dd.clientY,
              startTick: Jd,
              currentTick: Jd,
              didSelect: !1
            }, hd(null), ud(null), dd.currentTarget.setPointerCapture(dd.pointerId)
          }), [ld, pJ]),
          QJ = (0, pd.useCallback)((dd => {
            const Jd = bd.current;
            if (!Jd || Jd.pointerId !== dd.pointerId) return;
            const kd = pJ(dd.clientX);
            if (Jd.currentTick = kd, !Jd.didSelect) {
              const kd = dd.clientX - Jd.startX,
                pd = dd.clientY - Jd.startY;
              if (Math.hypot(kd, pd) <= 5) return;
              Jd.didSelect = !0
            }
            const pd = Math.min(Jd.startTick, kd),
              Nd = Math.max(Jd.startTick, kd);
            hd({
              startTick: pd,
              endTick: Nd
            })
          }), [pJ]),
          LJ = (0, pd.useCallback)((dd => {
            const Jd = bd.current;
            if (!Jd || Jd.pointerId !== dd.pointerId) return;
            if (bd.current = null, dd.currentTarget.releasePointerCapture(dd.pointerId), !Jd.didSelect) return kJ(), void Ad(Jd.startTick, !0);
            const kd = pJ(dd.clientX),
              pd = Math.min(Jd.startTick, kd),
              Nd = Math.max(Jd.startTick, kd),
              Wd = {
                startTick: pd,
                endTick: Nd
              };
            hd(Wd);
            const Pd = sd.current;
            if (!Pd) return;
            const Zd = Pd.getBoundingClientRect(),
              gd = ZW(pd, zd, Hd) / 100,
              Cd = ZW(Nd, zd, Hd) / 100,
              Kd = Zd.left + gd * Zd.width,
              od = Zd.left + Cd * Zd.width;
            ud({
              ...Wd,
              rect: new DOMRect(Kd, Zd.top, Math.max(od - Kd, 1), Zd.height)
            })
          }), [kJ, Ad, pJ, Hd, zd]),
          OJ = (0, pd.useCallback)((dd => Jd => {
            if (0 !== Jd.button) return;
            Jd.stopPropagation(), Ed(null), kJ(), ld(), Sd.current = {
              pointerId: Jd.pointerId,
              track: dd
            }, Jd.currentTarget.setPointerCapture(Jd.pointerId);
            const kd = "detail" === dd ? pJ(Jd.clientX) : NJ(Jd.clientX);
            dJ(kd, !1)
          }), [kJ, ld, dJ, pJ, NJ]),
          eJ = (0, pd.useCallback)((dd => {
            const Jd = Sd.current;
            if (!Jd || Jd.pointerId !== dd.pointerId) return;
            dd.stopPropagation();
            const kd = "detail" === Jd.track ? pJ(dd.clientX) : NJ(dd.clientX);
            dJ(kd, !1)
          }), [dJ, pJ, NJ]),
          RJ = (0, pd.useCallback)((dd => {
            const Jd = Sd.current;
            Jd && Jd.pointerId === dd.pointerId && (dd.stopPropagation(), Sd.current = null, dd.currentTarget.releasePointerCapture(dd.pointerId), JJ())
          }), [JJ]),
          IJ = (0, pd.useCallback)((dd => {
            0 === dd.button && (kJ(), ld(), jd.current = {
              pointerId: dd.pointerId
            }, dd.currentTarget.setPointerCapture(dd.pointerId), dJ(NJ(dd.clientX), !0))
          }), [kJ, ld, dJ, NJ]),
          GJ = (0, pd.useCallback)((dd => {
            const Jd = jd.current;
            Jd && Jd.pointerId === dd.pointerId && dJ(NJ(dd.clientX), !0)
          }), [dJ, NJ]),
          vJ = (0, pd.useCallback)((dd => {
            const Jd = jd.current;
            Jd && Jd.pointerId === dd.pointerId && (jd.current = null, dd.currentTarget.releasePointerCapture(dd.pointerId), JJ())
          }), [JJ]),
          xJ = (0, pd.useCallback)((dd => {
            const Jd = Math.max(1, dd.endTick - dd.startTick + 1),
              kd = Nd + 1,
              pd = kd / Jd,
              Wd = Math.max(1, Math.ceil(kd / pd)),
              Pd = dd.startTick + Math.floor((Wd - 1) / 2);
            Fd.current = !0, Yd.current = pd, Ud(PW(Pd, Nd)), Bd(pd), kJ()
          }), [kJ, Nd, Bd]),
          qJ = (0, pd.useCallback)((dd => {
            Id(dd), kJ()
          }), [kJ, Id]),
          BJ = (0, pd.useCallback)((dd => {
            Gd(dd), kJ()
          }), [kJ, Gd]),
          sJ = (0, pd.useCallback)((dd => {
            vd(dd), kJ()
          }), [kJ, vd]),
          iJ = (0, pd.useCallback)((() => {
            xd(), kJ()
          }), [kJ, xd]);
        (0, pd.useEffect)((() => {
          const dd = sd.current;
          if (!dd) return () => {};
          const Jd = Jd => {
            Jd.preventDefault();
            const kd = PW(gW(lW(Jd.clientX, dd), zd, Hd), Nd),
              pd = Jd.deltaY < 0 ? "in" : "out",
              Wd = oW(qd, pd);
            Wd !== qd && (Md.current = !0, Ud(kd), Bd(Wd))
          };
          return dd.addEventListener("wheel", Jd, {
            passive: !1
          }), () => {
            dd.removeEventListener("wheel", Jd)
          }
        }), [Nd, Bd, Hd, zd, qd]);
        const aJ = ZW(Vd, zd, Hd),
          MJ = QW(Vd, Nd),
          FJ = QW(zd, Nd),
          YJ = Nd > 0 ? QW(Hd, Nd) : 100,
          mJ = null !== Kd,
          bJ = null !== (Jd = null === Kd || void 0 === Kd ? void 0 : Kd.inTick) && void 0 !== Jd ? Jd : 0,
          SJ = null !== (kd = null === Kd || void 0 === Kd ? void 0 : Kd.outTick) && void 0 !== kd ? kd : Nd,
          jJ = QW(bJ, Nd),
          XJ = Math.max(QW(SJ, Nd) - jJ, 0),
          fJ = ZW(Math.max(bJ, zd), zd, Hd),
          nJ = ZW(Math.min(SJ, Hd), zd, Hd),
          UJ = Math.max(nJ - fJ, 0),
          yJ = mJ && SJ >= zd && bJ <= Hd,
          DJ = ZW(bJ, zd, Hd),
          TJ = ZW(SJ, zd, Hd),
          EJ = mJ && bJ >= zd && bJ <= Hd,
          cJ = mJ && SJ >= zd && SJ <= Hd,
          hJ = QW(bJ, Nd),
          rJ = QW(SJ, Nd),
          uJ = null !== cd && void 0 !== cd ? cd : rd ? {
            startTick: rd.startTick,
            endTick: rd.endTick
          } : null,
          tJ = uJ ? ZW(Math.max(uJ.startTick, zd), zd, Hd) : 0,
          VJ = uJ ? ZW(Math.min(uJ.endTick, Hd), zd, Hd) : 0,
          zJ = Math.max(VJ - tJ, 0),
          HJ = null !== uJ && uJ.endTick >= zd && uJ.startTick <= Hd,
          wJ = (0, pd.useMemo)((() => LW(0, Nd, Zd)), [Nd, Zd]),
          AJ = (0, pd.useMemo)((() => LW(zd, Hd, Zd)), [zd, Hd, Zd]),
          dk = (0, pd.useMemo)((() => WJ.filter((dd => dd >= zd && dd <= Hd))), [WJ, Hd, zd]),
          Jk = (0, pd.useCallback)(((dd, Jd, kd) => {
            const pd = "detail" === Jd ? ZW(dd, zd, Hd) : QW(dd, Nd),
              Pd = null !== yd && kd === yd.fromTick,
              Zd = null !== Td && Td.Do === kd;
            return (0, Cd.jsx)("button", {
              type: "button",
              className: Wd()("ReplayTimelineCameraKeyframeMarker", "detail" === Jd ? "Detail" : "Overview", {
                Dragging: Pd,
                Selected: Zd
              }),
              style: {
                left: `${pd}%`
              },
              onPointerDown: CJ(kd, Jd),
              onPointerMove: KJ,
              onPointerUp: oJ,
              onPointerCancel: oJ,
              "aria-label": `Camera keyframe at tick ${kd}`
            }, `cam-${Jd}-${kd}`)
          }), [CJ, Td, oJ, yd, Nd, KJ, Hd, zd]),
          kk = (0, pd.useCallback)((dd => yd && dd === yd.previewTick ? yd.fromTick : dd), [yd]);
        return Nd <= 0 ? null : (0, Cd.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Td && PJ && (0, NW.createPortal)((0, Cd.jsx)(bW, {
            keyframe: PJ,
            anchor: Td,
            hasOutgoingSegment: ZJ,
            onClose: () => {
              Ed(null)
            },
            onApply: Od,
            onDelete: ed,
            onUseCurrentCamera: Rd
          }), document.body), rd && (0, NW.createPortal)((0, Cd.jsx)(SW, {
            anchor: rd,
            hasPlaybackMark: mJ,
            onClose: kJ,
            onMark: qJ,
            onZoom: xJ,
            onCrop: BJ,
            onDeleteKeyframes: sJ,
            onClearMark: iJ
          }), document.body), (0, Cd.jsxs)("div", {
            className: Wd()("ReplayTimelineOverviewSection", {
              Hidden: qd <= 1
            }),
            children: [(0, Cd.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Cd.jsxs)("div", {
              ref: ad,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: IJ,
              onPointerMove: GJ,
              onPointerUp: vJ,
              onPointerCancel: vJ,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Nd,
              "aria-valuenow": Vd,
              tabIndex: 0,
              children: [wJ.map((dd => {
                const Jd = QW(dd, Nd);
                return (0, Cd.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${Jd}%`
                  }
                }, dd)
              })), mJ && (0, Cd.jsxs)(Cd.Fragment, {
                children: [(0, Cd.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${jJ}%`,
                    width: `${XJ}%`
                  }
                }), (0, Cd.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${hJ}%`
                  },
                  "aria-hidden": !0
                }), (0, Cd.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${rJ}%`
                  },
                  "aria-hidden": !0
                })]
              }), WJ.map((dd => Jk(dd, "overview", kk(dd)))), (0, Cd.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${FJ}%`,
                  width: `${Math.max(YJ-FJ,.5)}%`
                }
              }), (0, Cd.jsx)("button", {
                type: "button",
                className: Wd()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Xd
                }),
                style: {
                  left: `${MJ}%`
                },
                onPointerDown: OJ("overview"),
                onPointerMove: eJ,
                onPointerUp: RJ,
                onPointerCancel: RJ,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Cd.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Cd.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Cd.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Cd.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [CW(zd, Zd), " \u2013 ", CW(Hd, Zd), qd > 1 && (0, Cd.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: KW(qd)
                })]
              })]
            }), (0, Cd.jsxs)("div", {
              ref: sd,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: lJ,
              onPointerMove: QJ,
              onPointerUp: LJ,
              onPointerCancel: LJ,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": zd,
              "aria-valuemax": Hd,
              "aria-valuenow": Vd,
              tabIndex: 0,
              children: [AJ.map((dd => {
                const Jd = ZW(dd, zd, Hd);
                return (0, Cd.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${Jd}%`
                  }
                }, dd)
              })), yJ && (0, Cd.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${fJ}%`,
                  width: `${UJ}%`
                }
              }), EJ && (0, Cd.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${DJ}%`
                },
                "aria-label": `Play range start at tick ${bJ}`
              }), cJ && (0, Cd.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${TJ}%`
                },
                "aria-label": `Play range end at tick ${SJ}`
              }), HJ && uJ && (0, Cd.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${tJ}%`,
                  width: `${zJ}%`
                }
              }), dk.map((dd => Jk(dd, "detail", kk(dd)))), (0, Cd.jsx)("button", {
                type: "button",
                className: Wd()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Xd
                }),
                style: {
                  left: `${aJ}%`
                },
                onPointerDown: OJ("detail"),
                onPointerMove: eJ,
                onPointerUp: RJ,
                onPointerCancel: RJ,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Cd.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Cd.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      XW = (0, pd.memo)((function(dd) {
        let {
          enabled: Jd
        } = dd;
        const kd = (0, pd.useRef)(!1),
          Nd = (0, pd.useRef)(null),
          [Pd, Zd] = (0, pd.useState)(!1),
          gd = (0, pd.useCallback)((dd => {
            Jd && 0 === dd.button && (kd.current = !0, Zd(!0), Nd.current = {
              x: dd.clientX,
              y: dd.clientY
            }, dd.currentTarget.setPointerCapture(dd.pointerId))
          }), [Jd]),
          Kd = (0, pd.useCallback)((dd => {
            if (!Jd || !kd.current || !Nd.current) return;
            const pd = dd.clientX - Nd.current.x,
              Wd = dd.clientY - Nd.current.y;
            Nd.current = {
              x: dd.clientX,
              y: dd.clientY
            }, ld.gameBridge.send("dragReplayCamera", {
              dx: pd,
              dy: Wd
            })
          }), [Jd]),
          od = (0, pd.useCallback)((dd => {
            kd.current && (kd.current = !1, Zd(!1), Nd.current = null, dd.currentTarget.releasePointerCapture(dd.pointerId))
          }), []);
        return Jd ? (0, Cd.jsx)("div", {
          className: Wd()("ReplayViewerCameraDragSurface", {
            Dragging: Pd
          }),
          onPointerDown: gd,
          onPointerMove: Kd,
          onPointerUp: od,
          onPointerCancel: od,
          "aria-hidden": !0
        }) : null
      }));
    var fW = kd(37154),
      nW = kd(37160);
    const UW = (0, pd.memo)((function(dd) {
        var Jd, kd, Nd;
        let {
          anchorRect: Pd,
          anchorRef: gd,
          onClose: Kd
        } = dd;
        const od = (0, pd.useRef)(null),
          ld = FW(od, Pd),
          [Qd, Ld] = (0, pd.useState)(nW.d),
          Od = (0, pd.useMemo)((() => Object.values(Qd).every((dd => dd))), [Qd]);
        (0, Zd.h)("replayViewer|uiVisibilityChanged", (() => {
          Ld((0, nW.d)())
        })), YW(od, Kd, gd);
        const ed = (0, pd.useCallback)(((dd, Jd) => {
            (0, nW.h)(dd, Jd), Ld((0, nW.d)())
          }), []),
          Rd = (0, pd.useCallback)((dd => {
            for (const {
                group: Jd
              }
              of fW.f)(0, nW.h)(Jd, dd);
            Ld((0, nW.d)())
          }), []),
          Id = MW(Pd);
        return (0, NW.createPortal)((0, Cd.jsxs)("div", {
          ref: od,
          className: Wd()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (Jd = null === ld || void 0 === ld ? void 0 : ld.placeBelow) && void 0 !== Jd && Jd,
            Positioned: null !== ld
          }),
          style: {
            left: `${null!==(kd=null===ld||void 0===ld?void 0:ld.left)&&void 0!==kd?kd:Id.left}px`,
            top: `${null!==(Nd=null===ld||void 0===ld?void 0:ld.top)&&void 0!==Nd?Nd:Id.top}px`
          },
          onPointerDown: dd => {
            dd.stopPropagation()
          },
          children: [(0, Cd.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Cd.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Cd.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Cd.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Cd.jsx)("input", {
                type: "checkbox",
                checked: Od,
                onChange: dd => {
                  Rd(dd.target.checked)
                }
              }), (0, Cd.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), fW.f.map((dd => {
              let {
                group: Jd,
                label: kd
              } = dd;
              return (0, Cd.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Cd.jsx)("input", {
                  type: "checkbox",
                  checked: Qd[Jd],
                  onChange: dd => {
                    ed(Jd, dd.target.checked)
                  }
                }), (0, Cd.jsx)("span", {
                  children: kd
                })]
              }, Jd)
            }))]
          })]
        }), document.body)
      })),
      yW = (0, pd.memo)((function(dd) {
        let {
          disabled: Jd
        } = dd;
        const kd = (0, pd.useRef)(null),
          [Nd, Wd] = (0, pd.useState)(!1),
          [Pd, Zd] = (0, pd.useState)(null),
          gd = (0, pd.useCallback)((() => {
            kd.current && (Zd(kd.current.getBoundingClientRect()), Wd((dd => !dd)))
          }), []),
          Kd = (0, pd.useCallback)((() => {
            Wd(!1)
          }), []);
        return (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)("div", {
            ref: kd,
            children: (0, Cd.jsx)(Fk.d, {
              className: "ReplayViewerActionButton",
              onClick: gd,
              disabled: Jd,
              children: (0, Cd.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Nd && Pd && (0, Cd.jsx)(UW, {
            anchorRect: Pd,
            anchorRef: kd,
            onClose: Kd
          })]
        })
      })),
      DW = ["freeCamUp", "freeCamDown"];

    function TW(dd, Jd) {
      ld.gameBridge.send("holdReplayFreecamVertical", {
        action: dd,
        EC: Jd
      })
    }
    const EW = (0, pd.memo)((function() {
        (0, pd.useEffect)((() => () => {
          ! function() {
            ld.gameBridge.send("moveReplayFreecam", null);
            for (const dd of DW) TW(dd, !1)
          }()
        }), []);
        const dd = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("moveReplayFreecam", dd)
          }), []),
          Jd = (0, pd.useCallback)((dd => ({
            onTouchStart: Jd => {
              Jd.preventDefault(), Jd.stopPropagation(), TW(dd, !0)
            },
            onTouchEnd: Jd => {
              Jd.preventDefault(), Jd.stopPropagation(), TW(dd, !1)
            },
            onTouchCancel: Jd => {
              Jd.preventDefault(), Jd.stopPropagation(), TW(dd, !1)
            }
          })), []);
        return (0, Cd.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Cd.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Cd.jsx)(iJ, {
              onMove: dd,
              mode: "pinned"
            })
          }), (0, Cd.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Cd.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...Jd("freeCamUp"),
              children: (0, Cd.jsx)(Ud.e, {
                name: "angle-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Cd.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...Jd("freeCamDown"),
              children: (0, Cd.jsx)(Ud.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      cW = [],
      hW = (0, pd.memo)((function() {
        const dd = (0, Vd.m)();
        return (0, Bd.d)("replayViewerRequested", (dd => {
          (0, Vd.i)("toggle" === dd ? !(0, Vd.f)() : "open" === dd)
        })), dd ? (0, Cd.jsx)(rW, {}) : null
      })),
      rW = (0, pd.memo)((function() {
        var dd, Jd, kd, Nd, Pd, Zd, gd, Kd, od, Qd, Ld, Od;
        const ed = pd.useRef(null),
          [Rd, Id] = (0, pd.useState)(null),
          [Gd, vd] = (0, pd.useState)(1),
          [xd, qd] = (0, pd.useState)(null),
          [Md, Fd] = (0, pd.useState)(!1),
          {
            isTouchScreen: Yd
          } = (0, sd.j)(["isTouchScreen"]),
          md = (0, Bd.k)("replay"),
          bd = (0, Bd.k)("replayEdits"),
          Sd = null !== md,
          jd = null !== (dd = null === md || void 0 === md ? void 0 : md.Do) && void 0 !== dd ? dd : 0,
          Xd = null !== (Jd = null === md || void 0 === md ? void 0 : md.totalTicks) && void 0 !== Jd ? Jd : 0,
          fd = Math.max(0, Xd - 1),
          yd = null !== (kd = null === md || void 0 === md ? void 0 : md.playing) && void 0 !== kd && kd,
          Dd = null !== (Nd = null === md || void 0 === md ? void 0 : md.speed) && void 0 !== Nd ? Nd : 1,
          Td = null !== (Pd = null === md || void 0 === md ? void 0 : md.AY) && void 0 !== Pd ? Pd : 20,
          Ed = null !== xd && void 0 !== xd ? xd : jd,
          cd = null !== (Zd = null === md || void 0 === md ? void 0 : md.freecam) && void 0 !== Zd && Zd,
          hd = null !== (gd = null === md || void 0 === md ? void 0 : md.cameraMode) && void 0 !== gd ? gd : "recording",
          rd = null !== (Kd = null === bd || void 0 === bd ? void 0 : bd.cameraKeyframes) && void 0 !== Kd ? Kd : cW,
          ud = null !== (od = null === bd || void 0 === bd ? void 0 : bd.playbackMark) && void 0 !== od ? od : null,
          td = null !== (Qd = null === bd || void 0 === bd ? void 0 : bd.fileName) && void 0 !== Qd ? Qd : null,
          zd = null !== (Ld = null === bd || void 0 === bd ? void 0 : bd.unsavedChanges) && void 0 !== Ld && Ld,
          Hd = null !== (Od = null === bd || void 0 === bd ? void 0 : bd.suggestSaveAs) && void 0 !== Od && Od,
          wd = (0, Bd.k)("replayVideoExporting"),
          Ad = !wd && Sd && ("freecam" === hd || ("recording" === hd || "keyframe" === hd) && !yd),
          dJ = Yd && Sd && "freecam" === hd && !wd && !Md;
        (0, pW.d)(!0, !0, "ReplayViewerOverlay"), (0, pd.useEffect)((() => {
          ld.gameBridge.send("syncReplayCameraMode", null)
        }), [cd]);
        const JJ = (0, pd.useCallback)(((dd, Jd) => {
            ld.gameBridge.send("seekReplay", {
              Do: dd,
              ignorePlaybackMark: null === Jd || void 0 === Jd ? void 0 : Jd.ignorePlaybackMark
            })
          }), []),
          kJ = (0, pd.useCallback)((() => {
            ld.gameBridge.send("setReplayPlaying", !1)
          }), []),
          pJ = (0, pd.useCallback)(((dd, Jd) => {
            ld.gameBridge.send("moveReplayCameraKeyframe", {
              from: dd,
              to: Jd
            })
          }), []),
          NJ = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("setReplayCameraKeyframe", dd)
          }), []),
          WJ = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("deleteReplayCameraKeyframes", {
              start: dd,
              end: dd
            })
          }), []),
          PJ = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("deleteReplayCameraKeyframes", {
              start: dd.startTick,
              end: dd.endTick
            })
          }), []),
          ZJ = (0, pd.useCallback)((() => ld.gameBridge.lookup("replayCamera", null)), []),
          gJ = (0, pd.useCallback)((dd => {
            qd(dd)
          }), []),
          CJ = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("setReplayPlaybackMark", {
              inTick: dd.startTick,
              outTick: dd.endTick
            })
          }), []),
          KJ = (0, pd.useCallback)((() => {
            ld.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          oJ = (0, pd.useCallback)((dd => {
            const Jd = ld.gameBridge.latest("replay");
            if (null === Jd || dd.endTick <= dd.startTick) return;
            const kd = dd.startTick,
              pd = dd.endTick;
            Ap.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((dd => {
              var Nd;
              if (!0 !== dd) return;
              if ((null === (Nd = ld.gameBridge.latest("replay")) || void 0 === Nd ? void 0 : Nd.id) !== Jd.id) return;
              ld.gameBridge.send("cropReplay", {
                start: kd,
                end: pd
              }) && (qd(null), vd(1))
            }))
          }), []),
          lJ = (0, pd.useCallback)(((dd, Jd) => {
            Id(null), vd(1), qd(null), (0, tN.c)().open(dd, Jd).catch((dd => {
              console.error(dd), Id(dd instanceof Error ? dd.message : "Failed to parse recording")
            }))
          }), []),
          QJ = (0, pd.useCallback)(((dd, Jd) => {
            null !== ld.gameBridge.latest("connectedGame").websocketUrl ? Ap.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((kd => {
              !0 === kd && lJ(dd, Jd)
            })) : lJ(dd, Jd)
          }), [lJ]),
          LJ = (0, pd.useCallback)((dd => {
            var Jd;
            const kd = null === (Jd = dd.target.files) || void 0 === Jd ? void 0 : Jd[0];
            if (dd.target.value = "", !kd) return;
            const pd = new FileReader;
            pd.onload = () => {
              QJ(new Uint8Array(pd.result), {
                fileName: kd.name
              })
            }, pd.onerror = () => {
              Id("Failed to read file")
            }, pd.readAsArrayBuffer(kd)
          }), [QJ]),
          OJ = (0, pd.useCallback)((() => {
            const dd = () => {
              var dd;
              null === (dd = ed.current) || void 0 === dd || dd.click()
            };
            (0, HN.i)() ? (0, HN.e)().then((dd => {
              dd && QJ(dd.bytes, {
                fileHandle: dd.handle
              })
            })).catch((Jd => {
              console.error(Jd), dd()
            })): dd()
          }), [QJ]),
          eJ = (0, pd.useCallback)((async function() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let Jd;
            try {
              Jd = await kW(dd, {
                files: (0, tN.c)(),
                pickerSupported: HN.i,
                chooseFile: HN.d,
                write: HN.l,
                download: zN.j,
                onFallback: console.error
              })
            } catch (kd) {
              return void(dd => {
                console.error(dd), Ap.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: AN(dd),
                  confirmText: "OK"
                })
              })(kd)
            }
            "written" !== Jd && "downloaded" !== Jd || (() => {
              const dd = Ap.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                dd.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          RJ = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("replayAction", dd)
          }), []),
          IJ = (0, pd.useCallback)((dd => {
            vd((Jd => oW(Jd, dd)))
          }), []),
          GJ = (0, pd.useCallback)((dd => {
            if (!ld.gameBridge.latest("replayVideoExporting")) switch (dd) {
              case "replayLoad":
                OJ();
                break;
              case "replaySave":
                eJ(!1);
                break;
              case "replaySaveAs":
                eJ(!0);
                break;
              case "replayTimelineZoomIn":
                IJ("in");
                break;
              case "replayTimelineZoomOut":
                IJ("out")
            }
          }), [OJ, eJ, IJ]);
        (0, Bd.d)("replayUiActionRequested", GJ);
        const vJ = (0, pd.useCallback)((dd => {
            ld.gameBridge.send("setReplayCameraMode", dd)
          }), []),
          xJ = Sd ? Fk.d : Fk.j,
          qJ = zd && !Hd ? Fk.j : Fk.d,
          BJ = zd && Hd ? Fk.j : Fk.d;
        return (0, Cd.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Cd.jsx)(XW, {
            enabled: Ad
          }), dJ && (0, Cd.jsx)(EW, {}), (0, Cd.jsx)("input", {
            ref: ed,
            type: "file",
            accept: zN.c,
            className: "ReplayViewerFileInput",
            onChange: LJ
          }), (0, Cd.jsxs)("div", {
            className: Wd()("ReplayViewerBar", {
              Collapsed: Md
            }),
            children: [(0, Cd.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Md ? Fd(!1) : Sd ? Fd(!0) : (0, Vd.d)()
              },
              "aria-expanded": !Md,
              "aria-label": Md ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Cd.jsx)(Ud.e, {
                name: Md ? "angle-up" : "angle-down"
              })
            }), !Md && (0, Cd.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Sd && Xd > 0 && (0, Cd.jsx)(jW, {
                maxTick: fd,
                displayTick: Ed,
                AY: Td,
                cameraKeyframes: rd,
                playbackMark: ud,
                onSeek: JJ,
                onPause: kJ,
                onScrubTickChange: gJ,
                onMoveCameraKeyframe: pJ,
                onUpdateCameraKeyframe: NJ,
                onDeleteCameraKeyframe: WJ,
                onUseCurrentCamera: ZJ,
                onMarkRange: CJ,
                onCropRange: oJ,
                onDeleteKeyframesInRange: PJ,
                onClearMark: KJ,
                zoomLevel: Gd,
                onZoomLevelChange: vd
              }, fd), (0, Cd.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Cd.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Cd.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Sd && (0, Cd.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== td && void 0 !== td ? td : "Unsaved recording", zd ? " *" : ""]
                    }), (0, Cd.jsxs)(xJ, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        GJ("replayLoad")
                      },
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Cd.jsxs)(Fk.d, {
                      className: "ReplayViewerActionButton",
                      onClick: Vd.d,
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Cd.jsxs)(qJ, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        GJ("replaySave")
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Cd.jsxs)(Fk.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ld.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Cd.jsxs)(BJ, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        GJ("replaySaveAs")
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Cd.jsxs)(Fk.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ld.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Sd || 0 === Xd || wd,
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Cd.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Cd.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Cd.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Cd.jsx)(ad.c, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Cd.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Cd.jsx)(nd.f, {
                        tooltipInner: (0, Cd.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Cd.jsxs)(Fk.G, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === hd,
                          onClick: () => {
                            vJ("recording")
                          },
                          disabled: !Sd,
                          children: ["Recorded ", (0, Cd.jsx)(Ud.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Cd.jsx)(nd.f, {
                        tooltipInner: (0, Cd.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Cd.jsxs)(Fk.G, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === hd,
                          onClick: () => {
                            vJ("freecam")
                          },
                          disabled: !Sd,
                          children: ["Free ", (0, Cd.jsx)(Ud.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Cd.jsx)(nd.f, {
                        tooltipInner: (0, Cd.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Cd.jsxs)(Fk.G, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === hd,
                          onClick: () => {
                            vJ("keyframe")
                          },
                          disabled: !Sd,
                          children: ["Preview ", (0, Cd.jsx)(Ud.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Cd.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Cd.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Cd.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Cd.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: CW(Ed, Td)
                      }), (0, Cd.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Cd.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: CW(fd, Td)
                      })]
                    }), (0, Cd.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Ed, " / ", fd]
                    })]
                  }), (0, Cd.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Cd.jsxs)(Fk.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        RJ("replaySkipBack")
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsxs)("span", {
                        children: [" ", (0, Cd.jsx)(Ud.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Cd.jsx)(ad.c, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Cd.jsxs)(Fk.j, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        ld.gameBridge.send("setReplayPlaying", !yd)
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsxs)("span", {
                        children: [" ", yd ? (0, Cd.jsx)(Ud.e, {
                          name: "pause"
                        }) : (0, Cd.jsx)(Ud.e, {
                          name: "play"
                        }), " "]
                      }), (0, Cd.jsx)(ad.c, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Cd.jsxs)(Fk.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        RJ("replaySkipForward")
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsxs)("span", {
                        children: [" ", (0, Cd.jsx)(Ud.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Cd.jsx)(ad.c, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Cd.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Cd.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Cd.jsxs)(Fk.j, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        RJ("replayRecordKeyframe")
                      },
                      disabled: !Sd,
                      children: [(0, Cd.jsx)(ad.c, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Cd.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Cd.jsx)(yW, {
                      disabled: !Sd
                    }), ud && (0, Cd.jsx)(Fk.G, {
                      className: "ReplayViewerActionButton",
                      onClick: KJ,
                      disabled: !Sd,
                      children: (0, Cd.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Cd.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Cd.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Cd.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Cd.jsx)(Fk.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          RJ("replaySpeedDown")
                        },
                        disabled: !Sd || (0, VN.d)(Dd),
                        children: (0, Cd.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Cd.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Dd, "\xd7"]
                      }), (0, Cd.jsx)(Fk.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          RJ("replaySpeedUp")
                        },
                        disabled: !Sd || (0, VN.c)(Dd),
                        children: (0, Cd.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Cd.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Cd.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Cd.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Cd.jsxs)(Fk.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          GJ("replayTimelineZoomOut")
                        },
                        disabled: !Sd || Gd <= WW[0],
                        children: [(0, Cd.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Cd.jsx)(ad.c, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Cd.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: KW(Gd)
                      }), (0, Cd.jsxs)(Fk.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          GJ("replayTimelineZoomIn")
                        },
                        disabled: !Sd || Gd >= WW[WW.length - 1],
                        children: [(0, Cd.jsx)("span", {
                          children: " + "
                        }), (0, Cd.jsx)(ad.c, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Cd.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Sd && "Load a recording to begin playback"
              }), Rd && (0, Cd.jsx)("div", {
                className: "ReplayViewerError",
                children: Rd
              })]
            })]
          })]
        })
      }));
    var uW = kd(1348);

    function tW() {
      const [, dd] = (0, pd.useState)(0);
      return (0, Zd.h)("replayViewer|uiVisibilityChanged", (() => {
          dd((dd => dd + 1))
        })), (0, Zd.h)("replayViewer|replayLoaded", (() => {
          dd((dd => dd + 1))
        })),
        function() {
          if (!(0, uW.g)()) return {};
          const dd = {
              [fW.e]: "true"
            },
            Jd = (0, nW.d)();
          for (const {
              group: kd,
              dataAttr: pd
            }
            of fW.f) pd && !Jd[kd] && (dd[pd] = "true");
          return dd
        }()
    }
    var VW = kd(9226),
      zW = kd(2036),
      HW = kd(8639),
      wW = kd(8630),
      AW = kd(2049);
    const dP = (0, pd.memo)((function() {
      var dd, Jd, kd;
      const Nd = (0, Gd.j)("customButtons");
      (0, pd.useEffect)((() => Nd ? (ld.gameBridge.send("bindCustomButtonKeys", Nd.filter(HW.f).map((dd => {
        let {
          id: Jd,
          keycode: kd
        } = dd;
        return {
          id: Jd,
          keycode: kd
        }
      }))), () => {
        ld.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Nd]);
      const Wd = null !== (dd = null === Nd || void 0 === Nd ? void 0 : Nd.filter(HW.f)) && void 0 !== dd ? dd : [],
        Pd = (0, wW.l)(),
        Zd = null !== (Jd = null === (kd = (0, AW.b)()) || void 0 === kd ? void 0 : kd.hideButtonHints) && void 0 !== Jd && Jd,
        gd = "customButton" !== (null === Pd || void 0 === Pd ? void 0 : Pd.kind) || Zd ? null : Pd.id,
        Kd = Wd.length > 0,
        od = (0, pd.useRef)(null);
      return (0, pd.useLayoutEffect)((() => {
        if (!Kd) return () => {};
        const dd = od.current,
          Jd = dd.closest(".InGameUi"),
          kd = () => {
            Jd.style.setProperty("--custom-buttons-top", `${dd.offsetTop}px`)
          };
        kd();
        const pd = new ResizeObserver(kd);
        return pd.observe(dd), pd.observe(dd.parentElement), () => {
          pd.disconnect(), Jd.style.removeProperty("--custom-buttons-top")
        }
      }), [Kd]), (0, Cd.jsx)("div", {
        ref: od,
        className: "" + ((0, eN.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Wd.map((dd => {
          var Jd, kd;
          return (0, Cd.jsx)(JP, {
            button: dd,
            padGlyph: dd.id === gd && null !== (Jd = null === (kd = (0, Ed.g)()) || void 0 === kd ? void 0 : kd.getBoundButton("actionButton")) && void 0 !== Jd ? Jd : null
          }, dd.id)
        }))
      })
    }));

    function JP(dd) {
      let {
        button: Jd,
        padGlyph: kd
      } = dd;
      const Nd = (0, pd.useRef)(null),
        Wd = () => {
          null !== Nd.current && (Nd.current = null, ld.gameBridge.send("pressCustomButton", {
            id: Jd.id,
            down: !1
          }))
        };
      (0, pd.useEffect)((() => Wd), []);
      const Pd = rJ(Wd, {
          pressesOnPointerDown: !0
        }),
        Zd = dd => {
          Nd.current === dd.pointerId && Wd()
        };
      return (0, Cd.jsxs)("div", {
        className: "CustomIcon",
        ...Pd,
        onLostPointerCapture: Zd,
        children: [(0, Cd.jsx)(zW.b, {
          icon: Jd.icon,
          keyboardHint: (0, HW.d)(Jd.keycode),
          padGlyph: kd,
          onPointerDown: dd => {
            try {
              dd.currentTarget.setPointerCapture(dd.pointerId)
            } catch {
              return
            }
            null === Nd.current && ld.gameBridge.send("pressCustomButton", {
              id: Jd.id,
              down: !0
            }), Nd.current = dd.pointerId
          },
          onPointerUp: Zd,
          onPointerCancel: Zd,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), Jd.description && (0, Cd.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: Jd.description
        })]
      })
    }
    var kP = kd(2354),
      pP = kd(256);
    const NP = {
      frame: dd => {
        const Jd = requestAnimationFrame((() => {
          dd()
        }));
        return () => {
          cancelAnimationFrame(Jd)
        }
      },
      afterFrame: dd => {
        const Jd = setTimeout(dd, 0);
        return () => {
          clearTimeout(Jd)
        }
      }
    };
    class WP {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pP.c,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NP;
        this.idle = dd, this.frames = Jd, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (dd(), () => {}) : (Jd ? this.waiting.unshift(dd) : this.waiting.push(dd), this.schedule(), () => {
          const Jd = this.waiting.indexOf(dd);
          Jd >= 0 && (this.waiting.splice(Jd, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((dd => {
          for (this.cancelIdle = null; this.waiting.length > 0 && dd.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const dd = this.waiting.shift();
        try {
          dd()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var dd, Jd, kd;
        null === (dd = this.cancelIdle) || void 0 === dd || dd.call(this), this.cancelIdle = null, null === (Jd = this.cancelFrame) || void 0 === Jd || Jd.call(this), this.cancelFrame = null, null === (kd = this.cancelAfterFrame) || void 0 === kd || kd.call(this), this.cancelAfterFrame = null
      }
    }
    const PP = (0, pd.createContext)(null);

    function ZP(dd) {
      let {
        children: Jd,
        first: kd = !1
      } = dd;
      const Nd = (0, pd.useContext)(PP),
        [Wd, Pd] = (0, pd.useState)(null === Nd);
      return (0, pd.useEffect)((() => {
        if (!Wd && null !== Nd) return Nd.request((() => {
          Pd(!0)
        }), kd)
      }), [kd, Wd, Nd]), Wd ? (0, pd.createElement)(pd.Fragment, null, Jd) : null
    }
    const gP = (0, pd.memo)((function(dd) {
        let {
          shown: Jd
        } = dd;
        const [kd] = (0, pd.useState)((() => new Ld.i(Jd))), [Nd] = (0, pd.useState)((() => Jd ? null : new WP));
        return (0, pd.useLayoutEffect)((() => {
          Jd && (null === Nd || void 0 === Nd || Nd.show(), kd.show())
        }), [Jd, kd, Nd]), (0, Cd.jsx)(Ld.e.Provider, {
          value: kd,
          children: (0, Cd.jsx)(PP.Provider, {
            value: Nd,
            children: (0, Cd.jsx)(CP, {})
          })
        })
      })),
      CP = (0, pd.memo)((function() {
        const {
          isUiHidden: dd,
          isUiHiddenByCamera: Jd,
          worldPanelHud: kd,
          isTouchScreen: Nd
        } = (0, sd.j)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Pd = (0, Hp.e)(), Zd = tW(), gd = (0, Ld.o)(), Kd = (0, pd.useRef)(null), od = (0, Gd.j)("showKillfeed");
        return function() {
            const dd = (0, Ld.o)();
            (0, pd.useEffect)((() => dd.whenShown(Od)), [dd])
          }(),
          function() {
            const dd = (0, Gd.j)("inventoryColourOverride");
            (0, pd.useEffect)((() => {
              if (!dd) return;
              const {
                panel: Jd,
                slot: kd,
                slotSelected: pd,
                slotUnavailable: Nd
              } = hd(dd), Wd = document.documentElement.style;
              return Wd.setProperty("--InventoryPanelColour", Jd), Wd.setProperty("--InventorySlotColour", kd), Wd.setProperty("--InventorySlotSelectedColour", pd), Wd.setProperty("--InventorySlotUnavailableColour", Nd), () => {
                Wd.removeProperty("--InventoryPanelColour"), Wd.removeProperty("--InventorySlotColour"), Wd.removeProperty("--InventorySlotSelectedColour"), Wd.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [dd])
          }(), (0, pd.useLayoutEffect)((() => gd.whenShown((() => {
            var dd;
            null === (dd = Kd.current) || void 0 === dd || dd.classList.remove("PreMounted")
          }))), [gd]), (0, Cd.jsxs)(Cd.Fragment, {
            children: [(0, Cd.jsxs)("div", {
              ref: Kd,
              className: Wd()("InGameUi", {
                PreMounted: !gd.shown,
                Hidden: dd,
                HiddenByCamera: Jd,
                HiddenByWorldPanel: null !== kd,
                WorldPanelTouchControl: "touchControls" === kd
              }),
              ...Zd,
              children: [(0, Cd.jsxs)(ZP, {
                children: [(0, Cd.jsx)(hk.e, {}), (0, Cd.jsx)(zk, {})]
              }), (0, Cd.jsx)(Ld.l, {
                children: (0, Cd.jsx)(Hk, {})
              }), (0, Cd.jsxs)(ZP, {
                children: [(0, Cd.jsx)(sN, {}), (0, Cd.jsx)(bN, {}), Nd && (0, Cd.jsx)(jN, {})]
              }), (0, Cd.jsxs)(ZP, {
                children: [(0, Cd.jsx)(Gk, {}), (0, Cd.jsx)(Kp.d, {}), (0, Cd.jsx)(Rp, {})]
              }), (0, Cd.jsx)(Ld.l, {
                children: (0, Cd.jsx)(ck, {})
              }), (0, Cd.jsxs)(ZP, {
                children: [(0, Cd.jsx)(FN.c, {}), (0, Cd.jsx)(hW, {})]
              }), (0, Cd.jsxs)(ZP, {
                children: [(0, Cd.jsx)(fN.f, {}), (0, Cd.jsx)(nN.d, {})]
              }), (0, Cd.jsx)(ZP, {
                children: (0, Cd.jsx)(xk.j, {})
              }), (0, Cd.jsx)(ZP, {
                children: (0, Cd.jsx)(eP, {
                  showChat: Pd
                })
              }), (0, Cd.jsxs)(ZP, {
                children: [(0, Cd.jsx)(yN, {}), (0, Cd.jsx)(MN, {})]
              }), (0, Cd.jsxs)("div", {
                className: Wd()("RightElements", {
                  RightElementsTouchscreen: Nd
                }),
                "data-camera-keeper-host": "",
                children: [(0, Cd.jsxs)("div", {
                  className: sp.k,
                  "data-holds-camera-keeper": "",
                  children: [(0, Cd.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Cd.jsx)(ZP, {
                      children: (0, Cd.jsx)(lN.c, {})
                    }), (0, Cd.jsxs)(ZP, {
                      children: [(0, Cd.jsx)(yd, {}), (0, Cd.jsx)(Yp.c, {})]
                    }), eN.featureFlags.useSocialFeatures && (0, Cd.jsx)(Ld.l, {
                      children: (0, Cd.jsx)(mp.b, {
                        placement: "inGame"
                      })
                    }), eN.featureFlags.useSocialFeatures && (0, Cd.jsx)(Ld.l, {
                      children: (0, Cd.jsx)(hp, {})
                    }), od && (0, Cd.jsx)(Ld.l, {
                      children: (0, Cd.jsx)(Cp, {})
                    }), (0, Cd.jsx)(ZP, {
                      children: (0, Cd.jsx)(VW.b, {})
                    })]
                  }), eN.featureFlags.useSocialFeatures && (0, Cd.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Cd.jsx)(ZP, {
                      children: (0, Cd.jsx)(qN.c, {})
                    })
                  })]
                }), (0, Cd.jsxs)(ZP, {
                  children: [(0, Cd.jsx)(xk.d, {
                    placement: "topRight"
                  }), (0, Cd.jsx)(RP, {})]
                })]
              }), (0, Cd.jsx)("div", {
                className: "LeftCentre",
                children: (0, Cd.jsx)(ZP, {
                  children: (0, Cd.jsx)(dP, {})
                })
              }), (0, Cd.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Nd ? "" : void 0,
                children: [(0, Cd.jsx)(Ld.l, {
                  children: (0, Cd.jsx)(bd, {})
                }), (0, Cd.jsx)(ZP, {
                  children: (0, Cd.jsx)(oP, {})
                }), (0, Cd.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Nd ? "" : void 0,
                  children: [(0, Cd.jsx)("div", {
                    className: Wd()("BottomLeftElements", {
                      Touch: Nd
                    }),
                    children: (0, Cd.jsxs)(ZP, {
                      children: [(0, Cd.jsx)(Vp, {}), !Nd && (0, Cd.jsx)(kP.e, {})]
                    })
                  }), (0, Cd.jsx)(ZP, {
                    children: (0, Cd.jsx)(OP, {})
                  }), (0, Cd.jsx)(ZP, {
                    children: (0, Cd.jsx)(Gp, {
                      isTouchScreen: Nd
                    })
                  })]
                })]
              }), (0, Cd.jsx)("div", {
                className: "MiddleLeft"
              }), Nd && (0, Cd.jsx)(ZP, {
                children: (0, Cd.jsx)(dk, {})
              }), (0, Cd.jsx)("div", {
                className: "CameraFadeHost",
                ref: vJ.h
              })]
            }), (0, Cd.jsx)(Ld.l, {
              children: (0, Cd.jsx)(uN.d, {})
            }), (0, Cd.jsx)(ZP, {
              first: !0,
              children: (0, Cd.jsx)(zp.c, {})
            }), (0, Cd.jsx)(Ld.l, {
              children: (0, Cd.jsx)(KP, {})
            })]
          })
      }));

    function KP() {
      return (0, pd.useEffect)((() => {
        const dd = setTimeout((() => {
          (0, vd.i)()
        }), 0);
        return () => {
          clearTimeout(dd), vd.j.vR(!1)
        }
      }), []), null
    }
    const oP = (0, pd.memo)((function() {
        const dd = (0, Zd.i)("aimingOverlay", "none");
        (0, Rd.b)();
        const Jd = (0, Gd.n)("middleTextUpper"),
          kd = (0, Gd.n)("middleTextLower");
        return (0, Cd.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === dd ? {
            visibility: "hidden"
          } : {},
          children: [(0, Cd.jsx)(LP, {
            text: Jd,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: lP
          }), (0, Cd.jsx)(LP, {
            text: kd,
            className: "MiddleText",
            maxHeightFraction: QP
          })]
        })
      })),
      lP = .3,
      QP = .2;

    function LP(dd) {
      let {
        text: Jd,
        className: kd,
        maxHeightFraction: Nd
      } = dd;
      const Wd = (0, pd.useRef)(null),
        Pd = (0, pd.useRef)(null);
      return function(dd, Jd, kd, Nd) {
        (0, pd.useLayoutEffect)((() => {
          const pd = dd.current,
            Nd = Jd.current;
          if (!pd || !Nd) return;
          let Wd = -1,
            Pd = -1;
          const Zd = dd => (Nd.style.setProperty("zoom", String(dd)), pd.getBoundingClientRect().height),
            gd = () => {
              const dd = document.documentElement.clientHeight * kd;
              let Jd = 1;
              if (Zd(1) > dd) {
                let kd = .5,
                  pd = 1;
                for (let Jd = 0; Jd < 6; Jd++) {
                  const Jd = (kd + pd) / 2;
                  Zd(Jd) <= dd ? kd = Jd : pd = Jd
                }
                Jd = kd
              }
              Pd = Zd(Jd), Wd = pd.getBoundingClientRect().width
            };
          gd();
          let Cd = 0;
          const Kd = () => {
              cancelAnimationFrame(Cd), Cd = requestAnimationFrame(gd)
            },
            od = new ResizeObserver((() => {
              const {
                width: dd,
                height: Jd
              } = pd.getBoundingClientRect();
              dd === Wd && Jd === Pd || Kd()
            }));
          return od.observe(pd), window.addEventListener("resize", Kd), () => {
            od.disconnect(), window.removeEventListener("resize", Kd), cancelAnimationFrame(Cd), Nd.style.removeProperty("zoom")
          }
        }), [dd, Jd, kd, Nd])
      }(Wd, Pd, Nd, Jd.content), (0, Cd.jsx)("div", {
        ref: Wd,
        className: "MiddleTextFit",
        children: (0, Cd.jsx)(UN, {
          ref: Pd,
          text: Jd,
          className: kd
        })
      })
    }
    const OP = (0, pd.memo)((function() {
        const dd = (0, Zd.i)("aimingOverlay", "none");
        (0, Rd.b)();
        const Jd = (0, Gd.j)("useInventory");
        return (0, Cd.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === dd ? {
            visibility: "hidden"
          } : {},
          children: [(0, Cd.jsx)(Kd, {}), (0, Cd.jsx)(xk.d, {}), (0, Cd.jsx)(qk, {}), (0, Cd.jsx)(Ld.l, {
            children: (0, Cd.jsx)(vN, {})
          }), (0, Cd.jsxs)("div", {
            className: "HotBarRow",
            children: [Jd ? (0, Cd.jsx)(Td.d, {}) : (0, Cd.jsx)(Td.e, {}), (0, Cd.jsx)(cd, {})]
          })]
        })
      })),
      eP = (0, pd.memo)((function(dd) {
        let {
          showChat: Jd
        } = dd;
        const {
          t: kd
        } = (0, md.B)(), {
          clientEscMenuOptions: Nd,
          isTouchScreen: Pd
        } = (0, sd.j)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, Rd.b)();
        const {
          userContext: Zd,
          isUserContextUpdating: gd
        } = (0, ed.c)(), Kd = (0, Gd.j)("hideCoordinates"), ld = (0, Gd.j)("customVariationTitle"), {
          requestedGameNameWithVariation: Qd,
          gameNameWithVariation: Ld,
          lobbyName: Od,
          shownLobbyName: vd
        } = (0, Bd.k)("connectedGame"), xd = (0, od.c)(Qd, Od, !1), [qd, ad] = (0, pd.useState)(null), Md = (0, LN.l)(Ld || Qd || ""), Fd = ld || Md || "";
        (0, pd.useEffect)((() => {
          gd || Sp.d.getFavouriteLobbies(Zd).then((dd => {
            console.log("Got favourite lobbies", dd), ad(dd)
          }))
        }), [gd, Zd]);
        const Yd = (0, pd.useRef)(null);
        return (0, pd.useLayoutEffect)((() => {
          const dd = Yd.current,
            Jd = document.documentElement,
            kd = new ResizeObserver((() => {
              Jd.style.setProperty("--InGameHeaderRowsHeight", `${dd.offsetHeight}px`)
            }));
          return kd.observe(dd), () => {
            kd.disconnect(), Jd.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), Fp(Yd), (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsxs)("div", {
            className: Wd()(sp.h, {
              Touchscreen: Pd
            }),
            ref: Yd,
            children: [(0, Cd.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Cd.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: dd => {
                  dd.stopPropagation(), dd.preventDefault()
                },
                onClick: () => {
                  sd.d.set({
                    openEverythingMenuName: Id.s.SETTINGS
                  })
                },
                children: [(0, Cd.jsx)(QN.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Cd.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Cd.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === xd && (0, Cd.jsx)(QN.b, {}), null !== xd && (0, Cd.jsxs)(Cd.Fragment, {
                  children: [xd, Fd && ` ${Fd}`]
                })]
              }), (0, Cd.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Cd.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: vd
              }), (0, ON.G)(Od) && (0, Cd.jsx)(nd.f, {
                tooltipInner: (0, Cd.jsx)("div", {
                  children: kd(null !== qd && qd.includes(Od) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Cd.jsx)("div", {
                  children: (0, Cd.jsx)(Fk.p, {
                    isLiked: null !== qd && qd.includes(Od),
                    onClick: () => {
                      try {
                        if (!qd) return;
                        qd.includes(Od) ? (Sp.d.unfavouriteLobby(Zd, Od).catch((dd => {
                          console.error("Failed to favourite lobby", dd)
                        })), ad(qd.filter((dd => dd !== Od)))) : (Sp.d.favouriteLobby(Zd, Od).catch((dd => {
                          console.error("Failed to favourite lobby", dd)
                        })), ad([...qd, Od]))
                      } catch (dd) {
                        console.error("Failed to like lobby", dd)
                      }
                    },
                    isLoading: null === qd
                  })
                })
              }), (0, Cd.jsx)(cN, {})]
            }), (0, Cd.jsx)(ZN, {
              show: Nd.showFPS
            }), !Kd && Nd.showCoordinates && (0, Cd.jsx)(KN, {}), !Kd && Nd.showChunkCoordinates && (0, Cd.jsx)(oN, {}), (0, Cd.jsx)(DN, {})]
          }), (0, Cd.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Cd.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: Jd && (0, Cd.jsx)(td.e, {})
            })
          })]
        })
      })),
      RP = (0, pd.memo)((function() {
        (0, Rd.b)();
        const dd = (0, Gd.n)("RightInfoText"),
          [Jd, kd] = (0, pd.useState)(null);
        return (0, OJ.i)(Jd, ".RightElements"), dd.hasText ? (0, Cd.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Cd.jsx)(UN, {
            ref: kd,
            text: dd,
            className: "RightInfoDiv",
            children: (0, Cd.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Cd.jsx)(gd.c, {
                text: dd.content
              })
            })
          })
        }) : null
      }))
  },
  4726: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd
    });
    var pd = kd(56),
      Nd = kd(300),
      Wd = kd(1924),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        text: Jd
      } = dd;
      const kd = [];
      let Zd = "";
      return (0, Nd.Wb)(Jd).forEach(((dd, Jd) => {
        if ("string" === typeof dd || !(0, Wd.f)(dd.icon)) return void(Zd += "string" === typeof dd ? dd : dd.icon);
        const Nd = Math.max(0, Zd.trimEnd().search(/\S{1,12}$/));
        kd.push((0, Pd.jsxs)(pd.Fragment, {
          children: [Zd.slice(0, Nd), (0, Pd.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Zd.slice(Nd), (0, Pd.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": dd.icon,
              children: (0, Pd.jsx)(Wd.d, {
                itemName: dd.icon,
                amount: 0
              })
            })]
          })]
        }, Jd)), Zd = ""
      })), kd.push(Zd), (0, Pd.jsx)(Pd.Fragment, {
        children: kd
      })
    }
  },
  36701: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld,
      f: () => Kd,
      g: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1924),
      Zd = kd(1103);
    const gd = 350;
    let Cd = 0;

    function Kd() {
      return Cd += 1, Cd
    }

    function od(dd, Jd) {
      let kd = 0;
      for (const pd of dd) "ingredient" !== pd.kind && pd.wg === Jd && (kd += pd.amount);
      return kd > 0 ? {
        idx: Jd,
        amount: kd
      } : null
    }

    function ld(dd) {
      var Jd, kd;
      let {
        anim: Nd,
        onComplete: Cd
      } = dd;
      const Kd = null !== (Jd = Nd.delayMs) && void 0 !== Jd ? Jd : 0,
        od = null !== (kd = Nd.durationMs) && void 0 !== kd ? kd : gd,
        [ld, Qd] = (0, pd.useState)(Nd.from),
        [Ld, Od] = (0, pd.useState)(0 === Kd),
        [ed, Rd] = (0, pd.useState)(!1),
        Id = (0, pd.useRef)(!1);
      return (0, pd.useEffect)((() => {
        let dd, Jd;
        const kd = () => {
            Id.current = !0, Od(!0), dd = requestAnimationFrame((() => {
              Jd = requestAnimationFrame((() => {
                Qd({
                  x: Nd.to.x,
                  y: Nd.to.y
                }), Rd(!0)
              }))
            }))
          },
          pd = Id.current ? 0 : Kd;
        let Wd;
        pd > 0 ? Wd = setTimeout(kd, pd) : kd();
        const Pd = setTimeout((() => {
          Cd(Nd.id)
        }), pd + od + 50);
        return () => {
          clearTimeout(Wd), cancelAnimationFrame(dd), cancelAnimationFrame(Jd), clearTimeout(Pd)
        }
      }), [Nd.id, Nd.to.x, Nd.to.y, Cd, Kd, od]), (0, Zd.jsx)("div", {
        className: Wd()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Nd.kind,
          Waiting: !Ld,
          Arrived: ed
        }),
        style: {
          left: ld.x,
          top: ld.y,
          "--fly-duration": `${od}ms`
        },
        children: (0, Zd.jsx)(Pd.d, {
          itemName: Nd.itemName,
          amount: Nd.amount
        })
      })
    }
  },
  36677: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => fd,
      e: () => yd
    });
    var pd = kd(56),
      Nd = kd(2851),
      Wd = kd(6435),
      Pd = kd(2036),
      Zd = kd(2357),
      gd = kd(8749),
      Cd = kd(313),
      Kd = kd(29),
      od = kd(1459),
      ld = kd(33),
      Qd = kd(1044),
      Ld = kd.n(Qd),
      Od = kd(300),
      ed = kd(36686),
      Rd = kd(1904),
      Id = kd(1968),
      Gd = kd(8593),
      vd = kd(1103);

    function xd(dd) {
      var Jd, kd;
      let {
        slotIdx: Wd
      } = dd;
      const Pd = (0, Id.g)("hotbar", (dd => {
          var Jd;
          return null !== (Jd = dd.items[Wd]) && void 0 !== Jd ? Jd : null
        })),
        gd = (0, Id.g)("hotbar", (dd => dd.ammo)),
        [Kd, od] = (0, pd.useState)(!1),
        ld = (0, pd.useRef)(null),
        [Qd, Od] = (0, pd.useState)(null),
        [ed, xd] = (0, pd.useState)(null),
        qd = (0, Zd.j)("maxAuraLevel"),
        Bd = (0, Nd.b)(),
        sd = (0, pd.useCallback)((() => {
          if (clearTimeout(ld.current), Pd) {
            var dd, Jd, kd, pd;
            const gd = Pd.displayName,
              Kd = [],
              od = Array.isArray(gd) ? gd : [gd],
              ld = {
                fontStyle: null !== (dd = Pd.attributes.customAttributes) && void 0 !== dd && dd.author ? "italic" : "normal"
              };
            for (const dd of od) dd.str ? Kd.push(dd) : Kd.push({
              str: dd,
              style: ld
            });
            if (null !== (Jd = Pd.attributes.customAttributes) && void 0 !== Jd && Jd.enchantments) {
              Kd.push(" ");
              const dd = Object.entries(Pd.attributes.customAttributes.enchantments).sort(((dd, Jd) => Jd[1] - dd[1])),
                Jd = Pd.attributes.customAttributes.enchantmentData;
              for (const [kd, pd] of dd) {
                var Nd, Wd;
                const dd = null !== (Nd = null === Jd || void 0 === Jd || null === (Wd = Jd[kd]) || void 0 === Wd ? void 0 : Wd.icon) && void 0 !== Nd ? Nd : `${kd} Enchantment`;
                var Zd;
                if (pd < 4)
                  for (let Jd = 0; Jd < pd; Jd++) Kd.push({
                    icon: dd,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Kd.push({
                  icon: dd,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Kd.push(null !== (Zd = (0, Cd.V)(pd)) && void 0 !== Zd ? Zd : pd.toString())
              }
            }
            Od(Kd), xd(null !== (kd = null === (pd = Pd.attributes.customAttributes) || void 0 === pd ? void 0 : pd.enchantmentTier) && void 0 !== kd ? kd : null)
          } else Od(null), xd(null);
          od(!0), Bd();
          const gd = null === Pd || void 0 === Pd ? void 0 : Pd.attributes.customAttributes;
          void 0 === (null === gd || void 0 === gd ? void 0 : gd.shotsLeft) && (ld.current = setTimeout((() => {
            od(!1)
          }), 2e3))
        }), [null === Pd || void 0 === Pd ? void 0 : Pd.name, Wd, null === Pd || void 0 === Pd ? void 0 : Pd.instance, null === Pd || void 0 === Pd ? void 0 : Pd.displayName]);
      (0, pd.useEffect)((() => (sd(), () => {
        clearTimeout(ld.current), od(!1)
      })), [null === Pd || void 0 === Pd ? void 0 : Pd.name, Wd, null === Pd || void 0 === Pd ? void 0 : Pd.instance, sd]);
      const ad = null === Pd || void 0 === Pd || null === (Jd = Pd.attributes.customAttributes) || void 0 === Jd ? void 0 : Jd.shotsLeft,
        Md = void 0 === ad ? null : (0, vd.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${ad}|${Pd.requiresAmmo?`${gd}x${Pd.clipSize}`:Pd.clipSize}`
        }),
        Fd = (0, Gd.h)();
      return (0, vd.jsx)(vd.Fragment, {
        children: Kd && Pd && !Fd.showing ? (0, vd.jsxs)("div", {
          className: Ld()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === qd,
            Enchanted: null !== ed
          }),
          style: {
            "--enchantmentColour": null !== (kd = Cd.tb[ed]) && void 0 !== kd ? kd : Cd.tb.None,
            "--duration": ed ? (0, Cd.nb)(ed) + "s" : void 0
          },
          children: [ed && (0, vd.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, vd.jsx)(Rd.c, {
              text: Qd
            }), Md]
          }), (0, vd.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, vd.jsx)(Rd.c, {
              text: Qd
            }), Md]
          })]
        }) : null
      })
    }
    var qd = kd(36701),
      Bd = kd(22),
      sd = kd(1932),
      ad = kd(610),
      Md = kd(2365),
      Fd = kd(3240),
      Yd = kd(3247);
    var md = kd(1131),
      bd = kd(1124),
      Sd = kd(2405);

    function jd() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Xd = kd(1482);
    const fd = (0, pd.memo)((function() {
      const [dd, Jd] = (0, pd.useState)(0), kd = (0, Zd.j)("useFullInventory"), Pd = (0, Zd.j)("highlightedHotbarSlots"), {
        isTouchScreen: gd,
        openInGameMenuName: Cd
      } = (0, Bd.j)(["isTouchScreen", "openInGameMenuName"]), ld = null !== Cd && "inventory" !== Cd, Qd = (0, Id.k)("fullInventory") && "inventory" === Cd, Od = function() {
        const dd = (0, md.k)(((dd, Jd) => `${dd}:${(0,bd.b)(dd,Jd)?"portrait":"landscape"}`)),
          [Jd, kd] = (0, pd.useState)(jd);
        return (0, pd.useLayoutEffect)((() => {
          kd(jd())
        }), [dd]), (0, od.h)(Sd.e, (() => {
          kd(jd())
        })), Jd
      }(), Rd = gd && !Od;
      ! function(dd, Jd, kd) {
        (0, pd.useLayoutEffect)((() => {
          const pd = document.documentElement.classList;
          return dd && (pd.add("TouchHotbar"), pd.toggle("TouchHotbarKeysAbove", Jd), pd.toggle("TouchHotbarHasBag", kd)), (0, Fd.g)(), Kd.j.nO(Yd.b), () => {
            pd.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Fd.g)(), Kd.j.nO(Yd.b)
          }
        }), [dd, Jd, kd])
      }(gd, Rd, kd);
      const [Gd, Md] = (0, Wd.d)("changedHotbarUsingNumkeys", !0), Xd = (0, Id.g)("hotbar", (dd => dd.selectedSlot)), fd = null !== Xd && void 0 !== Xd ? Xd : dd, Dd = (0, Nd.b)(), Td = (0, pd.useRef)(null), cd = (0, od.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, od.h)("inventoryDraggedItemUpdated", (dd => {
        Td.current = dd, Dd()
      })), (0, Id.d)("hotbarScrolled", (dd => {
        null === Xd && rd(dd)
      })), (0, Id.d)("hotbarSlotRequested", (dd => {
        hd(dd), Md(!1)
      })), (0, Id.d)("numberKeyPressed", (() => {
        Md(!1)
      })), (0, Id.d)("hotbarDropRequested", (dd => {
        const Jd = sd.gameBridge.latest("hotbar").items[fd];
        if (Jd) {
          var kd;
          const pd = dd && null !== (kd = Jd.amount) && void 0 !== kd ? kd : 1;
          sd.gameBridge.send("removeInventoryItem", {
            slot: fd,
            amount: pd,
            drop: !0
          })
        }
      }));
      const hd = dd => {
          sd.gameBridge.send("selectHotbarSlot", dd), Jd(dd)
        },
        rd = dd => {
          hd((fd + dd + ad.o) % ad.o)
        };
      let ud, td = null,
        Vd = null,
        zd = dd => dd => {},
        Hd = dd => Jd => {
          hd(dd)
        },
        wd = dd => dd => {},
        Ad = [];
      if (Qd) {
        var dJ;
        const dd = Td.current;
        if (null === dd || void 0 === dd || !dd.setHovered) return (0, vd.jsx)("div", {
          className: Ld()("HotBarContainer", {
            Touch: gd,
            KeysAbove: Rd
          }),
          children: (0, vd.jsx)("div", {
            className: "HotBar"
          })
        });
        td = dd.draggedInfo, Vd = dd.specialItemInfo, zd = dd.setHovered, Hd = dd.pointerDown, wd = dd.pointerUp, ud = dd.variation, Ad = null !== (dJ = dd.craftFlyAnims) && void 0 !== dJ ? dJ : []
      }
      return (0, vd.jsxs)("div", {
        className: Ld()("HotBarContainer", {
          Touch: gd,
          PopupOpen: gd && ld,
          KeysAbove: Rd
        }),
        children: [(0, vd.jsxs)("div", {
          className: Ld()("HotBar", {
            HoverDisabled: cd
          }),
          children: [gd && (0, vd.jsxs)(vd.Fragment, {
            children: [(0, vd.jsx)(Ud, {
              useFullInventory: kd,
              inventoryOpen: Qd
            }), (0, vd.jsx)(nd, {
              direction: "Previous",
              onPress: () => {
                rd(-1)
              }
            })]
          }), !gd && (0, vd.jsxs)(vd.Fragment, {
            children: [(0, vd.jsx)(yd, {}), (0, vd.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, vd.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((dd, Jd) => (0, vd.jsx)(ed.b, {
              idx: Jd,
              draggedInfo: td,
              specialItemInfo: Vd,
              craftFlyHoldbackInfo: (0, qd.g)(Ad, Jd),
              setHovered: zd(Jd),
              pointerDown: Hd(Jd),
              pointerUp: wd(Jd),
              variation: ud,
              isSelected: Jd === fd,
              hotbarHighlighted: !0 === (null === Pd || void 0 === Pd ? void 0 : Pd.includes(Jd)),
              hoverDisabled: cd,
              showNumber: Gd && !gd
            }, Jd)))
          }), gd && (0, vd.jsx)(nd, {
            direction: "Next",
            onPress: () => {
              rd(1)
            }
          }), !gd && (0, vd.jsxs)(vd.Fragment, {
            children: [(0, vd.jsx)("div", {
              className: "HotBarFiller"
            }), (0, vd.jsx)("div", {
              className: Ld()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !kd
              }),
              onPointerDown: () => {
                Kd.j.nO("toggleMenu", "inventory")
              },
              children: (0, vd.jsx)(Ed, {})
            })]
          })]
        }), (0, vd.jsx)(xd, {
          slotIdx: fd
        })]
      })
    }));

    function nd(dd) {
      let {
        direction: Jd,
        onPress: kd
      } = dd;
      return (0, vd.jsx)("div", {
        className: Ld()("HotBarArrow", Jd),
        ...Xd.f,
        children: (0, vd.jsx)(Pd.b, {
          icon: "Previous" === Jd ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: kd
        })
      })
    }
    const Ud = (0, pd.memo)((function(dd) {
        let {
          useFullInventory: Jd,
          inventoryOpen: kd
        } = dd;
        const Nd = (0, Zd.j)("maxAuraLevel"),
          Wd = (0, pd.useRef)(null);
        return function(dd, Jd, kd) {
          (0, pd.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", Jd), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [Jd]), (0, pd.useLayoutEffect)((() => {
            const Jd = dd.current.closest(".BottomMiddleElements");
            return Jd.classList.toggle("TouchInventoryOpen", kd), () => {
              Jd.classList.remove("TouchInventoryOpen")
            }
          }), [dd, kd])
        }(Wd, (0, gd.b)(), kd), (0, vd.jsxs)("div", {
          ref: Wd,
          className: Ld()("TouchInventoryKeys", {
            NoAuraBar: 0 === Nd,
            InventoryOpen: kd
          }),
          children: [(0, vd.jsx)(yd, {
            touchKey: !0
          }), (0, vd.jsx)("div", {
            className: Ld()("TouchInventoryKey BagKey", {
              Hidden: !Jd
            }),
            ...Xd.f,
            children: (0, vd.jsx)(Ed, {
              touchKey: !0
            })
          })]
        })
      })),
      yd = (0, pd.memo)((function(dd) {
        let {
          touchKey: Jd = !1
        } = dd;
        const kd = (0, gd.b)();
        return (0, vd.jsx)("div", {
          className: Jd ? Ld()("TouchInventoryKey ShopKey", {
            Hidden: !kd
          }) : Ld()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !kd
          }),
          ...Jd ? Xd.f : {},
          children: (0, vd.jsx)(Pd.b, {
            icon: (0, Cd.kc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              kd && Bd.d.set({
                openEverythingMenuName: Od.s.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Dd(dd) {
      let {
        player: Jd
      } = dd;
      return Jd.some((dd => null !== dd && Cd.ad.includes(dd.name)))
    }

    function Td(dd) {
      dd.creative || ld.i.getItem("LogInInventoryRedDotTutorialComplete") || (Dd(dd) ? (Kd.j.nO("RedDotOpenInventoryIcon", !0), Kd.j.nO("TouchTutorialOpenInventoryIcon", !0)) : (Kd.j.nO("RedDotOpenInventoryIcon", !1), Kd.j.nO("TouchTutorialOpenInventoryIcon", !1)))
    }
    const Ed = (0, pd.memo)((function(dd) {
      let {
        touchKey: Jd = !1
      } = dd;
      const {
        backpackPointerRequested: kd
      } = (0, Bd.j)(["backpackPointerRequested"]);
      (0, pd.useEffect)((() => {
        Td(sd.gameBridge.latest("inventory"))
      }), []), (0, Id.d)("inventory", Td);
      const Nd = (0, Md.o)();
      return (0, od.h)("toggleMenu", (dd => {
        Nd.shown && (null !== dd && void 0 !== dd && dd.startsWith("inventory") && Dd(sd.gameBridge.latest("inventory")) ? (ld.i.setItem("LogInInventoryRedDotTutorialComplete", !0), Kd.j.nO("RedDotOpenInventoryIcon", !1), Kd.j.nO("TouchTutorialOpenInventoryIcon", !1)) : "shop" === dd && Kd.j.nO("showShopTouchTutorial", !1))
      })), Jd ? (0, vd.jsx)(Pd.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Kd.j.nO("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: kd,
        touchIconPosition: "topleft"
      }) : (0, vd.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Kd.j.nO("toggleMenu", "inventory")
        },
        children: (0, vd.jsx)(Pd.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: dd => {
            Kd.j.nO("toggleMenu", "inventory"), dd.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: kd,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36686: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ed,
      d: () => Ld
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1928),
      Zd = kd(1924),
      gd = kd(1932),
      Cd = kd(1968),
      Kd = kd(36692),
      od = kd(9250),
      ld = kd(1404),
      Qd = kd(1103);
    const Ld = (dd, Jd, kd) => {
      let pd = Jd,
        Nd = !1;
      for (const Wd of kd)(null === Wd || void 0 === Wd ? void 0 : Wd.idx) === dd && (Nd = !0, pd > 0 && (pd -= Wd.amount));
      return {
        displayedAmt: pd,
        shown: !Nd || pd > 0
      }
    };
    const Od = dd => {
        let {
          idx: Jd
        } = dd;
        return (0, ld.m)() ? null : (0, Qd.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: Jd < 9 ? Jd + 1 : 0
        })
      },
      ed = (0, pd.memo)((function(dd) {
        var Jd, kd, pd;
        let {
          idx: Nd,
          setHovered: ld,
          pointerDown: ed,
          pointerUp: Rd,
          draggedInfo: Id,
          specialItemInfo: Gd,
          craftFlyHoldbackInfo: vd,
          defaultIconB64: xd = null,
          variation: qd,
          isSelected: Bd = !1,
          hotbarHighlighted: sd = !1,
          hoverDisabled: ad = !1,
          showNumber: Md = !1,
          showNewDot: Fd = !1
        } = dd;
        const Yd = (0, Cd.g)("inventory", (dd => Nd === Kd.g ? null : (0, od.f)(dd, Nd)));
        let md, bd, Sd, jd;
        if (Nd === Kd.g) Gd && (md = Gd.name, Sd = Gd.amount, jd = Gd.attributes);
        else if (Yd) {
          var Xd;
          md = Yd.name, bd = Yd.icon, Sd = null !== (Xd = Yd.amount) && void 0 !== Xd ? Xd : 0, jd = Yd.attributes
        }
        const fd = null === (Jd = jd) || void 0 === Jd || null === (kd = Jd.customAttributes) || void 0 === kd ? void 0 : kd.enchantmentTier,
          nd = (0, Pd.f)(jd),
          {
            displayedAmt: Ud,
            shown: yd
          } = Ld(Nd, Sd, [Id, Gd, vd]),
          Dd = md && yd,
          Td = void 0 !== qd && function(dd, Jd) {
            const {
              enchantable: kd,
              salvageable: pd
            } = gd.gameBridge.latest("stationItems");
            return "Enchanting Table" === dd ? !0 === kd[Jd] : "Salvaging Table" === dd && !0 === pd[Jd]
          }(qd, md);
        return (0, Qd.jsxs)("div", {
          className: Wd()("InvenItem", {
            Highlighted: Dd && Td,
            Selected: Bd,
            HotbarHighlighted: sd,
            HoverDisabled: ad
          }),
          onPointerEnter: () => {
            null === ld || void 0 === ld || ld(!0)
          },
          onPointerLeave: () => {
            null === ld || void 0 === ld || ld(!1)
          },
          onPointerDown: ed,
          onPointerUp: Rd,
          "data-inven-idx": Nd,
          children: [Dd && (0, Qd.jsx)(Zd.d, {
            itemName: null !== (pd = bd) && void 0 !== pd ? pd : md,
            amount: Ud,
            enchantmentTier: fd,
            bar: nd
          }), Dd && Fd && (0, Qd.jsx)("div", {
            className: "InvenItemNewDot"
          }), Md && (0, Qd.jsx)(Od, {
            idx: Nd
          }), xd && !Dd && (0, Qd.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${xd})`
            }
          })]
        })
      }))
  },
  9242: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(313),
      Nd = kd(9247);

    function Wd(dd, Jd, kd) {
      const Wd = Object.entries(Jd).sort(((dd, Jd) => Jd[1] - dd[1])),
        Pd = (0, pd.yb)(dd);
      Pd.push(dd ? "\n\n" : "\n");
      for (const [Nd, Ld] of Wd) {
        var Zd, gd, Cd;
        const dd = null !== (Zd = null === kd || void 0 === kd || null === (gd = kd[Nd]) || void 0 === gd ? void 0 : gd.icon) && void 0 !== Zd ? Zd : `${Nd} Enchantment`;
        Pd.push({
          icon: dd,
          style: {
            fontSize: "1.5rem"
          }
        }), Pd.push({
          str: `${Nd} ${null!==(Cd=(0,pd.V)(Ld))&&void 0!==Cd?Cd:Ld}\n`
        })
      }
      Pd.push({
        str: "\n"
      });
      for (const [pd, Ld] of Wd) {
        var Kd, od, ld, Qd;
        const dd = null !== (Kd = null === kd || void 0 === kd || null === (od = kd[pd]) || void 0 === od ? void 0 : od.icon) && void 0 !== Kd ? Kd : `${pd} Enchantment`,
          Jd = null !== (ld = null === kd || void 0 === kd || null === (Qd = kd[pd]) || void 0 === Qd ? void 0 : Qd.description) && void 0 !== ld ? ld : (0, Nd.k)(pd);
        Pd.push({
          icon: dd,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Pd.push({
          str: Jd,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Pd.push({
          str: "\n"
        })
      }
      return Pd
    }
  },
  36692: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      g: () => Nd
    });
    const pd = -1,
      Nd = -2
  },
  9250: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      c: () => Id,
      e: () => ed,
      f: () => gd,
      g: () => Rd,
      i: () => Kd,
      l: () => ld,
      o: () => Od,
      s: () => od
    });
    var pd = kd(300),
      Nd = kd(610),
      Wd = kd(313),
      Pd = kd(4085),
      Zd = kd(9242);

    function gd(dd, Jd) {
      var kd;
      let {
        player: pd,
        chestOrCreative: Nd
      } = dd;
      var Wd;
      return Jd < pd.length ? null !== (Wd = pd[Jd]) && void 0 !== Wd ? Wd : null : null !== (kd = Nd[Jd - pd.length]) && void 0 !== kd ? kd : null
    }

    function Cd(dd) {
      var Jd;
      return null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : 0
    }

    function Kd(dd) {
      return 0 === dd.button || void 0 === dd.button
    }

    function od(dd) {
      return !!dd.shiftKey
    }

    function ld(dd) {
      return "touches" in dd || "touch" === dd.pointerType || "pen" === dd.pointerType
    }
    const Qd = new Set,
      Ld = 50;

    function Od(dd, Jd) {
      var kd;
      const pd = null === (kd = dd[Jd]) || void 0 === kd ? void 0 : kd.displayName;
      return (0, Nd.I)(pd) ? "string" !== typeof Jd ? "" : (!Qd.has(Jd) && Qd.size < Ld && (Qd.add(Jd), console.warn(`No item called "${Jd}", so its hover shows the name as given`)), Jd) : pd
    }

    function ed(dd, Jd, kd) {
      var gd, Cd, Kd, od, ld, Qd, Ld, ed, Rd, Id, Gd, vd, xd, qd;
      const Bd = dd.attributes,
        sd = null !== (gd = null === (Cd = Jd[dd.name]) || void 0 === Cd ? void 0 : Cd.rootName) && void 0 !== gd ? gd : dd.name,
        ad = null !== (Kd = null !== (od = Bd.customDisplayName) && void 0 !== od ? od : null === (ld = Jd[dd.name]) || void 0 === ld ? void 0 : ld.displayName) && void 0 !== Kd ? Kd : Od(Jd, sd);
      let Md = ad;
      const Fd = null === (Qd = Bd.customAttributes) || void 0 === Qd ? void 0 : Qd.enchantmentTier;
      Fd && (Md = (0, Wd.yb)(ad, {
        colour: Wd.tb[Fd]
      }));
      const Yd = null !== (Ld = null !== (ed = null !== (Rd = function(dd, Jd) {
        var kd;
        if (void 0 === dd || null !== (kd = Jd.customAttributes) && void 0 !== kd && kd.author) return dd;
        const Nd = (0, pd.Wb)(dd);
        return Nd.every((dd => "string" === typeof dd)) ? dd : Nd.map((dd => "string" === typeof dd ? dd : {
          icon: dd.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Bd.customDescription, Bd)) && void 0 !== Rd ? Rd : null === (Id = Jd[dd.name]) || void 0 === Id ? void 0 : Id.description) && void 0 !== ed ? ed : null === (Gd = Jd[sd]) || void 0 === Gd ? void 0 : Gd.description) && void 0 !== Ld ? Ld : "";
      let md = Yd;
      if (null !== (vd = Bd.customAttributes) && void 0 !== vd && vd.enchantments) md = (0, Zd.d)(Yd, Bd.customAttributes.enchantments, Bd.customAttributes.enchantmentData);
      else if (kd[sd]) md = (0, Wd.yb)(Yd), md.push({
        str: "\n"
      }), md.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (xd = Bd.customAttributes) && void 0 !== xd && xd.mobSettings) {
        var bd, Sd;
        const dd = Bd.customAttributes.mobSettings;
        var jd, Xd;
        if (md = [], (0, Nd.I)(Bd.customAttributes.health) || (md.push({
            str: "\n"
          }), md.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: Bd.customAttributes.health.toString()
          }), (0, Nd.I)(dd.maxHealth) || (md.push({
            str: "/"
          }), md.push({
            str: dd.maxHealth.toString()
          }))), !(0, Nd.I)(dd.attackDamage) && dd.attackDamage > 0 && (md.push({
            str: "\n"
          }), md.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: dd.attackDamage.toString()
          })), !(0, Nd.I)(dd.secondaryAttackDamage) && dd.secondaryAttackDamage > 0 && (md.push({
            str: "\n"
          }), md.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: dd.secondaryAttackDamage.toString()
          })), (0, Nd.I)(dd.baseRunningSpeed) || (md.push({
            str: "\n"
          }), md.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: " "
          }), md.push({
            str: dd.baseRunningSpeed.toFixed(2)
          })), "Saddled" === dd.metaInfo) md.push({
          str: "\n"
        }), md.push({
          str: {
            translationKey: "general:has"
          }
        }), md.push({
          str: " "
        }), md.push({
          icon: null !== (jd = null === (Xd = dd.tameInfo) || void 0 === Xd ? void 0 : Xd.saddleItemName) && void 0 !== jd ? jd : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (md.push({
            str: "\n"
          }), md.push({
            str: "\n"
          }), dd.petInfo && null !== (bd = dd.tameInfo) && void 0 !== bd && bd.supportsFriendship) {
          const Jd = Pd.b.getIconsFromFriendshipPoints(dd.petInfo.friendshipPoints);
          for (const dd of Jd) md.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          md.push({
            str: "\n"
          });
          const kd = Pd.b.getMobHungerLevel(dd.petInfo.lastFedAt);
          for (const dd of Pd.b.hungerLevelIcons[kd]) md.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          md.push({
            str: " "
          }), md.push({
            str: Pd.b.hungerLevelTranslations[kd],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (dd.tameInfo && null !== (Sd = dd.tameInfo) && void 0 !== Sd && Sd.supportsFriendship) {
          var fd, nd;
          let Jd = null !== (fd = dd.tameInfo.likedFoods) && void 0 !== fd ? fd : [];
          md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Superliked]
            }
          }), md.push({
            str: " "
          }), null !== (nd = dd.petInfo) && void 0 !== nd && nd.superlikedFoodKnown ? (md.push({
            icon: dd.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Jd = Jd.filter((Jd => Jd !== dd.petInfo.superlikedFood))) : md.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Liked]
            }
          }), md.push({
            str: " "
          });
          for (const dd of Jd) md.push({
            icon: dd,
            style: {
              fontSize: "1.5em"
            }
          });
          md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Neutral]
            }
          }), md.push({
            str: " "
          });
          for (const kd of null !== (Ud = dd.tameInfo.neutralFoods) && void 0 !== Ud ? Ud : []) {
            var Ud;
            md.push({
              icon: kd,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          md.push({
            str: "\n"
          }), md.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Pd.b.feedTextColours[Pd.b.MobFoodType.Disliked]
            }
          }), md.push({
            str: " "
          });
          for (const kd of null !== (yd = dd.tameInfo.dislikedFoods) && void 0 !== yd ? yd : []) {
            var yd;
            md.push({
              icon: kd,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        md.length > 0 ? (md.shift(), md.unshift(...(0, Wd.yb)(Yd))) : md = (0, Wd.yb)(Yd)
      }
      return {
        name: Md,
        desc: md,
        fontStyle: null !== (qd = Bd.customAttributes) && void 0 !== qd && qd.author ? "italic" : "normal"
      }
    }

    function Rd(dd, Jd, kd, pd) {
      const Nd = gd(dd, kd),
        Wd = gd(dd, pd);
      if (!Nd) return !1;
      const Pd = Jd[Nd.name].armourReduction,
        Zd = Jd[Wd.name].armourReduction;
      if (Zd === Pd) {
        var Cd, Kd, od, ld;
        const dd = null !== (Cd = null === (Kd = Nd.attributes.customAttributes) || void 0 === Kd ? void 0 : Kd.enchantmentTier) && void 0 !== Cd ? Cd : "Tier 0",
          Jd = null !== (od = null === (ld = Wd.attributes.customAttributes) || void 0 === ld ? void 0 : ld.enchantmentTier) && void 0 !== od ? od : "Tier 0";
        return parseInt(dd.replace("Tier ", "")) >= parseInt(Jd.replace("Tier ", ""))
      }
      return Pd > Zd
    }

    function Id(dd) {
      let Jd;
      if ("number" === typeof dd) {
        const kd = document.querySelector(`[data-inven-idx="${dd}"]`);
        if (!kd) return null;
        Jd = kd.getBoundingClientRect()
      } else Jd = dd.getBoundingClientRect();
      return {
        x: Jd.left + Jd.width / 2,
        y: Jd.top + Jd.height / 2
      }
    }
  },
  9134: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Qd,
      f: () => Ld,
      j: () => Od
    });
    var pd = kd(1461),
      Nd = kd(56),
      Wd = kd(1332),
      Pd = kd(4389),
      Zd = kd(2308),
      gd = kd(1211),
      Cd = kd(95),
      Kd = kd(1968),
      od = kd(1359),
      ld = kd(1103);

    function Qd(dd) {
      let {
        show: Jd,
        onClose: kd
      } = dd;
      const {
        requestedGameNameWithVariation: pd,
        lobbyName: Nd,
        shownLobbyName: Wd
      } = (0, Kd.k)("connectedGame"), gd = (0, Zd.c)(pd, Nd, !1);
      return Cd.featureFlags.canUseInviteLinks && (0, ld.jsx)(Pd.e, {
        show: Jd,
        close: kd,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, ld.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, ld.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, ld.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, ld.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === gd ? (0, ld.jsx)(od.b, {}) : gd, (0, ld.jsx)("br", {}), "Lobby Name: ", Wd, (0, ld.jsx)("br", {}), (0, ld.jsx)("br", {}), (0, ld.jsx)("br", {}), (0, ld.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, ld.jsx)(Ld, {})]
        })
      })
    }

    function Ld() {
      var dd;
      const {
        t: Jd
      } = (0, gd.B)(), kd = null !== (dd = Od(Cd.featureFlags.canUseInviteLinks)) && void 0 !== dd ? dd : "Loading Link...", [Wd, Pd] = (0, Nd.useState)(0), [Zd, Kd] = (0, Nd.useReducer)((dd => dd + 1), 0);
      return (0, Nd.useEffect)((() => {
        const dd = setTimeout((() => {
          Kd()
        }), 1100);
        return () => {
          clearTimeout(dd)
        }
      }), [Wd]), Cd.featureFlags.canUseInviteLinks && (0, ld.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, ld.jsx)("div", {
          className: "InviteLinkInner",
          children: kd
        }), (0, ld.jsx)(pd.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(kd).catch((dd => {
              console.error("Failed to copy invite link:", dd)
            })), Pd(Date.now())
          },
          disabled: Date.now() - Wd < 1e3,
          children: Date.now() - Wd < 1e3 ? Jd("general:copied") : Jd("general:copy")
        })]
      })
    }

    function Od(dd) {
      const [Jd, kd] = (0, Nd.useState)(null);
      return (0, Nd.useEffect)((() => {
        if (!dd) return;
        let Jd = !0;
        return (0, Wd.v)().then((dd => {
          Jd && kd(dd)
        })).catch((dd => {
          console.error("Failed to get invite link:", dd)
        })), () => {
          Jd = !1
        }
      }), [dd]), Jd
    }
  },
  37167: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ad
    });
    var pd = kd(56),
      Nd = kd(2357),
      Wd = kd(1904),
      Pd = kd(593),
      Zd = kd(29),
      gd = kd(1044),
      Cd = kd.n(gd),
      Kd = kd(36715),
      od = kd(2486),
      ld = kd(36720),
      Qd = kd(2511),
      Ld = kd(2495),
      Od = kd(3478),
      ed = kd(36726),
      Rd = kd(22),
      Id = kd(2011),
      Gd = kd(2316),
      vd = kd(1245),
      xd = kd(4796),
      qd = kd(1968),
      Bd = kd(95),
      sd = kd(1103);
    const ad = (0, pd.memo)((function() {
      const dd = (0, Nd.j)("lobbyLeaderboardInfo"),
        Jd = (0, qd.k)("players"),
        kd = (0, qd.k)("lobbyLeaderboardRows"),
        Zd = (0, qd.k)("hiddenPlayerNames"),
        gd = (0, pd.useRef)(null),
        [Cd, Kd] = (0, pd.useReducer)((dd => dd + 1), 0);
      return (0, pd.useEffect)((() => (0, Id.d)((() => {
        Kd()
      }))), []), (0, sd.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, sd.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!dd) return (0, sd.jsx)(sd.Fragment, {});
            const pd = JSON.parse(JSON.stringify(dd)),
              Nd = [...Jd.ids],
              Cd = {},
              Kd = {};
            for (const dd of Nd) {
              var od, Qd;
              Cd[dd] = null === (od = kd[dd]) || void 0 === od ? void 0 : od.colour;
              const Jd = null === (Qd = kd[dd]) || void 0 === Qd ? void 0 : Qd.values;
              Jd && (Kd[dd] = {
                ...Jd
              })
            }
            const Ld = Object.keys(pd);
            Ld.sort(((dd, Jd) => pd[dd].sortPriority - pd[Jd].sortPriority)), Nd.sort(((dd, Jd) => {
              if (!Kd[dd] || !Kd[Jd]) return 0;
              for (const kd of Ld) {
                const Nd = Kd[dd][kd],
                  Wd = Kd[Jd][kd];
                let Pd = 0;
                if ("string" == typeof Nd && "string" == typeof Wd ? Pd = Nd.localeCompare(Wd) : "number" == typeof Nd && "number" == typeof Wd ? Pd = Nd - Wd : "number" == typeof Nd && "string" == typeof Wd ? Pd = 1 : "string" == typeof Nd && "number" == typeof Wd && (Pd = -1), Pd) return Pd * ("ascending" === pd[kd].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const dd of Nd) {
              var Od, ed, Rd;
              const {
                name: pd,
                ranks: Nd,
                cosmetics: Wd
              } = Jd.byId[dd], Zd = [], gd = null !== (Od = null === (ed = kd[dd]) || void 0 === ed || null === (Rd = ed.tags) || void 0 === Rd ? void 0 : Rd.flatMap((dd => 0 === dd.length ? dd : [...dd, String.fromCharCode(8198)]))) && void 0 !== Od ? Od : [];
              Zd.push(...gd), Zd.push(...(0, vd.x)(Nd, pd, (null === Wd || void 0 === Wd ? void 0 : Wd.nameColour) === Pd.c || null === Wd || void 0 === Wd ? void 0 : Wd.nameColour)), Kd[dd] ??= {}, Kd[dd].name = Zd
            }

            function qd(dd, kd) {
              if (Kd[dd] && void 0 !== Kd[dd][kd]) {
                if ("name" === kd) {
                  const {
                    name: pd,
                    cosmetics: Nd
                  } = Jd.byId[dd];
                  return (0, sd.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Nd && (0, sd.jsx)(Gd.e, {
                      cosmetics: Nd
                    }), " ", (0, sd.jsx)(Wd.c, {
                      text: Kd[dd][kd],
                      friendBadgeFor: (0, Id.f)(pd, Zd) ? pd : void 0
                    })]
                  })
                }
                return (0, sd.jsx)(Wd.c, {
                  text: Kd[dd][kd]
                })
              }
              return ""
            }
            const Bd = Object.keys(pd).filter((dd => !0 !== pd[dd].hidden)).map((dd => {
              var Jd;
              return {
                key: dd,
                header: (0, sd.jsx)(Wd.c, {
                  text: null !== (Jd = pd[dd].displayName) && void 0 !== Jd ? Jd : ""
                })
              }
            }));
            return (0, sd.jsx)("div", {
              ref: gd,
              className: "LobbyLeaderboard",
              children: (0, sd.jsx)(xd.d, {
                columns: Bd,
                rows: Nd,
                getRowKey: dd => dd,
                renderRow: dd => {
                  const kd = dd !== Jd.localId;
                  return (0, sd.jsx)(Md, {
                    playerId: dd,
                    playerName: Jd.byId[dd].name,
                    isOtherPlayer: kd,
                    opensProfileCard: (0, ld.g)(kd, Jd.byId[dd].name, Zd),
                    lobbyLeaderboardInfo: pd,
                    getPlayerValue: qd,
                    playerColors: Cd
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Md(dd) {
      let {
        playerId: Jd,
        playerName: kd,
        isOtherPlayer: Nd,
        opensProfileCard: Wd,
        lobbyLeaderboardInfo: Pd,
        getPlayerValue: gd,
        playerColors: Id
      } = dd;
      const Gd = (0, pd.useRef)(null);
      (0, pd.useEffect)((() => () => {
        od.b.closeIfOwner(Gd)
      }), []);
      const vd = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Zd.j.nO("OpenReportMenu", {
              playerEId: Jd,
              playerName: kd,
              IC: null,
              serverChatMsgId: null
            })
          }
        },
        xd = () => ({
          ...(0, ld.c)(Jd, kd),
          showLocation: !1,
          status: null,
          extraActions: [vd],
          moderationActions: null === kd ? [] : (0, ed.e)(kd),
          friendRequestSource: "leaderboard"
        });
      return (0, sd.jsxs)("tr", {
        ref: Gd,
        "data-pad-focusable": Wd || void 0,
        [od.f]: Wd || void 0,
        onClick: Wd ? () => {
          var dd;
          od.b.toggle(Gd, {
            ...xd(),
            anchor: null !== (dd = Gd.current.querySelector(".PlayerPfpAndName")) && void 0 !== dd ? dd : Gd.current
          })
        } : void 0,
        onContextMenu: Wd ? dd => {
          (0, Qd.d)(Gd, dd, xd(), Rd.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Wd ? dd => {
          (0, Ld.c)(dd, (() => (0, ld.c)(Jd, kd).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Pd).map((dd => !0 === Pd[dd].hidden ? null : (0, sd.jsxs)("td", {
          className: Cd()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Nd
          }),
          children: [(0, sd.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: gd(Jd, dd)
          }), (0, sd.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: Id[Jd]
            }
          })]
        }, dd))), Nd && !Wd && (0, sd.jsx)(Kd.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Gd,
          options: [{
            icon: vd.icon,
            text: vd.text,
            onPointerDown: vd.onClick
          }, ...null === kd || Bd.featureFlags.useSocialFeatures ? [] : (0, Od.d)(null, kd)]
        })]
      })
    }
  },
  36726: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd
    });
    var pd = kd(1955),
      Nd = kd(2372),
      Wd = kd(36733);
    const Pd = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function Zd(dd, Jd) {
      return async () => function(dd, Jd, kd) {
        return null === Jd ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : Jd.ok ? {
          message: {
            key: Pd[dd.type]
          },
          next: kd
        } : {
          message: {
            fromServer: Jd.message
          },
          next: null
        }
      }(dd, await (0, Wd.e)(dd), Jd())
    }

    function gd(dd) {
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
        run: Zd({
          type: "ban",
          name: dd
        }, (() => function(dd) {
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
            run: Zd({
              type: "unban",
              name: dd
            }, (() => null))
          }
        }(dd)))
      }
    }

    function Cd(dd, Jd) {
      if (null === dd) return [];
      const kd = [],
        pd = function(dd, Jd) {
          var kd, pd;
          return null !== (kd = null !== (pd = dd.here.find((dd => dd.name === Jd))) && void 0 !== pd ? pd : dd.away.find((dd => dd.name === Jd))) && void 0 !== kd ? kd : null
        }(dd, Jd);
      var Wd, Pd;
      return null !== pd && void 0 !== pd && pd.can.kick && kd.push((Wd = Jd, Pd = pd.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: Zd({
          type: "kick",
          name: Wd
        }, (() => Pd ? gd(Wd) : null))
      })), null !== pd && void 0 !== pd && pd.can.ban && kd.push(gd(Jd)), kd.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, Nd.f)({
            page: "players",
            focusName: Jd,
            source: "profile_card"
          })
        }
      }), kd
    }

    function Kd(dd) {
      var Jd;
      return Cd(null !== (Jd = pd.b.get("lobbyManage")) && void 0 !== Jd ? Jd : null, dd)
    }
  },
  36733: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      e: () => gd
    });
    var pd = kd(1492),
      Nd = kd(1955),
      Wd = kd(1932);
    const Pd = 1e4;
    let Zd = 0;

    function gd(dd) {
      const Jd = ++Zd;
      return new Promise((kd => {
        const Zd = Jd => {
            gd(), clearTimeout(Cd), !1 === (null === Jd || void 0 === Jd ? void 0 : Jd.ok) && (0, pd.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: dd.type
            }), kd(Jd)
          },
          gd = Nd.b.subscribe("lobbyManage", (dd => {
            const kd = function(dd, Jd) {
              var kd;
              return null !== (kd = null === dd || void 0 === dd ? void 0 : dd.results.find((dd => dd.requestId === Jd))) && void 0 !== kd ? kd : null
            }(dd, Jd);
            null !== kd && Zd(kd)
          })),
          Cd = setTimeout((() => {
            Zd(null)
          }), Pd);
        Wd.gameBridge.send("lobbyManage", {
          ...dd,
          requestId: Jd
        })
      }))
    }
    const Cd = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Kd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gd;
        this.onChange = dd, this.sendAction = Jd, this.pending = new Map, this.statuses = new Map
      }
      send(dd, Jd, kd) {
        var pd;
        return this.statuses.delete(Jd), this.pending.set(Jd, (null !== (pd = this.pending.get(Jd)) && void 0 !== pd ? pd : 0) + 1), this.sendAction(dd).then((dd => {
          var pd;
          const Nd = null !== dd && void 0 !== dd ? dd : {
              requestId: -1,
              ok: !1,
              message: Cd
            },
            Wd = (null !== (pd = this.pending.get(Jd)) && void 0 !== pd ? pd : 1) - 1;
          Wd > 0 ? this.pending.set(Jd, Wd) : this.pending.delete(Jd);
          const Pd = !Nd.ok || Nd.message.length > 0 ? Nd.message : null === kd ? null : [kd];
          return null !== Pd && this.statuses.set(Jd, {
            ok: Nd.ok,
            text: Pd,
            until: Date.now() + 4e3
          }), this.onChange(), Nd
        }))
      }
      show(dd, Jd) {
        this.statuses.set(dd, {
          ...Jd,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(dd) {
        for (const [Jd, kd] of this.statuses) kd.until <= dd && this.statuses.delete(Jd)
      }
      nextDeadline() {
        let dd = null;
        for (const kd of this.statuses.values()) {
          var Jd;
          dd = Math.min(null !== (Jd = dd) && void 0 !== Jd ? Jd : 1 / 0, kd.until)
        }
        return dd
      }
      statusOf(dd, Jd) {
        const kd = this.statuses.get(dd);
        return !kd || kd.until <= Jd ? null : {
          ok: kd.ok,
          text: kd.text
        }
      }
      isPending(dd) {
        return this.pending.has(dd)
      }
    }
  },
  4642: (dd, Jd, kd) => {
    kd.d(Jd, {
      f: () => Id,
      d: () => Rd
    });
    var pd = kd(56),
      Nd = kd(1459),
      Wd = kd(1904),
      Pd = kd(4649),
      Zd = kd(1103);
    const gd = (0, pd.memo)((function(dd) {
      let {
        initialParameters: Jd
      } = dd;
      const kd = (0, pd.useRef)(null),
        Nd = (0, pd.useRef)(null),
        gd = (0, pd.useRef)(0),
        Cd = (0, pd.useRef)(null),
        Kd = Jd.description,
        od = Jd.Vp,
        {
          scale: ld,
          rotation: Qd
        } = null !== Jd && void 0 !== Jd ? Jd : {},
        Ld = (0, Pd.h)();
      return (0, pd.useEffect)((() => {
        const dd = Ld.onFrame((() => {
          const dd = Ld.getState();
          if (!dd.isActive || !kd.current || !Nd.current) return;
          const Jd = dd.state;
          if (kd.current.value = Jd.progress, Jd.clickCount > gd.current) {
            gd.current = Jd.clickCount;
            const dd = Nd.current;
            dd.classList.add("pulse"), Cd.current = setTimeout((() => {
              dd.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Cd.current), dd()
        }
      }), [Ld]), (0, Zd.jsx)(Zd.Fragment, {
        children: (0, Zd.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== ld && {
              "--scale": ld
            },
            ...null !== Qd && {
              "--rotation": `${Qd}deg`
            }
          },
          children: [(0, Zd.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: kd
          }), (0, Zd.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Nd,
            children: (0, Zd.jsx)(Wd.c, {
              text: [{
                icon: od
              }]
            })
          }), (0, Zd.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Zd.jsx)(Wd.c, {
              text: Kd
            })
          })]
        })
      })
    }));
    var Cd = kd(1044),
      Kd = kd.n(Cd);
    const od = 2 * Math.PI * 90,
      ld = (0, pd.memo)((function(dd) {
        let {
          initialParameters: Jd
        } = dd;
        const kd = (0, pd.useRef)(null),
          Nd = (0, pd.useRef)(null),
          gd = (0, pd.useRef)(null),
          Cd = Jd.label,
          ld = Jd.icon,
          Qd = Jd.wp,
          {
            scale: Ld,
            rotation: Od,
            Ap: ed
          } = null !== Jd && void 0 !== Jd ? Jd : {},
          Rd = (0, Pd.h)();
        return (0, pd.useEffect)((() => {
          const dd = Rd.onFrame((() => {
            var dd, Jd;
            const pd = Rd.getState();
            if (!pd.isActive || !Nd.current) return;
            const Wd = pd.state,
              Pd = null !== (dd = Wd.timeRemaining) && void 0 !== dd ? dd : 0,
              Zd = null !== (Jd = Wd.Hp) && void 0 !== Jd ? Jd : 1,
              Cd = od * (1 - Pd / Zd);
            Nd.current.style.strokeDashoffset = `${Cd}`, kd.current && (kd.current.style.opacity = Pd > 0 ? "1" : "0"), gd.current && Qd && (gd.current.textContent = `${(Pd/1e3).toFixed(1)}s`)
          }));
          return () => {
            dd()
          }
        }), [Rd, Qd]), (0, Zd.jsxs)("div", {
          className: "QTETimedClick",
          ref: kd,
          style: {
            ...null !== Ld && {
              "--scale": Ld
            },
            ...null !== Od && {
              "--rotation": `${Od}deg`
            }
          },
          children: [(0, Zd.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Zd.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Zd.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Zd.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: od,
                ref: Nd
              })]
            }), (0, Zd.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Zd.jsx)(Wd.c, {
                text: [{
                  icon: ld
                }],
                className: Kd()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: ed
                })
              })
            })]
          }), (0, Zd.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Zd.jsx)(Wd.c, {
              text: Cd,
              className: "QTETimedClickLabelText"
            }), Qd && (0, Zd.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: gd
            })]
          })]
        })
      })),
      Qd = (0, pd.memo)((function(dd) {
        let {
          initialParameters: Jd
        } = dd;
        const kd = (0, pd.useRef)(null),
          Nd = (0, pd.useRef)(null),
          gd = (0, pd.useRef)(null),
          Cd = (0, pd.useRef)(!1),
          Kd = Jd.description,
          od = null === Jd || void 0 === Jd ? void 0 : Jd.icon,
          ld = (0, Pd.h)();
        return (0, pd.useEffect)((() => {
          const dd = ld.onFrame((() => {
            const dd = ld.getState();
            if (!dd.isActive) return;
            const Jd = dd.state;
            if (kd.current) {
              const dd = 100 * (Jd.catchZonePosition - Jd.JN / 2);
              kd.current.style.left = `${dd}%`, kd.current.style.width = 100 * Jd.JN + "%", Jd.isCatching !== Cd.current && (Cd.current = Jd.isCatching, Jd.isCatching ? kd.current.classList.add("catching") : kd.current.classList.remove("catching"))
            }
            Nd.current && (Nd.current.style.left = 100 * Jd.moverPosition + "%"), gd.current && (gd.current.value = Jd.progress)
          }));
          return () => {
            dd()
          }
        }), [ld]), (0, Zd.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Zd.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Zd.jsx)(Wd.c, {
              text: Kd
            })
          }), (0, Zd.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: gd
          }), (0, Zd.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Zd.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: kd
            }), (0, Zd.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Nd,
              children: (0, Zd.jsx)("span", {
                children: od && (0, Zd.jsx)(Wd.c, {
                  text: [{
                    icon: od,
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
    var Ld = kd(610);
    const Od = (0, pd.memo)((function(dd) {
        let {
          initialParameters: Jd
        } = dd;
        const kd = (0, pd.useRef)(null),
          Nd = Jd.label,
          gd = Jd.gN,
          {
            icon: Cd,
            scale: Kd,
            rotation: od
          } = null !== Jd && void 0 !== Jd ? Jd : {},
          ld = 100 * (.5 - gd / 2),
          Qd = 100 * gd,
          Od = (0, Pd.h)();
        return (0, pd.useEffect)((() => {
          const dd = Od.onFrame((() => {
            const dd = Od.getState();
            if (!dd.isActive || !kd.current) return;
            const Jd = dd.state;
            kd.current.style.left = 100 * Jd.markerPosition + "%"
          }));
          return () => {
            dd()
          }
        }), [Od]), (0, Zd.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, Ld.I)(Kd) && {
              "--scale": Kd
            },
            ...!(0, Ld.I)(od) && {
              "--rotation": `${od}deg`
            }
          },
          children: [Cd && (0, Zd.jsx)(Wd.c, {
            text: [{
              icon: Cd
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Zd.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Zd.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${ld}%`,
                width: `${Qd}%`
              }
            }), (0, Zd.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: kd
            })]
          }), (0, Zd.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Zd.jsx)(Wd.c, {
              text: Nd
            })
          })]
        })
      })),
      ed = (0, pd.memo)((function(dd) {
        let {
          initialParameters: Jd
        } = dd;
        const kd = (0, pd.useRef)(null),
          [Nd, gd] = (0, pd.useState)((() => new Array(Jd.KN).fill("pending"))),
          [Cd, Kd] = (0, pd.useState)((() => {
            const dd = Jd.QN;
            return (0, Ld.I)(dd) || dd <= 0 ? [] : new Array(dd).fill("pending")
          })),
          od = Jd.label,
          {
            icon: ld
          } = Jd,
          Qd = (0, pd.useRef)(0),
          Od = (0, pd.useRef)(0),
          ed = (0, pd.useRef)([]),
          Rd = (0, Pd.h)();
        return (0, pd.useEffect)((() => {
          const dd = Rd.onFrame((() => {
            const dd = Rd.getState();
            if (!dd.isActive || !kd.current) return;
            const Jd = dd.state,
              pd = 30 + 60 * Jd.outerCircleProgress;
            if (kd.current.setAttribute("r", String(pd)), !0 === Jd.lastClickResult && Jd.successes > Qd.current) {
              kd.current.classList.remove("QTERhythmClickOuterCircle--miss"), kd.current.classList.add("QTERhythmClickOuterCircle--hit");
              const dd = setTimeout((() => {
                var dd;
                null === (dd = kd.current) || void 0 === dd || dd.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              ed.current.push(dd)
            } else if (!1 === Jd.lastClickResult && Jd.misses > Od.current) {
              kd.current.classList.remove("QTERhythmClickOuterCircle--hit"), kd.current.classList.add("QTERhythmClickOuterCircle--miss");
              const dd = setTimeout((() => {
                var dd;
                null === (dd = kd.current) || void 0 === dd || dd.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              ed.current.push(dd)
            }
            Jd.successes === Qd.current && Jd.misses === Od.current || (Qd.current = Jd.successes, Od.current = Jd.misses, gd((dd => {
              const kd = [...dd];
              for (let pd = 0; pd < Jd.KN; pd++) kd[pd] = pd < Jd.successes ? "success" : "pending";
              return kd
            })), Kd((dd => {
              if (0 === dd.length) return dd;
              const kd = [...dd];
              for (let pd = 0; pd < kd.length; pd++) kd[pd] = pd < Jd.misses ? "miss" : "pending";
              return kd
            })))
          }));
          return () => {
            dd();
            for (const dd of ed.current) clearTimeout(dd);
            ed.current = []
          }
        }), [Rd]), (0, Zd.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Zd.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Nd.map(((dd, Jd) => (0, Zd.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === dd ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, Jd)))
          }), (0, Zd.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Zd.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Zd.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Zd.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: kd
              })]
            }), ld && (0, Zd.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Zd.jsx)(Wd.c, {
                text: [{
                  icon: ld
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Cd.length > 0 && (0, Zd.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Cd.map(((dd, Jd) => (0, Zd.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === dd ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, Jd)))
          }), (0, Zd.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Zd.jsx)(Wd.c, {
              text: od
            })
          })]
        })
      }));

    function Rd(dd) {
      let {
        qte: Jd
      } = dd;
      switch (Jd.type) {
        case "progressBar":
          return (0, Zd.jsx)(gd, {
            initialParameters: Jd.parameters
          });
        case "timedClick":
          return (0, Zd.jsx)(ld, {
            initialParameters: Jd.parameters
          });
        case "gravityBar":
          return (0, Zd.jsx)(Qd, {
            initialParameters: Jd.parameters
          });
        case "precisionBar":
          return (0, Zd.jsx)(Od, {
            initialParameters: Jd.parameters
          });
        case "rhythmClick":
          return (0, Zd.jsx)(ed, {
            initialParameters: Jd.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Id = (0, pd.memo)((function() {
      const [dd, Jd] = (0, pd.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Nd.h)("qteStateUpdated", (dd => {
        Jd(dd)
      })), dd.isActive && dd.type ? (0, Zd.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Zd.jsx)(Rd, {
          qte: dd
        })
      }) : null
    }))
  },
  4649: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      h: () => gd
    });
    var pd = kd(56),
      Nd = kd(1320),
      Wd = kd(4657);
    const Pd = {
        getState: () => Wd.d.getCurrentState(),
        onFrame: Nd.p
      },
      Zd = (0, pd.createContext)(Pd);

    function gd() {
      return (0, pd.useContext)(Zd)
    }
  },
  9226: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1968),
      Zd = kd(1103);

    function gd(dd) {
      const Jd = Math.floor(dd / 3600),
        kd = Math.floor(dd % 3600 / 60),
        pd = Math.floor(dd % 60),
        Nd = `${kd.toString().padStart(2,"0")}:${pd.toString().padStart(2,"0")}`;
      return Jd > 0 ? `${Jd}:${Nd}` : Nd
    }
    const Cd = (0, pd.memo)((function(dd) {
      let {
        className: Jd
      } = dd;
      const {
        recording: kd,
        seconds: pd
      } = (0, Pd.k)("replayRecorder");
      return kd ? (0, Zd.jsxs)("div", {
        className: Wd()("RecordingIndicator", Jd),
        children: [(0, Zd.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Zd.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Zd.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: gd(pd)
        })]
      }) : null
    }))
  },
  36522: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      e: () => ld
    });
    var pd = kd(56),
      Nd = kd(1371),
      Wd = kd(1211),
      Pd = kd(1359),
      Zd = kd(3332),
      gd = kd(4813),
      Cd = kd(1103);

    function Kd(dd) {
      let {
        loading: Jd,
        schematics: kd,
        onSchematicPicked: pd,
        selectedSchematicIdList: Nd = [],
        disableAutoExport: gd
      } = dd;
      const {
        t: Kd
      } = (0, Wd.B)();
      return (0, Cd.jsxs)("div", {
        className: "SchematicList",
        children: [Jd && (0, Cd.jsx)(Pd.b, {}), !Jd && 0 === kd.length && (0, Cd.jsx)("div", {
          className: "NoSchematicsText",
          children: Kd("worldBuilder:noSavedSchematic")
        }), !Jd && kd.map((dd => (0, Cd.jsx)(Zd.h, {
          source: {
            type: "schematic",
            schematic: dd
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            pd(dd)
          },
          isSelected: Nd.includes(dd.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: dd.isAutoExported && gd,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, dd.schematicId)))]
      })
    }

    function od(dd) {
      let {
        ownedSchematics: Jd,
        currentWorldSchematicId: kd,
        onClose: Nd
      } = dd;
      const {
        t: Pd
      } = (0, Wd.B)(), [Zd, od] = (0, pd.useState)(null);
      return (0, Cd.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Zd && (0, Cd.jsxs)(Cd.Fragment, {
          children: [(0, Cd.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Pd("worldBuilder:schematicList")
          }), (0, Cd.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Pd("worldBuilder:clickSchematicForOptions")
          }), (0, Cd.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Cd.jsx)(Kd, {
              loading: !1,
              schematics: Jd,
              onSchematicPicked: dd => {
                od(dd)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Zd && (0, Cd.jsx)(gd.g, {
          schematic: Zd,
          inSourceWorld: Zd.schematicId === kd,
          onSchematicUpdate: dd => {
            od(dd)
          },
          onClose: () => {
            od(null), Nd()
          }
        })]
      })
    }

    function ld(dd) {
      let {
        ownedSchematics: Jd,
        currentWorldSchematicId: kd,
        onClose: pd
      } = dd;
      Nd.NotificationProvider.showCustomPopup({
        body: dd => (0, Cd.jsx)(od, {
          ownedSchematics: Jd,
          currentWorldSchematicId: kd,
          onClose: dd
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: pd,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37095: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => xd,
      d: () => vd
    });
    var pd = kd(4107),
      Nd = kd(1459),
      Wd = kd(56),
      Pd = kd(6347),
      Zd = kd(4093),
      gd = kd(1307),
      Cd = kd(1932),
      Kd = kd(1904),
      od = kd(1461),
      ld = kd(1211),
      Qd = kd(37101),
      Ld = kd(1044),
      Od = kd.n(Ld),
      ed = kd(1332),
      Rd = kd(1059),
      Id = kd(1302),
      Gd = kd(1103);
    const vd = "SleepingOverlay";

    function xd() {
      const {
        t: dd
      } = (0, ld.B)(), [Jd, kd] = (0, Wd.useState)(!1), [Ld, xd] = (0, Wd.useState)(null), [Bd, sd] = (0, Wd.useState)(1), [ad, Md] = (0, Wd.useState)(!1), [Fd, Yd] = (0, Wd.useState)(!1), md = (0, Wd.useRef)(0), bd = (0, Wd.useRef)(!1), Sd = (0, Wd.useRef)(!1), jd = (0, Wd.useRef)(), Xd = (0, Wd.useRef)(null);

      function fd() {
        const dd = null !== Ld && void 0 !== Ld ? Ld : "Rested Speed";
        Cd.gameBridge.send("wakeUp", Fd ? dd : null), Xd.current = null, kd(!1), xd(null), sd(1), Md(!1), Yd(!1)
      }

      function nd() {
        return !ad && (fd(), !0)
      }
      return (0, Nd.h)("PlayerPhysicsTypeUpdate", (dd => {
        dd !== Xd.current && (Xd.current = dd, dd === Pd.k.SLEEPING ? (Sd.current || (md.current = Cd.gameBridge.lookup("cameraZoom", null), Sd.current = !0), bd.current = !0, Cd.gameBridge.send("setCameraZoom", 3), kd(!0), sd(function() {
          for (const dd of Cd.gameBridge.lookup("blocksStandingOn", null)) {
            if (Qd.e.leafBeds.includes(dd)) return console.log(`Found leaf bed: ${dd}`), 1;
            if (Qd.e.woolBeds.includes(dd)) return console.log(`Found woold bed: ${dd}`), 2;
            if (Qd.e.strongBeds.includes(dd)) return console.log(`Found strong bed ${dd}`), 3
          }
          return 1
        }())) : (Sd.current = !1, kd(!1), xd(null), sd(1)))
      })), (0, Wd.useEffect)((() => () => {
        (0, gd.o)(vd)
      }), []), (0, Wd.useEffect)((() => {
        Jd ? (0, gd.p)(vd) : ((0, gd.o)(vd), bd.current && (Cd.gameBridge.send("setCameraZoom", md.current), bd.current = !1))
      }), [Jd]), (0, Id.s)("overlay", jd, nd, Jd), (0, Gd.jsx)(pd.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Jd,
        timeout: 300,
        nodeRef: jd,
        unmountOnExit: !0,
        children: (0, Gd.jsx)("div", {
          ref: jd,
          onClick: dd => {
            nd() && dd.stopPropagation()
          },
          children: (0, Gd.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Gd.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Zd.g.map((Jd => (0, Gd.jsxs)(qd, {
                restedEffect: Jd,
                qP: Ld,
                setChosenRestedEffect: xd,
                children: [(0, Gd.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Gd.jsx)(Kd.c, {
                    text: [{
                      icon: Jd
                    }]
                  }), Zd.f[Jd].shortName]
                }), (0, Gd.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: dd(Zd.f[Jd].description, {
                    time: Zd.f[Jd].effectLevelDurations[Bd] / 6e4
                  })
                })]
              }, Jd)))
            }), (0, Gd.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Gd.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Gd.jsxs)(od.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: dd => {
                  Fd ? fd() : (Md(!0), (0, ed.R)((() => {
                    Md(!1), Yd(!0)
                  }), !0)), dd.stopPropagation()
                },
                loading: ad,
                children: [!Fd && (0, Gd.jsxs)(Gd.Fragment, {
                  children: [(0, Gd.jsx)(Rd.e, {
                    name: "film"
                  }), " ", dd("classicGame:watchAdToGetRestedPerk")]
                }), Fd && dd("classicGame:wakeUp")]
              }), (0, Gd.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Gd.jsx)("div", {
                  className: Od()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Bd
                  }),
                  children: (0, Gd.jsx)(Kd.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Gd.jsx)("div", {
                  className: Od()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Bd
                  }),
                  children: (0, Gd.jsx)(Kd.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Gd.jsx)("div", {
                  className: Od()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Bd
                  }),
                  children: (0, Gd.jsx)(Kd.c, {
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
    const qd = (0, Wd.memo)((function(dd) {
      let {
        children: Jd,
        restedEffect: kd,
        qP: pd,
        setChosenRestedEffect: Nd
      } = dd;
      return kd === pd ? (0, Gd.jsx)(od.j, {
        onClick: dd => {
          dd.stopPropagation()
        },
        children: Jd
      }) : (0, Gd.jsx)(od.f, {
        onClick: dd => {
          Nd(kd), dd.stopPropagation()
        },
        children: Jd
      })
    }))
  },
  36720: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Cd,
      g: () => gd
    });
    var pd = kd(593),
      Nd = kd(1932),
      Wd = kd(1675),
      Pd = kd(95),
      Zd = kd(1279);

    function gd(dd, Jd, kd) {
      return Pd.featureFlags.useSocialFeatures && dd && null === (0, Zd.d)(Jd, kd)
    }

    function Cd(dd, Jd) {
      var kd, Pd;
      const Zd = Wd.c.getSocialState().friends.find((dd => dd.name.toLowerCase() === Jd.toLowerCase())),
        gd = Nd.gameBridge.latest("players").byId[dd],
        Cd = void 0 !== gd && gd.name === Jd,
        Kd = Cd && null !== (kd = gd.cosmetics) && void 0 !== kd ? kd : void 0,
        od = Zd && Kd ? {
          ...Zd,
          cosmetics: Kd
        } : Zd;
      return {
        playerSocialPreview: null !== od && void 0 !== od ? od : {
          isError: !1,
          name: Jd,
          ranks: Cd ? [...gd.ranks] : [],
          cosmetics: null !== Kd && void 0 !== Kd ? Kd : {},
          nameColour: null !== (Pd = null === Kd || void 0 === Kd ? void 0 : Kd.nameColour) && void 0 !== Pd ? Pd : pd.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Zd
      }
    }
  },
  9234: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(4393),
      Nd = kd(4397);

    function Wd(dd) {
      let {
        children: Jd,
        showing: kd,
        globallyUniqueKey: Wd,
        alwaysMountChildren: Pd = !1,
        doGameplayStartStopOnShow: Zd = !0,
        keepsMovement: gd = !1
      } = dd;
      return (0, Nd.d)(!0, kd, Wd, gd), (0, pd.c)(Zd, kd), kd || Pd ? Jd : null
    }
  },
  4796: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        columns: Jd,
        rows: kd,
        getRowKey: Nd,
        renderRow: Zd,
        className: gd
      } = dd;
      return (0, Pd.jsxs)("table", {
        className: Wd()("Table", gd),
        children: [(0, Pd.jsx)("thead", {
          children: (0, Pd.jsx)("tr", {
            children: Jd.map((dd => (0, Pd.jsx)("th", {
              children: dd.header
            }, dd.key)))
          })
        }), (0, Pd.jsx)("tbody", {
          children: kd.map((dd => (0, Pd.jsx)(pd.Fragment, {
            children: Zd(dd)
          }, Nd(dd))))
        })]
      })
    }
  },
  37061: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => sd,
      e: () => qd,
      h: () => Bd,
      j: () => Ld
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(56),
      Pd = kd(72),
      Zd = kd(1390),
      gd = kd(1461),
      Cd = kd(1384),
      Kd = kd(1302),
      od = kd(1211),
      ld = kd(37068),
      Qd = kd(1103);

    function Ld(dd) {
      const [Jd, kd] = (0, Wd.useState)((() => (0, ld.p)(dd)));
      return (0, Wd.useEffect)((() => (kd((0, ld.p)(dd)), (0, ld.I)((() => {
        kd((0, ld.p)(dd))
      })))), [dd]), Jd
    }

    function Od(dd, Jd) {
      "function" === typeof dd ? dd(Jd) : dd && (dd.current = Jd)
    }

    function ed(dd) {
      let {
        tutorial: Jd,
        step: kd,
        enabled: pd = !0
      } = dd;
      const Nd = Ld(Jd);
      return pd && Nd === kd
    }

    function Rd(dd, Jd) {
      const kd = (0, ld.s)(dd),
        pd = kd.indexOf(Jd);
      return !kd.slice(pd + 1).some((Jd => (0, ld.x)(dd, Jd)))
    }

    function Id(dd, Jd, kd, pd) {
      let {
        tutorial: Nd,
        step: Wd,
        waitForClick: Pd = !1,
        onPrevious: Zd
      } = dd;
      const gd = Jd && (0, ld.w)(Nd, Wd),
        Cd = Jd && !Rd(Nd, Wd),
        od = Pd ? pd : kd;
      let Qd = null;
      gd ? Qd = () => {
        null === Zd || void 0 === Zd || Zd(), (0, ld.u)(Nd, Wd)
      } : Cd && (Qd = () => {
        (0, ld.m)(Nd)
      }), (0, Kd.s)("popup", null !== od && void 0 !== od ? od : kd, Qd, Jd && null !== od, null, gd ? void 0 : "controller:menusSkipTutorial")
    }

    function Gd(dd) {
      let {
        tutorial: Jd,
        step: kd,
        text: pd,
        waitForClick: Nd = !1,
        onPrevious: Wd
      } = dd;
      const {
        t: Pd
      } = (0, od.B)(), Zd = Rd(Jd, kd);
      return (0, Qd.jsxs)(Qd.Fragment, {
        children: [(0, Qd.jsx)("div", {
          className: "TutorialStepText",
          children: pd
        }), (0, Qd.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, ld.w)(Jd, kd) && (0, Qd.jsx)(gd.f, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Wd || void 0 === Wd || Wd(), (0, ld.u)(Jd, kd)
            },
            children: Pd("tutorial:back")
          }), !Nd && (0, Qd.jsx)(gd.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ld.h)(kd)
            },
            padDefaultFocus: !0,
            children: Pd(Zd ? "tutorial:done" : "tutorial:next")
          }), !Zd && (0, Qd.jsx)(gd.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ld.m)(Jd)
            },
            children: Pd("tutorial:skip")
          })]
        })]
      })
    }
    const vd = 6;

    function xd(dd) {
      let {
        rect: Jd,
        margin: kd
      } = dd;
      const pd = Math.max(0, Jd.top - kd),
        Nd = Jd.bottom + kd,
        Wd = Math.max(0, Jd.left - kd),
        Pd = Jd.right + kd;
      return (0, Qd.jsxs)(Qd.Fragment, {
        children: [(0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: pd
          }
        }), (0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Nd,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pd,
            left: 0,
            width: Wd,
            height: Nd - pd
          }
        }), (0, Qd.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: pd,
            left: Pd,
            right: 0,
            height: Nd - pd
          }
        })]
      })
    }

    function qd(dd) {
      let {
        target: Jd,
        placement: kd,
        boxRef: pd,
        className: gd,
        spotlightMargin: Kd = vd,
        children: od
      } = dd;
      const {
        getArrowProps: ld,
        getTooltipProps: Ld,
        setTooltipRef: Od,
        setTriggerRef: ed
      } = (0, Zd.b)({
        placement: kd,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, Kd]
      });
      (0, Wd.useLayoutEffect)((() => {
        ed(Jd)
      }), [Jd, ed]);
      const Rd = function(dd, Jd) {
        const [kd, pd] = (0, Wd.useState)(null);
        return (0, Wd.useEffect)((() => {
          if (!Jd || !dd) return void pd(null);
          let kd = 0,
            Nd = null;
          const Wd = () => {
            const Jd = dd.getBoundingClientRect();
            Nd && Jd.left === Nd.left && Jd.top === Nd.top && Jd.width === Nd.width && Jd.height === Nd.height || (Nd = Jd, pd(Jd)), kd = requestAnimationFrame(Wd)
          };
          return Wd(), () => {
            cancelAnimationFrame(kd)
          }
        }), [dd, Jd]), kd
      }(Jd, !0);
      (0, Wd.useEffect)((() => {
        null === Jd || void 0 === Jd || Jd.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Jd]);
      const Id = (0, Wd.useCallback)((dd => {
        Od(dd), pd && (pd.current = dd)
      }), [Od, pd]);
      return (0, Pd.createPortal)((0, Qd.jsxs)(Qd.Fragment, {
        children: [Rd && (0, Qd.jsx)(xd, {
          rect: Rd,
          margin: Kd
        }), (0, Qd.jsxs)("div", {
          ref: Id,
          ...Ld({
            className: Nd()("tooltip-container SmallTextLight TutorialStep", gd)
          }),
          children: [od, (0, Qd.jsx)("div", {
            ...ld({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Cd.g)())
    }
    const Bd = (0, Wd.forwardRef)((function(dd, Jd) {
      let {
        placement: kd = "right",
        children: pd,
        ...Nd
      } = dd;
      const Pd = ed(Nd),
        Zd = (0, Wd.useRef)(null),
        gd = (0, Wd.useRef)(null);
      Id(Nd, Pd, Zd, gd);
      const [Cd, Kd] = (0, Wd.useState)(null), od = pd.ref, ld = (0, Wd.useCallback)((dd => {
        gd.current = dd, Kd(dd), Od(Jd, dd), Od(od, dd)
      }), [Jd, od]);
      return (0, Qd.jsxs)(Qd.Fragment, {
        children: [(0, Wd.cloneElement)(pd, {
          ref: ld
        }), Pd && (0, Qd.jsx)(qd, {
          target: Cd,
          placement: kd,
          boxRef: Zd,
          children: (0, Qd.jsx)(Gd, {
            ...Nd
          })
        })]
      })
    }));

    function sd(dd) {
      const Jd = ed(dd),
        kd = (0, Wd.useRef)(null);
      return Id(dd, Jd, kd, null), Jd ? (0, Pd.createPortal)((0, Qd.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Qd.jsx)("div", {
          ref: kd,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Qd.jsx)(Gd, {
            ...dd
          })
        })
      }), (0, Cd.g)()) : null
    }
  },
  36857: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      h: () => Pd,
      k: () => Zd,
      m: () => gd
    });
    var pd = kd(56),
      Nd = kd(2974);
    const Wd = 8,
      Pd = "InGameHeaderContainer",
      Zd = "TopRightElements";

    function gd(dd) {
      const [Jd] = (0, Nd.b)(), [kd, gd] = (0, pd.useState)(!1);
      return (0, pd.useLayoutEffect)((() => {
        if (!dd) return;
        const Jd = document.querySelector(`.${Pd}`),
          kd = document.querySelector(`.${Zd}`),
          pd = () => {
            const pd = dd.getBoundingClientRect(),
              Nd = Jd ? Jd.getBoundingClientRect().right : 0,
              Pd = kd ? kd.getBoundingClientRect().left : window.innerWidth,
              Zd = pd.left < Nd + Wd,
              Cd = pd.right > Pd - Wd;
            gd(Zd || Cd)
          };
        pd();
        const Nd = new ResizeObserver(pd);
        return Nd.observe(dd), Jd && Nd.observe(Jd), kd && Nd.observe(kd), () => {
          Nd.disconnect()
        }
      }), [dd, Jd]), kd
    }
  },
  6435: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(56),
      Nd = kd(33);

    function Wd(dd, Jd) {
      var kd;
      const [Wd, Pd] = (0, pd.useState)(null !== (kd = Nd.i.getItem(dd)) && void 0 !== kd ? kd : Jd);
      return [Wd, Jd => {
        Nd.i.setItem(dd, Jd), Pd(Jd)
      }]
    }
  },
  36907: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1714),
      Zd = kd(1461),
      gd = kd(1359),
      Cd = kd(1059),
      Kd = kd(1103);

    function od(dd) {
      let {
        label: Jd,
        icon: kd,
        placeholder: Nd,
        onSubmit: od
      } = dd;
      const ld = (0, pd.useRef)(null),
        [Qd, Ld] = (0, pd.useState)(""),
        [Od, ed] = (0, pd.useState)("Enter"),
        [Rd, Id] = (0, pd.useState)(null);
      (0, pd.useEffect)((() => {
        if ("Success" !== Od && "Error" !== Od) return;
        const dd = setTimeout((() => {
          "Success" === Od && ld.current && (ld.current.value = "", Ld("")), ed("Enter")
        }), "Success" === Od ? 1e3 : 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [Od]);
      const Gd = () => {
        const dd = Qd.trim();
        "" !== dd && "Enter" === Od && (ed("Loading"), od(dd).then((dd => {
          ld.current && ("error" in dd ? null === dd.error ? ed("Enter") : (Id(dd.error), ed("Error")) : ed("Success"))
        })))
      };
      return (0, Kd.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: dd => {
          dd.target === ld.current && "Escape" !== dd.key && dd.stopPropagation()
        },
        children: [(0, Kd.jsxs)("div", {
          className: Wd()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Od}`),
          children: ["Loading" === Od && (0, Kd.jsx)(gd.b, {}), "Success" === Od && (0, Kd.jsx)(Cd.e, {
            name: "check"
          }), "Error" === Od && Rd]
        }), (0, Kd.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Kd.jsx)(Pd.e, {
            className: "PlayerSearchInput",
            domRef: ld,
            maxLength: 32,
            placeholderText: Nd,
            ariaLabel: Nd,
            stopPropagation: !1,
            onValueChange: dd => {
              Ld(dd)
            },
            onEnter: Gd
          }), (0, Kd.jsxs)(Zd.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Od || "" === Qd.trim(),
            onClick: Gd,
            children: [(0, Kd.jsx)(Cd.e, {
              name: kd
            }), " ", Jd]
          })]
        })]
      })
    }
  },
  36890: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1211),
      Zd = kd(1059),
      gd = kd(1103);
    const Cd = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Kd = ["unlisted", "public", "whitelist", "private"];

    function od(dd) {
      let {
        visibility: Jd,
        onPick: kd
      } = dd;
      const {
        t: Nd
      } = (0, Pd.B)(), od = (0, pd.useRef)([]);
      return (0, gd.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Nd("worldSocial:whoCanJoin"),
        children: Kd.map(((dd, pd) => {
          const Pd = dd === Jd;
          return (0, gd.jsxs)("button", {
            ref: dd => {
              od.current[pd] = dd
            },
            type: "button",
            className: Wd()("WorldSocialTile", {
              WorldSocialTileSelected: Pd
            }),
            "aria-pressed": Pd,
            tabIndex: Pd ? 0 : -1,
            onKeyDown: dd => {
              ((dd, Jd) => {
                const kd = "ArrowRight" === dd.key || "ArrowDown" === dd.key ? 1 : "ArrowLeft" === dd.key || "ArrowUp" === dd.key ? -1 : 0;
                var pd;
                0 !== kd && (dd.preventDefault(), null === (pd = od.current[(Jd + kd + Kd.length) % Kd.length]) || void 0 === pd || pd.focus())
              })(dd, pd)
            },
            onClick: () => {
              kd(dd)
            },
            children: [(0, gd.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, gd.jsx)(Zd.e, {
                name: Cd[dd]
              })
            }), (0, gd.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, gd.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Nd(`worldSocial:${dd}`)
              }), (0, gd.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Nd(`worldSocial:${dd}Description`)
              })]
            })]
          }, dd)
        }))
      })
    }
  },
  36905: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd
    });
    var pd = kd(1211),
      Nd = kd(2525),
      Wd = kd(4203),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        Do: Jd,
        children: kd,
        ...Zd
      } = dd;
      const {
        t: gd
      } = (0, pd.B)();
      return (0, Pd.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Jd.onChange(!Jd.on)
        },
        children: (0, Pd.jsx)(Nd.d, {
          ...Zd,
          opensProfileCard: !1,
          children: (0, Pd.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: dd => {
              dd.stopPropagation()
            },
            children: [kd, (0, Pd.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Pd.jsx)(Wd.e, {
                checked: Jd.on,
                disabled: !1,
                ariaLabel: gd("worldSocial:letJoin", {
                  playerName: Zd.playerSocialPreview.name
                }),
                onChange: dd => {
                  Jd.onChange(dd.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36887: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Ld
    });
    var pd = kd(56),
      Nd = kd(1211),
      Wd = kd(1858),
      Pd = kd(95),
      Zd = kd(22),
      gd = kd(1492),
      Cd = kd(2552),
      Kd = kd(9134),
      od = kd(1461),
      ld = kd(1059),
      Qd = kd(1103);

    function Ld(dd) {
      let {
        worldCode: Jd,
        message: kd
      } = dd;
      const {
        t: Ld
      } = (0, Nd.B)(), {
        isTouchScreen: Od
      } = (0, Zd.j)(["isTouchScreen"]), ed = Pd.featureFlags.canUseInviteLinks, Rd = (0, Kd.j)(ed && null === kd), [Id, Gd] = (0, Cd.h)(), vd = (0, pd.useRef)(null);
      if (null !== kd) return (0, Qd.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Qd.jsx)(ld.e, {
          name: "lock"
        }), (0, Qd.jsx)("span", {
          children: kd
        })]
      });
      const xd = ed ? Rd : Jd,
        qd = Od && ed && (0, Cd.d)();
      return (0, Qd.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!ed && (0, Qd.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ld("worldSocial:worldCode")
        }), (0, Qd.jsx)("input", {
          ref: vd,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== xd && void 0 !== xd ? xd : "",
          "aria-label": Ld(ed ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: dd => {
            dd.currentTarget.select()
          }
        }), (0, Qd.jsxs)(od.d, {
          className: "WorldSocialCopy",
          disabled: null === xd,
          onClick: () => {
            null !== xd && (0, Cd.e)(xd, {
              useShareSheet: qd,
              onOutcome: dd => {
                if ((0, gd.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== dd || ed ? dd : "code"
                  }), "copied" === dd) Gd();
                else if ("failed" === dd) {
                  var Jd;
                  null === (Jd = vd.current) || void 0 === Jd || Jd.focus(), Wd.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Qd.jsx)(ld.e, {
            name: Id ? "check" : qd ? "up-from-bracket" : "copy"
          }), " ", Ld(Id ? "general:copied" : qd ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36896: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Qd,
      f: () => ld,
      h: () => od
    });
    var pd = kd(593),
      Nd = kd(1211),
      Wd = kd(1675),
      Pd = kd(2525),
      Zd = kd(2479),
      gd = kd(1461),
      Cd = kd(36905),
      Kd = kd(1103);

    function od(dd, Jd) {
      var kd;
      return {
        isError: !1,
        name: dd,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Jd && void 0 !== Jd ? Jd : {},
        nameColour: null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.nameColour) && void 0 !== kd ? kd : pd.c,
        location: {
          status: "offline"
        }
      }
    }

    function ld(dd) {
      let {
        player: Jd,
        isFriend: kd = !1,
        status: pd,
        showLocation: gd = void 0 === pd,
        Do: od,
        onSendFriendRequest: ld,
        actions: Qd,
        zIndex: Ld
      } = dd;
      const {
        t: Od
      } = (0, Nd.B)();
      let ed = pd;
      null !== od && void 0 !== od && od.on && (ed = (0, Kd.jsxs)(Kd.Fragment, {
        children: [null !== pd && void 0 !== pd ? pd : (0, Kd.jsx)(Zd.c, {
          socialPreview: Jd
        }), (0, Kd.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Od("worldSocial:canJoin")]
        })]
      }));
      const Rd = {
        playerSocialPreview: Jd,
        isFriend: kd,
        hideFriendBadge: !0,
        onFriendRemoved: kd ? dd => {
          Wd.c.removeFriendFromState(dd)
        } : void 0,
        status: ed,
        showLocation: gd,
        onSendFriendRequest: ld,
        zIndex: Ld
      };
      return od ? (0, Kd.jsx)(Cd.b, {
        ...Rd,
        Do: od,
        children: Qd
      }) : (0, Kd.jsx)(Pd.d, {
        ...Rd,
        opensProfileCard: !1,
        children: Qd || void 0
      })
    }

    function Qd(dd) {
      let {
        row: Jd,
        Do: kd,
        canInvite: pd,
        invited: Wd,
        onInvite: Pd,
        zIndex: Zd
      } = dd;
      const {
        t: Cd
      } = (0, Nd.B)(), od = "online" === Jd.place ? gd.d : gd.f;
      return (0, Kd.jsx)(ld, {
        player: Jd.friend,
        isFriend: !0,
        status: "here" === Jd.place ? Cd("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Do: kd,
        zIndex: Zd,
        actions: pd && (0, Kd.jsx)(od, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Wd,
          onClick: Pd,
          ariaLabel: `${Cd("worldSocial:invite")} ${Jd.friend.name}`,
          children: Cd(Wd ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36877: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Pd,
      g: () => Cd
    });
    var pd = kd(56),
      Nd = kd(4434),
      Wd = kd(1858);

    function Pd(dd) {
      const Jd = {
        lobbyName: dd,
        answer: null,
        response: Nd.e.getSocialSettings(dd)
      };
      return Jd.response.then((dd => {
        Jd.answer = dd
      })), Jd
    }
    const Zd = new Map;

    function gd(dd) {
      Zd.set(dd.lobbyName, dd)
    }

    function Cd(dd) {
      const [Jd] = (0, pd.useState)((() => function(dd) {
        var Jd;
        const kd = null !== (Jd = Zd.get(dd)) && void 0 !== Jd ? Jd : null;
        return null !== kd && void 0 !== kd && kd.answer && "error" in kd.answer ? null : kd
      }(dd))), [kd, Pd] = (0, pd.useState)((() => null !== Jd && void 0 !== Jd && Jd.answer && "settings" in Jd.answer ? Jd.answer.settings : null)), [gd, Cd] = (0, pd.useState)(!0), [Kd, od] = (0, pd.useState)(null !== kd), ld = (0, pd.useRef)(kd);
      ld.current = kd;
      const Qd = (0, pd.useRef)(0),
        Ld = (0, pd.useRef)(0),
        Od = (0, pd.useRef)(!1),
        ed = (0, pd.useRef)(!0),
        Rd = (0, pd.useCallback)((async Jd => {
          const kd = ++Qd.current,
            pd = await (null !== Jd && void 0 !== Jd ? Jd : Nd.e.getSocialSettings(dd));
          ed.current && kd === Qd.current && (od(!0), Cd(!1), "error" in pd || Pd(pd.settings))
        }), [dd]),
        Id = (0, pd.useCallback)((() => {
          Cd(!0), Rd()
        }), [Rd]),
        Gd = (0, pd.useCallback)((() => {
          Ld.current > 0 ? Od.current = !0 : Rd()
        }), [Rd]);
      (0, pd.useEffect)((() => (ed.current = !0, Zd.delete(dd), Cd(!0), Rd(null === Jd || void 0 === Jd ? void 0 : Jd.response), () => {
        ed.current = !1
      })), [Rd, dd, Jd]);
      const vd = dd => {
        Qd.current++, Cd(!1), ld.current = dd, Pd(dd)
      };
      return {
        settings: kd,
        loading: gd,
        answered: Kd,
        retry: Id,
        refresh: Gd,
        change: async function(Jd, kd) {
          let {
            quiet: pd = !1,
            onAnswer: Pd
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Zd = ld.current;
          if (null === Zd) return !1;
          vd(kd(Zd)), Ld.current > 0 && (Od.current = !0), Ld.current++;
          const gd = await Nd.e.setSocialSettings(dd, Jd);
          Ld.current--;
          const Cd = !("error" in gd);
          if (!ed.current) return Cd;
          if (null === Pd || void 0 === Pd || Pd(gd), pd);
          else if ("error" in gd) Wd.f.showMessage({
            translationKey: gd.error
          });
          else
            for (const dd of gd.notFound) Wd.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: dd
              }
            });
          if (Ld.current > 0) return Cd;
          const Kd = Od.current;
          return Od.current = !1, !Kd && "settings" in gd ? vd(gd.settings) : (Kd || vd(Zd), Rd()), Cd
        }
      }
    }
  },
  36911: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      g: () => Wd
    });
    var pd = kd(149);
    const Nd = new Map;

    function Wd(dd, Jd) {
      var kd;
      const pd = null !== (kd = Nd.get(dd)) && void 0 !== kd ? kd : new Map;
      pd.set(Jd, Date.now()), Nd.set(dd, pd)
    }

    function Pd(dd) {
      const Jd = Nd.get(dd);
      if (!Jd) return [];
      const kd = Date.now();
      for (const [Nd, Wd] of Jd) kd - Wd >= pd.r && Jd.delete(Nd);
      return [...Jd.keys()]
    }
  },
  36880: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      const kd = Jd.toLowerCase();
      for (const pd of dd)
        if (pd.toLowerCase() === kd) return !0;
      return !1
    }

    function Nd(dd, Jd, kd) {
      const Nd = [],
        Wd = [],
        Pd = [];
      for (const Zd of dd) !Zd.isError && Zd.name && ("inGame" === Zd.location.status && Zd.location.inLobbyName === Jd || pd(kd, Zd.name) ? Wd.push({
        friend: Zd,
        place: "here"
      }) : "offline" === Zd.location.status ? Pd.push({
        friend: Zd,
        place: "offline"
      }) : Nd.push({
        friend: Zd,
        place: "online"
      }));
      return [...Nd, ...Wd, ...Pd]
    }

    function Wd(dd, Jd, kd) {
      const Nd = [],
        Wd = dd.flatMap((dd => "here" === dd.place ? [dd.friend.name] : []));
      for (const Pd of [...Wd, ...Jd]) pd(Nd, Pd) || pd(kd, Pd) || Nd.push(Pd);
      return Nd
    }

    function Pd(dd, Jd) {
      return null === dd || void 0 === dd || !dd.canManage || pd(dd.whitelist, Jd) ? "none" : "whitelist" === dd.visibility ? "required" : "quiet"
    }

    function Zd(dd) {
      if (null === dd) return !0;
      const {
        visibility: Jd
      } = dd;
      return "public" === Jd || "unlisted" === Jd || "whitelist" === Jd && dd.canManage
    }

    function gd(dd, Jd, kd) {
      if (kd) {
        const kd = Jd.filter((Jd => !pd(dd.whitelist, Jd)));
        return {
          ...dd,
          whitelist: [...dd.whitelist, ...kd]
        }
      }
      return {
        ...dd,
        whitelist: dd.whitelist.filter((dd => !pd(Jd, dd)))
      }
    }

    function Cd(dd, Jd) {
      const kd = [];
      for (let pd = 0; pd < dd.length; pd += Jd) kd.push(dd.slice(pd, pd + Jd));
      return kd
    }
    kd.d(Jd, {
      c: () => Zd,
      g: () => Wd,
      j: () => Nd,
      l: () => pd,
      o: () => Cd,
      r: () => Pd,
      t: () => gd
    })
  },
  37076: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(22),
      Nd = kd(1332);

    function Wd() {
      const {
        clientEscMenuOptions: dd
      } = (0, pd.j)(["clientEscMenuOptions"]);
      return (0, Nd.t)() && dd.showChat
    }
  },
  37011: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd
    });
    var pd = kd(2634),
      Nd = kd(3566),
      Wd = kd(2793);
    const Pd = ["Unable to create vertex buffer"];
    let Zd = {};

    function gd(dd, Jd) {
      const kd = new Date;
      console.error(`${kd.getUTCHours()}:${kd.getUTCMinutes()}:${kd.getUTCSeconds()}`, dd, Jd, null === Jd || void 0 === Jd ? void 0 : Jd.stack), Pd.includes(null === Jd || void 0 === Jd ? void 0 : Jd.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, pd.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${Jd.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Wd.logError)("warning", `${dd}\n ${Jd} "\n" ${null===Jd||void 0===Jd?void 0:Jd.stack}`);
      const Nd = dd + Jd + (null === Jd || void 0 === Jd ? void 0 : Jd.stack);
      Nd in Zd || ((0, Wd.logError)("error", `${dd}\n ${Jd} "\n" ${null===Jd||void 0===Jd?void 0:Jd.stack}`), Zd[Nd] = !0)
    }(0, Nd.onGameReset)((() => {
      Zd = {}
    }))
  },
  4729: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Xd,
      d: () => jd
    });
    var pd = kd(4733),
      Nd = kd(300);
    const Wd = 120,
      Pd = 260,
      Zd = 1.15,
      gd = 1.2,
      Cd = 2,
      Kd = 1.08,
      od = .8,
      ld = .95,
      Qd = 8,
      Ld = "[\"')\\]\u300d\u300f\uff09]*",
      Od = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ld}$`),
      ed = new RegExp(`[?\uff1f]${Ld}$`),
      Rd = new RegExp(`[!\uff01]${Ld}$`),
      Id = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Gd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      vd = new RegExp(`[${Gd}]`),
      xd = new RegExp(`[${Gd}]|[^${Gd}]+`, "g"),
      qd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Bd(dd) {
      let Jd = 2166136261;
      for (let kd = 0; kd < dd.length; kd++) Jd ^= dd.charCodeAt(kd), Jd = Math.imul(Jd, 16777619);
      return (Jd >>> 0) / 4294967295 * 2 - 1
    }

    function sd(dd) {
      var Jd;
      if (vd.test(dd)) return 1;
      const kd = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        pd = kd.replace(/[^0-9]/g, "");
      if (pd.length > 0 && !/\p{L}/u.test(kd)) return Math.min(pd.length, 4);
      const Nd = null !== (Jd = kd.match(qd)) && void 0 !== Jd ? Jd : [];
      if (0 === Nd.length) {
        var Wd, Pd;
        const dd = null !== (Wd = null === (Pd = kd.match(/\p{L}/gu)) || void 0 === Pd ? void 0 : Pd.length) && void 0 !== Wd ? Wd : 0;
        return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Qd)
      }
      const Zd = kd.replace(/[^\p{L}]/gu, ""),
        gd = Nd.length > 1 && "e" === Nd.at(-1) && Zd.endsWith("e") && !Zd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
      return Math.min(Nd.length - (gd ? 1 : 0), Qd)
    }

    function ad(dd) {
      return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Md(dd) {
      const Jd = dd.replace(/[^\p{L}]/gu, "");
      return Jd.length >= 2 && Jd === Jd.toUpperCase() && Jd !== Jd.toLowerCase()
    }

    function Fd(dd, Jd) {
      var kd;
      const Qd = Jd && (0, pd.k)(Jd),
        Ld = null !== (kd = null === Qd || void 0 === Qd ? void 0 : Qd.syllableMs) && void 0 !== kd ? kd : pd.b,
        Gd = function(dd) {
          const Jd = [];
          for (const pd of (0, Nd.Wb)(dd))
            if ("string" === typeof pd)
              for (const dd of pd.split(/(\s+)/)) {
                if ("" === dd) continue;
                if (/^\s+$/.test(dd)) {
                  Jd.push({
                    kind: "space",
                    text: dd
                  });
                  continue
                }
                if (!vd.test(dd)) {
                  Jd.push({
                    kind: "word",
                    text: dd,
                    delayMs: 0
                  });
                  continue
                }
                let pd = !0;
                for (const Nd of null !== (kd = dd.match(xd)) && void 0 !== kd ? kd : []) {
                  var kd;
                  const dd = Jd.at(-1);
                  pd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || vd.test(Nd) || /[\p{L}\p{N}]/u.test(Nd) ? (pd || Jd.push({
                    kind: "space",
                    text: "\u200b"
                  }), Jd.push({
                    kind: "word",
                    text: Nd,
                    delayMs: 0
                  }), pd = !1) : dd.text += Nd
                }
              } else Jd.push({
                kind: "icon",
                text: pd.icon,
                delayMs: 0
              });
          return Jd
        }(dd),
        qd = [];
      let Fd = [];
      for (const pd of Gd) "space" !== pd.kind && (Fd.push(pd), Od.test(pd.text) && (qd.push(Fd), Fd = []));
      qd.push(Fd);
      const Yd = [];
      let md = 0;
      for (const pd of qd) {
        var bd, Sd;
        const dd = null !== (bd = null === (Sd = pd.at(-1)) || void 0 === Sd ? void 0 : Sd.text) && void 0 !== bd ? bd : "",
          Jd = ed.test(dd),
          kd = Rd.test(dd),
          Nd = pd.map((dd => "word" === dd.kind ? sd(dd.text) : 1)),
          Gd = Nd.findLastIndex((dd => dd > 0));
        for (const [ed, Rd] of pd.entries()) {
          const dd = "word" === Rd.kind,
            pd = Nd[ed];
          Rd.delayMs = md;
          for (let Nd = 0; Qd && Nd < pd; Nd++) {
            const {
              intonation: Wd
            } = Qd;
            let Pd = Gd > 0 ? -Wd.declineSemitones * (ed / Gd) : 0;
            Pd += Bd(`${ad(Rd.text)}|${Nd}`) * Wd.variationSemitones;
            const Od = Math.min(1, Wd.variationSemitones);
            let Id = Qd.glideSemitones,
              vd = 1;
            kd && (Pd += Wd.exclaimLiftSemitones, vd *= Zd), Jd && ed === Gd && (Pd += Wd.questionRiseSemitones * (pd > 1 ? .5 + .5 * Nd / (pd - 1) : 1), Nd === pd - 1 && (Id = Math.abs(Id) + Wd.questionRiseSemitones / 2)), dd && Md(Rd.text) && (Pd += Cd * Od, vd *= gd), pd > 1 && 0 === Nd && (Pd += od * Od, vd *= Kd), Yd.push({
              atMs: md + Nd * Ld,
              semitones: Pd,
              glideSemitones: Id,
              durationMs: Nd < pd - 1 ? Math.min(Qd.durationMs, Ld * ld) : Qd.durationMs,
              level: vd
            })
          }
          md += pd * Ld + (Od.test(Rd.text) ? Pd : Id.test(Rd.text) ? Wd : 0)
        }
      }
      return {
        pieces: Gd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
          kind: "icon",
          icon: dd.text,
          delayMs: dd.delayMs
        } : {
          kind: "word",
          text: dd.text,
          delayMs: dd.delayMs
        })),
        blips: Yd
      }
    }
    var Yd = kd(1211),
      md = kd(1273),
      bd = kd(1938);

    function Sd(dd) {
      if ("string" === typeof dd) return dd;
      const Jd = md.c.get().getCurrentLanguageCode();
      return (0, Yd.t)(Jd, dd.translationKey, (0, Yd.r)(dd.params, bd.d.shown))
    }

    function jd(dd) {
      const Jd = void 0 === dd.voice ? null : (0, pd.m)(dd.voice),
        kd = Jd && (0, pd.k)(Jd);
      return {
        plan: Fd(Sd(dd.line), kd),
        synth: kd
      }
    }

    function Xd(dd) {
      const Jd = [];
      let kd = [];
      for (const [Nd, Wd] of dd.entries()) {
        var pd;
        "space" === Wd.kind && (" " !== Wd.text || "icon" !== (null === (pd = dd[Nd + 1]) || void 0 === pd ? void 0 : pd.kind)) ? (kd.length > 0 && Jd.push(kd), Jd.push([Wd]), kd = []) : kd.push(Wd)
      }
      return kd.length > 0 && Jd.push(kd), Jd
    }
  },
  36853: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    const pd = [{
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

    function Nd(dd, Jd, kd) {
      const Nd = Math.abs(dd - Jd),
        Wd = Date.now() - kd;
      for (const Pd of pd)
        if (dd < Pd.maxDist) return Nd >= Pd.hardUpdateDist || Wd > Pd.timeBetweenSoftChecks && Nd >= Pd.softUpdateDist;
      return !1
    }
  },
  37117: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      d: () => Wd,
      e: () => Nd
    });
    const pd = [.25, .5, 1, 2, 4, 8, 16];

    function Nd(dd, Jd) {
      const kd = pd;
      let Nd = kd.indexOf(dd);
      return -1 === Nd && (Nd = kd.findIndex((Jd => Jd >= dd)), -1 === Nd && (Nd = kd.length - 1)), "up" === Jd ? kd[Math.min(Nd + 1, kd.length - 1)] : kd[Math.max(Nd - 1, 0)]
    }

    function Wd(dd) {
      return dd <= pd[0]
    }

    function Pd(dd) {
      return dd >= pd[pd.length - 1]
    }
  },
  37154: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      f: () => Nd
    });
    const pd = "data-replay-ui-active",
      Nd = [{
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
  37160: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Cd,
      e: () => od,
      h: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(37154);

    function Pd() {
      const dd = {};
      for (const {
          group: Jd
        }
        of Wd.f) dd[Jd] = !0;
      return dd
    }
    let Zd = Pd();

    function gd() {
      Nd.j.nO("replayViewer|uiVisibilityChanged")
    }

    function Cd() {
      return Zd
    }

    function Kd(dd, Jd) {
      Zd[dd] !== Jd && (Zd = {
        ...Zd,
        [dd]: Jd
      }, "nametag" === dd && pd.d.set({
        areNametagsHidden: !Jd
      }), gd())
    }

    function od() {
      Zd = Pd(), pd.d.set({
        areNametagsHidden: !1
      }), gd()
    }
  },
  9274: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      d: () => Nd,
      e: () => Kd
    });
    var pd = kd(1598);

    function Nd(dd) {
      var Jd;
      return {
        ...Pd.store,
        yaw: Pd.store.yaw + (null !== (Jd = pd.c[dd].previewYaw) && void 0 !== Jd ? Jd : 0)
      }
    }
    const Wd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Pd = {
        player: Wd,
        store: {
          ...Wd,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Zd(dd, Jd) {
      dd instanceof Promise ? dd.then(Jd).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Jd(dd)
    }
    class gd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Jd;
        this.view = dd, null === (Jd = this.opened) || void 0 === Jd || Jd.show(dd)
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Cd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), Zd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Jd) {
        var kd;
        null === (kd = this.opened) || void 0 === kd || kd.setCosmetic(dd, Jd)
      }
      playEmote(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.playEmote(dd)
      }
      setOrbit(dd) {
        var Jd;
        null === (Jd = this.opened) || void 0 === Jd || Jd.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Jd;
        await this.ready, await (null === (Jd = this.opened) || void 0 === Jd ? void 0 : Jd.untilDrawn(dd))
      }
      resize(dd, Jd) {
        var kd;
        this.size = {
          width: dd,
          height: Jd
        }, null === (kd = this.opened) || void 0 === kd || kd.resize(dd, Jd)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const Kd = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new gd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new gd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new gd(this.current().openMobLineup(dd))
      }
      openCharacter(dd, Jd) {
        return new Cd(this.current().openCharacter(dd, Jd))
      }
    }
  },
  9272: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd.c,
      f: () => pd.d,
      j: () => pd.e
    });
    var pd = kd(9274);
    class Nd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Wd {
      constructor() {
        this.mobScene = new Nd((() => Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(246), kd.e(95), kd.e(247), kd.e(73), kd.e(72), kd.e(244), kd.e(71), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(265), kd.e(223), kd.e(238), kd.e(249), kd.e(252), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(155)]).then((() => kd(41071))))), this.characterScene = new Nd((() => Promise.all([kd.e(70), kd.e(227), kd.e(226), kd.e(246), kd.e(95), kd.e(247), kd.e(73), kd.e(72), kd.e(244), kd.e(71), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(265), kd.e(223), kd.e(238), kd.e(249), kd.e(252), kd.e(75), kd.e(197), kd.e(217), kd.e(94), kd.e(220), kd.e(235), kd.e(114), kd.e(236), kd.e(74), kd.e(113), kd.e(154)]).then((() => kd(41150)))))
      }
      openMob(dd) {
        return this.mobScene.run((Jd => Jd.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Jd => Jd.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Jd => Jd.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Jd) {
        return this.characterScene.run((kd => kd.openCharacterPreview(dd, Jd)))
      }
    }
    pd.e.setDefaultHost((() => new Wd))
  },
  37009: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      e: () => Wd
    });
    const pd = new Map;

    function Nd(dd) {
      var Jd;
      return null === dd ? null : null !== (Jd = pd.get(dd)) && void 0 !== Jd ? Jd : null
    }

    function Wd(dd, Jd) {
      return pd.set(dd, Jd), () => {
        pd.get(dd) === Jd && pd.delete(dd)
      }
    }
  },
  36783: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      D: () => Id,
      e: () => Wd,
      h: () => Od,
      i: () => ed,
      m: () => Zd,
      o: () => ld,
      s: () => Rd,
      w: () => od,
      x: () => Gd
    });
    var pd = kd(22),
      Nd = kd(29);
    const Wd = "clientGameInventoryButtonsChanged",
      Pd = new Map;

    function Zd() {
      return [...Pd.values()].sort(((dd, Jd) => {
        var kd, pd;
        return (null !== (kd = dd.order) && void 0 !== kd ? kd : 0) - (null !== (pd = Jd.order) && void 0 !== pd ? pd : 0)
      }))
    }
    let gd = null;

    function Cd(dd) {
      gd = dd
    }
    let Kd = !1;

    function od(dd) {
      Kd = !0;
      try {
        dd.onClick()
      } finally {
        Kd = !1
      }
      dd.panel && "clientGame" === pd.d.get("openInGameMenuName") && Cd(dd.id)
    }

    function ld() {
      return Kd
    }

    function Qd() {
      return Zd().filter((dd => dd.panel && !dd.disabled))
    }

    function Ld(dd) {
      const Jd = Qd(),
        kd = Jd.findIndex((dd => dd.id === gd));
      return !(kd < 0 || Jd.length < 2) && (od(Jd[(kd + dd + Jd.length) % Jd.length]), !0)
    }

    function Od() {
      return null !== gd && Qd().length > 1
    }

    function ed() {
      Cd(null)
    }

    function Rd() {
      "inventory" !== pd.d.get("openInGameMenuName") && Cd(null)
    }

    function Id() {
      const dd = gd;
      return Cd(null), dd
    }

    function Gd(dd) {
      return Pd.set(dd.id, dd), Nd.j.nO(Wd, Zd(), !0), () => {
        Pd.get(dd.id) === dd && (Pd.delete(dd.id), Nd.j.nO(Wd, Zd()))
      }
    }
  },
  36779: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      g: () => ed,
      j: () => Rd,
      m: () => ld,
      o: () => Cd,
      p: () => Od,
      t: () => Qd,
      w: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(36783);
    const Zd = "clientGameUiChanged";
    let gd = null;

    function Cd() {
      return gd
    }

    function Kd(dd, Jd) {
      const kd = {
        content: dd,
        menu: Jd
      };
      return gd = kd, Nd.j.nO(Zd, gd, !0), () => {
        gd === kd && (gd = null, Ld = !1, ed(), Nd.j.nO(Zd, null))
      }
    }
    let od = null;

    function ld() {
      return od
    }

    function Qd(dd) {
      return od = dd, () => {
        od === dd && (od = null)
      }
    }
    let Ld = !1;

    function Od() {
      const dd = pd.d.get("openInGameMenuName");
      "clientGame" !== dd && (Ld = "inventory" === dd), (0, Pd.o)() || (0, Pd.i)(), (0, Wd.p)(Wd.d), pd.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ed() {
      Id(!1)
    }

    function Rd() {
      Id(Ld)
    }

    function Id(dd) {
      "clientGame" === pd.d.get("openInGameMenuName") && pd.d.set({
        openInGameMenuName: dd ? "inventory" : null
      }), dd || (0, Pd.i)(), Ld = !1
    }
  },
  37128: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => AJ,
      g: () => wJ
    });
    var pd = kd(4090),
      Nd = kd(610),
      Wd = kd(3615),
      Pd = kd(3633),
      Zd = kd.n(Pd);
    const gd = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Cd = "EV_boolean",
      Kd = "EV_double",
      od = "EV_string",
      ld = "EV_doubleArr",
      Qd = "EV_armour",
      Ld = "EV_other",
      Od = "EV_cosmetics",
      ed = "OEV_boolean",
      Rd = "OEV_int",
      Id = "OEV_double",
      Gd = "OEV_string",
      vd = "OEV_stringArr",
      xd = "OEV_meshScaling",
      qd = "IV_int",
      Bd = "IV_string",
      sd = "IV_doubleArr",
      ad = "IV_double",
      Md = "HV_int",
      Fd = "HV_slots",
      Yd = "EnvV_string",
      md = "EnvV_double",
      bd = "EnvV_doubleArr",
      Sd = "EnvV_boolean",
      jd = {
        type: od,
        name: od,
        position: ld,
        rotation: ld,
        scale: Kd,
        speed: Kd,
        jumping: Cd,
        crouching: Cd,
        cameraPitch: Kd,
        armSwinging: Cd,
        heldItemName: od,
        heldItemEnchantmentTier: od,
        pose: od,
        followingEId: od,
        ridingVehicleEId: od,
        leaderboardTop: od,
        meshKind: od,
        meshOpts: od,
        followingOffset: ld,
        shouldMatchFollowingEntityRotation: Cd,
        meshOffset: ld,
        baseRenderHeading: Kd,
        armour: Qd,
        dU: Ld,
        playerCustomisations: Od,
        variation: od,
        metaInfo: od,
        soundName: od,
        volume: Kd,
        refDistance: Kd,
        maxHearDist: Kd,
        rate: Kd,
        aiState: od
      },
      Xd = {
        opacity: Id,
        zIndex: Rd,
        overlayColour: Gd,
        canSee: ed,
        meshScaling: xd,
        nameTagInfo: Gd,
        multilineTextBox: Gd,
        hasPriorityNametag: ed,
        ranks: vd,
        nameColour: Gd,
        _isAlive: ed,
        _invisibleEffect: ed,
        _invincible: ed,
        killfeedColour: Gd,
        hideNameSeed: Rd,
        _glowingEffect: ed,
        lockHeadToBody: ed
      },
      fd = {
        itemName: Bd,
        amount: qd,
        position: sd,
        size: ad,
        attributes: Bd
      },
      nd = {
        skyBox: Yd,
        fogColourOverride: Yd,
        fogChunkDistanceOverride: md,
        cameraTint: bd,
        fogOnSkybox: Sd,
        fogBlockDistanceOverride: md
      },
      Ud = {
        type: "array",
        items: "double"
      },
      yd = {
        type: "array",
        items: "int"
      },
      Dd = {
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
      Td = {
        type: "map",
        values: Ud
      };

    function Ed(dd, Jd) {
      return {
        type: "record",
        name: dd,
        fields: [{
          name: "x",
          type: Jd
        }]
      }
    }
    const cd = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ed(ed, "boolean"), Ed(Rd, "int"), Ed(Id, "double"), Ed(Gd, "string"), Ed(vd, {
              type: "array",
              items: "string"
            }), Ed(xd, Td)]
          }]
        }
      },
      hd = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ed(Cd, "boolean"), Ed(Kd, "double"), Ed(od, "string"), Ed(ld, Ud), Ed(Qd, Dd), Ed(Ld, cd), Ed(Od, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      rd = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ed(qd, "int"), Ed(Bd, "string"), Ed(ad, "double"), Ed(sd, Ud)]
          }]
        }
      },
      ud = {
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
      td = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Ed(Md, "int"), Ed(Fd, ud)]
        }]
      },
      Vd = {
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
      zd = {
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
      Hd = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Ed(Yd, "string"), Ed(md, "double"), Ed(bd, Ud), Ed(Sd, "boolean")]
          }]
        }
      },
      wd = [{
        name: "aY",
        type: "record",
        fields: [{
          name: "pos",
          type: yd
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
          type: yd
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
      Ad = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "Jk",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Wk",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "Pk",
              type: ["null", "string", Ud],
              default: null
            }, {
              name: "Zk",
              type: ["null", "double"],
              default: null
            }, {
              name: "gk",
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
          name: "Pd",
          type: "string"
        }, {
          name: "Zd",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Cd",
          type: "double"
        }, {
          name: "Kd",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Yp",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: Ud
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "tJ",
          type: "string"
        }, {
          name: "Kk",
          type: ["null", "double"],
          default: null
        }, {
          name: "lk",
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
          name: "Xk",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "fk",
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
      dJ = [{
        name: "position",
        type: Ud
      }, {
        name: "direction",
        type: Ud
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

    function JJ() {
      const dd = [{
        name: "entities",
        type: {
          type: "map",
          values: hd
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: rd
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: dJ
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
              items: td
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Vd],
        default: null
      }];
      return dd.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "tJ",
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
      }), dd.push({
        name: "uiElements",
        type: zd
      }, {
        name: "environment",
        type: Hd
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: wd
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: Ad
        }
      }), dd
    }
    const kJ = {
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
                name: "Do",
                type: "int"
              }, {
                name: "position",
                type: Ud
              }, {
                name: "direction",
                type: Ud
              }, {
                name: "easing",
                type: Ud
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
    let pJ;

    function NJ(dd) {
      if (9 === dd) return pJ ??= (Jd = [{
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
            name: "AY",
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
              type: yd
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
            fields: JJ()
          }
        }
      }, kJ], Zd().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: Jd
      }, {
        Hl: Object.create(null)
      })), pJ;
      var Jd
    }
    var WJ = kd(2716);
    let PJ, ZJ, gJ, CJ;
    const KJ = 12;
    var oJ, lJ;
    const QJ = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, !1, void 0, 3, 4, !0, 16, 107, 108, 109, 15, 2, 100, 10, 5, 11, 9];

    function LJ(dd) {
      return typeof pk !== QJ[5] && pk ? (new pk).decode(new Nk(dd)) : typeof Wk !== QJ[5] && Wk ? Wk.from(dd).toString("utf-8") : gk(dd)
    }

    function OJ() {}

    function eJ() {
      eJ = function() {}
    }
    var RJ, IJ;
    eJ(oJ = {}, lJ = ["}M.#n4gSV)R{`^wzmt]CP#D5n6", "$abCaXUP!8|HV9HxRt2#Z>48}(iPjaG_.k4KG#or2", "$g*}y>w0wM", 'YVE=VBFrV)#|HJ"J[@./6svu,P29.PW/72w#W^#>:(t', "g8`,EIJC|lX;;hA~$4`iF3`C<6", "v/9$5vGP@88jA", "Ii_O><?gqB?O>rB]>@i#yn;/#|v+s+Y/!E", "KkU/Z&#w|9vr{&5u:%i${^RPd3<J?J:X_yOzH+erO<6*Ez;0NlG+?tE", 'P*+%9G;7e>",_&:X6>_%&HNKtPk#F&I__8x+84@SX6<p@z5vw2R}', "/M^`L@~A", "$<x4FRjby3Q>$[DZs@<R11ngV<Loz^JZqE", "/?nkb[mPbjTu]OXr<tE%>+s/8;w0QOSx2ui4H:6bn3R4ZzHr", "P~ZMaVGguMM?A", 'Y)f=<ehPNxp"AexbeXb?btCb%', "*tuD7_^5(7S2Wvz~h.[4<ew1BVH,F3Nb)A", 'Z4Lpg*."%P)[O@=vaDx#t[Q8M:)tK2D~|3"p^S+o@<ECp2L_ojw4%vNra', "W]OzPw+o2?/jUT/~", "LD*$]0%QSPs#VO8", "^Mdf]H;/dK[qrz?bdjf%msE", "~g`M9Gzf~qMh1@[0`89fsTE", "t4Z,B7LHEu9~e6%tOyj%cnkCBK", 'D?Zo7e(g:l/+Q"TXZS|O.m`b=B<)+3%^0.*yY3z7(7)Il6Gzrg)4wHZf_9>', "{jx#$QwbU3a*:T9l", 'ytDMp<"/B~@,6LH^ww?MF=qP6u*J!mq~il5', "6kw7d<~9P)AMxL8yTdn`wO~f5<l@:HUx0XG+7t1>&<:He{2oLtVpmV&>!MHHA", 'b*@wG*{X^9cH{{RxFjTyxn<9RK=R""`/M<A%uVf9?Pm!E2', "K4E=5X^rg3^q@&Yv#w4#9s_0R~", 'e`7`d0I>O6|H"93]{tPK_&t9n<WHe210=?bDQpRgd|_fqtK', ".>>?J>Fp;x?q~@@_/6ki}vk/58#{A", "rB:iyTU8t?r+|+|iDwH,}sgur9S", 'W3Za9R<04V?H++o/Q%r?=*J&HPLoQs"JD@g`ssFSRVEw6mR_IXJz~k+o2', "(3fMGeC9+~@~xGSuIHSO|<>0U)e!YyD/Bii4H7VoD>R4E@1S/lMoT^vpf", "u/!/.?;sB|^VIL5~.jlfOCX5", ",V7:?_5K$jS~0L/~W@LMrn}Jf", "P3sK*+*8G?Zw|2Oy$*B#8", "H%]+^OD(=Mrw{z{SZk^f][PuBjm|)G</ht37p<kb<7p`|2m_rg2", 'B3&px"&C)~}ZRkP]0>AoWd4u@;"7sr8_,w5', "T_yz(v4u>PyVba$x6ODCC:w0V6_Lb@K", ":L+M<_T9yVQD^JmzG>%=VevumM>,HP&zeH2", "Jk!Gun]5}", 'rwci"IQg&KNjL}<])4_p<4eP(7fImLKt&j5#&*Of:9M@TL}J,ZPKJ', "%OY#[@mg9;LoTHa`IL@,]tx&V<~VhT?b`Sx/okW0C)y~8T0~7E", ">wm#{:?{s<;ja6Euo/0+2@qo~?@3,vo~1E", "5?i/!g~9TMhVs+:0E<VfR^4P5<e#_yZ0<36oMIOC#3/Xz5", "<VyCwtUS@7M@B2}o@js%GwB52?cDMBcb%u_Mz?E", "B?Oz}BJ&5<xz`5gzC*9``?ou<K%tq9eijS&iO*x7Jjo+c30ua?WDWT4%]jO", 'm`"y,:xsN((aU2fuw%&,wgmXBV8[[a8xNZy+L4u(PL', "7Xt$YpS5~?+,)2@zzA", "y?X+Isz&]3b0Ohfr0%e4kX>A", "|ykaJ>V5", '{jACAe.f1PORthHrt4+O"7LK;xzX@&J/uwZ,u', "Y)fRL>:/tPD", "/SSM3PWZr~<,^^7SOXrnt,KK3LFN}@!uLD6R>gpPg3d~_mCx", "^Vdims%r5>0", '&lcMC"E', '"ZJ%Z"OAE>[iq99x5?gpQ"7be?MCVt8yG2V:g|E', "&j[a][>0hMF<a26S?@^O|g~J8;t,5H[Zz4Ni$46J<|}tJa", 'z/:iS*=&_P8jNs(u86<ifvf7Wj~%IHOS!Ml47|4g.lU"HO|i', "n)+MI>lQX86P8kybu8Ywy", "S%mwV4w0ouLl{&!~dw;4A@`x?9]", "r/i$6V^P%xS2H9:bu%e7sRfCa", "!ZHk5+;f&qz98_E]rwWKpg&<LuQ!J@zb<,Lfw|q8VK~C2GM", "kw~C&_Qp%${uCyQiiMK=Fn1Z.jB#~+<Z,3uz|<}c$V)*3LIy", 'M*nOpeD4:9P|(z;bel%p#"#>V|a*vTd_Z>4wAQ=/mxd', '9y`ajI"/`B1/OaH`$y$+ns{%(6`pN}/oV?EMoksA', "!Vx/>wKu[)$w@&2JiBy+_C#>x?Q/M@lzSj5", 'RdYK)>t>0?4A5J=`5u"$9@4o.~"#e{i]B`kMVIJ7JVmKhzqvT]uz;', 'c@.$b|l5R)Em@2QbmtGzFnHgMV3{`2[0}uRye"#9lxHi{66S,35', "Yi6M$B)9g<ORM[(]CX*Ga:I<3~v`&H3]s%<,9:c>xBa+N}|].*5", '??hz"B;9d7e8YsqonX4DJS?5', "*dN`Q^4gPLp,e&(oy/!7AI#>!>}&qt=r&l/`dw[C66mG7aL", ';<LR7m}bv?X2]Jj~^2Ip|w5o]lG0O+YNA?nR~V&f=BKj{0QNpSD,"7sbF~|', '<ST}XnhgL<?HSkA.oBT4_<qu=<?JXO3~:%np3w_9T?t~9v)^1H8:!7)"1xt', 'pjoi,"sb#3,D*24x~uHpm"1AB3=R6kE]t?2}hVG(Vu@Vzy/0E6a}', "<,{?~p%p!?40{&HtlA", ";Z8#6VuK28:O7+>Zuw2G0?ObflhwSkcb+@T4?X?*#)", 'Q%K%dwkw(u^X|TWhfkB$=0?*yVi"TyhS[*i/?tH%}$jgTy8JQJz#^OE', ".lK%^m?5}", 'IjMCCV+8u6g3VJ$^:S}f"@uv`8uV!Lj`i6ni%+Jb^9POnJ=`nwB`Z"p5', "g*V,okZfvx@|L}aumd#`nVxA", "<Lof?mSodV,)XJ~_ZA", "D%YK>IYVBL$@o[pzKD+,~>#1YLa%>v[~kM4D>7sweMU", 'S//`fvgPF9G,jJgS"wjK', "|li4yn3&_P}Ik3~_2;h={T`0Ou_", 'Zjd4xTB5{7d"otFiayE=><EPd|K+p6>/bwR4N^V4N(Baqt>0ojAwypC/A<ZlA', "BtF?*BBgS~MZIHb`j~Hf(vg5bl&RDhebnE", '2y[fUm0"3~|DkL1X{HJ+<Ir5.K~msr2r{Vi4!I2x$l)9BT$', "Wjjw<_Nv1?4!#s)J)tt`BIIA(<RB_yezU>6o{s|4[))+sJC^q%So>ec06BB", '[Ska}X|u+j[,t93]stCDU<~7{ut"Fa8x3Vey^|kfz3e4<6FNnVIiN', 'fyJw`1"98;A=X9GXBi2D}sE', "eX<a;Sk9<8zrRTFhy?)+U0~x28}[+6kxI|_o?tk9RKt$hz$", "OdKo]?I9u6", 'Wlci`1&A28#DF&b`&>}`nV6J*?LZ]OS^&`:p]?0x66"Dv3voY3Ez~^V%f', "^/kiksouJ~f&E_~Sd>6=`?|p/qGrW{</oA", "l?>Dg#_xL;A*sJRxEuPKhvc0T(m|nJQh#3U$XnRp]jz", "8O$#S[U5", "QB!>g2ad", "/2MX/6Bd", "9R@DL#5d", "hZg$D", "KyGWB/fd", "agAm.j_S", "MMCk/", "!9K`o0Y+", "T5+}iz0d", "(=+|5Aqs", "7$wtn", "Ojpk", "Jj+|S]&s", "?$(b", "aWC$0=ms", "NjL`x.Xs", "i$S>L=wC", 'zC;"TqqI', "zP2;Q}QZ", "HiSt", "21<&UGim", "$EhATkN&", "a^2k9MrX^$l4eSooAibL22?@r7On{;q", 'Jrk~[KZ""V^', "_!a[+9uQ", "#O2enerQ", "_!Qe&GjQ"]), eJ(kk = function() {
        var dd, Jd, kd, pd = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        eJ(dd = void 0, Jd = []);
        try {
          eJ(dd = Object, Jd[QJ[11]]("".__proto__.constructor.name))
        } catch (Nk) {}
        dd: for (kd = QJ[0]; kd < pd[QJ[4]]; kd++) try {
          var Nd;
          for (dd = pd[kd](), Nd = QJ[0]; Nd < Jd[QJ[4]]; Nd++)
            if (typeof dd[Jd[Nd]] === QJ[5]) continue dd;
          return dd
        } catch (Nk) {}
        return dd || this
      }() || {}, pk = kk.TextDecoder, Nk = kk.Uint8Array, Wk = kk.kL, Pk = kk.String || String, Zk = kk.Array || Array, gk = function() {
        var dd, Jd, kd = new Zk(128);
        return eJ(dd = Pk[QJ[8]] || Pk.fromCharCode, Jd = []),
          function(pd) {
            var Nd, Wd, Pd, Zd;
            for (eJ(Wd = void 0, Pd = pd[QJ[4]], Jd[QJ[4]] = QJ[0]), Zd = QJ[0]; Zd < Pd;) eJ(Wd = pd[Zd++], Wd <= 127 ? Nd = Wd : Wd <= 223 ? Nd = (31 & Wd) << QJ[7] | pd[Zd++] & QJ[6] : Wd <= 239 ? Nd = (Wd & QJ[26]) << QJ[10] | (pd[Zd++] & QJ[6]) << QJ[7] | pd[Zd++] & QJ[6] : Pk[QJ[8]] ? Nd = (Wd & QJ[9]) << 18 | (pd[Zd++] & QJ[6]) << QJ[10] | (pd[Zd++] & QJ[6]) << QJ[7] | pd[Zd++] & QJ[6] : (Nd = QJ[6], Zd += QJ[19]), Jd[QJ[11]](kd[Nd] || (kd[Nd] = dd(Nd))));
            return Jd.join("")
          }
      }()),
      function(dd) {
        typeof oJ[dd] === QJ[5] ? oJ[dd] = function(dd) {
          var Jd, kd, pd, Nd, Wd, Pd, Zd;
          for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
            var gd = 'EA52a}%fKM$)89L6h~uxl;NZrJyzi/o`D=X0vt^_Sb].Udg&@OGwp7?:|>P3B[V<(jq!*"Hk+,4CR#nI{smTe1QcFWY'.indexOf(Jd[Zd]);
            if (gd !== -QJ[1])
              if (Pd < QJ[0]) Pd = gd;
              else {
                eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                do {
                  eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                } while (Wd > QJ[9]);
                Pd = -QJ[1]
              }
          }
          return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
        }(lJ[dd]) : oJ[dd]
      }(95), (() => {
        function dd(dd) {
          return typeof oJ[dd] === QJ[5] ? oJ[dd] = function(dd) {
            var Jd, kd, pd, Nd, Wd, Pd, Zd;
            for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
              var gd = 'e+doLKktabcUFATZQpBCNHrjIGDWiJqhXgfMS[sl;m{yP.0(nx`YVR}EO/w45_?]%7&^2#$zv9">u6=,)!~@*81<3|:'.indexOf(Jd[Zd]);
              if (gd !== -QJ[1])
                if (Pd < QJ[0]) Pd = gd;
                else {
                  eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                  do {
                    eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                  } while (Wd > QJ[9]);
                  Pd = -QJ[1]
                }
            }
            return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
          }(lJ[dd]) : oJ[dd]
        }
        dd(96) in OJ && function() {
          var dd, Jd = function(Jd, kd, pd) {
            var Nd = {};
            return pd.length !== Jd.length + kd.length ? QJ[17] : dd(Jd, kd, pd, QJ[0], QJ[0], QJ[0], Nd)
          };
          eJ(dd = function(Jd, kd, pd, Nd, Wd, Pd, Zd) {
            var gd = QJ[17];
            return Pd >= pd.length ? QJ[21] : Zd["" + Nd + Wd + Pd] !== QJ[18] ? Zd["" + Nd + Wd + Pd] : (pd[Pd] === Jd[Nd] && pd[Pd] === kd[Wd] ? gd = dd(Jd, kd, pd, Nd + QJ[1], Wd, Pd + QJ[1], Zd) || dd(Jd, kd, pd, Nd, Wd + QJ[1], Pd + QJ[1], Zd) : pd[Pd] === Jd[Nd] ? gd = dd(Jd, kd, pd, Nd + QJ[1], Wd, Pd + QJ[1], Zd) : pd[Pd] === kd[Wd] && (gd = dd(Jd, kd, pd, Nd, Wd + QJ[1], Pd + QJ[1], Zd)), Zd["" + Nd + Wd + Pd] = gd, gd)
          }, console.log(Jd))
        }();
        const Jd = QJ[22],
          kd = dd(97) + dd(98) + dd(99),
          pd = [QJ[0], QJ[1], QJ[27], QJ[19]].map((Jd => {
            dd(QJ[28]) in OJ && function() {
              var dd = function(dd) {
                var Jd, kd, pd, Nd, Wd, Pd, Zd = QJ[0];
                for (eJ(Jd = {}, kd = QJ[0], pd = QJ[0], Nd = QJ[0], Wd = dd.length), Pd = QJ[0]; Pd < Wd; Pd++) {
                  var gd;
                  for (eJ(Jd = {}, kd = QJ[0], pd = QJ[1]), gd = Pd + QJ[1]; gd < Wd; gd++) dd[Pd].x !== dd[gd].x || dd[Pd].y !== dd[gd].y ? (Jd[Nd = dd[Pd].y === dd[gd].y ? Number.MAX_SAFE_INTEGER : (dd[Pd].x - dd[gd].x) / (dd[Pd].y - dd[gd].y)] || (Jd[Nd] = QJ[0]), eJ(Jd[Nd]++, kd = Math.max(kd, Jd[Nd]))) : pd++;
                  eJ(kd += pd, Zd = Math.max(Zd, kd))
                }
                return Zd
              };
              console.log(dd)
            }();
            let pd = QJ[0];
            for (let Nd = QJ[19]; Nd >= QJ[0]; Nd--) {
              function Wd(dd) {
                var Jd, kd, pd, Nd, Wd, Pd, Zd;
                for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                  var gd = 'VHShck#xQPft0pqM1FGub;Tg&B`d[/]n4)>N|WZ._?O*3{$j=sL9AmaRD~z",X}wUe6ECJl:%rYi+7o2yK8^<@v5(!I'.indexOf(Jd[Zd]);
                  if (gd !== -QJ[1])
                    if (Pd < QJ[0]) Pd = gd;
                    else {
                      eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                      do {
                        eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                      } while (Wd > QJ[9]);
                      Pd = -QJ[1]
                    }
                }
                return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
              }

              function Pd(dd) {
                return typeof oJ[dd] === QJ[5] ? oJ[dd] = Wd(lJ[dd]) : oJ[dd]
              }
              pd = pd << QJ[2] | kd[Pd(101) + Pd(102)](Jd * QJ[20] + Nd)
            }
            return pd >>> QJ[0]
          })),
          Nd = (Jd, kd) => (dd(103) + "P" in OJ && function() {
            var dd, Jd, kd, pd = function(Jd) {
              var kd = [];
              return (Jd === QJ[1] || Jd >= QJ[20]) && dd(kd, [], Jd, QJ[0]), kd
            };
            eJ(dd = function(pd, Nd, Wd, Pd) {
              var Zd;
              for (Zd = Pd; Zd < Wd; Zd++) {
                var gd;
                if (Nd.length !== Zd) return;
                for (gd = QJ[0]; gd < Wd; gd++) kd(Nd, [Zd, gd]) && (eJ(Nd.push([Zd, gd]), dd(pd, Nd, Wd, Zd + QJ[1])), Nd.length === Wd && pd.push(Jd(Nd)), Nd.pop())
              }
            }, Jd = function(dd) {
              var Jd, kd, pd = [];
              for (Jd = dd.length, kd = QJ[0]; kd < Jd; kd++) {
                var Nd;
                for (pd[kd] = "", Nd = QJ[0]; Nd < Jd; Nd++) pd[kd] += dd[kd][QJ[1]] === Nd ? "Q" : "."
              }
              return pd
            }, kd = function(dd, Jd) {
              var kd, pd = dd.length;
              for (kd = QJ[0]; kd < pd; kd++) {
                if (dd[kd][QJ[0]] === Jd[QJ[0]] || dd[kd][QJ[1]] === Jd[QJ[1]]) return QJ[17];
                if (Math.abs((dd[kd][QJ[0]] - Jd[QJ[0]]) / (dd[kd][QJ[1]] - Jd[QJ[1]])) === QJ[1]) return QJ[17]
              }
              return QJ[21]
            }, console.log(pd))
          }(), Jd << kd | Jd >>> 32 - kd),
          Wd = (dd, Jd, kd, pd, Wd) => {
            eJ(dd[Jd] += dd[kd], dd[Wd] = Nd(dd[Wd] ^ dd[Jd], QJ[22]), dd[pd] += dd[Wd], dd[kd] = Nd(dd[kd] ^ dd[pd], QJ[10]), dd[Jd] += dd[kd], dd[Wd] = Nd(dd[Wd] ^ dd[Jd], QJ[2]), dd[pd] += dd[Wd], dd[kd] = Nd(dd[kd] ^ dd[pd], QJ[9]))
          };
        CJ = (kd, Nd, Pd, Zd) => {
          function gd(dd) {
            return typeof oJ[dd] === QJ[5] ? oJ[dd] = function(dd) {
              var Jd, kd, pd, Nd, Wd, Pd, Zd;
              for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                var gd = 'UCs1bIDStPkRMVajhYJdLpqNZFXr0nO{|>Qul(&3fc/H,BmeE^@~7v$AKi"gWTzo%9?+Gy*=2_]85`x}#.6w)<:;[!4'.indexOf(Jd[Zd]);
                if (gd !== -QJ[1])
                  if (Pd < QJ[0]) Pd = gd;
                  else {
                    eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                    do {
                      eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                    } while (Wd > QJ[9]);
                    Pd = -QJ[1]
                  }
              }
              return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
            }(lJ[dd]) : oJ[dd]
          }
          const Cd = new DataView(Nd[dd(104)], Nd[gd(105) + gd(106)], KJ),
            Kd = new Uint32Array(Jd);
          eJ(Kd[gd(QJ[23])](pd), Kd[gd(QJ[23])](kd, QJ[20]), Kd[QJ[15]] = Cd[gd(QJ[24]) + gd(QJ[25])](QJ[0], QJ[21]), Kd[QJ[16]] = Cd[gd(QJ[24]) + gd(QJ[25])](QJ[20], QJ[21]), Kd[QJ[26]] = Cd[gd(QJ[24]) + gd(QJ[25])](QJ[2], QJ[21]));
          const od = new Uint32Array(Jd),
            ld = new Uint8Array(od[gd(110)]);
          for (let Qd = QJ[0], Ld = Pd; Qd < Zd[gd(111)]; Qd += Jd * QJ[20], Ld++) {
            function Od(dd) {
              var Jd, kd, pd, Nd, Wd, Pd, Zd;
              for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                var gd = 'NWm8LOoantA*(D01,k=3<q52j_i$y;u]vcZJB:Y.`gM@RV>HEQ)erbz7ls%Id4P{SwfTK~C|h"pF^&Ux!G?/9#}+6[X'.indexOf(Jd[Zd]);
                if (gd !== -QJ[1])
                  if (Pd < QJ[0]) Pd = gd;
                  else {
                    eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                    do {
                      eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                    } while (Wd > QJ[9]);
                    Pd = -QJ[1]
                  }
              }
              return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
            }

            function ed(dd) {
              return typeof oJ[dd] === QJ[5] ? oJ[dd] = Od(lJ[dd]) : oJ[dd]
            }

            function Rd() {
              var dd;
              eJ(dd = function(Jd, kd, pd) {
                var Nd, Wd, Pd, Zd = {};
                if (Jd[kd + pd] !== QJ[18]) return Jd[kd + pd];
                if (kd === pd) return QJ[21];
                for (Nd = QJ[0]; Nd < kd.length; Nd++) Zd[kd[Nd]] === QJ[18] && (Zd[kd[Nd]] = QJ[0]), Zd[pd[Nd]] === QJ[18] && (Zd[pd[Nd]] = QJ[0]), eJ(Zd[kd[Nd]]++, Zd[pd[Nd]]--);
                for (Wd in Zd)
                  if (Zd[Wd] !== QJ[0]) return Jd[kd + pd] = QJ[17], QJ[17];
                for (Pd = QJ[1]; Pd < kd.length; Pd++)
                  if (dd(Jd, kd.substr(QJ[0], Pd), pd.substr(QJ[0], Pd)) && dd(Jd, kd.substr(Pd), pd.substr(Pd)) || dd(Jd, kd.substr(QJ[0], Pd), pd.substr(pd.length - Pd)) && dd(Jd, kd.substr(Pd), pd.substr(QJ[0], pd.length - Pd))) return Jd[kd + pd] = QJ[21], QJ[21];
                return Jd[kd + pd] = QJ[17], QJ[17]
              }, console.log((function(Jd, kd) {
                return dd({}, Jd, kd)
              })))
            }
            gd(112) + "f" in OJ && Rd(), eJ(Kd[QJ[10]] = Ld, od[gd(QJ[23])](Kd));
            for (let Gd = QJ[0]; Gd < QJ[29]; Gd++) {
              function vd(dd) {
                var Jd, kd, pd, Nd, Wd, Pd, Zd;
                for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                  var gd = '$IcFhUnPLXVMCBpOSbERZaNo4.#t9vT~(Y)mueyJjGz3D_{q^wg2<|}6`?d@%QkAHWfilxr7sK=;0":!/1>5*&8[,+]'.indexOf(Jd[Zd]);
                  if (gd !== -QJ[1])
                    if (Pd < QJ[0]) Pd = gd;
                    else {
                      eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                      do {
                        eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                      } while (Wd > QJ[9]);
                      Pd = -QJ[1]
                    }
                }
                return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
              }

              function xd(dd) {
                return typeof oJ[dd] === QJ[5] ? oJ[dd] = vd(lJ[dd]) : oJ[dd]
              }

              function qd() {
                const dd = require("big-integer");
                module.exports = class {
                  static randomPrime(Jd) {
                    const kd = dd.one.shiftLeft(Jd - QJ[1]),
                      pd = dd.one.shiftLeft(Jd).prev();
                    for (; QJ[21];) {
                      let Jd = dd.randBetween(kd, pd);
                      if (Jd.isProbablePrime(256)) return Jd
                    }
                  }
                  static generate(Jd) {
                    const kd = dd(65537);
                    let pd, Nd, Wd;
                    do {
                      eJ(pd = this.randomPrime(Jd / QJ[27]), Nd = this.randomPrime(Jd / QJ[27]), Wd = dd.lcm(pd.prev(), Nd.prev()))
                    } while (dd.gcd(kd, Wd).notEquals(QJ[1]) || pd.minus(Nd).abs().shiftRight(Jd / QJ[27] - QJ[28]).isZero());
                    return {
                      e: kd,
                      n: pd.multiply(Nd),
                      d: kd.modInv(Wd)
                    }
                  }
                  static encrypt(Jd, kd, pd) {
                    return dd(Jd).modPow(pd, kd)
                  }
                  static decrypt(Jd, kd, pd) {
                    return dd(Jd).modPow(kd, pd)
                  }
                  static encode(Jd) {
                    const kd = Jd.split("").map((dd => dd.charCodeAt())).join("");
                    return dd(kd)
                  }
                  static decode(dd) {
                    const Jd = dd.toString();
                    let kd = "";
                    for (let pd = QJ[0]; pd < Jd.length; pd += QJ[27]) {
                      let dd = Number(Jd.substr(pd, QJ[27]));
                      dd <= 30 ? (kd += String.fromCharCode(Number(Jd.substr(pd, QJ[19]))), pd++) : kd += String.fromCharCode(dd)
                    }
                    return kd
                  }
                }
              }
              xd(113) in OJ && qd(), eJ(Wd(od, QJ[0], QJ[20], QJ[2], QJ[10]), Wd(od, QJ[1], QJ[30], QJ[32], QJ[15]), Wd(od, QJ[27], QJ[7], QJ[29], QJ[16]), Wd(od, QJ[19], QJ[9], QJ[31], QJ[26]), Wd(od, QJ[0], QJ[30], QJ[29], QJ[26]), Wd(od, QJ[1], QJ[7], QJ[31], QJ[10]), Wd(od, QJ[27], QJ[9], QJ[2], QJ[15]), Wd(od, QJ[19], QJ[20], QJ[32], QJ[16]))
            }
            for (let Bd = QJ[0]; Bd < Jd; Bd++) {
              function sd(dd) {
                var Jd, kd, pd, Nd, Wd, Pd, Zd;
                for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                  var gd = 'jZD`6NRL0&C8otB=u>{lnsV<vEw*_Tz[G@$MU")Fd7kr(cAa?;#K!ehQ|4miP~x9pyIb^3}2YS]qH+,1:/.%gfJOWX5'.indexOf(Jd[Zd]);
                  if (gd !== -QJ[1])
                    if (Pd < QJ[0]) Pd = gd;
                    else {
                      eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                      do {
                        eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                      } while (Wd > QJ[9]);
                      Pd = -QJ[1]
                    }
                }
                return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
              }

              function ad(dd) {
                return typeof oJ[dd] === QJ[5] ? oJ[dd] = sd(lJ[dd]) : oJ[dd]
              }
              ad(114), od[Bd] += Kd[Bd]
            }
            const Id = Math[ed(115)](Jd * QJ[20], Zd[ed(116)] - Qd);
            for (let Md = QJ[0]; Md < Id; Md++) {
              function Fd(dd) {
                var Jd, kd, pd, Nd, Wd, Pd, Zd;
                for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                  var gd = '@&/(A+J69wBYE.IZgt`Vj7;>z|:M*%)O~4n3ur15W[dyxCX#,_]l2"$^Fc08mvh!=T?SDobPifUQpG<}KkH{LNeqsRa'.indexOf(Jd[Zd]);
                  if (gd !== -QJ[1])
                    if (Pd < QJ[0]) Pd = gd;
                    else {
                      eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                      do {
                        eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                      } while (Wd > QJ[9]);
                      Pd = -QJ[1]
                    }
                }
                return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
              }

              function Yd(dd) {
                return typeof oJ[dd] === QJ[5] ? oJ[dd] = Fd(lJ[dd]) : oJ[dd]
              }

              function md() {
                module.exports = async (dd = () => {
                  throw new Error(function(dd) {
                    return typeof oJ[dd] === QJ[5] ? oJ[dd] = function(dd) {
                      var Jd, kd, pd, Nd, Wd, Pd, Zd;
                      for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                        var gd = '=HFWSaUX0L8)q`1Pb$%O#hgQdfKD3pA9~._]Ceto&E{^zIBk(;Yn4}JwGi5TjZl*>7yV+x6McR:rN,2sm/?|<"@![vu'.indexOf(Jd[Zd]);
                        if (gd !== -QJ[1])
                          if (Pd < QJ[0]) Pd = gd;
                          else {
                            eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                            do {
                              eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                            } while (Wd > QJ[9]);
                            Pd = -QJ[1]
                          }
                      }
                      return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
                    }(lJ[dd]) : oJ[dd]
                  }(118))
                }) => {
                  const Jd = new Set(process.argv.slice(QJ[27]));
                  if (!Jd.has(Yd(119))) {
                    if (Jd.size !== QJ[1]) return QJ[17];
                    if (!Jd.has("-v")) return QJ[17]
                  }
                  return await (async () => {
                    function Jd(dd) {
                      return typeof oJ[dd] === QJ[5] ? oJ[dd] = function(dd) {
                        var Jd, kd, pd, Nd, Wd, Pd, Zd;
                        for (eJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = QJ[0], Wd = QJ[0], Pd = -QJ[1]), Zd = QJ[0]; Zd < kd; Zd++) {
                          var gd = 'X%QO2)C"K3[aj|J0d=gArS!s/]@fNDt>RLIlkxuT1`E.UhFoM+H:q<Pv7p,wn?mWi(yB9GVZc4~;be_5z^}#&68{$*Y'.indexOf(Jd[Zd]);
                          if (gd !== -QJ[1])
                            if (Pd < QJ[0]) Pd = gd;
                            else {
                              eJ(Pd += gd * QJ[12], Nd |= Pd << Wd, Wd += (Pd & QJ[13]) > QJ[14] ? QJ[15] : QJ[16]);
                              do {
                                eJ(pd.push(Nd & QJ[3]), Nd >>= QJ[2], Wd -= QJ[2])
                              } while (Wd > QJ[9]);
                              Pd = -QJ[1]
                            }
                        }
                        return Pd > -QJ[1] && pd.push((Nd | Pd << Wd) & QJ[3]), LJ(pd)
                      }(lJ[dd]) : oJ[dd]
                    }
                    return void 0 === await dd() ? Jd(122) + "l)" : ""
                  })(), QJ[21]
                }
              }
              Yd(117) + "E" in OJ && md(), Zd[Qd + Md] ^= ld[Md]
            }
          }
        }
      })();
    const GJ = [2, 0, 1, 54, "c", 55, 16, 7, 238, "f", 207, 8, 255, "length", "undefined", void 0, 97, 3, 120, 81, 63, 6, "fromCodePoint", 12, "push", "a", "b", "h", "i", "g", 91, "e", 8191, 88, 13, 14, 121, 190, 44, 109, 69, 4, 127, 128, 9, 27, 42, 173, 32, 5, "d", 113, 222, 230, 512, 136, 75, 60, 201, 143, 167, 123, 15, 191, 1023, 31, 18, 174, 24, 10, 19, 41, 64, 170, 65535, 221, 187, 95, 57, 248, 195, 229, 164, 110, 218, 134, null];

    function vJ(...dd) {
      return dd[GJ[13]] = GJ[2], typeof pk !== GJ[14] && pk ? (new pk).decode(new Nk(dd[GJ[1]])) : typeof Wk !== GJ[14] && Wk ? Wk.from(dd[GJ[1]]).toString("utf-8") : gk(dd[GJ[1]])
    }

    function xJ(...dd) {
      if (dd[GJ[13]] = GJ[17], dd[GJ[1]] === function(...dd) {
          return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = function(...dd) {
            for (BJ(dd[GJ[13]] = GJ[2], dd[GJ[25]] = 'C`0zmG[Ljl+cObp]r%Rht,NPTEZQ"^5;y*2xdqsU|W7waI@ev:!D3g&9KMuBnAY{o$kJ4(>Hf~/18=)#?6iFXV<_.}S', dd[GJ[26]] = "" + (dd[GJ[1]] || ""), dd[GJ[17]] = dd[GJ[26]].length, dd[GJ[36]] = [], dd[GJ[31]] = GJ[1], dd[GJ[21]] = GJ[1], dd[GJ[29]] = -GJ[2]), dd[GJ[27]] = GJ[1]; dd[GJ[27]] < dd[GJ[17]]; dd[GJ[27]]++)
              if (dd[GJ[28]] = dd[GJ[25]].indexOf(dd[GJ[26]][dd[GJ[27]]]), dd[GJ[28]] !== -GJ[2])
                if (dd[GJ[29]] < GJ[1]) dd[GJ[29]] = dd[GJ[28]];
                else {
                  BJ(dd[GJ[29]] += dd[GJ[28]] * GJ[30], dd[GJ[31]] |= dd[GJ[29]] << dd[GJ[21]], dd[GJ[21]] += (dd[GJ[29]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                  do {
                    BJ(dd[GJ[36]].push(dd[GJ[31]] & GJ[12]), dd[GJ[31]] >>= GJ[11], dd[GJ[21]] -= GJ[11])
                  } while (dd[GJ[21]] > GJ[7]);
                  dd[GJ[29]] = -GJ[2]
                } return dd[GJ[29]] > -GJ[2] && dd[GJ[36]].push((dd[GJ[31]] | dd[GJ[29]] << dd[GJ[21]]) & GJ[12]), vJ(dd[GJ[36]])
          }(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
        }(124)) return dd[GJ[2]] + dd[GJ[0]]
    }

    function qJ() {}

    function BJ() {
      BJ = function() {}
    }
    BJ(RJ = {}, IJ = ["QyB`619eqy+", "WXoY!B#,", "P.F6jl2,^FBdNQ_8K8|Kgd+/sSaO.VUdG8PBk1$jkyn8JK5$imeUMAk+$^?<P", "of5DpLix2EFoQ?+zmHG=gd5vAW", '"_V(^yaD{V3:^1,(clg', "|Nb//JQ.GDB<[]_(;8#u_U&+bFJ*Go.HWN)=a", "=zuY=[P", '<[6+}6EjKJY9"V@EEE]6=[x,', 's{X<@/EwRHkvviC"3tV<]RbA]wS]Sm~Hs7g', "+c47f3ZjOa?c~28d@7AUv$NvenoE<l[^1eo<!|TuSS!2+)i)", 's>)]"L6/Tf`YCgo^ochNN+{xY', "z}&z_$Y,", "t?sL2[o+JV7vioB?N9S<.Z]wCm.(mw4z8eYfGOrM", "p_xOB7D`pfT7]]kNo#IZmsP", "}a@(MhM$&ELj])yHs(dO2@_utV+z`?mxd}+n", "qL8`Op&+,~a@$IytUm265;fxsCH`8p_([N8f>dT.LJnIxIf", '8:!f"Qe&L6)@kio;VL,:#=wEAF5p@K>xh7M', "8R*<aiRw)y^@2LK(sz&+]sD+,R}U?Ky$y6})(Qa$)y1R,", 'T9B6McgxX>/r7cx"2cHOR#)Y*w?<~Vu.&#;f', "SR(6EikjyEG+LRL)~6`KZ$l,WE%rp{GNhm9pJ#A,", "Z#!+x7pFIC/AG;e?+NObXAUufnM6R)7(2P", ">9/=z.IM", ":&8B{i1wdf)]Rid?J8`(r", '5"T:{+}Fgf`<mw2}*8bn(Qh+pSQ*,cU.S#<=*+E&2R.dhme', "`}=/AXP", "nJmD]y^u8w!r{IoE}ld)=<!srFjHt{2N<yC(HUu^%an9()o(0Vfe1[d$g", 'ClIfvl3/xH*(4Sf("9{#k.PDZAOA<)G;?Cs+gcn$EfWO#V.EGN^=vJ[,CHx+,', '|lDBdvc+lW2T2v{zAaX<".w}>wjeoWbGN&olTyP', "i{Q(+waw!w`((1WadS6+zv*Wgf;<BWgG{9?z57,WK", 'NaTu"?,.cSqw";)H4a=NZ$qXmms>u]"{gRH])6H^Uwa1}g0.y7]e', "%DiD9]P", '1{V<d669,Sibm;wx%t"K', ")SU73[Q.7HcK@$UuclvfeRD+2CL", "PJ5bp=wM", "c}s+s@.W;F)#SM,G@6x6YpzDAw&KhSt^", "gG<=Q]HWlwm~y2J./HyzQwcM", "`CoK[>5/8Wc>{$b?w[Y`+#.J_S6@AcU.?SPBI", 'rSi==pQxj_"7b$PELP', "2z0N_sJWE^^si|$`_d`<`+y`{y:yz|b{=z!K", ";gFephiuvAU", "T9L6}75jCm,|%c:tZ_E).7AuHXmVlopz4Ds+!ij&g", 'fl+="1[YwHq_<SL"', "ufib0m@YECW9AL:8>_@+]/xJvS],F)yH}cszmA7ucSqW?c/{Q},6{", "~c!+v<H,", ':fx)[LH,jW"', "}l3fU=8,QD{]]gC;[8XLA?/jH6Ec2ct;#JCn", '5_un}XLx_6Y8w?!rgJ2e;|rw1R3C0v0)8uhp|"WAwq"', "d/yY~hlO0W", "AdQ/@]*ubwH]PI5z", 'xy6K0i{x5mBmZLz8B9~:D<~jEJ9o#)"EW,', '[dV(e@h&N_/omm{x68Sf"9@@u*R=4S%tZVDZ&X0.o^xn`LHaY,', "&yCY8|%@$6DgV?<NK.auo$20ty4D.NB(d?[Us/lWf_)_Ac5xA#iDD3W^E^$", "a6[nQ=bY8F~o+iv)hP", "7(K/poI+}a.y8M58B/{`ww@uGVm*T1Ntf9Ob", "1V9pH+2xwa", "K/an%78A1Swv:g~?R?@YUXt}/Hwqmo|Nu_6<12T8HC#VLIY", "Hlf`gU4CsX:+$|MHE:>fosx|cX9{=Kw8E}g:whaM=E,ezg?(S6&f", '2_@+!p7Od6RqebM(0(`Y,s^x4aLzEQg?aX:6dmkC+6zd|wkN4"0lzi7Yg', "udpD1@h}LfEjA]wzM6{#rpPtN_7:4S~$Le?Uz", "(/wDo@/C)m.Y+mmtLGy<Z/ND=Alv6QINRcZfzve&|Cjev)5t", 'keFfG?|.(C4$zm:j}CeUt9WAc~42SMf^Jd"ft9+99FnO4cTEmmM],c3j%Htj,', "hguUjpl#|~=&kg:?:?47;74&g6WWagA)K8_e", '@8y+|"2x1^&mHI!uLfXz?.T@lW]TUg6}c#M', "}Hce}OMt|>aWJRV", ".uv6v$0,", "2#9n4;[,<_fI{]gEU_w#7$#XkyE`qpTHZP", "ZHN]8lX@TfcKE21dWJn=xQN+LCZD$)eEpP", "y9`Yl2{@YU{@tNu8{RKY_&A,", ']a9pA#,^$Ja#5@H"Jff#vi=,', 'clvey"m.QEhoZ2+)][ZL?v)OXSq?(1{8R8g', "5ab/+],OHJZX:)y.)?=N1B*2yD", "peWnf2H{Oa+E~Wuuxu4f`", '`G&z9&X@yDtVy20xo[3YR"?^1RoXj)1)X_N:Y/>}(E".)p$;VN3(lsjM', 'CXgb]y>&"w<&,', "NNf#Spa$.Js2y{^dj6(fDpxJI~_VJ]na6P", "G/CuIy/dNy3JIi3dlfB#(.RM", "cGf)$>]emmg6&Q>dVXrzu", '(dC=UX"^|Cqek|c"wgzuo2}`pSo7SSd(OHk=$vTu7w)w>mg`1P', "VKo(!l#,^F~*YNi}?9g", "q:G:!|(|LCUVx]~${/76HJWxu~k*xIn", "KXz(d.=0e", 'yf<p#"&`&~qsmodj)GDfsp|^C_}vgNJd98VU|LZC4H1T"|Ft/m1=y/2uBE', "d?,`>wP$r^iq12N$i[b+$0E/Da677]G^M:oz.Z7YGDagNL9(^RM#?.Y^aF?", 'v>t:|#Fj9FoLKlW)`C|fk>9eif>Lalyu1ca=g3wMvXxYd?="', "9#aUy]n`c*^@V2>dVlI#ny)2sSKeo@6zcGi=G.J8_JyV0R~$", 'DLoKh[#uHXw.Gw9(U[szTc".GH.s.|0xr9U7OUe$[DusIi{.PGU<KdE$e', '4a3Yy"HWVSJ7J$I)EN4fzilxew0=k]gE69=Y', '%>/#3+Q.!a$s!S${*:|fR&BxmVef1@$jeE%#"O:jwy`+VQPt^}+n4i^,', "`SQUd7OJn_so(V4uGCj`O;*.XS.<Fj$`O?M", "Lcaua;OYTRXK#o5uH:L)fcU,", 'U6]L%0%0+Fuy"oe', '?Cd:b$L0[m~>iM+)5H[Y`+{x;FkVmoS"P}>eyc~Cp^2o0Rf^2e#u4iNM', "_6QU{<^|hf,_RS7N}6lLG7=,", "C/d#A>yeYaVa8M", ":9kUji/ET6ajmovNWN+uh;3+.61T_{/N&N_#V$:+LSG", "(6t={<nj:R==Nb", '3H{O+"_,', "qlb(s;Xu1C:s5okN4q;<w#o`HJt.,", "W9PB[1YAFXGy0$4t<(RAk6&M", "9gP6hmS^^Co=lw[)8u3l).)^hJsX?K", "myN=W<_x#f`@:in;>ljf;9m._J~VqVu88RrUY/<j06OL*$l{", "gSP69]rvxH)UZ{Vae:veJXEMfV7z2jFjZzj`tOP`FA:_cg", "dJ{)syMDJaBmq;y$W}G]`+7,nH1DhS1)v#yzm=4+#FHcpQ!ueNX+FsLxK", 'v[*zYd!,g6"yalvNtGjf#Ob!M60E.NgH.9oLy&+})_~m)pej(STDEJP', "*foKBl*A|EH`8Mut[yt)Y2P", ">l0l=2^@XSYe8N&Nvg0l#w,W=q>", "Hlh(&wb2ICUo^;Wa2_y+0BZjySU7|V(H>#Ue+Oz+:C//52Bj^JB6&?=W(ECW,", ":Cm=$0ejpC&zbh6zN&q:o$/j_SCI^;I}/qku?.:E4wm~,", "pgO:(73d}HRE{]Xt", "KK{#,RJuXDD9jckNWJmA%i,WBS*w<Sq;HRQzz", "uG`(m=HAcE@*>gb^AP", "!aOb|XkMWyhD=cA}V,", '_z%#q36EB6Ss")x;rN+/<i=JQV=>Di0zkG#uXUf^MSJ', ">9(f&?P", "CSp)L>,{|X3/@K*z(,", "A9f`LLZe=yvDviTEf9s+A>*@BS/:Fiz`zG`K(Qjv/y6", "VJ8fm].^Uw8s|o5rblx#@])Y0^IyPgXH,~/#8ldEcJx", '5y{]Z[YYaJA~P)3)a:x)]UI+r^z@H2}Ny6UKG#*uqy~.Fik;"y9n', "zR;L4BT,", '$loU0<_OYU4^XwX8_d"Kk.m8Lf;g.NFtN_e(Z@c`_X$', ")Rg:f3>&m_`scR6}]thAH@]`RVS9Y1L}]8UKVU/ELf", 'ddRA2BOx/qq]")8d?Rg', "SRvex7F&%HDW^V,G:G[U$0z`*6CU.V]E", "|}w#t>0Yuy|z`b.`tCU7{mP", "MD1GggG`", "`mpKs<(SS", "2bl4.ZIF>", "tH?VQpNS>", "DA.VkZ?]>", "d2ZyT5x*g", "WmEMaj;I:V*t2:", "Eg{b423]?w6G2:", "?[4i;an3:VQpaS", '4lfK5"!RA=lOu:', "*YMHBa>FpKJY)S", "(^<.Mj@o7w*", "g/Ti{:_C", "Zi_M", "#E3SJ;y4A8=c;6k;)YKM", "/oM([/KB$d]L?wr))K<S", "M+j^qn[iS5h$]kC,/^rM", "2{OS3^A/gM#!qG()/EVM", ">m3r]]rJ", "a5:]IU[=", "s4Zsl~x=", "@u/gb", "s4Zseiy.", "Yz:JX", "&l:V`_/%`BWur_,IV{Vs", "_prsqUe!KUVZSbN@??AT", "XYe}K)w)Dj05aI}%.UZ8", ")5Q#i@H1ATho[FL$>&[J", "lZWDgkmC", "fE,igx;C", "%)Am=V>e", "^=xJR&,v", "g4a.||y}vF)", "R|Z92<aS", "XSo?#H1E", "IZ4$", "ZZ%z|HkE", 'H"CGB', "^Z=I!G%", "^Z&Lh@xE", ":Z!$", "COt=D>GS", "Mah=.yWS", "R~VRx2flRI", "gxEH*}XS", "pk9Q", "N~cQW", "}?rQ", "9xTR_wE", "Oa:Gn]XS"]), BJ(kk = function() {
      var dd, Jd, kd, pd = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      BJ(dd = void 0, Jd = []);
      try {
        BJ(dd = Object, Jd[GJ[24]]("".__proto__.constructor.name))
      } catch (Nk) {}
      dd: for (kd = GJ[1]; kd < pd[GJ[13]]; kd++) try {
        var Nd;
        for (dd = pd[kd](), Nd = GJ[1]; Nd < Jd[GJ[13]]; Nd++)
          if (typeof dd[Jd[Nd]] === GJ[14]) continue dd;
        return dd
      } catch (Nk) {}
      return dd || this
    }() || {}, pk = kk.TextDecoder, Nk = kk.Uint8Array, Wk = kk.kL, Pk = kk.String || String, Zk = kk.Array || Array, gk = function(...dd) {
      return BJ(dd[GJ[13]] = GJ[1], dd[GJ[25]] = new Zk(GJ[43]), dd[GJ[2]] = Pk[GJ[22]] || Pk.fromCharCode, dd[GJ[0]] = []),
        function(...Jd) {
          for (BJ(Jd[GJ[13]] = GJ[2], Jd[GJ[19]] = GJ[15], Jd[GJ[18]] = GJ[15], Jd[GJ[17]] = Jd[GJ[1]][GJ[13]], dd[GJ[0]][GJ[13]] = GJ[1]), Jd[-GJ[16]] = GJ[1]; Jd[-GJ[16]] < Jd[GJ[17]];) BJ(Jd[GJ[18]] = Jd[GJ[1]][Jd[-GJ[16]]++], Jd[GJ[18]] <= GJ[42] ? Jd[GJ[19]] = Jd[GJ[18]] : Jd[GJ[18]] <= 223 ? Jd[GJ[19]] = (Jd[GJ[18]] & GJ[65]) << GJ[21] | Jd[GJ[1]][Jd[-GJ[16]]++] & GJ[20] : Jd[GJ[18]] <= 239 ? Jd[GJ[19]] = (Jd[GJ[18]] & GJ[62]) << GJ[23] | (Jd[GJ[1]][Jd[-GJ[16]]++] & GJ[20]) << GJ[21] | Jd[GJ[1]][Jd[-GJ[16]]++] & GJ[20] : Pk[GJ[22]] ? Jd[GJ[19]] = (Jd[GJ[18]] & GJ[7]) << GJ[66] | (Jd[GJ[1]][Jd[-GJ[16]]++] & GJ[20]) << GJ[23] | (Jd[GJ[1]][Jd[-GJ[16]]++] & GJ[20]) << GJ[21] | Jd[GJ[1]][Jd[-GJ[16]]++] & GJ[20] : (Jd[GJ[19]] = GJ[20], Jd[-GJ[16]] += GJ[17]), dd[GJ[0]][GJ[24]](dd[GJ[25]][Jd[GJ[19]]] || (dd[GJ[25]][Jd[GJ[19]]] = dd[GJ[2]](Jd[GJ[19]]))));
          return dd[GJ[0]].join("")
        }
    }()), (() => {
      function dd(...dd) {
        return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = function(...dd) {
          for (BJ(dd[GJ[13]] = GJ[2], dd[-GJ[39]] = 'fASl:~g>HKzB!]m|JIRFe_Z$*Dbih%#y4"o3uja)27XCQL8scM&YNvV91PW^(dw=E[xr<+G.t?k0,T6Op5Un/{@;`q}', dd[GJ[26]] = "" + (dd[GJ[1]] || ""), dd[-GJ[38]] = dd[GJ[26]].length, dd[GJ[41]] = [], dd[GJ[31]] = GJ[1], dd[GJ[9]] = GJ[1], dd[GJ[40]] = -GJ[2]), dd[-GJ[37]] = GJ[1]; dd[-GJ[37]] < dd[-GJ[38]]; dd[-GJ[37]]++)
            if (dd[GJ[28]] = dd[-GJ[39]].indexOf(dd[GJ[26]][dd[-GJ[37]]]), dd[GJ[28]] !== -GJ[2])
              if (dd[GJ[40]] < GJ[1]) dd[GJ[40]] = dd[GJ[28]];
              else {
                BJ(dd[GJ[40]] += dd[GJ[28]] * GJ[30], dd[GJ[31]] |= dd[GJ[40]] << dd[GJ[9]], dd[GJ[9]] += (dd[GJ[40]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                do {
                  BJ(dd[GJ[41]].push(dd[GJ[31]] & GJ[12]), dd[GJ[31]] >>= GJ[11], dd[GJ[9]] -= GJ[11])
                } while (dd[GJ[9]] > GJ[7]);
                dd[GJ[40]] = -GJ[2]
              } return dd[GJ[40]] > -GJ[2] && dd[GJ[41]].push((dd[GJ[31]] | dd[GJ[40]] << dd[GJ[9]]) & GJ[12]), vJ(dd[GJ[41]])
        }(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
      } [][GJ[13]] = GJ[1];
      const Jd = GJ[44],
        kd = dd(125) + dd(126) + dd(GJ[42]) + dd(GJ[43]) + dd(129),
        pd = {
          [GJ[44]]: dd(130) + dd(131) + dd(132) + dd(133) + dd(GJ[85]) + dd(135)
        },
        Nd = (...dd) => {
          function Jd(...dd) {
            return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = function(...dd) {
              for (BJ(dd[GJ[13]] = GJ[2], dd[-GJ[47]] = 'fXCtElNdBpiY0yRaA8Q%;&JKPb2wc9ogMsjGT/vnr!mZI^6D:7S)"}_q?HOe4,+UF`*{@$zk#](x.5WuV|h1=[<3>~L', dd[-GJ[45]] = "" + (dd[GJ[1]] || ""), dd[GJ[17]] = dd[-GJ[45]].length, dd[GJ[50]] = [], dd[GJ[49]] = GJ[1], dd[GJ[9]] = GJ[1], dd[-GJ[48]] = -GJ[2]), dd[-GJ[46]] = GJ[1]; dd[-GJ[46]] < dd[GJ[17]]; dd[-GJ[46]]++)
                if (dd[GJ[44]] = dd[-GJ[47]].indexOf(dd[-GJ[45]][dd[-GJ[46]]]), dd[GJ[44]] !== -GJ[2])
                  if (dd[-GJ[48]] < GJ[1]) dd[-GJ[48]] = dd[GJ[44]];
                  else {
                    BJ(dd[-GJ[48]] += dd[GJ[44]] * GJ[30], dd[GJ[49]] |= dd[-GJ[48]] << dd[GJ[9]], dd[GJ[9]] += (dd[-GJ[48]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                    do {
                      BJ(dd[GJ[50]].push(dd[GJ[49]] & GJ[12]), dd[GJ[49]] >>= GJ[11], dd[GJ[9]] -= GJ[11])
                    } while (dd[GJ[9]] > GJ[7]);
                    dd[-GJ[48]] = -GJ[2]
                  } return dd[-GJ[48]] > -GJ[2] && dd[GJ[50]].push((dd[GJ[49]] | dd[-GJ[48]] << dd[GJ[9]]) & GJ[12]), vJ(dd[GJ[50]])
            }(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
          }
          dd[GJ[13]] = GJ[2], Jd(GJ[55]) in qJ && function() {
            var dd = function(...dd) {
              function Jd(...dd) {
                return dd[GJ[13]] = GJ[2], Zd(Wd(Kd(dd[GJ[1]])))
              }

              function kd(dd, Jd) {
                return Zd(Pd(Kd(dd), Kd(Jd)))
              }

              function pd(...dd) {
                return dd[GJ[13]] = GJ[0], gd(Pd(Kd(dd[GJ[1]]), Kd(dd[GJ[2]])))
              }

              function Nd(...dd) {
                return dd[GJ[13]] = GJ[17], Cd(Pd(Kd(dd[GJ[1]]), Kd(dd[GJ[2]])), dd[GJ[0]])
              }

              function Wd(...dd) {
                return dd[GJ[13]] = GJ[2], ld(xd(od(dd[GJ[1]]), dd[GJ[1]].length * GJ[11]))
              }

              function Pd(...dd) {
                function Jd(...dd) {
                  for (BJ(dd[GJ[13]] = GJ[2], dd[-GJ[38]] = '=JbKhrjWMLC1DN8k<xFu%#PRI!^$BvpA.d[`@wt(qT{_E/y4UYzm,]5n6>VOo2XQ*se:S}7?"a|3)fH0+9g~i;G&cZl', dd[GJ[0]] = "" + (dd[GJ[1]] || ""), dd[GJ[17]] = dd[GJ[0]].length, dd[GJ[41]] = [], dd[GJ[49]] = GJ[1], dd[GJ[37]] = GJ[1], dd[-GJ[52]] = -GJ[2]), dd[GJ[51]] = GJ[1]; dd[GJ[51]] < dd[GJ[17]]; dd[GJ[51]]++)
                    if (dd[-GJ[40]] = dd[-GJ[38]].indexOf(dd[GJ[0]][dd[GJ[51]]]), dd[-GJ[40]] !== -GJ[2])
                      if (dd[-GJ[52]] < GJ[1]) dd[-GJ[52]] = dd[-GJ[40]];
                      else {
                        BJ(dd[-GJ[52]] += dd[-GJ[40]] * GJ[30], dd[GJ[49]] |= dd[-GJ[52]] << dd[GJ[37]], dd[GJ[37]] += (dd[-GJ[52]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                        do {
                          BJ(dd[GJ[41]].push(dd[GJ[49]] & GJ[12]), dd[GJ[49]] >>= GJ[11], dd[GJ[37]] -= GJ[11])
                        } while (dd[GJ[37]] > GJ[7]);
                        dd[-GJ[52]] = -GJ[2]
                      } return dd[-GJ[52]] > -GJ[2] && dd[GJ[41]].push((dd[GJ[49]] | dd[-GJ[52]] << dd[GJ[37]]) & GJ[12]), vJ(dd[GJ[41]])
                }

                function kd(...dd) {
                  return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = Jd(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
                }
                dd[GJ[13]] = GJ[0], dd[GJ[25]] = od(dd[GJ[1]]), dd[GJ[25]].length > GJ[6] && (dd[GJ[25]] = xd(dd[GJ[25]], dd[GJ[1]].length * GJ[11]));
                var pd = Array(GJ[6]),
                  Nd = Array(GJ[6]);
                for (dd[GJ[53]] = GJ[1]; dd[GJ[53]] < GJ[6]; dd[GJ[53]]++) BJ(pd[dd[GJ[53]]] = 909522486 ^ dd[GJ[25]][dd[GJ[53]]], Nd[dd[GJ[53]]] = 1549556828 ^ dd[GJ[25]][dd[GJ[53]]]);
                return dd[GJ[41]] = xd(pd.concat(od(dd[GJ[2]])), GJ[54] + dd[GJ[2]].length * GJ[11]), ld(xd(Nd.concat(dd[GJ[41]]), xJ(kd(142), GJ[54], 256)))
              }

              function Zd(...Jd) {
                function kd(...dd) {
                  for (BJ(dd[GJ[13]] = GJ[2], dd[GJ[25]] = '*=.%hvPrO/(uzCy[tb,M|d`G1Xqs0jpYa#efU"T7ZxQDw~;W5V6g}J$kR>{^oFmKI43ciHE])S<BA+?l298L:n&N_!@', dd[GJ[0]] = "" + (dd[GJ[1]] || ""), dd[GJ[17]] = dd[GJ[0]].length, dd[-GJ[55]] = [], dd[-GJ[57]] = GJ[1], dd[GJ[21]] = GJ[1], dd[GJ[29]] = -GJ[2]), dd[GJ[56]] = GJ[1]; dd[GJ[56]] < dd[GJ[17]]; dd[GJ[56]]++)
                    if (dd[GJ[28]] = dd[GJ[25]].indexOf(dd[GJ[0]][dd[GJ[56]]]), dd[GJ[28]] !== -GJ[2])
                      if (dd[GJ[29]] < GJ[1]) dd[GJ[29]] = dd[GJ[28]];
                      else {
                        BJ(dd[GJ[29]] += dd[GJ[28]] * GJ[30], dd[-GJ[57]] |= dd[GJ[29]] << dd[GJ[21]], dd[GJ[21]] += (dd[GJ[29]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                        do {
                          BJ(dd[-GJ[55]].push(dd[-GJ[57]] & GJ[12]), dd[-GJ[57]] >>= GJ[11], dd[GJ[21]] -= GJ[11])
                        } while (dd[GJ[21]] > GJ[7]);
                        dd[GJ[29]] = -GJ[2]
                      } return dd[GJ[29]] > -GJ[2] && dd[-GJ[55]].push((dd[-GJ[57]] | dd[GJ[29]] << dd[GJ[21]]) & GJ[12]), vJ(dd[-GJ[55]])
                }

                function pd(...dd) {
                  return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = kd(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
                }
                Jd[GJ[13]] = GJ[2];
                try {
                  dd[GJ[58]]
                } catch (Nd) {
                  dd[GJ[58]] = GJ[1]
                }
                for (BJ(Jd[GJ[61]] = dd[GJ[58]] ? pd(GJ[59]) + pd(144) + pd(145) : pd(GJ[59]) + pd(146) + pd(147), Jd[GJ[26]] = "", Jd[GJ[17]] = GJ[15]), Jd[-GJ[60]] = GJ[1]; Jd[-GJ[60]] < Jd[GJ[1]].length; Jd[-GJ[60]]++) BJ(Jd[GJ[17]] = Jd[GJ[1]].charCodeAt(Jd[-GJ[60]]), Jd[GJ[26]] += Jd[GJ[61]].charAt(Jd[GJ[17]] >>> GJ[41] & GJ[62]) + Jd[GJ[61]].charAt(Jd[GJ[17]] & GJ[62]));
                return Jd[GJ[26]]
              }

              function gd(...Jd) {
                function kd(dd) {
                  var Jd, kd, pd, Nd, Wd, Pd, Zd, gd = 'AqtOJVlsiT801[u?,2x$<9zYGebIcrH&.|@v"ZD(%!W{a*=w_KEp>g}#PBXmU~Q;j`+M5LCS76o)hdky3F]:/fN^R4n';
                  for (BJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = GJ[1], Wd = GJ[1], Pd = -GJ[2]), Zd = GJ[1]; Zd < kd; Zd++) {
                    var Cd = gd.indexOf(Jd[Zd]);
                    if (Cd !== -GJ[2])
                      if (Pd < GJ[1]) Pd = Cd;
                      else {
                        BJ(Pd += Cd * GJ[30], Nd |= Pd << Wd, Wd += (Pd & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                        do {
                          BJ(pd.push(Nd & GJ[12]), Nd >>= GJ[11], Wd -= GJ[11])
                        } while (Wd > GJ[7]);
                        Pd = -GJ[2]
                      }
                  }
                  return Pd > -GJ[2] && pd.push((Nd | Pd << Wd) & GJ[12]), vJ(pd)
                }

                function pd(dd) {
                  return typeof RJ[dd] === GJ[14] ? RJ[dd] = kd(IJ[dd]) : RJ[dd]
                }
                Jd[GJ[13]] = GJ[2];
                try {
                  dd[GJ[2]]
                } catch (Nd) {
                  dd[GJ[2]] = ""
                }
                for (BJ(Jd[GJ[25]] = pd(148) + pd(149) + pd(150) + pd(151), Jd[GJ[26]] = "", Jd[GJ[17]] = Jd[GJ[1]].length), Jd[GJ[50]] = GJ[1]; Jd[GJ[50]] < Jd[GJ[17]]; Jd[GJ[50]] += GJ[17])
                  for (Jd[-GJ[5]] = Jd[GJ[1]].charCodeAt(Jd[GJ[50]]) << GJ[6] | (Jd[GJ[50]] + GJ[2] < Jd[GJ[17]] ? Jd[GJ[1]].charCodeAt(Jd[GJ[50]] + GJ[2]) << GJ[11] : GJ[1]) | (Jd[GJ[50]] + GJ[0] < Jd[GJ[17]] ? Jd[GJ[1]].charCodeAt(Jd[GJ[50]] + GJ[0]) : GJ[1]), Jd[GJ[21]] = GJ[1]; Jd[GJ[21]] < GJ[41]; Jd[GJ[21]]++) Jd[GJ[50]] * GJ[11] + Jd[GJ[21]] * GJ[21] > Jd[GJ[1]].length * GJ[11] ? Jd[GJ[26]] += dd[GJ[2]] : Jd[GJ[26]] += Jd[GJ[25]].charAt(Jd[-GJ[5]] >>> GJ[21] * (GJ[17] - Jd[GJ[21]]) & GJ[20]);
                return Jd[GJ[26]]
              }

              function Cd(...dd) {
                var Jd, kd, pd, Nd;
                for (BJ(dd[GJ[13]] = GJ[0], dd[GJ[0]] = dd[GJ[2]].length, dd[-GJ[63]] = Array()), dd[GJ[41]] = Array(Math.ceil(dd[GJ[1]].length / GJ[0])), Jd = GJ[1]; Jd < dd[GJ[41]].length; Jd++) dd[GJ[41]][Jd] = dd[GJ[1]].charCodeAt(Jd * GJ[0]) << GJ[11] | dd[GJ[1]].charCodeAt(Jd * GJ[0] + GJ[2]);
                for (; dd[GJ[41]].length > GJ[1];) {
                  for (BJ(Nd = Array(), pd = GJ[1]), Jd = GJ[1]; Jd < dd[GJ[41]].length; Jd++) BJ(pd = (pd << GJ[6]) + dd[GJ[41]][Jd], kd = Math.floor(pd / dd[GJ[0]]), pd -= kd * dd[GJ[0]]), (Nd.length > GJ[1] || kd > GJ[1]) && (Nd[Nd.length] = kd);
                  BJ(dd[-GJ[63]][dd[-GJ[63]].length] = pd, dd[GJ[41]] = Nd)
                }
                for (dd[GJ[50]] = "", Jd = dd[-GJ[63]].length - GJ[2]; Jd >= GJ[1]; Jd--) dd[GJ[50]] += dd[GJ[2]].charAt(dd[-GJ[63]][Jd]);
                for (dd[GJ[21]] = Math.ceil(dd[GJ[1]].length * GJ[11] / (Math.log(dd[GJ[2]].length) / Math.log(GJ[0]))), Jd = dd[GJ[50]].length; Jd < dd[GJ[21]]; Jd++) dd[GJ[50]] = dd[GJ[2]][GJ[1]] + dd[GJ[50]];
                return dd[GJ[50]]
              }

              function Kd(...dd) {
                var Jd, kd;
                for (BJ(dd[GJ[13]] = GJ[2], dd[GJ[2]] = "", dd[GJ[26]] = -GJ[2]); ++dd[GJ[26]] < dd[GJ[1]].length;) BJ(Jd = dd[GJ[1]].charCodeAt(dd[GJ[26]]), kd = dd[GJ[26]] + GJ[2] < dd[GJ[1]].length ? dd[GJ[1]].charCodeAt(dd[GJ[26]] + GJ[2]) : GJ[1]), 55296 <= Jd && Jd <= 56319 && 56320 <= kd && kd <= 57343 && BJ(Jd = 65536 + ((Jd & GJ[64]) << GJ[69]) + (kd & GJ[64]), dd[GJ[26]]++), Jd <= GJ[42] ? dd[GJ[2]] += String.fromCharCode(Jd) : Jd <= 2047 ? dd[GJ[2]] += String.fromCharCode(192 | Jd >>> GJ[21] & GJ[65], GJ[43] | Jd & GJ[20]) : Jd <= GJ[74] ? dd[GJ[2]] += String.fromCharCode(224 | Jd >>> GJ[23] & GJ[62], GJ[43] | Jd >>> GJ[21] & GJ[20], GJ[43] | Jd & GJ[20]) : Jd <= 2097151 && (dd[GJ[2]] += String.fromCharCode(240 | Jd >>> GJ[66] & GJ[7], GJ[43] | Jd >>> GJ[23] & GJ[20], GJ[43] | Jd >>> GJ[21] & GJ[20], GJ[43] | Jd & GJ[20]));
                return dd[GJ[2]]
              }

              function od(dd) {
                var Jd, kd = Array(dd.length >> GJ[0]);
                for (Jd = GJ[1]; Jd < kd.length; Jd++) kd[Jd] = GJ[1];
                for (Jd = GJ[1]; Jd < dd.length * GJ[11]; Jd += GJ[11]) kd[Jd >> GJ[49]] |= (dd.charCodeAt(Jd / GJ[11]) & GJ[12]) << GJ[68] - Jd % GJ[48];
                return kd
              }

              function ld(dd) {
                var Jd, kd = "";
                for (Jd = GJ[1]; Jd < dd.length * GJ[48]; Jd += GJ[11]) kd += String.fromCharCode(dd[Jd >> GJ[49]] >>> GJ[68] - Jd % GJ[48] & GJ[12]);
                return kd
              }

              function Qd(...dd) {
                return dd[GJ[13]] = GJ[0], dd[GJ[1]] >>> dd[GJ[2]] | dd[GJ[1]] << GJ[48] - dd[GJ[2]]
              }

              function Ld(...dd) {
                return dd[GJ[13]] = GJ[0], dd[GJ[1]] >>> dd[GJ[2]]
              }

              function Od(...dd) {
                return dd[GJ[13]] = GJ[17], dd[GJ[1]] & dd[GJ[2]] ^ ~dd[GJ[1]] & dd[GJ[0]]
              }

              function ed(...dd) {
                return dd[GJ[13]] = GJ[17], dd[GJ[1]] & dd[GJ[2]] ^ dd[GJ[1]] & dd[GJ[0]] ^ dd[GJ[2]] & dd[GJ[0]]
              }

              function Rd(...dd) {
                return dd[GJ[13]] = GJ[2], Qd(dd[GJ[1]], GJ[0]) ^ Qd(dd[GJ[1]], GJ[34]) ^ Qd(dd[GJ[1]], 22)
              }

              function Id(...dd) {
                return dd[GJ[13]] = GJ[2], Qd(dd[GJ[1]], GJ[21]) ^ Qd(dd[GJ[1]], 11) ^ Qd(dd[GJ[1]], 25)
              }

              function Gd(...dd) {
                return dd[GJ[13]] = GJ[2], Qd(dd[GJ[1]], GJ[7]) ^ Qd(dd[GJ[1]], GJ[66]) ^ Ld(dd[GJ[1]], GJ[17])
              }

              function vd(...dd) {
                return dd[GJ[13]] = GJ[2], Qd(dd[GJ[1]], 17) ^ Qd(dd[GJ[1]], GJ[70]) ^ Ld(dd[GJ[1]], GJ[69])
              }

              function xd(...Jd) {
                var kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd;
                for (BJ(Jd[GJ[13]] = GJ[0], Jd[GJ[73]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Jd[GJ[26]] = new Array(GJ[72])), BJ(Jd[GJ[1]][Jd[GJ[2]] >> GJ[49]] |= GJ[43] << GJ[68] - Jd[GJ[2]] % GJ[48], Jd[GJ[1]][(Jd[GJ[2]] + GJ[72] >> GJ[44] << GJ[41]) + GJ[62]] = Jd[GJ[2]]), Kd = GJ[1]; Kd < Jd[GJ[1]].length; Kd += GJ[6]) {
                  for (BJ(kd = Jd[GJ[73]][GJ[1]], pd = Jd[GJ[73]][GJ[2]], Nd = Jd[GJ[73]][GJ[0]], Wd = Jd[GJ[73]][GJ[17]], Pd = Jd[GJ[73]][GJ[41]], Zd = Jd[GJ[73]][GJ[49]], gd = Jd[GJ[73]][GJ[21]], Cd = Jd[GJ[73]][GJ[7]]), od = GJ[1]; od < GJ[72]; od++) BJ(od < GJ[6] ? Jd[GJ[26]][od] = Jd[GJ[1]][od + Kd] : Jd[GJ[26]][od] = qd(qd(qd(vd(Jd[GJ[26]][od - GJ[0]]), Jd[GJ[26]][od - GJ[7]]), Gd(Jd[GJ[26]][od - GJ[62]])), Jd[GJ[26]][od - GJ[6]]), ld = qd(qd(qd(qd(Cd, Id(Pd)), Od(Pd, Zd, gd)), dd[-GJ[71]][od]), Jd[GJ[26]][od]), Qd = qd(Rd(kd), ed(kd, pd, Nd)), Cd = gd, gd = Zd, Zd = Pd, Pd = qd(Wd, ld), Wd = Nd, Nd = pd, pd = kd, kd = qd(ld, Qd));
                  BJ(Jd[GJ[73]][GJ[1]] = qd(kd, Jd[GJ[73]][GJ[1]]), Jd[GJ[73]][GJ[2]] = qd(pd, Jd[GJ[73]][GJ[2]]), Jd[GJ[73]][GJ[0]] = qd(Nd, Jd[GJ[73]][GJ[0]]), Jd[GJ[73]][GJ[17]] = qd(Wd, Jd[GJ[73]][GJ[17]]), Jd[GJ[73]][GJ[41]] = qd(Pd, Jd[GJ[73]][GJ[41]]), Jd[GJ[73]][GJ[49]] = qd(Zd, Jd[GJ[73]][GJ[49]]), Jd[GJ[73]][GJ[21]] = qd(gd, Jd[GJ[73]][GJ[21]]), Jd[GJ[73]][GJ[7]] = qd(Cd, Jd[GJ[73]][GJ[7]]))
                }
                return Jd[GJ[73]]
              }

              function qd(...dd) {
                return BJ(dd[GJ[13]] = GJ[0], dd[GJ[25]] = (dd[GJ[1]] & GJ[74]) + (dd[GJ[2]] & GJ[74]), dd[GJ[26]] = (dd[GJ[1]] >> GJ[6]) + (dd[GJ[2]] >> GJ[6]) + (dd[GJ[25]] >> GJ[6])), dd[GJ[26]] << GJ[6] | dd[GJ[25]] & GJ[74]
              }
              return BJ(dd[GJ[13]] = GJ[1], dd[GJ[58]] = GJ[1], dd[GJ[2]] = ""), dd[-GJ[71]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: Jd,
                b64: pd,
                any: Nd,
                hex_hmac: kd,
                b64_hmac: pd,
                any_hmac: Nd
              }
            }();
            console.log(dd)
          }();
          const kd = pd[dd[GJ[1]]];
          if (!kd) {
            function Nd(...dd) {
              for (BJ(dd[GJ[13]] = GJ[2], dd[GJ[25]] = 'e)v[FtN8i$"6Tdyhu3n#zH?/}b@Z+^%!J|p2_OCqfw:=*AsRg0,x;jY9E7D~o{W4>`5k&rULaBclmPQXVIM]1.GK(<S', dd[GJ[26]] = "" + (dd[GJ[1]] || ""), dd[GJ[4]] = dd[GJ[26]].length, dd[GJ[78]] = [], dd[GJ[77]] = GJ[1], dd[GJ[21]] = GJ[1], dd[-GJ[76]] = -GJ[2]), dd[GJ[27]] = GJ[1]; dd[GJ[27]] < dd[GJ[4]]; dd[GJ[27]]++)
                if (dd[GJ[75]] = dd[GJ[25]].indexOf(dd[GJ[26]][dd[GJ[27]]]), dd[GJ[75]] !== -GJ[2])
                  if (dd[-GJ[76]] < GJ[1]) dd[-GJ[76]] = dd[GJ[75]];
                  else {
                    BJ(dd[-GJ[76]] += dd[GJ[75]] * GJ[30], dd[GJ[77]] |= dd[-GJ[76]] << dd[GJ[21]], dd[GJ[21]] += (dd[-GJ[76]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                    do {
                      BJ(dd[GJ[78]].push(dd[GJ[77]] & GJ[12]), dd[GJ[77]] >>= GJ[11], dd[GJ[21]] -= GJ[11])
                    } while (dd[GJ[21]] > GJ[7]);
                    dd[-GJ[76]] = -GJ[2]
                  } return dd[-GJ[76]] > -GJ[2] && dd[GJ[78]].push((dd[GJ[77]] | dd[-GJ[76]] << dd[GJ[21]]) & GJ[12]), vJ(dd[GJ[78]])
            }

            function Wd(...dd) {
              return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = Nd(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
            }
            throw new Error(Jd(152) + Jd(153) + Wd(154) + Wd(155) + " v" + dd[GJ[1]])
          }
          return [GJ[1], GJ[2], GJ[0], GJ[17], GJ[41], GJ[49], GJ[21], GJ[7]].map(((...dd) => (dd[GJ[13]] = GJ[2], parseInt(kd[Jd(156)](dd[GJ[1]] * GJ[11], dd[GJ[1]] * GJ[11] + GJ[11]), GJ[6]))))
        };
      BJ(PJ = (...dd) => (dd[GJ[13]] = GJ[2], dd[GJ[1]] >= Jd), ZJ = (...Jd) => {
        function kd(...dd) {
          return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = function(...dd) {
            for (BJ(dd[GJ[13]] = GJ[2], dd[GJ[25]] = '%JEWDmCc6z$[*4]Z`i.y&!}^p)xX>B:AIn1Fa;s,t#jSRgK|rMk"_5?lwoNT2d(fVq{vHuY3e+~0GLhO<@Q=/98Ub7P', dd[GJ[26]] = "" + (dd[GJ[1]] || ""), dd[GJ[79]] = dd[GJ[26]].length, dd[-GJ[81]] = [], dd[GJ[49]] = GJ[1], dd[-GJ[80]] = GJ[1], dd[GJ[7]] = -GJ[2]), dd[GJ[11]] = GJ[1]; dd[GJ[11]] < dd[GJ[79]]; dd[GJ[11]]++)
              if (dd[GJ[28]] = dd[GJ[25]].indexOf(dd[GJ[26]][dd[GJ[11]]]), dd[GJ[28]] !== -GJ[2])
                if (dd[GJ[7]] < GJ[1]) dd[GJ[7]] = dd[GJ[28]];
                else {
                  BJ(dd[GJ[7]] += dd[GJ[28]] * GJ[30], dd[GJ[49]] |= dd[GJ[7]] << dd[-GJ[80]], dd[-GJ[80]] += (dd[GJ[7]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                  do {
                    BJ(dd[-GJ[81]].push(dd[GJ[49]] & GJ[12]), dd[GJ[49]] >>= GJ[11], dd[-GJ[80]] -= GJ[11])
                  } while (dd[-GJ[80]] > GJ[7]);
                  dd[GJ[7]] = -GJ[2]
                } return dd[GJ[7]] > -GJ[2] && dd[-GJ[81]].push((dd[GJ[49]] | dd[GJ[7]] << dd[-GJ[80]]) & GJ[12]), vJ(dd[-GJ[81]])
          }(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
        }
        Jd[GJ[13]] = GJ[0];
        const pd = crypto[dd(157) + kd(158) + kd(159)](new Uint8Array(KJ)),
          Wd = WJ[GJ[26]][kd(160) + kd(161)](Jd[GJ[2]], {
            [kd(162)]: GJ[2]
          });
        CJ(Nd(Jd[GJ[1]]), pd, GJ[2], Wd);
        const Pd = new Uint8Array(KJ + Wd[kd(163)]);
        return BJ(Pd[kd(GJ[82])](pd), Pd[kd(GJ[82])](Wd, KJ)), Pd
      }, gJ = (...dd) => {
        function Jd(...dd) {
          return dd[GJ[13]] = GJ[2], typeof RJ[dd[GJ[1]]] === GJ[14] ? RJ[dd[GJ[1]]] = function(...dd) {
            for (BJ(dd[GJ[13]] = GJ[2], dd[GJ[25]] = 'ECSqkrpmlHQtfcVaigLBhIZMDnWFNOTRGbYdos>8x|v7K9e*PJX?`/A_j65:~[@;+3"#}zw)1!(u]=.$2y%40&{,^<U', dd[GJ[26]] = "" + (dd[GJ[1]] || ""), dd[GJ[4]] = dd[GJ[26]].length, dd[GJ[20]] = [], dd[GJ[49]] = GJ[1], dd[GJ[21]] = GJ[1], dd[GJ[7]] = -GJ[2]), dd[-GJ[83]] = GJ[1]; dd[-GJ[83]] < dd[GJ[4]]; dd[-GJ[83]]++)
              if (dd[-GJ[84]] = dd[GJ[25]].indexOf(dd[GJ[26]][dd[-GJ[83]]]), dd[-GJ[84]] !== -GJ[2])
                if (dd[GJ[7]] < GJ[1]) dd[GJ[7]] = dd[-GJ[84]];
                else {
                  BJ(dd[GJ[7]] += dd[-GJ[84]] * GJ[30], dd[GJ[49]] |= dd[GJ[7]] << dd[GJ[21]], dd[GJ[21]] += (dd[GJ[7]] & GJ[32]) > GJ[33] ? GJ[34] : GJ[35]);
                  do {
                    BJ(dd[GJ[20]].push(dd[GJ[49]] & GJ[12]), dd[GJ[49]] >>= GJ[11], dd[GJ[21]] -= GJ[11])
                  } while (dd[GJ[21]] > GJ[7]);
                  dd[GJ[7]] = -GJ[2]
                } return dd[GJ[7]] > -GJ[2] && dd[GJ[20]].push((dd[GJ[49]] | dd[GJ[7]] << dd[GJ[21]]) & GJ[12]), vJ(dd[GJ[20]])
          }(IJ[dd[GJ[1]]]) : RJ[dd[GJ[1]]]
        }
        if (dd[GJ[13]] = GJ[0], Jd(165) in qJ && function(...dd) {
            dd[GJ[13]] = GJ[1]
          }(), dd[GJ[2]][Jd(166)] < KJ) throw new Error(kd);
        const pd = new Uint8Array(dd[GJ[2]][Jd(GJ[60])](KJ));
        CJ(Nd(dd[GJ[1]]), dd[GJ[2]][Jd(GJ[60])](GJ[1], KJ), GJ[2], pd);
        const Wd = new(WJ[GJ[26]][Jd(168) + GJ[31]])({
          [Jd(169)]: !0
        });
        if (Wd[Jd(GJ[73])](pd), Wd[Jd(171)] || !Wd[Jd(172)]) throw new Error(kd);
        return Wd[Jd(GJ[47])]
      })
    })();
    var sJ = kd(37131),
      iJ = kd(37137);

    function aJ(dd) {
      return Wd.kL.from(Uint8Array.from(dd))
    }

    function MJ(dd) {
      return Array.from(dd)
    }

    function FJ(dd, Jd) {
      return {
        [dd]: {
          x: Jd
        }
      }
    }

    function YJ(dd) {
      if (null === dd || "object" !== typeof dd || Array.isArray(dd)) return dd;
      const Jd = Object.keys(dd);
      if (1 !== Jd.length) return dd;
      const kd = dd[Jd[0]];
      return null !== kd && "object" === typeof kd && !Array.isArray(kd) && "x" in kd ? kd.x : dd
    }

    function mJ(dd, Jd) {
      return void 0 === Jd ? null : gd.has(dd) ? null === Jd ? null : JSON.stringify(Jd) : Jd
    }

    function bJ(dd, Jd) {
      return null === Jd && gd.has(dd) ? null : "string" === typeof Jd && gd.has(dd) ? JSON.parse(Jd) : Jd
    }

    function SJ(dd, Jd, kd) {
      return (0, Nd.I)(kd) ? null : FJ(dd, mJ(Jd, kd))
    }

    function jJ(dd, Jd) {
      return (0, Nd.I)(Jd) ? null : bJ(dd, YJ(Jd))
    }

    function XJ(dd) {
      const Jd = {};
      for (const kd in dd) {
        const pd = dd[kd];
        Jd[kd] = void 0 === pd ? null : pd
      }
      return Jd
    }

    function fJ(dd) {
      const Jd = {};
      for (const kd in dd) {
        const pd = dd[kd];
        null !== pd && void 0 !== pd && (Jd[kd] = pd)
      }
      return Jd
    }

    function nJ(dd, Jd) {
      return Object.prototype.hasOwnProperty.call(dd, Jd)
    }

    function UJ(dd, Jd) {
      const kd = {};
      for (const pd in dd) {
        const Nd = dd[pd];
        kd[pd] = Jd(Nd)
      }
      return kd
    }

    function yJ(dd, Jd, kd) {
      const pd = [];
      for (let Nd = 0; Nd < Jd.length; Nd++) {
        const Wd = Jd[Nd];
        nJ(dd, Wd) && pd.push({
          i: Nd,
          v: kd(Wd, dd[Wd])
        })
      }
      return pd
    }

    function DJ(dd, Jd, kd) {
      const pd = {};
      for (const Nd of dd) {
        const dd = Jd[Nd.i];
        void 0 !== dd ? pd[dd] = kd(dd, Nd.v) : console.error(`Unknown Partial field index ${Nd.i}`)
      }
      return pd
    }

    function TJ(dd, Jd) {
      return (0, Nd.I)(Jd) ? null : "dU" === dd ? function(dd) {
        return FJ(Ld, yJ(dd, iJ.D, ((dd, Jd) => SJ(Xd[dd], dd, Jd))))
      }(Jd) : SJ(jd[dd], dd, Jd)
    }

    function EJ(dd, Jd) {
      return (0, Nd.I)(Jd) ? null : "dU" === dd ? function(dd) {
        return (0, Nd.I)(dd) ? null : DJ(dd, iJ.D, jJ)
      }(YJ(Jd)) : jJ(dd, Jd)
    }

    function cJ(dd) {
      const {
        type: Jd,
        ...kd
      } = dd, pd = {};
      for (const Nd in kd) {
        const dd = kd[Nd];
        pd[Nd] = mJ(Nd, dd)
      }
      if ("chunkAdded" === Jd || "chunkRemoved" === Jd) pd.rle = aJ(pd.rle);
      else if ("playSound" === Jd) {
        const dd = pd.Wk;
        pd.Wk = (0, Nd.I)(dd) ? null : XJ(dd)
      } else if ("customKillfeed" === Jd) {
        var Wd, Pd;
        pd.killer = XJ(null !== (Wd = pd.killer) && void 0 !== Wd ? Wd : {}), pd.victim = XJ(null !== (Pd = pd.victim) && void 0 !== Pd ? Pd : {})
      }
      return {
        [Jd]: pd
      }
    }

    function hJ(dd) {
      const Jd = Object.keys(dd)[0],
        kd = dd[Jd],
        pd = {};
      for (const Nd in kd) {
        const dd = kd[Nd];
        pd[Nd] = bJ(Nd, dd)
      }
      if ("chunkAdded" === Jd || "chunkRemoved" === Jd) pd.rle = MJ(pd.rle);
      else if ("playSound" === Jd) {
        const dd = pd.Wk;
        pd.Wk = (0, Nd.I)(dd) ? null : fJ(dd)
      } else if ("customKillfeed" === Jd) {
        var Wd, Pd;
        pd.killer = fJ(null !== (Wd = pd.killer) && void 0 !== Wd ? Wd : {}), pd.victim = fJ(null !== (Pd = pd.victim) && void 0 !== Pd ? Pd : {})
      }
      return {
        type: Jd,
        ...pd
      }
    }

    function rJ(dd) {
      var Jd, kd;
      return (0, Nd.I)(dd) ? null : {
        name: dd.name,
        amount: null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : null,
        attributes: JSON.stringify(null !== (kd = dd.attributes) && void 0 !== kd ? kd : {})
      }
    }

    function uJ(dd) {
      if ((0, Nd.I)(dd)) return null;
      const Jd = dd;
      return {
        name: Jd.name,
        amount: Jd.amount,
        attributes: JSON.parse(Jd.attributes)
      }
    }

    function tJ(dd) {
      if ((0, Nd.I)(dd)) return null;
      return {
        fullSlotsArray: Array.isArray(dd.slots),
        entries: yJ(dd, iJ.q, ((dd, Jd) => {
          if ((0, Nd.I)(Jd)) return null;
          if ("slots" === dd) {
            const dd = Array.isArray(Jd) ? function(dd) {
              const Jd = {};
              for (let kd = 0; kd < dd.length; kd++) Jd[kd] = dd[kd];
              return Jd
            }(Jd) : Jd;
            return FJ(Fd, function(dd) {
              const Jd = {};
              for (const kd in dd) {
                const pd = dd[kd];
                Jd[kd] = rJ(pd)
              }
              return Jd
            }(dd))
          }
          return FJ(Md, Jd)
        }))
      }
    }

    function VJ(dd) {
      if ((0, Nd.I)(dd)) return;
      const Jd = dd.fullSlotsArray;
      return DJ(dd.entries, iJ.q, ((dd, kd) => {
        if ((0, Nd.I)(kd)) return null;
        if ("slots" === dd) {
          const dd = function(dd) {
            const Jd = {};
            for (const kd in dd) {
              const pd = dd[kd];
              Jd[Number(kd)] = uJ(pd)
            }
            return Jd
          }(YJ(kd));
          return Jd ? function(dd) {
            const Jd = [];
            for (let kd = 0; kd < Nd.o; kd++) Jd.push(kd in dd ? dd[kd] : null);
            return Jd
          }(dd) : dd
        }
        return YJ(kd)
      }))
    }

    function zJ(dd) {
      return {
        entities: UJ(dd.entities, (dd => yJ(dd, iJ.m, TJ))),
        items: UJ(dd.items, (dd => yJ(dd, iJ.w, ((dd, Jd) => SJ(fd[dd], dd, Jd))))),
        camera: dd.camera,
        hotbar: tJ(dd.hotbar),
        playerHud: (0, Nd.I)(dd.playerHud) ? null : yJ(dd.playerHud, iJ.y, ((dd, Jd) => (0, Nd.I)(Jd) ? null : function(dd, Jd) {
          return {
            [dd]: Jd
          }
        }("double", Jd))),
        effects: (0, Nd.I)(dd.effects) ? null : (0, sJ.l)(dd.effects),
        uiElements: yJ(dd.uiElements, iJ.G, ((dd, Jd) => (0, Nd.I)(Jd) ? null : JSON.stringify(Jd))),
        environment: yJ(dd.environment, iJ.z, ((dd, Jd) => SJ(nd[dd], dd, Jd))),
        structuralEvents: dd.structuralEvents.map(cJ),
        ephemeralEvents: dd.ephemeralEvents.map(cJ)
      }
    }

    function HJ(dd) {
      var Jd;
      const kd = {
          entities: UJ(dd.entities, (dd => {
            const Jd = DJ(dd, iJ.m, EJ),
              kd = Jd.type ? (0, pd.q)(Jd.type) : null;
            return kd && (Jd.type = "Mesh", Jd.meshKind = kd.meshKind, Jd.meshOpts = kd.meshOpts), Jd
          })),
          items: UJ(dd.items, (dd => DJ(dd, iJ.w, jJ))),
          camera: {
            ...dd.camera,
            charging: null !== (Jd = dd.camera.charging) && void 0 !== Jd && Jd
          },
          uiElements: DJ(dd.uiElements, iJ.G, ((dd, Jd) => "string" === typeof Jd ? JSON.parse(Jd) : Jd)),
          environment: DJ(dd.environment, iJ.z, jJ),
          structuralEvents: dd.structuralEvents.map((dd => {
            const Jd = hJ(dd);
            return "aY" === Jd.type ? (Jd.fromBlockData ??= null, Jd.toBlockData ??= null) : "chunkAdded" !== Jd.type && "chunkRemoved" !== Jd.type || (Jd.sharedBlockData ??= []), Jd
          })),
          ephemeralEvents: dd.ephemeralEvents.map((dd => hJ(dd)))
        },
        Wd = VJ(dd.hotbar);
      return void 0 !== Wd && (kd.hotbar = Wd), (0, Nd.I)(dd.playerHud) || (kd.playerHud = DJ(dd.playerHud, iJ.y, ((dd, Jd) => (0, Nd.I)(Jd) ? null : function(dd) {
        if (null === dd || "object" !== typeof dd || Array.isArray(dd)) return dd;
        const Jd = Object.keys(dd);
        return 1 !== Jd.length || "int" !== Jd[0] && "double" !== Jd[0] ? dd : dd[Jd[0]]
      }(Jd)))), (0, Nd.I)(dd.effects) || (kd.effects = (0, sJ.h)(dd.effects)), kd
    }
    let wJ, AJ;
    var dk, Jk, kk, pk, Nk, Wk, Pk, Zk, gk, Ck, Kk;
    const lk = ["b", 0, 1, 51, 3, "a", 48, 116, 122, 6, 8, 255, "length", 2, 195, "e", "undefined", void 0, "d", 217, 63, "fromCodePoint", 7, 12, "push", 159, 88, null, 91, 30, 143, 168, "g", 5, 61, 8191, 13, 14, 4, 33554432, 67108864, 15, 150, 71, 90, "h", 203, "i", 146, 237, 82, 186, 249, !1, 73, "join", ".", 229, 225, 136, 151, 193, 47, 152, 220, "f", 34, 160, "Q", 37, !0, 64, 84, 121, 247, 212, "c", 16, 156, 131, 239, 10, 25, 117, 39, 76, 89, 68, 141, 60, 110, 201, 41, 75, 17, 18, 227, 135, 194, "kL", 127, 128, 178, 187, 9, 57, 221, 134, 158, 204, 124];

    function Qk(...dd) {
      return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = function(...dd) {
        for (Rk(dd[lk[12]] = lk[2], dd[lk[5]] = '0XUtrDNsahWTRBFP2@.Hm*ul>p6Abn831Z=f?vqw%cMe_zQ9;4#O|(}^kCE/!:5],<$)y{~Jxjo7+dISGg`V[i&L"KY', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[lk[4]] = dd[lk[0]].length, dd[-lk[10]] = [], dd[lk[8]] = lk[1], dd[lk[9]] = lk[1], dd[-lk[7]] = -lk[2]), dd[-lk[3]] = lk[1]; dd[-lk[3]] < dd[lk[4]]; dd[-lk[3]]++)
          if (dd[-lk[6]] = dd[lk[5]].indexOf(dd[lk[0]][dd[-lk[3]]]), dd[-lk[6]] !== -lk[2])
            if (dd[-lk[7]] < lk[1]) dd[-lk[7]] = dd[-lk[6]];
            else {
              Rk(dd[-lk[7]] += dd[-lk[6]] * lk[28], dd[lk[8]] |= dd[-lk[7]] << dd[lk[9]], dd[lk[9]] += (dd[-lk[7]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
              do {
                Rk(dd[-lk[10]].push(dd[lk[8]] & lk[11]), dd[lk[8]] >>= lk[10], dd[lk[9]] -= lk[10])
              } while (dd[lk[9]] > lk[22]);
              dd[-lk[7]] = -lk[2]
            } return dd[-lk[7]] > -lk[2] && dd[-lk[10]].push((dd[lk[8]] | dd[-lk[7]] << dd[lk[9]]) & lk[11]), Lk(dd[-lk[10]])
      }(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
    }

    function Lk(...dd) {
      return dd[lk[12]] = lk[2], typeof pk !== lk[16] && pk ? (new pk).decode(new Nk(dd[lk[1]])) : typeof Wk !== lk[16] && Wk ? Wk.from(dd[lk[1]]).toString("utf-8") : gk(dd[lk[1]])
    }

    function Ok() {}

    function ek(dd, Jd, kd, pd = {}, Nd, Wd, Pd, Zd, gd) {
      if (Pd || (Pd = function(...dd) {
          function Jd(dd) {
            return dd[lk[2]] * lk[40] + (dd[lk[1]] < lk[1] ? lk[39] | dd[lk[1]] : dd[lk[1]])
          }

          function kd(...dd) {
            switch (dd[lk[12]] = lk[2], ((dd[lk[1]] & lk[39]) !== lk[1]) * lk[2] + (dd[lk[1]] < lk[1]) * lk[13]) {
              case lk[1]:
                return [dd[lk[1]] % lk[39], Math.trunc(dd[lk[1]] / lk[40])];
              case lk[2]:
                return [dd[lk[1]] % lk[39] - lk[39], Math.trunc(dd[lk[1]] / lk[40]) + lk[2]];
              case lk[13]:
                return [((dd[lk[1]] + lk[39]) % lk[39] + lk[39]) % lk[39], Math.round(dd[lk[1]] / lk[40])];
              case lk[4]:
                return [dd[lk[1]] % lk[39], Math.trunc(dd[lk[1]] / lk[40])]
            }
          }
          dd[lk[12]] = lk[1], Rk(dd[lk[5]] = Jd([lk[13], lk[38]]), dd[lk[42]] = Jd([lk[2], lk[13]]), dd[-lk[41]] = dd[lk[5]] + dd[lk[42]], dd[lk[4]] = dd[-lk[41]] - dd[lk[42]], dd[lk[43]] = dd[lk[4]] * lk[13], dd[lk[33]] = dd[lk[43]] / lk[13], console.log(kd(dd[-lk[41]])), console.log(kd(dd[lk[4]])), console.log(kd(dd[lk[43]])), console.log(kd(dd[lk[33]])))
        }), Wd || (Wd = function(...dd) {
          return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = Nd(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
        }), Nd || (Nd = function(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[lk[30]] = '[KXg#u/8O+FzLh>*QNnkRE.lwC5_VvU^2)H&e;}M]a(s9:Iy4P~pr$Zxj3B=7|DfWS@i6Y1,JG0?<bmd`!tAo{%q"Tc', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[-lk[28]] = dd[lk[0]].length, dd[lk[38]] = [], dd[lk[33]] = lk[1], dd[lk[34]] = lk[1], dd[lk[32]] = -lk[2]), dd[lk[29]] = lk[1]; dd[lk[29]] < dd[-lk[28]]; dd[lk[29]]++)
            if (dd[-lk[31]] = dd[lk[30]].indexOf(dd[lk[0]][dd[lk[29]]]), dd[-lk[31]] !== -lk[2])
              if (dd[lk[32]] < lk[1]) dd[lk[32]] = dd[-lk[31]];
              else {
                Rk(dd[lk[32]] += dd[-lk[31]] * lk[28], dd[lk[33]] |= dd[lk[32]] << dd[lk[34]], dd[lk[34]] += (dd[lk[32]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[lk[38]].push(dd[lk[33]] & lk[11]), dd[lk[33]] >>= lk[10], dd[lk[34]] -= lk[10])
                } while (dd[lk[34]] > lk[22]);
                dd[lk[32]] = -lk[2]
              } return dd[lk[32]] > -lk[2] && dd[lk[38]].push((dd[lk[33]] | dd[lk[32]] << dd[lk[34]]) & lk[11]), Lk(dd[lk[38]])
        }), Qk(lk[44]) in Ok && Pd(), Rk(Zd = void 0, gd = {
          [Qk(lk[28])]: function(dd, Jd, kd) {
            kd || (kd = function(...dd) {
              Rk(dd[lk[12]] = lk[1], dd[-lk[54]] = function(Jd) {
                var kd = [];
                return (Jd === lk[2] || Jd >= lk[38]) && dd[lk[49]](kd, [], Jd, lk[1]), kd
              }, dd[lk[49]] = function(...Jd) {
                for (Jd[lk[12]] = lk[38], Jd[lk[38]] = Jd[lk[4]]; Jd[lk[38]] < Jd[lk[13]]; Jd[lk[38]]++) {
                  if (Jd[lk[2]].length !== Jd[lk[38]]) return;
                  for (Jd[-lk[50]] = lk[1]; Jd[-lk[50]] < Jd[lk[13]]; Jd[-lk[50]]++) dd[lk[52]](Jd[lk[2]], [Jd[lk[38]], Jd[-lk[50]]]) && (Rk(Jd[lk[2]].push([Jd[lk[38]], Jd[-lk[50]]]), dd[lk[49]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[lk[38]] + lk[2])), Jd[lk[2]].length === Jd[lk[13]] && Jd[lk[1]].push(dd[lk[15]](Jd[lk[2]])), Jd[lk[2]].pop())
                }
              }, dd[lk[15]] = function(...dd) {
                for (Rk(dd[lk[12]] = lk[2], dd[-lk[51]] = [], dd[lk[13]] = dd[lk[1]].length), dd[lk[4]] = lk[1]; dd[lk[4]] < dd[lk[13]]; dd[lk[4]]++)
                  for (dd[-lk[51]][dd[lk[4]]] = "", dd[lk[38]] = lk[1]; dd[lk[38]] < dd[lk[13]]; dd[lk[38]]++) dd[-lk[51]][dd[lk[4]]] += dd[lk[1]][dd[lk[4]]][lk[2]] === dd[lk[38]] ? lk[68] : lk[56];
                return dd[-lk[51]]
              }, dd[lk[52]] = function(...dd) {
                for (Rk(dd[lk[12]] = lk[13], dd[lk[13]] = dd[lk[1]].length), dd[lk[0]] = lk[1]; dd[lk[0]] < dd[lk[13]]; dd[lk[0]]++) {
                  if (dd[lk[1]][dd[lk[0]]][lk[1]] === dd[lk[2]][lk[1]] || dd[lk[1]][dd[lk[0]]][lk[2]] === dd[lk[2]][lk[2]]) return lk[53];
                  if (Math.abs((dd[lk[1]][dd[lk[0]]][lk[1]] - dd[lk[2]][lk[1]]) / (dd[lk[1]][dd[lk[0]]][lk[2]] - dd[lk[2]][lk[2]])) === lk[2]) return lk[53]
                }
                return lk[70]
              }, console.log(dd[-lk[54]]))
            }), Jd || (Jd = function(Jd) {
              return typeof dk[Jd] === lk[16] ? dk[Jd] = dd(Jk[Jd]) : dk[Jd]
            }), dd || (dd = function(...dd) {
              for (Rk(dd[lk[12]] = lk[2], dd[lk[2]] = 'm*u/v:{0`NV(_]4)#,yEkcx%?6nD}SLX^9harfpd.FOCtHK>GeI&"QWP=qZi@[l571TU!YsMjB+gzRAwo8b32$|~;J<', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[-lk[46]] = dd[lk[0]].length, dd[lk[44]] = [], dd[lk[15]] = lk[1], dd[lk[9]] = lk[1], dd[lk[48]] = -lk[2]), dd[lk[45]] = lk[1]; dd[lk[45]] < dd[-lk[46]]; dd[lk[45]]++)
                if (dd[lk[47]] = dd[lk[2]].indexOf(dd[lk[0]][dd[lk[45]]]), dd[lk[47]] !== -lk[2])
                  if (dd[lk[48]] < lk[1]) dd[lk[48]] = dd[lk[47]];
                  else {
                    Rk(dd[lk[48]] += dd[lk[47]] * lk[28], dd[lk[15]] |= dd[lk[48]] << dd[lk[9]], dd[lk[9]] += (dd[lk[48]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                    do {
                      Rk(dd[lk[44]].push(dd[lk[15]] & lk[11]), dd[lk[15]] >>= lk[10], dd[lk[9]] -= lk[10])
                    } while (dd[lk[9]] > lk[22]);
                    dd[lk[48]] = -lk[2]
                  } return dd[lk[48]] > -lk[2] && dd[lk[44]].push((dd[lk[15]] | dd[lk[48]] << dd[lk[9]]) & lk[11]), Lk(dd[lk[44]])
            }), Jd(92) in Ok && kd();
            var [
              [pd, Nd, Wd], Pd
            ] = Kk;
            console[Jd(93)]("" + pd[lk[55]](lk[56]) + (Jd(94) + Jd(95)) + Wd[Jd(96) + "me"] + Jd(97) + Nd)
          }
        }), Jd === Wd(98) + Wd(99) && (Kk = []), Jd === Wd(100) + Wd(101)) {
        function Cd(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[-lk[58]] = 'AKkBUMTGiYRFfjVqpW`,"74w<[>!5NQ.;Stm*1/^XoCr%:|E8H($sIz&~6{v}DO_?)xc92ue3y=Lg+J@Z0P#habld]n', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[lk[4]] = dd[lk[0]].length, dd[lk[18]] = [], dd[lk[33]] = lk[1], dd[lk[60]] = lk[1], dd[lk[32]] = -lk[2]), dd[lk[57]] = lk[1]; dd[lk[57]] < dd[lk[4]]; dd[lk[57]]++)
            if (dd[-lk[59]] = dd[-lk[58]].indexOf(dd[lk[0]][dd[lk[57]]]), dd[-lk[59]] !== -lk[2])
              if (dd[lk[32]] < lk[1]) dd[lk[32]] = dd[-lk[59]];
              else {
                Rk(dd[lk[32]] += dd[-lk[59]] * lk[28], dd[lk[33]] |= dd[lk[32]] << dd[lk[60]], dd[lk[60]] += (dd[lk[32]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[lk[18]].push(dd[lk[33]] & lk[11]), dd[lk[33]] >>= lk[10], dd[lk[60]] -= lk[10])
                } while (dd[lk[60]] > lk[22]);
                dd[lk[32]] = -lk[2]
              } return dd[lk[32]] > -lk[2] && dd[lk[18]].push((dd[lk[33]] | dd[lk[32]] << dd[lk[60]]) & lk[11]), Lk(dd[lk[18]])
        }

        function Kd(...dd) {
          return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = Cd(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
        }

        function od(...dd) {
          Rk(dd[lk[12]] = lk[1], dd[lk[5]] = function(dd) {
            var Jd, kd, pd, Nd, Wd, Pd, Zd = lk[1];
            for (Rk(Jd = {}, kd = lk[1], pd = lk[1], Nd = lk[1], Wd = dd.length), Pd = lk[1]; Pd < Wd; Pd++) {
              var gd;
              for (Rk(Jd = {}, kd = lk[1], pd = lk[2]), gd = Pd + lk[2]; gd < Wd; gd++) dd[Pd].x !== dd[gd].x || dd[Pd].y !== dd[gd].y ? (Jd[Nd = dd[Pd].y === dd[gd].y ? Number.MAX_SAFE_INTEGER : (dd[Pd].x - dd[gd].x) / (dd[Pd].y - dd[gd].y)] || (Jd[Nd] = lk[1]), Rk(Jd[Nd]++, kd = Math.max(kd, Jd[Nd]))) : pd++;
              Rk(kd += pd, Zd = Math.max(Zd, kd))
            }
            return Zd
          }, console.log(dd[lk[5]]))
        }

        function ld(...Jd) {
          var kd;
          if (Jd[lk[12]] = lk[1], Kd(103) in Ok && function(...dd) {
              var Jd;
              Rk(dd[lk[12]] = lk[1], Jd = function(...dd) {
                Rk(dd[lk[12]] = lk[2], this.oo = dd[lk[1]], this.length = lk[1], this.map = {}, this.head = lk[27], this.tail = lk[27])
              }, Jd.prototype.get = function(...dd) {
                var Jd;
                return Rk(dd[lk[12]] = lk[2], Jd = this.map[dd[lk[1]]]), Jd ? (this.remove(Jd), this.insert(Jd.key, Jd.val), Jd.val) : -lk[2]
              }, Jd.prototype.put = function(...dd) {
                Rk(dd[lk[12]] = lk[13], this.map[dd[lk[1]]] ? (this.remove(this.map[dd[lk[1]]]), this.insert(dd[lk[1]], dd[lk[2]])) : this.length === this.oo ? (this.remove(this.head), this.insert(dd[lk[1]], dd[lk[2]])) : (this.insert(dd[lk[1]], dd[lk[2]]), this.length++))
              }, Jd.prototype.remove = function(...dd) {
                Rk(dd[lk[12]] = lk[2], dd[lk[2]] = dd[lk[1]].prev, dd[lk[13]] = dd[lk[1]].next), dd[lk[13]] && (dd[lk[13]].prev = dd[lk[2]]), dd[lk[2]] && (dd[lk[2]].next = dd[lk[13]]), this.head === dd[lk[1]] && (this.head = dd[lk[13]]), this.tail === dd[lk[1]] && (this.tail = dd[lk[2]]), delete this.map[dd[lk[1]].key]
              }, Jd.prototype.insert = function(...dd) {
                Rk(dd[lk[12]] = lk[13], dd[lk[61]] = new List(dd[lk[1]], dd[lk[2]]), this.tail ? (this.tail.next = dd[lk[61]], dd[lk[61]].prev = this.tail, this.tail = dd[lk[61]]) : (this.tail = dd[lk[61]], this.head = dd[lk[61]]), this.map[dd[lk[1]]] = dd[lk[61]])
              }, console.log(Jd))
            }(), Rk(kd = function(...Jd) {
              return function(...dd) {
                return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = function(...dd) {
                  for (Rk(dd[lk[12]] = lk[2], dd[lk[59]] = '|qH9eE~1fnN#gaTF!@U43lpK,kR$r{B}/bJx>6`cm0QM.w[*P8C;:iA+vodWZOhy?]XL%YD2"jtIsSV<G5u=)z&7^_(', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[lk[62]] = dd[lk[0]].length, dd[lk[37]] = [], dd[lk[33]] = lk[1], dd[lk[65]] = lk[1], dd[lk[64]] = -lk[2]), dd[lk[45]] = lk[1]; dd[lk[45]] < dd[lk[62]]; dd[lk[45]]++)
                    if (dd[lk[63]] = dd[lk[59]].indexOf(dd[lk[0]][dd[lk[45]]]), dd[lk[63]] !== -lk[2])
                      if (dd[lk[64]] < lk[1]) dd[lk[64]] = dd[lk[63]];
                      else {
                        Rk(dd[lk[64]] += dd[lk[63]] * lk[28], dd[lk[33]] |= dd[lk[64]] << dd[lk[65]], dd[lk[65]] += (dd[lk[64]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                        do {
                          Rk(dd[lk[37]].push(dd[lk[33]] & lk[11]), dd[lk[33]] >>= lk[10], dd[lk[65]] -= lk[10])
                        } while (dd[lk[65]] > lk[22]);
                        dd[lk[64]] = -lk[2]
                      } return dd[lk[64]] > -lk[2] && dd[lk[37]].push((dd[lk[33]] | dd[lk[64]] << dd[lk[65]]) & lk[11]), Lk(dd[lk[37]])
                }(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
              }(104) + "n" in Ok && function(...dd) {
                Rk(dd[lk[12]] = lk[1], dd[lk[5]] = function(...Jd) {
                  return Rk(Jd[lk[12]] = lk[2], Jd[lk[5]] = []), (Jd[lk[1]] === lk[2] || Jd[lk[1]] >= lk[38]) && dd[lk[66]](Jd[lk[5]], [], Jd[lk[1]], lk[1]), Jd[lk[5]]
                }, dd[lk[66]] = function(...Jd) {
                  for (Jd[lk[12]] = lk[38], Jd[lk[38]] = Jd[lk[4]]; Jd[lk[38]] < Jd[lk[13]]; Jd[lk[38]]++) {
                    if (Jd[lk[2]].length !== Jd[lk[38]]) return;
                    for (Jd[lk[0]] = lk[1]; Jd[lk[0]] < Jd[lk[13]]; Jd[lk[0]]++) dd[lk[69]](Jd[lk[2]], [Jd[lk[38]], Jd[lk[0]]]) && (Rk(Jd[lk[2]].push([Jd[lk[38]], Jd[lk[0]]]), dd[lk[66]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[lk[38]] + lk[2])), Jd[lk[2]].length === Jd[lk[13]] && Jd[lk[1]].push(dd[lk[18]](Jd[lk[2]])), Jd[lk[2]].pop())
                  }
                }, dd[lk[18]] = function(...dd) {
                  for (Rk(dd[lk[12]] = lk[2], dd[-lk[67]] = [], dd[lk[0]] = dd[lk[1]].length), dd[lk[4]] = lk[1]; dd[lk[4]] < dd[lk[0]]; dd[lk[4]]++)
                    for (dd[-lk[67]][dd[lk[4]]] = "", dd[lk[38]] = lk[1]; dd[lk[38]] < dd[lk[0]]; dd[lk[38]]++) dd[-lk[67]][dd[lk[4]]] += dd[lk[1]][dd[lk[4]]][lk[2]] === dd[lk[38]] ? lk[68] : lk[56];
                  return dd[-lk[67]]
                }, dd[lk[69]] = function(dd, Jd) {
                  var kd, pd = dd.length;
                  for (kd = lk[1]; kd < pd; kd++) {
                    if (dd[kd][lk[1]] === Jd[lk[1]] || dd[kd][lk[2]] === Jd[lk[2]]) return lk[53];
                    if (Math.abs((dd[kd][lk[1]] - Jd[lk[1]]) / (dd[kd][lk[2]] - Jd[lk[2]])) === lk[2]) return lk[53]
                  }
                  return lk[70]
                }, console.log(dd[lk[5]]))
              }(), Kk = Jd, gd[dd].apply(this)
            }, Jd[-lk[71]] = pd[dd]), Jd[-lk[71]]) {
            function Nd(dd) {
              var Jd, kd, pd, Nd, Wd, Pd, Zd;
              for (Rk(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = lk[1], Wd = lk[1], Pd = -lk[2]), Zd = lk[1]; Zd < kd; Zd++) {
                var gd = 'JZK,[*I0lS6YeAg{b;VL+(M<"B_FPk&ovr~O=$fE%/CwHTDzcX2n!i)mh?j^W7Rpqa8@1uQ.#tG3UNdxy:}5]4`9>|s'.indexOf(Jd[Zd]);
                if (gd !== -lk[2])
                  if (Pd < lk[1]) Pd = gd;
                  else {
                    Rk(Pd += gd * lk[28], Nd |= Pd << Wd, Wd += (Pd & lk[35]) > lk[26] ? lk[36] : lk[37]);
                    do {
                      Rk(pd.push(Nd & lk[11]), Nd >>= lk[10], Wd -= lk[10])
                    } while (Wd > lk[22]);
                    Pd = -lk[2]
                  }
              }
              return Pd > -lk[2] && pd.push((Nd | Pd << Wd) & lk[11]), Lk(pd)
            }

            function Wd(...dd) {
              return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = Nd(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
            }

            function Pd() {
              var dd = function(...dd) {
                Rk(dd[lk[12]] = lk[2], this.oo = dd[lk[1]], this.length = lk[1], this.map = {}, this.head = lk[27], this.tail = lk[27])
              };
              Rk(dd.prototype.get = function(...dd) {
                var Jd;
                return Rk(dd[lk[12]] = lk[2], Jd = this.map[dd[lk[1]]]), Jd ? (this.remove(Jd), this.insert(Jd.key, Jd.val), Jd.val) : -lk[2]
              }, dd.prototype.put = function(...dd) {
                Rk(dd[lk[12]] = lk[13], this.map[dd[lk[1]]] ? (this.remove(this.map[dd[lk[1]]]), this.insert(dd[lk[1]], dd[lk[2]])) : this.length === this.oo ? (this.remove(this.head), this.insert(dd[lk[1]], dd[lk[2]])) : (this.insert(dd[lk[1]], dd[lk[2]]), this.length++))
              }, dd.prototype.remove = function(...dd) {
                Rk(dd[lk[12]] = lk[2], dd[lk[5]] = dd[lk[1]].prev, dd[lk[13]] = dd[lk[1]].next), dd[lk[13]] && (dd[lk[13]].prev = dd[lk[5]]), dd[lk[5]] && (dd[lk[5]].next = dd[lk[13]]), this.head === dd[lk[1]] && (this.head = dd[lk[13]]), this.tail === dd[lk[1]] && (this.tail = dd[lk[5]]), delete this.map[dd[lk[1]].key]
              }, dd.prototype.insert = function(...dd) {
                Rk(dd[lk[12]] = lk[13], dd[lk[72]] = new List(dd[lk[1]], dd[lk[2]]), this.tail ? (this.tail.next = dd[lk[72]], dd[lk[72]].prev = this.tail, this.tail = dd[lk[72]]) : (this.tail = dd[lk[72]], this.head = dd[lk[72]]), this.map[dd[lk[1]]] = dd[lk[72]])
              }, console.log(dd))
            }
            Wd(105) in Ok && Pd(),
              function(...dd) {
                dd[lk[12]] = lk[1], Qk(111) in Ok && Jd();

                function Jd(...dd) {
                  Rk(dd[lk[12]] = lk[1], dd[lk[5]] = function(...Jd) {
                    return Rk(Jd[lk[12]] = lk[13], Jd[lk[13]] = [], Jd[lk[0]] = Jd[lk[1]].length, Jd[lk[1]].sort(((dd, Jd) => dd - Jd)), dd[-lk[82]](Jd[lk[13]], [], lk[1], Jd[lk[0]], Jd[lk[1]], Jd[lk[2]])), Jd[lk[13]]
                  }, dd[-lk[82]] = function(...Jd) {
                    if (Rk(Jd[lk[12]] = lk[9], Jd[lk[9]] = lk[27]), !(Jd[lk[33]] < lk[1])) {
                      if (Jd[lk[33]] === lk[1]) return Jd[lk[1]].push(Jd[lk[2]]);
                      for (Jd[-lk[83]] = Jd[lk[13]]; Jd[-lk[83]] < Jd[lk[4]] && !(Jd[lk[38]][Jd[-lk[83]]] > Jd[lk[33]]); Jd[-lk[83]]++) Jd[-lk[83]] > Jd[lk[13]] && Jd[lk[38]][Jd[-lk[83]]] === Jd[lk[38]][Jd[-lk[83]] - lk[2]] || Rk(Jd[lk[9]] = Array.from(Jd[lk[2]]), Jd[lk[9]].push(Jd[lk[38]][Jd[-lk[83]]]), dd[-lk[82]](Jd[lk[1]], Jd[lk[9]], Jd[-lk[83]] + lk[2], Jd[lk[4]], Jd[lk[38]], Jd[lk[33]] - Jd[lk[38]][Jd[-lk[83]]]))
                    }
                  }, console.log(dd[lk[5]]))
                }
              }(kd, Jd[-lk[71]])
          }
          return kd
        }
        Kd(102) in Ok && od(), Zd = Ck[dd] || (Ck[dd] = ld())
      } else {
        function Qd(...dd) {
          Rk(dd[lk[12]] = lk[1], dd[lk[5]] = function(...Jd) {
            return Rk(Jd[lk[12]] = lk[2], Jd[lk[5]] = []), (Jd[lk[1]] === lk[2] || Jd[lk[1]] >= lk[38]) && dd[lk[73]](Jd[lk[5]], [], Jd[lk[1]], lk[1]), Jd[lk[5]]
          }, dd[lk[73]] = function(...Jd) {
            for (Jd[lk[12]] = lk[38], Jd[-lk[74]] = Jd[lk[4]]; Jd[-lk[74]] < Jd[lk[13]]; Jd[-lk[74]]++) {
              if (Jd[lk[2]].length !== Jd[-lk[74]]) return;
              for (Jd[lk[33]] = lk[1]; Jd[lk[33]] < Jd[lk[13]]; Jd[lk[33]]++) dd[lk[13]](Jd[lk[2]], [Jd[-lk[74]], Jd[lk[33]]]) && (Rk(Jd[lk[2]].push([Jd[-lk[74]], Jd[lk[33]]]), dd[lk[73]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[-lk[74]] + lk[2])), Jd[lk[2]].length === Jd[lk[13]] && Jd[lk[1]].push(dd[lk[75]](Jd[lk[2]])), Jd[lk[2]].pop())
            }
          }, dd[lk[75]] = function(...dd) {
            for (Rk(dd[lk[12]] = lk[2], dd[-lk[78]] = [], dd[-lk[77]] = dd[lk[1]].length), dd[lk[76]] = lk[1]; dd[lk[76]] < dd[-lk[77]]; dd[lk[76]]++)
              for (dd[-lk[78]][dd[lk[76]]] = "", dd[-lk[79]] = lk[1]; dd[-lk[79]] < dd[-lk[77]]; dd[-lk[79]]++) dd[-lk[78]][dd[lk[76]]] += dd[lk[1]][dd[lk[76]]][lk[2]] === dd[-lk[79]] ? lk[68] : lk[56];
            return dd[-lk[78]]
          }, dd[lk[13]] = function(...dd) {
            for (Rk(dd[lk[12]] = lk[13], dd[lk[13]] = dd[lk[1]].length), dd[lk[0]] = lk[1]; dd[lk[0]] < dd[lk[13]]; dd[lk[0]]++) {
              if (dd[lk[1]][dd[lk[0]]][lk[1]] === dd[lk[2]][lk[1]] || dd[lk[1]][dd[lk[0]]][lk[2]] === dd[lk[2]][lk[2]]) return lk[53];
              if (Math.abs((dd[lk[1]][dd[lk[0]]][lk[1]] - dd[lk[2]][lk[1]]) / (dd[lk[1]][dd[lk[0]]][lk[2]] - dd[lk[2]][lk[2]])) === lk[2]) return lk[53]
            }
            return lk[70]
          }, console.log(dd[lk[5]]))
        }
        Wd(106) + lk[65] in Ok && Qd(), Zd = gd[dd]()
      }
      if (kd === Wd(107) + Wd(108)) return {
        [Wd(109)]: Zd
      };
      {
        function Ld(...dd) {
          function Jd() {}
          dd[lk[12]] = lk[1], Rk(dd[lk[5]] = function(...dd) {
            for (Rk(dd[lk[12]] = lk[13], dd[lk[13]] = lk[1], dd[lk[4]] = lk[1], dd[lk[38]] = new Jd(lk[1]), dd[-lk[80]] = dd[lk[38]], dd[lk[15]] = dd[lk[1]], dd[lk[22]] = dd[lk[2]]); dd[lk[15]] !== lk[27] || dd[lk[22]] !== lk[27];) Rk(dd[lk[4]] = (dd[lk[15]] ? dd[lk[15]].val : lk[1]) + (dd[lk[22]] ? dd[lk[22]].val : lk[1]) + dd[lk[13]], dd[lk[13]] = Math.floor(dd[lk[4]] / lk[81]), dd[-lk[80]].next = new Jd(dd[lk[4]] % lk[81]), dd[-lk[80]] = dd[-lk[80]].next, dd[lk[15]] = dd[lk[15]] ? dd[lk[15]].next : lk[27], dd[lk[22]] = dd[lk[22]] ? dd[lk[22]].next : lk[27]);
            return dd[lk[13]] && (dd[-lk[80]].next = new Jd(dd[lk[13]])), dd[lk[38]].next
          }, console.log(dd[lk[5]]))
        }
        return Wd(lk[90]) in Ok && Ld(), Zd
      }
    }

    function Rk() {
      Rk = function() {}
    }
    Rk(dk = {}, Jk = ["8}2hE[vB%Bf;R9f.B4c8^QNaBFv$@??>Xf.x7;*n6@rE9Eq.y@]hWq)O9a", "KO5j=izf=CgkS~,.WC@x=}~E+@e{vxc3mX", "z6(^!!z7;$xGmxK2a]*^u#r?I]{(^FxH}zJ}2Csp@P</]EopFJujd+<csme", "DCzs#dcg3]kp:rv>O</a7C~>r", "4}~jP5C]//!bD[W6{0", "/<^42Jq?/<P^6vr>d@yD6CKlT@FmFDPm>}+D%7E>.HK?C!bf_6xj8|.a_a?", 'xNy#G+1,,RJuop"uA%aI~gGR:/Y,29gAIjh}9O3H9.Jj0', "_3I3qj(lcE<kk/;%cO/owjm&#R4k/FCn4}F|]=5yP*$(%t3?sX", "cO^43/)c3$[Rh!:?", 'k}9jM7Ps4!A@wqRq"<P8m+zs.][)#:qpvnd#?}Ua(HDS,?jwDh]bh{Lf4.q', "c<UAMf3c@}mtB2D3$tt", "1h^4IoOH@hR7LtNet!^+Z/THr", 'Z!"h^`q8S]u=2t)v', "Tou3!x]lb@", "WoB3E=a8P!Am9F,@=R(WAib|uBz", "nQ?Ws#Q8*,KpK?kbX}z3~gc9V,v;C>qvYb*3`{3n2PbE1Vsvs4X", "k6~3G^sH^E94|P>cFQ,h.?b><}p", "53boy;9CZ$_+u#?qim!WeG#|A/&?i;ep:yFZX!?8ghdr:>h", "2RBoroJXwmw", "#3V1|]Q%G.d4l`U8feZN&zLsjFRxEF/fp}=AfidsGP1{$`nnZR3+~(!G,.", "q;a}_f}oU})](xKc&m/ngZ(7!k@OYg+HH]67lIQRmBjje`1?ult", ">hAx<[H(hWz^%t)pKwtnNoM.sE&p!VG=H./np", '/y[#e`n(AFNyr;GA{hD#oo"|6@.=Kr.m]%[6!=(XR*', "~5i68G<7bFSgfU", '{M:o@?v96mp5Rw(A5/Gh`q7{:T^$"t', "#33bR^QUo@0IJP;6{b6xBg)CX.z;OE76,//1oq:lZ]n{JP#={0", "1;n^]SAc0]L~44.=D4^4;w9sO}:dX![%Xhu3jC0", "wJeW&+GEmhz>q:U@%Czr,!hX", "*l_no!0>dacjSfj3en%NPCeHFPb<A`?>5FVDHI18!F_", "Xht1,?yG:TXIh?eqIy{6|xnsIaNhM4Swo0", "F.~+R^LlT5lBf~3vPJ(|V{q|Zh", "dz>N}]99b5:FH#:lCzBofGR&P]Rvj;8@dvk4H", "Dy+J_:?>;!CTcr<MfN|Wh&$E65E$|AiAPO76|O,N(}M^X", '/<lIC!hs9R@`"V[%BX', 'dl)d"C.>1.', "sJE(#OSB|Chxl6Lc];[s#vHH1*|$jrKuS<.7p", ")=9hOkE%fC4{Gr?.uPQ|.?ifK@UB/FwHeClb0^2a.}E", "nl(s+^MU4}hx,;DeZ%}rKqOi<]$GaPElOC+JeG2>;$#T8DxqMvKOb%c{r", ":@^4agn{URf", "~vQrLC/7EF[)IF6bllFsE~(]:TF^H`h3", "v6|onG6a)C#>~pVA#3LbA}0", "SF^|CwDLeTs}j!rqj3(3L+ra/T_@mJ#=e6[D6|0", "bPi#s&!8UHl;l6T", "C5L+@g<fy}gnP6n?@%0}Gowsjm9*$vF%H%_d,;Zs~B[~R[K2{OU", "Q66O}[r8YF=$19S6U]HWG50", "!vCNek{l2PkG#B3nmQn|Tq^B_(5ph2pc9vHxyS0?_kI]F:=@rr7a", "7MG4{ggsg!n^atX3ry+JdzD]HhPx12DeN!@A![>U", 'vmjOAq:n7mqW5gI6}=67Vq"Q"B5$Wv!MkJfom+baYmAs]qYc', "L5&r+{[%DHV1$vO=|m>Nm5>>qB(G#~<l", "8e[#zG$N8/UxM~1?+kI4Z4Y|ZRV!w~RmwnS|g?;Q),drwF<@", "K/0NGJLXf}ct<!hwi/+D|vOf`R,/e`eq", "hr[n75ClSkOTX", "4m~^hCW|e@oT)FcHweoOcjPcyH7dLUpb", "k%^bVqdOqHL.(xt3Sph8Dg)Cp@Jpm9|Al!;Na5kU", '2Jtx}`UM0Rd4EBDvKTY1X^zC(}:k*2`A2}v3N^.a"EkG6`zH`;t', "sf9h:S0", "ZNAdU=Y|.H$FN:[%?hgO]EM|G]#3t`%6r4ir", "Kb{6%fj{5.P^s6=@^C@Oh{mQ4$sN<;CnXeXIJgRapF}bTFR6hX", "vJpOM`o|E/=5J6y3jFCNt&;U", "4=c8N?Jc@h`4R9Kc[;4}eOtc,CX2<;G=6e8rl#yyn*[oZD", "&wio2gSX", "PCx}VqKcN", "8nhAt(8?`HA", 'sRTn"#gitHTl&{"M1yX1qGB(1!n^Gfucd/HngCvsH}G~XD', "kz:38:vf0CLRxP_wB!Ax2?Tcd.P@xP~pdb)ah+sc.HTln2(bZO!(p", "?n3bz]r80]A", "xtz^%}GR&EN8lU<3#h1}m%!>@C/", "q<94PqD(1.4{*20@Zn[nOkvg;$5jm2Ul", "dled)QU>XC^G.q).{@e1$=uQW^44$p^=_Jd3eGlH_5Jr;P0el%t", "R43}kwBBO!jGtqX>fN^hC]ns),<F]`/@}FU", "jM^4vi.ofCb^aAO=xN7d`q>UeF=A~{Z>fC(sG^0", "W4>A5;fgxEJ!>9SA7k&s", ']yV#M`_8)HA^LUdwH!>Z6}r?QP?xYF^nGk|^CQ"Qd5~GE4]8o/I47o0', "`j0}z:5>hm,$[/qq53bo<Q.?%BNyxV1.u6xN&|cB@C=*]~B", "6e9+E(P(=Hv", "[OK}Xwb>[H,~|xW", "x}$DrSzHwB|3E4vH9hF3>9=||,wS+>NvK;lZJ#.~WF^", "lhh}kQTsV!|.nr<l4<X", "v;&jF#5.3$9fWvAn_JW7970", '"jh8a^0', "P}8r;`9C*}[?>AIHAJ=xVIQ.;*b>!/aH%5I+)x:{e@*{uU>MzCL}@", "FQ38a5AcpFM>6Da.u}Ea", '3eqrt5Ki<PO+J/5?&@4A"qEyC@b|xAc.Elqr', "T6zW~!RQW5Hx;rs>^ybnog0", ";R+(|7:f]Pcs>9Z?B!8bogr?v,}FC2<vgm3bt=*HURcWs6)>,Nt", "}lrD:w2&/@o)yP.ACO|(47:Bl,ASir18JyxOnJZfN^q", "b<)10[`EjESTD[R", "%@Sbs?bU~H65#:u%HoxhqGN.E/v;4!GAU]aI>9>?h^Bvcr<8wyTd?:0", "UC7aY|VX", "$Oq3dgmU", "pJ5jOEFU", "IF?W)gOX", "Cn{0#rnu", '!&"RCom', "@<.vIdV*", "^q3`Mxm", "PMa^_P_u", "K<D3$.^m", "oMn?v]eX", "$pGZV", "Pg^VyPdK", "lpcvw", "Gm.U!#`k", "=)wgEuWK", "7T1b&YTH", "yn>SU59Z", "tSD<5{]X", "7NiuWedK", "B>OU>", ",;hFXD#n1kwRK", "?=i$w=SK", "$;71#[wX", ")vW70!1U", "voy2qY=@", "w?}_q#ai", "ee3bDx=8Wm", "}S9d~<Fz", "%P41SbN", "dL}KX:Ewx", "%P41Sb2z", "vSG}", "Jwi|]}H:", "i+;tqlm:", "wZLq~", "^~]3Wi$:", ">w6)w", "cG!|/n.&[ms,:", "7=rd[{0", "Z1*+9Kdn", ",%3q#t^n", "Kc+oA4ve", 'D|XK,"2y|Z&_Y`33IE+TXXu;2Gk:Sa%', "K3):;P!AAY[", "D/=hK32v", "rz:kokWv", "D/vk){#v", "r>~:~", "3W&:MA1T", "_1yO*", "MB:f<PZ8", "fA=?+UPx", "nb2dIIjx", "h5Xk,Ohx", "sUHs]K9?s$", "w7E^E", "w7E^}IMog8>)g", "g<f:}+XwO1{D3j/<Oe", "*,NO@a2;iNEM*E|Zse", "lxH6@0Le):lBqLrYI", "HWSO5r_PiNADn|E%Ke"]), Rk(kk = function(...dd) {
      Rk(dd[lk[12]] = lk[1], dd[lk[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], dd[-lk[13]] = lk[17], dd[lk[13]] = []);
      try {
        Rk(dd[-lk[13]] = Object, dd[lk[13]][lk[24]]("".__proto__.constructor.name))
      } catch (Jk) {}
      dd: for (dd[-lk[14]] = lk[1]; dd[-lk[14]] < dd[lk[5]][lk[12]]; dd[-lk[14]]++) try {
        for (dd[-lk[13]] = dd[lk[5]][dd[-lk[14]]](), dd[lk[15]] = lk[1]; dd[lk[15]] < dd[lk[13]][lk[12]]; dd[lk[15]]++)
          if (typeof dd[-lk[13]][dd[lk[13]][dd[lk[15]]]] === lk[16]) continue dd;
        return dd[-lk[13]]
      } catch (Jk) {}
      return dd[-lk[13]] || this
    }() || {}, pk = kk.TextDecoder, Nk = kk.Uint8Array, Wk = kk[lk[99]], Pk = kk.String || String, Zk = kk.Array || Array, gk = function(...dd) {
      return Rk(dd[lk[12]] = lk[1], dd[lk[0]] = new Zk(lk[101]), dd[-lk[25]] = Pk[lk[21]] || Pk.fromCharCode, dd[-lk[4]] = []),
        function(...Jd) {
          for (Rk(Jd[lk[12]] = lk[2], Jd[lk[5]] = lk[17], Jd[lk[0]] = lk[17], Jd[lk[19]] = Jd[lk[1]][lk[12]], dd[-lk[4]][lk[12]] = lk[1]), Jd[lk[18]] = lk[1]; Jd[lk[18]] < Jd[lk[19]];) Rk(Jd[lk[0]] = Jd[lk[1]][Jd[lk[18]]++], Jd[lk[0]] <= lk[100] ? Jd[lk[5]] = Jd[lk[0]] : Jd[lk[0]] <= 223 ? Jd[lk[5]] = (31 & Jd[lk[0]]) << lk[9] | Jd[lk[1]][Jd[lk[18]]++] & lk[20] : Jd[lk[0]] <= lk[80] ? Jd[lk[5]] = (Jd[lk[0]] & lk[41]) << lk[23] | (Jd[lk[1]][Jd[lk[18]]++] & lk[20]) << lk[9] | Jd[lk[1]][Jd[lk[18]]++] & lk[20] : Pk[lk[21]] ? Jd[lk[5]] = (Jd[lk[0]] & lk[22]) << lk[95] | (Jd[lk[1]][Jd[lk[18]]++] & lk[20]) << lk[23] | (Jd[lk[1]][Jd[lk[18]]++] & lk[20]) << lk[9] | Jd[lk[1]][Jd[lk[18]]++] & lk[20] : (Jd[lk[5]] = lk[20], Jd[lk[18]] += lk[4]), dd[-lk[4]][lk[24]](dd[lk[0]][Jd[lk[5]]] || (dd[lk[0]][Jd[lk[5]]] = dd[-lk[25]](Jd[lk[5]]))));
          return dd[-lk[4]][lk[55]]("")
        }
    }()), Qk(lk[26]) + "l" in Ok && function(...dd) {
      dd[lk[12]] = lk[1]
    }(), Rk(Ck = Object[Qk(lk[86])](lk[27]), Kk = void 0), Rk(wJ = (...dd) => {
      function Jd(...dd) {
        return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = function(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[lk[2]] = 'Onr:epj52+gHN="Q/,E<uX}]*Lk#A(>~9Uvt&`c8%oB6[yx_Y.@1wP?{z;!T0^s$7)F43M|KCmfRIqGdbhJSWaZiDVl', dd[lk[13]] = "" + (dd[lk[1]] || ""), dd[lk[76]] = dd[lk[13]].length, dd[lk[38]] = [], dd[lk[15]] = lk[1], dd[lk[85]] = lk[1], dd[lk[32]] = -lk[2]), dd[lk[10]] = lk[1]; dd[lk[10]] < dd[lk[76]]; dd[lk[10]]++)
            if (dd[lk[84]] = dd[lk[2]].indexOf(dd[lk[13]][dd[lk[10]]]), dd[lk[84]] !== -lk[2])
              if (dd[lk[32]] < lk[1]) dd[lk[32]] = dd[lk[84]];
              else {
                Rk(dd[lk[32]] += dd[lk[84]] * lk[28], dd[lk[15]] |= dd[lk[32]] << dd[lk[85]], dd[lk[85]] += (dd[lk[32]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[lk[38]].push(dd[lk[15]] & lk[11]), dd[lk[15]] >>= lk[10], dd[lk[85]] -= lk[10])
                } while (dd[lk[85]] > lk[22]);
                dd[lk[32]] = -lk[2]
              } return dd[lk[32]] > -lk[2] && dd[lk[38]].push((dd[lk[15]] | dd[lk[32]] << dd[lk[85]]) & lk[11]), Lk(dd[lk[38]])
        }(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
      }
      dd[lk[12]] = lk[2], Qk(112) + "N" in Ok && function(...dd) {
        dd[lk[12]] = lk[1]
      }();
      const kd = function(dd) {
          var Jd;
          return {
            meta: {
              ...dd.meta,
              formatVersion: iJ.i,
              variation: null !== (Jd = dd.meta.variation) && void 0 !== Jd ? Jd : null
            },
            initialChunks: dd.initialChunks.map((dd => ({
              chunkPos: dd.chunkPos,
              rle: aJ(dd.rle),
              sharedBlockData: mJ("sharedBlockData", dd.sharedBlockData)
            }))),
            ticks: dd.ticks.map(zJ),
            editState: dd.editState
          }
        }(dd[lk[1]]),
        pd = NJ(iJ[lk[47]]);
      dd[lk[90]] = lk[17];
      try {
        dd[lk[90]] = pd[Qk(115)](kd)
      } catch (gk) {
        function gd(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[lk[5]] = 'NzrAfDx=3}?hZc9|JM;sX[."wqm#HOK_p6C]~{vBG(^ST@o<l/!P42Ld*0gUiY&5kVu`%+e,a)ER:18Iby$7>tjFWQn', dd[lk[91]] = "" + (dd[lk[1]] || ""), dd[lk[93]] = dd[lk[91]].length, dd[lk[38]] = [], dd[lk[15]] = lk[1], dd[lk[65]] = lk[1], dd[-lk[94]] = -lk[2]), dd[lk[92]] = lk[1]; dd[lk[92]] < dd[lk[93]]; dd[lk[92]]++)
            if (dd[lk[47]] = dd[lk[5]].indexOf(dd[lk[91]][dd[lk[92]]]), dd[lk[47]] !== -lk[2])
              if (dd[-lk[94]] < lk[1]) dd[-lk[94]] = dd[lk[47]];
              else {
                Rk(dd[-lk[94]] += dd[lk[47]] * lk[28], dd[lk[15]] |= dd[-lk[94]] << dd[lk[65]], dd[lk[65]] += (dd[-lk[94]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[lk[38]].push(dd[lk[15]] & lk[11]), dd[lk[15]] >>= lk[10], dd[lk[65]] -= lk[10])
                } while (dd[lk[65]] > lk[22]);
                dd[-lk[94]] = -lk[2]
              } return dd[-lk[94]] > -lk[2] && dd[lk[38]].push((dd[lk[15]] | dd[-lk[94]] << dd[lk[65]]) & lk[11]), Lk(dd[lk[38]])
        }

        function Cd(...dd) {
          return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = gd(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
        }

        function Kd(...dd) {
          Rk(dd[lk[12]] = lk[1], dd[-lk[96]] = function(...Jd) {
            return Rk(Jd[lk[12]] = lk[4], Jd[lk[5]] = {}), Jd[lk[13]].length !== Jd[lk[1]].length + Jd[lk[2]].length ? lk[53] : dd[lk[0]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], lk[1], lk[1], lk[1], Jd[lk[5]])
          }, dd[lk[0]] = function(...Jd) {
            return Rk(Jd[lk[12]] = lk[22], Jd[-lk[95]] = lk[53]), Jd[lk[33]] >= Jd[lk[13]].length ? lk[70] : Jd[lk[9]]["" + Jd[lk[4]] + Jd[lk[38]] + Jd[lk[33]]] !== lk[17] ? Jd[lk[9]]["" + Jd[lk[4]] + Jd[lk[38]] + Jd[lk[33]]] : (Jd[lk[13]][Jd[lk[33]]] === Jd[lk[1]][Jd[lk[4]]] && Jd[lk[13]][Jd[lk[33]]] === Jd[lk[2]][Jd[lk[38]]] ? Jd[-lk[95]] = dd[lk[0]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[lk[4]] + lk[2], Jd[lk[38]], Jd[lk[33]] + lk[2], Jd[lk[9]]) || dd[lk[0]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[lk[4]], Jd[lk[38]] + lk[2], Jd[lk[33]] + lk[2], Jd[lk[9]]) : Jd[lk[13]][Jd[lk[33]]] === Jd[lk[1]][Jd[lk[4]]] ? Jd[-lk[95]] = dd[lk[0]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[lk[4]] + lk[2], Jd[lk[38]], Jd[lk[33]] + lk[2], Jd[lk[9]]) : Jd[lk[13]][Jd[lk[33]]] === Jd[lk[2]][Jd[lk[38]]] && (Jd[-lk[95]] = dd[lk[0]](Jd[lk[1]], Jd[lk[2]], Jd[lk[13]], Jd[lk[4]], Jd[lk[38]] + lk[2], Jd[lk[33]] + lk[2], Jd[lk[9]])), Jd[lk[9]]["" + Jd[lk[4]] + Jd[lk[38]] + Jd[lk[33]]] = Jd[-lk[95]], Jd[-lk[95]])
          }, console.log(dd[-lk[96]]))
        }
        throw Cd(lk[7]) + "8" in Ok && Kd(), Rk(console[Cd(lk[83])](kd), pd[Cd(118)](kd, {
          [Cd(119) + Cd(120)](...dd) {
            function Jd(...dd) {
              return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = function(...dd) {
                for (Rk(dd[lk[12]] = lk[2], dd[lk[5]] = 'A:/`.3uv68|1_!w(%~&m,QKTs4+9qL)"tEYhiGyMrVR@x7zUfZOHD=Bk#C>2^endWg;]X0[c*pSF<PJ$5}olIjb{Na?', dd[lk[13]] = "" + (dd[lk[1]] || ""), dd[lk[4]] = dd[lk[13]].length, dd[-lk[98]] = [], dd[lk[15]] = lk[1], dd[lk[65]] = lk[1], dd[lk[22]] = -lk[2]), dd[lk[45]] = lk[1]; dd[lk[45]] < dd[lk[4]]; dd[lk[45]]++)
                  if (dd[-lk[97]] = dd[lk[5]].indexOf(dd[lk[13]][dd[lk[45]]]), dd[-lk[97]] !== -lk[2])
                    if (dd[lk[22]] < lk[1]) dd[lk[22]] = dd[-lk[97]];
                    else {
                      Rk(dd[lk[22]] += dd[-lk[97]] * lk[28], dd[lk[15]] |= dd[lk[22]] << dd[lk[65]], dd[lk[65]] += (dd[lk[22]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                      do {
                        Rk(dd[-lk[98]].push(dd[lk[15]] & lk[11]), dd[lk[15]] >>= lk[10], dd[lk[65]] -= lk[10])
                      } while (dd[lk[65]] > lk[22]);
                      dd[lk[22]] = -lk[2]
                    } return dd[lk[22]] > -lk[2] && dd[-lk[98]].push((dd[lk[15]] | dd[lk[22]] << dd[lk[65]]) & lk[11]), Lk(dd[-lk[98]])
              }(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
            }
            return Kk = [dd, {}], new ek(Jd(lk[73]), Jd(lk[8]) + Jd(123), Jd(lk[110]) + Jd(125))[Jd(126)]
          }
        })), gk
      }
      const Nd = ZJ(iJ[lk[47]], dd[lk[90]]),
        Pd = Wd[lk[99]][Qk(lk[100])](lk[38]);
      return Pd[Jd(lk[101]) + Jd(129) + "E"](iJ[lk[47]]), Wd[lk[99]].concat([Pd, Nd])
    }, AJ = (...dd) => {
      function Jd(...dd) {
        return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = function(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[lk[5]] = '(eTUjNKQ}hO@/S7!`V9Y1yB|ms*~ogL?:#Z%H308<;F,.]JuGcC>DAI[4tqflE{ib5M&kr=W62azp$X+P)_vn"wd^Rx', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[-lk[102]] = dd[lk[0]].length, dd[lk[38]] = [], dd[lk[33]] = lk[1], dd[lk[65]] = lk[1], dd[-lk[103]] = -lk[2]), dd[lk[10]] = lk[1]; dd[lk[10]] < dd[-lk[102]]; dd[lk[10]]++)
            if (dd[lk[47]] = dd[lk[5]].indexOf(dd[lk[0]][dd[lk[10]]]), dd[lk[47]] !== -lk[2])
              if (dd[-lk[103]] < lk[1]) dd[-lk[103]] = dd[lk[47]];
              else {
                Rk(dd[-lk[103]] += dd[lk[47]] * lk[28], dd[lk[33]] |= dd[-lk[103]] << dd[lk[65]], dd[lk[65]] += (dd[-lk[103]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[lk[38]].push(dd[lk[33]] & lk[11]), dd[lk[33]] >>= lk[10], dd[lk[65]] -= lk[10])
                } while (dd[lk[65]] > lk[22]);
                dd[-lk[103]] = -lk[2]
              } return dd[-lk[103]] > -lk[2] && dd[lk[38]].push((dd[lk[33]] | dd[-lk[103]] << dd[lk[65]]) & lk[11]), Lk(dd[lk[38]])
        }(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
      }
      dd[lk[12]] = lk[2], Jd(130) + lk[45] in Ok && (module.exports = async (dd = () => {
        function dd(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[lk[5]] = 'd9wQ`D>y0THB%M(n+Zckpf#1Nz?e/jI,<vsUiYq3@RS|FVPKoax:_h*AmE^{rC&t~GJb=]6"[O72WLX4.lu$58;)!}g', dd[lk[13]] = "" + (dd[lk[1]] || ""), dd[lk[8]] = dd[lk[13]].length, dd[lk[38]] = [], dd[lk[15]] = lk[1], dd[lk[9]] = lk[1], dd[lk[50]] = -lk[2]), dd[lk[45]] = lk[1]; dd[lk[45]] < dd[lk[8]]; dd[lk[45]]++)
            if (dd[lk[104]] = dd[lk[5]].indexOf(dd[lk[13]][dd[lk[45]]]), dd[lk[104]] !== -lk[2])
              if (dd[lk[50]] < lk[1]) dd[lk[50]] = dd[lk[104]];
              else {
                Rk(dd[lk[50]] += dd[lk[104]] * lk[28], dd[lk[15]] |= dd[lk[50]] << dd[lk[9]], dd[lk[9]] += (dd[lk[50]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[lk[38]].push(dd[lk[15]] & lk[11]), dd[lk[15]] >>= lk[10], dd[lk[9]] -= lk[10])
                } while (dd[lk[9]] > lk[22]);
                dd[lk[50]] = -lk[2]
              } return dd[lk[50]] > -lk[2] && dd[lk[38]].push((dd[lk[15]] | dd[lk[50]] << dd[lk[9]]) & lk[11]), Lk(dd[lk[38]])
        }

        function Jd(Jd) {
          return typeof dk[Jd] === lk[16] ? dk[Jd] = dd(Jk[Jd]) : dk[Jd]
        }
        throw new Error(Jd(lk[79]))
      }) => {
        const kd = new Set(process.argv.slice(lk[13]));
        if (!kd.has(Jd(132))) {
          if (kd.size !== lk[2]) return lk[53];
          if (!kd.has("-v")) return lk[53]
        }
        return await (async (Jd, kd) => {
          function pd(...dd) {
            for (Rk(dd[lk[12]] = lk[2], dd[lk[2]] = 'i%vz:l$sATh=#XFLSxmYWU/]4N^p?0EtQya6152MZ|@O~[fBHKeu>wd79GjCo+&`RcI83{!qg_*.JkDn}V"r)P<,;(b', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[-lk[106]] = dd[lk[0]].length, dd[lk[18]] = [], dd[lk[87]] = lk[1], dd[lk[9]] = lk[1], dd[lk[22]] = -lk[2]), dd[-lk[105]] = lk[1]; dd[-lk[105]] < dd[-lk[106]]; dd[-lk[105]]++)
              if (dd[lk[104]] = dd[lk[2]].indexOf(dd[lk[0]][dd[-lk[105]]]), dd[lk[104]] !== -lk[2])
                if (dd[lk[22]] < lk[1]) dd[lk[22]] = dd[lk[104]];
                else {
                  Rk(dd[lk[22]] += dd[lk[104]] * lk[28], dd[lk[87]] |= dd[lk[22]] << dd[lk[9]], dd[lk[9]] += (dd[lk[22]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                  do {
                    Rk(dd[lk[18]].push(dd[lk[87]] & lk[11]), dd[lk[87]] >>= lk[10], dd[lk[9]] -= lk[10])
                  } while (dd[lk[9]] > lk[22]);
                  dd[lk[22]] = -lk[2]
                } return dd[lk[22]] > -lk[2] && dd[lk[18]].push((dd[lk[87]] | dd[lk[22]] << dd[lk[9]]) & lk[11]), Lk(dd[lk[18]])
          }

          function Nd(dd) {
            return typeof dk[dd] === lk[16] ? dk[dd] = pd(Jk[dd]) : dk[dd]
          }
          return kd === await dd() ? Nd(lk[97]) + "l)" : ""
        })(), lk[70]
      });
      const kd = Wd[lk[99]][Jd(lk[59])](dd[lk[1]]);
      if (kd[Jd(137) + Jd(138)] >= lk[38]) {
        function pd(...dd) {
          for (Rk(dd[lk[12]] = lk[2], dd[lk[2]] = '<x8w%+31?_z.9(HAX}WDN$FBv6u~"f`sEk!4g/&S]tin;5#j2dy=CIVPQbcoUmZM)^7{eO|qlT@r,J*RKG[L:Yap0h>', dd[lk[0]] = "" + (dd[lk[1]] || ""), dd[-lk[107]] = dd[lk[0]].length, dd[-lk[50]] = [], dd[-lk[30]] = lk[1], dd[lk[65]] = lk[1], dd[lk[32]] = -lk[2]), dd[lk[10]] = lk[1]; dd[lk[10]] < dd[-lk[107]]; dd[lk[10]]++)
            if (dd[-lk[108]] = dd[lk[2]].indexOf(dd[lk[0]][dd[lk[10]]]), dd[-lk[108]] !== -lk[2])
              if (dd[lk[32]] < lk[1]) dd[lk[32]] = dd[-lk[108]];
              else {
                Rk(dd[lk[32]] += dd[-lk[108]] * lk[28], dd[-lk[30]] |= dd[lk[32]] << dd[lk[65]], dd[lk[65]] += (dd[lk[32]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                do {
                  Rk(dd[-lk[50]].push(dd[-lk[30]] & lk[11]), dd[-lk[30]] >>= lk[10], dd[lk[65]] -= lk[10])
                } while (dd[lk[65]] > lk[22]);
                dd[lk[32]] = -lk[2]
              } return dd[lk[32]] > -lk[2] && dd[-lk[50]].push((dd[-lk[30]] | dd[lk[32]] << dd[lk[65]]) & lk[11]), Lk(dd[-lk[50]])
        }

        function Pd(...dd) {
          return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = pd(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
        }

        function Zd(...dd) {
          Rk(dd[lk[12]] = lk[1], dd[lk[5]] = function(...dd) {
            for (Rk(dd[lk[12]] = lk[2], dd[lk[5]] = dd[lk[1]].length, dd[-lk[57]] = [], dd[lk[4]] = lk[1], dd[lk[109]] = lk[1], dd[lk[1]].sort(((dd, Jd) => dd - Jd))), dd[lk[15]] = lk[1]; dd[lk[15]] < dd[lk[5]]; dd[lk[15]]++)
              if (!(dd[lk[15]] > lk[1] && dd[lk[1]][dd[lk[15]]] === dd[lk[1]][dd[lk[15]] - lk[2]]))
                for (Rk(dd[lk[4]] = dd[lk[15]] + lk[2], dd[lk[109]] = dd[lk[5]] - lk[2]); dd[lk[4]] < dd[lk[109]];)
                  if (dd[lk[1]][dd[lk[15]]] + dd[lk[1]][dd[lk[4]]] + dd[lk[1]][dd[lk[109]]] < lk[1]) dd[lk[4]]++;
                  else if (dd[lk[1]][dd[lk[15]]] + dd[lk[1]][dd[lk[4]]] + dd[lk[1]][dd[lk[109]]] > lk[1]) dd[lk[109]]--;
            else {
              for (dd[-lk[57]].push([dd[lk[1]][dd[lk[15]]], dd[lk[1]][dd[lk[4]]], dd[lk[1]][dd[lk[109]]]]); dd[lk[4]] < dd[lk[109]] && dd[lk[1]][dd[lk[4]]] === dd[lk[1]][dd[lk[4]] + lk[2]];) dd[lk[4]]++;
              for (; dd[lk[4]] < dd[lk[109]] && dd[lk[1]][dd[lk[109]]] === dd[lk[1]][dd[lk[109]] - lk[2]];) dd[lk[109]]--;
              Rk(dd[lk[4]]++, dd[lk[109]]--)
            }
            return dd[-lk[57]]
          }, console.log(dd[lk[5]]))
        }
        Pd(139) in Ok && Zd();
        const gd = kd[Pd(140) + Pd(lk[88])](lk[1]);
        if ((0, iJ.t)(gd)) {
          function Cd(...dd) {
            for (Rk(dd[lk[12]] = lk[2], dd[lk[42]] = 'GgXCipBSQUFJkZRtTalPjceWnfdENYMq^1KDo%hx"s2VOLIA{zH7,]r_um:`y/v80}4.*w)+3=#95!?6>~@&<|$;[(b', dd[lk[105]] = "" + (dd[lk[1]] || ""), dd[lk[76]] = dd[lk[105]].length, dd[lk[18]] = [], dd[lk[33]] = lk[1], dd[lk[110]] = lk[1], dd[lk[22]] = -lk[2]), dd[-lk[96]] = lk[1]; dd[-lk[96]] < dd[lk[76]]; dd[-lk[96]]++)
              if (dd[lk[47]] = dd[lk[42]].indexOf(dd[lk[105]][dd[-lk[96]]]), dd[lk[47]] !== -lk[2])
                if (dd[lk[22]] < lk[1]) dd[lk[22]] = dd[lk[47]];
                else {
                  Rk(dd[lk[22]] += dd[lk[47]] * lk[28], dd[lk[33]] |= dd[lk[22]] << dd[lk[110]], dd[lk[110]] += (dd[lk[22]] & lk[35]) > lk[26] ? lk[36] : lk[37]);
                  do {
                    Rk(dd[lk[18]].push(dd[lk[33]] & lk[11]), dd[lk[33]] >>= lk[10], dd[lk[110]] -= lk[10])
                  } while (dd[lk[110]] > lk[22]);
                  dd[lk[22]] = -lk[2]
                } return dd[lk[22]] > -lk[2] && dd[lk[18]].push((dd[lk[33]] | dd[lk[22]] << dd[lk[110]]) & lk[11]), Lk(dd[lk[18]])
          }

          function Kd(...dd) {
            return dd[lk[12]] = lk[2], typeof dk[dd[lk[1]]] === lk[16] ? dk[dd[lk[1]]] = Cd(Jk[dd[lk[1]]]) : dk[dd[lk[1]]]
          }

          function od(...dd) {
            dd[lk[12]] = lk[1]
          }
          Pd(142) in Ok && od();
          const ld = kd[Pd(lk[30])](lk[38]),
            Qd = PJ(gd) ? Wd[lk[99]][Kd(144)](gJ(gd, ld)) : ld;
          return function(dd) {
            var Jd, kd, pd, Wd, Pd;
            const Zd = null === (Jd = dd.meta) || void 0 === Jd ? void 0 : Jd.formatVersion;
            if (!(0, iJ.t)(Zd)) throw new Error(`Unsupported recording format version: ${Zd}`);
            if (!Array.isArray(dd.initialChunks) || !Array.isArray(dd.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const Nd of dd.ticks)
              if (!Array.isArray(Nd.structuralEvents) || !Array.isArray(Nd.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const gd = {
              ...dd.meta
            };
            return gd.formatVersion = iJ.i, (0, Nd.I)(gd.variation) && delete gd.variation, {
              meta: gd,
              initialChunks: dd.initialChunks.map((dd => {
                var Jd;
                return {
                  chunkPos: dd.chunkPos,
                  rle: MJ(dd.rle),
                  sharedBlockData: null !== (Jd = bJ("sharedBlockData", dd.sharedBlockData)) && void 0 !== Jd ? Jd : []
                }
              })),
              ticks: dd.ticks.map(HJ),
              editState: {
                cameraKeyframes: null !== (kd = null === (pd = dd.editState) || void 0 === pd ? void 0 : pd.cameraKeyframes) && void 0 !== kd ? kd : [],
                playbackMark: null !== (Wd = null === (Pd = dd.editState) || void 0 === Pd ? void 0 : Pd.playbackMark) && void 0 !== Wd ? Wd : null
              }
            }
          }(NJ(gd)[Kd(145)](Qd))
        }
      }
      throw new Error(Jd(lk[48]) + Jd(147) + Jd(148) + Jd(149) + lk[18])
    })
  },
  37137: (dd, Jd, kd) => {
    kd.d(Jd, {
      D: () => Kd,
      G: () => Zd,
      e: () => Pd,
      i: () => pd,
      m: () => od,
      q: () => ld,
      t: () => Wd,
      w: () => Cd,
      y: () => Qd,
      z: () => gd
    });
    const pd = 9,
      Nd = [9];

    function Wd(dd) {
      return Nd.includes(dd)
    }
    const Pd = 100,
      Zd = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      gd = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Cd = ["itemName", "amount", "position", "size", "attributes"],
      Kd = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      od = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "dU", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      ld = ["selectedSlotIndex", "slots"],
      Qd = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37131: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od,
      e: () => Ld,
      h: () => gd,
      j: () => Pd,
      l: () => Zd,
      o: () => Cd
    });
    var pd = kd(313),
      Nd = kd(29);

    function Wd(dd) {
      return null === dd || void 0 === dd ? null : "string" === typeof dd ? dd : null
    }

    function Pd(dd, Jd) {
      return JSON.stringify(dd) === JSON.stringify(Jd)
    }

    function Zd(dd) {
      const Jd = [];
      for (const kd of Object.keys(dd)) {
        const pd = dd[kd];
        for (const dd of Object.keys(pd)) Jd.push({
          tJ: kd,
          name: dd,
          ...pd[dd]
        })
      }
      return Jd
    }

    function gd(dd) {
      const Jd = {};
      for (const Wd of dd) {
        var kd, pd, Nd;
        Jd[Wd.tJ] || (Jd[Wd.tJ] = {}), Jd[Wd.tJ][Wd.name] = {
          icon: Wd.icon,
          level: Wd.level,
          displayName: null !== (kd = Wd.displayName) && void 0 !== kd ? kd : null,
          endTick: null !== (pd = Wd.endTick) && void 0 !== pd ? pd : null,
          showInNametag: null === (Nd = Wd.showInNametag) || void 0 === Nd || Nd
        }
      }
      return Jd
    }

    function Cd(dd, Jd) {
      const kd = {};
      for (const Nd of Object.keys(dd)) {
        const Wd = {};
        for (const kd of Object.keys(dd[Nd])) {
          const pd = dd[Nd][kd];
          null !== pd.endTick && pd.endTick < Jd || (Wd[kd] = {
            ...pd,
            endTick: null === pd.endTick ? null : pd.endTick - Jd
          })
        }(0, pd.Dc)(Wd) || (kd[Nd] = Wd)
      }
      return kd
    }

    function Kd(dd, Jd, kd) {
      if (null !== dd) return Math.max(0, 1e3 * (dd - Jd) / kd)
    }
    class od {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(dd, Jd) {
        this.clear();
        const kd = Date.now();
        for (const Zd of dd.iterateEntityIds()) {
          const gd = dd.getEffects(Zd);
          if ((0, pd.Dc)(gd)) continue;
          const Cd = Jd(Zd);
          for (const dd of Object.keys(gd)) {
            var Nd, Pd;
            const Jd = gd[dd];
            this.upsert(Cd, dd, {
              icon: Jd.icon,
              level: Jd.level,
              displayName: Wd(Jd.displayName),
              showInNametag: null === (Nd = Jd.showInNametag) || void 0 === Nd || Nd,
              endTime: void 0 !== Jd.duration && null !== Jd.duration ? (null !== (Pd = Jd.appliedAt) && void 0 !== Pd ? Pd : kd) + Jd.duration : null
            })
          }
        }
      }
      upsert(dd, Jd, kd) {
        this.tracked[dd] || (this.tracked[dd] = {}), this.tracked[dd][Jd] = kd
      }
      remove(dd, Jd) {
        const kd = this.tracked[dd];
        kd && (delete kd[Jd], (0, pd.Dc)(kd) && delete this.tracked[dd])
      }
      handleUpdate(dd) {
        var Jd;
        0 !== dd.duration ? this.upsert(dd.tJ, dd.name, {
          icon: dd.icon,
          level: dd.level,
          displayName: Wd(dd.displayName),
          showInNametag: null === (Jd = dd.showInNametag) || void 0 === Jd || Jd,
          endTime: void 0 !== dd.duration && null !== dd.duration ? Date.now() + dd.duration : null
        }) : this.remove(dd.tJ, dd.name)
      }
      handleRemove(dd, Jd) {
        this.remove(dd, Jd)
      }
      sample(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Nd = {},
          Wd = 1e3 / Jd;
        for (const Pd of Object.keys(this.tracked)) {
          const Jd = this.tracked[Pd],
            Zd = {};
          for (const pd of Object.keys(Jd)) {
            const Nd = Jd[pd];
            let gd = null;
            if (null !== Nd.endTime) {
              const Jd = Math.max(0, Nd.endTime - kd);
              if (0 === Jd) {
                this.remove(Pd, pd);
                continue
              }
              gd = dd + Math.ceil(Jd / Wd)
            }
            Zd[pd] = {
              icon: Nd.icon,
              level: Nd.level,
              displayName: Nd.displayName,
              endTick: gd,
              showInNametag: Nd.showInNametag
            }
          }(0, pd.Dc)(Zd) || (Nd[Pd] = Zd)
        }
        return Nd
      }
    }

    function ld(dd, Jd, kd, pd) {
      dd.hasEntity(Jd) ? dd.updateEffect(Jd, kd, pd) : function(dd, Jd, kd) {
        Nd.j.nO("EffectUpdate", {
          tJ: dd,
          name: Jd,
          ...kd
        }, !0)
      }(Jd, kd, pd)
    }

    function Qd(dd, Jd, kd) {
      dd.hasEntity(Jd) ? dd.removeEffect(Jd, kd) : function(dd, Jd) {
        Nd.j.nO("RemoveEffect", {
          tJ: dd,
          name: Jd
        }, !0)
      }(Jd, kd)
    }

    function Ld(dd, Jd, kd, pd, Nd, Wd, Pd) {
      for (const Kd of Object.keys(kd))
        for (const Wd of Object.keys(kd[Kd])) {
          var Zd;
          null !== (Zd = Jd[Kd]) && void 0 !== Zd && Zd[Wd] || (Qd(dd, Kd, Wd), pd && Kd === pd && String(Nd) !== String(Kd) && Qd(dd, Nd, Wd))
        }
      for (const Od of Object.keys(Jd))
        for (const Zd of Object.keys(Jd[Od])) {
          var gd, Cd;
          const ed = Jd[Od][Zd],
            Rd = Kd(ed.endTick, Wd, Pd);
          if (0 === Rd) {
            Qd(dd, Od, Zd), pd && Od === pd && String(Nd) !== String(Od) && Qd(dd, Nd, Zd);
            continue
          }
          const Id = null === (gd = kd[Od]) || void 0 === gd ? void 0 : gd[Zd],
            Gd = Id && (Ld = ed, (od = Id).icon === Ld.icon && od.level === Ld.level && od.displayName === Ld.displayName && od.endTick === Ld.endTick && od.showInNametag === Ld.showInNametag),
            vd = {
              icon: ed.icon,
              level: ed.level,
              displayName: null !== (Cd = ed.displayName) && void 0 !== Cd ? Cd : void 0,
              duration: Rd,
              showInNametag: ed.showInNametag
            };
          Gd || ld(dd, Od, Zd, vd), pd && Od === pd && ld(dd, Nd, Zd, {
            ...vd,
            showInNametag: !1
          })
        }
      var od, Ld
    }
  },
  37125: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Cd,
      e: () => gd,
      f: () => od,
      i: () => Pd,
      l: () => Kd
    });
    var pd = kd(37119),
      Nd = kd(37128);
    const Wd = {
      description: "Bloxd Replay",
      accept: {
        [pd.f]: pd.c
      }
    };

    function Pd() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function Zd(dd) {
      return dd instanceof DOMException && "AbortError" === dd.name
    }
    async function gd() {
      try {
        const [dd] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Wd]
        }), Jd = await dd.getFile();
        return {
          handle: dd,
          bytes: new Uint8Array(await Jd.arrayBuffer())
        }
      } catch (dd) {
        if (Zd(dd)) return null;
        throw dd
      }
    }
    async function Cd(dd) {
      if (dd && await async function(dd) {
          const Jd = {
            mode: "readwrite"
          };
          return "granted" === await dd.queryPermission(Jd) || "granted" === await dd.requestPermission(Jd)
        }(dd)) return dd;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, pd.n)(),
          types: [Wd]
        })
      } catch (Jd) {
        if (Zd(Jd)) return null;
        throw Jd
      }
    }
    async function Kd(dd, Jd) {
      const kd = await dd.createWritable();
      await kd.write(new Blob([Jd], {
        type: pd.f
      })), await kd.close()
    }

    function od(dd) {
      return (0, pd.j)((0, Nd.g)(dd))
    }
  },
  36618: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od
    });
    var pd = kd(22),
      Nd = kd(95),
      Wd = kd(33),
      Pd = kd(686),
      Zd = kd(3282),
      gd = kd(6534);
    const Cd = "shaderPackListingCheckedAt",
      Kd = 36e5;

    function od() {
      const {
        canUseShaderPacks: dd
      } = Nd.featureFlags.settings;
      var Jd, od;
      (0, Zd.g)(dd) && !(0, Zd.e)(dd) && (Jd = Wd.i.getItem(Cd), od = Date.now(), "number" !== typeof Jd || od < Jd || od - Jd >= Kd) && (0, Pd.c)((() => {
        (async function() {
          if ("landingPage" !== pd.d.get("gameState")) return;
          const dd = await (0, gd.g)();
          if (void 0 === (null === dd || void 0 === dd ? void 0 : dd.listing)) return;
          Wd.i.setItem(Cd, Date.now());
          const {
            followListingUpdates: Jd
          } = await Promise.all([kd.e(75), kd.e(132), kd.e(124)]).then((() => kd(41259)));
          await Jd(dd, dd.listing) || Wd.i.removeItem(Cd)
        })().catch((dd => {
          console.error("Failed to check the shader pack listing for an update", dd)
        }))
      }))
    }
  },
  36657: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd
    });
    var pd = kd(300),
      Nd = kd(22),
      Wd = kd(36660),
      Pd = kd(1670),
      Zd = kd(1975);

    function gd(dd, Jd) {
      var kd, gd, Cd;
      if (!Nd.d.get("isKeydownEnabled") || dd.repeat) return;
      const Kd = dd.code;
      "Escape" === dd.key ? (0, Pd.i)(dd) : null !== (kd = Zd.x.OpenSettings) && void 0 !== kd && kd.includes(Kd) ? (0, Pd.t)(dd, pd.s.SETTINGS) : null !== (gd = Zd.x.OpenCharacterCustomization) && void 0 !== gd && gd.includes(Kd) ? (0, Wd.e)() || (0, Pd.t)(dd, pd.s.CUSTOMISATION, Jd()) : null !== (Cd = Zd.x.ShowDebugOverlay) && void 0 !== Cd && Cd.includes(Kd) && Nd.d.set({
        showDebugOverlay: !Nd.d.get("showDebugOverlay")
      })
    }
  },
  36623: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Fd
    });
    var pd = kd(610),
      Nd = kd(1250),
      Wd = kd(149);
    const Pd = "cf-";

    function Zd(dd) {
      return `${Pd}${dd}`
    }

    function gd(dd) {
      return dd.startsWith(Zd("game-server-"))
    }

    function Cd(dd) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(dd)
    }
    var Kd = kd(1266),
      od = kd(1245),
      ld = kd(29),
      Qd = kd(1792),
      Ld = kd(1808),
      Od = kd(2830),
      ed = kd(1332),
      Rd = kd(1348),
      Id = kd(1520),
      Gd = kd(1220),
      vd = kd(36631),
      xd = kd(33),
      qd = kd(126),
      Bd = kd(1827);
    const sd = "gameServerRoute";
    async function ad(dd) {
      if (!dd.ok) {
        const Jd = await dd.text().catch((() => ""));
        return 403 === dd.status && "ipv6_unsupported" === Jd ? "ipv6Refused" : "other"
      }
      const Jd = await dd.json().catch((() => null));
      return "object" === typeof Jd && null !== Jd && Number.isFinite(Jd.version) ? "ours" : "other"
    }
    const Md = new class {
      constructor(dd) {
        this.deps = dd
      }
      hostFor(dd) {
        return this.deps.enabled && Cd(dd) && "cloudflare" === this.heldRoute() ? Zd(dd) : dd
      }
      async afterJoinFailed(dd, Jd) {
        if (!this.deps.enabled || void 0 === Jd) return !1;
        const kd = new URL(dd).hostname,
          pd = this.stored();
        if (gd(kd)) return this.deps.TQ("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === pd || void 0 === pd ? void 0 : pd.route) || pd.aliasFailedOnce || "ours" !== (await this.probeHost(kd)).answer ? this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }) : this.store({
          ...pd,
          aliasFailedOnce: !0
        }), !1;
        if (!Cd(kd) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: Nd,
          cfMs: Wd
        } = await this.check(kd);
        return "blocked" !== Nd ? (this.deps.TQ("game_server_route", Nd, Wd), !1) : (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), this.deps.TQ("game_server_route", "blocked", Wd), !0)
      }
      afterJoined(dd) {
        if (!this.deps.enabled) return;
        const Jd = new URL(dd).hostname,
          kd = gd(Jd);
        if (kd) this.deps.TQ("game_server_route", "cf_join", 0);
        else if (!Cd(Jd) || this.deps.random() >= .01) return;
        const pd = kd ? Jd.slice(Pd.length) : Jd;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(pd, "direct", "direct_failed"), await this.reportRtt(Zd(pd), "cf", "cf_failed")
        }))
      }
      async check(dd) {
        const Jd = this.probeHost(Zd(dd));
        if ("none" !== (await this.probeHost(dd)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: kd,
          ms: pd
        } = await Jd;
        return "ours" !== kd && "ipv6Refused" !== kd ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(dd)).answer ? {
          outcome: "direct_reachable",
          cfMs: pd
        } : {
          outcome: "ipv6Refused" === kd ? "blocked_ipv6" : "blocked",
          cfMs: pd
        }
      }
      async reportRtt(dd, Jd, kd) {
        const pd = "ours" === (await this.probeHost(dd)).answer ? await this.probeHost(dd) : null;
        "ours" === (null === pd || void 0 === pd ? void 0 : pd.answer) ? this.deps.TQ("game_server_rtt", Jd, pd.ms): this.deps.TQ("game_server_rtt", kd, 0)
      }
      probeHost(dd) {
        return this.deps.probe(`https://${dd}/version`, 8e3)
      }
      stored() {
        return function(dd) {
          if ("object" !== typeof dd || null === dd) return null;
          const {
            arm: Jd,
            route: kd,
            until: pd,
            aliasFailedOnce: Nd
          } = dd;
          return "holdout" === Jd || "cloudflare" !== kd && "direct" !== kd || "number" !== typeof pd ? null : !0 === Nd ? {
            route: kd,
            until: pd,
            aliasFailedOnce: Nd
          } : {
            route: kd,
            until: pd
          }
        }(this.deps.storage.getItem(sd))
      }
      heldRoute() {
        const dd = this.stored();
        return null !== dd && dd.until > this.deps.now() ? dd.route : null
      }
      store(dd) {
        this.deps.storage.setItem(sd, {
          ...dd,
          arm: "cloudflare"
        })
      }
    }({
      storage: xd.i,
      probe: async function(dd, Jd) {
        const kd = performance.now(),
          pd = await (0, Bd.h)(dd, {
            cache: "no-store"
          }, Jd, (async dd => {
            const Jd = Math.round(performance.now() - kd);
            return {
              answer: await ad(dd),
              ms: Jd
            }
          }));
        return null !== pd && void 0 !== pd ? pd : {
          answer: "none",
          ms: 0
        }
      },
      TQ: Qd.r,
      enabled: !(0, qd.e)(),
      now: Date.now,
      random: Math.random,
      delay: dd => new Promise((Jd => {
        setTimeout(Jd, dd)
      }))
    });

    function Fd(dd) {
      return async (Jd, kd, Pd, Zd, Cd) => {
        let od;
        if ((0, pd.I)(Pd)) {
          if (Cd.aborted) return Yd();
          const dd = await md(Jd, kd, Zd);
          if (Cd.aborted || Od.e.matchmakingEnded(dd.isError() ? null : performance.now()), dd.isError()) {
            const Jd = dd.asError();
            return console.log("Join room did not succeed, reason:", Jd.message), Jd.forward()
          }
          od = dd.getValue()
        } else {
          Od.e.skipPlayWait();
          const dd = bd(Pd.replace("https://", "").replace("http://", ""));
          if (dd.isError()) return dd.asError().forward();
          od = {
            endpoint: dd.getValue(),
            gameNameWithVariation: kd,
            lobbyName: Jd instanceof Nd.g ? Jd.getLobbyName() : Jd
          }
        }
        if (Cd.aborted) return Yd();
        console.log(`Connecting to ${od.gameNameWithVariation} in lobby ${od.lobbyName} on game server ${od.endpoint}`), ld.j.nO("matchmakeAndPlayStepCompleted", {
          step: Wd.n.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Qd.g)(), Ld.e.markGameLoadStart(), (0, Rd.r)({
          websocketUrl: od.endpoint,
          gameNameWithVariation: od.gameNameWithVariation,
          lobbyName: od.lobbyName
        }), ld.j.nO("loadingScreenState", "loadingPage:loadingGame");
        const Id = async () => {
          const dd = await async function(dd, Jd, kd, pd) {
            const Nd = await md(dd, Jd, kd);
            if (!Nd.isError() && !pd.aborted) {
              const {
                endpoint: dd,
                gameNameWithVariation: Jd,
                lobbyName: kd
              } = Nd.getValue();
              (0, Rd.r)({
                websocketUrl: dd,
                gameNameWithVariation: Jd,
                lobbyName: kd
              })
            }
            return Nd
          }(Jd, kd, Zd, Cd);
          return dd.isError() || (od = dd.getValue()), dd
        }, Gd = !(0, pd.I)(Pd), vd = () => dd({
          place: od,
          userContext: Zd,
          direct: Gd,
          rematch: Id
        }, Cd);
        let xd = await vd();
        const qd = xd.isError() && !0 === xd.asError().debugResult.rematch;
        if (xd.isError() && !Gd && !Cd.aborted && (qd || await Md.afterJoinFailed(od.endpoint, xd.asError().debugResult.gameServerUnreachable))) {
          if (Cd.aborted) return Yd();
          console.log("Matchmaking again");
          const dd = await Id();
          if (dd.isError()) return dd.asError().forward();
          if (Cd.aborted) return Yd();
          xd = await vd(), !xd.isError() || qd && !gd(new URL(od.endpoint).hostname) || await Md.afterJoinFailed(od.endpoint, xd.asError().debugResult.gameServerUnreachable)
        }
        return xd.isError() ? xd.asError().forward() : (Md.afterJoined(od.endpoint), (0, ed.F)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Kd.b.value({
          gameNameWithVariation: od.gameNameWithVariation,
          lobbyName: od.lobbyName,
          addLobbyToRecentlyPlayed: !(Jd instanceof Nd.g)
        }))
      }
    }

    function Yd() {
      return Kd.b.errorWithCode("Left the game while it loaded", Wd.n.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        CJ: !0
      })
    }
    async function md(dd, Jd, kd) {
      return (0, pd.I)(dd) || dd instanceof Nd.g || !(dd.length > od.O) ? await Id.d.matchmakePlayer(kd, dd, Jd, (0, vd.d)()).then((dd => {
        if (!1 === dd.succeeded) return Kd.b.errorWithCode(dd.failReason, Wd.n.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: Jd,
          lobbyName: kd,
          gameNameWithVariation: pd
        } = dd, Nd = bd(Md.hostFor(Jd));
        return Nd.isError() ? Nd.asError().forward() : Kd.b.value({
          endpoint: Nd.getValue(),
          gameNameWithVariation: pd,
          lobbyName: kd
        })
      })).catch((dd => (console.error("Bad response from the matchmaking server:", dd), Kd.b.errorWithCode(dd.toString(), Wd.n.REQUEST_TO_MATCHMAKING, {
        error: dd,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", dd), Kd.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", Wd.n.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function bd(dd) {
      const Jd = Gd.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(dd);
      return Jd.isError() ? Kd.b.errorWithCode(Jd.asError().message, Wd.n.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Kd.b.value(Jd.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, Rd.n)("/")
    }
  },
  9142: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Qd,
      e: () => ld
    });
    var pd = kd(22),
      Nd = kd(1726),
      Wd = kd(33),
      Pd = kd(1371),
      Zd = kd(3546),
      gd = kd(1492),
      Cd = kd(1404);
    const Kd = 2592e5,
      od = "notificationOptInLastPromptedAt";
    async function ld() {
      var dd;
      const Jd = await Qd();
      if (null === Jd) return;
      const kd = null !== (dd = Wd.i.getItem(od)) && void 0 !== dd ? dd : 0;
      if (Date.now() - kd < Kd) return;
      if ((0, Cd.d)()) return;
      const pd = await Pd.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Nd.e.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== pd && (Wd.i.setItem(od, Date.now()), (0, gd.reportAnalyticsClick)({
        id: !0 === pd ? "push.allow" : "push.deny",
        value: Nd.e.supports("notifications") ? "app" : "browser"
      }), !0 === pd && Jd().catch((dd => {
        console.error("Failed to ask for push notifications:", dd)
      })))
    }
    async function Qd() {
      return await Nd.e.ready, Nd.e.supports("notifications") ? pd.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Nd.e.request("notifications.requestPermission", {}).then((dd => {
          let {
            canAsk: Jd
          } = dd;
          pd.d.set({
            mobilePushNotificationsCanAsk: Jd
          })
        }), (dd => {
          console.error("The app couldn't ask for push notifications:", dd)
        }))
      }: null: await Zd.b.canAsk() ? () => Zd.b.requestPermission() : null
    }
  },
  36640: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld,
      g: () => Kd,
      k: () => Qd,
      n: () => od
    });
    var pd = kd(313),
      Nd = kd(638),
      Wd = kd(648),
      Pd = kd(33);
    const Zd = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      gd = "playSessionGameNameWithVariation",
      Cd = "wasMatchmakePlayer";

    function Kd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k;
      (0, Wd.i)(dd, Zd)
    }

    function od() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).setItem(Cd, !0)
    }

    function ld() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k;
      return (0, Wd.d)(dd, Zd)
    }

    function Qd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pd.k;
      const kd = (0, Wd.d)(Jd, Zd),
        Kd = function(dd) {
          const Jd = dd.getItem(gd);
          return "string" !== typeof Jd ? null : Jd
        }(Jd),
        od = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).getItem(Cd)
        }(Jd);
      let ld;
      return ld = null !== kd && null !== Kd && (0, Wd.g)(Jd, Zd) && function(dd, Jd, kd) {
          const Nd = (0, pd._b)(dd),
            Wd = (0, pd._b)(Jd),
            Pd = (0, pd.Vb)(dd),
            Zd = (0, pd.Vb)(Jd);
          return !(Nd !== Wd || !kd) || Nd === Wd && Pd === Zd
        }(Kd, dd, od) ? kd : (0, Nd.e)(), (0, Wd.j)(Jd, Zd, ld), Jd.setItem(gd, dd),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pd.k).removeItem(Cd)
        }(Jd), ld
    }
  },
  36631: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Id,
      g: () => Gd
    });
    var pd = kd(1013),
      Nd = kd(614),
      Wd = kd(313),
      Pd = kd(1016),
      Zd = kd(626),
      gd = kd(661),
      Cd = kd(4379),
      Kd = kd(95),
      od = kd(126),
      ld = kd(1753),
      Qd = kd(108),
      Ld = kd(36640),
      Od = kd(33),
      ed = kd(645),
      Rd = kd(36645);

    function Id() {
      var dd, Jd;
      return [...null !== (dd = navigator.languages) && void 0 !== dd ? dd : [null !== (Jd = navigator.language) && void 0 !== Jd ? Jd : "none"], "EN-gb"]
    }

    function Gd(dd, Jd, kd, Gd, vd) {
      const xd = (0, pd.i)(Jd) ? (0, pd.o)(Jd) : null,
        qd = {
          cookies: (0, ld.getAllCookiesForGameNameWithVariation)(Jd),
          isMobile: (0, Kd.isMobile)(),
          isUsingCustomGameTexturePack: null !== xd && vd(xd),
          generalCookies: {
            joinDiscord: !!Od.i.getItem("DiscordPressed"),
            newGo: Cd.b,
            ...dd.getMetricsCookies(),
            trafficCode: Gd,
            compliance: Kd.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Kd.getBrowserName)(),
            version: (0, Kd.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Kd.getPlatformType)(),
            deviceType: (0, Qd.e)()
          },
          isLoggedIn: dd.isLoggedIn(),
          lobbyName: kd,
          languages: Id(),
          version: Nd.c,
          siteUsed: od.t,
          subsiteUsed: od.A,
          playSessionId: (0, Ld.k)(Jd),
          visitSessionId: (0, ed.d)(),
          clientReason: Zd.l.reason,
          budgetBasis: (0, Rd.h)(),
          ...null !== gd.n && {
            diagClaim: gd.n.claimId
          }
        };
      return null !== xd && (0, Wd.Kc)(xd) ? (qd.lobbyName = (0, pd.g)(xd, (0, pd.l)(Jd), kd), {
        roomName: `classic_${Pd.d}`,
        joinOptions: qd
      }) : {
        roomName: Jd,
        joinOptions: qd
      }
    }
  },
  36754: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      for (let kd = 0; kd < dd.length; kd++)
        if (dd[kd].identifier === Jd) return dd[kd];
      return null
    }

    function Nd(dd, Jd) {
      return null !== pd(dd, Jd)
    }
    kd.d(Jd, {
      e: () => pd,
      g: () => Nd
    })
  },
  37068: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => nd,
      D: () => Ud,
      H: () => Xd,
      I: () => yd,
      d: () => gd,
      h: () => Yd,
      i: () => Zd,
      m: () => jd,
      p: () => Md,
      s: () => qd,
      u: () => Sd,
      w: () => bd,
      x: () => ad,
      y: () => fd
    });
    var pd = kd(33);
    const Nd = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Wd = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Pd = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Zd = Wd.filter((dd => "docsButton" !== dd)),
      gd = Pd.filter((dd => "aiHelperButton" !== dd)),
      Cd = "codeEditorTutorials",
      Kd = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      od = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let ld = null,
      Qd = null;
    const Ld = new Set,
      Od = new Set;
    let ed = null;
    const Rd = new Set,
      Id = new Set;

    function Gd() {
      Id.forEach((dd => {
        dd()
      }))
    }

    function vd() {
      if (!ld) {
        const dd = pd.i.getItem(Cd);
        ld = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof dd && null !== dd ? dd : {}
        }
      }
      return ld
    }

    function xd(dd) {
      const Jd = vd();
      Jd[dd] || (ld = {
        ...Jd,
        [dd]: !0
      }, pd.i.setItem(Cd, ld))
    }

    function qd(dd) {
      return "docsOverview" === dd ? Wd : "aiHelperOverview" === dd ? Pd : Qd ? Nd[Qd] : []
    }

    function Bd(dd) {
      return ("worldCodeButton" !== dd || !vd().worldCodeIntroShown) && !Rd.has(dd)
    }

    function sd(dd) {
      var Jd;
      return (null === (Jd = ed) || void 0 === Jd ? void 0 : Jd.name) === dd ? ed.stepsDone : Ld
    }

    function ad(dd, Jd) {
      if (! function(dd) {
          return ed ? ed.name === dd : "welcome" === dd
        }(dd) || !Bd(Jd) || sd(dd).has(Jd)) return !1;
      if (ed) return !0;
      const kd = Kd[Jd];
      return kd ? !vd()[kd] || Od.has(Jd) : !vd()[od[dd]]
    }

    function Md(dd) {
      var Jd;
      return null !== (Jd = qd(dd).find((Jd => ad(dd, Jd)))) && void 0 !== Jd ? Jd : null
    }

    function Fd(dd) {
      var Jd;
      xd(od[dd]), (null === (Jd = ed) || void 0 === Jd ? void 0 : Jd.name) === dd && (ed = null)
    }

    function Yd(dd) {
      const Jd = (ed ? [ed.name] : ["welcome", "docsOverview"]).find((Jd => Md(Jd) === dd));
      if (!Jd) return;
      sd(Jd).add(dd);
      const kd = Kd[dd];
      kd && (xd(kd), ed || Od.add(dd)), null === Md(Jd) && Fd(Jd), Gd()
    }

    function md(dd, Jd) {
      const kd = qd(dd),
        pd = sd(dd);
      for (let Nd = kd.indexOf(Jd) - 1; Nd >= 0; Nd--)
        if (pd.has(kd[Nd]) && Bd(kd[Nd])) return kd[Nd];
      return null
    }

    function bd(dd, Jd) {
      return null !== md(dd, Jd)
    }

    function Sd(dd, Jd) {
      const kd = md(dd, Jd);
      kd && (sd(dd).delete(kd), Gd())
    }

    function jd(dd) {
      Fd(dd), "welcome" === dd && qd("welcome").forEach((dd => {
        const Jd = Kd[dd];
        Jd && xd(Jd)
      })), Gd()
    }

    function Xd(dd) {
      ed = {
        name: dd,
        stepsDone: new Set
      }, Gd()
    }

    function fd() {
      (ed || 0 !== Ld.size || 0 !== Od.size) && (ed = null, Ld.clear(), Od.clear(), Gd())
    }

    function nd(dd, Jd) {
      const kd = Jd ? dd : Qd === dd ? null : Qd;
      kd !== Qd && (Qd = kd, Gd())
    }

    function Ud(dd, Jd) {
      Rd.has(dd) === Jd && (Jd ? Rd.delete(dd) : Rd.add(dd), Gd())
    }

    function yd(dd) {
      return Id.add(dd), () => {
        Id.delete(dd)
      }
    }
  },
  36453: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      f: () => Nd,
      j: () => Wd,
      l: () => Pd
    });
    const pd = 1024,
      Nd = 1024 * pd;

    function Wd(dd) {
      return 2 ** Math.floor(Math.log2(Math.max(1, dd / Nd)))
    }

    function Pd(dd) {
      return (dd / Nd).toFixed(1)
    }
  },
  36651: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      e: () => Zd,
      h: () => Pd,
      j: () => gd,
      l: () => Cd,
      m: () => Kd
    });
    var pd = kd(193);
    const Nd = 32 * kd(36453).f,
      Wd = 6144,
      Pd = 4608,
      Zd = 512;

    function gd(dd) {
      return Math.floor(Nd * dd / Wd)
    }

    function Cd(dd) {
      const Jd = dd - Math.floor(dd / 6);
      let kd = pd.g.maxChunkHorizAddDistance,
        Nd = pd.g.maxChunkVertAddDistance;
      if (Kd(kd + 1, Nd + 1) <= Jd) return null;
      for (; Kd(kd + 1, Nd + 1) > Jd && (kd > 0 || Nd > 0);) kd > Nd ? kd-- : Nd--;
      return {
        horizontal: kd,
        vertical: Nd
      }
    }

    function Kd(dd, Jd) {
      const kd = Math.max(dd, Jd);
      let pd = 0;
      for (let Nd = -kd; Nd <= kd; Nd++)
        for (let Wd = -kd; Wd <= kd; Wd++)
          for (let Pd = -kd; Pd <= kd; Pd++) od(dd, Jd, Nd, Wd, Pd) && pd++;
      return pd
    }

    function od(dd, Jd, kd, pd, Nd) {
      const Wd = kd * kd + Nd * Nd;
      return dd === Jd ? Wd + pd * pd <= dd * dd : dd > Jd ? Math.abs(pd) <= Jd && Wd + pd * pd <= dd * dd : Wd <= dd * dd && Wd + pd * pd <= Jd * Jd
    }
  },
  36645: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => qd,
      h: () => xd,
      i: () => vd
    });
    var pd = kd(193),
      Nd = kd(95),
      Wd = kd(2788),
      Pd = kd(4242),
      Zd = kd(632),
      gd = kd(36651);
    const Cd = 1048576,
      Kd = 1024 * Cd,
      od = 400 * Cd,
      ld = 147456,
      Qd = .5,
      Ld = 1.5 * Kd,
      Od = 768 * Cd;

    function ed(dd) {
      return od + dd * ld
    }

    function Rd(dd, Jd, kd) {
      var Nd, Pd;
      let {
        footprintBytes: Zd,
        basis: Cd,
        namesLimit: Rd
      } = function(dd) {
        const {
          os: Jd,
          deviceMemory: kd
        } = dd;
        if ("ios" === Jd) switch ((0, Wd.g)(dd)) {
          case "ipad_m":
            return {
              footprintBytes: ed(gd.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Od, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Ld, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Od, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof kd && Number.isFinite(kd) && kd > 0 ? {
          footprintBytes: kd * Kd * Qd,
          basis: `memory-${kd}`,
          namesLimit: !0
        } : "android" === Jd ? {
          footprintBytes: Od,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: ed(gd.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(dd);
      if (kd) {
        const dd = Math.min(Zd, ed(gd.d));
        Zd = od + Math.max(0, dd - od) / 2, Cd += "+killed", Rd = !0
      }
      null !== Jd && ed(Jd) < Zd && (Zd = ed(Jd), Cd += "+learned", Rd = !0);
      const Id = function(dd) {
          const Jd = Math.floor((dd - od) / ld);
          return Math.min(gd.d, Math.max(gd.e, Jd))
        }(Zd),
        Gd = (0, gd.l)(Id);
      return {
        footprintBytes: Zd,
        shedFootprintBytes: Rd ? Math.max(Zd, ed(Id)) : null,
        chunkCap: Id,
        maxHorizDistance: null !== (Nd = null === Gd || void 0 === Gd ? void 0 : Gd.horizontal) && void 0 !== Nd ? Nd : pd.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Pd = null === Gd || void 0 === Gd ? void 0 : Gd.vertical) && void 0 !== Pd ? Pd : pd.g.maxChunkVertAddDistance,
        basis: Cd
      }
    }
    let Id = null;

    function Gd() {
      return Rd({
        os: (0, Nd.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Wd.i)()
      }, (0, Pd.d)(), (0, Zd.F)("wasm").length > 0)
    }

    function vd() {
      return Id ??= Gd(), Id
    }

    function xd() {
      var dd;
      return (null !== (dd = Id) && void 0 !== dd ? dd : Gd()).basis
    }

    function qd(dd, Jd) {
      return dd.setChunkCap(Jd.chunkCap)
    }
  },
  36765: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd,
      i: () => ld,
      m: () => Rd,
      n: () => Cd
    });
    var pd = kd(22),
      Nd = kd(2337),
      Wd = kd(2345),
      Pd = kd(2352),
      Zd = kd(2405),
      gd = kd(29);

    function Cd(dd, Jd) {
      return (!(0, Pd.c)() || 0 === dd && 0 === Jd) && (0, Wd.A)(Nd.k.Joystick, 0, dd, Jd, 0)
    }
    const Kd = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function od(dd) {
      return dd.classList.contains("TouchKeyHit") && Qd() ? null : dd.firstElementChild
    }

    function ld(dd) {
      return dd.classList.contains("TouchKeyHit") && !dd.classList.contains("CanvasZone") ? {
        whole: !Qd(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Ld(od(dd))
      }
    }

    function Qd() {
      return document.documentElement.classList.contains(Zd.i)
    }

    function Ld(dd) {
      return !(dd instanceof HTMLElement) || dd.offsetWidth <= 0 || dd.offsetHeight <= 0 ? null : {
        width: dd.offsetWidth,
        height: dd.offsetHeight
      }
    }

    function Od(dd, Jd) {
      const kd = dd => Math.min(65535, Math.round(4 * dd));
      return (kd(dd) | kd(Jd) << 16) >>> 0
    }

    function ed(dd) {
      return {
        x: dd.left + dd.width / 2,
        y: dd.top + dd.height / 2,
        radius: Math.min(dd.width, dd.height) / 2
      }
    }
    const Rd = new class {
      constructor(dd) {
        this.write = dd, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Jd ? this.elements.set(dd, {
          element: Jd,
          hidden: kd
        }) : this.elements.delete(dd), this.measureOne(dd)
      }
      measure() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = dd.left, this.canvasTop = dd.top;
        for (const Jd of this.elements.keys()) this.measureOne(Jd)
      }
      hitZone(dd, Jd) {
        let kd = null,
          pd = 1;
        for (const Nd of this.elements.keys()) {
          const Wd = this.shown(Nd);
          if (!Wd) continue;
          const {
            rect: Pd,
            element: Zd
          } = Wd, gd = ed(Pd), Cd = Math.max(0, Pd.width / 2 - gd.radius), Kd = Math.max(0, Pd.height / 2 - gd.radius), ld = Math.max(0, Math.abs(dd - gd.x) - Cd), Qd = Math.max(0, Math.abs(Jd - gd.y) - Kd), Od = Zd.firstElementChild;
          let Rd = Math.hypot(ld, Qd) / gd.radius;
          const Id = Ld(od(Zd));
          Id && (Rd = Math.min(Rd, Math.max(2 * Math.abs(dd - gd.x) / Id.width, 2 * Math.abs(Jd - gd.y) / Id.height))), Rd < pd && (kd = {
            code: Nd,
            element: Zd,
            key: Od,
            ...gd
          }, pd = Rd)
        }
        return kd
      }
      measureOne(dd) {
        const Jd = this.shown(dd);
        if (!Jd) return void this.write(Nd.k.TouchZone, dd, 0, 0, 0);
        const {
          rect: kd,
          element: pd
        } = Jd, Wd = ed(kd);
        this.write(Nd.k.TouchZone, dd, Wd.x - this.canvasLeft, Wd.y - this.canvasTop, Od(kd.width, kd.height));
        const Pd = Ld(od(pd));
        this.write(Nd.k.TouchZone, 256 | dd, 0, 0, Pd ? Od(Pd.width, Pd.height) : 0)
      }
      shown(dd) {
        const Jd = this.elements.get(dd),
          kd = pd.d.get("worldPanelHud");
        if (!Jd || Jd.hidden || "none" === kd) return null;
        const Nd = Jd.element.getBoundingClientRect();
        return Nd.width <= 0 || Nd.height <= 0 ? null : {
          rect: Nd,
          element: Jd.element
        }
      }
    }(Wd.A);
    (0, gd.n)(Zd.e, (() => {
      Rd.measure()
    }))
  },
  37023: (dd, Jd, kd) => {
    function pd(dd) {
      return "fetch" === dd || "timeout" === dd || "integrity" === dd ? "download" : "browser"
    }
    kd.d(Jd, {
      d: () => Nd,
      f: () => Pd,
      g: () => gd,
      i: () => Zd,
      k: () => pd,
      m: () => Wd
    });
    const Nd = "https://discord.gg/playbloxd";

    function Wd(dd) {
      return "download" === dd ? {
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

    function Pd(dd, Jd) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Jd ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: dd.code
        },
        discordLink: Jd,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Zd() {
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

    function gd(dd, Jd, kd) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: kd ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: dd.reason
        },
        discordLink: null === dd.name,
        confirm: Jd ? "general:reconnect" : dd.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37072: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return null === dd || null === Jd ? dd === Jd : dd[0] === Jd[0] && dd[1] === Jd[1] && dd[2] === Jd[2]
    }

    function Nd(dd) {
      return [dd[0] + .5, dd[1] + .5, dd[2] + .5]
    }
    kd.d(Jd, {
      e: () => Nd,
      h: () => pd
    })
  },
  37030: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      g: () => Zd
    });
    const pd = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Nd = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Wd = {
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
      Pd = {
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
      Zd = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: pd.files,
          dependencies: pd.dependencies,
          bundledSource: pd.bundledSource,
          types: pd.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Nd.files,
          dependencies: Nd.dependencies,
          bundledSource: Nd.bundledSource,
          types: Nd.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Wd.files,
          dependencies: Wd.dependencies,
          bundledSource: Wd.bundledSource,
          types: Wd.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Pd.files,
          dependencies: Pd.dependencies,
          bundledSource: Pd.bundledSource,
          types: Pd.types
        }
      };

    function gd(dd) {
      const Jd = [],
        kd = new Set,
        pd = dd => {
          if (kd.has(dd)) return;
          const Nd = Zd[dd];
          if (Nd) {
            kd.add(dd);
            for (const dd of Nd.dependencies) pd(dd);
            Jd.push(dd)
          }
        };
      for (const Nd of dd) pd(Nd);
      return Jd
    }
  },
  37035: (dd, Jd, kd) => {
    kd.d(Jd, {
      A: () => Qd,
      D: () => ld,
      e: () => gd,
      h: () => Zd,
      l: () => Pd,
      o: () => Wd,
      q: () => Cd,
      s: () => Kd,
      w: () => Ld
    });
    var pd = kd(1260);
    const Nd = ["quickjs", "ses"];

    function Wd(dd) {
      return Nd.includes(dd)
    }

    function Pd(dd) {
      return dd === pd.h || dd === pd.l
    }

    function Zd(dd, Jd) {
      return dd === pd.h && Jd === pd.l || dd === pd.l && Jd === pd.h
    }

    function gd(dd) {
      const Jd = pd.l in dd,
        kd = pd.h in dd;
      return Jd && kd ? null : Jd ? pd.l : kd ? pd.h : null
    }

    function Cd(dd, Jd, kd) {
      const pd = `${Jd}/`;
      return dd.filter((dd => dd.startsWith(pd))).map((dd => [dd, `${kd}/${dd.slice(pd.length)}`]))
    }

    function Kd(dd, Jd) {
      let kd = 0;
      for (const [pd, Nd] of Object.entries(dd)) pd !== Jd && (kd += Nd.length);
      return kd
    }
    const od = "@plugins/";

    function ld(dd) {
      return `${od}${dd}`
    }

    function Qd(dd, Jd) {
      return `/node_modules/@plugins/${dd}/${Jd}`
    }

    function Ld(dd) {
      if (!dd.startsWith(od)) return null;
      const Jd = dd.slice(od.length);
      return function(dd) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(dd)
      }(Jd) ? Jd : null
    }
  },
  37048: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      g: () => Nd,
      h: () => Pd,
      k: () => gd,
      m: () => Wd
    });
    var pd = kd(37041);
    const Nd = 5,
      Wd = "[SCHEMATIC]",
      Pd = 1024e4;

    function Zd(dd) {
      return dd.endsWith(".bloxdschem") && (0, pd.p)(dd.slice(0, -11) + ".ts") && dd.length <= 64
    }

    function gd(dd) {
      return Object.fromEntries(Object.keys(dd).map((dd => [dd, Wd])))
    }
  },
  37041: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      d: () => Wd,
      e: () => ld,
      f: () => Zd,
      j: () => gd,
      n: () => Cd,
      p: () => od,
      s: () => Kd,
      v: () => Pd
    });
    var pd = kd(1260);
    let Nd = function(dd) {
        return dd[dd.Join = 0] = "Join", dd[dd.Leave = 1] = "Leave", dd[dd.Push = 2] = "Push", dd[dd.Cursor = 3] = "Cursor", dd[dd.Submit = 4] = "Submit", dd[dd.ReloadAsVariation = 5] = "ReloadAsVariation", dd[dd.CreateFile = 6] = "CreateFile", dd[dd.RenameFile = 7] = "RenameFile", dd[dd.DeleteFile = 8] = "DeleteFile", dd[dd.SetEngine = 9] = "SetEngine", dd[dd.RenameFolder = 10] = "RenameFolder", dd
      }({}),
      Wd = function(dd) {
        return dd[dd.Joined = 0] = "Joined", dd[dd.Updates = 1] = "Updates", dd[dd.Presence = 2] = "Presence", dd[dd.RemoteCursor = 3] = "RemoteCursor", dd[dd.ForceClose = 4] = "ForceClose", dd[dd.LobbyFilesChanged = 5] = "LobbyFilesChanged", dd[dd.EngineSettings = 6] = "EngineSettings", dd
      }({});

    function Pd(dd) {
      return "lobby" === dd.kind ? `lobby:${dd.path}` : `codeBlock:${dd.pos[0]},${dd.pos[1]},${dd.pos[2]}`
    }

    function Zd(dd) {
      if ("lobby" === dd) return {
        kind: "lobby",
        path: pd.h
      };
      if (dd.startsWith("lobby:")) {
        const Jd = dd.slice(6);
        return od(Jd) ? {
          kind: "lobby",
          path: Jd
        } : null
      }
      const Jd = dd.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Jd ? {
        kind: "codeBlock",
        pos: [parseInt(Jd[1]), parseInt(Jd[2]), parseInt(Jd[3])]
      } : null
    }

    function gd(dd) {
      return dd.endsWith(".d.ts")
    }

    function Cd(dd) {
      return dd.endsWith(".ts") && !gd(dd)
    }
    const Kd = 64;

    function od(dd) {
      if (!dd || dd !== dd.trim()) return !1;
      if (dd.length > Kd) return !1;
      if (dd.startsWith("/") || dd.includes("\\") || dd.includes("\0")) return !1;
      if (!gd(dd) && !Cd(dd) && ! function(dd) {
          return dd.endsWith(".js") && !dd.endsWith(".min.js") && !dd.endsWith(".bundle.js")
        }(dd)) return !1;
      const Jd = dd.split("/");
      for (const kd of Jd)
        if ("" === kd || "." === kd || ".." === kd) return !1;
      return !0
    }
    const ld = 14e3
  },
  4733: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      f: () => pd,
      i: () => Wd,
      k: () => gd,
      m: () => Pd
    });
    const pd = ["sine", "triangle", "square", "sawtooth"],
      Nd = 55,
      Wd = {
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

    function Pd(dd) {
      return "string" !== typeof dd ? dd : Object.hasOwn(Wd, dd) ? Wd[dd] : null
    }

    function Zd(dd, Jd, kd) {
      return Math.min(kd, Math.max(Jd, dd))
    }

    function gd(dd) {
      const Jd = Zd(dd.durationMs, 10, 500),
        kd = Zd(dd.attackMs, 0, Jd),
        {
          intonation: Nd
        } = dd;
      return {
        waveform: pd.includes(dd.waveform) ? dd.waveform : "sine",
        pitchHz: Zd(dd.pitchHz, 20, 4e3),
        glideSemitones: Zd(dd.glideSemitones, -24, 24),
        durationMs: Jd,
        attackMs: kd,
        releaseMs: Zd(dd.releaseMs, 0, Jd - kd),
        lowpassHz: null === dd.lowpassHz ? null : Zd(dd.lowpassHz, 20, 2e4),
        volume: Zd(dd.volume, 0, 2),
        intonation: {
          variationSemitones: Zd(Nd.variationSemitones, 0, 6),
          declineSemitones: Zd(Nd.declineSemitones, 0, 12),
          questionRiseSemitones: Zd(Nd.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Zd(Nd.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Zd(dd.syllableMs, 25, 200)
      }
    }
  },
  10077: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18427: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20493: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20502: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20506: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20510: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20518: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);