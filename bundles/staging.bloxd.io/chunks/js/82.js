export const id = 82;
export const ids = [82];
export const modules = {
  35967: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Kb,
      f: () => ub
    });
    var Ab = Ub(52),
      Mb = Ub(1824),
      Tb = Ub(35970),
      Eb = Ub.n(Tb),
      Yb = Ub(4225),
      Bb = Ub(1794),
      eb = Ub(1345),
      vb = Ub(101),
      Lb = Ub(116),
      Pb = Ub(325),
      Xb = Ub(984),
      jb = Ub.n(Xb),
      Rb = Ub(19),
      kb = Ub(990),
      yb = Ub(1548),
      Zb = Ub(1639),
      Db = Ub(1597),
      zb = Ub(1897),
      xb = Ub(1304),
      ib = Ub(1963),
      fb = Ub(1294),
      mb = Ub(8340),
      pb = Ub(35977),
      Nb = Ub(35990),
      Wb = Ub(1379),
      Hb = Ub(2275),
      Ib = Ub(1134),
      db = Ub(36003);
    var Fb = Ub(8834);
    var hb = Ub(1023);
    const Gb = Ub(36005),
      Qb = ["enter", "t", "/"];
    let qb = !1;

    function ub() {
      return qb || (0, Zb.isTextEntry)(document.activeElement)
    }

    function rb() {
      var bb, ab;
      (0, ib.c)();
      const Ub = null !== (bb = null === (ab = (0, xb.d)()) || void 0 === ab ? void 0 : ab.getBoundButton("keyboardChannel")) && void 0 !== bb ? bb : null;
      return Ub ? (0, hb.jsx)(zb.e, {
        className: "ChatInputChannelGlyph",
        glyph: Ub
      }) : null
    }

    function Kb() {
      const {
        t: bb
      } = (0, Ib.A)(), {
        isTouchScreen: ab
      } = (0, Rb.n)(["isTouchScreen"]), Ub = (0, fb.o)(), [Tb, Xb] = (0, Ab.useState)(!1), zb = (0, Ab.useRef)(Tb), xb = (0, Ab.useRef)(null), {
        messages: ib,
        reportedPlayers: ub,
        channel: Kb
      } = (0, mb.i)(), lb = (0, Ab.useRef)(0), tb = (0, Ab.useRef)(""), wb = (0, Ab.useRef)(null);
      var sb;
      sb = wb, (0, Ab.useEffect)((() => {
        if (!(0, vb.isIOS)()) return;
        const bb = sb.current;
        let ab = null;
        const Ub = Ub => {
            const Ab = Ub.changedTouches[0];
            ab = "none" === getComputedStyle(bb).pointerEvents ? {
              id: Ab.identifier,
              y: Ab.clientY
            } : null
          },
          Ab = Ub => {
            const Ab = ab,
              Mb = Ab && (0, db.e)(Ub.changedTouches, Ab.id);
            Mb && (Ub.preventDefault(), bb.scrollBy({
              top: Ab.y - Mb.clientY,
              behavior: "instant"
            }), Ab.y = Mb.clientY)
          };
        return bb.addEventListener("touchstart", Ub, {
          passive: !0
        }), bb.addEventListener("touchmove", Ab, {
          passive: !1
        }), () => {
          bb.removeEventListener("touchstart", Ub), bb.removeEventListener("touchmove", Ab)
        }
      }), [sb]);
      const [gb, Cb] = (0, Ab.useState)(!1), [Vb, Ob] = (0, Ab.useState)(!1), cb = (0, Ab.useRef)(gb), Jb = (0, Ab.useRef)(null), nb = (0, Ab.useRef)(!1), Sb = (0, Ab.useRef)(null), ba = (0, Ab.useRef)(null), aa = (0, Ab.useRef)(null), Ua = (0, Ab.useRef)(Ea);
      Ua.current = Ea;
      const Aa = (0, Hb.m)();

      function Ma() {
        zb.current = !1, Xb(!1), ba.current.blur()
      }

      function Ta(bb) {
        cb.current = bb, Cb(bb)
      }

      function Ea() {
        const bb = ba.current.value;
        ba.current.value = "", Ya(bb)
      }

      function Ya(bb) {
        (0, mb.g)(bb), lb.current = 0, Ta(!1)
      }

      function Ba(bb, ab) {
        0 === lb.current && (tb.current = ba.current.value);
        const Ub = (0, mb.f)(lb.current + bb, ab);
        lb.current = Ub.stepsBack, ba.current.value = 0 === Ub.stepsBack ? tb.current : Ub.text, setTimeout((() => {
          ba.current && ba.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function ea() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wb.current && (!bb && cb.current || (wb.current.scrollTop = 1e5))
      }
      return (0, Yb.b)(!0, Tb, "ChatComponent"), (0, Ab.useEffect)((() => (qb = Tb, () => {
          qb = !1
        })), [Tb]), (0, eb.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, yb.p)() && Xb(!1)
        })), (0, Ab.useEffect)((() => {
          ba.current.addEventListener("blur", (bb => {
            if (null === ba.current) return;
            Array.from(document.querySelectorAll(":hover")).some((bb => bb.classList.contains("ChatInputChannel") || bb.classList.contains("ChatMsgSelectWrapper"))) || ((0, vb.isMobile)() && zb.current && "" !== ba.current.value && Ua.current(), Xb(!1))
          }));
          const bb = bb => {
            xb.current.contains(bb.target) || (0, Db.k)(bb.target) || Xb(!1)
          };
          document.addEventListener("touchstart", bb, {
            capture: !0
          });
          const ab = bb => {
            (0, Nb.g)(bb.target) && (zb.current = !1, Xb(!1))
          };
          document.addEventListener("mousedown", ab, {
            capture: !0
          });
          const Ub = () => {
              clearTimeout(Jb.current), Ta(!0)
            },
            Ab = () => {
              clearTimeout(Jb.current), Jb.current = setTimeout((() => {
                Ta(!1), ea()
              }), 4e3)
            },
            Tb = () => {
              document.pointerLockElement ? (Xb(!1), Ob(!0), nb.current = !1, Ta(!1), ea()) : Ob(!1)
            };
          wb.current.addEventListener("pointermove", (bb => {
            "touch" === bb.pointerType || nb.current || document.pointerLockElement || (nb.current = !0, clearTimeout(Jb.current))
          })), wb.current.addEventListener("pointerleave", (bb => {
            "touch" !== bb.pointerType && (nb.current = !1, cb.current && Ab())
          })), wb.current.addEventListener("pointerdown", (bb => {
            "touch" === bb.pointerType || document.pointerLockElement || (nb.current = !0, Ub())
          })), wb.current.addEventListener("wheel", (bb => {
            document.pointerLockElement || bb.deltaY >= 0 && Math.abs(wb.current.scrollTop) < 1 || (Ub(), nb.current || (Jb.current = setTimeout((() => {
              Ta(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), wb.current.addEventListener("touchstart", Ub), wb.current.addEventListener("touchend", Ab), wb.current.addEventListener("touchcancel", Ab), document.addEventListener("pointerlockchange", Tb);
          const Yb = bb => {
            if (Aa.shown && (zb.current || ! function(bb) {
                if ((0, Zb.isTypingInInput)()) return !0;
                const ab = document.activeElement;
                return (ab instanceof HTMLButtonElement || "button" === (null === ab || void 0 === ab ? void 0 : ab.getAttribute("role"))) && ["Enter", " "].includes(bb.key)
              }(bb)) && "codeEditor" !== Rb.c.get("openInGameMenuName") && "lobbyCodeEditor" !== Rb.c.get("openInGameMenuName") && !Mb.gameBridge.latest("connectedGame").replay)
              if (zb.current || !(0, yb.p)()) {
                if (zb.current) {
                  if ("ArrowUp" === bb.code || "ArrowDown" === bb.code) return Ba("ArrowUp" === bb.code ? 1 : -1, !1), void bb.stopPropagation();
                  if ("Tab" === bb.code) return mb.b.selectNextChannel(), bb.stopPropagation(), void bb.preventDefault();
                  if (bb.ctrlKey && ob.includes(Gb[bb.keyCode])) return bb.preventDefault(), void bb.stopPropagation()
                }
                if ([...Qb, "esc"].includes(Eb()(bb)))
                  if ("esc" !== Eb()(bb)) {
                    if (!zb.current || "/" !== Eb()(bb)) {
                      if ("t" === Eb()(bb)) {
                        if (zb.current) return void bb.stopPropagation();
                        bb.preventDefault()
                      }
                      zb.current && "" !== ba.current.value && Ua.current(), bb.repeat || (zb.current || "/" === Eb()(bb) && (ba.current.value = "/", bb.preventDefault()), Xb(!zb.current))
                    }
                  } else zb.current && (Xb(!1), bb.stopPropagation());
                else zb.current && bb.stopPropagation()
              } else Qb.includes(Eb()(bb)) && (bb.preventDefault(), bb.stopPropagation(), (0, yb.d)(bb))
          };
          document.addEventListener("keydown", Yb, {
            capture: !0
          });
          const Bb = wb.current;
          let eb = !1;
          const Lb = new ResizeObserver((() => {
              eb && (eb = !1, ea())
            })),
            Pb = () => {
              eb = !0, Lb.unobserve(Bb), Lb.observe(Bb)
            };
          Sb.current = Pb;
          const jb = new MutationObserver(Pb);
          return jb.observe(Bb, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Yb, {
              capture: !0
            }), document.removeEventListener("touchstart", bb, {
              capture: !0
            }), document.removeEventListener("mousedown", ab, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Tb), Sb.current = null, jb.disconnect(), Lb.disconnect(), clearTimeout(Jb.current)
          }
        }), []), (0, Db.p)(ba, {
          open: () => {
            Xb(!0)
          },
          close: () => {
            Ma()
          },
          submit: () => {
            "" !== ba.current.value && Ea(), Ma()
          },
          stepHistory: () => {
            Ba(1, !0)
          },
          sendLine: bb => {
            Ya(bb), Ma()
          },
          selectNextChannel: () => {
            mb.b.selectNextChannel()
          }
        }), (0, Ab.useEffect)((() => {
          var bb;
          (zb.current = Tb, ba.current) && (Tb ? (lb.current = 0, ba.current.focus()) : (ba.current.blur(), null === (bb = Sb.current) || void 0 === bb || bb.call(Sb)))
        }), [Tb]),
        function(bb, ab) {
          (0, Ab.useLayoutEffect)((() => {
            if (!ab) return;
            Fb.b.hold();
            const Ub = bb.current.closest(".InGameHeaderAndChat"),
              Ab = window.visualViewport;
            let Mb = "";
            const Tb = () => {
              const bb = `${Ab.offsetTop+Ab.height}px`;
              bb !== Mb && (Mb = bb, Ub.style.setProperty("--keyboard-top", bb))
            };
            return Tb(), Ab.addEventListener("resize", Tb), Ab.addEventListener("scroll", Tb), () => {
              Ab.removeEventListener("resize", Tb), Ab.removeEventListener("scroll", Tb), Ub.style.removeProperty("--keyboard-top"), Fb.b.release()
            }
          }), [bb, ab])
        }(xb, Tb && ab), (0, hb.jsx)(hb.Fragment, {
          children: (0, hb.jsxs)("div", {
            ref: xb,
            className: jb()("Chat", {
              Chatting: Tb
            }),
            "data-camera-keeper": Tb ? "" : void 0,
            children: [(0, hb.jsx)("div", {
              ref: wb,
              className: jb()("ChatMessages", {
                HideScrollbar: !gb && !Tb,
                NoScrolling: !(0, vb.isMobile)() && Vb
              }),
              children: (0, hb.jsx)(pb.e, {
                messages: ib,
                reportedPlayers: ub
              })
            }), ab && !Tb && (0, hb.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": bb("general:chat"),
              ...(0, Wb.f)((() => {
                Xb(!0), aa.current.style.display = "flex", (0, vb.isIOS)() && ba.current.focus()
              }), "pointerup"),
              children: (0, hb.jsx)(kb.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, hb.jsxs)("div", {
              ref: aa,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Tb ? "flex" : "none")
              },
              children: [Kb && (0, hb.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: Kb.elementBgColor
                },
                onClick: bb => {
                  mb.b.selectNextChannel(), ba.current.focus()
                },
                children: (0, hb.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, hb.jsx)(Bb.c, {
                    text: Kb.elementContent
                  })
                })
              }), Kb && Ub && (0, hb.jsx)(rb, {}), (0, hb.jsx)("input", {
                className: "ChatInput",
                maxLength: Pb.Oc,
                ref: ba,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": bb("general:chat"),
                placeholder: Kb ? `${Kb.channelName} Chat${"touchOnly"===(0,Lb.b)()||Ub?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const ob = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35977: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => mb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(8343),
      Yb = Ub(22),
      Bb = Ub(2229),
      eb = Ub(3252),
      vb = Ub(1924),
      Lb = Ub(19),
      Pb = Ub(1794),
      Xb = Ub(35980),
      jb = Ub(2039),
      Rb = Ub(35988),
      kb = Ub(2439),
      yb = Ub(2408),
      Zb = Ub(2399),
      Db = Ub(3271),
      zb = Ub(2829),
      xb = Ub(1858),
      ib = Ub(1023);

    function fb(bb) {
      for (let Ub = bb.length - 1; Ub >= 0; Ub--) {
        const Ab = "string" === typeof(ab = bb[Ub]) ? ab : "str" in ab && "string" === typeof ab.str ? ab.str : "";
        if ("" !== Ab.trim()) return Ab
      }
      var ab;
      return ""
    }

    function mb(bb) {
      let {
        messages: ab,
        reportedPlayers: Ub
      } = bb;
      return (0, ib.jsx)(ib.Fragment, {
        children: ab.map((bb => (0, ib.jsx)(pb, {
          message: bb,
          reportedPlayers: Ub
        }, bb.clientChatMsgId)))
      })
    }
    const pb = (0, Ab.memo)((function(bb) {
      var ab;
      let {
        message: Ub,
        reportedPlayers: Mb
      } = bb;
      const mb = (0, Ab.useRef)(null),
        [pb] = (0, Ab.useState)(zb.i),
        {
          author: Nb
        } = Ub,
        Wb = null === Nb || void 0 === Nb ? void 0 : Nb.id,
        Hb = null !== (ab = null === Nb || void 0 === Nb ? void 0 : Nb.name) && void 0 !== ab ? ab : void 0,
        Ib = (0, vb.c)(Hb),
        db = null !== Nb && void 0 !== Nb && Nb.profileEffect ? jb.f[Nb.profileEffect] : void 0,
        Fb = null !== Nb && !Nb.local,
        hb = null === Nb && null !== Ub.serverChatMsgId,
        Gb = (0, xb.g)("hiddenPlayerNames", (bb => (0, Rb.g)(Fb, Hb, bb))),
        Qb = null === Ub.serverChatMsgId || null === Nb ? null : {
          text: fb(Ub.content),
          serverChatMsgId: Ub.serverChatMsgId,
          authorId: Nb.id
        },
        qb = hb || null !== Qb && !Mb.includes(Wb),
        ub = (0, eb.g)(Fb && null !== Hb && void 0 !== Hb ? Hb : null),
        rb = (0, Zb.i)(mb);
      (0, Ab.useEffect)((() => () => {
        Zb.e.closeIfOwner(mb)
      }), []);
      const Kb = () => {
          hb ? Yb.m.IR("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            fE: (0, Eb.b)(Ub.content),
            serverChatMsgId: Ub.serverChatMsgId
          }) : null !== Qb ? Yb.m.IR("OpenReportMenu", {
            playerEId: Wb,
            playerName: Hb,
            fE: Qb.text,
            serverChatMsgId: Qb.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        ob = void 0 === Hb ? [] : (0, Db.c)(ub, Hb, Qb);
      return (0, ib.jsxs)("div", {
        ref: mb,
        className: Tb()("MessageWrapper", {
          ChatMsgSelectWrapper: Wb,
          Still: pb
        }),
        onContextMenu: Gb ? bb => {
          (0, kb.h)(mb, bb, {
            ...(0, Rb.d)(Wb, Hb),
            showLocation: !1,
            status: null,
            extraActions: qb ? [{
              icon: "flag",
              text: "Report",
              onClick: Kb
            }] : [],
            friendRequestSource: "chat"
          }, Lb.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Gb ? bb => {
          (0, yb.c)(bb, (() => (0, Rb.d)(Wb, Hb).playerSocialPreview))
        } : void 0,
        children: [db && (0, ib.jsx)(db, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Fb || hb) && !rb && (0, ib.jsx)(Xb.b, {
          className: "ChatFloatingActions",
          triggerElementRef: mb,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Kb,
            show: qb
          }, ...ob, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: bb => {
              (0, Bb.p)(Hb, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: Gb && "blocked" !== ub
          }]
        }), (0, ib.jsx)(Pb.c, {
          text: Ub.content,
          friendBadgeFor: Ib ? Hb : void 0
        }, Ub.clientChatMsgId)]
      }, Ub.clientChatMsgId)
    }))
  },
  36013: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb,
      e: () => jb,
      h: () => Pb,
      k: () => Lb
    });
    var Ab = Ub(8906),
      Mb = Ub(36017),
      Tb = Ub(36023),
      Eb = Ub(8280),
      Yb = Ub(1345),
      Bb = Ub(52),
      eb = Ub(75),
      vb = Ub(1023);

    function Lb() {
      var bb;
      return (0, Yb.i)(Mb.c, (0, Mb.l)()), (0, vb.jsx)(vb.Fragment, {
        children: null === (bb = (0, Mb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Pb(bb) {
      var ab;
      let {
        show: Ub
      } = bb;
      (0, Yb.i)(Mb.c, (0, Mb.l)());
      const eb = null === (ab = (0, Mb.l)()) || void 0 === ab ? void 0 : ab.menu;
      return (0, Bb.useEffect)((() => {
        var bb;
        Ub || (null === eb || void 0 === eb || null === (bb = eb.onClose) || void 0 === bb || bb.call(eb), (0, Tb.p)())
      }), [Ub, eb]), (0, Bb.useEffect)((() => Ub ? (0, Eb.g)(Tb.v, Tb.i) : void 0), [Ub]), (0, vb.jsx)(Ab.d, {
        showing: Ub,
        globallyUniqueKey: "clientGameMenu",
        children: null === eb || void 0 === eb ? void 0 : eb.content
      })
    }

    function Xb(bb) {
      let {
        placement: ab = "bottom"
      } = bb;
      return (0, vb.jsx)("div", {
        id: `clientGameHud-${ab}`,
        style: {
          display: "contents"
        }
      })
    }

    function jb(bb) {
      let {
        children: ab,
        placement: Ub = "bottom"
      } = bb;
      const [Ab, Mb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        Mb(document.getElementById(`clientGameHud-${Ub}`))
      }), [Ub]), Ab ? (0, eb.createPortal)(ab, Ab) : null
    }
  },
  36220: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Lb,
      g: () => vb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1352),
      Yb = Ub(1023);
    const Bb = 200,
      eb = 160;

    function vb() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Lb(bb) {
      let {
        side: ab,
        defaultSize: Ub,
        covers: Mb,
        onClose: vb,
        children: Lb
      } = bb;
      const Pb = (0, Ab.useRef)(null),
        [Xb, jb] = (0, Ab.useState)(null),
        [Rb, kb] = (0, Ab.useState)(Ub);
      Rb !== Ub && (kb(Ub), jb(null));
      const yb = (0, Ab.useRef)(null),
        Zb = "top" === ab,
        Db = bb => Zb ? bb.clientY : bb.clientX,
        zb = () => {
          yb.current = null
        };
      return (0, Yb.jsxs)("div", {
        ref: Pb,
        className: Tb()("ResizableSidePanel", ab && `ResizableSidePanel-${ab}`, {
          Covers: "always" === Mb,
          CoversWhenNarrow: "narrow" === Mb,
          Dragged: null !== Xb
        }),
        style: {
          [Zb ? "height" : "width"]: null !== Xb && void 0 !== Xb ? Xb : Ub
        },
        children: [Lb, ab && (0, Yb.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": Zb ? "horizontal" : "vertical",
          onPointerDown: bb => {
            if (0 !== bb.button) return;
            bb.preventDefault();
            const ab = Pb.current,
              Ub = Array.from(ab.parentElement.children).reduce(((bb, Ub) => Ub !== ab && "0" !== getComputedStyle(Ub).flexGrow ? bb + (bb => Zb ? bb.clientHeight : bb.clientWidth)(Ub) : bb), 0),
              Ab = Zb ? ab.offsetHeight : ab.offsetWidth,
              Mb = Math.min(Bb, Ab),
              Tb = Math.max(Mb, Ab + Math.max(0, Ub - eb));
            yb.current = {
              start: Db(bb),
              startSize: Ab,
              minSize: Mb,
              maxSize: Tb
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const Ub = yb.current;
            if (!Ub) return;
            const Ab = "right" === ab ? Ub.start - bb.clientX : Db(bb) - Ub.start;
            jb(Math.min(Ub.maxSize, Math.max(Ub.minSize, Ub.startSize + Ab)))
          },
          onPointerUp: zb,
          onPointerCancel: zb,
          onLostPointerCapture: zb
        }), vb && (0, Yb.jsx)(Eb.k, {
          className: "ResizableSidePanelClose",
          onClick: vb
        })]
      })
    }
  },
  36242: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => mb,
      D: () => Mb,
      G: () => fb,
      c: () => Db,
      g: () => kb,
      i: () => jb,
      j: () => Xb,
      n: () => Zb,
      p: () => pb,
      q: () => zb,
      u: () => ib,
      w: () => xb
    });
    var Ab = Ub(52);
    const Mb = 5e3,
      Tb = 500,
      Eb = 3e3;
    let Yb = null,
      Bb = null,
      eb = null;
    const vb = new Set;

    function Lb(bb) {
      Yb = bb;
      for (const ab of vb) ab()
    }

    function Pb() {
      if (!Yb || void 0 !== Yb.endedAt) return;
      null !== Bb && (clearTimeout(Bb), Bb = null), Lb({
        ...Yb,
        endedAt: Date.now()
      });
      const bb = eb;
      eb = null, null === bb || void 0 === bb || bb()
    }

    function Xb(bb, ab) {
      let {
        submit: Ub,
        reopen: Ab
      } = ab;
      null !== Bb && clearTimeout(Bb), eb = Ab, Lb({
        ...bb,
        startedAt: Date.now(),
        errors: []
      }), Bb = setTimeout(Pb, Eb), Ub()
    }

    function jb() {
      Yb && void 0 === Yb.endedAt && void 0 === Yb.ranAt && (null !== Bb && clearTimeout(Bb), Lb({
        ...Yb,
        ranAt: Date.now()
      }), Bb = setTimeout(Pb, Mb))
    }
    const Rb = 3;

    function kb(bb) {
      if (!Yb || void 0 === Yb.ranAt || void 0 !== Yb.endedAt || Yb.errors.includes(bb) || Yb.errors.length >= Rb) return;
      const ab = 0 === Yb.errors.length;
      Lb({
        ...Yb,
        errors: [...Yb.errors, bb]
      }), ab && (null !== Bb && clearTimeout(Bb), Bb = setTimeout(Pb, Tb))
    }

    function yb(bb) {
      var ab;
      return (null === (ab = Yb) || void 0 === ab ? void 0 : ab.chatKey) === bb ? Yb : null
    }

    function Zb(bb) {
      const ab = yb(bb);
      return ab && void 0 !== ab.endedAt ? (Lb(null), ab) : null
    }

    function Db(bb) {
      var ab;
      (null === (ab = Yb) || void 0 === ab ? void 0 : ab.chatKey) === bb && (null !== Bb && (clearTimeout(Bb), Bb = null), eb = null, Lb(null))
    }
    const zb = "These changes from your last answer didn't go in. Make them again.";

    function xb(bb) {
      const ab = [...new Set(bb)].slice(0, Rb);
      return `Fix this in your change: when it ran, the world showed ${1===ab.length?"this error":"these errors"}: ${ab.join(" ")}`
    }

    function ib(bb) {
      return `Your change didn't go in, because the code wouldn't run at all: ${bb.join(" ")} Send the whole change again with that fixed.`
    }

    function fb(bb) {
      return `Fix this in your change: ${bb.join(" ")}`
    }

    function mb(bb) {
      var ab;
      if (void 0 === bb.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const Ub = Math.max(1, Math.round(((null !== (ab = bb.endedAt) && void 0 !== ab ? ab : bb.ranAt) - bb.ranAt) / 1e3)),
        Ab = `Your change ran in your world for ${Ub} ${1===Ub?"second":"seconds"}`;
      return 0 === bb.errors.length ? {
        title: "Tested: no errors",
        text: `${Ab} without an error.`
      } : {
        title: 1 === bb.errors.length ? "Tested: it showed an error" : `Tested: it showed ${bb.errors.length} errors`,
        text: `${Ab} and showed: ${bb.errors.join(" ")}`
      }
    }

    function pb(bb) {
      const [ab, Ub] = (0, Ab.useState)((() => yb(bb)));
      return (0, Ab.useEffect)((() => {
        const ab = () => {
          Ub(yb(bb))
        };
        return ab(), vb.add(ab), () => {
          vb.delete(ab)
        }
      }), [bb]), ab
    }
  },
  36247: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      d: () => Ab
    });
    const Ab = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Mb(bb, ab, Ub) {
      return {
        key: bb,
        label: `Code block at ${ab.join(", ")}`,
        codeBlock: !0,
        pos: ab,
        canChangePos: Ub
      }
    }
  },
  36240: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      f: () => Tb,
      j: () => Eb,
      l: () => Mb
    });
    const Ab = "code block",
      Mb = "World Code/";

    function Tb(bb) {
      return bb.trim().toLowerCase().startsWith(Mb.toLowerCase())
    }

    function Eb(bb) {
      return bb.trim().slice(Mb.length).replace(/^\.?\//, "")
    }
  },
  36201: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => Hb,
      C: () => Nb,
      F: () => Pb,
      I: () => hb,
      K: () => mb,
      O: () => pb,
      Q: () => Fb,
      d: () => jb,
      f: () => Bb,
      g: () => Rb,
      k: () => Wb,
      o: () => Yb,
      p: () => vb,
      t: () => Xb,
      w: () => kb,
      x: () => zb
    });
    var Ab = Ub(36195),
      Mb = Ub(36197);
    const Tb = "bloxd-world-code-directory-sync",
      Eb = "handles",
      Yb = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Bb(bb, ab) {
      return `${bb}::${ab}`
    }
    const eb = new Set(["node_modules", ".git"]);

    function vb() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Lb() {
      return new Promise(((bb, ab) => {
        const Ub = indexedDB.open(Tb, 1);
        Ub.onupgradeneeded = () => {
          const bb = Ub.result;
          bb.objectStoreNames.contains(Eb) || bb.createObjectStore(Eb)
        }, Ub.onsuccess = () => {
          bb(Ub.result)
        }, Ub.onerror = () => {
          var bb;
          ab(null !== (bb = Ub.error) && void 0 !== bb ? bb : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Pb(bb, ab) {
      const Ub = await Lb();
      try {
        await new Promise(((Ab, Mb) => {
          const Tb = Ub.transaction(Eb, "readwrite");
          Tb.objectStore(Eb).put(ab, bb), Tb.oncomplete = () => {
            Ab()
          }, Tb.onerror = () => {
            var bb;
            Mb(null !== (bb = Tb.error) && void 0 !== bb ? bb : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        Ub.close()
      }
    }
    async function Xb(bb) {
      const ab = await Lb();
      try {
        return await new Promise(((Ub, Ab) => {
          const Mb = ab.transaction(Eb, "readonly").objectStore(Eb).get(bb);
          Mb.onsuccess = () => {
            var bb;
            Ub(null !== (bb = Mb.result) && void 0 !== bb ? bb : null)
          }, Mb.onerror = () => {
            var bb;
            Ab(null !== (bb = Mb.error) && void 0 !== bb ? bb : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        ab.close()
      }
    }
    async function jb(bb) {
      const ab = await Lb();
      try {
        await new Promise(((Ub, Ab) => {
          const Mb = ab.transaction(Eb, "readwrite");
          Mb.objectStore(Eb).delete(bb), Mb.oncomplete = () => {
            Ub()
          }, Mb.onerror = () => {
            var bb;
            Ab(null !== (bb = Mb.error) && void 0 !== bb ? bb : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        ab.close()
      }
    }
    async function Rb(bb) {
      const ab = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await bb.queryPermission(ab) || "granted" === await bb.requestPermission(ab)
    }
    async function kb(bb) {
      if (!vb()) return null;
      try {
        const ab = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Pb(bb, ab), ab
      } catch (ab) {
        if (function(bb) {
            return bb instanceof DOMException && "AbortError" === bb.name
          }(ab)) return null;
        throw ab
      }
    }

    function yb(bb) {
      return bb.startsWith(".") || eb.has(bb)
    }

    function Zb(bb) {
      if (!bb) return !0;
      const ab = bb.split("/");
      for (const Ub of ab)
        if ("" === Ub || "." === Ub || ".." === Ub) return !1;
      return !0
    }
    async function Db(bb, ab, Ub) {
      for await (const [Tb, Eb] of bb.entries()) {
        if ("directory" === Eb.kind) {
          if (yb(Tb)) continue;
          const bb = ab ? `${ab}/${Tb}` : Tb;
          if (!Zb(bb)) continue;
          await Db(Eb, bb, Ub);
          continue
        }
        const bb = ab ? `${ab}/${Tb}` : Tb;
        if (!(0, Ab.s)(bb) && !(0, Mb.e)(bb)) continue;
        const Yb = await Eb.getFile();
        Ub[bb] = (0, Mb.e)(bb) ? await Ib(Yb) : await Yb.text()
      }
    }
    async function zb(bb) {
      const ab = {};
      return await Db(bb, "", ab), ab
    }

    function xb(bb) {
      return !(!bb || bb !== bb.trim() || bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) && Zb(bb)
    }
    async function ib(bb, ab, Ub) {
      const Ab = ab.split("/"),
        Mb = Ab[Ab.length - 1];
      let Tb = bb;
      for (let Eb = 0; Eb < Ab.length - 1; Eb++) Tb = await Tb.getDirectoryHandle(Ab[Eb], {
        create: Ub
      });
      return {
        dir: Tb,
        fileName: Mb
      }
    }
    async function fb(bb, ab, Ub) {
      if (!xb(ab)) throw new Error(`Refusing to write unsafe path: ${ab}`);
      const {
        dir: Ab,
        fileName: Mb
      } = await ib(bb, ab, !0), Tb = await Ab.getFileHandle(Mb, {
        create: !0
      }), Eb = await Tb.createWritable();
      await Eb.write(Ub), await Eb.close()
    }
    async function mb(bb, ab, Ub) {
      const Ab = await async function(bb, ab) {
        if (!xb(ab)) return null;
        try {
          const {
            dir: Ub,
            fileName: Ab
          } = await ib(bb, ab, !1), Mb = await Ub.getFileHandle(Ab), Tb = await Mb.getFile();
          return await Tb.text()
        } catch (Ub) {
          if (Ub instanceof DOMException && ("NotFoundError" === Ub.name || "NotAllowedError" === Ub.name)) return null;
          throw Ub
        }
      }(bb, ab);
      Ab !== Ub && await fb(bb, ab, Ub)
    }
    async function pb(bb, ab, Ub) {
      if (!(0, Ab.s)(ab) && !(0, Mb.e)(ab)) throw new Error(`Refusing to write non-allowlisted path: ${ab}`);
      if ((0, Mb.e)(ab)) {
        if (await db(bb, ab) === Yb) throw new Error(`Move the binary schematic ${ab} outside the linked folder before syncing its placeholder`)
      }
      await fb(bb, ab, Ub)
    }
    async function Nb(bb, ab) {
      if (!xb(ab)) throw new Error(`Refusing to remove unsafe path: ${ab}`);
      try {
        const {
          dir: Ub,
          fileName: Ab
        } = await ib(bb, ab, !1);
        await Ub.removeEntry(Ab)
      } catch (Ub) {
        if (Ub instanceof DOMException && ("NotFoundError" === Ub.name || "NotAllowedError" === Ub.name)) return;
        throw Ub
      }
    }
    async function Wb(bb, ab) {
      if (!xb(ab)) return null;
      try {
        const Ub = ab.split("/");
        let Ab = bb;
        for (const bb of Ub) Ab = await Ab.getDirectoryHandle(bb);
        return Ab
      } catch (Ub) {
        if (Ub instanceof DOMException && ("NotFoundError" === Ub.name || "NotAllowedError" === Ub.name)) return null;
        throw Ub
      }
    }
    async function Hb(bb, ab) {
      if ((0, Ab.s)(ab) || (0, Mb.e)(ab)) {
        if ((0, Mb.e)(ab)) {
          if (await db(bb, ab) === Yb) throw new Error(`Refusing to remove a binary schematic: ${ab}`)
        }
        await Nb(bb, ab)
      }
    }
    async function Ib(bb) {
      if (bb.size > 64) return Yb;
      const ab = await bb.text();
      return Array.from(ab).some((bb => {
        const ab = bb.charCodeAt(0);
        return ab < 9 || ab > 13 && ab < 32 || 65533 === ab
      })) ? Yb : ab
    }
    async function db(bb, ab) {
      try {
        const {
          dir: Ub,
          fileName: Ab
        } = await ib(bb, ab, !1);
        return await Ib(await (await Ub.getFileHandle(Ab)).getFile())
      } catch (Ub) {
        if (Ub instanceof DOMException && "NotFoundError" === Ub.name) return null;
        throw Ub
      }
    }
    async function Fb(bb, ab) {
      const Ub = await zb(bb);
      for (const Ab of Object.keys(Ub)) Ab in ab || (0, Mb.e)(Ab) || await Hb(bb, Ab);
      for (const [Tb, Eb] of Object.entries(ab))((0, Ab.s)(Tb) || (0, Mb.e)(Tb)) && await pb(bb, Tb, Eb)
    }

    function hb(bb, ab) {
      var Ub, Ab;
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Tb = null !== (Ub = Mb.debounceMs) && void 0 !== Ub ? Ub : 300,
        Eb = null !== (Ab = Mb.pollMs) && void 0 !== Ab ? Ab : 1e3;
      let Yb = !1,
        Bb = null,
        eb = null,
        vb = null;
      const Lb = () => {
          Yb || (Bb && clearTimeout(Bb), Bb = setTimeout((() => {
            Bb = null, Pb()
          }), Tb))
        },
        Pb = async () => {
          if (!Yb) try {
            if (!await Rb(bb, "readwrite")) return;
            const Ub = await zb(bb);
            Yb || ab(Ub)
          } catch (Ub) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", Ub)
          }
        };
      Pb();
      const Xb = window.FileSystemObserver;
      if (Xb) try {
        vb = new Xb((() => {
          Lb()
        })), vb.observe(bb, {
          recursive: !0
        })
      } catch (jb) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", jb), vb = null
      }
      return vb || (eb = setInterval((() => {
        Lb()
      }), Eb)), () => {
        Yb = !0, Bb && clearTimeout(Bb), eb && clearInterval(eb), vb && vb.disconnect()
      }
    }
  },
  4516: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => kb,
      f: () => yb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(1134),
      Yb = Ub(4522),
      Bb = Ub(1794),
      eb = Ub(2268),
      vb = Ub(4531),
      Lb = Ub(1023);
    const Pb = new WeakMap;
    let Xb = 0;

    function jb(bb) {
      let ab = Pb.get(bb);
      return void 0 === ab && (ab = Xb++, Pb.set(bb, ab)), ab
    }

    function Rb(bb) {
      let {
        piece: ab
      } = bb;
      return "space" === ab.kind ? (0, Lb.jsx)(Lb.Fragment, {
        children: ab.text
      }) : (0, Lb.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ab.delayMs}ms`
        },
        children: (0, Lb.jsx)(Yb.c, {
          text: "icon" === ab.kind ? `[[${ab.icon}]]` : ab.text
        })
      })
    }

    function kb(bb) {
      let {
        display: ab
      } = bb;
      const {
        selectedLanguage: Ub
      } = (0, Eb.A)(), Ab = (0, Tb.useMemo)((() => (0, vb.e)((0, vb.g)(ab).plan.pieces)), [ab, Ub.code]);
      return (0, Lb.jsxs)("div", {
        className: Mb()("Dialogue", {
          DialogueAnimateIn: !1 !== ab.animateIn
        }),
        children: [ab.speakerName && (0, Lb.jsx)(Bb.c, {
          text: ab.speakerName,
          className: "DialogueSpeaker"
        }), (0, Lb.jsx)("p", {
          className: "DialogueLine",
          children: Ab.map(((bb, ab) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Lb.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, ab) => (0, Lb.jsx)(Rb, {
              piece: bb
            }, ab)))
          }, ab)))
        })]
      })
    }
    const yb = (0, Tb.memo)((function() {
      const bb = (0, eb.h)("dialogue");
      return (0, Lb.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Lb.jsx)(kb, {
          display: bb
        }, jb(bb))
      })
    }))
  },
  36083: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Xb,
      f: () => jb
    });
    var Ab = Ub(52),
      Mb = Ub(2708),
      Tb = Ub(1345),
      Eb = Ub(1858),
      Yb = Ub(36038),
      Bb = Ub(591),
      eb = Ub(984),
      vb = Ub.n(eb),
      Lb = Ub(1023);
    const Pb = {},
      Xb = (0, Ab.memo)((function() {
        const bb = (0, Mb.d)();
        return (0, Tb.f)("damagedByOtherPlayer", (ab => {
          let {
            nU: Ub,
            direction: Ab
          } = ab;
          const Mb = Ub || "nonDirectional";
          if (Pb[Mb]) {
            const ab = Pb[Mb];
            clearTimeout(ab.timeout), ab.direction = Ab, ab.timeout = setTimeout((() => {
              delete Pb[Mb], bb()
            }), 800)
          } else Pb[Mb] = {
            direction: Ab,
            JI: null,
            timeout: setTimeout((() => {
              delete Pb[Mb], bb()
            }), 800)
          };
          bb()
        })), (0, Eb.c)("kill", (ab => {
          let {
            killer: Ub,
            victim: Ab
          } = ab;
          const Mb = Ab.id;
          Ub.local && Mb && Mb in Pb && (clearTimeout(Pb[Mb].timeout), delete Pb[Mb], bb())
        })), (0, Ab.useEffect)((() => {
          const bb = (0, Yb.g)("turnDamageIndicators", jb);
          return () => {
            bb();
            for (const bb in Pb) clearTimeout(Pb[bb].timeout), delete Pb[bb]
          }
        }), []), (0, Lb.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Pb).map((bb => {
            let [ab, Ub] = bb;
            const Ab = (0, Bb.I)(Ub.direction);
            return (0, Lb.jsx)("div", {
              ref: bb => {
                Pb[ab] && (Pb[ab].JI = bb)
              },
              className: vb()("DamageIndicator", {
                DamageIndicatorFullCircle: Ab
              })
            }, ab)
          }))
        })
      }));

    function jb(bb) {
      for (const ab in Pb) {
        const {
          direction: Ub,
          JI: Ab
        } = Pb[ab];
        if ((0, Bb.I)(Ub)) continue;
        const Mb = Ub - bb;
        Ab.style.rotate = `${Mb}rad`
      }
    }
  },
  35980: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => kb
    });
    var Ab = Ub(52),
      Mb = Ub(75),
      Tb = Ub(1134),
      Eb = Ub(984),
      Yb = Ub.n(Eb),
      Bb = Ub(1639),
      eb = Ub(990),
      vb = Ub(1213),
      Lb = Ub(1384),
      Pb = Ub(1578),
      Xb = Ub(1379),
      jb = Ub(1023);
    const Rb = 14;

    function kb(bb) {
      let {
        className: ab,
        triggerElementRef: Ub,
        options: Eb
      } = bb;
      const {
        t: kb
      } = (0, Tb.A)(), [yb, Zb] = (0, Ab.useState)(!1), [Db, zb] = (0, Ab.useState)({
        x: 0,
        y: 0
      }), xb = (0, Ab.useRef)(null);
      (0, Ab.useEffect)((() => {
        let bb = null;
        const ab = ab => {
            bb = {
              x: ab.clientX,
              y: ab.clientY
            }
          },
          Ab = ab => {
            if (null === bb || !(0, Xb.c)(bb, ab)) return;
            bb = null;
            const Ub = Rb * (0, Bb.getRemInPx)();
            zb({
              x: Math.min(ab.clientX, window.innerWidth - Ub - 5),
              y: ab.clientY
            }), Zb((bb => !bb))
          },
          Mb = bb => {
            var ab;
            null !== (ab = xb.current) && void 0 !== ab && ab.contains(bb.relatedTarget) || Zb(!1)
          },
          Tb = Ub.current;
        return Tb.addEventListener("pointerdown", ab), Tb.addEventListener("pointerup", Ab), Tb.addEventListener("mouseleave", Mb), () => {
          Tb.removeEventListener("pointerdown", ab), Tb.removeEventListener("pointerup", Ab), Tb.removeEventListener("mouseleave", Mb)
        }
      }), [Ub]), (0, Ab.useEffect)((() => {
        if (yb) return (0, Pb.e)("pointerdown", (bb => {
          !xb.current || xb.current.contains(bb.target) || Ub.current.contains(bb.target) || Zb(!1)
        }))
      }), [yb, Ub]), (0, Ab.useLayoutEffect)((() => {
        if (!yb || !xb.current) return;
        const bb = xb.current.getBoundingClientRect().height,
          ab = Math.max(5, window.innerHeight - bb - 5);
        Db.y > ab && zb({
          x: Db.x,
          y: ab
        })
      }), [yb, Db]), (0, vb.r)("popup", xb, (() => {
        Zb(!1)
      }), yb);
      const ib = Eb.filter((bb => !1 !== bb.show));
      return yb && 0 !== ib.length ? (0, Mb.createPortal)((0, jb.jsx)("div", {
        ref: xb,
        className: Yb()("FloatingActions", {
          [ab]: ab
        }),
        style: {
          width: `${Rb}rem`,
          top: Db.y,
          left: Db.x
        },
        children: ib.map((bb => {
          let {
            icon: ab,
            text: Ub,
            onPointerDown: Ab,
            analyticsClick: Mb
          } = bb;
          return (0, jb.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: bb => {
              void 0 !== Mb && (0, Lb.reportAnalyticsClick)(Mb), Ab(bb), Zb(!1), bb.stopPropagation()
            },
            children: [(0, jb.jsx)(eb.e, {
              name: ab
            }), (0, jb.jsx)("div", {
              children: kb(Ub)
            })]
          }, Ub)
        }))
      }), function() {
        var bb;
        return null !== (bb = document.querySelector(".WholeAppWrapperInner")) && void 0 !== bb ? bb : document.body
      }()) : null
    }
  },
  36093: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => XE
    });
    var Ab = Ub(36013),
      Mb = Ub(52),
      Tb = Ub(1961),
      Eb = Ub(4211),
      Yb = Ub(4218),
      Bb = Ub(2268),
      eb = Ub(1824),
      vb = Ub(1023);

    function Lb(bb) {
      let {
        className: ab,
        style: Ub,
        vw: Ab,
        maxPx: Mb,
        children: Tb
      } = bb;
      console.assert("number" === typeof Ab && "number" === typeof Mb, "vw and maxPx passed to Text must be numbers");
      const Eb = window.innerWidth * (Ab / 100) > Mb ? `${Mb}px` : `${Ab}vw`;
      return (0, vb.jsx)("div", {
        className: ab,
        style: {
          ...Ub,
          fontSize: Eb
        },
        children: Tb
      })
    }
    var Pb = Ub(36096),
      Xb = Ub(1352),
      jb = Ub(22),
      Rb = Ub(1844),
      kb = Ub(990);

    function yb(bb) {
      let {
        tasks: ab,
        lastDisplayedTasks: Ub
      } = bb;
      return (0, vb.jsx)(vb.Fragment, {
        children: Object.keys(ab).map((bb => (0, vb.jsx)(Zb, {
          task: ab[bb],
          lastDisplayedAs: Ub[bb]
        }, ab[bb].text)))
      })
    }

    function Zb(bb) {
      let {
        task: ab,
        lastDisplayedAs: Ub
      } = bb;
      const [Ab, Tb] = (0, Mb.useState)(null !== Ub && void 0 !== Ub && Ub.progress ? Ub.progress / ab.goal : 0), [Eb, Yb] = (0, Mb.useState)(!1), [Bb, eb] = (0, Mb.useState)(ab.claimed || !1);
      return (0, Mb.useEffect)((() => {
        Tb(ab.progress / ab.goal)
      }), [ab.progress, ab.goal]), Bb ? null : (0, vb.jsxs)("div", {
        className: "Task",
        children: [(0, vb.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, vb.jsx)(Lb, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: ab.text
          })
        }), ab.progress < ab.goal ? (0, vb.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Ab ? (0, vb.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Ab + "%"
            }
          }) : null, (0, vb.jsx)("div", {
            className: "TaskProgressText",
            children: `${ab.progress}/${ab.goal}`
          })]
        }) : (0, vb.jsx)(Xb.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            Yb(!0)
          },
          children: (0, vb.jsx)(Lb, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Eb ? (0, vb.jsx)(Db, {
          task: ab,
          close: () => {
            ab.claimed = !0, eb(!0), Yb(!1)
          }
        }) : null]
      })
    }

    function Db(bb) {
      let {
        task: ab,
        close: Ub
      } = bb;
      const [Ab, Tb] = (0, Mb.useState)({}), [Eb, Yb] = (0, Mb.useState)("closed");
      (0, Mb.useEffect)((() => {
        let bb;
        return "animStart" === Eb && (bb = setTimeout((() => {
          Yb("animEnd")
        }), 700)), () => {
          clearTimeout(bb)
        }
      }), [Eb]), (0, Pb.e)((() => {
        eb.gameBridge.send("completeTask", ab.text)
      }));
      const Lb = (0, Bb.h)("currencyAmounts");
      return (0, vb.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Eb)
            if (0 === ab.rewards.length) Ub(), eb.gameBridge.send("completeTask", ab.text);
            else {
              const bb = {
                ...Rb.e.get("currencyAmounts")
              };
              for (const ab in Ab) bb[ab] = {
                ...bb[ab],
                amount: bb[ab].amount + Ab[ab]
              };
              Rb.e.apply({
                currencyAmounts: bb
              }), Yb("closed")
            }
          else "closed" === Eb && (Tb(ab.rewards.pop()), Yb("animStart"))
        },
        children: [(0, vb.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Eb ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Eb?"open":"closed"}.png`
        }), (0, vb.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Eb ? Object.keys(Ab).map((bb => {
            const ab = null === Lb || void 0 === Lb ? void 0 : Lb[bb];
            return !ab || ab.hidden ? null : (0, vb.jsxs)("div", {
              className: "Reward",
              children: [(0, vb.jsx)(kb.e, {
                name: ab.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: ab.iconColour
                }
              }), (0, vb.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Eb ? 0 : Ab[bb]
              })]
            }, bb)
          })) : null
        }), "animStart" === Eb ? (0, vb.jsx)(zb, {}) : null, (0, vb.jsx)("div", {
          className: "ChestsLeft",
          children: ab.rewards.length
        })]
      })
    }

    function zb() {
      const [bb, ab] = (0, Mb.useState)(0);
      (0, Mb.useEffect)((() => {
        ab(1)
      }), []);
      return (0, vb.jsx)(vb.Fragment, {
        children: Array.from({
          length: 40
        }).map(((ab, Ub) => (0, vb.jsx)(kb.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * bb * Math.cos(Ub / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * bb * Math.sin(Ub / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === bb ? 1 : 0
          }
        }, Ub)))
      })
    }
    jb.m.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const bb = new Image,
          ab = new Image;
        bb.src = "/textures/miscImages/Treasure Chest open.png", ab.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var xb = Ub(2851),
      ib = Ub(1060),
      fb = Ub(1794),
      mb = Ub(1345),
      pb = Ub(325),
      Nb = Ub(1858),
      Wb = Ub(1254);

    function Hb(bb) {
      var ab, Ub;
      let {
        byId: Ab,
        localId: Mb
      } = bb;
      return null === Mb ? null : null !== (ab = null === (Ub = Ab[Mb]) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== ab ? ab : null
    }

    function Ib(bb) {
      let {
        lbStats: ab,
        storedState: Ub = {}
      } = bb;
      const {
        userContext: Ab
      } = (0, ib.c)(), Tb = (0, Nb.g)("players", Hb), [Eb, Yb] = (0, Mb.useState)(Ub.selectedCat || (null === ab || void 0 === ab ? void 0 : ab[0]) || null), [Bb, Lb] = (0, Mb.useState)(Ub.selectedTimeframe || "Today"), [Pb, Xb] = (0, Mb.useState)(null);
      (0, Mb.useEffect)((() => {
        null === Eb && null !== ab && ab.length > 0 && Yb(ab[0])
      }), [ab, Eb]);
      const [jb, Rb] = (0, Mb.useState)(Ub.seeingTop || !1), [kb, yb] = (0, Mb.useState)(!1), Zb = (0, Mb.useCallback)((() => {
        null !== Eb && null !== Bb && (eb.gameBridge.send("requestLeaderboard", {
          category: Eb.value,
          timeframe: Bb,
          seeTop: jb
        }), zb(!0), hb && Gb(null))
      }), [Eb, Bb, Ub, jb]);
      (0, Mb.useEffect)((() => {
        Zb(), Ub.selectedCat = Eb, Ub.selectedTimeframe = Bb, Ub.seeingTop = jb
      }), [Eb, Bb, Ub, jb, Zb]), (0, Mb.useEffect)((() => {
        if ((null === Pb || void 0 === Pb ? void 0 : Pb.length) > 0)
          if (jb) jb && yb(null === Ib(Pb));
          else {
            for (const bb of Pb)
              if (1 === bb.place) return void yb(!1);
            yb(!0)
          }
      }), [Pb, jb]), (0, mb.f)("leaderboardResponse", (bb => {
        let {
          category: Ub,
          timeframe: Ab,
          data: Mb
        } = bb;
        for (let Tb = 0; Tb < ab; Tb++)
          if (ab[Tb].value === Ub) {
            Yb(ab[Tb]);
            break
          } Lb(Ab), Xb(Mb), zb(!1)
      }));
      const [Db, zb] = (0, Mb.useState)(!0);

      function Ib(bb) {
        const ab = Hb(eb.gameBridge.latest("players"));
        for (let Ub = 0; Ub < bb.length; Ub++)
          if (bb[Ub].name === ab) return bb[Ub].place;
        return null
      }
      const [db, Fb] = (0, Mb.useState)(!1), [hb, Gb] = (0, Mb.useState)(null);
      (0, Mb.useEffect)((() => {
        if (Pb && !db) {
          const bb = Ib(Pb);
          bb < (Ub.lastSeenPlayerPlace || 0) && Gb(Ub.lastSeenPlayerPlace - bb), Fb(!0)
        }
      }), [Pb, Ub, db]), (0, Mb.useEffect)((() => () => {
        Pb && (Ub.lastSeenPlayerPlace = Ib(Pb))
      }), [Pb, Ub]);
      const Qb = (0, Mb.useRef)(null),
        [qb, ub] = (0, Mb.useState)(void 0);
      return (0, Mb.useEffect)((() => {
        var bb, ab;
        qb !== (null === (bb = Qb.current) || void 0 === bb ? void 0 : bb.offsetHeight) && ub(null === (ab = Qb.current) || void 0 === ab ? void 0 : ab.offsetHeight)
      })), Ab.isLoggedIn() ? (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, vb.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, vb.jsx)(xb.c, {
              options: ab.map((bb => ({
                label: bb.label,
                value: bb.value
              }))),
              value: Eb,
              onChange: bb => {
                Yb(bb)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, vb.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, vb.jsx)(xb.c, {
              options: pb.xc.map((bb => ({
                value: bb,
                label: bb,
                className: "LBDropdownMenuItem"
              }))),
              value: Bb,
              onChange: bb => {
                Lb(bb.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), kb ? (0, vb.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Rb(!jb)
            },
            children: jb ? "See Yourself" : "See Top"
          }) : null]
        }), (0, vb.jsx)("div", {
          className: "LBTableWrapper",
          children: Db ? (0, vb.jsx)("div", {
            className: "LoaderContainer",
            children: (0, vb.jsx)(Wb.b, {})
          }) : null === hb ? (0, vb.jsx)(vb.Fragment, {
            children: (0, vb.jsxs)("table", {
              className: "LBTable",
              children: [(0, vb.jsx)("thead", {
                className: "LBTableTHead",
                ref: Qb,
                children: (0, vb.jsxs)("tr", {
                  children: [(0, vb.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, vb.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, vb.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Eb.label.toUpperCase()
                  })]
                })
              }), (0, vb.jsx)("tbody", {
                children: Pb.map((bb => (0, vb.jsxs)("tr", {
                  className: "LBTableTR " + (bb.name === Tb ? "LBTableTRYou" : ""),
                  children: [(0, vb.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${bb.place}`
                  }), (0, vb.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, vb.jsx)(fb.c, {
                      text: [{
                        entityName: bb.name
                      }]
                    })
                  }), (0, vb.jsx)("td", {
                    className: "LBTableTD",
                    children: bb.stat
                  })]
                }, bb.name)))
              })]
            })
          }) : (0, vb.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Gb(null)
            },
            children: (0, vb.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, vb.jsx)("div", {
                className: "TriangleUp"
              }), (0, vb.jsx)("div", {
                className: "LBIncreaseText",
                children: `${hb} Place${hb>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, vb.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, vb.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, vb.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var db = Ub(1055),
      Fb = Ub(101),
      hb = Ub(31),
      Gb = Ub(3090);
    const Qb = (0, Mb.memo)((function(bb) {
      let {
        show: ab,
        onClose: Ub
      } = bb;
      (0, db.e)();
      const Ab = (0, Bb.h)("_tasks"),
        Tb = (0, Bb.h)("_availableLeaderboards"),
        [eb, Lb] = (0, Mb.useState)({});
      Ab && Object.keys(Ab).length > 0 && 0 === Object.keys(eb).length && Lb(Ab);
      const [Pb] = (0, Mb.useState)({
        tasks: {},
        leaderboard: {}
      }), Xb = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Ab && Object.keys(Ab).length > 0,
          content: (0, vb.jsx)(yb, {
            tasks: Ab,
            lastDisplayedTasks: eb
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Tb || void 0 === Tb ? void 0 : Tb.length) > 0,
          content: (0, vb.jsx)(Ib, {
            lbStats: Tb,
            storedState: Pb.leaderboard
          })
        }
      };

      function jb() {
        for (const bb in Xb)
          if (Xb[bb].getIsDefined()) return bb;
        return null
      }
      const [Rb, kb] = (0, Mb.useState)(jb());

      function Zb() {
        Lb({
          ...Ab
        }), Ub()
      }(0, Mb.useEffect)((() => {
        Rb || kb(jb())
      }), [jb()]), (0, Yb.c)(!0, Rb && ab), (0, Mb.useEffect)((() => {
        ab && !Rb && (console.log("CLOSE"), Zb())
      }), [ab, Rb]);
      const [Db, zb] = (0, Mb.useState)(!1);
      return (0, Mb.useEffect)((() => {
        ab && Rb && !Db && zb(!0)
      }), [ab, Db, Rb]), (0, Mb.useEffect)((() => {
        !Db && Ab && "tasks" !== Rb && kb("tasks")
      }), [Db, Ab, Rb]), (0, vb.jsx)(vb.Fragment, {
        children: Rb ? (0, vb.jsx)(Gb.d, {
          className: "RetentionFeaturesWrapper",
          show: ab,
          children: (0, vb.jsxs)(Eb.d, {
            close: Zb,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, vb.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, vb.jsx)(ub, {}), (0, vb.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, vb.jsx)(qb, {
                  setCategory: kb,
                  menuCategories: Xb,
                  selectedCat: Rb
                }), (0, vb.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Xb[Rb].content
                })]
              })]
            }), (0, vb.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Fb.featureFlags.useDiscord && (0, vb.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, vb.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, vb.jsx)(rb, {
                    tasks: Ab
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function qb(bb) {
      let {
        selectedCat: ab,
        setCategory: Ub,
        menuCategories: Ab
      } = bb;
      return (0, vb.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Ab).map((bb => Ab[bb].getIsDefined() ? (0, vb.jsx)("div", {
          className: "MenuHeaderCategory " + (bb === ab ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            Ub(bb)
          },
          children: Ab[bb].Title
        }, bb) : null))
      })
    }

    function ub() {
      const bb = (0, Bb.h)("currencyAmounts");
      return (0, vb.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== bb && void 0 !== bb ? bb : {}).map((ab => {
          const Ub = bb[ab];
          return Ub.hidden ? null : (0, vb.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, vb.jsx)(kb.e, {
              name: Ub.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: Ub.iconColour
              }
            }), (0, vb.jsx)("div", {
              className: "UiCurrencyAmount",
              children: Ub.amount
            })]
          }, ab)
        }))
      })
    }

    function rb(bb) {
      let {
        tasks: ab
      } = bb;
      return (0, vb.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, vb.jsx)(kb.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            hb.f.setItem("DiscordPressed", !0), eb.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in ab && jb.m.IR("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, vb.jsx)(Tb.d, {})]
      })
    }
    var Kb = Ub(19),
      ob = Ub(1548),
      lb = Ub(35967),
      tb = Ub(8802),
      wb = Ub(4317),
      sb = Ub(166),
      gb = Ub(1150),
      Cb = Ub(1268),
      Vb = Ub(2453),
      Ob = Ub(1134),
      cb = Ub(1552),
      Jb = Ub(2238),
      nb = Ub(2229),
      Sb = Ub(1738),
      ba = Ub(1934),
      aa = Ub(1203),
      Ua = Ub(1384),
      Aa = Ub(4269);

    function Ma(bb) {
      const ab = {
        lobbyName: bb,
        answer: null,
        response: Aa.c.getSocialSettings(bb)
      };
      return ab.response.then((bb => {
        ab.answer = bb
      })), ab
    }
    const Ta = new Map;

    function Ea(bb) {
      const [ab] = (0, Mb.useState)((() => function(bb) {
        var ab;
        const Ub = null !== (ab = Ta.get(bb)) && void 0 !== ab ? ab : null;
        return null !== Ub && void 0 !== Ub && Ub.answer && "error" in Ub.answer ? null : Ub
      }(bb))), [Ub, Ab] = (0, Mb.useState)((() => null !== ab && void 0 !== ab && ab.answer && "settings" in ab.answer ? ab.answer.settings : null)), [Tb, Eb] = (0, Mb.useState)(!0), [Yb, Bb] = (0, Mb.useState)(null !== Ub), eb = (0, Mb.useRef)(Ub);
      eb.current = Ub;
      const vb = (0, Mb.useRef)(0),
        Lb = (0, Mb.useRef)(0),
        Pb = (0, Mb.useRef)(!1),
        Xb = (0, Mb.useRef)(!0),
        jb = (0, Mb.useCallback)((async ab => {
          const Ub = ++vb.current,
            Mb = await (null !== ab && void 0 !== ab ? ab : Aa.c.getSocialSettings(bb));
          Xb.current && Ub === vb.current && (Bb(!0), Eb(!1), "error" in Mb || Ab(Mb.settings))
        }), [bb]),
        Rb = (0, Mb.useCallback)((() => {
          Eb(!0), jb()
        }), [jb]);
      (0, Mb.useEffect)((() => (Xb.current = !0, Ta.delete(bb), Eb(!0), jb(null === ab || void 0 === ab ? void 0 : ab.response), () => {
        Xb.current = !1
      })), [jb, bb, ab]);
      const kb = bb => {
        vb.current++, Eb(!1), eb.current = bb, Ab(bb)
      };
      return {
        settings: Ub,
        loading: Tb,
        answered: Yb,
        retry: Rb,
        change: async function(ab, Ub) {
          let {
            quiet: Ab = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Mb = eb.current;
          if (null === Mb) return !1;
          kb(Ub(Mb)), Lb.current > 0 && (Pb.current = !0), Lb.current++;
          const Tb = await Aa.c.setSocialSettings(bb, ab);
          Lb.current--;
          const Eb = !("error" in Tb);
          if (!Xb.current) return Eb;
          if (Ab);
          else if ("error" in Tb) Sb.f.showMessage({
            translationKey: Tb.error
          });
          else
            for (const bb of Tb.notFound) Sb.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: bb
              }
            });
          if (Lb.current > 0) return Eb;
          const Yb = Pb.current;
          return Pb.current = !1, !Yb && "settings" in Tb ? kb(Tb.settings) : (Yb || kb(Mb), jb()), Eb
        }
      }
    }

    function Ya(bb, ab) {
      const Ub = ab.toLowerCase();
      for (const Ab of bb)
        if (Ab.toLowerCase() === Ub) return !0;
      return !1
    }

    function Ba(bb) {
      if (null === bb) return !0;
      const {
        visibility: ab
      } = bb;
      return "public" === ab || "unlisted" === ab || "whitelist" === ab && bb.canManage
    }

    function ea(bb, ab, Ub) {
      if (Ub) {
        const Ub = ab.filter((ab => !Ya(bb.whitelist, ab)));
        return {
          ...bb,
          whitelist: [...bb.whitelist, ...Ub]
        }
      }
      return {
        ...bb,
        whitelist: bb.whitelist.filter((bb => !Ya(ab, bb)))
      }
    }
    var va = Ub(2469);

    function La(bb) {
      let {
        worldCode: ab,
        message: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Ob.A)(), {
        isTouchScreen: Tb
      } = (0, Kb.n)(["isTouchScreen"]), Eb = Fb.featureFlags.canUseInviteLinks, Yb = (0, tb.h)(Eb && null === Ub), [Bb, eb] = (0, va.k)(), Lb = (0, Mb.useRef)(null);
      if (null !== Ub) return (0, vb.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, vb.jsx)(kb.e, {
          name: "lock"
        }), (0, vb.jsx)("span", {
          children: Ub
        })]
      });
      const Pb = Eb ? Yb : ab,
        jb = Tb && Eb && (0, va.d)();
      return (0, vb.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Eb && (0, vb.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ab("worldSocial:worldCode")
        }), (0, vb.jsx)("input", {
          ref: Lb,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Pb && void 0 !== Pb ? Pb : "",
          "aria-label": Ab(Eb ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, vb.jsxs)(Xb.g, {
          className: "WorldSocialCopy",
          disabled: null === Pb,
          onClick: () => {
            null !== Pb && (0, va.h)(Pb, {
              useShareSheet: jb,
              onOutcome: bb => {
                if ((0, Ua.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== bb || Eb ? bb : "code"
                  }), "copied" === bb) eb();
                else if ("failed" === bb) {
                  var ab;
                  null === (ab = Lb.current) || void 0 === ab || ab.focus(), Sb.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, vb.jsx)(kb.e, {
            name: Bb ? "check" : jb ? "up-from-bracket" : "copy"
          }), " ", Ab(Bb ? "general:copied" : jb ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var Pa = Ub(984),
      Xa = Ub.n(Pa);
    const ja = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Ra = ["unlisted", "public", "whitelist", "private"];

    function ka(bb) {
      let {
        visibility: ab,
        onPick: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Ob.A)(), Tb = (0, Mb.useRef)([]);
      return (0, vb.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Ab("worldSocial:whoCanJoin"),
        children: Ra.map(((bb, Mb) => {
          const Eb = bb === ab;
          return (0, vb.jsxs)("button", {
            ref: bb => {
              Tb.current[Mb] = bb
            },
            type: "button",
            className: Xa()("WorldSocialTile", {
              WorldSocialTileSelected: Eb
            }),
            "aria-pressed": Eb,
            tabIndex: Eb ? 0 : -1,
            onKeyDown: bb => {
              ((bb, ab) => {
                const Ub = "ArrowRight" === bb.key || "ArrowDown" === bb.key ? 1 : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? -1 : 0;
                var Ab;
                0 !== Ub && (bb.preventDefault(), null === (Ab = Tb.current[(ab + Ub + Ra.length) % Ra.length]) || void 0 === Ab || Ab.focus())
              })(bb, Mb)
            },
            onClick: () => {
              Ub(bb)
            },
            children: [(0, vb.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, vb.jsx)(kb.e, {
                name: ja[bb]
              })
            }), (0, vb.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, vb.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Ab(`worldSocial:${bb}`)
              }), (0, vb.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Ab(`worldSocial:${bb}Description`)
              })]
            })]
          }, bb)
        }))
      })
    }
    var ya = Ub(574),
      Za = Ub(2451),
      Da = Ub(2397),
      za = Ub(4054);

    function xa(bb, ab) {
      var Ub;
      return {
        isError: !1,
        name: bb,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ab && void 0 !== ab ? ab : {},
        nameColour: null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.nameColour) && void 0 !== Ub ? Ub : ya.b,
        location: {
          status: "offline"
        }
      }
    }

    function ia(bb) {
      let {
        player: ab,
        isFriend: Ub = !1,
        status: Ab,
        showLocation: Mb = void 0 === Ab,
        qL: Tb,
        onSendFriendRequest: Eb,
        actions: Yb,
        zIndex: Bb
      } = bb;
      const {
        t: eb
      } = (0, Ob.A)();
      let Lb, Pb = Ab;
      return null !== Tb && void 0 !== Tb && Tb.on && (Pb = (0, vb.jsxs)(vb.Fragment, {
        children: [null !== Ab && void 0 !== Ab ? Ab : (0, vb.jsx)(Da.d, {
          socialPreview: ab
        }), (0, vb.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", eb("worldSocial:canJoin")]
        })]
      })), (Yb || Tb) && (Lb = (0, vb.jsxs)(vb.Fragment, {
        children: [Yb, Tb && (0, vb.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, vb.jsx)(za.d, {
            checked: Tb.on,
            disabled: !1,
            ariaLabel: eb("worldSocial:letJoin", {
              playerName: ab.name
            }),
            onChange: bb => {
              Tb.onChange(bb.target.checked)
            }
          })
        })]
      })), (0, vb.jsx)(Za.d, {
        playerSocialPreview: ab,
        isFriend: Ub,
        hideFriendBadge: !0,
        onFriendRemoved: Ub ? bb => {
          cb.d.removeFriendFromState(bb)
        } : void 0,
        status: Pb,
        showLocation: Mb,
        onSendFriendRequest: Eb,
        opensProfileCard: !1,
        zIndex: Bb,
        children: Lb
      })
    }

    function fa(bb) {
      let {
        row: ab,
        qL: Ub,
        canInvite: Ab,
        invited: Mb,
        onInvite: Tb,
        zIndex: Eb
      } = bb;
      const {
        t: Yb
      } = (0, Ob.A)(), Bb = "online" === ab.place ? Xb.g : Xb.h;
      return (0, vb.jsx)(ia, {
        player: ab.friend,
        isFriend: !0,
        status: "here" === ab.place ? Yb("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        qL: Ub,
        zIndex: Eb,
        actions: Ab && (0, vb.jsx)(Bb, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Mb,
          onClick: Tb,
          ariaLabel: `${Yb("worldSocial:invite")} ${ab.friend.name}`,
          children: Yb(Mb ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var ma = Ub(2503);

    function pa(bb) {
      let {
        playersHere: ab,
        exclude: Ub,
        uZ: Ab
      } = bb;
      const {
        t: Tb
      } = (0, Ob.A)(), Eb = (0, ma.o)(ma.k), [Yb, Bb] = (0, Mb.useState)([]), eb = [], Lb = (bb, ab) => {
        const Ab = [...Ub, ...eb.map((bb => bb.player.name))];
        eb.length < 3 && !Ya(Ab, bb.name) && eb.push({
          player: bb,
          status: ab
        })
      };
      for (const Mb of ab) Lb(xa(Mb.name, Mb.cosmetics, Mb.ranks), Tb("worldSocial:inThisWorld"));
      if ("loaded" === Eb.state.status)
        for (const Mb of Eb.state.recentPlayers) Mb.preview.name && !Mb.preview.isError && Lb({
          ...Mb.preview,
          location: {
            status: "offline"
          }
        }, Tb("worldSocial:playedWithYou"));
      const Pb = bb => {
        Bb((ab => [...ab, bb])), Ab(bb).finally((() => {
          Bb((ab => ab.filter((ab => ab !== bb))))
        }))
      };
      return (0, vb.jsx)(vb.Fragment, {
        children: eb.map(((bb, ab) => {
          let {
            player: Ub,
            status: Ab
          } = bb;
          return (0, vb.jsx)(ia, {
            zIndex: eb.length - ab,
            player: Ub,
            status: Ab,
            onSendFriendRequest: () => {
              Pb(Ub.name)
            },
            actions: (0, vb.jsx)(Cb.g, {
              tooltipInner: (0, vb.jsx)(vb.Fragment, {
                children: Tb("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, vb.jsx)(Xb.g, {
                className: "FriendRequestButton",
                disabled: Yb.includes(Ub.name),
                ariaLabel: `${Tb("recentPlayers:addFriend")} ${Ub.name}`,
                onClick: () => {
                  Pb(Ub.name)
                },
                children: (0, vb.jsx)(kb.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${Ub.name}`)
        }))
      })
    }
    var Na = Ub(1589);

    function Wa(bb) {
      let {
        uZ: ab
      } = bb;
      const {
        t: Ub
      } = (0, Ob.A)(), Ab = (0, Mb.useRef)(null), [Tb, Eb] = (0, Mb.useState)(""), [Yb, Bb] = (0, Mb.useState)(!1), eb = () => {
        const bb = Tb.trim();
        "" === bb || Yb || (Bb(!0), ab(bb).then((bb => {
          bb && Ab.current && (Ab.current.value = "", Eb(""))
        })).finally((() => {
          Bb(!1)
        })))
      };
      return (0, vb.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: bb => {
          bb.target === Ab.current && "Escape" !== bb.key && bb.stopPropagation()
        },
        children: [(0, vb.jsx)(Na.c, {
          className: "WorldSocialAddFriendInput",
          domRef: Ab,
          maxLength: 32,
          placeholderText: Ub("worldSocial:addFriendPlaceholder"),
          ariaLabel: Ub("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: bb => {
            Eb(bb)
          },
          onEnter: eb
        }), (0, vb.jsxs)(Xb.g, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: Yb || "" === Tb.trim(),
          onClick: eb,
          children: [(0, vb.jsx)(kb.e, {
            name: "user-plus"
          }), " ", Ub("socialBar:sendRequest")]
        })]
      })
    }
    const Ha = new Map;

    function Ia(bb) {
      const ab = Ha.get(bb);
      if (!ab) return [];
      const Ub = Date.now();
      for (const [Ab, Mb] of ab) Ub - Mb >= sb.l && ab.delete(Ab);
      return [...ab.keys()]
    }
    var da = Ub(1162),
      Fa = Ub(1405),
      ha = Ub(4308),
      Ga = Ub(294),
      Qa = Ub(4288);
    const qa = ["auto", "auto_existing"];

    function ua(bb) {
      return qa.includes(bb)
    }

    function ra(bb, ab) {
      const Ub = (0, da.xb)(bb);
      return null !== ab && (0, da.xb)(ab) === Ub || (0, Qa.d)().some((bb => (0, da.xb)(bb.name) === Ub))
    }
    const Ka = new Set;

    function oa(bb) {
      return `worldSocialSeen:${bb}`
    }

    function la(bb) {
      return !bb || Ka.has(bb) || !0 === hb.f.getItem(oa(bb))
    }

    function ta(bb) {
      bb && !Ka.has(bb) && (Ka.add(bb), hb.f.setItem(oa(bb), !0))
    }

    function wa(bb) {
      let {
        show: ab,
        onClose: Ub,
        opener: Ab
      } = bb;
      const {
        lobbyName: Tb,
        shownLobbyName: Yb
      } = (0, Nb.k)("connectedGame");
      return (0, Mb.useEffect)((() => {
        ab && (0, Ua.reportAnalyticsClick)({
          id: "world_social.open",
          value: Ab
        })
      }), [ab]), (0, vb.jsx)(Eb.d, {
        show: ab && null !== Tb,
        close: Ub,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Ab,
        children: ab && null !== Tb && (0, vb.jsx)(sa, {
          lobbyName: Tb,
          worldCode: null !== Yb && void 0 !== Yb ? Yb : Tb,
          onClose: Ub
        }, Tb)
      })
    }

    function sa(bb) {
      var ab;
      let {
        lobbyName: Ub,
        worldCode: Ab,
        onClose: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Ob.A)(), Yb = (0, Mb.useRef)(null), {
        settings: Bb,
        loading: eb,
        answered: Lb,
        change: Pb,
        retry: jb
      } = Ea(Ub), Rb = (0, cb.l)(), yb = (0, Nb.k)("players"), Zb = (0, Nb.k)("hiddenPlayerNames"), [Db, zb] = (0, Mb.useState)([]), [xb, fb] = (0, Mb.useState)([]), [mb, pb] = (0, Mb.useState)(!1), Hb = (0, Mb.useMemo)((() => {
        var bb, ab;
        const Ub = null === yb.localId ? null : null !== (bb = null === (ab = yb.byId[yb.localId]) || void 0 === ab ? void 0 : ab.name) && void 0 !== bb ? bb : null;
        return yb.ids.flatMap((bb => {
          const ab = yb.byId[bb];
          return null !== ab && void 0 !== ab && ab.name && ab.name !== Ub ? [{
            name: ab.name,
            cosmetics: ab.cosmetics,
            ranks: ab.ranks
          }] : []
        }))
      }), [yb]), Ib = (0, Mb.useMemo)((() => function(bb, ab, Ub) {
        const Ab = [],
          Mb = [],
          Tb = [];
        for (const Eb of bb) !Eb.isError && Eb.name && ("inGame" === Eb.location.status && Eb.location.inLobbyName === ab || Ya(Ub, Eb.name) ? Mb.push({
          friend: Eb,
          place: "here"
        }) : "offline" === Eb.location.status ? Tb.push({
          friend: Eb,
          place: "offline"
        }) : Ab.push({
          friend: Eb,
          place: "online"
        }));
        return [...Ab, ...Mb, ...Tb]
      }(Rb.friends, Ub, Hb.map((bb => bb.name)))), [Rb.friends, Ub, Hb]), db = Fb.featureFlags.canSeeRealPlayerNames ? Hb.filter((bb => null === (0, aa.b)(bb.name, Zb))) : [], hb = null !== Bb && void 0 !== Bb && Bb.canManage ? Bb : null, Gb = null !== hb, Qb = null !== (ab = null === Bb || void 0 === Bb ? void 0 : Bb.visibility) && void 0 !== ab ? ab : null, qb = "whitelist" === (null === hb || void 0 === hb ? void 0 : hb.visibility), ub = "private" === Qb || "whitelist" === Qb && !Gb, {
        userContext: rb
      } = (0, ib.c)();
      (0, Mb.useEffect)((() => {
        Gb && ra(Ub, rb.getPersonalWorldLobbyName()) && ta(rb.whamm)
      }), [Gb, Ub, rb]);
      const Kb = ub ? Eb("whitelist" === Qb ? "socialBar:inviteWorldManagersOnly" : Gb ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        ob = null === Kb;
      (0, Mb.useEffect)((() => ub ? void 0 : Sb.f.quietFriendAdded()), [ub]), (0, Mb.useEffect)((() => Sb.f.quietFriendRequests()), []);
      const tb = (0, Mb.useRef)(!1);
      (0, Mb.useEffect)((() => {
        const bb = Yb.current,
          ab = !tb.current;
        tb.current = !0;
        const Ub = null === document.activeElement || document.activeElement === document.body;
        null !== bb && void 0 !== bb && bb.contains(document.activeElement) || !ab && !Ub || (0, lb.f)() || null === bb || void 0 === bb || bb.focus({
          preventScroll: !0
        })
      }), [ob]), (0, Mb.useEffect)((() => {
        const bb = bb => {
          "Escape" !== bb.key || null !== document.activeElement && document.activeElement !== document.body || Tb()
        };
        return document.addEventListener("keydown", bb), () => {
          document.removeEventListener("keydown", bb)
        }
      }), [Tb]);
      const Aa = null === Bb && !Lb,
        Ma = (eb || Rb.loading) && 0 === Rb.friends.length,
        Ta = Rb.friends.flatMap((bb => bb.name ? [bb.name] : [])),
        va = Db.filter((bb => !Ya(Ta, bb))),
        Pa = Ib.length + 3,
        Xa = va.length + Pa,
        ja = mb ? Rb.requests : Rb.requests.slice(0, 1),
        Ra = async function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const Ub of function(bb, ab) {
              const Ub = [];
              for (let Ab = 0; Ab < bb.length; Ab += ab) Ub.push(bb.slice(Ab, Ab + ab));
              return Ub
            }(bb, wb.D)) {
            if (!await Pb({
                whitelistAdd: Ub
              }, (bb => ea(bb, Ub, !0)), {
                quiet: ab
              })) return !1
          }
          return !0
        }, ya = async bb => {
          if (bb === Qb) return;
          (0, Ua.reportAnalyticsClick)({
            id: "world_social.set_mode",
            value: bb
          });
          const ab = [...Ia(Ub), ...xb],
            Ab = "whitelist" === bb && Bb ? function(bb, ab, Ub) {
              const Ab = [],
                Mb = bb.flatMap((bb => "here" === bb.place ? [bb.friend.name] : []));
              for (const Tb of [...Mb, ...ab]) Ya(Ab, Tb) || Ya(Ub, Tb) || Ab.push(Tb);
              return Ab
            }(Ib, ab, Bb.whitelist) : [];
          await Pb({
            setVisibility: bb
          }, (ab => ({
            ...ab,
            visibility: bb
          }))) && await Ra(Ab)
        }, Za = bb => {
          if (qb && hb) return {
            on: Ya(hb.whitelist, bb),
            onChange: ab => {
              (0, Ua.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: ab ? "on" : "off"
              }), Pb(ab ? {
                whitelistAdd: [bb]
              } : {
                whitelistRemove: bb
              }, (Ub => ea(Ub, [bb], ab)))
            }
          }
        }, Da = async bb => {
          (0, Ua.reportAnalyticsClick)({
            id: "world_social.invite",
            value: "friend"
          });
          const ab = () => {
            fb((ab => ab.filter((ab => ab !== bb))))
          };
          fb((ab => [...ab, bb]));
          const Ab = function(bb, ab) {
            return null === bb || void 0 === bb || !bb.canManage || Ya(bb.whitelist, ab) ? "none" : "whitelist" === bb.visibility ? "required" : "quiet"
          }(Bb, bb);
          if ("none" !== Ab) {
            const Ub = Ra([bb], "quiet" === Ab);
            if ("required" === Ab && !await Ub) return void ab()
          }
          await (0, Jb.k)(bb, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(bb, ab) {
            var Ub;
            const Ab = null !== (Ub = Ha.get(bb)) && void 0 !== Ub ? Ub : new Map;
            Ab.set(ab, Date.now()), Ha.set(bb, Ab)
          }(Ub, bb), setTimeout(ab, sb.p)) : ab()
        }, za = async (bb, ab) => {
          (0, Ua.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: ab
          });
          const Ub = await (0, nb.l)(bb, "world_social");
          return (0, nb.d)(Ub, bb, {
            announceSent: !1
          }), "failed" !== Ub.kind && ("sent" === Ub.kind && zb((ab => Ya(ab, bb) ? ab : [...ab, bb])), qb && await Ra([bb]), !0)
        };
      return (0, vb.jsxs)("div", {
        ref: Yb,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && " " === bb.key && bb.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, vb.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, vb.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Eb("worldSocial:title")
          }), (0, vb.jsx)(Xb.k, {
            className: "WorldSocialClose",
            onClick: Tb
          })]
        }), Aa && (0, vb.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, vb.jsx)(Wb.b, {})
        }), !Aa && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(La, {
            worldCode: Ab,
            message: Kb
          }), null === Bb && !eb && (0, vb.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: jb,
            children: Eb("worldSocial:loadFailed")
          }), Gb && null !== Qb && (0, vb.jsx)(ka, {
            visibility: Qb,
            onPick: bb => {
              ya(bb)
            }
          }), Rb.requests.length > 0 && (0, vb.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, vb.jsx)(Vb.b, {
              label: (0, vb.jsxs)(vb.Fragment, {
                children: [(0, vb.jsx)(kb.e, {
                  name: ba.c
                }), " ", Eb("socialBar:requests")]
              }),
              meta: (0, vb.jsxs)(vb.Fragment, {
                children: [Rb.requests.length, Rb.requests.length === gb.p && (0, vb.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Eb("socialBar:limitReached")
                }), !mb && Rb.requests.length > 1 && (0, vb.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    pb(!0)
                  },
                  children: Eb("worldSocial:moreRequests", {
                    count: Rb.requests.length - 1
                  })
                })]
              })
            }), (0, vb.jsx)("div", {
              className: "PlayerRows",
              children: ja.map(((bb, ab) => (0, vb.jsx)(ia, {
                zIndex: ja.length - ab,
                player: bb,
                actions: (0, vb.jsxs)(vb.Fragment, {
                  children: [(0, vb.jsx)(Cb.g, {
                    tooltipInner: (0, vb.jsx)(vb.Fragment, {
                      children: Eb("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, vb.jsx)(Xb.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Eb("general:accept")} ${bb.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, nb.h)(bb.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, vb.jsx)(kb.e, {
                        name: "check"
                      })
                    })
                  }), (0, vb.jsx)(Cb.g, {
                    tooltipInner: (0, vb.jsx)(vb.Fragment, {
                      children: Eb("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, vb.jsx)(Xb.h, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Eb("general:decline")} ${bb.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, nb.h)(bb.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, vb.jsx)(kb.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${bb.name}`)))
            })]
          }), (0, vb.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, vb.jsx)(Vb.b, {
              label: (0, vb.jsxs)(vb.Fragment, {
                children: [(0, vb.jsx)(kb.e, {
                  name: ba.b
                }), " ", Eb("socialBar:friends")]
              }),
              meta: Rb.loaded && !ub ? Rb.friends.length : void 0
            }), (0, vb.jsx)(Wa, {
              uZ: bb => za(bb, "field")
            }), Ma && (0, vb.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, vb.jsx)(Wb.b, {})
            }), !Ma && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsxs)("div", {
                className: "PlayerRows",
                children: [va.map(((bb, ab) => (0, vb.jsx)(ia, {
                  zIndex: Xa - ab,
                  player: xa(bb, null),
                  status: Eb("worldSocial:requestSent"),
                  qL: Za(bb)
                }, `request:${bb}`))), !ub && Ib.map(((bb, ab) => (0, vb.jsx)(fa, {
                  zIndex: Pa - ab,
                  row: bb,
                  qL: Za(bb.friend.name),
                  canInvite: Ba(Bb) && "here" !== bb.place,
                  invited: xb.includes(bb.friend.name),
                  onInvite: () => {
                    Da(bb.friend.name)
                  }
                }, bb.friend.name))), Rb.loaded && 0 === Rb.friends.length && (0, vb.jsx)(pa, {
                  playersHere: db,
                  exclude: Db,
                  uZ: bb => za(bb, "suggestion")
                })]
              }), qb && Rb.loaded && 0 === Rb.friends.length && 0 === va.length && (0, vb.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Eb("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var ga = Ub(2302),
      Ca = Ub(2275);

    function Va(bb) {
      let {
        show: ab,
        onClose: Ub,
        option: Ab
      } = bb;
      const Tb = (0, Nb.g)("connectedGame", (bb => (0, ga.c)(bb) ? bb.lobbyName : null));
      return function(bb) {
        const {
          gameEntrySource: ab,
          loadingOverlayVisible: Ub
        } = (0, Kb.n)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Ab
        } = (0, ib.c)(), Tb = (0, Nb.k)("localPlayerAlive"), Eb = (0, Nb.g)("players", (bb => null !== bb.localId && void 0 !== bb.byId[bb.localId])), Yb = (0, Ca.m)(), Bb = (0, Mb.useRef)(null), eb = (0, Mb.useRef)(null), vb = "worldCreation" === ab, Lb = Ab.whamm, Pb = Ab.getPersonalWorldLobbyName();
        (0, Mb.useEffect)((() => {
          var ab;
          null !== bb && (null === (ab = eb.current) || void 0 === ab ? void 0 : ab.lobbyName) !== bb && null !== na(bb, vb, Lb, Pb) && (eb.current = Ma(bb))
        }), [vb, bb, Lb, Pb]), (0, Mb.useEffect)((() => {
          if (null !== bb && (!Ub && Tb && Eb)) return Yb.whenShown((() => {
            var ab;
            const Ub = Bb.current === bb ? null : na(bb, vb, Lb, Pb);
            if (null === Ub) return;
            const Ab = (null === (ab = eb.current) || void 0 === ab ? void 0 : ab.lobbyName) === bb ? eb.current : Ma(bb);
            eb.current = null, Bb.current = bb,
              function(bb, ab, Ub, Ab) {
                const {
                  lobbyName: Mb
                } = bb, Tb = () => {
                  ! function(bb, ab) {
                    if (!AU()) return void ab(!0);
                    const Ub = performance.now() + aU;
                    let Ab = 0;
                    const Mb = () => {
                      Ab = AU() ? 0 : Ab + 1, Ab >= 2 ? ab(!0) : !UU(bb) || performance.now() > Ub ? ab(!1) : setTimeout(Mb, bU)
                    };
                    setTimeout(Mb, bU)
                  }(Mb, (Tb => {
                    Ab();
                    const Eb = "auto_existing" === ab && la(Ub);
                    Tb && UU(Mb) && !ca(Mb) && !Eb && (Sa(bb) ? Ja(Mb) : (Ja(Mb), ta(Ub), function(bb) {
                      const ab = Ga.c.world_social_popup_v1;
                      return (0, Ga.g)("world_social_popup_v1"), (0, Ua.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${ab}:${(0,ha.b)()}:${bb}`
                      }), (0, Fa.flushClientAnalyticsEvents)(), "auto_open" === ab
                    }(ab) && (! function(bb) {
                      Ta.set(bb.lobbyName, bb)
                    }(bb), jb.m.IR("toggleMenu", `inviteLink|${ab}`), "inviteLink" !== Kb.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === ab && !Sa(bb)) return void Tb();
                bb.response.then((bb => {
                  if (!("error" in bb)) return bb.settings.canManage ? void Tb() : (Ja(Mb), void Ab());
                  Ab()
                }))
              }(Ab, Ub, Lb, (() => {
                Bb.current === bb && (Bb.current = null)
              }))
          }))
        }), [Yb, vb, Ub, bb, Tb, Eb, Lb, Pb])
      }(Tb), (0, Mb.useEffect)((() => {
        ab && null !== Tb && Ja(Tb)
      }), [ab, Tb]), null !== Tb ? (0, vb.jsx)(wa, {
        show: ab,
        onClose: Ub,
        opener: ua(Ab) ? Ab : "icon"
      }) : (0, vb.jsx)(tb.c, {
        show: ab,
        onClose: Ub
      })
    }
    const Oa = new Set;

    function ca(bb) {
      return Oa.has(bb) || !!hb.j.getItem(`worldSocialShown:${bb}`)
    }

    function Ja(bb) {
      Oa.add(bb), hb.j.setItem(`worldSocialShown:${bb}`, !0)
    }

    function na(bb, ab, Ub, Ab) {
      return ca(bb) ? null : function(bb) {
        let {
          justMade: ab,
          playerId: Ub,
          lobbyName: Ab,
          personalWorld: Mb
        } = bb;
        return ab ? "auto" : !la(Ub) && ra(Ab, Mb) ? "auto_existing" : null
      }({
        justMade: ab,
        playerId: Ub,
        lobbyName: bb,
        personalWorld: Ab
      })
    }

    function Sa(bb) {
      let {
        answer: ab
      } = bb;
      return null !== ab && "settings" in ab && !ab.settings.canManage
    }
    const bU = 500,
      aU = 3e4;

    function UU(bb) {
      return "inGame" === Kb.c.get("gameState") && eb.gameBridge.latest("connectedGame").lobbyName === bb
    }

    function AU() {
      return (0, lb.f)() || Kb.c.get("loadingOverlayVisible") || (0, ob.o)()
    }
    var MU = Ub(36098),
      TU = Ub(2884),
      EU = Ub(1874),
      YU = Ub(2875);

    function BU(bb, ab, Ub) {
      return YU.c.overridesTexture(bb) ? YU.c.getTexture(bb, ab).url : Ub
    }
    var eU = Ub(9703);
    const vU = (bb, ab) => {
        (0, Mb.useEffect)((() => {
          setTimeout((() => {
            bb && bb.current && bb.current.focus()
          }), 1)
        }), [ab])
      },
      LU = (0, Mb.memo)((function(bb) {
        let {
          isInputActive: ab,
          onClose: Ub,
          onChange: Ab,
          textAreaRef: Mb,
          fontSize: Tb,
          lineHeight: Eb,
          currText: Yb
        } = bb;
        return (0, vb.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, vb.jsx)("img", {
            src: BU("board_full", TU.h.BLOCK, eU),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, vb.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Yb,
            ref: Mb,
            style: {
              fontSize: `${Tb}rem`,
              lineHeight: `${Eb}rem`
            },
            onKeyDown: bb => {
              var ab;
              "Escape" !== bb.key && (bb.stopPropagation(), "Tab" === bb.key && function(bb) {
                bb.preventDefault();
                const ab = bb.target,
                  {
                    value: Ub
                  } = ab;
                let Ab = ab.selectionStart,
                  Mb = ab.selectionEnd,
                  Tb = Ub.slice(Ab, Mb);
                if (!Tb.includes("\n") && !bb.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Ab > 0 && "\n" !== Ub[Ab - 1];) Ab--;
                const Eb = "\n" === Ub[Mb - 1];
                Eb && Mb--;
                Tb = Ub.slice(Ab, Mb);
                const Yb = Tb.split("\n").map((ab => bb.shiftKey ? ab.replace(/^\t/, "") : "\t" + ab)).join("\n");
                if (bb.shiftKey && Ub.slice(Ab, Mb) === Yb) return;
                let {
                  selectionStart: Bb
                } = ab;
                ab.setSelectionRange(Ab, Mb), Bb > Ab && (!bb.shiftKey || "\t" === Tb[0]) && (Bb += bb.shiftKey ? -1 : 1);
                Mb = Ab + Yb.length + (Eb ? 1 : 0), document.execCommand("insertText", !1, Yb), ab.setSelectionRange(Bb, Mb)
              }(bb), /^F\d+$/i.test(bb.code) && null !== (ab = EU.x.OpenCodeEditor) && void 0 !== ab && ab.includes(bb.code) && Ub())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Ab
          })]
        })
      }));

    function PU(bb) {
      return 1.3 * bb
    }
    var XU = Ub(1597);
    const jU = (0, Mb.memo)((function(bb) {
        let {
          show: ab,
          onOpen: Ub,
          onClose: Ab
        } = bb;
        const [Tb, Yb] = (0, Mb.useState)(null), [Bb, Lb] = (0, Mb.useState)(""), [Pb, jb] = (0, Mb.useState)(0), [Rb, kb] = (0, Mb.useState)(null), [yb, Zb] = (0, Mb.useState)({
          text: "",
          textSize: 0
        }), Db = (bb, ab) => Rb ? (0, MU.m)(bb, ab, Rb.width, Rb.height) : (0, MU.e)(bb, ab), zb = bb => {
          Lb(Db(Bb, bb)), jb(bb), hb.f.setItem("lastBoardTextSize", bb)
        }, xb = () => {
          Ab(), Rb && Bb === yb.text && Pb === yb.textSize || eb.gameBridge.send("writeOnBoard", {
            pos: Tb,
            text: Bb,
            textSize: Pb
          })
        };
        (0, Nb.c)("boardEditRequested", (bb => {
          var Mb, Tb;
          if (!Fb.featureFlags.canSeePlayerWrittenText) return;
          if (null === bb) return Yb(null), void(ab && Ab());
          const {
            pos: Eb,
            noticeboardSpan: Bb,
            text: eb
          } = bb;
          Yb(Eb), kb(Bb), Lb(eb);
          const vb = null !== (Mb = null !== (Tb = bb.textSize) && void 0 !== Tb ? Tb : hb.f.getItem("lastBoardTextSize")) && void 0 !== Mb ? Mb : 0;
          jb(vb), Zb({
            text: eb,
            textSize: vb
          }), hb.f.setItem("lastBoardTextSize", vb), Ub()
        }));
        const ib = (0, Mb.useRef)(null);
        vU(ib, ab), (0, XU.t)(ib, {
          kind: "sign",
          submit: xb
        });
        const fb = function(bb, ab) {
            const Ub = MU.c[bb];
            if (!ab) return Ub.uiFontSize;
            const {
              numLines: Ab,
              charsPerLine: Mb
            } = (0, MU.w)(ab.width, ab.height, bb);
            return Ub.uiFontSize * Math.min(Ub.charsPerLine / Mb, Ub.numLines / Ab)
          }(Pb, Rb),
          mb = PU(fb);
        return (0, vb.jsxs)(Eb.d, {
          className: "WriteOnBoardBg",
          close: xb,
          escDoesExit: !0,
          show: ab,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, vb.jsx)(LU, {
            isInputActive: () => ab,
            onClose: xb,
            onChange: bb => {
              Lb(Db(bb.target.value, Pb))
            },
            textAreaRef: ib,
            fontSize: fb,
            lineHeight: mb,
            currText: Bb
          }), (0, vb.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, vb.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, vb.jsx)(Xb.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                zb(0)
              },
              disabled: 0 === Pb,
              children: "Small"
            }), (0, vb.jsx)(Xb.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                zb(1)
              },
              disabled: 1 === Pb,
              children: "Medium"
            }), (0, vb.jsx)(Xb.g, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                zb(2)
              },
              disabled: 2 === Pb,
              children: "Large"
            })]
          })]
        })
      })),
      RU = (0, Mb.memo)((function(bb) {
        let {
          show: ab,
          onOpen: Ub,
          onClose: Ab
        } = bb;
        const [Tb, Yb] = (0, Mb.useState)(""), Bb = () => {
          Ab(), eb.gameBridge.send("writeNameTag", Tb)
        };
        (0, mb.f)("EditNameTag", (bb => {
          Fb.featureFlags.canSeePlayerWrittenText && null !== bb && (Yb(bb), Ub())
        }));
        const Lb = (0, Mb.useRef)(null);
        vU(Lb, ab), (0, XU.t)(Lb, {
          kind: "nameTag",
          submit: Bb
        });
        const Pb = MU.E.nameTag.uiFontSize,
          jb = PU(Pb);
        return (0, vb.jsxs)(Eb.d, {
          className: "WriteOnBoardBg",
          close: Bb,
          escDoesExit: !0,
          show: ab,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, vb.jsx)("div", {
            className: "NameTagTrim",
            children: (0, vb.jsx)(LU, {
              isInputActive: () => ab,
              onClose: Bb,
              onChange: bb => {
                const ab = bb.target.value.replaceAll("\n", "");
                Yb((0, MU.q)(ab, "nameTag"))
              },
              textAreaRef: Lb,
              fontSize: Pb,
              lineHeight: jb,
              currText: Tb
            })
          }), (0, vb.jsx)(Xb.g, {
            onClick: Bb,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var kU = Ub(17799);
    const yU = (0, Mb.memo)((function(bb) {
      let {
        show: ab,
        onOpen: Ub,
        onClose: Ab
      } = bb;
      const [Tb, Yb] = (0, Mb.useState)(""), [Bb, Lb] = (0, Mb.useState)(0), [Pb, jb] = (0, Mb.useState)(!1), [Rb, kb] = (0, Mb.useState)(["", "", "", "", "", "", "", "", "", ""]), [yb, Zb] = (0, Mb.useState)("Title"), [Db, zb] = (0, Mb.useState)(!0), [xb, ib] = (0, Mb.useState)(!1);
      (0, mb.f)("EditBook", (bb => {
        let {
          pages: ab,
          title: Ab,
          isPublished: Mb
        } = bb;
        var Tb;
        Fb.featureFlags.canSeePlayerWrittenText && (null !== ab ? (kb(ab), Yb(null !== (Tb = ab[0]) && void 0 !== Tb ? Tb : ""), Zb(Ab), Lb(0), jb(!1), zb(!Mb), ib(!1), Ub()) : kb(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const fb = (0, Mb.useRef)(null),
        pb = (0, Mb.useRef)(null);
      vU(fb, ab), (0, XU.t)(fb, {
        kind: "book"
      }), (0, XU.t)(pb, {
        kind: "eY"
      });
      const Nb = MU.E.book.uiFontSize,
        Wb = PU(Nb),
        Hb = () => {
          (Db || xb) && eb.gameBridge.send("writeBook", {
            pages: [...Rb],
            title: yb,
            published: !Db && xb
          })
        },
        Ib = bb => {
          Pb && (Rb[Bb] = Tb, jb(!1)), Yb(Rb[bb]), Lb(bb)
        };
      return (0, vb.jsxs)(Eb.d, {
        className: "WriteOnBoardBg",
        close: () => {
          Ab(), Rb[Bb] = Tb, Hb()
        },
        escDoesExit: !0,
        show: ab,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, vb.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, vb.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: yb,
            ref: pb,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Wb}rem`
            },
            onKeyDown: bb => {
              Db && bb.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: bb => {
              let ab = bb.target.value;
              ab = (0, MU.q)(ab, "eY"), Zb(ab)
            },
            readOnly: !Db
          }), (0, vb.jsx)("img", {
            src: BU("book_page", TU.h.ITEM, kU),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, vb.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, vb.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Tb,
              ref: fb,
              style: {
                fontSize: `${Nb}rem`,
                lineHeight: `${Wb}rem`
              },
              onKeyDown: bb => {
                Db && bb.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: bb => {
                const ab = bb.target.value;
                Yb((0, MU.q)(ab, "book")), jb(!0)
              },
              readOnly: !Db
            })
          })]
        }), (0, vb.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, vb.jsx)(Xb.g, {
            disabled: 0 === Bb,
            onClick: () => {
              Ib(Bb - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, vb.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, vb.jsx)(Xb.g, {
            disabled: 9 === Bb,
            onClick: () => {
              Ib(Bb + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, vb.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, vb.jsx)(Xb.g, {
            onClick: () => {
              zb(!Db), ib(!0)
            },
            className: "BookNavButton",
            children: Db ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var ZU = Ub(36023),
      DU = Ub(8235),
      zU = Ub(1294),
      xU = Ub(1812);

    function iU(bb) {
      let {
        show: ab,
        buttons: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Ob.A)(), Tb = (0, Mb.useRef)(null);
      return (0, Mb.useEffect)((() => {
        var bb, Ub;
        const Ab = ab ? (0, ZU.x)() : null;
        if (!Ab || !(0, zU.d)()) return;
        const Mb = (0, ZU.l)().findIndex((bb => bb.id === Ab));
        (0, DU.m)(null !== (bb = null === (Ub = Tb.current) || void 0 === Ub ? void 0 : Ub.children[Mb]) && void 0 !== bb ? bb : null)
      }), [ab]), 0 === Ub.length ? null : (0, vb.jsx)("div", {
        ref: Tb,
        className: "ClientGameInventoryButtons",
        onPointerDown: bb => {
          bb.stopPropagation()
        },
        onPointerUp: bb => {
          bb.stopPropagation()
        },
        children: Ub.map((bb => {
          const ab = Ab(bb.labelKey);
          return (0, vb.jsxs)(Xb.m, {
            className: bb.className,
            disabled: bb.disabled,
            onClick: () => {
              (0, ZU.s)(bb)
            },
            ariaLabel: bb.iconOnly ? ab : void 0,
            title: bb.iconOnly ? ab : void 0,
            children: [bb.icon && (0, vb.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === bb.icon.kind && (0, vb.jsx)(xU.c, {
                itemName: bb.icon.name,
                amount: 0
              }), "image" === bb.icon.kind && (0, vb.jsx)("img", {
                src: bb.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === bb.icon.kind && (0, vb.jsx)(kb.e, {
                name: bb.icon.name
              })]
            }), !bb.iconOnly && ab]
          }, bb.id)
        }))
      })
    }
    var fU = Ub(36104),
      mU = Ub(2528),
      pU = Ub(8917),
      NU = Ub(35958),
      WU = Ub(35956);
    let HU = null;
    window.setShowInventoryAdsOverride = bb => {
      HU = bb
    };
    const IU = 24e4;
    var dU = Ub(1816);

    function FU(bb) {
      var ab;
      let {
        draggedInfo: {
          name: Ub,
          attributes: Ab,
          amount: Mb
        },
        toAddRef: Tb
      } = bb;
      return (0, vb.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Tb,
        children: (0, vb.jsx)(xU.c, {
          itemName: Ub,
          amount: Mb,
          enchantmentTier: null === Ab || void 0 === Ab || null === (ab = Ab.customAttributes) || void 0 === ab ? void 0 : ab.enchantmentTier,
          bar: (0, dU.e)(Ab)
        })
      })
    }

    function hU(bb) {
      let {
        className: ab = "",
        displayInfo: Ub,
        domRef: Ab
      } = bb;
      return (0, vb.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${ab}`,
        ref: Ab,
        children: [(0, vb.jsx)(fb.c, {
          text: (0, pb.kb)(Ub.name, {
            fontStyle: Ub.fontStyle
          })
        }), (0, vb.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, vb.jsx)(fb.c, {
            text: Ub.desc
          })
        })]
      })
    }

    function GU(bb) {
      let {
        info: ab,
        draggedInfo: Ub
      } = bb;
      const Ab = (0, Mb.useRef)(null);
      return (0, Mb.useLayoutEffect)((() => {
        const bb = Ab.current,
          {
            left: Ub,
            top: Mb
          } = function(bb, ab, Ub, Ab) {
            const Mb = Ab.left * Ub.width / 100 + 4,
              Tb = Ub.width - Ab.right * Ub.width / 100 - 4 - ab.width,
              Eb = Ab.top * Ub.height / 100 + 4,
              Yb = Ub.height - 4 - ab.height;
            return {
              left: Math.max(Mb, Math.min(bb.x - ab.width / 2, Tb)),
              top: Math.max(Eb, Math.min(bb.y - 48 - ab.height, Yb))
            }
          }({
            x: ab.initTouchX,
            y: ab.initTouchY
          }, {
            width: bb.offsetWidth,
            height: bb.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, Kb.c.get("notchSize"));
        bb.style.left = `${Ub}px`, bb.style.top = `${Mb}px`
      }), [ab]), (0, vb.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Ab,
        children: [(0, vb.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: Ub.amount / ab.maxAmount * 100 + "%"
          }
        }), (0, vb.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [Ub.amount, "/", ab.maxAmount]
        })]
      })
    }
    var QU = Ub(205);
    const qU = (0, Mb.memo)((function(bb) {
      let {
        show: ab,
        onOpen: Ub,
        onClose: Ab
      } = bb;
      const Tb = (0, Mb.useRef)({
          pos: null
        }),
        [Yb, Bb] = (0, Mb.useState)([0, 0, 0, 0]),
        {
          userContext: Lb
        } = (0, ib.c)();
      (0, Nb.c)("ironChestOpenRequested", (bb => {
        let {
          pos: ab,
          ownerDbId: Ab,
          cachedPasskey: Mb
        } = bb;
        if (Tb.current.pos = ab, Ab !== Lb.whamm) return null !== Mb ? (Bb(Mb), void Pb(Mb)) : void Ub();
        Pb(Yb)
      })), (0, Nb.c)("localEffectUpdated", (bb => {
        "Thief" === bb && Ab()
      }));
      const Pb = bb => {
        const {
          pos: ab
        } = Tb.current;
        eb.gameBridge.send("openIronChest", {
          pos: ab,
          ve: bb
        })
      };
      return (0, vb.jsx)(Eb.d, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Ab,
        escDoesExit: !0,
        show: ab,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, vb.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, vb.jsx)(uU, {
            ve: Yb,
            onPasskeyUpdated: Bb,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Pb(Yb)
            }
          })
        })
      })
    }));

    function uU(bb) {
      let {
        className: ab = "",
        ve: Ub,
        onPasskeyUpdated: Ab,
        confirmText: Mb,
        onConfirm: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Ob.A)();
      return (0, vb.jsxs)("div", {
        className: `${ab} IronChestPasskeyInput`,
        children: [(0, vb.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Eb("ironChest:passkeyInputTitle")
        }), (0, vb.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(QU.c.ironChestPasskeyLength).fill(0).map(((bb, ab) => (0, vb.jsx)(rU, {
            digit: Ub[ab],
            onPasskeyDigitUpdated: bb => {
              const Mb = [...Ub];
              Mb[ab] = bb, Ab(Mb)
            }
          }, ab)))
        }), (0, vb.jsx)(Xb.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Tb,
          children: Eb(Mb)
        })]
      })
    }

    function rU(bb) {
      let {
        digit: ab,
        onPasskeyDigitUpdated: Ub
      } = bb;
      return (0, vb.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, vb.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, vb.jsx)(Xb.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Ub(pb.d.mod(ab + 1, 10))
            },
            children: (0, vb.jsx)(kb.e, {
              name: "angle-up"
            })
          }), (0, vb.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: ab
          }), (0, vb.jsx)(Xb.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Ub(pb.d.mod(ab - 1, 10))
            },
            children: (0, vb.jsx)(kb.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var KU = Ub(8914),
      oU = Ub(36127),
      lU = Ub(35951);

    function tU(bb) {
      let {
        specialItemInfo: ab,
        setHovered: Ub,
        pointerDown: Ab,
        pointerUp: Tb,
        enchantingTablePosition: Eb,
        enchantingTableBlockName: Yb
      } = bb;
      const {
        t: Lb
      } = (0, Ob.A)(), [Pb, jb] = (0, Mb.useState)(null), [Rb, kb] = (0, Mb.useState)(null), yb = (0, Bb.h)("auraPerLevel"), Zb = Math.floor((0, Nb.k)("aura") / yb);
      (0, Mb.useEffect)((() => {
        if (!ab) return void jb(null);
        let bb = !0;
        return eb.gameBridge.query("enchantingOffer", {
          slot: ab.idx,
          name: ab.name,
          blockName: Yb
        }).then((Ub => {
          var Ab, Mb;
          let {
            perks: Tb,
            options: Eb
          } = Ub;
          if (!bb) return;
          const Yb = {
            isEnchantable: Tb.length > 0,
            possibleEnchantments: Tb,
            options: Eb.map((bb => {
              let {
                level: ab,
                odds: Ub
              } = bb;
              return {
                level: ab,
                possibilities: Object.fromEntries(Ub.map(((bb, ab) => [`Tier ${ab+1}`, bb])))
              }
            })),
            isAlreadyEnchanted: Tb.length > 0 && void 0 !== (null === (Ab = ab.attributes) || void 0 === Ab || null === (Mb = Ab.customAttributes) || void 0 === Mb ? void 0 : Mb.enchantmentTier)
          };
          jb(Yb), (bb => {
            const ab = bb.options.map((bb => Object.entries(bb.possibilities).map((bb => {
              let [ab, Ub] = bb;
              return {
                str: `${ab}: ${Ub>0?Ub<.01?Ub.toPrecision(1):Ub.toFixed(2):0}%\n`,
                style: {
                  color: pb.fb[ab]
                }
              }
            }))));
            kb(ab)
          })(Yb)
        })), () => {
          bb = !1
        }
      }), [ab, Eb, Yb]);
      const Db = [];
      for (let Mb = 0; Mb < oU.d; Mb++) {
        const bb = null === Pb || void 0 === Pb ? void 0 : Pb.options[Mb],
          Ab = !bb || bb.level > Zb;
        Db.push((0, vb.jsx)(Xb.g, {
          className: "EnchantmentButton",
          onPointerEnter: bb ? bb => null === Ub || void 0 === Ub ? void 0 : Ub()(!0, {
            name: "",
            desc: Rb[Mb]
          }, bb) : void 0,
          onPointerLeave: bb ? () => null === Ub || void 0 === Ub ? void 0 : Ub()(!1) : void 0,
          onClick: Ab ? void 0 : () => {
            eb.gameBridge.send("enchantItem", {
              slot: ab.idx,
              level: bb.level,
              tablePos: Eb
            }), jb(null)
          },
          disabled: Ab,
          children: bb ? (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, vb.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Lb("enchantments:cost"), ": "]
              }), " ", Lb("enchantments:levels", {
                level: bb.level
              })]
            }), (0, vb.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, vb.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, vb.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Lb("enchantments:tier")
                }), Object.entries(bb.possibilities).map((bb => {
                  let [ab, Ub] = bb;
                  return 0 === Ub ? null : (0, vb.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: pb.fb[ab]
                    },
                    children: ab
                  }, ab)
                }))]
              }), (0, vb.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, vb.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Lb("enchantments:odds")
                }), Object.entries(bb.possibilities).map((bb => {
                  let [ab, Ub] = bb;
                  return 0 === Ub ? null : (0, vb.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: pb.fb[ab]
                    },
                    children: [Ub > 0 && Ub < .1 ? "<0.1" : Ub.toFixed(0 < Ub && Ub < .95 ? 1 : 0), "%"]
                  }, ab)
                }))]
              })]
            })]
          }) : !1 === (null === Pb || void 0 === Pb ? void 0 : Pb.isEnchantable) ? (0, vb.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Lb("enchantments:notEnchantable")
          }) : (0, vb.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Lb("enchantments:enterItem")
          })
        }, Mb))
      }
      return (0, vb.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, vb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Yb
        }), (0, vb.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, vb.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, vb.jsx)(lU.c, {
              idx: WU.d,
              setHovered: bb => {
                null === Ub || void 0 === Ub || Ub(WU.d)(bb)
              },
              pointerDown: Ab,
              pointerUp: Tb,
              draggedInfo: null,
              specialItemInfo: ab,
              variation: "Enchanting Table"
            }), Pb && Pb.possibleEnchantments.length > 0 && (0, vb.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, vb.jsx)("h2", {
                children: "Possible Perks:"
              }), Pb.possibleEnchantments.map((bb => (0, vb.jsxs)(Mb.Fragment, {
                children: [(0, vb.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, vb.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, vb.jsx)(xU.c, {
                      itemName: `${bb} Enchantment`,
                      amount: 1
                    })
                  }), (0, vb.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: bb
                  })]
                }), (0, vb.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Lb((0, KU.i)(bb).translationKey)
                })]
              }, bb)))]
            })]
          }), (0, vb.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Pb && Pb.isAlreadyEnchanted && (0, vb.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Lb("enchantments:alreadyEnchanted")
            }), Db]
          })]
        })]
      })
    }
    var wU = Ub(36133);

    function sU(bb) {
      var ab;
      let {
        specialItemInfo: Ub,
        setSpecialItemInfo: Ab,
        setHovered: Tb,
        pointerDown: Eb,
        pointerUp: Yb
      } = bb;
      const {
        t: Bb
      } = (0, Ob.A)(), Lb = (0, Nb.g)("inventory", (bb => bb.freeSlots)), [Pb, jb] = (0, Mb.useState)(null);
      (0, Mb.useEffect)((() => {
        if (Ub) {
          const bb = (0, wU.e)(Ub.name, Ub.amount);
          jb({
            salvageable: !!bb,
            produces: bb
          })
        } else jb(null)
      }), [Ub, null === Ub || void 0 === Ub ? void 0 : Ub.name, null === Ub || void 0 === Ub ? void 0 : Ub.amount]);
      const Rb = !!Ub && !(null === Pb || void 0 === Pb || !Pb.salvageable) && !(null !== (ab = Pb.produces) && void 0 !== ab && ab.some((bb => {
        let {
          amt: ab
        } = bb;
        return ab < 1
      })));
      return (0, vb.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, vb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Bb("item:salvagingTable")
        }), (0, vb.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, vb.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, vb.jsx)(lU.c, {
              idx: WU.d,
              setHovered: bb => {
                null === Tb || void 0 === Tb || Tb(WU.d)(bb)
              },
              pointerDown: Eb,
              pointerUp: Yb,
              draggedInfo: null,
              specialItemInfo: Ub,
              variation: "Salvaging Table"
            })
          }), (0, vb.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, vb.jsx)(Xb.g, {
              className: "SalvageButton",
              onClick: Rb ? () => {
                const {
                  idx: bb,
                  name: ab,
                  amount: Mb
                } = Ub;
                eb.gameBridge.send("salvageItem", {
                  slot: bb,
                  name: ab,
                  amount: Mb
                }) && (jb(null), Ab(null))
              } : void 0,
              disabled: !Rb,
              children: Pb ? Pb.salvageable ? Pb.produces.some((bb => {
                let {
                  amt: ab
                } = bb;
                return ab < 1
              })) ? (0, vb.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, vb.jsx)("div", {
                  className: "SalvageText Error",
                  children: Bb("salvagingTable:notEnoughResources")
                })
              }) : Lb < Pb.produces.length ? (0, vb.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, vb.jsx)("div", {
                  className: "SalvageText Error",
                  children: Bb("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, vb.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, vb.jsx)("div", {
                  className: "SalvageText",
                  children: Bb("salvagingTable:salvage")
                }), (0, vb.jsx)("div", {
                  className: "SalvageIcons",
                  children: Pb.produces.map(((bb, ab) => {
                    let {
                      item: Ub,
                      amt: Ab
                    } = bb;
                    return (0, vb.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: Ub,
                        amount: Math.floor(Ab)
                      })
                    }, ab)
                  }))
                })]
              }) : (0, vb.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, vb.jsx)("div", {
                  className: "SalvageText Error",
                  children: Bb("salvagingTable:unsalvageable")
                })
              }) : (0, vb.jsx)(vb.Fragment, {})
            })
          })]
        })]
      })
    }
    var gU = Ub(212),
      CU = Ub(9007),
      VU = Ub(2490),
      OU = Ub(8250),
      cU = Ub(8241),
      JU = Ub(1578),
      nU = Ub(1897),
      SU = Ub(1304),
      bA = Ub(1963);

    function aA(bb, ab, Ub) {
      const Ab = bb.trim().toLowerCase();
      if ("" === Ab) return 0;
      let Mb = null;
      for (const Tb of ab) {
        const bb = Tb.toLowerCase().indexOf(Ab);
        if (0 === bb) return 0;
        bb > 0 && (Mb = 1)
      }
      if (null !== Mb) return Mb;
      for (const Tb of Ub)
        if (Tb.toLowerCase().includes(Ab)) return 2;
      return null
    }

    function UA(bb) {
      return bb.map((bb => {
        var ab;
        return bb ? {
          name: bb.name,
          amount: null !== (ab = bb.amount) && void 0 !== ab ? ab : 1
        } : null
      }))
    }

    function AA(bb) {
      return bb < 1e3 ? `${bb}` : bb < 1e4 ? Math.floor(bb / 100) / 10 + "k" : `${Math.floor(bb/1e3)}k`
    }
    var MA = Ub(36137);
    const TA = Xb.g,
      EA = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      YA = () => {
        const bb = (0, SU.d)();
        return bb ? bb.getPadRepeatTiming(EA) : EA
      };

    function BA(bb, ab, Ub) {
      var Ab, Mb;
      const Tb = (0, pU.t)(ab, bb);
      let Eb = null === (Ab = ab[bb]) || void 0 === Ab ? void 0 : Ab.description;
      if (Ub && (null === (Mb = (0, MA.e)().get(bb)) || void 0 === Mb || !Mb.hideIngredients)) {
        Eb ? (Eb = (0, pb.kb)(Eb), Eb.push({
          str: "\n"
        })) : Eb = [], Eb.push({
          str: "\n"
        }), Eb.push({
          str: "Can be crafted from:\n"
        });
        for (const bb of Ub) "string" === typeof bb && (Eb.push({
          icon: bb,
          style: {
            fontSize: "1.5em"
          }
        }), Eb.push({
          str: " "
        }), Eb.push(...(0, pb.kb)((0, pU.t)(ab, bb))), Eb.push({
          str: "\n"
        }))
      }
      return {
        name: Tb,
        desc: Eb
      }
    }

    function eA(bb) {
      let {
        name: ab,
        Tv: Ub
      } = bb;
      return `${ab}_${Ub}`
    }

    function vA(bb) {
      var ab;
      let {
        onClick: Ub,
        itemName: Ab,
        recipeId: Tb,
        isSelected: Eb,
        haveIngredients: Yb,
        craftable: Bb,
        setHovered: eb,
        padActions: Lb,
        marked: Pb,
        lock: Xb,
        itemInfo: jb
      } = bb;
      const Rb = (0, Mb.useRef)(null);
      return (0, OU.f)(Rb, {
        press: bb => !Yb || "secondary" === bb && !Bb ? (Lb.refuse(), !1) : "primary" === bb ? (Lb.choose(), !0) : Lb.craft(),
        release: Lb.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, vb.jsxs)("div", {
        ref: Rb,
        className: Xa()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Yb && !Xb,
          CraftableItemMarked: Pb,
          CraftableItemLocked: void 0 !== Xb,
          CraftableItemLockedFar: (null !== (ab = null === Xb || void 0 === Xb ? void 0 : Xb.stepsAway) && void 0 !== ab ? ab : 1) > 1
        }),
        "data-recipe-key": Tb,
        "data-pad-inventory-default": Eb ? "" : void 0,
        onClick: Ub,
        style: {
          cursor: Eb ? null : "pointer"
        },
        onPointerEnter: bb => {
          null === eb || void 0 === eb || eb(!0, BA(Ab, jb)), !Eb && (0, JU.l)(bb.nativeEvent) && (0, cU.i)() && Ub()
        },
        onPointerLeave: () => {
          null === eb || void 0 === eb || eb(!1)
        },
        children: [(0, vb.jsx)(xU.c, {
          itemName: Ab,
          amount: 1
        }), Pb && (0, vb.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Xb && (0, vb.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, vb.jsx)(kb.e, {
            name: "lock"
          }), (0, vb.jsx)(fb.c, {
            text: Xb.tag
          })]
        })]
      })
    }

    function LA(bb) {
      let {
        idx: ab,
        status: Ub,
        shownItem: Ab,
        dim: Tb,
        onHoverStart: Eb,
        onHoverEnd: Yb,
        onPadBack: Bb
      } = bb;
      const eb = (0, Mb.useRef)(null);
      (0, OU.f)(eb, {
        press: () => !1,
        back: Bb,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Lb = Ub.need > 0 ? Math.min(Ub.have / Ub.need, 1) : 1;
      return (0, vb.jsxs)("div", {
        ref: eb,
        className: Xa()("CupTile", {
          Short: Ub.missing > 0
        }),
        style: {
          width: Tb,
          height: Tb
        },
        "data-craft-ingredient": ab,
        onPointerEnter: Eb,
        onPointerLeave: Yb,
        children: [(0, vb.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Lb})`
          }
        }), (0, vb.jsx)(xU.c, {
          itemName: Ab,
          amount: 0
        }), (0, vb.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [AA(Ub.have), "/", AA(Ub.need)]
        })]
      })
    }

    function PA(bb) {
      var ab, Ub, Ab, Tb, Eb;
      let {
        show: Yb,
        recipeItem: {
          name: Bb,
          Tv: Lb,
          requires: Pb,
          produces: Xb,
          haveIngredients: jb
        },
        detail: Rb,
        onCraft: kb,
        setHovered: yb,
        craftButtonRef: Zb,
        onPadBack: Db,
        showPadShortcut: zb,
        refusedCount: xb,
        lock: ib,
        itemInfo: mb
      } = bb;
      const {
        t: pb
      } = (0, Ob.A)(), Nb = null !== Rb && !Rb.roomForOne, Wb = null !== (ab = null === Rb || void 0 === Rb ? void 0 : Rb.craftAllTimes) && void 0 !== ab ? ab : 0, Hb = function(bb, ab) {
        return bb.map((bb => {
          let {
            items: Ub,
            amt: Ab
          } = bb, Mb = 0;
          const Tb = [];
          for (const Eb of Ub) {
            const bb = ab(Eb);
            Mb += bb, bb > 0 && Tb.push(Eb)
          }
          return 0 === Tb.length && Tb.push(Ub[0]), {
            shownItems: Tb,
            need: Ab,
            have: Mb,
            missing: Math.max(Ab - Mb, 0)
          }
        }))
      }(Pb, (bb => {
        var ab;
        return null !== (ab = null === Rb || void 0 === Rb ? void 0 : Rb.amounts[bb]) && void 0 !== ab ? ab : 0
      }));
      let Ib = "4rem",
        db = 4;
      3 === Pb.length || 4 === Pb.length ? Ib = "3.75rem" : Pb.length >= 5 && (Ib = "3rem"), 4 === Pb.length ? db = 2 : Pb.length <= 6 && (db = 3);
      const Fb = `calc(${db} * ${Ib} + ${db-1} * 0.4rem + 1px)`,
        hb = (0, Mb.useRef)(null),
        Gb = (0, Mb.useRef)(null);
      (0, Mb.useLayoutEffect)((() => {
        hb.current.scrollTop = 0
      }), [Bb, Lb]);
      const Qb = (0, Mb.useRef)(xb);
      (0, Mb.useEffect)((() => {
        if (xb === Qb.current) return;
        Qb.current = xb;
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
        for (const Ab of null !== (ab = null === (Ub = hb.current) || void 0 === Ub ? void 0 : Ub.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== ab ? ab : []) {
          var ab, Ub;
          Ab.animate(bb, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [xb]);
      const qb = (bb, ab, Ub) => {
          var Ab;
          if ((0, MA.e)().has(Bb)) return void(Ub && clearInterval(ub.current));
          const Mb = null !== (Ab = null === Rb || void 0 === Rb ? void 0 : Rb.resultStackable) && void 0 !== Ab && Ab,
            Tb = UA(eb.gameBridge.latest("inventory").player),
            {
              Ev: Eb,
              Qv: Yb,
              amountAddedToSlot: vb
            } = eb.gameBridge.send("craftRecipe", {
              name: Bb,
              Tv: Lb,
              times: ab || bb && Mb ? null : 1
            });
          if (Eb > 0) {
            const ab = [],
              Ab = new Set(Pb.flatMap((bb => {
                let {
                  items: ab
                } = bb;
                return ab
              }))),
              Eb = function(bb, ab, Ub) {
                const Ab = [];
                for (let Mb = 0; Mb < bb.length; Mb++) {
                  const Tb = bb[Mb];
                  if (!Tb || !Ub.has(Tb.name)) continue;
                  const Eb = ab[Mb],
                    Yb = (null === Eb || void 0 === Eb ? void 0 : Eb.name) === Tb.name ? Eb.amount : 0;
                  Yb < Tb.amount && Ab.push({
                    idx: Mb,
                    itemName: Tb.name,
                    amount: Tb.amount - Yb
                  })
                }
                return Ab
              }(Tb, UA(eb.gameBridge.latest("inventory").player), Ab).slice(0, 12),
              Lb = Ub ? 0 : Math.min(50, 400 / Eb.length),
              jb = Ub ? 220 : 320;
            for (const bb of Eb) {
              var Xb;
              const Ub = Pb.findIndex((ab => {
                  let {
                    items: Ub
                  } = ab;
                  return Ub.includes(bb.itemName)
                })),
                Ab = null === (Xb = hb.current) || void 0 === Xb ? void 0 : Xb.querySelector(`[data-craft-ingredient="${Ub}"]`),
                Mb = (0, pU.f)(bb.idx);
              Ab && Mb && ab.push({
                kind: "ingredient",
                itemName: bb.itemName,
                amount: bb.amount,
                Qv: bb.idx,
                from: Mb,
                to: (0, pU.f)(Ab),
                delayMs: Math.round(ab.length * Lb),
                durationMs: jb
              })
            }
            let Rb;
            if (null !== Yb && vb > 0 && Gb.current) {
              const bb = ab.length > 0 ? ab[ab.length - 1].delayMs + .6 * jb : 0;
              Rb = {
                itemName: Bb,
                amount: vb,
                Qv: Yb,
                from: (0, pU.f)(Gb.current),
                delayMs: Math.round(bb)
              }
            }
            kb(Rb, bb && !Mb ? Yb : null, ab), fU.c.play("wood1", .5).rate(1.75)
          }
        },
        ub = (0, Mb.useRef)(null);
      (0, Mb.useEffect)((() => () => {
        clearInterval(ub.current)
      }), []);
      const rb = (bb, ab) => {
          qb(bb, !1, !1), clearInterval(ub.current), ab && (ub.current = setTimeout((() => {
            ub.current = setInterval((() => {
              qb(bb, !1, !0)
            }), ab.intervalMs)
          }), ab.initialDelayMs))
        },
        Kb = () => {
          clearInterval(ub.current)
        },
        ob = !jb || Nb || Boolean(ib),
        lb = (0, Mb.useRef)(null),
        tb = null !== (Ub = null === (Ab = (0, bA.c)()) || void 0 === Ab ? void 0 : Ab.hideButtonHints) && void 0 !== Ub && Ub,
        wb = null !== (Tb = null === (Eb = (0, SU.d)()) || void 0 === Eb ? void 0 : Eb.getBoundButton("inventorySecondary")) && void 0 !== Tb ? Tb : null,
        sb = () => !ob && (qb(!1, !0, !1), !0);
      (0, OU.f)(Zb, {
        press: bb => "secondary" === bb ? sb() : !ob && (rb(!1, YA()), !0),
        release: Kb,
        back: Db,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, OU.f)(lb, {
        press: sb,
        back: Db,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [gb, Cb] = (0, Mb.useState)(0), [Vb, cb] = (0, Mb.useState)(null);
      (0, Mb.useEffect)((() => {
        if (!0 === Yb) {
          Cb(0);
          const bb = setInterval((() => {
            Cb((bb => bb + 1))
          }), 1e3);
          return () => {
            clearInterval(bb)
          }
        }
        return () => {}
      }), [Yb]);
      const Jb = null === Rb || void 0 === Rb ? void 0 : Rb.ingredientsCraftedFrom,
        nb = (0, Mb.useRef)(yb);
      (0, Mb.useEffect)((() => {
        nb.current = yb
      }), [yb]);
      const Sb = !(null === ib || void 0 === ib || !ib.hideIngredients);
      (0, Mb.useEffect)((() => {
        var bb, ab;
        if (!Vb) return;
        if (Sb) return cb(null), void(null === (ab = nb.current) || void 0 === ab || ab.call(nb, !1));
        const Ub = Vb[gb % Vb.length];
        null === (bb = nb.current) || void 0 === bb || bb.call(nb, !0, BA(Ub, mb, null === Jb || void 0 === Jb ? void 0 : Jb[Ub]))
      }), [Vb, gb, mb, Jb, Sb]);
      const ba = !!ib,
        aa = (0, Mb.useRef)(!1);
      (0, Mb.useEffect)((() => {
        var bb;
        ba && (clearInterval(ub.current), Sb && aa.current && (aa.current = !1, null === (bb = nb.current) || void 0 === bb || bb.call(nb, !1)))
      }), [ba, Sb]);
      const Ua = (0, pU.t)(mb, Bb);
      return (0, vb.jsxs)("div", {
        ref: hb,
        className: "CraftableInfo SmallTextBold",
        children: [(0, vb.jsx)("div", {
          className: "CraftableHeader",
          children: (0, vb.jsx)(fb.c, {
            text: Ua
          })
        }), !Sb && (0, vb.jsx)("div", {
          className: Xa()("CraftableIngredients", {
            Compact: Pb.length >= 5
          }),
          style: {
            maxWidth: Fb
          },
          children: Hb.map(((bb, ab) => {
            const Ub = bb.shownItems[gb % bb.shownItems.length];
            return (0, vb.jsx)(LA, {
              idx: ab,
              status: bb,
              shownItem: Ub,
              dim: Ib,
              onHoverStart: () => {
                cb(bb.shownItems)
              },
              onHoverEnd: () => {
                cb(null), null === yb || void 0 === yb || yb(!1)
              },
              onPadBack: Db
            }, ab)
          }))
        }), ib && (0, vb.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, vb.jsx)(fb.c, {
            text: ib.reason
          })
        }), !ib && (!jb || Nb) && (0, vb.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!jb && "Missing ingredients", (0, vb.jsx)("br", {}), Nb && "Inventory is full"]
        }), !Sb && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsxs)(TA, {
            ref: Zb,
            className: "DoCraftButton",
            onPointerDown: bb => {
              rb((0, pU.w)(bb), (0, JU.l)(bb.nativeEvent) ? YA() : EA)
            },
            onPointerUp: Kb,
            onPointerLeave: Kb,
            disabled: ob,
            children: [zb && wb && !ob && !tb && (0, vb.jsx)(nU.e, {
              className: "CraftShortcutGlyph",
              glyph: wb
            }), (0, vb.jsx)("div", {
              ref: Gb,
              className: "DoCraftItem",
              onPointerEnter: () => {
                aa.current = !0, null === yb || void 0 === yb || yb(!0, BA(Bb, mb))
              },
              onPointerLeave: () => {
                aa.current = !1, null === yb || void 0 === yb || yb(!1)
              },
              children: (0, vb.jsx)(xU.c, {
                itemName: Bb,
                amount: Xb
              })
            })]
          }), (0, vb.jsxs)(TA, {
            ref: lb,
            className: "DoCraftAllButton",
            onPointerDown: bb => {
              qb((0, pU.w)(bb), !0, !1)
            },
            disabled: ob,
            children: [(0, vb.jsx)("span", {
              className: "CraftAllLabel",
              children: pb("general:craftAll")
            }), Wb > 0 && (0, vb.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", AA(Wb)]
            })]
          })]
        })]
      })
    }

    function XA(bb) {
      let {
        selectedIdx: ab,
        hidden: Ub
      } = bb;
      const Ab = (0, zU.o)(),
        Tb = (0, Mb.useRef)(null);
      return (0, Mb.useLayoutEffect)((() => {
        const bb = Tb.current,
          Ab = null === bb || void 0 === bb ? void 0 : bb.parentElement;
        if (!Ab || !bb) return;
        const Mb = Ab.querySelector(".CraftableItems"),
          Eb = () => {
            var Tb, Eb;
            if (Ub) return void(bb.style.opacity = "0");
            const Yb = null === Mb || void 0 === Mb ? void 0 : Mb.children[ab],
              Bb = null === (Tb = null !== (Eb = null === Yb || void 0 === Yb ? void 0 : Yb.querySelector(".InvenItem")) && void 0 !== Eb ? Eb : Yb) || void 0 === Tb ? void 0 : Tb.getBoundingClientRect();
            if (!Bb || 0 === Bb.width) return void(bb.style.opacity = "0");
            const eb = Ab.getBoundingClientRect();
            bb.style.opacity = "1", bb.style.width = `${Bb.width}px`, bb.style.height = `${Bb.height}px`, bb.style.transform = `translate(${Bb.left-eb.left+Ab.scrollLeft}px, ${Bb.top-eb.top+Ab.scrollTop}px)`
          };
        Eb();
        const Yb = new MutationObserver(Eb),
          Bb = new ResizeObserver(Eb);
        return Bb.observe(Ab), Mb && (Yb.observe(Mb, {
          childList: !0,
          subtree: !0
        }), Bb.observe(Mb)), () => {
          Yb.disconnect(), Bb.disconnect()
        }
      }), [ab, Ub]), (0, vb.jsx)("div", {
        ref: Tb,
        className: Xa()("SelectionReticle", {
          Secondary: Ab
        })
      })
    }

    function jA(bb, ab, Ub) {
      return bb ? (0, gU.c)(CU.h, bb) ? RA(bb, ab, Ub) : bb : Ub("classicGame:handCrafting")
    }

    function RA(bb, ab, Ub) {
      var Ab;
      const Mb = null === (Ab = ab[bb]) || void 0 === Ab ? void 0 : Ab.displayName;
      if ("string" === typeof Mb) return Ub(Mb);
      const Tb = eb.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Mb) ? Mb.map((bb => {
        if ("string" === typeof bb) return bb;
        if ("translationKey" in bb) return Ub(bb.translationKey, (0, Ob.m)(bb.params, Tb));
        if ("str" in bb) {
          if ("string" === typeof bb.str) return bb.str;
          if ("translationKey" in bb.str) return Ub(bb.str.translationKey, (0, Ob.m)(bb.str.params, Tb))
        }
        return ""
      })).join("") : Mb && "translationKey" in Mb ? Ub(Mb.translationKey, (0, Ob.m)(Mb.params, Tb)) : bb
    }

    function kA(bb, ab) {
      return bb === ab || null !== bb && null !== ab && bb.name === ab.name && bb.Tv === ab.Tv
    }

    function yA(bb) {
      var ab, Ub, Ab;
      let {
        show: Tb,
        onCraft: Eb,
        dispatchSelectedCraftable: Yb,
        selectedCraftable: Bb,
        craftingStation: Lb,
        setHovered: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Ob.A)(), [jb, Rb] = (0, Mb.useState)(""), [kb, yb] = (0, Mb.useState)(0);
      (0, Mb.useEffect)((() => {
        Tb || (Rb(""), yb((bb => bb + 1)))
      }), [Tb]);
      const [Zb, Db] = (0, Mb.useState)(Lb);
      Zb !== Lb && (Db(Lb), "" !== jb && (Rb(""), yb((bb => bb + 1))));
      const zb = (0, Mb.useRef)(null),
        xb = (0, Mb.useRef)(null),
        ib = (0, cU.j)(),
        fb = ib.showing && "recipe" === ib.kind,
        [mb, pb] = (0, Mb.useState)(0),
        Wb = null !== Lb && void 0 !== Lb ? Lb : null,
        Hb = (0, Mb.useRef)(null),
        Ib = bb => {
          return !((ab = Hb.current) === (Ub = bb) || null !== ab && null !== Ub && ab.station === Ub.station && kA(ab.recipe, Ub.recipe)) && (Hb.current = bb, eb.gameBridge.send("focusCrafting", bb), !0);
          var ab, Ub
        };
      Ib(Tb ? {
        station: Wb,
        recipe: (null === (ab = Hb.current) || void 0 === ab ? void 0 : ab.station) === Wb ? Hb.current.recipe : null
      } : null);
      let db = eb.gameBridge.latest("crafting");
      const Fb = (0, Nb.k)("itemInfo"),
        hb = "" !== jb.trim(),
        Gb = (0, MA.E)(),
        Qb = (0, MA.A)(),
        qb = (0, MA.G)(),
        ub = function(bb, ab) {
          const [Ub, Ab] = (0, Mb.useState)(!1);
          (0, Mb.useEffect)((() => {
            if (!bb) return void Ab(!1);
            const ab = setTimeout((() => {
              Ab(!0)
            }), 0);
            return () => {
              clearTimeout(ab)
            }
          }), [bb]);
          const Tb = bb && Ub,
            Eb = (0, Mb.useRef)({
              station: ab,
              at: new Map
            });
          return (Eb.current.station !== ab || !Tb && Eb.current.at.size > 0) && (Eb.current = {
            station: ab,
            at: new Map
          }), Tb ? Eb.current.at : null
        }(Tb, Lb);
      let rb = db.recipes.filter((bb => {
        let {
          listed: ab
        } = bb;
        return ab
      }));
      if (hb) {
        const bb = [];
        for (const ab of db.recipes) {
          var Kb;
          const Ub = null !== (Kb = Qb.get(ab.name)) && void 0 !== Kb && Kb.hideIngredients ? [] : ab.requires.flatMap((bb => {
              let {
                items: ab
              } = bb;
              return ab.flatMap((bb => [bb, RA(bb, Fb, Xb)]))
            })),
            Ab = aA(jb, [ab.name, RA(ab.name, Fb, Xb)], Ub);
          null !== Ab && bb.push({
            item: ab,
            rank: Ab
          })
        }
        bb.sort(((bb, ab) => bb.rank - ab.rank)), rb = bb.map((bb => {
          let {
            item: ab
          } = bb;
          return ab
        }))
      } else {
        if (ub && ub.size > 0) {
          const bb = db.recipes.filter((bb => !bb.listed && ub.has(eA(bb))));
          rb = rb.concat(bb)
        }
        rb = (0, MA.k)(rb, Gb, Qb, qb), ub && (rb = (0, MA.g)(rb, ub, eA))
      }
      const ob = bb => rb.find((ab => eA(ab) === bb)),
        lb = `${Lb}|${jb}`,
        [tb, wb] = (0, Mb.useState)(null),
        sb = (null === tb || void 0 === tb ? void 0 : tb.context) === lb ? tb.key : null,
        gb = Bb ? eA(Bb) : null,
        Cb = null !== (Ub = null !== (Ab = ob(gb)) && void 0 !== Ab ? Ab : ob(sb)) && void 0 !== Ub ? Ub : rb[0],
        Vb = Cb ? eA(Cb) : null,
        cb = Cb ? {
          name: Cb.name,
          Tv: Cb.Tv
        } : null;
      Tb && Ib({
        station: Wb,
        recipe: cb
      }) && (db = eb.gameBridge.latest("crafting")), Vb !== gb && Vb !== sb && wb(Vb ? {
        context: lb,
        key: Vb
      } : null), (0, Mb.useEffect)((() => () => {
        Hb.current = null, eb.gameBridge.send("focusCrafting", null)
      }), []);
      const Jb = kA(db.detail, cb) ? db.detail : null,
        nb = null !== Jb && !Jb.roomForOne,
        Sb = rb.findIndex((bb => eA(bb) === eA(Cb))),
        ba = () => xb.current ? (0, OU.b)(xb.current) : null,
        aa = (0, Mb.useRef)(null),
        Ua = (0, Mb.useRef)(0);
      Ua.current++;
      const Aa = Ua.current;
      (0, Mb.useEffect)((() => {
        const bb = aa.current;
        if (!bb || Aa <= bb.afterRender) return;
        if (aa.current = null, bb.key !== Vb) return;
        const ab = ba();
        var Ub;
        null !== ab && void 0 !== ab && ab.press("primary") && !bb.PY && (null === (Ub = ab.release) || void 0 === Ub || Ub.call(ab))
      }));
      const Ma = bb => {
          const ab = {
            name: bb.name,
            Tv: bb.Tv
          };
          return {
            choose: () => {
              Yb(ab), (0, DU.m)(xb.current)
            },
            craft: () => {
              var bb, Ub;
              return Yb(ab), eA(ab) !== eA(Cb) ? (aa.current = {
                key: eA(ab),
                PY: !0,
                afterRender: Ua.current
              }, !0) : null !== (bb = null === (Ub = ba()) || void 0 === Ub ? void 0 : Ub.press("primary")) && void 0 !== bb && bb
            },
            stopCraft: () => {
              var bb, ab;
              aa.current ? aa.current.PY = !1 : null === (bb = ba()) || void 0 === bb || null === (ab = bb.release) || void 0 === ab || ab.call(bb)
            },
            refuse: () => {
              eA(ab) !== eA(Cb) && Yb(ab), pb((bb => bb + 1))
            }
          }
        },
        Ta = () => {
          var bb, ab, Ub;
          (0, DU.m)(null !== (bb = null === (ab = zb.current) || void 0 === ab || null === (Ub = ab.querySelector(".CraftableItems")) || void 0 === Ub ? void 0 : Ub.children[Sb]) && void 0 !== bb ? bb : null)
        },
        Ea = rb.map(eA).join("|"),
        Ya = (0, Mb.useRef)(Ea);
      return (0, Mb.useEffect)((() => {
        Ya.current !== Ea && (Ya.current = Ea, fb && Sb >= 0 && (0, cU.i)() && Ta())
      })), (0, vb.jsxs)("div", {
        className: "Craftables",
        children: [(0, vb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: jA(Lb, Fb, Xb)
        }), (0, vb.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, vb.jsx)(Na.c, {
            className: "CraftingSearch",
            placeholderText: Xb("general:searchRecipes"),
            defaultValue: jb,
            maxLength: 100,
            onValueChange: bb => {
              Rb(bb)
            },
            blurOnEnter: !0
          }, kb), 0 === rb.length && hb && (0, vb.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Xb("general:noRecipesMatchSearch")
          }), rb.length > 0 && (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsxs)("div", {
              ref: zb,
              className: "CraftablesLeftSide",
              children: [(0, vb.jsx)(VU.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(rb.map((bb => {
                  let {
                    name: ab,
                    Tv: Ub,
                    haveIngredients: Ab
                  } = bb;
                  return {
                    name: ab,
                    Tv: Ub,
                    haveIngredients: Ab
                  }
                })))],
                observing: Tb,
                children: rb.map((bb => {
                  const {
                    name: ab,
                    Tv: Ub,
                    haveIngredients: Ab
                  } = bb, Mb = eA(bb);
                  return (0, vb.jsx)(vA, {
                    recipeId: Mb,
                    itemName: ab,
                    onClick: () => {
                      Yb({
                        name: ab,
                        Tv: Ub
                      })
                    },
                    isSelected: eA(Cb) === Mb,
                    haveIngredients: Ab,
                    craftable: Ab && !Qb.has(ab) && !(eA(Cb) === Mb && nb),
                    setHovered: Pb,
                    padActions: Ma(bb),
                    marked: Gb.has(ab),
                    lock: Qb.get(ab),
                    itemInfo: Fb
                  }, Mb)
                }))
              }), (0, vb.jsx)(XA, {
                selectedIdx: Sb,
                hidden: fb && ib.steppingSlots
              })]
            }), (0, vb.jsx)(PA, {
              show: Tb,
              recipeItem: Cb,
              detail: Jb,
              onCraft: Eb,
              setHovered: Pb,
              craftButtonRef: xb,
              onPadBack: Ta,
              showPadShortcut: fb,
              refusedCount: mb,
              lock: Qb.get(Cb.name),
              itemInfo: Fb
            })]
          })]
        })]
      })
    }
    var ZA = Ub(8922),
      DA = Ub(2989),
      zA = Ub(1993),
      xA = Ub(8227);
    class iA {
      constructor(bb, ab, Ub) {
        this.commit = bb, this.delayMs = ab, this.defers = Ub, this.pending = null, this.timer = void 0, this.PY = !1, this.flush = () => {
          clearTimeout(this.timer);
          const bb = this.pending;
          null !== bb && (this.pending = null, this.commit(bb))
        }
      }
      type(bb) {
        this.pending = bb, clearTimeout(this.timer), this.PY || this.defers() ? this.PY || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(bb) {
        var ab;
        return null !== (ab = this.pending) && void 0 !== ab ? ab : bb
      }
      isHeld() {
        return this.PY
      }
      setHeld(bb) {
        this.PY = bb, bb || this.flush()
      }
    }

    function fA(bb) {
      return null === bb ? "creativeInventory:all" : `creativeInventory:${bb}`
    }

    function mA(bb) {
      let {
        category: ab
      } = bb;
      return null === ab ? (0, vb.jsx)(kb.e, {
        name: "layer-group"
      }) : (0, vb.jsx)(xU.c, {
        itemName: ZA.creativeItemCategoryIcons[ab],
        amount: 0
      })
    }

    function pA(bb) {
      let {
        labelKey: ab,
        isSelected: Ub,
        onSelect: Ab,
        setHovered: Mb,
        children: Tb
      } = bb;
      return (0, vb.jsx)("div", {
        className: Xa()("CreativeCategoryTab", {
          Selected: Ub
        }),
        onClick: Ab,
        onPointerEnter: bb => {
          (0, pU.r)(bb) || Mb(!0, {
            name: {
              translationKey: ab
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Mb(!1)
        },
        children: Tb
      })
    }

    function NA(bb) {
      let {
        categories: ab,
        selectedCategory: Ub,
        onSelect: Ab
      } = bb;
      const {
        t: Tb
      } = (0, Ob.A)(), [Eb, Yb] = (0, Mb.useState)(!1), Bb = (0, Mb.useRef)(null), eb = (0, Mb.useCallback)((() => {
        Yb(!1)
      }), []);
      return (0, zA.e)(Bb, eb), (0, vb.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Bb,
        children: [(0, vb.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Yb(!Eb)
          },
          children: [(0, vb.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, vb.jsx)(mA, {
              category: Ub
            })
          }), (0, vb.jsx)("span", {
            children: Tb(fA(Ub))
          }), (0, vb.jsx)(kb.e, {
            name: Eb ? "caret-up" : "caret-down"
          })]
        }), Eb && (0, vb.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: ab.map((bb => (0, vb.jsxs)("div", {
            className: Xa()("CreativeCategoryDropdownOption", {
              Selected: Ub === bb
            }),
            onClick: () => {
              Ab(bb), Yb(!1)
            },
            children: [(0, vb.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, vb.jsx)(mA, {
                category: bb
              })
            }), (0, vb.jsx)("span", {
              children: Tb(fA(bb))
            })]
          }, null !== bb && void 0 !== bb ? bb : "all")))
        })]
      })
    }
    const WA = (0, Mb.memo)((function(bb) {
      let {
        creativeScrollDiv: ab,
        playerInvenNumSlots: Ub,
        getSetHoveringForIdx: Ab,
        getPointerDownForIdx: Tb,
        getPointerUpForIdx: Eb,
        creativeSearchVal: Yb,
        setCreativeSearchVal: eb,
        creativeCategory: Lb,
        setCreativeCategory: Pb,
        show: Xb
      } = bb;
      const {
        t: jb
      } = (0, Ob.A)(), Rb = (0, Nb.k)("creativeVisibility"), {
        userContext: yb
      } = (0, ib.c)(), Zb = (0, Bb.h)("canUseDevCreativeItems"), Db = yb.playerHasRank("developer") || !!Zb, zb = (0, Mb.useMemo)((() => IA("", Rb, Db)), [Rb, Db]), xb = (0, Mb.useMemo)((() => {
        const bb = (0, ZA.creativeItemIds)(),
          ab = new Set(zb.map((ab => (0, ZA.creativeCategoryOf)(bb[ab]))));
        return ZA.creativeItemCategories.filter((bb => ab.has(bb)))
      }), [zb]), fb = null !== Lb && xb.includes(Lb) ? Lb : null, pb = (0, Mb.useMemo)((() => "" === Yb ? zb : IA(Yb, Rb, Db)), [zb, Yb, Rb, Db]), Wb = (0, Mb.useMemo)((() => {
        const bb = (0, ZA.creativeItemIds)();
        return null !== fb ? pb.filter((ab => (0, ZA.creativeCategoryOf)(bb[ab]) === fb)) : "" === Yb ? pb.filter((ab => !(0, ZA.showOnlyInCreativeCategory)(bb[ab]))) : pb
      }), [pb, fb, Yb]), Hb = Ab();

      function Ib(bb) {
        Pb(bb), ab.current.scrollTop = 0
      }
      const db = [null, ...xb],
        {
          isTouchScreen: Fb
        } = (0, Kb.n)(["isTouchScreen"]),
        hb = !Fb,
        Gb = (0, Mb.useRef)(null),
        [Qb, qb] = (0, Mb.useState)(0);
      (0, Mb.useEffect)((() => {
        const bb = Gb.current;
        if (!bb) return;
        const ab = new ResizeObserver((bb => {
          qb(bb[0].contentRect.height)
        }));
        return ab.observe(bb), () => {
          ab.disconnect()
        }
      }), [hb]);
      const ub = (0, Mb.useRef)(null),
        rb = (0, Mb.useCallback)((function bb() {
          "up" === ub.current ? ab.current.scrollTop -= 10 : "down" === ub.current && (ab.current.scrollTop += 10), ub.current && requestAnimationFrame(bb)
        }), [ab]),
        ob = (0, Mb.useCallback)((function(bb) {
          ub.current || (ub.current = bb, rb())
        }), [rb]);

      function lb() {
        ub.current = null
      }
      const tb = (0, Mb.useRef)({
        creativeSearchVal: Yb,
        setCreativeSearchVal: eb
      });
      tb.current = {
        creativeSearchVal: Yb,
        setCreativeSearchVal: eb
      };
      const [wb] = (0, Mb.useState)((() => new iA((bb => {
        tb.current.setCreativeSearchVal(bb)
      }), 250, zU.d))), sb = bb => {
        var Ub;
        null === (Ub = ab.current) || void 0 === Ub || Ub.classList.toggle("CreativeItemSlotsStale", bb)
      };
      (0, mb.f)(xA.d, (bb => {
        wb.setHeld(bb), bb || sb(!1)
      })), (0, Mb.useEffect)((() => wb.flush), [wb]);
      const gb = (0, vb.jsx)(Na.c, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Yb,
          maxLength: 1e4,
          onValueChange: (bb, ab) => {
            "" === wb.getTyped(tb.current.creativeSearchVal) && "" !== bb && Pb(null), wb.type(bb), sb(wb.isHeld())
          },
          onEnter: wb.flush,
          blurOnEnter: !0
        }),
        Cb = (0, vb.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Fb && (0, vb.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, vb.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                ob("up")
              },
              onPointerLeave: lb,
              onPointerUp: lb,
              children: (0, vb.jsx)(kb.e, {
                name: "arrow-up"
              })
            }), (0, vb.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                ob("down")
              },
              onPointerLeave: lb,
              onPointerUp: lb,
              children: (0, vb.jsx)(kb.e, {
                name: "arrow-up"
              })
            })]
          }), (0, vb.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: ab,
            children: [0 === Wb.length && "" !== Yb && (0, vb.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: jb("general:noResults")
            }), (0, vb.jsx)(VU.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Yb, fb],
              observerRoot: "CreativeItemSlots",
              observing: Xb,
              children: Wb.map((bb => {
                const ab = Ub + bb;
                return (0, vb.jsx)(lU.c, {
                  idx: ab,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Ab(ab),
                  pointerDown: Tb(ab),
                  pointerUp: Eb(ab)
                }, ab)
              }))
            })]
          })]
        });
      return (0, vb.jsxs)("div", {
        className: Xa()("CreativeItemSlotsWrapper", hb ? "WithRail" : "WithDropdown"),
        children: [hb && (0, vb.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Gb,
          style: {
            "--rail-height": Qb > 0 ? `${Qb}px` : void 0,
            "--tab-rows": Math.ceil(db.length / 2)
          },
          children: db.map((bb => (0, vb.jsx)(pA, {
            labelKey: fA(bb),
            isSelected: fb === bb,
            onSelect: () => {
              Ib(bb)
            },
            setHovered: Hb,
            children: (0, vb.jsx)(mA, {
              category: bb
            })
          }, null !== bb && void 0 !== bb ? bb : "all")))
        }), (0, vb.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, vb.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [gb, !hb && (0, vb.jsx)(NA, {
              categories: db,
              selectedCategory: fb,
              onSelect: Ib
            })]
          }), Cb]
        })]
      })
    }));

    function HA(bb) {
      var ab;
      return null !== (ab = (0, DA.h)(bb)) && void 0 !== ab ? ab : ""
    }

    function IA(bb, ab, Ub) {
      let {
        publicLobby: Ab,
        shownInGame: Mb
      } = ab;
      const Tb = bb.toLowerCase(),
        Eb = (0, ZA.creativeItemIds)(),
        Yb = bb => {
          var ab;
          const Tb = Eb[bb];
          return !(0, ZA.itemIsDisabled)(Tb, Ab, null === (ab = Mb[HA(Tb)]) || void 0 === ab || ab, Ub)
        };
      if ("" === Tb) return Eb.map(((bb, ab) => ab)).filter((bb => !(0, ZA.showOnlyInCreativeSearch)(Eb[bb]))).filter(Yb);
      const Bb = [];
      for (let eb = 0; eb < Eb.length; eb++) HA(Eb[eb]).toLowerCase().includes(Tb) && Bb.push(eb);
      Bb.sort(((bb, ab) => {
        const Ub = HA(Eb[bb]).toLowerCase(),
          Ab = HA(Eb[ab]).toLowerCase();
        return Ub.indexOf(Tb) - Ab.indexOf(Tb)
      }));
      for (const [eb, vb] of(0, ZA.creativeAltNames)())
        for (const bb of vb)
          if (bb.toLowerCase().includes(Tb)) {
            const bb = Eb.indexOf(eb);
            Bb.includes(bb) || Bb.push(bb)
          } return Bb.filter(Yb)
    }
    var dA = Ub(36160),
      FA = Ub(591);

    function hA(bb) {
      return bb > FA.i
    }

    function GA(bb) {
      const ab = bb / 2,
        Ub = [];
      for (let Ab = 0; Ab < ab / 6; Ab++)
        for (let bb = 0; bb < 12; bb++) {
          const Mb = bb < 6 ? 0 : ab;
          Ub.push(Mb + 6 * Ab + bb % 6)
        }
      return Ub
    }

    function QA(bb) {
      let {
        numSlots: ab,
        renderSlot: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Ob.A)(), Tb = (0, Mb.useRef)(null);
      var Eb;
      return Eb = Tb, (0, Mb.useLayoutEffect)((() => {
        var bb;
        const ab = null === (bb = Eb.current) || void 0 === bb ? void 0 : bb.closest(".InvenBody");
        if (!ab) return;
        const Ub = () => {
          ab.style.zoom = "";
          const bb = parseFloat(getComputedStyle(document.documentElement).fontSize),
            Ub = window.innerWidth - 2 * bb,
            Ab = ab.getBoundingClientRect().width;
          Ab > Ub && (ab.style.zoom = "" + Ub / Ab)
        };
        return Ub(), window.addEventListener("resize", Ub), () => {
          window.removeEventListener("resize", Ub), ab.style.zoom = ""
        }
      }), [Eb]), (0, vb.jsxs)("div", {
        ref: Tb,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, vb.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Ab("doubleChest:title")
        }), (0, vb.jsx)("div", {
          className: "GridItemSlots",
          children: GA(ab).map((bb => Ub(bb)))
        })]
      })
    }

    function qA(bb) {
      let {
        uT: ab,
        initialPasskey: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Ob.A)(), [Tb, Eb] = (0, Mb.useState)(Ub), [Yb, Bb] = (0, Mb.useState)(Ub);
      (0, Mb.useEffect)((() => {
        Eb(Ub), Bb(Ub)
      }), [...ab]);
      return (0, vb.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, vb.jsx)("div", {
          className: "SmallTextBold",
          children: Ab("ironChest:currentPasskey", {
            currentPasskey: Tb.join("")
          })
        }), (0, vb.jsx)(uU, {
          className: "IronChestPasskeyEditor",
          ve: Yb,
          onPasskeyUpdated: Bb,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            eb.gameBridge.send("changeIronChestPasskey", {
              pos: [...ab],
              ve: [...Yb]
            }), Eb([...Yb])
          }
        })]
      })
    }

    function uA(bb) {
      let {
        variation: ab,
        canCraft: Ub,
        show: Ab,
        creativeMounted: Mb,
        specialItemRef: Tb,
        draggedInfo: Eb,
        getSetHovering: Yb,
        getPointerDownForIdx: Bb,
        getPointerUpForIdx: eb,
        enchantingTablePosition: Lb,
        enchantingTableBlockName: Pb,
        selectedCraftable: Xb,
        dispatchSelectedCraftable: jb,
        creativeScrollDiv: Rb,
        creativeSearchVal: kb,
        setCreativeSearchVal: yb,
        creativeCategory: Zb,
        setCreativeCategory: Db,
        onCraft: zb
      } = bb;
      const {
        userContext: xb
      } = (0, ib.c)(), {
        t: fb
      } = (0, Ob.A)(), mb = (0, Nb.g)("inventory", (bb => bb.chest)), pb = (0, Nb.g)("inventory", (bb => bb.player.length)), Wb = (0, Nb.g)("inventory", (bb => bb.creative));
      if (0 === pb) return null;
      let Hb, Ib;
      const db = bb => {
          const ab = pb + bb;
          return (0, vb.jsx)(lU.c, {
            idx: ab,
            draggedInfo: Eb,
            specialItemInfo: Tb.current,
            setHovered: Yb(ab),
            pointerDown: Bb(ab),
            pointerUp: eb(ab)
          }, ab)
        },
        Fb = mb ? (0, dA.b)(mb.type) : null;
      if (Fb) Hb = Xa()("InvenLeftSideChestCustom", Fb.className), Ib = (0, vb.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Fb.render({
          uT: mb.pos,
          renderSlot: db
        })
      });
      else if (mb) {
        const bb = mb.pos,
          ab = "Iron" === mb.type || "Moonstone" === mb.type ? mb.type : "Standard";
        let Ub = !1,
          Ab = null;
        "Iron" === ab && (Ub = mb.ironChest.ownerDbId === xb.whamm, Ab = mb.ironChest.ve), Hb = `InvenLeftSideChest${ab}`;
        const Mb = hA(mb.numSlots);
        Ib = (0, vb.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [Ub && (0, vb.jsx)(qA, {
            uT: bb,
            initialPasskey: Ab
          }), Mb && (0, vb.jsx)(QA, {
            numSlots: mb.numSlots,
            renderSlot: db
          }), !Mb && (0, vb.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, vb.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: fb("Moonstone" === ab ? "item:moonstoneChest" : "Iron" === ab ? "item:ironChest" : "item:chest")
            }), (0, vb.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(mb.numSlots).fill(0).map(((bb, ab) => db(ab)))
            })]
          })]
        })
      } else if (!Wb || ab && Ub)
        if (Ub && "Enchanting Table" === ab) Hb = `InvenLeftSide${(null!==Pb&&void 0!==Pb?Pb:"").replace(/ /gi,"")}`, Ib = (0, vb.jsx)(tU, {
          specialItemInfo: Tb.current,
          setHovered: Yb,
          pointerDown: Bb(WU.d),
          pointerUp: eb(WU.d),
          enchantingTablePosition: Lb,
          enchantingTableBlockName: Pb
        });
        else if (Ub && "Salvaging Table" === ab) Hb = "InvenLeftSideSalvagingTable", Ib = (0, vb.jsx)(sU, {
        specialItemInfo: Tb.current,
        setSpecialItemInfo: bb => {
          Tb.current = bb
        },
        setHovered: Yb,
        pointerDown: Bb(WU.d),
        pointerUp: eb(WU.d)
      });
      else {
        if (!Ub) return null;
        Hb = `InvenLeftSide${(null!==ab&&void 0!==ab?ab:"HandCrafting").replace(/ /gi,"")}`, Ib = (0, vb.jsx)(yA, {
          show: Ab,
          onCraft: zb,
          craftingStation: ab,
          selectedCraftable: Xb,
          dispatchSelectedCraftable: jb,
          setHovered: Yb()
        })
      } else Hb = "InvenLeftSideCreative", Ib = Mb ? (0, vb.jsx)(WA, {
        creativeScrollDiv: Rb,
        playerInvenNumSlots: pb,
        getSetHoveringForIdx: Yb,
        getPointerDownForIdx: Bb,
        getPointerUpForIdx: eb,
        creativeSearchVal: kb,
        setCreativeSearchVal: yb,
        creativeCategory: Zb,
        setCreativeCategory: Db,
        show: Ab
      }) : null;
      const hb = !!mb || Ub && !!ab;
      return (0, vb.jsx)("div", {
        className: `InvenLeftSide ${Hb}`,
        "data-pad-inventory-start": hb ? "" : void 0,
        children: Ib
      })
    }
    var rA = Ub(580),
      KA = Ub(19762),
      oA = Ub(19765),
      lA = Ub(19767);
    const tA = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: Ub(19776)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: oA
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: lA
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: Ub(19785)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: KA
      }
    };

    function wA(bb) {
      const {
        sprite: ab,
        image: Ub
      } = tA[bb];
      return BU(ab, TU.h.ITEM, Ub)
    }

    function sA(bb) {
      let {
        draggedInfo: ab,
        specialItemInfo: Ub,
        craftFlyAnims: Ab,
        getSetHovering: Mb,
        getPointerDownForIdx: Tb,
        getPointerUpForIdx: Eb,
        variation: Yb,
        canCraft: Bb,
        isNewSlot: eb
      } = bb;
      const Lb = (0, Nb.g)("inventory", (bb => bb.player.length));
      return 0 === Lb ? null : (0, vb.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, vb.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(rA.b.length).fill(0).map(((bb, Pb) => {
            const Xb = Lb - rA.b.length + Pb;
            return (0, vb.jsx)(lU.c, {
              idx: Xb,
              draggedInfo: ab,
              specialItemInfo: Ub,
              craftFlyHoldbackInfo: (0, NU.i)(Ab, Xb),
              setHovered: Mb(Xb),
              pointerDown: Tb(Xb),
              pointerUp: Eb(Xb),
              defaultIconB64: wA(rA.b[Pb]),
              variation: Bb ? Yb : void 0,
              showNewDot: eb(Xb)
            }, Xb)
          }))
        }), (0, vb.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Lb - 10 - rA.b.length).fill(0).map(((bb, Pb) => {
            const Xb = Lb - rA.b.length - Pb - 1;
            return (0, vb.jsx)(lU.c, {
              idx: Xb,
              draggedInfo: ab,
              specialItemInfo: Ub,
              craftFlyHoldbackInfo: (0, NU.i)(Ab, Xb),
              setHovered: Mb(Xb),
              pointerDown: Tb(Xb),
              pointerUp: Eb(Xb),
              variation: Bb ? Yb : void 0,
              showNewDot: eb(Xb)
            }, Xb)
          }))
        })]
      })
    }
    var gA = Ub(36168),
      CA = Ub(36177);

    function VA(bb) {
      const {
        e: ab,
        idx: Ub
      } = bb, Ab = (0, pU.k)(bb.readInventory(), Ub), Mb = (0, pU.p)(ab);
      Ub === WU.c ? function(bb, ab) {
        const {
          draggedInfoRef: Ub,
          removeItem: Ab,
          removeDraggedInfoRef: Mb,
          close: Tb
        } = bb;
        if (Ub.current) {
          const bb = ab && Ub.current.amount || 1;
          Ab(Ub.current.idx, bb, !0) && (Ub.current.amount -= bb, Ub.current.amount <= 0 && Mb())
        } else ab && Tb()
      }(bb, Mb) : Ub === WU.d ? function(bb, ab) {
        const {
          e: Ub,
          draggedInfoRef: Ab,
          specialItemRef: Mb,
          moveAmtIntoSlot: Tb,
          removeDraggedInfoRef: Eb
        } = bb;
        if ((0, pU.w)(Ub) && Mb.current) Mb.current = null;
        else if (Ab.current && Mb.current && (Ab.current.idx === Mb.current.idx || (0, CA.b)(Ab.current, Mb.current)) && Ab.current.amount > 0 && Mb.current.amount > 0 && Mb.current.amount < QU.c.maxItemStackSize)
          if (Ab.current.idx === Mb.current.idx) {
            if (ab) {
              const bb = Math.min(Ab.current.amount, QU.c.maxItemStackSize - Mb.current.amount);
              Mb.current.amount += bb, Ab.current.amount -= bb
            } else Ab.current.amount--, Mb.current.amount++;
            Ab.current.amount <= 0 && Eb()
          } else if (ab) {
          const bb = Math.min(Ab.current.amount, QU.c.maxItemStackSize - Mb.current.amount);
          Tb(Mb.current.idx, bb) && (Mb.current.amount += bb)
        } else {
          Tb(Mb.current.idx, 1) && Mb.current.amount++
        } else if (!Ab.current || Mb.current || ab) {
          const bb = Ab.current;
          Ab.current = Mb.current, Mb.current = bb
        } else Ab.current.amount--, Mb.current = {
          idx: Ab.current.idx,
          name: Ab.current.name,
          attributes: Ab.current.attributes,
          amount: 1
        }
      }(bb, Mb) : (0, pU.w)(ab) ? function(bb, ab) {
        var Ub, Ab;
        const {
          idx: Mb,
          draggedInfoRef: Tb,
          specialItemRef: Eb,
          canCraft: Yb,
          variation: Bb,
          swapSlots: eb,
          moveIntoSlots: vb
        } = bb;
        if (!ab) return;
        let Lb = ab.amount;
        Mb === (null === (Ub = Tb.current) || void 0 === Ub ? void 0 : Ub.idx) && (Lb = Tb.current.amount <= 0 ? 0 : ab.amount - Tb.current.amount);
        Mb === (null === (Ab = Eb.current) || void 0 === Ab ? void 0 : Ab.idx) && (Lb = Eb.current.amount <= 0 ? 0 : ab.amount - Eb.current.amount);
        if (0 === Lb) return;
        const Pb = bb.readInventory(),
          Xb = Pb.player.length,
          jb = Pb.chest,
          Rb = Xb - rA.b.length,
          kb = () => {
            if (!(0, zU.d)()) return void vb(10, Rb, Mb, Lb);
            const bb = bb => {
              const Ub = (0, pU.k)(Pb, bb);
              return Ub ? {
                amount: Ub.amount,
                stacksWithMoved: (0, CA.b)(Ub, ab)
              } : null
            };
            for (const ab of ((bb, ab, Ub, Ab, Mb) => {
                const Tb = [];
                let Eb = Ab;
                if (null !== Ab) {
                  let Yb = 0;
                  for (let Ab = ab; Ab < Ub; Ab++) {
                    const ab = bb(Ab);
                    null !== ab && void 0 !== ab && ab.stacksWithMoved && null !== ab.amount && ab.amount > 0 && (Yb += Math.max(0, Mb - ab.amount))
                  }
                  const Bb = Math.min(Ab, Yb);
                  if (Bb > 0 && (Tb.push({
                      start: ab,
                      end: Ub,
                      amount: Bb
                    }), Eb = Ab - Bb), Eb <= 0) return Tb
                }
                for (let Yb = Ub - 1; Yb >= ab; Yb--)
                  if (null === bb(Yb)) {
                    Tb.push({
                      start: Yb,
                      end: Yb + 1,
                      amount: Eb
                    });
                    break
                  } return Tb
              })(bb, 10, Rb, Lb, QU.c.maxItemStackSize)) vb(ab.start, ab.end, Mb, ab.amount)
          };
        if (!Yb || "Enchanting Table" !== Bb && "Salvaging Table" !== Bb) {
          const Ub = (0, pb.rb)(ab.name),
            Ab = Ub ? (0, pb.nb)(Ub) : null;
          if (!rA.b.includes(Ub) || Mb !== Ab && (0, pU.l)(Pb, bb.itemInfo, Ab, Mb))
            if (jb)
              if (Mb < Xb) {
                var yb, Zb;
                const [bb, ab] = null !== (yb = null === (Zb = (0, dA.b)(jb.type)) || void 0 === Zb ? void 0 : Zb.quickMoveRange) && void 0 !== yb ? yb : [0, jb.numSlots];
                vb(Xb + bb, Xb + ab, Mb, Lb)
              } else vb(0, Xb - rA.b.length, Mb, Lb);
          else Pb.creative ? Mb < 10 ? kb() : Mb < Xb ? vb(0, 10, Mb, Lb) : vb(0, Xb - rA.b.length, Mb, null !== ab.amount ? QU.c.maxItemStackSize : null) : Mb < 10 ? kb() : vb(0, 10, Mb, Lb);
          else Mb < Xb - rA.b.length || Mb >= Xb ? eb(Ab, Mb) : (vb(0, Xb - rA.b.length, Ab, Lb), fU.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Eb.current = {
          idx: Mb,
          name: ab.name,
          attributes: ab.attributes,
          amount: null !== ab.amount ? Lb : 0
        }
      }(bb, Ab) : bb.draggedInfoRef.current ? function(bb, ab, Ub, Ab) {
        const {
          draggedInfoRef: Mb,
          specialItemRef: Tb,
          moveAmtIntoSlot: Eb,
          swapSlots: Yb,
          removeItem: Bb,
          removeDraggedInfoRef: eb
        } = bb, vb = bb.readInventory(), Lb = Mb.current.idx;
        if (Ub && (ab === Lb || (0, CA.b)(Mb.current, Ub)) && Mb.current.amount > 0 && (0, pU.e)(Ub) > 0 && (Ub.amount < QU.c.maxItemStackSize || ab === Lb)) Ab ? Ub.amount + Mb.current.amount <= QU.c.maxItemStackSize || ab === Lb ? Eb(ab, Mb.current.amount) : Eb(ab, QU.c.maxItemStackSize - Ub.amount) : Eb(ab, 1);
        else if (Mb.current.amount > 0 && !Ub) Eb(ab, Ab ? Mb.current.amount : 1);
        else if (Ab || Ub || 0 === Mb.current.amount)
          if (vb.creative && !vb.chest && ab >= vb.player.length) {
            const bb = 0 === Mb.current.amount ? 1 : Mb.current.amount;
            Bb(Mb.current.idx, bb, !1) && eb()
          } else {
            var Pb;
            const Ub = (null === (Pb = Tb.current) || void 0 === Pb ? void 0 : Pb.idx) === ab;
            if (Yb(ab, Mb.current.idx)) {
              const Ab = bb.readInventory(),
                Eb = (0, pU.k)(Ab, Lb),
                Yb = !Ab.chest && Ab.creative && Mb.current.idx >= Ab.player.length;
              if (Eb && Mb.current.idx !== ab && !Yb) {
                let bb = (0, pU.e)(Eb);
                Ub && (bb -= Tb.current.amount), Mb.current = Ub && 0 === bb ? null : {
                  idx: Mb.current.idx,
                  name: Eb.name,
                  attributes: Eb.attributes,
                  amount: bb
                }
              } else eb()
            }
          }
        else Eb(ab, 1)
      }(bb, Ub, Ab, Mb) : function(bb, ab, Ub, Ab) {
        var Mb;
        const {
          draggedInfoRef: Tb,
          specialItemRef: Eb
        } = bb;
        if (!Ub) return;
        let Yb = (0, pU.e)(Ub);
        const Bb = (null === (Mb = Eb.current) || void 0 === Mb ? void 0 : Mb.idx) === ab;
        Bb && (Yb -= Eb.current.amount);
        Ab || (Yb = Math.ceil(Yb / 2));
        Tb.current = Bb && 0 === Yb ? null : {
          idx: ab,
          name: Ub.name,
          attributes: Ub.attributes,
          amount: Yb
        }
      }(bb, Ub, Ab, Mb)
    }

    function OA(bb, ab) {
      return !!ab && ab.name === bb.name
    }

    function cA() {
      return eb.gameBridge.latest("inventory")
    }

    function JA(bb, ab, Ub) {
      return eb.gameBridge.send("removeInventoryItem", {
        slot: bb,
        amount: ab,
        drop: Ub
      })
    }

    function nA(bb) {
      return (0, pU.g)(bb, eb.gameBridge.latest("itemInfo"), eb.gameBridge.latest("stationItems").enchantable)
    }

    function SA(bb) {
      let {
        show: ab,
        close: Ub,
        canCraft: Ab,
        variation: Tb,
        inventoryItemsMoveable: Eb,
        setCraftFlyAnims: Yb
      } = bb;
      (0, Nb.k)("itemInfo");
      const [Bb, vb] = (0, Mb.useState)(null), [Lb, Pb] = (0, Mb.useState)(null), [Xb, jb] = (0, Mb.useState)(!1), Rb = (0, Mb.useRef)(null), kb = (0, Mb.useRef)(null), yb = (0, Mb.useRef)(null), Zb = (0, Mb.useRef)(null), [Db, zb] = (0, Mb.useReducer)((bb => bb + 1), 0), xb = (0, Mb.useCallback)((() => {
        ab && zb()
      }), [ab, zb]), ib = (0, Mb.useCallback)((() => {
        kb.current = null, Qb.current = null, xb()
      }), [xb]), fb = (0, Mb.useCallback)(((bb, ab) => {
        Yb((Ub => Ub.map((Ub => "ingredient" === Ub.kind ? Ub : Ub.Qv === bb ? {
          ...Ub,
          Qv: ab,
          to: (0, pU.f)(ab)
        } : Ub.Qv === ab ? {
          ...Ub,
          Qv: bb,
          to: (0, pU.f)(bb)
        } : Ub))))
      }), [Yb]), mb = (0, Mb.useCallback)(((bb, ab) => {
        const Ub = rb.current;
        if (Ub.x = bb, Ub.y = ab, Rb.current) !Kb.current.isTouch || Kb.current.itemBeingDragged && !Qb.current ? (Rb.current.style.transform = `translate(${Ub.x}px, ${Ub.y}px)`, jb(Kb.current.isTouch && !Qb.current)) : (Rb.current.style.transform = "translate(0.5rem, 0.5rem)", jb(!0));
        else if (Zb.current) {
          const Ub = Zb.current;
          let Ab = bb + 10,
            Mb = ab + 10;
          const Tb = Ub.offsetWidth,
            Eb = Ub.offsetHeight;
          Ab + Tb > window.innerWidth && (Ab = bb - Tb - 10), Mb + Eb > window.innerHeight && (Mb = ab - Eb - 10), Ab < 0 && (Ab = 0), Mb < 0 && (Mb = 0), Zb.current.style.transform = `translate(${Ab}px, ${Mb}px)`
        }
      }), []), Wb = (0, Mb.useCallback)((bb => (ab, Ub, Ab) => {
        if (vb(ab && void 0 !== bb ? bb : null), ab) {
          if (void 0 === bb && !Ub) return void(0, gA.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== bb) {
            var Mb;
            const ab = cA();
            let Ub;
            if (Ub = bb === WU.d ? yb.current ? (0, pU.k)(ab, yb.current.idx) : null : (0, pU.k)(ab, bb), !Ub) return void Pb(null);
            if ((null === (Mb = yb.current) || void 0 === Mb ? void 0 : Mb.idx) === bb) {
              if (0 === (0, pU.e)(Ub) - yb.current.amount) return void Pb(null)
            }
            Pb(nA(Ub))
          } else Pb({
            name: Ub.name,
            desc: Ub.desc,
            fontStyle: "normal"
          })
        } else Pb(null);
        Ab && setTimeout((() => {
          mb(Ab.pageX, Ab.pageY)
        }), 0)
      }), [mb]), Hb = (0, Mb.useCallback)(((bb, ab) => {
        const Ub = eb.gameBridge.send("moveInventoryItem", {
          from: kb.current.idx,
          to: bb,
          amount: ab
        });
        return Ub ? (kb.current.amount -= ab, kb.current.amount <= 0 && ib()) : console.error("moveInventoryItem failed"), Ub
      }), [ib]), Ib = (0, Mb.useCallback)(((bb, ab) => {
        const Ub = yb.current,
          Ab = null === Ub || void 0 === Ub ? void 0 : Ub.idx;
        Ub && (Ub.idx = function(bb, ab, Ub) {
          return bb === ab ? Ub : bb === Ub ? ab : bb
        }(Ab, bb, ab));
        const Mb = eb.gameBridge.send("swapInventorySlots", {
          a: bb,
          b: ab
        });
        return Mb ? fb(bb, ab) : Ub && (Ub.idx = Ab), Mb
      }), [fb]), db = (0, Mb.useCallback)(((bb, ab, Ub, Ab) => {
        const Mb = eb.gameBridge.send("quickMoveInventoryItem", {
          slot: Ub,
          start: bb,
          end: ab,
          amount: Ab
        });
        null !== Mb && fb(Ub, Mb)
      }), [fb]), Fb = (0, Mb.useCallback)(((bb, ab) => {
        var Mb;
        ((bb, ab, Ub) => {
          const Ab = bb - (Ub - rA.b.length);
          return !(!ab || Ab < 0 || Ab >= rA.b.length) && (0, pb.rb)(ab) !== rA.b[Ab]
        })(ab, null === (Mb = kb.current) || void 0 === Mb ? void 0 : Mb.name, cA().player.length) || (VA({
          e: bb,
          idx: ab,
          readInventory: cA,
          itemInfo: eb.gameBridge.latest("itemInfo"),
          draggedInfoRef: kb,
          specialItemRef: yb,
          moveAmtIntoSlot: Hb,
          swapSlots: Ib,
          moveIntoSlots: db,
          removeItem: JA,
          removeDraggedInfoRef: ib,
          close: Ub,
          canCraft: Ab,
          variation: Tb
        }), xb())
      }), [Ab, Ub, Hb, db, ib, Ib, Tb, xb]), hb = (0, Mb.useRef)(0), Gb = (0, Mb.useRef)(null), Qb = (0, Mb.useRef)(null), qb = (0, Mb.useRef)(null), ub = (0, Mb.useRef)(new Set), rb = (0, Mb.useRef)({
        x: 0,
        y: 0
      }), Kb = (0, Mb.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), ob = (0, Mb.useCallback)((() => (qb.current = null, Kb.current.itemBeingDragged = !1, clearTimeout(Gb.current), !!Qb.current && (Qb.current = null, xb(), !0))), [xb]);
      (0, Mb.useEffect)((() => {
        ob(), ub.current.clear()
      }), [ab]);
      const lb = bb => void 0 !== bb && (ub.current.has(bb) || null !== qb.current && bb !== qb.current),
        tb = bb => {
          Kb.current.isTouch = (0, pU.r)(bb)
        },
        wb = (0, Mb.useCallback)((bb => ab => {
          const Ab = (0, pU.r)(ab);
          if (Ab || mb(ab.pageX, ab.pageY), Eb)
            if (lb(ab.pointerId)) void 0 !== ab.pointerId && ub.current.add(ab.pointerId);
            else {
              if (tb(ab), Ab) {
                hb.current = ab.timeStamp, Kb.current.itemBeingDragged = !0, qb.current = ab.pointerId;
                const Ub = (0, pU.k)(cA(), bb);
                if (Ub && Ub.amount && Ub.amount > 0) {
                  const Ub = ab.pageX,
                    Ab = ab.pageY,
                    Mb = rb.current.x,
                    Tb = rb.current.y;
                  clearTimeout(Gb.current), Gb.current = setTimeout((() => {
                    if (kb.current && kb.current.idx === bb && (Math.abs(Ub - rb.current.x) < 20 && Math.abs(Ab - rb.current.y) < 20 || Mb === rb.current.x && Tb === rb.current.y) && Kb.current.itemBeingDragged) {
                      const bb = cA(),
                        Ub = bb.creative && !bb.chest && kb.current.idx >= QU.c.numInvenSlots && null !== (0, pU.k)(bb, kb.current.idx).amount ? QU.c.maxItemStackSize : kb.current.amount;
                      Qb.current = {
                        initTouchX: ab.pageX,
                        initTouchY: ab.pageY,
                        maxAmount: Ub
                      }, kb.current.amount = Math.ceil(kb.current.amount / 2), Rb.current.style.transform = "translate(0.5rem, 0.5rem)", jb(!0), xb()
                    }
                  }), 500)
                }
              }
              Fb(ab, bb)
            }
          else bb === WU.c && (0, pU.p)(ab) && Ub()
        }), [mb, Fb, Eb, Ub, xb]),
        sb = (0, Mb.useCallback)((bb => bb => {
          if (lb(bb.pointerId)) return;
          const ab = (0, pU.r)(bb);
          if (tb(bb), !ob()) {
            if (ab && kb.current && bb.timeStamp - hb.current > 150) {
              const ab = document.elementFromPoint(bb.clientX, bb.clientY);
              if (null !== ab) {
                const Ub = ab.getAttribute("data-inven-idx");
                null !== Ub ? Fb(bb, parseInt(Ub)) : ab.classList.contains("InventoryBackgroundScreen") && Fb(bb, -1)
              }
            }
            mb(bb.pageX, bb.pageY)
          }
        }), [mb, Fb, ob]);
      (0, Mb.useEffect)((() => {
        let bb;
        const Ub = ["pointerup", "pointercancel"],
          Ab = bb => {
            ub.current.has(bb.pointerId) ? setTimeout((() => {
              ub.current.delete(bb.pointerId)
            }), 0) : bb.pointerId === qb.current && setTimeout((() => {
              qb.current === bb.pointerId && ob()
            }), 0)
          };
        if (ab) {
          for (const bb of Ub) document.addEventListener(bb, Ab, !0);
          if (!Kb.current.isTouch) {
            const bb = rb.current;
            mb(bb.x, bb.y)
          }
          bb = bb => {
            bb.preventDefault(), lb(bb.pointerId) || (tb(bb), mb(bb.pageX, bb.pageY), Qb.current && bb.pointerId === qb.current && (bb => {
              if (!kb.current) return Qb.current = null, void xb();
              const {
                initTouchX: ab,
                maxAmount: Ub
              } = Qb.current, Ab = (bb.pageX - ab) * Qb.current.maxAmount / 160, Mb = Math.ceil(Ub / 2) + Math.ceil(Ab);
              kb.current.amount = Math.min(Ub, Math.max(1, Mb)), xb()
            })(bb))
          }, document.addEventListener("pointermove", bb, !0)
        }
        return () => {
          document.removeEventListener("pointermove", bb, !0);
          for (const bb of Ub) document.removeEventListener(bb, Ab, !0)
        }
      }));
      const gb = (0, Mb.useCallback)((() => {
          if (kb.current) {
            const bb = (0, pU.k)(cA(), kb.current.idx);
            (!OA(kb.current, bb) || bb.amount < kb.current.amount) && ib()
          }
        }), [ib]),
        Cb = (0, Mb.useCallback)((() => {
          const bb = kb.current;
          if (bb) {
            const ab = (0, pU.k)(cA(), bb.idx);
            OA(bb, ab) && (bb.attributes = ab.attributes)
          }
        }), []);
      return {
        draggedDomRef: Rb,
        draggedInfoRef: kb,
        specialItemRef: yb,
        hoverInfoDomRef: Zb,
        longHoldSplitInfoRef: Qb,
        currHoveredIdx: Bb,
        currHoveredDisplayInfo: Lb,
        displayDraggedItemName: Xb,
        forceRerenderIfVisible: xb,
        removeDraggedInfoRef: ib,
        checkDraggedItemConsistencyWithInven: gb,
        refreshDraggedAttributes: Cb,
        swapSlots: Ib,
        getPointerDownForIdx: wb,
        getPointerUpForIdx: sb,
        getSetHovering: Wb,
        setCurrHoveredDisplayInfo: Pb,
        moveFollowerTo: mb
      }
    }
    class bM {
      constructor(bb) {
        this.snapshot = [], this.newSlots = new Set, this.update(bb, !1)
      }
      update(bb, ab) {
        const Ub = bb.map((bb => {
          var ab;
          return bb ? {
            name: bb.name,
            amount: null !== (ab = bb.amount) && void 0 !== ab ? ab : 1
          } : null
        }));
        Ub.forEach(((bb, Ub) => {
          const Ab = this.snapshot[Ub],
            Mb = (null === bb || void 0 === bb ? void 0 : bb.name) !== (null === Ab || void 0 === Ab ? void 0 : Ab.name);
          (!bb || Mb || bb.amount < Ab.amount) && this.newSlots.delete(Ub), ab && bb && (Mb || bb.amount > Ab.amount) && this.newSlots.add(Ub)
        })), this.snapshot = Ub
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(bb) {
        return this.newSlots.has(bb)
      }
    }
    const aM = (bb, ab, Ub) => ({
      button: ab,
      shiftKey: Ub,
      pageX: bb.clientX,
      pageY: bb.clientY,
      clientX: bb.clientX,
      clientY: bb.clientY,
      pointerType: "mouse"
    });

    function UM(bb) {
      const [ab, Ub] = (0, Mb.useState)(bb);
      return bb && !ab && Ub(!0), (0, Mb.useEffect)((() => {
        if (ab) return;
        let bb = !0;
        const Ab = () => {
            bb && (bb = !1, Ub(!0))
          },
          Mb = "function" === typeof window.requestIdleCallback,
          Tb = Mb ? window.requestIdleCallback(Ab, {
            timeout: 2e3
          }) : void 0,
          Eb = setTimeout(Ab, Mb ? 2e3 : 1e3);
        return () => {
          bb = !1, clearTimeout(Eb), void 0 !== Tb && window.cancelIdleCallback(Tb)
        }
      }), [ab]), ab
    }
    const AM = (0, Mb.memo)((function(bb) {
      var ab;
      let {
        show: Ub,
        onOpen: Ab,
        onClose: Tb,
        variation: Yb
      } = bb;
      const Lb = (0, Mb.useRef)(null),
        Pb = (0, Mb.useRef)(null),
        Xb = function(bb) {
          const [ab, Ub] = (0, Mb.useState)(!0), [Ab, Tb] = (0, Mb.useState)(!1), Eb = (0, Mb.useRef)(null), Yb = (0, Mb.useRef)(null), eb = (0, Bb.h)("_shield"), vb = (0, Mb.useRef)(null), Lb = (0, Bb.h)("_health"), Pb = (0, Mb.useRef)(null);

          function Xb(bb) {
            const ab = Date.now() + bb;
            ab < Yb.current || (Ub(!1), clearTimeout(Eb.current), Yb.current = ab, Eb.current = setTimeout((() => {
              Ub(!0)
            }), bb))
          }
          return (0, Mb.useEffect)((() => {
            Xb(IU);
            const bb = jb.m.subscribe("requestingPlayVideoAd", (() => {
              Xb(IU)
            }));
            return () => {
              clearTimeout(Eb.current), jb.m.unsubscribe(bb)
            }
          }), []), (0, Mb.useEffect)((() => {
            (vb.current > eb || Pb.current > Lb) && Xb(6e4), vb.current = eb, Pb.current = Lb
          }), [eb, Lb]), (0, Mb.useEffect)((() => {
            let ab = null;
            return bb ? ab = setTimeout((() => {
              Tb(!0)
            }), 250) : Tb(!1), () => {
              clearTimeout(ab)
            }
          }), [bb]), ab && Ab
        }(Ub);
      (0, mb.i)(ZU.e, null);
      const Rb = (0, ZU.l)(),
        kb = Rb.some((bb => bb.panel)),
        yb = (0, Nb.g)("inventory", (bb => null !== bb.chest && (null !== bb.chest.ironChest || hA(bb.chest.numSlots)))),
        Zb = UM(Ub),
        Db = UM(Ub),
        [zb, xb] = (0, Mb.useState)([]),
        ib = (0, Mb.useCallback)((bb => {
          xb((ab => ab.filter((ab => ab.id !== bb))))
        }), []),
        fb = (0, Mb.useRef)(null),
        Wb = (0, Mb.useRef)(0),
        Hb = (0, Mb.useCallback)((() => {
          fb.current && (Wb.current = fb.current.scrollTop), Tb()
        }), [Tb]),
        Ib = (0, Bb.h)("inventoryItemsMoveable"),
        db = (0, Bb.h)("canCraft"),
        {
          clientEscMenuOptions: Fb
        } = (0, Kb.n)(["clientEscMenuOptions"]),
        hb = (0, Mb.useRef)(null);
      hb.current || (hb.current = new bM(eb.gameBridge.latest("inventory").player));
      const Qb = hb.current,
        {
          draggedDomRef: qb,
          draggedInfoRef: ub,
          specialItemRef: rb,
          hoverInfoDomRef: ob,
          longHoldSplitInfoRef: lb,
          currHoveredIdx: tb,
          currHoveredDisplayInfo: wb,
          displayDraggedItemName: sb,
          forceRerenderIfVisible: gb,
          removeDraggedInfoRef: Cb,
          checkDraggedItemConsistencyWithInven: Vb,
          refreshDraggedAttributes: Ob,
          swapSlots: cb,
          getPointerDownForIdx: Jb,
          getPointerUpForIdx: nb,
          getSetHovering: Sb,
          setCurrHoveredDisplayInfo: ba,
          moveFollowerTo: aa
        } = SA({
          show: Ub,
          close: Hb,
          canCraft: db,
          variation: Yb,
          inventoryItemsMoveable: Ib,
          setCraftFlyAnims: xb
        });
      (0, Mb.useEffect)((() => {
        const bb = !Ub && null !== eb.gameBridge.latest("inventory").chest;
        if (bb && eb.gameBridge.send("closeChest", null), Ub || (Qb.clearMarks(), Sb(null)(!1)), bb) {
          fU.c.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [Ub]), (0, Nb.c)("chestToggled", (bb => {
        if (bb ? Ab() : Ub && Hb(), bb) {
          fU.c.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Ua = (0, Ca.m)();
      (0, Nb.c)("inventory", (bb => {
        let {
          player: ab
        } = bb;
        var Ab, Mb, Tb;
        (Qb.update(ab, !Ub && Ua.shown), rb.current) && (rb.current = (Mb = rb.current, Tb = null !== (Ab = ab[rb.current.idx]) && void 0 !== Ab ? Ab : null, OA(Mb, Tb) ? (Mb.attributes = Tb.attributes, null !== Tb.amount && Mb.amount > Tb.amount && (Mb.amount = Tb.amount), Mb) : null));
        Ob(), null !== tb && Sb(tb)(!0), gb()
      })), (0, Mb.useEffect)((() => (eb.gameBridge.send("setInventoryOpen", Ub), () => {
        eb.gameBridge.send("setInventoryOpen", !1)
      })), [Ub]);
      const Aa = (bb, ab) => {
        if (bb === WU.d) return void(bb => {
          const ab = rb.current;
          if (!ab || null === (0, pU.k)(eb.gameBridge.latest("inventory"), ab.idx)) return;
          const Ub = bb ? Math.max(ab.amount, 1) : 1,
            Ab = ab.amount - Ub;
          if (!eb.gameBridge.send("removeInventoryItem", {
              slot: ab.idx,
              amount: Ub,
              drop: !0
            })) return;
          const Mb = rb.current;
          Mb && (Mb.amount = Math.min(Mb.amount, Ab), Mb.amount <= 0 && (rb.current = null)), gb()
        })(ab);
        const Ub = null === bb ? null : (0, pU.k)(eb.gameBridge.latest("inventory"), bb);
        if (null !== Ub) {
          var Ab, Mb, Tb;
          const Eb = ab && null !== (Ab = Ub.amount) && void 0 !== Ab ? Ab : 1;
          eb.gameBridge.send("removeInventoryItem", {
            slot: bb,
            amount: Eb,
            drop: !0
          }), bb === (null === (Mb = ub.current) || void 0 === Mb ? void 0 : Mb.idx) && (ub.current.amount -= Eb, ub.current.amount <= 0 && Cb(), gb()), bb === (null === (Tb = rb.current) || void 0 === Tb ? void 0 : Tb.idx) && (rb.current = null, gb())
        }
      };
      (0, Nb.c)("inventoryDropRequested", (bb => {
        Ub && tb !== WU.d && Aa(tb, bb)
      }));
      const Ma = (bb, ab) => {
        let Ub = ab;
        if (ab === WU.d) {
          if (!rb.current) return;
          Ub = rb.current.idx
        }
        const Ab = cb(bb, Ub);
        if (Ab && ub.current && (ub.current.idx === Ub ? ub.current.idx = bb : ub.current.idx === bb && (ub.current.idx = Ub)), Ab && ab === WU.d) {
          const bb = (0, pU.k)(eb.gameBridge.latest("inventory"), Ub);
          rb.current = bb ? {
            idx: Ub,
            name: bb.name,
            attributes: bb.attributes,
            amount: bb.amount
          } : null
        }
        gb()
      };
      (0, Nb.c)("numberKeyPressed", (bb => {
        null !== tb && Ub && Ma(bb - 1, tb)
      })), (0, Mb.useEffect)((() => {
        Ub || (rb.current = null, Cb(), ba(null))
      }), [Ub, Cb, ba, rb]);
      const Ta = rb.current;
      (0, Mb.useEffect)((() => {
        tb === WU.d && Sb(WU.d)(!0)
      }), [Ta, tb, Sb]);
      const Ea = () => {
        Vb(), Ob(), gb()
      };
      (0, Nb.c)("chestRefreshed", Ea), (0, Nb.c)("inventorySynced", Ea);
      const [Ya, Ba] = (0, Mb.useState)(new Map), ea = null !== (ab = Ya.get(Yb)) && void 0 !== ab ? ab : null, va = (bb, ab) => {
        Ba((Ub => {
          const Ab = Ub.get(bb);
          return Ab && Ab.name === ab.name && Ab.Tv === ab.Tv ? Ub : new Map(Ub).set(bb, ab)
        }))
      };
      (0, mb.f)("craftingRecipesEdited", (() => {
        gb()
      })), (0, mb.f)(MA.b, (bb => {
        let {
          variation: ab,
          itemName: Ub
        } = bb;
        va(ab, {
          name: Ub,
          Tv: 0
        })
      }));
      const [La, Pa] = (0, Mb.useState)(null), [ja, Ra] = (0, Mb.useState)(null);
      (0, Nb.c)("enchantingTableOpened", (bb => {
        let {
          position: ab,
          blockName: Ub
        } = bb;
        Pa(ab), Ra(Ub)
      }));
      const [ka, ya] = (0, Mb.useState)(""), [Za, Da] = (0, Mb.useState)(null);
      (0, Mb.useEffect)((() => {
        Ub && fb.current && (fb.current.scrollTop = Wb.current)
      }), [Ub]);
      return (bb => {
        const ab = (0, Mb.useRef)(bb);
        ab.current = bb, (0, Mb.useEffect)((() => {
          if (!bb.show) return;
          const Ub = (bb, Ub, Ab, Mb) => {
              const {
                getPointerDownForIdx: Tb,
                getPointerUpForIdx: Eb
              } = ab.current;
              Tb(bb)(aM(Ub, Ab, Mb)), Eb(bb)(aM(Ub, Ab, Mb))
            },
            Ab = {
              primary: (bb, ab) => {
                Ub(bb, ab, 0, !1)
              },
              secondary: (bb, ab) => {
                Ub(bb, ab, 2, !1)
              },
              quickMove: (bb, ab) => {
                Ub(bb, ab, 0, !0)
              },
              dropHeld: (bb, Ub) => {
                ab.current.getPointerDownForIdx(WU.c)(aM(Ub, bb ? 0 : 2, !1))
              },
              dropSlot: (bb, Ub) => {
                ab.current.dropFromIdx(bb, Ub)
              },
              swapWithHotbar: (bb, Ub) => {
                ab.current.swapWithHotbar(bb, Ub)
              },
              cancel: () => {
                ab.current.removeDraggedInfoRef()
              },
              isHolding: () => !!ab.current.draggedInfoRef.current,
              hasItemAt: bb => {
                const {
                  draggedInfoRef: Ub,
                  specialItemRef: Ab
                } = ab.current;
                if (bb === WU.d) return !!Ab.current;
                const Mb = (0, pU.k)(eb.gameBridge.latest("inventory"), bb);
                return !!Mb && (0, lU.d)(bb, (0, pU.e)(Mb), [Ub.current, Ab.current]).shown
              },
              hover: (bb, Ub) => {
                const {
                  moveFollowerTo: Ab,
                  getSetHovering: Mb
                } = ab.current;
                Ab(Ub.clientX, Ub.clientY), Mb(null !== bb && void 0 !== bb ? bb : void 0)(null !== bb, void 0, {
                  pageX: Ub.clientX,
                  pageY: Ub.clientY
                })
              },
              moveTo: bb => {
                ab.current.moveFollowerTo(bb.clientX, bb.clientY)
              },
              close: () => {
                ab.current.close()
              }
            };
          return (0, DU.l)(Ab)
        }), [bb.show])
      })({
        show: Ub,
        close: Hb,
        draggedInfoRef: ub,
        specialItemRef: rb,
        getPointerDownForIdx: Jb,
        getPointerUpForIdx: nb,
        getSetHovering: Sb,
        moveFollowerTo: aa,
        removeDraggedInfoRef: Cb,
        dropFromIdx: Aa,
        swapWithHotbar: Ma
      }), (0, Mb.useEffect)((() => {
        jb.m.IR("inventoryDraggedItemUpdated", {
          draggedInfo: ub.current,
          specialItemInfo: rb.current,
          setHovered: Sb,
          pointerDown: Jb,
          pointerUp: nb,
          variation: db ? Yb : void 0,
          craftFlyAnims: zb
        })
      })), (0, vb.jsxs)(Gb.d, {
        show: Ub,
        style: {
          touchAction: Ub ? "none" : void 0
        },
        children: [ub.current && (0, vb.jsx)(FU, {
          draggedInfo: ub.current,
          toAddRef: qb
        }), ub.current && sb && (0, vb.jsx)(hU, {
          className: "DraggedInvenItemName",
          displayInfo: nA(ub.current),
          domRef: null
        }), !ub.current && wb && (0, vb.jsx)(hU, {
          displayInfo: wb,
          domRef: ob
        }), lb.current && ub.current && (0, vb.jsx)(GU, {
          info: lb.current,
          draggedInfo: ub.current
        }), zb.map((bb => (0, vb.jsx)(NU.c, {
          anim: bb,
          onComplete: ib
        }, bb.id))), (0, vb.jsx)(Eb.d, {
          show: Ub,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Hb,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: Jb(WU.c),
          pointerUp: nb(WU.c),
          doGameplayStartStopOnShow: !0
        }), Zb && (0, vb.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, vb.jsx)("div", {
            ref: Lb,
            className: "InventoryAdOuter",
            children: (0, vb.jsx)(mU.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Lb
              },
              verticalAlign: "start",
              showing: Ub && Xb,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, vb.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, vb.jsxs)("div", {
              className: Xa()("Inventory", {
                WithPanelButtons: kb,
                WideChestOpen: yb
              }),
              children: [(0, vb.jsx)("div", {
                className: "InventoryFiller"
              }), (0, vb.jsx)(iU, {
                show: Ub,
                buttons: Rb
              }), (0, vb.jsxs)("div", {
                className: "InvenBody",
                children: [(0, vb.jsx)(uA, {
                  variation: Yb,
                  canCraft: db,
                  show: Ub,
                  creativeMounted: Db,
                  specialItemRef: rb,
                  draggedInfo: ub.current,
                  getSetHovering: Sb,
                  getPointerDownForIdx: Jb,
                  getPointerUpForIdx: nb,
                  enchantingTablePosition: La,
                  enchantingTableBlockName: ja,
                  selectedCraftable: ea,
                  dispatchSelectedCraftable: bb => {
                    va(Yb, bb)
                  },
                  creativeScrollDiv: fb,
                  creativeSearchVal: ka,
                  setCreativeSearchVal: ya,
                  creativeCategory: Za,
                  setCreativeCategory: Da,
                  onCraft: function(bb, ab) {
                    let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Vb(), (bb || Ub.length > 0) && xb((ab => {
                        const Ab = [...ab],
                          Mb = ab.filter((bb => "ingredient" === bb.kind)).length;
                        for (const bb of Ub.slice(0, Math.max(0, 24 - Mb))) Ab.push({
                          id: (0, NU.f)(),
                          ...bb,
                          to: bb.to
                        });
                        return bb && Ab.push({
                          id: (0, NU.f)(),
                          ...bb,
                          to: (0, pU.f)(bb.Qv)
                        }), Ab
                      })), null !== ab) {
                      var Ab;
                      const bb = eb.gameBridge.latest("inventory");
                      (0, pb.rb)(null === (Ab = (0, pU.k)(bb, ab)) || void 0 === Ab ? void 0 : Ab.name) ? Jb(ab)({
                        button: 0,
                        shiftKey: !0
                      }): cb(ab, bb.selectedSlot)
                    }
                  }
                }), (0, vb.jsx)(sA, {
                  draggedInfo: ub.current,
                  specialItemInfo: rb.current,
                  craftFlyAnims: zb,
                  getSetHovering: Sb,
                  getPointerDownForIdx: Jb,
                  getPointerUpForIdx: nb,
                  variation: Yb,
                  canCraft: db,
                  isNewSlot: bb => Fb.showNewItemIndicator && Qb.isNew(bb)
                })]
              })]
            }), (0, vb.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, vb.jsx)("div", {
                ref: Pb,
                className: "InventoryAd",
                children: (0, vb.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var MM = Ub(1335),
      TM = Ub(137);
    const EM = (0, Mb.memo)((function(bb) {
      let {
        show: ab,
        onOpen: Ub,
        onClose: Ab
      } = bb;
      const Tb = (0, Mb.useRef)(0),
        Yb = () => (0, MM.g)() && !(0, MM.o)() && Tb.current <= 2;
      ab = Yb() && ab;
      const Bb = () => {
        Tb.current++, Ab()
      };
      (0, mb.f)("ctrlCrouchWithoutFullscreen", (() => {
        Yb() && Ub()
      })), (0, mb.f)("displaymodeFullscreenChange", (bb => {
        ab && bb && Bb()
      }));
      const eb = "crazygames" === TM.p;
      return (0, vb.jsx)(Eb.d, {
        close: Bb,
        escDoesExit: !0,
        show: ab,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, vb.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, vb.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), eb && (0, vb.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, vb.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, vb.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!eb && (0, vb.jsx)(Xb.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, MM.t)(), Bb()
              },
              children: (0, vb.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, vb.jsx)(Xb.D, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Bb()
              },
              children: (0, vb.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var YM = Ub(3278),
      BM = Ub(3299),
      eM = Ub(1260),
      vM = Ub(3252),
      LM = Ub(1264),
      PM = Ub(35988),
      XM = Ub(3265),
      jM = Ub(3271);

    function RM(bb, ab) {
      return (0, PM.g)(!0, bb, ab) ? () => {
        !async function(bb) {
          await vM.b.refresh();
          const {
            data: ab,
            failed: Ub
          } = vM.b.getState();
          if (null === ab || Ub) return;
          const Ab = vM.b.getExclusion(bb);
          if ("blocked" === Ab) return;
          const Mb = null === Ab;
          eM.NotificationProvider.showCustomPopup({
            body: ab => {
              const Ub = Ub => ({
                text: XM.i[Ub].text,
                onClick: () => {
                  ab(), (0, jM.d)(Ub, bb, null)
                }
              });
              return (0, vb.jsx)(LM.k, {
                title: Mb ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: bb
                  }
                },
                secondary: Mb ? Ub("ignore") : void 0,
                confirm: Ub("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: ab
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
    Ub(3292);
    const kM = (0, Mb.memo)((function(bb) {
      let {
        show: ab,
        onOpen: Ub,
        onClose: Ab
      } = bb;
      const [Tb, Yb] = (0, Mb.useState)(""), [Bb, Lb] = (0, Mb.useState)(""), [Pb, Xb] = (0, Mb.useState)(null), [jb, Rb] = (0, Mb.useState)(null), kb = (0, Nb.k)("hiddenPlayerNames"), yb = {
        kind: "worldCodeLine",
        onSubmit: (bb, ab) => {
          Ab(), eb.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: jb,
            OT: bb,
            details: ab
          })
        }
      }, Zb = {
        kind: "player",
        shownPlayerName: (0, aa.d)(Tb, kb),
        onSubmit: (bb, ab) => {
          Ab(), (0, BM.d)({
            playerId: Bb,
            playerName: Tb,
            chatMsgId: jb,
            policyId: bb,
            details: ab,
            onAccepted: RM(Tb, kb)
          })
        }
      };
      return (0, mb.f)("OpenReportMenu", (bb => {
        let {
          playerEId: ab,
          playerName: Ab,
          fE: Mb,
          serverChatMsgId: Tb
        } = bb;
        Lb(ab), Yb(Ab), Xb(Mb), Rb(Tb), Ub()
      })), (0, vb.jsx)(Eb.d, {
        show: ab,
        close: Ab,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, vb.jsx)("div", {
          className: "ReportPanel",
          children: ab && (0, vb.jsx)(YM.d, {
            reported: null === Bb ? yb : Zb,
            chatMessage: Pb,
            inGame: !0,
            onCancel: Ab
          })
        })
      })
    }));
    var yM = Ub(36186);
    const ZM = (0, Mb.memo)((function(bb) {
      let {
        show: ab,
        onOpen: Ub,
        onClose: Ab
      } = bb;
      const {
        t: Tb
      } = (0, Ob.A)(), [Yb, Bb] = (0, Mb.useState)(null), [Lb, Pb] = (0, Mb.useState)(0);
      (0, mb.f)("OpenDiscordReportBox", (bb => {
        eb.gameBridge.send("requestDiscordReportKey", bb), Pb(0), Ub()
      }));
      const jb = () => {
        Ab(), Bb(null), Pb(0)
      };
      return (0, mb.f)("setDiscordReportKey", (bb => {
        Bb(bb)
      })), (0, vb.jsx)(Eb.d, {
        show: ab,
        close: jb,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, vb.jsx)("div", {
          className: "ReportPanel",
          children: (0, vb.jsx)(LM.k, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(yM.b, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: jb
            },
            padStartsOn: "cancel",
            children: (0, vb.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, vb.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== Yb && void 0 !== Yb ? Yb : Tb("report:loadingReportKey")
              }), (0, vb.jsx)(Xb.g, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(Yb).catch((bb => {
                    console.error("Failed to copy report key:", bb)
                  })), Pb(Date.now())
                },
                disabled: Date.now() - Lb < 1e3 || !Yb,
                children: Date.now() - Lb < 1e3 ? Tb("general:copied") : Tb("general:copy")
              })]
            })
          })
        })
      })
    }));
    var DM = Ub(1216);
    const zM = {
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
      xM = (0, Mb.memo)((function(bb) {
        let {
          show: ab,
          onOpen: Ub,
          onClose: Ab
        } = bb;
        const [Tb, Yb] = (0, Mb.useState)(null), Bb = (0, Mb.useRef)(0), Lb = (0, Mb.useRef)(null), {
          t: Pb
        } = (0, Ob.A)();
        (0, mb.f)("EditCustomLobbyBlock", (bb => {
          let {
            pos: ab
          } = bb;
          Yb(ab), null !== ab && Ub(), Lb.current.scrollTo(0, Bb.current)
        }));
        const Xb = bb => {
          eb.gameBridge.send("setCustomLobbyBlock", {
            pos: Tb,
            blockName: bb
          }), Ab()
        };
        return (0, vb.jsx)(Eb.d, {
          className: "CustomLobbyBlockEditorOuter",
          close: Ab,
          escDoesExit: !0,
          show: ab,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, vb.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Lb,
            onScroll: () => {
              Bb.current = Lb.current.scrollTop
            },
            children: (0, vb.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(zM).map((bb => {
                let [ab, Ub] = bb;
                return (0, vb.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, vb.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Pb(ab)
                  }), (0, vb.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(Ub).map((bb => {
                      let [ab, {
                        tooltip: Ub,
                        blocks: Ab
                      }] = bb;
                      return (0, vb.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, vb.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Pb(ab), (0, vb.jsx)(Cb.d, {
                            hoverInfo: Pb(Ub),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, vb.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Ab.map((bb => (0, vb.jsx)(iM, {
                            blockName: bb,
                            selectBlock: Xb
                          }, bb)))
                        })]
                      }, ab)
                    }))
                  })]
                }, ab)
              }))
            })
          })
        })
      })),
      iM = (0, Mb.memo)((function(bb) {
        var ab;
        let {
          blockName: Ub,
          selectBlock: Ab
        } = bb;
        const Mb = (0, DA.d)(Ub),
          Tb = null !== (ab = void 0 === Mb ? void 0 : (0, ZA.displayNameOf)(Mb)) && void 0 !== ab ? ab : Ub,
          Eb = void 0 === Mb ? void 0 : (0, ZA.descriptionOf)(Mb);
        return (0, vb.jsx)(Cb.g, {
          tooltipInner: (0, vb.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, vb.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, vb.jsx)(fb.c, {
                text: Tb
              })
            }), Eb && (0, vb.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, vb.jsx)(fb.c, {
                text: Eb
              })
            })]
          }),
          children: (0, vb.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Ab(Ub),
            children: (0, vb.jsx)(xU.c, {
              itemName: Ub,
              amount: 1
            })
          })
        }, Ub)
      }));
    var fM = Ub(2708),
      mM = Ub(3951),
      pM = Ub(8945);

    function NM() {
      const bb = (0, Nb.k)("itemInfo");
      return (0, Mb.useMemo)((() => function(bb) {
        return {
          getDefaultItemStat(ab, Ub) {
            var Ab;
            const Mb = bb[ab];
            return "description" === Ub ? null === Mb || void 0 === Mb ? void 0 : Mb.description : null !== (Ab = null === Mb || void 0 === Mb ? void 0 : Mb.displayName) && void 0 !== Ab ? Ab : ab
          }
        }
      }(bb)), [bb])
    }
    const WM = (0, Mb.memo)((function(bb) {
        var ab, Ub, Ab, Tb, Yb, Bb, eb, Lb, Pb, Xb, jb, Rb, yb, Zb, Db, zb, xb, ib, fb, pb, Nb, Wb, Hb;
        let {
          togglePointerLock: Ib,
          show: db,
          onOpen: Fb,
          onClose: hb
        } = bb;
        const {
          t: Gb
        } = (0, Ob.A)(), Qb = NM(), qb = (0, Mb.useRef)(null), ub = (0, Mb.useRef)(mM.c.MobHungerLevel.Hungry), rb = (0, Mb.useRef)(null), Kb = (0, fM.d)(), ob = (0, Mb.useRef)(null), lb = (0, Mb.useRef)(null), tb = qb.current;
        (0, Mb.useEffect)((() => {
          if (!db) return;
          const bb = pM.l.openPet(ob.current);
          return lb.current = bb, () => {
            bb.close(), lb.current = null
          }
        }), [db]), (0, Mb.useEffect)((() => {
          db && tb && lb.current.show(function(bb) {
            var ab;
            let {
              mobType: Ub,
              mobSettings: Ab
            } = bb;
            return {
              mobType: Ub,
              variation: null !== (ab = Ab.variation) && void 0 !== ab ? ab : "default",
              metaInfo: Ab.metaInfo,
              tamed: !(0, FA.I)(Ab.ownerDbId)
            }
          }(tb))
        }), [db, tb]), (0, Mb.useEffect)((() => {
          const bb = () => {
            var bb;
            const ab = mM.c.getMobHungerLevel(null === (bb = qb.current) || void 0 === bb ? void 0 : bb.mobSettings.petInfo.lastFedAt);
            if (ab !== ub.current && (ub.current = ab, Kb()), rb.current) {
              var Ub;
              const bb = Date.now(),
                ab = mM.c.getNextStateAt(null === (Ub = qb.current) || void 0 === Ub ? void 0 : Ub.mobSettings.petInfo.lastFedAt);
              let Ab = Math.floor((ab - bb) / 1e3),
                Mb = "";
              if (Ab > 3600) {
                Mb += Math.floor(Ab / 60 / 60).toString().padStart(2, "0"), Mb += ":", Ab %= 3600
              }
              const Tb = Ab % 60;
              Mb += Math.floor(Ab / 60).toString().padStart(2, "0"), Mb += ":", Mb += Tb.toString().padStart(2, "0"), rb.current.textContent = Mb
            }
          };
          bb();
          const ab = setInterval(bb, 250);
          return () => {
            clearInterval(ab)
          }
        }), [tb, Kb]), (0, mb.f)("showPetUi", (bb => {
          let {
            mobType: ab,
            mobSettings: Ub
          } = bb;
          qb.current = {
            mobType: ab,
            mobSettings: Ub
          }, db || Fb()
        }));
        const wb = null === (ab = qb.current) || void 0 === ab ? void 0 : ab.mobSettings.health,
          sb = null === (Ub = qb.current) || void 0 === Ub ? void 0 : Ub.mobSettings.maxHealth,
          gb = mM.c.getFriendshipLevelInfo(null !== (Ab = null === (Tb = qb.current) || void 0 === Tb ? void 0 : Tb.mobSettings.petInfo.friendshipPoints) && void 0 !== Ab ? Ab : 0);
        return (0, vb.jsx)(Eb.d, {
          className: "PetUIOuter",
          close: hb,
          escDoesExit: !0,
          show: db,
          togglePointerLock: Ib,
          forcePointerUnlock: db,
          globallyUniqueKey: "PetUI",
          children: (0, vb.jsx)("div", {
            className: "PetUI",
            children: (0, vb.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, vb.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, vb.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Yb = null === (Bb = qb.current) || void 0 === Bb ? void 0 : Bb.mobSettings.name) && void 0 !== Yb ? Yb : "Your Pet"
                }), (0, vb.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: ob
                })]
              }), (0, vb.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, FA.I)(null === (eb = qb.current) || void 0 === eb ? void 0 : eb.mobSettings.petInfo.friendshipPoints) && (0, vb.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, vb.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Gb("mobAiPlugin:friendshipTitle")
                  }), (0, vb.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: mM.c.getIconsFromFriendshipPoints(null !== (Lb = qb.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Lb ? Lb : 0).map(((bb, ab) => (0, vb.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: bb,
                        amount: 1
                      })
                    }, ab)))
                  }), (0, vb.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, vb.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, vb.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${gb.totalPointsForNextLevel>0?Math.max(gb.pointsIntoCurrentLevel/gb.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, vb.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: gb.totalPointsForNextLevel > 0 ? ` ${Math.ceil(gb.pointsIntoCurrentLevel)}/${Math.ceil(gb.totalPointsForNextLevel)}` : Math.ceil(gb.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, vb.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, vb.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Gb("mobAiPlugin:hungerTitle")
                  }), (0, vb.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: mM.c.hungerLevelIcons[ub.current].map(((bb, ab) => (0, vb.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: bb,
                        amount: 1
                      })
                    }, ab)))
                  }), (0, vb.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Gb(mM.c.hungerLevelTranslations[ub.current].translationKey), ub.current !== mM.c.MobHungerLevel.Starving && !(0, FA.I)(null === (Pb = qb.current) || void 0 === Pb ? void 0 : Pb.mobSettings.petInfo.lastFedAt) && (0, vb.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Gb("mobAiPlugin:nextFeedIn", {
                        state: Gb(mM.c.hungerLevelTranslations[ub.current + 1].translationKey)
                      }), ":", " ", (0, vb.jsx)("span", {
                        ref: rb
                      })]
                    })]
                  })]
                }), (0, vb.jsx)(Cb.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Gb("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, vb.jsxs)("div", {
                    className: Xa()("PetUIQuickStatsItem", {
                      Disabled: (0, FA.I)(wb) || (0, FA.I)(sb)
                    }),
                    children: [(0, vb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, vb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, FA.I)(wb) || (0, FA.I)(sb) ? "" : (0, vb.jsxs)(vb.Fragment, {
                        children: [Math.ceil(wb), (0, vb.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(sb)]
                        })]
                      })
                    })]
                  })
                }), (0, vb.jsx)(Cb.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Gb("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, vb.jsxs)("div", {
                    className: Xa()("PetUIQuickStatsItem", {
                      Disabled: (0, FA.I)(null === (Xb = qb.current) || void 0 === Xb ? void 0 : Xb.mobSettings.attackDamage) || qb.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, vb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, vb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (jb = qb.current) || void 0 === jb ? void 0 : jb.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, vb.jsx)(Cb.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Gb("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, vb.jsxs)("div", {
                    className: Xa()("PetUIQuickStatsItem", {
                      Disabled: (0, FA.I)(null === (Rb = qb.current) || void 0 === Rb ? void 0 : Rb.mobSettings.secondaryAttackDamage) || qb.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, vb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, vb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (yb = qb.current) || void 0 === yb ? void 0 : yb.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, vb.jsx)(Cb.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Gb("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, vb.jsxs)("div", {
                    className: Xa()("PetUIQuickStatsItem", {
                      Disabled: (0, FA.I)(null === (Zb = qb.current) || void 0 === Zb ? void 0 : Zb.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, vb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, vb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Db = null === (zb = qb.current) || void 0 === zb || null === (xb = zb.mobSettings.baseRunningSpeed) || void 0 === xb ? void 0 : xb.toFixed(2)) && void 0 !== Db ? Db : ""
                    })]
                  })
                }), (0, vb.jsx)(Cb.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, vb.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Gb("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, vb.jsxs)("div", {
                    className: Xa()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (ib = qb.current) || void 0 === ib ? void 0 : ib.mobSettings.metaInfo)
                    }),
                    children: [(0, vb.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, vb.jsx)(xU.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, vb.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (fb = qb.current) || void 0 === fb ? void 0 : fb.mobSettings.metaInfo) ? (0, vb.jsx)(kb.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, FA.I)(null === (pb = qb.current) || void 0 === pb ? void 0 : pb.mobSettings.tameInfo) && (0, vb.jsxs)(vb.Fragment, {
                  children: [(0, vb.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, vb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vb.jsx)(IM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: mM.c.feedTextColours[mM.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, vb.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: qb.current.mobSettings.petInfo.superlikedFoodKnown ? (0, vb.jsx)(HM, {
                            food: qb.current.mobSettings.petInfo.superlikedFood
                          }) : (0, vb.jsx)(IM, {
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
                    }), (0, vb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vb.jsx)(IM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: mM.c.feedTextColours[mM.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Nb = qb.current.mobSettings.tameInfo.likedFoods) || void 0 === Nb ? void 0 : Nb.filter((bb => !qb.current.mobSettings.petInfo.superlikedFoodKnown || bb !== qb.current.mobSettings.petInfo.superlikedFood)).map((bb => (0, vb.jsx)(HM, {
                          food: bb
                        }, bb)))
                      })]
                    }), (0, vb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vb.jsx)(IM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: mM.c.feedTextColours[mM.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Wb = qb.current.mobSettings.tameInfo.neutralFoods) || void 0 === Wb ? void 0 : Wb.map((bb => (0, vb.jsx)(HM, {
                          food: bb
                        }, bb)))
                      })]
                    }), (0, vb.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, vb.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, vb.jsx)(IM, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: mM.c.feedTextColours[mM.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, vb.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Hb = qb.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Hb ? void 0 : Hb.map((bb => (0, vb.jsx)(HM, {
                          food: bb
                        }, bb)))
                      })]
                    })]
                  }), qb.current.mobSettings.tameInfo.levelUpBonuses && (0, vb.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: mM.c.MAX_LEVEL + 1
                    }).map(((bb, ab) => {
                      const Ub = ab;
                      if (0 === Ub) return null;
                      const Ab = qb.current.mobSettings.tameInfo.levelUpBonuses[Ub],
                        Mb = mM.c.getBonusDisplayInfo(Qb, qb.current.mobSettings, qb.current.mobType, Ab);
                      return (0, vb.jsxs)("div", {
                        className: Xa()("PetUIFeedDropContainer", {
                          Selected: Ub === mM.c.getFriendshipLevelInfo(qb.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, vb.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: Ub
                          }).map(((bb, ab) => (0, vb.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, vb.jsx)(xU.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${Ub}-${ab}`)))
                        }), (0, vb.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Mb && (0, vb.jsx)(IM, {
                            icon: Mb.icon,
                            displayName: Mb.displayName,
                            description: Mb.description
                          })
                        })]
                      }, Ub)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      HM = (0, Mb.memo)((function(bb) {
        let {
          food: ab,
          includeDescription: Ub = !1
        } = bb;
        const Ab = NM(),
          Mb = Ab.getDefaultItemStat(ab, "displayName"),
          Tb = Ab.getDefaultItemStat(ab, "description");
        return (0, vb.jsx)(IM, {
          icon: ab,
          displayName: Mb,
          description: Ub ? Tb : null
        })
      })),
      IM = (0, Mb.memo)((function(bb) {
        let {
          icon: ab,
          displayName: Ub,
          description: Ab,
          tintColor: Mb,
          className: Tb = "PetUIFoodItem"
        } = bb;
        return (0, vb.jsx)(Cb.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, vb.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, vb.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, vb.jsx)(fb.c, {
                text: Ub
              })
            }), Ab && (0, vb.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, vb.jsx)(fb.c, {
                text: Ab
              })
            })]
          }),
          children: (0, vb.jsx)("div", {
            className: Tb,
            children: (0, vb.jsx)(xU.c, {
              itemName: ab,
              amount: 1,
              tintColor: Mb
            })
          })
        })
      }));
    var dM = Ub(3433),
      FM = Ub(1065),
      hM = Ub(1189),
      GM = Ub(36195),
      QM = Ub(36190),
      qM = Ub(950),
      uM = Ub(2227);

    function rM(bb) {
      let {
        peers: ab
      } = bb;
      const [Ub, Ab] = (0, Mb.useState)(null), Tb = (0, Nb.k)("players");
      return (0, vb.jsx)("div", {
        className: "CodeEditorPresence",
        children: ab.map((bb => {
          var ab, Mb;
          const Eb = null !== (ab = null === (Mb = Tb.byId[bb.playerId]) || void 0 === Mb ? void 0 : Mb.cosmetics) && void 0 !== ab ? ab : {};
          return (0, vb.jsxs)("div", {
            className: Xa()("PresenceIcon", {
              Viewer: !bb.isEditor
            }),
            style: {
              backgroundColor: bb.colour
            },
            onMouseEnter: () => {
              Ab(bb.playerId)
            },
            onMouseLeave: () => {
              Ab(null)
            },
            children: [(0, vb.jsx)(uM.d, {
              cosmetics: Eb
            }), Ub === bb.playerId && (0, vb.jsx)("div", {
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
    var KM = Ub(619),
      oM = Ub(36188),
      lM = Ub(35980),
      tM = Ub(36197);

    function wM(bb) {
      const ab = bb.split("/"),
        Ub = [];
      for (let Ab = 1; Ab < ab.length; Ab++) Ub.push(ab.slice(0, Ab).join("/"));
      return Ub
    }

    function sM(bb) {
      return bb.slice(bb.lastIndexOf("/") + 1)
    }
    const gM = (0, Mb.memo)((function(bb) {
      var ab;
      let {
        files: Ub,
        activePath: Ab,
        canEdit: Tb,
        directoryLinked: Eb,
        pluginNames: Yb,
        activePluginName: Bb,
        activePluginFile: eb,
        onSelect: Lb,
        onSelectPlugin: Pb,
        onCreate: jb,
        onRename: Rb,
        onRenameFolder: yb,
        onDelete: Zb,
        onToggleDirectorySync: Db,
        schematics: zb,
        onManageSchematic: xb
      } = bb;
      const {
        t: ib
      } = (0, Ob.A)(), fb = null !== (ab = (0, QM.c)(Ub)) && void 0 !== ab ? ab : hM.h, mb = Object.keys(Ub), [pb, Nb] = (0, Mb.useState)((() => new Set)), Wb = function(bb, ab, Ub) {
        const Ab = {
          folders: new Map,
          files: []
        };
        for (const Eb of bb) {
          if (Eb === ab) continue;
          let bb = Ab;
          for (const ab of wM(Eb)) {
            let Ub = bb.folders.get(ab);
            Ub || (Ub = {
              folders: new Map,
              files: []
            }, bb.folders.set(ab, Ub)), bb = Ub
          }
          bb.files.push(Eb)
        }
        const Mb = [];
        bb.includes(ab) && Mb.push({
          kind: "file",
          path: ab,
          name: sM(ab),
          depth: 0
        });
        const Tb = (bb, ab) => {
          const Ab = [...bb.folders.entries()].sort(((bb, ab) => {
            let [Ub] = bb, [Ab] = ab;
            return Ub.localeCompare(Ab)
          }));
          for (const [Eb, Yb] of Ab) {
            const bb = Ub.has(Eb);
            Mb.push({
              kind: "folder",
              path: Eb,
              name: sM(Eb),
              depth: ab,
              collapsed: bb
            }), bb || Tb(Yb, ab + 1)
          }
          bb.files.sort(((bb, ab) => bb.localeCompare(ab)));
          for (const Ub of bb.files) Mb.push({
            kind: "file",
            path: Ub,
            name: sM(Ub),
            depth: ab
          })
        };
        return Tb(Ab, 0), Mb
      }(mb, fb, pb);
      (0, Mb.useEffect)((() => {
        Nb((bb => {
          const ab = new Set(bb);
          let Ub = !1;
          for (const Mb of wM(Ab)) Ub = ab.delete(Mb) || Ub;
          return Ub ? ab : bb
        }))
      }), [Ab]);
      const Hb = mb.length >= MU.z,
        Ib = (bb, ab) => {
          if (bb.length > GM.u) return `Path must be at most ${GM.u} characters`;
          if (!(0, GM.s)(bb)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === bb) return "index.d.ts cannot be the world-code entry";
          const Ab = !!ab && (0, QM.f)(ab, bb);
          if (ab && (0, QM.h)(ab) && !Ab) return `Cannot rename ${ab} (only swapping ${hM.h} and ${hM.k} is allowed)`;
          if (bb in Ub) return "A file with that path already exists";
          if ((0, QM.h)(bb) && !Ab) {
            if ((bb === hM.h ? hM.k : hM.h) in Ub) return `World code cannot have both ${hM.h} and ${hM.k}`
          }
          return null
        },
        db = bb => {
          eM.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === bb ? void 0 : `${bb}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: bb => Ib(bb)
          }).getResult().then((bb => {
            "notificationTornDown" !== bb && null !== bb && "submit" === bb.type && jb(bb.value)
          }))
        },
        Fb = bb => {
          eM.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: bb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ab => ab === bb ? "That is already the file's path" : Ib(ab, bb)
          }).getResult().then((ab => {
            "notificationTornDown" !== ab && null !== ab && "submit" === ab.type && Rb(bb, ab.value)
          }))
        },
        hb = bb => {
          const ab = bb => bb.replace(/\/+$/, "");
          eM.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: bb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Ub => {
              const Ab = ab(Ub);
              if (Ab === bb) return "That is already the folder's path";
              for (const [ab, Mb] of(0, QM.o)(mb, bb, Ab)) {
                const bb = Ib(Mb, ab);
                if (null !== bb) return bb
              }
              return null
            }
          }).getResult().then((Ub => {
            "notificationTornDown" !== Ub && null !== Ub && "submit" === Ub.type && yb(bb, ab(Ub.value))
          }))
        },
        Gb = bb => {
          eM.NotificationProvider.showPromptPopup({
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
          }).getResult().then((ab => {
            !0 === ab && Zb(bb)
          }))
        };
      return (0, vb.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, vb.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, vb.jsx)("span", {
            children: "Files"
          }), Tb && !Hb && (0, vb.jsx)(Xb.s, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              db()
            },
            children: (0, vb.jsx)(kb.e, {
              name: "plus"
            })
          })]
        }), (0, vb.jsxs)("div", {
          className: "FileTreeList",
          children: [Wb.map((bb => {
            const ab = bb.path;
            if ("folder" === bb.kind) return (0, vb.jsx)(OM, {
              path: ab,
              name: bb.name,
              depth: bb.depth,
              collapsed: bb.collapsed,
              onToggle: () => {
                var bb;
                bb = ab, Nb((ab => {
                  const Ub = new Set(ab);
                  return Ub.delete(bb) || Ub.add(bb), Ub
                }))
              },
              canCreate: Tb && !Hb,
              canRename: Tb,
              onCreate: db,
              onRename: hb
            }, `folder:${ab}`);
            const Mb = (0, QM.h)(ab),
              Eb = hM.h in Ub && hM.k in Ub,
              Yb = !Mb || Eb,
              eb = null === Bb && ab === Ab;
            return (0, vb.jsx)(JM, {
              path: ab,
              label: bb.name,
              depth: bb.depth,
              isActive: eb,
              canRename: Tb,
              onSelect: Lb,
              onRename: Fb,
              onDelete: Gb,
              canDelete: Yb && Tb
            }, ab)
          })), (0, vb.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, vb.jsxs)("span", {
              children: ["Schematics (", Object.keys(zb).length, "/", tM.g, ")"]
            }), Tb && (0, vb.jsx)(Xb.s, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(zb).length >= tM.g,
              onClick: () => {
                xb("")
              },
              children: (0, vb.jsx)(kb.e, {
                name: "plus"
              })
            })]
          }), Object.keys(zb).sort().map((bb => (0, vb.jsx)(JM, {
            path: bb,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: xb
          }, bb))), Yb.length > 0 && (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, vb.jsx)("span", {
                children: "Plugins"
              })
            }), Yb.map((bb => {
              var ab;
              const Ub = oM.c[bb],
                Ab = Object.keys(null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.files) && void 0 !== ab ? ab : {
                  "index.ts": ""
                }).sort(((bb, ab) => "index.ts" === bb ? -1 : "index.ts" === ab ? 1 : bb.localeCompare(ab)));
              return (0, vb.jsxs)("div", {
                children: [(0, vb.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, QM.v)(bb)
                }), Ab.map((ab => (0, vb.jsx)(JM, {
                  path: ab,
                  nested: !0,
                  isActive: Bb === bb && eb === ab,
                  canRename: !1,
                  onSelect: () => {
                    Pb(bb, ab)
                  },
                  canDelete: !1
                }, ab)))]
              }, bb)
            }))]
          })]
        }), (0, vb.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, vb.jsx)(Xb.g, {
            className: "FileTreeFooterButton",
            onClick: Db,
            children: ib(Eb ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function CM(bb) {
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

    function VM(bb) {
      let {
        depth: ab
      } = bb;
      return (0, vb.jsx)(vb.Fragment, {
        children: Array.from({
          length: ab
        }, ((bb, ab) => (0, vb.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": ab
          }
        }, ab)))
      })
    }

    function OM(bb) {
      let {
        path: ab,
        name: Ub,
        depth: Ab,
        collapsed: Mb,
        onToggle: Tb,
        canCreate: Eb,
        canRename: Yb,
        onCreate: Bb,
        onRename: eb
      } = bb;
      const Lb = [];
      Eb && Lb.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Bb(ab)
        }
      }), Yb && Lb.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          eb(ab)
        }
      });
      const Pb = CM(Ab);
      return (0, vb.jsxs)("div", {
        className: Xa()("FileTreeItem FileTreeFolder", Pb.className),
        style: Pb.style,
        children: [(0, vb.jsx)(VM, {
          depth: Ab
        }), (0, vb.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Mb,
          onClick: Tb,
          children: [(0, vb.jsx)(kb.e, {
            className: "FileTreeFolderCaret",
            name: Mb ? "caret-right" : "caret-down"
          }), (0, vb.jsx)(kb.e, {
            className: "FileTreeFolderIcon",
            name: Mb ? "folder" : "folder-open"
          }), Ub]
        }), (0, vb.jsx)(cM, {
          path: ab,
          actions: Lb
        })]
      })
    }

    function cM(bb) {
      let {
        path: ab,
        actions: Ub
      } = bb;
      const Ab = (0, Mb.useRef)(null);
      return 0 === Ub.length ? null : (0, vb.jsxs)("div", {
        ref: Ab,
        className: "FileTreeItemActions",
        children: [(0, vb.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${ab}`,
          children: (0, vb.jsx)(kb.e, {
            name: "ellipsis"
          })
        }), (0, vb.jsx)(lM.b, {
          triggerElementRef: Ab,
          options: Ub
        })]
      })
    }

    function JM(bb) {
      let {
        path: ab,
        label: Ub = ab,
        depth: Ab = 0,
        isActive: Mb,
        canRename: Tb,
        onSelect: Eb,
        onRename: Yb,
        onDelete: Bb,
        canDelete: eb,
        nested: Lb
      } = bb;
      const Pb = [];
      Tb && Yb && Pb.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Yb(ab)
        }
      }), eb && Bb && Pb.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Bb(ab)
        }
      });
      const Xb = CM(Ab);
      return (0, vb.jsxs)("div", {
        className: Xa()("FileTreeItem", Xb.className, {
          Active: Mb,
          Nested: Lb
        }),
        style: Xb.style,
        children: [(0, vb.jsx)(VM, {
          depth: Ab
        }), (0, vb.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: Ub === ab ? void 0 : ab,
          onClick: () => {
            Eb(ab)
          },
          children: Ub
        }), (0, vb.jsx)(cM, {
          path: ab,
          actions: Pb
        })]
      })
    }
    async function nM(bb) {
      const ab = (0, QM.c)(bb);
      if (!ab || "" === bb[ab].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Ab
      } = await Promise.all([Ub.e(289), Ub.e(290)]).then((() => Ub(40604)));
      return (0, oM.b)(Ab(bb))
    }
    var SM = Ub(36201);

    function bT(bb, ab) {
      const Ub = Object.keys(bb),
        Ab = Object.keys(ab);
      if (Ub.length !== Ab.length) return !1;
      for (const Mb of Ub)
        if (!(Mb in ab) || bb[Mb] !== ab[Mb]) return !1;
      return !0
    }

    function aT(bb, ab) {
      const Ub = [],
        Ab = [],
        Mb = [];
      for (const Tb of Object.keys(ab)) Tb in bb ? bb[Tb] !== ab[Tb] && Mb.push(Tb) : Ub.push(Tb);
      for (const Tb of Object.keys(bb)) Tb in ab || Ab.push(Tb);
      return Ub.sort(), Ab.sort(), Mb.sort(), {
        creates: Ub,
        deletes: Ab,
        updates: Mb
      }
    }

    function UT(bb, ab) {
      var Ub;
      const Ab = {
          ...bb
        },
        Mb = (0, QM.c)(ab),
        Tb = (0, QM.c)(Ab);
      if (hM.h in Ab && hM.k in Ab) {
        const bb = null !== Mb && void 0 !== Mb ? Mb : hM.k,
          Ub = bb === hM.h ? hM.k : hM.h;
        var Eb;
        if (!(bb in Ab)) Ab[bb] = null !== (Eb = ab[bb]) && void 0 !== Eb ? Eb : "";
        return delete Ab[Ub], Ab
      }
      var Yb;
      return Mb && !(Mb in Ab) ? (Tb || (Ab[Mb] = null !== (Yb = ab[Mb]) && void 0 !== Yb ? Yb : ""), Ab) : (Tb || Mb || (Ab[hM.h] = null !== (Ub = Ab[hM.h]) && void 0 !== Ub ? Ub : "", delete Ab[hM.k]), Ab)
    }

    function AT(bb, ab) {
      const Ub = (0, QM.c)(ab),
        Ab = hM.h in ab && hM.k in ab;
      return bb.filter((bb => !(0, QM.h)(bb) || (!!Ab || Ub !== bb)))
    }
    async function MT(bb, ab, Ab) {
      const Mb = bb.getLobbyFiles(),
        Tb = (0, MU.j)(Ab, (0, QM.q)(Mb, ab)),
        Eb = await bb.ensureJoined(ab),
        Yb = (0, GM.x)(Eb.docKey);
      if (Eb.doc === Tb) return;
      for (let Ub = 0; Ub < 100; Ub++) {
        const Ub = bb.getCollabSnapshot();
        if (Ub && (0, GM.x)(Ub.docKey) === Yb && bb.getActivePath() === ab) {
          if (bb.replaceActiveDoc(Yb, Tb)) return;
          await (0, FA.O)(40)
        } else await (0, FA.O)(40)
      }
      const {
        ChangeSet: Bb
      } = await Ub.e(285).then((() => Ub(40415))), vb = bb.getCollabSnapshot(), Lb = vb && (0, GM.x)(vb.docKey) === Yb ? vb : Eb;
      await async function(bb, ab, Ub, Ab) {
        const Mb = bb.of({
            from: 0,
            to: Ub.length,
            insert: Ab
          }, Ub.length),
          Tb = JSON.stringify([{
            clientID: ab.clientID,
            changes: Mb.toJSON()
          }]),
          Eb = (0, GM.x)(ab.docKey);
        Tb.length <= GM.l ? eb.gameBridge.send("sendCodeCollab", {
          fa: GM.e.Push,
          ma: Eb,
          Na: ab.version,
          Ia: Tb
        }) : await (0, FM.postJsonWithMetricsCookiesAndJsonResponse)(`${ab.httpConfig.gsUrl}/code/collab-push`, dM.n["collab-push"].toBuffer({
          gameNameWithVariation: ab.httpConfig.gameNameWithVariation,
          lobbyName: ab.httpConfig.lobbyName,
          docKey: Eb,
          version: ab.version,
          updates: Tb
        }), {
          retries: 0
        })
      }(Bb, Lb, Lb.doc, Tb)
    }
    class TT {
      constructor(bb) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = bb
      }
      async writeLobbyFiles(bb) {
        const ab = {
            ...this.bridge.getLobbyFiles()
          },
          Ub = {
            ...ab
          };
        for (const {
            path: Tb,
            text: Eb
          }
          of bb) Ub[Tb] = Eb;
        if (!bb.every((bb => {
            let {
              path: ab,
              text: Ab
            } = bb;
            return (0, MU.j)(Ab, (0, QM.q)(Ub, ab)) === Ab
          }))) return !1;
        const Ab = [];
        try {
          for (const {
              path: ab,
              text: Ub
            }
            of bb) Ab.push(ab), ab in this.bridge.getLobbyFiles() || (this.bridge.createFile(ab, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(ab, !0)), await MT(this.bridge, ab, Ub)
        } catch (Mb) {
          for (const bb of Ab) bb in ab ? await MT(this.bridge, bb, ab[bb]).catch((ab => {
            console.error("World Code AI: couldn't put back", bb, ab)
          })) : this.bridge.deleteFile(bb);
          throw Mb
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const bb = await (0, SM.w)(this.bridge.getStorageKey());
        return !!bb && (this.handle = bb, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(bb), !0)
      }
      async unlinkFolder() {
        const bb = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, SM.d)(bb), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const bb = this.bridge.getStorageKey(),
          ab = await (0, SM.t)(bb);
        return !!ab && (!!await (0, SM.g)(ab, "readwrite") && (this.handle = ab, this.linked = !0, await (0, SM.F)(bb, ab), await this.scaffoldLocalTypes(ab), !0))
      }
      scaffoldLocalTypes(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Ab = (await nM(ab)).map((bb => oM.c[bb])),
              Mb = Ab.map((bb => {
                var ab;
                return `${bb.name}:${Object.keys(null!==(ab=null===bb||void 0===bb?void 0:bb.files)&&void 0!==ab?ab:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Mb) return;
            const {
              ensureLocalBloxdTypes: Tb
            } = await Promise.all([Ub.e(81), Ub.e(287), Ub.e(292)]).then((() => Ub(40612)));
            await Tb(bb, Ab), this.scaffoldedPluginNamesKey = Mb
          } catch (Ab) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Ab)
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
      async onDocTextChanged(bb, ab) {
        if (!this.handle) return;
        const Ub = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [bb]: ab
        })];
        this.running && (this.pendingDocText.set(bb, ab), Ub.push(this.flushDocTextToDisk())), await Promise.all(Ub)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const bb = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const ab = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [Ub, Ab] of ab) this.lastSynced[Ub] !== Ab && (await (0, SM.O)(bb, Ub, Ab), this.lastSynced = {
              ...this.lastSynced,
              [Ub]: Ab
            })
          }
        } catch (ab) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", ab), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, SM.x)(this.handle))
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
            if (!await (0, SM.g)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const ab = this.bridge.getLobbyFiles(),
              Ub = await (0, SM.x)(this.handle);
            for (const bb of Object.keys(ab).filter(tM.e)) {
              if (Ub[bb] === SM.o) return void this.bridge.setMessage(`Move ${bb} outside the linked folder before syncing its placeholder.`, "warning");
              Ub[bb] = tM.n
            }
            if (bT(Ub, ab)) {
              for (const bb of Object.keys(ab).filter(tM.e)) await (0, SM.O)(this.handle, bb, tM.n);
              return this.lastSynced = {
                ...Ub
              }, void this.beginWatch()
            }
            const Ab = await this.promptReconcile(function(bb) {
              return null !== (0, QM.c)(bb)
            }(Ub));
            if ("unlink" === Ab) return void await this.unlinkFolder();
            if ("dismissed" === Ab) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Ab) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(Ub);
                for (const bb of Object.keys(ab).filter(tM.e)) await (0, SM.O)(this.handle, bb, tM.n);
                this.lastSynced = {
                  ...await (0, SM.x)(this.handle)
                }
              } else await (0, SM.Q)(this.handle, ab), this.lastSynced = {
                ...ab
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
        return await new Promise((ab => {
          const Ub = [{
              choice: "local",
              Button: Xb.g,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Xb.g,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Xb.g,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Ab = (0, vb.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, vb.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, vb.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: bb ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, vb.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: Ub.filter((ab => "local" !== ab.choice || bb)).map((bb => {
                  let {
                    choice: Ub,
                    Button: Ab,
                    labelKey: Tb,
                    descriptionKey: Eb
                  } = bb;
                  return (0, vb.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, vb.jsx)(Ab, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (bb => {
                          Mb.tearDownNotification(), ab(bb)
                        })(Ub)
                      },
                      children: this.bridge.t(`codeEditor:${Tb}`)
                    }), (0, vb.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Eb}`)
                    })]
                  }, Ub)
                }))
              })]
            }),
            Mb = eM.NotificationProvider.showCustomPopup({
              body: Ab,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Mb.getResult().then((bb => {
            "notificationTornDown" === bb && ab("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, SM.I)(this.handle, (bb => {
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
        const ab = this.bridge.getLobbyFiles();
        let Ub = UT(bb, this.lastSynced);
        for (const Tb in ab)
          if ((0, tM.e)(Tb) && Ub[Tb] === SM.o) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Ab = Object.keys(Ub).filter((bb => (0, tM.e)(bb) && !(bb in ab)));
        Ab.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Tb of Object.keys(ab).filter(tM.e))(Tb in Ub || Ab.length > 0 || !(Tb in this.lastSynced)) && (Ub[Tb] = tM.n);
        if (!bT(Ub, bb)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(bb, Ub), Ub = UT(await (0, SM.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!bT(Ub, this.lastSynced)) {
          this.applying = !0;
          try {
            const bb = aT(this.lastSynced, Ub);
            if (await this.pushDiskDeltaToLobby(Ub, ab), null !== this.lastLobbySeen)
              for (const Ub of [...bb.creates, ...bb.updates, ...bb.deletes])(0, tM.e)(Ub) || (Ub in ab ? this.lastLobbySeen[Ub] = ab[Ub] : delete this.lastLobbySeen[Ub]);
            this.lastSynced = {
              ...Ub
            }
          } catch (Mb) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Mb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(bb, ab) {
        if (this.handle) {
          for (const Ub of Object.keys(bb)) Ub in ab || await (0, SM.B)(this.handle, Ub);
          for (const [Ub, Ab] of Object.entries(ab)) bb[Ub] !== Ab && await (0, SM.O)(this.handle, Ub, Ab)
        }
      }
      async applyRemoteTreeToDisk(bb) {
        if (!this.handle) return;
        const ab = this.lastLobbySeen;
        if (null === ab) return void(this.lastLobbySeen = {
          ...bb
        });
        const Ub = Object.keys(bb).filter((Ub => ab[Ub] !== bb[Ub])),
          Ab = Object.keys(ab).filter((ab => !(ab in bb)));
        if (0 !== Ub.length || 0 !== Ab.length) {
          this.applying = !0;
          try {
            for (const ab of [...Ab, ...Ub]) try {
              if (ab in bb) await (0, SM.O)(this.handle, ab, bb[ab]), this.lastSynced = {
                ...this.lastSynced,
                [ab]: bb[ab]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [ab]: bb[ab]
              };
              else {
                await (0, SM.B)(this.handle, ab);
                const bb = {
                  ...this.lastSynced
                };
                delete bb[ab], this.lastSynced = bb;
                const Ub = {
                  ...this.lastLobbySeen
                };
                delete Ub[ab], this.lastLobbySeen = Ub
              }
            } catch (Mb) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Mb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(bb, ab) {
        const Ub = function(bb, ab) {
          const Ub = (0, QM.c)(bb),
            Ab = (0, QM.c)(ab);
          return Ub && Ab && Ub !== Ab ? {
            from: Ub,
            to: Ab
          } : null
        }(bb, ab);
        return !!Ub && (this.bridge.renameFile(Ub.from, Ub.to), await this.bridge.waitForLobbyPath(Ub.to, !0), !0)
      }
      async applyLocalTreeToLobby(bb) {
        var ab;
        const Ub = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), bb);
        const Ab = this.bridge.getLobbyFiles(),
          Mb = aT(Ab, bb),
          Tb = AT(Mb.deletes, Ab);
        for (const eb of Mb.creates)(0, tM.e)(eb) || (this.bridge.createFile(eb, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(eb, !0));
        for (const eb of Tb)(0, tM.e)(eb) || (this.bridge.deleteFile(eb), await this.bridge.waitForLobbyPath(eb, !1));
        if (!(0, QM.c)(this.bridge.getLobbyFiles()) && !(0, QM.c)(bb)) {
          if (this.bridge.createFile(hM.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(hM.h, !0), !this.handle) return;
          await (0, SM.O)(this.handle, hM.h, ""), bb = {
            ...bb,
            [hM.h]: ""
          }
        }
        const Eb = this.bridge.getLobbyFiles();
        for (const eb of Object.keys(bb))(0, tM.e)(eb) || Eb[eb] !== bb[eb] && await MT(this.bridge, eb, bb[eb]);
        const Yb = this.bridge.getLobbyFiles(),
          Bb = Ub in Yb ? Ub : null !== (ab = (0, QM.c)(Yb)) && void 0 !== ab ? ab : hM.h;
        await this.bridge.ensureJoined(Bb)
      }
      async pushDiskDeltaToLobby(bb, ab) {
        const Ub = this.bridge.getActivePath(),
          Ab = await this.renameLobbyEntryIfSwitched(ab, bb) ? this.bridge.getLobbyFiles() : ab,
          Mb = aT(this.lastSynced, bb),
          Tb = AT(Mb.deletes, Ab).filter((bb => bb in Ab));
        for (const Eb of Mb.creates)(0, tM.e)(Eb) || (Eb in this.bridge.getLobbyFiles() || (this.bridge.createFile(Eb, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Eb, !0)), await MT(this.bridge, Eb, bb[Eb]));
        for (const Eb of Tb)(0, tM.e)(Eb) ? await this.bridge.deleteSchematic(Eb) : (this.bridge.deleteFile(Eb), await this.bridge.waitForLobbyPath(Eb, !1));
        for (const Eb of Mb.updates)(0, tM.e)(Eb) || await MT(this.bridge, Eb, bb[Eb]);
        Ub in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== Ub && await this.bridge.ensureJoined(Ub)
      }
    }
    var ET = Ub(1142);

    function YT() {
      const {
        websocketUrl: bb,
        gameNameWithVariation: ab,
        lobbyName: Ub
      } = eb.gameBridge.latest("connectedGame");
      return {
        gsUrl: ET.clientSideServerUrls.getHttpUrlFromWebSocketUrl(bb),
        gameNameWithVariation: ab,
        lobbyName: Ub
      }
    }
    async function BT(bb) {
      const {
        gsUrl: ab,
        gameNameWithVariation: Ub,
        lobbyName: Ab
      } = YT();
      return await (0, FM.postBinaryWithMetricsCookiesAndCustomResponse)(`${ab}/code/schematics`, dM.Wj.schematics.toBuffer({
        gameNameWithVariation: Ub,
        lobbyName: Ab,
        request: JSON.stringify(bb)
      }), {
        retries: 0
      }, FM.HttpPayloadType.json)
    }
    var eT = Ub(35805);

    function vT(bb) {
      let {
        path: ab,
        revision: Ub
      } = bb;
      const [Ab, Tb] = (0, Mb.useState)(""), [Eb, Yb] = (0, Mb.useState)(!1), [Bb, eb] = (0, Mb.useState)(0);
      return (0, Mb.useEffect)((() => {
        let bb = !1;
        return Tb(""), Yb(!1), BT({
          action: "preview",
          path: ab
        }).then((ab => {
          bb || Tb(`data:image/webp;base64,${ab.previewBase64}`)
        })).catch((ab => {
          console.error("Could not load schematic preview", ab), bb || Yb(!0)
        })), () => {
          bb = !0
        }
      }), [ab, Ub, Bb]), (0, vb.jsxs)("div", {
        className: "SchematicPreview",
        children: [Ab && (0, vb.jsx)("img", {
          src: Ab,
          alt: `Preview of ${ab}`
        }), !Ab && !Eb && (0, vb.jsx)(Wb.b, {
          loaderType: "Secondary"
        }), Eb && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, vb.jsx)(Xb.g, {
            onClick: () => {
              eb(Bb + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function LT(bb) {
      var ab;
      let {
        initialPath: Ub,
        onChanged: Ab,
        onClose: Tb
      } = bb;
      const Eb = "" === Ub,
        [Yb, Bb] = (0, Mb.useState)(null),
        [eb, Lb] = (0, Mb.useState)(Ub),
        [Pb, jb] = (0, Mb.useState)(!1),
        [Rb, kb] = (0, Mb.useState)(!1),
        [yb, Zb] = (0, Mb.useState)(null),
        [Db, zb] = (0, Mb.useState)(!1),
        [xb, ib] = (0, Mb.useState)(""),
        fb = (0, Mb.useRef)(null),
        mb = (0, Mb.useRef)(!1),
        pb = (0, Mb.useRef)(!0);
      (0, Mb.useEffect)((() => (pb.current = !0, BT({
        action: "state"
      }).then((bb => {
        pb.current && Bb(bb)
      })).catch((bb => {
        console.error("Could not load schematic assets", bb), pb.current && ib("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        pb.current = !1
      })), []);
      const Nb = null === Yb || void 0 === Yb ? void 0 : Yb.assets[Ub],
        Wb = Object.keys(null !== (ab = null === Yb || void 0 === Yb ? void 0 : Yb.assets) && void 0 !== ab ? ab : {}).length,
        Hb = eb.trim(),
        Ib = Hb ? (0, tM.e)(Hb) ? null !== Yb && void 0 !== Yb && Yb.assets[Hb] && (Eb || Hb !== Ub) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        db = !!Hb && !Ib && (Eb ? Wb < tM.g : Hb !== Ub),
        Fb = Db || !Yb;
      async function hb(bb) {
        if (!mb.current && pb.current) {
          mb.current = !0, zb(!0), ib("");
          try {
            const ab = await BT({
              ...bb,
              expectedRevision: Yb.revision
            });
            Ab(ab), pb.current && Tb()
          } catch (Ub) {
            var ab;
            if (console.error("Schematic asset operation failed", Ub), pb.current) ib(Ub instanceof sb.c ? null !== (ab = Ub.errorMessageForUser) && void 0 !== ab ? ab : Ub.message : String(Ub));
            try {
              const bb = await BT({
                action: "state"
              });
              Ab(bb), pb.current && Bb(bb)
            } catch (Mb) {
              console.error("Could not refresh schematic assets", Mb)
            }
          } finally {
            mb.current = !1, pb.current && zb(!1)
          }
        }
      }
      return (0, vb.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, vb.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Eb ? "New schematic" : Pb ? "Rename schematic" : "Schematic"
        }), xb && (0, vb.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: xb
        }), !Yb && !xb && (0, vb.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, vb.jsxs)("fieldset", {
          disabled: Fb,
          children: [Eb || Pb ? (0, vb.jsxs)("label", {
            className: "SchematicField",
            children: [(0, vb.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, vb.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, vb.jsx)(Na.c, {
                className: "InputGenericPopupInput",
                defaultValue: Ub,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Lb
              }, Pb ? "rename" : "create")
            })]
          }) : (0, vb.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: Ub
          }), (Eb || Pb) && Ib && (0, vb.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Ib
          }), Eb ? (0, vb.jsxs)(vb.Fragment, {
            children: [Wb >= tM.g && (0, vb.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", tM.g, " maximum)."]
            }), Rb ? (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, vb.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Fb || !db,
                children: (0, vb.jsx)(eT.c, {
                  loading: null === yb,
                  schematics: null !== yb && void 0 !== yb ? yb : [],
                  disableAutoExport: !0,
                  onSchematicPicked: bb => {
                    !Fb && db && hb({
                      action: "profile",
                      path: Hb,
                      schematicId: bb.schematicId
                    })
                  }
                })
              }), (0, vb.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, vb.jsx)(Xb.g, {
                  className: "InputGenericPopupButton",
                  disabled: Fb,
                  onClick: () => {
                    kb(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, vb.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, vb.jsx)(Xb.g, {
                className: "InputGenericPopupButton",
                disabled: Fb || !db,
                onClick: () => {
                  fb.current.click()
                },
                children: "Upload Schematic"
              }), (0, vb.jsx)(Xb.g, {
                className: "InputGenericPopupButton",
                disabled: Fb || !db,
                onClick: () => {
                  !async function() {
                    if (kb(!0), ib(""), !yb) try {
                      const bb = await (0, FM.postJsonWithMetricsCookiesAndJsonResponse)(`${ET.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      pb.current && Zb(bb)
                    } catch (bb) {
                      console.error("Could not load profile schematics", bb), pb.current && (kb(!1), ib("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, vb.jsx)("input", {
              ref: fb,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: bb => {
                var ab;
                const Ub = null === (ab = bb.target.files) || void 0 === ab ? void 0 : ab[0];
                if (bb.target.value = "", !Ub) return;
                if (Ub.size > tM.h) return void ib("The schematic file is too large.");
                const Ab = Hb;
                zb(!0);
                const Mb = new FileReader;
                Mb.onload = () => {
                  hb({
                    action: "upload",
                    path: Ab,
                    base64: String(Mb.result).split(",")[1]
                  })
                }, Mb.onerror = () => {
                  console.error("Could not read schematic file", Mb.error), pb.current && (zb(!1), ib("Could not read the selected file."))
                }, Mb.readAsDataURL(Ub)
              }
            })]
          }) : Nb ? (0, vb.jsxs)(vb.Fragment, {
            children: [!Pb && (0, vb.jsx)(vT, {
              path: Ub,
              revision: Yb.revision
            }), !Pb && (0, vb.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Nb.byteSize / 1024), " KB \xb7 ", Nb.dimensions.join(" \xd7 "), " blocks"]
            }), (0, vb.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Pb ? (0, vb.jsxs)(vb.Fragment, {
                children: [(0, vb.jsx)(Xb.g, {
                  className: "InputGenericPopupButton",
                  disabled: Fb || !db,
                  onClick: () => {
                    hb({
                      action: "rename",
                      path: Ub,
                      newPath: Hb
                    })
                  },
                  children: "Rename"
                }), (0, vb.jsx)(Xb.g, {
                  className: "InputGenericPopupButton",
                  disabled: Fb,
                  onClick: () => {
                    jb(!1), Lb(Ub)
                  },
                  children: "Cancel"
                })]
              }) : (0, vb.jsxs)(vb.Fragment, {
                children: [(0, vb.jsx)(Xb.g, {
                  className: "InputGenericPopupButton",
                  disabled: Fb,
                  onClick: () => {
                    jb(!0)
                  },
                  children: "Rename"
                }), (0, vb.jsx)(Xb.D, {
                  className: "InputGenericPopupButton",
                  disabled: Fb,
                  onClick: () => {
                    hb({
                      action: "remove",
                      path: Ub
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Yb && (0, vb.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function PT(bb) {
      if ("string" !== typeof bb) return null;
      try {
        const ab = JSON.parse(bb);
        return (0, QM.k)(null === ab || void 0 === ab ? void 0 : ab.worldCodeEngine) && "boolean" === typeof ab.engineLocked && function(bb) {
          if (null === bb) return !0;
          const ab = null === bb || void 0 === bb ? void 0 : bb.location;
          return "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.reason) && (null === ab || "string" === typeof(null === ab || void 0 === ab ? void 0 : ab.path) && Number.isInteger(ab.line))
        }(ab.fallback) ? ab : (console.error("[CodeCollab] Malformed engine settings", bb), null)
      } catch (ab) {
        return console.error("[CodeCollab] Failed to parse engine settings", ab), null
      }
    }

    function XT(bb) {
      let {
        fallback: ab,
        onGoToLine: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Ob.A)(), {
        location: Mb
      } = ab;
      return (0, vb.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Ab("codeEditorEngine:notice", {
          reason: ab.reason
        }), Mb && (0, vb.jsxs)(vb.Fragment, {
          children: [" ", (0, vb.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              Ub(Mb.path, Mb.line)
            },
            children: Ab("codeEditorEngine:goToLine", {
              line: String(Mb.line)
            })
          })]
        })]
      })
    }
    var jT = Ub(4620);

    function RT(bb) {
      let {
        label: ab,
        hint: Ub,
        checked: Ab,
        onChange: Mb
      } = bb;
      return (0, vb.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, vb.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, vb.jsx)("span", {
            children: ab
          }), (0, vb.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: Ub
          })]
        }), (0, vb.jsx)("span", {
          className: "SwitchContainer",
          children: (0, vb.jsx)(za.d, {
            className: "SwitchCheckbox",
            checked: Ab,
            onChange: bb => {
              Mb(bb.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function kT(bb) {
      let {
        engine: ab,
        onSetEngine: Ub,
        aiHints: Ab,
        variation: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Ob.A)();
      return (0, vb.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, vb.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Tb("codeEditor:moreOptions")
        }), ab && (0, vb.jsx)(RT, {
          label: Tb("codeEditorEngine:toggle"),
          hint: Tb("codeEditorEngine:toggleHint"),
          checked: "ses" === ab,
          onChange: bb => {
            Ub(bb ? "ses" : "quickjs")
          }
        }), Ab && (0, vb.jsx)(RT, {
          label: Tb("codeEditorAiHints:toggle"),
          hint: Tb("codeEditorAiHints:toggleHint"),
          checked: Ab.shown,
          onChange: Ab.setShown
        }), Mb && (0, vb.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, vb.jsx)(jT.g, {
            label: "codeEditor:variationLabel",
            children: (0, vb.jsx)(Na.c, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Mb.name,
              onValueChange: Mb.setName,
              onEnter: Mb.reload
            })
          }), (0, vb.jsx)(Xb.x, {
            className: "CodeEditorButton",
            onClick: Mb.reload,
            children: Tb("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var yT = Ub(36209),
      ZT = Ub(36214);

    function DT(bb) {
      let {
        close: ab
      } = bb;
      const {
        t: Ub
      } = (0, Ob.A)(), Ab = [{
        name: Ub("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: Ub("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: Ub("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, vb.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, vb.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Ub("codeEditor:tutorialsTitle")
        }), (0, vb.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Ab.map((bb => (0, vb.jsx)(Xb.g, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              ab(), (0, ZT.J)(bb.tutorial)
            },
            children: bb.name
          }, bb.tutorial)))
        })]
      })
    }
    var zT = Ub(116),
      xT = Ub(35977),
      iT = Ub(8340);
    const fT = (0, Mb.forwardRef)((function(bb, ab) {
      let {
        value: Ub,
        onChange: Ab,
        onSubmit: Mb,
        placeholder: Tb,
        maxLength: Eb,
        rows: Yb = 2,
        allowNewLines: Bb = !1,
        onKeyDown: eb,
        before: Lb
      } = bb;
      const {
        t: Pb
      } = (0, Ob.A)(), jb = "" !== Ub.trim(), Rb = () => {
        jb && Mb()
      };
      return (0, vb.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Lb, (0, vb.jsx)("textarea", {
          ref: ab,
          className: "PanelPromptInput",
          value: Ub,
          maxLength: Eb,
          rows: Yb,
          placeholder: Tb,
          spellCheck: !1,
          autoComplete: "off",
          onChange: bb => {
            Ab(Bb ? bb.target.value : bb.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: bb => {
            bb.nativeEvent.isComposing || 229 === bb.nativeEvent.keyCode ? bb.stopPropagation() : "Escape" !== bb.key && (bb.stopPropagation(), null === eb || void 0 === eb || eb(bb), bb.defaultPrevented || "Enter" !== bb.key || Bb && bb.shiftKey || (bb.preventDefault(), Rb()))
          }
        }), (0, vb.jsx)(Xb.g, {
          className: "PanelPromptSend",
          disabled: !jb,
          onClick: Rb,
          ariaLabel: Pb("codeEditorPanels:send"),
          children: (0, vb.jsx)(kb.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function mT(bb) {
      let {
        inputRef: ab
      } = bb;
      const {
        t: Ub
      } = (0, Ob.A)(), {
        messages: Ab,
        reportedPlayers: Tb,
        channel: Eb
      } = (0, iT.i)(), [Yb, Bb] = (0, Mb.useState)(""), eb = (0, Mb.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, vb.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, vb.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, vb.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: Ub("codeEditorChat:title")
          })
        }), 0 === Ab.length ? (0, vb.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: Ub("codeEditorChat:empty")
        }) : (0, vb.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, vb.jsx)(xT.e, {
            messages: Ab,
            reportedPlayers: Tb
          })
        }), (0, vb.jsx)(fT, {
          ref: ab,
          value: Yb,
          onChange: Bb,
          onSubmit: () => {
            (0, iT.g)(Yb), Bb(""), eb.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: pb.Oc,
          rows: 1,
          placeholder: Eb ? Ub("touchOnly" === (0, zT.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Eb.channelName
          }) : Ub("codeEditorChat:placeholder"),
          before: Eb && (0, vb.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Eb.elementBgColor
            },
            onClick: () => {
              iT.b.selectNextChannel(), ab.current.focus()
            },
            children: (0, vb.jsx)(fb.c, {
              text: Eb.elementContent
            })
          }),
          onKeyDown: bb => {
            const ab = Yb === eb.current.text;
            if ("ArrowUp" !== bb.key && "ArrowDown" !== bb.key || !ab && "" !== Yb) "Tab" === bb.key && !bb.shiftKey && Eb && (bb.preventDefault(), iT.b.selectNextChannel());
            else {
              bb.preventDefault();
              const Ub = ab ? eb.current.stepsBack : 0;
              eb.current = (0, iT.f)(Ub + ("ArrowUp" === bb.key ? 1 : -1)), Bb(eb.current.text)
            }
          }
        })]
      })
    }
    var pT = Ub(36220);

    function NT(bb) {
      let {
        lL: ab,
        worldPanel: Ub,
        closeWorld: Ab,
        aiShown: Mb,
        defaultWidth: Tb,
        children: Eb
      } = bb;
      const Yb = "hidden" !== ab;
      return (0, vb.jsx)(pT.d, {
        side: "right",
        defaultSize: Yb ? "max(18rem, 40%)" : Tb,
        covers: "expanded" === ab ? "always" : Yb || Mb ? "narrow" : void 0,
        children: (0, vb.jsxs)("div", {
          className: Xa()("CodeEditorRightColumn", {
            WorldExpanded: "expanded" === ab
          }),
          children: [Yb && (0, vb.jsx)(pT.d, {
            side: "top",
            onClose: Ab,
            children: Ub
          }), Eb]
        })
      })
    }
    var WT = Ub(1867),
      HT = Ub(1969),
      IT = Ub(1227);
    class dT {
      constructor(bb, ab, Ub) {
        this.measure = bb, this.apply = ab, this.now = Ub, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var bb, ab;
        return null !== (bb = null === (ab = this.last) || void 0 === ab ? void 0 : ab.rect) && void 0 !== bb ? bb : null
      }
      sync() {
        const bb = function(bb) {
          const ab = Math.round(bb.left),
            Ub = Math.round(bb.top);
          return {
            left: ab,
            top: Ub,
            width: Math.round(bb.right) - ab,
            height: Math.round(bb.bottom) - Ub
          }
        }(this.measure());
        if (bb.width <= 0 || bb.height <= 0) return;
        const ab = this.now(),
          Ub = this.last;
        let Ab = {
          width: bb.width,
          height: bb.height
        };
        null === Ub || bb.width === Ub.rect.width && bb.height === Ub.rect.height || (this.resizing = ab - this.resizedAt < 100, this.resizedAt = ab);
        const Mb = null !== Ub && this.resizing && ab - this.resizedAt < 100 && (bb.width !== Ub.bufferSize.width || bb.height !== Ub.bufferSize.height);
        Mb && (this.stretchedAt ??= ab), Mb && ab - this.stretchedAt < 250 ? Ab = Ub.bufferSize : this.stretchedAt = null;
        const Tb = {
          rect: bb,
          bufferSize: Ab
        };
        var Eb, Yb;
        null !== Ub && (Yb = Tb, (Eb = Ub).rect.left === Yb.rect.left && Eb.rect.top === Yb.rect.top && Eb.rect.width === Yb.rect.width && Eb.rect.height === Yb.rect.height && Eb.bufferSize.width === Yb.bufferSize.width && Eb.bufferSize.height === Yb.bufferSize.height) || (this.last = Tb, this.apply(Tb))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function FT(bb) {
      const {
        style: ab
      } = document.documentElement;
      for (const [Ub, Ab] of [
          ["--worldViewLeft", null === bb || void 0 === bb ? void 0 : bb.left],
          ["--worldViewTop", null === bb || void 0 === bb ? void 0 : bb.top],
          ["--worldViewWidth", null === bb || void 0 === bb ? void 0 : bb.width],
          ["--worldViewHeight", null === bb || void 0 === bb ? void 0 : bb.height]
        ]) void 0 === Ab ? ab.removeProperty(Ub) : ab.setProperty(Ub, `${Ab}px`)
    }
    var hT = Ub(1639),
      GT = Ub(1880);

    function QT(bb, ab) {
      (0, Mb.useEffect)((() => {
        if (!bb) return;
        const Ub = bb => {
          var Ub;
          "Escape" === bb.key ? (bb.stopPropagation(), bb.preventDefault(), ab()) : (Ub = bb.code, Object.entries(EU.x).some((bb => {
            let [ab, Ab] = bb;
            const Mb = GT.d[ab];
            return Mb.includes("ui") && !Mb.includes("core") && Ab.includes(Ub)
          })) && !(0, hT.isTextEntry)(bb.target) && bb.preventDefault())
        };
        window.addEventListener("keydown", Ub, !0);
        const Ab = (0, ob.m)(ab);
        return () => {
          window.removeEventListener("keydown", Ub, !0), Ab()
        }
      }), [bb, ab])
    }

    function qT() {
      return (0, DM.f)().some((bb => bb !== DM.b))
    }

    function uT(bb, ab) {
      return bb.map((bb => ab ? String(bb) : bb.toFixed(1))).join(", ")
    }

    function rT(bb) {
      let {
        freeCamera: ab,
        picking: Ub,
        hovered: Ab
      } = bb;
      const {
        t: Tb
      } = (0, Ob.A)(), Eb = (0, Mb.useRef)(null), Yb = (0, Mb.useRef)(null);
      return (0, Mb.useEffect)((() => {
        const bb = (bb, ab) => {
            bb.textContent !== ab && (bb.textContent = ab)
          },
          Ub = () => {
            const Ub = ab ? eb.gameBridge.lookup("freeCameraPos", null) : null;
            bb(Eb.current, uT(null !== Ub && void 0 !== Ub ? Ub : eb.gameBridge.lookup("localPos", null), !1));
            const Ab = eb.gameBridge.lookup("targetedBlockPos", null);
            bb(Yb.current, Ab ? uT(Ab, !0) : "-")
          };
        return Ub(), (0, IT.t)(Ub)
      }), [ab]), (0, vb.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, vb.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Tb(ab ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, vb.jsx)("span", {
          ref: Eb
        }), (0, vb.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Tb("codeEditorWorld:lookingAt")
        }), (0, vb.jsx)("span", {
          ref: Yb,
          hidden: Ub
        }), Ub && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("span", {
            children: Ab ? uT(Ab.pos, !0) : "-"
          }), Ab && (0, vb.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Ab.name
          })]
        })]
      })
    }
    var KT = Ub(36226);

    function oT(bb) {
      const ab = bb.currentTarget.getBoundingClientRect();
      return {
        x: (bb.clientX - ab.left) / ab.width,
        y: (bb.clientY - ab.top) / ab.height
      }
    }

    function lT(bb) {
      const [ab, Ub] = (0, Mb.useState)(!1), [Ab, Tb] = (0, Mb.useState)(null), Eb = (0, Mb.useRef)(null);
      (0, Mb.useEffect)((() => {
        if (!ab) return;
        let bb = null,
          Ub = null,
          Ab = 1 / 0;
        const Mb = (0, IT.l)((ab => {
          Ab += ab;
          const Mb = Eb.current;
          if (Mb === Ub && Ab < 100) return;
          Ub = Mb, Ab = 0;
          const Yb = Mb && eb.gameBridge.lookup("blockAtViewPoint", Mb);
          var Bb, vb;
          (Bb = Yb) === (vb = bb) || null !== Bb && null !== vb && Bb.name === vb.name && (0, KT.e)(Bb.pos, vb.pos) && (0, KT.e)(Bb.normal, vb.normal) || (bb = Yb, Tb(Yb), eb.gameBridge.send("setBlockHighlight", Yb))
        }));
        return () => {
          Mb(), null !== bb && eb.gameBridge.send("setBlockHighlight", null), Tb(null)
        }
      }), [ab]);
      const Yb = (0, Mb.useCallback)((() => {
        Ub(!1)
      }), []);
      QT(ab, Yb);
      const Bb = {
        onPointerMove: bb => {
          Eb.current = oT(bb)
        },
        onPointerLeave: () => {
          Eb.current = null
        },
        onClick: Ab => {
          if (!ab) return;
          const Mb = eb.gameBridge.lookup("blockAtViewPoint", oT(Ab));
          null !== Mb && (Ub(!1), bb(Mb.pos))
        }
      };
      return {
        picking: ab,
        setPicking: Ub,
        hovered: Ab,
        slotHandlers: Bb
      }
    }

    function tT(bb) {
      eb.gameBridge.send("setFreeCameraMovesFly", bb)
    }

    function wT(bb) {
      let {
        shown: ab,
        setShown: Ub,
        canInsertCode: Ab
      } = bb;
      const {
        t: Tb
      } = (0, Ob.A)(), {
        isTouchScreen: Eb
      } = (0, Kb.n)(["isTouchScreen"]), Yb = (0, Mb.useRef)(null), eb = (0, Mb.useCallback)((() => {
        var bb;
        null === (bb = Yb.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === bb || bb.focus()
      }), []), {
        control: Lb,
        take: Pb,
        release: Rb,
        blocked: yb
      } = function(bb) {
        const [ab, Ub] = (0, Mb.useState)("none"), Ab = (0, Mb.useRef)("none"), [Tb, Eb] = (0, Mb.useState)(!1), Yb = bb => {
          Ab.current = bb, Ub(bb)
        }, Bb = (0, Mb.useCallback)((() => {
          const ab = Ab.current;
          "none" !== ab && (Yb("none"), (0, DM.h)(DM.b), "mouse" === ab && bb())
        }), [bb]), eb = (0, Mb.useCallback)((bb => {
          qT() ? Eb(!0) : (Yb("mouse" === bb && "touchOnly" !== (0, zT.b)() ? "mouse" : "touch"), (0, DM.g)(DM.b))
        }), []);
        return (0, mb.f)("pointerLockUpdate", (bb => {
          bb && "touch" === Ab.current && "touchOnly" !== (0, zT.b)() ? Yb("mouse") : bb || "mouse" !== Ab.current || Bb()
        })), (0, Mb.useEffect)((() => {
          if (!Tb) return;
          const bb = () => {
            qT() || Eb(!1)
          };
          return bb(), (0, DM.d)(bb)
        }), [Tb]), QT("none" !== ab, Bb), (0, Mb.useEffect)((() => {
          if ("none" === ab) return;
          const bb = bb => {
            (0, hT.isTextEntry)(bb.target) && Bb()
          };
          return document.addEventListener("focusin", bb), () => {
            document.removeEventListener("focusin", bb)
          }
        }), [ab, Bb]), (0, Mb.useEffect)((() => (document.addEventListener("pointerlockerror", Bb), () => {
          document.removeEventListener("pointerlockerror", Bb)
        })), [Bb]), (0, Mb.useEffect)((() => () => {
          "none" !== Ab.current && null !== Kb.c.get("openInGameMenuName") && (0, DM.h)(DM.b)
        }), []), {
          control: ab,
          take: eb,
          release: Bb,
          blocked: Tb
        }
      }(eb), Zb = (0, HT.e)(pT.g);
      (0, Mb.useEffect)((() => {
        "touch" !== Lb || "shown" !== ab || Zb ? "none" === Lb && "expanded" === ab && Ub("shown") : Ub("expanded")
      }), [Lb, Zb]),
      function(bb, ab) {
        const Ub = (0, Mb.useRef)(ab);
        Ub.current = ab;
        const Ab = (0, Mb.useRef)(null);
        (0, Mb.useLayoutEffect)((() => {
          const ab = new dT((() => bb.current.getBoundingClientRect()), (bb => {
            var ab;
            "none" !== Ub.current && FT(null !== (ab = null === bb || void 0 === bb ? void 0 : bb.rect) && void 0 !== ab ? ab : null), (0, IT.x)().setGameView(bb)
          }), (() => performance.now()));
          Ab.current = ab, ab.sync();
          const Mb = (0, IT.j)((() => {
            ab.sync()
          }));
          return () => {
            Mb(), Kb.c.set({
              worldPanelHud: null
            }), ab.stop()
          }
        }), [bb]), (0, Mb.useLayoutEffect)((() => {
          Ab.current.sync(), FT("none" === ab ? null : Ab.current.rect), Kb.c.set({
            worldPanelHud: ab
          })
        }), [ab])
      }(Yb, "touch" === Lb ? "touchControls" : "none");
      const {
        picking: Db,
        setPicking: zb,
        hovered: xb,
        slotHandlers: ib
      } = lT((bb => {
        jb.m.IR("CodeEditorInsertText", {
          text: `[${bb.join(", ")}]`,
          focus: !Eb
        }), (0, pT.g)() && Ub("hidden")
      })), fb = function() {
        const {
          allowed: bb,
          movesFly: ab
        } = (0, Nb.k)("freeCamera"), Ub = (0, Mb.useRef)(ab), Ab = (0, Mb.useRef)(ab);
        return Ab.current !== ab && (Ab.current = ab, Ub.current = ab), (0, Mb.useEffect)((() => () => {
          Ub.current && tT(!1)
        }), []), {
          allowed: bb,
          on: ab,
          toggle: () => {
            Ub.current = !ab, tT(!ab)
          }
        }
      }(), pb = (0, Bb.h)("hideCoordinates"), Wb = (0, Nb.k)("localPlayerAlive"), Hb = !Wb || yb;
      (0, Mb.useEffect)((() => {
        Wb || Rb()
      }), [Wb, Rb]), (0, Mb.useEffect)((() => {
        !Hb && Ab || zb(!1)
      }), [Hb, Ab, zb]);
      const Ib = fb.on ? Xb.m : Xb.g,
        db = Db ? Xb.m : Xb.g;
      return (0, vb.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, vb.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, vb.jsx)("span", {
            className: "WorldPanelTitle",
            children: Tb("codeEditorWorld:title")
          }), "touch" === Lb && !Zb && (0, vb.jsx)(Xb.g, {
            className: "WorldPanelButton",
            onClick: Rb,
            children: Tb("codeEditorWorld:backToCode")
          }), !Hb && fb.allowed && !Eb && (0, vb.jsx)(Cb.g, {
            tooltipInner: Tb("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, vb.jsx)(Ib, {
              className: "WorldPanelButton",
              ariaPressed: fb.on,
              ariaLabel: Tb("codeEditorWorld:freeCamera"),
              onClick: fb.toggle,
              children: (0, vb.jsx)(kb.e, {
                name: "video"
              })
            })
          }), !Hb && Ab && (0, vb.jsx)(Cb.g, {
            tooltipInner: Tb("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, vb.jsxs)(db, {
              className: "WorldPanelButton",
              ariaPressed: Db,
              onClick: () => {
                Rb(), zb(!Db)
              },
              children: [(0, vb.jsx)(kb.e, {
                name: "crosshairs"
              }), Tb("codeEditorWorld:pick")]
            })
          })]
        }), !pb && (0, vb.jsx)(rT, {
          freeCamera: fb.on,
          picking: Db,
          hovered: xb
        }), (0, vb.jsxs)("div", {
          ref: Yb,
          className: Xa()("WorldPanelSlot", {
            TouchControl: "touch" === Lb,
            Picking: Db
          }),
          onPointerDown: bb => {
            0 !== bb.button || Hb || Db || Pb(bb.pointerType)
          },
          ...ib,
          children: [!Hb && !Db && (0, vb.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Hb && "touch" !== Lb && (0, vb.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Db && Tb(Eb ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Db && "none" === Lb && !fb.on && Tb(Eb ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Db && "none" === Lb && fb.on && Tb("codeEditorWorld:clickToFly"), "mouse" === Lb && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)(WT.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), Tb("codeEditorWorld:backToCode")]
            })]
          }), Hb && (0, vb.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, vb.jsx)("span", {
              children: Tb(Wb ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, vb.jsx)(Xb.g, {
              onClick: ob.e,
              children: Tb("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var sT = Ub(4690);

    function gT(bb) {
      let {
        lL: ab,
        setWorld: Ub,
        toggleWorld: Ab,
        aiShown: Mb,
        closeAi: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Ob.A)(), Yb = Mb ? "ai" : "hidden" !== ab ? "world" : "code", Bb = [{
        value: "code",
        label: Eb("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Eb("codeEditorWorld:title")
      }];
      Mb && Bb.push({
        value: "ai",
        label: Eb("codeEditorWorld:aiPane")
      });
      return (0, vb.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, vb.jsx)(sT.e, {
          options: Bb,
          value: Yb,
          onChange: bb => {
            "world" !== bb ? (Mb && Tb(), Ub("hidden")) : "hidden" === ab ? Ab() : Tb()
          },
          ariaLabel: Eb("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var CT = Ub(36231);
    class VT {
      constructor(bb, ab) {
        this.storageKey = bb, this.defaultValue = ab, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const bb = hb.f.getItem(this.storageKey);
            this.value = "boolean" === typeof bb ? bb : this.defaultValue
          }
          return this.value
        }, this.set = bb => {
          this.value = bb, hb.f.setItem(this.storageKey, bb);
          for (const ab of this.listeners) ab(bb)
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    }
    const OT = new VT("codeEditorLightMode", !1),
      cT = new VT("codeEditorAiHints", !0);

    function JT(bb) {
      const [ab, Ub] = (0, Mb.useState)(bb.get);
      return (0, Mb.useEffect)((() => {
        const ab = bb.subscribe(Ub);
        return Ub(bb.get()), ab
      }), [bb]), [ab, bb.set]
    }
    var nT = Ub(36240),
      ST = Ub(36242),
      bE = Ub(36247);
    const aE = (0, Mb.lazy)((() => Promise.all([Ub.e(289), Ub.e(285), Ub.e(288), Ub.e(284), Ub.e(81), Ub.e(287), Ub.e(286), Ub.e(283)]).then((() => Ub(40404))))),
      UE = (0, Mb.lazy)((() => Promise.all([Ub.e(76), Ub.e(79), Ub.e(80), Ub.e(78), Ub.e(291)]).then((() => Ub(40588))))),
      AE = (0, Mb.lazy)((() => Promise.all([Ub.e(289), Ub.e(288), Ub.e(81), Ub.e(79), Ub.e(80), Ub.e(78), Ub.e(287), Ub.e(286), Ub.e(77), Ub.e(88)]).then((() => Ub(40590)))));

    function ME(bb) {
      return eb.gameBridge.query("worldCodeAiChunk", bb)
    }

    function TE() {
      return eb.gameBridge.query("worldCodeAiGameState", null)
    }

    function EE(bb) {
      const {
        gsUrl: ab,
        gameNameWithVariation: Ub,
        lobbyName: Ab
      } = YT();
      return (0, FM.postJsonWithMetricsCookiesAndJsonResponse)(`${ab}/code/get-lobby-code`, dM.Wj["get-lobby-code"].toBuffer({
        gameNameWithVariation: Ub,
        lobbyName: Ab,
        path: bb
      }), {
        retries: 1
      })
    }
    let YE = !1;
    const BE = [],
      eE = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      vE = (0, Mb.memo)((function(bb) {
        var ab, Ub;
        let {
          show: Ab,
          onOpen: Tb,
          onClose: Yb,
          isLobbyCode: Lb
        } = bb;
        const Pb = (0, Mb.useRef)(""),
          [Rb, yb] = (0, Mb.useState)(null),
          Zb = (0, Mb.useRef)(Lb),
          [Db, zb] = (0, Mb.useState)({
            message: null,
            type: null
          }),
          [xb, ib] = (0, Mb.useState)(""),
          fb = Db.message ? Db : {
            message: xb,
            type: "warning"
          },
          [Hb, Ib] = (0, Mb.useState)(!0),
          [db, hb] = JT(OT),
          [Gb, Qb] = JT(cT),
          [qb, ub] = (0, Mb.useState)(!1),
          [rb, lb] = (0, Mb.useState)(!1),
          tb = (0, Mb.useRef)(null),
          wb = (0, Mb.useRef)(!1);
        (0, Mb.useEffect)((() => {
          var bb;
          rb && wb.current && (wb.current = !1, null === (bb = tb.current) || void 0 === bb || bb.focus())
        }), [rb]);
        const sb = (0, CT.e)(),
          gb = (0, Mb.useRef)(null),
          Vb = (0, Mb.useRef)(null),
          {
            openInGameMenuName: cb,
            openEverythingMenuName: Jb
          } = (0, Kb.n)(["openInGameMenuName", "openEverythingMenuName"]),
          nb = bb => {
            Ab && (gb.current = bb, pa.current = !0)
          };
        (0, mb.f)("OpenReportMenu", (() => {
          nb("GX")
        })), (0, mb.f)("OpenStoreFromCodeEditor", (() => {
          nb("store")
        })), (0, Mb.useEffect)((() => {
          const bb = gb.current;
          null === bb || "GX" === bb && ("makeReport" === cb || "makeDiscordReport" === cb) || "store" === bb && null !== Jb || (gb.current = null, null === cb && null === Jb ? Lb ? (Vb.current = aU.current, jb.m.IR("EditLobbyCode", Rb)) : jb.m.IR("EditCodeBlock", {
            pos: Rb,
            canChangePos: Zb.current
          }) : (0, ZT.z)())
        }), [cb, Jb, Lb, Rb]), (0, Mb.useEffect)((() => {
          if (Ab) return () => {
            Vb.current = null
          }
        }), [Ab]);
        const [Sb, ba] = function() {
          const [bb, ab] = (0, Mb.useState)(YE);
          return (0, mb.f)("CodeEditorAiHelperShown", (bb => {
            ab(bb)
          })), [bb, (0, Mb.useCallback)((bb => {
            YE = bb, jb.m.IR("CodeEditorAiHelperShown", bb)
          }), [])]
        }(), [aa, Ua] = (0, Mb.useState)(null), [Aa, Ma] = (0, Mb.useState)([]), [Ta, Ea] = (0, Mb.useState)(0), [Ya, Ba] = (0, Mb.useState)(0), [ea, va] = (0, Mb.useState)(""), La = (0, Mb.useRef)(null), [Pa, ja] = (0, Mb.useState)(Lb ? bE.d : null), Ra = Lb || null !== Rb, ka = (0, Bb.h)("canEditCode"), ya = (0, Bb.h)("canUseDevCreativeItems"), Za = (0, yT.k)("welcome"), Da = (0, yT.k)("docsOverview"), za = Da ? "docsOverview" : "welcome", xa = null !== Da && void 0 !== Da ? Da : Za, ia = (0, yT.k)("aiHelperOverview"), fa = ia ? "aiHelperOverview" : "welcome", ma = null !== ia && void 0 !== ia ? ia : Za, pa = (0, Mb.useRef)(!1), Na = (0, Mb.useRef)(!1), Wa = (0, Mb.useRef)(null), [Ha, Ia] = (0, Mb.useState)(""), [Fa, ha] = (0, Mb.useState)(!1), [Ga, Qa] = (0, Mb.useState)(null), qa = (0, Nb.k)("connectedGame"), ua = Lb && ka && "classic" === qa.gameNameWithVariation && !(0, da.R)(qa.lobbyName), [ra, Ka] = (0, Mb.useState)(null), [oa, la] = (0, Mb.useState)({
          [hM.h]: ""
        }), [ta, wa] = (0, Mb.useState)({
          assets: {},
          revision: 0
        }), sa = (0, Mb.useRef)(ta), ga = (0, Mb.useCallback)((bb => {
          var ab;
          bb.revision < sa.current.revision || (sa.current = bb, wa(bb), ib(bb.startupError ? `Schematics could not load: ${bb.startupError}` : ""), null === (ab = RU.current) || void 0 === ab || ab.onLobbyFilesChanged({
            ...BU.current,
            ...(0, tM.j)(bb.assets)
          }))
        }), []), [Ca, Va] = (0, Mb.useState)(hM.h), [Oa, ca] = (0, Mb.useState)(null), [Ja, na] = (0, Mb.useState)(null), Sa = (0, Mb.useRef)(!1), bU = (0, Mb.useRef)(null), aU = (0, Mb.useRef)(Ca);
        aU.current = Ca;
        const UU = (0, Mb.useRef)(Oa);
        UU.current = Oa;
        const AU = Oa ? null : Ga,
          TU = AU && !AU.engineLocked ? AU.worldCodeEngine : null,
          YU = (0, Mb.useRef)(Ja);
        YU.current = Ja;
        const BU = (0, Mb.useRef)(oa);
        BU.current = oa;
        const eU = (0, Mb.useRef)(null),
          vU = (0, Mb.useRef)(null),
          [LU, PU] = (0, Mb.useState)(!1),
          XU = (0, SM.p)(),
          jU = (0, Mb.useRef)([]),
          RU = (0, Mb.useRef)(null),
          kU = (0, Mb.useRef)(null),
          yU = (0, Mb.useRef)(null);

        function ZU(bb) {
          zb(bb), clearTimeout(Wa.current), Wa.current = setTimeout((() => {
            zb({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const DU = (0, Mb.useCallback)((function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            Sa.current && bU.current && (eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.Leave,
              ma: (0, GM.x)(bU.current),
              zE: !!bb || null
            }), Sa.current = !1, bU.current = null), Ka(null)
          }), []),
          zU = (0, Mb.useCallback)((bb => {
            const ab = {
              kind: "lobby",
              path: bb
            };
            bU.current = ab, Va(bb), Pb.current = "", eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.Join,
              ma: (0, GM.x)(ab)
            }), Sa.current = !0
          }), []),
          xU = (0, Mb.useCallback)((bb => {
            var ab;
            const Ub = null === (ab = kU.current) || void 0 === ab ? void 0 : ab.collabState;
            return Ub && "lobby" === Ub.docKey.kind && Ub.docKey.path === bb && aU.current === bb ? Promise.resolve({
              doc: Ub.doc,
              version: Ub.version,
              clientID: Ub.clientID,
              docKey: Ub.docKey,
              httpConfig: Ub.httpConfig
            }) : new Promise(((ab, Ub) => {
              const Ab = setTimeout((() => {
                  jU.current = jU.current.filter((bb => bb !== Mb)), Ub(new Error(`Timed out joining ${bb}`))
                }), 15e3),
                Mb = Ub => {
                  "lobby" === Ub.docKey.kind && Ub.docKey.path === bb && (clearTimeout(Ab), jU.current = jU.current.filter((bb => bb !== Mb)), ab(Ub))
                };
              jU.current.push(Mb), aU.current !== bb ? (DU(!0), zU(bb)) : Sa.current || zU(bb)
            }))
          }), [zU, DU]),
          iU = (0, Mb.useCallback)((async function(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Ab = Date.now();
            let Mb = bb in BU.current;
            for (; Mb !== ab;) {
              if (Date.now() - Ab > Ub) throw new Error(`Timed out waiting for lobby path ${bb} present=${ab}`);
              await (0, FA.O)(50), Mb = bb in BU.current
            }
          }), []),
          fU = (0, Mb.useCallback)((bb => {
            const ab = BU.current,
              Ub = hM.h in ab && hM.k in ab;
            if (!(0, QM.h)(bb) || Ub) {
              if (aU.current === bb) {
                var Ab;
                const Mb = Ub && (0, QM.h)(bb) ? bb === hM.h ? hM.k : hM.h : null !== (Ab = (0, QM.c)(ab)) && void 0 !== Ab ? Ab : hM.h;
                vU.current = {
                  fromPath: bb,
                  toPath: Mb
                }, Va(Mb)
              }
              eb.gameBridge.send("sendCodeCollab", {
                fa: GM.e.DeleteFile,
                ma: (0, GM.x)({
                  kind: "lobby",
                  path: aU.current
                }),
                xE: bb
              })
            }
          }), []),
          mU = (0, Mb.useCallback)((bb => {
            Vb.current = null, ca(null), na(null), !Lb || bb === aU.current && Sa.current || (DU(!0), zU(bb))
          }), [Lb, DU, zU]),
          pU = (0, Mb.useCallback)(((bb, ab) => {
            const Ub = oM.c[bb],
              Ab = Ub && ab in Ub.files ? ab : "index.ts";
            if (bb !== UU.current || Ab !== YU.current) {
              var Mb;
              if (bb !== UU.current) null === (Mb = RU.current) || void 0 === Mb || Mb.stopContinuousSync(), DU(!0);
              ca(bb), na(Ab)
            }
          }), [DU]),
          NU = (0, Mb.useCallback)((bb => {
            var ab;
            const Ub = aU.current,
              Ab = BU.current[Ub],
              Mb = Sa.current && !UU.current && Ub in bb && void 0 !== Ab ? {
                ...bb,
                [Ub]: Ab
              } : bb;
            la(Mb);
            const Tb = eU.current;
            if (Tb && Tb in bb) eU.current = null, Tb !== aU.current && mU(Tb);
            else if (!(aU.current in bb) && Sa.current && !UU.current) {
              var Eb;
              mU(null !== (Eb = (0, QM.c)(bb)) && void 0 !== Eb ? Eb : hM.h)
            }
            null === (ab = RU.current) || void 0 === ab || ab.onLobbyFilesChanged({
              ...Mb,
              ...(0, tM.j)(sa.current.assets)
            })
          }), [mU]),
          WU = (0, Mb.useCallback)((() => EE(aU.current).then((async bb => {
            if (!Sa.current || !bb.files) return null;
            NU(bb.files);
            const ab = await BT({
              action: "state"
            });
            return ga(ab), {
              ...bb.files,
              ...(0, tM.j)(ab.assets)
            }
          })).catch((bb => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", bb), ZU({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [NU, ga]),
          HU = () => {
            Yb()
          };
        (0, Mb.useEffect)((() => {
          if (ib(""), !Ab || !Lb) return;
          let bb = !1;
          return sa.current = {
            assets: {},
            revision: 0
          }, wa(sa.current), BT({
            action: "state"
          }).then((ab => {
            bb || ga(ab)
          })).catch((ab => {
            console.error("Could not load project schematics", ab), bb || ib("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            bb = !0
          }
        }), [Ab, Lb, ga]);
        const IU = (0, Mb.useCallback)((function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            bU.current && eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.Submit,
              ma: (0, GM.x)(bU.current),
              ...bb ? {
                Ia: "keepOpen"
              } : {}
            })
          }), []),
          dU = (0, Mb.useCallback)((() => {
            if (!bU.current || "lobby" !== bU.current.kind) return;
            const bb = Ha.trim();
            (0, qM.r)(bb) ? (eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.ReloadAsVariation,
              ma: (0, GM.x)(bU.current),
              Ia: bb
            }), ha(!1)) : ZU({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Ha]),
          FU = (0, Mb.useCallback)((bb => {
            eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.SetEngine,
              ma: (0, GM.x)({
                kind: "lobby",
                path: aU.current
              }),
              Ia: bb
            })
          }), []),
          hU = (0, Mb.useCallback)((bb => {
            if (!UU.current && ka && (Zb.current || Lb)) {
              if (Lb) {
                var ab;
                const Ub = (0, QM.q)(BU.current, aU.current),
                  Ab = Math.min(MU.y, Math.max(0, MU.D - Ub)),
                  Mb = bb.slice(0, Ab);
                return Pb.current = Mb, la((bb => ({
                  ...bb,
                  [aU.current]: Mb
                }))), void(null === (ab = RU.current) || void 0 === ab || ab.onDocTextChanged(aU.current, Mb))
              }
              Pb.current = bb, va(bb)
            }
          }), [ka, Lb]);
        (0, mb.f)("EditLobbyCode", (bb => {
          var ab;
          Fb.featureFlags.canSeePlayerWrittenText && Lb && (DU(), yb(bb), Pb.current = "", la({
            [hM.h]: ""
          }), Qa(null), Va(hM.h), ca(null), na(null), eU.current = null, vU.current = null, null === (ab = RU.current) || void 0 === ab || ab.stopContinuousSync(), Tb(), zU(hM.h))
        })), (0, mb.f)("EditCodeBlock", (bb => {
          let {
            pos: ab,
            canChangePos: Ub
          } = bb;
          if (Fb.featureFlags.canSeePlayerWrittenText && !Lb)
            if (DU(), null !== ab && (ab = [...ab]), yb(ab), Zb.current = Ub, null !== ab) {
              Pb.current = "", va(""), Tb();
              const bb = {
                  kind: "codeBlock",
                  pos: ab
                },
                Ab = (0, GM.x)(bb);
              La.current !== Ab && (La.current = Ab, Ma([]), Ba(Ta)), ja((0, bE.c)(Ab, [ab[0], ab[1], ab[2]], !!Ub)), bU.current = bb, eb.gameBridge.send("sendCodeCollab", {
                fa: GM.e.Join,
                ma: (0, GM.x)(bb)
              }), Sa.current = !0
            } else Ab && Yb()
        })), (0, mb.f)("codeCollabRejoin", (bb => {
          const ab = bU.current ? (0, GM.x)(bU.current) : null;
          ab && bb.docKey === ab && (Pb.current = bb.doc, Lb || va(bb.doc), Ka((ab => ab ? {
            ...ab,
            doc: bb.doc,
            version: bb.version,
            clientID: (0, KM.c)()
          } : ab)))
        })), (0, mb.f)("codeCollab", (bb => {
          var ab;
          const Ub = bU.current ? (0, GM.x)(bU.current) : null;
          if (bb.type === GM.i.LobbyFilesChanged && Lb) {
            if ("string" !== typeof bb.files) return void WU();
            try {
              NU(JSON.parse(bb.files))
            } catch (eb) {
              console.error("[CodeCollab] Failed to parse lobby files", eb), WU()
            }
            return
          }
          if (bb.type === GM.i.EngineSettings && Lb) return void Qa(PT(bb.engineSettings));
          const Mb = bb.type === GM.i.Joined ? (0, GM.m)(bb.docKey) : null,
            Tb = Lb && "lobby" === (null === (ab = bU.current) || void 0 === ab ? void 0 : ab.kind) && (0, QM.h)(bU.current.path) && "lobby" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) && (0, QM.h)(Mb.path);
          if (!Ub || bb.docKey === Ub || Tb)
            if (bb.type !== GM.i.ForceClose) {
              if (Ab)
                if (bb.type === GM.i.Joined) {
                  var Eb;
                  const vb = JSON.parse(bb.peers),
                    Xb = bb.existingCursors ? JSON.parse(bb.existingCursors) : [],
                    kb = (0, KM.c)(),
                    yb = YT(),
                    {
                      gsUrl: Zb,
                      gameNameWithVariation: Db,
                      lobbyName: xb
                    } = yb,
                    ib = null !== (Eb = (0, GM.m)(bb.docKey)) && void 0 !== Eb ? Eb : bU.current;
                  ib && (bU.current = ib, "lobby" === ib.kind && (Va(ib.path), aU.current = ib.path));
                  const fb = ib || (Lb ? {
                    kind: "lobby",
                    path: aU.current
                  } : {
                    kind: "codeBlock",
                    pos: Rb
                  });

                  function mb(ab) {
                    var Ub, Ab;
                    if (!Sa.current) return;
                    const Mb = null !== (Ub = ab.code) && void 0 !== Ub ? Ub : "",
                      Tb = null !== (Ab = ab.collabVersion) && void 0 !== Ab ? Ab : 0;
                    Pb.current = Mb, Lb || va(Mb), Lb && ab.files ? la(ab.files) : Lb && la((bb => ({
                      ...bb,
                      [aU.current]: Mb
                    })));
                    const Eb = {
                      doc: Mb,
                      version: Tb,
                      clientID: kb,
                      docKey: fb,
                      peers: vb,
                      editorCount: bb.editorCount,
                      existingCursors: Xb,
                      httpConfig: yb
                    };
                    if (Ka(Eb), "lobby" === fb.kind) {
                      var Yb;
                      const bb = {
                        doc: Mb,
                        version: Tb,
                        clientID: kb,
                        docKey: fb,
                        httpConfig: yb
                      };
                      for (const ab of [...jU.current]) ab(bb);
                      null === (Yb = RU.current) || void 0 === Yb || Yb.startWhenReady()
                    }
                    ab.canSeeCode ? (clearTimeout(Wa.current), zb({
                      message: null,
                      type: null
                    })) : function(bb) {
                      clearTimeout(Wa.current), zb(bb)
                    }(eE);
                    const Bb = Vb.current;
                    Vb.current = null, Lb && Bb && ab.files && Bb in ab.files && Bb !== aU.current && mU(Bb)
                  }
                  Lb ? EE(aU.current).then(mb).catch((bb => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", bb), DU()
                  })) : (0, FM.postJsonWithMetricsCookiesAndJsonResponse)(`${Zb}/code/get-code-block`, dM.Wj["get-code-block"].toBuffer({
                    gameNameWithVariation: Db,
                    lobbyName: xb,
                    pos: Rb
                  }), {
                    retries: 1
                  }).then(mb).catch((bb => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", bb), DU()
                  }))
                } else if (bb.type === GM.i.Presence) {
                if (!Ub) return;
                const pb = JSON.parse(bb.peers);
                Ka((ab => ab ? {
                  ...ab,
                  peers: pb,
                  editorCount: bb.editorCount
                } : ab))
              }
            } else {
              var Bb;
              if (!Ub) return;
              Ab && Lb && "keptOpen" === bb.updates && jb.m.IR("CodeEditorKeepEdits");
              const Nb = bU.current;
              Sa.current = !1, bU.current = null, Ka(null);
              if (!Lb || "close" === bb.updates) return (0, ST.i)(), void(Ab && Yb());
              if (!Ab) return;
              const Wb = BU.current,
                Hb = vU.current;
              vU.current = null;
              const Ib = "lobby" === (null === Nb || void 0 === Nb ? void 0 : Nb.kind) && Nb.path === (null === Hb || void 0 === Hb ? void 0 : Hb.fromPath),
                db = Hb && (Ib || Hb.toPath in Wb || (0, QM.h)(Hb.toPath)) ? Hb.toPath : aU.current in Wb ? aU.current : null !== (Bb = (0, QM.c)(Wb)) && void 0 !== Bb ? Bb : hM.h;
              zU(db)
            }
        })), (0, mb.f)("refetchCode", (() => {
          Fb.featureFlags.canSeePlayerWrittenText && Ab && Sa.current && (ka || (DU(), Lb ? jb.m.IR("EditLobbyCode", Rb) : jb.m.IR("EditCodeBlock", {
            pos: Rb,
            canChangePos: Zb.current
          })))
        }));
        const GU = (0, Mb.useCallback)((() => {
            Ab && (ub(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Ab]),
          QU = (0, Mb.useCallback)((() => {
            ub(!1)
          }), []);
        (0, Mb.useEffect)((() => {
          Ab && ka && ("docsButton" === xa && qb ? (0, ZT.e)("docsButton") : xa && ZT.g.includes(xa) && !qb && (ub(!0), ba(!1)))
        }), [Ab, ka, xa, qb, ba]);
        const qU = (0, Mb.useCallback)((() => {
          ba(!1)
        }), [ba]);
        (0, Mb.useEffect)((() => {
          Ab && ka && Ra && ("aiHelperButton" === ma && Sb ? (0, ZT.e)("aiHelperButton") : ma && ZT.d.includes(ma) && !Sb && (ba(!0), ub(!1)))
        }), [Ab, ka, Ra, ma, Sb, ba]), (0, Mb.useEffect)((() => {
          if (!Ab || !ka) return;
          const bb = Lb ? "worldCode" : "codeBlock";
          return (0, ZT.D)(bb, !0), () => {
            (0, ZT.D)(bb, !1)
          }
        }), [Ab, ka, Lb]), (0, Mb.useEffect)((() => {
          if (Ab) return () => {
            pa.current ? pa.current = !1 : (0, ZT.z)()
          }
        }), [Ab]), (0, Mb.useEffect)((() => {
          (0, ZT.G)("exportButton", !!ya)
        }), [ya]);
        const {
          t: uU
        } = (0, Ob.A)(), rU = !Sb && Ta > Ya, KU = rU ? Xb.D : Xb.x, oU = (0, Mb.useCallback)(((bb, ab) => {
          jb.m.IR("CodeEditorGoToLine", {
            path: bb,
            line: ab
          }), mU(bb)
        }), [mU]), lU = (0, Mb.useCallback)((bb => {
          yU.current = bb
        }), []), tU = function(bb, ab) {
          const [Ub, Ab] = (0, Mb.useState)(null);
          return (0, Mb.useEffect)((() => {
            if (!ab) return void Ab(null);
            let Ub = !1;
            return nM(bb).then((bb => {
              Ub || Ab(bb)
            }), (bb => {
              console.error("[CodeEditor] could not collect the imported plugins", bb), Ub || Ab(null)
            })), () => {
              Ub = !0
            }
          }), [bb, ab]), Ub
        }(oa, Ab);
        (0, Mb.useEffect)((() => {
          tU && Oa && !tU.includes(Oa) && (ca(null), na(null), Lb && !Sa.current && zU(aU.current))
        }), [Oa, tU, Lb, zU]), kU.current = {
          collabState: ra,
          ensureJoinedPath: xU,
          waitForLobbyPath: iU,
          pullLobbyFiles: WU,
          t: uU,
          canEditCode: !!ka
        }, RU.current || (RU.current = new TT({
          getLobbyFiles: () => ({
            ...BU.current,
            ...(0, tM.j)(sa.current.assets)
          }),
          deleteSchematic: async bb => {
            const ab = await BT({
              action: "remove",
              path: bb,
              expectedRevision: sa.current.revision
            });
            ga(ab)
          },
          getActivePath: () => aU.current,
          getCollabSnapshot: () => {
            var bb;
            if (UU.current) return null;
            const ab = null === (bb = kU.current) || void 0 === bb ? void 0 : bb.collabState;
            return ab ? {
              doc: ab.doc,
              version: ab.version,
              clientID: ab.clientID,
              docKey: ab.docKey,
              httpConfig: ab.httpConfig
            } : null
          },
          replaceActiveDoc: (bb, ab) => {
            var Ub, Ab;
            return null !== (Ub = null === (Ab = yU.current) || void 0 === Ab ? void 0 : Ab.call(yU, bb, ab)) && void 0 !== Ub && Ub
          },
          ensureJoined: bb => kU.current.ensureJoinedPath(bb),
          createFile: (bb, ab) => {
            !1 !== (null === ab || void 0 === ab ? void 0 : ab.focus) && (eU.current = bb), eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.CreateFile,
              ma: (0, GM.x)({
                kind: "lobby",
                path: aU.current
              }),
              xE: bb
            })
          },
          renameFile: (bb, ab) => {
            const Ub = (0, GM.x)({
              kind: "lobby",
              path: aU.current
            });
            aU.current === bb && (vU.current = {
              fromPath: bb,
              toPath: ab
            }, Va(ab)), eb.gameBridge.send("sendCodeCollab", {
              fa: GM.e.RenameFile,
              ma: Ub,
              xE: bb,
              iE: ab
            })
          },
          deleteFile: bb => {
            fU(bb)
          },
          waitForLobbyPath: (bb, ab, Ub) => kU.current.waitForLobbyPath(bb, ab, Ub),
          pullLobbyFiles: () => kU.current.pullLobbyFiles(),
          setMessage: (bb, ab) => {
            ZU({
              message: bb,
              type: ab
            })
          },
          onUnlinked: () => {
            PU(!1)
          },
          t: bb => kU.current.t(bb),
          canEditCode: () => kU.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: bb,
              lobbyName: ab
            } = eb.gameBridge.latest("connectedGame");
            return (0, SM.f)(bb, ab)
          }
        }));
        const wU = (0, Mb.useCallback)((async bb => {
            const ab = RU.current;
            if (!ab) return !1;
            try {
              return await ab.writeLobbyFiles(bb)
            } catch (Ub) {
              return console.error("World Code AI: couldn't write the change", Ub), !1
            }
          }), []),
          sU = (0, Mb.useCallback)((async bb => {
            var ab, Ub;
            const Ab = null === (ab = bb.find((bb => bb.path === nT.b))) || void 0 === ab ? void 0 : ab.text,
              Mb = bU.current;
            return void 0 !== Ab && "codeBlock" === (null === Mb || void 0 === Mb ? void 0 : Mb.kind) && (!(null === (Ub = yU.current) || void 0 === Ub || !Ub.call(yU, (0, GM.x)(Mb), Ab)) && (Pb.current = Ab, va(Ab), !0))
          }), []),
          gU = (0, Mb.useCallback)((async () => {
            try {
              var bb, ab;
              const Ub = await EE(hM.h);
              return !1 === Ub.canSeeCode ? null : null !== (bb = Ub.files) && void 0 !== bb ? bb : {
                [hM.h]: null !== (ab = Ub.code) && void 0 !== ab ? ab : ""
              }
            } catch (Ub) {
              return console.error("World Code AI: couldn't read World Code for a code block", Ub), null
            }
          }), []),
          CU = (0, Mb.useMemo)((() => ({
            [nT.b]: ea
          })), [ea]),
          VU = (0, Mb.useCallback)(((bb, ab) => {
            jb.m.IR("CodeEditorGoToLine", {
              path: nT.b,
              line: ab
            })
          }), []);
        (0, Mb.useEffect)((() => {
          Sb && Ab && Ba(Ta)
        }), [Sb, Ab, Ta]);
        const OU = (0, Mb.useCallback)((() => {
            var bb, ab;
            IU();
            const Ub = (0, Fb.isTouchscreen)() ? "open World Code again" : `press ${null!==(bb=null===(ab=EU.x.OpenCodeEditor)||void 0===ab?void 0:ab[0])&&void 0!==bb?bb:"F8"}`,
              Ab = Lb ? `\ud83e\udd16 Try out your change, then ${Ub} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            jb.m.IR("chat", {
              content: [{
                str: Ab,
                style: {
                  color: pb.E.cyanUiText
                }
              }]
            })
          }), [IU, Lb]),
          cU = (0, Mb.useCallback)((bb => {
            const ab = Rb,
              Ub = Zb.current;
            Lb || !ab || eb.gameBridge.lookup("codeBlockClickable", ab) ? (0, ST.j)(bb, {
              submit: () => {
                IU(), jb.m.IR("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: pb.E.cyanUiText
                    }
                  }]
                }), !Lb && ab && setTimeout((() => {
                  eb.gameBridge.send("clickCodeBlock", ab)
                }), 1e3)
              },
              reopen: () => {
                (0, ob.o)() || (Lb ? jb.m.IR("EditLobbyCode", ab) : jb.m.IR("EditCodeBlock", {
                  pos: ab,
                  canChangePos: Ub
                }))
              }
            }) : OU()
          }), [IU, Lb, Rb, OU]),
          JU = (0, Mb.useCallback)((() => {
            ba(!1)
          }), [ba]),
          nU = (0, Mb.useRef)(HU);
        nU.current = HU;
        const SU = (0, Mb.useCallback)((function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            jb.m.IR("WorldCodeAiDraft", {
              text: bb,
              send: ab
            }), nU.current(), jb.m.IR("EditLobbyCode", Rb)
          }), [Rb]),
          bA = (0, Mb.useCallback)((bb => {
            nU.current(), bb.codeBlock ? jb.m.IR("EditCodeBlock", {
              pos: [...bb.pos],
              canChangePos: bb.canChangePos
            }) : jb.m.IR("EditLobbyCode", Rb)
          }), [Rb]);
        (0, mb.f)("WorldCodeAiDraft", (bb => {
          Lb && (Ua(bb), ba(!0))
        }));
        const aA = !!ka && !!xa && ZT.g.includes(xa),
          UA = !!ka && !!ma && ZT.d.includes(ma);
        (0, Mb.useEffect)((() => {
          Ab && Sb && Ra && !aA && ub(!1)
        }), [Ab, Sb, Ra, aA]);
        const AA = (0, Mb.useCallback)((() => {
            ba(!1), ub(!1)
          }), [ba]),
          {
            lL: MA,
            setWorld: TA,
            toggleWorld: EA
          } = function(bb) {
            let {
              showAi: ab,
              showDocs: Ub,
              showChat: Ab,
              hideOtherRightPanels: Tb
            } = bb;
            const [Eb, Yb] = (0, Mb.useState)("hidden"), Bb = (0, Mb.useRef)(null), eb = (0, Mb.useCallback)((() => {
              Bb.current = null, Yb((bb => "hidden" === bb ? bb : (0, pT.g)() ? "hidden" : "shown"))
            }), []);
            (0, Mb.useEffect)((() => {
              (ab || Ub) && eb()
            }), [ab, Ub, eb]), (0, Mb.useEffect)((() => {
              Ab && eb()
            }), [Ab, eb]);
            const vb = "hidden" !== Eb && (0, pT.g)();
            (0, Mb.useLayoutEffect)((() => {
              if (vb) {
                const bb = document.activeElement;
                bb instanceof HTMLElement && bb.closest(".cm-content") && (Bb.current = bb, bb.blur())
              } else {
                var bb;
                null === (bb = Bb.current) || void 0 === bb || bb.focus(), Bb.current = null
              }
            }), [vb]);
            const Lb = (0, Mb.useCallback)((() => {
              "hidden" === Eb ? (Yb("shown"), (0, pT.g)() && Tb()) : Yb("hidden")
            }), [Eb, Tb]);
            return {
              lL: Eb,
              setWorld: Yb,
              toggleWorld: Lb
            }
          }({
            showAi: Sb,
            showDocs: qb,
            showChat: rb,
            hideOtherRightPanels: AA
          }),
          YA = Sb && null !== Pa && Ra,
          BA = (0, Mb.useCallback)((() => {
            Ua(null)
          }), []),
          [eA, vA] = (0, Mb.useState)(null);
        (0, mb.f)("WorldCodeAiSelection", (bb => {
          Ab && (vA(bb), ba(!0), ub(!1))
        }));
        const LA = (0, Mb.useCallback)((() => {
          vA(null)
        }), []);
        (0, mb.f)("chat", (bb => {
          let {
            content: ab
          } = bb;
          if (!Lb && null === La.current) return;
          const Ub = Array.isArray(ab) ? ab : [ab],
            Ab = Ub.some((bb => {
              var ab;
              return (null === bb || void 0 === bb || null === (ab = bb.style) || void 0 === ab ? void 0 : ab.color) === pb.E.redUiText
            })),
            Mb = Ub.map((bb => {
              var ab;
              const Ub = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.str) && void 0 !== ab ? ab : bb;
              return "string" === typeof Ub ? Ub : ""
            })).join("");
          Ab && /world code|error/i.test(Mb) && (Ma((bb => [...bb, Mb].slice(-10))), Ea((bb => bb + 1)), (0, ST.g)(Mb))
        })), (0, Mb.useEffect)((() => {
          if (!Ab || !Lb || !XU) return;
          let bb = !1;
          return (async (ab, Ub) => {
            const Ab = await (null === (ab = RU.current) || void 0 === ab ? void 0 : ab.tryRestoreHandle());
            !bb && Ab && (PU(!0), null === (Ub = RU.current) || void 0 === Ub || Ub.startWhenReady())
          })(), () => {
            bb = !0
          }
        }), [Ab, Lb, XU]), (0, Mb.useEffect)((() => {
          var bb;
          Ab || (null === (bb = RU.current) || void 0 === bb || bb.stopContinuousSync(), DU(!1), Na.current && (Na.current = !1, eb.gameBridge.send("sendChatMessage", {
            fE: "//export",
            channelName: null
          })))
        }), [Ab, DU]);
        const PA = (0, Mb.useCallback)((async () => {
            if (XU && RU.current) try {
              if (!await RU.current.linkFolder()) return;
              PU(!0), await RU.current.startWhenReady()
            } catch (bb) {
              console.error("[WorldCodeDirectorySync] Link failed", bb), ZU({
                message: uU("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [XU, uU]),
          XA = (0, Mb.useCallback)((async () => {
            RU.current && await RU.current.unlinkFolder()
          }), []),
          jA = (0, Mb.useCallback)((() => {
            XU ? LU ? XA() : PA() : eM.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [XU, LU, PA, XA]),
          RA = Lb && "hidden" !== MA;
        return (0, vb.jsxs)(Eb.d, {
          className: Xa()("CodeEditorBg", {
            CodeEditorLight: db,
            WorldShown: "hidden" !== MA
          }),
          close: HU,
          escDoesExit: !0,
          show: Ab,
          togglePointerLock: !1,
          globallyUniqueKey: Lb ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, vb.jsx)(yT.e, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: uU("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!ka && !Lb
          }), (0, vb.jsx)(yT.e, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)("p", {
                children: uU("codeEditor:tutorialWorldCodeWelcome")
              }), (0, vb.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, vb.jsx)("li", {
                  children: uU("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, vb.jsx)("li", {
                  children: uU("codeEditor:tutorialWorldCodeUseReact")
                }), (0, vb.jsx)("li", {
                  children: uU("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!ka && Lb
          }), (0, vb.jsx)("div", {
            className: "CodeEditorTitle",
            children: Lb ? "World Code" : "Code Block"
          }), (0, vb.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, vb.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, vb.jsx)(Cb.g, {
                tooltipInner: uU(ya ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: ya ? void 0 : 0,
                hideTooltip: "exportButton" === Za,
                children: (0, vb.jsx)(yT.j, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: uU("codeEditor:tutorialExport"),
                  enabled: !!ka,
                  children: (0, vb.jsx)(Xb.m, {
                    className: "CodeEditorButton",
                    disabled: !ya,
                    onClick: () => {
                      "exportButton" === Za && ((0, ZT.e)("exportButton"), pa.current = !0), Na.current = !0, HU()
                    },
                    padDestructive: !0,
                    children: uU("codeEditor:exportWorld")
                  })
                })
              }), (0, vb.jsx)(gT, {
                lL: MA,
                setWorld: TA,
                toggleWorld: EA,
                aiShown: YA,
                closeAi: JU
              })]
            }), (0, vb.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [ka && (0, vb.jsx)(Cb.g, {
                tooltipInner: uU("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Za,
                children: (0, vb.jsx)(yT.j, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: uU("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, vb.jsx)(Xb.g, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: uU("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, ZT.e)("helpButton"), eM.NotificationProvider.showCustomPopup({
                        body: bb => (0, vb.jsx)(DT, {
                          close: bb
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, vb.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, vb.jsx)(kb.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, vb.jsx)(Cb.g, {
                tooltipInner: uU("codeEditor:closeTooltip"),
                children: (0, vb.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    HU()
                  },
                  children: (0, vb.jsx)(Xb.k, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, vb.jsx)(rM, {
            peers: null !== (ab = null === ra || void 0 === ra ? void 0 : ra.peers) && void 0 !== ab ? ab : []
          }), (0, vb.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [rb && sb && (0, vb.jsx)(pT.d, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                lb(!1)
              },
              children: (0, vb.jsx)(mT, {
                inputRef: tb
              })
            }), Lb && (0, vb.jsx)(gM, {
              schematics: ta.assets,
              onManageSchematic: bb => {
                ka && eM.NotificationProvider.showCustomPopup({
                  body: ab => (0, vb.jsx)(LT, {
                    initialPath: bb,
                    onChanged: ga,
                    onClose: ab
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: oa,
              activePath: Ca,
              canEdit: !!ka,
              directoryLinked: LU,
              pluginNames: null !== tU && void 0 !== tU ? tU : BE,
              activePluginName: Oa,
              activePluginFile: Ja,
              onSelect: mU,
              onSelectPlugin: pU,
              onToggleDirectorySync: jA,
              onCreate: bb => {
                eU.current = bb, eb.gameBridge.send("sendCodeCollab", {
                  fa: GM.e.CreateFile,
                  ma: (0, GM.x)({
                    kind: "lobby",
                    path: aU.current
                  }),
                  xE: bb
                })
              },
              onRename: (bb, ab) => {
                aU.current === bb && (vU.current = {
                  fromPath: bb,
                  toPath: ab
                }, Va(ab)), eb.gameBridge.send("sendCodeCollab", {
                  fa: GM.e.RenameFile,
                  ma: (0, GM.x)({
                    kind: "lobby",
                    path: aU.current
                  }),
                  xE: bb,
                  iE: ab
                })
              },
              onRenameFolder: (bb, ab) => {
                const [Ub] = (0, QM.o)([aU.current], bb, ab);
                Ub && (vU.current = {
                  fromPath: Ub[0],
                  toPath: Ub[1]
                }, Va(Ub[1])), eb.gameBridge.send("sendCodeCollab", {
                  fa: GM.e.RenameFolder,
                  ma: (0, GM.x)({
                    kind: "lobby",
                    path: aU.current
                  }),
                  xE: bb,
                  iE: ab
                })
              },
              onDelete: fU
            }), (0, vb.jsx)("div", {
              className: Xa()("CodeEditorMessage", {
                CodeEditorMessageHidden: !fb.message,
                CodeEditorMessageSuccess: "success" === fb.type
              }),
              children: fb.message && (0, vb.jsx)("div", {
                className: "CodeEditorMessageText",
                children: fb.message
              })
            }), (0, vb.jsx)(Mb.Suspense, {
              fallback: (0, vb.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, vb.jsx)(Wb.b, {})
              }),
              children: (0, vb.jsx)(aE, {
                isLobbyCode: Lb,
                code: ra ? ra.doc : Pb.current,
                files: Lb ? oa : void 0,
                activePath: Lb ? Ca : void 0,
                pluginName: Oa,
                pluginFile: Ja,
                pluginSource: Oa && Ja ? null === (Ub = oM.c[Oa]) || void 0 === Ub ? void 0 : Ub.files[Ja] : void 0,
                onChange: hU,
                canEditCode: ka,
                setTemporaryMessage: ZU,
                close: HU,
                showTooltips: Hb,
                lightMode: db,
                collabState: ra,
                setActiveDocReplacer: lU,
                showAiHints: Ra && Gb,
                canAiChangeCode: !!ka && (Lb || !!Zb.current),
                onRemoteDocChange: bb => {
                  var ab;
                  (Pb.current = bb, Lb) ? (la((ab => ({
                    ...ab,
                    [aU.current]: bb
                  }))), null === (ab = RU.current) || void 0 === ab || ab.onDocTextChanged(aU.current, bb)) : va(bb)
                }
              })
            }), (qb || YA || "hidden" !== MA) && (0, vb.jsxs)(NT, {
              lL: MA,
              worldPanel: (0, vb.jsx)(wT, {
                shown: MA,
                setShown: TA,
                canInsertCode: !!ka && !Oa
              }),
              closeWorld: () => {
                TA("hidden")
              },
              aiShown: YA,
              defaultWidth: qb ? "40%" : "max(18rem, 36%)",
              children: [qb && (0, vb.jsx)(pT.d, {
                onClose: aA ? void 0 : QU,
                children: (0, vb.jsx)(Mb.Suspense, {
                  fallback: (0, vb.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, vb.jsx)(Wb.b, {})
                  }),
                  children: (0, vb.jsx)(UE, {
                    popOutDocs: GU,
                    hideDocs: QU,
                    tutorialEnabled: !!ka
                  })
                })
              }), YA && (0, vb.jsx)(pT.d, {
                onClose: UA ? void 0 : JU,
                children: (0, vb.jsx)(Mb.Suspense, {
                  fallback: (0, vb.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, vb.jsx)(Wb.b, {})
                  }),
                  children: (0, vb.jsx)(AE, {
                    target: Pa,
                    chatKey: `${qa.gameNameWithVariation}/${qa.lobbyName}/aiHelper`,
                    historyKey: `${qa.gameNameWithVariation}/${qa.lobbyName}/${Pa.key}`,
                    files: Pa.codeBlock ? CU : oa,
                    activePath: Pa.codeBlock ? nT.b : Ca,
                    canEdit: !!ka && (Pa.codeBlock ? !!Zb.current : !Oa),
                    isLoaded: null !== ra,
                    errors: Aa,
                    errorCount: Ta,
                    applyFiles: Pa.codeBlock ? sU : wU,
                    submit: OU,
                    testRun: cU,
                    close: JU,
                    goToLine: Pa.codeBlock ? VU : oU,
                    openWorldCode: Pa.codeBlock ? SU : void 0,
                    readWorldCode: Pa.codeBlock ? gU : void 0,
                    viewChunk: ME,
                    viewGameState: TE,
                    openTarget: ka ? bA : void 0,
                    draft: aa,
                    onDraftUsed: BA,
                    selection: eA,
                    onSelectionUsed: LA
                  }, Pa.key)
                })
              })]
            })]
          }), (null === AU || void 0 === AU ? void 0 : AU.fallback) && (0, vb.jsx)(XT, {
            fallback: AU.fallback,
            onGoToLine: oU
          }), (0, vb.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, vb.jsx)(Cb.g, {
              tooltipInner: uU(db ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, vb.jsx)(Xb.g, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: uU(db ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  hb(!db)
                },
                children: (0, vb.jsx)(kb.e, {
                  name: db ? "moon" : "sun-bright"
                })
              })
            }), (0, vb.jsx)(Cb.g, {
              tooltipInner: uU(RA ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  IU(RA)
                },
                padDefaultFocus: !0,
                children: uU("codeEditor:submitCode")
              })
            }), (0, vb.jsx)(Cb.g, {
              tooltipInner: uU(qb ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === xa || "hideDocsButton" === xa,
              children: (0, vb.jsx)(yT.j, {
                tutorial: za,
                step: qb ? "hideDocsButton" : "docsButton",
                text: uU(qb ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!ka,
                placement: "top",
                waitForClick: !0,
                onPrevious: qb && "welcome" === za ? QU : void 0,
                children: (0, vb.jsx)(Xb.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, ZT.e)(qb ? "hideDocsButton" : "docsButton"), ub(!qb), ba(!1)
                  },
                  children: uU(qb ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Ra && (0, vb.jsx)(yT.j, {
              tutorial: fa,
              step: Sb ? "hideAiHelperButton" : "aiHelperButton",
              text: uU(Sb ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === fa ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!ka,
              placement: "top",
              waitForClick: !0,
              onPrevious: Sb && "welcome" === fa ? qU : void 0,
              children: (0, vb.jsx)(KU, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, ZT.e)(Sb ? "hideAiHelperButton" : "aiHelperButton"), ba(!Sb), ub(!1)
                },
                children: Sb ? "Hide AI Helper" : rU ? "Fix error with AI" : "AI Helper"
              })
            }), sb && (0, vb.jsx)(Cb.g, {
              tooltipInner: uU(rb ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.x, {
                className: "CodeEditorButton",
                onClick: () => {
                  wb.current = !rb, lb(!rb)
                },
                children: uU(rb ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, vb.jsx)(Cb.g, {
              tooltipInner: uU("hidden" === MA ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.x, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: EA,
                children: uU("hidden" === MA ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, vb.jsx)(Cb.g, {
              tooltipInner: uU("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  jb.m.IR("FormatCode")
                },
                children: uU("codeEditor:formatCode")
              })
            }), (0, vb.jsx)(Cb.g, {
              tooltipInner: uU("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Pb.current).then((() => {
                    ZU({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    ZU({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: uU("codeEditor:copyCode")
              })
            }), (0, vb.jsx)(Cb.g, {
              tooltipInner: uU(Hb ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.g, {
                className: "CodeEditorButton",
                onClick: () => {
                  Ib(!Hb)
                },
                children: uU(Hb ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Lb && (0, vb.jsx)(Cb.g, {
              tooltipInner: uU("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Za,
              children: (0, vb.jsx)(yT.j, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: uU("codeEditor:tutorialWorldCodeButton"),
                enabled: !!ka,
                placement: "top",
                waitForClick: !0,
                children: (0, vb.jsx)(Xb.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Za && ((0, ZT.e)("worldCodeButton"), pa.current = !0), HU(), jb.m.IR("EditLobbyCode", Rb)
                  },
                  children: uU("codeEditor:worldCode")
                })
              })
            }), (ua || TU || Ra) && (0, vb.jsx)(Cb.g, {
              tooltipInner: uU("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, vb.jsx)(Xb.g, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  ha(!0)
                },
                children: (0, vb.jsx)(kb.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), Fa && (0, vb.jsx)(LM.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              ha(!1)
            },
            body: (0, vb.jsx)(kT, {
              engine: TU,
              onSetEngine: FU,
              aiHints: Ra ? {
                shown: Gb,
                setShown: Qb
              } : null,
              variation: ua ? {
                name: Ha,
                setName: Ia,
                reload: dU
              } : null
            })
          })]
        })
      })),
      LE = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function PE(bb) {
      return "inventory" === bb
    }
    const XE = (0, Mb.memo)((function() {
      const {
        openEverythingMenuName: bb,
        openInGameMenuName: ab
      } = (0, Kb.n)(["openEverythingMenuName", "openInGameMenuName"]), Ub = (0, Nb.k)("fullInventory"), Tb = (0, Mb.useRef)(null), Eb = (0, Ca.m)();
      (0, mb.f)("toggleMenu", (bb => {
        var ab;
        if (!Eb.shown) return;
        const Ub = Kb.c.get("openInGameMenuName");
        let Ab = bb.split("|")[0];
        const Mb = null !== (ab = bb.split("|")[1]) && void 0 !== ab ? ab : null;
        ("closeCurrentMenu" === Mb && Ub || Ab === Ub) && (Tb.current = null, Ab = null);
        const Yb = "closeCurrentMenu" === Mb ? null : Mb;
        Tb.current !== Yb && (Tb.current = Yb), null !== Ab && (0, DM.h)(DM.b, {
          keepsMovement: PE(Ab)
        }), Kb.c.set({
          openInGameMenuName: Ab
        })
      }));
      const Yb = (0, Mb.useCallback)((bb => () => {
          jb.m.IR("toggleMenu", bb)
        }), []),
        Bb = (0, Mb.useRef)({
          cantCrouchIfNotFullscreen: Yb("cantCrouchIfNotFullscreen"),
          makeReport: Yb("makeReport"),
          makeDiscordReport: Yb("makeDiscordReport"),
          editBook: Yb("editBook"),
          editNameTag: Yb("editNameTag"),
          inventory: Yb("inventory"),
          inviteLink: Yb("inviteLink"),
          writeOnBoard: Yb("writeOnBoard"),
          codeEditor: Yb("codeEditor"),
          lobbyCodeEditor: Yb("lobbyCodeEditor"),
          customLobbyBlockEditor: Yb("customLobbyBlockEditor"),
          ironChestPasskeyInput: Yb("ironChestPasskeyInput"),
          petUi: Yb("petUi")
        }),
        eb = (0, Mb.useCallback)((() => {
          Kb.c.set({
            openInGameMenuName: null
          })
        }), []),
        Lb = (0, Mb.useRef)(null);
      return (0, Mb.useEffect)((() => {
        if (ab) {
          var bb;
          (0, DM.h)(DM.b, {
            keepsMovement: PE(ab)
          }), Lb.current = LE.has(ab) ? null !== (bb = Kb.c.get("openEverythingMenuName")) && void 0 !== bb ? bb : Lb.current : null, Kb.c.set({
            openEverythingMenuName: null
          })
        } else {
          const bb = Lb.current;
          Lb.current = null, null !== bb && null === Kb.c.get("openEverythingMenuName") && Kb.c.set({
            openEverythingMenuName: bb
          }), Tb.current = null, (0, DM.g)(DM.b)
        }
      }), [ab]), (0, Mb.useEffect)((() => {
        null !== bb && eb()
      }), [bb, eb]), (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(Ab.h, {
          show: "clientGame" === ab
        }), (0, vb.jsx)(EM, {
          show: "cantCrouchIfNotFullscreen" === ab,
          onOpen: Bb.current.cantCrouchIfNotFullscreen,
          onClose: eb
        }), (0, vb.jsx)(kM, {
          show: "makeReport" === ab,
          onOpen: Bb.current.makeReport,
          onClose: eb
        }), (0, vb.jsx)(ZM, {
          show: "makeDiscordReport" === ab,
          onOpen: Bb.current.makeDiscordReport,
          onClose: eb
        }), (0, vb.jsx)(yU, {
          show: "editBook" === ab,
          onOpen: Bb.current.editBook,
          onClose: eb
        }), (0, vb.jsx)(RU, {
          show: "editNameTag" === ab,
          onOpen: Bb.current.editNameTag,
          onClose: eb
        }), Ub && (0, vb.jsx)(AM, {
          show: "inventory" === ab,
          onOpen: Bb.current.inventory,
          onClose: eb,
          variation: Tb.current
        }), (0, vb.jsx)(Va, {
          show: "inviteLink" === ab,
          onClose: eb,
          option: Tb.current
        }), (0, vb.jsx)(Qb, {
          show: "retentionFeatures" === ab,
          onClose: eb
        }), (0, vb.jsx)(jU, {
          show: "writeOnBoard" === ab,
          onOpen: Bb.current.writeOnBoard,
          onClose: eb
        }), (0, vb.jsx)(vE, {
          show: "lobbyCodeEditor" === ab,
          onOpen: Bb.current.lobbyCodeEditor,
          onClose: eb,
          isLobbyCode: !0
        }), (0, vb.jsx)(vE, {
          show: "codeEditor" === ab,
          onOpen: Bb.current.codeEditor,
          onClose: eb,
          isLobbyCode: !1
        }), (0, vb.jsx)(xM, {
          show: "customLobbyBlockEditor" === ab,
          onOpen: Bb.current.customLobbyBlockEditor,
          onClose: eb
        }), (0, vb.jsx)(qU, {
          show: "ironChestPasskeyInput" === ab,
          onOpen: Bb.current.ironChestPasskeyInput,
          onClose: eb
        }), (0, vb.jsx)(WM, {
          togglePointerLock: !0,
          show: "petUi" === ab,
          onOpen: Bb.current.petUi,
          onClose: eb
        })]
      })
    }))
  },
  35944: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => TE
    });
    Ub(35946);
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(3408),
      Yb = Ub(1345),
      Bb = Ub(1794),
      eb = Ub(1023);

    function vb() {
      const bb = 2e3,
        [ab, Ub] = (0, Ab.useState)(null),
        [Mb, vb] = (0, Ab.useState)(null),
        Lb = (0, Ab.useRef)(null);
      (0, Yb.f)("showBottomMessage", (ab => {
        let {
          message: Ub,
          timeoutLength: Ab = bb,
          type: Mb
        } = ab;
        vb({
          message: Ub,
          type: Mb
        }), clearTimeout(Lb.current), Lb.current = setTimeout((() => {
          vb(null)
        }), Ab)
      })), (0, Yb.f)("showPermanentBottomMessage", (bb => {
        Ub(bb)
      })), (0, Ab.useEffect)((() => ((0, Eb.c)((() => {
        Ub(null)
      })), () => {
        clearTimeout(Lb.current)
      })), []);
      const Pb = Mb || ab;
      return Pb ? (0, eb.jsx)("div", {
        className: Tb()("BottomScreenMessage", Pb.type),
        children: (0, eb.jsx)(Bb.c, {
          text: Pb.message
        })
      }) : null
    }
    var Lb = Ub(2221),
      Pb = Ub(1824),
      Xb = Ub(1433),
      jb = Ub(2275);

    function Rb() {
      let bb;
      const ab = () => {
          clearTimeout(bb), bb = setTimeout((() => {
            Pb.gameBridge.latest("connectedGame").replay || (Pb.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Xb.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        Ub = () => {
          clearTimeout(bb)
        };
      return window.addEventListener("focus", Ub), window.addEventListener("blur", ab), () => {
        window.removeEventListener("blur", ab), window.removeEventListener("focus", Ub), clearTimeout(bb)
      }
    }
    var kb = Ub(1060),
      yb = Ub(1055),
      Zb = Ub(307),
      Db = Ub(2268),
      zb = Ub(22),
      xb = Ub(1844),
      ib = Ub(31),
      fb = Ub(1858),
      mb = Ub(19),
      pb = Ub(1867),
      Nb = Ub(1294),
      Wb = Ub(8387),
      Hb = Ub(1901),
      Ib = Ub(1134);
    const db = (0, Ab.memo)((function() {
      const {
        isTouchScreen: bb,
        loadingOverlayVisible: ab,
        openInGameMenuName: Ub,
        openEverythingMenuName: Mb
      } = (0, mb.n)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Eb = (0, Nb.o)();
      (0, yb.e)();
      const Yb = (0, Db.h)("showBasicMovementControls"),
        [Bb, vb] = (0, Ab.useState)("movement"),
        Lb = "movement" === Bb,
        Pb = Eb && !1 !== Yb;
      (0, Ab.useEffect)((() => {
        "padActions" !== Bb || Pb || vb("done")
      }), [Bb, Pb]);
      const Xb = ab || null !== Ub || null !== Mb,
        jb = (0, Ab.useRef)({
          step: Bb,
          ms: 0
        });
      return (0, Ab.useEffect)((() => {
        if (Xb || "done" === Bb) return;
        jb.current.step !== Bb && (jb.current = {
          step: Bb,
          ms: 0
        });
        const bb = jb.current,
          ab = performance.now(),
          Ub = setTimeout((() => {
            vb("movement" === Bb && (0, Nb.d)() ? "padActions" : "done")
          }), 7e3 - bb.ms);
        return () => {
          clearTimeout(Ub), bb.ms += performance.now() - ab
        }
      }), [Xb, Bb]), ib.f.getItem(Zb.Gb) > 2 ? (0, eb.jsx)(Qb, {
        showingMovementControls: !1
      }) : (0, eb.jsxs)(eb.Fragment, {
        children: [bb && !Eb || !Lb || !1 === Yb ? null : (0, eb.jsxs)("div", {
          className: Tb()("ControlsTutorialDiv", {
            Covered: Xb
          }),
          children: [(0, eb.jsx)(Fb, {}), (0, eb.jsx)(Gb, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, eb.jsx)(Gb, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Bb && Pb && (0, eb.jsx)(hb, {
          covered: Xb
        }), (0, eb.jsx)(Qb, {
          showingMovementControls: "done" !== Bb
        })]
      })
    }));

    function Fb() {
      const bb = (0, Nb.o)();
      return (0, eb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, eb.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), bb && (0, eb.jsx)(pb.b, {
          noaAction: "forward"
        }), !bb && (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, eb.jsx)(pb.b, {
              noaAction: "forward"
            })
          }), (0, eb.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, eb.jsx)(pb.b, {
              noaAction: "left"
            }), (0, eb.jsx)(pb.b, {
              noaAction: "backward"
            }), (0, eb.jsx)(pb.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function hb(bb) {
      let {
        covered: ab
      } = bb;
      const {
        t: Ub
      } = (0, Ib.A)(), Ab = (0, Db.h)("useInventory");
      return (0, eb.jsxs)("div", {
        className: Tb()("ControlsTutorialDiv", {
          Covered: ab
        }),
        children: [(0, eb.jsx)(Gb, {
          header: Ub("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, eb.jsx)(Gb, {
          header: Ub("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Ab && (0, eb.jsx)(Gb, {
          header: Ub("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, eb.jsx)(Gb, {
          header: Ub("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Gb(bb) {
      let {
        header: ab,
        noaAction: Ub
      } = bb;
      return (0, eb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, eb.jsx)("div", {
          className: "KeyHeader",
          children: ab
        }), (0, eb.jsx)(pb.b, {
          noaAction: Ub
        })]
      })
    }

    function Qb(bb) {
      let {
        showingMovementControls: ab
      } = bb;
      const {
        isTouchScreen: Ub
      } = (0, mb.n)(["isTouchScreen"]), Mb = (0, Nb.o)(), Tb = (0, Hb.b)("OpenShop"), [Eb, Yb] = (0, Ab.useState)(!1), Bb = `SeenShopControls|${(0,fb.g)("connectedGame",(bb=>bb.gameNameWithVariation))}`, vb = () => (!(0, Nb.d)() || null !== (0, Wb.c)("OpenShop")) && !ib.f.getItem(Bb) && xb.e.get("shopInfo") && !ab, Lb = () => (Yb(!0), ib.f.setItem(Bb, !0), (0, Nb.d)() || zb.m.IR("showShopTouchTutorial"), setTimeout((() => {
        Yb(!1)
      }), 7e3));
      (0, Ab.useEffect)((() => {
        let bb;
        const ab = zb.m.subscribe("showShopTutorial", (() => {
          vb() && (bb = Lb())
        }));
        return () => {
          clearTimeout(bb), zb.m.unsubscribe(ab)
        }
      }), [ab]);
      const Pb = (0, Ab.useRef)();
      return (0, Db.f)("currencyAmounts", (bb => {
        if (vb()) {
          let Ub = !1;
          const Ab = xb.e.get("shopInfo");
          for (const Mb in Ab) {
            for (const Tb in Ab[Mb].items) {
              var ab;
              const Eb = Ab[Mb].items[Tb];
              if (void 0 !== Eb.currency && bb[Eb.currency] && Eb.cost <= bb[Eb.currency].amount && (null === (ab = Eb.hidden) || void 0 === ab || !ab)) {
                Ub = !0;
                break
              }
            }
            if (Ub) break
          }
          Ub && (Pb.current = Lb())
        }
      })), (0, Ab.useEffect)((() => () => {
        clearTimeout(Pb.current)
      }), [ab]), !Eb || Mb && !Tb ? null : (0, eb.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: Ub && !Mb ? null : (0, eb.jsx)(Gb, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var qb = Ub(1268),
      ub = Ub(990);
    const rb = (0, Ab.memo)((function() {
      return (0, yb.e)(), (0, eb.jsx)(Kb, {})
    }));
    class Kb extends Ab.Component {
      constructor(bb) {
        super(bb), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = zb.m.subscribe("TopRightHelper", (bb => {
          this.showQueue.push(bb), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        zb.m.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(bb, ab) {
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
        let bb, ab, Ub, Ab, Mb, Tb = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, bb = "slideIn") : "slideOut" === this.state.currState ? bb = "slideOut" : null === this.currMessage && (Tb = !1), this.currMessage) {
          const Tb = this.currMessage.color || "rgb(102, 102, 102)";
          ab = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === bb ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, Ub = {
            backgroundColor: Tb
          }, Ab = {
            animation: "2s " + ("slideOut" === bb ? "CloseNotification" : "ExpandNotification")
          }, Mb = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === bb ? "textDisappear" : "textAppear")
          }
        }
        return Tb ? (0, eb.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...ab
          },
          children: [(0, eb.jsx)("div", {
            className: "LeftSide",
            style: Ub,
            children: (0, eb.jsx)(ub.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, eb.jsx)("div", {
            className: "RightSide",
            style: Ab,
            children: (0, eb.jsx)("div", {
              className: "HelperText",
              style: Mb,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var ob = Ub(35949),
      lb = Ub(1304);
    const tb = (0, lb.e)((bb => bb.PadSneakChip));

    function wb(bb) {
      const [ab, Ub, Ab] = function(bb) {
        const ab = parseInt(bb.substring(1), 16),
          Ub = (ab >> 16) / 255,
          Ab = (ab >> 8 & 255) / 255,
          Mb = (255 & ab) / 255,
          Tb = Math.max(Ub, Ab, Mb),
          Eb = Math.min(Ub, Ab, Mb),
          Yb = (Tb + Eb) / 2,
          Bb = Tb - Eb;
        if (0 === Bb) return [0, 0, Yb];
        const eb = Bb / (1 - Math.abs(2 * Yb - 1));
        let vb;
        vb = Tb === Ub ? (Ab - Mb) / Bb % 6 : Tb === Ab ? (Mb - Ub) / Bb + 2 : (Ub - Ab) / Bb + 4;
        return [(60 * vb + 360) % 360, eb, Yb]
      }(bb), Mb = 0 === Ub ? 0 : Math.min(.6, Ub + .03), Tb = Ab > .5 ? -1 : 1, Eb = sb(Ab + .09 * Tb);
      return {
        panel: bb,
        slot: gb(ab, Mb, Eb),
        slotSelected: gb(ab, Mb, sb(Eb + .2 * Tb)),
        slotUnavailable: gb(ab, Mb, sb(Ab + -.1 * Tb))
      }
    }

    function sb(bb) {
      return Math.min(1, Math.max(0, bb))
    }

    function gb(bb, ab, Ub) {
      const Ab = (1 - Math.abs(2 * Ub - 1)) * ab,
        Mb = Ab * (1 - Math.abs(bb / 60 % 2 - 1)),
        Tb = Ub - Ab / 2;
      let Eb;
      return Eb = bb < 60 ? [Ab, Mb, 0] : bb < 120 ? [Mb, Ab, 0] : bb < 180 ? [0, Ab, Mb] : bb < 240 ? [0, Mb, Ab] : bb < 300 ? [Mb, 0, Ab] : [Ab, 0, Mb], "#" + Eb.map((bb => function(bb) {
        return Math.round(255 * bb).toString(16).padStart(2, "0")
      }(bb + Tb))).join("")
    }
    var Cb = Ub(35967),
      Vb = Ub(3996),
      Ob = Ub(2254),
      cb = Ub(2260),
      Jb = Ub(36008),
      nb = Ub(4501),
      Sb = Ub(1370),
      ba = Ub(591);

    function aa(bb, ab, Ub, Ab) {
      bb.style.display = "";
      const Mb = bb.offsetWidth,
        Tb = bb.offsetHeight,
        Eb = Math.min(Math.max((ab.left + ab.right) / 2 - Mb / 2, 8), window.innerWidth - 8 - Mb);
      let Yb = ab.top - Ub - Tb;
      const Bb = [...Ab].sort(((bb, ab) => ab.top - bb.top));
      for (const eb of Bb) Eb < eb.right && Eb + Mb > eb.left && Yb < eb.bottom && Yb + Tb > eb.top && (Yb = eb.top - 8 - Tb);
      return Yb < 8 ? (bb.style.display = "none", null) : (bb.style.transform = `translate(${Eb-ab.left}px, ${Yb-ab.top}px)`, {
        left: Eb,
        top: Yb,
        right: Eb + Mb,
        bottom: Yb + Tb
      })
    }

    function Ua(bb) {
      const ab = [];
      for (const Ub of document.querySelectorAll(bb)) {
        const bb = Ub.getBoundingClientRect();
        bb.width > 0 && "visible" === getComputedStyle(Ub).visibility && ab.push(bb)
      }
      return ab
    }

    function Aa(bb, ab) {
      return bb.clientX >= ab.left - 8 && bb.clientX <= ab.right + 8 && bb.clientY >= ab.top - 8 && bb.clientY <= ab.bottom + 8
    }
    var Ma = Ub(8441);
    class Ta {
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
      hold(bb, ab) {
        this.suspended || (this.offered ? ab || this.setPhase("idle") : bb && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : bb || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(bb) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const ab = this.phase;
        this.phase = bb, this.deps.onPhase(bb, ab)
      }
    }
    const Ea = 25 * Math.PI / 180,
      Ya = 45 * Math.PI / 180;
    class Ba extends Ta {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(bb, ab, Ub) {
        this.speed = Ub;
        const Ab = Math.hypot(bb, ab),
          Mb = Ab > 0 ? Math.acos(Math.min(1, -ab / Ab)) : Math.PI;
        this.hold(Ab >= .8 && Mb <= Ea, Ab >= .5 && Mb <= Ya)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var ea = Ub(1216);

    function va(bb, ab) {
      const Ub = (0, Ab.useRef)(null),
        Mb = (0, Ab.useRef)(ab);
      return Mb.current = ab, (0, Ab.useEffect)((() => {
        if (!bb) return;
        const {
          create: ab,
          elementRef: Ab,
          ringRef: Tb,
          classPrefix: Eb,
          keptBehindMovementPanels: Yb,
          resizeEnds: Bb
        } = Mb.current, eb = {
          charging: `${Eb}Charging`,
          armed: `${Eb}Armed`,
          ready: `${Eb}Ready`,
          locked: `${Eb}Locked`
        };
        let vb = null;
        const Lb = ab({
          onPhase: (bb, ab) => {
            const Ub = Ab.current;
            if (null !== Ub) {
              for (const [ab, Ab] of Object.entries(eb)) Ub.classList.toggle(Ab, ab === bb);
              if ("charging" === bb) vb = Tb.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === bb) {
                var Eb;
                null === (Eb = vb) || void 0 === Eb || Eb.cancel(), vb = null
              }
              var Yb, Bb;
              if ("armed" === bb && "charging" === ab && Mb.current.onArmed(), "ready" === bb && Ma.f.play("lockReady"), "locked" === bb) Ma.f.play("lockLocked"), null === (Yb = (Bb = Mb.current).onLocked) || void 0 === Yb || Yb.call(Bb);
              "locked" === ab && Mb.current.onUnlocked()
            }
          }
        });
        Ub.current = Lb;
        const Pb = () => {
            Lb.suspend()
          },
          Xb = () => {
            "hidden" === document.visibilityState && Pb()
          },
          jb = () => {
            Bb ? Lb.suspend() : Lb.suspendArming()
          },
          Rb = (0, ea.e)((bb => {
            let {
              keepsMovement: ab
            } = bb;
            ab && Yb ? Lb.suspendArming() : Pb()
          }));
        return document.addEventListener("visibilitychange", Xb), window.addEventListener("blur", Pb), window.addEventListener("resize", jb), () => {
          Rb(), document.removeEventListener("visibilitychange", Xb), window.removeEventListener("blur", Pb), window.removeEventListener("resize", jb), Lb.cancel(), Ub.current = null
        }
      }), [bb]), (0, fb.c)("localPlayerAliveSet", (() => {
        var bb;
        null === (bb = Ub.current) || void 0 === bb || bb.suspend()
      })), Ub
    }
    var La = Ub(2286),
      Pa = Ub(2306),
      Xa = Ub(1047),
      ja = Ub(3083),
      Ra = Ub(2313);

    function ka(bb, ab, Ub) {
      const Ab = function(bb, ab, Ub) {
        const Ab = Ub.map((Ub => ({
            left: Math.max(0, Ub.left),
            top: Math.max(0, Ub.top),
            right: Math.min(bb, Ub.right),
            bottom: Math.min(ab, Ub.bottom)
          }))).filter((bb => bb.right > bb.left && bb.bottom > bb.top)),
          Mb = [...new Set([0, ab, ...Ab.flatMap((bb => [bb.top, bb.bottom]))])].sort(((bb, ab) => bb - ab)),
          Tb = [];
        for (let Eb = 0; Eb < Mb.length - 1; Eb++) {
          const ab = Mb[Eb],
            Ub = Mb[Eb + 1],
            Yb = Ab.filter((bb => bb.top <= ab && bb.bottom >= Ub)).map((bb => [bb.left, bb.right])).sort(((bb, ab) => bb[0] - ab[0]));
          let Bb = 0;
          for (const [bb, Ab] of Yb) bb > Bb && Tb.push({
            left: Bb,
            top: ab,
            right: bb,
            bottom: Ub
          }), Bb = Math.max(Bb, Ab);
          Bb < bb && Tb.push({
            left: Bb,
            top: ab,
            right: bb,
            bottom: Ub
          })
        }
        return Tb
      }(bb, ab, Ub);
      if (0 === Ab.length) return 'path("M0 0Z")';
      if (1 === Ab.length && 0 === Ab[0].left && 0 === Ab[0].top && Ab[0].right === bb && Ab[0].bottom === ab) return "";
      const Mb = bb => Math.round(10 * bb) / 10;
      return `path("${Ab.map((bb=>`M${Mb(bb.left)} ${Mb(bb.top)}H${Mb(bb.right)}V${Mb(bb.bottom)}H${Mb(bb.left)}Z`)).join("")}")`
    }

    function ya(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Mb = [],
        Tb = 2 * Ub / Ab;
      for (let Eb = 0; Eb < Ab; Eb++) {
        const Ab = ab - Ub + Eb * Tb,
          Yb = Ab + Tb,
          Bb = Math.min(Math.max(ab, Ab), Yb) - ab,
          eb = Math.sqrt(Math.max(0, Ub * Ub - Bb * Bb));
        Mb.push({
          left: bb - eb,
          top: Ab,
          right: bb + eb,
          bottom: Yb
        })
      }
      return Mb
    }
    var Za = Ub(8450),
      Da = Ub(35990);

    function za(bb) {
      const ab = bb.getBoundingClientRect(),
        Ub = {
          left: ab.left,
          top: ab.top,
          right: ab.right,
          bottom: ab.bottom
        },
        Ab = (0, Jb.e)(bb);
      if (Ab.whole) return [Ub];
      const Mb = function(bb) {
          const ab = bb.right - bb.left,
            Ub = bb.bottom - bb.top,
            Ab = Math.min(ab, Ub) / 2,
            Mb = (bb.left + bb.right) / 2,
            Tb = (bb.top + bb.bottom) / 2;
          return ab >= Ub ? [{
            left: bb.left + Ab,
            top: bb.top,
            right: bb.right - Ab,
            bottom: bb.bottom
          }, ...ya(bb.left + Ab, Tb, Ab), ...ya(bb.right - Ab, Tb, Ab)] : [{
            left: bb.left,
            top: bb.top + Ab,
            right: bb.right,
            bottom: bb.bottom - Ab
          }, ...ya(Mb, bb.top + Ab, Ab), ...ya(Mb, bb.bottom - Ab, Ab)]
        }(Ub),
        Tb = Ab.keyBox;
      if (Tb) {
        const bb = (Ub.left + Ub.right) / 2,
          ab = (Ub.top + Ub.bottom) / 2;
        Mb.push({
          left: bb - Tb.width / 2,
          top: ab - Tb.height / 2,
          right: bb + Tb.width / 2,
          bottom: ab + Tb.height / 2
        })
      }
      return Mb
    }

    function xa(bb) {
      const ab = bb.getBoundingClientRect();
      return 0 === ab.width && 0 === ab.height || "visible" !== getComputedStyle(bb).visibility ? [] : [(0, Za.k)(ab, 44)]
    }

    function ia(bb, ab) {
      (0, Ab.useEffect)((() => {
        const Ub = bb.current;
        if (!ab || !Ub) return;
        const Ab = () => {
          const bb = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            ab = bb.find((bb => bb.classList.contains("TouchInteractHit")));
          ab !== Mb && (Mb && Tb.unobserve(Mb), Mb = ab, ab && Tb.observe(ab));
          const Ab = Array.from(document.querySelectorAll(Ra.e)),
            Eb = [...bb.flatMap((bb => za(bb))), ...Ab.flatMap(xa)],
            Yb = function(bb, ab) {
              const Ub = ab.map((ab => ({
                left: ab.left - bb.left,
                top: ab.top - bb.top,
                right: ab.right - bb.left,
                bottom: ab.bottom - bb.top
              })));
              return ka(Math.ceil(bb.width), Math.ceil(bb.height), Ub)
            }(Ub.getBoundingClientRect(), Eb);
          Ub.style.clipPath !== Yb && (Ub.style.clipPath = Yb)
        };
        let Mb;
        const Tb = new ResizeObserver((() => {
          Ab()
        }));
        Ab(), Tb.observe(Ub);
        const Eb = Ub.closest(".InGameUi"),
          Yb = new MutationObserver(Ab);
        Eb && Yb.observe(Eb, {
          attributes: !0,
          attributeFilter: ["class", Da.c]
        });
        const Bb = [(0, zb.n)(ja.d, Ab), (0, zb.n)(Ra.t, Ab), (0, zb.n)(Ra.i, Ab)];
        return () => {
          Tb.disconnect(), Yb.disconnect();
          for (const bb of Bb) bb();
          Ub.style.clipPath = ""
        }
      }), [bb, ab])
    }
    var fa = Ub(4077);

    function ma(bb) {
      var ab;
      let {
        onMove: Ub,
        mode: Mb,
        speedCurve: Tb,
        autorun: Eb = !1
      } = bb;
      const Yb = (0, Ab.useRef)(null),
        Bb = (0, Ab.useRef)(null),
        vb = (0, Ab.useRef)(null),
        Lb = (0, Ab.useRef)(null),
        Xb = (0, Ab.useRef)(null),
        jb = (0, Ab.useRef)(null),
        Rb = (0, Ab.useRef)(null),
        kb = (0, Ab.useRef)(null),
        yb = (0, Ab.useRef)(null),
        Zb = (0, Ab.useRef)(!1),
        Db = (0, Ab.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: zb
        } = (0, Ib.A)(),
        xb = (0, fa.t)(Mb),
        ib = (0, mb.n)(["notchSize"]).notchSize,
        fb = ib.left,
        pb = (0, Ab.useRef)(16),
        Nb = (0, Pa.b)(),
        [Wb, Hb, db] = "pinned" === Mb ? La.r : null !== (ab = Nb.hudElements.joystick) && void 0 !== ab ? ab : La.r,
        Fb = "pinned" === Mb ? null : Nb.hudSafe,
        hb = Math.max(fa.l, fa.p * db);
      ia(Bb, "pinned" !== Mb);
      const Gb = function(bb, ab, Ub, Mb, Tb) {
        const Eb = (0, Ab.useRef)(null),
          Yb = () => {
            clearInterval(Eb.current), Eb.current = null
          },
          Bb = va(bb, {
            create: bb => new Ba(bb),
            elementRef: ab,
            ringRef: Ub,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Tb,
            onLocked: () => {
              Eb.current = setInterval((() => {
                Pb.gameBridge.lookup("dropAhead", null) && (Ma.f.play("autorunLedgeStop"), Bb.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Yb(), Mb()
            }
          });
        return (0, Ab.useEffect)((() => Yb), []), Bb
      }(Eb, vb, Rb, (() => {
        tb(), lb()
      }), (() => {
        Qb(), null === yb.current && Gb.current.suspend()
      }));

      function Qb() {
        const bb = vb.current.getBoundingClientRect();
        yb.current = aa(kb.current, bb, 80, Ua(`.TouchInventoryKey, ${Ra.e}`)), Zb.current = null !== yb.current && Aa(Db.current, yb.current)
      }

      function qb() {
        const {
          innerWidth: bb,
          innerHeight: ab
        } = window, Ub = (0, Ra.J)(Fb, bb, ab, (0, Ra.Q)(ib, bb, ab), pb.current);
        return {
          left: Ub[3],
          bottom: Ub[2]
        }
      }

      function rb(bb) {
        vb.current.style.transform = `translate(${bb.x-hb}px, ${bb.y-hb}px)`
      }

      function Kb(bb) {
        const ab = vb.current;
        ab.classList.add("Resting"), ab.classList.toggle("Returning", bb), ab.style.display = "fixed_hidden" === Mb ? "none" : "block", rb(function() {
          const {
            innerWidth: bb,
            innerHeight: ab
          } = window, Ub = qb(), Ab = fb * bb / 100 + Ub.left, Mb = Yb.current.offsetHeight || ab, Tb = ((0, Xa.d)(bb, ab) ? fa.d : fa.c) + Ub.bottom;
          return {
            x: Math.min(bb - hb, Math.max(hb, Ab + fa.h + Wb * bb)),
            y: Math.min(Mb - hb, Math.max(hb, Mb - Tb + Hb * Mb))
          }
        }())
      }
      const ob = (0, Ab.useRef)({
        restFixed: Kb,
        release: wb
      });

      function lb() {
        xb ? Kb("fixed_shown" === Mb) : "floating" === Mb && (vb.current.style.display = "none"), Ub({
          x: 0,
          y: 0
        })
      }

      function tb() {
        jb.current = null, Xb.current = null, Lb.current.style.transform = "translate(-50%, -50%)"
      }

      function wb(bb) {
        tb();
        const ab = Gb.current;
        bb && null !== ab && void 0 !== ab && ab.lift() ? Ub({
          x: 0,
          y: -ab.lockedSpeed
        }) : (null === ab || void 0 === ab || ab.cancel(), lb())
      }

      function sb(bb) {
        const ab = Array.from(bb.touches).find((bb => bb.identifier === jb.current));
        if (null === Xb.current || null === jb.current || (0, ba.I)(ab)) return;
        const Ab = Gb.current,
          Mb = ab.clientX - Xb.current.x,
          Eb = ab.clientY - Xb.current.y,
          Yb = Math.hypot(Mb, Eb),
          Bb = Yb > 0 ? Math.min(1, hb / Yb) : 0,
          eb = Mb * Bb,
          vb = Eb * Bb,
          Pb = Math.hypot(eb, vb) / hb,
          Rb = Tb && Pb > 0 ? Tb(Pb) / Pb : 1;
        Lb.current.style.transform = `translate(calc(-50% + ${eb}px), calc(-50% + ${vb}px))`;
        const kb = eb / hb,
          zb = vb / hb;
        if (Ub({
            x: kb * Rb,
            y: zb * Rb
          }), null !== Ab && null !== yb.current) {
          Ab.move(kb, zb, Pb * Rb), Db.current = {
            clientX: ab.clientX,
            clientY: ab.clientY
          };
          const bb = Zb.current;
          Zb.current = Aa(ab, yb.current), Zb.current !== bb && Ab.target(Zb.current)
        }
      }
      return ob.current = {
        restFixed: Kb,
        release: wb
      }, (0, Ab.useLayoutEffect)((() => {
        if (!xb) return;
        const bb = () => {
          pb.current = (0, Ra.W)(document)
        };
        bb(), null === jb.current && ob.current.restFixed(!1);
        const ab = new ResizeObserver((() => {
          bb(), null === jb.current && ob.current.restFixed(!1)
        }));
        ab.observe(Yb.current);
        const Ub = vb.current;
        return () => {
          ab.disconnect(), Ub.classList.remove("Resting", "Returning"), null === jb.current && (Ub.style.display = "", Ub.style.transform = "")
        }
      }), [xb, Mb, ib, Wb, Hb, hb, Fb]), (0, Ab.useEffect)((() => {
        const bb = bb => {
            const ab = jb.current;
            null === ab || Array.from(bb.touches).some((bb => bb.identifier === ab)) || ob.current.release("touchend" === bb.type && Array.from(bb.changedTouches).some((bb => bb.identifier === ab)))
          },
          ab = () => {
            null !== jb.current && ob.current.release(!1)
          },
          Ub = () => {
            "hidden" === document.visibilityState && ab()
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
        }), window.addEventListener("blur", ab), document.addEventListener("visibilitychange", Ub);
        const Ab = (0, ea.e)((bb => {
          let {
            keepsMovement: Ub
          } = bb;
          Ub || ab()
        }));
        return () => {
          Ab(), document.removeEventListener("touchstart", bb, {
            capture: !0
          }), document.removeEventListener("touchmove", bb, {
            capture: !0
          }), document.removeEventListener("touchend", bb, {
            capture: !0
          }), document.removeEventListener("touchcancel", bb, {
            capture: !0
          }), window.removeEventListener("blur", ab), document.removeEventListener("visibilitychange", Ub)
        }
      }), []), (0, Ab.useEffect)((() => {
        const bb = Yb.current,
          ab = bb => {
            bb.preventDefault()
          };
        return bb.addEventListener("touchstart", ab, {
          passive: !1
        }), () => {
          bb.removeEventListener("touchstart", ab)
        }
      }), []), (0, eb.jsxs)("div", {
        ref: Yb,
        className: "JoystickZone",
        style: xb && (Wb > 0 || db > 1 || qb().left > 0) ? {
          width: `max(35vw, calc(${fb+100*Wb}vw + ${qb().left+fa.h+hb+24}px))`
        } : void 0,
        onTouchStart: function(bb) {
          var ab;
          if (null !== jb.current) return;
          const Ub = Array.from(bb.changedTouches).find((bb => {
            var ab;
            return null === (ab = Yb.current) || void 0 === ab ? void 0 : ab.contains(bb.target)
          }));
          if (Ub) {
            if (null === (ab = Gb.current) || void 0 === ab || ab.startTouch(), jb.current = Ub.identifier, "pinned" === Mb) {
              const bb = vb.current.getBoundingClientRect();
              Xb.current = {
                x: bb.left + bb.width / 2,
                y: bb.top + bb.height / 2
              }
            } else {
              Xb.current = {
                x: Ub.clientX,
                y: Ub.clientY
              }, vb.current.classList.remove("Resting", "Returning"), vb.current.style.display = "block";
              const bb = Yb.current.getBoundingClientRect();
              rb({
                x: Ub.clientX - bb.left,
                y: Ub.clientY - bb.top
              }), Eb && (Db.current = {
                clientX: Ub.clientX,
                clientY: Ub.clientY
              }, Qb())
            }
            sb(bb)
          }
        },
        onTouchMove: sb,
        children: [(0, eb.jsx)("div", {
          ref: Bb,
          className: "JoystickTouchLayer"
        }), (0, eb.jsxs)("div", {
          ref: vb,
          className: "Joystick",
          style: {
            width: 2 * hb + "px",
            height: 2 * hb + "px",
            transform: "pinned" === Mb ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, eb.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * hb + "px",
              height: 2 * hb + "px"
            }
          }), Eb && (0, eb.jsxs)(eb.Fragment, {
            children: [(0, eb.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, eb.jsx)("circle", {
                ref: Rb,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, eb.jsxs)("div", {
              ref: kb,
              className: "AutorunTarget",
              children: [(0, eb.jsx)(ub.e, {
                name: "lock"
              }), zb("settingsMenu:autoRun")]
            })]
          }), (0, eb.jsx)("div", {
            ref: Lb,
            className: "JoystickKnob",
            style: {
              width: `${hb}px`,
              height: `${hb}px`
            }
          })]
        })]
      })
    }
    const pa = .35,
      Na = .22;

    function Wa(bb) {
      if (bb < .1) return 0;
      if (bb < pa) {
        const ab = (bb - .1) / (pa - .1);
        return .06 + .16 * ab * ab
      }
      return bb < .85 ? Na + .78 * (bb - pa) / .5 : 1
    }

    function Ha(bb, ab) {
      const Ub = (0, Ab.useRef)(null);
      return (0, Ab.useLayoutEffect)((() => (Jb.g.set(bb, Ub.current, ab), () => {
        Jb.g.set(bb, null)
      })), [bb, ab]), Ub
    }
    const Ia = "C",
      da = "J",
      Fa = "U",
      ha = "P",
      Ga = "A",
      Qa = "G",
      qa = "X",
      ua = (0, Ab.forwardRef)((function(bb, ab) {
        let {
          slot: Ub,
          canvasZone: Mb = !1,
          lit: Eb = !1,
          label: Yb,
          className: Bb,
          children: vb,
          ...Lb
        } = bb;
        return (0, Ab.useEffect)((() => (zb.m.IR(ja.d), () => {
          zb.m.IR(ja.d)
        })), []), (0, eb.jsx)("div", {
          ref: ab,
          className: Tb()("TouchKeyHit", `TouchSlot${Ub}`, Bb, {
            CanvasZone: Mb
          }),
          ...Lb,
          children: (0, eb.jsxs)("div", {
            className: Tb()("TouchKey", {
              Lit: Eb,
              Labelled: void 0 !== Yb
            }),
            children: [vb, void 0 !== Yb && (0, eb.jsx)("span", {
              className: "TouchKeyLabel",
              children: Yb
            })]
          })
        })
      }));

    function ra(bb, ab) {
      (0, Ab.useEffect)((() => () => {
        ab.current && (ab.current = !1, (0, cb.q)(bb, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Ka(bb, ab) {
      const Ub = ab ? [qa] : [ha, qa];
      return bb.filter((bb => null !== bb)).slice(0, Ub.length).map(((bb, ab) => {
        const Mb = Ub[ab];
        return (0, eb.jsx)(Ab.Fragment, {
          children: bb.render(Mb)
        }, `${bb.id}:${Mb}`)
      }))
    }
    var oa = Ub(36003);
    class la extends Ta {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(bb, ab) {
        this.start = {
          x: bb,
          y: ab
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(bb, ab, Ub) {
        const Ab = Math.hypot(bb - this.start.x, ab - this.start.y) <= 12;
        this.moved ||= !Ab;
        const Mb = null !== Ub && ab < this.start.y - 12 && Aa({
          clientX: bb,
          clientY: ab
        }, Ub);
        this.hold(!this.moved, Ab || Mb)
      }
    }
    const ta = new Set;

    function wa(bb) {
      const ab = new Set(Array.from(bb.touches, (bb => bb.identifier)));
      for (const Ub of ta) {
        for (const bb of Ub.ids) ab.has(bb) || Ub.ids.delete(bb);
        if (0 === Ub.ids.size) {
          ta.delete(Ub);
          Ub.pressesOnPointerDown && "touchstart" === bb.type && Array.from(bb.changedTouches).some((bb => bb.target instanceof Node && Ub.element.contains(bb.target))) || Ub.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const RE of ["touchstart", "touchmove"]) window.addEventListener(RE, wa, {
        capture: !0,
        passive: !0
      });

    function sa(bb) {
      let {
        pressesOnPointerDown: ab = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ub = (0, Ab.useRef)(bb);
      Ub.current = bb;
      const Mb = (0, Ab.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: ab,
        release: () => {
          Ub.current()
        }
      });
      (0, Ab.useEffect)((() => {
        const bb = Mb.current;
        return () => {
          ta.delete(bb), bb.ids.clear()
        }
      }), []);
      const Tb = bb => {
        const ab = Mb.current;
        for (const Ub of Array.from(bb.changedTouches)) ab.ids.delete(Ub.identifier);
        0 === ab.ids.size && ta.delete(ab)
      };
      return {
        onTouchStart: bb => {
          const ab = Mb.current;
          ab.element = bb.currentTarget;
          for (const Ub of Array.from(bb.changedTouches)) Ub.target instanceof Node && bb.currentTarget.contains(Ub.target) && ab.ids.add(Ub.identifier);
          ab.ids.size > 0 && ta.add(ab)
        },
        onTouchEnd: Tb,
        onTouchCancel: Tb
      }
    }

    function ga(bb, ab) {
      return null === ab ? null : (0, oa.e)(bb.nativeEvent.changedTouches, ab.id)
    }

    function Ca(bb) {
      let {
        lockable: ab
      } = bb;
      const {
        t: Ub
      } = (0, Ib.A)(), Mb = "round" === (0, La.cb)().hudShape, Tb = (0, Ab.useRef)(!1);
      ra(Ob.r.Jump, Tb);
      const Eb = (0, Ab.useRef)(null),
        Yb = (0, Ab.useRef)(null),
        Bb = (0, Ab.useRef)(null),
        vb = (0, Ab.useRef)(null),
        Lb = (0, Ab.useRef)(null),
        Pb = (0, Ab.useRef)(null),
        Xb = (0, Ab.useRef)(!1),
        jb = (bb, ab) => {
          Tb.current = bb, (0, cb.q)(Ob.r.Jump, bb, ab)
        },
        Rb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Tb.current && (Eb.current && (0, Sb.h)(Eb.current, !1), jb(!1, bb))
        },
        kb = va(ab, {
          create: bb => new la(bb),
          elementRef: Eb,
          ringRef: Yb,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const bb = Eb.current.getBoundingClientRect(),
              ab = Bb.current.parentElement,
              Ub = ab.getBoundingClientRect(),
              Ab = {
                left: Ub.left + ab.clientLeft,
                top: Ub.top + ab.clientTop,
                right: Ub.right - ab.clientLeft,
                bottom: Ub.bottom - ab.clientTop
              };
            if (Lb.current = aa(Bb.current, Ab, 16, Ua(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${Ra.e}`)), null === Lb.current) return void kb.current.suspend();
            const Mb = Lb.current;
            Pb.current = {
              left: Math.min(bb.left, Mb.left),
              top: Mb.top,
              right: Math.max(bb.right, Mb.right),
              bottom: bb.bottom
            }, Xb.current = null !== vb.current && Aa({
              clientX: vb.current.x,
              clientY: vb.current.y
            }, Mb)
          },
          onUnlocked: () => {
            null === vb.current && Rb()
          }
        }),
        yb = bb => {
          var ab;
          vb.current = null, null === (ab = kb.current) || void 0 === ab || ab.cancel(), Rb(bb)
        },
        Zb = sa((() => {
          yb()
        })),
        Db = bb => {
          const ab = vb.current;
          var Ub;
          return null === ab ? null !== (Ub = kb.current) && void 0 !== Ub && Ub.locked ? null : "lifted" : ga(bb, ab) ? "lifted" : (0, oa.f)(bb.nativeEvent.touches, ab.id) ? null : "dropped"
        };
      return (0, eb.jsxs)(ua, {
        ref: Eb,
        slot: da,
        className: "JumpKey",
        onTouchStart: bb => {
          Zb.onTouchStart(bb), (0, Sb.h)(bb.currentTarget, !0), null === vb.current || (0, oa.f)(bb.nativeEvent.touches, vb.current.id) || yb();
          const ab = bb.changedTouches[0];
          var Ub;
          null === vb.current && ab && (vb.current = {
            id: ab.identifier,
            x: ab.clientX,
            y: ab.clientY
          }, null === (Ub = kb.current) || void 0 === Ub || Ub.press(ab.clientX, ab.clientY));
          Tb.current || jb(!0, bb.nativeEvent)
        },
        onTouchMove: bb => {
          const ab = vb.current,
            Ub = ga(bb, ab);
          if (!Ub) return;
          const Ab = kb.current;
          if (null === Ab || void 0 === Ab || Ab.move(Ub.clientX, Ub.clientY, Pb.current), null !== Ab && void 0 !== Ab && Ab.offered) {
            const bb = Aa(Ub, Lb.current);
            bb !== Xb.current && (Xb.current = bb, Ab.target(bb))
          }
          ab.x = Ub.clientX, ab.y = Ub.clientY
        },
        onTouchEnd: bb => {
          var ab;
          Zb.onTouchEnd(bb);
          const Ub = Db(bb);
          null !== Ub && ("dropped" !== Ub ? (vb.current = null, null !== (ab = kb.current) && void 0 !== ab && ab.lift() ? (0, Sb.h)(bb.currentTarget, !1) : Rb(bb.nativeEvent)) : yb(bb.nativeEvent))
        },
        onTouchCancel: bb => {
          Zb.onTouchCancel(bb), null !== Db(bb) && yb(bb.nativeEvent)
        },
        children: [(0, eb.jsx)(ub.e, {
          name: "arrow-up-from-line"
        }), ab && (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, eb.jsx)(ub.e, {
              name: "lock"
            })
          }), (0, eb.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, eb.jsx)("rect", {
              ref: Yb,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Mb ? 48 : 0,
              pathLength: 1
            })
          }), (0, eb.jsxs)("div", {
            ref: Bb,
            className: "JumpLockTarget",
            children: [(0, eb.jsx)(ub.e, {
              name: "lock"
            }), Ub("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const Va = new WeakMap;
    class Oa {
      constructor(bb) {
        this.zones = bb, this.followed = new Map, this.onStart = bb => {
          if (this.releaseMissing(bb.touches), bb.target instanceof HTMLCanvasElement)
            for (let Ub = 0; Ub < bb.changedTouches.length; Ub++) {
              var ab;
              const {
                identifier: Ab,
                clientX: Mb,
                clientY: Tb
              } = bb.changedTouches[Ub];
              this.release(Ab);
              const Eb = this.zones.hitZone(Mb, Tb);
              if (!Eb) continue;
              const {
                key: Yb
              } = Eb;
              null === (ab = Va.get(Yb)) || void 0 === ab || ab.cancel();
              const Bb = {
                hit: Eb.element,
                key: Yb,
                x: Eb.x,
                y: Eb.y,
                reach: .6 * Eb.radius
              };
              this.followed.set(Ab, Bb), (0, Sb.h)(Eb.element, !0), ca(Bb, Mb, Tb)
            }
        }, this.onMove = bb => {
          this.releaseMissing(bb.touches);
          for (let ab = 0; ab < bb.changedTouches.length; ab++) {
            const {
              identifier: Ub,
              clientX: Ab,
              clientY: Mb
            } = bb.changedTouches[ab], Tb = this.followed.get(Ub);
            Tb && ca(Tb, Ab, Mb)
          }
        }, this.onEnd = bb => {
          for (let ab = 0; ab < bb.changedTouches.length; ab++) this.release(bb.changedTouches[ab].identifier)
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
        for (const ab of [...this.followed.keys()])(0, oa.f)(bb, ab) || this.release(ab)
      }
      releaseAll() {
        for (const bb of [...this.followed.keys()]) this.release(bb)
      }
      release(bb) {
        const ab = this.followed.get(bb);
        if (!ab) return;
        this.followed.delete(bb);
        for (const Mb of this.followed.values())
          if (Mb.key === ab.key) return;
        (0, Sb.h)(ab.hit, !1);
        const {
          key: Ub
        } = ab, Ab = Ub.style.translate;
        Ub.style.translate = "", Ab && Va.set(Ub, Ub.animate({
          translate: [Ab, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function ca(bb, ab, Ub) {
      let {
        key: Ab,
        x: Mb,
        y: Tb,
        reach: Eb
      } = bb;
      const Yb = ab - Mb,
        Bb = Ub - Tb,
        eb = Math.min(1, Eb / (Math.hypot(Yb, Bb) || 1));
      Ab.style.translate = `${Yb*eb}px ${Bb*eb}px`
    }
    const Ja = () => {
      const bb = (0, Vb.j)(),
        ab = (0, Nb.o)();
      return bb || ab
    };

    function na(bb) {
      (0, Jb.i)(bb.x, bb.y)
    }
    const Sa = (0, Ab.memo)((function() {
        const bb = Ja(),
          {
            joystickMode: ab,
            touchSpeedCurve: Ub,
            autorun: Mb
          } = (0, mb.n)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Ab.useEffect)((() => ((0, nb.l)(Ob.v.TouchControls, Ob.v.TouchControls), () => {
          (0, nb.l)(Ob.v.TouchControls, 0), (0, Jb.i)(0, 0)
        })), []), (0, eb.jsx)("div", {
          className: Tb()("TouchMovementWrapper", {
            Hidden: bb
          }),
          "data-camera-keeper": "",
          children: (0, eb.jsx)(ma, {
            onMove: na,
            mode: ab,
            speedCurve: Ub ? Wa : void 0,
            autorun: Mb
          })
        })
      })),
      bU = (0, Ab.memo)((function() {
        const bb = Ja(),
          {
            clientEscMenuOptions: ab
          } = (0, mb.n)(["clientEscMenuOptions"]),
          Ub = ab.touchActionButtons;
        return (0, Ab.useEffect)((() => new Oa(Jb.g).start()), []), (0, Ab.useEffect)((() => {
          zb.m.IR(ja.d)
        }), [bb]), (0, eb.jsxs)("div", {
          className: Tb()("TouchComponentsButtons", {
            Hidden: bb
          }),
          "data-camera-keeper": "",
          children: [(0, eb.jsx)(Ca, {
            lockable: ab.jumpLock && !bb
          }), (0, eb.jsx)(PU, {
            hidden: bb,
            actionButtons: Ub
          }), (0, eb.jsx)(UU, {})]
        })
      }));

    function aU(bb) {
      const ab = ab => Ub => {
        (0, Sb.h)(Ub.currentTarget, ab), bb(ab, Ub.nativeEvent)
      };
      return {
        onPointerDown: ab(!0),
        onPointerUp: ab(!1),
        onPointerCancel: ab(!1)
      }
    }

    function UU() {
      const bb = (0, Db.h)("canCrouch"),
        ab = (0, fb.k)("crouching"),
        Ub = (0, Ab.useRef)(!1);
      ra(Ob.r.Crouch, Ub);
      const Mb = (bb, ab) => {
          Ub.current = bb, (0, cb.q)(Ob.r.Crouch, bb, ab)
        },
        Tb = (0, Ab.useRef)(null),
        Eb = () => {
          Ub.current && (Tb.current && (0, Sb.h)(Tb.current, !1), Mb(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Yb = sa(Eb);
      return (0, Ab.useEffect)((() => {
        !1 === bb && Eb()
      }), [bb]), !1 === bb ? null : (0, eb.jsx)(ua, {
        ref: Tb,
        slot: Ia,
        className: "CrouchKey",
        lit: ab,
        ...Yb,
        ...aU(Mb),
        children: (0, eb.jsx)(ub.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const AU = [{
        icon: "arrows-rotate"
      }],
      MU = [{
        icon: "Arrow"
      }],
      TU = [{
        icon: "crosshairs"
      }],
      EU = [{
        icon: "swords"
      }],
      YU = [{
        icon: "hand-back-point-up"
      }],
      BU = [{
        icon: "Firecracker"
      }];

    function eU(bb, ab, Ub, Ab) {
      return {
        id: JSON.stringify(ab),
        render: Mb => (0, eb.jsx)(XU, {
          code: bb,
          slot: Mb,
          icon: ab,
          label: Ab,
          hidden: Ub
        })
      }
    }

    function vU(bb, ab) {
      return {
        id: "fly",
        render: Ub => (0, eb.jsx)(LU, {
          slot: Ub,
          flying: bb,
          label: ab
        })
      }
    }

    function LU(bb) {
      let {
        slot: ab,
        flying: Ub,
        label: Ab
      } = bb;
      return (0, eb.jsx)(ua, {
        slot: ab,
        className: "FlyKey",
        lit: Ub,
        label: Ab,
        ...aU(((bb, ab) => {
          (0, cb.q)(Ob.r.Fly, bb, ab)
        })),
        children: (0, eb.jsx)(ub.e, {
          name: "feather-pointed"
        })
      })
    }

    function PU(bb) {
      var ab, Ub;
      let {
        hidden: Ab,
        actionButtons: Mb
      } = bb;
      const {
        t: Tb
      } = (0, Ib.A)(), {
        gun: Eb,
        aimable: Yb,
        chargeName: Bb
      } = (0, fb.k)("heldItemAim"), vb = (0, fb.k)("gliderBoostFuel"), {
        canFly: Lb,
        flying: Pb
      } = (0, fb.k)("flight"), Xb = (0, Db.h)("touchscreenActionButton"), jb = Eb ? AU : Xb, Rb = Yb ? {
        icon: MU,
        label: Tb("touchKeys:aim")
      } : null, kb = null !== Bb ? {
        icon: [{
          icon: Bb
        }]
      } : null, yb = null !== Rb && void 0 !== Rb ? Rb : kb, Zb = null !== (ab = null === (Ub = Eb ? Rb : null !== kb && void 0 !== kb ? kb : Rb) || void 0 === Ub ? void 0 : Ub.icon) && void 0 !== ab ? ab : YU, zb = [!Mb && yb ? eU(Jb.b.Action2, yb.icon, Ab, yb.label) : null, Eb ? eU(Jb.b.Action3, TU, Ab, Tb("touchKeys:scope")) : null, Lb ? vU(Pb, Tb("touchKeys:fly")) : null];
      return (0, eb.jsxs)(eb.Fragment, {
        children: [jb && (0, eb.jsx)(XU, {
          code: Jb.b.Action1,
          slot: Qa,
          icon: jb,
          label: Eb ? Tb("touchKeys:reload") : void 0,
          hidden: Ab
        }, JSON.stringify(jb)), Mb && (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)(XU, {
            code: Jb.b.Attack,
            slot: Ga,
            icon: EU,
            name: Tb("touchKeys:attack"),
            hidden: Ab
          }), (0, eb.jsx)(XU, {
            code: Jb.b.Use,
            slot: Fa,
            icon: Zb,
            name: Tb("touchKeys:use"),
            hidden: Ab
          })]
        }), Ka(zb, Mb), vb > 0 && (0, eb.jsx)(XU, {
          code: Jb.b.Boost,
          slot: qa,
          icon: BU,
          label: Tb("touchKeys:boost", {
            fuel: vb > 99 ? "99+" : vb
          }),
          hidden: Ab
        })]
      })
    }

    function XU(bb) {
      let {
        code: ab,
        slot: Ub,
        icon: Ab,
        label: Mb,
        name: Tb,
        hidden: Eb
      } = bb;
      const Yb = Ha(ab, Eb);
      return (0, eb.jsx)(ua, {
        ref: Yb,
        slot: Ub,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Mb,
        role: void 0 !== Tb ? "img" : void 0,
        "aria-label": Tb,
        children: (0, eb.jsx)(Bb.c, {
          text: Ab
        })
      })
    }
    var jU = Ub(3970),
      RU = Ub(2708),
      kU = Ub(619);
    const yU = (0, Ab.memo)((function() {
      (0, yb.e)();
      const bb = (0, Ab.useRef)([]),
        ab = (0, RU.d)(),
        Ub = (0, Ab.useRef)(0),
        Mb = (0, Ab.useRef)(0),
        Tb = (0, Ab.useRef)([]),
        Eb = (0, Ab.useRef)(null);

      function vb(Ub, Ab, Mb, Tb) {
        const Eb = (0, kU.c)(),
          Yb = setTimeout((() => {
            bb.current = bb.current.filter((bb => bb.id !== Eb)), ab()
          }), Tb);
        Pb.gameBridge.send("recordFlyingMiddleText", {
          content: Ub,
          NT: Ab,
          angle: Mb,
          WT: Tb
        }), bb.current.push({
          id: Eb,
          content: Ub,
          NT: Ab,
          WT: Tb,
          removeTimeout: Yb,
          angle: Mb
        }), ab()
      }
      return (0, fb.c)("shotDamageToShow", (bb => {
        let {
          damage: ab,
          wasCrit: Ub,
          distance: Ab
        } = bb;
        const Mb = -Math.PI / 4 + Math.random() * Math.PI / 2;
        vb(Ub ? [{
          str: ab.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [ab.toString()], Ab, Mb, 1e3)
      })), (0, Yb.f)("flyingMiddleMessage", (bb => {
        let {
          content: ab,
          NT: Ab,
          WT: Yb
        } = bb;
        Tb.current.push({
          content: ab,
          NT: Ab,
          WT: Yb
        });
        const Bb = () => {
          const {
            content: bb,
            NT: ab,
            WT: Ab
          } = Tb.current.shift(), Eb = function(bb) {
            const ab = -Math.PI / 4,
              Ub = Math.PI / 4,
              Ab = Ub - ab,
              Mb = (1 + Math.sqrt(5)) / 2,
              Tb = 2 * Math.PI / (Mb * Mb);
            let Eb = bb + Tb;
            for (; Eb > Ub;) Eb -= Ab;
            for (; Eb < ab;) Eb += Ab;
            const Yb = Math.PI / 6;
            if (Math.abs(Eb - bb) < Yb) {
              Eb = bb + (Math.sign(Eb - bb) || 1) * Yb, Eb > Ub && (Eb = bb - Yb), Eb < ab && (Eb = bb + Yb)
            }
            return Eb
          }(Mb.current);
          Mb.current = Eb, Ub.current = Date.now(), vb(bb, ab, Eb, Ab)
        };
        if (!Eb.current) {
          const bb = () => {
            Tb.current.length > 0 && Bb(), 0 === Tb.current.length && (clearInterval(Eb.current), Eb.current = null)
          };
          Eb.current = setInterval(bb, 200), Ub.current + 200 < Date.now() && bb()
        }
        for (; Tb.current.length > 4;) Bb()
      })), (0, Yb.f)("forceFlyingMiddleMessage", (bb => {
        let {
          content: ab,
          NT: Ub,
          angle: Ab,
          WT: Mb
        } = bb;
        vb(ab, Ub, Ab, Mb)
      })), (0, Ab.useEffect)((() => () => {
        clearInterval(Eb.current), Eb.current = null;
        for (const ab of bb.current) clearTimeout(ab.removeTimeout)
      }), []), (0, eb.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: bb.current.map((bb => {
          const {
            id: ab,
            content: Ub,
            NT: Ab,
            WT: Mb,
            angle: Tb
          } = bb;
          return bb.pos || (bb.pos = function(bb, ab) {
            const Ub = 50 / (bb ** .7 * .35);
            return {
              x: Ub * Math.sin(ab),
              y: -Ub * Math.cos(ab)
            }
          }(Ab, Tb)), (0, eb.jsx)(ZU, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Mb,
            enterActiveStyle: {
              transform: `translate(${bb.pos.x}vw, ${bb.pos.y}vh)`,
              transition: `transform ${Mb}ms ease-out`
            },
            children: (0, eb.jsx)("div", {
              children: (0, eb.jsx)(Bb.c, {
                text: Ub
              })
            })
          }, ab)
        }))
      })
    }));

    function ZU(bb) {
      let {
        children: ab,
        className: Ub,
        classNames: Mb,
        timeout: Tb,
        enterActiveStyle: Eb
      } = bb;
      const [Yb, Bb] = (0, Ab.useState)(!1), [vb, Lb] = (0, Ab.useState)(!1), Pb = (0, Ab.useRef)(null);
      return (0, Ab.useEffect)((() => {
        Bb(!0)
      }), []), (0, eb.jsx)(jU.b, {
        className: Ub,
        classNames: Mb || Ub,
        in: Yb,
        timeout: Tb,
        nodeRef: Pb,
        onEntering: () => {
          Lb(!0)
        },
        children: (0, Ab.cloneElement)(ab, {
          ref: Pb,
          style: vb && Eb || void 0
        })
      })
    }
    var DU = Ub(36013);

    function zU() {
      const bb = (0, fb.k)("health");
      return (0, eb.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, eb.jsx)(DU.b, {
          placement: "statBars"
        }), (0, eb.jsx)(xU, {
          actualValue: bb.shield,
          maxValue: bb.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, eb.jsx)(xU, {
          actualValue: bb.health,
          maxValue: bb.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function xU(bb) {
      let {
        actualValue: ab,
        maxValue: Ub,
        hideAtValue: Ab,
        icon: Mb,
        className: Tb
      } = bb;
      return (0, yb.h)(), null === ab || null === Ub || ab === Ab || Ub === Ab ? null : (0, eb.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, eb.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, eb.jsx)("div", {
            className: `BottomScreenStatBar ${Tb}`,
            style: {
              transform: `scaleX(${Math.max(ab/Ub,0)})`,
              transformOrigin: "left center"
            }
          }), (0, eb.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, eb.jsx)(ub.e, {
              name: Mb
            }), ` ${Math.ceil(ab)}/${Ub}`]
          })]
        })
      })
    }
    var iU = Ub(8906),
      fU = Ub(4211),
      mU = Ub(1249),
      pU = Ub(2528),
      NU = Ub(1352),
      WU = Ub(1238),
      HU = Ub(3090),
      IU = Ub(3144),
      dU = Ub(3114),
      FU = Ub(714),
      hU = Ub(3161),
      GU = Ub(137),
      QU = Ub(8807),
      qU = Ub(325);

    function uU(bb, ab) {
      let {
        shownName: Ub,
        lifeformType: Ab
      } = bb;
      return null !== Ub ? Ub : null !== Ab ? ab(`lifeform:${(0,qU.he)(Ab)}`) : null
    }
    var rU = Ub(3102),
      KU = Ub(3109);
    const oU = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      lU = (0, Ab.memo)((function() {
        var bb, ab;
        const Ub = (0, yb.e)(),
          Mb = (0, Xb.useNavigatePreserveSearch)(),
          {
            t: Eb
          } = (0, Ib.A)(),
          {
            loadingOverlayVisible: Bb
          } = (0, mb.n)(["loadingOverlayVisible"]),
          vb = (0, Nb.o)(),
          [Lb, jb] = (0, Ab.useState)(!1),
          [Rb, kb] = (0, Ab.useState)(!0),
          [Zb, zb] = (0, Ab.useState)(null),
          ib = (0, RU.d)(),
          pb = (0, Db.h)("respawnButtonText"),
          Wb = (0, Db.h)("usePlayAgainButton"),
          Hb = (0, Db.h)("useRespawnButton"),
          {
            gameNameWithVariation: db
          } = (0, fb.k)("connectedGame"),
          Fb = (0, Ab.useRef)(xb.e.get("secsToRespawn")),
          hb = (0, Ab.useRef)(Pb.gameBridge.latest("localPlayerAlive")),
          Gb = (0, Ab.useRef)(xb.e.get("secsToRespawn")),
          Qb = (0, Ab.useRef)(xb.e.get("autoRespawn")),
          qb = (0, Ab.useRef)(null),
          rb = (0, Ab.useRef)(0),
          Kb = (0, Ab.useRef)(0),
          [ob, tb] = (0, Ab.useState)(!1),
          wb = (0, Ab.useRef)(null),
          sb = (0, Ab.useRef)(null),
          gb = (0, Ab.useRef)(null);
        (0, Db.f)("secsToRespawn", (bb => {
          console.log("Received new secsToRespawn with", bb, "and current canRespawn value of ", Qb.current), Gb.current = bb, cb()
        })), (0, Db.f)("autoRespawn", (bb => {
          console.log("Received autorespawn", bb, "current canRespawn value of ", Fb.current), Qb.current = bb, cb()
        }));
        const Cb = bb => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", bb), bb || rb.current++, hb.current = bb, cb()
        };
        (0, fb.c)("localPlayerAliveSet", Cb), (0, Yb.f)(IU.j, (bb => {
          "connected" === bb && !hb.current && Qb.current && Fb.current <= 0 && (Kb.current = 0, Jb())
        })), (0, Ab.useEffect)((() => {
          const bb = Pb.gameBridge.latest("localPlayerAlive");
          bb === hb.current ? (console.log("Updating respawn component from initial mount"), cb()) : Cb(bb)
        }), []), (0, Ab.useEffect)((() => {
          if (Lb) {
            tb(!1);
            const bb = setTimeout((() => {
              tb(!0)
            }), 600);
            return (0, QU.e)(), () => {
              clearTimeout(bb)
            }
          }
          return () => {}
        }), [Lb]);
        (0, fb.c)("kill", (bb => {
          let {
            killer: ab,
            victim: Ub,
            withItem: Ab
          } = bb;
          if (!Ub.local) return;
          const Mb = ((bb, ab) => {
            if (bb.local) {
              const bb = oU[ab];
              return bb ? Eb(bb) : null
            }
            const Ub = uU(bb, Eb);
            return Ub ? Eb("respawnPage:killedBy", {
              name: Ub
            }) : null
          })(ab, Ab);
          Mb && zb({
            text: Mb,
            deathCount: hb.current ? rb.current + 1 : rb.current
          })
        }));
        const Vb = () => {
            Lb && Qb.current && hb.current && ob && jb(!1)
          },
          Ob = Lb && Qb.current && hb.current && ob && !Bb;
        (0, Yb.f)("usedKeyboard", (() => {
          Vb()
        })), (0, KU.b)("respawn", Ob, Vb);
        const cb = () => {
            kb(Gb.current >= 3 || !Qb.current), hb.current ? (clearInterval(qb.current), qb.current = null, Qb.current ? ib() : jb(!1)) : (jb(!0), Fb.current = Gb.current, ib(), console.log("Running respawn stats updated", Qb.current, Fb.current), Qb.current && Fb.current <= 0 && Jb(), clearInterval(qb.current), Fb.current > 0 && (qb.current = setInterval((() => {
              Fb.current = Math.max(Fb.current - 1, 0), ib(), Fb.current <= 0 && (clearInterval(qb.current), qb.current = null, xb.e.get("autoRespawn") && Jb())
            }), 1e3)))
          },
          Jb = () => {
            if (Date.now() - Kb.current > 1e3) {
              const bb = () => {
                Pb.gameBridge.send("respawn", null), Kb.current = Date.now()
              };
              xb.e.get("autoRespawn") ? bb() : (0, WU.ab)((() => {
                bb()
              }), "video_respawn")
            }
          },
          nb = (0, Ab.useMemo)((() => {
            var bb;
            return null === (bb = (0, FU.o)(db)) || void 0 === bb ? void 0 : bb.otherGameLinksOnRespawnPage
          }), [db]),
          Sb = 0 === Fb.current,
          ba = (null === Zb || void 0 === Zb ? void 0 : Zb.deathCount) === rb.current ? Zb.text : null,
          aa = Lb && Rb && !Bb,
          Ua = vb && Ob && null !== (bb = null === (ab = (0, lb.d)()) || void 0 === ab ? void 0 : ab.getBoundButton("menuConfirm")) && void 0 !== bb ? bb : null,
          Aa = bb => Sb ? bb : Eb("respawnPage:actionInSeconds", {
            action: bb,
            seconds: Fb.current
          });
        return (0, eb.jsx)(iU.d, {
          showing: Lb,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, eb.jsx)(HU.d, {
            show: Lb,
            "data-holds-camera-keeper": "",
            children: (0, eb.jsxs)(fU.d, {
              close: () => {
                jb(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: Qb.current || Bb ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, GU.j)() && (0, eb.jsx)(NU.e, {
                onClick: dU.d,
                children: Eb("homePage:backToGames")
              }), (0, eb.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Vb,
                children: [(0, eb.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, eb.jsx)("div", {
                    ref: sb,
                    className: "RespawnSideSquareBannerDiv",
                    children: Ub[0] > 925 && (0, eb.jsx)(pU.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: sb
                      },
                      showing: aa,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, eb.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, eb.jsxs)("div", {
                      className: Tb()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: vb
                      }),
                      children: [Qb.current && (0, eb.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, eb.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, eb.jsx)(ub.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Eb("respawnPage:youDied")]
                        }), (0, eb.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Ua && (hb.current ? Eb("respawnPage:pressAnywhereToContinue") : Sb ? Eb("respawnPage:respawning") : Aa(Eb("general:respawn"))), null !== Ua && (0, eb.jsx)(rU.c, {
                            text: Eb("controller:screensPressToContinue", {
                              button: rU.f
                            }),
                            glyph: Ua,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), ba && (0, eb.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: ba
                        })]
                      }), !Qb.current && (0, eb.jsxs)(eb.Fragment, {
                        children: [(0, eb.jsxs)("div", {
                          className: Tb()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !nb
                          }),
                          children: [Wb && (0, eb.jsx)(NU.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, WU.ab)((() => {
                                (0, mb.k)("inGameReplay");
                                const bb = (0, mU.b)(db);
                                Mb(bb)
                              }), "video_start")
                            },
                            disabled: !Sb || !ob,
                            touchPressOn: "pointerup",
                            children: Aa(Eb("respawnPage:playAgain"))
                          }), Hb && (0, eb.jsx)(NU.g, {
                            className: "RespawnPageButton",
                            onClick: Jb,
                            padDefaultFocus: !Wb,
                            padBack: "sessionBasedGame:stayInLobby" === pb,
                            disabled: !Sb || !ob,
                            touchPressOn: "pointerup",
                            children: Aa(Eb(pb))
                          }), !(0, GU.j)() && (0, eb.jsx)(NU.D, {
                            className: "RespawnPageButton",
                            onClick: dU.d,
                            disabled: !Sb || !ob,
                            touchPressOn: "pointerup",
                            children: Aa(Eb("respawnPage:exitGame"))
                          })]
                        }), nb && (0, eb.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, eb.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: Eb("respawnPage:orTry")
                          }), (0, eb.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: nb.map((bb => (0, eb.jsx)(hU.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: bb
                              },
                              disabled: !Sb || !ob,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, mb.k)("inGameReplay");
                                const ab = (0, mU.b)(bb);
                                Mb(ab)
                              }
                            }, bb)))
                          })]
                        })]
                      })]
                    })
                  }), (0, eb.jsx)("div", {
                    ref: gb,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, eb.jsx)("div", {
                  ref: wb,
                  className: "RespawnBottom",
                  children: (0, eb.jsx)(pU.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: wb
                    },
                    showing: aa,
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
    var tU = Ub(36030);
    const wU = [{
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
      sU = [{
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
      gU = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      CU = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      VU = (0, Ab.memo)((function() {
        const bb = (0, Ab.useRef)(null),
          ab = (0, Ab.useRef)(null);

        function Ub(Ub) {
          var Ab;
          let {
            BU: Mb,
            screenPos: Tb
          } = Ub;
          const Eb = bb.current;
          null === (Ab = ab.current) || void 0 === Ab || Ab.cancel(), Eb.classList.remove("HitmarkerCrit"), Tb ? (Eb.style.left = `${Tb.x}%`, Eb.style.top = `${Tb.y}%`) : (Eb.style.left = "50%", Eb.style.top = "50%"), Eb.style.rotate = 16 * (Math.random() - .5) + "deg", Mb && Eb.classList.add("HitmarkerCrit");
          const Yb = Eb.animate(Mb ? sU : wU, Mb ? CU : gU);
          ab.current = Yb, Yb.onfinish = () => {
            Eb.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Yb.f)("localGunHitmarker", (bb => {
          let {
            BU: ab
          } = bb;
          Ub({
            BU: ab
          })
        })), (0, Yb.f)("yourAttackHit", (bb => {
          let {
            BU: ab,
            screenPos: Ab
          } = bb;
          Ub({
            BU: ab,
            screenPos: mb.c.get("isTouchScreen") ? Ab : void 0
          })
        })), (0, Yb.f)("sendHitmarker", (bb => {
          let {
            BU: ab,
            screenPos: Ab
          } = bb;
          Ub({
            BU: ab,
            screenPos: Ab
          })
        })), (0, eb.jsxs)("div", {
          ref: bb,
          className: "Hitmarker",
          children: [(0, eb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, eb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, eb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, eb.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function OU() {
      const bb = (0, Ab.useRef)(!0);
      return (0, Yb.f)("localBlockMined", (() => {
        Ma.f.play("blockMined")
      })), (0, Yb.f)("yourAttackHit", (() => {
        Ma.f.play("hitLanded")
      })), (0, Yb.f)("localGunHitmarker", (() => {
        Ma.f.play("hitLanded")
      })), (0, Yb.f)("damagedByOtherPlayer", (() => {
        Ma.f.play("damageTaken")
      })), (0, fb.c)("localPlayerAliveSet", (ab => {
        !ab && bb.current && Ma.f.play("death"), bb.current = ab
      })), null
    }
    var cU = Ub(1812),
      JU = Ub(36042),
      nU = Ub.n(JU),
      SU = Ub(1929),
      bA = Ub(1915),
      aA = Ub(2989),
      UA = Ub(8922);
    const AA = qU.Zd ? 7e7 : 7e3,
      MA = nU()("#ffffff").alpha(.5).string();

    function TA(bb) {
      const ab = (0, aA.d)(bb);
      return void 0 !== ab && "Gun" === (0, UA.itemTypeOf)(ab)
    }

    function EA(bb) {
      if (!bb) return console.error(`Killfeed colour was ${bb}`), MA;
      try {
        return nU()(bb).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${bb} is not a colour`), MA
      }
    }
    const YA = (0, Ab.memo)((function() {
      const {
        t: bb
      } = (0, Ib.A)(), ab = (0, Ab.useRef)([]), Ub = (0, RU.d)();
      return (0, fb.c)("kill", (function(Ab) {
        var Mb, Tb;
        let {
          killer: Eb,
          victim: Yb,
          withItem: Bb,
          killstreak: eb
        } = Ab;
        const vb = ab.current;
        if (vb.length >= 3) {
          const bb = vb.shift();
          clearTimeout(bb.timeout)
        }
        const Lb = Pb.gameBridge.latest("hiddenPlayerNames"),
          Xb = {
            deadName: uU(Yb, bb),
            killerName: uU(Eb, bb),
            isFriend: {
              killer: (0, SU.g)(Eb.realName, Lb),
              dead: (0, SU.g)(Yb.realName, Lb)
            },
            withItem: Bb,
            wasHeadshot: !1,
            killstreak: eb,
            timeout: setTimeout((() => {
              vb.shift(), Ub()
            }), AA),
            reactId: `${null!==(Mb=Eb.id)&&void 0!==Mb?Mb:Eb.shownName}|${null!==(Tb=Yb.id)&&void 0!==Tb?Tb:Yb.shownName}|${Date.now()}`,
            killerBackground: EA(Eb.colour),
            deadBackground: EA(Yb.colour)
          };
        vb.push(Xb), Ub()
      })), (0, Ab.useEffect)((() => {
        const bb = ab.current;
        return () => {
          for (; bb.length > 0;) {
            const {
              timeout: ab
            } = bb.pop();
            clearTimeout(ab)
          }
        }
      }), []), (0, eb.jsx)("div", {
        className: "Killfeed",
        children: ab.current.map((bb => {
          let {
            deadName: ab,
            killerName: Ub,
            withItem: Ab,
            wasHeadshot: Mb,
            killstreak: Tb,
            killerBackground: Eb,
            deadBackground: Yb,
            reactId: Bb,
            isFriend: vb
          } = bb;
          return (0, eb.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Eb} calc(100% - 10rem), ${Yb} 100%)`
            },
            children: [Tb >= 2 ? (0, eb.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, qU.O)(Tb)
            }) : null, (0, eb.jsx)("div", {
              className: "KillfeedKillerName",
              children: Ub
            }), vb.killer && (0, eb.jsx)(bA.c, {}), (0, eb.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: TA(Ab) ? "7.5vmin" : "5vmin"
              },
              children: (0, eb.jsx)(cU.c, {
                itemName: Ab,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Mb ? (0, eb.jsx)(ub.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, eb.jsx)("div", {
              className: "KillfeedDeadName",
              children: ab
            }), vb.dead && (0, eb.jsx)(bA.c, {})]
          }, Bb)
        }))
      })
    }));
    var BA = Ub(36083),
      eA = Ub(1068),
      vA = Ub.n(eA),
      LA = Ub(3079),
      PA = Ub(36086),
      XA = Ub(1227);
    const jA = {},
      RA = (0, Ab.memo)((function() {
        const bb = (0, Ab.useRef)({}),
          [, ab] = (0, Ab.useReducer)((bb => bb + 1), 0);
        (0, Yb.f)("setDirectionArrow", (Ub => {
          let {
            id: Ab,
            position: Mb,
            style: Tb,
            text: Eb,
            nM: Yb
          } = Ub;
          const Bb = bb.current,
            eb = Tb || jA,
            vb = Eb,
            Lb = Bb[Ab];
          if (!Lb) return Bb[Ab] = {
            position: Mb,
            style: eb,
            text: vb,
            shouldShowDistance: Yb,
            JI: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void ab();
          const Pb = !vA()(Lb.style, eb) || !vA()(Lb.text, vb) || Lb.shouldShowDistance !== Yb;
          Lb.position = Mb, Lb.style = eb, Lb.text = vb, Lb.shouldShowDistance = Yb, Pb && ab()
        })), (0, Yb.f)("clearDirectionArrow", (Ub => {
          let {
            id: Ab
          } = Ub;
          const Mb = bb.current;
          if (null === Ab)
            for (const bb in Mb) delete Mb[bb];
          else delete Mb[Ab];
          ab()
        })), (0, Ab.useEffect)((() => {
          const ab = bb.current,
            Ub = (0, XA.l)((() => {
              ! function(bb) {
                const ab = Pb.gameBridge.lookup("localPos", null),
                  Ub = LA.c - kA,
                  Ab = (0, LA.i)() - kA;
                for (const Mb in bb) {
                  const Tb = bb[Mb];
                  if (!Tb.JI) continue;
                  const Eb = Pb.gameBridge.lookup("screenPos", Tb.position),
                    Yb = Eb.x - 50,
                    Bb = Eb.y - 50;
                  Eb.x === Tb.lastScreenX && Eb.y === Tb.lastScreenY || (Tb.lastScreenX = Eb.x, Tb.lastScreenY = Eb.y, Tb.JI.style.translate = `${Eb.x}vw ${Eb.y}vh`, Tb.chevronElement && (Tb.chevronElement.style.rotate = `${qU.d.fastATan2(Bb,Yb)}rad`));
                  const eb = Math.abs(Yb) < Ub && Math.abs(Bb) < Ab;
                  if (eb !== Tb.onScreen && (Tb.onScreen = eb, Tb.JI.classList.toggle("DirectionArrowOnScreen", eb)), Tb.shouldShowDistance && Tb.distanceElement) {
                    const bb = Tb.position[0] - ab[0],
                      Ub = Tb.position[1] - ab[1],
                      Ab = Tb.position[2] - ab[2],
                      Mb = Math.round(Math.sqrt(bb * bb + Ub * Ub + Ab * Ab));
                    (-1 === Tb.lastRenderedDist || (0, PA.d)(Mb, Tb.lastRenderedDist, Tb.lastDistUpdateTime)) && (Tb.distanceElement.textContent = `${Mb}m`, Tb.lastRenderedDist = Mb, Tb.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(ab)
            }));
          return () => {
            Ub();
            for (const bb in ab) delete ab[bb]
          }
        }), []);
        const Ub = bb.current;
        return (0, eb.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(Ub).map((bb => {
            var ab;
            let [Ab, Mb] = bb;
            const Tb = null !== (ab = (0, Zb.Vb)(Mb.style)) && void 0 !== ab ? ab : "#ffffff";
            return (0, eb.jsxs)("div", {
              ref: bb => {
                Ub[Ab] && (Ub[Ab].JI = bb)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Mb.style.fontSize,
                opacity: Mb.style.opacity
              },
              children: [(0, eb.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: bb => {
                  Ub[Ab] && (Ub[Ab].chevronElement = bb)
                },
                children: [(0, eb.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, eb.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, eb.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, eb.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, eb.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Tb
                    }
                  }), (0, eb.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Tb
                    }
                  })]
                })]
              }), (0, eb.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Tb,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Tb}`
                }
              }), Mb.text && (0, eb.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Tb,
                  fontWeight: Mb.style.fontWeight,
                  fontStyle: Mb.style.fontStyle
                },
                children: (0, eb.jsx)(Bb.c, {
                  text: Mb.text
                })
              }), Mb.shouldShowDistance && (0, eb.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: bb => {
                  Ub[Ab] && (Ub[Ab].distanceElement = bb)
                },
                style: {
                  color: Tb,
                  fontWeight: Mb.style.fontWeight,
                  fontStyle: Mb.style.fontStyle
                }
              })]
            }, Ab)
          }))
        })
      })),
      kA = .5;
    const yA = (0, Ab.memo)((function(bb) {
        let {
          isTouchScreen: ab
        } = bb;
        return (0, eb.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, eb.jsx)(xA, {}), ab && (0, eb.jsx)(bU, {})]
        })
      })),
      ZA = {
        readyForNext: 0,
        running: 1
      },
      DA = 50;

    function zA(bb) {
      console.assert(bb.state.current === ZA.readyForNext);
      const ab = bb.queue.current,
        Ub = bb.foreground.current;
      if (ab.length > 0 && Ub) {
        const {
          toFraction: Ab,
          toDuration: Mb
        } = ab.shift();
        bb.state.current = ZA.running, Ub.style.transition = `transform ${Math.max(Mb-DA,0)}ms linear`, Ub.classList.remove("Complete"), bb.timeout.current = setTimeout((() => {
          Ub.style.transform = `scaleX(${Ab})`, bb.timeout.current = setTimeout((() => {
            1 === Ab && Ub.classList.add("Complete"), bb.state.current = ZA.readyForNext, zA(bb)
          }), Math.max(Mb - DA, 0))
        }), DA)
      }
    }

    function xA() {
      const bb = (0, Ab.useRef)([]),
        ab = (0, Ab.useRef)(ZA.readyForNext),
        Ub = (0, Ab.useRef)(void 0),
        Mb = (0, Ab.useRef)(null),
        Tb = (0, Ab.useRef)({
          queue: bb,
          state: ab,
          timeout: Ub,
          foreground: Mb
        }),
        Eb = (0, Db.h)("showProgressBar");
      if ((0, Ab.useLayoutEffect)((() => (Eb && ab.current === ZA.readyForNext && zA(Tb.current), () => {
          ab.current = ZA.readyForNext, clearTimeout(Ub.current), Eb && (bb.current.length = 0)
        })), [Eb]), (0, Yb.f)("progressBarUpdate", (Ub => {
          let {
            toFraction: Ab,
            toDuration: Mb
          } = Ub;
          bb.current.push({
            toFraction: Ab,
            toDuration: Mb
          }), ab.current === ZA.readyForNext && zA(Tb.current)
        })), !Eb) return null;
      return (0, eb.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, eb.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Mb,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var iA = Ub(36090),
      fA = Ub(2294);
    const mA = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function pA(bb) {
      let {
        classes: ab,
        gone: Ub
      } = bb;
      const Ab = document.documentElement;
      Ab.classList.remove(...ab);
      for (const Mb of Ub) Mb.style.display = "block";
      return () => {
        Ab.classList.add(...ab);
        for (const bb of Ub) bb.style.display = ""
      }
    }

    function NA(bb) {
      const {
        isTouchScreen: ab
      } = (0, mb.n)(["isTouchScreen"]);
      (0, Ab.useLayoutEffect)((() => {
        if (!ab) return;
        const Ub = bb.current,
          Ab = document.querySelector(`.${iA.g}`),
          Mb = bb => {
            const ab = () => {
              const ab = bb.querySelector(fA.h),
                Ab = function(bb) {
                  const ab = document.documentElement;
                  return {
                    classes: La.J.map(Ra.C).filter((bb => ab.classList.contains(bb))),
                    gone: [...bb.querySelectorAll(`.TopRightTrayToggle.${fA.k}`)]
                  }
                }(bb);
              ab && function(bb, ab) {
                (0, fA.B)(bb, ab.classes.length > 0 || ab.gone.length > 0, (() => pA(ab)))
              }(ab, Ab);
              const Mb = `${Math.floor(function(bb,ab,Ub){const Ab=document.documentElement,Mb=Ab.classList.contains((0,Ra.G)("menu")),Tb=Ab.style.getPropertyValue((0,Ra.N)("menu"));if(!Mb&&""===Tb)return bb.getBoundingClientRect().left;const Eb=ab?(0,fA.n)(ab):()=>{},Yb=pA(Ub);Ab.classList.remove((0,Ra.G)("menu")),Ab.style.removeProperty((0,Ra.N)("menu"));const Bb=bb.getBoundingClientRect().left;return Yb(),Eb(),Mb&&Ab.classList.add((0,Ra.G)("menu")),""!==Tb&&Ab.style.setProperty((0,Ra.N)("menu"),Tb),Bb}(bb,ab,Ab)-Ub.getBoundingClientRect().left-4)}px`;
              Ub.style.getPropertyValue("--InGameHeaderMaxWidth") !== Mb && Ub.style.setProperty("--InGameHeaderMaxWidth", Mb)
            };
            ab();
            const Mb = new ResizeObserver(ab);
            Mb.observe(bb), Mb.observe(Ab), window.addEventListener("resize", ab);
            const Tb = () => mA.map((bb => document.documentElement.style.getPropertyValue(bb))).join();
            let Eb = Tb();
            const Yb = new MutationObserver((() => {
              const bb = Tb();
              bb !== Eb && (Eb = bb, ab())
            }));
            Yb.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Bb = (0, zb.n)(Ra.i, ab),
              eb = new MutationObserver(ab);
            return eb.observe(bb, {
              childList: !0,
              subtree: !0
            }), () => {
              Mb.disconnect(), Yb.disconnect(), eb.disconnect(), Bb(), window.removeEventListener("resize", ab);
              const Ub = bb.querySelector(fA.h);
              Ub && (0, fA.n)(Ub)
            }
          },
          Tb = () => Ab.querySelector(".TopRightIconsContainer"),
          Eb = Tb();
        let Yb;
        if (Eb) Yb = Mb(Eb);
        else {
          const bb = new MutationObserver((() => {
            const ab = Tb();
            ab && (bb.disconnect(), Yb = Mb(ab))
          }));
          bb.observe(Ab, {
            childList: !0,
            subtree: !0
          }), Yb = () => {
            bb.disconnect()
          }
        }
        return () => {
          Yb(), Ub.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [ab, bb])
    }
    var WA = Ub(3343),
      HA = Ub(3339),
      IA = Ub(1548),
      dA = Ub(1413),
      FA = Ub(1552),
      hA = Ub(1639),
      GA = Ub(1738),
      QA = Ub(1065),
      qA = Ub(4005),
      uA = Ub(1384),
      rA = Ub(1264);
    const KA = 2e4,
      oA = 6e5,
      lA = new Set;

    function tA() {
      const {
        gameEntrySource: bb,
        loadingOverlayVisible: ab
      } = (0, mb.n)(["gameEntrySource", "loadingOverlayVisible"]), Ub = (0, fb.g)("connectedGame", (bb => (0, qA.h)(bb) ? bb.lobbyName : null)), Mb = (0, fb.k)("localPlayerAlive"), Tb = (0, fb.g)("players", (bb => null !== bb.localId && void 0 !== bb.byId[bb.localId])), [Eb, Yb] = (0, Ab.useState)(null);
      return !ab && Mb && Tb && null !== Ub && Eb !== Ub && Yb(Ub), (0, Ab.useEffect)((() => {
        if (!(0, qA.i)(bb) || null === Eb || Eb !== Ub || lA.has(Eb)) return;
        const ab = setTimeout((() => {
          lA.add(Eb), async function(bb) {
            const ab = await QA.userContextManager.getCurrentUserContext();
            let Ub;
            try {
              Ub = (await dA.b.getWorldOwnerFriendOffer(ab)).owner
            } catch (Mb) {
              return void console.warn("Couldn't ask who owns this world", Mb)
            }
            if (!Ub || (0, qA.p)(Ub.name, Date.now())) return;
            const Ab = Ub;
            ! function(bb, ab) {
              const Ub = Date.now() + oA;
              let Ab = Date.now(),
                Mb = 0;
              const Tb = () => {
                const Eb = Date.now(),
                  Yb = Pb.gameBridge.latest("connectedGame");
                Yb.lobbyName !== bb || Eb > Ub || (null === Yb.websocketUrl ? Ab = 1 / 0 : Ab === 1 / 0 && !mb.c.get("loadingOverlayVisible") && Pb.gameBridge.latest("localPlayerAlive") && (Ab = Eb + KA), Mb = Eb < Ab || !Pb.gameBridge.latest("localPlayerAlive") || mb.c.get("isUiHidden") || mb.c.get("isUiHiddenByCamera") || (0, hA.isTypingInInput)() || mb.c.get("loadingOverlayVisible") || (0, IA.o)() || (0, WA.h)() || (0, rA.o)() ? 0 : Mb + 1, Mb >= 2 ? ab() : setTimeout(Tb, 500))
              };
              Tb()
            }(bb, (() => {
              (0, qA.f)(FA.d.getSocialState().friends, Ab.name) || ((0, qA.m)(Ab.name, Date.now()), GA.f.showWorldOwnerOffer(Ab), (0, uA.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Eb).catch((bb => {
            console.error("Failed to offer the world's owner as a friend", bb)
          }))
        }), KA);
        return () => {
          clearTimeout(ab)
        }
      }), [bb, Eb, Ub]), null
    }
    var wA = Ub(1797);
    const sA = (0, Ab.memo)((function(bb) {
        let {
          durationMs: ab,
          endsAtMs: Ub
        } = bb;
        const [, Mb] = (0, Ab.useReducer)((bb => bb + 1), 0), Tb = null === Ub ? ab : Math.max(Ub - Date.now(), 0);
        return (0, Ab.useEffect)((() => {
          if (null === Ub || Tb <= 0) return;
          const bb = setTimeout(Mb, Tb - 1e3 * (Math.ceil(Tb / 1e3) - 1));
          return () => {
            clearTimeout(bb)
          }
        })), (0, eb.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, qU.ab)(Tb)
        })
      })),
      gA = (0, Ab.memo)((function() {
        const bb = (0, fb.k)("localEffects");
        return (0, eb.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(bb).map((bb => {
            let [ab, {
              icon: Ub,
              displayName: Ab,
              durationMs: Mb,
              endsAtMs: Tb,
              level: Eb
            }] = bb;
            return (0, eb.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, eb.jsx)(wA.e, {
                icon: Ub,
                className: "EffectInfoIcon"
              }), (0, eb.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Mb ? "0" : "1rem"
                },
                children: [(0, eb.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, eb.jsx)(Bb.c, {
                    text: null !== Ab && void 0 !== Ab ? Ab : ab,
                    className: "EffectInfoName SmallTextBold"
                  }), Eb > 1 && (0, eb.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, qU.O)(Eb)
                  })]
                }), null !== Mb && (0, eb.jsx)(sA, {
                  durationMs: Mb,
                  endsAtMs: Tb
                })]
              })]
            }, ab)
          }))
        })
      }));
    var CA = Ub(36093),
      VA = Ub(36231),
      OA = Ub(205),
      cA = Ub(1260),
      JA = Ub(2543),
      nA = Ub(2646);

    function SA(bb, ab) {
      (0, Ab.useLayoutEffect)((() => {
        let ab, Ub;
        const Ab = requestAnimationFrame((() => {
          Ub = setTimeout((() => {
            Ub = void 0;
            const Ab = bb();
            ab = "function" === typeof Ab ? Ab : void 0
          }), 0)
        }));
        return () => {
          var bb;
          cancelAnimationFrame(Ab), clearTimeout(Ub), null === (bb = ab) || void 0 === bb || bb()
        }
      }), ab)
    }
    const bM = [5, 5, 5],
      aM = [7, 4, 4, 4];

    function UM(bb) {
      return bb.reduce(((bb, ab) => bb + ab), 0)
    }

    function AM(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.getContext("2d");
      if (!Tb) return null;
      const Eb = ab.fontFamily,
        Yb = ab.fontWeight;
      return bb.width = Ub, bb.height = Ab, Tb.fillStyle = ab.color, Tb.textAlign = "center", Tb.textBaseline = "middle", Tb.font = `${Yb} ${Mb}px ${Eb}`, Tb
    }
    const MM = (0, Ab.memo)((function(bb) {
      let {
        show: ab
      } = bb;
      const Ub = (0, Ab.useRef)(null),
        Mb = (0, Ab.useRef)(null),
        Tb = (0, Ab.useRef)(null),
        Eb = (0, jb.m)();
      return (0, Ab.useEffect)((() => Eb.whenShown((() => {
        let bb = 0,
          ab = 0,
          Ub = performance.now(),
          Ab = 0;
        const Eb = (0, XA.l)((() => {
          var Eb, Yb, Bb;
          bb++, ab++;
          const eb = performance.now();
          if (eb - Ub < 1e3) return;
          const vb = Math.round(bb / (eb - Ub) * 1e3);
          if (Mb.current = vb, null === (Eb = Tb.current) || void 0 === Eb || Eb.call(Tb, vb), bb = 0, Ub = eb, vb >= 55) return void(Ab = 0);
          if (Ab += 1, Ab < 15) return;
          const Lb = null !== (Yb = ib.f.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Yb ? Yb : 0,
            [Xb, jb] = xb.e.get("minChunkAddDist");
          if (function(bb, ab) {
              const Ub = Pb.gameBridge.lookup("iZ", null);
              return null !== Ub && (Ub.horizontal > bb || Ub.vertical > ab)
            }(Xb, jb) && (null !== (Bb = ib.f.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Bb ? Bb : 0) + 432e5 < Date.now() && Lb < 3) {
            ib.f.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            cA.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((bb => {
              "notificationTornDown" !== bb && (bb ? (Pb.gameBridge.send("setChunkAddDistance", {
                horizontal: Xb,
                vertical: jb
              }), ib.f.setItem("chunkHorizAddDist", Xb), ib.f.setItem("chunkVertAddDist", jb), zb.m.IR("updatedChunkLoadDist"), ib.f.setItem("decreaseLoadDistPromptDeniedCount", 0)) : ib.f.setItem("decreaseLoadDistPromptDeniedCount", Lb + 1))
            }))
          }
        }));
        let Yb = performance.now();
        ab = 0;
        let Bb = null,
          eb = !document.hidden;

        function vb() {
          const bb = performance.now() - Yb,
            Ub = 1e3 * ab / bb;
          eb && (null === Bb && (Bb = Ub), JA.d.setFps(Ub, Bb)), ab = 0, Yb = performance.now()
        }
        let Lb = setInterval(vb, nA.e);

        function Xb() {
          const bb = eb;
          eb = !document.hidden, !bb && eb && (ab = 0, Yb = performance.now(), clearInterval(Lb), Lb = setInterval(vb, nA.e))
        }
        return document.addEventListener("visibilitychange", Xb), () => {
          Eb(), document.removeEventListener("visibilitychange", Xb), clearInterval(Lb)
        }
      }))), [Eb]), SA((() => {
        var bb;
        if (!ab || Tb.current) return;
        const Ab = Ub.current,
          Eb = window.getComputedStyle(Ab.parentElement),
          Yb = null !== (bb = window.devicePixelRatio) && void 0 !== bb ? bb : 1,
          Bb = parseFloat(Eb.fontSize) * Yb,
          eb = Math.round(3 * Bb),
          vb = Math.round(Bb),
          Lb = AM(Ab, Eb, eb, vb, Bb);
        if (!Lb) return;
        const Pb = bb => {
          Lb.clearRect(0, 0, Ab.width, Ab.height), Lb.fillText(bb.toString(), Ab.width / 2, Ab.height / 2)
        };
        Tb.current = Pb, null !== Mb.current && Pb(Mb.current)
      }), [ab]), (0, eb.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: ab ? "flex" : "none"
        },
        children: [(0, eb.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, eb.jsx)("canvas", {
          className: "FpsCanvas",
          ref: Ub,
          width: 48,
          height: 16
        })]
      })
    }));

    function TM(bb) {
      return Math.sign(bb) * Math.round(100 * Math.abs(bb))
    }

    function EM(bb) {
      let {
        getCoordinates: ab,
        showChunkCoords: Ub,
        columns: Mb
      } = bb;
      const Tb = (0, Ab.useRef)(null);
      return SA((() => {
        var bb;
        const Ab = Tb.current,
          Eb = window.getComputedStyle(Ab.parentElement),
          Yb = null !== (bb = window.devicePixelRatio) && void 0 !== bb ? bb : 1,
          Bb = parseFloat(Eb.fontSize) * Yb,
          eb = Math.round(Bb * UM(Mb)),
          vb = Math.round(Bb),
          Lb = AM(Ab, Eb, eb, vb, Bb);
        if (!Lb) return;
        let Xb = !0,
          jb = 0,
          Rb = 0,
          kb = 0,
          yb = 0,
          Zb = 0,
          Db = 0;
        const zb = () => {
          Xb = !0
        };
        document.fonts.load(Lb.font).then(zb, zb);
        const xb = () => {
          AM(Ab, Eb, eb, vb, Bb), zb()
        };
        Ab.addEventListener("contextrestored", xb);
        const ib = (0, XA.t)((() => {
          var bb, Tb, Eb, Yb, eb, vb;
          const [zb, xb, ib] = ab(), fb = TM(zb), mb = TM(xb), pb = TM(ib);
          let Nb = null;
          if (Ub) {
            const bb = Pb.gameBridge.lookup("localPos", null);
            Nb = (0, ba.bb)(bb[0], bb[1], bb[2])
          }
          const Wb = null !== (bb = null === (Tb = Nb) || void 0 === Tb ? void 0 : Tb[0]) && void 0 !== bb ? bb : 0,
            Hb = null !== (Eb = null === (Yb = Nb) || void 0 === Yb ? void 0 : Yb[1]) && void 0 !== Eb ? Eb : 0,
            Ib = null !== (eb = null === (vb = Nb) || void 0 === vb ? void 0 : vb[2]) && void 0 !== eb ? eb : 0;
          if (!Xb && fb === jb && mb === Rb && pb === kb && Wb === yb && Hb === Zb && Ib === Db) return;
          Xb = !1, jb = fb, Rb = mb, kb = pb, yb = Wb, Zb = Hb, Db = Ib;
          const db = [(fb / 100).toFixed(2), (mb / 100).toFixed(2), (pb / 100).toFixed(2)];
          Nb && db.unshift(`${Wb} ${Hb} ${Ib}`), Lb.clearRect(0, 0, Ab.width, Ab.height);
          const Fb = Ab.height / 2;
          let hb = 0;
          for (let ab = 0; ab < db.length; ab++) {
            const bb = Bb * Mb[ab];
            Lb.fillText(db[ab], hb + bb / 2, Fb, bb), hb += bb
          }
        }));
        return () => {
          ib(), Ab.removeEventListener("contextrestored", xb)
        }
      }), [ab, Ub, Mb]), (0, eb.jsx)("div", {
        className: "CoordinateUI",
        children: (0, eb.jsx)("canvas", {
          ref: Tb,
          className: "CoordinateCanvas",
          width: 16 * UM(Mb),
          height: 16
        })
      })
    }
    const YM = (0, Ab.memo)((function() {
        const bb = (0, Ab.useCallback)((() => {
          const bb = Pb.gameBridge.lookup("localPos", null);
          return [bb[0], bb[1], bb[2]]
        }), []);
        return (0, eb.jsx)(EM, {
          getCoordinates: bb,
          showChunkCoords: !1,
          columns: bM
        })
      })),
      BM = (0, Ab.memo)((function() {
        const bb = (0, Ab.useCallback)((() => {
          const bb = Pb.gameBridge.lookup("localPos", null),
            ab = OA.c.Mj;
          let Ub = bb[0] % ab,
            Ab = bb[1] % ab,
            Mb = bb[2] % ab;
          return Ub < 0 && (Ub += ab), Ab < 0 && (Ab += ab), Mb < 0 && (Mb += ab), [Ub, Ab, Mb]
        }), []);
        return (0, eb.jsx)(EM, {
          getCoordinates: bb,
          showChunkCoords: !0,
          columns: aM
        })
      }));
    var eM = Ub(1956),
      vM = Ub(1254),
      LM = Ub(950),
      PM = Ub(1162),
      XM = Ub(101),
      jM = Ub(36104),
      RM = Ub(1358),
      kM = Ub(2875);
    const yM = (0, Ab.memo)((function() {
      const bb = (0, Db.h)("maxAuraLevel");
      return 0 === bb ? null : (0, eb.jsx)(ZM, {
        maxLevel: bb
      })
    }));

    function ZM(bb) {
      let {
        maxLevel: ab
      } = bb;
      const Ub = (0, Db.h)("auraPerLevel"),
        [Mb, Tb] = (0, Ab.useState)((() => {
          var bb;
          return null !== (bb = Pb.gameBridge.latest("aura")) && void 0 !== bb ? bb : void 0
        })),
        [Eb, Yb] = (0, Ab.useState)((() => zb(Mb))),
        [Bb, vb] = (0, Ab.useReducer)((bb => bb + 1), 0),
        Lb = (0, Ab.useRef)(null),
        Xb = (0, Ab.useRef)([]),
        jb = (0, Ab.useRef)({
          width: 0,
          level: 0
        }),
        Rb = (0, Ab.useRef)(null),
        kb = (0, Ab.useRef)(null);

      function Zb() {
        if (null !== Rb.current) return;
        if (0 === Xb.current.length) return;
        const {
          width: bb,
          level: ab
        } = Xb.current.shift();
        let Ub;
        if (ab !== jb.current.level && ab > jb.current.level !== bb > jb.current.width) {
          const Ab = ab > jb.current.level;
          Ub = Ab ? bb : 100 - bb, Lb.current.style.transition = "none", Lb.current.style.width = Ab ? "0%" : "100%", Lb.current.offsetWidth
        } else Ub = Math.abs(bb - jb.current.width);
        const Ab = 100 * Ub / 20;
        Lb.current.style.transition = `width ${Ab}ms linear`, Yb(bb), jb.current = {
          width: bb,
          level: ab
        }, Xb.current.length > 0 && (Rb.current = setTimeout((() => {
          Rb.current = null, Zb()
        }), Ab))
      }

      function zb(bb) {
        return Math.floor(bb / Ub) === ab ? 100 : bb % Ub / Ub * 100
      }
      return (0, Ab.useEffect)((() => () => {
        clearTimeout(Rb.current), clearTimeout(kb.current), Rb.current = null, kb.current = null
      }), []), (0, fb.c)("aura", (bb => {
        if (kb.current && clearTimeout(kb.current), null === bb) return clearTimeout(Rb.current), kb.current = null, Rb.current = null, Xb.current = [], jb.current = {
          width: 0,
          level: 0
        }, Tb(void 0), void Yb(0);
        kb.current = setTimeout((() => {
          const ab = Math.floor(Mb / Ub),
            Ab = Math.floor(bb / Ub),
            Eb = zb(bb);
          bb > Mb && jM.c.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Ab > ab ? (Ab % 5 === 0 && jM.c.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), vb(), Xb.current.push({
            width: 100,
            level: ab
          })) : Ab < ab && Xb.current.push({
            width: 0,
            level: ab
          }), bb === Mb && Ab === ab || Xb.current.push({
            width: Eb,
            level: Ab
          }), Tb(bb), Zb()
        }), 50)
      })), (0, yb.h)(), (0, eb.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, eb.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, eb.jsx)(RM.d, {
            showSignal: Bb,
            particleElement: (0, eb.jsx)("img", {
              src: (0, kM.g)("glint"),
              alt: ""
            })
          }), (0, eb.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, kM.g)("glint"),
            alt: "aura"
          }), (0, eb.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Mb && void 0 !== Mb ? Mb : 0) / Ub)
          })]
        }), (0, eb.jsx)("div", {
          className: "AuraBar",
          children: (0, eb.jsx)("div", {
            ref: Lb,
            className: "AuraBarBackground",
            style: {
              width: `${Eb}%`
            }
          })
        })]
      })
    }
    var DM = Ub(2372);

    function zM(bb) {
      bb.timed && (bb.endedAnimation = bb.timed.animation, bb.timed = null)
    }
    const xM = (0, Ab.memo)((function() {
      const bb = (0, Ab.useRef)(null),
        ab = (0, Ab.useRef)(null),
        Ub = (0, Ab.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Yb.f)("middleScreenBarInitiate", (bb => {
        var Ab;
        let {
          duration: Mb,
          vA: Tb,
          horizBarRemOffset: Eb
        } = bb;
        const Yb = Ub.current;
        zM(Yb);
        const Bb = ab.current;
        if (!(Mb >= 0) || !Bb) return;
        null === (Ab = Yb.endedAnimation) || void 0 === Ab || Ab.cancel(), Yb.endedAnimation = null;
        const eb = Bb.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Mb,
          fill: "forwards"
        });
        Yb.timed = {
          vA: Tb,
          horizBarRemOffset: Eb,
          animation: eb
        }
      })), (0, Yb.f)("middleScreenBarRemove", (() => {
        zM(Ub.current)
      })), (0, Ab.useEffect)((() => {
        const Ab = Ub.current;
        let Mb = Number.NaN,
          Tb = Number.NaN,
          Eb = Number.NaN;
        return (0, XA.j)((() => {
          var Ub, Yb, Bb, eb;
          const vb = bb.current,
            Lb = ab.current;
          if (!vb || !Lb) return;
          null !== (Ub = Ab.timed) && void 0 !== Ub && Ub.vA && "finished" === Ab.timed.animation.playState && zM(Ab), null === (Yb = Ab.endedAnimation) || void 0 === Yb || Yb.cancel(), Ab.endedAnimation = null;
          let Xb = Ab.timed ? 1 : 0;
          if (!Ab.timed) {
            const bb = Pb.gameBridge.lookup("momentumFrac", null);
            Xb = bb > 0 ? 1 : 0, bb !== Eb && (Eb = bb, Lb.style.transform = `scaleX(${bb})`)
          }
          const jb = null !== (Bb = null === (eb = Ab.timed) || void 0 === eb ? void 0 : eb.horizBarRemOffset) && void 0 !== Bb ? Bb : 0;
          jb === Mb && Xb === Tb || (Mb = jb, Tb = Xb, vb.style.transform = `translateX(calc(-50% + ${jb}rem)) scaleX(${Xb})`)
        }))
      }), []), (0, eb.jsx)("div", {
        className: "MiddleScreenBar",
        ref: bb,
        children: (0, eb.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: ab
        })
      })
    }));
    var iM = Ub(4357),
      fM = Ub(2525);

    function mM() {
      const {
        t: bb
      } = (0, Ib.A)(), ab = (0, Yb.i)("serverUpdating", null), Ub = (0, fM.b)(250, null !== ab);
      return null === ab || Ub - ab > 3e4 ? null : (0, eb.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, eb.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: bb("updateWaiting:updatingIn", {
            countdown: (0, iM.o)(ab - Ub)
          })
        }), (0, eb.jsx)("div", {
          children: bb("updateWaiting:bringYouBack")
        })]
      })
    }
    var pM = Ub(36256),
      NM = Ub(1874);
    const WM = [{
        translationKey: "general:interact"
      }],
      HM = (0, Ab.memo)((function() {
        const bb = (0, Db.h)("crosshairText"),
          {
            interactPrompt: ab,
            blockText: Ub,
            neededTool: Mb
          } = (0, fb.k)("crosshairTarget"),
          {
            isTouchScreen: Tb
          } = (0, mb.n)(["isTouchScreen"]),
          Eb = (0, Nb.o)(),
          vb = (0, Hb.b)("alt-fire");
        (0, Ab.useEffect)((() => {
          Pb.gameBridge.send("setCrosshairInteractPrompt", !Tb || Eb ? "key" : "touch")
        }), [Tb, Eb]);
        const [Lb, Xb] = (0, Ab.useReducer)((bb => bb + 1), 0);
        (0, Yb.f)("customBindingsChanged", Xb);
        var jb;
        if (null !== ab && (Eb && null !== vb || !Tb && null !== (0, NM.s)("alt-fire"))) return (0, eb.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, eb.jsx)(pb.b, {
            noaAction: "alt-fire"
          }), (0, eb.jsx)(Bb.c, {
            text: null !== (jb = ab.label) && void 0 !== jb ? jb : WM
          })]
        });
        let Rb = null;
        return null !== Ub ? Rb = Ub : null !== bb && "" !== bb ? Rb = bb : null !== Mb && (Rb = [{
          icon: Mb,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Rb ? (0, eb.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, eb.jsx)(Bb.c, {
            text: Rb
          })
        }) : null
      }));
    var IM = Ub(2381);
    const dM = (0, Ab.memo)((function() {
      var bb;
      const {
        interactPrompt: ab
      } = (0, fb.k)("crosshairTarget"), {
        openInGameMenuName: Ub,
        openEverythingMenuName: Ab
      } = (0, mb.n)(["openInGameMenuName", "openEverythingMenuName"]), Mb = (0, Yb.i)("aimingOverlay", "none"), Tb = (0, Vb.j)(), Eb = (0, IM.d)();
      return null === ab || null !== Ub || null !== Ab || "sniper" === Mb || Tb || Eb ? null : (0, eb.jsx)(FM, {
        label: null !== (bb = ab.label) && void 0 !== bb ? bb : WM
      })
    }));

    function FM(bb) {
      let {
        label: ab
      } = bb;
      const Ub = Ha(Jb.b.Interact, !1);
      return (0, Ab.useEffect)((() => (zb.m.IR(Ra.t), () => {
        zb.m.IR(Ra.t)
      })), []), (0, eb.jsx)("div", {
        ref: Ub,
        className: "TouchInteractHit",
        children: (0, eb.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, eb.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, eb.jsx)(ub.e, {
              name: "hand-back-point-up"
            })
          }), (0, eb.jsx)(Bb.c, {
            text: ab
          })]
        })
      })
    }
    var hM = Ub(4455),
      GM = Ub(4516);
    const QM = (0, Ab.forwardRef)((function(bb, ab) {
        let {
          text: Ub,
          className: Ab,
          children: Mb
        } = bb;
        return Ub.hasText ? (0, eb.jsx)("div", {
          ref: ab,
          className: Tb()("HudTextPanel", Ab, {
            NoBackground: !Ub.showBackground
          }),
          children: null !== Mb && void 0 !== Mb ? Mb : (0, eb.jsx)(Bb.c, {
            text: Ub.content
          })
        }) : null
      })),
      qM = (0, Ab.memo)((function() {
        const bb = (0, Db.l)("middleTextTop"),
          [ab, Ub] = (0, Ab.useState)(null),
          Mb = (0, iA.j)(ab);
        return bb.hasText ? (0, eb.jsx)("div", {
          className: Tb()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Mb
          }),
          children: (0, eb.jsx)(QM, {
            ref: Ub,
            className: "MiddleTextTop",
            text: bb
          })
        }) : null
      })),
      uM = (0, Ab.memo)((function() {
        const bb = (0, Db.e)();
        return (0, eb.jsx)(eb.Fragment, {
          children: bb.map(((bb, ab) => (0, eb.jsx)(QM, {
            className: "HeaderChip",
            text: bb
          }, ab)))
        })
      }));
    var rM = Ub(3295),
      KM = Ub(4284);
    const oM = (0, Ab.memo)((function() {
      const {
        t: bb
      } = (0, Ib.A)(), [ab, Ub] = (0, Ab.useState)(!1), Mb = (0, Ab.useRef)(!1), Tb = function(bb) {
        let {
          gameNameWithVariation: ab,
          lobbyName: Ub
        } = bb;
        if ((0, LM.l)(ab)) return lM;
        if ((0, PM.M)(Ub)) return tM;
        return null
      }((0, fb.k)("connectedGame"));
      if (!Tb || ab) return null;
      const Eb = KM.d[Tb.target];
      return (0, eb.jsx)(qb.g, {
        tooltipInner: (0, eb.jsx)("div", {
          children: bb(Eb.reportButtonTooltip)
        }),
        children: (0, eb.jsx)("div", {
          children: (0, eb.jsx)(NU.I, {
            onClick: () => {
              Mb.current || (Mb.current = !0, (0, KM.h)(Tb.reportPolicyIds, Eb).then((bb => {
                null !== bb && void 0 !== bb && bb.selectedPolicyId && (Pb.gameBridge.send("reportLobbyOrGame", {
                  target: Tb.target,
                  OT: bb.selectedPolicyId,
                  details: bb.cT
                }), Ub(!0))
              })).finally((() => {
                Mb.current = !1
              })))
            }
          })
        })
      })
    }));
    const lM = {
        target: "customGame",
        reportPolicyIds: rM.c
      },
      tM = {
        target: "lobby",
        reportPolicyIds: rM.f
      };
    var wM = Ub(8352),
      sM = Ub(36271),
      gM = Ub(36277),
      CM = Ub(36283),
      VM = Ub(36291),
      OM = Ub(36321);

    function cM(bb) {
      return bb instanceof Error && JM.has(bb.message) ? bb.message : void 0
    }
    const JM = new Set([OM.c.saveBusy.text, OM.c.saveClosed.text, OM.c.cropBusy.text]);
    let nM = !1;
    async function SM(bb, ab) {
      var Ub, Ab;
      const {
        files: Mb
      } = ab, Tb = Mb.replayKey();
      if (null === Tb) return "none";
      if (nM) throw new Error(OM.c.saveBusy.text);
      const Eb = null !== (Ub = null === (Ab = Mb.saveRefusal) || void 0 === Ab ? void 0 : Ab.call(Mb)) && void 0 !== Ub ? Ub : null;
      if (null !== Eb) throw new Error(Eb);
      nM = !0;
      try {
        return await async function(bb, ab, Ub) {
          const {
            files: Ab
          } = ab, Mb = () => Ab.replayKey() === Ub, Tb = (bb, ab) => {
            Mb() && Ab.markSaved(bb, ab)
          };
          let Eb = null;
          if (ab.pickerSupported()) {
            try {
              if (Eb = await ab.chooseFile(bb ? null : Ab.fileHandle()), null === Eb) return "xU"
            } catch (Bb) {
              ab.onFallback(Bb)
            }
            if (!Mb()) throw new Error(OM.c.saveClosed.text)
          }
          const Yb = await Ab.encode();
          if (null === Yb) {
            if (null !== Eb) throw new Error(OM.c.saveClosed.text);
            return "none"
          }
          if (null !== Eb) try {
            return await ab.write(Eb, Yb), Tb(Eb), "written"
          } catch (Bb) {
            ab.onFallback(Bb)
          }
          return Tb(null, ab.download(Yb)), "downloaded"
        }(bb, ab, Tb)
      } finally {
        nM = !1
      }
    }
    var bT = Ub(4225),
      aT = Ub(75);
    const UT = [1, 2, 4, 8, 16, 32, 64];

    function AT(bb, ab) {
      return Math.max(0, Math.min(bb, ab))
    }

    function MT(bb, ab, Ub) {
      return Ub <= ab ? 0 : (bb - ab) / (Ub - ab) * 100
    }

    function TT(bb, ab, Ub) {
      const Ab = Ub - ab;
      return Math.round(ab + bb / 100 * Ab)
    }

    function ET(bb, ab) {
      const Ub = Math.floor(bb / ab / 60),
        Ab = Math.floor(bb / ab % 60),
        Mb = bb % ab;
      return `${Ub.toString().padStart(2,"0")}:${Ab.toString().padStart(2,"0")}:${Mb.toString().padStart(2,"0")}`
    }

    function YT(bb) {
      return Number.isInteger(bb) || UT.includes(bb) ? `${Math.round(bb)}\xd7` : `${bb.toFixed(1)}\xd7`
    }

    function BT(bb, ab) {
      const Ub = UT.indexOf(bb);
      if (-1 !== Ub) return "in" === ab ? UT[Math.min(Ub + 1, UT.length - 1)] : UT[Math.max(Ub - 1, 0)];
      if ("in" === ab) {
        for (const ab of UT)
          if (ab >= bb) return ab;
        return bb
      }
      for (let Ab = UT.length - 1; Ab >= 0; Ab--)
        if (UT[Ab] <= bb) return UT[Ab];
      return UT[0]
    }

    function eT(bb, ab) {
      const Ub = ab.getBoundingClientRect();
      if (Ub.width <= 0) return 0;
      const Ab = (bb - Ub.left) / Ub.width * 100;
      return Math.max(0, Math.min(100, Ab))
    }

    function vT(bb, ab) {
      return ab <= 0 ? 0 : bb / ab * 100
    }

    function LT(bb, ab, Ub) {
      const Ab = [];
      let Mb = Math.ceil(bb / Ub) * Ub;
      for (; Mb <= ab;) Ab.push(Mb), Mb += Ub;
      return Ab
    }
    var PT = Ub(36327);
    const XT = [{
        label: "Linear",
        easing: PT.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: PT.d
      }, {
        label: "Ease Out",
        easing: PT.g
      }, {
        label: "Ease In Out",
        easing: PT.b
      }],
      jT = 200,
      RT = 150;

    function kT(bb) {
      const ab = bb => Number(bb.toFixed(3)).toString();
      return `cubic-bezier(${ab(bb[0])}, ${ab(bb[1])}, ${ab(bb[2])}, ${ab(bb[3])})`
    }

    function yT(bb, ab) {
      return {
        cx: 25 + bb * RT,
        cy: 25 + (1 - ab) * RT
      }
    }

    function ZT(bb, ab, Ub) {
      const Ab = bb - Ub.left,
        Mb = ab - Ub.top;
      return {
        x: qU.d.clamp((Ab - 25) / RT, 0, 1),
        y: qU.d.clamp(1 - (Mb - 25) / RT, -1, 2)
      }
    }

    function DT(bb, ab, Ub, Ab, Mb) {
      return {
        x: (0, PT.s)(bb, Ub, Mb),
        y: (0, PT.s)(ab, Ab, Mb)
      }
    }
    const zT = (0, Ab.memo)((function(bb) {
      let {
        value: ab,
        onChange: Ub
      } = bb;
      const Mb = (0, Ab.useRef)(null),
        Tb = (0, Ab.useRef)(null),
        [Eb, Yb] = (0, Ab.useState)(null),
        Bb = (0, Ab.useCallback)((() => {
          const bb = Mb.current;
          if (!bb) return;
          const Ub = bb.getContext("2d");
          if (!Ub) return;
          const Ab = window.devicePixelRatio || 1;
          bb.width = jT * Ab, bb.height = jT * Ab, Ub.setTransform(Ab, 0, 0, Ab, 0, 0), Ub.clearRect(0, 0, jT, jT), Ub.fillStyle = "rgba(38, 52, 93, 0.85)", Ub.fillRect(0, 0, jT, jT), Ub.beginPath();
          const Tb = yT(0, 0),
            Yb = yT(1, 1);
          Ub.moveTo(Tb.cx, Tb.cy), Ub.lineTo(Yb.cx, Yb.cy), Ub.strokeStyle = "rgba(164, 164, 164, 0.35)", Ub.setLineDash([3, 3]), Ub.stroke(), Ub.setLineDash([]);
          const [Bb, eb, vb, Lb] = ab, Pb = yT(Bb, eb), Xb = yT(vb, Lb);
          Ub.strokeStyle = "rgba(252, 211, 115, 0.55)", Ub.lineWidth = 1.5, Ub.beginPath(), Ub.moveTo(Tb.cx, Tb.cy), Ub.lineTo(Pb.cx, Pb.cy), Ub.moveTo(Yb.cx, Yb.cy), Ub.lineTo(Xb.cx, Xb.cy), Ub.stroke(), Ub.strokeStyle = "#fcd373", Ub.lineWidth = 2, Ub.beginPath();
          for (let ab = 0; ab <= 50; ab++) {
            const bb = DT(Bb, eb, vb, Lb, ab / 50),
              Ab = yT(bb.x, bb.y);
            0 === ab ? Ub.moveTo(Ab.cx, Ab.cy) : Ub.lineTo(Ab.cx, Ab.cy)
          }
          Ub.stroke();
          const jb = (bb, ab, Ab) => {
            Ub.beginPath(), Ub.arc(bb, ab, Ab ? 6 : 5, 0, 2 * Math.PI), Ub.fillStyle = Ab ? "#ffb914" : "#fcd373", Ub.fill(), Ub.strokeStyle = "#1a1f2e", Ub.lineWidth = 1.5, Ub.stroke()
          };
          jb(Pb.cx, Pb.cy, "p1" === Eb), jb(Xb.cx, Xb.cy, "p2" === Eb)
        }), [Eb, ab]);
      (0, Ab.useEffect)((() => {
        Bb()
      }), [Bb]);
      const vb = (0, Ab.useCallback)(((bb, Ab) => {
          const Eb = Mb.current,
            Yb = Tb.current;
          if (!Eb || !Yb) return;
          const Bb = Eb.getBoundingClientRect(),
            {
              x: eb,
              y: vb
            } = ZT(bb, Ab, Bb);
          Ub("p1" === Yb ? [eb, vb, ab[2], ab[3]] : [ab[0], ab[1], eb, vb])
        }), [Ub, ab]),
        Lb = (0, Ab.useCallback)((bb => {
          const Ub = Mb.current;
          if (!Ub) return;
          const Ab = Ub.getBoundingClientRect();
          let {
            x: Eb,
            y: Bb
          } = ZT(bb.clientX, bb.clientY, Ab);
          Eb = qU.d.clamp(Eb, 0, 1), Bb = qU.d.clamp(Bb, 0, 1);
          const [eb, Lb, Pb, Xb] = ab.map((bb => qU.d.clamp(bb, 0, 1))), jb = Math.hypot(Eb - eb, Bb - Lb), Rb = Math.hypot(Eb - Pb, Bb - Xb), kb = jb <= Rb ? "p1" : "p2";
          ("p1" === kb ? jb : Rb) > .12 || (Tb.current = kb, Yb(kb), Ub.setPointerCapture(bb.pointerId), vb(bb.clientX, bb.clientY))
        }), [vb, ab]),
        Pb = (0, Ab.useCallback)((bb => {
          Tb.current && vb(bb.clientX, bb.clientY)
        }), [vb]),
        Xb = (0, Ab.useCallback)((bb => {
          Tb.current = null, Yb(null), bb.currentTarget.hasPointerCapture(bb.pointerId) && bb.currentTarget.releasePointerCapture(bb.pointerId)
        }), []);
      return (0, eb.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, eb.jsx)("canvas", {
          ref: Mb,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: jT,
            height: jT
          },
          onPointerDown: Lb,
          onPointerMove: Pb,
          onPointerUp: Xb,
          onPointerCancel: Xb
        }), (0, eb.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: kT(ab)
        })]
      })
    }));
    var xT = Ub(1597),
      iT = Ub(1578);
    const fT = 12;

    function mT(bb) {
      return {
        left: bb.left + bb.width / 2,
        top: bb.top - 8
      }
    }

    function pT(bb, ab) {
      const [Ub, Mb] = (0, Ab.useState)(null);
      return (0, Ab.useLayoutEffect)((() => {
        const Ub = bb.current;
        if (!Ub) return;
        const {
          width: Ab,
          height: Tb
        } = Ub.getBoundingClientRect();
        Mb(function(bb, ab, Ub) {
          const Ab = window.innerWidth,
            Mb = window.innerHeight,
            Tb = ab / 2;
          let Eb = bb.left + bb.width / 2;
          Eb = Math.max(fT + Tb, Math.min(Eb, Ab - fT - Tb));
          const Yb = bb.top - 8 - fT,
            Bb = Mb - bb.bottom - 8 - fT,
            eb = Yb < Ub && Bb >= Yb;
          let vb;
          eb ? (vb = bb.bottom + 8, vb + Ub > Mb - fT && (vb = Mb - fT - Ub), vb = Math.max(fT, vb)) : (vb = bb.top - 8, vb - Ub < fT && (vb = fT + Ub));
          return {
            left: Eb,
            top: vb,
            placeBelow: eb
          }
        }(ab, Ab, Tb))
      }), [ab, bb]), Ub
    }

    function NT(bb, ab, Ub) {
      (0, Ab.useEffect)((() => (0, iT.e)("pointerdown", (Ab => {
        var Mb, Tb;
        const Eb = Ab.target;
        Eb instanceof Node && (null !== (Mb = bb.current) && void 0 !== Mb && Mb.contains(Eb) || null !== Ub && void 0 !== Ub && null !== (Tb = Ub.current) && void 0 !== Tb && Tb.contains(Eb) || (0, xT.k)(Eb) || ab())
      }))), [Ub, ab, bb])
    }

    function WT(bb) {
      let {
        label: ab,
        value: Ub,
        onChange: Ab
      } = bb;
      return (0, eb.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, eb.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: ab
        }), (0, eb.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((bb, ab) => (0, eb.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, eb.jsx)("span", {
              children: bb
            }), (0, eb.jsx)("input", {
              type: "number",
              step: "any",
              value: Ub[ab],
              onChange: bb => {
                const Mb = Number.parseFloat(bb.target.value);
                if (Number.isNaN(Mb)) return;
                const Tb = [Ub[0], Ub[1], Ub[2]];
                Tb[ab] = Mb, Ab(Tb)
              }
            })]
          }, bb)))
        })]
      })
    }
    const HT = (0, Ab.memo)((function(bb) {
        var ab, Ub, Mb;
        let {
          keyframe: Eb,
          anchor: Yb,
          hasOutgoingSegment: Bb,
          onClose: vb,
          onApply: Lb,
          onDelete: Pb,
          onUseCurrentCamera: Xb
        } = bb;
        const jb = (0, Ab.useRef)(null),
          Rb = pT(jb, Yb.rect),
          [kb, yb] = (0, Ab.useState)((() => [Eb.position[0], Eb.position[1], Eb.position[2]])),
          [Zb, Db] = (0, Ab.useState)((() => [Eb.direction[0], Eb.direction[1], Eb.direction[2]])),
          [zb, xb] = (0, Ab.useState)((() => Eb.easing));
        (0, Ab.useEffect)((() => {
          yb([Eb.position[0], Eb.position[1], Eb.position[2]]), Db([Eb.direction[0], Eb.direction[1], Eb.direction[2]]), xb(Eb.easing)
        }), [Eb]), NT(jb, vb);
        const ib = (0, Ab.useCallback)((() => {
            Lb({
              qL: Eb.qL,
              position: kb,
              direction: Zb,
              easing: zb
            }), vb()
          }), [Zb, zb, Eb.qL, Lb, vb, kb]),
          fb = (0, Ab.useCallback)((() => {
            Pb(Eb.qL), vb()
          }), [Eb.qL, Pb, vb]),
          mb = (0, Ab.useCallback)((() => {
            const bb = Xb();
            bb && (yb([bb.position[0], bb.position[1], bb.position[2]]), Db([bb.direction[0], bb.direction[1], bb.direction[2]]))
          }), [Xb]),
          pb = mT(Yb.rect);
        return (0, eb.jsxs)("div", {
          ref: jb,
          className: Tb()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (ab = null === Rb || void 0 === Rb ? void 0 : Rb.placeBelow) && void 0 !== ab && ab,
            Positioned: null !== Rb
          }),
          style: {
            left: `${null!==(Ub=null===Rb||void 0===Rb?void 0:Rb.left)&&void 0!==Ub?Ub:pb.left}px`,
            top: `${null!==(Mb=null===Rb||void 0===Rb?void 0:Rb.top)&&void 0!==Mb?Mb:pb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: [(0, eb.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, eb.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, eb.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Yb.qL]
            })]
          }), (0, eb.jsx)(WT, {
            label: "Position",
            value: kb,
            onChange: yb
          }), (0, eb.jsx)(WT, {
            label: "Direction",
            value: Zb,
            onChange: Db
          }), Bb && (0, eb.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, eb.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, eb.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: XT.map((bb => {
                const ab = (Ub = zb, Ab = bb.easing, Ub[0] === Ab[0] && Ub[1] === Ab[1] && Ub[2] === Ab[2] && Ub[3] === Ab[3]);
                var Ub, Ab;
                return (0, eb.jsx)(NU.M, {
                  className: Tb()("ReplayKeyframePopoverPreset", {
                    Active: ab
                  }),
                  onClick: () => {
                    xb(bb.easing)
                  },
                  children: bb.label
                }, bb.label)
              }))
            }), (0, eb.jsx)(zT, {
              value: zb,
              onChange: xb
            })]
          }), (0, eb.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, eb.jsx)(NU.g, {
              className: "ReplayViewerCompactButton",
              onClick: mb,
              children: "Use current view"
            }), (0, eb.jsx)(NU.m, {
              className: "ReplayViewerCompactButton",
              onClick: ib,
              children: "Apply"
            }), (0, eb.jsx)(NU.D, {
              className: "ReplayViewerCompactButton",
              onClick: fb,
              children: "Delete"
            })]
          })]
        })
      })),
      IT = (0, Ab.memo)((function(bb) {
        var ab, Ub, Mb;
        let {
          anchor: Eb,
          hasPlaybackMark: Yb,
          onClose: Bb,
          onMark: vb,
          onZoom: Lb,
          onCrop: Pb,
          onDeleteKeyframes: Xb,
          onClearMark: jb
        } = bb;
        const Rb = (0, Ab.useRef)(null),
          kb = pT(Rb, Eb.rect),
          yb = mT(Eb.rect),
          Zb = {
            startTick: Eb.startTick,
            endTick: Eb.endTick
          },
          Db = Eb.endTick > Eb.startTick;
        return NT(Rb, Bb), (0, eb.jsx)("div", {
          ref: Rb,
          className: Tb()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (ab = null === kb || void 0 === kb ? void 0 : kb.placeBelow) && void 0 !== ab && ab,
            Positioned: null !== kb
          }),
          style: {
            left: `${null!==(Ub=null===kb||void 0===kb?void 0:kb.left)&&void 0!==Ub?Ub:yb.left}px`,
            top: `${null!==(Mb=null===kb||void 0===kb?void 0:kb.top)&&void 0!==Mb?Mb:yb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: (0, eb.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, eb.jsx)(NU.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                vb(Zb)
              },
              disabled: !Db,
              children: (0, eb.jsx)("span", {
                children: " Play range "
              })
            }), (0, eb.jsx)(NU.g, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Lb(Zb)
              },
              children: (0, eb.jsx)("span", {
                children: " Zoom "
              })
            }), (0, eb.jsx)(NU.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Pb(Zb)
              },
              disabled: !Db,
              children: (0, eb.jsx)("span", {
                children: " Crop "
              })
            }), (0, eb.jsx)(NU.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Xb(Zb)
              },
              children: (0, eb.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Yb && (0, eb.jsx)(NU.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                jb()
              },
              children: (0, eb.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      dT = (0, Ab.memo)((function(bb) {
        var ab, Ub;
        let {
          maxTick: Mb,
          displayTick: Eb,
          hN: Yb,
          cameraKeyframes: Bb,
          playbackMark: vb,
          onSeek: Lb,
          onPause: Pb,
          onScrubTickChange: Xb,
          onMoveCameraKeyframe: jb,
          onUpdateCameraKeyframe: Rb,
          onDeleteCameraKeyframe: kb,
          onUseCurrentCamera: yb,
          onMarkRange: Zb,
          onCropRange: Db,
          onDeleteKeyframesInRange: zb,
          onClearMark: xb,
          zoomLevel: ib,
          onZoomLevelChange: fb
        } = bb;
        const mb = (0, Ab.useRef)(null),
          pb = (0, Ab.useRef)(null),
          Nb = (0, Ab.useRef)(!1),
          Wb = (0, Ab.useRef)(!1),
          Hb = (0, Ab.useRef)(ib),
          Ib = (0, Ab.useRef)(null),
          db = (0, Ab.useRef)(null),
          Fb = (0, Ab.useRef)(null),
          hb = (0, Ab.useRef)(null),
          [Gb, Qb] = (0, Ab.useState)(null),
          [qb, ub] = (0, Ab.useState)(Eb),
          [rb, Kb] = (0, Ab.useState)(null),
          [ob, lb] = (0, Ab.useState)(null),
          [tb, wb] = (0, Ab.useState)(null),
          [sb, gb] = (0, Ab.useState)(null),
          Cb = (0, Ab.useMemo)((() => Bb.map((bb => bb.qL))), [Bb]),
          Vb = null !== Gb && void 0 !== Gb ? Gb : Eb,
          {
            viewStart: Ob,
            viewEnd: cb
          } = (0, Ab.useMemo)((() => function(bb) {
            const ab = bb.maxTick + 1,
              Ub = Math.max(1, Math.ceil(ab / bb.zoomLevel)),
              Ab = Math.floor(Ub / 2);
            let Mb = bb.centerTick - Ab;
            return Mb = Math.max(0, Math.min(Mb, bb.maxTick - Ub + 1)), {
              viewStart: Mb,
              viewEnd: Math.min(bb.maxTick, Mb + Ub - 1)
            }
          }({
            maxTick: Mb,
            zoomLevel: ib,
            centerTick: qb
          })), [Mb, ib, qb]);
        (0, Ab.useEffect)((() => {
          if (null !== Gb || null !== db.current || null !== Fb.current || null !== hb.current) return;
          if (Nb.current) return void(Nb.current = !1);
          if (Wb.current) return void(Wb.current = !1);
          const bb = Hb.current !== ib;
          Hb.current = ib, bb && ub(Eb)
        }), [ib, Eb, Gb]);
        const Jb = (0, Ab.useCallback)((bb => {
            let ab = AT(bb, Mb);
            return vb && (ab = Math.max(vb.inTick, Math.min(ab, vb.outTick))), ab
          }), [Mb, vb]),
          nb = (0, Ab.useCallback)(((bb, ab) => {
            const Ub = Jb(bb);
            Lb(Ub), ab && ub(Ub)
          }), [Jb, Lb]),
          Sb = (0, Ab.useCallback)(((bb, ab) => {
            const Ub = Jb(bb);
            Qb(Ub), Xb(Ub), nb(Ub, ab)
          }), [Jb, nb, Xb]),
          ba = (0, Ab.useCallback)((() => {
            Qb((bb => (null !== bb && ub(bb), null))), Xb(null)
          }), [Xb]),
          aa = (0, Ab.useCallback)((() => {
            wb(null), gb(null)
          }), []),
          Ua = (0, Ab.useCallback)((bb => {
            const ab = mb.current;
            if (!ab) return 0;
            return AT(TT(eT(bb, ab), Ob, cb), Mb)
          }), [Mb, cb, Ob]),
          Aa = (0, Ab.useCallback)((bb => {
            const ab = pb.current;
            if (!ab) return 0;
            return AT(TT(eT(bb, ab), 0, Mb), Mb)
          }), [Mb]),
          Ma = (0, Ab.useMemo)((() => {
            if (!rb) return [...Cb];
            const bb = Cb.filter((bb => bb !== rb.fromTick));
            return bb.push(rb.previewTick), bb.sort(((bb, ab) => bb - ab)), bb
          }), [Cb, rb]),
          Ta = (0, Ab.useMemo)((() => {
            var bb;
            return ob && null !== (bb = Bb.find((bb => bb.qL === ob.qL))) && void 0 !== bb ? bb : null
          }), [Bb, ob]),
          Ea = (0, Ab.useMemo)((() => !!Ta && Bb.some((bb => bb.qL > Ta.qL))), [Bb, Ta]);
        (0, Ab.useEffect)((() => {
          ob && !Ta && lb(null)
        }), [ob, Ta]), (0, Ab.useEffect)((() => {
          if (!sb) return () => {};
          const bb = bb => {
            "Escape" === bb.key && aa()
          };
          return window.addEventListener("keydown", bb), () => {
            window.removeEventListener("keydown", bb)
          }
        }), [aa, sb]);
        const Ya = (0, Ab.useCallback)(((bb, ab) => {
            aa(), Pb(), Lb(bb, {
              ignorePlaybackMark: !0
            }), lb({
              qL: bb,
              rect: ab.getBoundingClientRect()
            })
          }), [aa, Pb, Lb]),
          Ba = (0, Ab.useCallback)(((bb, ab) => Ub => {
            0 === Ub.button && (Ub.stopPropagation(), lb(null), aa(), Pb(), Ib.current = {
              fromTick: bb,
              startX: Ub.clientX,
              startY: Ub.clientY,
              didDrag: !1,
              track: ab
            }, Kb({
              fromTick: bb,
              previewTick: bb,
              track: ab
            }), Ub.currentTarget.setPointerCapture(Ub.pointerId))
          }), [aa, Pb]),
          ea = (0, Ab.useCallback)((bb => {
            if (!rb) return;
            bb.stopPropagation();
            const ab = Ib.current;
            if (ab && !ab.didDrag) {
              const Ub = bb.clientX - ab.startX,
                Ab = bb.clientY - ab.startY;
              Math.hypot(Ub, Ab) > 5 && (ab.didDrag = !0)
            }
            const Ub = "detail" === rb.track ? Ua(bb.clientX) : Aa(bb.clientX);
            Ub !== rb.previewTick && Kb({
              ...rb,
              previewTick: Ub
            })
          }), [rb, Ua, Aa]),
          va = (0, Ab.useCallback)((bb => {
            if (!rb) return;
            bb.stopPropagation();
            const ab = Ib.current,
              Ub = "detail" === rb.track ? Ua(bb.clientX) : Aa(bb.clientX);
            ab && !ab.didDrag ? Ya(ab.fromTick, bb.currentTarget) : Ub !== rb.fromTick && jb(rb.fromTick, Ub), Kb(null), Ib.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId)
          }), [rb, jb, Ya, Ua, Aa]),
          La = (0, Ab.useCallback)((bb => {
            if (0 !== bb.button) return;
            lb(null), Pb();
            const ab = Ua(bb.clientX);
            db.current = {
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              startTick: ab,
              currentTick: ab,
              didSelect: !1
            }, wb(null), gb(null), bb.currentTarget.setPointerCapture(bb.pointerId)
          }), [Pb, Ua]),
          Pa = (0, Ab.useCallback)((bb => {
            const ab = db.current;
            if (!ab || ab.pointerId !== bb.pointerId) return;
            const Ub = Ua(bb.clientX);
            if (ab.currentTick = Ub, !ab.didSelect) {
              const Ub = bb.clientX - ab.startX,
                Ab = bb.clientY - ab.startY;
              if (Math.hypot(Ub, Ab) <= 5) return;
              ab.didSelect = !0
            }
            const Ab = Math.min(ab.startTick, Ub),
              Mb = Math.max(ab.startTick, Ub);
            wb({
              startTick: Ab,
              endTick: Mb
            })
          }), [Ua]),
          Xa = (0, Ab.useCallback)((bb => {
            const ab = db.current;
            if (!ab || ab.pointerId !== bb.pointerId) return;
            if (db.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), !ab.didSelect) return aa(), void nb(ab.startTick, !0);
            const Ub = Ua(bb.clientX),
              Ab = Math.min(ab.startTick, Ub),
              Mb = Math.max(ab.startTick, Ub),
              Tb = {
                startTick: Ab,
                endTick: Mb
              };
            wb(Tb);
            const Eb = mb.current;
            if (!Eb) return;
            const Yb = Eb.getBoundingClientRect(),
              Bb = MT(Ab, Ob, cb) / 100,
              eb = MT(Mb, Ob, cb) / 100,
              vb = Yb.left + Bb * Yb.width,
              Lb = Yb.left + eb * Yb.width;
            gb({
              ...Tb,
              rect: new DOMRect(vb, Yb.top, Math.max(Lb - vb, 1), Yb.height)
            })
          }), [aa, nb, Ua, cb, Ob]),
          ja = (0, Ab.useCallback)((bb => ab => {
            if (0 !== ab.button) return;
            ab.stopPropagation(), lb(null), aa(), Pb(), Fb.current = {
              pointerId: ab.pointerId,
              track: bb
            }, ab.currentTarget.setPointerCapture(ab.pointerId);
            const Ub = "detail" === bb ? Ua(ab.clientX) : Aa(ab.clientX);
            Sb(Ub, !1)
          }), [aa, Pb, Sb, Ua, Aa]),
          Ra = (0, Ab.useCallback)((bb => {
            const ab = Fb.current;
            if (!ab || ab.pointerId !== bb.pointerId) return;
            bb.stopPropagation();
            const Ub = "detail" === ab.track ? Ua(bb.clientX) : Aa(bb.clientX);
            Sb(Ub, !1)
          }), [Sb, Ua, Aa]),
          ka = (0, Ab.useCallback)((bb => {
            const ab = Fb.current;
            ab && ab.pointerId === bb.pointerId && (bb.stopPropagation(), Fb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), ba())
          }), [ba]),
          ya = (0, Ab.useCallback)((bb => {
            0 === bb.button && (aa(), Pb(), hb.current = {
              pointerId: bb.pointerId
            }, bb.currentTarget.setPointerCapture(bb.pointerId), Sb(Aa(bb.clientX), !0))
          }), [aa, Pb, Sb, Aa]),
          Za = (0, Ab.useCallback)((bb => {
            const ab = hb.current;
            ab && ab.pointerId === bb.pointerId && Sb(Aa(bb.clientX), !0)
          }), [Sb, Aa]),
          Da = (0, Ab.useCallback)((bb => {
            const ab = hb.current;
            ab && ab.pointerId === bb.pointerId && (hb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), ba())
          }), [ba]),
          za = (0, Ab.useCallback)((bb => {
            const ab = Math.max(1, bb.endTick - bb.startTick + 1),
              Ub = Mb + 1,
              Ab = Ub / ab,
              Tb = Math.max(1, Math.ceil(Ub / Ab)),
              Eb = bb.startTick + Math.floor((Tb - 1) / 2);
            Wb.current = !0, Hb.current = Ab, ub(AT(Eb, Mb)), fb(Ab), aa()
          }), [aa, Mb, fb]),
          xa = (0, Ab.useCallback)((bb => {
            Zb(bb), aa()
          }), [aa, Zb]),
          ia = (0, Ab.useCallback)((bb => {
            Db(bb), aa()
          }), [aa, Db]),
          fa = (0, Ab.useCallback)((bb => {
            zb(bb), aa()
          }), [aa, zb]),
          ma = (0, Ab.useCallback)((() => {
            xb(), aa()
          }), [aa, xb]);
        (0, Ab.useEffect)((() => {
          const bb = mb.current;
          if (!bb) return () => {};
          const ab = ab => {
            ab.preventDefault();
            const Ub = AT(TT(eT(ab.clientX, bb), Ob, cb), Mb),
              Ab = ab.deltaY < 0 ? "in" : "out",
              Tb = BT(ib, Ab);
            Tb !== ib && (Nb.current = !0, ub(Ub), fb(Tb))
          };
          return bb.addEventListener("wheel", ab, {
            passive: !1
          }), () => {
            bb.removeEventListener("wheel", ab)
          }
        }), [Mb, fb, cb, Ob, ib]);
        const pa = MT(Vb, Ob, cb),
          Na = vT(Vb, Mb),
          Wa = vT(Ob, Mb),
          Ha = Mb > 0 ? vT(cb, Mb) : 100,
          Ia = null !== vb,
          da = null !== (ab = null === vb || void 0 === vb ? void 0 : vb.inTick) && void 0 !== ab ? ab : 0,
          Fa = null !== (Ub = null === vb || void 0 === vb ? void 0 : vb.outTick) && void 0 !== Ub ? Ub : Mb,
          ha = vT(da, Mb),
          Ga = Math.max(vT(Fa, Mb) - ha, 0),
          Qa = MT(Math.max(da, Ob), Ob, cb),
          qa = MT(Math.min(Fa, cb), Ob, cb),
          ua = Math.max(qa - Qa, 0),
          ra = Ia && Fa >= Ob && da <= cb,
          Ka = MT(da, Ob, cb),
          oa = MT(Fa, Ob, cb),
          la = Ia && da >= Ob && da <= cb,
          ta = Ia && Fa >= Ob && Fa <= cb,
          wa = vT(da, Mb),
          sa = vT(Fa, Mb),
          ga = null !== tb && void 0 !== tb ? tb : sb ? {
            startTick: sb.startTick,
            endTick: sb.endTick
          } : null,
          Ca = ga ? MT(Math.max(ga.startTick, Ob), Ob, cb) : 0,
          Va = ga ? MT(Math.min(ga.endTick, cb), Ob, cb) : 0,
          Oa = Math.max(Va - Ca, 0),
          ca = null !== ga && ga.endTick >= Ob && ga.startTick <= cb,
          Ja = (0, Ab.useMemo)((() => LT(0, Mb, Yb)), [Mb, Yb]),
          na = (0, Ab.useMemo)((() => LT(Ob, cb, Yb)), [Ob, cb, Yb]),
          Sa = (0, Ab.useMemo)((() => Ma.filter((bb => bb >= Ob && bb <= cb))), [Ma, cb, Ob]),
          bU = (0, Ab.useCallback)(((bb, ab, Ub) => {
            const Ab = "detail" === ab ? MT(bb, Ob, cb) : vT(bb, Mb),
              Eb = null !== rb && Ub === rb.fromTick,
              Yb = null !== ob && ob.qL === Ub;
            return (0, eb.jsx)("button", {
              type: "button",
              className: Tb()("ReplayTimelineCameraKeyframeMarker", "detail" === ab ? "Detail" : "Overview", {
                Dragging: Eb,
                Selected: Yb
              }),
              style: {
                left: `${Ab}%`
              },
              onPointerDown: Ba(Ub, ab),
              onPointerMove: ea,
              onPointerUp: va,
              onPointerCancel: va,
              "aria-label": `Camera keyframe at tick ${Ub}`
            }, `cam-${ab}-${Ub}`)
          }), [Ba, ob, va, rb, Mb, ea, cb, Ob]),
          aU = (0, Ab.useCallback)((bb => rb && bb === rb.previewTick ? rb.fromTick : bb), [rb]);
        return Mb <= 0 ? null : (0, eb.jsxs)("div", {
          className: "ReplayTimeline",
          children: [ob && Ta && (0, aT.createPortal)((0, eb.jsx)(HT, {
            keyframe: Ta,
            anchor: ob,
            hasOutgoingSegment: Ea,
            onClose: () => {
              lb(null)
            },
            onApply: Rb,
            onDelete: kb,
            onUseCurrentCamera: yb
          }), document.body), sb && (0, aT.createPortal)((0, eb.jsx)(IT, {
            anchor: sb,
            hasPlaybackMark: Ia,
            onClose: aa,
            onMark: xa,
            onZoom: za,
            onCrop: ia,
            onDeleteKeyframes: fa,
            onClearMark: ma
          }), document.body), (0, eb.jsxs)("div", {
            className: Tb()("ReplayTimelineOverviewSection", {
              Hidden: ib <= 1
            }),
            children: [(0, eb.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, eb.jsxs)("div", {
              ref: pb,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: ya,
              onPointerMove: Za,
              onPointerUp: Da,
              onPointerCancel: Da,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Mb,
              "aria-valuenow": Vb,
              tabIndex: 0,
              children: [Ja.map((bb => {
                const ab = vT(bb, Mb);
                return (0, eb.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${ab}%`
                  }
                }, bb)
              })), Ia && (0, eb.jsxs)(eb.Fragment, {
                children: [(0, eb.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${ha}%`,
                    width: `${Ga}%`
                  }
                }), (0, eb.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${wa}%`
                  },
                  "aria-hidden": !0
                }), (0, eb.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${sa}%`
                  },
                  "aria-hidden": !0
                })]
              }), Ma.map((bb => bU(bb, "overview", aU(bb)))), (0, eb.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Wa}%`,
                  width: `${Math.max(Ha-Wa,.5)}%`
                }
              }), (0, eb.jsx)("button", {
                type: "button",
                className: Tb()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Gb
                }),
                style: {
                  left: `${Na}%`
                },
                onPointerDown: ja("overview"),
                onPointerMove: Ra,
                onPointerUp: ka,
                onPointerCancel: ka,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, eb.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, eb.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, eb.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, eb.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [ET(Ob, Yb), " \u2013 ", ET(cb, Yb), ib > 1 && (0, eb.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: YT(ib)
                })]
              })]
            }), (0, eb.jsxs)("div", {
              ref: mb,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: La,
              onPointerMove: Pa,
              onPointerUp: Xa,
              onPointerCancel: Xa,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Ob,
              "aria-valuemax": cb,
              "aria-valuenow": Vb,
              tabIndex: 0,
              children: [na.map((bb => {
                const ab = MT(bb, Ob, cb);
                return (0, eb.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${ab}%`
                  }
                }, bb)
              })), ra && (0, eb.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Qa}%`,
                  width: `${ua}%`
                }
              }), la && (0, eb.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${Ka}%`
                },
                "aria-label": `Play range start at tick ${da}`
              }), ta && (0, eb.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${oa}%`
                },
                "aria-label": `Play range end at tick ${Fa}`
              }), ca && ga && (0, eb.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Ca}%`,
                  width: `${Oa}%`
                }
              }), Sa.map((bb => bU(bb, "detail", aU(bb)))), (0, eb.jsx)("button", {
                type: "button",
                className: Tb()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Gb
                }),
                style: {
                  left: `${pa}%`
                },
                onPointerDown: ja("detail"),
                onPointerMove: Ra,
                onPointerUp: ka,
                onPointerCancel: ka,
                "aria-label": "Scrub playhead"
              })]
            }), (0, eb.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, eb.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      FT = (0, Ab.memo)((function(bb) {
        let {
          enabled: ab
        } = bb;
        const Ub = (0, Ab.useRef)(!1),
          Mb = (0, Ab.useRef)(null),
          [Eb, Yb] = (0, Ab.useState)(!1),
          Bb = (0, Ab.useCallback)((bb => {
            ab && 0 === bb.button && (Ub.current = !0, Yb(!0), Mb.current = {
              x: bb.clientX,
              y: bb.clientY
            }, bb.currentTarget.setPointerCapture(bb.pointerId))
          }), [ab]),
          vb = (0, Ab.useCallback)((bb => {
            if (!ab || !Ub.current || !Mb.current) return;
            const Ab = bb.clientX - Mb.current.x,
              Tb = bb.clientY - Mb.current.y;
            Mb.current = {
              x: bb.clientX,
              y: bb.clientY
            }, Pb.gameBridge.send("dragReplayCamera", {
              dx: Ab,
              dy: Tb
            })
          }), [ab]),
          Lb = (0, Ab.useCallback)((bb => {
            Ub.current && (Ub.current = !1, Yb(!1), Mb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId))
          }), []);
        return ab ? (0, eb.jsx)("div", {
          className: Tb()("ReplayViewerCameraDragSurface", {
            Dragging: Eb
          }),
          onPointerDown: Bb,
          onPointerMove: vb,
          onPointerUp: Lb,
          onPointerCancel: Lb,
          "aria-hidden": !0
        }) : null
      }));
    var hT = Ub(36329),
      GT = Ub(36334);
    const QT = (0, Ab.memo)((function(bb) {
        var ab, Ub, Mb;
        let {
          anchorRect: Eb,
          anchorRef: Bb,
          onClose: vb
        } = bb;
        const Lb = (0, Ab.useRef)(null),
          Pb = pT(Lb, Eb),
          [Xb, jb] = (0, Ab.useState)(GT.e),
          Rb = (0, Ab.useMemo)((() => Object.values(Xb).every((bb => bb))), [Xb]);
        (0, Yb.f)("replayViewer|uiVisibilityChanged", (() => {
          jb((0, GT.e)())
        })), NT(Lb, vb, Bb);
        const kb = (0, Ab.useCallback)(((bb, ab) => {
            (0, GT.k)(bb, ab), jb((0, GT.e)())
          }), []),
          yb = (0, Ab.useCallback)((bb => {
            for (const {
                group: ab
              }
              of hT.d)(0, GT.k)(ab, bb);
            jb((0, GT.e)())
          }), []),
          Zb = mT(Eb);
        return (0, aT.createPortal)((0, eb.jsxs)("div", {
          ref: Lb,
          className: Tb()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (ab = null === Pb || void 0 === Pb ? void 0 : Pb.placeBelow) && void 0 !== ab && ab,
            Positioned: null !== Pb
          }),
          style: {
            left: `${null!==(Ub=null===Pb||void 0===Pb?void 0:Pb.left)&&void 0!==Ub?Ub:Zb.left}px`,
            top: `${null!==(Mb=null===Pb||void 0===Pb?void 0:Pb.top)&&void 0!==Mb?Mb:Zb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: [(0, eb.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, eb.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, eb.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, eb.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, eb.jsx)("input", {
                type: "checkbox",
                checked: Rb,
                onChange: bb => {
                  yb(bb.target.checked)
                }
              }), (0, eb.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), hT.d.map((bb => {
              let {
                group: ab,
                label: Ub
              } = bb;
              return (0, eb.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, eb.jsx)("input", {
                  type: "checkbox",
                  checked: Xb[ab],
                  onChange: bb => {
                    kb(ab, bb.target.checked)
                  }
                }), (0, eb.jsx)("span", {
                  children: Ub
                })]
              }, ab)
            }))]
          })]
        }), document.body)
      })),
      qT = (0, Ab.memo)((function(bb) {
        let {
          disabled: ab
        } = bb;
        const Ub = (0, Ab.useRef)(null),
          [Mb, Tb] = (0, Ab.useState)(!1),
          [Eb, Yb] = (0, Ab.useState)(null),
          Bb = (0, Ab.useCallback)((() => {
            Ub.current && (Yb(Ub.current.getBoundingClientRect()), Tb((bb => !bb)))
          }), []),
          vb = (0, Ab.useCallback)((() => {
            Tb(!1)
          }), []);
        return (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)("div", {
            ref: Ub,
            children: (0, eb.jsx)(NU.g, {
              className: "ReplayViewerActionButton",
              onClick: Bb,
              disabled: ab,
              children: (0, eb.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Mb && Eb && (0, eb.jsx)(QT, {
            anchorRect: Eb,
            anchorRef: Ub,
            onClose: vb
          })]
        })
      })),
      uT = ["freeCamUp", "freeCamDown"];

    function rT(bb, ab) {
      Pb.gameBridge.send("holdReplayFreecamVertical", {
        action: bb,
        PY: ab
      })
    }
    const KT = (0, Ab.memo)((function() {
        (0, Ab.useEffect)((() => () => {
          ! function() {
            Pb.gameBridge.send("moveReplayFreecam", null);
            for (const bb of uT) rT(bb, !1)
          }()
        }), []);
        const bb = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("moveReplayFreecam", bb)
          }), []),
          ab = (0, Ab.useCallback)((bb => ({
            onTouchStart: ab => {
              ab.preventDefault(), ab.stopPropagation(), rT(bb, !0)
            },
            onTouchEnd: ab => {
              ab.preventDefault(), ab.stopPropagation(), rT(bb, !1)
            },
            onTouchCancel: ab => {
              ab.preventDefault(), ab.stopPropagation(), rT(bb, !1)
            }
          })), []);
        return (0, eb.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, eb.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, eb.jsx)(ma, {
              onMove: bb,
              mode: "pinned"
            })
          }), (0, eb.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, eb.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...ab("freeCamUp"),
              children: (0, eb.jsx)(ub.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, eb.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...ab("freeCamDown"),
              children: (0, eb.jsx)(ub.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      oT = [],
      lT = (0, Ab.memo)((function() {
        const bb = (0, Vb.j)();
        return (0, fb.c)("replayViewerRequested", (bb => {
          (0, Vb.i)("toggle" === bb ? !(0, Vb.h)() : "open" === bb)
        })), bb ? (0, eb.jsx)(tT, {}) : null
      })),
      tT = (0, Ab.memo)((function() {
        var bb, ab, Ub, Mb, Eb, Yb, Bb, vb, Lb, Xb, jb, Rb;
        const kb = Ab.useRef(null),
          [yb, Zb] = (0, Ab.useState)(null),
          [Db, zb] = (0, Ab.useState)(1),
          [xb, ib] = (0, Ab.useState)(null),
          [Nb, Wb] = (0, Ab.useState)(!1),
          {
            isTouchScreen: Hb
          } = (0, mb.n)(["isTouchScreen"]),
          Ib = (0, fb.k)("replay"),
          db = (0, fb.k)("replayEdits"),
          Fb = null !== Ib,
          hb = null !== (bb = null === Ib || void 0 === Ib ? void 0 : Ib.qL) && void 0 !== bb ? bb : 0,
          Gb = null !== (ab = null === Ib || void 0 === Ib ? void 0 : Ib.totalTicks) && void 0 !== ab ? ab : 0,
          Qb = Math.max(0, Gb - 1),
          rb = null !== (Ub = null === Ib || void 0 === Ib ? void 0 : Ib.playing) && void 0 !== Ub && Ub,
          Kb = null !== (Mb = null === Ib || void 0 === Ib ? void 0 : Ib.speed) && void 0 !== Mb ? Mb : 1,
          ob = null !== (Eb = null === Ib || void 0 === Ib ? void 0 : Ib.hN) && void 0 !== Eb ? Eb : 20,
          lb = null !== xb && void 0 !== xb ? xb : hb,
          tb = null !== (Yb = null === Ib || void 0 === Ib ? void 0 : Ib.freecam) && void 0 !== Yb && Yb,
          wb = null !== (Bb = null === Ib || void 0 === Ib ? void 0 : Ib.cameraMode) && void 0 !== Bb ? Bb : "recording",
          sb = null !== (vb = null === db || void 0 === db ? void 0 : db.cameraKeyframes) && void 0 !== vb ? vb : oT,
          gb = null !== (Lb = null === db || void 0 === db ? void 0 : db.playbackMark) && void 0 !== Lb ? Lb : null,
          Cb = null !== (Xb = null === db || void 0 === db ? void 0 : db.fileName) && void 0 !== Xb ? Xb : null,
          Ob = null !== (jb = null === db || void 0 === db ? void 0 : db.unsavedChanges) && void 0 !== jb && jb,
          cb = null !== (Rb = null === db || void 0 === db ? void 0 : db.suggestSaveAs) && void 0 !== Rb && Rb,
          Jb = (0, fb.k)("replayVideoExporting"),
          nb = !Jb && Fb && ("freecam" === wb || ("recording" === wb || "keyframe" === wb) && !rb),
          Sb = Hb && Fb && "freecam" === wb && !Jb && !Nb;
        (0, bT.b)(!0, !0, "ReplayViewerOverlay"), (0, Ab.useEffect)((() => {
          Pb.gameBridge.send("syncReplayCameraMode", null)
        }), [tb]);
        const ba = (0, Ab.useCallback)(((bb, ab) => {
            Pb.gameBridge.send("seekReplay", {
              qL: bb,
              ignorePlaybackMark: null === ab || void 0 === ab ? void 0 : ab.ignorePlaybackMark
            })
          }), []),
          aa = (0, Ab.useCallback)((() => {
            Pb.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Ua = (0, Ab.useCallback)(((bb, ab) => {
            Pb.gameBridge.send("moveReplayCameraKeyframe", {
              from: bb,
              to: ab
            })
          }), []),
          Aa = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("setReplayCameraKeyframe", bb)
          }), []),
          Ma = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("deleteReplayCameraKeyframes", {
              start: bb,
              end: bb
            })
          }), []),
          Ta = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("deleteReplayCameraKeyframes", {
              start: bb.startTick,
              end: bb.endTick
            })
          }), []),
          Ea = (0, Ab.useCallback)((() => Pb.gameBridge.lookup("replayCamera", null)), []),
          Ya = (0, Ab.useCallback)((bb => {
            ib(bb)
          }), []),
          Ba = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("setReplayPlaybackMark", {
              inTick: bb.startTick,
              outTick: bb.endTick
            })
          }), []),
          ea = (0, Ab.useCallback)((() => {
            Pb.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          va = (0, Ab.useCallback)((bb => {
            const ab = Pb.gameBridge.latest("replay");
            if (null === ab || bb.endTick <= bb.startTick) return;
            const Ub = bb.startTick,
              Ab = bb.endTick;
            cA.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((bb => {
              var Mb;
              if (!0 !== bb) return;
              if ((null === (Mb = Pb.gameBridge.latest("replay")) || void 0 === Mb ? void 0 : Mb.id) !== ab.id) return;
              Pb.gameBridge.send("cropReplay", {
                start: Ub,
                end: Ab
              }) && (ib(null), zb(1))
            }))
          }), []),
          La = (0, Ab.useCallback)(((bb, ab) => {
            Zb(null), zb(1), ib(null), (0, sM.c)().open(bb, ab).catch((bb => {
              console.error(bb), Zb(bb instanceof Error ? bb.message : "Failed to parse recording")
            }))
          }), []),
          Pa = (0, Ab.useCallback)(((bb, ab) => {
            null !== Pb.gameBridge.latest("connectedGame").websocketUrl ? cA.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((Ub => {
              !0 === Ub && La(bb, ab)
            })) : La(bb, ab)
          }), [La]),
          Xa = (0, Ab.useCallback)((bb => {
            var ab;
            const Ub = null === (ab = bb.target.files) || void 0 === ab ? void 0 : ab[0];
            if (bb.target.value = "", !Ub) return;
            const Ab = new FileReader;
            Ab.onload = () => {
              Pa(new Uint8Array(Ab.result), {
                fileName: Ub.name
              })
            }, Ab.onerror = () => {
              Zb("Failed to read file")
            }, Ab.readAsArrayBuffer(Ub)
          }), [Pa]),
          ja = (0, Ab.useCallback)((() => {
            const bb = () => {
              var bb;
              null === (bb = kb.current) || void 0 === bb || bb.click()
            };
            (0, VM.k)() ? (0, VM.h)().then((bb => {
              bb && Pa(bb.bytes, {
                fileHandle: bb.handle
              })
            })).catch((ab => {
              console.error(ab), bb()
            })): bb()
          }), [Pa]),
          Ra = (0, Ab.useCallback)((async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let ab;
            try {
              ab = await SM(bb, {
                files: (0, sM.c)(),
                pickerSupported: VM.k,
                chooseFile: VM.e,
                write: VM.o,
                download: CM.h,
                onFallback: console.error
              })
            } catch (Ub) {
              return void(bb => {
                console.error(bb), cA.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: cM(bb),
                  confirmText: "OK"
                })
              })(Ub)
            }
            "written" !== ab && "downloaded" !== ab || (() => {
              const bb = cA.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                bb.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          ka = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("replayAction", bb)
          }), []),
          ya = (0, Ab.useCallback)((bb => {
            zb((ab => BT(ab, bb)))
          }), []),
          Za = (0, Ab.useCallback)((bb => {
            if (!Pb.gameBridge.latest("replayVideoExporting")) switch (bb) {
              case "replayLoad":
                ja();
                break;
              case "replaySave":
                Ra(!1);
                break;
              case "replaySaveAs":
                Ra(!0);
                break;
              case "replayTimelineZoomIn":
                ya("in");
                break;
              case "replayTimelineZoomOut":
                ya("out")
            }
          }), [ja, Ra, ya]);
        (0, fb.c)("replayUiActionRequested", Za);
        const Da = (0, Ab.useCallback)((bb => {
            Pb.gameBridge.send("setReplayCameraMode", bb)
          }), []),
          za = Fb ? NU.g : NU.m,
          xa = Ob && !cb ? NU.m : NU.g,
          ia = Ob && cb ? NU.m : NU.g;
        return (0, eb.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, eb.jsx)(FT, {
            enabled: nb
          }), Sb && (0, eb.jsx)(KT, {}), (0, eb.jsx)("input", {
            ref: kb,
            type: "file",
            accept: CM.c,
            className: "ReplayViewerFileInput",
            onChange: Xa
          }), (0, eb.jsxs)("div", {
            className: Tb()("ReplayViewerBar", {
              Collapsed: Nb
            }),
            children: [(0, eb.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Nb ? Wb(!1) : Fb ? Wb(!0) : (0, Vb.e)()
              },
              "aria-expanded": !Nb,
              "aria-label": Nb ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, eb.jsx)(ub.e, {
                name: Nb ? "angle-up" : "angle-down"
              })
            }), !Nb && (0, eb.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Fb && Gb > 0 && (0, eb.jsx)(dT, {
                maxTick: Qb,
                displayTick: lb,
                hN: ob,
                cameraKeyframes: sb,
                playbackMark: gb,
                onSeek: ba,
                onPause: aa,
                onScrubTickChange: Ya,
                onMoveCameraKeyframe: Ua,
                onUpdateCameraKeyframe: Aa,
                onDeleteCameraKeyframe: Ma,
                onUseCurrentCamera: Ea,
                onMarkRange: Ba,
                onCropRange: va,
                onDeleteKeyframesInRange: Ta,
                onClearMark: ea,
                zoomLevel: Db,
                onZoomLevelChange: zb
              }, Qb), (0, eb.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, eb.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, eb.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Fb && (0, eb.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Cb && void 0 !== Cb ? Cb : "Unsaved recording", Ob ? " *" : ""]
                    }), (0, eb.jsxs)(za, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Za("replayLoad")
                      },
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, eb.jsxs)(NU.g, {
                      className: "ReplayViewerActionButton",
                      onClick: Vb.e,
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, eb.jsxs)(xa, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Za("replaySave")
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, eb.jsxs)(NU.g, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Pb.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, eb.jsxs)(ia, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Za("replaySaveAs")
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, eb.jsxs)(NU.g, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Pb.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Fb || 0 === Gb || Jb,
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, eb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, eb.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, eb.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, eb.jsx)(pb.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, eb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, eb.jsx)(qb.g, {
                        tooltipInner: (0, eb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, eb.jsxs)(NU.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === wb,
                          onClick: () => {
                            Da("recording")
                          },
                          disabled: !Fb,
                          children: ["Recorded ", (0, eb.jsx)(ub.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, eb.jsx)(qb.g, {
                        tooltipInner: (0, eb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, eb.jsxs)(NU.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === wb,
                          onClick: () => {
                            Da("freecam")
                          },
                          disabled: !Fb,
                          children: ["Free ", (0, eb.jsx)(ub.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, eb.jsx)(qb.g, {
                        tooltipInner: (0, eb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, eb.jsxs)(NU.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === wb,
                          onClick: () => {
                            Da("keyframe")
                          },
                          disabled: !Fb,
                          children: ["Preview ", (0, eb.jsx)(ub.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, eb.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, eb.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, eb.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, eb.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: ET(lb, ob)
                      }), (0, eb.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, eb.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: ET(Qb, ob)
                      })]
                    }), (0, eb.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", lb, " / ", Qb]
                    })]
                  }), (0, eb.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, eb.jsxs)(NU.g, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        ka("replaySkipBack")
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsxs)("span", {
                        children: [" ", (0, eb.jsx)(ub.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, eb.jsx)(pb.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, eb.jsxs)(NU.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Pb.gameBridge.send("setReplayPlaying", !rb)
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsxs)("span", {
                        children: [" ", rb ? (0, eb.jsx)(ub.e, {
                          name: "pause"
                        }) : (0, eb.jsx)(ub.e, {
                          name: "play"
                        }), " "]
                      }), (0, eb.jsx)(pb.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, eb.jsxs)(NU.g, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        ka("replaySkipForward")
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsxs)("span", {
                        children: [" ", (0, eb.jsx)(ub.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, eb.jsx)(pb.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, eb.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, eb.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, eb.jsxs)(NU.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ka("replayRecordKeyframe")
                      },
                      disabled: !Fb,
                      children: [(0, eb.jsx)(pb.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, eb.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, eb.jsx)(qT, {
                      disabled: !Fb
                    }), gb && (0, eb.jsx)(NU.M, {
                      className: "ReplayViewerActionButton",
                      onClick: ea,
                      disabled: !Fb,
                      children: (0, eb.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, eb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, eb.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, eb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, eb.jsx)(NU.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          ka("replaySpeedDown")
                        },
                        disabled: !Fb || (0, gM.e)(Kb),
                        children: (0, eb.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, eb.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Kb, "\xd7"]
                      }), (0, eb.jsx)(NU.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          ka("replaySpeedUp")
                        },
                        disabled: !Fb || (0, gM.d)(Kb),
                        children: (0, eb.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, eb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, eb.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, eb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, eb.jsxs)(NU.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Za("replayTimelineZoomOut")
                        },
                        disabled: !Fb || Db <= UT[0],
                        children: [(0, eb.jsx)("span", {
                          children: " \u2212 "
                        }), (0, eb.jsx)(pb.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, eb.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: YT(Db)
                      }), (0, eb.jsxs)(NU.g, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Za("replayTimelineZoomIn")
                        },
                        disabled: !Fb || Db >= UT[UT.length - 1],
                        children: [(0, eb.jsx)("span", {
                          children: " + "
                        }), (0, eb.jsx)(pb.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, eb.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Fb && "Load a recording to begin playback"
              }), yb && (0, eb.jsx)("div", {
                className: "ReplayViewerError",
                children: yb
              })]
            })]
          })]
        })
      }));
    var wT = Ub(1242);

    function sT() {
      const [, bb] = (0, Ab.useState)(0);
      return (0, Yb.f)("replayViewer|uiVisibilityChanged", (() => {
          bb((bb => bb + 1))
        })), (0, Yb.f)("replayViewer|replayLoaded", (() => {
          bb((bb => bb + 1))
        })),
        function() {
          if (!(0, wT.f)()) return {};
          const bb = {
              [hT.b]: "true"
            },
            ab = (0, GT.e)();
          for (const {
              group: Ub,
              dataAttr: Ab
            }
            of hT.d) Ab && !ab[Ub] && (bb[Ab] = "true");
          return bb
        }()
    }
    var gT = Ub(8898),
      CT = Ub(1958),
      VT = Ub(8304),
      OT = Ub(8293),
      cT = Ub(1963);
    const JT = (0, Ab.memo)((function() {
      var bb, ab, Ub;
      const Mb = (0, Db.h)("customButtons");
      (0, Ab.useEffect)((() => Mb ? (Pb.gameBridge.send("bindCustomButtonKeys", Mb.filter(VT.g).map((bb => {
        let {
          id: ab,
          keycode: Ub
        } = bb;
        return {
          id: ab,
          keycode: Ub
        }
      }))), () => {
        Pb.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Mb]);
      const Tb = null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.filter(VT.g)) && void 0 !== bb ? bb : [],
        Eb = (0, OT.f)(),
        Yb = null !== (ab = null === (Ub = (0, cT.c)()) || void 0 === Ub ? void 0 : Ub.hideButtonHints) && void 0 !== ab && ab,
        Bb = "customButton" !== (null === Eb || void 0 === Eb ? void 0 : Eb.kind) || Yb ? null : Eb.id,
        vb = Tb.length > 0,
        Lb = (0, Ab.useRef)(null);
      return (0, Ab.useLayoutEffect)((() => {
        if (!vb) return () => {};
        const bb = Lb.current,
          ab = bb.closest(".InGameUi"),
          Ub = () => {
            ab.style.setProperty("--custom-buttons-top", `${bb.offsetTop}px`)
          };
        Ub();
        const Ab = new ResizeObserver(Ub);
        return Ab.observe(bb), Ab.observe(bb.parentElement), () => {
          Ab.disconnect(), ab.style.removeProperty("--custom-buttons-top")
        }
      }), [vb]), (0, eb.jsx)("div", {
        ref: Lb,
        className: "" + ((0, XM.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Tb.map((bb => {
          var ab, Ub;
          return (0, eb.jsx)(nT, {
            button: bb,
            padGlyph: bb.id === Bb && null !== (ab = null === (Ub = (0, lb.d)()) || void 0 === Ub ? void 0 : Ub.getBoundButton("actionButton")) && void 0 !== ab ? ab : null
          }, bb.id)
        }))
      })
    }));

    function nT(bb) {
      let {
        button: ab,
        padGlyph: Ub
      } = bb;
      const Mb = (0, Ab.useRef)(null),
        Tb = () => {
          null !== Mb.current && (Mb.current = null, Pb.gameBridge.send("pressCustomButton", {
            id: ab.id,
            down: !1
          }))
        };
      (0, Ab.useEffect)((() => Tb), []);
      const Eb = sa(Tb, {
          pressesOnPointerDown: !0
        }),
        Yb = bb => {
          Mb.current === bb.pointerId && Tb()
        };
      return (0, eb.jsxs)("div", {
        className: "CustomIcon",
        ...Eb,
        onLostPointerCapture: Yb,
        children: [(0, eb.jsx)(CT.d, {
          icon: ab.icon,
          keyboardHint: (0, VT.e)(ab.keycode),
          padGlyph: Ub,
          onPointerDown: bb => {
            try {
              bb.currentTarget.setPointerCapture(bb.pointerId)
            } catch {
              return
            }
            null === Mb.current && Pb.gameBridge.send("pressCustomButton", {
              id: ab.id,
              down: !0
            }), Mb.current = bb.pointerId
          },
          onPointerUp: Yb,
          onPointerCancel: Yb,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), ab.description && (0, eb.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: ab.description
        })]
      })
    }
    var ST = Ub(2265),
      bE = Ub(263);
    const aE = {
      frame: bb => {
        const ab = requestAnimationFrame((() => {
          bb()
        }));
        return () => {
          cancelAnimationFrame(ab)
        }
      },
      afterFrame: bb => {
        const ab = setTimeout(bb, 0);
        return () => {
          clearTimeout(ab)
        }
      }
    };
    class UE {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bE.b,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aE;
        this.idle = bb, this.frames = ab, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (bb(), () => {}) : (ab ? this.waiting.unshift(bb) : this.waiting.push(bb), this.schedule(), () => {
          const ab = this.waiting.indexOf(bb);
          ab >= 0 && (this.waiting.splice(ab, 1), this.settle())
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
        var bb, ab, Ub;
        null === (bb = this.cancelIdle) || void 0 === bb || bb.call(this), this.cancelIdle = null, null === (ab = this.cancelFrame) || void 0 === ab || ab.call(this), this.cancelFrame = null, null === (Ub = this.cancelAfterFrame) || void 0 === Ub || Ub.call(this), this.cancelAfterFrame = null
      }
    }
    const AE = (0, Ab.createContext)(null);

    function ME(bb) {
      let {
        children: ab,
        first: Ub = !1
      } = bb;
      const Mb = (0, Ab.useContext)(AE),
        [Tb, Eb] = (0, Ab.useState)(null === Mb);
      return (0, Ab.useEffect)((() => {
        if (!Tb && null !== Mb) return Mb.request((() => {
          Eb(!0)
        }), Ub)
      }), [Ub, Tb, Mb]), Tb ? (0, Ab.createElement)(Ab.Fragment, null, ab) : null
    }
    const TE = (0, Ab.memo)((function(bb) {
        let {
          shown: ab
        } = bb;
        const [Ub] = (0, Ab.useState)((() => new jb.f(ab))), [Mb] = (0, Ab.useState)((() => ab ? null : new UE));
        return (0, Ab.useLayoutEffect)((() => {
          ab && (null === Mb || void 0 === Mb || Mb.show(), Ub.show())
        }), [ab, Ub, Mb]), (0, eb.jsx)(jb.c.Provider, {
          value: Ub,
          children: (0, eb.jsx)(AE.Provider, {
            value: Mb,
            children: (0, eb.jsx)(EE, {})
          })
        })
      })),
      EE = (0, Ab.memo)((function() {
        const {
          isUiHidden: bb,
          isUiHiddenByCamera: ab,
          worldPanelHud: Ub,
          isTouchScreen: Mb
        } = (0, mb.n)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Eb = (0, VA.e)(), Yb = sT(), Bb = (0, jb.m)(), vb = (0, Ab.useRef)(null), Lb = (0, Db.h)("showKillfeed");
        return function() {
            const bb = (0, jb.m)();
            (0, Ab.useEffect)((() => bb.whenShown(Rb)), [bb])
          }(),
          function() {
            const bb = (0, Db.h)("inventoryColourOverride");
            (0, Ab.useEffect)((() => {
              if (!bb) return;
              const {
                panel: ab,
                slot: Ub,
                slotSelected: Ab,
                slotUnavailable: Mb
              } = wb(bb), Tb = document.documentElement.style;
              return Tb.setProperty("--InventoryPanelColour", ab), Tb.setProperty("--InventorySlotColour", Ub), Tb.setProperty("--InventorySlotSelectedColour", Ab), Tb.setProperty("--InventorySlotUnavailableColour", Mb), () => {
                Tb.removeProperty("--InventoryPanelColour"), Tb.removeProperty("--InventorySlotColour"), Tb.removeProperty("--InventorySlotSelectedColour"), Tb.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [bb])
          }(), (0, Ab.useLayoutEffect)((() => Bb.whenShown((() => {
            var bb;
            null === (bb = vb.current) || void 0 === bb || bb.classList.remove("PreMounted")
          }))), [Bb]), (0, eb.jsxs)(eb.Fragment, {
            children: [(0, eb.jsxs)("div", {
              ref: vb,
              className: Tb()("InGameUi", {
                PreMounted: !Bb.shown,
                Hidden: bb,
                HiddenByCamera: ab,
                HiddenByWorldPanel: null !== Ub,
                WorldPanelTouchControl: "touchControls" === Ub
              }),
              ...Yb,
              children: [(0, eb.jsxs)(ME, {
                children: [(0, eb.jsx)(tU.e, {}), (0, eb.jsx)(VU, {})]
              }), (0, eb.jsx)(jb.j, {
                children: (0, eb.jsx)(OU, {})
              }), (0, eb.jsxs)(ME, {
                children: [(0, eb.jsx)(xM, {}), (0, eb.jsx)(HM, {}), Mb && (0, eb.jsx)(dM, {})]
              }), (0, eb.jsxs)(ME, {
                children: [(0, eb.jsx)(yU, {}), (0, eb.jsx)(BA.d, {}), (0, eb.jsx)(RA, {})]
              }), (0, eb.jsx)(jb.j, {
                children: (0, eb.jsx)(lU, {})
              }), (0, eb.jsxs)(ME, {
                children: [(0, eb.jsx)(pM.e, {}), (0, eb.jsx)(lT, {})]
              }), (0, eb.jsxs)(ME, {
                children: [(0, eb.jsx)(hM.g, {}), (0, eb.jsx)(GM.f, {})]
              }), (0, eb.jsx)(ME, {
                children: (0, eb.jsx)(DU.k, {})
              }), (0, eb.jsx)(ME, {
                children: (0, eb.jsx)(XE, {
                  showChat: Eb
                })
              }), (0, eb.jsxs)(ME, {
                children: [(0, eb.jsx)(qM, {}), (0, eb.jsx)(mM, {})]
              }), (0, eb.jsxs)("div", {
                className: Tb()("RightElements", {
                  RightElementsTouchscreen: Mb
                }),
                "data-camera-keeper-host": "",
                children: [(0, eb.jsxs)("div", {
                  className: iA.g,
                  "data-holds-camera-keeper": "",
                  children: [(0, eb.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, eb.jsx)(ME, {
                      children: (0, eb.jsx)(eM.c, {})
                    }), (0, eb.jsxs)(ME, {
                      children: [(0, eb.jsx)(rb, {}), (0, eb.jsx)(WA.e, {})]
                    }), XM.featureFlags.useSocialFeatures && (0, eb.jsx)(jb.j, {
                      children: (0, eb.jsx)(HA.b, {
                        placement: "inGame"
                      })
                    }), XM.featureFlags.useSocialFeatures && (0, eb.jsx)(jb.j, {
                      children: (0, eb.jsx)(tA, {})
                    }), Lb && (0, eb.jsx)(jb.j, {
                      children: (0, eb.jsx)(YA, {})
                    }), (0, eb.jsx)(ME, {
                      children: (0, eb.jsx)(gT.c, {})
                    })]
                  }), XM.featureFlags.useSocialFeatures && (0, eb.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, eb.jsx)(ME, {
                      children: (0, eb.jsx)(DM.e, {})
                    })
                  })]
                }), (0, eb.jsxs)(ME, {
                  children: [(0, eb.jsx)(DU.b, {
                    placement: "topRight"
                  }), (0, eb.jsx)(jE, {})]
                })]
              }), (0, eb.jsx)("div", {
                className: "LeftCentre",
                children: (0, eb.jsx)(ME, {
                  children: (0, eb.jsx)(JT, {})
                })
              }), (0, eb.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Mb ? "" : void 0,
                children: [(0, eb.jsx)(jb.j, {
                  children: (0, eb.jsx)(db, {})
                }), (0, eb.jsx)(ME, {
                  children: (0, eb.jsx)(BE, {})
                }), (0, eb.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Mb ? "" : void 0,
                  children: [(0, eb.jsx)("div", {
                    className: Tb()("BottomLeftElements", {
                      Touch: Mb
                    }),
                    children: (0, eb.jsxs)(ME, {
                      children: [(0, eb.jsx)(gA, {}), !Mb && (0, eb.jsx)(ST.b, {})]
                    })
                  }), (0, eb.jsx)(ME, {
                    children: (0, eb.jsx)(PE, {})
                  }), (0, eb.jsx)(ME, {
                    children: (0, eb.jsx)(yA, {
                      isTouchScreen: Mb
                    })
                  })]
                })]
              }), (0, eb.jsx)("div", {
                className: "MiddleLeft"
              }), Mb && (0, eb.jsx)(ME, {
                children: (0, eb.jsx)(Sa, {})
              }), (0, eb.jsx)("div", {
                className: "CameraFadeHost",
                ref: Da.i
              })]
            }), (0, eb.jsx)(jb.j, {
              children: (0, eb.jsx)(wM.d, {})
            }), (0, eb.jsx)(ME, {
              first: !0,
              children: (0, eb.jsx)(CA.c, {})
            }), (0, eb.jsx)(jb.j, {
              children: (0, eb.jsx)(YE, {})
            })]
          })
      }));

    function YE() {
      return (0, Ab.useEffect)((() => {
        const bb = setTimeout((() => {
          (0, zb.l)()
        }), 0);
        return () => {
          clearTimeout(bb), zb.m.Hk(!1)
        }
      }), []), null
    }
    const BE = (0, Ab.memo)((function() {
        const bb = (0, Yb.i)("aimingOverlay", "none");
        (0, yb.e)();
        const ab = (0, Db.l)("middleTextUpper"),
          Ub = (0, Db.l)("middleTextLower");
        return (0, eb.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === bb ? {
            visibility: "hidden"
          } : {},
          children: [(0, eb.jsx)(LE, {
            text: ab,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: eE
          }), (0, eb.jsx)(LE, {
            text: Ub,
            className: "MiddleText",
            maxHeightFraction: vE
          })]
        })
      })),
      eE = .3,
      vE = .2;

    function LE(bb) {
      let {
        text: ab,
        className: Ub,
        maxHeightFraction: Mb
      } = bb;
      const Tb = (0, Ab.useRef)(null),
        Eb = (0, Ab.useRef)(null);
      return function(bb, ab, Ub, Mb) {
        (0, Ab.useLayoutEffect)((() => {
          const Ab = bb.current,
            Mb = ab.current;
          if (!Ab || !Mb) return;
          let Tb = -1,
            Eb = -1;
          const Yb = bb => (Mb.style.setProperty("zoom", String(bb)), Ab.getBoundingClientRect().height),
            Bb = () => {
              const bb = document.documentElement.clientHeight * Ub;
              let ab = 1;
              if (Yb(1) > bb) {
                let Ub = .5,
                  Ab = 1;
                for (let ab = 0; ab < 6; ab++) {
                  const ab = (Ub + Ab) / 2;
                  Yb(ab) <= bb ? Ub = ab : Ab = ab
                }
                ab = Ub
              }
              Eb = Yb(ab), Tb = Ab.getBoundingClientRect().width
            };
          Bb();
          let eb = 0;
          const vb = () => {
              cancelAnimationFrame(eb), eb = requestAnimationFrame(Bb)
            },
            Lb = new ResizeObserver((() => {
              const {
                width: bb,
                height: ab
              } = Ab.getBoundingClientRect();
              bb === Tb && ab === Eb || vb()
            }));
          return Lb.observe(Ab), window.addEventListener("resize", vb), () => {
            Lb.disconnect(), window.removeEventListener("resize", vb), cancelAnimationFrame(eb), Mb.style.removeProperty("zoom")
          }
        }), [bb, ab, Ub, Mb])
      }(Tb, Eb, Mb, ab.content), (0, eb.jsx)("div", {
        ref: Tb,
        className: "MiddleTextFit",
        children: (0, eb.jsx)(QM, {
          ref: Eb,
          text: ab,
          className: Ub
        })
      })
    }
    const PE = (0, Ab.memo)((function() {
        const bb = (0, Yb.i)("aimingOverlay", "none");
        (0, yb.e)();
        const ab = (0, Db.h)("useInventory");
        return (0, eb.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === bb ? {
            visibility: "hidden"
          } : {},
          children: [(0, eb.jsx)(vb, {}), (0, eb.jsx)(DU.b, {}), (0, eb.jsx)(zU, {}), (0, eb.jsx)(jb.j, {
            children: (0, eb.jsx)(yM, {})
          }), (0, eb.jsxs)("div", {
            className: "HotBarRow",
            children: [ab ? (0, eb.jsx)(ob.e, {}) : (0, eb.jsx)(ob.i, {}), (0, eb.jsx)(tb, {})]
          })]
        })
      })),
      XE = (0, Ab.memo)((function(bb) {
        let {
          showChat: ab
        } = bb;
        const {
          t: Ub
        } = (0, Ib.A)(), {
          clientEscMenuOptions: Mb,
          isTouchScreen: Eb
        } = (0, mb.n)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, yb.e)();
        const {
          userContext: Yb,
          isUserContextUpdating: Bb
        } = (0, kb.c)(), vb = (0, Db.h)("hideCoordinates"), Pb = (0, Db.h)("customVariationTitle"), {
          requestedGameNameWithVariation: Xb,
          gameNameWithVariation: jb,
          lobbyName: Rb,
          shownLobbyName: zb
        } = (0, fb.k)("connectedGame"), xb = (0, Lb.e)(Xb, Rb, !1), [ib, pb] = (0, Ab.useState)(null), Nb = (0, LM.m)(jb || Xb || ""), Wb = Pb || Nb || "";
        (0, Ab.useEffect)((() => {
          Bb || dA.b.getFavouriteLobbies(Yb).then((bb => {
            console.log("Got favourite lobbies", bb), pb(bb)
          }))
        }), [Bb, Yb]);
        const Hb = (0, Ab.useRef)(null);
        return (0, Ab.useLayoutEffect)((() => {
          const bb = Hb.current,
            ab = document.documentElement,
            Ub = new ResizeObserver((() => {
              ab.style.setProperty("--InGameHeaderRowsHeight", `${bb.offsetHeight}px`)
            }));
          return Ub.observe(bb), () => {
            Ub.disconnect(), ab.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), NA(Hb), (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsxs)("div", {
            className: Tb()(iA.e, {
              Touchscreen: Eb
            }),
            ref: Hb,
            children: [(0, eb.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, eb.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: bb => {
                  bb.stopPropagation(), bb.preventDefault()
                },
                onClick: () => {
                  mb.c.set({
                    openEverythingMenuName: Zb.j.SETTINGS
                  })
                },
                children: [(0, eb.jsx)(vM.b, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, eb.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, eb.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === xb && (0, eb.jsx)(vM.b, {}), null !== xb && (0, eb.jsxs)(eb.Fragment, {
                  children: [xb, Wb && ` ${Wb}`]
                })]
              }), (0, eb.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, eb.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: zb
              }), (0, PM.M)(Rb) && (0, eb.jsx)(qb.g, {
                tooltipInner: (0, eb.jsx)("div", {
                  children: Ub(null !== ib && ib.includes(Rb) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, eb.jsx)("div", {
                  children: (0, eb.jsx)(NU.w, {
                    isLiked: null !== ib && ib.includes(Rb),
                    onClick: () => {
                      try {
                        if (!ib) return;
                        ib.includes(Rb) ? (dA.b.unfavouriteLobby(Yb, Rb).catch((bb => {
                          console.error("Failed to favourite lobby", bb)
                        })), pb(ib.filter((bb => bb !== Rb)))) : (dA.b.favouriteLobby(Yb, Rb).catch((bb => {
                          console.error("Failed to favourite lobby", bb)
                        })), pb([...ib, Rb]))
                      } catch (bb) {
                        console.error("Failed to like lobby", bb)
                      }
                    },
                    isLoading: null === ib
                  })
                })
              }), (0, eb.jsx)(oM, {})]
            }), (0, eb.jsx)(MM, {
              show: Mb.showFPS
            }), !vb && Mb.showCoordinates && (0, eb.jsx)(YM, {}), !vb && Mb.showChunkCoordinates && (0, eb.jsx)(BM, {}), (0, eb.jsx)(uM, {})]
          }), (0, eb.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, eb.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: ab && (0, eb.jsx)(Cb.b, {})
            })
          })]
        })
      })),
      jE = (0, Ab.memo)((function() {
        (0, yb.e)();
        const bb = (0, Db.l)("RightInfoText"),
          [ab, Ub] = (0, Ab.useState)(null);
        return (0, ja.k)(ab, ".RightElements"), bb.hasText ? (0, eb.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, eb.jsx)(QM, {
            ref: Ub,
            text: bb,
            className: "RightInfoDiv",
            children: (0, eb.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, eb.jsx)(Bb.c, {
                text: bb.content
              })
            })
          })
        }) : null
      }))
  },
  4522: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb
    });
    var Ab = Ub(52),
      Mb = Ub(307),
      Tb = Ub(1812),
      Eb = Ub(1023);

    function Yb(bb) {
      let {
        text: ab
      } = bb;
      const Ub = [];
      let Yb = "";
      return (0, Mb.cc)(ab).forEach(((bb, ab) => {
        if ("string" === typeof bb || !(0, Tb.f)(bb.icon)) return void(Yb += "string" === typeof bb ? bb : bb.icon);
        const Mb = Math.max(0, Yb.trimEnd().search(/\S{1,12}$/));
        Ub.push((0, Eb.jsxs)(Ab.Fragment, {
          children: [Yb.slice(0, Mb), (0, Eb.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Yb.slice(Mb), (0, Eb.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Eb.jsx)(Tb.c, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, ab)), Yb = ""
      })), Ub.push(Yb), (0, Eb.jsx)(Eb.Fragment, {
        children: Ub
      })
    }
  },
  35958: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Pb,
      f: () => vb,
      i: () => Lb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1812),
      Yb = Ub(1023);
    const Bb = 350;
    let eb = 0;

    function vb() {
      return eb += 1, eb
    }

    function Lb(bb, ab) {
      let Ub = 0;
      for (const Ab of bb) "ingredient" !== Ab.kind && Ab.Qv === ab && (Ub += Ab.amount);
      return Ub > 0 ? {
        idx: ab,
        amount: Ub
      } : null
    }

    function Pb(bb) {
      var ab, Ub;
      let {
        anim: Mb,
        onComplete: eb
      } = bb;
      const vb = null !== (ab = Mb.delayMs) && void 0 !== ab ? ab : 0,
        Lb = null !== (Ub = Mb.durationMs) && void 0 !== Ub ? Ub : Bb,
        [Pb, Xb] = (0, Ab.useState)(Mb.from),
        [jb, Rb] = (0, Ab.useState)(0 === vb),
        [kb, yb] = (0, Ab.useState)(!1),
        Zb = (0, Ab.useRef)(!1);
      return (0, Ab.useEffect)((() => {
        let bb, ab;
        const Ub = () => {
            Zb.current = !0, Rb(!0), bb = requestAnimationFrame((() => {
              ab = requestAnimationFrame((() => {
                Xb({
                  x: Mb.to.x,
                  y: Mb.to.y
                }), yb(!0)
              }))
            }))
          },
          Ab = Zb.current ? 0 : vb;
        let Tb;
        Ab > 0 ? Tb = setTimeout(Ub, Ab) : Ub();
        const Eb = setTimeout((() => {
          eb(Mb.id)
        }), Ab + Lb + 50);
        return () => {
          clearTimeout(Tb), cancelAnimationFrame(bb), cancelAnimationFrame(ab), clearTimeout(Eb)
        }
      }), [Mb.id, Mb.to.x, Mb.to.y, eb, vb, Lb]), (0, Yb.jsx)("div", {
        className: Tb()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Mb.kind,
          Waiting: !jb,
          Arrived: kb
        }),
        style: {
          left: Pb.x,
          top: Pb.y,
          "--fly-duration": `${Lb}ms`
        },
        children: (0, Yb.jsx)(Eb.c, {
          itemName: Mb.itemName,
          amount: Mb.amount
        })
      })
    }
  },
  35949: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Qb,
      i: () => rb
    });
    var Ab = Ub(52),
      Mb = Ub(2708),
      Tb = Ub(6188),
      Eb = Ub(1958),
      Yb = Ub(2268),
      Bb = Ub(8403),
      eb = Ub(325),
      vb = Ub(22),
      Lb = Ub(1345),
      Pb = Ub(31),
      Xb = Ub(984),
      jb = Ub.n(Xb),
      Rb = Ub(307),
      kb = Ub(35951),
      yb = Ub(1794),
      Zb = Ub(1858),
      Db = Ub(8241),
      zb = Ub(1023);

    function xb(bb) {
      var ab, Ub;
      let {
        slotIdx: Tb
      } = bb;
      const Eb = (0, Zb.g)("hotbar", (bb => {
          var ab;
          return null !== (ab = bb.items[Tb]) && void 0 !== ab ? ab : null
        })),
        Bb = (0, Zb.g)("hotbar", (bb => bb.ammo)),
        [vb, Lb] = (0, Ab.useState)(!1),
        Pb = (0, Ab.useRef)(null),
        [Xb, Rb] = (0, Ab.useState)(null),
        [kb, xb] = (0, Ab.useState)(null),
        ib = (0, Yb.h)("maxAuraLevel"),
        fb = (0, Mb.d)(),
        mb = (0, Ab.useCallback)((() => {
          if (clearTimeout(Pb.current), Eb) {
            var bb, ab, Ub, Ab;
            const Bb = Eb.displayName,
              vb = [],
              Lb = Array.isArray(Bb) ? Bb : [Bb],
              Pb = {
                fontStyle: null !== (bb = Eb.attributes.customAttributes) && void 0 !== bb && bb.author ? "italic" : "normal"
              };
            for (const bb of Lb) bb.str ? vb.push(bb) : vb.push({
              str: bb,
              style: Pb
            });
            if (null !== (ab = Eb.attributes.customAttributes) && void 0 !== ab && ab.enchantments) {
              vb.push(" ");
              const bb = Object.entries(Eb.attributes.customAttributes.enchantments).sort(((bb, ab) => ab[1] - bb[1])),
                ab = Eb.attributes.customAttributes.enchantmentData;
              for (const [Ub, Ab] of bb) {
                var Mb, Tb;
                const bb = null !== (Mb = null === ab || void 0 === ab || null === (Tb = ab[Ub]) || void 0 === Tb ? void 0 : Tb.icon) && void 0 !== Mb ? Mb : `${Ub} Enchantment`;
                var Yb;
                if (Ab < 4)
                  for (let ab = 0; ab < Ab; ab++) vb.push({
                    icon: bb,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else vb.push({
                  icon: bb,
                  style: {
                    fontSize: "1.5em"
                  }
                }), vb.push(null !== (Yb = (0, eb.O)(Ab)) && void 0 !== Yb ? Yb : Ab.toString())
              }
            }
            Rb(vb), xb(null !== (Ub = null === (Ab = Eb.attributes.customAttributes) || void 0 === Ab ? void 0 : Ab.enchantmentTier) && void 0 !== Ub ? Ub : null)
          } else Rb(null), xb(null);
          Lb(!0), fb();
          const Bb = null === Eb || void 0 === Eb ? void 0 : Eb.attributes.customAttributes;
          void 0 === (null === Bb || void 0 === Bb ? void 0 : Bb.shotsLeft) && (Pb.current = setTimeout((() => {
            Lb(!1)
          }), 2e3))
        }), [null === Eb || void 0 === Eb ? void 0 : Eb.name, Tb, null === Eb || void 0 === Eb ? void 0 : Eb.instance, null === Eb || void 0 === Eb ? void 0 : Eb.displayName]);
      (0, Ab.useEffect)((() => (mb(), () => {
        clearTimeout(Pb.current), Lb(!1)
      })), [null === Eb || void 0 === Eb ? void 0 : Eb.name, Tb, null === Eb || void 0 === Eb ? void 0 : Eb.instance, mb]);
      const pb = null === Eb || void 0 === Eb || null === (ab = Eb.attributes.customAttributes) || void 0 === ab ? void 0 : ab.shotsLeft,
        Nb = void 0 === pb ? null : (0, zb.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${pb}|${Eb.requiresAmmo?`${Bb}x${Eb.clipSize}`:Eb.clipSize}`
        }),
        Wb = (0, Db.j)();
      return (0, zb.jsx)(zb.Fragment, {
        children: vb && Eb && !Wb.showing ? (0, zb.jsxs)("div", {
          className: jb()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === ib,
            Enchanted: null !== kb
          }),
          style: {
            "--enchantmentColour": null !== (Ub = eb.fb[kb]) && void 0 !== Ub ? Ub : eb.fb.None,
            "--duration": kb ? (0, eb.cb)(kb) + "s" : void 0
          },
          children: [kb && (0, zb.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, zb.jsx)(yb.c, {
              text: Xb
            }), Nb]
          }), (0, zb.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, zb.jsx)(yb.c, {
              text: Xb
            }), Nb]
          })]
        }) : null
      })
    }
    var ib = Ub(35958),
      fb = Ub(19),
      mb = Ub(1824),
      pb = Ub(591),
      Nb = Ub(2275),
      Wb = Ub(3079),
      Hb = Ub(3083);
    var Ib = Ub(1969),
      db = Ub(1047),
      Fb = Ub(2313);

    function hb() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Gb = Ub(1370);
    const Qb = (0, Ab.memo)((function() {
      const [bb, ab] = (0, Ab.useState)(0), Ub = (0, Yb.h)("useFullInventory"), Eb = (0, Yb.h)("highlightedHotbarSlots"), {
        isTouchScreen: Bb,
        openInGameMenuName: eb
      } = (0, fb.n)(["isTouchScreen", "openInGameMenuName"]), Pb = null !== eb && "inventory" !== eb, Xb = (0, Zb.k)("fullInventory") && "inventory" === eb, Rb = function() {
        const bb = (0, Ib.e)(((bb, ab) => `${bb}:${(0,db.d)(bb,ab)?"portrait":"landscape"}`)),
          [ab, Ub] = (0, Ab.useState)(hb);
        return (0, Ab.useLayoutEffect)((() => {
          Ub(hb())
        }), [bb]), (0, Lb.f)(Fb.i, (() => {
          Ub(hb())
        })), ab
      }(), yb = Bb && !Rb;
      ! function(bb, ab, Ub) {
        (0, Ab.useLayoutEffect)((() => {
          const Ab = document.documentElement.classList;
          return bb && (Ab.add("TouchHotbar"), Ab.toggle("TouchHotbarKeysAbove", ab), Ab.toggle("TouchHotbarHasBag", Ub)), (0, Wb.h)(), vb.m.IR(Hb.d), () => {
            Ab.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Wb.h)(), vb.m.IR(Hb.d)
          }
        }), [bb, ab, Ub])
      }(Bb, yb, Ub);
      const [Db, Nb] = (0, Tb.b)("changedHotbarUsingNumkeys", !0), Gb = (0, Zb.g)("hotbar", (bb => bb.selectedSlot)), Qb = null !== Gb && void 0 !== Gb ? Gb : bb, Kb = (0, Mb.d)(), ob = (0, Ab.useRef)(null), tb = (0, Lb.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Lb.f)("inventoryDraggedItemUpdated", (bb => {
        ob.current = bb, Kb()
      })), (0, Zb.c)("hotbarScrolled", (bb => {
        null === Gb && sb(bb)
      })), (0, Zb.c)("hotbarSlotRequested", (bb => {
        wb(bb), Nb(!1)
      })), (0, Zb.c)("numberKeyPressed", (() => {
        Nb(!1)
      })), (0, Zb.c)("hotbarDropRequested", (bb => {
        const ab = mb.gameBridge.latest("hotbar").items[Qb];
        if (ab) {
          var Ub;
          const Ab = bb && null !== (Ub = ab.amount) && void 0 !== Ub ? Ub : 1;
          mb.gameBridge.send("removeInventoryItem", {
            slot: Qb,
            amount: Ab,
            drop: !0
          })
        }
      }));
      const wb = bb => {
          mb.gameBridge.send("selectHotbarSlot", bb), ab(bb)
        },
        sb = bb => {
          wb((Qb + bb + pb.m) % pb.m)
        };
      let gb, Cb = null,
        Vb = null,
        Ob = bb => bb => {},
        cb = bb => ab => {
          wb(bb)
        },
        Jb = bb => bb => {},
        nb = [];
      if (Xb) {
        var Sb;
        const bb = ob.current;
        if (null === bb || void 0 === bb || !bb.setHovered) return (0, zb.jsx)("div", {
          className: jb()("HotBarContainer", {
            Touch: Bb,
            KeysAbove: yb
          }),
          children: (0, zb.jsx)("div", {
            className: "HotBar"
          })
        });
        Cb = bb.draggedInfo, Vb = bb.specialItemInfo, Ob = bb.setHovered, cb = bb.pointerDown, Jb = bb.pointerUp, gb = bb.variation, nb = null !== (Sb = bb.craftFlyAnims) && void 0 !== Sb ? Sb : []
      }
      return (0, zb.jsxs)("div", {
        className: jb()("HotBarContainer", {
          Touch: Bb,
          PopupOpen: Bb && Pb,
          KeysAbove: yb
        }),
        children: [(0, zb.jsxs)("div", {
          className: jb()("HotBar", {
            HoverDisabled: tb
          }),
          children: [Bb && (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)(ub, {
              useFullInventory: Ub,
              inventoryOpen: Xb
            }), (0, zb.jsx)(qb, {
              direction: "Previous",
              onPress: () => {
                sb(-1)
              }
            })]
          }), !Bb && (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)(rb, {}), (0, zb.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, zb.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((bb, ab) => (0, zb.jsx)(kb.c, {
              idx: ab,
              draggedInfo: Cb,
              specialItemInfo: Vb,
              craftFlyHoldbackInfo: (0, ib.i)(nb, ab),
              setHovered: Ob(ab),
              pointerDown: cb(ab),
              pointerUp: Jb(ab),
              variation: gb,
              isSelected: ab === Qb,
              hotbarHighlighted: !0 === (null === Eb || void 0 === Eb ? void 0 : Eb.includes(ab)),
              hoverDisabled: tb,
              showNumber: Db && !Bb
            }, ab)))
          }), Bb && (0, zb.jsx)(qb, {
            direction: "Next",
            onPress: () => {
              sb(1)
            }
          }), !Bb && (0, zb.jsxs)(zb.Fragment, {
            children: [(0, zb.jsx)("div", {
              className: "HotBarFiller"
            }), (0, zb.jsx)("div", {
              className: jb()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !Ub
              }),
              onPointerDown: () => {
                vb.m.IR("toggleMenu", "inventory")
              },
              children: (0, zb.jsx)(lb, {})
            })]
          })]
        }), (0, zb.jsx)(xb, {
          slotIdx: Qb
        })]
      })
    }));

    function qb(bb) {
      let {
        direction: ab,
        onPress: Ub
      } = bb;
      return (0, zb.jsx)("div", {
        className: jb()("HotBarArrow", ab),
        ...Gb.e,
        children: (0, zb.jsx)(Eb.d, {
          icon: "Previous" === ab ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: Ub
        })
      })
    }
    const ub = (0, Ab.memo)((function(bb) {
        let {
          useFullInventory: ab,
          inventoryOpen: Ub
        } = bb;
        const Mb = (0, Yb.h)("maxAuraLevel"),
          Tb = (0, Ab.useRef)(null);
        return function(bb, ab, Ub) {
          (0, Ab.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", ab), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [ab]), (0, Ab.useLayoutEffect)((() => {
            const ab = bb.current.closest(".BottomMiddleElements");
            return ab.classList.toggle("TouchInventoryOpen", Ub), () => {
              ab.classList.remove("TouchInventoryOpen")
            }
          }), [bb, Ub])
        }(Tb, (0, Bb.b)(), Ub), (0, zb.jsxs)("div", {
          ref: Tb,
          className: jb()("TouchInventoryKeys", {
            NoAuraBar: 0 === Mb,
            InventoryOpen: Ub
          }),
          children: [(0, zb.jsx)(rb, {
            touchKey: !0
          }), (0, zb.jsx)("div", {
            className: jb()("TouchInventoryKey BagKey", {
              Hidden: !ab
            }),
            ...Gb.e,
            children: (0, zb.jsx)(lb, {
              touchKey: !0
            })
          })]
        })
      })),
      rb = (0, Ab.memo)((function(bb) {
        let {
          touchKey: ab = !1
        } = bb;
        const Ub = (0, Bb.b)();
        return (0, zb.jsx)("div", {
          className: ab ? jb()("TouchInventoryKey ShopKey", {
            Hidden: !Ub
          }) : jb()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !Ub
          }),
          ...ab ? Gb.e : {},
          children: (0, zb.jsx)(Eb.d, {
            icon: (0, eb.Sb)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              Ub && fb.c.set({
                openEverythingMenuName: Rb.j.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Kb(bb) {
      let {
        player: ab
      } = bb;
      return ab.some((bb => null !== bb && eb.Dc.includes(bb.name)))
    }

    function ob(bb) {
      bb.creative || Pb.f.getItem("LogInInventoryRedDotTutorialComplete") || (Kb(bb) ? (vb.m.IR("RedDotOpenInventoryIcon", !0), vb.m.IR("TouchTutorialOpenInventoryIcon", !0)) : (vb.m.IR("RedDotOpenInventoryIcon", !1), vb.m.IR("TouchTutorialOpenInventoryIcon", !1)))
    }
    const lb = (0, Ab.memo)((function(bb) {
      let {
        touchKey: ab = !1
      } = bb;
      const {
        backpackPointerRequested: Ub
      } = (0, fb.n)(["backpackPointerRequested"]);
      (0, Ab.useEffect)((() => {
        ob(mb.gameBridge.latest("inventory"))
      }), []), (0, Zb.c)("inventory", ob);
      const Mb = (0, Nb.m)();
      return (0, Lb.f)("toggleMenu", (bb => {
        Mb.shown && (null !== bb && void 0 !== bb && bb.startsWith("inventory") && Kb(mb.gameBridge.latest("inventory")) ? (Pb.f.setItem("LogInInventoryRedDotTutorialComplete", !0), vb.m.IR("RedDotOpenInventoryIcon", !1), vb.m.IR("TouchTutorialOpenInventoryIcon", !1)) : "shop" === bb && vb.m.IR("showShopTouchTutorial", !1))
      })), ab ? (0, zb.jsx)(Eb.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          vb.m.IR("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: Ub,
        touchIconPosition: "topleft"
      }) : (0, zb.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          vb.m.IR("toggleMenu", "inventory")
        },
        children: (0, zb.jsx)(Eb.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: bb => {
            vb.m.IR("toggleMenu", "inventory"), bb.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: Ub,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35951: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => kb,
      d: () => jb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1816),
      Yb = Ub(1812),
      Bb = Ub(1824),
      eb = Ub(1858),
      vb = Ub(35956),
      Lb = Ub(8917),
      Pb = Ub(1294),
      Xb = Ub(1023);
    const jb = (bb, ab, Ub) => {
      let Ab = ab,
        Mb = !1;
      for (const Tb of Ub)(null === Tb || void 0 === Tb ? void 0 : Tb.idx) === bb && (Mb = !0, Ab > 0 && (Ab -= Tb.amount));
      return {
        displayedAmt: Ab,
        shown: !Mb || Ab > 0
      }
    };
    const Rb = bb => {
        let {
          idx: ab
        } = bb;
        return (0, Pb.o)() ? null : (0, Xb.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: ab < 9 ? ab + 1 : 0
        })
      },
      kb = (0, Ab.memo)((function(bb) {
        var ab, Ub, Ab;
        let {
          idx: Mb,
          setHovered: Pb,
          pointerDown: kb,
          pointerUp: yb,
          draggedInfo: Zb,
          specialItemInfo: Db,
          craftFlyHoldbackInfo: zb,
          defaultIconB64: xb = null,
          variation: ib,
          isSelected: fb = !1,
          hotbarHighlighted: mb = !1,
          hoverDisabled: pb = !1,
          showNumber: Nb = !1,
          showNewDot: Wb = !1
        } = bb;
        const Hb = (0, eb.g)("inventory", (bb => Mb === vb.d ? null : (0, Lb.k)(bb, Mb)));
        let Ib, db, Fb, hb;
        if (Mb === vb.d) Db && (Ib = Db.name, Fb = Db.amount, hb = Db.attributes);
        else if (Hb) {
          var Gb;
          Ib = Hb.name, db = Hb.icon, Fb = null !== (Gb = Hb.amount) && void 0 !== Gb ? Gb : 0, hb = Hb.attributes
        }
        const Qb = null === (ab = hb) || void 0 === ab || null === (Ub = ab.customAttributes) || void 0 === Ub ? void 0 : Ub.enchantmentTier,
          qb = (0, Eb.e)(hb),
          {
            displayedAmt: ub,
            shown: rb
          } = jb(Mb, Fb, [Zb, Db, zb]),
          Kb = Ib && rb,
          ob = void 0 !== ib && function(bb, ab) {
            const {
              enchantable: Ub,
              salvageable: Ab
            } = Bb.gameBridge.latest("stationItems");
            return "Enchanting Table" === bb ? !0 === Ub[ab] : "Salvaging Table" === bb && !0 === Ab[ab]
          }(ib, Ib);
        return (0, Xb.jsxs)("div", {
          className: Tb()("InvenItem", {
            Highlighted: Kb && ob,
            Selected: fb,
            HotbarHighlighted: mb,
            HoverDisabled: pb
          }),
          onPointerEnter: () => {
            null === Pb || void 0 === Pb || Pb(!0)
          },
          onPointerLeave: () => {
            null === Pb || void 0 === Pb || Pb(!1)
          },
          onPointerDown: kb,
          onPointerUp: yb,
          "data-inven-idx": Mb,
          children: [Kb && (0, Xb.jsx)(Yb.c, {
            itemName: null !== (Ab = db) && void 0 !== Ab ? Ab : Ib,
            amount: ub,
            enchantmentTier: Qb,
            bar: qb
          }), Kb && Wb && (0, Xb.jsx)("div", {
            className: "InvenItemNewDot"
          }), Nb && (0, Xb.jsx)(Rb, {
            idx: Mb
          }), xb && !Kb && (0, Xb.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${xb})`
            }
          })]
        })
      }))
  },
  8910: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(325),
      Mb = Ub(8914);

    function Tb(bb, ab, Ub) {
      const Tb = Object.entries(ab).sort(((bb, ab) => ab[1] - bb[1])),
        Eb = (0, Ab.kb)(bb);
      Eb.push(bb ? "\n\n" : "\n");
      for (const [Mb, jb] of Tb) {
        var Yb, Bb, eb;
        const bb = null !== (Yb = null === Ub || void 0 === Ub || null === (Bb = Ub[Mb]) || void 0 === Bb ? void 0 : Bb.icon) && void 0 !== Yb ? Yb : `${Mb} Enchantment`;
        Eb.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Eb.push({
          str: `${Mb} ${null!==(eb=(0,Ab.O)(jb))&&void 0!==eb?eb:jb}\n`
        })
      }
      Eb.push({
        str: "\n"
      });
      for (const [Ab, jb] of Tb) {
        var vb, Lb, Pb, Xb;
        const bb = null !== (vb = null === Ub || void 0 === Ub || null === (Lb = Ub[Ab]) || void 0 === Lb ? void 0 : Lb.icon) && void 0 !== vb ? vb : `${Ab} Enchantment`,
          ab = null !== (Pb = null === Ub || void 0 === Ub || null === (Xb = Ub[Ab]) || void 0 === Xb ? void 0 : Xb.description) && void 0 !== Pb ? Pb : (0, Mb.i)(Ab);
        Eb.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Eb.push({
          str: ab,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Eb.push({
          str: "\n"
        })
      }
      return Eb
    }
  },
  35956: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab,
      d: () => Mb
    });
    const Ab = -1,
      Mb = -2
  },
  8917: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      f: () => Zb,
      g: () => kb,
      k: () => Bb,
      l: () => yb,
      p: () => vb,
      r: () => Pb,
      t: () => Rb,
      w: () => Lb
    });
    var Ab = Ub(307),
      Mb = Ub(591),
      Tb = Ub(325),
      Eb = Ub(3951),
      Yb = Ub(8910);

    function Bb(bb, ab) {
      var Ub;
      let {
        player: Ab,
        chestOrCreative: Mb
      } = bb;
      var Tb;
      return ab < Ab.length ? null !== (Tb = Ab[ab]) && void 0 !== Tb ? Tb : null : null !== (Ub = Mb[ab - Ab.length]) && void 0 !== Ub ? Ub : null
    }

    function eb(bb) {
      var ab;
      return null !== (ab = bb.amount) && void 0 !== ab ? ab : 0
    }

    function vb(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Lb(bb) {
      return !!bb.shiftKey
    }

    function Pb(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const Xb = new Set,
      jb = 50;

    function Rb(bb, ab) {
      var Ub;
      const Ab = null === (Ub = bb[ab]) || void 0 === Ub ? void 0 : Ub.displayName;
      return (0, Mb.I)(Ab) ? "string" !== typeof ab ? "" : (!Xb.has(ab) && Xb.size < jb && (Xb.add(ab), console.warn(`No item called "${ab}", so its hover shows the name as given`)), ab) : Ab
    }

    function kb(bb, ab, Ub) {
      var Bb, eb, vb, Lb, Pb, Xb, jb, kb, yb, Zb, Db, zb, xb, ib;
      const fb = bb.attributes,
        mb = null !== (Bb = null === (eb = ab[bb.name]) || void 0 === eb ? void 0 : eb.rootName) && void 0 !== Bb ? Bb : bb.name,
        pb = null !== (vb = null !== (Lb = fb.customDisplayName) && void 0 !== Lb ? Lb : null === (Pb = ab[bb.name]) || void 0 === Pb ? void 0 : Pb.displayName) && void 0 !== vb ? vb : Rb(ab, mb);
      let Nb = pb;
      const Wb = null === (Xb = fb.customAttributes) || void 0 === Xb ? void 0 : Xb.enchantmentTier;
      Wb && (Nb = (0, Tb.kb)(pb, {
        colour: Tb.fb[Wb]
      }));
      const Hb = null !== (jb = null !== (kb = null !== (yb = function(bb, ab) {
        var Ub;
        if (void 0 === bb || null !== (Ub = ab.customAttributes) && void 0 !== Ub && Ub.author) return bb;
        const Mb = (0, Ab.cc)(bb);
        return Mb.every((bb => "string" === typeof bb)) ? bb : Mb.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(fb.customDescription, fb)) && void 0 !== yb ? yb : null === (Zb = ab[bb.name]) || void 0 === Zb ? void 0 : Zb.description) && void 0 !== kb ? kb : null === (Db = ab[mb]) || void 0 === Db ? void 0 : Db.description) && void 0 !== jb ? jb : "";
      let Ib = Hb;
      if (null !== (zb = fb.customAttributes) && void 0 !== zb && zb.enchantments) Ib = (0, Yb.b)(Hb, fb.customAttributes.enchantments, fb.customAttributes.enchantmentData);
      else if (Ub[mb]) Ib = (0, Tb.kb)(Hb), Ib.push({
        str: "\n"
      }), Ib.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (xb = fb.customAttributes) && void 0 !== xb && xb.mobSettings) {
        var db, Fb;
        const bb = fb.customAttributes.mobSettings;
        var hb, Gb;
        if (Ib = [], (0, Mb.I)(fb.customAttributes.health) || (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: fb.customAttributes.health.toString()
          }), (0, Mb.I)(bb.maxHealth) || (Ib.push({
            str: "/"
          }), Ib.push({
            str: bb.maxHealth.toString()
          }))), !(0, Mb.I)(bb.attackDamage) && bb.attackDamage > 0 && (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: bb.attackDamage.toString()
          })), !(0, Mb.I)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Mb.I)(bb.baseRunningSpeed) || (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) Ib.push({
          str: "\n"
        }), Ib.push({
          str: {
            translationKey: "general:has"
          }
        }), Ib.push({
          str: " "
        }), Ib.push({
          icon: null !== (hb = null === (Gb = bb.tameInfo) || void 0 === Gb ? void 0 : Gb.saddleItemName) && void 0 !== hb ? hb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Ib.push({
            str: "\n"
          }), Ib.push({
            str: "\n"
          }), bb.petInfo && null !== (db = bb.tameInfo) && void 0 !== db && db.supportsFriendship) {
          const ab = Eb.c.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of ab) Ib.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          Ib.push({
            str: "\n"
          });
          const Ub = Eb.c.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Eb.c.hungerLevelIcons[Ub]) Ib.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          Ib.push({
            str: " "
          }), Ib.push({
            str: Eb.c.hungerLevelTranslations[Ub],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (Fb = bb.tameInfo) && void 0 !== Fb && Fb.supportsFriendship) {
          var Qb, qb;
          let ab = null !== (Qb = bb.tameInfo.likedFoods) && void 0 !== Qb ? Qb : [];
          Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Superliked]
            }
          }), Ib.push({
            str: " "
          }), null !== (qb = bb.petInfo) && void 0 !== qb && qb.superlikedFoodKnown ? (Ib.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ab = ab.filter((ab => ab !== bb.petInfo.superlikedFood))) : Ib.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Liked]
            }
          }), Ib.push({
            str: " "
          });
          for (const bb of ab) Ib.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Neutral]
            }
          }), Ib.push({
            str: " "
          });
          for (const Ub of null !== (ub = bb.tameInfo.neutralFoods) && void 0 !== ub ? ub : []) {
            var ub;
            Ib.push({
              icon: Ub,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Disliked]
            }
          }), Ib.push({
            str: " "
          });
          for (const Ub of null !== (rb = bb.tameInfo.dislikedFoods) && void 0 !== rb ? rb : []) {
            var rb;
            Ib.push({
              icon: Ub,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Ib.length > 0 ? (Ib.shift(), Ib.unshift(...(0, Tb.kb)(Hb))) : Ib = (0, Tb.kb)(Hb)
      }
      return {
        name: Nb,
        desc: Ib,
        fontStyle: null !== (ib = fb.customAttributes) && void 0 !== ib && ib.author ? "italic" : "normal"
      }
    }

    function yb(bb, ab, Ub, Ab) {
      const Mb = Bb(bb, Ub),
        Tb = Bb(bb, Ab);
      if (!Mb) return !1;
      const Eb = ab[Mb.name].armourReduction,
        Yb = ab[Tb.name].armourReduction;
      if (Yb === Eb) {
        var eb, vb, Lb, Pb;
        const bb = null !== (eb = null === (vb = Mb.attributes.customAttributes) || void 0 === vb ? void 0 : vb.enchantmentTier) && void 0 !== eb ? eb : "Tier 0",
          ab = null !== (Lb = null === (Pb = Tb.attributes.customAttributes) || void 0 === Pb ? void 0 : Pb.enchantmentTier) && void 0 !== Lb ? Lb : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(ab.replace("Tier ", ""))
      }
      return Eb > Yb
    }

    function Zb(bb) {
      let ab;
      if ("number" === typeof bb) {
        const Ub = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!Ub) return null;
        ab = Ub.getBoundingClientRect()
      } else ab = bb.getBoundingClientRect();
      return {
        x: ab.left + ab.width / 2,
        y: ab.top + ab.height / 2
      }
    }
  },
  8802: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Xb,
      d: () => jb,
      h: () => Rb
    });
    var Ab = Ub(1352),
      Mb = Ub(52),
      Tb = Ub(1238),
      Eb = Ub(4211),
      Yb = Ub(2221),
      Bb = Ub(1134),
      eb = Ub(101),
      vb = Ub(1858),
      Lb = Ub(1254),
      Pb = Ub(1023);

    function Xb(bb) {
      let {
        show: ab,
        onClose: Ub
      } = bb;
      const {
        requestedGameNameWithVariation: Ab,
        lobbyName: Mb,
        shownLobbyName: Tb
      } = (0, vb.k)("connectedGame"), Bb = (0, Yb.e)(Ab, Mb, !1);
      return eb.featureFlags.canUseInviteLinks && (0, Pb.jsx)(Eb.d, {
        show: ab,
        close: Ub,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Pb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Pb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Pb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Pb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Bb ? (0, Pb.jsx)(Lb.b, {}) : Bb, (0, Pb.jsx)("br", {}), "Lobby Name: ", Tb, (0, Pb.jsx)("br", {}), (0, Pb.jsx)("br", {}), (0, Pb.jsx)("br", {}), (0, Pb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Pb.jsx)(jb, {})]
        })
      })
    }

    function jb() {
      var bb;
      const {
        t: ab
      } = (0, Bb.A)(), Ub = null !== (bb = Rb(eb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...", [Tb, Eb] = (0, Mb.useState)(0), [Yb, vb] = (0, Mb.useReducer)((bb => bb + 1), 0);
      return (0, Mb.useEffect)((() => {
        const bb = setTimeout((() => {
          vb()
        }), 1100);
        return () => {
          clearTimeout(bb)
        }
      }), [Tb]), eb.featureFlags.canUseInviteLinks && (0, Pb.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Pb.jsx)("div", {
          className: "InviteLinkInner",
          children: Ub
        }), (0, Pb.jsx)(Ab.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Ub).catch((bb => {
              console.error("Failed to copy invite link:", bb)
            })), Eb(Date.now())
          },
          disabled: Date.now() - Tb < 1e3,
          children: Date.now() - Tb < 1e3 ? ab("general:copied") : ab("general:copy")
        })]
      })
    }

    function Rb(bb) {
      const [ab, Ub] = (0, Mb.useState)(null);
      return (0, Mb.useEffect)((() => {
        if (!bb) return;
        let ab = !0;
        return (0, Tb.y)().then((bb => {
          ab && Ub(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          ab = !1
        }
      }), [bb]), ab
    }
  },
  36343: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => mb
    });
    var Ab = Ub(52),
      Mb = Ub(2268),
      Tb = Ub(1794),
      Eb = Ub(574),
      Yb = Ub(22),
      Bb = Ub(984),
      eb = Ub.n(Bb),
      vb = Ub(35980),
      Lb = Ub(2399),
      Pb = Ub(35988),
      Xb = Ub(2439),
      jb = Ub(2408),
      Rb = Ub(3271),
      kb = Ub(19),
      yb = Ub(1929),
      Zb = Ub(2227),
      Db = Ub(1162),
      zb = Ub(4598),
      xb = Ub(1858),
      ib = Ub(101),
      fb = Ub(1023);
    const mb = (0, Ab.memo)((function() {
      const bb = (0, Mb.h)("lobbyLeaderboardInfo"),
        ab = (0, xb.k)("players"),
        Ub = (0, xb.k)("lobbyLeaderboardRows"),
        Yb = (0, xb.k)("hiddenPlayerNames"),
        Bb = (0, Ab.useRef)(null),
        [eb, vb] = (0, Ab.useReducer)((bb => bb + 1), 0);
      return (0, Ab.useEffect)((() => (0, yb.c)((() => {
        vb()
      }))), []), (0, fb.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, fb.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!bb) return (0, fb.jsx)(fb.Fragment, {});
            const Ab = JSON.parse(JSON.stringify(bb)),
              Mb = [...ab.ids],
              eb = {},
              vb = {};
            for (const bb of Mb) {
              var Lb, Xb;
              eb[bb] = null === (Lb = Ub[bb]) || void 0 === Lb ? void 0 : Lb.colour;
              const ab = null === (Xb = Ub[bb]) || void 0 === Xb ? void 0 : Xb.values;
              ab && (vb[bb] = {
                ...ab
              })
            }
            const jb = Object.keys(Ab);
            jb.sort(((bb, ab) => Ab[bb].sortPriority - Ab[ab].sortPriority)), Mb.sort(((bb, ab) => {
              if (!vb[bb] || !vb[ab]) return 0;
              for (const Ub of jb) {
                const Mb = vb[bb][Ub],
                  Tb = vb[ab][Ub];
                let Eb = 0;
                if ("string" == typeof Mb && "string" == typeof Tb ? Eb = Mb.localeCompare(Tb) : "number" == typeof Mb && "number" == typeof Tb ? Eb = Mb - Tb : "number" == typeof Mb && "string" == typeof Tb ? Eb = 1 : "string" == typeof Mb && "number" == typeof Tb && (Eb = -1), Eb) return Eb * ("ascending" === Ab[Ub].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const bb of Mb) {
              var Rb, kb, xb;
              const {
                name: Ab,
                ranks: Mb,
                cosmetics: Tb
              } = ab.byId[bb], Yb = [], Bb = null !== (Rb = null === (kb = Ub[bb]) || void 0 === kb || null === (xb = kb.tags) || void 0 === xb ? void 0 : xb.flatMap((bb => 0 === bb.length ? bb : [...bb, String.fromCharCode(8198)]))) && void 0 !== Rb ? Rb : [];
              Yb.push(...Bb), Yb.push(...(0, Db.z)(Mb, Ab, (null === Tb || void 0 === Tb ? void 0 : Tb.nameColour) === Eb.b || null === Tb || void 0 === Tb ? void 0 : Tb.nameColour)), vb[bb] ??= {}, vb[bb].name = Yb
            }

            function ib(bb, Ub) {
              if (vb[bb] && void 0 !== vb[bb][Ub]) {
                if ("name" === Ub) {
                  const {
                    name: Ab,
                    cosmetics: Mb
                  } = ab.byId[bb];
                  return (0, fb.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Mb && (0, fb.jsx)(Zb.d, {
                      cosmetics: Mb
                    }), " ", (0, fb.jsx)(Tb.c, {
                      text: vb[bb][Ub],
                      friendBadgeFor: (0, yb.g)(Ab, Yb) ? Ab : void 0
                    })]
                  })
                }
                return (0, fb.jsx)(Tb.c, {
                  text: vb[bb][Ub]
                })
              }
              return ""
            }
            const mb = Object.keys(Ab).filter((bb => !0 !== Ab[bb].hidden)).map((bb => {
              var ab;
              return {
                key: bb,
                header: (0, fb.jsx)(Tb.c, {
                  text: null !== (ab = Ab[bb].displayName) && void 0 !== ab ? ab : ""
                })
              }
            }));
            return (0, fb.jsx)("div", {
              ref: Bb,
              className: "LobbyLeaderboard",
              children: (0, fb.jsx)(zb.b, {
                columns: mb,
                rows: Mb,
                getRowKey: bb => bb,
                renderRow: bb => {
                  const Ub = bb !== ab.localId;
                  return (0, fb.jsx)(pb, {
                    playerId: bb,
                    playerName: ab.byId[bb].name,
                    isOtherPlayer: Ub,
                    opensProfileCard: (0, Pb.g)(Ub, ab.byId[bb].name, Yb),
                    lobbyLeaderboardInfo: Ab,
                    getPlayerValue: ib,
                    playerColors: eb
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function pb(bb) {
      let {
        playerId: ab,
        playerName: Ub,
        isOtherPlayer: Mb,
        opensProfileCard: Tb,
        lobbyLeaderboardInfo: Eb,
        getPlayerValue: Bb,
        playerColors: yb
      } = bb;
      const Zb = (0, Ab.useRef)(null);
      (0, Ab.useEffect)((() => () => {
        Lb.e.closeIfOwner(Zb)
      }), []);
      const Db = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Yb.m.IR("OpenReportMenu", {
              playerEId: ab,
              playerName: Ub,
              fE: null,
              serverChatMsgId: null
            })
          }
        },
        zb = () => ({
          ...(0, Pb.d)(ab, Ub),
          showLocation: !1,
          status: null,
          extraActions: [Db],
          friendRequestSource: "leaderboard"
        });
      return (0, fb.jsxs)("tr", {
        ref: Zb,
        "data-pad-focusable": Tb || void 0,
        [Lb.g]: Tb || void 0,
        onClick: Tb ? () => {
          var bb;
          Lb.e.toggle(Zb, {
            ...zb(),
            anchor: null !== (bb = Zb.current.querySelector(".PlayerPfpAndName")) && void 0 !== bb ? bb : Zb.current
          })
        } : void 0,
        onContextMenu: Tb ? bb => {
          (0, Xb.h)(Zb, bb, zb(), kb.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Tb ? bb => {
          (0, jb.c)(bb, (() => (0, Pb.d)(ab, Ub).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Eb).map((bb => !0 === Eb[bb].hidden ? null : (0, fb.jsxs)("td", {
          className: eb()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Mb
          }),
          children: [(0, fb.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Bb(ab, bb)
          }), (0, fb.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: yb[ab]
            }
          })]
        }, bb))), Mb && !Tb && (0, fb.jsx)(vb.b, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Zb,
          options: [{
            icon: Db.icon,
            text: Db.text,
            onPointerDown: Db.onClick
          }, ...null === Ub || ib.featureFlags.useSocialFeatures ? [] : (0, Rb.c)(null, Ub)]
        })]
      })
    }
  },
  4455: (bb, ab, Ub) => {
    Ub.d(ab, {
      g: () => Zb,
      e: () => yb
    });
    var Ab = Ub(52),
      Mb = Ub(1345),
      Tb = Ub(1794),
      Eb = Ub(4457),
      Yb = Ub(1023);
    const Bb = (0, Ab.memo)((function(bb) {
      let {
        initialParameters: ab
      } = bb;
      const Ub = (0, Ab.useRef)(null),
        Mb = (0, Ab.useRef)(null),
        Bb = (0, Ab.useRef)(0),
        eb = (0, Ab.useRef)(null),
        vb = ab.description,
        Lb = ab.gb,
        {
          scale: Pb,
          rotation: Xb
        } = null !== ab && void 0 !== ab ? ab : {},
        jb = (0, Eb.f)();
      return (0, Ab.useEffect)((() => {
        const bb = jb.onFrame((() => {
          const bb = jb.getState();
          if (!bb.isActive || !Ub.current || !Mb.current) return;
          const ab = bb.state;
          if (Ub.current.value = ab.progress, ab.clickCount > Bb.current) {
            Bb.current = ab.clickCount;
            const bb = Mb.current;
            bb.classList.add("pulse"), eb.current = setTimeout((() => {
              bb.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(eb.current), bb()
        }
      }), [jb]), (0, Yb.jsx)(Yb.Fragment, {
        children: (0, Yb.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Pb && {
              "--scale": Pb
            },
            ...null !== Xb && {
              "--rotation": `${Xb}deg`
            }
          },
          children: [(0, Yb.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: Ub
          }), (0, Yb.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Mb,
            children: (0, Yb.jsx)(Tb.c, {
              text: [{
                icon: Lb
              }]
            })
          }), (0, Yb.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Yb.jsx)(Tb.c, {
              text: vb
            })
          })]
        })
      })
    }));
    var eb = Ub(984),
      vb = Ub.n(eb);
    const Lb = 2 * Math.PI * 90,
      Pb = (0, Ab.memo)((function(bb) {
        let {
          initialParameters: ab
        } = bb;
        const Ub = (0, Ab.useRef)(null),
          Mb = (0, Ab.useRef)(null),
          Bb = (0, Ab.useRef)(null),
          eb = ab.label,
          Pb = ab.icon,
          Xb = ab.Ob,
          {
            scale: jb,
            rotation: Rb,
            cb: kb
          } = null !== ab && void 0 !== ab ? ab : {},
          yb = (0, Eb.f)();
        return (0, Ab.useEffect)((() => {
          const bb = yb.onFrame((() => {
            var bb, ab;
            const Ab = yb.getState();
            if (!Ab.isActive || !Mb.current) return;
            const Tb = Ab.state,
              Eb = null !== (bb = Tb.timeRemaining) && void 0 !== bb ? bb : 0,
              Yb = null !== (ab = Tb.Vb) && void 0 !== ab ? ab : 1,
              eb = Lb * (1 - Eb / Yb);
            Mb.current.style.strokeDashoffset = `${eb}`, Ub.current && (Ub.current.style.opacity = Eb > 0 ? "1" : "0"), Bb.current && Xb && (Bb.current.textContent = `${(Eb/1e3).toFixed(1)}s`)
          }));
          return () => {
            bb()
          }
        }), [yb, Xb]), (0, Yb.jsxs)("div", {
          className: "QTETimedClick",
          ref: Ub,
          style: {
            ...null !== jb && {
              "--scale": jb
            },
            ...null !== Rb && {
              "--rotation": `${Rb}deg`
            }
          },
          children: [(0, Yb.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Yb.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Yb.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Yb.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Lb,
                ref: Mb
              })]
            }), (0, Yb.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Yb.jsx)(Tb.c, {
                text: [{
                  icon: Pb
                }],
                className: vb()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: kb
                })
              })
            })]
          }), (0, Yb.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Yb.jsx)(Tb.c, {
              text: eb,
              className: "QTETimedClickLabelText"
            }), Xb && (0, Yb.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Bb
            })]
          })]
        })
      })),
      Xb = (0, Ab.memo)((function(bb) {
        let {
          initialParameters: ab
        } = bb;
        const Ub = (0, Ab.useRef)(null),
          Mb = (0, Ab.useRef)(null),
          Bb = (0, Ab.useRef)(null),
          eb = (0, Ab.useRef)(!1),
          vb = ab.description,
          Lb = null === ab || void 0 === ab ? void 0 : ab.icon,
          Pb = (0, Eb.f)();
        return (0, Ab.useEffect)((() => {
          const bb = Pb.onFrame((() => {
            const bb = Pb.getState();
            if (!bb.isActive) return;
            const ab = bb.state;
            if (Ub.current) {
              const bb = 100 * (ab.catchZonePosition - ab.Sb / 2);
              Ub.current.style.left = `${bb}%`, Ub.current.style.width = 100 * ab.Sb + "%", ab.isCatching !== eb.current && (eb.current = ab.isCatching, ab.isCatching ? Ub.current.classList.add("catching") : Ub.current.classList.remove("catching"))
            }
            Mb.current && (Mb.current.style.left = 100 * ab.moverPosition + "%"), Bb.current && (Bb.current.value = ab.progress)
          }));
          return () => {
            bb()
          }
        }), [Pb]), (0, Yb.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Yb.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Yb.jsx)(Tb.c, {
              text: vb
            })
          }), (0, Yb.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Bb
          }), (0, Yb.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Yb.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: Ub
            }), (0, Yb.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Mb,
              children: (0, Yb.jsx)("span", {
                children: Lb && (0, Yb.jsx)(Tb.c, {
                  text: [{
                    icon: Lb,
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
    var jb = Ub(591);
    const Rb = (0, Ab.memo)((function(bb) {
        let {
          initialParameters: ab
        } = bb;
        const Ub = (0, Ab.useRef)(null),
          Mb = ab.label,
          Bb = ab.Ea,
          {
            icon: eb,
            scale: vb,
            rotation: Lb
          } = null !== ab && void 0 !== ab ? ab : {},
          Pb = 100 * (.5 - Bb / 2),
          Xb = 100 * Bb,
          Rb = (0, Eb.f)();
        return (0, Ab.useEffect)((() => {
          const bb = Rb.onFrame((() => {
            const bb = Rb.getState();
            if (!bb.isActive || !Ub.current) return;
            const ab = bb.state;
            Ub.current.style.left = 100 * ab.markerPosition + "%"
          }));
          return () => {
            bb()
          }
        }), [Rb]), (0, Yb.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, jb.I)(vb) && {
              "--scale": vb
            },
            ...!(0, jb.I)(Lb) && {
              "--rotation": `${Lb}deg`
            }
          },
          children: [eb && (0, Yb.jsx)(Tb.c, {
            text: [{
              icon: eb
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Yb.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Yb.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Pb}%`,
                width: `${Xb}%`
              }
            }), (0, Yb.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: Ub
            })]
          }), (0, Yb.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Yb.jsx)(Tb.c, {
              text: Mb
            })
          })]
        })
      })),
      kb = (0, Ab.memo)((function(bb) {
        let {
          initialParameters: ab
        } = bb;
        const Ub = (0, Ab.useRef)(null),
          [Mb, Bb] = (0, Ab.useState)((() => new Array(ab.Ba).fill("pending"))),
          [eb, vb] = (0, Ab.useState)((() => {
            const bb = ab.La;
            return (0, jb.I)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
          })),
          Lb = ab.label,
          {
            icon: Pb
          } = ab,
          Xb = (0, Ab.useRef)(0),
          Rb = (0, Ab.useRef)(0),
          kb = (0, Ab.useRef)([]),
          yb = (0, Eb.f)();
        return (0, Ab.useEffect)((() => {
          const bb = yb.onFrame((() => {
            const bb = yb.getState();
            if (!bb.isActive || !Ub.current) return;
            const ab = bb.state,
              Ab = 30 + 60 * ab.outerCircleProgress;
            if (Ub.current.setAttribute("r", String(Ab)), !0 === ab.lastClickResult && ab.successes > Xb.current) {
              Ub.current.classList.remove("QTERhythmClickOuterCircle--miss"), Ub.current.classList.add("QTERhythmClickOuterCircle--hit");
              const bb = setTimeout((() => {
                var bb;
                null === (bb = Ub.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              kb.current.push(bb)
            } else if (!1 === ab.lastClickResult && ab.misses > Rb.current) {
              Ub.current.classList.remove("QTERhythmClickOuterCircle--hit"), Ub.current.classList.add("QTERhythmClickOuterCircle--miss");
              const bb = setTimeout((() => {
                var bb;
                null === (bb = Ub.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              kb.current.push(bb)
            }
            ab.successes === Xb.current && ab.misses === Rb.current || (Xb.current = ab.successes, Rb.current = ab.misses, Bb((bb => {
              const Ub = [...bb];
              for (let Ab = 0; Ab < ab.Ba; Ab++) Ub[Ab] = Ab < ab.successes ? "success" : "pending";
              return Ub
            })), vb((bb => {
              if (0 === bb.length) return bb;
              const Ub = [...bb];
              for (let Ab = 0; Ab < Ub.length; Ab++) Ub[Ab] = Ab < ab.misses ? "miss" : "pending";
              return Ub
            })))
          }));
          return () => {
            bb();
            for (const bb of kb.current) clearTimeout(bb);
            kb.current = []
          }
        }), [yb]), (0, Yb.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Yb.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Mb.map(((bb, ab) => (0, Yb.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, ab)))
          }), (0, Yb.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Yb.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Yb.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Yb.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: Ub
              })]
            }), Pb && (0, Yb.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Yb.jsx)(Tb.c, {
                text: [{
                  icon: Pb
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), eb.length > 0 && (0, Yb.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: eb.map(((bb, ab) => (0, Yb.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, ab)))
          }), (0, Yb.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Yb.jsx)(Tb.c, {
              text: Lb
            })
          })]
        })
      }));

    function yb(bb) {
      let {
        qte: ab
      } = bb;
      switch (ab.type) {
        case "progressBar":
          return (0, Yb.jsx)(Bb, {
            initialParameters: ab.parameters
          });
        case "timedClick":
          return (0, Yb.jsx)(Pb, {
            initialParameters: ab.parameters
          });
        case "gravityBar":
          return (0, Yb.jsx)(Xb, {
            initialParameters: ab.parameters
          });
        case "precisionBar":
          return (0, Yb.jsx)(Rb, {
            initialParameters: ab.parameters
          });
        case "rhythmClick":
          return (0, Yb.jsx)(kb, {
            initialParameters: ab.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const Zb = (0, Ab.memo)((function() {
      const [bb, ab] = (0, Ab.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Mb.f)("qteStateUpdated", (bb => {
        ab(bb)
      })), bb.isActive && bb.type ? (0, Yb.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Yb.jsx)(yb, {
          qte: bb
        })
      }) : null
    }))
  },
  4457: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      f: () => Bb
    });
    var Ab = Ub(52),
      Mb = Ub(1227),
      Tb = Ub(4462);
    const Eb = {
        getState: () => Tb.e.getCurrentState(),
        onFrame: Mb.j
      },
      Yb = (0, Ab.createContext)(Eb);

    function Bb() {
      return (0, Ab.useContext)(Yb)
    }
  },
  8898: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1858),
      Yb = Ub(1023);

    function Bb(bb) {
      const ab = Math.floor(bb / 3600),
        Ub = Math.floor(bb % 3600 / 60),
        Ab = Math.floor(bb % 60),
        Mb = `${Ub.toString().padStart(2,"0")}:${Ab.toString().padStart(2,"0")}`;
      return ab > 0 ? `${ab}:${Mb}` : Mb
    }
    const eb = (0, Ab.memo)((function(bb) {
      let {
        className: ab
      } = bb;
      const {
        recording: Ub,
        seconds: Ab
      } = (0, Eb.k)("replayRecorder");
      return Ub ? (0, Yb.jsxs)("div", {
        className: Tb()("RecordingIndicator", ab),
        children: [(0, Yb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Yb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Yb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Bb(Ab)
        })]
      }) : null
    }))
  },
  35805: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb,
      d: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(1260),
      Tb = Ub(1134),
      Eb = Ub(1254),
      Yb = Ub(3161),
      Bb = Ub(4616),
      eb = Ub(1023);

    function vb(bb) {
      let {
        loading: ab,
        schematics: Ub,
        onSchematicPicked: Ab,
        selectedSchematicIdList: Mb = [],
        disableAutoExport: Bb
      } = bb;
      const {
        t: vb
      } = (0, Tb.A)();
      return (0, eb.jsxs)("div", {
        className: "SchematicList",
        children: [ab && (0, eb.jsx)(Eb.b, {}), !ab && 0 === Ub.length && (0, eb.jsx)("div", {
          className: "NoSchematicsText",
          children: vb("worldBuilder:noSavedSchematic")
        }), !ab && Ub.map((bb => (0, eb.jsx)(Yb.f, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Ab(bb)
          },
          isSelected: Mb.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Bb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Lb(bb) {
      let {
        ownedSchematics: ab,
        currentWorldSchematicId: Ub,
        onClose: Mb
      } = bb;
      const {
        t: Eb
      } = (0, Tb.A)(), [Yb, Lb] = (0, Ab.useState)(null);
      return (0, eb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Yb && (0, eb.jsxs)(eb.Fragment, {
          children: [(0, eb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Eb("worldBuilder:schematicList")
          }), (0, eb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Eb("worldBuilder:clickSchematicForOptions")
          }), (0, eb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, eb.jsx)(vb, {
              loading: !1,
              schematics: ab,
              onSchematicPicked: bb => {
                Lb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Yb && (0, eb.jsx)(Bb.j, {
          schematic: Yb,
          inSourceWorld: Yb.schematicId === Ub,
          onSchematicUpdate: bb => {
            Lb(bb)
          },
          onClose: () => {
            Lb(null), Mb()
          }
        })]
      })
    }

    function Pb(bb) {
      let {
        ownedSchematics: ab,
        currentWorldSchematicId: Ub,
        onClose: Ab
      } = bb;
      Mb.NotificationProvider.showCustomPopup({
        body: bb => (0, eb.jsx)(Lb, {
          ownedSchematics: ab,
          currentWorldSchematicId: Ub,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Ab,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36256: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => xb,
      g: () => zb
    });
    var Ab = Ub(3970),
      Mb = Ub(1345),
      Tb = Ub(52),
      Eb = Ub(6091),
      Yb = Ub(3961),
      Bb = Ub(1216),
      eb = Ub(1824),
      vb = Ub(1794),
      Lb = Ub(1352),
      Pb = Ub(1134),
      Xb = Ub(36260),
      jb = Ub(984),
      Rb = Ub.n(jb),
      kb = Ub(1238),
      yb = Ub(990),
      Zb = Ub(1213),
      Db = Ub(1023);
    const zb = "SleepingOverlay";

    function xb() {
      const {
        t: bb
      } = (0, Pb.A)(), [ab, Ub] = (0, Tb.useState)(!1), [jb, xb] = (0, Tb.useState)(null), [fb, mb] = (0, Tb.useState)(1), [pb, Nb] = (0, Tb.useState)(!1), [Wb, Hb] = (0, Tb.useState)(!1), Ib = (0, Tb.useRef)(0), db = (0, Tb.useRef)(!1), Fb = (0, Tb.useRef)(!1), hb = (0, Tb.useRef)(), Gb = (0, Tb.useRef)(null);

      function Qb() {
        const bb = null !== jb && void 0 !== jb ? jb : "Rested Speed";
        eb.gameBridge.send("wakeUp", Wb ? bb : null), Gb.current = null, Ub(!1), xb(null), mb(1), Nb(!1), Hb(!1)
      }

      function qb() {
        return !pb && (Qb(), !0)
      }
      return (0, Mb.f)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== Gb.current && (Gb.current = bb, bb === Eb.p.SLEEPING ? (Fb.current || (Ib.current = eb.gameBridge.lookup("cameraZoom", null), Fb.current = !0), db.current = !0, eb.gameBridge.send("setCameraZoom", 3), Ub(!0), mb(function() {
          for (const bb of eb.gameBridge.lookup("blocksStandingOn", null)) {
            if (Xb.d.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (Xb.d.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (Xb.d.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (Fb.current = !1, Ub(!1), xb(null), mb(1)))
      })), (0, Tb.useEffect)((() => () => {
        (0, Bb.g)(zb)
      }), []), (0, Tb.useEffect)((() => {
        ab ? (0, Bb.h)(zb) : ((0, Bb.g)(zb), db.current && (eb.gameBridge.send("setCameraZoom", Ib.current), db.current = !1))
      }), [ab]), (0, Zb.r)("overlay", hb, qb, ab), (0, Db.jsx)(Ab.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ab,
        timeout: 300,
        nodeRef: hb,
        unmountOnExit: !0,
        children: (0, Db.jsx)("div", {
          ref: hb,
          onClick: bb => {
            qb() && bb.stopPropagation()
          },
          children: (0, Db.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Db.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Yb.i.map((ab => (0, Db.jsxs)(ib, {
                restedEffect: ab,
                EY: jb,
                setChosenRestedEffect: xb,
                children: [(0, Db.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Db.jsx)(vb.c, {
                    text: [{
                      icon: ab
                    }]
                  }), Yb.f[ab].shortName]
                }), (0, Db.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(Yb.f[ab].description, {
                    time: Yb.f[ab].effectLevelDurations[fb] / 6e4
                  })
                })]
              }, ab)))
            }), (0, Db.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Db.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Db.jsxs)(Lb.g, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  Wb ? Qb() : (Nb(!0), (0, kb.Z)((() => {
                    Nb(!1), Hb(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: pb,
                children: [!Wb && (0, Db.jsxs)(Db.Fragment, {
                  children: [(0, Db.jsx)(yb.e, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), Wb && bb("classicGame:wakeUp")]
              }), (0, Db.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Db.jsx)("div", {
                  className: Rb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === fb
                  }),
                  children: (0, Db.jsx)(vb.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Db.jsx)("div", {
                  className: Rb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === fb
                  }),
                  children: (0, Db.jsx)(vb.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Db.jsx)("div", {
                  className: Rb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === fb
                  }),
                  children: (0, Db.jsx)(vb.c, {
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
    const ib = (0, Tb.memo)((function(bb) {
      let {
        children: ab,
        restedEffect: Ub,
        EY: Ab,
        setChosenRestedEffect: Mb
      } = bb;
      return Ub === Ab ? (0, Db.jsx)(Lb.m, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: ab
      }) : (0, Db.jsx)(Lb.h, {
        onClick: bb => {
          Mb(Ub), bb.stopPropagation()
        },
        children: ab
      })
    }))
  },
  35988: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb,
      g: () => Bb
    });
    var Ab = Ub(574),
      Mb = Ub(1824),
      Tb = Ub(1552),
      Eb = Ub(101),
      Yb = Ub(1203);

    function Bb(bb, ab, Ub) {
      return Eb.featureFlags.useSocialFeatures && bb && null === (0, Yb.b)(ab, Ub)
    }

    function eb(bb, ab) {
      var Ub, Eb;
      const Yb = Tb.d.getSocialState().friends.find((bb => bb.name.toLowerCase() === ab.toLowerCase())),
        Bb = Mb.gameBridge.latest("players").byId[bb],
        eb = void 0 !== Bb && Bb.name === ab,
        vb = eb && null !== (Ub = Bb.cosmetics) && void 0 !== Ub ? Ub : void 0,
        Lb = Yb && vb ? {
          ...Yb,
          cosmetics: vb
        } : Yb;
      return {
        playerSocialPreview: null !== Lb && void 0 !== Lb ? Lb : {
          isError: !1,
          name: ab,
          ranks: eb ? [...Bb.ranks] : [],
          cosmetics: null !== vb && void 0 !== vb ? vb : {},
          nameColour: null !== (Eb = null === vb || void 0 === vb ? void 0 : vb.nameColour) && void 0 !== Eb ? Eb : Ab.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Yb
      }
    }
  },
  8906: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(4218),
      Mb = Ub(4225);

    function Tb(bb) {
      let {
        children: ab,
        showing: Ub,
        globallyUniqueKey: Tb,
        alwaysMountChildren: Eb = !1,
        doGameplayStartStopOnShow: Yb = !0,
        keepsMovement: Bb = !1
      } = bb;
      return (0, Mb.b)(!0, Ub, Tb, Bb), (0, Ab.c)(Yb, Ub), Ub || Eb ? ab : null
    }
  },
  4598: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1023);

    function Yb(bb) {
      let {
        columns: ab,
        rows: Ub,
        getRowKey: Mb,
        renderRow: Yb,
        className: Bb
      } = bb;
      return (0, Eb.jsxs)("table", {
        className: Tb()("Table", Bb),
        children: [(0, Eb.jsx)("thead", {
          children: (0, Eb.jsx)("tr", {
            children: ab.map((bb => (0, Eb.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Eb.jsx)("tbody", {
          children: Ub.map((bb => (0, Eb.jsx)(Ab.Fragment, {
            children: Yb(bb)
          }, Mb(bb))))
        })]
      })
    }
  },
  36209: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => mb,
      i: () => ib,
      j: () => fb,
      k: () => jb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(75),
      Yb = Ub(1273),
      Bb = Ub(1352),
      eb = Ub(1268),
      vb = Ub(1213),
      Lb = Ub(1134),
      Pb = Ub(36214),
      Xb = Ub(1023);

    function jb(bb) {
      const [ab, Ub] = (0, Tb.useState)((() => (0, Pb.k)(bb)));
      return (0, Tb.useEffect)((() => (Ub((0, Pb.k)(bb)), (0, Pb.M)((() => {
        Ub((0, Pb.k)(bb))
      })))), [bb]), ab
    }

    function Rb(bb, ab) {
      "function" === typeof bb ? bb(ab) : bb && (bb.current = ab)
    }

    function kb(bb) {
      let {
        tutorial: ab,
        step: Ub,
        enabled: Ab = !0
      } = bb;
      const Mb = jb(ab);
      return Ab && Mb === Ub
    }

    function yb(bb, ab) {
      const Ub = (0, Pb.m)(bb),
        Ab = Ub.indexOf(ab);
      return !Ub.slice(Ab + 1).some((ab => (0, Pb.v)(bb, ab)))
    }

    function Zb(bb, ab, Ub, Ab) {
      let {
        tutorial: Mb,
        step: Tb,
        waitForClick: Eb = !1,
        onPrevious: Yb
      } = bb;
      const Bb = ab && (0, Pb.r)(Mb, Tb),
        eb = ab && !yb(Mb, Tb),
        Lb = Eb ? Ab : Ub;
      let Xb = null;
      Bb ? Xb = () => {
        null === Yb || void 0 === Yb || Yb(), (0, Pb.p)(Mb, Tb)
      } : eb && (Xb = () => {
        (0, Pb.h)(Mb)
      }), (0, vb.r)("popup", null !== Lb && void 0 !== Lb ? Lb : Ub, Xb, ab && null !== Lb, null, Bb ? void 0 : "controller:menusSkipTutorial")
    }

    function Db(bb) {
      let {
        tutorial: ab,
        step: Ub,
        text: Ab,
        waitForClick: Mb = !1,
        onPrevious: Tb
      } = bb;
      const {
        t: Eb
      } = (0, Lb.A)(), Yb = yb(ab, Ub);
      return (0, Xb.jsxs)(Xb.Fragment, {
        children: [(0, Xb.jsx)("div", {
          className: "TutorialStepText",
          children: Ab
        }), (0, Xb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Pb.r)(ab, Ub) && (0, Xb.jsx)(Bb.h, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Tb || void 0 === Tb || Tb(), (0, Pb.p)(ab, Ub)
            },
            children: Eb("tutorial:back")
          }), !Mb && (0, Xb.jsx)(Bb.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Pb.e)(Ub)
            },
            padDefaultFocus: !0,
            children: Eb(Yb ? "tutorial:done" : "tutorial:next")
          }), !Yb && (0, Xb.jsx)(Bb.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Pb.h)(ab)
            },
            children: Eb("tutorial:skip")
          })]
        })]
      })
    }
    const zb = 6;

    function xb(bb) {
      let {
        rect: ab,
        margin: Ub
      } = bb;
      const Ab = Math.max(0, ab.top - Ub),
        Mb = ab.bottom + Ub,
        Tb = Math.max(0, ab.left - Ub),
        Eb = ab.right + Ub;
      return (0, Xb.jsxs)(Xb.Fragment, {
        children: [(0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Ab
          }
        }), (0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Mb,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ab,
            left: 0,
            width: Tb,
            height: Mb - Ab
          }
        }), (0, Xb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ab,
            left: Eb,
            right: 0,
            height: Mb - Ab
          }
        })]
      })
    }

    function ib(bb) {
      let {
        target: ab,
        placement: Ub,
        boxRef: Ab,
        className: Bb,
        spotlightMargin: vb = zb,
        children: Lb
      } = bb;
      const {
        getArrowProps: Pb,
        getTooltipProps: jb,
        setTooltipRef: Rb,
        setTriggerRef: kb
      } = (0, Yb.d)({
        placement: Ub,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, vb]
      });
      (0, Tb.useLayoutEffect)((() => {
        kb(ab)
      }), [ab, kb]);
      const yb = function(bb, ab) {
        const [Ub, Ab] = (0, Tb.useState)(null);
        return (0, Tb.useEffect)((() => {
          if (!ab || !bb) return void Ab(null);
          let Ub = 0,
            Mb = null;
          const Tb = () => {
            const ab = bb.getBoundingClientRect();
            Mb && ab.left === Mb.left && ab.top === Mb.top && ab.width === Mb.width && ab.height === Mb.height || (Mb = ab, Ab(ab)), Ub = requestAnimationFrame(Tb)
          };
          return Tb(), () => {
            cancelAnimationFrame(Ub)
          }
        }), [bb, ab]), Ub
      }(ab, !0);
      (0, Tb.useEffect)((() => {
        null === ab || void 0 === ab || ab.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [ab]);
      const Zb = (0, Tb.useCallback)((bb => {
        Rb(bb), Ab && (Ab.current = bb)
      }), [Rb, Ab]);
      return (0, Eb.createPortal)((0, Xb.jsxs)(Xb.Fragment, {
        children: [yb && (0, Xb.jsx)(xb, {
          rect: yb,
          margin: vb
        }), (0, Xb.jsxs)("div", {
          ref: Zb,
          ...jb({
            className: Mb()("tooltip-container SmallTextLight TutorialStep", Bb)
          }),
          children: [Lb, (0, Xb.jsx)("div", {
            ...Pb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, eb.k)())
    }
    const fb = (0, Tb.forwardRef)((function(bb, ab) {
      let {
        placement: Ub = "right",
        children: Ab,
        ...Mb
      } = bb;
      const Eb = kb(Mb),
        Yb = (0, Tb.useRef)(null),
        Bb = (0, Tb.useRef)(null);
      Zb(Mb, Eb, Yb, Bb);
      const [eb, vb] = (0, Tb.useState)(null), Lb = Ab.ref, Pb = (0, Tb.useCallback)((bb => {
        Bb.current = bb, vb(bb), Rb(ab, bb), Rb(Lb, bb)
      }), [ab, Lb]);
      return (0, Xb.jsxs)(Xb.Fragment, {
        children: [(0, Tb.cloneElement)(Ab, {
          ref: Pb
        }), Eb && (0, Xb.jsx)(ib, {
          target: eb,
          placement: Ub,
          boxRef: Yb,
          children: (0, Xb.jsx)(Db, {
            ...Mb
          })
        })]
      })
    }));

    function mb(bb) {
      const ab = kb(bb),
        Ub = (0, Tb.useRef)(null);
      return Zb(bb, ab, Ub, null), ab ? (0, Eb.createPortal)((0, Xb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Xb.jsx)("div", {
          ref: Ub,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Xb.jsx)(Db, {
            ...bb
          })
        })
      }), (0, eb.k)()) : null
    }
  },
  36090: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Eb,
      g: () => Yb,
      j: () => Bb
    });
    var Ab = Ub(52),
      Mb = Ub(1055);
    const Tb = 8,
      Eb = "InGameHeaderContainer",
      Yb = "TopRightElements";

    function Bb(bb) {
      const [ab] = (0, Mb.e)(), [Ub, Bb] = (0, Ab.useState)(!1);
      return (0, Ab.useLayoutEffect)((() => {
        if (!bb) return;
        const ab = document.querySelector(`.${Eb}`),
          Ub = document.querySelector(`.${Yb}`),
          Ab = () => {
            const Ab = bb.getBoundingClientRect(),
              Mb = ab ? ab.getBoundingClientRect().right : 0,
              Eb = Ub ? Ub.getBoundingClientRect().left : window.innerWidth,
              Yb = Ab.left < Mb + Tb,
              eb = Ab.right > Eb - Tb;
            Bb(Yb || eb)
          };
        Ab();
        const Mb = new ResizeObserver(Ab);
        return Mb.observe(bb), ab && Mb.observe(ab), Ub && Mb.observe(Ub), () => {
          Mb.disconnect()
        }
      }), [bb, ab]), Ub
    }
  },
  6188: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(31);

    function Tb(bb, ab) {
      var Ub;
      const [Tb, Eb] = (0, Ab.useState)(null !== (Ub = Mb.f.getItem(bb)) && void 0 !== Ub ? Ub : ab);
      return [Tb, ab => {
        Mb.f.setItem(bb, ab), Eb(ab)
      }]
    }
  },
  36231: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(19),
      Mb = Ub(1238);

    function Tb() {
      const {
        clientEscMenuOptions: bb
      } = (0, Ab.n)(["clientEscMenuOptions"]);
      return (0, Mb.w)() && bb.showChat
    }
  },
  36168: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb
    });
    var Ab = Ub(2549),
      Mb = Ub(3347),
      Tb = Ub(2636);
    const Eb = ["Unable to create vertex buffer"];
    let Yb = {};

    function Bb(bb, ab) {
      const Ub = new Date;
      console.error(`${Ub.getUTCHours()}:${Ub.getUTCMinutes()}:${Ub.getUTCSeconds()}`, bb, ab, null === ab || void 0 === ab ? void 0 : ab.stack), Eb.includes(null === ab || void 0 === ab ? void 0 : ab.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Ab.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${ab.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Tb.logError)("warning", `${bb}\n ${ab} "\n" ${null===ab||void 0===ab?void 0:ab.stack}`);
      const Mb = bb + ab + (null === ab || void 0 === ab ? void 0 : ab.stack);
      Mb in Yb || ((0, Tb.logError)("error", `${bb}\n ${ab} "\n" ${null===ab||void 0===ab?void 0:ab.stack}`), Yb[Mb] = !0)
    }(0, Mb.onGameReset)((() => {
      Yb = {}
    }))
  },
  4531: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Gb,
      g: () => hb
    });
    var Ab = Ub(4536),
      Mb = Ub(307);
    const Tb = 120,
      Eb = 260,
      Yb = 1.15,
      Bb = 1.2,
      eb = 2,
      vb = 1.08,
      Lb = .8,
      Pb = .95,
      Xb = 8,
      jb = "[\"')\\]\u300d\u300f\uff09]*",
      Rb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jb}$`),
      kb = new RegExp(`[?\uff1f]${jb}$`),
      yb = new RegExp(`[!\uff01]${jb}$`),
      Zb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Db = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      zb = new RegExp(`[${Db}]`),
      xb = new RegExp(`[${Db}]|[^${Db}]+`, "g"),
      ib = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fb(bb) {
      let ab = 2166136261;
      for (let Ub = 0; Ub < bb.length; Ub++) ab ^= bb.charCodeAt(Ub), ab = Math.imul(ab, 16777619);
      return (ab >>> 0) / 4294967295 * 2 - 1
    }

    function mb(bb) {
      var ab;
      if (zb.test(bb)) return 1;
      const Ub = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ab = Ub.replace(/[^0-9]/g, "");
      if (Ab.length > 0 && !/\p{L}/u.test(Ub)) return Math.min(Ab.length, 4);
      const Mb = null !== (ab = Ub.match(ib)) && void 0 !== ab ? ab : [];
      if (0 === Mb.length) {
        var Tb, Eb;
        const bb = null !== (Tb = null === (Eb = Ub.match(/\p{L}/gu)) || void 0 === Eb ? void 0 : Eb.length) && void 0 !== Tb ? Tb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Xb)
      }
      const Yb = Ub.replace(/[^\p{L}]/gu, ""),
        Bb = Mb.length > 1 && "e" === Mb.at(-1) && Yb.endsWith("e") && !Yb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Mb.length - (Bb ? 1 : 0), Xb)
    }

    function pb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Nb(bb) {
      const ab = bb.replace(/[^\p{L}]/gu, "");
      return ab.length >= 2 && ab === ab.toUpperCase() && ab !== ab.toLowerCase()
    }

    function Wb(bb, ab) {
      var Ub;
      const Xb = ab && (0, Ab.k)(ab),
        jb = null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.syllableMs) && void 0 !== Ub ? Ub : Ab.b,
        Db = function(bb) {
          const ab = [];
          for (const Ab of (0, Mb.cc)(bb))
            if ("string" === typeof Ab)
              for (const bb of Ab.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  ab.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!zb.test(bb)) {
                  ab.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let Ab = !0;
                for (const Mb of null !== (Ub = bb.match(xb)) && void 0 !== Ub ? Ub : []) {
                  var Ub;
                  const bb = ab.at(-1);
                  Ab || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || zb.test(Mb) || /[\p{L}\p{N}]/u.test(Mb) ? (Ab || ab.push({
                    kind: "space",
                    text: "\u200b"
                  }), ab.push({
                    kind: "word",
                    text: Mb,
                    delayMs: 0
                  }), Ab = !1) : bb.text += Mb
                }
              } else ab.push({
                kind: "icon",
                text: Ab.icon,
                delayMs: 0
              });
          return ab
        }(bb),
        ib = [];
      let Wb = [];
      for (const Ab of Db) "space" !== Ab.kind && (Wb.push(Ab), Rb.test(Ab.text) && (ib.push(Wb), Wb = []));
      ib.push(Wb);
      const Hb = [];
      let Ib = 0;
      for (const Ab of ib) {
        var db, Fb;
        const bb = null !== (db = null === (Fb = Ab.at(-1)) || void 0 === Fb ? void 0 : Fb.text) && void 0 !== db ? db : "",
          ab = kb.test(bb),
          Ub = yb.test(bb),
          Mb = Ab.map((bb => "word" === bb.kind ? mb(bb.text) : 1)),
          Db = Mb.findLastIndex((bb => bb > 0));
        for (const [kb, yb] of Ab.entries()) {
          const bb = "word" === yb.kind,
            Ab = Mb[kb];
          yb.delayMs = Ib;
          for (let Mb = 0; Xb && Mb < Ab; Mb++) {
            const {
              intonation: Tb
            } = Xb;
            let Eb = Db > 0 ? -Tb.declineSemitones * (kb / Db) : 0;
            Eb += fb(`${pb(yb.text)}|${Mb}`) * Tb.variationSemitones;
            const Rb = Math.min(1, Tb.variationSemitones);
            let Zb = Xb.glideSemitones,
              zb = 1;
            Ub && (Eb += Tb.exclaimLiftSemitones, zb *= Yb), ab && kb === Db && (Eb += Tb.questionRiseSemitones * (Ab > 1 ? .5 + .5 * Mb / (Ab - 1) : 1), Mb === Ab - 1 && (Zb = Math.abs(Zb) + Tb.questionRiseSemitones / 2)), bb && Nb(yb.text) && (Eb += eb * Rb, zb *= Bb), Ab > 1 && 0 === Mb && (Eb += Lb * Rb, zb *= vb), Hb.push({
              atMs: Ib + Mb * jb,
              semitones: Eb,
              glideSemitones: Zb,
              durationMs: Mb < Ab - 1 ? Math.min(Xb.durationMs, jb * Pb) : Xb.durationMs,
              level: zb
            })
          }
          Ib += Ab * jb + (Rb.test(yb.text) ? Eb : Zb.test(yb.text) ? Tb : 0)
        }
      }
      return {
        pieces: Db.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: Hb
      }
    }
    var Hb = Ub(1134),
      Ib = Ub(1198),
      db = Ub(1829);

    function Fb(bb) {
      if ("string" === typeof bb) return bb;
      const ab = Ib.f.get().getCurrentLanguageCode();
      return (0, Hb.p)(ab, bb.translationKey, (0, Hb.m)(bb.params, db.c.shown))
    }

    function hb(bb) {
      const ab = void 0 === bb.voice ? null : (0, Ab.n)(bb.voice),
        Ub = ab && (0, Ab.k)(ab);
      return {
        plan: Wb(Fb(bb.line), Ub),
        synth: Ub
      }
    }

    function Gb(bb) {
      const ab = [];
      let Ub = [];
      for (const [Mb, Tb] of bb.entries()) {
        var Ab;
        "space" === Tb.kind && (" " !== Tb.text || "icon" !== (null === (Ab = bb[Mb + 1]) || void 0 === Ab ? void 0 : Ab.kind)) ? (Ub.length > 0 && ab.push(Ub), ab.push([Tb]), Ub = []) : Ub.push(Tb)
      }
      return Ub.length > 0 && ab.push(Ub), ab
    }
  },
  36086: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    const Ab = [{
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

    function Mb(bb, ab, Ub) {
      const Mb = Math.abs(bb - ab),
        Tb = Date.now() - Ub;
      for (const Eb of Ab)
        if (bb < Eb.maxDist) return Mb >= Eb.hardUpdateDist || Tb > Eb.timeBetweenSoftChecks && Mb >= Eb.softUpdateDist;
      return !1
    }
  },
  36277: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      e: () => Tb,
      g: () => Mb
    });
    const Ab = [.25, .5, 1, 2, 4, 8, 16];

    function Mb(bb, ab) {
      const Ub = Ab;
      let Mb = Ub.indexOf(bb);
      return -1 === Mb && (Mb = Ub.findIndex((ab => ab >= bb)), -1 === Mb && (Mb = Ub.length - 1)), "up" === ab ? Ub[Math.min(Mb + 1, Ub.length - 1)] : Ub[Math.max(Mb - 1, 0)]
    }

    function Tb(bb) {
      return bb <= Ab[0]
    }

    function Eb(bb) {
      return bb >= Ab[Ab.length - 1]
    }
  },
  36329: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      d: () => Mb
    });
    const Ab = "data-replay-ui-active",
      Mb = [{
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
  36334: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      i: () => Lb,
      k: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(36329);

    function Eb() {
      const bb = {};
      for (const {
          group: ab
        }
        of Tb.d) bb[ab] = !0;
      return bb
    }
    let Yb = Eb();

    function Bb() {
      Mb.m.IR("replayViewer|uiVisibilityChanged")
    }

    function eb() {
      return Yb
    }

    function vb(bb, ab) {
      Yb[bb] !== ab && (Yb = {
        ...Yb,
        [bb]: ab
      }, "nametag" === bb && Ab.c.set({
        areNametagsHidden: !ab
      }), Bb())
    }

    function Lb() {
      Yb = Eb(), Ab.c.set({
        areNametagsHidden: !1
      }), Bb()
    }
  },
  8951: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Mb,
      l: () => vb
    });
    var Ab = Ub(1485);

    function Mb(bb) {
      var ab;
      return {
        ...Eb.store,
        yaw: Eb.store.yaw + (null !== (ab = Ab.d[bb].previewYaw) && void 0 !== ab ? ab : 0)
      }
    }
    const Tb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Eb = {
        player: Tb,
        store: {
          ...Tb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Yb(bb, ab) {
      bb instanceof Promise ? bb.then(ab).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ab(bb)
    }
    class Bb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ab;
        this.view = bb, null === (ab = this.opened) || void 0 === ab || ab.show(bb)
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class eb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ab;
        return null !== (bb = null === (ab = this.opened) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ab) {
        var Ub;
        null === (Ub = this.opened) || void 0 === Ub || Ub.setCosmetic(bb, ab)
      }
      playEmote(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.playEmote(bb)
      }
      setOrbit(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ab;
        await this.ready, await (null === (ab = this.opened) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const vb = new class {
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
        return new Bb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Bb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Bb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ab) {
        return new eb(this.current().openCharacter(bb, ab))
      }
    }
  },
  8945: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab.d,
      h: () => Ab.h,
      l: () => Ab.l
    });
    var Ab = Ub(8951);
    class Mb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Tb {
      constructor() {
        this.mobScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(153)]).then((() => Ub(40179))))), this.characterScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(152)]).then((() => Ub(40271)))))
      }
      openMob(bb) {
        return this.mobScene.run((ab => ab.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ab => ab.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ab => ab.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ab) {
        return this.characterScene.run((Ub => Ub.openCharacterPreview(bb, ab)))
      }
    }
    Ab.l.setDefaultHost((() => new Tb))
  },
  36160: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    const Ab = new Map;

    function Mb(bb) {
      var ab;
      return null === bb ? null : null !== (ab = Ab.get(bb)) && void 0 !== ab ? ab : null
    }

    function Tb(bb, ab) {
      return Ab.set(bb, ab), () => {
        Ab.get(bb) === ab && Ab.delete(bb)
      }
    }
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  36294: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Sa,
      d: () => na
    });
    var Ab = Ub(3959),
      Mb = Ub(591),
      Tb = Ub(3415),
      Eb = Ub(3439),
      Yb = Ub.n(Eb);
    const Bb = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      eb = "EV_boolean",
      vb = "EV_double",
      Lb = "EV_string",
      Pb = "EV_doubleArr",
      Xb = "EV_armour",
      jb = "EV_other",
      Rb = "EV_cosmetics",
      kb = "OEV_boolean",
      yb = "OEV_int",
      Zb = "OEV_double",
      Db = "OEV_string",
      zb = "OEV_stringArr",
      xb = "OEV_meshScaling",
      ib = "IV_int",
      fb = "IV_string",
      mb = "IV_doubleArr",
      pb = "IV_double",
      Nb = "HV_int",
      Wb = "HV_slots",
      Hb = "EnvV_string",
      Ib = "EnvV_double",
      db = "EnvV_doubleArr",
      Fb = "EnvV_boolean",
      hb = {
        type: Lb,
        name: Lb,
        position: Pb,
        rotation: Pb,
        scale: vb,
        speed: vb,
        jumping: eb,
        crouching: eb,
        cameraPitch: vb,
        armSwinging: eb,
        heldItemName: Lb,
        heldItemEnchantmentTier: Lb,
        pose: Lb,
        followingEId: Lb,
        ridingVehicleEId: Lb,
        leaderboardTop: Lb,
        meshKind: Lb,
        meshOpts: Lb,
        followingOffset: Pb,
        shouldMatchFollowingEntityRotation: eb,
        meshOffset: Pb,
        baseRenderHeading: vb,
        armour: Xb,
        jH: jb,
        playerCustomisations: Rb,
        variation: Lb,
        metaInfo: Lb,
        soundName: Lb,
        volume: vb,
        refDistance: vb,
        maxHearDist: vb,
        rate: vb,
        aiState: Lb
      },
      Gb = {
        opacity: Zb,
        zIndex: yb,
        overlayColour: Db,
        canSee: kb,
        meshScaling: xb,
        nameTagInfo: Db,
        multilineTextBox: Db,
        hasPriorityNametag: kb,
        ranks: zb,
        nameColour: Db,
        _isAlive: kb,
        _invisibleEffect: kb,
        _invincible: kb,
        killfeedColour: Db,
        hideNameSeed: yb,
        _glowingEffect: kb,
        lockHeadToBody: kb
      },
      Qb = {
        itemName: fb,
        amount: ib,
        position: mb,
        size: pb,
        attributes: fb
      },
      qb = {
        skyBox: Hb,
        fogColourOverride: Hb,
        fogChunkDistanceOverride: Ib,
        cameraTint: db,
        fogOnSkybox: Fb,
        fogBlockDistanceOverride: Ib
      },
      ub = {
        type: "array",
        items: "double"
      },
      rb = {
        type: "array",
        items: "int"
      },
      Kb = {
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
      ob = {
        type: "map",
        values: ub
      };

    function lb(bb, ab) {
      return {
        type: "record",
        name: bb,
        fields: [{
          name: "x",
          type: ab
        }]
      }
    }
    const tb = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lb(kb, "boolean"), lb(yb, "int"), lb(Zb, "double"), lb(Db, "string"), lb(zb, {
              type: "array",
              items: "string"
            }), lb(xb, ob)]
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
            type: ["null", lb(eb, "boolean"), lb(vb, "double"), lb(Lb, "string"), lb(Pb, ub), lb(Xb, Kb), lb(jb, tb), lb(Rb, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      sb = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lb(ib, "int"), lb(fb, "string"), lb(pb, "double"), lb(mb, ub)]
          }]
        }
      },
      gb = {
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
      Cb = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", lb(Nb, "int"), lb(Wb, gb)]
        }]
      },
      Vb = {
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
      Ob = {
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
      cb = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", lb(Hb, "string"), lb(Ib, "double"), lb(db, ub), lb(Fb, "boolean")]
          }]
        }
      },
      Jb = [{
        name: "Qp",
        type: "record",
        fields: [{
          name: "pos",
          type: rb
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
          type: rb
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
      nb = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "mM",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "WM",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "HM",
              type: ["null", "string", ub],
              default: null
            }, {
              name: "IM",
              type: ["null", "double"],
              default: null
            }, {
              name: "dM",
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
          name: "YT",
          type: "string"
        }, {
          name: "BT",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "eT",
          type: "double"
        }, {
          name: "vT",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "nU",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: ub
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Pa",
          type: "string"
        }, {
          name: "oa",
          type: ["null", "double"],
          default: null
        }, {
          name: "la",
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
          name: "NT",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "WT",
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
      Sb = [{
        name: "position",
        type: ub
      }, {
        name: "direction",
        type: ub
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

    function ba() {
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
          values: sb
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Sb
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
              items: Cb
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Vb],
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
              name: "Pa",
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
        type: Ob
      }, {
        name: "environment",
        type: cb
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: Jb
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: nb
        }
      }), bb
    }
    const aa = {
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
                name: "qL",
                type: "int"
              }, {
                name: "position",
                type: ub
              }, {
                name: "direction",
                type: ub
              }, {
                name: "easing",
                type: ub
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
    let Ua;

    function Aa(bb) {
      if (9 === bb) return Ua ??= (ab = [{
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
            name: "hN",
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
              type: rb
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
            fields: ba()
          }
        }
      }, aa], Yb().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: ab
      }, {
        wP: Object.create(null)
      })), Ua;
      var ab
    }
    var Ma = Ub(36300);
    let Ta, Ea, Ya, Ba;
    const ea = 12;
    var va, La;
    const Pa = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", !1, 91, 8191, 88, 13, 14, null, 3, 33554432, 2, 67108864, 4, 16, 108, !0, 109, 110, 15, 105, 60, "=", ";", 10, 5, 11, 9, 127, 128];

    function Xa(bb) {
      return typeof AU !== Pa[5] && AU ? (new AU).decode(new MU(bb)) : typeof TU !== Pa[5] && TU ? TU.from(bb).toString("utf-8") : BU(bb)
    }

    function ja() {}

    function Ra() {
      Ra = function() {}
    }
    var ka, ya;
    Ra(va = {}, La = ["Z?GHNj|q+=*xnPzv.R7:N28D^n?3.^syq$ehxG[]BTC3UB/GpwS6JjK%ax", ";C*yKA[N.{>oGr],j1y&Atnqo{OV75gm>*?Vk23gMx!0jo9}5]", 'Ky3dqz}^ZTDy|@BlC%"&]Y@+', ';&5[7&AE+z@>=Bvpxhi:MVo>LM#ig+VDv&3d"', ":{tD`Kv3HpOkjA=7s`MsaV/f(U>`$9cvhyIinhzf1|", "[w(VWrR}o", '3T,{&P3vI&%rlOMljsx3F2;Xa=KxM7<Rh0Ro$8(>"ncHiGJc>T~3ogYMg>cX]', 'lR&q^Me3q>):LG"BZ`zDBWMXirHP^^)w', "V<9qJrlvO/{R^K|}]M)qKem3_zTtbB2Y", "3C,{CY2>j&_5B2XRk`gy:WvGd0si:<tYNL.v$3~=rubfV@pwT{yt(XC+zp", "JukD_Vl3vxe)Y><5jY$.+04].{)yJGhy<nc.=tuukL{&5o3B8[~q", 'ydi2A;">"nG', 'Rx,6]CS]W&83PWTBV%odpAe=|L,,ox;p9Np[Jrh8nUBH+R"Y.dyt_0EkR}5', "TwwsDs~,Onn(Ir1}I(_.,wZ)ZLEXFcJDYdJ&dza", 'd0w{O2WEz|_|R"Sc?!^oDfLOVOvBGB,lRDjyd2{q+=!XFc]yjC+', 'v*#VfdUvDnEsZ6g%n("&NhpOk|ZdN+', "%{v3l6XNrT(*N!o,o$VoNtd=JLJDzWBNtL:i9?mf68eobWrNL&|dx8z,q", "}w!Bx8jOCnF$@#Bc{6vyY^a,6x3/3<KBea", "Y!jdeVi[1|_sc@yv31]BDhXqST204@>ce0^(`)rO(OyF<<", 'N!_?}e}q$MH"!RO', 'PNY6XGiDt09(9I.G9{GDFt$,c8cP_Be!J<nHaYQ=(HwF5"[B)w;(=', 'fT*Hk7;E)nJdYryDNL+ilc/f"z]{]"YR~1hsx0*v;=', "6(DyA3@)q>j~N+?c[[K?$2~3(", "#<5k;&<kAM6faY75,.F:?InOAx", "Vh;.nru$U{Hk<<(4e*[uh0u36$Qi(R{yk`zHF0z)Ppm[o<rELa", "R{ku&M6}6{", 'r!nqL)5})`,Hy!opjy:i:hp?c&]"]', "5N!kG*1MP>lXaxIE", "j(#yVF[M,>Ms(9zE", "i`wBHzy}t@.PYB5c,[>in3:Gy$L$:ru}tT<", "]&S(mt.+", 'od"(QW)w6$Dq2RrcS0f(<%2U]x7tNhLy~L=ygX>)J08f_>hy<{uvE*kD<', "1%Qs0d}}1/:PICe!(N<", "4L;k)~O?#u,>N7DN%{~o9P)>qO[`?zIBt0^:0iXXkp,V]", "nMmV2*^})u?qY7vG^R=iy&MEpMYpv9#N,z*H", "ZrM3:wsE!L//pP`cocjyz%+l6/Ki#6/$b0ghLGa", "Y!A[;6Kd3&6X@A45=]", "c[N(%c,+2MXsc^H", "oz{ew`g,4u?fkByvd1`s~V^E!0:C;Cyv(*]vsFRq(H", "RCXy%6@>FxK`JC2:Zld.L?@+*{{(6zNcg1:q)*1XtuyB;o", "`{td(Vs]${;PH71}t`{(edYO8p=R=x@!;8X:4~FOp=*?iC!l,]", "`0$Be7Pve$R", ",*Oy$W;cnOZi@!2:V8t!>IK%i?NH$#T:hCU62Rh80?C3]", "?<Qs}eqEI}<Bw<j%`([?rPncaxCq:h`c|MB.v", "g~1d@8w+", "QLR:Qe]5M=F$4K%v<.U(bMT,NT.3c21BDRTi8it3W8_i86>:@z;k=", "ax(t@V|OYT8tth%$dRgyWWsE=0//V~jB)yV3LA_M)$VtkB1}Xs!kO", "y*Q{Z;+g9O13.WUl${<P}W6Oy=", "@zTitXP$p8nXoCG,Epq3M?$+", "+M2BDcx}3}83N2m%[8Bi;ff3D@bfN<tY0%.&j3r^F$_sJo", "q6uB@Gt,R&`fMxs}F[c.xh!u8TQMx!Vw5Teo7*BDE>[", '(N(q]Vrkt@0rgXnE@6)63I~gxn@Bd5pT|hd?[`Jq"/HN)#9ybpRV(g]ANO', '{8cHTXS]6=(*N7a4GD5(t0IdL{~s"xpT=]', 'w&)t^~">/8vF4W!GT8nd0F$)xxOTV~Q:Vp#d7K5}<', "j5=H}Xu,kL1tS@G,MsnVo)`$erzrN7@w{)F3b&#X^?+KaYd7p]", '"[#oPA&+M`7s[>BNuNVoK30$ru', "BhI9l&!3#$XcohQc{$w(", '0L#ob~%Gz?H*n"}B', 'PRVtC[:ubrl@Ux+yudu{.s0$iuO"KX9,', "X&Y6.fDM{V<FPhIw~loi*?q]", "Y<03e2WOq", '8<HPCI[c%=pT1Pew_**Hidk]2x`~H+Ww"[e3w6Z3T}lf_@+,^!&o', "G!lPV>s8?}B>)RY7f(<PiASEQ>ae~XY}?[Ih7&*>S>JAN@B:x]", "6<<i]G=$C{,Fa", 'P(mt&Yg,8>Bq"<NEp&rdK;rNQTsf6R7$0y,;.fT>nOE', "W1vqb~hqtuq*GCYyr<_i2~}qq", "%%RVj1T+/xj8Y>g%j<v:rYmUC/|Tw^#N`LgsG*a", ">%>.wciMtu6t.BW%^hh:~0N]", ",&DVxtI%HL~zDCT:7TiysziE9", "l*Tiu07>C$b", "n=!.8[}q1rA_n#u", "^0a&m8p?+}^tSc?:~y*!KW`3wp2n8,I%7h|.ph+l#@:yLC8:`TI9", "8*+B<da$F=Id[x770*L.S;B}VU40:h+G`[j2eGW8[&4@(RZEx]", '"!I?26P=M=ukMx!:(6|iS;k8"M3f@7aN', ";*p.:&1q:rd.r@oRuN|il6VOq", "^&?38M.vu>wcK6}E`03imt1}F?K2=WNc", "m!.{1cD?N>JmAP3:Tx~o,2#E}{DF*<", "!T)tmhD?wO&yIca$9dZ.Es|]an,B_7w7BLzdOtHGO@", "T[9qN7FMdT{>V>MR]D*d26FDO/_s&O^Bo!<", "JL5&m7D?L=NFAoMv:druWAa", "P&OH^~5D/x$F$2u$RTXyEM7GB066]", ';NA&E^(3pxo(N2rEoM[D"d$d;8mF6Rb}+.[.J7twH@_/jf$TL:`s!', "?&So1f#N}&EX.<+,31dD5jX[HT<P_@R78h.(kAa", "W5{&nw;X+=", "jl7y|g(,:nSGx+c,", "XyN:rYk[wpCntB{$d0M:YKPdLMoF`x5l%*M{", "@6&q?`0>K{aBaY0Dn8&y>z1qIUPi,rBpET;B_dsDm}2rw^>E~(9VzFz$JTl", "r<etHC#D]xcHTx*pe:>u9Ca", "<c2[7RyXBL<[@RT:!&~teAnXPTl", "lh0sE`d)4`F$Jo=7#<w6!WV^|09R[~|Yir3H$", "EC~qIW{}n&V", "Rp4PWW8D@/ji+2QlBh_u$", ":T=itGZ=uLw:s,l!|MW?rYQd!Tu{bBQm)yOVQ29?kpOK@9wR4[gt@dpEq", '<c8[}05XpMVcXGl5)=^{!&GGu>QdF@_p/<=D`zG3"8Dy]', "^%I9I1S]", "![`yzk,u", ":POM:)c4", "}wRjz(A4", "ra{Kj", "(rasxE=u", "qE*3~p~g", "T/l3yFKO", '99_Z"', ">.:Uh(!u", ".D#uSKkM", "S)o#5j7D", "NjizGpPD", "C#bVh", "ZegI", "<eizl!KD", ":#NH", "%eE4M0WD", "D}TVbd4%", "6!TXDF=%", ")>,X3Y0=Rq<y4I_?uvzQnn.h}$KTmU_?}lpj}u)oscT9HOu>U>gWQ", ")>,X3Y0=Rq<y4I_?uvzQnn.h}$KTmU_?yGij11Z%u3<@fp4eC5", "u=8s@6E>oR/[k)S44=5&OD@$.nz;*@~O<aN;}", "H[S$", "tG5c", "2Na`E2}%", "2bvW+E,&", "*VHm+BX^", '"m36', "AGW*Oqm7", ".M,Gea~H", "{_6h5^cM", 'mL)v1/S!"EUdV3WxbofwXX7`K%_8~DWxK5,gKbmc}28yiNbLDL.]w', 'av_B!#H[R9QC]P;FI4bGfft<.cgUS$;FC3x5""Z?I!Q17K]NOd', '"KC*U&>3TPQm2{fnnKqb/xU}yt^zSU</IOcz$', "|mf}"]), Ra(UU = function() {
        var bb, ab, Ub, Ab = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        Ra(bb = void 0, ab = []);
        try {
          Ra(bb = Object, ab[Pa[11]]("".__proto__.constructor.name))
        } catch (MU) {}
        bb: for (Ub = Pa[0]; Ub < Ab[Pa[4]]; Ub++) try {
          var Mb;
          for (bb = Ab[Ub](), Mb = Pa[0]; Mb < ab[Pa[4]]; Mb++)
            if (typeof bb[ab[Mb]] === Pa[5]) continue bb;
          return bb
        } catch (MU) {}
        return bb || this
      }() || {}, AU = UU.TextDecoder, MU = UU.Uint8Array, TU = UU.OX, EU = UU.String || String, YU = UU.Array || Array, BU = function() {
        var bb, ab, Ub = new YU(Pa[39]);
        return Ra(bb = EU[Pa[8]] || EU.fromCharCode, ab = []),
          function(Ab) {
            var Mb, Tb, Eb, Yb;
            for (Ra(Tb = void 0, Eb = Ab[Pa[4]], ab[Pa[4]] = Pa[0]), Yb = Pa[0]; Yb < Eb;) Ra(Tb = Ab[Yb++], Tb <= Pa[38] ? Mb = Tb : Tb <= 223 ? Mb = (31 & Tb) << Pa[7] | Ab[Yb++] & Pa[6] : Tb <= 239 ? Mb = (Tb & Pa[29]) << Pa[10] | (Ab[Yb++] & Pa[6]) << Pa[7] | Ab[Yb++] & Pa[6] : EU[Pa[8]] ? Mb = (Tb & Pa[9]) << 18 | (Ab[Yb++] & Pa[6]) << Pa[10] | (Ab[Yb++] & Pa[6]) << Pa[7] | Ab[Yb++] & Pa[6] : (Mb = Pa[6], Yb += Pa[19]), ab[Pa[11]](Ub[Mb] || (Ub[Mb] = bb(Mb))));
            return ab.join("")
          }
      }()),
      function(bb) {
        return typeof va[bb] === Pa[5] ? va[bb] = function(bb) {
          var ab, Ub, Ab, Mb, Tb, Eb, Yb;
          for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
            var Bb = 'a]+<o9(qu{H|=O@x"p$}TnmN,5!B:Dvy.;%cGR7YwEl4b1)^C62[3?&V`8>rz#0MUL/_*X~hPsdktieFfAKWIjgSQJZ'.indexOf(ab[Yb]);
            if (Bb !== -Pa[1])
              if (Eb < Pa[0]) Eb = Bb;
              else {
                Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                do {
                  Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                } while (Tb > Pa[9]);
                Eb = -Pa[1]
              }
          }
          return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
        }(La[bb]) : va[bb]
      }(94) in ja && function() {
        var bb, ab, Ub, Ab = function(ab) {
          var Ub = [];
          return (ab === Pa[1] || ab >= Pa[23]) && bb(Ub, [], ab, Pa[0]), Ub
        };
        Ra(bb = function(Ab, Mb, Tb, Eb) {
          var Yb;
          for (Yb = Eb; Yb < Tb; Yb++) {
            var Bb;
            if (Mb.length !== Yb) return;
            for (Bb = Pa[0]; Bb < Tb; Bb++) Ub(Mb, [Yb, Bb]) && (Ra(Mb.push([Yb, Bb]), bb(Ab, Mb, Tb, Yb + Pa[1])), Mb.length === Tb && Ab.push(ab(Mb)), Mb.pop())
          }
        }, ab = function(bb) {
          var ab, Ub, Ab = [];
          for (ab = bb.length, Ub = Pa[0]; Ub < ab; Ub++) {
            var Mb;
            for (Ab[Ub] = "", Mb = Pa[0]; Mb < ab; Mb++) Ab[Ub] += bb[Ub][Pa[1]] === Mb ? "Q" : "."
          }
          return Ab
        }, Ub = function(bb, ab) {
          var Ub, Ab = bb.length;
          for (Ub = Pa[0]; Ub < Ab; Ub++) {
            if (bb[Ub][Pa[0]] === ab[Pa[0]] || bb[Ub][Pa[1]] === ab[Pa[1]]) return Pa[12];
            if (Math.abs((bb[Ub][Pa[0]] - ab[Pa[0]]) / (bb[Ub][Pa[1]] - ab[Pa[1]])) === Pa[1]) return Pa[12]
          }
          return Pa[26]
        }, console.log(Ab))
      }(), (() => {
        function bb(bb) {
          return typeof va[bb] === Pa[5] ? va[bb] = function(bb) {
            var ab, Ub, Ab, Mb, Tb, Eb, Yb;
            for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
              var Bb = '9u48z=*_h#Gg%,tamWc@X/&[!2jF]qvrM{pO<El~C7xI;d6BH^Q+swyNY:?SAUZL.JTkP(K"5}nef)D$`>1RVoi3|0b'.indexOf(ab[Yb]);
              if (Bb !== -Pa[1])
                if (Eb < Pa[0]) Eb = Bb;
                else {
                  Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                  do {
                    Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                  } while (Tb > Pa[9]);
                  Eb = -Pa[1]
                }
            }
            return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
          }(La[bb]) : va[bb]
        }
        bb(95) in ja && function() {
          var bb = function(bb) {
            Ra(this.PL = bb, this.length = Pa[0], this.map = {}, this.head = Pa[18], this.tail = Pa[18])
          };
          Ra(bb.prototype.get = function(bb) {
            var ab = this.map[bb];
            return ab ? (this.remove(ab), this.insert(ab.key, ab.val), ab.val) : -Pa[1]
          }, bb.prototype.put = function(bb, ab) {
            this.map[bb] ? (this.remove(this.map[bb]), this.insert(bb, ab)) : this.length === this.PL ? (this.remove(this.head), this.insert(bb, ab)) : (this.insert(bb, ab), this.length++)
          }, bb.prototype.remove = function(bb) {
            var ab, Ub = bb.prev;
            (ab = bb.next) && (ab.prev = Ub), Ub && (Ub.next = ab), this.head === bb && (this.head = ab), this.tail === bb && (this.tail = Ub), delete this.map[bb.key]
          }, bb.prototype.insert = function(bb, ab) {
            var Ub = new List(bb, ab);
            Ra(this.tail ? (this.tail.next = Ub, Ub.prev = this.tail, this.tail = Ub) : (this.tail = Ub, this.head = Ub), this.map[bb] = Ub)
          }, console.log(bb))
        }();
        const ab = Pa[24],
          Ub = bb(96) + bb(97) + bb(98),
          Ab = [Pa[0], Pa[1], Pa[21], Pa[19]].map((ab => {
            bb(99) + "Y" in ja && function() {
              function bb(bb) {
                return bb[Pa[1]] * Pa[22] + (bb[Pa[0]] < Pa[0] ? Pa[20] | bb[Pa[0]] : bb[Pa[0]])
              }

              function ab(bb) {
                switch (((bb & Pa[20]) !== Pa[0]) * Pa[1] + (bb < Pa[0]) * Pa[21]) {
                  case Pa[0]:
                    return [bb % Pa[20], Math.trunc(bb / Pa[22])];
                  case Pa[1]:
                    return [bb % Pa[20] - Pa[20], Math.trunc(bb / Pa[22]) + Pa[1]];
                  case Pa[21]:
                    return [((bb + Pa[20]) % Pa[20] + Pa[20]) % Pa[20], Math.round(bb / Pa[22])];
                  case Pa[19]:
                    return [bb % Pa[20], Math.trunc(bb / Pa[22])]
                }
              }
              let Ub = bb([Pa[21], Pa[23]]),
                Ab = bb([Pa[1], Pa[21]]),
                Mb = Ub + Ab,
                Tb = Mb - Ab,
                Eb = Tb * Pa[21],
                Yb = Eb / Pa[21];
              Ra(console.log(ab(Mb)), console.log(ab(Tb)), console.log(ab(Eb)), console.log(ab(Yb)))
            }();
            let Ab = Pa[0];
            for (let Mb = Pa[19]; Mb >= Pa[0]; Mb--) {
              function Tb(bb) {
                var ab, Ub, Ab, Mb, Tb, Eb, Yb;
                for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
                  var Bb = 'ugOjbZYAoM<}BnX95R,@0VU/>Csrc"q$ktxdWD6yKz!]P~EFGiL(l3Tf{JQ;`^#SH1he_[%I|v).+Nawp7&m*8=4:2?'.indexOf(ab[Yb]);
                  if (Bb !== -Pa[1])
                    if (Eb < Pa[0]) Eb = Bb;
                    else {
                      Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                      do {
                        Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                      } while (Tb > Pa[9]);
                      Eb = -Pa[1]
                    }
                }
                return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
              }

              function Eb(bb) {
                return typeof va[bb] === Pa[5] ? va[bb] = Tb(La[bb]) : va[bb]
              }

              function Yb() {
                console.log((function(bb) {
                  var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb = bb.length;
                  if (Lb < Pa[21]) return Pa[0];
                  if (Ra(ab = Math.max(...bb), Ub = Math.min(...bb)), ab === Ub) return Pa[0];
                  for (Ra(Ab = Array(Lb - Pa[1]).fill(Number.MAX_SAFE_INTEGER), Mb = Array(Lb - Pa[1]).fill(Number.MIN_SAFE_INTEGER), Tb = Math.ceil((ab - Ub) / (Lb - Pa[1])), Eb = Pa[0]), Yb = Pa[0]; Yb < Lb; Yb++) bb[Yb] !== Ub && bb[Yb] !== ab && Ra(Eb = Math.floor((bb[Yb] - Ub) / Tb), Ab[Eb] = Math.min(Ab[Eb], bb[Yb]), Mb[Eb] = Math.max(Mb[Eb], bb[Yb]));
                  for (Ra(Bb = Number.MIN_SAFE_INTEGER, eb = Ub), vb = Pa[0]; vb < Lb - Pa[1]; vb++) Ab[vb] === Number.MAX_SAFE_INTEGER && Mb[vb] === Number.MIN_SAFE_INTEGER || Ra(Bb = Math.max(Bb, Ab[vb] - eb), eb = Mb[vb]);
                  return Bb = Math.max(Bb, ab - eb)
                }))
              }
              Eb(100) in ja && Yb(), Ab = Ab << Pa[2] | Ub[Eb(101) + Eb(102)](ab * Pa[23] + Mb)
            }
            return Ab >>> Pa[0]
          })),
          Mb = (bb, ab) => (function(bb) {
            typeof va[bb] === Pa[5] ? va[bb] = function(bb) {
              var ab, Ub, Ab, Mb, Tb, Eb, Yb;
              for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
                var Bb = 'luXqvA94b#ZkN7VL,DgQ"6*P8Bh|U<SITE`$?c(eY;Oxm/)R_K}.C!>%sfpwn0i@F1G]=~tr[J32+Hy{M^jo&z5:Wad'.indexOf(ab[Yb]);
                if (Bb !== -Pa[1])
                  if (Eb < Pa[0]) Eb = Bb;
                  else {
                    Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                    do {
                      Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                    } while (Tb > Pa[9]);
                    Eb = -Pa[1]
                  }
              }
              return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
            }(La[bb]) : va[bb]
          }(103), bb << ab | bb >>> 32 - ab),
          Tb = (bb, ab, Ub, Ab, Tb) => {
            (function(bb) {
              return typeof va[bb] === Pa[5] ? va[bb] = function(bb) {
                var ab, Ub, Ab, Mb, Tb, Eb, Yb;
                for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
                  var Bb = 'a"MWelsAbYIdhJR.$n@pk01;t5Dxy:6wg}Z&<%F2~8]N{fovO|Hm/_*X(+[rq^B!G,7L9>=uUTzC4#KjV?`)EiPSQc3'.indexOf(ab[Yb]);
                  if (Bb !== -Pa[1])
                    if (Eb < Pa[0]) Eb = Bb;
                    else {
                      Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                      do {
                        Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                      } while (Tb > Pa[9]);
                      Eb = -Pa[1]
                    }
                }
                return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
              }(La[bb]) : va[bb]
            })(104) + "6" in ja && function() {
              var bb = function(bb) {
                var ab, Ub, Ab, Mb, Tb = bb.length;
                for (Ra(ab = [], Ub = Pa[0], Ab = Pa[0], bb.sort(((bb, ab) => bb - ab))), Mb = Pa[0]; Mb < Tb; Mb++)
                  if (!(Mb > Pa[0] && bb[Mb] === bb[Mb - Pa[1]]))
                    for (Ra(Ub = Mb + Pa[1], Ab = Tb - Pa[1]); Ub < Ab;)
                      if (bb[Mb] + bb[Ub] + bb[Ab] < Pa[0]) Ub++;
                      else if (bb[Mb] + bb[Ub] + bb[Ab] > Pa[0]) Ab--;
                else {
                  for (ab.push([bb[Mb], bb[Ub], bb[Ab]]); Ub < Ab && bb[Ub] === bb[Ub + Pa[1]];) Ub++;
                  for (; Ub < Ab && bb[Ab] === bb[Ab - Pa[1]];) Ab--;
                  Ra(Ub++, Ab--)
                }
                return ab
              };
              console.log(bb)
            }(), Ra(bb[ab] += bb[Ub], bb[Tb] = Mb(bb[Tb] ^ bb[ab], Pa[24]), bb[Ab] += bb[Tb], bb[Ub] = Mb(bb[Ub] ^ bb[Ab], Pa[10]), bb[ab] += bb[Ub], bb[Tb] = Mb(bb[Tb] ^ bb[ab], Pa[2]), bb[Ab] += bb[Tb], bb[Ub] = Mb(bb[Ub] ^ bb[Ab], Pa[9]))
          };
        Ba = (bb, Ub, Mb, Eb) => {
          function Yb(bb) {
            return typeof va[bb] === Pa[5] ? va[bb] = function(bb) {
              var ab, Ub, Ab, Mb, Tb, Eb, Yb;
              for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
                var Bb = '8oDcHAtlVYITRvSe$d<wEgP%;OW?5hZ"z9LysNKx@B/_.X76mF[^C=#pJ}~3)2Q1uf:ik>,j+U!&G4M`]0*b|q(ar{n'.indexOf(ab[Yb]);
                if (Bb !== -Pa[1])
                  if (Eb < Pa[0]) Eb = Bb;
                  else {
                    Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                    do {
                      Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                    } while (Tb > Pa[9]);
                    Eb = -Pa[1]
                  }
              }
              return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
            }(La[bb]) : va[bb]
          }
          const Bb = new DataView(Ub[Yb(Pa[30])], Ub[Yb(106) + Yb(107)], ea),
            eb = new Uint32Array(ab);
          Ra(eb[Yb(Pa[25])](Ab), eb[Yb(Pa[25])](bb, Pa[23]), eb[Pa[16]] = Bb[Yb(Pa[27]) + Yb(Pa[28])](Pa[0], Pa[26]), eb[Pa[17]] = Bb[Yb(Pa[27]) + Yb(Pa[28])](Pa[23], Pa[26]), eb[Pa[29]] = Bb[Yb(Pa[27]) + Yb(Pa[28])](Pa[2], Pa[26]));
          const vb = new Uint32Array(ab),
            Lb = new Uint8Array(vb[Yb(Pa[30])]);
          for (let Pb = Pa[0], Xb = Mb; Pb < Eb[Yb(111)]; Pb += ab * Pa[23], Xb++) {
            function jb(bb) {
              var ab, Ub, Ab, Mb, Tb, Eb, Yb;
              for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
                var Bb = ';%7+!xvyB6cFRMHGYDXbW5PA$1msk]tfZ8/,IC&rN~.:9gz"Lh>V2#Un<?TwuipS3(o@=dJ}|`Q{e*Oajq_[)4E^0lK'.indexOf(ab[Yb]);
                if (Bb !== -Pa[1])
                  if (Eb < Pa[0]) Eb = Bb;
                  else {
                    Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                    do {
                      Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                    } while (Tb > Pa[9]);
                    Eb = -Pa[1]
                  }
              }
              return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
            }

            function Rb(bb) {
              return typeof va[bb] === Pa[5] ? va[bb] = jb(La[bb]) : va[bb]
            }
            Rb(112), Ra(eb[Pa[10]] = Xb, vb[Rb(118)](eb));
            for (let yb = Pa[0]; yb < Pa[34]; yb++) {
              Rb(119), Ra(Tb(vb, Pa[0], Pa[23], Pa[2], Pa[10]), Tb(vb, Pa[1], Pa[35], Pa[37], Pa[16]), Tb(vb, Pa[21], Pa[7], Pa[34], Pa[17]), Tb(vb, Pa[19], Pa[9], Pa[36], Pa[29]), Tb(vb, Pa[0], Pa[35], Pa[34], Pa[29]), Tb(vb, Pa[1], Pa[7], Pa[36], Pa[10]), Tb(vb, Pa[21], Pa[9], Pa[2], Pa[16]), Tb(vb, Pa[19], Pa[23], Pa[37], Pa[17]))
            }
            for (let Zb = Pa[0]; Zb < ab; Zb++) vb[Zb] += eb[Zb];
            const kb = Math[Rb(122)](ab * Pa[23], Eb[Rb(123)] - Pb);
            for (let Db = Pa[0]; Db < kb; Db++) {
              function zb(bb) {
                var ab, Ub, Ab, Mb, Tb, Eb, Yb;
                for (Ra(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Pa[0], Tb = Pa[0], Eb = -Pa[1]), Yb = Pa[0]; Yb < Ub; Yb++) {
                  var Bb = '1oHfGTQdFtNZbAOPhLq&@p]IYkB6z}{:K=|w0C_X/4mu<)e9>S+EV3cUMgiJj,~!?`[7a8(#r*2DWs%"l^Rv;y$xn.5'.indexOf(ab[Yb]);
                  if (Bb !== -Pa[1])
                    if (Eb < Pa[0]) Eb = Bb;
                    else {
                      Ra(Eb += Bb * Pa[13], Mb |= Eb << Tb, Tb += (Eb & Pa[14]) > Pa[15] ? Pa[16] : Pa[17]);
                      do {
                        Ra(Ab.push(Mb & Pa[3]), Mb >>= Pa[2], Tb -= Pa[2])
                      } while (Tb > Pa[9]);
                      Eb = -Pa[1]
                    }
                }
                return Eb > -Pa[1] && Ab.push((Mb | Eb << Tb) & Pa[3]), Xa(Ab)
              }

              function xb(bb) {
                return typeof va[bb] === Pa[5] ? va[bb] = zb(La[bb]) : va[bb]
              }
              xb(124), Eb[Pb + Db] ^= Lb[Db]
            }
          }
        }
      })();
    const Za = ["b", 0, 1, "h", 52, 244, "i", "g", 150, 110, 4, 8, 255, "length", 70, 3, "a", 69, "undefined", 197, 63, 6, "fromCodePoint", 7, 12, "push", 129, 2, 19, 231, 77, 9, 91, "e", 8191, 88, 13, 14, "d", 127, 128, 60, "=", ";", 5, "c", 47, 160, 25, 28, 31, 181, 98, 11, 143, 112, 191, 68, 234, 222, 203, 139, "f", 140, 230, 55, 209, 16, 512, 138, 154, 30, 155, 15, 174, 79, 115, 48, 41, 101, 24, 1023, 18, 32, 10, 64, 65535, 165, 166, 207, 119, 162, " "];

    function Da(...bb) {
      return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
        for (fa(bb[Za[13]] = Za[2], bb[Za[5]] = 'hfeoJUMtSCNg0y54R3c*bO2}s>~!=:&7XjKPQpdZHrmiGkBaLFEInqVYDAWTl%,/x`^w9([+{#]1;8$vu|z<@.?"_6)', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[-Za[4]] = bb[Za[0]].length, bb[Za[10]] = [], bb[-Za[8]] = Za[1], bb[Za[9]] = Za[1], bb[Za[7]] = -Za[2]), bb[Za[3]] = Za[1]; bb[Za[3]] < bb[-Za[4]]; bb[Za[3]]++)
          if (bb[Za[6]] = bb[Za[5]].indexOf(bb[Za[0]][bb[Za[3]]]), bb[Za[6]] !== -Za[2])
            if (bb[Za[7]] < Za[1]) bb[Za[7]] = bb[Za[6]];
            else {
              fa(bb[Za[7]] += bb[Za[6]] * Za[32], bb[-Za[8]] |= bb[Za[7]] << bb[Za[9]], bb[Za[9]] += (bb[Za[7]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
              do {
                fa(bb[Za[10]].push(bb[-Za[8]] & Za[12]), bb[-Za[8]] >>= Za[11], bb[Za[9]] -= Za[11])
              } while (bb[Za[9]] > Za[23]);
              bb[Za[7]] = -Za[2]
            } return bb[Za[7]] > -Za[2] && bb[Za[10]].push((bb[-Za[8]] | bb[Za[7]] << bb[Za[9]]) & Za[12]), za(bb[Za[10]])
      }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
    }

    function za(...bb) {
      return bb[Za[13]] = Za[2], typeof AU !== Za[18] && AU ? (new AU).decode(new MU(bb[Za[1]])) : typeof TU !== Za[18] && TU ? TU.from(bb[Za[1]]).toString("utf-8") : BU(bb[Za[1]])
    }

    function xa(...bb) {
      if (bb[Za[13]] = Za[15], bb[Za[1]] === Da(Za[76]) + Za[3]) return bb[Za[2]] + bb[Za[27]]
    }

    function ia() {}

    function fa() {
      fa = function() {}
    }
    fa(ka = {}, ya = [';5&YVpo(SW(^AResPI|SKFTrPAw=LTecK:kN{|NW/q9/.sA="o1X:', 'uI"Czj>aE0Max!kd', "^VuVmp9sDWL(!!k*EIsCG/v/r`G=%l8*U01Xc$gy.V#Sn4%&Fh", "Y`K80QHu1g3{N~N>(}8+Qu?9R0u2t~2!)SE{}a<P05nt9o", "zkF!=uh", 'EL"MYvG&j4/5+5>},K>I8;2svSD>S<R~+,.E|(UyZy<8"5(cvh', "5ALFWKsn:cB7(QGZvI,Fvd3:u4Es[yh&xI^It]kPT3@lVpr*?[xVsd8IPx~Mf", "}IiN~nm0x4kswdK3<m]S%LKnD`A8H<N", '0}jMb<v/N,t&P[W=<mUEdp{B_yaT"dVrr]B;WW?ncCZNu+&s_`@E8AMQlqZ', '!BytJ?o|w*o{loNZNcG:"(^s.*Rb,pid?`AXbEaAJ', "mbZ=a/Xx+y8|kR,:NXAIF8Xsz4H;M~qPgf", '"Ie15Qp|QxW51~`}cX&n?k(rtN', '_3sFbd=&v4_[kLG~"ZoUn82nuAJM$>Hc]kDIy(EcU', "/KG:6aLu.*Jp=oAK", "jV%tn{{MeVmY6lmd/Ts#,8!PPxT5;<H~G+.n@(Tf", "wI8+y|3>QCw#{J", "~:;::+[nLCGTP~K3jpKX1A/fJyu/940", 'H+wqSQ#rNYB=Bp3b!:8]v+Oy;`}WT["2h0^XzQ4*%cQo[y@K|5/Ju|8r**', "u>sM<,`A9V]8{s#d09:YTW/AMy", "FIb]wvcSjlQouPb!}It;F@SQ,Dwu$>8~^#eI#Qmna/kYR+[>", "CP?JZVBW0T5`AR(ptcNIw,d&34Q", "$b_FXu+IaOLn%LZ7VV8~(ldxcleys+Q&%,4M!ASQUx?|z(LH[h", "W}Z=zkyyPlV[@<6RLAhIpuyq>`6|TWu!f]w8?;Hu<C|[,[uKG`T8*", "#,gX6a%yGg[X(JqP&Bn]nWA1M", "*]mIF[9cl,*LyLNbQL9Un/UyqxSIeU&3.LBtLI#I$T|wb{Kp^h", 'Dk"CVZxcDW,gie1>E0#Iz;|PECgM0oV=6q[#Z#g>HW~', "s`xVq/`y.*F(i5V!2B,#udpP2*JV]>Q&/MQ8?kpaL4", "s+BFTWC1GS4p3R2!PlP]jP2?M", "Bb?nR,@KG,:yPe)=Eke14QU(X^p(<+x&AL$nW@I}&/;f=a`QN~Z#0", "7l>{Qa)]oC!t/W1d5/9Y`Q=ST3RKJ+?=v,G7O<0STD68@J_:", 'cl+MY[RQlq77Kp`7OX:]hYUf"WbW!Exs.>T:wv]K?*~', 'I+J:Yp_0]gf{mzi*RVqn";RBaO!!f', "C+S!!PtyAW,c6l+>349:4]$s/l[PU@KQ,9pJR+9W_Ws", "jIP{fq.:<AK", "yJ(+Q9(yC`@cURg~m}l:Tq.3KC6])FYrIh", "s9&Jg|B0/0<8vPcb~b<S_nT}|4Qt#Q%}BM_C", "%327pFZ*N`Oo9<d>&}/JPH<rg3=(3|r>DV6S4dDBGqUvE59>W94VY/NnR0", 'wLqYuQ?9$c7Wboi~YL.=L[+tv4|ca5U>E0.EkFSs:^syVyM7/,o:"dyrLAY', "rH5YO+)H@*", "ZLcI~<frK0kFieLZT~5Y~VmHwl`#G<n=w3?t<kGso", "Y,pN9{6f", "S9;Ew,kf`cgMW(?22IV;O(=SE*p7W%j}y~e", "V0?JX$>rBqB^rRPc!Ho8(QSWdx(FjJ", ";khMCYryJ", '0J"=IW#/A3}Y?|)RO9|XnpLHG`N!^|1*Y}FMm9NQM', "6DEISL.3]bBsv5*=H:XCCARn%ceC$|i~Bp2=&Ht*1`)8u4Tr4Ar!>", "LK.E);.3=OJv5dWm=B)8Zz`}&4Y=f", "NJxMg,(y<*!yK><!jAK{]|0s@VbL|lN~0X+CME),M", "ZV/=:u;0oCaFDTVKQVt$]|0BJy)[}~U7r,bt%W6f", "i`}&izD&R^:nuaEH[ItVqW|f", "M09]a95Wx4F;^|.HKKFM5|V&~,%gsTQcc~C!cEdno", '#7V=v(WsNT7T:RT:u[O=apq.l,(4"e"R63!{e]VccA6q:RQp,CsC_$yf', "@`s1tl>amgv/jLMd5A[=n/ktNYy}}5Yr{TaV#Qh", "!4`V}$Fa$/bKU{u~>f", "ukjXv;4y0O<Eu+/mTC/J", "s:4CbEh", "c4fIpD{n1,Btbo6Py9HIM(ms;D&Yl4C*6K?n@(V&k^o%(LFZLh", "i9;~HVqyFAG;#|A:rL4C,{{n6W75]|P>RA%;G/h", ':C2=Jvatp*soRopsaMm1j.)n[yMb"~opdA|M!', "OM(7)j0x,D;uqLfigc2nT{eSt", '|T.EoK{WvDC9)|9&H9{MCAG0[*:Yn4#d9#ESwB"PFlgz&F(shCn:6+4f', "upMtk8WBIA2ILTQ7U~F!3dh", "~CZ##($W4c", "U02;xl,M~T{8RTk*sI[7sdQuN5^[7eosJ0aJizya/D$>IW7m!9Bns", "G3s$B[frJ*quI5`pYoBY&+rttxuB?(6rLI~!1(q/J", "e0)S8]McoV)wgef}l71q>nMm`/rT>J7sib/J|Y<tmT%#L<!m;`(tdu[ciS", "C}FIZ9jPxAG(H!dcuDK!VKWHcCl/gdy!z#YC#LLe", "G7G]9Q5WFlAJ8{bK=+$n2dQ0UNd;x4^s3IAVov5sI*JK(J", "zk~!HF]MS`<>R!b!{3}nvQSnBDc1h", "tB2n!ATy&^tME>$HqK+=@kt>>3`>a5RbM]Z#IZs&#WuF0oy", "rI{VTBwfWg`#f@5", "=`[JtKQnJ", '70=]TI(t8D5N}E4ZAIb8iV^B]3[F?>p&*/$n0L9B8SBtLo|Z[M"#Z9`(yTY;h', "i:lNO<7rkOq(](6}JVaVuEj:SW##f", "v3?+c(PP9A*M(L(*%Cv=!", "pLAV9vLH(xypHofcQ+<]7T7(ulOv^WHdq~}=j%YrRO+[iTAPGAH!q@h", "1`btV{cSB/6AuaSduMJELDa*r,s,{T5", ">}uFQa(tQC=bCl>}DIeI<(CrQVtv.sfp{VsjyE#:JA8Qf", '+7$JHP^M~3*{"<6}EK?7L@4>n*', "NA[+3QRS+y7(Xoesk}$tg]p|3Ago(lI!Sf", '8T<:U(?H.V51RoNZdl[J{Q"rnxB#s{:}qCDFD[Snty2W}~#Zw3q]VpD]J', 'aHTXQadc0Ofz"[>="3tnK#oquAluwW_=H~dJ&', "4H.+/]=StW@[$~wQhV=7y;MS4^6fORn!+oLVo,De", "~~+#!a0Sj^vlJoC", "&BS&^QO*FlR!W%zHbIc!.TB05On#A>*HJJJNlZ<t$Te{>|1ZM],YmD3q_3Q", "T`p=OALnmgx#n<Hd*IqtbdT1J", "`KvFE9kasy$SQTIr8I>1({[nv4?8EW}:kIRj[lOaIxkOALM", ">9LV,K?9^V{g>JwQ2A<~4+)BQVX3L4~r=K317TK]IC*&)|j34f", "CP]X>.Q&YbLs=o", "}~}F]dYr0,59pF*KZ+|IQPxWJAGnM%S7", "XAW8|db]eV;Bu<N>l,}J#|Vcc/7;MEz=YVJ],BKe", "uIIqAqMSfc8Q,yH709;][YQeQCUvE55", 'c::]@T,c^CpL$(fQ/9PX"AG&3c"w!+6ReJVJ0,y(Oye{P<gd/,6M', '|`K8Yv6v1`$q4~e&IKD#>$"rB^#Dh4tsKKG:R+F.13bvBe', "40Y;?nd0bx0vK>fpmMEInDh", "AKxCS;(yR0={gEf3rMp7rFLcS`=79!)Q2]Q8}dh", "qVgNN,[MGSf1;sMs%`9~r%]HkS=(EWTPRV~IM{h", "y+qta[qrHWE5H!f7|[kYVB)Htbw#XJ<=Dh", '|L.t>nz?w*1[*E?rg}m1zk!rNY@UPdxc"3WS', "bIU7BF4*J", "!VQ:&H`}~3B3fLZd%,sIwBLB44", "5J5;hZf(PCOpB>OHNiV7O.~sF4teG!4", "*+!N@kh", "@Zl]{L~sC`3{={Q7", "V9E8dayrUVdNP~z!3ASj],ytzVV/d%O!2l,;M(YfL4?8b<(>QCqY`{l&U", "/ToXk8,&wx<wnJW=W9aC", "~~L#0([9py6f%Q^c%9AIN(znK/v[ZeLK0f", '_ZaC6T$MbxE#0ad>6ToNVDhc"xS%oz;d40"C;<cx]bjb"~Cd{h', "7B<Xf{Za.Vb7uo`cgF5;_+OfTD*WrJQpmH8Ea[}f:,b{Ds4", "uT[#<+LcjVkO*5u~7pN1nIun+xn#*5.r[mSCg(:PQVP(f", '"TK1t,`:s3#>iW7:hPCMg]A.jCHPh!U>)Ly;";/P"b]>3{S*%H`Vpabe', "P]y]<<vyUN5W=o", "loK{ULss`lX(PT!3rL&J:", ".`o{IZ(A,gWFGal&FCf1u+OaR/V/@4WQo0<:/KVB$TF,@TK&+5kNJBh", "H`RI3(;WZWw4l!bKfAo:vYTP/4%n>JS~Sce", "l`#XBW5e", "?bv;,]Yf", "|<huEHvD", "x:KuoZiR", "}T^Oos1D", "ovhuAlBD", "p,M}T3FD", "3UYN}OR", "4<i`F+g:GTK&bPT>", '^Uj[e"d9W]:cSI]"', "x0EqMB4Bv]w]*D@M", "|:#GfO1%5:lq<F_z", 'o%>[F+=:"upq}y0', "UV+py58N", "YT>I5W=c", "qoMX5%jl", "FiLDnAG)[", "JAR}NA/ww", "NiF`rAQB&", "9vI`&P!", ")DX^**in+,d", "sLPwA_kl", "Bi3}F_Rl", "XLeQ", "LLKd>_`l", "_!c|M", "GL.Xm|K", "GLS5<@ol", "ILmQ", "[1?0,}_,", "1]uJtzri", "CUHuln|R", "&oDT", '("?X>*!7aVKBmR', "$T@irf[o;1,+cR", "ZZ&Xrf=MlTAj]X", "Ir@I6*AbLc4KnR", 'n"wj;K[o=TA10R', "uv]A&,Q~Dv=", "cxVZ/d4I", "Y2k93UeT", "&sF&PbuT", "|;6qN", "&sF&+4@A", "tJk.8", "uF`J{o]N{2LGzoP[", 'JlIzx2,gCV"qKV_u', "dF4te>2QMd$$.=l(", "Ulwq~;D1$TO?=PFl", "qo]>&<]v&A~;H;J", "Zc6Zf:!YZ0", "[f$5Pxai", "<&g@", ",cI@r", "xhM@", "gf2ZX|$", "sDwp+hiE", "U]DG(Fai"]), fa(UU = function(...bb) {
      fa(bb[Za[13]] = Za[1], bb[Za[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[Za[2]] = void 0, bb[-Za[14]] = []);
      try {
        fa(bb[Za[2]] = Object, bb[-Za[14]][Za[25]]("".__proto__.constructor.name))
      } catch (ya) {}
      bb: for (bb[Za[15]] = Za[1]; bb[Za[15]] < bb[Za[16]][Za[13]]; bb[Za[15]]++) try {
        for (bb[Za[2]] = bb[Za[16]][bb[Za[15]]](), bb[-Za[17]] = Za[1]; bb[-Za[17]] < bb[-Za[14]][Za[13]]; bb[-Za[17]]++)
          if (typeof bb[Za[2]][bb[-Za[14]][bb[-Za[17]]]] === Za[18]) continue bb;
        return bb[Za[2]]
      } catch (ya) {}
      return bb[Za[2]] || this
    }() || {}, AU = UU.TextDecoder, MU = UU.Uint8Array, TU = UU.OX, EU = UU.String || String, YU = UU.Array || Array, BU = function(...bb) {
      return fa(bb[Za[13]] = Za[1], bb[-Za[26]] = new YU(Za[40]), bb[Za[0]] = EU[Za[22]] || EU.fromCharCode, bb[-Za[19]] = []),
        function(ab) {
          var Ub, Ab, Mb, Tb;
          for (fa(Ab = void 0, Mb = ab[Za[13]], bb[-Za[19]][Za[13]] = Za[1]), Tb = Za[1]; Tb < Mb;) fa(Ab = ab[Tb++], Ab <= Za[39] ? Ub = Ab : Ab <= 223 ? Ub = (Ab & Za[50]) << Za[21] | ab[Tb++] & Za[20] : Ab <= 239 ? Ub = (Ab & Za[73]) << Za[24] | (ab[Tb++] & Za[20]) << Za[21] | ab[Tb++] & Za[20] : EU[Za[22]] ? Ub = (Ab & Za[23]) << Za[82] | (ab[Tb++] & Za[20]) << Za[24] | (ab[Tb++] & Za[20]) << Za[21] | ab[Tb++] & Za[20] : (Ub = Za[20], Tb += Za[15]), bb[-Za[19]][Za[25]](bb[-Za[26]][Ub] || (bb[-Za[26]][Ub] = bb[Za[0]](Ub))));
          return bb[-Za[19]].join("")
        }
    }()), (() => {
      function bb(...bb) {
        return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
          for (fa(bb[Za[13]] = Za[2], bb[-Za[30]] = 'R,DUG{095u@*%X<y?:SzMxlpK2P[nao#N^>"$+FeB;k)fL1EV`jcQ]T}6J4mv!78ir(YH_OZ&t.AqdsWhI3C/=bg|w~', bb[Za[27]] = "" + (bb[Za[1]] || ""), bb[-Za[29]] = bb[Za[27]].length, bb[Za[38]] = [], bb[Za[33]] = Za[1], bb[Za[21]] = Za[1], bb[Za[3]] = -Za[2]), bb[Za[11]] = Za[1]; bb[Za[11]] < bb[-Za[29]]; bb[Za[11]]++)
            if (bb[Za[31]] = bb[-Za[30]].indexOf(bb[Za[27]][bb[Za[11]]]), bb[Za[31]] !== -Za[2])
              if (bb[Za[3]] < Za[1]) bb[Za[3]] = bb[Za[31]];
              else {
                fa(bb[Za[3]] += bb[Za[31]] * Za[32], bb[Za[33]] |= bb[Za[3]] << bb[Za[21]], bb[Za[21]] += (bb[Za[3]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                do {
                  fa(bb[Za[38]].push(bb[Za[33]] & Za[12]), bb[Za[33]] >>= Za[11], bb[Za[21]] -= Za[11])
                } while (bb[Za[21]] > Za[23]);
                bb[Za[3]] = -Za[2]
              } return bb[Za[3]] > -Za[2] && bb[Za[38]].push((bb[Za[33]] | bb[Za[3]] << bb[Za[21]]) & Za[12]), za(bb[Za[38]])
        }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
      } [][Za[13]] = Za[1];
      const ab = Za[31],
        Ub = bb(117) + bb(118) + bb(Za[90]) + bb(120) + bb(121) + bb(122),
        Ab = {
          [Za[31]]: bb(123) + bb(124) + bb(125) + bb(126) + bb(Za[39])
        },
        Mb = (...bb) => {
          bb[Za[13]] = Za[2],
            function(...bb) {
              return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
                for (fa(bb[Za[13]] = Za[2], bb[Za[2]] = 'uNePrpniQDXOsdYUCEKRGgZ~24LfA!@<am`F=$]bq_3B}9|zIh&.1[VWx0{">)Tv;S?8%yj(5wl+,o#JHM6/ck7t^*:', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[Za[15]] = bb[Za[0]].length, bb[-Za[39]] = [], bb[Za[24]] = Za[1], bb[Za[21]] = Za[1], bb[Za[23]] = -Za[2]), bb[Za[11]] = Za[1]; bb[Za[11]] < bb[Za[15]]; bb[Za[11]]++)
                  if (bb[Za[31]] = bb[Za[2]].indexOf(bb[Za[0]][bb[Za[11]]]), bb[Za[31]] !== -Za[2])
                    if (bb[Za[23]] < Za[1]) bb[Za[23]] = bb[Za[31]];
                    else {
                      fa(bb[Za[23]] += bb[Za[31]] * Za[32], bb[Za[24]] |= bb[Za[23]] << bb[Za[21]], bb[Za[21]] += (bb[Za[23]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                      do {
                        fa(bb[-Za[39]].push(bb[Za[24]] & Za[12]), bb[Za[24]] >>= Za[11], bb[Za[21]] -= Za[11])
                      } while (bb[Za[21]] > Za[23]);
                      bb[Za[23]] = -Za[2]
                    } return bb[Za[23]] > -Za[2] && bb[-Za[39]].push((bb[Za[24]] | bb[Za[23]] << bb[Za[21]]) & Za[12]), za(bb[-Za[39]])
              }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
            }(Za[40]) + "Q" in ia && function(...bb) {
              bb[Za[13]] = Za[1]
            }();
          const ab = Ab[bb[Za[1]]];
          if (!ab) {
            function Ub(bb) {
              var ab, Ub, Ab, Mb, Tb, Eb, Yb;
              for (fa(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = Za[1], Tb = Za[1], Eb = -Za[2]), Yb = Za[1]; Yb < Ub; Yb++) {
                var Bb = '!9wevF[&3.`~|B4V,U15YI_t;HX]0NdnmRj2J@f{6pSil+8DKM#bsTz?*xZ(/=yQEaO<W)}A%huroCL$>"gP7^kcqG:'.indexOf(ab[Yb]);
                if (Bb !== -Za[2])
                  if (Eb < Za[1]) Eb = Bb;
                  else {
                    fa(Eb += Bb * Za[32], Mb |= Eb << Tb, Tb += (Eb & Za[34]) > Za[35] ? Za[36] : Za[37]);
                    do {
                      fa(Ab.push(Mb & Za[12]), Mb >>= Za[11], Tb -= Za[11])
                    } while (Tb > Za[23]);
                    Eb = -Za[2]
                  }
              }
              return Eb > -Za[2] && Ab.push((Mb | Eb << Tb) & Za[12]), za(Ab)
            }

            function Mb(...bb) {
              return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = Ub(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
            }
            throw new Error(Mb(131) + Mb(132) + Mb(133) + Mb(134) + bb[Za[1]])
          }
          return [Za[1], Za[2], Za[27], Za[15], Za[10], Za[44], Za[21], Za[23]].map(((...bb) => (bb[Za[13]] = Za[2], parseInt(ab[function(...bb) {
            return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
              for (fa(bb[Za[13]] = Za[2], bb[Za[2]] = '1OZCfv7.l@5u(isX}3=Lc/pBIj?<yYb)aV#&Fq+:6mA$rM{HxoTdGn9NRWQ]D%|t,2eSk~wJK"z;^PU_`*840Eg>h[!', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[Za[45]] = bb[Za[0]].length, bb[Za[38]] = [], bb[Za[44]] = Za[1], bb[-Za[47]] = Za[1], bb[Za[23]] = -Za[2]), bb[Za[11]] = Za[1]; bb[Za[11]] < bb[Za[45]]; bb[Za[11]]++)
                if (bb[-Za[46]] = bb[Za[2]].indexOf(bb[Za[0]][bb[Za[11]]]), bb[-Za[46]] !== -Za[2])
                  if (bb[Za[23]] < Za[1]) bb[Za[23]] = bb[-Za[46]];
                  else {
                    fa(bb[Za[23]] += bb[-Za[46]] * Za[32], bb[Za[44]] |= bb[Za[23]] << bb[-Za[47]], bb[-Za[47]] += (bb[Za[23]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                    do {
                      fa(bb[Za[38]].push(bb[Za[44]] & Za[12]), bb[Za[44]] >>= Za[11], bb[-Za[47]] -= Za[11])
                    } while (bb[-Za[47]] > Za[23]);
                    bb[Za[23]] = -Za[2]
                  } return bb[Za[23]] > -Za[2] && bb[Za[38]].push((bb[Za[44]] | bb[Za[23]] << bb[-Za[47]]) & Za[12]), za(bb[Za[38]])
            }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
          }(135)](bb[Za[1]] * Za[11], bb[Za[1]] * Za[11] + Za[11]), Za[67]))))
        };
      fa(Ta = (...bb) => (bb[Za[13]] = Za[2], bb[Za[1]] >= ab), Ea = (...bb) => {
        function ab(...bb) {
          return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
            for (fa(bb[Za[13]] = Za[2], bb[Za[16]] = 'KDlfqVcgZdQTUejLYnsWSmPGaCoBNMIpXHRObhkEAFzirvJ>%2`!]"}w+3x,:~{#?[&(_;6y=1)*|5<^4@$.08/u79t', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[Za[49]] = bb[Za[0]].length, bb[Za[53]] = [], bb[Za[33]] = Za[1], bb[Za[52]] = Za[1], bb[Za[51]] = -Za[2]), bb[Za[48]] = Za[1]; bb[Za[48]] < bb[Za[49]]; bb[Za[48]]++)
              if (bb[Za[50]] = bb[Za[16]].indexOf(bb[Za[0]][bb[Za[48]]]), bb[Za[50]] !== -Za[2])
                if (bb[Za[51]] < Za[1]) bb[Za[51]] = bb[Za[50]];
                else {
                  fa(bb[Za[51]] += bb[Za[50]] * Za[32], bb[Za[33]] |= bb[Za[51]] << bb[Za[52]], bb[Za[52]] += (bb[Za[51]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                  do {
                    fa(bb[Za[53]].push(bb[Za[33]] & Za[12]), bb[Za[33]] >>= Za[11], bb[Za[52]] -= Za[11])
                  } while (bb[Za[52]] > Za[23]);
                  bb[Za[51]] = -Za[2]
                } return bb[Za[51]] > -Za[2] && bb[Za[53]].push((bb[Za[33]] | bb[Za[51]] << bb[Za[52]]) & Za[12]), za(bb[Za[53]])
          }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
        }
        bb[Za[13]] = Za[27];
        const Ub = crypto[ab(136) + ab(137) + ab(Za[69])](new Uint8Array(ea)),
          Ab = Ma[Za[45]][ab(Za[61]) + ab(Za[63])](bb[Za[2]], {
            [ab(141)]: Za[2]
          });
        Ba(Mb(bb[Za[1]]), Ub, Za[2], Ab);
        const Tb = new Uint8Array(ea + Ab[ab(142)]);
        return fa(Tb[ab(Za[54])](Ub), Tb[ab(Za[54])](Ab, ea)), Tb
      }, Ya = (...ab) => {
        function Ab(...bb) {
          return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
            for (fa(bb[Za[13]] = Za[2], bb[-Za[57]] = '$Ri9&M<jY5@Q!I6]d[Apu0y1V(rE,U2ZG*mb;"+#fB4CvgTPLWahH3`XkeSDcKo./{O)x>|?w7q}FJt^:znl=N%~s8_', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[-Za[56]] = bb[Za[0]].length, bb[Za[59]] = [], bb[Za[58]] = Za[1], bb[Za[21]] = Za[1], bb[Za[7]] = -Za[2]), bb[Za[55]] = Za[1]; bb[Za[55]] < bb[-Za[56]]; bb[Za[55]]++)
              if (bb[Za[6]] = bb[-Za[57]].indexOf(bb[Za[0]][bb[Za[55]]]), bb[Za[6]] !== -Za[2])
                if (bb[Za[7]] < Za[1]) bb[Za[7]] = bb[Za[6]];
                else {
                  fa(bb[Za[7]] += bb[Za[6]] * Za[32], bb[Za[58]] |= bb[Za[7]] << bb[Za[21]], bb[Za[21]] += (bb[Za[7]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                  do {
                    fa(bb[Za[59]].push(bb[Za[58]] & Za[12]), bb[Za[58]] >>= Za[11], bb[Za[21]] -= Za[11])
                  } while (bb[Za[21]] > Za[23]);
                  bb[Za[7]] = -Za[2]
                } return bb[Za[7]] > -Za[2] && bb[Za[59]].push((bb[Za[58]] | bb[Za[7]] << bb[Za[21]]) & Za[12]), za(bb[Za[59]])
          }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
        }
        if (ab[Za[13]] = Za[27], bb(144) + Za[6] in ia && function(...bb) {
            fa(bb[Za[13]] = Za[1], bb[Za[60]] = function(...bb) {
              for (fa(bb[Za[13]] = Za[2], bb[Za[16]] = bb[Za[1]].length, bb[Za[0]] = [], bb[Za[45]] = Za[1], bb[Za[38]] = Za[1], bb[Za[1]].sort(((bb, ab) => bb - ab))), bb[Za[44]] = Za[1]; bb[Za[44]] < bb[Za[16]]; bb[Za[44]]++)
                if (!(bb[Za[44]] > Za[1] && bb[Za[1]][bb[Za[44]]] === bb[Za[1]][bb[Za[44]] - Za[2]]))
                  for (fa(bb[Za[45]] = bb[Za[44]] + Za[2], bb[Za[38]] = bb[Za[16]] - Za[2]); bb[Za[45]] < bb[Za[38]];)
                    if (bb[Za[1]][bb[Za[44]]] + bb[Za[1]][bb[Za[45]]] + bb[Za[1]][bb[Za[38]]] < Za[1]) bb[Za[45]]++;
                    else if (bb[Za[1]][bb[Za[44]]] + bb[Za[1]][bb[Za[45]]] + bb[Za[1]][bb[Za[38]]] > Za[1]) bb[Za[38]]--;
              else {
                for (bb[Za[0]].push([bb[Za[1]][bb[Za[44]]], bb[Za[1]][bb[Za[45]]], bb[Za[1]][bb[Za[38]]]]); bb[Za[45]] < bb[Za[38]] && bb[Za[1]][bb[Za[45]]] === bb[Za[1]][bb[Za[45]] + Za[2]];) bb[Za[45]]++;
                for (; bb[Za[45]] < bb[Za[38]] && bb[Za[1]][bb[Za[38]]] === bb[Za[1]][bb[Za[38]] - Za[2]];) bb[Za[38]]--;
                fa(bb[Za[45]]++, bb[Za[38]]--)
              }
              return bb[Za[0]]
            }, console.log(bb[Za[60]]))
          }(), ab[Za[2]][Ab(145)] < ea) {
          function Yb(...bb) {
            for (fa(bb[Za[13]] = Za[2], bb[Za[2]] = 'aAR"XLoHTUcm7MEZN;Vb4t8G3Pyv]OFi{u*0h,nY!s^=Qr@/zI|w_B16>S9k`%}&<C:DfK[Wj+dlJpx?)(2g#5eq~$.', bb[-Za[26]] = "" + (bb[Za[1]] || ""), bb[Za[15]] = bb[-Za[26]].length, bb[-Za[61]] = [], bb[Za[33]] = Za[1], bb[Za[62]] = Za[1], bb[Za[7]] = -Za[2]), bb[Za[11]] = Za[1]; bb[Za[11]] < bb[Za[15]]; bb[Za[11]]++)
              if (bb[Za[31]] = bb[Za[2]].indexOf(bb[-Za[26]][bb[Za[11]]]), bb[Za[31]] !== -Za[2])
                if (bb[Za[7]] < Za[1]) bb[Za[7]] = bb[Za[31]];
                else {
                  fa(bb[Za[7]] += bb[Za[31]] * Za[32], bb[Za[33]] |= bb[Za[7]] << bb[Za[62]], bb[Za[62]] += (bb[Za[7]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                  do {
                    fa(bb[-Za[61]].push(bb[Za[33]] & Za[12]), bb[Za[33]] >>= Za[11], bb[Za[62]] -= Za[11])
                  } while (bb[Za[62]] > Za[23]);
                  bb[Za[7]] = -Za[2]
                } return bb[Za[7]] > -Za[2] && bb[-Za[61]].push((bb[Za[33]] | bb[Za[7]] << bb[Za[62]]) & Za[12]), za(bb[-Za[61]])
          }

          function Bb(...bb) {
            return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = Yb(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
          }

          function eb() {
            var bb = function(...bb) {
              function ab(bb, ab) {
                return Tb(Ab(Eb(bb), Eb(ab)))
              }

              function Ub(bb, ab, Ub) {
                return function(...bb) {
                  var ab, Ub, Ab, Mb;
                  for (fa(bb[Za[13]] = Za[27], bb[Za[16]] = bb[Za[2]].length, bb[Za[29]] = Array()), bb[Za[10]] = Array(Math.ceil(bb[Za[1]].length / Za[27])), ab = Za[1]; ab < bb[Za[10]].length; ab++) bb[Za[10]][ab] = bb[Za[1]].charCodeAt(ab * Za[27]) << Za[11] | bb[Za[1]].charCodeAt(ab * Za[27] + Za[2]);
                  for (; bb[Za[10]].length > Za[1];) {
                    for (fa(Mb = Array(), Ab = Za[1]), ab = Za[1]; ab < bb[Za[10]].length; ab++) fa(Ab = (Ab << Za[67]) + bb[Za[10]][ab], Ub = Math.floor(Ab / bb[Za[16]]), Ab -= Ub * bb[Za[16]]), (Mb.length > Za[1] || Ub > Za[1]) && (Mb[Mb.length] = Ub);
                    fa(bb[Za[29]][bb[Za[29]].length] = Ab, bb[Za[10]] = Mb)
                  }
                  for (bb[Za[44]] = "", ab = bb[Za[29]].length - Za[2]; ab >= Za[1]; ab--) bb[Za[44]] += bb[Za[2]].charAt(bb[Za[29]][ab]);
                  for (bb[Za[33]] = Math.ceil(bb[Za[1]].length * Za[11] / (Math.log(bb[Za[2]].length) / Math.log(Za[27]))), ab = bb[Za[44]].length; ab < bb[Za[33]]; ab++) bb[Za[44]] = bb[Za[2]][Za[1]] + bb[Za[44]];
                  return bb[Za[44]]
                }(Ab(Eb(bb), Eb(ab)), Ub)
              }

              function Ab(...bb) {
                bb[Za[13]] = Za[27], bb[Za[16]] = Yb(bb[Za[1]]), bb[Za[16]].length > Za[67] && (bb[Za[16]] = yb(bb[Za[16]], bb[Za[1]].length * Za[11]));
                var ab = Array(Za[67]),
                  Ub = Array(Za[67]);
                for (bb[Za[15]] = Za[1]; bb[Za[15]] < Za[67]; bb[Za[15]]++) fa(ab[bb[Za[15]]] = 909522486 ^ bb[Za[16]][bb[Za[15]]], Ub[bb[Za[15]]] = 1549556828 ^ bb[Za[16]][bb[Za[15]]]);
                return bb[Za[10]] = yb(ab.concat(Yb(bb[Za[2]])), Za[68] + bb[Za[2]].length * Za[11]), Bb(yb(Ub.concat(bb[Za[10]]), xa(function(...bb) {
                  return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
                    for (fa(bb[Za[13]] = Za[2], bb[Za[2]] = 'uEIUKHeDBLqkXP47<rvtGbTCo$p?(9s}Zw62gmi]A0n,;&/Q+Y!JR=1F3Md~c#>%)x|:ylO@aV[hj`z{W5*.S_8N"f^', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[-Za[64]] = bb[Za[0]].length, bb[Za[38]] = [], bb[-Za[65]] = Za[1], bb[-Za[66]] = Za[1], bb[Za[23]] = -Za[2]), bb[Za[63]] = Za[1]; bb[Za[63]] < bb[-Za[64]]; bb[Za[63]]++)
                      if (bb[Za[31]] = bb[Za[2]].indexOf(bb[Za[0]][bb[Za[63]]]), bb[Za[31]] !== -Za[2])
                        if (bb[Za[23]] < Za[1]) bb[Za[23]] = bb[Za[31]];
                        else {
                          fa(bb[Za[23]] += bb[Za[31]] * Za[32], bb[-Za[65]] |= bb[Za[23]] << bb[-Za[66]], bb[-Za[66]] += (bb[Za[23]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                          do {
                            fa(bb[Za[38]].push(bb[-Za[65]] & Za[12]), bb[-Za[65]] >>= Za[11], bb[-Za[66]] -= Za[11])
                          } while (bb[-Za[66]] > Za[23]);
                          bb[Za[23]] = -Za[2]
                        } return bb[Za[23]] > -Za[2] && bb[Za[38]].push((bb[-Za[65]] | bb[Za[23]] << bb[-Za[66]]) & Za[12]), za(bb[Za[38]])
                  }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
                }(Za[70]) + Za[3], Za[68], 256)))
              }

              function Mb(ab) {
                var Ub, Ab, Mb, Eb;

                function Yb(...bb) {
                  return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = function(...bb) {
                    for (fa(bb[Za[13]] = Za[2], bb[-Za[69]] = 'xTAdKMOLo6D;J%@e7N{pr)Q*S8^&G(_tY}+hUW#vFu$?"b0/2:aq1.~[5ig<wE=,3sRX4I]9!fzHBnCPjm`yk>lcVZ|', bb[Za[0]] = "" + (bb[Za[1]] || ""), bb[Za[71]] = bb[Za[0]].length, bb[Za[10]] = [], bb[Za[70]] = Za[1], bb[Za[62]] = Za[1], bb[-Za[20]] = -Za[2]), bb[Za[3]] = Za[1]; bb[Za[3]] < bb[Za[71]]; bb[Za[3]]++)
                      if (bb[Za[6]] = bb[-Za[69]].indexOf(bb[Za[0]][bb[Za[3]]]), bb[Za[6]] !== -Za[2])
                        if (bb[-Za[20]] < Za[1]) bb[-Za[20]] = bb[Za[6]];
                        else {
                          fa(bb[-Za[20]] += bb[Za[6]] * Za[32], bb[Za[70]] |= bb[-Za[20]] << bb[Za[62]], bb[Za[62]] += (bb[-Za[20]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                          do {
                            fa(bb[Za[10]].push(bb[Za[70]] & Za[12]), bb[Za[70]] >>= Za[11], bb[Za[62]] -= Za[11])
                          } while (bb[Za[62]] > Za[23]);
                          bb[-Za[20]] = -Za[2]
                        } return bb[-Za[20]] > -Za[2] && bb[Za[10]].push((bb[Za[70]] | bb[-Za[20]] << bb[Za[62]]) & Za[12]), za(bb[Za[10]])
                  }(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
                }
                try {
                  bb[Za[16]]
                } catch (Tb) {
                  bb[Za[16]] = Za[1]
                }
                for (fa(Ub = bb[Za[16]] ? Yb(Za[72]) + Yb(156) + Yb(157) : Yb(Za[72]) + Yb(158) + Yb(159), Ab = "", Mb = void 0), Eb = Za[1]; Eb < ab.length; Eb++) fa(Mb = ab.charCodeAt(Eb), Ab += Ub.charAt(Mb >>> Za[10] & Za[73]) + Ub.charAt(Mb & Za[73]));
                return Ab
              }

              function Tb(...ab) {
                function Ab(bb) {
                  return typeof ka[bb] === Za[18] ? ka[bb] = function(...bb) {
                    for (fa(bb[Za[13]] = Za[2], bb[Za[2]] = 'COcDSJFRtAYmKnGVPXfZTrpBg1*[ez,uqMvw<U(%NQLl~a^ko=8Ibs9j|2W$HEhd&{.4@3_>y6/"+7?#;x}`]:0!)i5', bb[Za[27]] = "" + (bb[Za[1]] || ""), bb[Za[45]] = bb[Za[27]].length, bb[Za[4]] = [], bb[Za[44]] = Za[1], bb[Za[62]] = Za[1], bb[Za[23]] = -Za[2]), bb[Za[51]] = Za[1]; bb[Za[51]] < bb[Za[45]]; bb[Za[51]]++)
                      if (bb[Za[74]] = bb[Za[2]].indexOf(bb[Za[27]][bb[Za[51]]]), bb[Za[74]] !== -Za[2])
                        if (bb[Za[23]] < Za[1]) bb[Za[23]] = bb[Za[74]];
                        else {
                          fa(bb[Za[23]] += bb[Za[74]] * Za[32], bb[Za[44]] |= bb[Za[23]] << bb[Za[62]], bb[Za[62]] += (bb[Za[23]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                          do {
                            fa(bb[Za[4]].push(bb[Za[44]] & Za[12]), bb[Za[44]] >>= Za[11], bb[Za[62]] -= Za[11])
                          } while (bb[Za[62]] > Za[23]);
                          bb[Za[23]] = -Za[2]
                        } return bb[Za[23]] > -Za[2] && bb[Za[4]].push((bb[Za[44]] | bb[Za[23]] << bb[Za[62]]) & Za[12]), za(bb[Za[4]])
                  }(ya[bb]) : ka[bb]
                }
                ab[Za[13]] = Za[2];
                try {
                  bb[-Za[75]]
                } catch (Ub) {
                  bb[-Za[75]] = ""
                }
                for (fa(ab[-Za[76]] = Ab(Za[47]) + Ab(161) + Ab(Za[91]) + Ab(163) + Ab(164), ab[-Za[79]] = "", ab[-Za[77]] = ab[Za[1]].length), ab[Za[38]] = Za[1]; ab[Za[38]] < ab[-Za[77]]; ab[Za[38]] += Za[15])
                  for (ab[Za[33]] = ab[Za[1]].charCodeAt(ab[Za[38]]) << Za[67] | (ab[Za[38]] + Za[2] < ab[-Za[77]] ? ab[Za[1]].charCodeAt(ab[Za[38]] + Za[2]) << Za[11] : Za[1]) | (ab[Za[38]] + Za[27] < ab[-Za[77]] ? ab[Za[1]].charCodeAt(ab[Za[38]] + Za[27]) : Za[1]), ab[Za[78]] = Za[1]; ab[Za[78]] < Za[10]; ab[Za[78]]++) ab[Za[38]] * Za[11] + ab[Za[78]] * Za[21] > ab[Za[1]].length * Za[11] ? ab[-Za[79]] += bb[-Za[75]] : ab[-Za[79]] += ab[-Za[76]].charAt(ab[Za[33]] >>> Za[21] * (Za[15] - ab[Za[78]]) & Za[20]);
                return ab[-Za[79]]
              }

              function Eb(...bb) {
                var ab, Ub;
                for (fa(bb[Za[13]] = Za[2], bb[Za[16]] = "", bb[-Za[80]] = -Za[2]); ++bb[-Za[80]] < bb[Za[1]].length;) fa(ab = bb[Za[1]].charCodeAt(bb[-Za[80]]), Ub = bb[-Za[80]] + Za[2] < bb[Za[1]].length ? bb[Za[1]].charCodeAt(bb[-Za[80]] + Za[2]) : Za[1]), 55296 <= ab && ab <= 56319 && 56320 <= Ub && Ub <= 57343 && fa(ab = 65536 + ((ab & Za[81]) << Za[84]) + (Ub & Za[81]), bb[-Za[80]]++), ab <= Za[39] ? bb[Za[16]] += String.fromCharCode(ab) : ab <= 2047 ? bb[Za[16]] += String.fromCharCode(192 | ab >>> Za[21] & Za[50], Za[40] | ab & Za[20]) : ab <= Za[86] ? bb[Za[16]] += String.fromCharCode(224 | ab >>> Za[24] & Za[73], Za[40] | ab >>> Za[21] & Za[20], Za[40] | ab & Za[20]) : ab <= 2097151 && (bb[Za[16]] += String.fromCharCode(240 | ab >>> Za[82] & Za[23], Za[40] | ab >>> Za[24] & Za[20], Za[40] | ab >>> Za[21] & Za[20], Za[40] | ab & Za[20]));
                return bb[Za[16]]
              }

              function Yb(...bb) {
                for (fa(bb[Za[13]] = Za[2], bb[Za[2]] = Array(bb[Za[1]].length >> Za[27])), bb[Za[0]] = Za[1]; bb[Za[0]] < bb[Za[2]].length; bb[Za[0]]++) bb[Za[2]][bb[Za[0]]] = Za[1];
                for (bb[Za[0]] = Za[1]; bb[Za[0]] < bb[Za[1]].length * Za[11]; bb[Za[0]] += Za[11]) bb[Za[2]][bb[Za[0]] >> Za[44]] |= (bb[Za[1]].charCodeAt(bb[Za[0]] / Za[11]) & Za[12]) << Za[80] - bb[Za[0]] % Za[83];
                return bb[Za[2]]
              }

              function Bb(...bb) {
                for (fa(bb[Za[13]] = Za[2], bb[Za[16]] = ""), bb[Za[27]] = Za[1]; bb[Za[27]] < bb[Za[1]].length * Za[83]; bb[Za[27]] += Za[11]) bb[Za[16]] += String.fromCharCode(bb[Za[1]][bb[Za[27]] >> Za[44]] >>> Za[80] - bb[Za[27]] % Za[83] & Za[12]);
                return bb[Za[16]]
              }

              function eb(...bb) {
                return bb[Za[13]] = Za[27], bb[Za[1]] >>> bb[Za[2]] | bb[Za[1]] << Za[83] - bb[Za[2]]
              }

              function vb(...bb) {
                return bb[Za[13]] = Za[27], bb[Za[1]] >>> bb[Za[2]]
              }

              function Lb(...bb) {
                return bb[Za[13]] = Za[15], bb[Za[1]] & bb[Za[2]] ^ ~bb[Za[1]] & bb[Za[27]]
              }

              function Pb(...bb) {
                return bb[Za[13]] = Za[15], bb[Za[1]] & bb[Za[2]] ^ bb[Za[1]] & bb[Za[27]] ^ bb[Za[2]] & bb[Za[27]]
              }

              function Xb(...bb) {
                return bb[Za[13]] = Za[2], eb(bb[Za[1]], Za[27]) ^ eb(bb[Za[1]], Za[36]) ^ eb(bb[Za[1]], 22)
              }

              function jb(...bb) {
                return bb[Za[13]] = Za[2], eb(bb[Za[1]], Za[21]) ^ eb(bb[Za[1]], Za[53]) ^ eb(bb[Za[1]], Za[48])
              }

              function Rb(...bb) {
                return bb[Za[13]] = Za[2], eb(bb[Za[1]], Za[23]) ^ eb(bb[Za[1]], Za[82]) ^ vb(bb[Za[1]], Za[15])
              }

              function kb(...bb) {
                return bb[Za[13]] = Za[2], eb(bb[Za[1]], 17) ^ eb(bb[Za[1]], Za[28]) ^ vb(bb[Za[1]], Za[84])
              }

              function yb(ab, Ub) {
                var Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, yb, Db, zb, xb, ib, fb = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                for (Ab = new Array(Za[85]), fa(ab[Ub >> Za[44]] |= Za[40] << Za[80] - Ub % Za[83], ab[(Ub + Za[85] >> Za[31] << Za[10]) + Za[73]] = Ub), Db = Za[1]; Db < ab.length; Db += Za[67]) {
                  for (fa(Mb = fb[Za[1]], Tb = fb[Za[2]], Eb = fb[Za[27]], Yb = fb[Za[15]], Bb = fb[Za[10]], eb = fb[Za[44]], vb = fb[Za[21]], yb = fb[Za[23]]), zb = Za[1]; zb < Za[85]; zb++) fa(zb < Za[67] ? Ab[zb] = ab[zb + Db] : Ab[zb] = Zb(Zb(Zb(kb(Ab[zb - Za[27]]), Ab[zb - Za[23]]), Rb(Ab[zb - Za[73]])), Ab[zb - Za[67]]), xb = Zb(Zb(Zb(Zb(yb, jb(Bb)), Lb(Bb, eb, vb)), bb[Za[51]][zb]), Ab[zb]), ib = Zb(Xb(Mb), Pb(Mb, Tb, Eb)), yb = vb, vb = eb, eb = Bb, Bb = Zb(Yb, xb), Yb = Eb, Eb = Tb, Tb = Mb, Mb = Zb(xb, ib));
                  fa(fb[Za[1]] = Zb(Mb, fb[Za[1]]), fb[Za[2]] = Zb(Tb, fb[Za[2]]), fb[Za[27]] = Zb(Eb, fb[Za[27]]), fb[Za[15]] = Zb(Yb, fb[Za[15]]), fb[Za[10]] = Zb(Bb, fb[Za[10]]), fb[Za[44]] = Zb(eb, fb[Za[44]]), fb[Za[21]] = Zb(vb, fb[Za[21]]), fb[Za[23]] = Zb(yb, fb[Za[23]]))
                }
                return fb
              }

              function Zb(...bb) {
                return fa(bb[Za[13]] = Za[27], bb[Za[16]] = (bb[Za[1]] & Za[86]) + (bb[Za[2]] & Za[86]), bb[Za[15]] = (bb[Za[1]] >> Za[67]) + (bb[Za[2]] >> Za[67]) + (bb[Za[16]] >> Za[67])), bb[Za[15]] << Za[67] | bb[Za[16]] & Za[86]
              }
              return fa(bb[Za[13]] = Za[1], bb[Za[16]] = Za[1], bb[-Za[75]] = ""), bb[Za[51]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...bb) {
                  return bb[Za[13]] = Za[2], Mb(function(bb) {
                    return Bb(yb(Yb(bb), bb.length * Za[11]))
                  }(Eb(bb[Za[1]])))
                },
                b64: ab,
                any: Ub,
                hex_hmac: function(...bb) {
                  return bb[Za[13]] = Za[27], Mb(Ab(Eb(bb[Za[1]]), Eb(bb[Za[2]])))
                },
                b64_hmac: ab,
                any_hmac: Ub
              }
            }();
            console.log(bb)
          }
          throw Bb(146) + "C" in ia && eb(), new Error(Ub)
        }
        const Tb = new Uint8Array(ab[Za[2]][Ab(Za[87])](ea));
        Ba(Mb(ab[Za[1]]), ab[Za[2]][Ab(Za[87])](Za[1], ea), Za[2], Tb);
        const Eb = new(Ma[Za[45]][Ab(Za[88]) + Za[33]])({
          [Ab(167)]: !0
        });
        if (Eb[Ab(168)](Tb), Eb[Ab(169)] || !Eb[Ab(170)]) {
          function vb(...bb) {
            for (fa(bb[Za[13]] = Za[2], bb[-Za[88]] = 'Z2EH,4r!7m@j[?uQ#Nf{W"i&yvkA3ct.;|F5nbz^o%*ISR18hel:TVBCJ=}/GLKs6DqgXOP]UYM+pa$<9)_~`wx0>(d', bb[Za[27]] = "" + (bb[Za[1]] || ""), bb[Za[89]] = bb[Za[27]].length, bb[Za[38]] = [], bb[-Za[82]] = Za[1], bb[Za[21]] = Za[1], bb[Za[23]] = -Za[2]), bb[Za[88]] = Za[1]; bb[Za[88]] < bb[Za[89]]; bb[Za[88]]++)
              if (bb[Za[6]] = bb[-Za[88]].indexOf(bb[Za[27]][bb[Za[88]]]), bb[Za[6]] !== -Za[2])
                if (bb[Za[23]] < Za[1]) bb[Za[23]] = bb[Za[6]];
                else {
                  fa(bb[Za[23]] += bb[Za[6]] * Za[32], bb[-Za[82]] |= bb[Za[23]] << bb[Za[21]], bb[Za[21]] += (bb[Za[23]] & Za[34]) > Za[35] ? Za[36] : Za[37]);
                  do {
                    fa(bb[Za[38]].push(bb[-Za[82]] & Za[12]), bb[-Za[82]] >>= Za[11], bb[Za[21]] -= Za[11])
                  } while (bb[Za[21]] > Za[23]);
                  bb[Za[23]] = -Za[2]
                } return bb[Za[23]] > -Za[2] && bb[Za[38]].push((bb[-Za[82]] | bb[Za[23]] << bb[Za[21]]) & Za[12]), za(bb[Za[38]])
          }

          function Lb(...bb) {
            return bb[Za[13]] = Za[2], typeof ka[bb[Za[1]]] === Za[18] ? ka[bb[Za[1]]] = vb(ya[bb[Za[1]]]) : ka[bb[Za[1]]]
          }

          function Pb(...bb) {
            bb[Za[13]] = Za[1]
          }
          throw Lb(171) + Za[7] in ia && Pb(), new Error(Ub)
        }
        return Eb[Ab(172)]
      })
    })();
    var ma = Ub(36309),
      pa = Ub(36313);

    function Na(bb) {
      return Tb.OX.from(Uint8Array.from(bb))
    }

    function Wa(bb) {
      return Array.from(bb)
    }

    function Ha(bb, ab) {
      return {
        [bb]: {
          x: ab
        }
      }
    }

    function Ia(bb) {
      if (null === bb || "object" !== typeof bb || Array.isArray(bb)) return bb;
      const ab = Object.keys(bb);
      if (1 !== ab.length) return bb;
      const Ub = bb[ab[0]];
      return null !== Ub && "object" === typeof Ub && !Array.isArray(Ub) && "x" in Ub ? Ub.x : bb
    }

    function da(bb, ab) {
      return void 0 === ab ? null : Bb.has(bb) ? null === ab ? null : JSON.stringify(ab) : ab
    }

    function Fa(bb, ab) {
      return null === ab && Bb.has(bb) ? null : "string" === typeof ab && Bb.has(bb) ? JSON.parse(ab) : ab
    }

    function ha(bb, ab, Ub) {
      return (0, Mb.I)(Ub) ? null : Ha(bb, da(ab, Ub))
    }

    function Ga(bb, ab) {
      return (0, Mb.I)(ab) ? null : Fa(bb, Ia(ab))
    }

    function Qa(bb) {
      const ab = {};
      for (const Ub in bb) {
        const Ab = bb[Ub];
        ab[Ub] = void 0 === Ab ? null : Ab
      }
      return ab
    }

    function qa(bb) {
      const ab = {};
      for (const Ub in bb) {
        const Ab = bb[Ub];
        null !== Ab && void 0 !== Ab && (ab[Ub] = Ab)
      }
      return ab
    }

    function ua(bb, ab) {
      return Object.prototype.hasOwnProperty.call(bb, ab)
    }

    function ra(bb, ab) {
      const Ub = {};
      for (const Ab in bb) {
        const Mb = bb[Ab];
        Ub[Ab] = ab(Mb)
      }
      return Ub
    }

    function Ka(bb, ab, Ub) {
      const Ab = [];
      for (let Mb = 0; Mb < ab.length; Mb++) {
        const Tb = ab[Mb];
        ua(bb, Tb) && Ab.push({
          i: Mb,
          v: Ub(Tb, bb[Tb])
        })
      }
      return Ab
    }

    function oa(bb, ab, Ub) {
      const Ab = {};
      for (const Mb of bb) {
        const bb = ab[Mb.i];
        void 0 !== bb ? Ab[bb] = Ub(bb, Mb.v) : console.error(`Unknown Partial field index ${Mb.i}`)
      }
      return Ab
    }

    function la(bb, ab) {
      return (0, Mb.I)(ab) ? null : "jH" === bb ? function(bb) {
        return Ha(jb, Ka(bb, pa.D, ((bb, ab) => ha(Gb[bb], bb, ab))))
      }(ab) : ha(hb[bb], bb, ab)
    }

    function ta(bb, ab) {
      return (0, Mb.I)(ab) ? null : "jH" === bb ? function(bb) {
        return (0, Mb.I)(bb) ? null : oa(bb, pa.D, Ga)
      }(Ia(ab)) : Ga(bb, ab)
    }

    function wa(bb) {
      const {
        type: ab,
        ...Ub
      } = bb, Ab = {};
      for (const Mb in Ub) {
        const bb = Ub[Mb];
        Ab[Mb] = da(Mb, bb)
      }
      if ("chunkAdded" === ab || "chunkRemoved" === ab) Ab.rle = Na(Ab.rle);
      else if ("playSound" === ab) {
        const bb = Ab.WM;
        Ab.WM = (0, Mb.I)(bb) ? null : Qa(bb)
      } else if ("customKillfeed" === ab) {
        var Tb, Eb;
        Ab.killer = Qa(null !== (Tb = Ab.killer) && void 0 !== Tb ? Tb : {}), Ab.victim = Qa(null !== (Eb = Ab.victim) && void 0 !== Eb ? Eb : {})
      }
      return {
        [ab]: Ab
      }
    }

    function sa(bb) {
      const ab = Object.keys(bb)[0],
        Ub = bb[ab],
        Ab = {};
      for (const Mb in Ub) {
        const bb = Ub[Mb];
        Ab[Mb] = Fa(Mb, bb)
      }
      if ("chunkAdded" === ab || "chunkRemoved" === ab) Ab.rle = Wa(Ab.rle);
      else if ("playSound" === ab) {
        const bb = Ab.WM;
        Ab.WM = (0, Mb.I)(bb) ? null : qa(bb)
      } else if ("customKillfeed" === ab) {
        var Tb, Eb;
        Ab.killer = qa(null !== (Tb = Ab.killer) && void 0 !== Tb ? Tb : {}), Ab.victim = qa(null !== (Eb = Ab.victim) && void 0 !== Eb ? Eb : {})
      }
      return {
        type: ab,
        ...Ab
      }
    }

    function ga(bb) {
      var ab, Ub;
      return (0, Mb.I)(bb) ? null : {
        name: bb.name,
        amount: null !== (ab = bb.amount) && void 0 !== ab ? ab : null,
        attributes: JSON.stringify(null !== (Ub = bb.attributes) && void 0 !== Ub ? Ub : {})
      }
    }

    function Ca(bb) {
      if ((0, Mb.I)(bb)) return null;
      const ab = bb;
      return {
        name: ab.name,
        amount: ab.amount,
        attributes: JSON.parse(ab.attributes)
      }
    }

    function Va(bb) {
      if ((0, Mb.I)(bb)) return null;
      return {
        fullSlotsArray: Array.isArray(bb.slots),
        entries: Ka(bb, pa.o, ((bb, ab) => {
          if ((0, Mb.I)(ab)) return null;
          if ("slots" === bb) {
            const bb = Array.isArray(ab) ? function(bb) {
              const ab = {};
              for (let Ub = 0; Ub < bb.length; Ub++) ab[Ub] = bb[Ub];
              return ab
            }(ab) : ab;
            return Ha(Wb, function(bb) {
              const ab = {};
              for (const Ub in bb) {
                const Ab = bb[Ub];
                ab[Ub] = ga(Ab)
              }
              return ab
            }(bb))
          }
          return Ha(Nb, ab)
        }))
      }
    }

    function Oa(bb) {
      if ((0, Mb.I)(bb)) return;
      const ab = bb.fullSlotsArray;
      return oa(bb.entries, pa.o, ((bb, Ub) => {
        if ((0, Mb.I)(Ub)) return null;
        if ("slots" === bb) {
          const bb = function(bb) {
            const ab = {};
            for (const Ub in bb) {
              const Ab = bb[Ub];
              ab[Number(Ub)] = Ca(Ab)
            }
            return ab
          }(Ia(Ub));
          return ab ? function(bb) {
            const ab = [];
            for (let Ub = 0; Ub < Mb.m; Ub++) ab.push(Ub in bb ? bb[Ub] : null);
            return ab
          }(bb) : bb
        }
        return Ia(Ub)
      }))
    }

    function ca(bb) {
      return {
        entities: ra(bb.entities, (bb => Ka(bb, pa.m, la))),
        items: ra(bb.items, (bb => Ka(bb, pa.v, ((bb, ab) => ha(Qb[bb], bb, ab))))),
        camera: bb.camera,
        hotbar: Va(bb.hotbar),
        playerHud: (0, Mb.I)(bb.playerHud) ? null : Ka(bb.playerHud, pa.z, ((bb, ab) => (0, Mb.I)(ab) ? null : function(bb, ab) {
          return {
            [bb]: ab
          }
        }("double", ab))),
        effects: (0, Mb.I)(bb.effects) ? null : (0, ma.p)(bb.effects),
        uiElements: Ka(bb.uiElements, pa.F, ((bb, ab) => (0, Mb.I)(ab) ? null : JSON.stringify(ab))),
        environment: Ka(bb.environment, pa.C, ((bb, ab) => ha(qb[bb], bb, ab))),
        structuralEvents: bb.structuralEvents.map(wa),
        ephemeralEvents: bb.ephemeralEvents.map(wa)
      }
    }

    function Ja(bb) {
      var ab;
      const Ub = {
          entities: ra(bb.entities, (bb => {
            const ab = oa(bb, pa.m, ta),
              Ub = ab.type ? (0, Ab.u)(ab.type) : null;
            return Ub && (ab.type = "Mesh", ab.meshKind = Ub.meshKind, ab.meshOpts = Ub.meshOpts), ab
          })),
          items: ra(bb.items, (bb => oa(bb, pa.v, Ga))),
          camera: {
            ...bb.camera,
            charging: null !== (ab = bb.camera.charging) && void 0 !== ab && ab
          },
          uiElements: oa(bb.uiElements, pa.F, ((bb, ab) => "string" === typeof ab ? JSON.parse(ab) : ab)),
          environment: oa(bb.environment, pa.C, Ga),
          structuralEvents: bb.structuralEvents.map((bb => {
            const ab = sa(bb);
            return "Qp" === ab.type ? (ab.fromBlockData ??= null, ab.toBlockData ??= null) : "chunkAdded" !== ab.type && "chunkRemoved" !== ab.type || (ab.sharedBlockData ??= []), ab
          })),
          ephemeralEvents: bb.ephemeralEvents.map((bb => sa(bb)))
        },
        Tb = Oa(bb.hotbar);
      return void 0 !== Tb && (Ub.hotbar = Tb), (0, Mb.I)(bb.playerHud) || (Ub.playerHud = oa(bb.playerHud, pa.z, ((bb, ab) => (0, Mb.I)(ab) ? null : function(bb) {
        if (null === bb || "object" !== typeof bb || Array.isArray(bb)) return bb;
        const ab = Object.keys(bb);
        return 1 !== ab.length || "int" !== ab[0] && "double" !== ab[0] ? bb : bb[ab[0]]
      }(ab)))), (0, Mb.I)(bb.effects) || (Ub.effects = (0, ma.i)(bb.effects)), Ub
    }
    let na, Sa;
    var bU, aU, UU, AU, MU, TU, EU, YU, BU, eU, vU;
    const LU = [1, 2, 0, 3, 185, "i", "e", 6, "d", 8, 255, "length", 95, 104, "undefined", void 0, 18, "c", "b", 208, 63, "fromCodePoint", 7, 12, "push", 156, 62, 221, "g", 91, 167, 8191, 88, 13, 14, 238, "h", "a", 231, "f", 27, 5, 22, 126, 76, 240, 186, 9, 60, 178, "join", 23, 118, 224, 4, null, 10, 50, 73, 45, 83, 49, 198, 190, 204, 32, 243, 173, 102, 150, 28, 103, 239, 169, 213, 40, "r", 180, !1, !0, 142, 121, 122, "=", ";", 34, 56, 127, 171, 114, 153, 128, 16, 512, 90, 66, 216, 97, 119, 15, 41, 248, "/", 134, 65, 120, 1023, 31, 101, 24, 19, 64, 65535, 159, 217, 196, 182, 165, 222, 232, 242, 26, 154, 89, 189, 141, 108, ".", 96, 161, 226, 155, 105, 74, 181, 245, 115, 20, "OX", 38, 192];

    function PU(...bb) {
      return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
        for (yU(bb[LU[11]] = LU[0], bb[LU[0]] = '"7:_=%u0@Q3?rCpVk~}2[+1eqKyL(bsfnhlEj`#!t6c4gavU$dDTAN>MIS;FiPB.Y5WJzo^{]&H/m*Xx|ZG8,9<w)RO', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[LU[3]] = bb[LU[1]].length, bb[LU[8]] = [], bb[LU[6]] = LU[2], bb[LU[7]] = LU[2], bb[-LU[3]] = -LU[0]), bb[LU[4]] = LU[2]; bb[LU[4]] < bb[LU[3]]; bb[LU[4]]++)
          if (bb[LU[5]] = bb[LU[0]].indexOf(bb[LU[1]][bb[LU[4]]]), bb[LU[5]] !== -LU[0])
            if (bb[-LU[3]] < LU[2]) bb[-LU[3]] = bb[LU[5]];
            else {
              yU(bb[-LU[3]] += bb[LU[5]] * LU[29], bb[LU[6]] |= bb[-LU[3]] << bb[LU[7]], bb[LU[7]] += (bb[-LU[3]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
              do {
                yU(bb[LU[8]].push(bb[LU[6]] & LU[10]), bb[LU[6]] >>= LU[9], bb[LU[7]] -= LU[9])
              } while (bb[LU[7]] > LU[22]);
              bb[-LU[3]] = -LU[0]
            } return bb[-LU[3]] > -LU[0] && bb[LU[8]].push((bb[LU[6]] | bb[-LU[3]] << bb[LU[7]]) & LU[10]), XU(bb[LU[8]])
      }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
    }

    function XU(...bb) {
      return bb[LU[11]] = LU[0], typeof AU !== LU[14] && AU ? (new AU).decode(new MU(bb[LU[2]])) : typeof TU !== LU[14] && TU ? TU.from(bb[LU[2]]).toString("utf-8") : BU(bb[LU[2]])
    }

    function jU(...bb) {
      if (bb[LU[11]] = LU[3], bb[LU[2]] === function(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
            for (yU(bb[LU[11]] = LU[0], bb[LU[0]] = 'y/=3vNSTI+5V[kM9mq|Z1Oz!pA,&o(dBL0R^_{.2FEut$G`eHg@%7QJK4fUc>asw?~Dx6h:8C#*;)]YnjPW"}iXrl<b', bb[-LU[25]] = "" + (bb[LU[2]] || ""), bb[-LU[26]] = bb[-LU[25]].length, bb[LU[8]] = [], bb[LU[6]] = LU[2], bb[-LU[30]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[9]] = LU[2]; bb[LU[9]] < bb[-LU[26]]; bb[LU[9]]++)
              if (bb[LU[27]] = bb[LU[0]].indexOf(bb[-LU[25]][bb[LU[9]]]), bb[LU[27]] !== -LU[0])
                if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[27]];
                else {
                  yU(bb[LU[28]] += bb[LU[27]] * LU[29], bb[LU[6]] |= bb[LU[28]] << bb[-LU[30]], bb[-LU[30]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                  do {
                    yU(bb[LU[8]].push(bb[LU[6]] & LU[10]), bb[LU[6]] >>= LU[9], bb[-LU[30]] -= LU[9])
                  } while (bb[-LU[30]] > LU[22]);
                  bb[LU[28]] = -LU[0]
                } return bb[LU[28]] > -LU[0] && bb[LU[8]].push((bb[LU[6]] | bb[LU[28]] << bb[-LU[30]]) & LU[10]), XU(bb[LU[8]])
          }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }(LU[68]) + LU[76]) return bb[LU[0]] + bb[LU[1]]
    }

    function RU() {}

    function kU(bb, ab, Ub, Ab = {}, Mb, Tb, Eb, Yb, Bb) {
      if (Eb || (Eb = function(...bb) {
          yU(bb[LU[11]] = LU[2], bb[LU[43]] = function(...bb) {
            for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = bb[LU[2]].length, bb[LU[1]] = [], bb[LU[3]] = LU[2], bb[LU[42]] = LU[2], bb[LU[2]].sort(((bb, ab) => bb - ab))), bb[LU[41]] = LU[2]; bb[LU[41]] < bb[LU[37]]; bb[LU[41]]++)
              if (!(bb[LU[41]] > LU[2] && bb[LU[2]][bb[LU[41]]] === bb[LU[2]][bb[LU[41]] - LU[0]]))
                for (yU(bb[LU[3]] = bb[LU[41]] + LU[0], bb[LU[42]] = bb[LU[37]] - LU[0]); bb[LU[3]] < bb[LU[42]];)
                  if (bb[LU[2]][bb[LU[41]]] + bb[LU[2]][bb[LU[3]]] + bb[LU[2]][bb[LU[42]]] < LU[2]) bb[LU[3]]++;
                  else if (bb[LU[2]][bb[LU[41]]] + bb[LU[2]][bb[LU[3]]] + bb[LU[2]][bb[LU[42]]] > LU[2]) bb[LU[42]]--;
            else {
              for (bb[LU[1]].push([bb[LU[2]][bb[LU[41]]], bb[LU[2]][bb[LU[3]]], bb[LU[2]][bb[LU[42]]]]); bb[LU[3]] < bb[LU[42]] && bb[LU[2]][bb[LU[3]]] === bb[LU[2]][bb[LU[3]] + LU[0]];) bb[LU[3]]++;
              for (; bb[LU[3]] < bb[LU[42]] && bb[LU[2]][bb[LU[42]]] === bb[LU[2]][bb[LU[42]] - LU[0]];) bb[LU[42]]--;
              yU(bb[LU[3]]++, bb[LU[42]]--)
            }
            return bb[LU[1]]
          }, console.log(bb[LU[43]]))
        }), Tb || (Tb = function(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = Mb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }), Mb || (Mb = function(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = ']YGFgb,mEO0nZSep/@<9"atPV7v%l;y(K[1LHoDNs=Q>_Tcd.`~?R8U&hik2CB+{4fwM$IX*^uxW6:)qJrA!}#3z5j|', bb[LU[35]] = "" + (bb[LU[2]] || ""), bb[LU[17]] = bb[LU[35]].length, bb[LU[40]] = [], bb[LU[38]] = LU[2], bb[LU[39]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[LU[17]]; bb[LU[36]]++)
            if (bb[LU[5]] = bb[LU[37]].indexOf(bb[LU[35]][bb[LU[36]]]), bb[LU[5]] !== -LU[0])
              if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[5]];
              else {
                yU(bb[LU[28]] += bb[LU[5]] * LU[29], bb[LU[38]] |= bb[LU[28]] << bb[LU[39]], bb[LU[39]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[40]].push(bb[LU[38]] & LU[10]), bb[LU[38]] >>= LU[9], bb[LU[39]] -= LU[9])
                } while (bb[LU[39]] > LU[22]);
                bb[LU[28]] = -LU[0]
              } return bb[LU[28]] > -LU[0] && bb[LU[40]].push((bb[LU[38]] | bb[LU[28]] << bb[LU[39]]) & LU[10]), XU(bb[LU[40]])
        }), Tb(LU[13]) + "R" in RU && Eb(), yU(Yb = void 0, Bb = {
          [Tb(LU[132])]: function(...bb) {
            function ab(...bb) {
              return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
                for (yU(bb[LU[11]] = LU[0], bb[LU[46]] = '5:;<x7C&wYm|H*XjZ?ItgUN4_G)rW0@86pT2^+=[kKVv!>yM~Led#qsB$AEOJi(Dznb9uSfc/`a,]ho}"Q.lR%13F{P', bb[-LU[44]] = "" + (bb[LU[2]] || ""), bb[LU[45]] = bb[-LU[44]].length, bb[LU[33]] = [], bb[LU[6]] = LU[2], bb[LU[39]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[9]] = LU[2]; bb[LU[9]] < bb[LU[45]]; bb[LU[9]]++)
                  if (bb[LU[47]] = bb[LU[46]].indexOf(bb[-LU[44]][bb[LU[9]]]), bb[LU[47]] !== -LU[0])
                    if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[47]];
                    else {
                      yU(bb[LU[28]] += bb[LU[47]] * LU[29], bb[LU[6]] |= bb[LU[28]] << bb[LU[39]], bb[LU[39]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                      do {
                        yU(bb[LU[33]].push(bb[LU[6]] & LU[10]), bb[LU[6]] >>= LU[9], bb[LU[39]] -= LU[9])
                      } while (bb[LU[39]] > LU[22]);
                      bb[LU[28]] = -LU[0]
                    } return bb[LU[28]] > -LU[0] && bb[LU[33]].push((bb[LU[6]] | bb[LU[28]] << bb[LU[39]]) & LU[10]), XU(bb[LU[33]])
              }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
            }
            Tb(106) + "q" in RU && function(...bb) {
              bb[LU[11]] = LU[2]
            }(), yU([
              [bb[LU[18]], bb[LU[51]], bb[LU[1]]], bb[LU[92]]
            ] = vU, console[ab(109)]("" + bb[LU[18]][LU[50]](LU[127]) + (ab(110) + ab(111)) + bb[LU[1]][ab(112) + "me"] + ab(113) + bb[LU[51]]))
          }
        }), ab === Tb(LU[89]) + Tb(LU[136])) {
        function eb(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[0]] = ')RiCtWGASnlDQIkrVLOjNXcKgfuTB`;s(z8&UEve0=dMm|F7[P2q./4hZ>bxw5#pJ_H<Yo]*~a6@{"3y:^$}1+,!?%9', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[LU[52]] = bb[LU[1]].length, bb[LU[54]] = [], bb[LU[41]] = LU[2], bb[LU[39]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[9]] = LU[2]; bb[LU[9]] < bb[LU[52]]; bb[LU[9]]++)
            if (bb[-LU[53]] = bb[LU[0]].indexOf(bb[LU[1]][bb[LU[9]]]), bb[-LU[53]] !== -LU[0])
              if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[-LU[53]];
              else {
                yU(bb[LU[28]] += bb[-LU[53]] * LU[29], bb[LU[41]] |= bb[LU[28]] << bb[LU[39]], bb[LU[39]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[54]].push(bb[LU[41]] & LU[10]), bb[LU[41]] >>= LU[9], bb[LU[39]] -= LU[9])
                } while (bb[LU[39]] > LU[22]);
                bb[LU[28]] = -LU[0]
              } return bb[LU[28]] > -LU[0] && bb[LU[54]].push((bb[LU[41]] | bb[LU[28]] << bb[LU[39]]) & LU[10]), XU(bb[LU[54]])
        }

        function vb(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = eb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }

        function Lb(...bb) {
          function ab() {}
          bb[LU[11]] = LU[2], yU(bb[LU[18]] = function(bb, Ub) {
            var Ab, Mb, Tb, Eb, Yb, Bb = LU[2];
            for (yU(Ab = LU[2], Mb = new ab(LU[2]), Tb = Mb, Eb = bb, Yb = Ub); Eb !== LU[55] || Yb !== LU[55];) yU(Ab = (Eb ? Eb.val : LU[2]) + (Yb ? Yb.val : LU[2]) + Bb, Bb = Math.floor(Ab / LU[56]), Tb.next = new ab(Ab % LU[56]), Tb = Tb.next, Eb = Eb ? Eb.next : LU[55], Yb = Yb ? Yb.next : LU[55]);
            return Bb && (Tb.next = new ab(Bb)), Mb.next
          }, console.log(bb[LU[18]]))
        }
        vb(116) + "o" in RU && Lb(), vU = []
      }
      if (ab === Tb(117) + Tb(LU[52])) {
        function Pb(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = 'E9?ulL&fkm7Cvpnw(6*BY}o",!1G0>U;PaZcMtNA<^$/j~`bsy[:IHVh8d#%]JxTW3=QrzR4+Ki)gS5.DO@{|_q2XFe', bb[-LU[57]] = "" + (bb[LU[2]] || ""), bb[LU[59]] = bb[-LU[57]].length, bb[LU[54]] = [], bb[LU[6]] = LU[2], bb[LU[61]] = LU[2], bb[LU[22]] = -LU[0]), bb[LU[58]] = LU[2]; bb[LU[58]] < bb[LU[59]]; bb[LU[58]]++)
            if (bb[-LU[60]] = bb[LU[37]].indexOf(bb[-LU[57]][bb[LU[58]]]), bb[-LU[60]] !== -LU[0])
              if (bb[LU[22]] < LU[2]) bb[LU[22]] = bb[-LU[60]];
              else {
                yU(bb[LU[22]] += bb[-LU[60]] * LU[29], bb[LU[6]] |= bb[LU[22]] << bb[LU[61]], bb[LU[61]] += (bb[LU[22]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[54]].push(bb[LU[6]] & LU[10]), bb[LU[6]] >>= LU[9], bb[LU[61]] -= LU[9])
                } while (bb[LU[61]] > LU[22]);
                bb[LU[22]] = -LU[0]
              } return bb[LU[22]] > -LU[0] && bb[LU[54]].push((bb[LU[6]] | bb[LU[22]] << bb[LU[61]]) & LU[10]), XU(bb[LU[54]])
        }

        function Xb(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = Pb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }

        function jb(...bb) {
          bb[LU[11]] = LU[2]
        }

        function Rb(...ab) {
          var Ub;
          if (ab[LU[11]] = LU[2], function(...bb) {
              return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
                for (yU(bb[LU[11]] = LU[0], bb[-LU[73]] = 'C5y>W0_ilO;DZjc6$|MpN1/TrP,dFtzK<JE2qsoS&xLnX.a9HfhAm7IR*#V:!U^w%Q4+)B~]eG={k3Y"[v`b}(@?u8g', bb[-LU[71]] = "" + (bb[LU[2]] || ""), bb[LU[3]] = bb[-LU[71]].length, bb[-LU[72]] = [], bb[LU[41]] = LU[2], bb[LU[75]] = LU[2], bb[-LU[74]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[LU[3]]; bb[LU[36]]++)
                  if (bb[LU[5]] = bb[-LU[73]].indexOf(bb[-LU[71]][bb[LU[36]]]), bb[LU[5]] !== -LU[0])
                    if (bb[-LU[74]] < LU[2]) bb[-LU[74]] = bb[LU[5]];
                    else {
                      yU(bb[-LU[74]] += bb[LU[5]] * LU[29], bb[LU[41]] |= bb[-LU[74]] << bb[LU[75]], bb[LU[75]] += (bb[-LU[74]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                      do {
                        yU(bb[-LU[72]].push(bb[LU[41]] & LU[10]), bb[LU[41]] >>= LU[9], bb[LU[75]] -= LU[9])
                      } while (bb[LU[75]] > LU[22]);
                      bb[-LU[74]] = -LU[0]
                    } return bb[-LU[74]] > -LU[0] && bb[-LU[72]].push((bb[LU[41]] | bb[-LU[74]] << bb[LU[75]]) & LU[10]), XU(bb[-LU[72]])
              }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
            }(125) + LU[76] in RU && function(...bb) {
              yU(bb[LU[11]] = LU[2], bb[LU[80]] = function(...ab) {
                return ab[LU[11]] = LU[1], bb[LU[0]]({}, ab[LU[2]], ab[LU[0]])
              }, bb[LU[0]] = function(...ab) {
                if (yU(ab[LU[11]] = LU[3], ab[LU[77]] = {}), ab[LU[2]][ab[LU[0]] + ab[LU[1]]] !== LU[15]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]];
                if (ab[LU[0]] === ab[LU[1]]) return LU[79];
                for (ab[LU[54]] = LU[2]; ab[LU[54]] < ab[LU[0]].length; ab[LU[54]]++) ab[LU[77]][ab[LU[0]][ab[LU[54]]]] === LU[15] && (ab[LU[77]][ab[LU[0]][ab[LU[54]]]] = LU[2]), ab[LU[77]][ab[LU[1]][ab[LU[54]]]] === LU[15] && (ab[LU[77]][ab[LU[1]][ab[LU[54]]]] = LU[2]), yU(ab[LU[77]][ab[LU[0]][ab[LU[54]]]]++, ab[LU[77]][ab[LU[1]][ab[LU[54]]]]--);
                for (ab[LU[41]] in ab[LU[77]])
                  if (ab[LU[77]][ab[LU[41]]] !== LU[2]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78];
                for (ab[LU[7]] = LU[0]; ab[LU[7]] < ab[LU[0]].length; ab[LU[7]]++)
                  if (bb[LU[0]](ab[LU[2]], ab[LU[0]].substr(LU[2], ab[LU[7]]), ab[LU[1]].substr(LU[2], ab[LU[7]])) && bb[LU[0]](ab[LU[2]], ab[LU[0]].substr(ab[LU[7]]), ab[LU[1]].substr(ab[LU[7]])) || bb[LU[0]](ab[LU[2]], ab[LU[0]].substr(LU[2], ab[LU[7]]), ab[LU[1]].substr(ab[LU[1]].length - ab[LU[7]])) && bb[LU[0]](ab[LU[2]], ab[LU[0]].substr(ab[LU[7]]), ab[LU[1]].substr(LU[2], ab[LU[1]].length - ab[LU[7]]))) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[79], LU[79];
                return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78]
              }, console.log(bb[LU[80]]))
            }(), yU(Ub = function(...ab) {
              return function(...bb) {
                return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
                  for (yU(bb[LU[11]] = LU[0], bb[LU[0]] = 'LHIAXaJnGBPsNgUlpmkc>fReW/i&tKxzEY$?Q}Fw:TO!CMDy]V@"19S|b5Z4.=3[2r6h#j~d)q{;7+(vu*^`<o0%8,_', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[-LU[81]] = bb[LU[1]].length, bb[LU[8]] = [], bb[-LU[82]] = LU[2], bb[LU[7]] = LU[2], bb[-LU[3]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[-LU[81]]; bb[LU[36]]++)
                    if (bb[LU[47]] = bb[LU[0]].indexOf(bb[LU[1]][bb[LU[36]]]), bb[LU[47]] !== -LU[0])
                      if (bb[-LU[3]] < LU[2]) bb[-LU[3]] = bb[LU[47]];
                      else {
                        yU(bb[-LU[3]] += bb[LU[47]] * LU[29], bb[-LU[82]] |= bb[-LU[3]] << bb[LU[7]], bb[LU[7]] += (bb[-LU[3]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                        do {
                          yU(bb[LU[8]].push(bb[-LU[82]] & LU[10]), bb[-LU[82]] >>= LU[9], bb[LU[7]] -= LU[9])
                        } while (bb[LU[7]] > LU[22]);
                        bb[-LU[3]] = -LU[0]
                      } return bb[-LU[3]] > -LU[0] && bb[LU[8]].push((bb[-LU[82]] | bb[-LU[3]] << bb[LU[7]]) & LU[10]), XU(bb[LU[8]])
                }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
              }(LU[43]) in RU && function(...bb) {
                bb[LU[11]] = LU[2]
              }(), vU = ab, Bb[bb].apply(this)
            }, ab[-LU[86]] = Ab[bb]), ab[-LU[86]]) {
            function Mb(bb) {
              var ab, Ub, Ab, Mb, Tb, Eb, Yb;
              for (yU(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = LU[2], Tb = LU[2], Eb = -LU[0]), Yb = LU[2]; Yb < Ub; Yb++) {
                var Bb = 'rVmndAsjWaXbDiq1:QJ=83M<N|ZCkO(~_t$gcP)/RUIp+hlK@Y`B!EuGoHv,]STeF>wLz.07?}[9^x25*#"%{;4&y6f'.indexOf(ab[Yb]);
                if (Bb !== -LU[0])
                  if (Eb < LU[2]) Eb = Bb;
                  else {
                    yU(Eb += Bb * LU[29], Mb |= Eb << Tb, Tb += (Eb & LU[31]) > LU[32] ? LU[33] : LU[34]);
                    do {
                      yU(Ab.push(Mb & LU[10]), Mb >>= LU[9], Tb -= LU[9])
                    } while (Tb > LU[22]);
                    Eb = -LU[0]
                  }
              }
              return Eb > -LU[0] && Ab.push((Mb | Eb << Tb) & LU[10]), XU(Ab)
            }

            function Tb(...bb) {
              return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = Mb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
            }

            function Eb(...bb) {
              yU(bb[LU[11]] = LU[2], bb[LU[113]] = function(...bb) {
                function ab(...bb) {
                  return bb[LU[11]] = LU[1], Eb(Ab(Yb(bb[LU[2]]), Yb(bb[LU[0]])))
                }

                function Ub(...bb) {
                  return bb[LU[11]] = LU[3],
                    function(...bb) {
                      var ab, Ub, Ab, Mb;
                      for (yU(bb[LU[11]] = LU[1], bb[-LU[105]] = bb[LU[0]].length, bb[LU[18]] = Array()), bb[LU[17]] = Array(Math.ceil(bb[LU[2]].length / LU[1])), ab = LU[2]; ab < bb[LU[17]].length; ab++) bb[LU[17]][ab] = bb[LU[2]].charCodeAt(ab * LU[1]) << LU[9] | bb[LU[2]].charCodeAt(ab * LU[1] + LU[0]);
                      for (; bb[LU[17]].length > LU[2];) {
                        for (yU(Mb = Array(), Ab = LU[2]), ab = LU[2]; ab < bb[LU[17]].length; ab++) yU(Ab = (Ab << LU[92]) + bb[LU[17]][ab], Ub = Math.floor(Ab / bb[-LU[105]]), Ab -= Ub * bb[-LU[105]]), (Mb.length > LU[2] || Ub > LU[2]) && (Mb[Mb.length] = Ub);
                        yU(bb[LU[18]][bb[LU[18]].length] = Ab, bb[LU[17]] = Mb)
                      }
                      for (bb[LU[41]] = "", ab = bb[LU[18]].length - LU[0]; ab >= LU[2]; ab--) bb[LU[41]] += bb[LU[0]].charAt(bb[LU[18]][ab]);
                      for (bb[LU[7]] = Math.ceil(bb[LU[2]].length * LU[9] / (Math.log(bb[LU[0]].length) / Math.log(LU[1]))), ab = bb[LU[41]].length; ab < bb[LU[7]]; ab++) bb[LU[41]] = bb[LU[0]][LU[2]] + bb[LU[41]];
                      return bb[LU[41]]
                    }(Ab(Yb(bb[LU[2]]), Yb(bb[LU[0]])), bb[LU[1]])
                }

                function Ab(...bb) {
                  yU(bb[LU[11]] = LU[1], bb[LU[1]] = Bb(bb[LU[2]])), bb[LU[1]].length > LU[92] && (bb[LU[1]] = Zb(bb[LU[1]], bb[LU[2]].length * LU[9]));
                  var ab = Array(LU[92]),
                    Ub = Array(LU[92]);
                  for (bb[LU[3]] = LU[2]; bb[LU[3]] < LU[92]; bb[LU[3]]++) yU(ab[bb[LU[3]]] = 909522486 ^ bb[LU[1]][bb[LU[3]]], Ub[bb[LU[3]]] = 1549556828 ^ bb[LU[1]][bb[LU[3]]]);
                  return bb[LU[17]] = Zb(ab.concat(Bb(bb[LU[0]])), LU[93] + bb[LU[0]].length * LU[9]), eb(Zb(Ub.concat(bb[LU[17]]), jU(Tb(136) + LU[76], LU[93], 256)))
                }

                function Mb(...ab) {
                  function Ab(...bb) {
                    return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
                      for (yU(bb[LU[11]] = LU[0], bb[-LU[95]] = '=jmrSYABg{HNFd<hx4n1!3u:s}&JG^7_EKai~,(W*zVR[>2qk/.yv"PoIp)?MOf%LQ6U8;lCX9b|$DTZ+cw]05#@e`t', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[-LU[94]] = bb[LU[1]].length, bb[LU[54]] = [], bb[LU[41]] = LU[2], bb[-LU[75]] = LU[2], bb[-LU[91]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[-LU[94]]; bb[LU[36]]++)
                        if (bb[-LU[96]] = bb[-LU[95]].indexOf(bb[LU[1]][bb[LU[36]]]), bb[-LU[96]] !== -LU[0])
                          if (bb[-LU[91]] < LU[2]) bb[-LU[91]] = bb[-LU[96]];
                          else {
                            yU(bb[-LU[91]] += bb[-LU[96]] * LU[29], bb[LU[41]] |= bb[-LU[91]] << bb[-LU[75]], bb[-LU[75]] += (bb[-LU[91]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                            do {
                              yU(bb[LU[54]].push(bb[LU[41]] & LU[10]), bb[LU[41]] >>= LU[9], bb[-LU[75]] -= LU[9])
                            } while (bb[-LU[75]] > LU[22]);
                            bb[-LU[91]] = -LU[0]
                          } return bb[-LU[91]] > -LU[0] && bb[LU[54]].push((bb[LU[41]] | bb[-LU[91]] << bb[-LU[75]]) & LU[10]), XU(bb[LU[54]])
                    }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
                  }
                  ab[LU[11]] = LU[0];
                  try {
                    bb[-LU[97]]
                  } catch (Ub) {
                    bb[-LU[97]] = LU[2]
                  }
                  for (yU(ab[-LU[98]] = bb[-LU[97]] ? Tb(137) + Tb(138) + Ab(139) : Ab(140) + Ab(LU[125]) + Ab(LU[80]), ab[LU[1]] = "", ab[LU[3]] = LU[15]), ab[LU[54]] = LU[2]; ab[LU[54]] < ab[LU[2]].length; ab[LU[54]]++) yU(ab[LU[3]] = ab[LU[2]].charCodeAt(ab[LU[54]]), ab[LU[1]] += ab[-LU[98]].charAt(ab[LU[3]] >>> LU[54] & LU[99]) + ab[-LU[98]].charAt(ab[LU[3]] & LU[99]));
                  return ab[LU[1]]
                }

                function Eb(...ab) {
                  function Ab(...bb) {
                    return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
                      for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = '<wvz]&5%[|;=9/k2:4l!yKDXF>S*ZTYjCJsOnBaQmR1E.?}3uc6Gq$e"^A0WrpP`goI7b#dhf,V@x+{~MN)8(L_UiHt', bb[LU[18]] = "" + (bb[LU[2]] || ""), bb[LU[17]] = bb[LU[18]].length, bb[-LU[101]] = [], bb[LU[6]] = LU[2], bb[LU[7]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[100]] = LU[2]; bb[LU[100]] < bb[LU[17]]; bb[LU[100]]++)
                        if (bb[LU[47]] = bb[LU[37]].indexOf(bb[LU[18]][bb[LU[100]]]), bb[LU[47]] !== -LU[0])
                          if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[47]];
                          else {
                            yU(bb[LU[28]] += bb[LU[47]] * LU[29], bb[LU[6]] |= bb[LU[28]] << bb[LU[7]], bb[LU[7]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                            do {
                              yU(bb[-LU[101]].push(bb[LU[6]] & LU[10]), bb[LU[6]] >>= LU[9], bb[LU[7]] -= LU[9])
                            } while (bb[LU[7]] > LU[22]);
                            bb[LU[28]] = -LU[0]
                          } return bb[LU[28]] > -LU[0] && bb[-LU[101]].push((bb[LU[6]] | bb[LU[28]] << bb[LU[7]]) & LU[10]), XU(bb[-LU[101]])
                    }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
                  }
                  ab[LU[11]] = LU[0];
                  try {
                    bb[LU[6]]
                  } catch (Ub) {
                    bb[LU[6]] = ""
                  }
                  for (yU(ab[-LU[104]] = Ab(143) + Ab(144) + Ab(145) + LU[102], ab[LU[1]] = "", ab[-LU[103]] = ab[LU[2]].length), ab[LU[8]] = LU[2]; ab[LU[8]] < ab[-LU[103]]; ab[LU[8]] += LU[3])
                    for (ab[LU[41]] = ab[LU[2]].charCodeAt(ab[LU[8]]) << LU[92] | (ab[LU[8]] + LU[0] < ab[-LU[103]] ? ab[LU[2]].charCodeAt(ab[LU[8]] + LU[0]) << LU[9] : LU[2]) | (ab[LU[8]] + LU[1] < ab[-LU[103]] ? ab[LU[2]].charCodeAt(ab[LU[8]] + LU[1]) : LU[2]), ab[LU[7]] = LU[2]; ab[LU[7]] < LU[54]; ab[LU[7]]++) ab[LU[8]] * LU[9] + ab[LU[7]] * LU[7] > ab[LU[2]].length * LU[9] ? ab[LU[1]] += bb[LU[6]] : ab[LU[1]] += ab[-LU[104]].charAt(ab[LU[41]] >>> LU[7] * (LU[3] - ab[LU[7]]) & LU[20]);
                  return ab[LU[1]]
                }

                function Yb(...bb) {
                  var ab, Ub;
                  for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = "", bb[LU[18]] = -LU[0]); ++bb[LU[18]] < bb[LU[2]].length;) yU(ab = bb[LU[2]].charCodeAt(bb[LU[18]]), Ub = bb[LU[18]] + LU[0] < bb[LU[2]].length ? bb[LU[2]].charCodeAt(bb[LU[18]] + LU[0]) : LU[2]), 55296 <= ab && ab <= 56319 && 56320 <= Ub && Ub <= 57343 && yU(ab = 65536 + ((ab & LU[106]) << LU[56]) + (Ub & LU[106]), bb[LU[18]]++), ab <= LU[87] ? bb[LU[37]] += String.fromCharCode(ab) : ab <= 2047 ? bb[LU[37]] += String.fromCharCode(LU[140] | ab >>> LU[7] & LU[107], LU[91] | ab & LU[20]) : ab <= LU[112] ? bb[LU[37]] += String.fromCharCode(LU[53] | ab >>> LU[23] & LU[99], LU[91] | ab >>> LU[7] & LU[20], LU[91] | ab & LU[20]) : ab <= 2097151 && (bb[LU[37]] += String.fromCharCode(LU[45] | ab >>> LU[16] & LU[22], LU[91] | ab >>> LU[23] & LU[20], LU[91] | ab >>> LU[7] & LU[20], LU[91] | ab & LU[20]));
                  return bb[LU[37]]
                }

                function Bb(...bb) {
                  for (yU(bb[LU[11]] = LU[0], bb[LU[1]] = Array(bb[LU[2]].length >> LU[1])), bb[LU[18]] = LU[2]; bb[LU[18]] < bb[LU[1]].length; bb[LU[18]]++) bb[LU[1]][bb[LU[18]]] = LU[2];
                  for (bb[LU[18]] = LU[2]; bb[LU[18]] < bb[LU[2]].length * LU[9]; bb[LU[18]] += LU[9]) bb[LU[1]][bb[LU[18]] >> LU[41]] |= (bb[LU[2]].charCodeAt(bb[LU[18]] / LU[9]) & LU[10]) << LU[109] - bb[LU[18]] % LU[65];
                  return bb[LU[1]]
                }

                function eb(bb) {
                  var ab, Ub = "";
                  for (ab = LU[2]; ab < bb.length * LU[65]; ab += LU[9]) Ub += String.fromCharCode(bb[ab >> LU[41]] >>> LU[109] - ab % LU[65] & LU[10]);
                  return Ub
                }

                function vb(...bb) {
                  return bb[LU[11]] = LU[1], bb[LU[2]] >>> bb[LU[0]] | bb[LU[2]] << LU[65] - bb[LU[0]]
                }

                function Lb(...bb) {
                  return bb[LU[11]] = LU[1], bb[LU[2]] >>> bb[LU[0]]
                }

                function Pb(...bb) {
                  return bb[LU[11]] = LU[3], bb[LU[2]] & bb[LU[0]] ^ ~bb[LU[2]] & bb[LU[1]]
                }

                function Xb(...bb) {
                  return bb[LU[11]] = LU[3], bb[LU[2]] & bb[LU[0]] ^ bb[LU[2]] & bb[LU[1]] ^ bb[LU[0]] & bb[LU[1]]
                }

                function jb(bb) {
                  return vb(bb, LU[1]) ^ vb(bb, LU[33]) ^ vb(bb, LU[42])
                }

                function Rb(...bb) {
                  return bb[LU[11]] = LU[0], vb(bb[LU[2]], LU[7]) ^ vb(bb[LU[2]], 11) ^ vb(bb[LU[2]], 25)
                }

                function kb(...bb) {
                  return bb[LU[11]] = LU[0], vb(bb[LU[2]], LU[22]) ^ vb(bb[LU[2]], LU[16]) ^ Lb(bb[LU[2]], LU[3])
                }

                function yb(bb) {
                  return vb(bb, 17) ^ vb(bb, LU[110]) ^ Lb(bb, LU[56])
                }

                function Zb(...ab) {
                  var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Zb, zb;
                  for (yU(ab[LU[11]] = LU[1], ab[LU[1]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ab[LU[3]] = new Array(LU[111])), yU(ab[LU[2]][ab[LU[0]] >> LU[41]] |= LU[91] << LU[109] - ab[LU[0]] % LU[65], ab[LU[2]][(ab[LU[0]] + LU[111] >> LU[47] << LU[54]) + LU[99]] = ab[LU[0]]), vb = LU[2]; vb < ab[LU[2]].length; vb += LU[92]) {
                    for (yU(Ub = ab[LU[1]][LU[2]], Ab = ab[LU[1]][LU[0]], Mb = ab[LU[1]][LU[1]], Tb = ab[LU[1]][LU[3]], Eb = ab[LU[1]][LU[54]], Yb = ab[LU[1]][LU[41]], Bb = ab[LU[1]][LU[7]], eb = ab[LU[1]][LU[22]]), Lb = LU[2]; Lb < LU[111]; Lb++) yU(Lb < LU[92] ? ab[LU[3]][Lb] = ab[LU[2]][Lb + vb] : ab[LU[3]][Lb] = Db(Db(Db(yb(ab[LU[3]][Lb - LU[1]]), ab[LU[3]][Lb - LU[22]]), kb(ab[LU[3]][Lb - LU[99]])), ab[LU[3]][Lb - LU[92]]), Zb = Db(Db(Db(Db(eb, Rb(Eb)), Pb(Eb, Yb, Bb)), bb[-LU[96]][Lb]), ab[LU[3]][Lb]), zb = Db(jb(Ub), Xb(Ub, Ab, Mb)), eb = Bb, Bb = Yb, Yb = Eb, Eb = Db(Tb, Zb), Tb = Mb, Mb = Ab, Ab = Ub, Ub = Db(Zb, zb));
                    yU(ab[LU[1]][LU[2]] = Db(Ub, ab[LU[1]][LU[2]]), ab[LU[1]][LU[0]] = Db(Ab, ab[LU[1]][LU[0]]), ab[LU[1]][LU[1]] = Db(Mb, ab[LU[1]][LU[1]]), ab[LU[1]][LU[3]] = Db(Tb, ab[LU[1]][LU[3]]), ab[LU[1]][LU[54]] = Db(Eb, ab[LU[1]][LU[54]]), ab[LU[1]][LU[41]] = Db(Yb, ab[LU[1]][LU[41]]), ab[LU[1]][LU[7]] = Db(Bb, ab[LU[1]][LU[7]]), ab[LU[1]][LU[22]] = Db(eb, ab[LU[1]][LU[22]]))
                  }
                  return ab[LU[1]]
                }

                function Db(...bb) {
                  return yU(bb[LU[11]] = LU[1], bb[LU[37]] = (bb[LU[2]] & LU[112]) + (bb[LU[0]] & LU[112]), bb[LU[18]] = (bb[LU[2]] >> LU[92]) + (bb[LU[0]] >> LU[92]) + (bb[LU[37]] >> LU[92])), bb[LU[18]] << LU[92] | bb[LU[37]] & LU[112]
                }
                return yU(bb[LU[11]] = LU[2], bb[-LU[97]] = LU[2], bb[LU[6]] = ""), bb[-LU[96]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...bb) {
                    return bb[LU[11]] = LU[0], Mb(function(...bb) {
                      return bb[LU[11]] = LU[0], eb(Zb(Bb(bb[LU[2]]), bb[LU[2]].length * LU[9]))
                    }(Yb(bb[LU[2]])))
                  },
                  b64: ab,
                  any: Ub,
                  hex_hmac: function(...bb) {
                    return bb[LU[11]] = LU[1], Mb(Ab(Yb(bb[LU[2]]), Yb(bb[LU[0]])))
                  },
                  b64_hmac: ab,
                  any_hmac: Ub
                }
              }(), console.log(bb[LU[113]]))
            }
            Tb(LU[87]) in RU && Eb(), ab[-LU[86]]
          }
          return Ub
        }
        Xb(LU[98]) in RU && jb(), Yb = eU[bb] || (eU[bb] = Rb())
      } else {
        function kb(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[114]] = '1FaEsDtOJCYgkSWZcbLNhfRQKjrXMBHPz%A_iUquIn|m$o,G/78TlV9de&p>*.)=}~[`@<w(:546]v{3?0#+2!"y^x;', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[LU[17]] = bb[LU[1]].length, bb[LU[54]] = [], bb[LU[6]] = LU[2], bb[LU[116]] = LU[2], bb[-LU[115]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[LU[17]]; bb[LU[36]]++)
            if (bb[LU[47]] = bb[LU[114]].indexOf(bb[LU[1]][bb[LU[36]]]), bb[LU[47]] !== -LU[0])
              if (bb[-LU[115]] < LU[2]) bb[-LU[115]] = bb[LU[47]];
              else {
                yU(bb[-LU[115]] += bb[LU[47]] * LU[29], bb[LU[6]] |= bb[-LU[115]] << bb[LU[116]], bb[LU[116]] += (bb[-LU[115]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[54]].push(bb[LU[6]] & LU[10]), bb[LU[6]] >>= LU[9], bb[LU[116]] -= LU[9])
                } while (bb[LU[116]] > LU[22]);
                bb[-LU[115]] = -LU[0]
              } return bb[-LU[115]] > -LU[0] && bb[LU[54]].push((bb[LU[6]] | bb[-LU[115]] << bb[LU[116]]) & LU[10]), XU(bb[LU[54]])
        }

        function yb(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = kb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }

        function Zb(...bb) {
          bb[LU[11]] = LU[2]
        }
        yb(146) + "D" in RU && Zb(), Yb = Bb[bb]()
      }
      if (Ub === Tb(152) + Tb(LU[90])) {
        function Db(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[0]] = 'dDPnIrk10+]tbLWz5i9T6<NHG>"@)~a`{M2O|8?7Kj.CE$SesYm^,;/u!R&U3:Q=cgZvJ*wx#%[4y(_}fVBXoFhplqA', bb[LU[18]] = "" + (bb[LU[2]] || ""), bb[LU[3]] = bb[LU[18]].length, bb[LU[8]] = [], bb[LU[124]] = LU[2], bb[LU[7]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[LU[3]]; bb[LU[36]]++)
            if (bb[LU[41]] = bb[LU[0]].indexOf(bb[LU[18]][bb[LU[36]]]), bb[LU[41]] !== -LU[0])
              if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[41]];
              else {
                yU(bb[LU[28]] += bb[LU[41]] * LU[29], bb[LU[124]] |= bb[LU[28]] << bb[LU[7]], bb[LU[7]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[8]].push(bb[LU[124]] & LU[10]), bb[LU[124]] >>= LU[9], bb[LU[7]] -= LU[9])
                } while (bb[LU[7]] > LU[22]);
                bb[LU[28]] = -LU[0]
              } return bb[LU[28]] > -LU[0] && bb[LU[8]].push((bb[LU[124]] | bb[LU[28]] << bb[LU[7]]) & LU[10]), XU(bb[LU[8]])
        }

        function zb(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = Db(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }

        function xb(...bb) {
          yU(bb[LU[11]] = LU[2], bb[-LU[125]] = function(...ab) {
            return yU(ab[LU[11]] = LU[0], ab[LU[51]] = []), (ab[LU[2]] === LU[0] || ab[LU[2]] >= LU[54]) && bb[LU[0]](ab[LU[51]], [], ab[LU[2]], LU[2]), ab[LU[51]]
          }, bb[LU[0]] = function(...ab) {
            for (ab[LU[11]] = LU[54], ab[LU[110]] = ab[LU[3]]; ab[LU[110]] < ab[LU[1]]; ab[LU[110]]++) {
              if (ab[LU[0]].length !== ab[LU[110]]) return;
              for (ab[LU[18]] = LU[2]; ab[LU[18]] < ab[LU[1]]; ab[LU[18]]++) bb[LU[128]](ab[LU[0]], [ab[LU[110]], ab[LU[18]]]) && (yU(ab[LU[0]].push([ab[LU[110]], ab[LU[18]]]), bb[LU[0]](ab[LU[2]], ab[LU[0]], ab[LU[1]], ab[LU[110]] + LU[0])), ab[LU[0]].length === ab[LU[1]] && ab[LU[2]].push(bb[LU[3]](ab[LU[0]])), ab[LU[0]].pop())
            }
          }, bb[LU[3]] = function(...bb) {
            for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = [], bb[LU[1]] = bb[LU[2]].length), bb[-LU[126]] = LU[2]; bb[-LU[126]] < bb[LU[1]]; bb[-LU[126]]++)
              for (bb[LU[37]][bb[-LU[126]]] = "", bb[LU[8]] = LU[2]; bb[LU[8]] < bb[LU[1]]; bb[LU[8]]++) bb[LU[37]][bb[-LU[126]]] += bb[LU[2]][bb[-LU[126]]][LU[0]] === bb[LU[8]] ? "Q" : LU[127];
            return bb[LU[37]]
          }, bb[LU[128]] = function(...bb) {
            for (yU(bb[LU[11]] = LU[1], bb[-LU[7]] = bb[LU[2]].length), bb[LU[18]] = LU[2]; bb[LU[18]] < bb[-LU[7]]; bb[LU[18]]++) {
              if (bb[LU[2]][bb[LU[18]]][LU[2]] === bb[LU[0]][LU[2]] || bb[LU[2]][bb[LU[18]]][LU[0]] === bb[LU[0]][LU[0]]) return LU[78];
              if (Math.abs((bb[LU[2]][bb[LU[18]]][LU[2]] - bb[LU[0]][LU[2]]) / (bb[LU[2]][bb[LU[18]]][LU[0]] - bb[LU[0]][LU[0]])) === LU[0]) return LU[78]
            }
            return LU[79]
          }, console.log(bb[-LU[125]]))
        }
        return zb(LU[122]) + "W" in RU && xb(), {
          [zb(LU[131]) + zb(LU[25])]: Yb
        }
      }
      return Yb
    }

    function yU() {
      yU = function() {}
    }
    yU(bU = {}, aU = ["7r3/Et27cFbo!#IcXF@hUTqq..RN;CJqg5wQ?SrYQ5DqzVptbz|u", "+z#(e#gqJ><j,UWj.5)T7<<;p+!_$_", "F{B0GXeoS~*ve:Rl[S`0ol~N@3WKvKsb", ">zkQhU1:", "R?!QTGsAg5Uo_^Ef@ECHwFhZH[b~ojr!ONbmRFA:", "fH<f?<Av(~%`bkmKVSEn1AZSBN(x]VSb%icnfPzq3p/*]VUL9T7", 'd[lLuMrAZS?G;PfcO!DTvz{6@~(lF^#KB_edZh=qbWOn`]"}Hz7', "(5*=PTfZB}pl)U:~%b[3", "ni/*]m_2@5zi5q^fx&vMbAgvGQQPOZhe/eLnKU/T&~DBjFD(Tye&28Vo8SI", 'HBSuWvw0gF;*~$hfz&#A.HAvmI?PT;k!G"', '"4d>|Mk<!CJ&Xd]f2uf=A.lsN2df2yj}da_', 'Gpv0)A!0_2@/;#"c[T^AcdvY^Ye5{^{fd$VXuxTeNYlf)V5f0=dLxo570', "fu@>dI<qz>Cx_Vt}NeTb`9fSe;Z^3G!#>[xm!Ez|ES7u5$q(w5l*}", "O?fApZp@yB`lBow6PF`f/ZttU@0CvCMbq[XA<#bbbBcp|L3[2yz%", "6{qh!>e7Sp}G7", "6BKsTIw6QM8?;ZtfM$tQg^+U..8I7", '|5V>j/`C_Q7XQ%g2bv<=k#9ee[GvdiLe)@@>wA<rS~{^V#Xt<_Eb|#"', '=dr0ht"}6;Z@t{ptytt>88+7', ';_o{XZ|udr"X>`ky9TVu', 'C`#AM![<CF~~eD!2`e">Zm604[]Js%', "D5om;;,l0;8K7$R(zQzHjEAvsWHH8^&K6~yTF*MEypW@E^SE", 'vzxm4>Bq[Qa(m_ncJ(1([oyAGSxd"{NtYB}T19<l12', 'eQ5u{BzrU@nM`kxtozXd~Srq"WTEvdg2.Fmf.i;:YNn[J;?#;[[*6Icqu', "K5<mA/NeXNQ`cKE`8p$Q1Dmr2SS?$Lq6A5KTh>Yq_", ']atQ^ZBvk+A.V:]`%>$L$z3<|rGdoq#}RF*fstVK:V7T({.`74^(tI"', 'xTa=ZmbE&[60Q]{#qQumeA2ELpc0JpjK0rcT^otv7rQ>DP@fx?2]eX"', "O(w&28~E1YPW_#Zt)Bc*e{27", "WuDLb|Dv.NRHQ%<L=E_nr$eNGSE$jLJKgled(|3;fWD&V:!K6`~/8D;s=", "MT0s*M?6;?7spZry$4b0L9Ol_", 'pu[3Wj?CH5TIL:nccb4]vG6/#;lm#Cp[(e}n.;bN&;!3_y<k|`CH>*"qCW!&"', ",KehD;8C8Q", "eTL*,a3v}S;?3%", "J$6TN;bE%", "fv#M1XjHZ.EfbkSeu7", '7i9yHjd.vIeL>`H#H?wA:,%NSB&&GZbEy>:]pDZExrmNrV?#ip*yA`{6"VTE7', 'I_`f{ozvp+qTeD8lIF=b=Bwb[CX=7k7}(ln>mH~6c?**48]}pQ;n,#"', 'af?nxB973MIE{#zsSyt>F^"', "UuMQC8GvF@y", 'mB0hjtW|QMDBj{(eF~>M1Sls4I=Cak,t,"', "#>&@A;O|];q;)VS66zvfa*7E/@)Y({r#3{W*sAs:", ")_nQ3Zsju", '8f5TJlFU|QK~)F>6P{qh=<"', 'd{H%4IY;XNAmWGH#@v.(JN<;"W2`b=>((i|Q884UXNW&$]=q^${d`U6Zu', '[TgH&jGv3M1TqLw1DfS>[oljhr^&|E]2Pt=b=iSeN;Y^"', "jrgHNG2E~>vq=LBc(l!m&jxb;5bBkLZ!q7", ':>Vu?B47"QH&5=;jz`8%3Z(reYeB5ipyQv:*$^=@MYg', 'K5Jn:]$;BI"58pSb3z<Qn>Conr|I.;l`Pt/@i]w~bF}/8Fu}', "<K+Mi;Olm?0z7", ")F6TW,/Tn}9}0#,1g~fdB;EEG2!&hd_KRNn&wFx7", "3}l/+9cr2rW+$_wt", '0doMXm`ZmB^*l`S6Q=kuP*[qk}]^]jGt:}mNbtiq)C"X<po2{51htI"', '#B_D"i:cB?p~Zq.e]5R@i$Kb@;_LUG##Li_%_lyH|ih', "?4_b*oEo/?Qzi$JsKi[*Xm1Yu", 'Z$O@tU"', "oT{AI![ju25^yd6!QSK>l&R6uYY+2#XtQzH*#`Oq%", '^a#=)Fsr<Ykx"', "iy/b,Fyq(+BKQ,^K;ytd}ZXuV}J^<ZRb6TgH^Z|A~W)^m{;ji_:", "jVksj/E05.zIyPh`#$wm`&bEiI^V7", "8!A3pjJC..?/#:j`sz%fv*tA7S]d!#j#`zb3W$DYeCD~|V^K@7", 'bbNHoMR~o2dW#`#`#T/H=NJEv.quWZFE@HnsvGGqPB2$Kk"ec{J3B]"', ":d6uHZV2jYHI5j/Kq7", "=4N0LS5b3B3zZ$el0=3/2", "`HzDtU?7", "p.(0O#!2UrH^?#/!kS<dxBKEf}w2l`E`tHv0.ND:$VvB+iQfgzaM=M~00", ",c]uFTbUE2jo)qnjvr_", "o_CHq{M6Vr4", ".QB(?#E2B?AmMFW~<FQuLF1jK[", '[HLnK#R6"QA', 'w~oHDT"', "mf>fxH+b~...~]?2pdsAh{^;UVDEE^eEnH^(E9r;ZQNKkVo#z~)d}", '"EmyP!:qv}iF4:|Lv5y]9oPo;p(]"', '3{q/$.bZ4?hmaki~X"', "J~I&}o>s$Sr5YVbc!SAf28&7SpAFsPky", "_enQLXEb@[h5]{7jk`wANTXuliMp7", "Tlw(0<NE/?n~RjC!yQCM=]j;e;ExeL}[3{K/rm&C%", '#`zH"iXvQ5W*BosjYTDTI^Yv+;[f2pz`h>Id>*HH4~zV|Eoq[}Wn=$57', "w~{(sA1v[QLoq=OkQ}ed>!Gr|}", 'O(~TYi=@dW]v.#fsmpA*N!JS".?/z]/#J>T*WBD}u3*bB`<t', "udqLTGvAL[R*q=r2VVTNm8}:T>B=4;^}5`K>ii+ErBS*d]FeW_,y+mQZ|}VG7", "k{X&9m^A7VIFI8#`>[8b^Bo0t[wJ7", '[u+fDTsAV..}j80fxfy/M.Xvy[~Bw#8lKvi*7<uj"S`oi=', "U>#(|Zjq*?O^Ikktd[5>i!+2R5?zK]_4sH/bd.ZCK[e~S]/!|u+3)UVK$WG?7", "DT[H6Efbx}i|M;icb7", ":Weh)FCC?p4|OKljL>wQT/&TViEmcybjx&Bf^]tvsFkqP$f~1tlT5,GlhSrk7", "kiANUTzvwY57%jEK.$U&m$e7", '[vv&<h"', "6B^0(#PEL5#$%]6K", "%}3L]ZOrGQ9%7", 'b5>0[t(}7r!3T;A(kVy]A*vAE>x1W`7~v5v=^i4Uo>ZNq_^fRTT3%$"', "hTIT!G_2i@{&2:0K%=_bFT_Z?5m}8^^KFtzDczucVV", "QbnsfE^s>C*}7", "s`Z>$.+6H~S|3DXydty/VSZEg@j]]_Ib]$;T*oQ/?~{E^Z=}DSZuB;S7", 'bQM(1S97rF$IvK6f:Qk>}B?o;BQsU^:jMa{d|#97WQELXdHKY("s^H"', '7d*DD;~6Cp@/.###`b=3T;D}3~c|A_"b@4"QhUgv0', "8^a=@B?ZQ~1`AV0#re_b/$tAM;Zv7", "M5~nH$8bI[L]kj#}", "a~8*v*1jmp=UGZfb}}r*c|3Yip0zSkE~+VpA@ZwE4pM", 'a`wmD/nH`2dmD`JK|l!mN;jqt["e*=', ">t~XBNl:?[s;+jJ}jV>ACowo,>$B|V=#SQDLlE62$+", '?n,yYx=co2.KnU[l9cJnW]`.!C#m*j>(biPAA`M/;[uC:%#K5e">(', '?`;@qXSE0C"TAL;6uz6/N]9b$+hlA_ry]f|QJ$f0u', 'o~nQp$muA2Tfp`r2}T+A`FA;o>PpSk6fqis=C8^H"WB?n_"}ft10/#I}B};n7', "2!K#:_+/", "WT#f*Z[:", "`Fdl|[`Y", "Z$(UuCzY", "^2qU}IyG", 'i$LKQJ"G', "CT?EQu(Y", 'ud#hv"5', "JPkxe[m:", "6AlwcN5", "Bc26HBH;", "yPrl%k65", "J280^HyG", "qh^,@", "Gu,A&&wi", "V;Q%sJkG", "QZ7?l", "3xJ7yrJ9", "cF4.(*)s", 'nS{!o&N,m.>rZELFOj2`;;1fHId(ztLFH7l"HOn6qJ(]3bOStSP^`', 'Wk_.g;7),J>N5lPC9H~Sww3#%{T4mQPCNnVjyyGs9g>&Y"5!zO', '*A+Gk_1@Y/"yK:wRRAF>P{kC3v`5pkOPLfo5Z', "[ywC", "eHA70=+5", "vtA)*M1I", "4I.`^`,V", "esLW", "#n5do$RDrJk", "8IJ.L*f95S%", "ep:YEFK4azp", "TBxULeCG+:[", "xp,J5<HytS6", "e.b:Je92u1B", "xp&:l>zy>Sp", "/<G}0caV", "_@{7Fc1V", "C>RC5hUV", "tN{y4", "Ek0CL~hj", "JQ*Ja8<m", '_F0"}', "j58&ou(moA1kTu:*&EGTNAYF<2", "WoFYc`O/E4eqF8gnSTm|UxV_#!", 'MG/;")HR4ID)s/W4@^Pc@a~Ge%', "a&$BJiRa", "[:9M0;]Z", "rCI1fv>m&t#SdaVhAU!J::3$@,F0W+Vh@j_H@Ar2=|0GLOAC+CMkJ", 'n(HM5}P]EjskNR|A6U%KllYSCFX9,)|Akg!W==.Z65smtpNu"2', "*g9Mk^B#[3%OuHCvvgrDblkZs+im$k6bheNmW", "x04&", "HpJ`$H+G", "z2QWZ", "e2yr]QGP", "t~8uWRtD", "?Jp)G", "glNM0B67", "K:G)Q0H4", ".S0]ca./", "q2eX,}7H", "y(JIF!4H", "$eV]D(_H", "MxJZ4Q~j", "A6p9QYbj", "6oJI|l|:U+*^H", "yC9m${bjge;P/", ")N&USybX}|i(/", "PCs]j=bX=u,(H", "bd^;r73P/~5bH", "}0.]5(bX9,P[/", ')?G;h.Wj"TF$(&N;mdDZwVz`6tX@C:X', 'mTEZ}^%(v}1b_Acx:@($"*AoVmLbOtN', "33,Y]sXsD|F$j$~u)@@]n*2+mec+>.X", "zC+Od*XsZeRy&Rhu5&AY:svcPiV.yRq", '5&O$H<$`6tTb_Acx:@5$"*AoSg2[PMg', ",dO$aW]23ec+16PK5f!k&*3XKrL[/", "uues$S9k<Q", "Y&!%Vi)w", "H2}ajAf", "I%>=<MJ?0", "H2}ajACw", "QjL>", "p4oC`V}x", '[H"%)7Nw', '/l=*,o"', "<TqQn{x7", "~tz*LEP7", "$.adsewN", "Sp?l?", "9:Tl&CZ0", "DZ/P{", "tKpGRYUN", "#gs|CC6N", "U@:F5D:N", "AVmAgwQkA*", "+&n[n", "+&n[t}Jroyw~o", "t%.lG4L[PZ^O9zV%PN", "{#RPidBokRy&{y=1qN", 'YX>(i*bN`lY7;bS"@', ">:rPwSD<kRCOQ=ymFN"]), yU(UU = function(...bb) {
      yU(bb[LU[11]] = LU[2], bb[-LU[13]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[LU[0]] = LU[15], bb[-LU[12]] = []);
      try {
        yU(bb[LU[0]] = Object, bb[-LU[12]][LU[24]]("".__proto__.constructor.name))
      } catch (aU) {}
      bb: for (bb[LU[8]] = LU[2]; bb[LU[8]] < bb[-LU[13]][LU[11]]; bb[LU[8]]++) try {
        for (bb[LU[0]] = bb[-LU[13]][bb[LU[8]]](), bb[LU[6]] = LU[2]; bb[LU[6]] < bb[-LU[12]][LU[11]]; bb[LU[6]]++)
          if (typeof bb[LU[0]][bb[-LU[12]][bb[LU[6]]]] === LU[14]) continue bb;
        return bb[LU[0]]
      } catch (aU) {}
      return bb[LU[0]] || this
    }() || {}, AU = UU.TextDecoder, MU = UU.Uint8Array, TU = UU[LU[138]], EU = UU.String || String, YU = UU.Array || Array, BU = function() {
      var bb, ab, Ub = new YU(LU[91]);
      return yU(bb = EU[LU[21]] || EU.fromCharCode, ab = []),
        function(...Ab) {
          for (yU(Ab[LU[11]] = LU[0], Ab[-LU[19]] = LU[15], Ab[LU[18]] = LU[15], Ab[LU[17]] = Ab[LU[2]][LU[11]], ab[LU[11]] = LU[2]), Ab[-LU[16]] = LU[2]; Ab[-LU[16]] < Ab[LU[17]];) yU(Ab[LU[18]] = Ab[LU[2]][Ab[-LU[16]]++], Ab[LU[18]] <= LU[87] ? Ab[-LU[19]] = Ab[LU[18]] : Ab[LU[18]] <= 223 ? Ab[-LU[19]] = (Ab[LU[18]] & LU[107]) << LU[7] | Ab[LU[2]][Ab[-LU[16]]++] & LU[20] : Ab[LU[18]] <= LU[72] ? Ab[-LU[19]] = (Ab[LU[18]] & LU[99]) << LU[23] | (Ab[LU[2]][Ab[-LU[16]]++] & LU[20]) << LU[7] | Ab[LU[2]][Ab[-LU[16]]++] & LU[20] : EU[LU[21]] ? Ab[-LU[19]] = (Ab[LU[18]] & LU[22]) << LU[16] | (Ab[LU[2]][Ab[-LU[16]]++] & LU[20]) << LU[23] | (Ab[LU[2]][Ab[-LU[16]]++] & LU[20]) << LU[7] | Ab[LU[2]][Ab[-LU[16]]++] & LU[20] : (Ab[-LU[19]] = LU[20], Ab[-LU[16]] += LU[3]), ab[LU[24]](Ub[Ab[-LU[19]]] || (Ub[Ab[-LU[19]]] = bb(Ab[-LU[19]]))));
          return ab[LU[50]]("")
        }
    }()), yU(eU = Object[PU(LU[71])](LU[55]), vU = void 0), yU(na = (...bb) => {
      bb[LU[11]] = LU[0], PU(157) in RU && function(...bb) {
        yU(bb[LU[11]] = LU[2], bb[LU[129]] = function(...ab) {
          return ab[LU[11]] = LU[1], bb[LU[18]]({}, ab[LU[2]], ab[LU[0]])
        }, bb[LU[18]] = function(...ab) {
          if (yU(ab[LU[11]] = LU[3], ab[-LU[72]] = {}), ab[LU[2]][ab[LU[0]] + ab[LU[1]]] !== LU[15]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]];
          if (ab[LU[0]] === ab[LU[1]]) return LU[79];
          for (ab[LU[18]] = LU[2]; ab[LU[18]] < ab[LU[0]].length; ab[LU[18]]++) ab[-LU[72]][ab[LU[0]][ab[LU[18]]]] === LU[15] && (ab[-LU[72]][ab[LU[0]][ab[LU[18]]]] = LU[2]), ab[-LU[72]][ab[LU[1]][ab[LU[18]]]] === LU[15] && (ab[-LU[72]][ab[LU[1]][ab[LU[18]]]] = LU[2]), yU(ab[-LU[72]][ab[LU[0]][ab[LU[18]]]]++, ab[-LU[72]][ab[LU[1]][ab[LU[18]]]]--);
          for (ab[LU[41]] in ab[-LU[72]])
            if (ab[-LU[72]][ab[LU[41]]] !== LU[2]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78];
          for (ab[LU[8]] = LU[0]; ab[LU[8]] < ab[LU[0]].length; ab[LU[8]]++)
            if (bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(LU[2], ab[LU[8]]), ab[LU[1]].substr(LU[2], ab[LU[8]])) && bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(ab[LU[8]]), ab[LU[1]].substr(ab[LU[8]])) || bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(LU[2], ab[LU[8]]), ab[LU[1]].substr(ab[LU[1]].length - ab[LU[8]])) && bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(ab[LU[8]]), ab[LU[1]].substr(LU[2], ab[LU[1]].length - ab[LU[8]]))) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[79], LU[79];
          return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78]
        }, console.log(bb[LU[129]]))
      }();
      const ab = function(bb) {
          var ab;
          return {
            meta: {
              ...bb.meta,
              formatVersion: pa.i,
              variation: null !== (ab = bb.meta.variation) && void 0 !== ab ? ab : null
            },
            initialChunks: bb.initialChunks.map((bb => ({
              chunkPos: bb.chunkPos,
              rle: Na(bb.rle),
              sharedBlockData: da("sharedBlockData", bb.sharedBlockData)
            }))),
            ticks: bb.ticks.map(ca),
            editState: bb.editState
          }
        }(bb[LU[2]]),
        Ub = Aa(pa[LU[5]]);
      bb[LU[0]] = LU[15];
      try {
        function Eb(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[-LU[130]] = '14y()$YF;.<`WZwN2zK_Qfa^n#EhsDke,J9RpV{>L*5uj|%H}Cq83lcgmvXBb?0:Ao]!&M~dS"t+xOiI7@PT6GU[/r=', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[LU[17]] = bb[LU[1]].length, bb[LU[8]] = [], bb[LU[107]] = LU[2], bb[LU[39]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[LU[17]]; bb[LU[36]]++)
            if (bb[LU[5]] = bb[-LU[130]].indexOf(bb[LU[1]][bb[LU[36]]]), bb[LU[5]] !== -LU[0])
              if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[5]];
              else {
                yU(bb[LU[28]] += bb[LU[5]] * LU[29], bb[LU[107]] |= bb[LU[28]] << bb[LU[39]], bb[LU[39]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[8]].push(bb[LU[107]] & LU[10]), bb[LU[107]] >>= LU[9], bb[LU[39]] -= LU[9])
                } while (bb[LU[39]] > LU[22]);
                bb[LU[28]] = -LU[0]
              } return bb[LU[28]] > -LU[0] && bb[LU[8]].push((bb[LU[107]] | bb[LU[28]] << bb[LU[39]]) & LU[10]), XU(bb[LU[8]])
        }

        function Yb(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = Eb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }

        function Bb(...bb) {
          function ab(bb) {
            return typeof bU[bb] === LU[14] ? bU[bb] = function(...bb) {
              for (yU(bb[LU[11]] = LU[0], bb[LU[133]] = '/HjkAqXgSrBENRu?Ke~vw8%d:CZ]*)OI;4x6<&WpV_#DJhbc@$U`i,5m3[MT}t|+s^FG{y(Y=foa9lQ7.z01>2PL!"n', bb[LU[18]] = "" + (bb[LU[2]] || ""), bb[LU[3]] = bb[LU[18]].length, bb[-LU[134]] = [], bb[LU[41]] = LU[2], bb[-LU[131]] = LU[2], bb[LU[28]] = -LU[0]), bb[-LU[35]] = LU[2]; bb[-LU[35]] < bb[LU[3]]; bb[-LU[35]]++)
                if (bb[LU[132]] = bb[LU[133]].indexOf(bb[LU[18]][bb[-LU[35]]]), bb[LU[132]] !== -LU[0])
                  if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[132]];
                  else {
                    yU(bb[LU[28]] += bb[LU[132]] * LU[29], bb[LU[41]] |= bb[LU[28]] << bb[-LU[131]], bb[-LU[131]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                    do {
                      yU(bb[-LU[134]].push(bb[LU[41]] & LU[10]), bb[LU[41]] >>= LU[9], bb[-LU[131]] -= LU[9])
                    } while (bb[-LU[131]] > LU[22]);
                    bb[LU[28]] = -LU[0]
                  } return bb[LU[28]] > -LU[0] && bb[-LU[134]].push((bb[LU[41]] | bb[LU[28]] << bb[-LU[131]]) & LU[10]), XU(bb[-LU[134]])
            }(aU[bb]) : bU[bb]
          }
          bb[LU[11]] = LU[2], yU(bb[LU[37]] = ab(LU[113]) + ab(160) + ab(LU[129]) + ab(162) + ab(163) + ab(164) + "om", bb[LU[0]] = ab(LU[117]) + ab(166) + ab(LU[30]) + ab(168) + ab(LU[73]) + ab(170) + "?", bb[-LU[48]] = ab(LU[88]) + ab(172) + ab(LU[67]) + ab(174) + ab(175) + ab(176), bb[LU[37]].match(bb[LU[0]] + bb[-LU[48]]))
        }
        Yb(158) in RU && Bb(), bb[LU[0]] = Ub[Yb(177)](ab)
      } catch (eU) {
        function vb(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[37]] = 'fwx$,y0Zk>{9[^`43PpE<6K#?T&|R;="q!rWi:QFLsnjdz/YBG*2}C%Iv(8u7Db+l_@]H.~15)JUMatSAVchomXNOeg', bb[LU[1]] = "" + (bb[LU[2]] || ""), bb[-LU[135]] = bb[LU[1]].length, bb[LU[54]] = [], bb[-LU[95]] = LU[2], bb[-LU[90]] = LU[2], bb[LU[28]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[-LU[135]]; bb[LU[36]]++)
            if (bb[LU[47]] = bb[LU[37]].indexOf(bb[LU[1]][bb[LU[36]]]), bb[LU[47]] !== -LU[0])
              if (bb[LU[28]] < LU[2]) bb[LU[28]] = bb[LU[47]];
              else {
                yU(bb[LU[28]] += bb[LU[47]] * LU[29], bb[-LU[95]] |= bb[LU[28]] << bb[-LU[90]], bb[-LU[90]] += (bb[LU[28]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[LU[54]].push(bb[-LU[95]] & LU[10]), bb[-LU[95]] >>= LU[9], bb[-LU[90]] -= LU[9])
                } while (bb[-LU[90]] > LU[22]);
                bb[LU[28]] = -LU[0]
              } return bb[LU[28]] > -LU[0] && bb[LU[54]].push((bb[-LU[95]] | bb[LU[28]] << bb[-LU[90]]) & LU[10]), XU(bb[LU[54]])
        }

        function Lb(...bb) {
          return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = vb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
        }

        function Pb(...bb) {
          yU(bb[LU[11]] = LU[2], bb[LU[137]] = function(...bb) {
            for (yU(bb[LU[11]] = LU[0], bb[LU[136]] = bb[LU[2]].length, bb[LU[18]] = [], bb[LU[3]] = LU[2], bb[LU[8]] = LU[2], bb[LU[2]].sort(((bb, ab) => bb - ab))), bb[LU[41]] = LU[2]; bb[LU[41]] < bb[LU[136]]; bb[LU[41]]++)
              if (!(bb[LU[41]] > LU[2] && bb[LU[2]][bb[LU[41]]] === bb[LU[2]][bb[LU[41]] - LU[0]]))
                for (yU(bb[LU[3]] = bb[LU[41]] + LU[0], bb[LU[8]] = bb[LU[136]] - LU[0]); bb[LU[3]] < bb[LU[8]];)
                  if (bb[LU[2]][bb[LU[41]]] + bb[LU[2]][bb[LU[3]]] + bb[LU[2]][bb[LU[8]]] < LU[2]) bb[LU[3]]++;
                  else if (bb[LU[2]][bb[LU[41]]] + bb[LU[2]][bb[LU[3]]] + bb[LU[2]][bb[LU[8]]] > LU[2]) bb[LU[8]]--;
            else {
              for (bb[LU[18]].push([bb[LU[2]][bb[LU[41]]], bb[LU[2]][bb[LU[3]]], bb[LU[2]][bb[LU[8]]]]); bb[LU[3]] < bb[LU[8]] && bb[LU[2]][bb[LU[3]]] === bb[LU[2]][bb[LU[3]] + LU[0]];) bb[LU[3]]++;
              for (; bb[LU[3]] < bb[LU[8]] && bb[LU[2]][bb[LU[8]]] === bb[LU[2]][bb[LU[8]] - LU[0]];) bb[LU[8]]--;
              yU(bb[LU[3]]++, bb[LU[8]]--)
            }
            return bb[LU[18]]
          }, console.log(bb[LU[137]]))
        }
        throw Lb(LU[49]) in RU && Pb(), yU(console[Lb(179)](ab), Ub[Lb(LU[77])](ab, {
          [Lb(LU[134]) + Lb(LU[116])]: (...bb) => (Lb(183) in RU && function() {
            var bb, ab = function(...ab) {
              return ab[LU[11]] = LU[1], bb({}, ab[LU[2]], ab[LU[0]])
            };
            yU(bb = function(...ab) {
              if (yU(ab[LU[11]] = LU[3], ab[LU[37]] = {}), ab[LU[2]][ab[LU[0]] + ab[LU[1]]] !== LU[15]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]];
              if (ab[LU[0]] === ab[LU[1]]) return LU[79];
              for (ab[-LU[90]] = LU[2]; ab[-LU[90]] < ab[LU[0]].length; ab[-LU[90]]++) ab[LU[37]][ab[LU[0]][ab[-LU[90]]]] === LU[15] && (ab[LU[37]][ab[LU[0]][ab[-LU[90]]]] = LU[2]), ab[LU[37]][ab[LU[1]][ab[-LU[90]]]] === LU[15] && (ab[LU[37]][ab[LU[1]][ab[-LU[90]]]] = LU[2]), yU(ab[LU[37]][ab[LU[0]][ab[-LU[90]]]]++, ab[LU[37]][ab[LU[1]][ab[-LU[90]]]]--);
              for (ab[LU[41]] in ab[LU[37]])
                if (ab[LU[37]][ab[LU[41]]] !== LU[2]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78];
              for (ab[LU[7]] = LU[0]; ab[LU[7]] < ab[LU[0]].length; ab[LU[7]]++)
                if (bb(ab[LU[2]], ab[LU[0]].substr(LU[2], ab[LU[7]]), ab[LU[1]].substr(LU[2], ab[LU[7]])) && bb(ab[LU[2]], ab[LU[0]].substr(ab[LU[7]]), ab[LU[1]].substr(ab[LU[7]])) || bb(ab[LU[2]], ab[LU[0]].substr(LU[2], ab[LU[7]]), ab[LU[1]].substr(ab[LU[1]].length - ab[LU[7]])) && bb(ab[LU[2]], ab[LU[0]].substr(ab[LU[7]]), ab[LU[1]].substr(LU[2], ab[LU[1]].length - ab[LU[7]]))) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[79], LU[79];
              return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78]
            }, console.log(ab))
          }(), vU = [bb, {}], kU(Lb(184)))
        })), eU
      }
      const Ab = Ea(pa[LU[5]], bb[LU[0]]),
        Mb = Tb[LU[138]][PU(LU[4])](LU[54]);
      return Mb[PU(LU[46]) + PU(187) + "E"](pa[LU[5]]), Tb[LU[138]].concat([Mb, Ab])
    }, Sa = (...bb) => {
      function ab(...bb) {
        return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = function(...bb) {
          for (yU(bb[LU[11]] = LU[0], bb[LU[0]] = '8N0)zRF}GIPiVr~KEcf"Z/7=Hq{?!tb,lM1m>9*h%o]#a5A6s|jpOC@Ueg;.Yy^kxw&TJSv:(Bdn2WL4<`D3Q+[u$_X', bb[LU[47]] = "" + (bb[LU[2]] || ""), bb[LU[17]] = bb[LU[47]].length, bb[-LU[9]] = [], bb[LU[139]] = LU[2], bb[LU[39]] = LU[2], bb[LU[101]] = -LU[0]), bb[LU[36]] = LU[2]; bb[LU[36]] < bb[LU[17]]; bb[LU[36]]++)
            if (bb[LU[81]] = bb[LU[0]].indexOf(bb[LU[47]][bb[LU[36]]]), bb[LU[81]] !== -LU[0])
              if (bb[LU[101]] < LU[2]) bb[LU[101]] = bb[LU[81]];
              else {
                yU(bb[LU[101]] += bb[LU[81]] * LU[29], bb[LU[139]] |= bb[LU[101]] << bb[LU[39]], bb[LU[39]] += (bb[LU[101]] & LU[31]) > LU[32] ? LU[33] : LU[34]);
                do {
                  yU(bb[-LU[9]].push(bb[LU[139]] & LU[10]), bb[LU[139]] >>= LU[9], bb[LU[39]] -= LU[9])
                } while (bb[LU[39]] > LU[22]);
                bb[LU[101]] = -LU[0]
              } return bb[LU[101]] > -LU[0] && bb[-LU[9]].push((bb[LU[139]] | bb[LU[101]] << bb[LU[39]]) & LU[10]), XU(bb[-LU[9]])
        }(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
      }
      bb[LU[11]] = LU[0], ab(188) + "I" in RU && function(...bb) {
        bb[LU[11]] = LU[2]
      }();
      const Ub = Tb[LU[138]][ab(LU[124])](bb[LU[2]]);
      if (Ub[ab(LU[63]) + ab(191)] >= LU[54]) {
        const Ab = Ub[ab(LU[140]) + ab(193)](LU[2]);
        if ((LU[2], pa[LU[76]])(Ab)) {
          function Eb(bb) {
            var ab, Ub, Ab, Mb, Tb, Eb, Yb;
            for (yU(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = LU[2], Tb = LU[2], Eb = -LU[0]), Yb = LU[2]; Yb < Ub; Yb++) {
              var Bb = 'FoqacHNfkPT4QsmeSXZbv*M=lpYnU!JA[B^%riLDgRE?6I}h),O&j/KdC39xVWuyGt20$+~87#.<"@|{w`>](1;:5z_'.indexOf(ab[Yb]);
              if (Bb !== -LU[0])
                if (Eb < LU[2]) Eb = Bb;
                else {
                  yU(Eb += Bb * LU[29], Mb |= Eb << Tb, Tb += (Eb & LU[31]) > LU[32] ? LU[33] : LU[34]);
                  do {
                    yU(Ab.push(Mb & LU[10]), Mb >>= LU[9], Tb -= LU[9])
                  } while (Tb > LU[22]);
                  Eb = -LU[0]
                }
            }
            return Eb > -LU[0] && Ab.push((Mb | Eb << Tb) & LU[10]), XU(Ab)
          }

          function Yb(...bb) {
            return bb[LU[11]] = LU[0], typeof bU[bb[LU[2]]] === LU[14] ? bU[bb[LU[2]]] = Eb(aU[bb[LU[2]]]) : bU[bb[LU[2]]]
          }

          function Bb(...bb) {
            yU(bb[LU[11]] = LU[2], bb[LU[37]] = function(...ab) {
              return ab[LU[11]] = LU[1], bb[LU[18]]({}, ab[LU[2]], ab[LU[0]])
            }, bb[LU[18]] = function(...ab) {
              if (yU(ab[LU[11]] = LU[3], ab[LU[37]] = {}), ab[LU[2]][ab[LU[0]] + ab[LU[1]]] !== LU[15]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]];
              if (ab[LU[0]] === ab[LU[1]]) return LU[79];
              for (ab[LU[54]] = LU[2]; ab[LU[54]] < ab[LU[0]].length; ab[LU[54]]++) ab[LU[37]][ab[LU[0]][ab[LU[54]]]] === LU[15] && (ab[LU[37]][ab[LU[0]][ab[LU[54]]]] = LU[2]), ab[LU[37]][ab[LU[1]][ab[LU[54]]]] === LU[15] && (ab[LU[37]][ab[LU[1]][ab[LU[54]]]] = LU[2]), yU(ab[LU[37]][ab[LU[0]][ab[LU[54]]]]++, ab[LU[37]][ab[LU[1]][ab[LU[54]]]]--);
              for (ab[LU[33]] in ab[LU[37]])
                if (ab[LU[37]][ab[LU[33]]] !== LU[2]) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78];
              for (ab[-LU[134]] = LU[0]; ab[-LU[134]] < ab[LU[0]].length; ab[-LU[134]]++)
                if (bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(LU[2], ab[-LU[134]]), ab[LU[1]].substr(LU[2], ab[-LU[134]])) && bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(ab[-LU[134]]), ab[LU[1]].substr(ab[-LU[134]])) || bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(LU[2], ab[-LU[134]]), ab[LU[1]].substr(ab[LU[1]].length - ab[-LU[134]])) && bb[LU[18]](ab[LU[2]], ab[LU[0]].substr(ab[-LU[134]]), ab[LU[1]].substr(LU[2], ab[LU[1]].length - ab[-LU[134]]))) return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[79], LU[79];
              return ab[LU[2]][ab[LU[0]] + ab[LU[1]]] = LU[78], LU[78]
            }, console.log(bb[LU[37]]))
          }
          ab(194) in RU && Bb();
          const eb = Ub[Yb(195)](LU[54]),
            vb = Ta(Ab) ? Tb[LU[138]][Yb(LU[115])](Ya(Ab, eb)) : eb;
          return function(bb) {
            var ab, Ub, Ab, Tb, Eb;
            const Yb = null === (ab = bb.meta) || void 0 === ab ? void 0 : ab.formatVersion;
            if (!(0, pa.r)(Yb)) throw new Error(`Unsupported recording format version: ${Yb}`);
            if (!Array.isArray(bb.initialChunks) || !Array.isArray(bb.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const Mb of bb.ticks)
              if (!Array.isArray(Mb.structuralEvents) || !Array.isArray(Mb.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const Bb = {
              ...bb.meta
            };
            return Bb.formatVersion = pa.i, (0, Mb.I)(Bb.variation) && delete Bb.variation, {
              meta: Bb,
              initialChunks: bb.initialChunks.map((bb => {
                var ab;
                return {
                  chunkPos: bb.chunkPos,
                  rle: Wa(bb.rle),
                  sharedBlockData: null !== (ab = Fa("sharedBlockData", bb.sharedBlockData)) && void 0 !== ab ? ab : []
                }
              })),
              ticks: bb.ticks.map(Ja),
              editState: {
                cameraKeyframes: null !== (Ub = null === (Ab = bb.editState) || void 0 === Ab ? void 0 : Ab.cameraKeyframes) && void 0 !== Ub ? Ub : [],
                playbackMark: null !== (Tb = null === (Eb = bb.editState) || void 0 === Eb ? void 0 : Eb.playbackMark) && void 0 !== Tb ? Tb : null
              }
            }
          }(Aa(Ab)[Yb(197)](vb))
        }
      }
      throw new Error(ab(LU[62]) + ab(199) + ab(200) + ab(201) + LU[8])
    })
  },
  36313: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => Bb,
      D: () => vb,
      F: () => Yb,
      e: () => Eb,
      i: () => Ab,
      m: () => Lb,
      o: () => Pb,
      r: () => Tb,
      v: () => eb,
      z: () => Xb
    });
    const Ab = 9,
      Mb = [9];

    function Tb(bb) {
      return Mb.includes(bb)
    }
    const Eb = 100,
      Yb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Bb = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      eb = ["itemName", "amount", "position", "size", "attributes"],
      vb = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Lb = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "jH", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Pb = ["selectedSlotIndex", "slots"],
      Xb = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36309: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Lb,
      f: () => jb,
      i: () => Bb,
      m: () => Eb,
      p: () => Yb,
      s: () => eb
    });
    var Ab = Ub(325),
      Mb = Ub(22);

    function Tb(bb) {
      return null === bb || void 0 === bb ? null : "string" === typeof bb ? bb : null
    }

    function Eb(bb, ab) {
      return JSON.stringify(bb) === JSON.stringify(ab)
    }

    function Yb(bb) {
      const ab = [];
      for (const Ub of Object.keys(bb)) {
        const Ab = bb[Ub];
        for (const bb of Object.keys(Ab)) ab.push({
          Pa: Ub,
          name: bb,
          ...Ab[bb]
        })
      }
      return ab
    }

    function Bb(bb) {
      const ab = {};
      for (const Tb of bb) {
        var Ub, Ab, Mb;
        ab[Tb.Pa] || (ab[Tb.Pa] = {}), ab[Tb.Pa][Tb.name] = {
          icon: Tb.icon,
          level: Tb.level,
          displayName: null !== (Ub = Tb.displayName) && void 0 !== Ub ? Ub : null,
          endTick: null !== (Ab = Tb.endTick) && void 0 !== Ab ? Ab : null,
          showInNametag: null === (Mb = Tb.showInNametag) || void 0 === Mb || Mb
        }
      }
      return ab
    }

    function eb(bb, ab) {
      const Ub = {};
      for (const Mb of Object.keys(bb)) {
        const Tb = {};
        for (const Ub of Object.keys(bb[Mb])) {
          const Ab = bb[Mb][Ub];
          null !== Ab.endTick && Ab.endTick < ab || (Tb[Ub] = {
            ...Ab,
            endTick: null === Ab.endTick ? null : Ab.endTick - ab
          })
        }(0, Ab.lc)(Tb) || (Ub[Mb] = Tb)
      }
      return Ub
    }

    function vb(bb, ab, Ub) {
      if (null !== bb) return Math.max(0, 1e3 * (bb - ab) / Ub)
    }
    class Lb {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(bb, ab) {
        this.clear();
        const Ub = Date.now();
        for (const Yb of bb.iterateEntityIds()) {
          const Bb = bb.getEffects(Yb);
          if ((0, Ab.lc)(Bb)) continue;
          const eb = ab(Yb);
          for (const bb of Object.keys(Bb)) {
            var Mb, Eb;
            const ab = Bb[bb];
            this.upsert(eb, bb, {
              icon: ab.icon,
              level: ab.level,
              displayName: Tb(ab.displayName),
              showInNametag: null === (Mb = ab.showInNametag) || void 0 === Mb || Mb,
              endTime: void 0 !== ab.duration && null !== ab.duration ? (null !== (Eb = ab.appliedAt) && void 0 !== Eb ? Eb : Ub) + ab.duration : null
            })
          }
        }
      }
      upsert(bb, ab, Ub) {
        this.tracked[bb] || (this.tracked[bb] = {}), this.tracked[bb][ab] = Ub
      }
      remove(bb, ab) {
        const Ub = this.tracked[bb];
        Ub && (delete Ub[ab], (0, Ab.lc)(Ub) && delete this.tracked[bb])
      }
      handleUpdate(bb) {
        var ab;
        0 !== bb.duration ? this.upsert(bb.Pa, bb.name, {
          icon: bb.icon,
          level: bb.level,
          displayName: Tb(bb.displayName),
          showInNametag: null === (ab = bb.showInNametag) || void 0 === ab || ab,
          endTime: void 0 !== bb.duration && null !== bb.duration ? Date.now() + bb.duration : null
        }) : this.remove(bb.Pa, bb.name)
      }
      handleRemove(bb, ab) {
        this.remove(bb, ab)
      }
      sample(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Mb = {},
          Tb = 1e3 / ab;
        for (const Eb of Object.keys(this.tracked)) {
          const ab = this.tracked[Eb],
            Yb = {};
          for (const Ab of Object.keys(ab)) {
            const Mb = ab[Ab];
            let Bb = null;
            if (null !== Mb.endTime) {
              const ab = Math.max(0, Mb.endTime - Ub);
              if (0 === ab) {
                this.remove(Eb, Ab);
                continue
              }
              Bb = bb + Math.ceil(ab / Tb)
            }
            Yb[Ab] = {
              icon: Mb.icon,
              level: Mb.level,
              displayName: Mb.displayName,
              endTick: Bb,
              showInNametag: Mb.showInNametag
            }
          }(0, Ab.lc)(Yb) || (Mb[Eb] = Yb)
        }
        return Mb
      }
    }

    function Pb(bb, ab, Ub, Ab) {
      bb.hasEntity(ab) ? bb.updateEffect(ab, Ub, Ab) : function(bb, ab, Ub) {
        Mb.m.IR("EffectUpdate", {
          Pa: bb,
          name: ab,
          ...Ub
        }, !0)
      }(ab, Ub, Ab)
    }

    function Xb(bb, ab, Ub) {
      bb.hasEntity(ab) ? bb.removeEffect(ab, Ub) : function(bb, ab) {
        Mb.m.IR("RemoveEffect", {
          Pa: bb,
          name: ab
        }, !0)
      }(ab, Ub)
    }

    function jb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      for (const vb of Object.keys(Ub))
        for (const Tb of Object.keys(Ub[vb])) {
          var Yb;
          null !== (Yb = ab[vb]) && void 0 !== Yb && Yb[Tb] || (Xb(bb, vb, Tb), Ab && vb === Ab && String(Mb) !== String(vb) && Xb(bb, Mb, Tb))
        }
      for (const Rb of Object.keys(ab))
        for (const Yb of Object.keys(ab[Rb])) {
          var Bb, eb;
          const kb = ab[Rb][Yb],
            yb = vb(kb.endTick, Tb, Eb);
          if (0 === yb) {
            Xb(bb, Rb, Yb), Ab && Rb === Ab && String(Mb) !== String(Rb) && Xb(bb, Mb, Yb);
            continue
          }
          const Zb = null === (Bb = Ub[Rb]) || void 0 === Bb ? void 0 : Bb[Yb],
            Db = Zb && (jb = kb, (Lb = Zb).icon === jb.icon && Lb.level === jb.level && Lb.displayName === jb.displayName && Lb.endTick === jb.endTick && Lb.showInNametag === jb.showInNametag),
            zb = {
              icon: kb.icon,
              level: kb.level,
              displayName: null !== (eb = kb.displayName) && void 0 !== eb ? eb : void 0,
              duration: yb,
              showInNametag: kb.showInNametag
            };
          Db || Pb(bb, Rb, Yb, zb), Ab && Rb === Ab && Pb(bb, Mb, Yb, {
            ...zb,
            showInNametag: !1
          })
        }
      var Lb, jb
    }
  },
  36291: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      h: () => Bb,
      j: () => Lb,
      k: () => Eb,
      o: () => vb
    });
    var Ab = Ub(36283),
      Mb = Ub(36294);
    const Tb = {
      description: "Bloxd Replay",
      accept: {
        [Ab.g]: Ab.c
      }
    };

    function Eb() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function Yb(bb) {
      return bb instanceof DOMException && "AbortError" === bb.name
    }
    async function Bb() {
      try {
        const [bb] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Tb]
        }), ab = await bb.getFile();
        return {
          handle: bb,
          bytes: new Uint8Array(await ab.arrayBuffer())
        }
      } catch (bb) {
        if (Yb(bb)) return null;
        throw bb
      }
    }
    async function eb(bb) {
      if (bb && await async function(bb) {
          const ab = {
            mode: "readwrite"
          };
          return "granted" === await bb.queryPermission(ab) || "granted" === await bb.requestPermission(ab)
        }(bb)) return bb;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Ab.j)(),
          types: [Tb]
        })
      } catch (ab) {
        if (Yb(ab)) return null;
        throw ab
      }
    }
    async function vb(bb, ab) {
      const Ub = await bb.createWritable();
      await Ub.write(new Blob([ab], {
        type: Ab.g
      })), await Ub.close()
    }

    function Lb(bb) {
      return (0, Ab.h)((0, Mb.d)(bb))
    }
  },
  35892: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Lb
    });
    var Ab = Ub(19),
      Mb = Ub(101),
      Tb = Ub(31),
      Eb = Ub(666),
      Yb = Ub(3132),
      Bb = Ub(6294);
    const eb = "shaderPackListingCheckedAt",
      vb = 36e5;

    function Lb() {
      const {
        canUseShaderPacks: bb
      } = Mb.featureFlags.settings;
      var ab, Lb;
      (0, Yb.k)(bb) && !(0, Yb.h)(bb) && (ab = Tb.f.getItem(eb), Lb = Date.now(), "number" !== typeof ab || Lb < ab || Lb - ab >= vb) && (0, Eb.e)((() => {
        (async function() {
          if ("landingPage" !== Ab.c.get("gameState")) return;
          const bb = await (0, Bb.f)();
          if (void 0 === (null === bb || void 0 === bb ? void 0 : bb.listing)) return;
          Tb.f.setItem(eb, Date.now());
          const {
            followListingUpdates: ab
          } = await Promise.all([Ub.e(74), Ub.e(131), Ub.e(123)]).then((() => Ub(40400)));
          await ab(bb, bb.listing) || Tb.f.removeItem(eb)
        })().catch((bb => {
          console.error("Failed to check the shader pack listing for an update", bb)
        }))
      }))
    }
  },
  35929: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb
    });
    var Ab = Ub(307),
      Mb = Ub(19),
      Tb = Ub(35935),
      Eb = Ub(1548),
      Yb = Ub(1874);

    function Bb(bb, ab) {
      var Ub, Bb, eb;
      if (!Mb.c.get("isKeydownEnabled") || bb.repeat) return;
      const vb = bb.code;
      "Escape" === bb.key ? (0, Eb.f)(bb) : null !== (Ub = Yb.x.OpenSettings) && void 0 !== Ub && Ub.includes(vb) ? (0, Eb.q)(bb, Ab.j.SETTINGS) : null !== (Bb = Yb.x.OpenCharacterCustomization) && void 0 !== Bb && Bb.includes(vb) ? (0, Tb.e)() || (0, Eb.q)(bb, Ab.j.CUSTOMISATION, ab()) : null !== (eb = Yb.x.ShowDebugOverlay) && void 0 !== eb && eb.includes(vb) && Mb.c.set({
        showDebugOverlay: !Mb.c.get("showDebugOverlay")
      })
    }
  },
  35896: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ib
    });
    var Ab = Ub(591),
      Mb = Ub(1171),
      Tb = Ub(166);
    const Eb = "cf-";

    function Yb(bb) {
      return `${Eb}${bb}`
    }

    function Bb(bb) {
      return bb.startsWith(Yb("game-server-"))
    }

    function eb(bb) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(bb)
    }
    var vb = Ub(1192),
      Lb = Ub(1162),
      Pb = Ub(22),
      Xb = Ub(1677),
      jb = Ub(1692),
      Rb = Ub(2674),
      kb = Ub(1238),
      yb = Ub(1242),
      Zb = Ub(1413),
      Db = Ub(1142),
      zb = Ub(35900),
      xb = Ub(31),
      ib = Ub(137),
      fb = Ub(1710);
    const mb = Date.UTC(2026, 10, 25),
      pb = 1728e5,
      Nb = "gameServerRoute";
    async function Wb(bb) {
      if (!bb.ok) {
        const ab = await bb.text().catch((() => ""));
        return 403 === bb.status && "ipv6_unsupported" === ab ? "ipv6Refused" : "other"
      }
      const ab = await bb.json().catch((() => null));
      return "object" === typeof ab && null !== ab && Number.isFinite(ab.version) ? "ours" : "other"
    }
    const Hb = new class {
      constructor(bb) {
        this.deps = bb
      }
      hostFor(bb) {
        return this.deps.enabled && eb(bb) && "cloudflare" === this.heldRoute() ? Yb(bb) : bb
      }
      async afterJoinFailed(bb, ab) {
        var Ub;
        if (!this.deps.enabled || void 0 === ab) return !1;
        const Ab = new URL(bb).hostname,
          Mb = this.stored();
        if (Bb(Ab)) {
          var Tb;
          if (this.deps.GX("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === Mb || void 0 === Mb ? void 0 : Mb.route) || Mb.aliasFailedOnce || "ours" !== (await this.probeHost(Ab)).answer) this.store({
            arm: null !== (Tb = null === Mb || void 0 === Mb ? void 0 : Mb.arm) && void 0 !== Tb ? Tb : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...Mb,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!eb(Ab) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: Eb,
          cfMs: Yb
        } = await this.check(Ab);
        if ("blocked" !== Eb) return this.deps.GX("game_server_route", Eb, Yb), !1;
        const vb = this.deps.now() >= mb ? "cloudflare" : null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb.arm) && void 0 !== Ub ? Ub : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === vb ? (this.store({
          arm: vb,
          route: "direct",
          until: Math.min(this.deps.now() + pb, mb)
        }), this.deps.GX("game_server_route", "blocked_holdout", Yb), !1) : (this.store({
          arm: vb,
          route: "cloudflare",
          until: this.deps.now() + pb
        }), this.deps.GX("game_server_route", "blocked", Yb), !0)
      }
      afterJoined(bb) {
        if (!this.deps.enabled) return;
        const ab = new URL(bb).hostname,
          Ub = Bb(ab);
        if (Ub) this.deps.GX("game_server_route", "cf_join", 0);
        else if (!eb(ab) || this.deps.random() >= .01) return;
        const Ab = Ub ? ab.slice(Eb.length) : ab;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Ab, "direct", "direct_failed"), await this.reportRtt(Yb(Ab), "cf", "cf_failed")
        }))
      }
      async check(bb) {
        const ab = this.probeHost(Yb(bb));
        if ("none" !== (await this.probeHost(bb)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: Ub,
          ms: Ab
        } = await ab;
        return "ours" !== Ub && "ipv6Refused" !== Ub ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(bb)).answer ? {
          outcome: "direct_reachable",
          cfMs: Ab
        } : {
          outcome: "ipv6Refused" === Ub ? "blocked_ipv6" : "blocked",
          cfMs: Ab
        }
      }
      async reportRtt(bb, ab, Ub) {
        const Ab = "ours" === (await this.probeHost(bb)).answer ? await this.probeHost(bb) : null;
        "ours" === (null === Ab || void 0 === Ab ? void 0 : Ab.answer) ? this.deps.GX("game_server_rtt", ab, Ab.ms): this.deps.GX("game_server_rtt", Ub, 0)
      }
      probeHost(bb) {
        return this.deps.probe(`https://${bb}/version`, 8e3)
      }
      stored() {
        return function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            arm: ab,
            route: Ub,
            until: Ab,
            aliasFailedOnce: Mb
          } = bb;
          return "cloudflare" !== ab && "holdout" !== ab || "cloudflare" !== Ub && "direct" !== Ub || "number" !== typeof Ab ? null : !0 === Mb ? {
            arm: ab,
            route: Ub,
            until: Ab,
            aliasFailedOnce: Mb
          } : {
            arm: ab,
            route: Ub,
            until: Ab
          }
        }(this.deps.storage.getItem(Nb))
      }
      heldRoute() {
        const bb = this.stored();
        return null !== bb && bb.until > this.deps.now() ? bb.route : null
      }
      store(bb) {
        this.deps.storage.setItem(Nb, bb)
      }
    }({
      storage: xb.f,
      probe: async function(bb, ab) {
        const Ub = performance.now(),
          Ab = await (0, fb.g)(bb, {
            cache: "no-store"
          }, ab, (async bb => {
            const ab = Math.round(performance.now() - Ub);
            return {
              answer: await Wb(bb),
              ms: ab
            }
          }));
        return null !== Ab && void 0 !== Ab ? Ab : {
          answer: "none",
          ms: 0
        }
      },
      GX: Xb.q,
      enabled: !(0, ib.d)(),
      now: Date.now,
      random: Math.random,
      delay: bb => new Promise((ab => {
        setTimeout(ab, bb)
      }))
    });

    function Ib(bb) {
      return async (ab, Ub, Eb, Yb, eb) => {
        let Lb;
        if ((0, Ab.I)(Eb)) {
          if (eb.aborted) return db();
          const bb = await Fb(ab, Ub, Yb);
          if (eb.aborted || Rb.g.matchmakingEnded(bb.isError() ? null : performance.now()), bb.isError()) {
            const ab = bb.asError();
            return console.log("Join room did not succeed, reason:", ab.message), ab.forward()
          }
          Lb = bb.getValue()
        } else {
          Rb.g.skipPlayWait();
          const bb = hb(Eb.replace("https://", "").replace("http://", ""));
          if (bb.isError()) return bb.asError().forward();
          Lb = {
            endpoint: bb.getValue(),
            gameNameWithVariation: Ub,
            lobbyName: ab instanceof Mb.g ? ab.getLobbyName() : ab
          }
        }
        if (eb.aborted) return db();
        console.log(`Connecting to ${Lb.gameNameWithVariation} in lobby ${Lb.lobbyName} on game server ${Lb.endpoint}`), Pb.m.IR("matchmakeAndPlayStepCompleted", {
          step: Tb.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Xb.i)(), jb.b.markGameLoadStart(), (0, yb.r)({
          websocketUrl: Lb.endpoint,
          gameNameWithVariation: Lb.gameNameWithVariation,
          lobbyName: Lb.lobbyName
        }), Pb.m.IR("loadingScreenState", "loadingPage:loadingGame");
        const Zb = async () => {
          const bb = await async function(bb, ab, Ub, Ab) {
            const Mb = await Fb(bb, ab, Ub);
            if (!Mb.isError() && !Ab.aborted) {
              const {
                endpoint: bb,
                gameNameWithVariation: ab,
                lobbyName: Ub
              } = Mb.getValue();
              (0, yb.r)({
                websocketUrl: bb,
                gameNameWithVariation: ab,
                lobbyName: Ub
              })
            }
            return Mb
          }(ab, Ub, Yb, eb);
          return bb.isError() || (Lb = bb.getValue()), bb
        }, Db = !(0, Ab.I)(Eb), zb = () => bb({
          place: Lb,
          userContext: Yb,
          direct: Db,
          rematch: Zb
        }, eb);
        let xb = await zb();
        const ib = xb.isError() && !0 === xb.asError().debugResult.rematch;
        if (xb.isError() && !Db && !eb.aborted && (ib || await Hb.afterJoinFailed(Lb.endpoint, xb.asError().debugResult.gameServerUnreachable))) {
          if (eb.aborted) return db();
          console.log("Matchmaking again");
          const bb = await Zb();
          if (bb.isError()) return bb.asError().forward();
          if (eb.aborted) return db();
          xb = await zb(), !xb.isError() || ib && !Bb(new URL(Lb.endpoint).hostname) || await Hb.afterJoinFailed(Lb.endpoint, xb.asError().debugResult.gameServerUnreachable)
        }
        return xb.isError() ? xb.asError().forward() : (Hb.afterJoined(Lb.endpoint), (0, kb.Q)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), vb.e.value({
          gameNameWithVariation: Lb.gameNameWithVariation,
          lobbyName: Lb.lobbyName,
          addLobbyToRecentlyPlayed: !(ab instanceof Mb.g)
        }))
      }
    }

    function db() {
      return vb.e.errorWithCode("Left the game while it loaded", Tb.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        xU: !0
      })
    }
    async function Fb(bb, ab, Ub) {
      return (0, Ab.I)(bb) || bb instanceof Mb.g || !(bb.length > Lb.S) ? await Zb.b.matchmakePlayer(Ub, bb, ab, (0, zb.e)()).then((bb => {
        if (!1 === bb.succeeded) return vb.e.errorWithCode(bb.failReason, Tb.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: ab,
          lobbyName: Ub,
          gameNameWithVariation: Ab
        } = bb, Mb = hb(Hb.hostFor(ab));
        return Mb.isError() ? Mb.asError().forward() : vb.e.value({
          endpoint: Mb.getValue(),
          gameNameWithVariation: Ab,
          lobbyName: Ub
        })
      })).catch((bb => (console.error("Bad response from the matchmaking server:", bb), vb.e.errorWithCode(bb.toString(), Tb.k.REQUEST_TO_MATCHMAKING, {
        error: bb,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", bb), vb.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", Tb.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function hb(bb) {
      const ab = Db.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(bb);
      return ab.isError() ? vb.e.errorWithCode(ab.asError().message, Tb.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : vb.e.value(ab.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, yb.m)("/")
    }
  },
  8807: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Xb,
      e: () => Pb
    });
    var Ab = Ub(19),
      Mb = Ub(1605),
      Tb = Ub(31),
      Eb = Ub(1260),
      Yb = Ub(3330),
      Bb = Ub(1384),
      eb = Ub(1294);
    const vb = 2592e5,
      Lb = "notificationOptInLastPromptedAt";
    async function Pb() {
      var bb;
      const ab = await Xb();
      if (null === ab) return;
      const Ub = null !== (bb = Tb.f.getItem(Lb)) && void 0 !== bb ? bb : 0;
      if (Date.now() - Ub < vb) return;
      if ((0, eb.d)()) return;
      const Ab = await Eb.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Mb.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Ab && (Tb.f.setItem(Lb, Date.now()), (0, Bb.reportAnalyticsClick)({
        id: !0 === Ab ? "push.allow" : "push.deny",
        value: Mb.d.supports("notifications") ? "app" : "browser"
      }), !0 === Ab && ab().catch((bb => {
        console.error("Failed to ask for push notifications:", bb)
      })))
    }
    async function Xb() {
      return await Mb.d.ready, Mb.d.supports("notifications") ? Ab.c.get("mobilePushNotificationsCanAsk") ? async () => {
        Mb.d.request("notifications.requestPermission", {}).then((bb => {
          let {
            canAsk: ab
          } = bb;
          Ab.c.set({
            mobilePushNotificationsCanAsk: ab
          })
        }), (bb => {
          console.error("The app couldn't ask for push notifications:", bb)
        }))
      }: null: await Yb.c.canAsk() ? () => Yb.c.requestPermission() : null
    }
  },
  35909: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      i: () => vb,
      l: () => Xb,
      m: () => Lb
    });
    var Ab = Ub(325),
      Mb = Ub(619),
      Tb = Ub(631),
      Eb = Ub(31);
    const Yb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Bb = "playSessionGameNameWithVariation",
      eb = "wasMatchmakePlayer";

    function vb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j;
      (0, Tb.e)(bb, Yb)
    }

    function Lb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).setItem(eb, !0)
    }

    function Pb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j;
      return (0, Tb.b)(bb, Yb)
    }

    function Xb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eb.j;
      const Ub = (0, Tb.b)(ab, Yb),
        vb = function(bb) {
          const ab = bb.getItem(Bb);
          return "string" !== typeof ab ? null : ab
        }(ab),
        Lb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).getItem(eb)
        }(ab);
      let Pb;
      return Pb = null !== Ub && null !== vb && (0, Tb.c)(ab, Yb) && function(bb, ab, Ub) {
          const Mb = (0, Ab.Gb)(bb),
            Tb = (0, Ab.Gb)(ab),
            Eb = (0, Ab.Bb)(bb),
            Yb = (0, Ab.Bb)(ab);
          return !(Mb !== Tb || !Ub) || Mb === Tb && Eb === Yb
        }(vb, bb, Lb) ? Ub : (0, Mb.c)(), (0, Tb.i)(ab, Yb, Pb), ab.setItem(Bb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.j).removeItem(eb)
        }(ab), Pb
    }
  },
  35900: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Zb,
      i: () => Db
    });
    var Ab = Ub(950),
      Mb = Ub(595),
      Tb = Ub(325),
      Eb = Ub(954),
      Yb = Ub(603),
      Bb = Ub(644),
      eb = Ub(4201),
      vb = Ub(101),
      Lb = Ub(137),
      Pb = Ub(1639),
      Xb = Ub(116),
      jb = Ub(35909),
      Rb = Ub(31),
      kb = Ub(622),
      yb = Ub(35911);

    function Zb() {
      var bb, ab;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ab = navigator.language) && void 0 !== ab ? ab : "none"], "en-Gb"]
    }

    function Db(bb, ab, Ub, Db, zb) {
      const xb = (0, Ab.l)(ab) ? (0, Ab.p)(ab) : null,
        ib = {
          cookies: (0, Pb.getAllCookiesForGameNameWithVariation)(ab),
          isMobile: (0, vb.isMobile)(),
          isUsingCustomGameTexturePack: null !== xb && zb(xb),
          generalCookies: {
            joinDiscord: !!Rb.f.getItem("DiscordPressed"),
            newGo: eb.d,
            ...bb.getMetricsCookies(),
            trafficCode: Db,
            compliance: vb.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vb.getBrowserName)(),
            version: (0, vb.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vb.getPlatformType)(),
            deviceType: (0, Xb.b)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: Ub,
          languages: Zb(),
          version: Mb.b,
          siteUsed: Lb.p,
          subsiteUsed: Lb.s,
          playSessionId: (0, jb.l)(ab),
          visitSessionId: (0, kb.e)(),
          clientReason: Yb.j.reason,
          budgetBasis: (0, yb.g)(),
          ...null !== Bb.q && {
            diagClaim: Bb.q.claimId
          }
        };
      return null !== xb && (0, Tb.oc)(xb) ? (ib.lobbyName = (0, Ab.i)(xb, (0, Ab.m)(ab), Ub), {
        roomName: `classic_${Eb.e}`,
        joinOptions: ib
      }) : {
        roomName: ab,
        joinOptions: ib
      }
    }
  },
  36003: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      for (let Ub = 0; Ub < bb.length; Ub++)
        if (bb[Ub].identifier === ab) return bb[Ub];
      return null
    }

    function Mb(bb, ab) {
      return null !== Ab(bb, ab)
    }
    Ub.d(ab, {
      e: () => Ab,
      f: () => Mb
    })
  },
  36214: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => qb,
      G: () => ub,
      J: () => Gb,
      M: () => rb,
      d: () => Bb,
      e: () => Hb,
      g: () => Yb,
      h: () => hb,
      k: () => Nb,
      m: () => ib,
      p: () => Fb,
      r: () => db,
      v: () => pb,
      z: () => Qb
    });
    var Ab = Ub(31);
    const Mb = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Tb = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Eb = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Yb = Tb.filter((bb => "docsButton" !== bb)),
      Bb = Eb.filter((bb => "aiHelperButton" !== bb)),
      eb = "codeEditorTutorials",
      vb = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Lb = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Pb = null,
      Xb = null;
    const jb = new Set,
      Rb = new Set;
    let kb = null;
    const yb = new Set,
      Zb = new Set;

    function Db() {
      Zb.forEach((bb => {
        bb()
      }))
    }

    function zb() {
      if (!Pb) {
        const bb = Ab.f.getItem(eb);
        Pb = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return Pb
    }

    function xb(bb) {
      const ab = zb();
      ab[bb] || (Pb = {
        ...ab,
        [bb]: !0
      }, Ab.f.setItem(eb, Pb))
    }

    function ib(bb) {
      return "docsOverview" === bb ? Tb : "aiHelperOverview" === bb ? Eb : Xb ? Mb[Xb] : []
    }

    function fb(bb) {
      return ("worldCodeButton" !== bb || !zb().worldCodeIntroShown) && !yb.has(bb)
    }

    function mb(bb) {
      var ab;
      return (null === (ab = kb) || void 0 === ab ? void 0 : ab.name) === bb ? kb.stepsDone : jb
    }

    function pb(bb, ab) {
      if (! function(bb) {
          return kb ? kb.name === bb : "welcome" === bb
        }(bb) || !fb(ab) || mb(bb).has(ab)) return !1;
      if (kb) return !0;
      const Ub = vb[ab];
      return Ub ? !zb()[Ub] || Rb.has(ab) : !zb()[Lb[bb]]
    }

    function Nb(bb) {
      var ab;
      return null !== (ab = ib(bb).find((ab => pb(bb, ab)))) && void 0 !== ab ? ab : null
    }

    function Wb(bb) {
      var ab;
      xb(Lb[bb]), (null === (ab = kb) || void 0 === ab ? void 0 : ab.name) === bb && (kb = null)
    }

    function Hb(bb) {
      const ab = (kb ? [kb.name] : ["welcome", "docsOverview"]).find((ab => Nb(ab) === bb));
      if (!ab) return;
      mb(ab).add(bb);
      const Ub = vb[bb];
      Ub && (xb(Ub), kb || Rb.add(bb)), null === Nb(ab) && Wb(ab), Db()
    }

    function Ib(bb, ab) {
      const Ub = ib(bb),
        Ab = mb(bb);
      for (let Mb = Ub.indexOf(ab) - 1; Mb >= 0; Mb--)
        if (Ab.has(Ub[Mb]) && fb(Ub[Mb])) return Ub[Mb];
      return null
    }

    function db(bb, ab) {
      return null !== Ib(bb, ab)
    }

    function Fb(bb, ab) {
      const Ub = Ib(bb, ab);
      Ub && (mb(bb).delete(Ub), Db())
    }

    function hb(bb) {
      Wb(bb), "welcome" === bb && ib("welcome").forEach((bb => {
        const ab = vb[bb];
        ab && xb(ab)
      })), Db()
    }

    function Gb(bb) {
      kb = {
        name: bb,
        stepsDone: new Set
      }, Db()
    }

    function Qb() {
      (kb || 0 !== jb.size || 0 !== Rb.size) && (kb = null, jb.clear(), Rb.clear(), Db())
    }

    function qb(bb, ab) {
      const Ub = ab ? bb : Xb === bb ? null : Xb;
      Ub !== Xb && (Xb = Ub, Db())
    }

    function ub(bb, ab) {
      yb.has(bb) === ab && (ab ? yb.delete(bb) : yb.add(bb), Db())
    }

    function rb(bb) {
      return Zb.add(bb), () => {
        Zb.delete(bb)
      }
    }
  },
  35921: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Mb,
      j: () => Tb
    });
    const Ab = 1024,
      Mb = 1024 * Ab;

    function Tb(bb) {
      return (bb / Mb).toFixed(1)
    }
  },
  35913: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Yb,
      h: () => Eb,
      l: () => Bb,
      n: () => eb
    });
    var Ab = Ub(205);
    const Mb = 32 * Ub(35921).g,
      Tb = 6144,
      Eb = 4608,
      Yb = 512;

    function Bb(bb) {
      return Math.floor(Mb * bb / Tb)
    }

    function eb(bb) {
      const ab = bb - Math.floor(bb / 6);
      let Ub = Ab.c.maxChunkHorizAddDistance,
        Mb = Ab.c.maxChunkVertAddDistance;
      if (vb(Ub + 1, Mb + 1) <= ab) return null;
      for (; vb(Ub + 1, Mb + 1) > ab && (Ub > 0 || Mb > 0);) Ub > Mb ? Ub-- : Mb--;
      return {
        horizontal: Ub,
        vertical: Mb
      }
    }

    function vb(bb, ab) {
      const Ub = Math.max(bb, ab);
      let Ab = 0;
      for (let Mb = -Ub; Mb <= Ub; Mb++)
        for (let Tb = -Ub; Tb <= Ub; Tb++)
          for (let Eb = -Ub; Eb <= Ub; Eb++) Lb(bb, ab, Mb, Tb, Eb) && Ab++;
      return Ab
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub * Ub + Mb * Mb;
      return bb === ab ? Tb + Ab * Ab <= bb * bb : bb > ab ? Math.abs(Ab) <= ab && Tb + Ab * Ab <= bb * bb : Tb <= bb * bb && Tb + Ab * Ab <= ab * ab
    }
  },
  35911: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => ib,
      g: () => xb,
      k: () => zb
    });
    var Ab = Ub(205),
      Mb = Ub(101),
      Tb = Ub(2630),
      Eb = Ub(4072),
      Yb = Ub(610),
      Bb = Ub(35913);
    const eb = 1048576,
      vb = 1024 * eb,
      Lb = 400 * eb,
      Pb = 147456,
      Xb = .5,
      jb = 1.5 * vb,
      Rb = 768 * eb;

    function kb(bb) {
      return Lb + bb * Pb
    }

    function yb(bb, ab, Ub) {
      var Mb, Eb;
      let {
        footprintBytes: Yb,
        basis: eb,
        namesLimit: yb
      } = function(bb) {
        const {
          os: ab,
          deviceMemory: Ub
        } = bb;
        if ("ios" === ab) switch ((0, Tb.h)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: kb(Bb.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Rb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: jb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Rb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Ub && Number.isFinite(Ub) && Ub > 0 ? {
          footprintBytes: Ub * vb * Xb,
          basis: `memory-${Ub}`,
          namesLimit: !0
        } : "android" === ab ? {
          footprintBytes: Rb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: kb(Bb.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (Ub) {
        const bb = Math.min(Yb, kb(Bb.e));
        Yb = Lb + Math.max(0, bb - Lb) / 2, eb += "+killed", yb = !0
      }
      null !== ab && kb(ab) < Yb && (Yb = kb(ab), eb += "+learned", yb = !0);
      const Zb = function(bb) {
          const ab = Math.floor((bb - Lb) / Pb);
          return Math.min(Bb.e, Math.max(Bb.g, ab))
        }(Yb),
        Db = (0, Bb.n)(Zb);
      return {
        footprintBytes: Yb,
        shedFootprintBytes: yb ? Math.max(Yb, kb(Zb)) : null,
        chunkCap: Zb,
        maxHorizDistance: null !== (Mb = null === Db || void 0 === Db ? void 0 : Db.horizontal) && void 0 !== Mb ? Mb : Ab.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Eb = null === Db || void 0 === Db ? void 0 : Db.vertical) && void 0 !== Eb ? Eb : Ab.c.maxChunkVertAddDistance,
        basis: eb
      }
    }
    let Zb = null;

    function Db() {
      return yb({
        os: (0, Mb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Tb.k)()
      }, (0, Eb.f)(), (0, Yb.J)("wasm").length > 0)
    }

    function zb() {
      return Zb ??= Db(), Zb
    }

    function xb() {
      var bb;
      return (null !== (bb = Zb) && void 0 !== bb ? bb : Db()).basis
    }

    function ib(bb, ab) {
      return bb.setChunkCap(ab.chunkCap)
    }
  },
  36008: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb,
      e: () => Pb,
      g: () => yb,
      i: () => eb
    });
    var Ab = Ub(19),
      Mb = Ub(2254),
      Tb = Ub(2260),
      Eb = Ub(2262),
      Yb = Ub(2313),
      Bb = Ub(22);

    function eb(bb, ab) {
      return (!(0, Eb.d)() || 0 === bb && 0 === ab) && (0, Tb.o)(Mb.g.Joystick, 0, bb, ab, 0)
    }
    const vb = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Lb(bb) {
      return bb.classList.contains("TouchKeyHit") && Xb() ? null : bb.firstElementChild
    }

    function Pb(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !Xb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: jb(Lb(bb))
      }
    }

    function Xb() {
      return document.documentElement.classList.contains(Yb.m)
    }

    function jb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function Rb(bb, ab) {
      const Ub = bb => Math.min(65535, Math.round(4 * bb));
      return (Ub(bb) | Ub(ab) << 16) >>> 0
    }

    function kb(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const yb = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ab ? this.elements.set(bb, {
          element: ab,
          hidden: Ub
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const ab of this.elements.keys()) this.measureOne(ab)
      }
      hitZone(bb, ab) {
        let Ub = null,
          Ab = 1;
        for (const Mb of this.elements.keys()) {
          const Tb = this.shown(Mb);
          if (!Tb) continue;
          const {
            rect: Eb,
            element: Yb
          } = Tb, Bb = kb(Eb), eb = Math.max(0, Eb.width / 2 - Bb.radius), vb = Math.max(0, Eb.height / 2 - Bb.radius), Pb = Math.max(0, Math.abs(bb - Bb.x) - eb), Xb = Math.max(0, Math.abs(ab - Bb.y) - vb), Rb = Yb.firstElementChild;
          let yb = Math.hypot(Pb, Xb) / Bb.radius;
          const Zb = jb(Lb(Yb));
          Zb && (yb = Math.min(yb, Math.max(2 * Math.abs(bb - Bb.x) / Zb.width, 2 * Math.abs(ab - Bb.y) / Zb.height))), yb < Ab && (Ub = {
            code: Mb,
            element: Yb,
            key: Rb,
            ...Bb
          }, Ab = yb)
        }
        return Ub
      }
      measureOne(bb) {
        const ab = this.shown(bb);
        if (!ab) return void this.write(Mb.g.TouchZone, bb, 0, 0, 0);
        const {
          rect: Ub,
          element: Ab
        } = ab, Tb = kb(Ub);
        this.write(Mb.g.TouchZone, bb, Tb.x - this.canvasLeft, Tb.y - this.canvasTop, Rb(Ub.width, Ub.height));
        const Eb = jb(Lb(Ab));
        this.write(Mb.g.TouchZone, 256 | bb, 0, 0, Eb ? Rb(Eb.width, Eb.height) : 0)
      }
      shown(bb) {
        const ab = this.elements.get(bb),
          Ub = Ab.c.get("worldPanelHud");
        if (!ab || ab.hidden || "none" === Ub) return null;
        const Mb = ab.element.getBoundingClientRect();
        return Mb.width <= 0 || Mb.height <= 0 ? null : {
          rect: Mb,
          element: ab.element
        }
      }
    }(Tb.o);
    (0, Bb.n)(Yb.i, (() => {
      yb.measure()
    }))
  },
  36186: (bb, ab, Ub) => {
    function Ab(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    Ub.d(ab, {
      b: () => Mb,
      f: () => Eb,
      j: () => Bb,
      k: () => Yb,
      o: () => Ab,
      r: () => Tb
    });
    const Mb = "https://discord.gg/playbloxd";

    function Tb(bb) {
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

    function Eb(bb, ab) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ab ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: ab,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Yb() {
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

    function Bb(bb, ab, Ub) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Ub ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: ab ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36226: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return null === bb || null === ab ? bb === ab : bb[0] === ab[0] && bb[1] === ab[1] && bb[2] === ab[2]
    }

    function Mb(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    Ub.d(ab, {
      d: () => Mb,
      e: () => Ab
    })
  },
  36188: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      c: () => Yb
    });
    const Ab = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Mb = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Tb = {
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
      Eb = {
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
      Yb = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Ab.files,
          dependencies: Ab.dependencies,
          bundledSource: Ab.bundledSource,
          types: Ab.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Mb.files,
          dependencies: Mb.dependencies,
          bundledSource: Mb.bundledSource,
          types: Mb.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Tb.files,
          dependencies: Tb.dependencies,
          bundledSource: Tb.bundledSource,
          types: Tb.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Eb.files,
          dependencies: Eb.dependencies,
          bundledSource: Eb.bundledSource,
          types: Eb.types
        }
      };

    function Bb(bb) {
      const ab = [],
        Ub = new Set,
        Ab = bb => {
          if (Ub.has(bb)) return;
          const Mb = Yb[bb];
          if (Mb) {
            Ub.add(bb);
            for (const bb of Mb.dependencies) Ab(bb);
            ab.push(bb)
          }
        };
      for (const Mb of bb) Ab(Mb);
      return ab
    }
  },
  36190: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Bb,
      f: () => Yb,
      h: () => Eb,
      k: () => Tb,
      o: () => eb,
      q: () => vb,
      s: () => jb,
      u: () => Xb,
      v: () => Pb
    });
    var Ab = Ub(1189);
    const Mb = ["quickjs", "ses"];

    function Tb(bb) {
      return Mb.includes(bb)
    }

    function Eb(bb) {
      return bb === Ab.h || bb === Ab.k
    }

    function Yb(bb, ab) {
      return bb === Ab.h && ab === Ab.k || bb === Ab.k && ab === Ab.h
    }

    function Bb(bb) {
      const ab = Ab.k in bb,
        Ub = Ab.h in bb;
      return ab && Ub ? null : ab ? Ab.k : Ub ? Ab.h : null
    }

    function eb(bb, ab, Ub) {
      const Ab = `${ab}/`;
      return bb.filter((bb => bb.startsWith(Ab))).map((bb => [bb, `${Ub}/${bb.slice(Ab.length)}`]))
    }

    function vb(bb, ab) {
      let Ub = 0;
      for (const [Ab, Mb] of Object.entries(bb)) Ab !== ab && (Ub += Mb.length);
      return Ub
    }
    const Lb = "@plugins/";

    function Pb(bb) {
      return `${Lb}${bb}`
    }

    function Xb(bb, ab) {
      return `/node_modules/@plugins/${bb}/${ab}`
    }

    function jb(bb) {
      if (!bb.startsWith(Lb)) return null;
      const ab = bb.slice(Lb.length);
      return function(bb) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(bb)
      }(ab) ? ab : null
    }
  },
  36197: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      g: () => Mb,
      h: () => Eb,
      j: () => Bb,
      n: () => Tb
    });
    var Ab = Ub(36195);
    const Mb = 5,
      Tb = "[SCHEMATIC]",
      Eb = 1024e4;

    function Yb(bb) {
      return bb.endsWith(".bloxdschem") && (0, Ab.s)(bb.slice(0, -11) + ".ts") && bb.length <= 64
    }

    function Bb(bb) {
      return Object.fromEntries(Object.keys(bb).map((bb => [bb, Tb])))
    }
  },
  36195: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      i: () => Tb,
      l: () => Pb,
      m: () => Yb,
      o: () => Bb,
      r: () => eb,
      s: () => Lb,
      u: () => vb,
      x: () => Eb
    });
    var Ab = Ub(1189);
    let Mb = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Eb(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Yb(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: Ab.h
      };
      if (bb.startsWith("lobby:")) {
        const ab = bb.slice(6);
        return Lb(ab) ? {
          kind: "lobby",
          path: ab
        } : null
      }
      const ab = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ab ? {
        kind: "codeBlock",
        pos: [parseInt(ab[1]), parseInt(ab[2]), parseInt(ab[3])]
      } : null
    }

    function Bb(bb) {
      return bb.endsWith(".d.ts")
    }

    function eb(bb) {
      return bb.endsWith(".ts") && !Bb(bb)
    }
    const vb = 64;

    function Lb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > vb) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Bb(bb) && !eb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const ab = bb.split("/");
      for (const Ub of ab)
        if ("" === Ub || "." === Ub || ".." === Ub) return !1;
      return !0
    }
    const Pb = 14e3
  },
  4536: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => Ab,
      i: () => Tb,
      k: () => Bb,
      n: () => Eb
    });
    const Ab = ["sine", "triangle", "square", "sawtooth"],
      Mb = 55,
      Tb = {
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

    function Eb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(Tb, bb) ? Tb[bb] : null
    }

    function Yb(bb, ab, Ub) {
      return Math.min(Ub, Math.max(ab, bb))
    }

    function Bb(bb) {
      const ab = Yb(bb.durationMs, 10, 500),
        Ub = Yb(bb.attackMs, 0, ab),
        {
          intonation: Mb
        } = bb;
      return {
        waveform: Ab.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Yb(bb.pitchHz, 20, 4e3),
        glideSemitones: Yb(bb.glideSemitones, -24, 24),
        durationMs: ab,
        attackMs: Ub,
        releaseMs: Yb(bb.releaseMs, 0, ab - Ub),
        lowpassHz: null === bb.lowpassHz ? null : Yb(bb.lowpassHz, 20, 2e4),
        volume: Yb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Yb(Mb.variationSemitones, 0, 6),
          declineSemitones: Yb(Mb.declineSemitones, 0, 12),
          questionRiseSemitones: Yb(Mb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Yb(Mb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Yb(bb.syllableMs, 25, 200)
      }
    }
  },
  9703: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  17799: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19762: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19765: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19767: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19776: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19785: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);