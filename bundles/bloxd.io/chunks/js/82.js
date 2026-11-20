export const id = 82;
export const ids = [82];
export const modules = {
  36199: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => zb,
      g: () => Kb
    });
    var kb = sb(64),
      Wb = sb(1870),
      ab = sb(36201),
      Tb = sb.n(ab),
      Ub = sb(4282),
      Ib = sb(1839),
      Hb = sb(1423),
      fb = sb(117),
      Mb = sb(137),
      Xb = sb(344),
      nb = sb(1033),
      mb = sb.n(nb),
      lb = sb(19),
      Qb = sb(1039),
      eb = sb(1626),
      Cb = sb(1704),
      Nb = sb(1666),
      Vb = sb(1934),
      Lb = sb(1381),
      ub = sb(2004),
      Yb = sb(1371),
      hb = sb(8394),
      Jb = sb(36203),
      gb = sb(36219),
      Bb = sb(1448),
      tb = sb(2346),
      yb = sb(1197),
      Pb = sb(36228);
    var Db = sb(8862);
    var Eb = sb(1087);
    const ib = sb(36231),
      Ob = ["enter", "t", "/"];
    let Gb = !1;

    function Kb() {
      return Gb || (0, Cb.isTextEntry)(document.activeElement)
    }

    function Zb() {
      var bb, cb;
      (0, ub.c)();
      const sb = null !== (bb = null === (cb = (0, Lb.g)()) || void 0 === cb ? void 0 : cb.getBoundButton("keyboardChannel")) && void 0 !== bb ? bb : null;
      return sb ? (0, Eb.jsx)(Vb.b, {
        className: "ChatInputChannelGlyph",
        glyph: sb
      }) : null
    }

    function zb() {
      const {
        t: bb
      } = (0, yb.E)(), {
        isTouchScreen: cb
      } = (0, lb.p)(["isTouchScreen"]), sb = (0, Yb.l)(), [ab, nb] = (0, kb.useState)(!1), Vb = (0, kb.useRef)(ab), Lb = (0, kb.useRef)(null), {
        messages: ub,
        reportedPlayers: Kb,
        channel: zb
      } = (0, hb.l)(), db = (0, kb.useRef)(0), Ab = (0, kb.useRef)(""), wb = (0, kb.useRef)(null);
      var rb;
      rb = wb, (0, kb.useEffect)((() => {
        if (!(0, fb.isIOS)()) return;
        const bb = rb.current;
        let cb = null;
        const sb = sb => {
            const kb = sb.changedTouches[0];
            cb = "none" === getComputedStyle(bb).pointerEvents ? {
              id: kb.identifier,
              y: kb.clientY
            } : null
          },
          kb = sb => {
            const kb = cb,
              Wb = kb && (0, Pb.b)(sb.changedTouches, kb.id);
            Wb && (sb.preventDefault(), bb.scrollBy({
              top: kb.y - Wb.clientY,
              behavior: "instant"
            }), kb.y = Wb.clientY)
          };
        return bb.addEventListener("touchstart", sb, {
          passive: !0
        }), bb.addEventListener("touchmove", kb, {
          passive: !1
        }), () => {
          bb.removeEventListener("touchstart", sb), bb.removeEventListener("touchmove", kb)
        }
      }), [rb]);
      const [ob, Sb] = (0, kb.useState)(!1), [Rb, vb] = (0, kb.useState)(!1), Fb = (0, kb.useRef)(ob), xb = (0, kb.useRef)(null), jb = (0, kb.useRef)(!1), pb = (0, kb.useRef)(null), bc = (0, kb.useRef)(null), cc = (0, kb.useRef)(null), sc = (0, kb.useRef)(Tc);
      sc.current = Tc;
      const kc = (0, tb.k)();

      function Wc() {
        Vb.current = !1, nb(!1), bc.current.blur()
      }

      function ac(bb) {
        Fb.current = bb, Sb(bb)
      }

      function Tc() {
        const bb = bc.current.value;
        bc.current.value = "", Uc(bb)
      }

      function Uc(bb) {
        (0, hb.h)(bb), db.current = 0, ac(!1)
      }

      function Ic(bb, cb) {
        0 === db.current && (Ab.current = bc.current.value);
        const sb = (0, hb.f)(db.current + bb, cb);
        db.current = sb.stepsBack, bc.current.value = 0 === sb.stepsBack ? Ab.current : sb.text, setTimeout((() => {
          bc.current && bc.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Hc() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wb.current && (!bb && Fb.current || (wb.current.scrollTop = 1e5))
      }
      return (0, Ub.d)(!0, ab, "ChatComponent"), (0, kb.useEffect)((() => (Gb = ab, () => {
          Gb = !1
        })), [ab]), (0, Hb.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, eb.r)() && nb(!1)
        })), (0, kb.useEffect)((() => {
          bc.current.addEventListener("blur", (bb => {
            if (null === bc.current) return;
            Array.from(document.querySelectorAll(":hover")).some((bb => bb.classList.contains("ChatInputChannel") || bb.classList.contains("ChatMsgSelectWrapper"))) || ((0, fb.isMobile)() && Vb.current && "" !== bc.current.value && sc.current(), nb(!1))
          }));
          const bb = bb => {
            Lb.current.contains(bb.target) || (0, Nb.j)(bb.target) || nb(!1)
          };
          document.addEventListener("touchstart", bb, {
            capture: !0
          });
          const cb = bb => {
            (0, gb.k)(bb.target) && (Vb.current = !1, nb(!1))
          };
          document.addEventListener("mousedown", cb, {
            capture: !0
          });
          const sb = () => {
              clearTimeout(xb.current), ac(!0)
            },
            kb = () => {
              clearTimeout(xb.current), xb.current = setTimeout((() => {
                ac(!1), Hc()
              }), 4e3)
            },
            ab = () => {
              document.pointerLockElement ? (nb(!1), vb(!0), jb.current = !1, ac(!1), Hc()) : vb(!1)
            };
          wb.current.addEventListener("pointermove", (bb => {
            "touch" === bb.pointerType || jb.current || document.pointerLockElement || (jb.current = !0, clearTimeout(xb.current))
          })), wb.current.addEventListener("pointerleave", (bb => {
            "touch" !== bb.pointerType && (jb.current = !1, Fb.current && kb())
          })), wb.current.addEventListener("pointerdown", (bb => {
            "touch" === bb.pointerType || document.pointerLockElement || (jb.current = !0, sb())
          })), wb.current.addEventListener("wheel", (bb => {
            document.pointerLockElement || bb.deltaY >= 0 && Math.abs(wb.current.scrollTop) < 1 || (sb(), jb.current || (xb.current = setTimeout((() => {
              ac(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), wb.current.addEventListener("touchstart", sb), wb.current.addEventListener("touchend", kb), wb.current.addEventListener("touchcancel", kb), document.addEventListener("pointerlockchange", ab);
          const Ub = bb => {
            if (kc.shown && (Vb.current || ! function(bb) {
                if ((0, Cb.isTypingInInput)()) return !0;
                const cb = document.activeElement;
                return (cb instanceof HTMLButtonElement || "button" === (null === cb || void 0 === cb ? void 0 : cb.getAttribute("role"))) && ["Enter", " "].includes(bb.key)
              }(bb)) && "codeEditor" !== lb.d.get("openInGameMenuName") && "lobbyCodeEditor" !== lb.d.get("openInGameMenuName") && !Wb.gameBridge.latest("connectedGame").replay)
              if (Vb.current || !(0, eb.r)()) {
                if (Vb.current) {
                  if ("ArrowUp" === bb.code || "ArrowDown" === bb.code) return Ic("ArrowUp" === bb.code ? 1 : -1, !1), void bb.stopPropagation();
                  if ("Tab" === bb.code) return hb.c.selectNextChannel(), bb.stopPropagation(), void bb.preventDefault();
                  if (bb.ctrlKey && qb.includes(ib[bb.keyCode])) return bb.preventDefault(), void bb.stopPropagation()
                }
                if ([...Ob, "esc"].includes(Tb()(bb)))
                  if ("esc" !== Tb()(bb)) {
                    if (!Vb.current || "/" !== Tb()(bb)) {
                      if ("t" === Tb()(bb)) {
                        if (Vb.current) return void bb.stopPropagation();
                        bb.preventDefault()
                      }
                      Vb.current && "" !== bc.current.value && sc.current(), bb.repeat || (Vb.current || "/" === Tb()(bb) && (bc.current.value = "/", bb.preventDefault()), nb(!Vb.current))
                    }
                  } else Vb.current && (nb(!1), bb.stopPropagation());
                else Vb.current && bb.stopPropagation()
              } else Ob.includes(Tb()(bb)) && (bb.preventDefault(), bb.stopPropagation(), (0, eb.c)(bb))
          };
          document.addEventListener("keydown", Ub, {
            capture: !0
          });
          const Ib = wb.current;
          let Hb = !1;
          const Mb = new ResizeObserver((() => {
              Hb && (Hb = !1, Hc())
            })),
            Xb = () => {
              Hb = !0, Mb.unobserve(Ib), Mb.observe(Ib)
            };
          pb.current = Xb;
          const mb = new MutationObserver(Xb);
          return mb.observe(Ib, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Ub, {
              capture: !0
            }), document.removeEventListener("touchstart", bb, {
              capture: !0
            }), document.removeEventListener("mousedown", cb, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", ab), pb.current = null, mb.disconnect(), Mb.disconnect(), clearTimeout(xb.current)
          }
        }), []), (0, Nb.m)(bc, {
          open: () => {
            nb(!0)
          },
          close: () => {
            Wc()
          },
          submit: () => {
            "" !== bc.current.value && Tc(), Wc()
          },
          stepHistory: () => {
            Ic(1, !0)
          },
          sendLine: bb => {
            Uc(bb), Wc()
          },
          selectNextChannel: () => {
            hb.c.selectNextChannel()
          }
        }), (0, kb.useEffect)((() => {
          var bb;
          (Vb.current = ab, bc.current) && (ab ? (db.current = 0, bc.current.focus()) : (bc.current.blur(), null === (bb = pb.current) || void 0 === bb || bb.call(pb)))
        }), [ab]),
        function(bb, cb) {
          (0, kb.useLayoutEffect)((() => {
            if (!cb) return;
            Db.b.hold();
            const sb = bb.current.closest(".InGameHeaderAndChat"),
              kb = window.visualViewport;
            let Wb = "";
            const ab = () => {
              const bb = `${kb.offsetTop+kb.height}px`;
              bb !== Wb && (Wb = bb, sb.style.setProperty("--keyboard-top", bb))
            };
            return ab(), kb.addEventListener("resize", ab), kb.addEventListener("scroll", ab), () => {
              kb.removeEventListener("resize", ab), kb.removeEventListener("scroll", ab), sb.style.removeProperty("--keyboard-top"), Db.b.release()
            }
          }), [bb, cb])
        }(Lb, ab && cb), (0, Eb.jsx)(Eb.Fragment, {
          children: (0, Eb.jsxs)("div", {
            ref: Lb,
            className: mb()("Chat", {
              Chatting: ab
            }),
            "data-camera-keeper": ab ? "" : void 0,
            children: [(0, Eb.jsx)("div", {
              ref: wb,
              className: mb()("ChatMessages", {
                HideScrollbar: !ob && !ab,
                NoScrolling: !(0, fb.isMobile)() && Rb
              }),
              children: (0, Eb.jsx)(Jb.b, {
                messages: ub,
                reportedPlayers: Kb
              })
            }), cb && !ab && (0, Eb.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": bb("general:chat"),
              ...(0, Bb.f)((() => {
                nb(!0), cc.current.style.display = "flex", (0, fb.isIOS)() && bc.current.focus()
              }), "pointerup"),
              children: (0, Eb.jsx)(Qb.b, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, Eb.jsxs)("div", {
              ref: cc,
              className: "ChatInputWrapper",
              style: {
                display: "" + (ab ? "flex" : "none")
              },
              children: [zb && (0, Eb.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: zb.elementBgColor
                },
                onClick: bb => {
                  hb.c.selectNextChannel(), bc.current.focus()
                },
                children: (0, Eb.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, Eb.jsx)(Ib.d, {
                    text: zb.elementContent
                  })
                })
              }), zb && sb && (0, Eb.jsx)(Zb, {}), (0, Eb.jsx)("input", {
                className: "ChatInput",
                maxLength: Xb.dd,
                ref: bc,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": bb("general:chat"),
                placeholder: zb ? `${zb.channelName} Chat${"touchOnly"===(0,Mb.c)()||sb?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const qb = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36203: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => hb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(8396),
      Ub = sb(26),
      Ib = sb(2284),
      Hb = sb(3379),
      fb = sb(1960),
      Mb = sb(19),
      Xb = sb(1839),
      nb = sb(36206),
      mb = sb(2084),
      lb = sb(36210),
      Qb = sb(2469),
      eb = sb(2453),
      Cb = sb(2445),
      Nb = sb(3392),
      Vb = sb(2867),
      Lb = sb(1912),
      ub = sb(1087);

    function Yb(bb) {
      for (let sb = bb.length - 1; sb >= 0; sb--) {
        const kb = "string" === typeof(cb = bb[sb]) ? cb : "str" in cb && "string" === typeof cb.str ? cb.str : "";
        if ("" !== kb.trim()) return kb
      }
      var cb;
      return ""
    }

    function hb(bb) {
      let {
        messages: cb,
        reportedPlayers: sb
      } = bb;
      return (0, ub.jsx)(ub.Fragment, {
        children: cb.map((bb => (0, ub.jsx)(Jb, {
          message: bb,
          reportedPlayers: sb
        }, bb.clientChatMsgId)))
      })
    }
    const Jb = (0, kb.memo)((function(bb) {
      var cb;
      let {
        message: sb,
        reportedPlayers: Wb
      } = bb;
      const hb = (0, kb.useRef)(null),
        [Jb] = (0, kb.useState)(Vb.j),
        {
          author: gb
        } = sb,
        Bb = null === gb || void 0 === gb ? void 0 : gb.id,
        tb = null !== (cb = null === gb || void 0 === gb ? void 0 : gb.name) && void 0 !== cb ? cb : void 0,
        yb = (0, fb.e)(tb),
        Pb = null !== gb && void 0 !== gb && gb.profileEffect ? mb.h[gb.profileEffect] : void 0,
        Db = null !== gb && !gb.local,
        Eb = null === gb && null !== sb.serverChatMsgId,
        ib = (0, Lb.e)("hiddenPlayerNames", (bb => (0, lb.h)(Db, tb, bb))),
        Ob = null === sb.serverChatMsgId || null === gb ? null : {
          text: Yb(sb.content),
          serverChatMsgId: sb.serverChatMsgId,
          authorId: gb.id
        },
        Gb = Eb || null !== Ob && !Wb.includes(Bb),
        Kb = (0, Hb.g)(Db && null !== tb && void 0 !== tb ? tb : null),
        Zb = (0, Cb.j)(hb);
      (0, kb.useEffect)((() => () => {
        Cb.d.closeIfOwner(hb)
      }), []);
      const zb = () => {
          Eb ? Ub.j.QQ("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            jT: (0, Tb.b)(sb.content),
            serverChatMsgId: sb.serverChatMsgId
          }) : null !== Ob ? Ub.j.QQ("OpenReportMenu", {
            playerEId: Bb,
            playerName: tb,
            jT: Ob.text,
            serverChatMsgId: Ob.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        qb = void 0 === tb ? [] : (0, Nb.e)(Kb, tb, Ob);
      return (0, ub.jsxs)("div", {
        ref: hb,
        className: ab()("MessageWrapper", {
          ChatMsgSelectWrapper: Bb,
          Still: Jb
        }),
        onContextMenu: ib ? bb => {
          (0, Qb.g)(hb, bb, {
            ...(0, lb.d)(Bb, tb),
            showLocation: !1,
            status: null,
            extraActions: Gb ? [{
              icon: "flag",
              text: "Report",
              onClick: zb
            }] : [],
            friendRequestSource: "chat"
          }, Mb.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: ib ? bb => {
          (0, eb.e)(bb, (() => (0, lb.d)(Bb, tb).playerSocialPreview))
        } : void 0,
        children: [Pb && (0, ub.jsx)(Pb, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Db || Eb) && !Zb && (0, ub.jsx)(nb.c, {
          className: "ChatFloatingActions",
          triggerElementRef: hb,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: zb,
            show: Gb
          }, ...qb, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: bb => {
              (0, Ib.o)(tb, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: ib && "blocked" !== Kb
          }]
        }), (0, ub.jsx)(Xb.d, {
          text: sb.content,
          friendBadgeFor: yb ? tb : void 0
        }, sb.clientChatMsgId)]
      }, sb.clientChatMsgId)
    }))
  },
  36235: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => nb,
      e: () => mb,
      i: () => Xb,
      j: () => Mb
    });
    var kb = sb(8917),
      Wb = sb(36240),
      ab = sb(36247),
      Tb = sb(8330),
      Ub = sb(1423),
      Ib = sb(64),
      Hb = sb(89),
      fb = sb(1087);

    function Mb() {
      var bb;
      return (0, Ub.h)(Wb.c, (0, Wb.l)()), (0, fb.jsx)(fb.Fragment, {
        children: null === (bb = (0, Wb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Xb(bb) {
      var cb;
      let {
        show: sb
      } = bb;
      (0, Ub.h)(Wb.c, (0, Wb.l)());
      const Hb = null === (cb = (0, Wb.l)()) || void 0 === cb ? void 0 : cb.menu;
      return (0, Ib.useEffect)((() => {
        var bb;
        sb || (null === Hb || void 0 === Hb || null === (bb = Hb.onClose) || void 0 === bb || bb.call(Hb), (0, ab.o)())
      }), [sb, Hb]), (0, Ib.useEffect)((() => sb ? (0, Tb.e)(ab.v, ab.g) : void 0), [sb]), (0, fb.jsx)(kb.b, {
        showing: sb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hb || void 0 === Hb ? void 0 : Hb.content
      })
    }

    function nb(bb) {
      let {
        placement: cb = "bottom"
      } = bb;
      return (0, fb.jsx)("div", {
        id: `clientGameHud-${cb}`,
        style: {
          display: "contents"
        }
      })
    }

    function mb(bb) {
      let {
        children: cb,
        placement: sb = "bottom"
      } = bb;
      const [kb, Wb] = (0, Ib.useState)(null);
      return (0, Ib.useEffect)((() => {
        Wb(document.getElementById(`clientGameHud-${sb}`))
      }), [sb]), kb ? (0, Hb.createPortal)(cb, kb) : null
    }
  },
  36460: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb,
      e: () => fb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1431),
      Ub = sb(1087);
    const Ib = 200,
      Hb = 160;

    function fb() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Mb(bb) {
      let {
        side: cb,
        defaultSize: sb,
        covers: Wb,
        onClose: fb,
        children: Mb
      } = bb;
      const Xb = (0, kb.useRef)(null),
        [nb, mb] = (0, kb.useState)(null),
        [lb, Qb] = (0, kb.useState)(sb);
      lb !== sb && (Qb(sb), mb(null));
      const eb = (0, kb.useRef)(null),
        Cb = "top" === cb,
        Nb = bb => Cb ? bb.clientY : bb.clientX,
        Vb = () => {
          eb.current = null
        };
      return (0, Ub.jsxs)("div", {
        ref: Xb,
        className: ab()("ResizableSidePanel", cb && `ResizableSidePanel-${cb}`, {
          Covers: "always" === Wb,
          CoversWhenNarrow: "narrow" === Wb,
          Dragged: null !== nb
        }),
        style: {
          [Cb ? "height" : "width"]: null !== nb && void 0 !== nb ? nb : sb
        },
        children: [Mb, cb && (0, Ub.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Cb ? "horizontal" : "vertical",
          onPointerDown: bb => {
            if (0 !== bb.button) return;
            bb.preventDefault();
            const cb = Xb.current,
              sb = Array.from(cb.parentElement.children).reduce(((bb, sb) => sb !== cb && "0" !== getComputedStyle(sb).flexGrow ? bb + (bb => Cb ? bb.clientHeight : bb.clientWidth)(sb) : bb), 0),
              kb = Cb ? cb.offsetHeight : cb.offsetWidth,
              Wb = Math.min(Ib, kb),
              ab = Math.max(Wb, kb + Math.max(0, sb - Hb));
            eb.current = {
              start: Nb(bb),
              startSize: kb,
              minSize: Wb,
              maxSize: ab
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const sb = eb.current;
            if (!sb) return;
            const kb = "right" === cb ? sb.start - bb.clientX : Nb(bb) - sb.start;
            mb(Math.min(sb.maxSize, Math.max(sb.minSize, sb.startSize + kb)))
          },
          onPointerUp: Vb,
          onPointerCancel: Vb,
          onLostPointerCapture: Vb
        }), fb && (0, Ub.jsx)(Tb.j, {
          className: "ResizableSidePanelClose",
          onClick: fb
        })]
      })
    }
  },
  36486: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => hb,
      D: () => Wb,
      F: () => Yb,
      b: () => Nb,
      e: () => Qb,
      h: () => mb,
      j: () => nb,
      m: () => Cb,
      q: () => Jb,
      u: () => Vb,
      w: () => ub,
      y: () => Lb
    });
    var kb = sb(64);
    const Wb = 5e3,
      ab = 500,
      Tb = 3e3;
    let Ub = null,
      Ib = null,
      Hb = null;
    const fb = new Set;

    function Mb(bb) {
      Ub = bb;
      for (const cb of fb) cb()
    }

    function Xb() {
      if (!Ub || void 0 !== Ub.endedAt) return;
      null !== Ib && (clearTimeout(Ib), Ib = null), Mb({
        ...Ub,
        endedAt: Date.now()
      });
      const bb = Hb;
      Hb = null, null === bb || void 0 === bb || bb()
    }

    function nb(bb, cb) {
      let {
        submit: sb,
        reopen: kb
      } = cb;
      null !== Ib && clearTimeout(Ib), Hb = kb, Mb({
        ...bb,
        startedAt: Date.now(),
        errors: []
      }), Ib = setTimeout(Xb, Tb), sb()
    }

    function mb() {
      Ub && void 0 === Ub.endedAt && void 0 === Ub.ranAt && (null !== Ib && clearTimeout(Ib), Mb({
        ...Ub,
        ranAt: Date.now()
      }), Ib = setTimeout(Xb, Wb))
    }
    const lb = 3;

    function Qb(bb) {
      if (!Ub || void 0 === Ub.ranAt || void 0 !== Ub.endedAt || Ub.errors.includes(bb) || Ub.errors.length >= lb) return;
      const cb = 0 === Ub.errors.length;
      Mb({
        ...Ub,
        errors: [...Ub.errors, bb]
      }), cb && (null !== Ib && clearTimeout(Ib), Ib = setTimeout(Xb, ab))
    }

    function eb(bb) {
      var cb;
      return (null === (cb = Ub) || void 0 === cb ? void 0 : cb.chatKey) === bb ? Ub : null
    }

    function Cb(bb) {
      const cb = eb(bb);
      return cb && void 0 !== cb.endedAt ? (Mb(null), cb) : null
    }

    function Nb(bb) {
      var cb;
      (null === (cb = Ub) || void 0 === cb ? void 0 : cb.chatKey) === bb && (null !== Ib && (clearTimeout(Ib), Ib = null), Hb = null, Mb(null))
    }
    const Vb = "These changes from your last answer didn't go in. Make them again.";

    function Lb(bb) {
      const cb = [...new Set(bb)].slice(0, lb);
      return `Fix this in your change: when it ran, the world showed ${1===cb.length?"this error":"these errors"}: ${cb.join(" ")}`
    }

    function ub(bb) {
      return `Your change didn't go in, because the code wouldn't run at all: ${bb.join(" ")} Send the whole change again with that fixed.`
    }

    function Yb(bb) {
      return `Fix this in your change: ${bb.join(" ")}`
    }

    function hb(bb) {
      var cb;
      if (void 0 === bb.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const sb = Math.max(1, Math.round(((null !== (cb = bb.endedAt) && void 0 !== cb ? cb : bb.ranAt) - bb.ranAt) / 1e3)),
        kb = `Your change ran in your world for ${sb} ${1===sb?"second":"seconds"}`;
      return 0 === bb.errors.length ? {
        title: "Tested: no errors",
        text: `${kb} without an error.`
      } : {
        title: 1 === bb.errors.length ? "Tested: it showed an error" : `Tested: it showed ${bb.errors.length} errors`,
        text: `${kb} and showed: ${bb.errors.join(" ")}`
      }
    }

    function Jb(bb) {
      const [cb, sb] = (0, kb.useState)((() => eb(bb)));
      return (0, kb.useEffect)((() => {
        const cb = () => {
          sb(eb(bb))
        };
        return cb(), fb.add(cb), () => {
          fb.delete(cb)
        }
      }), [bb]), cb
    }
  },
  36494: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => kb
    });
    const kb = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Wb(bb, cb, sb) {
      return {
        key: bb,
        label: `Code block at ${cb.join(", ")}`,
        codeBlock: !0,
        pos: cb,
        canChangePos: sb
      }
    }
  },
  36479: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      e: () => ab,
      g: () => Tb,
      j: () => Wb
    });
    const kb = "code block",
      Wb = "World Code/";

    function ab(bb) {
      return bb.trim().toLowerCase().startsWith(Wb.toLowerCase())
    }

    function Tb(bb) {
      return bb.trim().slice(Wb.length).replace(/^\.?\//, "")
    }
  },
  36445: (bb, cb, sb) => {
    sb.d(cb, {
      C: () => Vb,
      D: () => tb,
      F: () => gb,
      G: () => Xb,
      H: () => Eb,
      K: () => hb,
      O: () => Jb,
      R: () => Db,
      e: () => mb,
      h: () => Ib,
      l: () => lb,
      p: () => Bb,
      r: () => Ub,
      u: () => fb,
      w: () => nb,
      z: () => Qb
    });
    var kb = sb(36434),
      Wb = sb(36440);
    const ab = "bloxd-world-code-directory-sync",
      Tb = "handles",
      Ub = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Ib(bb, cb) {
      return `${bb}::${cb}`
    }
    const Hb = new Set(["node_modules", ".git"]);

    function fb() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Mb() {
      return new Promise(((bb, cb) => {
        const sb = indexedDB.open(ab, 1);
        sb.onupgradeneeded = () => {
          const bb = sb.result;
          bb.objectStoreNames.contains(Tb) || bb.createObjectStore(Tb)
        }, sb.onsuccess = () => {
          bb(sb.result)
        }, sb.onerror = () => {
          var bb;
          cb(null !== (bb = sb.error) && void 0 !== bb ? bb : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Xb(bb, cb) {
      const sb = await Mb();
      try {
        await new Promise(((kb, Wb) => {
          const ab = sb.transaction(Tb, "readwrite");
          ab.objectStore(Tb).put(cb, bb), ab.oncomplete = () => {
            kb()
          }, ab.onerror = () => {
            var bb;
            Wb(null !== (bb = ab.error) && void 0 !== bb ? bb : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        sb.close()
      }
    }
    async function nb(bb) {
      const cb = await Mb();
      try {
        return await new Promise(((sb, kb) => {
          const Wb = cb.transaction(Tb, "readonly").objectStore(Tb).get(bb);
          Wb.onsuccess = () => {
            var bb;
            sb(null !== (bb = Wb.result) && void 0 !== bb ? bb : null)
          }, Wb.onerror = () => {
            var bb;
            kb(null !== (bb = Wb.error) && void 0 !== bb ? bb : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        cb.close()
      }
    }
    async function mb(bb) {
      const cb = await Mb();
      try {
        await new Promise(((sb, kb) => {
          const Wb = cb.transaction(Tb, "readwrite");
          Wb.objectStore(Tb).delete(bb), Wb.oncomplete = () => {
            sb()
          }, Wb.onerror = () => {
            var bb;
            kb(null !== (bb = Wb.error) && void 0 !== bb ? bb : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        cb.close()
      }
    }
    async function lb(bb) {
      const cb = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await bb.queryPermission(cb) || "granted" === await bb.requestPermission(cb)
    }
    async function Qb(bb) {
      if (!fb()) return null;
      try {
        const cb = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Xb(bb, cb), cb
      } catch (cb) {
        if (function(bb) {
            return bb instanceof DOMException && "AbortError" === bb.name
          }(cb)) return null;
        throw cb
      }
    }

    function eb(bb) {
      return bb.startsWith(".") || Hb.has(bb)
    }

    function Cb(bb) {
      if (!bb) return !0;
      const cb = bb.split("/");
      for (const sb of cb)
        if ("" === sb || "." === sb || ".." === sb) return !1;
      return !0
    }
    async function Nb(bb, cb, sb) {
      for await (const [ab, Tb] of bb.entries()) {
        if ("directory" === Tb.kind) {
          if (eb(ab)) continue;
          const bb = cb ? `${cb}/${ab}` : ab;
          if (!Cb(bb)) continue;
          await Nb(Tb, bb, sb);
          continue
        }
        const bb = cb ? `${cb}/${ab}` : ab;
        if (!(0, kb.r)(bb) && !(0, Wb.c)(bb)) continue;
        const Ub = await Tb.getFile();
        sb[bb] = (0, Wb.c)(bb) ? await yb(Ub) : await Ub.text()
      }
    }
    async function Vb(bb) {
      const cb = {};
      return await Nb(bb, "", cb), cb
    }

    function Lb(bb) {
      return !(!bb || bb !== bb.trim() || bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) && Cb(bb)
    }
    async function ub(bb, cb, sb) {
      const kb = cb.split("/"),
        Wb = kb[kb.length - 1];
      let ab = bb;
      for (let Tb = 0; Tb < kb.length - 1; Tb++) ab = await ab.getDirectoryHandle(kb[Tb], {
        create: sb
      });
      return {
        dir: ab,
        fileName: Wb
      }
    }
    async function Yb(bb, cb, sb) {
      if (!Lb(cb)) throw new Error(`Refusing to write unsafe path: ${cb}`);
      const {
        dir: kb,
        fileName: Wb
      } = await ub(bb, cb, !0), ab = await kb.getFileHandle(Wb, {
        create: !0
      }), Tb = await ab.createWritable();
      await Tb.write(sb), await Tb.close()
    }
    async function hb(bb, cb, sb) {
      const kb = await async function(bb, cb) {
        if (!Lb(cb)) return null;
        try {
          const {
            dir: sb,
            fileName: kb
          } = await ub(bb, cb, !1), Wb = await sb.getFileHandle(kb), ab = await Wb.getFile();
          return await ab.text()
        } catch (sb) {
          if (sb instanceof DOMException && ("NotFoundError" === sb.name || "NotAllowedError" === sb.name)) return null;
          throw sb
        }
      }(bb, cb);
      kb !== sb && await Yb(bb, cb, sb)
    }
    async function Jb(bb, cb, sb) {
      if (!(0, kb.r)(cb) && !(0, Wb.c)(cb)) throw new Error(`Refusing to write non-allowlisted path: ${cb}`);
      if ((0, Wb.c)(cb)) {
        if (await Pb(bb, cb) === Ub) throw new Error(`Move the binary schematic ${cb} outside the linked folder before syncing its placeholder`)
      }
      await Yb(bb, cb, sb)
    }
    async function gb(bb, cb) {
      if (!Lb(cb)) throw new Error(`Refusing to remove unsafe path: ${cb}`);
      try {
        const {
          dir: sb,
          fileName: kb
        } = await ub(bb, cb, !1);
        await sb.removeEntry(kb)
      } catch (sb) {
        if (sb instanceof DOMException && ("NotFoundError" === sb.name || "NotAllowedError" === sb.name)) return;
        throw sb
      }
    }
    async function Bb(bb, cb) {
      if (!Lb(cb)) return null;
      try {
        const sb = cb.split("/");
        let kb = bb;
        for (const bb of sb) kb = await kb.getDirectoryHandle(bb);
        return kb
      } catch (sb) {
        if (sb instanceof DOMException && ("NotFoundError" === sb.name || "NotAllowedError" === sb.name)) return null;
        throw sb
      }
    }
    async function tb(bb, cb) {
      if ((0, kb.r)(cb) || (0, Wb.c)(cb)) {
        if ((0, Wb.c)(cb)) {
          if (await Pb(bb, cb) === Ub) throw new Error(`Refusing to remove a binary schematic: ${cb}`)
        }
        await gb(bb, cb)
      }
    }
    async function yb(bb) {
      if (bb.size > 64) return Ub;
      const cb = await bb.text();
      return Array.from(cb).some((bb => {
        const cb = bb.charCodeAt(0);
        return cb < 9 || cb > 13 && cb < 32 || 65533 === cb
      })) ? Ub : cb
    }
    async function Pb(bb, cb) {
      try {
        const {
          dir: sb,
          fileName: kb
        } = await ub(bb, cb, !1);
        return await yb(await (await sb.getFileHandle(kb)).getFile())
      } catch (sb) {
        if (sb instanceof DOMException && "NotFoundError" === sb.name) return null;
        throw sb
      }
    }
    async function Db(bb, cb) {
      const sb = await Vb(bb);
      for (const kb of Object.keys(sb)) kb in cb || (0, Wb.c)(kb) || await tb(bb, kb);
      for (const [ab, Tb] of Object.entries(cb))((0, kb.r)(ab) || (0, Wb.c)(ab)) && await Jb(bb, ab, Tb)
    }

    function Eb(bb, cb) {
      var sb, kb;
      let Wb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ab = null !== (sb = Wb.debounceMs) && void 0 !== sb ? sb : 300,
        Tb = null !== (kb = Wb.pollMs) && void 0 !== kb ? kb : 1e3;
      let Ub = !1,
        Ib = null,
        Hb = null,
        fb = null;
      const Mb = () => {
          Ub || (Ib && clearTimeout(Ib), Ib = setTimeout((() => {
            Ib = null, Xb()
          }), ab))
        },
        Xb = async () => {
          if (!Ub) try {
            if (!await lb(bb, "readwrite")) return;
            const sb = await Vb(bb);
            Ub || cb(sb)
          } catch (sb) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", sb)
          }
        };
      Xb();
      const nb = window.FileSystemObserver;
      if (nb) try {
        fb = new nb((() => {
          Mb()
        })), fb.observe(bb, {
          recursive: !0
        })
      } catch (mb) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", mb), fb = null
      }
      return fb || (Hb = setInterval((() => {
        Mb()
      }), Tb)), () => {
        Ub = !0, Ib && clearTimeout(Ib), Hb && clearInterval(Hb), fb && fb.disconnect()
      }
    }
  },
  4553: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Qb,
      e: () => eb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(1197),
      Ub = sb(4556),
      Ib = sb(1839),
      Hb = sb(2337),
      fb = sb(4561),
      Mb = sb(1087);
    const Xb = new WeakMap;
    let nb = 0;

    function mb(bb) {
      let cb = Xb.get(bb);
      return void 0 === cb && (cb = nb++, Xb.set(bb, cb)), cb
    }

    function lb(bb) {
      let {
        piece: cb
      } = bb;
      return "space" === cb.kind ? (0, Mb.jsx)(Mb.Fragment, {
        children: cb.text
      }) : (0, Mb.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${cb.delayMs}ms`
        },
        children: (0, Mb.jsx)(Ub.b, {
          text: "icon" === cb.kind ? `[[${cb.icon}]]` : cb.text
        })
      })
    }

    function Qb(bb) {
      let {
        display: cb
      } = bb;
      const {
        selectedLanguage: sb
      } = (0, Tb.E)(), kb = (0, ab.useMemo)((() => (0, fb.e)((0, fb.h)(cb).plan.pieces)), [cb, sb.code]);
      return (0, Mb.jsxs)("div", {
        className: Wb()("Dialogue", {
          DialogueAnimateIn: !1 !== cb.animateIn
        }),
        children: [cb.speakerName && (0, Mb.jsx)(Ib.d, {
          text: cb.speakerName,
          className: "DialogueSpeaker"
        }), (0, Mb.jsx)("p", {
          className: "DialogueLine",
          children: kb.map(((bb, cb) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Mb.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, cb) => (0, Mb.jsx)(lb, {
              piece: bb
            }, cb)))
          }, cb)))
        })]
      })
    }
    const eb = (0, ab.memo)((function() {
      const bb = (0, Hb.d)("dialogue");
      return (0, Mb.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Mb.jsx)(Qb, {
          display: bb
        }, mb(bb))
      })
    }))
  },
  36323: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => nb,
      d: () => mb
    });
    var kb = sb(64),
      Wb = sb(2749),
      ab = sb(1423),
      Tb = sb(1912),
      Ub = sb(36263),
      Ib = sb(628),
      Hb = sb(1033),
      fb = sb.n(Hb),
      Mb = sb(1087);
    const Xb = {},
      nb = (0, kb.memo)((function() {
        const bb = (0, Wb.b)();
        return (0, ab.f)("damagedByOtherPlayer", (cb => {
          let {
            Vk: sb,
            direction: kb
          } = cb;
          const Wb = sb || "nonDirectional";
          if (Xb[Wb]) {
            const cb = Xb[Wb];
            clearTimeout(cb.timeout), cb.direction = kb, cb.timeout = setTimeout((() => {
              delete Xb[Wb], bb()
            }), 800)
          } else Xb[Wb] = {
            direction: kb,
            Wy: null,
            timeout: setTimeout((() => {
              delete Xb[Wb], bb()
            }), 800)
          };
          bb()
        })), (0, Tb.c)("kill", (cb => {
          let {
            killer: sb,
            victim: kb
          } = cb;
          const Wb = kb.id;
          sb.local && Wb && Wb in Xb && (clearTimeout(Xb[Wb].timeout), delete Xb[Wb], bb())
        })), (0, kb.useEffect)((() => {
          const bb = (0, Ub.i)("turnDamageIndicators", mb);
          return () => {
            bb();
            for (const bb in Xb) clearTimeout(Xb[bb].timeout), delete Xb[bb]
          }
        }), []), (0, Mb.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Xb).map((bb => {
            let [cb, sb] = bb;
            const kb = (0, Ib.L)(sb.direction);
            return (0, Mb.jsx)("div", {
              ref: bb => {
                Xb[cb] && (Xb[cb].Wy = bb)
              },
              className: fb()("DamageIndicator", {
                DamageIndicatorFullCircle: kb
              })
            }, cb)
          }))
        })
      }));

    function mb(bb) {
      for (const cb in Xb) {
        const {
          direction: sb,
          Wy: kb
        } = Xb[cb];
        if ((0, Ib.L)(sb)) continue;
        const Wb = sb - bb;
        kb.style.rotate = `${Wb}rad`
      }
    }
  },
  36206: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Qb
    });
    var kb = sb(64),
      Wb = sb(89),
      ab = sb(1197),
      Tb = sb(1033),
      Ub = sb.n(Tb),
      Ib = sb(1704),
      Hb = sb(1039),
      fb = sb(1278),
      Mb = sb(1454),
      Xb = sb(1651),
      nb = sb(1448),
      mb = sb(1087);
    const lb = 14;

    function Qb(bb) {
      let {
        className: cb,
        triggerElementRef: sb,
        options: Tb
      } = bb;
      const {
        t: Qb
      } = (0, ab.E)(), [eb, Cb] = (0, kb.useState)(!1), [Nb, Vb] = (0, kb.useState)({
        x: 0,
        y: 0
      }), Lb = (0, kb.useRef)(null);
      (0, kb.useEffect)((() => {
        let bb = null;
        const cb = cb => {
            bb = {
              x: cb.clientX,
              y: cb.clientY
            }
          },
          kb = cb => {
            if (null === bb || !(0, nb.b)(bb, cb)) return;
            bb = null;
            const sb = lb * (0, Ib.getRemInPx)();
            Vb({
              x: Math.min(cb.clientX, window.innerWidth - sb - 5),
              y: cb.clientY
            }), Cb((bb => !bb))
          },
          Wb = bb => {
            var cb;
            null !== (cb = Lb.current) && void 0 !== cb && cb.contains(bb.relatedTarget) || Cb(!1)
          },
          ab = sb.current;
        return ab.addEventListener("pointerdown", cb), ab.addEventListener("pointerup", kb), ab.addEventListener("mouseleave", Wb), () => {
          ab.removeEventListener("pointerdown", cb), ab.removeEventListener("pointerup", kb), ab.removeEventListener("mouseleave", Wb)
        }
      }), [sb]), (0, kb.useEffect)((() => {
        if (eb) return (0, Xb.e)("pointerdown", (bb => {
          !Lb.current || Lb.current.contains(bb.target) || sb.current.contains(bb.target) || Cb(!1)
        }))
      }), [eb, sb]), (0, kb.useLayoutEffect)((() => {
        if (!eb || !Lb.current) return;
        const bb = Lb.current.getBoundingClientRect().height,
          cb = Math.max(5, window.innerHeight - bb - 5);
        Nb.y > cb && Vb({
          x: Nb.x,
          y: cb
        })
      }), [eb, Nb]), (0, fb.o)("popup", Lb, (() => {
        Cb(!1)
      }), eb);
      const ub = Tb.filter((bb => !1 !== bb.show));
      return eb && 0 !== ub.length ? (0, Wb.createPortal)((0, mb.jsx)("div", {
        ref: Lb,
        className: Ub()("FloatingActions", {
          [cb]: cb
        }),
        style: {
          width: `${lb}rem`,
          top: Nb.y,
          left: Nb.x
        },
        children: ub.map((bb => {
          let {
            icon: cb,
            text: sb,
            onPointerDown: kb,
            analyticsClick: Wb
          } = bb;
          return (0, mb.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: bb => {
              void 0 !== Wb && (0, Mb.reportAnalyticsClick)(Wb), kb(bb), Cb(!1), bb.stopPropagation()
            },
            children: [(0, mb.jsx)(Hb.b, {
              name: cb
            }), (0, mb.jsx)("div", {
              children: Qb(sb)
            })]
          }, sb)
        }))
      }), function() {
        var bb;
        return null !== (bb = document.querySelector(".WholeAppWrapperInner")) && void 0 !== bb ? bb : document.body
      }()) : null
    }
  },
  36337: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => QT
    });
    var kb = sb(36235),
      Wb = sb(64),
      ab = sb(2001),
      Tb = sb(4270),
      Ub = sb(4275),
      Ib = sb(2337),
      Hb = sb(1870),
      fb = sb(1087);

    function Mb(bb) {
      let {
        className: cb,
        style: sb,
        vw: kb,
        maxPx: Wb,
        children: ab
      } = bb;
      console.assert("number" === typeof kb && "number" === typeof Wb, "vw and maxPx passed to Text must be numbers");
      const Tb = window.innerWidth * (kb / 100) > Wb ? `${Wb}px` : `${kb}vw`;
      return (0, fb.jsx)("div", {
        className: cb,
        style: {
          ...sb,
          fontSize: Tb
        },
        children: ab
      })
    }
    var Xb = sb(36344),
      nb = sb(1431),
      mb = sb(26),
      lb = sb(1895),
      Qb = sb(1039);

    function eb(bb) {
      let {
        tasks: cb,
        lastDisplayedTasks: sb
      } = bb;
      return (0, fb.jsx)(fb.Fragment, {
        children: Object.keys(cb).map((bb => (0, fb.jsx)(Cb, {
          task: cb[bb],
          lastDisplayedAs: sb[bb]
        }, cb[bb].text)))
      })
    }

    function Cb(bb) {
      let {
        task: cb,
        lastDisplayedAs: sb
      } = bb;
      const [kb, ab] = (0, Wb.useState)(null !== sb && void 0 !== sb && sb.progress ? sb.progress / cb.goal : 0), [Tb, Ub] = (0, Wb.useState)(!1), [Ib, Hb] = (0, Wb.useState)(cb.claimed || !1);
      return (0, Wb.useEffect)((() => {
        ab(cb.progress / cb.goal)
      }), [cb.progress, cb.goal]), Ib ? null : (0, fb.jsxs)("div", {
        className: "Task",
        children: [(0, fb.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, fb.jsx)(Mb, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: cb.text
          })
        }), cb.progress < cb.goal ? (0, fb.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== kb ? (0, fb.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * kb + "%"
            }
          }) : null, (0, fb.jsx)("div", {
            className: "TaskProgressText",
            children: `${cb.progress}/${cb.goal}`
          })]
        }) : (0, fb.jsx)(nb.n, {
          className: "ClaimRewardButton",
          onClick: () => {
            Ub(!0)
          },
          children: (0, fb.jsx)(Mb, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Tb ? (0, fb.jsx)(Nb, {
          task: cb,
          close: () => {
            cb.claimed = !0, Hb(!0), Ub(!1)
          }
        }) : null]
      })
    }

    function Nb(bb) {
      let {
        task: cb,
        close: sb
      } = bb;
      const [kb, ab] = (0, Wb.useState)({}), [Tb, Ub] = (0, Wb.useState)("closed");
      (0, Wb.useEffect)((() => {
        let bb;
        return "animStart" === Tb && (bb = setTimeout((() => {
          Ub("animEnd")
        }), 700)), () => {
          clearTimeout(bb)
        }
      }), [Tb]), (0, Xb.e)((() => {
        Hb.gameBridge.send("completeTask", cb.text)
      }));
      const Mb = (0, Ib.d)("currencyAmounts");
      return (0, fb.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Tb)
            if (0 === cb.rewards.length) sb(), Hb.gameBridge.send("completeTask", cb.text);
            else {
              const bb = {
                ...lb.e.get("currencyAmounts")
              };
              for (const cb in kb) bb[cb] = {
                ...bb[cb],
                amount: bb[cb].amount + kb[cb]
              };
              lb.e.apply({
                currencyAmounts: bb
              }), Ub("closed")
            }
          else "closed" === Tb && (ab(cb.rewards.pop()), Ub("animStart"))
        },
        children: [(0, fb.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Tb ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Tb?"open":"closed"}.png`
        }), (0, fb.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Tb ? Object.keys(kb).map((bb => {
            const cb = null === Mb || void 0 === Mb ? void 0 : Mb[bb];
            return !cb || cb.hidden ? null : (0, fb.jsxs)("div", {
              className: "Reward",
              children: [(0, fb.jsx)(Qb.b, {
                name: cb.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: cb.iconColour
                }
              }), (0, fb.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Tb ? 0 : kb[bb]
              })]
            }, bb)
          })) : null
        }), "animStart" === Tb ? (0, fb.jsx)(Vb, {}) : null, (0, fb.jsx)("div", {
          className: "ChestsLeft",
          children: cb.rewards.length
        })]
      })
    }

    function Vb() {
      const [bb, cb] = (0, Wb.useState)(0);
      (0, Wb.useEffect)((() => {
        cb(1)
      }), []);
      return (0, fb.jsx)(fb.Fragment, {
        children: Array.from({
          length: 40
        }).map(((cb, sb) => (0, fb.jsx)(Qb.b, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * bb * Math.cos(sb / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * bb * Math.sin(sb / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === bb ? 1 : 0
          }
        }, sb)))
      })
    }
    mb.j.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const bb = new Image,
          cb = new Image;
        bb.src = "/textures/miscImages/Treasure Chest open.png", cb.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Lb = sb(2889),
      ub = sb(1117),
      Yb = sb(1839),
      hb = sb(1423),
      Jb = sb(344),
      gb = sb(1912),
      Bb = sb(1327);

    function tb(bb) {
      var cb, sb;
      let {
        byId: kb,
        localId: Wb
      } = bb;
      return null === Wb ? null : null !== (cb = null === (sb = kb[Wb]) || void 0 === sb ? void 0 : sb.name) && void 0 !== cb ? cb : null
    }

    function yb(bb) {
      let {
        lbStats: cb,
        storedState: sb = {}
      } = bb;
      const {
        userContext: kb
      } = (0, ub.c)(), ab = (0, gb.e)("players", tb), [Tb, Ub] = (0, Wb.useState)(sb.selectedCat || (null === cb || void 0 === cb ? void 0 : cb[0]) || null), [Ib, Mb] = (0, Wb.useState)(sb.selectedTimeframe || "Today"), [Xb, nb] = (0, Wb.useState)(null);
      (0, Wb.useEffect)((() => {
        null === Tb && null !== cb && cb.length > 0 && Ub(cb[0])
      }), [cb, Tb]);
      const [mb, lb] = (0, Wb.useState)(sb.seeingTop || !1), [Qb, eb] = (0, Wb.useState)(!1), Cb = (0, Wb.useCallback)((() => {
        null !== Tb && null !== Ib && (Hb.gameBridge.send("requestLeaderboard", {
          category: Tb.value,
          timeframe: Ib,
          seeTop: mb
        }), Vb(!0), Eb && ib(null))
      }), [Tb, Ib, sb, mb]);
      (0, Wb.useEffect)((() => {
        Cb(), sb.selectedCat = Tb, sb.selectedTimeframe = Ib, sb.seeingTop = mb
      }), [Tb, Ib, sb, mb, Cb]), (0, Wb.useEffect)((() => {
        if ((null === Xb || void 0 === Xb ? void 0 : Xb.length) > 0)
          if (mb) mb && eb(null === yb(Xb));
          else {
            for (const bb of Xb)
              if (1 === bb.place) return void eb(!1);
            eb(!0)
          }
      }), [Xb, mb]), (0, hb.f)("leaderboardResponse", (bb => {
        let {
          category: sb,
          timeframe: kb,
          data: Wb
        } = bb;
        for (let ab = 0; ab < cb; ab++)
          if (cb[ab].value === sb) {
            Ub(cb[ab]);
            break
          } Mb(kb), nb(Wb), Vb(!1)
      }));
      const [Nb, Vb] = (0, Wb.useState)(!0);

      function yb(bb) {
        const cb = tb(Hb.gameBridge.latest("players"));
        for (let sb = 0; sb < bb.length; sb++)
          if (bb[sb].name === cb) return bb[sb].place;
        return null
      }
      const [Pb, Db] = (0, Wb.useState)(!1), [Eb, ib] = (0, Wb.useState)(null);
      (0, Wb.useEffect)((() => {
        if (Xb && !Pb) {
          const bb = yb(Xb);
          bb < (sb.lastSeenPlayerPlace || 0) && ib(sb.lastSeenPlayerPlace - bb), Db(!0)
        }
      }), [Xb, sb, Pb]), (0, Wb.useEffect)((() => () => {
        Xb && (sb.lastSeenPlayerPlace = yb(Xb))
      }), [Xb, sb]);
      const Ob = (0, Wb.useRef)(null),
        [Gb, Kb] = (0, Wb.useState)(void 0);
      return (0, Wb.useEffect)((() => {
        var bb, cb;
        Gb !== (null === (bb = Ob.current) || void 0 === bb ? void 0 : bb.offsetHeight) && Kb(null === (cb = Ob.current) || void 0 === cb ? void 0 : cb.offsetHeight)
      })), kb.isLoggedIn() ? (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, fb.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, fb.jsx)(Lb.e, {
              options: cb.map((bb => ({
                label: bb.label,
                value: bb.value
              }))),
              value: Tb,
              onChange: bb => {
                Ub(bb)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, fb.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, fb.jsx)(Lb.e, {
              options: Jb.Qc.map((bb => ({
                value: bb,
                label: bb,
                className: "LBDropdownMenuItem"
              }))),
              value: Ib,
              onChange: bb => {
                Mb(bb.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), Qb ? (0, fb.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              lb(!mb)
            },
            children: mb ? "See Yourself" : "See Top"
          }) : null]
        }), (0, fb.jsx)("div", {
          className: "LBTableWrapper",
          children: Nb ? (0, fb.jsx)("div", {
            className: "LoaderContainer",
            children: (0, fb.jsx)(Bb.d, {})
          }) : null === Eb ? (0, fb.jsx)(fb.Fragment, {
            children: (0, fb.jsxs)("table", {
              className: "LBTable",
              children: [(0, fb.jsx)("thead", {
                className: "LBTableTHead",
                ref: Ob,
                children: (0, fb.jsxs)("tr", {
                  children: [(0, fb.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, fb.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, fb.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Tb.label.toUpperCase()
                  })]
                })
              }), (0, fb.jsx)("tbody", {
                children: Xb.map((bb => (0, fb.jsxs)("tr", {
                  className: "LBTableTR " + (bb.name === ab ? "LBTableTRYou" : ""),
                  children: [(0, fb.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${bb.place}`
                  }), (0, fb.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, fb.jsx)(Yb.d, {
                      text: [{
                        entityName: bb.name
                      }]
                    })
                  }), (0, fb.jsx)("td", {
                    className: "LBTableTD",
                    children: bb.stat
                  })]
                }, bb.name)))
              })]
            })
          }) : (0, fb.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              ib(null)
            },
            children: (0, fb.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, fb.jsx)("div", {
                className: "TriangleUp"
              }), (0, fb.jsx)("div", {
                className: "LBIncreaseText",
                children: `${Eb} Place${Eb>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, fb.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, fb.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, fb.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Pb = sb(1113),
      Db = sb(117),
      Eb = sb(37),
      ib = sb(3191);
    const Ob = (0, Wb.memo)((function(bb) {
      let {
        show: cb,
        onClose: sb
      } = bb;
      (0, Pb.c)();
      const kb = (0, Ib.d)("_tasks"),
        ab = (0, Ib.d)("_availableLeaderboards"),
        [Hb, Mb] = (0, Wb.useState)({});
      kb && Object.keys(kb).length > 0 && 0 === Object.keys(Hb).length && Mb(kb);
      const [Xb] = (0, Wb.useState)({
        tasks: {},
        leaderboard: {}
      }), nb = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!kb && Object.keys(kb).length > 0,
          content: (0, fb.jsx)(eb, {
            tasks: kb,
            lastDisplayedTasks: Hb
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === ab || void 0 === ab ? void 0 : ab.length) > 0,
          content: (0, fb.jsx)(yb, {
            lbStats: ab,
            storedState: Xb.leaderboard
          })
        }
      };

      function mb() {
        for (const bb in nb)
          if (nb[bb].getIsDefined()) return bb;
        return null
      }
      const [lb, Qb] = (0, Wb.useState)(mb());

      function Cb() {
        Mb({
          ...kb
        }), sb()
      }(0, Wb.useEffect)((() => {
        lb || Qb(mb())
      }), [mb()]), (0, Ub.e)(!0, lb && cb), (0, Wb.useEffect)((() => {
        cb && !lb && (console.log("CLOSE"), Cb())
      }), [cb, lb]);
      const [Nb, Vb] = (0, Wb.useState)(!1);
      return (0, Wb.useEffect)((() => {
        cb && lb && !Nb && Vb(!0)
      }), [cb, Nb, lb]), (0, Wb.useEffect)((() => {
        !Nb && kb && "tasks" !== lb && Qb("tasks")
      }), [Nb, kb, lb]), (0, fb.jsx)(fb.Fragment, {
        children: lb ? (0, fb.jsx)(ib.c, {
          className: "RetentionFeaturesWrapper",
          show: cb,
          children: (0, fb.jsxs)(Tb.c, {
            close: Cb,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, fb.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, fb.jsx)(Kb, {}), (0, fb.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, fb.jsx)(Gb, {
                  setCategory: Qb,
                  menuCategories: nb,
                  selectedCat: lb
                }), (0, fb.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: nb[lb].content
                })]
              })]
            }), (0, fb.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Db.featureFlags.useDiscord && (0, fb.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, fb.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, fb.jsx)(Zb, {
                    tasks: kb
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Gb(bb) {
      let {
        selectedCat: cb,
        setCategory: sb,
        menuCategories: kb
      } = bb;
      return (0, fb.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(kb).map((bb => kb[bb].getIsDefined() ? (0, fb.jsx)("div", {
          className: "MenuHeaderCategory " + (bb === cb ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            sb(bb)
          },
          children: kb[bb].Title
        }, bb) : null))
      })
    }

    function Kb() {
      const bb = (0, Ib.d)("currencyAmounts");
      return (0, fb.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== bb && void 0 !== bb ? bb : {}).map((cb => {
          const sb = bb[cb];
          return sb.hidden ? null : (0, fb.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, fb.jsx)(Qb.b, {
              name: sb.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: sb.iconColour
              }
            }), (0, fb.jsx)("div", {
              className: "UiCurrencyAmount",
              children: sb.amount
            })]
          }, cb)
        }))
      })
    }

    function Zb(bb) {
      let {
        tasks: cb
      } = bb;
      return (0, fb.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, fb.jsx)(Qb.b, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            Eb.h.setItem("DiscordPressed", !0), Hb.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in cb && mb.j.QQ("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, fb.jsx)(ab.b, {})]
      })
    }
    var zb = sb(19),
      qb = sb(1626),
      db = sb(36199),
      Ab = sb(8829),
      wb = sb(4371),
      rb = sb(195),
      ob = sb(1222),
      Sb = sb(1341),
      Rb = sb(2496),
      vb = sb(1197),
      Fb = sb(1629),
      xb = sb(2301),
      jb = sb(2284),
      pb = sb(1800),
      bc = sb(1968),
      cc = sb(1269),
      sc = sb(1454),
      kc = sb(4330);

    function Wc(bb) {
      const cb = {
        lobbyName: bb,
        answer: null,
        response: kc.d.getSocialSettings(bb)
      };
      return cb.response.then((bb => {
        cb.answer = bb
      })), cb
    }
    const ac = new Map;

    function Tc(bb) {
      const [cb] = (0, Wb.useState)((() => function(bb) {
        var cb;
        const sb = null !== (cb = ac.get(bb)) && void 0 !== cb ? cb : null;
        return null !== sb && void 0 !== sb && sb.answer && "error" in sb.answer ? null : sb
      }(bb))), [sb, kb] = (0, Wb.useState)((() => null !== cb && void 0 !== cb && cb.answer && "settings" in cb.answer ? cb.answer.settings : null)), [ab, Tb] = (0, Wb.useState)(!0), [Ub, Ib] = (0, Wb.useState)(null !== sb), Hb = (0, Wb.useRef)(sb);
      Hb.current = sb;
      const fb = (0, Wb.useRef)(0),
        Mb = (0, Wb.useRef)(0),
        Xb = (0, Wb.useRef)(!1),
        nb = (0, Wb.useRef)(!0),
        mb = (0, Wb.useCallback)((async cb => {
          const sb = ++fb.current,
            Wb = await (null !== cb && void 0 !== cb ? cb : kc.d.getSocialSettings(bb));
          nb.current && sb === fb.current && (Ib(!0), Tb(!1), "error" in Wb || kb(Wb.settings))
        }), [bb]),
        lb = (0, Wb.useCallback)((() => {
          Tb(!0), mb()
        }), [mb]);
      (0, Wb.useEffect)((() => (nb.current = !0, ac.delete(bb), Tb(!0), mb(null === cb || void 0 === cb ? void 0 : cb.response), () => {
        nb.current = !1
      })), [mb, bb, cb]);
      const Qb = bb => {
        fb.current++, Tb(!1), Hb.current = bb, kb(bb)
      };
      return {
        settings: sb,
        loading: ab,
        answered: Ub,
        retry: lb,
        change: async function(cb, sb) {
          let {
            quiet: kb = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Wb = Hb.current;
          if (null === Wb) return !1;
          Qb(sb(Wb)), Mb.current > 0 && (Xb.current = !0), Mb.current++;
          const ab = await kc.d.setSocialSettings(bb, cb);
          Mb.current--;
          const Tb = !("error" in ab);
          if (!nb.current) return Tb;
          if (kb);
          else if ("error" in ab) pb.f.showMessage({
            translationKey: ab.error
          });
          else
            for (const bb of ab.notFound) pb.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: bb
              }
            });
          if (Mb.current > 0) return Tb;
          const Ub = Xb.current;
          return Xb.current = !1, !Ub && "settings" in ab ? Qb(ab.settings) : (Ub || Qb(Wb), mb()), Tb
        }
      }
    }

    function Uc(bb, cb) {
      const sb = cb.toLowerCase();
      for (const kb of bb)
        if (kb.toLowerCase() === sb) return !0;
      return !1
    }

    function Ic(bb) {
      if (null === bb) return !0;
      const {
        visibility: cb
      } = bb;
      return "public" === cb || "unlisted" === cb || "whitelist" === cb && bb.canManage
    }

    function Hc(bb, cb, sb) {
      if (sb) {
        const sb = cb.filter((cb => !Uc(bb.whitelist, cb)));
        return {
          ...bb,
          whitelist: [...bb.whitelist, ...sb]
        }
      }
      return {
        ...bb,
        whitelist: bb.whitelist.filter((bb => !Uc(cb, bb)))
      }
    }
    var fc = sb(2519);

    function Mc(bb) {
      let {
        worldCode: cb,
        message: sb
      } = bb;
      const {
        t: kb
      } = (0, vb.E)(), {
        isTouchScreen: ab
      } = (0, zb.p)(["isTouchScreen"]), Tb = Db.featureFlags.canUseInviteLinks, Ub = (0, Ab.i)(Tb && null === sb), [Ib, Hb] = (0, fc.j)(), Mb = (0, Wb.useRef)(null);
      if (null !== sb) return (0, fb.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, fb.jsx)(Qb.b, {
          name: "lock"
        }), (0, fb.jsx)("span", {
          children: sb
        })]
      });
      const Xb = Tb ? Ub : cb,
        mb = ab && Tb && (0, fc.c)();
      return (0, fb.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Tb && (0, fb.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: kb("worldSocial:worldCode")
        }), (0, fb.jsx)("input", {
          ref: Mb,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Xb && void 0 !== Xb ? Xb : "",
          "aria-label": kb(Tb ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, fb.jsxs)(nb.d, {
          className: "WorldSocialCopy",
          disabled: null === Xb,
          onClick: () => {
            null !== Xb && (0, fc.g)(Xb, {
              useShareSheet: mb,
              onOutcome: bb => {
                if ((0, sc.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== bb || Tb ? bb : "code"
                  }), "copied" === bb) Hb();
                else if ("failed" === bb) {
                  var cb;
                  null === (cb = Mb.current) || void 0 === cb || cb.focus(), pb.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, fb.jsx)(Qb.b, {
            name: Ib ? "check" : mb ? "up-from-bracket" : "copy"
          }), " ", kb(Ib ? "general:copied" : mb ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var Xc = sb(1033),
      nc = sb.n(Xc);
    const mc = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      lc = ["unlisted", "public", "whitelist", "private"];

    function Qc(bb) {
      let {
        visibility: cb,
        onPick: sb
      } = bb;
      const {
        t: kb
      } = (0, vb.E)(), ab = (0, Wb.useRef)([]);
      return (0, fb.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": kb("worldSocial:whoCanJoin"),
        children: lc.map(((bb, Wb) => {
          const Tb = bb === cb;
          return (0, fb.jsxs)("button", {
            ref: bb => {
              ab.current[Wb] = bb
            },
            type: "button",
            className: nc()("WorldSocialTile", {
              WorldSocialTileSelected: Tb
            }),
            "aria-pressed": Tb,
            tabIndex: Tb ? 0 : -1,
            onKeyDown: bb => {
              ((bb, cb) => {
                const sb = "ArrowRight" === bb.key || "ArrowDown" === bb.key ? 1 : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? -1 : 0;
                var kb;
                0 !== sb && (bb.preventDefault(), null === (kb = ab.current[(cb + sb + lc.length) % lc.length]) || void 0 === kb || kb.focus())
              })(bb, Wb)
            },
            onClick: () => {
              sb(bb)
            },
            children: [(0, fb.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, fb.jsx)(Qb.b, {
                name: mc[bb]
              })
            }), (0, fb.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, fb.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: kb(`worldSocial:${bb}`)
              }), (0, fb.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: kb(`worldSocial:${bb}Description`)
              })]
            })]
          }, bb)
        }))
      })
    }
    var ec = sb(613),
      Cc = sb(2488),
      Nc = sb(2441),
      Vc = sb(4129);

    function Lc(bb, cb) {
      var sb;
      return {
        isError: !1,
        name: bb,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== cb && void 0 !== cb ? cb : {},
        nameColour: null !== (sb = null === cb || void 0 === cb ? void 0 : cb.nameColour) && void 0 !== sb ? sb : ec.c,
        location: {
          status: "offline"
        }
      }
    }

    function uc(bb) {
      let {
        player: cb,
        isFriend: sb = !1,
        status: kb,
        showLocation: Wb = void 0 === kb,
        aX: ab,
        onSendFriendRequest: Tb,
        actions: Ub,
        zIndex: Ib
      } = bb;
      const {
        t: Hb
      } = (0, vb.E)();
      let Mb, Xb = kb;
      return null !== ab && void 0 !== ab && ab.on && (Xb = (0, fb.jsxs)(fb.Fragment, {
        children: [null !== kb && void 0 !== kb ? kb : (0, fb.jsx)(Nc.e, {
          socialPreview: cb
        }), (0, fb.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Hb("worldSocial:canJoin")]
        })]
      })), (Ub || ab) && (Mb = (0, fb.jsxs)(fb.Fragment, {
        children: [Ub, ab && (0, fb.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, fb.jsx)(Vc.e, {
            checked: ab.on,
            disabled: !1,
            ariaLabel: Hb("worldSocial:letJoin", {
              playerName: cb.name
            }),
            onChange: bb => {
              ab.onChange(bb.target.checked)
            }
          })
        })]
      })), (0, fb.jsx)(Cc.f, {
        playerSocialPreview: cb,
        isFriend: sb,
        hideFriendBadge: !0,
        onFriendRemoved: sb ? bb => {
          Fb.c.removeFriendFromState(bb)
        } : void 0,
        status: Xb,
        showLocation: Wb,
        onSendFriendRequest: Tb,
        opensProfileCard: !1,
        zIndex: Ib,
        children: Mb
      })
    }

    function Yc(bb) {
      let {
        row: cb,
        aX: sb,
        canInvite: kb,
        invited: Wb,
        onInvite: ab,
        zIndex: Tb
      } = bb;
      const {
        t: Ub
      } = (0, vb.E)(), Ib = "online" === cb.place ? nb.d : nb.h;
      return (0, fb.jsx)(uc, {
        player: cb.friend,
        isFriend: !0,
        status: "here" === cb.place ? Ub("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        aX: sb,
        zIndex: Tb,
        actions: kb && (0, fb.jsx)(Ib, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Wb,
          onClick: ab,
          ariaLabel: `${Ub("worldSocial:invite")} ${cb.friend.name}`,
          children: Ub(Wb ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var hc = sb(2560);

    function Jc(bb) {
      let {
        playersHere: cb,
        exclude: sb,
        ZN: kb
      } = bb;
      const {
        t: ab
      } = (0, vb.E)(), Tb = (0, hc.o)(hc.h), [Ub, Ib] = (0, Wb.useState)([]), Hb = [], Mb = (bb, cb) => {
        const kb = [...sb, ...Hb.map((bb => bb.player.name))];
        Hb.length < 3 && !Uc(kb, bb.name) && Hb.push({
          player: bb,
          status: cb
        })
      };
      for (const Wb of cb) Mb(Lc(Wb.name, Wb.cosmetics, Wb.ranks), ab("worldSocial:inThisWorld"));
      if ("loaded" === Tb.state.status)
        for (const Wb of Tb.state.recentPlayers) Wb.preview.name && !Wb.preview.isError && Mb({
          ...Wb.preview,
          location: {
            status: "offline"
          }
        }, ab("worldSocial:playedWithYou"));
      const Xb = bb => {
        Ib((cb => [...cb, bb])), kb(bb).finally((() => {
          Ib((cb => cb.filter((cb => cb !== bb))))
        }))
      };
      return (0, fb.jsx)(fb.Fragment, {
        children: Hb.map(((bb, cb) => {
          let {
            player: sb,
            status: kb
          } = bb;
          return (0, fb.jsx)(uc, {
            zIndex: Hb.length - cb,
            player: sb,
            status: kb,
            onSendFriendRequest: () => {
              Xb(sb.name)
            },
            actions: (0, fb.jsx)(Sb.f, {
              tooltipInner: (0, fb.jsx)(fb.Fragment, {
                children: ab("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, fb.jsx)(nb.d, {
                className: "FriendRequestButton",
                disabled: Ub.includes(sb.name),
                ariaLabel: `${ab("recentPlayers:addFriend")} ${sb.name}`,
                onClick: () => {
                  Xb(sb.name)
                },
                children: (0, fb.jsx)(Qb.b, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${sb.name}`)
        }))
      })
    }
    var gc = sb(1664);

    function Bc(bb) {
      let {
        ZN: cb
      } = bb;
      const {
        t: sb
      } = (0, vb.E)(), kb = (0, Wb.useRef)(null), [ab, Tb] = (0, Wb.useState)(""), [Ub, Ib] = (0, Wb.useState)(!1), Hb = () => {
        const bb = ab.trim();
        "" === bb || Ub || (Ib(!0), cb(bb).then((bb => {
          bb && kb.current && (kb.current.value = "", Tb(""))
        })).finally((() => {
          Ib(!1)
        })))
      };
      return (0, fb.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: bb => {
          bb.target === kb.current && "Escape" !== bb.key && bb.stopPropagation()
        },
        children: [(0, fb.jsx)(gc.c, {
          className: "WorldSocialAddFriendInput",
          domRef: kb,
          maxLength: 32,
          placeholderText: sb("worldSocial:addFriendPlaceholder"),
          ariaLabel: sb("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: bb => {
            Tb(bb)
          },
          onEnter: Hb
        }), (0, fb.jsxs)(nb.d, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: Ub || "" === ab.trim(),
          onClick: Hb,
          children: [(0, fb.jsx)(Qb.b, {
            name: "user-plus"
          }), " ", sb("socialBar:sendRequest")]
        })]
      })
    }
    const tc = new Map;

    function yc(bb) {
      const cb = tc.get(bb);
      if (!cb) return [];
      const sb = Date.now();
      for (const [kb, Wb] of cb) sb - Wb >= rb.n && cb.delete(kb);
      return [...cb.keys()]
    }
    var Pc = sb(1235),
      Dc = sb(1471),
      Ec = sb(4365),
      ic = sb(316),
      Oc = sb(4350);
    const Gc = ["auto", "auto_existing"];

    function Kc(bb) {
      return Gc.includes(bb)
    }

    function Zc(bb, cb) {
      const sb = (0, Pc.mb)(bb);
      return null !== cb && (0, Pc.mb)(cb) === sb || (0, Oc.b)().some((bb => (0, Pc.mb)(bb.name) === sb))
    }
    const zc = new Set;

    function qc(bb) {
      return `worldSocialSeen:${bb}`
    }

    function dc(bb) {
      return !bb || zc.has(bb) || !0 === Eb.h.getItem(qc(bb))
    }

    function Ac(bb) {
      bb && !zc.has(bb) && (zc.add(bb), Eb.h.setItem(qc(bb), !0))
    }

    function wc(bb) {
      let {
        show: cb,
        onClose: sb,
        opener: kb
      } = bb;
      const {
        lobbyName: ab,
        shownLobbyName: Ub
      } = (0, gb.f)("connectedGame");
      return (0, Wb.useEffect)((() => {
        cb && (0, sc.reportAnalyticsClick)({
          id: "world_social.open",
          value: kb
        })
      }), [cb]), (0, fb.jsx)(Tb.c, {
        show: cb && null !== ab,
        close: sb,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== kb,
        children: cb && null !== ab && (0, fb.jsx)(rc, {
          lobbyName: ab,
          worldCode: null !== Ub && void 0 !== Ub ? Ub : ab,
          onClose: sb
        }, ab)
      })
    }

    function rc(bb) {
      var cb;
      let {
        lobbyName: sb,
        worldCode: kb,
        onClose: ab
      } = bb;
      const {
        t: Tb
      } = (0, vb.E)(), Ub = (0, Wb.useRef)(null), {
        settings: Ib,
        loading: Hb,
        answered: Mb,
        change: Xb,
        retry: mb
      } = Tc(sb), lb = (0, Fb.k)(), eb = (0, gb.f)("players"), Cb = (0, gb.f)("hiddenPlayerNames"), [Nb, Vb] = (0, Wb.useState)([]), [Lb, Yb] = (0, Wb.useState)([]), [hb, Jb] = (0, Wb.useState)(!1), tb = (0, Wb.useMemo)((() => {
        var bb, cb;
        const sb = null === eb.localId ? null : null !== (bb = null === (cb = eb.byId[eb.localId]) || void 0 === cb ? void 0 : cb.name) && void 0 !== bb ? bb : null;
        return eb.ids.flatMap((bb => {
          const cb = eb.byId[bb];
          return null !== cb && void 0 !== cb && cb.name && cb.name !== sb ? [{
            name: cb.name,
            cosmetics: cb.cosmetics,
            ranks: cb.ranks
          }] : []
        }))
      }), [eb]), yb = (0, Wb.useMemo)((() => function(bb, cb, sb) {
        const kb = [],
          Wb = [],
          ab = [];
        for (const Tb of bb) !Tb.isError && Tb.name && ("inGame" === Tb.location.status && Tb.location.inLobbyName === cb || Uc(sb, Tb.name) ? Wb.push({
          friend: Tb,
          place: "here"
        }) : "offline" === Tb.location.status ? ab.push({
          friend: Tb,
          place: "offline"
        }) : kb.push({
          friend: Tb,
          place: "online"
        }));
        return [...kb, ...Wb, ...ab]
      }(lb.friends, sb, tb.map((bb => bb.name)))), [lb.friends, sb, tb]), Pb = Db.featureFlags.canSeeRealPlayerNames ? tb.filter((bb => null === (0, cc.c)(bb.name, Cb))) : [], Eb = null !== Ib && void 0 !== Ib && Ib.canManage ? Ib : null, ib = null !== Eb, Ob = null !== (cb = null === Ib || void 0 === Ib ? void 0 : Ib.visibility) && void 0 !== cb ? cb : null, Gb = "whitelist" === (null === Eb || void 0 === Eb ? void 0 : Eb.visibility), Kb = "private" === Ob || "whitelist" === Ob && !ib, {
        userContext: Zb
      } = (0, ub.c)();
      (0, Wb.useEffect)((() => {
        ib && Zc(sb, Zb.getPersonalWorldLobbyName()) && Ac(Zb.whamm)
      }), [ib, sb, Zb]);
      const zb = Kb ? Tb("whitelist" === Ob ? "socialBar:inviteWorldManagersOnly" : ib ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        qb = null === zb;
      (0, Wb.useEffect)((() => Kb ? void 0 : pb.f.quietFriendAdded()), [Kb]), (0, Wb.useEffect)((() => pb.f.quietFriendRequests()), []);
      const Ab = (0, Wb.useRef)(!1);
      (0, Wb.useEffect)((() => {
        const bb = Ub.current,
          cb = !Ab.current;
        Ab.current = !0;
        const sb = null === document.activeElement || document.activeElement === document.body;
        null !== bb && void 0 !== bb && bb.contains(document.activeElement) || !cb && !sb || (0, db.g)() || null === bb || void 0 === bb || bb.focus({
          preventScroll: !0
        })
      }), [qb]), (0, Wb.useEffect)((() => {
        const bb = bb => {
          "Escape" !== bb.key || null !== document.activeElement && document.activeElement !== document.body || ab()
        };
        return document.addEventListener("keydown", bb), () => {
          document.removeEventListener("keydown", bb)
        }
      }), [ab]);
      const kc = null === Ib && !Mb,
        Wc = (Hb || lb.loading) && 0 === lb.friends.length,
        ac = lb.friends.flatMap((bb => bb.name ? [bb.name] : [])),
        fc = Nb.filter((bb => !Uc(ac, bb))),
        Xc = yb.length + 3,
        nc = fc.length + Xc,
        mc = hb ? lb.requests : lb.requests.slice(0, 1),
        lc = async function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const sb of function(bb, cb) {
              const sb = [];
              for (let kb = 0; kb < bb.length; kb += cb) sb.push(bb.slice(kb, kb + cb));
              return sb
            }(bb, wb.C)) {
            if (!await Xb({
                whitelistAdd: sb
              }, (bb => Hc(bb, sb, !0)), {
                quiet: cb
              })) return !1
          }
          return !0
        }, ec = async bb => {
          if (bb === Ob) return;
          (0, sc.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: bb
          });
          const cb = [...yc(sb), ...Lb],
            kb = "whitelist" === bb && Ib ? function(bb, cb, sb) {
              const kb = [],
                Wb = bb.flatMap((bb => "here" === bb.place ? [bb.friend.name] : []));
              for (const ab of [...Wb, ...cb]) Uc(kb, ab) || Uc(sb, ab) || kb.push(ab);
              return kb
            }(yb, cb, Ib.whitelist) : [];
          await Xb({
            setVisibility: bb
          }, (cb => ({
            ...cb,
            visibility: bb
          }))) && await lc(kb)
        }, Cc = bb => {
          if (Gb && Eb) return {
            on: Uc(Eb.whitelist, bb),
            onChange: cb => {
              (0, sc.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: cb ? "on" : "off"
              }), Xb(cb ? {
                whitelistAdd: [bb]
              } : {
                whitelistRemove: bb
              }, (sb => Hc(sb, [bb], cb)))
            }
          }
        }, Nc = async bb => {
          (0, sc.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const cb = () => {
            Yb((cb => cb.filter((cb => cb !== bb))))
          };
          Yb((cb => [...cb, bb]));
          const kb = function(bb, cb) {
            return null === bb || void 0 === bb || !bb.canManage || Uc(bb.whitelist, cb) ? "none" : "whitelist" === bb.visibility ? "required" : "quiet"
          }(Ib, bb);
          if ("none" !== kb) {
            const sb = lc([bb], "quiet" === kb);
            if ("required" === kb && !await sb) return void cb()
          }
          await (0, xb.n)(bb, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(bb, cb) {
            var sb;
            const kb = null !== (sb = tc.get(bb)) && void 0 !== sb ? sb : new Map;
            kb.set(cb, Date.now()), tc.set(bb, kb)
          }(sb, bb), setTimeout(cb, rb.q)) : cb()
        }, Vc = async (bb, cb) => {
          (0, sc.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: cb
          });
          const sb = await (0, jb.k)(bb, "world_social");
          return (0, jb.c)(sb, bb, {
            announceSent: !1
          }), "failed" !== sb.kind && ("sent" === sb.kind && Vb((cb => Uc(cb, bb) ? cb : [...cb, bb])), Gb && await lc([bb]), !0)
        };
      return (0, fb.jsxs)("div", {
        ref: Ub,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && " " === bb.key && bb.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, fb.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, fb.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Tb("worldSocial:title")
          }), (0, fb.jsx)(nb.j, {
            className: "WorldSocialClose",
            onClick: ab
          })]
        }), kc && (0, fb.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, fb.jsx)(Bb.d, {})
        }), !kc && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)(Mc, {
            worldCode: kb,
            message: zb
          }), null === Ib && !Hb && (0, fb.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: mb,
            children: Tb("worldSocial:loadFailed")
          }), ib && null !== Ob && (0, fb.jsx)(Qc, {
            visibility: Ob,
            onPick: bb => {
              ec(bb)
            }
          }), lb.requests.length > 0 && (0, fb.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, fb.jsx)(Rb.b, {
              label: (0, fb.jsxs)(fb.Fragment, {
                children: [(0, fb.jsx)(Qb.b, {
                  name: bc.h
                }), " ", Tb("socialBar:requests")]
              }),
              meta: (0, fb.jsxs)(fb.Fragment, {
                children: [lb.requests.length, lb.requests.length === ob.o && (0, fb.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Tb("socialBar:limitReached")
                }), !hb && lb.requests.length > 1 && (0, fb.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    Jb(!0)
                  },
                  children: Tb("worldSocial:moreRequests", {
                    count: lb.requests.length - 1
                  })
                })]
              })
            }), (0, fb.jsx)("div", {
              className: "PlayerRows",
              children: mc.map(((bb, cb) => (0, fb.jsx)(uc, {
                zIndex: mc.length - cb,
                player: bb,
                actions: (0, fb.jsxs)(fb.Fragment, {
                  children: [(0, fb.jsx)(Sb.f, {
                    tooltipInner: (0, fb.jsx)(fb.Fragment, {
                      children: Tb("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, fb.jsx)(nb.d, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Tb("general:accept")} ${bb.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, jb.g)(bb.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, fb.jsx)(Qb.b, {
                        name: "check"
                      })
                    })
                  }), (0, fb.jsx)(Sb.f, {
                    tooltipInner: (0, fb.jsx)(fb.Fragment, {
                      children: Tb("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, fb.jsx)(nb.h, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Tb("general:decline")} ${bb.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, jb.g)(bb.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, fb.jsx)(Qb.b, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${bb.name}`)))
            })]
          }), (0, fb.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, fb.jsx)(Rb.b, {
              label: (0, fb.jsxs)(fb.Fragment, {
                children: [(0, fb.jsx)(Qb.b, {
                  name: bc.e
                }), " ", Tb("socialBar:friends")]
              }),
              meta: lb.loaded && !Kb ? lb.friends.length : void 0
            }), (0, fb.jsx)(Bc, {
              ZN: bb => Vc(bb, "field")
            }), Wc && (0, fb.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, fb.jsx)(Bb.d, {})
            }), !Wc && (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsxs)("div", {
                className: "PlayerRows",
                children: [fc.map(((bb, cb) => (0, fb.jsx)(uc, {
                  zIndex: nc - cb,
                  player: Lc(bb, null),
                  status: Tb("worldSocial:requestSent"),
                  aX: Cc(bb)
                }, `request:${bb}`))), !Kb && yb.map(((bb, cb) => (0, fb.jsx)(Yc, {
                  zIndex: Xc - cb,
                  row: bb,
                  aX: Cc(bb.friend.name),
                  canInvite: Ic(Ib) && "here" !== bb.place,
                  invited: Lb.includes(bb.friend.name),
                  onInvite: () => {
                    Nc(bb.friend.name)
                  }
                }, bb.friend.name))), lb.loaded && 0 === lb.friends.length && (0, fb.jsx)(Jc, {
                  playersHere: Pb,
                  exclude: Nb,
                  ZN: bb => Vc(bb, "suggestion")
                })]
              }), Gb && lb.loaded && 0 === lb.friends.length && 0 === fc.length && (0, fb.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Tb("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var oc = sb(2360),
      Sc = sb(2346);

    function Rc(bb) {
      let {
        show: cb,
        onClose: sb,
        option: kb
      } = bb;
      const ab = (0, gb.e)("connectedGame", (bb => (0, oc.e)(bb) ? bb.lobbyName : null));
      return function(bb) {
        const {
          gameEntrySource: cb,
          loadingOverlayVisible: sb
        } = (0, zb.p)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: kb
        } = (0, ub.c)(), ab = (0, gb.f)("localPlayerAlive"), Tb = (0, gb.e)("players", (bb => null !== bb.localId && void 0 !== bb.byId[bb.localId])), Ub = (0, Sc.k)(), Ib = (0, Wb.useRef)(null), Hb = (0, Wb.useRef)(null), fb = "worldCreation" === cb, Mb = kb.whamm, Xb = kb.getPersonalWorldLobbyName();
        (0, Wb.useEffect)((() => {
          var cb;
          null !== bb && (null === (cb = Hb.current) || void 0 === cb ? void 0 : cb.lobbyName) !== bb && null !== jc(bb, fb, Mb, Xb) && (Hb.current = Wc(bb))
        }), [fb, bb, Mb, Xb]), (0, Wb.useEffect)((() => {
          if (null !== bb && (!sb && ab && Tb)) return Ub.whenShown((() => {
            var cb;
            const sb = Ib.current === bb ? null : jc(bb, fb, Mb, Xb);
            if (null === sb) return;
            const kb = (null === (cb = Hb.current) || void 0 === cb ? void 0 : cb.lobbyName) === bb ? Hb.current : Wc(bb);
            Hb.current = null, Ib.current = bb,
              function(bb, cb, sb, kb) {
                const {
                  lobbyName: Wb
                } = bb, ab = () => {
                  ! function(bb, cb) {
                    if (!ks()) return void cb(!0);
                    const sb = performance.now() + cs;
                    let kb = 0;
                    const Wb = () => {
                      kb = ks() ? 0 : kb + 1, kb >= 2 ? cb(!0) : !ss(bb) || performance.now() > sb ? cb(!1) : setTimeout(Wb, bs)
                    };
                    setTimeout(Wb, bs)
                  }(Wb, (ab => {
                    kb();
                    const Tb = "auto_existing" === cb && dc(sb);
                    ab && ss(Wb) && !Fc(Wb) && !Tb && (pc(bb) ? xc(Wb) : (xc(Wb), Ac(sb), function(bb) {
                      const cb = ic.b.world_social_popup_v1;
                      return (0, ic.j)("world_social_popup_v1"), (0, sc.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${cb}:${(0,Ec.b)()}:${bb}`
                      }), (0, Dc.flushClientAnalyticsEvents)(), "auto_open" === cb
                    }(cb) && (! function(bb) {
                      ac.set(bb.lobbyName, bb)
                    }(bb), mb.j.QQ("toggleMenu", `inviteLink|${cb}`), "inviteLink" !== zb.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === cb && !pc(bb)) return void ab();
                bb.response.then((bb => {
                  if (!("error" in bb)) return bb.settings.canManage ? void ab() : (xc(Wb), void kb());
                  kb()
                }))
              }(kb, sb, Mb, (() => {
                Ib.current === bb && (Ib.current = null)
              }))
          }))
        }), [Ub, fb, sb, bb, ab, Tb, Mb, Xb])
      }(ab), (0, Wb.useEffect)((() => {
        cb && null !== ab && xc(ab)
      }), [cb, ab]), null !== ab ? (0, fb.jsx)(wc, {
        show: cb,
        onClose: sb,
        opener: Kc(kb) ? kb : "icon"
      }) : (0, fb.jsx)(Ab.e, {
        show: cb,
        onClose: sb
      })
    }
    const vc = new Set;

    function Fc(bb) {
      return vc.has(bb) || !!Eb.i.getItem(`worldSocialShown:${bb}`)
    }

    function xc(bb) {
      vc.add(bb), Eb.i.setItem(`worldSocialShown:${bb}`, !0)
    }

    function jc(bb, cb, sb, kb) {
      return Fc(bb) ? null : function(bb) {
        let {
          justMade: cb,
          playerId: sb,
          lobbyName: kb,
          personalWorld: Wb
        } = bb;
        return cb ? "auto" : !dc(sb) && Zc(kb, Wb) ? "auto_existing" : null
      }({
        justMade: cb,
        playerId: sb,
        lobbyName: bb,
        personalWorld: kb
      })
    }

    function pc(bb) {
      let {
        answer: cb
      } = bb;
      return null !== cb && "settings" in cb && !cb.settings.canManage
    }
    const bs = 500,
      cs = 3e4;

    function ss(bb) {
      return "inGame" === zb.d.get("gameState") && Hb.gameBridge.latest("connectedGame").lobbyName === bb
    }

    function ks() {
      return (0, db.g)() || zb.d.get("loadingOverlayVisible") || (0, qb.q)()
    }
    var Ws = sb(36351),
      as = sb(2913),
      Ts = sb(1917),
      Us = sb(2904);

    function Is(bb, cb, sb) {
      return Us.e.overridesTexture(bb) ? Us.e.getTexture(bb, cb).url : sb
    }
    var Hs = sb(9765);
    const fs = (bb, cb) => {
        (0, Wb.useEffect)((() => {
          setTimeout((() => {
            bb && bb.current && bb.current.focus()
          }), 1)
        }), [cb])
      },
      Ms = (0, Wb.memo)((function(bb) {
        let {
          isInputActive: cb,
          onClose: sb,
          onChange: kb,
          textAreaRef: Wb,
          fontSize: ab,
          lineHeight: Tb,
          currText: Ub
        } = bb;
        return (0, fb.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, fb.jsx)("img", {
            src: Is("board_full", as.j.BLOCK, Hs),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, fb.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Ub,
            ref: Wb,
            style: {
              fontSize: `${ab}rem`,
              lineHeight: `${Tb}rem`
            },
            onKeyDown: bb => {
              var cb;
              "Escape" !== bb.key && (bb.stopPropagation(), "Tab" === bb.key && function(bb) {
                bb.preventDefault();
                const cb = bb.target,
                  {
                    value: sb
                  } = cb;
                let kb = cb.selectionStart,
                  Wb = cb.selectionEnd,
                  ab = sb.slice(kb, Wb);
                if (!ab.includes("\n") && !bb.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; kb > 0 && "\n" !== sb[kb - 1];) kb--;
                const Tb = "\n" === sb[Wb - 1];
                Tb && Wb--;
                ab = sb.slice(kb, Wb);
                const Ub = ab.split("\n").map((cb => bb.shiftKey ? cb.replace(/^\t/, "") : "\t" + cb)).join("\n");
                if (bb.shiftKey && sb.slice(kb, Wb) === Ub) return;
                let {
                  selectionStart: Ib
                } = cb;
                cb.setSelectionRange(kb, Wb), Ib > kb && (!bb.shiftKey || "\t" === ab[0]) && (Ib += bb.shiftKey ? -1 : 1);
                Wb = kb + Ub.length + (Tb ? 1 : 0), document.execCommand("insertText", !1, Ub), cb.setSelectionRange(Ib, Wb)
              }(bb), /^F\d+$/i.test(bb.code) && null !== (cb = Ts.v.OpenCodeEditor) && void 0 !== cb && cb.includes(bb.code) && sb())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: kb
          })]
        })
      }));

    function Xs(bb) {
      return 1.3 * bb
    }
    var ns = sb(1666);
    const ms = (0, Wb.memo)((function(bb) {
        let {
          show: cb,
          onOpen: sb,
          onClose: kb
        } = bb;
        const [ab, Ub] = (0, Wb.useState)(null), [Ib, Mb] = (0, Wb.useState)(""), [Xb, mb] = (0, Wb.useState)(0), [lb, Qb] = (0, Wb.useState)(null), [eb, Cb] = (0, Wb.useState)({
          text: "",
          textSize: 0
        }), Nb = (bb, cb) => lb ? (0, Ws.o)(bb, cb, lb.width, lb.height) : (0, Ws.f)(bb, cb), Vb = bb => {
          Mb(Nb(Ib, bb)), mb(bb), Eb.h.setItem("lastBoardTextSize", bb)
        }, Lb = () => {
          kb(), lb && Ib === eb.text && Xb === eb.textSize || Hb.gameBridge.send("writeOnBoard", {
            pos: ab,
            text: Ib,
            textSize: Xb
          })
        };
        (0, gb.c)("boardEditRequested", (bb => {
          var Wb, ab;
          if (!Db.featureFlags.canSeePlayerWrittenText) return;
          if (null === bb) return Ub(null), void(cb && kb());
          const {
            pos: Tb,
            noticeboardSpan: Ib,
            text: Hb
          } = bb;
          Ub(Tb), Qb(Ib), Mb(Hb);
          const fb = null !== (Wb = null !== (ab = bb.textSize) && void 0 !== ab ? ab : Eb.h.getItem("lastBoardTextSize")) && void 0 !== Wb ? Wb : 0;
          mb(fb), Cb({
            text: Hb,
            textSize: fb
          }), Eb.h.setItem("lastBoardTextSize", fb), sb()
        }));
        const ub = (0, Wb.useRef)(null);
        fs(ub, cb), (0, ns.p)(ub, {
          kind: "sign",
          submit: Lb
        });
        const Yb = function(bb, cb) {
            const sb = Ws.b[bb];
            if (!cb) return sb.uiFontSize;
            const {
              numLines: kb,
              charsPerLine: Wb
            } = (0, Ws.u)(cb.width, cb.height, bb);
            return sb.uiFontSize * Math.min(sb.charsPerLine / Wb, sb.numLines / kb)
          }(Xb, lb),
          hb = Xs(Yb);
        return (0, fb.jsxs)(Tb.c, {
          className: "WriteOnBoardBg",
          close: Lb,
          escDoesExit: !0,
          show: cb,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, fb.jsx)(Ms, {
            isInputActive: () => cb,
            onClose: Lb,
            onChange: bb => {
              Mb(Nb(bb.target.value, Xb))
            },
            textAreaRef: ub,
            fontSize: Yb,
            lineHeight: hb,
            currText: Ib
          }), (0, fb.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, fb.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, fb.jsx)(nb.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Vb(0)
              },
              disabled: 0 === Xb,
              children: "Small"
            }), (0, fb.jsx)(nb.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Vb(1)
              },
              disabled: 1 === Xb,
              children: "Medium"
            }), (0, fb.jsx)(nb.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Vb(2)
              },
              disabled: 2 === Xb,
              children: "Large"
            })]
          })]
        })
      })),
      ls = (0, Wb.memo)((function(bb) {
        let {
          show: cb,
          onOpen: sb,
          onClose: kb
        } = bb;
        const [ab, Ub] = (0, Wb.useState)(""), Ib = () => {
          kb(), Hb.gameBridge.send("writeNameTag", ab)
        };
        (0, hb.f)("EditNameTag", (bb => {
          Db.featureFlags.canSeePlayerWrittenText && null !== bb && (Ub(bb), sb())
        }));
        const Mb = (0, Wb.useRef)(null);
        fs(Mb, cb), (0, ns.p)(Mb, {
          kind: "nameTag",
          submit: Ib
        });
        const Xb = Ws.D.nameTag.uiFontSize,
          mb = Xs(Xb);
        return (0, fb.jsxs)(Tb.c, {
          className: "WriteOnBoardBg",
          close: Ib,
          escDoesExit: !0,
          show: cb,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, fb.jsx)("div", {
            className: "NameTagTrim",
            children: (0, fb.jsx)(Ms, {
              isInputActive: () => cb,
              onClose: Ib,
              onChange: bb => {
                const cb = bb.target.value.replaceAll("\n", "");
                Ub((0, Ws.s)(cb, "nameTag"))
              },
              textAreaRef: Mb,
              fontSize: Xb,
              lineHeight: mb,
              currText: ab
            })
          }), (0, fb.jsx)(nb.d, {
            onClick: Ib,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Qs = sb(17881);
    const es = (0, Wb.memo)((function(bb) {
      let {
        show: cb,
        onOpen: sb,
        onClose: kb
      } = bb;
      const [ab, Ub] = (0, Wb.useState)(""), [Ib, Mb] = (0, Wb.useState)(0), [Xb, mb] = (0, Wb.useState)(!1), [lb, Qb] = (0, Wb.useState)(["", "", "", "", "", "", "", "", "", ""]), [eb, Cb] = (0, Wb.useState)("Title"), [Nb, Vb] = (0, Wb.useState)(!0), [Lb, ub] = (0, Wb.useState)(!1);
      (0, hb.f)("EditBook", (bb => {
        let {
          pages: cb,
          title: kb,
          isPublished: Wb
        } = bb;
        var ab;
        Db.featureFlags.canSeePlayerWrittenText && (null !== cb ? (Qb(cb), Ub(null !== (ab = cb[0]) && void 0 !== ab ? ab : ""), Cb(kb), Mb(0), mb(!1), Vb(!Wb), ub(!1), sb()) : Qb(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const Yb = (0, Wb.useRef)(null),
        Jb = (0, Wb.useRef)(null);
      fs(Yb, cb), (0, ns.p)(Yb, {
        kind: "book"
      }), (0, ns.p)(Jb, {
        kind: "KU"
      });
      const gb = Ws.D.book.uiFontSize,
        Bb = Xs(gb),
        tb = () => {
          (Nb || Lb) && Hb.gameBridge.send("writeBook", {
            pages: [...lb],
            title: eb,
            published: !Nb && Lb
          })
        },
        yb = bb => {
          Xb && (lb[Ib] = ab, mb(!1)), Ub(lb[bb]), Mb(bb)
        };
      return (0, fb.jsxs)(Tb.c, {
        className: "WriteOnBoardBg",
        close: () => {
          kb(), lb[Ib] = ab, tb()
        },
        escDoesExit: !0,
        show: cb,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, fb.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, fb.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: eb,
            ref: Jb,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Bb}rem`
            },
            onKeyDown: bb => {
              Nb && bb.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: bb => {
              let cb = bb.target.value;
              cb = (0, Ws.s)(cb, "KU"), Cb(cb)
            },
            readOnly: !Nb
          }), (0, fb.jsx)("img", {
            src: Is("book_page", as.j.ITEM, Qs),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, fb.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, fb.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: ab,
              ref: Yb,
              style: {
                fontSize: `${gb}rem`,
                lineHeight: `${Bb}rem`
              },
              onKeyDown: bb => {
                Nb && bb.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: bb => {
                const cb = bb.target.value;
                Ub((0, Ws.s)(cb, "book")), mb(!0)
              },
              readOnly: !Nb
            })
          })]
        }), (0, fb.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, fb.jsx)(nb.d, {
            disabled: 0 === Ib,
            onClick: () => {
              yb(Ib - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, fb.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, fb.jsx)(nb.d, {
            disabled: 9 === Ib,
            onClick: () => {
              yb(Ib + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, fb.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, fb.jsx)(nb.d, {
            onClick: () => {
              Vb(!Nb), ub(!0)
            },
            className: "BookNavButton",
            children: Nb ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var Cs = sb(36247),
      Ns = sb(8292),
      Vs = sb(1371),
      Ls = sb(1858);

    function us(bb) {
      let {
        show: cb,
        buttons: sb
      } = bb;
      const {
        t: kb
      } = (0, vb.E)(), ab = (0, Wb.useRef)(null);
      return (0, Wb.useEffect)((() => {
        var bb, sb;
        const kb = cb ? (0, Cs.z)() : null;
        if (!kb || !(0, Vs.g)()) return;
        const Wb = (0, Cs.l)().findIndex((bb => bb.id === kb));
        (0, Ns.n)(null !== (bb = null === (sb = ab.current) || void 0 === sb ? void 0 : sb.children[Wb]) && void 0 !== bb ? bb : null)
      }), [cb]), 0 === sb.length ? null : (0, fb.jsx)("div", {
        ref: ab,
        className: "ClientGameInventoryButtons",
        onPointerDown: bb => {
          bb.stopPropagation()
        },
        onPointerUp: bb => {
          bb.stopPropagation()
        },
        children: sb.map((bb => {
          const cb = kb(bb.labelKey);
          return (0, fb.jsxs)(nb.n, {
            className: bb.className,
            disabled: bb.disabled,
            onClick: () => {
              (0, Cs.q)(bb)
            },
            ariaLabel: bb.iconOnly ? cb : void 0,
            title: bb.iconOnly ? cb : void 0,
            children: [bb.icon && (0, fb.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === bb.icon.kind && (0, fb.jsx)(Ls.d, {
                itemName: bb.icon.name,
                amount: 0
              }), "image" === bb.icon.kind && (0, fb.jsx)("img", {
                src: bb.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === bb.icon.kind && (0, fb.jsx)(Qb.b, {
                name: bb.icon.name
              })]
            }), !bb.iconOnly && cb]
          }, bb.id)
        }))
      })
    }
    var Ys = sb(36356),
      hs = sb(2593),
      gs = sb(8937),
      Bs = sb(36197),
      ts = sb(36188);
    let ys = null;
    window.setShowInventoryAdsOverride = bb => {
      ys = bb
    };
    const Ps = 24e4;
    var Ds = sb(1867);

    function Es(bb) {
      var cb;
      let {
        draggedInfo: {
          name: sb,
          attributes: kb,
          amount: Wb
        },
        toAddRef: ab
      } = bb;
      return (0, fb.jsx)("div", {
        className: "DraggedInvenItem",
        ref: ab,
        children: (0, fb.jsx)(Ls.d, {
          itemName: sb,
          amount: Wb,
          enchantmentTier: null === kb || void 0 === kb || null === (cb = kb.customAttributes) || void 0 === cb ? void 0 : cb.enchantmentTier,
          bar: (0, Ds.i)(kb)
        })
      })
    }

    function is(bb) {
      let {
        className: cb = "",
        displayInfo: sb,
        domRef: kb
      } = bb;
      return (0, fb.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${cb}`,
        ref: kb,
        children: [(0, fb.jsx)(Yb.d, {
          text: (0, Jb.ub)(sb.name, {
            fontStyle: sb.fontStyle
          })
        }), (0, fb.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, fb.jsx)(Yb.d, {
            text: sb.desc
          })
        })]
      })
    }

    function Os(bb) {
      let {
        info: cb,
        draggedInfo: sb
      } = bb;
      const kb = (0, Wb.useRef)(null);
      return (0, Wb.useLayoutEffect)((() => {
        const bb = kb.current,
          {
            left: sb,
            top: Wb
          } = function(bb, cb, sb, kb) {
            const Wb = kb.left * sb.width / 100 + 4,
              ab = sb.width - kb.right * sb.width / 100 - 4 - cb.width,
              Tb = kb.top * sb.height / 100 + 4,
              Ub = sb.height - 4 - cb.height;
            return {
              left: Math.max(Wb, Math.min(bb.x - cb.width / 2, ab)),
              top: Math.max(Tb, Math.min(bb.y - 48 - cb.height, Ub))
            }
          }({
            x: cb.initTouchX,
            y: cb.initTouchY
          }, {
            width: bb.offsetWidth,
            height: bb.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, zb.d.get("notchSize"));
        bb.style.left = `${sb}px`, bb.style.top = `${Wb}px`
      }), [cb]), (0, fb.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: kb,
        children: [(0, fb.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: sb.amount / cb.maxAmount * 100 + "%"
          }
        }), (0, fb.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [sb.amount, "/", cb.maxAmount]
        })]
      })
    }
    var Gs = sb(223);
    const Ks = (0, Wb.memo)((function(bb) {
      let {
        show: cb,
        onOpen: sb,
        onClose: kb
      } = bb;
      const ab = (0, Wb.useRef)({
          pos: null
        }),
        [Ub, Ib] = (0, Wb.useState)([0, 0, 0, 0]),
        {
          userContext: Mb
        } = (0, ub.c)();
      (0, gb.c)("ironChestOpenRequested", (bb => {
        let {
          pos: cb,
          ownerDbId: kb,
          cachedPasskey: Wb
        } = bb;
        if (ab.current.pos = cb, kb !== Mb.whamm) return null !== Wb ? (Ib(Wb), void Xb(Wb)) : void sb();
        Xb(Ub)
      })), (0, gb.c)("localEffectUpdated", (bb => {
        "Thief" === bb && kb()
      }));
      const Xb = bb => {
        const {
          pos: cb
        } = ab.current;
        Hb.gameBridge.send("openIronChest", {
          pos: cb,
          OH: bb
        })
      };
      return (0, fb.jsx)(Tb.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: kb,
        escDoesExit: !0,
        show: cb,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, fb.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, fb.jsx)(Zs, {
            OH: Ub,
            onPasskeyUpdated: Ib,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Xb(Ub)
            }
          })
        })
      })
    }));

    function Zs(bb) {
      let {
        className: cb = "",
        OH: sb,
        onPasskeyUpdated: kb,
        confirmText: Wb,
        onConfirm: ab
      } = bb;
      const {
        t: Tb
      } = (0, vb.E)();
      return (0, fb.jsxs)("div", {
        className: `${cb} IronChestPasskeyInput`,
        children: [(0, fb.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Tb("ironChest:passkeyInputTitle")
        }), (0, fb.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Gs.e.ironChestPasskeyLength).fill(0).map(((bb, cb) => (0, fb.jsx)(zs, {
            digit: sb[cb],
            onPasskeyDigitUpdated: bb => {
              const Wb = [...sb];
              Wb[cb] = bb, kb(Wb)
            }
          }, cb)))
        }), (0, fb.jsx)(nb.n, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: ab,
          children: Tb(Wb)
        })]
      })
    }

    function zs(bb) {
      let {
        digit: cb,
        onPasskeyDigitUpdated: sb
      } = bb;
      return (0, fb.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, fb.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, fb.jsx)(nb.n, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              sb(Jb.d.mod(cb + 1, 10))
            },
            children: (0, fb.jsx)(Qb.b, {
              name: "angle-up"
            })
          }), (0, fb.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: cb
          }), (0, fb.jsx)(nb.n, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              sb(Jb.d.mod(cb - 1, 10))
            },
            children: (0, fb.jsx)(Qb.b, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var qs = sb(8930),
      ds = sb(36381),
      As = sb(36180);

    function ws(bb) {
      let {
        specialItemInfo: cb,
        setHovered: sb,
        pointerDown: kb,
        pointerUp: ab,
        enchantingTablePosition: Tb,
        enchantingTableBlockName: Ub
      } = bb;
      const {
        t: Mb
      } = (0, vb.E)(), [Xb, mb] = (0, Wb.useState)(null), [lb, Qb] = (0, Wb.useState)(null), eb = (0, Ib.d)("auraPerLevel"), Cb = Math.floor((0, gb.f)("aura") / eb);
      (0, Wb.useEffect)((() => {
        if (!cb) return void mb(null);
        let bb = !0;
        return Hb.gameBridge.query("enchantingOffer", {
          slot: cb.idx,
          name: cb.name,
          blockName: Ub
        }).then((sb => {
          var kb, Wb;
          let {
            perks: ab,
            options: Tb
          } = sb;
          if (!bb) return;
          const Ub = {
            isEnchantable: ab.length > 0,
            possibleEnchantments: ab,
            options: Tb.map((bb => {
              let {
                level: cb,
                odds: sb
              } = bb;
              return {
                level: cb,
                possibilities: Object.fromEntries(sb.map(((bb, cb) => [`Tier ${cb+1}`, bb])))
              }
            })),
            isAlreadyEnchanted: ab.length > 0 && void 0 !== (null === (kb = cb.attributes) || void 0 === kb || null === (Wb = kb.customAttributes) || void 0 === Wb ? void 0 : Wb.enchantmentTier)
          };
          mb(Ub), (bb => {
            const cb = bb.options.map((bb => Object.entries(bb.possibilities).map((bb => {
              let [cb, sb] = bb;
              return {
                str: `${cb}: ${sb>0?sb<.01?sb.toPrecision(1):sb.toFixed(2):0}%\n`,
                style: {
                  color: Jb.nb[cb]
                }
              }
            }))));
            Qb(cb)
          })(Ub)
        })), () => {
          bb = !1
        }
      }), [cb, Tb, Ub]);
      const Nb = [];
      for (let Wb = 0; Wb < ds.c; Wb++) {
        const bb = null === Xb || void 0 === Xb ? void 0 : Xb.options[Wb],
          kb = !bb || bb.level > Cb;
        Nb.push((0, fb.jsx)(nb.d, {
          className: "EnchantmentButton",
          onPointerEnter: bb ? bb => null === sb || void 0 === sb ? void 0 : sb()(!0, {
            name: "",
            desc: lb[Wb]
          }, bb) : void 0,
          onPointerLeave: bb ? () => null === sb || void 0 === sb ? void 0 : sb()(!1) : void 0,
          onClick: kb ? void 0 : () => {
            Hb.gameBridge.send("enchantItem", {
              slot: cb.idx,
              level: bb.level,
              tablePos: Tb
            }), mb(null)
          },
          disabled: kb,
          children: bb ? (0, fb.jsxs)(fb.Fragment, {
            children: [(0, fb.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, fb.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Mb("enchantments:cost"), ": "]
              }), " ", Mb("enchantments:levels", {
                level: bb.level
              })]
            }), (0, fb.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, fb.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, fb.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Mb("enchantments:tier")
                }), Object.entries(bb.possibilities).map((bb => {
                  let [cb, sb] = bb;
                  return 0 === sb ? null : (0, fb.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Jb.nb[cb]
                    },
                    children: cb
                  }, cb)
                }))]
              }), (0, fb.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, fb.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Mb("enchantments:odds")
                }), Object.entries(bb.possibilities).map((bb => {
                  let [cb, sb] = bb;
                  return 0 === sb ? null : (0, fb.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Jb.nb[cb]
                    },
                    children: [sb > 0 && sb < .1 ? "<0.1" : sb.toFixed(0 < sb && sb < .95 ? 1 : 0), "%"]
                  }, cb)
                }))]
              })]
            })]
          }) : !1 === (null === Xb || void 0 === Xb ? void 0 : Xb.isEnchantable) ? (0, fb.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Mb("enchantments:notEnchantable")
          }) : (0, fb.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Mb("enchantments:enterItem")
          })
        }, Wb))
      }
      return (0, fb.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, fb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ub
        }), (0, fb.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, fb.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, fb.jsx)(As.b, {
              idx: ts.e,
              setHovered: bb => {
                null === sb || void 0 === sb || sb(ts.e)(bb)
              },
              pointerDown: kb,
              pointerUp: ab,
              draggedInfo: null,
              specialItemInfo: cb,
              variation: "Enchanting Table"
            }), Xb && Xb.possibleEnchantments.length > 0 && (0, fb.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, fb.jsx)("h2", {
                children: "Possible Perks:"
              }), Xb.possibleEnchantments.map((bb => (0, fb.jsxs)(Wb.Fragment, {
                children: [(0, fb.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, fb.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, fb.jsx)(Ls.d, {
                      itemName: `${bb} Enchantment`,
                      amount: 1
                    })
                  }), (0, fb.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: bb
                  })]
                }), (0, fb.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Mb((0, qs.n)(bb).translationKey)
                })]
              }, bb)))]
            })]
          }), (0, fb.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Xb && Xb.isAlreadyEnchanted && (0, fb.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Mb("enchantments:alreadyEnchanted")
            }), Nb]
          })]
        })]
      })
    }
    var rs = sb(36388);

    function os(bb) {
      var cb;
      let {
        specialItemInfo: sb,
        setSpecialItemInfo: kb,
        setHovered: ab,
        pointerDown: Tb,
        pointerUp: Ub
      } = bb;
      const {
        t: Ib
      } = (0, vb.E)(), Mb = (0, gb.e)("inventory", (bb => bb.freeSlots)), [Xb, mb] = (0, Wb.useState)(null);
      (0, Wb.useEffect)((() => {
        if (sb) {
          const bb = (0, rs.e)(sb.name, sb.amount);
          mb({
            salvageable: !!bb,
            produces: bb
          })
        } else mb(null)
      }), [sb, null === sb || void 0 === sb ? void 0 : sb.name, null === sb || void 0 === sb ? void 0 : sb.amount]);
      const lb = !!sb && !(null === Xb || void 0 === Xb || !Xb.salvageable) && !(null !== (cb = Xb.produces) && void 0 !== cb && cb.some((bb => {
        let {
          amt: cb
        } = bb;
        return cb < 1
      })));
      return (0, fb.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, fb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ib("item:salvagingTable")
        }), (0, fb.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, fb.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, fb.jsx)(As.b, {
              idx: ts.e,
              setHovered: bb => {
                null === ab || void 0 === ab || ab(ts.e)(bb)
              },
              pointerDown: Tb,
              pointerUp: Ub,
              draggedInfo: null,
              specialItemInfo: sb,
              variation: "Salvaging Table"
            })
          }), (0, fb.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, fb.jsx)(nb.d, {
              className: "SalvageButton",
              onClick: lb ? () => {
                const {
                  idx: bb,
                  name: cb,
                  amount: Wb
                } = sb;
                Hb.gameBridge.send("salvageItem", {
                  slot: bb,
                  name: cb,
                  amount: Wb
                }) && (mb(null), kb(null))
              } : void 0,
              disabled: !lb,
              children: Xb ? Xb.salvageable ? Xb.produces.some((bb => {
                let {
                  amt: cb
                } = bb;
                return cb < 1
              })) ? (0, fb.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, fb.jsx)("div", {
                  className: "SalvageText Error",
                  children: Ib("salvagingTable:notEnoughResources")
                })
              }) : Mb < Xb.produces.length ? (0, fb.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, fb.jsx)("div", {
                  className: "SalvageText Error",
                  children: Ib("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, fb.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, fb.jsx)("div", {
                  className: "SalvageText",
                  children: Ib("salvagingTable:salvage")
                }), (0, fb.jsx)("div", {
                  className: "SalvageIcons",
                  children: Xb.produces.map(((bb, cb) => {
                    let {
                      item: sb,
                      amt: kb
                    } = bb;
                    return (0, fb.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: sb,
                        amount: Math.floor(kb)
                      })
                    }, cb)
                  }))
                })]
              }) : (0, fb.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, fb.jsx)("div", {
                  className: "SalvageText Error",
                  children: Ib("salvagingTable:unsalvageable")
                })
              }) : (0, fb.jsx)(fb.Fragment, {})
            })
          })]
        })]
      })
    }
    var Ss = sb(232),
      Rs = sb(9017),
      vs = sb(2546),
      Fs = sb(8304),
      xs = sb(8301),
      ps = sb(1651),
      bk = sb(1934),
      ck = sb(1381),
      sk = sb(2004);

    function kk(bb, cb, sb) {
      const kb = bb.trim().toLowerCase();
      if ("" === kb) return 0;
      let Wb = null;
      for (const ab of cb) {
        const bb = ab.toLowerCase().indexOf(kb);
        if (0 === bb) return 0;
        bb > 0 && (Wb = 1)
      }
      if (null !== Wb) return Wb;
      for (const ab of sb)
        if (ab.toLowerCase().includes(kb)) return 2;
      return null
    }

    function Wk(bb) {
      return bb.map((bb => {
        var cb;
        return bb ? {
          name: bb.name,
          amount: null !== (cb = bb.amount) && void 0 !== cb ? cb : 1
        } : null
      }))
    }

    function ak(bb) {
      return bb < 1e3 ? `${bb}` : bb < 1e4 ? Math.floor(bb / 100) / 10 + "k" : `${Math.floor(bb/1e3)}k`
    }
    var Tk = sb(36394);
    const Uk = nb.d,
      Ik = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      Hk = () => {
        const bb = (0, ck.g)();
        return bb ? bb.getPadRepeatTiming(Ik) : Ik
      };

    function fk(bb, cb, sb) {
      var kb, Wb;
      const ab = (0, gs.v)(cb, bb);
      let Tb = null === (kb = cb[bb]) || void 0 === kb ? void 0 : kb.description;
      if (sb && (null === (Wb = (0, Tk.h)().get(bb)) || void 0 === Wb || !Wb.hideIngredients)) {
        Tb ? (Tb = (0, Jb.ub)(Tb), Tb.push({
          str: "\n"
        })) : Tb = [], Tb.push({
          str: "\n"
        }), Tb.push({
          str: "Can be crafted from:\n"
        });
        for (const bb of sb) "string" === typeof bb && (Tb.push({
          icon: bb,
          style: {
            fontSize: "1.5em"
          }
        }), Tb.push({
          str: " "
        }), Tb.push(...(0, Jb.ub)((0, gs.v)(cb, bb))), Tb.push({
          str: "\n"
        }))
      }
      return {
        name: ab,
        desc: Tb
      }
    }

    function Mk(bb) {
      let {
        name: cb,
        Bf: sb
      } = bb;
      return `${cb}_${sb}`
    }

    function Xk(bb) {
      var cb;
      let {
        onClick: sb,
        itemName: kb,
        recipeId: ab,
        isSelected: Tb,
        haveIngredients: Ub,
        craftable: Ib,
        setHovered: Hb,
        padActions: Mb,
        marked: Xb,
        lock: nb,
        itemInfo: mb
      } = bb;
      const lb = (0, Wb.useRef)(null);
      return (0, Fs.f)(lb, {
        press: bb => !Ub || "secondary" === bb && !Ib ? (Mb.refuse(), !1) : "primary" === bb ? (Mb.choose(), !0) : Mb.craft(),
        release: Mb.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, fb.jsxs)("div", {
        ref: lb,
        className: nc()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Ub && !nb,
          CraftableItemMarked: Xb,
          CraftableItemLocked: void 0 !== nb,
          CraftableItemLockedFar: (null !== (cb = null === nb || void 0 === nb ? void 0 : nb.stepsAway) && void 0 !== cb ? cb : 1) > 1
        }),
        "data-recipe-key": ab,
        "data-pad-inventory-default": Tb ? "" : void 0,
        onClick: sb,
        style: {
          cursor: Tb ? null : "pointer"
        },
        onPointerEnter: bb => {
          null === Hb || void 0 === Hb || Hb(!0, fk(kb, mb)), !Tb && (0, ps.p)(bb.nativeEvent) && (0, xs.e)() && sb()
        },
        onPointerLeave: () => {
          null === Hb || void 0 === Hb || Hb(!1)
        },
        children: [(0, fb.jsx)(Ls.d, {
          itemName: kb,
          amount: 1
        }), Xb && (0, fb.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), nb && (0, fb.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, fb.jsx)(Qb.b, {
            name: "lock"
          }), (0, fb.jsx)(Yb.d, {
            text: nb.tag
          })]
        })]
      })
    }

    function nk(bb) {
      let {
        idx: cb,
        status: sb,
        shownItem: kb,
        dim: ab,
        onHoverStart: Tb,
        onHoverEnd: Ub,
        onPadBack: Ib
      } = bb;
      const Hb = (0, Wb.useRef)(null);
      (0, Fs.f)(Hb, {
        press: () => !1,
        back: Ib,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Mb = sb.need > 0 ? Math.min(sb.have / sb.need, 1) : 1;
      return (0, fb.jsxs)("div", {
        ref: Hb,
        className: nc()("CupTile", {
          Short: sb.missing > 0
        }),
        style: {
          width: ab,
          height: ab
        },
        "data-craft-ingredient": cb,
        onPointerEnter: Tb,
        onPointerLeave: Ub,
        children: [(0, fb.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Mb})`
          }
        }), (0, fb.jsx)(Ls.d, {
          itemName: kb,
          amount: 0
        }), (0, fb.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [ak(sb.have), "/", ak(sb.need)]
        })]
      })
    }

    function mk(bb) {
      var cb, sb, kb, ab, Tb;
      let {
        show: Ub,
        recipeItem: {
          name: Ib,
          Bf: Mb,
          requires: Xb,
          produces: nb,
          haveIngredients: mb
        },
        detail: lb,
        onCraft: Qb,
        setHovered: eb,
        craftButtonRef: Cb,
        onPadBack: Nb,
        showPadShortcut: Vb,
        refusedCount: Lb,
        lock: ub,
        itemInfo: hb
      } = bb;
      const {
        t: Jb
      } = (0, vb.E)(), gb = null !== lb && !lb.roomForOne, Bb = null !== (cb = null === lb || void 0 === lb ? void 0 : lb.craftAllTimes) && void 0 !== cb ? cb : 0, tb = function(bb, cb) {
        return bb.map((bb => {
          let {
            items: sb,
            amt: kb
          } = bb, Wb = 0;
          const ab = [];
          for (const Tb of sb) {
            const bb = cb(Tb);
            Wb += bb, bb > 0 && ab.push(Tb)
          }
          return 0 === ab.length && ab.push(sb[0]), {
            shownItems: ab,
            need: kb,
            have: Wb,
            missing: Math.max(kb - Wb, 0)
          }
        }))
      }(Xb, (bb => {
        var cb;
        return null !== (cb = null === lb || void 0 === lb ? void 0 : lb.amounts[bb]) && void 0 !== cb ? cb : 0
      }));
      let yb = "4rem",
        Pb = 4;
      3 === Xb.length || 4 === Xb.length ? yb = "3.75rem" : Xb.length >= 5 && (yb = "3rem"), 4 === Xb.length ? Pb = 2 : Xb.length <= 6 && (Pb = 3);
      const Db = `calc(${Pb} * ${yb} + ${Pb-1} * 0.4rem + 1px)`,
        Eb = (0, Wb.useRef)(null),
        ib = (0, Wb.useRef)(null);
      (0, Wb.useLayoutEffect)((() => {
        Eb.current.scrollTop = 0
      }), [Ib, Mb]);
      const Ob = (0, Wb.useRef)(Lb);
      (0, Wb.useEffect)((() => {
        if (Lb === Ob.current) return;
        Ob.current = Lb;
        const bb = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const kb of null !== (cb = null === (sb = Eb.current) || void 0 === sb ? void 0 : sb.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== cb ? cb : []) {
          var cb, sb;
          kb.animate(bb, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Lb]);
      const Gb = (bb, cb, sb) => {
          var kb;
          if ((0, Tk.h)().has(Ib)) return void(sb && clearInterval(Kb.current));
          const Wb = null !== (kb = null === lb || void 0 === lb ? void 0 : lb.resultStackable) && void 0 !== kb && kb,
            ab = Wk(Hb.gameBridge.latest("inventory").player),
            {
              tf: Tb,
              TM: Ub,
              amountAddedToSlot: fb
            } = Hb.gameBridge.send("craftRecipe", {
              name: Ib,
              Bf: Mb,
              times: cb || bb && Wb ? null : 1
            });
          if (Tb > 0) {
            const cb = [],
              kb = new Set(Xb.flatMap((bb => {
                let {
                  items: cb
                } = bb;
                return cb
              }))),
              Tb = function(bb, cb, sb) {
                const kb = [];
                for (let Wb = 0; Wb < bb.length; Wb++) {
                  const ab = bb[Wb];
                  if (!ab || !sb.has(ab.name)) continue;
                  const Tb = cb[Wb],
                    Ub = (null === Tb || void 0 === Tb ? void 0 : Tb.name) === ab.name ? Tb.amount : 0;
                  Ub < ab.amount && kb.push({
                    idx: Wb,
                    itemName: ab.name,
                    amount: ab.amount - Ub
                  })
                }
                return kb
              }(ab, Wk(Hb.gameBridge.latest("inventory").player), kb).slice(0, 12),
              Mb = sb ? 0 : Math.min(50, 400 / Tb.length),
              mb = sb ? 220 : 320;
            for (const bb of Tb) {
              var nb;
              const sb = Xb.findIndex((cb => {
                  let {
                    items: sb
                  } = cb;
                  return sb.includes(bb.itemName)
                })),
                kb = null === (nb = Eb.current) || void 0 === nb ? void 0 : nb.querySelector(`[data-craft-ingredient="${sb}"]`),
                Wb = (0, gs.g)(bb.idx);
              kb && Wb && cb.push({
                kind: "ingredient",
                itemName: bb.itemName,
                amount: bb.amount,
                TM: bb.idx,
                from: Wb,
                to: (0, gs.g)(kb),
                delayMs: Math.round(cb.length * Mb),
                durationMs: mb
              })
            }
            let lb;
            if (null !== Ub && fb > 0 && ib.current) {
              const bb = cb.length > 0 ? cb[cb.length - 1].delayMs + .6 * mb : 0;
              lb = {
                itemName: Ib,
                amount: fb,
                TM: Ub,
                from: (0, gs.g)(ib.current),
                delayMs: Math.round(bb)
              }
            }
            Qb(lb, bb && !Wb ? Ub : null, cb), Ys.c.play("wood1", .5).rate(1.75)
          }
        },
        Kb = (0, Wb.useRef)(null);
      (0, Wb.useEffect)((() => () => {
        clearInterval(Kb.current)
      }), []);
      const Zb = (bb, cb) => {
          Gb(bb, !1, !1), clearInterval(Kb.current), cb && (Kb.current = setTimeout((() => {
            Kb.current = setInterval((() => {
              Gb(bb, !1, !0)
            }), cb.intervalMs)
          }), cb.initialDelayMs))
        },
        zb = () => {
          clearInterval(Kb.current)
        },
        qb = !mb || gb || Boolean(ub),
        db = (0, Wb.useRef)(null),
        Ab = null !== (sb = null === (kb = (0, sk.c)()) || void 0 === kb ? void 0 : kb.hideButtonHints) && void 0 !== sb && sb,
        wb = null !== (ab = null === (Tb = (0, ck.g)()) || void 0 === Tb ? void 0 : Tb.getBoundButton("inventorySecondary")) && void 0 !== ab ? ab : null,
        rb = () => !qb && (Gb(!1, !0, !1), !0);
      (0, Fs.f)(Cb, {
        press: bb => "secondary" === bb ? rb() : !qb && (Zb(!1, Hk()), !0),
        release: zb,
        back: Nb,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, Fs.f)(db, {
        press: rb,
        back: Nb,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [ob, Sb] = (0, Wb.useState)(0), [Rb, Fb] = (0, Wb.useState)(null);
      (0, Wb.useEffect)((() => {
        if (!0 === Ub) {
          Sb(0);
          const bb = setInterval((() => {
            Sb((bb => bb + 1))
          }), 1e3);
          return () => {
            clearInterval(bb)
          }
        }
        return () => {}
      }), [Ub]);
      const xb = null === lb || void 0 === lb ? void 0 : lb.ingredientsCraftedFrom,
        jb = (0, Wb.useRef)(eb);
      (0, Wb.useEffect)((() => {
        jb.current = eb
      }), [eb]);
      const pb = !(null === ub || void 0 === ub || !ub.hideIngredients);
      (0, Wb.useEffect)((() => {
        var bb, cb;
        if (!Rb) return;
        if (pb) return Fb(null), void(null === (cb = jb.current) || void 0 === cb || cb.call(jb, !1));
        const sb = Rb[ob % Rb.length];
        null === (bb = jb.current) || void 0 === bb || bb.call(jb, !0, fk(sb, hb, null === xb || void 0 === xb ? void 0 : xb[sb]))
      }), [Rb, ob, hb, xb, pb]);
      const bc = !!ub,
        cc = (0, Wb.useRef)(!1);
      (0, Wb.useEffect)((() => {
        var bb;
        bc && (clearInterval(Kb.current), pb && cc.current && (cc.current = !1, null === (bb = jb.current) || void 0 === bb || bb.call(jb, !1)))
      }), [bc, pb]);
      const sc = (0, gs.v)(hb, Ib);
      return (0, fb.jsxs)("div", {
        ref: Eb,
        className: "CraftableInfo SmallTextBold",
        children: [(0, fb.jsx)("div", {
          className: "CraftableHeader",
          children: (0, fb.jsx)(Yb.d, {
            text: sc
          })
        }), !pb && (0, fb.jsx)("div", {
          className: nc()("CraftableIngredients", {
            Compact: Xb.length >= 5
          }),
          style: {
            maxWidth: Db
          },
          children: tb.map(((bb, cb) => {
            const sb = bb.shownItems[ob % bb.shownItems.length];
            return (0, fb.jsx)(nk, {
              idx: cb,
              status: bb,
              shownItem: sb,
              dim: yb,
              onHoverStart: () => {
                Fb(bb.shownItems)
              },
              onHoverEnd: () => {
                Fb(null), null === eb || void 0 === eb || eb(!1)
              },
              onPadBack: Nb
            }, cb)
          }))
        }), ub && (0, fb.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, fb.jsx)(Yb.d, {
            text: ub.reason
          })
        }), !ub && (!mb || gb) && (0, fb.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!mb && "Missing ingredients", (0, fb.jsx)("br", {}), gb && "Inventory is full"]
        }), !pb && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsxs)(Uk, {
            ref: Cb,
            className: "DoCraftButton",
            onPointerDown: bb => {
              Zb((0, gs.z)(bb), (0, ps.p)(bb.nativeEvent) ? Hk() : Ik)
            },
            onPointerUp: zb,
            onPointerLeave: zb,
            disabled: qb,
            children: [Vb && wb && !qb && !Ab && (0, fb.jsx)(bk.b, {
              className: "CraftShortcutGlyph",
              glyph: wb
            }), (0, fb.jsx)("div", {
              ref: ib,
              className: "DoCraftItem",
              onPointerEnter: () => {
                cc.current = !0, null === eb || void 0 === eb || eb(!0, fk(Ib, hb))
              },
              onPointerLeave: () => {
                cc.current = !1, null === eb || void 0 === eb || eb(!1)
              },
              children: (0, fb.jsx)(Ls.d, {
                itemName: Ib,
                amount: nb
              })
            })]
          }), (0, fb.jsxs)(Uk, {
            ref: db,
            className: "DoCraftAllButton",
            onPointerDown: bb => {
              Gb((0, gs.z)(bb), !0, !1)
            },
            disabled: qb,
            children: [(0, fb.jsx)("span", {
              className: "CraftAllLabel",
              children: Jb("general:craftAll")
            }), Bb > 0 && (0, fb.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", ak(Bb)]
            })]
          })]
        })]
      })
    }

    function lk(bb) {
      let {
        selectedIdx: cb,
        hidden: sb
      } = bb;
      const kb = (0, Vs.l)(),
        ab = (0, Wb.useRef)(null);
      return (0, Wb.useLayoutEffect)((() => {
        const bb = ab.current,
          kb = null === bb || void 0 === bb ? void 0 : bb.parentElement;
        if (!kb || !bb) return;
        const Wb = kb.querySelector(".CraftableItems"),
          Tb = () => {
            var ab, Tb;
            if (sb) return void(bb.style.opacity = "0");
            const Ub = null === Wb || void 0 === Wb ? void 0 : Wb.children[cb],
              Ib = null === (ab = null !== (Tb = null === Ub || void 0 === Ub ? void 0 : Ub.querySelector(".InvenItem")) && void 0 !== Tb ? Tb : Ub) || void 0 === ab ? void 0 : ab.getBoundingClientRect();
            if (!Ib || 0 === Ib.width) return void(bb.style.opacity = "0");
            const Hb = kb.getBoundingClientRect();
            bb.style.opacity = "1", bb.style.width = `${Ib.width}px`, bb.style.height = `${Ib.height}px`, bb.style.transform = `translate(${Ib.left-Hb.left+kb.scrollLeft}px, ${Ib.top-Hb.top+kb.scrollTop}px)`
          };
        Tb();
        const Ub = new MutationObserver(Tb),
          Ib = new ResizeObserver(Tb);
        return Ib.observe(kb), Wb && (Ub.observe(Wb, {
          childList: !0,
          subtree: !0
        }), Ib.observe(Wb)), () => {
          Ub.disconnect(), Ib.disconnect()
        }
      }), [cb, sb]), (0, fb.jsx)("div", {
        ref: ab,
        className: nc()("SelectionReticle", {
          Secondary: kb
        })
      })
    }

    function Qk(bb, cb, sb) {
      return bb ? (0, Ss.e)(Rs.g, bb) ? ek(bb, cb, sb) : bb : sb("classicGame:handCrafting")
    }

    function ek(bb, cb, sb) {
      var kb;
      const Wb = null === (kb = cb[bb]) || void 0 === kb ? void 0 : kb.displayName;
      if ("string" === typeof Wb) return sb(Wb);
      const ab = Hb.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Wb) ? Wb.map((bb => {
        if ("string" === typeof bb) return bb;
        if ("translationKey" in bb) return sb(bb.translationKey, (0, vb.p)(bb.params, ab));
        if ("str" in bb) {
          if ("string" === typeof bb.str) return bb.str;
          if ("translationKey" in bb.str) return sb(bb.str.translationKey, (0, vb.p)(bb.str.params, ab))
        }
        return ""
      })).join("") : Wb && "translationKey" in Wb ? sb(Wb.translationKey, (0, vb.p)(Wb.params, ab)) : bb
    }

    function Ck(bb, cb) {
      return bb === cb || null !== bb && null !== cb && bb.name === cb.name && bb.Bf === cb.Bf
    }

    function Nk(bb) {
      var cb, sb, kb;
      let {
        show: ab,
        onCraft: Tb,
        dispatchSelectedCraftable: Ub,
        selectedCraftable: Ib,
        craftingStation: Mb,
        setHovered: Xb
      } = bb;
      const {
        t: nb
      } = (0, vb.E)(), [mb, lb] = (0, Wb.useState)(""), [Qb, eb] = (0, Wb.useState)(0);
      (0, Wb.useEffect)((() => {
        ab || (lb(""), eb((bb => bb + 1)))
      }), [ab]);
      const [Cb, Nb] = (0, Wb.useState)(Mb);
      Cb !== Mb && (Nb(Mb), "" !== mb && (lb(""), eb((bb => bb + 1))));
      const Vb = (0, Wb.useRef)(null),
        Lb = (0, Wb.useRef)(null),
        ub = (0, xs.g)(),
        Yb = ub.showing && "recipe" === ub.kind,
        [hb, Jb] = (0, Wb.useState)(0),
        Bb = null !== Mb && void 0 !== Mb ? Mb : null,
        tb = (0, Wb.useRef)(null),
        yb = bb => {
          return !((cb = tb.current) === (sb = bb) || null !== cb && null !== sb && cb.station === sb.station && Ck(cb.recipe, sb.recipe)) && (tb.current = bb, Hb.gameBridge.send("focusCrafting", bb), !0);
          var cb, sb
        };
      yb(ab ? {
        station: Bb,
        recipe: (null === (cb = tb.current) || void 0 === cb ? void 0 : cb.station) === Bb ? tb.current.recipe : null
      } : null);
      let Pb = Hb.gameBridge.latest("crafting");
      const Db = (0, gb.f)("itemInfo"),
        Eb = "" !== mb.trim(),
        ib = (0, Tk.B)(),
        Ob = (0, Tk.A)(),
        Gb = (0, Tk.C)(),
        Kb = function(bb, cb) {
          const [sb, kb] = (0, Wb.useState)(!1);
          (0, Wb.useEffect)((() => {
            if (!bb) return void kb(!1);
            const cb = setTimeout((() => {
              kb(!0)
            }), 0);
            return () => {
              clearTimeout(cb)
            }
          }), [bb]);
          const ab = bb && sb,
            Tb = (0, Wb.useRef)({
              station: cb,
              at: new Map
            });
          return (Tb.current.station !== cb || !ab && Tb.current.at.size > 0) && (Tb.current = {
            station: cb,
            at: new Map
          }), ab ? Tb.current.at : null
        }(ab, Mb);
      let Zb = Pb.recipes.filter((bb => {
        let {
          listed: cb
        } = bb;
        return cb
      }));
      if (Eb) {
        const bb = [];
        for (const cb of Pb.recipes) {
          var zb;
          const sb = null !== (zb = Ob.get(cb.name)) && void 0 !== zb && zb.hideIngredients ? [] : cb.requires.flatMap((bb => {
              let {
                items: cb
              } = bb;
              return cb.flatMap((bb => [bb, ek(bb, Db, nb)]))
            })),
            kb = kk(mb, [cb.name, ek(cb.name, Db, nb)], sb);
          null !== kb && bb.push({
            item: cb,
            rank: kb
          })
        }
        bb.sort(((bb, cb) => bb.rank - cb.rank)), Zb = bb.map((bb => {
          let {
            item: cb
          } = bb;
          return cb
        }))
      } else {
        if (Kb && Kb.size > 0) {
          const bb = Pb.recipes.filter((bb => !bb.listed && Kb.has(Mk(bb))));
          Zb = Zb.concat(bb)
        }
        Zb = (0, Tk.l)(Zb, ib, Ob, Gb), Kb && (Zb = (0, Tk.j)(Zb, Kb, Mk))
      }
      const qb = bb => Zb.find((cb => Mk(cb) === bb)),
        db = `${Mb}|${mb}`,
        [Ab, wb] = (0, Wb.useState)(null),
        rb = (null === Ab || void 0 === Ab ? void 0 : Ab.context) === db ? Ab.key : null,
        ob = Ib ? Mk(Ib) : null,
        Sb = null !== (sb = null !== (kb = qb(ob)) && void 0 !== kb ? kb : qb(rb)) && void 0 !== sb ? sb : Zb[0],
        Rb = Sb ? Mk(Sb) : null,
        Fb = Sb ? {
          name: Sb.name,
          Bf: Sb.Bf
        } : null;
      ab && yb({
        station: Bb,
        recipe: Fb
      }) && (Pb = Hb.gameBridge.latest("crafting")), Rb !== ob && Rb !== rb && wb(Rb ? {
        context: db,
        key: Rb
      } : null), (0, Wb.useEffect)((() => () => {
        tb.current = null, Hb.gameBridge.send("focusCrafting", null)
      }), []);
      const xb = Ck(Pb.detail, Fb) ? Pb.detail : null,
        jb = null !== xb && !xb.roomForOne,
        pb = Zb.findIndex((bb => Mk(bb) === Mk(Sb))),
        bc = () => Lb.current ? (0, Fs.e)(Lb.current) : null,
        cc = (0, Wb.useRef)(null),
        sc = (0, Wb.useRef)(0);
      sc.current++;
      const kc = sc.current;
      (0, Wb.useEffect)((() => {
        const bb = cc.current;
        if (!bb || kc <= bb.afterRender) return;
        if (cc.current = null, bb.key !== Rb) return;
        const cb = bc();
        var sb;
        null !== cb && void 0 !== cb && cb.press("primary") && !bb.qU && (null === (sb = cb.release) || void 0 === sb || sb.call(cb))
      }));
      const Wc = bb => {
          const cb = {
            name: bb.name,
            Bf: bb.Bf
          };
          return {
            choose: () => {
              Ub(cb), (0, Ns.n)(Lb.current)
            },
            craft: () => {
              var bb, sb;
              return Ub(cb), Mk(cb) !== Mk(Sb) ? (cc.current = {
                key: Mk(cb),
                qU: !0,
                afterRender: sc.current
              }, !0) : null !== (bb = null === (sb = bc()) || void 0 === sb ? void 0 : sb.press("primary")) && void 0 !== bb && bb
            },
            stopCraft: () => {
              var bb, cb;
              cc.current ? cc.current.qU = !1 : null === (bb = bc()) || void 0 === bb || null === (cb = bb.release) || void 0 === cb || cb.call(bb)
            },
            refuse: () => {
              Mk(cb) !== Mk(Sb) && Ub(cb), Jb((bb => bb + 1))
            }
          }
        },
        ac = () => {
          var bb, cb, sb;
          (0, Ns.n)(null !== (bb = null === (cb = Vb.current) || void 0 === cb || null === (sb = cb.querySelector(".CraftableItems")) || void 0 === sb ? void 0 : sb.children[pb]) && void 0 !== bb ? bb : null)
        },
        Tc = Zb.map(Mk).join("|"),
        Uc = (0, Wb.useRef)(Tc);
      return (0, Wb.useEffect)((() => {
        Uc.current !== Tc && (Uc.current = Tc, Yb && pb >= 0 && (0, xs.e)() && ac())
      })), (0, fb.jsxs)("div", {
        className: "Craftables",
        children: [(0, fb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Qk(Mb, Db, nb)
        }), (0, fb.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, fb.jsx)(gc.c, {
            className: "CraftingSearch",
            placeholderText: nb("general:searchRecipes"),
            defaultValue: mb,
            maxLength: 100,
            onValueChange: bb => {
              lb(bb)
            },
            blurOnEnter: !0
          }, Qb), 0 === Zb.length && Eb && (0, fb.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: nb("general:noRecipesMatchSearch")
          }), Zb.length > 0 && (0, fb.jsxs)(fb.Fragment, {
            children: [(0, fb.jsxs)("div", {
              ref: Vb,
              className: "CraftablesLeftSide",
              children: [(0, fb.jsx)(vs.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Zb.map((bb => {
                  let {
                    name: cb,
                    Bf: sb,
                    haveIngredients: kb
                  } = bb;
                  return {
                    name: cb,
                    Bf: sb,
                    haveIngredients: kb
                  }
                })))],
                observing: ab,
                children: Zb.map((bb => {
                  const {
                    name: cb,
                    Bf: sb,
                    haveIngredients: kb
                  } = bb, Wb = Mk(bb);
                  return (0, fb.jsx)(Xk, {
                    recipeId: Wb,
                    itemName: cb,
                    onClick: () => {
                      Ub({
                        name: cb,
                        Bf: sb
                      })
                    },
                    isSelected: Mk(Sb) === Wb,
                    haveIngredients: kb,
                    craftable: kb && !Ob.has(cb) && !(Mk(Sb) === Wb && jb),
                    setHovered: Xb,
                    padActions: Wc(bb),
                    marked: ib.has(cb),
                    lock: Ob.get(cb),
                    itemInfo: Db
                  }, Wb)
                }))
              }), (0, fb.jsx)(lk, {
                selectedIdx: pb,
                hidden: Yb && ub.steppingSlots
              })]
            }), (0, fb.jsx)(mk, {
              show: ab,
              recipeItem: Sb,
              detail: xb,
              onCraft: Tb,
              setHovered: Xb,
              craftButtonRef: Lb,
              onPadBack: ac,
              showPadShortcut: Yb,
              refusedCount: hb,
              lock: Ob.get(Sb.name),
              itemInfo: Db
            })]
          })]
        })]
      })
    }
    var Vk = sb(8942),
      Lk = sb(3050),
      uk = sb(2046),
      Yk = sb(8288);
    class hk {
      constructor(bb, cb, sb) {
        this.commit = bb, this.delayMs = cb, this.defers = sb, this.pending = null, this.timer = void 0, this.qU = !1, this.flush = () => {
          clearTimeout(this.timer);
          const bb = this.pending;
          null !== bb && (this.pending = null, this.commit(bb))
        }
      }
      type(bb) {
        this.pending = bb, clearTimeout(this.timer), this.qU || this.defers() ? this.qU || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(bb) {
        var cb;
        return null !== (cb = this.pending) && void 0 !== cb ? cb : bb
      }
      isHeld() {
        return this.qU
      }
      setHeld(bb) {
        this.qU = bb, bb || this.flush()
      }
    }

    function Jk(bb) {
      return null === bb ? "creativeInventory:all" : `creativeInventory:${bb}`
    }

    function gk(bb) {
      let {
        category: cb
      } = bb;
      return null === cb ? (0, fb.jsx)(Qb.b, {
        name: "layer-group"
      }) : (0, fb.jsx)(Ls.d, {
        itemName: Vk.creativeItemCategoryIcons[cb],
        amount: 0
      })
    }

    function Bk(bb) {
      let {
        labelKey: cb,
        isSelected: sb,
        onSelect: kb,
        setHovered: Wb,
        children: ab
      } = bb;
      return (0, fb.jsx)("div", {
        className: nc()("CreativeCategoryTab", {
          Selected: sb
        }),
        onClick: kb,
        onPointerEnter: bb => {
          (0, gs.u)(bb) || Wb(!0, {
            name: {
              translationKey: cb
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Wb(!1)
        },
        children: ab
      })
    }

    function tk(bb) {
      let {
        categories: cb,
        selectedCategory: sb,
        onSelect: kb
      } = bb;
      const {
        t: ab
      } = (0, vb.E)(), [Tb, Ub] = (0, Wb.useState)(!1), Ib = (0, Wb.useRef)(null), Hb = (0, Wb.useCallback)((() => {
        Ub(!1)
      }), []);
      return (0, uk.c)(Ib, Hb), (0, fb.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Ib,
        children: [(0, fb.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Ub(!Tb)
          },
          children: [(0, fb.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, fb.jsx)(gk, {
              category: sb
            })
          }), (0, fb.jsx)("span", {
            children: ab(Jk(sb))
          }), (0, fb.jsx)(Qb.b, {
            name: Tb ? "caret-up" : "caret-down"
          })]
        }), Tb && (0, fb.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: cb.map((bb => (0, fb.jsxs)("div", {
            className: nc()("CreativeCategoryDropdownOption", {
              Selected: sb === bb
            }),
            onClick: () => {
              kb(bb), Ub(!1)
            },
            children: [(0, fb.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, fb.jsx)(gk, {
                category: bb
              })
            }), (0, fb.jsx)("span", {
              children: ab(Jk(bb))
            })]
          }, null !== bb && void 0 !== bb ? bb : "all")))
        })]
      })
    }
    const yk = (0, Wb.memo)((function(bb) {
      let {
        creativeScrollDiv: cb,
        playerInvenNumSlots: sb,
        getSetHoveringForIdx: kb,
        getPointerDownForIdx: ab,
        getPointerUpForIdx: Tb,
        creativeSearchVal: Ub,
        setCreativeSearchVal: Hb,
        creativeCategory: Mb,
        setCreativeCategory: Xb,
        show: nb
      } = bb;
      const {
        t: mb
      } = (0, vb.E)(), lb = (0, gb.f)("creativeVisibility"), {
        userContext: eb
      } = (0, ub.c)(), Cb = (0, Ib.d)("canUseDevCreativeItems"), Nb = eb.playerHasRank("developer") || !!Cb, Vb = (0, Wb.useMemo)((() => Dk("", lb, Nb)), [lb, Nb]), Lb = (0, Wb.useMemo)((() => {
        const bb = (0, Vk.creativeItemIds)(),
          cb = new Set(Vb.map((cb => (0, Vk.creativeCategoryOf)(bb[cb]))));
        return Vk.creativeItemCategories.filter((bb => cb.has(bb)))
      }), [Vb]), Yb = null !== Mb && Lb.includes(Mb) ? Mb : null, Jb = (0, Wb.useMemo)((() => "" === Ub ? Vb : Dk(Ub, lb, Nb)), [Vb, Ub, lb, Nb]), Bb = (0, Wb.useMemo)((() => {
        const bb = (0, Vk.creativeItemIds)();
        return null !== Yb ? Jb.filter((cb => (0, Vk.creativeCategoryOf)(bb[cb]) === Yb)) : "" === Ub ? Jb.filter((cb => !(0, Vk.showOnlyInCreativeCategory)(bb[cb]))) : Jb
      }), [Jb, Yb, Ub]), tb = kb();

      function yb(bb) {
        Xb(bb), cb.current.scrollTop = 0
      }
      const Pb = [null, ...Lb],
        {
          isTouchScreen: Db
        } = (0, zb.p)(["isTouchScreen"]),
        Eb = !Db,
        ib = (0, Wb.useRef)(null),
        [Ob, Gb] = (0, Wb.useState)(0);
      (0, Wb.useEffect)((() => {
        const bb = ib.current;
        if (!bb) return;
        const cb = new ResizeObserver((bb => {
          Gb(bb[0].contentRect.height)
        }));
        return cb.observe(bb), () => {
          cb.disconnect()
        }
      }), [Eb]);
      const Kb = (0, Wb.useRef)(null),
        Zb = (0, Wb.useCallback)((function bb() {
          "up" === Kb.current ? cb.current.scrollTop -= 10 : "down" === Kb.current && (cb.current.scrollTop += 10), Kb.current && requestAnimationFrame(bb)
        }), [cb]),
        qb = (0, Wb.useCallback)((function(bb) {
          Kb.current || (Kb.current = bb, Zb())
        }), [Zb]);

      function db() {
        Kb.current = null
      }
      const Ab = (0, Wb.useRef)({
        creativeSearchVal: Ub,
        setCreativeSearchVal: Hb
      });
      Ab.current = {
        creativeSearchVal: Ub,
        setCreativeSearchVal: Hb
      };
      const [wb] = (0, Wb.useState)((() => new hk((bb => {
        Ab.current.setCreativeSearchVal(bb)
      }), 250, Vs.g))), rb = bb => {
        var sb;
        null === (sb = cb.current) || void 0 === sb || sb.classList.toggle("CreativeItemSlotsStale", bb)
      };
      (0, hb.f)(Yk.e, (bb => {
        wb.setHeld(bb), bb || rb(!1)
      })), (0, Wb.useEffect)((() => wb.flush), [wb]);
      const ob = (0, fb.jsx)(gc.c, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Ub,
          maxLength: 1e4,
          onValueChange: (bb, cb) => {
            "" === wb.getTyped(Ab.current.creativeSearchVal) && "" !== bb && Xb(null), wb.type(bb), rb(wb.isHeld())
          },
          onEnter: wb.flush,
          blurOnEnter: !0
        }),
        Sb = (0, fb.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Db && (0, fb.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, fb.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                qb("up")
              },
              onPointerLeave: db,
              onPointerUp: db,
              children: (0, fb.jsx)(Qb.b, {
                name: "arrow-up"
              })
            }), (0, fb.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                qb("down")
              },
              onPointerLeave: db,
              onPointerUp: db,
              children: (0, fb.jsx)(Qb.b, {
                name: "arrow-up"
              })
            })]
          }), (0, fb.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: cb,
            children: [0 === Bb.length && "" !== Ub && (0, fb.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: mb("general:noResults")
            }), (0, fb.jsx)(vs.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Ub, Yb],
              observerRoot: "CreativeItemSlots",
              observing: nb,
              children: Bb.map((bb => {
                const cb = sb + bb;
                return (0, fb.jsx)(As.b, {
                  idx: cb,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: kb(cb),
                  pointerDown: ab(cb),
                  pointerUp: Tb(cb)
                }, cb)
              }))
            })]
          })]
        });
      return (0, fb.jsxs)("div", {
        className: nc()("CreativeItemSlotsWrapper", Eb ? "WithRail" : "WithDropdown"),
        children: [Eb && (0, fb.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: ib,
          style: {
            "--rail-height": Ob > 0 ? `${Ob}px` : void 0,
            "--tab-rows": Math.ceil(Pb.length / 2)
          },
          children: Pb.map((bb => (0, fb.jsx)(Bk, {
            labelKey: Jk(bb),
            isSelected: Yb === bb,
            onSelect: () => {
              yb(bb)
            },
            setHovered: tb,
            children: (0, fb.jsx)(gk, {
              category: bb
            })
          }, null !== bb && void 0 !== bb ? bb : "all")))
        }), (0, fb.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, fb.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [ob, !Eb && (0, fb.jsx)(tk, {
              categories: Pb,
              selectedCategory: Yb,
              onSelect: yb
            })]
          }), Sb]
        })]
      })
    }));

    function Pk(bb) {
      var cb;
      return null !== (cb = (0, Lk.f)(bb)) && void 0 !== cb ? cb : ""
    }

    function Dk(bb, cb, sb) {
      let {
        publicLobby: kb,
        shownInGame: Wb
      } = cb;
      const ab = bb.toLowerCase(),
        Tb = (0, Vk.creativeItemIds)(),
        Ub = bb => {
          var cb;
          const ab = Tb[bb];
          return !(0, Vk.itemIsDisabled)(ab, kb, null === (cb = Wb[Pk(ab)]) || void 0 === cb || cb, sb)
        };
      if ("" === ab) return Tb.map(((bb, cb) => cb)).filter((bb => !(0, Vk.showOnlyInCreativeSearch)(Tb[bb]))).filter(Ub);
      const Ib = [];
      for (let Hb = 0; Hb < Tb.length; Hb++) Pk(Tb[Hb]).toLowerCase().includes(ab) && Ib.push(Hb);
      Ib.sort(((bb, cb) => {
        const sb = Pk(Tb[bb]).toLowerCase(),
          kb = Pk(Tb[cb]).toLowerCase();
        return sb.indexOf(ab) - kb.indexOf(ab)
      }));
      for (const [Hb, fb] of(0, Vk.creativeAltNames)())
        for (const bb of fb)
          if (bb.toLowerCase().includes(ab)) {
            const bb = Tb.indexOf(Hb);
            Ib.includes(bb) || Ib.push(bb)
          } return Ib.filter(Ub)
    }
    var Ek = sb(36410),
      ik = sb(628);

    function Ok(bb) {
      return bb > ik.m
    }

    function Gk(bb) {
      const cb = bb / 2,
        sb = [];
      for (let kb = 0; kb < cb / 6; kb++)
        for (let bb = 0; bb < 12; bb++) {
          const Wb = bb < 6 ? 0 : cb;
          sb.push(Wb + 6 * kb + bb % 6)
        }
      return sb
    }

    function Kk(bb) {
      let {
        numSlots: cb,
        renderSlot: sb
      } = bb;
      const {
        t: kb
      } = (0, vb.E)(), ab = (0, Wb.useRef)(null);
      var Tb;
      return Tb = ab, (0, Wb.useLayoutEffect)((() => {
        var bb;
        const cb = null === (bb = Tb.current) || void 0 === bb ? void 0 : bb.closest(".InvenBody");
        if (!cb) return;
        const sb = () => {
          cb.style.zoom = "";
          const bb = parseFloat(getComputedStyle(document.documentElement).fontSize),
            sb = window.innerWidth - 2 * bb,
            kb = cb.getBoundingClientRect().width;
          kb > sb && (cb.style.zoom = "" + sb / kb)
        };
        return sb(), window.addEventListener("resize", sb), () => {
          window.removeEventListener("resize", sb), cb.style.zoom = ""
        }
      }), [Tb]), (0, fb.jsxs)("div", {
        ref: ab,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, fb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: kb("doubleChest:title")
        }), (0, fb.jsx)("div", {
          className: "GridItemSlots",
          children: Gk(cb).map((bb => sb(bb)))
        })]
      })
    }

    function Zk(bb) {
      let {
        XT: cb,
        initialPasskey: sb
      } = bb;
      const {
        t: kb
      } = (0, vb.E)(), [ab, Tb] = (0, Wb.useState)(sb), [Ub, Ib] = (0, Wb.useState)(sb);
      (0, Wb.useEffect)((() => {
        Tb(sb), Ib(sb)
      }), [...cb]);
      return (0, fb.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, fb.jsx)("div", {
          className: "SmallTextBold",
          children: kb("ironChest:currentPasskey", {
            currentPasskey: ab.join("")
          })
        }), (0, fb.jsx)(Zs, {
          className: "IronChestPasskeyEditor",
          OH: Ub,
          onPasskeyUpdated: Ib,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Hb.gameBridge.send("changeIronChestPasskey", {
              pos: [...cb],
              OH: [...Ub]
            }), Tb([...Ub])
          }
        })]
      })
    }

    function zk(bb) {
      let {
        variation: cb,
        canCraft: sb,
        show: kb,
        creativeMounted: Wb,
        specialItemRef: ab,
        draggedInfo: Tb,
        getSetHovering: Ub,
        getPointerDownForIdx: Ib,
        getPointerUpForIdx: Hb,
        enchantingTablePosition: Mb,
        enchantingTableBlockName: Xb,
        selectedCraftable: nb,
        dispatchSelectedCraftable: mb,
        creativeScrollDiv: lb,
        creativeSearchVal: Qb,
        setCreativeSearchVal: eb,
        creativeCategory: Cb,
        setCreativeCategory: Nb,
        onCraft: Vb
      } = bb;
      const {
        userContext: Lb
      } = (0, ub.c)(), {
        t: Yb
      } = (0, vb.E)(), hb = (0, gb.e)("inventory", (bb => bb.chest)), Jb = (0, gb.e)("inventory", (bb => bb.player.length)), Bb = (0, gb.e)("inventory", (bb => bb.creative));
      if (0 === Jb) return null;
      let tb, yb;
      const Pb = bb => {
          const cb = Jb + bb;
          return (0, fb.jsx)(As.b, {
            idx: cb,
            draggedInfo: Tb,
            specialItemInfo: ab.current,
            setHovered: Ub(cb),
            pointerDown: Ib(cb),
            pointerUp: Hb(cb)
          }, cb)
        },
        Db = hb ? (0, Ek.e)(hb.type) : null;
      if (Db) tb = nc()("InvenLeftSideChestCustom", Db.className), yb = (0, fb.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Db.render({
          XT: hb.pos,
          renderSlot: Pb
        })
      });
      else if (hb) {
        const bb = hb.pos,
          cb = "Iron" === hb.type || "Moonstone" === hb.type ? hb.type : "Standard";
        let sb = !1,
          kb = null;
        "Iron" === cb && (sb = hb.ironChest.ownerDbId === Lb.whamm, kb = hb.ironChest.OH), tb = `InvenLeftSideChest${cb}`;
        const Wb = Ok(hb.numSlots);
        yb = (0, fb.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [sb && (0, fb.jsx)(Zk, {
            XT: bb,
            initialPasskey: kb
          }), Wb && (0, fb.jsx)(Kk, {
            numSlots: hb.numSlots,
            renderSlot: Pb
          }), !Wb && (0, fb.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, fb.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: Yb("Moonstone" === cb ? "item:moonstoneChest" : "Iron" === cb ? "item:ironChest" : "item:chest")
            }), (0, fb.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(hb.numSlots).fill(0).map(((bb, cb) => Pb(cb)))
            })]
          })]
        })
      } else if (!Bb || cb && sb)
        if (sb && "Enchanting Table" === cb) tb = `InvenLeftSide${(null!==Xb&&void 0!==Xb?Xb:"").replace(/ /gi,"")}`, yb = (0, fb.jsx)(ws, {
          specialItemInfo: ab.current,
          setHovered: Ub,
          pointerDown: Ib(ts.e),
          pointerUp: Hb(ts.e),
          enchantingTablePosition: Mb,
          enchantingTableBlockName: Xb
        });
        else if (sb && "Salvaging Table" === cb) tb = "InvenLeftSideSalvagingTable", yb = (0, fb.jsx)(os, {
        specialItemInfo: ab.current,
        setSpecialItemInfo: bb => {
          ab.current = bb
        },
        setHovered: Ub,
        pointerDown: Ib(ts.e),
        pointerUp: Hb(ts.e)
      });
      else {
        if (!sb) return null;
        tb = `InvenLeftSide${(null!==cb&&void 0!==cb?cb:"HandCrafting").replace(/ /gi,"")}`, yb = (0, fb.jsx)(Nk, {
          show: kb,
          onCraft: Vb,
          craftingStation: cb,
          selectedCraftable: nb,
          dispatchSelectedCraftable: mb,
          setHovered: Ub()
        })
      } else tb = "InvenLeftSideCreative", yb = Wb ? (0, fb.jsx)(yk, {
        creativeScrollDiv: lb,
        playerInvenNumSlots: Jb,
        getSetHoveringForIdx: Ub,
        getPointerDownForIdx: Ib,
        getPointerUpForIdx: Hb,
        creativeSearchVal: Qb,
        setCreativeSearchVal: eb,
        creativeCategory: Cb,
        setCreativeCategory: Nb,
        show: kb
      }) : null;
      const Eb = !!hb || sb && !!cb;
      return (0, fb.jsx)("div", {
        className: `InvenLeftSide ${tb}`,
        "data-pad-inventory-start": Eb ? "" : void 0,
        children: yb
      })
    }
    var qk = sb(620),
      dk = sb(19867),
      Ak = sb(19872),
      wk = sb(19875);
    const rk = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: sb(19877)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: Ak
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: wk
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: sb(19880)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: dk
      }
    };

    function Sk(bb) {
      const {
        sprite: cb,
        image: sb
      } = rk[bb];
      return Is(cb, as.j.ITEM, sb)
    }

    function Rk(bb) {
      let {
        draggedInfo: cb,
        specialItemInfo: sb,
        craftFlyAnims: kb,
        getSetHovering: Wb,
        getPointerDownForIdx: ab,
        getPointerUpForIdx: Tb,
        variation: Ub,
        canCraft: Ib,
        isNewSlot: Hb
      } = bb;
      const Mb = (0, gb.e)("inventory", (bb => bb.player.length));
      return 0 === Mb ? null : (0, fb.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, fb.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(qk.e.length).fill(0).map(((bb, Xb) => {
            const nb = Mb - qk.e.length + Xb;
            return (0, fb.jsx)(As.b, {
              idx: nb,
              draggedInfo: cb,
              specialItemInfo: sb,
              craftFlyHoldbackInfo: (0, Bs.h)(kb, nb),
              setHovered: Wb(nb),
              pointerDown: ab(nb),
              pointerUp: Tb(nb),
              defaultIconB64: Sk(qk.e[Xb]),
              variation: Ib ? Ub : void 0,
              showNewDot: Hb(nb)
            }, nb)
          }))
        }), (0, fb.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Mb - 10 - qk.e.length).fill(0).map(((bb, Xb) => {
            const nb = Mb - qk.e.length - Xb - 1;
            return (0, fb.jsx)(As.b, {
              idx: nb,
              draggedInfo: cb,
              specialItemInfo: sb,
              craftFlyHoldbackInfo: (0, Bs.h)(kb, nb),
              setHovered: Wb(nb),
              pointerDown: ab(nb),
              pointerUp: Tb(nb),
              variation: Ib ? Ub : void 0,
              showNewDot: Hb(nb)
            }, nb)
          }))
        })]
      })
    }
    var vk = sb(36414),
      Fk = sb(36418);

    function xk(bb) {
      const {
        e: cb,
        idx: sb
      } = bb, kb = (0, gs.m)(bb.readInventory(), sb), Wb = (0, gs.q)(cb);
      sb === ts.b ? function(bb, cb) {
        const {
          draggedInfoRef: sb,
          removeItem: kb,
          removeDraggedInfoRef: Wb,
          close: ab
        } = bb;
        if (sb.current) {
          const bb = cb && sb.current.amount || 1;
          kb(sb.current.idx, bb, !0) && (sb.current.amount -= bb, sb.current.amount <= 0 && Wb())
        } else cb && ab()
      }(bb, Wb) : sb === ts.e ? function(bb, cb) {
        const {
          e: sb,
          draggedInfoRef: kb,
          specialItemRef: Wb,
          moveAmtIntoSlot: ab,
          removeDraggedInfoRef: Tb
        } = bb;
        if ((0, gs.z)(sb) && Wb.current) Wb.current = null;
        else if (kb.current && Wb.current && (kb.current.idx === Wb.current.idx || (0, Fk.d)(kb.current, Wb.current)) && kb.current.amount > 0 && Wb.current.amount > 0 && Wb.current.amount < Gs.e.maxItemStackSize)
          if (kb.current.idx === Wb.current.idx) {
            if (cb) {
              const bb = Math.min(kb.current.amount, Gs.e.maxItemStackSize - Wb.current.amount);
              Wb.current.amount += bb, kb.current.amount -= bb
            } else kb.current.amount--, Wb.current.amount++;
            kb.current.amount <= 0 && Tb()
          } else if (cb) {
          const bb = Math.min(kb.current.amount, Gs.e.maxItemStackSize - Wb.current.amount);
          ab(Wb.current.idx, bb) && (Wb.current.amount += bb)
        } else {
          ab(Wb.current.idx, 1) && Wb.current.amount++
        } else if (!kb.current || Wb.current || cb) {
          const bb = kb.current;
          kb.current = Wb.current, Wb.current = bb
        } else kb.current.amount--, Wb.current = {
          idx: kb.current.idx,
          name: kb.current.name,
          attributes: kb.current.attributes,
          amount: 1
        }
      }(bb, Wb) : (0, gs.z)(cb) ? function(bb, cb) {
        var sb, kb;
        const {
          idx: Wb,
          draggedInfoRef: ab,
          specialItemRef: Tb,
          canCraft: Ub,
          variation: Ib,
          swapSlots: Hb,
          moveIntoSlots: fb
        } = bb;
        if (!cb) return;
        let Mb = cb.amount;
        Wb === (null === (sb = ab.current) || void 0 === sb ? void 0 : sb.idx) && (Mb = ab.current.amount <= 0 ? 0 : cb.amount - ab.current.amount);
        Wb === (null === (kb = Tb.current) || void 0 === kb ? void 0 : kb.idx) && (Mb = Tb.current.amount <= 0 ? 0 : cb.amount - Tb.current.amount);
        if (0 === Mb) return;
        const Xb = bb.readInventory(),
          nb = Xb.player.length,
          mb = Xb.chest,
          lb = nb - qk.e.length,
          Qb = () => {
            if (!(0, Vs.g)()) return void fb(10, lb, Wb, Mb);
            const bb = bb => {
              const sb = (0, gs.m)(Xb, bb);
              return sb ? {
                amount: sb.amount,
                stacksWithMoved: (0, Fk.d)(sb, cb)
              } : null
            };
            for (const cb of ((bb, cb, sb, kb, Wb) => {
                const ab = [];
                let Tb = kb;
                if (null !== kb) {
                  let Ub = 0;
                  for (let kb = cb; kb < sb; kb++) {
                    const cb = bb(kb);
                    null !== cb && void 0 !== cb && cb.stacksWithMoved && null !== cb.amount && cb.amount > 0 && (Ub += Math.max(0, Wb - cb.amount))
                  }
                  const Ib = Math.min(kb, Ub);
                  if (Ib > 0 && (ab.push({
                      start: cb,
                      end: sb,
                      amount: Ib
                    }), Tb = kb - Ib), Tb <= 0) return ab
                }
                for (let Ub = sb - 1; Ub >= cb; Ub--)
                  if (null === bb(Ub)) {
                    ab.push({
                      start: Ub,
                      end: Ub + 1,
                      amount: Tb
                    });
                    break
                  } return ab
              })(bb, 10, lb, Mb, Gs.e.maxItemStackSize)) fb(cb.start, cb.end, Wb, cb.amount)
          };
        if (!Ub || "Enchanting Table" !== Ib && "Salvaging Table" !== Ib) {
          const sb = (0, Jb.Eb)(cb.name),
            kb = sb ? (0, Jb.Cb)(sb) : null;
          if (!qk.e.includes(sb) || Wb !== kb && (0, gs.o)(Xb, bb.itemInfo, kb, Wb))
            if (mb)
              if (Wb < nb) {
                var eb, Cb;
                const [bb, cb] = null !== (eb = null === (Cb = (0, Ek.e)(mb.type)) || void 0 === Cb ? void 0 : Cb.quickMoveRange) && void 0 !== eb ? eb : [0, mb.numSlots];
                fb(nb + bb, nb + cb, Wb, Mb)
              } else fb(0, nb - qk.e.length, Wb, Mb);
          else Xb.creative ? Wb < 10 ? Qb() : Wb < nb ? fb(0, 10, Wb, Mb) : fb(0, nb - qk.e.length, Wb, null !== cb.amount ? Gs.e.maxItemStackSize : null) : Wb < 10 ? Qb() : fb(0, 10, Wb, Mb);
          else Wb < nb - qk.e.length || Wb >= nb ? Hb(kb, Wb) : (fb(0, nb - qk.e.length, kb, Mb), Ys.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Tb.current = {
          idx: Wb,
          name: cb.name,
          attributes: cb.attributes,
          amount: null !== cb.amount ? Mb : 0
        }
      }(bb, kb) : bb.draggedInfoRef.current ? function(bb, cb, sb, kb) {
        const {
          draggedInfoRef: Wb,
          specialItemRef: ab,
          moveAmtIntoSlot: Tb,
          swapSlots: Ub,
          removeItem: Ib,
          removeDraggedInfoRef: Hb
        } = bb, fb = bb.readInventory(), Mb = Wb.current.idx;
        if (sb && (cb === Mb || (0, Fk.d)(Wb.current, sb)) && Wb.current.amount > 0 && (0, gs.e)(sb) > 0 && (sb.amount < Gs.e.maxItemStackSize || cb === Mb)) kb ? sb.amount + Wb.current.amount <= Gs.e.maxItemStackSize || cb === Mb ? Tb(cb, Wb.current.amount) : Tb(cb, Gs.e.maxItemStackSize - sb.amount) : Tb(cb, 1);
        else if (Wb.current.amount > 0 && !sb) Tb(cb, kb ? Wb.current.amount : 1);
        else if (kb || sb || 0 === Wb.current.amount)
          if (fb.creative && !fb.chest && cb >= fb.player.length) {
            const bb = 0 === Wb.current.amount ? 1 : Wb.current.amount;
            Ib(Wb.current.idx, bb, !1) && Hb()
          } else {
            var Xb;
            const sb = (null === (Xb = ab.current) || void 0 === Xb ? void 0 : Xb.idx) === cb;
            if (Ub(cb, Wb.current.idx)) {
              const kb = bb.readInventory(),
                Tb = (0, gs.m)(kb, Mb),
                Ub = !kb.chest && kb.creative && Wb.current.idx >= kb.player.length;
              if (Tb && Wb.current.idx !== cb && !Ub) {
                let bb = (0, gs.e)(Tb);
                sb && (bb -= ab.current.amount), Wb.current = sb && 0 === bb ? null : {
                  idx: Wb.current.idx,
                  name: Tb.name,
                  attributes: Tb.attributes,
                  amount: bb
                }
              } else Hb()
            }
          }
        else Tb(cb, 1)
      }(bb, sb, kb, Wb) : function(bb, cb, sb, kb) {
        var Wb;
        const {
          draggedInfoRef: ab,
          specialItemRef: Tb
        } = bb;
        if (!sb) return;
        let Ub = (0, gs.e)(sb);
        const Ib = (null === (Wb = Tb.current) || void 0 === Wb ? void 0 : Wb.idx) === cb;
        Ib && (Ub -= Tb.current.amount);
        kb || (Ub = Math.ceil(Ub / 2));
        ab.current = Ib && 0 === Ub ? null : {
          idx: cb,
          name: sb.name,
          attributes: sb.attributes,
          amount: Ub
        }
      }(bb, sb, kb, Wb)
    }

    function jk(bb, cb) {
      return !!cb && cb.name === bb.name
    }

    function pk() {
      return Hb.gameBridge.latest("inventory")
    }

    function bW(bb, cb, sb) {
      return Hb.gameBridge.send("removeInventoryItem", {
        slot: bb,
        amount: cb,
        drop: sb
      })
    }

    function cW(bb) {
      return (0, gs.i)(bb, Hb.gameBridge.latest("itemInfo"), Hb.gameBridge.latest("stationItems").enchantable)
    }

    function sW(bb) {
      let {
        show: cb,
        close: sb,
        canCraft: kb,
        variation: ab,
        inventoryItemsMoveable: Tb,
        setCraftFlyAnims: Ub
      } = bb;
      (0, gb.f)("itemInfo");
      const [Ib, fb] = (0, Wb.useState)(null), [Mb, Xb] = (0, Wb.useState)(null), [nb, mb] = (0, Wb.useState)(!1), lb = (0, Wb.useRef)(null), Qb = (0, Wb.useRef)(null), eb = (0, Wb.useRef)(null), Cb = (0, Wb.useRef)(null), [Nb, Vb] = (0, Wb.useReducer)((bb => bb + 1), 0), Lb = (0, Wb.useCallback)((() => {
        cb && Vb()
      }), [cb, Vb]), ub = (0, Wb.useCallback)((() => {
        Qb.current = null, Ob.current = null, Lb()
      }), [Lb]), Yb = (0, Wb.useCallback)(((bb, cb) => {
        Ub((sb => sb.map((sb => "ingredient" === sb.kind ? sb : sb.TM === bb ? {
          ...sb,
          TM: cb,
          to: (0, gs.g)(cb)
        } : sb.TM === cb ? {
          ...sb,
          TM: bb,
          to: (0, gs.g)(bb)
        } : sb))))
      }), [Ub]), hb = (0, Wb.useCallback)(((bb, cb) => {
        const sb = Zb.current;
        if (sb.x = bb, sb.y = cb, lb.current) !zb.current.isTouch || zb.current.itemBeingDragged && !Ob.current ? (lb.current.style.transform = `translate(${sb.x}px, ${sb.y}px)`, mb(zb.current.isTouch && !Ob.current)) : (lb.current.style.transform = "translate(0.5rem, 0.5rem)", mb(!0));
        else if (Cb.current) {
          const sb = Cb.current;
          let kb = bb + 10,
            Wb = cb + 10;
          const ab = sb.offsetWidth,
            Tb = sb.offsetHeight;
          kb + ab > window.innerWidth && (kb = bb - ab - 10), Wb + Tb > window.innerHeight && (Wb = cb - Tb - 10), kb < 0 && (kb = 0), Wb < 0 && (Wb = 0), Cb.current.style.transform = `translate(${kb}px, ${Wb}px)`
        }
      }), []), Bb = (0, Wb.useCallback)((bb => (cb, sb, kb) => {
        if (fb(cb && void 0 !== bb ? bb : null), cb) {
          if (void 0 === bb && !sb) return void(0, vk.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== bb) {
            var Wb;
            const cb = pk();
            let sb;
            if (sb = bb === ts.e ? eb.current ? (0, gs.m)(cb, eb.current.idx) : null : (0, gs.m)(cb, bb), !sb) return void Xb(null);
            if ((null === (Wb = eb.current) || void 0 === Wb ? void 0 : Wb.idx) === bb) {
              if (0 === (0, gs.e)(sb) - eb.current.amount) return void Xb(null)
            }
            Xb(cW(sb))
          } else Xb({
            name: sb.name,
            desc: sb.desc,
            fontStyle: "normal"
          })
        } else Xb(null);
        kb && setTimeout((() => {
          hb(kb.pageX, kb.pageY)
        }), 0)
      }), [hb]), tb = (0, Wb.useCallback)(((bb, cb) => {
        const sb = Hb.gameBridge.send("moveInventoryItem", {
          from: Qb.current.idx,
          to: bb,
          amount: cb
        });
        return sb ? (Qb.current.amount -= cb, Qb.current.amount <= 0 && ub()) : console.error("moveInventoryItem failed"), sb
      }), [ub]), yb = (0, Wb.useCallback)(((bb, cb) => {
        const sb = eb.current,
          kb = null === sb || void 0 === sb ? void 0 : sb.idx;
        sb && (sb.idx = function(bb, cb, sb) {
          return bb === cb ? sb : bb === sb ? cb : bb
        }(kb, bb, cb));
        const Wb = Hb.gameBridge.send("swapInventorySlots", {
          a: bb,
          b: cb
        });
        return Wb ? Yb(bb, cb) : sb && (sb.idx = kb), Wb
      }), [Yb]), Pb = (0, Wb.useCallback)(((bb, cb, sb, kb) => {
        const Wb = Hb.gameBridge.send("quickMoveInventoryItem", {
          slot: sb,
          start: bb,
          end: cb,
          amount: kb
        });
        null !== Wb && Yb(sb, Wb)
      }), [Yb]), Db = (0, Wb.useCallback)(((bb, cb) => {
        var Wb;
        ((bb, cb, sb) => {
          const kb = bb - (sb - qk.e.length);
          return !(!cb || kb < 0 || kb >= qk.e.length) && (0, Jb.Eb)(cb) !== qk.e[kb]
        })(cb, null === (Wb = Qb.current) || void 0 === Wb ? void 0 : Wb.name, pk().player.length) || (xk({
          e: bb,
          idx: cb,
          readInventory: pk,
          itemInfo: Hb.gameBridge.latest("itemInfo"),
          draggedInfoRef: Qb,
          specialItemRef: eb,
          moveAmtIntoSlot: tb,
          swapSlots: yb,
          moveIntoSlots: Pb,
          removeItem: bW,
          removeDraggedInfoRef: ub,
          close: sb,
          canCraft: kb,
          variation: ab
        }), Lb())
      }), [kb, sb, tb, Pb, ub, yb, ab, Lb]), Eb = (0, Wb.useRef)(0), ib = (0, Wb.useRef)(null), Ob = (0, Wb.useRef)(null), Gb = (0, Wb.useRef)(null), Kb = (0, Wb.useRef)(new Set), Zb = (0, Wb.useRef)({
        x: 0,
        y: 0
      }), zb = (0, Wb.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), qb = (0, Wb.useCallback)((() => (Gb.current = null, zb.current.itemBeingDragged = !1, clearTimeout(ib.current), !!Ob.current && (Ob.current = null, Lb(), !0))), [Lb]);
      (0, Wb.useEffect)((() => {
        qb(), Kb.current.clear()
      }), [cb]);
      const db = bb => void 0 !== bb && (Kb.current.has(bb) || null !== Gb.current && bb !== Gb.current),
        Ab = bb => {
          zb.current.isTouch = (0, gs.u)(bb)
        },
        wb = (0, Wb.useCallback)((bb => cb => {
          const kb = (0, gs.u)(cb);
          if (kb || hb(cb.pageX, cb.pageY), Tb)
            if (db(cb.pointerId)) void 0 !== cb.pointerId && Kb.current.add(cb.pointerId);
            else {
              if (Ab(cb), kb) {
                Eb.current = cb.timeStamp, zb.current.itemBeingDragged = !0, Gb.current = cb.pointerId;
                const sb = (0, gs.m)(pk(), bb);
                if (sb && sb.amount && sb.amount > 0) {
                  const sb = cb.pageX,
                    kb = cb.pageY,
                    Wb = Zb.current.x,
                    ab = Zb.current.y;
                  clearTimeout(ib.current), ib.current = setTimeout((() => {
                    if (Qb.current && Qb.current.idx === bb && (Math.abs(sb - Zb.current.x) < 20 && Math.abs(kb - Zb.current.y) < 20 || Wb === Zb.current.x && ab === Zb.current.y) && zb.current.itemBeingDragged) {
                      const bb = pk(),
                        sb = bb.creative && !bb.chest && Qb.current.idx >= Gs.e.numInvenSlots && null !== (0, gs.m)(bb, Qb.current.idx).amount ? Gs.e.maxItemStackSize : Qb.current.amount;
                      Ob.current = {
                        initTouchX: cb.pageX,
                        initTouchY: cb.pageY,
                        maxAmount: sb
                      }, Qb.current.amount = Math.ceil(Qb.current.amount / 2), lb.current.style.transform = "translate(0.5rem, 0.5rem)", mb(!0), Lb()
                    }
                  }), 500)
                }
              }
              Db(cb, bb)
            }
          else bb === ts.b && (0, gs.q)(cb) && sb()
        }), [hb, Db, Tb, sb, Lb]),
        rb = (0, Wb.useCallback)((bb => bb => {
          if (db(bb.pointerId)) return;
          const cb = (0, gs.u)(bb);
          if (Ab(bb), !qb()) {
            if (cb && Qb.current && bb.timeStamp - Eb.current > 150) {
              const cb = document.elementFromPoint(bb.clientX, bb.clientY);
              if (null !== cb) {
                const sb = cb.getAttribute("data-inven-idx");
                null !== sb ? Db(bb, parseInt(sb)) : cb.classList.contains("InventoryBackgroundScreen") && Db(bb, -1)
              }
            }
            hb(bb.pageX, bb.pageY)
          }
        }), [hb, Db, qb]);
      (0, Wb.useEffect)((() => {
        let bb;
        const sb = ["pointerup", "pointercancel"],
          kb = bb => {
            Kb.current.has(bb.pointerId) ? setTimeout((() => {
              Kb.current.delete(bb.pointerId)
            }), 0) : bb.pointerId === Gb.current && setTimeout((() => {
              Gb.current === bb.pointerId && qb()
            }), 0)
          };
        if (cb) {
          for (const bb of sb) document.addEventListener(bb, kb, !0);
          if (!zb.current.isTouch) {
            const bb = Zb.current;
            hb(bb.x, bb.y)
          }
          bb = bb => {
            bb.preventDefault(), db(bb.pointerId) || (Ab(bb), hb(bb.pageX, bb.pageY), Ob.current && bb.pointerId === Gb.current && (bb => {
              if (!Qb.current) return Ob.current = null, void Lb();
              const {
                initTouchX: cb,
                maxAmount: sb
              } = Ob.current, kb = (bb.pageX - cb) * Ob.current.maxAmount / 160, Wb = Math.ceil(sb / 2) + Math.ceil(kb);
              Qb.current.amount = Math.min(sb, Math.max(1, Wb)), Lb()
            })(bb))
          }, document.addEventListener("pointermove", bb, !0)
        }
        return () => {
          document.removeEventListener("pointermove", bb, !0);
          for (const bb of sb) document.removeEventListener(bb, kb, !0)
        }
      }));
      const ob = (0, Wb.useCallback)((() => {
          if (Qb.current) {
            const bb = (0, gs.m)(pk(), Qb.current.idx);
            (!jk(Qb.current, bb) || bb.amount < Qb.current.amount) && ub()
          }
        }), [ub]),
        Sb = (0, Wb.useCallback)((() => {
          const bb = Qb.current;
          if (bb) {
            const cb = (0, gs.m)(pk(), bb.idx);
            jk(bb, cb) && (bb.attributes = cb.attributes)
          }
        }), []);
      return {
        draggedDomRef: lb,
        draggedInfoRef: Qb,
        specialItemRef: eb,
        hoverInfoDomRef: Cb,
        longHoldSplitInfoRef: Ob,
        currHoveredIdx: Ib,
        currHoveredDisplayInfo: Mb,
        displayDraggedItemName: nb,
        forceRerenderIfVisible: Lb,
        removeDraggedInfoRef: ub,
        checkDraggedItemConsistencyWithInven: ob,
        refreshDraggedAttributes: Sb,
        swapSlots: yb,
        getPointerDownForIdx: wb,
        getPointerUpForIdx: rb,
        getSetHovering: Bb,
        setCurrHoveredDisplayInfo: Xb,
        moveFollowerTo: hb
      }
    }
    class kW {
      constructor(bb) {
        this.snapshot = [], this.newSlots = new Set, this.update(bb, !1)
      }
      update(bb, cb) {
        const sb = bb.map((bb => {
          var cb;
          return bb ? {
            name: bb.name,
            amount: null !== (cb = bb.amount) && void 0 !== cb ? cb : 1
          } : null
        }));
        sb.forEach(((bb, sb) => {
          const kb = this.snapshot[sb],
            Wb = (null === bb || void 0 === bb ? void 0 : bb.name) !== (null === kb || void 0 === kb ? void 0 : kb.name);
          (!bb || Wb || bb.amount < kb.amount) && this.newSlots.delete(sb), cb && bb && (Wb || bb.amount > kb.amount) && this.newSlots.add(sb)
        })), this.snapshot = sb
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(bb) {
        return this.newSlots.has(bb)
      }
    }
    const WW = (bb, cb, sb) => ({
      button: cb,
      shiftKey: sb,
      pageX: bb.clientX,
      pageY: bb.clientY,
      clientX: bb.clientX,
      clientY: bb.clientY,
      pointerType: "mouse"
    });

    function aW(bb) {
      const [cb, sb] = (0, Wb.useState)(bb);
      return bb && !cb && sb(!0), (0, Wb.useEffect)((() => {
        if (cb) return;
        let bb = !0;
        const kb = () => {
            bb && (bb = !1, sb(!0))
          },
          Wb = "function" === typeof window.requestIdleCallback,
          ab = Wb ? window.requestIdleCallback(kb, {
            timeout: 2e3
          }) : void 0,
          Tb = setTimeout(kb, Wb ? 2e3 : 1e3);
        return () => {
          bb = !1, clearTimeout(Tb), void 0 !== ab && window.cancelIdleCallback(ab)
        }
      }), [cb]), cb
    }
    const TW = (0, Wb.memo)((function(bb) {
      var cb;
      let {
        show: sb,
        onOpen: kb,
        onClose: ab,
        variation: Ub
      } = bb;
      const Mb = (0, Wb.useRef)(null),
        Xb = (0, Wb.useRef)(null),
        nb = function(bb) {
          const [cb, sb] = (0, Wb.useState)(!0), [kb, ab] = (0, Wb.useState)(!1), Tb = (0, Wb.useRef)(null), Ub = (0, Wb.useRef)(null), Hb = (0, Ib.d)("_shield"), fb = (0, Wb.useRef)(null), Mb = (0, Ib.d)("_health"), Xb = (0, Wb.useRef)(null);

          function nb(bb) {
            const cb = Date.now() + bb;
            cb < Ub.current || (sb(!1), clearTimeout(Tb.current), Ub.current = cb, Tb.current = setTimeout((() => {
              sb(!0)
            }), bb))
          }
          return (0, Wb.useEffect)((() => {
            nb(Ps);
            const bb = mb.j.subscribe("requestingPlayVideoAd", (() => {
              nb(Ps)
            }));
            return () => {
              clearTimeout(Tb.current), mb.j.unsubscribe(bb)
            }
          }), []), (0, Wb.useEffect)((() => {
            (fb.current > Hb || Xb.current > Mb) && nb(6e4), fb.current = Hb, Xb.current = Mb
          }), [Hb, Mb]), (0, Wb.useEffect)((() => {
            let cb = null;
            return bb ? cb = setTimeout((() => {
              ab(!0)
            }), 250) : ab(!1), () => {
              clearTimeout(cb)
            }
          }), [bb]), cb && kb
        }(sb);
      (0, hb.h)(Cs.e, null);
      const lb = (0, Cs.l)(),
        Qb = lb.some((bb => bb.panel)),
        eb = (0, gb.e)("inventory", (bb => null !== bb.chest && (null !== bb.chest.ironChest || Ok(bb.chest.numSlots)))),
        Cb = aW(sb),
        Nb = aW(sb),
        [Vb, Lb] = (0, Wb.useState)([]),
        ub = (0, Wb.useCallback)((bb => {
          Lb((cb => cb.filter((cb => cb.id !== bb))))
        }), []),
        Yb = (0, Wb.useRef)(null),
        Bb = (0, Wb.useRef)(0),
        tb = (0, Wb.useCallback)((() => {
          Yb.current && (Bb.current = Yb.current.scrollTop), ab()
        }), [ab]),
        yb = (0, Ib.d)("inventoryItemsMoveable"),
        Pb = (0, Ib.d)("canCraft"),
        {
          clientEscMenuOptions: Db
        } = (0, zb.p)(["clientEscMenuOptions"]),
        Eb = (0, Wb.useRef)(null);
      Eb.current || (Eb.current = new kW(Hb.gameBridge.latest("inventory").player));
      const Ob = Eb.current,
        {
          draggedDomRef: Gb,
          draggedInfoRef: Kb,
          specialItemRef: Zb,
          hoverInfoDomRef: qb,
          longHoldSplitInfoRef: db,
          currHoveredIdx: Ab,
          currHoveredDisplayInfo: wb,
          displayDraggedItemName: rb,
          forceRerenderIfVisible: ob,
          removeDraggedInfoRef: Sb,
          checkDraggedItemConsistencyWithInven: Rb,
          refreshDraggedAttributes: vb,
          swapSlots: Fb,
          getPointerDownForIdx: xb,
          getPointerUpForIdx: jb,
          getSetHovering: pb,
          setCurrHoveredDisplayInfo: bc,
          moveFollowerTo: cc
        } = sW({
          show: sb,
          close: tb,
          canCraft: Pb,
          variation: Ub,
          inventoryItemsMoveable: yb,
          setCraftFlyAnims: Lb
        });
      (0, Wb.useEffect)((() => {
        const bb = !sb && null !== Hb.gameBridge.latest("inventory").chest;
        if (bb && Hb.gameBridge.send("closeChest", null), sb || (Ob.clearMarks(), pb(null)(!1)), bb) {
          Ys.c.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [sb]), (0, gb.c)("chestToggled", (bb => {
        if (bb ? kb() : sb && tb(), bb) {
          Ys.c.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const sc = (0, Sc.k)();
      (0, gb.c)("inventory", (bb => {
        let {
          player: cb
        } = bb;
        var kb, Wb, ab;
        (Ob.update(cb, !sb && sc.shown), Zb.current) && (Zb.current = (Wb = Zb.current, ab = null !== (kb = cb[Zb.current.idx]) && void 0 !== kb ? kb : null, jk(Wb, ab) ? (Wb.attributes = ab.attributes, null !== ab.amount && Wb.amount > ab.amount && (Wb.amount = ab.amount), Wb) : null));
        vb(), null !== Ab && pb(Ab)(!0), ob()
      })), (0, Wb.useEffect)((() => (Hb.gameBridge.send("setInventoryOpen", sb), () => {
        Hb.gameBridge.send("setInventoryOpen", !1)
      })), [sb]);
      const kc = (bb, cb) => {
        if (bb === ts.e) return void(bb => {
          const cb = Zb.current;
          if (!cb || null === (0, gs.m)(Hb.gameBridge.latest("inventory"), cb.idx)) return;
          const sb = bb ? Math.max(cb.amount, 1) : 1,
            kb = cb.amount - sb;
          if (!Hb.gameBridge.send("removeInventoryItem", {
              slot: cb.idx,
              amount: sb,
              drop: !0
            })) return;
          const Wb = Zb.current;
          Wb && (Wb.amount = Math.min(Wb.amount, kb), Wb.amount <= 0 && (Zb.current = null)), ob()
        })(cb);
        const sb = null === bb ? null : (0, gs.m)(Hb.gameBridge.latest("inventory"), bb);
        if (null !== sb) {
          var kb, Wb, ab;
          const Tb = cb && null !== (kb = sb.amount) && void 0 !== kb ? kb : 1;
          Hb.gameBridge.send("removeInventoryItem", {
            slot: bb,
            amount: Tb,
            drop: !0
          }), bb === (null === (Wb = Kb.current) || void 0 === Wb ? void 0 : Wb.idx) && (Kb.current.amount -= Tb, Kb.current.amount <= 0 && Sb(), ob()), bb === (null === (ab = Zb.current) || void 0 === ab ? void 0 : ab.idx) && (Zb.current = null, ob())
        }
      };
      (0, gb.c)("inventoryDropRequested", (bb => {
        sb && Ab !== ts.e && kc(Ab, bb)
      }));
      const Wc = (bb, cb) => {
        let sb = cb;
        if (cb === ts.e) {
          if (!Zb.current) return;
          sb = Zb.current.idx
        }
        const kb = Fb(bb, sb);
        if (kb && Kb.current && (Kb.current.idx === sb ? Kb.current.idx = bb : Kb.current.idx === bb && (Kb.current.idx = sb)), kb && cb === ts.e) {
          const bb = (0, gs.m)(Hb.gameBridge.latest("inventory"), sb);
          Zb.current = bb ? {
            idx: sb,
            name: bb.name,
            attributes: bb.attributes,
            amount: bb.amount
          } : null
        }
        ob()
      };
      (0, gb.c)("numberKeyPressed", (bb => {
        null !== Ab && sb && Wc(bb - 1, Ab)
      })), (0, Wb.useEffect)((() => {
        sb || (Zb.current = null, Sb(), bc(null))
      }), [sb, Sb, bc, Zb]);
      const ac = Zb.current;
      (0, Wb.useEffect)((() => {
        Ab === ts.e && pb(ts.e)(!0)
      }), [ac, Ab, pb]);
      const Tc = () => {
        Rb(), vb(), ob()
      };
      (0, gb.c)("chestRefreshed", Tc), (0, gb.c)("inventorySynced", Tc);
      const [Uc, Ic] = (0, Wb.useState)(new Map), Hc = null !== (cb = Uc.get(Ub)) && void 0 !== cb ? cb : null, fc = (bb, cb) => {
        Ic((sb => {
          const kb = sb.get(bb);
          return kb && kb.name === cb.name && kb.Bf === cb.Bf ? sb : new Map(sb).set(bb, cb)
        }))
      };
      (0, hb.f)("craftingRecipesEdited", (() => {
        ob()
      })), (0, hb.f)(Tk.e, (bb => {
        let {
          variation: cb,
          itemName: sb
        } = bb;
        fc(cb, {
          name: sb,
          Bf: 0
        })
      }));
      const [Mc, Xc] = (0, Wb.useState)(null), [mc, lc] = (0, Wb.useState)(null);
      (0, gb.c)("enchantingTableOpened", (bb => {
        let {
          position: cb,
          blockName: sb
        } = bb;
        Xc(cb), lc(sb)
      }));
      const [Qc, ec] = (0, Wb.useState)(""), [Cc, Nc] = (0, Wb.useState)(null);
      (0, Wb.useEffect)((() => {
        sb && Yb.current && (Yb.current.scrollTop = Bb.current)
      }), [sb]);
      return (bb => {
        const cb = (0, Wb.useRef)(bb);
        cb.current = bb, (0, Wb.useEffect)((() => {
          if (!bb.show) return;
          const sb = (bb, sb, kb, Wb) => {
              const {
                getPointerDownForIdx: ab,
                getPointerUpForIdx: Tb
              } = cb.current;
              ab(bb)(WW(sb, kb, Wb)), Tb(bb)(WW(sb, kb, Wb))
            },
            kb = {
              primary: (bb, cb) => {
                sb(bb, cb, 0, !1)
              },
              secondary: (bb, cb) => {
                sb(bb, cb, 2, !1)
              },
              quickMove: (bb, cb) => {
                sb(bb, cb, 0, !0)
              },
              dropHeld: (bb, sb) => {
                cb.current.getPointerDownForIdx(ts.b)(WW(sb, bb ? 0 : 2, !1))
              },
              dropSlot: (bb, sb) => {
                cb.current.dropFromIdx(bb, sb)
              },
              swapWithHotbar: (bb, sb) => {
                cb.current.swapWithHotbar(bb, sb)
              },
              cancel: () => {
                cb.current.removeDraggedInfoRef()
              },
              isHolding: () => !!cb.current.draggedInfoRef.current,
              hasItemAt: bb => {
                const {
                  draggedInfoRef: sb,
                  specialItemRef: kb
                } = cb.current;
                if (bb === ts.e) return !!kb.current;
                const Wb = (0, gs.m)(Hb.gameBridge.latest("inventory"), bb);
                return !!Wb && (0, As.e)(bb, (0, gs.e)(Wb), [sb.current, kb.current]).shown
              },
              hover: (bb, sb) => {
                const {
                  moveFollowerTo: kb,
                  getSetHovering: Wb
                } = cb.current;
                kb(sb.clientX, sb.clientY), Wb(null !== bb && void 0 !== bb ? bb : void 0)(null !== bb, void 0, {
                  pageX: sb.clientX,
                  pageY: sb.clientY
                })
              },
              moveTo: bb => {
                cb.current.moveFollowerTo(bb.clientX, bb.clientY)
              },
              close: () => {
                cb.current.close()
              }
            };
          return (0, Ns.l)(kb)
        }), [bb.show])
      })({
        show: sb,
        close: tb,
        draggedInfoRef: Kb,
        specialItemRef: Zb,
        getPointerDownForIdx: xb,
        getPointerUpForIdx: jb,
        getSetHovering: pb,
        moveFollowerTo: cc,
        removeDraggedInfoRef: Sb,
        dropFromIdx: kc,
        swapWithHotbar: Wc
      }), (0, Wb.useEffect)((() => {
        mb.j.QQ("inventoryDraggedItemUpdated", {
          draggedInfo: Kb.current,
          specialItemInfo: Zb.current,
          setHovered: pb,
          pointerDown: xb,
          pointerUp: jb,
          variation: Pb ? Ub : void 0,
          craftFlyAnims: Vb
        })
      })), (0, fb.jsxs)(ib.c, {
        show: sb,
        style: {
          touchAction: sb ? "none" : void 0
        },
        children: [Kb.current && (0, fb.jsx)(Es, {
          draggedInfo: Kb.current,
          toAddRef: Gb
        }), Kb.current && rb && (0, fb.jsx)(is, {
          className: "DraggedInvenItemName",
          displayInfo: cW(Kb.current),
          domRef: null
        }), !Kb.current && wb && (0, fb.jsx)(is, {
          displayInfo: wb,
          domRef: qb
        }), db.current && Kb.current && (0, fb.jsx)(Os, {
          info: db.current,
          draggedInfo: Kb.current
        }), Vb.map((bb => (0, fb.jsx)(Bs.c, {
          anim: bb,
          onComplete: ub
        }, bb.id))), (0, fb.jsx)(Tb.c, {
          show: sb,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: tb,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: xb(ts.b),
          pointerUp: jb(ts.b),
          doGameplayStartStopOnShow: !0
        }), Cb && (0, fb.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, fb.jsx)("div", {
            ref: Mb,
            className: "InventoryAdOuter",
            children: (0, fb.jsx)(hs.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Mb
              },
              verticalAlign: "start",
              showing: sb && nb,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, fb.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, fb.jsxs)("div", {
              className: nc()("Inventory", {
                WithPanelButtons: Qb,
                WideChestOpen: eb
              }),
              children: [(0, fb.jsx)("div", {
                className: "InventoryFiller"
              }), (0, fb.jsx)(us, {
                show: sb,
                buttons: lb
              }), (0, fb.jsxs)("div", {
                className: "InvenBody",
                children: [(0, fb.jsx)(zk, {
                  variation: Ub,
                  canCraft: Pb,
                  show: sb,
                  creativeMounted: Nb,
                  specialItemRef: Zb,
                  draggedInfo: Kb.current,
                  getSetHovering: pb,
                  getPointerDownForIdx: xb,
                  getPointerUpForIdx: jb,
                  enchantingTablePosition: Mc,
                  enchantingTableBlockName: mc,
                  selectedCraftable: Hc,
                  dispatchSelectedCraftable: bb => {
                    fc(Ub, bb)
                  },
                  creativeScrollDiv: Yb,
                  creativeSearchVal: Qc,
                  setCreativeSearchVal: ec,
                  creativeCategory: Cc,
                  setCreativeCategory: Nc,
                  onCraft: function(bb, cb) {
                    let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Rb(), (bb || sb.length > 0) && Lb((cb => {
                        const kb = [...cb],
                          Wb = cb.filter((bb => "ingredient" === bb.kind)).length;
                        for (const bb of sb.slice(0, Math.max(0, 24 - Wb))) kb.push({
                          id: (0, Bs.g)(),
                          ...bb,
                          to: bb.to
                        });
                        return bb && kb.push({
                          id: (0, Bs.g)(),
                          ...bb,
                          to: (0, gs.g)(bb.TM)
                        }), kb
                      })), null !== cb) {
                      var kb;
                      const bb = Hb.gameBridge.latest("inventory");
                      (0, Jb.Eb)(null === (kb = (0, gs.m)(bb, cb)) || void 0 === kb ? void 0 : kb.name) ? xb(cb)({
                        button: 0,
                        shiftKey: !0
                      }): Fb(cb, bb.selectedSlot)
                    }
                  }
                }), (0, fb.jsx)(Rk, {
                  draggedInfo: Kb.current,
                  specialItemInfo: Zb.current,
                  craftFlyAnims: Vb,
                  getSetHovering: pb,
                  getPointerDownForIdx: xb,
                  getPointerUpForIdx: jb,
                  variation: Ub,
                  canCraft: Pb,
                  isNewSlot: bb => Db.showNewItemIndicator && Ob.isNew(bb)
                })]
              })]
            }), (0, fb.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, fb.jsx)("div", {
                ref: Xb,
                className: "InventoryAd",
                children: (0, fb.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var UW = sb(1412),
      IW = sb(167);
    const HW = (0, Wb.memo)((function(bb) {
      let {
        show: cb,
        onOpen: sb,
        onClose: kb
      } = bb;
      const ab = (0, Wb.useRef)(0),
        Ub = () => (0, UW.h)() && !(0, UW.o)() && ab.current <= 2;
      cb = Ub() && cb;
      const Ib = () => {
        ab.current++, kb()
      };
      (0, hb.f)("ctrlCrouchWithoutFullscreen", (() => {
        Ub() && sb()
      })), (0, hb.f)("displaymodeFullscreenChange", (bb => {
        cb && bb && Ib()
      }));
      const Hb = "crazygames" === IW.r;
      return (0, fb.jsx)(Tb.c, {
        close: Ib,
        escDoesExit: !0,
        show: cb,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, fb.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, fb.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Hb && (0, fb.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, fb.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, fb.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Hb && (0, fb.jsx)(nb.n, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, UW.v)(), Ib()
              },
              children: (0, fb.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, fb.jsx)(nb.G, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Ib()
              },
              children: (0, fb.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var fW = sb(3397),
      MW = sb(3417),
      XW = sb(1332),
      nW = sb(3379),
      mW = sb(1335),
      lW = sb(36210),
      QW = sb(3388),
      eW = sb(3392);

    function CW(bb, cb) {
      return (0, lW.h)(!0, bb, cb) ? () => {
        !async function(bb) {
          await nW.c.refresh();
          const {
            data: cb,
            failed: sb
          } = nW.c.getState();
          if (null === cb || sb) return;
          const kb = nW.c.getExclusion(bb);
          if ("blocked" === kb) return;
          const Wb = null === kb;
          XW.NotificationProvider.showCustomPopup({
            body: cb => {
              const sb = sb => ({
                text: QW.i[sb].text,
                onClick: () => {
                  cb(), (0, eW.g)(sb, bb, null)
                }
              });
              return (0, fb.jsx)(mW.i, {
                title: Wb ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: bb
                  }
                },
                secondary: Wb ? sb("ignore") : void 0,
                confirm: sb("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: cb
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(bb)
      } : null
    }
    sb(3403);
    const NW = (0, Wb.memo)((function(bb) {
      let {
        show: cb,
        onOpen: sb,
        onClose: kb
      } = bb;
      const [ab, Ub] = (0, Wb.useState)(""), [Ib, Mb] = (0, Wb.useState)(""), [Xb, nb] = (0, Wb.useState)(null), [mb, lb] = (0, Wb.useState)(null), Qb = (0, gb.f)("hiddenPlayerNames"), eb = {
        kind: "worldCodeLine",
        onSubmit: (bb, cb) => {
          kb(), Hb.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: mb,
            YT: bb,
            details: cb
          })
        }
      }, Cb = {
        kind: "player",
        shownPlayerName: (0, cc.e)(ab, Qb),
        onSubmit: (bb, cb) => {
          kb(), (0, MW.e)({
            playerId: Ib,
            playerName: ab,
            chatMsgId: mb,
            policyId: bb,
            details: cb,
            onAccepted: CW(ab, Qb)
          })
        }
      };
      return (0, hb.f)("OpenReportMenu", (bb => {
        let {
          playerEId: cb,
          playerName: kb,
          jT: Wb,
          serverChatMsgId: ab
        } = bb;
        Mb(cb), Ub(kb), nb(Wb), lb(ab), sb()
      })), (0, fb.jsx)(Tb.c, {
        show: cb,
        close: kb,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, fb.jsx)("div", {
          className: "ReportPanel",
          children: cb && (0, fb.jsx)(fW.d, {
            reported: null === Ib ? eb : Cb,
            chatMessage: Xb,
            inGame: !0,
            onCancel: kb
          })
        })
      })
    }));
    var VW = sb(36423);
    const LW = (0, Wb.memo)((function(bb) {
      let {
        show: cb,
        onOpen: sb,
        onClose: kb
      } = bb;
      const {
        t: ab
      } = (0, vb.E)(), [Ub, Ib] = (0, Wb.useState)(null), [Mb, Xb] = (0, Wb.useState)(0);
      (0, hb.f)("OpenDiscordReportBox", (bb => {
        Hb.gameBridge.send("requestDiscordReportKey", bb), Xb(0), sb()
      }));
      const mb = () => {
        kb(), Ib(null), Xb(0)
      };
      return (0, hb.f)("setDiscordReportKey", (bb => {
        Ib(bb)
      })), (0, fb.jsx)(Tb.c, {
        show: cb,
        close: mb,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, fb.jsx)("div", {
          className: "ReportPanel",
          children: (0, fb.jsx)(mW.i, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(VW.b, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: mb
            },
            padStartsOn: "cancel",
            children: (0, fb.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, fb.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== Ub && void 0 !== Ub ? Ub : ab("report:loadingReportKey")
              }), (0, fb.jsx)(nb.d, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(Ub).catch((bb => {
                    console.error("Failed to copy report key:", bb)
                  })), Xb(Date.now())
                },
                disabled: Date.now() - Mb < 1e3 || !Ub,
                children: Date.now() - Mb < 1e3 ? ab("general:copied") : ab("general:copy")
              })]
            })
          })
        })
      })
    }));
    var uW = sb(1287);
    const YW = {
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
      hW = (0, Wb.memo)((function(bb) {
        let {
          show: cb,
          onOpen: sb,
          onClose: kb
        } = bb;
        const [ab, Ub] = (0, Wb.useState)(null), Ib = (0, Wb.useRef)(0), Mb = (0, Wb.useRef)(null), {
          t: Xb
        } = (0, vb.E)();
        (0, hb.f)("EditCustomLobbyBlock", (bb => {
          let {
            pos: cb
          } = bb;
          Ub(cb), null !== cb && sb(), Mb.current.scrollTo(0, Ib.current)
        }));
        const nb = bb => {
          Hb.gameBridge.send("setCustomLobbyBlock", {
            pos: ab,
            blockName: bb
          }), kb()
        };
        return (0, fb.jsx)(Tb.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: kb,
          escDoesExit: !0,
          show: cb,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, fb.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Mb,
            onScroll: () => {
              Ib.current = Mb.current.scrollTop
            },
            children: (0, fb.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(YW).map((bb => {
                let [cb, sb] = bb;
                return (0, fb.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, fb.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Xb(cb)
                  }), (0, fb.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(sb).map((bb => {
                      let [cb, {
                        tooltip: sb,
                        blocks: kb
                      }] = bb;
                      return (0, fb.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, fb.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Xb(cb), (0, fb.jsx)(Sb.c, {
                            hoverInfo: Xb(sb),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, fb.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: kb.map((bb => (0, fb.jsx)(JW, {
                            blockName: bb,
                            selectBlock: nb
                          }, bb)))
                        })]
                      }, cb)
                    }))
                  })]
                }, cb)
              }))
            })
          })
        })
      })),
      JW = (0, Wb.memo)((function(bb) {
        var cb;
        let {
          blockName: sb,
          selectBlock: kb
        } = bb;
        const Wb = (0, Lk.b)(sb),
          ab = null !== (cb = void 0 === Wb ? void 0 : (0, Vk.displayNameOf)(Wb)) && void 0 !== cb ? cb : sb,
          Tb = void 0 === Wb ? void 0 : (0, Vk.descriptionOf)(Wb);
        return (0, fb.jsx)(Sb.f, {
          tooltipInner: (0, fb.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, fb.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, fb.jsx)(Yb.d, {
                text: ab
              })
            }), Tb && (0, fb.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, fb.jsx)(Yb.d, {
                text: Tb
              })
            })]
          }),
          children: (0, fb.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => kb(sb),
            children: (0, fb.jsx)(Ls.d, {
              itemName: sb,
              amount: 1
            })
          })
        }, sb)
      }));
    var gW = sb(2749),
      BW = sb(4011),
      tW = sb(8956);

    function yW() {
      const bb = (0, gb.f)("itemInfo");
      return (0, Wb.useMemo)((() => function(bb) {
        return {
          getDefaultItemStat(cb, sb) {
            var kb;
            const Wb = bb[cb];
            return "description" === sb ? null === Wb || void 0 === Wb ? void 0 : Wb.description : null !== (kb = null === Wb || void 0 === Wb ? void 0 : Wb.displayName) && void 0 !== kb ? kb : cb
          }
        }
      }(bb)), [bb])
    }
    const PW = (0, Wb.memo)((function(bb) {
        var cb, sb, kb, ab, Ub, Ib, Hb, Mb, Xb, nb, mb, lb, eb, Cb, Nb, Vb, Lb, ub, Yb, Jb, gb, Bb, tb;
        let {
          togglePointerLock: yb,
          show: Pb,
          onOpen: Db,
          onClose: Eb
        } = bb;
        const {
          t: ib
        } = (0, vb.E)(), Ob = yW(), Gb = (0, Wb.useRef)(null), Kb = (0, Wb.useRef)(BW.b.MobHungerLevel.Hungry), Zb = (0, Wb.useRef)(null), zb = (0, gW.b)(), qb = (0, Wb.useRef)(null), db = (0, Wb.useRef)(null), Ab = Gb.current;
        (0, Wb.useEffect)((() => {
          if (!Pb) return;
          const bb = tW.h.openPet(qb.current);
          return db.current = bb, () => {
            bb.close(), db.current = null
          }
        }), [Pb]), (0, Wb.useEffect)((() => {
          Pb && Ab && db.current.show(function(bb) {
            var cb;
            let {
              mobType: sb,
              mobSettings: kb
            } = bb;
            return {
              mobType: sb,
              variation: null !== (cb = kb.variation) && void 0 !== cb ? cb : "default",
              metaInfo: kb.metaInfo,
              tamed: !(0, ik.L)(kb.ownerDbId)
            }
          }(Ab))
        }), [Pb, Ab]), (0, Wb.useEffect)((() => {
          const bb = () => {
            var bb;
            const cb = BW.b.getMobHungerLevel(null === (bb = Gb.current) || void 0 === bb ? void 0 : bb.mobSettings.petInfo.lastFedAt);
            if (cb !== Kb.current && (Kb.current = cb, zb()), Zb.current) {
              var sb;
              const bb = Date.now(),
                cb = BW.b.getNextStateAt(null === (sb = Gb.current) || void 0 === sb ? void 0 : sb.mobSettings.petInfo.lastFedAt);
              let kb = Math.floor((cb - bb) / 1e3),
                Wb = "";
              if (kb > 3600) {
                Wb += Math.floor(kb / 60 / 60).toString().padStart(2, "0"), Wb += ":", kb %= 3600
              }
              const ab = kb % 60;
              Wb += Math.floor(kb / 60).toString().padStart(2, "0"), Wb += ":", Wb += ab.toString().padStart(2, "0"), Zb.current.textContent = Wb
            }
          };
          bb();
          const cb = setInterval(bb, 250);
          return () => {
            clearInterval(cb)
          }
        }), [Ab, zb]), (0, hb.f)("showPetUi", (bb => {
          let {
            mobType: cb,
            mobSettings: sb
          } = bb;
          Gb.current = {
            mobType: cb,
            mobSettings: sb
          }, Pb || Db()
        }));
        const wb = null === (cb = Gb.current) || void 0 === cb ? void 0 : cb.mobSettings.health,
          rb = null === (sb = Gb.current) || void 0 === sb ? void 0 : sb.mobSettings.maxHealth,
          ob = BW.b.getFriendshipLevelInfo(null !== (kb = null === (ab = Gb.current) || void 0 === ab ? void 0 : ab.mobSettings.petInfo.friendshipPoints) && void 0 !== kb ? kb : 0);
        return (0, fb.jsx)(Tb.c, {
          className: "PetUIOuter",
          close: Eb,
          escDoesExit: !0,
          show: Pb,
          togglePointerLock: yb,
          forcePointerUnlock: Pb,
          globallyUniqueKey: "PetUI",
          children: (0, fb.jsx)("div", {
            className: "PetUI",
            children: (0, fb.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, fb.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, fb.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Ub = null === (Ib = Gb.current) || void 0 === Ib ? void 0 : Ib.mobSettings.name) && void 0 !== Ub ? Ub : "Your Pet"
                }), (0, fb.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: qb
                })]
              }), (0, fb.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, ik.L)(null === (Hb = Gb.current) || void 0 === Hb ? void 0 : Hb.mobSettings.petInfo.friendshipPoints) && (0, fb.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, fb.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: ib("mobAiPlugin:friendshipTitle")
                  }), (0, fb.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: BW.b.getIconsFromFriendshipPoints(null !== (Mb = Gb.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Mb ? Mb : 0).map(((bb, cb) => (0, fb.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: bb,
                        amount: 1
                      })
                    }, cb)))
                  }), (0, fb.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, fb.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, fb.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${ob.totalPointsForNextLevel>0?Math.max(ob.pointsIntoCurrentLevel/ob.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, fb.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: ob.totalPointsForNextLevel > 0 ? ` ${Math.ceil(ob.pointsIntoCurrentLevel)}/${Math.ceil(ob.totalPointsForNextLevel)}` : Math.ceil(ob.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, fb.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, fb.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: ib("mobAiPlugin:hungerTitle")
                  }), (0, fb.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: BW.b.hungerLevelIcons[Kb.current].map(((bb, cb) => (0, fb.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: bb,
                        amount: 1
                      })
                    }, cb)))
                  }), (0, fb.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [ib(BW.b.hungerLevelTranslations[Kb.current].translationKey), Kb.current !== BW.b.MobHungerLevel.Starving && !(0, ik.L)(null === (Xb = Gb.current) || void 0 === Xb ? void 0 : Xb.mobSettings.petInfo.lastFedAt) && (0, fb.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [ib("mobAiPlugin:nextFeedIn", {
                        state: ib(BW.b.hungerLevelTranslations[Kb.current + 1].translationKey)
                      }), ":", " ", (0, fb.jsx)("span", {
                        ref: Zb
                      })]
                    })]
                  })]
                }), (0, fb.jsx)(Sb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, fb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ib("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, fb.jsxs)("div", {
                    className: nc()("PetUIQuickStatsItem", {
                      Disabled: (0, ik.L)(wb) || (0, ik.L)(rb)
                    }),
                    children: [(0, fb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, fb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, ik.L)(wb) || (0, ik.L)(rb) ? "" : (0, fb.jsxs)(fb.Fragment, {
                        children: [Math.ceil(wb), (0, fb.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(rb)]
                        })]
                      })
                    })]
                  })
                }), (0, fb.jsx)(Sb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, fb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ib("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, fb.jsxs)("div", {
                    className: nc()("PetUIQuickStatsItem", {
                      Disabled: (0, ik.L)(null === (nb = Gb.current) || void 0 === nb ? void 0 : nb.mobSettings.attackDamage) || Gb.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, fb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, fb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (mb = Gb.current) || void 0 === mb ? void 0 : mb.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, fb.jsx)(Sb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, fb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ib("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, fb.jsxs)("div", {
                    className: nc()("PetUIQuickStatsItem", {
                      Disabled: (0, ik.L)(null === (lb = Gb.current) || void 0 === lb ? void 0 : lb.mobSettings.secondaryAttackDamage) || Gb.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, fb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, fb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (eb = Gb.current) || void 0 === eb ? void 0 : eb.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, fb.jsx)(Sb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, fb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ib("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, fb.jsxs)("div", {
                    className: nc()("PetUIQuickStatsItem", {
                      Disabled: (0, ik.L)(null === (Cb = Gb.current) || void 0 === Cb ? void 0 : Cb.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, fb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, fb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Nb = null === (Vb = Gb.current) || void 0 === Vb || null === (Lb = Vb.mobSettings.baseRunningSpeed) || void 0 === Lb ? void 0 : Lb.toFixed(2)) && void 0 !== Nb ? Nb : ""
                    })]
                  })
                }), (0, fb.jsx)(Sb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, fb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: ib("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, fb.jsxs)("div", {
                    className: nc()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (ub = Gb.current) || void 0 === ub ? void 0 : ub.mobSettings.metaInfo)
                    }),
                    children: [(0, fb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, fb.jsx)(Ls.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, fb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (Yb = Gb.current) || void 0 === Yb ? void 0 : Yb.mobSettings.metaInfo) ? (0, fb.jsx)(Qb.b, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, ik.L)(null === (Jb = Gb.current) || void 0 === Jb ? void 0 : Jb.mobSettings.tameInfo) && (0, fb.jsxs)(fb.Fragment, {
                  children: [(0, fb.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, fb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, fb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, fb.jsx)(EW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: BW.b.feedTextColours[BW.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, fb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, fb.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Gb.current.mobSettings.petInfo.superlikedFoodKnown ? (0, fb.jsx)(DW, {
                            food: Gb.current.mobSettings.petInfo.superlikedFood
                          }) : (0, fb.jsx)(EW, {
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
                    }), (0, fb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, fb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, fb.jsx)(EW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: BW.b.feedTextColours[BW.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, fb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (gb = Gb.current.mobSettings.tameInfo.likedFoods) || void 0 === gb ? void 0 : gb.filter((bb => !Gb.current.mobSettings.petInfo.superlikedFoodKnown || bb !== Gb.current.mobSettings.petInfo.superlikedFood)).map((bb => (0, fb.jsx)(DW, {
                          food: bb
                        }, bb)))
                      })]
                    }), (0, fb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, fb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, fb.jsx)(EW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: BW.b.feedTextColours[BW.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, fb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Bb = Gb.current.mobSettings.tameInfo.neutralFoods) || void 0 === Bb ? void 0 : Bb.map((bb => (0, fb.jsx)(DW, {
                          food: bb
                        }, bb)))
                      })]
                    }), (0, fb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, fb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, fb.jsx)(EW, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: BW.b.feedTextColours[BW.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, fb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (tb = Gb.current.mobSettings.tameInfo.dislikedFoods) || void 0 === tb ? void 0 : tb.map((bb => (0, fb.jsx)(DW, {
                          food: bb
                        }, bb)))
                      })]
                    })]
                  }), Gb.current.mobSettings.tameInfo.levelUpBonuses && (0, fb.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: BW.b.MAX_LEVEL + 1
                    }).map(((bb, cb) => {
                      const sb = cb;
                      if (0 === sb) return null;
                      const kb = Gb.current.mobSettings.tameInfo.levelUpBonuses[sb],
                        Wb = BW.b.getBonusDisplayInfo(Ob, Gb.current.mobSettings, Gb.current.mobType, kb);
                      return (0, fb.jsxs)("div", {
                        className: nc()("PetUIFeedDropContainer", {
                          Selected: sb === BW.b.getFriendshipLevelInfo(Gb.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, fb.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: sb
                          }).map(((bb, cb) => (0, fb.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, fb.jsx)(Ls.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${sb}-${cb}`)))
                        }), (0, fb.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Wb && (0, fb.jsx)(EW, {
                            icon: Wb.icon,
                            displayName: Wb.displayName,
                            description: Wb.description
                          })
                        })]
                      }, sb)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      DW = (0, Wb.memo)((function(bb) {
        let {
          food: cb,
          includeDescription: sb = !1
        } = bb;
        const kb = yW(),
          Wb = kb.getDefaultItemStat(cb, "displayName"),
          ab = kb.getDefaultItemStat(cb, "description");
        return (0, fb.jsx)(EW, {
          icon: cb,
          displayName: Wb,
          description: sb ? ab : null
        })
      })),
      EW = (0, Wb.memo)((function(bb) {
        let {
          icon: cb,
          displayName: sb,
          description: kb,
          tintColor: Wb,
          className: ab = "PetUIFoodItem"
        } = bb;
        return (0, fb.jsx)(Sb.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, fb.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, fb.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, fb.jsx)(Yb.d, {
                text: sb
              })
            }), kb && (0, fb.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, fb.jsx)(Yb.d, {
                text: kb
              })
            })]
          }),
          children: (0, fb.jsx)("div", {
            className: ab,
            children: (0, fb.jsx)(Ls.d, {
              itemName: cb,
              amount: 1,
              tintColor: Wb
            })
          })
        })
      }));
    var iW = sb(3565),
      OW = sb(1126),
      GW = sb(1253),
      KW = sb(36434),
      ZW = sb(36430),
      zW = sb(1008),
      qW = sb(2279);

    function dW(bb) {
      let {
        peers: cb
      } = bb;
      const [sb, kb] = (0, Wb.useState)(null), ab = (0, gb.f)("players");
      return (0, fb.jsx)("div", {
        className: "CodeEditorPresence",
        children: cb.map((bb => {
          var cb, Wb;
          const Tb = null !== (cb = null === (Wb = ab.byId[bb.playerId]) || void 0 === Wb ? void 0 : Wb.cosmetics) && void 0 !== cb ? cb : {};
          return (0, fb.jsxs)("div", {
            className: nc()("PresenceIcon", {
              Viewer: !bb.isEditor
            }),
            style: {
              backgroundColor: bb.colour
            },
            onMouseEnter: () => {
              kb(bb.playerId)
            },
            onMouseLeave: () => {
              kb(null)
            },
            children: [(0, fb.jsx)(qW.b, {
              cosmetics: Tb
            }), sb === bb.playerId && (0, fb.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: bb.colour
              },
              children: bb.playerName
            })]
          }, bb.playerId)
        }))
      })
    }
    var AW = sb(664),
      wW = sb(36425),
      rW = sb(36206),
      oW = sb(36440);

    function SW(bb) {
      const cb = bb.split("/"),
        sb = [];
      for (let kb = 1; kb < cb.length; kb++) sb.push(cb.slice(0, kb).join("/"));
      return sb
    }

    function RW(bb) {
      return bb.slice(bb.lastIndexOf("/") + 1)
    }
    const vW = (0, Wb.memo)((function(bb) {
      var cb;
      let {
        files: sb,
        activePath: kb,
        canEdit: ab,
        directoryLinked: Tb,
        pluginNames: Ub,
        activePluginName: Ib,
        activePluginFile: Hb,
        onSelect: Mb,
        onSelectPlugin: Xb,
        onCreate: mb,
        onRename: lb,
        onRenameFolder: eb,
        onDelete: Cb,
        onToggleDirectorySync: Nb,
        schematics: Vb,
        onManageSchematic: Lb
      } = bb;
      const {
        t: ub
      } = (0, vb.E)(), Yb = null !== (cb = (0, ZW.e)(sb)) && void 0 !== cb ? cb : GW.f, hb = Object.keys(sb), [Jb, gb] = (0, Wb.useState)((() => new Set)), Bb = function(bb, cb, sb) {
        const kb = {
          folders: new Map,
          files: []
        };
        for (const Tb of bb) {
          if (Tb === cb) continue;
          let bb = kb;
          for (const cb of SW(Tb)) {
            let sb = bb.folders.get(cb);
            sb || (sb = {
              folders: new Map,
              files: []
            }, bb.folders.set(cb, sb)), bb = sb
          }
          bb.files.push(Tb)
        }
        const Wb = [];
        bb.includes(cb) && Wb.push({
          kind: "file",
          path: cb,
          name: RW(cb),
          depth: 0
        });
        const ab = (bb, cb) => {
          const kb = [...bb.folders.entries()].sort(((bb, cb) => {
            let [sb] = bb, [kb] = cb;
            return sb.localeCompare(kb)
          }));
          for (const [Tb, Ub] of kb) {
            const bb = sb.has(Tb);
            Wb.push({
              kind: "folder",
              path: Tb,
              name: RW(Tb),
              depth: cb,
              collapsed: bb
            }), bb || ab(Ub, cb + 1)
          }
          bb.files.sort(((bb, cb) => bb.localeCompare(cb)));
          for (const sb of bb.files) Wb.push({
            kind: "file",
            path: sb,
            name: RW(sb),
            depth: cb
          })
        };
        return ab(kb, 0), Wb
      }(hb, Yb, Jb);
      (0, Wb.useEffect)((() => {
        gb((bb => {
          const cb = new Set(bb);
          let sb = !1;
          for (const Wb of SW(kb)) sb = cb.delete(Wb) || sb;
          return sb ? cb : bb
        }))
      }), [kb]);
      const tb = hb.length >= Ws.y,
        yb = (bb, cb) => {
          if (bb.length > KW.t) return `Path must be at most ${KW.t} characters`;
          if (!(0, KW.r)(bb)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === bb) return "index.d.ts cannot be the world-code entry";
          const kb = !!cb && (0, ZW.h)(cb, bb);
          if (cb && (0, ZW.l)(cb) && !kb) return `Cannot rename ${cb} (only swapping ${GW.f} and ${GW.h} is allowed)`;
          if (bb in sb) return "A file with that path already exists";
          if ((0, ZW.l)(bb) && !kb) {
            if ((bb === GW.f ? GW.h : GW.f) in sb) return `World code cannot have both ${GW.f} and ${GW.h}`
          }
          return null
        },
        Pb = bb => {
          XW.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === bb ? void 0 : `${bb}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: bb => yb(bb)
          }).getResult().then((bb => {
            "notificationTornDown" !== bb && null !== bb && "submit" === bb.type && mb(bb.value)
          }))
        },
        Db = bb => {
          XW.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: bb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: cb => cb === bb ? "That is already the file's path" : yb(cb, bb)
          }).getResult().then((cb => {
            "notificationTornDown" !== cb && null !== cb && "submit" === cb.type && lb(bb, cb.value)
          }))
        },
        Eb = bb => {
          const cb = bb => bb.replace(/\/+$/, "");
          XW.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: bb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: sb => {
              const kb = cb(sb);
              if (kb === bb) return "That is already the folder's path";
              for (const [cb, Wb] of(0, ZW.q)(hb, bb, kb)) {
                const bb = yb(Wb, cb);
                if (null !== bb) return bb
              }
              return null
            }
          }).getResult().then((sb => {
            "notificationTornDown" !== sb && null !== sb && "submit" === sb.type && eb(bb, cb(sb.value))
          }))
        },
        ib = bb => {
          XW.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: bb
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((cb => {
            !0 === cb && Cb(bb)
          }))
        };
      return (0, fb.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, fb.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, fb.jsx)("span", {
            children: "Files"
          }), ab && !tb && (0, fb.jsx)(nb.p, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Pb()
            },
            children: (0, fb.jsx)(Qb.b, {
              name: "plus"
            })
          })]
        }), (0, fb.jsxs)("div", {
          className: "FileTreeList",
          children: [Bb.map((bb => {
            const cb = bb.path;
            if ("folder" === bb.kind) return (0, fb.jsx)(jW, {
              path: cb,
              name: bb.name,
              depth: bb.depth,
              collapsed: bb.collapsed,
              onToggle: () => {
                var bb;
                bb = cb, gb((cb => {
                  const sb = new Set(cb);
                  return sb.delete(bb) || sb.add(bb), sb
                }))
              },
              canCreate: ab && !tb,
              canRename: ab,
              onCreate: Pb,
              onRename: Eb
            }, `folder:${cb}`);
            const Wb = (0, ZW.l)(cb),
              Tb = GW.f in sb && GW.h in sb,
              Ub = !Wb || Tb,
              Hb = null === Ib && cb === kb;
            return (0, fb.jsx)(ba, {
              path: cb,
              label: bb.name,
              depth: bb.depth,
              isActive: Hb,
              canRename: ab,
              onSelect: Mb,
              onRename: Db,
              onDelete: ib,
              canDelete: Ub && ab
            }, cb)
          })), (0, fb.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, fb.jsxs)("span", {
              children: ["Schematics (", Object.keys(Vb).length, "/", oW.e, ")"]
            }), ab && (0, fb.jsx)(nb.p, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(Vb).length >= oW.e,
              onClick: () => {
                Lb("")
              },
              children: (0, fb.jsx)(Qb.b, {
                name: "plus"
              })
            })]
          }), Object.keys(Vb).sort().map((bb => (0, fb.jsx)(ba, {
            path: bb,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Lb
          }, bb))), Ub.length > 0 && (0, fb.jsxs)(fb.Fragment, {
            children: [(0, fb.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, fb.jsx)("span", {
                children: "Plugins"
              })
            }), Ub.map((bb => {
              var cb;
              const sb = wW.i[bb],
                kb = Object.keys(null !== (cb = null === sb || void 0 === sb ? void 0 : sb.files) && void 0 !== cb ? cb : {
                  "index.ts": ""
                }).sort(((bb, cb) => "index.ts" === bb ? -1 : "index.ts" === cb ? 1 : bb.localeCompare(cb)));
              return (0, fb.jsxs)("div", {
                children: [(0, fb.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, ZW.z)(bb)
                }), kb.map((cb => (0, fb.jsx)(ba, {
                  path: cb,
                  nested: !0,
                  isActive: Ib === bb && Hb === cb,
                  canRename: !1,
                  onSelect: () => {
                    Xb(bb, cb)
                  },
                  canDelete: !1
                }, cb)))]
              }, bb)
            }))]
          })]
        }), (0, fb.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, fb.jsx)(nb.d, {
            className: "FileTreeFooterButton",
            onClick: Nb,
            children: ub(Tb ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function FW(bb) {
      return bb > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": bb
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function xW(bb) {
      let {
        depth: cb
      } = bb;
      return (0, fb.jsx)(fb.Fragment, {
        children: Array.from({
          length: cb
        }, ((bb, cb) => (0, fb.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": cb
          }
        }, cb)))
      })
    }

    function jW(bb) {
      let {
        path: cb,
        name: sb,
        depth: kb,
        collapsed: Wb,
        onToggle: ab,
        canCreate: Tb,
        canRename: Ub,
        onCreate: Ib,
        onRename: Hb
      } = bb;
      const Mb = [];
      Tb && Mb.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Ib(cb)
        }
      }), Ub && Mb.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Hb(cb)
        }
      });
      const Xb = FW(kb);
      return (0, fb.jsxs)("div", {
        className: nc()("FileTreeItem FileTreeFolder", Xb.className),
        style: Xb.style,
        children: [(0, fb.jsx)(xW, {
          depth: kb
        }), (0, fb.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Wb,
          onClick: ab,
          children: [(0, fb.jsx)(Qb.b, {
            className: "FileTreeFolderCaret",
            name: Wb ? "caret-right" : "caret-down"
          }), (0, fb.jsx)(Qb.b, {
            className: "FileTreeFolderIcon",
            name: Wb ? "folder" : "folder-open"
          }), sb]
        }), (0, fb.jsx)(pW, {
          path: cb,
          actions: Mb
        })]
      })
    }

    function pW(bb) {
      let {
        path: cb,
        actions: sb
      } = bb;
      const kb = (0, Wb.useRef)(null);
      return 0 === sb.length ? null : (0, fb.jsxs)("div", {
        ref: kb,
        className: "FileTreeItemActions",
        children: [(0, fb.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${cb}`,
          children: (0, fb.jsx)(Qb.b, {
            name: "ellipsis"
          })
        }), (0, fb.jsx)(rW.c, {
          triggerElementRef: kb,
          options: sb
        })]
      })
    }

    function ba(bb) {
      let {
        path: cb,
        label: sb = cb,
        depth: kb = 0,
        isActive: Wb,
        canRename: ab,
        onSelect: Tb,
        onRename: Ub,
        onDelete: Ib,
        canDelete: Hb,
        nested: Mb
      } = bb;
      const Xb = [];
      ab && Ub && Xb.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Ub(cb)
        }
      }), Hb && Ib && Xb.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Ib(cb)
        }
      });
      const nb = FW(kb);
      return (0, fb.jsxs)("div", {
        className: nc()("FileTreeItem", nb.className, {
          Active: Wb,
          Nested: Mb
        }),
        style: nb.style,
        children: [(0, fb.jsx)(xW, {
          depth: kb
        }), (0, fb.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: sb === cb ? void 0 : cb,
          onClick: () => {
            Tb(cb)
          },
          children: sb
        }), (0, fb.jsx)(pW, {
          path: cb,
          actions: Xb
        })]
      })
    }
    async function ca(bb) {
      const cb = (0, ZW.e)(bb);
      if (!cb || "" === bb[cb].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: kb
      } = await Promise.all([sb.e(289), sb.e(290)]).then((() => sb(40899)));
      return (0, wW.e)(kb(bb))
    }
    var sa = sb(36445);

    function ka(bb, cb) {
      const sb = Object.keys(bb),
        kb = Object.keys(cb);
      if (sb.length !== kb.length) return !1;
      for (const Wb of sb)
        if (!(Wb in cb) || bb[Wb] !== cb[Wb]) return !1;
      return !0
    }

    function Wa(bb, cb) {
      const sb = [],
        kb = [],
        Wb = [];
      for (const ab of Object.keys(cb)) ab in bb ? bb[ab] !== cb[ab] && Wb.push(ab) : sb.push(ab);
      for (const ab of Object.keys(bb)) ab in cb || kb.push(ab);
      return sb.sort(), kb.sort(), Wb.sort(), {
        creates: sb,
        deletes: kb,
        updates: Wb
      }
    }

    function aa(bb, cb) {
      var sb;
      const kb = {
          ...bb
        },
        Wb = (0, ZW.e)(cb),
        ab = (0, ZW.e)(kb);
      if (GW.f in kb && GW.h in kb) {
        const bb = null !== Wb && void 0 !== Wb ? Wb : GW.h,
          sb = bb === GW.f ? GW.h : GW.f;
        var Tb;
        if (!(bb in kb)) kb[bb] = null !== (Tb = cb[bb]) && void 0 !== Tb ? Tb : "";
        return delete kb[sb], kb
      }
      var Ub;
      return Wb && !(Wb in kb) ? (ab || (kb[Wb] = null !== (Ub = cb[Wb]) && void 0 !== Ub ? Ub : ""), kb) : (ab || Wb || (kb[GW.f] = null !== (sb = kb[GW.f]) && void 0 !== sb ? sb : "", delete kb[GW.h]), kb)
    }

    function Ta(bb, cb) {
      const sb = (0, ZW.e)(cb),
        kb = GW.f in cb && GW.h in cb;
      return bb.filter((bb => !(0, ZW.l)(bb) || (!!kb || sb !== bb)))
    }
    async function Ua(bb, cb, kb) {
      const Wb = bb.getLobbyFiles(),
        ab = (0, Ws.l)(kb, (0, ZW.r)(Wb, cb)),
        Tb = await bb.ensureJoined(cb),
        Ub = (0, KW.v)(Tb.docKey);
      if (Tb.doc === ab) return;
      for (let sb = 0; sb < 100; sb++) {
        const sb = bb.getCollabSnapshot();
        if (sb && (0, KW.v)(sb.docKey) === Ub && bb.getActivePath() === cb) {
          if (bb.replaceActiveDoc(Ub, ab)) return;
          await (0, ik.Q)(40)
        } else await (0, ik.Q)(40)
      }
      const {
        ChangeSet: Ib
      } = await sb.e(285).then((() => sb(40738))), fb = bb.getCollabSnapshot(), Mb = fb && (0, KW.v)(fb.docKey) === Ub ? fb : Tb;
      await async function(bb, cb, sb, kb) {
        const Wb = bb.of({
            from: 0,
            to: sb.length,
            insert: kb
          }, sb.length),
          ab = JSON.stringify([{
            clientID: cb.clientID,
            changes: Wb.toJSON()
          }]),
          Tb = (0, KW.v)(cb.docKey);
        ab.length <= KW.f ? Hb.gameBridge.send("sendCodeCollab", {
          Jc: KW.b.Push,
          gc: Tb,
          Bc: cb.version,
          Pc: ab
        }) : await (0, OW.postJsonWithMetricsCookiesAndJsonResponse)(`${cb.httpConfig.gsUrl}/code/collab-push`, iW.p["collab-push"].toBuffer({
          gameNameWithVariation: cb.httpConfig.gameNameWithVariation,
          lobbyName: cb.httpConfig.lobbyName,
          docKey: Tb,
          version: cb.version,
          updates: ab
        }), {
          retries: 0
        })
      }(Ib, Mb, Mb.doc, ab)
    }
    class Ia {
      constructor(bb) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = bb
      }
      async writeLobbyFiles(bb) {
        const cb = {
            ...this.bridge.getLobbyFiles()
          },
          sb = {
            ...cb
          };
        for (const {
            path: ab,
            text: Tb
          }
          of bb) sb[ab] = Tb;
        if (!bb.every((bb => {
            let {
              path: cb,
              text: kb
            } = bb;
            return (0, Ws.l)(kb, (0, ZW.r)(sb, cb)) === kb
          }))) return !1;
        const kb = [];
        try {
          for (const {
              path: cb,
              text: sb
            }
            of bb) kb.push(cb), cb in this.bridge.getLobbyFiles() || (this.bridge.createFile(cb, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(cb, !0)), await Ua(this.bridge, cb, sb)
        } catch (Wb) {
          for (const bb of kb) bb in cb ? await Ua(this.bridge, bb, cb[bb]).catch((cb => {
            console.error("World Code AI: couldn't put back", bb, cb)
          })) : this.bridge.deleteFile(bb);
          throw Wb
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const bb = await (0, sa.z)(this.bridge.getStorageKey());
        return !!bb && (this.handle = bb, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(bb), !0)
      }
      async unlinkFolder() {
        const bb = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, sa.e)(bb), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const bb = this.bridge.getStorageKey(),
          cb = await (0, sa.w)(bb);
        return !!cb && (!!await (0, sa.l)(cb, "readwrite") && (this.handle = cb, this.linked = !0, await (0, sa.G)(bb, cb), await this.scaffoldLocalTypes(cb), !0))
      }
      scaffoldLocalTypes(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const kb = (await ca(cb)).map((bb => wW.i[bb])),
              Wb = kb.map((bb => {
                var cb;
                return `${bb.name}:${Object.keys(null!==(cb=null===bb||void 0===bb?void 0:bb.files)&&void 0!==cb?cb:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Wb) return;
            const {
              ensureLocalBloxdTypes: ab
            } = await Promise.all([sb.e(81), sb.e(287), sb.e(292)]).then((() => sb(40906)));
            await ab(bb, kb), this.scaffoldedPluginNamesKey = Wb
          } catch (kb) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", kb)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(bb) {
        this.handle && await this.scaffoldLocalTypes(this.handle, bb), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(bb)
      }
      async onDocTextChanged(bb, cb) {
        if (!this.handle) return;
        const sb = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [bb]: cb
        })];
        this.running && (this.pendingDocText.set(bb, cb), sb.push(this.flushDocTextToDisk())), await Promise.all(sb)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const bb = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const cb = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [sb, kb] of cb) this.lastSynced[sb] !== kb && (await (0, sa.O)(bb, sb, kb), this.lastSynced = {
              ...this.lastSynced,
              [sb]: kb
            })
          }
        } catch (cb) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", cb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, sa.C)(this.handle))
          } catch (bb) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", bb)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, sa.l)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const cb = this.bridge.getLobbyFiles(),
              sb = await (0, sa.C)(this.handle);
            for (const bb of Object.keys(cb).filter(oW.c)) {
              if (sb[bb] === sa.r) return void this.bridge.setMessage(`Move ${bb} outside the linked folder before syncing its placeholder.`, "warning");
              sb[bb] = oW.l
            }
            if (ka(sb, cb)) {
              for (const bb of Object.keys(cb).filter(oW.c)) await (0, sa.O)(this.handle, bb, oW.l);
              return this.lastSynced = {
                ...sb
              }, void this.beginWatch()
            }
            const kb = await this.promptReconcile(function(bb) {
              return null !== (0, ZW.e)(bb)
            }(sb));
            if ("unlink" === kb) return void await this.unlinkFolder();
            if ("dismissed" === kb) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === kb) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(sb);
                for (const bb of Object.keys(cb).filter(oW.c)) await (0, sa.O)(this.handle, bb, oW.l);
                this.lastSynced = {
                  ...await (0, sa.C)(this.handle)
                }
              } else await (0, sa.R)(this.handle, cb), this.lastSynced = {
                ...cb
              }
            } catch (bb) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", bb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(bb) {
        return await new Promise((cb => {
          const sb = [{
              choice: "local",
              Button: nb.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: nb.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: nb.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            kb = (0, fb.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, fb.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, fb.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: bb ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, fb.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: sb.filter((cb => "local" !== cb.choice || bb)).map((bb => {
                  let {
                    choice: sb,
                    Button: kb,
                    labelKey: ab,
                    descriptionKey: Tb
                  } = bb;
                  return (0, fb.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, fb.jsx)(kb, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (bb => {
                          Wb.tearDownNotification(), cb(bb)
                        })(sb)
                      },
                      children: this.bridge.t(`codeEditor:${ab}`)
                    }), (0, fb.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Tb}`)
                    })]
                  }, sb)
                }))
              })]
            }),
            Wb = XW.NotificationProvider.showCustomPopup({
              body: kb,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Wb.getResult().then((bb => {
            "notificationTornDown" === bb && cb("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, sa.H)(this.handle, (bb => {
          this.onDiskFilesChanged(bb)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (bb) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", bb)
        }
      }
      async onDiskFilesChanged(bb) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const cb = this.bridge.getLobbyFiles();
        let sb = aa(bb, this.lastSynced);
        for (const ab in cb)
          if ((0, oW.c)(ab) && sb[ab] === sa.r) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const kb = Object.keys(sb).filter((bb => (0, oW.c)(bb) && !(bb in cb)));
        kb.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const ab of Object.keys(cb).filter(oW.c))(ab in sb || kb.length > 0 || !(ab in this.lastSynced)) && (sb[ab] = oW.l);
        if (!ka(sb, bb)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(bb, sb), sb = aa(await (0, sa.C)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!ka(sb, this.lastSynced)) {
          this.applying = !0;
          try {
            const bb = Wa(this.lastSynced, sb);
            if (await this.pushDiskDeltaToLobby(sb, cb), null !== this.lastLobbySeen)
              for (const sb of [...bb.creates, ...bb.updates, ...bb.deletes])(0, oW.c)(sb) || (sb in cb ? this.lastLobbySeen[sb] = cb[sb] : delete this.lastLobbySeen[sb]);
            this.lastSynced = {
              ...sb
            }
          } catch (Wb) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Wb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(bb, cb) {
        if (this.handle) {
          for (const sb of Object.keys(bb)) sb in cb || await (0, sa.D)(this.handle, sb);
          for (const [sb, kb] of Object.entries(cb)) bb[sb] !== kb && await (0, sa.O)(this.handle, sb, kb)
        }
      }
      async applyRemoteTreeToDisk(bb) {
        if (!this.handle) return;
        const cb = this.lastLobbySeen;
        if (null === cb) return void(this.lastLobbySeen = {
          ...bb
        });
        const sb = Object.keys(bb).filter((sb => cb[sb] !== bb[sb])),
          kb = Object.keys(cb).filter((cb => !(cb in bb)));
        if (0 !== sb.length || 0 !== kb.length) {
          this.applying = !0;
          try {
            for (const cb of [...kb, ...sb]) try {
              if (cb in bb) await (0, sa.O)(this.handle, cb, bb[cb]), this.lastSynced = {
                ...this.lastSynced,
                [cb]: bb[cb]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [cb]: bb[cb]
              };
              else {
                await (0, sa.D)(this.handle, cb);
                const bb = {
                  ...this.lastSynced
                };
                delete bb[cb], this.lastSynced = bb;
                const sb = {
                  ...this.lastLobbySeen
                };
                delete sb[cb], this.lastLobbySeen = sb
              }
            } catch (Wb) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Wb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(bb, cb) {
        const sb = function(bb, cb) {
          const sb = (0, ZW.e)(bb),
            kb = (0, ZW.e)(cb);
          return sb && kb && sb !== kb ? {
            from: sb,
            to: kb
          } : null
        }(bb, cb);
        return !!sb && (this.bridge.renameFile(sb.from, sb.to), await this.bridge.waitForLobbyPath(sb.to, !0), !0)
      }
      async applyLocalTreeToLobby(bb) {
        var cb;
        const sb = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), bb);
        const kb = this.bridge.getLobbyFiles(),
          Wb = Wa(kb, bb),
          ab = Ta(Wb.deletes, kb);
        for (const Hb of Wb.creates)(0, oW.c)(Hb) || (this.bridge.createFile(Hb, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Hb, !0));
        for (const Hb of ab)(0, oW.c)(Hb) || (this.bridge.deleteFile(Hb), await this.bridge.waitForLobbyPath(Hb, !1));
        if (!(0, ZW.e)(this.bridge.getLobbyFiles()) && !(0, ZW.e)(bb)) {
          if (this.bridge.createFile(GW.f, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(GW.f, !0), !this.handle) return;
          await (0, sa.O)(this.handle, GW.f, ""), bb = {
            ...bb,
            [GW.f]: ""
          }
        }
        const Tb = this.bridge.getLobbyFiles();
        for (const Hb of Object.keys(bb))(0, oW.c)(Hb) || Tb[Hb] !== bb[Hb] && await Ua(this.bridge, Hb, bb[Hb]);
        const Ub = this.bridge.getLobbyFiles(),
          Ib = sb in Ub ? sb : null !== (cb = (0, ZW.e)(Ub)) && void 0 !== cb ? cb : GW.f;
        await this.bridge.ensureJoined(Ib)
      }
      async pushDiskDeltaToLobby(bb, cb) {
        const sb = this.bridge.getActivePath(),
          kb = await this.renameLobbyEntryIfSwitched(cb, bb) ? this.bridge.getLobbyFiles() : cb,
          Wb = Wa(this.lastSynced, bb),
          ab = Ta(Wb.deletes, kb).filter((bb => bb in kb));
        for (const Tb of Wb.creates)(0, oW.c)(Tb) || (Tb in this.bridge.getLobbyFiles() || (this.bridge.createFile(Tb, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Tb, !0)), await Ua(this.bridge, Tb, bb[Tb]));
        for (const Tb of ab)(0, oW.c)(Tb) ? await this.bridge.deleteSchematic(Tb) : (this.bridge.deleteFile(Tb), await this.bridge.waitForLobbyPath(Tb, !1));
        for (const Tb of Wb.updates)(0, oW.c)(Tb) || await Ua(this.bridge, Tb, bb[Tb]);
        sb in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== sb && await this.bridge.ensureJoined(sb)
      }
    }
    var Ha = sb(1208);

    function fa() {
      const {
        websocketUrl: bb,
        gameNameWithVariation: cb,
        lobbyName: sb
      } = Hb.gameBridge.latest("connectedGame");
      return {
        gsUrl: Ha.clientSideServerUrls.getHttpUrlFromWebSocketUrl(bb),
        gameNameWithVariation: cb,
        lobbyName: sb
      }
    }
    async function Ma(bb) {
      const {
        gsUrl: cb,
        gameNameWithVariation: sb,
        lobbyName: kb
      } = fa();
      return await (0, OW.postBinaryWithMetricsCookiesAndCustomResponse)(`${cb}/code/schematics`, iW.ok.schematics.toBuffer({
        gameNameWithVariation: sb,
        lobbyName: kb,
        request: JSON.stringify(bb)
      }), {
        retries: 0
      }, OW.HttpPayloadType.json)
    }
    var Xa = sb(36016);

    function na(bb) {
      let {
        path: cb,
        revision: sb
      } = bb;
      const [kb, ab] = (0, Wb.useState)(""), [Tb, Ub] = (0, Wb.useState)(!1), [Ib, Hb] = (0, Wb.useState)(0);
      return (0, Wb.useEffect)((() => {
        let bb = !1;
        return ab(""), Ub(!1), Ma({
          action: "preview",
          path: cb
        }).then((cb => {
          bb || ab(`data:image/webp;base64,${cb.previewBase64}`)
        })).catch((cb => {
          console.error("Could not load schematic preview", cb), bb || Ub(!0)
        })), () => {
          bb = !0
        }
      }), [cb, sb, Ib]), (0, fb.jsxs)("div", {
        className: "SchematicPreview",
        children: [kb && (0, fb.jsx)("img", {
          src: kb,
          alt: `Preview of ${cb}`
        }), !kb && !Tb && (0, fb.jsx)(Bb.d, {
          loaderType: "Secondary"
        }), Tb && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, fb.jsx)(nb.d, {
            onClick: () => {
              Hb(Ib + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function ma(bb) {
      var cb;
      let {
        initialPath: sb,
        onChanged: kb,
        onClose: ab
      } = bb;
      const Tb = "" === sb,
        [Ub, Ib] = (0, Wb.useState)(null),
        [Hb, Mb] = (0, Wb.useState)(sb),
        [Xb, mb] = (0, Wb.useState)(!1),
        [lb, Qb] = (0, Wb.useState)(!1),
        [eb, Cb] = (0, Wb.useState)(null),
        [Nb, Vb] = (0, Wb.useState)(!1),
        [Lb, ub] = (0, Wb.useState)(""),
        Yb = (0, Wb.useRef)(null),
        hb = (0, Wb.useRef)(!1),
        Jb = (0, Wb.useRef)(!0);
      (0, Wb.useEffect)((() => (Jb.current = !0, Ma({
        action: "state"
      }).then((bb => {
        Jb.current && Ib(bb)
      })).catch((bb => {
        console.error("Could not load schematic assets", bb), Jb.current && ub("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        Jb.current = !1
      })), []);
      const gb = null === Ub || void 0 === Ub ? void 0 : Ub.assets[sb],
        Bb = Object.keys(null !== (cb = null === Ub || void 0 === Ub ? void 0 : Ub.assets) && void 0 !== cb ? cb : {}).length,
        tb = Hb.trim(),
        yb = tb ? (0, oW.c)(tb) ? null !== Ub && void 0 !== Ub && Ub.assets[tb] && (Tb || tb !== sb) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Pb = !!tb && !yb && (Tb ? Bb < oW.e : tb !== sb),
        Db = Nb || !Ub;
      async function Eb(bb) {
        if (!hb.current && Jb.current) {
          hb.current = !0, Vb(!0), ub("");
          try {
            const cb = await Ma({
              ...bb,
              expectedRevision: Ub.revision
            });
            kb(cb), Jb.current && ab()
          } catch (sb) {
            var cb;
            if (console.error("Schematic asset operation failed", sb), Jb.current) ub(sb instanceof rb.d ? null !== (cb = sb.errorMessageForUser) && void 0 !== cb ? cb : sb.message : String(sb));
            try {
              const bb = await Ma({
                action: "state"
              });
              kb(bb), Jb.current && Ib(bb)
            } catch (Wb) {
              console.error("Could not refresh schematic assets", Wb)
            }
          } finally {
            hb.current = !1, Jb.current && Vb(!1)
          }
        }
      }
      return (0, fb.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, fb.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Tb ? "New schematic" : Xb ? "Rename schematic" : "Schematic"
        }), Lb && (0, fb.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Lb
        }), !Ub && !Lb && (0, fb.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, fb.jsxs)("fieldset", {
          disabled: Db,
          children: [Tb || Xb ? (0, fb.jsxs)("label", {
            className: "SchematicField",
            children: [(0, fb.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, fb.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, fb.jsx)(gc.c, {
                className: "InputGenericPopupInput",
                defaultValue: sb,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Mb
              }, Xb ? "rename" : "create")
            })]
          }) : (0, fb.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: sb
          }), (Tb || Xb) && yb && (0, fb.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: yb
          }), Tb ? (0, fb.jsxs)(fb.Fragment, {
            children: [Bb >= oW.e && (0, fb.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", oW.e, " maximum)."]
            }), lb ? (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, fb.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Db || !Pb,
                children: (0, fb.jsx)(Xa.e, {
                  loading: null === eb,
                  schematics: null !== eb && void 0 !== eb ? eb : [],
                  disableAutoExport: !0,
                  onSchematicPicked: bb => {
                    !Db && Pb && Eb({
                      action: "profile",
                      path: tb,
                      schematicId: bb.schematicId
                    })
                  }
                })
              }), (0, fb.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, fb.jsx)(nb.d, {
                  className: "InputGenericPopupButton",
                  disabled: Db,
                  onClick: () => {
                    Qb(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, fb.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, fb.jsx)(nb.d, {
                className: "InputGenericPopupButton",
                disabled: Db || !Pb,
                onClick: () => {
                  Yb.current.click()
                },
                children: "Upload Schematic"
              }), (0, fb.jsx)(nb.d, {
                className: "InputGenericPopupButton",
                disabled: Db || !Pb,
                onClick: () => {
                  !async function() {
                    if (Qb(!0), ub(""), !eb) try {
                      const bb = await (0, OW.postJsonWithMetricsCookiesAndJsonResponse)(`${Ha.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      Jb.current && Cb(bb)
                    } catch (bb) {
                      console.error("Could not load profile schematics", bb), Jb.current && (Qb(!1), ub("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, fb.jsx)("input", {
              ref: Yb,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: bb => {
                var cb;
                const sb = null === (cb = bb.target.files) || void 0 === cb ? void 0 : cb[0];
                if (bb.target.value = "", !sb) return;
                if (sb.size > oW.i) return void ub("The schematic file is too large.");
                const kb = tb;
                Vb(!0);
                const Wb = new FileReader;
                Wb.onload = () => {
                  Eb({
                    action: "upload",
                    path: kb,
                    base64: String(Wb.result).split(",")[1]
                  })
                }, Wb.onerror = () => {
                  console.error("Could not read schematic file", Wb.error), Jb.current && (Vb(!1), ub("Could not read the selected file."))
                }, Wb.readAsDataURL(sb)
              }
            })]
          }) : gb ? (0, fb.jsxs)(fb.Fragment, {
            children: [!Xb && (0, fb.jsx)(na, {
              path: sb,
              revision: Ub.revision
            }), !Xb && (0, fb.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(gb.byteSize / 1024), " KB \xb7 ", gb.dimensions.join(" \xd7 "), " blocks"]
            }), (0, fb.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Xb ? (0, fb.jsxs)(fb.Fragment, {
                children: [(0, fb.jsx)(nb.d, {
                  className: "InputGenericPopupButton",
                  disabled: Db || !Pb,
                  onClick: () => {
                    Eb({
                      action: "rename",
                      path: sb,
                      newPath: tb
                    })
                  },
                  children: "Rename"
                }), (0, fb.jsx)(nb.d, {
                  className: "InputGenericPopupButton",
                  disabled: Db,
                  onClick: () => {
                    mb(!1), Mb(sb)
                  },
                  children: "Cancel"
                })]
              }) : (0, fb.jsxs)(fb.Fragment, {
                children: [(0, fb.jsx)(nb.d, {
                  className: "InputGenericPopupButton",
                  disabled: Db,
                  onClick: () => {
                    mb(!0)
                  },
                  children: "Rename"
                }), (0, fb.jsx)(nb.G, {
                  className: "InputGenericPopupButton",
                  disabled: Db,
                  onClick: () => {
                    Eb({
                      action: "remove",
                      path: sb
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Ub && (0, fb.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function la(bb) {
      if ("string" !== typeof bb) return null;
      try {
        const cb = JSON.parse(bb);
        return (0, ZW.o)(null === cb || void 0 === cb ? void 0 : cb.worldCodeEngine) && "boolean" === typeof cb.engineLocked && function(bb) {
          if (null === bb) return !0;
          const cb = null === bb || void 0 === bb ? void 0 : bb.location;
          return "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.reason) && (null === cb || "string" === typeof(null === cb || void 0 === cb ? void 0 : cb.path) && Number.isInteger(cb.line))
        }(cb.fallback) ? cb : (console.error("[CodeCollab] Malformed engine settings", bb), null)
      } catch (cb) {
        return console.error("[CodeCollab] Failed to parse engine settings", cb), null
      }
    }

    function Qa(bb) {
      let {
        fallback: cb,
        onGoToLine: sb
      } = bb;
      const {
        t: kb
      } = (0, vb.E)(), {
        location: Wb
      } = cb;
      return (0, fb.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [kb("codeEditorEngine:notice", {
          reason: cb.reason
        }), Wb && (0, fb.jsxs)(fb.Fragment, {
          children: [" ", (0, fb.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              sb(Wb.path, Wb.line)
            },
            children: kb("codeEditorEngine:goToLine", {
              line: String(Wb.line)
            })
          })]
        })]
      })
    }
    var ea = sb(4641);

    function Ca(bb) {
      let {
        label: cb,
        hint: sb,
        checked: kb,
        onChange: Wb
      } = bb;
      return (0, fb.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, fb.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, fb.jsx)("span", {
            children: cb
          }), (0, fb.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: sb
          })]
        }), (0, fb.jsx)("span", {
          className: "SwitchContainer",
          children: (0, fb.jsx)(Vc.e, {
            className: "SwitchCheckbox",
            checked: kb,
            onChange: bb => {
              Wb(bb.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Na(bb) {
      let {
        engine: cb,
        onSetEngine: sb,
        aiHints: kb,
        variation: Wb
      } = bb;
      const {
        t: ab
      } = (0, vb.E)();
      return (0, fb.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, fb.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: ab("codeEditor:moreOptions")
        }), cb && (0, fb.jsx)(Ca, {
          label: ab("codeEditorEngine:toggle"),
          hint: ab("codeEditorEngine:toggleHint"),
          checked: "ses" === cb,
          onChange: bb => {
            sb(bb ? "ses" : "quickjs")
          }
        }), kb && (0, fb.jsx)(Ca, {
          label: ab("codeEditorAiHints:toggle"),
          hint: ab("codeEditorAiHints:toggleHint"),
          checked: kb.shown,
          onChange: kb.setShown
        }), Wb && (0, fb.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, fb.jsx)(ea.f, {
            label: "codeEditor:variationLabel",
            children: (0, fb.jsx)(gc.c, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Wb.name,
              onValueChange: Wb.setName,
              onEnter: Wb.reload
            })
          }), (0, fb.jsx)(nb.v, {
            className: "CodeEditorButton",
            onClick: Wb.reload,
            children: ab("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var Va = sb(36452),
      La = sb(36455);

    function ua(bb) {
      let {
        close: cb
      } = bb;
      const {
        t: sb
      } = (0, vb.E)(), kb = [{
        name: sb("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: sb("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: sb("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, fb.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, fb.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: sb("codeEditor:tutorialsTitle")
        }), (0, fb.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: kb.map((bb => (0, fb.jsx)(nb.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              cb(), (0, La.I)(bb.tutorial)
            },
            children: bb.name
          }, bb.tutorial)))
        })]
      })
    }
    var Ya = sb(137),
      ha = sb(36203),
      Ja = sb(8394);
    const ga = (0, Wb.forwardRef)((function(bb, cb) {
      let {
        value: sb,
        onChange: kb,
        onSubmit: Wb,
        placeholder: ab,
        maxLength: Tb,
        rows: Ub = 2,
        allowNewLines: Ib = !1,
        onKeyDown: Hb,
        before: Mb
      } = bb;
      const {
        t: Xb
      } = (0, vb.E)(), mb = "" !== sb.trim(), lb = () => {
        mb && Wb()
      };
      return (0, fb.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Mb, (0, fb.jsx)("textarea", {
          ref: cb,
          className: "PanelPromptInput",
          value: sb,
          maxLength: Tb,
          rows: Ub,
          placeholder: ab,
          spellCheck: !1,
          autoComplete: "off",
          onChange: bb => {
            kb(Ib ? bb.target.value : bb.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: bb => {
            bb.nativeEvent.isComposing || 229 === bb.nativeEvent.keyCode ? bb.stopPropagation() : "Escape" !== bb.key && (bb.stopPropagation(), null === Hb || void 0 === Hb || Hb(bb), bb.defaultPrevented || "Enter" !== bb.key || Ib && bb.shiftKey || (bb.preventDefault(), lb()))
          }
        }), (0, fb.jsx)(nb.d, {
          className: "PanelPromptSend",
          disabled: !mb,
          onClick: lb,
          ariaLabel: Xb("codeEditorPanels:send"),
          children: (0, fb.jsx)(Qb.b, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function Ba(bb) {
      let {
        inputRef: cb
      } = bb;
      const {
        t: sb
      } = (0, vb.E)(), {
        messages: kb,
        reportedPlayers: ab,
        channel: Tb
      } = (0, Ja.l)(), [Ub, Ib] = (0, Wb.useState)(""), Hb = (0, Wb.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, fb.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, fb.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, fb.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: sb("codeEditorChat:title")
          })
        }), 0 === kb.length ? (0, fb.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: sb("codeEditorChat:empty")
        }) : (0, fb.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, fb.jsx)(ha.b, {
            messages: kb,
            reportedPlayers: ab
          })
        }), (0, fb.jsx)(ga, {
          ref: cb,
          value: Ub,
          onChange: Ib,
          onSubmit: () => {
            (0, Ja.h)(Ub), Ib(""), Hb.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: Jb.dd,
          rows: 1,
          placeholder: Tb ? sb("touchOnly" === (0, Ya.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Tb.channelName
          }) : sb("codeEditorChat:placeholder"),
          before: Tb && (0, fb.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Tb.elementBgColor
            },
            onClick: () => {
              Ja.c.selectNextChannel(), cb.current.focus()
            },
            children: (0, fb.jsx)(Yb.d, {
              text: Tb.elementContent
            })
          }),
          onKeyDown: bb => {
            const cb = Ub === Hb.current.text;
            if ("ArrowUp" !== bb.key && "ArrowDown" !== bb.key || !cb && "" !== Ub) "Tab" === bb.key && !bb.shiftKey && Tb && (bb.preventDefault(), Ja.c.selectNextChannel());
            else {
              bb.preventDefault();
              const sb = cb ? Hb.current.stepsBack : 0;
              Hb.current = (0, Ja.f)(sb + ("ArrowUp" === bb.key ? 1 : -1)), Ib(Hb.current.text)
            }
          }
        })]
      })
    }
    var ta = sb(36460);

    function ya(bb) {
      let {
        fX: cb,
        worldPanel: sb,
        closeWorld: kb,
        aiShown: Wb,
        defaultWidth: ab,
        children: Tb
      } = bb;
      const Ub = "hidden" !== cb;
      return (0, fb.jsx)(ta.b, {
        side: "right",
        defaultSize: Ub ? "max(18rem, 40%)" : ab,
        covers: "expanded" === cb ? "always" : Ub || Wb ? "narrow" : void 0,
        children: (0, fb.jsxs)("div", {
          className: nc()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === cb
          }),
          children: [Ub && (0, fb.jsx)(ta.b, {
            side: "top",
            onClose: kb,
            children: sb
          }), Tb]
        })
      })
    }
    var Pa = sb(1915),
      Da = sb(2013),
      Ea = sb(1291);
    class ia {
      constructor(bb, cb, sb) {
        this.measure = bb, this.apply = cb, this.now = sb, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var bb, cb;
        return null !== (bb = null === (cb = this.last) || void 0 === cb ? void 0 : cb.rect) && void 0 !== bb ? bb : null
      }
      sync() {
        const bb = function(bb) {
          const cb = Math.round(bb.left),
            sb = Math.round(bb.top);
          return {
            left: cb,
            top: sb,
            width: Math.round(bb.right) - cb,
            height: Math.round(bb.bottom) - sb
          }
        }(this.measure());
        if (bb.width <= 0 || bb.height <= 0) return;
        const cb = this.now(),
          sb = this.last;
        let kb = {
          width: bb.width,
          height: bb.height
        };
        null === sb || bb.width === sb.rect.width && bb.height === sb.rect.height || (this.resizing = cb - this.resizedAt < 100, this.resizedAt = cb);
        const Wb = null !== sb && this.resizing && cb - this.resizedAt < 100 && (bb.width !== sb.bufferSize.width || bb.height !== sb.bufferSize.height);
        Wb && (this.stretchedAt ??= cb), Wb && cb - this.stretchedAt < 250 ? kb = sb.bufferSize : this.stretchedAt = null;
        const ab = {
          rect: bb,
          bufferSize: kb
        };
        var Tb, Ub;
        null !== sb && (Ub = ab, (Tb = sb).rect.left === Ub.rect.left && Tb.rect.top === Ub.rect.top && Tb.rect.width === Ub.rect.width && Tb.rect.height === Ub.rect.height && Tb.bufferSize.width === Ub.bufferSize.width && Tb.bufferSize.height === Ub.bufferSize.height) || (this.last = ab, this.apply(ab))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function Oa(bb) {
      const {
        style: cb
      } = document.documentElement;
      for (const [sb, kb] of [
          ["--worldViewLeft", null === bb || void 0 === bb ? void 0 : bb.left],
          ["--worldViewTop", null === bb || void 0 === bb ? void 0 : bb.top],
          ["--worldViewWidth", null === bb || void 0 === bb ? void 0 : bb.width],
          ["--worldViewHeight", null === bb || void 0 === bb ? void 0 : bb.height]
        ]) void 0 === kb ? cb.removeProperty(sb) : cb.setProperty(sb, `${kb}px`)
    }
    var Ga = sb(1704),
      Ka = sb(1921);

    function Za(bb, cb) {
      (0, Wb.useEffect)((() => {
        if (!bb) return;
        const sb = bb => {
          var sb;
          "Escape" === bb.key ? (bb.stopPropagation(), bb.preventDefault(), cb()) : (sb = bb.code, Object.entries(Ts.v).some((bb => {
            let [cb, kb] = bb;
            const Wb = Ka.f[cb];
            return Wb.includes("ui") && !Wb.includes("core") && kb.includes(sb)
          })) && !(0, Ga.isTextEntry)(bb.target) && bb.preventDefault())
        };
        window.addEventListener("keydown", sb, !0);
        const kb = (0, qb.o)(cb);
        return () => {
          window.removeEventListener("keydown", sb, !0), kb()
        }
      }), [bb, cb])
    }

    function za() {
      return (0, uW.j)().some((bb => bb !== uW.b))
    }

    function qa(bb, cb) {
      return bb.map((bb => cb ? String(bb) : bb.toFixed(1))).join(", ")
    }

    function da(bb) {
      let {
        freeCamera: cb,
        picking: sb,
        hovered: kb
      } = bb;
      const {
        t: ab
      } = (0, vb.E)(), Tb = (0, Wb.useRef)(null), Ub = (0, Wb.useRef)(null);
      return (0, Wb.useEffect)((() => {
        const bb = (bb, cb) => {
            bb.textContent !== cb && (bb.textContent = cb)
          },
          sb = () => {
            const sb = cb ? Hb.gameBridge.lookup("freeCameraPos", null) : null;
            bb(Tb.current, qa(null !== sb && void 0 !== sb ? sb : Hb.gameBridge.lookup("localPos", null), !1));
            const kb = Hb.gameBridge.lookup("targetedBlockPos", null);
            bb(Ub.current, kb ? qa(kb, !0) : "-")
          };
        return sb(), (0, Ea.s)(sb)
      }), [cb]), (0, fb.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, fb.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: ab(cb ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, fb.jsx)("span", {
          ref: Tb
        }), (0, fb.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: ab("codeEditorWorld:lookingAt")
        }), (0, fb.jsx)("span", {
          ref: Ub,
          hidden: sb
        }), sb && (0, fb.jsxs)(fb.Fragment, {
          children: [(0, fb.jsx)("span", {
            children: kb ? qa(kb.pos, !0) : "-"
          }), kb && (0, fb.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: kb.name
          })]
        })]
      })
    }
    var Aa = sb(36469);

    function wa(bb) {
      const cb = bb.currentTarget.getBoundingClientRect();
      return {
        x: (bb.clientX - cb.left) / cb.width,
        y: (bb.clientY - cb.top) / cb.height
      }
    }

    function ra(bb) {
      const [cb, sb] = (0, Wb.useState)(!1), [kb, ab] = (0, Wb.useState)(null), Tb = (0, Wb.useRef)(null);
      (0, Wb.useEffect)((() => {
        if (!cb) return;
        let bb = null,
          sb = null,
          kb = 1 / 0;
        const Wb = (0, Ea.m)((cb => {
          kb += cb;
          const Wb = Tb.current;
          if (Wb === sb && kb < 100) return;
          sb = Wb, kb = 0;
          const Ub = Wb && Hb.gameBridge.lookup("blockAtViewPoint", Wb);
          var Ib, fb;
          (Ib = Ub) === (fb = bb) || null !== Ib && null !== fb && Ib.name === fb.name && (0, Aa.f)(Ib.pos, fb.pos) && (0, Aa.f)(Ib.normal, fb.normal) || (bb = Ub, ab(Ub), Hb.gameBridge.send("setBlockHighlight", Ub))
        }));
        return () => {
          Wb(), null !== bb && Hb.gameBridge.send("setBlockHighlight", null), ab(null)
        }
      }), [cb]);
      const Ub = (0, Wb.useCallback)((() => {
        sb(!1)
      }), []);
      Za(cb, Ub);
      const Ib = {
        onPointerMove: bb => {
          Tb.current = wa(bb)
        },
        onPointerLeave: () => {
          Tb.current = null
        },
        onClick: kb => {
          if (!cb) return;
          const Wb = Hb.gameBridge.lookup("blockAtViewPoint", wa(kb));
          null !== Wb && (sb(!1), bb(Wb.pos))
        }
      };
      return {
        picking: cb,
        setPicking: sb,
        hovered: kb,
        slotHandlers: Ib
      }
    }

    function oa(bb) {
      Hb.gameBridge.send("setFreeCameraMovesFly", bb)
    }

    function Sa(bb) {
      let {
        shown: cb,
        setShown: sb,
        canInsertCode: kb
      } = bb;
      const {
        t: ab
      } = (0, vb.E)(), {
        isTouchScreen: Tb
      } = (0, zb.p)(["isTouchScreen"]), Ub = (0, Wb.useRef)(null), Hb = (0, Wb.useCallback)((() => {
        var bb;
        null === (bb = Ub.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === bb || bb.focus()
      }), []), {
        control: Mb,
        take: Xb,
        release: lb,
        blocked: eb
      } = function(bb) {
        const [cb, sb] = (0, Wb.useState)("none"), kb = (0, Wb.useRef)("none"), [ab, Tb] = (0, Wb.useState)(!1), Ub = bb => {
          kb.current = bb, sb(bb)
        }, Ib = (0, Wb.useCallback)((() => {
          const cb = kb.current;
          "none" !== cb && (Ub("none"), (0, uW.n)(uW.b), "mouse" === cb && bb())
        }), [bb]), Hb = (0, Wb.useCallback)((bb => {
          za() ? Tb(!0) : (Ub("mouse" === bb && "touchOnly" !== (0, Ya.c)() ? "mouse" : "touch"), (0, uW.k)(uW.b))
        }), []);
        return (0, hb.f)("pointerLockUpdate", (bb => {
          bb && "touch" === kb.current && "touchOnly" !== (0, Ya.c)() ? Ub("mouse") : bb || "mouse" !== kb.current || Ib()
        })), (0, Wb.useEffect)((() => {
          if (!ab) return;
          const bb = () => {
            za() || Tb(!1)
          };
          return bb(), (0, uW.d)(bb)
        }), [ab]), Za("none" !== cb, Ib), (0, Wb.useEffect)((() => {
          if ("none" === cb) return;
          const bb = bb => {
            (0, Ga.isTextEntry)(bb.target) && Ib()
          };
          return document.addEventListener("focusin", bb), () => {
            document.removeEventListener("focusin", bb)
          }
        }), [cb, Ib]), (0, Wb.useEffect)((() => (document.addEventListener("pointerlockerror", Ib), () => {
          document.removeEventListener("pointerlockerror", Ib)
        })), [Ib]), (0, Wb.useEffect)((() => () => {
          "none" !== kb.current && null !== zb.d.get("openInGameMenuName") && (0, uW.n)(uW.b)
        }), []), {
          control: cb,
          take: Hb,
          release: Ib,
          blocked: ab
        }
      }(Hb), Cb = (0, Da.c)(ta.e);
      (0, Wb.useEffect)((() => {
        "touch" !== Mb || "shown" !== cb || Cb ? "none" === Mb && "expanded" === cb && sb("shown") : sb("expanded")
      }), [Mb, Cb]),
      function(bb, cb) {
        const sb = (0, Wb.useRef)(cb);
        sb.current = cb;
        const kb = (0, Wb.useRef)(null);
        (0, Wb.useLayoutEffect)((() => {
          const cb = new ia((() => bb.current.getBoundingClientRect()), (bb => {
            var cb;
            "none" !== sb.current && Oa(null !== (cb = null === bb || void 0 === bb ? void 0 : bb.rect) && void 0 !== cb ? cb : null), (0, Ea.A)().setGameView(bb)
          }), (() => performance.now()));
          kb.current = cb, cb.sync();
          const Wb = (0, Ea.k)((() => {
            cb.sync()
          }));
          return () => {
            Wb(), zb.d.set({
              worldPanelHud: null
            }), cb.stop()
          }
        }), [bb]), (0, Wb.useLayoutEffect)((() => {
          kb.current.sync(), Oa("none" === cb ? null : kb.current.rect), zb.d.set({
            worldPanelHud: cb
          })
        }), [cb])
      }(Ub, "touch" === Mb ? "touchControls" : "none");
      const {
        picking: Nb,
        setPicking: Vb,
        hovered: Lb,
        slotHandlers: ub
      } = ra((bb => {
        mb.j.QQ("CodeEditorInsertText", {
          text: `[${bb.join(", ")}]`,
          focus: !Tb
        }), (0, ta.e)() && sb("hidden")
      })), Yb = function() {
        const {
          allowed: bb,
          movesFly: cb
        } = (0, gb.f)("freeCamera"), sb = (0, Wb.useRef)(cb), kb = (0, Wb.useRef)(cb);
        return kb.current !== cb && (kb.current = cb, sb.current = cb), (0, Wb.useEffect)((() => () => {
          sb.current && oa(!1)
        }), []), {
          allowed: bb,
          on: cb,
          toggle: () => {
            sb.current = !cb, oa(!cb)
          }
        }
      }(), Jb = (0, Ib.d)("hideCoordinates"), Bb = (0, gb.f)("localPlayerAlive"), tb = !Bb || eb;
      (0, Wb.useEffect)((() => {
        Bb || lb()
      }), [Bb, lb]), (0, Wb.useEffect)((() => {
        !tb && kb || Vb(!1)
      }), [tb, kb, Vb]);
      const yb = Yb.on ? nb.n : nb.d,
        Pb = Nb ? nb.n : nb.d;
      return (0, fb.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, fb.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, fb.jsx)("span", {
            className: "WorldPanelTitle",
            children: ab("codeEditorWorld:title")
          }), "touch" === Mb && !Cb && (0, fb.jsx)(nb.d, {
            className: "WorldPanelButton",
            onClick: lb,
            children: ab("codeEditorWorld:backToCode")
          }), !tb && Yb.allowed && !Tb && (0, fb.jsx)(Sb.f, {
            tooltipInner: ab("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, fb.jsx)(yb, {
              className: "WorldPanelButton",
              ariaPressed: Yb.on,
              ariaLabel: ab("codeEditorWorld:freeCamera"),
              onClick: Yb.toggle,
              children: (0, fb.jsx)(Qb.b, {
                name: "video"
              })
            })
          }), !tb && kb && (0, fb.jsx)(Sb.f, {
            tooltipInner: ab("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, fb.jsxs)(Pb, {
              className: "WorldPanelButton",
              ariaPressed: Nb,
              onClick: () => {
                lb(), Vb(!Nb)
              },
              children: [(0, fb.jsx)(Qb.b, {
                name: "crosshairs"
              }), ab("codeEditorWorld:pick")]
            })
          })]
        }), !Jb && (0, fb.jsx)(da, {
          freeCamera: Yb.on,
          picking: Nb,
          hovered: Lb
        }), (0, fb.jsxs)("div", {
          ref: Ub,
          className: nc()("WorldPanelSlot", {
            TouchControl: "touch" === Mb,
            Picking: Nb
          }),
          onPointerDown: bb => {
            0 !== bb.button || tb || Nb || Xb(bb.pointerType)
          },
          ...ub,
          children: [!tb && !Nb && (0, fb.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !tb && "touch" !== Mb && (0, fb.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Nb && ab(Tb ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Nb && "none" === Mb && !Yb.on && ab(Tb ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Nb && "none" === Mb && Yb.on && ab("codeEditorWorld:clickToFly"), "mouse" === Mb && (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsx)(Pa.d, {
                noaAction: "OpenLobbyLeaderboard"
              }), ab("codeEditorWorld:backToCode")]
            })]
          }), tb && (0, fb.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, fb.jsx)("span", {
              children: ab(Bb ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, fb.jsx)(nb.d, {
              onClick: qb.g,
              children: ab("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var Ra = sb(4728);

    function va(bb) {
      let {
        fX: cb,
        setWorld: sb,
        toggleWorld: kb,
        aiShown: Wb,
        closeAi: ab
      } = bb;
      const {
        t: Tb
      } = (0, vb.E)(), Ub = Wb ? "ai" : "hidden" !== cb ? "world" : "code", Ib = [{
        value: "code",
        label: Tb("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Tb("codeEditorWorld:title")
      }];
      Wb && Ib.push({
        value: "ai",
        label: Tb("codeEditorWorld:aiPane")
      });
      return (0, fb.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, fb.jsx)(Ra.e, {
          options: Ib,
          value: Ub,
          onChange: bb => {
            "world" !== bb ? (Wb && ab(), sb("hidden")) : "hidden" === cb ? kb() : ab()
          },
          ariaLabel: Tb("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var Fa = sb(36471);
    class xa {
      constructor(bb, cb) {
        this.storageKey = bb, this.defaultValue = cb, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const bb = Eb.h.getItem(this.storageKey);
            this.value = "boolean" === typeof bb ? bb : this.defaultValue
          }
          return this.value
        }, this.set = bb => {
          this.value = bb, Eb.h.setItem(this.storageKey, bb);
          for (const cb of this.listeners) cb(bb)
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    }
    const ja = new xa("codeEditorLightMode", !1),
      pa = new xa("codeEditorAiHints", !0);

    function bT(bb) {
      const [cb, sb] = (0, Wb.useState)(bb.get);
      return (0, Wb.useEffect)((() => {
        const cb = bb.subscribe(sb);
        return sb(bb.get()), cb
      }), [bb]), [cb, bb.set]
    }
    var cT = sb(36479),
      sT = sb(36486),
      kT = sb(36494);
    const WT = (0, Wb.lazy)((() => Promise.all([sb.e(289), sb.e(285), sb.e(288), sb.e(284), sb.e(81), sb.e(287), sb.e(286), sb.e(283)]).then((() => sb(40726))))),
      aT = (0, Wb.lazy)((() => Promise.all([sb.e(76), sb.e(79), sb.e(80), sb.e(78), sb.e(291)]).then((() => sb(40882))))),
      TT = (0, Wb.lazy)((() => Promise.all([sb.e(289), sb.e(288), sb.e(81), sb.e(79), sb.e(80), sb.e(78), sb.e(287), sb.e(286), sb.e(77), sb.e(88)]).then((() => sb(40888)))));

    function UT(bb) {
      return Hb.gameBridge.query("worldCodeAiChunk", bb)
    }

    function IT() {
      return Hb.gameBridge.query("worldCodeAiGameState", null)
    }

    function HT(bb) {
      const {
        gsUrl: cb,
        gameNameWithVariation: sb,
        lobbyName: kb
      } = fa();
      return (0, OW.postJsonWithMetricsCookiesAndJsonResponse)(`${cb}/code/get-lobby-code`, iW.ok["get-lobby-code"].toBuffer({
        gameNameWithVariation: sb,
        lobbyName: kb,
        path: bb
      }), {
        retries: 1
      })
    }
    let fT = !1;
    const MT = [],
      XT = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      nT = (0, Wb.memo)((function(bb) {
        var cb, sb;
        let {
          show: kb,
          onOpen: ab,
          onClose: Ub,
          isLobbyCode: Mb
        } = bb;
        const Xb = (0, Wb.useRef)(""),
          [lb, eb] = (0, Wb.useState)(null),
          Cb = (0, Wb.useRef)(Mb),
          [Nb, Vb] = (0, Wb.useState)({
            message: null,
            type: null
          }),
          [Lb, ub] = (0, Wb.useState)(""),
          Yb = Nb.message ? Nb : {
            message: Lb,
            type: "warning"
          },
          [tb, yb] = (0, Wb.useState)(!0),
          [Pb, Eb] = bT(ja),
          [ib, Ob] = bT(pa),
          [Gb, Kb] = (0, Wb.useState)(!1),
          [Zb, db] = (0, Wb.useState)(!1),
          Ab = (0, Wb.useRef)(null),
          wb = (0, Wb.useRef)(!1);
        (0, Wb.useEffect)((() => {
          var bb;
          Zb && wb.current && (wb.current = !1, null === (bb = Ab.current) || void 0 === bb || bb.focus())
        }), [Zb]);
        const rb = (0, Fa.c)(),
          ob = (0, Wb.useRef)(null),
          Rb = (0, Wb.useRef)(null),
          {
            openInGameMenuName: Fb,
            openEverythingMenuName: xb
          } = (0, zb.p)(["openInGameMenuName", "openEverythingMenuName"]),
          jb = bb => {
            kb && (ob.current = bb, Jc.current = !0)
          };
        (0, hb.f)("OpenReportMenu", (() => {
          jb("lm")
        })), (0, hb.f)("OpenStoreFromCodeEditor", (() => {
          jb("store")
        })), (0, Wb.useEffect)((() => {
          const bb = ob.current;
          null === bb || "lm" === bb && ("makeReport" === Fb || "makeDiscordReport" === Fb) || "store" === bb && null !== xb || (ob.current = null, null === Fb && null === xb ? Mb ? (Rb.current = cs.current, mb.j.QQ("EditLobbyCode", lb)) : mb.j.QQ("EditCodeBlock", {
            pos: lb,
            canChangePos: Cb.current
          }) : (0, La.z)())
        }), [Fb, xb, Mb, lb]), (0, Wb.useEffect)((() => {
          if (kb) return () => {
            Rb.current = null
          }
        }), [kb]);
        const [pb, bc] = function() {
          const [bb, cb] = (0, Wb.useState)(fT);
          return (0, hb.f)("CodeEditorAiHelperShown", (bb => {
            cb(bb)
          })), [bb, (0, Wb.useCallback)((bb => {
            fT = bb, mb.j.QQ("CodeEditorAiHelperShown", bb)
          }), [])]
        }(), [cc, sc] = (0, Wb.useState)(null), [kc, Wc] = (0, Wb.useState)([]), [ac, Tc] = (0, Wb.useState)(0), [Uc, Ic] = (0, Wb.useState)(0), [Hc, fc] = (0, Wb.useState)(""), Mc = (0, Wb.useRef)(null), [Xc, mc] = (0, Wb.useState)(Mb ? kT.g : null), lc = Mb || null !== lb, Qc = (0, Ib.d)("canEditCode"), ec = (0, Ib.d)("canUseDevCreativeItems"), Cc = (0, Va.i)("welcome"), Nc = (0, Va.i)("docsOverview"), Vc = Nc ? "docsOverview" : "welcome", Lc = null !== Nc && void 0 !== Nc ? Nc : Cc, uc = (0, Va.i)("aiHelperOverview"), Yc = uc ? "aiHelperOverview" : "welcome", hc = null !== uc && void 0 !== uc ? uc : Cc, Jc = (0, Wb.useRef)(!1), gc = (0, Wb.useRef)(!1), Bc = (0, Wb.useRef)(null), [tc, yc] = (0, Wb.useState)(""), [Dc, Ec] = (0, Wb.useState)(!1), [ic, Oc] = (0, Wb.useState)(null), Gc = (0, gb.f)("connectedGame"), Kc = Mb && Qc && "classic" === Gc.gameNameWithVariation && !(0, Pc.F)(Gc.lobbyName), [Zc, zc] = (0, Wb.useState)(null), [qc, dc] = (0, Wb.useState)({
          [GW.f]: ""
        }), [Ac, wc] = (0, Wb.useState)({
          assets: {},
          revision: 0
        }), rc = (0, Wb.useRef)(Ac), oc = (0, Wb.useCallback)((bb => {
          var cb;
          bb.revision < rc.current.revision || (rc.current = bb, wc(bb), ub(bb.startupError ? `Schematics could not load: ${bb.startupError}` : ""), null === (cb = ls.current) || void 0 === cb || cb.onLobbyFilesChanged({
            ...Is.current,
            ...(0, oW.k)(bb.assets)
          }))
        }), []), [Sc, Rc] = (0, Wb.useState)(GW.f), [vc, Fc] = (0, Wb.useState)(null), [xc, jc] = (0, Wb.useState)(null), pc = (0, Wb.useRef)(!1), bs = (0, Wb.useRef)(null), cs = (0, Wb.useRef)(Sc);
        cs.current = Sc;
        const ss = (0, Wb.useRef)(vc);
        ss.current = vc;
        const ks = vc ? null : ic,
          as = ks && !ks.engineLocked ? ks.worldCodeEngine : null,
          Us = (0, Wb.useRef)(xc);
        Us.current = xc;
        const Is = (0, Wb.useRef)(qc);
        Is.current = qc;
        const Hs = (0, Wb.useRef)(null),
          fs = (0, Wb.useRef)(null),
          [Ms, Xs] = (0, Wb.useState)(!1),
          ns = (0, sa.u)(),
          ms = (0, Wb.useRef)([]),
          ls = (0, Wb.useRef)(null),
          Qs = (0, Wb.useRef)(null),
          es = (0, Wb.useRef)(null);

        function Cs(bb) {
          Vb(bb), clearTimeout(Bc.current), Bc.current = setTimeout((() => {
            Vb({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const Ns = (0, Wb.useCallback)((function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            pc.current && bs.current && (Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.Leave,
              gc: (0, KW.v)(bs.current),
              vT: !!bb || null
            }), pc.current = !1, bs.current = null), zc(null)
          }), []),
          Vs = (0, Wb.useCallback)((bb => {
            const cb = {
              kind: "lobby",
              path: bb
            };
            bs.current = cb, Rc(bb), Xb.current = "", Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.Join,
              gc: (0, KW.v)(cb)
            }), pc.current = !0
          }), []),
          Ls = (0, Wb.useCallback)((bb => {
            var cb;
            const sb = null === (cb = Qs.current) || void 0 === cb ? void 0 : cb.collabState;
            return sb && "lobby" === sb.docKey.kind && sb.docKey.path === bb && cs.current === bb ? Promise.resolve({
              doc: sb.doc,
              version: sb.version,
              clientID: sb.clientID,
              docKey: sb.docKey,
              httpConfig: sb.httpConfig
            }) : new Promise(((cb, sb) => {
              const kb = setTimeout((() => {
                  ms.current = ms.current.filter((bb => bb !== Wb)), sb(new Error(`Timed out joining ${bb}`))
                }), 15e3),
                Wb = sb => {
                  "lobby" === sb.docKey.kind && sb.docKey.path === bb && (clearTimeout(kb), ms.current = ms.current.filter((bb => bb !== Wb)), cb(sb))
                };
              ms.current.push(Wb), cs.current !== bb ? (Ns(!0), Vs(bb)) : pc.current || Vs(bb)
            }))
          }), [Vs, Ns]),
          us = (0, Wb.useCallback)((async function(bb, cb) {
            let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const kb = Date.now();
            let Wb = bb in Is.current;
            for (; Wb !== cb;) {
              if (Date.now() - kb > sb) throw new Error(`Timed out waiting for lobby path ${bb} present=${cb}`);
              await (0, ik.Q)(50), Wb = bb in Is.current
            }
          }), []),
          Ys = (0, Wb.useCallback)((bb => {
            const cb = Is.current,
              sb = GW.f in cb && GW.h in cb;
            if (!(0, ZW.l)(bb) || sb) {
              if (cs.current === bb) {
                var kb;
                const Wb = sb && (0, ZW.l)(bb) ? bb === GW.f ? GW.h : GW.f : null !== (kb = (0, ZW.e)(cb)) && void 0 !== kb ? kb : GW.f;
                fs.current = {
                  fromPath: bb,
                  toPath: Wb
                }, Rc(Wb)
              }
              Hb.gameBridge.send("sendCodeCollab", {
                Jc: KW.b.DeleteFile,
                gc: (0, KW.v)({
                  kind: "lobby",
                  path: cs.current
                }),
                FT: bb
              })
            }
          }), []),
          hs = (0, Wb.useCallback)((bb => {
            Rb.current = null, Fc(null), jc(null), !Mb || bb === cs.current && pc.current || (Ns(!0), Vs(bb))
          }), [Mb, Ns, Vs]),
          gs = (0, Wb.useCallback)(((bb, cb) => {
            const sb = wW.i[bb],
              kb = sb && cb in sb.files ? cb : "index.ts";
            if (bb !== ss.current || kb !== Us.current) {
              var Wb;
              if (bb !== ss.current) null === (Wb = ls.current) || void 0 === Wb || Wb.stopContinuousSync(), Ns(!0);
              Fc(bb), jc(kb)
            }
          }), [Ns]),
          Bs = (0, Wb.useCallback)((bb => {
            var cb;
            const sb = cs.current,
              kb = Is.current[sb],
              Wb = pc.current && !ss.current && sb in bb && void 0 !== kb ? {
                ...bb,
                [sb]: kb
              } : bb;
            dc(Wb);
            const ab = Hs.current;
            if (ab && ab in bb) Hs.current = null, ab !== cs.current && hs(ab);
            else if (!(cs.current in bb) && pc.current && !ss.current) {
              var Tb;
              hs(null !== (Tb = (0, ZW.e)(bb)) && void 0 !== Tb ? Tb : GW.f)
            }
            null === (cb = ls.current) || void 0 === cb || cb.onLobbyFilesChanged({
              ...Wb,
              ...(0, oW.k)(rc.current.assets)
            })
          }), [hs]),
          ts = (0, Wb.useCallback)((() => HT(cs.current).then((async bb => {
            if (!pc.current || !bb.files) return null;
            Bs(bb.files);
            const cb = await Ma({
              action: "state"
            });
            return oc(cb), {
              ...bb.files,
              ...(0, oW.k)(cb.assets)
            }
          })).catch((bb => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", bb), Cs({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Bs, oc]),
          ys = () => {
            Ub()
          };
        (0, Wb.useEffect)((() => {
          if (ub(""), !kb || !Mb) return;
          let bb = !1;
          return rc.current = {
            assets: {},
            revision: 0
          }, wc(rc.current), Ma({
            action: "state"
          }).then((cb => {
            bb || oc(cb)
          })).catch((cb => {
            console.error("Could not load project schematics", cb), bb || ub("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            bb = !0
          }
        }), [kb, Mb, oc]);
        const Ps = (0, Wb.useCallback)((function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            bs.current && Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.Submit,
              gc: (0, KW.v)(bs.current),
              ...bb ? {
                Pc: "keepOpen"
              } : {}
            })
          }), []),
          Ds = (0, Wb.useCallback)((() => {
            if (!bs.current || "lobby" !== bs.current.kind) return;
            const bb = tc.trim();
            (0, zW.t)(bb) ? (Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.ReloadAsVariation,
              gc: (0, KW.v)(bs.current),
              Pc: bb
            }), Ec(!1)) : Cs({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [tc]),
          Es = (0, Wb.useCallback)((bb => {
            Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.SetEngine,
              gc: (0, KW.v)({
                kind: "lobby",
                path: cs.current
              }),
              Pc: bb
            })
          }), []),
          is = (0, Wb.useCallback)((bb => {
            if (!ss.current && Qc && (Cb.current || Mb)) {
              if (Mb) {
                var cb;
                const sb = (0, ZW.r)(Is.current, cs.current),
                  kb = Math.min(Ws.w, Math.max(0, Ws.B - sb)),
                  Wb = bb.slice(0, kb);
                return Xb.current = Wb, dc((bb => ({
                  ...bb,
                  [cs.current]: Wb
                }))), void(null === (cb = ls.current) || void 0 === cb || cb.onDocTextChanged(cs.current, Wb))
              }
              Xb.current = bb, fc(bb)
            }
          }), [Qc, Mb]);
        (0, hb.f)("EditLobbyCode", (bb => {
          var cb;
          Db.featureFlags.canSeePlayerWrittenText && Mb && (Ns(), eb(bb), Xb.current = "", dc({
            [GW.f]: ""
          }), Oc(null), Rc(GW.f), Fc(null), jc(null), Hs.current = null, fs.current = null, null === (cb = ls.current) || void 0 === cb || cb.stopContinuousSync(), ab(), Vs(GW.f))
        })), (0, hb.f)("EditCodeBlock", (bb => {
          let {
            pos: cb,
            canChangePos: sb
          } = bb;
          if (Db.featureFlags.canSeePlayerWrittenText && !Mb)
            if (Ns(), null !== cb && (cb = [...cb]), eb(cb), Cb.current = sb, null !== cb) {
              Xb.current = "", fc(""), ab();
              const bb = {
                  kind: "codeBlock",
                  pos: cb
                },
                kb = (0, KW.v)(bb);
              Mc.current !== kb && (Mc.current = kb, Wc([]), Ic(ac)), mc((0, kT.e)(kb, [cb[0], cb[1], cb[2]], !!sb)), bs.current = bb, Hb.gameBridge.send("sendCodeCollab", {
                Jc: KW.b.Join,
                gc: (0, KW.v)(bb)
              }), pc.current = !0
            } else kb && Ub()
        })), (0, hb.f)("codeCollabRejoin", (bb => {
          const cb = bs.current ? (0, KW.v)(bs.current) : null;
          cb && bb.docKey === cb && (Xb.current = bb.doc, Mb || fc(bb.doc), zc((cb => cb ? {
            ...cb,
            doc: bb.doc,
            version: bb.version,
            clientID: (0, AW.d)()
          } : cb)))
        })), (0, hb.f)("codeCollab", (bb => {
          var cb;
          const sb = bs.current ? (0, KW.v)(bs.current) : null;
          if (bb.type === KW.e.LobbyFilesChanged && Mb) {
            if ("string" !== typeof bb.files) return void ts();
            try {
              Bs(JSON.parse(bb.files))
            } catch (Hb) {
              console.error("[CodeCollab] Failed to parse lobby files", Hb), ts()
            }
            return
          }
          if (bb.type === KW.e.EngineSettings && Mb) return void Oc(la(bb.engineSettings));
          const Wb = bb.type === KW.e.Joined ? (0, KW.j)(bb.docKey) : null,
            ab = Mb && "lobby" === (null === (cb = bs.current) || void 0 === cb ? void 0 : cb.kind) && (0, ZW.l)(bs.current.path) && "lobby" === (null === Wb || void 0 === Wb ? void 0 : Wb.kind) && (0, ZW.l)(Wb.path);
          if (!sb || bb.docKey === sb || ab)
            if (bb.type !== KW.e.ForceClose) {
              if (kb)
                if (bb.type === KW.e.Joined) {
                  var Tb;
                  const fb = JSON.parse(bb.peers),
                    nb = bb.existingCursors ? JSON.parse(bb.existingCursors) : [],
                    Qb = (0, AW.d)(),
                    eb = fa(),
                    {
                      gsUrl: Cb,
                      gameNameWithVariation: Nb,
                      lobbyName: Lb
                    } = eb,
                    ub = null !== (Tb = (0, KW.j)(bb.docKey)) && void 0 !== Tb ? Tb : bs.current;
                  ub && (bs.current = ub, "lobby" === ub.kind && (Rc(ub.path), cs.current = ub.path));
                  const Yb = ub || (Mb ? {
                    kind: "lobby",
                    path: cs.current
                  } : {
                    kind: "codeBlock",
                    pos: lb
                  });

                  function hb(cb) {
                    var sb, kb;
                    if (!pc.current) return;
                    const Wb = null !== (sb = cb.code) && void 0 !== sb ? sb : "",
                      ab = null !== (kb = cb.collabVersion) && void 0 !== kb ? kb : 0;
                    Xb.current = Wb, Mb || fc(Wb), Mb && cb.files ? dc(cb.files) : Mb && dc((bb => ({
                      ...bb,
                      [cs.current]: Wb
                    })));
                    const Tb = {
                      doc: Wb,
                      version: ab,
                      clientID: Qb,
                      docKey: Yb,
                      peers: fb,
                      editorCount: bb.editorCount,
                      existingCursors: nb,
                      httpConfig: eb
                    };
                    if (zc(Tb), "lobby" === Yb.kind) {
                      var Ub;
                      const bb = {
                        doc: Wb,
                        version: ab,
                        clientID: Qb,
                        docKey: Yb,
                        httpConfig: eb
                      };
                      for (const cb of [...ms.current]) cb(bb);
                      null === (Ub = ls.current) || void 0 === Ub || Ub.startWhenReady()
                    }
                    cb.canSeeCode ? (clearTimeout(Bc.current), Vb({
                      message: null,
                      type: null
                    })) : function(bb) {
                      clearTimeout(Bc.current), Vb(bb)
                    }(XT);
                    const Ib = Rb.current;
                    Rb.current = null, Mb && Ib && cb.files && Ib in cb.files && Ib !== cs.current && hs(Ib)
                  }
                  Mb ? HT(cs.current).then(hb).catch((bb => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", bb), Ns()
                  })) : (0, OW.postJsonWithMetricsCookiesAndJsonResponse)(`${Cb}/code/get-code-block`, iW.ok["get-code-block"].toBuffer({
                    gameNameWithVariation: Nb,
                    lobbyName: Lb,
                    pos: lb
                  }), {
                    retries: 1
                  }).then(hb).catch((bb => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", bb), Ns()
                  }))
                } else if (bb.type === KW.e.Presence) {
                if (!sb) return;
                const Jb = JSON.parse(bb.peers);
                zc((cb => cb ? {
                  ...cb,
                  peers: Jb,
                  editorCount: bb.editorCount
                } : cb))
              }
            } else {
              var Ib;
              if (!sb) return;
              kb && Mb && "keptOpen" === bb.updates && mb.j.QQ("CodeEditorKeepEdits");
              const gb = bs.current;
              pc.current = !1, bs.current = null, zc(null);
              if (!Mb || "close" === bb.updates) return (0, sT.h)(), void(kb && Ub());
              if (!kb) return;
              const Bb = Is.current,
                tb = fs.current;
              fs.current = null;
              const yb = "lobby" === (null === gb || void 0 === gb ? void 0 : gb.kind) && gb.path === (null === tb || void 0 === tb ? void 0 : tb.fromPath),
                Pb = tb && (yb || tb.toPath in Bb || (0, ZW.l)(tb.toPath)) ? tb.toPath : cs.current in Bb ? cs.current : null !== (Ib = (0, ZW.e)(Bb)) && void 0 !== Ib ? Ib : GW.f;
              Vs(Pb)
            }
        })), (0, hb.f)("refetchCode", (() => {
          Db.featureFlags.canSeePlayerWrittenText && kb && pc.current && (Qc || (Ns(), Mb ? mb.j.QQ("EditLobbyCode", lb) : mb.j.QQ("EditCodeBlock", {
            pos: lb,
            canChangePos: Cb.current
          })))
        }));
        const Os = (0, Wb.useCallback)((() => {
            kb && (Kb(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [kb]),
          Gs = (0, Wb.useCallback)((() => {
            Kb(!1)
          }), []);
        (0, Wb.useEffect)((() => {
          kb && Qc && ("docsButton" === Lc && Gb ? (0, La.e)("docsButton") : Lc && La.f.includes(Lc) && !Gb && (Kb(!0), bc(!1)))
        }), [kb, Qc, Lc, Gb, bc]);
        const Ks = (0, Wb.useCallback)((() => {
          bc(!1)
        }), [bc]);
        (0, Wb.useEffect)((() => {
          kb && Qc && lc && ("aiHelperButton" === hc && pb ? (0, La.e)("aiHelperButton") : hc && La.b.includes(hc) && !pb && (bc(!0), Kb(!1)))
        }), [kb, Qc, lc, hc, pb, bc]), (0, Wb.useEffect)((() => {
          if (!kb || !Qc) return;
          const bb = Mb ? "worldCode" : "codeBlock";
          return (0, La.B)(bb, !0), () => {
            (0, La.B)(bb, !1)
          }
        }), [kb, Qc, Mb]), (0, Wb.useEffect)((() => {
          if (kb) return () => {
            Jc.current ? Jc.current = !1 : (0, La.z)()
          }
        }), [kb]), (0, Wb.useEffect)((() => {
          (0, La.F)("exportButton", !!ec)
        }), [ec]);
        const {
          t: Zs
        } = (0, vb.E)(), zs = !pb && ac > Uc, qs = zs ? nb.G : nb.v, ds = (0, Wb.useCallback)(((bb, cb) => {
          mb.j.QQ("CodeEditorGoToLine", {
            path: bb,
            line: cb
          }), hs(bb)
        }), [hs]), As = (0, Wb.useCallback)((bb => {
          es.current = bb
        }), []), ws = function(bb, cb) {
          const [sb, kb] = (0, Wb.useState)(null);
          return (0, Wb.useEffect)((() => {
            if (!cb) return void kb(null);
            let sb = !1;
            return ca(bb).then((bb => {
              sb || kb(bb)
            }), (bb => {
              console.error("[CodeEditor] could not collect the imported plugins", bb), sb || kb(null)
            })), () => {
              sb = !0
            }
          }), [bb, cb]), sb
        }(qc, kb);
        (0, Wb.useEffect)((() => {
          ws && vc && !ws.includes(vc) && (Fc(null), jc(null), Mb && !pc.current && Vs(cs.current))
        }), [vc, ws, Mb, Vs]), Qs.current = {
          collabState: Zc,
          ensureJoinedPath: Ls,
          waitForLobbyPath: us,
          pullLobbyFiles: ts,
          t: Zs,
          canEditCode: !!Qc
        }, ls.current || (ls.current = new Ia({
          getLobbyFiles: () => ({
            ...Is.current,
            ...(0, oW.k)(rc.current.assets)
          }),
          deleteSchematic: async bb => {
            const cb = await Ma({
              action: "remove",
              path: bb,
              expectedRevision: rc.current.revision
            });
            oc(cb)
          },
          getActivePath: () => cs.current,
          getCollabSnapshot: () => {
            var bb;
            if (ss.current) return null;
            const cb = null === (bb = Qs.current) || void 0 === bb ? void 0 : bb.collabState;
            return cb ? {
              doc: cb.doc,
              version: cb.version,
              clientID: cb.clientID,
              docKey: cb.docKey,
              httpConfig: cb.httpConfig
            } : null
          },
          replaceActiveDoc: (bb, cb) => {
            var sb, kb;
            return null !== (sb = null === (kb = es.current) || void 0 === kb ? void 0 : kb.call(es, bb, cb)) && void 0 !== sb && sb
          },
          ensureJoined: bb => Qs.current.ensureJoinedPath(bb),
          createFile: (bb, cb) => {
            !1 !== (null === cb || void 0 === cb ? void 0 : cb.focus) && (Hs.current = bb), Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.CreateFile,
              gc: (0, KW.v)({
                kind: "lobby",
                path: cs.current
              }),
              FT: bb
            })
          },
          renameFile: (bb, cb) => {
            const sb = (0, KW.v)({
              kind: "lobby",
              path: cs.current
            });
            cs.current === bb && (fs.current = {
              fromPath: bb,
              toPath: cb
            }, Rc(cb)), Hb.gameBridge.send("sendCodeCollab", {
              Jc: KW.b.RenameFile,
              gc: sb,
              FT: bb,
              xT: cb
            })
          },
          deleteFile: bb => {
            Ys(bb)
          },
          waitForLobbyPath: (bb, cb, sb) => Qs.current.waitForLobbyPath(bb, cb, sb),
          pullLobbyFiles: () => Qs.current.pullLobbyFiles(),
          setMessage: (bb, cb) => {
            Cs({
              message: bb,
              type: cb
            })
          },
          onUnlinked: () => {
            Xs(!1)
          },
          t: bb => Qs.current.t(bb),
          canEditCode: () => Qs.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: bb,
              lobbyName: cb
            } = Hb.gameBridge.latest("connectedGame");
            return (0, sa.h)(bb, cb)
          }
        }));
        const rs = (0, Wb.useCallback)((async bb => {
            const cb = ls.current;
            if (!cb) return !1;
            try {
              return await cb.writeLobbyFiles(bb)
            } catch (sb) {
              return console.error("World Code AI: couldn't write the change", sb), !1
            }
          }), []),
          os = (0, Wb.useCallback)((async bb => {
            var cb, sb;
            const kb = null === (cb = bb.find((bb => bb.path === cT.d))) || void 0 === cb ? void 0 : cb.text,
              Wb = bs.current;
            return void 0 !== kb && "codeBlock" === (null === Wb || void 0 === Wb ? void 0 : Wb.kind) && (!(null === (sb = es.current) || void 0 === sb || !sb.call(es, (0, KW.v)(Wb), kb)) && (Xb.current = kb, fc(kb), !0))
          }), []),
          Ss = (0, Wb.useCallback)((async () => {
            try {
              var bb, cb;
              const sb = await HT(GW.f);
              return !1 === sb.canSeeCode ? null : null !== (bb = sb.files) && void 0 !== bb ? bb : {
                [GW.f]: null !== (cb = sb.code) && void 0 !== cb ? cb : ""
              }
            } catch (sb) {
              return console.error("World Code AI: couldn't read World Code for a code block", sb), null
            }
          }), []),
          Rs = (0, Wb.useMemo)((() => ({
            [cT.d]: Hc
          })), [Hc]),
          vs = (0, Wb.useCallback)(((bb, cb) => {
            mb.j.QQ("CodeEditorGoToLine", {
              path: cT.d,
              line: cb
            })
          }), []);
        (0, Wb.useEffect)((() => {
          pb && kb && Ic(ac)
        }), [pb, kb, ac]);
        const Fs = (0, Wb.useCallback)((() => {
            var bb, cb;
            Ps();
            const sb = (0, Db.isTouchscreen)() ? "open World Code again" : `press ${null!==(bb=null===(cb=Ts.v.OpenCodeEditor)||void 0===cb?void 0:cb[0])&&void 0!==bb?bb:"F8"}`,
              kb = Mb ? `\ud83e\udd16 Try out your change, then ${sb} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            mb.j.QQ("chat", {
              content: [{
                str: kb,
                style: {
                  color: Jb.L.cyanUiText
                }
              }]
            })
          }), [Ps, Mb]),
          xs = (0, Wb.useCallback)((bb => {
            const cb = lb,
              sb = Cb.current;
            Mb || !cb || Hb.gameBridge.lookup("codeBlockClickable", cb) ? (0, sT.j)(bb, {
              submit: () => {
                Ps(), mb.j.QQ("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: Jb.L.cyanUiText
                    }
                  }]
                }), !Mb && cb && setTimeout((() => {
                  Hb.gameBridge.send("clickCodeBlock", cb)
                }), 1e3)
              },
              reopen: () => {
                (0, qb.q)() || (Mb ? mb.j.QQ("EditLobbyCode", cb) : mb.j.QQ("EditCodeBlock", {
                  pos: cb,
                  canChangePos: sb
                }))
              }
            }) : Fs()
          }), [Ps, Mb, lb, Fs]),
          ps = (0, Wb.useCallback)((() => {
            bc(!1)
          }), [bc]),
          bk = (0, Wb.useRef)(ys);
        bk.current = ys;
        const ck = (0, Wb.useCallback)((function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            mb.j.QQ("WorldCodeAiDraft", {
              text: bb,
              send: cb
            }), bk.current(), mb.j.QQ("EditLobbyCode", lb)
          }), [lb]),
          sk = (0, Wb.useCallback)((bb => {
            bk.current(), bb.codeBlock ? mb.j.QQ("EditCodeBlock", {
              pos: [...bb.pos],
              canChangePos: bb.canChangePos
            }) : mb.j.QQ("EditLobbyCode", lb)
          }), [lb]);
        (0, hb.f)("WorldCodeAiDraft", (bb => {
          Mb && (sc(bb), bc(!0))
        }));
        const kk = !!Qc && !!Lc && La.f.includes(Lc),
          Wk = !!Qc && !!hc && La.b.includes(hc);
        (0, Wb.useEffect)((() => {
          kb && pb && lc && !kk && Kb(!1)
        }), [kb, pb, lc, kk]);
        const ak = (0, Wb.useCallback)((() => {
            bc(!1), Kb(!1)
          }), [bc]),
          {
            fX: Tk,
            setWorld: Uk,
            toggleWorld: Ik
          } = function(bb) {
            let {
              showAi: cb,
              showDocs: sb,
              showChat: kb,
              hideOtherRightPanels: ab
            } = bb;
            const [Tb, Ub] = (0, Wb.useState)("hidden"), Ib = (0, Wb.useRef)(null), Hb = (0, Wb.useCallback)((() => {
              Ib.current = null, Ub((bb => "hidden" === bb ? bb : (0, ta.e)() ? "hidden" : "shown"))
            }), []);
            (0, Wb.useEffect)((() => {
              (cb || sb) && Hb()
            }), [cb, sb, Hb]), (0, Wb.useEffect)((() => {
              kb && Hb()
            }), [kb, Hb]);
            const fb = "hidden" !== Tb && (0, ta.e)();
            (0, Wb.useLayoutEffect)((() => {
              if (fb) {
                const bb = document.activeElement;
                bb instanceof HTMLElement && bb.closest(".cm-content") && (Ib.current = bb, bb.blur())
              } else {
                var bb;
                null === (bb = Ib.current) || void 0 === bb || bb.focus(), Ib.current = null
              }
            }), [fb]);
            const Mb = (0, Wb.useCallback)((() => {
              "hidden" === Tb ? (Ub("shown"), (0, ta.e)() && ab()) : Ub("hidden")
            }), [Tb, ab]);
            return {
              fX: Tb,
              setWorld: Ub,
              toggleWorld: Mb
            }
          }({
            showAi: pb,
            showDocs: Gb,
            showChat: Zb,
            hideOtherRightPanels: ak
          }),
          Hk = pb && null !== Xc && lc,
          fk = (0, Wb.useCallback)((() => {
            sc(null)
          }), []),
          [Mk, Xk] = (0, Wb.useState)(null);
        (0, hb.f)("WorldCodeAiSelection", (bb => {
          kb && (Xk(bb), bc(!0), Kb(!1))
        }));
        const nk = (0, Wb.useCallback)((() => {
          Xk(null)
        }), []);
        (0, hb.f)("chat", (bb => {
          let {
            content: cb
          } = bb;
          if (!Mb && null === Mc.current) return;
          const sb = Array.isArray(cb) ? cb : [cb],
            kb = sb.some((bb => {
              var cb;
              return (null === bb || void 0 === bb || null === (cb = bb.style) || void 0 === cb ? void 0 : cb.color) === Jb.L.redUiText
            })),
            Wb = sb.map((bb => {
              var cb;
              const sb = null !== (cb = null === bb || void 0 === bb ? void 0 : bb.str) && void 0 !== cb ? cb : bb;
              return "string" === typeof sb ? sb : ""
            })).join("");
          kb && /world code|error/i.test(Wb) && (Wc((bb => [...bb, Wb].slice(-10))), Tc((bb => bb + 1)), (0, sT.e)(Wb))
        })), (0, Wb.useEffect)((() => {
          if (!kb || !Mb || !ns) return;
          let bb = !1;
          return (async (cb, sb) => {
            const kb = await (null === (cb = ls.current) || void 0 === cb ? void 0 : cb.tryRestoreHandle());
            !bb && kb && (Xs(!0), null === (sb = ls.current) || void 0 === sb || sb.startWhenReady())
          })(), () => {
            bb = !0
          }
        }), [kb, Mb, ns]), (0, Wb.useEffect)((() => {
          var bb;
          kb || (null === (bb = ls.current) || void 0 === bb || bb.stopContinuousSync(), Ns(!1), gc.current && (gc.current = !1, Hb.gameBridge.send("sendChatMessage", {
            jT: "//export",
            channelName: null
          })))
        }), [kb, Ns]);
        const mk = (0, Wb.useCallback)((async () => {
            if (ns && ls.current) try {
              if (!await ls.current.linkFolder()) return;
              Xs(!0), await ls.current.startWhenReady()
            } catch (bb) {
              console.error("[WorldCodeDirectorySync] Link failed", bb), Cs({
                message: Zs("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [ns, Zs]),
          lk = (0, Wb.useCallback)((async () => {
            ls.current && await ls.current.unlinkFolder()
          }), []),
          Qk = (0, Wb.useCallback)((() => {
            ns ? Ms ? lk() : mk() : XW.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [ns, Ms, mk, lk]),
          ek = Mb && "hidden" !== Tk;
        return (0, fb.jsxs)(Tb.c, {
          className: nc()("CodeEditorBg", {
            CodeEditorLight: Pb,
            WorldShown: "hidden" !== Tk
          }),
          close: ys,
          escDoesExit: !0,
          show: kb,
          togglePointerLock: !1,
          globallyUniqueKey: Mb ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, fb.jsx)(Va.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Zs("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Qc && !Mb
          }), (0, fb.jsx)(Va.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, fb.jsxs)(fb.Fragment, {
              children: [(0, fb.jsx)("p", {
                children: Zs("codeEditor:tutorialWorldCodeWelcome")
              }), (0, fb.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, fb.jsx)("li", {
                  children: Zs("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, fb.jsx)("li", {
                  children: Zs("codeEditor:tutorialWorldCodeUseReact")
                }), (0, fb.jsx)("li", {
                  children: Zs("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Qc && Mb
          }), (0, fb.jsx)("div", {
            className: "CodeEditorTitle",
            children: Mb ? "World Code" : "Code Block"
          }), (0, fb.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, fb.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, fb.jsx)(Sb.f, {
                tooltipInner: Zs(ec ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: ec ? void 0 : 0,
                hideTooltip: "exportButton" === Cc,
                children: (0, fb.jsx)(Va.g, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Zs("codeEditor:tutorialExport"),
                  enabled: !!Qc,
                  children: (0, fb.jsx)(nb.n, {
                    className: "CodeEditorButton",
                    disabled: !ec,
                    onClick: () => {
                      "exportButton" === Cc && ((0, La.e)("exportButton"), Jc.current = !0), gc.current = !0, ys()
                    },
                    padDestructive: !0,
                    children: Zs("codeEditor:exportWorld")
                  })
                })
              }), (0, fb.jsx)(va, {
                fX: Tk,
                setWorld: Uk,
                toggleWorld: Ik,
                aiShown: Hk,
                closeAi: ps
              })]
            }), (0, fb.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Qc && (0, fb.jsx)(Sb.f, {
                tooltipInner: Zs("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Cc,
                children: (0, fb.jsx)(Va.g, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Zs("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, fb.jsx)(nb.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Zs("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, La.e)("helpButton"), XW.NotificationProvider.showCustomPopup({
                        body: bb => (0, fb.jsx)(ua, {
                          close: bb
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, fb.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, fb.jsx)(Qb.b, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, fb.jsx)(Sb.f, {
                tooltipInner: Zs("codeEditor:closeTooltip"),
                children: (0, fb.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    ys()
                  },
                  children: (0, fb.jsx)(nb.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, fb.jsx)(dW, {
            peers: null !== (cb = null === Zc || void 0 === Zc ? void 0 : Zc.peers) && void 0 !== cb ? cb : []
          }), (0, fb.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [Zb && rb && (0, fb.jsx)(ta.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                db(!1)
              },
              children: (0, fb.jsx)(Ba, {
                inputRef: Ab
              })
            }), Mb && (0, fb.jsx)(vW, {
              schematics: Ac.assets,
              onManageSchematic: bb => {
                Qc && XW.NotificationProvider.showCustomPopup({
                  body: cb => (0, fb.jsx)(ma, {
                    initialPath: bb,
                    onChanged: oc,
                    onClose: cb
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: qc,
              activePath: Sc,
              canEdit: !!Qc,
              directoryLinked: Ms,
              pluginNames: null !== ws && void 0 !== ws ? ws : MT,
              activePluginName: vc,
              activePluginFile: xc,
              onSelect: hs,
              onSelectPlugin: gs,
              onToggleDirectorySync: Qk,
              onCreate: bb => {
                Hs.current = bb, Hb.gameBridge.send("sendCodeCollab", {
                  Jc: KW.b.CreateFile,
                  gc: (0, KW.v)({
                    kind: "lobby",
                    path: cs.current
                  }),
                  FT: bb
                })
              },
              onRename: (bb, cb) => {
                cs.current === bb && (fs.current = {
                  fromPath: bb,
                  toPath: cb
                }, Rc(cb)), Hb.gameBridge.send("sendCodeCollab", {
                  Jc: KW.b.RenameFile,
                  gc: (0, KW.v)({
                    kind: "lobby",
                    path: cs.current
                  }),
                  FT: bb,
                  xT: cb
                })
              },
              onRenameFolder: (bb, cb) => {
                const [sb] = (0, ZW.q)([cs.current], bb, cb);
                sb && (fs.current = {
                  fromPath: sb[0],
                  toPath: sb[1]
                }, Rc(sb[1])), Hb.gameBridge.send("sendCodeCollab", {
                  Jc: KW.b.RenameFolder,
                  gc: (0, KW.v)({
                    kind: "lobby",
                    path: cs.current
                  }),
                  FT: bb,
                  xT: cb
                })
              },
              onDelete: Ys
            }), (0, fb.jsx)("div", {
              className: nc()("CodeEditorMessage", {
                CodeEditorMessageHidden: !Yb.message,
                CodeEditorMessageSuccess: "success" === Yb.type
              }),
              children: Yb.message && (0, fb.jsx)("div", {
                className: "CodeEditorMessageText",
                children: Yb.message
              })
            }), (0, fb.jsx)(Wb.Suspense, {
              fallback: (0, fb.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, fb.jsx)(Bb.d, {})
              }),
              children: (0, fb.jsx)(WT, {
                isLobbyCode: Mb,
                code: Zc ? Zc.doc : Xb.current,
                files: Mb ? qc : void 0,
                activePath: Mb ? Sc : void 0,
                pluginName: vc,
                pluginFile: xc,
                pluginSource: vc && xc ? null === (sb = wW.i[vc]) || void 0 === sb ? void 0 : sb.files[xc] : void 0,
                onChange: is,
                canEditCode: Qc,
                setTemporaryMessage: Cs,
                close: ys,
                showTooltips: tb,
                lightMode: Pb,
                collabState: Zc,
                setActiveDocReplacer: As,
                showAiHints: lc && ib,
                canAiChangeCode: !!Qc && (Mb || !!Cb.current),
                onRemoteDocChange: bb => {
                  var cb;
                  (Xb.current = bb, Mb) ? (dc((cb => ({
                    ...cb,
                    [cs.current]: bb
                  }))), null === (cb = ls.current) || void 0 === cb || cb.onDocTextChanged(cs.current, bb)) : fc(bb)
                }
              })
            }), (Gb || Hk || "hidden" !== Tk) && (0, fb.jsxs)(ya, {
              fX: Tk,
              worldPanel: (0, fb.jsx)(Sa, {
                shown: Tk,
                setShown: Uk,
                canInsertCode: !!Qc && !vc
              }),
              closeWorld: () => {
                Uk("hidden")
              },
              aiShown: Hk,
              defaultWidth: Gb ? "40%" : "max(18rem, 36%)",
              children: [Gb && (0, fb.jsx)(ta.b, {
                onClose: kk ? void 0 : Gs,
                children: (0, fb.jsx)(Wb.Suspense, {
                  fallback: (0, fb.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, fb.jsx)(Bb.d, {})
                  }),
                  children: (0, fb.jsx)(aT, {
                    popOutDocs: Os,
                    hideDocs: Gs,
                    tutorialEnabled: !!Qc
                  })
                })
              }), Hk && (0, fb.jsx)(ta.b, {
                onClose: Wk ? void 0 : ps,
                children: (0, fb.jsx)(Wb.Suspense, {
                  fallback: (0, fb.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, fb.jsx)(Bb.d, {})
                  }),
                  children: (0, fb.jsx)(TT, {
                    target: Xc,
                    chatKey: `${Gc.gameNameWithVariation}/${Gc.lobbyName}/aiHelper`,
                    historyKey: `${Gc.gameNameWithVariation}/${Gc.lobbyName}/${Xc.key}`,
                    files: Xc.codeBlock ? Rs : qc,
                    activePath: Xc.codeBlock ? cT.d : Sc,
                    canEdit: !!Qc && (Xc.codeBlock ? !!Cb.current : !vc),
                    isLoaded: null !== Zc,
                    errors: kc,
                    errorCount: ac,
                    applyFiles: Xc.codeBlock ? os : rs,
                    submit: Fs,
                    testRun: xs,
                    close: ps,
                    goToLine: Xc.codeBlock ? vs : ds,
                    openWorldCode: Xc.codeBlock ? ck : void 0,
                    readWorldCode: Xc.codeBlock ? Ss : void 0,
                    viewChunk: UT,
                    viewGameState: IT,
                    openTarget: Qc ? sk : void 0,
                    draft: cc,
                    onDraftUsed: fk,
                    selection: Mk,
                    onSelectionUsed: nk
                  }, Xc.key)
                })
              })]
            })]
          }), (null === ks || void 0 === ks ? void 0 : ks.fallback) && (0, fb.jsx)(Qa, {
            fallback: ks.fallback,
            onGoToLine: ds
          }), (0, fb.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, fb.jsx)(Sb.f, {
              tooltipInner: Zs(Pb ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, fb.jsx)(nb.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Zs(Pb ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  Eb(!Pb)
                },
                children: (0, fb.jsx)(Qb.b, {
                  name: Pb ? "moon" : "sun-bright"
                })
              })
            }), (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs(ek ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.n, {
                className: "CodeEditorButton",
                onClick: () => {
                  Ps(ek)
                },
                padDefaultFocus: !0,
                children: Zs("codeEditor:submitCode")
              })
            }), (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs(Gb ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Lc || "hideDocsButton" === Lc,
              children: (0, fb.jsx)(Va.g, {
                tutorial: Vc,
                step: Gb ? "hideDocsButton" : "docsButton",
                text: Zs(Gb ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Qc,
                placement: "top",
                waitForClick: !0,
                onPrevious: Gb && "welcome" === Vc ? Gs : void 0,
                children: (0, fb.jsx)(nb.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, La.e)(Gb ? "hideDocsButton" : "docsButton"), Kb(!Gb), bc(!1)
                  },
                  children: Zs(Gb ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), lc && (0, fb.jsx)(Va.g, {
              tutorial: Yc,
              step: pb ? "hideAiHelperButton" : "aiHelperButton",
              text: Zs(pb ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Yc ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Qc,
              placement: "top",
              waitForClick: !0,
              onPrevious: pb && "welcome" === Yc ? Ks : void 0,
              children: (0, fb.jsx)(qs, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, La.e)(pb ? "hideAiHelperButton" : "aiHelperButton"), bc(!pb), Kb(!1)
                },
                children: pb ? "Hide AI Helper" : zs ? "Fix error with AI" : "AI Helper"
              })
            }), rb && (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs(Zb ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.v, {
                className: "CodeEditorButton",
                onClick: () => {
                  wb.current = !Zb, db(!Zb)
                },
                children: Zs(Zb ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs("hidden" === Tk ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.v, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: Ik,
                children: Zs("hidden" === Tk ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  mb.j.QQ("FormatCode")
                },
                children: Zs("codeEditor:formatCode")
              })
            }), (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Xb.current).then((() => {
                    Cs({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Cs({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Zs("codeEditor:copyCode")
              })
            }), (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs(tb ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  yb(!tb)
                },
                children: Zs(tb ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Mb && (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Cc,
              children: (0, fb.jsx)(Va.g, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Zs("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Qc,
                placement: "top",
                waitForClick: !0,
                children: (0, fb.jsx)(nb.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Cc && ((0, La.e)("worldCodeButton"), Jc.current = !0), ys(), mb.j.QQ("EditLobbyCode", lb)
                  },
                  children: Zs("codeEditor:worldCode")
                })
              })
            }), (Kc || as || lc) && (0, fb.jsx)(Sb.f, {
              tooltipInner: Zs("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, fb.jsx)(nb.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Ec(!0)
                },
                children: (0, fb.jsx)(Qb.b, {
                  name: "ellipsis"
                })
              })
            })]
          }), Dc && (0, fb.jsx)(mW.b, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Ec(!1)
            },
            body: (0, fb.jsx)(Na, {
              engine: as,
              onSetEngine: Es,
              aiHints: lc ? {
                shown: ib,
                setShown: Ob
              } : null,
              variation: Kc ? {
                name: tc,
                setName: yc,
                reload: Ds
              } : null
            })
          })]
        })
      })),
      mT = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function lT(bb) {
      return "inventory" === bb
    }
    const QT = (0, Wb.memo)((function() {
      const {
        openEverythingMenuName: bb,
        openInGameMenuName: cb
      } = (0, zb.p)(["openEverythingMenuName", "openInGameMenuName"]), sb = (0, gb.f)("fullInventory"), ab = (0, Wb.useRef)(null), Tb = (0, Sc.k)();
      (0, hb.f)("toggleMenu", (bb => {
        var cb;
        if (!Tb.shown) return;
        const sb = zb.d.get("openInGameMenuName");
        let kb = bb.split("|")[0];
        const Wb = null !== (cb = bb.split("|")[1]) && void 0 !== cb ? cb : null;
        ("closeCurrentMenu" === Wb && sb || kb === sb) && (ab.current = null, kb = null);
        const Ub = "closeCurrentMenu" === Wb ? null : Wb;
        ab.current !== Ub && (ab.current = Ub), null !== kb && (0, uW.n)(uW.b, {
          keepsMovement: lT(kb)
        }), zb.d.set({
          openInGameMenuName: kb
        })
      }));
      const Ub = (0, Wb.useCallback)((bb => () => {
          mb.j.QQ("toggleMenu", bb)
        }), []),
        Ib = (0, Wb.useRef)({
          cantCrouchIfNotFullscreen: Ub("cantCrouchIfNotFullscreen"),
          makeReport: Ub("makeReport"),
          makeDiscordReport: Ub("makeDiscordReport"),
          editBook: Ub("editBook"),
          editNameTag: Ub("editNameTag"),
          inventory: Ub("inventory"),
          inviteLink: Ub("inviteLink"),
          writeOnBoard: Ub("writeOnBoard"),
          codeEditor: Ub("codeEditor"),
          lobbyCodeEditor: Ub("lobbyCodeEditor"),
          customLobbyBlockEditor: Ub("customLobbyBlockEditor"),
          ironChestPasskeyInput: Ub("ironChestPasskeyInput"),
          petUi: Ub("petUi")
        }),
        Hb = (0, Wb.useCallback)((() => {
          zb.d.set({
            openInGameMenuName: null
          })
        }), []),
        Mb = (0, Wb.useRef)(null);
      return (0, Wb.useEffect)((() => {
        if (cb) {
          var bb;
          (0, uW.n)(uW.b, {
            keepsMovement: lT(cb)
          }), Mb.current = mT.has(cb) ? null !== (bb = zb.d.get("openEverythingMenuName")) && void 0 !== bb ? bb : Mb.current : null, zb.d.set({
            openEverythingMenuName: null
          })
        } else {
          const bb = Mb.current;
          Mb.current = null, null !== bb && null === zb.d.get("openEverythingMenuName") && zb.d.set({
            openEverythingMenuName: bb
          }), ab.current = null, (0, uW.k)(uW.b)
        }
      }), [cb]), (0, Wb.useEffect)((() => {
        null !== bb && Hb()
      }), [bb, Hb]), (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsx)(kb.i, {
          show: "clientGame" === cb
        }), (0, fb.jsx)(HW, {
          show: "cantCrouchIfNotFullscreen" === cb,
          onOpen: Ib.current.cantCrouchIfNotFullscreen,
          onClose: Hb
        }), (0, fb.jsx)(NW, {
          show: "makeReport" === cb,
          onOpen: Ib.current.makeReport,
          onClose: Hb
        }), (0, fb.jsx)(LW, {
          show: "makeDiscordReport" === cb,
          onOpen: Ib.current.makeDiscordReport,
          onClose: Hb
        }), (0, fb.jsx)(es, {
          show: "editBook" === cb,
          onOpen: Ib.current.editBook,
          onClose: Hb
        }), (0, fb.jsx)(ls, {
          show: "editNameTag" === cb,
          onOpen: Ib.current.editNameTag,
          onClose: Hb
        }), sb && (0, fb.jsx)(TW, {
          show: "inventory" === cb,
          onOpen: Ib.current.inventory,
          onClose: Hb,
          variation: ab.current
        }), (0, fb.jsx)(Rc, {
          show: "inviteLink" === cb,
          onClose: Hb,
          option: ab.current
        }), (0, fb.jsx)(Ob, {
          show: "retentionFeatures" === cb,
          onClose: Hb
        }), (0, fb.jsx)(ms, {
          show: "writeOnBoard" === cb,
          onOpen: Ib.current.writeOnBoard,
          onClose: Hb
        }), (0, fb.jsx)(nT, {
          show: "lobbyCodeEditor" === cb,
          onOpen: Ib.current.lobbyCodeEditor,
          onClose: Hb,
          isLobbyCode: !0
        }), (0, fb.jsx)(nT, {
          show: "codeEditor" === cb,
          onOpen: Ib.current.codeEditor,
          onClose: Hb,
          isLobbyCode: !1
        }), (0, fb.jsx)(hW, {
          show: "customLobbyBlockEditor" === cb,
          onOpen: Ib.current.customLobbyBlockEditor,
          onClose: Hb
        }), (0, fb.jsx)(Ks, {
          show: "ironChestPasskeyInput" === cb,
          onOpen: Ib.current.ironChestPasskeyInput,
          onClose: Hb
        }), (0, fb.jsx)(PW, {
          togglePointerLock: !0,
          show: "petUi" === cb,
          onOpen: Ib.current.petUi,
          onClose: Hb
        })]
      })
    }))
  },
  36156: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => IT
    });
    sb(36164);
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(3535),
      Ub = sb(1423),
      Ib = sb(1839),
      Hb = sb(1087);

    function fb() {
      const bb = 2e3,
        [cb, sb] = (0, kb.useState)(null),
        [Wb, fb] = (0, kb.useState)(null),
        Mb = (0, kb.useRef)(null);
      (0, Ub.f)("showBottomMessage", (cb => {
        let {
          message: sb,
          timeoutLength: kb = bb,
          type: Wb
        } = cb;
        fb({
          message: sb,
          type: Wb
        }), clearTimeout(Mb.current), Mb.current = setTimeout((() => {
          fb(null)
        }), kb)
      })), (0, Ub.f)("showPermanentBottomMessage", (bb => {
        sb(bb)
      })), (0, kb.useEffect)((() => ((0, Tb.e)((() => {
        sb(null)
      })), () => {
        clearTimeout(Mb.current)
      })), []);
      const Xb = Wb || cb;
      return Xb ? (0, Hb.jsx)("div", {
        className: ab()("BottomScreenMessage", Xb.type),
        children: (0, Hb.jsx)(Ib.d, {
          text: Xb.message
        })
      }) : null
    }
    var Mb = sb(2262),
      Xb = sb(1870),
      nb = sb(1495),
      mb = sb(2346);

    function lb() {
      let bb;
      const cb = () => {
          clearTimeout(bb), bb = setTimeout((() => {
            Xb.gameBridge.latest("connectedGame").replay || (Xb.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, nb.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        sb = () => {
          clearTimeout(bb)
        };
      return window.addEventListener("focus", sb), window.addEventListener("blur", cb), () => {
        window.removeEventListener("blur", cb), window.removeEventListener("focus", sb), clearTimeout(bb)
      }
    }
    var Qb = sb(1117),
      eb = sb(1113),
      Cb = sb(334),
      Nb = sb(2337),
      Vb = sb(26),
      Lb = sb(1895),
      ub = sb(37),
      Yb = sb(1912),
      hb = sb(19),
      Jb = sb(1915),
      gb = sb(1371),
      Bb = sb(8434),
      tb = sb(1938),
      yb = sb(1197);
    const Pb = (0, kb.memo)((function() {
      const {
        isTouchScreen: bb,
        loadingOverlayVisible: cb,
        openInGameMenuName: sb,
        openEverythingMenuName: Wb
      } = (0, hb.p)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Tb = (0, gb.l)();
      (0, eb.c)();
      const Ub = (0, Nb.d)("showBasicMovementControls"),
        [Ib, fb] = (0, kb.useState)("movement"),
        Mb = "movement" === Ib,
        Xb = Tb && !1 !== Ub;
      (0, kb.useEffect)((() => {
        "padActions" !== Ib || Xb || fb("done")
      }), [Ib, Xb]);
      const nb = cb || null !== sb || null !== Wb,
        mb = (0, kb.useRef)({
          step: Ib,
          ms: 0
        });
      return (0, kb.useEffect)((() => {
        if (nb || "done" === Ib) return;
        mb.current.step !== Ib && (mb.current = {
          step: Ib,
          ms: 0
        });
        const bb = mb.current,
          cb = performance.now(),
          sb = setTimeout((() => {
            fb("movement" === Ib && (0, gb.g)() ? "padActions" : "done")
          }), 7e3 - bb.ms);
        return () => {
          clearTimeout(sb), bb.ms += performance.now() - cb
        }
      }), [nb, Ib]), ub.h.getItem(Cb.Ob) > 2 ? (0, Hb.jsx)(Ob, {
        showingMovementControls: !1
      }) : (0, Hb.jsxs)(Hb.Fragment, {
        children: [bb && !Tb || !Mb || !1 === Ub ? null : (0, Hb.jsxs)("div", {
          className: ab()("ControlsTutorialDiv", {
            Covered: nb
          }),
          children: [(0, Hb.jsx)(Db, {}), (0, Hb.jsx)(ib, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Hb.jsx)(ib, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Ib && Xb && (0, Hb.jsx)(Eb, {
          covered: nb
        }), (0, Hb.jsx)(Ob, {
          showingMovementControls: "done" !== Ib
        })]
      })
    }));

    function Db() {
      const bb = (0, gb.l)();
      return (0, Hb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Hb.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), bb && (0, Hb.jsx)(Jb.d, {
          noaAction: "forward"
        }), !bb && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Hb.jsx)(Jb.d, {
              noaAction: "forward"
            })
          }), (0, Hb.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Hb.jsx)(Jb.d, {
              noaAction: "left"
            }), (0, Hb.jsx)(Jb.d, {
              noaAction: "backward"
            }), (0, Hb.jsx)(Jb.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Eb(bb) {
      let {
        covered: cb
      } = bb;
      const {
        t: sb
      } = (0, yb.E)(), kb = (0, Nb.d)("useInventory");
      return (0, Hb.jsxs)("div", {
        className: ab()("ControlsTutorialDiv", {
          Covered: cb
        }),
        children: [(0, Hb.jsx)(ib, {
          header: sb("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Hb.jsx)(ib, {
          header: sb("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== kb && (0, Hb.jsx)(ib, {
          header: sb("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Hb.jsx)(ib, {
          header: sb("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function ib(bb) {
      let {
        header: cb,
        noaAction: sb
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Hb.jsx)("div", {
          className: "KeyHeader",
          children: cb
        }), (0, Hb.jsx)(Jb.d, {
          noaAction: sb
        })]
      })
    }

    function Ob(bb) {
      let {
        showingMovementControls: cb
      } = bb;
      const {
        isTouchScreen: sb
      } = (0, hb.p)(["isTouchScreen"]), Wb = (0, gb.l)(), ab = (0, tb.d)("OpenShop"), [Tb, Ub] = (0, kb.useState)(!1), Ib = `SeenShopControls|${(0,Yb.e)("connectedGame",(bb=>bb.gameNameWithVariation))}`, fb = () => (!(0, gb.g)() || null !== (0, Bb.b)("OpenShop")) && !ub.h.getItem(Ib) && Lb.e.get("shopInfo") && !cb, Mb = () => (Ub(!0), ub.h.setItem(Ib, !0), (0, gb.g)() || Vb.j.QQ("showShopTouchTutorial"), setTimeout((() => {
        Ub(!1)
      }), 7e3));
      (0, kb.useEffect)((() => {
        let bb;
        const cb = Vb.j.subscribe("showShopTutorial", (() => {
          fb() && (bb = Mb())
        }));
        return () => {
          clearTimeout(bb), Vb.j.unsubscribe(cb)
        }
      }), [cb]);
      const Xb = (0, kb.useRef)();
      return (0, Nb.c)("currencyAmounts", (bb => {
        if (fb()) {
          let sb = !1;
          const kb = Lb.e.get("shopInfo");
          for (const Wb in kb) {
            for (const ab in kb[Wb].items) {
              var cb;
              const Tb = kb[Wb].items[ab];
              if (void 0 !== Tb.currency && bb[Tb.currency] && Tb.cost <= bb[Tb.currency].amount && (null === (cb = Tb.hidden) || void 0 === cb || !cb)) {
                sb = !0;
                break
              }
            }
            if (sb) break
          }
          sb && (Xb.current = Mb())
        }
      })), (0, kb.useEffect)((() => () => {
        clearTimeout(Xb.current)
      }), [cb]), !Tb || Wb && !ab ? null : (0, Hb.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: sb && !Wb ? null : (0, Hb.jsx)(ib, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Gb = sb(1341),
      Kb = sb(1039);
    const Zb = (0, kb.memo)((function() {
      return (0, eb.c)(), (0, Hb.jsx)(zb, {})
    }));
    class zb extends kb.Component {
      constructor(bb) {
        super(bb), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = Vb.j.subscribe("TopRightHelper", (bb => {
          this.showQueue.push(bb), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        Vb.j.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(bb, cb) {
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
        let bb, cb, sb, kb, Wb, ab = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, bb = "slideIn") : "slideOut" === this.state.currState ? bb = "slideOut" : null === this.currMessage && (ab = !1), this.currMessage) {
          const ab = this.currMessage.color || "rgb(102, 102, 102)";
          cb = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === bb ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, sb = {
            backgroundColor: ab
          }, kb = {
            animation: "2s " + ("slideOut" === bb ? "CloseNotification" : "ExpandNotification")
          }, Wb = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === bb ? "textDisappear" : "textAppear")
          }
        }
        return ab ? (0, Hb.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...cb
          },
          children: [(0, Hb.jsx)("div", {
            className: "LeftSide",
            style: sb,
            children: (0, Hb.jsx)(Kb.b, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Hb.jsx)("div", {
            className: "RightSide",
            style: kb,
            children: (0, Hb.jsx)("div", {
              className: "HelperText",
              style: Wb,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var qb = sb(36173),
      db = sb(1381);
    const Ab = (0, db.i)((bb => bb.PadSneakChip));

    function wb(bb) {
      const [cb, sb, kb] = function(bb) {
        const cb = parseInt(bb.substring(1), 16),
          sb = (cb >> 16) / 255,
          kb = (cb >> 8 & 255) / 255,
          Wb = (255 & cb) / 255,
          ab = Math.max(sb, kb, Wb),
          Tb = Math.min(sb, kb, Wb),
          Ub = (ab + Tb) / 2,
          Ib = ab - Tb;
        if (0 === Ib) return [0, 0, Ub];
        const Hb = Ib / (1 - Math.abs(2 * Ub - 1));
        let fb;
        fb = ab === sb ? (kb - Wb) / Ib % 6 : ab === kb ? (Wb - sb) / Ib + 2 : (sb - kb) / Ib + 4;
        return [(60 * fb + 360) % 360, Hb, Ub]
      }(bb), Wb = 0 === sb ? 0 : Math.min(.6, sb + .03), ab = kb > .5 ? -1 : 1, Tb = rb(kb + .09 * ab);
      return {
        panel: bb,
        slot: ob(cb, Wb, Tb),
        slotSelected: ob(cb, Wb, rb(Tb + .2 * ab)),
        slotUnavailable: ob(cb, Wb, rb(kb + -.1 * ab))
      }
    }

    function rb(bb) {
      return Math.min(1, Math.max(0, bb))
    }

    function ob(bb, cb, sb) {
      const kb = (1 - Math.abs(2 * sb - 1)) * cb,
        Wb = kb * (1 - Math.abs(bb / 60 % 2 - 1)),
        ab = sb - kb / 2;
      let Tb;
      return Tb = bb < 60 ? [kb, Wb, 0] : bb < 120 ? [Wb, kb, 0] : bb < 180 ? [0, kb, Wb] : bb < 240 ? [0, Wb, kb] : bb < 300 ? [Wb, 0, kb] : [kb, 0, Wb], "#" + Tb.map((bb => function(bb) {
        return Math.round(255 * bb).toString(16).padStart(2, "0")
      }(bb + ab))).join("")
    }
    var Sb = sb(36199),
      Rb = sb(4060),
      vb = sb(2305),
      Fb = sb(2310),
      xb = sb(36233),
      jb = sb(4536),
      pb = sb(1442),
      bc = sb(628);

    function cc(bb, cb, sb, kb) {
      bb.style.display = "";
      const Wb = bb.offsetWidth,
        ab = bb.offsetHeight,
        Tb = Math.min(Math.max((cb.left + cb.right) / 2 - Wb / 2, 8), window.innerWidth - 8 - Wb);
      let Ub = cb.top - sb - ab;
      const Ib = [...kb].sort(((bb, cb) => cb.top - bb.top));
      for (const Hb of Ib) Tb < Hb.right && Tb + Wb > Hb.left && Ub < Hb.bottom && Ub + ab > Hb.top && (Ub = Hb.top - 8 - ab);
      return Ub < 8 ? (bb.style.display = "none", null) : (bb.style.transform = `translate(${Tb-cb.left}px, ${Ub-cb.top}px)`, {
        left: Tb,
        top: Ub,
        right: Tb + Wb,
        bottom: Ub + ab
      })
    }

    function sc(bb) {
      const cb = [];
      for (const sb of document.querySelectorAll(bb)) {
        const bb = sb.getBoundingClientRect();
        bb.width > 0 && "visible" === getComputedStyle(sb).visibility && cb.push(bb)
      }
      return cb
    }

    function kc(bb, cb) {
      return bb.clientX >= cb.left - 8 && bb.clientX <= cb.right + 8 && bb.clientY >= cb.top - 8 && bb.clientY <= cb.bottom + 8
    }
    var Wc = sb(8487);
    class ac {
      constructor(bb) {
        this.deps = bb, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(bb) {
        bb && "armed" === this.phase ? this.setPhase("ready") : bb || "ready" !== this.phase || this.setPhase("armed")
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
      hold(bb, cb) {
        this.suspended || (this.offered ? cb || this.setPhase("idle") : bb && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : bb || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(bb) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const cb = this.phase;
        this.phase = bb, this.deps.onPhase(bb, cb)
      }
    }
    const Tc = 25 * Math.PI / 180,
      Uc = 45 * Math.PI / 180;
    class Ic extends ac {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(bb, cb, sb) {
        this.speed = sb;
        const kb = Math.hypot(bb, cb),
          Wb = kb > 0 ? Math.acos(Math.min(1, -cb / kb)) : Math.PI;
        this.hold(kb >= .8 && Wb <= Tc, kb >= .5 && Wb <= Uc)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Hc = sb(1287);

    function fc(bb, cb) {
      const sb = (0, kb.useRef)(null),
        Wb = (0, kb.useRef)(cb);
      return Wb.current = cb, (0, kb.useEffect)((() => {
        if (!bb) return;
        const {
          create: cb,
          elementRef: kb,
          ringRef: ab,
          classPrefix: Tb,
          keptBehindMovementPanels: Ub,
          resizeEnds: Ib
        } = Wb.current, Hb = {
          charging: `${Tb}Charging`,
          armed: `${Tb}Armed`,
          ready: `${Tb}Ready`,
          locked: `${Tb}Locked`
        };
        let fb = null;
        const Mb = cb({
          onPhase: (bb, cb) => {
            const sb = kb.current;
            if (null !== sb) {
              for (const [cb, kb] of Object.entries(Hb)) sb.classList.toggle(kb, cb === bb);
              if ("charging" === bb) fb = ab.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === bb) {
                var Tb;
                null === (Tb = fb) || void 0 === Tb || Tb.cancel(), fb = null
              }
              var Ub, Ib;
              if ("armed" === bb && "charging" === cb && Wb.current.onArmed(), "ready" === bb && Wc.f.play("lockReady"), "locked" === bb) Wc.f.play("lockLocked"), null === (Ub = (Ib = Wb.current).onLocked) || void 0 === Ub || Ub.call(Ib);
              "locked" === cb && Wb.current.onUnlocked()
            }
          }
        });
        sb.current = Mb;
        const Xb = () => {
            Mb.suspend()
          },
          nb = () => {
            "hidden" === document.visibilityState && Xb()
          },
          mb = () => {
            Ib ? Mb.suspend() : Mb.suspendArming()
          },
          lb = (0, Hc.g)((bb => {
            let {
              keepsMovement: cb
            } = bb;
            cb && Ub ? Mb.suspendArming() : Xb()
          }));
        return document.addEventListener("visibilitychange", nb), window.addEventListener("blur", Xb), window.addEventListener("resize", mb), () => {
          lb(), document.removeEventListener("visibilitychange", nb), window.removeEventListener("blur", Xb), window.removeEventListener("resize", mb), Mb.cancel(), sb.current = null
        }
      }), [bb]), (0, Yb.c)("localPlayerAliveSet", (() => {
        var bb;
        null === (bb = sb.current) || void 0 === bb || bb.suspend()
      })), sb
    }
    var Mc = sb(2355),
      Xc = sb(2362),
      nc = sb(1104),
      mc = sb(3179),
      lc = sb(2367);

    function Qc(bb, cb, sb) {
      const kb = function(bb, cb, sb) {
        const kb = sb.map((sb => ({
            left: Math.max(0, sb.left),
            top: Math.max(0, sb.top),
            right: Math.min(bb, sb.right),
            bottom: Math.min(cb, sb.bottom)
          }))).filter((bb => bb.right > bb.left && bb.bottom > bb.top)),
          Wb = [...new Set([0, cb, ...kb.flatMap((bb => [bb.top, bb.bottom]))])].sort(((bb, cb) => bb - cb)),
          ab = [];
        for (let Tb = 0; Tb < Wb.length - 1; Tb++) {
          const cb = Wb[Tb],
            sb = Wb[Tb + 1],
            Ub = kb.filter((bb => bb.top <= cb && bb.bottom >= sb)).map((bb => [bb.left, bb.right])).sort(((bb, cb) => bb[0] - cb[0]));
          let Ib = 0;
          for (const [bb, kb] of Ub) bb > Ib && ab.push({
            left: Ib,
            top: cb,
            right: bb,
            bottom: sb
          }), Ib = Math.max(Ib, kb);
          Ib < bb && ab.push({
            left: Ib,
            top: cb,
            right: bb,
            bottom: sb
          })
        }
        return ab
      }(bb, cb, sb);
      if (0 === kb.length) return 'path("M0 0Z")';
      if (1 === kb.length && 0 === kb[0].left && 0 === kb[0].top && kb[0].right === bb && kb[0].bottom === cb) return "";
      const Wb = bb => Math.round(10 * bb) / 10;
      return `path("${kb.map((bb=>`M${Wb(bb.left)} ${Wb(bb.top)}H${Wb(bb.right)}V${Wb(bb.bottom)}H${Wb(bb.left)}Z`)).join("")}")`
    }

    function ec(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Wb = [],
        ab = 2 * sb / kb;
      for (let Tb = 0; Tb < kb; Tb++) {
        const kb = cb - sb + Tb * ab,
          Ub = kb + ab,
          Ib = Math.min(Math.max(cb, kb), Ub) - cb,
          Hb = Math.sqrt(Math.max(0, sb * sb - Ib * Ib));
        Wb.push({
          left: bb - Hb,
          top: kb,
          right: bb + Hb,
          bottom: Ub
        })
      }
      return Wb
    }
    var Cc = sb(8496),
      Nc = sb(36219);

    function Vc(bb) {
      const cb = bb.getBoundingClientRect(),
        sb = {
          left: cb.left,
          top: cb.top,
          right: cb.right,
          bottom: cb.bottom
        },
        kb = (0, xb.i)(bb);
      if (kb.whole) return [sb];
      const Wb = function(bb) {
          const cb = bb.right - bb.left,
            sb = bb.bottom - bb.top,
            kb = Math.min(cb, sb) / 2,
            Wb = (bb.left + bb.right) / 2,
            ab = (bb.top + bb.bottom) / 2;
          return cb >= sb ? [{
            left: bb.left + kb,
            top: bb.top,
            right: bb.right - kb,
            bottom: bb.bottom
          }, ...ec(bb.left + kb, ab, kb), ...ec(bb.right - kb, ab, kb)] : [{
            left: bb.left,
            top: bb.top + kb,
            right: bb.right,
            bottom: bb.bottom - kb
          }, ...ec(Wb, bb.top + kb, kb), ...ec(Wb, bb.bottom - kb, kb)]
        }(sb),
        ab = kb.keyBox;
      if (ab) {
        const bb = (sb.left + sb.right) / 2,
          cb = (sb.top + sb.bottom) / 2;
        Wb.push({
          left: bb - ab.width / 2,
          top: cb - ab.height / 2,
          right: bb + ab.width / 2,
          bottom: cb + ab.height / 2
        })
      }
      return Wb
    }

    function Lc(bb) {
      const cb = bb.getBoundingClientRect();
      return 0 === cb.width && 0 === cb.height || "visible" !== getComputedStyle(bb).visibility ? [] : [(0, Cc.n)(cb, 44)]
    }

    function uc(bb, cb) {
      (0, kb.useEffect)((() => {
        const sb = bb.current;
        if (!cb || !sb) return;
        const kb = () => {
          const bb = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            cb = bb.find((bb => bb.classList.contains("TouchInteractHit")));
          cb !== Wb && (Wb && ab.unobserve(Wb), Wb = cb, cb && ab.observe(cb));
          const kb = Array.from(document.querySelectorAll(lc.c)),
            Tb = [...bb.flatMap((bb => Vc(bb))), ...kb.flatMap(Lc)],
            Ub = function(bb, cb) {
              const sb = cb.map((cb => ({
                left: cb.left - bb.left,
                top: cb.top - bb.top,
                right: cb.right - bb.left,
                bottom: cb.bottom - bb.top
              })));
              return Qc(Math.ceil(bb.width), Math.ceil(bb.height), sb)
            }(sb.getBoundingClientRect(), Tb);
          sb.style.clipPath !== Ub && (sb.style.clipPath = Ub)
        };
        let Wb;
        const ab = new ResizeObserver((() => {
          kb()
        }));
        kb(), ab.observe(sb);
        const Tb = sb.closest(".InGameUi"),
          Ub = new MutationObserver(kb);
        Tb && Ub.observe(Tb, {
          attributes: !0,
          attributeFilter: ["class", Nc.h]
        });
        const Ib = [(0, Vb.l)(mc.d, kb), (0, Vb.l)(lc.s, kb), (0, Vb.l)(lc.g, kb)];
        return () => {
          ab.disconnect(), Ub.disconnect();
          for (const bb of Ib) bb();
          sb.style.clipPath = ""
        }
      }), [bb, cb])
    }
    var Yc = sb(4148);

    function hc(bb) {
      var cb;
      let {
        onMove: sb,
        mode: Wb,
        speedCurve: ab,
        autorun: Tb = !1
      } = bb;
      const Ub = (0, kb.useRef)(null),
        Ib = (0, kb.useRef)(null),
        fb = (0, kb.useRef)(null),
        Mb = (0, kb.useRef)(null),
        nb = (0, kb.useRef)(null),
        mb = (0, kb.useRef)(null),
        lb = (0, kb.useRef)(null),
        Qb = (0, kb.useRef)(null),
        eb = (0, kb.useRef)(null),
        Cb = (0, kb.useRef)(!1),
        Nb = (0, kb.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: Vb
        } = (0, yb.E)(),
        Lb = (0, Yc.l)(Wb),
        ub = (0, hb.p)(["notchSize"]).notchSize,
        Yb = ub.left,
        Jb = (0, kb.useRef)(16),
        gb = (0, Xc.c)(),
        [Bb, tb, Pb] = "pinned" === Wb ? Mc.p : null !== (cb = gb.hudElements.joystick) && void 0 !== cb ? cb : Mc.p,
        Db = "pinned" === Wb ? null : gb.hudSafe,
        Eb = Math.max(Yc.g, Yc.h * Pb);
      uc(Ib, "pinned" !== Wb);
      const ib = function(bb, cb, sb, Wb, ab) {
        const Tb = (0, kb.useRef)(null),
          Ub = () => {
            clearInterval(Tb.current), Tb.current = null
          },
          Ib = fc(bb, {
            create: bb => new Ic(bb),
            elementRef: cb,
            ringRef: sb,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: ab,
            onLocked: () => {
              Tb.current = setInterval((() => {
                Xb.gameBridge.lookup("dropAhead", null) && (Wc.f.play("autorunLedgeStop"), Ib.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Ub(), Wb()
            }
          });
        return (0, kb.useEffect)((() => Ub), []), Ib
      }(Tb, fb, lb, (() => {
        Ab(), db()
      }), (() => {
        Ob(), null === eb.current && ib.current.suspend()
      }));

      function Ob() {
        const bb = fb.current.getBoundingClientRect();
        eb.current = cc(Qb.current, bb, 80, sc(`.TouchInventoryKey, ${lc.c}`)), Cb.current = null !== eb.current && kc(Nb.current, eb.current)
      }

      function Gb() {
        const {
          innerWidth: bb,
          innerHeight: cb
        } = window, sb = (0, lc.D)(Db, bb, cb, (0, lc.I)(ub, bb, cb), Jb.current);
        return {
          left: sb[3],
          bottom: sb[2]
        }
      }

      function Zb(bb) {
        fb.current.style.transform = `translate(${bb.x-Eb}px, ${bb.y-Eb}px)`
      }

      function zb(bb) {
        const cb = fb.current;
        cb.classList.add("Resting"), cb.classList.toggle("Returning", bb), cb.style.display = "fixed_hidden" === Wb ? "none" : "block", Zb(function() {
          const {
            innerWidth: bb,
            innerHeight: cb
          } = window, sb = Gb(), kb = Yb * bb / 100 + sb.left, Wb = Ub.current.offsetHeight || cb, ab = ((0, nc.d)(bb, cb) ? Yc.d : Yc.b) + sb.bottom;
          return {
            x: Math.min(bb - Eb, Math.max(Eb, kb + Yc.e + Bb * bb)),
            y: Math.min(Wb - Eb, Math.max(Eb, Wb - ab + tb * Wb))
          }
        }())
      }
      const qb = (0, kb.useRef)({
        restFixed: zb,
        release: wb
      });

      function db() {
        Lb ? zb("fixed_shown" === Wb) : "floating" === Wb && (fb.current.style.display = "none"), sb({
          x: 0,
          y: 0
        })
      }

      function Ab() {
        mb.current = null, nb.current = null, Mb.current.style.transform = "translate(-50%, -50%)"
      }

      function wb(bb) {
        Ab();
        const cb = ib.current;
        bb && null !== cb && void 0 !== cb && cb.lift() ? sb({
          x: 0,
          y: -cb.lockedSpeed
        }) : (null === cb || void 0 === cb || cb.cancel(), db())
      }

      function rb(bb) {
        const cb = Array.from(bb.touches).find((bb => bb.identifier === mb.current));
        if (null === nb.current || null === mb.current || (0, bc.L)(cb)) return;
        const kb = ib.current,
          Wb = cb.clientX - nb.current.x,
          Tb = cb.clientY - nb.current.y,
          Ub = Math.hypot(Wb, Tb),
          Ib = Ub > 0 ? Math.min(1, Eb / Ub) : 0,
          Hb = Wb * Ib,
          fb = Tb * Ib,
          Xb = Math.hypot(Hb, fb) / Eb,
          lb = ab && Xb > 0 ? ab(Xb) / Xb : 1;
        Mb.current.style.transform = `translate(calc(-50% + ${Hb}px), calc(-50% + ${fb}px))`;
        const Qb = Hb / Eb,
          Vb = fb / Eb;
        if (sb({
            x: Qb * lb,
            y: Vb * lb
          }), null !== kb && null !== eb.current) {
          kb.move(Qb, Vb, Xb * lb), Nb.current = {
            clientX: cb.clientX,
            clientY: cb.clientY
          };
          const bb = Cb.current;
          Cb.current = kc(cb, eb.current), Cb.current !== bb && kb.target(Cb.current)
        }
      }
      return qb.current = {
        restFixed: zb,
        release: wb
      }, (0, kb.useLayoutEffect)((() => {
        if (!Lb) return;
        const bb = () => {
          Jb.current = (0, lc.O)(document)
        };
        bb(), null === mb.current && qb.current.restFixed(!1);
        const cb = new ResizeObserver((() => {
          bb(), null === mb.current && qb.current.restFixed(!1)
        }));
        cb.observe(Ub.current);
        const sb = fb.current;
        return () => {
          cb.disconnect(), sb.classList.remove("Resting", "Returning"), null === mb.current && (sb.style.display = "", sb.style.transform = "")
        }
      }), [Lb, Wb, ub, Bb, tb, Eb, Db]), (0, kb.useEffect)((() => {
        const bb = bb => {
            const cb = mb.current;
            null === cb || Array.from(bb.touches).some((bb => bb.identifier === cb)) || qb.current.release("touchend" === bb.type && Array.from(bb.changedTouches).some((bb => bb.identifier === cb)))
          },
          cb = () => {
            null !== mb.current && qb.current.release(!1)
          },
          sb = () => {
            "hidden" === document.visibilityState && cb()
          };
        document.addEventListener("touchstart", bb, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", bb, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", bb, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", bb, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", cb), document.addEventListener("visibilitychange", sb);
        const kb = (0, Hc.g)((bb => {
          let {
            keepsMovement: sb
          } = bb;
          sb || cb()
        }));
        return () => {
          kb(), document.removeEventListener("touchstart", bb, {
            capture: !0
          }), document.removeEventListener("touchmove", bb, {
            capture: !0
          }), document.removeEventListener("touchend", bb, {
            capture: !0
          }), document.removeEventListener("touchcancel", bb, {
            capture: !0
          }), window.removeEventListener("blur", cb), document.removeEventListener("visibilitychange", sb)
        }
      }), []), (0, kb.useEffect)((() => {
        const bb = Ub.current,
          cb = bb => {
            bb.preventDefault()
          };
        return bb.addEventListener("touchstart", cb, {
          passive: !1
        }), () => {
          bb.removeEventListener("touchstart", cb)
        }
      }), []), (0, Hb.jsxs)("div", {
        ref: Ub,
        className: "JoystickZone",
        style: Lb && (Bb > 0 || Pb > 1 || Gb().left > 0) ? {
          width: `max(35vw, calc(${Yb+100*Bb}vw + ${Gb().left+Yc.e+Eb+24}px))`
        } : void 0,
        onTouchStart: function(bb) {
          var cb;
          if (null !== mb.current) return;
          const sb = Array.from(bb.changedTouches).find((bb => {
            var cb;
            return null === (cb = Ub.current) || void 0 === cb ? void 0 : cb.contains(bb.target)
          }));
          if (sb) {
            if (null === (cb = ib.current) || void 0 === cb || cb.startTouch(), mb.current = sb.identifier, "pinned" === Wb) {
              const bb = fb.current.getBoundingClientRect();
              nb.current = {
                x: bb.left + bb.width / 2,
                y: bb.top + bb.height / 2
              }
            } else {
              nb.current = {
                x: sb.clientX,
                y: sb.clientY
              }, fb.current.classList.remove("Resting", "Returning"), fb.current.style.display = "block";
              const bb = Ub.current.getBoundingClientRect();
              Zb({
                x: sb.clientX - bb.left,
                y: sb.clientY - bb.top
              }), Tb && (Nb.current = {
                clientX: sb.clientX,
                clientY: sb.clientY
              }, Ob())
            }
            rb(bb)
          }
        },
        onTouchMove: rb,
        children: [(0, Hb.jsx)("div", {
          ref: Ib,
          className: "JoystickTouchLayer"
        }), (0, Hb.jsxs)("div", {
          ref: fb,
          className: "Joystick",
          style: {
            width: 2 * Eb + "px",
            height: 2 * Eb + "px",
            transform: "pinned" === Wb ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Hb.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * Eb + "px",
              height: 2 * Eb + "px"
            }
          }), Tb && (0, Hb.jsxs)(Hb.Fragment, {
            children: [(0, Hb.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Hb.jsx)("circle", {
                ref: lb,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Hb.jsxs)("div", {
              ref: Qb,
              className: "AutorunTarget",
              children: [(0, Hb.jsx)(Kb.b, {
                name: "lock"
              }), Vb("settingsMenu:autoRun")]
            })]
          }), (0, Hb.jsx)("div", {
            ref: Mb,
            className: "JoystickKnob",
            style: {
              width: `${Eb}px`,
              height: `${Eb}px`
            }
          })]
        })]
      })
    }
    const Jc = .35,
      gc = .22;

    function Bc(bb) {
      if (bb < .1) return 0;
      if (bb < Jc) {
        const cb = (bb - .1) / (Jc - .1);
        return .06 + .16 * cb * cb
      }
      return bb < .85 ? gc + .78 * (bb - Jc) / .5 : 1
    }

    function tc(bb, cb) {
      const sb = (0, kb.useRef)(null);
      return (0, kb.useLayoutEffect)((() => (xb.k.set(bb, sb.current, cb), () => {
        xb.k.set(bb, null)
      })), [bb, cb]), sb
    }
    const yc = "C",
      Pc = "J",
      Dc = "U",
      Ec = "P",
      ic = "A",
      Oc = "G",
      Gc = "X",
      Kc = (0, kb.forwardRef)((function(bb, cb) {
        let {
          slot: sb,
          canvasZone: Wb = !1,
          lit: Tb = !1,
          label: Ub,
          className: Ib,
          children: fb,
          ...Mb
        } = bb;
        return (0, kb.useEffect)((() => (Vb.j.QQ(mc.d), () => {
          Vb.j.QQ(mc.d)
        })), []), (0, Hb.jsx)("div", {
          ref: cb,
          className: ab()("TouchKeyHit", `TouchSlot${sb}`, Ib, {
            CanvasZone: Wb
          }),
          ...Mb,
          children: (0, Hb.jsxs)("div", {
            className: ab()("TouchKey", {
              Lit: Tb,
              Labelled: void 0 !== Ub
            }),
            children: [fb, void 0 !== Ub && (0, Hb.jsx)("span", {
              className: "TouchKeyLabel",
              children: Ub
            })]
          })
        })
      }));

    function Zc(bb, cb) {
      (0, kb.useEffect)((() => () => {
        cb.current && (cb.current = !1, (0, Fb.t)(bb, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function zc(bb, cb) {
      const sb = cb ? [Gc] : [Ec, Gc];
      return bb.filter((bb => null !== bb)).slice(0, sb.length).map(((bb, cb) => {
        const Wb = sb[cb];
        return (0, Hb.jsx)(kb.Fragment, {
          children: bb.render(Wb)
        }, `${bb.id}:${Wb}`)
      }))
    }
    var qc = sb(36228);
    class dc extends ac {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(bb, cb) {
        this.start = {
          x: bb,
          y: cb
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(bb, cb, sb) {
        const kb = Math.hypot(bb - this.start.x, cb - this.start.y) <= 12;
        this.moved ||= !kb;
        const Wb = null !== sb && cb < this.start.y - 12 && kc({
          clientX: bb,
          clientY: cb
        }, sb);
        this.hold(!this.moved, kb || Wb)
      }
    }
    const Ac = new Set;

    function wc(bb) {
      const cb = new Set(Array.from(bb.touches, (bb => bb.identifier)));
      for (const sb of Ac) {
        for (const bb of sb.ids) cb.has(bb) || sb.ids.delete(bb);
        if (0 === sb.ids.size) {
          Ac.delete(sb);
          sb.pressesOnPointerDown && "touchstart" === bb.type && Array.from(bb.changedTouches).some((bb => bb.target instanceof Node && sb.element.contains(bb.target))) || sb.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const CT of ["touchstart", "touchmove"]) window.addEventListener(CT, wc, {
        capture: !0,
        passive: !0
      });

    function rc(bb) {
      let {
        pressesOnPointerDown: cb = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const sb = (0, kb.useRef)(bb);
      sb.current = bb;
      const Wb = (0, kb.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: cb,
        release: () => {
          sb.current()
        }
      });
      (0, kb.useEffect)((() => {
        const bb = Wb.current;
        return () => {
          Ac.delete(bb), bb.ids.clear()
        }
      }), []);
      const ab = bb => {
        const cb = Wb.current;
        for (const sb of Array.from(bb.changedTouches)) cb.ids.delete(sb.identifier);
        0 === cb.ids.size && Ac.delete(cb)
      };
      return {
        onTouchStart: bb => {
          const cb = Wb.current;
          cb.element = bb.currentTarget;
          for (const sb of Array.from(bb.changedTouches)) sb.target instanceof Node && bb.currentTarget.contains(sb.target) && cb.ids.add(sb.identifier);
          cb.ids.size > 0 && Ac.add(cb)
        },
        onTouchEnd: ab,
        onTouchCancel: ab
      }
    }

    function oc(bb, cb) {
      return null === cb ? null : (0, qc.b)(bb.nativeEvent.changedTouches, cb.id)
    }

    function Sc(bb) {
      let {
        lockable: cb
      } = bb;
      const {
        t: sb
      } = (0, yb.E)(), Wb = "round" === (0, Mc.db)().hudShape, ab = (0, kb.useRef)(!1);
      Zc(vb.w.Jump, ab);
      const Tb = (0, kb.useRef)(null),
        Ub = (0, kb.useRef)(null),
        Ib = (0, kb.useRef)(null),
        fb = (0, kb.useRef)(null),
        Mb = (0, kb.useRef)(null),
        Xb = (0, kb.useRef)(null),
        nb = (0, kb.useRef)(!1),
        mb = (bb, cb) => {
          ab.current = bb, (0, Fb.t)(vb.w.Jump, bb, cb)
        },
        lb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          ab.current && (Tb.current && (0, pb.f)(Tb.current, !1), mb(!1, bb))
        },
        Qb = fc(cb, {
          create: bb => new dc(bb),
          elementRef: Tb,
          ringRef: Ub,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const bb = Tb.current.getBoundingClientRect(),
              cb = Ib.current.parentElement,
              sb = cb.getBoundingClientRect(),
              kb = {
                left: sb.left + cb.clientLeft,
                top: sb.top + cb.clientTop,
                right: sb.right - cb.clientLeft,
                bottom: sb.bottom - cb.clientTop
              };
            if (Mb.current = cc(Ib.current, kb, 16, sc(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${lc.c}`)), null === Mb.current) return void Qb.current.suspend();
            const Wb = Mb.current;
            Xb.current = {
              left: Math.min(bb.left, Wb.left),
              top: Wb.top,
              right: Math.max(bb.right, Wb.right),
              bottom: bb.bottom
            }, nb.current = null !== fb.current && kc({
              clientX: fb.current.x,
              clientY: fb.current.y
            }, Wb)
          },
          onUnlocked: () => {
            null === fb.current && lb()
          }
        }),
        eb = bb => {
          var cb;
          fb.current = null, null === (cb = Qb.current) || void 0 === cb || cb.cancel(), lb(bb)
        },
        Cb = rc((() => {
          eb()
        })),
        Nb = bb => {
          const cb = fb.current;
          var sb;
          return null === cb ? null !== (sb = Qb.current) && void 0 !== sb && sb.locked ? null : "lifted" : oc(bb, cb) ? "lifted" : (0, qc.c)(bb.nativeEvent.touches, cb.id) ? null : "dropped"
        };
      return (0, Hb.jsxs)(Kc, {
        ref: Tb,
        slot: Pc,
        className: "JumpKey",
        onTouchStart: bb => {
          Cb.onTouchStart(bb), (0, pb.f)(bb.currentTarget, !0), null === fb.current || (0, qc.c)(bb.nativeEvent.touches, fb.current.id) || eb();
          const cb = bb.changedTouches[0];
          var sb;
          null === fb.current && cb && (fb.current = {
            id: cb.identifier,
            x: cb.clientX,
            y: cb.clientY
          }, null === (sb = Qb.current) || void 0 === sb || sb.press(cb.clientX, cb.clientY));
          ab.current || mb(!0, bb.nativeEvent)
        },
        onTouchMove: bb => {
          const cb = fb.current,
            sb = oc(bb, cb);
          if (!sb) return;
          const kb = Qb.current;
          if (null === kb || void 0 === kb || kb.move(sb.clientX, sb.clientY, Xb.current), null !== kb && void 0 !== kb && kb.offered) {
            const bb = kc(sb, Mb.current);
            bb !== nb.current && (nb.current = bb, kb.target(bb))
          }
          cb.x = sb.clientX, cb.y = sb.clientY
        },
        onTouchEnd: bb => {
          var cb;
          Cb.onTouchEnd(bb);
          const sb = Nb(bb);
          null !== sb && ("dropped" !== sb ? (fb.current = null, null !== (cb = Qb.current) && void 0 !== cb && cb.lift() ? (0, pb.f)(bb.currentTarget, !1) : lb(bb.nativeEvent)) : eb(bb.nativeEvent))
        },
        onTouchCancel: bb => {
          Cb.onTouchCancel(bb), null !== Nb(bb) && eb(bb.nativeEvent)
        },
        children: [(0, Hb.jsx)(Kb.b, {
          name: "arrow-up-from-line"
        }), cb && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Hb.jsx)(Kb.b, {
              name: "lock"
            })
          }), (0, Hb.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Hb.jsx)("rect", {
              ref: Ub,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Wb ? 48 : 0,
              pathLength: 1
            })
          }), (0, Hb.jsxs)("div", {
            ref: Ib,
            className: "JumpLockTarget",
            children: [(0, Hb.jsx)(Kb.b, {
              name: "lock"
            }), sb("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const Rc = new WeakMap;
    class vc {
      constructor(bb) {
        this.zones = bb, this.followed = new Map, this.onStart = bb => {
          if (this.releaseMissing(bb.touches), bb.target instanceof HTMLCanvasElement)
            for (let sb = 0; sb < bb.changedTouches.length; sb++) {
              var cb;
              const {
                identifier: kb,
                clientX: Wb,
                clientY: ab
              } = bb.changedTouches[sb];
              this.release(kb);
              const Tb = this.zones.hitZone(Wb, ab);
              if (!Tb) continue;
              const {
                key: Ub
              } = Tb;
              null === (cb = Rc.get(Ub)) || void 0 === cb || cb.cancel();
              const Ib = {
                hit: Tb.element,
                key: Ub,
                x: Tb.x,
                y: Tb.y,
                reach: .6 * Tb.radius
              };
              this.followed.set(kb, Ib), (0, pb.f)(Tb.element, !0), Fc(Ib, Wb, ab)
            }
        }, this.onMove = bb => {
          this.releaseMissing(bb.touches);
          for (let cb = 0; cb < bb.changedTouches.length; cb++) {
            const {
              identifier: sb,
              clientX: kb,
              clientY: Wb
            } = bb.changedTouches[cb], ab = this.followed.get(sb);
            ab && Fc(ab, kb, Wb)
          }
        }, this.onEnd = bb => {
          for (let cb = 0; cb < bb.changedTouches.length; cb++) this.release(bb.changedTouches[cb].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const bb = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, bb), document.addEventListener("touchmove", this.onMove, bb), document.addEventListener("touchend", this.onEnd, bb), document.addEventListener("touchcancel", this.onEnd, bb), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(bb) {
        for (const cb of [...this.followed.keys()])(0, qc.c)(bb, cb) || this.release(cb)
      }
      releaseAll() {
        for (const bb of [...this.followed.keys()]) this.release(bb)
      }
      release(bb) {
        const cb = this.followed.get(bb);
        if (!cb) return;
        this.followed.delete(bb);
        for (const Wb of this.followed.values())
          if (Wb.key === cb.key) return;
        (0, pb.f)(cb.hit, !1);
        const {
          key: sb
        } = cb, kb = sb.style.translate;
        sb.style.translate = "", kb && Rc.set(sb, sb.animate({
          translate: [kb, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Fc(bb, cb, sb) {
      let {
        key: kb,
        x: Wb,
        y: ab,
        reach: Tb
      } = bb;
      const Ub = cb - Wb,
        Ib = sb - ab,
        Hb = Math.min(1, Tb / (Math.hypot(Ub, Ib) || 1));
      kb.style.translate = `${Ub*Hb}px ${Ib*Hb}px`
    }
    const xc = () => {
      const bb = (0, Rb.n)(),
        cb = (0, gb.l)();
      return bb || cb
    };

    function jc(bb) {
      (0, xb.l)(bb.x, bb.y)
    }
    const pc = (0, kb.memo)((function() {
        const bb = xc(),
          {
            joystickMode: cb,
            touchSpeedCurve: sb,
            autorun: Wb
          } = (0, hb.p)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, kb.useEffect)((() => ((0, jb.d)(vb.z.TouchControls, vb.z.TouchControls), () => {
          (0, jb.d)(vb.z.TouchControls, 0), (0, xb.l)(0, 0)
        })), []), (0, Hb.jsx)("div", {
          className: ab()("TouchMovementWrapper", {
            Hidden: bb
          }),
          "data-camera-keeper": "",
          children: (0, Hb.jsx)(hc, {
            onMove: jc,
            mode: cb,
            speedCurve: sb ? Bc : void 0,
            autorun: Wb
          })
        })
      })),
      bs = (0, kb.memo)((function() {
        const bb = xc(),
          {
            clientEscMenuOptions: cb
          } = (0, hb.p)(["clientEscMenuOptions"]),
          sb = cb.touchActionButtons;
        return (0, kb.useEffect)((() => new vc(xb.k).start()), []), (0, kb.useEffect)((() => {
          Vb.j.QQ(mc.d)
        }), [bb]), (0, Hb.jsxs)("div", {
          className: ab()("TouchComponentsButtons", {
            Hidden: bb
          }),
          "data-camera-keeper": "",
          children: [(0, Hb.jsx)(Sc, {
            lockable: cb.jumpLock && !bb
          }), (0, Hb.jsx)(Xs, {
            hidden: bb,
            actionButtons: sb
          }), (0, Hb.jsx)(ss, {})]
        })
      }));

    function cs(bb) {
      const cb = cb => sb => {
        (0, pb.f)(sb.currentTarget, cb), bb(cb, sb.nativeEvent)
      };
      return {
        onPointerDown: cb(!0),
        onPointerUp: cb(!1),
        onPointerCancel: cb(!1)
      }
    }

    function ss() {
      const bb = (0, Nb.d)("canCrouch"),
        cb = (0, Yb.f)("crouching"),
        sb = (0, kb.useRef)(!1);
      Zc(vb.w.Crouch, sb);
      const Wb = (bb, cb) => {
          sb.current = bb, (0, Fb.t)(vb.w.Crouch, bb, cb)
        },
        ab = (0, kb.useRef)(null),
        Tb = () => {
          sb.current && (ab.current && (0, pb.f)(ab.current, !1), Wb(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Ub = rc(Tb);
      return (0, kb.useEffect)((() => {
        !1 === bb && Tb()
      }), [bb]), !1 === bb ? null : (0, Hb.jsx)(Kc, {
        ref: ab,
        slot: yc,
        className: "CrouchKey",
        lit: cb,
        ...Ub,
        ...cs(Wb),
        children: (0, Hb.jsx)(Kb.b, {
          name: "arrow-down-to-line"
        })
      })
    }
    const ks = [{
        icon: "arrows-rotate"
      }],
      Ws = [{
        icon: "Arrow"
      }],
      as = [{
        icon: "crosshairs"
      }],
      Ts = [{
        icon: "swords"
      }],
      Us = [{
        icon: "hand-back-point-up"
      }],
      Is = [{
        icon: "Firecracker"
      }];

    function Hs(bb, cb, sb, kb) {
      return {
        id: JSON.stringify(cb),
        render: Wb => (0, Hb.jsx)(ns, {
          code: bb,
          slot: Wb,
          icon: cb,
          label: kb,
          hidden: sb
        })
      }
    }

    function fs(bb, cb) {
      return {
        id: "fly",
        render: sb => (0, Hb.jsx)(Ms, {
          slot: sb,
          flying: bb,
          label: cb
        })
      }
    }

    function Ms(bb) {
      let {
        slot: cb,
        flying: sb,
        label: kb
      } = bb;
      return (0, Hb.jsx)(Kc, {
        slot: cb,
        className: "FlyKey",
        lit: sb,
        label: kb,
        ...cs(((bb, cb) => {
          (0, Fb.t)(vb.w.Fly, bb, cb)
        })),
        children: (0, Hb.jsx)(Kb.b, {
          name: "feather-pointed"
        })
      })
    }

    function Xs(bb) {
      var cb, sb;
      let {
        hidden: kb,
        actionButtons: Wb
      } = bb;
      const {
        t: ab
      } = (0, yb.E)(), {
        gun: Tb,
        aimable: Ub,
        chargeName: Ib
      } = (0, Yb.f)("heldItemAim"), fb = (0, Yb.f)("gliderBoostFuel"), {
        canFly: Mb,
        flying: Xb
      } = (0, Yb.f)("flight"), nb = (0, Nb.d)("touchscreenActionButton"), mb = Tb ? ks : nb, lb = Ub ? {
        icon: Ws,
        label: ab("touchKeys:aim")
      } : null, Qb = null !== Ib ? {
        icon: [{
          icon: Ib
        }]
      } : null, eb = null !== lb && void 0 !== lb ? lb : Qb, Cb = null !== (cb = null === (sb = Tb ? lb : null !== Qb && void 0 !== Qb ? Qb : lb) || void 0 === sb ? void 0 : sb.icon) && void 0 !== cb ? cb : Us, Vb = [!Wb && eb ? Hs(xb.e.Action2, eb.icon, kb, eb.label) : null, Tb ? Hs(xb.e.Action3, as, kb, ab("touchKeys:scope")) : null, Mb ? fs(Xb, ab("touchKeys:fly")) : null];
      return (0, Hb.jsxs)(Hb.Fragment, {
        children: [mb && (0, Hb.jsx)(ns, {
          code: xb.e.Action1,
          slot: Oc,
          icon: mb,
          label: Tb ? ab("touchKeys:reload") : void 0,
          hidden: kb
        }, JSON.stringify(mb)), Wb && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)(ns, {
            code: xb.e.Attack,
            slot: ic,
            icon: Ts,
            name: ab("touchKeys:attack"),
            hidden: kb
          }), (0, Hb.jsx)(ns, {
            code: xb.e.Use,
            slot: Dc,
            icon: Cb,
            name: ab("touchKeys:use"),
            hidden: kb
          })]
        }), zc(Vb, Wb), fb > 0 && (0, Hb.jsx)(ns, {
          code: xb.e.Boost,
          slot: Gc,
          icon: Is,
          label: ab("touchKeys:boost", {
            fuel: fb > 99 ? "99+" : fb
          }),
          hidden: kb
        })]
      })
    }

    function ns(bb) {
      let {
        code: cb,
        slot: sb,
        icon: kb,
        label: Wb,
        name: ab,
        hidden: Tb
      } = bb;
      const Ub = tc(cb, Tb);
      return (0, Hb.jsx)(Kc, {
        ref: Ub,
        slot: sb,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Wb,
        role: void 0 !== ab ? "img" : void 0,
        "aria-label": ab,
        children: (0, Hb.jsx)(Ib.d, {
          text: kb
        })
      })
    }
    var ms = sb(4039),
      ls = sb(2749),
      Qs = sb(664);
    const es = (0, kb.memo)((function() {
      (0, eb.c)();
      const bb = (0, kb.useRef)([]),
        cb = (0, ls.b)(),
        sb = (0, kb.useRef)(0),
        Wb = (0, kb.useRef)(0),
        ab = (0, kb.useRef)([]),
        Tb = (0, kb.useRef)(null);

      function fb(sb, kb, Wb, ab) {
        const Tb = (0, Qs.d)(),
          Ub = setTimeout((() => {
            bb.current = bb.current.filter((bb => bb.id !== Tb)), cb()
          }), ab);
        Xb.gameBridge.send("recordFlyingMiddleText", {
          content: sb,
          sT: kb,
          angle: Wb,
          kT: ab
        }), bb.current.push({
          id: Tb,
          content: sb,
          sT: kb,
          kT: ab,
          removeTimeout: Ub,
          angle: Wb
        }), cb()
      }
      return (0, Yb.c)("shotDamageToShow", (bb => {
        let {
          damage: cb,
          wasCrit: sb,
          distance: kb
        } = bb;
        const Wb = -Math.PI / 4 + Math.random() * Math.PI / 2;
        fb(sb ? [{
          str: cb.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [cb.toString()], kb, Wb, 1e3)
      })), (0, Ub.f)("flyingMiddleMessage", (bb => {
        let {
          content: cb,
          sT: kb,
          kT: Ub
        } = bb;
        ab.current.push({
          content: cb,
          sT: kb,
          kT: Ub
        });
        const Ib = () => {
          const {
            content: bb,
            sT: cb,
            kT: kb
          } = ab.current.shift(), Tb = function(bb) {
            const cb = -Math.PI / 4,
              sb = Math.PI / 4,
              kb = sb - cb,
              Wb = (1 + Math.sqrt(5)) / 2,
              ab = 2 * Math.PI / (Wb * Wb);
            let Tb = bb + ab;
            for (; Tb > sb;) Tb -= kb;
            for (; Tb < cb;) Tb += kb;
            const Ub = Math.PI / 6;
            if (Math.abs(Tb - bb) < Ub) {
              Tb = bb + (Math.sign(Tb - bb) || 1) * Ub, Tb > sb && (Tb = bb - Ub), Tb < cb && (Tb = bb + Ub)
            }
            return Tb
          }(Wb.current);
          Wb.current = Tb, sb.current = Date.now(), fb(bb, cb, Tb, kb)
        };
        if (!Tb.current) {
          const bb = () => {
            ab.current.length > 0 && Ib(), 0 === ab.current.length && (clearInterval(Tb.current), Tb.current = null)
          };
          Tb.current = setInterval(bb, 200), sb.current + 200 < Date.now() && bb()
        }
        for (; ab.current.length > 4;) Ib()
      })), (0, Ub.f)("forceFlyingMiddleMessage", (bb => {
        let {
          content: cb,
          sT: sb,
          angle: kb,
          kT: Wb
        } = bb;
        fb(cb, sb, kb, Wb)
      })), (0, kb.useEffect)((() => () => {
        clearInterval(Tb.current), Tb.current = null;
        for (const cb of bb.current) clearTimeout(cb.removeTimeout)
      }), []), (0, Hb.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: bb.current.map((bb => {
          const {
            id: cb,
            content: sb,
            sT: kb,
            kT: Wb,
            angle: ab
          } = bb;
          return bb.pos || (bb.pos = function(bb, cb) {
            const sb = 50 / (bb ** .7 * .35);
            return {
              x: sb * Math.sin(cb),
              y: -sb * Math.cos(cb)
            }
          }(kb, ab)), (0, Hb.jsx)(Cs, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Wb,
            enterActiveStyle: {
              transform: `translate(${bb.pos.x}vw, ${bb.pos.y}vh)`,
              transition: `transform ${Wb}ms ease-out`
            },
            children: (0, Hb.jsx)("div", {
              children: (0, Hb.jsx)(Ib.d, {
                text: sb
              })
            })
          }, cb)
        }))
      })
    }));

    function Cs(bb) {
      let {
        children: cb,
        className: sb,
        classNames: Wb,
        timeout: ab,
        enterActiveStyle: Tb
      } = bb;
      const [Ub, Ib] = (0, kb.useState)(!1), [fb, Mb] = (0, kb.useState)(!1), Xb = (0, kb.useRef)(null);
      return (0, kb.useEffect)((() => {
        Ib(!0)
      }), []), (0, Hb.jsx)(ms.c, {
        className: sb,
        classNames: Wb || sb,
        in: Ub,
        timeout: ab,
        nodeRef: Xb,
        onEntering: () => {
          Mb(!0)
        },
        children: (0, kb.cloneElement)(cb, {
          ref: Xb,
          style: fb && Tb || void 0
        })
      })
    }
    var Ns = sb(36235);

    function Vs() {
      const bb = (0, Yb.f)("health");
      return (0, Hb.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Hb.jsx)(Ns.d, {
          placement: "statBars"
        }), (0, Hb.jsx)(Ls, {
          actualValue: bb.shield,
          maxValue: bb.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Hb.jsx)(Ls, {
          actualValue: bb.health,
          maxValue: bb.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Ls(bb) {
      let {
        actualValue: cb,
        maxValue: sb,
        hideAtValue: kb,
        icon: Wb,
        className: ab
      } = bb;
      return (0, eb.e)(), null === cb || null === sb || cb === kb || sb === kb ? null : (0, Hb.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Hb.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Hb.jsx)("div", {
            className: `BottomScreenStatBar ${ab}`,
            style: {
              transform: `scaleX(${Math.max(cb/sb,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Hb.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Hb.jsx)(Kb.b, {
              name: Wb
            }), ` ${Math.ceil(cb)}/${sb}`]
          })]
        })
      })
    }
    var us = sb(8917),
      Ys = sb(4270),
      hs = sb(1316),
      gs = sb(2593),
      Bs = sb(1431),
      ts = sb(1302),
      ys = sb(3191),
      Ps = sb(3243),
      Ds = sb(3208),
      Es = sb(760),
      is = sb(3263),
      Os = sb(167),
      Gs = sb(8836),
      Ks = sb(344);

    function Zs(bb, cb) {
      let {
        shownName: sb,
        lifeformType: kb
      } = bb;
      return null !== sb ? sb : null !== kb ? cb(`lifeform:${(0,Ks.Je)(kb)}`) : null
    }
    var zs = sb(3201),
      qs = sb(3203);
    const ds = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      As = (0, kb.memo)((function() {
        var bb, cb;
        const sb = (0, eb.c)(),
          Wb = (0, nb.useNavigatePreserveSearch)(),
          {
            t: Tb
          } = (0, yb.E)(),
          {
            loadingOverlayVisible: Ib
          } = (0, hb.p)(["loadingOverlayVisible"]),
          fb = (0, gb.l)(),
          [Mb, mb] = (0, kb.useState)(!1),
          [lb, Qb] = (0, kb.useState)(!0),
          [Cb, Vb] = (0, kb.useState)(null),
          ub = (0, ls.b)(),
          Jb = (0, Nb.d)("respawnButtonText"),
          Bb = (0, Nb.d)("usePlayAgainButton"),
          tb = (0, Nb.d)("useRespawnButton"),
          {
            gameNameWithVariation: Pb
          } = (0, Yb.f)("connectedGame"),
          Db = (0, kb.useRef)(Lb.e.get("secsToRespawn")),
          Eb = (0, kb.useRef)(Xb.gameBridge.latest("localPlayerAlive")),
          ib = (0, kb.useRef)(Lb.e.get("secsToRespawn")),
          Ob = (0, kb.useRef)(Lb.e.get("autoRespawn")),
          Gb = (0, kb.useRef)(null),
          Zb = (0, kb.useRef)(0),
          zb = (0, kb.useRef)(0),
          [qb, Ab] = (0, kb.useState)(!1),
          wb = (0, kb.useRef)(null),
          rb = (0, kb.useRef)(null),
          ob = (0, kb.useRef)(null);
        (0, Nb.c)("secsToRespawn", (bb => {
          console.log("Received new secsToRespawn with", bb, "and current canRespawn value of ", Ob.current), ib.current = bb, Fb()
        })), (0, Nb.c)("autoRespawn", (bb => {
          console.log("Received autorespawn", bb, "current canRespawn value of ", Db.current), Ob.current = bb, Fb()
        }));
        const Sb = bb => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", bb), bb || Zb.current++, Eb.current = bb, Fb()
        };
        (0, Yb.c)("localPlayerAliveSet", Sb), (0, Ub.f)(Ps.m, (bb => {
          "connected" === bb && !Eb.current && Ob.current && Db.current <= 0 && (zb.current = 0, xb())
        })), (0, kb.useEffect)((() => {
          const bb = Xb.gameBridge.latest("localPlayerAlive");
          bb === Eb.current ? (console.log("Updating respawn component from initial mount"), Fb()) : Sb(bb)
        }), []), (0, kb.useEffect)((() => {
          if (Mb) {
            Ab(!1);
            const bb = setTimeout((() => {
              Ab(!0)
            }), 600);
            return (0, Gs.e)(), () => {
              clearTimeout(bb)
            }
          }
          return () => {}
        }), [Mb]);
        (0, Yb.c)("kill", (bb => {
          let {
            killer: cb,
            victim: sb,
            withItem: kb
          } = bb;
          if (!sb.local) return;
          const Wb = ((bb, cb) => {
            if (bb.local) {
              const bb = ds[cb];
              return bb ? Tb(bb) : null
            }
            const sb = Zs(bb, Tb);
            return sb ? Tb("respawnPage:killedBy", {
              name: sb
            }) : null
          })(cb, kb);
          Wb && Vb({
            text: Wb,
            deathCount: Eb.current ? Zb.current + 1 : Zb.current
          })
        }));
        const Rb = () => {
            Mb && Ob.current && Eb.current && qb && mb(!1)
          },
          vb = Mb && Ob.current && Eb.current && qb && !Ib;
        (0, Ub.f)("usedKeyboard", (() => {
          Rb()
        })), (0, qs.b)("respawn", vb, Rb);
        const Fb = () => {
            Qb(ib.current >= 3 || !Ob.current), Eb.current ? (clearInterval(Gb.current), Gb.current = null, Ob.current ? ub() : mb(!1)) : (mb(!0), Db.current = ib.current, ub(), console.log("Running respawn stats updated", Ob.current, Db.current), Ob.current && Db.current <= 0 && xb(), clearInterval(Gb.current), Db.current > 0 && (Gb.current = setInterval((() => {
              Db.current = Math.max(Db.current - 1, 0), ub(), Db.current <= 0 && (clearInterval(Gb.current), Gb.current = null, Lb.e.get("autoRespawn") && xb())
            }), 1e3)))
          },
          xb = () => {
            if (Date.now() - zb.current > 1e3) {
              const bb = () => {
                Xb.gameBridge.send("respawn", null), zb.current = Date.now()
              };
              Lb.e.get("autoRespawn") ? bb() : (0, ts.db)((() => {
                bb()
              }), "video_respawn")
            }
          },
          jb = (0, kb.useMemo)((() => {
            var bb;
            return null === (bb = (0, Es.h)(Pb)) || void 0 === bb ? void 0 : bb.otherGameLinksOnRespawnPage
          }), [Pb]),
          pb = 0 === Db.current,
          bc = (null === Cb || void 0 === Cb ? void 0 : Cb.deathCount) === Zb.current ? Cb.text : null,
          cc = Mb && lb && !Ib,
          sc = fb && vb && null !== (bb = null === (cb = (0, db.g)()) || void 0 === cb ? void 0 : cb.getBoundButton("menuConfirm")) && void 0 !== bb ? bb : null,
          kc = bb => pb ? bb : Tb("respawnPage:actionInSeconds", {
            action: bb,
            seconds: Db.current
          });
        return (0, Hb.jsx)(us.b, {
          showing: Mb,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Hb.jsx)(ys.c, {
            show: Mb,
            "data-holds-camera-keeper": "",
            children: (0, Hb.jsxs)(Ys.c, {
              close: () => {
                mb(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: Ob.current || Ib ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Os.k)() && (0, Hb.jsx)(Bs.b, {
                onClick: Ds.e,
                children: Tb("homePage:backToGames")
              }), (0, Hb.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Rb,
                children: [(0, Hb.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Hb.jsx)("div", {
                    ref: rb,
                    className: "RespawnSideSquareBannerDiv",
                    children: sb[0] > 925 && (0, Hb.jsx)(gs.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: rb
                      },
                      showing: cc,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Hb.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Hb.jsxs)("div", {
                      className: ab()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: fb
                      }),
                      children: [Ob.current && (0, Hb.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Hb.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Hb.jsx)(Kb.b, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Tb("respawnPage:youDied")]
                        }), (0, Hb.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === sc && (Eb.current ? Tb("respawnPage:pressAnywhereToContinue") : pb ? Tb("respawnPage:respawning") : kc(Tb("general:respawn"))), null !== sc && (0, Hb.jsx)(zs.d, {
                            text: Tb("controller:screensPressToContinue", {
                              button: zs.g
                            }),
                            glyph: sc,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), bc && (0, Hb.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: bc
                        })]
                      }), !Ob.current && (0, Hb.jsxs)(Hb.Fragment, {
                        children: [(0, Hb.jsxs)("div", {
                          className: ab()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !jb
                          }),
                          children: [Bb && (0, Hb.jsx)(Bs.n, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, ts.db)((() => {
                                (0, hb.l)("inGameReplay");
                                const bb = (0, hs.b)(Pb);
                                Wb(bb)
                              }), "video_start")
                            },
                            disabled: !pb || !qb,
                            touchPressOn: "pointerup",
                            children: kc(Tb("respawnPage:playAgain"))
                          }), tb && (0, Hb.jsx)(Bs.d, {
                            className: "RespawnPageButton",
                            onClick: xb,
                            padDefaultFocus: !Bb,
                            padBack: "sessionBasedGame:stayInLobby" === Jb,
                            disabled: !pb || !qb,
                            touchPressOn: "pointerup",
                            children: kc(Tb(Jb))
                          }), !(0, Os.k)() && (0, Hb.jsx)(Bs.G, {
                            className: "RespawnPageButton",
                            onClick: Ds.e,
                            disabled: !pb || !qb,
                            touchPressOn: "pointerup",
                            children: kc(Tb("respawnPage:exitGame"))
                          })]
                        }), jb && (0, Hb.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Hb.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: Tb("respawnPage:orTry")
                          }), (0, Hb.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: jb.map((bb => (0, Hb.jsx)(is.h, {
                              source: {
                                type: "game",
                                gameNameWithVariation: bb
                              },
                              disabled: !pb || !qb,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, hb.l)("inGameReplay");
                                const cb = (0, hs.b)(bb);
                                Wb(cb)
                              }
                            }, bb)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Hb.jsx)("div", {
                    ref: ob,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Hb.jsx)("div", {
                  ref: wb,
                  className: "RespawnBottom",
                  children: (0, Hb.jsx)(gs.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: wb
                    },
                    showing: cc,
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
    var ws = sb(36253);
    const rs = [{
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
      os = [{
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
      Ss = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Rs = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      vs = (0, kb.memo)((function() {
        const bb = (0, kb.useRef)(null),
          cb = (0, kb.useRef)(null);

        function sb(sb) {
          var kb;
          let {
            Cs: Wb,
            screenPos: ab
          } = sb;
          const Tb = bb.current;
          null === (kb = cb.current) || void 0 === kb || kb.cancel(), Tb.classList.remove("HitmarkerCrit"), ab ? (Tb.style.left = `${ab.x}%`, Tb.style.top = `${ab.y}%`) : (Tb.style.left = "50%", Tb.style.top = "50%"), Tb.style.rotate = 16 * (Math.random() - .5) + "deg", Wb && Tb.classList.add("HitmarkerCrit");
          const Ub = Tb.animate(Wb ? os : rs, Wb ? Rs : Ss);
          cb.current = Ub, Ub.onfinish = () => {
            Tb.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Ub.f)("localGunHitmarker", (bb => {
          let {
            Cs: cb
          } = bb;
          sb({
            Cs: cb
          })
        })), (0, Ub.f)("yourAttackHit", (bb => {
          let {
            Cs: cb,
            screenPos: kb
          } = bb;
          sb({
            Cs: cb,
            screenPos: hb.d.get("isTouchScreen") ? kb : void 0
          })
        })), (0, Ub.f)("sendHitmarker", (bb => {
          let {
            Cs: cb,
            screenPos: kb
          } = bb;
          sb({
            Cs: cb,
            screenPos: kb
          })
        })), (0, Hb.jsxs)("div", {
          ref: bb,
          className: "Hitmarker",
          children: [(0, Hb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Hb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Hb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Hb.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Fs() {
      const bb = (0, kb.useRef)(!0);
      return (0, Ub.f)("localBlockMined", (() => {
        Wc.f.play("blockMined")
      })), (0, Ub.f)("yourAttackHit", (() => {
        Wc.f.play("hitLanded")
      })), (0, Ub.f)("localGunHitmarker", (() => {
        Wc.f.play("hitLanded")
      })), (0, Ub.f)("damagedByOtherPlayer", (() => {
        Wc.f.play("damageTaken")
      })), (0, Yb.c)("localPlayerAliveSet", (cb => {
        !cb && bb.current && Wc.f.play("death"), bb.current = cb
      })), null
    }
    var xs = sb(1858),
      ps = sb(36266),
      bk = sb.n(ps),
      ck = sb(1965),
      sk = sb(1951),
      kk = sb(3050),
      Wk = sb(8942);
    const ak = Ks.xe ? 7e7 : 7e3,
      Tk = bk()("#ffffff").alpha(.5).string();

    function Uk(bb) {
      const cb = (0, kk.b)(bb);
      return void 0 !== cb && "Gun" === (0, Wk.itemTypeOf)(cb)
    }

    function Ik(bb) {
      if (!bb) return console.error(`Killfeed colour was ${bb}`), Tk;
      try {
        return bk()(bb).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${bb} is not a colour`), Tk
      }
    }
    const Hk = (0, kb.memo)((function() {
      const {
        t: bb
      } = (0, yb.E)(), cb = (0, kb.useRef)([]), sb = (0, ls.b)();
      return (0, Yb.c)("kill", (function(kb) {
        var Wb, ab;
        let {
          killer: Tb,
          victim: Ub,
          withItem: Ib,
          killstreak: Hb
        } = kb;
        const fb = cb.current;
        if (fb.length >= 3) {
          const bb = fb.shift();
          clearTimeout(bb.timeout)
        }
        const Mb = Xb.gameBridge.latest("hiddenPlayerNames"),
          nb = {
            deadName: Zs(Ub, bb),
            killerName: Zs(Tb, bb),
            isFriend: {
              killer: (0, ck.e)(Tb.realName, Mb),
              dead: (0, ck.e)(Ub.realName, Mb)
            },
            withItem: Ib,
            wasHeadshot: !1,
            killstreak: Hb,
            timeout: setTimeout((() => {
              fb.shift(), sb()
            }), ak),
            reactId: `${null!==(Wb=Tb.id)&&void 0!==Wb?Wb:Tb.shownName}|${null!==(ab=Ub.id)&&void 0!==ab?ab:Ub.shownName}|${Date.now()}`,
            killerBackground: Ik(Tb.colour),
            deadBackground: Ik(Ub.colour)
          };
        fb.push(nb), sb()
      })), (0, kb.useEffect)((() => {
        const bb = cb.current;
        return () => {
          for (; bb.length > 0;) {
            const {
              timeout: cb
            } = bb.pop();
            clearTimeout(cb)
          }
        }
      }), []), (0, Hb.jsx)("div", {
        className: "Killfeed",
        children: cb.current.map((bb => {
          let {
            deadName: cb,
            killerName: sb,
            withItem: kb,
            wasHeadshot: Wb,
            killstreak: ab,
            killerBackground: Tb,
            deadBackground: Ub,
            reactId: Ib,
            isFriend: fb
          } = bb;
          return (0, Hb.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Tb} calc(100% - 10rem), ${Ub} 100%)`
            },
            children: [ab >= 2 ? (0, Hb.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Ks.Q)(ab)
            }) : null, (0, Hb.jsx)("div", {
              className: "KillfeedKillerName",
              children: sb
            }), fb.killer && (0, Hb.jsx)(sk.d, {}), (0, Hb.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Uk(kb) ? "7.5vmin" : "5vmin"
              },
              children: (0, Hb.jsx)(xs.d, {
                itemName: kb,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Wb ? (0, Hb.jsx)(Kb.b, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Hb.jsx)("div", {
              className: "KillfeedDeadName",
              children: cb
            }), fb.dead && (0, Hb.jsx)(sk.d, {})]
          }, Ib)
        }))
      })
    }));
    var fk = sb(36323),
      Mk = sb(1133),
      Xk = sb.n(Mk),
      nk = sb(3177),
      mk = sb(36328),
      lk = sb(1291);
    const Qk = {},
      ek = (0, kb.memo)((function() {
        const bb = (0, kb.useRef)({}),
          [, cb] = (0, kb.useReducer)((bb => bb + 1), 0);
        (0, Ub.f)("setDirectionArrow", (sb => {
          let {
            id: kb,
            position: Wb,
            style: ab,
            text: Tb,
            Ya: Ub
          } = sb;
          const Ib = bb.current,
            Hb = ab || Qk,
            fb = Tb,
            Mb = Ib[kb];
          if (!Mb) return Ib[kb] = {
            position: Wb,
            style: Hb,
            text: fb,
            shouldShowDistance: Ub,
            Wy: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void cb();
          const Xb = !Xk()(Mb.style, Hb) || !Xk()(Mb.text, fb) || Mb.shouldShowDistance !== Ub;
          Mb.position = Wb, Mb.style = Hb, Mb.text = fb, Mb.shouldShowDistance = Ub, Xb && cb()
        })), (0, Ub.f)("clearDirectionArrow", (sb => {
          let {
            id: kb
          } = sb;
          const Wb = bb.current;
          if (null === kb)
            for (const bb in Wb) delete Wb[bb];
          else delete Wb[kb];
          cb()
        })), (0, kb.useEffect)((() => {
          const cb = bb.current,
            sb = (0, lk.m)((() => {
              ! function(bb) {
                const cb = Xb.gameBridge.lookup("localPos", null),
                  sb = nk.e - Ck,
                  kb = (0, nk.p)() - Ck;
                for (const Wb in bb) {
                  const ab = bb[Wb];
                  if (!ab.Wy) continue;
                  const Tb = Xb.gameBridge.lookup("screenPos", ab.position),
                    Ub = Tb.x - 50,
                    Ib = Tb.y - 50;
                  Tb.x === ab.lastScreenX && Tb.y === ab.lastScreenY || (ab.lastScreenX = Tb.x, ab.lastScreenY = Tb.y, ab.Wy.style.translate = `${Tb.x}vw ${Tb.y}vh`, ab.chevronElement && (ab.chevronElement.style.rotate = `${Ks.d.fastATan2(Ib,Ub)}rad`));
                  const Hb = Math.abs(Ub) < sb && Math.abs(Ib) < kb;
                  if (Hb !== ab.onScreen && (ab.onScreen = Hb, ab.Wy.classList.toggle("DirectionArrowOnScreen", Hb)), ab.shouldShowDistance && ab.distanceElement) {
                    const bb = ab.position[0] - cb[0],
                      sb = ab.position[1] - cb[1],
                      kb = ab.position[2] - cb[2],
                      Wb = Math.round(Math.sqrt(bb * bb + sb * sb + kb * kb));
                    (-1 === ab.lastRenderedDist || (0, mk.b)(Wb, ab.lastRenderedDist, ab.lastDistUpdateTime)) && (ab.distanceElement.textContent = `${Wb}m`, ab.lastRenderedDist = Wb, ab.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(cb)
            }));
          return () => {
            sb();
            for (const bb in cb) delete cb[bb]
          }
        }), []);
        const sb = bb.current;
        return (0, Hb.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(sb).map((bb => {
            var cb;
            let [kb, Wb] = bb;
            const ab = null !== (cb = (0, Cb.ac)(Wb.style)) && void 0 !== cb ? cb : "#ffffff";
            return (0, Hb.jsxs)("div", {
              ref: bb => {
                sb[kb] && (sb[kb].Wy = bb)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Wb.style.fontSize,
                opacity: Wb.style.opacity
              },
              children: [(0, Hb.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: bb => {
                  sb[kb] && (sb[kb].chevronElement = bb)
                },
                children: [(0, Hb.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Hb.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Hb.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Hb.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Hb.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: ab
                    }
                  }), (0, Hb.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: ab
                    }
                  })]
                })]
              }), (0, Hb.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: ab,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${ab}`
                }
              }), Wb.text && (0, Hb.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: ab,
                  fontWeight: Wb.style.fontWeight,
                  fontStyle: Wb.style.fontStyle
                },
                children: (0, Hb.jsx)(Ib.d, {
                  text: Wb.text
                })
              }), Wb.shouldShowDistance && (0, Hb.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: bb => {
                  sb[kb] && (sb[kb].distanceElement = bb)
                },
                style: {
                  color: ab,
                  fontWeight: Wb.style.fontWeight,
                  fontStyle: Wb.style.fontStyle
                }
              })]
            }, kb)
          }))
        })
      })),
      Ck = .5;
    const Nk = (0, kb.memo)((function(bb) {
        let {
          isTouchScreen: cb
        } = bb;
        return (0, Hb.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Hb.jsx)(Yk, {}), cb && (0, Hb.jsx)(bs, {})]
        })
      })),
      Vk = {
        readyForNext: 0,
        running: 1
      },
      Lk = 50;

    function uk(bb) {
      console.assert(bb.state.current === Vk.readyForNext);
      const cb = bb.queue.current,
        sb = bb.foreground.current;
      if (cb.length > 0 && sb) {
        const {
          toFraction: kb,
          toDuration: Wb
        } = cb.shift();
        bb.state.current = Vk.running, sb.style.transition = `transform ${Math.max(Wb-Lk,0)}ms linear`, sb.classList.remove("Complete"), bb.timeout.current = setTimeout((() => {
          sb.style.transform = `scaleX(${kb})`, bb.timeout.current = setTimeout((() => {
            1 === kb && sb.classList.add("Complete"), bb.state.current = Vk.readyForNext, uk(bb)
          }), Math.max(Wb - Lk, 0))
        }), Lk)
      }
    }

    function Yk() {
      const bb = (0, kb.useRef)([]),
        cb = (0, kb.useRef)(Vk.readyForNext),
        sb = (0, kb.useRef)(void 0),
        Wb = (0, kb.useRef)(null),
        ab = (0, kb.useRef)({
          queue: bb,
          state: cb,
          timeout: sb,
          foreground: Wb
        }),
        Tb = (0, Nb.d)("showProgressBar");
      if ((0, kb.useLayoutEffect)((() => (Tb && cb.current === Vk.readyForNext && uk(ab.current), () => {
          cb.current = Vk.readyForNext, clearTimeout(sb.current), Tb && (bb.current.length = 0)
        })), [Tb]), (0, Ub.f)("progressBarUpdate", (sb => {
          let {
            toFraction: kb,
            toDuration: Wb
          } = sb;
          bb.current.push({
            toFraction: kb,
            toDuration: Wb
          }), cb.current === Vk.readyForNext && uk(ab.current)
        })), !Tb) return null;
      return (0, Hb.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Hb.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Wb,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var hk = sb(36334),
      Jk = sb(2358);
    const gk = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function Bk(bb) {
      let {
        classes: cb,
        gone: sb
      } = bb;
      const kb = document.documentElement;
      kb.classList.remove(...cb);
      for (const Wb of sb) Wb.style.display = "block";
      return () => {
        kb.classList.add(...cb);
        for (const bb of sb) bb.style.display = ""
      }
    }

    function tk(bb) {
      const {
        isTouchScreen: cb
      } = (0, hb.p)(["isTouchScreen"]);
      (0, kb.useLayoutEffect)((() => {
        if (!cb) return;
        const sb = bb.current,
          kb = document.querySelector(`.${hk.l}`),
          Wb = bb => {
            const cb = () => {
              const cb = bb.querySelector(Jk.h),
                kb = function(bb) {
                  const cb = document.documentElement;
                  return {
                    classes: Mc.E.map(lc.x).filter((bb => cb.classList.contains(bb))),
                    gone: [...bb.querySelectorAll(`.TopRightTrayToggle.${Jk.l}`)]
                  }
                }(bb);
              cb && function(bb, cb) {
                (0, Jk.C)(bb, cb.classes.length > 0 || cb.gone.length > 0, (() => Bk(cb)))
              }(cb, kb);
              const Wb = `${Math.floor(function(bb,cb,sb){const kb=document.documentElement,Wb=kb.classList.contains((0,lc.B)("menu")),ab=kb.style.getPropertyValue((0,lc.F)("menu"));if(!Wb&&""===ab)return bb.getBoundingClientRect().left;const Tb=cb?(0,Jk.p)(cb):()=>{},Ub=Bk(sb);kb.classList.remove((0,lc.B)("menu")),kb.style.removeProperty((0,lc.F)("menu"));const Ib=bb.getBoundingClientRect().left;return Ub(),Tb(),Wb&&kb.classList.add((0,lc.B)("menu")),""!==ab&&kb.style.setProperty((0,lc.F)("menu"),ab),Ib}(bb,cb,kb)-sb.getBoundingClientRect().left-4)}px`;
              sb.style.getPropertyValue("--InGameHeaderMaxWidth") !== Wb && sb.style.setProperty("--InGameHeaderMaxWidth", Wb)
            };
            cb();
            const Wb = new ResizeObserver(cb);
            Wb.observe(bb), Wb.observe(kb), window.addEventListener("resize", cb);
            const ab = () => gk.map((bb => document.documentElement.style.getPropertyValue(bb))).join();
            let Tb = ab();
            const Ub = new MutationObserver((() => {
              const bb = ab();
              bb !== Tb && (Tb = bb, cb())
            }));
            Ub.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Ib = (0, Vb.l)(lc.g, cb),
              Hb = new MutationObserver(cb);
            return Hb.observe(bb, {
              childList: !0,
              subtree: !0
            }), () => {
              Wb.disconnect(), Ub.disconnect(), Hb.disconnect(), Ib(), window.removeEventListener("resize", cb);
              const sb = bb.querySelector(Jk.h);
              sb && (0, Jk.p)(sb)
            }
          },
          ab = () => kb.querySelector(".TopRightIconsContainer"),
          Tb = ab();
        let Ub;
        if (Tb) Ub = Wb(Tb);
        else {
          const bb = new MutationObserver((() => {
            const cb = ab();
            cb && (bb.disconnect(), Ub = Wb(cb))
          }));
          bb.observe(kb, {
            childList: !0,
            subtree: !0
          }), Ub = () => {
            bb.disconnect()
          }
        }
        return () => {
          Ub(), sb.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [cb, bb])
    }
    var yk = sb(3466),
      Pk = sb(3459),
      Dk = sb(1626),
      Ek = sb(1474),
      ik = sb(1629),
      Ok = sb(1704),
      Gk = sb(1800),
      Kk = sb(1126),
      Zk = sb(4062),
      zk = sb(1454),
      qk = sb(1335);
    const dk = 2e4,
      Ak = 6e5,
      wk = new Set;

    function rk() {
      const {
        gameEntrySource: bb,
        loadingOverlayVisible: cb
      } = (0, hb.p)(["gameEntrySource", "loadingOverlayVisible"]), sb = (0, Yb.e)("connectedGame", (bb => (0, Zk.k)(bb) ? bb.lobbyName : null)), Wb = (0, Yb.f)("localPlayerAlive"), ab = (0, Yb.e)("players", (bb => null !== bb.localId && void 0 !== bb.byId[bb.localId])), [Tb, Ub] = (0, kb.useState)(null);
      return !cb && Wb && ab && null !== sb && Tb !== sb && Ub(sb), (0, kb.useEffect)((() => {
        if (!(0, Zk.o)(bb) || null === Tb || Tb !== sb || wk.has(Tb)) return;
        const cb = setTimeout((() => {
          wk.add(Tb), async function(bb) {
            const cb = await Kk.userContextManager.getCurrentUserContext();
            let sb;
            try {
              sb = (await Ek.b.getWorldOwnerFriendOffer(cb)).owner
            } catch (Wb) {
              return void console.warn("Couldn't ask who owns this world", Wb)
            }
            if (!sb || (0, Zk.u)(sb.name, Date.now())) return;
            const kb = sb;
            ! function(bb, cb) {
              const sb = Date.now() + Ak;
              let kb = Date.now(),
                Wb = 0;
              const ab = () => {
                const Tb = Date.now(),
                  Ub = Xb.gameBridge.latest("connectedGame");
                Ub.lobbyName !== bb || Tb > sb || (null === Ub.websocketUrl ? kb = 1 / 0 : kb === 1 / 0 && !hb.d.get("loadingOverlayVisible") && Xb.gameBridge.latest("localPlayerAlive") && (kb = Tb + dk), Wb = Tb < kb || !Xb.gameBridge.latest("localPlayerAlive") || hb.d.get("isUiHidden") || hb.d.get("isUiHiddenByCamera") || (0, Ok.isTypingInInput)() || hb.d.get("loadingOverlayVisible") || (0, Dk.q)() || (0, yk.f)() || (0, qk.l)() ? 0 : Wb + 1, Wb >= 2 ? cb() : setTimeout(ab, 500))
              };
              ab()
            }(bb, (() => {
              (0, Zk.h)(ik.c.getSocialState().friends, kb.name) || ((0, Zk.r)(kb.name, Date.now()), Gk.f.showWorldOwnerOffer(kb), (0, zk.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Tb).catch((bb => {
            console.error("Failed to offer the world's owner as a friend", bb)
          }))
        }), dk);
        return () => {
          clearTimeout(cb)
        }
      }), [bb, Tb, sb]), null
    }
    var Sk = sb(1845);
    const Rk = (0, kb.memo)((function(bb) {
        let {
          durationMs: cb,
          endsAtMs: sb
        } = bb;
        const [, Wb] = (0, kb.useReducer)((bb => bb + 1), 0), ab = null === sb ? cb : Math.max(sb - Date.now(), 0);
        return (0, kb.useEffect)((() => {
          if (null === sb || ab <= 0) return;
          const bb = setTimeout(Wb, ab - 1e3 * (Math.ceil(ab / 1e3) - 1));
          return () => {
            clearTimeout(bb)
          }
        })), (0, Hb.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Ks.gb)(ab)
        })
      })),
      vk = (0, kb.memo)((function() {
        const bb = (0, Yb.f)("localEffects");
        return (0, Hb.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(bb).map((bb => {
            let [cb, {
              icon: sb,
              displayName: kb,
              durationMs: Wb,
              endsAtMs: ab,
              level: Tb
            }] = bb;
            return (0, Hb.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Hb.jsx)(Sk.e, {
                icon: sb,
                className: "EffectInfoIcon"
              }), (0, Hb.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Wb ? "0" : "1rem"
                },
                children: [(0, Hb.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Hb.jsx)(Ib.d, {
                    text: null !== kb && void 0 !== kb ? kb : cb,
                    className: "EffectInfoName SmallTextBold"
                  }), Tb > 1 && (0, Hb.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Ks.Q)(Tb)
                  })]
                }), null !== Wb && (0, Hb.jsx)(Rk, {
                  durationMs: Wb,
                  endsAtMs: ab
                })]
              })]
            }, cb)
          }))
        })
      }));
    var Fk = sb(36337),
      xk = sb(36471),
      jk = sb(223),
      pk = sb(1332),
      bW = sb(2610),
      cW = sb(2714);

    function sW(bb, cb) {
      (0, kb.useLayoutEffect)((() => {
        let cb, sb;
        const kb = requestAnimationFrame((() => {
          sb = setTimeout((() => {
            sb = void 0;
            const kb = bb();
            cb = "function" === typeof kb ? kb : void 0
          }), 0)
        }));
        return () => {
          var bb;
          cancelAnimationFrame(kb), clearTimeout(sb), null === (bb = cb) || void 0 === bb || bb()
        }
      }), cb)
    }
    const kW = [5, 5, 5],
      WW = [7, 4, 4, 4];

    function aW(bb) {
      return bb.reduce(((bb, cb) => bb + cb), 0)
    }

    function TW(bb, cb, sb, kb, Wb) {
      const ab = bb.getContext("2d");
      if (!ab) return null;
      const Tb = cb.fontFamily,
        Ub = cb.fontWeight;
      return bb.width = sb, bb.height = kb, ab.fillStyle = cb.color, ab.textAlign = "center", ab.textBaseline = "middle", ab.font = `${Ub} ${Wb}px ${Tb}`, ab
    }
    const UW = (0, kb.memo)((function(bb) {
      let {
        show: cb
      } = bb;
      const sb = (0, kb.useRef)(null),
        Wb = (0, kb.useRef)(null),
        ab = (0, kb.useRef)(null),
        Tb = (0, mb.k)();
      return (0, kb.useEffect)((() => Tb.whenShown((() => {
        let bb = 0,
          cb = 0,
          sb = performance.now(),
          kb = 0;
        const Tb = (0, lk.m)((() => {
          var Tb, Ub, Ib;
          bb++, cb++;
          const Hb = performance.now();
          if (Hb - sb < 1e3) return;
          const fb = Math.round(bb / (Hb - sb) * 1e3);
          if (Wb.current = fb, null === (Tb = ab.current) || void 0 === Tb || Tb.call(ab, fb), bb = 0, sb = Hb, fb >= 55) return void(kb = 0);
          if (kb += 1, kb < 15) return;
          const Mb = null !== (Ub = ub.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Ub ? Ub : 0,
            [nb, mb] = Lb.e.get("minChunkAddDist");
          if (function(bb, cb) {
              const sb = Xb.gameBridge.lookup("yN", null);
              return null !== sb && (sb.horizontal > bb || sb.vertical > cb)
            }(nb, mb) && (null !== (Ib = ub.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Ib ? Ib : 0) + 432e5 < Date.now() && Mb < 3) {
            ub.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            pk.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((bb => {
              "notificationTornDown" !== bb && (bb ? (Xb.gameBridge.send("setChunkAddDistance", {
                horizontal: nb,
                vertical: mb
              }), ub.h.setItem("chunkHorizAddDist", nb), ub.h.setItem("chunkVertAddDist", mb), Vb.j.QQ("updatedChunkLoadDist"), ub.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : ub.h.setItem("decreaseLoadDistPromptDeniedCount", Mb + 1))
            }))
          }
        }));
        let Ub = performance.now();
        cb = 0;
        let Ib = null,
          Hb = !document.hidden;

        function fb() {
          const bb = performance.now() - Ub,
            sb = 1e3 * cb / bb;
          Hb && (null === Ib && (Ib = sb), bW.c.setFps(sb, Ib)), cb = 0, Ub = performance.now()
        }
        let Mb = setInterval(fb, cW.c);

        function nb() {
          const bb = Hb;
          Hb = !document.hidden, !bb && Hb && (cb = 0, Ub = performance.now(), clearInterval(Mb), Mb = setInterval(fb, cW.c))
        }
        return document.addEventListener("visibilitychange", nb), () => {
          Tb(), document.removeEventListener("visibilitychange", nb), clearInterval(Mb)
        }
      }))), [Tb]), sW((() => {
        var bb;
        if (!cb || ab.current) return;
        const kb = sb.current,
          Tb = window.getComputedStyle(kb.parentElement),
          Ub = null !== (bb = window.devicePixelRatio) && void 0 !== bb ? bb : 1,
          Ib = parseFloat(Tb.fontSize) * Ub,
          Hb = Math.round(3 * Ib),
          fb = Math.round(Ib),
          Mb = TW(kb, Tb, Hb, fb, Ib);
        if (!Mb) return;
        const Xb = bb => {
          Mb.clearRect(0, 0, kb.width, kb.height), Mb.fillText(bb.toString(), kb.width / 2, kb.height / 2)
        };
        ab.current = Xb, null !== Wb.current && Xb(Wb.current)
      }), [cb]), (0, Hb.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: cb ? "flex" : "none"
        },
        children: [(0, Hb.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Hb.jsx)("canvas", {
          className: "FpsCanvas",
          ref: sb,
          width: 48,
          height: 16
        })]
      })
    }));

    function IW(bb) {
      return Math.sign(bb) * Math.round(100 * Math.abs(bb))
    }

    function HW(bb) {
      let {
        getCoordinates: cb,
        showChunkCoords: sb,
        columns: Wb
      } = bb;
      const ab = (0, kb.useRef)(null);
      return sW((() => {
        var bb;
        const kb = ab.current,
          Tb = window.getComputedStyle(kb.parentElement),
          Ub = null !== (bb = window.devicePixelRatio) && void 0 !== bb ? bb : 1,
          Ib = parseFloat(Tb.fontSize) * Ub,
          Hb = Math.round(Ib * aW(Wb)),
          fb = Math.round(Ib),
          Mb = TW(kb, Tb, Hb, fb, Ib);
        if (!Mb) return;
        let nb = !0,
          mb = 0,
          lb = 0,
          Qb = 0,
          eb = 0,
          Cb = 0,
          Nb = 0;
        const Vb = () => {
          nb = !0
        };
        document.fonts.load(Mb.font).then(Vb, Vb);
        const Lb = () => {
          TW(kb, Tb, Hb, fb, Ib), Vb()
        };
        kb.addEventListener("contextrestored", Lb);
        const ub = (0, lk.s)((() => {
          var bb, ab, Tb, Ub, Hb, fb;
          const [Vb, Lb, ub] = cb(), Yb = IW(Vb), hb = IW(Lb), Jb = IW(ub);
          let gb = null;
          if (sb) {
            const bb = Xb.gameBridge.lookup("localPos", null);
            gb = (0, bc.bb)(bb[0], bb[1], bb[2])
          }
          const Bb = null !== (bb = null === (ab = gb) || void 0 === ab ? void 0 : ab[0]) && void 0 !== bb ? bb : 0,
            tb = null !== (Tb = null === (Ub = gb) || void 0 === Ub ? void 0 : Ub[1]) && void 0 !== Tb ? Tb : 0,
            yb = null !== (Hb = null === (fb = gb) || void 0 === fb ? void 0 : fb[2]) && void 0 !== Hb ? Hb : 0;
          if (!nb && Yb === mb && hb === lb && Jb === Qb && Bb === eb && tb === Cb && yb === Nb) return;
          nb = !1, mb = Yb, lb = hb, Qb = Jb, eb = Bb, Cb = tb, Nb = yb;
          const Pb = [(Yb / 100).toFixed(2), (hb / 100).toFixed(2), (Jb / 100).toFixed(2)];
          gb && Pb.unshift(`${Bb} ${tb} ${yb}`), Mb.clearRect(0, 0, kb.width, kb.height);
          const Db = kb.height / 2;
          let Eb = 0;
          for (let cb = 0; cb < Pb.length; cb++) {
            const bb = Ib * Wb[cb];
            Mb.fillText(Pb[cb], Eb + bb / 2, Db, bb), Eb += bb
          }
        }));
        return () => {
          ub(), kb.removeEventListener("contextrestored", Lb)
        }
      }), [cb, sb, Wb]), (0, Hb.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Hb.jsx)("canvas", {
          ref: ab,
          className: "CoordinateCanvas",
          width: 16 * aW(Wb),
          height: 16
        })
      })
    }
    const fW = (0, kb.memo)((function() {
        const bb = (0, kb.useCallback)((() => {
          const bb = Xb.gameBridge.lookup("localPos", null);
          return [bb[0], bb[1], bb[2]]
        }), []);
        return (0, Hb.jsx)(HW, {
          getCoordinates: bb,
          showChunkCoords: !1,
          columns: kW
        })
      })),
      MW = (0, kb.memo)((function() {
        const bb = (0, kb.useCallback)((() => {
          const bb = Xb.gameBridge.lookup("localPos", null),
            cb = jk.e.qm;
          let sb = bb[0] % cb,
            kb = bb[1] % cb,
            Wb = bb[2] % cb;
          return sb < 0 && (sb += cb), kb < 0 && (kb += cb), Wb < 0 && (Wb += cb), [sb, kb, Wb]
        }), []);
        return (0, Hb.jsx)(HW, {
          getCoordinates: bb,
          showChunkCoords: !0,
          columns: WW
        })
      }));
    var XW = sb(1994),
      nW = sb(1327),
      mW = sb(1008),
      lW = sb(1235),
      QW = sb(117),
      eW = sb(36356),
      CW = sb(1436),
      NW = sb(2904);
    const VW = (0, kb.memo)((function() {
      const bb = (0, Nb.d)("maxAuraLevel");
      return 0 === bb ? null : (0, Hb.jsx)(LW, {
        maxLevel: bb
      })
    }));

    function LW(bb) {
      let {
        maxLevel: cb
      } = bb;
      const sb = (0, Nb.d)("auraPerLevel"),
        [Wb, ab] = (0, kb.useState)((() => {
          var bb;
          return null !== (bb = Xb.gameBridge.latest("aura")) && void 0 !== bb ? bb : void 0
        })),
        [Tb, Ub] = (0, kb.useState)((() => Vb(Wb))),
        [Ib, fb] = (0, kb.useReducer)((bb => bb + 1), 0),
        Mb = (0, kb.useRef)(null),
        nb = (0, kb.useRef)([]),
        mb = (0, kb.useRef)({
          width: 0,
          level: 0
        }),
        lb = (0, kb.useRef)(null),
        Qb = (0, kb.useRef)(null);

      function Cb() {
        if (null !== lb.current) return;
        if (0 === nb.current.length) return;
        const {
          width: bb,
          level: cb
        } = nb.current.shift();
        let sb;
        if (cb !== mb.current.level && cb > mb.current.level !== bb > mb.current.width) {
          const kb = cb > mb.current.level;
          sb = kb ? bb : 100 - bb, Mb.current.style.transition = "none", Mb.current.style.width = kb ? "0%" : "100%", Mb.current.offsetWidth
        } else sb = Math.abs(bb - mb.current.width);
        const kb = 100 * sb / 20;
        Mb.current.style.transition = `width ${kb}ms linear`, Ub(bb), mb.current = {
          width: bb,
          level: cb
        }, nb.current.length > 0 && (lb.current = setTimeout((() => {
          lb.current = null, Cb()
        }), kb))
      }

      function Vb(bb) {
        return Math.floor(bb / sb) === cb ? 100 : bb % sb / sb * 100
      }
      return (0, kb.useEffect)((() => () => {
        clearTimeout(lb.current), clearTimeout(Qb.current), lb.current = null, Qb.current = null
      }), []), (0, Yb.c)("aura", (bb => {
        if (Qb.current && clearTimeout(Qb.current), null === bb) return clearTimeout(lb.current), Qb.current = null, lb.current = null, nb.current = [], mb.current = {
          width: 0,
          level: 0
        }, ab(void 0), void Ub(0);
        Qb.current = setTimeout((() => {
          const cb = Math.floor(Wb / sb),
            kb = Math.floor(bb / sb),
            Tb = Vb(bb);
          bb > Wb && eW.c.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), kb > cb ? (kb % 5 === 0 && eW.c.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), fb(), nb.current.push({
            width: 100,
            level: cb
          })) : kb < cb && nb.current.push({
            width: 0,
            level: cb
          }), bb === Wb && kb === cb || nb.current.push({
            width: Tb,
            level: kb
          }), ab(bb), Cb()
        }), 50)
      })), (0, eb.e)(), (0, Hb.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Hb.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Hb.jsx)(CW.e, {
            showSignal: Ib,
            particleElement: (0, Hb.jsx)("img", {
              src: (0, NW.g)("glint"),
              alt: ""
            })
          }), (0, Hb.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, NW.g)("glint"),
            alt: "aura"
          }), (0, Hb.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Wb && void 0 !== Wb ? Wb : 0) / sb)
          })]
        }), (0, Hb.jsx)("div", {
          className: "AuraBar",
          children: (0, Hb.jsx)("div", {
            ref: Mb,
            className: "AuraBarBackground",
            style: {
              width: `${Tb}%`
            }
          })
        })]
      })
    }
    var uW = sb(2418);

    function YW(bb) {
      bb.timed && (bb.endedAnimation = bb.timed.animation, bb.timed = null)
    }
    const hW = (0, kb.memo)((function() {
      const bb = (0, kb.useRef)(null),
        cb = (0, kb.useRef)(null),
        sb = (0, kb.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Ub.f)("middleScreenBarInitiate", (bb => {
        var kb;
        let {
          duration: Wb,
          Ek: ab,
          horizBarRemOffset: Tb
        } = bb;
        const Ub = sb.current;
        YW(Ub);
        const Ib = cb.current;
        if (!(Wb >= 0) || !Ib) return;
        null === (kb = Ub.endedAnimation) || void 0 === kb || kb.cancel(), Ub.endedAnimation = null;
        const Hb = Ib.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Wb,
          fill: "forwards"
        });
        Ub.timed = {
          Ek: ab,
          horizBarRemOffset: Tb,
          animation: Hb
        }
      })), (0, Ub.f)("middleScreenBarRemove", (() => {
        YW(sb.current)
      })), (0, kb.useEffect)((() => {
        const kb = sb.current;
        let Wb = Number.NaN,
          ab = Number.NaN,
          Tb = Number.NaN;
        return (0, lk.k)((() => {
          var sb, Ub, Ib, Hb;
          const fb = bb.current,
            Mb = cb.current;
          if (!fb || !Mb) return;
          null !== (sb = kb.timed) && void 0 !== sb && sb.Ek && "finished" === kb.timed.animation.playState && YW(kb), null === (Ub = kb.endedAnimation) || void 0 === Ub || Ub.cancel(), kb.endedAnimation = null;
          let nb = kb.timed ? 1 : 0;
          if (!kb.timed) {
            const bb = Xb.gameBridge.lookup("momentumFrac", null);
            nb = bb > 0 ? 1 : 0, bb !== Tb && (Tb = bb, Mb.style.transform = `scaleX(${bb})`)
          }
          const mb = null !== (Ib = null === (Hb = kb.timed) || void 0 === Hb ? void 0 : Hb.horizBarRemOffset) && void 0 !== Ib ? Ib : 0;
          mb === Wb && nb === ab || (Wb = mb, ab = nb, fb.style.transform = `translateX(calc(-50% + ${mb}rem)) scaleX(${nb})`)
        }))
      }), []), (0, Hb.jsx)("div", {
        className: "MiddleScreenBar",
        ref: bb,
        children: (0, Hb.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: cb
        })
      })
    }));
    var JW = sb(4408),
      gW = sb(2585);

    function BW() {
      const {
        t: bb
      } = (0, yb.E)(), cb = (0, Ub.h)("serverUpdating", null), sb = (0, gW.e)(250, null !== cb);
      return null === cb || sb - cb > 3e4 ? null : (0, Hb.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Hb.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: bb("updateWaiting:updatingIn", {
            countdown: (0, JW.p)(cb - sb)
          })
        }), (0, Hb.jsx)("div", {
          children: bb("updateWaiting:bringYouBack")
        })]
      })
    }
    var tW = sb(36496),
      yW = sb(1917);
    const PW = [{
        translationKey: "general:interact"
      }],
      DW = (0, kb.memo)((function() {
        const bb = (0, Nb.d)("crosshairText"),
          {
            interactPrompt: cb,
            blockText: sb,
            neededTool: Wb
          } = (0, Yb.f)("crosshairTarget"),
          {
            isTouchScreen: ab
          } = (0, hb.p)(["isTouchScreen"]),
          Tb = (0, gb.l)(),
          fb = (0, tb.d)("alt-fire");
        (0, kb.useEffect)((() => {
          Xb.gameBridge.send("setCrosshairInteractPrompt", !ab || Tb ? "key" : "touch")
        }), [ab, Tb]);
        const [Mb, nb] = (0, kb.useReducer)((bb => bb + 1), 0);
        (0, Ub.f)("customBindingsChanged", nb);
        var mb;
        if (null !== cb && (Tb && null !== fb || !ab && null !== (0, yW.o)("alt-fire"))) return (0, Hb.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Hb.jsx)(Jb.d, {
            noaAction: "alt-fire"
          }), (0, Hb.jsx)(Ib.d, {
            text: null !== (mb = cb.label) && void 0 !== mb ? mb : PW
          })]
        });
        let lb = null;
        return null !== sb ? lb = sb : null !== bb && "" !== bb ? lb = bb : null !== Wb && (lb = [{
          icon: Wb,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), lb ? (0, Hb.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Hb.jsx)(Ib.d, {
            text: lb
          })
        }) : null
      }));
    var EW = sb(2424);
    const iW = (0, kb.memo)((function() {
      var bb;
      const {
        interactPrompt: cb
      } = (0, Yb.f)("crosshairTarget"), {
        openInGameMenuName: sb,
        openEverythingMenuName: kb
      } = (0, hb.p)(["openInGameMenuName", "openEverythingMenuName"]), Wb = (0, Ub.h)("aimingOverlay", "none"), ab = (0, Rb.n)(), Tb = (0, EW.c)();
      return null === cb || null !== sb || null !== kb || "sniper" === Wb || ab || Tb ? null : (0, Hb.jsx)(OW, {
        label: null !== (bb = cb.label) && void 0 !== bb ? bb : PW
      })
    }));

    function OW(bb) {
      let {
        label: cb
      } = bb;
      const sb = tc(xb.e.Interact, !1);
      return (0, kb.useEffect)((() => (Vb.j.QQ(lc.s), () => {
        Vb.j.QQ(lc.s)
      })), []), (0, Hb.jsx)("div", {
        ref: sb,
        className: "TouchInteractHit",
        children: (0, Hb.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Hb.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Hb.jsx)(Kb.b, {
              name: "hand-back-point-up"
            })
          }), (0, Hb.jsx)(Ib.d, {
            text: cb
          })]
        })
      })
    }
    var GW = sb(4484),
      KW = sb(4553);
    const ZW = (0, kb.forwardRef)((function(bb, cb) {
        let {
          text: sb,
          className: kb,
          children: Wb
        } = bb;
        return sb.hasText ? (0, Hb.jsx)("div", {
          ref: cb,
          className: ab()("HudTextPanel", kb, {
            NoBackground: !sb.showBackground
          }),
          children: null !== Wb && void 0 !== Wb ? Wb : (0, Hb.jsx)(Ib.d, {
            text: sb.content
          })
        }) : null
      })),
      zW = (0, kb.memo)((function() {
        const bb = (0, Nb.h)("middleTextTop"),
          [cb, sb] = (0, kb.useState)(null),
          Wb = (0, hk.n)(cb);
        return bb.hasText ? (0, Hb.jsx)("div", {
          className: ab()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Wb
          }),
          children: (0, Hb.jsx)(ZW, {
            ref: sb,
            className: "MiddleTextTop",
            text: bb
          })
        }) : null
      })),
      qW = (0, kb.memo)((function() {
        const bb = (0, Nb.b)();
        return (0, Hb.jsx)(Hb.Fragment, {
          children: bb.map(((bb, cb) => (0, Hb.jsx)(ZW, {
            className: "HeaderChip",
            text: bb
          }, cb)))
        })
      }));
    var dW = sb(3408),
      AW = sb(4345);
    const wW = (0, kb.memo)((function() {
      const {
        t: bb
      } = (0, yb.E)(), [cb, sb] = (0, kb.useState)(!1), Wb = (0, kb.useRef)(!1), ab = function(bb) {
        let {
          gameNameWithVariation: cb,
          lobbyName: sb
        } = bb;
        if ((0, mW.k)(cb)) return rW;
        if ((0, lW.z)(sb)) return oW;
        return null
      }((0, Yb.f)("connectedGame"));
      if (!ab || cb) return null;
      const Tb = AW.e[ab.target];
      return (0, Hb.jsx)(Gb.f, {
        tooltipInner: (0, Hb.jsx)("div", {
          children: bb(Tb.reportButtonTooltip)
        }),
        children: (0, Hb.jsx)("div", {
          children: (0, Hb.jsx)(Bs.K, {
            onClick: () => {
              Wb.current || (Wb.current = !0, (0, AW.g)(ab.reportPolicyIds, Tb).then((bb => {
                null !== bb && void 0 !== bb && bb.selectedPolicyId && (Xb.gameBridge.send("reportLobbyOrGame", {
                  target: ab.target,
                  YT: bb.selectedPolicyId,
                  details: bb.hT
                }), sb(!0))
              })).finally((() => {
                Wb.current = !1
              })))
            }
          })
        })
      })
    }));
    const rW = {
        target: "customGame",
        reportPolicyIds: dW.b
      },
      oW = {
        target: "lobby",
        reportPolicyIds: dW.f
      };
    var SW = sb(8402),
      RW = sb(36511),
      vW = sb(36518),
      FW = sb(36527),
      xW = sb(36530),
      jW = sb(36564);

    function pW(bb) {
      return bb instanceof Error && ba.has(bb.message) ? bb.message : void 0
    }
    const ba = new Set([jW.d.saveBusy.text, jW.d.saveClosed.text, jW.d.cropBusy.text]);
    let ca = !1;
    async function sa(bb, cb) {
      var sb, kb;
      const {
        files: Wb
      } = cb, ab = Wb.replayKey();
      if (null === ab) return "none";
      if (ca) throw new Error(jW.d.saveBusy.text);
      const Tb = null !== (sb = null === (kb = Wb.saveRefusal) || void 0 === kb ? void 0 : kb.call(Wb)) && void 0 !== sb ? sb : null;
      if (null !== Tb) throw new Error(Tb);
      ca = !0;
      try {
        return await async function(bb, cb, sb) {
          const {
            files: kb
          } = cb, Wb = () => kb.replayKey() === sb, ab = (bb, cb) => {
            Wb() && kb.markSaved(bb, cb)
          };
          let Tb = null;
          if (cb.pickerSupported()) {
            try {
              if (Tb = await cb.chooseFile(bb ? null : kb.fileHandle()), null === Tb) return "Gs"
            } catch (Ib) {
              cb.onFallback(Ib)
            }
            if (!Wb()) throw new Error(jW.d.saveClosed.text)
          }
          const Ub = await kb.encode();
          if (null === Ub) {
            if (null !== Tb) throw new Error(jW.d.saveClosed.text);
            return "none"
          }
          if (null !== Tb) try {
            return await cb.write(Tb, Ub), ab(Tb), "written"
          } catch (Ib) {
            cb.onFallback(Ib)
          }
          return ab(null, cb.download(Ub)), "downloaded"
        }(bb, cb, ab)
      } finally {
        ca = !1
      }
    }
    var ka = sb(4282),
      Wa = sb(89);
    const aa = [1, 2, 4, 8, 16, 32, 64];

    function Ta(bb, cb) {
      return Math.max(0, Math.min(bb, cb))
    }

    function Ua(bb, cb, sb) {
      return sb <= cb ? 0 : (bb - cb) / (sb - cb) * 100
    }

    function Ia(bb, cb, sb) {
      const kb = sb - cb;
      return Math.round(cb + bb / 100 * kb)
    }

    function Ha(bb, cb) {
      const sb = Math.floor(bb / cb / 60),
        kb = Math.floor(bb / cb % 60),
        Wb = bb % cb;
      return `${sb.toString().padStart(2,"0")}:${kb.toString().padStart(2,"0")}:${Wb.toString().padStart(2,"0")}`
    }

    function fa(bb) {
      return Number.isInteger(bb) || aa.includes(bb) ? `${Math.round(bb)}\xd7` : `${bb.toFixed(1)}\xd7`
    }

    function Ma(bb, cb) {
      const sb = aa.indexOf(bb);
      if (-1 !== sb) return "in" === cb ? aa[Math.min(sb + 1, aa.length - 1)] : aa[Math.max(sb - 1, 0)];
      if ("in" === cb) {
        for (const cb of aa)
          if (cb >= bb) return cb;
        return bb
      }
      for (let kb = aa.length - 1; kb >= 0; kb--)
        if (aa[kb] <= bb) return aa[kb];
      return aa[0]
    }

    function Xa(bb, cb) {
      const sb = cb.getBoundingClientRect();
      if (sb.width <= 0) return 0;
      const kb = (bb - sb.left) / sb.width * 100;
      return Math.max(0, Math.min(100, kb))
    }

    function na(bb, cb) {
      return cb <= 0 ? 0 : bb / cb * 100
    }

    function ma(bb, cb, sb) {
      const kb = [];
      let Wb = Math.ceil(bb / sb) * sb;
      for (; Wb <= cb;) kb.push(Wb), Wb += sb;
      return kb
    }
    var la = sb(36567);
    const Qa = [{
        label: "Linear",
        easing: la.l
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: la.g
      }, {
        label: "Ease Out",
        easing: la.k
      }, {
        label: "Ease In Out",
        easing: la.d
      }],
      ea = 200,
      Ca = 150;

    function Na(bb) {
      const cb = bb => Number(bb.toFixed(3)).toString();
      return `cubic-bezier(${cb(bb[0])}, ${cb(bb[1])}, ${cb(bb[2])}, ${cb(bb[3])})`
    }

    function Va(bb, cb) {
      return {
        cx: 25 + bb * Ca,
        cy: 25 + (1 - cb) * Ca
      }
    }

    function La(bb, cb, sb) {
      const kb = bb - sb.left,
        Wb = cb - sb.top;
      return {
        x: Ks.d.clamp((kb - 25) / Ca, 0, 1),
        y: Ks.d.clamp(1 - (Wb - 25) / Ca, -1, 2)
      }
    }

    function ua(bb, cb, sb, kb, Wb) {
      return {
        x: (0, la.s)(bb, sb, Wb),
        y: (0, la.s)(cb, kb, Wb)
      }
    }
    const Ya = (0, kb.memo)((function(bb) {
      let {
        value: cb,
        onChange: sb
      } = bb;
      const Wb = (0, kb.useRef)(null),
        ab = (0, kb.useRef)(null),
        [Tb, Ub] = (0, kb.useState)(null),
        Ib = (0, kb.useCallback)((() => {
          const bb = Wb.current;
          if (!bb) return;
          const sb = bb.getContext("2d");
          if (!sb) return;
          const kb = window.devicePixelRatio || 1;
          bb.width = ea * kb, bb.height = ea * kb, sb.setTransform(kb, 0, 0, kb, 0, 0), sb.clearRect(0, 0, ea, ea), sb.fillStyle = "rgba(38, 52, 93, 0.85)", sb.fillRect(0, 0, ea, ea), sb.beginPath();
          const ab = Va(0, 0),
            Ub = Va(1, 1);
          sb.moveTo(ab.cx, ab.cy), sb.lineTo(Ub.cx, Ub.cy), sb.strokeStyle = "rgba(164, 164, 164, 0.35)", sb.setLineDash([3, 3]), sb.stroke(), sb.setLineDash([]);
          const [Ib, Hb, fb, Mb] = cb, Xb = Va(Ib, Hb), nb = Va(fb, Mb);
          sb.strokeStyle = "rgba(252, 211, 115, 0.55)", sb.lineWidth = 1.5, sb.beginPath(), sb.moveTo(ab.cx, ab.cy), sb.lineTo(Xb.cx, Xb.cy), sb.moveTo(Ub.cx, Ub.cy), sb.lineTo(nb.cx, nb.cy), sb.stroke(), sb.strokeStyle = "#fcd373", sb.lineWidth = 2, sb.beginPath();
          for (let cb = 0; cb <= 50; cb++) {
            const bb = ua(Ib, Hb, fb, Mb, cb / 50),
              kb = Va(bb.x, bb.y);
            0 === cb ? sb.moveTo(kb.cx, kb.cy) : sb.lineTo(kb.cx, kb.cy)
          }
          sb.stroke();
          const mb = (bb, cb, kb) => {
            sb.beginPath(), sb.arc(bb, cb, kb ? 6 : 5, 0, 2 * Math.PI), sb.fillStyle = kb ? "#ffb914" : "#fcd373", sb.fill(), sb.strokeStyle = "#1a1f2e", sb.lineWidth = 1.5, sb.stroke()
          };
          mb(Xb.cx, Xb.cy, "p1" === Tb), mb(nb.cx, nb.cy, "p2" === Tb)
        }), [Tb, cb]);
      (0, kb.useEffect)((() => {
        Ib()
      }), [Ib]);
      const fb = (0, kb.useCallback)(((bb, kb) => {
          const Tb = Wb.current,
            Ub = ab.current;
          if (!Tb || !Ub) return;
          const Ib = Tb.getBoundingClientRect(),
            {
              x: Hb,
              y: fb
            } = La(bb, kb, Ib);
          sb("p1" === Ub ? [Hb, fb, cb[2], cb[3]] : [cb[0], cb[1], Hb, fb])
        }), [sb, cb]),
        Mb = (0, kb.useCallback)((bb => {
          const sb = Wb.current;
          if (!sb) return;
          const kb = sb.getBoundingClientRect();
          let {
            x: Tb,
            y: Ib
          } = La(bb.clientX, bb.clientY, kb);
          Tb = Ks.d.clamp(Tb, 0, 1), Ib = Ks.d.clamp(Ib, 0, 1);
          const [Hb, Mb, Xb, nb] = cb.map((bb => Ks.d.clamp(bb, 0, 1))), mb = Math.hypot(Tb - Hb, Ib - Mb), lb = Math.hypot(Tb - Xb, Ib - nb), Qb = mb <= lb ? "p1" : "p2";
          ("p1" === Qb ? mb : lb) > .12 || (ab.current = Qb, Ub(Qb), sb.setPointerCapture(bb.pointerId), fb(bb.clientX, bb.clientY))
        }), [fb, cb]),
        Xb = (0, kb.useCallback)((bb => {
          ab.current && fb(bb.clientX, bb.clientY)
        }), [fb]),
        nb = (0, kb.useCallback)((bb => {
          ab.current = null, Ub(null), bb.currentTarget.hasPointerCapture(bb.pointerId) && bb.currentTarget.releasePointerCapture(bb.pointerId)
        }), []);
      return (0, Hb.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Hb.jsx)("canvas", {
          ref: Wb,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: ea,
            height: ea
          },
          onPointerDown: Mb,
          onPointerMove: Xb,
          onPointerUp: nb,
          onPointerCancel: nb
        }), (0, Hb.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: Na(cb)
        })]
      })
    }));
    var ha = sb(1666),
      Ja = sb(1651);
    const ga = 12;

    function Ba(bb) {
      return {
        left: bb.left + bb.width / 2,
        top: bb.top - 8
      }
    }

    function ta(bb, cb) {
      const [sb, Wb] = (0, kb.useState)(null);
      return (0, kb.useLayoutEffect)((() => {
        const sb = bb.current;
        if (!sb) return;
        const {
          width: kb,
          height: ab
        } = sb.getBoundingClientRect();
        Wb(function(bb, cb, sb) {
          const kb = window.innerWidth,
            Wb = window.innerHeight,
            ab = cb / 2;
          let Tb = bb.left + bb.width / 2;
          Tb = Math.max(ga + ab, Math.min(Tb, kb - ga - ab));
          const Ub = bb.top - 8 - ga,
            Ib = Wb - bb.bottom - 8 - ga,
            Hb = Ub < sb && Ib >= Ub;
          let fb;
          Hb ? (fb = bb.bottom + 8, fb + sb > Wb - ga && (fb = Wb - ga - sb), fb = Math.max(ga, fb)) : (fb = bb.top - 8, fb - sb < ga && (fb = ga + sb));
          return {
            left: Tb,
            top: fb,
            placeBelow: Hb
          }
        }(cb, kb, ab))
      }), [cb, bb]), sb
    }

    function ya(bb, cb, sb) {
      (0, kb.useEffect)((() => (0, Ja.e)("pointerdown", (kb => {
        var Wb, ab;
        const Tb = kb.target;
        Tb instanceof Node && (null !== (Wb = bb.current) && void 0 !== Wb && Wb.contains(Tb) || null !== sb && void 0 !== sb && null !== (ab = sb.current) && void 0 !== ab && ab.contains(Tb) || (0, ha.j)(Tb) || cb())
      }))), [sb, cb, bb])
    }

    function Pa(bb) {
      let {
        label: cb,
        value: sb,
        onChange: kb
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Hb.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: cb
        }), (0, Hb.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((bb, cb) => (0, Hb.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Hb.jsx)("span", {
              children: bb
            }), (0, Hb.jsx)("input", {
              type: "number",
              step: "any",
              value: sb[cb],
              onChange: bb => {
                const Wb = Number.parseFloat(bb.target.value);
                if (Number.isNaN(Wb)) return;
                const ab = [sb[0], sb[1], sb[2]];
                ab[cb] = Wb, kb(ab)
              }
            })]
          }, bb)))
        })]
      })
    }
    const Da = (0, kb.memo)((function(bb) {
        var cb, sb, Wb;
        let {
          keyframe: Tb,
          anchor: Ub,
          hasOutgoingSegment: Ib,
          onClose: fb,
          onApply: Mb,
          onDelete: Xb,
          onUseCurrentCamera: nb
        } = bb;
        const mb = (0, kb.useRef)(null),
          lb = ta(mb, Ub.rect),
          [Qb, eb] = (0, kb.useState)((() => [Tb.position[0], Tb.position[1], Tb.position[2]])),
          [Cb, Nb] = (0, kb.useState)((() => [Tb.direction[0], Tb.direction[1], Tb.direction[2]])),
          [Vb, Lb] = (0, kb.useState)((() => Tb.easing));
        (0, kb.useEffect)((() => {
          eb([Tb.position[0], Tb.position[1], Tb.position[2]]), Nb([Tb.direction[0], Tb.direction[1], Tb.direction[2]]), Lb(Tb.easing)
        }), [Tb]), ya(mb, fb);
        const ub = (0, kb.useCallback)((() => {
            Mb({
              aX: Tb.aX,
              position: Qb,
              direction: Cb,
              easing: Vb
            }), fb()
          }), [Cb, Vb, Tb.aX, Mb, fb, Qb]),
          Yb = (0, kb.useCallback)((() => {
            Xb(Tb.aX), fb()
          }), [Tb.aX, Xb, fb]),
          hb = (0, kb.useCallback)((() => {
            const bb = nb();
            bb && (eb([bb.position[0], bb.position[1], bb.position[2]]), Nb([bb.direction[0], bb.direction[1], bb.direction[2]]))
          }), [nb]),
          Jb = Ba(Ub.rect);
        return (0, Hb.jsxs)("div", {
          ref: mb,
          className: ab()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (cb = null === lb || void 0 === lb ? void 0 : lb.placeBelow) && void 0 !== cb && cb,
            Positioned: null !== lb
          }),
          style: {
            left: `${null!==(sb=null===lb||void 0===lb?void 0:lb.left)&&void 0!==sb?sb:Jb.left}px`,
            top: `${null!==(Wb=null===lb||void 0===lb?void 0:lb.top)&&void 0!==Wb?Wb:Jb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: [(0, Hb.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Hb.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Hb.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Ub.aX]
            })]
          }), (0, Hb.jsx)(Pa, {
            label: "Position",
            value: Qb,
            onChange: eb
          }), (0, Hb.jsx)(Pa, {
            label: "Direction",
            value: Cb,
            onChange: Nb
          }), Ib && (0, Hb.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Hb.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Hb.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: Qa.map((bb => {
                const cb = (sb = Vb, kb = bb.easing, sb[0] === kb[0] && sb[1] === kb[1] && sb[2] === kb[2] && sb[3] === kb[3]);
                var sb, kb;
                return (0, Hb.jsx)(Bs.M, {
                  className: ab()("ReplayKeyframePopoverPreset", {
                    Active: cb
                  }),
                  onClick: () => {
                    Lb(bb.easing)
                  },
                  children: bb.label
                }, bb.label)
              }))
            }), (0, Hb.jsx)(Ya, {
              value: Vb,
              onChange: Lb
            })]
          }), (0, Hb.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Hb.jsx)(Bs.d, {
              className: "ReplayViewerCompactButton",
              onClick: hb,
              children: "Use current view"
            }), (0, Hb.jsx)(Bs.n, {
              className: "ReplayViewerCompactButton",
              onClick: ub,
              children: "Apply"
            }), (0, Hb.jsx)(Bs.G, {
              className: "ReplayViewerCompactButton",
              onClick: Yb,
              children: "Delete"
            })]
          })]
        })
      })),
      Ea = (0, kb.memo)((function(bb) {
        var cb, sb, Wb;
        let {
          anchor: Tb,
          hasPlaybackMark: Ub,
          onClose: Ib,
          onMark: fb,
          onZoom: Mb,
          onCrop: Xb,
          onDeleteKeyframes: nb,
          onClearMark: mb
        } = bb;
        const lb = (0, kb.useRef)(null),
          Qb = ta(lb, Tb.rect),
          eb = Ba(Tb.rect),
          Cb = {
            startTick: Tb.startTick,
            endTick: Tb.endTick
          },
          Nb = Tb.endTick > Tb.startTick;
        return ya(lb, Ib), (0, Hb.jsx)("div", {
          ref: lb,
          className: ab()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (cb = null === Qb || void 0 === Qb ? void 0 : Qb.placeBelow) && void 0 !== cb && cb,
            Positioned: null !== Qb
          }),
          style: {
            left: `${null!==(sb=null===Qb||void 0===Qb?void 0:Qb.left)&&void 0!==sb?sb:eb.left}px`,
            top: `${null!==(Wb=null===Qb||void 0===Qb?void 0:Qb.top)&&void 0!==Wb?Wb:eb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: (0, Hb.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Hb.jsx)(Bs.n, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                fb(Cb)
              },
              disabled: !Nb,
              children: (0, Hb.jsx)("span", {
                children: " Play range "
              })
            }), (0, Hb.jsx)(Bs.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Mb(Cb)
              },
              children: (0, Hb.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Hb.jsx)(Bs.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Xb(Cb)
              },
              disabled: !Nb,
              children: (0, Hb.jsx)("span", {
                children: " Crop "
              })
            }), (0, Hb.jsx)(Bs.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                nb(Cb)
              },
              children: (0, Hb.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Ub && (0, Hb.jsx)(Bs.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                mb()
              },
              children: (0, Hb.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      ia = (0, kb.memo)((function(bb) {
        var cb, sb;
        let {
          maxTick: Wb,
          displayTick: Tb,
          hY: Ub,
          cameraKeyframes: Ib,
          playbackMark: fb,
          onSeek: Mb,
          onPause: Xb,
          onScrubTickChange: nb,
          onMoveCameraKeyframe: mb,
          onUpdateCameraKeyframe: lb,
          onDeleteCameraKeyframe: Qb,
          onUseCurrentCamera: eb,
          onMarkRange: Cb,
          onCropRange: Nb,
          onDeleteKeyframesInRange: Vb,
          onClearMark: Lb,
          zoomLevel: ub,
          onZoomLevelChange: Yb
        } = bb;
        const hb = (0, kb.useRef)(null),
          Jb = (0, kb.useRef)(null),
          gb = (0, kb.useRef)(!1),
          Bb = (0, kb.useRef)(!1),
          tb = (0, kb.useRef)(ub),
          yb = (0, kb.useRef)(null),
          Pb = (0, kb.useRef)(null),
          Db = (0, kb.useRef)(null),
          Eb = (0, kb.useRef)(null),
          [ib, Ob] = (0, kb.useState)(null),
          [Gb, Kb] = (0, kb.useState)(Tb),
          [Zb, zb] = (0, kb.useState)(null),
          [qb, db] = (0, kb.useState)(null),
          [Ab, wb] = (0, kb.useState)(null),
          [rb, ob] = (0, kb.useState)(null),
          Sb = (0, kb.useMemo)((() => Ib.map((bb => bb.aX))), [Ib]),
          Rb = null !== ib && void 0 !== ib ? ib : Tb,
          {
            viewStart: vb,
            viewEnd: Fb
          } = (0, kb.useMemo)((() => function(bb) {
            const cb = bb.maxTick + 1,
              sb = Math.max(1, Math.ceil(cb / bb.zoomLevel)),
              kb = Math.floor(sb / 2);
            let Wb = bb.centerTick - kb;
            return Wb = Math.max(0, Math.min(Wb, bb.maxTick - sb + 1)), {
              viewStart: Wb,
              viewEnd: Math.min(bb.maxTick, Wb + sb - 1)
            }
          }({
            maxTick: Wb,
            zoomLevel: ub,
            centerTick: Gb
          })), [Wb, ub, Gb]);
        (0, kb.useEffect)((() => {
          if (null !== ib || null !== Pb.current || null !== Db.current || null !== Eb.current) return;
          if (gb.current) return void(gb.current = !1);
          if (Bb.current) return void(Bb.current = !1);
          const bb = tb.current !== ub;
          tb.current = ub, bb && Kb(Tb)
        }), [ub, Tb, ib]);
        const xb = (0, kb.useCallback)((bb => {
            let cb = Ta(bb, Wb);
            return fb && (cb = Math.max(fb.inTick, Math.min(cb, fb.outTick))), cb
          }), [Wb, fb]),
          jb = (0, kb.useCallback)(((bb, cb) => {
            const sb = xb(bb);
            Mb(sb), cb && Kb(sb)
          }), [xb, Mb]),
          pb = (0, kb.useCallback)(((bb, cb) => {
            const sb = xb(bb);
            Ob(sb), nb(sb), jb(sb, cb)
          }), [xb, jb, nb]),
          bc = (0, kb.useCallback)((() => {
            Ob((bb => (null !== bb && Kb(bb), null))), nb(null)
          }), [nb]),
          cc = (0, kb.useCallback)((() => {
            wb(null), ob(null)
          }), []),
          sc = (0, kb.useCallback)((bb => {
            const cb = hb.current;
            if (!cb) return 0;
            return Ta(Ia(Xa(bb, cb), vb, Fb), Wb)
          }), [Wb, Fb, vb]),
          kc = (0, kb.useCallback)((bb => {
            const cb = Jb.current;
            if (!cb) return 0;
            return Ta(Ia(Xa(bb, cb), 0, Wb), Wb)
          }), [Wb]),
          Wc = (0, kb.useMemo)((() => {
            if (!Zb) return [...Sb];
            const bb = Sb.filter((bb => bb !== Zb.fromTick));
            return bb.push(Zb.previewTick), bb.sort(((bb, cb) => bb - cb)), bb
          }), [Sb, Zb]),
          ac = (0, kb.useMemo)((() => {
            var bb;
            return qb && null !== (bb = Ib.find((bb => bb.aX === qb.aX))) && void 0 !== bb ? bb : null
          }), [Ib, qb]),
          Tc = (0, kb.useMemo)((() => !!ac && Ib.some((bb => bb.aX > ac.aX))), [Ib, ac]);
        (0, kb.useEffect)((() => {
          qb && !ac && db(null)
        }), [qb, ac]), (0, kb.useEffect)((() => {
          if (!rb) return () => {};
          const bb = bb => {
            "Escape" === bb.key && cc()
          };
          return window.addEventListener("keydown", bb), () => {
            window.removeEventListener("keydown", bb)
          }
        }), [cc, rb]);
        const Uc = (0, kb.useCallback)(((bb, cb) => {
            cc(), Xb(), Mb(bb, {
              ignorePlaybackMark: !0
            }), db({
              aX: bb,
              rect: cb.getBoundingClientRect()
            })
          }), [cc, Xb, Mb]),
          Ic = (0, kb.useCallback)(((bb, cb) => sb => {
            0 === sb.button && (sb.stopPropagation(), db(null), cc(), Xb(), yb.current = {
              fromTick: bb,
              startX: sb.clientX,
              startY: sb.clientY,
              didDrag: !1,
              track: cb
            }, zb({
              fromTick: bb,
              previewTick: bb,
              track: cb
            }), sb.currentTarget.setPointerCapture(sb.pointerId))
          }), [cc, Xb]),
          Hc = (0, kb.useCallback)((bb => {
            if (!Zb) return;
            bb.stopPropagation();
            const cb = yb.current;
            if (cb && !cb.didDrag) {
              const sb = bb.clientX - cb.startX,
                kb = bb.clientY - cb.startY;
              Math.hypot(sb, kb) > 5 && (cb.didDrag = !0)
            }
            const sb = "detail" === Zb.track ? sc(bb.clientX) : kc(bb.clientX);
            sb !== Zb.previewTick && zb({
              ...Zb,
              previewTick: sb
            })
          }), [Zb, sc, kc]),
          fc = (0, kb.useCallback)((bb => {
            if (!Zb) return;
            bb.stopPropagation();
            const cb = yb.current,
              sb = "detail" === Zb.track ? sc(bb.clientX) : kc(bb.clientX);
            cb && !cb.didDrag ? Uc(cb.fromTick, bb.currentTarget) : sb !== Zb.fromTick && mb(Zb.fromTick, sb), zb(null), yb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId)
          }), [Zb, mb, Uc, sc, kc]),
          Mc = (0, kb.useCallback)((bb => {
            if (0 !== bb.button) return;
            db(null), Xb();
            const cb = sc(bb.clientX);
            Pb.current = {
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              startTick: cb,
              currentTick: cb,
              didSelect: !1
            }, wb(null), ob(null), bb.currentTarget.setPointerCapture(bb.pointerId)
          }), [Xb, sc]),
          Xc = (0, kb.useCallback)((bb => {
            const cb = Pb.current;
            if (!cb || cb.pointerId !== bb.pointerId) return;
            const sb = sc(bb.clientX);
            if (cb.currentTick = sb, !cb.didSelect) {
              const sb = bb.clientX - cb.startX,
                kb = bb.clientY - cb.startY;
              if (Math.hypot(sb, kb) <= 5) return;
              cb.didSelect = !0
            }
            const kb = Math.min(cb.startTick, sb),
              Wb = Math.max(cb.startTick, sb);
            wb({
              startTick: kb,
              endTick: Wb
            })
          }), [sc]),
          nc = (0, kb.useCallback)((bb => {
            const cb = Pb.current;
            if (!cb || cb.pointerId !== bb.pointerId) return;
            if (Pb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), !cb.didSelect) return cc(), void jb(cb.startTick, !0);
            const sb = sc(bb.clientX),
              kb = Math.min(cb.startTick, sb),
              Wb = Math.max(cb.startTick, sb),
              ab = {
                startTick: kb,
                endTick: Wb
              };
            wb(ab);
            const Tb = hb.current;
            if (!Tb) return;
            const Ub = Tb.getBoundingClientRect(),
              Ib = Ua(kb, vb, Fb) / 100,
              Hb = Ua(Wb, vb, Fb) / 100,
              fb = Ub.left + Ib * Ub.width,
              Mb = Ub.left + Hb * Ub.width;
            ob({
              ...ab,
              rect: new DOMRect(fb, Ub.top, Math.max(Mb - fb, 1), Ub.height)
            })
          }), [cc, jb, sc, Fb, vb]),
          mc = (0, kb.useCallback)((bb => cb => {
            if (0 !== cb.button) return;
            cb.stopPropagation(), db(null), cc(), Xb(), Db.current = {
              pointerId: cb.pointerId,
              track: bb
            }, cb.currentTarget.setPointerCapture(cb.pointerId);
            const sb = "detail" === bb ? sc(cb.clientX) : kc(cb.clientX);
            pb(sb, !1)
          }), [cc, Xb, pb, sc, kc]),
          lc = (0, kb.useCallback)((bb => {
            const cb = Db.current;
            if (!cb || cb.pointerId !== bb.pointerId) return;
            bb.stopPropagation();
            const sb = "detail" === cb.track ? sc(bb.clientX) : kc(bb.clientX);
            pb(sb, !1)
          }), [pb, sc, kc]),
          Qc = (0, kb.useCallback)((bb => {
            const cb = Db.current;
            cb && cb.pointerId === bb.pointerId && (bb.stopPropagation(), Db.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), bc())
          }), [bc]),
          ec = (0, kb.useCallback)((bb => {
            0 === bb.button && (cc(), Xb(), Eb.current = {
              pointerId: bb.pointerId
            }, bb.currentTarget.setPointerCapture(bb.pointerId), pb(kc(bb.clientX), !0))
          }), [cc, Xb, pb, kc]),
          Cc = (0, kb.useCallback)((bb => {
            const cb = Eb.current;
            cb && cb.pointerId === bb.pointerId && pb(kc(bb.clientX), !0)
          }), [pb, kc]),
          Nc = (0, kb.useCallback)((bb => {
            const cb = Eb.current;
            cb && cb.pointerId === bb.pointerId && (Eb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), bc())
          }), [bc]),
          Vc = (0, kb.useCallback)((bb => {
            const cb = Math.max(1, bb.endTick - bb.startTick + 1),
              sb = Wb + 1,
              kb = sb / cb,
              ab = Math.max(1, Math.ceil(sb / kb)),
              Tb = bb.startTick + Math.floor((ab - 1) / 2);
            Bb.current = !0, tb.current = kb, Kb(Ta(Tb, Wb)), Yb(kb), cc()
          }), [cc, Wb, Yb]),
          Lc = (0, kb.useCallback)((bb => {
            Cb(bb), cc()
          }), [cc, Cb]),
          uc = (0, kb.useCallback)((bb => {
            Nb(bb), cc()
          }), [cc, Nb]),
          Yc = (0, kb.useCallback)((bb => {
            Vb(bb), cc()
          }), [cc, Vb]),
          hc = (0, kb.useCallback)((() => {
            Lb(), cc()
          }), [cc, Lb]);
        (0, kb.useEffect)((() => {
          const bb = hb.current;
          if (!bb) return () => {};
          const cb = cb => {
            cb.preventDefault();
            const sb = Ta(Ia(Xa(cb.clientX, bb), vb, Fb), Wb),
              kb = cb.deltaY < 0 ? "in" : "out",
              ab = Ma(ub, kb);
            ab !== ub && (gb.current = !0, Kb(sb), Yb(ab))
          };
          return bb.addEventListener("wheel", cb, {
            passive: !1
          }), () => {
            bb.removeEventListener("wheel", cb)
          }
        }), [Wb, Yb, Fb, vb, ub]);
        const Jc = Ua(Rb, vb, Fb),
          gc = na(Rb, Wb),
          Bc = na(vb, Wb),
          tc = Wb > 0 ? na(Fb, Wb) : 100,
          yc = null !== fb,
          Pc = null !== (cb = null === fb || void 0 === fb ? void 0 : fb.inTick) && void 0 !== cb ? cb : 0,
          Dc = null !== (sb = null === fb || void 0 === fb ? void 0 : fb.outTick) && void 0 !== sb ? sb : Wb,
          Ec = na(Pc, Wb),
          ic = Math.max(na(Dc, Wb) - Ec, 0),
          Oc = Ua(Math.max(Pc, vb), vb, Fb),
          Gc = Ua(Math.min(Dc, Fb), vb, Fb),
          Kc = Math.max(Gc - Oc, 0),
          Zc = yc && Dc >= vb && Pc <= Fb,
          zc = Ua(Pc, vb, Fb),
          qc = Ua(Dc, vb, Fb),
          dc = yc && Pc >= vb && Pc <= Fb,
          Ac = yc && Dc >= vb && Dc <= Fb,
          wc = na(Pc, Wb),
          rc = na(Dc, Wb),
          oc = null !== Ab && void 0 !== Ab ? Ab : rb ? {
            startTick: rb.startTick,
            endTick: rb.endTick
          } : null,
          Sc = oc ? Ua(Math.max(oc.startTick, vb), vb, Fb) : 0,
          Rc = oc ? Ua(Math.min(oc.endTick, Fb), vb, Fb) : 0,
          vc = Math.max(Rc - Sc, 0),
          Fc = null !== oc && oc.endTick >= vb && oc.startTick <= Fb,
          xc = (0, kb.useMemo)((() => ma(0, Wb, Ub)), [Wb, Ub]),
          jc = (0, kb.useMemo)((() => ma(vb, Fb, Ub)), [vb, Fb, Ub]),
          pc = (0, kb.useMemo)((() => Wc.filter((bb => bb >= vb && bb <= Fb))), [Wc, Fb, vb]),
          bs = (0, kb.useCallback)(((bb, cb, sb) => {
            const kb = "detail" === cb ? Ua(bb, vb, Fb) : na(bb, Wb),
              Tb = null !== Zb && sb === Zb.fromTick,
              Ub = null !== qb && qb.aX === sb;
            return (0, Hb.jsx)("button", {
              type: "button",
              className: ab()("ReplayTimelineCameraKeyframeMarker", "detail" === cb ? "Detail" : "Overview", {
                Dragging: Tb,
                Selected: Ub
              }),
              style: {
                left: `${kb}%`
              },
              onPointerDown: Ic(sb, cb),
              onPointerMove: Hc,
              onPointerUp: fc,
              onPointerCancel: fc,
              "aria-label": `Camera keyframe at tick ${sb}`
            }, `cam-${cb}-${sb}`)
          }), [Ic, qb, fc, Zb, Wb, Hc, Fb, vb]),
          cs = (0, kb.useCallback)((bb => Zb && bb === Zb.previewTick ? Zb.fromTick : bb), [Zb]);
        return Wb <= 0 ? null : (0, Hb.jsxs)("div", {
          className: "ReplayTimeline",
          children: [qb && ac && (0, Wa.createPortal)((0, Hb.jsx)(Da, {
            keyframe: ac,
            anchor: qb,
            hasOutgoingSegment: Tc,
            onClose: () => {
              db(null)
            },
            onApply: lb,
            onDelete: Qb,
            onUseCurrentCamera: eb
          }), document.body), rb && (0, Wa.createPortal)((0, Hb.jsx)(Ea, {
            anchor: rb,
            hasPlaybackMark: yc,
            onClose: cc,
            onMark: Lc,
            onZoom: Vc,
            onCrop: uc,
            onDeleteKeyframes: Yc,
            onClearMark: hc
          }), document.body), (0, Hb.jsxs)("div", {
            className: ab()("ReplayTimelineOverviewSection", {
              Hidden: ub <= 1
            }),
            children: [(0, Hb.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Hb.jsxs)("div", {
              ref: Jb,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: ec,
              onPointerMove: Cc,
              onPointerUp: Nc,
              onPointerCancel: Nc,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Wb,
              "aria-valuenow": Rb,
              tabIndex: 0,
              children: [xc.map((bb => {
                const cb = na(bb, Wb);
                return (0, Hb.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${cb}%`
                  }
                }, bb)
              })), yc && (0, Hb.jsxs)(Hb.Fragment, {
                children: [(0, Hb.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Ec}%`,
                    width: `${ic}%`
                  }
                }), (0, Hb.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${wc}%`
                  },
                  "aria-hidden": !0
                }), (0, Hb.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${rc}%`
                  },
                  "aria-hidden": !0
                })]
              }), Wc.map((bb => bs(bb, "overview", cs(bb)))), (0, Hb.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Bc}%`,
                  width: `${Math.max(tc-Bc,.5)}%`
                }
              }), (0, Hb.jsx)("button", {
                type: "button",
                className: ab()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== ib
                }),
                style: {
                  left: `${gc}%`
                },
                onPointerDown: mc("overview"),
                onPointerMove: lc,
                onPointerUp: Qc,
                onPointerCancel: Qc,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Hb.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Hb.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Hb.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Hb.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Ha(vb, Ub), " \u2013 ", Ha(Fb, Ub), ub > 1 && (0, Hb.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: fa(ub)
                })]
              })]
            }), (0, Hb.jsxs)("div", {
              ref: hb,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Mc,
              onPointerMove: Xc,
              onPointerUp: nc,
              onPointerCancel: nc,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": vb,
              "aria-valuemax": Fb,
              "aria-valuenow": Rb,
              tabIndex: 0,
              children: [jc.map((bb => {
                const cb = Ua(bb, vb, Fb);
                return (0, Hb.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${cb}%`
                  }
                }, bb)
              })), Zc && (0, Hb.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Oc}%`,
                  width: `${Kc}%`
                }
              }), dc && (0, Hb.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${zc}%`
                },
                "aria-label": `Play range start at tick ${Pc}`
              }), Ac && (0, Hb.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${qc}%`
                },
                "aria-label": `Play range end at tick ${Dc}`
              }), Fc && oc && (0, Hb.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Sc}%`,
                  width: `${vc}%`
                }
              }), pc.map((bb => bs(bb, "detail", cs(bb)))), (0, Hb.jsx)("button", {
                type: "button",
                className: ab()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== ib
                }),
                style: {
                  left: `${Jc}%`
                },
                onPointerDown: mc("detail"),
                onPointerMove: lc,
                onPointerUp: Qc,
                onPointerCancel: Qc,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Hb.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Hb.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Oa = (0, kb.memo)((function(bb) {
        let {
          enabled: cb
        } = bb;
        const sb = (0, kb.useRef)(!1),
          Wb = (0, kb.useRef)(null),
          [Tb, Ub] = (0, kb.useState)(!1),
          Ib = (0, kb.useCallback)((bb => {
            cb && 0 === bb.button && (sb.current = !0, Ub(!0), Wb.current = {
              x: bb.clientX,
              y: bb.clientY
            }, bb.currentTarget.setPointerCapture(bb.pointerId))
          }), [cb]),
          fb = (0, kb.useCallback)((bb => {
            if (!cb || !sb.current || !Wb.current) return;
            const kb = bb.clientX - Wb.current.x,
              ab = bb.clientY - Wb.current.y;
            Wb.current = {
              x: bb.clientX,
              y: bb.clientY
            }, Xb.gameBridge.send("dragReplayCamera", {
              dx: kb,
              dy: ab
            })
          }), [cb]),
          Mb = (0, kb.useCallback)((bb => {
            sb.current && (sb.current = !1, Ub(!1), Wb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId))
          }), []);
        return cb ? (0, Hb.jsx)("div", {
          className: ab()("ReplayViewerCameraDragSurface", {
            Dragging: Tb
          }),
          onPointerDown: Ib,
          onPointerMove: fb,
          onPointerUp: Mb,
          onPointerCancel: Mb,
          "aria-hidden": !0
        }) : null
      }));
    var Ga = sb(36570),
      Ka = sb(36573);
    const Za = (0, kb.memo)((function(bb) {
        var cb, sb, Wb;
        let {
          anchorRect: Tb,
          anchorRef: Ib,
          onClose: fb
        } = bb;
        const Mb = (0, kb.useRef)(null),
          Xb = ta(Mb, Tb),
          [nb, mb] = (0, kb.useState)(Ka.b),
          lb = (0, kb.useMemo)((() => Object.values(nb).every((bb => bb))), [nb]);
        (0, Ub.f)("replayViewer|uiVisibilityChanged", (() => {
          mb((0, Ka.b)())
        })), ya(Mb, fb, Ib);
        const Qb = (0, kb.useCallback)(((bb, cb) => {
            (0, Ka.h)(bb, cb), mb((0, Ka.b)())
          }), []),
          eb = (0, kb.useCallback)((bb => {
            for (const {
                group: cb
              }
              of Ga.g)(0, Ka.h)(cb, bb);
            mb((0, Ka.b)())
          }), []),
          Cb = Ba(Tb);
        return (0, Wa.createPortal)((0, Hb.jsxs)("div", {
          ref: Mb,
          className: ab()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (cb = null === Xb || void 0 === Xb ? void 0 : Xb.placeBelow) && void 0 !== cb && cb,
            Positioned: null !== Xb
          }),
          style: {
            left: `${null!==(sb=null===Xb||void 0===Xb?void 0:Xb.left)&&void 0!==sb?sb:Cb.left}px`,
            top: `${null!==(Wb=null===Xb||void 0===Xb?void 0:Xb.top)&&void 0!==Wb?Wb:Cb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: [(0, Hb.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Hb.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Hb.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Hb.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Hb.jsx)("input", {
                type: "checkbox",
                checked: lb,
                onChange: bb => {
                  eb(bb.target.checked)
                }
              }), (0, Hb.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), Ga.g.map((bb => {
              let {
                group: cb,
                label: sb
              } = bb;
              return (0, Hb.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Hb.jsx)("input", {
                  type: "checkbox",
                  checked: nb[cb],
                  onChange: bb => {
                    Qb(cb, bb.target.checked)
                  }
                }), (0, Hb.jsx)("span", {
                  children: sb
                })]
              }, cb)
            }))]
          })]
        }), document.body)
      })),
      za = (0, kb.memo)((function(bb) {
        let {
          disabled: cb
        } = bb;
        const sb = (0, kb.useRef)(null),
          [Wb, ab] = (0, kb.useState)(!1),
          [Tb, Ub] = (0, kb.useState)(null),
          Ib = (0, kb.useCallback)((() => {
            sb.current && (Ub(sb.current.getBoundingClientRect()), ab((bb => !bb)))
          }), []),
          fb = (0, kb.useCallback)((() => {
            ab(!1)
          }), []);
        return (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("div", {
            ref: sb,
            children: (0, Hb.jsx)(Bs.d, {
              className: "ReplayViewerActionButton",
              onClick: Ib,
              disabled: cb,
              children: (0, Hb.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Wb && Tb && (0, Hb.jsx)(Za, {
            anchorRect: Tb,
            anchorRef: sb,
            onClose: fb
          })]
        })
      })),
      qa = ["freeCamUp", "freeCamDown"];

    function da(bb, cb) {
      Xb.gameBridge.send("holdReplayFreecamVertical", {
        action: bb,
        qU: cb
      })
    }
    const Aa = (0, kb.memo)((function() {
        (0, kb.useEffect)((() => () => {
          ! function() {
            Xb.gameBridge.send("moveReplayFreecam", null);
            for (const bb of qa) da(bb, !1)
          }()
        }), []);
        const bb = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("moveReplayFreecam", bb)
          }), []),
          cb = (0, kb.useCallback)((bb => ({
            onTouchStart: cb => {
              cb.preventDefault(), cb.stopPropagation(), da(bb, !0)
            },
            onTouchEnd: cb => {
              cb.preventDefault(), cb.stopPropagation(), da(bb, !1)
            },
            onTouchCancel: cb => {
              cb.preventDefault(), cb.stopPropagation(), da(bb, !1)
            }
          })), []);
        return (0, Hb.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Hb.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Hb.jsx)(hc, {
              onMove: bb,
              mode: "pinned"
            })
          }), (0, Hb.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Hb.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...cb("freeCamUp"),
              children: (0, Hb.jsx)(Kb.b, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Hb.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...cb("freeCamDown"),
              children: (0, Hb.jsx)(Kb.b, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      wa = [],
      ra = (0, kb.memo)((function() {
        const bb = (0, Rb.n)();
        return (0, Yb.c)("replayViewerRequested", (bb => {
          (0, Rb.j)("toggle" === bb ? !(0, Rb.f)() : "open" === bb)
        })), bb ? (0, Hb.jsx)(oa, {}) : null
      })),
      oa = (0, kb.memo)((function() {
        var bb, cb, sb, Wb, Tb, Ub, Ib, fb, Mb, nb, mb, lb;
        const Qb = kb.useRef(null),
          [eb, Cb] = (0, kb.useState)(null),
          [Nb, Vb] = (0, kb.useState)(1),
          [Lb, ub] = (0, kb.useState)(null),
          [gb, Bb] = (0, kb.useState)(!1),
          {
            isTouchScreen: tb
          } = (0, hb.p)(["isTouchScreen"]),
          yb = (0, Yb.f)("replay"),
          Pb = (0, Yb.f)("replayEdits"),
          Db = null !== yb,
          Eb = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.aX) && void 0 !== bb ? bb : 0,
          ib = null !== (cb = null === yb || void 0 === yb ? void 0 : yb.totalTicks) && void 0 !== cb ? cb : 0,
          Ob = Math.max(0, ib - 1),
          Zb = null !== (sb = null === yb || void 0 === yb ? void 0 : yb.playing) && void 0 !== sb && sb,
          zb = null !== (Wb = null === yb || void 0 === yb ? void 0 : yb.speed) && void 0 !== Wb ? Wb : 1,
          qb = null !== (Tb = null === yb || void 0 === yb ? void 0 : yb.hY) && void 0 !== Tb ? Tb : 20,
          db = null !== Lb && void 0 !== Lb ? Lb : Eb,
          Ab = null !== (Ub = null === yb || void 0 === yb ? void 0 : yb.freecam) && void 0 !== Ub && Ub,
          wb = null !== (Ib = null === yb || void 0 === yb ? void 0 : yb.cameraMode) && void 0 !== Ib ? Ib : "recording",
          rb = null !== (fb = null === Pb || void 0 === Pb ? void 0 : Pb.cameraKeyframes) && void 0 !== fb ? fb : wa,
          ob = null !== (Mb = null === Pb || void 0 === Pb ? void 0 : Pb.playbackMark) && void 0 !== Mb ? Mb : null,
          Sb = null !== (nb = null === Pb || void 0 === Pb ? void 0 : Pb.fileName) && void 0 !== nb ? nb : null,
          vb = null !== (mb = null === Pb || void 0 === Pb ? void 0 : Pb.unsavedChanges) && void 0 !== mb && mb,
          Fb = null !== (lb = null === Pb || void 0 === Pb ? void 0 : Pb.suggestSaveAs) && void 0 !== lb && lb,
          xb = (0, Yb.f)("replayVideoExporting"),
          jb = !xb && Db && ("freecam" === wb || ("recording" === wb || "keyframe" === wb) && !Zb),
          pb = tb && Db && "freecam" === wb && !xb && !gb;
        (0, ka.d)(!0, !0, "ReplayViewerOverlay"), (0, kb.useEffect)((() => {
          Xb.gameBridge.send("syncReplayCameraMode", null)
        }), [Ab]);
        const bc = (0, kb.useCallback)(((bb, cb) => {
            Xb.gameBridge.send("seekReplay", {
              aX: bb,
              ignorePlaybackMark: null === cb || void 0 === cb ? void 0 : cb.ignorePlaybackMark
            })
          }), []),
          cc = (0, kb.useCallback)((() => {
            Xb.gameBridge.send("setReplayPlaying", !1)
          }), []),
          sc = (0, kb.useCallback)(((bb, cb) => {
            Xb.gameBridge.send("moveReplayCameraKeyframe", {
              from: bb,
              to: cb
            })
          }), []),
          kc = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("setReplayCameraKeyframe", bb)
          }), []),
          Wc = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("deleteReplayCameraKeyframes", {
              start: bb,
              end: bb
            })
          }), []),
          ac = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("deleteReplayCameraKeyframes", {
              start: bb.startTick,
              end: bb.endTick
            })
          }), []),
          Tc = (0, kb.useCallback)((() => Xb.gameBridge.lookup("replayCamera", null)), []),
          Uc = (0, kb.useCallback)((bb => {
            ub(bb)
          }), []),
          Ic = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("setReplayPlaybackMark", {
              inTick: bb.startTick,
              outTick: bb.endTick
            })
          }), []),
          Hc = (0, kb.useCallback)((() => {
            Xb.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          fc = (0, kb.useCallback)((bb => {
            const cb = Xb.gameBridge.latest("replay");
            if (null === cb || bb.endTick <= bb.startTick) return;
            const sb = bb.startTick,
              kb = bb.endTick;
            pk.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((bb => {
              var Wb;
              if (!0 !== bb) return;
              if ((null === (Wb = Xb.gameBridge.latest("replay")) || void 0 === Wb ? void 0 : Wb.id) !== cb.id) return;
              Xb.gameBridge.send("cropReplay", {
                start: sb,
                end: kb
              }) && (ub(null), Vb(1))
            }))
          }), []),
          Mc = (0, kb.useCallback)(((bb, cb) => {
            Cb(null), Vb(1), ub(null), (0, RW.c)().open(bb, cb).catch((bb => {
              console.error(bb), Cb(bb instanceof Error ? bb.message : "Failed to parse recording")
            }))
          }), []),
          Xc = (0, kb.useCallback)(((bb, cb) => {
            null !== Xb.gameBridge.latest("connectedGame").websocketUrl ? pk.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((sb => {
              !0 === sb && Mc(bb, cb)
            })) : Mc(bb, cb)
          }), [Mc]),
          nc = (0, kb.useCallback)((bb => {
            var cb;
            const sb = null === (cb = bb.target.files) || void 0 === cb ? void 0 : cb[0];
            if (bb.target.value = "", !sb) return;
            const kb = new FileReader;
            kb.onload = () => {
              Xc(new Uint8Array(kb.result), {
                fileName: sb.name
              })
            }, kb.onerror = () => {
              Cb("Failed to read file")
            }, kb.readAsArrayBuffer(sb)
          }), [Xc]),
          mc = (0, kb.useCallback)((() => {
            const bb = () => {
              var bb;
              null === (bb = Qb.current) || void 0 === bb || bb.click()
            };
            (0, xW.l)() ? (0, xW.g)().then((bb => {
              bb && Xc(bb.bytes, {
                fileHandle: bb.handle
              })
            })).catch((cb => {
              console.error(cb), bb()
            })): bb()
          }), [Xc]),
          lc = (0, kb.useCallback)((async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let cb;
            try {
              cb = await sa(bb, {
                files: (0, RW.c)(),
                pickerSupported: xW.l,
                chooseFile: xW.d,
                write: xW.n,
                download: FW.i,
                onFallback: console.error
              })
            } catch (sb) {
              return void(bb => {
                console.error(bb), pk.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: pW(bb),
                  confirmText: "OK"
                })
              })(sb)
            }
            "written" !== cb && "downloaded" !== cb || (() => {
              const bb = pk.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                bb.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Qc = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("replayAction", bb)
          }), []),
          ec = (0, kb.useCallback)((bb => {
            Vb((cb => Ma(cb, bb)))
          }), []),
          Cc = (0, kb.useCallback)((bb => {
            if (!Xb.gameBridge.latest("replayVideoExporting")) switch (bb) {
              case "replayLoad":
                mc();
                break;
              case "replaySave":
                lc(!1);
                break;
              case "replaySaveAs":
                lc(!0);
                break;
              case "replayTimelineZoomIn":
                ec("in");
                break;
              case "replayTimelineZoomOut":
                ec("out")
            }
          }), [mc, lc, ec]);
        (0, Yb.c)("replayUiActionRequested", Cc);
        const Nc = (0, kb.useCallback)((bb => {
            Xb.gameBridge.send("setReplayCameraMode", bb)
          }), []),
          Vc = Db ? Bs.d : Bs.n,
          Lc = vb && !Fb ? Bs.n : Bs.d,
          uc = vb && Fb ? Bs.n : Bs.d;
        return (0, Hb.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Hb.jsx)(Oa, {
            enabled: jb
          }), pb && (0, Hb.jsx)(Aa, {}), (0, Hb.jsx)("input", {
            ref: Qb,
            type: "file",
            accept: FW.c,
            className: "ReplayViewerFileInput",
            onChange: nc
          }), (0, Hb.jsxs)("div", {
            className: ab()("ReplayViewerBar", {
              Collapsed: gb
            }),
            children: [(0, Hb.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                gb ? Bb(!1) : Db ? Bb(!0) : (0, Rb.d)()
              },
              "aria-expanded": !gb,
              "aria-label": gb ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Hb.jsx)(Kb.b, {
                name: gb ? "angle-up" : "angle-down"
              })
            }), !gb && (0, Hb.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Db && ib > 0 && (0, Hb.jsx)(ia, {
                maxTick: Ob,
                displayTick: db,
                hY: qb,
                cameraKeyframes: rb,
                playbackMark: ob,
                onSeek: bc,
                onPause: cc,
                onScrubTickChange: Uc,
                onMoveCameraKeyframe: sc,
                onUpdateCameraKeyframe: kc,
                onDeleteCameraKeyframe: Wc,
                onUseCurrentCamera: Tc,
                onMarkRange: Ic,
                onCropRange: fc,
                onDeleteKeyframesInRange: ac,
                onClearMark: Hc,
                zoomLevel: Nb,
                onZoomLevelChange: Vb
              }, Ob), (0, Hb.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Hb.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Hb.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Db && (0, Hb.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Sb && void 0 !== Sb ? Sb : "Unsaved recording", vb ? " *" : ""]
                    }), (0, Hb.jsxs)(Vc, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Cc("replayLoad")
                      },
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Hb.jsxs)(Bs.d, {
                      className: "ReplayViewerActionButton",
                      onClick: Rb.d,
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Hb.jsxs)(Lc, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Cc("replaySave")
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Hb.jsxs)(Bs.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Xb.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Hb.jsxs)(uc, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Cc("replaySaveAs")
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Hb.jsxs)(Bs.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Xb.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Db || 0 === ib || xb,
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Hb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Hb.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Hb.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Hb.jsx)(Jb.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Hb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Hb.jsx)(Gb.f, {
                        tooltipInner: (0, Hb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Hb.jsxs)(Bs.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === wb,
                          onClick: () => {
                            Nc("recording")
                          },
                          disabled: !Db,
                          children: ["Recorded ", (0, Hb.jsx)(Kb.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Hb.jsx)(Gb.f, {
                        tooltipInner: (0, Hb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Hb.jsxs)(Bs.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === wb,
                          onClick: () => {
                            Nc("freecam")
                          },
                          disabled: !Db,
                          children: ["Free ", (0, Hb.jsx)(Kb.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Hb.jsx)(Gb.f, {
                        tooltipInner: (0, Hb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Hb.jsxs)(Bs.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === wb,
                          onClick: () => {
                            Nc("keyframe")
                          },
                          disabled: !Db,
                          children: ["Preview ", (0, Hb.jsx)(Kb.b, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Hb.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Hb.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Hb.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Hb.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Ha(db, qb)
                      }), (0, Hb.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Hb.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Ha(Ob, qb)
                      })]
                    }), (0, Hb.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", db, " / ", Ob]
                    })]
                  }), (0, Hb.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Hb.jsxs)(Bs.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Qc("replaySkipBack")
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsxs)("span", {
                        children: [" ", (0, Hb.jsx)(Kb.b, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Hb.jsx)(Jb.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Hb.jsxs)(Bs.n, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Xb.gameBridge.send("setReplayPlaying", !Zb)
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsxs)("span", {
                        children: [" ", Zb ? (0, Hb.jsx)(Kb.b, {
                          name: "pause"
                        }) : (0, Hb.jsx)(Kb.b, {
                          name: "play"
                        }), " "]
                      }), (0, Hb.jsx)(Jb.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Hb.jsxs)(Bs.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Qc("replaySkipForward")
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsxs)("span", {
                        children: [" ", (0, Hb.jsx)(Kb.b, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Hb.jsx)(Jb.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Hb.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Hb.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Hb.jsxs)(Bs.n, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Qc("replayRecordKeyframe")
                      },
                      disabled: !Db,
                      children: [(0, Hb.jsx)(Jb.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Hb.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Hb.jsx)(za, {
                      disabled: !Db
                    }), ob && (0, Hb.jsx)(Bs.M, {
                      className: "ReplayViewerActionButton",
                      onClick: Hc,
                      disabled: !Db,
                      children: (0, Hb.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Hb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Hb.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Hb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Hb.jsx)(Bs.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Qc("replaySpeedDown")
                        },
                        disabled: !Db || (0, vW.g)(zb),
                        children: (0, Hb.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Hb.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [zb, "\xd7"]
                      }), (0, Hb.jsx)(Bs.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Qc("replaySpeedUp")
                        },
                        disabled: !Db || (0, vW.e)(zb),
                        children: (0, Hb.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Hb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Hb.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Hb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Hb.jsxs)(Bs.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Cc("replayTimelineZoomOut")
                        },
                        disabled: !Db || Nb <= aa[0],
                        children: [(0, Hb.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Hb.jsx)(Jb.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Hb.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: fa(Nb)
                      }), (0, Hb.jsxs)(Bs.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Cc("replayTimelineZoomIn")
                        },
                        disabled: !Db || Nb >= aa[aa.length - 1],
                        children: [(0, Hb.jsx)("span", {
                          children: " + "
                        }), (0, Hb.jsx)(Jb.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Hb.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Db && "Load a recording to begin playback"
              }), eb && (0, Hb.jsx)("div", {
                className: "ReplayViewerError",
                children: eb
              })]
            })]
          })]
        })
      }));
    var Sa = sb(1312);

    function Ra() {
      const [, bb] = (0, kb.useState)(0);
      return (0, Ub.f)("replayViewer|uiVisibilityChanged", (() => {
          bb((bb => bb + 1))
        })), (0, Ub.f)("replayViewer|replayLoaded", (() => {
          bb((bb => bb + 1))
        })),
        function() {
          if (!(0, Sa.h)()) return {};
          const bb = {
              [Ga.e]: "true"
            },
            cb = (0, Ka.b)();
          for (const {
              group: sb,
              dataAttr: kb
            }
            of Ga.g) kb && !cb[sb] && (bb[kb] = "true");
          return bb
        }()
    }
    var va = sb(8910),
      Fa = sb(1997),
      xa = sb(8352),
      ja = sb(8345),
      pa = sb(2004);
    const bT = (0, kb.memo)((function() {
      var bb, cb, sb;
      const Wb = (0, Nb.d)("customButtons");
      (0, kb.useEffect)((() => Wb ? (Xb.gameBridge.send("bindCustomButtonKeys", Wb.filter(xa.f).map((bb => {
        let {
          id: cb,
          keycode: sb
        } = bb;
        return {
          id: cb,
          keycode: sb
        }
      }))), () => {
        Xb.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Wb]);
      const ab = null !== (bb = null === Wb || void 0 === Wb ? void 0 : Wb.filter(xa.f)) && void 0 !== bb ? bb : [],
        Tb = (0, ja.h)(),
        Ub = null !== (cb = null === (sb = (0, pa.c)()) || void 0 === sb ? void 0 : sb.hideButtonHints) && void 0 !== cb && cb,
        Ib = "customButton" !== (null === Tb || void 0 === Tb ? void 0 : Tb.kind) || Ub ? null : Tb.id,
        fb = ab.length > 0,
        Mb = (0, kb.useRef)(null);
      return (0, kb.useLayoutEffect)((() => {
        if (!fb) return () => {};
        const bb = Mb.current,
          cb = bb.closest(".InGameUi"),
          sb = () => {
            cb.style.setProperty("--custom-buttons-top", `${bb.offsetTop}px`)
          };
        sb();
        const kb = new ResizeObserver(sb);
        return kb.observe(bb), kb.observe(bb.parentElement), () => {
          kb.disconnect(), cb.style.removeProperty("--custom-buttons-top")
        }
      }), [fb]), (0, Hb.jsx)("div", {
        ref: Mb,
        className: "" + ((0, QW.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: ab.map((bb => {
          var cb, sb;
          return (0, Hb.jsx)(cT, {
            button: bb,
            padGlyph: bb.id === Ib && null !== (cb = null === (sb = (0, db.g)()) || void 0 === sb ? void 0 : sb.getBoundButton("actionButton")) && void 0 !== cb ? cb : null
          }, bb.id)
        }))
      })
    }));

    function cT(bb) {
      let {
        button: cb,
        padGlyph: sb
      } = bb;
      const Wb = (0, kb.useRef)(null),
        ab = () => {
          null !== Wb.current && (Wb.current = null, Xb.gameBridge.send("pressCustomButton", {
            id: cb.id,
            down: !1
          }))
        };
      (0, kb.useEffect)((() => ab), []);
      const Tb = rc(ab, {
          pressesOnPointerDown: !0
        }),
        Ub = bb => {
          Wb.current === bb.pointerId && ab()
        };
      return (0, Hb.jsxs)("div", {
        className: "CustomIcon",
        ...Tb,
        onLostPointerCapture: Ub,
        children: [(0, Hb.jsx)(Fa.b, {
          icon: cb.icon,
          keyboardHint: (0, xa.c)(cb.keycode),
          padGlyph: sb,
          onPointerDown: bb => {
            try {
              bb.currentTarget.setPointerCapture(bb.pointerId)
            } catch {
              return
            }
            null === Wb.current && Xb.gameBridge.send("pressCustomButton", {
              id: cb.id,
              down: !0
            }), Wb.current = bb.pointerId
          },
          onPointerUp: Ub,
          onPointerCancel: Ub,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), cb.description && (0, Hb.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: cb.description
        })]
      })
    }
    var sT = sb(2328),
      kT = sb(287);
    const WT = {
      frame: bb => {
        const cb = requestAnimationFrame((() => {
          bb()
        }));
        return () => {
          cancelAnimationFrame(cb)
        }
      },
      afterFrame: bb => {
        const cb = setTimeout(bb, 0);
        return () => {
          clearTimeout(cb)
        }
      }
    };
    class aT {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kT.b,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT;
        this.idle = bb, this.frames = cb, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (bb(), () => {}) : (cb ? this.waiting.unshift(bb) : this.waiting.push(bb), this.schedule(), () => {
          const cb = this.waiting.indexOf(bb);
          cb >= 0 && (this.waiting.splice(cb, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((bb => {
          for (this.cancelIdle = null; this.waiting.length > 0 && bb.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const bb = this.waiting.shift();
        try {
          bb()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var bb, cb, sb;
        null === (bb = this.cancelIdle) || void 0 === bb || bb.call(this), this.cancelIdle = null, null === (cb = this.cancelFrame) || void 0 === cb || cb.call(this), this.cancelFrame = null, null === (sb = this.cancelAfterFrame) || void 0 === sb || sb.call(this), this.cancelAfterFrame = null
      }
    }
    const TT = (0, kb.createContext)(null);

    function UT(bb) {
      let {
        children: cb,
        first: sb = !1
      } = bb;
      const Wb = (0, kb.useContext)(TT),
        [ab, Tb] = (0, kb.useState)(null === Wb);
      return (0, kb.useEffect)((() => {
        if (!ab && null !== Wb) return Wb.request((() => {
          Tb(!0)
        }), sb)
      }), [sb, ab, Wb]), ab ? (0, kb.createElement)(kb.Fragment, null, cb) : null
    }
    const IT = (0, kb.memo)((function(bb) {
        let {
          shown: cb
        } = bb;
        const [sb] = (0, kb.useState)((() => new mb.d(cb))), [Wb] = (0, kb.useState)((() => cb ? null : new aT));
        return (0, kb.useLayoutEffect)((() => {
          cb && (null === Wb || void 0 === Wb || Wb.show(), sb.show())
        }), [cb, sb, Wb]), (0, Hb.jsx)(mb.c.Provider, {
          value: sb,
          children: (0, Hb.jsx)(TT.Provider, {
            value: Wb,
            children: (0, Hb.jsx)(HT, {})
          })
        })
      })),
      HT = (0, kb.memo)((function() {
        const {
          isUiHidden: bb,
          isUiHiddenByCamera: cb,
          worldPanelHud: sb,
          isTouchScreen: Wb
        } = (0, hb.p)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Tb = (0, xk.c)(), Ub = Ra(), Ib = (0, mb.k)(), fb = (0, kb.useRef)(null), Mb = (0, Nb.d)("showKillfeed");
        return function() {
            const bb = (0, mb.k)();
            (0, kb.useEffect)((() => bb.whenShown(lb)), [bb])
          }(),
          function() {
            const bb = (0, Nb.d)("inventoryColourOverride");
            (0, kb.useEffect)((() => {
              if (!bb) return;
              const {
                panel: cb,
                slot: sb,
                slotSelected: kb,
                slotUnavailable: Wb
              } = wb(bb), ab = document.documentElement.style;
              return ab.setProperty("--InventoryPanelColour", cb), ab.setProperty("--InventorySlotColour", sb), ab.setProperty("--InventorySlotSelectedColour", kb), ab.setProperty("--InventorySlotUnavailableColour", Wb), () => {
                ab.removeProperty("--InventoryPanelColour"), ab.removeProperty("--InventorySlotColour"), ab.removeProperty("--InventorySlotSelectedColour"), ab.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [bb])
          }(), (0, kb.useLayoutEffect)((() => Ib.whenShown((() => {
            var bb;
            null === (bb = fb.current) || void 0 === bb || bb.classList.remove("PreMounted")
          }))), [Ib]), (0, Hb.jsxs)(Hb.Fragment, {
            children: [(0, Hb.jsxs)("div", {
              ref: fb,
              className: ab()("InGameUi", {
                PreMounted: !Ib.shown,
                Hidden: bb,
                HiddenByCamera: cb,
                HiddenByWorldPanel: null !== sb,
                WorldPanelTouchControl: "touchControls" === sb
              }),
              ...Ub,
              children: [(0, Hb.jsxs)(UT, {
                children: [(0, Hb.jsx)(ws.d, {}), (0, Hb.jsx)(vs, {})]
              }), (0, Hb.jsx)(mb.g, {
                children: (0, Hb.jsx)(Fs, {})
              }), (0, Hb.jsxs)(UT, {
                children: [(0, Hb.jsx)(hW, {}), (0, Hb.jsx)(DW, {}), Wb && (0, Hb.jsx)(iW, {})]
              }), (0, Hb.jsxs)(UT, {
                children: [(0, Hb.jsx)(es, {}), (0, Hb.jsx)(fk.c, {}), (0, Hb.jsx)(ek, {})]
              }), (0, Hb.jsx)(mb.g, {
                children: (0, Hb.jsx)(As, {})
              }), (0, Hb.jsxs)(UT, {
                children: [(0, Hb.jsx)(tW.b, {}), (0, Hb.jsx)(ra, {})]
              }), (0, Hb.jsxs)(UT, {
                children: [(0, Hb.jsx)(GW.f, {}), (0, Hb.jsx)(KW.e, {})]
              }), (0, Hb.jsx)(UT, {
                children: (0, Hb.jsx)(Ns.j, {})
              }), (0, Hb.jsx)(UT, {
                children: (0, Hb.jsx)(QT, {
                  showChat: Tb
                })
              }), (0, Hb.jsxs)(UT, {
                children: [(0, Hb.jsx)(zW, {}), (0, Hb.jsx)(BW, {})]
              }), (0, Hb.jsxs)("div", {
                className: ab()("RightElements", {
                  RightElementsTouchscreen: Wb
                }),
                "data-camera-keeper-host": "",
                children: [(0, Hb.jsxs)("div", {
                  className: hk.l,
                  "data-holds-camera-keeper": "",
                  children: [(0, Hb.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Hb.jsx)(UT, {
                      children: (0, Hb.jsx)(XW.b, {})
                    }), (0, Hb.jsxs)(UT, {
                      children: [(0, Hb.jsx)(Zb, {}), (0, Hb.jsx)(yk.e, {})]
                    }), QW.featureFlags.useSocialFeatures && (0, Hb.jsx)(mb.g, {
                      children: (0, Hb.jsx)(Pk.c, {
                        placement: "inGame"
                      })
                    }), QW.featureFlags.useSocialFeatures && (0, Hb.jsx)(mb.g, {
                      children: (0, Hb.jsx)(rk, {})
                    }), Mb && (0, Hb.jsx)(mb.g, {
                      children: (0, Hb.jsx)(Hk, {})
                    }), (0, Hb.jsx)(UT, {
                      children: (0, Hb.jsx)(va.e, {})
                    })]
                  }), QW.featureFlags.useSocialFeatures && (0, Hb.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Hb.jsx)(UT, {
                      children: (0, Hb.jsx)(uW.c, {})
                    })
                  })]
                }), (0, Hb.jsxs)(UT, {
                  children: [(0, Hb.jsx)(Ns.d, {
                    placement: "topRight"
                  }), (0, Hb.jsx)(eT, {})]
                })]
              }), (0, Hb.jsx)("div", {
                className: "LeftCentre",
                children: (0, Hb.jsx)(UT, {
                  children: (0, Hb.jsx)(bT, {})
                })
              }), (0, Hb.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Wb ? "" : void 0,
                children: [(0, Hb.jsx)(mb.g, {
                  children: (0, Hb.jsx)(Pb, {})
                }), (0, Hb.jsx)(UT, {
                  children: (0, Hb.jsx)(MT, {})
                }), (0, Hb.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Wb ? "" : void 0,
                  children: [(0, Hb.jsx)("div", {
                    className: ab()("BottomLeftElements", {
                      Touch: Wb
                    }),
                    children: (0, Hb.jsxs)(UT, {
                      children: [(0, Hb.jsx)(vk, {}), !Wb && (0, Hb.jsx)(sT.c, {})]
                    })
                  }), (0, Hb.jsx)(UT, {
                    children: (0, Hb.jsx)(lT, {})
                  }), (0, Hb.jsx)(UT, {
                    children: (0, Hb.jsx)(Nk, {
                      isTouchScreen: Wb
                    })
                  })]
                })]
              }), (0, Hb.jsx)("div", {
                className: "MiddleLeft"
              }), Wb && (0, Hb.jsx)(UT, {
                children: (0, Hb.jsx)(pc, {})
              }), (0, Hb.jsx)("div", {
                className: "CameraFadeHost",
                ref: Nc.l
              })]
            }), (0, Hb.jsx)(mb.g, {
              children: (0, Hb.jsx)(SW.b, {})
            }), (0, Hb.jsx)(UT, {
              first: !0,
              children: (0, Hb.jsx)(Fk.d, {})
            }), (0, Hb.jsx)(mb.g, {
              children: (0, Hb.jsx)(fT, {})
            })]
          })
      }));

    function fT() {
      return (0, kb.useEffect)((() => {
        const bb = setTimeout((() => {
          (0, Vb.i)()
        }), 0);
        return () => {
          clearTimeout(bb), Vb.j.nC(!1)
        }
      }), []), null
    }
    const MT = (0, kb.memo)((function() {
        const bb = (0, Ub.h)("aimingOverlay", "none");
        (0, eb.c)();
        const cb = (0, Nb.h)("middleTextUpper"),
          sb = (0, Nb.h)("middleTextLower");
        return (0, Hb.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === bb ? {
            visibility: "hidden"
          } : {},
          children: [(0, Hb.jsx)(mT, {
            text: cb,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: XT
          }), (0, Hb.jsx)(mT, {
            text: sb,
            className: "MiddleText",
            maxHeightFraction: nT
          })]
        })
      })),
      XT = .3,
      nT = .2;

    function mT(bb) {
      let {
        text: cb,
        className: sb,
        maxHeightFraction: Wb
      } = bb;
      const ab = (0, kb.useRef)(null),
        Tb = (0, kb.useRef)(null);
      return function(bb, cb, sb, Wb) {
        (0, kb.useLayoutEffect)((() => {
          const kb = bb.current,
            Wb = cb.current;
          if (!kb || !Wb) return;
          let ab = -1,
            Tb = -1;
          const Ub = bb => (Wb.style.setProperty("zoom", String(bb)), kb.getBoundingClientRect().height),
            Ib = () => {
              const bb = document.documentElement.clientHeight * sb;
              let cb = 1;
              if (Ub(1) > bb) {
                let sb = .5,
                  kb = 1;
                for (let cb = 0; cb < 6; cb++) {
                  const cb = (sb + kb) / 2;
                  Ub(cb) <= bb ? sb = cb : kb = cb
                }
                cb = sb
              }
              Tb = Ub(cb), ab = kb.getBoundingClientRect().width
            };
          Ib();
          let Hb = 0;
          const fb = () => {
              cancelAnimationFrame(Hb), Hb = requestAnimationFrame(Ib)
            },
            Mb = new ResizeObserver((() => {
              const {
                width: bb,
                height: cb
              } = kb.getBoundingClientRect();
              bb === ab && cb === Tb || fb()
            }));
          return Mb.observe(kb), window.addEventListener("resize", fb), () => {
            Mb.disconnect(), window.removeEventListener("resize", fb), cancelAnimationFrame(Hb), Wb.style.removeProperty("zoom")
          }
        }), [bb, cb, sb, Wb])
      }(ab, Tb, Wb, cb.content), (0, Hb.jsx)("div", {
        ref: ab,
        className: "MiddleTextFit",
        children: (0, Hb.jsx)(ZW, {
          ref: Tb,
          text: cb,
          className: sb
        })
      })
    }
    const lT = (0, kb.memo)((function() {
        const bb = (0, Ub.h)("aimingOverlay", "none");
        (0, eb.c)();
        const cb = (0, Nb.d)("useInventory");
        return (0, Hb.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === bb ? {
            visibility: "hidden"
          } : {},
          children: [(0, Hb.jsx)(fb, {}), (0, Hb.jsx)(Ns.d, {}), (0, Hb.jsx)(Vs, {}), (0, Hb.jsx)(mb.g, {
            children: (0, Hb.jsx)(VW, {})
          }), (0, Hb.jsxs)("div", {
            className: "HotBarRow",
            children: [cb ? (0, Hb.jsx)(qb.d, {}) : (0, Hb.jsx)(qb.g, {}), (0, Hb.jsx)(Ab, {})]
          })]
        })
      })),
      QT = (0, kb.memo)((function(bb) {
        let {
          showChat: cb
        } = bb;
        const {
          t: sb
        } = (0, yb.E)(), {
          clientEscMenuOptions: Wb,
          isTouchScreen: Tb
        } = (0, hb.p)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, eb.c)();
        const {
          userContext: Ub,
          isUserContextUpdating: Ib
        } = (0, Qb.c)(), fb = (0, Nb.d)("hideCoordinates"), Xb = (0, Nb.d)("customVariationTitle"), {
          requestedGameNameWithVariation: nb,
          gameNameWithVariation: mb,
          lobbyName: lb,
          shownLobbyName: Vb
        } = (0, Yb.f)("connectedGame"), Lb = (0, Mb.c)(nb, lb, !1), [ub, Jb] = (0, kb.useState)(null), gb = (0, mW.o)(mb || nb || ""), Bb = Xb || gb || "";
        (0, kb.useEffect)((() => {
          Ib || Ek.b.getFavouriteLobbies(Ub).then((bb => {
            console.log("Got favourite lobbies", bb), Jb(bb)
          }))
        }), [Ib, Ub]);
        const tb = (0, kb.useRef)(null);
        return (0, kb.useLayoutEffect)((() => {
          const bb = tb.current,
            cb = document.documentElement,
            sb = new ResizeObserver((() => {
              cb.style.setProperty("--InGameHeaderRowsHeight", `${bb.offsetHeight}px`)
            }));
          return sb.observe(bb), () => {
            sb.disconnect(), cb.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), tk(tb), (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsxs)("div", {
            className: ab()(hk.i, {
              Touchscreen: Tb
            }),
            ref: tb,
            children: [(0, Hb.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Hb.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: bb => {
                  bb.stopPropagation(), bb.preventDefault()
                },
                onClick: () => {
                  hb.d.set({
                    openEverythingMenuName: Cb.r.SETTINGS
                  })
                },
                children: [(0, Hb.jsx)(nW.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Hb.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Hb.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Lb && (0, Hb.jsx)(nW.d, {}), null !== Lb && (0, Hb.jsxs)(Hb.Fragment, {
                  children: [Lb, Bb && ` ${Bb}`]
                })]
              }), (0, Hb.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Hb.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: Vb
              }), (0, lW.z)(lb) && (0, Hb.jsx)(Gb.f, {
                tooltipInner: (0, Hb.jsx)("div", {
                  children: sb(null !== ub && ub.includes(lb) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Hb.jsx)("div", {
                  children: (0, Hb.jsx)(Bs.r, {
                    isLiked: null !== ub && ub.includes(lb),
                    onClick: () => {
                      try {
                        if (!ub) return;
                        ub.includes(lb) ? (Ek.b.unfavouriteLobby(Ub, lb).catch((bb => {
                          console.error("Failed to favourite lobby", bb)
                        })), Jb(ub.filter((bb => bb !== lb)))) : (Ek.b.favouriteLobby(Ub, lb).catch((bb => {
                          console.error("Failed to favourite lobby", bb)
                        })), Jb([...ub, lb]))
                      } catch (bb) {
                        console.error("Failed to like lobby", bb)
                      }
                    },
                    isLoading: null === ub
                  })
                })
              }), (0, Hb.jsx)(wW, {})]
            }), (0, Hb.jsx)(UW, {
              show: Wb.showFPS
            }), !fb && Wb.showCoordinates && (0, Hb.jsx)(fW, {}), !fb && Wb.showChunkCoordinates && (0, Hb.jsx)(MW, {}), (0, Hb.jsx)(qW, {})]
          }), (0, Hb.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Hb.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: cb && (0, Hb.jsx)(Sb.d, {})
            })
          })]
        })
      })),
      eT = (0, kb.memo)((function() {
        (0, eb.c)();
        const bb = (0, Nb.h)("RightInfoText"),
          [cb, sb] = (0, kb.useState)(null);
        return (0, mc.j)(cb, ".RightElements"), bb.hasText ? (0, Hb.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Hb.jsx)(ZW, {
            ref: sb,
            text: bb,
            className: "RightInfoDiv",
            children: (0, Hb.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Hb.jsx)(Ib.d, {
                text: bb.content
              })
            })
          })
        }) : null
      }))
  },
  4556: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub
    });
    var kb = sb(64),
      Wb = sb(334),
      ab = sb(1858),
      Tb = sb(1087);

    function Ub(bb) {
      let {
        text: cb
      } = bb;
      const sb = [];
      let Ub = "";
      return (0, Wb.ic)(cb).forEach(((bb, cb) => {
        if ("string" === typeof bb || !(0, ab.e)(bb.icon)) return void(Ub += "string" === typeof bb ? bb : bb.icon);
        const Wb = Math.max(0, Ub.trimEnd().search(/\S{1,12}$/));
        sb.push((0, Tb.jsxs)(kb.Fragment, {
          children: [Ub.slice(0, Wb), (0, Tb.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ub.slice(Wb), (0, Tb.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Tb.jsx)(ab.d, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, cb)), Ub = ""
      })), sb.push(Ub), (0, Tb.jsx)(Tb.Fragment, {
        children: sb
      })
    }
  },
  36197: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb,
      g: () => fb,
      h: () => Mb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1858),
      Ub = sb(1087);
    const Ib = 350;
    let Hb = 0;

    function fb() {
      return Hb += 1, Hb
    }

    function Mb(bb, cb) {
      let sb = 0;
      for (const kb of bb) "ingredient" !== kb.kind && kb.TM === cb && (sb += kb.amount);
      return sb > 0 ? {
        idx: cb,
        amount: sb
      } : null
    }

    function Xb(bb) {
      var cb, sb;
      let {
        anim: Wb,
        onComplete: Hb
      } = bb;
      const fb = null !== (cb = Wb.delayMs) && void 0 !== cb ? cb : 0,
        Mb = null !== (sb = Wb.durationMs) && void 0 !== sb ? sb : Ib,
        [Xb, nb] = (0, kb.useState)(Wb.from),
        [mb, lb] = (0, kb.useState)(0 === fb),
        [Qb, eb] = (0, kb.useState)(!1),
        Cb = (0, kb.useRef)(!1);
      return (0, kb.useEffect)((() => {
        let bb, cb;
        const sb = () => {
            Cb.current = !0, lb(!0), bb = requestAnimationFrame((() => {
              cb = requestAnimationFrame((() => {
                nb({
                  x: Wb.to.x,
                  y: Wb.to.y
                }), eb(!0)
              }))
            }))
          },
          kb = Cb.current ? 0 : fb;
        let ab;
        kb > 0 ? ab = setTimeout(sb, kb) : sb();
        const Tb = setTimeout((() => {
          Hb(Wb.id)
        }), kb + Mb + 50);
        return () => {
          clearTimeout(ab), cancelAnimationFrame(bb), cancelAnimationFrame(cb), clearTimeout(Tb)
        }
      }), [Wb.id, Wb.to.x, Wb.to.y, Hb, fb, Mb]), (0, Ub.jsx)("div", {
        className: ab()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Wb.kind,
          Waiting: !mb,
          Arrived: Qb
        }),
        style: {
          left: Xb.x,
          top: Xb.y,
          "--fly-duration": `${Mb}ms`
        },
        children: (0, Ub.jsx)(Tb.d, {
          itemName: Wb.itemName,
          amount: Wb.amount
        })
      })
    }
  },
  36173: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ob,
      g: () => Zb
    });
    var kb = sb(64),
      Wb = sb(2749),
      ab = sb(6226),
      Tb = sb(1997),
      Ub = sb(2337),
      Ib = sb(8451),
      Hb = sb(344),
      fb = sb(26),
      Mb = sb(1423),
      Xb = sb(37),
      nb = sb(1033),
      mb = sb.n(nb),
      lb = sb(334),
      Qb = sb(36180),
      eb = sb(1839),
      Cb = sb(1912),
      Nb = sb(8301),
      Vb = sb(1087);

    function Lb(bb) {
      var cb, sb;
      let {
        slotIdx: ab
      } = bb;
      const Tb = (0, Cb.e)("hotbar", (bb => {
          var cb;
          return null !== (cb = bb.items[ab]) && void 0 !== cb ? cb : null
        })),
        Ib = (0, Cb.e)("hotbar", (bb => bb.ammo)),
        [fb, Mb] = (0, kb.useState)(!1),
        Xb = (0, kb.useRef)(null),
        [nb, lb] = (0, kb.useState)(null),
        [Qb, Lb] = (0, kb.useState)(null),
        ub = (0, Ub.d)("maxAuraLevel"),
        Yb = (0, Wb.b)(),
        hb = (0, kb.useCallback)((() => {
          if (clearTimeout(Xb.current), Tb) {
            var bb, cb, sb, kb;
            const Ib = Tb.displayName,
              fb = [],
              Mb = Array.isArray(Ib) ? Ib : [Ib],
              Xb = {
                fontStyle: null !== (bb = Tb.attributes.customAttributes) && void 0 !== bb && bb.author ? "italic" : "normal"
              };
            for (const bb of Mb) bb.str ? fb.push(bb) : fb.push({
              str: bb,
              style: Xb
            });
            if (null !== (cb = Tb.attributes.customAttributes) && void 0 !== cb && cb.enchantments) {
              fb.push(" ");
              const bb = Object.entries(Tb.attributes.customAttributes.enchantments).sort(((bb, cb) => cb[1] - bb[1])),
                cb = Tb.attributes.customAttributes.enchantmentData;
              for (const [sb, kb] of bb) {
                var Wb, ab;
                const bb = null !== (Wb = null === cb || void 0 === cb || null === (ab = cb[sb]) || void 0 === ab ? void 0 : ab.icon) && void 0 !== Wb ? Wb : `${sb} Enchantment`;
                var Ub;
                if (kb < 4)
                  for (let cb = 0; cb < kb; cb++) fb.push({
                    icon: bb,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else fb.push({
                  icon: bb,
                  style: {
                    fontSize: "1.5em"
                  }
                }), fb.push(null !== (Ub = (0, Hb.Q)(kb)) && void 0 !== Ub ? Ub : kb.toString())
              }
            }
            lb(fb), Lb(null !== (sb = null === (kb = Tb.attributes.customAttributes) || void 0 === kb ? void 0 : kb.enchantmentTier) && void 0 !== sb ? sb : null)
          } else lb(null), Lb(null);
          Mb(!0), Yb();
          const Ib = null === Tb || void 0 === Tb ? void 0 : Tb.attributes.customAttributes;
          void 0 === (null === Ib || void 0 === Ib ? void 0 : Ib.shotsLeft) && (Xb.current = setTimeout((() => {
            Mb(!1)
          }), 2e3))
        }), [null === Tb || void 0 === Tb ? void 0 : Tb.name, ab, null === Tb || void 0 === Tb ? void 0 : Tb.instance, null === Tb || void 0 === Tb ? void 0 : Tb.displayName]);
      (0, kb.useEffect)((() => (hb(), () => {
        clearTimeout(Xb.current), Mb(!1)
      })), [null === Tb || void 0 === Tb ? void 0 : Tb.name, ab, null === Tb || void 0 === Tb ? void 0 : Tb.instance, hb]);
      const Jb = null === Tb || void 0 === Tb || null === (cb = Tb.attributes.customAttributes) || void 0 === cb ? void 0 : cb.shotsLeft,
        gb = void 0 === Jb ? null : (0, Vb.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${Jb}|${Tb.requiresAmmo?`${Ib}x${Tb.clipSize}`:Tb.clipSize}`
        }),
        Bb = (0, Nb.g)();
      return (0, Vb.jsx)(Vb.Fragment, {
        children: fb && Tb && !Bb.showing ? (0, Vb.jsxs)("div", {
          className: mb()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === ub,
            Enchanted: null !== Qb
          }),
          style: {
            "--enchantmentColour": null !== (sb = Hb.nb[Qb]) && void 0 !== sb ? sb : Hb.nb.None,
            "--duration": Qb ? (0, Hb.jb)(Qb) + "s" : void 0
          },
          children: [Qb && (0, Vb.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, Vb.jsx)(eb.d, {
              text: nb
            }), gb]
          }), (0, Vb.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, Vb.jsx)(eb.d, {
              text: nb
            }), gb]
          })]
        }) : null
      })
    }
    var ub = sb(36197),
      Yb = sb(19),
      hb = sb(1870),
      Jb = sb(628),
      gb = sb(2346),
      Bb = sb(3177),
      tb = sb(3179);
    var yb = sb(2013),
      Pb = sb(1104),
      Db = sb(2367);

    function Eb() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var ib = sb(1442);
    const Ob = (0, kb.memo)((function() {
      const [bb, cb] = (0, kb.useState)(0), sb = (0, Ub.d)("useFullInventory"), Tb = (0, Ub.d)("highlightedHotbarSlots"), {
        isTouchScreen: Ib,
        openInGameMenuName: Hb
      } = (0, Yb.p)(["isTouchScreen", "openInGameMenuName"]), Xb = null !== Hb && "inventory" !== Hb, nb = (0, Cb.f)("fullInventory") && "inventory" === Hb, lb = function() {
        const bb = (0, yb.c)(((bb, cb) => `${bb}:${(0,Pb.d)(bb,cb)?"portrait":"landscape"}`)),
          [cb, sb] = (0, kb.useState)(Eb);
        return (0, kb.useLayoutEffect)((() => {
          sb(Eb())
        }), [bb]), (0, Mb.f)(Db.g, (() => {
          sb(Eb())
        })), cb
      }(), eb = Ib && !lb;
      ! function(bb, cb, sb) {
        (0, kb.useLayoutEffect)((() => {
          const kb = document.documentElement.classList;
          return bb && (kb.add("TouchHotbar"), kb.toggle("TouchHotbarKeysAbove", cb), kb.toggle("TouchHotbarHasBag", sb)), (0, Bb.l)(), fb.j.QQ(tb.d), () => {
            kb.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Bb.l)(), fb.j.QQ(tb.d)
          }
        }), [bb, cb, sb])
      }(Ib, eb, sb);
      const [Nb, gb] = (0, ab.d)("changedHotbarUsingNumkeys", !0), ib = (0, Cb.e)("hotbar", (bb => bb.selectedSlot)), Ob = null !== ib && void 0 !== ib ? ib : bb, zb = (0, Wb.b)(), qb = (0, kb.useRef)(null), Ab = (0, Mb.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Mb.f)("inventoryDraggedItemUpdated", (bb => {
        qb.current = bb, zb()
      })), (0, Cb.c)("hotbarScrolled", (bb => {
        null === ib && rb(bb)
      })), (0, Cb.c)("hotbarSlotRequested", (bb => {
        wb(bb), gb(!1)
      })), (0, Cb.c)("numberKeyPressed", (() => {
        gb(!1)
      })), (0, Cb.c)("hotbarDropRequested", (bb => {
        const cb = hb.gameBridge.latest("hotbar").items[Ob];
        if (cb) {
          var sb;
          const kb = bb && null !== (sb = cb.amount) && void 0 !== sb ? sb : 1;
          hb.gameBridge.send("removeInventoryItem", {
            slot: Ob,
            amount: kb,
            drop: !0
          })
        }
      }));
      const wb = bb => {
          hb.gameBridge.send("selectHotbarSlot", bb), cb(bb)
        },
        rb = bb => {
          wb((Ob + bb + Jb.n) % Jb.n)
        };
      let ob, Sb = null,
        Rb = null,
        vb = bb => bb => {},
        Fb = bb => cb => {
          wb(bb)
        },
        xb = bb => bb => {},
        jb = [];
      if (nb) {
        var pb;
        const bb = qb.current;
        if (null === bb || void 0 === bb || !bb.setHovered) return (0, Vb.jsx)("div", {
          className: mb()("HotBarContainer", {
            Touch: Ib,
            KeysAbove: eb
          }),
          children: (0, Vb.jsx)("div", {
            className: "HotBar"
          })
        });
        Sb = bb.draggedInfo, Rb = bb.specialItemInfo, vb = bb.setHovered, Fb = bb.pointerDown, xb = bb.pointerUp, ob = bb.variation, jb = null !== (pb = bb.craftFlyAnims) && void 0 !== pb ? pb : []
      }
      return (0, Vb.jsxs)("div", {
        className: mb()("HotBarContainer", {
          Touch: Ib,
          PopupOpen: Ib && Xb,
          KeysAbove: eb
        }),
        children: [(0, Vb.jsxs)("div", {
          className: mb()("HotBar", {
            HoverDisabled: Ab
          }),
          children: [Ib && (0, Vb.jsxs)(Vb.Fragment, {
            children: [(0, Vb.jsx)(Kb, {
              useFullInventory: sb,
              inventoryOpen: nb
            }), (0, Vb.jsx)(Gb, {
              direction: "Previous",
              onPress: () => {
                rb(-1)
              }
            })]
          }), !Ib && (0, Vb.jsxs)(Vb.Fragment, {
            children: [(0, Vb.jsx)(Zb, {}), (0, Vb.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, Vb.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((bb, cb) => (0, Vb.jsx)(Qb.b, {
              idx: cb,
              draggedInfo: Sb,
              specialItemInfo: Rb,
              craftFlyHoldbackInfo: (0, ub.h)(jb, cb),
              setHovered: vb(cb),
              pointerDown: Fb(cb),
              pointerUp: xb(cb),
              variation: ob,
              isSelected: cb === Ob,
              hotbarHighlighted: !0 === (null === Tb || void 0 === Tb ? void 0 : Tb.includes(cb)),
              hoverDisabled: Ab,
              showNumber: Nb && !Ib
            }, cb)))
          }), Ib && (0, Vb.jsx)(Gb, {
            direction: "Next",
            onPress: () => {
              rb(1)
            }
          }), !Ib && (0, Vb.jsxs)(Vb.Fragment, {
            children: [(0, Vb.jsx)("div", {
              className: "HotBarFiller"
            }), (0, Vb.jsx)("div", {
              className: mb()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !sb
              }),
              onPointerDown: () => {
                fb.j.QQ("toggleMenu", "inventory")
              },
              children: (0, Vb.jsx)(db, {})
            })]
          })]
        }), (0, Vb.jsx)(Lb, {
          slotIdx: Ob
        })]
      })
    }));

    function Gb(bb) {
      let {
        direction: cb,
        onPress: sb
      } = bb;
      return (0, Vb.jsx)("div", {
        className: mb()("HotBarArrow", cb),
        ...ib.d,
        children: (0, Vb.jsx)(Tb.b, {
          icon: "Previous" === cb ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: sb
        })
      })
    }
    const Kb = (0, kb.memo)((function(bb) {
        let {
          useFullInventory: cb,
          inventoryOpen: sb
        } = bb;
        const Wb = (0, Ub.d)("maxAuraLevel"),
          ab = (0, kb.useRef)(null);
        return function(bb, cb, sb) {
          (0, kb.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", cb), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [cb]), (0, kb.useLayoutEffect)((() => {
            const cb = bb.current.closest(".BottomMiddleElements");
            return cb.classList.toggle("TouchInventoryOpen", sb), () => {
              cb.classList.remove("TouchInventoryOpen")
            }
          }), [bb, sb])
        }(ab, (0, Ib.b)(), sb), (0, Vb.jsxs)("div", {
          ref: ab,
          className: mb()("TouchInventoryKeys", {
            NoAuraBar: 0 === Wb,
            InventoryOpen: sb
          }),
          children: [(0, Vb.jsx)(Zb, {
            touchKey: !0
          }), (0, Vb.jsx)("div", {
            className: mb()("TouchInventoryKey BagKey", {
              Hidden: !cb
            }),
            ...ib.d,
            children: (0, Vb.jsx)(db, {
              touchKey: !0
            })
          })]
        })
      })),
      Zb = (0, kb.memo)((function(bb) {
        let {
          touchKey: cb = !1
        } = bb;
        const sb = (0, Ib.b)();
        return (0, Vb.jsx)("div", {
          className: cb ? mb()("TouchInventoryKey ShopKey", {
            Hidden: !sb
          }) : mb()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !sb
          }),
          ...cb ? ib.d : {},
          children: (0, Vb.jsx)(Tb.b, {
            icon: (0, Hb.ec)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              sb && Yb.d.set({
                openEverythingMenuName: lb.r.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function zb(bb) {
      let {
        player: cb
      } = bb;
      return cb.some((bb => null !== bb && Hb.Wc.includes(bb.name)))
    }

    function qb(bb) {
      bb.creative || Xb.h.getItem("LogInInventoryRedDotTutorialComplete") || (zb(bb) ? (fb.j.QQ("RedDotOpenInventoryIcon", !0), fb.j.QQ("TouchTutorialOpenInventoryIcon", !0)) : (fb.j.QQ("RedDotOpenInventoryIcon", !1), fb.j.QQ("TouchTutorialOpenInventoryIcon", !1)))
    }
    const db = (0, kb.memo)((function(bb) {
      let {
        touchKey: cb = !1
      } = bb;
      const {
        backpackPointerRequested: sb
      } = (0, Yb.p)(["backpackPointerRequested"]);
      (0, kb.useEffect)((() => {
        qb(hb.gameBridge.latest("inventory"))
      }), []), (0, Cb.c)("inventory", qb);
      const Wb = (0, gb.k)();
      return (0, Mb.f)("toggleMenu", (bb => {
        Wb.shown && (null !== bb && void 0 !== bb && bb.startsWith("inventory") && zb(hb.gameBridge.latest("inventory")) ? (Xb.h.setItem("LogInInventoryRedDotTutorialComplete", !0), fb.j.QQ("RedDotOpenInventoryIcon", !1), fb.j.QQ("TouchTutorialOpenInventoryIcon", !1)) : "shop" === bb && fb.j.QQ("showShopTouchTutorial", !1))
      })), cb ? (0, Vb.jsx)(Tb.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          fb.j.QQ("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: sb,
        touchIconPosition: "topleft"
      }) : (0, Vb.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          fb.j.QQ("toggleMenu", "inventory")
        },
        children: (0, Vb.jsx)(Tb.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: bb => {
            fb.j.QQ("toggleMenu", "inventory"), bb.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: sb,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36180: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Qb,
      e: () => mb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1867),
      Ub = sb(1858),
      Ib = sb(1870),
      Hb = sb(1912),
      fb = sb(36188),
      Mb = sb(8937),
      Xb = sb(1371),
      nb = sb(1087);
    const mb = (bb, cb, sb) => {
      let kb = cb,
        Wb = !1;
      for (const ab of sb)(null === ab || void 0 === ab ? void 0 : ab.idx) === bb && (Wb = !0, kb > 0 && (kb -= ab.amount));
      return {
        displayedAmt: kb,
        shown: !Wb || kb > 0
      }
    };
    const lb = bb => {
        let {
          idx: cb
        } = bb;
        return (0, Xb.l)() ? null : (0, nb.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: cb < 9 ? cb + 1 : 0
        })
      },
      Qb = (0, kb.memo)((function(bb) {
        var cb, sb, kb;
        let {
          idx: Wb,
          setHovered: Xb,
          pointerDown: Qb,
          pointerUp: eb,
          draggedInfo: Cb,
          specialItemInfo: Nb,
          craftFlyHoldbackInfo: Vb,
          defaultIconB64: Lb = null,
          variation: ub,
          isSelected: Yb = !1,
          hotbarHighlighted: hb = !1,
          hoverDisabled: Jb = !1,
          showNumber: gb = !1,
          showNewDot: Bb = !1
        } = bb;
        const tb = (0, Hb.e)("inventory", (bb => Wb === fb.e ? null : (0, Mb.m)(bb, Wb)));
        let yb, Pb, Db, Eb;
        if (Wb === fb.e) Nb && (yb = Nb.name, Db = Nb.amount, Eb = Nb.attributes);
        else if (tb) {
          var ib;
          yb = tb.name, Pb = tb.icon, Db = null !== (ib = tb.amount) && void 0 !== ib ? ib : 0, Eb = tb.attributes
        }
        const Ob = null === (cb = Eb) || void 0 === cb || null === (sb = cb.customAttributes) || void 0 === sb ? void 0 : sb.enchantmentTier,
          Gb = (0, Tb.i)(Eb),
          {
            displayedAmt: Kb,
            shown: Zb
          } = mb(Wb, Db, [Cb, Nb, Vb]),
          zb = yb && Zb,
          qb = void 0 !== ub && function(bb, cb) {
            const {
              enchantable: sb,
              salvageable: kb
            } = Ib.gameBridge.latest("stationItems");
            return "Enchanting Table" === bb ? !0 === sb[cb] : "Salvaging Table" === bb && !0 === kb[cb]
          }(ub, yb);
        return (0, nb.jsxs)("div", {
          className: ab()("InvenItem", {
            Highlighted: zb && qb,
            Selected: Yb,
            HotbarHighlighted: hb,
            HoverDisabled: Jb
          }),
          onPointerEnter: () => {
            null === Xb || void 0 === Xb || Xb(!0)
          },
          onPointerLeave: () => {
            null === Xb || void 0 === Xb || Xb(!1)
          },
          onPointerDown: Qb,
          onPointerUp: eb,
          "data-inven-idx": Wb,
          children: [zb && (0, nb.jsx)(Ub.d, {
            itemName: null !== (kb = Pb) && void 0 !== kb ? kb : yb,
            amount: Kb,
            enchantmentTier: Ob,
            bar: Gb
          }), zb && Bb && (0, nb.jsx)("div", {
            className: "InvenItemNewDot"
          }), gb && (0, nb.jsx)(lb, {
            idx: Wb
          }), Lb && !zb && (0, nb.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Lb})`
            }
          })]
        })
      }))
  },
  8924: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(344),
      Wb = sb(8930);

    function ab(bb, cb, sb) {
      const ab = Object.entries(cb).sort(((bb, cb) => cb[1] - bb[1])),
        Tb = (0, kb.ub)(bb);
      Tb.push(bb ? "\n\n" : "\n");
      for (const [Wb, mb] of ab) {
        var Ub, Ib, Hb;
        const bb = null !== (Ub = null === sb || void 0 === sb || null === (Ib = sb[Wb]) || void 0 === Ib ? void 0 : Ib.icon) && void 0 !== Ub ? Ub : `${Wb} Enchantment`;
        Tb.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Tb.push({
          str: `${Wb} ${null!==(Hb=(0,kb.Q)(mb))&&void 0!==Hb?Hb:mb}\n`
        })
      }
      Tb.push({
        str: "\n"
      });
      for (const [kb, mb] of ab) {
        var fb, Mb, Xb, nb;
        const bb = null !== (fb = null === sb || void 0 === sb || null === (Mb = sb[kb]) || void 0 === Mb ? void 0 : Mb.icon) && void 0 !== fb ? fb : `${kb} Enchantment`,
          cb = null !== (Xb = null === sb || void 0 === sb || null === (nb = sb[kb]) || void 0 === nb ? void 0 : nb.description) && void 0 !== Xb ? Xb : (0, Wb.n)(kb);
        Tb.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Tb.push({
          str: cb,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Tb.push({
          str: "\n"
        })
      }
      return Tb
    }
  },
  36188: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Wb
    });
    const kb = -1,
      Wb = -2
  },
  8937: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb,
      g: () => Cb,
      i: () => Qb,
      m: () => Ib,
      o: () => eb,
      q: () => fb,
      u: () => Xb,
      v: () => lb,
      z: () => Mb
    });
    var kb = sb(334),
      Wb = sb(628),
      ab = sb(344),
      Tb = sb(4011),
      Ub = sb(8924);

    function Ib(bb, cb) {
      var sb;
      let {
        player: kb,
        chestOrCreative: Wb
      } = bb;
      var ab;
      return cb < kb.length ? null !== (ab = kb[cb]) && void 0 !== ab ? ab : null : null !== (sb = Wb[cb - kb.length]) && void 0 !== sb ? sb : null
    }

    function Hb(bb) {
      var cb;
      return null !== (cb = bb.amount) && void 0 !== cb ? cb : 0
    }

    function fb(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Mb(bb) {
      return !!bb.shiftKey
    }

    function Xb(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const nb = new Set,
      mb = 50;

    function lb(bb, cb) {
      var sb;
      const kb = null === (sb = bb[cb]) || void 0 === sb ? void 0 : sb.displayName;
      return (0, Wb.L)(kb) ? "string" !== typeof cb ? "" : (!nb.has(cb) && nb.size < mb && (nb.add(cb), console.warn(`No item called "${cb}", so its hover shows the name as given`)), cb) : kb
    }

    function Qb(bb, cb, sb) {
      var Ib, Hb, fb, Mb, Xb, nb, mb, Qb, eb, Cb, Nb, Vb, Lb, ub;
      const Yb = bb.attributes,
        hb = null !== (Ib = null === (Hb = cb[bb.name]) || void 0 === Hb ? void 0 : Hb.rootName) && void 0 !== Ib ? Ib : bb.name,
        Jb = null !== (fb = null !== (Mb = Yb.customDisplayName) && void 0 !== Mb ? Mb : null === (Xb = cb[bb.name]) || void 0 === Xb ? void 0 : Xb.displayName) && void 0 !== fb ? fb : lb(cb, hb);
      let gb = Jb;
      const Bb = null === (nb = Yb.customAttributes) || void 0 === nb ? void 0 : nb.enchantmentTier;
      Bb && (gb = (0, ab.ub)(Jb, {
        colour: ab.nb[Bb]
      }));
      const tb = null !== (mb = null !== (Qb = null !== (eb = function(bb, cb) {
        var sb;
        if (void 0 === bb || null !== (sb = cb.customAttributes) && void 0 !== sb && sb.author) return bb;
        const Wb = (0, kb.ic)(bb);
        return Wb.every((bb => "string" === typeof bb)) ? bb : Wb.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Yb.customDescription, Yb)) && void 0 !== eb ? eb : null === (Cb = cb[bb.name]) || void 0 === Cb ? void 0 : Cb.description) && void 0 !== Qb ? Qb : null === (Nb = cb[hb]) || void 0 === Nb ? void 0 : Nb.description) && void 0 !== mb ? mb : "";
      let yb = tb;
      if (null !== (Vb = Yb.customAttributes) && void 0 !== Vb && Vb.enchantments) yb = (0, Ub.e)(tb, Yb.customAttributes.enchantments, Yb.customAttributes.enchantmentData);
      else if (sb[hb]) yb = (0, ab.ub)(tb), yb.push({
        str: "\n"
      }), yb.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Lb = Yb.customAttributes) && void 0 !== Lb && Lb.mobSettings) {
        var Pb, Db;
        const bb = Yb.customAttributes.mobSettings;
        var Eb, ib;
        if (yb = [], (0, Wb.L)(Yb.customAttributes.health) || (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: Yb.customAttributes.health.toString()
          }), (0, Wb.L)(bb.maxHealth) || (yb.push({
            str: "/"
          }), yb.push({
            str: bb.maxHealth.toString()
          }))), !(0, Wb.L)(bb.attackDamage) && bb.attackDamage > 0 && (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: bb.attackDamage.toString()
          })), !(0, Wb.L)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Wb.L)(bb.baseRunningSpeed) || (yb.push({
            str: "\n"
          }), yb.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: " "
          }), yb.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) yb.push({
          str: "\n"
        }), yb.push({
          str: {
            translationKey: "general:has"
          }
        }), yb.push({
          str: " "
        }), yb.push({
          icon: null !== (Eb = null === (ib = bb.tameInfo) || void 0 === ib ? void 0 : ib.saddleItemName) && void 0 !== Eb ? Eb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (yb.push({
            str: "\n"
          }), yb.push({
            str: "\n"
          }), bb.petInfo && null !== (Pb = bb.tameInfo) && void 0 !== Pb && Pb.supportsFriendship) {
          const cb = Tb.b.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of cb) yb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          yb.push({
            str: "\n"
          });
          const sb = Tb.b.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Tb.b.hungerLevelIcons[sb]) yb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          yb.push({
            str: " "
          }), yb.push({
            str: Tb.b.hungerLevelTranslations[sb],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (Db = bb.tameInfo) && void 0 !== Db && Db.supportsFriendship) {
          var Ob, Gb;
          let cb = null !== (Ob = bb.tameInfo.likedFoods) && void 0 !== Ob ? Ob : [];
          yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Superliked]
            }
          }), yb.push({
            str: " "
          }), null !== (Gb = bb.petInfo) && void 0 !== Gb && Gb.superlikedFoodKnown ? (yb.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), cb = cb.filter((cb => cb !== bb.petInfo.superlikedFood))) : yb.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Liked]
            }
          }), yb.push({
            str: " "
          });
          for (const bb of cb) yb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Neutral]
            }
          }), yb.push({
            str: " "
          });
          for (const sb of null !== (Kb = bb.tameInfo.neutralFoods) && void 0 !== Kb ? Kb : []) {
            var Kb;
            yb.push({
              icon: sb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          yb.push({
            str: "\n"
          }), yb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Tb.b.feedTextColours[Tb.b.MobFoodType.Disliked]
            }
          }), yb.push({
            str: " "
          });
          for (const sb of null !== (Zb = bb.tameInfo.dislikedFoods) && void 0 !== Zb ? Zb : []) {
            var Zb;
            yb.push({
              icon: sb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        yb.length > 0 ? (yb.shift(), yb.unshift(...(0, ab.ub)(tb))) : yb = (0, ab.ub)(tb)
      }
      return {
        name: gb,
        desc: yb,
        fontStyle: null !== (ub = Yb.customAttributes) && void 0 !== ub && ub.author ? "italic" : "normal"
      }
    }

    function eb(bb, cb, sb, kb) {
      const Wb = Ib(bb, sb),
        ab = Ib(bb, kb);
      if (!Wb) return !1;
      const Tb = cb[Wb.name].armourReduction,
        Ub = cb[ab.name].armourReduction;
      if (Ub === Tb) {
        var Hb, fb, Mb, Xb;
        const bb = null !== (Hb = null === (fb = Wb.attributes.customAttributes) || void 0 === fb ? void 0 : fb.enchantmentTier) && void 0 !== Hb ? Hb : "Tier 0",
          cb = null !== (Mb = null === (Xb = ab.attributes.customAttributes) || void 0 === Xb ? void 0 : Xb.enchantmentTier) && void 0 !== Mb ? Mb : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(cb.replace("Tier ", ""))
      }
      return Tb > Ub
    }

    function Cb(bb) {
      let cb;
      if ("number" === typeof bb) {
        const sb = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!sb) return null;
        cb = sb.getBoundingClientRect()
      } else cb = bb.getBoundingClientRect();
      return {
        x: cb.left + cb.width / 2,
        y: cb.top + cb.height / 2
      }
    }
  },
  8829: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => nb,
      h: () => mb,
      i: () => lb
    });
    var kb = sb(1431),
      Wb = sb(64),
      ab = sb(1302),
      Tb = sb(4270),
      Ub = sb(2262),
      Ib = sb(1197),
      Hb = sb(117),
      fb = sb(1912),
      Mb = sb(1327),
      Xb = sb(1087);

    function nb(bb) {
      let {
        show: cb,
        onClose: sb
      } = bb;
      const {
        requestedGameNameWithVariation: kb,
        lobbyName: Wb,
        shownLobbyName: ab
      } = (0, fb.f)("connectedGame"), Ib = (0, Ub.c)(kb, Wb, !1);
      return Hb.featureFlags.canUseInviteLinks && (0, Xb.jsx)(Tb.c, {
        show: cb,
        close: sb,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Xb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Xb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Xb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Xb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Ib ? (0, Xb.jsx)(Mb.d, {}) : Ib, (0, Xb.jsx)("br", {}), "Lobby Name: ", ab, (0, Xb.jsx)("br", {}), (0, Xb.jsx)("br", {}), (0, Xb.jsx)("br", {}), (0, Xb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Xb.jsx)(mb, {})]
        })
      })
    }

    function mb() {
      var bb;
      const {
        t: cb
      } = (0, Ib.E)(), sb = null !== (bb = lb(Hb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...", [ab, Tb] = (0, Wb.useState)(0), [Ub, fb] = (0, Wb.useReducer)((bb => bb + 1), 0);
      return (0, Wb.useEffect)((() => {
        const bb = setTimeout((() => {
          fb()
        }), 1100);
        return () => {
          clearTimeout(bb)
        }
      }), [ab]), Hb.featureFlags.canUseInviteLinks && (0, Xb.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Xb.jsx)("div", {
          className: "InviteLinkInner",
          children: sb
        }), (0, Xb.jsx)(kb.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(sb).catch((bb => {
              console.error("Failed to copy invite link:", bb)
            })), Tb(Date.now())
          },
          disabled: Date.now() - ab < 1e3,
          children: Date.now() - ab < 1e3 ? cb("general:copied") : cb("general:copy")
        })]
      })
    }

    function lb(bb) {
      const [cb, sb] = (0, Wb.useState)(null);
      return (0, Wb.useEffect)((() => {
        if (!bb) return;
        let cb = !0;
        return (0, ab.x)().then((bb => {
          cb && sb(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          cb = !1
        }
      }), [bb]), cb
    }
  },
  36576: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => hb
    });
    var kb = sb(64),
      Wb = sb(2337),
      ab = sb(1839),
      Tb = sb(613),
      Ub = sb(26),
      Ib = sb(1033),
      Hb = sb.n(Ib),
      fb = sb(36206),
      Mb = sb(2445),
      Xb = sb(36210),
      nb = sb(2469),
      mb = sb(2453),
      lb = sb(3392),
      Qb = sb(19),
      eb = sb(1965),
      Cb = sb(2279),
      Nb = sb(1235),
      Vb = sb(4622),
      Lb = sb(1912),
      ub = sb(117),
      Yb = sb(1087);
    const hb = (0, kb.memo)((function() {
      const bb = (0, Wb.d)("lobbyLeaderboardInfo"),
        cb = (0, Lb.f)("players"),
        sb = (0, Lb.f)("lobbyLeaderboardRows"),
        Ub = (0, Lb.f)("hiddenPlayerNames"),
        Ib = (0, kb.useRef)(null),
        [Hb, fb] = (0, kb.useReducer)((bb => bb + 1), 0);
      return (0, kb.useEffect)((() => (0, eb.d)((() => {
        fb()
      }))), []), (0, Yb.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, Yb.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!bb) return (0, Yb.jsx)(Yb.Fragment, {});
            const kb = JSON.parse(JSON.stringify(bb)),
              Wb = [...cb.ids],
              Hb = {},
              fb = {};
            for (const bb of Wb) {
              var Mb, nb;
              Hb[bb] = null === (Mb = sb[bb]) || void 0 === Mb ? void 0 : Mb.colour;
              const cb = null === (nb = sb[bb]) || void 0 === nb ? void 0 : nb.values;
              cb && (fb[bb] = {
                ...cb
              })
            }
            const mb = Object.keys(kb);
            mb.sort(((bb, cb) => kb[bb].sortPriority - kb[cb].sortPriority)), Wb.sort(((bb, cb) => {
              if (!fb[bb] || !fb[cb]) return 0;
              for (const sb of mb) {
                const Wb = fb[bb][sb],
                  ab = fb[cb][sb];
                let Tb = 0;
                if ("string" == typeof Wb && "string" == typeof ab ? Tb = Wb.localeCompare(ab) : "number" == typeof Wb && "number" == typeof ab ? Tb = Wb - ab : "number" == typeof Wb && "string" == typeof ab ? Tb = 1 : "string" == typeof Wb && "number" == typeof ab && (Tb = -1), Tb) return Tb * ("ascending" === kb[sb].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const bb of Wb) {
              var lb, Qb, Lb;
              const {
                name: kb,
                ranks: Wb,
                cosmetics: ab
              } = cb.byId[bb], Ub = [], Ib = null !== (lb = null === (Qb = sb[bb]) || void 0 === Qb || null === (Lb = Qb.tags) || void 0 === Lb ? void 0 : Lb.flatMap((bb => 0 === bb.length ? bb : [...bb, String.fromCharCode(8198)]))) && void 0 !== lb ? lb : [];
              Ub.push(...Ib), Ub.push(...(0, Nb.t)(Wb, kb, (null === ab || void 0 === ab ? void 0 : ab.nameColour) === Tb.c || null === ab || void 0 === ab ? void 0 : ab.nameColour)), fb[bb] ??= {}, fb[bb].name = Ub
            }

            function ub(bb, sb) {
              if (fb[bb] && void 0 !== fb[bb][sb]) {
                if ("name" === sb) {
                  const {
                    name: kb,
                    cosmetics: Wb
                  } = cb.byId[bb];
                  return (0, Yb.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Wb && (0, Yb.jsx)(Cb.b, {
                      cosmetics: Wb
                    }), " ", (0, Yb.jsx)(ab.d, {
                      text: fb[bb][sb],
                      friendBadgeFor: (0, eb.e)(kb, Ub) ? kb : void 0
                    })]
                  })
                }
                return (0, Yb.jsx)(ab.d, {
                  text: fb[bb][sb]
                })
              }
              return ""
            }
            const hb = Object.keys(kb).filter((bb => !0 !== kb[bb].hidden)).map((bb => {
              var cb;
              return {
                key: bb,
                header: (0, Yb.jsx)(ab.d, {
                  text: null !== (cb = kb[bb].displayName) && void 0 !== cb ? cb : ""
                })
              }
            }));
            return (0, Yb.jsx)("div", {
              ref: Ib,
              className: "LobbyLeaderboard",
              children: (0, Yb.jsx)(Vb.e, {
                columns: hb,
                rows: Wb,
                getRowKey: bb => bb,
                renderRow: bb => {
                  const sb = bb !== cb.localId;
                  return (0, Yb.jsx)(Jb, {
                    playerId: bb,
                    playerName: cb.byId[bb].name,
                    isOtherPlayer: sb,
                    opensProfileCard: (0, Xb.h)(sb, cb.byId[bb].name, Ub),
                    lobbyLeaderboardInfo: kb,
                    getPlayerValue: ub,
                    playerColors: Hb
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Jb(bb) {
      let {
        playerId: cb,
        playerName: sb,
        isOtherPlayer: Wb,
        opensProfileCard: ab,
        lobbyLeaderboardInfo: Tb,
        getPlayerValue: Ib,
        playerColors: eb
      } = bb;
      const Cb = (0, kb.useRef)(null);
      (0, kb.useEffect)((() => () => {
        Mb.d.closeIfOwner(Cb)
      }), []);
      const Nb = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Ub.j.QQ("OpenReportMenu", {
              playerEId: cb,
              playerName: sb,
              jT: null,
              serverChatMsgId: null
            })
          }
        },
        Vb = () => ({
          ...(0, Xb.d)(cb, sb),
          showLocation: !1,
          status: null,
          extraActions: [Nb],
          friendRequestSource: "leaderboard"
        });
      return (0, Yb.jsxs)("tr", {
        ref: Cb,
        "data-pad-focusable": ab || void 0,
        [Mb.h]: ab || void 0,
        onClick: ab ? () => {
          var bb;
          Mb.d.toggle(Cb, {
            ...Vb(),
            anchor: null !== (bb = Cb.current.querySelector(".PlayerPfpAndName")) && void 0 !== bb ? bb : Cb.current
          })
        } : void 0,
        onContextMenu: ab ? bb => {
          (0, nb.g)(Cb, bb, Vb(), Qb.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: ab ? bb => {
          (0, mb.e)(bb, (() => (0, Xb.d)(cb, sb).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Tb).map((bb => !0 === Tb[bb].hidden ? null : (0, Yb.jsxs)("td", {
          className: Hb()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Wb
          }),
          children: [(0, Yb.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Ib(cb, bb)
          }), (0, Yb.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: eb[cb]
            }
          })]
        }, bb))), Wb && !ab && (0, Yb.jsx)(fb.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Cb,
          options: [{
            icon: Nb.icon,
            text: Nb.text,
            onPointerDown: Nb.onClick
          }, ...null === sb || ub.featureFlags.useSocialFeatures ? [] : (0, lb.e)(null, sb)]
        })]
      })
    }
  },
  4484: (bb, cb, sb) => {
    sb.d(cb, {
      f: () => Cb,
      c: () => eb
    });
    var kb = sb(64),
      Wb = sb(1423),
      ab = sb(1839),
      Tb = sb(4486),
      Ub = sb(1087);
    const Ib = (0, kb.memo)((function(bb) {
      let {
        initialParameters: cb
      } = bb;
      const sb = (0, kb.useRef)(null),
        Wb = (0, kb.useRef)(null),
        Ib = (0, kb.useRef)(0),
        Hb = (0, kb.useRef)(null),
        fb = cb.description,
        Mb = cb.ob,
        {
          scale: Xb,
          rotation: nb
        } = null !== cb && void 0 !== cb ? cb : {},
        mb = (0, Tb.f)();
      return (0, kb.useEffect)((() => {
        const bb = mb.onFrame((() => {
          const bb = mb.getState();
          if (!bb.isActive || !sb.current || !Wb.current) return;
          const cb = bb.state;
          if (sb.current.value = cb.progress, cb.clickCount > Ib.current) {
            Ib.current = cb.clickCount;
            const bb = Wb.current;
            bb.classList.add("pulse"), Hb.current = setTimeout((() => {
              bb.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Hb.current), bb()
        }
      }), [mb]), (0, Ub.jsx)(Ub.Fragment, {
        children: (0, Ub.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Xb && {
              "--scale": Xb
            },
            ...null !== nb && {
              "--rotation": `${nb}deg`
            }
          },
          children: [(0, Ub.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: sb
          }), (0, Ub.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Wb,
            children: (0, Ub.jsx)(ab.d, {
              text: [{
                icon: Mb
              }]
            })
          }), (0, Ub.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Ub.jsx)(ab.d, {
              text: fb
            })
          })]
        })
      })
    }));
    var Hb = sb(1033),
      fb = sb.n(Hb);
    const Mb = 2 * Math.PI * 90,
      Xb = (0, kb.memo)((function(bb) {
        let {
          initialParameters: cb
        } = bb;
        const sb = (0, kb.useRef)(null),
          Wb = (0, kb.useRef)(null),
          Ib = (0, kb.useRef)(null),
          Hb = cb.label,
          Xb = cb.icon,
          nb = cb.Fb,
          {
            scale: mb,
            rotation: lb,
            xb: Qb
          } = null !== cb && void 0 !== cb ? cb : {},
          eb = (0, Tb.f)();
        return (0, kb.useEffect)((() => {
          const bb = eb.onFrame((() => {
            var bb, cb;
            const kb = eb.getState();
            if (!kb.isActive || !Wb.current) return;
            const ab = kb.state,
              Tb = null !== (bb = ab.timeRemaining) && void 0 !== bb ? bb : 0,
              Ub = null !== (cb = ab.Rb) && void 0 !== cb ? cb : 1,
              Hb = Mb * (1 - Tb / Ub);
            Wb.current.style.strokeDashoffset = `${Hb}`, sb.current && (sb.current.style.opacity = Tb > 0 ? "1" : "0"), Ib.current && nb && (Ib.current.textContent = `${(Tb/1e3).toFixed(1)}s`)
          }));
          return () => {
            bb()
          }
        }), [eb, nb]), (0, Ub.jsxs)("div", {
          className: "QTETimedClick",
          ref: sb,
          style: {
            ...null !== mb && {
              "--scale": mb
            },
            ...null !== lb && {
              "--rotation": `${lb}deg`
            }
          },
          children: [(0, Ub.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Ub.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Ub.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Ub.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Mb,
                ref: Wb
              })]
            }), (0, Ub.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Ub.jsx)(ab.d, {
                text: [{
                  icon: Xb
                }],
                className: fb()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: Qb
                })
              })
            })]
          }), (0, Ub.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Ub.jsx)(ab.d, {
              text: Hb,
              className: "QTETimedClickLabelText"
            }), nb && (0, Ub.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Ib
            })]
          })]
        })
      })),
      nb = (0, kb.memo)((function(bb) {
        let {
          initialParameters: cb
        } = bb;
        const sb = (0, kb.useRef)(null),
          Wb = (0, kb.useRef)(null),
          Ib = (0, kb.useRef)(null),
          Hb = (0, kb.useRef)(!1),
          fb = cb.description,
          Mb = null === cb || void 0 === cb ? void 0 : cb.icon,
          Xb = (0, Tb.f)();
        return (0, kb.useEffect)((() => {
          const bb = Xb.onFrame((() => {
            const bb = Xb.getState();
            if (!bb.isActive) return;
            const cb = bb.state;
            if (sb.current) {
              const bb = 100 * (cb.catchZonePosition - cb.pb / 2);
              sb.current.style.left = `${bb}%`, sb.current.style.width = 100 * cb.pb + "%", cb.isCatching !== Hb.current && (Hb.current = cb.isCatching, cb.isCatching ? sb.current.classList.add("catching") : sb.current.classList.remove("catching"))
            }
            Wb.current && (Wb.current.style.left = 100 * cb.moverPosition + "%"), Ib.current && (Ib.current.value = cb.progress)
          }));
          return () => {
            bb()
          }
        }), [Xb]), (0, Ub.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Ub.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Ub.jsx)(ab.d, {
              text: fb
            })
          }), (0, Ub.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Ib
          }), (0, Ub.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Ub.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: sb
            }), (0, Ub.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Wb,
              children: (0, Ub.jsx)("span", {
                children: Mb && (0, Ub.jsx)(ab.d, {
                  text: [{
                    icon: Mb,
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
    var mb = sb(628);
    const lb = (0, kb.memo)((function(bb) {
        let {
          initialParameters: cb
        } = bb;
        const sb = (0, kb.useRef)(null),
          Wb = cb.label,
          Ib = cb.Uc,
          {
            icon: Hb,
            scale: fb,
            rotation: Mb
          } = null !== cb && void 0 !== cb ? cb : {},
          Xb = 100 * (.5 - Ib / 2),
          nb = 100 * Ib,
          lb = (0, Tb.f)();
        return (0, kb.useEffect)((() => {
          const bb = lb.onFrame((() => {
            const bb = lb.getState();
            if (!bb.isActive || !sb.current) return;
            const cb = bb.state;
            sb.current.style.left = 100 * cb.markerPosition + "%"
          }));
          return () => {
            bb()
          }
        }), [lb]), (0, Ub.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, mb.L)(fb) && {
              "--scale": fb
            },
            ...!(0, mb.L)(Mb) && {
              "--rotation": `${Mb}deg`
            }
          },
          children: [Hb && (0, Ub.jsx)(ab.d, {
            text: [{
              icon: Hb
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Ub.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Ub.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Xb}%`,
                width: `${nb}%`
              }
            }), (0, Ub.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: sb
            })]
          }), (0, Ub.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Ub.jsx)(ab.d, {
              text: Wb
            })
          })]
        })
      })),
      Qb = (0, kb.memo)((function(bb) {
        let {
          initialParameters: cb
        } = bb;
        const sb = (0, kb.useRef)(null),
          [Wb, Ib] = (0, kb.useState)((() => new Array(cb.Hc).fill("pending"))),
          [Hb, fb] = (0, kb.useState)((() => {
            const bb = cb.Xc;
            return (0, mb.L)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
          })),
          Mb = cb.label,
          {
            icon: Xb
          } = cb,
          nb = (0, kb.useRef)(0),
          lb = (0, kb.useRef)(0),
          Qb = (0, kb.useRef)([]),
          eb = (0, Tb.f)();
        return (0, kb.useEffect)((() => {
          const bb = eb.onFrame((() => {
            const bb = eb.getState();
            if (!bb.isActive || !sb.current) return;
            const cb = bb.state,
              kb = 30 + 60 * cb.outerCircleProgress;
            if (sb.current.setAttribute("r", String(kb)), !0 === cb.lastClickResult && cb.successes > nb.current) {
              sb.current.classList.remove("QTERhythmClickOuterCircle--miss"), sb.current.classList.add("QTERhythmClickOuterCircle--hit");
              const bb = setTimeout((() => {
                var bb;
                null === (bb = sb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              Qb.current.push(bb)
            } else if (!1 === cb.lastClickResult && cb.misses > lb.current) {
              sb.current.classList.remove("QTERhythmClickOuterCircle--hit"), sb.current.classList.add("QTERhythmClickOuterCircle--miss");
              const bb = setTimeout((() => {
                var bb;
                null === (bb = sb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              Qb.current.push(bb)
            }
            cb.successes === nb.current && cb.misses === lb.current || (nb.current = cb.successes, lb.current = cb.misses, Ib((bb => {
              const sb = [...bb];
              for (let kb = 0; kb < cb.Hc; kb++) sb[kb] = kb < cb.successes ? "success" : "pending";
              return sb
            })), fb((bb => {
              if (0 === bb.length) return bb;
              const sb = [...bb];
              for (let kb = 0; kb < sb.length; kb++) sb[kb] = kb < cb.misses ? "miss" : "pending";
              return sb
            })))
          }));
          return () => {
            bb();
            for (const bb of Qb.current) clearTimeout(bb);
            Qb.current = []
          }
        }), [eb]), (0, Ub.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Ub.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Wb.map(((bb, cb) => (0, Ub.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, cb)))
          }), (0, Ub.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Ub.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Ub.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Ub.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: sb
              })]
            }), Xb && (0, Ub.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Ub.jsx)(ab.d, {
                text: [{
                  icon: Xb
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Hb.length > 0 && (0, Ub.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Hb.map(((bb, cb) => (0, Ub.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, cb)))
          }), (0, Ub.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Ub.jsx)(ab.d, {
              text: Mb
            })
          })]
        })
      }));

    function eb(bb) {
      let {
        qte: cb
      } = bb;
      switch (cb.type) {
        case "progressBar":
          return (0, Ub.jsx)(Ib, {
            initialParameters: cb.parameters
          });
        case "timedClick":
          return (0, Ub.jsx)(Xb, {
            initialParameters: cb.parameters
          });
        case "gravityBar":
          return (0, Ub.jsx)(nb, {
            initialParameters: cb.parameters
          });
        case "precisionBar":
          return (0, Ub.jsx)(lb, {
            initialParameters: cb.parameters
          });
        case "rhythmClick":
          return (0, Ub.jsx)(Qb, {
            initialParameters: cb.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Cb = (0, kb.memo)((function() {
      const [bb, cb] = (0, kb.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Wb.f)("qteStateUpdated", (bb => {
        cb(bb)
      })), bb.isActive && bb.type ? (0, Ub.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Ub.jsx)(eb, {
          qte: bb
        })
      }) : null
    }))
  },
  4486: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      f: () => Ib
    });
    var kb = sb(64),
      Wb = sb(1291),
      ab = sb(4493);
    const Tb = {
        getState: () => ab.c.getCurrentState(),
        onFrame: Wb.k
      },
      Ub = (0, kb.createContext)(Tb);

    function Ib() {
      return (0, kb.useContext)(Ub)
    }
  },
  8910: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Hb
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1912),
      Ub = sb(1087);

    function Ib(bb) {
      const cb = Math.floor(bb / 3600),
        sb = Math.floor(bb % 3600 / 60),
        kb = Math.floor(bb % 60),
        Wb = `${sb.toString().padStart(2,"0")}:${kb.toString().padStart(2,"0")}`;
      return cb > 0 ? `${cb}:${Wb}` : Wb
    }
    const Hb = (0, kb.memo)((function(bb) {
      let {
        className: cb
      } = bb;
      const {
        recording: sb,
        seconds: kb
      } = (0, Tb.f)("replayRecorder");
      return sb ? (0, Ub.jsxs)("div", {
        className: ab()("RecordingIndicator", cb),
        children: [(0, Ub.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Ub.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Ub.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Ib(kb)
        })]
      }) : null
    }))
  },
  36016: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      g: () => Xb
    });
    var kb = sb(64),
      Wb = sb(1332),
      ab = sb(1197),
      Tb = sb(1327),
      Ub = sb(3263),
      Ib = sb(4638),
      Hb = sb(1087);

    function fb(bb) {
      let {
        loading: cb,
        schematics: sb,
        onSchematicPicked: kb,
        selectedSchematicIdList: Wb = [],
        disableAutoExport: Ib
      } = bb;
      const {
        t: fb
      } = (0, ab.E)();
      return (0, Hb.jsxs)("div", {
        className: "SchematicList",
        children: [cb && (0, Hb.jsx)(Tb.d, {}), !cb && 0 === sb.length && (0, Hb.jsx)("div", {
          className: "NoSchematicsText",
          children: fb("worldBuilder:noSavedSchematic")
        }), !cb && sb.map((bb => (0, Hb.jsx)(Ub.h, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            kb(bb)
          },
          isSelected: Wb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Ib,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Mb(bb) {
      let {
        ownedSchematics: cb,
        currentWorldSchematicId: sb,
        onClose: Wb
      } = bb;
      const {
        t: Tb
      } = (0, ab.E)(), [Ub, Mb] = (0, kb.useState)(null);
      return (0, Hb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Ub && (0, Hb.jsxs)(Hb.Fragment, {
          children: [(0, Hb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Tb("worldBuilder:schematicList")
          }), (0, Hb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Tb("worldBuilder:clickSchematicForOptions")
          }), (0, Hb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Hb.jsx)(fb, {
              loading: !1,
              schematics: cb,
              onSchematicPicked: bb => {
                Mb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Ub && (0, Hb.jsx)(Ib.g, {
          schematic: Ub,
          inSourceWorld: Ub.schematicId === sb,
          onSchematicUpdate: bb => {
            Mb(bb)
          },
          onClose: () => {
            Mb(null), Wb()
          }
        })]
      })
    }

    function Xb(bb) {
      let {
        ownedSchematics: cb,
        currentWorldSchematicId: sb,
        onClose: kb
      } = bb;
      Wb.NotificationProvider.showCustomPopup({
        body: bb => (0, Hb.jsx)(Mb, {
          ownedSchematics: cb,
          currentWorldSchematicId: sb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: kb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36496: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Lb,
      e: () => Vb
    });
    var kb = sb(4039),
      Wb = sb(1423),
      ab = sb(64),
      Tb = sb(6134),
      Ub = sb(4031),
      Ib = sb(1287),
      Hb = sb(1870),
      fb = sb(1839),
      Mb = sb(1431),
      Xb = sb(1197),
      nb = sb(36502),
      mb = sb(1033),
      lb = sb.n(mb),
      Qb = sb(1302),
      eb = sb(1039),
      Cb = sb(1278),
      Nb = sb(1087);
    const Vb = "SleepingOverlay";

    function Lb() {
      const {
        t: bb
      } = (0, Xb.E)(), [cb, sb] = (0, ab.useState)(!1), [mb, Lb] = (0, ab.useState)(null), [Yb, hb] = (0, ab.useState)(1), [Jb, gb] = (0, ab.useState)(!1), [Bb, tb] = (0, ab.useState)(!1), yb = (0, ab.useRef)(0), Pb = (0, ab.useRef)(!1), Db = (0, ab.useRef)(!1), Eb = (0, ab.useRef)(), ib = (0, ab.useRef)(null);

      function Ob() {
        const bb = null !== mb && void 0 !== mb ? mb : "Rested Speed";
        Hb.gameBridge.send("wakeUp", Bb ? bb : null), ib.current = null, sb(!1), Lb(null), hb(1), gb(!1), tb(!1)
      }

      function Gb() {
        return !Jb && (Ob(), !0)
      }
      return (0, Wb.f)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== ib.current && (ib.current = bb, bb === Tb.t.SLEEPING ? (Db.current || (yb.current = Hb.gameBridge.lookup("cameraZoom", null), Db.current = !0), Pb.current = !0, Hb.gameBridge.send("setCameraZoom", 3), sb(!0), hb(function() {
          for (const bb of Hb.gameBridge.lookup("blocksStandingOn", null)) {
            if (nb.d.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (nb.d.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (nb.d.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (Db.current = !1, sb(!1), Lb(null), hb(1)))
      })), (0, ab.useEffect)((() => () => {
        (0, Ib.k)(Vb)
      }), []), (0, ab.useEffect)((() => {
        cb ? (0, Ib.n)(Vb) : ((0, Ib.k)(Vb), Pb.current && (Hb.gameBridge.send("setCameraZoom", yb.current), Pb.current = !1))
      }), [cb]), (0, Cb.o)("overlay", Eb, Gb, cb), (0, Nb.jsx)(kb.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: cb,
        timeout: 300,
        nodeRef: Eb,
        unmountOnExit: !0,
        children: (0, Nb.jsx)("div", {
          ref: Eb,
          onClick: bb => {
            Gb() && bb.stopPropagation()
          },
          children: (0, Nb.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Nb.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Ub.e.map((cb => (0, Nb.jsxs)(ub, {
                restedEffect: cb,
                iU: mb,
                setChosenRestedEffect: Lb,
                children: [(0, Nb.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Nb.jsx)(fb.d, {
                    text: [{
                      icon: cb
                    }]
                  }), Ub.d[cb].shortName]
                }), (0, Nb.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(Ub.d[cb].description, {
                    time: Ub.d[cb].effectLevelDurations[Yb] / 6e4
                  })
                })]
              }, cb)))
            }), (0, Nb.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Nb.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Nb.jsxs)(Mb.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  Bb ? Ob() : (gb(!0), (0, Qb.ab)((() => {
                    gb(!1), tb(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: Jb,
                children: [!Bb && (0, Nb.jsxs)(Nb.Fragment, {
                  children: [(0, Nb.jsx)(eb.b, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), Bb && bb("classicGame:wakeUp")]
              }), (0, Nb.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Nb.jsx)("div", {
                  className: lb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Yb
                  }),
                  children: (0, Nb.jsx)(fb.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Nb.jsx)("div", {
                  className: lb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Yb
                  }),
                  children: (0, Nb.jsx)(fb.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Nb.jsx)("div", {
                  className: lb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Yb
                  }),
                  children: (0, Nb.jsx)(fb.d, {
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
    const ub = (0, ab.memo)((function(bb) {
      let {
        children: cb,
        restedEffect: sb,
        iU: kb,
        setChosenRestedEffect: Wb
      } = bb;
      return sb === kb ? (0, Nb.jsx)(Mb.n, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: cb
      }) : (0, Nb.jsx)(Mb.h, {
        onClick: bb => {
          Wb(sb), bb.stopPropagation()
        },
        children: cb
      })
    }))
  },
  36210: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      h: () => Ib
    });
    var kb = sb(613),
      Wb = sb(1870),
      ab = sb(1629),
      Tb = sb(117),
      Ub = sb(1269);

    function Ib(bb, cb, sb) {
      return Tb.featureFlags.useSocialFeatures && bb && null === (0, Ub.c)(cb, sb)
    }

    function Hb(bb, cb) {
      var sb, Tb;
      const Ub = ab.c.getSocialState().friends.find((bb => bb.name.toLowerCase() === cb.toLowerCase())),
        Ib = Wb.gameBridge.latest("players").byId[bb],
        Hb = void 0 !== Ib && Ib.name === cb,
        fb = Hb && null !== (sb = Ib.cosmetics) && void 0 !== sb ? sb : void 0,
        Mb = Ub && fb ? {
          ...Ub,
          cosmetics: fb
        } : Ub;
      return {
        playerSocialPreview: null !== Mb && void 0 !== Mb ? Mb : {
          isError: !1,
          name: cb,
          ranks: Hb ? [...Ib.ranks] : [],
          cosmetics: null !== fb && void 0 !== fb ? fb : {},
          nameColour: null !== (Tb = null === fb || void 0 === fb ? void 0 : fb.nameColour) && void 0 !== Tb ? Tb : kb.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Ub
      }
    }
  },
  8917: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(4275),
      Wb = sb(4282);

    function ab(bb) {
      let {
        children: cb,
        showing: sb,
        globallyUniqueKey: ab,
        alwaysMountChildren: Tb = !1,
        doGameplayStartStopOnShow: Ub = !0,
        keepsMovement: Ib = !1
      } = bb;
      return (0, Wb.d)(!0, sb, ab, Ib), (0, kb.e)(Ub, sb), sb || Tb ? cb : null
    }
  },
  4622: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1087);

    function Ub(bb) {
      let {
        columns: cb,
        rows: sb,
        getRowKey: Wb,
        renderRow: Ub,
        className: Ib
      } = bb;
      return (0, Tb.jsxs)("table", {
        className: ab()("Table", Ib),
        children: [(0, Tb.jsx)("thead", {
          children: (0, Tb.jsx)("tr", {
            children: cb.map((bb => (0, Tb.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Tb.jsx)("tbody", {
          children: sb.map((bb => (0, Tb.jsx)(kb.Fragment, {
            children: Ub(bb)
          }, Wb(bb))))
        })]
      })
    }
  },
  36452: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => hb,
      e: () => ub,
      g: () => Yb,
      i: () => mb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(89),
      Ub = sb(1350),
      Ib = sb(1431),
      Hb = sb(1341),
      fb = sb(1278),
      Mb = sb(1197),
      Xb = sb(36455),
      nb = sb(1087);

    function mb(bb) {
      const [cb, sb] = (0, ab.useState)((() => (0, Xb.h)(bb)));
      return (0, ab.useEffect)((() => (sb((0, Xb.h)(bb)), (0, Xb.J)((() => {
        sb((0, Xb.h)(bb))
      })))), [bb]), cb
    }

    function lb(bb, cb) {
      "function" === typeof bb ? bb(cb) : bb && (bb.current = cb)
    }

    function Qb(bb) {
      let {
        tutorial: cb,
        step: sb,
        enabled: kb = !0
      } = bb;
      const Wb = mb(cb);
      return kb && Wb === sb
    }

    function eb(bb, cb) {
      const sb = (0, Xb.k)(bb),
        kb = sb.indexOf(cb);
      return !sb.slice(kb + 1).some((cb => (0, Xb.v)(bb, cb)))
    }

    function Cb(bb, cb, sb, kb) {
      let {
        tutorial: Wb,
        step: ab,
        waitForClick: Tb = !1,
        onPrevious: Ub
      } = bb;
      const Ib = cb && (0, Xb.s)(Wb, ab),
        Hb = cb && !eb(Wb, ab),
        Mb = Tb ? kb : sb;
      let nb = null;
      Ib ? nb = () => {
        null === Ub || void 0 === Ub || Ub(), (0, Xb.o)(Wb, ab)
      } : Hb && (nb = () => {
        (0, Xb.g)(Wb)
      }), (0, fb.o)("popup", null !== Mb && void 0 !== Mb ? Mb : sb, nb, cb && null !== Mb, null, Ib ? void 0 : "controller:menusSkipTutorial")
    }

    function Nb(bb) {
      let {
        tutorial: cb,
        step: sb,
        text: kb,
        waitForClick: Wb = !1,
        onPrevious: ab
      } = bb;
      const {
        t: Tb
      } = (0, Mb.E)(), Ub = eb(cb, sb);
      return (0, nb.jsxs)(nb.Fragment, {
        children: [(0, nb.jsx)("div", {
          className: "TutorialStepText",
          children: kb
        }), (0, nb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Xb.s)(cb, sb) && (0, nb.jsx)(Ib.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ab || void 0 === ab || ab(), (0, Xb.o)(cb, sb)
            },
            children: Tb("tutorial:back")
          }), !Wb && (0, nb.jsx)(Ib.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Xb.e)(sb)
            },
            padDefaultFocus: !0,
            children: Tb(Ub ? "tutorial:done" : "tutorial:next")
          }), !Ub && (0, nb.jsx)(Ib.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Xb.g)(cb)
            },
            children: Tb("tutorial:skip")
          })]
        })]
      })
    }
    const Vb = 6;

    function Lb(bb) {
      let {
        rect: cb,
        margin: sb
      } = bb;
      const kb = Math.max(0, cb.top - sb),
        Wb = cb.bottom + sb,
        ab = Math.max(0, cb.left - sb),
        Tb = cb.right + sb;
      return (0, nb.jsxs)(nb.Fragment, {
        children: [(0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: kb
          }
        }), (0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Wb,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: kb,
            left: 0,
            width: ab,
            height: Wb - kb
          }
        }), (0, nb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: kb,
            left: Tb,
            right: 0,
            height: Wb - kb
          }
        })]
      })
    }

    function ub(bb) {
      let {
        target: cb,
        placement: sb,
        boxRef: kb,
        className: Ib,
        spotlightMargin: fb = Vb,
        children: Mb
      } = bb;
      const {
        getArrowProps: Xb,
        getTooltipProps: mb,
        setTooltipRef: lb,
        setTriggerRef: Qb
      } = (0, Ub.c)({
        placement: sb,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, fb]
      });
      (0, ab.useLayoutEffect)((() => {
        Qb(cb)
      }), [cb, Qb]);
      const eb = function(bb, cb) {
        const [sb, kb] = (0, ab.useState)(null);
        return (0, ab.useEffect)((() => {
          if (!cb || !bb) return void kb(null);
          let sb = 0,
            Wb = null;
          const ab = () => {
            const cb = bb.getBoundingClientRect();
            Wb && cb.left === Wb.left && cb.top === Wb.top && cb.width === Wb.width && cb.height === Wb.height || (Wb = cb, kb(cb)), sb = requestAnimationFrame(ab)
          };
          return ab(), () => {
            cancelAnimationFrame(sb)
          }
        }), [bb, cb]), sb
      }(cb, !0);
      (0, ab.useEffect)((() => {
        null === cb || void 0 === cb || cb.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [cb]);
      const Cb = (0, ab.useCallback)((bb => {
        lb(bb), kb && (kb.current = bb)
      }), [lb, kb]);
      return (0, Tb.createPortal)((0, nb.jsxs)(nb.Fragment, {
        children: [eb && (0, nb.jsx)(Lb, {
          rect: eb,
          margin: fb
        }), (0, nb.jsxs)("div", {
          ref: Cb,
          ...mb({
            className: Wb()("tooltip-container SmallTextLight TutorialStep", Ib)
          }),
          children: [Mb, (0, nb.jsx)("div", {
            ...Xb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Hb.i)())
    }
    const Yb = (0, ab.forwardRef)((function(bb, cb) {
      let {
        placement: sb = "right",
        children: kb,
        ...Wb
      } = bb;
      const Tb = Qb(Wb),
        Ub = (0, ab.useRef)(null),
        Ib = (0, ab.useRef)(null);
      Cb(Wb, Tb, Ub, Ib);
      const [Hb, fb] = (0, ab.useState)(null), Mb = kb.ref, Xb = (0, ab.useCallback)((bb => {
        Ib.current = bb, fb(bb), lb(cb, bb), lb(Mb, bb)
      }), [cb, Mb]);
      return (0, nb.jsxs)(nb.Fragment, {
        children: [(0, ab.cloneElement)(kb, {
          ref: Xb
        }), Tb && (0, nb.jsx)(ub, {
          target: Hb,
          placement: sb,
          boxRef: Ub,
          children: (0, nb.jsx)(Nb, {
            ...Wb
          })
        })]
      })
    }));

    function hb(bb) {
      const cb = Qb(bb),
        sb = (0, ab.useRef)(null);
      return Cb(bb, cb, sb, null), cb ? (0, Tb.createPortal)((0, nb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, nb.jsx)("div", {
          ref: sb,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, nb.jsx)(Nb, {
            ...bb
          })
        })
      }), (0, Hb.i)()) : null
    }
  },
  36334: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      i: () => Tb,
      l: () => Ub,
      n: () => Ib
    });
    var kb = sb(64),
      Wb = sb(1113);
    const ab = 8,
      Tb = "InGameHeaderContainer",
      Ub = "TopRightElements";

    function Ib(bb) {
      const [cb] = (0, Wb.c)(), [sb, Ib] = (0, kb.useState)(!1);
      return (0, kb.useLayoutEffect)((() => {
        if (!bb) return;
        const cb = document.querySelector(`.${Tb}`),
          sb = document.querySelector(`.${Ub}`),
          kb = () => {
            const kb = bb.getBoundingClientRect(),
              Wb = cb ? cb.getBoundingClientRect().right : 0,
              Tb = sb ? sb.getBoundingClientRect().left : window.innerWidth,
              Ub = kb.left < Wb + ab,
              Hb = kb.right > Tb - ab;
            Ib(Ub || Hb)
          };
        kb();
        const Wb = new ResizeObserver(kb);
        return Wb.observe(bb), cb && Wb.observe(cb), sb && Wb.observe(sb), () => {
          Wb.disconnect()
        }
      }), [bb, cb]), sb
    }
  },
  6226: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(64),
      Wb = sb(37);

    function ab(bb, cb) {
      var sb;
      const [ab, Tb] = (0, kb.useState)(null !== (sb = Wb.h.getItem(bb)) && void 0 !== sb ? sb : cb);
      return [ab, cb => {
        Wb.h.setItem(bb, cb), Tb(cb)
      }]
    }
  },
  36471: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(19),
      Wb = sb(1302);

    function ab() {
      const {
        clientEscMenuOptions: bb
      } = (0, kb.p)(["clientEscMenuOptions"]);
      return (0, Wb.w)() && bb.showChat
    }
  },
  36414: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib
    });
    var kb = sb(2612),
      Wb = sb(3470),
      ab = sb(2697);
    const Tb = ["Unable to create vertex buffer"];
    let Ub = {};

    function Ib(bb, cb) {
      const sb = new Date;
      console.error(`${sb.getUTCHours()}:${sb.getUTCMinutes()}:${sb.getUTCSeconds()}`, bb, cb, null === cb || void 0 === cb ? void 0 : cb.stack), Tb.includes(null === cb || void 0 === cb ? void 0 : cb.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, kb.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${cb.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, ab.logError)("warning", `${bb}\n ${cb} "\n" ${null===cb||void 0===cb?void 0:cb.stack}`);
      const Wb = bb + cb + (null === cb || void 0 === cb ? void 0 : cb.stack);
      Wb in Ub || ((0, ab.logError)("error", `${bb}\n ${cb} "\n" ${null===cb||void 0===cb?void 0:cb.stack}`), Ub[Wb] = !0)
    }(0, Wb.onGameReset)((() => {
      Ub = {}
    }))
  },
  4561: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ib,
      h: () => Eb
    });
    var kb = sb(4569),
      Wb = sb(334);
    const ab = 120,
      Tb = 260,
      Ub = 1.15,
      Ib = 1.2,
      Hb = 2,
      fb = 1.08,
      Mb = .8,
      Xb = .95,
      nb = 8,
      mb = "[\"')\\]\u300d\u300f\uff09]*",
      lb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mb}$`),
      Qb = new RegExp(`[?\uff1f]${mb}$`),
      eb = new RegExp(`[!\uff01]${mb}$`),
      Cb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Nb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Vb = new RegExp(`[${Nb}]`),
      Lb = new RegExp(`[${Nb}]|[^${Nb}]+`, "g"),
      ub = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Yb(bb) {
      let cb = 2166136261;
      for (let sb = 0; sb < bb.length; sb++) cb ^= bb.charCodeAt(sb), cb = Math.imul(cb, 16777619);
      return (cb >>> 0) / 4294967295 * 2 - 1
    }

    function hb(bb) {
      var cb;
      if (Vb.test(bb)) return 1;
      const sb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        kb = sb.replace(/[^0-9]/g, "");
      if (kb.length > 0 && !/\p{L}/u.test(sb)) return Math.min(kb.length, 4);
      const Wb = null !== (cb = sb.match(ub)) && void 0 !== cb ? cb : [];
      if (0 === Wb.length) {
        var ab, Tb;
        const bb = null !== (ab = null === (Tb = sb.match(/\p{L}/gu)) || void 0 === Tb ? void 0 : Tb.length) && void 0 !== ab ? ab : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), nb)
      }
      const Ub = sb.replace(/[^\p{L}]/gu, ""),
        Ib = Wb.length > 1 && "e" === Wb.at(-1) && Ub.endsWith("e") && !Ub.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wb.length - (Ib ? 1 : 0), nb)
    }

    function Jb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function gb(bb) {
      const cb = bb.replace(/[^\p{L}]/gu, "");
      return cb.length >= 2 && cb === cb.toUpperCase() && cb !== cb.toLowerCase()
    }

    function Bb(bb, cb) {
      var sb;
      const nb = cb && (0, kb.g)(cb),
        mb = null !== (sb = null === nb || void 0 === nb ? void 0 : nb.syllableMs) && void 0 !== sb ? sb : kb.b,
        Nb = function(bb) {
          const cb = [];
          for (const kb of (0, Wb.ic)(bb))
            if ("string" === typeof kb)
              for (const bb of kb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  cb.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!Vb.test(bb)) {
                  cb.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let kb = !0;
                for (const Wb of null !== (sb = bb.match(Lb)) && void 0 !== sb ? sb : []) {
                  var sb;
                  const bb = cb.at(-1);
                  kb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Vb.test(Wb) || /[\p{L}\p{N}]/u.test(Wb) ? (kb || cb.push({
                    kind: "space",
                    text: "\u200b"
                  }), cb.push({
                    kind: "word",
                    text: Wb,
                    delayMs: 0
                  }), kb = !1) : bb.text += Wb
                }
              } else cb.push({
                kind: "icon",
                text: kb.icon,
                delayMs: 0
              });
          return cb
        }(bb),
        ub = [];
      let Bb = [];
      for (const kb of Nb) "space" !== kb.kind && (Bb.push(kb), lb.test(kb.text) && (ub.push(Bb), Bb = []));
      ub.push(Bb);
      const tb = [];
      let yb = 0;
      for (const kb of ub) {
        var Pb, Db;
        const bb = null !== (Pb = null === (Db = kb.at(-1)) || void 0 === Db ? void 0 : Db.text) && void 0 !== Pb ? Pb : "",
          cb = Qb.test(bb),
          sb = eb.test(bb),
          Wb = kb.map((bb => "word" === bb.kind ? hb(bb.text) : 1)),
          Nb = Wb.findLastIndex((bb => bb > 0));
        for (const [Qb, eb] of kb.entries()) {
          const bb = "word" === eb.kind,
            kb = Wb[Qb];
          eb.delayMs = yb;
          for (let Wb = 0; nb && Wb < kb; Wb++) {
            const {
              intonation: ab
            } = nb;
            let Tb = Nb > 0 ? -ab.declineSemitones * (Qb / Nb) : 0;
            Tb += Yb(`${Jb(eb.text)}|${Wb}`) * ab.variationSemitones;
            const lb = Math.min(1, ab.variationSemitones);
            let Cb = nb.glideSemitones,
              Vb = 1;
            sb && (Tb += ab.exclaimLiftSemitones, Vb *= Ub), cb && Qb === Nb && (Tb += ab.questionRiseSemitones * (kb > 1 ? .5 + .5 * Wb / (kb - 1) : 1), Wb === kb - 1 && (Cb = Math.abs(Cb) + ab.questionRiseSemitones / 2)), bb && gb(eb.text) && (Tb += Hb * lb, Vb *= Ib), kb > 1 && 0 === Wb && (Tb += Mb * lb, Vb *= fb), tb.push({
              atMs: yb + Wb * mb,
              semitones: Tb,
              glideSemitones: Cb,
              durationMs: Wb < kb - 1 ? Math.min(nb.durationMs, mb * Xb) : nb.durationMs,
              level: Vb
            })
          }
          yb += kb * mb + (lb.test(eb.text) ? Tb : Cb.test(eb.text) ? ab : 0)
        }
      }
      return {
        pieces: Nb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: tb
      }
    }
    var tb = sb(1197),
      yb = sb(1258),
      Pb = sb(1876);

    function Db(bb) {
      if ("string" === typeof bb) return bb;
      const cb = yb.e.get().getCurrentLanguageCode();
      return (0, tb.q)(cb, bb.translationKey, (0, tb.p)(bb.params, Pb.b.shown))
    }

    function Eb(bb) {
      const cb = void 0 === bb.voice ? null : (0, kb.i)(bb.voice),
        sb = cb && (0, kb.g)(cb);
      return {
        plan: Bb(Db(bb.line), sb),
        synth: sb
      }
    }

    function ib(bb) {
      const cb = [];
      let sb = [];
      for (const [Wb, ab] of bb.entries()) {
        var kb;
        "space" === ab.kind && (" " !== ab.text || "icon" !== (null === (kb = bb[Wb + 1]) || void 0 === kb ? void 0 : kb.kind)) ? (sb.length > 0 && cb.push(sb), cb.push([ab]), sb = []) : sb.push(ab)
      }
      return sb.length > 0 && cb.push(sb), cb
    }
  },
  36328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    const kb = [{
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

    function Wb(bb, cb, sb) {
      const Wb = Math.abs(bb - cb),
        ab = Date.now() - sb;
      for (const Tb of kb)
        if (bb < Tb.maxDist) return Wb >= Tb.hardUpdateDist || ab > Tb.timeBetweenSoftChecks && Wb >= Tb.softUpdateDist;
      return !1
    }
  },
  36518: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      g: () => ab,
      h: () => Wb
    });
    const kb = [.25, .5, 1, 2, 4, 8, 16];

    function Wb(bb, cb) {
      const sb = kb;
      let Wb = sb.indexOf(bb);
      return -1 === Wb && (Wb = sb.findIndex((cb => cb >= bb)), -1 === Wb && (Wb = sb.length - 1)), "up" === cb ? sb[Math.min(Wb + 1, sb.length - 1)] : sb[Math.max(Wb - 1, 0)]
    }

    function ab(bb) {
      return bb <= kb[0]
    }

    function Tb(bb) {
      return bb >= kb[kb.length - 1]
    }
  },
  36570: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      g: () => Wb
    });
    const kb = "data-replay-ui-active",
      Wb = [{
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
  36573: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      d: () => Mb,
      h: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(36570);

    function Tb() {
      const bb = {};
      for (const {
          group: cb
        }
        of ab.g) bb[cb] = !0;
      return bb
    }
    let Ub = Tb();

    function Ib() {
      Wb.j.QQ("replayViewer|uiVisibilityChanged")
    }

    function Hb() {
      return Ub
    }

    function fb(bb, cb) {
      Ub[bb] !== cb && (Ub = {
        ...Ub,
        [bb]: cb
      }, "nametag" === bb && kb.d.set({
        areNametagsHidden: !cb
      }), Ib())
    }

    function Mb() {
      Ub = Tb(), kb.d.set({
        areNametagsHidden: !1
      }), Ib()
    }
  },
  8960: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      e: () => Wb,
      h: () => fb
    });
    var kb = sb(1544);

    function Wb(bb) {
      var cb;
      return {
        ...Tb.store,
        yaw: Tb.store.yaw + (null !== (cb = kb.b[bb].previewYaw) && void 0 !== cb ? cb : 0)
      }
    }
    const ab = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Tb = {
        player: ab,
        store: {
          ...ab,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Ub(bb, cb) {
      bb instanceof Promise ? bb.then(cb).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : cb(bb)
    }
    class Ib {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var cb;
        this.view = bb, null === (cb = this.opened) || void 0 === cb || cb.show(bb)
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Hb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Ub(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, cb;
        return null !== (bb = null === (cb = this.opened) || void 0 === cb ? void 0 : cb.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, cb) {
        var sb;
        null === (sb = this.opened) || void 0 === sb || sb.setCosmetic(bb, cb)
      }
      playEmote(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.playEmote(bb)
      }
      setOrbit(bb) {
        var cb;
        null === (cb = this.opened) || void 0 === cb || cb.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var cb;
        await this.ready, await (null === (cb = this.opened) || void 0 === cb ? void 0 : cb.untilDrawn(bb))
      }
      resize(bb, cb) {
        var sb;
        this.size = {
          width: bb,
          height: cb
        }, null === (sb = this.opened) || void 0 === sb || sb.resize(bb, cb)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const fb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Ib(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Ib(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Ib(this.current().openMobLineup(bb))
      }
      openCharacter(bb, cb) {
        return new Hb(this.current().openCharacter(bb, cb))
      }
    }
  },
  8956: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c,
      g: () => kb.e,
      h: () => kb.h
    });
    var kb = sb(8960);
    class Wb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class ab {
      constructor() {
        this.mobScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(153)]).then((() => sb(40505))))), this.characterScene = new Wb((() => Promise.all([sb.e(69), sb.e(226), sb.e(225), sb.e(244), sb.e(94), sb.e(245), sb.e(72), sb.e(71), sb.e(242), sb.e(70), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(218), sb.e(264), sb.e(222), sb.e(236), sb.e(247), sb.e(250), sb.e(74), sb.e(196), sb.e(215), sb.e(219), sb.e(93), sb.e(113), sb.e(234), sb.e(73), sb.e(112), sb.e(152)]).then((() => sb(40593)))))
      }
      openMob(bb) {
        return this.mobScene.run((cb => cb.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((cb => cb.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((cb => cb.openMobLineupPreview(bb)))
      }
      openCharacter(bb, cb) {
        return this.characterScene.run((sb => sb.openCharacterPreview(bb, cb)))
      }
    }
    kb.h.setDefaultHost((() => new ab))
  },
  36410: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      f: () => ab
    });
    const kb = new Map;

    function Wb(bb) {
      var cb;
      return null === bb ? null : null !== (cb = kb.get(bb)) && void 0 !== cb ? cb : null
    }

    function ab(bb, cb) {
      return kb.set(bb, cb), () => {
        kb.get(bb) === cb && kb.delete(bb)
      }
    }
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  36534: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => jc,
      i: () => xc
    });
    var kb = sb(4023),
      Wb = sb(628),
      ab = sb(3543),
      Tb = sb(3569),
      Ub = sb.n(Tb);
    const Ib = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Hb = "EV_boolean",
      fb = "EV_double",
      Mb = "EV_string",
      Xb = "EV_doubleArr",
      nb = "EV_armour",
      mb = "EV_other",
      lb = "EV_cosmetics",
      Qb = "OEV_boolean",
      eb = "OEV_int",
      Cb = "OEV_double",
      Nb = "OEV_string",
      Vb = "OEV_stringArr",
      Lb = "OEV_meshScaling",
      ub = "IV_int",
      Yb = "IV_string",
      hb = "IV_doubleArr",
      Jb = "IV_double",
      gb = "HV_int",
      Bb = "HV_slots",
      tb = "EnvV_string",
      yb = "EnvV_double",
      Pb = "EnvV_doubleArr",
      Db = "EnvV_boolean",
      Eb = {
        type: Mb,
        name: Mb,
        position: Xb,
        rotation: Xb,
        scale: fb,
        speed: fb,
        jumping: Hb,
        crouching: Hb,
        cameraPitch: fb,
        armSwinging: Hb,
        heldItemName: Mb,
        heldItemEnchantmentTier: Mb,
        pose: Mb,
        followingEId: Mb,
        ridingVehicleEId: Mb,
        leaderboardTop: Mb,
        meshKind: Mb,
        meshOpts: Mb,
        followingOffset: Xb,
        shouldMatchFollowingEntityRotation: Hb,
        meshOffset: Xb,
        baseRenderHeading: fb,
        armour: nb,
        gJ: mb,
        playerCustomisations: lb,
        variation: Mb,
        metaInfo: Mb,
        soundName: Mb,
        volume: fb,
        refDistance: fb,
        maxHearDist: fb,
        rate: fb,
        aiState: Mb
      },
      ib = {
        opacity: Cb,
        zIndex: eb,
        overlayColour: Nb,
        canSee: Qb,
        meshScaling: Lb,
        nameTagInfo: Nb,
        multilineTextBox: Nb,
        hasPriorityNametag: Qb,
        ranks: Vb,
        nameColour: Nb,
        _isAlive: Qb,
        _invisibleEffect: Qb,
        _invincible: Qb,
        killfeedColour: Nb,
        hideNameSeed: eb,
        _glowingEffect: Qb,
        lockHeadToBody: Qb
      },
      Ob = {
        itemName: Yb,
        amount: ub,
        position: hb,
        size: Jb,
        attributes: Yb
      },
      Gb = {
        skyBox: tb,
        fogColourOverride: tb,
        fogChunkDistanceOverride: yb,
        cameraTint: Pb,
        fogOnSkybox: Db,
        fogBlockDistanceOverride: yb
      },
      Kb = {
        type: "array",
        items: "double"
      },
      Zb = {
        type: "array",
        items: "int"
      },
      zb = {
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
      qb = {
        type: "map",
        values: Kb
      };

    function db(bb, cb) {
      return {
        type: "record",
        name: bb,
        fields: [{
          name: "x",
          type: cb
        }]
      }
    }
    const Ab = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", db(Qb, "boolean"), db(eb, "int"), db(Cb, "double"), db(Nb, "string"), db(Vb, {
              type: "array",
              items: "string"
            }), db(Lb, qb)]
          }]
        }
      },
      wb = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", db(Hb, "boolean"), db(fb, "double"), db(Mb, "string"), db(Xb, Kb), db(nb, zb), db(mb, Ab), db(lb, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      rb = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", db(ub, "int"), db(Yb, "string"), db(Jb, "double"), db(hb, Kb)]
          }]
        }
      },
      ob = {
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
      Sb = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", db(gb, "int"), db(Bb, ob)]
        }]
      },
      Rb = {
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
      vb = {
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
      Fb = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", db(tb, "string"), db(yb, "double"), db(Pb, Kb), db(Db, "boolean")]
          }]
        }
      },
      xb = [{
        name: "Tu",
        type: "record",
        fields: [{
          name: "pos",
          type: Zb
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
          type: Zb
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
      jb = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "xW",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "ba",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "ca",
              type: ["null", "string", Kb],
              default: null
            }, {
              name: "sa",
              type: ["null", "double"],
              default: null
            }, {
              name: "ka",
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
          name: "ia",
          type: "string"
        }, {
          name: "Oa",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Ga",
          type: "double"
        }, {
          name: "Ka",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Vk",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: Kb
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "nc",
          type: "string"
        }, {
          name: "Ac",
          type: ["null", "double"],
          default: null
        }, {
          name: "oc",
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
          name: "sT",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "kT",
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
      pb = [{
        name: "position",
        type: Kb
      }, {
        name: "direction",
        type: Kb
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

    function bc() {
      const bb = [{
        name: "entities",
        type: {
          type: "map",
          values: wb
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: rb
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: pb
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
              items: Sb
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Rb],
        default: null
      }];
      return bb.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "nc",
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
      }), bb.push({
        name: "uiElements",
        type: vb
      }, {
        name: "environment",
        type: Fb
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: xb
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: jb
        }
      }), bb
    }
    const cc = {
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
                name: "aX",
                type: "int"
              }, {
                name: "position",
                type: Kb
              }, {
                name: "direction",
                type: Kb
              }, {
                name: "easing",
                type: Kb
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
    let sc;

    function kc(bb) {
      if (9 === bb) return sc ??= (cb = [{
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
            name: "hY",
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
              type: Zb
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
            fields: bc()
          }
        }
      }, cc], Ub().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: cb
      }, {
        Qn: Object.create(null)
      })), sc;
      var cb
    }
    var Wc = sb(36538);
    let ac, Tc, Uc, Ic;
    const Hc = 12;
    var fc, Mc;
    const Xc = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 16, 512, 100, 4, 15, 2, 1023, 127, 31, 128, 18, 32, 5, 24, 10, 19, 64, 65535, 113, 114, 115, !0, 110, 9, 11];

    function nc(bb) {
      return typeof ss !== Xc[5] && ss ? (new ss).decode(new ks(bb)) : typeof Ws !== Xc[5] && Ws ? Ws.from(bb).toString("utf-8") : Us(bb)
    }

    function mc() {}

    function lc() {
      lc = function() {}
    }
    var Qc, ec;
    lc(fc = {}, Mc = ["s9>Vd9P+Dp#k~o<+!p,UN", 'Oe"9g#^HOq0"i5:F!a3ms.pTuB6qQ&J_MO', 'r?3YH]fbPB&D@`}+kL2fz&N&$8|Ri=00aEH0j{@Ga52"93WH)?$;eDJP9_', "F}^b(>H^]Bp~*", "Wgvlld@NUu;+65~a6lK9U7(TUpPZh$,89iSDPHi[qPFa;xw?", "r;;Vj7A])Zyta#xaL58{${{V,C", '`p9oO7"r55+UO', "p;yV1`*NMf5Bi=mZ}/Nb5iqeWq}QMLO?*soW[{0q]B_lzw]`KtiD#aq*", "mL@0(ptPJf!VQ5C<tK<^N[cBp~}*Po2o$pVYO{^H^5YP|euGD,$b", "y}vl|.pT}f", "*(zKGUcbH8,VGk3vWf7Vf/_gGNK", "J3Ubt7nqL6*4En", '/}JlW&|V,P3V3o|ahSgUMMU+uP}W*/70"FGA(HT^p~m{g`b`yiYUmpO', "ZZgVt>Xb!%.P!nVoQO", "wIVmG$o>Cu*}nwe;pDK77=;v]k>$D$a+5_<DS3+J9Kc@VuWH>Ka{Jgkg/s", '>lxY3"mH}K^{)`@^DTDt', "Ity;&]O", 'zF#;$a~VfB%U)`0023|i:4SgDk7bPo<8sGWfqR"*n', "lfpbCR)Eef3(hXjI[l(WP/p+a[qSO", "yZ]jgT`_?}apW&Jd2WPfTpUs#u.~xXdd55=W]x.*}KH;Qef", 'eaA]o&`J)C{C"J;H', "GErib3$N}f+on1D8P0J]z.Nv,_DQg9Pw", "&ajx,Yh+YCwob`ze(f_]M[y+]}Qy%HW_oTm]6<O", '~l+DDMm6.[0{nw3v<B4L/];8.["5eJME|}^UZxP_}[L{02.a', "St/DWeR^KNC/j/3e)CeW7|]0NuW$&n}+SO", "N9;t9Sjz<N", 'K[>;"U@N|6pSJXGe:udR,~ueu}sm$+`_>[S9WKWJ', "J9iKnRjbcBmdN|j8@Td7*M+V3>T_E&U<1,0VFQTT(sXp35^0OIJ", 'HfPfouI886=SIJ=FedQ9"`]lHK,pWn', "</$Re&J=v=(DFn?;FRJ", "H[9K&1obPZN=f{H^vd5VbR^VIZA$^kt", 'fEm]M[ur4~P{//D<zuMtaV^JyN)S"w}^4}lWKYE6RZ[urLN', 'XRz9=|KhLK)Sf|p+<pZ78M4_lsn]f2cvAlOKD7"NO5hR7=k', "D,A^2HE^([fKm#vXXTlRDH;02%", "`ROKFEZ6)k0Z#/_Fx;$7j{RE=C", "LKsR1.RVBfi9>{ueX*", "$Zj7llZRmZMj]k,`4aZm", "[BJo><e$BfF$3.(d[T{f!d>]H6h5F.$d*[{9UH7e!kWoKd5<", ')pnYF.Cvt8wmkM1F>/b4IlmhzN}~"ks`8i;^).b>su*4DLeB>KF7oKO', "htQtUpMNuk", "=ZGVT74Vsk$_711FrZMKW4kVb", "r?`;+`sgH[<nVoGF#EkVcAK^xf=Q6uv<.lJ", 'Z3!mF4*$f}2"4`adl,6K~g5>*qF', 'YCrb!q,NXp4Mj2OB,l"tI9_V:BfnbwCw,;79O|O', '3i;9#<vN">~X{nT^,TGF.4u0IB;oIwb+!IpUEe3^Uu45;x=v4lf{3>C8b', "J_k;A4hEBs}_pXj;)P&FMU{_9fk1Hi~eCGaW_", "(tT>9dMvrKiD,{CXXKk;hr/Vl[M0$L", "WEA^>YGv,kr5R9b;", 'Fg%bG[z"*qpL[3G0Wnwlq=nzL', "^T4L>{p+=}EeH.H+]}@0/<ggukz[aN}^)Pdb141h2(`;nwg8", ",l,LlSe[YC:YWn", 'J(Z;kHS_a5:gqk(G|tYxO|&8@K|RU3P_$p0bV<qvZ[n"$3q?>lnW%uO', '@?MK`rb*%6"@l.}Hi;tUn/>0J3O4C`{wFTm{%i[Nq>iQY+>a_d9tL7VEt', "YB*47<W+Of(XPiD;,}A]c,bN)Z=Se&Q<}phUtpsPL", "3a8Y0Q9r*5>((MVaQZi9)[pQ_3fnokzyGtTx,]`JW5", "BWF0r,J_wu:R^#N", "BwYbwD6^15EnLn$;+5<9V~Ab|fsGs.%o.O", "tI;9+4PH2(RY$/j8fiEK`T$*", "+3Tj5x|VL", "<I!01AhV:Z+/{n{_Alm]1,ph5qYRO5n;[fJ{gd*v9s?peJ", "zBo{~3.$t", 'G[2^U$H=>K{Q"kry1Z<D,~hsUCn4*', "#T<92pCMVK]Q_1Y8U~B])DeNM[;k?9QoIw/f2[MvwZgpbw,<ua%;K<;8L", "6BxPHeWHLN/;zwcF>TOt$R5$wk:STnd`dRwoR`R+53Y>9/t", 'd5`b~1"v6fx_2.N8$?hLN', "Cq>F&9O", "2t$wnpN&_s3L*3KEd[iKb3A&([smTo@d~O", '<0Qfj>mh,>"_*2@_T/|>k7[G%=>', 'OfpU]`y+:B<kZu:aL9(P"`(sPmZ$DMfX7,yFer$[^ue725:FN*', '#D4FSH(tUpo/U.#BbKRP(3EJ"_Fl6u;?/n?]d9i*', '"C|0j{$vn', "JLS;&]O", "x/#7_.`^W5iX)$OIhF_{Zx@lJf^}CJ.E#/5Vb3ebdKm#ewk8&ESV^&O", "6t&L%E#*", '$p5KeD$qJ3cjJMd+2fkV6gO=25@PcH"<kfZYFr_HHN)05kq^wfw{MH%bj', "jL]>@g?+0_GllSJ_ew|>ipf855RgvLXeowiV5`gJ4q>b=$.oew<Vm$1Q9qVL*", "6uDKP3OPaqPG#3e_k9B^#aO=5qdDVn$+vpbU:u`VJf", "?s6KK<R^V6>Q:/)HuGzLISP+)Z", 'aK9{ia`Q}[2"InR<x}a]f$x_gP4*KNfwUuAt', "$p)Y9d~RB[)R//)FZlYi(/%e(sSLY{uG+Z*o4,:pZK1R}Ngo2tSi2Vr[L", "PLg7}gG$2s", '`3gfoDUs`NRgK9e_yg^;4[Ws_3oo~o`XZE^F=>lr9f*]]of;yGbU"HR+n', "iTnW=aZJ", "(fE9]M3J(fn{L|Mo5K}P", "|?]P9l1s&sDQcQ!`w5<U5x`_fk0U7o9<[O", "el>LJ>eN,>fT85N<C[SUEQjbUPEuF.KEaK[tN.%&_5}S$+rvA39tkRO", "[w3Y/qO_A_^U93k", "!t2fw.a_/[H%dLI`uaEtPUV=Iuw}q1T^FIft;r8*dK/+j{J_Bie{g=2Pk%", "RTvo4MKE[pSY`=S`CIOA}MtS_3n=G10G/EnY&=mH15VUV5f", "%^Sv%bXn", "U10;c_2n", "iK(3;", "8J61skGn", "eeL1P", "81eg[Dw>", "{9T]", 'N?Q,*Z7<$s"OZbhZK)m]', "%5]=u%mWM:p0tBiKKm^,", "][/P14u9,CdMphny%Pi]", "IVo,QP$%F]NS1`=K%?E]", "1+8f@7VX", "Li_L2&xX", "3gURj", "Li_LEe^a", "dc8m)", 'o$ty!0RB!kSe@0"%', "yXN@ZkETf1`L?1Io", "8$^:mUkYQ8))d9X|", '<XFLO,;~)Cx_9"$X', "L0RU>2R[>cO,P,y", "vCyoI#O>", "m#&a};H>", "[oqw+", "~@Ng", "G@&aEp3>", ")om?", "]@0:r9R>", "@r.8", "]c}1", "(r|GeNc2"]), lc(cs = function() {
      var bb, cb, sb, kb = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      lc(bb = void 0, cb = []);
      try {
        lc(bb = Object, cb[Xc[11]]("".__proto__.constructor.name))
      } catch (ks) {}
      bb: for (sb = Xc[0]; sb < kb[Xc[4]]; sb++) try {
        var Wb;
        for (bb = kb[sb](), Wb = Xc[0]; Wb < cb[Xc[4]]; Wb++)
          if (typeof bb[cb[Wb]] === Xc[5]) continue bb;
        return bb
      } catch (ks) {}
      return bb || this
    }() || {}, ss = cs.TextDecoder, ks = cs.Uint8Array, Ws = cs.Dm, as = cs.String || String, Ts = cs.Array || Array, Us = function() {
      var bb, cb, sb = new Ts(Xc[27]);
      return lc(bb = as[Xc[8]] || as.fromCharCode, cb = []),
        function(kb) {
          var Wb, ab, Tb, Ub;
          for (lc(ab = void 0, Tb = kb[Xc[4]], cb[Xc[4]] = Xc[0]), Ub = Xc[0]; Ub < Tb;) lc(ab = kb[Ub++], ab <= Xc[25] ? Wb = ab : ab <= 223 ? Wb = (ab & Xc[26]) << Xc[7] | kb[Ub++] & Xc[6] : ab <= 239 ? Wb = (ab & Xc[22]) << Xc[10] | (kb[Ub++] & Xc[6]) << Xc[7] | kb[Ub++] & Xc[6] : as[Xc[8]] ? Wb = (ab & Xc[9]) << Xc[28] | (kb[Ub++] & Xc[6]) << Xc[10] | (kb[Ub++] & Xc[6]) << Xc[7] | kb[Ub++] & Xc[6] : (Wb = Xc[6], Ub += Xc[17]), cb[Xc[11]](sb[Wb] || (sb[Wb] = bb(Wb))));
          return cb.join("")
        }
    }()), (() => {
      function bb(bb) {
        return typeof fc[bb] === Xc[5] ? fc[bb] = function(bb) {
          var cb, sb, kb, Wb, ab, Tb, Ub;
          for (lc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Xc[0], ab = Xc[0], Tb = -Xc[1]), Ub = Xc[0]; Ub < sb; Ub++) {
            var Ib = '/rntcFZ7zp)=H4VKu@XMRNEJP`;D~|!iv(LSOW*sG,Cdw9?ka:B5618]+%y[2$.x<#&{^_3jlUfqhb>TYQA0gI}me"o'.indexOf(cb[Ub]);
            if (Ib !== -Xc[1])
              if (Tb < Xc[0]) Tb = Ib;
              else {
                lc(Tb += Ib * Xc[12], Wb |= Tb << ab, ab += (Tb & Xc[13]) > Xc[14] ? Xc[15] : Xc[16]);
                do {
                  lc(kb.push(Wb & Xc[3]), Wb >>= Xc[2], ab -= Xc[2])
                } while (ab > Xc[9]);
                Tb = -Xc[1]
              }
          }
          return Tb > -Xc[1] && kb.push((Wb | Tb << ab) & Xc[3]), nc(kb)
        }(Mc[bb]) : fc[bb]
      }
      const cb = Xc[18],
        sb = bb(89) + bb(90) + bb(Xc[12]),
        kb = [Xc[0], Xc[1], Xc[23], Xc[17]].map((cb => {
          let kb = Xc[0];
          for (let Wb = Xc[17]; Wb >= Xc[0]; Wb--) {
            function ab(bb) {
              var cb, sb, kb, Wb, ab, Tb, Ub;
              for (lc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Xc[0], ab = Xc[0], Tb = -Xc[1]), Ub = Xc[0]; Ub < sb; Ub++) {
                var Ib = 'Gz0?j1./+S_2tu;eg5Tv|<@q,h>%$P}6!lHbs(&YU8K9"D[Rmfky`WA]3M~^4)7#*dOVLJZirFBnEaIcCoNx={:wQXp'.indexOf(cb[Ub]);
                if (Ib !== -Xc[1])
                  if (Tb < Xc[0]) Tb = Ib;
                  else {
                    lc(Tb += Ib * Xc[12], Wb |= Tb << ab, ab += (Tb & Xc[13]) > Xc[14] ? Xc[15] : Xc[16]);
                    do {
                      lc(kb.push(Wb & Xc[3]), Wb >>= Xc[2], ab -= Xc[2])
                    } while (ab > Xc[9]);
                    Tb = -Xc[1]
                  }
              }
              return Tb > -Xc[1] && kb.push((Wb | Tb << ab) & Xc[3]), nc(kb)
            }

            function Tb(bb) {
              return typeof fc[bb] === Xc[5] ? fc[bb] = ab(Mc[bb]) : fc[bb]
            }
            kb = kb << Xc[2] | sb[bb(92) + Tb(93)](cb * Xc[21] + Wb)
          }
          return kb >>> Xc[0]
        })),
        Wb = (bb, cb) => bb << cb | bb >>> Xc[29] - cb,
        ab = (bb, cb, sb, kb, ab) => {
          lc(bb[cb] += bb[sb], bb[ab] = Wb(bb[ab] ^ bb[cb], Xc[18]), bb[kb] += bb[ab], bb[sb] = Wb(bb[sb] ^ bb[kb], Xc[10]), bb[cb] += bb[sb], bb[ab] = Wb(bb[ab] ^ bb[cb], Xc[2]), bb[kb] += bb[ab], bb[sb] = Wb(bb[sb] ^ bb[kb], Xc[9]))
        };
      Ic = (bb, sb, Wb, Tb) => {
        function Ub(bb) {
          return typeof fc[bb] === Xc[5] ? fc[bb] = function(bb) {
            var cb, sb, kb, Wb, ab, Tb, Ub;
            for (lc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Xc[0], ab = Xc[0], Tb = -Xc[1]), Ub = Xc[0]; Ub < sb; Ub++) {
              var Ib = '!y>.?zQEwtgXk5v@4"G60NH]YJRPI+~|a%flVm3x(Uu<2=Od,LS*[^o;KsMeChc8ni)&1$b#D`p7}:r/B9AqZ{TFW_j'.indexOf(cb[Ub]);
              if (Ib !== -Xc[1])
                if (Tb < Xc[0]) Tb = Ib;
                else {
                  lc(Tb += Ib * Xc[12], Wb |= Tb << ab, ab += (Tb & Xc[13]) > Xc[14] ? Xc[15] : Xc[16]);
                  do {
                    lc(kb.push(Wb & Xc[3]), Wb >>= Xc[2], ab -= Xc[2])
                  } while (ab > Xc[9]);
                  Tb = -Xc[1]
                }
            }
            return Tb > -Xc[1] && kb.push((Wb | Tb << ab) & Xc[3]), nc(kb)
          }(Mc[bb]) : fc[bb]
        }
        Ub(94) + "M" in mc && function() {
          var bb = function() {
            var bb, cb, sb = Xc[0];

            function kb(bb) {
              return Hb(Ub(Xb(bb)))
            }

            function Wb(bb, cb) {
              return Hb(Ib(Xb(bb), Xb(cb)))
            }

            function ab(bb, cb) {
              return fb(Ib(Xb(bb), Xb(cb)))
            }

            function Tb(bb, cb, sb) {
              return Mb(Ib(Xb(bb), Xb(cb)), sb)
            }

            function Ub(bb) {
              return mb(Yb(nb(bb), bb.length * Xc[2]))
            }

            function Ib(bb, cb) {
              var sb, kb, Wb = nb(bb);
              Wb.length > Xc[18] && (Wb = Yb(Wb, bb.length * Xc[2]));
              var ab = Array(Xc[18]),
                Tb = Array(Xc[18]);
              for (sb = Xc[0]; sb < Xc[18]; sb++) lc(ab[sb] = 909522486 ^ Wb[sb], Tb[sb] = 1549556828 ^ Wb[sb]);
              return kb = Yb(ab.concat(nb(cb)), Xc[19] + cb.length * Xc[2]), mb(Yb(Tb.concat(kb), Xc[19] + 256))
            }

            function Hb(bb) {
              var cb, kb, Wb, ab;

              function Tb(bb) {
                var cb, sb, kb, Wb, ab, Tb, Ub, Ib = 'CXaNkl`hMUOgc5^VWjGu?Pvt*)wLB|:d1<E}7JnQ_xT{,&IY+r~Rbm/"qys;.SH9@iKoeADf[0(Fp%!2=$#486>]zZ3';
                for (lc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Xc[0], ab = Xc[0], Tb = -Xc[1]), Ub = Xc[0]; Ub < sb; Ub++) {
                  var Hb = Ib.indexOf(cb[Ub]);
                  if (Hb !== -Xc[1])
                    if (Tb < Xc[0]) Tb = Hb;
                    else {
                      lc(Tb += Hb * Xc[12], Wb |= Tb << ab, ab += (Tb & Xc[13]) > Xc[14] ? Xc[15] : Xc[16]);
                      do {
                        lc(kb.push(Wb & Xc[3]), Wb >>= Xc[2], ab -= Xc[2])
                      } while (ab > Xc[9]);
                      Tb = -Xc[1]
                    }
                }
                return Tb > -Xc[1] && kb.push((Wb | Tb << ab) & Xc[3]), nc(kb)
              }

              function Ub(bb) {
                return typeof fc[bb] === Xc[5] ? fc[bb] = Tb(Mc[bb]) : fc[bb]
              }
              for (lc(cb = sb ? Ub(Xc[20]) + Ub(101) + Ub(102) : Ub(Xc[20]) + Ub(103) + Ub(104), kb = "", Wb = void 0), ab = Xc[0]; ab < bb.length; ab++) lc(Wb = bb.charCodeAt(ab), kb += cb.charAt(Wb >>> Xc[21] & Xc[22]) + cb.charAt(Wb & Xc[22]));
              return kb
            }

            function fb(cb) {
              var sb, kb, Wb, ab;

              function Tb(bb) {
                var cb, sb, kb, Wb, ab, Tb, Ub, Ib = 'fx(;]y$5:cs4?7e1"nlhCD/*T~A%m@EoLQ[F2<|zBYSXOq+w09HNWg=iVka)P6#8>!d^v&IUbuJ`K3_j,Z.tR}MGpr{';
                for (lc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Xc[0], ab = Xc[0], Tb = -Xc[1]), Ub = Xc[0]; Ub < sb; Ub++) {
                  var Hb = Ib.indexOf(cb[Ub]);
                  if (Hb !== -Xc[1])
                    if (Tb < Xc[0]) Tb = Hb;
                    else {
                      lc(Tb += Hb * Xc[12], Wb |= Tb << ab, ab += (Tb & Xc[13]) > Xc[14] ? Xc[15] : Xc[16]);
                      do {
                        lc(kb.push(Wb & Xc[3]), Wb >>= Xc[2], ab -= Xc[2])
                      } while (ab > Xc[9]);
                      Tb = -Xc[1]
                    }
                }
                return Tb > -Xc[1] && kb.push((Wb | Tb << ab) & Xc[3]), nc(kb)
              }

              function Ub(bb) {
                return typeof fc[bb] === Xc[5] ? fc[bb] = Tb(Mc[bb]) : fc[bb]
              }
              for (lc(sb = Ub(105) + Ub(106) + Ub(107) + Ub(108) + Ub(109), kb = "", Wb = cb.length), ab = Xc[0]; ab < Wb; ab += Xc[17]) {
                var Ib, Hb = cb.charCodeAt(ab) << Xc[18] | (ab + Xc[1] < Wb ? cb.charCodeAt(ab + Xc[1]) << Xc[2] : Xc[0]) | (ab + Xc[23] < Wb ? cb.charCodeAt(ab + Xc[23]) : Xc[0]);
                for (Ib = Xc[0]; Ib < Xc[21]; Ib++) ab * Xc[2] + Ib * Xc[7] > cb.length * Xc[2] ? kb += bb : kb += sb.charAt(Hb >>> Xc[7] * (Xc[17] - Ib) & Xc[6])
              }
              return kb
            }

            function Mb(bb, cb) {
              var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb = cb.length;
              for (sb = Array(), kb = Array(Math.ceil(bb.length / Xc[23])), Tb = Xc[0]; Tb < kb.length; Tb++) kb[Tb] = bb.charCodeAt(Tb * Xc[23]) << Xc[2] | bb.charCodeAt(Tb * Xc[23] + Xc[1]);
              for (; kb.length > Xc[0];) {
                for (lc(Hb = Array(), Ib = Xc[0]), Tb = Xc[0]; Tb < kb.length; Tb++) lc(Ib = (Ib << Xc[18]) + kb[Tb], Ub = Math.floor(Ib / fb), Ib -= Ub * fb), (Hb.length > Xc[0] || Ub > Xc[0]) && (Hb[Hb.length] = Ub);
                lc(sb[sb.length] = Ib, kb = Hb)
              }
              for (Wb = "", Tb = sb.length - Xc[1]; Tb >= Xc[0]; Tb--) Wb += cb.charAt(sb[Tb]);
              for (ab = Math.ceil(bb.length * Xc[2] / (Math.log(cb.length) / Math.log(Xc[23]))), Tb = Wb.length; Tb < ab; Tb++) Wb = cb[Xc[0]] + Wb;
              return Wb
            }

            function Xb(bb) {
              var cb, sb, kb, Wb = "";
              for (cb = -Xc[1]; ++cb < bb.length;) lc(sb = bb.charCodeAt(cb), kb = cb + Xc[1] < bb.length ? bb.charCodeAt(cb + Xc[1]) : Xc[0]), 55296 <= sb && sb <= 56319 && 56320 <= kb && kb <= 57343 && lc(sb = 65536 + ((sb & Xc[24]) << Xc[32]) + (kb & Xc[24]), cb++), sb <= Xc[25] ? Wb += String.fromCharCode(sb) : sb <= 2047 ? Wb += String.fromCharCode(192 | sb >>> Xc[7] & Xc[26], Xc[27] | sb & Xc[6]) : sb <= Xc[35] ? Wb += String.fromCharCode(224 | sb >>> Xc[10] & Xc[22], Xc[27] | sb >>> Xc[7] & Xc[6], Xc[27] | sb & Xc[6]) : sb <= 2097151 && (Wb += String.fromCharCode(240 | sb >>> Xc[28] & Xc[9], Xc[27] | sb >>> Xc[10] & Xc[6], Xc[27] | sb >>> Xc[7] & Xc[6], Xc[27] | sb & Xc[6]));
              return Wb
            }

            function nb(bb) {
              var cb, sb = Array(bb.length >> Xc[23]);
              for (cb = Xc[0]; cb < sb.length; cb++) sb[cb] = Xc[0];
              for (cb = Xc[0]; cb < bb.length * Xc[2]; cb += Xc[2]) sb[cb >> Xc[30]] |= (bb.charCodeAt(cb / Xc[2]) & Xc[3]) << Xc[31] - cb % Xc[29];
              return sb
            }

            function mb(bb) {
              var cb, sb = "";
              for (cb = Xc[0]; cb < bb.length * Xc[29]; cb += Xc[2]) sb += String.fromCharCode(bb[cb >> Xc[30]] >>> Xc[31] - cb % Xc[29] & Xc[3]);
              return sb
            }

            function lb(bb, cb) {
              return bb >>> cb | bb << Xc[29] - cb
            }

            function Qb(bb, cb) {
              return bb >>> cb
            }

            function eb(bb, cb, sb) {
              return bb & cb ^ ~bb & sb
            }

            function Cb(bb, cb, sb) {
              return bb & cb ^ bb & sb ^ cb & sb
            }

            function Nb(bb) {
              return lb(bb, Xc[23]) ^ lb(bb, Xc[15]) ^ lb(bb, 22)
            }

            function Vb(bb) {
              return lb(bb, Xc[7]) ^ lb(bb, Xc[42]) ^ lb(bb, 25)
            }

            function Lb(bb) {
              return lb(bb, Xc[9]) ^ lb(bb, Xc[28]) ^ Qb(bb, Xc[17])
            }

            function ub(bb) {
              return lb(bb, 17) ^ lb(bb, Xc[33]) ^ Qb(bb, Xc[32])
            }

            function Yb(bb, sb) {
              var kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
              for (kb = new Array(Xc[34]), lc(bb[sb >> Xc[30]] |= Xc[27] << Xc[31] - sb % Xc[29], bb[(sb + Xc[34] >> Xc[41] << Xc[21]) + Xc[22]] = sb), Xb = Xc[0]; Xb < bb.length; Xb += Xc[18]) {
                for (lc(Wb = Qb[Xc[0]], ab = Qb[Xc[1]], Tb = Qb[Xc[23]], Ub = Qb[Xc[17]], Ib = Qb[Xc[21]], Hb = Qb[Xc[30]], fb = Qb[Xc[7]], Mb = Qb[Xc[9]]), nb = Xc[0]; nb < Xc[34]; nb++) lc(nb < Xc[18] ? kb[nb] = bb[nb + Xb] : kb[nb] = hb(hb(hb(ub(kb[nb - Xc[23]]), kb[nb - Xc[9]]), Lb(kb[nb - Xc[22]])), kb[nb - Xc[18]]), mb = hb(hb(hb(hb(Mb, Vb(Ib)), eb(Ib, Hb, fb)), cb[nb]), kb[nb]), lb = hb(Nb(Wb), Cb(Wb, ab, Tb)), Mb = fb, fb = Hb, Hb = Ib, Ib = hb(Ub, mb), Ub = Tb, Tb = ab, ab = Wb, Wb = hb(mb, lb));
                lc(Qb[Xc[0]] = hb(Wb, Qb[Xc[0]]), Qb[Xc[1]] = hb(ab, Qb[Xc[1]]), Qb[Xc[23]] = hb(Tb, Qb[Xc[23]]), Qb[Xc[17]] = hb(Ub, Qb[Xc[17]]), Qb[Xc[21]] = hb(Ib, Qb[Xc[21]]), Qb[Xc[30]] = hb(Hb, Qb[Xc[30]]), Qb[Xc[7]] = hb(fb, Qb[Xc[7]]), Qb[Xc[9]] = hb(Mb, Qb[Xc[9]]))
              }
              return Qb
            }

            function hb(bb, cb) {
              var sb = (bb & Xc[35]) + (cb & Xc[35]);
              return (bb >> Xc[18]) + (cb >> Xc[18]) + (sb >> Xc[18]) << Xc[18] | sb & Xc[35]
            }
            return bb = "", cb = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: kb,
              b64: ab,
              any: Tb,
              hex_hmac: Wb,
              b64_hmac: ab,
              any_hmac: Tb
            }
          }();
          console.log(bb)
        }();
        const Ib = new DataView(sb[Ub(Xc[40])], sb[Ub(111) + Ub(112)], Hc),
          Hb = new Uint32Array(cb);
        lc(Hb[Ub(Xc[36])](kb), Hb[Ub(Xc[36])](bb, Xc[21]), Hb[Xc[15]] = Ib[Ub(Xc[37]) + Ub(Xc[38])](Xc[0], Xc[39]), Hb[Xc[16]] = Ib[Ub(Xc[37]) + Ub(Xc[38])](Xc[21], Xc[39]), Hb[Xc[22]] = Ib[Ub(Xc[37]) + Ub(Xc[38])](Xc[2], Xc[39]));
        const fb = new Uint32Array(cb),
          Mb = new Uint8Array(fb[Ub(Xc[40])]);
        for (let Xb = Xc[0], nb = Wb; Xb < Tb[Ub(116)]; Xb += cb * Xc[21], nb++) {
          function mb(bb) {
            var cb, sb, kb, Wb, ab, Tb, Ub;
            for (lc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = Xc[0], ab = Xc[0], Tb = -Xc[1]), Ub = Xc[0]; Ub < sb; Ub++) {
              var Ib = '6u2~`#5&?18ZbmPr,XCI|.y(azcdpB@JVR*nUi/E[;)+<>j]s9O3W"vS%FMAoq_t}Dw=fkL$YH4x^Ge0lN!ghQ{7:KT'.indexOf(cb[Ub]);
              if (Ib !== -Xc[1])
                if (Tb < Xc[0]) Tb = Ib;
                else {
                  lc(Tb += Ib * Xc[12], Wb |= Tb << ab, ab += (Tb & Xc[13]) > Xc[14] ? Xc[15] : Xc[16]);
                  do {
                    lc(kb.push(Wb & Xc[3]), Wb >>= Xc[2], ab -= Xc[2])
                  } while (ab > Xc[9]);
                  Tb = -Xc[1]
                }
            }
            return Tb > -Xc[1] && kb.push((Wb | Tb << ab) & Xc[3]), nc(kb)
          }

          function lb(bb) {
            return typeof fc[bb] === Xc[5] ? fc[bb] = mb(Mc[bb]) : fc[bb]
          }
          lc(Hb[Xc[10]] = nb, fb[lb(117)](Hb));
          for (let eb = Xc[0]; eb < Xc[32]; eb++) lc(ab(fb, Xc[0], Xc[21], Xc[2], Xc[10]), ab(fb, Xc[1], Xc[30], Xc[41], Xc[15]), ab(fb, Xc[23], Xc[7], Xc[32], Xc[16]), ab(fb, Xc[17], Xc[9], Xc[42], Xc[22]), ab(fb, Xc[0], Xc[30], Xc[32], Xc[22]), ab(fb, Xc[1], Xc[7], Xc[42], Xc[10]), ab(fb, Xc[23], Xc[9], Xc[2], Xc[15]), ab(fb, Xc[17], Xc[21], Xc[41], Xc[16]));
          for (let Cb = Xc[0]; Cb < cb; Cb++) fb[Cb] += Hb[Cb];
          const Qb = Math[lb(118)](cb * Xc[21], Tb[lb(119)] - Xb);
          for (let Nb = Xc[0]; Nb < Qb; Nb++) Tb[Xb + Nb] ^= Mb[Nb]
        }
      }
    })();
    const Cc = [2, 0, 1, 8, 214, "a", "i", 7, 5, "f", 4, 255, "length", 67, "d", 204, 92, "undefined", void 0, "c", 246, 223, 89, 63, 6, "fromCodePoint", 12, "push", 91, 139, 195, 119, "b", 198, 227, 9, 8191, 88, 13, 14, 3, 110, "e", 200, 144, 98, 192, "g", "h", 150, 154, 245, !1, 137, 115, 228, 82, 237, 189, 127, 128, 17, 134, 163, 141, !0, 133, 206, 169, "L", null, 34];

    function Nc(...bb) {
      return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = function(...bb) {
        for (uc(bb[Cc[12]] = Cc[2], bb[Cc[5]] = '=IMXcUAgseBbrECLnYku`Qy)@"&RP~+j>tf5(N.SZx[_/v{V6!4$%1?,aK3]h90To;d7DzF*8l#Om|Gqi}w<J^:Hp2W', bb[Cc[0]] = "" + (bb[Cc[1]] || ""), bb[-Cc[4]] = bb[Cc[0]].length, bb[Cc[10]] = [], bb[Cc[8]] = Cc[1], bb[Cc[9]] = Cc[1], bb[Cc[7]] = -Cc[2]), bb[Cc[3]] = Cc[1]; bb[Cc[3]] < bb[-Cc[4]]; bb[Cc[3]]++)
          if (bb[Cc[6]] = bb[Cc[5]].indexOf(bb[Cc[0]][bb[Cc[3]]]), bb[Cc[6]] !== -Cc[2])
            if (bb[Cc[7]] < Cc[1]) bb[Cc[7]] = bb[Cc[6]];
            else {
              uc(bb[Cc[7]] += bb[Cc[6]] * Cc[28], bb[Cc[8]] |= bb[Cc[7]] << bb[Cc[9]], bb[Cc[9]] += (bb[Cc[7]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
              do {
                uc(bb[Cc[10]].push(bb[Cc[8]] & Cc[11]), bb[Cc[8]] >>= Cc[3], bb[Cc[9]] -= Cc[3])
              } while (bb[Cc[9]] > Cc[7]);
              bb[Cc[7]] = -Cc[2]
            } return bb[Cc[7]] > -Cc[2] && bb[Cc[10]].push((bb[Cc[8]] | bb[Cc[7]] << bb[Cc[9]]) & Cc[11]), Vc(bb[Cc[10]])
      }(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
    }

    function Vc(...bb) {
      return bb[Cc[12]] = Cc[2], typeof ss !== Cc[17] && ss ? (new ss).decode(new ks(bb[Cc[1]])) : typeof Ws !== Cc[17] && Ws ? Ws.from(bb[Cc[1]]).toString("utf-8") : Us(bb[Cc[1]])
    }

    function Lc() {}

    function uc() {
      uc = function() {}
    }
    uc(Qc = {}, ec = ["b!YRe:O$l3[5oXE", "+;4>S9r@9k(R~8XN", "z$3>1aEu,3v!<CNN6KfOe0lxP]1", ';j2?(Z%#!L;l=nO&tfSlhq$ub;x]H&O.P*n?k4P:ueOI6]k`pfD~g#i{sY"YI', "D[Uj?a1T4rd1:}I(J;HA&mvu0Tr;t8t(n_486Fk{%o^rfEI_c>Os1$r@A", "`&[Oh$s%oTA+Y8<fSe48~9dA!r8lXXs.|Noeaq_gIh)$hLkP4*M", "x0KAQ^f:nr;C)w1xP)VPchP([;Y@6V/SMK5#7,7I", "HAy%&<egTsn8JL=NZ;Ws84SI", 'R)"O8,G#_]S56XPxeZs+QmVg!dq{[!L&|aa?4F|EeY%d26.k%)zg', "nh*!2v[Mqk9", "l$Nm59iZZ`n`VFHy", "6KiAgz`(Nof6~cg@#6M>Az4+fTG!v8r", '4j=G?f,VRCmT/VF@(estz}Ms"`', "K&c|a$M+R`+E|hs", 'CA&O$w>+Au",nLR)Ih0j`0A%`e#cu&N@1f#sY}%+.uz|}!C', ">?1j1|)x!d,T18o[)&5>,qJ3uh=?`]suuT>eo,+r{QQfX&K))~@+f^}$c", "MK@GM{)xe0(mbL@PGa=O18ZM(u^LsX", "^j4RM#.k}KwasS&~DD<s", "pvLty.l$A,W70.ERZ*SeBz0{30R8XX;([rVm:K^KzE", 'KD>enm"V.Eo%>]B"%ZseA,NVx`a]!8XN$?mg#m~gObKm%Lh~tDz&`GW{tLSCI', '9XVev9GZu?}|>6W((DTm"', 'hX=+/F_gw?sOa<Hy^vb>4Fj5|13QuC")qF;s`4{3zuM+/Xb', "a&nt*zSI", ");D&i.Zook4j^iwP{r5~9S_I", 'B!IRb:"zg,O7F}W(a631i.P%[Y^1F}c@F0=R%{nstdE;?"E', "F[$~o3v^+d(BL.n&V&k8W.n{ie.", "]f*cY(83|b405wo@e!_>g,1g!d)qxN<fcDcU", '=5<>"G$5Thx]Xws', "0)$1b6J#c?D17wc_qA1BvN(%sEe?T3)~oXQB,NUga3}}/]kfD6,AO}Lz;e", "Kvl?R.B:msw1PX=kP&X", '20FPf?A%a;|c3E_"EZ[>m0*$+kwa/]Hf;04~:tQI', "6K|*)%%+l;U3I", "E_TP|v<g.u&8^68j)hHcdh7E+QjqW!UjIZ]1_O0M", "e{8?I1Y~Lr4", "&Nv#H*/r%umk@VT)X)I+G6J{=kq}I", '+~^g+iSgcEdPd"oY*bGm~*fkCQ7ig*Zk5?zgkG&iSEmsuwK)t6I', "DPc~pV2xw?5", "W09,lm4+Xo]Q393(Ojal&lez{d7F(RGSd)M", 'Y$@!gfG3}kh%P]eSmajP.^(@J?A3PXK[^].%T{^gqs]g|c8uNe"Agfh+{19|=', "KeTed}J3tr:FOCLS,?nOcq0{bCpy9(4Z:=", "O]nOu<=", "Wv<~m<[+2C.zK6F.0l@lEz^YeB", '>$W~E<(3e3r3<F?f+KGm"', "~f:j:%dACdEBnV%REN~jWtJra`Hh+Ns.;)2$vN7~Mu|k`RFjb&X", "cTQm78Ak}kVPQnUu|vPj{wu1w?6jr]_S?v0P#._V?u", "`*4>_9<I3b7C;6py,A?ge,,)~CPgO&gN)A)P6T95&Y<#j4>kYI", 'oXq!J.M@YL<{>*nRT0.edJL"vsPq=XRYaD0m)]tg,E!@tnGZf_X', "/D_Bo3A{7h@Y{9,fl=", 'a0O1[NM@`oE95Fxul$F%l(I1@YWs"(WxVZMR=S2)g', "cT^%b4X}wr*>1ndYA)Fm#4T$i1g)sX&)pvo!^z0+mbnfm]dN*0f8HG5VOYK", "o6}>jV,g[CsAaX", "khb>7855I?+`pV|ufh{PIh:@s`pKI", "+hGeLK)gC]T%d!buR*f>w.2Y|kJs|6!R;?(~uzG#drwsj.B", 'RhL?{a1VV1~0Y(T[,$X8+VIEV1bw"nK~Ukz,xlc(zo)jnLcj.DFc<}75{QC0I', 'U_R>T#lg:387MUF"rk.m<ziAokffm*z"20ygq,/rV1ce6]?fo]I', '.eX>P<?+.u9iT.vS,vSA"', "V$LeA4I}tTfm/c)~/Z(~b095f?h%=S&(y*2st5(M", "/;L+j*~g23ZigwY`ArLmGK/@:ujqgRr", 'ma$BRKco%oW7UUQRwvLA>*"xZEeAF}0@vA=?^K_5R]Jr"6>[d=', 'F0X|FhQzPCpyJX7"KXX~xDuE}?+q8LQPv`D4i<2Y23&8EnU_^FM', "r{+l<]+rE]J|pLl&[r`~ofHYML~q`X)x=L6A>]lI", 'P)4$##J#@3OiO&_"s>{ck', 'n>/B?|L1FEOs4"nR"`eRHV=', "LZvjL4I59bfz4NEuaAD|#6OEML!z=", '|DFgHGhD7e|b`L"[*;i?)]$gAEb)pXufU~VcKT)x^3^1*Cp5n>lA', "W6IGUq>M", "il$~Y.&s{a5B%R;(ukY+{3=", "L?t?8fT){b*irSE", "I?K?i#uIdL0c:!15Dve>i(G37uQB0}0(TNsGH.=", '>?^*c#1E"0)6SC]P|CN,d{{+.E^T8X', "P#(BrzssVk$ma(T~1D5>j]xOZ`Y@iLUurDS?.NGA20.", "K;h19h@%Tk35/Xo~DlK$&GEV9k[QI", "~{cUR]9TSEs9Z*q&a?R#4NvVs`SBb.(@(&.jN!t54?$", 'K;"A^%tu:u!i0NP+#a^gt]eu{sXGI9+~/N4>yZMk7Kqs)Md(', "^$#$VFRunh5q[wyZm$0jF#?klC~zpL+(vjk8vas(oT.mU(j~_074%8z$A", "c?=+xa@i`o#ycLR5.#@AJ4h{RY^rBNOuyK/#$$:3]0H~I", "N?l>1|N51o5R98~(d=", "Uc)PdJM@LQ.XV3iR0lZeW%B(kuacMU", 'UDt>0Swf[C+Bi*xuoj[>w("~!kH{c<wf,DP,(9o@oLw{HFQPr*6A', "*Au|^*bO[0ZX<.@Pv09%MJw3LQ|bI", 'y)/|O./op`1jQnZk8D|%"', "ErFPaqx^fr*7SC_.D?w1`", "JFd$tZG@#bHh?E>YB*<1Bzl~JKi}fNTY{KvB*qF34KuqZX,~N60,G4>(AE", 'rKrgwzQ5|0"', 'eKAeQZA[8;9"I88jfX"G?1@:>h#siL~+]fqepKm%G]+m~!b&D$&>/F/M', "VjXU+%a3Xhn8V<^Rjh{ex55~ECCD)C}&[#)c>l=", "1KQjB.*K<rS,*CDN~D}>#.qz^u71`]L&7fvgA1XH}eQAoR(@X#M", "}$ae@]P%Mh4b/XL`MdJ#G}9V$rBOf&ej", "{;>OhJ#fA3/i&&F.G$)tw<uuoLHIGzSj5A)P4wTI", "3N{g=fp%3Y~qgXcj9C%1<Gh+R;:F0F1Z", 'lCeGZl8{@`J7zzg"2SxRA6(3C]bqW">+Ch@lh3#kg', "Q~EB^m}I", "pl3>:d]I", "pCieVDhMM", "ueAC[PYjL", ")f2=i+.TL", "sX[=`P2JL", "xuPK|>zbo", "8O(:MR@YB=b)_e=nhABc", "(wNKWSzb1=K.~bHN>;Tc", "WtZ/An*wuYi9VlgDhA,B", '|ElBL9/"h=20<!cjArKB', "cV]lK[7T", "fM4=/J,N", "ET1CxX!f", "[x6p~8%N", 'k)LR""B5E8u', "lEmd(#Mu", "M;5domXu", "6yIE|mJu", "D;=2", ';;tH0m"u', "mQ:ne", "O;vD4nt", "O;l3h[qu", "+;42", "$PIOe^%z", "x1F~{:jklK*Y!", 'AC*:@#"s2I#Ua', "_{iUwYiiy;vX.", "J5o)p#j9`D", "5iec+/+Lz_%]A?%FIJrI%Wc1B", ",3>zfZ^MC+O~Z?H7Byr}x{L3N", "^$]bQsY9ayh^UC4`,3r}K5ZXA", ",xRb!EVA2{=S~>3bT$F}7w@X&u", 'gMX4@kHX5"j82qIb3xX4P%)&4Q', "~:;1#Z.D)|%%HE?bJ/v)sZ^LQN", ",44K(%<_T|n_8EbyBj2BRZ$?QN", "k44Kn]a^w+3XBd}|*~g}jc)&aQ", "~:;1mW`n$|?ZHZe[BjSB6%eiL|", "L4:q2%@$IOxZvAe[D>HfZcU$uQ", ")<D_Ze|*", "no_@0Tm|", "&?$&Ax51&R", "lA!8{kh*", "2}^9", "E?u9|", "kY(9", "^AH&[.!", "P/c+Gqvc", "s<G6+Oh*"]), uc(cs = function(...bb) {
      uc(bb[Cc[12]] = Cc[1], bb[-Cc[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[Cc[2]] = Cc[18], bb[-Cc[13]] = []);
      try {
        uc(bb[Cc[2]] = Object, bb[-Cc[13]][Cc[27]]("".__proto__.constructor.name))
      } catch (ec) {}
      bb: for (bb[Cc[14]] = Cc[1]; bb[Cc[14]] < bb[-Cc[15]][Cc[12]]; bb[Cc[14]]++) try {
        for (bb[Cc[2]] = bb[-Cc[15]][bb[Cc[14]]](), bb[-Cc[16]] = Cc[1]; bb[-Cc[16]] < bb[-Cc[13]][Cc[12]]; bb[-Cc[16]]++)
          if (typeof bb[Cc[2]][bb[-Cc[13]][bb[-Cc[16]]]] === Cc[17]) continue bb;
        return bb[Cc[2]]
      } catch (ec) {}
      return bb[Cc[2]] || this
    }() || {}, ss = cs.TextDecoder, ks = cs.Uint8Array, Ws = cs.Dm, as = cs.String || String, Ts = cs.Array || Array, Us = function(...bb) {
      return uc(bb[Cc[12]] = Cc[1], bb[Cc[19]] = new Ts(Cc[60]), bb[Cc[2]] = as[Cc[25]] || as.fromCharCode, bb[Cc[20]] = []),
        function(...cb) {
          for (uc(cb[Cc[12]] = Cc[2], cb[-Cc[22]] = Cc[18], cb[Cc[21]] = Cc[18], cb[Cc[19]] = cb[Cc[1]][Cc[12]], bb[Cc[20]][Cc[12]] = Cc[1]), cb[Cc[10]] = Cc[1]; cb[Cc[10]] < cb[Cc[19]];) uc(cb[Cc[21]] = cb[Cc[1]][cb[Cc[10]]++], cb[Cc[21]] <= Cc[59] ? cb[-Cc[22]] = cb[Cc[21]] : cb[Cc[21]] <= Cc[21] ? cb[-Cc[22]] = (31 & cb[Cc[21]]) << Cc[24] | cb[Cc[1]][cb[Cc[10]]++] & Cc[23] : cb[Cc[21]] <= 239 ? cb[-Cc[22]] = (15 & cb[Cc[21]]) << Cc[26] | (cb[Cc[1]][cb[Cc[10]]++] & Cc[23]) << Cc[24] | cb[Cc[1]][cb[Cc[10]]++] & Cc[23] : as[Cc[25]] ? cb[-Cc[22]] = (cb[Cc[21]] & Cc[7]) << 18 | (cb[Cc[1]][cb[Cc[10]]++] & Cc[23]) << Cc[26] | (cb[Cc[1]][cb[Cc[10]]++] & Cc[23]) << Cc[24] | cb[Cc[1]][cb[Cc[10]]++] & Cc[23] : (cb[-Cc[22]] = Cc[23], cb[Cc[10]] += Cc[40]), bb[Cc[20]][Cc[27]](bb[Cc[19]][cb[-Cc[22]]] || (bb[Cc[19]][cb[-Cc[22]]] = bb[Cc[2]](cb[-Cc[22]]))));
          return bb[Cc[20]].join("")
        }
    }()), Nc(Cc[28]) + "Z" in Lc && function(...bb) {
      uc(bb[Cc[12]] = Cc[1], bb[-Cc[31]] = function(...bb) {
        for (uc(bb[Cc[12]] = Cc[2], bb[Cc[2]] = bb[Cc[1]].length, bb[Cc[30]] = [], bb[Cc[19]] = Cc[1]), bb[-Cc[29]] = Cc[1]; bb[-Cc[29]] < bb[Cc[2]]; bb[-Cc[29]]++) bb[Cc[30]].push(bb[-Cc[29]] !== Cc[1] && bb[Cc[1]][bb[-Cc[29]]] > bb[Cc[1]][bb[-Cc[29]] - Cc[2]] ? bb[Cc[30]][bb[-Cc[29]] - Cc[2]] + Cc[2] : Cc[2]);
        for (bb[Cc[8]] = bb[Cc[2]] - Cc[2]; bb[Cc[8]] >= Cc[1]; bb[Cc[8]]--) bb[Cc[8]] !== bb[Cc[2]] - Cc[2] && bb[Cc[1]][bb[Cc[8]]] > bb[Cc[1]][bb[Cc[8]] + Cc[2]] && (bb[Cc[30]][bb[Cc[8]]] = Math.max(bb[Cc[30]][bb[Cc[8]]], bb[Cc[30]][bb[Cc[8]] + Cc[2]] + Cc[2])), bb[Cc[19]] += bb[Cc[30]][bb[Cc[8]]];
        return bb[Cc[19]]
      }, console.log(bb[-Cc[31]]))
    }(), (() => {
      function bb(...bb) {
        return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = function(...bb) {
          for (uc(bb[Cc[12]] = Cc[2], bb[Cc[34]] = 'HXTABcoLfrqEaJOIgYkjDpPQbseFGUdKChnSNRMWu"7Vi}vlt:Zw./=,<^8#!x6*(yz019;[)2`?5|]3+>&%4~_@m{$', bb[-Cc[33]] = "" + (bb[Cc[1]] || ""), bb[Cc[19]] = bb[-Cc[33]].length, bb[Cc[10]] = [], bb[Cc[8]] = Cc[1], bb[Cc[9]] = Cc[1], bb[Cc[7]] = -Cc[2]), bb[Cc[3]] = Cc[1]; bb[Cc[3]] < bb[Cc[19]]; bb[Cc[3]]++)
            if (bb[Cc[35]] = bb[Cc[34]].indexOf(bb[-Cc[33]][bb[Cc[3]]]), bb[Cc[35]] !== -Cc[2])
              if (bb[Cc[7]] < Cc[1]) bb[Cc[7]] = bb[Cc[35]];
              else {
                uc(bb[Cc[7]] += bb[Cc[35]] * Cc[28], bb[Cc[8]] |= bb[Cc[7]] << bb[Cc[9]], bb[Cc[9]] += (bb[Cc[7]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                do {
                  uc(bb[Cc[10]].push(bb[Cc[8]] & Cc[11]), bb[Cc[8]] >>= Cc[3], bb[Cc[9]] -= Cc[3])
                } while (bb[Cc[9]] > Cc[7]);
                bb[Cc[7]] = -Cc[2]
              } return bb[Cc[7]] > -Cc[2] && bb[Cc[10]].push((bb[Cc[8]] | bb[Cc[7]] << bb[Cc[9]]) & Cc[11]), Vc(bb[Cc[10]])
        }(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
      } [][Cc[12]] = Cc[1];
      const cb = Cc[35],
        sb = Nc(93) + bb(94) + bb(95) + bb(96) + bb(97),
        kb = {
          [Cc[35]]: bb(Cc[45]) + bb(99) + bb(100) + bb(101)
        },
        Wb = (...cb) => {
          cb[Cc[12]] = Cc[2];
          const sb = kb[cb[Cc[1]]];
          if (!sb) {
            function Wb(...bb) {
              for (uc(bb[Cc[12]] = Cc[2], bb[-Cc[41]] = 'fTNuMF5Vvc=9$#S]0@;Y,_nsL(<At[E/pbQmay>wHG^x21O~7}%6k`:zB3Ir{4jq!Rhl8Ui&)oWJCeZgXKd*+P|?."D', bb[Cc[32]] = "" + (bb[Cc[1]] || ""), bb[Cc[40]] = bb[Cc[32]].length, bb[Cc[44]] = [], bb[Cc[42]] = Cc[1], bb[Cc[43]] = Cc[1], bb[Cc[7]] = -Cc[2]), bb[Cc[3]] = Cc[1]; bb[Cc[3]] < bb[Cc[40]]; bb[Cc[3]]++)
                if (bb[Cc[35]] = bb[-Cc[41]].indexOf(bb[Cc[32]][bb[Cc[3]]]), bb[Cc[35]] !== -Cc[2])
                  if (bb[Cc[7]] < Cc[1]) bb[Cc[7]] = bb[Cc[35]];
                  else {
                    uc(bb[Cc[7]] += bb[Cc[35]] * Cc[28], bb[Cc[42]] |= bb[Cc[7]] << bb[Cc[43]], bb[Cc[43]] += (bb[Cc[7]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                    do {
                      uc(bb[Cc[44]].push(bb[Cc[42]] & Cc[11]), bb[Cc[42]] >>= Cc[3], bb[Cc[43]] -= Cc[3])
                    } while (bb[Cc[43]] > Cc[7]);
                    bb[Cc[7]] = -Cc[2]
                  } return bb[Cc[7]] > -Cc[2] && bb[Cc[44]].push((bb[Cc[42]] | bb[Cc[7]] << bb[Cc[43]]) & Cc[11]), Vc(bb[Cc[44]])
            }

            function ab(...bb) {
              return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = Wb(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
            }
            throw new Error(bb(102) + ab(103) + ab(104) + ab(105) + " v" + cb[Cc[1]])
          }
          return [Cc[1], Cc[2], Cc[0], Cc[40], Cc[10], Cc[8], Cc[24], Cc[7]].map(((...bb) => (bb[Cc[12]] = Cc[2], parseInt(sb[function(...bb) {
            return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = function(...bb) {
              for (uc(bb[Cc[12]] = Cc[2], bb[-Cc[15]] = 'JXI+SPj!p{`gnBDLtbM@%;}Ucl7K4G3kZ.(~#CEzd?&T=_[,Oy9uF5|aNvr$)>eY82o0qW6*VxfhR<s1m"A:]Q/w^iH', bb[Cc[32]] = "" + (bb[Cc[1]] || ""), bb[Cc[19]] = bb[Cc[32]].length, bb[Cc[10]] = [], bb[-Cc[45]] = Cc[1], bb[Cc[24]] = Cc[1], bb[Cc[47]] = -Cc[2]), bb[Cc[3]] = Cc[1]; bb[Cc[3]] < bb[Cc[19]]; bb[Cc[3]]++)
                if (bb[Cc[46]] = bb[-Cc[15]].indexOf(bb[Cc[32]][bb[Cc[3]]]), bb[Cc[46]] !== -Cc[2])
                  if (bb[Cc[47]] < Cc[1]) bb[Cc[47]] = bb[Cc[46]];
                  else {
                    uc(bb[Cc[47]] += bb[Cc[46]] * Cc[28], bb[-Cc[45]] |= bb[Cc[47]] << bb[Cc[24]], bb[Cc[24]] += (bb[Cc[47]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                    do {
                      uc(bb[Cc[10]].push(bb[-Cc[45]] & Cc[11]), bb[-Cc[45]] >>= Cc[3], bb[Cc[24]] -= Cc[3])
                    } while (bb[Cc[24]] > Cc[7]);
                    bb[Cc[47]] = -Cc[2]
                  } return bb[Cc[47]] > -Cc[2] && bb[Cc[10]].push((bb[-Cc[45]] | bb[Cc[47]] << bb[Cc[24]]) & Cc[11]), Vc(bb[Cc[10]])
            }(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
          }(106)](bb[Cc[1]] * Cc[3], bb[Cc[1]] * Cc[3] + Cc[3]), 16))))
        };
      uc(ac = (...bb) => (bb[Cc[12]] = Cc[2], bb[Cc[1]] >= cb), Tc = (...bb) => {
        function cb(...bb) {
          return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = function(...bb) {
            for (uc(bb[Cc[12]] = Cc[2], bb[-Cc[50]] = 't(u{>@:&`H2%~=.;rwM?l45O^,q6Fe+SD]JgRbX7o|AyG$V0/j"Q<xEdzIYa1B9Z_*Pcmk!sUCN)n3h#T[pviW8fLK}', bb[Cc[0]] = "" + (bb[Cc[1]] || ""), bb[Cc[49]] = bb[Cc[0]].length, bb[Cc[14]] = [], bb[-Cc[51]] = Cc[1], bb[Cc[24]] = Cc[1], bb[Cc[7]] = -Cc[2]), bb[Cc[48]] = Cc[1]; bb[Cc[48]] < bb[Cc[49]]; bb[Cc[48]]++)
              if (bb[Cc[35]] = bb[-Cc[50]].indexOf(bb[Cc[0]][bb[Cc[48]]]), bb[Cc[35]] !== -Cc[2])
                if (bb[Cc[7]] < Cc[1]) bb[Cc[7]] = bb[Cc[35]];
                else {
                  uc(bb[Cc[7]] += bb[Cc[35]] * Cc[28], bb[-Cc[51]] |= bb[Cc[7]] << bb[Cc[24]], bb[Cc[24]] += (bb[Cc[7]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                  do {
                    uc(bb[Cc[14]].push(bb[-Cc[51]] & Cc[11]), bb[-Cc[51]] >>= Cc[3], bb[Cc[24]] -= Cc[3])
                  } while (bb[Cc[24]] > Cc[7]);
                  bb[Cc[7]] = -Cc[2]
                } return bb[Cc[7]] > -Cc[2] && bb[Cc[14]].push((bb[-Cc[51]] | bb[Cc[7]] << bb[Cc[24]]) & Cc[11]), Vc(bb[Cc[14]])
          }(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
        }
        bb[Cc[12]] = Cc[0], cb(107) in Lc && function(...bb) {
          uc(bb[Cc[12]] = Cc[1], bb[-Cc[53]] = function(...cb) {
            return uc(cb[Cc[12]] = Cc[40], cb[Cc[40]] = {}), cb[Cc[0]].length !== cb[Cc[1]].length + cb[Cc[2]].length ? Cc[52] : bb[Cc[14]](cb[Cc[1]], cb[Cc[2]], cb[Cc[0]], Cc[1], Cc[1], Cc[1], cb[Cc[40]])
          }, bb[Cc[14]] = function(cb, sb, kb, Wb, ab, Tb, Ub) {
            var Ib = Cc[52];
            return Tb >= kb.length ? Cc[65] : Ub["" + Wb + ab + Tb] !== Cc[18] ? Ub["" + Wb + ab + Tb] : (kb[Tb] === cb[Wb] && kb[Tb] === sb[ab] ? Ib = bb[Cc[14]](cb, sb, kb, Wb + Cc[2], ab, Tb + Cc[2], Ub) || bb[Cc[14]](cb, sb, kb, Wb, ab + Cc[2], Tb + Cc[2], Ub) : kb[Tb] === cb[Wb] ? Ib = bb[Cc[14]](cb, sb, kb, Wb + Cc[2], ab, Tb + Cc[2], Ub) : kb[Tb] === sb[ab] && (Ib = bb[Cc[14]](cb, sb, kb, Wb, ab + Cc[2], Tb + Cc[2], Ub)), Ub["" + Wb + ab + Tb] = Ib, Ib)
          }, console.log(bb[-Cc[53]]))
        }();
        const sb = crypto[cb(108) + cb(109) + cb(Cc[41])](new Uint8Array(Hc)),
          kb = Wc[Cc[42]][cb(111) + cb(112)](bb[Cc[2]], {
            [cb(113)]: Cc[2]
          });
        Ic(Wb(bb[Cc[1]]), sb, Cc[2], kb);
        const ab = new Uint8Array(Hc + kb[cb(114)]);
        return uc(ab[cb(Cc[54])](sb), ab[cb(Cc[54])](kb, Hc)), ab
      }, Uc = (...bb) => {
        function cb(...bb) {
          return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = function(...bb) {
            for (uc(bb[Cc[12]] = Cc[2], bb[-Cc[57]] = '!z*`}(2y189"5u$<Nl=pDRK)a+|~EsH&6ng>jv@JA/mQ3^#{rPhY,TW[7MfG?0U4cioBkI.wdXL:O_ZCxeFbV%]qSt;', bb[-Cc[55]] = "" + (bb[Cc[1]] || ""), bb[Cc[19]] = bb[-Cc[55]].length, bb[Cc[14]] = [], bb[Cc[8]] = Cc[1], bb[Cc[9]] = Cc[1], bb[-Cc[58]] = -Cc[2]), bb[Cc[56]] = Cc[1]; bb[Cc[56]] < bb[Cc[19]]; bb[Cc[56]]++)
              if (bb[Cc[6]] = bb[-Cc[57]].indexOf(bb[-Cc[55]][bb[Cc[56]]]), bb[Cc[6]] !== -Cc[2])
                if (bb[-Cc[58]] < Cc[1]) bb[-Cc[58]] = bb[Cc[6]];
                else {
                  uc(bb[-Cc[58]] += bb[Cc[6]] * Cc[28], bb[Cc[8]] |= bb[-Cc[58]] << bb[Cc[9]], bb[Cc[9]] += (bb[-Cc[58]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                  do {
                    uc(bb[Cc[14]].push(bb[Cc[8]] & Cc[11]), bb[Cc[8]] >>= Cc[3], bb[Cc[9]] -= Cc[3])
                  } while (bb[Cc[9]] > Cc[7]);
                  bb[-Cc[58]] = -Cc[2]
                } return bb[-Cc[58]] > -Cc[2] && bb[Cc[14]].push((bb[Cc[8]] | bb[-Cc[58]] << bb[Cc[9]]) & Cc[11]), Vc(bb[Cc[14]])
          }(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
        }
        if (bb[Cc[12]] = Cc[0], cb(116) + "j" in Lc && function(...bb) {
            function sb(...bb) {
              for (uc(bb[Cc[12]] = Cc[2], bb[Cc[5]] = 'a.ABJrMNfQIg3?[xu|yD7`v$L:}K%,mcbk&5P>Vow0lFe!^n4SzXOUhTYGd{C"+_;]=RWZ~#qHi1)/psE@jt8<9*62(', bb[Cc[0]] = "" + (bb[Cc[1]] || ""), bb[Cc[22]] = bb[Cc[0]].length, bb[Cc[14]] = [], bb[Cc[8]] = Cc[1], bb[Cc[9]] = Cc[1], bb[Cc[47]] = -Cc[2]), bb[Cc[39]] = Cc[1]; bb[Cc[39]] < bb[Cc[22]]; bb[Cc[39]]++)
                if (bb[Cc[35]] = bb[Cc[5]].indexOf(bb[Cc[0]][bb[Cc[39]]]), bb[Cc[35]] !== -Cc[2])
                  if (bb[Cc[47]] < Cc[1]) bb[Cc[47]] = bb[Cc[35]];
                  else {
                    uc(bb[Cc[47]] += bb[Cc[35]] * Cc[28], bb[Cc[8]] |= bb[Cc[47]] << bb[Cc[9]], bb[Cc[9]] += (bb[Cc[47]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                    do {
                      uc(bb[Cc[14]].push(bb[Cc[8]] & Cc[11]), bb[Cc[8]] >>= Cc[3], bb[Cc[9]] -= Cc[3])
                    } while (bb[Cc[9]] > Cc[7]);
                    bb[Cc[47]] = -Cc[2]
                  } return bb[Cc[47]] > -Cc[2] && bb[Cc[14]].push((bb[Cc[8]] | bb[Cc[47]] << bb[Cc[9]]) & Cc[11]), Vc(bb[Cc[14]])
            }

            function kb(...bb) {
              return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = sb(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
            }
            bb[Cc[12]] = Cc[1], uc(bb[Cc[61]] = cb(117) + kb(118) + kb(Cc[31]) + kb(120), bb[Cc[62]] = kb(121) + kb(122) + kb(123) + "?", bb[Cc[19]] = kb(124) + kb(125) + kb(126) + kb(Cc[59]) + kb(Cc[60]) + kb(129) + kb(130) + ")", bb[Cc[61]].match(bb[Cc[62]] + bb[Cc[19]]))
          }(), bb[Cc[2]][cb(131)] < Hc) {
          function Tb(...bb) {
            for (uc(bb[Cc[12]] = Cc[2], bb[Cc[2]] = 'PB|<s:r3@,JeR9$?Z&/Lh1]Haq[^4yuF6;lMd~zgC>m0}N.V`8=_D7#x*tv!)Toc5nwIW%(+fUi2p"X{EbGOjSAKYkQ', bb[Cc[32]] = "" + (bb[Cc[1]] || ""), bb[-Cc[41]] = bb[Cc[32]].length, bb[Cc[10]] = [], bb[-Cc[63]] = Cc[1], bb[Cc[9]] = Cc[1], bb[Cc[7]] = -Cc[2]), bb[Cc[3]] = Cc[1]; bb[Cc[3]] < bb[-Cc[41]]; bb[Cc[3]]++)
              if (bb[Cc[6]] = bb[Cc[2]].indexOf(bb[Cc[32]][bb[Cc[3]]]), bb[Cc[6]] !== -Cc[2])
                if (bb[Cc[7]] < Cc[1]) bb[Cc[7]] = bb[Cc[6]];
                else {
                  uc(bb[Cc[7]] += bb[Cc[6]] * Cc[28], bb[-Cc[63]] |= bb[Cc[7]] << bb[Cc[9]], bb[Cc[9]] += (bb[Cc[7]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                  do {
                    uc(bb[Cc[10]].push(bb[-Cc[63]] & Cc[11]), bb[-Cc[63]] >>= Cc[3], bb[Cc[9]] -= Cc[3])
                  } while (bb[Cc[9]] > Cc[7]);
                  bb[Cc[7]] = -Cc[2]
                } return bb[Cc[7]] > -Cc[2] && bb[Cc[10]].push((bb[-Cc[63]] | bb[Cc[7]] << bb[Cc[9]]) & Cc[11]), Vc(bb[Cc[10]])
          }

          function Ub(...bb) {
            return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = Tb(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
          }

          function Ib(...bb) {
            uc(bb[Cc[12]] = Cc[1], bb[Cc[5]] = function(...cb) {
              return uc(cb[Cc[12]] = Cc[40], cb[Cc[5]] = {}), cb[Cc[0]].length !== cb[Cc[1]].length + cb[Cc[2]].length ? Cc[52] : bb[-Cc[64]](cb[Cc[1]], cb[Cc[2]], cb[Cc[0]], Cc[1], Cc[1], Cc[1], cb[Cc[5]])
            }, bb[-Cc[64]] = function(...cb) {
              return uc(cb[Cc[12]] = Cc[7], cb[Cc[7]] = Cc[52]), cb[Cc[8]] >= cb[Cc[0]].length ? Cc[65] : cb[Cc[24]]["" + cb[Cc[40]] + cb[Cc[10]] + cb[Cc[8]]] !== Cc[18] ? cb[Cc[24]]["" + cb[Cc[40]] + cb[Cc[10]] + cb[Cc[8]]] : (cb[Cc[0]][cb[Cc[8]]] === cb[Cc[1]][cb[Cc[40]]] && cb[Cc[0]][cb[Cc[8]]] === cb[Cc[2]][cb[Cc[10]]] ? cb[Cc[7]] = bb[-Cc[64]](cb[Cc[1]], cb[Cc[2]], cb[Cc[0]], cb[Cc[40]] + Cc[2], cb[Cc[10]], cb[Cc[8]] + Cc[2], cb[Cc[24]]) || bb[-Cc[64]](cb[Cc[1]], cb[Cc[2]], cb[Cc[0]], cb[Cc[40]], cb[Cc[10]] + Cc[2], cb[Cc[8]] + Cc[2], cb[Cc[24]]) : cb[Cc[0]][cb[Cc[8]]] === cb[Cc[1]][cb[Cc[40]]] ? cb[Cc[7]] = bb[-Cc[64]](cb[Cc[1]], cb[Cc[2]], cb[Cc[0]], cb[Cc[40]] + Cc[2], cb[Cc[10]], cb[Cc[8]] + Cc[2], cb[Cc[24]]) : cb[Cc[0]][cb[Cc[8]]] === cb[Cc[2]][cb[Cc[10]]] && (cb[Cc[7]] = bb[-Cc[64]](cb[Cc[1]], cb[Cc[2]], cb[Cc[0]], cb[Cc[40]], cb[Cc[10]] + Cc[2], cb[Cc[8]] + Cc[2], cb[Cc[24]])), cb[Cc[24]]["" + cb[Cc[40]] + cb[Cc[10]] + cb[Cc[8]]] = cb[Cc[7]], cb[Cc[7]])
            }, console.log(bb[Cc[5]]))
          }
          throw Ub(132) in Lc && Ib(), new Error(sb)
        }
        const kb = new Uint8Array(bb[Cc[2]][cb(Cc[66])](Hc));
        Ic(Wb(bb[Cc[1]]), bb[Cc[2]][cb(Cc[66])](Cc[1], Hc), Cc[2], kb);
        const ab = new(Wc[Cc[42]][cb(Cc[62]) + Cc[42]])({
          [cb(135)]: Cc[65]
        });
        if (ab[cb(136)](kb), ab[cb(Cc[53])] || !ab[cb(138)]) {
          function Hb(...bb) {
            for (uc(bb[Cc[12]] = Cc[2], bb[Cc[5]] = 'ScbIBJ+,[C3gtiEnG/R.;l0@{4>jN2har#|=HLF&ToU`dY]ZxKzAu}yD:)wvf8qes<*?9M_(P"VX5$k1^!6~OWpQm7%', bb[Cc[32]] = "" + (bb[Cc[1]] || ""), bb[-Cc[68]] = bb[Cc[32]].length, bb[Cc[14]] = [], bb[Cc[8]] = Cc[1], bb[Cc[24]] = Cc[1], bb[Cc[7]] = -Cc[2]), bb[-Cc[67]] = Cc[1]; bb[-Cc[67]] < bb[-Cc[68]]; bb[-Cc[67]]++)
              if (bb[Cc[35]] = bb[Cc[5]].indexOf(bb[Cc[32]][bb[-Cc[67]]]), bb[Cc[35]] !== -Cc[2])
                if (bb[Cc[7]] < Cc[1]) bb[Cc[7]] = bb[Cc[35]];
                else {
                  uc(bb[Cc[7]] += bb[Cc[35]] * Cc[28], bb[Cc[8]] |= bb[Cc[7]] << bb[Cc[24]], bb[Cc[24]] += (bb[Cc[7]] & Cc[36]) > Cc[37] ? Cc[38] : Cc[39]);
                  do {
                    uc(bb[Cc[14]].push(bb[Cc[8]] & Cc[11]), bb[Cc[8]] >>= Cc[3], bb[Cc[24]] -= Cc[3])
                  } while (bb[Cc[24]] > Cc[7]);
                  bb[Cc[7]] = -Cc[2]
                } return bb[Cc[7]] > -Cc[2] && bb[Cc[14]].push((bb[Cc[8]] | bb[Cc[7]] << bb[Cc[24]]) & Cc[11]), Vc(bb[Cc[14]])
          }

          function fb(...bb) {
            return bb[Cc[12]] = Cc[2], typeof Qc[bb[Cc[1]]] === Cc[17] ? Qc[bb[Cc[1]]] = Hb(ec[bb[Cc[1]]]) : Qc[bb[Cc[1]]]
          }

          function Mb(...bb) {
            var cb;
            uc(bb[Cc[12]] = Cc[1], cb = function(...bb) {
              uc(bb[Cc[12]] = Cc[2], this.GM = bb[Cc[1]], this.length = Cc[1], this.map = {}, this.head = Cc[70], this.tail = Cc[70])
            }, cb.prototype.get = function(...bb) {
              var cb;
              return uc(bb[Cc[12]] = Cc[2], cb = this.map[bb[Cc[1]]]), cb ? (this.remove(cb), this.insert(cb.key, cb.val), cb.val) : -Cc[2]
            }, cb.prototype.put = function(...bb) {
              uc(bb[Cc[12]] = Cc[0], this.map[bb[Cc[1]]] ? (this.remove(this.map[bb[Cc[1]]]), this.insert(bb[Cc[1]], bb[Cc[2]])) : this.length === this.GM ? (this.remove(this.head), this.insert(bb[Cc[1]], bb[Cc[2]])) : (this.insert(bb[Cc[1]], bb[Cc[2]]), this.length++))
            }, cb.prototype.remove = function(...bb) {
              uc(bb[Cc[12]] = Cc[2], bb[Cc[5]] = bb[Cc[1]].prev, bb[Cc[71]] = bb[Cc[1]].next), bb[Cc[71]] && (bb[Cc[71]].prev = bb[Cc[5]]), bb[Cc[5]] && (bb[Cc[5]].next = bb[Cc[71]]), this.head === bb[Cc[1]] && (this.head = bb[Cc[71]]), this.tail === bb[Cc[1]] && (this.tail = bb[Cc[5]]), delete this.map[bb[Cc[1]].key]
            }, cb.prototype.insert = function(...bb) {
              uc(bb[Cc[12]] = Cc[0], bb[Cc[0]] = new List(bb[Cc[1]], bb[Cc[2]]), this.tail ? (this.tail.next = bb[Cc[0]], bb[Cc[0]].prev = this.tail, this.tail = bb[Cc[0]]) : (this.tail = bb[Cc[0]], this.head = bb[Cc[0]]), this.map[bb[Cc[1]]] = bb[Cc[0]])
            }, console.log(cb))
          }
          throw fb(Cc[29]) + Cc[69] in Lc && Mb(), new Error(sb)
        }
        return ab[cb(140)]
      })
    })();
    var Yc = sb(36547),
      hc = sb(36556);

    function Jc(bb) {
      return ab.Dm.from(Uint8Array.from(bb))
    }

    function gc(bb) {
      return Array.from(bb)
    }

    function Bc(bb, cb) {
      return {
        [bb]: {
          x: cb
        }
      }
    }

    function tc(bb) {
      if (null === bb || "object" !== typeof bb || Array.isArray(bb)) return bb;
      const cb = Object.keys(bb);
      if (1 !== cb.length) return bb;
      const sb = bb[cb[0]];
      return null !== sb && "object" === typeof sb && !Array.isArray(sb) && "x" in sb ? sb.x : bb
    }

    function yc(bb, cb) {
      return void 0 === cb ? null : Ib.has(bb) ? null === cb ? null : JSON.stringify(cb) : cb
    }

    function Pc(bb, cb) {
      return null === cb && Ib.has(bb) ? null : "string" === typeof cb && Ib.has(bb) ? JSON.parse(cb) : cb
    }

    function Dc(bb, cb, sb) {
      return (0, Wb.L)(sb) ? null : Bc(bb, yc(cb, sb))
    }

    function Ec(bb, cb) {
      return (0, Wb.L)(cb) ? null : Pc(bb, tc(cb))
    }

    function ic(bb) {
      const cb = {};
      for (const sb in bb) {
        const kb = bb[sb];
        cb[sb] = void 0 === kb ? null : kb
      }
      return cb
    }

    function Oc(bb) {
      const cb = {};
      for (const sb in bb) {
        const kb = bb[sb];
        null !== kb && void 0 !== kb && (cb[sb] = kb)
      }
      return cb
    }

    function Gc(bb, cb) {
      return Object.prototype.hasOwnProperty.call(bb, cb)
    }

    function Kc(bb, cb) {
      const sb = {};
      for (const kb in bb) {
        const Wb = bb[kb];
        sb[kb] = cb(Wb)
      }
      return sb
    }

    function Zc(bb, cb, sb) {
      const kb = [];
      for (let Wb = 0; Wb < cb.length; Wb++) {
        const ab = cb[Wb];
        Gc(bb, ab) && kb.push({
          i: Wb,
          v: sb(ab, bb[ab])
        })
      }
      return kb
    }

    function zc(bb, cb, sb) {
      const kb = {};
      for (const Wb of bb) {
        const bb = cb[Wb.i];
        void 0 !== bb ? kb[bb] = sb(bb, Wb.v) : console.error(`Unknown Partial field index ${Wb.i}`)
      }
      return kb
    }

    function qc(bb, cb) {
      return (0, Wb.L)(cb) ? null : "gJ" === bb ? function(bb) {
        return Bc(mb, Zc(bb, hc.x, ((bb, cb) => Dc(ib[bb], bb, cb))))
      }(cb) : Dc(Eb[bb], bb, cb)
    }

    function dc(bb, cb) {
      return (0, Wb.L)(cb) ? null : "gJ" === bb ? function(bb) {
        return (0, Wb.L)(bb) ? null : zc(bb, hc.x, Ec)
      }(tc(cb)) : Ec(bb, cb)
    }

    function Ac(bb) {
      const {
        type: cb,
        ...sb
      } = bb, kb = {};
      for (const Wb in sb) {
        const bb = sb[Wb];
        kb[Wb] = yc(Wb, bb)
      }
      if ("chunkAdded" === cb || "chunkRemoved" === cb) kb.rle = Jc(kb.rle);
      else if ("playSound" === cb) {
        const bb = kb.ba;
        kb.ba = (0, Wb.L)(bb) ? null : ic(bb)
      } else if ("customKillfeed" === cb) {
        var ab, Tb;
        kb.killer = ic(null !== (ab = kb.killer) && void 0 !== ab ? ab : {}), kb.victim = ic(null !== (Tb = kb.victim) && void 0 !== Tb ? Tb : {})
      }
      return {
        [cb]: kb
      }
    }

    function wc(bb) {
      const cb = Object.keys(bb)[0],
        sb = bb[cb],
        kb = {};
      for (const Wb in sb) {
        const bb = sb[Wb];
        kb[Wb] = Pc(Wb, bb)
      }
      if ("chunkAdded" === cb || "chunkRemoved" === cb) kb.rle = gc(kb.rle);
      else if ("playSound" === cb) {
        const bb = kb.ba;
        kb.ba = (0, Wb.L)(bb) ? null : Oc(bb)
      } else if ("customKillfeed" === cb) {
        var ab, Tb;
        kb.killer = Oc(null !== (ab = kb.killer) && void 0 !== ab ? ab : {}), kb.victim = Oc(null !== (Tb = kb.victim) && void 0 !== Tb ? Tb : {})
      }
      return {
        type: cb,
        ...kb
      }
    }

    function rc(bb) {
      var cb, sb;
      return (0, Wb.L)(bb) ? null : {
        name: bb.name,
        amount: null !== (cb = bb.amount) && void 0 !== cb ? cb : null,
        attributes: JSON.stringify(null !== (sb = bb.attributes) && void 0 !== sb ? sb : {})
      }
    }

    function oc(bb) {
      if ((0, Wb.L)(bb)) return null;
      const cb = bb;
      return {
        name: cb.name,
        amount: cb.amount,
        attributes: JSON.parse(cb.attributes)
      }
    }

    function Sc(bb) {
      if ((0, Wb.L)(bb)) return null;
      return {
        fullSlotsArray: Array.isArray(bb.slots),
        entries: Zc(bb, hc.l, ((bb, cb) => {
          if ((0, Wb.L)(cb)) return null;
          if ("slots" === bb) {
            const bb = Array.isArray(cb) ? function(bb) {
              const cb = {};
              for (let sb = 0; sb < bb.length; sb++) cb[sb] = bb[sb];
              return cb
            }(cb) : cb;
            return Bc(Bb, function(bb) {
              const cb = {};
              for (const sb in bb) {
                const kb = bb[sb];
                cb[sb] = rc(kb)
              }
              return cb
            }(bb))
          }
          return Bc(gb, cb)
        }))
      }
    }

    function Rc(bb) {
      if ((0, Wb.L)(bb)) return;
      const cb = bb.fullSlotsArray;
      return zc(bb.entries, hc.l, ((bb, sb) => {
        if ((0, Wb.L)(sb)) return null;
        if ("slots" === bb) {
          const bb = function(bb) {
            const cb = {};
            for (const sb in bb) {
              const kb = bb[sb];
              cb[Number(sb)] = oc(kb)
            }
            return cb
          }(tc(sb));
          return cb ? function(bb) {
            const cb = [];
            for (let sb = 0; sb < Wb.n; sb++) cb.push(sb in bb ? bb[sb] : null);
            return cb
          }(bb) : bb
        }
        return tc(sb)
      }))
    }

    function vc(bb) {
      return {
        entities: Kc(bb.entities, (bb => Zc(bb, hc.k, qc))),
        items: Kc(bb.items, (bb => Zc(bb, hc.q, ((bb, cb) => Dc(Ob[bb], bb, cb))))),
        camera: bb.camera,
        hotbar: Sc(bb.hotbar),
        playerHud: (0, Wb.L)(bb.playerHud) ? null : Zc(bb.playerHud, hc.u, ((bb, cb) => (0, Wb.L)(cb) ? null : function(bb, cb) {
          return {
            [bb]: cb
          }
        }("double", cb))),
        effects: (0, Wb.L)(bb.effects) ? null : (0, Yc.r)(bb.effects),
        uiElements: Zc(bb.uiElements, hc.y, ((bb, cb) => (0, Wb.L)(cb) ? null : JSON.stringify(cb))),
        environment: Zc(bb.environment, hc.w, ((bb, cb) => Dc(Gb[bb], bb, cb))),
        structuralEvents: bb.structuralEvents.map(Ac),
        ephemeralEvents: bb.ephemeralEvents.map(Ac)
      }
    }

    function Fc(bb) {
      var cb;
      const sb = {
          entities: Kc(bb.entities, (bb => {
            const cb = zc(bb, hc.k, dc),
              sb = cb.type ? (0, kb.p)(cb.type) : null;
            return sb && (cb.type = "Mesh", cb.meshKind = sb.meshKind, cb.meshOpts = sb.meshOpts), cb
          })),
          items: Kc(bb.items, (bb => zc(bb, hc.q, Ec))),
          camera: {
            ...bb.camera,
            charging: null !== (cb = bb.camera.charging) && void 0 !== cb && cb
          },
          uiElements: zc(bb.uiElements, hc.y, ((bb, cb) => "string" === typeof cb ? JSON.parse(cb) : cb)),
          environment: zc(bb.environment, hc.w, Ec),
          structuralEvents: bb.structuralEvents.map((bb => {
            const cb = wc(bb);
            return "Tu" === cb.type ? (cb.fromBlockData ??= null, cb.toBlockData ??= null) : "chunkAdded" !== cb.type && "chunkRemoved" !== cb.type || (cb.sharedBlockData ??= []), cb
          })),
          ephemeralEvents: bb.ephemeralEvents.map((bb => wc(bb)))
        },
        ab = Rc(bb.hotbar);
      return void 0 !== ab && (sb.hotbar = ab), (0, Wb.L)(bb.playerHud) || (sb.playerHud = zc(bb.playerHud, hc.u, ((bb, cb) => (0, Wb.L)(cb) ? null : function(bb) {
        if (null === bb || "object" !== typeof bb || Array.isArray(bb)) return bb;
        const cb = Object.keys(bb);
        return 1 !== cb.length || "int" !== cb[0] && "double" !== cb[0] ? bb : bb[cb[0]]
      }(cb)))), (0, Wb.L)(bb.effects) || (sb.effects = (0, Yc.l)(bb.effects)), sb
    }
    let xc, jc;
    var pc, bs, cs, ss, ks, Ws, as, Ts, Us, Is, Hs;
    const fs = [1, "b", 0, "h", 74, "i", 7, "e", 24, 189, 8, 255, "length", 2, "d", 234, "undefined", void 0, 215, 88, "c", 63, 6, "fromCodePoint", 12, "push", 201, "a", 218, "g", 91, 25, 217, 8191, 13, 14, 219, 216, 180, 107, 109, 132, 3, 143, "join", 232, 39, 75, "k", 26, 10, 127, 117, 202, 9, 55, 128, 41, 155, 5, 150, "f", 49, 4, null, 70, 126, 136, 168, ".", !1, 161, 35, 44, 173, 104, 206, 153, 125, 23, 233, 245, 214, 60, "=", ";", "Dm", 151, 43];

    function Ms(...bb) {
      return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = function(...bb) {
        for (ls(bb[fs[12]] = fs[0], bb[fs[0]] = 'fHAbUB>KJdWRISeChgDVPoNEmZtaYOkMcQsiFT5`r&w%vGqLz8nl|/pjXy9:*+[16;3}!={,u$._~)02(?#x^@]47"<', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[4]] = bb[fs[1]].length, bb[-fs[9]] = [], bb[fs[7]] = fs[2], bb[-fs[8]] = fs[2], bb[fs[6]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[fs[4]]; bb[fs[3]]++)
          if (bb[fs[5]] = bb[fs[0]].indexOf(bb[fs[1]][bb[fs[3]]]), bb[fs[5]] !== -fs[0])
            if (bb[fs[6]] < fs[2]) bb[fs[6]] = bb[fs[5]];
            else {
              ls(bb[fs[6]] += bb[fs[5]] * fs[30], bb[fs[7]] |= bb[fs[6]] << bb[-fs[8]], bb[-fs[8]] += (bb[fs[6]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
              do {
                ls(bb[-fs[9]].push(bb[fs[7]] & fs[11]), bb[fs[7]] >>= fs[10], bb[-fs[8]] -= fs[10])
              } while (bb[-fs[8]] > fs[6]);
              bb[fs[6]] = -fs[0]
            } return bb[fs[6]] > -fs[0] && bb[-fs[9]].push((bb[fs[7]] | bb[fs[6]] << bb[-fs[8]]) & fs[11]), Xs(bb[-fs[9]])
      }(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
    }

    function Xs(...bb) {
      return bb[fs[12]] = fs[0], typeof ss !== fs[16] && ss ? (new ss).decode(new ks(bb[fs[2]])) : typeof Ws !== fs[16] && Ws ? Ws.from(bb[fs[2]]).toString("utf-8") : Us(bb[fs[2]])
    }

    function ns() {}

    function ms(bb, cb, sb, kb = {}, Wb, ab, Tb, Ub) {
      if (ab || (ab = function(...bb) {
          return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = Wb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
        }), Wb || (Wb = function(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'G.f~=9y`rthDIP!J;q#sRCLF2Zx"pY_X]liAU&*MH60TWwV?md{eK+buQ@Bg(,Ez^)8%><n5cO$3S7N:ok[jv/|}14a', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[1]].length, bb[-fs[36]] = [], bb[-fs[31]] = fs[2], bb[-fs[32]] = fs[2], bb[fs[29]] = -fs[0]), bb[fs[10]] = fs[2]; bb[fs[10]] < bb[fs[20]]; bb[fs[10]]++)
            if (bb[fs[28]] = bb[fs[27]].indexOf(bb[fs[1]][bb[fs[10]]]), bb[fs[28]] !== -fs[0])
              if (bb[fs[29]] < fs[2]) bb[fs[29]] = bb[fs[28]];
              else {
                ls(bb[fs[29]] += bb[fs[28]] * fs[30], bb[-fs[31]] |= bb[fs[29]] << bb[-fs[32]], bb[-fs[32]] += (bb[fs[29]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[-fs[36]].push(bb[-fs[31]] & fs[11]), bb[-fs[31]] >>= fs[10], bb[-fs[32]] -= fs[10])
                } while (bb[-fs[32]] > fs[6]);
                bb[fs[29]] = -fs[0]
              } return bb[fs[29]] > -fs[0] && bb[-fs[36]].push((bb[-fs[31]] | bb[fs[29]] << bb[-fs[32]]) & fs[11]), Xs(bb[-fs[36]])
        }), ls(Tb = void 0, Ub = {
          [ab(fs[52])]: function(...bb) {
            function cb(...bb) {
              return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = function(...bb) {
                for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'K8VNBSrWbsUmG,^g;FOi1?*H=XM_6l|@j"pq.IETnhuA{`!wo&Q0v%/>5z2acR4)3+x[yP#$(}9LY7ZJkdfC:et]~D<', bb[fs[24]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[24]].length, bb[fs[41]] = [], bb[fs[39]] = fs[2], bb[-fs[40]] = fs[2], bb[fs[29]] = -fs[0]), bb[fs[37]] = fs[2]; bb[fs[37]] < bb[fs[20]]; bb[fs[37]]++)
                  if (bb[fs[38]] = bb[fs[27]].indexOf(bb[fs[24]][bb[fs[37]]]), bb[fs[38]] !== -fs[0])
                    if (bb[fs[29]] < fs[2]) bb[fs[29]] = bb[fs[38]];
                    else {
                      ls(bb[fs[29]] += bb[fs[38]] * fs[30], bb[fs[39]] |= bb[fs[29]] << bb[-fs[40]], bb[-fs[40]] += (bb[fs[29]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                      do {
                        ls(bb[fs[41]].push(bb[fs[39]] & fs[11]), bb[fs[39]] >>= fs[10], bb[-fs[40]] -= fs[10])
                      } while (bb[-fs[40]] > fs[6]);
                      bb[fs[29]] = -fs[0]
                    } return bb[fs[29]] > -fs[0] && bb[fs[41]].push((bb[fs[39]] | bb[fs[29]] << bb[-fs[40]]) & fs[11]), Xs(bb[fs[41]])
              }(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
            }
            ls([
              [bb[-fs[43]], bb[fs[30]], bb[fs[14]]], bb[fs[42]]
            ] = Hs, console[cb(118)]("" + bb[-fs[43]][fs[44]](fs[69]) + (cb(119) + cb(120)) + bb[fs[14]][cb(121) + "me"] + cb(122) + bb[fs[30]]))
          }
        }), cb === ab(123) + ab(124)) {
        function Ib(...bb) {
          ls(bb[fs[12]] = fs[2], bb[fs[27]] = function(...bb) {
            if (ls(bb[fs[12]] = fs[0], bb[fs[0]] = bb[fs[2]].length), bb[fs[0]] < fs[13]) return fs[2];
            if (ls(bb[fs[1]] = Math.max(...bb[fs[2]]), bb[fs[20]] = Math.min(...bb[fs[2]])), bb[fs[1]] === bb[fs[20]]) return fs[2];
            for (ls(bb[-fs[46]] = Array(bb[fs[0]] - fs[0]).fill(Number.MAX_SAFE_INTEGER), bb[fs[47]] = Array(bb[fs[0]] - fs[0]).fill(Number.MIN_SAFE_INTEGER), bb[-fs[45]] = Math.ceil((bb[fs[1]] - bb[fs[20]]) / (bb[fs[0]] - fs[0])), bb[fs[6]] = fs[2]), bb[fs[10]] = fs[2]; bb[fs[10]] < bb[fs[0]]; bb[fs[10]]++) bb[fs[2]][bb[fs[10]]] !== bb[fs[20]] && bb[fs[2]][bb[fs[10]]] !== bb[fs[1]] && ls(bb[fs[6]] = Math.floor((bb[fs[2]][bb[fs[10]]] - bb[fs[20]]) / bb[-fs[45]]), bb[-fs[46]][bb[fs[6]]] = Math.min(bb[-fs[46]][bb[fs[6]]], bb[fs[2]][bb[fs[10]]]), bb[fs[47]][bb[fs[6]]] = Math.max(bb[fs[47]][bb[fs[6]]], bb[fs[2]][bb[fs[10]]]));
            for (ls(bb[fs[49]] = Number.MIN_SAFE_INTEGER, bb[fs[50]] = bb[fs[20]]), bb[fs[48]] = fs[2]; bb[fs[48]] < bb[fs[0]] - fs[0]; bb[fs[48]]++) bb[-fs[46]][bb[fs[48]]] === Number.MAX_SAFE_INTEGER && bb[fs[47]][bb[fs[48]]] === Number.MIN_SAFE_INTEGER || ls(bb[fs[49]] = Math.max(bb[fs[49]], bb[-fs[46]][bb[fs[48]]] - bb[fs[50]]), bb[fs[50]] = bb[fs[47]][bb[fs[48]]]);
            return bb[fs[49]] = Math.max(bb[fs[49]], bb[fs[1]] - bb[fs[50]]), bb[fs[49]]
          }, console.log(bb[fs[27]]))
        }
        ab(fs[78]) + fs[20] in ns && Ib(), Hs = []
      }
      if (cb === ab(fs[66]) + ab(fs[51])) {
        function Hb(...cb) {
          var sb;
          if (ls(cb[fs[12]] = fs[2], sb = function(...cb) {
              return function(...bb) {
                return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = function(...bb) {
                  for (ls(bb[fs[12]] = fs[0], bb[-fs[53]] = 'c;N~8}mh0.("GP[uCvYW:*{)w,R<s?yl!9Z1|QBM+IVd4=zKpkA$xH3S#OD7LJa^je]_>t5g6`&U%nE/@2FXTfiqrbo', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[-fs[52]] = bb[fs[1]].length, bb[-fs[55]] = [], bb[fs[7]] = fs[2], bb[fs[22]] = fs[2], bb[fs[6]] = -fs[0]), bb[fs[10]] = fs[2]; bb[fs[10]] < bb[-fs[52]]; bb[fs[10]]++)
                    if (bb[fs[54]] = bb[-fs[53]].indexOf(bb[fs[1]][bb[fs[10]]]), bb[fs[54]] !== -fs[0])
                      if (bb[fs[6]] < fs[2]) bb[fs[6]] = bb[fs[54]];
                      else {
                        ls(bb[fs[6]] += bb[fs[54]] * fs[30], bb[fs[7]] |= bb[fs[6]] << bb[fs[22]], bb[fs[22]] += (bb[fs[6]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                        do {
                          ls(bb[-fs[55]].push(bb[fs[7]] & fs[11]), bb[fs[7]] >>= fs[10], bb[fs[22]] -= fs[10])
                        } while (bb[fs[22]] > fs[6]);
                        bb[fs[6]] = -fs[0]
                      } return bb[fs[6]] > -fs[0] && bb[-fs[55]].push((bb[fs[7]] | bb[fs[6]] << bb[fs[22]]) & fs[11]), Xs(bb[-fs[55]])
                }(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
              }(fs[56]) + "F" in ns && function(...bb) {
                bb[fs[12]] = fs[2]
              }(), Hs = cb, Ub[bb].apply(this)
            }, cb[fs[27]] = kb[bb]), cb[fs[27]]) {
            function Wb(...bb) {
              for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'Mo1vn[lD2us>eS3z@kf,LAd0y;=jWVU!YNQ&|)5rg:T8O6`G_J~Ht4(I/#"$%}B{KE9*7qwxiP]aZ+F^m<RChXcp.?b', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[1]].length, bb[fs[14]] = [], bb[fs[7]] = fs[2], bb[fs[61]] = fs[2], bb[fs[29]] = -fs[0]), bb[-fs[60]] = fs[2]; bb[-fs[60]] < bb[fs[20]]; bb[-fs[60]]++)
                if (bb[fs[5]] = bb[fs[27]].indexOf(bb[fs[1]][bb[-fs[60]]]), bb[fs[5]] !== -fs[0])
                  if (bb[fs[29]] < fs[2]) bb[fs[29]] = bb[fs[5]];
                  else {
                    ls(bb[fs[29]] += bb[fs[5]] * fs[30], bb[fs[7]] |= bb[fs[29]] << bb[fs[61]], bb[fs[61]] += (bb[fs[29]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                    do {
                      ls(bb[fs[14]].push(bb[fs[7]] & fs[11]), bb[fs[7]] >>= fs[10], bb[fs[61]] -= fs[10])
                    } while (bb[fs[61]] > fs[6]);
                    bb[fs[29]] = -fs[0]
                  } return bb[fs[29]] > -fs[0] && bb[fs[14]].push((bb[fs[7]] | bb[fs[29]] << bb[fs[61]]) & fs[11]), Xs(bb[fs[14]])
            }

            function ab(...bb) {
              return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = Wb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
            }

            function Tb(...bb) {
              bb[fs[12]] = fs[2]
            }
            ab(129) in ns && Tb(),
              function(...bb) {
                function cb(...bb) {
                  for (ls(bb[fs[12]] = fs[0], bb[-fs[67]] = 'SXknRoO=BuKA|Ftgib8E:m[Q@qclC^NwWj>ZGxeDT9,PI1]r{LHUd%f#;J)shaYMp5_&(7$3z!0~.}+/"y6*<v?4`2V', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[1]].length, bb[fs[14]] = [], bb[fs[7]] = fs[2], bb[-fs[66]] = fs[2], bb[fs[9]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[fs[20]]; bb[fs[3]]++)
                    if (bb[fs[54]] = bb[-fs[67]].indexOf(bb[fs[1]][bb[fs[3]]]), bb[fs[54]] !== -fs[0])
                      if (bb[fs[9]] < fs[2]) bb[fs[9]] = bb[fs[54]];
                      else {
                        ls(bb[fs[9]] += bb[fs[54]] * fs[30], bb[fs[7]] |= bb[fs[9]] << bb[-fs[66]], bb[-fs[66]] += (bb[fs[9]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                        do {
                          ls(bb[fs[14]].push(bb[fs[7]] & fs[11]), bb[fs[7]] >>= fs[10], bb[-fs[66]] -= fs[10])
                        } while (bb[-fs[66]] > fs[6]);
                        bb[fs[9]] = -fs[0]
                      } return bb[fs[9]] > -fs[0] && bb[fs[14]].push((bb[fs[7]] | bb[fs[9]] << bb[-fs[66]]) & fs[11]), Xs(bb[fs[14]])
                }

                function sb(...bb) {
                  return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = cb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
                }
                bb[fs[12]] = fs[2], sb(135) + "_" in ns && kb();

                function kb(...bb) {
                  ls(bb[fs[12]] = fs[2], bb[fs[71]] = function(...cb) {
                    return ls(cb[fs[12]] = fs[0], cb[-fs[68]] = []), (cb[fs[2]] === fs[0] || cb[fs[2]] >= fs[63]) && bb[fs[14]](cb[-fs[68]], [], cb[fs[2]], fs[2]), cb[-fs[68]]
                  }, bb[fs[14]] = function(...cb) {
                    for (cb[fs[12]] = fs[63], cb[-fs[21]] = cb[fs[42]]; cb[-fs[21]] < cb[fs[13]]; cb[-fs[21]]++) {
                      if (cb[fs[0]].length !== cb[-fs[21]]) return;
                      for (cb[fs[1]] = fs[2]; cb[fs[1]] < cb[fs[13]]; cb[fs[1]]++) bb[-fs[32]](cb[fs[0]], [cb[-fs[21]], cb[fs[1]]]) && (ls(cb[fs[0]].push([cb[-fs[21]], cb[fs[1]]]), bb[fs[14]](cb[fs[2]], cb[fs[0]], cb[fs[13]], cb[-fs[21]] + fs[0])), cb[fs[0]].length === cb[fs[13]] && cb[fs[2]].push(bb[fs[61]](cb[fs[0]])), cb[fs[0]].pop())
                    }
                  }, bb[fs[61]] = function(bb) {
                    var cb, sb, kb = [];
                    for (cb = bb.length, sb = fs[2]; sb < cb; sb++) {
                      var Wb;
                      for (kb[sb] = "", Wb = fs[2]; Wb < cb; Wb++) kb[sb] += bb[sb][fs[0]] === Wb ? "Q" : fs[69]
                    }
                    return kb
                  }, bb[-fs[32]] = function(...bb) {
                    for (ls(bb[fs[12]] = fs[13], bb[fs[13]] = bb[fs[2]].length), bb[-fs[28]] = fs[2]; bb[-fs[28]] < bb[fs[13]]; bb[-fs[28]]++) {
                      if (bb[fs[2]][bb[-fs[28]]][fs[2]] === bb[fs[0]][fs[2]] || bb[fs[2]][bb[-fs[28]]][fs[0]] === bb[fs[0]][fs[0]]) return fs[70];
                      if (Math.abs((bb[fs[2]][bb[-fs[28]]][fs[2]] - bb[fs[0]][fs[2]]) / (bb[fs[2]][bb[-fs[28]]][fs[0]] - bb[fs[0]][fs[0]])) === fs[0]) return fs[70]
                    }
                    return !0
                  }, console.log(bb[fs[71]]))
                }
              }(sb, cb[fs[27]])
          }
          return sb
        }
        Tb = Is[bb] || (Is[bb] = Hb())
      } else Tb = Ub[bb]();
      if (sb === ab(130) + ab(131)) {
        function fb(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'CBTu{p?:OFJ3mQA]~z^vwUK6"=x4a};dNSZ`%s(l[E2)ycnj&H<7M#,9@5t_|.>Gr1fiqh!IWR+0okD$8X*VPg/LYbe', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[1]].length, bb[fs[14]] = [], bb[fs[7]] = fs[2], bb[fs[61]] = fs[2], bb[fs[29]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[fs[20]]; bb[fs[3]]++)
            if (bb[fs[5]] = bb[fs[27]].indexOf(bb[fs[1]][bb[fs[3]]]), bb[fs[5]] !== -fs[0])
              if (bb[fs[29]] < fs[2]) bb[fs[29]] = bb[fs[5]];
              else {
                ls(bb[fs[29]] += bb[fs[5]] * fs[30], bb[fs[7]] |= bb[fs[29]] << bb[fs[61]], bb[fs[61]] += (bb[fs[29]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[fs[14]].push(bb[fs[7]] & fs[11]), bb[fs[7]] >>= fs[10], bb[fs[61]] -= fs[10])
                } while (bb[fs[61]] > fs[6]);
                bb[fs[29]] = -fs[0]
              } return bb[fs[29]] > -fs[0] && bb[fs[14]].push((bb[fs[7]] | bb[fs[29]] << bb[fs[61]]) & fs[11]), Xs(bb[fs[14]])
        }

        function Mb(...bb) {
          return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = fb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
        }
        return {
          [Mb(fs[41]) + Mb(133)]: Tb
        }
      } {
        function Xb(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'u9)%m|VpjR[aUcA/2@,l"HITS?5}68OvL!NQ*<wyZ.zo]J_b1t$iW0eB^#Y34FP(k+>xn:`rs&G=MC7qdh;K~{EDfXg', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[1]].length, bb[fs[63]] = [], bb[fs[59]] = fs[2], bb[fs[61]] = fs[2], bb[fs[62]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[fs[20]]; bb[fs[3]]++)
            if (bb[fs[5]] = bb[fs[27]].indexOf(bb[fs[1]][bb[fs[3]]]), bb[fs[5]] !== -fs[0])
              if (bb[fs[62]] < fs[2]) bb[fs[62]] = bb[fs[5]];
              else {
                ls(bb[fs[62]] += bb[fs[5]] * fs[30], bb[fs[59]] |= bb[fs[62]] << bb[fs[61]], bb[fs[61]] += (bb[fs[62]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[fs[63]].push(bb[fs[59]] & fs[11]), bb[fs[59]] >>= fs[10], bb[fs[61]] -= fs[10])
                } while (bb[fs[61]] > fs[6]);
                bb[fs[62]] = -fs[0]
              } return bb[fs[62]] > -fs[0] && bb[fs[63]].push((bb[fs[59]] | bb[fs[62]] << bb[fs[61]]) & fs[11]), Xs(bb[fs[63]])
        }

        function nb(...bb) {
          return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = Xb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
        }

        function mb(...bb) {
          function cb() {}
          bb[fs[12]] = fs[2], ls(bb[fs[1]] = function(...bb) {
            for (ls(bb[fs[12]] = fs[13], bb[fs[27]] = fs[2], bb[fs[1]] = fs[2], bb[fs[20]] = new cb(fs[2]), bb[fs[65]] = bb[fs[20]], bb[fs[22]] = bb[fs[2]], bb[fs[6]] = bb[fs[0]]); bb[fs[22]] !== fs[64] || bb[fs[6]] !== fs[64];) ls(bb[fs[1]] = (bb[fs[22]] ? bb[fs[22]].val : fs[2]) + (bb[fs[6]] ? bb[fs[6]].val : fs[2]) + bb[fs[27]], bb[fs[27]] = Math.floor(bb[fs[1]] / fs[50]), bb[fs[65]].next = new cb(bb[fs[1]] % fs[50]), bb[fs[65]] = bb[fs[65]].next, bb[fs[22]] = bb[fs[22]] ? bb[fs[22]].next : fs[64], bb[fs[6]] = bb[fs[6]] ? bb[fs[6]].next : fs[64]);
            return bb[fs[27]] && (bb[fs[65]].next = new cb(bb[fs[27]])), bb[fs[20]].next
          }, console.log(bb[fs[1]]))
        }
        return nb(134) + "G" in ns && mb(), Tb
      }
    }

    function ls() {
      ls = function() {}
    }
    ls(pc = {}, bs = ['J,m$f`vkid1Us8bD"b%cZx3mq1R23ZPsJ8|O<$%y::os?*bZA%4UX#f', "H.Ld%l(sLJL~QZna{l/MX`!k+eKE.?ATXrNMay(qgDT", "NE^OW[$lfoPb%t7wgTwaUqn9xI)*Vn2`kH", "S%;>~[w|=S2DkBAE|ElO:2Pmug7*EezsD*IW", "bD;pp^d&cIo=Jztwyp+|Z", ")[>~c0VKX;yRnSh`w.NYO", "b*H>]GiO%;`iCtG`>E_JB2z]N9QuPh>", "^MDa{/m|Mo!X4e4it*9OFp(|<[n$;u3F,M=M(j*ke3~82e~57Y4UH]tA", "/p6dQL=y^dpZ`9ps~f", "rbV)Syn9=S2NraIPo!]dm5)1spPj<ZVP6$m$x0a/?I5|ILjO!wU)|Tf", "x;rlgFIFR[;$g*(`3lE>2ywmVV}coh!Tf1g>x[4Ovg}$#ZI", "}dM|>[}yA18:a#[gFC78d=+EACYmBhME", "P*q8d*nk+DX", 'Xz_O"5f', 'DO>M"5gidgZle?GV.E9J!q;Se1oP}#I`at`81^a/U', "x;IMX1B?h*]{5#bg%!LY[9Ly+XwzC5mY", "q,lWi+xS0Cy", 'y:2do~u|!V{)Xm@s7wgkw_vkzoT=*b2r"e/.,2wqR[Is~x:&x:#/a', "=>Qai_@yLoX{kepsCl<B#Q$Oe3CsH", ".Ed_;FwA*Rp$|*Uk|;5$UF&Hxp&(ZF,5(X}B", '"lX$*2HiRe/3P:XiM.&>', ')GoWK[~|LCRT?(|a"f', "Rq)n8{1&#IsgyUP&C1m0O+ZOH1M~ou:g7zFWH*CSUS|oC#;FB8{MV?fD~X*:H", 'Lr?l)nSZ8dqjJ`"in;E>1`S/)/v=.{Ag@>hdmL<[n*`j,5>ZDCBWoxSS_PbaH', "Bcdpk$ZOOoVWyh*kWIaOSF&il6U!W#AD>,B|=?QOm;Mee?*kW%xJ3qf", '|siOPn0swP`$2iTZtrM~>?v(Y[.H,t3mprDu":f', "@;GMS~`Lug!$ThS5yz2p0.2Oz1p", "):T.[^f", "O,9cJ.wAK", '.gtuWzy&xVmaJb{V]zlO]~/L0D;/M5I`mqZ_|l"H', "|p)|b[`yTS}oatms,!!W+u[q`SDm7b", "UUiu8)||(/v[ICna~;u>Ny3kIg", "il[j!.dSf*|(rLRtulQaL)ZLdWwi$FPsZpZlFL2l>", "U1!t+^0D:R,cShz`?f", "o!?JBsn|[D", "5%OKK2H4f3N2]Azt:dqju*SKq1ogmb!T>t<l4009g*[Ks+uM", "::#/`i?Sq3ALiAzs0:3O<G@@~JNgL5gaFzeQZ~}E^y^FHF=Vz;K>", "k;{Kg~_lZP!*~:J", "Op*ORn.q*:K>qS!mB8tl{=n9qDycg*+gkT`8^5iKK", "/!OUOilHW;$JIaX&Gs=.6F<I2IK2durVA*>~`p5I}IuR;U2t:T:c?j|kgpIEH", "Ty)|ox0spV[:@*fD@`}/N58KqX:8w8.tgl/UUqDqygA+fahsYPA", "N;TKx?6>gprjqTtOtsQld=9(G:xXRertk*e|ezTVB", "W8Nd/)SZ=S0*3ZYi%PG.>.wquP5~lC|s:;FO{?~mRe", "eIhQzlW9UV7ygFOOc*fQRje|N9ui0=PY@l6d~.rq5Sc:(xd", "xekMR5_@}dO=AZBV=bac,scFW;9)D#skjlJpkLlO>", "2PKQX1W91CBS!x+E3GH", "@`7$JFh]_;Cap+rDT!b)1`A(gyxO`{3k1ed0fuZ=Hy~cit]&aqfQM$mFnVh_f", "Pl)M.zELnCngHz/aoqVOg5p!wPssUbE&=f", "Sq1pH2[>$g:RCeiM~Ek~arf", '>EA_Dy4&";o;%AdDWDOjR]5981Hpt+`Vu[?c3/f(}d^.`:9Y', "+dr8O@2S::/=H?XY>d,~C[z]?C~c3SKmwPC||`<mPd", "ot5U&!$O@9A0eT6mVr|O$=~IODAsSzQTk%Gjz_3k]SCu9SJ", "qy;JTX:HOD*", '@snJl)SZH19(4x[w:sL|8l6!Q1M~&z"E]{0KQpf', "U1OW,sv6}VcmMe?t/E($Azb&Q*w[L#S", "6[78Dy(>USfPxe;mVpvWjsuky;`[{=ePkp/U4=>qte%W2eePWH", "eI[UXq0q{S:3[TnsU3jdV?>|$e;YLAPai*>MQ:)SRgml?zRtlpxJ", "@;xnI~/i~g", "Y;oKG+_&Qp{HUCOkoycar_xyLCK2WAeV=p;J", "`T=npqF|}IV=?FiM[$x)q#.qs*UEXx4iJ!BKD5O/&Po>}#cEs.#cq+P.U", "LplJtyKV)DzUn82tE,ROps09_evW6b$t,py>==gOy9,i7L>D9!jYi+3DIo", "iErdBzLLZPVu4LqtNC5~]Q>|l6@y~:f%5lFWylp.,S<Bdz3g0;u$tyKZB", "ml5jsiBH", "7:ej*)HiSexO5Z4Osy_tp#BZ^yc;?u9Oye#JL1/H.Rm2yZ:gxefdJ[qAK", "lGT.UsZLzC!D[T/Y!TMd", "ipVcI]eFy9P#.=]hj!dpS", "q>3c8{/iB", "UI=K%pqDx6uq@(^r_TF)Z|[mG//3dhIV]:=Kf2WJyghudh^r>ib", "3El)+2VK@SfTGU", ">%]Uq8&L4SL~gh>m@{,>n_7qAV1Us87YYH", "=GSM6uHi56JPraiTHpNMp1,yCDo~uuEsY,qj?QjO*[hze?{D`Om8=uPmb", "tpr>`+Y|Rg[q*C&`Ztta]0[q7PB!B^nYbI_/>?lLuS@)Y,hscqdcD", "8dmk5#391DyKUbXsntkj]G1H", "m;hlG+)l?CauU^*wyrX>o,Fk?*M~iA*Or;Vc*^H=dg+", "<JZ0l#]qB", "CD(8ipK4Qd{cUC]aVlcpr_!m=pnm2teV6sGK", "%.UOK]/HC*AuF,TMGs)Mx=SKL*Q=W#`MU!g0[qtA", "eqG~!2[mndST*C=5~;RW", ",E+j4=rqfoIWEt:Yx;}J", "P1l)%TGK8yr:+*EOyedlK[NqJgl", "1pWa.y^mIgM[UCHM%;z>a$oH6Css<Z<NtpE|/_=K1DlXoh3Ea;|K", 'PE`|5@~I^6Cb)FkmfC})"$xHY;bpn8grm%aO#[OLGJ', "IqRW}upr(/_U2t?a@Z=jbqMi8dzed^ZiPEf>Js<.QC7cH", "5*yJN,g&Fd", "UE5|m~fDgCR9%5b%!E^B*`4i9[`:;u>Z.X8lQ@Uwko3D|xAT}dau*lf", "iCkMe581U6RT=zvtKyxtY", "xYQ>UsGy(1Bl8uC`(ZqU}?pr{6j~FLFkEyx.,.SSUd%=mU", "Q.NM?=MV/VD=2eC", "_EAa4,x&XS/3u,R`Hc/Mg", "m!jdeF>DiV", "_eQkirrrP6au%:]sfpclz^s|MIbs}9%VAOHa}zo=vef;VtZsCcejU/f", "%[V).zCHyPCPKt)5IH", "/rnu7,d&B", "q[ra25[k_P?C}{$ZNEb", "!Exc~j.D5V~.^Cbm>i{K;`JmVV_{oF_tf8lWW?w6{9Q2::FkLM0K", "$TJQl)[(79_Ogh}Ff8:)wTb?]6C_DBWZ0;!K", "QbpU`!f", "UU/jq!f", ">UHl2jXD&[UsyFp&NC}c6slK|S~.<ZR5^$M|L!:&t;MuFb", "D1Y.6FQ1cD5jkB`mK,h_u[r6_RfP/hsgWyoKGX:@;1l~Lb", "{Tq|:9]]=VLU.Z&Z>t4d[.MyHySg#?9wVCp|Kn9D5Sb9*x!Dxed0Y", "t;Xdfq=E,6IkSF6EoyCQ[*dZNS*)mbhs2>A", "|t+Mz!lEVI[$j5GVzPh0aLwmq/Cg{87s_G6pdj_lsI", "BUNY=*KV~;To]=cm3p#)o|,&z*G[&U&t`[!.`!/LW[N~yhK", "{zEpcLcAMD^JOhYO/;gpL`oO}6F~>?`M{wSjjTzAhor(|U", 'HU8amx?S]6Dz(a2tql">4y@2qXJzq+YkO!R.G10|f*o~B*&V9prk"@{Dve<6H', "a,lJdz]|Y:(DL5yi&rv.6`DJ<R", ":tGMc$|A!d/KThOE[dl)@@P(ld(Uz:bkVD?pE|39uP.NNB", "1$kU+s?S{9ES6ask@`DuoyFAcC=U`ecOYT5|DF9!<e.$a#cDor=t&if", "n;k|{[|r$9{(]{[k", '8;=M1/Yk^Sb_teyi=lS."~O_e3(*JCuTi.`$SnZV_[%gVnvtEdkU', "+e=tU*jE7;8XZuBM([[jV", "@`g0&pDqI[4F2eCr5>A", "mdE8:{C&h1+RH*RVs.bOv_H&b", "hlRW`!/S>SCk}#f%^bzde", "([fl<$:LKPPm=FDPmtg0_n!.>", "3l5M)?PA", "Rbdbk@:.", "y0v7AkK", "c<nBQTU8", "jzCb$*K", ">$qjG>GV", "!<_CenjK", "Vq(+8vQf", "r>.ex", ")H|SyU;f", "_in5vg{f", "RxbSp", "KO8&~pv;", "fu)]g{`1", "&Rf]E((f", "Jtbux", "1sjHbD<T", "Z|vJ4", "Ar)|`h$)", "#b*%IfNk", 'GG"H/&,qQw', "K(;!=tX", "6BHz[g?PG", "K(;!=tT8", "^=OH", "$4012elu", "XE(|#>8y", "0EQ#=n|1", "8UNUBX,u", "`M[$B$oy", "kZd31", "48y|pYYy", "?0Uj!", "Z4eNKCGy", "}Y5_2", "3^i*1!Z", "[Bwhymlu", "Lp+*q}2u", "=laca", "kt6p&MZ}", ",Z53z", "Jl8HwhI$", "]5c?66sD", ";_E;&iNZ;0", "wQ^!^", "luI_b3wOrn8]r", "J+TpHXS*3ZPnk)", ":/BAUS$b{%uI;$", "Ji8p.`rd</L^o)", "U$!phjdUo~$.Uw", "g$Zy[1qm@QDGs)"]), ls(cs = function(...bb) {
      ls(bb[fs[12]] = fs[2], bb[-fs[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[fs[1]] = fs[17], bb[fs[13]] = []);
      try {
        ls(bb[fs[1]] = Object, bb[fs[13]][fs[25]]("".__proto__.constructor.name))
      } catch (bs) {}
      bb: for (bb[fs[14]] = fs[2]; bb[fs[14]] < bb[-fs[15]][fs[12]]; bb[fs[14]]++) try {
        for (bb[fs[1]] = bb[-fs[15]][bb[fs[14]]](), bb[fs[7]] = fs[2]; bb[fs[7]] < bb[fs[13]][fs[12]]; bb[fs[7]]++)
          if (typeof bb[fs[1]][bb[fs[13]][bb[fs[7]]]] === fs[16]) continue bb;
        return bb[fs[1]]
      } catch (bs) {}
      return bb[fs[1]] || this
    }() || {}, ss = cs.TextDecoder, ks = cs.Uint8Array, Ws = cs[fs[86]], as = cs.String || String, Ts = cs.Array || Array, Us = function(...bb) {
      return ls(bb[fs[12]] = fs[2], bb[-fs[26]] = new Ts(fs[56]), bb[fs[0]] = as[fs[23]] || as.fromCharCode, bb[-fs[18]] = []),
        function(...cb) {
          for (ls(cb[fs[12]] = fs[0], cb[fs[0]] = fs[17], cb[fs[13]] = fs[17], cb[fs[20]] = cb[fs[2]][fs[12]], bb[-fs[18]][fs[12]] = fs[2]), cb[fs[19]] = fs[2]; cb[fs[19]] < cb[fs[20]];) ls(cb[fs[13]] = cb[fs[2]][cb[fs[19]]++], cb[fs[13]] <= fs[51] ? cb[fs[0]] = cb[fs[13]] : cb[fs[13]] <= 223 ? cb[fs[0]] = (31 & cb[fs[13]]) << fs[22] | cb[fs[2]][cb[fs[19]]++] & fs[21] : cb[fs[13]] <= 239 ? cb[fs[0]] = (15 & cb[fs[13]]) << fs[24] | (cb[fs[2]][cb[fs[19]]++] & fs[21]) << fs[22] | cb[fs[2]][cb[fs[19]]++] & fs[21] : as[fs[23]] ? cb[fs[0]] = (cb[fs[13]] & fs[6]) << 18 | (cb[fs[2]][cb[fs[19]]++] & fs[21]) << fs[24] | (cb[fs[2]][cb[fs[19]]++] & fs[21]) << fs[22] | cb[fs[2]][cb[fs[19]]++] & fs[21] : (cb[fs[0]] = fs[21], cb[fs[19]] += fs[42]), bb[-fs[18]][fs[25]](bb[-fs[26]][cb[fs[0]]] || (bb[-fs[26]][cb[fs[0]]] = bb[fs[0]](cb[fs[0]]))));
          return bb[-fs[18]][fs[44]]("")
        }
    }()), ls(Is = Object[Ms(116)](fs[64]), Hs = void 0), ls(xc = (...bb) => {
      function cb(...bb) {
        return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = function(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'ZuFrijkCGhR$Xsg<ULct=vI>w@bq9Sdxy5^}DaOQp,o#P0_NK?;B&.%8J76VM2"feY]|+!{m(Hz3E*`l4nTA1)[/W:~', bb[fs[13]] = "" + (bb[fs[2]] || ""), bb[-fs[72]] = bb[fs[13]].length, bb[fs[63]] = [], bb[fs[59]] = fs[2], bb[fs[22]] = fs[2], bb[fs[6]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[-fs[72]]; bb[fs[3]]++)
            if (bb[fs[54]] = bb[fs[27]].indexOf(bb[fs[13]][bb[fs[3]]]), bb[fs[54]] !== -fs[0])
              if (bb[fs[6]] < fs[2]) bb[fs[6]] = bb[fs[54]];
              else {
                ls(bb[fs[6]] += bb[fs[54]] * fs[30], bb[fs[59]] |= bb[fs[6]] << bb[fs[22]], bb[fs[22]] += (bb[fs[6]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[fs[63]].push(bb[fs[59]] & fs[11]), bb[fs[59]] >>= fs[10], bb[fs[22]] -= fs[10])
                } while (bb[fs[22]] > fs[6]);
                bb[fs[6]] = -fs[0]
              } return bb[fs[6]] > -fs[0] && bb[fs[63]].push((bb[fs[59]] | bb[fs[6]] << bb[fs[22]]) & fs[11]), Xs(bb[fs[63]])
        }(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
      }
      bb[fs[12]] = fs[0];
      const sb = function(bb) {
          var cb;
          return {
            meta: {
              ...bb.meta,
              formatVersion: hc.h,
              variation: null !== (cb = bb.meta.variation) && void 0 !== cb ? cb : null
            },
            initialChunks: bb.initialChunks.map((bb => ({
              chunkPos: bb.chunkPos,
              rle: Jc(bb.rle),
              sharedBlockData: yc("sharedBlockData", bb.sharedBlockData)
            }))),
            ticks: bb.ticks.map(vc),
            editState: bb.editState
          }
        }(bb[fs[2]]),
        kb = kc(hc[fs[3]]);
      bb[fs[0]] = fs[17];
      try {
        function Ub(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[0]] = 'uU7*s/hd]~Q3kS15C+@vw_<Mc?%XHOq"x6,KV}WB!FeGo#tEg;bm$i4:AJ)p[8yY>z0.jrf{&D=R^92Ia(Z`NLTl|Pn', bb[fs[13]] = "" + (bb[fs[2]] || ""), bb[fs[42]] = bb[fs[13]].length, bb[fs[65]] = [], bb[fs[7]] = fs[2], bb[fs[22]] = fs[2], bb[fs[75]] = -fs[0]), bb[fs[73]] = fs[2]; bb[fs[73]] < bb[fs[42]]; bb[fs[73]]++)
            if (bb[fs[74]] = bb[fs[0]].indexOf(bb[fs[13]][bb[fs[73]]]), bb[fs[74]] !== -fs[0])
              if (bb[fs[75]] < fs[2]) bb[fs[75]] = bb[fs[74]];
              else {
                ls(bb[fs[75]] += bb[fs[74]] * fs[30], bb[fs[7]] |= bb[fs[75]] << bb[fs[22]], bb[fs[22]] += (bb[fs[75]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[fs[65]].push(bb[fs[7]] & fs[11]), bb[fs[7]] >>= fs[10], bb[fs[22]] -= fs[10])
                } while (bb[fs[22]] > fs[6]);
                bb[fs[75]] = -fs[0]
              } return bb[fs[75]] > -fs[0] && bb[fs[65]].push((bb[fs[7]] | bb[fs[75]] << bb[fs[22]]) & fs[11]), Xs(bb[fs[65]])
        }

        function Ib(...bb) {
          return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = Ub(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
        }
        bb[fs[0]] = kb[Ib(fs[67])](sb)
      } catch (Is) {
        function fb(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'X8ApLSG`dH9l_1%>J|sN[wQZPCM:fVzRi/vkYI^]Ouc=),4U}rE(;TB6D25~Fj7@&q{0Ky.$mW?xg!e"ta3bn+ho<*#', bb[fs[52]] = "" + (bb[fs[2]] || ""), bb[fs[76]] = bb[fs[52]].length, bb[fs[63]] = [], bb[fs[59]] = fs[2], bb[fs[22]] = fs[2], bb[fs[77]] = -fs[0]), bb[fs[10]] = fs[2]; bb[fs[10]] < bb[fs[76]]; bb[fs[10]]++)
            if (bb[fs[5]] = bb[fs[27]].indexOf(bb[fs[52]][bb[fs[10]]]), bb[fs[5]] !== -fs[0])
              if (bb[fs[77]] < fs[2]) bb[fs[77]] = bb[fs[5]];
              else {
                ls(bb[fs[77]] += bb[fs[5]] * fs[30], bb[fs[59]] |= bb[fs[77]] << bb[fs[22]], bb[fs[22]] += (bb[fs[77]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[fs[63]].push(bb[fs[59]] & fs[11]), bb[fs[59]] >>= fs[10], bb[fs[22]] -= fs[10])
                } while (bb[fs[22]] > fs[6]);
                bb[fs[77]] = -fs[0]
              } return bb[fs[77]] > -fs[0] && bb[fs[63]].push((bb[fs[59]] | bb[fs[77]] << bb[fs[22]]) & fs[11]), Xs(bb[fs[63]])
        }

        function Mb(...bb) {
          return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = fb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
        }
        throw ls(console[Mb(137)](sb), kb[Mb(138)](sb, {
          [Mb(139) + Mb(140)](...bb) {
            function cb(...bb) {
              return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = function(...bb) {
                for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = '&uyz^)"v[0_<;w*?7.`58{/6:=!2@31~|$}(94x%fO#dnlrehNGFQHUjTXoSYipbmZLPEI+MVqagDkC,>Bsc]ARWJKt', bb[fs[13]] = "" + (bb[fs[2]] || ""), bb[fs[42]] = bb[fs[13]].length, bb[fs[40]] = [], bb[-fs[76]] = fs[2], bb[fs[22]] = fs[2], bb[-fs[78]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[fs[42]]; bb[fs[3]]++)
                  if (bb[-fs[79]] = bb[fs[27]].indexOf(bb[fs[13]][bb[fs[3]]]), bb[-fs[79]] !== -fs[0])
                    if (bb[-fs[78]] < fs[2]) bb[-fs[78]] = bb[-fs[79]];
                    else {
                      ls(bb[-fs[78]] += bb[-fs[79]] * fs[30], bb[-fs[76]] |= bb[-fs[78]] << bb[fs[22]], bb[fs[22]] += (bb[-fs[78]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                      do {
                        ls(bb[fs[40]].push(bb[-fs[76]] & fs[11]), bb[-fs[76]] >>= fs[10], bb[fs[22]] -= fs[10])
                      } while (bb[fs[22]] > fs[6]);
                      bb[-fs[78]] = -fs[0]
                    } return bb[-fs[78]] > -fs[0] && bb[fs[40]].push((bb[-fs[76]] | bb[-fs[78]] << bb[fs[22]]) & fs[11]), Xs(bb[fs[40]])
              }(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
            }
            return cb(141) + "Z" in ns && function(...bb) {
              bb[fs[12]] = fs[2]
            }(), Hs = [bb, {}], ms(cb(144), cb(145) + cb(146), cb(147) + cb(148))[cb(149) + cb(fs[60])]
          }
        })), Is
      }
      const Wb = Tc(hc[fs[3]], bb[fs[0]]),
        Tb = ab[fs[86]][cb(fs[87])](fs[63]);
      return Tb[cb(152) + cb(fs[77]) + "E"](hc[fs[3]]), ab[fs[86]].concat([Tb, Wb])
    }, jc = (...bb) => {
      function cb(...bb) {
        return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = function(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[45]] = '"$}x)w(7HE3mv>]lNQ%~Z5jVgbz|LJUypcRaCk;B+sui4=D.{W/8nMYI9[dTh<P_e^&6`oGt#?r@A1SX2!,O0F*qKf:', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[20]] = bb[fs[1]].length, bb[fs[63]] = [], bb[fs[59]] = fs[2], bb[fs[61]] = fs[2], bb[fs[6]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[fs[20]]; bb[fs[3]]++)
            if (bb[fs[5]] = bb[fs[45]].indexOf(bb[fs[1]][bb[fs[3]]]), bb[fs[5]] !== -fs[0])
              if (bb[fs[6]] < fs[2]) bb[fs[6]] = bb[fs[5]];
              else {
                ls(bb[fs[6]] += bb[fs[5]] * fs[30], bb[fs[59]] |= bb[fs[6]] << bb[fs[61]], bb[fs[61]] += (bb[fs[6]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[fs[63]].push(bb[fs[59]] & fs[11]), bb[fs[59]] >>= fs[10], bb[fs[61]] -= fs[10])
                } while (bb[fs[61]] > fs[6]);
                bb[fs[6]] = -fs[0]
              } return bb[fs[6]] > -fs[0] && bb[fs[63]].push((bb[fs[59]] | bb[fs[6]] << bb[fs[61]]) & fs[11]), Xs(bb[fs[63]])
        }(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
      }
      bb[fs[12]] = fs[0];
      const sb = ab[fs[86]][Ms(154)](bb[fs[2]]);
      if (sb[cb(fs[58]) + cb(156)] >= fs[63]) {
        function kb(...bb) {
          for (ls(bb[fs[12]] = fs[0], bb[fs[0]] = '}DCVlIYJZpSaNFEWoRthd0j8X@,^)Mk;!A<O:mxb&1[]/e`sc?4QH62L%5~r_3$>#qTg+wnB=79"G{(yiKU*|fv.uzP', bb[fs[66]] = "" + (bb[fs[2]] || ""), bb[-fs[88]] = bb[fs[66]].length, bb[-fs[87]] = [], bb[fs[59]] = fs[2], bb[fs[61]] = fs[2], bb[fs[29]] = -fs[0]), bb[fs[3]] = fs[2]; bb[fs[3]] < bb[-fs[88]]; bb[fs[3]]++)
            if (bb[fs[34]] = bb[fs[0]].indexOf(bb[fs[66]][bb[fs[3]]]), bb[fs[34]] !== -fs[0])
              if (bb[fs[29]] < fs[2]) bb[fs[29]] = bb[fs[34]];
              else {
                ls(bb[fs[29]] += bb[fs[34]] * fs[30], bb[fs[59]] |= bb[fs[29]] << bb[fs[61]], bb[fs[61]] += (bb[fs[29]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                do {
                  ls(bb[-fs[87]].push(bb[fs[59]] & fs[11]), bb[fs[59]] >>= fs[10], bb[fs[61]] -= fs[10])
                } while (bb[fs[61]] > fs[6]);
                bb[fs[29]] = -fs[0]
              } return bb[fs[29]] > -fs[0] && bb[-fs[87]].push((bb[fs[59]] | bb[fs[29]] << bb[fs[61]]) & fs[11]), Xs(bb[-fs[87]])
        }

        function Tb(...bb) {
          return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = kb(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
        }
        const Ub = sb[cb(157) + Tb(158)](fs[2]);
        if ((fs[2], hc.o)(Ub)) {
          function Ib(...bb) {
            for (ls(bb[fs[12]] = fs[0], bb[fs[27]] = 'SrJ+B/6;^QK.XZH*d:{if<MGcT=Iyxw|_vVDOW(&5`LAh>3%1t#ujz)CeE~U[42n0b,7ql]P"a}$@9kg8?p!msNFRYo', bb[fs[1]] = "" + (bb[fs[2]] || ""), bb[fs[42]] = bb[fs[1]].length, bb[fs[14]] = [], bb[fs[59]] = fs[2], bb[fs[61]] = fs[2], bb[fs[29]] = -fs[0]), bb[fs[10]] = fs[2]; bb[fs[10]] < bb[fs[42]]; bb[fs[10]]++)
              if (bb[fs[21]] = bb[fs[27]].indexOf(bb[fs[1]][bb[fs[10]]]), bb[fs[21]] !== -fs[0])
                if (bb[fs[29]] < fs[2]) bb[fs[29]] = bb[fs[21]];
                else {
                  ls(bb[fs[29]] += bb[fs[21]] * fs[30], bb[fs[59]] |= bb[fs[29]] << bb[fs[61]], bb[fs[61]] += (bb[fs[29]] & fs[33]) > fs[19] ? fs[34] : fs[35]);
                  do {
                    ls(bb[fs[14]].push(bb[fs[59]] & fs[11]), bb[fs[59]] >>= fs[10], bb[fs[61]] -= fs[10])
                  } while (bb[fs[61]] > fs[6]);
                  bb[fs[29]] = -fs[0]
                } return bb[fs[29]] > -fs[0] && bb[fs[14]].push((bb[fs[59]] | bb[fs[29]] << bb[fs[61]]) & fs[11]), Xs(bb[fs[14]])
          }

          function Hb(...bb) {
            return bb[fs[12]] = fs[0], typeof pc[bb[fs[2]]] === fs[16] ? pc[bb[fs[2]]] = Ib(bs[bb[fs[2]]]) : pc[bb[fs[2]]]
          }
          const fb = sb[Tb(159)](fs[63]),
            Mb = ac(Ub) ? ab[fs[86]][Tb(160)](Uc(Ub, fb)) : fb;
          return function(bb) {
            var cb, sb, kb, ab, Tb;
            const Ub = null === (cb = bb.meta) || void 0 === cb ? void 0 : cb.formatVersion;
            if (!(0, hc.o)(Ub)) throw new Error(`Unsupported recording format version: ${Ub}`);
            if (!Array.isArray(bb.initialChunks) || !Array.isArray(bb.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const Wb of bb.ticks)
              if (!Array.isArray(Wb.structuralEvents) || !Array.isArray(Wb.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const Ib = {
              ...bb.meta
            };
            return Ib.formatVersion = hc.h, (0, Wb.L)(Ib.variation) && delete Ib.variation, {
              meta: Ib,
              initialChunks: bb.initialChunks.map((bb => {
                var cb;
                return {
                  chunkPos: bb.chunkPos,
                  rle: gc(bb.rle),
                  sharedBlockData: null !== (cb = Pc("sharedBlockData", bb.sharedBlockData)) && void 0 !== cb ? cb : []
                }
              })),
              ticks: bb.ticks.map(Fc),
              editState: {
                cameraKeyframes: null !== (sb = null === (kb = bb.editState) || void 0 === kb ? void 0 : kb.cameraKeyframes) && void 0 !== sb ? sb : [],
                playbackMark: null !== (ab = null === (Tb = bb.editState) || void 0 === Tb ? void 0 : Tb.playbackMark) && void 0 !== ab ? ab : null
              }
            }
          }(kc(Ub)[Hb(fs[71])](Mb))
        }
      }
      throw new Error(cb(162) + cb(163) + cb(164) + cb(165) + cb(166) + "ad")
    })
  },
  36556: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      h: () => kb,
      k: () => Mb,
      l: () => Xb,
      o: () => ab,
      q: () => Hb,
      u: () => nb,
      w: () => Ib,
      x: () => fb,
      y: () => Ub
    });
    const kb = 9,
      Wb = [9];

    function ab(bb) {
      return Wb.includes(bb)
    }
    const Tb = 100,
      Ub = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Ib = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Hb = ["itemName", "amount", "position", "size", "attributes"],
      fb = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Mb = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "gJ", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Xb = ["selectedSlotIndex", "slots"],
      nb = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36547: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb,
      h: () => mb,
      l: () => Ib,
      p: () => Tb,
      r: () => Ub,
      s: () => Hb
    });
    var kb = sb(344),
      Wb = sb(26);

    function ab(bb) {
      return null === bb || void 0 === bb ? null : "string" === typeof bb ? bb : null
    }

    function Tb(bb, cb) {
      return JSON.stringify(bb) === JSON.stringify(cb)
    }

    function Ub(bb) {
      const cb = [];
      for (const sb of Object.keys(bb)) {
        const kb = bb[sb];
        for (const bb of Object.keys(kb)) cb.push({
          nc: sb,
          name: bb,
          ...kb[bb]
        })
      }
      return cb
    }

    function Ib(bb) {
      const cb = {};
      for (const ab of bb) {
        var sb, kb, Wb;
        cb[ab.nc] || (cb[ab.nc] = {}), cb[ab.nc][ab.name] = {
          icon: ab.icon,
          level: ab.level,
          displayName: null !== (sb = ab.displayName) && void 0 !== sb ? sb : null,
          endTick: null !== (kb = ab.endTick) && void 0 !== kb ? kb : null,
          showInNametag: null === (Wb = ab.showInNametag) || void 0 === Wb || Wb
        }
      }
      return cb
    }

    function Hb(bb, cb) {
      const sb = {};
      for (const Wb of Object.keys(bb)) {
        const ab = {};
        for (const sb of Object.keys(bb[Wb])) {
          const kb = bb[Wb][sb];
          null !== kb.endTick && kb.endTick < cb || (ab[sb] = {
            ...kb,
            endTick: null === kb.endTick ? null : kb.endTick - cb
          })
        }(0, kb.zc)(ab) || (sb[Wb] = ab)
      }
      return sb
    }

    function fb(bb, cb, sb) {
      if (null !== bb) return Math.max(0, 1e3 * (bb - cb) / sb)
    }
    class Mb {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(bb, cb) {
        this.clear();
        const sb = Date.now();
        for (const Ub of bb.iterateEntityIds()) {
          const Ib = bb.getEffects(Ub);
          if ((0, kb.zc)(Ib)) continue;
          const Hb = cb(Ub);
          for (const bb of Object.keys(Ib)) {
            var Wb, Tb;
            const cb = Ib[bb];
            this.upsert(Hb, bb, {
              icon: cb.icon,
              level: cb.level,
              displayName: ab(cb.displayName),
              showInNametag: null === (Wb = cb.showInNametag) || void 0 === Wb || Wb,
              endTime: void 0 !== cb.duration && null !== cb.duration ? (null !== (Tb = cb.appliedAt) && void 0 !== Tb ? Tb : sb) + cb.duration : null
            })
          }
        }
      }
      upsert(bb, cb, sb) {
        this.tracked[bb] || (this.tracked[bb] = {}), this.tracked[bb][cb] = sb
      }
      remove(bb, cb) {
        const sb = this.tracked[bb];
        sb && (delete sb[cb], (0, kb.zc)(sb) && delete this.tracked[bb])
      }
      handleUpdate(bb) {
        var cb;
        0 !== bb.duration ? this.upsert(bb.nc, bb.name, {
          icon: bb.icon,
          level: bb.level,
          displayName: ab(bb.displayName),
          showInNametag: null === (cb = bb.showInNametag) || void 0 === cb || cb,
          endTime: void 0 !== bb.duration && null !== bb.duration ? Date.now() + bb.duration : null
        }) : this.remove(bb.nc, bb.name)
      }
      handleRemove(bb, cb) {
        this.remove(bb, cb)
      }
      sample(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Wb = {},
          ab = 1e3 / cb;
        for (const Tb of Object.keys(this.tracked)) {
          const cb = this.tracked[Tb],
            Ub = {};
          for (const kb of Object.keys(cb)) {
            const Wb = cb[kb];
            let Ib = null;
            if (null !== Wb.endTime) {
              const cb = Math.max(0, Wb.endTime - sb);
              if (0 === cb) {
                this.remove(Tb, kb);
                continue
              }
              Ib = bb + Math.ceil(cb / ab)
            }
            Ub[kb] = {
              icon: Wb.icon,
              level: Wb.level,
              displayName: Wb.displayName,
              endTick: Ib,
              showInNametag: Wb.showInNametag
            }
          }(0, kb.zc)(Ub) || (Wb[Tb] = Ub)
        }
        return Wb
      }
    }

    function Xb(bb, cb, sb, kb) {
      bb.hasEntity(cb) ? bb.updateEffect(cb, sb, kb) : function(bb, cb, sb) {
        Wb.j.QQ("EffectUpdate", {
          nc: bb,
          name: cb,
          ...sb
        }, !0)
      }(cb, sb, kb)
    }

    function nb(bb, cb, sb) {
      bb.hasEntity(cb) ? bb.removeEffect(cb, sb) : function(bb, cb) {
        Wb.j.QQ("RemoveEffect", {
          nc: bb,
          name: cb
        }, !0)
      }(cb, sb)
    }

    function mb(bb, cb, sb, kb, Wb, ab, Tb) {
      for (const fb of Object.keys(sb))
        for (const ab of Object.keys(sb[fb])) {
          var Ub;
          null !== (Ub = cb[fb]) && void 0 !== Ub && Ub[ab] || (nb(bb, fb, ab), kb && fb === kb && String(Wb) !== String(fb) && nb(bb, Wb, ab))
        }
      for (const lb of Object.keys(cb))
        for (const Ub of Object.keys(cb[lb])) {
          var Ib, Hb;
          const Qb = cb[lb][Ub],
            eb = fb(Qb.endTick, ab, Tb);
          if (0 === eb) {
            nb(bb, lb, Ub), kb && lb === kb && String(Wb) !== String(lb) && nb(bb, Wb, Ub);
            continue
          }
          const Cb = null === (Ib = sb[lb]) || void 0 === Ib ? void 0 : Ib[Ub],
            Nb = Cb && (mb = Qb, (Mb = Cb).icon === mb.icon && Mb.level === mb.level && Mb.displayName === mb.displayName && Mb.endTick === mb.endTick && Mb.showInNametag === mb.showInNametag),
            Vb = {
              icon: Qb.icon,
              level: Qb.level,
              displayName: null !== (Hb = Qb.displayName) && void 0 !== Hb ? Hb : void 0,
              duration: eb,
              showInNametag: Qb.showInNametag
            };
          Nb || Xb(bb, lb, Ub, Vb), kb && lb === kb && Xb(bb, Wb, Ub, {
            ...Vb,
            showInNametag: !1
          })
        }
      var Mb, mb
    }
  },
  36530: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      g: () => Ib,
      k: () => Mb,
      l: () => Tb,
      n: () => fb
    });
    var kb = sb(36527),
      Wb = sb(36534);
    const ab = {
      description: "Bloxd Replay",
      accept: {
        [kb.g]: kb.c
      }
    };

    function Tb() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function Ub(bb) {
      return bb instanceof DOMException && "AbortError" === bb.name
    }
    async function Ib() {
      try {
        const [bb] = await window.showOpenFilePicker({
          multiple: !1,
          types: [ab]
        }), cb = await bb.getFile();
        return {
          handle: bb,
          bytes: new Uint8Array(await cb.arrayBuffer())
        }
      } catch (bb) {
        if (Ub(bb)) return null;
        throw bb
      }
    }
    async function Hb(bb) {
      if (bb && await async function(bb) {
          const cb = {
            mode: "readwrite"
          };
          return "granted" === await bb.queryPermission(cb) || "granted" === await bb.requestPermission(cb)
        }(bb)) return bb;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, kb.m)(),
          types: [ab]
        })
      } catch (cb) {
        if (Ub(cb)) return null;
        throw cb
      }
    }
    async function fb(bb, cb) {
      const sb = await bb.createWritable();
      await sb.write(new Blob([cb], {
        type: kb.g
      })), await sb.close()
    }

    function Mb(bb) {
      return (0, kb.i)((0, Wb.i)(bb))
    }
  },
  36102: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb
    });
    var kb = sb(19),
      Wb = sb(117),
      ab = sb(37),
      Tb = sb(706),
      Ub = sb(3222),
      Ib = sb(6328);
    const Hb = "shaderPackListingCheckedAt",
      fb = 36e5;

    function Mb() {
      const {
        canUseShaderPacks: bb
      } = Wb.featureFlags.settings;
      var cb, Mb;
      (0, Ub.j)(bb) && !(0, Ub.i)(bb) && (cb = ab.h.getItem(Hb), Mb = Date.now(), "number" !== typeof cb || Mb < cb || Mb - cb >= fb) && (0, Tb.d)((() => {
        (async function() {
          if ("landingPage" !== kb.d.get("gameState")) return;
          const bb = await (0, Ib.d)();
          if (void 0 === (null === bb || void 0 === bb ? void 0 : bb.listing)) return;
          ab.h.setItem(Hb, Date.now());
          const {
            followListingUpdates: cb
          } = await Promise.all([sb.e(74), sb.e(131), sb.e(123)]).then((() => sb(40719)));
          await cb(bb, bb.listing) || ab.h.removeItem(Hb)
        })().catch((bb => {
          console.error("Failed to check the shader pack listing for an update", bb)
        }))
      }))
    }
  },
  36142: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib
    });
    var kb = sb(334),
      Wb = sb(19),
      ab = sb(36151),
      Tb = sb(1626),
      Ub = sb(1917);

    function Ib(bb, cb) {
      var sb, Ib, Hb;
      if (!Wb.d.get("isKeydownEnabled") || bb.repeat) return;
      const fb = bb.code;
      "Escape" === bb.key ? (0, Tb.i)(bb) : null !== (sb = Ub.v.OpenSettings) && void 0 !== sb && sb.includes(fb) ? (0, Tb.v)(bb, kb.r.SETTINGS) : null !== (Ib = Ub.v.OpenCharacterCustomization) && void 0 !== Ib && Ib.includes(fb) ? (0, ab.b)() || (0, Tb.v)(bb, kb.r.CUSTOMISATION, cb()) : null !== (Hb = Ub.v.ShowDebugOverlay) && void 0 !== Hb && Hb.includes(fb) && Wb.d.set({
        showDebugOverlay: !Wb.d.get("showDebugOverlay")
      })
    }
  },
  36106: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => yb
    });
    var kb = sb(628),
      Wb = sb(1241),
      ab = sb(195);
    const Tb = "cf-";

    function Ub(bb) {
      return `${Tb}${bb}`
    }

    function Ib(bb) {
      return bb.startsWith(Ub("game-server-"))
    }

    function Hb(bb) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(bb)
    }
    var fb = sb(1255),
      Mb = sb(1235),
      Xb = sb(26),
      nb = sb(1746),
      mb = sb(1760),
      lb = sb(2729),
      Qb = sb(1302),
      eb = sb(1312),
      Cb = sb(1474),
      Nb = sb(1208),
      Vb = sb(36112),
      Lb = sb(37),
      ub = sb(167),
      Yb = sb(1770);
    const hb = Date.UTC(2026, 10, 25),
      Jb = 1728e5,
      gb = "gameServerRoute";
    async function Bb(bb) {
      if (!bb.ok) {
        const cb = await bb.text().catch((() => ""));
        return 403 === bb.status && "ipv6_unsupported" === cb ? "ipv6Refused" : "other"
      }
      const cb = await bb.json().catch((() => null));
      return "object" === typeof cb && null !== cb && Number.isFinite(cb.version) ? "ours" : "other"
    }
    const tb = new class {
      constructor(bb) {
        this.deps = bb
      }
      hostFor(bb) {
        return this.deps.enabled && Hb(bb) && "cloudflare" === this.heldRoute() ? Ub(bb) : bb
      }
      async afterJoinFailed(bb, cb) {
        var sb;
        if (!this.deps.enabled || void 0 === cb) return !1;
        const kb = new URL(bb).hostname,
          Wb = this.stored();
        if (Ib(kb)) {
          var ab;
          if (this.deps.lm("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === Wb || void 0 === Wb ? void 0 : Wb.route) || Wb.aliasFailedOnce || "ours" !== (await this.probeHost(kb)).answer) this.store({
            arm: null !== (ab = null === Wb || void 0 === Wb ? void 0 : Wb.arm) && void 0 !== ab ? ab : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...Wb,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!Hb(kb) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: Tb,
          cfMs: Ub
        } = await this.check(kb);
        if ("blocked" !== Tb) return this.deps.lm("game_server_route", Tb, Ub), !1;
        const fb = this.deps.now() >= hb ? "cloudflare" : null !== (sb = null === Wb || void 0 === Wb ? void 0 : Wb.arm) && void 0 !== sb ? sb : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === fb ? (this.store({
          arm: fb,
          route: "direct",
          until: Math.min(this.deps.now() + Jb, hb)
        }), this.deps.lm("game_server_route", "blocked_holdout", Ub), !1) : (this.store({
          arm: fb,
          route: "cloudflare",
          until: this.deps.now() + Jb
        }), this.deps.lm("game_server_route", "blocked", Ub), !0)
      }
      afterJoined(bb) {
        if (!this.deps.enabled) return;
        const cb = new URL(bb).hostname,
          sb = Ib(cb);
        if (sb) this.deps.lm("game_server_route", "cf_join", 0);
        else if (!Hb(cb) || this.deps.random() >= .01) return;
        const kb = sb ? cb.slice(Tb.length) : cb;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(kb, "direct", "direct_failed"), await this.reportRtt(Ub(kb), "cf", "cf_failed")
        }))
      }
      async check(bb) {
        const cb = this.probeHost(Ub(bb));
        if ("none" !== (await this.probeHost(bb)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: sb,
          ms: kb
        } = await cb;
        return "ours" !== sb && "ipv6Refused" !== sb ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(bb)).answer ? {
          outcome: "direct_reachable",
          cfMs: kb
        } : {
          outcome: "ipv6Refused" === sb ? "blocked_ipv6" : "blocked",
          cfMs: kb
        }
      }
      async reportRtt(bb, cb, sb) {
        const kb = "ours" === (await this.probeHost(bb)).answer ? await this.probeHost(bb) : null;
        "ours" === (null === kb || void 0 === kb ? void 0 : kb.answer) ? this.deps.lm("game_server_rtt", cb, kb.ms): this.deps.lm("game_server_rtt", sb, 0)
      }
      probeHost(bb) {
        return this.deps.probe(`https://${bb}/version`, 8e3)
      }
      stored() {
        return function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            arm: cb,
            route: sb,
            until: kb,
            aliasFailedOnce: Wb
          } = bb;
          return "cloudflare" !== cb && "holdout" !== cb || "cloudflare" !== sb && "direct" !== sb || "number" !== typeof kb ? null : !0 === Wb ? {
            arm: cb,
            route: sb,
            until: kb,
            aliasFailedOnce: Wb
          } : {
            arm: cb,
            route: sb,
            until: kb
          }
        }(this.deps.storage.getItem(gb))
      }
      heldRoute() {
        const bb = this.stored();
        return null !== bb && bb.until > this.deps.now() ? bb.route : null
      }
      store(bb) {
        this.deps.storage.setItem(gb, bb)
      }
    }({
      storage: Lb.h,
      probe: async function(bb, cb) {
        const sb = performance.now(),
          kb = await (0, Yb.i)(bb, {
            cache: "no-store"
          }, cb, (async bb => {
            const cb = Math.round(performance.now() - sb);
            return {
              answer: await Bb(bb),
              ms: cb
            }
          }));
        return null !== kb && void 0 !== kb ? kb : {
          answer: "none",
          ms: 0
        }
      },
      lm: nb.o,
      enabled: !(0, ub.b)(),
      now: Date.now,
      random: Math.random,
      delay: bb => new Promise((cb => {
        setTimeout(cb, bb)
      }))
    });

    function yb(bb) {
      return async (cb, sb, Tb, Ub, Hb) => {
        let Mb;
        if ((0, kb.L)(Tb)) {
          if (Hb.aborted) return Pb();
          const bb = await Db(cb, sb, Ub);
          if (Hb.aborted || lb.e.matchmakingEnded(bb.isError() ? null : performance.now()), bb.isError()) {
            const cb = bb.asError();
            return console.log("Join room did not succeed, reason:", cb.message), cb.forward()
          }
          Mb = bb.getValue()
        } else {
          lb.e.skipPlayWait();
          const bb = Eb(Tb.replace("https://", "").replace("http://", ""));
          if (bb.isError()) return bb.asError().forward();
          Mb = {
            endpoint: bb.getValue(),
            gameNameWithVariation: sb,
            lobbyName: cb instanceof Wb.h ? cb.getLobbyName() : cb
          }
        }
        if (Hb.aborted) return Pb();
        console.log(`Connecting to ${Mb.gameNameWithVariation} in lobby ${Mb.lobbyName} on game server ${Mb.endpoint}`), Xb.j.QQ("matchmakeAndPlayStepCompleted", {
          step: ab.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, nb.f)(), mb.e.markGameLoadStart(), (0, eb.o)({
          websocketUrl: Mb.endpoint,
          gameNameWithVariation: Mb.gameNameWithVariation,
          lobbyName: Mb.lobbyName
        }), Xb.j.QQ("loadingScreenState", "loadingPage:loadingGame");
        const Cb = async () => {
          const bb = await async function(bb, cb, sb, kb) {
            const Wb = await Db(bb, cb, sb);
            if (!Wb.isError() && !kb.aborted) {
              const {
                endpoint: bb,
                gameNameWithVariation: cb,
                lobbyName: sb
              } = Wb.getValue();
              (0, eb.o)({
                websocketUrl: bb,
                gameNameWithVariation: cb,
                lobbyName: sb
              })
            }
            return Wb
          }(cb, sb, Ub, Hb);
          return bb.isError() || (Mb = bb.getValue()), bb
        }, Nb = !(0, kb.L)(Tb), Vb = () => bb({
          place: Mb,
          userContext: Ub,
          direct: Nb,
          rematch: Cb
        }, Hb);
        let Lb = await Vb();
        const ub = Lb.isError() && !0 === Lb.asError().debugResult.rematch;
        if (Lb.isError() && !Nb && !Hb.aborted && (ub || await tb.afterJoinFailed(Mb.endpoint, Lb.asError().debugResult.gameServerUnreachable))) {
          if (Hb.aborted) return Pb();
          console.log("Matchmaking again");
          const bb = await Cb();
          if (bb.isError()) return bb.asError().forward();
          if (Hb.aborted) return Pb();
          Lb = await Vb(), !Lb.isError() || ub && !Ib(new URL(Mb.endpoint).hostname) || await tb.afterJoinFailed(Mb.endpoint, Lb.asError().debugResult.gameServerUnreachable)
        }
        return Lb.isError() ? Lb.asError().forward() : (tb.afterJoined(Mb.endpoint), (0, Qb.O)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), fb.d.value({
          gameNameWithVariation: Mb.gameNameWithVariation,
          lobbyName: Mb.lobbyName,
          addLobbyToRecentlyPlayed: !(cb instanceof Wb.h)
        }))
      }
    }

    function Pb() {
      return fb.d.errorWithCode("Left the game while it loaded", ab.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Gs: !0
      })
    }
    async function Db(bb, cb, sb) {
      return (0, kb.L)(bb) || bb instanceof Wb.h || !(bb.length > Mb.I) ? await Cb.b.matchmakePlayer(sb, bb, cb, (0, Vb.e)()).then((bb => {
        if (!1 === bb.succeeded) return fb.d.errorWithCode(bb.failReason, ab.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: cb,
          lobbyName: sb,
          gameNameWithVariation: kb
        } = bb, Wb = Eb(tb.hostFor(cb));
        return Wb.isError() ? Wb.asError().forward() : fb.d.value({
          endpoint: Wb.getValue(),
          gameNameWithVariation: kb,
          lobbyName: sb
        })
      })).catch((bb => (console.error("Bad response from the matchmaking server:", bb), fb.d.errorWithCode(bb.toString(), ab.k.REQUEST_TO_MATCHMAKING, {
        error: bb,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", bb), fb.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", ab.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function Eb(bb) {
      const cb = Nb.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(bb);
      return cb.isError() ? fb.d.errorWithCode(cb.asError().message, ab.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : fb.d.value(cb.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, eb.j)("/")
    }
  },
  8836: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => nb,
      e: () => Xb
    });
    var kb = sb(19),
      Wb = sb(1670),
      ab = sb(37),
      Tb = sb(1332),
      Ub = sb(3447),
      Ib = sb(1454),
      Hb = sb(1371);
    const fb = 2592e5,
      Mb = "notificationOptInLastPromptedAt";
    async function Xb() {
      var bb;
      const cb = await nb();
      if (null === cb) return;
      const sb = null !== (bb = ab.h.getItem(Mb)) && void 0 !== bb ? bb : 0;
      if (Date.now() - sb < fb) return;
      if ((0, Hb.g)()) return;
      const kb = await Tb.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Wb.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== kb && (ab.h.setItem(Mb, Date.now()), (0, Ib.reportAnalyticsClick)({
        id: !0 === kb ? "push.allow" : "push.deny",
        value: Wb.b.supports("notifications") ? "app" : "browser"
      }), !0 === kb && cb().catch((bb => {
        console.error("Failed to ask for push notifications:", bb)
      })))
    }
    async function nb() {
      return await Wb.b.ready, Wb.b.supports("notifications") ? kb.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Wb.b.request("notifications.requestPermission", {}).then((bb => {
          let {
            canAsk: cb
          } = bb;
          kb.d.set({
            mobilePushNotificationsCanAsk: cb
          })
        }), (bb => {
          console.error("The app couldn't ask for push notifications:", bb)
        }))
      }: null: await Ub.b.canAsk() ? () => Ub.b.requestPermission() : null
    }
  },
  36120: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Xb,
      i: () => fb,
      m: () => nb,
      n: () => Mb
    });
    var kb = sb(344),
      Wb = sb(664),
      ab = sb(670),
      Tb = sb(37);
    const Ub = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Ib = "playSessionGameNameWithVariation",
      Hb = "wasMatchmakePlayer";

    function fb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i;
      (0, ab.j)(bb, Ub)
    }

    function Mb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).setItem(Hb, !0)
    }

    function Xb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i;
      return (0, ab.d)(bb, Ub)
    }

    function nb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tb.i;
      const sb = (0, ab.d)(cb, Ub),
        fb = function(bb) {
          const cb = bb.getItem(Ib);
          return "string" !== typeof cb ? null : cb
        }(cb),
        Mb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).getItem(Hb)
        }(cb);
      let Xb;
      return Xb = null !== sb && null !== fb && (0, ab.f)(cb, Ub) && function(bb, cb, sb) {
          const Wb = (0, kb.Wb)(bb),
            ab = (0, kb.Wb)(cb),
            Tb = (0, kb.Qb)(bb),
            Ub = (0, kb.Qb)(cb);
          return !(Wb !== ab || !sb) || Wb === ab && Tb === Ub
        }(fb, bb, Mb) ? sb : (0, Wb.d)(), (0, ab.n)(cb, Ub, Xb), cb.setItem(Ib, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tb.i).removeItem(Hb)
        }(cb), Xb
    }
  },
  36112: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Cb,
      i: () => Nb
    });
    var kb = sb(1008),
      Wb = sb(635),
      ab = sb(344),
      Tb = sb(1013),
      Ub = sb(649),
      Ib = sb(683),
      Hb = sb(4257),
      fb = sb(117),
      Mb = sb(167),
      Xb = sb(1704),
      nb = sb(137),
      mb = sb(36120),
      lb = sb(37),
      Qb = sb(667),
      eb = sb(36127);

    function Cb() {
      var bb, cb;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (cb = navigator.language) && void 0 !== cb ? cb : "none"], "en-Gb"]
    }

    function Nb(bb, cb, sb, Nb, Vb) {
      const Lb = (0, kb.k)(cb) ? (0, kb.s)(cb) : null,
        ub = {
          cookies: (0, Xb.getAllCookiesForGameNameWithVariation)(cb),
          isMobile: (0, fb.isMobile)(),
          isUsingCustomGameTexturePack: null !== Lb && Vb(Lb),
          generalCookies: {
            joinDiscord: !!lb.h.getItem("DiscordPressed"),
            newGo: Hb.b,
            ...bb.getMetricsCookies(),
            trafficCode: Nb,
            compliance: fb.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, fb.getBrowserName)(),
            version: (0, fb.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, fb.getPlatformType)(),
            deviceType: (0, nb.c)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: sb,
          languages: Cb(),
          version: Wb.d,
          siteUsed: Mb.r,
          subsiteUsed: Mb.y,
          playSessionId: (0, mb.m)(cb),
          visitSessionId: (0, Qb.c)(),
          clientReason: Ub.n.reason,
          budgetBasis: (0, eb.f)(),
          ...null !== Ib.l && {
            diagClaim: Ib.l.claimId
          }
        };
      return null !== Lb && (0, ab.Fc)(Lb) ? (ub.lobbyName = (0, kb.i)(Lb, (0, kb.o)(cb), sb), {
        roomName: `classic_${Tb.f}`,
        joinOptions: ub
      }) : {
        roomName: cb,
        joinOptions: ub
      }
    }
  },
  36228: (bb, cb, sb) => {
    function kb(bb, cb) {
      for (let sb = 0; sb < bb.length; sb++)
        if (bb[sb].identifier === cb) return bb[sb];
      return null
    }

    function Wb(bb, cb) {
      return null !== kb(bb, cb)
    }
    sb.d(cb, {
      b: () => kb,
      c: () => Wb
    })
  },
  36455: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => Gb,
      F: () => Kb,
      I: () => ib,
      J: () => Zb,
      b: () => Ib,
      e: () => tb,
      f: () => Ub,
      g: () => Eb,
      h: () => gb,
      k: () => ub,
      o: () => Db,
      s: () => Pb,
      v: () => Jb,
      z: () => Ob
    });
    var kb = sb(37);
    const Wb = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ab = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Tb = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Ub = ab.filter((bb => "docsButton" !== bb)),
      Ib = Tb.filter((bb => "aiHelperButton" !== bb)),
      Hb = "codeEditorTutorials",
      fb = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Mb = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Xb = null,
      nb = null;
    const mb = new Set,
      lb = new Set;
    let Qb = null;
    const eb = new Set,
      Cb = new Set;

    function Nb() {
      Cb.forEach((bb => {
        bb()
      }))
    }

    function Vb() {
      if (!Xb) {
        const bb = kb.h.getItem(Hb);
        Xb = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return Xb
    }

    function Lb(bb) {
      const cb = Vb();
      cb[bb] || (Xb = {
        ...cb,
        [bb]: !0
      }, kb.h.setItem(Hb, Xb))
    }

    function ub(bb) {
      return "docsOverview" === bb ? ab : "aiHelperOverview" === bb ? Tb : nb ? Wb[nb] : []
    }

    function Yb(bb) {
      return ("worldCodeButton" !== bb || !Vb().worldCodeIntroShown) && !eb.has(bb)
    }

    function hb(bb) {
      var cb;
      return (null === (cb = Qb) || void 0 === cb ? void 0 : cb.name) === bb ? Qb.stepsDone : mb
    }

    function Jb(bb, cb) {
      if (! function(bb) {
          return Qb ? Qb.name === bb : "welcome" === bb
        }(bb) || !Yb(cb) || hb(bb).has(cb)) return !1;
      if (Qb) return !0;
      const sb = fb[cb];
      return sb ? !Vb()[sb] || lb.has(cb) : !Vb()[Mb[bb]]
    }

    function gb(bb) {
      var cb;
      return null !== (cb = ub(bb).find((cb => Jb(bb, cb)))) && void 0 !== cb ? cb : null
    }

    function Bb(bb) {
      var cb;
      Lb(Mb[bb]), (null === (cb = Qb) || void 0 === cb ? void 0 : cb.name) === bb && (Qb = null)
    }

    function tb(bb) {
      const cb = (Qb ? [Qb.name] : ["welcome", "docsOverview"]).find((cb => gb(cb) === bb));
      if (!cb) return;
      hb(cb).add(bb);
      const sb = fb[bb];
      sb && (Lb(sb), Qb || lb.add(bb)), null === gb(cb) && Bb(cb), Nb()
    }

    function yb(bb, cb) {
      const sb = ub(bb),
        kb = hb(bb);
      for (let Wb = sb.indexOf(cb) - 1; Wb >= 0; Wb--)
        if (kb.has(sb[Wb]) && Yb(sb[Wb])) return sb[Wb];
      return null
    }

    function Pb(bb, cb) {
      return null !== yb(bb, cb)
    }

    function Db(bb, cb) {
      const sb = yb(bb, cb);
      sb && (hb(bb).delete(sb), Nb())
    }

    function Eb(bb) {
      Bb(bb), "welcome" === bb && ub("welcome").forEach((bb => {
        const cb = fb[bb];
        cb && Lb(cb)
      })), Nb()
    }

    function ib(bb) {
      Qb = {
        name: bb,
        stepsDone: new Set
      }, Nb()
    }

    function Ob() {
      (Qb || 0 !== mb.size || 0 !== lb.size) && (Qb = null, mb.clear(), lb.clear(), Nb())
    }

    function Gb(bb, cb) {
      const sb = cb ? bb : nb === bb ? null : nb;
      sb !== nb && (nb = sb, Nb())
    }

    function Kb(bb, cb) {
      eb.has(bb) === cb && (cb ? eb.delete(bb) : eb.add(bb), Nb())
    }

    function Zb(bb) {
      return Cb.add(bb), () => {
        Cb.delete(bb)
      }
    }
  },
  36139: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      h: () => Wb,
      k: () => ab
    });
    const kb = 1024,
      Wb = 1024 * kb;

    function ab(bb) {
      return (bb / Wb).toFixed(1)
    }
  },
  36134: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Ub,
      e: () => Tb,
      g: () => Ib,
      h: () => Hb
    });
    var kb = sb(223);
    const Wb = 32 * sb(36139).h,
      ab = 6144,
      Tb = 4608,
      Ub = 512;

    function Ib(bb) {
      return Math.floor(Wb * bb / ab)
    }

    function Hb(bb) {
      const cb = bb - Math.floor(bb / 6);
      let sb = kb.e.maxChunkHorizAddDistance,
        Wb = kb.e.maxChunkVertAddDistance;
      if (fb(sb + 1, Wb + 1) <= cb) return null;
      for (; fb(sb + 1, Wb + 1) > cb && (sb > 0 || Wb > 0);) sb > Wb ? sb-- : Wb--;
      return {
        horizontal: sb,
        vertical: Wb
      }
    }

    function fb(bb, cb) {
      const sb = Math.max(bb, cb);
      let kb = 0;
      for (let Wb = -sb; Wb <= sb; Wb++)
        for (let ab = -sb; ab <= sb; ab++)
          for (let Tb = -sb; Tb <= sb; Tb++) Mb(bb, cb, Wb, ab, Tb) && kb++;
      return kb
    }

    function Mb(bb, cb, sb, kb, Wb) {
      const ab = sb * sb + Wb * Wb;
      return bb === cb ? ab + kb * kb <= bb * bb : bb > cb ? Math.abs(kb) <= cb && ab + kb * kb <= bb * bb : ab <= bb * bb && ab + kb * kb <= cb * cb
    }
  },
  36127: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ub,
      f: () => Lb,
      g: () => Vb
    });
    var kb = sb(223),
      Wb = sb(117),
      ab = sb(2693),
      Tb = sb(4146),
      Ub = sb(656),
      Ib = sb(36134);
    const Hb = 1048576,
      fb = 1024 * Hb,
      Mb = 400 * Hb,
      Xb = 147456,
      nb = .5,
      mb = 1.5 * fb,
      lb = 768 * Hb;

    function Qb(bb) {
      return Mb + bb * Xb
    }

    function eb(bb, cb, sb) {
      var Wb, Tb;
      let {
        footprintBytes: Ub,
        basis: Hb,
        namesLimit: eb
      } = function(bb) {
        const {
          os: cb,
          deviceMemory: sb
        } = bb;
        if ("ios" === cb) switch ((0, ab.g)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: Qb(Ib.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: lb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: mb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: lb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof sb && Number.isFinite(sb) && sb > 0 ? {
          footprintBytes: sb * fb * nb,
          basis: `memory-${sb}`,
          namesLimit: !0
        } : "android" === cb ? {
          footprintBytes: lb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Qb(Ib.e),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (sb) {
        const bb = Math.min(Ub, Qb(Ib.c));
        Ub = Mb + Math.max(0, bb - Mb) / 2, Hb += "+killed", eb = !0
      }
      null !== cb && Qb(cb) < Ub && (Ub = Qb(cb), Hb += "+learned", eb = !0);
      const Cb = function(bb) {
          const cb = Math.floor((bb - Mb) / Xb);
          return Math.min(Ib.c, Math.max(Ib.d, cb))
        }(Ub),
        Nb = (0, Ib.h)(Cb);
      return {
        footprintBytes: Ub,
        shedFootprintBytes: eb ? Math.max(Ub, Qb(Cb)) : null,
        chunkCap: Cb,
        maxHorizDistance: null !== (Wb = null === Nb || void 0 === Nb ? void 0 : Nb.horizontal) && void 0 !== Wb ? Wb : kb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Tb = null === Nb || void 0 === Nb ? void 0 : Nb.vertical) && void 0 !== Tb ? Tb : kb.e.maxChunkVertAddDistance,
        basis: Hb
      }
    }
    let Cb = null;

    function Nb() {
      return eb({
        os: (0, Wb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ab.k)()
      }, (0, Tb.d)(), (0, Ub.A)("wasm").length > 0)
    }

    function Vb() {
      return Cb ??= Nb(), Cb
    }

    function Lb() {
      var bb;
      return (null !== (bb = Cb) && void 0 !== bb ? bb : Nb()).basis
    }

    function ub(bb, cb) {
      return bb.setChunkCap(cb.chunkCap)
    }
  },
  36233: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      i: () => Xb,
      k: () => eb,
      l: () => Hb
    });
    var kb = sb(19),
      Wb = sb(2305),
      ab = sb(2310),
      Tb = sb(2319),
      Ub = sb(2367),
      Ib = sb(26);

    function Hb(bb, cb) {
      return (!(0, Tb.e)() || 0 === bb && 0 === cb) && (0, ab.r)(Wb.h.Joystick, 0, bb, cb, 0)
    }
    const fb = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Mb(bb) {
      return bb.classList.contains("TouchKeyHit") && nb() ? null : bb.firstElementChild
    }

    function Xb(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !nb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: mb(Mb(bb))
      }
    }

    function nb() {
      return document.documentElement.classList.contains(Ub.j)
    }

    function mb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function lb(bb, cb) {
      const sb = bb => Math.min(65535, Math.round(4 * bb));
      return (sb(bb) | sb(cb) << 16) >>> 0
    }

    function Qb(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const eb = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        cb ? this.elements.set(bb, {
          element: cb,
          hidden: sb
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const cb of this.elements.keys()) this.measureOne(cb)
      }
      hitZone(bb, cb) {
        let sb = null,
          kb = 1;
        for (const Wb of this.elements.keys()) {
          const ab = this.shown(Wb);
          if (!ab) continue;
          const {
            rect: Tb,
            element: Ub
          } = ab, Ib = Qb(Tb), Hb = Math.max(0, Tb.width / 2 - Ib.radius), fb = Math.max(0, Tb.height / 2 - Ib.radius), Xb = Math.max(0, Math.abs(bb - Ib.x) - Hb), nb = Math.max(0, Math.abs(cb - Ib.y) - fb), lb = Ub.firstElementChild;
          let eb = Math.hypot(Xb, nb) / Ib.radius;
          const Cb = mb(Mb(Ub));
          Cb && (eb = Math.min(eb, Math.max(2 * Math.abs(bb - Ib.x) / Cb.width, 2 * Math.abs(cb - Ib.y) / Cb.height))), eb < kb && (sb = {
            code: Wb,
            element: Ub,
            key: lb,
            ...Ib
          }, kb = eb)
        }
        return sb
      }
      measureOne(bb) {
        const cb = this.shown(bb);
        if (!cb) return void this.write(Wb.h.TouchZone, bb, 0, 0, 0);
        const {
          rect: sb,
          element: kb
        } = cb, ab = Qb(sb);
        this.write(Wb.h.TouchZone, bb, ab.x - this.canvasLeft, ab.y - this.canvasTop, lb(sb.width, sb.height));
        const Tb = mb(Mb(kb));
        this.write(Wb.h.TouchZone, 256 | bb, 0, 0, Tb ? lb(Tb.width, Tb.height) : 0)
      }
      shown(bb) {
        const cb = this.elements.get(bb),
          sb = kb.d.get("worldPanelHud");
        if (!cb || cb.hidden || "none" === sb) return null;
        const Wb = cb.element.getBoundingClientRect();
        return Wb.width <= 0 || Wb.height <= 0 ? null : {
          rect: Wb,
          element: cb.element
        }
      }
    }(ab.r);
    (0, Ib.l)(Ub.g, (() => {
      eb.measure()
    }))
  },
  36423: (bb, cb, sb) => {
    function kb(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    sb.d(cb, {
      b: () => Wb,
      e: () => Tb,
      h: () => Ib,
      j: () => Ub,
      m: () => kb,
      o: () => ab
    });
    const Wb = "https://discord.gg/playbloxd";

    function ab(bb) {
      return "download" === bb ? {
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

    function Tb(bb, cb) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: cb ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: cb,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Ub() {
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

    function Ib(bb, cb, sb) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: sb ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: cb ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36469: (bb, cb, sb) => {
    function kb(bb, cb) {
      return null === bb || null === cb ? bb === cb : bb[0] === cb[0] && bb[1] === cb[1] && bb[2] === cb[2]
    }

    function Wb(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    sb.d(cb, {
      e: () => Wb,
      f: () => kb
    })
  },
  36425: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib,
      i: () => Ub
    });
    const kb = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Wb = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      ab = {
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
      Tb = {
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
      Ub = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: kb.files,
          dependencies: kb.dependencies,
          bundledSource: kb.bundledSource,
          types: kb.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Wb.files,
          dependencies: Wb.dependencies,
          bundledSource: Wb.bundledSource,
          types: Wb.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: ab.files,
          dependencies: ab.dependencies,
          bundledSource: ab.bundledSource,
          types: ab.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Tb.files,
          dependencies: Tb.dependencies,
          bundledSource: Tb.bundledSource,
          types: Tb.types
        }
      };

    function Ib(bb) {
      const cb = [],
        sb = new Set,
        kb = bb => {
          if (sb.has(bb)) return;
          const Wb = Ub[bb];
          if (Wb) {
            sb.add(bb);
            for (const bb of Wb.dependencies) kb(bb);
            cb.push(bb)
          }
        };
      for (const Wb of bb) kb(Wb);
      return cb
    }
  },
  36430: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib,
      h: () => Ub,
      l: () => Tb,
      o: () => ab,
      q: () => Hb,
      r: () => fb,
      t: () => mb,
      v: () => nb,
      z: () => Xb
    });
    var kb = sb(1253);
    const Wb = ["quickjs", "ses"];

    function ab(bb) {
      return Wb.includes(bb)
    }

    function Tb(bb) {
      return bb === kb.f || bb === kb.h
    }

    function Ub(bb, cb) {
      return bb === kb.f && cb === kb.h || bb === kb.h && cb === kb.f
    }

    function Ib(bb) {
      const cb = kb.h in bb,
        sb = kb.f in bb;
      return cb && sb ? null : cb ? kb.h : sb ? kb.f : null
    }

    function Hb(bb, cb, sb) {
      const kb = `${cb}/`;
      return bb.filter((bb => bb.startsWith(kb))).map((bb => [bb, `${sb}/${bb.slice(kb.length)}`]))
    }

    function fb(bb, cb) {
      let sb = 0;
      for (const [kb, Wb] of Object.entries(bb)) kb !== cb && (sb += Wb.length);
      return sb
    }
    const Mb = "@plugins/";

    function Xb(bb) {
      return `${Mb}${bb}`
    }

    function nb(bb, cb) {
      return `/node_modules/@plugins/${bb}/${cb}`
    }

    function mb(bb) {
      if (!bb.startsWith(Mb)) return null;
      const cb = bb.slice(Mb.length);
      return function(bb) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(bb)
      }(cb) ? cb : null
    }
  },
  36440: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Wb,
      i: () => Tb,
      k: () => Ib,
      l: () => ab
    });
    var kb = sb(36434);
    const Wb = 5,
      ab = "[SCHEMATIC]",
      Tb = 1024e4;

    function Ub(bb) {
      return bb.endsWith(".bloxdschem") && (0, kb.r)(bb.slice(0, -11) + ".ts") && bb.length <= 64
    }

    function Ib(bb) {
      return Object.fromEntries(Object.keys(bb).map((bb => [bb, ab])))
    }
  },
  36434: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      e: () => ab,
      f: () => Xb,
      j: () => Ub,
      l: () => Ib,
      o: () => Hb,
      r: () => Mb,
      t: () => fb,
      v: () => Tb
    });
    var kb = sb(1253);
    let Wb = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      ab = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Tb(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Ub(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: kb.f
      };
      if (bb.startsWith("lobby:")) {
        const cb = bb.slice(6);
        return Mb(cb) ? {
          kind: "lobby",
          path: cb
        } : null
      }
      const cb = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return cb ? {
        kind: "codeBlock",
        pos: [parseInt(cb[1]), parseInt(cb[2]), parseInt(cb[3])]
      } : null
    }

    function Ib(bb) {
      return bb.endsWith(".d.ts")
    }

    function Hb(bb) {
      return bb.endsWith(".ts") && !Ib(bb)
    }
    const fb = 64;

    function Mb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > fb) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Ib(bb) && !Hb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const cb = bb.split("/");
      for (const sb of cb)
        if ("" === sb || "." === sb || ".." === sb) return !1;
      return !0
    }
    const Xb = 14e3
  },
  4569: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      e: () => kb,
      f: () => ab,
      g: () => Ib,
      i: () => Tb
    });
    const kb = ["sine", "triangle", "square", "sawtooth"],
      Wb = 55,
      ab = {
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

    function Tb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(ab, bb) ? ab[bb] : null
    }

    function Ub(bb, cb, sb) {
      return Math.min(sb, Math.max(cb, bb))
    }

    function Ib(bb) {
      const cb = Ub(bb.durationMs, 10, 500),
        sb = Ub(bb.attackMs, 0, cb),
        {
          intonation: Wb
        } = bb;
      return {
        waveform: kb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Ub(bb.pitchHz, 20, 4e3),
        glideSemitones: Ub(bb.glideSemitones, -24, 24),
        durationMs: cb,
        attackMs: sb,
        releaseMs: Ub(bb.releaseMs, 0, cb - sb),
        lowpassHz: null === bb.lowpassHz ? null : Ub(bb.lowpassHz, 20, 2e4),
        volume: Ub(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Ub(Wb.variationSemitones, 0, 6),
          declineSemitones: Ub(Wb.declineSemitones, 0, 12),
          questionRiseSemitones: Ub(Wb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ub(Wb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ub(bb.syllableMs, 25, 200)
      }
    }
  },
  9765: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  17881: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19867: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19872: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19875: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19877: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19880: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);