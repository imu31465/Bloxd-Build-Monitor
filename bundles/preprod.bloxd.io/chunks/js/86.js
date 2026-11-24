export const id = 86;
export const ids = [86];
export const modules = {
  36728: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => hp,
      g: () => fp
    });
    var Op = cp(62),
      op = cp(1956),
      Ip = cp(36730),
      Sp = cp.n(Ip),
      xp = cp(4635),
      Lp = cp(1929),
      Yp = cp(1476),
      Dp = cp(104),
      Ap = cp(116),
      Pp = cp(337),
      Wp = cp(1049),
      yp = cp.n(Wp),
      Up = cp(25),
      wp = cp(1060),
      vp = cp(1650),
      tp = cp(1765),
      Hp = cp(1698),
      dp = cp(2036),
      ep = cp(1432),
      jp = cp(2106),
      kp = cp(1419),
      mp = cp(3722),
      Rp = cp(36739),
      qp = cp(36764),
      Mp = cp(1502),
      Cp = cp(2499),
      Ep = cp(1201),
      Xp = cp(36769);
    var lp = cp(34375),
      Qp = cp(1302);
    var Jp = cp(1112);
    const Bp = cp(36772),
      Np = ["enter", "t", "/"];
    let Tp = !1;

    function fp() {
      return Tp || (0, tp.isTextEntry)(document.activeElement)
    }

    function bp() {
      var pp, ip;
      (0, jp.b)();
      const cp = null !== (pp = null === (ip = (0, ep.f)()) || void 0 === ip ? void 0 : ip.getBoundButton("keyboardChannel")) && void 0 !== pp ? pp : null;
      return cp ? (0, Jp.jsx)(dp.e, {
        className: "ChatInputChannelGlyph",
        glyph: cp
      }) : null
    }

    function hp() {
      const {
        t: pp
      } = (0, Ep.H)(), {
        isTouchScreen: ip
      } = (0, Up.o)(["isTouchScreen"]), cp = (0, kp.r)(), [Ip, Wp] = (0, Op.useState)(!1), dp = (0, Op.useRef)(Ip), ep = (0, Op.useRef)(null), {
        messages: jp,
        reportedPlayers: fp,
        channel: hp
      } = (0, mp.m)(), np = (0, Op.useRef)(0), Fp = (0, Op.useRef)(""), gp = (0, Op.useRef)(null);
      var Gp;
      Gp = gp, (0, Op.useEffect)((() => {
        if (!(0, Dp.isIOS)()) return;
        const pp = Gp.current;
        let ip = null;
        const cp = cp => {
            const Op = cp.changedTouches[0];
            ip = "none" === getComputedStyle(pp).pointerEvents ? {
              id: Op.identifier,
              y: Op.clientY
            } : null
          },
          Op = cp => {
            const Op = ip,
              op = Op && (0, Xp.b)(cp.changedTouches, Op.id);
            op && (cp.preventDefault(), pp.scrollBy({
              top: Op.y - op.clientY,
              behavior: "instant"
            }), Op.y = op.clientY)
          };
        return pp.addEventListener("touchstart", cp, {
          passive: !0
        }), pp.addEventListener("touchmove", Op, {
          passive: !1
        }), () => {
          pp.removeEventListener("touchstart", cp), pp.removeEventListener("touchmove", Op)
        }
      }), [Gp]);
      const [rp, Zp] = (0, Op.useState)(!1), [zp, sp] = (0, Op.useState)(!1), Kp = (0, Op.useRef)(rp), Vp = (0, Op.useRef)(null), ii = (0, Op.useRef)(!1), ci = (0, Op.useRef)(null), Oi = (0, Op.useRef)(null), oi = (0, Op.useRef)(null), Ii = (0, Op.useRef)(Yi);
      Ii.current = Yi;
      const Si = (0, Cp.n)();

      function xi() {
        dp.current = !1, Wp(!1), Oi.current.blur()
      }

      function Li(pp) {
        Kp.current = pp, Zp(pp)
      }

      function Yi() {
        const pp = Oi.current.value;
        Oi.current.value = "", Di(pp)
      }

      function Di(pp) {
        (0, mp.i)(pp), np.current = 0, Li(!1)
      }

      function Ai(pp, ip) {
        0 === np.current && (Fp.current = Oi.current.value);
        const cp = (0, mp.h)(np.current + pp, ip);
        np.current = cp.stepsBack, Oi.current.value = 0 === cp.stepsBack ? Fp.current : cp.text, setTimeout((() => {
          Oi.current && Oi.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Pi() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        gp.current && (!pp && Kp.current || (gp.current.scrollTop = 1e5))
      }
      return (0, xp.e)(!0, Ip, "ChatComponent"), (0, Op.useEffect)((() => (Tp = Ip, () => {
          Tp = !1
        })), [Ip]), (0, Yp.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, vp.n)() && Wp(!1)
        })), (0, Op.useEffect)((() => {
          Oi.current.addEventListener("blur", (pp => {
            if (null === Oi.current) return;
            Array.from(document.querySelectorAll(":hover")).some((pp => pp.classList.contains("ChatInputChannel") || pp.classList.contains("ChatMsgSelectWrapper"))) || ((0, Dp.isMobile)() && dp.current && "" !== Oi.current.value && Ii.current(), Wp(!1))
          }));
          const pp = pp => {
            ep.current.contains(pp.target) || (0, Hp.i)(pp.target) || Wp(!1)
          };
          document.addEventListener("touchstart", pp, {
            capture: !0
          });
          const ip = pp => {
            (0, qp.e)(pp.target) && (dp.current = !1, Wp(!1))
          };
          document.addEventListener("mousedown", ip, {
            capture: !0
          });
          const cp = () => {
              clearTimeout(Vp.current), Li(!0)
            },
            Op = () => {
              clearTimeout(Vp.current), Vp.current = setTimeout((() => {
                Li(!1), Pi()
              }), 4e3)
            },
            Ip = () => {
              document.pointerLockElement ? (Wp(!1), sp(!0), ii.current = !1, Li(!1), Pi()) : sp(!1)
            };
          gp.current.addEventListener("pointermove", (pp => {
            "touch" === pp.pointerType || ii.current || document.pointerLockElement || (ii.current = !0, clearTimeout(Vp.current))
          })), gp.current.addEventListener("pointerleave", (pp => {
            "touch" !== pp.pointerType && (ii.current = !1, Kp.current && Op())
          })), gp.current.addEventListener("pointerdown", (pp => {
            "touch" === pp.pointerType || document.pointerLockElement || (ii.current = !0, cp())
          })), gp.current.addEventListener("wheel", (pp => {
            document.pointerLockElement || pp.deltaY >= 0 && Math.abs(gp.current.scrollTop) < 1 || (cp(), ii.current || (Vp.current = setTimeout((() => {
              Li(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), gp.current.addEventListener("touchstart", cp), gp.current.addEventListener("touchend", Op), gp.current.addEventListener("touchcancel", Op), document.addEventListener("pointerlockchange", Ip);
          const xp = pp => {
            if (Si.shown && (dp.current || ! function(pp) {
                if ((0, tp.isTypingInInput)()) return !0;
                const ip = document.activeElement;
                return (ip instanceof HTMLButtonElement || "button" === (null === ip || void 0 === ip ? void 0 : ip.getAttribute("role"))) && ["Enter", " "].includes(pp.key)
              }(pp)) && "codeEditor" !== Up.c.get("openInGameMenuName") && "lobbyCodeEditor" !== Up.c.get("openInGameMenuName") && !op.gameBridge.latest("connectedGame").replay)
              if (dp.current || !(0, vp.n)()) {
                if (dp.current) {
                  if ("ArrowUp" === pp.code || "ArrowDown" === pp.code) return Ai("ArrowUp" === pp.code ? 1 : -1, !1), void pp.stopPropagation();
                  if ("Tab" === pp.code) return mp.b.selectNextChannel(), pp.stopPropagation(), void pp.preventDefault();
                  if (pp.ctrlKey && ap.includes(Bp[pp.keyCode])) return pp.preventDefault(), void pp.stopPropagation()
                }
                if ([...Np, "esc"].includes(Sp()(pp)))
                  if ("esc" !== Sp()(pp)) {
                    if (!dp.current || "/" !== Sp()(pp)) {
                      if ("t" === Sp()(pp)) {
                        if (dp.current) return void pp.stopPropagation();
                        pp.preventDefault()
                      }
                      dp.current && "" !== Oi.current.value && Ii.current(), pp.repeat || (dp.current || "/" === Sp()(pp) && (Oi.current.value = "/", pp.preventDefault()), Wp(!dp.current))
                    }
                  } else dp.current && (Wp(!1), pp.stopPropagation());
                else dp.current && pp.stopPropagation()
              } else Np.includes(Sp()(pp)) && (pp.preventDefault(), pp.stopPropagation(), (0, vp.b)(pp))
          };
          document.addEventListener("keydown", xp, {
            capture: !0
          });
          const Lp = gp.current;
          let Yp = !1;
          const Ap = new ResizeObserver((() => {
              Yp && (Yp = !1, Pi())
            })),
            Pp = () => {
              Yp = !0, Ap.unobserve(Lp), Ap.observe(Lp)
            };
          ci.current = Pp;
          const yp = new MutationObserver(Pp);
          return yp.observe(Lp, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", xp, {
              capture: !0
            }), document.removeEventListener("touchstart", pp, {
              capture: !0
            }), document.removeEventListener("mousedown", ip, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Ip), ci.current = null, yp.disconnect(), Ap.disconnect(), clearTimeout(Vp.current)
          }
        }), []), (0, Hp.l)(Oi, {
          open: () => {
            Wp(!0)
          },
          close: () => {
            xi()
          },
          submit: () => {
            "" !== Oi.current.value && Yi(), xi()
          },
          stepHistory: () => {
            Ai(1, !0)
          },
          sendLine: pp => {
            Di(pp), xi()
          },
          selectNextChannel: () => {
            mp.b.selectNextChannel()
          }
        }), (0, Op.useEffect)((() => {
          var pp;
          (dp.current = Ip, Oi.current) && (Ip ? (np.current = 0, Oi.current.focus()) : (Oi.current.blur(), null === (pp = ci.current) || void 0 === pp || pp.call(ci)))
        }), [Ip]),
        function(pp, ip) {
          (0, Op.useLayoutEffect)((() => {
            if (!ip) return;
            lp.c.hold();
            const cp = pp.current.closest(".InGameHeaderAndChat"),
              Op = (0, Qp.b)((pp => {
                let {
                  top: ip,
                  height: Op
                } = pp;
                cp.style.setProperty("--keyboard-top", `${ip+Op}px`)
              }));
            return () => {
              Op(), cp.style.removeProperty("--keyboard-top"), lp.c.release()
            }
          }), [pp, ip])
        }(ep, Ip && ip), (0, Jp.jsx)(Jp.Fragment, {
          children: (0, Jp.jsxs)("div", {
            ref: ep,
            className: yp()("Chat", {
              Chatting: Ip
            }),
            "data-camera-keeper": Ip ? "" : void 0,
            children: [(0, Jp.jsx)("div", {
              ref: gp,
              className: yp()("ChatMessages", {
                HideScrollbar: !rp && !Ip,
                NoScrolling: !(0, Dp.isMobile)() && zp
              }),
              children: (0, Jp.jsx)(Rp.c, {
                messages: jp,
                reportedPlayers: fp
              })
            }), ip && !Ip && (0, Jp.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": pp("general:chat"),
              ...(0, Mp.h)((() => {
                Wp(!0), oi.current.style.display = "flex", (0, Dp.isIOS)() && Oi.current.focus()
              }), "pointerup"),
              children: (0, Jp.jsx)(wp.d, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, Jp.jsxs)("div", {
              ref: oi,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Ip ? "flex" : "none")
              },
              children: [hp && (0, Jp.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: hp.elementBgColor
                },
                onClick: pp => {
                  mp.b.selectNextChannel(), Oi.current.focus()
                },
                children: (0, Jp.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, Jp.jsx)(Lp.e, {
                    text: hp.elementContent
                  })
                })
              }), hp && cp && (0, Jp.jsx)(bp, {}), (0, Jp.jsx)("input", {
                className: "ChatInput",
                maxLength: Pp.Rc,
                ref: Oi,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": pp("general:chat"),
                placeholder: hp ? `${hp.channelName} Chat${"touchOnly"===(0,Ap.c)()||cp?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const ap = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36739: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Rp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(3725),
      xp = cp(34),
      Lp = cp(2437),
      Yp = cp(3678),
      Dp = cp(2057),
      Ap = cp(25),
      Pp = cp(1929),
      Wp = cp(36743),
      yp = cp(2210),
      Up = cp(36751),
      wp = cp(2706),
      vp = cp(2682),
      tp = cp(2674),
      Hp = cp(3689),
      dp = cp(36758),
      ep = cp(3211),
      jp = cp(2004),
      kp = cp(1112);

    function mp(pp) {
      for (let cp = pp.length - 1; cp >= 0; cp--) {
        const Op = "string" === typeof(ip = pp[cp]) ? ip : "str" in ip && "string" === typeof ip.str ? ip.str : "";
        if ("" !== Op.trim()) return Op
      }
      var ip;
      return ""
    }

    function Rp(pp) {
      let {
        messages: ip,
        reportedPlayers: cp
      } = pp;
      return (0, kp.jsx)(kp.Fragment, {
        children: ip.map((pp => (0, kp.jsx)(qp, {
          message: pp,
          reportedPlayers: cp
        }, pp.clientChatMsgId)))
      })
    }
    const qp = (0, Op.memo)((function(pp) {
      var ip;
      let {
        message: cp,
        reportedPlayers: op
      } = pp;
      const Rp = (0, Op.useRef)(null),
        [qp] = (0, Op.useState)(ep.f),
        {
          author: Mp
        } = cp,
        Cp = null === Mp || void 0 === Mp ? void 0 : Mp.id,
        Ep = null !== (ip = null === Mp || void 0 === Mp ? void 0 : Mp.name) && void 0 !== ip ? ip : void 0,
        Xp = (0, Dp.d)(Ep),
        lp = null !== Mp && void 0 !== Mp && Mp.profileEffect ? yp.f[Mp.profileEffect] : void 0,
        Qp = null !== Mp && !Mp.local,
        Jp = null === Mp && null !== cp.serverChatMsgId,
        Bp = (0, jp.f)("hiddenPlayerNames", (pp => (0, Up.h)(Qp, Ep, pp))),
        Np = null === cp.serverChatMsgId || null === Mp ? null : {
          text: mp(cp.content),
          serverChatMsgId: cp.serverChatMsgId,
          authorId: Mp.id
        },
        Tp = Jp || null !== Np && !op.includes(Cp),
        fp = (0, Yp.j)(Qp && null !== Ep && void 0 !== Ep ? Ep : null),
        bp = (0, tp.i)(Rp);
      (0, Op.useEffect)((() => () => {
        tp.e.closeIfOwner(Rp)
      }), []);
      const hp = () => {
          Jp ? xp.m.GA("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            VD: (0, Sp.b)(cp.content),
            serverChatMsgId: cp.serverChatMsgId
          }) : null !== Np ? xp.m.GA("OpenReportMenu", {
            playerEId: Cp,
            playerName: Ep,
            VD: Np.text,
            serverChatMsgId: Np.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        ap = void 0 === Ep ? [] : (0, Hp.b)(fp, Ep, Np);
      return (0, kp.jsxs)("div", {
        ref: Rp,
        className: Ip()("MessageWrapper", {
          ChatMsgSelectWrapper: Cp,
          Still: qp
        }),
        onContextMenu: Bp ? pp => {
          (0, wp.f)(Rp, pp, {
            ...(0, Up.e)(Cp, Ep),
            showLocation: !1,
            status: null,
            extraActions: Tp ? [{
              icon: "flag",
              text: "Report",
              onClick: hp
            }] : [],
            moderationActions: (0, dp.b)(Ep),
            friendRequestSource: "chat"
          }, Ap.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Bp ? pp => {
          (0, vp.d)(pp, (() => (0, Up.e)(Cp, Ep).playerSocialPreview))
        } : void 0,
        children: [lp && (0, kp.jsx)(lp, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Qp || Jp) && !bp && (0, kp.jsx)(Wp.c, {
          className: "ChatFloatingActions",
          triggerElementRef: Rp,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: hp,
            show: Tp
          }, ...ap, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: pp => {
              (0, Lp.l)(Ep, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: Bp && "blocked" !== fp
          }]
        }), (0, kp.jsx)(Pp.e, {
          text: cp.content,
          friendBadgeFor: Xp ? Ep : void 0
        }, cp.clientChatMsgId)]
      }, cp.clientChatMsgId)
    }))
  },
  36791: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      h: () => yp,
      i: () => Pp,
      k: () => Ap
    });
    var Op = cp(34430),
      op = cp(36799),
      Ip = cp(36804),
      Sp = cp(8852),
      xp = cp(1476),
      Lp = cp(62),
      Yp = cp(82),
      Dp = cp(1112);

    function Ap() {
      var pp;
      return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
        children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
      })
    }

    function Pp(pp) {
      var ip;
      let {
        show: cp
      } = pp;
      (0, xp.i)(op.d, (0, op.s)());
      const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
      return (0, Lp.useEffect)((() => {
        var pp;
        cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
      }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
        showing: cp,
        globallyUniqueKey: "clientGameMenu",
        children: null === Yp || void 0 === Yp ? void 0 : Yp.content
      })
    }

    function Wp(pp) {
      let {
        placement: ip = "bottom"
      } = pp;
      return (0, Dp.jsx)("div", {
        id: `clientGameHud-${ip}`,
        style: {
          display: "contents"
        }
      })
    }

    function yp(pp) {
      let {
        children: ip,
        placement: cp = "bottom"
      } = pp;
      const [Op, op] = (0, Lp.useState)(null);
      return (0, Lp.useEffect)((() => {
        op(document.getElementById(`clientGameHud-${cp}`))
      }), [cp]), Op ? (0, Yp.createPortal)(ip, Op) : null
    }
  },
  37092: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap,
      g: () => Dp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1480),
      xp = cp(1112);
    const Lp = 200,
      Yp = 160;

    function Dp() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Ap(pp) {
      let {
        side: ip,
        defaultSize: cp,
        covers: op,
        onClose: Dp,
        children: Ap
      } = pp;
      const Pp = (0, Op.useRef)(null),
        [Wp, yp] = (0, Op.useState)(null),
        [Up, wp] = (0, Op.useState)(cp);
      Up !== cp && (wp(cp), yp(null));
      const vp = (0, Op.useRef)(null),
        tp = "top" === ip,
        Hp = pp => tp ? pp.clientY : pp.clientX,
        dp = () => {
          vp.current = null
        };
      return (0, xp.jsxs)("div", {
        ref: Pp,
        className: Ip()("ResizableSidePanel", ip && `ResizableSidePanel-${ip}`, {
          Covers: "always" === op,
          CoversWhenNarrow: "narrow" === op,
          Dragged: null !== Wp
        }),
        style: {
          [tp ? "height" : "width"]: null !== Wp && void 0 !== Wp ? Wp : cp
        },
        children: [Ap, ip && (0, xp.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": tp ? "horizontal" : "vertical",
          onPointerDown: pp => {
            if (0 !== pp.button) return;
            pp.preventDefault();
            const ip = Pp.current,
              cp = Array.from(ip.parentElement.children).reduce(((pp, cp) => cp !== ip && "0" !== getComputedStyle(cp).flexGrow ? pp + (pp => tp ? pp.clientHeight : pp.clientWidth)(cp) : pp), 0),
              Op = tp ? ip.offsetHeight : ip.offsetWidth,
              op = Math.min(Lp, Op),
              Ip = Math.max(op, Op + Math.max(0, cp - Yp));
            vp.current = {
              start: Hp(pp),
              startSize: Op,
              minSize: op,
              maxSize: Ip
            }, pp.currentTarget.setPointerCapture(pp.pointerId)
          },
          onPointerMove: pp => {
            const cp = vp.current;
            if (!cp) return;
            const Op = "right" === ip ? cp.start - pp.clientX : Hp(pp) - cp.start;
            yp(Math.min(cp.maxSize, Math.max(cp.minSize, cp.startSize + Op)))
          },
          onPointerUp: dp,
          onPointerCancel: dp,
          onLostPointerCapture: dp
        }), Dp && (0, xp.jsx)(Sp.l, {
          className: "ResizableSidePanelClose",
          onClick: Dp
        })]
      })
    }
  },
  37124: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => op,
      C: () => kp,
      d: () => Hp,
      g: () => wp,
      h: () => yp,
      k: () => Wp,
      l: () => tp,
      o: () => Rp,
      s: () => dp,
      u: () => jp,
      v: () => ep,
      z: () => mp
    });
    var Op = cp(62);
    const op = 5e3,
      Ip = 500,
      Sp = 3e3;
    let xp = null,
      Lp = null,
      Yp = null;
    const Dp = new Set;

    function Ap(pp) {
      xp = pp;
      for (const ip of Dp) ip()
    }

    function Pp() {
      if (!xp || void 0 !== xp.endedAt) return;
      null !== Lp && (clearTimeout(Lp), Lp = null), Ap({
        ...xp,
        endedAt: Date.now()
      });
      const pp = Yp;
      Yp = null, null === pp || void 0 === pp || pp()
    }

    function Wp(pp, ip) {
      let {
        submit: cp,
        reopen: Op
      } = ip;
      null !== Lp && clearTimeout(Lp), Yp = Op, Ap({
        ...pp,
        startedAt: Date.now(),
        errors: []
      }), Lp = setTimeout(Pp, Sp), cp()
    }

    function yp() {
      xp && void 0 === xp.endedAt && void 0 === xp.ranAt && (null !== Lp && clearTimeout(Lp), Ap({
        ...xp,
        ranAt: Date.now()
      }), Lp = setTimeout(Pp, op))
    }
    const Up = 3;

    function wp(pp) {
      if (!xp || void 0 === xp.ranAt || void 0 !== xp.endedAt || xp.errors.includes(pp) || xp.errors.length >= Up) return;
      const ip = 0 === xp.errors.length;
      Ap({
        ...xp,
        errors: [...xp.errors, pp]
      }), ip && (null !== Lp && clearTimeout(Lp), Lp = setTimeout(Pp, Ip))
    }

    function vp(pp) {
      var ip;
      return (null === (ip = xp) || void 0 === ip ? void 0 : ip.chatKey) === pp ? xp : null
    }

    function tp(pp) {
      const ip = vp(pp);
      return ip && void 0 !== ip.endedAt ? (Ap(null), ip) : null
    }

    function Hp(pp) {
      var ip;
      (null === (ip = xp) || void 0 === ip ? void 0 : ip.chatKey) === pp && (null !== Lp && (clearTimeout(Lp), Lp = null), Yp = null, Ap(null))
    }
    const dp = "These changes from your last answer didn't go in. Make them again.";

    function ep(pp) {
      const ip = [...new Set(pp)].slice(0, Up);
      return `Fix this in your change: when it ran, the world showed ${1===ip.length?"this error":"these errors"}: ${ip.join(" ")}`
    }

    function jp(pp) {
      return `Your change didn't go in, because the code wouldn't run at all: ${pp.join(" ")} Send the whole change again with that fixed.`
    }

    function kp(pp) {
      return `Fix this in your change: ${pp.join(" ")}`
    }

    function mp(pp) {
      var ip;
      if (void 0 === pp.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const cp = Math.max(1, Math.round(((null !== (ip = pp.endedAt) && void 0 !== ip ? ip : pp.ranAt) - pp.ranAt) / 1e3)),
        Op = `Your change ran in your world for ${cp} ${1===cp?"second":"seconds"}`;
      return 0 === pp.errors.length ? {
        title: "Tested: no errors",
        text: `${Op} without an error.`
      } : {
        title: 1 === pp.errors.length ? "Tested: it showed an error" : `Tested: it showed ${pp.errors.length} errors`,
        text: `${Op} and showed: ${pp.errors.join(" ")}`
      }
    }

    function Rp(pp) {
      const [ip, cp] = (0, Op.useState)((() => vp(pp)));
      return (0, Op.useEffect)((() => {
        const ip = () => {
          cp(vp(pp))
        };
        return ip(), Dp.add(ip), () => {
          Dp.delete(ip)
        }
      }), [pp]), ip
    }
  },
  37132: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      d: () => Op
    });
    const Op = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function op(pp, ip, cp) {
      return {
        key: pp,
        label: `Code block at ${ip.join(", ")}`,
        codeBlock: !0,
        pos: ip,
        canChangePos: cp
      }
    }
  },
  37115: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      e: () => Ip,
      g: () => Sp,
      j: () => op
    });
    const Op = "code block",
      op = "World Code/";

    function Ip(pp) {
      return pp.trim().toLowerCase().startsWith(op.toLowerCase())
    }

    function Sp(pp) {
      return pp.trim().slice(op.length).replace(/^\.?\//, "")
    }
  },
  37075: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp,
      c: () => Yp,
      g: () => xp,
      i: () => Dp
    });
    var Op = cp(62),
      op = cp(44),
      Ip = cp(104);
    class Sp {
      constructor(pp, ip) {
        let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = pp, this.defaultValue = ip, this.canChange = cp, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const pp = op.h.getItem(this.storageKey);
            this.value = "boolean" === typeof pp ? pp : this.defaultValue
          }
          return this.value
        }, this.set = pp => {
          this.value = pp, op.h.setItem(this.storageKey, pp);
          for (const ip of this.listeners) ip(pp)
        }
      }
      subscribe(pp) {
        return this.listeners.add(pp), () => {
          this.listeners.delete(pp)
        }
      }
    }
    const xp = new Sp("codeEditorLightMode", !1),
      Lp = new Sp("codeEditorAiHints", !0),
      Yp = new Sp("codeEditorAiKeySafetyCheck", !0, Ip.featureFlags.isOwnTopLevelSite);

    function Dp(pp) {
      const [ip, cp] = (0, Op.useState)(pp.get);
      return (0, Op.useEffect)((() => {
        const ip = pp.subscribe(cp);
        return cp(pp.get()), ip
      }), [pp]), [ip, pp.set]
    }
  },
  37070: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Pp,
      D: () => Qp,
      E: () => mp,
      G: () => Rp,
      I: () => lp,
      b: () => yp,
      c: () => Lp,
      g: () => Up,
      j: () => Mp,
      l: () => xp,
      m: () => Dp,
      n: () => Wp,
      o: () => wp,
      p: () => dp,
      s: () => Cp,
      w: () => qp
    });
    var Op = cp(2487),
      op = cp(37063);
    const Ip = "bloxd-world-code-directory-sync",
      Sp = "handles",
      xp = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Lp(pp, ip) {
      return `${pp}::${ip}`
    }
    const Yp = new Set(["node_modules", ".git"]);

    function Dp() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Ap() {
      return new Promise(((pp, ip) => {
        const cp = indexedDB.open(Ip, 1);
        cp.onupgradeneeded = () => {
          const pp = cp.result;
          pp.objectStoreNames.contains(Sp) || pp.createObjectStore(Sp)
        }, cp.onsuccess = () => {
          pp(cp.result)
        }, cp.onerror = () => {
          var pp;
          ip(null !== (pp = cp.error) && void 0 !== pp ? pp : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Pp(pp, ip) {
      const cp = await Ap();
      try {
        await new Promise(((Op, op) => {
          const Ip = cp.transaction(Sp, "readwrite");
          Ip.objectStore(Sp).put(ip, pp), Ip.oncomplete = () => {
            Op()
          }, Ip.onerror = () => {
            var pp;
            op(null !== (pp = Ip.error) && void 0 !== pp ? pp : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        cp.close()
      }
    }
    async function Wp(pp) {
      const ip = await Ap();
      try {
        return await new Promise(((cp, Op) => {
          const op = ip.transaction(Sp, "readonly").objectStore(Sp).get(pp);
          op.onsuccess = () => {
            var pp;
            cp(null !== (pp = op.result) && void 0 !== pp ? pp : null)
          }, op.onerror = () => {
            var pp;
            Op(null !== (pp = op.error) && void 0 !== pp ? pp : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        ip.close()
      }
    }
    async function yp(pp) {
      const ip = await Ap();
      try {
        await new Promise(((cp, Op) => {
          const op = ip.transaction(Sp, "readwrite");
          op.objectStore(Sp).delete(pp), op.oncomplete = () => {
            cp()
          }, op.onerror = () => {
            var pp;
            Op(null !== (pp = op.error) && void 0 !== pp ? pp : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        ip.close()
      }
    }
    async function Up(pp) {
      const ip = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await pp.queryPermission(ip) || "granted" === await pp.requestPermission(ip)
    }
    async function wp(pp) {
      if (!Dp()) return null;
      try {
        const ip = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Pp(pp, ip), ip
      } catch (ip) {
        if (function(pp) {
            return pp instanceof DOMException && "AbortError" === pp.name
          }(ip)) return null;
        throw ip
      }
    }

    function vp(pp) {
      return pp.startsWith(".") || Yp.has(pp)
    }

    function tp(pp) {
      if (!pp) return !0;
      const ip = pp.split("/");
      for (const cp of ip)
        if ("" === cp || "." === cp || ".." === cp) return !1;
      return !0
    }
    async function Hp(pp, ip, cp) {
      for await (const [Ip, Sp] of pp.entries()) {
        if ("directory" === Sp.kind) {
          if (vp(Ip)) continue;
          const pp = ip ? `${ip}/${Ip}` : Ip;
          if (!tp(pp)) continue;
          await Hp(Sp, pp, cp);
          continue
        }
        const pp = ip ? `${ip}/${Ip}` : Ip;
        if (!(0, Op.s)(pp) && !(0, op.c)(pp)) continue;
        const xp = await Sp.getFile();
        cp[pp] = (0, op.c)(pp) ? await Ep(xp) : await xp.text()
      }
    }
    async function dp(pp) {
      const ip = {};
      return await Hp(pp, "", ip), ip
    }

    function ep(pp) {
      return !(!pp || pp !== pp.trim() || pp.startsWith("/") || pp.includes("\\") || pp.includes("\0")) && tp(pp)
    }
    async function jp(pp, ip, cp) {
      const Op = ip.split("/"),
        op = Op[Op.length - 1];
      let Ip = pp;
      for (let Sp = 0; Sp < Op.length - 1; Sp++) Ip = await Ip.getDirectoryHandle(Op[Sp], {
        create: cp
      });
      return {
        dir: Ip,
        fileName: op
      }
    }
    async function kp(pp, ip, cp) {
      if (!ep(ip)) throw new Error(`Refusing to write unsafe path: ${ip}`);
      const {
        dir: Op,
        fileName: op
      } = await jp(pp, ip, !0), Ip = await Op.getFileHandle(op, {
        create: !0
      }), Sp = await Ip.createWritable();
      await Sp.write(cp), await Sp.close()
    }
    async function mp(pp, ip, cp) {
      const Op = await async function(pp, ip) {
        if (!ep(ip)) return null;
        try {
          const {
            dir: cp,
            fileName: Op
          } = await jp(pp, ip, !1), op = await cp.getFileHandle(Op), Ip = await op.getFile();
          return await Ip.text()
        } catch (cp) {
          if (cp instanceof DOMException && ("NotFoundError" === cp.name || "NotAllowedError" === cp.name)) return null;
          throw cp
        }
      }(pp, ip);
      Op !== cp && await kp(pp, ip, cp)
    }
    async function Rp(pp, ip, cp) {
      if (!(0, Op.s)(ip) && !(0, op.c)(ip)) throw new Error(`Refusing to write non-allowlisted path: ${ip}`);
      if ((0, op.c)(ip)) {
        if (await Xp(pp, ip) === xp) throw new Error(`Move the binary schematic ${ip} outside the linked folder before syncing its placeholder`)
      }
      await kp(pp, ip, cp)
    }
    async function qp(pp, ip) {
      if (!ep(ip)) throw new Error(`Refusing to remove unsafe path: ${ip}`);
      try {
        const {
          dir: cp,
          fileName: Op
        } = await jp(pp, ip, !1);
        await cp.removeEntry(Op)
      } catch (cp) {
        if (cp instanceof DOMException && ("NotFoundError" === cp.name || "NotAllowedError" === cp.name)) return;
        throw cp
      }
    }
    async function Mp(pp, ip) {
      if (!ep(ip)) return null;
      try {
        const cp = ip.split("/");
        let Op = pp;
        for (const pp of cp) Op = await Op.getDirectoryHandle(pp);
        return Op
      } catch (cp) {
        if (cp instanceof DOMException && ("NotFoundError" === cp.name || "NotAllowedError" === cp.name)) return null;
        throw cp
      }
    }
    async function Cp(pp, ip) {
      if ((0, Op.s)(ip) || (0, op.c)(ip)) {
        if ((0, op.c)(ip)) {
          if (await Xp(pp, ip) === xp) throw new Error(`Refusing to remove a binary schematic: ${ip}`)
        }
        await qp(pp, ip)
      }
    }
    async function Ep(pp) {
      if (pp.size > 64) return xp;
      const ip = await pp.text();
      return Array.from(ip).some((pp => {
        const ip = pp.charCodeAt(0);
        return ip < 9 || ip > 13 && ip < 32 || 65533 === ip
      })) ? xp : ip
    }
    async function Xp(pp, ip) {
      try {
        const {
          dir: cp,
          fileName: Op
        } = await jp(pp, ip, !1);
        return await Ep(await (await cp.getFileHandle(Op)).getFile())
      } catch (cp) {
        if (cp instanceof DOMException && "NotFoundError" === cp.name) return null;
        throw cp
      }
    }
    async function lp(pp, ip) {
      const cp = await dp(pp);
      for (const Op of Object.keys(cp)) Op in ip || (0, op.c)(Op) || await Cp(pp, Op);
      for (const [Ip, Sp] of Object.entries(ip))((0, Op.s)(Ip) || (0, op.c)(Ip)) && await Rp(pp, Ip, Sp)
    }

    function Qp(pp, ip) {
      var cp, Op;
      let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ip = null !== (cp = op.debounceMs) && void 0 !== cp ? cp : 300,
        Sp = null !== (Op = op.pollMs) && void 0 !== Op ? Op : 1e3;
      let xp = !1,
        Lp = null,
        Yp = null,
        Dp = null;
      const Ap = () => {
          xp || (Lp && clearTimeout(Lp), Lp = setTimeout((() => {
            Lp = null, Pp()
          }), Ip))
        },
        Pp = async () => {
          if (!xp) try {
            if (!await Up(pp, "readwrite")) return;
            const cp = await dp(pp);
            xp || ip(cp)
          } catch (cp) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", cp)
          }
        };
      Pp();
      const Wp = window.FileSystemObserver;
      if (Wp) try {
        Dp = new Wp((() => {
          Ap()
        })), Dp.observe(pp, {
          recursive: !0
        })
      } catch (yp) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", yp), Dp = null
      }
      return Dp || (Yp = setInterval((() => {
        Ap()
      }), Sp)), () => {
        xp = !0, Lp && clearTimeout(Lp), Yp && clearInterval(Yp), Dp && Dp.disconnect()
      }
    }
  },
  4950: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => wp,
      i: () => vp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(1201),
      xp = cp(4956),
      Lp = cp(1929),
      Yp = cp(2492),
      Dp = cp(4964),
      Ap = cp(1112);
    const Pp = new WeakMap;
    let Wp = 0;

    function yp(pp) {
      let ip = Pp.get(pp);
      return void 0 === ip && (ip = Wp++, Pp.set(pp, ip)), ip
    }

    function Up(pp) {
      let {
        piece: ip
      } = pp;
      return "space" === ip.kind ? (0, Ap.jsx)(Ap.Fragment, {
        children: ip.text
      }) : (0, Ap.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ip.delayMs}ms`
        },
        children: (0, Ap.jsx)(xp.d, {
          text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
        })
      })
    }

    function wp(pp) {
      let {
        display: ip
      } = pp;
      const {
        selectedLanguage: cp
      } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
      return (0, Ap.jsxs)("div", {
        className: op()("Dialogue", {
          DialogueAnimateIn: !1 !== ip.animateIn
        }),
        children: [ip.speakerName && (0, Ap.jsx)(Lp.e, {
          text: ip.speakerName,
          className: "DialogueSpeaker"
        }), (0, Ap.jsx)("p", {
          className: "DialogueLine",
          children: Op.map(((pp, ip) => 1 === pp.length && "space" === pp[0].kind ? pp[0].text : (0, Ap.jsx)("span", {
            className: "DialogueGlue",
            children: pp.map(((pp, ip) => (0, Ap.jsx)(Up, {
              piece: pp
            }, ip)))
          }, ip)))
        })]
      })
    }
    const vp = (0, Ip.memo)((function() {
      const pp = (0, Yp.i)("dialogue");
      return (0, Ap.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: pp && (0, Ap.jsx)(wp, {
          display: pp
        }, yp(pp))
      })
    }))
  },
  36869: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Up,
      e: () => wp
    });
    var Op = cp(62),
      op = cp(1476),
      Ip = cp(2004),
      Sp = cp(36828),
      xp = cp(640),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(1112);
    const Ap = [Pp()];

    function Pp() {
      return {
        source: null,
        direction: null,
        oN: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Wp(pp) {
      return Ap.find((ip => null !== ip.source && ip.source === pp))
    }

    function yp(pp) {
      clearTimeout(pp.timeout), pp.source = null, pp.direction = null, pp.writtenAngle = null, pp.oN && (pp.oN.style.rotate = "")
    }
    const Up = (0, Op.memo)((function() {
      const [, pp] = (0, Op.useReducer)((pp => pp + 1), 0);
      return (0, op.f)("damagedByOtherPlayer", (ip => {
        let {
          Ec: cp,
          direction: Op
        } = ip;
        const op = cp || "nonDirectional",
          Ip = function(pp) {
            var ip;
            const cp = null !== (ip = Wp(pp)) && void 0 !== ip ? ip : Ap.find((pp => null === pp.source));
            if (cp) return cp;
            const Op = {
              source: null,
              direction: null,
              oN: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Ap.push(Op), Op
          }(op);
        clearTimeout(Ip.timeout), Ip.source = op, Ip.direction = Op, Ip.timeout = setTimeout((() => {
          yp(Ip), pp()
        }), 800), pp()
      })), (0, Ip.b)("kill", (ip => {
        let {
          killer: cp,
          victim: Op
        } = ip;
        const op = cp.local && Wp(Op.id);
        op && (yp(op), pp())
      })), (0, Op.useEffect)((() => {
        const pp = (0, Sp.i)("turnDamageIndicators", wp);
        return () => {
          pp(), Ap.forEach(yp)
        }
      }), []), (0, Dp.jsx)("div", {
        className: "DirectionalDamage",
        children: Ap.map(((pp, ip) => (0, Dp.jsx)("div", {
          ref: ip => {
            pp.oN = ip
          },
          className: Yp()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, xp.G)(pp.direction),
            DamageIndicatorIdle: null === pp.source
          })
        }, ip)))
      })
    }));

    function wp(pp) {
      for (const ip of Ap) {
        if (null === ip.source || (0, xp.G)(ip.direction)) continue;
        const cp = ip.direction - pp;
        cp !== ip.writtenAngle && (ip.writtenAngle = cp, ip.oN.style.rotate = `${cp}rad`)
      }
    }
  },
  8900: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Xp,
      f: () => qp,
      h: () => Mp
    });
    var Op = cp(62),
      op = cp(4635),
      Ip = cp(1141),
      Sp = cp(1476),
      xp = cp(34),
      Lp = cp(3532),
      Yp = cp(2281),
      Dp = cp(1251),
      Ap = cp(2638),
      Pp = cp(1956),
      Wp = cp(2004),
      yp = cp(1201),
      Up = cp(25),
      wp = cp(1650),
      vp = cp(1049),
      tp = cp.n(vp),
      Hp = cp(8909),
      dp = cp(8917),
      ep = cp(8919),
      jp = cp(8843),
      kp = cp(8928),
      mp = (cp(8937), cp(1112));
    let Rp = null;

    function qp() {
      return null !== Rp
    }

    function Mp() {
      return "pad" === Rp
    }

    function Cp() {
      return "inGame" === Up.c.get("gameState") && !(0, wp.l)()
    }

    function Ep(pp) {
      return (0, dp.t)(pp, Dp.n, dp.f, dp.h, dp.k)
    }
    const Xp = (0, Op.memo)((function() {
      const {
        t: pp
      } = (0, yp.H)(), {
        userContext: ip
      } = (0, Ip.b)(), [cp, Up] = (0, Op.useState)(null), [vp, qp] = (0, Op.useState)(null), Mp = (0, Op.useRef)(null), Xp = (0, Op.useCallback)((pp => {
        Mp.current = pp, qp(pp)
      }), []), lp = (0, Op.useRef)(0), Qp = (0, Op.useRef)(null), Jp = (0, Op.useRef)({
        x: 0,
        y: 0
      }), [Bp, Np] = (0, Op.useState)(0), Tp = (0, Op.useMemo)((() => function(pp) {
        const ip = [];
        for (let Op = 0; Op < Dp.n; Op++) {
          var cp;
          ip.push(null !== (cp = pp[Op]) && void 0 !== cp ? cp : null)
        }
        return ip
      }((0, Ap.i)(ip.getPlayerCosmetics().emote))), [ip, Bp]);
      (0, Wp.b)("cosmeticsUpdated", (pp => {
        pp.some((pp => pp.local && "emote" === pp.KI)) && Np((pp => pp + 1))
      }));
      const fp = (0, Op.useRef)(!1),
        bp = (0, Op.useCallback)((function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === pp && (0, ep.f)(), fp.current = ip, Jp.current = {
            x: 0,
            y: 0
          }, Xp(null), Up(pp)
        }), [Xp]),
        hp = (0, Op.useCallback)((() => {
          Up(null), Xp(null), Jp.current = {
            x: 0,
            y: 0
          }
        }), [Xp]),
        ap = (0, Op.useCallback)((pp => {
          if (Date.now() < lp.current) return;
          const ip = (0, Yp.g)(pp),
            cp = !!ip.holdUntilMove,
            Op = cp ? 600 : Math.ceil(1e3 * ip.animation.animation_length / Yp.c) + 200;
          lp.current = Date.now() + Op, Qp.current = pp, Pp.gameBridge.send("playEmote", pp), Pp.gameBridge.send("applyTemporaryThirdPerson", cp ? {} : {
            durationMs: Op
          })
        }), []);
      (0, Sp.f)("requestToggleEmoteWheel", (() => {
        null === cp ? Cp() && bp("click") : hp()
      })), (0, Sp.f)("requestEmoteWheelHoldOpen", (() => {
        null === cp && Cp() && bp((0, Hp.b)() ? "hold" : "click")
      })), (0, Sp.f)("requestEmoteWheelPadOpen", (pp => {
        null !== cp || !Cp() || (0, jp.d)() || (0, kp.x)() || bp("pad", pp)
      })), (0, Sp.f)("requestEmoteRepeatLast", (() => {
        if (null !== cp || !Cp() || (0, jp.d)() || (0, kp.x)()) return;
        const pp = Qp.current;
        null !== pp && Tp.includes(pp) ? ap(pp) : bp("pad", !0)
      }));
      const np = () => {
        const pp = Mp.current,
          ip = null !== pp ? Tp[pp] : null;
        null !== ip && "pad" === cp && Date.now() < lp.current || (hp(), null !== ip && ap(ip))
      };
      (0, Sp.f)("emoteWheelPadAim", (pp => {
        if ("pad" !== cp) return;
        const ip = (0, dp.A)(pp, Dp.n, Mp.current);
        Xp(null !== ip && null !== Tp[ip] ? ip : null)
      })), (0, Sp.f)("requestEmoteWheelPadCommit", (pp => {
        "pad" !== cp || pp && fp.current || np()
      })), (0, Sp.f)("appManagerUpdated|activeInputDevice", (pp => {
        null !== cp && "pad" === cp !== ("gamepad" === pp) && hp()
      })), (0, Op.useLayoutEffect)((() => (Rp = cp, (0, Lp.y)("emoteWheel", "pad" === cp), xp.m.GA(Lp.r), () => {
        Rp = null, (0, Lp.y)("emoteWheel", !1), xp.m.GA(Lp.r)
      })), [cp]), (0, Sp.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === cp && np()
      })), (0, Sp.f)("requestEmoteWheelClose", (() => {
        null !== cp && hp()
      })), (0, Sp.f)("appManagerUpdated|gameState", (pp => {
        "inGame" !== pp && hp()
      }));
      const Fp = () => {
        (0, wp.l)() && hp()
      };
      if ((0, Sp.f)("appManagerUpdated|openEverythingMenuName", Fp), (0, Sp.f)("appManagerUpdated|openInGameMenuName", Fp), (0, Sp.f)("pointerLockUpdate", (pp => {
          pp || "hold" !== cp || hp()
        })), (0, Op.useEffect)((() => {
          if (null === cp) return;
          const pp = pp => {
            "Escape" === pp.key && (pp.stopImmediatePropagation(), pp.preventDefault(), hp())
          };
          return document.addEventListener("keydown", pp, !0), () => {
            document.removeEventListener("keydown", pp, !0)
          }
        }), [cp, hp]), (0, op.e)(!0, "click" === cp, "EmoteWheelOverlay"), (0, Op.useEffect)((() => {
          if ("hold" === cp) return Pp.gameBridge.send("holdEmoteWheel", !0), () => {
            Pp.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [cp]), (0, Op.useEffect)((() => {
          if ("hold" !== cp) return;
          const pp = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            ip = dp.r * pp,
            Op = dp.p * pp,
            op = pp => {
              let cp = Jp.current.x + pp.movementX,
                op = Jp.current.y + pp.movementY;
              const Ip = Math.hypot(cp, op);
              if (Ip > ip) {
                const pp = ip / Ip;
                cp *= pp, op *= pp
              }
              Jp.current = {
                x: cp,
                y: op
              }, Xp(function(pp, ip, cp, Op) {
                if (Math.hypot(pp, ip) < cp) return null;
                const op = (0, dp.v)(pp, ip, Dp.n);
                return null === Op[op] ? null : op
              }(cp, op, Op, Tp))
            };
          return document.addEventListener("mousemove", op), () => {
            document.removeEventListener("mousemove", op)
          }
        }), [cp, Tp, Xp]), null === cp) return null;
      const gp = "hold" === cp || "pad" === cp,
        Gp = null !== vp ? Tp[vp] : null,
        rp = null !== Gp ? (0, Yp.g)(Gp).displayName : pp("emotes:pickEmote");
      return (0, mp.jsx)("div", {
        className: tp()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === cp
        }),
        onMouseDown: pp => {
          pp.target === pp.currentTarget && hp()
        },
        children: (0, mp.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * dp.r + "rem",
            height: 2 * dp.r + "rem"
          },
          children: [(0, mp.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${dp.m} ${dp.m}`,
            children: [Tp.map(((ip, cp) => {
              const Op = null !== ip,
                op = gp && cp === vp;
              return (0, mp.jsx)("path", {
                d: Ep(cp),
                className: tp()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: op,
                  EmoteWheelWedgeDisabled: !Op
                }),
                onClick: pp => {
                  pp.stopPropagation(), null !== ip && (pp => {
                    hp(), ap(pp)
                  })(ip)
                },
                "aria-label": null !== ip ? (0, Yp.g)(ip).displayName : pp("emotes:emptySlot")
              }, cp)
            })), (0, mp.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: dp.f,
              cy: dp.f,
              r: dp.k
            }), (0, mp.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: dp.f,
              cy: dp.f,
              r: dp.h
            }), gp && null !== vp && (0, mp.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Ep(vp)
            })]
          }), Tp.map(((pp, ip) => {
            const cp = null !== pp,
              Op = gp && ip === vp,
              op = (0, dp.w)(ip, Dp.n),
              Ip = dp.c * Math.cos(op),
              Sp = dp.c * Math.sin(op);
            return (0, mp.jsx)("div", {
              className: tp()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Op,
                EmoteWheelSlotIconDisabled: !cp
              }),
              style: {
                left: `calc(50% + ${Ip}rem)`,
                top: `calc(50% + ${Sp}rem)`,
                backgroundImage: cp ? `url(/textures/charSkins/previews/emote_${pp}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, ip)
          })), (0, mp.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: rp
          })]
        })
      })
    }))
  },
  36743: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => wp
    });
    var Op = cp(62),
      op = cp(82),
      Ip = cp(1201),
      Sp = cp(1049),
      xp = cp.n(Sp),
      Lp = cp(1765),
      Yp = cp(1060),
      Dp = cp(1295),
      Ap = cp(1505),
      Pp = cp(1677),
      Wp = cp(1502),
      yp = cp(1112);
    const Up = 14;

    function wp(pp) {
      let {
        className: ip,
        triggerElementRef: cp,
        options: Sp
      } = pp;
      const {
        t: wp
      } = (0, Ip.H)(), [vp, tp] = (0, Op.useState)(!1), [Hp, dp] = (0, Op.useState)({
        x: 0,
        y: 0
      }), ep = (0, Op.useRef)(null);
      (0, Op.useEffect)((() => {
        let pp = null;
        const ip = ip => {
            pp = {
              x: ip.clientX,
              y: ip.clientY
            }
          },
          Op = ip => {
            if (null === pp || !(0, Wp.e)(pp, ip)) return;
            pp = null;
            const cp = Up * (0, Lp.getRemInPx)();
            dp({
              x: Math.min(ip.clientX, window.innerWidth - cp - 5),
              y: ip.clientY
            }), tp((pp => !pp))
          },
          op = pp => {
            var ip;
            null !== (ip = ep.current) && void 0 !== ip && ip.contains(pp.relatedTarget) || tp(!1)
          },
          Ip = cp.current;
        return Ip.addEventListener("pointerdown", ip), Ip.addEventListener("pointerup", Op), Ip.addEventListener("mouseleave", op), () => {
          Ip.removeEventListener("pointerdown", ip), Ip.removeEventListener("pointerup", Op), Ip.removeEventListener("mouseleave", op)
        }
      }), [cp]), (0, Op.useEffect)((() => {
        if (vp) return (0, Pp.e)("pointerdown", (pp => {
          !ep.current || ep.current.contains(pp.target) || cp.current.contains(pp.target) || tp(!1)
        }))
      }), [vp, cp]), (0, Op.useLayoutEffect)((() => {
        if (!vp || !ep.current) return;
        const pp = ep.current.getBoundingClientRect().height,
          ip = Math.max(5, window.innerHeight - pp - 5);
        Hp.y > ip && dp({
          x: Hp.x,
          y: ip
        })
      }), [vp, Hp]), (0, Dp.x)("popup", ep, (() => {
        tp(!1)
      }), vp);
      const jp = Sp.filter((pp => !1 !== pp.show));
      return vp && 0 !== jp.length ? (0, op.createPortal)((0, yp.jsx)("div", {
        ref: ep,
        className: xp()("FloatingActions", {
          [ip]: ip
        }),
        style: {
          width: `${Up}rem`,
          top: Hp.y,
          left: Hp.x
        },
        children: jp.map((pp => {
          let {
            icon: ip,
            text: cp,
            onPointerDown: Op,
            analyticsClick: op
          } = pp;
          return (0, yp.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: pp => {
              void 0 !== op && (0, Ap.reportAnalyticsClick)(op), Op(pp), tp(!1), pp.stopPropagation()
            },
            children: [(0, yp.jsx)(Yp.d, {
              name: ip
            }), (0, yp.jsx)("div", {
              children: wp(cp)
            })]
          }, cp)
        }))
      }), function() {
        var pp;
        return null !== (pp = document.querySelector(".WholeAppWrapperInner")) && void 0 !== pp ? pp : document.body
      }()) : null
    }
  },
  36881: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => YS
    });
    var Op = cp(36791),
      op = cp(62),
      Ip = cp(2104),
      Sp = cp(4621),
      xp = cp(4628),
      Lp = cp(2492),
      Yp = cp(1956),
      Dp = cp(1112);

    function Ap(pp) {
      let {
        className: ip,
        style: cp,
        vw: Op,
        maxPx: op,
        children: Ip
      } = pp;
      console.assert("number" === typeof Op && "number" === typeof op, "vw and maxPx passed to Text must be numbers");
      const Sp = window.innerWidth * (Op / 100) > op ? `${op}px` : `${Op}vw`;
      return (0, Dp.jsx)("div", {
        className: ip,
        style: {
          ...cp,
          fontSize: Sp
        },
        children: Ip
      })
    }
    var Pp = cp(36887),
      Wp = cp(1480),
      yp = cp(34),
      Up = cp(1982),
      wp = cp(1060);

    function vp(pp) {
      let {
        tasks: ip,
        lastDisplayedTasks: cp
      } = pp;
      return (0, Dp.jsx)(Dp.Fragment, {
        children: Object.keys(ip).map((pp => (0, Dp.jsx)(tp, {
          task: ip[pp],
          lastDisplayedAs: cp[pp]
        }, ip[pp].text)))
      })
    }

    function tp(pp) {
      let {
        task: ip,
        lastDisplayedAs: cp
      } = pp;
      const [Op, Ip] = (0, op.useState)(null !== cp && void 0 !== cp && cp.progress ? cp.progress / ip.goal : 0), [Sp, xp] = (0, op.useState)(!1), [Lp, Yp] = (0, op.useState)(ip.claimed || !1);
      return (0, op.useEffect)((() => {
        Ip(ip.progress / ip.goal)
      }), [ip.progress, ip.goal]), Lp ? null : (0, Dp.jsxs)("div", {
        className: "Task",
        children: [(0, Dp.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, Dp.jsx)(Ap, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: ip.text
          })
        }), ip.progress < ip.goal ? (0, Dp.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Op ? (0, Dp.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Op + "%"
            }
          }) : null, (0, Dp.jsx)("div", {
            className: "TaskProgressText",
            children: `${ip.progress}/${ip.goal}`
          })]
        }) : (0, Dp.jsx)(Wp.o, {
          className: "ClaimRewardButton",
          onClick: () => {
            xp(!0)
          },
          children: (0, Dp.jsx)(Ap, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Sp ? (0, Dp.jsx)(Hp, {
          task: ip,
          close: () => {
            ip.claimed = !0, Yp(!0), xp(!1)
          }
        }) : null]
      })
    }

    function Hp(pp) {
      let {
        task: ip,
        close: cp
      } = pp;
      const [Op, Ip] = (0, op.useState)({}), [Sp, xp] = (0, op.useState)("closed");
      (0, op.useEffect)((() => {
        let pp;
        return "animStart" === Sp && (pp = setTimeout((() => {
          xp("animEnd")
        }), 700)), () => {
          clearTimeout(pp)
        }
      }), [Sp]), (0, Pp.c)((() => {
        Yp.gameBridge.send("completeTask", ip.text)
      }));
      const Ap = (0, Lp.i)("currencyAmounts");
      return (0, Dp.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Sp)
            if (0 === ip.rewards.length) cp(), Yp.gameBridge.send("completeTask", ip.text);
            else {
              const pp = {
                ...Up.c.get("currencyAmounts")
              };
              for (const ip in Op) pp[ip] = {
                ...pp[ip],
                amount: pp[ip].amount + Op[ip]
              };
              Up.c.apply({
                currencyAmounts: pp
              }), xp("closed")
            }
          else "closed" === Sp && (Ip(ip.rewards.pop()), xp("animStart"))
        },
        children: [(0, Dp.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Sp ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Sp?"open":"closed"}.png`
        }), (0, Dp.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Sp ? Object.keys(Op).map((pp => {
            const ip = null === Ap || void 0 === Ap ? void 0 : Ap[pp];
            return !ip || ip.hidden ? null : (0, Dp.jsxs)("div", {
              className: "Reward",
              children: [(0, Dp.jsx)(wp.d, {
                name: ip.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: ip.iconColour
                }
              }), (0, Dp.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Sp ? 0 : Op[pp]
              })]
            }, pp)
          })) : null
        }), "animStart" === Sp ? (0, Dp.jsx)(dp, {}) : null, (0, Dp.jsx)("div", {
          className: "ChestsLeft",
          children: ip.rewards.length
        })]
      })
    }

    function dp() {
      const [pp, ip] = (0, op.useState)(0);
      (0, op.useEffect)((() => {
        ip(1)
      }), []);
      return (0, Dp.jsx)(Dp.Fragment, {
        children: Array.from({
          length: 40
        }).map(((ip, cp) => (0, Dp.jsx)(wp.d, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * pp * Math.cos(cp / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * pp * Math.sin(cp / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === pp ? 1 : 0
          }
        }, cp)))
      })
    }
    yp.m.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const pp = new Image,
          ip = new Image;
        pp.src = "/textures/miscImages/Treasure Chest open.png", ip.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var ep = cp(3224),
      jp = cp(1141),
      kp = cp(1929),
      mp = cp(1476),
      Rp = cp(337),
      qp = cp(2004),
      Mp = cp(1361);

    function Cp(pp) {
      var ip, cp;
      let {
        byId: Op,
        localId: op
      } = pp;
      return null === op ? null : null !== (ip = null === (cp = Op[op]) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : null
    }

    function Ep(pp) {
      let {
        lbStats: ip,
        storedState: cp = {}
      } = pp;
      const {
        userContext: Op
      } = (0, jp.b)(), Ip = (0, qp.f)("players", Cp), [Sp, xp] = (0, op.useState)(cp.selectedCat || (null === ip || void 0 === ip ? void 0 : ip[0]) || null), [Lp, Ap] = (0, op.useState)(cp.selectedTimeframe || "Today"), [Pp, Wp] = (0, op.useState)(null);
      (0, op.useEffect)((() => {
        null === Sp && null !== ip && ip.length > 0 && xp(ip[0])
      }), [ip, Sp]);
      const [yp, Up] = (0, op.useState)(cp.seeingTop || !1), [wp, vp] = (0, op.useState)(!1), tp = (0, op.useCallback)((() => {
        null !== Sp && null !== Lp && (Yp.gameBridge.send("requestLeaderboard", {
          category: Sp.value,
          timeframe: Lp,
          seeTop: yp
        }), dp(!0), Qp && Jp(null))
      }), [Sp, Lp, cp, yp]);
      (0, op.useEffect)((() => {
        tp(), cp.selectedCat = Sp, cp.selectedTimeframe = Lp, cp.seeingTop = yp
      }), [Sp, Lp, cp, yp, tp]), (0, op.useEffect)((() => {
        if ((null === Pp || void 0 === Pp ? void 0 : Pp.length) > 0)
          if (yp) yp && vp(null === Ep(Pp));
          else {
            for (const pp of Pp)
              if (1 === pp.place) return void vp(!1);
            vp(!0)
          }
      }), [Pp, yp]), (0, mp.f)("leaderboardResponse", (pp => {
        let {
          category: cp,
          timeframe: Op,
          data: op
        } = pp;
        for (let Ip = 0; Ip < ip; Ip++)
          if (ip[Ip].value === cp) {
            xp(ip[Ip]);
            break
          } Ap(Op), Wp(op), dp(!1)
      }));
      const [Hp, dp] = (0, op.useState)(!0);

      function Ep(pp) {
        const ip = Cp(Yp.gameBridge.latest("players"));
        for (let cp = 0; cp < pp.length; cp++)
          if (pp[cp].name === ip) return pp[cp].place;
        return null
      }
      const [Xp, lp] = (0, op.useState)(!1), [Qp, Jp] = (0, op.useState)(null);
      (0, op.useEffect)((() => {
        if (Pp && !Xp) {
          const pp = Ep(Pp);
          pp < (cp.lastSeenPlayerPlace || 0) && Jp(cp.lastSeenPlayerPlace - pp), lp(!0)
        }
      }), [Pp, cp, Xp]), (0, op.useEffect)((() => () => {
        Pp && (cp.lastSeenPlayerPlace = Ep(Pp))
      }), [Pp, cp]);
      const Bp = (0, op.useRef)(null),
        [Np, Tp] = (0, op.useState)(void 0);
      return (0, op.useEffect)((() => {
        var pp, ip;
        Np !== (null === (pp = Bp.current) || void 0 === pp ? void 0 : pp.offsetHeight) && Tp(null === (ip = Bp.current) || void 0 === ip ? void 0 : ip.offsetHeight)
      })), Op.isLoggedIn() ? (0, Dp.jsxs)(Dp.Fragment, {
        children: [(0, Dp.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, Dp.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Dp.jsx)(ep.d, {
              options: ip.map((pp => ({
                label: pp.label,
                value: pp.value
              }))),
              value: Sp,
              onChange: pp => {
                xp(pp)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, Dp.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, Dp.jsx)(ep.d, {
              options: Rp.Cc.map((pp => ({
                value: pp,
                label: pp,
                className: "LBDropdownMenuItem"
              }))),
              value: Lp,
              onChange: pp => {
                Ap(pp.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), wp ? (0, Dp.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Up(!yp)
            },
            children: yp ? "See Yourself" : "See Top"
          }) : null]
        }), (0, Dp.jsx)("div", {
          className: "LBTableWrapper",
          children: Hp ? (0, Dp.jsx)("div", {
            className: "LoaderContainer",
            children: (0, Dp.jsx)(Mp.c, {})
          }) : null === Qp ? (0, Dp.jsx)(Dp.Fragment, {
            children: (0, Dp.jsxs)("table", {
              className: "LBTable",
              children: [(0, Dp.jsx)("thead", {
                className: "LBTableTHead",
                ref: Bp,
                children: (0, Dp.jsxs)("tr", {
                  children: [(0, Dp.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, Dp.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, Dp.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Sp.label.toUpperCase()
                  })]
                })
              }), (0, Dp.jsx)("tbody", {
                children: Pp.map((pp => (0, Dp.jsxs)("tr", {
                  className: "LBTableTR " + (pp.name === Ip ? "LBTableTRYou" : ""),
                  children: [(0, Dp.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${pp.place}`
                  }), (0, Dp.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, Dp.jsx)(kp.e, {
                      text: [{
                        entityName: pp.name
                      }]
                    })
                  }), (0, Dp.jsx)("td", {
                    className: "LBTableTD",
                    children: pp.stat
                  })]
                }, pp.name)))
              })]
            })
          }) : (0, Dp.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Jp(null)
            },
            children: (0, Dp.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, Dp.jsx)("div", {
                className: "TriangleUp"
              }), (0, Dp.jsx)("div", {
                className: "LBIncreaseText",
                children: `${Qp} Place${Qp>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, Dp.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, Dp.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, Dp.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Xp = cp(3209),
      lp = cp(104),
      Qp = cp(44),
      Jp = cp(3528);
    const Bp = (0, op.memo)((function(pp) {
      let {
        show: ip,
        onClose: cp
      } = pp;
      (0, Xp.b)();
      const Op = (0, Lp.i)("_tasks"),
        Ip = (0, Lp.i)("_availableLeaderboards"),
        [Yp, Ap] = (0, op.useState)({});
      Op && Object.keys(Op).length > 0 && 0 === Object.keys(Yp).length && Ap(Op);
      const [Pp] = (0, op.useState)({
        tasks: {},
        leaderboard: {}
      }), Wp = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Op && Object.keys(Op).length > 0,
          content: (0, Dp.jsx)(vp, {
            tasks: Op,
            lastDisplayedTasks: Yp
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Ip || void 0 === Ip ? void 0 : Ip.length) > 0,
          content: (0, Dp.jsx)(Ep, {
            lbStats: Ip,
            storedState: Pp.leaderboard
          })
        }
      };

      function yp() {
        for (const pp in Wp)
          if (Wp[pp].getIsDefined()) return pp;
        return null
      }
      const [Up, wp] = (0, op.useState)(yp());

      function tp() {
        Ap({
          ...Op
        }), cp()
      }(0, op.useEffect)((() => {
        Up || wp(yp())
      }), [yp()]), (0, xp.d)(!0, Up && ip), (0, op.useEffect)((() => {
        ip && !Up && (console.log("CLOSE"), tp())
      }), [ip, Up]);
      const [Hp, dp] = (0, op.useState)(!1);
      return (0, op.useEffect)((() => {
        ip && Up && !Hp && dp(!0)
      }), [ip, Hp, Up]), (0, op.useEffect)((() => {
        !Hp && Op && "tasks" !== Up && wp("tasks")
      }), [Hp, Op, Up]), (0, Dp.jsx)(Dp.Fragment, {
        children: Up ? (0, Dp.jsx)(Jp.b, {
          className: "RetentionFeaturesWrapper",
          show: ip,
          children: (0, Dp.jsxs)(Sp.c, {
            close: tp,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, Dp.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, Dp.jsx)(Tp, {}), (0, Dp.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, Dp.jsx)(Np, {
                  setCategory: wp,
                  menuCategories: Wp,
                  selectedCat: Up
                }), (0, Dp.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Wp[Up].content
                })]
              })]
            }), (0, Dp.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: lp.featureFlags.useDiscord && (0, Dp.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, Dp.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, Dp.jsx)(fp, {
                    tasks: Op
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Np(pp) {
      let {
        selectedCat: ip,
        setCategory: cp,
        menuCategories: Op
      } = pp;
      return (0, Dp.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Op).map((pp => Op[pp].getIsDefined() ? (0, Dp.jsx)("div", {
          className: "MenuHeaderCategory " + (pp === ip ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            cp(pp)
          },
          children: Op[pp].Title
        }, pp) : null))
      })
    }

    function Tp() {
      const pp = (0, Lp.i)("currencyAmounts");
      return (0, Dp.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== pp && void 0 !== pp ? pp : {}).map((ip => {
          const cp = pp[ip];
          return cp.hidden ? null : (0, Dp.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, Dp.jsx)(wp.d, {
              name: cp.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: cp.iconColour
              }
            }), (0, Dp.jsx)("div", {
              className: "UiCurrencyAmount",
              children: cp.amount
            })]
          }, ip)
        }))
      })
    }

    function fp(pp) {
      let {
        tasks: ip
      } = pp;
      return (0, Dp.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, Dp.jsx)(wp.d, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            Qp.h.setItem("DiscordPressed", !0), Yp.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in ip && yp.m.GA("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, Dp.jsx)(Ip.b, {})]
      })
    }
    var bp = cp(25),
      hp = cp(1650),
      ap = cp(36728),
      np = cp(34325),
      Fp = cp(4719),
      gp = cp(156),
      Gp = cp(1221),
      rp = cp(1387),
      Zp = cp(2734),
      zp = cp(1201),
      sp = cp(1656),
      Kp = cp(2444),
      Vp = cp(2437),
      ii = cp(1880),
      ci = cp(2068),
      Oi = cp(1276),
      oi = cp(1505),
      Ii = cp(36892),
      Si = cp(36896),
      xi = cp(36898),
      Li = cp(36903),
      Yi = cp(36908),
      Di = cp(2793);

    function Ai(pp) {
      let {
        playersHere: ip,
        exclude: cp,
        Lk: Op
      } = pp;
      const {
        t: Ip
      } = (0, zp.H)(), Sp = (0, Di.p)(Di.j), [xp, Lp] = (0, op.useState)([]), Yp = [], Ap = (pp, ip) => {
        const Op = [...cp, ...Yp.map((pp => pp.player.name))];
        Yp.length < 3 && !(0, Si.l)(Op, pp.name) && Yp.push({
          player: pp,
          status: ip
        })
      };
      for (const op of ip) Ap((0, Yi.j)(op.name, op.cosmetics, op.ranks), Ip("worldSocial:inThisWorld"));
      if ("loaded" === Sp.state.status)
        for (const op of Sp.state.recentPlayers) op.preview.name && !op.preview.isError && Ap({
          ...op.preview,
          location: {
            status: "offline"
          }
        }, Ip("worldSocial:playedWithYou"));
      const Pp = pp => {
        Lp((ip => [...ip, pp])), Op(pp).finally((() => {
          Lp((ip => ip.filter((ip => ip !== pp))))
        }))
      };
      return (0, Dp.jsx)(Dp.Fragment, {
        children: Yp.map(((pp, ip) => {
          let {
            player: cp,
            status: Op
          } = pp;
          return (0, Dp.jsx)(Yi.g, {
            zIndex: Yp.length - ip,
            player: cp,
            status: Op,
            onSendFriendRequest: () => {
              Pp(cp.name)
            },
            actions: (0, Dp.jsx)(rp.f, {
              tooltipInner: (0, Dp.jsx)(Dp.Fragment, {
                children: Ip("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, Dp.jsx)(Wp.f, {
                className: "FriendRequestButton",
                disabled: xp.includes(cp.name),
                ariaLabel: `${Ip("recentPlayers:addFriend")} ${cp.name}`,
                onClick: () => {
                  Pp(cp.name)
                },
                children: (0, Dp.jsx)(wp.d, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${cp.name}`)
        }))
      })
    }
    var Pi = cp(36924),
      Wi = cp(36931),
      yi = cp(1234),
      Ui = cp(1518),
      wi = cp(4425),
      vi = cp(272),
      ti = cp(4699);
    const Hi = ["auto", "auto_existing"];

    function di(pp) {
      return Hi.includes(pp)
    }

    function ei(pp, ip) {
      const cp = (0, yi.rb)(pp);
      return null !== ip && (0, yi.rb)(ip) === cp || (0, ti.c)().some((pp => (0, yi.rb)(pp.name) === cp))
    }
    const ui = new Set;

    function ji(pp) {
      return `worldSocialSeen:${pp}`
    }

    function ki(pp) {
      return !pp || ui.has(pp) || !0 === Qp.h.getItem(ji(pp))
    }

    function mi(pp) {
      pp && !ui.has(pp) && (ui.add(pp), Qp.h.setItem(ji(pp), !0))
    }
    var Ri = cp(2508),
      qi = cp(2514);

    function Mi(pp) {
      let {
        show: ip,
        onClose: cp,
        opener: Op
      } = pp;
      const {
        lobbyName: Ip,
        shownLobbyName: xp
      } = (0, qp.g)("connectedGame");
      return (0, op.useEffect)((() => {
        ip && (0, oi.reportAnalyticsClick)({
          id: "world_social.open",
          value: Op
        })
      }), [ip]), (0, Dp.jsx)(Sp.c, {
        show: ip && null !== Ip,
        close: cp,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Op,
        children: ip && null !== Ip && (0, Dp.jsx)(Ci, {
          lobbyName: Ip,
          worldCode: null !== xp && void 0 !== xp ? xp : Ip,
          onClose: cp
        }, Ip)
      })
    }

    function Ci(pp) {
      var ip;
      let {
        lobbyName: cp,
        worldCode: Op,
        onClose: Ip
      } = pp;
      const {
        t: Sp
      } = (0, zp.H)(), xp = (0, op.useRef)(null), {
        settings: Lp,
        loading: Yp,
        answered: Ap,
        change: Pp,
        retry: yp
      } = (0, Ii.j)(cp), Up = (0, sp.o)(), vp = (0, qp.g)("players"), tp = (0, qp.g)("hiddenPlayerNames"), [Hp, dp] = (0, op.useState)([]), [ep, kp] = (0, op.useState)([]), [mp, Rp] = (0, op.useState)(!1), Cp = (0, Ri.e)(), Ep = (0, op.useMemo)((() => {
        var pp, ip;
        const cp = null === vp.localId ? null : null !== (pp = null === (ip = vp.byId[vp.localId]) || void 0 === ip ? void 0 : ip.name) && void 0 !== pp ? pp : null;
        return vp.ids.flatMap((pp => {
          const ip = vp.byId[pp];
          return null !== ip && void 0 !== ip && ip.name && ip.name !== cp ? [{
            name: ip.name,
            cosmetics: ip.cosmetics,
            ranks: ip.ranks
          }] : []
        }))
      }), [vp]), Xp = (0, op.useMemo)((() => (0, Si.h)(Up.friends, cp, Ep.map((pp => pp.name)))), [Up.friends, cp, Ep]), Qp = lp.featureFlags.canSeeRealPlayerNames ? Ep.filter((pp => null === (0, Oi.c)(pp.name, tp))) : [], Jp = null !== Lp && void 0 !== Lp && Lp.canManage ? Lp : null, Bp = null !== Jp, Np = null !== (ip = null === Lp || void 0 === Lp ? void 0 : Lp.visibility) && void 0 !== ip ? ip : null, Tp = "whitelist" === (null === Jp || void 0 === Jp ? void 0 : Jp.visibility), fp = "private" === Np || "whitelist" === Np && !Bp, {
        userContext: bp
      } = (0, jp.b)();
      (0, op.useEffect)((() => {
        Bp && ei(cp, bp.getPersonalWorldLobbyName()) && mi(bp.whamm)
      }), [Bp, cp, bp]);
      const hp = fp ? Sp("whitelist" === Np ? "socialBar:inviteWorldManagersOnly" : Bp ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        np = null === hp;
      (0, op.useEffect)((() => fp ? void 0 : ii.i.quietFriendAdded()), [fp]), (0, op.useEffect)((() => ii.i.quietFriendRequests()), []);
      const Di = (0, op.useRef)(!1);
      (0, op.useEffect)((() => {
        const pp = xp.current,
          ip = !Di.current;
        Di.current = !0;
        const cp = null === document.activeElement || document.activeElement === document.body;
        null !== pp && void 0 !== pp && pp.contains(document.activeElement) || !ip && !cp || (0, ap.g)() || null === pp || void 0 === pp || pp.focus({
          preventScroll: !0
        })
      }), [np]), (0, op.useEffect)((() => {
        const pp = pp => {
          "Escape" !== pp.key || null !== document.activeElement && document.activeElement !== document.body || Ip()
        };
        return document.addEventListener("keydown", pp), () => {
          document.removeEventListener("keydown", pp)
        }
      }), [Ip]);
      const yi = null === Lp && !Ap,
        Ui = (Yp || Up.loading) && 0 === Up.friends.length,
        wi = Up.friends.flatMap((pp => pp.name ? [pp.name] : [])),
        vi = Hp.filter((pp => !(0, Si.l)(wi, pp))),
        ti = Xp.length + 3,
        Hi = vi.length + ti,
        di = mp ? Up.requests : Up.requests.slice(0, 1),
        ui = async function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const cp of (0, Si.o)(pp, Fp.C)) {
            if (!await Pp({
                whitelistAdd: cp
              }, (pp => (0, Si.r)(pp, cp, !0)), {
                quiet: ip
              })) return !1
          }
          return !0
        }, ji = pp => {
          if (Tp && Jp) return {
            on: (0, Si.l)(Jp.whitelist, pp),
            onChange: ip => {
              (0, oi.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: ip ? "on" : "off"
              }), Pp(ip ? {
                whitelistAdd: [pp]
              } : {
                whitelistRemove: pp
              }, (cp => (0, Si.r)(cp, [pp], ip)))
            }
          }
        }, ki = async (pp, ip) => {
          (0, oi.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: ip
          });
          const cp = await (0, Vp.i)(pp, "world_social");
          return (0, Vp.b)(cp, pp, {
            announceSent: !1
          }), "failed" !== cp.kind && ("sent" === cp.kind && dp((ip => (0, Si.l)(ip, pp) ? ip : [...ip, pp])), Tp && await ui([pp]), !0)
        };
      return (0, Dp.jsxs)("div", {
        ref: xp,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: pp => {
          pp.target === pp.currentTarget && " " === pp.key && pp.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, Dp.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, Dp.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Sp("worldSocial:title")
          }), (0, Dp.jsx)(Wp.l, {
            className: "WorldSocialClose",
            onClick: Ip
          })]
        }), yi && (0, Dp.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, Dp.jsx)(Mp.c, {})
        }), !yi && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)(xi.c, {
            worldCode: Op,
            message: hp
          }), null === Lp && !Yp && (0, Dp.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: yp,
            children: Sp("worldSocial:loadFailed")
          }), Bp && null !== Np && (0, Dp.jsx)(Li.c, {
            visibility: Np,
            onPick: pp => {
              (async pp => {
                if (pp === Np) return;
                (0, oi.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: pp
                });
                const ip = [...(0, Wi.b)(cp), ...ep],
                  Op = "whitelist" === pp && Lp ? (0, Si.f)(Xp, ip, Lp.whitelist) : [];
                await Pp({
                  setVisibility: pp
                }, (ip => ({
                  ...ip,
                  visibility: pp
                }))) && await ui(Op)
              })(pp)
            }
          }), Up.requests.length > 0 && (0, Dp.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Dp.jsx)(Zp.c, {
              label: (0, Dp.jsxs)(Dp.Fragment, {
                children: [(0, Dp.jsx)(wp.d, {
                  name: ci.f
                }), " ", Sp("socialBar:requests")]
              }),
              meta: (0, Dp.jsxs)(Dp.Fragment, {
                children: [Up.requests.length, Up.requests.length === Gp.m && (0, Dp.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Sp("socialBar:limitReached")
                }), !mp && Up.requests.length > 1 && (0, Dp.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    Rp(!0)
                  },
                  children: Sp("worldSocial:moreRequests", {
                    count: Up.requests.length - 1
                  })
                })]
              })
            }), (0, Dp.jsx)("div", {
              className: "PlayerRows",
              children: di.map(((pp, ip) => (0, Dp.jsx)(Yi.g, {
                zIndex: di.length - ip,
                player: pp,
                actions: (0, Dp.jsxs)(Dp.Fragment, {
                  children: [(0, Dp.jsx)(rp.f, {
                    tooltipInner: (0, Dp.jsx)(Dp.Fragment, {
                      children: Sp("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Dp.jsx)(Wp.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Sp("general:accept")} ${pp.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Vp.e)(pp.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, Dp.jsx)(wp.d, {
                        name: "check"
                      })
                    })
                  }), (0, Dp.jsx)(rp.f, {
                    tooltipInner: (0, Dp.jsx)(Dp.Fragment, {
                      children: Sp("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, Dp.jsx)(Wp.j, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Sp("general:decline")} ${pp.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Vp.e)(pp.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, Dp.jsx)(wp.d, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${pp.name}`)))
            })]
          }), (0, Dp.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, Dp.jsx)(Zp.c, {
              label: (0, Dp.jsxs)(Dp.Fragment, {
                children: [(0, Dp.jsx)(wp.d, {
                  name: ci.c
                }), " ", Sp("socialBar:friends")]
              }),
              meta: Up.loaded && !fp ? Up.friends.length : void 0
            }), (0, Dp.jsx)(Pi.e, {
              label: Sp("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: Sp("worldSocial:addFriendPlaceholder"),
              onSubmit: async pp => await ki(pp, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), Ui && (0, Dp.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, Dp.jsx)(Mp.c, {})
            }), !Ui && (0, Dp.jsxs)(Dp.Fragment, {
              children: [(0, Dp.jsxs)("div", {
                className: "PlayerRows",
                children: [vi.map(((pp, ip) => (0, Dp.jsx)(Yi.g, {
                  zIndex: Hi - ip,
                  player: (0, Yi.j)(pp, null),
                  status: Sp("worldSocial:requestSent"),
                  LP: ji(pp)
                }, `request:${pp}`))), !fp && Xp.map(((pp, ip) => (0, Dp.jsx)(Yi.d, {
                  zIndex: ti - ip,
                  row: pp,
                  LP: ji(pp.friend.name),
                  canInvite: (0, Si.c)(Lp) && "here" !== pp.place,
                  invited: ep.includes(pp.friend.name),
                  onInvite: () => {
                    (async pp => {
                      (0, oi.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const ip = () => {
                        kp((ip => ip.filter((ip => ip !== pp))))
                      };
                      kp((ip => [...ip, pp]));
                      const Op = (0, Si.p)(Lp, pp);
                      if ("none" !== Op) {
                        const cp = ui([pp], "quiet" === Op);
                        if ("required" === Op && !await cp) return void ip()
                      }
                      await (0, Kp.n)(pp, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Wi.f)(cp, pp), setTimeout(ip, gp.p)) : ip()
                    })(pp.friend.name)
                  }
                }, pp.friend.name))), Up.loaded && 0 === Up.friends.length && (0, Dp.jsx)(Ai, {
                  playersHere: Qp,
                  exclude: Hp,
                  Lk: pp => ki(pp, "suggestion")
                })]
              }), Tp && Up.loaded && 0 === Up.friends.length && 0 === vi.length && (0, Dp.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Sp("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), Cp && (0, Dp.jsxs)(Wp.S, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, qi.f)({
              page: "players",
              source: "invite_popup"
            }), Ip()
          },
          children: [(0, Dp.jsx)(wp.d, {
            name: "users-gear"
          }), " ", Sp("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var Ei = cp(2534),
      Xi = cp(2499);

    function li(pp) {
      let {
        show: ip,
        onClose: cp,
        option: Op
      } = pp;
      const Ip = (0, qp.f)("connectedGame", (pp => (0, Ei.e)(pp) ? pp.lobbyName : null));
      return function(pp) {
        const {
          gameEntrySource: ip,
          loadingOverlayVisible: cp
        } = (0, bp.o)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Op
        } = (0, jp.b)(), Ip = (0, qp.g)("localPlayerAlive"), Sp = (0, qp.f)("players", (pp => null !== pp.localId && void 0 !== pp.byId[pp.localId])), xp = (0, Xi.n)(), Lp = (0, op.useRef)(null), Yp = (0, op.useRef)(null), Dp = "worldCreation" === ip, Ap = Op.whamm, Pp = Op.getPersonalWorldLobbyName();
        (0, op.useEffect)((() => {
          var ip;
          null !== pp && (null === (ip = Yp.current) || void 0 === ip ? void 0 : ip.lobbyName) !== pp && null !== Ni(pp, Dp, Ap, Pp) && (Yp.current = (0, Ii.g)(pp))
        }), [Dp, pp, Ap, Pp]), (0, op.useEffect)((() => {
          if (null !== pp && (!cp && Ip && Sp)) return xp.whenShown((() => {
            var ip;
            const cp = Lp.current === pp ? null : Ni(pp, Dp, Ap, Pp);
            if (null === cp) return;
            const Op = (null === (ip = Yp.current) || void 0 === ip ? void 0 : ip.lobbyName) === pp ? Yp.current : (0, Ii.g)(pp);
            Yp.current = null, Lp.current = pp,
              function(pp, ip, cp, Op) {
                const {
                  lobbyName: op
                } = pp, Ip = () => {
                  ! function(pp, ip) {
                    if (!ni()) return void ip(!0);
                    const cp = performance.now() + bi;
                    let Op = 0;
                    const op = () => {
                      Op = ni() ? 0 : Op + 1, Op >= 2 ? ip(!0) : !ai(pp) || performance.now() > cp ? ip(!1) : setTimeout(op, fi)
                    };
                    setTimeout(op, fi)
                  }(op, (Ip => {
                    Op();
                    const Sp = "auto_existing" === ip && ki(cp);
                    Ip && ai(op) && !Ji(op) && !Sp && (Ti(pp) ? Bi(op) : (Bi(op), mi(cp), function(pp) {
                      const ip = vi.d.world_social_popup_v1;
                      return (0, vi.l)("world_social_popup_v1"), (0, oi.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${ip}:${(0,wi.b)()}:${pp}`
                      }), (0, Ui.flushClientAnalyticsEvents)(), "auto_open" === ip
                    }(ip) && ((0, Ii.c)(pp), yp.m.GA("toggleMenu", `inviteLink|${ip}`), "inviteLink" !== bp.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === ip && !Ti(pp)) return void Ip();
                pp.response.then((pp => {
                  if (!("error" in pp)) return pp.settings.canManage ? void Ip() : (Bi(op), void Op());
                  Op()
                }))
              }(Op, cp, Ap, (() => {
                Lp.current === pp && (Lp.current = null)
              }))
          }))
        }), [xp, Dp, cp, pp, Ip, Sp, Ap, Pp])
      }(Ip), (0, op.useEffect)((() => {
        ip && null !== Ip && Bi(Ip)
      }), [ip, Ip]), null !== Ip ? (0, Dp.jsx)(Mi, {
        show: ip,
        onClose: cp,
        opener: di(Op) ? Op : "icon"
      }) : (0, Dp.jsx)(np.d, {
        show: ip,
        onClose: cp
      })
    }
    const Qi = new Set;

    function Ji(pp) {
      return Qi.has(pp) || !!Qp.l.getItem(`worldSocialShown:${pp}`)
    }

    function Bi(pp) {
      Qi.add(pp), Qp.l.setItem(`worldSocialShown:${pp}`, !0)
    }

    function Ni(pp, ip, cp, Op) {
      return Ji(pp) ? null : function(pp) {
        let {
          justMade: ip,
          playerId: cp,
          lobbyName: Op,
          personalWorld: op
        } = pp;
        return ip ? "auto" : !ki(cp) && ei(Op, op) ? "auto_existing" : null
      }({
        justMade: ip,
        playerId: cp,
        lobbyName: pp,
        personalWorld: Op
      })
    }

    function Ti(pp) {
      let {
        answer: ip
      } = pp;
      return null !== ip && "settings" in ip && !ip.settings.canManage
    }
    const fi = 500,
      bi = 3e4;

    function ai(pp) {
      return "inGame" === bp.c.get("gameState") && Yp.gameBridge.latest("connectedGame").lobbyName === pp
    }

    function ni() {
      return (0, ap.g)() || bp.c.get("loadingOverlayVisible") || (0, hp.l)()
    }
    var Fi = cp(36939),
      gi = cp(3250),
      Gi = cp(2012),
      ri = cp(3246);

    function Zi(pp, ip, cp) {
      return ri.d.overridesTexture(pp) ? ri.d.getTexture(pp, ip).url : cp
    }
    var zi = cp(10097);
    const si = (pp, ip) => {
        (0, op.useEffect)((() => {
          setTimeout((() => {
            pp && pp.current && pp.current.focus()
          }), 1)
        }), [ip])
      },
      Ki = (0, op.memo)((function(pp) {
        let {
          isInputActive: ip,
          onClose: cp,
          onChange: Op,
          textAreaRef: op,
          fontSize: Ip,
          lineHeight: Sp,
          currText: xp
        } = pp;
        return (0, Dp.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, Dp.jsx)("img", {
            src: Zi("board_full", gi.h.BLOCK, zi),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, Dp.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: xp,
            ref: op,
            style: {
              fontSize: `${Ip}rem`,
              lineHeight: `${Sp}rem`
            },
            onKeyDown: pp => {
              var ip;
              "Escape" !== pp.key && (pp.stopPropagation(), "Tab" === pp.key && function(pp) {
                pp.preventDefault();
                const ip = pp.target,
                  {
                    value: cp
                  } = ip;
                let Op = ip.selectionStart,
                  op = ip.selectionEnd,
                  Ip = cp.slice(Op, op);
                if (!Ip.includes("\n") && !pp.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Op > 0 && "\n" !== cp[Op - 1];) Op--;
                const Sp = "\n" === cp[op - 1];
                Sp && op--;
                Ip = cp.slice(Op, op);
                const xp = Ip.split("\n").map((ip => pp.shiftKey ? ip.replace(/^\t/, "") : "\t" + ip)).join("\n");
                if (pp.shiftKey && cp.slice(Op, op) === xp) return;
                let {
                  selectionStart: Lp
                } = ip;
                ip.setSelectionRange(Op, op), Lp > Op && (!pp.shiftKey || "\t" === Ip[0]) && (Lp += pp.shiftKey ? -1 : 1);
                op = Op + xp.length + (Sp ? 1 : 0), document.execCommand("insertText", !1, xp), ip.setSelectionRange(Lp, op)
              }(pp), /^F\d+$/i.test(pp.code) && null !== (ip = Gi.t.OpenCodeEditor) && void 0 !== ip && ip.includes(pp.code) && cp())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Op
          })]
        })
      }));

    function Vi(pp) {
      return 1.3 * pp
    }
    var pc = cp(1698);
    const ic = (0, op.memo)((function(pp) {
        let {
          show: ip,
          onOpen: cp,
          onClose: Op
        } = pp;
        const [Ip, xp] = (0, op.useState)(null), [Lp, Ap] = (0, op.useState)(""), [Pp, yp] = (0, op.useState)(0), [Up, wp] = (0, op.useState)(null), [vp, tp] = (0, op.useState)({
          text: "",
          textSize: 0
        }), Hp = (pp, ip) => Up ? (0, Fi.l)(pp, ip, Up.width, Up.height) : (0, Fi.h)(pp, ip), dp = pp => {
          Ap(Hp(Lp, pp)), yp(pp), Qp.h.setItem("lastBoardTextSize", pp)
        }, ep = () => {
          Op(), Up && Lp === vp.text && Pp === vp.textSize || Yp.gameBridge.send("writeOnBoard", {
            pos: Ip,
            text: Lp,
            textSize: Pp
          })
        };
        (0, qp.b)("boardEditRequested", (pp => {
          var op, Ip;
          if (!lp.featureFlags.canSeePlayerWrittenText) return;
          if (null === pp) return xp(null), void(ip && Op());
          const {
            pos: Sp,
            noticeboardSpan: Lp,
            text: Yp
          } = pp;
          xp(Sp), wp(Lp), Ap(Yp);
          const Dp = null !== (op = null !== (Ip = pp.textSize) && void 0 !== Ip ? Ip : Qp.h.getItem("lastBoardTextSize")) && void 0 !== op ? op : 0;
          yp(Dp), tp({
            text: Yp,
            textSize: Dp
          }), Qp.h.setItem("lastBoardTextSize", Dp), cp()
        }));
        const jp = (0, op.useRef)(null);
        si(jp, ip), (0, pc.m)(jp, {
          kind: "sign",
          submit: ep
        });
        const kp = function(pp, ip) {
            const cp = Fi.e[pp];
            if (!ip) return cp.uiFontSize;
            const {
              numLines: Op,
              charsPerLine: op
            } = (0, Fi.v)(ip.width, ip.height, pp);
            return cp.uiFontSize * Math.min(cp.charsPerLine / op, cp.numLines / Op)
          }(Pp, Up),
          mp = Vi(kp);
        return (0, Dp.jsxs)(Sp.c, {
          className: "WriteOnBoardBg",
          close: ep,
          escDoesExit: !0,
          show: ip,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Dp.jsx)(Ki, {
            isInputActive: () => ip,
            onClose: ep,
            onChange: pp => {
              Ap(Hp(pp.target.value, Pp))
            },
            textAreaRef: jp,
            fontSize: kp,
            lineHeight: mp,
            currText: Lp
          }), (0, Dp.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, Dp.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, Dp.jsx)(Wp.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                dp(0)
              },
              disabled: 0 === Pp,
              children: "Small"
            }), (0, Dp.jsx)(Wp.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                dp(1)
              },
              disabled: 1 === Pp,
              children: "Medium"
            }), (0, Dp.jsx)(Wp.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                dp(2)
              },
              disabled: 2 === Pp,
              children: "Large"
            })]
          })]
        })
      })),
      cc = (0, op.memo)((function(pp) {
        let {
          show: ip,
          onOpen: cp,
          onClose: Op
        } = pp;
        const [Ip, xp] = (0, op.useState)(""), Lp = () => {
          Op(), Yp.gameBridge.send("writeNameTag", Ip)
        };
        (0, mp.f)("EditNameTag", (pp => {
          lp.featureFlags.canSeePlayerWrittenText && null !== pp && (xp(pp), cp())
        }));
        const Ap = (0, op.useRef)(null);
        si(Ap, ip), (0, pc.m)(Ap, {
          kind: "nameTag",
          submit: Lp
        });
        const Pp = Fi.H.nameTag.uiFontSize,
          yp = Vi(Pp);
        return (0, Dp.jsxs)(Sp.c, {
          className: "WriteOnBoardBg",
          close: Lp,
          escDoesExit: !0,
          show: ip,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, Dp.jsx)("div", {
            className: "NameTagTrim",
            children: (0, Dp.jsx)(Ki, {
              isInputActive: () => ip,
              onClose: Lp,
              onChange: pp => {
                const ip = pp.target.value.replaceAll("\n", "");
                xp((0, Fi.p)(ip, "nameTag"))
              },
              textAreaRef: Ap,
              fontSize: Pp,
              lineHeight: yp,
              currText: Ip
            })
          }), (0, Dp.jsx)(Wp.f, {
            onClick: Lp,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Oc = cp(18309);
    const oc = (0, op.memo)((function(pp) {
      let {
        show: ip,
        onOpen: cp,
        onClose: Op
      } = pp;
      const [Ip, xp] = (0, op.useState)(""), [Lp, Ap] = (0, op.useState)(0), [Pp, yp] = (0, op.useState)(!1), [Up, wp] = (0, op.useState)(["", "", "", "", "", "", "", "", "", ""]), [vp, tp] = (0, op.useState)("Title"), [Hp, dp] = (0, op.useState)(!0), [ep, jp] = (0, op.useState)(!1);
      (0, mp.f)("EditBook", (pp => {
        let {
          pages: ip,
          title: Op,
          isPublished: op
        } = pp;
        var Ip;
        lp.featureFlags.canSeePlayerWrittenText && (null !== ip ? (wp(ip), xp(null !== (Ip = ip[0]) && void 0 !== Ip ? Ip : ""), tp(Op), Ap(0), yp(!1), dp(!op), jp(!1), cp()) : wp(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const kp = (0, op.useRef)(null),
        Rp = (0, op.useRef)(null);
      si(kp, ip), (0, pc.m)(kp, {
        kind: "book"
      }), (0, pc.m)(Rp, {
        kind: "Ux"
      });
      const qp = Fi.H.book.uiFontSize,
        Mp = Vi(qp),
        Cp = () => {
          (Hp || ep) && Yp.gameBridge.send("writeBook", {
            pages: [...Up],
            title: vp,
            published: !Hp && ep
          })
        },
        Ep = pp => {
          Pp && (Up[Lp] = Ip, yp(!1)), xp(Up[pp]), Ap(pp)
        };
      return (0, Dp.jsxs)(Sp.c, {
        className: "WriteOnBoardBg",
        close: () => {
          Op(), Up[Lp] = Ip, Cp()
        },
        escDoesExit: !0,
        show: ip,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, Dp.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, Dp.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: vp,
            ref: Rp,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Mp}rem`
            },
            onKeyDown: pp => {
              Hp && pp.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: pp => {
              let ip = pp.target.value;
              ip = (0, Fi.p)(ip, "Ux"), tp(ip)
            },
            readOnly: !Hp
          }), (0, Dp.jsx)("img", {
            src: Zi("book_page", gi.h.ITEM, Oc),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, Dp.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, Dp.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Ip,
              ref: kp,
              style: {
                fontSize: `${qp}rem`,
                lineHeight: `${Mp}rem`
              },
              onKeyDown: pp => {
                Hp && pp.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: pp => {
                const ip = pp.target.value;
                xp((0, Fi.p)(ip, "book")), yp(!0)
              },
              readOnly: !Hp
            })
          })]
        }), (0, Dp.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, Dp.jsx)(Wp.f, {
            disabled: 0 === Lp,
            onClick: () => {
              Ep(Lp - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, Dp.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Dp.jsx)(Wp.f, {
            disabled: 9 === Lp,
            onClick: () => {
              Ep(Lp + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, Dp.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, Dp.jsx)(Wp.f, {
            onClick: () => {
              dp(!Hp), jp(!0)
            },
            className: "BookNavButton",
            children: Hp ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var Ic = cp(36804),
      Sc = cp(8821),
      xc = cp(1419),
      Lc = cp(1941);

    function Yc(pp) {
      let {
        show: ip,
        buttons: cp
      } = pp;
      const {
        t: Op
      } = (0, zp.H)(), Ip = (0, op.useRef)(null);
      return (0, op.useEffect)((() => {
        var pp, cp;
        const Op = ip ? (0, Ic.E)() : null;
        if (!Op || !(0, xc.h)()) return;
        const op = (0, Ic.j)().findIndex((pp => pp.id === Op));
        (0, Sc.p)(null !== (pp = null === (cp = Ip.current) || void 0 === cp ? void 0 : cp.children[op]) && void 0 !== pp ? pp : null)
      }), [ip]), 0 === cp.length ? null : (0, Dp.jsx)("div", {
        ref: Ip,
        className: "ClientGameInventoryButtons",
        onPointerDown: pp => {
          pp.stopPropagation()
        },
        onPointerUp: pp => {
          pp.stopPropagation()
        },
        children: cp.map((pp => {
          const ip = Op(pp.labelKey);
          return (0, Dp.jsxs)(Wp.o, {
            className: pp.className,
            disabled: pp.disabled,
            onClick: () => {
              (0, Ic.u)(pp)
            },
            ariaLabel: pp.iconOnly ? ip : void 0,
            title: pp.iconOnly ? ip : void 0,
            children: [pp.icon && (0, Dp.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === pp.icon.kind && (0, Dp.jsx)(Lc.d, {
                itemName: pp.icon.name,
                amount: 0
              }), "image" === pp.icon.kind && (0, Dp.jsx)("img", {
                src: pp.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === pp.icon.kind && (0, Dp.jsx)(wp.d, {
                name: pp.icon.name
              })]
            }), !pp.iconOnly && ip]
          }, pp.id)
        }))
      })
    }
    var Dc = cp(36942),
      Ac = cp(2829),
      Pc = cp(34443),
      Wc = cp(36724),
      yc = cp(36718);
    let Uc = null;
    window.setShowInventoryAdsOverride = pp => {
      Uc = pp
    };
    const wc = 24e4;
    var vc = cp(1948);

    function tc(pp) {
      var ip;
      let {
        draggedInfo: {
          name: cp,
          attributes: Op,
          amount: op
        },
        toAddRef: Ip
      } = pp;
      return (0, Dp.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Ip,
        children: (0, Dp.jsx)(Lc.d, {
          itemName: cp,
          amount: op,
          enchantmentTier: null === Op || void 0 === Op || null === (ip = Op.customAttributes) || void 0 === ip ? void 0 : ip.enchantmentTier,
          bar: (0, vc.i)(Op)
        })
      })
    }

    function Hc(pp) {
      let {
        className: ip = "",
        displayInfo: cp,
        domRef: Op
      } = pp;
      return (0, Dp.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${ip}`,
        ref: Op,
        children: [(0, Dp.jsx)(kp.e, {
          text: (0, Rp.sb)(cp.name, {
            fontStyle: cp.fontStyle
          })
        }), (0, Dp.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, Dp.jsx)(kp.e, {
            text: cp.desc
          })
        })]
      })
    }

    function dc(pp) {
      let {
        info: ip,
        draggedInfo: cp
      } = pp;
      const Op = (0, op.useRef)(null);
      return (0, op.useLayoutEffect)((() => {
        const pp = Op.current,
          {
            left: cp,
            top: op
          } = function(pp, ip, cp, Op) {
            const op = Op.left * cp.width / 100 + 4,
              Ip = cp.width - Op.right * cp.width / 100 - 4 - ip.width,
              Sp = Op.top * cp.height / 100 + 4,
              xp = cp.height - 4 - ip.height;
            return {
              left: Math.max(op, Math.min(pp.x - ip.width / 2, Ip)),
              top: Math.max(Sp, Math.min(pp.y - 48 - ip.height, xp))
            }
          }({
            x: ip.initTouchX,
            y: ip.initTouchY
          }, {
            width: pp.offsetWidth,
            height: pp.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, bp.c.get("notchSize"));
        pp.style.left = `${cp}px`, pp.style.top = `${op}px`
      }), [ip]), (0, Dp.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Op,
        children: [(0, Dp.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: cp.amount / ip.maxAmount * 100 + "%"
          }
        }), (0, Dp.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [cp.amount, "/", ip.maxAmount]
        })]
      })
    }
    var ec = cp(1049),
      uc = cp.n(ec),
      jc = cp(195);
    const kc = (0, op.memo)((function(pp) {
      let {
        show: ip,
        onOpen: cp,
        onClose: Op
      } = pp;
      const Ip = (0, op.useRef)({
          pos: null
        }),
        [xp, Lp] = (0, op.useState)([0, 0, 0, 0]),
        {
          userContext: Ap
        } = (0, jp.b)();
      (0, qp.b)("ironChestOpenRequested", (pp => {
        let {
          pos: ip,
          ownerDbId: Op,
          cachedPasskey: op
        } = pp;
        if (Ip.current.pos = ip, Op !== Ap.whamm) return null !== op ? (Lp(op), void Pp(op)) : void cp();
        Pp(xp)
      })), (0, qp.b)("localEffectUpdated", (pp => {
        "Thief" === pp && Op()
      }));
      const Pp = pp => {
        const {
          pos: ip
        } = Ip.current;
        Yp.gameBridge.send("openIronChest", {
          pos: ip,
          Zx: pp
        })
      };
      return (0, Dp.jsx)(Sp.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Op,
        escDoesExit: !0,
        show: ip,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, Dp.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, Dp.jsx)(mc, {
            Zx: xp,
            onPasskeyUpdated: Lp,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Pp(xp)
            }
          })
        })
      })
    }));

    function mc(pp) {
      let {
        className: ip = "",
        Zx: cp,
        onPasskeyUpdated: Op,
        confirmText: op,
        onConfirm: Ip
      } = pp;
      const {
        t: Sp
      } = (0, zp.H)();
      return (0, Dp.jsxs)("div", {
        className: `${ip} IronChestPasskeyInput`,
        children: [(0, Dp.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Sp("ironChest:passkeyInputTitle")
        }), (0, Dp.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(jc.g.ironChestPasskeyLength).fill(0).map(((pp, ip) => (0, Dp.jsx)(Rc, {
            digit: cp[ip],
            onPasskeyDigitUpdated: pp => {
              const op = [...cp];
              op[ip] = pp, Op(op)
            }
          }, ip)))
        }), (0, Dp.jsx)(Wp.o, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Ip,
          children: Sp(op)
        })]
      })
    }

    function Rc(pp) {
      let {
        digit: ip,
        onPasskeyDigitUpdated: cp
      } = pp;
      return (0, Dp.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, Dp.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, Dp.jsx)(Wp.o, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              cp(Rp.d.mod(ip + 1, 10))
            },
            children: (0, Dp.jsx)(wp.d, {
              name: "angle-up"
            })
          }), (0, Dp.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: ip
          }), (0, Dp.jsx)(Wp.o, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              cp(Rp.d.mod(ip - 1, 10))
            },
            children: (0, Dp.jsx)(wp.d, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var qc = cp(34438),
      Mc = cp(37010),
      Cc = cp(36713);

    function Ec(pp) {
      let {
        specialItemInfo: ip,
        setHovered: cp,
        pointerDown: Op,
        pointerUp: Ip,
        enchantingTablePosition: Sp,
        enchantingTableBlockName: xp
      } = pp;
      const {
        t: Ap
      } = (0, zp.H)(), [Pp, yp] = (0, op.useState)(null), [Up, wp] = (0, op.useState)(null), vp = (0, Lp.i)("auraPerLevel"), tp = Math.floor((0, qp.g)("aura") / vp);
      (0, op.useEffect)((() => {
        if (!ip) return void yp(null);
        let pp = !0;
        return Yp.gameBridge.query("enchantingOffer", {
          slot: ip.idx,
          name: ip.name,
          blockName: xp
        }).then((cp => {
          var Op, op;
          let {
            perks: Ip,
            options: Sp
          } = cp;
          if (!pp) return;
          const xp = {
            isEnchantable: Ip.length > 0,
            possibleEnchantments: Ip,
            options: Sp.map((pp => {
              let {
                level: ip,
                odds: cp
              } = pp;
              return {
                level: ip,
                possibilities: Object.fromEntries(cp.map(((pp, ip) => [`Tier ${ip+1}`, pp])))
              }
            })),
            isAlreadyEnchanted: Ip.length > 0 && void 0 !== (null === (Op = ip.attributes) || void 0 === Op || null === (op = Op.customAttributes) || void 0 === op ? void 0 : op.enchantmentTier)
          };
          yp(xp), (pp => {
            const ip = pp.options.map((pp => Object.entries(pp.possibilities).map((pp => {
              let [ip, cp] = pp;
              return {
                str: `${ip}: ${cp>0?cp<.01?cp.toPrecision(1):cp.toFixed(2):0}%\n`,
                style: {
                  color: Rp.lb[ip]
                }
              }
            }))));
            wp(ip)
          })(xp)
        })), () => {
          pp = !1
        }
      }), [ip, Sp, xp]);
      const Hp = [];
      for (let op = 0; op < Mc.d; op++) {
        const pp = null === Pp || void 0 === Pp ? void 0 : Pp.options[op],
          Op = !pp || pp.level > tp;
        Hp.push((0, Dp.jsx)(Wp.f, {
          className: "EnchantmentButton",
          onPointerEnter: pp ? pp => null === cp || void 0 === cp ? void 0 : cp()(!0, {
            name: "",
            desc: Up[op]
          }, pp) : void 0,
          onPointerLeave: pp ? () => null === cp || void 0 === cp ? void 0 : cp()(!1) : void 0,
          onClick: Op ? void 0 : () => {
            Yp.gameBridge.send("enchantItem", {
              slot: ip.idx,
              level: pp.level,
              tablePos: Sp
            }), yp(null)
          },
          disabled: Op,
          children: pp ? (0, Dp.jsxs)(Dp.Fragment, {
            children: [(0, Dp.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, Dp.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Ap("enchantments:cost"), ": "]
              }), " ", Ap("enchantments:levels", {
                level: pp.level
              })]
            }), (0, Dp.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, Dp.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Dp.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Ap("enchantments:tier")
                }), Object.entries(pp.possibilities).map((pp => {
                  let [ip, cp] = pp;
                  return 0 === cp ? null : (0, Dp.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Rp.lb[ip]
                    },
                    children: ip
                  }, ip)
                }))]
              }), (0, Dp.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, Dp.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Ap("enchantments:odds")
                }), Object.entries(pp.possibilities).map((pp => {
                  let [ip, cp] = pp;
                  return 0 === cp ? null : (0, Dp.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Rp.lb[ip]
                    },
                    children: [cp > 0 && cp < .1 ? "<0.1" : cp.toFixed(0 < cp && cp < .95 ? 1 : 0), "%"]
                  }, ip)
                }))]
              })]
            })]
          }) : !1 === (null === Pp || void 0 === Pp ? void 0 : Pp.isEnchantable) ? (0, Dp.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Ap("enchantments:notEnchantable")
          }) : (0, Dp.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Ap("enchantments:enterItem")
          })
        }, op))
      }
      return (0, Dp.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, Dp.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: xp
        }), (0, Dp.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, Dp.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, Dp.jsx)(Cc.e, {
              idx: yc.f,
              setHovered: pp => {
                null === cp || void 0 === cp || cp(yc.f)(pp)
              },
              pointerDown: Op,
              pointerUp: Ip,
              draggedInfo: null,
              specialItemInfo: ip,
              variation: "Enchanting Table"
            }), Pp && Pp.possibleEnchantments.length > 0 && (0, Dp.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, Dp.jsx)("h2", {
                children: "Possible Perks:"
              }), Pp.possibleEnchantments.map((pp => (0, Dp.jsxs)(op.Fragment, {
                children: [(0, Dp.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, Dp.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, Dp.jsx)(Lc.d, {
                      itemName: `${pp} Enchantment`,
                      amount: 1
                    })
                  }), (0, Dp.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: pp
                  })]
                }), (0, Dp.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Ap((0, qc.m)(pp).translationKey)
                })]
              }, pp)))]
            })]
          }), (0, Dp.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Pp && Pp.isAlreadyEnchanted && (0, Dp.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Ap("enchantments:alreadyEnchanted")
            }), Hp]
          })]
        })]
      })
    }
    var Xc = cp(37019);

    function lc(pp) {
      var ip;
      let {
        specialItemInfo: cp,
        setSpecialItemInfo: Op,
        setHovered: Ip,
        pointerDown: Sp,
        pointerUp: xp
      } = pp;
      const {
        t: Lp
      } = (0, zp.H)(), Ap = (0, qp.f)("inventory", (pp => pp.freeSlots)), [Pp, yp] = (0, op.useState)(null);
      (0, op.useEffect)((() => {
        if (cp) {
          const pp = (0, Xc.b)(cp.name, cp.amount);
          yp({
            salvageable: !!pp,
            produces: pp
          })
        } else yp(null)
      }), [cp, null === cp || void 0 === cp ? void 0 : cp.name, null === cp || void 0 === cp ? void 0 : cp.amount]);
      const Up = !!cp && !(null === Pp || void 0 === Pp || !Pp.salvageable) && !(null !== (ip = Pp.produces) && void 0 !== ip && ip.some((pp => {
        let {
          amt: ip
        } = pp;
        return ip < 1
      })));
      return (0, Dp.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, Dp.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Lp("item:salvagingTable")
        }), (0, Dp.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, Dp.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, Dp.jsx)(Cc.e, {
              idx: yc.f,
              setHovered: pp => {
                null === Ip || void 0 === Ip || Ip(yc.f)(pp)
              },
              pointerDown: Sp,
              pointerUp: xp,
              draggedInfo: null,
              specialItemInfo: cp,
              variation: "Salvaging Table"
            })
          }), (0, Dp.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, Dp.jsx)(Wp.f, {
              className: "SalvageButton",
              onClick: Up ? () => {
                const {
                  idx: pp,
                  name: ip,
                  amount: op
                } = cp;
                Yp.gameBridge.send("salvageItem", {
                  slot: pp,
                  name: ip,
                  amount: op
                }) && (yp(null), Op(null))
              } : void 0,
              disabled: !Up,
              children: Pp ? Pp.salvageable ? Pp.produces.some((pp => {
                let {
                  amt: ip
                } = pp;
                return ip < 1
              })) ? (0, Dp.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Dp.jsx)("div", {
                  className: "SalvageText Error",
                  children: Lp("salvagingTable:notEnoughResources")
                })
              }) : Ap < Pp.produces.length ? (0, Dp.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Dp.jsx)("div", {
                  className: "SalvageText Error",
                  children: Lp("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, Dp.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, Dp.jsx)("div", {
                  className: "SalvageText",
                  children: Lp("salvagingTable:salvage")
                }), (0, Dp.jsx)("div", {
                  className: "SalvageIcons",
                  children: Pp.produces.map(((pp, ip) => {
                    let {
                      item: cp,
                      amt: Op
                    } = pp;
                    return (0, Dp.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: cp,
                        amount: Math.floor(Op)
                      })
                    }, ip)
                  }))
                })]
              }) : (0, Dp.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, Dp.jsx)("div", {
                  className: "SalvageText Error",
                  children: Lp("salvagingTable:unsalvageable")
                })
              }) : (0, Dp.jsx)(Dp.Fragment, {})
            })
          })]
        })]
      })
    }
    var Qc = cp(209),
      Jc = cp(9338),
      Bc = cp(2779),
      Nc = cp(1692),
      Tc = cp(8828),
      fc = cp(8826),
      bc = cp(1677),
      hc = cp(2036),
      ac = cp(1432),
      nc = cp(2106);

    function Fc(pp, ip, cp) {
      const Op = pp.trim().toLowerCase();
      if ("" === Op) return 0;
      let op = null;
      for (const Ip of ip) {
        const pp = Ip.toLowerCase().indexOf(Op);
        if (0 === pp) return 0;
        pp > 0 && (op = 1)
      }
      if (null !== op) return op;
      for (const Ip of cp)
        if (Ip.toLowerCase().includes(Op)) return 2;
      return null
    }

    function gc(pp) {
      return pp.map((pp => {
        var ip;
        return pp ? {
          name: pp.name,
          amount: null !== (ip = pp.amount) && void 0 !== ip ? ip : 1
        } : null
      }))
    }

    function Gc(pp) {
      return pp < 1e3 ? `${pp}` : pp < 1e4 ? Math.floor(pp / 100) / 10 + "k" : `${Math.floor(pp/1e3)}k`
    }
    var rc = cp(37021);
    const Zc = Wp.f,
      zc = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      sc = () => {
        const pp = (0, ac.f)();
        return pp ? pp.getPadRepeatTiming(zc) : zc
      };

    function Kc(pp, ip, cp) {
      var Op, op;
      const Ip = (0, Pc.w)(ip, pp);
      let Sp = null === (Op = ip[pp]) || void 0 === Op ? void 0 : Op.description;
      if (cp && (null === (op = (0, rc.d)().get(pp)) || void 0 === op || !op.hideIngredients)) {
        Sp ? (Sp = (0, Rp.sb)(Sp), Sp.push({
          str: "\n"
        })) : Sp = [], Sp.push({
          str: "\n"
        }), Sp.push({
          str: "Can be crafted from:\n"
        });
        for (const pp of cp) "string" === typeof pp && (Sp.push({
          icon: pp,
          style: {
            fontSize: "1.5em"
          }
        }), Sp.push({
          str: " "
        }), Sp.push(...(0, Rp.sb)((0, Pc.w)(ip, pp))), Sp.push({
          str: "\n"
        }))
      }
      return {
        name: Ip,
        desc: Sp
      }
    }

    function Vc(pp) {
      let {
        name: ip,
        FD: cp
      } = pp;
      return `${ip}_${cp}`
    }

    function pO(pp) {
      var ip;
      let {
        onClick: cp,
        itemName: Op,
        recipeId: Ip,
        isSelected: Sp,
        haveIngredients: xp,
        craftable: Lp,
        setHovered: Yp,
        padActions: Ap,
        marked: Pp,
        lock: Wp,
        itemInfo: yp
      } = pp;
      const Up = (0, op.useRef)(null);
      return (0, Tc.e)(Up, {
        press: pp => !xp || "secondary" === pp && !Lp ? (Ap.refuse(), !1) : "primary" === pp ? (Ap.choose(), !0) : Ap.craft(),
        release: Ap.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, Dp.jsxs)("div", {
        ref: Up,
        className: uc()("InvenItem", {
          CraftableItemNotEnoughIngredients: !xp && !Wp,
          CraftableItemMarked: Pp,
          CraftableItemLocked: void 0 !== Wp,
          CraftableItemLockedFar: (null !== (ip = null === Wp || void 0 === Wp ? void 0 : Wp.stepsAway) && void 0 !== ip ? ip : 1) > 1
        }),
        "data-recipe-key": Ip,
        "data-pad-inventory-default": Sp ? "" : void 0,
        onClick: cp,
        style: {
          cursor: Sp ? null : "pointer"
        },
        onPointerEnter: pp => {
          null === Yp || void 0 === Yp || Yp(!0, Kc(Op, yp)), !Sp && (0, bc.v)(pp.nativeEvent) && (0, fc.i)() && cp()
        },
        onPointerLeave: () => {
          null === Yp || void 0 === Yp || Yp(!1)
        },
        children: [(0, Dp.jsx)(Lc.d, {
          itemName: Op,
          amount: 1
        }), Pp && (0, Dp.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Wp && (0, Dp.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, Dp.jsx)(wp.d, {
            name: "lock"
          }), (0, Dp.jsx)(kp.e, {
            text: Wp.tag
          })]
        })]
      })
    }

    function iO(pp) {
      let {
        idx: ip,
        status: cp,
        shownItem: Op,
        dim: Ip,
        onHoverStart: Sp,
        onHoverEnd: xp,
        onPadBack: Lp
      } = pp;
      const Yp = (0, op.useRef)(null);
      (0, Tc.e)(Yp, {
        press: () => !1,
        back: Lp,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Ap = cp.need > 0 ? Math.min(cp.have / cp.need, 1) : 1;
      return (0, Dp.jsxs)("div", {
        ref: Yp,
        className: uc()("CupTile", {
          Short: cp.missing > 0
        }),
        style: {
          width: Ip,
          height: Ip
        },
        "data-craft-ingredient": ip,
        onPointerEnter: Sp,
        onPointerLeave: xp,
        children: [(0, Dp.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Ap})`
          }
        }), (0, Dp.jsx)(Lc.d, {
          itemName: Op,
          amount: 0
        }), (0, Dp.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Gc(cp.have), "/", Gc(cp.need)]
        })]
      })
    }

    function cO(pp) {
      var ip, cp, Op, Ip, Sp;
      let {
        show: xp,
        recipeItem: {
          name: Lp,
          FD: Ap,
          requires: Pp,
          produces: Wp,
          haveIngredients: yp
        },
        detail: Up,
        onCraft: wp,
        setHovered: vp,
        craftButtonRef: tp,
        onPadBack: Hp,
        showPadShortcut: dp,
        refusedCount: ep,
        lock: jp,
        itemInfo: mp
      } = pp;
      const {
        t: Rp
      } = (0, zp.H)(), qp = null !== Up && !Up.roomForOne, Mp = null !== (ip = null === Up || void 0 === Up ? void 0 : Up.craftAllTimes) && void 0 !== ip ? ip : 0, Cp = function(pp, ip) {
        return pp.map((pp => {
          let {
            items: cp,
            amt: Op
          } = pp, op = 0;
          const Ip = [];
          for (const Sp of cp) {
            const pp = ip(Sp);
            op += pp, pp > 0 && Ip.push(Sp)
          }
          return 0 === Ip.length && Ip.push(cp[0]), {
            shownItems: Ip,
            need: Op,
            have: op,
            missing: Math.max(Op - op, 0)
          }
        }))
      }(Pp, (pp => {
        var ip;
        return null !== (ip = null === Up || void 0 === Up ? void 0 : Up.amounts[pp]) && void 0 !== ip ? ip : 0
      }));
      let Ep = "4rem",
        Xp = 4;
      3 === Pp.length || 4 === Pp.length ? Ep = "3.75rem" : Pp.length >= 5 && (Ep = "3rem"), 4 === Pp.length ? Xp = 2 : Pp.length <= 6 && (Xp = 3);
      const lp = `calc(${Xp} * ${Ep} + ${Xp-1} * 0.4rem + 1px)`,
        Qp = (0, op.useRef)(null),
        Jp = (0, op.useRef)(null);
      (0, op.useLayoutEffect)((() => {
        Qp.current.scrollTop = 0
      }), [Lp, Ap]);
      const Bp = (0, op.useRef)(ep);
      (0, op.useEffect)((() => {
        if (ep === Bp.current) return;
        Bp.current = ep;
        const pp = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Op of null !== (ip = null === (cp = Qp.current) || void 0 === cp ? void 0 : cp.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== ip ? ip : []) {
          var ip, cp;
          Op.animate(pp, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [ep]);
      const Np = (pp, ip, cp) => {
          var Op;
          if ((0, rc.d)().has(Lp)) return void(cp && clearInterval(Tp.current));
          const op = null !== (Op = null === Up || void 0 === Up ? void 0 : Up.resultStackable) && void 0 !== Op && Op,
            Ip = gc(Yp.gameBridge.latest("inventory").player),
            {
              gD: Sp,
              eL: xp,
              amountAddedToSlot: Dp
            } = Yp.gameBridge.send("craftRecipe", {
              name: Lp,
              FD: Ap,
              times: ip || pp && op ? null : 1
            });
          if (Sp > 0) {
            const ip = [],
              Op = new Set(Pp.flatMap((pp => {
                let {
                  items: ip
                } = pp;
                return ip
              }))),
              Sp = function(pp, ip, cp) {
                const Op = [];
                for (let op = 0; op < pp.length; op++) {
                  const Ip = pp[op];
                  if (!Ip || !cp.has(Ip.name)) continue;
                  const Sp = ip[op],
                    xp = (null === Sp || void 0 === Sp ? void 0 : Sp.name) === Ip.name ? Sp.amount : 0;
                  xp < Ip.amount && Op.push({
                    idx: op,
                    itemName: Ip.name,
                    amount: Ip.amount - xp
                  })
                }
                return Op
              }(Ip, gc(Yp.gameBridge.latest("inventory").player), Op).slice(0, 12),
              Ap = cp ? 0 : Math.min(50, 400 / Sp.length),
              yp = cp ? 220 : 320;
            for (const pp of Sp) {
              var Wp;
              const cp = Pp.findIndex((ip => {
                  let {
                    items: cp
                  } = ip;
                  return cp.includes(pp.itemName)
                })),
                Op = null === (Wp = Qp.current) || void 0 === Wp ? void 0 : Wp.querySelector(`[data-craft-ingredient="${cp}"]`),
                op = (0, Pc.e)(pp.idx);
              Op && op && ip.push({
                kind: "ingredient",
                itemName: pp.itemName,
                amount: pp.amount,
                eL: pp.idx,
                from: op,
                to: (0, Pc.e)(Op),
                delayMs: Math.round(ip.length * Ap),
                durationMs: yp
              })
            }
            let Up;
            if (null !== xp && Dp > 0 && Jp.current) {
              const pp = ip.length > 0 ? ip[ip.length - 1].delayMs + .6 * yp : 0;
              Up = {
                itemName: Lp,
                amount: Dp,
                eL: xp,
                from: (0, Pc.e)(Jp.current),
                delayMs: Math.round(pp)
              }
            }
            wp(Up, pp && !op ? xp : null, ip), Dc.b.play("wood1", .5).rate(1.75)
          }
        },
        Tp = (0, op.useRef)(null);
      (0, op.useEffect)((() => () => {
        clearInterval(Tp.current)
      }), []);
      const fp = (pp, ip) => {
          Np(pp, !1, !1), clearInterval(Tp.current), ip && (Tp.current = setTimeout((() => {
            Tp.current = setInterval((() => {
              Np(pp, !1, !0)
            }), ip.intervalMs)
          }), ip.initialDelayMs))
        },
        bp = () => {
          clearInterval(Tp.current)
        },
        hp = !yp || qp || Boolean(jp),
        ap = (0, op.useRef)(null),
        np = null !== (cp = null === (Op = (0, nc.b)()) || void 0 === Op ? void 0 : Op.hideButtonHints) && void 0 !== cp && cp,
        Fp = null !== (Ip = null === (Sp = (0, ac.f)()) || void 0 === Sp ? void 0 : Sp.getBoundButton("inventorySecondary")) && void 0 !== Ip ? Ip : null,
        gp = () => !hp && (Np(!1, !0, !1), !0);
      (0, Tc.e)(tp, {
        press: pp => "secondary" === pp ? gp() : !hp && (fp(!1, sc()), !0),
        release: bp,
        back: Hp,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, Tc.e)(ap, {
        press: gp,
        back: Hp,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [Gp, rp] = (0, op.useState)(0), [Zp, sp] = (0, op.useState)(null);
      (0, op.useEffect)((() => {
        if (!0 === xp) {
          rp(0);
          const pp = setInterval((() => {
            rp((pp => pp + 1))
          }), 1e3);
          return () => {
            clearInterval(pp)
          }
        }
        return () => {}
      }), [xp]);
      const Kp = null === Up || void 0 === Up ? void 0 : Up.ingredientsCraftedFrom,
        Vp = (0, op.useRef)(vp);
      (0, op.useEffect)((() => {
        Vp.current = vp
      }), [vp]);
      const ii = !(null === jp || void 0 === jp || !jp.hideIngredients);
      (0, op.useEffect)((() => {
        var pp, ip;
        if (!Zp) return;
        if (ii) return sp(null), void(null === (ip = Vp.current) || void 0 === ip || ip.call(Vp, !1));
        const cp = Zp[Gp % Zp.length];
        null === (pp = Vp.current) || void 0 === pp || pp.call(Vp, !0, Kc(cp, mp, null === Kp || void 0 === Kp ? void 0 : Kp[cp]))
      }), [Zp, Gp, mp, Kp, ii]);
      const ci = !!jp,
        Oi = (0, op.useRef)(!1);
      (0, op.useEffect)((() => {
        var pp;
        ci && (clearInterval(Tp.current), ii && Oi.current && (Oi.current = !1, null === (pp = Vp.current) || void 0 === pp || pp.call(Vp, !1)))
      }), [ci, ii]);
      const oi = (0, Pc.w)(mp, Lp);
      return (0, Dp.jsxs)("div", {
        ref: Qp,
        className: "CraftableInfo SmallTextBold",
        children: [(0, Dp.jsx)("div", {
          className: "CraftableHeader",
          children: (0, Dp.jsx)(kp.e, {
            text: oi
          })
        }), !ii && (0, Dp.jsx)("div", {
          className: uc()("CraftableIngredients", {
            Compact: Pp.length >= 5
          }),
          style: {
            maxWidth: lp
          },
          children: Cp.map(((pp, ip) => {
            const cp = pp.shownItems[Gp % pp.shownItems.length];
            return (0, Dp.jsx)(iO, {
              idx: ip,
              status: pp,
              shownItem: cp,
              dim: Ep,
              onHoverStart: () => {
                sp(pp.shownItems)
              },
              onHoverEnd: () => {
                sp(null), null === vp || void 0 === vp || vp(!1)
              },
              onPadBack: Hp
            }, ip)
          }))
        }), jp && (0, Dp.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, Dp.jsx)(kp.e, {
            text: jp.reason
          })
        }), !jp && (!yp || qp) && (0, Dp.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!yp && "Missing ingredients", (0, Dp.jsx)("br", {}), qp && "Inventory is full"]
        }), !ii && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsxs)(Zc, {
            ref: tp,
            className: "DoCraftButton",
            onPointerDown: pp => {
              fp((0, Pc.x)(pp), (0, bc.v)(pp.nativeEvent) ? sc() : zc)
            },
            onPointerUp: bp,
            onPointerLeave: bp,
            disabled: hp,
            children: [dp && Fp && !hp && !np && (0, Dp.jsx)(hc.e, {
              className: "CraftShortcutGlyph",
              glyph: Fp
            }), (0, Dp.jsx)("div", {
              ref: Jp,
              className: "DoCraftItem",
              onPointerEnter: () => {
                Oi.current = !0, null === vp || void 0 === vp || vp(!0, Kc(Lp, mp))
              },
              onPointerLeave: () => {
                Oi.current = !1, null === vp || void 0 === vp || vp(!1)
              },
              children: (0, Dp.jsx)(Lc.d, {
                itemName: Lp,
                amount: Wp
              })
            })]
          }), (0, Dp.jsxs)(Zc, {
            ref: ap,
            className: "DoCraftAllButton",
            onPointerDown: pp => {
              Np((0, Pc.x)(pp), !0, !1)
            },
            disabled: hp,
            children: [(0, Dp.jsx)("span", {
              className: "CraftAllLabel",
              children: Rp("general:craftAll")
            }), Mp > 0 && (0, Dp.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Gc(Mp)]
            })]
          })]
        })]
      })
    }

    function OO(pp) {
      let {
        selectedIdx: ip,
        hidden: cp
      } = pp;
      const Op = (0, xc.r)(),
        Ip = (0, op.useRef)(null);
      return (0, op.useLayoutEffect)((() => {
        const pp = Ip.current,
          Op = null === pp || void 0 === pp ? void 0 : pp.parentElement;
        if (!Op || !pp) return;
        const op = Op.querySelector(".CraftableItems"),
          Sp = () => {
            var Ip, Sp;
            if (cp) return void(pp.style.opacity = "0");
            const xp = null === op || void 0 === op ? void 0 : op.children[ip],
              Lp = null === (Ip = null !== (Sp = null === xp || void 0 === xp ? void 0 : xp.querySelector(".InvenItem")) && void 0 !== Sp ? Sp : xp) || void 0 === Ip ? void 0 : Ip.getBoundingClientRect();
            if (!Lp || 0 === Lp.width) return void(pp.style.opacity = "0");
            const Yp = Op.getBoundingClientRect();
            pp.style.opacity = "1", pp.style.width = `${Lp.width}px`, pp.style.height = `${Lp.height}px`, pp.style.transform = `translate(${Lp.left-Yp.left+Op.scrollLeft}px, ${Lp.top-Yp.top+Op.scrollTop}px)`
          };
        Sp();
        const xp = new MutationObserver(Sp),
          Lp = new ResizeObserver(Sp);
        return Lp.observe(Op), op && (xp.observe(op, {
          childList: !0,
          subtree: !0
        }), Lp.observe(op)), () => {
          xp.disconnect(), Lp.disconnect()
        }
      }), [ip, cp]), (0, Dp.jsx)("div", {
        ref: Ip,
        className: uc()("SelectionReticle", {
          Secondary: Op
        })
      })
    }

    function oO(pp, ip, cp) {
      return pp ? (0, Qc.e)(Jc.e, pp) ? IO(pp, ip, cp) : pp : cp("classicGame:handCrafting")
    }

    function IO(pp, ip, cp) {
      var Op;
      const op = null === (Op = ip[pp]) || void 0 === Op ? void 0 : Op.displayName;
      if ("string" === typeof op) return cp(op);
      const Ip = Yp.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(op) ? op.map((pp => {
        if ("string" === typeof pp) return pp;
        if ("translationKey" in pp) return cp(pp.translationKey, (0, zp.t)(pp.params, Ip));
        if ("str" in pp) {
          if ("string" === typeof pp.str) return pp.str;
          if ("translationKey" in pp.str) return cp(pp.str.translationKey, (0, zp.t)(pp.str.params, Ip))
        }
        return ""
      })).join("") : op && "translationKey" in op ? cp(op.translationKey, (0, zp.t)(op.params, Ip)) : pp
    }

    function SO(pp, ip) {
      return pp === ip || null !== pp && null !== ip && pp.name === ip.name && pp.FD === ip.FD
    }

    function xO(pp) {
      var ip, cp, Op;
      let {
        show: Ip,
        onCraft: Sp,
        dispatchSelectedCraftable: xp,
        selectedCraftable: Lp,
        craftingStation: Ap,
        setHovered: Pp
      } = pp;
      const {
        t: Wp
      } = (0, zp.H)(), [yp, Up] = (0, op.useState)(""), [wp, vp] = (0, op.useState)(0);
      (0, op.useEffect)((() => {
        Ip || (Up(""), vp((pp => pp + 1)))
      }), [Ip]);
      const [tp, Hp] = (0, op.useState)(Ap);
      tp !== Ap && (Hp(Ap), "" !== yp && (Up(""), vp((pp => pp + 1))));
      const dp = (0, op.useRef)(null),
        ep = (0, op.useRef)(null),
        jp = (0, fc.l)(),
        kp = jp.showing && "recipe" === jp.kind,
        [mp, Rp] = (0, op.useState)(0),
        Mp = null !== Ap && void 0 !== Ap ? Ap : null,
        Cp = (0, op.useRef)(null),
        Ep = pp => {
          return !((ip = Cp.current) === (cp = pp) || null !== ip && null !== cp && ip.station === cp.station && SO(ip.recipe, cp.recipe)) && (Cp.current = pp, Yp.gameBridge.send("focusCrafting", pp), !0);
          var ip, cp
        };
      Ep(Ip ? {
        station: Mp,
        recipe: (null === (ip = Cp.current) || void 0 === ip ? void 0 : ip.station) === Mp ? Cp.current.recipe : null
      } : null);
      let Xp = Yp.gameBridge.latest("crafting");
      const lp = (0, qp.g)("itemInfo"),
        Qp = "" !== yp.trim(),
        Jp = (0, rc.F)(),
        Bp = (0, rc.E)(),
        Np = (0, rc.G)(),
        Tp = function(pp, ip) {
          const [cp, Op] = (0, op.useState)(!1);
          (0, op.useEffect)((() => {
            if (!pp) return void Op(!1);
            const ip = setTimeout((() => {
              Op(!0)
            }), 0);
            return () => {
              clearTimeout(ip)
            }
          }), [pp]);
          const Ip = pp && cp,
            Sp = (0, op.useRef)({
              station: ip,
              at: new Map
            });
          return (Sp.current.station !== ip || !Ip && Sp.current.at.size > 0) && (Sp.current = {
            station: ip,
            at: new Map
          }), Ip ? Sp.current.at : null
        }(Ip, Ap);
      let fp = Xp.recipes.filter((pp => {
        let {
          listed: ip
        } = pp;
        return ip
      }));
      if (Qp) {
        const pp = [];
        for (const ip of Xp.recipes) {
          var bp;
          const cp = null !== (bp = Bp.get(ip.name)) && void 0 !== bp && bp.hideIngredients ? [] : ip.requires.flatMap((pp => {
              let {
                items: ip
              } = pp;
              return ip.flatMap((pp => [pp, IO(pp, lp, Wp)]))
            })),
            Op = Fc(yp, [ip.name, IO(ip.name, lp, Wp)], cp);
          null !== Op && pp.push({
            item: ip,
            rank: Op
          })
        }
        pp.sort(((pp, ip) => pp.rank - ip.rank)), fp = pp.map((pp => {
          let {
            item: ip
          } = pp;
          return ip
        }))
      } else {
        if (Tp && Tp.size > 0) {
          const pp = Xp.recipes.filter((pp => !pp.listed && Tp.has(Vc(pp))));
          fp = fp.concat(pp)
        }
        fp = (0, rc.j)(fp, Jp, Bp, Np), Tp && (fp = (0, rc.h)(fp, Tp, Vc))
      }
      const hp = pp => fp.find((ip => Vc(ip) === pp)),
        ap = `${Ap}|${yp}`,
        [np, Fp] = (0, op.useState)(null),
        gp = (null === np || void 0 === np ? void 0 : np.context) === ap ? np.key : null,
        Gp = Lp ? Vc(Lp) : null,
        rp = null !== (cp = null !== (Op = hp(Gp)) && void 0 !== Op ? Op : hp(gp)) && void 0 !== cp ? cp : fp[0],
        Zp = rp ? Vc(rp) : null,
        sp = rp ? {
          name: rp.name,
          FD: rp.FD
        } : null;
      Ip && Ep({
        station: Mp,
        recipe: sp
      }) && (Xp = Yp.gameBridge.latest("crafting")), Zp !== Gp && Zp !== gp && Fp(Zp ? {
        context: ap,
        key: Zp
      } : null), (0, op.useEffect)((() => () => {
        Cp.current = null, Yp.gameBridge.send("focusCrafting", null)
      }), []);
      const Kp = SO(Xp.detail, sp) ? Xp.detail : null,
        Vp = null !== Kp && !Kp.roomForOne,
        ii = fp.findIndex((pp => Vc(pp) === Vc(rp))),
        ci = () => ep.current ? (0, Tc.d)(ep.current) : null,
        Oi = (0, op.useRef)(null),
        oi = (0, op.useRef)(0);
      oi.current++;
      const Ii = oi.current;
      (0, op.useEffect)((() => {
        const pp = Oi.current;
        if (!pp || Ii <= pp.afterRender) return;
        if (Oi.current = null, pp.key !== Zp) return;
        const ip = ci();
        var cp;
        null !== ip && void 0 !== ip && ip.press("primary") && !pp.sx && (null === (cp = ip.release) || void 0 === cp || cp.call(ip))
      }));
      const Si = pp => {
          const ip = {
            name: pp.name,
            FD: pp.FD
          };
          return {
            choose: () => {
              xp(ip), (0, Sc.p)(ep.current)
            },
            craft: () => {
              var pp, cp;
              return xp(ip), Vc(ip) !== Vc(rp) ? (Oi.current = {
                key: Vc(ip),
                sx: !0,
                afterRender: oi.current
              }, !0) : null !== (pp = null === (cp = ci()) || void 0 === cp ? void 0 : cp.press("primary")) && void 0 !== pp && pp
            },
            stopCraft: () => {
              var pp, ip;
              Oi.current ? Oi.current.sx = !1 : null === (pp = ci()) || void 0 === pp || null === (ip = pp.release) || void 0 === ip || ip.call(pp)
            },
            refuse: () => {
              Vc(ip) !== Vc(rp) && xp(ip), Rp((pp => pp + 1))
            }
          }
        },
        xi = () => {
          var pp, ip, cp;
          (0, Sc.p)(null !== (pp = null === (ip = dp.current) || void 0 === ip || null === (cp = ip.querySelector(".CraftableItems")) || void 0 === cp ? void 0 : cp.children[ii]) && void 0 !== pp ? pp : null)
        },
        Li = fp.map(Vc).join("|"),
        Yi = (0, op.useRef)(Li);
      return (0, op.useEffect)((() => {
        Yi.current !== Li && (Yi.current = Li, kp && ii >= 0 && (0, fc.i)() && xi())
      })), (0, Dp.jsxs)("div", {
        className: "Craftables",
        children: [(0, Dp.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: oO(Ap, lp, Wp)
        }), (0, Dp.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, Dp.jsx)(Nc.c, {
            className: "CraftingSearch",
            placeholderText: Wp("general:searchRecipes"),
            defaultValue: yp,
            maxLength: 100,
            onValueChange: pp => {
              Up(pp)
            },
            blurOnEnter: !0
          }, wp), 0 === fp.length && Qp && (0, Dp.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Wp("general:noRecipesMatchSearch")
          }), fp.length > 0 && (0, Dp.jsxs)(Dp.Fragment, {
            children: [(0, Dp.jsxs)("div", {
              ref: dp,
              className: "CraftablesLeftSide",
              children: [(0, Dp.jsx)(Bc.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(fp.map((pp => {
                  let {
                    name: ip,
                    FD: cp,
                    haveIngredients: Op
                  } = pp;
                  return {
                    name: ip,
                    FD: cp,
                    haveIngredients: Op
                  }
                })))],
                observing: Ip,
                children: fp.map((pp => {
                  const {
                    name: ip,
                    FD: cp,
                    haveIngredients: Op
                  } = pp, op = Vc(pp);
                  return (0, Dp.jsx)(pO, {
                    recipeId: op,
                    itemName: ip,
                    onClick: () => {
                      xp({
                        name: ip,
                        FD: cp
                      })
                    },
                    isSelected: Vc(rp) === op,
                    haveIngredients: Op,
                    craftable: Op && !Bp.has(ip) && !(Vc(rp) === op && Vp),
                    setHovered: Pp,
                    padActions: Si(pp),
                    marked: Jp.has(ip),
                    lock: Bp.get(ip),
                    itemInfo: lp
                  }, op)
                }))
              }), (0, Dp.jsx)(OO, {
                selectedIdx: ii,
                hidden: kp && jp.steppingSlots
              })]
            }), (0, Dp.jsx)(cO, {
              show: Ip,
              recipeItem: rp,
              detail: Kp,
              onCraft: Sp,
              setHovered: Pp,
              craftButtonRef: ep,
              onPadBack: xi,
              showPadShortcut: kp,
              refusedCount: mp,
              lock: Bp.get(rp.name),
              itemInfo: lp
            })]
          })]
        })]
      })
    }
    var LO = cp(34448),
      YO = cp(3400),
      DO = cp(2134),
      AO = cp(8807);
    class PO {
      constructor(pp, ip, cp) {
        this.commit = pp, this.delayMs = ip, this.defers = cp, this.pending = null, this.timer = void 0, this.sx = !1, this.flush = () => {
          clearTimeout(this.timer);
          const pp = this.pending;
          null !== pp && (this.pending = null, this.commit(pp))
        }
      }
      type(pp) {
        this.pending = pp, clearTimeout(this.timer), this.sx || this.defers() ? this.sx || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(pp) {
        var ip;
        return null !== (ip = this.pending) && void 0 !== ip ? ip : pp
      }
      isHeld() {
        return this.sx
      }
      setHeld(pp) {
        this.sx = pp, pp || this.flush()
      }
    }

    function WO(pp) {
      return null === pp ? "creativeInventory:all" : `creativeInventory:${pp}`
    }

    function yO(pp) {
      let {
        category: ip
      } = pp;
      return null === ip ? (0, Dp.jsx)(wp.d, {
        name: "layer-group"
      }) : (0, Dp.jsx)(Lc.d, {
        itemName: LO.creativeItemCategoryIcons[ip],
        amount: 0
      })
    }

    function UO(pp) {
      let {
        labelKey: ip,
        isSelected: cp,
        onSelect: Op,
        setHovered: op,
        children: Ip
      } = pp;
      return (0, Dp.jsx)("div", {
        className: uc()("CreativeCategoryTab", {
          Selected: cp
        }),
        onClick: Op,
        onPointerEnter: pp => {
          (0, Pc.s)(pp) || op(!0, {
            name: {
              translationKey: ip
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          op(!1)
        },
        children: Ip
      })
    }

    function wO(pp) {
      let {
        categories: ip,
        selectedCategory: cp,
        onSelect: Op
      } = pp;
      const {
        t: Ip
      } = (0, zp.H)(), [Sp, xp] = (0, op.useState)(!1), Lp = (0, op.useRef)(null), Yp = (0, op.useCallback)((() => {
        xp(!1)
      }), []);
      return (0, DO.e)(Lp, Yp), (0, Dp.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Lp,
        children: [(0, Dp.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            xp(!Sp)
          },
          children: [(0, Dp.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, Dp.jsx)(yO, {
              category: cp
            })
          }), (0, Dp.jsx)("span", {
            children: Ip(WO(cp))
          }), (0, Dp.jsx)(wp.d, {
            name: Sp ? "caret-up" : "caret-down"
          })]
        }), Sp && (0, Dp.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: ip.map((pp => (0, Dp.jsxs)("div", {
            className: uc()("CreativeCategoryDropdownOption", {
              Selected: cp === pp
            }),
            onClick: () => {
              Op(pp), xp(!1)
            },
            children: [(0, Dp.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, Dp.jsx)(yO, {
                category: pp
              })
            }), (0, Dp.jsx)("span", {
              children: Ip(WO(pp))
            })]
          }, null !== pp && void 0 !== pp ? pp : "all")))
        })]
      })
    }
    const vO = (0, op.memo)((function(pp) {
      let {
        creativeScrollDiv: ip,
        playerInvenNumSlots: cp,
        getSetHoveringForIdx: Op,
        getPointerDownForIdx: Ip,
        getPointerUpForIdx: Sp,
        creativeSearchVal: xp,
        setCreativeSearchVal: Yp,
        creativeCategory: Ap,
        setCreativeCategory: Pp,
        show: Wp
      } = pp;
      const {
        t: yp
      } = (0, zp.H)(), Up = (0, qp.g)("creativeVisibility"), {
        userContext: vp
      } = (0, jp.b)(), tp = (0, Lp.i)("canUseDevCreativeItems"), Hp = vp.playerHasRank("developer") || !!tp, dp = (0, op.useMemo)((() => HO("", Up, Hp)), [Up, Hp]), ep = (0, op.useMemo)((() => {
        const pp = (0, LO.creativeItemIds)(),
          ip = new Set(dp.map((ip => (0, LO.creativeCategoryOf)(pp[ip]))));
        return LO.creativeItemCategories.filter((pp => ip.has(pp)))
      }), [dp]), kp = null !== Ap && ep.includes(Ap) ? Ap : null, Rp = (0, op.useMemo)((() => "" === xp ? dp : HO(xp, Up, Hp)), [dp, xp, Up, Hp]), Mp = (0, op.useMemo)((() => {
        const pp = (0, LO.creativeItemIds)();
        return null !== kp ? Rp.filter((ip => (0, LO.creativeCategoryOf)(pp[ip]) === kp)) : "" === xp ? Rp.filter((ip => !(0, LO.showOnlyInCreativeCategory)(pp[ip]))) : Rp
      }), [Rp, kp, xp]), Cp = Op();

      function Ep(pp) {
        Pp(pp), ip.current.scrollTop = 0
      }
      const Xp = [null, ...ep],
        {
          isTouchScreen: lp
        } = (0, bp.o)(["isTouchScreen"]),
        Qp = !lp,
        Jp = (0, op.useRef)(null),
        [Bp, Np] = (0, op.useState)(0);
      (0, op.useEffect)((() => {
        const pp = Jp.current;
        if (!pp) return;
        const ip = new ResizeObserver((pp => {
          Np(pp[0].contentRect.height)
        }));
        return ip.observe(pp), () => {
          ip.disconnect()
        }
      }), [Qp]);
      const Tp = (0, op.useRef)(null),
        fp = (0, op.useCallback)((function pp() {
          "up" === Tp.current ? ip.current.scrollTop -= 10 : "down" === Tp.current && (ip.current.scrollTop += 10), Tp.current && requestAnimationFrame(pp)
        }), [ip]),
        hp = (0, op.useCallback)((function(pp) {
          Tp.current || (Tp.current = pp, fp())
        }), [fp]);

      function ap() {
        Tp.current = null
      }
      const np = (0, op.useRef)({
        creativeSearchVal: xp,
        setCreativeSearchVal: Yp
      });
      np.current = {
        creativeSearchVal: xp,
        setCreativeSearchVal: Yp
      };
      const [Fp] = (0, op.useState)((() => new PO((pp => {
        np.current.setCreativeSearchVal(pp)
      }), 250, xc.h))), gp = pp => {
        var cp;
        null === (cp = ip.current) || void 0 === cp || cp.classList.toggle("CreativeItemSlotsStale", pp)
      };
      (0, mp.f)(AO.b, (pp => {
        Fp.setHeld(pp), pp || gp(!1)
      })), (0, op.useEffect)((() => Fp.flush), [Fp]);
      const Gp = (0, Dp.jsx)(Nc.c, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: xp,
          maxLength: 1e4,
          onValueChange: (pp, ip) => {
            "" === Fp.getTyped(np.current.creativeSearchVal) && "" !== pp && Pp(null), Fp.type(pp), gp(Fp.isHeld())
          },
          onEnter: Fp.flush,
          blurOnEnter: !0
        }),
        rp = (0, Dp.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [lp && (0, Dp.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, Dp.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                hp("up")
              },
              onPointerLeave: ap,
              onPointerUp: ap,
              children: (0, Dp.jsx)(wp.d, {
                name: "arrow-up"
              })
            }), (0, Dp.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                hp("down")
              },
              onPointerLeave: ap,
              onPointerUp: ap,
              children: (0, Dp.jsx)(wp.d, {
                name: "arrow-up"
              })
            })]
          }), (0, Dp.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: ip,
            children: [0 === Mp.length && "" !== xp && (0, Dp.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: yp("general:noResults")
            }), (0, Dp.jsx)(Bc.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [xp, kp],
              observerRoot: "CreativeItemSlots",
              observing: Wp,
              children: Mp.map((pp => {
                const ip = cp + pp;
                return (0, Dp.jsx)(Cc.e, {
                  idx: ip,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Op(ip),
                  pointerDown: Ip(ip),
                  pointerUp: Sp(ip)
                }, ip)
              }))
            })]
          })]
        });
      return (0, Dp.jsxs)("div", {
        className: uc()("CreativeItemSlotsWrapper", Qp ? "WithRail" : "WithDropdown"),
        children: [Qp && (0, Dp.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Jp,
          style: {
            "--rail-height": Bp > 0 ? `${Bp}px` : void 0,
            "--tab-rows": Math.ceil(Xp.length / 2)
          },
          children: Xp.map((pp => (0, Dp.jsx)(UO, {
            labelKey: WO(pp),
            isSelected: kp === pp,
            onSelect: () => {
              Ep(pp)
            },
            setHovered: Cp,
            children: (0, Dp.jsx)(yO, {
              category: pp
            })
          }, null !== pp && void 0 !== pp ? pp : "all")))
        }), (0, Dp.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, Dp.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [Gp, !Qp && (0, Dp.jsx)(wO, {
              categories: Xp,
              selectedCategory: kp,
              onSelect: Ep
            })]
          }), rp]
        })]
      })
    }));

    function tO(pp) {
      var ip;
      return null !== (ip = (0, YO.d)(pp)) && void 0 !== ip ? ip : ""
    }

    function HO(pp, ip, cp) {
      let {
        publicLobby: Op,
        shownInGame: op
      } = ip;
      const Ip = pp.toLowerCase(),
        Sp = (0, LO.creativeItemIds)(),
        xp = pp => {
          var ip;
          const Ip = Sp[pp];
          return !(0, LO.itemIsDisabled)(Ip, Op, null === (ip = op[tO(Ip)]) || void 0 === ip || ip, cp)
        };
      if ("" === Ip) return Sp.map(((pp, ip) => ip)).filter((pp => !(0, LO.showOnlyInCreativeSearch)(Sp[pp]))).filter(xp);
      const Lp = [];
      for (let Yp = 0; Yp < Sp.length; Yp++) tO(Sp[Yp]).toLowerCase().includes(Ip) && Lp.push(Yp);
      Lp.sort(((pp, ip) => {
        const cp = tO(Sp[pp]).toLowerCase(),
          Op = tO(Sp[ip]).toLowerCase();
        return cp.indexOf(Ip) - Op.indexOf(Ip)
      }));
      for (const [Yp, Dp] of(0, LO.creativeAltNames)())
        for (const pp of Dp)
          if (pp.toLowerCase().includes(Ip)) {
            const pp = Sp.indexOf(Yp);
            Lp.includes(pp) || Lp.push(pp)
          } return Lp.filter(xp)
    }
    var dO = cp(37032),
      eO = cp(640);

    function uO(pp) {
      return pp > eO.j
    }

    function jO(pp) {
      const ip = pp / 2,
        cp = [];
      for (let Op = 0; Op < ip / 6; Op++)
        for (let pp = 0; pp < 12; pp++) {
          const op = pp < 6 ? 0 : ip;
          cp.push(op + 6 * Op + pp % 6)
        }
      return cp
    }

    function kO(pp) {
      let {
        numSlots: ip,
        renderSlot: cp
      } = pp;
      const {
        t: Op
      } = (0, zp.H)(), Ip = (0, op.useRef)(null);
      var Sp;
      return Sp = Ip, (0, op.useLayoutEffect)((() => {
        var pp;
        const ip = null === (pp = Sp.current) || void 0 === pp ? void 0 : pp.closest(".InvenBody");
        if (!ip) return;
        const cp = () => {
          ip.style.zoom = "";
          const pp = parseFloat(getComputedStyle(document.documentElement).fontSize),
            cp = window.innerWidth - 2 * pp,
            Op = ip.getBoundingClientRect().width;
          Op > cp && (ip.style.zoom = "" + cp / Op)
        };
        return cp(), window.addEventListener("resize", cp), () => {
          window.removeEventListener("resize", cp), ip.style.zoom = ""
        }
      }), [Sp]), (0, Dp.jsxs)("div", {
        ref: Ip,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, Dp.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Op("doubleChest:title")
        }), (0, Dp.jsx)("div", {
          className: "GridItemSlots",
          children: jO(ip).map((pp => cp(pp)))
        })]
      })
    }

    function mO(pp) {
      let {
        WI: ip,
        initialPasskey: cp
      } = pp;
      const {
        t: Op
      } = (0, zp.H)(), [Ip, Sp] = (0, op.useState)(cp), [xp, Lp] = (0, op.useState)(cp);
      (0, op.useEffect)((() => {
        Sp(cp), Lp(cp)
      }), [...ip]);
      return (0, Dp.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, Dp.jsx)("div", {
          className: "SmallTextBold",
          children: Op("ironChest:currentPasskey", {
            currentPasskey: Ip.join("")
          })
        }), (0, Dp.jsx)(mc, {
          className: "IronChestPasskeyEditor",
          Zx: xp,
          onPasskeyUpdated: Lp,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Yp.gameBridge.send("changeIronChestPasskey", {
              pos: [...ip],
              Zx: [...xp]
            }), Sp([...xp])
          }
        })]
      })
    }

    function RO(pp, ip) {
      return "Iron" === pp.type && pp.ironChest.ownerDbId === ip
    }

    function qO(pp) {
      let {
        variation: ip,
        canCraft: cp,
        show: Op,
        creativeMounted: op,
        specialItemRef: Ip,
        draggedInfo: Sp,
        getSetHovering: xp,
        getPointerDownForIdx: Lp,
        getPointerUpForIdx: Yp,
        enchantingTablePosition: Ap,
        enchantingTableBlockName: Pp,
        selectedCraftable: Wp,
        dispatchSelectedCraftable: yp,
        creativeScrollDiv: Up,
        creativeSearchVal: wp,
        setCreativeSearchVal: vp,
        creativeCategory: tp,
        setCreativeCategory: Hp,
        onCraft: dp
      } = pp;
      const {
        userContext: ep
      } = (0, jp.b)(), {
        t: kp
      } = (0, zp.H)(), mp = (0, qp.f)("inventory", (pp => pp.chest)), Rp = (0, qp.f)("inventory", (pp => pp.player.length)), Mp = (0, qp.f)("inventory", (pp => pp.creative));
      if (0 === Rp) return null;
      let Cp, Ep;
      const Xp = pp => {
          const ip = Rp + pp;
          return (0, Dp.jsx)(Cc.e, {
            idx: ip,
            draggedInfo: Sp,
            specialItemInfo: Ip.current,
            setHovered: xp(ip),
            pointerDown: Lp(ip),
            pointerUp: Yp(ip)
          }, ip)
        },
        lp = mp ? (0, dO.e)(mp.type) : null;
      if (lp) Cp = uc()("InvenLeftSideChestCustom", lp.className), Ep = (0, Dp.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: lp.render({
          WI: mp.pos,
          renderSlot: Xp
        })
      });
      else if (mp) {
        const pp = mp.pos,
          ip = "Iron" === mp.type || "Moonstone" === mp.type ? mp.type : "Standard";
        Cp = `InvenLeftSideChest${ip}`;
        const cp = uO(mp.numSlots);
        Ep = (0, Dp.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [RO(mp, ep.whamm) && (0, Dp.jsx)(mO, {
            WI: pp,
            initialPasskey: mp.ironChest.Zx
          }), cp && (0, Dp.jsx)(kO, {
            numSlots: mp.numSlots,
            renderSlot: Xp
          }), !cp && (0, Dp.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, Dp.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: kp("Moonstone" === ip ? "item:moonstoneChest" : "Iron" === ip ? "item:ironChest" : "item:chest")
            }), (0, Dp.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(mp.numSlots).fill(0).map(((pp, ip) => Xp(ip)))
            })]
          })]
        })
      } else if (!Mp || ip && cp)
        if (cp && "Enchanting Table" === ip) Cp = `InvenLeftSide${(null!==Pp&&void 0!==Pp?Pp:"").replace(/ /gi,"")}`, Ep = (0, Dp.jsx)(Ec, {
          specialItemInfo: Ip.current,
          setHovered: xp,
          pointerDown: Lp(yc.f),
          pointerUp: Yp(yc.f),
          enchantingTablePosition: Ap,
          enchantingTableBlockName: Pp
        });
        else if (cp && "Salvaging Table" === ip) Cp = "InvenLeftSideSalvagingTable", Ep = (0, Dp.jsx)(lc, {
        specialItemInfo: Ip.current,
        setSpecialItemInfo: pp => {
          Ip.current = pp
        },
        setHovered: xp,
        pointerDown: Lp(yc.f),
        pointerUp: Yp(yc.f)
      });
      else {
        if (!cp) return null;
        Cp = `InvenLeftSide${(null!==ip&&void 0!==ip?ip:"HandCrafting").replace(/ /gi,"")}`, Ep = (0, Dp.jsx)(xO, {
          show: Op,
          onCraft: dp,
          craftingStation: ip,
          selectedCraftable: Wp,
          dispatchSelectedCraftable: yp,
          setHovered: xp()
        })
      } else Cp = "InvenLeftSideCreative", Ep = op ? (0, Dp.jsx)(vO, {
        creativeScrollDiv: Up,
        playerInvenNumSlots: Rp,
        getSetHoveringForIdx: xp,
        getPointerDownForIdx: Lp,
        getPointerUpForIdx: Yp,
        creativeSearchVal: wp,
        setCreativeSearchVal: vp,
        creativeCategory: tp,
        setCreativeCategory: Hp,
        show: Op
      }) : null;
      const Qp = !!mp || cp && !!ip;
      return (0, Dp.jsx)("div", {
        className: `InvenLeftSide ${Cp}`,
        "data-pad-inventory-start": Qp ? "" : void 0,
        children: Ep
      })
    }
    var MO = cp(629),
      CO = cp(20246),
      EO = cp(20253),
      XO = cp(20255);
    const lO = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: cp(20260)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: EO
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: XO
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: cp(20265)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: CO
      }
    };

    function QO(pp) {
      const {
        sprite: ip,
        image: cp
      } = lO[pp];
      return Zi(ip, gi.h.ITEM, cp)
    }

    function JO(pp) {
      let {
        draggedInfo: ip,
        specialItemInfo: cp,
        craftFlyAnims: Op,
        getSetHovering: op,
        getPointerDownForIdx: Ip,
        getPointerUpForIdx: Sp,
        variation: xp,
        canCraft: Lp,
        isNewSlot: Yp
      } = pp;
      const Ap = (0, qp.f)("inventory", (pp => pp.player.length));
      return 0 === Ap ? null : (0, Dp.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, Dp.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(MO.c.length).fill(0).map(((pp, Pp) => {
            const Wp = Ap - MO.c.length + Pp;
            return (0, Dp.jsx)(Cc.e, {
              idx: Wp,
              draggedInfo: ip,
              specialItemInfo: cp,
              craftFlyHoldbackInfo: (0, Wc.i)(Op, Wp),
              setHovered: op(Wp),
              pointerDown: Ip(Wp),
              pointerUp: Sp(Wp),
              defaultIconB64: QO(MO.c[Pp]),
              variation: Lp ? xp : void 0,
              showNewDot: Yp(Wp)
            }, Wp)
          }))
        }), (0, Dp.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Ap - 10 - MO.c.length).fill(0).map(((pp, Pp) => {
            const Wp = Ap - MO.c.length - Pp - 1;
            return (0, Dp.jsx)(Cc.e, {
              idx: Wp,
              draggedInfo: ip,
              specialItemInfo: cp,
              craftFlyHoldbackInfo: (0, Wc.i)(Op, Wp),
              setHovered: op(Wp),
              pointerDown: Ip(Wp),
              pointerUp: Sp(Wp),
              variation: Lp ? xp : void 0,
              showNewDot: Yp(Wp)
            }, Wp)
          }))
        })]
      })
    }
    var BO = cp(37037),
      NO = cp(37039);

    function TO(pp) {
      const {
        e: ip,
        idx: cp
      } = pp, Op = (0, Pc.j)(pp.readInventory(), cp), op = (0, Pc.q)(ip);
      cp === yc.c ? function(pp, ip) {
        const {
          draggedInfoRef: cp,
          removeItem: Op,
          removeDraggedInfoRef: op,
          close: Ip
        } = pp;
        if (cp.current) {
          const pp = ip && cp.current.amount || 1;
          Op(cp.current.idx, pp, !0) && (cp.current.amount -= pp, cp.current.amount <= 0 && op())
        } else ip && Ip()
      }(pp, op) : cp === yc.f ? function(pp, ip) {
        const {
          e: cp,
          draggedInfoRef: Op,
          specialItemRef: op,
          moveAmtIntoSlot: Ip,
          removeDraggedInfoRef: Sp
        } = pp;
        if ((0, Pc.x)(cp) && op.current) op.current = null;
        else if (Op.current && op.current && (Op.current.idx === op.current.idx || (0, NO.d)(Op.current, op.current)) && Op.current.amount > 0 && op.current.amount > 0 && op.current.amount < jc.g.maxItemStackSize)
          if (Op.current.idx === op.current.idx) {
            if (ip) {
              const pp = Math.min(Op.current.amount, jc.g.maxItemStackSize - op.current.amount);
              op.current.amount += pp, Op.current.amount -= pp
            } else Op.current.amount--, op.current.amount++;
            Op.current.amount <= 0 && Sp()
          } else if (ip) {
          const pp = Math.min(Op.current.amount, jc.g.maxItemStackSize - op.current.amount);
          Ip(op.current.idx, pp) && (op.current.amount += pp)
        } else {
          Ip(op.current.idx, 1) && op.current.amount++
        } else if (Op.current && !op.current && !ip && Op.current.amount > 0) Op.current.amount--, op.current = {
          idx: Op.current.idx,
          name: Op.current.name,
          attributes: Op.current.attributes,
          amount: 1
        }, Op.current.amount <= 0 && Sp();
        else {
          const pp = Op.current;
          Op.current = op.current, op.current = pp
        }
      }(pp, op) : (0, Pc.x)(ip) ? function(pp, ip) {
        var cp, Op;
        const {
          idx: op,
          draggedInfoRef: Ip,
          specialItemRef: Sp,
          canCraft: xp,
          variation: Lp,
          swapSlots: Yp,
          moveIntoSlots: Dp
        } = pp;
        if (!ip) return;
        let Ap = ip.amount;
        op === (null === (cp = Ip.current) || void 0 === cp ? void 0 : cp.idx) && (Ap = Ip.current.amount <= 0 ? 0 : ip.amount - Ip.current.amount);
        op === (null === (Op = Sp.current) || void 0 === Op ? void 0 : Op.idx) && (Ap = Sp.current.amount <= 0 ? 0 : ip.amount - Sp.current.amount);
        if (0 === Ap) return;
        const Pp = pp.readInventory(),
          Wp = Pp.player.length,
          yp = Pp.chest,
          Up = Wp - MO.c.length,
          wp = () => {
            if (!(0, xc.h)()) return void Dp(10, Up, op, Ap);
            const pp = pp => {
              const cp = (0, Pc.j)(Pp, pp);
              return cp ? {
                amount: cp.amount,
                stacksWithMoved: (0, NO.d)(cp, ip)
              } : null
            };
            for (const ip of ((pp, ip, cp, Op, op) => {
                const Ip = [];
                let Sp = Op;
                if (null !== Op) {
                  let xp = 0;
                  for (let Op = ip; Op < cp; Op++) {
                    const ip = pp(Op);
                    null !== ip && void 0 !== ip && ip.stacksWithMoved && null !== ip.amount && ip.amount > 0 && (xp += Math.max(0, op - ip.amount))
                  }
                  const Lp = Math.min(Op, xp);
                  if (Lp > 0 && (Ip.push({
                      start: ip,
                      end: cp,
                      amount: Lp
                    }), Sp = Op - Lp), Sp <= 0) return Ip
                }
                for (let xp = cp - 1; xp >= ip; xp--)
                  if (null === pp(xp)) {
                    Ip.push({
                      start: xp,
                      end: xp + 1,
                      amount: Sp
                    });
                    break
                  } return Ip
              })(pp, 10, Up, Ap, jc.g.maxItemStackSize)) Dp(ip.start, ip.end, op, ip.amount)
          };
        if (!xp || "Enchanting Table" !== Lp && "Salvaging Table" !== Lp) {
          const cp = (0, Rp.vb)(ip.name),
            Op = cp ? (0, Rp.ub)(cp) : null;
          if (!MO.c.includes(cp) || op !== Op && (0, Pc.n)(Pp, pp.itemInfo, Op, op))
            if (yp)
              if (op < Wp) {
                var vp, tp;
                const [pp, ip] = null !== (vp = null === (tp = (0, dO.e)(yp.type)) || void 0 === tp ? void 0 : tp.quickMoveRange) && void 0 !== vp ? vp : [0, yp.numSlots];
                Dp(Wp + pp, Wp + ip, op, Ap)
              } else Dp(0, Wp - MO.c.length, op, Ap);
          else Pp.creative ? op < 10 ? wp() : op < Wp ? Dp(0, 10, op, Ap) : Dp(0, Wp - MO.c.length, op, null !== ip.amount ? jc.g.maxItemStackSize : null) : op < 10 ? wp() : Dp(0, 10, op, Ap);
          else op < Wp - MO.c.length || op >= Wp ? Yp(Op, op) : (Dp(0, Wp - MO.c.length, Op, Ap), Dc.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Sp.current = {
          idx: op,
          name: ip.name,
          attributes: ip.attributes,
          amount: null !== ip.amount ? Ap : 0
        }
      }(pp, Op) : pp.draggedInfoRef.current ? function(pp, ip, cp, Op) {
        const {
          draggedInfoRef: op,
          specialItemRef: Ip,
          moveAmtIntoSlot: Sp,
          swapSlots: xp,
          removeItem: Lp,
          removeDraggedInfoRef: Yp
        } = pp, Dp = pp.readInventory(), Ap = op.current.idx;
        if (cp && (ip === Ap || (0, NO.d)(op.current, cp)) && op.current.amount > 0 && (0, Pc.c)(cp) > 0 && (cp.amount < jc.g.maxItemStackSize || ip === Ap)) Op ? cp.amount + op.current.amount <= jc.g.maxItemStackSize || ip === Ap ? Sp(ip, op.current.amount) : Sp(ip, jc.g.maxItemStackSize - cp.amount) : Sp(ip, 1);
        else if (op.current.amount > 0 && !cp) Sp(ip, Op ? op.current.amount : 1);
        else if (Op || cp || 0 === op.current.amount)
          if (Dp.creative && !Dp.chest && ip >= Dp.player.length) {
            const pp = 0 === op.current.amount ? 1 : op.current.amount;
            Lp(op.current.idx, pp, !1) && Yp()
          } else {
            var Pp;
            const cp = (null === (Pp = Ip.current) || void 0 === Pp ? void 0 : Pp.idx) === ip;
            if (xp(ip, op.current.idx)) {
              const Op = pp.readInventory(),
                Sp = (0, Pc.j)(Op, Ap),
                xp = !Op.chest && Op.creative && op.current.idx >= Op.player.length;
              if (Sp && op.current.idx !== ip && !xp) {
                let pp = (0, Pc.c)(Sp);
                cp && (pp -= Ip.current.amount), op.current = cp && 0 === pp ? null : {
                  idx: op.current.idx,
                  name: Sp.name,
                  attributes: Sp.attributes,
                  amount: pp
                }
              } else Yp()
            }
          }
        else Sp(ip, 1)
      }(pp, cp, Op, op) : function(pp, ip, cp, Op) {
        var op;
        const {
          draggedInfoRef: Ip,
          specialItemRef: Sp
        } = pp;
        if (!cp) return;
        let xp = (0, Pc.c)(cp);
        const Lp = (null === (op = Sp.current) || void 0 === op ? void 0 : op.idx) === ip;
        Lp && (xp -= Sp.current.amount);
        Op || (xp = Math.ceil(xp / 2));
        Ip.current = Lp && 0 === xp ? null : {
          idx: ip,
          name: cp.name,
          attributes: cp.attributes,
          amount: xp
        }
      }(pp, cp, Op, op)
    }

    function fO(pp, ip) {
      return !!ip && ip.name === pp.name
    }

    function bO() {
      return Yp.gameBridge.latest("inventory")
    }

    function hO(pp, ip, cp) {
      return Yp.gameBridge.send("removeInventoryItem", {
        slot: pp,
        amount: ip,
        drop: cp
      })
    }

    function aO(pp) {
      return (0, Pc.i)(pp, Yp.gameBridge.latest("itemInfo"), Yp.gameBridge.latest("stationItems").enchantable)
    }

    function nO(pp) {
      let {
        show: ip,
        close: cp,
        canCraft: Op,
        variation: Ip,
        inventoryItemsMoveable: Sp,
        setCraftFlyAnims: xp
      } = pp;
      (0, qp.g)("itemInfo");
      const [Lp, Dp] = (0, op.useState)(null), [Ap, Pp] = (0, op.useState)(null), [Wp, yp] = (0, op.useState)(!1), Up = (0, op.useRef)(null), wp = (0, op.useRef)(null), vp = (0, op.useRef)(null), tp = (0, op.useRef)(null), [Hp, dp] = (0, op.useReducer)((pp => pp + 1), 0), ep = (0, op.useCallback)((() => {
        ip && dp()
      }), [ip, dp]), jp = (0, op.useCallback)((() => {
        wp.current = null, Bp.current = null, ep()
      }), [ep]), kp = (0, op.useCallback)(((pp, ip) => {
        xp((cp => cp.map((cp => "ingredient" === cp.kind ? cp : cp.eL === pp ? {
          ...cp,
          eL: ip,
          to: (0, Pc.e)(ip)
        } : cp.eL === ip ? {
          ...cp,
          eL: pp,
          to: (0, Pc.e)(pp)
        } : cp))))
      }), [xp]), mp = (0, op.useCallback)(((pp, ip) => {
        const cp = fp.current;
        if (cp.x = pp, cp.y = ip, Up.current) !bp.current.isTouch || bp.current.itemBeingDragged && !Bp.current ? (Up.current.style.transform = `translate(${cp.x}px, ${cp.y}px)`, yp(bp.current.isTouch && !Bp.current)) : (Up.current.style.transform = "translate(0.5rem, 0.5rem)", yp(!0));
        else if (tp.current) {
          const cp = tp.current;
          let Op = pp + 10,
            op = ip + 10;
          const Ip = cp.offsetWidth,
            Sp = cp.offsetHeight;
          Op + Ip > window.innerWidth && (Op = pp - Ip - 10), op + Sp > window.innerHeight && (op = ip - Sp - 10), Op < 0 && (Op = 0), op < 0 && (op = 0), tp.current.style.transform = `translate(${Op}px, ${op}px)`
        }
      }), []), Mp = (0, op.useCallback)((pp => (ip, cp, Op) => {
        if (Dp(ip && void 0 !== pp ? pp : null), ip) {
          if (void 0 === pp && !cp) return void(0, BO.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== pp) {
            var op;
            const ip = bO();
            let cp;
            if (cp = pp === yc.f ? vp.current ? (0, Pc.j)(ip, vp.current.idx) : null : (0, Pc.j)(ip, pp), !cp) return void Pp(null);
            if ((null === (op = vp.current) || void 0 === op ? void 0 : op.idx) === pp) {
              if (0 === (0, Pc.c)(cp) - vp.current.amount) return void Pp(null)
            }
            Pp(aO(cp))
          } else Pp({
            name: cp.name,
            desc: cp.desc,
            fontStyle: "normal"
          })
        } else Pp(null);
        Op && setTimeout((() => {
          mp(Op.pageX, Op.pageY)
        }), 0)
      }), [mp]), Cp = (0, op.useCallback)(((pp, ip) => {
        const cp = Yp.gameBridge.send("moveInventoryItem", {
          from: wp.current.idx,
          to: pp,
          amount: ip
        });
        return cp ? (wp.current.amount -= ip, wp.current.amount <= 0 && jp()) : console.error("moveInventoryItem failed"), cp
      }), [jp]), Ep = (0, op.useCallback)(((pp, ip) => {
        const cp = vp.current,
          Op = null === cp || void 0 === cp ? void 0 : cp.idx;
        cp && (cp.idx = function(pp, ip, cp) {
          return pp === ip ? cp : pp === cp ? ip : pp
        }(Op, pp, ip));
        const op = Yp.gameBridge.send("swapInventorySlots", {
          a: pp,
          b: ip
        });
        return op ? kp(pp, ip) : cp && (cp.idx = Op), op
      }), [kp]), Xp = (0, op.useCallback)(((pp, ip, cp, Op) => {
        const op = Yp.gameBridge.send("quickMoveInventoryItem", {
          slot: cp,
          start: pp,
          end: ip,
          amount: Op
        });
        null !== op && kp(cp, op)
      }), [kp]), lp = (0, op.useCallback)(((pp, ip) => {
        var op;
        ((pp, ip, cp) => {
          const Op = pp - (cp - MO.c.length);
          return !(!ip || Op < 0 || Op >= MO.c.length) && (0, Rp.vb)(ip) !== MO.c[Op]
        })(ip, null === (op = wp.current) || void 0 === op ? void 0 : op.name, bO().player.length) || (TO({
          e: pp,
          idx: ip,
          readInventory: bO,
          itemInfo: Yp.gameBridge.latest("itemInfo"),
          draggedInfoRef: wp,
          specialItemRef: vp,
          moveAmtIntoSlot: Cp,
          swapSlots: Ep,
          moveIntoSlots: Xp,
          removeItem: hO,
          removeDraggedInfoRef: jp,
          close: cp,
          canCraft: Op,
          variation: Ip
        }), ep())
      }), [Op, cp, Cp, Xp, jp, Ep, Ip, ep]), Qp = (0, op.useRef)(0), Jp = (0, op.useRef)(null), Bp = (0, op.useRef)(null), Np = (0, op.useRef)(null), Tp = (0, op.useRef)(new Set), fp = (0, op.useRef)({
        x: 0,
        y: 0
      }), bp = (0, op.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), hp = (0, op.useCallback)((() => (Np.current = null, bp.current.itemBeingDragged = !1, clearTimeout(Jp.current), !!Bp.current && (Bp.current = null, ep(), !0))), [ep]);
      (0, op.useEffect)((() => {
        hp(), Tp.current.clear()
      }), [ip]);
      const ap = pp => void 0 !== pp && (Tp.current.has(pp) || null !== Np.current && pp !== Np.current),
        np = pp => {
          bp.current.isTouch = (0, Pc.s)(pp)
        },
        Fp = (0, op.useCallback)((pp => ip => {
          const Op = (0, Pc.s)(ip);
          if (Op || mp(ip.pageX, ip.pageY), Sp)
            if (ap(ip.pointerId)) void 0 !== ip.pointerId && Tp.current.add(ip.pointerId);
            else {
              if (np(ip), Op) {
                Qp.current = ip.timeStamp, bp.current.itemBeingDragged = !0, Np.current = ip.pointerId;
                const cp = (0, Pc.j)(bO(), pp);
                if (cp && cp.amount && cp.amount > 0) {
                  const cp = ip.pageX,
                    Op = ip.pageY,
                    op = fp.current.x,
                    Ip = fp.current.y;
                  clearTimeout(Jp.current), Jp.current = setTimeout((() => {
                    if (wp.current && wp.current.idx === pp && (Math.abs(cp - fp.current.x) < 20 && Math.abs(Op - fp.current.y) < 20 || op === fp.current.x && Ip === fp.current.y) && bp.current.itemBeingDragged) {
                      const pp = bO(),
                        cp = pp.creative && !pp.chest && wp.current.idx >= jc.g.numInvenSlots && null !== (0, Pc.j)(pp, wp.current.idx).amount ? jc.g.maxItemStackSize : wp.current.amount;
                      Bp.current = {
                        initTouchX: ip.pageX,
                        initTouchY: ip.pageY,
                        maxAmount: cp
                      }, wp.current.amount = Math.ceil(wp.current.amount / 2), Up.current.style.transform = "translate(0.5rem, 0.5rem)", yp(!0), ep()
                    }
                  }), 500)
                }
              }
              lp(ip, pp)
            }
          else pp === yc.c && (0, Pc.q)(ip) && cp()
        }), [mp, lp, Sp, cp, ep]),
        gp = (0, op.useCallback)((pp => pp => {
          if (ap(pp.pointerId)) return;
          const ip = (0, Pc.s)(pp);
          if (np(pp), !hp()) {
            if (ip && wp.current && pp.timeStamp - Qp.current > 150) {
              const ip = document.elementFromPoint(pp.clientX, pp.clientY);
              if (null !== ip) {
                const cp = ip.getAttribute("data-inven-idx");
                null !== cp ? lp(pp, parseInt(cp)) : ip.classList.contains("InventoryBackgroundScreen") && lp(pp, -1)
              }
            }
            mp(pp.pageX, pp.pageY)
          }
        }), [mp, lp, hp]);
      (0, op.useEffect)((() => {
        let pp;
        const cp = ["pointerup", "pointercancel"],
          Op = pp => {
            Tp.current.has(pp.pointerId) ? setTimeout((() => {
              Tp.current.delete(pp.pointerId)
            }), 0) : pp.pointerId === Np.current && setTimeout((() => {
              Np.current === pp.pointerId && hp()
            }), 0)
          };
        if (ip) {
          for (const pp of cp) document.addEventListener(pp, Op, !0);
          if (!bp.current.isTouch) {
            const pp = fp.current;
            mp(pp.x, pp.y)
          }
          pp = pp => {
            pp.preventDefault(), ap(pp.pointerId) || (np(pp), mp(pp.pageX, pp.pageY), Bp.current && pp.pointerId === Np.current && (pp => {
              if (!wp.current) return Bp.current = null, void ep();
              const {
                initTouchX: ip,
                maxAmount: cp
              } = Bp.current, Op = (pp.pageX - ip) * Bp.current.maxAmount / 160, op = Math.ceil(cp / 2) + Math.ceil(Op);
              wp.current.amount = Math.min(cp, Math.max(1, op)), ep()
            })(pp))
          }, document.addEventListener("pointermove", pp, !0)
        }
        return () => {
          document.removeEventListener("pointermove", pp, !0);
          for (const pp of cp) document.removeEventListener(pp, Op, !0)
        }
      }));
      const Gp = (0, op.useCallback)((() => {
          if (wp.current) {
            const pp = (0, Pc.j)(bO(), wp.current.idx);
            (!fO(wp.current, pp) || pp.amount < wp.current.amount) && jp()
          }
        }), [jp]),
        rp = (0, op.useCallback)((() => {
          const pp = wp.current;
          if (pp) {
            const ip = (0, Pc.j)(bO(), pp.idx);
            fO(pp, ip) && (pp.attributes = ip.attributes)
          }
        }), []);
      return {
        draggedDomRef: Up,
        draggedInfoRef: wp,
        specialItemRef: vp,
        hoverInfoDomRef: tp,
        longHoldSplitInfoRef: Bp,
        currHoveredIdx: Lp,
        currHoveredDisplayInfo: Ap,
        displayDraggedItemName: Wp,
        forceRerenderIfVisible: ep,
        removeDraggedInfoRef: jp,
        checkDraggedItemConsistencyWithInven: Gp,
        refreshDraggedAttributes: rp,
        swapSlots: Ep,
        getPointerDownForIdx: Fp,
        getPointerUpForIdx: gp,
        getSetHovering: Mp,
        setCurrHoveredDisplayInfo: Pp,
        moveFollowerTo: mp
      }
    }
    class FO {
      constructor(pp) {
        this.snapshot = [], this.newSlots = new Set, this.update(pp, !1)
      }
      update(pp, ip) {
        const cp = pp.map((pp => {
          var ip;
          return pp ? {
            name: pp.name,
            amount: null !== (ip = pp.amount) && void 0 !== ip ? ip : 1
          } : null
        }));
        cp.forEach(((pp, cp) => {
          const Op = this.snapshot[cp],
            op = (null === pp || void 0 === pp ? void 0 : pp.name) !== (null === Op || void 0 === Op ? void 0 : Op.name);
          (!pp || op || pp.amount < Op.amount) && this.newSlots.delete(cp), ip && pp && (op || pp.amount > Op.amount) && this.newSlots.add(cp)
        })), this.snapshot = cp
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(pp) {
        return this.newSlots.has(pp)
      }
    }
    const gO = (pp, ip, cp) => ({
      button: ip,
      shiftKey: cp,
      pageX: pp.clientX,
      pageY: pp.clientY,
      clientX: pp.clientX,
      clientY: pp.clientY,
      pointerType: "mouse"
    });

    function GO(pp) {
      const [ip, cp] = (0, op.useState)(pp);
      return pp && !ip && cp(!0), (0, op.useEffect)((() => {
        if (ip) return;
        let pp = !0;
        const Op = () => {
            pp && (pp = !1, cp(!0))
          },
          op = "function" === typeof window.requestIdleCallback,
          Ip = op ? window.requestIdleCallback(Op, {
            timeout: 2e3
          }) : void 0,
          Sp = setTimeout(Op, op ? 2e3 : 1e3);
        return () => {
          pp = !1, clearTimeout(Sp), void 0 !== Ip && window.cancelIdleCallback(Ip)
        }
      }), [ip]), ip
    }
    const rO = (0, op.memo)((function(pp) {
      var ip;
      let {
        show: cp,
        onOpen: Op,
        onClose: Ip,
        variation: xp
      } = pp;
      const Ap = (0, op.useRef)(null),
        Pp = (0, op.useRef)(null),
        Wp = function(pp) {
          const [ip, cp] = (0, op.useState)(!0), [Op, Ip] = (0, op.useState)(!1), Sp = (0, op.useRef)(null), xp = (0, op.useRef)(null), Yp = (0, Lp.i)("_shield"), Dp = (0, op.useRef)(null), Ap = (0, Lp.i)("_health"), Pp = (0, op.useRef)(null);

          function Wp(pp) {
            const ip = Date.now() + pp;
            ip < xp.current || (cp(!1), clearTimeout(Sp.current), xp.current = ip, Sp.current = setTimeout((() => {
              cp(!0)
            }), pp))
          }
          return (0, op.useEffect)((() => {
            Wp(wc);
            const pp = yp.m.subscribe("requestingPlayVideoAd", (() => {
              Wp(wc)
            }));
            return () => {
              clearTimeout(Sp.current), yp.m.unsubscribe(pp)
            }
          }), []), (0, op.useEffect)((() => {
            (Dp.current > Yp || Pp.current > Ap) && Wp(6e4), Dp.current = Yp, Pp.current = Ap
          }), [Yp, Ap]), (0, op.useEffect)((() => {
            let ip = null;
            return pp ? ip = setTimeout((() => {
              Ip(!0)
            }), 250) : Ip(!1), () => {
              clearTimeout(ip)
            }
          }), [pp]), ip && Op
        }(cp);
      (0, mp.i)(Ic.b, null);
      const Up = (0, Ic.j)(),
        wp = Up.some((pp => pp.panel)),
        {
          userContext: vp
        } = (0, jp.b)(),
        tp = (0, qp.f)("inventory", (pp => {
          const ip = pp.chest;
          return null !== ip && (uO(ip.numSlots) || RO(ip, vp.whamm))
        })),
        Hp = GO(cp),
        dp = GO(cp),
        [ep, kp] = (0, op.useState)([]),
        Mp = (0, op.useCallback)((pp => {
          kp((ip => ip.filter((ip => ip.id !== pp))))
        }), []),
        Cp = (0, op.useRef)(null),
        Ep = (0, op.useRef)(0),
        Xp = (0, op.useCallback)((() => {
          Cp.current && (Ep.current = Cp.current.scrollTop), Ip()
        }), [Ip]),
        lp = (0, Lp.i)("inventoryItemsMoveable"),
        Qp = (0, Lp.i)("canCraft"),
        {
          clientEscMenuOptions: Bp
        } = (0, bp.o)(["clientEscMenuOptions"]),
        Np = (0, op.useRef)(null);
      Np.current || (Np.current = new FO(Yp.gameBridge.latest("inventory").player));
      const Tp = Np.current,
        {
          draggedDomRef: fp,
          draggedInfoRef: hp,
          specialItemRef: ap,
          hoverInfoDomRef: np,
          longHoldSplitInfoRef: Fp,
          currHoveredIdx: gp,
          currHoveredDisplayInfo: Gp,
          displayDraggedItemName: rp,
          forceRerenderIfVisible: Zp,
          removeDraggedInfoRef: zp,
          checkDraggedItemConsistencyWithInven: sp,
          refreshDraggedAttributes: Kp,
          swapSlots: Vp,
          getPointerDownForIdx: ii,
          getPointerUpForIdx: ci,
          getSetHovering: Oi,
          setCurrHoveredDisplayInfo: oi,
          moveFollowerTo: Ii
        } = nO({
          show: cp,
          close: Xp,
          canCraft: Qp,
          variation: xp,
          inventoryItemsMoveable: lp,
          setCraftFlyAnims: kp
        });
      (0, op.useEffect)((() => {
        const pp = !cp && null !== Yp.gameBridge.latest("inventory").chest;
        if (pp && Yp.gameBridge.send("closeChest", null), cp || (Tp.clearMarks(), Oi(null)(!1)), pp) {
          Dc.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [cp]), (0, qp.b)("chestToggled", (pp => {
        if (pp ? Op() : cp && Xp(), pp) {
          Dc.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Si = (0, Xi.n)();
      (0, qp.b)("inventory", (pp => {
        let {
          player: ip
        } = pp;
        var Op, op, Ip;
        (Tp.update(ip, !cp && Si.shown), ap.current) && (ap.current = (op = ap.current, Ip = null !== (Op = ip[ap.current.idx]) && void 0 !== Op ? Op : null, fO(op, Ip) ? (op.attributes = Ip.attributes, null !== Ip.amount && op.amount > Ip.amount && (op.amount = Ip.amount), op) : null));
        Kp(), null !== gp && Oi(gp)(!0), Zp()
      })), (0, op.useEffect)((() => (Yp.gameBridge.send("setInventoryOpen", cp), () => {
        Yp.gameBridge.send("setInventoryOpen", !1)
      })), [cp]);
      const xi = (pp, ip) => {
        if (pp === yc.f) return void(pp => {
          const ip = ap.current;
          if (!ip || null === (0, Pc.j)(Yp.gameBridge.latest("inventory"), ip.idx)) return;
          const cp = pp ? Math.max(ip.amount, 1) : 1,
            Op = ip.amount - cp;
          if (!Yp.gameBridge.send("removeInventoryItem", {
              slot: ip.idx,
              amount: cp,
              drop: !0
            })) return;
          const op = ap.current;
          op && (op.amount = Math.min(op.amount, Op), op.amount <= 0 && (ap.current = null)), Zp()
        })(ip);
        const cp = null === pp ? null : (0, Pc.j)(Yp.gameBridge.latest("inventory"), pp);
        if (null !== cp) {
          var Op, op, Ip;
          const Sp = ip && null !== (Op = cp.amount) && void 0 !== Op ? Op : 1;
          Yp.gameBridge.send("removeInventoryItem", {
            slot: pp,
            amount: Sp,
            drop: !0
          }), pp === (null === (op = hp.current) || void 0 === op ? void 0 : op.idx) && (hp.current.amount -= Sp, hp.current.amount <= 0 && zp(), Zp()), pp === (null === (Ip = ap.current) || void 0 === Ip ? void 0 : Ip.idx) && (ap.current = null, Zp())
        }
      };
      (0, qp.b)("inventoryDropRequested", (pp => {
        cp && gp !== yc.f && xi(gp, pp)
      }));
      const Li = (pp, ip) => {
        let cp = ip;
        if (ip === yc.f) {
          if (!ap.current) return;
          cp = ap.current.idx
        }
        const Op = Vp(pp, cp);
        if (Op && hp.current && (hp.current.idx === cp ? hp.current.idx = pp : hp.current.idx === pp && (hp.current.idx = cp)), Op && ip === yc.f) {
          const pp = (0, Pc.j)(Yp.gameBridge.latest("inventory"), cp);
          ap.current = pp ? {
            idx: cp,
            name: pp.name,
            attributes: pp.attributes,
            amount: (0, Pc.c)(pp)
          } : null
        }
        Zp()
      };
      (0, qp.b)("numberKeyPressed", (pp => {
        null !== gp && cp && Li(pp - 1, gp)
      })), (0, op.useEffect)((() => {
        cp || (ap.current = null, zp(), oi(null))
      }), [cp, zp, oi, ap]);
      const Yi = ap.current;
      (0, op.useEffect)((() => {
        gp === yc.f && Oi(yc.f)(!0)
      }), [Yi, gp, Oi]);
      const Di = () => {
        sp(), Kp(), Zp()
      };
      (0, qp.b)("chestRefreshed", Di), (0, qp.b)("inventorySynced", Di);
      const [Ai, Pi] = (0, op.useState)(new Map), Wi = null !== (ip = Ai.get(xp)) && void 0 !== ip ? ip : null, yi = (pp, ip) => {
        Pi((cp => {
          const Op = cp.get(pp);
          return Op && Op.name === ip.name && Op.FD === ip.FD ? cp : new Map(cp).set(pp, ip)
        }))
      };
      (0, mp.f)("craftingRecipesEdited", (() => {
        Zp()
      })), (0, mp.f)(rc.c, (pp => {
        let {
          variation: ip,
          itemName: cp
        } = pp;
        yi(ip, {
          name: cp,
          FD: 0
        })
      }));
      const [Ui, wi] = (0, op.useState)(null), [vi, ti] = (0, op.useState)(null);
      (0, qp.b)("enchantingTableOpened", (pp => {
        let {
          position: ip,
          blockName: cp
        } = pp;
        wi(ip), ti(cp)
      }));
      const [Hi, di] = (0, op.useState)(""), [ei, ui] = (0, op.useState)(null);
      (0, op.useEffect)((() => {
        cp && Cp.current && (Cp.current.scrollTop = Ep.current)
      }), [cp]);
      return (pp => {
        const ip = (0, op.useRef)(pp);
        ip.current = pp, (0, op.useEffect)((() => {
          if (!pp.show) return;
          const cp = (pp, cp, Op, op) => {
              const {
                getPointerDownForIdx: Ip,
                getPointerUpForIdx: Sp
              } = ip.current;
              Ip(pp)(gO(cp, Op, op)), Sp(pp)(gO(cp, Op, op))
            },
            Op = {
              primary: (pp, ip) => {
                cp(pp, ip, 0, !1)
              },
              secondary: (pp, ip) => {
                cp(pp, ip, 2, !1)
              },
              quickMove: (pp, ip) => {
                cp(pp, ip, 0, !0)
              },
              dropHeld: (pp, cp) => {
                ip.current.getPointerDownForIdx(yc.c)(gO(cp, pp ? 0 : 2, !1))
              },
              dropSlot: (pp, cp) => {
                ip.current.dropFromIdx(pp, cp)
              },
              swapWithHotbar: (pp, cp) => {
                ip.current.swapWithHotbar(pp, cp)
              },
              cancel: () => {
                ip.current.removeDraggedInfoRef()
              },
              isHolding: () => !!ip.current.draggedInfoRef.current,
              hasItemAt: pp => {
                const {
                  draggedInfoRef: cp,
                  specialItemRef: Op
                } = ip.current;
                if (pp === yc.f) return !!Op.current;
                const op = (0, Pc.j)(Yp.gameBridge.latest("inventory"), pp);
                return !!op && (0, Cc.h)(pp, (0, Pc.c)(op), [cp.current, Op.current]).shown
              },
              hover: (pp, cp) => {
                const {
                  moveFollowerTo: Op,
                  getSetHovering: op
                } = ip.current;
                Op(cp.clientX, cp.clientY), op(null !== pp && void 0 !== pp ? pp : void 0)(null !== pp, void 0, {
                  pageX: cp.clientX,
                  pageY: cp.clientY
                })
              },
              moveTo: pp => {
                ip.current.moveFollowerTo(pp.clientX, pp.clientY)
              },
              close: () => {
                ip.current.close()
              }
            };
          return (0, Sc.m)(Op)
        }), [pp.show])
      })({
        show: cp,
        close: Xp,
        draggedInfoRef: hp,
        specialItemRef: ap,
        getPointerDownForIdx: ii,
        getPointerUpForIdx: ci,
        getSetHovering: Oi,
        moveFollowerTo: Ii,
        removeDraggedInfoRef: zp,
        dropFromIdx: xi,
        swapWithHotbar: Li
      }), (0, op.useEffect)((() => {
        yp.m.GA("inventoryDraggedItemUpdated", {
          draggedInfo: hp.current,
          specialItemInfo: ap.current,
          setHovered: Oi,
          pointerDown: ii,
          pointerUp: ci,
          variation: Qp ? xp : void 0,
          craftFlyAnims: ep
        })
      })), (0, Dp.jsxs)(Jp.b, {
        show: cp,
        style: {
          touchAction: cp ? "none" : void 0
        },
        children: [hp.current && (0, Dp.jsx)(tc, {
          draggedInfo: hp.current,
          toAddRef: fp
        }), hp.current && rp && (0, Dp.jsx)(Hc, {
          className: "DraggedInvenItemName",
          displayInfo: aO(hp.current),
          domRef: null
        }), !hp.current && Gp && (0, Dp.jsx)(Hc, {
          displayInfo: Gp,
          domRef: np
        }), Fp.current && hp.current && (0, Dp.jsx)(dc, {
          info: Fp.current,
          draggedInfo: hp.current
        }), ep.map((pp => (0, Dp.jsx)(Wc.d, {
          anim: pp,
          onComplete: Mp
        }, pp.id))), (0, Dp.jsx)(Sp.c, {
          show: cp,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Xp,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: ii(yc.c),
          pointerUp: ci(yc.c),
          doGameplayStartStopOnShow: !0
        }), Hp && (0, Dp.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, Dp.jsx)("div", {
            ref: Ap,
            className: "InventoryAdOuter",
            children: (0, Dp.jsx)(Ac.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Ap
              },
              verticalAlign: "start",
              showing: cp && Wp,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, Dp.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, Dp.jsxs)("div", {
              className: uc()("Inventory", {
                WithGameButtons: Up.length > 0,
                WithPanelButtons: wp,
                WideChestOpen: tp
              }),
              children: [(0, Dp.jsx)("div", {
                className: "InventoryFiller"
              }), (0, Dp.jsx)(Yc, {
                show: cp,
                buttons: Up
              }), (0, Dp.jsxs)("div", {
                className: "InvenBody",
                children: [(0, Dp.jsx)(qO, {
                  variation: xp,
                  canCraft: Qp,
                  show: cp,
                  creativeMounted: dp,
                  specialItemRef: ap,
                  draggedInfo: hp.current,
                  getSetHovering: Oi,
                  getPointerDownForIdx: ii,
                  getPointerUpForIdx: ci,
                  enchantingTablePosition: Ui,
                  enchantingTableBlockName: vi,
                  selectedCraftable: Wi,
                  dispatchSelectedCraftable: pp => {
                    yi(xp, pp)
                  },
                  creativeScrollDiv: Cp,
                  creativeSearchVal: Hi,
                  setCreativeSearchVal: di,
                  creativeCategory: ei,
                  setCreativeCategory: ui,
                  onCraft: function(pp, ip) {
                    let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (sp(), (pp || cp.length > 0) && kp((ip => {
                        const Op = [...ip],
                          op = ip.filter((pp => "ingredient" === pp.kind)).length;
                        for (const pp of cp.slice(0, Math.max(0, 24 - op))) Op.push({
                          id: (0, Wc.h)(),
                          ...pp,
                          to: pp.to
                        });
                        return pp && Op.push({
                          id: (0, Wc.h)(),
                          ...pp,
                          to: (0, Pc.e)(pp.eL)
                        }), Op
                      })), null !== ip) {
                      var Op;
                      const pp = Yp.gameBridge.latest("inventory");
                      (0, Rp.vb)(null === (Op = (0, Pc.j)(pp, ip)) || void 0 === Op ? void 0 : Op.name) ? ii(ip)({
                        button: 0,
                        shiftKey: !0
                      }): Vp(ip, pp.selectedSlot)
                    }
                  }
                }), (0, Dp.jsx)(JO, {
                  draggedInfo: hp.current,
                  specialItemInfo: ap.current,
                  craftFlyAnims: ep,
                  getSetHovering: Oi,
                  getPointerDownForIdx: ii,
                  getPointerUpForIdx: ci,
                  variation: xp,
                  canCraft: Qp,
                  isNewSlot: pp => Bp.showNewItemIndicator && Tp.isNew(pp)
                })]
              })]
            }), (0, Dp.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, Dp.jsx)("div", {
                ref: Pp,
                className: "InventoryAd",
                children: (0, Dp.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var ZO = cp(1466),
      zO = cp(131);
    const sO = (0, op.memo)((function(pp) {
      let {
        show: ip,
        onOpen: cp,
        onClose: Op
      } = pp;
      const Ip = (0, op.useRef)(0),
        xp = () => (0, ZO.j)() && !(0, ZO.q)() && Ip.current <= 2;
      ip = xp() && ip;
      const Lp = () => {
        Ip.current++, Op()
      };
      (0, mp.f)("ctrlCrouchWithoutFullscreen", (() => {
        xp() && cp()
      })), (0, mp.f)("displaymodeFullscreenChange", (pp => {
        ip && pp && Lp()
      }));
      const Yp = "crazygames" === zO.siteUsed;
      return (0, Dp.jsx)(Sp.c, {
        close: Lp,
        escDoesExit: !0,
        show: ip,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, Dp.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, Dp.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Yp && (0, Dp.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, Dp.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, Dp.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Yp && (0, Dp.jsx)(Wp.o, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, ZO.u)(), Lp()
              },
              children: (0, Dp.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, Dp.jsx)(Wp.K, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Lp()
              },
              children: (0, Dp.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var KO = cp(3692),
      VO = cp(3718),
      po = cp(1372),
      io = cp(3678),
      co = cp(1380),
      Oo = cp(36751),
      oo = cp(3685),
      Io = cp(3689);

    function So(pp, ip) {
      return (0, Oo.h)(!0, pp, ip) ? () => {
        !async function(pp) {
          await io.d.refresh();
          const {
            data: ip,
            failed: cp
          } = io.d.getState();
          if (null === ip || cp) return;
          const Op = io.d.getExclusion(pp);
          if ("blocked" === Op) return;
          const op = null === Op;
          po.NotificationProvider.showCustomPopup({
            body: ip => {
              const cp = cp => ({
                text: oo.h[cp].text,
                onClick: () => {
                  ip(), (0, Io.f)(cp, pp, null)
                }
              });
              return (0, Dp.jsx)(co.j, {
                title: op ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: pp
                  }
                },
                secondary: op ? cp("ignore") : void 0,
                confirm: cp("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: ip
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(pp)
      } : null
    }
    cp(3703);
    const xo = (0, op.memo)((function(pp) {
      let {
        show: ip,
        onOpen: cp,
        onClose: Op
      } = pp;
      const [Ip, xp] = (0, op.useState)(""), [Lp, Ap] = (0, op.useState)(""), [Pp, Wp] = (0, op.useState)(null), [yp, Up] = (0, op.useState)(null), wp = (0, qp.g)("hiddenPlayerNames"), vp = {
        kind: "worldCodeLine",
        onSubmit: (pp, ip) => {
          Op(), Yp.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: yp,
            Cx: pp,
            details: ip
          })
        }
      }, tp = {
        kind: "player",
        shownPlayerName: (0, Oi.e)(Ip, wp),
        onSubmit: (pp, ip) => {
          Op(), (0, VO.b)({
            playerId: Lp,
            playerName: Ip,
            chatMsgId: yp,
            policyId: pp,
            details: ip,
            onAccepted: So(Ip, wp)
          })
        }
      };
      return (0, mp.f)("OpenReportMenu", (pp => {
        let {
          playerEId: ip,
          playerName: Op,
          VD: op,
          serverChatMsgId: Ip
        } = pp;
        Ap(ip), xp(Op), Wp(op), Up(Ip), cp()
      })), (0, Dp.jsx)(Sp.c, {
        show: ip,
        close: Op,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, Dp.jsx)("div", {
          className: "ReportPanel",
          children: ip && (0, Dp.jsx)(KO.e, {
            reported: null === Lp ? vp : tp,
            chatMessage: Pp,
            inGame: !0,
            onCancel: Op
          })
        })
      })
    }));
    var Lo = cp(37044),
      Yo = cp(3696);
    const Do = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      Ao = (0, op.memo)((function(pp) {
        var ip, cp;
        let {
          show: Op,
          onOpen: Ip,
          onClose: xp
        } = pp;
        const {
          t: Lp
        } = (0, zp.H)(), [Ap, Pp] = (0, op.useState)(null), [yp, Up] = (0, op.useState)(0);
        (0, mp.f)("OpenDiscordReportBox", (pp => {
          Yp.gameBridge.send("requestDiscordReportKey", pp), Pp(null), Up(0), Ip()
        })), (0, mp.f)("setDiscordReportKey", Pp);
        const wp = Op && null === Ap;
        (0, op.useEffect)((() => {
          if (!wp) return;
          const pp = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), Pp({
              vS: null,
              tS: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(pp)
          }
        }), [wp]);
        const vp = null !== (ip = null === Ap || void 0 === Ap ? void 0 : Ap.vS) && void 0 !== ip ? ip : null,
          tp = null !== (cp = null === Ap || void 0 === Ap ? void 0 : Ap.tS) && void 0 !== cp ? cp : null;
        return (0, Dp.jsx)(Sp.c, {
          show: Op,
          close: xp,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, Dp.jsx)("div", {
            className: "ReportPanel",
            children: (0, Dp.jsxs)(co.j, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === tp ? "report:discordReportDescription" : void 0,
              confirm: null === tp ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(Lo.d, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === tp ? "general:cancel" : "general:ok",
                onClick: xp
              },
              padStartsOn: "cancel",
              children: [null !== tp && (0, Dp.jsx)(Yo.b, {
                children: Lp(Do[tp])
              }), null === tp && (0, Dp.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, Dp.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== vp && void 0 !== vp ? vp : Lp("report:loadingReportKey")
                }), (0, Dp.jsx)(Wp.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(vp).catch((pp => {
                      console.error("Failed to copy report key:", pp)
                    })), Up(Date.now())
                  },
                  disabled: Date.now() - yp < 1e3 || !vp,
                  children: Date.now() - yp < 1e3 ? Lp("general:copied") : Lp("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var Po = cp(1308);
    const Wo = {
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
      yo = (0, op.memo)((function(pp) {
        let {
          show: ip,
          onOpen: cp,
          onClose: Op
        } = pp;
        const [Ip, xp] = (0, op.useState)(null), Lp = (0, op.useRef)(0), Ap = (0, op.useRef)(null), {
          t: Pp
        } = (0, zp.H)();
        (0, mp.f)("EditCustomLobbyBlock", (pp => {
          let {
            pos: ip
          } = pp;
          xp(ip), null !== ip && cp(), Ap.current.scrollTo(0, Lp.current)
        }));
        const Wp = pp => {
          Yp.gameBridge.send("setCustomLobbyBlock", {
            pos: Ip,
            blockName: pp
          }), Op()
        };
        return (0, Dp.jsx)(Sp.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: Op,
          escDoesExit: !0,
          show: ip,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, Dp.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Ap,
            onScroll: () => {
              Lp.current = Ap.current.scrollTop
            },
            children: (0, Dp.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Wo).map((pp => {
                let [ip, cp] = pp;
                return (0, Dp.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, Dp.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Pp(ip)
                  }), (0, Dp.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(cp).map((pp => {
                      let [ip, {
                        tooltip: cp,
                        blocks: Op
                      }] = pp;
                      return (0, Dp.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, Dp.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Pp(ip), (0, Dp.jsx)(rp.d, {
                            hoverInfo: Pp(cp),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, Dp.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Op.map((pp => (0, Dp.jsx)(Uo, {
                            blockName: pp,
                            selectBlock: Wp
                          }, pp)))
                        })]
                      }, ip)
                    }))
                  })]
                }, ip)
              }))
            })
          })
        })
      })),
      Uo = (0, op.memo)((function(pp) {
        var ip;
        let {
          blockName: cp,
          selectBlock: Op
        } = pp;
        const op = (0, YO.c)(cp),
          Ip = null !== (ip = void 0 === op ? void 0 : (0, LO.displayNameOf)(op)) && void 0 !== ip ? ip : cp,
          Sp = void 0 === op ? void 0 : (0, LO.descriptionOf)(op);
        return (0, Dp.jsx)(rp.f, {
          tooltipInner: (0, Dp.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, Dp.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, Dp.jsx)(kp.e, {
                text: Ip
              })
            }), Sp && (0, Dp.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, Dp.jsx)(kp.e, {
                text: Sp
              })
            })]
          }),
          children: (0, Dp.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Op(cp),
            children: (0, Dp.jsx)(Lc.d, {
              itemName: cp,
              amount: 1
            })
          })
        }, cp)
      }));
    var wo = cp(3107),
      vo = cp(4326),
      to = cp(34462);

    function Ho() {
      const pp = (0, qp.g)("itemInfo");
      return (0, op.useMemo)((() => function(pp) {
        return {
          getDefaultItemStat(ip, cp) {
            var Op;
            const op = pp[ip];
            return "description" === cp ? null === op || void 0 === op ? void 0 : op.description : null !== (Op = null === op || void 0 === op ? void 0 : op.displayName) && void 0 !== Op ? Op : ip
          }
        }
      }(pp)), [pp])
    }
    const eo = (0, op.memo)((function(pp) {
        var ip, cp, Op, Ip, xp, Lp, Yp, Ap, Pp, Wp, yp, Up, vp, tp, Hp, dp, ep, jp, kp, Rp, qp, Mp, Cp;
        let {
          togglePointerLock: Ep,
          show: Xp,
          onOpen: lp,
          onClose: Qp
        } = pp;
        const {
          t: Jp
        } = (0, zp.H)(), Bp = Ho(), Np = (0, op.useRef)(null), Tp = (0, op.useRef)(vo.e.MobHungerLevel.Hungry), fp = (0, op.useRef)(null), bp = (0, wo.c)(), hp = (0, op.useRef)(null), ap = (0, op.useRef)(null), np = Np.current;
        (0, op.useEffect)((() => {
          if (!Xp) return;
          const pp = to.j.openPet(hp.current);
          return ap.current = pp, () => {
            pp.close(), ap.current = null
          }
        }), [Xp]), (0, op.useEffect)((() => {
          Xp && np && ap.current.show(function(pp) {
            var ip;
            let {
              mobType: cp,
              mobSettings: Op
            } = pp;
            return {
              mobType: cp,
              variation: null !== (ip = Op.variation) && void 0 !== ip ? ip : "default",
              metaInfo: Op.metaInfo,
              tamed: !(0, eO.G)(Op.ownerDbId)
            }
          }(np))
        }), [Xp, np]), (0, op.useEffect)((() => {
          const pp = () => {
            var pp;
            const ip = vo.e.getMobHungerLevel(null === (pp = Np.current) || void 0 === pp ? void 0 : pp.mobSettings.petInfo.lastFedAt);
            if (ip !== Tp.current && (Tp.current = ip, bp()), fp.current) {
              var cp;
              const pp = Date.now(),
                ip = vo.e.getNextStateAt(null === (cp = Np.current) || void 0 === cp ? void 0 : cp.mobSettings.petInfo.lastFedAt);
              let Op = Math.floor((ip - pp) / 1e3),
                op = "";
              if (Op > 3600) {
                op += Math.floor(Op / 60 / 60).toString().padStart(2, "0"), op += ":", Op %= 3600
              }
              const Ip = Op % 60;
              op += Math.floor(Op / 60).toString().padStart(2, "0"), op += ":", op += Ip.toString().padStart(2, "0"), fp.current.textContent = op
            }
          };
          pp();
          const ip = setInterval(pp, 250);
          return () => {
            clearInterval(ip)
          }
        }), [np, bp]), (0, mp.f)("showPetUi", (pp => {
          let {
            mobType: ip,
            mobSettings: cp
          } = pp;
          Np.current = {
            mobType: ip,
            mobSettings: cp
          }, Xp || lp()
        }));
        const Fp = null === (ip = Np.current) || void 0 === ip ? void 0 : ip.mobSettings.health,
          gp = null === (cp = Np.current) || void 0 === cp ? void 0 : cp.mobSettings.maxHealth,
          Gp = vo.e.getFriendshipLevelInfo(null !== (Op = null === (Ip = Np.current) || void 0 === Ip ? void 0 : Ip.mobSettings.petInfo.friendshipPoints) && void 0 !== Op ? Op : 0);
        return (0, Dp.jsx)(Sp.c, {
          className: "PetUIOuter",
          close: Qp,
          escDoesExit: !0,
          show: Xp,
          togglePointerLock: Ep,
          forcePointerUnlock: Xp,
          globallyUniqueKey: "PetUI",
          children: (0, Dp.jsx)("div", {
            className: "PetUI",
            children: (0, Dp.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, Dp.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, Dp.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (xp = null === (Lp = Np.current) || void 0 === Lp ? void 0 : Lp.mobSettings.name) && void 0 !== xp ? xp : "Your Pet"
                }), (0, Dp.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: hp
                })]
              }), (0, Dp.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, eO.G)(null === (Yp = Np.current) || void 0 === Yp ? void 0 : Yp.mobSettings.petInfo.friendshipPoints) && (0, Dp.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, Dp.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Jp("mobAiPlugin:friendshipTitle")
                  }), (0, Dp.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: vo.e.getIconsFromFriendshipPoints(null !== (Ap = Np.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Ap ? Ap : 0).map(((pp, ip) => (0, Dp.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: pp,
                        amount: 1
                      })
                    }, ip)))
                  }), (0, Dp.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, Dp.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, Dp.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${Gp.totalPointsForNextLevel>0?Math.max(Gp.pointsIntoCurrentLevel/Gp.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, Dp.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Gp.totalPointsForNextLevel > 0 ? ` ${Math.ceil(Gp.pointsIntoCurrentLevel)}/${Math.ceil(Gp.totalPointsForNextLevel)}` : Math.ceil(Gp.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, Dp.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, Dp.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Jp("mobAiPlugin:hungerTitle")
                  }), (0, Dp.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: vo.e.hungerLevelIcons[Tp.current].map(((pp, ip) => (0, Dp.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: pp,
                        amount: 1
                      })
                    }, ip)))
                  }), (0, Dp.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Jp(vo.e.hungerLevelTranslations[Tp.current].translationKey), Tp.current !== vo.e.MobHungerLevel.Starving && !(0, eO.G)(null === (Pp = Np.current) || void 0 === Pp ? void 0 : Pp.mobSettings.petInfo.lastFedAt) && (0, Dp.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Jp("mobAiPlugin:nextFeedIn", {
                        state: Jp(vo.e.hungerLevelTranslations[Tp.current + 1].translationKey)
                      }), ":", " ", (0, Dp.jsx)("span", {
                        ref: fp
                      })]
                    })]
                  })]
                }), (0, Dp.jsx)(rp.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Dp.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jp("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, Dp.jsxs)("div", {
                    className: uc()("PetUIQuickStatsItem", {
                      Disabled: (0, eO.G)(Fp) || (0, eO.G)(gp)
                    }),
                    children: [(0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, eO.G)(Fp) || (0, eO.G)(gp) ? "" : (0, Dp.jsxs)(Dp.Fragment, {
                        children: [Math.ceil(Fp), (0, Dp.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(gp)]
                        })]
                      })
                    })]
                  })
                }), (0, Dp.jsx)(rp.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Dp.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jp("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, Dp.jsxs)("div", {
                    className: uc()("PetUIQuickStatsItem", {
                      Disabled: (0, eO.G)(null === (Wp = Np.current) || void 0 === Wp ? void 0 : Wp.mobSettings.attackDamage) || Np.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (yp = Np.current) || void 0 === yp ? void 0 : yp.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, Dp.jsx)(rp.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Dp.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jp("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, Dp.jsxs)("div", {
                    className: uc()("PetUIQuickStatsItem", {
                      Disabled: (0, eO.G)(null === (Up = Np.current) || void 0 === Up ? void 0 : Up.mobSettings.secondaryAttackDamage) || Np.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (vp = Np.current) || void 0 === vp ? void 0 : vp.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, Dp.jsx)(rp.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Dp.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jp("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, Dp.jsxs)("div", {
                    className: uc()("PetUIQuickStatsItem", {
                      Disabled: (0, eO.G)(null === (tp = Np.current) || void 0 === tp ? void 0 : tp.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Hp = null === (dp = Np.current) || void 0 === dp || null === (ep = dp.mobSettings.baseRunningSpeed) || void 0 === ep ? void 0 : ep.toFixed(2)) && void 0 !== Hp ? Hp : ""
                    })]
                  })
                }), (0, Dp.jsx)(rp.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, Dp.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jp("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, Dp.jsxs)("div", {
                    className: uc()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (jp = Np.current) || void 0 === jp ? void 0 : jp.mobSettings.metaInfo)
                    }),
                    children: [(0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, Dp.jsx)(Lc.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, Dp.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (kp = Np.current) || void 0 === kp ? void 0 : kp.mobSettings.metaInfo) ? (0, Dp.jsx)(wp.d, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, eO.G)(null === (Rp = Np.current) || void 0 === Rp ? void 0 : Rp.mobSettings.tameInfo) && (0, Dp.jsxs)(Dp.Fragment, {
                  children: [(0, Dp.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, Dp.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Dp.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Dp.jsx)(jo, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: vo.e.feedTextColours[vo.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Dp.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, Dp.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Np.current.mobSettings.petInfo.superlikedFoodKnown ? (0, Dp.jsx)(uo, {
                            food: Np.current.mobSettings.petInfo.superlikedFood
                          }) : (0, Dp.jsx)(jo, {
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
                    }), (0, Dp.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Dp.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Dp.jsx)(jo, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: vo.e.feedTextColours[vo.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Dp.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (qp = Np.current.mobSettings.tameInfo.likedFoods) || void 0 === qp ? void 0 : qp.filter((pp => !Np.current.mobSettings.petInfo.superlikedFoodKnown || pp !== Np.current.mobSettings.petInfo.superlikedFood)).map((pp => (0, Dp.jsx)(uo, {
                          food: pp
                        }, pp)))
                      })]
                    }), (0, Dp.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Dp.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Dp.jsx)(jo, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: vo.e.feedTextColours[vo.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Dp.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Mp = Np.current.mobSettings.tameInfo.neutralFoods) || void 0 === Mp ? void 0 : Mp.map((pp => (0, Dp.jsx)(uo, {
                          food: pp
                        }, pp)))
                      })]
                    }), (0, Dp.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, Dp.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, Dp.jsx)(jo, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: vo.e.feedTextColours[vo.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, Dp.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Cp = Np.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Cp ? void 0 : Cp.map((pp => (0, Dp.jsx)(uo, {
                          food: pp
                        }, pp)))
                      })]
                    })]
                  }), Np.current.mobSettings.tameInfo.levelUpBonuses && (0, Dp.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: vo.e.MAX_LEVEL + 1
                    }).map(((pp, ip) => {
                      const cp = ip;
                      if (0 === cp) return null;
                      const Op = Np.current.mobSettings.tameInfo.levelUpBonuses[cp],
                        op = vo.e.getBonusDisplayInfo(Bp, Np.current.mobSettings, Np.current.mobType, Op);
                      return (0, Dp.jsxs)("div", {
                        className: uc()("PetUIFeedDropContainer", {
                          Selected: cp === vo.e.getFriendshipLevelInfo(Np.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, Dp.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: cp
                          }).map(((pp, ip) => (0, Dp.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, Dp.jsx)(Lc.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${cp}-${ip}`)))
                        }), (0, Dp.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: op && (0, Dp.jsx)(jo, {
                            icon: op.icon,
                            displayName: op.displayName,
                            description: op.description
                          })
                        })]
                      }, cp)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      uo = (0, op.memo)((function(pp) {
        let {
          food: ip,
          includeDescription: cp = !1
        } = pp;
        const Op = Ho(),
          op = Op.getDefaultItemStat(ip, "displayName"),
          Ip = Op.getDefaultItemStat(ip, "description");
        return (0, Dp.jsx)(jo, {
          icon: ip,
          displayName: op,
          description: cp ? Ip : null
        })
      })),
      jo = (0, op.memo)((function(pp) {
        let {
          icon: ip,
          displayName: cp,
          description: Op,
          tintColor: op,
          className: Ip = "PetUIFoodItem"
        } = pp;
        return (0, Dp.jsx)(rp.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, Dp.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, Dp.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, Dp.jsx)(kp.e, {
                text: cp
              })
            }), Op && (0, Dp.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, Dp.jsx)(kp.e, {
                text: Op
              })
            })]
          }),
          children: (0, Dp.jsx)("div", {
            className: Ip,
            children: (0, Dp.jsx)(Lc.d, {
              itemName: ip,
              amount: 1,
              tintColor: op
            })
          })
        })
      }));
    var ko = cp(3837),
      mo = cp(1149),
      Ro = cp(1251),
      qo = cp(2487),
      Mo = cp(37055),
      Co = cp(1014),
      Eo = cp(2429);

    function Xo(pp) {
      let {
        peers: ip
      } = pp;
      const [cp, Op] = (0, op.useState)(null), Ip = (0, qp.g)("players");
      return (0, Dp.jsx)("div", {
        className: "CodeEditorPresence",
        children: ip.map((pp => {
          var ip, op;
          const Sp = null !== (ip = null === (op = Ip.byId[pp.playerId]) || void 0 === op ? void 0 : op.cosmetics) && void 0 !== ip ? ip : {};
          return (0, Dp.jsxs)("div", {
            className: uc()("PresenceIcon", {
              Viewer: !pp.isEditor
            }),
            style: {
              backgroundColor: pp.colour
            },
            onMouseEnter: () => {
              Op(pp.playerId)
            },
            onMouseLeave: () => {
              Op(null)
            },
            children: [(0, Dp.jsx)(Eo.c, {
              cosmetics: Sp
            }), cp === pp.playerId && (0, Dp.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: pp.colour
              },
              children: pp.playerName
            })]
          }, pp.playerId)
        }))
      })
    }
    var Qo = cp(667),
      Jo = cp(37053),
      Bo = cp(36743),
      No = cp(37063);

    function To(pp) {
      const ip = pp.split("/"),
        cp = [];
      for (let Op = 1; Op < ip.length; Op++) cp.push(ip.slice(0, Op).join("/"));
      return cp
    }

    function fo(pp) {
      return pp.slice(pp.lastIndexOf("/") + 1)
    }
    const bo = (0, op.memo)((function(pp) {
      var ip;
      let {
        files: cp,
        activePath: Op,
        canEdit: Ip,
        directoryLinked: Sp,
        pluginNames: xp,
        activePluginName: Lp,
        activePluginFile: Yp,
        onSelect: Ap,
        onSelectPlugin: Pp,
        onCreate: yp,
        onRename: Up,
        onRenameFolder: vp,
        onDelete: tp,
        onToggleDirectorySync: Hp,
        schematics: dp,
        onManageSchematic: ep
      } = pp;
      const {
        t: jp
      } = (0, zp.H)(), kp = null !== (ip = (0, Mo.d)(cp)) && void 0 !== ip ? ip : Ro.k, mp = Object.keys(cp), [Rp, qp] = (0, op.useState)((() => new Set)), Mp = function(pp, ip, cp) {
        const Op = {
          folders: new Map,
          files: []
        };
        for (const Sp of pp) {
          if (Sp === ip) continue;
          let pp = Op;
          for (const ip of To(Sp)) {
            let cp = pp.folders.get(ip);
            cp || (cp = {
              folders: new Map,
              files: []
            }, pp.folders.set(ip, cp)), pp = cp
          }
          pp.files.push(Sp)
        }
        const op = [];
        pp.includes(ip) && op.push({
          kind: "file",
          path: ip,
          name: fo(ip),
          depth: 0
        });
        const Ip = (pp, ip) => {
          const Op = [...pp.folders.entries()].sort(((pp, ip) => {
            let [cp] = pp, [Op] = ip;
            return cp.localeCompare(Op)
          }));
          for (const [Sp, xp] of Op) {
            const pp = cp.has(Sp);
            op.push({
              kind: "folder",
              path: Sp,
              name: fo(Sp),
              depth: ip,
              collapsed: pp
            }), pp || Ip(xp, ip + 1)
          }
          pp.files.sort(((pp, ip) => pp.localeCompare(ip)));
          for (const cp of pp.files) op.push({
            kind: "file",
            path: cp,
            name: fo(cp),
            depth: ip
          })
        };
        return Ip(Op, 0), op
      }(mp, kp, Rp);
      (0, op.useEffect)((() => {
        qp((pp => {
          const ip = new Set(pp);
          let cp = !1;
          for (const op of To(Op)) cp = ip.delete(op) || cp;
          return cp ? ip : pp
        }))
      }), [Op]);
      const Cp = mp.length >= Fi.A,
        Ep = (pp, ip) => {
          if (pp.length > qo.t) return `Path must be at most ${qo.t} characters`;
          if (!(0, qo.s)(pp)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === pp) return "index.d.ts cannot be the world-code entry";
          const Op = !!ip && (0, Mo.f)(ip, pp);
          if (ip && (0, Mo.i)(ip) && !Op) return `Cannot rename ${ip} (only swapping ${Ro.k} and ${Ro.l} is allowed)`;
          if (pp in cp) return "A file with that path already exists";
          if ((0, Mo.i)(pp) && !Op) {
            if ((pp === Ro.k ? Ro.l : Ro.k) in cp) return `World code cannot have both ${Ro.k} and ${Ro.l}`
          }
          return null
        },
        Xp = pp => {
          po.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === pp ? void 0 : `${pp}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: pp => Ep(pp)
          }).getResult().then((pp => {
            "notificationTornDown" !== pp && null !== pp && "submit" === pp.type && yp(pp.value)
          }))
        },
        lp = pp => {
          po.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: pp,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ip => ip === pp ? "That is already the file's path" : Ep(ip, pp)
          }).getResult().then((ip => {
            "notificationTornDown" !== ip && null !== ip && "submit" === ip.type && Up(pp, ip.value)
          }))
        },
        Qp = pp => {
          const ip = pp => pp.replace(/\/+$/, "");
          po.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: pp,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: cp => {
              const Op = ip(cp);
              if (Op === pp) return "That is already the folder's path";
              for (const [ip, op] of(0, Mo.m)(mp, pp, Op)) {
                const pp = Ep(op, ip);
                if (null !== pp) return pp
              }
              return null
            }
          }).getResult().then((cp => {
            "notificationTornDown" !== cp && null !== cp && "submit" === cp.type && vp(pp, ip(cp.value))
          }))
        },
        Jp = pp => {
          po.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: pp
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((ip => {
            !0 === ip && tp(pp)
          }))
        };
      return (0, Dp.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, Dp.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, Dp.jsx)("span", {
            children: "Files"
          }), Ip && !Cp && (0, Dp.jsx)(Wp.w, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Xp()
            },
            children: (0, Dp.jsx)(wp.d, {
              name: "plus"
            })
          })]
        }), (0, Dp.jsxs)("div", {
          className: "FileTreeList",
          children: [Mp.map((pp => {
            const ip = pp.path;
            if ("folder" === pp.kind) return (0, Dp.jsx)(no, {
              path: ip,
              name: pp.name,
              depth: pp.depth,
              collapsed: pp.collapsed,
              onToggle: () => {
                var pp;
                pp = ip, qp((ip => {
                  const cp = new Set(ip);
                  return cp.delete(pp) || cp.add(pp), cp
                }))
              },
              canCreate: Ip && !Cp,
              canRename: Ip,
              onCreate: Xp,
              onRename: Qp
            }, `folder:${ip}`);
            const op = (0, Mo.i)(ip),
              Sp = Ro.k in cp && Ro.l in cp,
              xp = !op || Sp,
              Yp = null === Lp && ip === Op;
            return (0, Dp.jsx)(go, {
              path: ip,
              label: pp.name,
              depth: pp.depth,
              isActive: Yp,
              canRename: Ip,
              onSelect: Ap,
              onRename: lp,
              onDelete: Jp,
              canDelete: xp && Ip
            }, ip)
          })), (0, Dp.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, Dp.jsxs)("span", {
              children: ["Schematics (", Object.keys(dp).length, "/", No.g, ")"]
            }), Ip && (0, Dp.jsx)(Wp.w, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(dp).length >= No.g,
              onClick: () => {
                ep("")
              },
              children: (0, Dp.jsx)(wp.d, {
                name: "plus"
              })
            })]
          }), Object.keys(dp).sort().map((pp => (0, Dp.jsx)(go, {
            path: pp,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: ep
          }, pp))), xp.length > 0 && (0, Dp.jsxs)(Dp.Fragment, {
            children: [(0, Dp.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, Dp.jsx)("span", {
                children: "Plugins"
              })
            }), xp.map((pp => {
              var ip;
              const cp = Jo.e[pp],
                Op = Object.keys(null !== (ip = null === cp || void 0 === cp ? void 0 : cp.files) && void 0 !== ip ? ip : {
                  "index.ts": ""
                }).sort(((pp, ip) => "index.ts" === pp ? -1 : "index.ts" === ip ? 1 : pp.localeCompare(ip)));
              return (0, Dp.jsxs)("div", {
                children: [(0, Dp.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Mo.w)(pp)
                }), Op.map((ip => (0, Dp.jsx)(go, {
                  path: ip,
                  nested: !0,
                  isActive: Lp === pp && Yp === ip,
                  canRename: !1,
                  onSelect: () => {
                    Pp(pp, ip)
                  },
                  canDelete: !1
                }, ip)))]
              }, pp)
            }))]
          })]
        }), (0, Dp.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, Dp.jsx)(Wp.f, {
            className: "FileTreeFooterButton",
            onClick: Hp,
            children: jp(Sp ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function ho(pp) {
      return pp > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": pp
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function ao(pp) {
      let {
        depth: ip
      } = pp;
      return (0, Dp.jsx)(Dp.Fragment, {
        children: Array.from({
          length: ip
        }, ((pp, ip) => (0, Dp.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": ip
          }
        }, ip)))
      })
    }

    function no(pp) {
      let {
        path: ip,
        name: cp,
        depth: Op,
        collapsed: op,
        onToggle: Ip,
        canCreate: Sp,
        canRename: xp,
        onCreate: Lp,
        onRename: Yp
      } = pp;
      const Ap = [];
      Sp && Ap.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Lp(ip)
        }
      }), xp && Ap.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Yp(ip)
        }
      });
      const Pp = ho(Op);
      return (0, Dp.jsxs)("div", {
        className: uc()("FileTreeItem FileTreeFolder", Pp.className),
        style: Pp.style,
        children: [(0, Dp.jsx)(ao, {
          depth: Op
        }), (0, Dp.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !op,
          onClick: Ip,
          children: [(0, Dp.jsx)(wp.d, {
            className: "FileTreeFolderCaret",
            name: op ? "caret-right" : "caret-down"
          }), (0, Dp.jsx)(wp.d, {
            className: "FileTreeFolderIcon",
            name: op ? "folder" : "folder-open"
          }), cp]
        }), (0, Dp.jsx)(Fo, {
          path: ip,
          actions: Ap
        })]
      })
    }

    function Fo(pp) {
      let {
        path: ip,
        actions: cp
      } = pp;
      const Op = (0, op.useRef)(null);
      return 0 === cp.length ? null : (0, Dp.jsxs)("div", {
        ref: Op,
        className: "FileTreeItemActions",
        children: [(0, Dp.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${ip}`,
          children: (0, Dp.jsx)(wp.d, {
            name: "ellipsis"
          })
        }), (0, Dp.jsx)(Bo.c, {
          triggerElementRef: Op,
          options: cp
        })]
      })
    }

    function go(pp) {
      let {
        path: ip,
        label: cp = ip,
        depth: Op = 0,
        isActive: op,
        canRename: Ip,
        onSelect: Sp,
        onRename: xp,
        onDelete: Lp,
        canDelete: Yp,
        nested: Ap
      } = pp;
      const Pp = [];
      Ip && xp && Pp.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          xp(ip)
        }
      }), Yp && Lp && Pp.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Lp(ip)
        }
      });
      const Wp = ho(Op);
      return (0, Dp.jsxs)("div", {
        className: uc()("FileTreeItem", Wp.className, {
          Active: op,
          Nested: Ap
        }),
        style: Wp.style,
        children: [(0, Dp.jsx)(ao, {
          depth: Op
        }), (0, Dp.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: cp === ip ? void 0 : ip,
          onClick: () => {
            Sp(ip)
          },
          children: cp
        }), (0, Dp.jsx)(Fo, {
          path: ip,
          actions: Pp
        })]
      })
    }
    async function Go(pp) {
      const ip = (0, Mo.d)(pp);
      if (!ip || "" === pp[ip].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Op
      } = await Promise.all([cp.e(303), cp.e(304)]).then((() => cp(41728)));
      return (0, Jo.d)(Op(pp))
    }
    var ro = cp(37070);

    function Zo(pp, ip) {
      const cp = Object.keys(pp),
        Op = Object.keys(ip);
      if (cp.length !== Op.length) return !1;
      for (const op of cp)
        if (!(op in ip) || pp[op] !== ip[op]) return !1;
      return !0
    }

    function zo(pp, ip) {
      const cp = [],
        Op = [],
        op = [];
      for (const Ip of Object.keys(ip)) Ip in pp ? pp[Ip] !== ip[Ip] && op.push(Ip) : cp.push(Ip);
      for (const Ip of Object.keys(pp)) Ip in ip || Op.push(Ip);
      return cp.sort(), Op.sort(), op.sort(), {
        creates: cp,
        deletes: Op,
        updates: op
      }
    }

    function so(pp, ip) {
      var cp;
      const Op = {
          ...pp
        },
        op = (0, Mo.d)(ip),
        Ip = (0, Mo.d)(Op);
      if (Ro.k in Op && Ro.l in Op) {
        const pp = null !== op && void 0 !== op ? op : Ro.l,
          cp = pp === Ro.k ? Ro.l : Ro.k;
        var Sp;
        if (!(pp in Op)) Op[pp] = null !== (Sp = ip[pp]) && void 0 !== Sp ? Sp : "";
        return delete Op[cp], Op
      }
      var xp;
      return op && !(op in Op) ? (Ip || (Op[op] = null !== (xp = ip[op]) && void 0 !== xp ? xp : ""), Op) : (Ip || op || (Op[Ro.k] = null !== (cp = Op[Ro.k]) && void 0 !== cp ? cp : "", delete Op[Ro.l]), Op)
    }

    function Ko(pp, ip) {
      const cp = (0, Mo.d)(ip),
        Op = Ro.k in ip && Ro.l in ip;
      return pp.filter((pp => !(0, Mo.i)(pp) || (!!Op || cp !== pp)))
    }
    async function Vo(pp, ip, Op) {
      const op = pp.getLobbyFiles(),
        Ip = (0, Fi.j)(Op, (0, Mo.n)(op, ip)),
        Sp = await pp.ensureJoined(ip),
        xp = (0, qo.u)(Sp.docKey);
      if (Sp.doc === Ip) return;
      for (let cp = 0; cp < 100; cp++) {
        const cp = pp.getCollabSnapshot();
        if (cp && (0, qo.u)(cp.docKey) === xp && pp.getActivePath() === ip) {
          if (pp.replaceActiveDoc(xp, Ip)) return;
          await (0, eO.M)(40)
        } else await (0, eO.M)(40)
      }
      const {
        ChangeSet: Lp
      } = await cp.e(299).then((() => cp(41548))), Dp = pp.getCollabSnapshot(), Ap = Dp && (0, qo.u)(Dp.docKey) === xp ? Dp : Sp;
      await async function(pp, ip, cp, Op) {
        const op = pp.of({
            from: 0,
            to: cp.length,
            insert: Op
          }, cp.length),
          Ip = JSON.stringify([{
            clientID: ip.clientID,
            changes: op.toJSON()
          }]),
          Sp = (0, qo.u)(ip.docKey);
        Ip.length <= qo.g ? Yp.gameBridge.send("sendCodeCollab", {
          eI: qo.e.Push,
          uI: Sp,
          jI: ip.version,
          RI: Ip
        }) : await (0, mo.postJsonWithMetricsCookiesAndJsonResponse)(`${ip.httpConfig.gsUrl}/code/collab-push`, ko.m["collab-push"].toBuffer({
          gameNameWithVariation: ip.httpConfig.gameNameWithVariation,
          lobbyName: ip.httpConfig.lobbyName,
          docKey: Sp,
          version: ip.version,
          updates: Ip
        }), {
          retries: 0
        })
      }(Lp, Ap, Ap.doc, Ip)
    }
    class pI {
      constructor(pp) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = pp
      }
      async writeLobbyFiles(pp) {
        const ip = {
            ...this.bridge.getLobbyFiles()
          },
          cp = {
            ...ip
          };
        for (const {
            path: Ip,
            text: Sp
          }
          of pp) cp[Ip] = Sp;
        if (!pp.every((pp => {
            let {
              path: ip,
              text: Op
            } = pp;
            return (0, Fi.j)(Op, (0, Mo.n)(cp, ip)) === Op
          }))) return !1;
        const Op = [];
        try {
          for (const {
              path: ip,
              text: cp
            }
            of pp) Op.push(ip), ip in this.bridge.getLobbyFiles() || (this.bridge.createFile(ip, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(ip, !0)), await Vo(this.bridge, ip, cp)
        } catch (op) {
          for (const pp of Op) pp in ip ? await Vo(this.bridge, pp, ip[pp]).catch((ip => {
            console.error("World Code AI: couldn't put back", pp, ip)
          })) : this.bridge.deleteFile(pp);
          throw op
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const pp = await (0, ro.o)(this.bridge.getStorageKey());
        return !!pp && (this.handle = pp, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(pp), !0)
      }
      async unlinkFolder() {
        const pp = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, ro.b)(pp), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const pp = this.bridge.getStorageKey(),
          ip = await (0, ro.n)(pp);
        return !!ip && (!!await (0, ro.g)(ip, "readwrite") && (this.handle = ip, this.linked = !0, await (0, ro.A)(pp, ip), await this.scaffoldLocalTypes(ip), !0))
      }
      scaffoldLocalTypes(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Op = (await Go(ip)).map((pp => Jo.e[pp])),
              op = Op.map((pp => {
                var ip;
                return `${pp.name}:${Object.keys(null!==(ip=null===pp||void 0===pp?void 0:pp.files)&&void 0!==ip?ip:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === op) return;
            const {
              ensureLocalBloxdTypes: Ip
            } = await Promise.all([cp.e(85), cp.e(301), cp.e(306)]).then((() => cp(41736)));
            await Ip(pp, Op), this.scaffoldedPluginNamesKey = op
          } catch (Op) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Op)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(pp) {
        this.handle && await this.scaffoldLocalTypes(this.handle, pp), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(pp)
      }
      async onDocTextChanged(pp, ip) {
        if (!this.handle) return;
        const cp = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [pp]: ip
        })];
        this.running && (this.pendingDocText.set(pp, ip), cp.push(this.flushDocTextToDisk())), await Promise.all(cp)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const pp = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const ip = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [cp, Op] of ip) this.lastSynced[cp] !== Op && (await (0, ro.G)(pp, cp, Op), this.lastSynced = {
              ...this.lastSynced,
              [cp]: Op
            })
          }
        } catch (ip) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", ip), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, ro.p)(this.handle))
          } catch (pp) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", pp)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, ro.g)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const ip = this.bridge.getLobbyFiles(),
              cp = await (0, ro.p)(this.handle);
            for (const pp of Object.keys(ip).filter(No.c)) {
              if (cp[pp] === ro.l) return void this.bridge.setMessage(`Move ${pp} outside the linked folder before syncing its placeholder.`, "warning");
              cp[pp] = No.r
            }
            if (Zo(cp, ip)) {
              for (const pp of Object.keys(ip).filter(No.c)) await (0, ro.G)(this.handle, pp, No.r);
              return this.lastSynced = {
                ...cp
              }, void this.beginWatch()
            }
            const Op = await this.promptReconcile(function(pp) {
              return null !== (0, Mo.d)(pp)
            }(cp));
            if ("unlink" === Op) return void await this.unlinkFolder();
            if ("dismissed" === Op) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Op) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(cp);
                for (const pp of Object.keys(ip).filter(No.c)) await (0, ro.G)(this.handle, pp, No.r);
                this.lastSynced = {
                  ...await (0, ro.p)(this.handle)
                }
              } else await (0, ro.I)(this.handle, ip), this.lastSynced = {
                ...ip
              }
            } catch (pp) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", pp), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(pp) {
        return await new Promise((ip => {
          const cp = [{
              choice: "local",
              Button: Wp.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Wp.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Wp.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Op = (0, Dp.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, Dp.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, Dp.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: pp ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, Dp.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: cp.filter((ip => "local" !== ip.choice || pp)).map((pp => {
                  let {
                    choice: cp,
                    Button: Op,
                    labelKey: Ip,
                    descriptionKey: Sp
                  } = pp;
                  return (0, Dp.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, Dp.jsx)(Op, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (pp => {
                          op.tearDownNotification(), ip(pp)
                        })(cp)
                      },
                      children: this.bridge.t(`codeEditor:${Ip}`)
                    }), (0, Dp.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Sp}`)
                    })]
                  }, cp)
                }))
              })]
            }),
            op = po.NotificationProvider.showCustomPopup({
              body: Op,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          op.getResult().then((pp => {
            "notificationTornDown" === pp && ip("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, ro.D)(this.handle, (pp => {
          this.onDiskFilesChanged(pp)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (pp) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", pp)
        }
      }
      async onDiskFilesChanged(pp) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const ip = this.bridge.getLobbyFiles();
        let cp = so(pp, this.lastSynced);
        for (const Ip in ip)
          if ((0, No.c)(Ip) && cp[Ip] === ro.l) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Op = Object.keys(cp).filter((pp => (0, No.c)(pp) && !(pp in ip)));
        Op.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Ip of Object.keys(ip).filter(No.c))(Ip in cp || Op.length > 0 || !(Ip in this.lastSynced)) && (cp[Ip] = No.r);
        if (!Zo(cp, pp)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(pp, cp), cp = so(await (0, ro.p)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Zo(cp, this.lastSynced)) {
          this.applying = !0;
          try {
            const pp = zo(this.lastSynced, cp);
            if (await this.pushDiskDeltaToLobby(cp, ip), null !== this.lastLobbySeen)
              for (const cp of [...pp.creates, ...pp.updates, ...pp.deletes])(0, No.c)(cp) || (cp in ip ? this.lastLobbySeen[cp] = ip[cp] : delete this.lastLobbySeen[cp]);
            this.lastSynced = {
              ...cp
            }
          } catch (op) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", op), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(pp, ip) {
        if (this.handle) {
          for (const cp of Object.keys(pp)) cp in ip || await (0, ro.s)(this.handle, cp);
          for (const [cp, Op] of Object.entries(ip)) pp[cp] !== Op && await (0, ro.G)(this.handle, cp, Op)
        }
      }
      async applyRemoteTreeToDisk(pp) {
        if (!this.handle) return;
        const ip = this.lastLobbySeen;
        if (null === ip) return void(this.lastLobbySeen = {
          ...pp
        });
        const cp = Object.keys(pp).filter((cp => ip[cp] !== pp[cp])),
          Op = Object.keys(ip).filter((ip => !(ip in pp)));
        if (0 !== cp.length || 0 !== Op.length) {
          this.applying = !0;
          try {
            for (const ip of [...Op, ...cp]) try {
              if (ip in pp) await (0, ro.G)(this.handle, ip, pp[ip]), this.lastSynced = {
                ...this.lastSynced,
                [ip]: pp[ip]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [ip]: pp[ip]
              };
              else {
                await (0, ro.s)(this.handle, ip);
                const pp = {
                  ...this.lastSynced
                };
                delete pp[ip], this.lastSynced = pp;
                const cp = {
                  ...this.lastLobbySeen
                };
                delete cp[ip], this.lastLobbySeen = cp
              }
            } catch (op) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", op), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(pp, ip) {
        const cp = function(pp, ip) {
          const cp = (0, Mo.d)(pp),
            Op = (0, Mo.d)(ip);
          return cp && Op && cp !== Op ? {
            from: cp,
            to: Op
          } : null
        }(pp, ip);
        return !!cp && (this.bridge.renameFile(cp.from, cp.to), await this.bridge.waitForLobbyPath(cp.to, !0), !0)
      }
      async applyLocalTreeToLobby(pp) {
        var ip;
        const cp = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), pp);
        const Op = this.bridge.getLobbyFiles(),
          op = zo(Op, pp),
          Ip = Ko(op.deletes, Op);
        for (const Yp of op.creates)(0, No.c)(Yp) || (this.bridge.createFile(Yp, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Yp, !0));
        for (const Yp of Ip)(0, No.c)(Yp) || (this.bridge.deleteFile(Yp), await this.bridge.waitForLobbyPath(Yp, !1));
        if (!(0, Mo.d)(this.bridge.getLobbyFiles()) && !(0, Mo.d)(pp)) {
          if (this.bridge.createFile(Ro.k, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Ro.k, !0), !this.handle) return;
          await (0, ro.G)(this.handle, Ro.k, ""), pp = {
            ...pp,
            [Ro.k]: ""
          }
        }
        const Sp = this.bridge.getLobbyFiles();
        for (const Yp of Object.keys(pp))(0, No.c)(Yp) || Sp[Yp] !== pp[Yp] && await Vo(this.bridge, Yp, pp[Yp]);
        const xp = this.bridge.getLobbyFiles(),
          Lp = cp in xp ? cp : null !== (ip = (0, Mo.d)(xp)) && void 0 !== ip ? ip : Ro.k;
        await this.bridge.ensureJoined(Lp)
      }
      async pushDiskDeltaToLobby(pp, ip) {
        const cp = this.bridge.getActivePath(),
          Op = await this.renameLobbyEntryIfSwitched(ip, pp) ? this.bridge.getLobbyFiles() : ip,
          op = zo(this.lastSynced, pp),
          Ip = Ko(op.deletes, Op).filter((pp => pp in Op));
        for (const Sp of op.creates)(0, No.c)(Sp) || (Sp in this.bridge.getLobbyFiles() || (this.bridge.createFile(Sp, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Sp, !0)), await Vo(this.bridge, Sp, pp[Sp]));
        for (const Sp of Ip)(0, No.c)(Sp) ? await this.bridge.deleteSchematic(Sp) : (this.bridge.deleteFile(Sp), await this.bridge.waitForLobbyPath(Sp, !1));
        for (const Sp of op.updates)(0, No.c)(Sp) || await Vo(this.bridge, Sp, pp[Sp]);
        cp in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== cp && await this.bridge.ensureJoined(cp)
      }
    }
    var iI = cp(1211);

    function cI() {
      const {
        websocketUrl: pp,
        gameNameWithVariation: ip,
        lobbyName: cp
      } = Yp.gameBridge.latest("connectedGame");
      return {
        gsUrl: iI.clientSideServerUrls.getHttpUrlFromWebSocketUrl(pp),
        gameNameWithVariation: ip,
        lobbyName: cp
      }
    }
    async function OI(pp) {
      const {
        gsUrl: ip,
        gameNameWithVariation: cp,
        lobbyName: Op
      } = cI();
      return await (0, mo.postBinaryWithMetricsCookiesAndCustomResponse)(`${ip}/code/schematics`, ko.Pj.schematics.toBuffer({
        gameNameWithVariation: cp,
        lobbyName: Op,
        request: JSON.stringify(pp)
      }), {
        retries: 0
      }, mo.HttpPayloadType.json)
    }
    var oI = cp(36549);

    function II(pp) {
      let {
        path: ip,
        revision: cp
      } = pp;
      const [Op, Ip] = (0, op.useState)(""), [Sp, xp] = (0, op.useState)(!1), [Lp, Yp] = (0, op.useState)(0);
      return (0, op.useEffect)((() => {
        let pp = !1;
        return Ip(""), xp(!1), OI({
          action: "preview",
          path: ip
        }).then((ip => {
          pp || Ip(`data:image/webp;base64,${ip.previewBase64}`)
        })).catch((ip => {
          console.error("Could not load schematic preview", ip), pp || xp(!0)
        })), () => {
          pp = !0
        }
      }), [ip, cp, Lp]), (0, Dp.jsxs)("div", {
        className: "SchematicPreview",
        children: [Op && (0, Dp.jsx)("img", {
          src: Op,
          alt: `Preview of ${ip}`
        }), !Op && !Sp && (0, Dp.jsx)(Mp.c, {
          loaderType: "Secondary"
        }), Sp && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, Dp.jsx)(Wp.f, {
            onClick: () => {
              Yp(Lp + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var SI = cp(3235);

    function xI(pp) {
      var ip;
      let {
        initialPath: cp,
        onChanged: Op,
        onClose: Ip
      } = pp;
      const Sp = "" === cp,
        [xp, Lp] = (0, op.useState)(null),
        [Yp, Ap] = (0, op.useState)(cp),
        [Pp, yp] = (0, op.useState)(!1),
        [Up, wp] = (0, op.useState)(!1),
        [vp, tp] = (0, op.useState)(null),
        [Hp, dp] = (0, op.useState)(!1),
        [ep, jp] = (0, op.useState)(""),
        kp = (0, op.useRef)(null),
        mp = (0, op.useRef)(!1),
        Rp = (0, op.useRef)(!0);
      (0, op.useEffect)((() => (Rp.current = !0, OI({
        action: "state"
      }).then((pp => {
        Rp.current && Lp(pp)
      })).catch((pp => {
        console.error("Could not load schematic assets", pp), Rp.current && jp("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        Rp.current = !1
      })), []);
      const qp = null === xp || void 0 === xp ? void 0 : xp.assets[cp],
        Mp = Object.keys(null !== (ip = null === xp || void 0 === xp ? void 0 : xp.assets) && void 0 !== ip ? ip : {}).length,
        Cp = Yp.trim(),
        Ep = Cp ? (0, No.c)(Cp) ? null !== xp && void 0 !== xp && xp.assets[Cp] && (Sp || Cp !== cp) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Xp = !!Cp && !Ep && (Sp ? Mp < No.g : Cp !== cp),
        lp = Hp || !xp;
      async function Qp(pp) {
        if (!mp.current && Rp.current) {
          mp.current = !0, dp(!0), jp("");
          try {
            const ip = await OI({
              ...pp,
              expectedRevision: xp.revision
            });
            Op(ip), Rp.current && Ip()
          } catch (cp) {
            var ip;
            if (console.error("Schematic asset operation failed", cp), Rp.current) jp(cp instanceof gp.e ? null !== (ip = cp.errorMessageForUser) && void 0 !== ip ? ip : cp.message : String(cp));
            try {
              const pp = await OI({
                action: "state"
              });
              Op(pp), Rp.current && Lp(pp)
            } catch (op) {
              console.error("Could not refresh schematic assets", op)
            }
          } finally {
            mp.current = !1, Rp.current && dp(!1)
          }
        }
      }
      return (0, Dp.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, Dp.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Sp ? "New schematic" : Pp ? "Rename schematic" : "Schematic"
        }), ep && (0, Dp.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: ep
        }), !xp && !ep && (0, Dp.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, Dp.jsxs)("fieldset", {
          disabled: lp,
          children: [Sp || Pp ? (0, Dp.jsxs)("label", {
            className: "SchematicField",
            children: [(0, Dp.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, Dp.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, Dp.jsx)(Nc.c, {
                className: "InputGenericPopupInput",
                defaultValue: cp,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Ap
              }, Pp ? "rename" : "create")
            })]
          }) : (0, Dp.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: cp
          }), (Sp || Pp) && Ep && (0, Dp.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Ep
          }), Sp ? (0, Dp.jsxs)(Dp.Fragment, {
            children: [Mp >= No.g && (0, Dp.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", No.g, " maximum)."]
            }), Up ? (0, Dp.jsxs)(Dp.Fragment, {
              children: [(0, Dp.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, Dp.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": lp || !Xp,
                children: (0, Dp.jsx)(oI.c, {
                  loading: null === vp,
                  schematics: null !== vp && void 0 !== vp ? vp : [],
                  disableAutoExport: !0,
                  onSchematicPicked: pp => {
                    !lp && Xp && Qp({
                      action: "profile",
                      path: Cp,
                      schematicId: pp.schematicId
                    })
                  }
                })
              }), (0, Dp.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, Dp.jsx)(Wp.f, {
                  className: "InputGenericPopupButton",
                  disabled: lp,
                  onClick: () => {
                    wp(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, Dp.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, Dp.jsx)(Wp.f, {
                className: "InputGenericPopupButton",
                disabled: lp || !Xp,
                onClick: () => {
                  (0, SI.h)(kp.current)
                },
                children: "Upload Schematic"
              }), (0, Dp.jsx)(Wp.f, {
                className: "InputGenericPopupButton",
                disabled: lp || !Xp,
                onClick: () => {
                  !async function() {
                    if (wp(!0), jp(""), !vp) try {
                      const pp = await (0, mo.postJsonWithMetricsCookiesAndJsonResponse)(`${iI.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      Rp.current && tp(pp)
                    } catch (pp) {
                      console.error("Could not load profile schematics", pp), Rp.current && (wp(!1), jp("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, Dp.jsx)("input", {
              ref: kp,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: pp => {
                var ip;
                const cp = null === (ip = pp.target.files) || void 0 === ip ? void 0 : ip[0];
                if (pp.target.value = "", !cp) return;
                if (cp.size > No.k) return void jp("The schematic file is too large.");
                const Op = Cp;
                dp(!0);
                const op = new FileReader;
                op.onload = () => {
                  Qp({
                    action: "upload",
                    path: Op,
                    base64: String(op.result).split(",")[1]
                  })
                }, op.onerror = () => {
                  console.error("Could not read schematic file", op.error), Rp.current && (dp(!1), jp("Could not read the selected file."))
                }, op.readAsDataURL(cp)
              }
            })]
          }) : qp ? (0, Dp.jsxs)(Dp.Fragment, {
            children: [!Pp && (0, Dp.jsx)(II, {
              path: cp,
              revision: xp.revision
            }), !Pp && (0, Dp.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(qp.byteSize / 1024), " KB \xb7 ", qp.dimensions.join(" \xd7 "), " blocks"]
            }), (0, Dp.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Pp ? (0, Dp.jsxs)(Dp.Fragment, {
                children: [(0, Dp.jsx)(Wp.f, {
                  className: "InputGenericPopupButton",
                  disabled: lp || !Xp,
                  onClick: () => {
                    Qp({
                      action: "rename",
                      path: cp,
                      newPath: Cp
                    })
                  },
                  children: "Rename"
                }), (0, Dp.jsx)(Wp.f, {
                  className: "InputGenericPopupButton",
                  disabled: lp,
                  onClick: () => {
                    yp(!1), Ap(cp)
                  },
                  children: "Cancel"
                })]
              }) : (0, Dp.jsxs)(Dp.Fragment, {
                children: [(0, Dp.jsx)(Wp.f, {
                  className: "InputGenericPopupButton",
                  disabled: lp,
                  onClick: () => {
                    yp(!0)
                  },
                  children: "Rename"
                }), (0, Dp.jsx)(Wp.K, {
                  className: "InputGenericPopupButton",
                  disabled: lp,
                  onClick: () => {
                    Qp({
                      action: "remove",
                      path: cp
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : xp && (0, Dp.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function LI(pp) {
      if ("string" !== typeof pp) return null;
      try {
        const ip = JSON.parse(pp);
        return (0, Mo.l)(null === ip || void 0 === ip ? void 0 : ip.worldCodeEngine) && "boolean" === typeof ip.engineLocked && function(pp) {
          if (null === pp) return !0;
          const ip = null === pp || void 0 === pp ? void 0 : pp.location;
          return "string" === typeof(null === pp || void 0 === pp ? void 0 : pp.reason) && (null === ip || "string" === typeof(null === ip || void 0 === ip ? void 0 : ip.path) && Number.isInteger(ip.line))
        }(ip.fallback) ? ip : (console.error("[CodeCollab] Malformed engine settings", pp), null)
      } catch (ip) {
        return console.error("[CodeCollab] Failed to parse engine settings", ip), null
      }
    }

    function YI(pp) {
      let {
        fallback: ip,
        onGoToLine: cp
      } = pp;
      const {
        t: Op
      } = (0, zp.H)(), {
        location: op
      } = ip;
      return (0, Dp.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Op("codeEditorEngine:notice", {
          reason: ip.reason
        }), op && (0, Dp.jsxs)(Dp.Fragment, {
          children: [" ", (0, Dp.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              cp(op.path, op.line)
            },
            children: Op("codeEditorEngine:goToLine", {
              line: String(op.line)
            })
          })]
        })]
      })
    }
    var DI = cp(5052),
      AI = cp(4462),
      PI = cp(37075);

    function WI(pp) {
      let {
        label: ip,
        hint: cp,
        checked: Op,
        onChange: op
      } = pp;
      return (0, Dp.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, Dp.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, Dp.jsx)("span", {
            children: ip
          }), (0, Dp.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: cp
          })]
        }), (0, Dp.jsx)("span", {
          className: "SwitchContainer",
          children: (0, Dp.jsx)(AI.b, {
            className: "SwitchCheckbox",
            checked: Op,
            onChange: pp => {
              op(pp.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function yI(pp) {
      let {
        engine: ip,
        onSetEngine: cp,
        aiHints: Op,
        variation: op
      } = pp;
      const {
        t: Ip
      } = (0, zp.H)(), [Sp, xp] = (0, PI.i)(PI.c);
      return (0, Dp.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, Dp.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Ip("codeEditor:moreOptions")
        }), ip && (0, Dp.jsx)(WI, {
          label: Ip("codeEditorEngine:toggle"),
          hint: Ip("codeEditorEngine:toggleHint"),
          checked: "ses" === ip,
          onChange: pp => {
            cp(pp ? "ses" : "quickjs")
          }
        }), Op && (0, Dp.jsx)(WI, {
          label: Ip("codeEditorAiHints:toggle"),
          hint: Ip("codeEditorAiHints:toggleHint"),
          checked: Op.shown,
          onChange: Op.setShown
        }), Op && PI.c.canChange && (0, Dp.jsx)(WI, {
          label: Ip("codeEditorAiKeySafetyCheck:toggle"),
          hint: Ip("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: Sp,
          onChange: pp => {
            pp ? xp(!0) : po.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((pp => {
              !0 === pp && xp(!1)
            }))
          }
        }), op && (0, Dp.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, Dp.jsx)(DI.i, {
            label: "codeEditor:variationLabel",
            children: (0, Dp.jsx)(Nc.c, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: op.name,
              onValueChange: op.setName,
              onEnter: op.reload
            })
          }), (0, Dp.jsx)(Wp.y, {
            className: "CodeEditorButton",
            onClick: op.reload,
            children: Ip("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var UI = cp(37084),
      wI = cp(37089);

    function vI(pp) {
      let {
        close: ip
      } = pp;
      const {
        t: cp
      } = (0, zp.H)(), Op = [{
        name: cp("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: cp("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: cp("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, Dp.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, Dp.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: cp("codeEditor:tutorialsTitle")
        }), (0, Dp.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Op.map((pp => (0, Dp.jsx)(Wp.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              ip(), (0, wI.H)(pp.tutorial)
            },
            children: pp.name
          }, pp.tutorial)))
        })]
      })
    }
    var tI = cp(116),
      HI = cp(36739),
      dI = cp(3722);
    const eI = (0, op.forwardRef)((function(pp, ip) {
      let {
        value: cp,
        onChange: Op,
        onSubmit: op,
        placeholder: Ip,
        maxLength: Sp,
        rows: xp = 2,
        allowNewLines: Lp = !1,
        onKeyDown: Yp,
        before: Ap
      } = pp;
      const {
        t: Pp
      } = (0, zp.H)(), yp = "" !== cp.trim(), Up = () => {
        yp && op()
      };
      return (0, Dp.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Ap, (0, Dp.jsx)("textarea", {
          ref: ip,
          className: "PanelPromptInput",
          value: cp,
          maxLength: Sp,
          rows: xp,
          placeholder: Ip,
          spellCheck: !1,
          autoComplete: "off",
          onChange: pp => {
            Op(Lp ? pp.target.value : pp.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: pp => {
            pp.nativeEvent.isComposing || 229 === pp.nativeEvent.keyCode ? pp.stopPropagation() : "Escape" !== pp.key && (pp.stopPropagation(), null === Yp || void 0 === Yp || Yp(pp), pp.defaultPrevented || "Enter" !== pp.key || Lp && pp.shiftKey || (pp.preventDefault(), Up()))
          }
        }), (0, Dp.jsx)(Wp.f, {
          className: "PanelPromptSend",
          disabled: !yp,
          onClick: Up,
          ariaLabel: Pp("codeEditorPanels:send"),
          children: (0, Dp.jsx)(wp.d, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function uI(pp) {
      let {
        inputRef: ip
      } = pp;
      const {
        t: cp
      } = (0, zp.H)(), {
        messages: Op,
        reportedPlayers: Ip,
        channel: Sp
      } = (0, dI.m)(), [xp, Lp] = (0, op.useState)(""), Yp = (0, op.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, Dp.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, Dp.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, Dp.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: cp("codeEditorChat:title")
          })
        }), 0 === Op.length ? (0, Dp.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: cp("codeEditorChat:empty")
        }) : (0, Dp.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, Dp.jsx)(HI.c, {
            messages: Op,
            reportedPlayers: Ip
          })
        }), (0, Dp.jsx)(eI, {
          ref: ip,
          value: xp,
          onChange: Lp,
          onSubmit: () => {
            (0, dI.i)(xp), Lp(""), Yp.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: Rp.Rc,
          rows: 1,
          placeholder: Sp ? cp("touchOnly" === (0, tI.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Sp.channelName
          }) : cp("codeEditorChat:placeholder"),
          before: Sp && (0, Dp.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Sp.elementBgColor
            },
            onClick: () => {
              dI.b.selectNextChannel(), ip.current.focus()
            },
            children: (0, Dp.jsx)(kp.e, {
              text: Sp.elementContent
            })
          }),
          onKeyDown: pp => {
            const ip = xp === Yp.current.text;
            if ("ArrowUp" !== pp.key && "ArrowDown" !== pp.key || !ip && "" !== xp) "Tab" === pp.key && !pp.shiftKey && Sp && (pp.preventDefault(), dI.b.selectNextChannel());
            else {
              pp.preventDefault();
              const cp = ip ? Yp.current.stepsBack : 0;
              Yp.current = (0, dI.h)(cp + ("ArrowUp" === pp.key ? 1 : -1)), Lp(Yp.current.text)
            }
          }
        })]
      })
    }
    var jI = cp(37092);

    function kI(pp) {
      return "expanded" === pp ? "always" : "shown" === pp ? "narrow" : void 0
    }

    function mI(pp) {
      var ip;
      let {
        WP: cp,
        worldPanel: Op,
        closeWorld: op,
        aiShown: Ip,
        defaultWidth: Sp,
        children: xp
      } = pp;
      const Lp = "hidden" !== cp;
      return (0, Dp.jsx)(jI.c, {
        side: "right",
        defaultSize: Lp ? "max(18rem, 40%)" : Sp,
        covers: null !== (ip = kI(cp)) && void 0 !== ip ? ip : Ip ? "narrow" : void 0,
        children: (0, Dp.jsxs)("div", {
          className: uc()("CodeEditorRightColumn", {
            WorldShown: Lp,
            WorldExpanded: "expanded" === cp
          }),
          children: [Lp && (0, Dp.jsx)(jI.c, {
            side: "top",
            onClose: op,
            children: Op
          }), xp]
        })
      })
    }
    var RI = cp(2007),
      qI = cp(1139),
      MI = cp(1317);
    class CI {
      constructor(pp, ip, cp) {
        this.measure = pp, this.apply = ip, this.now = cp, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var pp, ip;
        return null !== (pp = null === (ip = this.last) || void 0 === ip ? void 0 : ip.rect) && void 0 !== pp ? pp : null
      }
      sync() {
        const pp = function(pp) {
          const ip = Math.round(pp.left),
            cp = Math.round(pp.top);
          return {
            left: ip,
            top: cp,
            width: Math.round(pp.right) - ip,
            height: Math.round(pp.bottom) - cp
          }
        }(this.measure());
        if (pp.width <= 0 || pp.height <= 0) return;
        const ip = this.now(),
          cp = this.last;
        let Op = {
          width: pp.width,
          height: pp.height
        };
        null === cp || pp.width === cp.rect.width && pp.height === cp.rect.height || (this.resizing = ip - this.resizedAt < 100, this.resizedAt = ip);
        const op = null !== cp && this.resizing && ip - this.resizedAt < 100 && (pp.width !== cp.bufferSize.width || pp.height !== cp.bufferSize.height);
        op && (this.stretchedAt ??= ip), op && ip - this.stretchedAt < 250 ? Op = cp.bufferSize : this.stretchedAt = null;
        const Ip = {
          rect: pp,
          bufferSize: Op
        };
        var Sp, xp;
        null !== cp && (xp = Ip, (Sp = cp).rect.left === xp.rect.left && Sp.rect.top === xp.rect.top && Sp.rect.width === xp.rect.width && Sp.rect.height === xp.rect.height && Sp.bufferSize.width === xp.bufferSize.width && Sp.bufferSize.height === xp.bufferSize.height) || (this.last = Ip, this.apply(Ip))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function EI(pp) {
      const {
        style: ip
      } = document.documentElement;
      for (const [cp, Op] of [
          ["--worldViewLeft", null === pp || void 0 === pp ? void 0 : pp.left],
          ["--worldViewTop", null === pp || void 0 === pp ? void 0 : pp.top],
          ["--worldViewWidth", null === pp || void 0 === pp ? void 0 : pp.width],
          ["--worldViewHeight", null === pp || void 0 === pp ? void 0 : pp.height]
        ]) void 0 === Op ? ip.removeProperty(cp) : ip.setProperty(cp, `${Op}px`)
    }
    var XI = cp(1765),
      lI = cp(2019);

    function QI(pp, ip) {
      (0, op.useEffect)((() => {
        if (!pp) return;
        const cp = pp => {
          var cp;
          "Escape" === pp.key ? (pp.stopPropagation(), pp.preventDefault(), ip()) : (cp = pp.code, Object.entries(Gi.t).some((pp => {
            let [ip, Op] = pp;
            const op = lI.d[ip];
            return op.includes("ui") && !op.includes("core") && Op.includes(cp)
          })) && !(0, XI.isTextEntry)(pp.target) && pp.preventDefault())
        };
        window.addEventListener("keydown", cp, !0);
        const Op = (0, hp.k)(ip);
        return () => {
          window.removeEventListener("keydown", cp, !0), Op()
        }
      }), [pp, ip])
    }

    function JI() {
      return (0, Po.q)().some((pp => pp !== Po.c))
    }

    function BI(pp, ip) {
      return pp.map((pp => ip ? String(pp) : pp.toFixed(1))).join(", ")
    }

    function NI(pp) {
      let {
        freeCamera: ip,
        picking: cp,
        hovered: Op
      } = pp;
      const {
        t: Ip
      } = (0, zp.H)(), Sp = (0, op.useRef)(null), xp = (0, op.useRef)(null);
      return (0, op.useEffect)((() => {
        const pp = (pp, ip) => {
            pp.textContent !== ip && (pp.textContent = ip)
          },
          cp = () => {
            const cp = ip ? Yp.gameBridge.lookup("freeCameraPos", null) : null;
            pp(Sp.current, BI(null !== cp && void 0 !== cp ? cp : Yp.gameBridge.lookup("localPos", null), !1));
            const Op = Yp.gameBridge.lookup("targetedBlockPos", null);
            pp(xp.current, Op ? BI(Op, !0) : "-")
          };
        return cp(), (0, MI.C)(cp)
      }), [ip]), (0, Dp.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, Dp.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Ip(ip ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, Dp.jsx)("span", {
          ref: Sp
        }), (0, Dp.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Ip("codeEditorWorld:lookingAt")
        }), (0, Dp.jsx)("span", {
          ref: xp,
          hidden: cp
        }), cp && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)("span", {
            children: Op ? BI(Op.pos, !0) : "-"
          }), Op && (0, Dp.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Op.name
          })]
        })]
      })
    }
    var TI = cp(37099),
      fI = cp(1502);

    function bI(pp) {
      const ip = pp.currentTarget.getBoundingClientRect();
      return {
        x: (pp.clientX - ip.left) / ip.width,
        y: (pp.clientY - ip.top) / ip.height
      }
    }

    function hI(pp) {
      const [ip, cp] = (0, op.useState)(!1), [Op, Ip] = (0, op.useState)(null), Sp = (0, op.useRef)(null);
      (0, op.useEffect)((() => {
        if (!ip) return;
        let pp = null,
          cp = null,
          Op = 1 / 0;
        const op = (0, MI.u)((ip => {
          Op += ip;
          const op = Sp.current;
          if (op === cp && Op < 100) return;
          cp = op, Op = 0;
          const xp = op && Yp.gameBridge.lookup("blockAtViewPoint", op);
          var Lp, Dp;
          (Lp = xp) === (Dp = pp) || null !== Lp && null !== Dp && Lp.name === Dp.name && (0, TI.i)(Lp.pos, Dp.pos) && (0, TI.i)(Lp.normal, Dp.normal) || (pp = xp, Ip(xp), Yp.gameBridge.send("setBlockHighlight", xp))
        }));
        return () => {
          op(), null !== pp && Yp.gameBridge.send("setBlockHighlight", null), Ip(null)
        }
      }), [ip]);
      const xp = (0, op.useCallback)((() => {
        cp(!1)
      }), []);
      QI(ip, xp);
      const Lp = Op => {
          if (!ip) return;
          const op = Yp.gameBridge.lookup("blockAtViewPoint", bI(Op));
          null !== op && (cp(!1), pp(op.pos))
        },
        Dp = ip ? (0, fI.h)(Lp, "pointerup") : null,
        Ap = {
          onPointerDown: pp => {
            null === Dp || void 0 === Dp || Dp.onPointerDown(pp)
          },
          onPointerMove: pp => {
            Sp.current = bI(pp)
          },
          onPointerLeave: () => {
            Sp.current = null
          },
          onPointerUp: null === Dp || void 0 === Dp ? void 0 : Dp.onPointerUp,
          onClick: pp => {
            "pointerType" in pp.nativeEvent && "touch" === pp.nativeEvent.pointerType || Lp(pp)
          }
        };
      return {
        picking: ip,
        setPicking: cp,
        hovered: Op,
        slotHandlers: Ap
      }
    }

    function aI(pp) {
      Yp.gameBridge.send("setFreeCameraMovesFly", pp)
    }

    function nI(pp) {
      let {
        shown: ip,
        setShown: cp,
        canInsertCode: Op
      } = pp;
      const {
        t: Ip
      } = (0, zp.H)(), {
        isTouchScreen: Sp
      } = (0, bp.o)(["isTouchScreen"]), xp = (0, op.useRef)(null), Yp = (0, op.useCallback)((() => {
        var pp;
        null === (pp = xp.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === pp || pp.focus()
      }), []), {
        control: Ap,
        take: Pp,
        release: Up,
        blocked: vp
      } = function(pp) {
        const [ip, cp] = (0, op.useState)("none"), Op = (0, op.useRef)("none"), [Ip, Sp] = (0, op.useState)(!1), xp = pp => {
          Op.current = pp, cp(pp)
        }, Lp = (0, op.useCallback)((() => {
          const ip = Op.current;
          "none" !== ip && (xp("none"), (0, Po.s)(Po.c), "mouse" === ip && pp())
        }), [pp]), Yp = (0, op.useCallback)((pp => {
          JI() ? Sp(!0) : (xp("mouse" === pp && "touchOnly" !== (0, tI.c)() ? "mouse" : "touch"), (0, Po.r)(Po.c))
        }), []);
        return (0, mp.f)("pointerLockUpdate", (pp => {
          pp && "touch" === Op.current && "touchOnly" !== (0, tI.c)() ? xp("mouse") : pp || "mouse" !== Op.current || Lp()
        })), (0, op.useEffect)((() => {
          if (!Ip) return;
          const pp = () => {
            JI() || Sp(!1)
          };
          return pp(), (0, Po.l)(pp)
        }), [Ip]), QI("none" !== ip, Lp), (0, op.useEffect)((() => {
          if ("none" === ip) return;
          const pp = pp => {
            (0, XI.isTextEntry)(pp.target) && Lp()
          };
          return document.addEventListener("focusin", pp), () => {
            document.removeEventListener("focusin", pp)
          }
        }), [ip, Lp]), (0, op.useEffect)((() => (document.addEventListener("pointerlockerror", Lp), () => {
          document.removeEventListener("pointerlockerror", Lp)
        })), [Lp]), (0, op.useEffect)((() => () => {
          "none" !== Op.current && null !== bp.c.get("openInGameMenuName") && (0, Po.s)(Po.c)
        }), []), {
          control: ip,
          take: Yp,
          release: Lp,
          blocked: Ip
        }
      }(Yp), tp = (0, qI.m)(jI.g);
      (0, op.useEffect)((() => {
        "touch" !== Ap || "shown" !== ip || tp ? "none" === Ap && "expanded" === ip && cp("shown") : cp("expanded")
      }), [Ap, tp]),
      function(pp, ip) {
        const cp = (0, op.useRef)(ip);
        cp.current = ip;
        const Op = (0, op.useRef)(null);
        (0, op.useLayoutEffect)((() => {
          const ip = new CI((() => pp.current.getBoundingClientRect()), (pp => {
            var ip;
            "none" !== cp.current && EI(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.rect) && void 0 !== ip ? ip : null), (0, MI.I)().setGameView(pp)
          }), (() => performance.now()));
          Op.current = ip, ip.sync();
          const op = (0, MI.q)((() => {
            ip.sync()
          }));
          return () => {
            op(), bp.c.set({
              worldPanelHud: null
            }), ip.stop()
          }
        }), [pp]), (0, op.useLayoutEffect)((() => {
          Op.current.sync(), EI("none" === ip ? null : Op.current.rect), bp.c.set({
            worldPanelHud: ip
          })
        }), [ip])
      }(xp, "touch" === Ap ? "touchControls" : "none");
      const {
        picking: Hp,
        setPicking: dp,
        hovered: ep,
        slotHandlers: {
          onPointerDown: jp,
          ...kp
        }
      } = hI((pp => {
        yp.m.GA("CodeEditorInsertText", {
          text: `[${pp.join(", ")}]`,
          focus: !Sp
        }), (0, jI.g)() && cp("hidden")
      })), Rp = function() {
        const {
          allowed: pp,
          movesFly: ip
        } = (0, qp.g)("freeCamera"), cp = (0, op.useRef)(ip), Op = (0, op.useRef)(ip);
        return Op.current !== ip && (Op.current = ip, cp.current = ip), (0, op.useEffect)((() => () => {
          cp.current && aI(!1)
        }), []), {
          allowed: pp,
          on: ip,
          toggle: () => {
            cp.current = !ip, aI(!ip)
          }
        }
      }(), Mp = (0, Lp.i)("hideCoordinates"), Cp = (0, qp.g)("localPlayerAlive"), Ep = !Cp || vp;
      (0, op.useEffect)((() => {
        Cp || Up()
      }), [Cp, Up]), (0, op.useEffect)((() => {
        !Ep && Op || dp(!1)
      }), [Ep, Op, dp]);
      const Xp = Rp.on ? Wp.o : Wp.f,
        lp = Hp ? Wp.o : Wp.f;
      return (0, Dp.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, Dp.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, Dp.jsx)("span", {
            className: "WorldPanelTitle",
            children: Ip("codeEditorWorld:title")
          }), "touch" === Ap && !tp && (0, Dp.jsx)(Wp.f, {
            className: "WorldPanelButton",
            onClick: Up,
            children: Ip("codeEditorWorld:backToCode")
          }), !Ep && Rp.allowed && !Sp && (0, Dp.jsx)(rp.f, {
            tooltipInner: Ip("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, Dp.jsx)(Xp, {
              className: "WorldPanelButton",
              ariaPressed: Rp.on,
              ariaLabel: Ip("codeEditorWorld:freeCamera"),
              onClick: Rp.toggle,
              children: (0, Dp.jsx)(wp.d, {
                name: "video"
              })
            })
          }), !Ep && Op && (0, Dp.jsx)(rp.f, {
            tooltipInner: Ip("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, Dp.jsxs)(lp, {
              className: "WorldPanelButton",
              ariaPressed: Hp,
              onClick: () => {
                Up(), dp(!Hp)
              },
              children: [(0, Dp.jsx)(wp.d, {
                name: "crosshairs"
              }), Ip("codeEditorWorld:pick")]
            })
          })]
        }), !Mp && (0, Dp.jsx)(NI, {
          freeCamera: Rp.on,
          picking: Hp,
          hovered: ep
        }), (0, Dp.jsxs)("div", {
          ref: xp,
          className: uc()("WorldPanelSlot", {
            TouchControl: "touch" === Ap,
            Picking: Hp
          }),
          onPointerDown: pp => {
            0 !== pp.button || Ep || Hp || Pp(pp.pointerType), jp(pp)
          },
          ...kp,
          children: [!Ep && !Hp && (0, Dp.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Ep && "touch" !== Ap && (0, Dp.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Hp && Ip(Sp ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Hp && "none" === Ap && !Rp.on && Ip(Sp ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Hp && "none" === Ap && Rp.on && Ip("codeEditorWorld:clickToFly"), "mouse" === Ap && (0, Dp.jsxs)(Dp.Fragment, {
              children: [(0, Dp.jsx)(RI.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), Ip("codeEditorWorld:backToCode")]
            })]
          }), Ep && (0, Dp.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, Dp.jsx)("span", {
              children: Ip(Cp ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, Dp.jsx)(Wp.f, {
              onClick: hp.e,
              children: Ip("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var FI = cp(5146);

    function gI(pp) {
      let {
        WP: ip,
        setWorld: cp,
        toggleWorld: Op,
        aiShown: op,
        closeAi: Ip
      } = pp;
      const {
        t: Sp
      } = (0, zp.H)(), xp = op ? "ai" : "hidden" !== ip ? "world" : "code", Lp = [{
        value: "code",
        label: Sp("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Sp("codeEditorWorld:title")
      }];
      op && Lp.push({
        value: "ai",
        label: Sp("codeEditorWorld:aiPane")
      });
      return (0, Dp.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, Dp.jsx)(FI.b, {
          options: Lp,
          value: xp,
          onChange: pp => {
            "world" !== pp ? (op && Ip(), cp("hidden")) : "hidden" === ip ? Op() : Ip()
          },
          ariaLabel: Sp("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var GI = cp(37108),
      rI = cp(37115),
      ZI = cp(37124),
      zI = cp(37132);
    const sI = (0, op.lazy)((() => Promise.all([cp.e(303), cp.e(299), cp.e(302), cp.e(298), cp.e(85), cp.e(301), cp.e(300), cp.e(297)]).then((() => cp(41535))))),
      KI = (0, op.lazy)((() => Promise.all([cp.e(80), cp.e(83), cp.e(84), cp.e(82), cp.e(305)]).then((() => cp(41709))))),
      VI = (0, op.lazy)((() => Promise.all([cp.e(303), cp.e(302), cp.e(85), cp.e(83), cp.e(84), cp.e(82), cp.e(301), cp.e(300), cp.e(81), cp.e(92)]).then((() => cp(41717)))));

    function pS(pp) {
      return Yp.gameBridge.query("worldCodeAiChunk", pp)
    }

    function iS() {
      return Yp.gameBridge.query("worldCodeAiGameState", null)
    }

    function cS(pp) {
      const {
        gsUrl: ip,
        gameNameWithVariation: cp,
        lobbyName: Op
      } = cI();
      return (0, mo.postJsonWithMetricsCookiesAndJsonResponse)(`${ip}/code/get-lobby-code`, ko.Pj["get-lobby-code"].toBuffer({
        gameNameWithVariation: cp,
        lobbyName: Op,
        path: pp
      }), {
        retries: 1
      })
    }
    let OS = !1;
    const oS = [],
      IS = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      SS = (0, op.memo)((function(pp) {
        var ip, cp;
        let {
          show: Op,
          onOpen: Ip,
          onClose: xp,
          isLobbyCode: Ap
        } = pp;
        const Pp = (0, op.useRef)(""),
          [Up, vp] = (0, op.useState)(null),
          tp = (0, op.useRef)(Ap),
          [Hp, dp] = (0, op.useState)({
            message: null,
            type: null
          }),
          [ep, jp] = (0, op.useState)(""),
          kp = Hp.message ? Hp : {
            message: ep,
            type: "warning"
          },
          [Cp, Ep] = (0, op.useState)(!0),
          [Xp, Qp] = (0, PI.i)(PI.g),
          [Jp, Bp] = (0, PI.i)(PI.b),
          [Np, Tp] = (0, op.useState)(!1),
          [fp, ap] = (0, op.useState)(!1),
          np = (0, op.useRef)(null),
          Fp = (0, op.useRef)(!1);
        (0, op.useEffect)((() => {
          var pp;
          fp && Fp.current && (Fp.current = !1, null === (pp = np.current) || void 0 === pp || pp.focus())
        }), [fp]);
        const gp = (0, GI.b)(),
          Gp = (0, op.useRef)(null),
          Zp = (0, op.useRef)(null),
          {
            openInGameMenuName: sp,
            openEverythingMenuName: Kp,
            worldPanelHud: Vp
          } = (0, bp.o)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          ii = pp => {
            Op && (Gp.current = pp, Mi.current = !0)
          };
        (0, mp.f)("OpenReportMenu", (() => {
          ii("Yy")
        })), (0, mp.f)("OpenStoreFromCodeEditor", (() => {
          ii("store")
        })), (0, op.useEffect)((() => {
          const pp = Gp.current;
          null === pp || "Yy" === pp && ("makeReport" === sp || "makeDiscordReport" === sp) || "store" === pp && null !== Kp || (Gp.current = null, null === sp && null === Kp ? Ap ? (Zp.current = Sc.current, yp.m.GA("EditLobbyCode", Up)) : yp.m.GA("EditCodeBlock", {
            pos: Up,
            canChangePos: tp.current
          }) : (0, wI.y)())
        }), [sp, Kp, Ap, Up]), (0, op.useEffect)((() => {
          if (Op) return () => {
            Zp.current = null
          }
        }), [Op]);
        const [ci, Oi] = function() {
          const [pp, ip] = (0, op.useState)(OS);
          return (0, mp.f)("CodeEditorAiHelperShown", (pp => {
            ip(pp)
          })), [pp, (0, op.useCallback)((pp => {
            OS = pp, yp.m.GA("CodeEditorAiHelperShown", pp)
          }), [])]
        }(), [oi, Ii] = (0, op.useState)(null), [Si, xi] = (0, op.useState)([]), [Li, Yi] = (0, op.useState)(0), [Di, Ai] = (0, op.useState)(0), [Pi, Wi] = (0, op.useState)(""), Ui = (0, op.useRef)(null), [wi, vi] = (0, op.useState)(Ap ? zI.d : null), ti = Ap || null !== Up, Hi = (0, Lp.i)("canEditCode"), di = (0, Lp.i)("canUseDevCreativeItems"), ei = (0, UI.o)("welcome"), ui = (0, UI.o)("docsOverview"), ji = ui ? "docsOverview" : "welcome", ki = null !== ui && void 0 !== ui ? ui : ei, mi = (0, UI.o)("aiHelperOverview"), Ri = mi ? "aiHelperOverview" : "welcome", qi = null !== mi && void 0 !== mi ? mi : ei, Mi = (0, op.useRef)(!1), Ci = (0, op.useRef)(!1), Ei = (0, op.useRef)(null), [Xi, li] = (0, op.useState)(""), [Qi, Ji] = (0, op.useState)(!1), [Bi, Ni] = (0, op.useState)(null), Ti = (0, qp.g)("connectedGame"), fi = Ap && Hi && "classic" === Ti.gameNameWithVariation && !(0, yi.I)(Ti.lobbyName), [bi, ai] = (0, op.useState)(null), [ni, gi] = (0, op.useState)({
          [Ro.k]: ""
        }), [ri, Zi] = (0, op.useState)({
          assets: {},
          revision: 0
        }), zi = (0, op.useRef)(ri), si = (0, op.useCallback)((pp => {
          var ip;
          pp.revision < zi.current.revision || (zi.current = pp, Zi(pp), jp(pp.startupError ? `Schematics could not load: ${pp.startupError}` : ""), null === (ip = tc.current) || void 0 === ip || ip.onLobbyFilesChanged({
            ...Ac.current,
            ...(0, No.o)(pp.assets)
          }))
        }), []), [Ki, Vi] = (0, op.useState)(Ro.k), [pc, ic] = (0, op.useState)(null), [cc, Oc] = (0, op.useState)(null), oc = (0, op.useRef)(!1), Ic = (0, op.useRef)(null), Sc = (0, op.useRef)(Ki);
        Sc.current = Ki;
        const xc = (0, op.useRef)(pc);
        xc.current = pc;
        const Lc = pc ? null : Bi,
          Yc = Lc && !Lc.engineLocked ? Lc.worldCodeEngine : null,
          Dc = (0, op.useRef)(cc);
        Dc.current = cc;
        const Ac = (0, op.useRef)(ni);
        Ac.current = ni;
        const Pc = (0, op.useRef)(null),
          Wc = (0, op.useRef)(null),
          [yc, Uc] = (0, op.useState)(!1),
          wc = (0, ro.m)(),
          vc = (0, op.useRef)([]),
          tc = (0, op.useRef)(null),
          Hc = (0, op.useRef)(null),
          dc = (0, op.useRef)(null);

        function ec(pp) {
          dp(pp), clearTimeout(Ei.current), Ei.current = setTimeout((() => {
            dp({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const jc = (0, op.useCallback)((function() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            oc.current && Ic.current && (Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.Leave,
              uI: (0, qo.u)(Ic.current),
              zD: !!pp || null
            }), oc.current = !1, Ic.current = null), ai(null)
          }), []),
          kc = (0, op.useCallback)((pp => {
            const ip = {
              kind: "lobby",
              path: pp
            };
            Ic.current = ip, Vi(pp), Pp.current = "", Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.Join,
              uI: (0, qo.u)(ip)
            }), oc.current = !0
          }), []),
          mc = (0, op.useCallback)((pp => {
            var ip;
            const cp = null === (ip = Hc.current) || void 0 === ip ? void 0 : ip.collabState;
            return cp && "lobby" === cp.docKey.kind && cp.docKey.path === pp && Sc.current === pp ? Promise.resolve({
              doc: cp.doc,
              version: cp.version,
              clientID: cp.clientID,
              docKey: cp.docKey,
              httpConfig: cp.httpConfig
            }) : new Promise(((ip, cp) => {
              const Op = setTimeout((() => {
                  vc.current = vc.current.filter((pp => pp !== op)), cp(new Error(`Timed out joining ${pp}`))
                }), 15e3),
                op = cp => {
                  "lobby" === cp.docKey.kind && cp.docKey.path === pp && (clearTimeout(Op), vc.current = vc.current.filter((pp => pp !== op)), ip(cp))
                };
              vc.current.push(op), Sc.current !== pp ? (jc(!0), kc(pp)) : oc.current || kc(pp)
            }))
          }), [kc, jc]),
          Rc = (0, op.useCallback)((async function(pp, ip) {
            let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Op = Date.now();
            let op = pp in Ac.current;
            for (; op !== ip;) {
              if (Date.now() - Op > cp) throw new Error(`Timed out waiting for lobby path ${pp} present=${ip}`);
              await (0, eO.M)(50), op = pp in Ac.current
            }
          }), []),
          qc = (0, op.useCallback)((pp => {
            const ip = Ac.current,
              cp = Ro.k in ip && Ro.l in ip;
            if (!(0, Mo.i)(pp) || cp) {
              if (Sc.current === pp) {
                var Op;
                const op = cp && (0, Mo.i)(pp) ? pp === Ro.k ? Ro.l : Ro.k : null !== (Op = (0, Mo.d)(ip)) && void 0 !== Op ? Op : Ro.k;
                Wc.current = {
                  fromPath: pp,
                  toPath: op
                }, Vi(op)
              }
              Yp.gameBridge.send("sendCodeCollab", {
                eI: qo.e.DeleteFile,
                uI: (0, qo.u)({
                  kind: "lobby",
                  path: Sc.current
                }),
                sD: pp
              })
            }
          }), []),
          Mc = (0, op.useCallback)((pp => {
            Zp.current = null, ic(null), Oc(null), !Ap || pp === Sc.current && oc.current || (jc(!0), kc(pp))
          }), [Ap, jc, kc]),
          Cc = (0, op.useCallback)(((pp, ip) => {
            const cp = Jo.e[pp],
              Op = cp && ip in cp.files ? ip : "index.ts";
            if (pp !== xc.current || Op !== Dc.current) {
              var op;
              if (pp !== xc.current) null === (op = tc.current) || void 0 === op || op.stopContinuousSync(), jc(!0);
              ic(pp), Oc(Op)
            }
          }), [jc]),
          Ec = (0, op.useCallback)((pp => {
            var ip;
            const cp = Sc.current,
              Op = Ac.current[cp],
              op = oc.current && !xc.current && cp in pp && void 0 !== Op ? {
                ...pp,
                [cp]: Op
              } : pp;
            gi(op);
            const Ip = Pc.current;
            if (Ip && Ip in pp) Pc.current = null, Ip !== Sc.current && Mc(Ip);
            else if (!(Sc.current in pp) && oc.current && !xc.current) {
              var Sp;
              Mc(null !== (Sp = (0, Mo.d)(pp)) && void 0 !== Sp ? Sp : Ro.k)
            }
            null === (ip = tc.current) || void 0 === ip || ip.onLobbyFilesChanged({
              ...op,
              ...(0, No.o)(zi.current.assets)
            })
          }), [Mc]),
          Xc = (0, op.useCallback)((() => cS(Sc.current).then((async pp => {
            if (!oc.current || !pp.files) return null;
            Ec(pp.files);
            const ip = await OI({
              action: "state"
            });
            return si(ip), {
              ...pp.files,
              ...(0, No.o)(ip.assets)
            }
          })).catch((pp => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", pp), ec({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Ec, si]),
          lc = () => {
            xp()
          };
        (0, op.useEffect)((() => {
          if (jp(""), !Op || !Ap) return;
          let pp = !1;
          return zi.current = {
            assets: {},
            revision: 0
          }, Zi(zi.current), OI({
            action: "state"
          }).then((ip => {
            pp || si(ip)
          })).catch((ip => {
            console.error("Could not load project schematics", ip), pp || jp("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            pp = !0
          }
        }), [Op, Ap, si]);
        const Qc = (0, op.useCallback)((function() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Ic.current && Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.Submit,
              uI: (0, qo.u)(Ic.current),
              ...pp ? {
                RI: "keepOpen"
              } : {}
            })
          }), []),
          Jc = (0, op.useCallback)((() => {
            if (!Ic.current || "lobby" !== Ic.current.kind) return;
            const pp = Xi.trim();
            (0, Co.s)(pp) ? (Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.ReloadAsVariation,
              uI: (0, qo.u)(Ic.current),
              RI: pp
            }), Ji(!1)) : ec({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Xi]),
          Bc = (0, op.useCallback)((pp => {
            Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.SetEngine,
              uI: (0, qo.u)({
                kind: "lobby",
                path: Sc.current
              }),
              RI: pp
            })
          }), []),
          Nc = (0, op.useCallback)((pp => {
            if (!xc.current && Hi && (tp.current || Ap)) {
              if (Ap) {
                var ip;
                const cp = (0, Mo.n)(Ac.current, Sc.current),
                  Op = Math.min(Fi.y, Math.max(0, Fi.E - cp)),
                  op = pp.slice(0, Op);
                return Pp.current = op, gi((pp => ({
                  ...pp,
                  [Sc.current]: op
                }))), void(null === (ip = tc.current) || void 0 === ip || ip.onDocTextChanged(Sc.current, op))
              }
              Pp.current = pp, Wi(pp)
            }
          }), [Hi, Ap]);
        (0, mp.f)("EditLobbyCode", (pp => {
          var ip;
          lp.featureFlags.canSeePlayerWrittenText && Ap && (jc(), vp(pp), Pp.current = "", gi({
            [Ro.k]: ""
          }), Ni(null), Vi(Ro.k), ic(null), Oc(null), Pc.current = null, Wc.current = null, null === (ip = tc.current) || void 0 === ip || ip.stopContinuousSync(), Ip(), kc(Ro.k))
        })), (0, mp.f)("EditCodeBlock", (pp => {
          let {
            pos: ip,
            canChangePos: cp
          } = pp;
          if (lp.featureFlags.canSeePlayerWrittenText && !Ap)
            if (jc(), null !== ip && (ip = [...ip]), vp(ip), tp.current = cp, null !== ip) {
              Pp.current = "", Wi(""), Ip();
              const pp = {
                  kind: "codeBlock",
                  pos: ip
                },
                Op = (0, qo.u)(pp);
              Ui.current !== Op && (Ui.current = Op, xi([]), Ai(Li)), vi((0, zI.b)(Op, [ip[0], ip[1], ip[2]], !!cp)), Ic.current = pp, Yp.gameBridge.send("sendCodeCollab", {
                eI: qo.e.Join,
                uI: (0, qo.u)(pp)
              }), oc.current = !0
            } else Op && xp()
        })), (0, mp.f)("codeCollabRejoin", (pp => {
          const ip = Ic.current ? (0, qo.u)(Ic.current) : null;
          ip && pp.docKey === ip && (Pp.current = pp.doc, Ap || Wi(pp.doc), ai((ip => ip ? {
            ...ip,
            doc: pp.doc,
            version: pp.version,
            clientID: (0, Qo.e)()
          } : ip)))
        })), (0, mp.f)("codeCollab", (pp => {
          var ip;
          const cp = Ic.current ? (0, qo.u)(Ic.current) : null;
          if (pp.type === qo.f.LobbyFilesChanged && Ap) {
            if ("string" !== typeof pp.files) return void Xc();
            try {
              Ec(JSON.parse(pp.files))
            } catch (Yp) {
              console.error("[CodeCollab] Failed to parse lobby files", Yp), Xc()
            }
            return
          }
          if (pp.type === qo.f.EngineSettings && Ap) return void Ni(LI(pp.engineSettings));
          const op = pp.type === qo.f.Joined ? (0, qo.k)(pp.docKey) : null,
            Ip = Ap && "lobby" === (null === (ip = Ic.current) || void 0 === ip ? void 0 : ip.kind) && (0, Mo.i)(Ic.current.path) && "lobby" === (null === op || void 0 === op ? void 0 : op.kind) && (0, Mo.i)(op.path);
          if (!cp || pp.docKey === cp || Ip)
            if (pp.type !== qo.f.ForceClose) {
              if (Op)
                if (pp.type === qo.f.Joined) {
                  var Sp;
                  const Dp = JSON.parse(pp.peers),
                    Wp = pp.existingCursors ? JSON.parse(pp.existingCursors) : [],
                    wp = (0, Qo.e)(),
                    vp = cI(),
                    {
                      gsUrl: tp,
                      gameNameWithVariation: Hp,
                      lobbyName: ep
                    } = vp,
                    jp = null !== (Sp = (0, qo.k)(pp.docKey)) && void 0 !== Sp ? Sp : Ic.current;
                  jp && (Ic.current = jp, "lobby" === jp.kind && (Vi(jp.path), Sc.current = jp.path));
                  const kp = jp || (Ap ? {
                    kind: "lobby",
                    path: Sc.current
                  } : {
                    kind: "codeBlock",
                    pos: Up
                  });

                  function mp(ip) {
                    var cp, Op;
                    if (!oc.current) return;
                    const op = null !== (cp = ip.code) && void 0 !== cp ? cp : "",
                      Ip = null !== (Op = ip.collabVersion) && void 0 !== Op ? Op : 0;
                    Pp.current = op, Ap || Wi(op), Ap && ip.files ? gi(ip.files) : Ap && gi((pp => ({
                      ...pp,
                      [Sc.current]: op
                    })));
                    const Sp = {
                      doc: op,
                      version: Ip,
                      clientID: wp,
                      docKey: kp,
                      peers: Dp,
                      editorCount: pp.editorCount,
                      existingCursors: Wp,
                      httpConfig: vp
                    };
                    if (ai(Sp), "lobby" === kp.kind) {
                      var xp;
                      const pp = {
                        doc: op,
                        version: Ip,
                        clientID: wp,
                        docKey: kp,
                        httpConfig: vp
                      };
                      for (const ip of [...vc.current]) ip(pp);
                      null === (xp = tc.current) || void 0 === xp || xp.startWhenReady()
                    }
                    ip.canSeeCode ? (clearTimeout(Ei.current), dp({
                      message: null,
                      type: null
                    })) : function(pp) {
                      clearTimeout(Ei.current), dp(pp)
                    }(IS);
                    const Lp = Zp.current;
                    Zp.current = null, Ap && Lp && ip.files && Lp in ip.files && Lp !== Sc.current && Mc(Lp)
                  }
                  Ap ? cS(Sc.current).then(mp).catch((pp => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", pp), jc()
                  })) : (0, mo.postJsonWithMetricsCookiesAndJsonResponse)(`${tp}/code/get-code-block`, ko.Pj["get-code-block"].toBuffer({
                    gameNameWithVariation: Hp,
                    lobbyName: ep,
                    pos: Up
                  }), {
                    retries: 1
                  }).then(mp).catch((pp => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", pp), jc()
                  }))
                } else if (pp.type === qo.f.Presence) {
                if (!cp) return;
                const Rp = JSON.parse(pp.peers);
                ai((ip => ip ? {
                  ...ip,
                  peers: Rp,
                  editorCount: pp.editorCount
                } : ip))
              }
            } else {
              var Lp;
              if (!cp) return;
              Op && Ap && "keptOpen" === pp.updates && yp.m.GA("CodeEditorKeepEdits");
              const qp = Ic.current;
              oc.current = !1, Ic.current = null, ai(null);
              if (!Ap || "close" === pp.updates) return (0, ZI.h)(), void(Op && xp());
              if (!Op) return;
              const Mp = Ac.current,
                Cp = Wc.current;
              Wc.current = null;
              const Ep = "lobby" === (null === qp || void 0 === qp ? void 0 : qp.kind) && qp.path === (null === Cp || void 0 === Cp ? void 0 : Cp.fromPath),
                Xp = Cp && (Ep || Cp.toPath in Mp || (0, Mo.i)(Cp.toPath)) ? Cp.toPath : Sc.current in Mp ? Sc.current : null !== (Lp = (0, Mo.d)(Mp)) && void 0 !== Lp ? Lp : Ro.k;
              kc(Xp)
            }
        })), (0, mp.f)("refetchCode", (() => {
          lp.featureFlags.canSeePlayerWrittenText && Op && oc.current && (Hi || (jc(), Ap ? yp.m.GA("EditLobbyCode", Up) : yp.m.GA("EditCodeBlock", {
            pos: Up,
            canChangePos: tp.current
          })))
        }));
        const Tc = (0, op.useCallback)((() => {
            Op && (Tp(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Op]),
          fc = (0, op.useCallback)((() => {
            Tp(!1)
          }), []);
        (0, op.useEffect)((() => {
          Op && Hi && ("docsButton" === ki && Np ? (0, wI.d)("docsButton") : ki && wI.g.includes(ki) && !Np && (Tp(!0), Oi(!1)))
        }), [Op, Hi, ki, Np, Oi]);
        const bc = (0, op.useCallback)((() => {
          Oi(!1)
        }), [Oi]);
        (0, op.useEffect)((() => {
          Op && Hi && ti && ("aiHelperButton" === qi && ci ? (0, wI.d)("aiHelperButton") : qi && wI.b.includes(qi) && !ci && (Oi(!0), Tp(!1)))
        }), [Op, Hi, ti, qi, ci, Oi]), (0, op.useEffect)((() => {
          if (!Op || !Hi) return;
          const pp = Ap ? "worldCode" : "codeBlock";
          return (0, wI.C)(pp, !0), () => {
            (0, wI.C)(pp, !1)
          }
        }), [Op, Hi, Ap]), (0, op.useEffect)((() => {
          if (Op) return () => {
            Mi.current ? Mi.current = !1 : (0, wI.y)()
          }
        }), [Op]), (0, op.useEffect)((() => {
          (0, wI.D)("exportButton", !!di)
        }), [di]);
        const {
          t: hc
        } = (0, zp.H)(), ac = !ci && Li > Di, nc = ac ? Wp.K : Wp.y, Fc = (0, op.useCallback)(((pp, ip) => {
          yp.m.GA("CodeEditorGoToLine", {
            path: pp,
            line: ip
          }), Mc(pp)
        }), [Mc]), gc = (0, op.useCallback)((pp => {
          dc.current = pp
        }), []), Gc = function(pp, ip) {
          const [cp, Op] = (0, op.useState)(null);
          return (0, op.useEffect)((() => {
            if (!ip) return void Op(null);
            let cp = !1;
            return Go(pp).then((pp => {
              cp || Op(pp)
            }), (pp => {
              console.error("[CodeEditor] could not collect the imported plugins", pp), cp || Op(null)
            })), () => {
              cp = !0
            }
          }), [pp, ip]), cp
        }(ni, Op);
        (0, op.useEffect)((() => {
          Gc && pc && !Gc.includes(pc) && (ic(null), Oc(null), Ap && !oc.current && kc(Sc.current))
        }), [pc, Gc, Ap, kc]), Hc.current = {
          collabState: bi,
          ensureJoinedPath: mc,
          waitForLobbyPath: Rc,
          pullLobbyFiles: Xc,
          t: hc,
          canEditCode: !!Hi
        }, tc.current || (tc.current = new pI({
          getLobbyFiles: () => ({
            ...Ac.current,
            ...(0, No.o)(zi.current.assets)
          }),
          deleteSchematic: async pp => {
            const ip = await OI({
              action: "remove",
              path: pp,
              expectedRevision: zi.current.revision
            });
            si(ip)
          },
          getActivePath: () => Sc.current,
          getCollabSnapshot: () => {
            var pp;
            if (xc.current) return null;
            const ip = null === (pp = Hc.current) || void 0 === pp ? void 0 : pp.collabState;
            return ip ? {
              doc: ip.doc,
              version: ip.version,
              clientID: ip.clientID,
              docKey: ip.docKey,
              httpConfig: ip.httpConfig
            } : null
          },
          replaceActiveDoc: (pp, ip) => {
            var cp, Op;
            return null !== (cp = null === (Op = dc.current) || void 0 === Op ? void 0 : Op.call(dc, pp, ip)) && void 0 !== cp && cp
          },
          ensureJoined: pp => Hc.current.ensureJoinedPath(pp),
          createFile: (pp, ip) => {
            !1 !== (null === ip || void 0 === ip ? void 0 : ip.focus) && (Pc.current = pp), Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.CreateFile,
              uI: (0, qo.u)({
                kind: "lobby",
                path: Sc.current
              }),
              sD: pp
            })
          },
          renameFile: (pp, ip) => {
            const cp = (0, qo.u)({
              kind: "lobby",
              path: Sc.current
            });
            Sc.current === pp && (Wc.current = {
              fromPath: pp,
              toPath: ip
            }, Vi(ip)), Yp.gameBridge.send("sendCodeCollab", {
              eI: qo.e.RenameFile,
              uI: cp,
              sD: pp,
              KD: ip
            })
          },
          deleteFile: pp => {
            qc(pp)
          },
          waitForLobbyPath: (pp, ip, cp) => Hc.current.waitForLobbyPath(pp, ip, cp),
          pullLobbyFiles: () => Hc.current.pullLobbyFiles(),
          setMessage: (pp, ip) => {
            ec({
              message: pp,
              type: ip
            })
          },
          onUnlinked: () => {
            Uc(!1)
          },
          t: pp => Hc.current.t(pp),
          canEditCode: () => Hc.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: pp,
              lobbyName: ip
            } = Yp.gameBridge.latest("connectedGame");
            return (0, ro.c)(pp, ip)
          }
        }));
        const rc = (0, op.useCallback)((async pp => {
            const ip = tc.current;
            if (!ip) return !1;
            try {
              return await ip.writeLobbyFiles(pp)
            } catch (cp) {
              return console.error("World Code AI: couldn't write the change", cp), !1
            }
          }), []),
          Zc = (0, op.useCallback)((async pp => {
            var ip, cp;
            const Op = null === (ip = pp.find((pp => pp.path === rI.b))) || void 0 === ip ? void 0 : ip.text,
              op = Ic.current;
            return void 0 !== Op && "codeBlock" === (null === op || void 0 === op ? void 0 : op.kind) && (!(null === (cp = dc.current) || void 0 === cp || !cp.call(dc, (0, qo.u)(op), Op)) && (Pp.current = Op, Wi(Op), !0))
          }), []),
          zc = (0, op.useCallback)((async () => {
            try {
              var pp, ip;
              const cp = await cS(Ro.k);
              return !1 === cp.canSeeCode ? null : null !== (pp = cp.files) && void 0 !== pp ? pp : {
                [Ro.k]: null !== (ip = cp.code) && void 0 !== ip ? ip : ""
              }
            } catch (cp) {
              return console.error("World Code AI: couldn't read World Code for a code block", cp), null
            }
          }), []),
          sc = (0, op.useMemo)((() => ({
            [rI.b]: Pi
          })), [Pi]),
          Kc = (0, op.useCallback)(((pp, ip) => {
            yp.m.GA("CodeEditorGoToLine", {
              path: rI.b,
              line: ip
            })
          }), []);
        (0, op.useEffect)((() => {
          ci && Op && Ai(Li)
        }), [ci, Op, Li]);
        const Vc = (0, op.useCallback)((() => {
            var pp, ip;
            Qc();
            const cp = (0, lp.isTouchscreen)() ? "open World Code again" : `press ${null!==(pp=null===(ip=Gi.t.OpenCodeEditor)||void 0===ip?void 0:ip[0])&&void 0!==pp?pp:"F8"}`,
              Op = Ap ? `\ud83e\udd16 Try out your change, then ${cp} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            yp.m.GA("chat", {
              content: [{
                str: Op,
                style: {
                  color: Rp.N.cyanUiText
                }
              }]
            })
          }), [Qc, Ap]),
          pO = (0, op.useCallback)((pp => {
            const ip = Up,
              cp = tp.current;
            Ap || !ip || Yp.gameBridge.lookup("codeBlockClickable", ip) ? (0, ZI.k)(pp, {
              submit: () => {
                Qc(), yp.m.GA("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: Rp.N.cyanUiText
                    }
                  }]
                }), !Ap && ip && setTimeout((() => {
                  Yp.gameBridge.send("clickCodeBlock", ip)
                }), 1e3)
              },
              reopen: () => {
                (0, hp.l)() || (Ap ? yp.m.GA("EditLobbyCode", ip) : yp.m.GA("EditCodeBlock", {
                  pos: ip,
                  canChangePos: cp
                }))
              }
            }) : Vc()
          }), [Qc, Ap, Up, Vc]),
          iO = (0, op.useCallback)((() => {
            Oi(!1)
          }), [Oi]),
          cO = (0, op.useRef)(lc);
        cO.current = lc;
        const OO = (0, op.useCallback)((function(pp) {
            let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            yp.m.GA("WorldCodeAiDraft", {
              text: pp,
              send: ip
            }), cO.current(), yp.m.GA("EditLobbyCode", Up)
          }), [Up]),
          oO = (0, op.useCallback)((pp => {
            cO.current(), pp.codeBlock ? yp.m.GA("EditCodeBlock", {
              pos: [...pp.pos],
              canChangePos: pp.canChangePos
            }) : yp.m.GA("EditLobbyCode", Up)
          }), [Up]);
        (0, mp.f)("WorldCodeAiDraft", (pp => {
          Ap && (Ii(pp), Oi(!0))
        }));
        const IO = !!Hi && !!ki && wI.g.includes(ki),
          SO = !!Hi && !!qi && wI.b.includes(qi);
        (0, op.useEffect)((() => {
          Op && ci && ti && !IO && Tp(!1)
        }), [Op, ci, ti, IO]);
        const xO = (0, op.useCallback)((() => {
            Oi(!1), Tp(!1)
          }), [Oi]),
          {
            WP: LO,
            setWorld: YO,
            toggleWorld: DO
          } = function(pp) {
            let {
              showAi: ip,
              showDocs: cp,
              showChat: Op,
              hideOtherRightPanels: Ip
            } = pp;
            const [Sp, xp] = (0, op.useState)("hidden"), Lp = (0, op.useRef)(null), Yp = (0, op.useCallback)((() => {
              Lp.current = null, xp((pp => "hidden" === pp ? pp : (0, jI.g)() ? "hidden" : "shown"))
            }), []);
            (0, op.useEffect)((() => {
              (ip || cp) && Yp()
            }), [ip, cp, Yp]), (0, op.useEffect)((() => {
              Op && Yp()
            }), [Op, Yp]);
            const Dp = "hidden" !== Sp && (0, jI.g)();
            (0, op.useLayoutEffect)((() => {
              if (Dp) {
                const pp = document.activeElement;
                pp instanceof HTMLElement && pp.closest(".cm-content") && (Lp.current = pp, pp.blur())
              } else {
                var pp;
                null === (pp = Lp.current) || void 0 === pp || pp.focus(), Lp.current = null
              }
            }), [Dp]);
            const Ap = (0, op.useCallback)((() => {
              "hidden" === Sp ? (xp("shown"), (0, jI.g)() && Ip()) : xp("hidden")
            }), [Sp, Ip]);
            return {
              WP: Sp,
              setWorld: xp,
              toggleWorld: Ap
            }
          }({
            showAi: ci,
            showDocs: Np,
            showChat: fp,
            hideOtherRightPanels: xO
          }),
          AO = ci && null !== wi && ti,
          PO = (0, op.useCallback)((() => {
            Ii(null)
          }), []),
          [WO, yO] = (0, op.useState)(null);
        (0, mp.f)("WorldCodeAiSelection", (pp => {
          Op && (yO(pp), Oi(!0), Tp(!1))
        }));
        const UO = (0, op.useCallback)((() => {
          yO(null)
        }), []);
        (0, mp.f)("chat", (pp => {
          let {
            content: ip
          } = pp;
          if (!Ap && null === Ui.current) return;
          const cp = Array.isArray(ip) ? ip : [ip],
            Op = cp.some((pp => {
              var ip;
              return (null === pp || void 0 === pp || null === (ip = pp.style) || void 0 === ip ? void 0 : ip.color) === Rp.N.redUiText
            })),
            op = cp.map((pp => {
              var ip;
              const cp = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.str) && void 0 !== ip ? ip : pp;
              return "string" === typeof cp ? cp : ""
            })).join("");
          Op && /world code|error/i.test(op) && (xi((pp => [...pp, op].slice(-10))), Yi((pp => pp + 1)), (0, ZI.g)(op))
        })), (0, op.useEffect)((() => {
          if (!Op || !Ap || !wc) return;
          let pp = !1;
          return (async (ip, cp) => {
            const Op = await (null === (ip = tc.current) || void 0 === ip ? void 0 : ip.tryRestoreHandle());
            !pp && Op && (Uc(!0), null === (cp = tc.current) || void 0 === cp || cp.startWhenReady())
          })(), () => {
            pp = !0
          }
        }), [Op, Ap, wc]), (0, op.useEffect)((() => {
          var pp;
          Op || (null === (pp = tc.current) || void 0 === pp || pp.stopContinuousSync(), jc(!1), Ci.current && (Ci.current = !1, Yp.gameBridge.send("sendChatMessage", {
            VD: "//export",
            channelName: null
          })))
        }), [Op, jc]);
        const wO = (0, op.useCallback)((async () => {
            if (wc && tc.current) try {
              if (!await tc.current.linkFolder()) return;
              Uc(!0), await tc.current.startWhenReady()
            } catch (pp) {
              console.error("[WorldCodeDirectorySync] Link failed", pp), ec({
                message: hc("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [wc, hc]),
          vO = (0, op.useCallback)((async () => {
            tc.current && await tc.current.unlinkFolder()
          }), []),
          tO = (0, op.useCallback)((() => {
            wc ? yc ? vO() : wO() : po.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [wc, yc, wO, vO]),
          HO = Ap && "hidden" !== LO;
        return (0, Dp.jsxs)(Sp.c, {
          className: uc()("CodeEditorBg", {
            CodeEditorLight: Xp,
            WorldShown: "hidden" !== LO,
            WorldTouchControl: "touchControls" === Vp
          }),
          close: lc,
          escDoesExit: !0,
          show: Op,
          togglePointerLock: !1,
          globallyUniqueKey: Ap ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, Dp.jsx)(UI.d, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: hc("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Hi && !Ap
          }), (0, Dp.jsx)(UI.d, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, Dp.jsxs)(Dp.Fragment, {
              children: [(0, Dp.jsx)("p", {
                children: hc("codeEditor:tutorialWorldCodeWelcome")
              }), (0, Dp.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, Dp.jsx)("li", {
                  children: hc("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, Dp.jsx)("li", {
                  children: hc("codeEditor:tutorialWorldCodeUseReact")
                }), (0, Dp.jsx)("li", {
                  children: hc("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Hi && Ap
          }), (0, Dp.jsx)("div", {
            className: "CodeEditorTitle",
            children: Ap ? "World Code" : "Code Block"
          }), (0, Dp.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, Dp.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, Dp.jsx)(rp.f, {
                tooltipInner: hc(di ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: di ? void 0 : 0,
                hideTooltip: "exportButton" === ei,
                children: (0, Dp.jsx)(UI.k, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: hc("codeEditor:tutorialExport"),
                  enabled: !!Hi,
                  children: (0, Dp.jsx)(Wp.o, {
                    className: "CodeEditorButton",
                    disabled: !di,
                    onClick: () => {
                      "exportButton" === ei && ((0, wI.d)("exportButton"), Mi.current = !0), Ci.current = !0, lc()
                    },
                    padDestructive: !0,
                    children: hc("codeEditor:exportWorld")
                  })
                })
              }), (0, Dp.jsx)(gI, {
                WP: LO,
                setWorld: YO,
                toggleWorld: DO,
                aiShown: AO,
                closeAi: iO
              })]
            }), (0, Dp.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Hi && (0, Dp.jsx)(rp.f, {
                tooltipInner: hc("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === ei,
                children: (0, Dp.jsx)(UI.k, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: hc("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, Dp.jsx)(Wp.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: hc("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, wI.d)("helpButton"), po.NotificationProvider.showCustomPopup({
                        body: pp => (0, Dp.jsx)(vI, {
                          close: pp
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, Dp.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, Dp.jsx)(wp.d, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, Dp.jsx)(rp.f, {
                tooltipInner: hc("codeEditor:closeTooltip"),
                children: (0, Dp.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    lc()
                  },
                  children: (0, Dp.jsx)(Wp.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, Dp.jsx)(Xo, {
            peers: null !== (ip = null === bi || void 0 === bi ? void 0 : bi.peers) && void 0 !== ip ? ip : []
          }), (0, Dp.jsxs)("div", {
            className: uc()("CodeEditorMainArea", {
              WorldCovers: "always" === kI(LO),
              WorldCoversWhenNarrow: "narrow" === kI(LO)
            }),
            children: [fp && gp && (0, Dp.jsx)(jI.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                ap(!1)
              },
              children: (0, Dp.jsx)(uI, {
                inputRef: np
              })
            }), Ap && (0, Dp.jsx)(bo, {
              schematics: ri.assets,
              onManageSchematic: pp => {
                Hi && po.NotificationProvider.showCustomPopup({
                  body: ip => (0, Dp.jsx)(xI, {
                    initialPath: pp,
                    onChanged: si,
                    onClose: ip
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: ni,
              activePath: Ki,
              canEdit: !!Hi,
              directoryLinked: yc,
              pluginNames: null !== Gc && void 0 !== Gc ? Gc : oS,
              activePluginName: pc,
              activePluginFile: cc,
              onSelect: Mc,
              onSelectPlugin: Cc,
              onToggleDirectorySync: tO,
              onCreate: pp => {
                Pc.current = pp, Yp.gameBridge.send("sendCodeCollab", {
                  eI: qo.e.CreateFile,
                  uI: (0, qo.u)({
                    kind: "lobby",
                    path: Sc.current
                  }),
                  sD: pp
                })
              },
              onRename: (pp, ip) => {
                Sc.current === pp && (Wc.current = {
                  fromPath: pp,
                  toPath: ip
                }, Vi(ip)), Yp.gameBridge.send("sendCodeCollab", {
                  eI: qo.e.RenameFile,
                  uI: (0, qo.u)({
                    kind: "lobby",
                    path: Sc.current
                  }),
                  sD: pp,
                  KD: ip
                })
              },
              onRenameFolder: (pp, ip) => {
                const [cp] = (0, Mo.m)([Sc.current], pp, ip);
                cp && (Wc.current = {
                  fromPath: cp[0],
                  toPath: cp[1]
                }, Vi(cp[1])), Yp.gameBridge.send("sendCodeCollab", {
                  eI: qo.e.RenameFolder,
                  uI: (0, qo.u)({
                    kind: "lobby",
                    path: Sc.current
                  }),
                  sD: pp,
                  KD: ip
                })
              },
              onDelete: qc
            }), (0, Dp.jsx)("div", {
              className: uc()("CodeEditorMessage", {
                CodeEditorMessageHidden: !kp.message,
                CodeEditorMessageSuccess: "success" === kp.type
              }),
              children: kp.message && (0, Dp.jsx)("div", {
                className: "CodeEditorMessageText",
                children: kp.message
              })
            }), (0, Dp.jsx)(op.Suspense, {
              fallback: (0, Dp.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, Dp.jsx)(Mp.c, {})
              }),
              children: (0, Dp.jsx)(sI, {
                isLobbyCode: Ap,
                code: bi ? bi.doc : Pp.current,
                files: Ap ? ni : void 0,
                activePath: Ap ? Ki : void 0,
                pluginName: pc,
                pluginFile: cc,
                pluginSource: pc && cc ? null === (cp = Jo.e[pc]) || void 0 === cp ? void 0 : cp.files[cc] : void 0,
                onChange: Nc,
                canEditCode: Hi,
                setTemporaryMessage: ec,
                close: lc,
                showTooltips: Cp,
                lightMode: Xp,
                collabState: bi,
                setActiveDocReplacer: gc,
                showAiHints: ti && Jp,
                canAiChangeCode: !!Hi && (Ap || !!tp.current),
                onRemoteDocChange: pp => {
                  var ip;
                  (Pp.current = pp, Ap) ? (gi((ip => ({
                    ...ip,
                    [Sc.current]: pp
                  }))), null === (ip = tc.current) || void 0 === ip || ip.onDocTextChanged(Sc.current, pp)) : Wi(pp)
                }
              })
            }), (Np || AO || "hidden" !== LO) && (0, Dp.jsxs)(mI, {
              WP: LO,
              worldPanel: (0, Dp.jsx)(nI, {
                shown: LO,
                setShown: YO,
                canInsertCode: !!Hi && !pc
              }),
              closeWorld: () => {
                YO("hidden")
              },
              aiShown: AO,
              defaultWidth: Np ? "40%" : "max(18rem, 36%)",
              children: [Np && (0, Dp.jsx)(jI.c, {
                onClose: IO ? void 0 : fc,
                children: (0, Dp.jsx)(op.Suspense, {
                  fallback: (0, Dp.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, Dp.jsx)(Mp.c, {})
                  }),
                  children: (0, Dp.jsx)(KI, {
                    popOutDocs: Tc,
                    hideDocs: fc,
                    tutorialEnabled: !!Hi
                  })
                })
              }), AO && (0, Dp.jsx)(jI.c, {
                onClose: SO ? void 0 : iO,
                children: (0, Dp.jsx)(op.Suspense, {
                  fallback: (0, Dp.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, Dp.jsx)(Mp.c, {})
                  }),
                  children: (0, Dp.jsx)(VI, {
                    target: wi,
                    chatKey: `${Ti.gameNameWithVariation}/${Ti.lobbyName}/aiHelper`,
                    historyKey: `${Ti.gameNameWithVariation}/${Ti.lobbyName}/${wi.key}`,
                    files: wi.codeBlock ? sc : ni,
                    activePath: wi.codeBlock ? rI.b : Ki,
                    canEdit: !!Hi && (wi.codeBlock ? !!tp.current : !pc),
                    isLoaded: null !== bi,
                    errors: Si,
                    errorCount: Li,
                    applyFiles: wi.codeBlock ? Zc : rc,
                    submit: Vc,
                    testRun: pO,
                    close: iO,
                    goToLine: wi.codeBlock ? Kc : Fc,
                    openWorldCode: wi.codeBlock ? OO : void 0,
                    readWorldCode: wi.codeBlock ? zc : void 0,
                    viewChunk: pS,
                    viewGameState: iS,
                    openTarget: Hi ? oO : void 0,
                    draft: oi,
                    onDraftUsed: PO,
                    selection: WO,
                    onSelectionUsed: UO
                  }, wi.key)
                })
              })]
            })]
          }), (null === Lc || void 0 === Lc ? void 0 : Lc.fallback) && (0, Dp.jsx)(YI, {
            fallback: Lc.fallback,
            onGoToLine: Fc
          }), (0, Dp.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, Dp.jsx)(rp.f, {
              tooltipInner: hc(Xp ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: hc(Xp ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  Qp(!Xp)
                },
                children: (0, Dp.jsx)(wp.d, {
                  name: Xp ? "moon" : "sun-bright"
                })
              })
            }), (0, Dp.jsx)(rp.f, {
              tooltipInner: hc(HO ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.o, {
                className: "CodeEditorButton",
                onClick: () => {
                  Qc(HO)
                },
                padDefaultFocus: !0,
                children: hc("codeEditor:submitCode")
              })
            }), (0, Dp.jsx)(rp.f, {
              tooltipInner: hc(Np ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === ki || "hideDocsButton" === ki,
              children: (0, Dp.jsx)(UI.k, {
                tutorial: ji,
                step: Np ? "hideDocsButton" : "docsButton",
                text: hc(Np ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Hi,
                placement: "top",
                waitForClick: !0,
                onPrevious: Np && "welcome" === ji ? fc : void 0,
                children: (0, Dp.jsx)(Wp.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, wI.d)(Np ? "hideDocsButton" : "docsButton"), Tp(!Np), Oi(!1)
                  },
                  children: hc(Np ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), ti && (0, Dp.jsx)(UI.k, {
              tutorial: Ri,
              step: ci ? "hideAiHelperButton" : "aiHelperButton",
              text: hc(ci ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Ri ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Hi,
              placement: "top",
              waitForClick: !0,
              onPrevious: ci && "welcome" === Ri ? bc : void 0,
              children: (0, Dp.jsx)(nc, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, wI.d)(ci ? "hideAiHelperButton" : "aiHelperButton"), Oi(!ci), Tp(!1)
                },
                children: ci ? "Hide AI Helper" : ac ? "Fix error with AI" : "AI Helper"
              })
            }), gp && (0, Dp.jsx)(rp.f, {
              tooltipInner: hc(fp ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.y, {
                className: "CodeEditorButton",
                onClick: () => {
                  Fp.current = !fp, ap(!fp)
                },
                children: hc(fp ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, Dp.jsx)(rp.f, {
              tooltipInner: hc("hidden" === LO ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.y, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: DO,
                children: hc("hidden" === LO ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, Dp.jsx)(rp.f, {
              tooltipInner: hc("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  yp.m.GA("FormatCode")
                },
                children: hc("codeEditor:formatCode")
              })
            }), (0, Dp.jsx)(rp.f, {
              tooltipInner: hc("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Pp.current).then((() => {
                    ec({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    ec({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: hc("codeEditor:copyCode")
              })
            }), (0, Dp.jsx)(rp.f, {
              tooltipInner: hc(Cp ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  Ep(!Cp)
                },
                children: hc(Cp ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Ap && (0, Dp.jsx)(rp.f, {
              tooltipInner: hc("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === ei,
              children: (0, Dp.jsx)(UI.k, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: hc("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Hi,
                placement: "top",
                waitForClick: !0,
                children: (0, Dp.jsx)(Wp.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === ei && ((0, wI.d)("worldCodeButton"), Mi.current = !0), lc(), yp.m.GA("EditLobbyCode", Up)
                  },
                  children: hc("codeEditor:worldCode")
                })
              })
            }), (fi || Yc || ti) && (0, Dp.jsx)(rp.f, {
              tooltipInner: hc("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, Dp.jsx)(Wp.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Ji(!0)
                },
                children: (0, Dp.jsx)(wp.d, {
                  name: "ellipsis"
                })
              })
            })]
          }), Qi && (0, Dp.jsx)(co.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Ji(!1)
            },
            body: (0, Dp.jsx)(yI, {
              engine: Yc,
              onSetEngine: Bc,
              aiHints: ti ? {
                shown: Jp,
                setShown: Bp
              } : null,
              variation: fi ? {
                name: Xi,
                setName: li,
                reload: Jc
              } : null
            })
          })]
        })
      })),
      xS = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function LS(pp) {
      return "inventory" === pp
    }
    const YS = (0, op.memo)((function() {
      const {
        openEverythingMenuName: pp,
        openInGameMenuName: ip
      } = (0, bp.o)(["openEverythingMenuName", "openInGameMenuName"]), cp = (0, qp.g)("fullInventory"), Ip = (0, op.useRef)(null), Sp = (0, Xi.n)();
      (0, mp.f)("toggleMenu", (pp => {
        var ip;
        if (!Sp.shown) return;
        const cp = bp.c.get("openInGameMenuName");
        let Op = pp.split("|")[0];
        const op = null !== (ip = pp.split("|")[1]) && void 0 !== ip ? ip : null;
        ("closeCurrentMenu" === op && cp || Op === cp) && (Ip.current = null, Op = null);
        const xp = "closeCurrentMenu" === op ? null : op;
        Ip.current !== xp && (Ip.current = xp), null !== Op && (0, Po.s)(Po.c, {
          keepsMovement: LS(Op)
        }), bp.c.set({
          openInGameMenuName: Op
        })
      }));
      const xp = (0, op.useCallback)((pp => () => {
          yp.m.GA("toggleMenu", pp)
        }), []),
        Lp = (0, op.useRef)({
          cantCrouchIfNotFullscreen: xp("cantCrouchIfNotFullscreen"),
          makeReport: xp("makeReport"),
          makeDiscordReport: xp("makeDiscordReport"),
          editBook: xp("editBook"),
          editNameTag: xp("editNameTag"),
          inventory: xp("inventory"),
          inviteLink: xp("inviteLink"),
          writeOnBoard: xp("writeOnBoard"),
          codeEditor: xp("codeEditor"),
          lobbyCodeEditor: xp("lobbyCodeEditor"),
          customLobbyBlockEditor: xp("customLobbyBlockEditor"),
          ironChestPasskeyInput: xp("ironChestPasskeyInput"),
          petUi: xp("petUi")
        }),
        Yp = (0, op.useCallback)((() => {
          bp.c.set({
            openInGameMenuName: null
          })
        }), []),
        Ap = (0, op.useRef)(null);
      return (0, op.useEffect)((() => {
        if (ip) {
          var pp;
          (0, Po.s)(Po.c, {
            keepsMovement: LS(ip)
          }), Ap.current = xS.has(ip) ? null !== (pp = bp.c.get("openEverythingMenuName")) && void 0 !== pp ? pp : Ap.current : null, bp.c.set({
            openEverythingMenuName: null
          })
        } else {
          const pp = Ap.current;
          Ap.current = null, null !== pp && null === bp.c.get("openEverythingMenuName") && bp.c.set({
            openEverythingMenuName: pp
          }), Ip.current = null, (0, Po.r)(Po.c)
        }
      }), [ip]), (0, op.useEffect)((() => {
        null !== pp && Yp()
      }), [pp, Yp]), (0, Dp.jsxs)(Dp.Fragment, {
        children: [(0, Dp.jsx)(Op.i, {
          show: "clientGame" === ip
        }), (0, Dp.jsx)(sO, {
          show: "cantCrouchIfNotFullscreen" === ip,
          onOpen: Lp.current.cantCrouchIfNotFullscreen,
          onClose: Yp
        }), (0, Dp.jsx)(xo, {
          show: "makeReport" === ip,
          onOpen: Lp.current.makeReport,
          onClose: Yp
        }), (0, Dp.jsx)(Ao, {
          show: "makeDiscordReport" === ip,
          onOpen: Lp.current.makeDiscordReport,
          onClose: Yp
        }), (0, Dp.jsx)(oc, {
          show: "editBook" === ip,
          onOpen: Lp.current.editBook,
          onClose: Yp
        }), (0, Dp.jsx)(cc, {
          show: "editNameTag" === ip,
          onOpen: Lp.current.editNameTag,
          onClose: Yp
        }), cp && (0, Dp.jsx)(rO, {
          show: "inventory" === ip,
          onOpen: Lp.current.inventory,
          onClose: Yp,
          variation: Ip.current
        }), (0, Dp.jsx)(li, {
          show: "inviteLink" === ip,
          onClose: Yp,
          option: Ip.current
        }), (0, Dp.jsx)(Bp, {
          show: "retentionFeatures" === ip,
          onClose: Yp
        }), (0, Dp.jsx)(ic, {
          show: "writeOnBoard" === ip,
          onOpen: Lp.current.writeOnBoard,
          onClose: Yp
        }), (0, Dp.jsx)(SS, {
          show: "lobbyCodeEditor" === ip,
          onOpen: Lp.current.lobbyCodeEditor,
          onClose: Yp,
          isLobbyCode: !0
        }), (0, Dp.jsx)(SS, {
          show: "codeEditor" === ip,
          onOpen: Lp.current.codeEditor,
          onClose: Yp,
          isLobbyCode: !1
        }), (0, Dp.jsx)(yo, {
          show: "customLobbyBlockEditor" === ip,
          onOpen: Lp.current.customLobbyBlockEditor,
          onClose: Yp
        }), (0, Dp.jsx)(kc, {
          show: "ironChestPasskeyInput" === ip,
          onOpen: Lp.current.ironChestPasskeyInput,
          onClose: Yp
        }), (0, Dp.jsx)(eo, {
          togglePointerLock: !0,
          show: "petUi" === ip,
          onOpen: Lp.current.petUi,
          onClose: Yp
        })]
      })
    }))
  },
  36695: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => NS
    });
    cp(36703);
    var Op = cp(1827),
      op = cp(62),
      Ip = cp(1049),
      Sp = cp.n(Ip),
      xp = cp(3821),
      Lp = cp(1476),
      Yp = cp(1929),
      Dp = cp(1112);

    function Ap() {
      const pp = 2e3,
        [ip, cp] = (0, op.useState)(null),
        [Op, Ip] = (0, op.useState)(null),
        Ap = (0, op.useRef)(null);
      (0, Lp.f)("showBottomMessage", (ip => {
        let {
          message: cp,
          timeoutLength: Op = pp,
          type: op
        } = ip;
        Ip({
          message: cp,
          type: op
        }), clearTimeout(Ap.current), Ap.current = setTimeout((() => {
          Ip(null)
        }), Op)
      })), (0, Lp.f)("showPermanentBottomMessage", (pp => {
        cp(pp)
      })), (0, op.useEffect)((() => ((0, xp.d)((() => {
        cp(null)
      })), () => {
        clearTimeout(Ap.current)
      })), []);
      const Pp = Op || ip;
      return Pp ? (0, Dp.jsx)("div", {
        className: Sp()("BottomScreenMessage", Pp.type),
        children: (0, Dp.jsx)(Yp.e, {
          text: Pp.message
        })
      }) : null
    }
    var Pp = cp(2413),
      Wp = cp(1956),
      yp = cp(1538),
      Up = cp(2499);

    function wp() {
      let pp;
      const ip = () => {
          clearTimeout(pp), pp = setTimeout((() => {
            Wp.gameBridge.latest("connectedGame").replay || (Wp.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, yp.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        cp = () => {
          clearTimeout(pp)
        };
      return window.addEventListener("focus", cp), window.addEventListener("blur", ip), () => {
        window.removeEventListener("blur", ip), window.removeEventListener("focus", cp), clearTimeout(pp)
      }
    }
    var vp = cp(1141),
      tp = cp(3209),
      Hp = cp(322),
      dp = cp(2492),
      ep = cp(34),
      jp = cp(1982),
      kp = cp(44),
      mp = cp(2004),
      Rp = cp(25),
      qp = cp(2007),
      Mp = cp(1419),
      Cp = cp(8944),
      Ep = cp(2043),
      Xp = cp(1201);
    const lp = (0, op.memo)((function() {
      const {
        isTouchScreen: pp,
        loadingOverlayVisible: ip,
        openInGameMenuName: cp,
        openEverythingMenuName: Op
      } = (0, Rp.o)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Ip = (0, Mp.r)();
      (0, tp.b)();
      const xp = (0, dp.i)("showBasicMovementControls"),
        [Lp, Yp] = (0, op.useState)("movement"),
        Ap = "movement" === Lp,
        Pp = Ip && !1 !== xp;
      (0, op.useEffect)((() => {
        "padActions" !== Lp || Pp || Yp("done")
      }), [Lp, Pp]);
      const Wp = ip || null !== cp || null !== Op,
        yp = (0, op.useRef)({
          step: Lp,
          ms: 0
        });
      return (0, op.useEffect)((() => {
        if (Wp || "done" === Lp) return;
        yp.current.step !== Lp && (yp.current = {
          step: Lp,
          ms: 0
        });
        const pp = yp.current,
          ip = performance.now(),
          cp = setTimeout((() => {
            Yp("movement" === Lp && (0, Mp.h)() ? "padActions" : "done")
          }), 7e3 - pp.ms);
        return () => {
          clearTimeout(cp), pp.ms += performance.now() - ip
        }
      }), [Wp, Lp]), kp.h.getItem(Hp.Ub) > 2 ? (0, Dp.jsx)(Np, {
        showingMovementControls: !1
      }) : (0, Dp.jsxs)(Dp.Fragment, {
        children: [pp && !Ip || !Ap || !1 === xp ? null : (0, Dp.jsxs)("div", {
          className: Sp()("ControlsTutorialDiv", {
            Covered: Wp
          }),
          children: [(0, Dp.jsx)(Qp, {}), (0, Dp.jsx)(Bp, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Dp.jsx)(Bp, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Lp && Pp && (0, Dp.jsx)(Jp, {
          covered: Wp
        }), (0, Dp.jsx)(Np, {
          showingMovementControls: "done" !== Lp
        })]
      })
    }));

    function Qp() {
      const pp = (0, Mp.r)();
      return (0, Dp.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Dp.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), pp && (0, Dp.jsx)(qp.d, {
          noaAction: "forward"
        }), !pp && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Dp.jsx)(qp.d, {
              noaAction: "forward"
            })
          }), (0, Dp.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Dp.jsx)(qp.d, {
              noaAction: "left"
            }), (0, Dp.jsx)(qp.d, {
              noaAction: "backward"
            }), (0, Dp.jsx)(qp.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Jp(pp) {
      let {
        covered: ip
      } = pp;
      const {
        t: cp
      } = (0, Xp.H)(), Op = (0, dp.i)("useInventory");
      return (0, Dp.jsxs)("div", {
        className: Sp()("ControlsTutorialDiv", {
          Covered: ip
        }),
        children: [(0, Dp.jsx)(Bp, {
          header: cp("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Dp.jsx)(Bp, {
          header: cp("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Op && (0, Dp.jsx)(Bp, {
          header: cp("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Dp.jsx)(Bp, {
          header: cp("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Bp(pp) {
      let {
        header: ip,
        noaAction: cp
      } = pp;
      return (0, Dp.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Dp.jsx)("div", {
          className: "KeyHeader",
          children: ip
        }), (0, Dp.jsx)(qp.d, {
          noaAction: cp
        })]
      })
    }

    function Np(pp) {
      let {
        showingMovementControls: ip
      } = pp;
      const {
        isTouchScreen: cp
      } = (0, Rp.o)(["isTouchScreen"]), Op = (0, Mp.r)(), Ip = (0, Ep.d)("OpenShop"), [Sp, xp] = (0, op.useState)(!1), Lp = `SeenShopControls|${(0,mp.f)("connectedGame",(pp=>pp.gameNameWithVariation))}`, Yp = () => (!(0, Mp.h)() || null !== (0, Cp.d)("OpenShop")) && !kp.h.getItem(Lp) && jp.c.get("shopInfo") && !ip, Ap = () => (xp(!0), kp.h.setItem(Lp, !0), (0, Mp.h)() || ep.m.GA("showShopTouchTutorial"), setTimeout((() => {
        xp(!1)
      }), 7e3));
      (0, op.useEffect)((() => {
        let pp;
        const ip = ep.m.subscribe("showShopTutorial", (() => {
          Yp() && (pp = Ap())
        }));
        return () => {
          clearTimeout(pp), ep.m.unsubscribe(ip)
        }
      }), [ip]);
      const Pp = (0, op.useRef)();
      return (0, dp.e)("currencyAmounts", (pp => {
        if (Yp()) {
          let cp = !1;
          const Op = jp.c.get("shopInfo");
          for (const op in Op) {
            for (const Ip in Op[op].items) {
              var ip;
              const Sp = Op[op].items[Ip];
              if (void 0 !== Sp.currency && pp[Sp.currency] && Sp.cost <= pp[Sp.currency].amount && (null === (ip = Sp.hidden) || void 0 === ip || !ip)) {
                cp = !0;
                break
              }
            }
            if (cp) break
          }
          cp && (Pp.current = Ap())
        }
      })), (0, op.useEffect)((() => () => {
        clearTimeout(Pp.current)
      }), [ip]), !Sp || Op && !Ip ? null : (0, Dp.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: cp && !Op ? null : (0, Dp.jsx)(Bp, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Tp = cp(1387),
      fp = cp(1060);
    const bp = (0, op.memo)((function() {
      return (0, tp.b)(), (0, Dp.jsx)(hp, {})
    }));
    class hp extends op.Component {
      constructor(pp) {
        super(pp), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = ep.m.subscribe("TopRightHelper", (pp => {
          this.showQueue.push(pp), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        ep.m.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(pp, ip) {
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
        let pp, ip, cp, Op, op, Ip = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, pp = "slideIn") : "slideOut" === this.state.currState ? pp = "slideOut" : null === this.currMessage && (Ip = !1), this.currMessage) {
          const Ip = this.currMessage.color || "rgb(102, 102, 102)";
          ip = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === pp ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, cp = {
            backgroundColor: Ip
          }, Op = {
            animation: "2s " + ("slideOut" === pp ? "CloseNotification" : "ExpandNotification")
          }, op = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === pp ? "textDisappear" : "textAppear")
          }
        }
        return Ip ? (0, Dp.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...ip
          },
          children: [(0, Dp.jsx)("div", {
            className: "LeftSide",
            style: cp,
            children: (0, Dp.jsx)(fp.d, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Dp.jsx)("div", {
            className: "RightSide",
            style: Op,
            children: (0, Dp.jsx)("div", {
              className: "HelperText",
              style: op,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var ap = cp(36705),
      np = cp(1432);
    const Fp = (0, np.i)((pp => pp.PadSneakChip));

    function gp(pp) {
      const [ip, cp, Op] = function(pp) {
        const ip = parseInt(pp.substring(1), 16),
          cp = (ip >> 16) / 255,
          Op = (ip >> 8 & 255) / 255,
          op = (255 & ip) / 255,
          Ip = Math.max(cp, Op, op),
          Sp = Math.min(cp, Op, op),
          xp = (Ip + Sp) / 2,
          Lp = Ip - Sp;
        if (0 === Lp) return [0, 0, xp];
        const Yp = Lp / (1 - Math.abs(2 * xp - 1));
        let Dp;
        Dp = Ip === cp ? (Op - op) / Lp % 6 : Ip === Op ? (op - cp) / Lp + 2 : (cp - Op) / Lp + 4;
        return [(60 * Dp + 360) % 360, Yp, xp]
      }(pp), op = 0 === cp ? 0 : Math.min(.6, cp + .03), Ip = Op > .5 ? -1 : 1, Sp = Gp(Op + .09 * Ip);
      return {
        panel: pp,
        slot: rp(ip, op, Sp),
        slotSelected: rp(ip, op, Gp(Sp + .2 * Ip)),
        slotUnavailable: rp(ip, op, Gp(Op + -.1 * Ip))
      }
    }

    function Gp(pp) {
      return Math.min(1, Math.max(0, pp))
    }

    function rp(pp, ip, cp) {
      const Op = (1 - Math.abs(2 * cp - 1)) * ip,
        op = Op * (1 - Math.abs(pp / 60 % 2 - 1)),
        Ip = cp - Op / 2;
      let Sp;
      return Sp = pp < 60 ? [Op, op, 0] : pp < 120 ? [op, Op, 0] : pp < 180 ? [0, Op, op] : pp < 240 ? [0, op, Op] : pp < 300 ? [op, 0, Op] : [Op, 0, op], "#" + Sp.map((pp => function(pp) {
        return Math.round(255 * pp).toString(16).padStart(2, "0")
      }(pp + Ip))).join("")
    }
    var Zp = cp(36728),
      zp = cp(4371),
      sp = cp(2457),
      Kp = cp(2463),
      Vp = cp(36779),
      ii = cp(4927),
      ci = cp(1497),
      Oi = cp(640);

    function oi(pp, ip, cp, Op) {
      pp.style.display = "";
      const op = pp.offsetWidth,
        Ip = pp.offsetHeight,
        Sp = Math.min(Math.max((ip.left + ip.right) / 2 - op / 2, 8), window.innerWidth - 8 - op);
      let xp = ip.top - cp - Ip;
      const Lp = [...Op].sort(((pp, ip) => ip.top - pp.top));
      for (const Yp of Lp) Sp < Yp.right && Sp + op > Yp.left && xp < Yp.bottom && xp + Ip > Yp.top && (xp = Yp.top - 8 - Ip);
      return xp < 8 ? (pp.style.display = "none", null) : (pp.style.transform = `translate(${Sp-ip.left}px, ${xp-ip.top}px)`, {
        left: Sp,
        top: xp,
        right: Sp + op,
        bottom: xp + Ip
      })
    }

    function Ii(pp) {
      const ip = [];
      for (const cp of document.querySelectorAll(pp)) {
        const pp = cp.getBoundingClientRect();
        pp.width > 0 && "visible" === getComputedStyle(cp).visibility && ip.push(pp)
      }
      return ip
    }

    function Si(pp, ip) {
      return pp.clientX >= ip.left - 8 && pp.clientX <= ip.right + 8 && pp.clientY >= ip.top - 8 && pp.clientY <= ip.bottom + 8
    }
    var xi = cp(9002);
    class Li {
      constructor(pp) {
        this.deps = pp, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(pp) {
        pp && "armed" === this.phase ? this.setPhase("ready") : pp || "ready" !== this.phase || this.setPhase("armed")
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
      hold(pp, ip) {
        this.suspended || (this.offered ? ip || this.setPhase("idle") : pp && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : pp || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(pp) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const ip = this.phase;
        this.phase = pp, this.deps.onPhase(pp, ip)
      }
    }
    const Yi = 25 * Math.PI / 180,
      Di = 45 * Math.PI / 180;
    class Ai extends Li {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(pp, ip, cp) {
        this.speed = cp;
        const Op = Math.hypot(pp, ip),
          op = Op > 0 ? Math.acos(Math.min(1, -ip / Op)) : Math.PI;
        this.hold(Op >= .8 && op <= Yi, Op >= .5 && op <= Di)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Pi = cp(1308);

    function Wi(pp, ip) {
      const cp = (0, op.useRef)(null),
        Op = (0, op.useRef)(ip);
      return Op.current = ip, (0, op.useEffect)((() => {
        if (!pp) return;
        const {
          create: ip,
          elementRef: op,
          ringRef: Ip,
          classPrefix: Sp,
          keptBehindMovementPanels: xp,
          resizeEnds: Lp
        } = Op.current, Yp = {
          charging: `${Sp}Charging`,
          armed: `${Sp}Armed`,
          ready: `${Sp}Ready`,
          locked: `${Sp}Locked`
        };
        let Dp = null;
        const Ap = ip({
          onPhase: (pp, ip) => {
            const cp = op.current;
            if (null !== cp) {
              for (const [ip, Op] of Object.entries(Yp)) cp.classList.toggle(Op, ip === pp);
              if ("charging" === pp) Dp = Ip.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === pp) {
                var Sp;
                null === (Sp = Dp) || void 0 === Sp || Sp.cancel(), Dp = null
              }
              var xp, Lp;
              if ("armed" === pp && "charging" === ip && Op.current.onArmed(), "ready" === pp && xi.f.play("lockReady"), "locked" === pp) xi.f.play("lockLocked"), null === (xp = (Lp = Op.current).onLocked) || void 0 === xp || xp.call(Lp);
              "locked" === ip && Op.current.onUnlocked()
            }
          }
        });
        cp.current = Ap;
        const Pp = () => {
            Ap.suspend()
          },
          Wp = () => {
            "hidden" === document.visibilityState && Pp()
          },
          yp = () => {
            Lp ? Ap.suspend() : Ap.suspendArming()
          },
          Up = (0, Pi.p)((pp => {
            let {
              keepsMovement: ip
            } = pp;
            ip && xp ? Ap.suspendArming() : Pp()
          }));
        return document.addEventListener("visibilitychange", Wp), window.addEventListener("blur", Pp), window.addEventListener("resize", yp), () => {
          Up(), document.removeEventListener("visibilitychange", Wp), window.removeEventListener("blur", Pp), window.removeEventListener("resize", yp), Ap.cancel(), cp.current = null
        }
      }), [pp]), (0, mp.b)("localPlayerAliveSet", (() => {
        var pp;
        null === (pp = cp.current) || void 0 === pp || pp.suspend()
      })), cp
    }
    const yi = "data-joystick-tap";

    function Ui(pp) {
      var ip, cp;
      const Op = null === (ip = (cp = pp).closest) || void 0 === ip ? void 0 : ip.call(cp, `[${yi}]`);
      return Op instanceof HTMLElement ? Op : null
    }
    class wi {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var pp, ip;
        return null !== (pp = null === (ip = this.tap) || void 0 === ip ? void 0 : ip.id) && void 0 !== pp ? pp : null
      }
      land(pp, ip) {
        null === this.tap && (this.tap = {
          key: pp,
          id: ip.identifier,
          x: ip.clientX,
          y: ip.clientY
        }, (0, ci.j)(pp, !0))
      }
      slidFrom(pp) {
        const ip = this.tap,
          cp = ip ? pp.find((pp => pp.identifier === ip.id)) : void 0;
        return !cp || Math.hypot(cp.clientX - ip.x, cp.clientY - ip.y) <= 12 ? null : (this.end(!1), {
          identifier: ip.id,
          clientX: ip.x,
          clientY: ip.y
        })
      }
      end(pp) {
        const ip = this.tap;
        ip && (this.tap = null, (0, ci.j)(ip.key, !1), pp && ip.key.click())
      }
    }
    var vi = cp(2525),
      ti = cp(2537),
      Hi = cp(1133),
      di = cp(3520),
      ei = cp(2543);

    function ui(pp, ip, cp) {
      const Op = function(pp, ip, cp) {
        const Op = cp.map((cp => ({
            left: Math.max(0, cp.left),
            top: Math.max(0, cp.top),
            right: Math.min(pp, cp.right),
            bottom: Math.min(ip, cp.bottom)
          }))).filter((pp => pp.right > pp.left && pp.bottom > pp.top)),
          op = [...new Set([0, ip, ...Op.flatMap((pp => [pp.top, pp.bottom]))])].sort(((pp, ip) => pp - ip)),
          Ip = [];
        for (let Sp = 0; Sp < op.length - 1; Sp++) {
          const ip = op[Sp],
            cp = op[Sp + 1],
            xp = Op.filter((pp => pp.top <= ip && pp.bottom >= cp)).map((pp => [pp.left, pp.right])).sort(((pp, ip) => pp[0] - ip[0]));
          let Lp = 0;
          for (const [pp, Op] of xp) pp > Lp && Ip.push({
            left: Lp,
            top: ip,
            right: pp,
            bottom: cp
          }), Lp = Math.max(Lp, Op);
          Lp < pp && Ip.push({
            left: Lp,
            top: ip,
            right: pp,
            bottom: cp
          })
        }
        return Ip
      }(pp, ip, cp);
      if (0 === Op.length) return 'path("M0 0Z")';
      if (1 === Op.length && 0 === Op[0].left && 0 === Op[0].top && Op[0].right === pp && Op[0].bottom === ip) return "";
      const op = pp => Math.round(10 * pp) / 10;
      return `path("${Op.map((pp=>`M${op(pp.left)} ${op(pp.top)}H${op(pp.right)}V${op(pp.bottom)}H${op(pp.left)}Z`)).join("")}")`
    }

    function ji(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const op = [],
        Ip = 2 * cp / Op;
      for (let Sp = 0; Sp < Op; Sp++) {
        const Op = ip - cp + Sp * Ip,
          xp = Op + Ip,
          Lp = Math.min(Math.max(ip, Op), xp) - ip,
          Yp = Math.sqrt(Math.max(0, cp * cp - Lp * Lp));
        op.push({
          left: pp - Yp,
          top: Op,
          right: pp + Yp,
          bottom: xp
        })
      }
      return op
    }
    var ki = cp(9015),
      mi = cp(36764);

    function Ri(pp) {
      const ip = pp.getBoundingClientRect(),
        cp = {
          left: ip.left,
          top: ip.top,
          right: ip.right,
          bottom: ip.bottom
        },
        Op = (0, Vp.e)(pp);
      if (Op.whole) return [cp];
      const op = function(pp) {
          const ip = pp.right - pp.left,
            cp = pp.bottom - pp.top,
            Op = Math.min(ip, cp) / 2,
            op = (pp.left + pp.right) / 2,
            Ip = (pp.top + pp.bottom) / 2;
          return ip >= cp ? [{
            left: pp.left + Op,
            top: pp.top,
            right: pp.right - Op,
            bottom: pp.bottom
          }, ...ji(pp.left + Op, Ip, Op), ...ji(pp.right - Op, Ip, Op)] : [{
            left: pp.left,
            top: pp.top + Op,
            right: pp.right,
            bottom: pp.bottom - Op
          }, ...ji(op, pp.top + Op, Op), ...ji(op, pp.bottom - Op, Op)]
        }(cp),
        Ip = Op.keyBox;
      if (Ip) {
        const pp = (cp.left + cp.right) / 2,
          ip = (cp.top + cp.bottom) / 2;
        op.push({
          left: pp - Ip.width / 2,
          top: ip - Ip.height / 2,
          right: pp + Ip.width / 2,
          bottom: ip + Ip.height / 2
        })
      }
      return op
    }

    function qi(pp) {
      const ip = pp.getBoundingClientRect();
      return 0 === ip.width && 0 === ip.height || "visible" !== getComputedStyle(pp).visibility ? [] : [(0, ki.r)(ip, 44)]
    }

    function Mi(pp, ip) {
      (0, op.useEffect)((() => {
        const cp = pp.current;
        if (!ip || !cp) return;
        const Op = () => {
          const pp = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            ip = pp.find((pp => pp.classList.contains("TouchInteractHit")));
          ip !== op && (op && Ip.unobserve(op), op = ip, ip && Ip.observe(ip));
          const Op = Array.from(document.querySelectorAll(ei.d)),
            Sp = [...pp.flatMap((pp => Ri(pp))), ...Op.flatMap(qi)],
            xp = function(pp, ip) {
              const cp = ip.map((ip => ({
                left: ip.left - pp.left,
                top: ip.top - pp.top,
                right: ip.right - pp.left,
                bottom: ip.bottom - pp.top
              })));
              return ui(Math.ceil(pp.width), Math.ceil(pp.height), cp)
            }(cp.getBoundingClientRect(), Sp);
          cp.style.clipPath !== xp && (cp.style.clipPath = xp)
        };
        let op;
        const Ip = new ResizeObserver((() => {
          Op()
        }));
        Op(), Ip.observe(cp);
        const Sp = cp.closest(".InGameUi"),
          xp = new MutationObserver(Op);
        Sp && xp.observe(Sp, {
          attributes: !0,
          attributeFilter: ["class", mi.d]
        });
        const Lp = [(0, ep.n)(di.e, Op), (0, ep.n)(ei.q, Op), (0, ep.n)(ei.e, Op)];
        return () => {
          Ip.disconnect(), xp.disconnect();
          for (const pp of Lp) pp();
          cp.style.clipPath = ""
        }
      }), [pp, ip])
    }
    var Ci = cp(4496);

    function Ei(pp) {
      var ip;
      let {
        onMove: cp,
        mode: Op,
        speedCurve: Ip,
        autorun: Sp = !1,
        keys: xp
      } = pp;
      const Lp = (0, op.useRef)(null),
        Yp = (0, op.useRef)(null),
        Ap = (0, op.useRef)(null),
        Pp = (0, op.useRef)(null),
        yp = (0, op.useRef)(null),
        Up = (0, op.useRef)(null),
        wp = (0, op.useRef)(new wi).current,
        vp = (0, op.useRef)(null),
        tp = (0, op.useRef)(null),
        Hp = (0, op.useRef)(null),
        dp = (0, op.useRef)(!1),
        ep = (0, op.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: jp
        } = (0, Xp.H)(),
        kp = (0, Ci.m)(Op),
        mp = (0, Rp.o)(["notchSize"]).notchSize,
        qp = mp.left,
        Mp = (0, op.useRef)(16),
        Cp = (0, ti.f)(),
        [Ep, lp, Qp] = "pinned" === Op ? vi.m : null !== (ip = Cp.hudElements.joystick) && void 0 !== ip ? ip : vi.m,
        Jp = "pinned" === Op ? null : Cp.hudSafe,
        Bp = Math.max(Ci.h, Ci.j * Qp);
      Mi(Yp, "pinned" !== Op);
      const Np = function(pp, ip, cp, Op, Ip) {
        const Sp = (0, op.useRef)(null),
          xp = () => {
            clearInterval(Sp.current), Sp.current = null
          },
          Lp = Wi(pp, {
            create: pp => new Ai(pp),
            elementRef: ip,
            ringRef: cp,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Ip,
            onLocked: () => {
              Sp.current = setInterval((() => {
                Wp.gameBridge.lookup("dropAhead", null) && (xi.f.play("autorunLedgeStop"), Lp.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              xp(), Op()
            }
          });
        return (0, op.useEffect)((() => xp), []), Lp
      }(Sp, Ap, vp, (() => {
        gp(), Fp()
      }), (() => {
        Tp(), null === Hp.current && Np.current.suspend()
      }));

      function Tp() {
        const pp = Ap.current.getBoundingClientRect();
        Hp.current = oi(tp.current, pp, 80, Ii(`.TouchInventoryKey, .TouchSprintKey, ${ei.d}`)), dp.current = null !== Hp.current && Si(ep.current, Hp.current)
      }

      function bp() {
        const {
          innerWidth: pp,
          innerHeight: ip
        } = window, cp = (0, ei.F)(Jp, pp, ip, (0, ei.L)(mp, pp, ip), Mp.current);
        return {
          left: cp[3],
          bottom: cp[2]
        }
      }

      function hp(pp) {
        Ap.current.style.transform = `translate(${pp.x-Bp}px, ${pp.y-Bp}px)`
      }

      function ap(pp) {
        const ip = Ap.current;
        ip.classList.add("Resting"), ip.classList.toggle("Returning", pp), ip.style.display = "fixed_hidden" === Op ? "none" : "block", hp(function() {
          const {
            innerWidth: pp,
            innerHeight: ip
          } = window, cp = bp(), Op = qp * pp / 100 + cp.left, op = Lp.current.offsetHeight || ip, Ip = ((0, Hi.d)(pp, ip) ? Ci.d : Ci.b) + cp.bottom;
          return {
            x: Math.min(pp - Bp, Math.max(Bp, Op + Ci.g + Ep * pp)),
            y: Math.min(op - Bp, Math.max(Bp, op - Ip + lp * op))
          }
        }())
      }
      const np = (0, op.useRef)({
        restFixed: ap,
        release: Gp
      });

      function Fp() {
        kp ? ap("fixed_shown" === Op) : "floating" === Op && (Ap.current.style.display = "none"), cp({
          x: 0,
          y: 0
        })
      }

      function gp() {
        Up.current = null, yp.current = null, Pp.current.style.transform = "translate(-50%, -50%)"
      }

      function Gp(pp) {
        gp();
        const ip = Np.current;
        pp && null !== ip && void 0 !== ip && ip.lift() ? cp({
          x: 0,
          y: -ip.lockedSpeed
        }) : (null === ip || void 0 === ip || ip.cancel(), Fp())
      }

      function rp(pp) {
        var ip;
        if (null === (ip = Np.current) || void 0 === ip || ip.startTouch(), "pinned" === Op) {
          const pp = Ap.current.getBoundingClientRect();
          yp.current = {
            x: pp.left + pp.width / 2,
            y: pp.top + pp.height / 2
          }
        } else {
          yp.current = {
            x: pp.clientX,
            y: pp.clientY
          }, Ap.current.classList.remove("Resting", "Returning"), Ap.current.style.display = "block";
          const ip = Lp.current.getBoundingClientRect();
          hp({
            x: pp.clientX - ip.left,
            y: pp.clientY - ip.top
          }), Sp && (ep.current = {
            clientX: pp.clientX,
            clientY: pp.clientY
          }, Tp())
        }
      }

      function Zp(pp) {
        const ip = wp.slidFrom(Array.from(pp.touches));
        ip && null === Up.current && (Up.current = ip.identifier, rp(ip));
        const Op = Array.from(pp.touches).find((pp => pp.identifier === Up.current));
        if (null === yp.current || null === Up.current || (0, Oi.G)(Op)) return;
        const op = Np.current,
          Sp = Op.clientX - yp.current.x,
          xp = Op.clientY - yp.current.y,
          Lp = Math.hypot(Sp, xp),
          Yp = Lp > 0 ? Math.min(1, Bp / Lp) : 0,
          Dp = Sp * Yp,
          Ap = xp * Yp,
          Wp = Math.hypot(Dp, Ap) / Bp,
          vp = Ip && Wp > 0 ? Ip(Wp) / Wp : 1;
        Pp.current.style.transform = `translate(calc(-50% + ${Dp}px), calc(-50% + ${Ap}px))`;
        const tp = Dp / Bp,
          jp = Ap / Bp;
        if (cp({
            x: tp * vp,
            y: jp * vp
          }), null !== op && null !== Hp.current) {
          op.move(tp, jp, Wp * vp), ep.current = {
            clientX: Op.clientX,
            clientY: Op.clientY
          };
          const pp = dp.current;
          dp.current = Si(Op, Hp.current), dp.current !== pp && op.target(dp.current)
        }
      }
      return np.current = {
        restFixed: ap,
        release: Gp
      }, (0, op.useLayoutEffect)((() => {
        if (!kp) return;
        const pp = () => {
          Mp.current = (0, ei.P)(document)
        };
        pp(), null === Up.current && np.current.restFixed(!1);
        const ip = new ResizeObserver((() => {
          pp(), null === Up.current && np.current.restFixed(!1)
        }));
        ip.observe(Lp.current);
        const cp = Ap.current;
        return () => {
          ip.disconnect(), cp.classList.remove("Resting", "Returning"), null === Up.current && (cp.style.display = "", cp.style.transform = "")
        }
      }), [kp, Op, mp, Ep, lp, Bp, Jp]), (0, op.useEffect)((() => {
        const pp = (pp, ip) => void 0 === ip || null === ip || Array.from(pp.touches).some((pp => pp.identifier === ip)) ? null : {
            lifted: "touchend" === pp.type && Array.from(pp.changedTouches).some((pp => pp.identifier === ip))
          },
          ip = ip => {
            const cp = pp(ip, Up.current);
            cp && np.current.release(cp.lifted);
            const Op = pp(ip, wp.touchId);
            Op && wp.end(Op.lifted)
          },
          cp = () => {
            null !== Up.current && np.current.release(!1), wp.end(!1)
          },
          Op = () => {
            "hidden" === document.visibilityState && cp()
          };
        document.addEventListener("touchstart", ip, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", ip, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", ip, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", ip, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", cp), document.addEventListener("visibilitychange", Op);
        const op = (0, Pi.p)((pp => {
          let {
            keepsMovement: ip
          } = pp;
          ip || cp()
        }));
        return () => {
          op(), document.removeEventListener("touchstart", ip, {
            capture: !0
          }), document.removeEventListener("touchmove", ip, {
            capture: !0
          }), document.removeEventListener("touchend", ip, {
            capture: !0
          }), document.removeEventListener("touchcancel", ip, {
            capture: !0
          }), window.removeEventListener("blur", cp), document.removeEventListener("visibilitychange", Op)
        }
      }), []), (0, op.useEffect)((() => {
        const pp = Lp.current,
          ip = pp => {
            pp.preventDefault()
          };
        return pp.addEventListener("touchstart", ip, {
          passive: !1
        }), () => {
          pp.removeEventListener("touchstart", ip)
        }
      }), []), (0, Dp.jsxs)("div", {
        ref: Lp,
        className: "JoystickZone",
        style: kp && (Ep > 0 || Qp > 1 || bp().left > 0) ? {
          width: `max(35vw, calc(${qp+100*Ep}vw + ${bp().left+Ci.g+Bp+24}px))`
        } : void 0,
        onTouchStart: function(pp) {
          const ip = Array.from(pp.changedTouches).filter((pp => {
            var ip;
            return null === (ip = Lp.current) || void 0 === ip ? void 0 : ip.contains(pp.target)
          }));
          for (const Op of ip) {
            const pp = Ui(Op.target);
            pp && wp.land(pp, Op)
          }
          const cp = ip.find((pp => null === Ui(pp.target)));
          cp && null === Up.current && (Up.current = cp.identifier, rp(cp), Zp(pp))
        },
        onTouchMove: Zp,
        children: [(0, Dp.jsx)("div", {
          ref: Yp,
          className: "JoystickTouchLayer"
        }), (0, Dp.jsxs)("div", {
          ref: Ap,
          className: "Joystick",
          style: {
            width: 2 * Bp + "px",
            height: 2 * Bp + "px",
            transform: "pinned" === Op ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Dp.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * Bp + "px",
              height: 2 * Bp + "px"
            }
          }), Sp && (0, Dp.jsxs)(Dp.Fragment, {
            children: [(0, Dp.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Dp.jsx)("circle", {
                ref: vp,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Dp.jsxs)("div", {
              ref: tp,
              className: "AutorunTarget",
              children: [(0, Dp.jsx)(fp.d, {
                name: "lock"
              }), jp("settingsMenu:autoRun")]
            })]
          }), (0, Dp.jsx)("div", {
            ref: Pp,
            className: "JoystickKnob",
            style: {
              width: `${Bp}px`,
              height: `${Bp}px`
            }
          })]
        }), xp]
      })
    }
    var Xi = cp(272);
    const li = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      Qi = {
        short_creep: {
          ...li,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...li,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...li,
          deadZone: .05
        },
        control: li
      };

    function Ji(pp) {
      return function(pp, ip) {
        const {
          deadZone: cp,
          creepEnd: Op,
          fullSpeedAt: op,
          creepMin: Ip,
          creepMax: Sp
        } = pp;
        if (ip < cp) return 0;
        if (ip < Op) {
          const pp = (ip - cp) / (Op - cp);
          return Ip + (Sp - Ip) * pp * pp
        }
        return ip < op ? Sp + (1 - Sp) * (ip - Op) / (op - Op) : 1
      }(Qi[Xi.d.mobile_walk_curve_v1], pp)
    }
    var Bi = cp(9019);

    function Ni(pp, ip) {
      const cp = (0, op.useRef)(null);
      return (0, op.useLayoutEffect)((() => (Vp.i.set(pp, cp.current, ip), () => {
        Vp.i.set(pp, null)
      })), [pp, ip]), cp
    }
    const Ti = "C",
      fi = "J",
      bi = "U",
      ai = "A",
      ni = "G",
      Fi = "X",
      gi = (0, op.forwardRef)((function(pp, ip) {
        let {
          slot: cp,
          canvasZone: Op = !1,
          lit: Ip = !1,
          label: xp,
          className: Lp,
          children: Yp,
          ...Ap
        } = pp;
        return (0, op.useEffect)((() => (ep.m.GA(di.e), () => {
          ep.m.GA(di.e)
        })), []), (0, Dp.jsx)("div", {
          ref: ip,
          className: Sp()("TouchKeyHit", `TouchSlot${cp}`, Lp, {
            CanvasZone: Op
          }),
          ...Ap,
          children: (0, Dp.jsxs)("div", {
            className: Sp()("TouchKey", {
              Lit: Ip,
              Labelled: void 0 !== xp
            }),
            children: [Yp, void 0 !== xp && (0, Dp.jsx)("span", {
              className: "TouchKeyLabel",
              children: xp
            })]
          })
        })
      }));

    function Gi(pp, ip) {
      (0, op.useEffect)((() => () => {
        ip.current && (ip.current = !1, (0, Kp.D)(pp, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function ri(pp, ip) {
      const cp = (0, Bi.f)(ip);
      return pp.filter((pp => null !== pp)).slice(0, cp.length).map(((pp, ip) => {
        const Op = cp[ip];
        return (0, Dp.jsx)(op.Fragment, {
          children: pp.render(Op)
        }, `${pp.id}:${Op}`)
      }))
    }
    var Zi = cp(36769);
    class zi extends Li {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(pp, ip) {
        this.start = {
          x: pp,
          y: ip
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(pp, ip, cp) {
        const Op = Math.hypot(pp - this.start.x, ip - this.start.y) <= 12;
        this.moved ||= !Op;
        const op = null !== cp && ip < this.start.y - 12 && Si({
          clientX: pp,
          clientY: ip
        }, cp);
        this.hold(!this.moved, Op || op)
      }
    }
    const si = new Set;

    function Ki(pp) {
      const ip = new Set(Array.from(pp.touches, (pp => pp.identifier)));
      for (const cp of si) {
        for (const pp of cp.ids) ip.has(pp) || cp.ids.delete(pp);
        if (0 === cp.ids.size) {
          si.delete(cp);
          cp.pressesOnPointerDown && "touchstart" === pp.type && Array.from(pp.changedTouches).some((pp => pp.target instanceof Node && cp.element.contains(pp.target))) || cp.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const rS of ["touchstart", "touchmove"]) window.addEventListener(rS, Ki, {
        capture: !0,
        passive: !0
      });

    function Vi(pp) {
      let {
        pressesOnPointerDown: ip = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cp = (0, op.useRef)(pp);
      cp.current = pp;
      const Op = (0, op.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: ip,
        release: () => {
          cp.current()
        }
      });
      (0, op.useEffect)((() => {
        const pp = Op.current;
        return () => {
          si.delete(pp), pp.ids.clear()
        }
      }), []);
      const Ip = pp => {
        const ip = Op.current;
        for (const cp of Array.from(pp.changedTouches)) ip.ids.delete(cp.identifier);
        0 === ip.ids.size && si.delete(ip)
      };
      return {
        onTouchStart: pp => {
          const ip = Op.current;
          ip.element = pp.currentTarget;
          for (const cp of Array.from(pp.changedTouches)) cp.target instanceof Node && pp.currentTarget.contains(cp.target) && ip.ids.add(cp.identifier);
          ip.ids.size > 0 && si.add(ip)
        },
        onTouchEnd: Ip,
        onTouchCancel: Ip
      }
    }

    function pc(pp, ip) {
      return null === ip ? null : (0, Zi.b)(pp.nativeEvent.changedTouches, ip.id)
    }

    function ic(pp) {
      let {
        lockable: ip
      } = pp;
      const {
        t: cp
      } = (0, Xp.H)(), Op = "round" === (0, vi.Z)().hudShape, Ip = (0, op.useRef)(!1);
      Gi(sp.y.Jump, Ip);
      const Sp = (0, op.useRef)(null),
        xp = (0, op.useRef)(null),
        Lp = (0, op.useRef)(null),
        Yp = (0, op.useRef)(null),
        Ap = (0, op.useRef)(null),
        Pp = (0, op.useRef)(null),
        Wp = (0, op.useRef)(!1),
        yp = (pp, ip) => {
          Ip.current = pp, (0, Kp.D)(sp.y.Jump, pp, ip)
        },
        Up = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Ip.current && (Sp.current && (0, ci.j)(Sp.current, !1), yp(!1, pp))
        },
        wp = Wi(ip, {
          create: pp => new zi(pp),
          elementRef: Sp,
          ringRef: xp,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const pp = Sp.current.getBoundingClientRect(),
              ip = Lp.current.parentElement,
              cp = ip.getBoundingClientRect(),
              Op = {
                left: cp.left + ip.clientLeft,
                top: cp.top + ip.clientTop,
                right: cp.right - ip.clientLeft,
                bottom: cp.bottom - ip.clientTop
              };
            if (Ap.current = oi(Lp.current, Op, 16, Ii(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${ei.d}`)), null === Ap.current) return void wp.current.suspend();
            const op = Ap.current;
            Pp.current = {
              left: Math.min(pp.left, op.left),
              top: op.top,
              right: Math.max(pp.right, op.right),
              bottom: pp.bottom
            }, Wp.current = null !== Yp.current && Si({
              clientX: Yp.current.x,
              clientY: Yp.current.y
            }, op)
          },
          onUnlocked: () => {
            null === Yp.current && Up()
          }
        }),
        vp = pp => {
          var ip;
          Yp.current = null, null === (ip = wp.current) || void 0 === ip || ip.cancel(), Up(pp)
        },
        tp = Vi((() => {
          vp()
        })),
        Hp = pp => {
          const ip = Yp.current;
          var cp;
          return null === ip ? null !== (cp = wp.current) && void 0 !== cp && cp.locked ? null : "lifted" : pc(pp, ip) ? "lifted" : (0, Zi.e)(pp.nativeEvent.touches, ip.id) ? null : "dropped"
        };
      return (0, Dp.jsxs)(gi, {
        ref: Sp,
        slot: fi,
        className: "JumpKey",
        onTouchStart: pp => {
          tp.onTouchStart(pp), (0, ci.j)(pp.currentTarget, !0), null === Yp.current || (0, Zi.e)(pp.nativeEvent.touches, Yp.current.id) || vp();
          const ip = pp.changedTouches[0];
          var cp;
          null === Yp.current && ip && (Yp.current = {
            id: ip.identifier,
            x: ip.clientX,
            y: ip.clientY
          }, null === (cp = wp.current) || void 0 === cp || cp.press(ip.clientX, ip.clientY));
          Ip.current || yp(!0, pp.nativeEvent)
        },
        onTouchMove: pp => {
          const ip = Yp.current,
            cp = pc(pp, ip);
          if (!cp) return;
          const Op = wp.current;
          if (null === Op || void 0 === Op || Op.move(cp.clientX, cp.clientY, Pp.current), null !== Op && void 0 !== Op && Op.offered) {
            const pp = Si(cp, Ap.current);
            pp !== Wp.current && (Wp.current = pp, Op.target(pp))
          }
          ip.x = cp.clientX, ip.y = cp.clientY
        },
        onTouchEnd: pp => {
          var ip;
          tp.onTouchEnd(pp);
          const cp = Hp(pp);
          null !== cp && ("dropped" !== cp ? (Yp.current = null, null !== (ip = wp.current) && void 0 !== ip && ip.lift() ? (0, ci.j)(pp.currentTarget, !1) : Up(pp.nativeEvent)) : vp(pp.nativeEvent))
        },
        onTouchCancel: pp => {
          tp.onTouchCancel(pp), null !== Hp(pp) && vp(pp.nativeEvent)
        },
        children: [(0, Dp.jsx)(fp.d, {
          name: "arrow-up-from-line"
        }), ip && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Dp.jsx)(fp.d, {
              name: "lock"
            })
          }), (0, Dp.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Dp.jsx)("rect", {
              ref: xp,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Op ? 48 : 0,
              pathLength: 1
            })
          }), (0, Dp.jsxs)("div", {
            ref: Lp,
            className: "JumpLockTarget",
            children: [(0, Dp.jsx)(fp.d, {
              name: "lock"
            }), cp("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var cc = cp(36783);

    function Oc(pp) {
      let {
        atHome: ip
      } = pp;
      const {
        t: cp
      } = (0, Xp.H)(), Op = (Ip = (0, dp.i)("runningSpeed"), xp = (0, dp.i)("walkingSpeed"), null !== Ip && null !== xp && Ip > xp);
      var Ip, xp;
      const Yp = (0, vi.r)((0, ti.f)().hudElements, "sprint"),
        Ap = (0, Lp.i)(cc.c, (0, cc.d)());
      return (0, op.useEffect)((() => {
        Op && !Yp || (0, cc.h)(!0)
      }), [Op, Yp]), (0, op.useEffect)((() => () => {
        (0, cc.h)(!0)
      }), []), Op ? (0, Dp.jsx)("div", {
        className: Sp()("TouchSprintHit", {
          AtHome: ip
        }),
        role: "switch",
        "aria-checked": Ap,
        "aria-label": cp("touchKeys:sprint"),
        [yi]: "",
        onClick: () => {
          (0, cc.h)(!(0, cc.d)())
        },
        children: (0, Dp.jsx)("div", {
          className: Sp()("TouchKey TouchSprintKey", {
            Lit: Ap
          }),
          children: (0, Dp.jsx)(fp.d, {
            name: Ap ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const oc = new WeakMap;
    class Ic {
      constructor(pp) {
        this.zones = pp, this.followed = new Map, this.onStart = pp => {
          if (this.releaseMissing(pp.touches), pp.target instanceof HTMLCanvasElement)
            for (let cp = 0; cp < pp.changedTouches.length; cp++) {
              var ip;
              const {
                identifier: Op,
                clientX: op,
                clientY: Ip
              } = pp.changedTouches[cp];
              this.release(Op);
              const Sp = this.zones.hitZone(op, Ip);
              if (!Sp) continue;
              const {
                key: xp
              } = Sp;
              null === (ip = oc.get(xp)) || void 0 === ip || ip.cancel();
              const Lp = {
                hit: Sp.element,
                key: xp,
                x: Sp.x,
                y: Sp.y,
                reach: .6 * Sp.radius
              };
              this.followed.set(Op, Lp), (0, ci.j)(Sp.element, !0), Sc(Lp, op, Ip)
            }
        }, this.onMove = pp => {
          this.releaseMissing(pp.touches);
          for (let ip = 0; ip < pp.changedTouches.length; ip++) {
            const {
              identifier: cp,
              clientX: Op,
              clientY: op
            } = pp.changedTouches[ip], Ip = this.followed.get(cp);
            Ip && Sc(Ip, Op, op)
          }
        }, this.onEnd = pp => {
          for (let ip = 0; ip < pp.changedTouches.length; ip++) this.release(pp.changedTouches[ip].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const pp = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, pp), document.addEventListener("touchmove", this.onMove, pp), document.addEventListener("touchend", this.onEnd, pp), document.addEventListener("touchcancel", this.onEnd, pp), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(pp) {
        for (const ip of [...this.followed.keys()])(0, Zi.e)(pp, ip) || this.release(ip)
      }
      releaseAll() {
        for (const pp of [...this.followed.keys()]) this.release(pp)
      }
      release(pp) {
        const ip = this.followed.get(pp);
        if (!ip) return;
        this.followed.delete(pp);
        for (const op of this.followed.values())
          if (op.key === ip.key) return;
        (0, ci.j)(ip.hit, !1);
        const {
          key: cp
        } = ip, Op = cp.style.translate;
        cp.style.translate = "", Op && oc.set(cp, cp.animate({
          translate: [Op, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Sc(pp, ip, cp) {
      let {
        key: Op,
        x: op,
        y: Ip,
        reach: Sp
      } = pp;
      const xp = ip - op,
        Lp = cp - Ip,
        Yp = Math.min(1, Sp / (Math.hypot(xp, Lp) || 1));
      Op.style.translate = `${xp*Yp}px ${Lp*Yp}px`
    }
    var xc = cp(1505),
      Lc = cp(104),
      Yc = cp(1372);
    const Dc = "threeFingerHintShown",
      Ac = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let Pc = 0,
      Wc = !1;

    function yc() {
      const pp = new Set;
      let ip = -1 / 0,
        cp = -1 / 0,
        Op = null,
        op = 0;
      const Ip = () => {
          pp.clear()
        },
        Sp = Ip => {
          if (Ip.touches.length > 0) return;
          for (let ip = 0; ip < Ip.changedTouches.length; ip++) pp.add(Ip.changedTouches[ip].identifier);
          const Sp = pp.size;
          if (Sp < 3 || !(0, Pi.t)()) return;
          if (op = Sp, null !== Op) return;
          const xp = performance.now(),
            Lp = ip >= xp - 200;
          Op = setTimeout((() => {
            if (Op = null, !(0, Pi.t)()) return;
            const pp = cp >= xp - 200 || document.hidden;
            ! function(pp, ip) {
              var cp;
              const Op = (0, Lc.getOperatingSystem)();
              Pc < 5 && (Pc++, (0, xc.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === ip ? `${Op}:${pp}` : `${Op}:${pp}:${ip}`
              })), null === ip && (Wc || !0 === kp.h.getItem(Dc) || (Wc = !0, kp.h.setItem(Dc, !0), Yc.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (cp = Ac[Op]) && void 0 !== cp ? cp : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(op, pp ? "hide" : Lp ? "blur" : null)
          }), 500)
        },
        xp = () => {
          cp = performance.now()
        },
        Lp = () => {
          ip = performance.now()
        },
        Yp = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", Ip, Yp), document.addEventListener("touchcancel", Sp, Yp), document.addEventListener("visibilitychange", xp), window.addEventListener("blur", Lp), window.addEventListener("resize", xp), window.addEventListener("orientationchange", xp), () => {
        document.removeEventListener("touchstart", Ip, Yp), document.removeEventListener("touchcancel", Sp, Yp), document.removeEventListener("visibilitychange", xp), window.removeEventListener("blur", Lp), window.removeEventListener("resize", xp), window.removeEventListener("orientationchange", xp), null !== Op && clearTimeout(Op)
      }
    }
    const Uc = () => {
      const pp = (0, zp.m)(),
        ip = (0, Mp.t)();
      return pp || ip
    };

    function wc(pp) {
      (0, Vp.m)(pp.x, pp.y)
    }
    const vc = (0, op.memo)((function() {
        const pp = Uc(),
          {
            joystickMode: ip,
            touchSpeedCurve: cp,
            autorun: Op
          } = (0, Rp.o)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, op.useEffect)((() => ((0, ii.g)(sp.C.TouchControls, sp.C.TouchControls), () => {
          (0, ii.g)(sp.C.TouchControls, 0), (0, Vp.m)(0, 0)
        })), []), (0, op.useEffect)(yc, []), (0, Dp.jsx)("div", {
          className: Sp()("TouchMovementWrapper", {
            Hidden: pp
          }),
          "data-camera-keeper": "",
          children: (0, Dp.jsx)(Ei, {
            onMove: wc,
            mode: ip,
            speedCurve: cp ? Ji : void 0,
            autorun: Op,
            keys: (0, Dp.jsx)(Oc, {
              atHome: !(0, Ci.m)(ip)
            })
          })
        })
      })),
      tc = (0, op.memo)((function() {
        const pp = Uc(),
          {
            clientEscMenuOptions: ip
          } = (0, Rp.o)(["clientEscMenuOptions"]),
          cp = ip.touchActionButtons;
        return (0, op.useEffect)((() => new Ic(Vp.i).start()), []), (0, op.useEffect)((() => {
          ep.m.GA(di.e)
        }), [pp]), (0, Dp.jsxs)("div", {
          className: Sp()("TouchComponentsButtons", {
            Hidden: pp
          }),
          "data-camera-keeper": "",
          children: [(0, Dp.jsx)(ic, {
            lockable: ip.jumpLock && !pp
          }), (0, Dp.jsx)(Ec, {
            hidden: pp,
            actionButtons: cp
          }), (0, Dp.jsx)(dc, {})]
        })
      }));

    function Hc(pp) {
      const ip = ip => cp => {
        (0, ci.j)(cp.currentTarget, ip), pp(ip, cp.nativeEvent)
      };
      return {
        onPointerDown: ip(!0),
        onPointerUp: ip(!1),
        onPointerCancel: ip(!1)
      }
    }

    function dc() {
      const pp = (0, dp.i)("canCrouch"),
        ip = (0, mp.g)("crouching"),
        cp = (0, op.useRef)(!1);
      Gi(sp.y.Crouch, cp);
      const Op = (pp, ip) => {
          cp.current = pp, (0, Kp.D)(sp.y.Crouch, pp, ip)
        },
        Ip = (0, op.useRef)(null),
        Sp = () => {
          cp.current && (Ip.current && (0, ci.j)(Ip.current, !1), Op(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        xp = Vi(Sp);
      return (0, op.useEffect)((() => {
        !1 === pp && Sp()
      }), [pp]), !1 === pp ? null : (0, Dp.jsx)(gi, {
        ref: Ip,
        slot: Ti,
        className: "CrouchKey",
        lit: ip,
        ...xp,
        ...Hc(Op),
        children: (0, Dp.jsx)(fp.d, {
          name: "arrow-down-to-line"
        })
      })
    }
    const ec = [{
        icon: "arrows-rotate"
      }],
      uc = [{
        icon: "Arrow"
      }],
      jc = [{
        icon: "crosshairs"
      }],
      kc = [{
        icon: "swords"
      }],
      mc = [{
        icon: "hand-back-point-up"
      }],
      Rc = [{
        icon: "Firecracker"
      }];

    function qc(pp, ip, cp, Op) {
      return {
        id: JSON.stringify(ip),
        render: op => (0, Dp.jsx)(Xc, {
          code: pp,
          slot: op,
          icon: ip,
          label: Op,
          hidden: cp
        })
      }
    }

    function Mc(pp, ip) {
      return {
        id: "fly",
        render: cp => (0, Dp.jsx)(Cc, {
          slot: cp,
          flying: pp,
          label: ip
        })
      }
    }

    function Cc(pp) {
      let {
        slot: ip,
        flying: cp,
        label: Op
      } = pp;
      return (0, Dp.jsx)(gi, {
        slot: ip,
        className: "FlyKey",
        lit: cp,
        label: Op,
        ...Hc(((pp, ip) => {
          (0, Kp.D)(sp.y.Fly, pp, ip)
        })),
        children: (0, Dp.jsx)(fp.d, {
          name: "feather-pointed"
        })
      })
    }

    function Ec(pp) {
      var ip, cp;
      let {
        hidden: Op,
        actionButtons: op
      } = pp;
      const {
        t: Ip
      } = (0, Xp.H)(), {
        gun: Sp,
        aimable: xp,
        chargeName: Lp
      } = (0, mp.g)("heldItemAim"), Yp = (0, mp.g)("gliderBoostFuel"), {
        canFly: Ap,
        flying: Pp
      } = (0, mp.g)("flight"), Wp = (0, dp.i)("touchscreenActionButton"), yp = Sp ? ec : Wp, Up = xp ? {
        icon: uc,
        label: Ip("touchKeys:aim")
      } : null, wp = null !== Lp ? {
        icon: [{
          icon: Lp
        }]
      } : null, vp = null !== Up && void 0 !== Up ? Up : wp, tp = null !== (ip = null === (cp = Sp ? Up : null !== wp && void 0 !== wp ? wp : Up) || void 0 === cp ? void 0 : cp.icon) && void 0 !== ip ? ip : mc, Hp = [!op && vp ? qc(Vp.b.Action2, vp.icon, Op, vp.label) : null, Sp ? qc(Vp.b.Action3, jc, Op, Ip("touchKeys:scope")) : null, Ap ? Mc(Pp, Ip("touchKeys:fly")) : null];
      return (0, Dp.jsxs)(Dp.Fragment, {
        children: [yp && (0, Dp.jsx)(Xc, {
          code: Vp.b.Action1,
          slot: ni,
          icon: yp,
          label: Sp ? Ip("touchKeys:reload") : void 0,
          hidden: Op
        }, JSON.stringify(yp)), op && (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)(Xc, {
            code: Vp.b.Attack,
            slot: ai,
            icon: kc,
            name: Ip("touchKeys:attack"),
            hidden: Op
          }), (0, Dp.jsx)(Xc, {
            code: Vp.b.Use,
            slot: bi,
            icon: tp,
            name: Ip("touchKeys:use"),
            hidden: Op
          })]
        }), ri(Hp, op), Yp > 0 && (0, Dp.jsx)(Xc, {
          code: Vp.b.Boost,
          slot: Fi,
          icon: Rc,
          label: Ip("touchKeys:boost", {
            fuel: Yp > 99 ? "99+" : Yp
          }),
          hidden: Op
        })]
      })
    }

    function Xc(pp) {
      let {
        code: ip,
        slot: cp,
        icon: Op,
        label: op,
        name: Ip,
        hidden: Sp
      } = pp;
      const xp = Ni(ip, Sp);
      return (0, Dp.jsx)(gi, {
        ref: xp,
        slot: cp,
        className: "TouchActionKey",
        canvasZone: !0,
        label: op,
        role: void 0 !== Ip ? "img" : void 0,
        "aria-label": Ip,
        children: (0, Dp.jsx)(Yp.e, {
          text: Op
        })
      })
    }
    var lc = cp(4355),
      Qc = cp(3107),
      Jc = cp(667);
    const Bc = (0, op.memo)((function() {
      (0, tp.b)();
      const pp = (0, op.useRef)([]),
        ip = (0, Qc.c)(),
        cp = (0, op.useRef)(0),
        Op = (0, op.useRef)(0),
        Ip = (0, op.useRef)([]),
        Sp = (0, op.useRef)(null);

      function xp(cp, Op, op, Ip) {
        const Sp = (0, Jc.e)(),
          xp = setTimeout((() => {
            pp.current = pp.current.filter((pp => pp.id !== Sp)), ip()
          }), Ip);
        Wp.gameBridge.send("recordFlyingMiddleText", {
          content: cp,
          iS: Op,
          angle: op,
          cS: Ip
        }), pp.current.push({
          id: Sp,
          content: cp,
          iS: Op,
          cS: Ip,
          removeTimeout: xp,
          angle: op
        }), ip()
      }
      return (0, mp.b)("shotDamageToShow", (pp => {
        let {
          damage: ip,
          wasCrit: cp,
          distance: Op
        } = pp;
        const op = -Math.PI / 4 + Math.random() * Math.PI / 2;
        xp(cp ? [{
          str: ip.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [ip.toString()], Op, op, 1e3)
      })), (0, Lp.f)("flyingMiddleMessage", (pp => {
        let {
          content: ip,
          iS: op,
          cS: Lp
        } = pp;
        Ip.current.push({
          content: ip,
          iS: op,
          cS: Lp
        });
        const Yp = () => {
          const {
            content: pp,
            iS: ip,
            cS: op
          } = Ip.current.shift(), Sp = function(pp) {
            const ip = -Math.PI / 4,
              cp = Math.PI / 4,
              Op = cp - ip,
              op = (1 + Math.sqrt(5)) / 2,
              Ip = 2 * Math.PI / (op * op);
            let Sp = pp + Ip;
            for (; Sp > cp;) Sp -= Op;
            for (; Sp < ip;) Sp += Op;
            const xp = Math.PI / 6;
            if (Math.abs(Sp - pp) < xp) {
              Sp = pp + (Math.sign(Sp - pp) || 1) * xp, Sp > cp && (Sp = pp - xp), Sp < ip && (Sp = pp + xp)
            }
            return Sp
          }(Op.current);
          Op.current = Sp, cp.current = Date.now(), xp(pp, ip, Sp, op)
        };
        if (!Sp.current) {
          const pp = () => {
            Ip.current.length > 0 && Yp(), 0 === Ip.current.length && (clearInterval(Sp.current), Sp.current = null)
          };
          Sp.current = setInterval(pp, 200), cp.current + 200 < Date.now() && pp()
        }
        for (; Ip.current.length > 4;) Yp()
      })), (0, Lp.f)("forceFlyingMiddleMessage", (pp => {
        let {
          content: ip,
          iS: cp,
          angle: Op,
          cS: op
        } = pp;
        xp(ip, cp, Op, op)
      })), (0, op.useEffect)((() => () => {
        clearInterval(Sp.current), Sp.current = null;
        for (const ip of pp.current) clearTimeout(ip.removeTimeout)
      }), []), (0, Dp.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: pp.current.map((pp => {
          const {
            id: ip,
            content: cp,
            iS: Op,
            cS: op,
            angle: Ip
          } = pp;
          return pp.pos || (pp.pos = function(pp, ip) {
            const cp = 50 / (pp ** .7 * .35);
            return {
              x: cp * Math.sin(ip),
              y: -cp * Math.cos(ip)
            }
          }(Op, Ip)), (0, Dp.jsx)(Nc, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: op,
            enterActiveStyle: {
              transform: `translate(${pp.pos.x}vw, ${pp.pos.y}vh)`,
              transition: `transform ${op}ms ease-out`
            },
            children: (0, Dp.jsx)("div", {
              children: (0, Dp.jsx)(Yp.e, {
                text: cp
              })
            })
          }, ip)
        }))
      })
    }));

    function Nc(pp) {
      let {
        children: ip,
        className: cp,
        classNames: Op,
        timeout: Ip,
        enterActiveStyle: Sp
      } = pp;
      const [xp, Lp] = (0, op.useState)(!1), [Yp, Ap] = (0, op.useState)(!1), Pp = (0, op.useRef)(null);
      return (0, op.useEffect)((() => {
        Lp(!0)
      }), []), (0, Dp.jsx)(lc.d, {
        className: cp,
        classNames: Op || cp,
        in: xp,
        timeout: Ip,
        nodeRef: Pp,
        onEntering: () => {
          Ap(!0)
        },
        children: (0, op.cloneElement)(ip, {
          ref: Pp,
          style: Yp && Sp || void 0
        })
      })
    }
    var Tc = cp(36791);

    function fc() {
      const pp = (0, mp.g)("health");
      return (0, Dp.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Dp.jsx)(Tc.d, {
          placement: "statBars"
        }), (0, Dp.jsx)(bc, {
          actualValue: pp.shield,
          maxValue: pp.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Dp.jsx)(bc, {
          actualValue: pp.health,
          maxValue: pp.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function bc(pp) {
      let {
        actualValue: ip,
        maxValue: cp,
        hideAtValue: Op,
        icon: op,
        className: Ip
      } = pp;
      return (0, tp.e)(), null === ip || null === cp || ip === Op || cp === Op ? null : (0, Dp.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Dp.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Dp.jsx)("div", {
            className: `BottomScreenStatBar ${Ip}`,
            style: {
              transform: `scaleX(${Math.max(ip/cp,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Dp.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Dp.jsx)(fp.d, {
              name: op
            }), ` ${Math.ceil(ip)}/${cp}`]
          })]
        })
      })
    }
    var hc = cp(34430),
      ac = cp(4621),
      nc = cp(1356),
      Fc = cp(2829),
      gc = cp(1480),
      Gc = cp(1334),
      rc = cp(3528),
      Zc = cp(3071),
      zc = cp(2169),
      sc = cp(768),
      Kc = cp(3581),
      Vc = cp(131),
      pO = cp(1705),
      iO = cp(34346);

    function cO(pp) {
      let {
        showing: ip,
        enabled: cp,
        autoRespawn: Op
      } = pp;
      const {
        t: Ip
      } = (0, Xp.H)(), Sp = (0, Mp.r)(), {
        mobilePushNotificationsCanAsk: xp
      } = (0, Rp.o)(["mobilePushNotificationsCanAsk"]), [Lp, Yp] = (0, op.useState)(null), [Ap, Pp] = (0, op.useState)(!1), [Wp, yp] = (0, op.useState)(null);
      ip && null === Wp ? yp(Sp) : ip || null === Wp || yp(null);
      const Up = ip && null !== Lp && !1 === Wp;
      if ((0, op.useEffect)((() => {
          if (ip) return;
          Yp(null), Pp(!1);
          let pp = !0;
          return (0, iO.c)().then((ip => {
            pp && Yp((() => ip))
          }), (pp => {
            console.error("Failed to tell whether to offer push notifications:", pp)
          })), () => {
            pp = !1
          }
        }), [ip, xp]), (0, op.useEffect)((() => {
          Up && !Op && (0, iO.i)()
        }), [Up, Op]), !Up) return null;
      const wp = () => {
          (0, iO.i)(), Pp(!0)
        },
        vp = pO.b.supports("notifications") ? "app" : "browser";
      return (0, Dp.jsxs)("div", {
        className: "RespawnNotificationOptIn",
        style: Ap ? {
          visibility: "hidden"
        } : void 0,
        children: [(0, Dp.jsxs)("div", {
          className: "RespawnPanelSectionTitle",
          children: [(0, Dp.jsx)(fp.d, {
            name: "bell"
          }), Ip("mobilePushNotifications:optInTitle")]
        }), (0, Dp.jsxs)("div", {
          className: "RespawnNotificationOptInButtons",
          children: [(0, Dp.jsx)(gc.f, {
            onClick: () => {
              wp(), Lp().catch((pp => {
                console.error("Failed to ask for push notifications:", pp)
              }))
            },
            disabled: !cp || Ap,
            analyticsClick: {
              id: "push.allow",
              value: vp
            },
            touchPressOn: "pointerup",
            children: Ip("mobilePushNotifications:optInConfirm")
          }), (0, Dp.jsx)(gc.j, {
            onClick: wp,
            disabled: !cp || Ap,
            analyticsClick: {
              id: "push.deny",
              value: vp
            },
            touchPressOn: "pointerup",
            children: Ip("mobilePushNotifications:optInCancel")
          })]
        })]
      })
    }
    var OO = cp(337);

    function oO(pp, ip) {
      let {
        shownName: cp,
        lifeformType: Op
      } = pp;
      return null !== cp ? cp : null !== Op ? ip(`lifeform:${(0,OO.qe)(Op)}`) : null
    }
    var IO = cp(3537),
      SO = cp(3544);
    const xO = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      LO = (0, op.memo)((function() {
        var pp, ip;
        const cp = (0, tp.b)(),
          Op = (0, yp.useNavigatePreserveSearch)(),
          {
            t: Ip
          } = (0, Xp.H)(),
          {
            loadingOverlayVisible: xp
          } = (0, Rp.o)(["loadingOverlayVisible"]),
          Yp = (0, Mp.r)(),
          [Ap, Pp] = (0, op.useState)(!1),
          [Up, wp] = (0, op.useState)(!0),
          [vp, Hp] = (0, op.useState)(null),
          ep = (0, Qc.c)(),
          kp = (0, dp.i)("respawnButtonText"),
          qp = (0, dp.i)("usePlayAgainButton"),
          Cp = (0, dp.i)("useRespawnButton"),
          {
            gameNameWithVariation: Ep
          } = (0, mp.g)("connectedGame"),
          lp = (0, op.useRef)(jp.c.get("secsToRespawn")),
          Qp = (0, op.useRef)(Wp.gameBridge.latest("localPlayerAlive")),
          Jp = (0, op.useRef)(jp.c.get("secsToRespawn")),
          Bp = (0, op.useRef)(jp.c.get("autoRespawn")),
          Np = (0, op.useRef)(null),
          Tp = (0, op.useRef)(0),
          bp = (0, op.useRef)(0),
          [hp, ap] = (0, op.useState)(!1),
          Fp = (0, op.useRef)(null),
          gp = (0, op.useRef)(null),
          Gp = (0, op.useRef)(null);
        (0, dp.e)("secsToRespawn", (pp => {
          console.log("Received new secsToRespawn with", pp, "and current canRespawn value of ", Bp.current), Jp.current = pp, sp()
        })), (0, dp.e)("autoRespawn", (pp => {
          console.log("Received autorespawn", pp, "current canRespawn value of ", lp.current), Bp.current = pp, sp()
        }));
        const rp = pp => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", pp), pp || Tp.current++, Qp.current = pp, sp()
        };
        (0, mp.b)("localPlayerAliveSet", rp), (0, Lp.f)(Zc.n, (pp => {
          "connected" === pp && !Qp.current && Bp.current && lp.current <= 0 && (bp.current = 0, Kp())
        })), (0, op.useEffect)((() => {
          const pp = Wp.gameBridge.latest("localPlayerAlive");
          pp === Qp.current ? (console.log("Updating respawn component from initial mount"), sp()) : rp(pp)
        }), []), (0, op.useEffect)((() => {
          if (Ap) {
            ap(!1);
            const pp = setTimeout((() => {
              ap(!0)
            }), 600);
            return () => {
              clearTimeout(pp)
            }
          }
          return () => {}
        }), [Ap]);
        (0, mp.b)("kill", (pp => {
          let {
            killer: ip,
            victim: cp,
            withItem: Op
          } = pp;
          if (!cp.local) return;
          const op = ((pp, ip) => {
            if (pp.local) {
              const pp = xO[ip];
              return pp ? Ip(pp) : null
            }
            const cp = oO(pp, Ip);
            return cp ? Ip("respawnPage:killedBy", {
              name: cp
            }) : null
          })(ip, Op);
          op && Hp({
            text: op,
            deathCount: Qp.current ? Tp.current + 1 : Tp.current
          })
        }));
        const Zp = () => {
            Ap && Bp.current && Qp.current && hp && Pp(!1)
          },
          zp = Ap && Bp.current && Qp.current && hp && !xp;
        (0, Lp.f)("usedKeyboard", (() => {
          Zp()
        })), (0, SO.d)("respawn", zp, Zp);
        const sp = () => {
            wp(Jp.current >= 3 || !Bp.current), Qp.current ? (clearInterval(Np.current), Np.current = null, Bp.current ? ep() : Pp(!1)) : (Pp(!0), lp.current = Jp.current, ep(), console.log("Running respawn stats updated", Bp.current, lp.current), Bp.current && lp.current <= 0 && Kp(), clearInterval(Np.current), lp.current > 0 && (Np.current = setInterval((() => {
              lp.current = Math.max(lp.current - 1, 0), ep(), lp.current <= 0 && (clearInterval(Np.current), Np.current = null, jp.c.get("autoRespawn") && Kp())
            }), 1e3)))
          },
          Kp = () => {
            if (Date.now() - bp.current > 1e3) {
              const pp = () => {
                Wp.gameBridge.send("respawn", null), bp.current = Date.now()
              };
              jp.c.get("autoRespawn") ? pp() : (0, Gc.Z)((() => {
                pp()
              }), "video_respawn")
            }
          },
          Vp = (0, op.useMemo)((() => {
            var pp;
            return null === (pp = (0, sc.i)(Ep)) || void 0 === pp ? void 0 : pp.otherGameLinksOnRespawnPage
          }), [Ep]),
          ii = 0 === lp.current,
          ci = (null === vp || void 0 === vp ? void 0 : vp.deathCount) === Tp.current ? vp.text : null,
          Oi = Ap && Up && !xp,
          oi = Yp && zp && null !== (pp = null === (ip = (0, np.f)()) || void 0 === ip ? void 0 : ip.getBoundButton("menuConfirm")) && void 0 !== pp ? pp : null,
          Ii = pp => ii ? pp : Ip("respawnPage:actionInSeconds", {
            action: pp,
            seconds: lp.current
          });
        return (0, Dp.jsx)(hc.b, {
          showing: Ap,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Dp.jsx)(rc.b, {
            show: Ap,
            "data-holds-camera-keeper": "",
            children: (0, Dp.jsxs)(ac.c, {
              close: () => {
                Pp(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: Bp.current || xp ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Vc.is99NightsCrazyGamesBundle)() && (0, Dp.jsx)(gc.d, {
                onClick: zc.h,
                children: Ip("homePage:backToGames")
              }), (0, Dp.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Zp,
                children: [(0, Dp.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Dp.jsx)("div", {
                    ref: gp,
                    className: "RespawnSideSquareBannerDiv",
                    children: cp[0] > 925 && (0, Dp.jsx)(Fc.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: gp
                      },
                      showing: Oi,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Dp.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Dp.jsxs)("div", {
                      className: Sp()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: Yp
                      }),
                      children: [Bp.current && (0, Dp.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Dp.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Dp.jsx)(fp.d, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Ip("respawnPage:youDied")]
                        }), (0, Dp.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === oi && (Qp.current ? Ip("respawnPage:pressAnywhereToContinue") : ii ? Ip("respawnPage:respawning") : Ii(Ip("general:respawn"))), null !== oi && (0, Dp.jsx)(IO.d, {
                            text: Ip("controller:screensPressToContinue", {
                              button: IO.g
                            }),
                            glyph: oi,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), ci && (0, Dp.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: ci
                        })]
                      }), !Bp.current && (0, Dp.jsxs)(Dp.Fragment, {
                        children: [(0, Dp.jsxs)("div", {
                          className: Sp()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Vp
                          }),
                          children: [qp && (0, Dp.jsx)(gc.o, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, Gc.Z)((() => {
                                (0, Rp.k)("inGameReplay");
                                const pp = (0, nc.c)(Ep);
                                Op(pp)
                              }), "video_start")
                            },
                            disabled: !ii || !hp,
                            touchPressOn: "pointerup",
                            children: Ii(Ip("respawnPage:playAgain"))
                          }), Cp && (0, Dp.jsx)(gc.f, {
                            className: "RespawnPageButton",
                            onClick: Kp,
                            padDefaultFocus: !qp,
                            padBack: "sessionBasedGame:stayInLobby" === kp,
                            disabled: !ii || !hp,
                            touchPressOn: "pointerup",
                            children: Ii(Ip(kp))
                          }), !(0, Vc.is99NightsCrazyGamesBundle)() && (0, Dp.jsx)(gc.K, {
                            className: "RespawnPageButton",
                            onClick: zc.h,
                            disabled: !ii || !hp,
                            touchPressOn: "pointerup",
                            children: Ii(Ip("respawnPage:exitGame"))
                          })]
                        }), Vp && (0, Dp.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Dp.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: Ip("respawnPage:orTry")
                          }), (0, Dp.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Vp.map((pp => (0, Dp.jsx)(Kc.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: pp
                              },
                              disabled: !ii || !hp,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, Rp.k)("inGameReplay");
                                const ip = (0, nc.c)(pp);
                                Op(ip)
                              }
                            }, pp)))
                          })]
                        })]
                      }), (0, Dp.jsx)(cO, {
                        showing: Ap,
                        enabled: hp,
                        autoRespawn: Bp.current
                      })]
                    })
                  }), (0, Dp.jsx)("div", {
                    ref: Gp,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Dp.jsx)("div", {
                  ref: Fp,
                  className: "RespawnBottom",
                  children: (0, Dp.jsx)(Fc.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Fp
                    },
                    showing: Oi,
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
    var YO = cp(36812);
    const DO = [{
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
      AO = [{
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
      PO = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      WO = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      yO = (0, op.memo)((function() {
        const pp = (0, op.useRef)(null),
          ip = (0, op.useRef)(null);

        function cp(cp) {
          var Op;
          let {
            cc: op,
            screenPos: Ip
          } = cp;
          const Sp = pp.current;
          null === (Op = ip.current) || void 0 === Op || Op.cancel(), Sp.classList.remove("HitmarkerCrit"), Ip ? (Sp.style.left = `${Ip.x}%`, Sp.style.top = `${Ip.y}%`) : (Sp.style.left = "50%", Sp.style.top = "50%"), Sp.style.rotate = 16 * (Math.random() - .5) + "deg", op && Sp.classList.add("HitmarkerCrit");
          const xp = Sp.animate(op ? AO : DO, op ? WO : PO);
          ip.current = xp, xp.onfinish = () => {
            Sp.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Lp.f)("localGunHitmarker", (pp => {
          let {
            cc: ip
          } = pp;
          cp({
            cc: ip
          })
        })), (0, Lp.f)("yourAttackHit", (pp => {
          let {
            cc: ip,
            screenPos: Op
          } = pp;
          cp({
            cc: ip,
            screenPos: Rp.c.get("isTouchScreen") ? Op : void 0
          })
        })), (0, Lp.f)("sendHitmarker", (pp => {
          let {
            cc: ip,
            screenPos: Op
          } = pp;
          cp({
            cc: ip,
            screenPos: Op
          })
        })), (0, Dp.jsxs)("div", {
          ref: pp,
          className: "Hitmarker",
          children: [(0, Dp.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Dp.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Dp.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Dp.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function UO() {
      const pp = (0, op.useRef)(!0);
      return (0, Lp.f)("localBlockMined", (() => {
        xi.f.play("blockMined")
      })), (0, Lp.f)("yourAttackHit", (() => {
        xi.f.play("hitLanded")
      })), (0, Lp.f)("localGunHitmarker", (() => {
        xi.f.play("hitLanded")
      })), (0, Lp.f)("damagedByOtherPlayer", (() => {
        xi.f.play("damageTaken")
      })), (0, mp.b)("localPlayerAliveSet", (ip => {
        !ip && pp.current && xi.f.play("death"), pp.current = ip
      })), null
    }
    var wO = cp(1941),
      vO = cp(36832),
      tO = cp.n(vO),
      HO = cp(2063),
      dO = cp(2054),
      eO = cp(3400),
      uO = cp(34448);
    const jO = OO.be ? 7e7 : 7e3,
      kO = tO()("#ffffff").alpha(.5).string();

    function mO(pp) {
      const ip = (0, eO.c)(pp);
      return void 0 !== ip && "Gun" === (0, uO.itemTypeOf)(ip)
    }

    function RO(pp) {
      if (!pp) return console.error(`Killfeed colour was ${pp}`), kO;
      try {
        return tO()(pp).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${pp} is not a colour`), kO
      }
    }
    const qO = (0, op.memo)((function() {
      const {
        t: pp
      } = (0, Xp.H)(), ip = (0, op.useRef)([]), cp = (0, Qc.c)();
      return (0, mp.b)("kill", (function(Op) {
        var op, Ip;
        let {
          killer: Sp,
          victim: xp,
          withItem: Lp,
          killstreak: Yp
        } = Op;
        const Dp = ip.current;
        if (Dp.length >= 3) {
          const pp = Dp.shift();
          clearTimeout(pp.timeout)
        }
        const Ap = Wp.gameBridge.latest("hiddenPlayerNames"),
          Pp = {
            deadName: oO(xp, pp),
            killerName: oO(Sp, pp),
            isFriend: {
              killer: (0, HO.g)(Sp.realName, Ap),
              dead: (0, HO.g)(xp.realName, Ap)
            },
            withItem: Lp,
            wasHeadshot: !1,
            killstreak: Yp,
            timeout: setTimeout((() => {
              Dp.shift(), cp()
            }), jO),
            reactId: `${null!==(op=Sp.id)&&void 0!==op?op:Sp.shownName}|${null!==(Ip=xp.id)&&void 0!==Ip?Ip:xp.shownName}|${Date.now()}`,
            killerBackground: RO(Sp.colour),
            deadBackground: RO(xp.colour)
          };
        Dp.push(Pp), cp()
      })), (0, op.useEffect)((() => {
        const pp = ip.current;
        return () => {
          for (; pp.length > 0;) {
            const {
              timeout: ip
            } = pp.pop();
            clearTimeout(ip)
          }
        }
      }), []), (0, Dp.jsx)("div", {
        className: "Killfeed",
        children: ip.current.map((pp => {
          let {
            deadName: ip,
            killerName: cp,
            withItem: Op,
            wasHeadshot: op,
            killstreak: Ip,
            killerBackground: Sp,
            deadBackground: xp,
            reactId: Lp,
            isFriend: Yp
          } = pp;
          return (0, Dp.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Sp} calc(100% - 10rem), ${xp} 100%)`
            },
            children: [Ip >= 2 ? (0, Dp.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, OO.V)(Ip)
            }) : null, (0, Dp.jsx)("div", {
              className: "KillfeedKillerName",
              children: cp
            }), Yp.killer && (0, Dp.jsx)(dO.d, {}), (0, Dp.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: mO(Op) ? "7.5vmin" : "5vmin"
              },
              children: (0, Dp.jsx)(wO.d, {
                itemName: Op,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), op ? (0, Dp.jsx)(fp.d, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Dp.jsx)("div", {
              className: "KillfeedDeadName",
              children: ip
            }), Yp.dead && (0, Dp.jsx)(dO.d, {})]
          }, Lp)
        }))
      })
    }));
    var MO = cp(36869),
      CO = cp(1151),
      EO = cp.n(CO),
      XO = cp(3511),
      lO = cp(36872),
      QO = cp(1317);
    const JO = {},
      BO = (0, op.memo)((function() {
        const pp = (0, op.useRef)({}),
          [, ip] = (0, op.useReducer)((pp => pp + 1), 0);
        (0, Lp.f)("setDirectionArrow", (cp => {
          let {
            id: Op,
            position: op,
            style: Ip,
            text: Sp,
            ri: xp
          } = cp;
          const Lp = pp.current,
            Yp = Ip || JO,
            Dp = Sp,
            Ap = Lp[Op];
          if (!Ap) return Lp[Op] = {
            position: op,
            style: Yp,
            text: Dp,
            shouldShowDistance: xp,
            oN: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void ip();
          const Pp = !EO()(Ap.style, Yp) || !EO()(Ap.text, Dp) || Ap.shouldShowDistance !== xp;
          Ap.position = op, Ap.style = Yp, Ap.text = Dp, Ap.shouldShowDistance = xp, Pp && ip()
        })), (0, Lp.f)("clearDirectionArrow", (cp => {
          let {
            id: Op
          } = cp;
          const op = pp.current;
          if (null === Op)
            for (const pp in op) delete op[pp];
          else delete op[Op];
          ip()
        })), (0, op.useEffect)((() => {
          const ip = pp.current,
            cp = (0, QO.u)((() => {
              ! function(pp) {
                const ip = Wp.gameBridge.lookup("localPos", null),
                  cp = XO.d - NO,
                  Op = (0, XO.k)() - NO;
                for (const op in pp) {
                  const Ip = pp[op];
                  if (!Ip.oN) continue;
                  const Sp = Wp.gameBridge.lookup("screenPos", Ip.position),
                    xp = Sp.x - 50,
                    Lp = Sp.y - 50;
                  Sp.x === Ip.lastScreenX && Sp.y === Ip.lastScreenY || (Ip.lastScreenX = Sp.x, Ip.lastScreenY = Sp.y, Ip.oN.style.translate = `${Sp.x}vw ${Sp.y}vh`, Ip.chevronElement && (Ip.chevronElement.style.rotate = `${OO.d.fastATan2(Lp,xp)}rad`));
                  const Yp = Math.abs(xp) < cp && Math.abs(Lp) < Op;
                  if (Yp !== Ip.onScreen && (Ip.onScreen = Yp, Ip.oN.classList.toggle("DirectionArrowOnScreen", Yp)), Ip.shouldShowDistance && Ip.distanceElement) {
                    const pp = Ip.position[0] - ip[0],
                      cp = Ip.position[1] - ip[1],
                      Op = Ip.position[2] - ip[2],
                      op = Math.round(Math.sqrt(pp * pp + cp * cp + Op * Op));
                    (-1 === Ip.lastRenderedDist || (0, lO.c)(op, Ip.lastRenderedDist, Ip.lastDistUpdateTime)) && (Ip.distanceElement.textContent = `${op}m`, Ip.lastRenderedDist = op, Ip.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(ip)
            }));
          return () => {
            cp();
            for (const pp in ip) delete ip[pp]
          }
        }), []);
        const cp = pp.current;
        return (0, Dp.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(cp).map((pp => {
            var ip;
            let [Op, op] = pp;
            const Ip = null !== (ip = (0, Hp.fc)(op.style)) && void 0 !== ip ? ip : "#ffffff";
            return (0, Dp.jsxs)("div", {
              ref: pp => {
                cp[Op] && (cp[Op].oN = pp)
              },
              className: "DirectionArrow",
              style: {
                fontSize: op.style.fontSize,
                opacity: op.style.opacity
              },
              children: [(0, Dp.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: pp => {
                  cp[Op] && (cp[Op].chevronElement = pp)
                },
                children: [(0, Dp.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Dp.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Dp.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Dp.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Dp.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Ip
                    }
                  }), (0, Dp.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Ip
                    }
                  })]
                })]
              }), (0, Dp.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Ip,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Ip}`
                }
              }), op.text && (0, Dp.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Ip,
                  fontWeight: op.style.fontWeight,
                  fontStyle: op.style.fontStyle
                },
                children: (0, Dp.jsx)(Yp.e, {
                  text: op.text
                })
              }), op.shouldShowDistance && (0, Dp.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: pp => {
                  cp[Op] && (cp[Op].distanceElement = pp)
                },
                style: {
                  color: Ip,
                  fontWeight: op.style.fontWeight,
                  fontStyle: op.style.fontStyle
                }
              })]
            }, Op)
          }))
        })
      })),
      NO = .5;
    const TO = (0, op.memo)((function(pp) {
        let {
          isTouchScreen: ip
        } = pp;
        return (0, Dp.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Dp.jsx)(aO, {}), ip && (0, Dp.jsx)(tc, {})]
        })
      })),
      fO = {
        readyForNext: 0,
        running: 1
      },
      bO = 50;

    function hO(pp) {
      console.assert(pp.state.current === fO.readyForNext);
      const ip = pp.queue.current,
        cp = pp.foreground.current;
      if (ip.length > 0 && cp) {
        const {
          toFraction: Op,
          toDuration: op
        } = ip.shift();
        pp.state.current = fO.running, cp.style.transition = `transform ${Math.max(op-bO,0)}ms linear`, cp.classList.remove("Complete"), pp.timeout.current = setTimeout((() => {
          cp.style.transform = `scaleX(${Op})`, pp.timeout.current = setTimeout((() => {
            1 === Op && cp.classList.add("Complete"), pp.state.current = fO.readyForNext, hO(pp)
          }), Math.max(op - bO, 0))
        }), bO)
      }
    }

    function aO() {
      const pp = (0, op.useRef)([]),
        ip = (0, op.useRef)(fO.readyForNext),
        cp = (0, op.useRef)(void 0),
        Op = (0, op.useRef)(null),
        Ip = (0, op.useRef)({
          queue: pp,
          state: ip,
          timeout: cp,
          foreground: Op
        }),
        Sp = (0, dp.i)("showProgressBar");
      if ((0, op.useLayoutEffect)((() => (Sp && ip.current === fO.readyForNext && hO(Ip.current), () => {
          ip.current = fO.readyForNext, clearTimeout(cp.current), Sp && (pp.current.length = 0)
        })), [Sp]), (0, Lp.f)("progressBarUpdate", (cp => {
          let {
            toFraction: Op,
            toDuration: op
          } = cp;
          pp.current.push({
            toFraction: Op,
            toDuration: op
          }), ip.current === fO.readyForNext && hO(Ip.current)
        })), !Sp) return null;
      return (0, Dp.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Dp.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Op,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var nO = cp(36879),
      FO = cp(2529);
    const gO = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function GO(pp) {
      let {
        classes: ip,
        gone: cp
      } = pp;
      const Op = document.documentElement;
      Op.classList.remove(...ip);
      for (const op of cp) op.style.display = "block";
      return () => {
        Op.classList.add(...ip);
        for (const pp of cp) pp.style.display = ""
      }
    }

    function rO(pp) {
      const {
        isTouchScreen: ip
      } = (0, Rp.o)(["isTouchScreen"]);
      (0, op.useLayoutEffect)((() => {
        if (!ip) return;
        const cp = pp.current,
          Op = document.querySelector(`.${nO.l}`),
          op = pp => {
            const ip = () => {
              const ip = pp.querySelector(FO.i),
                Op = function(pp) {
                  const ip = document.documentElement;
                  return {
                    classes: vi.A.map(ei.z).filter((pp => ip.classList.contains(pp))),
                    gone: [...pp.querySelectorAll(`.TopRightTrayToggle.${FO.l}`)]
                  }
                }(pp);
              ip && function(pp, ip) {
                (0, FO.D)(pp, ip.classes.length > 0 || ip.gone.length > 0, (() => GO(ip)))
              }(ip, Op);
              const op = `${Math.floor(function(pp,ip,cp){const Op=document.documentElement,op=Op.classList.contains((0,ei.B)("menu")),Ip=Op.style.getPropertyValue((0,ei.I)("menu"));if(!op&&""===Ip)return pp.getBoundingClientRect().left;const Sp=ip?(0,FO.s)(ip):()=>{},xp=GO(cp);Op.classList.remove((0,ei.B)("menu")),Op.style.removeProperty((0,ei.I)("menu"));const Lp=pp.getBoundingClientRect().left;return xp(),Sp(),op&&Op.classList.add((0,ei.B)("menu")),""!==Ip&&Op.style.setProperty((0,ei.I)("menu"),Ip),Lp}(pp,ip,Op)-cp.getBoundingClientRect().left-4)}px`;
              cp.style.getPropertyValue("--InGameHeaderMaxWidth") !== op && cp.style.setProperty("--InGameHeaderMaxWidth", op)
            };
            ip();
            const op = new ResizeObserver(ip);
            op.observe(pp), op.observe(Op), window.addEventListener("resize", ip);
            const Ip = () => gO.map((pp => document.documentElement.style.getPropertyValue(pp))).join();
            let Sp = Ip();
            const xp = new MutationObserver((() => {
              const pp = Ip();
              pp !== Sp && (Sp = pp, ip())
            }));
            xp.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Lp = (0, ep.n)(ei.e, ip),
              Yp = new MutationObserver(ip);
            return Yp.observe(pp, {
              childList: !0,
              subtree: !0
            }), () => {
              op.disconnect(), xp.disconnect(), Yp.disconnect(), Lp(), window.removeEventListener("resize", ip);
              const cp = pp.querySelector(FO.i);
              cp && (0, FO.s)(cp)
            }
          },
          Ip = () => Op.querySelector(".TopRightIconsContainer"),
          Sp = Ip();
        let xp;
        if (Sp) xp = op(Sp);
        else {
          const pp = new MutationObserver((() => {
            const ip = Ip();
            ip && (pp.disconnect(), xp = op(ip))
          }));
          pp.observe(Op, {
            childList: !0,
            subtree: !0
          }), xp = () => {
            pp.disconnect()
          }
        }
        return () => {
          xp(), cp.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [ip, pp])
    }
    var ZO = cp(3772),
      zO = cp(3770),
      sO = cp(1650),
      KO = cp(1520),
      VO = cp(1656),
      po = cp(1765),
      io = cp(1880),
      co = cp(1149),
      Oo = cp(4374),
      oo = cp(1380);
    const Io = 2e4,
      So = 6e5,
      xo = new Set;

    function Lo() {
      const {
        gameEntrySource: pp,
        loadingOverlayVisible: ip
      } = (0, Rp.o)(["gameEntrySource", "loadingOverlayVisible"]), cp = (0, mp.f)("connectedGame", (pp => (0, Oo.j)(pp) ? pp.lobbyName : null)), Op = (0, mp.g)("localPlayerAlive"), Ip = (0, mp.f)("players", (pp => null !== pp.localId && void 0 !== pp.byId[pp.localId])), [Sp, xp] = (0, op.useState)(null);
      return !ip && Op && Ip && null !== cp && Sp !== cp && xp(cp), (0, op.useEffect)((() => {
        if (!(0, Oo.m)(pp) || null === Sp || Sp !== cp || xo.has(Sp)) return;
        const ip = setTimeout((() => {
          xo.add(Sp), async function(pp) {
            const ip = await co.userContextManager.getCurrentUserContext();
            let cp;
            try {
              cp = (await KO.b.getWorldOwnerFriendOffer(ip)).owner
            } catch (op) {
              return void console.warn("Couldn't ask who owns this world", op)
            }
            if (!cp || (0, Oo.r)(cp.name, Date.now())) return;
            const Op = cp;
            ! function(pp, ip) {
              const cp = Date.now() + So;
              let Op = Date.now(),
                op = 0;
              const Ip = () => {
                const Sp = Date.now(),
                  xp = Wp.gameBridge.latest("connectedGame");
                xp.lobbyName !== pp || Sp > cp || (null === xp.websocketUrl ? Op = 1 / 0 : Op === 1 / 0 && !Rp.c.get("loadingOverlayVisible") && Wp.gameBridge.latest("localPlayerAlive") && (Op = Sp + Io), op = Sp < Op || !Wp.gameBridge.latest("localPlayerAlive") || Rp.c.get("isUiHidden") || Rp.c.get("isUiHiddenByCamera") || (0, po.isTypingInInput)() || Rp.c.get("loadingOverlayVisible") || (0, sO.l)() || (0, ZO.f)() || (0, oo.l)() ? 0 : op + 1, op >= 2 ? ip() : setTimeout(Ip, 500))
              };
              Ip()
            }(pp, (() => {
              (0, Oo.g)(VO.d.getSocialState().friends, Op.name) || ((0, Oo.q)(Op.name, Date.now()), io.i.showWorldOwnerOffer(Op), (0, xc.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Sp).catch((pp => {
            console.error("Failed to offer the world's owner as a friend", pp)
          }))
        }), Io);
        return () => {
          clearTimeout(ip)
        }
      }), [pp, Sp, cp]), null
    }
    var Yo = cp(1931);
    const Do = (0, op.memo)((function(pp) {
        let {
          durationMs: ip,
          endsAtMs: cp
        } = pp;
        const [, Op] = (0, op.useReducer)((pp => pp + 1), 0), Ip = null === cp ? ip : Math.max(cp - Date.now(), 0);
        return (0, op.useEffect)((() => {
          if (null === cp || Ip <= 0) return;
          const pp = setTimeout(Op, Ip - 1e3 * (Math.ceil(Ip / 1e3) - 1));
          return () => {
            clearTimeout(pp)
          }
        })), (0, Dp.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, OO.gb)(Ip)
        })
      })),
      Ao = (0, op.memo)((function() {
        const pp = (0, mp.g)("localEffects");
        return (0, Dp.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(pp).map((pp => {
            let [ip, {
              icon: cp,
              displayName: Op,
              durationMs: op,
              endsAtMs: Ip,
              level: Sp
            }] = pp;
            return (0, Dp.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Dp.jsx)(Yo.d, {
                icon: cp,
                className: "EffectInfoIcon"
              }), (0, Dp.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== op ? "0" : "1rem"
                },
                children: [(0, Dp.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Dp.jsx)(Yp.e, {
                    text: null !== Op && void 0 !== Op ? Op : ip,
                    className: "EffectInfoName SmallTextBold"
                  }), Sp > 1 && (0, Dp.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, OO.V)(Sp)
                  })]
                }), null !== op && (0, Dp.jsx)(Do, {
                  durationMs: op,
                  endsAtMs: Ip
                })]
              })]
            }, ip)
          }))
        })
      }));
    var Po = cp(36881),
      Wo = cp(37108),
      yo = cp(195),
      Uo = cp(2847),
      wo = cp(3023);

    function vo(pp, ip) {
      (0, op.useLayoutEffect)((() => {
        let ip, cp;
        const Op = requestAnimationFrame((() => {
          cp = setTimeout((() => {
            cp = void 0;
            const Op = pp();
            ip = "function" === typeof Op ? Op : void 0
          }), 0)
        }));
        return () => {
          var pp;
          cancelAnimationFrame(Op), clearTimeout(cp), null === (pp = ip) || void 0 === pp || pp()
        }
      }), ip)
    }
    const to = [5, 5, 5],
      Ho = [7, 4, 4, 4];

    function eo(pp) {
      return pp.reduce(((pp, ip) => pp + ip), 0)
    }

    function uo(pp, ip, cp, Op, op) {
      const Ip = pp.getContext("2d");
      if (!Ip) return null;
      const Sp = ip.color,
        xp = `${ip.fontWeight} ${op}px ${ip.fontFamily}`,
        Lp = () => {
          pp.width = cp, pp.height = Op, Ip.fillStyle = Sp, Ip.textAlign = "center", Ip.textBaseline = "middle", Ip.font = xp
        };
      return Lp(), {
        ctx: Ip,
        reset: Lp
      }
    }
    const jo = (0, op.memo)((function(pp) {
      let {
        show: ip
      } = pp;
      const cp = (0, op.useRef)(null),
        Op = (0, op.useRef)(null),
        Ip = (0, op.useRef)(null),
        Sp = (0, Up.n)();
      return (0, op.useEffect)((() => Sp.whenShown((() => {
        let pp = 0,
          ip = 0,
          cp = performance.now(),
          op = 0;
        const Sp = (0, QO.u)((() => {
          var Sp, xp, Lp;
          pp++, ip++;
          const Yp = performance.now();
          if (Yp - cp < 1e3) return;
          const Dp = Math.round(pp / (Yp - cp) * 1e3);
          if (Op.current = Dp, null === (Sp = Ip.current) || void 0 === Sp || Sp.call(Ip, Dp), pp = 0, cp = Yp, Dp >= 55) return void(op = 0);
          if (op += 1, op < 15) return;
          const Ap = null !== (xp = kp.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== xp ? xp : 0,
            [Pp, yp] = jp.c.get("minChunkAddDist");
          if (function(pp, ip) {
              const cp = Wp.gameBridge.lookup("Xu", null);
              return null !== cp && (cp.horizontal > pp || cp.vertical > ip)
            }(Pp, yp) && (null !== (Lp = kp.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Lp ? Lp : 0) + 432e5 < Date.now() && Ap < 3) {
            kp.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            Yc.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((pp => {
              "notificationTornDown" !== pp && (pp ? (Wp.gameBridge.send("setChunkAddDistance", {
                horizontal: Pp,
                vertical: yp
              }), kp.h.setItem("chunkHorizAddDist", Pp), kp.h.setItem("chunkVertAddDist", yp), ep.m.GA("updatedChunkLoadDist"), kp.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : kp.h.setItem("decreaseLoadDistPromptDeniedCount", Ap + 1))
            }))
          }
        }));
        let xp = performance.now();
        ip = 0;
        let Lp = null,
          Yp = !document.hidden,
          Dp = !1;

        function Ap() {
          const pp = performance.now() - xp,
            cp = 1e3 * ip / pp;
          Yp && !Dp && (null === Lp && (Lp = cp), Uo.c.setFps(cp, Lp)), ip = 0, xp = performance.now()
        }
        let Pp = setInterval(Ap, wo.b);

        function yp() {
          ip = 0, xp = performance.now(), clearInterval(Pp), Pp = setInterval(Ap, wo.b)
        }

        function Up() {
          const pp = Yp;
          Yp = !document.hidden, !pp && Yp && yp()
        }
        document.addEventListener("visibilitychange", Up);
        const wp = (0, ep.n)(Zc.n, (pp => {
          const ip = Dp;
          Dp = (0, Zc.q)(pp), ip && !Dp && yp()
        }));
        return () => {
          Sp(), document.removeEventListener("visibilitychange", Up), wp(), clearInterval(Pp)
        }
      }))), [Sp]), vo((() => {
        var pp;
        if (!ip || Ip.current) return;
        const op = cp.current,
          Sp = window.getComputedStyle(op.parentElement),
          xp = null !== (pp = window.devicePixelRatio) && void 0 !== pp ? pp : 1,
          Lp = parseFloat(Sp.fontSize) * xp,
          Yp = Math.round(3 * Lp),
          Dp = Math.round(Lp),
          Ap = uo(op, Sp, Yp, Dp, Lp);
        if (!Ap) return;
        const {
          ctx: Pp,
          reset: Wp
        } = Ap, yp = pp => {
          Wp(), Pp.fillText(pp.toString(), op.width / 2, op.height / 2)
        };
        Ip.current = yp, null !== Op.current && yp(Op.current)
      }), [ip]), (0, Dp.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: ip ? "flex" : "none"
        },
        children: [(0, Dp.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Dp.jsx)("canvas", {
          className: "FpsCanvas",
          ref: cp,
          width: 48,
          height: 16
        })]
      })
    }));

    function ko(pp) {
      return Math.sign(pp) * Math.round(100 * Math.abs(pp))
    }

    function mo(pp) {
      let {
        getCoordinates: ip,
        showChunkCoords: cp,
        columns: Op
      } = pp;
      const Ip = (0, op.useRef)(null);
      return vo((() => {
        var pp;
        const op = Ip.current,
          Sp = window.getComputedStyle(op.parentElement),
          xp = null !== (pp = window.devicePixelRatio) && void 0 !== pp ? pp : 1,
          Lp = parseFloat(Sp.fontSize) * xp,
          Yp = Math.round(Lp * eo(Op)),
          Dp = Math.round(Lp),
          Ap = uo(op, Sp, Yp, Dp, Lp);
        if (!Ap) return;
        const {
          ctx: Pp,
          reset: yp
        } = Ap;
        let Up = !0,
          wp = 0,
          vp = 0,
          tp = 0,
          Hp = 0,
          dp = 0,
          ep = 0;
        const jp = () => {
          Up = !0
        };
        document.fonts.load(Pp.font).then(jp, jp);
        const kp = () => {
          yp(), jp()
        };
        op.addEventListener("contextrestored", kp);
        let mp = performance.now();
        const Rp = (0, QO.C)((() => {
          var pp, Ip, Sp, xp, Yp, Dp;
          const Ap = performance.now();
          Ap - mp >= 1e3 && (mp = Ap, yp(), jp());
          const [kp, Rp, qp] = ip(), Mp = ko(kp), Cp = ko(Rp), Ep = ko(qp);
          let Xp = null;
          if (cp) {
            const pp = Wp.gameBridge.lookup("localPos", null);
            Xp = (0, Oi._)(pp[0], pp[1], pp[2])
          }
          const lp = null !== (pp = null === (Ip = Xp) || void 0 === Ip ? void 0 : Ip[0]) && void 0 !== pp ? pp : 0,
            Qp = null !== (Sp = null === (xp = Xp) || void 0 === xp ? void 0 : xp[1]) && void 0 !== Sp ? Sp : 0,
            Jp = null !== (Yp = null === (Dp = Xp) || void 0 === Dp ? void 0 : Dp[2]) && void 0 !== Yp ? Yp : 0;
          if (!Up && Mp === wp && Cp === vp && Ep === tp && lp === Hp && Qp === dp && Jp === ep) return;
          Up = !1, wp = Mp, vp = Cp, tp = Ep, Hp = lp, dp = Qp, ep = Jp;
          const Bp = [(Mp / 100).toFixed(2), (Cp / 100).toFixed(2), (Ep / 100).toFixed(2)];
          Xp && Bp.unshift(`${lp} ${Qp} ${Jp}`), Pp.clearRect(0, 0, op.width, op.height);
          const Np = op.height / 2;
          let Tp = 0;
          for (let ip = 0; ip < Bp.length; ip++) {
            const pp = Lp * Op[ip];
            Pp.fillText(Bp[ip], Tp + pp / 2, Np, pp), Tp += pp
          }
        }));
        return () => {
          Rp(), op.removeEventListener("contextrestored", kp)
        }
      }), [ip, cp, Op]), (0, Dp.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Dp.jsx)("canvas", {
          ref: Ip,
          className: "CoordinateCanvas",
          width: 16 * eo(Op),
          height: 16
        })
      })
    }
    const Ro = (0, op.memo)((function() {
        const pp = (0, op.useCallback)((() => {
          const pp = Wp.gameBridge.lookup("localPos", null);
          return [pp[0], pp[1], pp[2]]
        }), []);
        return (0, Dp.jsx)(mo, {
          getCoordinates: pp,
          showChunkCoords: !1,
          columns: to
        })
      })),
      qo = (0, op.memo)((function() {
        const pp = (0, op.useCallback)((() => {
          const pp = Wp.gameBridge.lookup("localPos", null),
            ip = yo.g.Qy;
          let cp = pp[0] % ip,
            Op = pp[1] % ip,
            op = pp[2] % ip;
          return cp < 0 && (cp += ip), Op < 0 && (Op += ip), op < 0 && (op += ip), [cp, Op, op]
        }), []);
        return (0, Dp.jsx)(mo, {
          getCoordinates: pp,
          showChunkCoords: !0,
          columns: Ho
        })
      }));
    var Mo = cp(2092),
      Co = cp(1361),
      Eo = cp(1014),
      Xo = cp(1234),
      Qo = cp(36942),
      Jo = cp(1482),
      Bo = cp(3246);
    const No = (0, op.memo)((function() {
      const pp = (0, dp.i)("maxAuraLevel");
      return 0 === pp ? null : (0, Dp.jsx)(To, {
        maxLevel: pp
      })
    }));

    function To(pp) {
      let {
        maxLevel: ip
      } = pp;
      const cp = (0, dp.i)("auraPerLevel"),
        [Op, Ip] = (0, op.useState)((() => {
          var pp;
          return null !== (pp = Wp.gameBridge.latest("aura")) && void 0 !== pp ? pp : void 0
        })),
        [Sp, xp] = (0, op.useState)((() => Hp(Op))),
        [Lp, Yp] = (0, op.useReducer)((pp => pp + 1), 0),
        Ap = (0, op.useRef)(null),
        Pp = (0, op.useRef)([]),
        yp = (0, op.useRef)({
          width: 0,
          level: 0
        }),
        Up = (0, op.useRef)(null),
        wp = (0, op.useRef)(null);

      function vp() {
        if (null !== Up.current) return;
        if (0 === Pp.current.length) return;
        const {
          width: pp,
          level: ip
        } = Pp.current.shift();
        let cp;
        if (ip !== yp.current.level && ip > yp.current.level !== pp > yp.current.width) {
          const Op = ip > yp.current.level;
          cp = Op ? pp : 100 - pp, Ap.current.style.transition = "none", Ap.current.style.width = Op ? "0%" : "100%", Ap.current.offsetWidth
        } else cp = Math.abs(pp - yp.current.width);
        const Op = 100 * cp / 20;
        Ap.current.style.transition = `width ${Op}ms linear`, xp(pp), yp.current = {
          width: pp,
          level: ip
        }, Pp.current.length > 0 && (Up.current = setTimeout((() => {
          Up.current = null, vp()
        }), Op))
      }

      function Hp(pp) {
        return Math.floor(pp / cp) === ip ? 100 : pp % cp / cp * 100
      }
      return (0, op.useEffect)((() => () => {
        clearTimeout(Up.current), clearTimeout(wp.current), Up.current = null, wp.current = null
      }), []), (0, mp.b)("aura", (pp => {
        if (wp.current && clearTimeout(wp.current), null === pp) return clearTimeout(Up.current), wp.current = null, Up.current = null, Pp.current = [], yp.current = {
          width: 0,
          level: 0
        }, Ip(void 0), void xp(0);
        wp.current = setTimeout((() => {
          const ip = Math.floor(Op / cp),
            op = Math.floor(pp / cp),
            Sp = Hp(pp);
          pp > Op && Qo.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), op > ip ? (op % 5 === 0 && Qo.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Yp(), Pp.current.push({
            width: 100,
            level: ip
          })) : op < ip && Pp.current.push({
            width: 0,
            level: ip
          }), pp === Op && op === ip || Pp.current.push({
            width: Sp,
            level: op
          }), Ip(pp), vp()
        }), 50)
      })), (0, tp.e)(), (0, Dp.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Dp.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Dp.jsx)(Jo.b, {
            showSignal: Lp,
            particleElement: (0, Dp.jsx)("img", {
              src: (0, Bo.f)("glint"),
              alt: ""
            })
          }), (0, Dp.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Bo.f)("glint"),
            alt: "aura"
          }), (0, Dp.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Op && void 0 !== Op ? Op : 0) / cp)
          })]
        }), (0, Dp.jsx)("div", {
          className: "AuraBar",
          children: (0, Dp.jsx)("div", {
            ref: Ap,
            className: "AuraBarBackground",
            style: {
              width: `${Sp}%`
            }
          })
        })]
      })
    }
    var fo = cp(2655);

    function bo(pp) {
      pp.timed && (pp.endedAnimation = pp.timed.animation, pp.timed = null)
    }
    const ho = (0, op.memo)((function() {
      const pp = (0, op.useRef)(null),
        ip = (0, op.useRef)(null),
        cp = (0, op.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Lp.f)("middleScreenBarInitiate", (pp => {
        var Op;
        let {
          duration: op,
          OI: Ip,
          horizBarRemOffset: Sp
        } = pp;
        const xp = cp.current;
        bo(xp);
        const Lp = ip.current;
        if (!(op >= 0) || !Lp) return;
        null === (Op = xp.endedAnimation) || void 0 === Op || Op.cancel(), xp.endedAnimation = null;
        const Yp = Lp.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: op,
          fill: "forwards"
        });
        xp.timed = {
          OI: Ip,
          horizBarRemOffset: Sp,
          animation: Yp
        }
      })), (0, Lp.f)("middleScreenBarRemove", (() => {
        bo(cp.current)
      })), (0, op.useEffect)((() => {
        const Op = cp.current;
        let op = Number.NaN,
          Ip = Number.NaN,
          Sp = Number.NaN;
        return (0, QO.q)((() => {
          var cp, xp, Lp, Yp;
          const Dp = pp.current,
            Ap = ip.current;
          if (!Dp || !Ap) return;
          null !== (cp = Op.timed) && void 0 !== cp && cp.OI && "finished" === Op.timed.animation.playState && bo(Op), null === (xp = Op.endedAnimation) || void 0 === xp || xp.cancel(), Op.endedAnimation = null;
          let Pp = Op.timed ? 1 : 0;
          if (!Op.timed) {
            const pp = Wp.gameBridge.lookup("momentumFrac", null);
            Pp = pp > 0 ? 1 : 0, pp !== Sp && (Sp = pp, Ap.style.transform = `scaleX(${pp})`)
          }
          const yp = null !== (Lp = null === (Yp = Op.timed) || void 0 === Yp ? void 0 : Yp.horizBarRemOffset) && void 0 !== Lp ? Lp : 0;
          yp === op && Pp === Ip || (op = yp, Ip = Pp, Dp.style.transform = `translateX(calc(-50% + ${yp}rem)) scaleX(${Pp})`)
        }))
      }), []), (0, Dp.jsx)("div", {
        className: "MiddleScreenBar",
        ref: pp,
        children: (0, Dp.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: ip
        })
      })
    }));
    var ao = cp(4770),
      no = cp(2823);

    function Fo() {
      const {
        t: pp
      } = (0, Xp.H)(), ip = (0, Lp.i)("serverUpdating", null), cp = (0, no.c)(250, null !== ip);
      return null === ip || cp - ip > 3e4 ? null : (0, Dp.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Dp.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: pp("updateWaiting:updatingIn", {
            countdown: (0, ao.r)(ip - cp)
          })
        }), (0, Dp.jsx)("div", {
          children: pp("updateWaiting:bringYouBack")
        })]
      })
    }
    var go = cp(37134),
      Go = cp(2012);
    const ro = [{
        translationKey: "general:interact"
      }],
      Zo = (0, op.memo)((function() {
        const pp = (0, dp.i)("crosshairText"),
          {
            interactPrompt: ip,
            blockText: cp,
            neededTool: Op
          } = (0, mp.g)("crosshairTarget"),
          {
            isTouchScreen: Ip
          } = (0, Rp.o)(["isTouchScreen"]),
          Sp = (0, Mp.r)(),
          xp = (0, Ep.d)("alt-fire");
        (0, op.useEffect)((() => {
          Wp.gameBridge.send("setCrosshairInteractPrompt", !Ip || Sp ? "key" : "touch")
        }), [Ip, Sp]);
        const [Ap, Pp] = (0, op.useReducer)((pp => pp + 1), 0);
        (0, Lp.f)("customBindingsChanged", Pp);
        var yp;
        if (null !== ip && (Sp && null !== xp || !Ip && null !== (0, Go.o)("alt-fire"))) return (0, Dp.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Dp.jsx)(qp.d, {
            noaAction: "alt-fire"
          }), (0, Dp.jsx)(Yp.e, {
            text: null !== (yp = ip.label) && void 0 !== yp ? yp : ro
          })]
        });
        let Up = null;
        return null !== cp ? Up = cp : null !== pp && "" !== pp ? Up = pp : null !== Op && (Up = [{
          icon: Op,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Up ? (0, Dp.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Dp.jsx)(Yp.e, {
            text: Up
          })
        }) : null
      }));
    var zo = cp(2657);
    const so = (0, op.memo)((function() {
      var pp;
      const {
        interactPrompt: ip
      } = (0, mp.g)("crosshairTarget"), {
        openInGameMenuName: cp,
        openEverythingMenuName: Op
      } = (0, Rp.o)(["openInGameMenuName", "openEverythingMenuName"]), op = (0, Lp.i)("aimingOverlay", "none"), Ip = (0, zp.m)(), Sp = (0, zo.b)();
      return null === ip || null !== cp || null !== Op || "sniper" === op || Ip || Sp ? null : (0, Dp.jsx)(Ko, {
        label: null !== (pp = ip.label) && void 0 !== pp ? pp : ro
      })
    }));

    function Ko(pp) {
      let {
        label: ip
      } = pp;
      const cp = Ni(Vp.b.Interact, !1);
      return (0, op.useEffect)((() => (ep.m.GA(ei.q), () => {
        ep.m.GA(ei.q)
      })), []), (0, Dp.jsx)("div", {
        ref: cp,
        className: "TouchInteractHit",
        children: (0, Dp.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Dp.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Dp.jsx)(fp.d, {
              name: "hand-back-point-up"
            })
          }), (0, Dp.jsx)(Yp.e, {
            text: ip
          })]
        })
      })
    }
    var Vo = cp(82),
      pI = cp(34332),
      iI = cp(1779),
      cI = cp(34341);
    const OI = "ScreenshotMode";
    let oI = [];
    const II = new Set;

    function SI(pp) {
      oI = pp;
      for (const ip of II) ip(pp)
    }
    const xI = (0, op.memo)((function() {
      const {
        screenshotMode: pp,
        isTouchScreen: ip,
        openEverythingMenuName: cp,
        openInGameMenuName: Op
      } = (0, Rp.o)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), Ip = null !== cp || null !== Op, Sp = (0, mp.g)("localPlayerAlive");
      return (0, op.useEffect)((() => {
        !pp || !Ip && ip && Sp || (0, pI.d)()
      }), [pp, Ip, ip, Sp]), (0, op.useEffect)((() => pI.d), []), (0, op.useEffect)((() => {
        if (pp) return document.documentElement.classList.add(OI), (0, ii.g)(sp.C.ScreenshotMode, sp.C.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(OI), (0, ii.g)(sp.C.ScreenshotMode, 0, "screenshotMode")
        }
      }), [pp]), pp ? (0, Vo.createPortal)((0, Dp.jsx)(LI, {}), document.body) : null
    }));

    function LI() {
      const {
        t: pp
      } = (0, Xp.H)(), [ip, cp] = (0, op.useState)(!1), [Op, Ip] = (0, op.useState)(0), [Sp, xp] = (0, op.useState)(null), Lp = function() {
        const [pp, ip] = (0, op.useState)(oI);
        return (0, op.useEffect)((() => (II.add(ip), ip(oI), () => {
          II.delete(ip)
        })), []), pp
      }(), Yp = (0, op.useRef)(), Ap = (0, op.useRef)(!1);
      (0, op.useEffect)((() => () => {
        clearTimeout(Yp.current)
      }), []);
      const Pp = pp => {
          clearTimeout(Yp.current), xp(pp), pp && (Yp.current = setTimeout((() => {
            xp(null)
          }), 2e3))
        },
        Wp = (ip, cp) => {
          switch (ip) {
            case "saved":
              Pp(pp("screenshotMode:saved"));
              break;
            case "denied":
              Pp(pp("screenshotMode:denied"));
              break;
            case "needsTap":
              oI.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), Pp(pp("screenshotMode:saveWaitingFirst"))) : SI([...oI, cp])
          }
        },
        yp = ip => {
          console.error("Screenshot mode: the photo wasn't saved", ip), Pp(pp("screenshotMode:failed"))
        };
      return (0, Dp.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, Dp.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, Dp.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), Op > 0 && (0, Dp.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, Op), (0, Dp.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": pp("screenshotMode:back"),
          onClick: pI.d,
          children: (0, Dp.jsx)(fp.d, {
            name: "arrow-left"
          })
        }), (0, Dp.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": pp("screenshotMode:takePhoto"),
          "aria-busy": ip,
          onClick: () => {
            (async () => {
              if (!ip) {
                cp(!0), Pp(null);
                try {
                  const pp = await (0, pI.f)();
                  Ip((pp => pp + 1)), Wp(await (0, cI.f)(pp), pp)
                } catch (pp) {
                  yp(pp)
                } finally {
                  cp(!1)
                }
              }
            })()
          },
          children: (0, Dp.jsx)(fp.d, {
            name: "camera-alt"
          })
        }), null !== Sp ? (0, Dp.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: Sp
        }) : Lp.length > 0 && (0, Dp.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (Ap.current) return;
            Ap.current = !0;
            const [pp] = oI;
            SI(oI.slice(1));
            const ip = ip => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", ip), (0, iI.c)(pp, pp.name), Wp("saved", pp)
            };
            (0, cI.j)(pp).then((cp => {
              "needsTap" === cp ? ip(cp) : Wp(cp, pp)
            }), ip).catch(yp).finally((() => {
              Ap.current = !1
            }))
          },
          children: [(0, Dp.jsx)(fp.d, {
            name: "image"
          }), pp("screenshotMode:savePhoto"), Lp.length > 1 && ` (${Lp.length})`]
        })]
      })
    }
    var YI = cp(4876),
      DI = cp(4950);
    const AI = (0, op.forwardRef)((function(pp, ip) {
        let {
          text: cp,
          className: Op,
          children: op
        } = pp;
        return cp.hasText ? (0, Dp.jsx)("div", {
          ref: ip,
          className: Sp()("HudTextPanel", Op, {
            NoBackground: !cp.showBackground
          }),
          children: null !== op && void 0 !== op ? op : (0, Dp.jsx)(Yp.e, {
            text: cp.content
          })
        }) : null
      })),
      PI = (0, op.memo)((function() {
        const pp = (0, dp.m)("middleTextTop"),
          [ip, cp] = (0, op.useState)(null),
          Op = (0, nO.m)(ip);
        return pp.hasText ? (0, Dp.jsx)("div", {
          className: Sp()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Op
          }),
          children: (0, Dp.jsx)(AI, {
            ref: cp,
            className: "MiddleTextTop",
            text: pp
          })
        }) : null
      })),
      WI = (0, op.memo)((function() {
        const pp = (0, dp.b)();
        return (0, Dp.jsx)(Dp.Fragment, {
          children: pp.map(((pp, ip) => (0, Dp.jsx)(AI, {
            className: "HeaderChip",
            text: pp
          }, ip)))
        })
      }));
    var yI = cp(3711),
      UI = cp(4697);
    const wI = (0, op.memo)((function() {
      const {
        t: pp
      } = (0, Xp.H)(), [ip, cp] = (0, op.useState)(!1), Op = (0, op.useRef)(!1), Ip = function(pp) {
        let {
          gameNameWithVariation: ip,
          lobbyName: cp
        } = pp;
        if ((0, Eo.j)(ip)) return vI;
        if ((0, Xo.G)(cp)) return tI;
        return null
      }((0, mp.g)("connectedGame"));
      if (!Ip || ip) return null;
      const Sp = UI.e[Ip.target];
      return (0, Dp.jsx)(Tp.f, {
        tooltipInner: (0, Dp.jsx)("div", {
          children: pp(Sp.reportButtonTooltip)
        }),
        children: (0, Dp.jsx)("div", {
          children: (0, Dp.jsx)(gc.O, {
            onClick: () => {
              Op.current || (Op.current = !0, (0, UI.f)(Ip.reportPolicyIds, Sp).then((pp => {
                null !== pp && void 0 !== pp && pp.selectedPolicyId && (Wp.gameBridge.send("reportLobbyOrGame", {
                  target: Ip.target,
                  Cx: pp.selectedPolicyId,
                  details: pp.Ex
                }), cp(!0))
              })).finally((() => {
                Op.current = !1
              })))
            }
          })
        })
      })
    }));
    const vI = {
        target: "customGame",
        reportPolicyIds: yI.e
      },
      tI = {
        target: "lobby",
        reportPolicyIds: yI.h
      };
    var HI = cp(8900),
      dI = cp(37151),
      eI = cp(37164),
      uI = cp(37169),
      jI = cp(37173),
      kI = cp(37156);
    let mI = !1;
    async function RI(pp, ip) {
      var cp, Op;
      const {
        files: op
      } = ip, Ip = op.replayKey();
      if (null === Ip) return "none";
      if (mI) throw new Error(kI.c.saveBusy.text);
      const Sp = null !== (cp = null === (Op = op.saveRefusal) || void 0 === Op ? void 0 : Op.call(op)) && void 0 !== cp ? cp : null;
      if (null !== Sp) throw new Error(Sp);
      mI = !0;
      try {
        return await async function(pp, ip, cp) {
          const {
            files: Op
          } = ip, op = () => Op.replayKey() === cp, Ip = (pp, ip) => {
            op() && Op.markSaved(pp, ip)
          };
          let Sp = null;
          if (ip.pickerSupported()) {
            try {
              if (Sp = await ip.chooseFile(pp ? null : Op.fileHandle()), null === Sp) return "OO"
            } catch (Lp) {
              ip.onFallback(Lp)
            }
            if (!op()) throw new Error(kI.c.saveClosed.text)
          }
          const xp = await Op.encode();
          if (null === xp) {
            if (null !== Sp) throw new Error(kI.c.saveClosed.text);
            return "none"
          }
          if (null !== Sp) try {
            return await ip.write(Sp, xp), Ip(Sp), "written"
          } catch (Lp) {
            ip.onFallback(Lp)
          }
          return Ip(null, ip.download(xp)), "downloaded"
        }(pp, ip, Ip)
      } finally {
        mI = !1
      }
    }
    var qI = cp(37201),
      MI = cp(4635);
    const CI = [1, 2, 4, 8, 16, 32, 64];

    function EI(pp, ip) {
      return Math.max(0, Math.min(pp, ip))
    }

    function XI(pp, ip, cp) {
      return cp <= ip ? 0 : (pp - ip) / (cp - ip) * 100
    }

    function lI(pp, ip, cp) {
      const Op = cp - ip;
      return Math.round(ip + pp / 100 * Op)
    }

    function QI(pp, ip) {
      const cp = Math.floor(pp / ip / 60),
        Op = Math.floor(pp / ip % 60),
        op = pp % ip;
      return `${cp.toString().padStart(2,"0")}:${Op.toString().padStart(2,"0")}:${op.toString().padStart(2,"0")}`
    }

    function JI(pp) {
      return Number.isInteger(pp) || CI.includes(pp) ? `${Math.round(pp)}\xd7` : `${pp.toFixed(1)}\xd7`
    }

    function BI(pp, ip) {
      const cp = CI.indexOf(pp);
      if (-1 !== cp) return "in" === ip ? CI[Math.min(cp + 1, CI.length - 1)] : CI[Math.max(cp - 1, 0)];
      if ("in" === ip) {
        for (const ip of CI)
          if (ip >= pp) return ip;
        return pp
      }
      for (let Op = CI.length - 1; Op >= 0; Op--)
        if (CI[Op] <= pp) return CI[Op];
      return CI[0]
    }

    function NI(pp, ip) {
      const cp = ip.getBoundingClientRect();
      if (cp.width <= 0) return 0;
      const Op = (pp - cp.left) / cp.width * 100;
      return Math.max(0, Math.min(100, Op))
    }

    function TI(pp, ip) {
      return ip <= 0 ? 0 : pp / ip * 100
    }

    function fI(pp, ip, cp) {
      const Op = [];
      let op = Math.ceil(pp / cp) * cp;
      for (; op <= ip;) Op.push(op), op += cp;
      return Op
    }
    var bI = cp(37207);
    const hI = [{
        label: "Linear",
        easing: bI.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: bI.d
      }, {
        label: "Ease Out",
        easing: bI.f
      }, {
        label: "Ease In Out",
        easing: bI.c
      }],
      aI = 200,
      nI = 150;

    function FI(pp) {
      const ip = pp => Number(pp.toFixed(3)).toString();
      return `cubic-bezier(${ip(pp[0])}, ${ip(pp[1])}, ${ip(pp[2])}, ${ip(pp[3])})`
    }

    function gI(pp, ip) {
      return {
        cx: 25 + pp * nI,
        cy: 25 + (1 - ip) * nI
      }
    }

    function GI(pp, ip, cp) {
      const Op = pp - cp.left,
        op = ip - cp.top;
      return {
        x: OO.d.clamp((Op - 25) / nI, 0, 1),
        y: OO.d.clamp(1 - (op - 25) / nI, -1, 2)
      }
    }

    function rI(pp, ip, cp, Op, op) {
      return {
        x: (0, bI.m)(pp, cp, op),
        y: (0, bI.m)(ip, Op, op)
      }
    }
    const ZI = (0, op.memo)((function(pp) {
      let {
        value: ip,
        onChange: cp
      } = pp;
      const Op = (0, op.useRef)(null),
        Ip = (0, op.useRef)(null),
        [Sp, xp] = (0, op.useState)(null),
        Lp = (0, op.useCallback)((() => {
          const pp = Op.current;
          if (!pp) return;
          const cp = pp.getContext("2d");
          if (!cp) return;
          const op = window.devicePixelRatio || 1;
          pp.width = aI * op, pp.height = aI * op, cp.setTransform(op, 0, 0, op, 0, 0), cp.clearRect(0, 0, aI, aI), cp.fillStyle = "rgba(38, 52, 93, 0.85)", cp.fillRect(0, 0, aI, aI), cp.beginPath();
          const Ip = gI(0, 0),
            xp = gI(1, 1);
          cp.moveTo(Ip.cx, Ip.cy), cp.lineTo(xp.cx, xp.cy), cp.strokeStyle = "rgba(164, 164, 164, 0.35)", cp.setLineDash([3, 3]), cp.stroke(), cp.setLineDash([]);
          const [Lp, Yp, Dp, Ap] = ip, Pp = gI(Lp, Yp), Wp = gI(Dp, Ap);
          cp.strokeStyle = "rgba(252, 211, 115, 0.55)", cp.lineWidth = 1.5, cp.beginPath(), cp.moveTo(Ip.cx, Ip.cy), cp.lineTo(Pp.cx, Pp.cy), cp.moveTo(xp.cx, xp.cy), cp.lineTo(Wp.cx, Wp.cy), cp.stroke(), cp.strokeStyle = "#fcd373", cp.lineWidth = 2, cp.beginPath();
          for (let ip = 0; ip <= 50; ip++) {
            const pp = rI(Lp, Yp, Dp, Ap, ip / 50),
              Op = gI(pp.x, pp.y);
            0 === ip ? cp.moveTo(Op.cx, Op.cy) : cp.lineTo(Op.cx, Op.cy)
          }
          cp.stroke();
          const yp = (pp, ip, Op) => {
            cp.beginPath(), cp.arc(pp, ip, Op ? 6 : 5, 0, 2 * Math.PI), cp.fillStyle = Op ? "#ffb914" : "#fcd373", cp.fill(), cp.strokeStyle = "#1a1f2e", cp.lineWidth = 1.5, cp.stroke()
          };
          yp(Pp.cx, Pp.cy, "p1" === Sp), yp(Wp.cx, Wp.cy, "p2" === Sp)
        }), [Sp, ip]);
      (0, op.useEffect)((() => {
        Lp()
      }), [Lp]);
      const Yp = (0, op.useCallback)(((pp, op) => {
          const Sp = Op.current,
            xp = Ip.current;
          if (!Sp || !xp) return;
          const Lp = Sp.getBoundingClientRect(),
            {
              x: Yp,
              y: Dp
            } = GI(pp, op, Lp);
          cp("p1" === xp ? [Yp, Dp, ip[2], ip[3]] : [ip[0], ip[1], Yp, Dp])
        }), [cp, ip]),
        Ap = (0, op.useCallback)((pp => {
          const cp = Op.current;
          if (!cp) return;
          const op = cp.getBoundingClientRect();
          let {
            x: Sp,
            y: Lp
          } = GI(pp.clientX, pp.clientY, op);
          Sp = OO.d.clamp(Sp, 0, 1), Lp = OO.d.clamp(Lp, 0, 1);
          const [Dp, Ap, Pp, Wp] = ip.map((pp => OO.d.clamp(pp, 0, 1))), yp = Math.hypot(Sp - Dp, Lp - Ap), Up = Math.hypot(Sp - Pp, Lp - Wp), wp = yp <= Up ? "p1" : "p2";
          ("p1" === wp ? yp : Up) > .12 || (Ip.current = wp, xp(wp), cp.setPointerCapture(pp.pointerId), Yp(pp.clientX, pp.clientY))
        }), [Yp, ip]),
        Pp = (0, op.useCallback)((pp => {
          Ip.current && Yp(pp.clientX, pp.clientY)
        }), [Yp]),
        Wp = (0, op.useCallback)((pp => {
          Ip.current = null, xp(null), pp.currentTarget.hasPointerCapture(pp.pointerId) && pp.currentTarget.releasePointerCapture(pp.pointerId)
        }), []);
      return (0, Dp.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Dp.jsx)("canvas", {
          ref: Op,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: aI,
            height: aI
          },
          onPointerDown: Ap,
          onPointerMove: Pp,
          onPointerUp: Wp,
          onPointerCancel: Wp
        }), (0, Dp.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: FI(ip)
        })]
      })
    }));
    var zI = cp(1698),
      sI = cp(1677);
    const KI = 12;

    function VI(pp) {
      return {
        left: pp.left + pp.width / 2,
        top: pp.top - 8
      }
    }

    function pS(pp, ip) {
      const [cp, Op] = (0, op.useState)(null);
      return (0, op.useLayoutEffect)((() => {
        const cp = pp.current;
        if (!cp) return;
        const {
          width: op,
          height: Ip
        } = cp.getBoundingClientRect();
        Op(function(pp, ip, cp) {
          const Op = window.innerWidth,
            op = window.innerHeight,
            Ip = ip / 2;
          let Sp = pp.left + pp.width / 2;
          Sp = Math.max(KI + Ip, Math.min(Sp, Op - KI - Ip));
          const xp = pp.top - 8 - KI,
            Lp = op - pp.bottom - 8 - KI,
            Yp = xp < cp && Lp >= xp;
          let Dp;
          Yp ? (Dp = pp.bottom + 8, Dp + cp > op - KI && (Dp = op - KI - cp), Dp = Math.max(KI, Dp)) : (Dp = pp.top - 8, Dp - cp < KI && (Dp = KI + cp));
          return {
            left: Sp,
            top: Dp,
            placeBelow: Yp
          }
        }(ip, op, Ip))
      }), [ip, pp]), cp
    }

    function iS(pp, ip, cp) {
      (0, op.useEffect)((() => (0, sI.e)("pointerdown", (Op => {
        var op, Ip;
        const Sp = Op.target;
        Sp instanceof Node && (null !== (op = pp.current) && void 0 !== op && op.contains(Sp) || null !== cp && void 0 !== cp && null !== (Ip = cp.current) && void 0 !== Ip && Ip.contains(Sp) || (0, zI.i)(Sp) || ip())
      }))), [cp, ip, pp])
    }

    function cS(pp) {
      let {
        label: ip,
        value: cp,
        onChange: Op
      } = pp;
      return (0, Dp.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Dp.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: ip
        }), (0, Dp.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((pp, ip) => (0, Dp.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Dp.jsx)("span", {
              children: pp
            }), (0, Dp.jsx)("input", {
              type: "number",
              step: "any",
              value: cp[ip],
              onChange: pp => {
                const op = Number.parseFloat(pp.target.value);
                if (Number.isNaN(op)) return;
                const Ip = [cp[0], cp[1], cp[2]];
                Ip[ip] = op, Op(Ip)
              }
            })]
          }, pp)))
        })]
      })
    }
    const OS = (0, op.memo)((function(pp) {
        var ip, cp, Op;
        let {
          keyframe: Ip,
          anchor: xp,
          hasOutgoingSegment: Lp,
          onClose: Yp,
          onApply: Ap,
          onDelete: Pp,
          onUseCurrentCamera: Wp
        } = pp;
        const yp = (0, op.useRef)(null),
          Up = pS(yp, xp.rect),
          [wp, vp] = (0, op.useState)((() => [Ip.position[0], Ip.position[1], Ip.position[2]])),
          [tp, Hp] = (0, op.useState)((() => [Ip.direction[0], Ip.direction[1], Ip.direction[2]])),
          [dp, ep] = (0, op.useState)((() => Ip.easing));
        (0, op.useEffect)((() => {
          vp([Ip.position[0], Ip.position[1], Ip.position[2]]), Hp([Ip.direction[0], Ip.direction[1], Ip.direction[2]]), ep(Ip.easing)
        }), [Ip]), iS(yp, Yp);
        const jp = (0, op.useCallback)((() => {
            Ap({
              LP: Ip.LP,
              position: wp,
              direction: tp,
              easing: dp
            }), Yp()
          }), [tp, dp, Ip.LP, Ap, Yp, wp]),
          kp = (0, op.useCallback)((() => {
            Pp(Ip.LP), Yp()
          }), [Ip.LP, Pp, Yp]),
          mp = (0, op.useCallback)((() => {
            const pp = Wp();
            pp && (vp([pp.position[0], pp.position[1], pp.position[2]]), Hp([pp.direction[0], pp.direction[1], pp.direction[2]]))
          }), [Wp]),
          Rp = VI(xp.rect);
        return (0, Dp.jsxs)("div", {
          ref: yp,
          className: Sp()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (ip = null === Up || void 0 === Up ? void 0 : Up.placeBelow) && void 0 !== ip && ip,
            Positioned: null !== Up
          }),
          style: {
            left: `${null!==(cp=null===Up||void 0===Up?void 0:Up.left)&&void 0!==cp?cp:Rp.left}px`,
            top: `${null!==(Op=null===Up||void 0===Up?void 0:Up.top)&&void 0!==Op?Op:Rp.top}px`
          },
          onPointerDown: pp => {
            pp.stopPropagation()
          },
          children: [(0, Dp.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Dp.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Dp.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", xp.LP]
            })]
          }), (0, Dp.jsx)(cS, {
            label: "Position",
            value: wp,
            onChange: vp
          }), (0, Dp.jsx)(cS, {
            label: "Direction",
            value: tp,
            onChange: Hp
          }), Lp && (0, Dp.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Dp.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Dp.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: hI.map((pp => {
                const ip = (cp = dp, Op = pp.easing, cp[0] === Op[0] && cp[1] === Op[1] && cp[2] === Op[2] && cp[3] === Op[3]);
                var cp, Op;
                return (0, Dp.jsx)(gc.S, {
                  className: Sp()("ReplayKeyframePopoverPreset", {
                    Active: ip
                  }),
                  onClick: () => {
                    ep(pp.easing)
                  },
                  children: pp.label
                }, pp.label)
              }))
            }), (0, Dp.jsx)(ZI, {
              value: dp,
              onChange: ep
            })]
          }), (0, Dp.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Dp.jsx)(gc.f, {
              className: "ReplayViewerCompactButton",
              onClick: mp,
              children: "Use current view"
            }), (0, Dp.jsx)(gc.o, {
              className: "ReplayViewerCompactButton",
              onClick: jp,
              children: "Apply"
            }), (0, Dp.jsx)(gc.K, {
              className: "ReplayViewerCompactButton",
              onClick: kp,
              children: "Delete"
            })]
          })]
        })
      })),
      oS = (0, op.memo)((function(pp) {
        var ip, cp, Op;
        let {
          anchor: Ip,
          hasPlaybackMark: xp,
          onClose: Lp,
          onMark: Yp,
          onZoom: Ap,
          onCrop: Pp,
          onDeleteKeyframes: Wp,
          onClearMark: yp
        } = pp;
        const Up = (0, op.useRef)(null),
          wp = pS(Up, Ip.rect),
          vp = VI(Ip.rect),
          tp = {
            startTick: Ip.startTick,
            endTick: Ip.endTick
          },
          Hp = Ip.endTick > Ip.startTick;
        return iS(Up, Lp), (0, Dp.jsx)("div", {
          ref: Up,
          className: Sp()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (ip = null === wp || void 0 === wp ? void 0 : wp.placeBelow) && void 0 !== ip && ip,
            Positioned: null !== wp
          }),
          style: {
            left: `${null!==(cp=null===wp||void 0===wp?void 0:wp.left)&&void 0!==cp?cp:vp.left}px`,
            top: `${null!==(Op=null===wp||void 0===wp?void 0:wp.top)&&void 0!==Op?Op:vp.top}px`
          },
          onPointerDown: pp => {
            pp.stopPropagation()
          },
          children: (0, Dp.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Dp.jsx)(gc.o, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Yp(tp)
              },
              disabled: !Hp,
              children: (0, Dp.jsx)("span", {
                children: " Play range "
              })
            }), (0, Dp.jsx)(gc.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Ap(tp)
              },
              children: (0, Dp.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Dp.jsx)(gc.S, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Pp(tp)
              },
              disabled: !Hp,
              children: (0, Dp.jsx)("span", {
                children: " Crop "
              })
            }), (0, Dp.jsx)(gc.S, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Wp(tp)
              },
              children: (0, Dp.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), xp && (0, Dp.jsx)(gc.S, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                yp()
              },
              children: (0, Dp.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      IS = (0, op.memo)((function(pp) {
        var ip, cp;
        let {
          maxTick: Op,
          displayTick: Ip,
          Bl: xp,
          cameraKeyframes: Lp,
          playbackMark: Yp,
          onSeek: Ap,
          onPause: Pp,
          onScrubTickChange: Wp,
          onMoveCameraKeyframe: yp,
          onUpdateCameraKeyframe: Up,
          onDeleteCameraKeyframe: wp,
          onUseCurrentCamera: vp,
          onMarkRange: tp,
          onCropRange: Hp,
          onDeleteKeyframesInRange: dp,
          onClearMark: ep,
          zoomLevel: jp,
          onZoomLevelChange: kp
        } = pp;
        const mp = (0, op.useRef)(null),
          Rp = (0, op.useRef)(null),
          qp = (0, op.useRef)(!1),
          Mp = (0, op.useRef)(!1),
          Cp = (0, op.useRef)(jp),
          Ep = (0, op.useRef)(null),
          Xp = (0, op.useRef)(null),
          lp = (0, op.useRef)(null),
          Qp = (0, op.useRef)(null),
          [Jp, Bp] = (0, op.useState)(null),
          [Np, Tp] = (0, op.useState)(Ip),
          [fp, bp] = (0, op.useState)(null),
          [hp, ap] = (0, op.useState)(null),
          [np, Fp] = (0, op.useState)(null),
          [gp, Gp] = (0, op.useState)(null),
          rp = (0, op.useMemo)((() => Lp.map((pp => pp.LP))), [Lp]),
          Zp = null !== Jp && void 0 !== Jp ? Jp : Ip,
          {
            viewStart: zp,
            viewEnd: sp
          } = (0, op.useMemo)((() => function(pp) {
            const ip = pp.maxTick + 1,
              cp = Math.max(1, Math.ceil(ip / pp.zoomLevel)),
              Op = Math.floor(cp / 2);
            let op = pp.centerTick - Op;
            return op = Math.max(0, Math.min(op, pp.maxTick - cp + 1)), {
              viewStart: op,
              viewEnd: Math.min(pp.maxTick, op + cp - 1)
            }
          }({
            maxTick: Op,
            zoomLevel: jp,
            centerTick: Np
          })), [Op, jp, Np]);
        (0, op.useEffect)((() => {
          if (null !== Jp || null !== Xp.current || null !== lp.current || null !== Qp.current) return;
          if (qp.current) return void(qp.current = !1);
          if (Mp.current) return void(Mp.current = !1);
          const pp = Cp.current !== jp;
          Cp.current = jp, pp && Tp(Ip)
        }), [jp, Ip, Jp]);
        const Kp = (0, op.useCallback)((pp => {
            let ip = EI(pp, Op);
            return Yp && (ip = Math.max(Yp.inTick, Math.min(ip, Yp.outTick))), ip
          }), [Op, Yp]),
          Vp = (0, op.useCallback)(((pp, ip) => {
            const cp = Kp(pp);
            Ap(cp), ip && Tp(cp)
          }), [Kp, Ap]),
          ii = (0, op.useCallback)(((pp, ip) => {
            const cp = Kp(pp);
            Bp(cp), Wp(cp), Vp(cp, ip)
          }), [Kp, Vp, Wp]),
          ci = (0, op.useCallback)((() => {
            Bp((pp => (null !== pp && Tp(pp), null))), Wp(null)
          }), [Wp]),
          Oi = (0, op.useCallback)((() => {
            Fp(null), Gp(null)
          }), []),
          oi = (0, op.useCallback)((pp => {
            const ip = mp.current;
            if (!ip) return 0;
            return EI(lI(NI(pp, ip), zp, sp), Op)
          }), [Op, sp, zp]),
          Ii = (0, op.useCallback)((pp => {
            const ip = Rp.current;
            if (!ip) return 0;
            return EI(lI(NI(pp, ip), 0, Op), Op)
          }), [Op]),
          Si = (0, op.useMemo)((() => {
            if (!fp) return [...rp];
            const pp = rp.filter((pp => pp !== fp.fromTick));
            return pp.push(fp.previewTick), pp.sort(((pp, ip) => pp - ip)), pp
          }), [rp, fp]),
          xi = (0, op.useMemo)((() => {
            var pp;
            return hp && null !== (pp = Lp.find((pp => pp.LP === hp.LP))) && void 0 !== pp ? pp : null
          }), [Lp, hp]),
          Li = (0, op.useMemo)((() => !!xi && Lp.some((pp => pp.LP > xi.LP))), [Lp, xi]);
        (0, op.useEffect)((() => {
          hp && !xi && ap(null)
        }), [hp, xi]), (0, op.useEffect)((() => {
          if (!gp) return () => {};
          const pp = pp => {
            "Escape" === pp.key && Oi()
          };
          return window.addEventListener("keydown", pp), () => {
            window.removeEventListener("keydown", pp)
          }
        }), [Oi, gp]);
        const Yi = (0, op.useCallback)(((pp, ip) => {
            Oi(), Pp(), Ap(pp, {
              ignorePlaybackMark: !0
            }), ap({
              LP: pp,
              rect: ip.getBoundingClientRect()
            })
          }), [Oi, Pp, Ap]),
          Di = (0, op.useCallback)(((pp, ip) => cp => {
            0 === cp.button && (cp.stopPropagation(), ap(null), Oi(), Pp(), Ep.current = {
              fromTick: pp,
              startX: cp.clientX,
              startY: cp.clientY,
              didDrag: !1,
              track: ip
            }, bp({
              fromTick: pp,
              previewTick: pp,
              track: ip
            }), cp.currentTarget.setPointerCapture(cp.pointerId))
          }), [Oi, Pp]),
          Ai = (0, op.useCallback)((pp => {
            if (!fp) return;
            pp.stopPropagation();
            const ip = Ep.current;
            if (ip && !ip.didDrag) {
              const cp = pp.clientX - ip.startX,
                Op = pp.clientY - ip.startY;
              Math.hypot(cp, Op) > 5 && (ip.didDrag = !0)
            }
            const cp = "detail" === fp.track ? oi(pp.clientX) : Ii(pp.clientX);
            cp !== fp.previewTick && bp({
              ...fp,
              previewTick: cp
            })
          }), [fp, oi, Ii]),
          Pi = (0, op.useCallback)((pp => {
            if (!fp) return;
            pp.stopPropagation();
            const ip = Ep.current,
              cp = "detail" === fp.track ? oi(pp.clientX) : Ii(pp.clientX);
            ip && !ip.didDrag ? Yi(ip.fromTick, pp.currentTarget) : cp !== fp.fromTick && yp(fp.fromTick, cp), bp(null), Ep.current = null, pp.currentTarget.releasePointerCapture(pp.pointerId)
          }), [fp, yp, Yi, oi, Ii]),
          Wi = (0, op.useCallback)((pp => {
            if (0 !== pp.button) return;
            ap(null), Pp();
            const ip = oi(pp.clientX);
            Xp.current = {
              pointerId: pp.pointerId,
              startX: pp.clientX,
              startY: pp.clientY,
              startTick: ip,
              currentTick: ip,
              didSelect: !1
            }, Fp(null), Gp(null), pp.currentTarget.setPointerCapture(pp.pointerId)
          }), [Pp, oi]),
          yi = (0, op.useCallback)((pp => {
            const ip = Xp.current;
            if (!ip || ip.pointerId !== pp.pointerId) return;
            const cp = oi(pp.clientX);
            if (ip.currentTick = cp, !ip.didSelect) {
              const cp = pp.clientX - ip.startX,
                Op = pp.clientY - ip.startY;
              if (Math.hypot(cp, Op) <= 5) return;
              ip.didSelect = !0
            }
            const Op = Math.min(ip.startTick, cp),
              op = Math.max(ip.startTick, cp);
            Fp({
              startTick: Op,
              endTick: op
            })
          }), [oi]),
          Ui = (0, op.useCallback)((pp => {
            const ip = Xp.current;
            if (!ip || ip.pointerId !== pp.pointerId) return;
            if (Xp.current = null, pp.currentTarget.releasePointerCapture(pp.pointerId), !ip.didSelect) return Oi(), void Vp(ip.startTick, !0);
            const cp = oi(pp.clientX),
              Op = Math.min(ip.startTick, cp),
              op = Math.max(ip.startTick, cp),
              Ip = {
                startTick: Op,
                endTick: op
              };
            Fp(Ip);
            const Sp = mp.current;
            if (!Sp) return;
            const xp = Sp.getBoundingClientRect(),
              Lp = XI(Op, zp, sp) / 100,
              Yp = XI(op, zp, sp) / 100,
              Dp = xp.left + Lp * xp.width,
              Ap = xp.left + Yp * xp.width;
            Gp({
              ...Ip,
              rect: new DOMRect(Dp, xp.top, Math.max(Ap - Dp, 1), xp.height)
            })
          }), [Oi, Vp, oi, sp, zp]),
          wi = (0, op.useCallback)((pp => ip => {
            if (0 !== ip.button) return;
            ip.stopPropagation(), ap(null), Oi(), Pp(), lp.current = {
              pointerId: ip.pointerId,
              track: pp
            }, ip.currentTarget.setPointerCapture(ip.pointerId);
            const cp = "detail" === pp ? oi(ip.clientX) : Ii(ip.clientX);
            ii(cp, !1)
          }), [Oi, Pp, ii, oi, Ii]),
          vi = (0, op.useCallback)((pp => {
            const ip = lp.current;
            if (!ip || ip.pointerId !== pp.pointerId) return;
            pp.stopPropagation();
            const cp = "detail" === ip.track ? oi(pp.clientX) : Ii(pp.clientX);
            ii(cp, !1)
          }), [ii, oi, Ii]),
          ti = (0, op.useCallback)((pp => {
            const ip = lp.current;
            ip && ip.pointerId === pp.pointerId && (pp.stopPropagation(), lp.current = null, pp.currentTarget.releasePointerCapture(pp.pointerId), ci())
          }), [ci]),
          Hi = (0, op.useCallback)((pp => {
            0 === pp.button && (Oi(), Pp(), Qp.current = {
              pointerId: pp.pointerId
            }, pp.currentTarget.setPointerCapture(pp.pointerId), ii(Ii(pp.clientX), !0))
          }), [Oi, Pp, ii, Ii]),
          di = (0, op.useCallback)((pp => {
            const ip = Qp.current;
            ip && ip.pointerId === pp.pointerId && ii(Ii(pp.clientX), !0)
          }), [ii, Ii]),
          ei = (0, op.useCallback)((pp => {
            const ip = Qp.current;
            ip && ip.pointerId === pp.pointerId && (Qp.current = null, pp.currentTarget.releasePointerCapture(pp.pointerId), ci())
          }), [ci]),
          ui = (0, op.useCallback)((pp => {
            const ip = Math.max(1, pp.endTick - pp.startTick + 1),
              cp = Op + 1,
              op = cp / ip,
              Ip = Math.max(1, Math.ceil(cp / op)),
              Sp = pp.startTick + Math.floor((Ip - 1) / 2);
            Mp.current = !0, Cp.current = op, Tp(EI(Sp, Op)), kp(op), Oi()
          }), [Oi, Op, kp]),
          ji = (0, op.useCallback)((pp => {
            tp(pp), Oi()
          }), [Oi, tp]),
          ki = (0, op.useCallback)((pp => {
            Hp(pp), Oi()
          }), [Oi, Hp]),
          mi = (0, op.useCallback)((pp => {
            dp(pp), Oi()
          }), [Oi, dp]),
          Ri = (0, op.useCallback)((() => {
            ep(), Oi()
          }), [Oi, ep]);
        (0, op.useEffect)((() => {
          const pp = mp.current;
          if (!pp) return () => {};
          const ip = ip => {
            ip.preventDefault();
            const cp = EI(lI(NI(ip.clientX, pp), zp, sp), Op),
              op = ip.deltaY < 0 ? "in" : "out",
              Ip = BI(jp, op);
            Ip !== jp && (qp.current = !0, Tp(cp), kp(Ip))
          };
          return pp.addEventListener("wheel", ip, {
            passive: !1
          }), () => {
            pp.removeEventListener("wheel", ip)
          }
        }), [Op, kp, sp, zp, jp]);
        const qi = XI(Zp, zp, sp),
          Mi = TI(Zp, Op),
          Ci = TI(zp, Op),
          Ei = Op > 0 ? TI(sp, Op) : 100,
          Xi = null !== Yp,
          li = null !== (ip = null === Yp || void 0 === Yp ? void 0 : Yp.inTick) && void 0 !== ip ? ip : 0,
          Qi = null !== (cp = null === Yp || void 0 === Yp ? void 0 : Yp.outTick) && void 0 !== cp ? cp : Op,
          Ji = TI(li, Op),
          Bi = Math.max(TI(Qi, Op) - Ji, 0),
          Ni = XI(Math.max(li, zp), zp, sp),
          Ti = XI(Math.min(Qi, sp), zp, sp),
          fi = Math.max(Ti - Ni, 0),
          bi = Xi && Qi >= zp && li <= sp,
          ai = XI(li, zp, sp),
          ni = XI(Qi, zp, sp),
          Fi = Xi && li >= zp && li <= sp,
          gi = Xi && Qi >= zp && Qi <= sp,
          Gi = TI(li, Op),
          ri = TI(Qi, Op),
          Zi = null !== np && void 0 !== np ? np : gp ? {
            startTick: gp.startTick,
            endTick: gp.endTick
          } : null,
          zi = Zi ? XI(Math.max(Zi.startTick, zp), zp, sp) : 0,
          si = Zi ? XI(Math.min(Zi.endTick, sp), zp, sp) : 0,
          Ki = Math.max(si - zi, 0),
          Vi = null !== Zi && Zi.endTick >= zp && Zi.startTick <= sp,
          pc = (0, op.useMemo)((() => fI(0, Op, xp)), [Op, xp]),
          ic = (0, op.useMemo)((() => fI(zp, sp, xp)), [zp, sp, xp]),
          cc = (0, op.useMemo)((() => Si.filter((pp => pp >= zp && pp <= sp))), [Si, sp, zp]),
          Oc = (0, op.useCallback)(((pp, ip, cp) => {
            const op = "detail" === ip ? XI(pp, zp, sp) : TI(pp, Op),
              Ip = null !== fp && cp === fp.fromTick,
              xp = null !== hp && hp.LP === cp;
            return (0, Dp.jsx)("button", {
              type: "button",
              className: Sp()("ReplayTimelineCameraKeyframeMarker", "detail" === ip ? "Detail" : "Overview", {
                Dragging: Ip,
                Selected: xp
              }),
              style: {
                left: `${op}%`
              },
              onPointerDown: Di(cp, ip),
              onPointerMove: Ai,
              onPointerUp: Pi,
              onPointerCancel: Pi,
              "aria-label": `Camera keyframe at tick ${cp}`
            }, `cam-${ip}-${cp}`)
          }), [Di, hp, Pi, fp, Op, Ai, sp, zp]),
          oc = (0, op.useCallback)((pp => fp && pp === fp.previewTick ? fp.fromTick : pp), [fp]);
        return Op <= 0 ? null : (0, Dp.jsxs)("div", {
          className: "ReplayTimeline",
          children: [hp && xi && (0, Vo.createPortal)((0, Dp.jsx)(OS, {
            keyframe: xi,
            anchor: hp,
            hasOutgoingSegment: Li,
            onClose: () => {
              ap(null)
            },
            onApply: Up,
            onDelete: wp,
            onUseCurrentCamera: vp
          }), document.body), gp && (0, Vo.createPortal)((0, Dp.jsx)(oS, {
            anchor: gp,
            hasPlaybackMark: Xi,
            onClose: Oi,
            onMark: ji,
            onZoom: ui,
            onCrop: ki,
            onDeleteKeyframes: mi,
            onClearMark: Ri
          }), document.body), (0, Dp.jsxs)("div", {
            className: Sp()("ReplayTimelineOverviewSection", {
              Hidden: jp <= 1
            }),
            children: [(0, Dp.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Dp.jsxs)("div", {
              ref: Rp,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Hi,
              onPointerMove: di,
              onPointerUp: ei,
              onPointerCancel: ei,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Op,
              "aria-valuenow": Zp,
              tabIndex: 0,
              children: [pc.map((pp => {
                const ip = TI(pp, Op);
                return (0, Dp.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${ip}%`
                  }
                }, pp)
              })), Xi && (0, Dp.jsxs)(Dp.Fragment, {
                children: [(0, Dp.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Ji}%`,
                    width: `${Bi}%`
                  }
                }), (0, Dp.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${Gi}%`
                  },
                  "aria-hidden": !0
                }), (0, Dp.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${ri}%`
                  },
                  "aria-hidden": !0
                })]
              }), Si.map((pp => Oc(pp, "overview", oc(pp)))), (0, Dp.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Ci}%`,
                  width: `${Math.max(Ei-Ci,.5)}%`
                }
              }), (0, Dp.jsx)("button", {
                type: "button",
                className: Sp()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Jp
                }),
                style: {
                  left: `${Mi}%`
                },
                onPointerDown: wi("overview"),
                onPointerMove: vi,
                onPointerUp: ti,
                onPointerCancel: ti,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Dp.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Dp.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Dp.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Dp.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [QI(zp, xp), " \u2013 ", QI(sp, xp), jp > 1 && (0, Dp.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: JI(jp)
                })]
              })]
            }), (0, Dp.jsxs)("div", {
              ref: mp,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Wi,
              onPointerMove: yi,
              onPointerUp: Ui,
              onPointerCancel: Ui,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": zp,
              "aria-valuemax": sp,
              "aria-valuenow": Zp,
              tabIndex: 0,
              children: [ic.map((pp => {
                const ip = XI(pp, zp, sp);
                return (0, Dp.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${ip}%`
                  }
                }, pp)
              })), bi && (0, Dp.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Ni}%`,
                  width: `${fi}%`
                }
              }), Fi && (0, Dp.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${ai}%`
                },
                "aria-label": `Play range start at tick ${li}`
              }), gi && (0, Dp.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${ni}%`
                },
                "aria-label": `Play range end at tick ${Qi}`
              }), Vi && Zi && (0, Dp.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${zi}%`,
                  width: `${Ki}%`
                }
              }), cc.map((pp => Oc(pp, "detail", oc(pp)))), (0, Dp.jsx)("button", {
                type: "button",
                className: Sp()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Jp
                }),
                style: {
                  left: `${qi}%`
                },
                onPointerDown: wi("detail"),
                onPointerMove: vi,
                onPointerUp: ti,
                onPointerCancel: ti,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Dp.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Dp.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      SS = (0, op.memo)((function(pp) {
        let {
          enabled: ip
        } = pp;
        const cp = (0, op.useRef)(!1),
          Op = (0, op.useRef)(null),
          [Ip, xp] = (0, op.useState)(!1),
          Lp = (0, op.useCallback)((pp => {
            ip && 0 === pp.button && (cp.current = !0, xp(!0), Op.current = {
              x: pp.clientX,
              y: pp.clientY
            }, pp.currentTarget.setPointerCapture(pp.pointerId))
          }), [ip]),
          Yp = (0, op.useCallback)((pp => {
            if (!ip || !cp.current || !Op.current) return;
            const op = pp.clientX - Op.current.x,
              Ip = pp.clientY - Op.current.y;
            Op.current = {
              x: pp.clientX,
              y: pp.clientY
            }, Wp.gameBridge.send("dragReplayCamera", {
              dx: op,
              dy: Ip
            })
          }), [ip]),
          Ap = (0, op.useCallback)((pp => {
            cp.current && (cp.current = !1, xp(!1), Op.current = null, pp.currentTarget.releasePointerCapture(pp.pointerId))
          }), []);
        return ip ? (0, Dp.jsx)("div", {
          className: Sp()("ReplayViewerCameraDragSurface", {
            Dragging: Ip
          }),
          onPointerDown: Lp,
          onPointerMove: Yp,
          onPointerUp: Ap,
          onPointerCancel: Ap,
          "aria-hidden": !0
        }) : null
      }));
    var xS = cp(37209),
      LS = cp(37215);
    const YS = (0, op.memo)((function(pp) {
        var ip, cp, Op;
        let {
          anchorRect: Ip,
          anchorRef: xp,
          onClose: Yp
        } = pp;
        const Ap = (0, op.useRef)(null),
          Pp = pS(Ap, Ip),
          [Wp, yp] = (0, op.useState)(LS.b),
          Up = (0, op.useMemo)((() => Object.values(Wp).every((pp => pp))), [Wp]);
        (0, Lp.f)("replayViewer|uiVisibilityChanged", (() => {
          yp((0, LS.b)())
        })), iS(Ap, Yp, xp);
        const wp = (0, op.useCallback)(((pp, ip) => {
            (0, LS.j)(pp, ip), yp((0, LS.b)())
          }), []),
          vp = (0, op.useCallback)((pp => {
            for (const {
                group: ip
              }
              of xS.h)(0, LS.j)(ip, pp);
            yp((0, LS.b)())
          }), []),
          tp = VI(Ip);
        return (0, Vo.createPortal)((0, Dp.jsxs)("div", {
          ref: Ap,
          className: Sp()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (ip = null === Pp || void 0 === Pp ? void 0 : Pp.placeBelow) && void 0 !== ip && ip,
            Positioned: null !== Pp
          }),
          style: {
            left: `${null!==(cp=null===Pp||void 0===Pp?void 0:Pp.left)&&void 0!==cp?cp:tp.left}px`,
            top: `${null!==(Op=null===Pp||void 0===Pp?void 0:Pp.top)&&void 0!==Op?Op:tp.top}px`
          },
          onPointerDown: pp => {
            pp.stopPropagation()
          },
          children: [(0, Dp.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Dp.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Dp.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Dp.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Dp.jsx)("input", {
                type: "checkbox",
                checked: Up,
                onChange: pp => {
                  vp(pp.target.checked)
                }
              }), (0, Dp.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), xS.h.map((pp => {
              let {
                group: ip,
                label: cp
              } = pp;
              return (0, Dp.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Dp.jsx)("input", {
                  type: "checkbox",
                  checked: Wp[ip],
                  onChange: pp => {
                    wp(ip, pp.target.checked)
                  }
                }), (0, Dp.jsx)("span", {
                  children: cp
                })]
              }, ip)
            }))]
          })]
        }), document.body)
      })),
      DS = (0, op.memo)((function(pp) {
        let {
          disabled: ip
        } = pp;
        const cp = (0, op.useRef)(null),
          [Op, Ip] = (0, op.useState)(!1),
          [Sp, xp] = (0, op.useState)(null),
          Lp = (0, op.useCallback)((() => {
            cp.current && (xp(cp.current.getBoundingClientRect()), Ip((pp => !pp)))
          }), []),
          Yp = (0, op.useCallback)((() => {
            Ip(!1)
          }), []);
        return (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsx)("div", {
            ref: cp,
            children: (0, Dp.jsx)(gc.f, {
              className: "ReplayViewerActionButton",
              onClick: Lp,
              disabled: ip,
              children: (0, Dp.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Op && Sp && (0, Dp.jsx)(YS, {
            anchorRect: Sp,
            anchorRef: cp,
            onClose: Yp
          })]
        })
      })),
      AS = ["freeCamUp", "freeCamDown"];

    function PS(pp, ip) {
      Wp.gameBridge.send("holdReplayFreecamVertical", {
        action: pp,
        sx: ip
      })
    }
    const WS = (0, op.memo)((function() {
      (0, op.useEffect)((() => () => {
        ! function() {
          Wp.gameBridge.send("moveReplayFreecam", null);
          for (const pp of AS) PS(pp, !1)
        }()
      }), []);
      const pp = (0, op.useCallback)((pp => {
          Wp.gameBridge.send("moveReplayFreecam", pp)
        }), []),
        ip = (0, op.useCallback)((pp => ({
          onTouchStart: ip => {
            ip.preventDefault(), ip.stopPropagation(), PS(pp, !0)
          },
          onTouchEnd: ip => {
            ip.preventDefault(), ip.stopPropagation(), PS(pp, !1)
          },
          onTouchCancel: ip => {
            ip.preventDefault(), ip.stopPropagation(), PS(pp, !1)
          }
        })), []);
      return (0, Dp.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, Dp.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, Dp.jsx)(Ei, {
            onMove: pp,
            mode: "pinned"
          })
        }), (0, Dp.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, Dp.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...ip("freeCamUp"),
            children: (0, Dp.jsx)(fp.d, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, Dp.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...ip("freeCamDown"),
            children: (0, Dp.jsx)(fp.d, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var yS = cp(3235);
    const US = [],
      wS = "Failed to load recording";

    function vS(pp, ip, cp) {
      var Op;
      console.error(ip), Yc.NotificationProvider.showAlertPopup({
        title: pp,
        subtitle: null !== (Op = (0, kI.i)(ip)) && void 0 !== Op ? Op : cp,
        confirmText: "OK"
      })
    }

    function tS(pp) {
      vS(wS, pp, kI.c.cantOpen.text)
    }
    const HS = (0, op.memo)((function() {
        const pp = (0, zp.m)(),
          {
            gameState: ip
          } = (0, Rp.o)(["gameState"]),
          cp = "inGame" === ip;
        return (0, mp.b)("replayViewerRequested", (pp => {
          (0, zp.k)("toggle" === pp ? !(0, zp.g)() : "open" === pp)
        })), (0, op.useEffect)((() => {
          cp && (0, qI.f)().then((pp => {
            if (null !== pp) return (0, zp.k)(!0), (0, dI.e)().open(pp.bytes, pp.source)
          })).catch((pp => {
            (0, zp.k)(!0), tS(pp)
          }))
        }), [cp]), pp ? (0, Dp.jsx)(dS, {}) : null
      })),
      dS = (0, op.memo)((function() {
        var pp, ip, cp, Op, Ip, xp, Lp, Yp, Ap, Pp, yp, Up;
        const wp = op.useRef(null),
          [vp, tp] = (0, op.useState)(1),
          [Hp, dp] = (0, op.useState)(null),
          [ep, jp] = (0, op.useState)(!1),
          {
            isTouchScreen: kp
          } = (0, Rp.o)(["isTouchScreen"]),
          Mp = (0, mp.g)("replay"),
          Cp = (0, mp.g)("replayEdits"),
          Ep = null !== Mp,
          Xp = null !== (pp = null === Mp || void 0 === Mp ? void 0 : Mp.LP) && void 0 !== pp ? pp : 0,
          lp = null !== (ip = null === Mp || void 0 === Mp ? void 0 : Mp.totalTicks) && void 0 !== ip ? ip : 0,
          Qp = Math.max(0, lp - 1),
          Jp = null !== (cp = null === Mp || void 0 === Mp ? void 0 : Mp.playing) && void 0 !== cp && cp,
          Bp = null !== (Op = null === Mp || void 0 === Mp ? void 0 : Mp.speed) && void 0 !== Op ? Op : 1,
          Np = null !== (Ip = null === Mp || void 0 === Mp ? void 0 : Mp.Bl) && void 0 !== Ip ? Ip : 20,
          bp = null !== Hp && void 0 !== Hp ? Hp : Xp,
          hp = null !== (xp = null === Mp || void 0 === Mp ? void 0 : Mp.freecam) && void 0 !== xp && xp,
          ap = null !== (Lp = null === Mp || void 0 === Mp ? void 0 : Mp.cameraMode) && void 0 !== Lp ? Lp : "recording",
          np = null !== (Yp = null === Cp || void 0 === Cp ? void 0 : Cp.cameraKeyframes) && void 0 !== Yp ? Yp : US,
          Fp = null !== (Ap = null === Cp || void 0 === Cp ? void 0 : Cp.playbackMark) && void 0 !== Ap ? Ap : null,
          gp = null !== (Pp = null === Cp || void 0 === Cp ? void 0 : Cp.fileName) && void 0 !== Pp ? Pp : null,
          Gp = null !== (yp = null === Cp || void 0 === Cp ? void 0 : Cp.unsavedChanges) && void 0 !== yp && yp,
          rp = null !== (Up = null === Cp || void 0 === Cp ? void 0 : Cp.suggestSaveAs) && void 0 !== Up && Up,
          Zp = (0, mp.g)("replayVideoExporting"),
          sp = !Zp && Ep && ("freecam" === ap || ("recording" === ap || "keyframe" === ap) && !Jp),
          Kp = kp && Ep && "freecam" === ap && !Zp && !ep;
        (0, MI.e)(!0, !0, "ReplayViewerOverlay"), (0, op.useEffect)((() => {
          Wp.gameBridge.send("syncReplayCameraMode", null)
        }), [hp]);
        const Vp = (0, op.useCallback)(((pp, ip) => {
            Wp.gameBridge.send("seekReplay", {
              LP: pp,
              ignorePlaybackMark: null === ip || void 0 === ip ? void 0 : ip.ignorePlaybackMark
            })
          }), []),
          ii = (0, op.useCallback)((() => {
            Wp.gameBridge.send("setReplayPlaying", !1)
          }), []),
          ci = (0, op.useCallback)(((pp, ip) => {
            Wp.gameBridge.send("moveReplayCameraKeyframe", {
              from: pp,
              to: ip
            })
          }), []),
          Oi = (0, op.useCallback)((pp => {
            Wp.gameBridge.send("setReplayCameraKeyframe", pp)
          }), []),
          oi = (0, op.useCallback)((pp => {
            Wp.gameBridge.send("deleteReplayCameraKeyframes", {
              start: pp,
              end: pp
            })
          }), []),
          Ii = (0, op.useCallback)((pp => {
            Wp.gameBridge.send("deleteReplayCameraKeyframes", {
              start: pp.startTick,
              end: pp.endTick
            })
          }), []),
          Si = (0, op.useCallback)((() => Wp.gameBridge.lookup("replayCamera", null)), []),
          xi = (0, op.useCallback)((pp => {
            dp(pp)
          }), []),
          Li = (0, op.useCallback)((pp => {
            Wp.gameBridge.send("setReplayPlaybackMark", {
              inTick: pp.startTick,
              outTick: pp.endTick
            })
          }), []),
          Yi = (0, op.useCallback)((() => {
            Wp.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Di = (0, op.useCallback)((pp => {
            const ip = Wp.gameBridge.latest("replay");
            if (null === ip || pp.endTick <= pp.startTick) return;
            const cp = pp.startTick,
              Op = pp.endTick;
            Yc.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((pp => {
              var op;
              if (!0 !== pp) return;
              if ((null === (op = Wp.gameBridge.latest("replay")) || void 0 === op ? void 0 : op.id) !== ip.id) return;
              Wp.gameBridge.send("cropReplay", {
                start: cp,
                end: Op
              }) && (dp(null), tp(1))
            }))
          }), []),
          Ai = (0, op.useCallback)(((pp, ip) => {
            tp(1), dp(null), (0, dI.e)().open(pp, ip).catch(tS)
          }), []),
          Pi = (0, op.useCallback)(((pp, ip) => {
            null !== Wp.gameBridge.latest("connectedGame").websocketUrl ? Yc.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((cp => {
              !0 === cp && Ai(pp, ip)
            })) : Ai(pp, ip)
          }), [Ai]),
          Wi = (0, op.useCallback)((pp => {
            var ip;
            const cp = null === (ip = pp.target.files) || void 0 === ip ? void 0 : ip[0];
            if (pp.target.value = "", !cp) return;
            const Op = new FileReader;
            Op.onload = () => {
              Pi(new Uint8Array(Op.result), {
                fileName: cp.name
              })
            }, Op.onerror = () => {
              tS(Op.error)
            }, Op.readAsArrayBuffer(cp)
          }), [Pi]),
          yi = (0, op.useCallback)((() => {
            const pp = () => {
              null !== wp.current && (0, yS.h)(wp.current)
            };
            (0, jI.j)() ? (0, jI.f)().then((pp => {
              pp && Pi(pp.bytes, {
                fileHandle: pp.handle
              })
            })).catch((ip => {
              console.error(ip), Yc.NotificationProvider.showPromptPopup({
                title: wS,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((ip => {
                !0 === ip && pp()
              }))
            })): pp()
          }), [Pi]),
          Ui = (0, op.useCallback)((async function() {
            let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let ip;
            try {
              ip = await RI(pp, {
                files: (0, dI.e)(),
                pickerSupported: jI.j,
                chooseFile: jI.c,
                write: jI.k,
                download: uI.h,
                onFallback: console.error
              })
            } catch (cp) {
              return void vS("Failed to save recording", cp)
            }
            "written" !== ip && "downloaded" !== ip || (() => {
              const pp = Yc.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                pp.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          wi = (0, op.useCallback)((pp => {
            Wp.gameBridge.send("replayAction", pp)
          }), []),
          vi = (0, op.useCallback)((pp => {
            tp((ip => BI(ip, pp)))
          }), []),
          ti = (0, op.useCallback)((pp => {
            if (!Wp.gameBridge.latest("replayVideoExporting")) switch (pp) {
              case "replayLoad":
                yi();
                break;
              case "replaySave":
                Ui(!1);
                break;
              case "replaySaveAs":
                Ui(!0);
                break;
              case "replayTimelineZoomIn":
                vi("in");
                break;
              case "replayTimelineZoomOut":
                vi("out")
            }
          }), [yi, Ui, vi]);
        (0, mp.b)("replayUiActionRequested", ti);
        const Hi = (0, op.useCallback)((pp => {
            Wp.gameBridge.send("setReplayCameraMode", pp)
          }), []),
          di = Ep ? gc.f : gc.o,
          ei = Gp && !rp ? gc.o : gc.f,
          ui = Gp && rp ? gc.o : gc.f;
        return (0, Dp.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Dp.jsx)(SS, {
            enabled: sp
          }), Kp && (0, Dp.jsx)(WS, {}), (0, Dp.jsx)("input", {
            ref: wp,
            type: "file",
            accept: uI.b,
            className: "ReplayViewerFileInput",
            onChange: Wi
          }), (0, Dp.jsxs)("div", {
            className: Sp()("ReplayViewerBar", {
              Collapsed: ep
            }),
            children: [(0, Dp.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                ep ? jp(!1) : Ep ? jp(!0) : (0, zp.c)()
              },
              "aria-expanded": !ep,
              "aria-label": ep ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Dp.jsx)(fp.d, {
                name: ep ? "angle-up" : "angle-down"
              })
            }), !ep && (0, Dp.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Ep && lp > 0 && (0, Dp.jsx)(IS, {
                maxTick: Qp,
                displayTick: bp,
                Bl: Np,
                cameraKeyframes: np,
                playbackMark: Fp,
                onSeek: Vp,
                onPause: ii,
                onScrubTickChange: xi,
                onMoveCameraKeyframe: ci,
                onUpdateCameraKeyframe: Oi,
                onDeleteCameraKeyframe: oi,
                onUseCurrentCamera: Si,
                onMarkRange: Li,
                onCropRange: Di,
                onDeleteKeyframesInRange: Ii,
                onClearMark: Yi,
                zoomLevel: vp,
                onZoomLevelChange: tp
              }, Qp), (0, Dp.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Dp.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Dp.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Ep && (0, Dp.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== gp && void 0 !== gp ? gp : "Unsaved recording", Gp ? " *" : ""]
                    }), (0, Dp.jsxs)(di, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ti("replayLoad")
                      },
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Dp.jsxs)(gc.f, {
                      className: "ReplayViewerActionButton",
                      onClick: zp.c,
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Dp.jsxs)(ei, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ti("replaySave")
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Dp.jsxs)(gc.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Wp.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Dp.jsxs)(ui, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ti("replaySaveAs")
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Dp.jsxs)(gc.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Wp.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Ep || 0 === lp || Zp,
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Dp.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Dp.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Dp.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Dp.jsx)(qp.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Dp.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Dp.jsx)(Tp.f, {
                        tooltipInner: (0, Dp.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Dp.jsxs)(gc.S, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === ap,
                          onClick: () => {
                            Hi("recording")
                          },
                          disabled: !Ep,
                          children: ["Recorded ", (0, Dp.jsx)(fp.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Dp.jsx)(Tp.f, {
                        tooltipInner: (0, Dp.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Dp.jsxs)(gc.S, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === ap,
                          onClick: () => {
                            Hi("freecam")
                          },
                          disabled: !Ep,
                          children: ["Free ", (0, Dp.jsx)(fp.d, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Dp.jsx)(Tp.f, {
                        tooltipInner: (0, Dp.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Dp.jsxs)(gc.S, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === ap,
                          onClick: () => {
                            Hi("keyframe")
                          },
                          disabled: !Ep,
                          children: ["Preview ", (0, Dp.jsx)(fp.d, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Dp.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Dp.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Dp.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Dp.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: QI(bp, Np)
                      }), (0, Dp.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Dp.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: QI(Qp, Np)
                      })]
                    }), (0, Dp.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", bp, " / ", Qp]
                    })]
                  }), (0, Dp.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Dp.jsxs)(gc.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        wi("replaySkipBack")
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsxs)("span", {
                        children: [" ", (0, Dp.jsx)(fp.d, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Dp.jsx)(qp.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Dp.jsxs)(gc.o, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Wp.gameBridge.send("setReplayPlaying", !Jp)
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsxs)("span", {
                        children: [" ", Jp ? (0, Dp.jsx)(fp.d, {
                          name: "pause"
                        }) : (0, Dp.jsx)(fp.d, {
                          name: "play"
                        }), " "]
                      }), (0, Dp.jsx)(qp.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Dp.jsxs)(gc.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        wi("replaySkipForward")
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsxs)("span", {
                        children: [" ", (0, Dp.jsx)(fp.d, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Dp.jsx)(qp.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Dp.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Dp.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Dp.jsxs)(gc.o, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        wi("replayRecordKeyframe")
                      },
                      disabled: !Ep,
                      children: [(0, Dp.jsx)(qp.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Dp.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Dp.jsx)(DS, {
                      disabled: !Ep
                    }), Fp && (0, Dp.jsx)(gc.S, {
                      className: "ReplayViewerActionButton",
                      onClick: Yi,
                      disabled: !Ep,
                      children: (0, Dp.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Dp.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Dp.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Dp.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Dp.jsx)(gc.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          wi("replaySpeedDown")
                        },
                        disabled: !Ep || (0, eI.f)(Bp),
                        children: (0, Dp.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Dp.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Bp, "\xd7"]
                      }), (0, Dp.jsx)(gc.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          wi("replaySpeedUp")
                        },
                        disabled: !Ep || (0, eI.d)(Bp),
                        children: (0, Dp.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Dp.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Dp.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Dp.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Dp.jsxs)(gc.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          ti("replayTimelineZoomOut")
                        },
                        disabled: !Ep || vp <= CI[0],
                        children: [(0, Dp.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Dp.jsx)(qp.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Dp.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: JI(vp)
                      }), (0, Dp.jsxs)(gc.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          ti("replayTimelineZoomIn")
                        },
                        disabled: !Ep || vp >= CI[CI.length - 1],
                        children: [(0, Dp.jsx)("span", {
                          children: " + "
                        }), (0, Dp.jsx)(qp.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Dp.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Ep && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var eS = cp(1349);

    function uS() {
      const [, pp] = (0, op.useState)(0);
      return (0, Lp.f)("replayViewer|uiVisibilityChanged", (() => {
          pp((pp => pp + 1))
        })), (0, Lp.f)("replayViewer|replayLoaded", (() => {
          pp((pp => pp + 1))
        })),
        function() {
          if (!(0, eS.e)()) return {};
          const pp = {
              [xS.d]: "true"
            },
            ip = (0, LS.b)();
          for (const {
              group: cp,
              dataAttr: Op
            }
            of xS.h) Op && !ip[cp] && (pp[Op] = "true");
          return pp
        }()
    }
    var jS = cp(34427),
      kS = cp(2097),
      mS = cp(8877),
      RS = cp(8869),
      qS = cp(2106);
    const MS = (0, op.memo)((function() {
      var pp, ip, cp;
      const Op = (0, dp.i)("customButtons");
      (0, op.useEffect)((() => Op ? (Wp.gameBridge.send("bindCustomButtonKeys", Op.filter(mS.f).map((pp => {
        let {
          id: ip,
          keycode: cp
        } = pp;
        return {
          id: ip,
          keycode: cp
        }
      }))), () => {
        Wp.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Op]);
      const Ip = null !== (pp = null === Op || void 0 === Op ? void 0 : Op.filter(mS.f)) && void 0 !== pp ? pp : [],
        Sp = (0, RS.h)(),
        xp = null !== (ip = null === (cp = (0, qS.b)()) || void 0 === cp ? void 0 : cp.hideButtonHints) && void 0 !== ip && ip,
        Lp = "customButton" !== (null === Sp || void 0 === Sp ? void 0 : Sp.kind) || xp ? null : Sp.id,
        Yp = Ip.length > 0,
        Ap = (0, op.useRef)(null);
      return (0, op.useLayoutEffect)((() => {
        if (!Yp) return () => {};
        const pp = Ap.current,
          ip = pp.closest(".InGameUi"),
          cp = () => {
            ip.style.setProperty("--custom-buttons-top", `${pp.offsetTop}px`)
          };
        cp();
        const Op = new ResizeObserver(cp);
        return Op.observe(pp), Op.observe(pp.parentElement), () => {
          Op.disconnect(), ip.style.removeProperty("--custom-buttons-top")
        }
      }), [Yp]), (0, Dp.jsx)("div", {
        ref: Ap,
        className: "" + ((0, Lc.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Ip.map((pp => {
          var ip, cp;
          return (0, Dp.jsx)(CS, {
            button: pp,
            padGlyph: pp.id === Lp && null !== (ip = null === (cp = (0, np.f)()) || void 0 === cp ? void 0 : cp.getBoundButton("actionButton")) && void 0 !== ip ? ip : null
          }, pp.id)
        }))
      })
    }));

    function CS(pp) {
      let {
        button: ip,
        padGlyph: cp
      } = pp;
      const Op = (0, op.useRef)(null),
        Ip = () => {
          null !== Op.current && (Op.current = null, Wp.gameBridge.send("pressCustomButton", {
            id: ip.id,
            down: !1
          }))
        };
      (0, op.useEffect)((() => Ip), []);
      const Sp = Vi(Ip, {
          pressesOnPointerDown: !0
        }),
        xp = pp => {
          Op.current === pp.pointerId && Ip()
        };
      return (0, Dp.jsxs)("div", {
        className: "CustomIcon",
        ...Sp,
        onLostPointerCapture: xp,
        children: [(0, Dp.jsx)(kS.d, {
          icon: ip.icon,
          keyboardHint: (0, mS.e)(ip.keycode),
          padGlyph: cp,
          onPointerDown: pp => {
            try {
              pp.currentTarget.setPointerCapture(pp.pointerId)
            } catch {
              return
            }
            null === Op.current && Wp.gameBridge.send("pressCustomButton", {
              id: ip.id,
              down: !0
            }), Op.current = pp.pointerId
          },
          onPointerUp: xp,
          onPointerCancel: xp,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), ip.description && (0, Dp.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: ip.description
        })]
      })
    }
    var ES = cp(2476),
      XS = cp(249);
    const lS = {
      frame: pp => {
        const ip = requestAnimationFrame((() => {
          pp()
        }));
        return () => {
          cancelAnimationFrame(ip)
        }
      },
      afterFrame: pp => {
        const ip = setTimeout(pp, 0);
        return () => {
          clearTimeout(ip)
        }
      }
    };
    class QS {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XS.b,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lS,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = pp, this.frames = ip, this.onHiddenMount = cp, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (pp(), () => {}) : (ip ? this.waiting.unshift(pp) : this.waiting.push(pp), this.schedule(), () => {
          const ip = this.waiting.indexOf(pp);
          ip >= 0 && (this.waiting.splice(ip, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((pp => {
          for (this.cancelIdle = null; this.waiting.length > 0 && pp.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const pp = this.waiting.shift(),
          ip = !this.shown,
          cp = performance.now();
        try {
          pp()
        } finally {
          ip && this.onHiddenMount(performance.now() - cp), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var pp, ip, cp;
        null === (pp = this.cancelIdle) || void 0 === pp || pp.call(this), this.cancelIdle = null, null === (ip = this.cancelFrame) || void 0 === ip || ip.call(this), this.cancelFrame = null, null === (cp = this.cancelAfterFrame) || void 0 === cp || cp.call(this), this.cancelAfterFrame = null
      }
    }
    const JS = (0, op.createContext)(null);

    function BS(pp) {
      let {
        children: ip,
        first: cp = !1
      } = pp;
      const Op = (0, op.useContext)(JS),
        [Ip, Sp] = (0, op.useState)(null === Op);
      return (0, op.useEffect)((() => {
        if (!Ip && null !== Op) return Op.request((() => {
          Sp(!0)
        }), cp)
      }), [cp, Ip, Op]), Ip ? (0, op.createElement)(op.Fragment, null, ip) : null
    }
    const NS = (0, op.memo)((function(pp) {
        let {
          shown: ip
        } = pp;
        const [cp] = (0, op.useState)((() => new Up.f(ip))), [Ip] = (0, op.useState)((() => ip ? null : new QS(void 0, void 0, (pp => {
          Op.c.noteWorkDuringAdmissionWait(pp)
        }))));
        return (0, op.useLayoutEffect)((() => {
          ip && (null === Ip || void 0 === Ip || Ip.show(), cp.show())
        }), [ip, cp, Ip]), (0, Dp.jsx)(Up.c.Provider, {
          value: cp,
          children: (0, Dp.jsx)(JS.Provider, {
            value: Ip,
            children: (0, Dp.jsx)(TS, {})
          })
        })
      })),
      TS = (0, op.memo)((function() {
        const {
          isUiHidden: pp,
          isUiHiddenByCamera: ip,
          worldPanelHud: cp,
          isTouchScreen: Op
        } = (0, Rp.o)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Ip = (0, Wo.b)(), xp = uS(), Lp = (0, Up.n)(), Yp = (0, op.useRef)(null), Ap = (0, dp.i)("showKillfeed");
        return function() {
            const pp = (0, Up.n)();
            (0, op.useEffect)((() => pp.whenShown(wp)), [pp])
          }(),
          function() {
            const pp = (0, dp.i)("inventoryColourOverride");
            (0, op.useEffect)((() => {
              if (!pp) return;
              const {
                panel: ip,
                slot: cp,
                slotSelected: Op,
                slotUnavailable: op
              } = gp(pp), Ip = document.documentElement.style;
              return Ip.setProperty("--InventoryPanelColour", ip), Ip.setProperty("--InventorySlotColour", cp), Ip.setProperty("--InventorySlotSelectedColour", Op), Ip.setProperty("--InventorySlotUnavailableColour", op), () => {
                Ip.removeProperty("--InventoryPanelColour"), Ip.removeProperty("--InventorySlotColour"), Ip.removeProperty("--InventorySlotSelectedColour"), Ip.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [pp])
          }(), (0, op.useLayoutEffect)((() => Lp.whenShown((() => {
            var pp;
            null === (pp = Yp.current) || void 0 === pp || pp.classList.remove("PreMounted")
          }))), [Lp]), (0, Dp.jsxs)(Dp.Fragment, {
            children: [(0, Dp.jsxs)("div", {
              ref: Yp,
              className: Sp()("InGameUi", {
                PreMounted: !Lp.shown,
                Hidden: pp,
                HiddenByCamera: ip,
                HiddenByWorldPanel: null !== cp,
                WorldPanelTouchControl: "touchControls" === cp
              }),
              ...xp,
              children: [(0, Dp.jsxs)(BS, {
                children: [(0, Dp.jsx)(YO.d, {}), (0, Dp.jsx)(yO, {})]
              }), (0, Dp.jsx)(Up.j, {
                children: (0, Dp.jsx)(UO, {})
              }), (0, Dp.jsxs)(BS, {
                children: [(0, Dp.jsx)(ho, {}), (0, Dp.jsx)(Zo, {}), Op && (0, Dp.jsx)(so, {})]
              }), (0, Dp.jsxs)(BS, {
                children: [(0, Dp.jsx)(Bc, {}), (0, Dp.jsx)(MO.c, {}), (0, Dp.jsx)(BO, {})]
              }), (0, Dp.jsx)(Up.j, {
                children: (0, Dp.jsx)(LO, {})
              }), (0, Dp.jsxs)(BS, {
                children: [(0, Dp.jsx)(go.d, {}), (0, Dp.jsx)(HS, {})]
              }), (0, Dp.jsxs)(BS, {
                children: [(0, Dp.jsx)(YI.e, {}), (0, Dp.jsx)(DI.i, {})]
              }), (0, Dp.jsx)(BS, {
                children: (0, Dp.jsx)(Tc.k, {})
              }), (0, Dp.jsx)(BS, {
                children: (0, Dp.jsx)(gS, {
                  showChat: Ip
                })
              }), (0, Dp.jsxs)(BS, {
                children: [(0, Dp.jsx)(PI, {}), (0, Dp.jsx)(Fo, {})]
              }), (0, Dp.jsxs)("div", {
                className: Sp()("RightElements", {
                  RightElementsTouchscreen: Op
                }),
                "data-camera-keeper-host": "",
                children: [(0, Dp.jsxs)("div", {
                  className: nO.l,
                  "data-holds-camera-keeper": "",
                  children: [(0, Dp.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Dp.jsx)(BS, {
                      children: (0, Dp.jsx)(Mo.e, {})
                    }), (0, Dp.jsxs)(BS, {
                      children: [(0, Dp.jsx)(bp, {}), (0, Dp.jsx)(ZO.e, {})]
                    }), Lc.featureFlags.useSocialFeatures && (0, Dp.jsx)(Up.j, {
                      children: (0, Dp.jsx)(zO.c, {
                        placement: "inGame"
                      })
                    }), Lc.featureFlags.useSocialFeatures && (0, Dp.jsx)(Up.j, {
                      children: (0, Dp.jsx)(Lo, {})
                    }), Ap && (0, Dp.jsx)(Up.j, {
                      children: (0, Dp.jsx)(qO, {})
                    }), (0, Dp.jsx)(BS, {
                      children: (0, Dp.jsx)(jS.c, {})
                    })]
                  }), Lc.featureFlags.useSocialFeatures && (0, Dp.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Dp.jsx)(BS, {
                      children: (0, Dp.jsx)(fo.b, {})
                    })
                  })]
                }), (0, Dp.jsxs)(BS, {
                  children: [(0, Dp.jsx)(Tc.d, {
                    placement: "topRight"
                  }), (0, Dp.jsx)(GS, {})]
                })]
              }), (0, Dp.jsx)("div", {
                className: "LeftCentre",
                children: (0, Dp.jsx)(BS, {
                  children: (0, Dp.jsx)(MS, {})
                })
              }), (0, Dp.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Op ? "" : void 0,
                children: [(0, Dp.jsx)(Up.j, {
                  children: (0, Dp.jsx)(lp, {})
                }), (0, Dp.jsx)(BS, {
                  children: (0, Dp.jsx)(bS, {})
                }), (0, Dp.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Op ? "" : void 0,
                  children: [(0, Dp.jsx)("div", {
                    className: Sp()("BottomLeftElements", {
                      Touch: Op
                    }),
                    children: (0, Dp.jsxs)(BS, {
                      children: [(0, Dp.jsx)(Ao, {}), !Op && (0, Dp.jsx)(ES.d, {})]
                    })
                  }), (0, Dp.jsx)(BS, {
                    children: (0, Dp.jsx)(FS, {})
                  }), (0, Dp.jsx)(BS, {
                    children: (0, Dp.jsx)(TO, {
                      isTouchScreen: Op
                    })
                  })]
                })]
              }), (0, Dp.jsx)("div", {
                className: "MiddleLeft"
              }), Op && (0, Dp.jsx)(BS, {
                children: (0, Dp.jsx)(vc, {})
              }), (0, Dp.jsx)("div", {
                className: "CameraFadeHost",
                ref: mi.f
              })]
            }), (0, Dp.jsx)(Up.j, {
              children: (0, Dp.jsx)(HI.c, {})
            }), (0, Dp.jsx)(Up.j, {
              children: (0, Dp.jsx)(xI, {})
            }), (0, Dp.jsx)(BS, {
              first: !0,
              children: (0, Dp.jsx)(Po.b, {})
            }), (0, Dp.jsx)(Up.j, {
              children: (0, Dp.jsx)(fS, {})
            })]
          })
      }));

    function fS() {
      return (0, op.useEffect)((() => {
        const pp = setTimeout((() => {
          (0, ep.k)()
        }), 0);
        return () => {
          clearTimeout(pp), ep.m.IH(!1)
        }
      }), []), null
    }
    const bS = (0, op.memo)((function() {
        const pp = (0, Lp.i)("aimingOverlay", "none");
        (0, tp.b)();
        const ip = (0, dp.m)("middleTextUpper"),
          cp = (0, dp.m)("middleTextLower");
        return (0, Dp.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === pp ? {
            visibility: "hidden"
          } : {},
          children: [(0, Dp.jsx)(nS, {
            text: ip,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: hS
          }), (0, Dp.jsx)(nS, {
            text: cp,
            className: "MiddleText",
            maxHeightFraction: aS
          })]
        })
      })),
      hS = .3,
      aS = .2;

    function nS(pp) {
      let {
        text: ip,
        className: cp,
        maxHeightFraction: Op
      } = pp;
      const Ip = (0, op.useRef)(null),
        Sp = (0, op.useRef)(null);
      return function(pp, ip, cp, Op) {
        (0, op.useLayoutEffect)((() => {
          const Op = pp.current,
            op = ip.current;
          if (!Op || !op) return;
          let Ip = -1,
            Sp = -1;
          const xp = pp => (op.style.setProperty("zoom", String(pp)), Op.getBoundingClientRect().height),
            Lp = () => {
              const pp = document.documentElement.clientHeight * cp;
              let ip = 1;
              if (xp(1) > pp) {
                let cp = .5,
                  Op = 1;
                for (let ip = 0; ip < 6; ip++) {
                  const ip = (cp + Op) / 2;
                  xp(ip) <= pp ? cp = ip : Op = ip
                }
                ip = cp
              }
              Sp = xp(ip), Ip = Op.getBoundingClientRect().width
            };
          Lp();
          let Yp = 0;
          const Dp = () => {
              cancelAnimationFrame(Yp), Yp = requestAnimationFrame(Lp)
            },
            Ap = new ResizeObserver((() => {
              const {
                width: pp,
                height: ip
              } = Op.getBoundingClientRect();
              pp === Ip && ip === Sp || Dp()
            }));
          return Ap.observe(Op), window.addEventListener("resize", Dp), () => {
            Ap.disconnect(), window.removeEventListener("resize", Dp), cancelAnimationFrame(Yp), op.style.removeProperty("zoom")
          }
        }), [pp, ip, cp, Op])
      }(Ip, Sp, Op, ip.content), (0, Dp.jsx)("div", {
        ref: Ip,
        className: "MiddleTextFit",
        children: (0, Dp.jsx)(AI, {
          ref: Sp,
          text: ip,
          className: cp
        })
      })
    }
    const FS = (0, op.memo)((function() {
        const pp = (0, Lp.i)("aimingOverlay", "none");
        (0, tp.b)();
        const ip = (0, dp.i)("useInventory");
        return (0, Dp.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === pp ? {
            visibility: "hidden"
          } : {},
          children: [(0, Dp.jsx)(Ap, {}), (0, Dp.jsx)(Tc.d, {}), (0, Dp.jsx)(fc, {}), (0, Dp.jsx)(Up.j, {
            children: (0, Dp.jsx)(No, {})
          }), (0, Dp.jsxs)("div", {
            className: "HotBarRow",
            children: [ip ? (0, Dp.jsx)(ap.c, {}) : (0, Dp.jsx)(ap.d, {}), (0, Dp.jsx)(Fp, {})]
          })]
        })
      })),
      gS = (0, op.memo)((function(pp) {
        let {
          showChat: ip
        } = pp;
        const {
          t: cp
        } = (0, Xp.H)(), {
          clientEscMenuOptions: Op,
          isTouchScreen: Ip
        } = (0, Rp.o)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, tp.b)();
        const {
          userContext: xp,
          isUserContextUpdating: Lp
        } = (0, vp.b)(), Yp = (0, dp.i)("hideCoordinates"), Ap = (0, dp.i)("customVariationTitle"), {
          requestedGameNameWithVariation: Wp,
          gameNameWithVariation: yp,
          lobbyName: Up,
          shownLobbyName: wp
        } = (0, mp.g)("connectedGame"), ep = (0, Pp.c)(Wp, Up, !1), [jp, kp] = (0, op.useState)(null), qp = (0, Eo.n)(yp || Wp || ""), Mp = Ap || qp || "";
        (0, op.useEffect)((() => {
          Lp || KO.b.getFavouriteLobbies(xp).then((pp => {
            console.log("Got favourite lobbies", pp), kp(pp)
          }))
        }), [Lp, xp]);
        const Cp = (0, op.useRef)(null);
        return (0, op.useLayoutEffect)((() => {
          const pp = Cp.current,
            ip = document.documentElement,
            cp = new ResizeObserver((() => {
              ip.style.setProperty("--InGameHeaderRowsHeight", `${pp.offsetHeight}px`)
            }));
          return cp.observe(pp), () => {
            cp.disconnect(), ip.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), rO(Cp), (0, Dp.jsxs)(Dp.Fragment, {
          children: [(0, Dp.jsxs)("div", {
            className: Sp()(nO.h, {
              Touchscreen: Ip
            }),
            ref: Cp,
            children: [(0, Dp.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Dp.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: pp => {
                  pp.stopPropagation(), pp.preventDefault()
                },
                onClick: () => {
                  Rp.c.set({
                    openEverythingMenuName: Hp.n.SETTINGS
                  })
                },
                children: [(0, Dp.jsx)(Co.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Dp.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Dp.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === ep && (0, Dp.jsx)(Co.c, {}), null !== ep && (0, Dp.jsxs)(Dp.Fragment, {
                  children: [ep, Mp && ` ${Mp}`]
                })]
              }), (0, Dp.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Dp.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: wp
              }), (0, Xo.G)(Up) && (0, Dp.jsx)(Tp.f, {
                tooltipInner: (0, Dp.jsx)("div", {
                  children: cp(null !== jp && jp.includes(Up) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Dp.jsx)("div", {
                  children: (0, Dp.jsx)(gc.x, {
                    isLiked: null !== jp && jp.includes(Up),
                    onClick: () => {
                      try {
                        if (!jp) return;
                        jp.includes(Up) ? (KO.b.unfavouriteLobby(xp, Up).catch((pp => {
                          console.error("Failed to favourite lobby", pp)
                        })), kp(jp.filter((pp => pp !== Up)))) : (KO.b.favouriteLobby(xp, Up).catch((pp => {
                          console.error("Failed to favourite lobby", pp)
                        })), kp([...jp, Up]))
                      } catch (pp) {
                        console.error("Failed to like lobby", pp)
                      }
                    },
                    isLoading: null === jp
                  })
                })
              }), (0, Dp.jsx)(wI, {})]
            }), (0, Dp.jsx)(jo, {
              show: Op.showFPS
            }), !Yp && Op.showCoordinates && (0, Dp.jsx)(Ro, {}), !Yp && Op.showChunkCoordinates && (0, Dp.jsx)(qo, {}), (0, Dp.jsx)(WI, {})]
          }), (0, Dp.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Dp.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: ip && (0, Dp.jsx)(Zp.d, {})
            })
          })]
        })
      })),
      GS = (0, op.memo)((function() {
        (0, tp.b)();
        const pp = (0, dp.m)("RightInfoText"),
          [ip, cp] = (0, op.useState)(null);
        return (0, di.k)(ip, ".RightElements"), pp.hasText ? (0, Dp.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Dp.jsx)(AI, {
            ref: cp,
            text: pp,
            className: "RightInfoDiv",
            children: (0, Dp.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Dp.jsx)(Yp.e, {
                text: pp.content
              })
            })
          })
        }) : null
      }))
  },
  4956: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp
    });
    var Op = cp(62),
      op = cp(322),
      Ip = cp(1941),
      Sp = cp(1112);

    function xp(pp) {
      let {
        text: ip
      } = pp;
      const cp = [];
      let xp = "";
      return (0, op.nc)(ip).forEach(((pp, ip) => {
        if ("string" === typeof pp || !(0, Ip.f)(pp.icon)) return void(xp += "string" === typeof pp ? pp : pp.icon);
        const op = Math.max(0, xp.trimEnd().search(/\S{1,12}$/));
        cp.push((0, Sp.jsxs)(Op.Fragment, {
          children: [xp.slice(0, op), (0, Sp.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [xp.slice(op), (0, Sp.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": pp.icon,
              children: (0, Sp.jsx)(Ip.d, {
                itemName: pp.icon,
                amount: 0
              })
            })]
          })]
        }, ip)), xp = ""
      })), cp.push(xp), (0, Sp.jsx)(Sp.Fragment, {
        children: cp
      })
    }
  },
  36724: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      h: () => Dp,
      i: () => Ap
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1941),
      xp = cp(1112);
    const Lp = 350;
    let Yp = 0;

    function Dp() {
      return Yp += 1, Yp
    }

    function Ap(pp, ip) {
      let cp = 0;
      for (const Op of pp) "ingredient" !== Op.kind && Op.eL === ip && (cp += Op.amount);
      return cp > 0 ? {
        idx: ip,
        amount: cp
      } : null
    }

    function Pp(pp) {
      var ip, cp;
      let {
        anim: op,
        onComplete: Yp
      } = pp;
      const Dp = null !== (ip = op.delayMs) && void 0 !== ip ? ip : 0,
        Ap = null !== (cp = op.durationMs) && void 0 !== cp ? cp : Lp,
        [Pp, Wp] = (0, Op.useState)(op.from),
        [yp, Up] = (0, Op.useState)(0 === Dp),
        [wp, vp] = (0, Op.useState)(!1),
        tp = (0, Op.useRef)(!1);
      return (0, Op.useEffect)((() => {
        let pp, ip;
        const cp = () => {
            tp.current = !0, Up(!0), pp = requestAnimationFrame((() => {
              ip = requestAnimationFrame((() => {
                Wp({
                  x: op.to.x,
                  y: op.to.y
                }), vp(!0)
              }))
            }))
          },
          Op = tp.current ? 0 : Dp;
        let Ip;
        Op > 0 ? Ip = setTimeout(cp, Op) : cp();
        const Sp = setTimeout((() => {
          Yp(op.id)
        }), Op + Ap + 50);
        return () => {
          clearTimeout(Ip), cancelAnimationFrame(pp), cancelAnimationFrame(ip), clearTimeout(Sp)
        }
      }), [op.id, op.to.x, op.to.y, Yp, Dp, Ap]), (0, xp.jsx)("div", {
        className: Ip()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === op.kind,
          Waiting: !yp,
          Arrived: wp
        }),
        style: {
          left: Pp.x,
          top: Pp.y,
          "--fly-duration": `${Ap}ms`
        },
        children: (0, xp.jsx)(Sp.d, {
          itemName: op.itemName,
          amount: op.amount
        })
      })
    }
  },
  36705: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Np,
      d: () => bp
    });
    var Op = cp(62),
      op = cp(3107),
      Ip = cp(6724),
      Sp = cp(2097),
      xp = cp(2492),
      Lp = cp(8961),
      Yp = cp(337),
      Dp = cp(34),
      Ap = cp(1476),
      Pp = cp(44),
      Wp = cp(1049),
      yp = cp.n(Wp),
      Up = cp(322),
      wp = cp(36713),
      vp = cp(1929),
      tp = cp(2004),
      Hp = cp(8826),
      dp = cp(1112);

    function ep(pp) {
      var ip, cp;
      let {
        slotIdx: Ip
      } = pp;
      const Sp = (0, tp.f)("hotbar", (pp => {
          var ip;
          return null !== (ip = pp.items[Ip]) && void 0 !== ip ? ip : null
        })),
        Lp = (0, tp.f)("hotbar", (pp => pp.ammo)),
        [Dp, Ap] = (0, Op.useState)(!1),
        Pp = (0, Op.useRef)(null),
        [Wp, Up] = (0, Op.useState)(null),
        [wp, ep] = (0, Op.useState)(null),
        jp = (0, xp.i)("maxAuraLevel"),
        kp = (0, op.c)(),
        mp = (0, Op.useCallback)((() => {
          if (clearTimeout(Pp.current), Sp) {
            var pp, ip, cp, Op;
            const Lp = Sp.displayName,
              Dp = [],
              Ap = Array.isArray(Lp) ? Lp : [Lp],
              Pp = {
                fontStyle: null !== (pp = Sp.attributes.customAttributes) && void 0 !== pp && pp.author ? "italic" : "normal"
              };
            for (const pp of Ap) pp.str ? Dp.push(pp) : Dp.push({
              str: pp,
              style: Pp
            });
            if (null !== (ip = Sp.attributes.customAttributes) && void 0 !== ip && ip.enchantments) {
              Dp.push(" ");
              const pp = Object.entries(Sp.attributes.customAttributes.enchantments).sort(((pp, ip) => ip[1] - pp[1])),
                ip = Sp.attributes.customAttributes.enchantmentData;
              for (const [cp, Op] of pp) {
                var op, Ip;
                const pp = null !== (op = null === ip || void 0 === ip || null === (Ip = ip[cp]) || void 0 === Ip ? void 0 : Ip.icon) && void 0 !== op ? op : `${cp} Enchantment`;
                var xp;
                if (Op < 4)
                  for (let ip = 0; ip < Op; ip++) Dp.push({
                    icon: pp,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Dp.push({
                  icon: pp,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Dp.push(null !== (xp = (0, Yp.V)(Op)) && void 0 !== xp ? xp : Op.toString())
              }
            }
            Up(Dp), ep(null !== (cp = null === (Op = Sp.attributes.customAttributes) || void 0 === Op ? void 0 : Op.enchantmentTier) && void 0 !== cp ? cp : null)
          } else Up(null), ep(null);
          Ap(!0), kp();
          const Lp = null === Sp || void 0 === Sp ? void 0 : Sp.attributes.customAttributes;
          void 0 === (null === Lp || void 0 === Lp ? void 0 : Lp.shotsLeft) && (Pp.current = setTimeout((() => {
            Ap(!1)
          }), 2e3))
        }), [null === Sp || void 0 === Sp ? void 0 : Sp.name, Ip, null === Sp || void 0 === Sp ? void 0 : Sp.instance, null === Sp || void 0 === Sp ? void 0 : Sp.displayName]);
      (0, Op.useEffect)((() => (mp(), () => {
        clearTimeout(Pp.current), Ap(!1)
      })), [null === Sp || void 0 === Sp ? void 0 : Sp.name, Ip, null === Sp || void 0 === Sp ? void 0 : Sp.instance, mp]);
      const Rp = null === Sp || void 0 === Sp || null === (ip = Sp.attributes.customAttributes) || void 0 === ip ? void 0 : ip.shotsLeft,
        qp = void 0 === Rp ? null : (0, dp.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${Rp}|${Sp.requiresAmmo?`${Lp}x${Sp.clipSize}`:Sp.clipSize}`
        }),
        Mp = (0, Hp.l)();
      return (0, dp.jsx)(dp.Fragment, {
        children: Dp && Sp && !Mp.showing ? (0, dp.jsxs)("div", {
          className: yp()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === jp,
            Enchanted: null !== wp
          }),
          style: {
            "--enchantmentColour": null !== (cp = Yp.lb[wp]) && void 0 !== cp ? cp : Yp.lb.None,
            "--duration": wp ? (0, Yp.ib)(wp) + "s" : void 0
          },
          children: [wp && (0, dp.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, dp.jsx)(vp.e, {
              text: Wp
            }), qp]
          }), (0, dp.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, dp.jsx)(vp.e, {
              text: Wp
            }), qp]
          })]
        }) : null
      })
    }
    var jp = cp(36724),
      kp = cp(25),
      mp = cp(1956),
      Rp = cp(640),
      qp = cp(2499),
      Mp = cp(3511),
      Cp = cp(3520);
    var Ep = cp(1139),
      Xp = cp(1133),
      lp = cp(2543);

    function Qp() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Jp = cp(9024),
      Bp = cp(1497);
    const Np = (0, Op.memo)((function() {
      const [pp, ip] = (0, Op.useState)(0), cp = (0, xp.i)("useFullInventory"), Sp = (0, xp.i)("highlightedHotbarSlots"), {
        isTouchScreen: Lp,
        openInGameMenuName: Yp
      } = (0, kp.o)(["isTouchScreen", "openInGameMenuName"]), Pp = null !== Yp && "inventory" !== Yp, Wp = (0, tp.g)("fullInventory") && "inventory" === Yp, Up = function() {
        const pp = (0, Ep.m)(((pp, ip) => `${pp}:${(0,Xp.d)(pp,ip)?"portrait":"landscape"}`)),
          [ip, cp] = (0, Op.useState)(Qp);
        return (0, Op.useLayoutEffect)((() => {
          cp(Qp())
        }), [pp]), (0, Ap.f)(lp.e, (() => {
          cp(Qp())
        })), ip
      }(), vp = Lp && !Up;
      ! function(pp, ip, cp) {
        (0, Op.useLayoutEffect)((() => {
          const Op = document.documentElement.classList;
          return pp && (Op.add("TouchHotbar"), Op.toggle("TouchHotbarKeysAbove", ip), Op.toggle("TouchHotbarHasBag", cp)), (0, Mp.j)(), Dp.m.GA(Cp.e), () => {
            Op.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Mp.j)(), Dp.m.GA(Cp.e)
          }
        }), [pp, ip, cp])
      }(Lp, vp, cp);
      const [Hp, qp] = (0, Ip.d)("changedHotbarUsingNumkeys", !0), Jp = (0, tp.f)("hotbar", (pp => pp.selectedSlot)), Bp = null !== Jp && void 0 !== Jp ? Jp : pp, Np = (0, op.c)(), hp = (0, Op.useRef)(null), ap = (0, Ap.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Ap.f)("inventoryDraggedItemUpdated", (pp => {
        hp.current = pp, Np()
      })), (0, tp.b)("hotbarScrolled", (pp => {
        null === Jp && gp(pp)
      })), (0, tp.b)("hotbarSlotRequested", (pp => {
        Fp(pp), qp(!1)
      })), (0, tp.b)("numberKeyPressed", (() => {
        qp(!1)
      })), (0, tp.b)("hotbarDropRequested", (pp => {
        const ip = mp.gameBridge.latest("hotbar").items[Bp];
        if (ip) {
          var cp;
          const Op = pp && null !== (cp = ip.amount) && void 0 !== cp ? cp : 1;
          mp.gameBridge.send("removeInventoryItem", {
            slot: Bp,
            amount: Op,
            drop: !0
          })
        }
      }));
      const Fp = pp => {
          mp.gameBridge.send("selectHotbarSlot", pp), ip(pp)
        },
        gp = pp => {
          Fp((Bp + pp + Rp.l) % Rp.l)
        };
      let Gp, rp = null,
        Zp = null,
        zp = pp => pp => {},
        sp = pp => ip => {
          Fp(pp)
        },
        Kp = pp => pp => {},
        Vp = [];
      if (Wp) {
        var ii;
        const pp = hp.current;
        if (null === pp || void 0 === pp || !pp.setHovered) return (0, dp.jsx)("div", {
          className: yp()("HotBarContainer", {
            Touch: Lp,
            KeysAbove: vp
          }),
          children: (0, dp.jsx)("div", {
            className: "HotBar"
          })
        });
        rp = pp.draggedInfo, Zp = pp.specialItemInfo, zp = pp.setHovered, sp = pp.pointerDown, Kp = pp.pointerUp, Gp = pp.variation, Vp = null !== (ii = pp.craftFlyAnims) && void 0 !== ii ? ii : []
      }
      return (0, dp.jsxs)("div", {
        className: yp()("HotBarContainer", {
          Touch: Lp,
          PopupOpen: Lp && Pp,
          KeysAbove: vp
        }),
        children: [(0, dp.jsxs)("div", {
          className: yp()("HotBar", {
            HoverDisabled: ap
          }),
          children: [Lp && (0, dp.jsxs)(dp.Fragment, {
            children: [(0, dp.jsx)(fp, {
              useFullInventory: cp,
              inventoryOpen: Wp
            }), (0, dp.jsx)(Tp, {
              direction: "Previous",
              onPress: () => {
                gp(-1)
              }
            })]
          }), !Lp && (0, dp.jsxs)(dp.Fragment, {
            children: [(0, dp.jsx)(bp, {}), (0, dp.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, dp.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((pp, ip) => (0, dp.jsx)(wp.e, {
              idx: ip,
              draggedInfo: rp,
              specialItemInfo: Zp,
              craftFlyHoldbackInfo: (0, jp.i)(Vp, ip),
              setHovered: zp(ip),
              pointerDown: sp(ip),
              pointerUp: Kp(ip),
              variation: Gp,
              isSelected: ip === Bp,
              hotbarHighlighted: !0 === (null === Sp || void 0 === Sp ? void 0 : Sp.includes(ip)),
              hoverDisabled: ap,
              showNumber: Hp && !Lp
            }, ip)))
          }), Lp && (0, dp.jsx)(Tp, {
            direction: "Next",
            onPress: () => {
              gp(1)
            }
          }), !Lp && (0, dp.jsxs)(dp.Fragment, {
            children: [(0, dp.jsx)("div", {
              className: "HotBarFiller"
            }), (0, dp.jsx)("div", {
              className: yp()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !cp
              }),
              onPointerDown: () => {
                Dp.m.GA("toggleMenu", "inventory")
              },
              children: (0, dp.jsx)(np, {})
            })]
          })]
        }), (0, dp.jsx)(ep, {
          slotIdx: Bp
        })]
      })
    }));

    function Tp(pp) {
      let {
        direction: ip,
        onPress: cp
      } = pp;
      return (0, dp.jsx)("div", {
        className: yp()("HotBarArrow", ip),
        ...Bp.f,
        children: (0, dp.jsx)(Sp.d, {
          icon: "Previous" === ip ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: cp
        })
      })
    }
    const fp = (0, Op.memo)((function(pp) {
        let {
          useFullInventory: ip,
          inventoryOpen: cp
        } = pp;
        const op = (0, xp.i)("maxAuraLevel"),
          Ip = (0, Op.useRef)(null),
          Sp = (0, Lp.d)();
        return function(pp, ip, cp) {
          (0, Op.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", ip), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [ip]), (0, Op.useLayoutEffect)((() => {
            const ip = pp.current.closest(".BottomMiddleElements");
            return ip.classList.toggle("TouchInventoryOpen", cp), () => {
              ip.classList.remove("TouchInventoryOpen")
            }
          }), [pp, cp])
        }(Ip, Sp, cp), (0, Jp.d)(Ip, Sp, cp), (0, dp.jsxs)("div", {
          ref: Ip,
          className: yp()("TouchInventoryKeys", {
            NoAuraBar: 0 === op,
            InventoryOpen: cp
          }),
          children: [(0, dp.jsx)(bp, {
            touchKey: !0
          }), (0, dp.jsx)("div", {
            className: yp()("TouchInventoryKey BagKey", {
              Hidden: !ip
            }),
            ...Bp.f,
            children: (0, dp.jsx)(np, {
              touchKey: !0
            })
          })]
        })
      })),
      bp = (0, Op.memo)((function(pp) {
        let {
          touchKey: ip = !1
        } = pp;
        const cp = (0, Lp.d)();
        return (0, dp.jsx)("div", {
          className: ip ? yp()("TouchInventoryKey ShopKey", {
            Hidden: !cp
          }) : yp()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !cp
          }),
          ...ip ? Bp.f : {},
          children: (0, dp.jsx)(Sp.d, {
            icon: (0, Yp.Yb)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              cp && kp.c.set({
                openEverythingMenuName: Up.n.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function hp(pp) {
      let {
        player: ip
      } = pp;
      return ip.some((pp => null !== pp && Yp.Ic.includes(pp.name)))
    }

    function ap(pp) {
      pp.creative || Pp.h.getItem("LogInInventoryRedDotTutorialComplete") || (hp(pp) ? (Dp.m.GA("RedDotOpenInventoryIcon", !0), Dp.m.GA("TouchTutorialOpenInventoryIcon", !0)) : (Dp.m.GA("RedDotOpenInventoryIcon", !1), Dp.m.GA("TouchTutorialOpenInventoryIcon", !1)))
    }
    const np = (0, Op.memo)((function(pp) {
      let {
        touchKey: ip = !1
      } = pp;
      (0, Op.useEffect)((() => {
        ap(mp.gameBridge.latest("inventory"))
      }), []), (0, tp.b)("inventory", ap);
      const cp = (0, qp.n)();
      return (0, Ap.f)("toggleMenu", (pp => {
        cp.shown && (null !== pp && void 0 !== pp && pp.startsWith("inventory") && hp(mp.gameBridge.latest("inventory")) ? (Pp.h.setItem("LogInInventoryRedDotTutorialComplete", !0), Dp.m.GA("RedDotOpenInventoryIcon", !1), Dp.m.GA("TouchTutorialOpenInventoryIcon", !1)) : "shop" === pp && Dp.m.GA("showShopTouchTutorial", !1))
      })), ip ? (0, dp.jsx)(Sp.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          Dp.m.GA("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, dp.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Dp.m.GA("toggleMenu", "inventory")
        },
        children: (0, dp.jsx)(Sp.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: pp => {
            Dp.m.GA("toggleMenu", "inventory"), pp.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36713: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => wp,
      h: () => yp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1948),
      xp = cp(1941),
      Lp = cp(1956),
      Yp = cp(2004),
      Dp = cp(36718),
      Ap = cp(34443),
      Pp = cp(1419),
      Wp = cp(1112);
    const yp = (pp, ip, cp) => {
      let Op = ip,
        op = !1;
      for (const Ip of cp)(null === Ip || void 0 === Ip ? void 0 : Ip.idx) === pp && (op = !0, Op > 0 && (Op -= Ip.amount));
      return {
        displayedAmt: Op,
        shown: !op || Op > 0
      }
    };
    const Up = pp => {
        let {
          idx: ip
        } = pp;
        return (0, Pp.r)() ? null : (0, Wp.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: ip < 9 ? ip + 1 : 0
        })
      },
      wp = (0, Op.memo)((function(pp) {
        var ip, cp, Op;
        let {
          idx: op,
          setHovered: Pp,
          pointerDown: wp,
          pointerUp: vp,
          draggedInfo: tp,
          specialItemInfo: Hp,
          craftFlyHoldbackInfo: dp,
          defaultIconB64: ep = null,
          variation: jp,
          isSelected: kp = !1,
          hotbarHighlighted: mp = !1,
          hoverDisabled: Rp = !1,
          showNumber: qp = !1,
          showNewDot: Mp = !1
        } = pp;
        const Cp = (0, Yp.f)("inventory", (pp => op === Dp.f ? null : (0, Ap.j)(pp, op)));
        let Ep, Xp, lp, Qp;
        if (op === Dp.f) Hp && (Ep = Hp.name, lp = Hp.amount, Qp = Hp.attributes);
        else if (Cp) {
          var Jp;
          Ep = Cp.name, Xp = Cp.icon, lp = null !== (Jp = Cp.amount) && void 0 !== Jp ? Jp : 0, Qp = Cp.attributes
        }
        const Bp = null === (ip = Qp) || void 0 === ip || null === (cp = ip.customAttributes) || void 0 === cp ? void 0 : cp.enchantmentTier,
          Np = (0, Sp.i)(Qp),
          {
            displayedAmt: Tp,
            shown: fp
          } = yp(op, lp, [tp, Hp, dp]),
          bp = Ep && fp,
          hp = void 0 !== jp && function(pp, ip) {
            const {
              enchantable: cp,
              salvageable: Op
            } = Lp.gameBridge.latest("stationItems");
            return "Enchanting Table" === pp ? !0 === cp[ip] : "Salvaging Table" === pp && !0 === Op[ip]
          }(jp, Ep);
        return (0, Wp.jsxs)("div", {
          className: Ip()("InvenItem", {
            Highlighted: bp && hp,
            Selected: kp,
            HotbarHighlighted: mp,
            HoverDisabled: Rp
          }),
          onPointerEnter: () => {
            null === Pp || void 0 === Pp || Pp(!0)
          },
          onPointerLeave: () => {
            null === Pp || void 0 === Pp || Pp(!1)
          },
          onPointerDown: wp,
          onPointerUp: vp,
          "data-inven-idx": op,
          children: [bp && (0, Wp.jsx)(xp.d, {
            itemName: null !== (Op = Xp) && void 0 !== Op ? Op : Ep,
            amount: Tp,
            enchantmentTier: Bp,
            bar: Np
          }), bp && Mp && (0, Wp.jsx)("div", {
            className: "InvenItemNewDot"
          }), qp && (0, Wp.jsx)(Up, {
            idx: op
          }), ep && !bp && (0, Wp.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${ep})`
            }
          })]
        })
      }))
  },
  36718: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op,
      f: () => op
    });
    const Op = -1,
      op = -2
  },
  37220: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Rp
    });
    var Op = cp(62),
      op = cp(37227),
      Ip = cp(1929),
      Sp = cp(620),
      xp = cp(34),
      Lp = cp(1049),
      Yp = cp.n(Lp),
      Dp = cp(36743),
      Ap = cp(2674),
      Pp = cp(36751),
      Wp = cp(2706),
      yp = cp(2682),
      Up = cp(3689),
      wp = cp(36758),
      vp = cp(25),
      tp = cp(2063),
      Hp = cp(2429),
      dp = cp(1234),
      ep = cp(5034),
      jp = cp(2004),
      kp = cp(104),
      mp = cp(1112);
    const Rp = (0, Op.memo)((function() {
      const pp = (0, op.b)(),
        ip = (0, jp.g)("players"),
        cp = (0, jp.g)("lobbyLeaderboardRows"),
        xp = (0, jp.g)("hiddenPlayerNames"),
        Lp = (0, Op.useRef)(null),
        [Yp, Dp] = (0, Op.useReducer)((pp => pp + 1), 0);
      return (0, Op.useEffect)((() => (0, tp.e)((() => {
        Dp()
      }))), []), (0, mp.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, mp.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!pp) return (0, mp.jsx)(mp.Fragment, {});
            const Op = [...ip.ids],
              op = {},
              Yp = {};
            for (const pp of Op) {
              var Dp, Ap;
              op[pp] = null === (Dp = cp[pp]) || void 0 === Dp ? void 0 : Dp.colour;
              const ip = null === (Ap = cp[pp]) || void 0 === Ap ? void 0 : Ap.values;
              ip && (Yp[pp] = {
                ...ip
              })
            }
            const Wp = Object.keys(pp);
            Wp.sort(((ip, cp) => pp[ip].sortPriority - pp[cp].sortPriority)), Op.sort(((ip, cp) => {
              if (!Yp[ip] || !Yp[cp]) return 0;
              for (const Op of Wp) {
                const op = Yp[ip][Op],
                  Ip = Yp[cp][Op];
                let Sp = 0;
                if ("string" == typeof op && "string" == typeof Ip ? Sp = op.localeCompare(Ip) : "number" == typeof op && "number" == typeof Ip ? Sp = op - Ip : "number" == typeof op && "string" == typeof Ip ? Sp = 1 : "string" == typeof op && "number" == typeof Ip && (Sp = -1), Sp) return Sp * ("ascending" === pp[Op].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const pp of Op) {
              var yp, Up, wp;
              const {
                name: Op,
                ranks: op,
                cosmetics: Ip
              } = ip.byId[pp], xp = [], Lp = null !== (yp = null === (Up = cp[pp]) || void 0 === Up || null === (wp = Up.tags) || void 0 === wp ? void 0 : wp.flatMap((pp => 0 === pp.length ? pp : [...pp, String.fromCharCode(8198)]))) && void 0 !== yp ? yp : [];
              xp.push(...Lp), xp.push(...(0, dp.z)(op, Op, (null === Ip || void 0 === Ip ? void 0 : Ip.nameColour) === Sp.b || null === Ip || void 0 === Ip ? void 0 : Ip.nameColour)), Yp[pp] ??= {}, Yp[pp].name = xp
            }

            function vp(pp, cp) {
              if (Yp[pp] && void 0 !== Yp[pp][cp]) {
                if ("name" === cp) {
                  const {
                    name: Op,
                    cosmetics: op
                  } = ip.byId[pp];
                  return (0, mp.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [op && (0, mp.jsx)(Hp.c, {
                      cosmetics: op
                    }), " ", (0, mp.jsx)(Ip.e, {
                      text: Yp[pp][cp],
                      friendBadgeFor: (0, tp.g)(Op, xp) ? Op : void 0
                    })]
                  })
                }
                return (0, mp.jsx)(Ip.e, {
                  text: Yp[pp][cp]
                })
              }
              return ""
            }
            const jp = Object.keys(pp).filter((ip => !0 !== pp[ip].hidden)).map((ip => {
              var cp;
              return {
                key: ip,
                header: (0, mp.jsx)(Ip.e, {
                  text: null !== (cp = pp[ip].displayName) && void 0 !== cp ? cp : ""
                })
              }
            }));
            return (0, mp.jsx)("div", {
              ref: Lp,
              className: "LobbyLeaderboard",
              children: (0, mp.jsx)(ep.d, {
                columns: jp,
                rows: Op,
                getRowKey: pp => pp,
                renderRow: cp => {
                  const Op = cp !== ip.localId;
                  return (0, mp.jsx)(qp, {
                    playerId: cp,
                    playerName: ip.byId[cp].name,
                    isOtherPlayer: Op,
                    opensProfileCard: (0, Pp.h)(Op, ip.byId[cp].name, xp),
                    lobbyLeaderboardInfo: pp,
                    getPlayerValue: vp,
                    playerColors: op
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function qp(pp) {
      let {
        playerId: ip,
        playerName: cp,
        isOtherPlayer: op,
        opensProfileCard: Ip,
        lobbyLeaderboardInfo: Sp,
        getPlayerValue: Lp,
        playerColors: tp
      } = pp;
      const Hp = (0, Op.useRef)(null);
      (0, Op.useEffect)((() => () => {
        Ap.e.closeIfOwner(Hp)
      }), []);
      const dp = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            xp.m.GA("OpenReportMenu", {
              playerEId: ip,
              playerName: cp,
              VD: null,
              serverChatMsgId: null
            })
          }
        },
        ep = () => ({
          ...(0, Pp.e)(ip, cp),
          showLocation: !1,
          status: null,
          extraActions: [dp],
          moderationActions: null === cp ? [] : (0, wp.b)(cp),
          friendRequestSource: "leaderboard"
        });
      return (0, mp.jsxs)("tr", {
        ref: Hp,
        "data-pad-focusable": Ip || void 0,
        [Ap.f]: Ip || void 0,
        onClick: Ip ? () => {
          var pp;
          Ap.e.toggle(Hp, {
            ...ep(),
            anchor: null !== (pp = Hp.current.querySelector(".PlayerPfpAndName")) && void 0 !== pp ? pp : Hp.current
          })
        } : void 0,
        onContextMenu: Ip ? pp => {
          (0, Wp.f)(Hp, pp, ep(), vp.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Ip ? pp => {
          (0, yp.d)(pp, (() => (0, Pp.e)(ip, cp).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Sp).map((pp => !0 === Sp[pp].hidden ? null : (0, mp.jsxs)("td", {
          className: Yp()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !op
          }),
          children: [(0, mp.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Lp(ip, pp)
          }), (0, mp.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: tp[ip]
            }
          })]
        }, pp))), op && !Ip && (0, mp.jsx)(Dp.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Hp,
          options: [{
            icon: dp.icon,
            text: dp.text,
            onPointerDown: dp.onClick
          }, ...null === cp || kp.featureFlags.useSocialFeatures ? [] : (0, Up.b)(null, cp)]
        })]
      })
    }
  },
  36758: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp
    });
    var Op = cp(1982),
      op = cp(2514),
      Ip = cp(36761);
    const Sp = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function xp(pp, ip) {
      return async () => function(pp, ip, cp) {
        return null === ip ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : ip.ok ? {
          message: {
            key: Sp[pp.type]
          },
          next: cp
        } : {
          message: {
            fromServer: ip.message
          },
          next: null
        }
      }(pp, await (0, Ip.e)(pp), ip())
    }

    function Lp(pp) {
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
        run: xp({
          type: "ban",
          name: pp
        }, (() => function(pp) {
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
            run: xp({
              type: "unban",
              name: pp
            }, (() => null))
          }
        }(pp)))
      }
    }

    function Yp(pp, ip) {
      if (null === pp) return [];
      const cp = [],
        Op = function(pp, ip) {
          var cp, Op;
          return null !== (cp = null !== (Op = pp.here.find((pp => pp.name === ip))) && void 0 !== Op ? Op : pp.away.find((pp => pp.name === ip))) && void 0 !== cp ? cp : null
        }(pp, ip);
      var Ip, Sp;
      return null !== Op && void 0 !== Op && Op.can.kick && cp.push((Ip = ip, Sp = Op.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: xp({
          type: "kick",
          name: Ip
        }, (() => Sp ? Lp(Ip) : null))
      })), null !== Op && void 0 !== Op && Op.can.ban && cp.push(Lp(ip)), cp.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, op.f)({
            page: "players",
            focusName: ip,
            source: "profile_card"
          })
        }
      }), cp
    }

    function Dp(pp) {
      var ip;
      return Yp(null !== (ip = Op.c.get("lobbyManage")) && void 0 !== ip ? ip : null, pp)
    }
  },
  36761: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      e: () => Lp
    });
    var Op = cp(1505),
      op = cp(1982),
      Ip = cp(1956);
    const Sp = 1e4;
    let xp = 0;

    function Lp(pp) {
      const ip = ++xp;
      return new Promise((cp => {
        const xp = ip => {
            Lp(), clearTimeout(Yp), !1 === (null === ip || void 0 === ip ? void 0 : ip.ok) && (0, Op.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: pp.type
            }), cp(ip)
          },
          Lp = op.c.subscribe("lobbyManage", (pp => {
            const cp = function(pp, ip) {
              var cp;
              return null !== (cp = null === pp || void 0 === pp ? void 0 : pp.results.find((pp => pp.requestId === ip))) && void 0 !== cp ? cp : null
            }(pp, ip);
            null !== cp && xp(cp)
          })),
          Yp = setTimeout((() => {
            xp(null)
          }), Sp);
        Ip.gameBridge.send("lobbyManage", {
          ...pp,
          requestId: ip
        })
      }))
    }
    const Yp = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Dp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lp;
        this.onChange = pp, this.sendAction = ip, this.pending = new Map, this.statuses = new Map
      }
      send(pp, ip, cp) {
        var Op;
        return this.statuses.delete(ip), this.pending.set(ip, (null !== (Op = this.pending.get(ip)) && void 0 !== Op ? Op : 0) + 1), this.sendAction(pp).then((pp => {
          var Op;
          const op = null !== pp && void 0 !== pp ? pp : {
              requestId: -1,
              ok: !1,
              message: Yp
            },
            Ip = (null !== (Op = this.pending.get(ip)) && void 0 !== Op ? Op : 1) - 1;
          Ip > 0 ? this.pending.set(ip, Ip) : this.pending.delete(ip);
          const Sp = !op.ok || op.message.length > 0 ? op.message : null === cp ? null : [cp];
          return null !== Sp && this.statuses.set(ip, {
            ok: op.ok,
            text: Sp,
            until: Date.now() + 4e3
          }), this.onChange(), op
        }))
      }
      show(pp, ip) {
        this.statuses.set(pp, {
          ...ip,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(pp) {
        for (const [ip, cp] of this.statuses) cp.until <= pp && this.statuses.delete(ip)
      }
      nextDeadline() {
        let pp = null;
        for (const cp of this.statuses.values()) {
          var ip;
          pp = Math.min(null !== (ip = pp) && void 0 !== ip ? ip : 1 / 0, cp.until)
        }
        return pp
      }
      statusOf(pp, ip) {
        const cp = this.statuses.get(pp);
        return !cp || cp.until <= ip ? null : {
          ok: cp.ok,
          text: cp.text
        }
      }
      isPending(pp) {
        return this.pending.has(pp)
      }
    }
  },
  4876: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => tp,
      c: () => vp
    });
    var Op = cp(62),
      op = cp(1476),
      Ip = cp(1929),
      Sp = cp(4880),
      xp = cp(1112);
    const Lp = (0, Op.memo)((function(pp) {
      let {
        initialParameters: ip
      } = pp;
      const cp = (0, Op.useRef)(null),
        op = (0, Op.useRef)(null),
        Lp = (0, Op.useRef)(0),
        Yp = (0, Op.useRef)(null),
        Dp = ip.description,
        Ap = ip.Yi,
        {
          scale: Pp,
          rotation: Wp
        } = null !== ip && void 0 !== ip ? ip : {},
        yp = (0, Sp.d)();
      return (0, Op.useEffect)((() => {
        const pp = yp.onFrame((() => {
          const pp = yp.getState();
          if (!pp.isActive || !cp.current || !op.current) return;
          const ip = pp.state;
          if (cp.current.value = ip.progress, ip.clickCount > Lp.current) {
            Lp.current = ip.clickCount;
            const pp = op.current;
            pp.classList.add("pulse"), Yp.current = setTimeout((() => {
              pp.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Yp.current), pp()
        }
      }), [yp]), (0, xp.jsx)(xp.Fragment, {
        children: (0, xp.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Pp && {
              "--scale": Pp
            },
            ...null !== Wp && {
              "--rotation": `${Wp}deg`
            }
          },
          children: [(0, xp.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: cp
          }), (0, xp.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: op,
            children: (0, xp.jsx)(Ip.e, {
              text: [{
                icon: Ap
              }]
            })
          }), (0, xp.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, xp.jsx)(Ip.e, {
              text: Dp
            })
          })]
        })
      })
    }));
    var Yp = cp(1049),
      Dp = cp.n(Yp);
    const Ap = 2 * Math.PI * 90,
      Pp = (0, Op.memo)((function(pp) {
        let {
          initialParameters: ip
        } = pp;
        const cp = (0, Op.useRef)(null),
          op = (0, Op.useRef)(null),
          Lp = (0, Op.useRef)(null),
          Yp = ip.label,
          Pp = ip.icon,
          Wp = ip.Pi,
          {
            scale: yp,
            rotation: Up,
            Wi: wp
          } = null !== ip && void 0 !== ip ? ip : {},
          vp = (0, Sp.d)();
        return (0, Op.useEffect)((() => {
          const pp = vp.onFrame((() => {
            var pp, ip;
            const Op = vp.getState();
            if (!Op.isActive || !op.current) return;
            const Ip = Op.state,
              Sp = null !== (pp = Ip.timeRemaining) && void 0 !== pp ? pp : 0,
              xp = null !== (ip = Ip.Ai) && void 0 !== ip ? ip : 1,
              Yp = Ap * (1 - Sp / xp);
            op.current.style.strokeDashoffset = `${Yp}`, cp.current && (cp.current.style.opacity = Sp > 0 ? "1" : "0"), Lp.current && Wp && (Lp.current.textContent = `${(Sp/1e3).toFixed(1)}s`)
          }));
          return () => {
            pp()
          }
        }), [vp, Wp]), (0, xp.jsxs)("div", {
          className: "QTETimedClick",
          ref: cp,
          style: {
            ...null !== yp && {
              "--scale": yp
            },
            ...null !== Up && {
              "--rotation": `${Up}deg`
            }
          },
          children: [(0, xp.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, xp.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, xp.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, xp.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Ap,
                ref: op
              })]
            }), (0, xp.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, xp.jsx)(Ip.e, {
                text: [{
                  icon: Pp
                }],
                className: Dp()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: wp
                })
              })
            })]
          }), (0, xp.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, xp.jsx)(Ip.e, {
              text: Yp,
              className: "QTETimedClickLabelText"
            }), Wp && (0, xp.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Lp
            })]
          })]
        })
      })),
      Wp = (0, Op.memo)((function(pp) {
        let {
          initialParameters: ip
        } = pp;
        const cp = (0, Op.useRef)(null),
          op = (0, Op.useRef)(null),
          Lp = (0, Op.useRef)(null),
          Yp = (0, Op.useRef)(!1),
          Dp = ip.description,
          Ap = null === ip || void 0 === ip ? void 0 : ip.icon,
          Pp = (0, Sp.d)();
        return (0, Op.useEffect)((() => {
          const pp = Pp.onFrame((() => {
            const pp = Pp.getState();
            if (!pp.isActive) return;
            const ip = pp.state;
            if (cp.current) {
              const pp = 100 * (ip.catchZonePosition - ip.Ui / 2);
              cp.current.style.left = `${pp}%`, cp.current.style.width = 100 * ip.Ui + "%", ip.isCatching !== Yp.current && (Yp.current = ip.isCatching, ip.isCatching ? cp.current.classList.add("catching") : cp.current.classList.remove("catching"))
            }
            op.current && (op.current.style.left = 100 * ip.moverPosition + "%"), Lp.current && (Lp.current.value = ip.progress)
          }));
          return () => {
            pp()
          }
        }), [Pp]), (0, xp.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, xp.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, xp.jsx)(Ip.e, {
              text: Dp
            })
          }), (0, xp.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Lp
          }), (0, xp.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, xp.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: cp
            }), (0, xp.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: op,
              children: (0, xp.jsx)("span", {
                children: Ap && (0, xp.jsx)(Ip.e, {
                  text: [{
                    icon: Ap,
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
    var yp = cp(640);
    const Up = (0, Op.memo)((function(pp) {
        let {
          initialParameters: ip
        } = pp;
        const cp = (0, Op.useRef)(null),
          op = ip.label,
          Lp = ip.qi,
          {
            icon: Yp,
            scale: Dp,
            rotation: Ap
          } = null !== ip && void 0 !== ip ? ip : {},
          Pp = 100 * (.5 - Lp / 2),
          Wp = 100 * Lp,
          Up = (0, Sp.d)();
        return (0, Op.useEffect)((() => {
          const pp = Up.onFrame((() => {
            const pp = Up.getState();
            if (!pp.isActive || !cp.current) return;
            const ip = pp.state;
            cp.current.style.left = 100 * ip.markerPosition + "%"
          }));
          return () => {
            pp()
          }
        }), [Up]), (0, xp.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, yp.G)(Dp) && {
              "--scale": Dp
            },
            ...!(0, yp.G)(Ap) && {
              "--rotation": `${Ap}deg`
            }
          },
          children: [Yp && (0, xp.jsx)(Ip.e, {
            text: [{
              icon: Yp
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, xp.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, xp.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Pp}%`,
                width: `${Wp}%`
              }
            }), (0, xp.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: cp
            })]
          }), (0, xp.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, xp.jsx)(Ip.e, {
              text: op
            })
          })]
        })
      })),
      wp = (0, Op.memo)((function(pp) {
        let {
          initialParameters: ip
        } = pp;
        const cp = (0, Op.useRef)(null),
          [op, Lp] = (0, Op.useState)((() => new Array(ip.Ci).fill("pending"))),
          [Yp, Dp] = (0, Op.useState)((() => {
            const pp = ip.li;
            return (0, yp.G)(pp) || pp <= 0 ? [] : new Array(pp).fill("pending")
          })),
          Ap = ip.label,
          {
            icon: Pp
          } = ip,
          Wp = (0, Op.useRef)(0),
          Up = (0, Op.useRef)(0),
          wp = (0, Op.useRef)([]),
          vp = (0, Sp.d)();
        return (0, Op.useEffect)((() => {
          const pp = vp.onFrame((() => {
            const pp = vp.getState();
            if (!pp.isActive || !cp.current) return;
            const ip = pp.state,
              Op = 30 + 60 * ip.outerCircleProgress;
            if (cp.current.setAttribute("r", String(Op)), !0 === ip.lastClickResult && ip.successes > Wp.current) {
              cp.current.classList.remove("QTERhythmClickOuterCircle--miss"), cp.current.classList.add("QTERhythmClickOuterCircle--hit");
              const pp = setTimeout((() => {
                var pp;
                null === (pp = cp.current) || void 0 === pp || pp.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              wp.current.push(pp)
            } else if (!1 === ip.lastClickResult && ip.misses > Up.current) {
              cp.current.classList.remove("QTERhythmClickOuterCircle--hit"), cp.current.classList.add("QTERhythmClickOuterCircle--miss");
              const pp = setTimeout((() => {
                var pp;
                null === (pp = cp.current) || void 0 === pp || pp.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              wp.current.push(pp)
            }
            ip.successes === Wp.current && ip.misses === Up.current || (Wp.current = ip.successes, Up.current = ip.misses, Lp((pp => {
              const cp = [...pp];
              for (let Op = 0; Op < ip.Ci; Op++) cp[Op] = Op < ip.successes ? "success" : "pending";
              return cp
            })), Dp((pp => {
              if (0 === pp.length) return pp;
              const cp = [...pp];
              for (let Op = 0; Op < cp.length; Op++) cp[Op] = Op < ip.misses ? "miss" : "pending";
              return cp
            })))
          }));
          return () => {
            pp();
            for (const pp of wp.current) clearTimeout(pp);
            wp.current = []
          }
        }), [vp]), (0, xp.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, xp.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: op.map(((pp, ip) => (0, xp.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === pp ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, ip)))
          }), (0, xp.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, xp.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, xp.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, xp.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: cp
              })]
            }), Pp && (0, xp.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, xp.jsx)(Ip.e, {
                text: [{
                  icon: Pp
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Yp.length > 0 && (0, xp.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Yp.map(((pp, ip) => (0, xp.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === pp ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, ip)))
          }), (0, xp.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, xp.jsx)(Ip.e, {
              text: Ap
            })
          })]
        })
      }));

    function vp(pp) {
      let {
        qte: ip
      } = pp;
      switch (ip.type) {
        case "progressBar":
          return (0, xp.jsx)(Lp, {
            initialParameters: ip.parameters
          });
        case "timedClick":
          return (0, xp.jsx)(Pp, {
            initialParameters: ip.parameters
          });
        case "gravityBar":
          return (0, xp.jsx)(Wp, {
            initialParameters: ip.parameters
          });
        case "precisionBar":
          return (0, xp.jsx)(Up, {
            initialParameters: ip.parameters
          });
        case "rhythmClick":
          return (0, xp.jsx)(wp, {
            initialParameters: ip.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const tp = (0, Op.memo)((function() {
      const [pp, ip] = (0, Op.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, op.f)("qteStateUpdated", (pp => {
        ip(pp)
      })), pp.isActive && pp.type ? (0, xp.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, xp.jsx)(vp, {
          qte: pp
        })
      }) : null
    }))
  },
  4880: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      d: () => Lp
    });
    var Op = cp(62),
      op = cp(1317),
      Ip = cp(4882);
    const Sp = {
        getState: () => Ip.b.getCurrentState(),
        onFrame: op.q
      },
      xp = (0, Op.createContext)(Sp);

    function Lp() {
      return (0, Op.useContext)(xp)
    }
  },
  36549: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      g: () => Pp
    });
    var Op = cp(62),
      op = cp(1372),
      Ip = cp(1201),
      Sp = cp(1361),
      xp = cp(3581),
      Lp = cp(5048),
      Yp = cp(1112);

    function Dp(pp) {
      let {
        loading: ip,
        schematics: cp,
        onSchematicPicked: Op,
        selectedSchematicIdList: op = [],
        disableAutoExport: Lp
      } = pp;
      const {
        t: Dp
      } = (0, Ip.H)();
      return (0, Yp.jsxs)("div", {
        className: "SchematicList",
        children: [ip && (0, Yp.jsx)(Sp.c, {}), !ip && 0 === cp.length && (0, Yp.jsx)("div", {
          className: "NoSchematicsText",
          children: Dp("worldBuilder:noSavedSchematic")
        }), !ip && cp.map((pp => (0, Yp.jsx)(xp.g, {
          source: {
            type: "schematic",
            schematic: pp
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Op(pp)
          },
          isSelected: op.includes(pp.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: pp.isAutoExported && Lp,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, pp.schematicId)))]
      })
    }

    function Ap(pp) {
      let {
        ownedSchematics: ip,
        currentWorldSchematicId: cp,
        onClose: op
      } = pp;
      const {
        t: Sp
      } = (0, Ip.H)(), [xp, Ap] = (0, Op.useState)(null);
      return (0, Yp.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === xp && (0, Yp.jsxs)(Yp.Fragment, {
          children: [(0, Yp.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Sp("worldBuilder:schematicList")
          }), (0, Yp.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Sp("worldBuilder:clickSchematicForOptions")
          }), (0, Yp.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Yp.jsx)(Dp, {
              loading: !1,
              schematics: ip,
              onSchematicPicked: pp => {
                Ap(pp)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== xp && (0, Yp.jsx)(Lp.j, {
          schematic: xp,
          inSourceWorld: xp.schematicId === cp,
          onSchematicUpdate: pp => {
            Ap(pp)
          },
          onClose: () => {
            Ap(null), op()
          }
        })]
      })
    }

    function Pp(pp) {
      let {
        ownedSchematics: ip,
        currentWorldSchematicId: cp,
        onClose: Op
      } = pp;
      op.NotificationProvider.showCustomPopup({
        body: pp => (0, Yp.jsx)(Ap, {
          ownedSchematics: ip,
          currentWorldSchematicId: cp,
          onClose: pp
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Op,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  37134: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => ep,
      g: () => dp
    });
    var Op = cp(4355),
      op = cp(1476),
      Ip = cp(62),
      Sp = cp(6605),
      xp = cp(4343),
      Lp = cp(1308),
      Yp = cp(1956),
      Dp = cp(1929),
      Ap = cp(1480),
      Pp = cp(1201),
      Wp = cp(37142),
      yp = cp(1049),
      Up = cp.n(yp),
      wp = cp(1334),
      vp = cp(1060),
      tp = cp(1295),
      Hp = cp(1112);
    const dp = "SleepingOverlay";

    function ep() {
      const {
        t: pp
      } = (0, Pp.H)(), [ip, cp] = (0, Ip.useState)(!1), [yp, ep] = (0, Ip.useState)(null), [kp, mp] = (0, Ip.useState)(1), [Rp, qp] = (0, Ip.useState)(!1), [Mp, Cp] = (0, Ip.useState)(!1), Ep = (0, Ip.useRef)(0), Xp = (0, Ip.useRef)(!1), lp = (0, Ip.useRef)(!1), Qp = (0, Ip.useRef)(), Jp = (0, Ip.useRef)(null);

      function Bp() {
        const pp = null !== yp && void 0 !== yp ? yp : "Rested Speed";
        Yp.gameBridge.send("wakeUp", Mp ? pp : null), Jp.current = null, cp(!1), ep(null), mp(1), qp(!1), Cp(!1)
      }

      function Np() {
        return !Rp && (Bp(), !0)
      }
      return (0, op.f)("PlayerPhysicsTypeUpdate", (pp => {
        pp !== Jp.current && (Jp.current = pp, pp === Sp.l.SLEEPING ? (lp.current || (Ep.current = Yp.gameBridge.lookup("cameraZoom", null), lp.current = !0), Xp.current = !0, Yp.gameBridge.send("setCameraZoom", 3), cp(!0), mp(function() {
          for (const pp of Yp.gameBridge.lookup("blocksStandingOn", null)) {
            if (Wp.c.leafBeds.includes(pp)) return console.log(`Found leaf bed: ${pp}`), 1;
            if (Wp.c.woolBeds.includes(pp)) return console.log(`Found woold bed: ${pp}`), 2;
            if (Wp.c.strongBeds.includes(pp)) return console.log(`Found strong bed ${pp}`), 3
          }
          return 1
        }())) : (lp.current = !1, cp(!1), ep(null), mp(1)))
      })), (0, Ip.useEffect)((() => () => {
        (0, Lp.r)(dp)
      }), []), (0, Ip.useEffect)((() => {
        ip ? (0, Lp.s)(dp) : ((0, Lp.r)(dp), Xp.current && (Yp.gameBridge.send("setCameraZoom", Ep.current), Xp.current = !1))
      }), [ip]), (0, tp.x)("overlay", Qp, Np, ip), (0, Hp.jsx)(Op.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ip,
        timeout: 300,
        nodeRef: Qp,
        unmountOnExit: !0,
        children: (0, Hp.jsx)("div", {
          ref: Qp,
          onClick: pp => {
            Np() && pp.stopPropagation()
          },
          children: (0, Hp.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Hp.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: xp.h.map((ip => (0, Hp.jsxs)(jp, {
                restedEffect: ip,
                rL: yp,
                setChosenRestedEffect: ep,
                children: [(0, Hp.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Hp.jsx)(Dp.e, {
                    text: [{
                      icon: ip
                    }]
                  }), xp.f[ip].shortName]
                }), (0, Hp.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: pp(xp.f[ip].description, {
                    time: xp.f[ip].effectLevelDurations[kp] / 6e4
                  })
                })]
              }, ip)))
            }), (0, Hp.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Hp.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Hp.jsxs)(Ap.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: pp => {
                  Mp ? Bp() : (qp(!0), (0, wp.Y)((() => {
                    qp(!1), Cp(!0)
                  }), !0)), pp.stopPropagation()
                },
                loading: Rp,
                children: [!Mp && (0, Hp.jsxs)(Hp.Fragment, {
                  children: [(0, Hp.jsx)(vp.d, {
                    name: "film"
                  }), " ", pp("classicGame:watchAdToGetRestedPerk")]
                }), Mp && pp("classicGame:wakeUp")]
              }), (0, Hp.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Hp.jsx)("div", {
                  className: Up()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === kp
                  }),
                  children: (0, Hp.jsx)(Dp.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Hp.jsx)("div", {
                  className: Up()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === kp
                  }),
                  children: (0, Hp.jsx)(Dp.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Hp.jsx)("div", {
                  className: Up()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === kp
                  }),
                  children: (0, Hp.jsx)(Dp.e, {
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
    const jp = (0, Ip.memo)((function(pp) {
      let {
        children: ip,
        restedEffect: cp,
        rL: Op,
        setChosenRestedEffect: op
      } = pp;
      return cp === Op ? (0, Hp.jsx)(Ap.o, {
        onClick: pp => {
          pp.stopPropagation()
        },
        children: ip
      }) : (0, Hp.jsx)(Ap.j, {
        onClick: pp => {
          op(cp), pp.stopPropagation()
        },
        children: ip
      })
    }))
  },
  36751: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      h: () => Lp
    });
    var Op = cp(620),
      op = cp(1956),
      Ip = cp(1656),
      Sp = cp(104),
      xp = cp(1276);

    function Lp(pp, ip, cp) {
      return Sp.featureFlags.useSocialFeatures && pp && null === (0, xp.c)(ip, cp)
    }

    function Yp(pp, ip) {
      var cp, Sp;
      const xp = Ip.d.getSocialState().friends.find((pp => pp.name.toLowerCase() === ip.toLowerCase())),
        Lp = op.gameBridge.latest("players").byId[pp],
        Yp = void 0 !== Lp && Lp.name === ip,
        Dp = Yp && null !== (cp = Lp.cosmetics) && void 0 !== cp ? cp : void 0,
        Ap = xp && Dp ? {
          ...xp,
          cosmetics: Dp
        } : xp;
      return {
        playerSocialPreview: null !== Ap && void 0 !== Ap ? Ap : {
          isError: !1,
          name: ip,
          ranks: Yp ? [...Lp.ranks] : [],
          cosmetics: null !== Dp && void 0 !== Dp ? Dp : {},
          nameColour: null !== (Sp = null === Dp || void 0 === Dp ? void 0 : Dp.nameColour) && void 0 !== Sp ? Sp : Op.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== xp
      }
    }
  },
  5034: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1112);

    function xp(pp) {
      let {
        columns: ip,
        rows: cp,
        getRowKey: op,
        renderRow: xp,
        className: Lp
      } = pp;
      return (0, Sp.jsxs)("table", {
        className: Ip()("Table", Lp),
        children: [(0, Sp.jsx)("thead", {
          children: (0, Sp.jsx)("tr", {
            children: ip.map((pp => (0, Sp.jsx)("th", {
              children: pp.header
            }, pp.key)))
          })
        }), (0, Sp.jsx)("tbody", {
          children: cp.map((pp => (0, Sp.jsx)(Op.Fragment, {
            children: xp(pp)
          }, op(pp))))
        })]
      })
    }
  },
  36879: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => Sp,
      l: () => xp,
      m: () => Lp
    });
    var Op = cp(62),
      op = cp(3209);
    const Ip = 8,
      Sp = "InGameHeaderContainer",
      xp = "TopRightElements";

    function Lp(pp) {
      const [ip] = (0, op.b)(), [cp, Lp] = (0, Op.useState)(!1);
      return (0, Op.useLayoutEffect)((() => {
        if (!pp) return;
        const ip = document.querySelector(`.${Sp}`),
          cp = document.querySelector(`.${xp}`),
          Op = () => {
            const Op = pp.getBoundingClientRect(),
              op = ip ? ip.getBoundingClientRect().right : 0,
              Sp = cp ? cp.getBoundingClientRect().left : window.innerWidth,
              xp = Op.left < op + Ip,
              Yp = Op.right > Sp - Ip;
            Lp(xp || Yp)
          };
        Op();
        const op = new ResizeObserver(Op);
        return op.observe(pp), ip && op.observe(ip), cp && op.observe(cp), () => {
          op.disconnect()
        }
      }), [pp, ip]), cp
    }
  },
  36924: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ap
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1692),
      xp = cp(1480),
      Lp = cp(1361),
      Yp = cp(1060),
      Dp = cp(1112);

    function Ap(pp) {
      let {
        label: ip,
        icon: cp,
        placeholder: op,
        onSubmit: Ap
      } = pp;
      const Pp = (0, Op.useRef)(null),
        [Wp, yp] = (0, Op.useState)(""),
        [Up, wp] = (0, Op.useState)("Enter"),
        [vp, tp] = (0, Op.useState)(null);
      (0, Op.useEffect)((() => {
        if ("Success" !== Up && "Error" !== Up) return;
        const pp = setTimeout((() => {
          "Success" === Up && Pp.current && (Pp.current.value = "", yp("")), wp("Enter")
        }), "Success" === Up ? 1e3 : 4e3);
        return () => {
          clearTimeout(pp)
        }
      }), [Up]);
      const Hp = () => {
        const pp = Wp.trim();
        "" !== pp && "Enter" === Up && (wp("Loading"), Ap(pp).then((pp => {
          Pp.current && ("error" in pp ? null === pp.error ? wp("Enter") : (tp(pp.error), wp("Error")) : wp("Success"))
        })))
      };
      return (0, Dp.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: pp => {
          pp.target === Pp.current && "Escape" !== pp.key && pp.stopPropagation()
        },
        children: [(0, Dp.jsxs)("div", {
          className: Ip()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Up}`),
          children: ["Loading" === Up && (0, Dp.jsx)(Lp.c, {}), "Success" === Up && (0, Dp.jsx)(Yp.d, {
            name: "check"
          }), "Error" === Up && vp]
        }), (0, Dp.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Dp.jsx)(Sp.c, {
            className: "PlayerSearchInput",
            domRef: Pp,
            maxLength: 32,
            placeholderText: op,
            ariaLabel: op,
            stopPropagation: !1,
            onValueChange: pp => {
              yp(pp)
            },
            onEnter: Hp
          }), (0, Dp.jsxs)(xp.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Up || "" === Wp.trim(),
            onClick: Hp,
            children: [(0, Dp.jsx)(Yp.d, {
              name: cp
            }), " ", ip]
          })]
        })]
      })
    }
  },
  36903: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1201),
      xp = cp(1060),
      Lp = cp(1112);
    const Yp = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Dp = ["unlisted", "public", "whitelist", "private"];

    function Ap(pp) {
      let {
        visibility: ip,
        onPick: cp
      } = pp;
      const {
        t: op
      } = (0, Sp.H)(), Ap = (0, Op.useRef)([]);
      return (0, Lp.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": op("worldSocial:whoCanJoin"),
        children: Dp.map(((pp, Op) => {
          const Sp = pp === ip;
          return (0, Lp.jsxs)("button", {
            ref: pp => {
              Ap.current[Op] = pp
            },
            type: "button",
            className: Ip()("WorldSocialTile", {
              WorldSocialTileSelected: Sp
            }),
            "aria-pressed": Sp,
            tabIndex: Sp ? 0 : -1,
            onKeyDown: pp => {
              ((pp, ip) => {
                const cp = "ArrowRight" === pp.key || "ArrowDown" === pp.key ? 1 : "ArrowLeft" === pp.key || "ArrowUp" === pp.key ? -1 : 0;
                var Op;
                0 !== cp && (pp.preventDefault(), null === (Op = Ap.current[(ip + cp + Dp.length) % Dp.length]) || void 0 === Op || Op.focus())
              })(pp, Op)
            },
            onClick: () => {
              cp(pp)
            },
            children: [(0, Lp.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Lp.jsx)(xp.d, {
                name: Yp[pp]
              })
            }), (0, Lp.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Lp.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: op(`worldSocial:${pp}`)
              }), (0, Lp.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: op(`worldSocial:${pp}Description`)
              })]
            })]
          }, pp)
        }))
      })
    }
  },
  36915: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp
    });
    var Op = cp(1201),
      op = cp(2731),
      Ip = cp(4462),
      Sp = cp(1112);

    function xp(pp) {
      let {
        LP: ip,
        children: cp,
        ...xp
      } = pp;
      const {
        t: Lp
      } = (0, Op.H)();
      return (0, Sp.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ip.onChange(!ip.on)
        },
        children: (0, Sp.jsx)(op.h, {
          ...xp,
          opensProfileCard: !1,
          children: (0, Sp.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: pp => {
              pp.stopPropagation()
            },
            children: [cp, (0, Sp.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Sp.jsx)(Ip.b, {
                checked: ip.on,
                disabled: !1,
                ariaLabel: Lp("worldSocial:letJoin", {
                  playerName: xp.playerSocialPreview.name
                }),
                onChange: pp => {
                  ip.onChange(pp.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36898: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => yp
    });
    var Op = cp(62),
      op = cp(1201),
      Ip = cp(1880),
      Sp = cp(104),
      xp = cp(25),
      Lp = cp(1505),
      Yp = cp(2752),
      Dp = cp(34325),
      Ap = cp(1480),
      Pp = cp(1060),
      Wp = cp(1112);

    function yp(pp) {
      let {
        worldCode: ip,
        message: cp
      } = pp;
      const {
        t: yp
      } = (0, op.H)(), {
        isTouchScreen: Up
      } = (0, xp.o)(["isTouchScreen"]), wp = Sp.featureFlags.canUseInviteLinks, vp = (0, Dp.k)(wp && null === cp), [tp, Hp] = (0, Yp.j)(), dp = (0, Op.useRef)(null);
      if (null !== cp) return (0, Wp.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Wp.jsx)(Pp.d, {
          name: "lock"
        }), (0, Wp.jsx)("span", {
          children: cp
        })]
      });
      const ep = wp ? vp : ip,
        jp = Up && wp && (0, Yp.d)();
      return (0, Wp.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!wp && (0, Wp.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: yp("worldSocial:worldCode")
        }), (0, Wp.jsx)("input", {
          ref: dp,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ep && void 0 !== ep ? ep : "",
          "aria-label": yp(wp ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: pp => {
            pp.currentTarget.select()
          }
        }), (0, Wp.jsxs)(Ap.f, {
          className: "WorldSocialCopy",
          disabled: null === ep,
          onClick: () => {
            null !== ep && (0, Yp.h)(ep, {
              useShareSheet: jp,
              onOutcome: pp => {
                if ((0, Lp.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== pp || wp ? pp : "code"
                  }), "copied" === pp) Hp();
                else if ("failed" === pp) {
                  var ip;
                  null === (ip = dp.current) || void 0 === ip || ip.focus(), Ip.i.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Wp.jsx)(Pp.d, {
            name: tp ? "check" : jp ? "up-from-bracket" : "copy"
          }), " ", yp(tp ? "general:copied" : jp ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36908: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      g: () => Pp,
      j: () => Ap
    });
    var Op = cp(620),
      op = cp(1201),
      Ip = cp(1656),
      Sp = cp(2731),
      xp = cp(2671),
      Lp = cp(1480),
      Yp = cp(36915),
      Dp = cp(1112);

    function Ap(pp, ip) {
      var cp;
      return {
        isError: !1,
        name: pp,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ip && void 0 !== ip ? ip : {},
        nameColour: null !== (cp = null === ip || void 0 === ip ? void 0 : ip.nameColour) && void 0 !== cp ? cp : Op.b,
        location: {
          status: "offline"
        }
      }
    }

    function Pp(pp) {
      let {
        player: ip,
        isFriend: cp = !1,
        status: Op,
        showLocation: Lp = void 0 === Op,
        LP: Ap,
        onSendFriendRequest: Pp,
        actions: Wp,
        zIndex: yp
      } = pp;
      const {
        t: Up
      } = (0, op.H)();
      let wp = Op;
      null !== Ap && void 0 !== Ap && Ap.on && (wp = (0, Dp.jsxs)(Dp.Fragment, {
        children: [null !== Op && void 0 !== Op ? Op : (0, Dp.jsx)(xp.c, {
          socialPreview: ip
        }), (0, Dp.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Up("worldSocial:canJoin")]
        })]
      }));
      const vp = {
        playerSocialPreview: ip,
        isFriend: cp,
        hideFriendBadge: !0,
        onFriendRemoved: cp ? pp => {
          Ip.d.removeFriendFromState(pp)
        } : void 0,
        status: wp,
        showLocation: Lp,
        onSendFriendRequest: Pp,
        zIndex: yp
      };
      return Ap ? (0, Dp.jsx)(Yp.b, {
        ...vp,
        LP: Ap,
        children: Wp
      }) : (0, Dp.jsx)(Sp.h, {
        ...vp,
        opensProfileCard: !1,
        children: Wp || void 0
      })
    }

    function Wp(pp) {
      let {
        row: ip,
        LP: cp,
        canInvite: Op,
        invited: Ip,
        onInvite: Sp,
        zIndex: xp
      } = pp;
      const {
        t: Yp
      } = (0, op.H)(), Ap = "online" === ip.place ? Lp.f : Lp.j;
      return (0, Dp.jsx)(Pp, {
        player: ip.friend,
        isFriend: !0,
        status: "here" === ip.place ? Yp("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        LP: cp,
        zIndex: xp,
        actions: Op && (0, Dp.jsx)(Ap, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Ip,
          onClick: Sp,
          ariaLabel: `${Yp("worldSocial:invite")} ${ip.friend.name}`,
          children: Yp(Ip ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36892: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      g: () => Sp,
      j: () => Yp
    });
    var Op = cp(62),
      op = cp(4677),
      Ip = cp(1880);

    function Sp(pp) {
      const ip = {
        lobbyName: pp,
        answer: null,
        response: op.b.getSocialSettings(pp)
      };
      return ip.response.then((pp => {
        ip.answer = pp
      })), ip
    }
    const xp = new Map;

    function Lp(pp) {
      xp.set(pp.lobbyName, pp)
    }

    function Yp(pp) {
      const [ip] = (0, Op.useState)((() => function(pp) {
        var ip;
        const cp = null !== (ip = xp.get(pp)) && void 0 !== ip ? ip : null;
        return null !== cp && void 0 !== cp && cp.answer && "error" in cp.answer ? null : cp
      }(pp))), [cp, Sp] = (0, Op.useState)((() => null !== ip && void 0 !== ip && ip.answer && "settings" in ip.answer ? ip.answer.settings : null)), [Lp, Yp] = (0, Op.useState)(!0), [Dp, Ap] = (0, Op.useState)(null !== cp), Pp = (0, Op.useRef)(cp);
      Pp.current = cp;
      const Wp = (0, Op.useRef)(0),
        yp = (0, Op.useRef)(0),
        Up = (0, Op.useRef)(!1),
        wp = (0, Op.useRef)(!0),
        vp = (0, Op.useCallback)((async ip => {
          const cp = ++Wp.current,
            Op = await (null !== ip && void 0 !== ip ? ip : op.b.getSocialSettings(pp));
          wp.current && cp === Wp.current && (Ap(!0), Yp(!1), "error" in Op || Sp(Op.settings))
        }), [pp]),
        tp = (0, Op.useCallback)((() => {
          Yp(!0), vp()
        }), [vp]),
        Hp = (0, Op.useCallback)((() => {
          yp.current > 0 ? Up.current = !0 : vp()
        }), [vp]);
      (0, Op.useEffect)((() => (wp.current = !0, xp.delete(pp), Yp(!0), vp(null === ip || void 0 === ip ? void 0 : ip.response), () => {
        wp.current = !1
      })), [vp, pp, ip]);
      const dp = pp => {
        Wp.current++, Yp(!1), Pp.current = pp, Sp(pp)
      };
      return {
        settings: cp,
        loading: Lp,
        answered: Dp,
        retry: tp,
        refresh: Hp,
        change: async function(ip, cp) {
          let {
            quiet: Op = !1,
            onAnswer: Sp
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const xp = Pp.current;
          if (null === xp) return !1;
          dp(cp(xp)), yp.current > 0 && (Up.current = !0), yp.current++;
          const Lp = await op.b.setSocialSettings(pp, ip);
          yp.current--;
          const Yp = !("error" in Lp);
          if (!wp.current) return Yp;
          if (null === Sp || void 0 === Sp || Sp(Lp), Op);
          else if ("error" in Lp) Ip.i.showMessage({
            translationKey: Lp.error
          });
          else
            for (const pp of Lp.notFound) Ip.i.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: pp
              }
            });
          if (yp.current > 0) return Yp;
          const Dp = Up.current;
          return Up.current = !1, !Dp && "settings" in Lp ? dp(Lp.settings) : (Dp || dp(xp), vp()), Yp
        }
      }
    }
  },
  36931: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      f: () => Ip
    });
    var Op = cp(156);
    const op = new Map;

    function Ip(pp, ip) {
      var cp;
      const Op = null !== (cp = op.get(pp)) && void 0 !== cp ? cp : new Map;
      Op.set(ip, Date.now()), op.set(pp, Op)
    }

    function Sp(pp) {
      const ip = op.get(pp);
      if (!ip) return [];
      const cp = Date.now();
      for (const [op, Ip] of ip) cp - Ip >= Op.n && ip.delete(op);
      return [...ip.keys()]
    }
  },
  36896: (pp, ip, cp) => {
    function Op(pp, ip) {
      const cp = ip.toLowerCase();
      for (const Op of pp)
        if (Op.toLowerCase() === cp) return !0;
      return !1
    }

    function op(pp, ip, cp) {
      const op = [],
        Ip = [],
        Sp = [];
      for (const xp of pp) !xp.isError && xp.name && ("inGame" === xp.location.status && xp.location.inLobbyName === ip || Op(cp, xp.name) ? Ip.push({
        friend: xp,
        place: "here"
      }) : "offline" === xp.location.status ? Sp.push({
        friend: xp,
        place: "offline"
      }) : op.push({
        friend: xp,
        place: "online"
      }));
      return [...op, ...Ip, ...Sp]
    }

    function Ip(pp, ip, cp) {
      const op = [],
        Ip = pp.flatMap((pp => "here" === pp.place ? [pp.friend.name] : []));
      for (const Sp of [...Ip, ...ip]) Op(op, Sp) || Op(cp, Sp) || op.push(Sp);
      return op
    }

    function Sp(pp, ip) {
      return null === pp || void 0 === pp || !pp.canManage || Op(pp.whitelist, ip) ? "none" : "whitelist" === pp.visibility ? "required" : "quiet"
    }

    function xp(pp) {
      if (null === pp) return !0;
      const {
        visibility: ip
      } = pp;
      return "public" === ip || "unlisted" === ip || "whitelist" === ip && pp.canManage
    }

    function Lp(pp, ip, cp) {
      if (cp) {
        const cp = ip.filter((ip => !Op(pp.whitelist, ip)));
        return {
          ...pp,
          whitelist: [...pp.whitelist, ...cp]
        }
      }
      return {
        ...pp,
        whitelist: pp.whitelist.filter((pp => !Op(ip, pp)))
      }
    }

    function Yp(pp, ip) {
      const cp = [];
      for (let Op = 0; Op < pp.length; Op += ip) cp.push(pp.slice(Op, Op + ip));
      return cp
    }
    cp.d(ip, {
      c: () => xp,
      f: () => Ip,
      h: () => op,
      l: () => Op,
      o: () => Yp,
      p: () => Sp,
      r: () => Lp
    })
  },
  8877: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => Ip
    });
    var Op = cp(2028);
    const op = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      Ip = pp => "string" === typeof pp.icon && "" !== pp.icon && "string" === typeof pp.keycode && op.test(pp.keycode),
      Sp = pp => "Space" === pp ? "_" : Op.j[pp]
  },
  8909: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(25);

    function op() {
      return !Op.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8917: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Wp,
      c: () => Ip,
      f: () => xp,
      h: () => Yp,
      k: () => Lp,
      m: () => Sp,
      p: () => op,
      r: () => Op,
      t: () => yp,
      v: () => Ap,
      w: () => Dp,
      z: () => Pp
    });
    const Op = 14,
      op = 6,
      Ip = (Op + op) / 2,
      Sp = 200,
      xp = Sp / 2,
      Lp = Sp / 2 - 1,
      Yp = op / Op * (Sp / 2),
      Dp = (pp, ip) => -Math.PI / 2 + 2 * pp * Math.PI / ip,
      Ap = (pp, ip, cp) => {
        const Op = 2 * Math.PI / cp;
        return (Math.round((Math.atan2(ip, pp) + Math.PI / 2) / Op) % cp + cp) % cp
      },
      Pp = .5,
      Wp = (pp, ip, cp) => Math.hypot(pp.x, pp.y) < Pp ? cp : Ap(pp.x, pp.y, ip),
      yp = (pp, ip, cp, Op, op) => {
        const Ip = Math.PI / ip,
          Sp = Dp(pp, ip),
          xp = Sp - Ip,
          Lp = Sp + Ip,
          Yp = (pp, ip) => `${cp+pp*Math.cos(ip)} ${cp+pp*Math.sin(ip)}`;
        return [`M ${Yp(Op,xp)}`, `L ${Yp(op,xp)}`, `A ${op} ${op} 0 0 1 ${Yp(op,Lp)}`, `L ${Yp(Op,Lp)}`, `A ${Op} ${Op} 0 0 0 ${Yp(Op,xp)}`, "Z"].join(" ")
      }
  },
  37108: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(25),
      op = cp(1334);

    function Ip() {
      const {
        clientEscMenuOptions: pp
      } = (0, Op.o)(["clientEscMenuOptions"]);
      return (0, op.v)() && pp.showChat
    }
  },
  8961: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(62),
      op = cp(8895),
      Ip = cp(2492);

    function Sp() {
      const pp = (0, Ip.i)("shopInfo"),
        [, ip] = (0, Op.useReducer)((pp => pp + 1), 0);
      return (0, Ip.e)("shopInfo", ip), !(0, op.b)(pp)
    }
  },
  37227: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(62),
      op = cp(2492);

    function Ip() {
      const pp = (0, op.i)("lobbyLeaderboardInfo");
      return (0, Op.useMemo)((() => function(pp) {
        if (null === pp) return null;
        const ip = Object.entries(pp),
          cp = ip.filter((pp => {
            let [, ip] = pp;
            return void 0 !== ip
          }));
        if (cp.length === ip.length) return pp;
        const Op = Object.fromEntries(cp),
          op = Object.keys(pp).filter((pp => !Object.hasOwn(Op, pp)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${op.join(", ")}`), Op
      }(pp)), [pp])
    }
  },
  37037: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp
    });
    var Op = cp(2849),
      op = cp(3774),
      Ip = cp(3003);
    const Sp = ["Unable to create vertex buffer"];
    let xp = {};

    function Lp(pp, ip) {
      const cp = new Date;
      console.error(`${cp.getUTCHours()}:${cp.getUTCMinutes()}:${cp.getUTCSeconds()}`, pp, ip, null === ip || void 0 === ip ? void 0 : ip.stack), Sp.includes(null === ip || void 0 === ip ? void 0 : ip.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Op.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${ip.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Ip.logError)("warning", `${pp}\n ${ip} "\n" ${null===ip||void 0===ip?void 0:ip.stack}`);
      const op = pp + ip + (null === ip || void 0 === ip ? void 0 : ip.stack);
      op in xp || ((0, Ip.logError)("error", `${pp}\n ${ip} "\n" ${null===ip||void 0===ip?void 0:ip.stack}`), xp[op] = !0)
    }(0, op.onGameReset)((() => {
      xp = {}
    }))
  },
  4964: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Jp,
      h: () => Qp
    });
    var Op = cp(4970),
      op = cp(322);
    const Ip = 120,
      Sp = 260,
      xp = 1.15,
      Lp = 1.2,
      Yp = 2,
      Dp = 1.08,
      Ap = .8,
      Pp = .95,
      Wp = 8,
      yp = "[\"')\\]\u300d\u300f\uff09]*",
      Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
      wp = new RegExp(`[?\uff1f]${yp}$`),
      vp = new RegExp(`[!\uff01]${yp}$`),
      tp = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Hp = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      dp = new RegExp(`[${Hp}]`),
      ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
      jp = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function kp(pp) {
      let ip = 2166136261;
      for (let cp = 0; cp < pp.length; cp++) ip ^= pp.charCodeAt(cp), ip = Math.imul(ip, 16777619);
      return (ip >>> 0) / 4294967295 * 2 - 1
    }

    function mp(pp) {
      var ip;
      if (dp.test(pp)) return 1;
      const cp = pp.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Op = cp.replace(/[^0-9]/g, "");
      if (Op.length > 0 && !/\p{L}/u.test(cp)) return Math.min(Op.length, 4);
      const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
      if (0 === op.length) {
        var Ip, Sp;
        const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
        return 0 === pp ? 0 : Math.min(Math.max(1, Math.round(pp / 2.5)), Wp)
      }
      const xp = cp.replace(/[^\p{L}]/gu, ""),
        Lp = op.length > 1 && "e" === op.at(-1) && xp.endsWith("e") && !xp.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(pp.replace(/[^\p{L}]/gu, ""));
      return Math.min(op.length - (Lp ? 1 : 0), Wp)
    }

    function Rp(pp) {
      return pp.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function qp(pp) {
      const ip = pp.replace(/[^\p{L}]/gu, "");
      return ip.length >= 2 && ip === ip.toUpperCase() && ip !== ip.toLowerCase()
    }

    function Mp(pp, ip) {
      var cp;
      const Wp = ip && (0, Op.m)(ip),
        yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
        Hp = function(pp) {
          const ip = [];
          for (const Op of (0, op.nc)(pp))
            if ("string" === typeof Op)
              for (const pp of Op.split(/(\s+)/)) {
                if ("" === pp) continue;
                if (/^\s+$/.test(pp)) {
                  ip.push({
                    kind: "space",
                    text: pp
                  });
                  continue
                }
                if (!dp.test(pp)) {
                  ip.push({
                    kind: "word",
                    text: pp,
                    delayMs: 0
                  });
                  continue
                }
                let Op = !0;
                for (const op of null !== (cp = pp.match(ep)) && void 0 !== cp ? cp : []) {
                  var cp;
                  const pp = ip.at(-1);
                  Op || "word" !== (null === pp || void 0 === pp ? void 0 : pp.kind) || dp.test(op) || /[\p{L}\p{N}]/u.test(op) ? (Op || ip.push({
                    kind: "space",
                    text: "\u200b"
                  }), ip.push({
                    kind: "word",
                    text: op,
                    delayMs: 0
                  }), Op = !1) : pp.text += op
                }
              } else ip.push({
                kind: "icon",
                text: Op.icon,
                delayMs: 0
              });
          return ip
        }(pp),
        jp = [];
      let Mp = [];
      for (const Op of Hp) "space" !== Op.kind && (Mp.push(Op), Up.test(Op.text) && (jp.push(Mp), Mp = []));
      jp.push(Mp);
      const Cp = [];
      let Ep = 0;
      for (const Op of jp) {
        var Xp, lp;
        const pp = null !== (Xp = null === (lp = Op.at(-1)) || void 0 === lp ? void 0 : lp.text) && void 0 !== Xp ? Xp : "",
          ip = wp.test(pp),
          cp = vp.test(pp),
          op = Op.map((pp => "word" === pp.kind ? mp(pp.text) : 1)),
          Hp = op.findLastIndex((pp => pp > 0));
        for (const [wp, vp] of Op.entries()) {
          const pp = "word" === vp.kind,
            Op = op[wp];
          vp.delayMs = Ep;
          for (let op = 0; Wp && op < Op; op++) {
            const {
              intonation: Ip
            } = Wp;
            let Sp = Hp > 0 ? -Ip.declineSemitones * (wp / Hp) : 0;
            Sp += kp(`${Rp(vp.text)}|${op}`) * Ip.variationSemitones;
            const Up = Math.min(1, Ip.variationSemitones);
            let tp = Wp.glideSemitones,
              dp = 1;
            cp && (Sp += Ip.exclaimLiftSemitones, dp *= xp), ip && wp === Hp && (Sp += Ip.questionRiseSemitones * (Op > 1 ? .5 + .5 * op / (Op - 1) : 1), op === Op - 1 && (tp = Math.abs(tp) + Ip.questionRiseSemitones / 2)), pp && qp(vp.text) && (Sp += Yp * Up, dp *= Lp), Op > 1 && 0 === op && (Sp += Ap * Up, dp *= Dp), Cp.push({
              atMs: Ep + op * yp,
              semitones: Sp,
              glideSemitones: tp,
              durationMs: op < Op - 1 ? Math.min(Wp.durationMs, yp * Pp) : Wp.durationMs,
              level: dp
            })
          }
          Ep += Op * yp + (Up.test(vp.text) ? Sp : tp.test(vp.text) ? Ip : 0)
        }
      }
      return {
        pieces: Hp.map((pp => "space" === pp.kind ? pp : "icon" === pp.kind ? {
          kind: "icon",
          icon: pp.text,
          delayMs: pp.delayMs
        } : {
          kind: "word",
          text: pp.text,
          delayMs: pp.delayMs
        })),
        blips: Cp
      }
    }
    var Cp = cp(1201),
      Ep = cp(1260),
      Xp = cp(1963);

    function lp(pp) {
      if ("string" === typeof pp) return pp;
      const ip = Ep.g.get().getCurrentLanguageCode();
      return (0, Cp.w)(ip, pp.translationKey, (0, Cp.t)(pp.params, Xp.d.shown))
    }

    function Qp(pp) {
      const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
        cp = ip && (0, Op.m)(ip);
      return {
        plan: Mp(lp(pp.line), cp),
        synth: cp
      }
    }

    function Jp(pp) {
      const ip = [];
      let cp = [];
      for (const [op, Ip] of pp.entries()) {
        var Op;
        "space" === Ip.kind && (" " !== Ip.text || "icon" !== (null === (Op = pp[op + 1]) || void 0 === Op ? void 0 : Op.kind)) ? (cp.length > 0 && ip.push(cp), ip.push([Ip]), cp = []) : cp.push(Ip)
      }
      return cp.length > 0 && ip.push(cp), ip
    }
  },
  36872: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    const Op = [{
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

    function op(pp, ip, cp) {
      const op = Math.abs(pp - ip),
        Ip = Date.now() - cp;
      for (const Sp of Op)
        if (pp < Sp.maxDist) return op >= Sp.hardUpdateDist || Ip > Sp.timeBetweenSoftChecks && op >= Sp.softUpdateDist;
      return !1
    }
  },
  37201: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      f: () => Pp
    });
    var Op = cp(640),
      op = cp(44),
      Ip = cp(37156);
    const Sp = "replayFileKeptForReload",
      xp = "replayFileKeptForReloadAt",
      Lp = "replayFileKeptForReloadTab",
      Yp = 3e5,
      Dp = 5e3;
    async function Ap(pp, ip) {
      const cp = Date.now(),
        Ip = {
          at: cp,
          bytes: pp,
          source: ip
        },
        Yp = await Promise.race([(async () => await op.g.setItem(xp, cp) && op.g.setItem(Sp, Ip))(), (0, Op.M)(Dp).then((() => !1))]);
      Yp || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Ap = {
        at: cp,
        aW: Yp
      };
      op.l.setItem(Lp, Ap)
    }
    async function Pp() {
      var pp;
      const ip = op.l.getItem(Lp);
      null !== ip && op.l.removeItem(Lp);
      const cp = Date.now(),
        Op = await op.g.getItem(xp),
        Dp = null !== ip && cp - ip.at <= Yp,
        Ap = null !== ip && Op === ip.at;
      let Pp = null;
      if (null !== Op && (Ap || ("number" !== typeof Op || cp - Op > Yp)) && (Pp = Dp && Ap && ip.aW ? await op.g.getItem(Sp) : null, await Promise.all([op.g.removeItem(xp), op.g.removeItem(Sp)])), !Dp) return null;
      if ((null === (pp = Pp) || void 0 === pp ? void 0 : pp.at) !== ip.at) throw new Error(Ip.c.replayNotKept.text);
      return {
        bytes: Pp.bytes,
        source: Pp.source
      }
    }
  },
  37192: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      g: () => Ip,
      h: () => op
    });
    const Op = [9];

    function op(pp) {
      return Op.includes(pp)
    }

    function Ip(pp) {
      return null !== pp && pp >= 3 && pp < Op[0]
    }
  },
  37164: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      f: () => Ip,
      h: () => op
    });
    const Op = [.25, .5, 1, 2, 4, 8, 16];

    function op(pp, ip) {
      const cp = Op;
      let op = cp.indexOf(pp);
      return -1 === op && (op = cp.findIndex((ip => ip >= pp)), -1 === op && (op = cp.length - 1)), "up" === ip ? cp[Math.min(op + 1, cp.length - 1)] : cp[Math.max(op - 1, 0)]
    }

    function Ip(pp) {
      return pp <= Op[0]
    }

    function Sp(pp) {
      return pp >= Op[Op.length - 1]
    }
  },
  37209: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op,
      h: () => op
    });
    const Op = "data-replay-ui-active",
      op = [{
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
  37215: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp,
      f: () => Ap,
      j: () => Dp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(37209);

    function Sp() {
      const pp = {};
      for (const {
          group: ip
        }
        of Ip.h) pp[ip] = !0;
      return pp
    }
    let xp = Sp();

    function Lp() {
      op.m.GA("replayViewer|uiVisibilityChanged")
    }

    function Yp() {
      return xp
    }

    function Dp(pp, ip) {
      xp[pp] !== ip && (xp = {
        ...xp,
        [pp]: ip
      }, "nametag" === pp && Op.c.set({
        areNametagsHidden: !ip
      }), Lp())
    }

    function Ap() {
      xp = Sp(), Op.c.set({
        areNametagsHidden: !1
      }), Lp()
    }
  },
  8872: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => Sp,
      j: () => xp,
      l: () => op
    });
    var Op = cp(8877);
    const op = pp => {
        const ip = [];
        pp.holdingGun && ip.push({
          kind: "reload"
        }), pp.touchscreenActionButton && ip.push({
          kind: "touchButton",
          label: pp.touchscreenActionButton
        });
        for (const Ip of null !== (cp = null === (op = pp.customButtons) || void 0 === op ? void 0 : op.filter(Op.f)) && void 0 !== cp ? cp : []) {
          var cp, op;
          ip.push({
            kind: "customButton",
            id: Ip.id,
            icon: Ip.icon,
            description: Ip.description
          })
        }
        return ip
      },
      Ip = pp => pp.length >= 2,
      Sp = pp => "specialAction" !== pp.kind,
      xp = (pp, ip) => {
        if (null === pp || null === ip) return pp === ip;
        if (pp.kind !== ip.kind) return !1;
        switch (pp.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return pp.action === ip.action;
          case "customButton":
            return pp.id === ip.id && pp.icon === ip.icon;
          case "touchButton":
            return pp.label === ip.label
        }
      }
  },
  8869: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      f: () => Wp,
      h: () => Ap,
      i: () => yp
    });
    var Op = cp(62),
      op = cp(34),
      Ip = cp(1476),
      Sp = cp(8872),
      xp = cp(8883);
    let Lp = null;
    const Yp = () => Lp,
      Dp = pp => {
        (0, Sp.j)(Lp, pp) || (Lp = pp, op.m.GA(xp.e, Lp))
      },
      Ap = () => {
        const [pp, ip] = (0, Op.useState)(Yp);
        return (0, Ip.f)(xp.e, ip), pp
      };
    let Pp = !1;
    const Wp = pp => {
        pp !== Pp && (Pp = pp, op.m.GA(xp.f, pp))
      },
      yp = () => {
        const [pp, ip] = (0, Op.useState)(Pp);
        return (0, Ip.f)(xp.f, ip), pp
      }
  },
  8883: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      e: () => Op,
      f: () => op,
      i: () => xp,
      k: () => Lp,
      m: () => Yp,
      p: () => Sp
    });
    const Op = "controllerActionHintChanged",
      op = "controllerActionWheelHintChanged",
      Ip = "controllerOpenChat",
      Sp = "controllerSneakToggledChanged",
      xp = "controllerAttackLatchedChanged",
      Lp = "controllerDropStackHoldChanged",
      Yp = "controllerPickBlockHintChanged"
  },
  8826: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      g: () => Ip,
      i: () => Lp,
      l: () => xp
    });
    var Op = cp(1476),
      op = cp(1432);
    const Ip = "controllerInventoryCursorChanged",
      Sp = {
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
      xp = () => {
        var pp, ip;
        return (0, Op.i)(Ip, null !== (pp = null === (ip = (0, op.f)()) || void 0 === ip ? void 0 : ip.getInventoryCursorState()) && void 0 !== pp ? pp : Sp)
      },
      Lp = () => {
        var pp, ip;
        return null !== (pp = null === (ip = (0, op.f)()) || void 0 === ip ? void 0 : ip.isPadSteppingSlots()) && void 0 !== pp && pp
      }
  },
  8821: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      c: () => xp,
      e: () => Lp,
      i: () => Sp,
      m: () => Ip,
      p: () => Dp,
      r: () => Ap
    });
    let Op = null;
    const op = new Set,
      Ip = pp => (Op = pp, () => {
        if (Op === pp) {
          Op = null;
          for (const pp of op) pp()
        }
      }),
      Sp = pp => (op.add(pp), () => {
        op.delete(pp)
      }),
      xp = () => Op,
      Lp = () => null !== Op;
    let Yp = null;
    const Dp = pp => {
        Yp = pp
      },
      Ap = () => {
        const pp = Yp;
        return Yp = null, pp
      },
      Pp = (pp, ip) => {
        var cp, Op;
        return null !== (cp = null !== (Op = pp.find((pp => pp.element === ip))) && void 0 !== Op ? Op : pp.find((pp => pp.element.contains(ip)))) && void 0 !== cp ? cp : null
      }
  },
  8828: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      e: () => Sp
    });
    var Op = cp(62);
    const op = new WeakMap,
      Ip = pp => {
        var ip, cp;
        return null !== (ip = null === (cp = op.get(pp)) || void 0 === cp ? void 0 : cp.current) && void 0 !== ip ? ip : null
      },
      Sp = (pp, ip) => {
        const cp = (0, Op.useRef)(ip);
        cp.current = ip;
        const Ip = (0, Op.useRef)(null);
        (0, Op.useEffect)((() => {
          const ip = pp.current,
            Op = Ip.current;
          ip !== Op && (Op && op.get(Op) === cp && op.delete(Op), Ip.current = ip, ip && op.set(ip, cp))
        })), (0, Op.useEffect)((() => () => {
          const pp = Ip.current;
          pp && op.get(pp) === cp && op.delete(pp), Ip.current = null
        }), [])
      }
  },
  8944: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp,
      h: () => Yp,
      j: () => Ap,
      l: () => Dp,
      o: () => Lp,
      q: () => Wp
    });
    var Op = cp(34),
      op = cp(2048),
      Ip = cp(1432),
      Sp = cp(1419);
    const xp = pp => {
        var ip, cp;
        return (0, Sp.h)() && null !== (ip = null === (cp = (0, Ip.f)()) || void 0 === cp ? void 0 : cp.getGlyphForNoaAction(pp)) && void 0 !== ip ? ip : null
      },
      Lp = "controllerGlyph:",
      Yp = pp => {
        var ip, cp;
        return null !== (ip = null === (cp = (0, Ip.f)()) || void 0 === cp ? void 0 : cp.getPadGlyphIconName(pp)) && void 0 !== ip ? ip : `${Lp}xbox/${pp}`
      },
      Dp = pp => pp.startsWith(Lp),
      Ap = pp => {
        var ip, cp;
        return Dp(pp) && null !== (ip = null === (cp = (0, Ip.f)()) || void 0 === cp ? void 0 : cp.getPadGlyphIconUrl(pp)) && void 0 !== ip ? ip : null
      },
      Pp = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", Sp.d, op.e, op.b],
      Wp = pp => {
        const ip = Pp.map((ip => Op.m.subscribe(ip, pp)));
        return () => {
          for (const pp of ip) Op.m.unsubscribe(pp)
        }
      }
  },
  8852: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      e: () => op
    });
    let Op = null;
    const op = function(pp) {
        const ip = {
          cycle: pp,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Op = ip, () => {
          Op === ip && (Op = null)
        }
      },
      Ip = () => {
        var pp;
        return null !== (pp = Op) && void 0 !== pp && pp.canCycle() ? Op.cycle : null
      }
  },
  8928: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      i: () => Sp,
      l: () => Ip,
      p: () => Op,
      t: () => xp,
      x: () => Yp,
      z: () => Dp
    });
    const Op = "controllerActionWheelOpen",
      op = "controllerActionWheelAim",
      Ip = "controllerActionWheelCommit",
      Sp = "controllerActionWheelClose",
      xp = "controllerActionWheelPick";
    let Lp = !1;
    const Yp = () => Lp,
      Dp = pp => {
        Lp = pp
      }
  },
  8919: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      f: () => op
    });
    let Op = 0;
    const op = () => {
        Op++
      },
      Ip = () => Op
  },
  8843: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp,
      h: () => op,
      l: () => Sp,
      m: () => Ip,
      n: () => Op,
      r: () => Yp
    });
    const Op = "controllerQuickChatWheelOpen",
      op = "controllerQuickChatWheelAim",
      Ip = "controllerQuickChatWheelCommit",
      Sp = "controllerQuickChatWheelClose";
    let xp = !1;
    const Lp = () => xp,
      Yp = pp => {
        xp = pp
      }
  },
  37032: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Ip
    });
    const Op = new Map;

    function op(pp) {
      var ip;
      return null === pp ? null : null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
    }

    function Ip(pp, ip) {
      return Op.set(pp, ip), () => {
        Op.get(pp) === ip && Op.delete(pp)
      }
    }
  },
  37177: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => cc,
      c: () => ic
    });
    var Op = cp(4341),
      op = cp(640),
      Ip = cp(3824),
      Sp = cp(3844),
      xp = cp.n(Sp);
    const Lp = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Yp = "EV_boolean",
      Dp = "EV_double",
      Ap = "EV_string",
      Pp = "EV_doubleArr",
      Wp = "EV_armour",
      yp = "EV_other",
      Up = "EV_cosmetics",
      wp = "OEV_boolean",
      vp = "OEV_int",
      tp = "OEV_double",
      Hp = "OEV_string",
      dp = "OEV_stringArr",
      ep = "OEV_meshScaling",
      jp = "IV_int",
      kp = "IV_string",
      mp = "IV_doubleArr",
      Rp = "IV_double",
      qp = "HV_int",
      Mp = "HV_slots",
      Cp = "EnvV_string",
      Ep = "EnvV_double",
      Xp = "EnvV_doubleArr",
      lp = "EnvV_boolean",
      Qp = {
        type: Ap,
        name: Ap,
        position: Pp,
        rotation: Pp,
        scale: Dp,
        speed: Dp,
        jumping: Yp,
        crouching: Yp,
        cameraPitch: Dp,
        armSwinging: Yp,
        heldItemName: Ap,
        heldItemEnchantmentTier: Ap,
        pose: Ap,
        followingEId: Ap,
        ridingVehicleEId: Ap,
        leaderboardTop: Ap,
        meshKind: Ap,
        meshOpts: Ap,
        followingOffset: Pp,
        shouldMatchFollowingEntityRotation: Yp,
        meshOffset: Pp,
        baseRenderHeading: Dp,
        armour: Wp,
        QJ: yp,
        playerCustomisations: Up,
        variation: Ap,
        metaInfo: Ap,
        soundName: Ap,
        volume: Dp,
        refDistance: Dp,
        maxHearDist: Dp,
        rate: Dp,
        aiState: Ap
      },
      Jp = {
        opacity: tp,
        zIndex: vp,
        overlayColour: Hp,
        canSee: wp,
        meshScaling: ep,
        nameTagInfo: Hp,
        multilineTextBox: Hp,
        hasPriorityNametag: wp,
        ranks: dp,
        nameColour: Hp,
        _isAlive: wp,
        _invisibleEffect: wp,
        _invincible: wp,
        killfeedColour: Hp,
        hideNameSeed: vp,
        _glowingEffect: wp,
        lockHeadToBody: wp
      },
      Bp = {
        itemName: kp,
        amount: jp,
        position: mp,
        size: Rp,
        attributes: kp
      },
      Np = {
        skyBox: Cp,
        fogColourOverride: Cp,
        fogChunkDistanceOverride: Ep,
        cameraTint: Xp,
        fogOnSkybox: lp,
        fogBlockDistanceOverride: Ep
      },
      Tp = {
        type: "array",
        items: "double"
      },
      fp = {
        type: "array",
        items: "int"
      },
      bp = {
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
      hp = {
        type: "map",
        values: Tp
      };

    function ap(pp, ip) {
      return {
        type: "record",
        name: pp,
        fields: [{
          name: "x",
          type: ip
        }]
      }
    }
    const np = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ap(wp, "boolean"), ap(vp, "int"), ap(tp, "double"), ap(Hp, "string"), ap(dp, {
              type: "array",
              items: "string"
            }), ap(ep, hp)]
          }]
        }
      },
      Fp = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ap(Yp, "boolean"), ap(Dp, "double"), ap(Ap, "string"), ap(Pp, Tp), ap(Wp, bp), ap(yp, np), ap(Up, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      gp = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ap(jp, "int"), ap(kp, "string"), ap(Rp, "double"), ap(mp, Tp)]
          }]
        }
      },
      Gp = {
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
      rp = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", ap(qp, "int"), ap(Mp, Gp)]
        }]
      },
      Zp = {
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
      zp = {
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
      sp = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", ap(Cp, "string"), ap(Ep, "double"), ap(Xp, Tp), ap(lp, "boolean")]
          }]
        }
      },
      Kp = [{
        name: "qE",
        type: "record",
        fields: [{
          name: "pos",
          type: fp
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
          type: fp
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
      Vp = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "ip",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Ip",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "Sp",
              type: ["null", "string", Tp],
              default: null
            }, {
              name: "xp",
              type: ["null", "double"],
              default: null
            }, {
              name: "Lp",
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
          name: "KO",
          type: "string"
        }, {
          name: "VO",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "po",
          type: "double"
        }, {
          name: "Oo",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Ec",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: Tp
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Np",
          type: "string"
        }, {
          name: "Ni",
          type: ["null", "double"],
          default: null
        }, {
          name: "Ti",
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
          name: "iS",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "cS",
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
      ii = [{
        name: "position",
        type: Tp
      }, {
        name: "direction",
        type: Tp
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

    function ci() {
      const pp = [{
        name: "entities",
        type: {
          type: "map",
          values: Fp
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: gp
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: ii
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
              items: rp
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Zp],
        default: null
      }];
      return pp.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "Np",
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
      }), pp.push({
        name: "uiElements",
        type: zp
      }, {
        name: "environment",
        type: sp
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: Kp
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: Vp
        }
      }), pp
    }
    const Oi = {
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
                name: "LP",
                type: "int"
              }, {
                name: "position",
                type: Tp
              }, {
                name: "direction",
                type: Tp
              }, {
                name: "easing",
                type: Tp
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
    let oi;

    function Ii(pp) {
      if (9 === pp) return oi ??= (ip = [{
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
            name: "Bl",
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
              type: fp
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
            fields: ci()
          }
        }
      }, Oi], xp().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: ip
      }, {
        UW: Object.create(null)
      })), oi;
      var ip
    }
    var Si = cp(2918);
    let xi, Li, Yi, Di;
    const Ai = 12;
    var Pi, Wi;
    const yi = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 16, null, 110, 4, 111, 112, !0, 15, 107, !1, 2, 10, 5, 11, 9];

    function Ui(pp) {
      return typeof Sc !== yi[5] && Sc ? (new Sc).decode(new xc(pp)) : typeof Lc !== yi[5] && Lc ? Lc.from(pp).toString("utf-8") : Ac(pp)
    }

    function wi() {}

    function vi() {
      vi = function() {}
    }
    var ti, Hi;
    vi(Pi = {}, Wi = ["(R:OR0MUk.(%@ItMJ|.HvoYN|W)Z*2aVy[", 'XHm5_lr$l80Sq".d#;v%o+X/!gOh,OF', "!d:gVB7@wQ6+;aMv", '?"2gk3wQ4dZEjBCNL/b^O@1n(SVJia(vbZ5fFe3[yGwsOaH', "go@%8/oG@g", "oqcgjp:LmG!n_)Vv@@D2tq;j].=6i}Da#.uM0}&U.e;", "S|e,sSmpeRVDGKU@U91aR;DN6.%5DaAv||{,t4J^5ZMD[", '`/?DG;"LP8Z2jG@K', "rQpJw~x303P]AUitPgB0D%8l_GcDXo;u+|<9W", ',"*qtXo[QPF|ZEmQ76[ah2lLWW2vD$Cv=3wF8/uFK`dbr', "`|yY+}I&v3[c!I@UTs:^bCt&[L}mw~]uwg=^y", "Po6qZCYW&Gp:4)WNdiVOLbQR{+1v]t!d}EOJ8", "PLX9I{q^oLxoPhd/MV!%|KsU2G^+VI_W4q4,runjO", 'NtK,G#[*ZdE]G2!"Z/pCO2/K[gj', "W3ToU_5i5ZI.0GI", "?;G{;}T3QL2[;a7vRoOJh&w^)gFhSBvQYVE", "bSyC^]A[de5RjoG", 'e|5pM_AbEgCoiuyNxijDQ31`HJ2!5Iavr3]fV<PF~RmV@GSVFt2op"Uh', 'Z9v5MlHR>+/4CIV@6DM,"nMKkS@2llwKe;T{tq!D+jm":h3V[L#mk', ")4i:xv}/jSY", 'vP#,t_iUUG@E~UK"Dg/g', "y5yFICuGqG!nBo/_Ugh2i", 'E?*q]CN]LL<5{UTM:H%F&YsU]I3$>_Rt|dngqu"lH', "ztbgs4gWjS6%(_/W_5@D[;nUYgrDUl?d_SeFw9g[3jjFs#i", 'd/bOC=ZNG8.L|a5t$.PYVXmpD`$Ow~R_D3yOSboNkI"br', "<xO,+uShYes;O#wKg[", "qgv2RbQjS4$6>_AM", "jdqFj}BFQi/", 'qsCoi55^npT5t"ct2;jpa<|n/s|v%;O>.EQ2quCv,4%RXBI', "61y:v~MQ;Ls{D_s@cQ|Jg{Xi)g^6)h", "AISF/6SjHj+6l$Q@DELO|=Zp*qQUra2_A4yORKHwH", "ts`oi0O$Wg7K_kR", "w@>,t4mGfL]%CI5k.V!f*xY]~p.fpe5_^D+o)32jnpqo|EaMV[", "XxkX)0.GpG&LnEg_X|h", '=Sp:~;8,oe9no"nt}u76$pg[|WfBDPJWw|xC];KQ)PtBH_:"', ';"#%L}rwhL;db_(KiL9g,9oN>4Z2W#s@e4+H0$h`,4e', "$1N]&3=jUG?$#IU,sLgXOb2=qWeQqG|:#r", "hfno#9C,l+T$d;V@Bx9Og;$j{ZH)eP;@pqqg", 'T.,:ES)^;?9P*Km"nk~C2ezi|`Z@[', "l/<5&9tKveH|4EGWagTo2CSwmJ<i^a)Mf3NwVX>lO", 'B;ug)xYvzSL^C_7c>"+HD$ORjS4v[', "_e5,X_KwbiU.4I0/U.nH$;7=>Sa", "(+$9D]%[w8dSOERW[L,:.Cn=XZRH4j7vkgT{XB.Bgd<$3~z_OqkqC}TVzS^", "cgTOc3aWPe8b~Bbtb6N]$b}==+0B1_|ULH;gg{mWIQ@2ym", "otkD>):W#i$O!j~vmosC[2Q${Rk", '>"^p(qE*Wg3%C#SUS.BO,/h1O', 'VqqC4b4][LoZ#hr,7EvfTlzjJsT5ccwK@|XO4%bD[qXOTIF">HE', 'Eo.HXKNFzS"8[cG_:V,FNL$USQxC7l>_s3:M]Bo<lL$vAn;t=||mG', '!:}%"<=h', 'Q"Ya~u9,=LyCu$buZQcg+@"BvgZ]ZP3vCxh', 'r=KFKq|Uid%LM47yBDuM2C<Nrg)R)*AMp|V{q"0w(I<,r9bae:h', "{|#pl$chx+Qa@m^@<MGJ", '`:":Cb"F}G4n#t3VPQha9BkN<WPa4$!"', 'moD,"oSir3L^~ec@`|YqAXdWD338woB"keEfP9/il?TyDI8N4;"F0}hQH', 'PLbHa3;=HjAp7PLVR5w:`@^^6.EGGc>W?DDpHb^QzSd.g}Jt|"E', "Egp59C/Q`L6%7Oca3D+Hk^n=G8x^woj1<;?mRK|jLRB$[", "nZ)fy<RR:iDQ;aXWmqdft{GkkdK:nvYKP=PHQ_kN~4|+)oI", "(6[DY4~L%Z", 'z@u^Y4y=]4OH@om"J=OF', 'aVMJ:X%B2jqO1~BU|d]pd_rUle$LXklt%:uoV9uWBjm|q"g', "6xSMY6hKW`Q)3cguwe[Dxn(=:?.$u_I/yDb^[=Sh", 'g35f"6;//Gn*flD@};eJa#rQRGB$:h', '9VLO=~2U~ZM2]amk"i/w=L/jEW@@jB+@+qqO', "_erX1~pv3ssCYcPt[e~:|eKUNda", "1/C^:<W,E`}0RaYVp|Wf)XAB].;{}vkNEou^M<|=.iX%Z06uxD;Dy^B,Dg", 'y3a2d*(@{IUbg}=tQLH:l)w&bPjIah9U^.W%I5s&+jI]W_Da"P1a$pdF5s', "wV/oHb}nmW+o79s@]1K%6*r", "1DXFQXV[", 'a5Q2J_0j,4$L`a,vb4%:BB|Q~R(`"O:,l@iJd', "4sfqx|vv4ZfE,cS1G[", "=:TOJ;Q^eIR]!aSvcLZfHC!G$W", "x|_:F5a,>+xIbt0@EO6qdB0/3d$$<*a,76E2`=U&DW=JJ~8M2s<:o|mNM8^Br", "As`oJeeh", "$Hs,|2#<RjuJW)#@19L^[KG[p`VCZ)z_%.Nf9@^=SRsG`aI", "#kQa,<4,>s)yutxW3S&:<#sK{RJsB;6k6H[]83JQlR1E+#ANk[", 'i38{lo"F}`Qw/4eKb$_Fx~olc3q{R2g', 's,Qfc32U:e"F_G:"a9|m@nNGngNI:)Qs_DkqRb+/W`xMTh', "pV^5[&==nPKB3KSw>/hfx|6FdPa@OEaNmP$^&BdkxQbk2E", 'k>pJTB]][LI@?">ted;H?*cKpW6!rag:hPE,sB.NjIv4AKTv', ".H!mE2R`kdD", 'SM!,ISI=7.KMwm`"udZf}4`|+juCT$HUZ|E', "Y|wgv/&^m`U262/WQePYbS@i1S!6.2G", "#;UD(q)UgJK80ovkd=rXH*>F6.Q)zE", "lD[XlL!Bx4s:|EvwHo`D<0vWx8uF%OtvOL[", 'U==^q"qn44@Suju:(d(DX{5js`z{Qm', ":q,^d*8G#i>nhtik:qxJG#k,%RQwx;zWxDB{%BV[", "hvrwMvPkE", '1V8Jn^Ept.efZIwU.DTHMv7=7G?nu4jNm9O0/+H=;?WbV#."~|B:6STN0WGG[', '%D!p2@Sw}`%ZR#7y@;:qy{mNzd#k4$f1V,"5V0%G=+f{AO', "<6{pS=gF<qi~EtR", "8,oav4cjq`7*4I4M(1u^e%URyG&5FPP", "U|<O%5BLreB%BBnu", "<;eCm;vFqG", "U|xO[buWXPoU9IvQ2EgwfnP[", ")IqFe@4,nQzJ[", 'Us:MX55^9jARTIY"=|M:d*@U7jdEf#6k>>kac3Q5H', "61RwZ*T3lL1ITI@dN5:Od#ap*e$6r", "v>N]w~S&xZ#!k*=tj|8J(X#bUjS+^Pe,Z9D,y/h&@ibK[", '5x]p^"kFlP1E3K4,6r', "_qXM,~}Uad", '5sIFqj,]_ji.+ER"c>!fV47|G84', ">52m>+)K", "XL#eh&cK", 'uCZ"e', "G7SL<|TK", "uu.D4", '"/DBq=Cm', "?0mnp>Hd", '">q2aF8d', "kn%1y", "vxTJ", "jxq2R}&d", 'Gn"i', "Lx/[K=:d", "L!+_", "AF#_Y86}", "dD0j", "n!A^=RD}", '5[V"qUC}', "&HNt3/{}", "=q?4;(_E}dk9PvO)cCgzoohKw>/fX6O)wat8wc=$QBf&b%cq6q7nz", '[SLj&a";l9tPqK2^|]3fgg6Zi>O(!@2^PurR__*7|&tzTbq5kW', "X,Nt[K*8&a?Y7]J==,>sAR[}GWOVS[5A09QV$", "YJ!A"]), vi(Ic = function() {
      var pp, ip, cp, Op = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      vi(pp = void 0, ip = []);
      try {
        vi(pp = Object, ip[yi[11]]("".__proto__.constructor.name))
      } catch (xc) {}
      pp: for (cp = yi[0]; cp < Op[yi[4]]; cp++) try {
        var op;
        for (pp = Op[cp](), op = yi[0]; op < ip[yi[4]]; op++)
          if (typeof pp[ip[op]] === yi[5]) continue pp;
        return pp
      } catch (xc) {}
      return pp || this
    }() || {}, Sc = Ic.TextDecoder, xc = Ic.Uint8Array, Lc = Ic.my, Yc = Ic.String || String, Dc = Ic.Array || Array, Ac = function() {
      var pp, ip, cp = new Dc(128);
      return vi(pp = Yc[yi[8]] || Yc.fromCharCode, ip = []),
        function(Op) {
          var op, Ip, Sp, xp;
          for (vi(Ip = void 0, Sp = Op[yi[4]], ip[yi[4]] = yi[0]), xp = yi[0]; xp < Sp;) vi(Ip = Op[xp++], Ip <= 127 ? op = Ip : Ip <= 223 ? op = (31 & Ip) << yi[7] | Op[xp++] & yi[6] : Ip <= 239 ? op = (Ip & yi[25]) << yi[10] | (Op[xp++] & yi[6]) << yi[7] | Op[xp++] & yi[6] : Yc[yi[8]] ? op = (Ip & yi[9]) << 18 | (Op[xp++] & yi[6]) << yi[10] | (Op[xp++] & yi[6]) << yi[7] | Op[xp++] & yi[6] : (op = yi[6], xp += yi[17]), ip[yi[11]](cp[op] || (cp[op] = pp(op))));
          return ip.join("")
        }
    }()), (() => {
      function pp(pp) {
        return typeof Pi[pp] === yi[5] ? Pi[pp] = function(pp) {
          var ip, cp, Op, op, Ip, Sp, xp;
          for (vi(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yi[0], Ip = yi[0], Sp = -yi[1]), xp = yi[0]; xp < cp; xp++) {
            var Lp = 'zqKEhQMURYD@1PgCa*)jb~o7x/edl{6umZr2i;F<T,.y9$v|_OptSLG3n>B8cIs=`(0!5&"VfX^[N+4H}J%#wk:A?]W'.indexOf(ip[xp]);
            if (Lp !== -yi[1])
              if (Sp < yi[0]) Sp = Lp;
              else {
                vi(Sp += Lp * yi[12], op |= Sp << Ip, Ip += (Sp & yi[13]) > yi[14] ? yi[15] : yi[16]);
                do {
                  vi(Op.push(op & yi[3]), op >>= yi[2], Ip -= yi[2])
                } while (Ip > yi[9]);
                Sp = -yi[1]
              }
          }
          return Sp > -yi[1] && Op.push((op | Sp << Ip) & yi[3]), Ui(Op)
        }(Wi[pp]) : Pi[pp]
      }
      const ip = yi[18],
        cp = pp(101) + pp(102) + pp(103),
        Op = [yi[0], yi[1], yi[28], yi[17]].map((ip => {
          let Op = yi[0];
          for (let op = yi[17]; op >= yi[0]; op--) {
            function Ip(pp) {
              var ip, cp, Op, op, Ip, Sp, xp;
              for (vi(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yi[0], Ip = yi[0], Sp = -yi[1]), xp = yi[0]; xp < cp; xp++) {
                var Lp = 'qAXm*D[S6Fv=T~"ukJ?H>eK/Q7$E!4it%BZ#]h}5V9dLzPp0(^,|1MwYGU{cy+)3ar&<.RxCIglo`b@2fn;O8NW:j_s'.indexOf(ip[xp]);
                if (Lp !== -yi[1])
                  if (Sp < yi[0]) Sp = Lp;
                  else {
                    vi(Sp += Lp * yi[12], op |= Sp << Ip, Ip += (Sp & yi[13]) > yi[14] ? yi[15] : yi[16]);
                    do {
                      vi(Op.push(op & yi[3]), op >>= yi[2], Ip -= yi[2])
                    } while (Ip > yi[9]);
                    Sp = -yi[1]
                  }
              }
              return Sp > -yi[1] && Op.push((op | Sp << Ip) & yi[3]), Ui(Op)
            }

            function Sp(pp) {
              return typeof Pi[pp] === yi[5] ? Pi[pp] = Ip(Wi[pp]) : Pi[pp]
            }
            Op = Op << yi[2] | cp[pp(104) + Sp(105)](ip * yi[21] + op)
          }
          return Op >>> yi[0]
        })),
        op = (pp, ip) => pp << ip | pp >>> 32 - ip,
        Ip = (pp, ip, cp, Op, Ip) => {
          vi(pp[ip] += pp[cp], pp[Ip] = op(pp[Ip] ^ pp[ip], yi[18]), pp[Op] += pp[Ip], pp[cp] = op(pp[cp] ^ pp[Op], yi[10]), pp[ip] += pp[cp], pp[Ip] = op(pp[Ip] ^ pp[ip], yi[2]), pp[Op] += pp[Ip], pp[cp] = op(pp[cp] ^ pp[Op], yi[9]))
        };
      Di = (pp, cp, op, Sp) => {
        function xp(pp) {
          return typeof Pi[pp] === yi[5] ? Pi[pp] = function(pp) {
            var ip, cp, Op, op, Ip, Sp, xp;
            for (vi(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yi[0], Ip = yi[0], Sp = -yi[1]), xp = yi[0]; xp < cp; xp++) {
              var Lp = 'wmdPiCBR1_JtA6?x,7js/T8LOE:zpyvf2{4Q9"&lg*~h)(HcDr$bk`nF<.^30W5USeGq!VN>#M}oa[KIY=X%]u|+@Z;'.indexOf(ip[xp]);
              if (Lp !== -yi[1])
                if (Sp < yi[0]) Sp = Lp;
                else {
                  vi(Sp += Lp * yi[12], op |= Sp << Ip, Ip += (Sp & yi[13]) > yi[14] ? yi[15] : yi[16]);
                  do {
                    vi(Op.push(op & yi[3]), op >>= yi[2], Ip -= yi[2])
                  } while (Ip > yi[9]);
                  Sp = -yi[1]
                }
            }
            return Sp > -yi[1] && Op.push((op | Sp << Ip) & yi[3]), Ui(Op)
          }(Wi[pp]) : Pi[pp]
        }
        xp(106) in wi && function() {
          var pp = function(pp) {
            vi(this.TA = pp, this.length = yi[0], this.map = {}, this.head = yi[19], this.tail = yi[19])
          };
          vi(pp.prototype.get = function(pp) {
            var ip = this.map[pp];
            return ip ? (this.remove(ip), this.insert(ip.key, ip.val), ip.val) : -yi[1]
          }, pp.prototype.put = function(pp, ip) {
            this.map[pp] ? (this.remove(this.map[pp]), this.insert(pp, ip)) : this.length === this.TA ? (this.remove(this.head), this.insert(pp, ip)) : (this.insert(pp, ip), this.length++)
          }, pp.prototype.remove = function(pp) {
            var ip, cp = pp.prev;
            (ip = pp.next) && (ip.prev = cp), cp && (cp.next = ip), this.head === pp && (this.head = ip), this.tail === pp && (this.tail = cp), delete this.map[pp.key]
          }, pp.prototype.insert = function(pp, ip) {
            var cp = new List(pp, ip);
            vi(this.tail ? (this.tail.next = cp, cp.prev = this.tail, this.tail = cp) : (this.tail = cp, this.head = cp), this.map[pp] = cp)
          }, console.log(pp))
        }();
        const Lp = new DataView(cp[xp(yi[26])], cp[xp(108) + xp(109)], Ai),
          Yp = new Uint32Array(ip);
        vi(Yp[xp(yi[20])](Op), Yp[xp(yi[20])](pp, yi[21]), Yp[yi[15]] = Lp[xp(yi[22]) + xp(yi[23])](yi[0], yi[24]), Yp[yi[16]] = Lp[xp(yi[22]) + xp(yi[23])](yi[21], yi[24]), Yp[yi[25]] = Lp[xp(yi[22]) + xp(yi[23])](yi[2], yi[24]));
        const Dp = new Uint32Array(ip),
          Ap = new Uint8Array(Dp[xp(yi[26])]);
        for (let Pp = yi[0], Wp = op; Pp < Sp[xp(113)]; Pp += ip * yi[21], Wp++) {
          function yp(pp) {
            var ip, cp, Op, op, Ip, Sp, xp;
            for (vi(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yi[0], Ip = yi[0], Sp = -yi[1]), xp = yi[0]; xp < cp; xp++) {
              var Lp = '.{}<;wvk5j_S#oH!p]`NA+Tn$qDYMJL3xW?iV9&y(GZec7Fd64),l"ag@>~ICPQ[0u2tb*/Xh1%mU^=EBRK8srz|:fO'.indexOf(ip[xp]);
              if (Lp !== -yi[1])
                if (Sp < yi[0]) Sp = Lp;
                else {
                  vi(Sp += Lp * yi[12], op |= Sp << Ip, Ip += (Sp & yi[13]) > yi[14] ? yi[15] : yi[16]);
                  do {
                    vi(Op.push(op & yi[3]), op >>= yi[2], Ip -= yi[2])
                  } while (Ip > yi[9]);
                  Sp = -yi[1]
                }
            }
            return Sp > -yi[1] && Op.push((op | Sp << Ip) & yi[3]), Ui(Op)
          }

          function Up(pp) {
            return typeof Pi[pp] === yi[5] ? Pi[pp] = yp(Wi[pp]) : Pi[pp]
          }
          vi(Yp[yi[10]] = Wp, Dp[Up(114)](Yp));
          for (let vp = yi[0]; vp < yi[29]; vp++) {
            function tp() {
              var pp;
              vi(pp = function(ip, cp, Op, op, Ip, Sp, xp) {
                var Lp = yi[27];
                return Sp >= Op.length ? yi[24] : void 0 !== xp["" + op + Ip + Sp] ? xp["" + op + Ip + Sp] : (Op[Sp] === ip[op] && Op[Sp] === cp[Ip] ? Lp = pp(ip, cp, Op, op + yi[1], Ip, Sp + yi[1], xp) || pp(ip, cp, Op, op, Ip + yi[1], Sp + yi[1], xp) : Op[Sp] === ip[op] ? Lp = pp(ip, cp, Op, op + yi[1], Ip, Sp + yi[1], xp) : Op[Sp] === cp[Ip] && (Lp = pp(ip, cp, Op, op, Ip + yi[1], Sp + yi[1], xp)), xp["" + op + Ip + Sp] = Lp, Lp)
              }, console.log((function(ip, cp, Op) {
                return Op.length !== ip.length + cp.length ? yi[27] : pp(ip, cp, Op, yi[0], yi[0], yi[0], {})
              })))
            }
            Up(115) + "6" in wi && tp(), vi(Ip(Dp, yi[0], yi[21], yi[2], yi[10]), Ip(Dp, yi[1], yi[30], yi[32], yi[15]), Ip(Dp, yi[28], yi[7], yi[29], yi[16]), Ip(Dp, yi[17], yi[9], yi[31], yi[25]), Ip(Dp, yi[0], yi[30], yi[29], yi[25]), Ip(Dp, yi[1], yi[7], yi[31], yi[10]), Ip(Dp, yi[28], yi[9], yi[2], yi[15]), Ip(Dp, yi[17], yi[21], yi[32], yi[16]))
          }
          for (let Hp = yi[0]; Hp < ip; Hp++) Dp[Hp] += Yp[Hp];
          const wp = Math[Up(116)](ip * yi[21], Sp[Up(117)] - Pp);
          for (let dp = yi[0]; dp < wp; dp++) {
            Up(118), Sp[Pp + dp] ^= Ap[dp]
          }
        }
      }
    })();
    const di = ["b", 0, 1, 69, 3, "a", 9, "g", 114, 6, 4, 8, 255, "length", 35, "c", "undefined", void 0, 71, 126, 2, 63, "fromCodePoint", 7, 12, "push", 144, 109, 75, 161, "d", 84, 91, 8191, 88, 13, 14, 146, 238, null, 210, 10, 239, 223, 21, "h", 168, 193, "e", "f", 118, 134, 170, 167, 5, 125, 219, 59, 100, 32, 211, 15, 89, 237, 169, 86, 127, 162, 128, 24, 185, 164, 218, 60, 137, !0, 19, 158, 124, 139, 201, 1023, 74, 213, 65536, 55, 55296, 56320, 123, 20, 172, 241, 16, 31, 18, 41, 122, 222, 192, 111, 56, 214, "i", 204, !1, 224, 23, 152, 240, 48, 26];

    function ei(pp) {
      return typeof ti[pp] === di[16] ? ti[pp] = function(...pp) {
        for (ki(pp[di[13]] = di[2], pp[di[5]] = 'KeMlIgAXkNdRFHhOUQbjrEc79v1*(z`[}]3?)x$=:2y.u{sBpDSGaJ_C4@P!#<WV/n685mq;>TY0|,Liftwo&^+~Z"%', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[di[0]].length, pp[di[10]] = [], pp[di[8]] = di[1], pp[di[9]] = di[1], pp[di[7]] = -di[2]), pp[-di[3]] = di[1]; pp[-di[3]] < pp[di[4]]; pp[-di[3]]++)
          if (pp[di[6]] = pp[di[5]].indexOf(pp[di[0]][pp[-di[3]]]), pp[di[6]] !== -di[2])
            if (pp[di[7]] < di[1]) pp[di[7]] = pp[di[6]];
            else {
              ki(pp[di[7]] += pp[di[6]] * di[32], pp[di[8]] |= pp[di[7]] << pp[di[9]], pp[di[9]] += (pp[di[7]] & di[33]) > di[34] ? di[35] : di[36]);
              do {
                ki(pp[di[10]].push(pp[di[8]] & di[12]), pp[di[8]] >>= di[11], pp[di[9]] -= di[11])
              } while (pp[di[9]] > di[23]);
              pp[di[7]] = -di[2]
            } return pp[di[7]] > -di[2] && pp[di[10]].push((pp[di[8]] | pp[di[7]] << pp[di[9]]) & di[12]), ui(pp[di[10]])
      }(Hi[pp]) : ti[pp]
    }

    function ui(...pp) {
      return pp[di[13]] = di[2], typeof Sc !== di[16] && Sc ? (new Sc).decode(new xc(pp[di[1]])) : typeof Lc !== di[16] && Lc ? Lc.from(pp[di[1]]).toString("utf-8") : Ac(pp[di[1]])
    }

    function ji() {}

    function ki() {
      ki = function() {}
    }
    ki(ti = {}, Hi = ["5NzYR$c/!QtR%v}bNI_(N#|PPrX<b<#)Cr+Xy5WM", "Wp&zTt{V(hp|sHJ*CQ~a4>K", "AFJY~$VHEP5fK", "!5IStm[2]Vvr`g@yV5g|9avzz6{QGq.1hskGU@;Gz!nVUo9(Fxs|VsXJ<b", "xxJCes:M", "u1eGmmOmA", "NYPGIp;Go/p", "+GoYXCQJKNABcg?x}NBa3^D0#h6Tm>NjUe", "n5}0zT~is4gPa*qv", "F5Sk|mK", "VA=D{5:s8FiI_xn7z#H[+@$/JH,RmI", "nWQ}JPim1rciw1/)_hCD|o9fa_ufuIw(7GM", '*xCN9B{Xy!"e[1f=@_.d*_(aVOCX,)c3N5J(t|Tz3_?|AwqbPpaYz', "A._C_Pp:KOLVg>E(ds.YD,y9,ba[i$dvk;QG+^ssS_g<)l:$@37NNC_s/N", "l1MG#>TGHh>eFBG*IOIz*", "<56k1aNtp#p4flq[oqN_ZS^7,k^)BPqbRslYp4.XK@p|OMIxjOtG1", "=x_[U;Iy}b`>qhi:)Ym;<>$`m_Ja[Mm[W_(zc:%3G/qTK", "A;IC%TYbCP^Ff!s:Vh=a_w[meN", "`3Q0K&bfKbm,Bh2v_;C_Q@Kytb", ",A3}r$>bD6p", 'ih;aN#TV7HgwU*126G7A#G"e', "!WD>9!6AyQjGnpzzHs),sx)F<!,bwmF", "nlp_1o)F(!2f>po3D1ZT,{iX9n0eIO&*rbsC`^jH0kFp*M", "EG2_m>_PdWN_vUd1Dp^(d$te", "nW8kXCjzDVcPWHu=+hoJq><Bdrq}Ch]`6:JX%_RH[6,s,I", 'zNzCft"@HErGuB|$PxiISxh/%htR[$+cx7S>J,2?|J3>v>d', "5WTG9|%9ik$32U37=pd}9oU)LO6!*MG:oGy*1@(f%h%8]DA9!W5g", "X5ud&mafOVG|`M", "B1ECw@?mh6n41<|j$1KLx<0GFniI%DZ(Kz9_oW|PV4d0Px:jvYiav", "Phf_C&zj7P@EOhp1d.),(", "|n2G^^(a%W|k[M[y>_)d", "RY,XD0L98N", "Gx5z6tme|RRnp*Y$:Yk]}ff+9Pb`tIm`#xl}hptG_j$Xe", "[x2_~B^H/b3Q>o&cJ1[TI#^X$Pk>f;=j|3l,*_Aal", ".[XNp5S:fFBXe&k[JpSJg>(fKbEPMvH1v:_(_,^QQN", ",W/N<#Qv^_*dCwt*.3sXo@6`/O!}qmQ:1zM", "wq3*OCHXdr/Tul", "iv:D7SUPVk", "$GId?<FqhbL,BMt341sIA3:/vn+,=!_:~rmX", 'rbZDfajBnVX7Rwkb);#XjL#sUb3i.h.$X.#JOSA/FhMNVw0$B;G,_w"mt@a', "D_CNi|u`+PwOQ#+U07zXGxK", "B:Q_|Y6F%!K0A<qxChe`?fhaiVIMep@(", "@1TAHpy`Gj{[ChQrC3sI$:!zTP)CFB:jVWv}zfDe", "_hh[F|WY!Qz36Hz`XVVae=K", "1#B(CV@?dW_hLD5`(5]}Y@HHZH0qnm:jzzK]TCfP9P/}f?TvT!+DyD4+Ej", "tG)XGx2j%niR3x})O#0kJJ&P>rNra!+(*zb0sxgHX", 'oG&;za"7VOrwmIT$uY+(gYM9w_5km)r3Obl', "O;Yzk+>P)@z>cg", ":WqNyD^iQVQmm>:[F.L[*Lvjyr", "5[]_5)Psw#T}<9Kz}lsCYtM+ZPsTSPI`$lE[u0CeX", "H1WIa0GBeb046tl`V[^XKs6PmH`W9*~cB[iIRY!zZH5Tc<2[hNc[]<mX_jzme", "X@l}S5Iy.nxi`w+cRY[NgJ@?d!CI_xW)@{D}0otXA", ")5aJMpUMH6_6c<?vg#sI[<Qe", "wA!}G,~?]VS", '*."ALSQep@5qr)uj&TE[5CtXVJ<ezI}QMzzCNpmG.!wz,Im9Xe', "%pd}I>N00ns|F*eQ]GKGgtb9pbLY?l]`*zvG.w(9}F.", "gV8,QWGVD@#fQ<@?g1fN4#9k&_TfpI]7UAw}1ay:|JcH?$p=$Y=a`BiG#RIMe", ")YxC4wtmS_,II;t*eY2`0tyPo_F5%vzQPx9`)0zj;/nhep3b<haJra;0nO", "~yG}rSHvaj~crldj7;$|6pd9VbP4PH~Ubs]AVi;e", "a@e_ioVe/VR<7hq[AVXNM&w91!h`>O{*)#d}Y|}FAPftk*j*@N~N~{GjkH", "XbJX>|L3M@9prlh*Z3CN$DlvdrGf/O}QAFv*:5I`g_4qN<!zP{$[Rm|bcPa", "VWKLFmDH#hX7?P,jeIj,U)T@kr8!*1+UGpKN2VG7l#Ph^I", 'BnBTL|%a.r8Vr!Z3ZyTA[;}aQb^kMv92"QdGI>zX;Hm6sH~c', "}A}A[LG?eNtO+DWz=7b}V=^zK6Lbqv$v", ">xfT3ToHkdQQ7M@7k7107S59SV@a$vny3#e}}BbYvn&8_v8)fG5X", "5G&zZ|us8/m?&;%U/G9GBqqa6N", "4_7TNp&30kr|31_(8_ca+ap+K6%k[$;[G@7Ac;bsjN29H#M)~Wl", '4rB(3^]0{E}>fou$M@i|1L|s]#sa*h"3,K', ")F9_<P0VnOUr1x:$l?BIY|(k)N?", '"yG,q#ejZH', "RFiIX),@I", "(OpN<=VeX", "8AvG?LyPI", "W_@}TWQHUOli:B&cU.gX{G_+n@9|&#M`He", 'l_)X=xc9"r"e4ovzD{0J%aK', "E5!JvL:b^Px|~BB=0451~$yM", "k;a[NC_bYhR`Z?J:P3u,RYaM", "LG1G8CfaRn}>2IM7xN=(kSWMBFPqExt:xFs|R$Fk5@IipO[zRFM", 'LTN*JxxVLktJht1)js5S,Y+F<J<DH#8xc;g[1Lq+"n{|PDN', "!151d|:MLJ&cOh&(2.A|&oaa{!`he", 'Z!p_)LpsR!*i}*^:"pJYa>3FING!SH}`C@fGwoG7kH?mAS"7bb*zFYeH{hh`e', "KEfDKP_a4H4vD>S:}3b}p=^Qhbp|8PU=", "/:gYdWFaG_+8dh)Q", "Ubm;=T[?tO_?)o;v3#r,h|0ivQ2l:lS*`s@k/3#`bNFiH#H*>K", "`z3>/s0H6VVa$vC25(cIoLw3WOlLK", "LQ7]~!k9QNr|D>A", "7_AC/>kM", "6ym#y0:(", "ZhfNB5#MM", ":1l};cQjX", "bL#ZvW{qU", "4kHZcz#GU", "=;zQ]h^}A", "(!lw9.%N8Z}biSZDu5Vpf`]UEL", "uY`b[HCYkagW4hpNiN18M;T`*L", '"@nV,e&DJ*8"?w>|yFeHw.iD;N', "7?wFvl^C", "tOR:2,tH", "`.^=/l5D", "0asCoejD", "X^Y:@a)D", '|Tsqj>#"', '9bf&>Lp"', 'bPsCKMKyzW+u"*`', "IWd/PI|y_S1GVa8", "/ZXOgCcGZdn]}9`", "]k8X+$bZJhldx?%", "1wQC=@|yid(a}*`", 'B1cJ}t4"m[oXax%JSZ@q<YUGbv=!{y;NR{W~Ers3=vddaD', '/Z~XA4XGbvzXw4vbkk/L:$=$@KoX"X#QB!!:n+.WS^2WQ"', "5kAqRC0^=N_kx*i<wRmwc0pyid100*}Q(x~XD3XGbv[p)9", '==`q$3,GIdakj*ph:=`qi4MG6APkh*H#M{k:)a"P|Of__D', 'OpG)AW]"F', "{[P:<[&VV", "<u%JC[b*x", "UXyJxsg", "L{,Sote+", "h{<Q44MxDrf", ".FCO5jqZ", "/ZfJ<w08", "(iCI]w48", "MZx[", "ZZ=pgwK8", "w*`Sb", '"Z|MXS=', '"Zo#uPH8', "{ZX[", "CAF].&G;", "7M2r84p+", 'X2`KQB!^t<G.(5Z~:dq_xx%)>$"9bWZ~>zjo>:XIy[9CNM:2W2wS_', "wU.rq,5pSO^9iQB[P%u$66;)YNE2kDB[9(ga]]s+Pq^1{niIlL", "f(2r9WF&7HujI.YAA(3v069+^_h1/9P0bKi1a", "cs]_", "$#l!nCk;", "6Lf;?vCa", "x7^h9uGa", "Y,yI9;KN", "AxsAU5G+A2", "eUdJ[(f;", ">9~j", "<xSjk", "(P@j", "~UFAzWd", "<&}h?A0N", "7V}QdX2<", "[3H*G{!<", ":OQbVg5", "PbR)a*]<", "bv#.;tD<", "NwHI0X|<", "NwNQb", "9r6}C]okJeLWRv@B(rhTvIu", "9r6}C]ok%c_il(mg4jPpUoE:JeLWRv&", "4&cRKh?vzNX)s7n#}&:*7J^", "pE*Asy[X>Uf!A?qF^C*oAw@XypU", "pIr^[iR", "8L!>rwxC", "sNZf", "b#:1)Zf;"]), ki(Ic = function(...pp) {
      ki(pp[di[13]] = di[1], pp[di[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], pp[di[14]] = di[17], pp[di[15]] = []);
      try {
        ki(pp[di[14]] = Object, pp[di[15]][di[25]]("".__proto__.constructor.name))
      } catch (Hi) {}
      pp: for (pp[di[4]] = di[1]; pp[di[4]] < pp[di[5]][di[13]]; pp[di[4]]++) try {
        for (pp[di[14]] = pp[di[5]][pp[di[4]]](), pp[di[10]] = di[1]; pp[di[10]] < pp[di[15]][di[13]]; pp[di[10]]++)
          if (typeof pp[di[14]][pp[di[15]][pp[di[10]]]] === di[16]) continue pp;
        return pp[di[14]]
      } catch (Hi) {}
      return pp[di[14]] || this
    }() || {}, Sc = Ic.TextDecoder, xc = Ic.Uint8Array, Lc = Ic.my, Yc = Ic.String || String, Dc = Ic.Array || Array, Ac = function(...pp) {
      return ki(pp[di[13]] = di[1], pp[di[26]] = new Dc(di[68]), pp[di[27]] = Yc[di[22]] || Yc.fromCharCode, pp[di[18]] = []),
        function(...ip) {
          for (ki(ip[di[13]] = di[2], ip[di[5]] = di[17], ip[di[20]] = di[17], ip[di[19]] = ip[di[1]][di[13]], pp[di[18]][di[13]] = di[1]), ip[di[10]] = di[1]; ip[di[10]] < ip[di[19]];) ki(ip[di[20]] = ip[di[1]][ip[di[10]]++], ip[di[20]] <= di[66] ? ip[di[5]] = ip[di[20]] : ip[di[20]] <= di[43] ? ip[di[5]] = (ip[di[20]] & di[93]) << di[9] | ip[di[1]][ip[di[10]]++] & di[21] : ip[di[20]] <= di[42] ? ip[di[5]] = (ip[di[20]] & di[61]) << di[24] | (ip[di[1]][ip[di[10]]++] & di[21]) << di[9] | ip[di[1]][ip[di[10]]++] & di[21] : Yc[di[22]] ? ip[di[5]] = (ip[di[20]] & di[23]) << di[94] | (ip[di[1]][ip[di[10]]++] & di[21]) << di[24] | (ip[di[1]][ip[di[10]]++] & di[21]) << di[9] | ip[di[1]][ip[di[10]]++] & di[21] : (ip[di[5]] = di[21], ip[di[10]] += di[4]), pp[di[18]][di[25]](pp[di[26]][ip[di[5]]] || (pp[di[26]][ip[di[5]]] = pp[di[27]](ip[di[5]]))));
          return pp[di[18]].join("")
        }
    }()), ei(di[65]) in ji && function() {
      var pp = function(...pp) {
        for (ki(pp[di[13]] = di[2], pp[-di[29]] = pp[di[1]].length, pp[di[31]] = [], pp[di[4]] = di[1], pp[di[30]] = di[1], pp[di[1]].sort(((pp, ip) => pp - ip))), pp[di[28]] = di[1]; pp[di[28]] < pp[-di[29]]; pp[di[28]]++)
          if (!(pp[di[28]] > di[1] && pp[di[1]][pp[di[28]]] === pp[di[1]][pp[di[28]] - di[2]]))
            for (ki(pp[di[4]] = pp[di[28]] + di[2], pp[di[30]] = pp[-di[29]] - di[2]); pp[di[4]] < pp[di[30]];)
              if (pp[di[1]][pp[di[28]]] + pp[di[1]][pp[di[4]]] + pp[di[1]][pp[di[30]]] < di[1]) pp[di[4]]++;
              else if (pp[di[1]][pp[di[28]]] + pp[di[1]][pp[di[4]]] + pp[di[1]][pp[di[30]]] > di[1]) pp[di[30]]--;
        else {
          for (pp[di[31]].push([pp[di[1]][pp[di[28]]], pp[di[1]][pp[di[4]]], pp[di[1]][pp[di[30]]]]); pp[di[4]] < pp[di[30]] && pp[di[1]][pp[di[4]]] === pp[di[1]][pp[di[4]] + di[2]];) pp[di[4]]++;
          for (; pp[di[4]] < pp[di[30]] && pp[di[1]][pp[di[30]]] === pp[di[1]][pp[di[30]] - di[2]];) pp[di[30]]--;
          ki(pp[di[4]]++, pp[di[30]]--)
        }
        return pp[di[31]]
      };
      console.log(pp)
    }(), (() => {
      function pp(...pp) {
        return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
          for (ki(pp[di[13]] = di[2], pp[di[2]] = 'Bkq58nAULRj@YG!t[Nm|Moz1}4Sps?<Q,uD`7.9f;gC>vPOI:wV+{2Z3xJ(Fy=*al~^0e$rHb#c6d]E"Wh&KXTi%_)/', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[0]].length, pp[di[30]] = [], pp[di[42]] = di[1], pp[di[9]] = di[1], pp[di[43]] = -di[2]), pp[di[44]] = di[1]; pp[di[44]] < pp[di[15]]; pp[di[44]]++)
            if (pp[di[6]] = pp[di[2]].indexOf(pp[di[0]][pp[di[44]]]), pp[di[6]] !== -di[2])
              if (pp[di[43]] < di[1]) pp[di[43]] = pp[di[6]];
              else {
                ki(pp[di[43]] += pp[di[6]] * di[32], pp[di[42]] |= pp[di[43]] << pp[di[9]], pp[di[9]] += (pp[di[43]] & di[33]) > di[34] ? di[35] : di[36]);
                do {
                  ki(pp[di[30]].push(pp[di[42]] & di[12]), pp[di[42]] >>= di[11], pp[di[9]] -= di[11])
                } while (pp[di[9]] > di[23]);
                pp[di[43]] = -di[2]
              } return pp[di[43]] > -di[2] && pp[di[30]].push((pp[di[42]] | pp[di[43]] << pp[di[9]]) & di[12]), ui(pp[di[30]])
        }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
      } [][di[13]] = di[1];
      const ip = di[6],
        cp = ei(di[34]) + ei(di[62]) + pp(90) + pp(di[32]) + pp(92),
        Op = {
          [di[6]]: pp(93) + pp(94) + pp(95) + "1"
        },
        op = (...pp) => {
          function ip(...pp) {
            return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
              for (ki(pp[di[13]] = di[2], pp[-di[46]] = 'SCNqiOFIe@o^t`YE,r;cX.B>Vw|v=%PA:U?/f!nm}QJpTHx)3Dby#(0gZ2+7k9MKd*[5s"uW{l6j$aG81&4z<RhL_]~', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[0]].length, pp[di[30]] = [], pp[di[48]] = di[1], pp[di[49]] = di[1], pp[di[47]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[15]]; pp[di[45]]++)
                if (pp[di[6]] = pp[-di[46]].indexOf(pp[di[0]][pp[di[45]]]), pp[di[6]] !== -di[2])
                  if (pp[di[47]] < di[1]) pp[di[47]] = pp[di[6]];
                  else {
                    ki(pp[di[47]] += pp[di[6]] * di[32], pp[di[48]] |= pp[di[47]] << pp[di[49]], pp[di[49]] += (pp[di[47]] & di[33]) > di[34] ? di[35] : di[36]);
                    do {
                      ki(pp[di[30]].push(pp[di[48]] & di[12]), pp[di[48]] >>= di[11], pp[di[49]] -= di[11])
                    } while (pp[di[49]] > di[23]);
                    pp[di[47]] = -di[2]
                  } return pp[di[47]] > -di[2] && pp[di[30]].push((pp[di[48]] | pp[di[47]] << pp[di[49]]) & di[12]), ui(pp[di[30]])
            }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
          }
          pp[di[13]] = di[2], ip(96) in ji && function(...pp) {
            function ip(...pp) {
              for (ki(pp[di[13]] = di[2], pp[di[2]] = 'HD"w9`=8O6iA%*Q1N^#V<hIZy{q:+B~CJjTb3x4fY)E@s}p2!XzGd/(Sk]|[lvKW$uocF0aL?_P,&M>5tUR7g.;remn', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[di[0]].length, pp[-di[50]] = [], pp[di[48]] = di[1], pp[di[49]] = di[1], pp[di[23]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[4]]; pp[di[45]]++)
                if (pp[di[6]] = pp[di[2]].indexOf(pp[di[0]][pp[di[45]]]), pp[di[6]] !== -di[2])
                  if (pp[di[23]] < di[1]) pp[di[23]] = pp[di[6]];
                  else {
                    ki(pp[di[23]] += pp[di[6]] * di[32], pp[di[48]] |= pp[di[23]] << pp[di[49]], pp[di[49]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
                    do {
                      ki(pp[-di[50]].push(pp[di[48]] & di[12]), pp[di[48]] >>= di[11], pp[di[49]] -= di[11])
                    } while (pp[di[49]] > di[23]);
                    pp[di[23]] = -di[2]
                  } return pp[di[23]] > -di[2] && pp[-di[50]].push((pp[di[48]] | pp[di[23]] << pp[di[49]]) & di[12]), ui(pp[-di[50]])
            }

            function cp(...pp) {
              return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = ip(Hi[pp[di[1]]]) : ti[pp[di[1]]]
            }
            pp[di[13]] = di[1], ki(pp[di[51]] = cp(97) + cp(98) + cp(99) + cp(di[58]) + cp(101) + cp(102) + "om", pp[di[0]] = cp(103) + cp(104) + cp(105) + cp(106) + cp(107) + "?", pp[di[20]] = cp(108) + cp(di[27]) + cp(110) + cp(di[99]), pp[di[51]].match(pp[di[0]] + pp[di[20]]))
          }();
          const cp = Op[pp[di[1]]];
          if (!cp) {
            function op(...pp) {
              for (ki(pp[di[13]] = di[2], pp[di[2]] = 'gUVBX%Hx;vJ)Z*8M+6Q$1y^RAO9`(<eW"P]E{l3wn>jumtr0I#_5.a@d!}?|&KYb=~zoG7:[/4cCD,TL2iFshkNfSqp', pp[di[52]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[di[52]].length, pp[-di[55]] = [], pp[di[54]] = di[1], pp[di[9]] = di[1], pp[-di[53]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[4]]; pp[di[45]]++)
                if (pp[di[6]] = pp[di[2]].indexOf(pp[di[52]][pp[di[45]]]), pp[di[6]] !== -di[2])
                  if (pp[-di[53]] < di[1]) pp[-di[53]] = pp[di[6]];
                  else {
                    ki(pp[-di[53]] += pp[di[6]] * di[32], pp[di[54]] |= pp[-di[53]] << pp[di[9]], pp[di[9]] += (pp[-di[53]] & di[33]) > di[34] ? di[35] : di[36]);
                    do {
                      ki(pp[-di[55]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[di[9]] -= di[11])
                    } while (pp[di[9]] > di[23]);
                    pp[-di[53]] = -di[2]
                  } return pp[-di[53]] > -di[2] && pp[-di[55]].push((pp[di[54]] | pp[-di[53]] << pp[di[9]]) & di[12]), ui(pp[-di[55]])
            }

            function Ip(...pp) {
              return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = op(Hi[pp[di[1]]]) : ti[pp[di[1]]]
            }
            throw new Error(ip(112) + Ip(113) + Ip(di[8]) + Ip(115) + pp[di[1]])
          }
          return [di[1], di[2], di[20], di[4], di[10], di[54], di[9], di[23]].map(((...pp) => {
            function ip(...pp) {
              return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
                for (ki(pp[di[13]] = di[2], pp[di[56]] = 'P+v&*Tl.pHszAMU<]bnu|BJ:`cwI1Lah07}CNkDtj)$X,;g_@e[f2xoy/W9Z{#%(r6V8EiRmGqOYQSKFd4"~?3=^>!5', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[di[0]].length, pp[di[30]] = [], pp[di[54]] = di[1], pp[di[9]] = di[1], pp[di[7]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[4]]; pp[di[45]]++)
                  if (pp[-di[57]] = pp[di[56]].indexOf(pp[di[0]][pp[di[45]]]), pp[-di[57]] !== -di[2])
                    if (pp[di[7]] < di[1]) pp[di[7]] = pp[-di[57]];
                    else {
                      ki(pp[di[7]] += pp[-di[57]] * di[32], pp[di[54]] |= pp[di[7]] << pp[di[9]], pp[di[9]] += (pp[di[7]] & di[33]) > di[34] ? di[35] : di[36]);
                      do {
                        ki(pp[di[30]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[di[9]] -= di[11])
                      } while (pp[di[9]] > di[23]);
                      pp[di[7]] = -di[2]
                    } return pp[di[7]] > -di[2] && pp[di[30]].push((pp[di[54]] | pp[di[7]] << pp[di[9]]) & di[12]), ui(pp[di[30]])
              }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
            }
            return pp[di[13]] = di[2], ip(116) in ji && function(...pp) {
              pp[di[13]] = di[1]
            }(), parseInt(cp[ip(117)](pp[di[1]] * di[11], pp[di[1]] * di[11] + di[11]), di[92])
          }))
        };
      ki(xi = (...pp) => (pp[di[13]] = di[2], function(...pp) {
        return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
          for (ki(pp[di[13]] = di[2], pp[di[2]] = 'E0ZP$VOi})(D`;X]T9<!n6ozIRc7Ahfs:%/J^|5.yaqHrmW+SB@F[81*xe4G,Ud=2Ct>l3w~vg?MNpu"jk&{Y_#LQKb', pp[-di[59]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[-di[59]].length, pp[di[10]] = [], pp[di[48]] = di[1], pp[di[9]] = di[1], pp[di[7]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[4]]; pp[di[45]]++)
            if (pp[di[60]] = pp[di[2]].indexOf(pp[-di[59]][pp[di[45]]]), pp[di[60]] !== -di[2])
              if (pp[di[7]] < di[1]) pp[di[7]] = pp[di[60]];
              else {
                ki(pp[di[7]] += pp[di[60]] * di[32], pp[di[48]] |= pp[di[7]] << pp[di[9]], pp[di[9]] += (pp[di[7]] & di[33]) > di[34] ? di[35] : di[36]);
                do {
                  ki(pp[di[10]].push(pp[di[48]] & di[12]), pp[di[48]] >>= di[11], pp[di[9]] -= di[11])
                } while (pp[di[9]] > di[23]);
                pp[di[7]] = -di[2]
              } return pp[di[7]] > -di[2] && pp[di[10]].push((pp[di[48]] | pp[di[7]] << pp[di[9]]) & di[12]), ui(pp[di[10]])
        }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
      }(di[50]) + "o" in ji && function() {
        const pp = require("big-integer");
        class ip {
          static randomPrime(ip) {
            const cp = pp.one.shiftLeft(ip - di[2]),
              Op = pp.one.shiftLeft(ip).prev();
            for (; di[75];) {
              let ip = pp.randBetween(cp, Op);
              if (ip.isProbablePrime(256)) return ip
            }
          }
          static generate(...ip) {
            ip[di[13]] = di[2];
            const cp = pp(65537);
            let Op, op;
            ip[di[61]] = di[17];
            do {
              ki(Op = this.randomPrime(ip[di[1]] / di[20]), op = this.randomPrime(ip[di[1]] / di[20]), ip[di[61]] = pp.lcm(Op.prev(), op.prev()))
            } while (pp.gcd(cp, ip[di[61]]).notEquals(di[2]) || Op.minus(op).abs().shiftRight(ip[di[1]] / di[20] - di[58]).isZero());
            return {
              e: cp,
              n: Op.multiply(op),
              d: cp.modInv(ip[di[61]])
            }
          }
          static encrypt(...ip) {
            return ip[di[13]] = di[4], pp(ip[di[1]]).modPow(ip[di[20]], ip[di[2]])
          }
          static decrypt(...ip) {
            return ip[di[13]] = di[4], pp(ip[di[1]]).modPow(ip[di[2]], ip[di[20]])
          }
          static encode(...ip) {
            ip[di[13]] = di[2];
            const cp = ip[di[1]].split("").map((pp => pp.charCodeAt())).join("");
            return pp(cp)
          }
          static decode(...pp) {
            pp[di[13]] = di[2];
            const ip = pp[di[1]].toString();
            pp[di[2]] = "";
            for (let cp = di[1]; cp < ip.length; cp += di[20]) {
              let Op = Number(ip.substr(cp, di[20]));
              Op <= 30 ? (pp[di[2]] += String.fromCharCode(Number(ip.substr(cp, di[4]))), cp++) : pp[di[2]] += String.fromCharCode(Op)
            }
            return pp[di[2]]
          }
        }
        module.exports = ip
      }(), pp[di[1]] >= ip), Li = (...pp) => {
        function ip(...pp) {
          return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
            for (ki(pp[di[13]] = di[2], pp[di[2]] = '=:8AFV`m>p[1NxcZQ_/7oXf"}lH(9b{qM.4@kv0z<],ihBag;yK*rEIJ)CjD^~sU6tW$w&%T!R?YS#uOLP+|edn2G35', pp[-di[56]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[-di[56]].length, pp[di[63]] = [], pp[di[62]] = di[1], pp[di[49]] = di[1], pp[di[7]] = -di[2]), pp[di[11]] = di[1]; pp[di[11]] < pp[di[4]]; pp[di[11]]++)
              if (pp[di[44]] = pp[di[2]].indexOf(pp[-di[56]][pp[di[11]]]), pp[di[44]] !== -di[2])
                if (pp[di[7]] < di[1]) pp[di[7]] = pp[di[44]];
                else {
                  ki(pp[di[7]] += pp[di[44]] * di[32], pp[di[62]] |= pp[di[7]] << pp[di[49]], pp[di[49]] += (pp[di[7]] & di[33]) > di[34] ? di[35] : di[36]);
                  do {
                    ki(pp[di[63]].push(pp[di[62]] & di[12]), pp[di[62]] >>= di[11], pp[di[49]] -= di[11])
                  } while (pp[di[49]] > di[23]);
                  pp[di[7]] = -di[2]
                } return pp[di[7]] > -di[2] && pp[di[63]].push((pp[di[62]] | pp[di[7]] << pp[di[49]]) & di[12]), ui(pp[di[63]])
          }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
        }
        pp[di[13]] = di[20];
        const cp = crypto[ip(119) + ip(120) + ip(121)](new Uint8Array(Ai)),
          Op = Si[di[0]][ip(di[96]) + ip(di[88])](pp[di[2]], {
            [ip(di[78])]: di[2]
          });
        Di(op(pp[di[1]]), cp, di[2], Op);
        const Ip = new Uint8Array(Ai + Op[ip(di[55])]);
        return ki(Ip[ip(di[19])](cp), Ip[ip(di[19])](Op, Ai)), Ip
      }, Yi = (...pp) => {
        function ip(...pp) {
          return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
            for (ki(pp[di[13]] = di[2], pp[di[2]] = 'd,;49@>3+Jj.GSs#ieagl2=$})k8<bFA10qNrQ&|U{V7%~O[I6fP]mLzo^y:xpwKv/RY(?Wu*HTtZ!nc5CBDhEXM"_`', pp[di[64]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[64]].length, pp[di[10]] = [], pp[di[54]] = di[1], pp[di[49]] = di[1], pp[di[23]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[15]]; pp[di[45]]++)
              if (pp[-di[65]] = pp[di[2]].indexOf(pp[di[64]][pp[di[45]]]), pp[-di[65]] !== -di[2])
                if (pp[di[23]] < di[1]) pp[di[23]] = pp[-di[65]];
                else {
                  ki(pp[di[23]] += pp[-di[65]] * di[32], pp[di[54]] |= pp[di[23]] << pp[di[49]], pp[di[49]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
                  do {
                    ki(pp[di[10]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[di[49]] -= di[11])
                  } while (pp[di[49]] > di[23]);
                  pp[di[23]] = -di[2]
                } return pp[di[23]] > -di[2] && pp[di[10]].push((pp[di[54]] | pp[di[23]] << pp[di[49]]) & di[12]), ui(pp[di[10]])
          }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
        }
        if (pp[di[13]] = di[20], ip(di[66]) + di[49] in ji && function(...pp) {
            pp[di[13]] = di[1]
          }(), pp[di[2]][ip(133)] < Ai) {
          function Sp(...pp) {
            for (ki(pp[di[13]] = di[2], pp[di[5]] = '8NaLlOsSIbrnAWMqiBotGFpkUdcHCgmKhDQ^TJ&]*R9@<,{fZe1y$wXPVxE)Y5j+/:|z7(4?>;.!2=~vu03#[`}"_6%', pp[di[20]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[20]].length, pp[di[10]] = [], pp[-di[50]] = di[1], pp[di[7]] = di[1], pp[di[45]] = -di[2]), pp[di[11]] = di[1]; pp[di[11]] < pp[di[15]]; pp[di[11]]++)
              if (pp[di[6]] = pp[di[5]].indexOf(pp[di[20]][pp[di[11]]]), pp[di[6]] !== -di[2])
                if (pp[di[45]] < di[1]) pp[di[45]] = pp[di[6]];
                else {
                  ki(pp[di[45]] += pp[di[6]] * di[32], pp[-di[50]] |= pp[di[45]] << pp[di[7]], pp[di[7]] += (pp[di[45]] & di[33]) > di[34] ? di[35] : di[36]);
                  do {
                    ki(pp[di[10]].push(pp[-di[50]] & di[12]), pp[-di[50]] >>= di[11], pp[di[7]] -= di[11])
                  } while (pp[di[7]] > di[23]);
                  pp[di[45]] = -di[2]
                } return pp[di[45]] > -di[2] && pp[di[10]].push((pp[-di[50]] | pp[di[45]] << pp[di[7]]) & di[12]), ui(pp[di[10]])
          }

          function xp(...pp) {
            return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = Sp(Hi[pp[di[1]]]) : ti[pp[di[1]]]
          }

          function Lp(...pp) {
            pp[di[13]] = di[1]
          }
          throw xp(di[51]) in ji && Lp(), new Error(cp)
        }
        const Op = new Uint8Array(pp[di[2]][ip(di[74])](Ai));
        Di(op(pp[di[1]]), pp[di[2]][ip(di[74])](di[1], Ai), di[2], Op);
        const Ip = new(Si[di[0]][ip(138) + di[48]])({
          [ip(di[79])]: di[75]
        });
        if (Ip[ip(140)](Op), Ip[ip(141)] || !Ip[ip(142)]) {
          function Yp(...pp) {
            for (ki(pp[di[13]] = di[2], pp[di[5]] = 'udN1nexmpGQB&?*U[9KECt+/kf4"azhT}8R@Ag=ZrY0F~2D`M(cP><;3O#._jvbJ%Liq)5{HS7oy]!l$W:^6Is|VwX,', pp[di[20]] = "" + (pp[di[1]] || ""), pp[-di[77]] = pp[di[20]].length, pp[di[10]] = [], pp[di[54]] = di[1], pp[di[49]] = di[1], pp[di[23]] = -di[2]), pp[-di[76]] = di[1]; pp[-di[76]] < pp[-di[77]]; pp[-di[76]]++)
              if (pp[di[78]] = pp[di[5]].indexOf(pp[di[20]][pp[-di[76]]]), pp[di[78]] !== -di[2])
                if (pp[di[23]] < di[1]) pp[di[23]] = pp[di[78]];
                else {
                  ki(pp[di[23]] += pp[di[78]] * di[32], pp[di[54]] |= pp[di[23]] << pp[di[49]], pp[di[49]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
                  do {
                    ki(pp[di[10]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[di[49]] -= di[11])
                  } while (pp[di[49]] > di[23]);
                  pp[di[23]] = -di[2]
                } return pp[di[23]] > -di[2] && pp[di[10]].push((pp[di[54]] | pp[di[23]] << pp[di[49]]) & di[12]), ui(pp[di[10]])
          }

          function Dp(...pp) {
            return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = Yp(Hi[pp[di[1]]]) : ti[pp[di[1]]]
          }

          function Ap() {
            function pp(...pp) {
              return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
                for (ki(pp[di[13]] = di[2], pp[di[2]] = '|rCIAWnBfE21o[&N9pat5;K]es{7x4!>%u})Oy^GLX3+D,YkUQ"vq:zjMdR6J8#m$V@l~*FHw/bZ=0c(.P?T`h_igS<', pp[di[0]] = "" + (pp[di[1]] || ""), pp[-di[79]] = pp[di[0]].length, pp[di[10]] = [], pp[di[54]] = di[1], pp[di[49]] = di[1], pp[di[80]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[-di[79]]; pp[di[45]]++)
                  if (pp[di[6]] = pp[di[2]].indexOf(pp[di[0]][pp[di[45]]]), pp[di[6]] !== -di[2])
                    if (pp[di[80]] < di[1]) pp[di[80]] = pp[di[6]];
                    else {
                      ki(pp[di[80]] += pp[di[6]] * di[32], pp[di[54]] |= pp[di[80]] << pp[di[49]], pp[di[49]] += (pp[di[80]] & di[33]) > di[34] ? di[35] : di[36]);
                      do {
                        ki(pp[di[10]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[di[49]] -= di[11])
                      } while (pp[di[49]] > di[23]);
                      pp[di[80]] = -di[2]
                    } return pp[di[80]] > -di[2] && pp[di[10]].push((pp[di[54]] | pp[di[80]] << pp[di[49]]) & di[12]), ui(pp[di[10]])
              }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
            }! function(...pp) {
              function ip(pp) {
                var ip, cp, Op, op, Ip = [];
                for (ki(ip = di[1], cp = pp.length, Op = void 0, op = void 0); ip < cp;) ki(Op = pp.charCodeAt(ip++), Op >= di[86] && Op <= 56319 && ip < cp ? (64512 & (op = pp.charCodeAt(ip++))) == di[87] ? Ip.push(((Op & di[81]) << di[41]) + (op & di[81]) + di[84]) : (Ip.push(Op), ip--) : Ip.push(Op));
                return Ip
              }

              function cp(...pp) {
                if (pp[di[13]] = di[2], pp[di[1]] >= di[86] && pp[di[1]] <= 57343) {
                  function ip(...pp) {
                    for (ki(pp[di[13]] = di[2], pp[di[88]] = '5v<7`z"4.~)U!RuODCy}8_Xkebqs&jg:QfwxLJ@T]aBVYl162#E3HI|/K?o(hPiM>AcGnm+d{^0N%*9StrW=[$,Z;Fp', pp[-di[56]] = "" + (pp[di[1]] || ""), pp[di[4]] = pp[-di[56]].length, pp[di[10]] = [], pp[di[54]] = di[1], pp[-di[91]] = di[1], pp[di[23]] = -di[2]), pp[-di[89]] = di[1]; pp[-di[89]] < pp[di[4]]; pp[-di[89]]++)
                      if (pp[-di[90]] = pp[di[88]].indexOf(pp[-di[56]][pp[-di[89]]]), pp[-di[90]] !== -di[2])
                        if (pp[di[23]] < di[1]) pp[di[23]] = pp[-di[90]];
                        else {
                          ki(pp[di[23]] += pp[-di[90]] * di[32], pp[di[54]] |= pp[di[23]] << pp[-di[91]], pp[-di[91]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
                          do {
                            ki(pp[di[10]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[-di[91]] -= di[11])
                          } while (pp[-di[91]] > di[23]);
                          pp[di[23]] = -di[2]
                        } return pp[di[23]] > -di[2] && pp[di[10]].push((pp[di[54]] | pp[di[23]] << pp[-di[91]]) & di[12]), ui(pp[di[10]])
                  }

                  function cp(pp) {
                    return typeof ti[pp] === di[16] ? ti[pp] = ip(Hi[pp]) : ti[pp]
                  }
                  throw Error(cp(di[26]) + cp(145) + cp(di[37]) + pp[di[1]].toString(di[92]).toUpperCase() + (cp(147) + cp(148) + cp(149) + cp(150)))
                }
              }

              function Op(...ip) {
                return ip[di[13]] = di[20], pp[-di[29]](ip[di[1]] >> ip[di[2]] & di[21] | di[68])
              }

              function op(...ip) {
                return ip[di[13]] = di[2], (4294967168 & ip[di[1]]) == di[1] ? pp[-di[29]](ip[di[1]]) : (ip[di[2]] = "", (4294965248 & ip[di[1]]) == di[1] ? ip[di[2]] = pp[-di[29]](ip[di[1]] >> di[9] & di[93] | di[98]) : (4294901760 & ip[di[1]]) == di[1] ? ki(cp(ip[di[1]]), ip[di[2]] = pp[-di[29]](ip[di[1]] >> di[24] & di[61] | di[105]), ip[di[2]] += Op(ip[di[1]], di[9])) : (4292870144 & ip[di[1]]) == di[1] && ki(ip[di[2]] = pp[-di[29]](ip[di[1]] >> di[94] & di[23] | di[108]), ip[di[2]] += Op(ip[di[1]], di[24]), ip[di[2]] += Op(ip[di[1]], di[9])), ip[di[2]] += pp[-di[29]](ip[di[1]] & di[21] | di[68]), ip[di[2]])
              }

              function Ip() {
                var ip;
                if (pp[di[97]] >= pp[-di[101]]) throw Error(Dp(151));
                if (ki(ip = pp[di[30]][pp[di[97]]] & di[12], pp[di[97]]++), (ip & di[98]) == di[68]) return ip & di[21];
                throw Error(Dp(di[107]))
              }

              function Sp(...ip) {
                if (ip[di[13]] = di[1], ki(ip[di[5]] = di[17], ip[di[106]] = di[17], ip[di[109]] = di[17], ip[di[4]] = di[17], ip[di[10]] = di[17]), pp[di[97]] > pp[-di[101]]) {
                  function Op(...pp) {
                    for (ki(pp[di[13]] = di[2], pp[di[2]] = '^0`=.N6YwHW#<D8r"4ZOK!V2vpb@Fo:*RlsnC_B>&$txEe,jf}[3{I/yu;|]S7TzgX5k9~MaQU?Gh%Li)PmcJ(q1+Ad', pp[di[0]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[0]].length, pp[di[10]] = [], pp[di[54]] = di[1], pp[-di[103]] = di[1], pp[di[23]] = -di[2]), pp[di[11]] = di[1]; pp[di[11]] < pp[di[15]]; pp[di[11]]++)
                      if (pp[di[102]] = pp[di[2]].indexOf(pp[di[0]][pp[di[11]]]), pp[di[102]] !== -di[2])
                        if (pp[di[23]] < di[1]) pp[di[23]] = pp[di[102]];
                        else {
                          ki(pp[di[23]] += pp[di[102]] * di[32], pp[di[54]] |= pp[di[23]] << pp[-di[103]], pp[-di[103]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
                          do {
                            ki(pp[di[10]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[-di[103]] -= di[11])
                          } while (pp[-di[103]] > di[23]);
                          pp[di[23]] = -di[2]
                        } return pp[di[23]] > -di[2] && pp[di[10]].push((pp[di[54]] | pp[di[23]] << pp[-di[103]]) & di[12]), ui(pp[di[10]])
                  }

                  function op(...pp) {
                    return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = Op(Hi[pp[di[1]]]) : ti[pp[di[1]]]
                  }
                  throw Error(op(153))
                }
                if (pp[di[97]] == pp[-di[101]]) return di[104];
                if (ki(ip[di[5]] = pp[di[30]][pp[di[97]]] & di[12], pp[di[97]]++), (ip[di[5]] & di[68]) == di[1]) return ip[di[5]];
                if ((ip[di[5]] & di[105]) == di[98]) {
                  if (ki(ip[di[106]] = Ip(), ip[di[10]] = (ip[di[5]] & di[93]) << di[9] | ip[di[106]]), ip[di[10]] >= di[68]) return ip[di[10]];
                  throw Error(Dp(di[107]))
                }
                if ((ip[di[5]] & di[108]) == di[105]) {
                  if (ki(ip[di[106]] = Ip(), ip[di[109]] = Ip(), ip[di[10]] = (ip[di[5]] & di[61]) << di[24] | ip[di[106]] << di[9] | ip[di[109]]), ip[di[10]] >= 2048) return cp(ip[di[10]]), ip[di[10]];
                  throw Error(Dp(di[107]))
                }
                if ((248 & ip[di[5]]) == di[108] && (ki(ip[di[106]] = Ip(), ip[di[109]] = Ip(), ip[di[4]] = Ip(), ip[di[10]] = (ip[di[5]] & di[23]) << di[94] | ip[di[106]] << di[24] | ip[di[109]] << di[9] | ip[di[4]]), ip[di[10]] >= di[84] && ip[di[10]] <= 1114111)) return ip[di[10]];
                throw Error(function(...pp) {
                  return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(...pp) {
                    for (ki(pp[di[13]] = di[2], pp[di[4]] = 'RxNSgJZcoBOCHWimQptFshe`XM8G!u]bAz"{jPL&E9V2T0Dk:7U56If^4rl?(d@<>/anqvKw$,[1yY;+#}3*%=.~)|_', pp[di[20]] = "" + (pp[di[1]] || ""), pp[di[15]] = pp[di[20]].length, pp[di[99]] = [], pp[di[54]] = di[1], pp[di[9]] = di[1], pp[di[23]] = -di[2]), pp[di[45]] = di[1]; pp[di[45]] < pp[di[15]]; pp[di[45]]++)
                      if (pp[-di[100]] = pp[di[4]].indexOf(pp[di[20]][pp[di[45]]]), pp[-di[100]] !== -di[2])
                        if (pp[di[23]] < di[1]) pp[di[23]] = pp[-di[100]];
                        else {
                          ki(pp[di[23]] += pp[-di[100]] * di[32], pp[di[54]] |= pp[di[23]] << pp[di[9]], pp[di[9]] += (pp[di[23]] & di[33]) > di[34] ? di[35] : di[36]);
                          do {
                            ki(pp[di[99]].push(pp[di[54]] & di[12]), pp[di[54]] >>= di[11], pp[di[9]] -= di[11])
                          } while (pp[di[9]] > di[23]);
                          pp[di[23]] = -di[2]
                        } return pp[di[23]] > -di[2] && pp[di[99]].push((pp[di[54]] | pp[di[23]] << pp[di[9]]) & di[12]), ui(pp[di[99]])
                  }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
                }(154))
              }
              pp[di[13]] = di[2], pp[-di[29]] = String.fromCharCode, ki(pp[di[30]] = di[17], pp[-di[101]] = di[17], pp[di[97]] = di[17]), ki(pp[di[1]].version = function(...pp) {
                return pp[di[13]] = di[2], typeof ti[pp[di[1]]] === di[16] ? ti[pp[di[1]]] = function(pp) {
                  var ip, cp, Op, op, Ip, Sp, xp;
                  for (ki(ip = "" + (pp || ""), cp = ip.length, Op = [], op = di[1], Ip = di[1], Sp = -di[2]), xp = di[1]; xp < cp; xp++) {
                    var Lp = 'RugYA|@cBN?vwlCJb3&VUdrMxD:aeL)Kfi"<$s1IykG#QZo=P^9+~.F,n!]4{5(*H2Sq>8T;tO06`/%z[_WE}Xpmj7h'.indexOf(ip[xp]);
                    if (Lp !== -di[2])
                      if (Sp < di[1]) Sp = Lp;
                      else {
                        ki(Sp += Lp * di[32], op |= Sp << Ip, Ip += (Sp & di[33]) > di[34] ? di[35] : di[36]);
                        do {
                          ki(Op.push(op & di[12]), op >>= di[11], Ip -= di[11])
                        } while (Ip > di[23]);
                        Sp = -di[2]
                      }
                  }
                  return Sp > -di[2] && Op.push((op | Sp << Ip) & di[12]), ui(Op)
                }(Hi[pp[di[1]]]) : ti[pp[di[1]]]
              }(155), pp[di[1]].encode = function(...pp) {
                for (ki(pp[di[13]] = di[2], pp[di[95]] = ip(pp[di[1]]), pp[di[0]] = pp[di[95]].length, pp[-di[96]] = -di[2], pp[di[10]] = di[17], pp[di[54]] = ""); ++pp[-di[96]] < pp[di[0]];) ki(pp[di[10]] = pp[di[95]][pp[-di[96]]], pp[di[54]] += op(pp[di[10]]));
                return pp[di[54]]
              }, pp[di[1]].decode = function(...cp) {
                for (ki(cp[di[13]] = di[2], pp[di[30]] = ip(cp[di[1]]), pp[-di[101]] = pp[di[30]].length, pp[di[97]] = di[1], cp[di[2]] = [], cp[di[110]] = di[17]);
                  (cp[di[110]] = Sp()) !== di[104];) cp[di[2]].push(cp[di[110]]);
                return function(...ip) {
                  for (ki(ip[di[13]] = di[2], ip[-di[82]] = ip[di[1]].length, ip[di[20]] = -di[2], ip[di[83]] = di[17], ip[-di[85]] = ""); ++ip[di[20]] < ip[-di[82]];) ip[di[83]] = ip[di[1]][ip[di[20]]], ip[di[83]] > 65535 && ki(ip[di[83]] -= di[84], ip[-di[85]] += pp[-di[29]](ip[di[83]] >>> di[41] & di[81] | di[86]), ip[di[83]] = di[87] | ip[di[83]] & di[81]), ip[-di[85]] += pp[-di[29]](ip[di[83]]);
                  return ip[-di[85]]
                }(cp[di[2]])
              })
            }(typeof exports === pp(156) + pp(157) ? this.utf8 = {} : exports)
          }
          throw Dp(143) + di[102] in ji && Ap(), new Error(cp)
        }
        return Ip[ip(di[77])]
      })
    })();
    var mi = cp(37179),
      Ri = cp(37188),
      qi = cp(37192);

    function Mi(pp) {
      return Ip.my.from(Uint8Array.from(pp))
    }

    function Ci(pp) {
      return Array.from(pp)
    }

    function Ei(pp, ip) {
      return {
        [pp]: {
          x: ip
        }
      }
    }

    function Xi(pp) {
      if (null === pp || "object" !== typeof pp || Array.isArray(pp)) return pp;
      const ip = Object.keys(pp);
      if (1 !== ip.length) return pp;
      const cp = pp[ip[0]];
      return null !== cp && "object" === typeof cp && !Array.isArray(cp) && "x" in cp ? cp.x : pp
    }

    function li(pp, ip) {
      return void 0 === ip ? null : Lp.has(pp) ? null === ip ? null : JSON.stringify(ip) : ip
    }

    function Qi(pp, ip) {
      return null === ip && Lp.has(pp) ? null : "string" === typeof ip && Lp.has(pp) ? JSON.parse(ip) : ip
    }

    function Ji(pp, ip, cp) {
      return (0, op.G)(cp) ? null : Ei(pp, li(ip, cp))
    }

    function Bi(pp, ip) {
      return (0, op.G)(ip) ? null : Qi(pp, Xi(ip))
    }

    function Ni(pp) {
      const ip = {};
      for (const cp in pp) {
        const Op = pp[cp];
        ip[cp] = void 0 === Op ? null : Op
      }
      return ip
    }

    function Ti(pp) {
      const ip = {};
      for (const cp in pp) {
        const Op = pp[cp];
        null !== Op && void 0 !== Op && (ip[cp] = Op)
      }
      return ip
    }

    function fi(pp, ip) {
      return Object.prototype.hasOwnProperty.call(pp, ip)
    }

    function bi(pp, ip) {
      const cp = {};
      for (const Op in pp) {
        const op = pp[Op];
        cp[Op] = ip(op)
      }
      return cp
    }

    function ai(pp, ip, cp) {
      const Op = [];
      for (let op = 0; op < ip.length; op++) {
        const Ip = ip[op];
        fi(pp, Ip) && Op.push({
          i: op,
          v: cp(Ip, pp[Ip])
        })
      }
      return Op
    }

    function ni(pp, ip, cp) {
      const Op = {};
      for (const op of pp) {
        const pp = ip[op.i];
        void 0 !== pp ? Op[pp] = cp(pp, op.v) : console.error(`Unknown Partial field index ${op.i}`)
      }
      return Op
    }

    function Fi(pp, ip) {
      return (0, op.G)(ip) ? null : "QJ" === pp ? function(pp) {
        return Ei(yp, ai(pp, Ri.x, ((pp, ip) => Ji(Jp[pp], pp, ip))))
      }(ip) : Ji(Qp[pp], pp, ip)
    }

    function gi(pp, ip) {
      return (0, op.G)(ip) ? null : "QJ" === pp ? function(pp) {
        return (0, op.G)(pp) ? null : ni(pp, Ri.x, Bi)
      }(Xi(ip)) : Bi(pp, ip)
    }

    function Gi(pp) {
      const {
        type: ip,
        ...cp
      } = pp, Op = {};
      for (const op in cp) {
        const pp = cp[op];
        Op[op] = li(op, pp)
      }
      if ("chunkAdded" === ip || "chunkRemoved" === ip) Op.rle = Mi(Op.rle);
      else if ("playSound" === ip) {
        const pp = Op.Ip;
        Op.Ip = (0, op.G)(pp) ? null : Ni(pp)
      } else if ("customKillfeed" === ip) {
        var Ip, Sp;
        Op.killer = Ni(null !== (Ip = Op.killer) && void 0 !== Ip ? Ip : {}), Op.victim = Ni(null !== (Sp = Op.victim) && void 0 !== Sp ? Sp : {})
      }
      return {
        [ip]: Op
      }
    }

    function ri(pp) {
      const ip = Object.keys(pp)[0],
        cp = pp[ip],
        Op = {};
      for (const op in cp) {
        const pp = cp[op];
        Op[op] = Qi(op, pp)
      }
      if ("chunkAdded" === ip || "chunkRemoved" === ip) Op.rle = Ci(Op.rle);
      else if ("playSound" === ip) {
        const pp = Op.Ip;
        Op.Ip = (0, op.G)(pp) ? null : Ti(pp)
      } else if ("customKillfeed" === ip) {
        var Ip, Sp;
        Op.killer = Ti(null !== (Ip = Op.killer) && void 0 !== Ip ? Ip : {}), Op.victim = Ti(null !== (Sp = Op.victim) && void 0 !== Sp ? Sp : {})
      } else "animateEntity" === ip && function(pp) {
        const ip = null === pp || void 0 === pp ? void 0 : pp.Do;
        if ((0, op.G)(ip)) return;
        for (const cp in ip) ip[cp].scale ??= []
      }(Op.animationScript);
      return {
        type: ip,
        ...Op
      }
    }

    function Zi(pp) {
      var ip, cp;
      return (0, op.G)(pp) ? null : {
        name: pp.name,
        amount: null !== (ip = pp.amount) && void 0 !== ip ? ip : null,
        attributes: JSON.stringify(null !== (cp = pp.attributes) && void 0 !== cp ? cp : {})
      }
    }

    function zi(pp) {
      if ((0, op.G)(pp)) return null;
      const ip = pp;
      return {
        name: ip.name,
        amount: ip.amount,
        attributes: JSON.parse(ip.attributes)
      }
    }

    function si(pp) {
      if ((0, op.G)(pp)) return null;
      return {
        fullSlotsArray: Array.isArray(pp.slots),
        entries: ai(pp, Ri.m, ((pp, ip) => {
          if ((0, op.G)(ip)) return null;
          if ("slots" === pp) {
            const pp = Array.isArray(ip) ? function(pp) {
              const ip = {};
              for (let cp = 0; cp < pp.length; cp++) ip[cp] = pp[cp];
              return ip
            }(ip) : ip;
            return Ei(Mp, function(pp) {
              const ip = {};
              for (const cp in pp) {
                const Op = pp[cp];
                ip[cp] = Zi(Op)
              }
              return ip
            }(pp))
          }
          return Ei(qp, ip)
        }))
      }
    }

    function Ki(pp) {
      if ((0, op.G)(pp)) return;
      const ip = pp.fullSlotsArray;
      return ni(pp.entries, Ri.m, ((pp, cp) => {
        if ((0, op.G)(cp)) return null;
        if ("slots" === pp) {
          const pp = function(pp) {
            const ip = {};
            for (const cp in pp) {
              const Op = pp[cp];
              ip[Number(cp)] = zi(Op)
            }
            return ip
          }(Xi(cp));
          return ip ? function(pp) {
            const ip = [];
            for (let cp = 0; cp < op.l; cp++) ip.push(cp in pp ? pp[cp] : null);
            return ip
          }(pp) : pp
        }
        return Xi(cp)
      }))
    }

    function Vi(pp) {
      return {
        entities: bi(pp.entities, (pp => ai(pp, Ri.j, Fi))),
        items: bi(pp.items, (pp => ai(pp, Ri.p, ((pp, ip) => Ji(Bp[pp], pp, ip))))),
        camera: pp.camera,
        hotbar: si(pp.hotbar),
        playerHud: (0, op.G)(pp.playerHud) ? null : ai(pp.playerHud, Ri.r, ((pp, ip) => (0, op.G)(ip) ? null : function(pp, ip) {
          return {
            [pp]: ip
          }
        }("double", ip))),
        effects: (0, op.G)(pp.effects) ? null : (0, mi.o)(pp.effects),
        uiElements: ai(pp.uiElements, Ri.B, ((pp, ip) => (0, op.G)(ip) ? null : JSON.stringify(ip))),
        environment: ai(pp.environment, Ri.u, ((pp, ip) => Ji(Np[pp], pp, ip))),
        structuralEvents: pp.structuralEvents.map(Gi),
        ephemeralEvents: pp.ephemeralEvents.map(Gi)
      }
    }

    function pc(pp) {
      var ip;
      const cp = {
          entities: bi(pp.entities, (pp => {
            const ip = ni(pp, Ri.j, gi),
              cp = ip.type ? (0, Op.z)(ip.type) : null;
            return cp && (ip.type = "Mesh", ip.meshKind = cp.meshKind, ip.meshOpts = cp.meshOpts), ip
          })),
          items: bi(pp.items, (pp => ni(pp, Ri.p, Bi))),
          camera: {
            ...pp.camera,
            charging: null !== (ip = pp.camera.charging) && void 0 !== ip && ip
          },
          uiElements: ni(pp.uiElements, Ri.B, ((pp, ip) => "string" === typeof ip ? JSON.parse(ip) : ip)),
          environment: ni(pp.environment, Ri.u, Bi),
          structuralEvents: pp.structuralEvents.map((pp => {
            const ip = ri(pp);
            return "qE" === ip.type ? (ip.fromBlockData ??= null, ip.toBlockData ??= null) : "chunkAdded" !== ip.type && "chunkRemoved" !== ip.type || (ip.sharedBlockData ??= []), ip
          })),
          ephemeralEvents: pp.ephemeralEvents.map((pp => ri(pp)))
        },
        Ip = Ki(pp.hotbar);
      return void 0 !== Ip && (cp.hotbar = Ip), (0, op.G)(pp.playerHud) || (cp.playerHud = ni(pp.playerHud, Ri.r, ((pp, ip) => (0, op.G)(ip) ? null : function(pp) {
        if (null === pp || "object" !== typeof pp || Array.isArray(pp)) return pp;
        const ip = Object.keys(pp);
        return 1 !== ip.length || "int" !== ip[0] && "double" !== ip[0] ? pp : pp[ip[0]]
      }(ip)))), (0, op.G)(pp.effects) || (cp.effects = (0, mi.k)(pp.effects)), cp
    }
    let ic, cc;
    var Oc, oc, Ic, Sc, xc, Lc, Yc, Dc, Ac, Pc, Wc;
    const yc = [2, 0, 1, 123, 111, 63, 9, 7, "e", 6, "d", 8, 255, "length", "c", "a", 224, "undefined", void 0, 4, 237, "b", "fromCodePoint", 12, "push", 136, 28, 16, "g", 91, 5, 153, 8191, 88, 13, 14, null, 144, 241, 10, "join", 128, "f", 46, 228, 158, 60, "h", 145, 127, !1, !0, 169, 142, 1023, 155, 204, 65536, 55296, 56320, 100, 31, 15, 18, 45, 3, 105, "i", 188, 64, 209, 143, 74, 37, 192, 234, 34, 23, 238, 130, 240, 213, 187, 171, 121, 183, 196, 25, 101, 92, 114, 57, 109, 137, 230, 97, 133, "my", 194, 256, 65537, 30, 50, 53];

    function Uc(...pp) {
      return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
        for (Hc(pp[yc[13]] = yc[2], pp[yc[5]] = 'P,zu8BqRAnbF}W]xV1=r#I4OyE*?DXdN`7hjJGUav5&@"_i{k%9/mop6HL.g|[2)S(st3:+Qlew!fYM^<c>0;K$CTZ~', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[-yc[4]] = pp[yc[0]].length, pp[yc[10]] = [], pp[yc[8]] = yc[1], pp[yc[9]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[3]] = yc[1]; pp[yc[3]] < pp[-yc[4]]; pp[yc[3]]++)
          if (pp[yc[6]] = pp[yc[5]].indexOf(pp[yc[0]][pp[yc[3]]]), pp[yc[6]] !== -yc[2])
            if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
            else {
              Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[yc[9]], pp[yc[9]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
              do {
                Hc(pp[yc[10]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[9]] -= yc[11])
              } while (pp[yc[9]] > yc[7]);
              pp[yc[7]] = -yc[2]
            } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[yc[8]] | pp[yc[7]] << pp[yc[9]]) & yc[12]), wc(pp[yc[10]])
      }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
    }

    function wc(...pp) {
      return pp[yc[13]] = yc[2], typeof Sc !== yc[17] && Sc ? (new Sc).decode(new xc(pp[yc[1]])) : typeof Lc !== yc[17] && Lc ? Lc.from(pp[yc[1]]).toString("utf-8") : Ac(pp[yc[1]])
    }

    function vc() {}

    function tc(pp, ip, cp, Op = {}, op, Ip, Sp, xp) {
      if (Ip || (Ip = function(...pp) {
          return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = op(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
        }), op || (op = function(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[26]] = 'PzWjsEfmFnDIadh/C$0+}HR1SUx3Nw|]>4XcT26J!<#yl)Qg(GL=rkBbp.KZ*5;?"A%voui{^7M`,_@9&V~:e8OYqt[', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[21]].length, pp[yc[10]] = [], pp[yc[30]] = yc[1], pp[yc[31]] = yc[1], pp[yc[28]] = -yc[2]), pp[yc[25]] = yc[1]; pp[yc[25]] < pp[yc[14]]; pp[yc[25]]++)
            if (pp[-yc[27]] = pp[yc[26]].indexOf(pp[yc[21]][pp[yc[25]]]), pp[-yc[27]] !== -yc[2])
              if (pp[yc[28]] < yc[1]) pp[yc[28]] = pp[-yc[27]];
              else {
                Hc(pp[yc[28]] += pp[-yc[27]] * yc[29], pp[yc[30]] |= pp[yc[28]] << pp[yc[31]], pp[yc[31]] += (pp[yc[28]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[yc[10]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[31]] -= yc[11])
                } while (pp[yc[31]] > yc[7]);
                pp[yc[28]] = -yc[2]
              } return pp[yc[28]] > -yc[2] && pp[yc[10]].push((pp[yc[30]] | pp[yc[28]] << pp[yc[31]]) & yc[12]), wc(pp[yc[10]])
        }), Hc(Sp = void 0, xp = {
          [Ip(85)]: function(pp, ip, cp) {
            cp || (cp = function(...pp) {
              function ip() {}
              pp[yc[13]] = yc[1], Hc(pp[yc[15]] = function(...pp) {
                for (Hc(pp[yc[13]] = yc[0], pp[yc[38]] = yc[1], pp[yc[21]] = yc[1], pp[yc[14]] = new ip(yc[1]), pp[yc[30]] = pp[yc[14]], pp[yc[9]] = pp[yc[1]], pp[yc[37]] = pp[yc[2]]); pp[yc[9]] !== yc[36] || pp[yc[37]] !== yc[36];) Hc(pp[yc[21]] = (pp[yc[9]] ? pp[yc[9]].val : yc[1]) + (pp[yc[37]] ? pp[yc[37]].val : yc[1]) + pp[yc[38]], pp[yc[38]] = Math.floor(pp[yc[21]] / yc[39]), pp[yc[30]].next = new ip(pp[yc[21]] % yc[39]), pp[yc[30]] = pp[yc[30]].next, pp[yc[9]] = pp[yc[9]] ? pp[yc[9]].next : yc[36], pp[yc[37]] = pp[yc[37]] ? pp[yc[37]].next : yc[36]);
                return pp[yc[38]] && (pp[yc[30]].next = new ip(pp[yc[38]])), pp[yc[14]].next
              }, console.log(pp[yc[15]]))
            }), ip || (ip = function(...ip) {
              return ip[yc[13]] = yc[2], typeof Oc[ip[yc[1]]] === yc[17] ? Oc[ip[yc[1]]] = pp(oc[ip[yc[1]]]) : Oc[ip[yc[1]]]
            }), pp || (pp = function(pp) {
              var ip, cp, Op, op, Ip, Sp, xp;
              for (Hc(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yc[1], Ip = yc[1], Sp = -yc[2]), xp = yc[1]; xp < cp; xp++) {
                var Lp = '"y2t5X[]@K$+~V4`P_epf/Yj,E|O#oG;.I<*aHN>}T9^uJ?Z1A6WqQb8FCwnhzim:!RMdU)Dxcv={(7s%rBg03SlL&k'.indexOf(ip[xp]);
                if (Lp !== -yc[2])
                  if (Sp < yc[1]) Sp = Lp;
                  else {
                    Hc(Sp += Lp * yc[29], op |= Sp << Ip, Ip += (Sp & yc[32]) > yc[33] ? yc[34] : yc[35]);
                    do {
                      Hc(Op.push(op & yc[12]), op >>= yc[11], Ip -= yc[11])
                    } while (Ip > yc[7]);
                    Sp = -yc[2]
                  }
              }
              return Sp > -yc[2] && Op.push((op | Sp << Ip) & yc[12]), wc(Op)
            }), ip(86) in vc && cp();
            var [
              [Op, op, Ip], Sp
            ] = Wc;
            console[ip(87)]("" + Op[yc[40]](".") + (ip(yc[33]) + ip(89)) + Ip[ip(90) + "me"] + ip(yc[29]) + op)
          }
        }), ip === Ip(yc[89]) + Ip(93) && (Wc = []), ip === Ip(94) + Ip(95)) {
        function Lp(...ip) {
          var cp;

          function op(...pp) {
            return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
              for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = '8gGc$dDj@e|ho"Itq_,~rT0Nw(F>]Y4BiX!P&+W{)R[A#<sOMJH3kp:%vZUlCaL=z^b65VS72/91`Euy*Qx.fn;K}?m', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[yc[10]] = [], pp[-yc[41]] = yc[1], pp[yc[42]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[yc[14]]; pp[yc[11]]++)
                if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
                  if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
                  else {
                    Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[-yc[41]] |= pp[yc[7]] << pp[yc[42]], pp[yc[42]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                    do {
                      Hc(pp[yc[10]].push(pp[-yc[41]] & yc[12]), pp[-yc[41]] >>= yc[11], pp[yc[42]] -= yc[11])
                    } while (pp[yc[42]] > yc[7]);
                    pp[yc[7]] = -yc[2]
                  } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[-yc[41]] | pp[yc[7]] << pp[yc[42]]) & yc[12]), wc(pp[yc[10]])
            }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
          }
          if (ip[yc[13]] = yc[1], op(96) + "L" in vc && function(...pp) {
              Hc(pp[yc[13]] = yc[1], pp[yc[21]] = function(...pp) {
                for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = pp[yc[1]].length, pp[-yc[44]] = [], pp[-yc[45]] = yc[1]), pp[yc[43]] = yc[1]; pp[yc[43]] < pp[yc[15]]; pp[yc[43]]++) pp[-yc[44]].push(pp[yc[43]] !== yc[1] && pp[yc[1]][pp[yc[43]]] > pp[yc[1]][pp[yc[43]] - yc[2]] ? pp[-yc[44]][pp[yc[43]] - yc[2]] + yc[2] : yc[2]);
                for (pp[yc[30]] = pp[yc[15]] - yc[2]; pp[yc[30]] >= yc[1]; pp[yc[30]]--) pp[yc[30]] !== pp[yc[15]] - yc[2] && pp[yc[1]][pp[yc[30]]] > pp[yc[1]][pp[yc[30]] + yc[2]] && (pp[-yc[44]][pp[yc[30]]] = Math.max(pp[-yc[44]][pp[yc[30]]], pp[-yc[44]][pp[yc[30]] + yc[2]] + yc[2])), pp[-yc[45]] += pp[-yc[44]][pp[yc[30]]];
                return pp[-yc[45]]
              }, console.log(pp[yc[21]]))
            }(), Hc(cp = function(...ip) {
              return Wc = ip, xp[pp].apply(this)
            }, ip[yc[15]] = Op[pp]), ip[yc[15]]) {
            function Ip(...pp) {
              pp[yc[13]] = yc[1]
            }
            op(yc[95]) + "l" in vc && Ip(), ip[yc[15]]
          }
          return cp
        }
        Sp = Pc[pp] || (Pc[pp] = Lp())
      } else {
        function Yp(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = '4TbteBMmhAXl={"_sIN$1d;@Fy!x#C*H)Ug35R:^]YSk>Du+2cP`0rvZf}.Oi8nKjWQ[aJpGVzo&qEL/w|7~%,69?(<', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[-yc[48]] = pp[yc[21]].length, pp[yc[19]] = [], pp[yc[8]] = yc[1], pp[yc[42]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[47]] = yc[1]; pp[yc[47]] < pp[-yc[48]]; pp[yc[47]]++)
            if (pp[yc[49]] = pp[yc[2]].indexOf(pp[yc[21]][pp[yc[47]]]), pp[yc[49]] !== -yc[2])
              if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[49]];
              else {
                Hc(pp[yc[7]] += pp[yc[49]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[yc[42]], pp[yc[42]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[yc[19]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[42]] -= yc[11])
                } while (pp[yc[42]] > yc[7]);
                pp[yc[7]] = -yc[2]
              } return pp[yc[7]] > -yc[2] && pp[yc[19]].push((pp[yc[8]] | pp[yc[7]] << pp[yc[42]]) & yc[12]), wc(pp[yc[19]])
        }

        function Dp(pp) {
          return typeof Oc[pp] === yc[17] ? Oc[pp] = Yp(oc[pp]) : Oc[pp]
        }

        function Ap(...pp) {
          Hc(pp[yc[13]] = yc[1], pp[yc[15]] = function(...ip) {
            return ip[yc[13]] = yc[0], pp[yc[2]]({}, ip[yc[1]], ip[yc[2]])
          }, pp[yc[2]] = function(ip, cp, Op) {
            var op, Ip, Sp, xp = {};
            if (ip[cp + Op] !== yc[18]) return ip[cp + Op];
            if (cp === Op) return yc[51];
            for (op = yc[1]; op < cp.length; op++) xp[cp[op]] === yc[18] && (xp[cp[op]] = yc[1]), xp[Op[op]] === yc[18] && (xp[Op[op]] = yc[1]), Hc(xp[cp[op]]++, xp[Op[op]]--);
            for (Ip in xp)
              if (xp[Ip] !== yc[1]) return ip[cp + Op] = yc[50], yc[50];
            for (Sp = yc[2]; Sp < cp.length; Sp++)
              if (pp[yc[2]](ip, cp.substr(yc[1], Sp), Op.substr(yc[1], Sp)) && pp[yc[2]](ip, cp.substr(Sp), Op.substr(Sp)) || pp[yc[2]](ip, cp.substr(yc[1], Sp), Op.substr(Op.length - Sp)) && pp[yc[2]](ip, cp.substr(Sp), Op.substr(yc[1], Op.length - Sp))) return ip[cp + Op] = yc[51], yc[51];
            return ip[cp + Op] = yc[50], yc[50]
          }, console.log(pp[yc[15]]))
        }
        Dp(yc[60]) + "Q" in vc && Ap(), Sp = xp[pp]()
      }
      if (cp === Ip(yc[88]) + Ip(102)) {
        function Pp(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = 'Yckhpmo:Olya{q?]HRB|L>2*WFTAsD.IUrtS)/iJXe(d+V7_^0[Q`~}!E<&n#bP6MNCK94gj";GxZ3%@uw5v1z=f,$8', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[21]].length, pp[yc[10]] = [], pp[yc[30]] = yc[1], pp[yc[9]] = yc[1], pp[yc[28]] = -yc[2]), pp[yc[47]] = yc[1]; pp[yc[47]] < pp[yc[14]]; pp[yc[47]]++)
            if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[21]][pp[yc[47]]]), pp[yc[6]] !== -yc[2])
              if (pp[yc[28]] < yc[1]) pp[yc[28]] = pp[yc[6]];
              else {
                Hc(pp[yc[28]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[28]] << pp[yc[9]], pp[yc[9]] += (pp[yc[28]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[yc[10]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[9]] -= yc[11])
                } while (pp[yc[9]] > yc[7]);
                pp[yc[28]] = -yc[2]
              } return pp[yc[28]] > -yc[2] && pp[yc[10]].push((pp[yc[30]] | pp[yc[28]] << pp[yc[9]]) & yc[12]), wc(pp[yc[10]])
        }

        function Wp(...pp) {
          return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Pp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
        }

        function yp() {
          ! function(...pp) {
            function ip(...pp) {
              for (Hc(pp[yc[13]] = yc[2], pp[-yc[53]] = [], pp[yc[21]] = yc[1], pp[yc[14]] = pp[yc[1]].length, pp[-yc[52]] = yc[18], pp[yc[30]] = yc[18]); pp[yc[21]] < pp[yc[14]];) Hc(pp[-yc[52]] = pp[yc[1]].charCodeAt(pp[yc[21]]++), pp[-yc[52]] >= yc[58] && pp[-yc[52]] <= 56319 && pp[yc[21]] < pp[yc[14]] ? (pp[yc[30]] = pp[yc[1]].charCodeAt(pp[yc[21]]++), (64512 & pp[yc[30]]) == yc[59] ? pp[-yc[53]].push(((pp[-yc[52]] & yc[54]) << yc[39]) + (pp[yc[30]] & yc[54]) + yc[57]) : (pp[-yc[53]].push(pp[-yc[52]]), pp[yc[21]]--)) : pp[-yc[53]].push(pp[-yc[52]]));
              return pp[-yc[53]]
            }

            function cp(...pp) {
              if (pp[yc[13]] = yc[2], pp[yc[1]] >= yc[58] && pp[yc[1]] <= 57343) {
                function ip(...pp) {
                  for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = 'bDAXgMSoFRUV_ua78y(hjtZqvc5J3?PKd+G)[4#OL.x:=!,w^TBr*f/Y0$`sp{i2~z}CI%E<96;1@"l&]Hn|>NkemWQ', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[-yc[60]] = [], pp[yc[30]] = yc[1], pp[yc[9]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[yc[14]]; pp[yc[11]]++)
                    if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
                      if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
                      else {
                        Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[yc[9]], pp[yc[9]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                        do {
                          Hc(pp[-yc[60]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[9]] -= yc[11])
                        } while (pp[yc[9]] > yc[7]);
                        pp[yc[7]] = -yc[2]
                      } return pp[yc[7]] > -yc[2] && pp[-yc[60]].push((pp[yc[30]] | pp[yc[7]] << pp[yc[9]]) & yc[12]), wc(pp[-yc[60]])
                }

                function cp(...pp) {
                  return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = ip(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
                }
                throw Error(Wp(104) + cp(yc[66]) + cp(106) + pp[yc[1]].toString(yc[27]).toUpperCase() + (cp(107) + cp(108) + cp(yc[92]) + cp(110)))
              }
            }

            function Op(...ip) {
              return ip[yc[13]] = yc[0], pp[yc[2]](ip[yc[1]] >> ip[yc[2]] & yc[5] | yc[41])
            }

            function op(...ip) {
              return ip[yc[13]] = yc[2], (4294967168 & ip[yc[1]]) == yc[1] ? pp[yc[2]](ip[yc[1]]) : (ip[yc[2]] = "", (4294965248 & ip[yc[1]]) == yc[1] ? ip[yc[2]] = pp[yc[2]](ip[yc[1]] >> yc[9] & yc[61] | yc[74]) : (4294901760 & ip[yc[1]]) == yc[1] ? Hc(cp(ip[yc[1]]), ip[yc[2]] = pp[yc[2]](ip[yc[1]] >> yc[23] & yc[62] | yc[16]), ip[yc[2]] += Op(ip[yc[1]], yc[9])) : (4292870144 & ip[yc[1]]) == yc[1] && Hc(ip[yc[2]] = pp[yc[2]](ip[yc[1]] >> yc[63] & yc[7] | yc[80]), ip[yc[2]] += Op(ip[yc[1]], yc[23]), ip[yc[2]] += Op(ip[yc[1]], yc[9])), ip[yc[2]] += pp[yc[2]](ip[yc[1]] & yc[5] | yc[41]), ip[yc[2]])
            }

            function Ip() {
              var ip;
              if (pp[yc[73]] >= pp[yc[75]]) {
                function cp(...pp) {
                  for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = ']ZkUKgacL!E6hv+AH"?t$JBsCl*mRS`5}bDi98XM1Nqf#&Y(,7%xT)F2[<QzO.~@=^dp/:wy{Pn>_|jeru4o30IGVW;', pp[yc[69]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[69]].length, pp[yc[72]] = [], pp[yc[30]] = yc[1], pp[yc[42]] = yc[1], pp[yc[71]] = -yc[2]), pp[-yc[70]] = yc[1]; pp[-yc[70]] < pp[yc[14]]; pp[-yc[70]]++)
                    if (pp[yc[6]] = pp[yc[2]].indexOf(pp[yc[69]][pp[-yc[70]]]), pp[yc[6]] !== -yc[2])
                      if (pp[yc[71]] < yc[1]) pp[yc[71]] = pp[yc[6]];
                      else {
                        Hc(pp[yc[71]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[71]] << pp[yc[42]], pp[yc[42]] += (pp[yc[71]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                        do {
                          Hc(pp[yc[72]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[42]] -= yc[11])
                        } while (pp[yc[42]] > yc[7]);
                        pp[yc[71]] = -yc[2]
                      } return pp[yc[71]] > -yc[2] && pp[yc[72]].push((pp[yc[30]] | pp[yc[71]] << pp[yc[42]]) & yc[12]), wc(pp[yc[72]])
                }

                function Op(...pp) {
                  return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = cp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
                }
                throw Error(Op(yc[4]))
              }
              if (Hc(ip = pp[yc[19]][pp[yc[73]]] & yc[12], pp[yc[73]]++), (ip & yc[74]) == yc[41]) return ip & yc[5];
              throw Error(function(...pp) {
                return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
                  for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = '=1?4]2!u0+v}ItN{JB&TD|fjFe7R@,[ob6MY;9mUhcEQ>xGd3Z:Vi`z/g#$OrnA~Caw"._X8^PSp%Ky(5)*LlH<sqkW', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[0]].length, pp[yc[66]] = [], pp[yc[8]] = yc[1], pp[-yc[68]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[yc[65]]; pp[yc[11]]++)
                    if (pp[yc[67]] = pp[yc[2]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[67]] !== -yc[2])
                      if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[67]];
                      else {
                        Hc(pp[yc[7]] += pp[yc[67]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[-yc[68]], pp[-yc[68]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                        do {
                          Hc(pp[yc[66]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[-yc[68]] -= yc[11])
                        } while (pp[-yc[68]] > yc[7]);
                        pp[yc[7]] = -yc[2]
                      } return pp[yc[7]] > -yc[2] && pp[yc[66]].push((pp[yc[8]] | pp[yc[7]] << pp[-yc[68]]) & yc[12]), wc(pp[yc[66]])
                }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
              }(112))
            }

            function Sp(...ip) {
              if (Hc(ip[yc[13]] = yc[1], ip[yc[78]] = yc[18], ip[yc[21]] = yc[18], ip[-yc[81]] = yc[18], ip[yc[65]] = yc[18], ip[-yc[79]] = yc[18]), pp[yc[73]] > pp[yc[75]]) {
                function Op(...pp) {
                  for (Hc(pp[yc[13]] = yc[2], pp[-yc[77]] = 'S*$6N`_GPVa.xmr:B17t[DpeoThs2y^=%#9)}|"<;/~8{50@v3?z,(w4!HAcFqEdl]i>+&IOuZCgQfJRKXjkbLWUnMY', pp[-yc[61]] = "" + (pp[yc[1]] || ""), pp[-yc[76]] = pp[-yc[61]].length, pp[yc[10]] = [], pp[yc[8]] = yc[1], pp[yc[9]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[-yc[76]]; pp[yc[11]]++)
                    if (pp[yc[6]] = pp[-yc[77]].indexOf(pp[-yc[61]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
                      if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
                      else {
                        Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[8]] |= pp[yc[7]] << pp[yc[9]], pp[yc[9]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                        do {
                          Hc(pp[yc[10]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[9]] -= yc[11])
                        } while (pp[yc[9]] > yc[7]);
                        pp[yc[7]] = -yc[2]
                      } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[yc[8]] | pp[yc[7]] << pp[yc[9]]) & yc[12]), wc(pp[yc[10]])
                }

                function op(...pp) {
                  return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Op(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
                }
                throw Error(op(113))
              }
              if (pp[yc[73]] == pp[yc[75]]) return yc[50];
              if (Hc(ip[yc[78]] = pp[yc[19]][pp[yc[73]]] & yc[12], pp[yc[73]]++), (ip[yc[78]] & yc[41]) == yc[1]) return ip[yc[78]];
              if ((ip[yc[78]] & yc[16]) == yc[74]) {
                if (Hc(ip[yc[21]] = Ip(), ip[-yc[79]] = (ip[yc[78]] & yc[61]) << yc[9] | ip[yc[21]]), ip[-yc[79]] >= yc[41]) return ip[-yc[79]];
                throw Error(Wp(yc[90]))
              }
              if ((ip[yc[78]] & yc[80]) == yc[16]) {
                if (Hc(ip[yc[21]] = Ip(), ip[-yc[81]] = Ip(), ip[-yc[79]] = (ip[yc[78]] & yc[62]) << yc[23] | ip[yc[21]] << yc[9] | ip[-yc[81]]), ip[-yc[79]] >= 2048) return cp(ip[-yc[79]]), ip[-yc[79]];
                {
                  function Sp(...pp) {
                    for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'ID)MV1TCO^iN>/E&U#}em{B5o9rp~?ZPLh6*QxHJcuw%gvX;fy_<Sb!.8@0$KF2sWYd43az+[qlRk]j`,tA=G"7(|:n', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[yc[10]] = [], pp[yc[30]] = yc[1], pp[yc[42]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[yc[14]]; pp[yc[11]]++)
                      if (pp[yc[9]] = pp[yc[2]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[9]] !== -yc[2])
                        if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[9]];
                        else {
                          Hc(pp[yc[7]] += pp[yc[9]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[yc[42]], pp[yc[42]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                          do {
                            Hc(pp[yc[10]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[42]] -= yc[11])
                          } while (pp[yc[42]] > yc[7]);
                          pp[yc[7]] = -yc[2]
                        } return pp[yc[7]] > -yc[2] && pp[yc[10]].push((pp[yc[30]] | pp[yc[7]] << pp[yc[42]]) & yc[12]), wc(pp[yc[10]])
                  }

                  function xp(...pp) {
                    return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Sp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
                  }
                  throw Error(xp(115))
                }
              }
              if ((248 & ip[yc[78]]) == yc[80] && (Hc(ip[yc[21]] = Ip(), ip[-yc[81]] = Ip(), ip[yc[65]] = Ip(), ip[-yc[79]] = (ip[yc[78]] & yc[7]) << yc[63] | ip[yc[21]] << yc[23] | ip[-yc[81]] << yc[9] | ip[yc[65]]), ip[-yc[79]] >= yc[57] && ip[-yc[79]] <= 1114111)) return ip[-yc[79]];
              throw Error(Wp(116))
            }
            Hc(pp[yc[13]] = yc[2], pp[yc[2]] = String.fromCharCode), Hc(pp[yc[19]] = yc[18], pp[yc[75]] = yc[18], pp[yc[73]] = yc[18]), Hc(pp[yc[1]].version = Wp(117), pp[yc[1]].encode = function(...pp) {
              for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = ip(pp[yc[1]]), pp[-yc[64]] = pp[yc[15]].length, pp[yc[14]] = -yc[2], pp[yc[10]] = yc[18], pp[yc[8]] = ""); ++pp[yc[14]] < pp[-yc[64]];) Hc(pp[yc[10]] = pp[yc[15]][pp[yc[14]]], pp[yc[8]] += op(pp[yc[10]]));
              return pp[yc[8]]
            }, pp[yc[1]].decode = function(...cp) {
              for (Hc(cp[yc[13]] = yc[2], pp[yc[19]] = ip(cp[yc[1]]), pp[yc[75]] = pp[yc[19]].length, pp[yc[73]] = yc[1], cp[yc[15]] = [], cp[yc[26]] = yc[18]);
                (cp[yc[26]] = Sp()) !== yc[50];) cp[yc[15]].push(cp[yc[26]]);
              return function(...ip) {
                for (Hc(ip[yc[13]] = yc[2], ip[yc[56]] = ip[yc[1]].length, ip[-yc[55]] = -yc[2], ip[yc[11]] = yc[18], ip[yc[19]] = ""); ++ip[-yc[55]] < ip[yc[56]];) ip[yc[11]] = ip[yc[1]][ip[-yc[55]]], ip[yc[11]] > 65535 && Hc(ip[yc[11]] -= yc[57], ip[yc[19]] += pp[yc[2]](ip[yc[11]] >>> yc[39] & yc[54] | yc[58]), ip[yc[11]] = yc[59] | ip[yc[11]] & yc[54]), ip[yc[19]] += pp[yc[2]](ip[yc[11]]);
                return ip[yc[19]]
              }(cp[yc[15]])
            })
          }(typeof exports === Wp(118) + Wp(119) ? this.utf8 = {} : exports)
        }
        return Wp(103) in vc && yp(), {
          [Wp(120) + Wp(yc[84])]: Sp
        }
      }
      return Sp
    }

    function Hc() {
      Hc = function() {}
    }
    Hc(Oc = {}, oc = ["(kfw!U1r_o/yTxn", "O#4R4f0Lu}c+7GZOL#0`G!;$7)d:%|tN:GQm=9+dB", "f_XD,J%KQW#^C+(Oc+w/T{R5E(h^Jg8@YhCfTQL)aW", "8`jlO{P", "sel%L|1EX2wFZk7GDGVn<cN5N=yfc85NQ_i%^Qsy7p2g5kdd", '!qJY")wqO#:Ip[u@', "Op]fZK@R<=&RIlr?$gfXx0^LKp].]G{aC+N%mH,::r<8y0er", "w3*?)6`zfo!<(:eEO/;w?g0X)oWb=G8=Uq89vja!:r", "X#~`1J3=iF(+uQ1?A,", "&}0B53k.dI+YBJRE732D!w05rSp8).qU#,", "p/NdDm=i#rt),;5rB`}b", "A`aea>F,", "P8GRJ<)jks~,K<<??nXNv%:W/nhy2c`y!qN%h<ERun", "{(8YkaK5$WTwSxa=)NURve!:{x[Y{]RG+/2N]cyAwg5gUWEhqLMQt^P", 'vuXN"[]mS|?2).+G!/uwt^rjiFpf6?g&4|2n*m=y6.6', "T(e`Q9E{MAm<ru45CqTq9GAit|}?[yo?5L[R", "rLKNM_v}y.)=8x$hj@Jw2hU}(=aer9lrx*1?P$ZXnb", '8QleI:+qYo/ys:q=q}xm>LqdgAB[(lF*WiJRcJS.1=d#&%`J"QMD(o^,', "/LP/5j}iF(|Y?]R=A37p6;H<;S!o=Bx", "Aw&`5[P", "+qFXEMfmL(PlP", "FX%/+lQXUrtI2Wg1Sv48", ",wE/EL3i=)<E;0D&MG%/u2E{*2pjLVJU.26qOLmi9}8^&>y&_3CmKQgW$r.", "@2mY~K/5F2LY58FE9/UR|hliZ2oj7l{aD(&?O9`=f((+_G45T(n/k>dz", "3p!`th?51|0|nkRr~#RnwJb=e2i6C]d&u=He4fW)F1%", "v/&/9G`z$WNbO*gj~Ds`V9b=/n{e;jGNI|`nQ9c,", 'P@7!cL;i&(vDc|Hhskap:J".!292?URU{Q(qhMvmF(++l0P&}Q68', ",|LA%+Ijg2}3xx;4:qSps2><@FU:ZEeNYH*YGG2dZ10)&G~V0]:wI", '"2qR/HrjJLD.5khJ@XO7W:Q:iA>tt]lGH*7!k!mdhnmesUcvzs*X9+BWdx_', "k()qIQ8d2F9:~];?H1Y*i3dzc=?(2E21:qY*ti$$V}{DK8]?@2KmI", '53lpCL/K>}l4zcuEAL!o"!Vm`=', "OvgoXedJDIxlzcsy&qpDI", '@@./"<&m[]Rq<j*D9Lpn:|U=M=]?Px;5Q1_wJgP', 'VQ|XW6p.T#;E[y6h&}DbXj]S]s]h0U?57|Ons|5j|A>+"0XO$P', "9py7NKn,", "6_ID|/REJS1!olg1O,", "6(5![aEXBp}GPahGfP", '?p28X<h}<Lmm!]$DB}jXVQ{r0rmy(|5a$u"w5eq=N|`^k8', 'bvpR_G"iWIQDC*$vw]{%lJ&yN=n/}{g&RO>AyMBCH#3eb],@^2DX(^[,', "zx^8&GqyQW^%lu%?eP", 'M#6n<9ydk=<,1kx?@2OnPaTmmnAk#u"ri/6q', "Z(qN4LmmA.9e2EIv4wn?;gY/0LuhQ*?&gk#6[Ypz8n6e.Ub", "zn?YC7P", '%_npCM05@(lFscud`Gmw<f()[o.=#0BGs3knj[d}"gZch%@U7LqfKm,r+r', "s_^qVwi.]gzq[yH5%Qy%a[g52)$w/.aE", "shsAa%1,Mg<+nc|jaktw@)S=@2y", "zj3YnL{,tpJ6}0?XO,", "1vjle2=y!HVltxu=.G:*2hc,{=/)UG4vH2uBB|l$RW*WPu|XYP", "ZuXRveydN=[,1k,@?*X6h%,5IWKHEl+y<+2mvps=Y2ee8lh=qji8", "$EFXvj&v527yk?`1:p%A).6W<|b[C*PJw]DYUGfycn(=dB1h_/dNLaw=8", "4}3B/.bJa#POK<q", '4xPq*v}y"1', "KkoD||jr,}", "4wmb$:9<P=$xM:kh<H0Xui*dH(TE!]CXeOOm&!/KE1K4Lyn", "K]9?7jRrgFx.2%[1", "4*>A6a?5pr1!Yl8Uv2>/8k))ksf=cl,O0#anwfP", "3u7p/!2<oWVl$:h=|Q/A#9D=zxd2UE)GckSqzo!,", "&(_6+h:,", "b%JX,k.v{}7:1GL5a3H%L|l.Wg;tNz", "R@?`S;wq|oV^s%1vYErX@j7!_IfAJ0FE/k$fy", "3G1/!6v.,swXnl.D*|^DGeU.iA", "SGlqU[JJ{|X#g]_UR)C%A6X5.F7", "j*|o}:ASksrqZyQyNpO8./2i@10Efg_?V)EpVf?o2HX(,", '{vURek<.p.#GpWuJ.OpR5%hy5("IC](OGq*?c71,', "Gw]NLldm)=%N9%RGqOPn", "u%/b=mPd1ng%][v*F=#bPJ9i+W7:E[#v]nu", 'JnqfzlIRxsy26.[Xi(!oi+:R,sW?RU>hTa$N?Q"mcx[<ykjdUqMmc2&mR', "L/46oaC:@Fj:CunUgg)84KP", "fq`npH/O4r0HOz3E])09_>_{N|7ID0jGeu^8GK2idI", "xpw`sil=Ab](`?irNGN8+9]ispt<bBo?oO[w4KqiPsry,", "0hEpH+;i`=F3`0(ye]_Ns;@jw(Yw+.FU$P", ")2`ewwd=/}SAwc)dn,", "s3AnZm7{c=o=4B", ",}5d/!xoSxc,WJ8UdGOn`MQ/%sDlTu", ")O[bW9=Jg1tY@>RUvuowi)wi,=KYaz", 'y@IbH^"vOW(e,', "e3URJMn:w2JR%V%vzwQnOUD<2H<|80rh", "e3Cq//TmXIeFg.bU", "M32Du6Tymn6%e8irs3%/P$R,", "$#$Qbc@L2gwA(8UG}3y7[|gXA69", 'GQSq1m~h"A0w:|7yROOeNgLWxx9N8x?X,L"X9+q+Vs1:juLjJpFb', "~2!oq2=icLa]=[zJ9N?XXvIRunKXZ<?&Vnn/BoP.0n", "3DgAF9Io^Hhsc<W#1,", "M1Kw`M.w{I!ic|*5<2x7^Ui}ks<+iWQ=yiSnG[3$e1}Gs%3=J3oR!w!:isJ:,", "s/UNYc#z", ":)?,;e6W", 'vi6("h8y', 'dWq(^%"', "hk}56>$y", '.Cg@DY"', "8D*.~8~2", '?kOg3}."', "x*c_&;_z", "[Jc^a", "l=5m0V7z", "rX$`a", "a+:jW+Kg", ";ls/6%,G", "Z5Pi[*rG", "t!,ZW$iV", "<#!xqo@T", "c=Bs>Bnz", "u1.=|", "%nTxc=!c", "hd|Uj2^k", '>r*"C9_A', "K7dc:Pb", '{cuU."LA', "cDTFm]8A", "1G*f;Z/A", "1G1dc", '"1o}$_nC@g^rD.i671`5.3]', "BhLbD%SFC:OwyZu97rV0{ST)~2a5MnI", "1;k%[QCod`]K9q).3;^=qbS", "RXvULZGWM[nC%0:/T#QO]G|w6mNutb{", "#c=LmkloW_$djyCxrK<O&lets1Y,6F>", "RXvULZGWM[}sUn9|!avOUjPWZR[", "=J20urY", 'bX.Ic"sk', "F]xO", "O*vD<~3c", "UXo!{", "sf!=yn;u", "?[3HC5mu", "wwy`nzt/rT", "0%uC|$Zw", "%ny?xD2", "^`GbYz*BA", "#87%P.u?", "IPiG", "oF[=o2}f", "&+za|hmW", "?.P{8ZwW", "d2gPp", "oP2U>2xf", "T)uP#", "{)&=u^Qf", ">4I6`", "K[]?O;2", "#ntN=Ibu", "gj%?Cevu", ",w<q&H[,", ":/?`?", "obIJ=t)N", "})!;3", "A]wTGPqi", "mH7%ttri", "G$TGHY*XGM", "?J`1`", "?J`1uw/E24Y!2"]), Hc(Ic = function(...pp) {
      Hc(pp[yc[13]] = yc[1], pp[yc[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], pp[yc[2]] = yc[18], pp[yc[14]] = []);
      try {
        Hc(pp[yc[2]] = Object, pp[yc[14]][yc[24]]("".__proto__.constructor.name))
      } catch (oc) {}
      pp: for (pp[yc[10]] = yc[1]; pp[yc[10]] < pp[yc[15]][yc[13]]; pp[yc[10]]++) try {
        for (pp[yc[2]] = pp[yc[15]][pp[yc[10]]](), pp[yc[16]] = yc[1]; pp[yc[16]] < pp[yc[14]][yc[13]]; pp[yc[16]]++)
          if (typeof pp[yc[2]][pp[yc[14]][pp[yc[16]]]] === yc[17]) continue pp;
        return pp[yc[2]]
      } catch (oc) {}
      return pp[yc[2]] || this
    }() || {}, Sc = Ic.TextDecoder, xc = Ic.Uint8Array, Lc = Ic[yc[97]], Yc = Ic.String || String, Dc = Ic.Array || Array, Ac = function(...pp) {
      return Hc(pp[yc[13]] = yc[1], pp[yc[15]] = new Dc(yc[41]), pp[yc[2]] = Yc[yc[22]] || Yc.fromCharCode, pp[yc[14]] = []),
        function(...ip) {
          for (Hc(ip[yc[13]] = yc[2], ip[yc[15]] = yc[18], ip[yc[21]] = yc[18], ip[yc[20]] = ip[yc[1]][yc[13]], pp[yc[14]][yc[13]] = yc[1]), ip[yc[19]] = yc[1]; ip[yc[19]] < ip[yc[20]];) Hc(ip[yc[21]] = ip[yc[1]][ip[yc[19]]++], ip[yc[21]] <= yc[49] ? ip[yc[15]] = ip[yc[21]] : ip[yc[21]] <= 223 ? ip[yc[15]] = (ip[yc[21]] & yc[61]) << yc[9] | ip[yc[1]][ip[yc[19]]++] & yc[5] : ip[yc[21]] <= 239 ? ip[yc[15]] = (ip[yc[21]] & yc[62]) << yc[23] | (ip[yc[1]][ip[yc[19]]++] & yc[5]) << yc[9] | ip[yc[1]][ip[yc[19]]++] & yc[5] : Yc[yc[22]] ? ip[yc[15]] = (ip[yc[21]] & yc[7]) << yc[63] | (ip[yc[1]][ip[yc[19]]++] & yc[5]) << yc[23] | (ip[yc[1]][ip[yc[19]]++] & yc[5]) << yc[9] | ip[yc[1]][ip[yc[19]]++] & yc[5] : (ip[yc[15]] = yc[5], ip[yc[19]] += yc[65]), pp[yc[14]][yc[24]](pp[yc[15]][ip[yc[15]]] || (pp[yc[15]][ip[yc[15]]] = pp[yc[2]](ip[yc[15]]))));
          return pp[yc[14]][yc[40]]("")
        }
    }()), Hc(Pc = Object[Uc(84)](yc[36]), Wc = void 0), Hc(ic = (...pp) => {
      function ip(...pp) {
        return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[15]] = '2uw9]":SAN^Qc_(1Rglap3W<tkYCZ,d7=P[e~B5Mj{Tx04&U+r}ny>FH6*of$vhiXm`8%;GI|qEK)?JbD.!zO@#s/VL', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[yc[0]].length, pp[-yc[69]] = [], pp[yc[30]] = yc[1], pp[-yc[82]] = yc[1], pp[yc[7]] = -yc[2]), pp[-yc[3]] = yc[1]; pp[-yc[3]] < pp[yc[14]]; pp[-yc[3]]++)
            if (pp[yc[6]] = pp[yc[15]].indexOf(pp[yc[0]][pp[-yc[3]]]), pp[yc[6]] !== -yc[2])
              if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
              else {
                Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[-yc[82]], pp[-yc[82]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[-yc[69]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[-yc[82]] -= yc[11])
                } while (pp[-yc[82]] > yc[7]);
                pp[yc[7]] = -yc[2]
              } return pp[yc[7]] > -yc[2] && pp[-yc[69]].push((pp[yc[30]] | pp[yc[7]] << pp[-yc[82]]) & yc[12]), wc(pp[-yc[69]])
        }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
      }
      pp[yc[13]] = yc[2], ip(122) + "o" in vc && function(...pp) {
        Hc(pp[yc[13]] = yc[1], pp[yc[15]] = function(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = pp[yc[1]].length, pp[yc[73]] = [], pp[yc[65]] = yc[1], pp[yc[83]] = yc[1], pp[yc[1]].sort(((pp, ip) => pp - ip))), pp[yc[8]] = yc[1]; pp[yc[8]] < pp[yc[2]]; pp[yc[8]]++)
            if (!(pp[yc[8]] > yc[1] && pp[yc[1]][pp[yc[8]]] === pp[yc[1]][pp[yc[8]] - yc[2]]))
              for (Hc(pp[yc[65]] = pp[yc[8]] + yc[2], pp[yc[83]] = pp[yc[2]] - yc[2]); pp[yc[65]] < pp[yc[83]];)
                if (pp[yc[1]][pp[yc[8]]] + pp[yc[1]][pp[yc[65]]] + pp[yc[1]][pp[yc[83]]] < yc[1]) pp[yc[65]]++;
                else if (pp[yc[1]][pp[yc[8]]] + pp[yc[1]][pp[yc[65]]] + pp[yc[1]][pp[yc[83]]] > yc[1]) pp[yc[83]]--;
          else {
            for (pp[yc[73]].push([pp[yc[1]][pp[yc[8]]], pp[yc[1]][pp[yc[65]]], pp[yc[1]][pp[yc[83]]]]); pp[yc[65]] < pp[yc[83]] && pp[yc[1]][pp[yc[65]]] === pp[yc[1]][pp[yc[65]] + yc[2]];) pp[yc[65]]++;
            for (; pp[yc[65]] < pp[yc[83]] && pp[yc[1]][pp[yc[83]]] === pp[yc[1]][pp[yc[83]] - yc[2]];) pp[yc[83]]--;
            Hc(pp[yc[65]]++, pp[yc[83]]--)
          }
          return pp[yc[73]]
        }, console.log(pp[yc[15]]))
      }();
      const cp = function(pp) {
          var ip;
          return {
            meta: {
              ...pp.meta,
              formatVersion: Ri.g,
              variation: null !== (ip = pp.meta.variation) && void 0 !== ip ? ip : null
            },
            initialChunks: pp.initialChunks.map((pp => ({
              chunkPos: pp.chunkPos,
              rle: Mi(pp.rle),
              sharedBlockData: li("sharedBlockData", pp.sharedBlockData)
            }))),
            ticks: pp.ticks.map(Vi),
            editState: pp.editState
          }
        }(pp[yc[1]]),
        Op = Ii(Ri[yc[28]]);
      pp[yc[15]] = yc[18];
      try {
        function xp(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[7]] = 'vOaGcnAdRVrS0_!I86}#T%Q;pmsu`U/yD~t5BLMbX{&w<,[^Y71f>WZP)NiE.q|g]:l?"eCFzx=$+@K39h2(JoH*4kj', pp[yc[84]] = "" + (pp[yc[1]] || ""), pp[-yc[85]] = pp[yc[84]].length, pp[-yc[87]] = [], pp[yc[8]] = yc[1], pp[yc[9]] = yc[1], pp[-yc[86]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[-yc[85]]; pp[yc[11]]++)
            if (pp[yc[6]] = pp[yc[7]].indexOf(pp[yc[84]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
              if (pp[-yc[86]] < yc[1]) pp[-yc[86]] = pp[yc[6]];
              else {
                Hc(pp[-yc[86]] += pp[yc[6]] * yc[29], pp[yc[8]] |= pp[-yc[86]] << pp[yc[9]], pp[yc[9]] += (pp[-yc[86]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[-yc[87]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[9]] -= yc[11])
                } while (pp[yc[9]] > yc[7]);
                pp[-yc[86]] = -yc[2]
              } return pp[-yc[86]] > -yc[2] && pp[-yc[87]].push((pp[yc[8]] | pp[-yc[86]] << pp[yc[9]]) & yc[12]), wc(pp[-yc[87]])
        }

        function Lp(...pp) {
          return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = xp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
        }

        function Yp(...pp) {
          pp[yc[13]] = yc[1];
          const ip = require("big-integer");
          Hc(pp[-yc[16]] = class {
            static randomPrime(...pp) {
              pp[yc[13]] = yc[2];
              const cp = ip.one.shiftLeft(pp[yc[1]] - yc[2]),
                Op = ip.one.shiftLeft(pp[yc[1]]).prev();
              for (; yc[51];) {
                let pp = ip.randBetween(cp, Op);
                if (pp.isProbablePrime(yc[99])) return pp
              }
            }
            static generate(...pp) {
              pp[yc[13]] = yc[2];
              const cp = ip(yc[100]);
              let Op, op;
              pp[yc[2]] = yc[18];
              do {
                Hc(Op = this.randomPrime(pp[yc[1]] / yc[0]), op = this.randomPrime(pp[yc[1]] / yc[0]), pp[yc[2]] = ip.lcm(Op.prev(), op.prev()))
              } while (ip.gcd(cp, pp[yc[2]]).notEquals(yc[2]) || Op.minus(op).abs().shiftRight(pp[yc[1]] / yc[0] - yc[60]).isZero());
              return {
                e: cp,
                n: Op.multiply(op),
                d: cp.modInv(pp[yc[2]])
              }
            }
            static encrypt(...pp) {
              return pp[yc[13]] = yc[65], ip(pp[yc[1]]).modPow(pp[yc[0]], pp[yc[2]])
            }
            static decrypt(...pp) {
              return pp[yc[13]] = yc[65], ip(pp[yc[1]]).modPow(pp[yc[2]], pp[yc[0]])
            }
            static encode(...pp) {
              pp[yc[13]] = yc[2];
              const cp = pp[yc[1]].split("").map((pp => pp.charCodeAt())).join("");
              return ip(cp)
            }
            static decode(...pp) {
              pp[yc[13]] = yc[2];
              const ip = pp[yc[1]].toString();
              pp[yc[25]] = "";
              for (let cp = yc[1]; cp < ip.length; cp += yc[0]) {
                let Op = Number(ip.substr(cp, yc[0]));
                Op <= yc[101] ? (pp[yc[25]] += String.fromCharCode(Number(ip.substr(cp, yc[65]))), cp++) : pp[yc[25]] += String.fromCharCode(Op)
              }
              return pp[yc[25]]
            }
          }, module.exports = pp[-yc[16]])
        }
        ip(yc[3]) + "k" in vc && Yp(), pp[yc[15]] = Op[Lp(124)](cp)
      } catch (Uc) {
        function Ap(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'c?KlNHASZGOhfJRLtkXWYraoBCVdqgbpEUMsDFImijTPQen5v;_87u`^4,{/03]~x|"1#2=y&@*)z%[(.6+9$:!w>}<', pp[yc[21]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[21]].length, pp[-yc[27]] = [], pp[yc[88]] = yc[1], pp[yc[7]] = yc[1], pp[-yc[89]] = -yc[2]), pp[yc[67]] = yc[1]; pp[yc[67]] < pp[yc[65]]; pp[yc[67]]++)
            if (pp[-yc[90]] = pp[yc[2]].indexOf(pp[yc[21]][pp[yc[67]]]), pp[-yc[90]] !== -yc[2])
              if (pp[-yc[89]] < yc[1]) pp[-yc[89]] = pp[-yc[90]];
              else {
                Hc(pp[-yc[89]] += pp[-yc[90]] * yc[29], pp[yc[88]] |= pp[-yc[89]] << pp[yc[7]], pp[yc[7]] += (pp[-yc[89]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[-yc[27]].push(pp[yc[88]] & yc[12]), pp[yc[88]] >>= yc[11], pp[yc[7]] -= yc[11])
                } while (pp[yc[7]] > yc[7]);
                pp[-yc[89]] = -yc[2]
              } return pp[-yc[89]] > -yc[2] && pp[-yc[27]].push((pp[yc[88]] | pp[-yc[89]] << pp[yc[7]]) & yc[12]), wc(pp[-yc[27]])
        }

        function Pp(...pp) {
          return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Ap(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
        }

        function Wp(...pp) {
          Hc(pp[yc[13]] = yc[1], pp[-yc[0]] = function(...pp) {
            if (Hc(pp[yc[13]] = yc[2], pp[-yc[91]] = pp[yc[1]].length), pp[-yc[91]] < yc[0]) return yc[1];
            if (Hc(pp[yc[21]] = Math.max(...pp[yc[1]]), pp[yc[14]] = Math.min(...pp[yc[1]])), pp[yc[21]] === pp[yc[14]]) return yc[1];
            for (Hc(pp[yc[93]] = Array(pp[-yc[91]] - yc[2]).fill(Number.MAX_SAFE_INTEGER), pp[-yc[92]] = Array(pp[-yc[91]] - yc[2]).fill(Number.MIN_SAFE_INTEGER), pp[-yc[80]] = Math.ceil((pp[yc[21]] - pp[yc[14]]) / (pp[-yc[91]] - yc[2])), pp[yc[28]] = yc[1]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[-yc[91]]; pp[yc[11]]++) pp[yc[1]][pp[yc[11]]] !== pp[yc[14]] && pp[yc[1]][pp[yc[11]]] !== pp[yc[21]] && Hc(pp[yc[28]] = Math.floor((pp[yc[1]][pp[yc[11]]] - pp[yc[14]]) / pp[-yc[80]]), pp[yc[93]][pp[yc[28]]] = Math.min(pp[yc[93]][pp[yc[28]]], pp[yc[1]][pp[yc[11]]]), pp[-yc[92]][pp[yc[28]]] = Math.max(pp[-yc[92]][pp[yc[28]]], pp[yc[1]][pp[yc[11]]]));
            for (Hc(pp[yc[6]] = Number.MIN_SAFE_INTEGER, pp[yc[5]] = pp[yc[14]]), pp[yc[94]] = yc[1]; pp[yc[94]] < pp[-yc[91]] - yc[2]; pp[yc[94]]++) pp[yc[93]][pp[yc[94]]] === Number.MAX_SAFE_INTEGER && pp[-yc[92]][pp[yc[94]]] === Number.MIN_SAFE_INTEGER || Hc(pp[yc[6]] = Math.max(pp[yc[6]], pp[yc[93]][pp[yc[94]]] - pp[yc[5]]), pp[yc[5]] = pp[-yc[92]][pp[yc[94]]]);
            return pp[yc[6]] = Math.max(pp[yc[6]], pp[yc[21]] - pp[yc[5]]), pp[yc[6]]
          }, console.log(pp[-yc[0]]))
        }
        throw ip(125) in vc && Wp(), Hc(console[ip(126)](cp), Op[Pp(yc[49])](cp, {
          [Pp(yc[41]) + Pp(129)](...pp) {
            function ip(...pp) {
              return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(pp) {
                var ip, cp, Op, op, Ip, Sp, xp;
                for (Hc(ip = "" + (pp || ""), cp = ip.length, Op = [], op = yc[1], Ip = yc[1], Sp = -yc[2]), xp = yc[1]; xp < cp; xp++) {
                  var Lp = '$fWiURId{xO5`031Jp@}G~e)7XA?Y=#(>M_oZFmc4,gs[+r]SNwP!^26/ut:j;|zbBkCvT%.D<9"aQq8LlV&hyEH*nK'.indexOf(ip[xp]);
                  if (Lp !== -yc[2])
                    if (Sp < yc[1]) Sp = Lp;
                    else {
                      Hc(Sp += Lp * yc[29], op |= Sp << Ip, Ip += (Sp & yc[32]) > yc[33] ? yc[34] : yc[35]);
                      do {
                        Hc(Op.push(op & yc[12]), op >>= yc[11], Ip -= yc[11])
                      } while (Ip > yc[7]);
                      Sp = -yc[2]
                    }
                }
                return Sp > -yc[2] && Op.push((op | Sp << Ip) & yc[12]), wc(Op)
              }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
            }
            return ip(yc[79]) in vc && function() {
              var pp;

              function ip() {}
              Hc(pp = function(...pp) {
                for (Hc(pp[yc[13]] = yc[0], pp[yc[15]] = yc[1], pp[yc[65]] = yc[1], pp[yc[14]] = new ip(yc[1]), pp[yc[10]] = pp[yc[14]], pp[yc[96]] = pp[yc[1]], pp[-yc[95]] = pp[yc[2]]); pp[yc[96]] !== yc[36] || pp[-yc[95]] !== yc[36];) Hc(pp[yc[65]] = (pp[yc[96]] ? pp[yc[96]].val : yc[1]) + (pp[-yc[95]] ? pp[-yc[95]].val : yc[1]) + pp[yc[15]], pp[yc[15]] = Math.floor(pp[yc[65]] / yc[39]), pp[yc[10]].next = new ip(pp[yc[65]] % yc[39]), pp[yc[10]] = pp[yc[10]].next, pp[yc[96]] = pp[yc[96]] ? pp[yc[96]].next : yc[36], pp[-yc[95]] = pp[-yc[95]] ? pp[-yc[95]].next : yc[36]);
                return pp[yc[15]] && (pp[yc[10]].next = new ip(pp[yc[15]])), pp[yc[14]].next
              }, console.log(pp))
            }(), Wc = [pp, {}], new tc(ip(131), ip(132) + ip(yc[96]), ip(134) + ip(135))[ip(yc[25]) + ip(yc[93])]
          }
        })), Uc
      }
      const op = Li(Ri[yc[28]], pp[yc[15]]),
        Sp = Ip[yc[97]][ip(138)](yc[19]);
      return Sp[ip(139) + ip(140) + "E"](Ri[yc[28]]), Ip[yc[97]].concat([Sp, op])
    }, cc = (...pp) => {
      function ip(...pp) {
        return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = function(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[38]] = 'diNUWGVeTS;1*@O]4.ZF)!fcYj30^AD/J8Ls|o#xKngm+_Qr7%Xw<tEq(HBCPzv5p2=I$:MbRhak"69`,[}y~>u&?{l', pp[-yc[98]] = "" + (pp[yc[1]] || ""), pp[yc[14]] = pp[-yc[98]].length, pp[yc[19]] = [], pp[yc[8]] = yc[1], pp[yc[42]] = yc[1], pp[-yc[69]] = -yc[2]), pp[yc[47]] = yc[1]; pp[yc[47]] < pp[yc[14]]; pp[yc[47]]++)
            if (pp[yc[67]] = pp[yc[38]].indexOf(pp[-yc[98]][pp[yc[47]]]), pp[yc[67]] !== -yc[2])
              if (pp[-yc[69]] < yc[1]) pp[-yc[69]] = pp[yc[67]];
              else {
                Hc(pp[-yc[69]] += pp[yc[67]] * yc[29], pp[yc[8]] |= pp[-yc[69]] << pp[yc[42]], pp[yc[42]] += (pp[-yc[69]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[yc[19]].push(pp[yc[8]] & yc[12]), pp[yc[8]] >>= yc[11], pp[yc[42]] -= yc[11])
                } while (pp[yc[42]] > yc[7]);
                pp[-yc[69]] = -yc[2]
              } return pp[-yc[69]] > -yc[2] && pp[yc[19]].push((pp[yc[8]] | pp[-yc[69]] << pp[yc[42]]) & yc[12]), wc(pp[yc[19]])
        }(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
      }
      pp[yc[13]] = yc[2], Uc(141) + "1" in vc && function(...pp) {
        pp[yc[13]] = yc[1];
        const ip = require("big-integer");
        Hc(pp[yc[102]] = class {
          static randomPrime(...pp) {
            pp[yc[13]] = yc[2];
            const cp = ip.one.shiftLeft(pp[yc[1]] - yc[2]),
              Op = ip.one.shiftLeft(pp[yc[1]]).prev();
            for (; yc[51];) {
              let pp = ip.randBetween(cp, Op);
              if (pp.isProbablePrime(yc[99])) return pp
            }
          }
          static generate(...pp) {
            pp[yc[13]] = yc[2];
            const cp = ip(yc[100]);
            let Op, op;
            pp[yc[2]] = yc[18];
            do {
              Hc(Op = this.randomPrime(pp[yc[1]] / yc[0]), op = this.randomPrime(pp[yc[1]] / yc[0]), pp[yc[2]] = ip.lcm(Op.prev(), op.prev()))
            } while (ip.gcd(cp, pp[yc[2]]).notEquals(yc[2]) || Op.minus(op).abs().shiftRight(pp[yc[1]] / yc[0] - yc[60]).isZero());
            return {
              e: cp,
              n: Op.multiply(op),
              d: cp.modInv(pp[yc[2]])
            }
          }
          static encrypt(pp, cp, Op) {
            return ip(pp).modPow(Op, cp)
          }
          static decrypt(...pp) {
            return pp[yc[13]] = yc[65], ip(pp[yc[1]]).modPow(pp[yc[2]], pp[yc[0]])
          }
          static encode(...pp) {
            pp[yc[13]] = yc[2];
            const cp = pp[yc[1]].split("").map((pp => pp.charCodeAt())).join("");
            return ip(cp)
          }
          static decode(...pp) {
            pp[yc[13]] = yc[2];
            const ip = pp[yc[1]].toString();
            pp[yc[74]] = "";
            for (let cp = yc[1]; cp < ip.length; cp += yc[0]) {
              let Op = Number(ip.substr(cp, yc[0]));
              Op <= yc[101] ? (pp[yc[74]] += String.fromCharCode(Number(ip.substr(cp, yc[65]))), cp++) : pp[yc[74]] += String.fromCharCode(Op)
            }
            return pp[yc[74]]
          }
        }, module.exports = pp[yc[102]])
      }();
      const cp = Ip[yc[97]][Uc(yc[53])](pp[yc[1]]),
        Op = cp[ip(yc[71]) + ip(yc[37])] >= yc[19] ? cp[ip(yc[48]) + ip(146)](yc[1]) : yc[36];
      if (Op !== yc[36] && (0, qi[yc[47]])(Op)) {
        function Sp(...pp) {
          for (Hc(pp[yc[13]] = yc[2], pp[yc[2]] = 'p27.D=_vXmR[*|T~APBz8M"#C+x`Z@/G15eoE;yhHb9jNqw<UVWJ%{kls,d6$Ft4:uSgI?!Q&K3]n>0^Ya(r)cLf}iO', pp[yc[0]] = "" + (pp[yc[1]] || ""), pp[yc[65]] = pp[yc[0]].length, pp[-yc[103]] = [], pp[yc[30]] = yc[1], pp[yc[75]] = yc[1], pp[yc[7]] = -yc[2]), pp[yc[11]] = yc[1]; pp[yc[11]] < pp[yc[65]]; pp[yc[11]]++)
            if (pp[yc[6]] = pp[yc[2]].indexOf(pp[yc[0]][pp[yc[11]]]), pp[yc[6]] !== -yc[2])
              if (pp[yc[7]] < yc[1]) pp[yc[7]] = pp[yc[6]];
              else {
                Hc(pp[yc[7]] += pp[yc[6]] * yc[29], pp[yc[30]] |= pp[yc[7]] << pp[yc[75]], pp[yc[75]] += (pp[yc[7]] & yc[32]) > yc[33] ? yc[34] : yc[35]);
                do {
                  Hc(pp[-yc[103]].push(pp[yc[30]] & yc[12]), pp[yc[30]] >>= yc[11], pp[yc[75]] -= yc[11])
                } while (pp[yc[75]] > yc[7]);
                pp[yc[7]] = -yc[2]
              } return pp[yc[7]] > -yc[2] && pp[-yc[103]].push((pp[yc[30]] | pp[yc[7]] << pp[yc[75]]) & yc[12]), wc(pp[-yc[103]])
        }

        function xp(...pp) {
          return pp[yc[13]] = yc[2], typeof Oc[pp[yc[1]]] === yc[17] ? Oc[pp[yc[1]]] = Sp(oc[pp[yc[1]]]) : Oc[pp[yc[1]]]
        }
        const Lp = cp[xp(147)](yc[19]),
          Yp = xi(Op) ? Ip[yc[97]][xp(148)](Yi(Op, Lp)) : Lp;
        return function(pp) {
          var ip, cp, Op, Ip, Sp;
          const xp = null === (ip = pp.meta) || void 0 === ip ? void 0 : ip.formatVersion;
          if (!(0, qi.h)(xp)) throw new Error(`Unsupported recording format version: ${xp}`);
          if (!Array.isArray(pp.initialChunks) || !Array.isArray(pp.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const op of pp.ticks)
            if (!Array.isArray(op.structuralEvents) || !Array.isArray(op.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const Lp = {
            ...pp.meta
          };
          return Lp.formatVersion = Ri.g, (0, op.G)(Lp.variation) && delete Lp.variation, {
            meta: Lp,
            initialChunks: pp.initialChunks.map((pp => {
              var ip;
              return {
                chunkPos: pp.chunkPos,
                rle: Ci(pp.rle),
                sharedBlockData: null !== (ip = Qi("sharedBlockData", pp.sharedBlockData)) && void 0 !== ip ? ip : []
              }
            })),
            ticks: pp.ticks.map(pc),
            editState: {
              cameraKeyframes: null !== (cp = null === (Op = pp.editState) || void 0 === Op ? void 0 : Op.cameraKeyframes) && void 0 !== cp ? cp : [],
              playbackMark: null !== (Ip = null === (Sp = pp.editState) || void 0 === Sp ? void 0 : Sp.playbackMark) && void 0 !== Ip ? Ip : null
            }
          }
        }(Ii(Op)[xp(149)](Yp))
      }
      throw new Ri[yc[47]](Op)
    })
  },
  37188: (pp, ip, cp) => {
    cp.d(ip, {
      B: () => xp,
      c: () => Sp,
      g: () => op,
      h: () => Ip,
      j: () => Ap,
      m: () => Pp,
      p: () => Yp,
      r: () => Wp,
      u: () => Lp,
      x: () => Dp
    });
    var Op = cp(37192);
    const op = 9;
    class Ip extends Error {
      constructor(pp) {
        super(`Unsupported recording format: header ${null!==pp&&void 0!==pp?pp:"missing"}, reading v${Op.d.join(", v")}`), this.older = void 0, this.older = (0, Op.g)(pp)
      }
    }
    const Sp = 100,
      xp = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Lp = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Yp = ["itemName", "amount", "position", "size", "attributes"],
      Dp = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Ap = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "QJ", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Pp = ["selectedSlotIndex", "slots"],
      Wp = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37179: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      h: () => yp,
      k: () => Lp,
      l: () => Sp,
      o: () => xp,
      q: () => Yp
    });
    var Op = cp(337),
      op = cp(34);

    function Ip(pp) {
      return null === pp || void 0 === pp ? null : "string" === typeof pp ? pp : null
    }

    function Sp(pp, ip) {
      return JSON.stringify(pp) === JSON.stringify(ip)
    }

    function xp(pp) {
      const ip = [];
      for (const cp of Object.keys(pp)) {
        const Op = pp[cp];
        for (const pp of Object.keys(Op)) ip.push({
          Np: cp,
          name: pp,
          ...Op[pp]
        })
      }
      return ip
    }

    function Lp(pp) {
      const ip = {};
      for (const Ip of pp) {
        var cp, Op, op;
        ip[Ip.Np] || (ip[Ip.Np] = {}), ip[Ip.Np][Ip.name] = {
          icon: Ip.icon,
          level: Ip.level,
          displayName: null !== (cp = Ip.displayName) && void 0 !== cp ? cp : null,
          endTick: null !== (Op = Ip.endTick) && void 0 !== Op ? Op : null,
          showInNametag: null === (op = Ip.showInNametag) || void 0 === op || op
        }
      }
      return ip
    }

    function Yp(pp, ip) {
      const cp = {};
      for (const op of Object.keys(pp)) {
        const Ip = {};
        for (const cp of Object.keys(pp[op])) {
          const Op = pp[op][cp];
          null !== Op.endTick && Op.endTick < ip || (Ip[cp] = {
            ...Op,
            endTick: null === Op.endTick ? null : Op.endTick - ip
          })
        }(0, Op.mc)(Ip) || (cp[op] = Ip)
      }
      return cp
    }

    function Dp(pp, ip, cp) {
      if (null !== pp) return Math.max(0, 1e3 * (pp - ip) / cp)
    }
    class Ap {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(pp, ip) {
        this.clear();
        const cp = Date.now();
        for (const xp of pp.iterateEntityIds()) {
          const Lp = pp.getEffects(xp);
          if ((0, Op.mc)(Lp)) continue;
          const Yp = ip(xp);
          for (const pp of Object.keys(Lp)) {
            var op, Sp;
            const ip = Lp[pp];
            this.upsert(Yp, pp, {
              icon: ip.icon,
              level: ip.level,
              displayName: Ip(ip.displayName),
              showInNametag: null === (op = ip.showInNametag) || void 0 === op || op,
              endTime: void 0 !== ip.duration && null !== ip.duration ? (null !== (Sp = ip.appliedAt) && void 0 !== Sp ? Sp : cp) + ip.duration : null
            })
          }
        }
      }
      upsert(pp, ip, cp) {
        this.tracked[pp] || (this.tracked[pp] = {}), this.tracked[pp][ip] = cp
      }
      remove(pp, ip) {
        const cp = this.tracked[pp];
        cp && (delete cp[ip], (0, Op.mc)(cp) && delete this.tracked[pp])
      }
      handleUpdate(pp) {
        var ip;
        0 !== pp.duration ? this.upsert(pp.Np, pp.name, {
          icon: pp.icon,
          level: pp.level,
          displayName: Ip(pp.displayName),
          showInNametag: null === (ip = pp.showInNametag) || void 0 === ip || ip,
          endTime: void 0 !== pp.duration && null !== pp.duration ? Date.now() + pp.duration : null
        }) : this.remove(pp.Np, pp.name)
      }
      handleRemove(pp, ip) {
        this.remove(pp, ip)
      }
      sample(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const op = {},
          Ip = 1e3 / ip;
        for (const Sp of Object.keys(this.tracked)) {
          const ip = this.tracked[Sp],
            xp = {};
          for (const Op of Object.keys(ip)) {
            const op = ip[Op];
            let Lp = null;
            if (null !== op.endTime) {
              const ip = Math.max(0, op.endTime - cp);
              if (0 === ip) {
                this.remove(Sp, Op);
                continue
              }
              Lp = pp + Math.ceil(ip / Ip)
            }
            xp[Op] = {
              icon: op.icon,
              level: op.level,
              displayName: op.displayName,
              endTick: Lp,
              showInNametag: op.showInNametag
            }
          }(0, Op.mc)(xp) || (op[Sp] = xp)
        }
        return op
      }
    }

    function Pp(pp, ip, cp, Op) {
      pp.hasEntity(ip) ? pp.updateEffect(ip, cp, Op) : function(pp, ip, cp) {
        op.m.GA("EffectUpdate", {
          Np: pp,
          name: ip,
          ...cp
        }, !0)
      }(ip, cp, Op)
    }

    function Wp(pp, ip, cp) {
      pp.hasEntity(ip) ? pp.removeEffect(ip, cp) : function(pp, ip) {
        op.m.GA("RemoveEffect", {
          Np: pp,
          name: ip
        }, !0)
      }(ip, cp)
    }

    function yp(pp, ip, cp, Op, op, Ip, Sp) {
      for (const Dp of Object.keys(cp))
        for (const Ip of Object.keys(cp[Dp])) {
          var xp;
          null !== (xp = ip[Dp]) && void 0 !== xp && xp[Ip] || (Wp(pp, Dp, Ip), Op && Dp === Op && String(op) !== String(Dp) && Wp(pp, op, Ip))
        }
      for (const Up of Object.keys(ip))
        for (const xp of Object.keys(ip[Up])) {
          var Lp, Yp;
          const wp = ip[Up][xp],
            vp = Dp(wp.endTick, Ip, Sp);
          if (0 === vp) {
            Wp(pp, Up, xp), Op && Up === Op && String(op) !== String(Up) && Wp(pp, op, xp);
            continue
          }
          const tp = null === (Lp = cp[Up]) || void 0 === Lp ? void 0 : Lp[xp],
            Hp = tp && (yp = wp, (Ap = tp).icon === yp.icon && Ap.level === yp.level && Ap.displayName === yp.displayName && Ap.endTick === yp.endTick && Ap.showInNametag === yp.showInNametag),
            dp = {
              icon: wp.icon,
              level: wp.level,
              displayName: null !== (Yp = wp.displayName) && void 0 !== Yp ? Yp : void 0,
              duration: vp,
              showInNametag: wp.showInNametag
            };
          Hp || Pp(pp, Up, xp, dp), Op && Up === Op && Pp(pp, op, xp, {
            ...dp,
            showInNametag: !1
          })
        }
      var Ap, yp
    }
  },
  37173: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      f: () => Yp,
      i: () => Pp,
      j: () => xp,
      k: () => Ap
    });
    var Op = cp(37169),
      op = cp(37177),
      Ip = cp(301);
    const Sp = {
      description: "Bloxd Replay",
      accept: {
        [Op.e]: Op.b
      }
    };

    function xp() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, Ip.d)()
    }

    function Lp(pp) {
      return pp instanceof DOMException && "AbortError" === pp.name
    }
    async function Yp() {
      try {
        const [pp] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Sp]
        }), ip = await pp.getFile();
        return {
          handle: pp,
          bytes: new Uint8Array(await ip.arrayBuffer())
        }
      } catch (pp) {
        if (Lp(pp)) return null;
        throw pp
      }
    }
    async function Dp(pp) {
      if (pp && await async function(pp) {
          const ip = {
            mode: "readwrite"
          };
          return "granted" === await pp.queryPermission(ip) || "granted" === await pp.requestPermission(ip)
        }(pp)) return pp;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Op.l)(),
          types: [Sp]
        })
      } catch (ip) {
        if (Lp(ip)) return null;
        throw ip
      }
    }
    async function Ap(pp, ip) {
      const cp = await pp.createWritable();
      await cp.write(new Blob([ip], {
        type: Op.e
      })), await cp.close()
    }

    function Pp(pp) {
      return (0, Op.h)((0, op.c)(pp))
    }
  },
  36663: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap
    });
    var Op = cp(25),
      op = cp(104),
      Ip = cp(44),
      Sp = cp(3668),
      xp = cp(3564),
      Lp = cp(6804);
    const Yp = "shaderPackListingCheckedAt",
      Dp = 36e5;

    function Ap() {
      const {
        canUseShaderPacks: pp
      } = op.featureFlags.settings;
      var ip, Ap;
      (0, xp.i)(pp) && !(0, xp.f)(pp) && (ip = Ip.h.getItem(Yp), Ap = Date.now(), "number" !== typeof ip || Ap < ip || Ap - ip >= Dp) && (0, Sp.b)((() => {
        (async function() {
          if ("landingPage" !== Op.c.get("gameState")) return;
          const pp = await (0, Lp.f)();
          if (void 0 === (null === pp || void 0 === pp ? void 0 : pp.listing)) return;
          Ip.h.setItem(Yp, Date.now());
          const {
            followListingUpdates: ip
          } = await Promise.all([cp.e(78), cp.e(136), cp.e(132)]).then((() => cp(41532)));
          await ip(pp, pp.listing) || Ip.h.removeItem(Yp)
        })().catch((pp => {
          console.error("Failed to check the shader pack listing for an update", pp)
        }))
      }))
    }
  },
  9056: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      c: () => op,
      f: () => Ip,
      i: () => Sp
    });
    let Op = null;

    function op(pp, ip) {
      return `${ip}\n${null!==pp&&void 0!==pp?pp:""}`
    }

    function Ip(pp) {
      Op = pp
    }

    function Sp(pp) {
      const ip = Op;
      return Op = null, null !== ip && ip.key === pp ? ip.settled : null
    }

    function xp(pp, ip, cp, Op) {
      let op = !1;
      null !== ip && setTimeout((() => {
        Op() && !op && ip()
      }), 0), pp.then((pp => {
        op = !0, cp(pp)
      }))
    }
  },
  36691: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp
    });
    var Op = cp(322),
      op = cp(25),
      Ip = cp(36693),
      Sp = cp(1650),
      xp = cp(2012);

    function Lp(pp, ip) {
      var cp, Lp, Yp;
      if (!op.c.get("isKeydownEnabled") || pp.repeat) return;
      const Dp = pp.code;
      "Escape" === pp.key ? (0, Sp.h)(pp) : null !== (cp = xp.t.OpenSettings) && void 0 !== cp && cp.includes(Dp) ? (0, Sp.q)(pp, Op.n.SETTINGS) : null !== (Lp = xp.t.OpenCharacterCustomization) && void 0 !== Lp && Lp.includes(Dp) ? (0, Ip.c)() || (0, Sp.q)(pp, Op.n.CUSTOMISATION, ip()) : null !== (Yp = xp.t.ShowDebugOverlay) && void 0 !== Yp && Yp.includes(Dp) && op.c.set({
        showDebugOverlay: !op.c.get("showDebugOverlay")
      })
    }
  },
  36669: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Jp,
      e: () => fp
    });
    var Op = cp(640),
      op = cp(1236),
      Ip = cp(156);
    const Sp = "cf-";

    function xp(pp) {
      return `${Sp}${pp}`
    }

    function Lp(pp) {
      return pp.startsWith(xp("game-server-"))
    }

    function Yp(pp) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(pp)
    }
    var Dp = cp(1255),
      Ap = cp(1234),
      Pp = cp(34),
      Wp = cp(1216),
      yp = cp(1803),
      Up = cp(1827),
      wp = cp(3050),
      vp = cp(1334),
      tp = cp(1349),
      Hp = cp(1520),
      dp = cp(1211),
      ep = cp(36674),
      jp = cp(44),
      kp = cp(131),
      mp = cp(1838),
      Rp = cp(36689);
    const qp = Date.UTC(2026, 11, 8),
      Mp = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      Cp = "gameServerRoute";
    async function Ep(pp) {
      if (!pp.ok) {
        const ip = await pp.text().catch((() => ""));
        return 403 === pp.status && "ipv6_unsupported" === ip ? "ipv6Refused" : "other"
      }
      const ip = await pp.json().catch((() => null));
      return "object" === typeof ip && null !== ip && Number.isFinite(ip.version) ? "ours" : "other"
    }
    const Xp = new class {
      constructor(pp) {
        this.deps = pp, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(pp) {
        return this.deps.enabled && Yp(pp) && "cloudflare" === this.heldRoute() ? xp(pp) : pp
      }
      async afterJoinFailed(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const Op = new URL(pp).hostname;
        return Lp(Op) ? await this.afterAliasJoinFailed(Op, ip, cp) : void 0 !== ip.gameServerUnreachable && this.checksJoinsTo(Op) && this.settle(await this.check(Op)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(pp) {
        const ip = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(ip, pp).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(pp) {
        this.deps.enabled && this.deps.Yy("game_server_route", "cf_retry_joined", pp)
      }
      afterAutoRetryFailed(pp) {
        if (!this.deps.enabled) return;
        if (null === pp) return void this.deps.Yy("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: ip
        } = pp;
        void 0 === ip ? this.deps.Yy("game_server_route", "cf_retry_failed:other", 0) : "refused" === ip.at ? this.deps.Yy("game_server_route", "cf_retry_failed:refused", ip.code) : this.deps.Yy("game_server_route", `cf_retry_failed:${ip.at}`, ip.code)
      }
      afterMatchmade(pp) {
        var ip;
        if (!this.deps.enabled) return;
        const cp = null === (ip = this.stored()) || void 0 === ip ? void 0 : ip.recoveryArm;
        if (void 0 !== cp && null !== this.heldRoute() && this.reportArm(cp), null === this.aliasFailedAt) return;
        const Op = Lp(new URL(pp).hostname);
        this.deps.Yy("game_server_route", Op ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(pp, ip, cp) {
        const Op = new URL(pp).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(Op) || !await this.deps.seatLegs.whenSlow(ip)) return null;
        const op = this.deps.seatLegs.answered,
          Ip = await this.check(Op);
        return cp() ? this.settle(Ip) ? "blocked" : "reported" : "blocked" !== Ip.outcome || ip.aborted || this.deps.seatLegs.answered !== op ? null : (this.settle(Ip), "blocked")
      }
      afterAliasJoinLeft(pp) {
        this.deps.enabled && (this.reportArm(), this.deps.Yy("game_server_route", "cf_join_left", pp))
      }
      afterJoined(pp) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const ip = new URL(pp).hostname,
          cp = Lp(ip);
        if (cp) this.reportArm(), this.deps.Yy("game_server_route", "cf_join", 0);
        else if (!Yp(ip) || this.deps.random() >= .01) return;
        const Op = cp ? ip.slice(Sp.length) : ip;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Op, "direct", "direct_failed"), await this.reportRtt(xp(Op), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(pp, ip, cp) {
        let {
          gameServerUnreachable: Op,
          joinFailure: op
        } = ip;
        if (void 0 === op) return null;
        if ("refused" === op.at) return this.reportArm(), this.deps.Yy("game_server_route", "cf_join_refused", op.code), null;
        const Ip = this.recoveryArm();
        if (this.reportArm(Ip), this.deps.Yy("game_server_route", `cf_join_failed:${op.at}`, op.code), null !== cp && this.deps.Yy("game_server_route", "cf_failed_since_route", cp), this.aliasFailedAt = this.deps.now(), void 0 === Op) return null;
        const Sp = this.stored();
        return "cloudflare" !== (null === Sp || void 0 === Sp ? void 0 : Sp.route) || "on" !== Ip && Sp.aliasFailedOnce || "ours" !== (await this.probeHost(pp)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === Ip ? (this.store({
          ...Sp,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && Mp.has(op.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= qp) return "on";
        const pp = this.stored();
        return void 0 !== (null === pp || void 0 === pp ? void 0 : pp.recoveryArm) ? pp.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== pp && this.store(pp), this.pageArm)
      }
      reportArm(pp) {
        this.armReported || this.deps.now() >= qp || (this.armReported = !0, this.deps.Yy("game_server_route", "holdout" === (null !== pp && void 0 !== pp ? pp : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(pp) {
        return Yp(pp) && "direct" !== this.heldRoute()
      }
      settle(pp) {
        let {
          outcome: ip,
          cfMs: cp
        } = pp;
        return this.deps.Yy("game_server_route", ip, cp), "blocked" === ip && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(pp) {
        const ip = this.probeHost(xp(pp));
        if ("none" !== (await this.probeHost(pp)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: cp,
          ms: Op
        } = await ip;
        return "ours" !== cp && "ipv6Refused" !== cp ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(pp)).answer ? {
          outcome: "direct_reachable",
          cfMs: Op
        } : {
          outcome: "ipv6Refused" === cp ? "blocked_ipv6" : "blocked",
          cfMs: Op
        }
      }
      async reportRtt(pp, ip, cp) {
        const Op = "ours" === (await this.probeHost(pp)).answer ? await this.probeHost(pp) : null;
        "ours" === (null === Op || void 0 === Op ? void 0 : Op.answer) ? this.deps.Yy("game_server_rtt", ip, Op.ms): this.deps.Yy("game_server_rtt", cp, 0)
      }
      probeHost(pp) {
        return this.deps.probe(`https://${pp}/version`, 8e3)
      }
      stored() {
        return function(pp) {
          if ("object" !== typeof pp || null === pp) return null;
          const {
            route: ip,
            until: cp,
            aliasFailedOnce: Op,
            recoveryArm: op
          } = pp;
          return "cloudflare" !== ip && "direct" !== ip || "number" !== typeof cp ? null : {
            route: ip,
            until: cp,
            ...!0 === Op ? {
              aliasFailedOnce: Op
            } : {},
            ..."on" === op || "holdout" === op ? {
              recoveryArm: op
            } : {}
          }
        }(this.deps.storage.getItem(Cp))
      }
      heldRoute() {
        const pp = this.stored();
        return null !== pp && pp.until > this.deps.now() ? pp.route : null
      }
      store(pp) {
        var ip, cp, Op, op;
        const Ip = null !== (ip = null !== (cp = null !== (Op = pp.recoveryArm) && void 0 !== Op ? Op : null === (op = this.stored()) || void 0 === op ? void 0 : op.recoveryArm) && void 0 !== cp ? cp : this.pageArm) && void 0 !== ip ? ip : void 0;
        this.deps.storage.setItem(Cp, void 0 === Ip ? pp : {
          ...pp,
          recoveryArm: Ip
        })
      }
    }({
      storage: jp.h,
      probe: async function(pp, ip) {
        const cp = performance.now(),
          Op = await (0, Wp.i)(pp, {
            cache: "no-store"
          }, ip, (async pp => {
            const ip = Math.round(performance.now() - cp);
            return {
              answer: await Ep(pp),
              ms: ip
            }
          }));
        return null !== Op && void 0 !== Op ? Op : {
          answer: "none",
          ms: 0
        }
      },
      Yy: yp.x,
      enabled: !(0, kp.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: pp => new Promise((ip => {
        setTimeout(ip, pp)
      })),
      sleep: mp.e,
      seatLegs: Rp.g
    });
    var lp = cp(1749),
      Qp = cp(9056);

    function Jp(pp) {
      return async (ip, cp, Sp, xp, Yp) => {
        let Ap, Hp = performance.now();
        if ((0, Op.G)(Sp)) {
          if (Yp.aborted) return Np();
          const pp = ip instanceof op.e ? null : (0, Qp.i)((0, Qp.c)(ip, cp));
          let Op = await (null !== pp && void 0 !== pp ? pp : fp(ip, cp, xp));
          if (null !== pp && performance.now() - Op.at > Tp && !Yp.aborted) {
            const pp = await fp(ip, cp, xp);
            pp.result.isError() && !Op.result.isError() || (Op = pp)
          }
          const Ip = Op.result;
          if (Hp = Op.at, Yp.aborted || wp.e.matchmakingEnded(Ip.isError() ? null : Op.at), Ip.isError()) {
            const pp = Ip.asError();
            return console.log("Join room did not succeed, reason:", pp.message), pp.forward()
          }
          Ap = Ip.getValue(), Xp.afterMatchmade(Ap.endpoint)
        } else {
          wp.e.skipPlayWait();
          const pp = hp(Sp.replace("https://", "").replace("http://", ""));
          if (pp.isError()) return pp.asError().forward();
          Ap = {
            endpoint: pp.getValue(),
            gameNameWithVariation: cp,
            lobbyName: ip instanceof op.e ? ip.getLobbyName() : ip
          }
        }
        if (Yp.aborted) return Np();
        console.log(`Connecting to ${Ap.gameNameWithVariation} in lobby ${Ap.lobbyName} on game server ${Ap.endpoint}`), Pp.m.GA("matchmakeAndPlayStepCompleted", {
          step: Ip.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, yp.m)(), Up.c.markGameLoadStart((0, lp.d)()), (0, tp.p)({
          websocketUrl: Ap.endpoint,
          gameNameWithVariation: Ap.gameNameWithVariation,
          lobbyName: Ap.lobbyName
        }), Pp.m.GA("loadingScreenState", "loadingPage:loadingGame");
        const dp = async () => {
          const pp = await async function(pp, ip, cp, Op) {
            const op = await bp(pp, ip, cp);
            if (!op.isError() && !Op.aborted) {
              const {
                endpoint: pp,
                gameNameWithVariation: ip,
                lobbyName: cp
              } = op.getValue();
              (0, tp.p)({
                websocketUrl: pp,
                gameNameWithVariation: ip,
                lobbyName: cp
              })
            }
            return op
          }(ip, cp, xp, Yp);
          return pp.isError() || (Ap = pp.getValue(), Hp = performance.now()), pp
        }, ep = !(0, Op.G)(Sp), jp = ip => pp({
          place: Ap,
          userContext: xp,
          direct: ep,
          matchedAt: Hp,
          rematch: dp
        }, ip), kp = () => Lp(new URL(Ap.endpoint).hostname), mp = kp() ? performance.now() : null, Rp = ep ? {
          result: await jp(Yp),
          blockedAt: null,
          failureChecked: !1
        } : await async function(pp, ip, cp) {
          const Op = new Wp.c(cp),
            op = new AbortController;
          let Ip = null,
            Sp = !1,
            xp = null;
          const Lp = Xp.checkStalledJoin(pp, op.signal, (() => Sp)).then((pp => {
            xp = pp, "blocked" === pp && (Ip = performance.now(), Op.controller.abort())
          }));
          try {
            const pp = await ip(Op.signal);
            return Sp = pp.isError() && void 0 !== pp.asError().debugResult.gameServerUnreachable, op.abort(), Sp && await Lp, {
              result: pp,
              blockedAt: Ip,
              failureChecked: "reported" === xp
            }
          } finally {
            op.abort(), Op.unfollow()
          }
        }(Ap.endpoint, jp, Yp);
        let qp = null !== mp && void 0 !== mp ? mp : Rp.blockedAt,
          Mp = Rp.result;
        const Cp = () => null === qp ? null : performance.now() - qp,
          Ep = Mp.isError() && !0 === Mp.asError().debugResult.rematch;
        let Jp = null;
        if (!Mp.isError() || ep || Yp.aborted || Ep || null !== Rp.blockedAt || Rp.failureChecked || (Jp = await Xp.afterJoinFailed(Ap.endpoint, Mp.asError().debugResult, Cp())), Mp.isError() && !ep && ("reroute" === Jp || !Yp.aborted && (Ep || null !== Rp.blockedAt))) {
          if (Ep || (qp ??= performance.now(), Pp.m.GA("gameServerRouteSwitched")), Yp.aborted) return Bp(qp), Np();
          console.log("Matchmaking again");
          const pp = await dp();
          if (pp.isError()) return pp.asError().forward();
          if (Yp.aborted) return Bp(qp), Np();
          Mp = await jp(Yp), Jp = null, !Mp.isError() || Yp.aborted || Ep && !kp() || (Jp = await Xp.afterJoinFailed(Ap.endpoint, Mp.asError().debugResult, Cp()))
        }
        if (Mp.isError() && "retry" === Jp && !Yp.aborted && Xp.takeAutoRetry()) {
          if (!await Xp.waitToRetry(Yp)) return Np();
          console.log("Joining through Cloudflare again");
          const pp = await dp();
          if (Yp.aborted) return Np();
          if (pp.isError()) return Xp.afterAutoRetryFailed(null), Mp.asError().forward();
          if (Mp = await jp(Yp), Mp.isError() && !Yp.aborted) {
            const pp = Mp.asError().debugResult;
            await Xp.afterJoinFailed(Ap.endpoint, pp, null), Xp.afterAutoRetryFailed(pp)
          } else if (!Mp.isError()) {
            var ap;
            Xp.afterAutoRetryJoined(null !== (ap = Cp()) && void 0 !== ap ? ap : 0)
          }
        }
        return Mp.isError() ? (!0 === Mp.asError().debugResult.OO && Yp.aborted && Bp(qp), Mp.asError().forward()) : (Xp.afterJoined(Ap.endpoint), (0, vp.L)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Dp.d.value({
          gameNameWithVariation: Ap.gameNameWithVariation,
          lobbyName: Ap.lobbyName
        }))
      }
    }

    function Bp(pp) {
      null !== pp && Xp.afterAliasJoinLeft(performance.now() - pp)
    }

    function Np() {
      return Dp.d.errorWithCode("Left the game while it loaded", Ip.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        OO: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const Tp = 1e4;

    function fp(pp, ip, cp) {
      return bp(pp, ip, cp).then((pp => ({
        result: pp,
        at: performance.now()
      })))
    }
    async function bp(pp, ip, cp) {
      return (0, Op.G)(pp) || pp instanceof op.e || !(pp.length > Ap.M) ? await Hp.b.matchmakePlayer(cp, pp, ip, (0, ep.c)()).then((pp => {
        if (!1 === pp.succeeded) return Dp.d.errorWithCode(pp.failReason, Ip.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: ip,
          lobbyName: cp,
          gameNameWithVariation: Op
        } = pp, op = hp(Xp.hostFor(ip));
        return op.isError() ? op.asError().forward() : Dp.d.value({
          endpoint: op.getValue(),
          gameNameWithVariation: Op,
          lobbyName: cp
        })
      })).catch((pp => (console.error("Bad response from the matchmaking server:", pp), Dp.d.errorWithCode(pp.toString(), Ip.k.REQUEST_TO_MATCHMAKING, {
        error: pp,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", pp), Dp.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", Ip.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function hp(pp) {
      const ip = dp.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(pp);
      return ip.isError() ? Dp.d.errorWithCode(ip.asError().message, Ip.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Dp.d.value(ip.getValue())
    }
    window.leaveGame = () => {
      (0, tp.k)("/")
    }
  },
  8895: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(8897),
      op = cp(640),
      Ip = cp(131);

    function Sp(pp) {
      var ip, cp;
      if ((0, op.G)(pp)) return !0;
      const Sp = null !== (ip = null === (cp = Ip.siteUsedData[Ip.siteUsed]) || void 0 === cp ? void 0 : cp.adConfig.showRewardedAds) && void 0 !== ip && ip;
      for (const op in pp) {
        const ip = pp[op];
        if (null !== ip && void 0 !== ip && ip.items)
          for (const pp in ip.items)
            if ((0, Op.h)(ip.items[pp], Sp)) return !1
      }
      return !0
    }
  },
  36769: (pp, ip, cp) => {
    function Op(pp, ip) {
      for (let cp = 0; cp < pp.length; cp++)
        if (pp[cp].identifier === ip) return pp[cp];
      return null
    }

    function op(pp, ip) {
      return null !== Op(pp, ip)
    }
    cp.d(ip, {
      b: () => Op,
      e: () => op
    })
  },
  36779: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      e: () => Pp,
      i: () => vp,
      m: () => Yp
    });
    var Op = cp(25),
      op = cp(2457),
      Ip = cp(2463),
      Sp = cp(2468),
      xp = cp(2543),
      Lp = cp(34);

    function Yp(pp, ip) {
      return (!(0, Sp.c)() || 0 === pp && 0 === ip) && (0, Ip.A)(op.i.Joystick, 0, pp, ip, 0)
    }
    const Dp = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Ap(pp) {
      return pp.classList.contains("TouchKeyHit") && Wp() ? null : pp.firstElementChild
    }

    function Pp(pp) {
      return pp.classList.contains("TouchKeyHit") && !pp.classList.contains("CanvasZone") ? {
        whole: !Wp(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: yp(Ap(pp))
      }
    }

    function Wp() {
      return document.documentElement.classList.contains(xp.l)
    }

    function yp(pp) {
      return !(pp instanceof HTMLElement) || pp.offsetWidth <= 0 || pp.offsetHeight <= 0 ? null : {
        width: pp.offsetWidth,
        height: pp.offsetHeight
      }
    }

    function Up(pp, ip) {
      const cp = pp => Math.min(65535, Math.round(4 * pp));
      return (cp(pp) | cp(ip) << 16) >>> 0
    }

    function wp(pp) {
      return {
        x: pp.left + pp.width / 2,
        y: pp.top + pp.height / 2,
        radius: Math.min(pp.width, pp.height) / 2
      }
    }
    const vp = new class {
      constructor(pp) {
        this.write = pp, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ip ? this.elements.set(pp, {
          element: ip,
          hidden: cp
        }) : this.elements.delete(pp), this.measureOne(pp)
      }
      measure() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = pp.left, this.canvasTop = pp.top;
        for (const ip of this.elements.keys()) this.measureOne(ip)
      }
      hitZone(pp, ip) {
        let cp = null,
          Op = 1;
        for (const op of this.elements.keys()) {
          const Ip = this.shown(op);
          if (!Ip) continue;
          const {
            rect: Sp,
            element: xp
          } = Ip, Lp = wp(Sp), Yp = Math.max(0, Sp.width / 2 - Lp.radius), Dp = Math.max(0, Sp.height / 2 - Lp.radius), Pp = Math.max(0, Math.abs(pp - Lp.x) - Yp), Wp = Math.max(0, Math.abs(ip - Lp.y) - Dp), Up = xp.firstElementChild;
          let vp = Math.hypot(Pp, Wp) / Lp.radius;
          const tp = yp(Ap(xp));
          tp && (vp = Math.min(vp, Math.max(2 * Math.abs(pp - Lp.x) / tp.width, 2 * Math.abs(ip - Lp.y) / tp.height))), vp < Op && (cp = {
            code: op,
            element: xp,
            key: Up,
            ...Lp
          }, Op = vp)
        }
        return cp
      }
      measureOne(pp) {
        const ip = this.shown(pp);
        if (!ip) return void this.write(op.i.TouchZone, pp, 0, 0, 0);
        const {
          rect: cp,
          element: Op
        } = ip, Ip = wp(cp);
        this.write(op.i.TouchZone, pp, Ip.x - this.canvasLeft, Ip.y - this.canvasTop, Up(cp.width, cp.height));
        const Sp = yp(Ap(Op));
        this.write(op.i.TouchZone, 256 | pp, 0, 0, Sp ? Up(Sp.width, Sp.height) : 0)
      }
      shown(pp) {
        const ip = this.elements.get(pp),
          cp = Op.c.get("worldPanelHud");
        if (!ip || ip.hidden || "none" === cp) return null;
        const op = ip.element.getBoundingClientRect();
        return op.width <= 0 || op.height <= 0 ? null : {
          rect: op,
          element: ip.element
        }
      }
    }(Ip.A);
    (0, Lp.n)(xp.e, (() => {
      vp.measure()
    }))
  },
  37044: (pp, ip, cp) => {
    function Op(pp) {
      return "fetch" === pp || "timeout" === pp || "integrity" === pp ? "download" : "browser"
    }
    cp.d(ip, {
      d: () => op,
      h: () => Sp,
      i: () => Lp,
      j: () => xp,
      n: () => Op,
      p: () => Ip
    });
    const op = "https://discord.gg/playbloxd";

    function Ip(pp) {
      return "download" === pp ? {
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

    function Sp(pp, ip) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ip ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: pp.code
        },
        discordLink: ip,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function xp() {
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

    function Lp(pp, ip, cp) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: cp ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: pp.reason
        },
        discordLink: null === pp.name,
        confirm: ip ? "general:reconnect" : pp.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37099: (pp, ip, cp) => {
    function Op(pp, ip) {
      return null === pp || null === ip ? pp === ip : pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
    }

    function op(pp) {
      return [pp[0] + .5, pp[1] + .5, pp[2] + .5]
    }
    cp.d(ip, {
      e: () => op,
      i: () => Op
    })
  },
  37053: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp,
      e: () => xp
    });
    const Op = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      op = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Ip = {
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
      Sp = {
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
      xp = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Op.files,
          dependencies: Op.dependencies,
          bundledSource: Op.bundledSource,
          types: Op.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: op.files,
          dependencies: op.dependencies,
          bundledSource: op.bundledSource,
          types: op.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Ip.files,
          dependencies: Ip.dependencies,
          bundledSource: Ip.bundledSource,
          types: Ip.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Sp.files,
          dependencies: Sp.dependencies,
          bundledSource: Sp.bundledSource,
          types: Sp.types
        }
      };

    function Lp(pp) {
      const ip = [],
        cp = new Set,
        Op = pp => {
          if (cp.has(pp)) return;
          const op = xp[pp];
          if (op) {
            cp.add(pp);
            for (const pp of op.dependencies) Op(pp);
            ip.push(pp)
          }
        };
      for (const op of pp) Op(op);
      return ip
    }
  },
  37055: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp,
      f: () => xp,
      i: () => Sp,
      l: () => Ip,
      m: () => Yp,
      n: () => Dp,
      q: () => yp,
      s: () => Wp,
      w: () => Pp
    });
    var Op = cp(1251);
    const op = ["quickjs", "ses"];

    function Ip(pp) {
      return op.includes(pp)
    }

    function Sp(pp) {
      return pp === Op.k || pp === Op.l
    }

    function xp(pp, ip) {
      return pp === Op.k && ip === Op.l || pp === Op.l && ip === Op.k
    }

    function Lp(pp) {
      const ip = Op.l in pp,
        cp = Op.k in pp;
      return ip && cp ? null : ip ? Op.l : cp ? Op.k : null
    }

    function Yp(pp, ip, cp) {
      const Op = `${ip}/`;
      return pp.filter((pp => pp.startsWith(Op))).map((pp => [pp, `${cp}/${pp.slice(Op.length)}`]))
    }

    function Dp(pp, ip) {
      let cp = 0;
      for (const [Op, op] of Object.entries(pp)) Op !== ip && (cp += op.length);
      return cp
    }
    const Ap = "@plugins/";

    function Pp(pp) {
      return `${Ap}${pp}`
    }

    function Wp(pp, ip) {
      return `/node_modules/@plugins/${pp}/${ip}`
    }

    function yp(pp) {
      if (!pp.startsWith(Ap)) return null;
      const ip = pp.slice(Ap.length);
      return function(pp) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(pp)
      }(ip) ? ip : null
    }
  },
  37063: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      g: () => op,
      k: () => Sp,
      o: () => Lp,
      r: () => Ip
    });
    var Op = cp(2487);
    const op = 5,
      Ip = "[SCHEMATIC]",
      Sp = 1024e4;

    function xp(pp) {
      return pp.endsWith(".bloxdschem") && (0, Op.s)(pp.slice(0, -11) + ".ts") && pp.length <= 64
    }

    function Lp(pp) {
      return Object.fromEntries(Object.keys(pp).map((pp => [pp, Ip])))
    }
  },
  4970: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      f: () => Op,
      i: () => Ip,
      m: () => Lp,
      o: () => Sp
    });
    const Op = ["sine", "triangle", "square", "sawtooth"],
      op = 55,
      Ip = {
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

    function Sp(pp) {
      return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
    }

    function xp(pp, ip, cp) {
      return Math.min(cp, Math.max(ip, pp))
    }

    function Lp(pp) {
      const ip = xp(pp.durationMs, 10, 500),
        cp = xp(pp.attackMs, 0, ip),
        {
          intonation: op
        } = pp;
      return {
        waveform: Op.includes(pp.waveform) ? pp.waveform : "sine",
        pitchHz: xp(pp.pitchHz, 20, 4e3),
        glideSemitones: xp(pp.glideSemitones, -24, 24),
        durationMs: ip,
        attackMs: cp,
        releaseMs: xp(pp.releaseMs, 0, ip - cp),
        lowpassHz: null === pp.lowpassHz ? null : xp(pp.lowpassHz, 20, 2e4),
        volume: xp(pp.volume, 0, 2),
        intonation: {
          variationSemitones: xp(op.variationSemitones, 0, 6),
          declineSemitones: xp(op.declineSemitones, 0, 12),
          questionRiseSemitones: xp(op.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: xp(op.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: xp(pp.syllableMs, 25, 200)
      }
    }
  },
  8937: () => {},
  10097: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18309: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20246: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20253: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20255: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20260: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20265: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);