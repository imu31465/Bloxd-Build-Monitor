export const id = 83;
export const ids = [83];
export const modules = {
  36148: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => mb,
      h: () => sb
    });
    var Bb = hb(49),
      Ob = hb(1811),
      Gb = hb(36155),
      Ub = hb.n(Gb),
      Lb = hb(4302),
      Yb = hb(1789),
      Sb = hb(1348),
      ab = hb(86),
      Hb = hb(101),
      wb = hb(314),
      Zb = hb(958),
      Xb = hb.n(Zb),
      pb = hb(13),
      ob = hb(966),
      Ab = hb(1537),
      lb = hb(1622),
      Kb = hb(1587),
      Wb = hb(1887),
      Cb = hb(1302),
      db = hb(1951),
      rb = hb(1288),
      jb = hb(8502),
      nb = hb(36159),
      Db = hb(36183),
      xb = hb(1374),
      zb = hb(2297),
      gb = hb(1095),
      ib = hb(36192);
    var vb = hb(9016);
    var tb = hb(1007);
    const Jb = hb(36198),
      eb = ["enter", "t", "/"];
    let Nb = !1;

    function sb() {
      return Nb || (0, lb.isTextEntry)(document.activeElement)
    }

    function Mb() {
      var bb, ub;
      (0, db.c)();
      const hb = null !== (bb = null === (ub = (0, Cb.h)()) || void 0 === ub ? void 0 : ub.getBoundButton("keyboardChannel")) && void 0 !== bb ? bb : null;
      return hb ? (0, tb.jsx)(Wb.d, {
        className: "ChatInputChannelGlyph",
        glyph: hb
      }) : null
    }

    function mb() {
      const {
        t: bb
      } = (0, gb.K)(), {
        isTouchScreen: ub
      } = (0, pb.j)(["isTouchScreen"]), hb = (0, rb.r)(), [Gb, Zb] = (0, Bb.useState)(!1), Wb = (0, Bb.useRef)(Gb), Cb = (0, Bb.useRef)(null), {
        messages: db,
        reportedPlayers: sb,
        channel: mb
      } = (0, jb.i)(), Pb = (0, Bb.useRef)(0), qb = (0, Bb.useRef)(""), Eb = (0, Bb.useRef)(null);
      var yb;
      yb = Eb, (0, Bb.useEffect)((() => {
        if (!(0, ab.isIOS)()) return;
        const bb = yb.current;
        let ub = null;
        const hb = hb => {
            const Bb = hb.changedTouches[0];
            ub = "none" === getComputedStyle(bb).pointerEvents ? {
              id: Bb.identifier,
              y: Bb.clientY
            } : null
          },
          Bb = hb => {
            const Bb = ub,
              Ob = Bb && (0, ib.b)(hb.changedTouches, Bb.id);
            Ob && (hb.preventDefault(), bb.scrollBy({
              top: Bb.y - Ob.clientY,
              behavior: "instant"
            }), Bb.y = Ob.clientY)
          };
        return bb.addEventListener("touchstart", hb, {
          passive: !0
        }), bb.addEventListener("touchmove", Bb, {
          passive: !1
        }), () => {
          bb.removeEventListener("touchstart", hb), bb.removeEventListener("touchmove", Bb)
        }
      }), [yb]);
      const [Vb, Fb] = (0, Bb.useState)(!1), [fb, kb] = (0, Bb.useState)(!1), Tb = (0, Bb.useRef)(Vb), cb = (0, Bb.useRef)(null), Qb = (0, Bb.useRef)(!1), Rb = (0, Bb.useRef)(null), bu = (0, Bb.useRef)(null), uu = (0, Bb.useRef)(null), hu = (0, Bb.useRef)(Uu);
      hu.current = Uu;
      const Bu = (0, zb.l)();

      function Ou() {
        Wb.current = !1, Zb(!1), bu.current.blur()
      }

      function Gu(bb) {
        Tb.current = bb, Fb(bb)
      }

      function Uu() {
        const bb = bu.current.value;
        bu.current.value = "", Lu(bb)
      }

      function Lu(bb) {
        (0, jb.f)(bb), Pb.current = 0, Gu(!1)
      }

      function Yu(bb, ub) {
        0 === Pb.current && (qb.current = bu.current.value);
        const hb = (0, jb.d)(Pb.current + bb, ub);
        Pb.current = hb.stepsBack, bu.current.value = 0 === hb.stepsBack ? qb.current : hb.text, setTimeout((() => {
          bu.current && bu.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Su() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        Eb.current && (!bb && Tb.current || (Eb.current.scrollTop = 1e5))
      }
      return (0, Lb.c)(!0, Gb, "ChatComponent"), (0, Bb.useEffect)((() => (Nb = Gb, () => {
          Nb = !1
        })), [Gb]), (0, Sb.h)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, Ab.t)() && Zb(!1)
        })), (0, Bb.useEffect)((() => {
          bu.current.addEventListener("blur", (bb => {
            if (null === bu.current) return;
            Array.from(document.querySelectorAll(":hover")).some((bb => bb.classList.contains("ChatInputChannel") || bb.classList.contains("ChatMsgSelectWrapper"))) || ((0, ab.isMobile)() && Wb.current && "" !== bu.current.value && hu.current(), Zb(!1))
          }));
          const bb = bb => {
            Cb.current.contains(bb.target) || (0, Kb.j)(bb.target) || Zb(!1)
          };
          document.addEventListener("touchstart", bb, {
            capture: !0
          });
          const ub = bb => {
            (0, Db.i)(bb.target) && (Wb.current = !1, Zb(!1))
          };
          document.addEventListener("mousedown", ub, {
            capture: !0
          });
          const hb = () => {
              clearTimeout(cb.current), Gu(!0)
            },
            Bb = () => {
              clearTimeout(cb.current), cb.current = setTimeout((() => {
                Gu(!1), Su()
              }), 4e3)
            },
            Gb = () => {
              document.pointerLockElement ? (Zb(!1), kb(!0), Qb.current = !1, Gu(!1), Su()) : kb(!1)
            };
          Eb.current.addEventListener("pointermove", (bb => {
            "touch" === bb.pointerType || Qb.current || document.pointerLockElement || (Qb.current = !0, clearTimeout(cb.current))
          })), Eb.current.addEventListener("pointerleave", (bb => {
            "touch" !== bb.pointerType && (Qb.current = !1, Tb.current && Bb())
          })), Eb.current.addEventListener("pointerdown", (bb => {
            "touch" === bb.pointerType || document.pointerLockElement || (Qb.current = !0, hb())
          })), Eb.current.addEventListener("wheel", (bb => {
            document.pointerLockElement || bb.deltaY >= 0 && Math.abs(Eb.current.scrollTop) < 1 || (hb(), Qb.current || (cb.current = setTimeout((() => {
              Gu(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), Eb.current.addEventListener("touchstart", hb), Eb.current.addEventListener("touchend", Bb), Eb.current.addEventListener("touchcancel", Bb), document.addEventListener("pointerlockchange", Gb);
          const Lb = bb => {
            if (Bu.shown && (Wb.current || ! function(bb) {
                if ((0, lb.isTypingInInput)()) return !0;
                const ub = document.activeElement;
                return (ub instanceof HTMLButtonElement || "button" === (null === ub || void 0 === ub ? void 0 : ub.getAttribute("role"))) && ["Enter", " "].includes(bb.key)
              }(bb)) && "codeEditor" !== pb.d.get("openInGameMenuName") && "lobbyCodeEditor" !== pb.d.get("openInGameMenuName") && !Ob.gameBridge.latest("connectedGame").replay)
              if (Wb.current || !(0, Ab.t)()) {
                if (Wb.current) {
                  if ("ArrowUp" === bb.code || "ArrowDown" === bb.code) return Yu("ArrowUp" === bb.code ? 1 : -1, !1), void bb.stopPropagation();
                  if ("Tab" === bb.code) return jb.b.selectNextChannel(), bb.stopPropagation(), void bb.preventDefault();
                  if (bb.ctrlKey && Ib.includes(Jb[bb.keyCode])) return bb.preventDefault(), void bb.stopPropagation()
                }
                if ([...eb, "esc"].includes(Ub()(bb)))
                  if ("esc" !== Ub()(bb)) {
                    if (!Wb.current || "/" !== Ub()(bb)) {
                      if ("t" === Ub()(bb)) {
                        if (Wb.current) return void bb.stopPropagation();
                        bb.preventDefault()
                      }
                      Wb.current && "" !== bu.current.value && hu.current(), bb.repeat || (Wb.current || "/" === Ub()(bb) && (bu.current.value = "/", bb.preventDefault()), Zb(!Wb.current))
                    }
                  } else Wb.current && (Zb(!1), bb.stopPropagation());
                else Wb.current && bb.stopPropagation()
              } else eb.includes(Ub()(bb)) && (bb.preventDefault(), bb.stopPropagation(), (0, Ab.e)(bb))
          };
          document.addEventListener("keydown", Lb, {
            capture: !0
          });
          const Yb = Eb.current;
          let Sb = !1;
          const Hb = new ResizeObserver((() => {
              Sb && (Sb = !1, Su())
            })),
            wb = () => {
              Sb = !0, Hb.unobserve(Yb), Hb.observe(Yb)
            };
          Rb.current = wb;
          const Xb = new MutationObserver(wb);
          return Xb.observe(Yb, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", Lb, {
              capture: !0
            }), document.removeEventListener("touchstart", bb, {
              capture: !0
            }), document.removeEventListener("mousedown", ub, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", Gb), Rb.current = null, Xb.disconnect(), Hb.disconnect(), clearTimeout(cb.current)
          }
        }), []), (0, Kb.q)(bu, {
          open: () => {
            Zb(!0)
          },
          close: () => {
            Ou()
          },
          submit: () => {
            "" !== bu.current.value && Uu(), Ou()
          },
          stepHistory: () => {
            Yu(1, !0)
          },
          sendLine: bb => {
            Lu(bb), Ou()
          },
          selectNextChannel: () => {
            jb.b.selectNextChannel()
          }
        }), (0, Bb.useEffect)((() => {
          var bb;
          (Wb.current = Gb, bu.current) && (Gb ? (Pb.current = 0, bu.current.focus()) : (bu.current.blur(), null === (bb = Rb.current) || void 0 === bb || bb.call(Rb)))
        }), [Gb]),
        function(bb, ub) {
          (0, Bb.useLayoutEffect)((() => {
            if (!ub) return;
            vb.b.hold();
            const hb = bb.current.closest(".InGameHeaderAndChat"),
              Bb = window.visualViewport;
            let Ob = "";
            const Gb = () => {
              const bb = `${Bb.offsetTop+Bb.height}px`;
              bb !== Ob && (Ob = bb, hb.style.setProperty("--keyboard-top", bb))
            };
            return Gb(), Bb.addEventListener("resize", Gb), Bb.addEventListener("scroll", Gb), () => {
              Bb.removeEventListener("resize", Gb), Bb.removeEventListener("scroll", Gb), hb.style.removeProperty("--keyboard-top"), vb.b.release()
            }
          }), [bb, ub])
        }(Cb, Gb && ub), (0, tb.jsx)(tb.Fragment, {
          children: (0, tb.jsxs)("div", {
            ref: Cb,
            className: Xb()("Chat", {
              Chatting: Gb
            }),
            "data-camera-keeper": Gb ? "" : void 0,
            children: [(0, tb.jsx)("div", {
              ref: Eb,
              className: Xb()("ChatMessages", {
                HideScrollbar: !Vb && !Gb,
                NoScrolling: !(0, ab.isMobile)() && fb
              }),
              children: (0, tb.jsx)(nb.c, {
                messages: db,
                reportedPlayers: sb
              })
            }), ub && !Gb && (0, tb.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": bb("general:chat"),
              ...(0, xb.d)((() => {
                Zb(!0), uu.current.style.display = "flex", (0, ab.isIOS)() && bu.current.focus()
              }), "pointerup"),
              children: (0, tb.jsx)(ob.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, tb.jsxs)("div", {
              ref: uu,
              className: "ChatInputWrapper",
              style: {
                display: "" + (Gb ? "flex" : "none")
              },
              children: [mb && (0, tb.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: mb.elementBgColor
                },
                onClick: bb => {
                  jb.b.selectNextChannel(), bu.current.focus()
                },
                children: (0, tb.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, tb.jsx)(Yb.c, {
                    text: mb.elementContent
                  })
                })
              }), mb && hb && (0, tb.jsx)(Mb, {}), (0, tb.jsx)("input", {
                className: "ChatInput",
                maxLength: wb.Yc,
                ref: bu,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": bb("general:chat"),
                placeholder: mb ? `${mb.channelName} Chat${"touchOnly"===(0,Hb.b)()||hb?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Ib = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36159: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => nb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(8511),
      Lb = hb(16),
      Yb = hb(2242),
      Sb = hb(3373),
      ab = hb(1910),
      Hb = hb(13),
      wb = hb(1789),
      Zb = hb(36161),
      Xb = hb(2022),
      pb = hb(36166),
      ob = hb(2451),
      Ab = hb(2429),
      lb = hb(2424),
      Kb = hb(3385),
      Wb = hb(36169),
      Cb = hb(2911),
      db = hb(1857),
      rb = hb(1007);

    function jb(bb) {
      for (let hb = bb.length - 1; hb >= 0; hb--) {
        const Bb = "string" === typeof(ub = bb[hb]) ? ub : "str" in ub && "string" === typeof ub.str ? ub.str : "";
        if ("" !== Bb.trim()) return Bb
      }
      var ub;
      return ""
    }

    function nb(bb) {
      let {
        messages: ub,
        reportedPlayers: hb
      } = bb;
      return (0, rb.jsx)(rb.Fragment, {
        children: ub.map((bb => (0, rb.jsx)(Db, {
          message: bb,
          reportedPlayers: hb
        }, bb.clientChatMsgId)))
      })
    }
    const Db = (0, Bb.memo)((function(bb) {
      var ub;
      let {
        message: hb,
        reportedPlayers: Ob
      } = bb;
      const nb = (0, Bb.useRef)(null),
        [Db] = (0, Bb.useState)(Cb.g),
        {
          author: xb
        } = hb,
        zb = null === xb || void 0 === xb ? void 0 : xb.id,
        gb = null !== (ub = null === xb || void 0 === xb ? void 0 : xb.name) && void 0 !== ub ? ub : void 0,
        ib = (0, ab.e)(gb),
        vb = null !== xb && void 0 !== xb && xb.profileEffect ? Xb.g[xb.profileEffect] : void 0,
        tb = null !== xb && !xb.local,
        Jb = null === xb && null !== hb.serverChatMsgId,
        eb = (0, db.g)("hiddenPlayerNames", (bb => (0, pb.f)(tb, gb, bb))),
        Nb = null === hb.serverChatMsgId || null === xb ? null : {
          text: jb(hb.content),
          serverChatMsgId: hb.serverChatMsgId,
          authorId: xb.id
        },
        sb = Jb || null !== Nb && !Ob.includes(zb),
        Mb = (0, Sb.k)(tb && null !== gb && void 0 !== gb ? gb : null),
        mb = (0, lb.i)(nb);
      (0, Bb.useEffect)((() => () => {
        lb.c.closeIfOwner(nb)
      }), []);
      const Ib = () => {
          Jb ? Lb.i.vp("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            XS: (0, Ub.d)(hb.content),
            serverChatMsgId: hb.serverChatMsgId
          }) : null !== Nb ? Lb.i.vp("OpenReportMenu", {
            playerEId: zb,
            playerName: gb,
            XS: Nb.text,
            serverChatMsgId: Nb.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Pb = void 0 === gb ? [] : (0, Kb.d)(Mb, gb, Nb);
      return (0, rb.jsxs)("div", {
        ref: nb,
        className: Gb()("MessageWrapper", {
          ChatMsgSelectWrapper: zb,
          Still: Db
        }),
        onContextMenu: eb ? bb => {
          (0, ob.g)(nb, bb, {
            ...(0, pb.e)(zb, gb),
            showLocation: !1,
            status: null,
            extraActions: sb ? [{
              icon: "flag",
              text: "Report",
              onClick: Ib
            }] : [],
            moderationActions: (0, Wb.d)(gb),
            friendRequestSource: "chat"
          }, Hb.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: eb ? bb => {
          (0, Ab.b)(bb, (() => (0, pb.e)(zb, gb).playerSocialPreview))
        } : void 0,
        children: [vb && (0, rb.jsx)(vb, {
          className: "ChatMessageBackground",
          simple: !0
        }), (tb || Jb) && !mb && (0, rb.jsx)(Zb.d, {
          className: "ChatFloatingActions",
          triggerElementRef: nb,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Ib,
            show: sb
          }, ...Pb, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: bb => {
              (0, Yb.l)(gb, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: eb && "blocked" !== Mb
          }]
        }), (0, rb.jsx)(wb.c, {
          text: hb.content,
          friendBadgeFor: ib ? gb : void 0
        }, hb.clientChatMsgId)]
      }, hb.clientChatMsgId)
    }))
  },
  36208: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => Xb,
      f: () => wb,
      h: () => Hb
    });
    var Bb = hb(9085),
      Ob = hb(36214),
      Gb = hb(36217),
      Ub = hb(8444),
      Lb = hb(1348),
      Yb = hb(49),
      Sb = hb(65),
      ab = hb(1007);

    function Hb() {
      var bb;
      return (0, Lb.k)(Ob.c, (0, Ob.m)()), (0, ab.jsx)(ab.Fragment, {
        children: null === (bb = (0, Ob.m)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function wb(bb) {
      var ub;
      let {
        show: hb
      } = bb;
      (0, Lb.k)(Ob.c, (0, Ob.m)());
      const Sb = null === (ub = (0, Ob.m)()) || void 0 === ub ? void 0 : ub.menu;
      return (0, Yb.useEffect)((() => {
        var bb;
        hb || (null === Sb || void 0 === Sb || null === (bb = Sb.onClose) || void 0 === bb || bb.call(Sb), (0, Gb.o)())
      }), [hb, Sb]), (0, Yb.useEffect)((() => hb ? (0, Ub.f)(Gb.u, Gb.e) : void 0), [hb]), (0, ab.jsx)(Bb.b, {
        showing: hb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Sb || void 0 === Sb ? void 0 : Sb.content
      })
    }

    function Zb(bb) {
      let {
        placement: ub = "bottom"
      } = bb;
      return (0, ab.jsx)("div", {
        id: `clientGameHud-${ub}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xb(bb) {
      let {
        children: ub,
        placement: hb = "bottom"
      } = bb;
      const [Bb, Ob] = (0, Yb.useState)(null);
      return (0, Yb.useEffect)((() => {
        Ob(document.getElementById(`clientGameHud-${hb}`))
      }), [hb]), Bb ? (0, Sb.createPortal)(ub, Bb) : null
    }
  },
  36541: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      f: () => ab
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1357),
      Lb = hb(1007);
    const Yb = 200,
      Sb = 160;

    function ab() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Hb(bb) {
      let {
        side: ub,
        defaultSize: hb,
        covers: Ob,
        onClose: ab,
        children: Hb
      } = bb;
      const wb = (0, Bb.useRef)(null),
        [Zb, Xb] = (0, Bb.useState)(null),
        [pb, ob] = (0, Bb.useState)(hb);
      pb !== hb && (ob(hb), Xb(null));
      const Ab = (0, Bb.useRef)(null),
        lb = "top" === ub,
        Kb = bb => lb ? bb.clientY : bb.clientX,
        Wb = () => {
          Ab.current = null
        };
      return (0, Lb.jsxs)("div", {
        ref: wb,
        className: Gb()("ResizableSidePanel", ub && `ResizableSidePanel-${ub}`, {
          Covers: "always" === Ob,
          CoversWhenNarrow: "narrow" === Ob,
          Dragged: null !== Zb
        }),
        style: {
          [lb ? "height" : "width"]: null !== Zb && void 0 !== Zb ? Zb : hb
        },
        children: [Hb, ub && (0, Lb.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": lb ? "horizontal" : "vertical",
          onPointerDown: bb => {
            if (0 !== bb.button) return;
            bb.preventDefault();
            const ub = wb.current,
              hb = Array.from(ub.parentElement.children).reduce(((bb, hb) => hb !== ub && "0" !== getComputedStyle(hb).flexGrow ? bb + (bb => lb ? bb.clientHeight : bb.clientWidth)(hb) : bb), 0),
              Bb = lb ? ub.offsetHeight : ub.offsetWidth,
              Ob = Math.min(Yb, Bb),
              Gb = Math.max(Ob, Bb + Math.max(0, hb - Sb));
            Ab.current = {
              start: Kb(bb),
              startSize: Bb,
              minSize: Ob,
              maxSize: Gb
            }, bb.currentTarget.setPointerCapture(bb.pointerId)
          },
          onPointerMove: bb => {
            const hb = Ab.current;
            if (!hb) return;
            const Bb = "right" === ub ? hb.start - bb.clientX : Kb(bb) - hb.start;
            Xb(Math.min(hb.maxSize, Math.max(hb.minSize, hb.startSize + Bb)))
          },
          onPointerUp: Wb,
          onPointerCancel: Wb,
          onLostPointerCapture: Wb
        }), ab && (0, Lb.jsx)(Ub.i, {
          className: "ResizableSidePanelClose",
          onClick: ab
        })]
      })
    }
  },
  36567: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => jb,
      D: () => Ob,
      E: () => rb,
      d: () => Kb,
      g: () => ob,
      j: () => Xb,
      n: () => Zb,
      p: () => lb,
      q: () => nb,
      u: () => Wb,
      v: () => db,
      x: () => Cb
    });
    var Bb = hb(49);
    const Ob = 5e3,
      Gb = 500,
      Ub = 3e3;
    let Lb = null,
      Yb = null,
      Sb = null;
    const ab = new Set;

    function Hb(bb) {
      Lb = bb;
      for (const ub of ab) ub()
    }

    function wb() {
      if (!Lb || void 0 !== Lb.endedAt) return;
      null !== Yb && (clearTimeout(Yb), Yb = null), Hb({
        ...Lb,
        endedAt: Date.now()
      });
      const bb = Sb;
      Sb = null, null === bb || void 0 === bb || bb()
    }

    function Zb(bb, ub) {
      let {
        submit: hb,
        reopen: Bb
      } = ub;
      null !== Yb && clearTimeout(Yb), Sb = Bb, Hb({
        ...bb,
        startedAt: Date.now(),
        errors: []
      }), Yb = setTimeout(wb, Ub), hb()
    }

    function Xb() {
      Lb && void 0 === Lb.endedAt && void 0 === Lb.ranAt && (null !== Yb && clearTimeout(Yb), Hb({
        ...Lb,
        ranAt: Date.now()
      }), Yb = setTimeout(wb, Ob))
    }
    const pb = 3;

    function ob(bb) {
      if (!Lb || void 0 === Lb.ranAt || void 0 !== Lb.endedAt || Lb.errors.includes(bb) || Lb.errors.length >= pb) return;
      const ub = 0 === Lb.errors.length;
      Hb({
        ...Lb,
        errors: [...Lb.errors, bb]
      }), ub && (null !== Yb && clearTimeout(Yb), Yb = setTimeout(wb, Gb))
    }

    function Ab(bb) {
      var ub;
      return (null === (ub = Lb) || void 0 === ub ? void 0 : ub.chatKey) === bb ? Lb : null
    }

    function lb(bb) {
      const ub = Ab(bb);
      return ub && void 0 !== ub.endedAt ? (Hb(null), ub) : null
    }

    function Kb(bb) {
      var ub;
      (null === (ub = Lb) || void 0 === ub ? void 0 : ub.chatKey) === bb && (null !== Yb && (clearTimeout(Yb), Yb = null), Sb = null, Hb(null))
    }
    const Wb = "These changes from your last answer didn't go in. Make them again.";

    function Cb(bb) {
      const ub = [...new Set(bb)].slice(0, pb);
      return `Fix this in your change: when it ran, the world showed ${1===ub.length?"this error":"these errors"}: ${ub.join(" ")}`
    }

    function db(bb) {
      return `Your change didn't go in, because the code wouldn't run at all: ${bb.join(" ")} Send the whole change again with that fixed.`
    }

    function rb(bb) {
      return `Fix this in your change: ${bb.join(" ")}`
    }

    function jb(bb) {
      var ub;
      if (void 0 === bb.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const hb = Math.max(1, Math.round(((null !== (ub = bb.endedAt) && void 0 !== ub ? ub : bb.ranAt) - bb.ranAt) / 1e3)),
        Bb = `Your change ran in your world for ${hb} ${1===hb?"second":"seconds"}`;
      return 0 === bb.errors.length ? {
        title: "Tested: no errors",
        text: `${Bb} without an error.`
      } : {
        title: 1 === bb.errors.length ? "Tested: it showed an error" : `Tested: it showed ${bb.errors.length} errors`,
        text: `${Bb} and showed: ${bb.errors.join(" ")}`
      }
    }

    function nb(bb) {
      const [ub, hb] = (0, Bb.useState)((() => Ab(bb)));
      return (0, Bb.useEffect)((() => {
        const ub = () => {
          hb(Ab(bb))
        };
        return ub(), ab.add(ub), () => {
          ab.delete(ub)
        }
      }), [bb]), ub
    }
  },
  36573: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      g: () => Bb
    });
    const Bb = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Ob(bb, ub, hb) {
      return {
        key: bb,
        label: `Code block at ${ub.join(", ")}`,
        codeBlock: !0,
        pos: ub,
        canChangePos: hb
      }
    }
  },
  36559: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      c: () => Gb,
      d: () => Ub,
      e: () => Ob
    });
    const Bb = "code block",
      Ob = "World Code/";

    function Gb(bb) {
      return bb.trim().toLowerCase().startsWith(Ob.toLowerCase())
    }

    function Ub(bb) {
      return bb.trim().slice(Ob.length).replace(/^\.?\//, "")
    }
  },
  36519: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Yb,
      i: () => Sb,
      k: () => Lb,
      o: () => ab
    });
    var Bb = hb(49),
      Ob = hb(29),
      Gb = hb(86);
    class Ub {
      constructor(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = bb, this.defaultValue = ub, this.canChange = hb, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const bb = Ob.j.getItem(this.storageKey);
            this.value = "boolean" === typeof bb ? bb : this.defaultValue
          }
          return this.value
        }, this.set = bb => {
          this.value = bb, Ob.j.setItem(this.storageKey, bb);
          for (const ub of this.listeners) ub(bb)
        }
      }
      subscribe(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
    }
    const Lb = new Ub("codeEditorLightMode", !1),
      Yb = new Ub("codeEditorAiHints", !0),
      Sb = new Ub("codeEditorAiKeySafetyCheck", !0, Gb.featureFlags.isOwnTopLevelSite);

    function ab(bb) {
      const [ub, hb] = (0, Bb.useState)(bb.get);
      return (0, Bb.useEffect)((() => {
        const ub = bb.subscribe(hb);
        return hb(bb.get()), ub
      }), [bb]), [ub, bb.set]
    }
  },
  36516: (bb, ub, hb) => {
    hb.d(ub, {
      C: () => Db,
      D: () => wb,
      E: () => tb,
      F: () => jb,
      I: () => nb,
      M: () => vb,
      c: () => Xb,
      g: () => Yb,
      h: () => pb,
      i: () => xb,
      k: () => Lb,
      o: () => ab,
      s: () => Zb,
      u: () => ob,
      w: () => Wb,
      z: () => zb
    });
    var Bb = hb(36504),
      Ob = hb(36513);
    const Gb = "bloxd-world-code-directory-sync",
      Ub = "handles",
      Lb = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Yb(bb, ub) {
      return `${bb}::${ub}`
    }
    const Sb = new Set(["node_modules", ".git"]);

    function ab() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Hb() {
      return new Promise(((bb, ub) => {
        const hb = indexedDB.open(Gb, 1);
        hb.onupgradeneeded = () => {
          const bb = hb.result;
          bb.objectStoreNames.contains(Ub) || bb.createObjectStore(Ub)
        }, hb.onsuccess = () => {
          bb(hb.result)
        }, hb.onerror = () => {
          var bb;
          ub(null !== (bb = hb.error) && void 0 !== bb ? bb : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function wb(bb, ub) {
      const hb = await Hb();
      try {
        await new Promise(((Bb, Ob) => {
          const Gb = hb.transaction(Ub, "readwrite");
          Gb.objectStore(Ub).put(ub, bb), Gb.oncomplete = () => {
            Bb()
          }, Gb.onerror = () => {
            var bb;
            Ob(null !== (bb = Gb.error) && void 0 !== bb ? bb : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        hb.close()
      }
    }
    async function Zb(bb) {
      const ub = await Hb();
      try {
        return await new Promise(((hb, Bb) => {
          const Ob = ub.transaction(Ub, "readonly").objectStore(Ub).get(bb);
          Ob.onsuccess = () => {
            var bb;
            hb(null !== (bb = Ob.result) && void 0 !== bb ? bb : null)
          }, Ob.onerror = () => {
            var bb;
            Bb(null !== (bb = Ob.error) && void 0 !== bb ? bb : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        ub.close()
      }
    }
    async function Xb(bb) {
      const ub = await Hb();
      try {
        await new Promise(((hb, Bb) => {
          const Ob = ub.transaction(Ub, "readwrite");
          Ob.objectStore(Ub).delete(bb), Ob.oncomplete = () => {
            hb()
          }, Ob.onerror = () => {
            var bb;
            Bb(null !== (bb = Ob.error) && void 0 !== bb ? bb : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        ub.close()
      }
    }
    async function pb(bb) {
      const ub = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await bb.queryPermission(ub) || "granted" === await bb.requestPermission(ub)
    }
    async function ob(bb) {
      if (!ab()) return null;
      try {
        const ub = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await wb(bb, ub), ub
      } catch (ub) {
        if (function(bb) {
            return bb instanceof DOMException && "AbortError" === bb.name
          }(ub)) return null;
        throw ub
      }
    }

    function Ab(bb) {
      return bb.startsWith(".") || Sb.has(bb)
    }

    function lb(bb) {
      if (!bb) return !0;
      const ub = bb.split("/");
      for (const hb of ub)
        if ("" === hb || "." === hb || ".." === hb) return !1;
      return !0
    }
    async function Kb(bb, ub, hb) {
      for await (const [Gb, Ub] of bb.entries()) {
        if ("directory" === Ub.kind) {
          if (Ab(Gb)) continue;
          const bb = ub ? `${ub}/${Gb}` : Gb;
          if (!lb(bb)) continue;
          await Kb(Ub, bb, hb);
          continue
        }
        const bb = ub ? `${ub}/${Gb}` : Gb;
        if (!(0, Bb.n)(bb) && !(0, Ob.d)(bb)) continue;
        const Lb = await Ub.getFile();
        hb[bb] = (0, Ob.d)(bb) ? await gb(Lb) : await Lb.text()
      }
    }
    async function Wb(bb) {
      const ub = {};
      return await Kb(bb, "", ub), ub
    }

    function Cb(bb) {
      return !(!bb || bb !== bb.trim() || bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) && lb(bb)
    }
    async function db(bb, ub, hb) {
      const Bb = ub.split("/"),
        Ob = Bb[Bb.length - 1];
      let Gb = bb;
      for (let Ub = 0; Ub < Bb.length - 1; Ub++) Gb = await Gb.getDirectoryHandle(Bb[Ub], {
        create: hb
      });
      return {
        dir: Gb,
        fileName: Ob
      }
    }
    async function rb(bb, ub, hb) {
      if (!Cb(ub)) throw new Error(`Refusing to write unsafe path: ${ub}`);
      const {
        dir: Bb,
        fileName: Ob
      } = await db(bb, ub, !0), Gb = await Bb.getFileHandle(Ob, {
        create: !0
      }), Ub = await Gb.createWritable();
      await Ub.write(hb), await Ub.close()
    }
    async function jb(bb, ub, hb) {
      const Bb = await async function(bb, ub) {
        if (!Cb(ub)) return null;
        try {
          const {
            dir: hb,
            fileName: Bb
          } = await db(bb, ub, !1), Ob = await hb.getFileHandle(Bb), Gb = await Ob.getFile();
          return await Gb.text()
        } catch (hb) {
          if (hb instanceof DOMException && ("NotFoundError" === hb.name || "NotAllowedError" === hb.name)) return null;
          throw hb
        }
      }(bb, ub);
      Bb !== hb && await rb(bb, ub, hb)
    }
    async function nb(bb, ub, hb) {
      if (!(0, Bb.n)(ub) && !(0, Ob.d)(ub)) throw new Error(`Refusing to write non-allowlisted path: ${ub}`);
      if ((0, Ob.d)(ub)) {
        if (await ib(bb, ub) === Lb) throw new Error(`Move the binary schematic ${ub} outside the linked folder before syncing its placeholder`)
      }
      await rb(bb, ub, hb)
    }
    async function Db(bb, ub) {
      if (!Cb(ub)) throw new Error(`Refusing to remove unsafe path: ${ub}`);
      try {
        const {
          dir: hb,
          fileName: Bb
        } = await db(bb, ub, !1);
        await hb.removeEntry(Bb)
      } catch (hb) {
        if (hb instanceof DOMException && ("NotFoundError" === hb.name || "NotAllowedError" === hb.name)) return;
        throw hb
      }
    }
    async function xb(bb, ub) {
      if (!Cb(ub)) return null;
      try {
        const hb = ub.split("/");
        let Bb = bb;
        for (const bb of hb) Bb = await Bb.getDirectoryHandle(bb);
        return Bb
      } catch (hb) {
        if (hb instanceof DOMException && ("NotFoundError" === hb.name || "NotAllowedError" === hb.name)) return null;
        throw hb
      }
    }
    async function zb(bb, ub) {
      if ((0, Bb.n)(ub) || (0, Ob.d)(ub)) {
        if ((0, Ob.d)(ub)) {
          if (await ib(bb, ub) === Lb) throw new Error(`Refusing to remove a binary schematic: ${ub}`)
        }
        await Db(bb, ub)
      }
    }
    async function gb(bb) {
      if (bb.size > 64) return Lb;
      const ub = await bb.text();
      return Array.from(ub).some((bb => {
        const ub = bb.charCodeAt(0);
        return ub < 9 || ub > 13 && ub < 32 || 65533 === ub
      })) ? Lb : ub
    }
    async function ib(bb, ub) {
      try {
        const {
          dir: hb,
          fileName: Bb
        } = await db(bb, ub, !1);
        return await gb(await (await hb.getFileHandle(Bb)).getFile())
      } catch (hb) {
        if (hb instanceof DOMException && "NotFoundError" === hb.name) return null;
        throw hb
      }
    }
    async function vb(bb, ub) {
      const hb = await Wb(bb);
      for (const Bb of Object.keys(hb)) Bb in ub || (0, Ob.d)(Bb) || await zb(bb, Bb);
      for (const [Gb, Ub] of Object.entries(ub))((0, Bb.n)(Gb) || (0, Ob.d)(Gb)) && await nb(bb, Gb, Ub)
    }

    function tb(bb, ub) {
      var hb, Bb;
      let Ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Gb = null !== (hb = Ob.debounceMs) && void 0 !== hb ? hb : 300,
        Ub = null !== (Bb = Ob.pollMs) && void 0 !== Bb ? Bb : 1e3;
      let Lb = !1,
        Yb = null,
        Sb = null,
        ab = null;
      const Hb = () => {
          Lb || (Yb && clearTimeout(Yb), Yb = setTimeout((() => {
            Yb = null, wb()
          }), Gb))
        },
        wb = async () => {
          if (!Lb) try {
            if (!await pb(bb, "readwrite")) return;
            const hb = await Wb(bb);
            Lb || ub(hb)
          } catch (hb) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", hb)
          }
        };
      wb();
      const Zb = window.FileSystemObserver;
      if (Zb) try {
        ab = new Zb((() => {
          Hb()
        })), ab.observe(bb, {
          recursive: !0
        })
      } catch (Xb) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", Xb), ab = null
      }
      return ab || (Sb = setInterval((() => {
        Hb()
      }), Ub)), () => {
        Lb = !0, Yb && clearTimeout(Yb), Sb && clearInterval(Sb), ab && ab.disconnect()
      }
    }
  },
  4598: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ob,
      g: () => Ab
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(1095),
      Lb = hb(4606),
      Yb = hb(1789),
      Sb = hb(2288),
      ab = hb(4611),
      Hb = hb(1007);
    const wb = new WeakMap;
    let Zb = 0;

    function Xb(bb) {
      let ub = wb.get(bb);
      return void 0 === ub && (ub = Zb++, wb.set(bb, ub)), ub
    }

    function pb(bb) {
      let {
        piece: ub
      } = bb;
      return "space" === ub.kind ? (0, Hb.jsx)(Hb.Fragment, {
        children: ub.text
      }) : (0, Hb.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ub.delayMs}ms`
        },
        children: (0, Hb.jsx)(Lb.c, {
          text: "icon" === ub.kind ? `[[${ub.icon}]]` : ub.text
        })
      })
    }

    function ob(bb) {
      let {
        display: ub
      } = bb;
      const {
        selectedLanguage: hb
      } = (0, Ub.K)(), Bb = (0, Gb.useMemo)((() => (0, ab.e)((0, ab.i)(ub).plan.pieces)), [ub, hb.code]);
      return (0, Hb.jsxs)("div", {
        className: Ob()("Dialogue", {
          DialogueAnimateIn: !1 !== ub.animateIn
        }),
        children: [ub.speakerName && (0, Hb.jsx)(Yb.c, {
          text: ub.speakerName,
          className: "DialogueSpeaker"
        }), (0, Hb.jsx)("p", {
          className: "DialogueLine",
          children: Bb.map(((bb, ub) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Hb.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, ub) => (0, Hb.jsx)(pb, {
              piece: bb
            }, ub)))
          }, ub)))
        })]
      })
    }
    const Ab = (0, Gb.memo)((function() {
      const bb = (0, Sb.f)("dialogue");
      return (0, Hb.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Hb.jsx)(ob, {
          display: bb
        }, Xb(bb))
      })
    }))
  },
  36296: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => pb,
      f: () => ob
    });
    var Bb = hb(49),
      Ob = hb(1348),
      Gb = hb(1857),
      Ub = hb(36234),
      Lb = hb(588),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(1007);
    const Hb = [wb()];

    function wb() {
      return {
        source: null,
        direction: null,
        JI: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function Zb(bb) {
      return Hb.find((ub => null !== ub.source && ub.source === bb))
    }

    function Xb(bb) {
      clearTimeout(bb.timeout), bb.source = null, bb.direction = null, bb.writtenAngle = null, bb.JI && (bb.JI.style.rotate = "")
    }
    const pb = (0, Bb.memo)((function() {
      const [, bb] = (0, Bb.useReducer)((bb => bb + 1), 0);
      return (0, Ob.h)("damagedByOtherPlayer", (ub => {
        let {
          DB: hb,
          direction: Bb
        } = ub;
        const Ob = hb || "nonDirectional",
          Gb = function(bb) {
            var ub;
            const hb = null !== (ub = Zb(bb)) && void 0 !== ub ? ub : Hb.find((bb => null === bb.source));
            if (hb) return hb;
            const Bb = {
              source: null,
              direction: null,
              JI: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Hb.push(Bb), Bb
          }(Ob);
        clearTimeout(Gb.timeout), Gb.source = Ob, Gb.direction = Bb, Gb.timeout = setTimeout((() => {
          Xb(Gb), bb()
        }), 800), bb()
      })), (0, Gb.d)("kill", (ub => {
        let {
          killer: hb,
          victim: Bb
        } = ub;
        const Ob = hb.local && Zb(Bb.id);
        Ob && (Xb(Ob), bb())
      })), (0, Bb.useEffect)((() => {
        const bb = (0, Ub.d)("turnDamageIndicators", ob);
        return () => {
          bb(), Hb.forEach(Xb)
        }
      }), []), (0, ab.jsx)("div", {
        className: "DirectionalDamage",
        children: Hb.map(((bb, ub) => (0, ab.jsx)("div", {
          ref: ub => {
            bb.JI = ub
          },
          className: Sb()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, Lb.J)(bb.direction),
            DamageIndicatorIdle: null === bb.source
          })
        }, ub)))
      })
    }));

    function ob(bb) {
      for (const ub of Hb) {
        if (null === ub.source || (0, Lb.J)(ub.direction)) continue;
        const hb = ub.direction - bb;
        hb !== ub.writtenAngle && (ub.writtenAngle = hb, ub.JI.style.rotate = `${hb}rad`)
      }
    }
  },
  36161: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ob
    });
    var Bb = hb(49),
      Ob = hb(65),
      Gb = hb(1095),
      Ub = hb(958),
      Lb = hb.n(Ub),
      Yb = hb(1622),
      Sb = hb(966),
      ab = hb(1177),
      Hb = hb(1380),
      wb = hb(1572),
      Zb = hb(1374),
      Xb = hb(1007);
    const pb = 14;

    function ob(bb) {
      let {
        className: ub,
        triggerElementRef: hb,
        options: Ub
      } = bb;
      const {
        t: ob
      } = (0, Gb.K)(), [Ab, lb] = (0, Bb.useState)(!1), [Kb, Wb] = (0, Bb.useState)({
        x: 0,
        y: 0
      }), Cb = (0, Bb.useRef)(null);
      (0, Bb.useEffect)((() => {
        let bb = null;
        const ub = ub => {
            bb = {
              x: ub.clientX,
              y: ub.clientY
            }
          },
          Bb = ub => {
            if (null === bb || !(0, Zb.b)(bb, ub)) return;
            bb = null;
            const hb = pb * (0, Yb.getRemInPx)();
            Wb({
              x: Math.min(ub.clientX, window.innerWidth - hb - 5),
              y: ub.clientY
            }), lb((bb => !bb))
          },
          Ob = bb => {
            var ub;
            null !== (ub = Cb.current) && void 0 !== ub && ub.contains(bb.relatedTarget) || lb(!1)
          },
          Gb = hb.current;
        return Gb.addEventListener("pointerdown", ub), Gb.addEventListener("pointerup", Bb), Gb.addEventListener("mouseleave", Ob), () => {
          Gb.removeEventListener("pointerdown", ub), Gb.removeEventListener("pointerup", Bb), Gb.removeEventListener("mouseleave", Ob)
        }
      }), [hb]), (0, Bb.useEffect)((() => {
        if (Ab) return (0, wb.c)("pointerdown", (bb => {
          !Cb.current || Cb.current.contains(bb.target) || hb.current.contains(bb.target) || lb(!1)
        }))
      }), [Ab, hb]), (0, Bb.useLayoutEffect)((() => {
        if (!Ab || !Cb.current) return;
        const bb = Cb.current.getBoundingClientRect().height,
          ub = Math.max(5, window.innerHeight - bb - 5);
        Kb.y > ub && Wb({
          x: Kb.x,
          y: ub
        })
      }), [Ab, Kb]), (0, ab.v)("popup", Cb, (() => {
        lb(!1)
      }), Ab);
      const db = Ub.filter((bb => !1 !== bb.show));
      return Ab && 0 !== db.length ? (0, Ob.createPortal)((0, Xb.jsx)("div", {
        ref: Cb,
        className: Lb()("FloatingActions", {
          [ub]: ub
        }),
        style: {
          width: `${pb}rem`,
          top: Kb.y,
          left: Kb.x
        },
        children: db.map((bb => {
          let {
            icon: ub,
            text: hb,
            onPointerDown: Bb,
            analyticsClick: Ob
          } = bb;
          return (0, Xb.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: bb => {
              void 0 !== Ob && (0, Hb.reportAnalyticsClick)(Ob), Bb(bb), lb(!1), bb.stopPropagation()
            },
            children: [(0, Xb.jsx)(Sb.e, {
              name: ub
            }), (0, Xb.jsx)("div", {
              children: ob(hb)
            })]
          }, hb)
        }))
      }), function() {
        var bb;
        return null !== (bb = document.querySelector(".WholeAppWrapperInner")) && void 0 !== bb ? bb : document.body
      }()) : null
    }
  },
  36318: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => RG
    });
    var Bb = hb(36208),
      Ob = hb(49),
      Gb = hb(1948),
      Ub = hb(4292),
      Lb = hb(4296),
      Yb = hb(2288),
      Sb = hb(1811),
      ab = hb(1007);

    function Hb(bb) {
      let {
        className: ub,
        style: hb,
        vw: Bb,
        maxPx: Ob,
        children: Gb
      } = bb;
      console.assert("number" === typeof Bb && "number" === typeof Ob, "vw and maxPx passed to Text must be numbers");
      const Ub = window.innerWidth * (Bb / 100) > Ob ? `${Ob}px` : `${Bb}vw`;
      return (0, ab.jsx)("div", {
        className: ub,
        style: {
          ...hb,
          fontSize: Ub
        },
        children: Gb
      })
    }
    var wb = hb(36322),
      Zb = hb(1357),
      Xb = hb(16),
      pb = hb(1836),
      ob = hb(966);

    function Ab(bb) {
      let {
        tasks: ub,
        lastDisplayedTasks: hb
      } = bb;
      return (0, ab.jsx)(ab.Fragment, {
        children: Object.keys(ub).map((bb => (0, ab.jsx)(lb, {
          task: ub[bb],
          lastDisplayedAs: hb[bb]
        }, ub[bb].text)))
      })
    }

    function lb(bb) {
      let {
        task: ub,
        lastDisplayedAs: hb
      } = bb;
      const [Bb, Gb] = (0, Ob.useState)(null !== hb && void 0 !== hb && hb.progress ? hb.progress / ub.goal : 0), [Ub, Lb] = (0, Ob.useState)(!1), [Yb, Sb] = (0, Ob.useState)(ub.claimed || !1);
      return (0, Ob.useEffect)((() => {
        Gb(ub.progress / ub.goal)
      }), [ub.progress, ub.goal]), Yb ? null : (0, ab.jsxs)("div", {
        className: "Task",
        children: [(0, ab.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, ab.jsx)(Hb, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: ub.text
          })
        }), ub.progress < ub.goal ? (0, ab.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Bb ? (0, ab.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Bb + "%"
            }
          }) : null, (0, ab.jsx)("div", {
            className: "TaskProgressText",
            children: `${ub.progress}/${ub.goal}`
          })]
        }) : (0, ab.jsx)(Zb.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            Lb(!0)
          },
          children: (0, ab.jsx)(Hb, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Ub ? (0, ab.jsx)(Kb, {
          task: ub,
          close: () => {
            ub.claimed = !0, Sb(!0), Lb(!1)
          }
        }) : null]
      })
    }

    function Kb(bb) {
      let {
        task: ub,
        close: hb
      } = bb;
      const [Bb, Gb] = (0, Ob.useState)({}), [Ub, Lb] = (0, Ob.useState)("closed");
      (0, Ob.useEffect)((() => {
        let bb;
        return "animStart" === Ub && (bb = setTimeout((() => {
          Lb("animEnd")
        }), 700)), () => {
          clearTimeout(bb)
        }
      }), [Ub]), (0, wb.c)((() => {
        Sb.gameBridge.send("completeTask", ub.text)
      }));
      const Hb = (0, Yb.f)("currencyAmounts");
      return (0, ab.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Ub)
            if (0 === ub.rewards.length) hb(), Sb.gameBridge.send("completeTask", ub.text);
            else {
              const bb = {
                ...pb.b.get("currencyAmounts")
              };
              for (const ub in Bb) bb[ub] = {
                ...bb[ub],
                amount: bb[ub].amount + Bb[ub]
              };
              pb.b.apply({
                currencyAmounts: bb
              }), Lb("closed")
            }
          else "closed" === Ub && (Gb(ub.rewards.pop()), Lb("animStart"))
        },
        children: [(0, ab.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Ub ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Ub?"open":"closed"}.png`
        }), (0, ab.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Ub ? Object.keys(Bb).map((bb => {
            const ub = null === Hb || void 0 === Hb ? void 0 : Hb[bb];
            return !ub || ub.hidden ? null : (0, ab.jsxs)("div", {
              className: "Reward",
              children: [(0, ab.jsx)(ob.e, {
                name: ub.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: ub.iconColour
                }
              }), (0, ab.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Ub ? 0 : Bb[bb]
              })]
            }, bb)
          })) : null
        }), "animStart" === Ub ? (0, ab.jsx)(Wb, {}) : null, (0, ab.jsx)("div", {
          className: "ChestsLeft",
          children: ub.rewards.length
        })]
      })
    }

    function Wb() {
      const [bb, ub] = (0, Ob.useState)(0);
      (0, Ob.useEffect)((() => {
        ub(1)
      }), []);
      return (0, ab.jsx)(ab.Fragment, {
        children: Array.from({
          length: 40
        }).map(((ub, hb) => (0, ab.jsx)(ob.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * bb * Math.cos(hb / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * bb * Math.sin(hb / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === bb ? 1 : 0
          }
        }, hb)))
      })
    }
    Xb.i.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const bb = new Image,
          ub = new Image;
        bb.src = "/textures/miscImages/Treasure Chest open.png", ub.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Cb = hb(2925),
      db = hb(1029),
      rb = hb(1789),
      jb = hb(1348),
      nb = hb(314),
      Db = hb(1857),
      xb = hb(1242);

    function zb(bb) {
      var ub, hb;
      let {
        byId: Bb,
        localId: Ob
      } = bb;
      return null === Ob ? null : null !== (ub = null === (hb = Bb[Ob]) || void 0 === hb ? void 0 : hb.name) && void 0 !== ub ? ub : null
    }

    function gb(bb) {
      let {
        lbStats: ub,
        storedState: hb = {}
      } = bb;
      const {
        userContext: Bb
      } = (0, db.d)(), Gb = (0, Db.g)("players", zb), [Ub, Lb] = (0, Ob.useState)(hb.selectedCat || (null === ub || void 0 === ub ? void 0 : ub[0]) || null), [Yb, Hb] = (0, Ob.useState)(hb.selectedTimeframe || "Today"), [wb, Zb] = (0, Ob.useState)(null);
      (0, Ob.useEffect)((() => {
        null === Ub && null !== ub && ub.length > 0 && Lb(ub[0])
      }), [ub, Ub]);
      const [Xb, pb] = (0, Ob.useState)(hb.seeingTop || !1), [ob, Ab] = (0, Ob.useState)(!1), lb = (0, Ob.useCallback)((() => {
        null !== Ub && null !== Yb && (Sb.gameBridge.send("requestLeaderboard", {
          category: Ub.value,
          timeframe: Yb,
          seeTop: Xb
        }), Wb(!0), tb && Jb(null))
      }), [Ub, Yb, hb, Xb]);
      (0, Ob.useEffect)((() => {
        lb(), hb.selectedCat = Ub, hb.selectedTimeframe = Yb, hb.seeingTop = Xb
      }), [Ub, Yb, hb, Xb, lb]), (0, Ob.useEffect)((() => {
        if ((null === wb || void 0 === wb ? void 0 : wb.length) > 0)
          if (Xb) Xb && Ab(null === gb(wb));
          else {
            for (const bb of wb)
              if (1 === bb.place) return void Ab(!1);
            Ab(!0)
          }
      }), [wb, Xb]), (0, jb.h)("leaderboardResponse", (bb => {
        let {
          category: hb,
          timeframe: Bb,
          data: Ob
        } = bb;
        for (let Gb = 0; Gb < ub; Gb++)
          if (ub[Gb].value === hb) {
            Lb(ub[Gb]);
            break
          } Hb(Bb), Zb(Ob), Wb(!1)
      }));
      const [Kb, Wb] = (0, Ob.useState)(!0);

      function gb(bb) {
        const ub = zb(Sb.gameBridge.latest("players"));
        for (let hb = 0; hb < bb.length; hb++)
          if (bb[hb].name === ub) return bb[hb].place;
        return null
      }
      const [ib, vb] = (0, Ob.useState)(!1), [tb, Jb] = (0, Ob.useState)(null);
      (0, Ob.useEffect)((() => {
        if (wb && !ib) {
          const bb = gb(wb);
          bb < (hb.lastSeenPlayerPlace || 0) && Jb(hb.lastSeenPlayerPlace - bb), vb(!0)
        }
      }), [wb, hb, ib]), (0, Ob.useEffect)((() => () => {
        wb && (hb.lastSeenPlayerPlace = gb(wb))
      }), [wb, hb]);
      const eb = (0, Ob.useRef)(null),
        [Nb, sb] = (0, Ob.useState)(void 0);
      return (0, Ob.useEffect)((() => {
        var bb, ub;
        Nb !== (null === (bb = eb.current) || void 0 === bb ? void 0 : bb.offsetHeight) && sb(null === (ub = eb.current) || void 0 === ub ? void 0 : ub.offsetHeight)
      })), Bb.isLoggedIn() ? (0, ab.jsxs)(ab.Fragment, {
        children: [(0, ab.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, ab.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, ab.jsx)(Cb.b, {
              options: ub.map((bb => ({
                label: bb.label,
                value: bb.value
              }))),
              value: Ub,
              onChange: bb => {
                Lb(bb)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, ab.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, ab.jsx)(Cb.b, {
              options: nb.Pc.map((bb => ({
                value: bb,
                label: bb,
                className: "LBDropdownMenuItem"
              }))),
              value: Yb,
              onChange: bb => {
                Hb(bb.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), ob ? (0, ab.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              pb(!Xb)
            },
            children: Xb ? "See Yourself" : "See Top"
          }) : null]
        }), (0, ab.jsx)("div", {
          className: "LBTableWrapper",
          children: Kb ? (0, ab.jsx)("div", {
            className: "LoaderContainer",
            children: (0, ab.jsx)(xb.c, {})
          }) : null === tb ? (0, ab.jsx)(ab.Fragment, {
            children: (0, ab.jsxs)("table", {
              className: "LBTable",
              children: [(0, ab.jsx)("thead", {
                className: "LBTableTHead",
                ref: eb,
                children: (0, ab.jsxs)("tr", {
                  children: [(0, ab.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, ab.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, ab.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Ub.label.toUpperCase()
                  })]
                })
              }), (0, ab.jsx)("tbody", {
                children: wb.map((bb => (0, ab.jsxs)("tr", {
                  className: "LBTableTR " + (bb.name === Gb ? "LBTableTRYou" : ""),
                  children: [(0, ab.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${bb.place}`
                  }), (0, ab.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, ab.jsx)(rb.c, {
                      text: [{
                        entityName: bb.name
                      }]
                    })
                  }), (0, ab.jsx)("td", {
                    className: "LBTableTD",
                    children: bb.stat
                  })]
                }, bb.name)))
              })]
            })
          }) : (0, ab.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Jb(null)
            },
            children: (0, ab.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, ab.jsx)("div", {
                className: "TriangleUp"
              }), (0, ab.jsx)("div", {
                className: "LBIncreaseText",
                children: `${tb} Place${tb>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, ab.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, ab.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, ab.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var ib = hb(2903),
      vb = hb(86),
      tb = hb(29),
      Jb = hb(3198);
    const eb = (0, Ob.memo)((function(bb) {
      let {
        show: ub,
        onClose: hb
      } = bb;
      (0, ib.e)();
      const Bb = (0, Yb.f)("_tasks"),
        Gb = (0, Yb.f)("_availableLeaderboards"),
        [Sb, Hb] = (0, Ob.useState)({});
      Bb && Object.keys(Bb).length > 0 && 0 === Object.keys(Sb).length && Hb(Bb);
      const [wb] = (0, Ob.useState)({
        tasks: {},
        leaderboard: {}
      }), Zb = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Bb && Object.keys(Bb).length > 0,
          content: (0, ab.jsx)(Ab, {
            tasks: Bb,
            lastDisplayedTasks: Sb
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === Gb || void 0 === Gb ? void 0 : Gb.length) > 0,
          content: (0, ab.jsx)(gb, {
            lbStats: Gb,
            storedState: wb.leaderboard
          })
        }
      };

      function Xb() {
        for (const bb in Zb)
          if (Zb[bb].getIsDefined()) return bb;
        return null
      }
      const [pb, ob] = (0, Ob.useState)(Xb());

      function lb() {
        Hb({
          ...Bb
        }), hb()
      }(0, Ob.useEffect)((() => {
        pb || ob(Xb())
      }), [Xb()]), (0, Lb.c)(!0, pb && ub), (0, Ob.useEffect)((() => {
        ub && !pb && (console.log("CLOSE"), lb())
      }), [ub, pb]);
      const [Kb, Wb] = (0, Ob.useState)(!1);
      return (0, Ob.useEffect)((() => {
        ub && pb && !Kb && Wb(!0)
      }), [ub, Kb, pb]), (0, Ob.useEffect)((() => {
        !Kb && Bb && "tasks" !== pb && ob("tasks")
      }), [Kb, Bb, pb]), (0, ab.jsx)(ab.Fragment, {
        children: pb ? (0, ab.jsx)(Jb.d, {
          className: "RetentionFeaturesWrapper",
          show: ub,
          children: (0, ab.jsxs)(Ub.b, {
            close: lb,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, ab.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, ab.jsx)(sb, {}), (0, ab.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, ab.jsx)(Nb, {
                  setCategory: ob,
                  menuCategories: Zb,
                  selectedCat: pb
                }), (0, ab.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: Zb[pb].content
                })]
              })]
            }), (0, ab.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: vb.featureFlags.useDiscord && (0, ab.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, ab.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, ab.jsx)(Mb, {
                    tasks: Bb
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Nb(bb) {
      let {
        selectedCat: ub,
        setCategory: hb,
        menuCategories: Bb
      } = bb;
      return (0, ab.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Bb).map((bb => Bb[bb].getIsDefined() ? (0, ab.jsx)("div", {
          className: "MenuHeaderCategory " + (bb === ub ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            hb(bb)
          },
          children: Bb[bb].Title
        }, bb) : null))
      })
    }

    function sb() {
      const bb = (0, Yb.f)("currencyAmounts");
      return (0, ab.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== bb && void 0 !== bb ? bb : {}).map((ub => {
          const hb = bb[ub];
          return hb.hidden ? null : (0, ab.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, ab.jsx)(ob.e, {
              name: hb.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: hb.iconColour
              }
            }), (0, ab.jsx)("div", {
              className: "UiCurrencyAmount",
              children: hb.amount
            })]
          }, ub)
        }))
      })
    }

    function Mb(bb) {
      let {
        tasks: ub
      } = bb;
      return (0, ab.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, ab.jsx)(ob.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            tb.j.setItem("DiscordPressed", !0), Sb.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in ub && Xb.i.vp("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, ab.jsx)(Gb.e, {})]
      })
    }
    var mb = hb(13),
      Ib = hb(1537),
      Pb = hb(36148),
      qb = hb(8978),
      Eb = hb(4393),
      yb = hb(148),
      Vb = hb(1112),
      Fb = hb(1260),
      fb = hb(2472),
      kb = hb(1095),
      Tb = hb(1544),
      cb = hb(2257),
      Qb = hb(2242),
      Rb = hb(1746),
      bu = hb(1917),
      uu = hb(1158),
      hu = hb(1380),
      Bu = hb(36329),
      Ou = hb(36338),
      Gu = hb(36342),
      Uu = hb(36344),
      Lu = hb(36351),
      Yu = hb(2523);

    function Su(bb) {
      let {
        playersHere: ub,
        exclude: hb,
        UW: Bb
      } = bb;
      const {
        t: Gb
      } = (0, kb.K)(), Ub = (0, Yu.t)(Yu.l), [Lb, Yb] = (0, Ob.useState)([]), Sb = [], Hb = (bb, ub) => {
        const Bb = [...hb, ...Sb.map((bb => bb.player.name))];
        Sb.length < 3 && !(0, Ou.m)(Bb, bb.name) && Sb.push({
          player: bb,
          status: ub
        })
      };
      for (const Ob of ub) Hb((0, Lu.j)(Ob.name, Ob.cosmetics, Ob.ranks), Gb("worldSocial:inThisWorld"));
      if ("loaded" === Ub.state.status)
        for (const Ob of Ub.state.recentPlayers) Ob.preview.name && !Ob.preview.isError && Hb({
          ...Ob.preview,
          location: {
            status: "offline"
          }
        }, Gb("worldSocial:playedWithYou"));
      const wb = bb => {
        Yb((ub => [...ub, bb])), Bb(bb).finally((() => {
          Yb((ub => ub.filter((ub => ub !== bb))))
        }))
      };
      return (0, ab.jsx)(ab.Fragment, {
        children: Sb.map(((bb, ub) => {
          let {
            player: hb,
            status: Bb
          } = bb;
          return (0, ab.jsx)(Lu.g, {
            zIndex: Sb.length - ub,
            player: hb,
            status: Bb,
            onSendFriendRequest: () => {
              wb(hb.name)
            },
            actions: (0, ab.jsx)(Fb.d, {
              tooltipInner: (0, ab.jsx)(ab.Fragment, {
                children: Gb("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, ab.jsx)(Zb.e, {
                className: "FriendRequestButton",
                disabled: Lb.includes(hb.name),
                ariaLabel: `${Gb("recentPlayers:addFriend")} ${hb.name}`,
                onClick: () => {
                  wb(hb.name)
                },
                children: (0, ab.jsx)(ob.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${hb.name}`)
        }))
      })
    }
    var au = hb(36364),
      Hu = hb(36373),
      wu = hb(1124),
      Zu = hb(1392),
      Xu = hb(4390),
      pu = hb(275),
      ou = hb(4377);
    const Au = ["auto", "auto_existing"];

    function lu(bb) {
      return Au.includes(bb)
    }

    function Ku(bb, ub) {
      const hb = (0, wu.Jb)(bb);
      return null !== ub && (0, wu.Jb)(ub) === hb || (0, ou.c)().some((bb => (0, wu.Jb)(bb.name) === hb))
    }
    const Wu = new Set;

    function Cu(bb) {
      return `worldSocialSeen:${bb}`
    }

    function du(bb) {
      return !bb || Wu.has(bb) || !0 === tb.j.getItem(Cu(bb))
    }

    function ru(bb) {
      bb && !Wu.has(bb) && (Wu.add(bb), tb.j.setItem(Cu(bb), !0))
    }
    var ju = hb(2300),
      nu = hb(2309);

    function Du(bb) {
      let {
        show: ub,
        onClose: hb,
        opener: Bb
      } = bb;
      const {
        lobbyName: Gb,
        shownLobbyName: Lb
      } = (0, Db.i)("connectedGame");
      return (0, Ob.useEffect)((() => {
        ub && (0, hu.reportAnalyticsClick)({
          id: "world_social.open",
          value: Bb
        })
      }), [ub]), (0, ab.jsx)(Ub.b, {
        show: ub && null !== Gb,
        close: hb,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Bb,
        children: ub && null !== Gb && (0, ab.jsx)(xu, {
          lobbyName: Gb,
          worldCode: null !== Lb && void 0 !== Lb ? Lb : Gb,
          onClose: hb
        }, Gb)
      })
    }

    function xu(bb) {
      var ub;
      let {
        lobbyName: hb,
        worldCode: Bb,
        onClose: Gb
      } = bb;
      const {
        t: Ub
      } = (0, kb.K)(), Lb = (0, Ob.useRef)(null), {
        settings: Yb,
        loading: Sb,
        answered: Hb,
        change: wb,
        retry: Xb
      } = (0, Bu.d)(hb), pb = (0, Tb.i)(), Ab = (0, Db.i)("players"), lb = (0, Db.i)("hiddenPlayerNames"), [Kb, Wb] = (0, Ob.useState)([]), [Cb, rb] = (0, Ob.useState)([]), [jb, nb] = (0, Ob.useState)(!1), zb = (0, ju.d)(), gb = (0, Ob.useMemo)((() => {
        var bb, ub;
        const hb = null === Ab.localId ? null : null !== (bb = null === (ub = Ab.byId[Ab.localId]) || void 0 === ub ? void 0 : ub.name) && void 0 !== bb ? bb : null;
        return Ab.ids.flatMap((bb => {
          const ub = Ab.byId[bb];
          return null !== ub && void 0 !== ub && ub.name && ub.name !== hb ? [{
            name: ub.name,
            cosmetics: ub.cosmetics,
            ranks: ub.ranks
          }] : []
        }))
      }), [Ab]), ib = (0, Ob.useMemo)((() => (0, Ou.k)(pb.friends, hb, gb.map((bb => bb.name)))), [pb.friends, hb, gb]), tb = vb.featureFlags.canSeeRealPlayerNames ? gb.filter((bb => null === (0, uu.d)(bb.name, lb))) : [], Jb = null !== Yb && void 0 !== Yb && Yb.canManage ? Yb : null, eb = null !== Jb, Nb = null !== (ub = null === Yb || void 0 === Yb ? void 0 : Yb.visibility) && void 0 !== ub ? ub : null, sb = "whitelist" === (null === Jb || void 0 === Jb ? void 0 : Jb.visibility), Mb = "private" === Nb || "whitelist" === Nb && !eb, {
        userContext: mb
      } = (0, db.d)();
      (0, Ob.useEffect)((() => {
        eb && Ku(hb, mb.getPersonalWorldLobbyName()) && ru(mb.whamm)
      }), [eb, hb, mb]);
      const Ib = Mb ? Ub("whitelist" === Nb ? "socialBar:inviteWorldManagersOnly" : eb ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        qb = null === Ib;
      (0, Ob.useEffect)((() => Mb ? void 0 : Rb.f.quietFriendAdded()), [Mb]), (0, Ob.useEffect)((() => Rb.f.quietFriendRequests()), []);
      const Yu = (0, Ob.useRef)(!1);
      (0, Ob.useEffect)((() => {
        const bb = Lb.current,
          ub = !Yu.current;
        Yu.current = !0;
        const hb = null === document.activeElement || document.activeElement === document.body;
        null !== bb && void 0 !== bb && bb.contains(document.activeElement) || !ub && !hb || (0, Pb.h)() || null === bb || void 0 === bb || bb.focus({
          preventScroll: !0
        })
      }), [qb]), (0, Ob.useEffect)((() => {
        const bb = bb => {
          "Escape" !== bb.key || null !== document.activeElement && document.activeElement !== document.body || Gb()
        };
        return document.addEventListener("keydown", bb), () => {
          document.removeEventListener("keydown", bb)
        }
      }), [Gb]);
      const wu = null === Yb && !Hb,
        Zu = (Sb || pb.loading) && 0 === pb.friends.length,
        Xu = pb.friends.flatMap((bb => bb.name ? [bb.name] : [])),
        pu = Kb.filter((bb => !(0, Ou.m)(Xu, bb))),
        ou = ib.length + 3,
        Au = pu.length + ou,
        lu = jb ? pb.requests : pb.requests.slice(0, 1),
        Wu = async function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const hb of (0, Ou.p)(bb, Eb.G)) {
            if (!await wb({
                whitelistAdd: hb
              }, (bb => (0, Ou.w)(bb, hb, !0)), {
                quiet: ub
              })) return !1
          }
          return !0
        }, Cu = bb => {
          if (sb && Jb) return {
            on: (0, Ou.m)(Jb.whitelist, bb),
            onChange: ub => {
              (0, hu.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: ub ? "on" : "off"
              }), wb(ub ? {
                whitelistAdd: [bb]
              } : {
                whitelistRemove: bb
              }, (hb => (0, Ou.w)(hb, [bb], ub)))
            }
          }
        }, du = async (bb, ub) => {
          (0, hu.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: ub
          });
          const hb = await (0, Qb.j)(bb, "world_social");
          return (0, Qb.e)(hb, bb, {
            announceSent: !1
          }), "failed" !== hb.kind && ("sent" === hb.kind && Wb((ub => (0, Ou.m)(ub, bb) ? ub : [...ub, bb])), sb && await Wu([bb]), !0)
        };
      return (0, ab.jsxs)("div", {
        ref: Lb,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && " " === bb.key && bb.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, ab.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, ab.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Ub("worldSocial:title")
          }), (0, ab.jsx)(Zb.i, {
            className: "WorldSocialClose",
            onClick: Gb
          })]
        }), wu && (0, ab.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, ab.jsx)(xb.c, {})
        }), !wu && (0, ab.jsxs)(ab.Fragment, {
          children: [(0, ab.jsx)(Gu.c, {
            worldCode: Bb,
            message: Ib
          }), null === Yb && !Sb && (0, ab.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: Xb,
            children: Ub("worldSocial:loadFailed")
          }), eb && null !== Nb && (0, ab.jsx)(Uu.d, {
            visibility: Nb,
            onPick: bb => {
              (async bb => {
                if (bb === Nb) return;
                (0, hu.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: bb
                });
                const ub = [...(0, Hu.b)(hb), ...Cb],
                  Bb = "whitelist" === bb && Yb ? (0, Ou.g)(ib, ub, Yb.whitelist) : [];
                await wb({
                  setVisibility: bb
                }, (ub => ({
                  ...ub,
                  visibility: bb
                }))) && await Wu(Bb)
              })(bb)
            }
          }), pb.requests.length > 0 && (0, ab.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, ab.jsx)(fb.d, {
              label: (0, ab.jsxs)(ab.Fragment, {
                children: [(0, ab.jsx)(ob.e, {
                  name: bu.f
                }), " ", Ub("socialBar:requests")]
              }),
              meta: (0, ab.jsxs)(ab.Fragment, {
                children: [pb.requests.length, pb.requests.length === Vb.r && (0, ab.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Ub("socialBar:limitReached")
                }), !jb && pb.requests.length > 1 && (0, ab.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    nb(!0)
                  },
                  children: Ub("worldSocial:moreRequests", {
                    count: pb.requests.length - 1
                  })
                })]
              })
            }), (0, ab.jsx)("div", {
              className: "PlayerRows",
              children: lu.map(((bb, ub) => (0, ab.jsx)(Lu.g, {
                zIndex: lu.length - ub,
                player: bb,
                actions: (0, ab.jsxs)(ab.Fragment, {
                  children: [(0, ab.jsx)(Fb.d, {
                    tooltipInner: (0, ab.jsx)(ab.Fragment, {
                      children: Ub("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, ab.jsx)(Zb.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Ub("general:accept")} ${bb.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Qb.g)(bb.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, ab.jsx)(ob.e, {
                        name: "check"
                      })
                    })
                  }), (0, ab.jsx)(Fb.d, {
                    tooltipInner: (0, ab.jsx)(ab.Fragment, {
                      children: Ub("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, ab.jsx)(Zb.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Ub("general:decline")} ${bb.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Qb.g)(bb.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, ab.jsx)(ob.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${bb.name}`)))
            })]
          }), (0, ab.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, ab.jsx)(fb.d, {
              label: (0, ab.jsxs)(ab.Fragment, {
                children: [(0, ab.jsx)(ob.e, {
                  name: bu.c
                }), " ", Ub("socialBar:friends")]
              }),
              meta: pb.loaded && !Mb ? pb.friends.length : void 0
            }), (0, ab.jsx)(au.d, {
              label: Ub("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: Ub("worldSocial:addFriendPlaceholder"),
              onSubmit: async bb => await du(bb, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), Zu && (0, ab.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, ab.jsx)(xb.c, {})
            }), !Zu && (0, ab.jsxs)(ab.Fragment, {
              children: [(0, ab.jsxs)("div", {
                className: "PlayerRows",
                children: [pu.map(((bb, ub) => (0, ab.jsx)(Lu.g, {
                  zIndex: Au - ub,
                  player: (0, Lu.j)(bb, null),
                  status: Ub("worldSocial:requestSent"),
                  gH: Cu(bb)
                }, `request:${bb}`))), !Mb && ib.map(((bb, ub) => (0, ab.jsx)(Lu.e, {
                  zIndex: ou - ub,
                  row: bb,
                  gH: Cu(bb.friend.name),
                  canInvite: (0, Ou.d)(Yb) && "here" !== bb.place,
                  invited: Cb.includes(bb.friend.name),
                  onInvite: () => {
                    (async bb => {
                      (0, hu.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const ub = () => {
                        rb((ub => ub.filter((ub => ub !== bb))))
                      };
                      rb((ub => [...ub, bb]));
                      const Bb = (0, Ou.s)(Yb, bb);
                      if ("none" !== Bb) {
                        const hb = Wu([bb], "quiet" === Bb);
                        if ("required" === Bb && !await hb) return void ub()
                      }
                      await (0, cb.k)(bb, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Hu.f)(hb, bb), setTimeout(ub, yb.p)) : ub()
                    })(bb.friend.name)
                  }
                }, bb.friend.name))), pb.loaded && 0 === pb.friends.length && (0, ab.jsx)(Su, {
                  playersHere: tb,
                  exclude: Kb,
                  UW: bb => du(bb, "suggestion")
                })]
              }), sb && pb.loaded && 0 === pb.friends.length && 0 === pu.length && (0, ab.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Ub("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), zb && (0, ab.jsxs)(Zb.O, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, nu.h)({
              page: "players",
              source: "invite_popup"
            }), Gb()
          },
          children: [(0, ab.jsx)(ob.e, {
            name: "users-gear"
          }), " ", Ub("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var zu = hb(2342),
      gu = hb(2297);

    function iu(bb) {
      let {
        show: ub,
        onClose: hb,
        option: Bb
      } = bb;
      const Gb = (0, Db.g)("connectedGame", (bb => (0, zu.d)(bb) ? bb.lobbyName : null));
      return function(bb) {
        const {
          gameEntrySource: ub,
          loadingOverlayVisible: hb
        } = (0, mb.j)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Bb
        } = (0, db.d)(), Gb = (0, Db.i)("localPlayerAlive"), Ub = (0, Db.g)("players", (bb => null !== bb.localId && void 0 !== bb.byId[bb.localId])), Lb = (0, gu.l)(), Yb = (0, Ob.useRef)(null), Sb = (0, Ob.useRef)(null), ab = "worldCreation" === ub, Hb = Bb.whamm, wb = Bb.getPersonalWorldLobbyName();
        (0, Ob.useEffect)((() => {
          var ub;
          null !== bb && (null === (ub = Sb.current) || void 0 === ub ? void 0 : ub.lobbyName) !== bb && null !== eu(bb, ab, Hb, wb) && (Sb.current = (0, Bu.c)(bb))
        }), [ab, bb, Hb, wb]), (0, Ob.useEffect)((() => {
          if (null !== bb && (!hb && Gb && Ub)) return Lb.whenShown((() => {
            var ub;
            const hb = Yb.current === bb ? null : eu(bb, ab, Hb, wb);
            if (null === hb) return;
            const Bb = (null === (ub = Sb.current) || void 0 === ub ? void 0 : ub.lobbyName) === bb ? Sb.current : (0, Bu.c)(bb);
            Sb.current = null, Yb.current = bb,
              function(bb, ub, hb, Bb) {
                const {
                  lobbyName: Ob
                } = bb, Gb = () => {
                  ! function(bb, ub) {
                    if (!Iu()) return void ub(!0);
                    const hb = performance.now() + Mu;
                    let Bb = 0;
                    const Ob = () => {
                      Bb = Iu() ? 0 : Bb + 1, Bb >= 2 ? ub(!0) : !mu(bb) || performance.now() > hb ? ub(!1) : setTimeout(Ob, su)
                    };
                    setTimeout(Ob, su)
                  }(Ob, (Gb => {
                    Bb();
                    const Ub = "auto_existing" === ub && du(hb);
                    Gb && mu(Ob) && !tu(Ob) && !Ub && (Nu(bb) ? Ju(Ob) : (Ju(Ob), ru(hb), function(bb) {
                      const ub = pu.b.world_social_popup_v1;
                      return (0, pu.i)("world_social_popup_v1"), (0, hu.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${ub}:${(0,Xu.e)()}:${bb}`
                      }), (0, Zu.flushClientAnalyticsEvents)(), "auto_open" === ub
                    }(ub) && ((0, Bu.b)(bb), Xb.i.vp("toggleMenu", `inviteLink|${ub}`), "inviteLink" !== mb.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === ub && !Nu(bb)) return void Gb();
                bb.response.then((bb => {
                  if (!("error" in bb)) return bb.settings.canManage ? void Gb() : (Ju(Ob), void Bb());
                  Bb()
                }))
              }(Bb, hb, Hb, (() => {
                Yb.current === bb && (Yb.current = null)
              }))
          }))
        }), [Lb, ab, hb, bb, Gb, Ub, Hb, wb])
      }(Gb), (0, Ob.useEffect)((() => {
        ub && null !== Gb && Ju(Gb)
      }), [ub, Gb]), null !== Gb ? (0, ab.jsx)(Du, {
        show: ub,
        onClose: hb,
        opener: lu(Bb) ? Bb : "icon"
      }) : (0, ab.jsx)(qb.e, {
        show: ub,
        onClose: hb
      })
    }
    const vu = new Set;

    function tu(bb) {
      return vu.has(bb) || !!tb.m.getItem(`worldSocialShown:${bb}`)
    }

    function Ju(bb) {
      vu.add(bb), tb.m.setItem(`worldSocialShown:${bb}`, !0)
    }

    function eu(bb, ub, hb, Bb) {
      return tu(bb) ? null : function(bb) {
        let {
          justMade: ub,
          playerId: hb,
          lobbyName: Bb,
          personalWorld: Ob
        } = bb;
        return ub ? "auto" : !du(hb) && Ku(Bb, Ob) ? "auto_existing" : null
      }({
        justMade: ub,
        playerId: hb,
        lobbyName: bb,
        personalWorld: Bb
      })
    }

    function Nu(bb) {
      let {
        answer: ub
      } = bb;
      return null !== ub && "settings" in ub && !ub.settings.canManage
    }
    const su = 500,
      Mu = 3e4;

    function mu(bb) {
      return "inGame" === mb.d.get("gameState") && Sb.gameBridge.latest("connectedGame").lobbyName === bb
    }

    function Iu() {
      return (0, Pb.h)() || mb.d.get("loadingOverlayVisible") || (0, Ib.q)()
    }
    var Pu = hb(36377),
      qu = hb(2944),
      Eu = hb(1874),
      yu = hb(2941);

    function Vu(bb, ub, hb) {
      return yu.b.overridesTexture(bb) ? yu.b.getTexture(bb, ub).url : hb
    }
    var Fu = hb(9906);
    const fu = (bb, ub) => {
        (0, Ob.useEffect)((() => {
          setTimeout((() => {
            bb && bb.current && bb.current.focus()
          }), 1)
        }), [ub])
      },
      ku = (0, Ob.memo)((function(bb) {
        let {
          isInputActive: ub,
          onClose: hb,
          onChange: Bb,
          textAreaRef: Ob,
          fontSize: Gb,
          lineHeight: Ub,
          currText: Lb
        } = bb;
        return (0, ab.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, ab.jsx)("img", {
            src: Vu("board_full", qu.f.BLOCK, Fu),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, ab.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: Lb,
            ref: Ob,
            style: {
              fontSize: `${Gb}rem`,
              lineHeight: `${Ub}rem`
            },
            onKeyDown: bb => {
              var ub;
              "Escape" !== bb.key && (bb.stopPropagation(), "Tab" === bb.key && function(bb) {
                bb.preventDefault();
                const ub = bb.target,
                  {
                    value: hb
                  } = ub;
                let Bb = ub.selectionStart,
                  Ob = ub.selectionEnd,
                  Gb = hb.slice(Bb, Ob);
                if (!Gb.includes("\n") && !bb.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Bb > 0 && "\n" !== hb[Bb - 1];) Bb--;
                const Ub = "\n" === hb[Ob - 1];
                Ub && Ob--;
                Gb = hb.slice(Bb, Ob);
                const Lb = Gb.split("\n").map((ub => bb.shiftKey ? ub.replace(/^\t/, "") : "\t" + ub)).join("\n");
                if (bb.shiftKey && hb.slice(Bb, Ob) === Lb) return;
                let {
                  selectionStart: Yb
                } = ub;
                ub.setSelectionRange(Bb, Ob), Yb > Bb && (!bb.shiftKey || "\t" === Gb[0]) && (Yb += bb.shiftKey ? -1 : 1);
                Ob = Bb + Lb.length + (Ub ? 1 : 0), document.execCommand("insertText", !1, Lb), ub.setSelectionRange(Yb, Ob)
              }(bb), /^F\d+$/i.test(bb.code) && null !== (ub = Eu.r.OpenCodeEditor) && void 0 !== ub && ub.includes(bb.code) && hb())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Bb
          })]
        })
      }));

    function Tu(bb) {
      return 1.3 * bb
    }
    var cu = hb(1587);
    const Qu = (0, Ob.memo)((function(bb) {
        let {
          show: ub,
          onOpen: hb,
          onClose: Bb
        } = bb;
        const [Gb, Lb] = (0, Ob.useState)(null), [Yb, Hb] = (0, Ob.useState)(""), [wb, Xb] = (0, Ob.useState)(0), [pb, ob] = (0, Ob.useState)(null), [Ab, lb] = (0, Ob.useState)({
          text: "",
          textSize: 0
        }), Kb = (bb, ub) => pb ? (0, Pu.m)(bb, ub, pb.width, pb.height) : (0, Pu.h)(bb, ub), Wb = bb => {
          Hb(Kb(Yb, bb)), Xb(bb), tb.j.setItem("lastBoardTextSize", bb)
        }, Cb = () => {
          Bb(), pb && Yb === Ab.text && wb === Ab.textSize || Sb.gameBridge.send("writeOnBoard", {
            pos: Gb,
            text: Yb,
            textSize: wb
          })
        };
        (0, Db.d)("boardEditRequested", (bb => {
          var Ob, Gb;
          if (!vb.featureFlags.canSeePlayerWrittenText) return;
          if (null === bb) return Lb(null), void(ub && Bb());
          const {
            pos: Ub,
            noticeboardSpan: Yb,
            text: Sb
          } = bb;
          Lb(Ub), ob(Yb), Hb(Sb);
          const ab = null !== (Ob = null !== (Gb = bb.textSize) && void 0 !== Gb ? Gb : tb.j.getItem("lastBoardTextSize")) && void 0 !== Ob ? Ob : 0;
          Xb(ab), lb({
            text: Sb,
            textSize: ab
          }), tb.j.setItem("lastBoardTextSize", ab), hb()
        }));
        const db = (0, Ob.useRef)(null);
        fu(db, ub), (0, cu.r)(db, {
          kind: "sign",
          submit: Cb
        });
        const rb = function(bb, ub) {
            const hb = Pu.d[bb];
            if (!ub) return hb.uiFontSize;
            const {
              numLines: Bb,
              charsPerLine: Ob
            } = (0, Pu.p)(ub.width, ub.height, bb);
            return hb.uiFontSize * Math.min(hb.charsPerLine / Ob, hb.numLines / Bb)
          }(wb, pb),
          jb = Tu(rb);
        return (0, ab.jsxs)(Ub.b, {
          className: "WriteOnBoardBg",
          close: Cb,
          escDoesExit: !0,
          show: ub,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, ab.jsx)(ku, {
            isInputActive: () => ub,
            onClose: Cb,
            onChange: bb => {
              Hb(Kb(bb.target.value, wb))
            },
            textAreaRef: db,
            fontSize: rb,
            lineHeight: jb,
            currText: Yb
          }), (0, ab.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, ab.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, ab.jsx)(Zb.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Wb(0)
              },
              disabled: 0 === wb,
              children: "Small"
            }), (0, ab.jsx)(Zb.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Wb(1)
              },
              disabled: 1 === wb,
              children: "Medium"
            }), (0, ab.jsx)(Zb.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Wb(2)
              },
              disabled: 2 === wb,
              children: "Large"
            })]
          })]
        })
      })),
      Ru = (0, Ob.memo)((function(bb) {
        let {
          show: ub,
          onOpen: hb,
          onClose: Bb
        } = bb;
        const [Gb, Lb] = (0, Ob.useState)(""), Yb = () => {
          Bb(), Sb.gameBridge.send("writeNameTag", Gb)
        };
        (0, jb.h)("EditNameTag", (bb => {
          vb.featureFlags.canSeePlayerWrittenText && null !== bb && (Lb(bb), hb())
        }));
        const Hb = (0, Ob.useRef)(null);
        fu(Hb, ub), (0, cu.r)(Hb, {
          kind: "nameTag",
          submit: Yb
        });
        const wb = Pu.z.nameTag.uiFontSize,
          Xb = Tu(wb);
        return (0, ab.jsxs)(Ub.b, {
          className: "WriteOnBoardBg",
          close: Yb,
          escDoesExit: !0,
          show: ub,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, ab.jsx)("div", {
            className: "NameTagTrim",
            children: (0, ab.jsx)(ku, {
              isInputActive: () => ub,
              onClose: Yb,
              onChange: bb => {
                const ub = bb.target.value.replaceAll("\n", "");
                Lb((0, Pu.n)(ub, "nameTag"))
              },
              textAreaRef: Hb,
              fontSize: wb,
              lineHeight: Xb,
              currText: Gb
            })
          }), (0, ab.jsx)(Zb.e, {
            onClick: Yb,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var bh = hb(17986);
    const uh = (0, Ob.memo)((function(bb) {
      let {
        show: ub,
        onOpen: hb,
        onClose: Bb
      } = bb;
      const [Gb, Lb] = (0, Ob.useState)(""), [Yb, Hb] = (0, Ob.useState)(0), [wb, Xb] = (0, Ob.useState)(!1), [pb, ob] = (0, Ob.useState)(["", "", "", "", "", "", "", "", "", ""]), [Ab, lb] = (0, Ob.useState)("Title"), [Kb, Wb] = (0, Ob.useState)(!0), [Cb, db] = (0, Ob.useState)(!1);
      (0, jb.h)("EditBook", (bb => {
        let {
          pages: ub,
          title: Bb,
          isPublished: Ob
        } = bb;
        var Gb;
        vb.featureFlags.canSeePlayerWrittenText && (null !== ub ? (ob(ub), Lb(null !== (Gb = ub[0]) && void 0 !== Gb ? Gb : ""), lb(Bb), Hb(0), Xb(!1), Wb(!Ob), db(!1), hb()) : ob(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const rb = (0, Ob.useRef)(null),
        nb = (0, Ob.useRef)(null);
      fu(rb, ub), (0, cu.r)(rb, {
        kind: "book"
      }), (0, cu.r)(nb, {
        kind: "WS"
      });
      const Db = Pu.z.book.uiFontSize,
        xb = Tu(Db),
        zb = () => {
          (Kb || Cb) && Sb.gameBridge.send("writeBook", {
            pages: [...pb],
            title: Ab,
            published: !Kb && Cb
          })
        },
        gb = bb => {
          wb && (pb[Yb] = Gb, Xb(!1)), Lb(pb[bb]), Hb(bb)
        };
      return (0, ab.jsxs)(Ub.b, {
        className: "WriteOnBoardBg",
        close: () => {
          Bb(), pb[Yb] = Gb, zb()
        },
        escDoesExit: !0,
        show: ub,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, ab.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, ab.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: Ab,
            ref: nb,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${xb}rem`
            },
            onKeyDown: bb => {
              Kb && bb.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: bb => {
              let ub = bb.target.value;
              ub = (0, Pu.n)(ub, "WS"), lb(ub)
            },
            readOnly: !Kb
          }), (0, ab.jsx)("img", {
            src: Vu("book_page", qu.f.ITEM, bh),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, ab.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, ab.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: Gb,
              ref: rb,
              style: {
                fontSize: `${Db}rem`,
                lineHeight: `${xb}rem`
              },
              onKeyDown: bb => {
                Kb && bb.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: bb => {
                const ub = bb.target.value;
                Lb((0, Pu.n)(ub, "book")), Xb(!0)
              },
              readOnly: !Kb
            })
          })]
        }), (0, ab.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, ab.jsx)(Zb.e, {
            disabled: 0 === Yb,
            onClick: () => {
              gb(Yb - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, ab.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, ab.jsx)(Zb.e, {
            disabled: 9 === Yb,
            onClick: () => {
              gb(Yb + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, ab.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, ab.jsx)(Zb.e, {
            onClick: () => {
              Wb(!Kb), db(!0)
            },
            className: "BookNavButton",
            children: Kb ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var hh = hb(36217),
      Bh = hb(8410),
      Oh = hb(1288),
      Gh = hb(1799);

    function Uh(bb) {
      let {
        show: ub,
        buttons: hb
      } = bb;
      const {
        t: Bb
      } = (0, kb.K)(), Gb = (0, Ob.useRef)(null);
      return (0, Ob.useEffect)((() => {
        var bb, hb;
        const Bb = ub ? (0, hh.v)() : null;
        if (!Bb || !(0, Oh.f)()) return;
        const Ob = (0, hh.k)().findIndex((bb => bb.id === Bb));
        (0, Bh.r)(null !== (bb = null === (hb = Gb.current) || void 0 === hb ? void 0 : hb.children[Ob]) && void 0 !== bb ? bb : null)
      }), [ub]), 0 === hb.length ? null : (0, ab.jsx)("div", {
        ref: Gb,
        className: "ClientGameInventoryButtons",
        onPointerDown: bb => {
          bb.stopPropagation()
        },
        onPointerUp: bb => {
          bb.stopPropagation()
        },
        children: hb.map((bb => {
          const ub = Bb(bb.labelKey);
          return (0, ab.jsxs)(Zb.m, {
            className: bb.className,
            disabled: bb.disabled,
            onClick: () => {
              (0, hh.q)(bb)
            },
            ariaLabel: bb.iconOnly ? ub : void 0,
            title: bb.iconOnly ? ub : void 0,
            children: [bb.icon && (0, ab.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === bb.icon.kind && (0, ab.jsx)(Gh.d, {
                itemName: bb.icon.name,
                amount: 0
              }), "image" === bb.icon.kind && (0, ab.jsx)("img", {
                src: bb.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === bb.icon.kind && (0, ab.jsx)(ob.e, {
                name: bb.icon.name
              })]
            }), !bb.iconOnly && ub]
          }, bb.id)
        }))
      })
    }
    var Lh = hb(36386),
      Yh = hb(2542),
      Sh = hb(9100),
      ah = hb(36145),
      Hh = hb(36138);
    let wh = null;
    window.setShowInventoryAdsOverride = bb => {
      wh = bb
    };
    const Zh = 24e4;
    var Xh = hb(1805);

    function ph(bb) {
      var ub;
      let {
        draggedInfo: {
          name: hb,
          attributes: Bb,
          amount: Ob
        },
        toAddRef: Gb
      } = bb;
      return (0, ab.jsx)("div", {
        className: "DraggedInvenItem",
        ref: Gb,
        children: (0, ab.jsx)(Gh.d, {
          itemName: hb,
          amount: Ob,
          enchantmentTier: null === Bb || void 0 === Bb || null === (ub = Bb.customAttributes) || void 0 === ub ? void 0 : ub.enchantmentTier,
          bar: (0, Xh.i)(Bb)
        })
      })
    }

    function oh(bb) {
      let {
        className: ub = "",
        displayInfo: hb,
        domRef: Bb
      } = bb;
      return (0, ab.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${ub}`,
        ref: Bb,
        children: [(0, ab.jsx)(rb.c, {
          text: (0, nb.wb)(hb.name, {
            fontStyle: hb.fontStyle
          })
        }), (0, ab.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, ab.jsx)(rb.c, {
            text: hb.desc
          })
        })]
      })
    }

    function Ah(bb) {
      let {
        info: ub,
        draggedInfo: hb
      } = bb;
      const Bb = (0, Ob.useRef)(null);
      return (0, Ob.useLayoutEffect)((() => {
        const bb = Bb.current,
          {
            left: hb,
            top: Ob
          } = function(bb, ub, hb, Bb) {
            const Ob = Bb.left * hb.width / 100 + 4,
              Gb = hb.width - Bb.right * hb.width / 100 - 4 - ub.width,
              Ub = Bb.top * hb.height / 100 + 4,
              Lb = hb.height - 4 - ub.height;
            return {
              left: Math.max(Ob, Math.min(bb.x - ub.width / 2, Gb)),
              top: Math.max(Ub, Math.min(bb.y - 48 - ub.height, Lb))
            }
          }({
            x: ub.initTouchX,
            y: ub.initTouchY
          }, {
            width: bb.offsetWidth,
            height: bb.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, mb.d.get("notchSize"));
        bb.style.left = `${hb}px`, bb.style.top = `${Ob}px`
      }), [ub]), (0, ab.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Bb,
        children: [(0, ab.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: hb.amount / ub.maxAmount * 100 + "%"
          }
        }), (0, ab.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [hb.amount, "/", ub.maxAmount]
        })]
      })
    }
    var lh = hb(958),
      Kh = hb.n(lh),
      Wh = hb(191);
    const Ch = (0, Ob.memo)((function(bb) {
      let {
        show: ub,
        onOpen: hb,
        onClose: Bb
      } = bb;
      const Gb = (0, Ob.useRef)({
          pos: null
        }),
        [Lb, Yb] = (0, Ob.useState)([0, 0, 0, 0]),
        {
          userContext: Hb
        } = (0, db.d)();
      (0, Db.d)("ironChestOpenRequested", (bb => {
        let {
          pos: ub,
          ownerDbId: Bb,
          cachedPasskey: Ob
        } = bb;
        if (Gb.current.pos = ub, Bb !== Hb.whamm) return null !== Ob ? (Yb(Ob), void wb(Ob)) : void hb();
        wb(Lb)
      })), (0, Db.d)("localEffectUpdated", (bb => {
        "Thief" === bb && Bb()
      }));
      const wb = bb => {
        const {
          pos: ub
        } = Gb.current;
        Sb.gameBridge.send("openIronChest", {
          pos: ub,
          Ya: bb
        })
      };
      return (0, ab.jsx)(Ub.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Bb,
        escDoesExit: !0,
        show: ub,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, ab.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, ab.jsx)(dh, {
            Ya: Lb,
            onPasskeyUpdated: Yb,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              wb(Lb)
            }
          })
        })
      })
    }));

    function dh(bb) {
      let {
        className: ub = "",
        Ya: hb,
        onPasskeyUpdated: Bb,
        confirmText: Ob,
        onConfirm: Gb
      } = bb;
      const {
        t: Ub
      } = (0, kb.K)();
      return (0, ab.jsxs)("div", {
        className: `${ub} IronChestPasskeyInput`,
        children: [(0, ab.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Ub("ironChest:passkeyInputTitle")
        }), (0, ab.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Wh.e.ironChestPasskeyLength).fill(0).map(((bb, ub) => (0, ab.jsx)(rh, {
            digit: hb[ub],
            onPasskeyDigitUpdated: bb => {
              const Ob = [...hb];
              Ob[ub] = bb, Bb(Ob)
            }
          }, ub)))
        }), (0, ab.jsx)(Zb.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: Gb,
          children: Ub(Ob)
        })]
      })
    }

    function rh(bb) {
      let {
        digit: ub,
        onPasskeyDigitUpdated: hb
      } = bb;
      return (0, ab.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, ab.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, ab.jsx)(Zb.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              hb(nb.d.mod(ub + 1, 10))
            },
            children: (0, ab.jsx)(ob.e, {
              name: "angle-up"
            })
          }), (0, ab.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: ub
          }), (0, ab.jsx)(Zb.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              hb(nb.d.mod(ub - 1, 10))
            },
            children: (0, ab.jsx)(ob.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var jh = hb(9097),
      nh = hb(36445),
      Dh = hb(36134);

    function xh(bb) {
      let {
        specialItemInfo: ub,
        setHovered: hb,
        pointerDown: Bb,
        pointerUp: Gb,
        enchantingTablePosition: Ub,
        enchantingTableBlockName: Lb
      } = bb;
      const {
        t: Hb
      } = (0, kb.K)(), [wb, Xb] = (0, Ob.useState)(null), [pb, ob] = (0, Ob.useState)(null), Ab = (0, Yb.f)("auraPerLevel"), lb = Math.floor((0, Db.i)("aura") / Ab);
      (0, Ob.useEffect)((() => {
        if (!ub) return void Xb(null);
        let bb = !0;
        return Sb.gameBridge.query("enchantingOffer", {
          slot: ub.idx,
          name: ub.name,
          blockName: Lb
        }).then((hb => {
          var Bb, Ob;
          let {
            perks: Gb,
            options: Ub
          } = hb;
          if (!bb) return;
          const Lb = {
            isEnchantable: Gb.length > 0,
            possibleEnchantments: Gb,
            options: Ub.map((bb => {
              let {
                level: ub,
                odds: hb
              } = bb;
              return {
                level: ub,
                possibilities: Object.fromEntries(hb.map(((bb, ub) => [`Tier ${ub+1}`, bb])))
              }
            })),
            isAlreadyEnchanted: Gb.length > 0 && void 0 !== (null === (Bb = ub.attributes) || void 0 === Bb || null === (Ob = Bb.customAttributes) || void 0 === Ob ? void 0 : Ob.enchantmentTier)
          };
          Xb(Lb), (bb => {
            const ub = bb.options.map((bb => Object.entries(bb.possibilities).map((bb => {
              let [ub, hb] = bb;
              return {
                str: `${ub}: ${hb>0?hb<.01?hb.toPrecision(1):hb.toFixed(2):0}%\n`,
                style: {
                  color: nb.rb[ub]
                }
              }
            }))));
            ob(ub)
          })(Lb)
        })), () => {
          bb = !1
        }
      }), [ub, Ub, Lb]);
      const Kb = [];
      for (let Ob = 0; Ob < nh.e; Ob++) {
        const bb = null === wb || void 0 === wb ? void 0 : wb.options[Ob],
          Bb = !bb || bb.level > lb;
        Kb.push((0, ab.jsx)(Zb.e, {
          className: "EnchantmentButton",
          onPointerEnter: bb ? bb => null === hb || void 0 === hb ? void 0 : hb()(!0, {
            name: "",
            desc: pb[Ob]
          }, bb) : void 0,
          onPointerLeave: bb ? () => null === hb || void 0 === hb ? void 0 : hb()(!1) : void 0,
          onClick: Bb ? void 0 : () => {
            Sb.gameBridge.send("enchantItem", {
              slot: ub.idx,
              level: bb.level,
              tablePos: Ub
            }), Xb(null)
          },
          disabled: Bb,
          children: bb ? (0, ab.jsxs)(ab.Fragment, {
            children: [(0, ab.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, ab.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Hb("enchantments:cost"), ": "]
              }), " ", Hb("enchantments:levels", {
                level: bb.level
              })]
            }), (0, ab.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, ab.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, ab.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Hb("enchantments:tier")
                }), Object.entries(bb.possibilities).map((bb => {
                  let [ub, hb] = bb;
                  return 0 === hb ? null : (0, ab.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: nb.rb[ub]
                    },
                    children: ub
                  }, ub)
                }))]
              }), (0, ab.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, ab.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Hb("enchantments:odds")
                }), Object.entries(bb.possibilities).map((bb => {
                  let [ub, hb] = bb;
                  return 0 === hb ? null : (0, ab.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: nb.rb[ub]
                    },
                    children: [hb > 0 && hb < .1 ? "<0.1" : hb.toFixed(0 < hb && hb < .95 ? 1 : 0), "%"]
                  }, ub)
                }))]
              })]
            })]
          }) : !1 === (null === wb || void 0 === wb ? void 0 : wb.isEnchantable) ? (0, ab.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Hb("enchantments:notEnchantable")
          }) : (0, ab.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Hb("enchantments:enterItem")
          })
        }, Ob))
      }
      return (0, ab.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, ab.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Lb
        }), (0, ab.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, ab.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, ab.jsx)(Dh.c, {
              idx: Hh.g,
              setHovered: bb => {
                null === hb || void 0 === hb || hb(Hh.g)(bb)
              },
              pointerDown: Bb,
              pointerUp: Gb,
              draggedInfo: null,
              specialItemInfo: ub,
              variation: "Enchanting Table"
            }), wb && wb.possibleEnchantments.length > 0 && (0, ab.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, ab.jsx)("h2", {
                children: "Possible Perks:"
              }), wb.possibleEnchantments.map((bb => (0, ab.jsxs)(Ob.Fragment, {
                children: [(0, ab.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, ab.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, ab.jsx)(Gh.d, {
                      itemName: `${bb} Enchantment`,
                      amount: 1
                    })
                  }), (0, ab.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: bb
                  })]
                }), (0, ab.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Hb((0, jh.l)(bb).translationKey)
                })]
              }, bb)))]
            })]
          }), (0, ab.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [wb && wb.isAlreadyEnchanted && (0, ab.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Hb("enchantments:alreadyEnchanted")
            }), Kb]
          })]
        })]
      })
    }
    var zh = hb(36452);

    function gh(bb) {
      var ub;
      let {
        specialItemInfo: hb,
        setSpecialItemInfo: Bb,
        setHovered: Gb,
        pointerDown: Ub,
        pointerUp: Lb
      } = bb;
      const {
        t: Yb
      } = (0, kb.K)(), Hb = (0, Db.g)("inventory", (bb => bb.freeSlots)), [wb, Xb] = (0, Ob.useState)(null);
      (0, Ob.useEffect)((() => {
        if (hb) {
          const bb = (0, zh.d)(hb.name, hb.amount);
          Xb({
            salvageable: !!bb,
            produces: bb
          })
        } else Xb(null)
      }), [hb, null === hb || void 0 === hb ? void 0 : hb.name, null === hb || void 0 === hb ? void 0 : hb.amount]);
      const pb = !!hb && !(null === wb || void 0 === wb || !wb.salvageable) && !(null !== (ub = wb.produces) && void 0 !== ub && ub.some((bb => {
        let {
          amt: ub
        } = bb;
        return ub < 1
      })));
      return (0, ab.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, ab.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Yb("item:salvagingTable")
        }), (0, ab.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, ab.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, ab.jsx)(Dh.c, {
              idx: Hh.g,
              setHovered: bb => {
                null === Gb || void 0 === Gb || Gb(Hh.g)(bb)
              },
              pointerDown: Ub,
              pointerUp: Lb,
              draggedInfo: null,
              specialItemInfo: hb,
              variation: "Salvaging Table"
            })
          }), (0, ab.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, ab.jsx)(Zb.e, {
              className: "SalvageButton",
              onClick: pb ? () => {
                const {
                  idx: bb,
                  name: ub,
                  amount: Ob
                } = hb;
                Sb.gameBridge.send("salvageItem", {
                  slot: bb,
                  name: ub,
                  amount: Ob
                }) && (Xb(null), Bb(null))
              } : void 0,
              disabled: !pb,
              children: wb ? wb.salvageable ? wb.produces.some((bb => {
                let {
                  amt: ub
                } = bb;
                return ub < 1
              })) ? (0, ab.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, ab.jsx)("div", {
                  className: "SalvageText Error",
                  children: Yb("salvagingTable:notEnoughResources")
                })
              }) : Hb < wb.produces.length ? (0, ab.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, ab.jsx)("div", {
                  className: "SalvageText Error",
                  children: Yb("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, ab.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, ab.jsx)("div", {
                  className: "SalvageText",
                  children: Yb("salvagingTable:salvage")
                }), (0, ab.jsx)("div", {
                  className: "SalvageIcons",
                  children: wb.produces.map(((bb, ub) => {
                    let {
                      item: hb,
                      amt: Bb
                    } = bb;
                    return (0, ab.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: hb,
                        amount: Math.floor(Bb)
                      })
                    }, ub)
                  }))
                })]
              }) : (0, ab.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, ab.jsx)("div", {
                  className: "SalvageText Error",
                  children: Yb("salvagingTable:unsalvageable")
                })
              }) : (0, ab.jsx)(ab.Fragment, {})
            })
          })]
        })]
      })
    }
    var ih = hb(197),
      vh = hb(9181),
      th = hb(2517),
      Jh = hb(1585),
      eh = hb(8419),
      Nh = hb(8417),
      sh = hb(1572),
      Mh = hb(1887),
      mh = hb(1302),
      Ih = hb(1951);

    function Ph(bb, ub, hb) {
      const Bb = bb.trim().toLowerCase();
      if ("" === Bb) return 0;
      let Ob = null;
      for (const Gb of ub) {
        const bb = Gb.toLowerCase().indexOf(Bb);
        if (0 === bb) return 0;
        bb > 0 && (Ob = 1)
      }
      if (null !== Ob) return Ob;
      for (const Gb of hb)
        if (Gb.toLowerCase().includes(Bb)) return 2;
      return null
    }

    function qh(bb) {
      return bb.map((bb => {
        var ub;
        return bb ? {
          name: bb.name,
          amount: null !== (ub = bb.amount) && void 0 !== ub ? ub : 1
        } : null
      }))
    }

    function Eh(bb) {
      return bb < 1e3 ? `${bb}` : bb < 1e4 ? Math.floor(bb / 100) / 10 + "k" : `${Math.floor(bb/1e3)}k`
    }
    var yh = hb(36459);
    const Vh = Zb.e,
      Fh = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      fh = () => {
        const bb = (0, mh.h)();
        return bb ? bb.getPadRepeatTiming(Fh) : Fh
      };

    function kh(bb, ub, hb) {
      var Bb, Ob;
      const Gb = (0, Sh.q)(ub, bb);
      let Ub = null === (Bb = ub[bb]) || void 0 === Bb ? void 0 : Bb.description;
      if (hb && (null === (Ob = (0, yh.e)().get(bb)) || void 0 === Ob || !Ob.hideIngredients)) {
        Ub ? (Ub = (0, nb.wb)(Ub), Ub.push({
          str: "\n"
        })) : Ub = [], Ub.push({
          str: "\n"
        }), Ub.push({
          str: "Can be crafted from:\n"
        });
        for (const bb of hb) "string" === typeof bb && (Ub.push({
          icon: bb,
          style: {
            fontSize: "1.5em"
          }
        }), Ub.push({
          str: " "
        }), Ub.push(...(0, nb.wb)((0, Sh.q)(ub, bb))), Ub.push({
          str: "\n"
        }))
      }
      return {
        name: Gb,
        desc: Ub
      }
    }

    function Th(bb) {
      let {
        name: ub,
        SS: hb
      } = bb;
      return `${ub}_${hb}`
    }

    function ch(bb) {
      var ub;
      let {
        onClick: hb,
        itemName: Bb,
        recipeId: Gb,
        isSelected: Ub,
        haveIngredients: Lb,
        craftable: Yb,
        setHovered: Sb,
        padActions: Hb,
        marked: wb,
        lock: Zb,
        itemInfo: Xb
      } = bb;
      const pb = (0, Ob.useRef)(null);
      return (0, eh.e)(pb, {
        press: bb => !Lb || "secondary" === bb && !Yb ? (Hb.refuse(), !1) : "primary" === bb ? (Hb.choose(), !0) : Hb.craft(),
        release: Hb.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, ab.jsxs)("div", {
        ref: pb,
        className: Kh()("InvenItem", {
          CraftableItemNotEnoughIngredients: !Lb && !Zb,
          CraftableItemMarked: wb,
          CraftableItemLocked: void 0 !== Zb,
          CraftableItemLockedFar: (null !== (ub = null === Zb || void 0 === Zb ? void 0 : Zb.stepsAway) && void 0 !== ub ? ub : 1) > 1
        }),
        "data-recipe-key": Gb,
        "data-pad-inventory-default": Ub ? "" : void 0,
        onClick: hb,
        style: {
          cursor: Ub ? null : "pointer"
        },
        onPointerEnter: bb => {
          null === Sb || void 0 === Sb || Sb(!0, kh(Bb, Xb)), !Ub && (0, sh.r)(bb.nativeEvent) && (0, Nh.g)() && hb()
        },
        onPointerLeave: () => {
          null === Sb || void 0 === Sb || Sb(!1)
        },
        children: [(0, ab.jsx)(Gh.d, {
          itemName: Bb,
          amount: 1
        }), wb && (0, ab.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), Zb && (0, ab.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, ab.jsx)(ob.e, {
            name: "lock"
          }), (0, ab.jsx)(rb.c, {
            text: Zb.tag
          })]
        })]
      })
    }

    function Qh(bb) {
      let {
        idx: ub,
        status: hb,
        shownItem: Bb,
        dim: Gb,
        onHoverStart: Ub,
        onHoverEnd: Lb,
        onPadBack: Yb
      } = bb;
      const Sb = (0, Ob.useRef)(null);
      (0, eh.e)(Sb, {
        press: () => !1,
        back: Yb,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Hb = hb.need > 0 ? Math.min(hb.have / hb.need, 1) : 1;
      return (0, ab.jsxs)("div", {
        ref: Sb,
        className: Kh()("CupTile", {
          Short: hb.missing > 0
        }),
        style: {
          width: Gb,
          height: Gb
        },
        "data-craft-ingredient": ub,
        onPointerEnter: Ub,
        onPointerLeave: Lb,
        children: [(0, ab.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Hb})`
          }
        }), (0, ab.jsx)(Gh.d, {
          itemName: Bb,
          amount: 0
        }), (0, ab.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [Eh(hb.have), "/", Eh(hb.need)]
        })]
      })
    }

    function Rh(bb) {
      var ub, hb, Bb, Gb, Ub;
      let {
        show: Lb,
        recipeItem: {
          name: Yb,
          SS: Hb,
          requires: wb,
          produces: Zb,
          haveIngredients: Xb
        },
        detail: pb,
        onCraft: ob,
        setHovered: Ab,
        craftButtonRef: lb,
        onPadBack: Kb,
        showPadShortcut: Wb,
        refusedCount: Cb,
        lock: db,
        itemInfo: jb
      } = bb;
      const {
        t: nb
      } = (0, kb.K)(), Db = null !== pb && !pb.roomForOne, xb = null !== (ub = null === pb || void 0 === pb ? void 0 : pb.craftAllTimes) && void 0 !== ub ? ub : 0, zb = function(bb, ub) {
        return bb.map((bb => {
          let {
            items: hb,
            amt: Bb
          } = bb, Ob = 0;
          const Gb = [];
          for (const Ub of hb) {
            const bb = ub(Ub);
            Ob += bb, bb > 0 && Gb.push(Ub)
          }
          return 0 === Gb.length && Gb.push(hb[0]), {
            shownItems: Gb,
            need: Bb,
            have: Ob,
            missing: Math.max(Bb - Ob, 0)
          }
        }))
      }(wb, (bb => {
        var ub;
        return null !== (ub = null === pb || void 0 === pb ? void 0 : pb.amounts[bb]) && void 0 !== ub ? ub : 0
      }));
      let gb = "4rem",
        ib = 4;
      3 === wb.length || 4 === wb.length ? gb = "3.75rem" : wb.length >= 5 && (gb = "3rem"), 4 === wb.length ? ib = 2 : wb.length <= 6 && (ib = 3);
      const vb = `calc(${ib} * ${gb} + ${ib-1} * 0.4rem + 1px)`,
        tb = (0, Ob.useRef)(null),
        Jb = (0, Ob.useRef)(null);
      (0, Ob.useLayoutEffect)((() => {
        tb.current.scrollTop = 0
      }), [Yb, Hb]);
      const eb = (0, Ob.useRef)(Cb);
      (0, Ob.useEffect)((() => {
        if (Cb === eb.current) return;
        eb.current = Cb;
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
        for (const Bb of null !== (ub = null === (hb = tb.current) || void 0 === hb ? void 0 : hb.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== ub ? ub : []) {
          var ub, hb;
          Bb.animate(bb, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Cb]);
      const Nb = (bb, ub, hb) => {
          var Bb;
          if ((0, yh.e)().has(Yb)) return void(hb && clearInterval(sb.current));
          const Ob = null !== (Bb = null === pb || void 0 === pb ? void 0 : pb.resultStackable) && void 0 !== Bb && Bb,
            Gb = qh(Sb.gameBridge.latest("inventory").player),
            {
              aS: Ub,
              fY: Lb,
              amountAddedToSlot: ab
            } = Sb.gameBridge.send("craftRecipe", {
              name: Yb,
              SS: Hb,
              times: ub || bb && Ob ? null : 1
            });
          if (Ub > 0) {
            const ub = [],
              Bb = new Set(wb.flatMap((bb => {
                let {
                  items: ub
                } = bb;
                return ub
              }))),
              Ub = function(bb, ub, hb) {
                const Bb = [];
                for (let Ob = 0; Ob < bb.length; Ob++) {
                  const Gb = bb[Ob];
                  if (!Gb || !hb.has(Gb.name)) continue;
                  const Ub = ub[Ob],
                    Lb = (null === Ub || void 0 === Ub ? void 0 : Ub.name) === Gb.name ? Ub.amount : 0;
                  Lb < Gb.amount && Bb.push({
                    idx: Ob,
                    itemName: Gb.name,
                    amount: Gb.amount - Lb
                  })
                }
                return Bb
              }(Gb, qh(Sb.gameBridge.latest("inventory").player), Bb).slice(0, 12),
              Hb = hb ? 0 : Math.min(50, 400 / Ub.length),
              Xb = hb ? 220 : 320;
            for (const bb of Ub) {
              var Zb;
              const hb = wb.findIndex((ub => {
                  let {
                    items: hb
                  } = ub;
                  return hb.includes(bb.itemName)
                })),
                Bb = null === (Zb = tb.current) || void 0 === Zb ? void 0 : Zb.querySelector(`[data-craft-ingredient="${hb}"]`),
                Ob = (0, Sh.g)(bb.idx);
              Bb && Ob && ub.push({
                kind: "ingredient",
                itemName: bb.itemName,
                amount: bb.amount,
                fY: bb.idx,
                from: Ob,
                to: (0, Sh.g)(Bb),
                delayMs: Math.round(ub.length * Hb),
                durationMs: Xb
              })
            }
            let pb;
            if (null !== Lb && ab > 0 && Jb.current) {
              const bb = ub.length > 0 ? ub[ub.length - 1].delayMs + .6 * Xb : 0;
              pb = {
                itemName: Yb,
                amount: ab,
                fY: Lb,
                from: (0, Sh.g)(Jb.current),
                delayMs: Math.round(bb)
              }
            }
            ob(pb, bb && !Ob ? Lb : null, ub), Lh.e.play("wood1", .5).rate(1.75)
          }
        },
        sb = (0, Ob.useRef)(null);
      (0, Ob.useEffect)((() => () => {
        clearInterval(sb.current)
      }), []);
      const Mb = (bb, ub) => {
          Nb(bb, !1, !1), clearInterval(sb.current), ub && (sb.current = setTimeout((() => {
            sb.current = setInterval((() => {
              Nb(bb, !1, !0)
            }), ub.intervalMs)
          }), ub.initialDelayMs))
        },
        mb = () => {
          clearInterval(sb.current)
        },
        Ib = !Xb || Db || Boolean(db),
        Pb = (0, Ob.useRef)(null),
        qb = null !== (hb = null === (Bb = (0, Ih.c)()) || void 0 === Bb ? void 0 : Bb.hideButtonHints) && void 0 !== hb && hb,
        Eb = null !== (Gb = null === (Ub = (0, mh.h)()) || void 0 === Ub ? void 0 : Ub.getBoundButton("inventorySecondary")) && void 0 !== Gb ? Gb : null,
        yb = () => !Ib && (Nb(!1, !0, !1), !0);
      (0, eh.e)(lb, {
        press: bb => "secondary" === bb ? yb() : !Ib && (Mb(!1, fh()), !0),
        release: mb,
        back: Kb,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, eh.e)(Pb, {
        press: yb,
        back: Kb,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [Vb, Fb] = (0, Ob.useState)(0), [fb, Tb] = (0, Ob.useState)(null);
      (0, Ob.useEffect)((() => {
        if (!0 === Lb) {
          Fb(0);
          const bb = setInterval((() => {
            Fb((bb => bb + 1))
          }), 1e3);
          return () => {
            clearInterval(bb)
          }
        }
        return () => {}
      }), [Lb]);
      const cb = null === pb || void 0 === pb ? void 0 : pb.ingredientsCraftedFrom,
        Qb = (0, Ob.useRef)(Ab);
      (0, Ob.useEffect)((() => {
        Qb.current = Ab
      }), [Ab]);
      const Rb = !(null === db || void 0 === db || !db.hideIngredients);
      (0, Ob.useEffect)((() => {
        var bb, ub;
        if (!fb) return;
        if (Rb) return Tb(null), void(null === (ub = Qb.current) || void 0 === ub || ub.call(Qb, !1));
        const hb = fb[Vb % fb.length];
        null === (bb = Qb.current) || void 0 === bb || bb.call(Qb, !0, kh(hb, jb, null === cb || void 0 === cb ? void 0 : cb[hb]))
      }), [fb, Vb, jb, cb, Rb]);
      const bu = !!db,
        uu = (0, Ob.useRef)(!1);
      (0, Ob.useEffect)((() => {
        var bb;
        bu && (clearInterval(sb.current), Rb && uu.current && (uu.current = !1, null === (bb = Qb.current) || void 0 === bb || bb.call(Qb, !1)))
      }), [bu, Rb]);
      const hu = (0, Sh.q)(jb, Yb);
      return (0, ab.jsxs)("div", {
        ref: tb,
        className: "CraftableInfo SmallTextBold",
        children: [(0, ab.jsx)("div", {
          className: "CraftableHeader",
          children: (0, ab.jsx)(rb.c, {
            text: hu
          })
        }), !Rb && (0, ab.jsx)("div", {
          className: Kh()("CraftableIngredients", {
            Compact: wb.length >= 5
          }),
          style: {
            maxWidth: vb
          },
          children: zb.map(((bb, ub) => {
            const hb = bb.shownItems[Vb % bb.shownItems.length];
            return (0, ab.jsx)(Qh, {
              idx: ub,
              status: bb,
              shownItem: hb,
              dim: gb,
              onHoverStart: () => {
                Tb(bb.shownItems)
              },
              onHoverEnd: () => {
                Tb(null), null === Ab || void 0 === Ab || Ab(!1)
              },
              onPadBack: Kb
            }, ub)
          }))
        }), db && (0, ab.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, ab.jsx)(rb.c, {
            text: db.reason
          })
        }), !db && (!Xb || Db) && (0, ab.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!Xb && "Missing ingredients", (0, ab.jsx)("br", {}), Db && "Inventory is full"]
        }), !Rb && (0, ab.jsxs)(ab.Fragment, {
          children: [(0, ab.jsxs)(Vh, {
            ref: lb,
            className: "DoCraftButton",
            onPointerDown: bb => {
              Mb((0, Sh.t)(bb), (0, sh.r)(bb.nativeEvent) ? fh() : Fh)
            },
            onPointerUp: mb,
            onPointerLeave: mb,
            disabled: Ib,
            children: [Wb && Eb && !Ib && !qb && (0, ab.jsx)(Mh.d, {
              className: "CraftShortcutGlyph",
              glyph: Eb
            }), (0, ab.jsx)("div", {
              ref: Jb,
              className: "DoCraftItem",
              onPointerEnter: () => {
                uu.current = !0, null === Ab || void 0 === Ab || Ab(!0, kh(Yb, jb))
              },
              onPointerLeave: () => {
                uu.current = !1, null === Ab || void 0 === Ab || Ab(!1)
              },
              children: (0, ab.jsx)(Gh.d, {
                itemName: Yb,
                amount: Zb
              })
            })]
          }), (0, ab.jsxs)(Vh, {
            ref: Pb,
            className: "DoCraftAllButton",
            onPointerDown: bb => {
              Nb((0, Sh.t)(bb), !0, !1)
            },
            disabled: Ib,
            children: [(0, ab.jsx)("span", {
              className: "CraftAllLabel",
              children: nb("general:craftAll")
            }), xb > 0 && (0, ab.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", Eh(xb)]
            })]
          })]
        })]
      })
    }

    function bB(bb) {
      let {
        selectedIdx: ub,
        hidden: hb
      } = bb;
      const Bb = (0, Oh.r)(),
        Gb = (0, Ob.useRef)(null);
      return (0, Ob.useLayoutEffect)((() => {
        const bb = Gb.current,
          Bb = null === bb || void 0 === bb ? void 0 : bb.parentElement;
        if (!Bb || !bb) return;
        const Ob = Bb.querySelector(".CraftableItems"),
          Ub = () => {
            var Gb, Ub;
            if (hb) return void(bb.style.opacity = "0");
            const Lb = null === Ob || void 0 === Ob ? void 0 : Ob.children[ub],
              Yb = null === (Gb = null !== (Ub = null === Lb || void 0 === Lb ? void 0 : Lb.querySelector(".InvenItem")) && void 0 !== Ub ? Ub : Lb) || void 0 === Gb ? void 0 : Gb.getBoundingClientRect();
            if (!Yb || 0 === Yb.width) return void(bb.style.opacity = "0");
            const Sb = Bb.getBoundingClientRect();
            bb.style.opacity = "1", bb.style.width = `${Yb.width}px`, bb.style.height = `${Yb.height}px`, bb.style.transform = `translate(${Yb.left-Sb.left+Bb.scrollLeft}px, ${Yb.top-Sb.top+Bb.scrollTop}px)`
          };
        Ub();
        const Lb = new MutationObserver(Ub),
          Yb = new ResizeObserver(Ub);
        return Yb.observe(Bb), Ob && (Lb.observe(Ob, {
          childList: !0,
          subtree: !0
        }), Yb.observe(Ob)), () => {
          Lb.disconnect(), Yb.disconnect()
        }
      }), [ub, hb]), (0, ab.jsx)("div", {
        ref: Gb,
        className: Kh()("SelectionReticle", {
          Secondary: Bb
        })
      })
    }

    function uB(bb, ub, hb) {
      return bb ? (0, ih.d)(vh.i, bb) ? hB(bb, ub, hb) : bb : hb("classicGame:handCrafting")
    }

    function hB(bb, ub, hb) {
      var Bb;
      const Ob = null === (Bb = ub[bb]) || void 0 === Bb ? void 0 : Bb.displayName;
      if ("string" === typeof Ob) return hb(Ob);
      const Gb = Sb.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Ob) ? Ob.map((bb => {
        if ("string" === typeof bb) return bb;
        if ("translationKey" in bb) return hb(bb.translationKey, (0, kb.s)(bb.params, Gb));
        if ("str" in bb) {
          if ("string" === typeof bb.str) return bb.str;
          if ("translationKey" in bb.str) return hb(bb.str.translationKey, (0, kb.s)(bb.str.params, Gb))
        }
        return ""
      })).join("") : Ob && "translationKey" in Ob ? hb(Ob.translationKey, (0, kb.s)(Ob.params, Gb)) : bb
    }

    function BB(bb, ub) {
      return bb === ub || null !== bb && null !== ub && bb.name === ub.name && bb.SS === ub.SS
    }

    function OB(bb) {
      var ub, hb, Bb;
      let {
        show: Gb,
        onCraft: Ub,
        dispatchSelectedCraftable: Lb,
        selectedCraftable: Yb,
        craftingStation: Hb,
        setHovered: wb
      } = bb;
      const {
        t: Zb
      } = (0, kb.K)(), [Xb, pb] = (0, Ob.useState)(""), [ob, Ab] = (0, Ob.useState)(0);
      (0, Ob.useEffect)((() => {
        Gb || (pb(""), Ab((bb => bb + 1)))
      }), [Gb]);
      const [lb, Kb] = (0, Ob.useState)(Hb);
      lb !== Hb && (Kb(Hb), "" !== Xb && (pb(""), Ab((bb => bb + 1))));
      const Wb = (0, Ob.useRef)(null),
        Cb = (0, Ob.useRef)(null),
        db = (0, Nh.h)(),
        rb = db.showing && "recipe" === db.kind,
        [jb, nb] = (0, Ob.useState)(0),
        xb = null !== Hb && void 0 !== Hb ? Hb : null,
        zb = (0, Ob.useRef)(null),
        gb = bb => {
          return !((ub = zb.current) === (hb = bb) || null !== ub && null !== hb && ub.station === hb.station && BB(ub.recipe, hb.recipe)) && (zb.current = bb, Sb.gameBridge.send("focusCrafting", bb), !0);
          var ub, hb
        };
      gb(Gb ? {
        station: xb,
        recipe: (null === (ub = zb.current) || void 0 === ub ? void 0 : ub.station) === xb ? zb.current.recipe : null
      } : null);
      let ib = Sb.gameBridge.latest("crafting");
      const vb = (0, Db.i)("itemInfo"),
        tb = "" !== Xb.trim(),
        Jb = (0, yh.y)(),
        eb = (0, yh.v)(),
        Nb = (0, yh.A)(),
        sb = function(bb, ub) {
          const [hb, Bb] = (0, Ob.useState)(!1);
          (0, Ob.useEffect)((() => {
            if (!bb) return void Bb(!1);
            const ub = setTimeout((() => {
              Bb(!0)
            }), 0);
            return () => {
              clearTimeout(ub)
            }
          }), [bb]);
          const Gb = bb && hb,
            Ub = (0, Ob.useRef)({
              station: ub,
              at: new Map
            });
          return (Ub.current.station !== ub || !Gb && Ub.current.at.size > 0) && (Ub.current = {
            station: ub,
            at: new Map
          }), Gb ? Ub.current.at : null
        }(Gb, Hb);
      let Mb = ib.recipes.filter((bb => {
        let {
          listed: ub
        } = bb;
        return ub
      }));
      if (tb) {
        const bb = [];
        for (const ub of ib.recipes) {
          var mb;
          const hb = null !== (mb = eb.get(ub.name)) && void 0 !== mb && mb.hideIngredients ? [] : ub.requires.flatMap((bb => {
              let {
                items: ub
              } = bb;
              return ub.flatMap((bb => [bb, hB(bb, vb, Zb)]))
            })),
            Bb = Ph(Xb, [ub.name, hB(ub.name, vb, Zb)], hb);
          null !== Bb && bb.push({
            item: ub,
            rank: Bb
          })
        }
        bb.sort(((bb, ub) => bb.rank - ub.rank)), Mb = bb.map((bb => {
          let {
            item: ub
          } = bb;
          return ub
        }))
      } else {
        if (sb && sb.size > 0) {
          const bb = ib.recipes.filter((bb => !bb.listed && sb.has(Th(bb))));
          Mb = Mb.concat(bb)
        }
        Mb = (0, yh.h)(Mb, Jb, eb, Nb), sb && (Mb = (0, yh.g)(Mb, sb, Th))
      }
      const Ib = bb => Mb.find((ub => Th(ub) === bb)),
        Pb = `${Hb}|${Xb}`,
        [qb, Eb] = (0, Ob.useState)(null),
        yb = (null === qb || void 0 === qb ? void 0 : qb.context) === Pb ? qb.key : null,
        Vb = Yb ? Th(Yb) : null,
        Fb = null !== (hb = null !== (Bb = Ib(Vb)) && void 0 !== Bb ? Bb : Ib(yb)) && void 0 !== hb ? hb : Mb[0],
        fb = Fb ? Th(Fb) : null,
        Tb = Fb ? {
          name: Fb.name,
          SS: Fb.SS
        } : null;
      Gb && gb({
        station: xb,
        recipe: Tb
      }) && (ib = Sb.gameBridge.latest("crafting")), fb !== Vb && fb !== yb && Eb(fb ? {
        context: Pb,
        key: fb
      } : null), (0, Ob.useEffect)((() => () => {
        zb.current = null, Sb.gameBridge.send("focusCrafting", null)
      }), []);
      const cb = BB(ib.detail, Tb) ? ib.detail : null,
        Qb = null !== cb && !cb.roomForOne,
        Rb = Mb.findIndex((bb => Th(bb) === Th(Fb))),
        bu = () => Cb.current ? (0, eh.d)(Cb.current) : null,
        uu = (0, Ob.useRef)(null),
        hu = (0, Ob.useRef)(0);
      hu.current++;
      const Bu = hu.current;
      (0, Ob.useEffect)((() => {
        const bb = uu.current;
        if (!bb || Bu <= bb.afterRender) return;
        if (uu.current = null, bb.key !== fb) return;
        const ub = bu();
        var hb;
        null !== ub && void 0 !== ub && ub.press("primary") && !bb.MS && (null === (hb = ub.release) || void 0 === hb || hb.call(ub))
      }));
      const Ou = bb => {
          const ub = {
            name: bb.name,
            SS: bb.SS
          };
          return {
            choose: () => {
              Lb(ub), (0, Bh.r)(Cb.current)
            },
            craft: () => {
              var bb, hb;
              return Lb(ub), Th(ub) !== Th(Fb) ? (uu.current = {
                key: Th(ub),
                MS: !0,
                afterRender: hu.current
              }, !0) : null !== (bb = null === (hb = bu()) || void 0 === hb ? void 0 : hb.press("primary")) && void 0 !== bb && bb
            },
            stopCraft: () => {
              var bb, ub;
              uu.current ? uu.current.MS = !1 : null === (bb = bu()) || void 0 === bb || null === (ub = bb.release) || void 0 === ub || ub.call(bb)
            },
            refuse: () => {
              Th(ub) !== Th(Fb) && Lb(ub), nb((bb => bb + 1))
            }
          }
        },
        Gu = () => {
          var bb, ub, hb;
          (0, Bh.r)(null !== (bb = null === (ub = Wb.current) || void 0 === ub || null === (hb = ub.querySelector(".CraftableItems")) || void 0 === hb ? void 0 : hb.children[Rb]) && void 0 !== bb ? bb : null)
        },
        Uu = Mb.map(Th).join("|"),
        Lu = (0, Ob.useRef)(Uu);
      return (0, Ob.useEffect)((() => {
        Lu.current !== Uu && (Lu.current = Uu, rb && Rb >= 0 && (0, Nh.g)() && Gu())
      })), (0, ab.jsxs)("div", {
        className: "Craftables",
        children: [(0, ab.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: uB(Hb, vb, Zb)
        }), (0, ab.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, ab.jsx)(Jh.b, {
            className: "CraftingSearch",
            placeholderText: Zb("general:searchRecipes"),
            defaultValue: Xb,
            maxLength: 100,
            onValueChange: bb => {
              pb(bb)
            },
            blurOnEnter: !0
          }, ob), 0 === Mb.length && tb && (0, ab.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: Zb("general:noRecipesMatchSearch")
          }), Mb.length > 0 && (0, ab.jsxs)(ab.Fragment, {
            children: [(0, ab.jsxs)("div", {
              ref: Wb,
              className: "CraftablesLeftSide",
              children: [(0, ab.jsx)(th.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Mb.map((bb => {
                  let {
                    name: ub,
                    SS: hb,
                    haveIngredients: Bb
                  } = bb;
                  return {
                    name: ub,
                    SS: hb,
                    haveIngredients: Bb
                  }
                })))],
                observing: Gb,
                children: Mb.map((bb => {
                  const {
                    name: ub,
                    SS: hb,
                    haveIngredients: Bb
                  } = bb, Ob = Th(bb);
                  return (0, ab.jsx)(ch, {
                    recipeId: Ob,
                    itemName: ub,
                    onClick: () => {
                      Lb({
                        name: ub,
                        SS: hb
                      })
                    },
                    isSelected: Th(Fb) === Ob,
                    haveIngredients: Bb,
                    craftable: Bb && !eb.has(ub) && !(Th(Fb) === Ob && Qb),
                    setHovered: wb,
                    padActions: Ou(bb),
                    marked: Jb.has(ub),
                    lock: eb.get(ub),
                    itemInfo: vb
                  }, Ob)
                }))
              }), (0, ab.jsx)(bB, {
                selectedIdx: Rb,
                hidden: rb && db.steppingSlots
              })]
            }), (0, ab.jsx)(Rh, {
              show: Gb,
              recipeItem: Fb,
              detail: cb,
              onCraft: Ub,
              setHovered: wb,
              craftButtonRef: Cb,
              onPadBack: Gu,
              showPadShortcut: rb,
              refusedCount: jb,
              lock: eb.get(Fb.name),
              itemInfo: vb
            })]
          })]
        })]
      })
    }
    var GB = hb(9106),
      UB = hb(3063),
      LB = hb(1971),
      YB = hb(8391);
    class SB {
      constructor(bb, ub, hb) {
        this.commit = bb, this.delayMs = ub, this.defers = hb, this.pending = null, this.timer = void 0, this.MS = !1, this.flush = () => {
          clearTimeout(this.timer);
          const bb = this.pending;
          null !== bb && (this.pending = null, this.commit(bb))
        }
      }
      type(bb) {
        this.pending = bb, clearTimeout(this.timer), this.MS || this.defers() ? this.MS || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(bb) {
        var ub;
        return null !== (ub = this.pending) && void 0 !== ub ? ub : bb
      }
      isHeld() {
        return this.MS
      }
      setHeld(bb) {
        this.MS = bb, bb || this.flush()
      }
    }

    function aB(bb) {
      return null === bb ? "creativeInventory:all" : `creativeInventory:${bb}`
    }

    function HB(bb) {
      let {
        category: ub
      } = bb;
      return null === ub ? (0, ab.jsx)(ob.e, {
        name: "layer-group"
      }) : (0, ab.jsx)(Gh.d, {
        itemName: GB.creativeItemCategoryIcons[ub],
        amount: 0
      })
    }

    function wB(bb) {
      let {
        labelKey: ub,
        isSelected: hb,
        onSelect: Bb,
        setHovered: Ob,
        children: Gb
      } = bb;
      return (0, ab.jsx)("div", {
        className: Kh()("CreativeCategoryTab", {
          Selected: hb
        }),
        onClick: Bb,
        onPointerEnter: bb => {
          (0, Sh.p)(bb) || Ob(!0, {
            name: {
              translationKey: ub
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Ob(!1)
        },
        children: Gb
      })
    }

    function ZB(bb) {
      let {
        categories: ub,
        selectedCategory: hb,
        onSelect: Bb
      } = bb;
      const {
        t: Gb
      } = (0, kb.K)(), [Ub, Lb] = (0, Ob.useState)(!1), Yb = (0, Ob.useRef)(null), Sb = (0, Ob.useCallback)((() => {
        Lb(!1)
      }), []);
      return (0, LB.d)(Yb, Sb), (0, ab.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Yb,
        children: [(0, ab.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            Lb(!Ub)
          },
          children: [(0, ab.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, ab.jsx)(HB, {
              category: hb
            })
          }), (0, ab.jsx)("span", {
            children: Gb(aB(hb))
          }), (0, ab.jsx)(ob.e, {
            name: Ub ? "caret-up" : "caret-down"
          })]
        }), Ub && (0, ab.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: ub.map((bb => (0, ab.jsxs)("div", {
            className: Kh()("CreativeCategoryDropdownOption", {
              Selected: hb === bb
            }),
            onClick: () => {
              Bb(bb), Lb(!1)
            },
            children: [(0, ab.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, ab.jsx)(HB, {
                category: bb
              })
            }), (0, ab.jsx)("span", {
              children: Gb(aB(bb))
            })]
          }, null !== bb && void 0 !== bb ? bb : "all")))
        })]
      })
    }
    const XB = (0, Ob.memo)((function(bb) {
      let {
        creativeScrollDiv: ub,
        playerInvenNumSlots: hb,
        getSetHoveringForIdx: Bb,
        getPointerDownForIdx: Gb,
        getPointerUpForIdx: Ub,
        creativeSearchVal: Lb,
        setCreativeSearchVal: Sb,
        creativeCategory: Hb,
        setCreativeCategory: wb,
        show: Zb
      } = bb;
      const {
        t: Xb
      } = (0, kb.K)(), pb = (0, Db.i)("creativeVisibility"), {
        userContext: Ab
      } = (0, db.d)(), lb = (0, Yb.f)("canUseDevCreativeItems"), Kb = Ab.playerHasRank("developer") || !!lb, Wb = (0, Ob.useMemo)((() => oB("", pb, Kb)), [pb, Kb]), Cb = (0, Ob.useMemo)((() => {
        const bb = (0, GB.creativeItemIds)(),
          ub = new Set(Wb.map((ub => (0, GB.creativeCategoryOf)(bb[ub]))));
        return GB.creativeItemCategories.filter((bb => ub.has(bb)))
      }), [Wb]), rb = null !== Hb && Cb.includes(Hb) ? Hb : null, nb = (0, Ob.useMemo)((() => "" === Lb ? Wb : oB(Lb, pb, Kb)), [Wb, Lb, pb, Kb]), xb = (0, Ob.useMemo)((() => {
        const bb = (0, GB.creativeItemIds)();
        return null !== rb ? nb.filter((ub => (0, GB.creativeCategoryOf)(bb[ub]) === rb)) : "" === Lb ? nb.filter((ub => !(0, GB.showOnlyInCreativeCategory)(bb[ub]))) : nb
      }), [nb, rb, Lb]), zb = Bb();

      function gb(bb) {
        wb(bb), ub.current.scrollTop = 0
      }
      const ib = [null, ...Cb],
        {
          isTouchScreen: vb
        } = (0, mb.j)(["isTouchScreen"]),
        tb = !vb,
        Jb = (0, Ob.useRef)(null),
        [eb, Nb] = (0, Ob.useState)(0);
      (0, Ob.useEffect)((() => {
        const bb = Jb.current;
        if (!bb) return;
        const ub = new ResizeObserver((bb => {
          Nb(bb[0].contentRect.height)
        }));
        return ub.observe(bb), () => {
          ub.disconnect()
        }
      }), [tb]);
      const sb = (0, Ob.useRef)(null),
        Mb = (0, Ob.useCallback)((function bb() {
          "up" === sb.current ? ub.current.scrollTop -= 10 : "down" === sb.current && (ub.current.scrollTop += 10), sb.current && requestAnimationFrame(bb)
        }), [ub]),
        Ib = (0, Ob.useCallback)((function(bb) {
          sb.current || (sb.current = bb, Mb())
        }), [Mb]);

      function Pb() {
        sb.current = null
      }
      const qb = (0, Ob.useRef)({
        creativeSearchVal: Lb,
        setCreativeSearchVal: Sb
      });
      qb.current = {
        creativeSearchVal: Lb,
        setCreativeSearchVal: Sb
      };
      const [Eb] = (0, Ob.useState)((() => new SB((bb => {
        qb.current.setCreativeSearchVal(bb)
      }), 250, Oh.f))), yb = bb => {
        var hb;
        null === (hb = ub.current) || void 0 === hb || hb.classList.toggle("CreativeItemSlotsStale", bb)
      };
      (0, jb.h)(YB.c, (bb => {
        Eb.setHeld(bb), bb || yb(!1)
      })), (0, Ob.useEffect)((() => Eb.flush), [Eb]);
      const Vb = (0, ab.jsx)(Jh.b, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: Lb,
          maxLength: 1e4,
          onValueChange: (bb, ub) => {
            "" === Eb.getTyped(qb.current.creativeSearchVal) && "" !== bb && wb(null), Eb.type(bb), yb(Eb.isHeld())
          },
          onEnter: Eb.flush,
          blurOnEnter: !0
        }),
        Fb = (0, ab.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [vb && (0, ab.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, ab.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Ib("up")
              },
              onPointerLeave: Pb,
              onPointerUp: Pb,
              children: (0, ab.jsx)(ob.e, {
                name: "arrow-up"
              })
            }), (0, ab.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Ib("down")
              },
              onPointerLeave: Pb,
              onPointerUp: Pb,
              children: (0, ab.jsx)(ob.e, {
                name: "arrow-up"
              })
            })]
          }), (0, ab.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: ub,
            children: [0 === xb.length && "" !== Lb && (0, ab.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: Xb("general:noResults")
            }), (0, ab.jsx)(th.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [Lb, rb],
              observerRoot: "CreativeItemSlots",
              observing: Zb,
              children: xb.map((bb => {
                const ub = hb + bb;
                return (0, ab.jsx)(Dh.c, {
                  idx: ub,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Bb(ub),
                  pointerDown: Gb(ub),
                  pointerUp: Ub(ub)
                }, ub)
              }))
            })]
          })]
        });
      return (0, ab.jsxs)("div", {
        className: Kh()("CreativeItemSlotsWrapper", tb ? "WithRail" : "WithDropdown"),
        children: [tb && (0, ab.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Jb,
          style: {
            "--rail-height": eb > 0 ? `${eb}px` : void 0,
            "--tab-rows": Math.ceil(ib.length / 2)
          },
          children: ib.map((bb => (0, ab.jsx)(wB, {
            labelKey: aB(bb),
            isSelected: rb === bb,
            onSelect: () => {
              gb(bb)
            },
            setHovered: zb,
            children: (0, ab.jsx)(HB, {
              category: bb
            })
          }, null !== bb && void 0 !== bb ? bb : "all")))
        }), (0, ab.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, ab.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [Vb, !tb && (0, ab.jsx)(ZB, {
              categories: ib,
              selectedCategory: rb,
              onSelect: gb
            })]
          }), Fb]
        })]
      })
    }));

    function pB(bb) {
      var ub;
      return null !== (ub = (0, UB.f)(bb)) && void 0 !== ub ? ub : ""
    }

    function oB(bb, ub, hb) {
      let {
        publicLobby: Bb,
        shownInGame: Ob
      } = ub;
      const Gb = bb.toLowerCase(),
        Ub = (0, GB.creativeItemIds)(),
        Lb = bb => {
          var ub;
          const Gb = Ub[bb];
          return !(0, GB.itemIsDisabled)(Gb, Bb, null === (ub = Ob[pB(Gb)]) || void 0 === ub || ub, hb)
        };
      if ("" === Gb) return Ub.map(((bb, ub) => ub)).filter((bb => !(0, GB.showOnlyInCreativeSearch)(Ub[bb]))).filter(Lb);
      const Yb = [];
      for (let Sb = 0; Sb < Ub.length; Sb++) pB(Ub[Sb]).toLowerCase().includes(Gb) && Yb.push(Sb);
      Yb.sort(((bb, ub) => {
        const hb = pB(Ub[bb]).toLowerCase(),
          Bb = pB(Ub[ub]).toLowerCase();
        return hb.indexOf(Gb) - Bb.indexOf(Gb)
      }));
      for (const [Sb, ab] of(0, GB.creativeAltNames)())
        for (const bb of ab)
          if (bb.toLowerCase().includes(Gb)) {
            const bb = Ub.indexOf(Sb);
            Yb.includes(bb) || Yb.push(bb)
          } return Yb.filter(Lb)
    }
    var AB = hb(36476),
      lB = hb(588);

    function KB(bb) {
      return bb > lB.l
    }

    function WB(bb) {
      const ub = bb / 2,
        hb = [];
      for (let Bb = 0; Bb < ub / 6; Bb++)
        for (let bb = 0; bb < 12; bb++) {
          const Ob = bb < 6 ? 0 : ub;
          hb.push(Ob + 6 * Bb + bb % 6)
        }
      return hb
    }

    function CB(bb) {
      let {
        numSlots: ub,
        renderSlot: hb
      } = bb;
      const {
        t: Bb
      } = (0, kb.K)(), Gb = (0, Ob.useRef)(null);
      var Ub;
      return Ub = Gb, (0, Ob.useLayoutEffect)((() => {
        var bb;
        const ub = null === (bb = Ub.current) || void 0 === bb ? void 0 : bb.closest(".InvenBody");
        if (!ub) return;
        const hb = () => {
          ub.style.zoom = "";
          const bb = parseFloat(getComputedStyle(document.documentElement).fontSize),
            hb = window.innerWidth - 2 * bb,
            Bb = ub.getBoundingClientRect().width;
          Bb > hb && (ub.style.zoom = "" + hb / Bb)
        };
        return hb(), window.addEventListener("resize", hb), () => {
          window.removeEventListener("resize", hb), ub.style.zoom = ""
        }
      }), [Ub]), (0, ab.jsxs)("div", {
        ref: Gb,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, ab.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Bb("doubleChest:title")
        }), (0, ab.jsx)("div", {
          className: "GridItemSlots",
          children: WB(ub).map((bb => hb(bb)))
        })]
      })
    }

    function dB(bb) {
      let {
        Fb: ub,
        initialPasskey: hb
      } = bb;
      const {
        t: Bb
      } = (0, kb.K)(), [Gb, Ub] = (0, Ob.useState)(hb), [Lb, Yb] = (0, Ob.useState)(hb);
      (0, Ob.useEffect)((() => {
        Ub(hb), Yb(hb)
      }), [...ub]);
      return (0, ab.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, ab.jsx)("div", {
          className: "SmallTextBold",
          children: Bb("ironChest:currentPasskey", {
            currentPasskey: Gb.join("")
          })
        }), (0, ab.jsx)(dh, {
          className: "IronChestPasskeyEditor",
          Ya: Lb,
          onPasskeyUpdated: Yb,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Sb.gameBridge.send("changeIronChestPasskey", {
              pos: [...ub],
              Ya: [...Lb]
            }), Ub([...Lb])
          }
        })]
      })
    }

    function rB(bb) {
      let {
        variation: ub,
        canCraft: hb,
        show: Bb,
        creativeMounted: Ob,
        specialItemRef: Gb,
        draggedInfo: Ub,
        getSetHovering: Lb,
        getPointerDownForIdx: Yb,
        getPointerUpForIdx: Sb,
        enchantingTablePosition: Hb,
        enchantingTableBlockName: wb,
        selectedCraftable: Zb,
        dispatchSelectedCraftable: Xb,
        creativeScrollDiv: pb,
        creativeSearchVal: ob,
        setCreativeSearchVal: Ab,
        creativeCategory: lb,
        setCreativeCategory: Kb,
        onCraft: Wb
      } = bb;
      const {
        userContext: Cb
      } = (0, db.d)(), {
        t: rb
      } = (0, kb.K)(), jb = (0, Db.g)("inventory", (bb => bb.chest)), nb = (0, Db.g)("inventory", (bb => bb.player.length)), xb = (0, Db.g)("inventory", (bb => bb.creative));
      if (0 === nb) return null;
      let zb, gb;
      const ib = bb => {
          const ub = nb + bb;
          return (0, ab.jsx)(Dh.c, {
            idx: ub,
            draggedInfo: Ub,
            specialItemInfo: Gb.current,
            setHovered: Lb(ub),
            pointerDown: Yb(ub),
            pointerUp: Sb(ub)
          }, ub)
        },
        vb = jb ? (0, AB.e)(jb.type) : null;
      if (vb) zb = Kh()("InvenLeftSideChestCustom", vb.className), gb = (0, ab.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: vb.render({
          Fb: jb.pos,
          renderSlot: ib
        })
      });
      else if (jb) {
        const bb = jb.pos,
          ub = "Iron" === jb.type || "Moonstone" === jb.type ? jb.type : "Standard";
        let hb = !1,
          Bb = null;
        "Iron" === ub && (hb = jb.ironChest.ownerDbId === Cb.whamm, Bb = jb.ironChest.Ya), zb = `InvenLeftSideChest${ub}`;
        const Ob = KB(jb.numSlots);
        gb = (0, ab.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [hb && (0, ab.jsx)(dB, {
            Fb: bb,
            initialPasskey: Bb
          }), Ob && (0, ab.jsx)(CB, {
            numSlots: jb.numSlots,
            renderSlot: ib
          }), !Ob && (0, ab.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, ab.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: rb("Moonstone" === ub ? "item:moonstoneChest" : "Iron" === ub ? "item:ironChest" : "item:chest")
            }), (0, ab.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(jb.numSlots).fill(0).map(((bb, ub) => ib(ub)))
            })]
          })]
        })
      } else if (!xb || ub && hb)
        if (hb && "Enchanting Table" === ub) zb = `InvenLeftSide${(null!==wb&&void 0!==wb?wb:"").replace(/ /gi,"")}`, gb = (0, ab.jsx)(xh, {
          specialItemInfo: Gb.current,
          setHovered: Lb,
          pointerDown: Yb(Hh.g),
          pointerUp: Sb(Hh.g),
          enchantingTablePosition: Hb,
          enchantingTableBlockName: wb
        });
        else if (hb && "Salvaging Table" === ub) zb = "InvenLeftSideSalvagingTable", gb = (0, ab.jsx)(gh, {
        specialItemInfo: Gb.current,
        setSpecialItemInfo: bb => {
          Gb.current = bb
        },
        setHovered: Lb,
        pointerDown: Yb(Hh.g),
        pointerUp: Sb(Hh.g)
      });
      else {
        if (!hb) return null;
        zb = `InvenLeftSide${(null!==ub&&void 0!==ub?ub:"HandCrafting").replace(/ /gi,"")}`, gb = (0, ab.jsx)(OB, {
          show: Bb,
          onCraft: Wb,
          craftingStation: ub,
          selectedCraftable: Zb,
          dispatchSelectedCraftable: Xb,
          setHovered: Lb()
        })
      } else zb = "InvenLeftSideCreative", gb = Ob ? (0, ab.jsx)(XB, {
        creativeScrollDiv: pb,
        playerInvenNumSlots: nb,
        getSetHoveringForIdx: Lb,
        getPointerDownForIdx: Yb,
        getPointerUpForIdx: Sb,
        creativeSearchVal: ob,
        setCreativeSearchVal: Ab,
        creativeCategory: lb,
        setCreativeCategory: Kb,
        show: Bb
      }) : null;
      const tb = !!jb || hb && !!ub;
      return (0, ab.jsx)("div", {
        className: `InvenLeftSide ${zb}`,
        "data-pad-inventory-start": tb ? "" : void 0,
        children: gb
      })
    }
    var jB = hb(571),
      nB = hb(19952),
      DB = hb(19954),
      xB = hb(19959);
    const zB = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: hb(19961)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: DB
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: xB
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: hb(19968)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: nB
      }
    };

    function gB(bb) {
      const {
        sprite: ub,
        image: hb
      } = zB[bb];
      return Vu(ub, qu.f.ITEM, hb)
    }

    function iB(bb) {
      let {
        draggedInfo: ub,
        specialItemInfo: hb,
        craftFlyAnims: Bb,
        getSetHovering: Ob,
        getPointerDownForIdx: Gb,
        getPointerUpForIdx: Ub,
        variation: Lb,
        canCraft: Yb,
        isNewSlot: Sb
      } = bb;
      const Hb = (0, Db.g)("inventory", (bb => bb.player.length));
      return 0 === Hb ? null : (0, ab.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, ab.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(jB.e.length).fill(0).map(((bb, wb) => {
            const Zb = Hb - jB.e.length + wb;
            return (0, ab.jsx)(Dh.c, {
              idx: Zb,
              draggedInfo: ub,
              specialItemInfo: hb,
              craftFlyHoldbackInfo: (0, ah.f)(Bb, Zb),
              setHovered: Ob(Zb),
              pointerDown: Gb(Zb),
              pointerUp: Ub(Zb),
              defaultIconB64: gB(jB.e[wb]),
              variation: Yb ? Lb : void 0,
              showNewDot: Sb(Zb)
            }, Zb)
          }))
        }), (0, ab.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Hb - 10 - jB.e.length).fill(0).map(((bb, wb) => {
            const Zb = Hb - jB.e.length - wb - 1;
            return (0, ab.jsx)(Dh.c, {
              idx: Zb,
              draggedInfo: ub,
              specialItemInfo: hb,
              craftFlyHoldbackInfo: (0, ah.f)(Bb, Zb),
              setHovered: Ob(Zb),
              pointerDown: Gb(Zb),
              pointerUp: Ub(Zb),
              variation: Yb ? Lb : void 0,
              showNewDot: Sb(Zb)
            }, Zb)
          }))
        })]
      })
    }
    var vB = hb(36478),
      tB = hb(36485);

    function JB(bb) {
      const {
        e: ub,
        idx: hb
      } = bb, Bb = (0, Sh.j)(bb.readInventory(), hb), Ob = (0, Sh.n)(ub);
      hb === Hh.d ? function(bb, ub) {
        const {
          draggedInfoRef: hb,
          removeItem: Bb,
          removeDraggedInfoRef: Ob,
          close: Gb
        } = bb;
        if (hb.current) {
          const bb = ub && hb.current.amount || 1;
          Bb(hb.current.idx, bb, !0) && (hb.current.amount -= bb, hb.current.amount <= 0 && Ob())
        } else ub && Gb()
      }(bb, Ob) : hb === Hh.g ? function(bb, ub) {
        const {
          e: hb,
          draggedInfoRef: Bb,
          specialItemRef: Ob,
          moveAmtIntoSlot: Gb,
          removeDraggedInfoRef: Ub
        } = bb;
        if ((0, Sh.t)(hb) && Ob.current) Ob.current = null;
        else if (Bb.current && Ob.current && (Bb.current.idx === Ob.current.idx || (0, tB.c)(Bb.current, Ob.current)) && Bb.current.amount > 0 && Ob.current.amount > 0 && Ob.current.amount < Wh.e.maxItemStackSize)
          if (Bb.current.idx === Ob.current.idx) {
            if (ub) {
              const bb = Math.min(Bb.current.amount, Wh.e.maxItemStackSize - Ob.current.amount);
              Ob.current.amount += bb, Bb.current.amount -= bb
            } else Bb.current.amount--, Ob.current.amount++;
            Bb.current.amount <= 0 && Ub()
          } else if (ub) {
          const bb = Math.min(Bb.current.amount, Wh.e.maxItemStackSize - Ob.current.amount);
          Gb(Ob.current.idx, bb) && (Ob.current.amount += bb)
        } else {
          Gb(Ob.current.idx, 1) && Ob.current.amount++
        } else if (!Bb.current || Ob.current || ub) {
          const bb = Bb.current;
          Bb.current = Ob.current, Ob.current = bb
        } else Bb.current.amount--, Ob.current = {
          idx: Bb.current.idx,
          name: Bb.current.name,
          attributes: Bb.current.attributes,
          amount: 1
        }
      }(bb, Ob) : (0, Sh.t)(ub) ? function(bb, ub) {
        var hb, Bb;
        const {
          idx: Ob,
          draggedInfoRef: Gb,
          specialItemRef: Ub,
          canCraft: Lb,
          variation: Yb,
          swapSlots: Sb,
          moveIntoSlots: ab
        } = bb;
        if (!ub) return;
        let Hb = ub.amount;
        Ob === (null === (hb = Gb.current) || void 0 === hb ? void 0 : hb.idx) && (Hb = Gb.current.amount <= 0 ? 0 : ub.amount - Gb.current.amount);
        Ob === (null === (Bb = Ub.current) || void 0 === Bb ? void 0 : Bb.idx) && (Hb = Ub.current.amount <= 0 ? 0 : ub.amount - Ub.current.amount);
        if (0 === Hb) return;
        const wb = bb.readInventory(),
          Zb = wb.player.length,
          Xb = wb.chest,
          pb = Zb - jB.e.length,
          ob = () => {
            if (!(0, Oh.f)()) return void ab(10, pb, Ob, Hb);
            const bb = bb => {
              const hb = (0, Sh.j)(wb, bb);
              return hb ? {
                amount: hb.amount,
                stacksWithMoved: (0, tB.c)(hb, ub)
              } : null
            };
            for (const ub of ((bb, ub, hb, Bb, Ob) => {
                const Gb = [];
                let Ub = Bb;
                if (null !== Bb) {
                  let Lb = 0;
                  for (let Bb = ub; Bb < hb; Bb++) {
                    const ub = bb(Bb);
                    null !== ub && void 0 !== ub && ub.stacksWithMoved && null !== ub.amount && ub.amount > 0 && (Lb += Math.max(0, Ob - ub.amount))
                  }
                  const Yb = Math.min(Bb, Lb);
                  if (Yb > 0 && (Gb.push({
                      start: ub,
                      end: hb,
                      amount: Yb
                    }), Ub = Bb - Yb), Ub <= 0) return Gb
                }
                for (let Lb = hb - 1; Lb >= ub; Lb--)
                  if (null === bb(Lb)) {
                    Gb.push({
                      start: Lb,
                      end: Lb + 1,
                      amount: Ub
                    });
                    break
                  } return Gb
              })(bb, 10, pb, Hb, Wh.e.maxItemStackSize)) ab(ub.start, ub.end, Ob, ub.amount)
          };
        if (!Lb || "Enchanting Table" !== Yb && "Salvaging Table" !== Yb) {
          const hb = (0, nb.Eb)(ub.name),
            Bb = hb ? (0, nb.Ab)(hb) : null;
          if (!jB.e.includes(hb) || Ob !== Bb && (0, Sh.k)(wb, bb.itemInfo, Bb, Ob))
            if (Xb)
              if (Ob < Zb) {
                var Ab, lb;
                const [bb, ub] = null !== (Ab = null === (lb = (0, AB.e)(Xb.type)) || void 0 === lb ? void 0 : lb.quickMoveRange) && void 0 !== Ab ? Ab : [0, Xb.numSlots];
                ab(Zb + bb, Zb + ub, Ob, Hb)
              } else ab(0, Zb - jB.e.length, Ob, Hb);
          else wb.creative ? Ob < 10 ? ob() : Ob < Zb ? ab(0, 10, Ob, Hb) : ab(0, Zb - jB.e.length, Ob, null !== ub.amount ? Wh.e.maxItemStackSize : null) : Ob < 10 ? ob() : ab(0, 10, Ob, Hb);
          else Ob < Zb - jB.e.length || Ob >= Zb ? Sb(Bb, Ob) : (ab(0, Zb - jB.e.length, Bb, Hb), Lh.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Ub.current = {
          idx: Ob,
          name: ub.name,
          attributes: ub.attributes,
          amount: null !== ub.amount ? Hb : 0
        }
      }(bb, Bb) : bb.draggedInfoRef.current ? function(bb, ub, hb, Bb) {
        const {
          draggedInfoRef: Ob,
          specialItemRef: Gb,
          moveAmtIntoSlot: Ub,
          swapSlots: Lb,
          removeItem: Yb,
          removeDraggedInfoRef: Sb
        } = bb, ab = bb.readInventory(), Hb = Ob.current.idx;
        if (hb && (ub === Hb || (0, tB.c)(Ob.current, hb)) && Ob.current.amount > 0 && (0, Sh.d)(hb) > 0 && (hb.amount < Wh.e.maxItemStackSize || ub === Hb)) Bb ? hb.amount + Ob.current.amount <= Wh.e.maxItemStackSize || ub === Hb ? Ub(ub, Ob.current.amount) : Ub(ub, Wh.e.maxItemStackSize - hb.amount) : Ub(ub, 1);
        else if (Ob.current.amount > 0 && !hb) Ub(ub, Bb ? Ob.current.amount : 1);
        else if (Bb || hb || 0 === Ob.current.amount)
          if (ab.creative && !ab.chest && ub >= ab.player.length) {
            const bb = 0 === Ob.current.amount ? 1 : Ob.current.amount;
            Yb(Ob.current.idx, bb, !1) && Sb()
          } else {
            var wb;
            const hb = (null === (wb = Gb.current) || void 0 === wb ? void 0 : wb.idx) === ub;
            if (Lb(ub, Ob.current.idx)) {
              const Bb = bb.readInventory(),
                Ub = (0, Sh.j)(Bb, Hb),
                Lb = !Bb.chest && Bb.creative && Ob.current.idx >= Bb.player.length;
              if (Ub && Ob.current.idx !== ub && !Lb) {
                let bb = (0, Sh.d)(Ub);
                hb && (bb -= Gb.current.amount), Ob.current = hb && 0 === bb ? null : {
                  idx: Ob.current.idx,
                  name: Ub.name,
                  attributes: Ub.attributes,
                  amount: bb
                }
              } else Sb()
            }
          }
        else Ub(ub, 1)
      }(bb, hb, Bb, Ob) : function(bb, ub, hb, Bb) {
        var Ob;
        const {
          draggedInfoRef: Gb,
          specialItemRef: Ub
        } = bb;
        if (!hb) return;
        let Lb = (0, Sh.d)(hb);
        const Yb = (null === (Ob = Ub.current) || void 0 === Ob ? void 0 : Ob.idx) === ub;
        Yb && (Lb -= Ub.current.amount);
        Bb || (Lb = Math.ceil(Lb / 2));
        Gb.current = Yb && 0 === Lb ? null : {
          idx: ub,
          name: hb.name,
          attributes: hb.attributes,
          amount: Lb
        }
      }(bb, hb, Bb, Ob)
    }

    function eB(bb, ub) {
      return !!ub && ub.name === bb.name
    }

    function NB() {
      return Sb.gameBridge.latest("inventory")
    }

    function sB(bb, ub, hb) {
      return Sb.gameBridge.send("removeInventoryItem", {
        slot: bb,
        amount: ub,
        drop: hb
      })
    }

    function MB(bb) {
      return (0, Sh.i)(bb, Sb.gameBridge.latest("itemInfo"), Sb.gameBridge.latest("stationItems").enchantable)
    }

    function mB(bb) {
      let {
        show: ub,
        close: hb,
        canCraft: Bb,
        variation: Gb,
        inventoryItemsMoveable: Ub,
        setCraftFlyAnims: Lb
      } = bb;
      (0, Db.i)("itemInfo");
      const [Yb, ab] = (0, Ob.useState)(null), [Hb, wb] = (0, Ob.useState)(null), [Zb, Xb] = (0, Ob.useState)(!1), pb = (0, Ob.useRef)(null), ob = (0, Ob.useRef)(null), Ab = (0, Ob.useRef)(null), lb = (0, Ob.useRef)(null), [Kb, Wb] = (0, Ob.useReducer)((bb => bb + 1), 0), Cb = (0, Ob.useCallback)((() => {
        ub && Wb()
      }), [ub, Wb]), db = (0, Ob.useCallback)((() => {
        ob.current = null, eb.current = null, Cb()
      }), [Cb]), rb = (0, Ob.useCallback)(((bb, ub) => {
        Lb((hb => hb.map((hb => "ingredient" === hb.kind ? hb : hb.fY === bb ? {
          ...hb,
          fY: ub,
          to: (0, Sh.g)(ub)
        } : hb.fY === ub ? {
          ...hb,
          fY: bb,
          to: (0, Sh.g)(bb)
        } : hb))))
      }), [Lb]), jb = (0, Ob.useCallback)(((bb, ub) => {
        const hb = Mb.current;
        if (hb.x = bb, hb.y = ub, pb.current) !mb.current.isTouch || mb.current.itemBeingDragged && !eb.current ? (pb.current.style.transform = `translate(${hb.x}px, ${hb.y}px)`, Xb(mb.current.isTouch && !eb.current)) : (pb.current.style.transform = "translate(0.5rem, 0.5rem)", Xb(!0));
        else if (lb.current) {
          const hb = lb.current;
          let Bb = bb + 10,
            Ob = ub + 10;
          const Gb = hb.offsetWidth,
            Ub = hb.offsetHeight;
          Bb + Gb > window.innerWidth && (Bb = bb - Gb - 10), Ob + Ub > window.innerHeight && (Ob = ub - Ub - 10), Bb < 0 && (Bb = 0), Ob < 0 && (Ob = 0), lb.current.style.transform = `translate(${Bb}px, ${Ob}px)`
        }
      }), []), xb = (0, Ob.useCallback)((bb => (ub, hb, Bb) => {
        if (ab(ub && void 0 !== bb ? bb : null), ub) {
          if (void 0 === bb && !hb) return void(0, vB.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== bb) {
            var Ob;
            const ub = NB();
            let hb;
            if (hb = bb === Hh.g ? Ab.current ? (0, Sh.j)(ub, Ab.current.idx) : null : (0, Sh.j)(ub, bb), !hb) return void wb(null);
            if ((null === (Ob = Ab.current) || void 0 === Ob ? void 0 : Ob.idx) === bb) {
              if (0 === (0, Sh.d)(hb) - Ab.current.amount) return void wb(null)
            }
            wb(MB(hb))
          } else wb({
            name: hb.name,
            desc: hb.desc,
            fontStyle: "normal"
          })
        } else wb(null);
        Bb && setTimeout((() => {
          jb(Bb.pageX, Bb.pageY)
        }), 0)
      }), [jb]), zb = (0, Ob.useCallback)(((bb, ub) => {
        const hb = Sb.gameBridge.send("moveInventoryItem", {
          from: ob.current.idx,
          to: bb,
          amount: ub
        });
        return hb ? (ob.current.amount -= ub, ob.current.amount <= 0 && db()) : console.error("moveInventoryItem failed"), hb
      }), [db]), gb = (0, Ob.useCallback)(((bb, ub) => {
        const hb = Ab.current,
          Bb = null === hb || void 0 === hb ? void 0 : hb.idx;
        hb && (hb.idx = function(bb, ub, hb) {
          return bb === ub ? hb : bb === hb ? ub : bb
        }(Bb, bb, ub));
        const Ob = Sb.gameBridge.send("swapInventorySlots", {
          a: bb,
          b: ub
        });
        return Ob ? rb(bb, ub) : hb && (hb.idx = Bb), Ob
      }), [rb]), ib = (0, Ob.useCallback)(((bb, ub, hb, Bb) => {
        const Ob = Sb.gameBridge.send("quickMoveInventoryItem", {
          slot: hb,
          start: bb,
          end: ub,
          amount: Bb
        });
        null !== Ob && rb(hb, Ob)
      }), [rb]), vb = (0, Ob.useCallback)(((bb, ub) => {
        var Ob;
        ((bb, ub, hb) => {
          const Bb = bb - (hb - jB.e.length);
          return !(!ub || Bb < 0 || Bb >= jB.e.length) && (0, nb.Eb)(ub) !== jB.e[Bb]
        })(ub, null === (Ob = ob.current) || void 0 === Ob ? void 0 : Ob.name, NB().player.length) || (JB({
          e: bb,
          idx: ub,
          readInventory: NB,
          itemInfo: Sb.gameBridge.latest("itemInfo"),
          draggedInfoRef: ob,
          specialItemRef: Ab,
          moveAmtIntoSlot: zb,
          swapSlots: gb,
          moveIntoSlots: ib,
          removeItem: sB,
          removeDraggedInfoRef: db,
          close: hb,
          canCraft: Bb,
          variation: Gb
        }), Cb())
      }), [Bb, hb, zb, ib, db, gb, Gb, Cb]), tb = (0, Ob.useRef)(0), Jb = (0, Ob.useRef)(null), eb = (0, Ob.useRef)(null), Nb = (0, Ob.useRef)(null), sb = (0, Ob.useRef)(new Set), Mb = (0, Ob.useRef)({
        x: 0,
        y: 0
      }), mb = (0, Ob.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Ib = (0, Ob.useCallback)((() => (Nb.current = null, mb.current.itemBeingDragged = !1, clearTimeout(Jb.current), !!eb.current && (eb.current = null, Cb(), !0))), [Cb]);
      (0, Ob.useEffect)((() => {
        Ib(), sb.current.clear()
      }), [ub]);
      const Pb = bb => void 0 !== bb && (sb.current.has(bb) || null !== Nb.current && bb !== Nb.current),
        qb = bb => {
          mb.current.isTouch = (0, Sh.p)(bb)
        },
        Eb = (0, Ob.useCallback)((bb => ub => {
          const Bb = (0, Sh.p)(ub);
          if (Bb || jb(ub.pageX, ub.pageY), Ub)
            if (Pb(ub.pointerId)) void 0 !== ub.pointerId && sb.current.add(ub.pointerId);
            else {
              if (qb(ub), Bb) {
                tb.current = ub.timeStamp, mb.current.itemBeingDragged = !0, Nb.current = ub.pointerId;
                const hb = (0, Sh.j)(NB(), bb);
                if (hb && hb.amount && hb.amount > 0) {
                  const hb = ub.pageX,
                    Bb = ub.pageY,
                    Ob = Mb.current.x,
                    Gb = Mb.current.y;
                  clearTimeout(Jb.current), Jb.current = setTimeout((() => {
                    if (ob.current && ob.current.idx === bb && (Math.abs(hb - Mb.current.x) < 20 && Math.abs(Bb - Mb.current.y) < 20 || Ob === Mb.current.x && Gb === Mb.current.y) && mb.current.itemBeingDragged) {
                      const bb = NB(),
                        hb = bb.creative && !bb.chest && ob.current.idx >= Wh.e.numInvenSlots && null !== (0, Sh.j)(bb, ob.current.idx).amount ? Wh.e.maxItemStackSize : ob.current.amount;
                      eb.current = {
                        initTouchX: ub.pageX,
                        initTouchY: ub.pageY,
                        maxAmount: hb
                      }, ob.current.amount = Math.ceil(ob.current.amount / 2), pb.current.style.transform = "translate(0.5rem, 0.5rem)", Xb(!0), Cb()
                    }
                  }), 500)
                }
              }
              vb(ub, bb)
            }
          else bb === Hh.d && (0, Sh.n)(ub) && hb()
        }), [jb, vb, Ub, hb, Cb]),
        yb = (0, Ob.useCallback)((bb => bb => {
          if (Pb(bb.pointerId)) return;
          const ub = (0, Sh.p)(bb);
          if (qb(bb), !Ib()) {
            if (ub && ob.current && bb.timeStamp - tb.current > 150) {
              const ub = document.elementFromPoint(bb.clientX, bb.clientY);
              if (null !== ub) {
                const hb = ub.getAttribute("data-inven-idx");
                null !== hb ? vb(bb, parseInt(hb)) : ub.classList.contains("InventoryBackgroundScreen") && vb(bb, -1)
              }
            }
            jb(bb.pageX, bb.pageY)
          }
        }), [jb, vb, Ib]);
      (0, Ob.useEffect)((() => {
        let bb;
        const hb = ["pointerup", "pointercancel"],
          Bb = bb => {
            sb.current.has(bb.pointerId) ? setTimeout((() => {
              sb.current.delete(bb.pointerId)
            }), 0) : bb.pointerId === Nb.current && setTimeout((() => {
              Nb.current === bb.pointerId && Ib()
            }), 0)
          };
        if (ub) {
          for (const bb of hb) document.addEventListener(bb, Bb, !0);
          if (!mb.current.isTouch) {
            const bb = Mb.current;
            jb(bb.x, bb.y)
          }
          bb = bb => {
            bb.preventDefault(), Pb(bb.pointerId) || (qb(bb), jb(bb.pageX, bb.pageY), eb.current && bb.pointerId === Nb.current && (bb => {
              if (!ob.current) return eb.current = null, void Cb();
              const {
                initTouchX: ub,
                maxAmount: hb
              } = eb.current, Bb = (bb.pageX - ub) * eb.current.maxAmount / 160, Ob = Math.ceil(hb / 2) + Math.ceil(Bb);
              ob.current.amount = Math.min(hb, Math.max(1, Ob)), Cb()
            })(bb))
          }, document.addEventListener("pointermove", bb, !0)
        }
        return () => {
          document.removeEventListener("pointermove", bb, !0);
          for (const bb of hb) document.removeEventListener(bb, Bb, !0)
        }
      }));
      const Vb = (0, Ob.useCallback)((() => {
          if (ob.current) {
            const bb = (0, Sh.j)(NB(), ob.current.idx);
            (!eB(ob.current, bb) || bb.amount < ob.current.amount) && db()
          }
        }), [db]),
        Fb = (0, Ob.useCallback)((() => {
          const bb = ob.current;
          if (bb) {
            const ub = (0, Sh.j)(NB(), bb.idx);
            eB(bb, ub) && (bb.attributes = ub.attributes)
          }
        }), []);
      return {
        draggedDomRef: pb,
        draggedInfoRef: ob,
        specialItemRef: Ab,
        hoverInfoDomRef: lb,
        longHoldSplitInfoRef: eb,
        currHoveredIdx: Yb,
        currHoveredDisplayInfo: Hb,
        displayDraggedItemName: Zb,
        forceRerenderIfVisible: Cb,
        removeDraggedInfoRef: db,
        checkDraggedItemConsistencyWithInven: Vb,
        refreshDraggedAttributes: Fb,
        swapSlots: gb,
        getPointerDownForIdx: Eb,
        getPointerUpForIdx: yb,
        getSetHovering: xb,
        setCurrHoveredDisplayInfo: wb,
        moveFollowerTo: jb
      }
    }
    class IB {
      constructor(bb) {
        this.snapshot = [], this.newSlots = new Set, this.update(bb, !1)
      }
      update(bb, ub) {
        const hb = bb.map((bb => {
          var ub;
          return bb ? {
            name: bb.name,
            amount: null !== (ub = bb.amount) && void 0 !== ub ? ub : 1
          } : null
        }));
        hb.forEach(((bb, hb) => {
          const Bb = this.snapshot[hb],
            Ob = (null === bb || void 0 === bb ? void 0 : bb.name) !== (null === Bb || void 0 === Bb ? void 0 : Bb.name);
          (!bb || Ob || bb.amount < Bb.amount) && this.newSlots.delete(hb), ub && bb && (Ob || bb.amount > Bb.amount) && this.newSlots.add(hb)
        })), this.snapshot = hb
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(bb) {
        return this.newSlots.has(bb)
      }
    }
    const PB = (bb, ub, hb) => ({
      button: ub,
      shiftKey: hb,
      pageX: bb.clientX,
      pageY: bb.clientY,
      clientX: bb.clientX,
      clientY: bb.clientY,
      pointerType: "mouse"
    });

    function qB(bb) {
      const [ub, hb] = (0, Ob.useState)(bb);
      return bb && !ub && hb(!0), (0, Ob.useEffect)((() => {
        if (ub) return;
        let bb = !0;
        const Bb = () => {
            bb && (bb = !1, hb(!0))
          },
          Ob = "function" === typeof window.requestIdleCallback,
          Gb = Ob ? window.requestIdleCallback(Bb, {
            timeout: 2e3
          }) : void 0,
          Ub = setTimeout(Bb, Ob ? 2e3 : 1e3);
        return () => {
          bb = !1, clearTimeout(Ub), void 0 !== Gb && window.cancelIdleCallback(Gb)
        }
      }), [ub]), ub
    }
    const EB = (0, Ob.memo)((function(bb) {
      var ub;
      let {
        show: hb,
        onOpen: Bb,
        onClose: Gb,
        variation: Lb
      } = bb;
      const Hb = (0, Ob.useRef)(null),
        wb = (0, Ob.useRef)(null),
        Zb = function(bb) {
          const [ub, hb] = (0, Ob.useState)(!0), [Bb, Gb] = (0, Ob.useState)(!1), Ub = (0, Ob.useRef)(null), Lb = (0, Ob.useRef)(null), Sb = (0, Yb.f)("_shield"), ab = (0, Ob.useRef)(null), Hb = (0, Yb.f)("_health"), wb = (0, Ob.useRef)(null);

          function Zb(bb) {
            const ub = Date.now() + bb;
            ub < Lb.current || (hb(!1), clearTimeout(Ub.current), Lb.current = ub, Ub.current = setTimeout((() => {
              hb(!0)
            }), bb))
          }
          return (0, Ob.useEffect)((() => {
            Zb(Zh);
            const bb = Xb.i.subscribe("requestingPlayVideoAd", (() => {
              Zb(Zh)
            }));
            return () => {
              clearTimeout(Ub.current), Xb.i.unsubscribe(bb)
            }
          }), []), (0, Ob.useEffect)((() => {
            (ab.current > Sb || wb.current > Hb) && Zb(6e4), ab.current = Sb, wb.current = Hb
          }), [Sb, Hb]), (0, Ob.useEffect)((() => {
            let ub = null;
            return bb ? ub = setTimeout((() => {
              Gb(!0)
            }), 250) : Gb(!1), () => {
              clearTimeout(ub)
            }
          }), [bb]), ub && Bb
        }(hb);
      (0, jb.k)(hh.b, null);
      const pb = (0, hh.k)(),
        ob = pb.some((bb => bb.panel)),
        Ab = (0, Db.g)("inventory", (bb => null !== bb.chest && (null !== bb.chest.ironChest || KB(bb.chest.numSlots)))),
        lb = qB(hb),
        Kb = qB(hb),
        [Wb, Cb] = (0, Ob.useState)([]),
        db = (0, Ob.useCallback)((bb => {
          Cb((ub => ub.filter((ub => ub.id !== bb))))
        }), []),
        rb = (0, Ob.useRef)(null),
        xb = (0, Ob.useRef)(0),
        zb = (0, Ob.useCallback)((() => {
          rb.current && (xb.current = rb.current.scrollTop), Gb()
        }), [Gb]),
        gb = (0, Yb.f)("inventoryItemsMoveable"),
        ib = (0, Yb.f)("canCraft"),
        {
          clientEscMenuOptions: vb
        } = (0, mb.j)(["clientEscMenuOptions"]),
        tb = (0, Ob.useRef)(null);
      tb.current || (tb.current = new IB(Sb.gameBridge.latest("inventory").player));
      const eb = tb.current,
        {
          draggedDomRef: Nb,
          draggedInfoRef: sb,
          specialItemRef: Mb,
          hoverInfoDomRef: Ib,
          longHoldSplitInfoRef: Pb,
          currHoveredIdx: qb,
          currHoveredDisplayInfo: Eb,
          displayDraggedItemName: yb,
          forceRerenderIfVisible: Vb,
          removeDraggedInfoRef: Fb,
          checkDraggedItemConsistencyWithInven: fb,
          refreshDraggedAttributes: kb,
          swapSlots: Tb,
          getPointerDownForIdx: cb,
          getPointerUpForIdx: Qb,
          getSetHovering: Rb,
          setCurrHoveredDisplayInfo: bu,
          moveFollowerTo: uu
        } = mB({
          show: hb,
          close: zb,
          canCraft: ib,
          variation: Lb,
          inventoryItemsMoveable: gb,
          setCraftFlyAnims: Cb
        });
      (0, Ob.useEffect)((() => {
        const bb = !hb && null !== Sb.gameBridge.latest("inventory").chest;
        if (bb && Sb.gameBridge.send("closeChest", null), hb || (eb.clearMarks(), Rb(null)(!1)), bb) {
          Lh.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [hb]), (0, Db.d)("chestToggled", (bb => {
        if (bb ? Bb() : hb && zb(), bb) {
          Lh.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const hu = (0, gu.l)();
      (0, Db.d)("inventory", (bb => {
        let {
          player: ub
        } = bb;
        var Bb, Ob, Gb;
        (eb.update(ub, !hb && hu.shown), Mb.current) && (Mb.current = (Ob = Mb.current, Gb = null !== (Bb = ub[Mb.current.idx]) && void 0 !== Bb ? Bb : null, eB(Ob, Gb) ? (Ob.attributes = Gb.attributes, null !== Gb.amount && Ob.amount > Gb.amount && (Ob.amount = Gb.amount), Ob) : null));
        kb(), null !== qb && Rb(qb)(!0), Vb()
      })), (0, Ob.useEffect)((() => (Sb.gameBridge.send("setInventoryOpen", hb), () => {
        Sb.gameBridge.send("setInventoryOpen", !1)
      })), [hb]);
      const Bu = (bb, ub) => {
        if (bb === Hh.g) return void(bb => {
          const ub = Mb.current;
          if (!ub || null === (0, Sh.j)(Sb.gameBridge.latest("inventory"), ub.idx)) return;
          const hb = bb ? Math.max(ub.amount, 1) : 1,
            Bb = ub.amount - hb;
          if (!Sb.gameBridge.send("removeInventoryItem", {
              slot: ub.idx,
              amount: hb,
              drop: !0
            })) return;
          const Ob = Mb.current;
          Ob && (Ob.amount = Math.min(Ob.amount, Bb), Ob.amount <= 0 && (Mb.current = null)), Vb()
        })(ub);
        const hb = null === bb ? null : (0, Sh.j)(Sb.gameBridge.latest("inventory"), bb);
        if (null !== hb) {
          var Bb, Ob, Gb;
          const Ub = ub && null !== (Bb = hb.amount) && void 0 !== Bb ? Bb : 1;
          Sb.gameBridge.send("removeInventoryItem", {
            slot: bb,
            amount: Ub,
            drop: !0
          }), bb === (null === (Ob = sb.current) || void 0 === Ob ? void 0 : Ob.idx) && (sb.current.amount -= Ub, sb.current.amount <= 0 && Fb(), Vb()), bb === (null === (Gb = Mb.current) || void 0 === Gb ? void 0 : Gb.idx) && (Mb.current = null, Vb())
        }
      };
      (0, Db.d)("inventoryDropRequested", (bb => {
        hb && qb !== Hh.g && Bu(qb, bb)
      }));
      const Ou = (bb, ub) => {
        let hb = ub;
        if (ub === Hh.g) {
          if (!Mb.current) return;
          hb = Mb.current.idx
        }
        const Bb = Tb(bb, hb);
        if (Bb && sb.current && (sb.current.idx === hb ? sb.current.idx = bb : sb.current.idx === bb && (sb.current.idx = hb)), Bb && ub === Hh.g) {
          const bb = (0, Sh.j)(Sb.gameBridge.latest("inventory"), hb);
          Mb.current = bb ? {
            idx: hb,
            name: bb.name,
            attributes: bb.attributes,
            amount: bb.amount
          } : null
        }
        Vb()
      };
      (0, Db.d)("numberKeyPressed", (bb => {
        null !== qb && hb && Ou(bb - 1, qb)
      })), (0, Ob.useEffect)((() => {
        hb || (Mb.current = null, Fb(), bu(null))
      }), [hb, Fb, bu, Mb]);
      const Gu = Mb.current;
      (0, Ob.useEffect)((() => {
        qb === Hh.g && Rb(Hh.g)(!0)
      }), [Gu, qb, Rb]);
      const Uu = () => {
        fb(), kb(), Vb()
      };
      (0, Db.d)("chestRefreshed", Uu), (0, Db.d)("inventorySynced", Uu);
      const [Lu, Yu] = (0, Ob.useState)(new Map), Su = null !== (ub = Lu.get(Lb)) && void 0 !== ub ? ub : null, au = (bb, ub) => {
        Yu((hb => {
          const Bb = hb.get(bb);
          return Bb && Bb.name === ub.name && Bb.SS === ub.SS ? hb : new Map(hb).set(bb, ub)
        }))
      };
      (0, jb.h)("craftingRecipesEdited", (() => {
        Vb()
      })), (0, jb.h)(yh.c, (bb => {
        let {
          variation: ub,
          itemName: hb
        } = bb;
        au(ub, {
          name: hb,
          SS: 0
        })
      }));
      const [Hu, wu] = (0, Ob.useState)(null), [Zu, Xu] = (0, Ob.useState)(null);
      (0, Db.d)("enchantingTableOpened", (bb => {
        let {
          position: ub,
          blockName: hb
        } = bb;
        wu(ub), Xu(hb)
      }));
      const [pu, ou] = (0, Ob.useState)(""), [Au, lu] = (0, Ob.useState)(null);
      (0, Ob.useEffect)((() => {
        hb && rb.current && (rb.current.scrollTop = xb.current)
      }), [hb]);
      return (bb => {
        const ub = (0, Ob.useRef)(bb);
        ub.current = bb, (0, Ob.useEffect)((() => {
          if (!bb.show) return;
          const hb = (bb, hb, Bb, Ob) => {
              const {
                getPointerDownForIdx: Gb,
                getPointerUpForIdx: Ub
              } = ub.current;
              Gb(bb)(PB(hb, Bb, Ob)), Ub(bb)(PB(hb, Bb, Ob))
            },
            Bb = {
              primary: (bb, ub) => {
                hb(bb, ub, 0, !1)
              },
              secondary: (bb, ub) => {
                hb(bb, ub, 2, !1)
              },
              quickMove: (bb, ub) => {
                hb(bb, ub, 0, !0)
              },
              dropHeld: (bb, hb) => {
                ub.current.getPointerDownForIdx(Hh.d)(PB(hb, bb ? 0 : 2, !1))
              },
              dropSlot: (bb, hb) => {
                ub.current.dropFromIdx(bb, hb)
              },
              swapWithHotbar: (bb, hb) => {
                ub.current.swapWithHotbar(bb, hb)
              },
              cancel: () => {
                ub.current.removeDraggedInfoRef()
              },
              isHolding: () => !!ub.current.draggedInfoRef.current,
              hasItemAt: bb => {
                const {
                  draggedInfoRef: hb,
                  specialItemRef: Bb
                } = ub.current;
                if (bb === Hh.g) return !!Bb.current;
                const Ob = (0, Sh.j)(Sb.gameBridge.latest("inventory"), bb);
                return !!Ob && (0, Dh.d)(bb, (0, Sh.d)(Ob), [hb.current, Bb.current]).shown
              },
              hover: (bb, hb) => {
                const {
                  moveFollowerTo: Bb,
                  getSetHovering: Ob
                } = ub.current;
                Bb(hb.clientX, hb.clientY), Ob(null !== bb && void 0 !== bb ? bb : void 0)(null !== bb, void 0, {
                  pageX: hb.clientX,
                  pageY: hb.clientY
                })
              },
              moveTo: bb => {
                ub.current.moveFollowerTo(bb.clientX, bb.clientY)
              },
              close: () => {
                ub.current.close()
              }
            };
          return (0, Bh.n)(Bb)
        }), [bb.show])
      })({
        show: hb,
        close: zb,
        draggedInfoRef: sb,
        specialItemRef: Mb,
        getPointerDownForIdx: cb,
        getPointerUpForIdx: Qb,
        getSetHovering: Rb,
        moveFollowerTo: uu,
        removeDraggedInfoRef: Fb,
        dropFromIdx: Bu,
        swapWithHotbar: Ou
      }), (0, Ob.useEffect)((() => {
        Xb.i.vp("inventoryDraggedItemUpdated", {
          draggedInfo: sb.current,
          specialItemInfo: Mb.current,
          setHovered: Rb,
          pointerDown: cb,
          pointerUp: Qb,
          variation: ib ? Lb : void 0,
          craftFlyAnims: Wb
        })
      })), (0, ab.jsxs)(Jb.d, {
        show: hb,
        style: {
          touchAction: hb ? "none" : void 0
        },
        children: [sb.current && (0, ab.jsx)(ph, {
          draggedInfo: sb.current,
          toAddRef: Nb
        }), sb.current && yb && (0, ab.jsx)(oh, {
          className: "DraggedInvenItemName",
          displayInfo: MB(sb.current),
          domRef: null
        }), !sb.current && Eb && (0, ab.jsx)(oh, {
          displayInfo: Eb,
          domRef: Ib
        }), Pb.current && sb.current && (0, ab.jsx)(Ah, {
          info: Pb.current,
          draggedInfo: sb.current
        }), Wb.map((bb => (0, ab.jsx)(ah.b, {
          anim: bb,
          onComplete: db
        }, bb.id))), (0, ab.jsx)(Ub.b, {
          show: hb,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: zb,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: cb(Hh.d),
          pointerUp: Qb(Hh.d),
          doGameplayStartStopOnShow: !0
        }), lb && (0, ab.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, ab.jsx)("div", {
            ref: Hb,
            className: "InventoryAdOuter",
            children: (0, ab.jsx)(Yh.d, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Hb
              },
              verticalAlign: "start",
              showing: hb && Zb,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, ab.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, ab.jsxs)("div", {
              className: Kh()("Inventory", {
                WithPanelButtons: ob,
                WideChestOpen: Ab
              }),
              children: [(0, ab.jsx)("div", {
                className: "InventoryFiller"
              }), (0, ab.jsx)(Uh, {
                show: hb,
                buttons: pb
              }), (0, ab.jsxs)("div", {
                className: "InvenBody",
                children: [(0, ab.jsx)(rB, {
                  variation: Lb,
                  canCraft: ib,
                  show: hb,
                  creativeMounted: Kb,
                  specialItemRef: Mb,
                  draggedInfo: sb.current,
                  getSetHovering: Rb,
                  getPointerDownForIdx: cb,
                  getPointerUpForIdx: Qb,
                  enchantingTablePosition: Hu,
                  enchantingTableBlockName: Zu,
                  selectedCraftable: Su,
                  dispatchSelectedCraftable: bb => {
                    au(Lb, bb)
                  },
                  creativeScrollDiv: rb,
                  creativeSearchVal: pu,
                  setCreativeSearchVal: ou,
                  creativeCategory: Au,
                  setCreativeCategory: lu,
                  onCraft: function(bb, ub) {
                    let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (fb(), (bb || hb.length > 0) && Cb((ub => {
                        const Bb = [...ub],
                          Ob = ub.filter((bb => "ingredient" === bb.kind)).length;
                        for (const bb of hb.slice(0, Math.max(0, 24 - Ob))) Bb.push({
                          id: (0, ah.c)(),
                          ...bb,
                          to: bb.to
                        });
                        return bb && Bb.push({
                          id: (0, ah.c)(),
                          ...bb,
                          to: (0, Sh.g)(bb.fY)
                        }), Bb
                      })), null !== ub) {
                      var Bb;
                      const bb = Sb.gameBridge.latest("inventory");
                      (0, nb.Eb)(null === (Bb = (0, Sh.j)(bb, ub)) || void 0 === Bb ? void 0 : Bb.name) ? cb(ub)({
                        button: 0,
                        shiftKey: !0
                      }): Tb(ub, bb.selectedSlot)
                    }
                  }
                }), (0, ab.jsx)(iB, {
                  draggedInfo: sb.current,
                  specialItemInfo: Mb.current,
                  craftFlyAnims: Wb,
                  getSetHovering: Rb,
                  getPointerDownForIdx: cb,
                  getPointerUpForIdx: Qb,
                  variation: Lb,
                  canCraft: ib,
                  isNewSlot: bb => vb.showNewItemIndicator && eb.isNew(bb)
                })]
              })]
            }), (0, ab.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, ab.jsx)("div", {
                ref: wb,
                className: "InventoryAd",
                children: (0, ab.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var yB = hb(1336),
      VB = hb(115);
    const FB = (0, Ob.memo)((function(bb) {
      let {
        show: ub,
        onOpen: hb,
        onClose: Bb
      } = bb;
      const Gb = (0, Ob.useRef)(0),
        Lb = () => (0, yB.g)() && !(0, yB.m)() && Gb.current <= 2;
      ub = Lb() && ub;
      const Yb = () => {
        Gb.current++, Bb()
      };
      (0, jb.h)("ctrlCrouchWithoutFullscreen", (() => {
        Lb() && hb()
      })), (0, jb.h)("displaymodeFullscreenChange", (bb => {
        ub && bb && Yb()
      }));
      const Sb = "crazygames" === VB.s;
      return (0, ab.jsx)(Ub.b, {
        close: Yb,
        escDoesExit: !0,
        show: ub,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, ab.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, ab.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Sb && (0, ab.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, ab.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, ab.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Sb && (0, ab.jsx)(Zb.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, yB.s)(), Yb()
              },
              children: (0, ab.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, ab.jsx)(Zb.H, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Yb()
              },
              children: (0, ab.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var fB = hb(3393),
      kB = hb(3415),
      TB = hb(1249),
      cB = hb(3373),
      QB = hb(1255),
      RB = hb(36166),
      bO = hb(3379),
      uO = hb(3385);

    function hO(bb, ub) {
      return (0, RB.f)(!0, bb, ub) ? () => {
        !async function(bb) {
          await cB.e.refresh();
          const {
            data: ub,
            failed: hb
          } = cB.e.getState();
          if (null === ub || hb) return;
          const Bb = cB.e.getExclusion(bb);
          if ("blocked" === Bb) return;
          const Ob = null === Bb;
          TB.NotificationProvider.showCustomPopup({
            body: ub => {
              const hb = hb => ({
                text: bO.i[hb].text,
                onClick: () => {
                  ub(), (0, uO.g)(hb, bb, null)
                }
              });
              return (0, ab.jsx)(QB.h, {
                title: Ob ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: bb
                  }
                },
                secondary: Ob ? hb("ignore") : void 0,
                confirm: hb("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: ub
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
    hb(3404);
    const BO = (0, Ob.memo)((function(bb) {
      let {
        show: ub,
        onOpen: hb,
        onClose: Bb
      } = bb;
      const [Gb, Lb] = (0, Ob.useState)(""), [Yb, Hb] = (0, Ob.useState)(""), [wb, Zb] = (0, Ob.useState)(null), [Xb, pb] = (0, Ob.useState)(null), ob = (0, Db.i)("hiddenPlayerNames"), Ab = {
        kind: "worldCodeLine",
        onSubmit: (bb, ub) => {
          Bb(), Sb.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: Xb,
            uS: bb,
            details: ub
          })
        }
      }, lb = {
        kind: "player",
        shownPlayerName: (0, uu.f)(Gb, ob),
        onSubmit: (bb, ub) => {
          Bb(), (0, kB.b)({
            playerId: Yb,
            playerName: Gb,
            chatMsgId: Xb,
            policyId: bb,
            details: ub,
            onAccepted: hO(Gb, ob)
          })
        }
      };
      return (0, jb.h)("OpenReportMenu", (bb => {
        let {
          playerEId: ub,
          playerName: Bb,
          XS: Ob,
          serverChatMsgId: Gb
        } = bb;
        Hb(ub), Lb(Bb), Zb(Ob), pb(Gb), hb()
      })), (0, ab.jsx)(Ub.b, {
        show: ub,
        close: Bb,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, ab.jsx)("div", {
          className: "ReportPanel",
          children: ub && (0, ab.jsx)(fB.c, {
            reported: null === Yb ? Ab : lb,
            chatMessage: wb,
            inGame: !0,
            onCancel: Bb
          })
        })
      })
    }));
    var OO = hb(36489);
    const GO = (0, Ob.memo)((function(bb) {
      let {
        show: ub,
        onOpen: hb,
        onClose: Bb
      } = bb;
      const {
        t: Gb
      } = (0, kb.K)(), [Lb, Yb] = (0, Ob.useState)(null), [Hb, wb] = (0, Ob.useState)(0);
      (0, jb.h)("OpenDiscordReportBox", (bb => {
        Sb.gameBridge.send("requestDiscordReportKey", bb), wb(0), hb()
      }));
      const Xb = () => {
        Bb(), Yb(null), wb(0)
      };
      return (0, jb.h)("setDiscordReportKey", (bb => {
        Yb(bb)
      })), (0, ab.jsx)(Ub.b, {
        show: ub,
        close: Xb,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, ab.jsx)("div", {
          className: "ReportPanel",
          children: (0, ab.jsx)(QB.h, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(OO.e, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: Xb
            },
            padStartsOn: "cancel",
            children: (0, ab.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, ab.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== Lb && void 0 !== Lb ? Lb : Gb("report:loadingReportKey")
              }), (0, ab.jsx)(Zb.e, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(Lb).catch((bb => {
                    console.error("Failed to copy report key:", bb)
                  })), wb(Date.now())
                },
                disabled: Date.now() - Hb < 1e3 || !Lb,
                children: Date.now() - Hb < 1e3 ? Gb("general:copied") : Gb("general:copy")
              })]
            })
          })
        })
      })
    }));
    var UO = hb(1184);
    const LO = {
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
      YO = (0, Ob.memo)((function(bb) {
        let {
          show: ub,
          onOpen: hb,
          onClose: Bb
        } = bb;
        const [Gb, Lb] = (0, Ob.useState)(null), Yb = (0, Ob.useRef)(0), Hb = (0, Ob.useRef)(null), {
          t: wb
        } = (0, kb.K)();
        (0, jb.h)("EditCustomLobbyBlock", (bb => {
          let {
            pos: ub
          } = bb;
          Lb(ub), null !== ub && hb(), Hb.current.scrollTo(0, Yb.current)
        }));
        const Zb = bb => {
          Sb.gameBridge.send("setCustomLobbyBlock", {
            pos: Gb,
            blockName: bb
          }), Bb()
        };
        return (0, ab.jsx)(Ub.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: Bb,
          escDoesExit: !0,
          show: ub,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, ab.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Hb,
            onScroll: () => {
              Yb.current = Hb.current.scrollTop
            },
            children: (0, ab.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(LO).map((bb => {
                let [ub, hb] = bb;
                return (0, ab.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, ab.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: wb(ub)
                  }), (0, ab.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(hb).map((bb => {
                      let [ub, {
                        tooltip: hb,
                        blocks: Bb
                      }] = bb;
                      return (0, ab.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, ab.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [wb(ub), (0, ab.jsx)(Fb.b, {
                            hoverInfo: wb(hb),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, ab.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Bb.map((bb => (0, ab.jsx)(SO, {
                            blockName: bb,
                            selectBlock: Zb
                          }, bb)))
                        })]
                      }, ub)
                    }))
                  })]
                }, ub)
              }))
            })
          })
        })
      })),
      SO = (0, Ob.memo)((function(bb) {
        var ub;
        let {
          blockName: hb,
          selectBlock: Bb
        } = bb;
        const Ob = (0, UB.e)(hb),
          Gb = null !== (ub = void 0 === Ob ? void 0 : (0, GB.displayNameOf)(Ob)) && void 0 !== ub ? ub : hb,
          Ub = void 0 === Ob ? void 0 : (0, GB.descriptionOf)(Ob);
        return (0, ab.jsx)(Fb.d, {
          tooltipInner: (0, ab.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, ab.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, ab.jsx)(rb.c, {
                text: Gb
              })
            }), Ub && (0, ab.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, ab.jsx)(rb.c, {
                text: Ub
              })
            })]
          }),
          children: (0, ab.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Bb(hb),
            children: (0, ab.jsx)(Gh.d, {
              itemName: hb,
              amount: 1
            })
          })
        }, hb)
      }));
    var aO = hb(2789),
      HO = hb(4005),
      wO = hb(9122);

    function ZO() {
      const bb = (0, Db.i)("itemInfo");
      return (0, Ob.useMemo)((() => function(bb) {
        return {
          getDefaultItemStat(ub, hb) {
            var Bb;
            const Ob = bb[ub];
            return "description" === hb ? null === Ob || void 0 === Ob ? void 0 : Ob.description : null !== (Bb = null === Ob || void 0 === Ob ? void 0 : Ob.displayName) && void 0 !== Bb ? Bb : ub
          }
        }
      }(bb)), [bb])
    }
    const XO = (0, Ob.memo)((function(bb) {
        var ub, hb, Bb, Gb, Lb, Yb, Sb, Hb, wb, Zb, Xb, pb, Ab, lb, Kb, Wb, Cb, db, rb, nb, Db, xb, zb;
        let {
          togglePointerLock: gb,
          show: ib,
          onOpen: vb,
          onClose: tb
        } = bb;
        const {
          t: Jb
        } = (0, kb.K)(), eb = ZO(), Nb = (0, Ob.useRef)(null), sb = (0, Ob.useRef)(HO.d.MobHungerLevel.Hungry), Mb = (0, Ob.useRef)(null), mb = (0, aO.d)(), Ib = (0, Ob.useRef)(null), Pb = (0, Ob.useRef)(null), qb = Nb.current;
        (0, Ob.useEffect)((() => {
          if (!ib) return;
          const bb = wO.j.openPet(Ib.current);
          return Pb.current = bb, () => {
            bb.close(), Pb.current = null
          }
        }), [ib]), (0, Ob.useEffect)((() => {
          ib && qb && Pb.current.show(function(bb) {
            var ub;
            let {
              mobType: hb,
              mobSettings: Bb
            } = bb;
            return {
              mobType: hb,
              variation: null !== (ub = Bb.variation) && void 0 !== ub ? ub : "default",
              metaInfo: Bb.metaInfo,
              tamed: !(0, lB.J)(Bb.ownerDbId)
            }
          }(qb))
        }), [ib, qb]), (0, Ob.useEffect)((() => {
          const bb = () => {
            var bb;
            const ub = HO.d.getMobHungerLevel(null === (bb = Nb.current) || void 0 === bb ? void 0 : bb.mobSettings.petInfo.lastFedAt);
            if (ub !== sb.current && (sb.current = ub, mb()), Mb.current) {
              var hb;
              const bb = Date.now(),
                ub = HO.d.getNextStateAt(null === (hb = Nb.current) || void 0 === hb ? void 0 : hb.mobSettings.petInfo.lastFedAt);
              let Bb = Math.floor((ub - bb) / 1e3),
                Ob = "";
              if (Bb > 3600) {
                Ob += Math.floor(Bb / 60 / 60).toString().padStart(2, "0"), Ob += ":", Bb %= 3600
              }
              const Gb = Bb % 60;
              Ob += Math.floor(Bb / 60).toString().padStart(2, "0"), Ob += ":", Ob += Gb.toString().padStart(2, "0"), Mb.current.textContent = Ob
            }
          };
          bb();
          const ub = setInterval(bb, 250);
          return () => {
            clearInterval(ub)
          }
        }), [qb, mb]), (0, jb.h)("showPetUi", (bb => {
          let {
            mobType: ub,
            mobSettings: hb
          } = bb;
          Nb.current = {
            mobType: ub,
            mobSettings: hb
          }, ib || vb()
        }));
        const Eb = null === (ub = Nb.current) || void 0 === ub ? void 0 : ub.mobSettings.health,
          yb = null === (hb = Nb.current) || void 0 === hb ? void 0 : hb.mobSettings.maxHealth,
          Vb = HO.d.getFriendshipLevelInfo(null !== (Bb = null === (Gb = Nb.current) || void 0 === Gb ? void 0 : Gb.mobSettings.petInfo.friendshipPoints) && void 0 !== Bb ? Bb : 0);
        return (0, ab.jsx)(Ub.b, {
          className: "PetUIOuter",
          close: tb,
          escDoesExit: !0,
          show: ib,
          togglePointerLock: gb,
          forcePointerUnlock: ib,
          globallyUniqueKey: "PetUI",
          children: (0, ab.jsx)("div", {
            className: "PetUI",
            children: (0, ab.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, ab.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, ab.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (Lb = null === (Yb = Nb.current) || void 0 === Yb ? void 0 : Yb.mobSettings.name) && void 0 !== Lb ? Lb : "Your Pet"
                }), (0, ab.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Ib
                })]
              }), (0, ab.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, lB.J)(null === (Sb = Nb.current) || void 0 === Sb ? void 0 : Sb.mobSettings.petInfo.friendshipPoints) && (0, ab.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, ab.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Jb("mobAiPlugin:friendshipTitle")
                  }), (0, ab.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: HO.d.getIconsFromFriendshipPoints(null !== (Hb = Nb.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Hb ? Hb : 0).map(((bb, ub) => (0, ab.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: bb,
                        amount: 1
                      })
                    }, ub)))
                  }), (0, ab.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, ab.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, ab.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${Vb.totalPointsForNextLevel>0?Math.max(Vb.pointsIntoCurrentLevel/Vb.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, ab.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Vb.totalPointsForNextLevel > 0 ? ` ${Math.ceil(Vb.pointsIntoCurrentLevel)}/${Math.ceil(Vb.totalPointsForNextLevel)}` : Math.ceil(Vb.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, ab.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, ab.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Jb("mobAiPlugin:hungerTitle")
                  }), (0, ab.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: HO.d.hungerLevelIcons[sb.current].map(((bb, ub) => (0, ab.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: bb,
                        amount: 1
                      })
                    }, ub)))
                  }), (0, ab.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Jb(HO.d.hungerLevelTranslations[sb.current].translationKey), sb.current !== HO.d.MobHungerLevel.Starving && !(0, lB.J)(null === (wb = Nb.current) || void 0 === wb ? void 0 : wb.mobSettings.petInfo.lastFedAt) && (0, ab.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Jb("mobAiPlugin:nextFeedIn", {
                        state: Jb(HO.d.hungerLevelTranslations[sb.current + 1].translationKey)
                      }), ":", " ", (0, ab.jsx)("span", {
                        ref: Mb
                      })]
                    })]
                  })]
                }), (0, ab.jsx)(Fb.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ab.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jb("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, ab.jsxs)("div", {
                    className: Kh()("PetUIQuickStatsItem", {
                      Disabled: (0, lB.J)(Eb) || (0, lB.J)(yb)
                    }),
                    children: [(0, ab.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, ab.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, lB.J)(Eb) || (0, lB.J)(yb) ? "" : (0, ab.jsxs)(ab.Fragment, {
                        children: [Math.ceil(Eb), (0, ab.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(yb)]
                        })]
                      })
                    })]
                  })
                }), (0, ab.jsx)(Fb.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ab.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jb("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, ab.jsxs)("div", {
                    className: Kh()("PetUIQuickStatsItem", {
                      Disabled: (0, lB.J)(null === (Zb = Nb.current) || void 0 === Zb ? void 0 : Zb.mobSettings.attackDamage) || Nb.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, ab.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, ab.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Xb = Nb.current) || void 0 === Xb ? void 0 : Xb.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, ab.jsx)(Fb.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ab.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jb("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, ab.jsxs)("div", {
                    className: Kh()("PetUIQuickStatsItem", {
                      Disabled: (0, lB.J)(null === (pb = Nb.current) || void 0 === pb ? void 0 : pb.mobSettings.secondaryAttackDamage) || Nb.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, ab.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, ab.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Ab = Nb.current) || void 0 === Ab ? void 0 : Ab.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, ab.jsx)(Fb.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ab.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jb("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, ab.jsxs)("div", {
                    className: Kh()("PetUIQuickStatsItem", {
                      Disabled: (0, lB.J)(null === (lb = Nb.current) || void 0 === lb ? void 0 : lb.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, ab.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, ab.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Kb = null === (Wb = Nb.current) || void 0 === Wb || null === (Cb = Wb.mobSettings.baseRunningSpeed) || void 0 === Cb ? void 0 : Cb.toFixed(2)) && void 0 !== Kb ? Kb : ""
                    })]
                  })
                }), (0, ab.jsx)(Fb.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, ab.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Jb("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, ab.jsxs)("div", {
                    className: Kh()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (db = Nb.current) || void 0 === db ? void 0 : db.mobSettings.metaInfo)
                    }),
                    children: [(0, ab.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, ab.jsx)(Gh.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, ab.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (rb = Nb.current) || void 0 === rb ? void 0 : rb.mobSettings.metaInfo) ? (0, ab.jsx)(ob.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, lB.J)(null === (nb = Nb.current) || void 0 === nb ? void 0 : nb.mobSettings.tameInfo) && (0, ab.jsxs)(ab.Fragment, {
                  children: [(0, ab.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, ab.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ab.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ab.jsx)(oO, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: HO.d.feedTextColours[HO.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ab.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, ab.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Nb.current.mobSettings.petInfo.superlikedFoodKnown ? (0, ab.jsx)(pO, {
                            food: Nb.current.mobSettings.petInfo.superlikedFood
                          }) : (0, ab.jsx)(oO, {
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
                    }), (0, ab.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ab.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ab.jsx)(oO, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: HO.d.feedTextColours[HO.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ab.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Db = Nb.current.mobSettings.tameInfo.likedFoods) || void 0 === Db ? void 0 : Db.filter((bb => !Nb.current.mobSettings.petInfo.superlikedFoodKnown || bb !== Nb.current.mobSettings.petInfo.superlikedFood)).map((bb => (0, ab.jsx)(pO, {
                          food: bb
                        }, bb)))
                      })]
                    }), (0, ab.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ab.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ab.jsx)(oO, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: HO.d.feedTextColours[HO.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ab.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (xb = Nb.current.mobSettings.tameInfo.neutralFoods) || void 0 === xb ? void 0 : xb.map((bb => (0, ab.jsx)(pO, {
                          food: bb
                        }, bb)))
                      })]
                    }), (0, ab.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, ab.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, ab.jsx)(oO, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: HO.d.feedTextColours[HO.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, ab.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (zb = Nb.current.mobSettings.tameInfo.dislikedFoods) || void 0 === zb ? void 0 : zb.map((bb => (0, ab.jsx)(pO, {
                          food: bb
                        }, bb)))
                      })]
                    })]
                  }), Nb.current.mobSettings.tameInfo.levelUpBonuses && (0, ab.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: HO.d.MAX_LEVEL + 1
                    }).map(((bb, ub) => {
                      const hb = ub;
                      if (0 === hb) return null;
                      const Bb = Nb.current.mobSettings.tameInfo.levelUpBonuses[hb],
                        Ob = HO.d.getBonusDisplayInfo(eb, Nb.current.mobSettings, Nb.current.mobType, Bb);
                      return (0, ab.jsxs)("div", {
                        className: Kh()("PetUIFeedDropContainer", {
                          Selected: hb === HO.d.getFriendshipLevelInfo(Nb.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, ab.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: hb
                          }).map(((bb, ub) => (0, ab.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, ab.jsx)(Gh.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${hb}-${ub}`)))
                        }), (0, ab.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Ob && (0, ab.jsx)(oO, {
                            icon: Ob.icon,
                            displayName: Ob.displayName,
                            description: Ob.description
                          })
                        })]
                      }, hb)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      pO = (0, Ob.memo)((function(bb) {
        let {
          food: ub,
          includeDescription: hb = !1
        } = bb;
        const Bb = ZO(),
          Ob = Bb.getDefaultItemStat(ub, "displayName"),
          Gb = Bb.getDefaultItemStat(ub, "description");
        return (0, ab.jsx)(oO, {
          icon: ub,
          displayName: Ob,
          description: hb ? Gb : null
        })
      })),
      oO = (0, Ob.memo)((function(bb) {
        let {
          icon: ub,
          displayName: hb,
          description: Bb,
          tintColor: Ob,
          className: Gb = "PetUIFoodItem"
        } = bb;
        return (0, ab.jsx)(Fb.d, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, ab.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, ab.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, ab.jsx)(rb.c, {
                text: hb
              })
            }), Bb && (0, ab.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, ab.jsx)(rb.c, {
                text: Bb
              })
            })]
          }),
          children: (0, ab.jsx)("div", {
            className: Gb,
            children: (0, ab.jsx)(Gh.d, {
              itemName: ub,
              amount: 1,
              tintColor: Ob
            })
          })
        })
      }));
    var AO = hb(3516),
      lO = hb(1038),
      KO = hb(1133),
      WO = hb(36504),
      CO = hb(36502),
      dO = hb(934),
      rO = hb(2238);

    function jO(bb) {
      let {
        peers: ub
      } = bb;
      const [hb, Bb] = (0, Ob.useState)(null), Gb = (0, Db.i)("players");
      return (0, ab.jsx)("div", {
        className: "CodeEditorPresence",
        children: ub.map((bb => {
          var ub, Ob;
          const Ub = null !== (ub = null === (Ob = Gb.byId[bb.playerId]) || void 0 === Ob ? void 0 : Ob.cosmetics) && void 0 !== ub ? ub : {};
          return (0, ab.jsxs)("div", {
            className: Kh()("PresenceIcon", {
              Viewer: !bb.isEditor
            }),
            style: {
              backgroundColor: bb.colour
            },
            onMouseEnter: () => {
              Bb(bb.playerId)
            },
            onMouseLeave: () => {
              Bb(null)
            },
            children: [(0, ab.jsx)(rO.e, {
              cosmetics: Ub
            }), hb === bb.playerId && (0, ab.jsx)("div", {
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
    var nO = hb(609),
      DO = hb(36498),
      xO = hb(36161),
      zO = hb(36513);

    function gO(bb) {
      const ub = bb.split("/"),
        hb = [];
      for (let Bb = 1; Bb < ub.length; Bb++) hb.push(ub.slice(0, Bb).join("/"));
      return hb
    }

    function iO(bb) {
      return bb.slice(bb.lastIndexOf("/") + 1)
    }
    const vO = (0, Ob.memo)((function(bb) {
      var ub;
      let {
        files: hb,
        activePath: Bb,
        canEdit: Gb,
        directoryLinked: Ub,
        pluginNames: Lb,
        activePluginName: Yb,
        activePluginFile: Sb,
        onSelect: Hb,
        onSelectPlugin: wb,
        onCreate: Xb,
        onRename: pb,
        onRenameFolder: Ab,
        onDelete: lb,
        onToggleDirectorySync: Kb,
        schematics: Wb,
        onManageSchematic: Cb
      } = bb;
      const {
        t: db
      } = (0, kb.K)(), rb = null !== (ub = (0, CO.d)(hb)) && void 0 !== ub ? ub : KO.m, jb = Object.keys(hb), [nb, Db] = (0, Ob.useState)((() => new Set)), xb = function(bb, ub, hb) {
        const Bb = {
          folders: new Map,
          files: []
        };
        for (const Ub of bb) {
          if (Ub === ub) continue;
          let bb = Bb;
          for (const ub of gO(Ub)) {
            let hb = bb.folders.get(ub);
            hb || (hb = {
              folders: new Map,
              files: []
            }, bb.folders.set(ub, hb)), bb = hb
          }
          bb.files.push(Ub)
        }
        const Ob = [];
        bb.includes(ub) && Ob.push({
          kind: "file",
          path: ub,
          name: iO(ub),
          depth: 0
        });
        const Gb = (bb, ub) => {
          const Bb = [...bb.folders.entries()].sort(((bb, ub) => {
            let [hb] = bb, [Bb] = ub;
            return hb.localeCompare(Bb)
          }));
          for (const [Ub, Lb] of Bb) {
            const bb = hb.has(Ub);
            Ob.push({
              kind: "folder",
              path: Ub,
              name: iO(Ub),
              depth: ub,
              collapsed: bb
            }), bb || Gb(Lb, ub + 1)
          }
          bb.files.sort(((bb, ub) => bb.localeCompare(ub)));
          for (const hb of bb.files) Ob.push({
            kind: "file",
            path: hb,
            name: iO(hb),
            depth: ub
          })
        };
        return Gb(Bb, 0), Ob
      }(jb, rb, nb);
      (0, Ob.useEffect)((() => {
        Db((bb => {
          const ub = new Set(bb);
          let hb = !1;
          for (const Ob of gO(Bb)) hb = ub.delete(Ob) || hb;
          return hb ? ub : bb
        }))
      }), [Bb]);
      const zb = jb.length >= Pu.t,
        gb = (bb, ub) => {
          if (bb.length > WO.q) return `Path must be at most ${WO.q} characters`;
          if (!(0, WO.n)(bb)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === bb) return "index.d.ts cannot be the world-code entry";
          const Bb = !!ub && (0, CO.f)(ub, bb);
          if (ub && (0, CO.j)(ub) && !Bb) return `Cannot rename ${ub} (only swapping ${KO.m} and ${KO.o} is allowed)`;
          if (bb in hb) return "A file with that path already exists";
          if ((0, CO.j)(bb) && !Bb) {
            if ((bb === KO.m ? KO.o : KO.m) in hb) return `World code cannot have both ${KO.m} and ${KO.o}`
          }
          return null
        },
        ib = bb => {
          TB.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === bb ? void 0 : `${bb}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: bb => gb(bb)
          }).getResult().then((bb => {
            "notificationTornDown" !== bb && null !== bb && "submit" === bb.type && Xb(bb.value)
          }))
        },
        vb = bb => {
          TB.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: bb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ub => ub === bb ? "That is already the file's path" : gb(ub, bb)
          }).getResult().then((ub => {
            "notificationTornDown" !== ub && null !== ub && "submit" === ub.type && pb(bb, ub.value)
          }))
        },
        tb = bb => {
          const ub = bb => bb.replace(/\/+$/, "");
          TB.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: bb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: hb => {
              const Bb = ub(hb);
              if (Bb === bb) return "That is already the folder's path";
              for (const [ub, Ob] of(0, CO.n)(jb, bb, Bb)) {
                const bb = gb(Ob, ub);
                if (null !== bb) return bb
              }
              return null
            }
          }).getResult().then((hb => {
            "notificationTornDown" !== hb && null !== hb && "submit" === hb.type && Ab(bb, ub(hb.value))
          }))
        },
        Jb = bb => {
          TB.NotificationProvider.showPromptPopup({
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
          }).getResult().then((ub => {
            !0 === ub && lb(bb)
          }))
        };
      return (0, ab.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, ab.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, ab.jsx)("span", {
            children: "Files"
          }), Gb && !zb && (0, ab.jsx)(Zb.q, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              ib()
            },
            children: (0, ab.jsx)(ob.e, {
              name: "plus"
            })
          })]
        }), (0, ab.jsxs)("div", {
          className: "FileTreeList",
          children: [xb.map((bb => {
            const ub = bb.path;
            if ("folder" === bb.kind) return (0, ab.jsx)(eO, {
              path: ub,
              name: bb.name,
              depth: bb.depth,
              collapsed: bb.collapsed,
              onToggle: () => {
                var bb;
                bb = ub, Db((ub => {
                  const hb = new Set(ub);
                  return hb.delete(bb) || hb.add(bb), hb
                }))
              },
              canCreate: Gb && !zb,
              canRename: Gb,
              onCreate: ib,
              onRename: tb
            }, `folder:${ub}`);
            const Ob = (0, CO.j)(ub),
              Ub = KO.m in hb && KO.o in hb,
              Lb = !Ob || Ub,
              Sb = null === Yb && ub === Bb;
            return (0, ab.jsx)(sO, {
              path: ub,
              label: bb.name,
              depth: bb.depth,
              isActive: Sb,
              canRename: Gb,
              onSelect: Hb,
              onRename: vb,
              onDelete: Jb,
              canDelete: Lb && Gb
            }, ub)
          })), (0, ab.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, ab.jsxs)("span", {
              children: ["Schematics (", Object.keys(Wb).length, "/", zO.e, ")"]
            }), Gb && (0, ab.jsx)(Zb.q, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(Wb).length >= zO.e,
              onClick: () => {
                Cb("")
              },
              children: (0, ab.jsx)(ob.e, {
                name: "plus"
              })
            })]
          }), Object.keys(Wb).sort().map((bb => (0, ab.jsx)(sO, {
            path: bb,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Cb
          }, bb))), Lb.length > 0 && (0, ab.jsxs)(ab.Fragment, {
            children: [(0, ab.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, ab.jsx)("span", {
                children: "Plugins"
              })
            }), Lb.map((bb => {
              var ub;
              const hb = DO.f[bb],
                Bb = Object.keys(null !== (ub = null === hb || void 0 === hb ? void 0 : hb.files) && void 0 !== ub ? ub : {
                  "index.ts": ""
                }).sort(((bb, ub) => "index.ts" === bb ? -1 : "index.ts" === ub ? 1 : bb.localeCompare(ub)));
              return (0, ab.jsxs)("div", {
                children: [(0, ab.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, CO.v)(bb)
                }), Bb.map((ub => (0, ab.jsx)(sO, {
                  path: ub,
                  nested: !0,
                  isActive: Yb === bb && Sb === ub,
                  canRename: !1,
                  onSelect: () => {
                    wb(bb, ub)
                  },
                  canDelete: !1
                }, ub)))]
              }, bb)
            }))]
          })]
        }), (0, ab.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, ab.jsx)(Zb.e, {
            className: "FileTreeFooterButton",
            onClick: Kb,
            children: db(Ub ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function tO(bb) {
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

    function JO(bb) {
      let {
        depth: ub
      } = bb;
      return (0, ab.jsx)(ab.Fragment, {
        children: Array.from({
          length: ub
        }, ((bb, ub) => (0, ab.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": ub
          }
        }, ub)))
      })
    }

    function eO(bb) {
      let {
        path: ub,
        name: hb,
        depth: Bb,
        collapsed: Ob,
        onToggle: Gb,
        canCreate: Ub,
        canRename: Lb,
        onCreate: Yb,
        onRename: Sb
      } = bb;
      const Hb = [];
      Ub && Hb.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Yb(ub)
        }
      }), Lb && Hb.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Sb(ub)
        }
      });
      const wb = tO(Bb);
      return (0, ab.jsxs)("div", {
        className: Kh()("FileTreeItem FileTreeFolder", wb.className),
        style: wb.style,
        children: [(0, ab.jsx)(JO, {
          depth: Bb
        }), (0, ab.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Ob,
          onClick: Gb,
          children: [(0, ab.jsx)(ob.e, {
            className: "FileTreeFolderCaret",
            name: Ob ? "caret-right" : "caret-down"
          }), (0, ab.jsx)(ob.e, {
            className: "FileTreeFolderIcon",
            name: Ob ? "folder" : "folder-open"
          }), hb]
        }), (0, ab.jsx)(NO, {
          path: ub,
          actions: Hb
        })]
      })
    }

    function NO(bb) {
      let {
        path: ub,
        actions: hb
      } = bb;
      const Bb = (0, Ob.useRef)(null);
      return 0 === hb.length ? null : (0, ab.jsxs)("div", {
        ref: Bb,
        className: "FileTreeItemActions",
        children: [(0, ab.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${ub}`,
          children: (0, ab.jsx)(ob.e, {
            name: "ellipsis"
          })
        }), (0, ab.jsx)(xO.d, {
          triggerElementRef: Bb,
          options: hb
        })]
      })
    }

    function sO(bb) {
      let {
        path: ub,
        label: hb = ub,
        depth: Bb = 0,
        isActive: Ob,
        canRename: Gb,
        onSelect: Ub,
        onRename: Lb,
        onDelete: Yb,
        canDelete: Sb,
        nested: Hb
      } = bb;
      const wb = [];
      Gb && Lb && wb.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          Lb(ub)
        }
      }), Sb && Yb && wb.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Yb(ub)
        }
      });
      const Zb = tO(Bb);
      return (0, ab.jsxs)("div", {
        className: Kh()("FileTreeItem", Zb.className, {
          Active: Ob,
          Nested: Hb
        }),
        style: Zb.style,
        children: [(0, ab.jsx)(JO, {
          depth: Bb
        }), (0, ab.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: hb === ub ? void 0 : ub,
          onClick: () => {
            Ub(ub)
          },
          children: hb
        }), (0, ab.jsx)(NO, {
          path: ub,
          actions: wb
        })]
      })
    }
    async function MO(bb) {
      const ub = (0, CO.d)(bb);
      if (!ub || "" === bb[ub].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Bb
      } = await Promise.all([hb.e(290), hb.e(291)]).then((() => hb(40928)));
      return (0, DO.d)(Bb(bb))
    }
    var mO = hb(36516);

    function IO(bb, ub) {
      const hb = Object.keys(bb),
        Bb = Object.keys(ub);
      if (hb.length !== Bb.length) return !1;
      for (const Ob of hb)
        if (!(Ob in ub) || bb[Ob] !== ub[Ob]) return !1;
      return !0
    }

    function PO(bb, ub) {
      const hb = [],
        Bb = [],
        Ob = [];
      for (const Gb of Object.keys(ub)) Gb in bb ? bb[Gb] !== ub[Gb] && Ob.push(Gb) : hb.push(Gb);
      for (const Gb of Object.keys(bb)) Gb in ub || Bb.push(Gb);
      return hb.sort(), Bb.sort(), Ob.sort(), {
        creates: hb,
        deletes: Bb,
        updates: Ob
      }
    }

    function qO(bb, ub) {
      var hb;
      const Bb = {
          ...bb
        },
        Ob = (0, CO.d)(ub),
        Gb = (0, CO.d)(Bb);
      if (KO.m in Bb && KO.o in Bb) {
        const bb = null !== Ob && void 0 !== Ob ? Ob : KO.o,
          hb = bb === KO.m ? KO.o : KO.m;
        var Ub;
        if (!(bb in Bb)) Bb[bb] = null !== (Ub = ub[bb]) && void 0 !== Ub ? Ub : "";
        return delete Bb[hb], Bb
      }
      var Lb;
      return Ob && !(Ob in Bb) ? (Gb || (Bb[Ob] = null !== (Lb = ub[Ob]) && void 0 !== Lb ? Lb : ""), Bb) : (Gb || Ob || (Bb[KO.m] = null !== (hb = Bb[KO.m]) && void 0 !== hb ? hb : "", delete Bb[KO.o]), Bb)
    }

    function EO(bb, ub) {
      const hb = (0, CO.d)(ub),
        Bb = KO.m in ub && KO.o in ub;
      return bb.filter((bb => !(0, CO.j)(bb) || (!!Bb || hb !== bb)))
    }
    async function yO(bb, ub, Bb) {
      const Ob = bb.getLobbyFiles(),
        Gb = (0, Pu.j)(Bb, (0, CO.p)(Ob, ub)),
        Ub = await bb.ensureJoined(ub),
        Lb = (0, WO.s)(Ub.docKey);
      if (Ub.doc === Gb) return;
      for (let hb = 0; hb < 100; hb++) {
        const hb = bb.getCollabSnapshot();
        if (hb && (0, WO.s)(hb.docKey) === Lb && bb.getActivePath() === ub) {
          if (bb.replaceActiveDoc(Lb, Gb)) return;
          await (0, lB.P)(40)
        } else await (0, lB.P)(40)
      }
      const {
        ChangeSet: Yb
      } = await hb.e(286).then((() => hb(40769))), ab = bb.getCollabSnapshot(), Hb = ab && (0, WO.s)(ab.docKey) === Lb ? ab : Ub;
      await async function(bb, ub, hb, Bb) {
        const Ob = bb.of({
            from: 0,
            to: hb.length,
            insert: Bb
          }, hb.length),
          Gb = JSON.stringify([{
            clientID: ub.clientID,
            changes: Ob.toJSON()
          }]),
          Ub = (0, WO.s)(ub.docKey);
        Gb.length <= WO.f ? Sb.gameBridge.send("sendCodeCollab", {
          vu: WO.b.Push,
          tu: Ub,
          Ju: ub.version,
          Mu: Gb
        }) : await (0, lO.postJsonWithMetricsCookiesAndJsonResponse)(`${ub.httpConfig.gsUrl}/code/collab-push`, AO.t["collab-push"].toBuffer({
          gameNameWithVariation: ub.httpConfig.gameNameWithVariation,
          lobbyName: ub.httpConfig.lobbyName,
          docKey: Ub,
          version: ub.version,
          updates: Gb
        }), {
          retries: 0
        })
      }(Yb, Hb, Hb.doc, Gb)
    }
    class VO {
      constructor(bb) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = bb
      }
      async writeLobbyFiles(bb) {
        const ub = {
            ...this.bridge.getLobbyFiles()
          },
          hb = {
            ...ub
          };
        for (const {
            path: Gb,
            text: Ub
          }
          of bb) hb[Gb] = Ub;
        if (!bb.every((bb => {
            let {
              path: ub,
              text: Bb
            } = bb;
            return (0, Pu.j)(Bb, (0, CO.p)(hb, ub)) === Bb
          }))) return !1;
        const Bb = [];
        try {
          for (const {
              path: ub,
              text: hb
            }
            of bb) Bb.push(ub), ub in this.bridge.getLobbyFiles() || (this.bridge.createFile(ub, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(ub, !0)), await yO(this.bridge, ub, hb)
        } catch (Ob) {
          for (const bb of Bb) bb in ub ? await yO(this.bridge, bb, ub[bb]).catch((ub => {
            console.error("World Code AI: couldn't put back", bb, ub)
          })) : this.bridge.deleteFile(bb);
          throw Ob
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const bb = await (0, mO.u)(this.bridge.getStorageKey());
        return !!bb && (this.handle = bb, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(bb), !0)
      }
      async unlinkFolder() {
        const bb = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, mO.c)(bb), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const bb = this.bridge.getStorageKey(),
          ub = await (0, mO.s)(bb);
        return !!ub && (!!await (0, mO.h)(ub, "readwrite") && (this.handle = ub, this.linked = !0, await (0, mO.D)(bb, ub), await this.scaffoldLocalTypes(ub), !0))
      }
      scaffoldLocalTypes(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Bb = (await MO(ub)).map((bb => DO.f[bb])),
              Ob = Bb.map((bb => {
                var ub;
                return `${bb.name}:${Object.keys(null!==(ub=null===bb||void 0===bb?void 0:bb.files)&&void 0!==ub?ub:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Ob) return;
            const {
              ensureLocalBloxdTypes: Gb
            } = await Promise.all([hb.e(82), hb.e(288), hb.e(293)]).then((() => hb(40931)));
            await Gb(bb, Bb), this.scaffoldedPluginNamesKey = Ob
          } catch (Bb) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Bb)
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
      async onDocTextChanged(bb, ub) {
        if (!this.handle) return;
        const hb = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [bb]: ub
        })];
        this.running && (this.pendingDocText.set(bb, ub), hb.push(this.flushDocTextToDisk())), await Promise.all(hb)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const bb = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const ub = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [hb, Bb] of ub) this.lastSynced[hb] !== Bb && (await (0, mO.I)(bb, hb, Bb), this.lastSynced = {
              ...this.lastSynced,
              [hb]: Bb
            })
          }
        } catch (ub) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", ub), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, mO.w)(this.handle))
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
            if (!await (0, mO.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const ub = this.bridge.getLobbyFiles(),
              hb = await (0, mO.w)(this.handle);
            for (const bb of Object.keys(ub).filter(zO.d)) {
              if (hb[bb] === mO.k) return void this.bridge.setMessage(`Move ${bb} outside the linked folder before syncing its placeholder.`, "warning");
              hb[bb] = zO.n
            }
            if (IO(hb, ub)) {
              for (const bb of Object.keys(ub).filter(zO.d)) await (0, mO.I)(this.handle, bb, zO.n);
              return this.lastSynced = {
                ...hb
              }, void this.beginWatch()
            }
            const Bb = await this.promptReconcile(function(bb) {
              return null !== (0, CO.d)(bb)
            }(hb));
            if ("unlink" === Bb) return void await this.unlinkFolder();
            if ("dismissed" === Bb) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Bb) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(hb);
                for (const bb of Object.keys(ub).filter(zO.d)) await (0, mO.I)(this.handle, bb, zO.n);
                this.lastSynced = {
                  ...await (0, mO.w)(this.handle)
                }
              } else await (0, mO.M)(this.handle, ub), this.lastSynced = {
                ...ub
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
        return await new Promise((ub => {
          const hb = [{
              choice: "local",
              Button: Zb.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: Zb.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: Zb.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Bb = (0, ab.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, ab.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, ab.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: bb ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, ab.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: hb.filter((ub => "local" !== ub.choice || bb)).map((bb => {
                  let {
                    choice: hb,
                    Button: Bb,
                    labelKey: Gb,
                    descriptionKey: Ub
                  } = bb;
                  return (0, ab.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, ab.jsx)(Bb, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (bb => {
                          Ob.tearDownNotification(), ub(bb)
                        })(hb)
                      },
                      children: this.bridge.t(`codeEditor:${Gb}`)
                    }), (0, ab.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Ub}`)
                    })]
                  }, hb)
                }))
              })]
            }),
            Ob = TB.NotificationProvider.showCustomPopup({
              body: Bb,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Ob.getResult().then((bb => {
            "notificationTornDown" === bb && ub("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, mO.E)(this.handle, (bb => {
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
        const ub = this.bridge.getLobbyFiles();
        let hb = qO(bb, this.lastSynced);
        for (const Gb in ub)
          if ((0, zO.d)(Gb) && hb[Gb] === mO.k) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Bb = Object.keys(hb).filter((bb => (0, zO.d)(bb) && !(bb in ub)));
        Bb.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const Gb of Object.keys(ub).filter(zO.d))(Gb in hb || Bb.length > 0 || !(Gb in this.lastSynced)) && (hb[Gb] = zO.n);
        if (!IO(hb, bb)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(bb, hb), hb = qO(await (0, mO.w)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!IO(hb, this.lastSynced)) {
          this.applying = !0;
          try {
            const bb = PO(this.lastSynced, hb);
            if (await this.pushDiskDeltaToLobby(hb, ub), null !== this.lastLobbySeen)
              for (const hb of [...bb.creates, ...bb.updates, ...bb.deletes])(0, zO.d)(hb) || (hb in ub ? this.lastLobbySeen[hb] = ub[hb] : delete this.lastLobbySeen[hb]);
            this.lastSynced = {
              ...hb
            }
          } catch (Ob) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Ob), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(bb, ub) {
        if (this.handle) {
          for (const hb of Object.keys(bb)) hb in ub || await (0, mO.z)(this.handle, hb);
          for (const [hb, Bb] of Object.entries(ub)) bb[hb] !== Bb && await (0, mO.I)(this.handle, hb, Bb)
        }
      }
      async applyRemoteTreeToDisk(bb) {
        if (!this.handle) return;
        const ub = this.lastLobbySeen;
        if (null === ub) return void(this.lastLobbySeen = {
          ...bb
        });
        const hb = Object.keys(bb).filter((hb => ub[hb] !== bb[hb])),
          Bb = Object.keys(ub).filter((ub => !(ub in bb)));
        if (0 !== hb.length || 0 !== Bb.length) {
          this.applying = !0;
          try {
            for (const ub of [...Bb, ...hb]) try {
              if (ub in bb) await (0, mO.I)(this.handle, ub, bb[ub]), this.lastSynced = {
                ...this.lastSynced,
                [ub]: bb[ub]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [ub]: bb[ub]
              };
              else {
                await (0, mO.z)(this.handle, ub);
                const bb = {
                  ...this.lastSynced
                };
                delete bb[ub], this.lastSynced = bb;
                const hb = {
                  ...this.lastLobbySeen
                };
                delete hb[ub], this.lastLobbySeen = hb
              }
            } catch (Ob) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Ob), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(bb, ub) {
        const hb = function(bb, ub) {
          const hb = (0, CO.d)(bb),
            Bb = (0, CO.d)(ub);
          return hb && Bb && hb !== Bb ? {
            from: hb,
            to: Bb
          } : null
        }(bb, ub);
        return !!hb && (this.bridge.renameFile(hb.from, hb.to), await this.bridge.waitForLobbyPath(hb.to, !0), !0)
      }
      async applyLocalTreeToLobby(bb) {
        var ub;
        const hb = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), bb);
        const Bb = this.bridge.getLobbyFiles(),
          Ob = PO(Bb, bb),
          Gb = EO(Ob.deletes, Bb);
        for (const Sb of Ob.creates)(0, zO.d)(Sb) || (this.bridge.createFile(Sb, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Sb, !0));
        for (const Sb of Gb)(0, zO.d)(Sb) || (this.bridge.deleteFile(Sb), await this.bridge.waitForLobbyPath(Sb, !1));
        if (!(0, CO.d)(this.bridge.getLobbyFiles()) && !(0, CO.d)(bb)) {
          if (this.bridge.createFile(KO.m, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(KO.m, !0), !this.handle) return;
          await (0, mO.I)(this.handle, KO.m, ""), bb = {
            ...bb,
            [KO.m]: ""
          }
        }
        const Ub = this.bridge.getLobbyFiles();
        for (const Sb of Object.keys(bb))(0, zO.d)(Sb) || Ub[Sb] !== bb[Sb] && await yO(this.bridge, Sb, bb[Sb]);
        const Lb = this.bridge.getLobbyFiles(),
          Yb = hb in Lb ? hb : null !== (ub = (0, CO.d)(Lb)) && void 0 !== ub ? ub : KO.m;
        await this.bridge.ensureJoined(Yb)
      }
      async pushDiskDeltaToLobby(bb, ub) {
        const hb = this.bridge.getActivePath(),
          Bb = await this.renameLobbyEntryIfSwitched(ub, bb) ? this.bridge.getLobbyFiles() : ub,
          Ob = PO(this.lastSynced, bb),
          Gb = EO(Ob.deletes, Bb).filter((bb => bb in Bb));
        for (const Ub of Ob.creates)(0, zO.d)(Ub) || (Ub in this.bridge.getLobbyFiles() || (this.bridge.createFile(Ub, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Ub, !0)), await yO(this.bridge, Ub, bb[Ub]));
        for (const Ub of Gb)(0, zO.d)(Ub) ? await this.bridge.deleteSchematic(Ub) : (this.bridge.deleteFile(Ub), await this.bridge.waitForLobbyPath(Ub, !1));
        for (const Ub of Ob.updates)(0, zO.d)(Ub) || await yO(this.bridge, Ub, bb[Ub]);
        hb in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== hb && await this.bridge.ensureJoined(hb)
      }
    }
    var FO = hb(1103);

    function fO() {
      const {
        websocketUrl: bb,
        gameNameWithVariation: ub,
        lobbyName: hb
      } = Sb.gameBridge.latest("connectedGame");
      return {
        gsUrl: FO.clientSideServerUrls.getHttpUrlFromWebSocketUrl(bb),
        gameNameWithVariation: ub,
        lobbyName: hb
      }
    }
    async function kO(bb) {
      const {
        gsUrl: ub,
        gameNameWithVariation: hb,
        lobbyName: Bb
      } = fO();
      return await (0, lO.postBinaryWithMetricsCookiesAndCustomResponse)(`${ub}/code/schematics`, AO.Nj.schematics.toBuffer({
        gameNameWithVariation: hb,
        lobbyName: Bb,
        request: JSON.stringify(bb)
      }), {
        retries: 0
      }, lO.HttpPayloadType.json)
    }
    var TO = hb(35975);

    function cO(bb) {
      let {
        path: ub,
        revision: hb
      } = bb;
      const [Bb, Gb] = (0, Ob.useState)(""), [Ub, Lb] = (0, Ob.useState)(!1), [Yb, Sb] = (0, Ob.useState)(0);
      return (0, Ob.useEffect)((() => {
        let bb = !1;
        return Gb(""), Lb(!1), kO({
          action: "preview",
          path: ub
        }).then((ub => {
          bb || Gb(`data:image/webp;base64,${ub.previewBase64}`)
        })).catch((ub => {
          console.error("Could not load schematic preview", ub), bb || Lb(!0)
        })), () => {
          bb = !0
        }
      }), [ub, hb, Yb]), (0, ab.jsxs)("div", {
        className: "SchematicPreview",
        children: [Bb && (0, ab.jsx)("img", {
          src: Bb,
          alt: `Preview of ${ub}`
        }), !Bb && !Ub && (0, ab.jsx)(xb.c, {
          loaderType: "Secondary"
        }), Ub && (0, ab.jsxs)(ab.Fragment, {
          children: [(0, ab.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, ab.jsx)(Zb.e, {
            onClick: () => {
              Sb(Yb + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function QO(bb) {
      var ub;
      let {
        initialPath: hb,
        onChanged: Bb,
        onClose: Gb
      } = bb;
      const Ub = "" === hb,
        [Lb, Yb] = (0, Ob.useState)(null),
        [Sb, Hb] = (0, Ob.useState)(hb),
        [wb, Xb] = (0, Ob.useState)(!1),
        [pb, ob] = (0, Ob.useState)(!1),
        [Ab, lb] = (0, Ob.useState)(null),
        [Kb, Wb] = (0, Ob.useState)(!1),
        [Cb, db] = (0, Ob.useState)(""),
        rb = (0, Ob.useRef)(null),
        jb = (0, Ob.useRef)(!1),
        nb = (0, Ob.useRef)(!0);
      (0, Ob.useEffect)((() => (nb.current = !0, kO({
        action: "state"
      }).then((bb => {
        nb.current && Yb(bb)
      })).catch((bb => {
        console.error("Could not load schematic assets", bb), nb.current && db("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        nb.current = !1
      })), []);
      const Db = null === Lb || void 0 === Lb ? void 0 : Lb.assets[hb],
        xb = Object.keys(null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.assets) && void 0 !== ub ? ub : {}).length,
        zb = Sb.trim(),
        gb = zb ? (0, zO.d)(zb) ? null !== Lb && void 0 !== Lb && Lb.assets[zb] && (Ub || zb !== hb) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        ib = !!zb && !gb && (Ub ? xb < zO.e : zb !== hb),
        vb = Kb || !Lb;
      async function tb(bb) {
        if (!jb.current && nb.current) {
          jb.current = !0, Wb(!0), db("");
          try {
            const ub = await kO({
              ...bb,
              expectedRevision: Lb.revision
            });
            Bb(ub), nb.current && Gb()
          } catch (hb) {
            var ub;
            if (console.error("Schematic asset operation failed", hb), nb.current) db(hb instanceof yb.b ? null !== (ub = hb.errorMessageForUser) && void 0 !== ub ? ub : hb.message : String(hb));
            try {
              const bb = await kO({
                action: "state"
              });
              Bb(bb), nb.current && Yb(bb)
            } catch (Ob) {
              console.error("Could not refresh schematic assets", Ob)
            }
          } finally {
            jb.current = !1, nb.current && Wb(!1)
          }
        }
      }
      return (0, ab.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, ab.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Ub ? "New schematic" : wb ? "Rename schematic" : "Schematic"
        }), Cb && (0, ab.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Cb
        }), !Lb && !Cb && (0, ab.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, ab.jsxs)("fieldset", {
          disabled: vb,
          children: [Ub || wb ? (0, ab.jsxs)("label", {
            className: "SchematicField",
            children: [(0, ab.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, ab.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, ab.jsx)(Jh.b, {
                className: "InputGenericPopupInput",
                defaultValue: hb,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Hb
              }, wb ? "rename" : "create")
            })]
          }) : (0, ab.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: hb
          }), (Ub || wb) && gb && (0, ab.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: gb
          }), Ub ? (0, ab.jsxs)(ab.Fragment, {
            children: [xb >= zO.e && (0, ab.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", zO.e, " maximum)."]
            }), pb ? (0, ab.jsxs)(ab.Fragment, {
              children: [(0, ab.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, ab.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": vb || !ib,
                children: (0, ab.jsx)(TO.c, {
                  loading: null === Ab,
                  schematics: null !== Ab && void 0 !== Ab ? Ab : [],
                  disableAutoExport: !0,
                  onSchematicPicked: bb => {
                    !vb && ib && tb({
                      action: "profile",
                      path: zb,
                      schematicId: bb.schematicId
                    })
                  }
                })
              }), (0, ab.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, ab.jsx)(Zb.e, {
                  className: "InputGenericPopupButton",
                  disabled: vb,
                  onClick: () => {
                    ob(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, ab.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, ab.jsx)(Zb.e, {
                className: "InputGenericPopupButton",
                disabled: vb || !ib,
                onClick: () => {
                  rb.current.click()
                },
                children: "Upload Schematic"
              }), (0, ab.jsx)(Zb.e, {
                className: "InputGenericPopupButton",
                disabled: vb || !ib,
                onClick: () => {
                  !async function() {
                    if (ob(!0), db(""), !Ab) try {
                      const bb = await (0, lO.postJsonWithMetricsCookiesAndJsonResponse)(`${FO.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      nb.current && lb(bb)
                    } catch (bb) {
                      console.error("Could not load profile schematics", bb), nb.current && (ob(!1), db("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, ab.jsx)("input", {
              ref: rb,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: bb => {
                var ub;
                const hb = null === (ub = bb.target.files) || void 0 === ub ? void 0 : ub[0];
                if (bb.target.value = "", !hb) return;
                if (hb.size > zO.i) return void db("The schematic file is too large.");
                const Bb = zb;
                Wb(!0);
                const Ob = new FileReader;
                Ob.onload = () => {
                  tb({
                    action: "upload",
                    path: Bb,
                    base64: String(Ob.result).split(",")[1]
                  })
                }, Ob.onerror = () => {
                  console.error("Could not read schematic file", Ob.error), nb.current && (Wb(!1), db("Could not read the selected file."))
                }, Ob.readAsDataURL(hb)
              }
            })]
          }) : Db ? (0, ab.jsxs)(ab.Fragment, {
            children: [!wb && (0, ab.jsx)(cO, {
              path: hb,
              revision: Lb.revision
            }), !wb && (0, ab.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Db.byteSize / 1024), " KB \xb7 ", Db.dimensions.join(" \xd7 "), " blocks"]
            }), (0, ab.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: wb ? (0, ab.jsxs)(ab.Fragment, {
                children: [(0, ab.jsx)(Zb.e, {
                  className: "InputGenericPopupButton",
                  disabled: vb || !ib,
                  onClick: () => {
                    tb({
                      action: "rename",
                      path: hb,
                      newPath: zb
                    })
                  },
                  children: "Rename"
                }), (0, ab.jsx)(Zb.e, {
                  className: "InputGenericPopupButton",
                  disabled: vb,
                  onClick: () => {
                    Xb(!1), Hb(hb)
                  },
                  children: "Cancel"
                })]
              }) : (0, ab.jsxs)(ab.Fragment, {
                children: [(0, ab.jsx)(Zb.e, {
                  className: "InputGenericPopupButton",
                  disabled: vb,
                  onClick: () => {
                    Xb(!0)
                  },
                  children: "Rename"
                }), (0, ab.jsx)(Zb.H, {
                  className: "InputGenericPopupButton",
                  disabled: vb,
                  onClick: () => {
                    tb({
                      action: "remove",
                      path: hb
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : Lb && (0, ab.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function RO(bb) {
      if ("string" !== typeof bb) return null;
      try {
        const ub = JSON.parse(bb);
        return (0, CO.k)(null === ub || void 0 === ub ? void 0 : ub.worldCodeEngine) && "boolean" === typeof ub.engineLocked && function(bb) {
          if (null === bb) return !0;
          const ub = null === bb || void 0 === bb ? void 0 : bb.location;
          return "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.reason) && (null === ub || "string" === typeof(null === ub || void 0 === ub ? void 0 : ub.path) && Number.isInteger(ub.line))
        }(ub.fallback) ? ub : (console.error("[CodeCollab] Malformed engine settings", bb), null)
      } catch (ub) {
        return console.error("[CodeCollab] Failed to parse engine settings", ub), null
      }
    }

    function bG(bb) {
      let {
        fallback: ub,
        onGoToLine: hb
      } = bb;
      const {
        t: Bb
      } = (0, kb.K)(), {
        location: Ob
      } = ub;
      return (0, ab.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Bb("codeEditorEngine:notice", {
          reason: ub.reason
        }), Ob && (0, ab.jsxs)(ab.Fragment, {
          children: [" ", (0, ab.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              hb(Ob.path, Ob.line)
            },
            children: Bb("codeEditorEngine:goToLine", {
              line: String(Ob.line)
            })
          })]
        })]
      })
    }
    var uG = hb(4700),
      hG = hb(4123),
      BG = hb(36519);

    function OG(bb) {
      let {
        label: ub,
        hint: hb,
        checked: Bb,
        onChange: Ob
      } = bb;
      return (0, ab.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, ab.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, ab.jsx)("span", {
            children: ub
          }), (0, ab.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: hb
          })]
        }), (0, ab.jsx)("span", {
          className: "SwitchContainer",
          children: (0, ab.jsx)(hG.d, {
            className: "SwitchCheckbox",
            checked: Bb,
            onChange: bb => {
              Ob(bb.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function GG(bb) {
      let {
        engine: ub,
        onSetEngine: hb,
        aiHints: Bb,
        variation: Ob
      } = bb;
      const {
        t: Gb
      } = (0, kb.K)(), [Ub, Lb] = (0, BG.o)(BG.i);
      return (0, ab.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, ab.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: Gb("codeEditor:moreOptions")
        }), ub && (0, ab.jsx)(OG, {
          label: Gb("codeEditorEngine:toggle"),
          hint: Gb("codeEditorEngine:toggleHint"),
          checked: "ses" === ub,
          onChange: bb => {
            hb(bb ? "ses" : "quickjs")
          }
        }), Bb && (0, ab.jsx)(OG, {
          label: Gb("codeEditorAiHints:toggle"),
          hint: Gb("codeEditorAiHints:toggleHint"),
          checked: Bb.shown,
          onChange: Bb.setShown
        }), Bb && BG.i.canChange && (0, ab.jsx)(OG, {
          label: Gb("codeEditorAiKeySafetyCheck:toggle"),
          hint: Gb("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: Ub,
          onChange: bb => {
            bb ? Lb(!0) : TB.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((bb => {
              !0 === bb && Lb(!1)
            }))
          }
        }), Ob && (0, ab.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, ab.jsx)(uG.g, {
            label: "codeEditor:variationLabel",
            children: (0, ab.jsx)(Jh.b, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Ob.name,
              onValueChange: Ob.setName,
              onEnter: Ob.reload
            })
          }), (0, ab.jsx)(Zb.v, {
            className: "CodeEditorButton",
            onClick: Ob.reload,
            children: Gb("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var UG = hb(36527),
      LG = hb(36533);

    function YG(bb) {
      let {
        close: ub
      } = bb;
      const {
        t: hb
      } = (0, kb.K)(), Bb = [{
        name: hb("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: hb("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: hb("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, ab.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, ab.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: hb("codeEditor:tutorialsTitle")
        }), (0, ab.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Bb.map((bb => (0, ab.jsx)(Zb.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              ub(), (0, LG.C)(bb.tutorial)
            },
            children: bb.name
          }, bb.tutorial)))
        })]
      })
    }
    var SG = hb(101),
      aG = hb(36159),
      HG = hb(8502);
    const wG = (0, Ob.forwardRef)((function(bb, ub) {
      let {
        value: hb,
        onChange: Bb,
        onSubmit: Ob,
        placeholder: Gb,
        maxLength: Ub,
        rows: Lb = 2,
        allowNewLines: Yb = !1,
        onKeyDown: Sb,
        before: Hb
      } = bb;
      const {
        t: wb
      } = (0, kb.K)(), Xb = "" !== hb.trim(), pb = () => {
        Xb && Ob()
      };
      return (0, ab.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Hb, (0, ab.jsx)("textarea", {
          ref: ub,
          className: "PanelPromptInput",
          value: hb,
          maxLength: Ub,
          rows: Lb,
          placeholder: Gb,
          spellCheck: !1,
          autoComplete: "off",
          onChange: bb => {
            Bb(Yb ? bb.target.value : bb.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: bb => {
            bb.nativeEvent.isComposing || 229 === bb.nativeEvent.keyCode ? bb.stopPropagation() : "Escape" !== bb.key && (bb.stopPropagation(), null === Sb || void 0 === Sb || Sb(bb), bb.defaultPrevented || "Enter" !== bb.key || Yb && bb.shiftKey || (bb.preventDefault(), pb()))
          }
        }), (0, ab.jsx)(Zb.e, {
          className: "PanelPromptSend",
          disabled: !Xb,
          onClick: pb,
          ariaLabel: wb("codeEditorPanels:send"),
          children: (0, ab.jsx)(ob.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function ZG(bb) {
      let {
        inputRef: ub
      } = bb;
      const {
        t: hb
      } = (0, kb.K)(), {
        messages: Bb,
        reportedPlayers: Gb,
        channel: Ub
      } = (0, HG.i)(), [Lb, Yb] = (0, Ob.useState)(""), Sb = (0, Ob.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, ab.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, ab.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, ab.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: hb("codeEditorChat:title")
          })
        }), 0 === Bb.length ? (0, ab.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: hb("codeEditorChat:empty")
        }) : (0, ab.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, ab.jsx)(aG.c, {
            messages: Bb,
            reportedPlayers: Gb
          })
        }), (0, ab.jsx)(wG, {
          ref: ub,
          value: Lb,
          onChange: Yb,
          onSubmit: () => {
            (0, HG.f)(Lb), Yb(""), Sb.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: nb.Yc,
          rows: 1,
          placeholder: Ub ? hb("touchOnly" === (0, SG.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: Ub.channelName
          }) : hb("codeEditorChat:placeholder"),
          before: Ub && (0, ab.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: Ub.elementBgColor
            },
            onClick: () => {
              HG.b.selectNextChannel(), ub.current.focus()
            },
            children: (0, ab.jsx)(rb.c, {
              text: Ub.elementContent
            })
          }),
          onKeyDown: bb => {
            const ub = Lb === Sb.current.text;
            if ("ArrowUp" !== bb.key && "ArrowDown" !== bb.key || !ub && "" !== Lb) "Tab" === bb.key && !bb.shiftKey && Ub && (bb.preventDefault(), HG.b.selectNextChannel());
            else {
              bb.preventDefault();
              const hb = ub ? Sb.current.stepsBack : 0;
              Sb.current = (0, HG.d)(hb + ("ArrowUp" === bb.key ? 1 : -1)), Yb(Sb.current.text)
            }
          }
        })]
      })
    }
    var XG = hb(36541);

    function pG(bb) {
      return "expanded" === bb ? "always" : "shown" === bb ? "narrow" : void 0
    }

    function oG(bb) {
      var ub;
      let {
        eH: hb,
        worldPanel: Bb,
        closeWorld: Ob,
        aiShown: Gb,
        defaultWidth: Ub,
        children: Lb
      } = bb;
      const Yb = "hidden" !== hb;
      return (0, ab.jsx)(XG.b, {
        side: "right",
        defaultSize: Yb ? "max(18rem, 40%)" : Ub,
        covers: null !== (ub = pG(hb)) && void 0 !== ub ? ub : Gb ? "narrow" : void 0,
        children: (0, ab.jsxs)("div", {
          className: Kh()("CodeEditorRightColumn", {
            WorldShown: Yb,
            WorldExpanded: "expanded" === hb
          }),
          children: [Yb && (0, ab.jsx)(XG.b, {
            side: "top",
            onClose: Ob,
            children: Bb
          }), Lb]
        })
      })
    }
    var AG = hb(1865),
      lG = hb(1027),
      KG = hb(1193);
    class WG {
      constructor(bb, ub, hb) {
        this.measure = bb, this.apply = ub, this.now = hb, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var bb, ub;
        return null !== (bb = null === (ub = this.last) || void 0 === ub ? void 0 : ub.rect) && void 0 !== bb ? bb : null
      }
      sync() {
        const bb = function(bb) {
          const ub = Math.round(bb.left),
            hb = Math.round(bb.top);
          return {
            left: ub,
            top: hb,
            width: Math.round(bb.right) - ub,
            height: Math.round(bb.bottom) - hb
          }
        }(this.measure());
        if (bb.width <= 0 || bb.height <= 0) return;
        const ub = this.now(),
          hb = this.last;
        let Bb = {
          width: bb.width,
          height: bb.height
        };
        null === hb || bb.width === hb.rect.width && bb.height === hb.rect.height || (this.resizing = ub - this.resizedAt < 100, this.resizedAt = ub);
        const Ob = null !== hb && this.resizing && ub - this.resizedAt < 100 && (bb.width !== hb.bufferSize.width || bb.height !== hb.bufferSize.height);
        Ob && (this.stretchedAt ??= ub), Ob && ub - this.stretchedAt < 250 ? Bb = hb.bufferSize : this.stretchedAt = null;
        const Gb = {
          rect: bb,
          bufferSize: Bb
        };
        var Ub, Lb;
        null !== hb && (Lb = Gb, (Ub = hb).rect.left === Lb.rect.left && Ub.rect.top === Lb.rect.top && Ub.rect.width === Lb.rect.width && Ub.rect.height === Lb.rect.height && Ub.bufferSize.width === Lb.bufferSize.width && Ub.bufferSize.height === Lb.bufferSize.height) || (this.last = Gb, this.apply(Gb))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function CG(bb) {
      const {
        style: ub
      } = document.documentElement;
      for (const [hb, Bb] of [
          ["--worldViewLeft", null === bb || void 0 === bb ? void 0 : bb.left],
          ["--worldViewTop", null === bb || void 0 === bb ? void 0 : bb.top],
          ["--worldViewWidth", null === bb || void 0 === bb ? void 0 : bb.width],
          ["--worldViewHeight", null === bb || void 0 === bb ? void 0 : bb.height]
        ]) void 0 === Bb ? ub.removeProperty(hb) : ub.setProperty(hb, `${Bb}px`)
    }
    var dG = hb(1622),
      rG = hb(1879);

    function jG(bb, ub) {
      (0, Ob.useEffect)((() => {
        if (!bb) return;
        const hb = bb => {
          var hb;
          "Escape" === bb.key ? (bb.stopPropagation(), bb.preventDefault(), ub()) : (hb = bb.code, Object.entries(Eu.r).some((bb => {
            let [ub, Bb] = bb;
            const Ob = rG.g[ub];
            return Ob.includes("ui") && !Ob.includes("core") && Bb.includes(hb)
          })) && !(0, dG.isTextEntry)(bb.target) && bb.preventDefault())
        };
        window.addEventListener("keydown", hb, !0);
        const Bb = (0, Ib.p)(ub);
        return () => {
          window.removeEventListener("keydown", hb, !0), Bb()
        }
      }), [bb, ub])
    }

    function nG() {
      return (0, UO.h)().some((bb => bb !== UO.b))
    }

    function DG(bb, ub) {
      return bb.map((bb => ub ? String(bb) : bb.toFixed(1))).join(", ")
    }

    function xG(bb) {
      let {
        freeCamera: ub,
        picking: hb,
        hovered: Bb
      } = bb;
      const {
        t: Gb
      } = (0, kb.K)(), Ub = (0, Ob.useRef)(null), Lb = (0, Ob.useRef)(null);
      return (0, Ob.useEffect)((() => {
        const bb = (bb, ub) => {
            bb.textContent !== ub && (bb.textContent = ub)
          },
          hb = () => {
            const hb = ub ? Sb.gameBridge.lookup("freeCameraPos", null) : null;
            bb(Ub.current, DG(null !== hb && void 0 !== hb ? hb : Sb.gameBridge.lookup("localPos", null), !1));
            const Bb = Sb.gameBridge.lookup("targetedBlockPos", null);
            bb(Lb.current, Bb ? DG(Bb, !0) : "-")
          };
        return hb(), (0, KG.w)(hb)
      }), [ub]), (0, ab.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, ab.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Gb(ub ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, ab.jsx)("span", {
          ref: Ub
        }), (0, ab.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: Gb("codeEditorWorld:lookingAt")
        }), (0, ab.jsx)("span", {
          ref: Lb,
          hidden: hb
        }), hb && (0, ab.jsxs)(ab.Fragment, {
          children: [(0, ab.jsx)("span", {
            children: Bb ? DG(Bb.pos, !0) : "-"
          }), Bb && (0, ab.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: Bb.name
          })]
        })]
      })
    }
    var zG = hb(36549);

    function gG(bb) {
      const ub = bb.currentTarget.getBoundingClientRect();
      return {
        x: (bb.clientX - ub.left) / ub.width,
        y: (bb.clientY - ub.top) / ub.height
      }
    }

    function iG(bb) {
      const [ub, hb] = (0, Ob.useState)(!1), [Bb, Gb] = (0, Ob.useState)(null), Ub = (0, Ob.useRef)(null);
      (0, Ob.useEffect)((() => {
        if (!ub) return;
        let bb = null,
          hb = null,
          Bb = 1 / 0;
        const Ob = (0, KG.s)((ub => {
          Bb += ub;
          const Ob = Ub.current;
          if (Ob === hb && Bb < 100) return;
          hb = Ob, Bb = 0;
          const Lb = Ob && Sb.gameBridge.lookup("blockAtViewPoint", Ob);
          var Yb, ab;
          (Yb = Lb) === (ab = bb) || null !== Yb && null !== ab && Yb.name === ab.name && (0, zG.h)(Yb.pos, ab.pos) && (0, zG.h)(Yb.normal, ab.normal) || (bb = Lb, Gb(Lb), Sb.gameBridge.send("setBlockHighlight", Lb))
        }));
        return () => {
          Ob(), null !== bb && Sb.gameBridge.send("setBlockHighlight", null), Gb(null)
        }
      }), [ub]);
      const Lb = (0, Ob.useCallback)((() => {
        hb(!1)
      }), []);
      jG(ub, Lb);
      const Yb = {
        onPointerMove: bb => {
          Ub.current = gG(bb)
        },
        onPointerLeave: () => {
          Ub.current = null
        },
        onClick: Bb => {
          if (!ub) return;
          const Ob = Sb.gameBridge.lookup("blockAtViewPoint", gG(Bb));
          null !== Ob && (hb(!1), bb(Ob.pos))
        }
      };
      return {
        picking: ub,
        setPicking: hb,
        hovered: Bb,
        slotHandlers: Yb
      }
    }

    function vG(bb) {
      Sb.gameBridge.send("setFreeCameraMovesFly", bb)
    }

    function tG(bb) {
      let {
        shown: ub,
        setShown: hb,
        canInsertCode: Bb
      } = bb;
      const {
        t: Gb
      } = (0, kb.K)(), {
        isTouchScreen: Ub
      } = (0, mb.j)(["isTouchScreen"]), Lb = (0, Ob.useRef)(null), Sb = (0, Ob.useCallback)((() => {
        var bb;
        null === (bb = Lb.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === bb || bb.focus()
      }), []), {
        control: Hb,
        take: wb,
        release: pb,
        blocked: Ab
      } = function(bb) {
        const [ub, hb] = (0, Ob.useState)("none"), Bb = (0, Ob.useRef)("none"), [Gb, Ub] = (0, Ob.useState)(!1), Lb = bb => {
          Bb.current = bb, hb(bb)
        }, Yb = (0, Ob.useCallback)((() => {
          const ub = Bb.current;
          "none" !== ub && (Lb("none"), (0, UO.l)(UO.b), "mouse" === ub && bb())
        }), [bb]), Sb = (0, Ob.useCallback)((bb => {
          nG() ? Ub(!0) : (Lb("mouse" === bb && "touchOnly" !== (0, SG.b)() ? "mouse" : "touch"), (0, UO.j)(UO.b))
        }), []);
        return (0, jb.h)("pointerLockUpdate", (bb => {
          bb && "touch" === Bb.current && "touchOnly" !== (0, SG.b)() ? Lb("mouse") : bb || "mouse" !== Bb.current || Yb()
        })), (0, Ob.useEffect)((() => {
          if (!Gb) return;
          const bb = () => {
            nG() || Ub(!1)
          };
          return bb(), (0, UO.c)(bb)
        }), [Gb]), jG("none" !== ub, Yb), (0, Ob.useEffect)((() => {
          if ("none" === ub) return;
          const bb = bb => {
            (0, dG.isTextEntry)(bb.target) && Yb()
          };
          return document.addEventListener("focusin", bb), () => {
            document.removeEventListener("focusin", bb)
          }
        }), [ub, Yb]), (0, Ob.useEffect)((() => (document.addEventListener("pointerlockerror", Yb), () => {
          document.removeEventListener("pointerlockerror", Yb)
        })), [Yb]), (0, Ob.useEffect)((() => () => {
          "none" !== Bb.current && null !== mb.d.get("openInGameMenuName") && (0, UO.l)(UO.b)
        }), []), {
          control: ub,
          take: Sb,
          release: Yb,
          blocked: Gb
        }
      }(Sb), lb = (0, lG.i)(XG.f);
      (0, Ob.useEffect)((() => {
        "touch" !== Hb || "shown" !== ub || lb ? "none" === Hb && "expanded" === ub && hb("shown") : hb("expanded")
      }), [Hb, lb]),
      function(bb, ub) {
        const hb = (0, Ob.useRef)(ub);
        hb.current = ub;
        const Bb = (0, Ob.useRef)(null);
        (0, Ob.useLayoutEffect)((() => {
          const ub = new WG((() => bb.current.getBoundingClientRect()), (bb => {
            var ub;
            "none" !== hb.current && CG(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.rect) && void 0 !== ub ? ub : null), (0, KG.D)().setGameView(bb)
          }), (() => performance.now()));
          Bb.current = ub, ub.sync();
          const Ob = (0, KG.p)((() => {
            ub.sync()
          }));
          return () => {
            Ob(), mb.d.set({
              worldPanelHud: null
            }), ub.stop()
          }
        }), [bb]), (0, Ob.useLayoutEffect)((() => {
          Bb.current.sync(), CG("none" === ub ? null : Bb.current.rect), mb.d.set({
            worldPanelHud: ub
          })
        }), [ub])
      }(Lb, "touch" === Hb ? "touchControls" : "none");
      const {
        picking: Kb,
        setPicking: Wb,
        hovered: Cb,
        slotHandlers: db
      } = iG((bb => {
        Xb.i.vp("CodeEditorInsertText", {
          text: `[${bb.join(", ")}]`,
          focus: !Ub
        }), (0, XG.f)() && hb("hidden")
      })), rb = function() {
        const {
          allowed: bb,
          movesFly: ub
        } = (0, Db.i)("freeCamera"), hb = (0, Ob.useRef)(ub), Bb = (0, Ob.useRef)(ub);
        return Bb.current !== ub && (Bb.current = ub, hb.current = ub), (0, Ob.useEffect)((() => () => {
          hb.current && vG(!1)
        }), []), {
          allowed: bb,
          on: ub,
          toggle: () => {
            hb.current = !ub, vG(!ub)
          }
        }
      }(), nb = (0, Yb.f)("hideCoordinates"), xb = (0, Db.i)("localPlayerAlive"), zb = !xb || Ab;
      (0, Ob.useEffect)((() => {
        xb || pb()
      }), [xb, pb]), (0, Ob.useEffect)((() => {
        !zb && Bb || Wb(!1)
      }), [zb, Bb, Wb]);
      const gb = rb.on ? Zb.m : Zb.e,
        ib = Kb ? Zb.m : Zb.e;
      return (0, ab.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, ab.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, ab.jsx)("span", {
            className: "WorldPanelTitle",
            children: Gb("codeEditorWorld:title")
          }), "touch" === Hb && !lb && (0, ab.jsx)(Zb.e, {
            className: "WorldPanelButton",
            onClick: pb,
            children: Gb("codeEditorWorld:backToCode")
          }), !zb && rb.allowed && !Ub && (0, ab.jsx)(Fb.d, {
            tooltipInner: Gb("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, ab.jsx)(gb, {
              className: "WorldPanelButton",
              ariaPressed: rb.on,
              ariaLabel: Gb("codeEditorWorld:freeCamera"),
              onClick: rb.toggle,
              children: (0, ab.jsx)(ob.e, {
                name: "video"
              })
            })
          }), !zb && Bb && (0, ab.jsx)(Fb.d, {
            tooltipInner: Gb("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, ab.jsxs)(ib, {
              className: "WorldPanelButton",
              ariaPressed: Kb,
              onClick: () => {
                pb(), Wb(!Kb)
              },
              children: [(0, ab.jsx)(ob.e, {
                name: "crosshairs"
              }), Gb("codeEditorWorld:pick")]
            })
          })]
        }), !nb && (0, ab.jsx)(xG, {
          freeCamera: rb.on,
          picking: Kb,
          hovered: Cb
        }), (0, ab.jsxs)("div", {
          ref: Lb,
          className: Kh()("WorldPanelSlot", {
            TouchControl: "touch" === Hb,
            Picking: Kb
          }),
          onPointerDown: bb => {
            0 !== bb.button || zb || Kb || wb(bb.pointerType)
          },
          ...db,
          children: [!zb && !Kb && (0, ab.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !zb && "touch" !== Hb && (0, ab.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Kb && Gb(Ub ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Kb && "none" === Hb && !rb.on && Gb(Ub ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Kb && "none" === Hb && rb.on && Gb("codeEditorWorld:clickToFly"), "mouse" === Hb && (0, ab.jsxs)(ab.Fragment, {
              children: [(0, ab.jsx)(AG.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), Gb("codeEditorWorld:backToCode")]
            })]
          }), zb && (0, ab.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, ab.jsx)("span", {
              children: Gb(xb ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, ab.jsx)(Zb.e, {
              onClick: Ib.i,
              children: Gb("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var JG = hb(4791);

    function eG(bb) {
      let {
        eH: ub,
        setWorld: hb,
        toggleWorld: Bb,
        aiShown: Ob,
        closeAi: Gb
      } = bb;
      const {
        t: Ub
      } = (0, kb.K)(), Lb = Ob ? "ai" : "hidden" !== ub ? "world" : "code", Yb = [{
        value: "code",
        label: Ub("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: Ub("codeEditorWorld:title")
      }];
      Ob && Yb.push({
        value: "ai",
        label: Ub("codeEditorWorld:aiPane")
      });
      return (0, ab.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, ab.jsx)(JG.c, {
          options: Yb,
          value: Lb,
          onChange: bb => {
            "world" !== bb ? (Ob && Gb(), hb("hidden")) : "hidden" === ub ? Bb() : Gb()
          },
          ariaLabel: Ub("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var NG = hb(36551),
      sG = hb(36559),
      MG = hb(36567),
      mG = hb(36573);
    const IG = (0, Ob.lazy)((() => Promise.all([hb.e(290), hb.e(286), hb.e(289), hb.e(285), hb.e(82), hb.e(288), hb.e(287), hb.e(284)]).then((() => hb(40753))))),
      PG = (0, Ob.lazy)((() => Promise.all([hb.e(77), hb.e(80), hb.e(81), hb.e(79), hb.e(292)]).then((() => hb(40912))))),
      qG = (0, Ob.lazy)((() => Promise.all([hb.e(290), hb.e(289), hb.e(82), hb.e(80), hb.e(81), hb.e(79), hb.e(288), hb.e(287), hb.e(78), hb.e(89)]).then((() => hb(40918)))));

    function EG(bb) {
      return Sb.gameBridge.query("worldCodeAiChunk", bb)
    }

    function yG() {
      return Sb.gameBridge.query("worldCodeAiGameState", null)
    }

    function VG(bb) {
      const {
        gsUrl: ub,
        gameNameWithVariation: hb,
        lobbyName: Bb
      } = fO();
      return (0, lO.postJsonWithMetricsCookiesAndJsonResponse)(`${ub}/code/get-lobby-code`, AO.Nj["get-lobby-code"].toBuffer({
        gameNameWithVariation: hb,
        lobbyName: Bb,
        path: bb
      }), {
        retries: 1
      })
    }
    let FG = !1;
    const fG = [],
      kG = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      TG = (0, Ob.memo)((function(bb) {
        var ub, hb;
        let {
          show: Bb,
          onOpen: Gb,
          onClose: Lb,
          isLobbyCode: Hb
        } = bb;
        const wb = (0, Ob.useRef)(""),
          [pb, Ab] = (0, Ob.useState)(null),
          lb = (0, Ob.useRef)(Hb),
          [Kb, Wb] = (0, Ob.useState)({
            message: null,
            type: null
          }),
          [Cb, db] = (0, Ob.useState)(""),
          rb = Kb.message ? Kb : {
            message: Cb,
            type: "warning"
          },
          [zb, gb] = (0, Ob.useState)(!0),
          [ib, tb] = (0, BG.o)(BG.k),
          [Jb, eb] = (0, BG.o)(BG.e),
          [Nb, sb] = (0, Ob.useState)(!1),
          [Mb, Pb] = (0, Ob.useState)(!1),
          qb = (0, Ob.useRef)(null),
          Eb = (0, Ob.useRef)(!1);
        (0, Ob.useEffect)((() => {
          var bb;
          Mb && Eb.current && (Eb.current = !1, null === (bb = qb.current) || void 0 === bb || bb.focus())
        }), [Mb]);
        const yb = (0, NG.d)(),
          Vb = (0, Ob.useRef)(null),
          fb = (0, Ob.useRef)(null),
          {
            openInGameMenuName: Tb,
            openEverythingMenuName: cb,
            worldPanelHud: Qb
          } = (0, mb.j)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          Rb = bb => {
            Bb && (Vb.current = bb, Du.current = !0)
          };
        (0, jb.h)("OpenReportMenu", (() => {
          Rb("iZ")
        })), (0, jb.h)("OpenStoreFromCodeEditor", (() => {
          Rb("store")
        })), (0, Ob.useEffect)((() => {
          const bb = Vb.current;
          null === bb || "iZ" === bb && ("makeReport" === Tb || "makeDiscordReport" === Tb) || "store" === bb && null !== cb || (Vb.current = null, null === Tb && null === cb ? Hb ? (fb.current = Bh.current, Xb.i.vp("EditLobbyCode", pb)) : Xb.i.vp("EditCodeBlock", {
            pos: pb,
            canChangePos: lb.current
          }) : (0, LG.x)())
        }), [Tb, cb, Hb, pb]), (0, Ob.useEffect)((() => {
          if (Bb) return () => {
            fb.current = null
          }
        }), [Bb]);
        const [bu, uu] = function() {
          const [bb, ub] = (0, Ob.useState)(FG);
          return (0, jb.h)("CodeEditorAiHelperShown", (bb => {
            ub(bb)
          })), [bb, (0, Ob.useCallback)((bb => {
            FG = bb, Xb.i.vp("CodeEditorAiHelperShown", bb)
          }), [])]
        }(), [hu, Bu] = (0, Ob.useState)(null), [Ou, Gu] = (0, Ob.useState)([]), [Uu, Lu] = (0, Ob.useState)(0), [Yu, Su] = (0, Ob.useState)(0), [au, Hu] = (0, Ob.useState)(""), Zu = (0, Ob.useRef)(null), [Xu, pu] = (0, Ob.useState)(Hb ? mG.g : null), ou = Hb || null !== pb, Au = (0, Yb.f)("canEditCode"), lu = (0, Yb.f)("canUseDevCreativeItems"), Ku = (0, UG.k)("welcome"), Wu = (0, UG.k)("docsOverview"), Cu = Wu ? "docsOverview" : "welcome", du = null !== Wu && void 0 !== Wu ? Wu : Ku, ru = (0, UG.k)("aiHelperOverview"), ju = ru ? "aiHelperOverview" : "welcome", nu = null !== ru && void 0 !== ru ? ru : Ku, Du = (0, Ob.useRef)(!1), xu = (0, Ob.useRef)(!1), zu = (0, Ob.useRef)(null), [gu, iu] = (0, Ob.useState)(""), [vu, tu] = (0, Ob.useState)(!1), [Ju, eu] = (0, Ob.useState)(null), Nu = (0, Db.i)("connectedGame"), su = Hb && Au && "classic" === Nu.gameNameWithVariation && !(0, wu.X)(Nu.lobbyName), [Mu, mu] = (0, Ob.useState)(null), [Iu, qu] = (0, Ob.useState)({
          [KO.m]: ""
        }), [yu, Vu] = (0, Ob.useState)({
          assets: {},
          revision: 0
        }), Fu = (0, Ob.useRef)(yu), fu = (0, Ob.useCallback)((bb => {
          var ub;
          bb.revision < Fu.current.revision || (Fu.current = bb, Vu(bb), db(bb.startupError ? `Schematics could not load: ${bb.startupError}` : ""), null === (ub = ph.current) || void 0 === ub || ub.onLobbyFilesChanged({
            ...Yh.current,
            ...(0, zO.k)(bb.assets)
          }))
        }), []), [ku, Tu] = (0, Ob.useState)(KO.m), [cu, Qu] = (0, Ob.useState)(null), [Ru, bh] = (0, Ob.useState)(null), uh = (0, Ob.useRef)(!1), hh = (0, Ob.useRef)(null), Bh = (0, Ob.useRef)(ku);
        Bh.current = ku;
        const Oh = (0, Ob.useRef)(cu);
        Oh.current = cu;
        const Gh = cu ? null : Ju,
          Uh = Gh && !Gh.engineLocked ? Gh.worldCodeEngine : null,
          Lh = (0, Ob.useRef)(Ru);
        Lh.current = Ru;
        const Yh = (0, Ob.useRef)(Iu);
        Yh.current = Iu;
        const Sh = (0, Ob.useRef)(null),
          ah = (0, Ob.useRef)(null),
          [Hh, wh] = (0, Ob.useState)(!1),
          Zh = (0, mO.o)(),
          Xh = (0, Ob.useRef)([]),
          ph = (0, Ob.useRef)(null),
          oh = (0, Ob.useRef)(null),
          Ah = (0, Ob.useRef)(null);

        function lh(bb) {
          Wb(bb), clearTimeout(zu.current), zu.current = setTimeout((() => {
            Wb({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const Wh = (0, Ob.useCallback)((function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            uh.current && hh.current && (Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.Leave,
              tu: (0, WO.s)(hh.current),
              WU: !!bb || null
            }), uh.current = !1, hh.current = null), mu(null)
          }), []),
          Ch = (0, Ob.useCallback)((bb => {
            const ub = {
              kind: "lobby",
              path: bb
            };
            hh.current = ub, Tu(bb), wb.current = "", Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.Join,
              tu: (0, WO.s)(ub)
            }), uh.current = !0
          }), []),
          dh = (0, Ob.useCallback)((bb => {
            var ub;
            const hb = null === (ub = oh.current) || void 0 === ub ? void 0 : ub.collabState;
            return hb && "lobby" === hb.docKey.kind && hb.docKey.path === bb && Bh.current === bb ? Promise.resolve({
              doc: hb.doc,
              version: hb.version,
              clientID: hb.clientID,
              docKey: hb.docKey,
              httpConfig: hb.httpConfig
            }) : new Promise(((ub, hb) => {
              const Bb = setTimeout((() => {
                  Xh.current = Xh.current.filter((bb => bb !== Ob)), hb(new Error(`Timed out joining ${bb}`))
                }), 15e3),
                Ob = hb => {
                  "lobby" === hb.docKey.kind && hb.docKey.path === bb && (clearTimeout(Bb), Xh.current = Xh.current.filter((bb => bb !== Ob)), ub(hb))
                };
              Xh.current.push(Ob), Bh.current !== bb ? (Wh(!0), Ch(bb)) : uh.current || Ch(bb)
            }))
          }), [Ch, Wh]),
          rh = (0, Ob.useCallback)((async function(bb, ub) {
            let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Bb = Date.now();
            let Ob = bb in Yh.current;
            for (; Ob !== ub;) {
              if (Date.now() - Bb > hb) throw new Error(`Timed out waiting for lobby path ${bb} present=${ub}`);
              await (0, lB.P)(50), Ob = bb in Yh.current
            }
          }), []),
          jh = (0, Ob.useCallback)((bb => {
            const ub = Yh.current,
              hb = KO.m in ub && KO.o in ub;
            if (!(0, CO.j)(bb) || hb) {
              if (Bh.current === bb) {
                var Bb;
                const Ob = hb && (0, CO.j)(bb) ? bb === KO.m ? KO.o : KO.m : null !== (Bb = (0, CO.d)(ub)) && void 0 !== Bb ? Bb : KO.m;
                ah.current = {
                  fromPath: bb,
                  toPath: Ob
                }, Tu(Ob)
              }
              Sb.gameBridge.send("sendCodeCollab", {
                vu: WO.b.DeleteFile,
                tu: (0, WO.s)({
                  kind: "lobby",
                  path: Bh.current
                }),
                CU: bb
              })
            }
          }), []),
          nh = (0, Ob.useCallback)((bb => {
            fb.current = null, Qu(null), bh(null), !Hb || bb === Bh.current && uh.current || (Wh(!0), Ch(bb))
          }), [Hb, Wh, Ch]),
          Dh = (0, Ob.useCallback)(((bb, ub) => {
            const hb = DO.f[bb],
              Bb = hb && ub in hb.files ? ub : "index.ts";
            if (bb !== Oh.current || Bb !== Lh.current) {
              var Ob;
              if (bb !== Oh.current) null === (Ob = ph.current) || void 0 === Ob || Ob.stopContinuousSync(), Wh(!0);
              Qu(bb), bh(Bb)
            }
          }), [Wh]),
          xh = (0, Ob.useCallback)((bb => {
            var ub;
            const hb = Bh.current,
              Bb = Yh.current[hb],
              Ob = uh.current && !Oh.current && hb in bb && void 0 !== Bb ? {
                ...bb,
                [hb]: Bb
              } : bb;
            qu(Ob);
            const Gb = Sh.current;
            if (Gb && Gb in bb) Sh.current = null, Gb !== Bh.current && nh(Gb);
            else if (!(Bh.current in bb) && uh.current && !Oh.current) {
              var Ub;
              nh(null !== (Ub = (0, CO.d)(bb)) && void 0 !== Ub ? Ub : KO.m)
            }
            null === (ub = ph.current) || void 0 === ub || ub.onLobbyFilesChanged({
              ...Ob,
              ...(0, zO.k)(Fu.current.assets)
            })
          }), [nh]),
          zh = (0, Ob.useCallback)((() => VG(Bh.current).then((async bb => {
            if (!uh.current || !bb.files) return null;
            xh(bb.files);
            const ub = await kO({
              action: "state"
            });
            return fu(ub), {
              ...bb.files,
              ...(0, zO.k)(ub.assets)
            }
          })).catch((bb => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", bb), lh({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [xh, fu]),
          gh = () => {
            Lb()
          };
        (0, Ob.useEffect)((() => {
          if (db(""), !Bb || !Hb) return;
          let bb = !1;
          return Fu.current = {
            assets: {},
            revision: 0
          }, Vu(Fu.current), kO({
            action: "state"
          }).then((ub => {
            bb || fu(ub)
          })).catch((ub => {
            console.error("Could not load project schematics", ub), bb || db("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            bb = !0
          }
        }), [Bb, Hb, fu]);
        const ih = (0, Ob.useCallback)((function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            hh.current && Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.Submit,
              tu: (0, WO.s)(hh.current),
              ...bb ? {
                Mu: "keepOpen"
              } : {}
            })
          }), []),
          vh = (0, Ob.useCallback)((() => {
            if (!hh.current || "lobby" !== hh.current.kind) return;
            const bb = gu.trim();
            (0, dO.q)(bb) ? (Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.ReloadAsVariation,
              tu: (0, WO.s)(hh.current),
              Mu: bb
            }), tu(!1)) : lh({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [gu]),
          th = (0, Ob.useCallback)((bb => {
            Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.SetEngine,
              tu: (0, WO.s)({
                kind: "lobby",
                path: Bh.current
              }),
              Mu: bb
            })
          }), []),
          Jh = (0, Ob.useCallback)((bb => {
            if (!Oh.current && Au && (lb.current || Hb)) {
              if (Hb) {
                var ub;
                const hb = (0, CO.p)(Yh.current, Bh.current),
                  Bb = Math.min(Pu.r, Math.max(0, Pu.w - hb)),
                  Ob = bb.slice(0, Bb);
                return wb.current = Ob, qu((bb => ({
                  ...bb,
                  [Bh.current]: Ob
                }))), void(null === (ub = ph.current) || void 0 === ub || ub.onDocTextChanged(Bh.current, Ob))
              }
              wb.current = bb, Hu(bb)
            }
          }), [Au, Hb]);
        (0, jb.h)("EditLobbyCode", (bb => {
          var ub;
          vb.featureFlags.canSeePlayerWrittenText && Hb && (Wh(), Ab(bb), wb.current = "", qu({
            [KO.m]: ""
          }), eu(null), Tu(KO.m), Qu(null), bh(null), Sh.current = null, ah.current = null, null === (ub = ph.current) || void 0 === ub || ub.stopContinuousSync(), Gb(), Ch(KO.m))
        })), (0, jb.h)("EditCodeBlock", (bb => {
          let {
            pos: ub,
            canChangePos: hb
          } = bb;
          if (vb.featureFlags.canSeePlayerWrittenText && !Hb)
            if (Wh(), null !== ub && (ub = [...ub]), Ab(ub), lb.current = hb, null !== ub) {
              wb.current = "", Hu(""), Gb();
              const bb = {
                  kind: "codeBlock",
                  pos: ub
                },
                Bb = (0, WO.s)(bb);
              Zu.current !== Bb && (Zu.current = Bb, Gu([]), Su(Uu)), pu((0, mG.c)(Bb, [ub[0], ub[1], ub[2]], !!hb)), hh.current = bb, Sb.gameBridge.send("sendCodeCollab", {
                vu: WO.b.Join,
                tu: (0, WO.s)(bb)
              }), uh.current = !0
            } else Bb && Lb()
        })), (0, jb.h)("codeCollabRejoin", (bb => {
          const ub = hh.current ? (0, WO.s)(hh.current) : null;
          ub && bb.docKey === ub && (wb.current = bb.doc, Hb || Hu(bb.doc), mu((ub => ub ? {
            ...ub,
            doc: bb.doc,
            version: bb.version,
            clientID: (0, nO.e)()
          } : ub)))
        })), (0, jb.h)("codeCollab", (bb => {
          var ub;
          const hb = hh.current ? (0, WO.s)(hh.current) : null;
          if (bb.type === WO.d.LobbyFilesChanged && Hb) {
            if ("string" !== typeof bb.files) return void zh();
            try {
              xh(JSON.parse(bb.files))
            } catch (Sb) {
              console.error("[CodeCollab] Failed to parse lobby files", Sb), zh()
            }
            return
          }
          if (bb.type === WO.d.EngineSettings && Hb) return void eu(RO(bb.engineSettings));
          const Ob = bb.type === WO.d.Joined ? (0, WO.i)(bb.docKey) : null,
            Gb = Hb && "lobby" === (null === (ub = hh.current) || void 0 === ub ? void 0 : ub.kind) && (0, CO.j)(hh.current.path) && "lobby" === (null === Ob || void 0 === Ob ? void 0 : Ob.kind) && (0, CO.j)(Ob.path);
          if (!hb || bb.docKey === hb || Gb)
            if (bb.type !== WO.d.ForceClose) {
              if (Bb)
                if (bb.type === WO.d.Joined) {
                  var Ub;
                  const ab = JSON.parse(bb.peers),
                    Zb = bb.existingCursors ? JSON.parse(bb.existingCursors) : [],
                    ob = (0, nO.e)(),
                    Ab = fO(),
                    {
                      gsUrl: lb,
                      gameNameWithVariation: Kb,
                      lobbyName: Cb
                    } = Ab,
                    db = null !== (Ub = (0, WO.i)(bb.docKey)) && void 0 !== Ub ? Ub : hh.current;
                  db && (hh.current = db, "lobby" === db.kind && (Tu(db.path), Bh.current = db.path));
                  const rb = db || (Hb ? {
                    kind: "lobby",
                    path: Bh.current
                  } : {
                    kind: "codeBlock",
                    pos: pb
                  });

                  function jb(ub) {
                    var hb, Bb;
                    if (!uh.current) return;
                    const Ob = null !== (hb = ub.code) && void 0 !== hb ? hb : "",
                      Gb = null !== (Bb = ub.collabVersion) && void 0 !== Bb ? Bb : 0;
                    wb.current = Ob, Hb || Hu(Ob), Hb && ub.files ? qu(ub.files) : Hb && qu((bb => ({
                      ...bb,
                      [Bh.current]: Ob
                    })));
                    const Ub = {
                      doc: Ob,
                      version: Gb,
                      clientID: ob,
                      docKey: rb,
                      peers: ab,
                      editorCount: bb.editorCount,
                      existingCursors: Zb,
                      httpConfig: Ab
                    };
                    if (mu(Ub), "lobby" === rb.kind) {
                      var Lb;
                      const bb = {
                        doc: Ob,
                        version: Gb,
                        clientID: ob,
                        docKey: rb,
                        httpConfig: Ab
                      };
                      for (const ub of [...Xh.current]) ub(bb);
                      null === (Lb = ph.current) || void 0 === Lb || Lb.startWhenReady()
                    }
                    ub.canSeeCode ? (clearTimeout(zu.current), Wb({
                      message: null,
                      type: null
                    })) : function(bb) {
                      clearTimeout(zu.current), Wb(bb)
                    }(kG);
                    const Yb = fb.current;
                    fb.current = null, Hb && Yb && ub.files && Yb in ub.files && Yb !== Bh.current && nh(Yb)
                  }
                  Hb ? VG(Bh.current).then(jb).catch((bb => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", bb), Wh()
                  })) : (0, lO.postJsonWithMetricsCookiesAndJsonResponse)(`${lb}/code/get-code-block`, AO.Nj["get-code-block"].toBuffer({
                    gameNameWithVariation: Kb,
                    lobbyName: Cb,
                    pos: pb
                  }), {
                    retries: 1
                  }).then(jb).catch((bb => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", bb), Wh()
                  }))
                } else if (bb.type === WO.d.Presence) {
                if (!hb) return;
                const nb = JSON.parse(bb.peers);
                mu((ub => ub ? {
                  ...ub,
                  peers: nb,
                  editorCount: bb.editorCount
                } : ub))
              }
            } else {
              var Yb;
              if (!hb) return;
              Bb && Hb && "keptOpen" === bb.updates && Xb.i.vp("CodeEditorKeepEdits");
              const Db = hh.current;
              uh.current = !1, hh.current = null, mu(null);
              if (!Hb || "close" === bb.updates) return (0, MG.j)(), void(Bb && Lb());
              if (!Bb) return;
              const xb = Yh.current,
                zb = ah.current;
              ah.current = null;
              const gb = "lobby" === (null === Db || void 0 === Db ? void 0 : Db.kind) && Db.path === (null === zb || void 0 === zb ? void 0 : zb.fromPath),
                ib = zb && (gb || zb.toPath in xb || (0, CO.j)(zb.toPath)) ? zb.toPath : Bh.current in xb ? Bh.current : null !== (Yb = (0, CO.d)(xb)) && void 0 !== Yb ? Yb : KO.m;
              Ch(ib)
            }
        })), (0, jb.h)("refetchCode", (() => {
          vb.featureFlags.canSeePlayerWrittenText && Bb && uh.current && (Au || (Wh(), Hb ? Xb.i.vp("EditLobbyCode", pb) : Xb.i.vp("EditCodeBlock", {
            pos: pb,
            canChangePos: lb.current
          })))
        }));
        const eh = (0, Ob.useCallback)((() => {
            Bb && (sb(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Bb]),
          Nh = (0, Ob.useCallback)((() => {
            sb(!1)
          }), []);
        (0, Ob.useEffect)((() => {
          Bb && Au && ("docsButton" === du && Nb ? (0, LG.h)("docsButton") : du && LG.j.includes(du) && !Nb && (sb(!0), uu(!1)))
        }), [Bb, Au, du, Nb, uu]);
        const sh = (0, Ob.useCallback)((() => {
          uu(!1)
        }), [uu]);
        (0, Ob.useEffect)((() => {
          Bb && Au && ou && ("aiHelperButton" === nu && bu ? (0, LG.h)("aiHelperButton") : nu && LG.e.includes(nu) && !bu && (uu(!0), sb(!1)))
        }), [Bb, Au, ou, nu, bu, uu]), (0, Ob.useEffect)((() => {
          if (!Bb || !Au) return;
          const bb = Hb ? "worldCode" : "codeBlock";
          return (0, LG.y)(bb, !0), () => {
            (0, LG.y)(bb, !1)
          }
        }), [Bb, Au, Hb]), (0, Ob.useEffect)((() => {
          if (Bb) return () => {
            Du.current ? Du.current = !1 : (0, LG.x)()
          }
        }), [Bb]), (0, Ob.useEffect)((() => {
          (0, LG.B)("exportButton", !!lu)
        }), [lu]);
        const {
          t: Mh
        } = (0, kb.K)(), mh = !bu && Uu > Yu, Ih = mh ? Zb.H : Zb.v, Ph = (0, Ob.useCallback)(((bb, ub) => {
          Xb.i.vp("CodeEditorGoToLine", {
            path: bb,
            line: ub
          }), nh(bb)
        }), [nh]), qh = (0, Ob.useCallback)((bb => {
          Ah.current = bb
        }), []), Eh = function(bb, ub) {
          const [hb, Bb] = (0, Ob.useState)(null);
          return (0, Ob.useEffect)((() => {
            if (!ub) return void Bb(null);
            let hb = !1;
            return MO(bb).then((bb => {
              hb || Bb(bb)
            }), (bb => {
              console.error("[CodeEditor] could not collect the imported plugins", bb), hb || Bb(null)
            })), () => {
              hb = !0
            }
          }), [bb, ub]), hb
        }(Iu, Bb);
        (0, Ob.useEffect)((() => {
          Eh && cu && !Eh.includes(cu) && (Qu(null), bh(null), Hb && !uh.current && Ch(Bh.current))
        }), [cu, Eh, Hb, Ch]), oh.current = {
          collabState: Mu,
          ensureJoinedPath: dh,
          waitForLobbyPath: rh,
          pullLobbyFiles: zh,
          t: Mh,
          canEditCode: !!Au
        }, ph.current || (ph.current = new VO({
          getLobbyFiles: () => ({
            ...Yh.current,
            ...(0, zO.k)(Fu.current.assets)
          }),
          deleteSchematic: async bb => {
            const ub = await kO({
              action: "remove",
              path: bb,
              expectedRevision: Fu.current.revision
            });
            fu(ub)
          },
          getActivePath: () => Bh.current,
          getCollabSnapshot: () => {
            var bb;
            if (Oh.current) return null;
            const ub = null === (bb = oh.current) || void 0 === bb ? void 0 : bb.collabState;
            return ub ? {
              doc: ub.doc,
              version: ub.version,
              clientID: ub.clientID,
              docKey: ub.docKey,
              httpConfig: ub.httpConfig
            } : null
          },
          replaceActiveDoc: (bb, ub) => {
            var hb, Bb;
            return null !== (hb = null === (Bb = Ah.current) || void 0 === Bb ? void 0 : Bb.call(Ah, bb, ub)) && void 0 !== hb && hb
          },
          ensureJoined: bb => oh.current.ensureJoinedPath(bb),
          createFile: (bb, ub) => {
            !1 !== (null === ub || void 0 === ub ? void 0 : ub.focus) && (Sh.current = bb), Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.CreateFile,
              tu: (0, WO.s)({
                kind: "lobby",
                path: Bh.current
              }),
              CU: bb
            })
          },
          renameFile: (bb, ub) => {
            const hb = (0, WO.s)({
              kind: "lobby",
              path: Bh.current
            });
            Bh.current === bb && (ah.current = {
              fromPath: bb,
              toPath: ub
            }, Tu(ub)), Sb.gameBridge.send("sendCodeCollab", {
              vu: WO.b.RenameFile,
              tu: hb,
              CU: bb,
              dU: ub
            })
          },
          deleteFile: bb => {
            jh(bb)
          },
          waitForLobbyPath: (bb, ub, hb) => oh.current.waitForLobbyPath(bb, ub, hb),
          pullLobbyFiles: () => oh.current.pullLobbyFiles(),
          setMessage: (bb, ub) => {
            lh({
              message: bb,
              type: ub
            })
          },
          onUnlinked: () => {
            wh(!1)
          },
          t: bb => oh.current.t(bb),
          canEditCode: () => oh.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: bb,
              lobbyName: ub
            } = Sb.gameBridge.latest("connectedGame");
            return (0, mO.g)(bb, ub)
          }
        }));
        const yh = (0, Ob.useCallback)((async bb => {
            const ub = ph.current;
            if (!ub) return !1;
            try {
              return await ub.writeLobbyFiles(bb)
            } catch (hb) {
              return console.error("World Code AI: couldn't write the change", hb), !1
            }
          }), []),
          Vh = (0, Ob.useCallback)((async bb => {
            var ub, hb;
            const Bb = null === (ub = bb.find((bb => bb.path === sG.b))) || void 0 === ub ? void 0 : ub.text,
              Ob = hh.current;
            return void 0 !== Bb && "codeBlock" === (null === Ob || void 0 === Ob ? void 0 : Ob.kind) && (!(null === (hb = Ah.current) || void 0 === hb || !hb.call(Ah, (0, WO.s)(Ob), Bb)) && (wb.current = Bb, Hu(Bb), !0))
          }), []),
          Fh = (0, Ob.useCallback)((async () => {
            try {
              var bb, ub;
              const hb = await VG(KO.m);
              return !1 === hb.canSeeCode ? null : null !== (bb = hb.files) && void 0 !== bb ? bb : {
                [KO.m]: null !== (ub = hb.code) && void 0 !== ub ? ub : ""
              }
            } catch (hb) {
              return console.error("World Code AI: couldn't read World Code for a code block", hb), null
            }
          }), []),
          fh = (0, Ob.useMemo)((() => ({
            [sG.b]: au
          })), [au]),
          kh = (0, Ob.useCallback)(((bb, ub) => {
            Xb.i.vp("CodeEditorGoToLine", {
              path: sG.b,
              line: ub
            })
          }), []);
        (0, Ob.useEffect)((() => {
          bu && Bb && Su(Uu)
        }), [bu, Bb, Uu]);
        const Th = (0, Ob.useCallback)((() => {
            var bb, ub;
            ih();
            const hb = (0, vb.isTouchscreen)() ? "open World Code again" : `press ${null!==(bb=null===(ub=Eu.r.OpenCodeEditor)||void 0===ub?void 0:ub[0])&&void 0!==bb?bb:"F8"}`,
              Bb = Hb ? `\ud83e\udd16 Try out your change, then ${hb} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            Xb.i.vp("chat", {
              content: [{
                str: Bb,
                style: {
                  color: nb.I.cyanUiText
                }
              }]
            })
          }), [ih, Hb]),
          ch = (0, Ob.useCallback)((bb => {
            const ub = pb,
              hb = lb.current;
            Hb || !ub || Sb.gameBridge.lookup("codeBlockClickable", ub) ? (0, MG.n)(bb, {
              submit: () => {
                ih(), Xb.i.vp("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: nb.I.cyanUiText
                    }
                  }]
                }), !Hb && ub && setTimeout((() => {
                  Sb.gameBridge.send("clickCodeBlock", ub)
                }), 1e3)
              },
              reopen: () => {
                (0, Ib.q)() || (Hb ? Xb.i.vp("EditLobbyCode", ub) : Xb.i.vp("EditCodeBlock", {
                  pos: ub,
                  canChangePos: hb
                }))
              }
            }) : Th()
          }), [ih, Hb, pb, Th]),
          Qh = (0, Ob.useCallback)((() => {
            uu(!1)
          }), [uu]),
          Rh = (0, Ob.useRef)(gh);
        Rh.current = gh;
        const bB = (0, Ob.useCallback)((function(bb) {
            let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            Xb.i.vp("WorldCodeAiDraft", {
              text: bb,
              send: ub
            }), Rh.current(), Xb.i.vp("EditLobbyCode", pb)
          }), [pb]),
          uB = (0, Ob.useCallback)((bb => {
            Rh.current(), bb.codeBlock ? Xb.i.vp("EditCodeBlock", {
              pos: [...bb.pos],
              canChangePos: bb.canChangePos
            }) : Xb.i.vp("EditLobbyCode", pb)
          }), [pb]);
        (0, jb.h)("WorldCodeAiDraft", (bb => {
          Hb && (Bu(bb), uu(!0))
        }));
        const hB = !!Au && !!du && LG.j.includes(du),
          BB = !!Au && !!nu && LG.e.includes(nu);
        (0, Ob.useEffect)((() => {
          Bb && bu && ou && !hB && sb(!1)
        }), [Bb, bu, ou, hB]);
        const OB = (0, Ob.useCallback)((() => {
            uu(!1), sb(!1)
          }), [uu]),
          {
            eH: GB,
            setWorld: UB,
            toggleWorld: LB
          } = function(bb) {
            let {
              showAi: ub,
              showDocs: hb,
              showChat: Bb,
              hideOtherRightPanels: Gb
            } = bb;
            const [Ub, Lb] = (0, Ob.useState)("hidden"), Yb = (0, Ob.useRef)(null), Sb = (0, Ob.useCallback)((() => {
              Yb.current = null, Lb((bb => "hidden" === bb ? bb : (0, XG.f)() ? "hidden" : "shown"))
            }), []);
            (0, Ob.useEffect)((() => {
              (ub || hb) && Sb()
            }), [ub, hb, Sb]), (0, Ob.useEffect)((() => {
              Bb && Sb()
            }), [Bb, Sb]);
            const ab = "hidden" !== Ub && (0, XG.f)();
            (0, Ob.useLayoutEffect)((() => {
              if (ab) {
                const bb = document.activeElement;
                bb instanceof HTMLElement && bb.closest(".cm-content") && (Yb.current = bb, bb.blur())
              } else {
                var bb;
                null === (bb = Yb.current) || void 0 === bb || bb.focus(), Yb.current = null
              }
            }), [ab]);
            const Hb = (0, Ob.useCallback)((() => {
              "hidden" === Ub ? (Lb("shown"), (0, XG.f)() && Gb()) : Lb("hidden")
            }), [Ub, Gb]);
            return {
              eH: Ub,
              setWorld: Lb,
              toggleWorld: Hb
            }
          }({
            showAi: bu,
            showDocs: Nb,
            showChat: Mb,
            hideOtherRightPanels: OB
          }),
          YB = bu && null !== Xu && ou,
          SB = (0, Ob.useCallback)((() => {
            Bu(null)
          }), []),
          [aB, HB] = (0, Ob.useState)(null);
        (0, jb.h)("WorldCodeAiSelection", (bb => {
          Bb && (HB(bb), uu(!0), sb(!1))
        }));
        const wB = (0, Ob.useCallback)((() => {
          HB(null)
        }), []);
        (0, jb.h)("chat", (bb => {
          let {
            content: ub
          } = bb;
          if (!Hb && null === Zu.current) return;
          const hb = Array.isArray(ub) ? ub : [ub],
            Bb = hb.some((bb => {
              var ub;
              return (null === bb || void 0 === bb || null === (ub = bb.style) || void 0 === ub ? void 0 : ub.color) === nb.I.redUiText
            })),
            Ob = hb.map((bb => {
              var ub;
              const hb = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.str) && void 0 !== ub ? ub : bb;
              return "string" === typeof hb ? hb : ""
            })).join("");
          Bb && /world code|error/i.test(Ob) && (Gu((bb => [...bb, Ob].slice(-10))), Lu((bb => bb + 1)), (0, MG.g)(Ob))
        })), (0, Ob.useEffect)((() => {
          if (!Bb || !Hb || !Zh) return;
          let bb = !1;
          return (async (ub, hb) => {
            const Bb = await (null === (ub = ph.current) || void 0 === ub ? void 0 : ub.tryRestoreHandle());
            !bb && Bb && (wh(!0), null === (hb = ph.current) || void 0 === hb || hb.startWhenReady())
          })(), () => {
            bb = !0
          }
        }), [Bb, Hb, Zh]), (0, Ob.useEffect)((() => {
          var bb;
          Bb || (null === (bb = ph.current) || void 0 === bb || bb.stopContinuousSync(), Wh(!1), xu.current && (xu.current = !1, Sb.gameBridge.send("sendChatMessage", {
            XS: "//export",
            channelName: null
          })))
        }), [Bb, Wh]);
        const ZB = (0, Ob.useCallback)((async () => {
            if (Zh && ph.current) try {
              if (!await ph.current.linkFolder()) return;
              wh(!0), await ph.current.startWhenReady()
            } catch (bb) {
              console.error("[WorldCodeDirectorySync] Link failed", bb), lh({
                message: Mh("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Zh, Mh]),
          XB = (0, Ob.useCallback)((async () => {
            ph.current && await ph.current.unlinkFolder()
          }), []),
          pB = (0, Ob.useCallback)((() => {
            Zh ? Hh ? XB() : ZB() : TB.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Zh, Hh, ZB, XB]),
          oB = Hb && "hidden" !== GB;
        return (0, ab.jsxs)(Ub.b, {
          className: Kh()("CodeEditorBg", {
            CodeEditorLight: ib,
            WorldShown: "hidden" !== GB,
            WorldTouchControl: "touchControls" === Qb
          }),
          close: gh,
          escDoesExit: !0,
          show: Bb,
          togglePointerLock: !1,
          globallyUniqueKey: Hb ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, ab.jsx)(UG.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Mh("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Au && !Hb
          }), (0, ab.jsx)(UG.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, ab.jsxs)(ab.Fragment, {
              children: [(0, ab.jsx)("p", {
                children: Mh("codeEditor:tutorialWorldCodeWelcome")
              }), (0, ab.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, ab.jsx)("li", {
                  children: Mh("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, ab.jsx)("li", {
                  children: Mh("codeEditor:tutorialWorldCodeUseReact")
                }), (0, ab.jsx)("li", {
                  children: Mh("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Au && Hb
          }), (0, ab.jsx)("div", {
            className: "CodeEditorTitle",
            children: Hb ? "World Code" : "Code Block"
          }), (0, ab.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, ab.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, ab.jsx)(Fb.d, {
                tooltipInner: Mh(lu ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: lu ? void 0 : 0,
                hideTooltip: "exportButton" === Ku,
                children: (0, ab.jsx)(UG.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Mh("codeEditor:tutorialExport"),
                  enabled: !!Au,
                  children: (0, ab.jsx)(Zb.m, {
                    className: "CodeEditorButton",
                    disabled: !lu,
                    onClick: () => {
                      "exportButton" === Ku && ((0, LG.h)("exportButton"), Du.current = !0), xu.current = !0, gh()
                    },
                    padDestructive: !0,
                    children: Mh("codeEditor:exportWorld")
                  })
                })
              }), (0, ab.jsx)(eG, {
                eH: GB,
                setWorld: UB,
                toggleWorld: LB,
                aiShown: YB,
                closeAi: Qh
              })]
            }), (0, ab.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Au && (0, ab.jsx)(Fb.d, {
                tooltipInner: Mh("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Ku,
                children: (0, ab.jsx)(UG.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Mh("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, ab.jsx)(Zb.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Mh("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, LG.h)("helpButton"), TB.NotificationProvider.showCustomPopup({
                        body: bb => (0, ab.jsx)(YG, {
                          close: bb
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, ab.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, ab.jsx)(ob.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, ab.jsx)(Fb.d, {
                tooltipInner: Mh("codeEditor:closeTooltip"),
                children: (0, ab.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    gh()
                  },
                  children: (0, ab.jsx)(Zb.i, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, ab.jsx)(jO, {
            peers: null !== (ub = null === Mu || void 0 === Mu ? void 0 : Mu.peers) && void 0 !== ub ? ub : []
          }), (0, ab.jsxs)("div", {
            className: Kh()("CodeEditorMainArea", {
              WorldCovers: "always" === pG(GB),
              WorldCoversWhenNarrow: "narrow" === pG(GB)
            }),
            children: [Mb && yb && (0, ab.jsx)(XG.b, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                Pb(!1)
              },
              children: (0, ab.jsx)(ZG, {
                inputRef: qb
              })
            }), Hb && (0, ab.jsx)(vO, {
              schematics: yu.assets,
              onManageSchematic: bb => {
                Au && TB.NotificationProvider.showCustomPopup({
                  body: ub => (0, ab.jsx)(QO, {
                    initialPath: bb,
                    onChanged: fu,
                    onClose: ub
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Iu,
              activePath: ku,
              canEdit: !!Au,
              directoryLinked: Hh,
              pluginNames: null !== Eh && void 0 !== Eh ? Eh : fG,
              activePluginName: cu,
              activePluginFile: Ru,
              onSelect: nh,
              onSelectPlugin: Dh,
              onToggleDirectorySync: pB,
              onCreate: bb => {
                Sh.current = bb, Sb.gameBridge.send("sendCodeCollab", {
                  vu: WO.b.CreateFile,
                  tu: (0, WO.s)({
                    kind: "lobby",
                    path: Bh.current
                  }),
                  CU: bb
                })
              },
              onRename: (bb, ub) => {
                Bh.current === bb && (ah.current = {
                  fromPath: bb,
                  toPath: ub
                }, Tu(ub)), Sb.gameBridge.send("sendCodeCollab", {
                  vu: WO.b.RenameFile,
                  tu: (0, WO.s)({
                    kind: "lobby",
                    path: Bh.current
                  }),
                  CU: bb,
                  dU: ub
                })
              },
              onRenameFolder: (bb, ub) => {
                const [hb] = (0, CO.n)([Bh.current], bb, ub);
                hb && (ah.current = {
                  fromPath: hb[0],
                  toPath: hb[1]
                }, Tu(hb[1])), Sb.gameBridge.send("sendCodeCollab", {
                  vu: WO.b.RenameFolder,
                  tu: (0, WO.s)({
                    kind: "lobby",
                    path: Bh.current
                  }),
                  CU: bb,
                  dU: ub
                })
              },
              onDelete: jh
            }), (0, ab.jsx)("div", {
              className: Kh()("CodeEditorMessage", {
                CodeEditorMessageHidden: !rb.message,
                CodeEditorMessageSuccess: "success" === rb.type
              }),
              children: rb.message && (0, ab.jsx)("div", {
                className: "CodeEditorMessageText",
                children: rb.message
              })
            }), (0, ab.jsx)(Ob.Suspense, {
              fallback: (0, ab.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, ab.jsx)(xb.c, {})
              }),
              children: (0, ab.jsx)(IG, {
                isLobbyCode: Hb,
                code: Mu ? Mu.doc : wb.current,
                files: Hb ? Iu : void 0,
                activePath: Hb ? ku : void 0,
                pluginName: cu,
                pluginFile: Ru,
                pluginSource: cu && Ru ? null === (hb = DO.f[cu]) || void 0 === hb ? void 0 : hb.files[Ru] : void 0,
                onChange: Jh,
                canEditCode: Au,
                setTemporaryMessage: lh,
                close: gh,
                showTooltips: zb,
                lightMode: ib,
                collabState: Mu,
                setActiveDocReplacer: qh,
                showAiHints: ou && Jb,
                canAiChangeCode: !!Au && (Hb || !!lb.current),
                onRemoteDocChange: bb => {
                  var ub;
                  (wb.current = bb, Hb) ? (qu((ub => ({
                    ...ub,
                    [Bh.current]: bb
                  }))), null === (ub = ph.current) || void 0 === ub || ub.onDocTextChanged(Bh.current, bb)) : Hu(bb)
                }
              })
            }), (Nb || YB || "hidden" !== GB) && (0, ab.jsxs)(oG, {
              eH: GB,
              worldPanel: (0, ab.jsx)(tG, {
                shown: GB,
                setShown: UB,
                canInsertCode: !!Au && !cu
              }),
              closeWorld: () => {
                UB("hidden")
              },
              aiShown: YB,
              defaultWidth: Nb ? "40%" : "max(18rem, 36%)",
              children: [Nb && (0, ab.jsx)(XG.b, {
                onClose: hB ? void 0 : Nh,
                children: (0, ab.jsx)(Ob.Suspense, {
                  fallback: (0, ab.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, ab.jsx)(xb.c, {})
                  }),
                  children: (0, ab.jsx)(PG, {
                    popOutDocs: eh,
                    hideDocs: Nh,
                    tutorialEnabled: !!Au
                  })
                })
              }), YB && (0, ab.jsx)(XG.b, {
                onClose: BB ? void 0 : Qh,
                children: (0, ab.jsx)(Ob.Suspense, {
                  fallback: (0, ab.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, ab.jsx)(xb.c, {})
                  }),
                  children: (0, ab.jsx)(qG, {
                    target: Xu,
                    chatKey: `${Nu.gameNameWithVariation}/${Nu.lobbyName}/aiHelper`,
                    historyKey: `${Nu.gameNameWithVariation}/${Nu.lobbyName}/${Xu.key}`,
                    files: Xu.codeBlock ? fh : Iu,
                    activePath: Xu.codeBlock ? sG.b : ku,
                    canEdit: !!Au && (Xu.codeBlock ? !!lb.current : !cu),
                    isLoaded: null !== Mu,
                    errors: Ou,
                    errorCount: Uu,
                    applyFiles: Xu.codeBlock ? Vh : yh,
                    submit: Th,
                    testRun: ch,
                    close: Qh,
                    goToLine: Xu.codeBlock ? kh : Ph,
                    openWorldCode: Xu.codeBlock ? bB : void 0,
                    readWorldCode: Xu.codeBlock ? Fh : void 0,
                    viewChunk: EG,
                    viewGameState: yG,
                    openTarget: Au ? uB : void 0,
                    draft: hu,
                    onDraftUsed: SB,
                    selection: aB,
                    onSelectionUsed: wB
                  }, Xu.key)
                })
              })]
            })]
          }), (null === Gh || void 0 === Gh ? void 0 : Gh.fallback) && (0, ab.jsx)(bG, {
            fallback: Gh.fallback,
            onGoToLine: Ph
          }), (0, ab.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, ab.jsx)(Fb.d, {
              tooltipInner: Mh(ib ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, ab.jsx)(Zb.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Mh(ib ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  tb(!ib)
                },
                children: (0, ab.jsx)(ob.e, {
                  name: ib ? "moon" : "sun-bright"
                })
              })
            }), (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh(oB ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  ih(oB)
                },
                padDefaultFocus: !0,
                children: Mh("codeEditor:submitCode")
              })
            }), (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh(Nb ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === du || "hideDocsButton" === du,
              children: (0, ab.jsx)(UG.h, {
                tutorial: Cu,
                step: Nb ? "hideDocsButton" : "docsButton",
                text: Mh(Nb ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Au,
                placement: "top",
                waitForClick: !0,
                onPrevious: Nb && "welcome" === Cu ? Nh : void 0,
                children: (0, ab.jsx)(Zb.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, LG.h)(Nb ? "hideDocsButton" : "docsButton"), sb(!Nb), uu(!1)
                  },
                  children: Mh(Nb ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), ou && (0, ab.jsx)(UG.h, {
              tutorial: ju,
              step: bu ? "hideAiHelperButton" : "aiHelperButton",
              text: Mh(bu ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === ju ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Au,
              placement: "top",
              waitForClick: !0,
              onPrevious: bu && "welcome" === ju ? sh : void 0,
              children: (0, ab.jsx)(Ih, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, LG.h)(bu ? "hideAiHelperButton" : "aiHelperButton"), uu(!bu), sb(!1)
                },
                children: bu ? "Hide AI Helper" : mh ? "Fix error with AI" : "AI Helper"
              })
            }), yb && (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh(Mb ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.v, {
                className: "CodeEditorButton",
                onClick: () => {
                  Eb.current = !Mb, Pb(!Mb)
                },
                children: Mh(Mb ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh("hidden" === GB ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.v, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: LB,
                children: Mh("hidden" === GB ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  Xb.i.vp("FormatCode")
                },
                children: Mh("codeEditor:formatCode")
              })
            }), (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(wb.current).then((() => {
                    lh({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    lh({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Mh("codeEditor:copyCode")
              })
            }), (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh(zb ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  gb(!zb)
                },
                children: Mh(zb ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Hb && (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Ku,
              children: (0, ab.jsx)(UG.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Mh("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Au,
                placement: "top",
                waitForClick: !0,
                children: (0, ab.jsx)(Zb.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Ku && ((0, LG.h)("worldCodeButton"), Du.current = !0), gh(), Xb.i.vp("EditLobbyCode", pb)
                  },
                  children: Mh("codeEditor:worldCode")
                })
              })
            }), (su || Uh || ou) && (0, ab.jsx)(Fb.d, {
              tooltipInner: Mh("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, ab.jsx)(Zb.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  tu(!0)
                },
                children: (0, ab.jsx)(ob.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), vu && (0, ab.jsx)(QB.d, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              tu(!1)
            },
            body: (0, ab.jsx)(GG, {
              engine: Uh,
              onSetEngine: th,
              aiHints: ou ? {
                shown: Jb,
                setShown: eb
              } : null,
              variation: su ? {
                name: gu,
                setName: iu,
                reload: vh
              } : null
            })
          })]
        })
      })),
      cG = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function QG(bb) {
      return "inventory" === bb
    }
    const RG = (0, Ob.memo)((function() {
      const {
        openEverythingMenuName: bb,
        openInGameMenuName: ub
      } = (0, mb.j)(["openEverythingMenuName", "openInGameMenuName"]), hb = (0, Db.i)("fullInventory"), Gb = (0, Ob.useRef)(null), Ub = (0, gu.l)();
      (0, jb.h)("toggleMenu", (bb => {
        var ub;
        if (!Ub.shown) return;
        const hb = mb.d.get("openInGameMenuName");
        let Bb = bb.split("|")[0];
        const Ob = null !== (ub = bb.split("|")[1]) && void 0 !== ub ? ub : null;
        ("closeCurrentMenu" === Ob && hb || Bb === hb) && (Gb.current = null, Bb = null);
        const Lb = "closeCurrentMenu" === Ob ? null : Ob;
        Gb.current !== Lb && (Gb.current = Lb), null !== Bb && (0, UO.l)(UO.b, {
          keepsMovement: QG(Bb)
        }), mb.d.set({
          openInGameMenuName: Bb
        })
      }));
      const Lb = (0, Ob.useCallback)((bb => () => {
          Xb.i.vp("toggleMenu", bb)
        }), []),
        Yb = (0, Ob.useRef)({
          cantCrouchIfNotFullscreen: Lb("cantCrouchIfNotFullscreen"),
          makeReport: Lb("makeReport"),
          makeDiscordReport: Lb("makeDiscordReport"),
          editBook: Lb("editBook"),
          editNameTag: Lb("editNameTag"),
          inventory: Lb("inventory"),
          inviteLink: Lb("inviteLink"),
          writeOnBoard: Lb("writeOnBoard"),
          codeEditor: Lb("codeEditor"),
          lobbyCodeEditor: Lb("lobbyCodeEditor"),
          customLobbyBlockEditor: Lb("customLobbyBlockEditor"),
          ironChestPasskeyInput: Lb("ironChestPasskeyInput"),
          petUi: Lb("petUi")
        }),
        Sb = (0, Ob.useCallback)((() => {
          mb.d.set({
            openInGameMenuName: null
          })
        }), []),
        Hb = (0, Ob.useRef)(null);
      return (0, Ob.useEffect)((() => {
        if (ub) {
          var bb;
          (0, UO.l)(UO.b, {
            keepsMovement: QG(ub)
          }), Hb.current = cG.has(ub) ? null !== (bb = mb.d.get("openEverythingMenuName")) && void 0 !== bb ? bb : Hb.current : null, mb.d.set({
            openEverythingMenuName: null
          })
        } else {
          const bb = Hb.current;
          Hb.current = null, null !== bb && null === mb.d.get("openEverythingMenuName") && mb.d.set({
            openEverythingMenuName: bb
          }), Gb.current = null, (0, UO.j)(UO.b)
        }
      }), [ub]), (0, Ob.useEffect)((() => {
        null !== bb && Sb()
      }), [bb, Sb]), (0, ab.jsxs)(ab.Fragment, {
        children: [(0, ab.jsx)(Bb.f, {
          show: "clientGame" === ub
        }), (0, ab.jsx)(FB, {
          show: "cantCrouchIfNotFullscreen" === ub,
          onOpen: Yb.current.cantCrouchIfNotFullscreen,
          onClose: Sb
        }), (0, ab.jsx)(BO, {
          show: "makeReport" === ub,
          onOpen: Yb.current.makeReport,
          onClose: Sb
        }), (0, ab.jsx)(GO, {
          show: "makeDiscordReport" === ub,
          onOpen: Yb.current.makeDiscordReport,
          onClose: Sb
        }), (0, ab.jsx)(uh, {
          show: "editBook" === ub,
          onOpen: Yb.current.editBook,
          onClose: Sb
        }), (0, ab.jsx)(Ru, {
          show: "editNameTag" === ub,
          onOpen: Yb.current.editNameTag,
          onClose: Sb
        }), hb && (0, ab.jsx)(EB, {
          show: "inventory" === ub,
          onOpen: Yb.current.inventory,
          onClose: Sb,
          variation: Gb.current
        }), (0, ab.jsx)(iu, {
          show: "inviteLink" === ub,
          onClose: Sb,
          option: Gb.current
        }), (0, ab.jsx)(eb, {
          show: "retentionFeatures" === ub,
          onClose: Sb
        }), (0, ab.jsx)(Qu, {
          show: "writeOnBoard" === ub,
          onOpen: Yb.current.writeOnBoard,
          onClose: Sb
        }), (0, ab.jsx)(TG, {
          show: "lobbyCodeEditor" === ub,
          onOpen: Yb.current.lobbyCodeEditor,
          onClose: Sb,
          isLobbyCode: !0
        }), (0, ab.jsx)(TG, {
          show: "codeEditor" === ub,
          onOpen: Yb.current.codeEditor,
          onClose: Sb,
          isLobbyCode: !1
        }), (0, ab.jsx)(YO, {
          show: "customLobbyBlockEditor" === ub,
          onOpen: Yb.current.customLobbyBlockEditor,
          onClose: Sb
        }), (0, ab.jsx)(Ch, {
          show: "ironChestPasskeyInput" === ub,
          onOpen: Yb.current.ironChestPasskeyInput,
          onClose: Sb
        }), (0, ab.jsx)(XO, {
          togglePointerLock: !0,
          show: "petUi" === ub,
          onOpen: Yb.current.petUi,
          onClose: Sb
        })]
      })
    }))
  },
  36116: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => GU
    });
    hb(36123);
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(3502),
      Lb = hb(1348),
      Yb = hb(1789),
      Sb = hb(1007);

    function ab() {
      const bb = 2e3,
        [ub, hb] = (0, Bb.useState)(null),
        [Ob, ab] = (0, Bb.useState)(null),
        Hb = (0, Bb.useRef)(null);
      (0, Lb.h)("showBottomMessage", (ub => {
        let {
          message: hb,
          timeoutLength: Bb = bb,
          type: Ob
        } = ub;
        ab({
          message: hb,
          type: Ob
        }), clearTimeout(Hb.current), Hb.current = setTimeout((() => {
          ab(null)
        }), Bb)
      })), (0, Lb.h)("showPermanentBottomMessage", (bb => {
        hb(bb)
      })), (0, Bb.useEffect)((() => ((0, Ub.d)((() => {
        hb(null)
      })), () => {
        clearTimeout(Hb.current)
      })), []);
      const wb = Ob || ub;
      return wb ? (0, Sb.jsx)("div", {
        className: Gb()("BottomScreenMessage", wb.type),
        children: (0, Sb.jsx)(Yb.c, {
          text: wb.message
        })
      }) : null
    }
    var Hb = hb(2230),
      wb = hb(1811),
      Zb = hb(1415),
      Xb = hb(2297);

    function pb() {
      let bb;
      const ub = () => {
          clearTimeout(bb), bb = setTimeout((() => {
            wb.gameBridge.latest("connectedGame").replay || (wb.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, Zb.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        hb = () => {
          clearTimeout(bb)
        };
      return window.addEventListener("focus", hb), window.addEventListener("blur", ub), () => {
        window.removeEventListener("blur", ub), window.removeEventListener("focus", hb), clearTimeout(bb)
      }
    }
    var ob = hb(1029),
      Ab = hb(2903),
      lb = hb(298),
      Kb = hb(2288),
      Wb = hb(16),
      Cb = hb(1836),
      db = hb(29),
      rb = hb(1857),
      jb = hb(13),
      nb = hb(1865),
      Db = hb(1288),
      xb = hb(8551),
      zb = hb(1891),
      gb = hb(1095);
    const ib = (0, Bb.memo)((function() {
      const {
        isTouchScreen: bb,
        loadingOverlayVisible: ub,
        openInGameMenuName: hb,
        openEverythingMenuName: Ob
      } = (0, jb.j)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Ub = (0, Db.r)();
      (0, Ab.e)();
      const Lb = (0, Kb.f)("showBasicMovementControls"),
        [Yb, ab] = (0, Bb.useState)("movement"),
        Hb = "movement" === Yb,
        wb = Ub && !1 !== Lb;
      (0, Bb.useEffect)((() => {
        "padActions" !== Yb || wb || ab("done")
      }), [Yb, wb]);
      const Zb = ub || null !== hb || null !== Ob,
        Xb = (0, Bb.useRef)({
          step: Yb,
          ms: 0
        });
      return (0, Bb.useEffect)((() => {
        if (Zb || "done" === Yb) return;
        Xb.current.step !== Yb && (Xb.current = {
          step: Yb,
          ms: 0
        });
        const bb = Xb.current,
          ub = performance.now(),
          hb = setTimeout((() => {
            ab("movement" === Yb && (0, Db.f)() ? "padActions" : "done")
          }), 7e3 - bb.ms);
        return () => {
          clearTimeout(hb), bb.ms += performance.now() - ub
        }
      }), [Zb, Yb]), db.j.getItem(lb.Qb) > 2 ? (0, Sb.jsx)(eb, {
        showingMovementControls: !1
      }) : (0, Sb.jsxs)(Sb.Fragment, {
        children: [bb && !Ub || !Hb || !1 === Lb ? null : (0, Sb.jsxs)("div", {
          className: Gb()("ControlsTutorialDiv", {
            Covered: Zb
          }),
          children: [(0, Sb.jsx)(vb, {}), (0, Sb.jsx)(Jb, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Sb.jsx)(Jb, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Yb && wb && (0, Sb.jsx)(tb, {
          covered: Zb
        }), (0, Sb.jsx)(eb, {
          showingMovementControls: "done" !== Yb
        })]
      })
    }));

    function vb() {
      const bb = (0, Db.r)();
      return (0, Sb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Sb.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), bb && (0, Sb.jsx)(nb.e, {
          noaAction: "forward"
        }), !bb && (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Sb.jsx)(nb.e, {
              noaAction: "forward"
            })
          }), (0, Sb.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Sb.jsx)(nb.e, {
              noaAction: "left"
            }), (0, Sb.jsx)(nb.e, {
              noaAction: "backward"
            }), (0, Sb.jsx)(nb.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function tb(bb) {
      let {
        covered: ub
      } = bb;
      const {
        t: hb
      } = (0, gb.K)(), Bb = (0, Kb.f)("useInventory");
      return (0, Sb.jsxs)("div", {
        className: Gb()("ControlsTutorialDiv", {
          Covered: ub
        }),
        children: [(0, Sb.jsx)(Jb, {
          header: hb("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Sb.jsx)(Jb, {
          header: hb("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Bb && (0, Sb.jsx)(Jb, {
          header: hb("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Sb.jsx)(Jb, {
          header: hb("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Jb(bb) {
      let {
        header: ub,
        noaAction: hb
      } = bb;
      return (0, Sb.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Sb.jsx)("div", {
          className: "KeyHeader",
          children: ub
        }), (0, Sb.jsx)(nb.e, {
          noaAction: hb
        })]
      })
    }

    function eb(bb) {
      let {
        showingMovementControls: ub
      } = bb;
      const {
        isTouchScreen: hb
      } = (0, jb.j)(["isTouchScreen"]), Ob = (0, Db.r)(), Gb = (0, zb.e)("OpenShop"), [Ub, Lb] = (0, Bb.useState)(!1), Yb = `SeenShopControls|${(0,rb.g)("connectedGame",(bb=>bb.gameNameWithVariation))}`, ab = () => (!(0, Db.f)() || null !== (0, xb.e)("OpenShop")) && !db.j.getItem(Yb) && Cb.b.get("shopInfo") && !ub, Hb = () => (Lb(!0), db.j.setItem(Yb, !0), (0, Db.f)() || Wb.i.vp("showShopTouchTutorial"), setTimeout((() => {
        Lb(!1)
      }), 7e3));
      (0, Bb.useEffect)((() => {
        let bb;
        const ub = Wb.i.subscribe("showShopTutorial", (() => {
          ab() && (bb = Hb())
        }));
        return () => {
          clearTimeout(bb), Wb.i.unsubscribe(ub)
        }
      }), [ub]);
      const wb = (0, Bb.useRef)();
      return (0, Kb.e)("currencyAmounts", (bb => {
        if (ab()) {
          let hb = !1;
          const Bb = Cb.b.get("shopInfo");
          for (const Ob in Bb) {
            for (const Gb in Bb[Ob].items) {
              var ub;
              const Ub = Bb[Ob].items[Gb];
              if (void 0 !== Ub.currency && bb[Ub.currency] && Ub.cost <= bb[Ub.currency].amount && (null === (ub = Ub.hidden) || void 0 === ub || !ub)) {
                hb = !0;
                break
              }
            }
            if (hb) break
          }
          hb && (wb.current = Hb())
        }
      })), (0, Bb.useEffect)((() => () => {
        clearTimeout(wb.current)
      }), [ub]), !Ub || Ob && !Gb ? null : (0, Sb.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: hb && !Ob ? null : (0, Sb.jsx)(Jb, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Nb = hb(1260),
      sb = hb(966);
    const Mb = (0, Bb.memo)((function() {
      return (0, Ab.e)(), (0, Sb.jsx)(mb, {})
    }));
    class mb extends Bb.Component {
      constructor(bb) {
        super(bb), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = Wb.i.subscribe("TopRightHelper", (bb => {
          this.showQueue.push(bb), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        Wb.i.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(bb, ub) {
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
        let bb, ub, hb, Bb, Ob, Gb = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, bb = "slideIn") : "slideOut" === this.state.currState ? bb = "slideOut" : null === this.currMessage && (Gb = !1), this.currMessage) {
          const Gb = this.currMessage.color || "rgb(102, 102, 102)";
          ub = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === bb ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, hb = {
            backgroundColor: Gb
          }, Bb = {
            animation: "2s " + ("slideOut" === bb ? "CloseNotification" : "ExpandNotification")
          }, Ob = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === bb ? "textDisappear" : "textAppear")
          }
        }
        return Gb ? (0, Sb.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...ub
          },
          children: [(0, Sb.jsx)("div", {
            className: "LeftSide",
            style: hb,
            children: (0, Sb.jsx)(sb.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Sb.jsx)("div", {
            className: "RightSide",
            style: Bb,
            children: (0, Sb.jsx)("div", {
              className: "HelperText",
              style: Ob,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Ib = hb(36129),
      Pb = hb(1302);
    const qb = (0, Pb.l)((bb => bb.PadSneakChip));

    function Eb(bb) {
      const [ub, hb, Bb] = function(bb) {
        const ub = parseInt(bb.substring(1), 16),
          hb = (ub >> 16) / 255,
          Bb = (ub >> 8 & 255) / 255,
          Ob = (255 & ub) / 255,
          Gb = Math.max(hb, Bb, Ob),
          Ub = Math.min(hb, Bb, Ob),
          Lb = (Gb + Ub) / 2,
          Yb = Gb - Ub;
        if (0 === Yb) return [0, 0, Lb];
        const Sb = Yb / (1 - Math.abs(2 * Lb - 1));
        let ab;
        ab = Gb === hb ? (Bb - Ob) / Yb % 6 : Gb === Bb ? (Ob - hb) / Yb + 2 : (hb - Bb) / Yb + 4;
        return [(60 * ab + 360) % 360, Sb, Lb]
      }(bb), Ob = 0 === hb ? 0 : Math.min(.6, hb + .03), Gb = Bb > .5 ? -1 : 1, Ub = yb(Bb + .09 * Gb);
      return {
        panel: bb,
        slot: Vb(ub, Ob, Ub),
        slotSelected: Vb(ub, Ob, yb(Ub + .2 * Gb)),
        slotUnavailable: Vb(ub, Ob, yb(Bb + -.1 * Gb))
      }
    }

    function yb(bb) {
      return Math.min(1, Math.max(0, bb))
    }

    function Vb(bb, ub, hb) {
      const Bb = (1 - Math.abs(2 * hb - 1)) * ub,
        Ob = Bb * (1 - Math.abs(bb / 60 % 2 - 1)),
        Gb = hb - Bb / 2;
      let Ub;
      return Ub = bb < 60 ? [Bb, Ob, 0] : bb < 120 ? [Ob, Bb, 0] : bb < 180 ? [0, Bb, Ob] : bb < 240 ? [0, Ob, Bb] : bb < 300 ? [Ob, 0, Bb] : [Bb, 0, Ob], "#" + Ub.map((bb => function(bb) {
        return Math.round(255 * bb).toString(16).padStart(2, "0")
      }(bb + Gb))).join("")
    }
    var Fb = hb(36148),
      fb = hb(4053),
      kb = hb(2273),
      Tb = hb(2276),
      cb = hb(36201),
      Qb = hb(4584),
      Rb = hb(1366),
      bu = hb(588);

    function uu(bb, ub, hb, Bb) {
      bb.style.display = "";
      const Ob = bb.offsetWidth,
        Gb = bb.offsetHeight,
        Ub = Math.min(Math.max((ub.left + ub.right) / 2 - Ob / 2, 8), window.innerWidth - 8 - Ob);
      let Lb = ub.top - hb - Gb;
      const Yb = [...Bb].sort(((bb, ub) => ub.top - bb.top));
      for (const Sb of Yb) Ub < Sb.right && Ub + Ob > Sb.left && Lb < Sb.bottom && Lb + Gb > Sb.top && (Lb = Sb.top - 8 - Gb);
      return Lb < 8 ? (bb.style.display = "none", null) : (bb.style.transform = `translate(${Ub-ub.left}px, ${Lb-ub.top}px)`, {
        left: Ub,
        top: Lb,
        right: Ub + Ob,
        bottom: Lb + Gb
      })
    }

    function hu(bb) {
      const ub = [];
      for (const hb of document.querySelectorAll(bb)) {
        const bb = hb.getBoundingClientRect();
        bb.width > 0 && "visible" === getComputedStyle(hb).visibility && ub.push(bb)
      }
      return ub
    }

    function Bu(bb, ub) {
      return bb.clientX >= ub.left - 8 && bb.clientX <= ub.right + 8 && bb.clientY >= ub.top - 8 && bb.clientY <= ub.bottom + 8
    }
    var Ou = hb(8613);
    class Gu {
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
      hold(bb, ub) {
        this.suspended || (this.offered ? ub || this.setPhase("idle") : bb && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : bb || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(bb) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const ub = this.phase;
        this.phase = bb, this.deps.onPhase(bb, ub)
      }
    }
    const Uu = 25 * Math.PI / 180,
      Lu = 45 * Math.PI / 180;
    class Yu extends Gu {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(bb, ub, hb) {
        this.speed = hb;
        const Bb = Math.hypot(bb, ub),
          Ob = Bb > 0 ? Math.acos(Math.min(1, -ub / Bb)) : Math.PI;
        this.hold(Bb >= .8 && Ob <= Uu, Bb >= .5 && Ob <= Lu)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Su = hb(1184);

    function au(bb, ub) {
      const hb = (0, Bb.useRef)(null),
        Ob = (0, Bb.useRef)(ub);
      return Ob.current = ub, (0, Bb.useEffect)((() => {
        if (!bb) return;
        const {
          create: ub,
          elementRef: Bb,
          ringRef: Gb,
          classPrefix: Ub,
          keptBehindMovementPanels: Lb,
          resizeEnds: Yb
        } = Ob.current, Sb = {
          charging: `${Ub}Charging`,
          armed: `${Ub}Armed`,
          ready: `${Ub}Ready`,
          locked: `${Ub}Locked`
        };
        let ab = null;
        const Hb = ub({
          onPhase: (bb, ub) => {
            const hb = Bb.current;
            if (null !== hb) {
              for (const [ub, Bb] of Object.entries(Sb)) hb.classList.toggle(Bb, ub === bb);
              if ("charging" === bb) ab = Gb.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === bb) {
                var Ub;
                null === (Ub = ab) || void 0 === Ub || Ub.cancel(), ab = null
              }
              var Lb, Yb;
              if ("armed" === bb && "charging" === ub && Ob.current.onArmed(), "ready" === bb && Ou.f.play("lockReady"), "locked" === bb) Ou.f.play("lockLocked"), null === (Lb = (Yb = Ob.current).onLocked) || void 0 === Lb || Lb.call(Yb);
              "locked" === ub && Ob.current.onUnlocked()
            }
          }
        });
        hb.current = Hb;
        const wb = () => {
            Hb.suspend()
          },
          Zb = () => {
            "hidden" === document.visibilityState && wb()
          },
          Xb = () => {
            Yb ? Hb.suspend() : Hb.suspendArming()
          },
          pb = (0, Su.g)((bb => {
            let {
              keepsMovement: ub
            } = bb;
            ub && Lb ? Hb.suspendArming() : wb()
          }));
        return document.addEventListener("visibilitychange", Zb), window.addEventListener("blur", wb), window.addEventListener("resize", Xb), () => {
          pb(), document.removeEventListener("visibilitychange", Zb), window.removeEventListener("blur", wb), window.removeEventListener("resize", Xb), Hb.cancel(), hb.current = null
        }
      }), [bb]), (0, rb.d)("localPlayerAliveSet", (() => {
        var bb;
        null === (bb = hb.current) || void 0 === bb || bb.suspend()
      })), hb
    }
    var Hu = hb(2332),
      wu = hb(2351),
      Zu = hb(1023),
      Xu = hb(3183),
      pu = hb(2358);

    function ou(bb, ub, hb) {
      const Bb = function(bb, ub, hb) {
        const Bb = hb.map((hb => ({
            left: Math.max(0, hb.left),
            top: Math.max(0, hb.top),
            right: Math.min(bb, hb.right),
            bottom: Math.min(ub, hb.bottom)
          }))).filter((bb => bb.right > bb.left && bb.bottom > bb.top)),
          Ob = [...new Set([0, ub, ...Bb.flatMap((bb => [bb.top, bb.bottom]))])].sort(((bb, ub) => bb - ub)),
          Gb = [];
        for (let Ub = 0; Ub < Ob.length - 1; Ub++) {
          const ub = Ob[Ub],
            hb = Ob[Ub + 1],
            Lb = Bb.filter((bb => bb.top <= ub && bb.bottom >= hb)).map((bb => [bb.left, bb.right])).sort(((bb, ub) => bb[0] - ub[0]));
          let Yb = 0;
          for (const [bb, Bb] of Lb) bb > Yb && Gb.push({
            left: Yb,
            top: ub,
            right: bb,
            bottom: hb
          }), Yb = Math.max(Yb, Bb);
          Yb < bb && Gb.push({
            left: Yb,
            top: ub,
            right: bb,
            bottom: hb
          })
        }
        return Gb
      }(bb, ub, hb);
      if (0 === Bb.length) return 'path("M0 0Z")';
      if (1 === Bb.length && 0 === Bb[0].left && 0 === Bb[0].top && Bb[0].right === bb && Bb[0].bottom === ub) return "";
      const Ob = bb => Math.round(10 * bb) / 10;
      return `path("${Bb.map((bb=>`M${Ob(bb.left)} ${Ob(bb.top)}H${Ob(bb.right)}V${Ob(bb.bottom)}H${Ob(bb.left)}Z`)).join("")}")`
    }

    function Au(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Ob = [],
        Gb = 2 * hb / Bb;
      for (let Ub = 0; Ub < Bb; Ub++) {
        const Bb = ub - hb + Ub * Gb,
          Lb = Bb + Gb,
          Yb = Math.min(Math.max(ub, Bb), Lb) - ub,
          Sb = Math.sqrt(Math.max(0, hb * hb - Yb * Yb));
        Ob.push({
          left: bb - Sb,
          top: Bb,
          right: bb + Sb,
          bottom: Lb
        })
      }
      return Ob
    }
    var lu = hb(8615),
      Ku = hb(36183);

    function Wu(bb) {
      const ub = bb.getBoundingClientRect(),
        hb = {
          left: ub.left,
          top: ub.top,
          right: ub.right,
          bottom: ub.bottom
        },
        Bb = (0, cb.g)(bb);
      if (Bb.whole) return [hb];
      const Ob = function(bb) {
          const ub = bb.right - bb.left,
            hb = bb.bottom - bb.top,
            Bb = Math.min(ub, hb) / 2,
            Ob = (bb.left + bb.right) / 2,
            Gb = (bb.top + bb.bottom) / 2;
          return ub >= hb ? [{
            left: bb.left + Bb,
            top: bb.top,
            right: bb.right - Bb,
            bottom: bb.bottom
          }, ...Au(bb.left + Bb, Gb, Bb), ...Au(bb.right - Bb, Gb, Bb)] : [{
            left: bb.left,
            top: bb.top + Bb,
            right: bb.right,
            bottom: bb.bottom - Bb
          }, ...Au(Ob, bb.top + Bb, Bb), ...Au(Ob, bb.bottom - Bb, Bb)]
        }(hb),
        Gb = Bb.keyBox;
      if (Gb) {
        const bb = (hb.left + hb.right) / 2,
          ub = (hb.top + hb.bottom) / 2;
        Ob.push({
          left: bb - Gb.width / 2,
          top: ub - Gb.height / 2,
          right: bb + Gb.width / 2,
          bottom: ub + Gb.height / 2
        })
      }
      return Ob
    }

    function Cu(bb) {
      const ub = bb.getBoundingClientRect();
      return 0 === ub.width && 0 === ub.height || "visible" !== getComputedStyle(bb).visibility ? [] : [(0, lu.j)(ub, 44)]
    }

    function du(bb, ub) {
      (0, Bb.useEffect)((() => {
        const hb = bb.current;
        if (!ub || !hb) return;
        const Bb = () => {
          const bb = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            ub = bb.find((bb => bb.classList.contains("TouchInteractHit")));
          ub !== Ob && (Ob && Gb.unobserve(Ob), Ob = ub, ub && Gb.observe(ub));
          const Bb = Array.from(document.querySelectorAll(pu.b)),
            Ub = [...bb.flatMap((bb => Wu(bb))), ...Bb.flatMap(Cu)],
            Lb = function(bb, ub) {
              const hb = ub.map((ub => ({
                left: ub.left - bb.left,
                top: ub.top - bb.top,
                right: ub.right - bb.left,
                bottom: ub.bottom - bb.top
              })));
              return ou(Math.ceil(bb.width), Math.ceil(bb.height), hb)
            }(hb.getBoundingClientRect(), Ub);
          hb.style.clipPath !== Lb && (hb.style.clipPath = Lb)
        };
        let Ob;
        const Gb = new ResizeObserver((() => {
          Bb()
        }));
        Bb(), Gb.observe(hb);
        const Ub = hb.closest(".InGameUi"),
          Lb = new MutationObserver(Bb);
        Ub && Lb.observe(Ub, {
          attributes: !0,
          attributeFilter: ["class", Ku.g]
        });
        const Yb = [(0, Wb.l)(Xu.d, Bb), (0, Wb.l)(pu.v, Bb), (0, Wb.l)(pu.e, Bb)];
        return () => {
          Gb.disconnect(), Lb.disconnect();
          for (const bb of Yb) bb();
          hb.style.clipPath = ""
        }
      }), [bb, ub])
    }
    var ru = hb(4163);

    function ju(bb) {
      var ub;
      let {
        onMove: hb,
        mode: Ob,
        speedCurve: Gb,
        autorun: Ub = !1
      } = bb;
      const Lb = (0, Bb.useRef)(null),
        Yb = (0, Bb.useRef)(null),
        ab = (0, Bb.useRef)(null),
        Hb = (0, Bb.useRef)(null),
        Zb = (0, Bb.useRef)(null),
        Xb = (0, Bb.useRef)(null),
        pb = (0, Bb.useRef)(null),
        ob = (0, Bb.useRef)(null),
        Ab = (0, Bb.useRef)(null),
        lb = (0, Bb.useRef)(!1),
        Kb = (0, Bb.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: Wb
        } = (0, gb.K)(),
        Cb = (0, ru.k)(Ob),
        db = (0, jb.j)(["notchSize"]).notchSize,
        rb = db.left,
        nb = (0, Bb.useRef)(16),
        Db = (0, wu.c)(),
        [xb, zb, ib] = "pinned" === Ob ? Hu.q : null !== (ub = Db.hudElements.joystick) && void 0 !== ub ? ub : Hu.q,
        vb = "pinned" === Ob ? null : Db.hudSafe,
        tb = Math.max(ru.h, ru.i * ib);
      du(Yb, "pinned" !== Ob);
      const Jb = function(bb, ub, hb, Ob, Gb) {
        const Ub = (0, Bb.useRef)(null),
          Lb = () => {
            clearInterval(Ub.current), Ub.current = null
          },
          Yb = au(bb, {
            create: bb => new Yu(bb),
            elementRef: ub,
            ringRef: hb,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: Gb,
            onLocked: () => {
              Ub.current = setInterval((() => {
                wb.gameBridge.lookup("dropAhead", null) && (Ou.f.play("autorunLedgeStop"), Yb.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              Lb(), Ob()
            }
          });
        return (0, Bb.useEffect)((() => Lb), []), Yb
      }(Ub, ab, pb, (() => {
        qb(), Pb()
      }), (() => {
        eb(), null === Ab.current && Jb.current.suspend()
      }));

      function eb() {
        const bb = ab.current.getBoundingClientRect();
        Ab.current = uu(ob.current, bb, 80, hu(`.TouchInventoryKey, ${pu.b}`)), lb.current = null !== Ab.current && Bu(Kb.current, Ab.current)
      }

      function Nb() {
        const {
          innerWidth: bb,
          innerHeight: ub
        } = window, hb = (0, pu.H)(vb, bb, ub, (0, pu.K)(db, bb, ub), nb.current);
        return {
          left: hb[3],
          bottom: hb[2]
        }
      }

      function Mb(bb) {
        ab.current.style.transform = `translate(${bb.x-tb}px, ${bb.y-tb}px)`
      }

      function mb(bb) {
        const ub = ab.current;
        ub.classList.add("Resting"), ub.classList.toggle("Returning", bb), ub.style.display = "fixed_hidden" === Ob ? "none" : "block", Mb(function() {
          const {
            innerWidth: bb,
            innerHeight: ub
          } = window, hb = Nb(), Bb = rb * bb / 100 + hb.left, Ob = Lb.current.offsetHeight || ub, Gb = ((0, Zu.e)(bb, ub) ? ru.e : ru.d) + hb.bottom;
          return {
            x: Math.min(bb - tb, Math.max(tb, Bb + ru.f + xb * bb)),
            y: Math.min(Ob - tb, Math.max(tb, Ob - Gb + zb * Ob))
          }
        }())
      }
      const Ib = (0, Bb.useRef)({
        restFixed: mb,
        release: Eb
      });

      function Pb() {
        Cb ? mb("fixed_shown" === Ob) : "floating" === Ob && (ab.current.style.display = "none"), hb({
          x: 0,
          y: 0
        })
      }

      function qb() {
        Xb.current = null, Zb.current = null, Hb.current.style.transform = "translate(-50%, -50%)"
      }

      function Eb(bb) {
        qb();
        const ub = Jb.current;
        bb && null !== ub && void 0 !== ub && ub.lift() ? hb({
          x: 0,
          y: -ub.lockedSpeed
        }) : (null === ub || void 0 === ub || ub.cancel(), Pb())
      }

      function yb(bb) {
        const ub = Array.from(bb.touches).find((bb => bb.identifier === Xb.current));
        if (null === Zb.current || null === Xb.current || (0, bu.J)(ub)) return;
        const Bb = Jb.current,
          Ob = ub.clientX - Zb.current.x,
          Ub = ub.clientY - Zb.current.y,
          Lb = Math.hypot(Ob, Ub),
          Yb = Lb > 0 ? Math.min(1, tb / Lb) : 0,
          Sb = Ob * Yb,
          ab = Ub * Yb,
          wb = Math.hypot(Sb, ab) / tb,
          pb = Gb && wb > 0 ? Gb(wb) / wb : 1;
        Hb.current.style.transform = `translate(calc(-50% + ${Sb}px), calc(-50% + ${ab}px))`;
        const ob = Sb / tb,
          Wb = ab / tb;
        if (hb({
            x: ob * pb,
            y: Wb * pb
          }), null !== Bb && null !== Ab.current) {
          Bb.move(ob, Wb, wb * pb), Kb.current = {
            clientX: ub.clientX,
            clientY: ub.clientY
          };
          const bb = lb.current;
          lb.current = Bu(ub, Ab.current), lb.current !== bb && Bb.target(lb.current)
        }
      }
      return Ib.current = {
        restFixed: mb,
        release: Eb
      }, (0, Bb.useLayoutEffect)((() => {
        if (!Cb) return;
        const bb = () => {
          nb.current = (0, pu.N)(document)
        };
        bb(), null === Xb.current && Ib.current.restFixed(!1);
        const ub = new ResizeObserver((() => {
          bb(), null === Xb.current && Ib.current.restFixed(!1)
        }));
        ub.observe(Lb.current);
        const hb = ab.current;
        return () => {
          ub.disconnect(), hb.classList.remove("Resting", "Returning"), null === Xb.current && (hb.style.display = "", hb.style.transform = "")
        }
      }), [Cb, Ob, db, xb, zb, tb, vb]), (0, Bb.useEffect)((() => {
        const bb = bb => {
            const ub = Xb.current;
            null === ub || Array.from(bb.touches).some((bb => bb.identifier === ub)) || Ib.current.release("touchend" === bb.type && Array.from(bb.changedTouches).some((bb => bb.identifier === ub)))
          },
          ub = () => {
            null !== Xb.current && Ib.current.release(!1)
          },
          hb = () => {
            "hidden" === document.visibilityState && ub()
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
        }), window.addEventListener("blur", ub), document.addEventListener("visibilitychange", hb);
        const Bb = (0, Su.g)((bb => {
          let {
            keepsMovement: hb
          } = bb;
          hb || ub()
        }));
        return () => {
          Bb(), document.removeEventListener("touchstart", bb, {
            capture: !0
          }), document.removeEventListener("touchmove", bb, {
            capture: !0
          }), document.removeEventListener("touchend", bb, {
            capture: !0
          }), document.removeEventListener("touchcancel", bb, {
            capture: !0
          }), window.removeEventListener("blur", ub), document.removeEventListener("visibilitychange", hb)
        }
      }), []), (0, Bb.useEffect)((() => {
        const bb = Lb.current,
          ub = bb => {
            bb.preventDefault()
          };
        return bb.addEventListener("touchstart", ub, {
          passive: !1
        }), () => {
          bb.removeEventListener("touchstart", ub)
        }
      }), []), (0, Sb.jsxs)("div", {
        ref: Lb,
        className: "JoystickZone",
        style: Cb && (xb > 0 || ib > 1 || Nb().left > 0) ? {
          width: `max(35vw, calc(${rb+100*xb}vw + ${Nb().left+ru.f+tb+24}px))`
        } : void 0,
        onTouchStart: function(bb) {
          var ub;
          if (null !== Xb.current) return;
          const hb = Array.from(bb.changedTouches).find((bb => {
            var ub;
            return null === (ub = Lb.current) || void 0 === ub ? void 0 : ub.contains(bb.target)
          }));
          if (hb) {
            if (null === (ub = Jb.current) || void 0 === ub || ub.startTouch(), Xb.current = hb.identifier, "pinned" === Ob) {
              const bb = ab.current.getBoundingClientRect();
              Zb.current = {
                x: bb.left + bb.width / 2,
                y: bb.top + bb.height / 2
              }
            } else {
              Zb.current = {
                x: hb.clientX,
                y: hb.clientY
              }, ab.current.classList.remove("Resting", "Returning"), ab.current.style.display = "block";
              const bb = Lb.current.getBoundingClientRect();
              Mb({
                x: hb.clientX - bb.left,
                y: hb.clientY - bb.top
              }), Ub && (Kb.current = {
                clientX: hb.clientX,
                clientY: hb.clientY
              }, eb())
            }
            yb(bb)
          }
        },
        onTouchMove: yb,
        children: [(0, Sb.jsx)("div", {
          ref: Yb,
          className: "JoystickTouchLayer"
        }), (0, Sb.jsxs)("div", {
          ref: ab,
          className: "Joystick",
          style: {
            width: 2 * tb + "px",
            height: 2 * tb + "px",
            transform: "pinned" === Ob ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Sb.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * tb + "px",
              height: 2 * tb + "px"
            }
          }), Ub && (0, Sb.jsxs)(Sb.Fragment, {
            children: [(0, Sb.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Sb.jsx)("circle", {
                ref: pb,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Sb.jsxs)("div", {
              ref: ob,
              className: "AutorunTarget",
              children: [(0, Sb.jsx)(sb.e, {
                name: "lock"
              }), Wb("settingsMenu:autoRun")]
            })]
          }), (0, Sb.jsx)("div", {
            ref: Hb,
            className: "JoystickKnob",
            style: {
              width: `${tb}px`,
              height: `${tb}px`
            }
          })]
        })]
      })
    }
    const nu = .35,
      Du = .22;

    function xu(bb) {
      if (bb < .1) return 0;
      if (bb < nu) {
        const ub = (bb - .1) / (nu - .1);
        return .06 + .16 * ub * ub
      }
      return bb < .85 ? Du + .78 * (bb - nu) / .5 : 1
    }

    function zu(bb, ub) {
      const hb = (0, Bb.useRef)(null);
      return (0, Bb.useLayoutEffect)((() => (cb.h.set(bb, hb.current, ub), () => {
        cb.h.set(bb, null)
      })), [bb, ub]), hb
    }
    const gu = "C",
      iu = "J",
      vu = "U",
      tu = "P",
      Ju = "A",
      eu = "G",
      Nu = "X",
      su = (0, Bb.forwardRef)((function(bb, ub) {
        let {
          slot: hb,
          canvasZone: Ob = !1,
          lit: Ub = !1,
          label: Lb,
          className: Yb,
          children: ab,
          ...Hb
        } = bb;
        return (0, Bb.useEffect)((() => (Wb.i.vp(Xu.d), () => {
          Wb.i.vp(Xu.d)
        })), []), (0, Sb.jsx)("div", {
          ref: ub,
          className: Gb()("TouchKeyHit", `TouchSlot${hb}`, Yb, {
            CanvasZone: Ob
          }),
          ...Hb,
          children: (0, Sb.jsxs)("div", {
            className: Gb()("TouchKey", {
              Lit: Ub,
              Labelled: void 0 !== Lb
            }),
            children: [ab, void 0 !== Lb && (0, Sb.jsx)("span", {
              className: "TouchKeyLabel",
              children: Lb
            })]
          })
        })
      }));

    function Mu(bb, ub) {
      (0, Bb.useEffect)((() => () => {
        ub.current && (ub.current = !1, (0, Tb.A)(bb, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function mu(bb, ub) {
      const hb = ub ? [Nu] : [tu, Nu];
      return bb.filter((bb => null !== bb)).slice(0, hb.length).map(((bb, ub) => {
        const Ob = hb[ub];
        return (0, Sb.jsx)(Bb.Fragment, {
          children: bb.render(Ob)
        }, `${bb.id}:${Ob}`)
      }))
    }
    var Iu = hb(36192);
    class Pu extends Gu {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(bb, ub) {
        this.start = {
          x: bb,
          y: ub
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(bb, ub, hb) {
        const Bb = Math.hypot(bb - this.start.x, ub - this.start.y) <= 12;
        this.moved ||= !Bb;
        const Ob = null !== hb && ub < this.start.y - 12 && Bu({
          clientX: bb,
          clientY: ub
        }, hb);
        this.hold(!this.moved, Bb || Ob)
      }
    }
    const qu = new Set;

    function Eu(bb) {
      const ub = new Set(Array.from(bb.touches, (bb => bb.identifier)));
      for (const hb of qu) {
        for (const bb of hb.ids) ub.has(bb) || hb.ids.delete(bb);
        if (0 === hb.ids.size) {
          qu.delete(hb);
          hb.pressesOnPointerDown && "touchstart" === bb.type && Array.from(bb.changedTouches).some((bb => bb.target instanceof Node && hb.element.contains(bb.target))) || hb.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const pU of ["touchstart", "touchmove"]) window.addEventListener(pU, Eu, {
        capture: !0,
        passive: !0
      });

    function yu(bb) {
      let {
        pressesOnPointerDown: ub = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const hb = (0, Bb.useRef)(bb);
      hb.current = bb;
      const Ob = (0, Bb.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: ub,
        release: () => {
          hb.current()
        }
      });
      (0, Bb.useEffect)((() => {
        const bb = Ob.current;
        return () => {
          qu.delete(bb), bb.ids.clear()
        }
      }), []);
      const Gb = bb => {
        const ub = Ob.current;
        for (const hb of Array.from(bb.changedTouches)) ub.ids.delete(hb.identifier);
        0 === ub.ids.size && qu.delete(ub)
      };
      return {
        onTouchStart: bb => {
          const ub = Ob.current;
          ub.element = bb.currentTarget;
          for (const hb of Array.from(bb.changedTouches)) hb.target instanceof Node && bb.currentTarget.contains(hb.target) && ub.ids.add(hb.identifier);
          ub.ids.size > 0 && qu.add(ub)
        },
        onTouchEnd: Gb,
        onTouchCancel: Gb
      }
    }

    function Vu(bb, ub) {
      return null === ub ? null : (0, Iu.b)(bb.nativeEvent.changedTouches, ub.id)
    }

    function Fu(bb) {
      let {
        lockable: ub
      } = bb;
      const {
        t: hb
      } = (0, gb.K)(), Ob = "round" === (0, Hu.eb)().hudShape, Gb = (0, Bb.useRef)(!1);
      Mu(kb.s.Jump, Gb);
      const Ub = (0, Bb.useRef)(null),
        Lb = (0, Bb.useRef)(null),
        Yb = (0, Bb.useRef)(null),
        ab = (0, Bb.useRef)(null),
        Hb = (0, Bb.useRef)(null),
        wb = (0, Bb.useRef)(null),
        Zb = (0, Bb.useRef)(!1),
        Xb = (bb, ub) => {
          Gb.current = bb, (0, Tb.A)(kb.s.Jump, bb, ub)
        },
        pb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          Gb.current && (Ub.current && (0, Rb.e)(Ub.current, !1), Xb(!1, bb))
        },
        ob = au(ub, {
          create: bb => new Pu(bb),
          elementRef: Ub,
          ringRef: Lb,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const bb = Ub.current.getBoundingClientRect(),
              ub = Yb.current.parentElement,
              hb = ub.getBoundingClientRect(),
              Bb = {
                left: hb.left + ub.clientLeft,
                top: hb.top + ub.clientTop,
                right: hb.right - ub.clientLeft,
                bottom: hb.bottom - ub.clientTop
              };
            if (Hb.current = uu(Yb.current, Bb, 16, hu(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${pu.b}`)), null === Hb.current) return void ob.current.suspend();
            const Ob = Hb.current;
            wb.current = {
              left: Math.min(bb.left, Ob.left),
              top: Ob.top,
              right: Math.max(bb.right, Ob.right),
              bottom: bb.bottom
            }, Zb.current = null !== ab.current && Bu({
              clientX: ab.current.x,
              clientY: ab.current.y
            }, Ob)
          },
          onUnlocked: () => {
            null === ab.current && pb()
          }
        }),
        Ab = bb => {
          var ub;
          ab.current = null, null === (ub = ob.current) || void 0 === ub || ub.cancel(), pb(bb)
        },
        lb = yu((() => {
          Ab()
        })),
        Kb = bb => {
          const ub = ab.current;
          var hb;
          return null === ub ? null !== (hb = ob.current) && void 0 !== hb && hb.locked ? null : "lifted" : Vu(bb, ub) ? "lifted" : (0, Iu.d)(bb.nativeEvent.touches, ub.id) ? null : "dropped"
        };
      return (0, Sb.jsxs)(su, {
        ref: Ub,
        slot: iu,
        className: "JumpKey",
        onTouchStart: bb => {
          lb.onTouchStart(bb), (0, Rb.e)(bb.currentTarget, !0), null === ab.current || (0, Iu.d)(bb.nativeEvent.touches, ab.current.id) || Ab();
          const ub = bb.changedTouches[0];
          var hb;
          null === ab.current && ub && (ab.current = {
            id: ub.identifier,
            x: ub.clientX,
            y: ub.clientY
          }, null === (hb = ob.current) || void 0 === hb || hb.press(ub.clientX, ub.clientY));
          Gb.current || Xb(!0, bb.nativeEvent)
        },
        onTouchMove: bb => {
          const ub = ab.current,
            hb = Vu(bb, ub);
          if (!hb) return;
          const Bb = ob.current;
          if (null === Bb || void 0 === Bb || Bb.move(hb.clientX, hb.clientY, wb.current), null !== Bb && void 0 !== Bb && Bb.offered) {
            const bb = Bu(hb, Hb.current);
            bb !== Zb.current && (Zb.current = bb, Bb.target(bb))
          }
          ub.x = hb.clientX, ub.y = hb.clientY
        },
        onTouchEnd: bb => {
          var ub;
          lb.onTouchEnd(bb);
          const hb = Kb(bb);
          null !== hb && ("dropped" !== hb ? (ab.current = null, null !== (ub = ob.current) && void 0 !== ub && ub.lift() ? (0, Rb.e)(bb.currentTarget, !1) : pb(bb.nativeEvent)) : Ab(bb.nativeEvent))
        },
        onTouchCancel: bb => {
          lb.onTouchCancel(bb), null !== Kb(bb) && Ab(bb.nativeEvent)
        },
        children: [(0, Sb.jsx)(sb.e, {
          name: "arrow-up-from-line"
        }), ub && (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Sb.jsx)(sb.e, {
              name: "lock"
            })
          }), (0, Sb.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Sb.jsx)("rect", {
              ref: Lb,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Ob ? 48 : 0,
              pathLength: 1
            })
          }), (0, Sb.jsxs)("div", {
            ref: Yb,
            className: "JumpLockTarget",
            children: [(0, Sb.jsx)(sb.e, {
              name: "lock"
            }), hb("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const fu = new WeakMap;
    class ku {
      constructor(bb) {
        this.zones = bb, this.followed = new Map, this.onStart = bb => {
          if (this.releaseMissing(bb.touches), bb.target instanceof HTMLCanvasElement)
            for (let hb = 0; hb < bb.changedTouches.length; hb++) {
              var ub;
              const {
                identifier: Bb,
                clientX: Ob,
                clientY: Gb
              } = bb.changedTouches[hb];
              this.release(Bb);
              const Ub = this.zones.hitZone(Ob, Gb);
              if (!Ub) continue;
              const {
                key: Lb
              } = Ub;
              null === (ub = fu.get(Lb)) || void 0 === ub || ub.cancel();
              const Yb = {
                hit: Ub.element,
                key: Lb,
                x: Ub.x,
                y: Ub.y,
                reach: .6 * Ub.radius
              };
              this.followed.set(Bb, Yb), (0, Rb.e)(Ub.element, !0), Tu(Yb, Ob, Gb)
            }
        }, this.onMove = bb => {
          this.releaseMissing(bb.touches);
          for (let ub = 0; ub < bb.changedTouches.length; ub++) {
            const {
              identifier: hb,
              clientX: Bb,
              clientY: Ob
            } = bb.changedTouches[ub], Gb = this.followed.get(hb);
            Gb && Tu(Gb, Bb, Ob)
          }
        }, this.onEnd = bb => {
          for (let ub = 0; ub < bb.changedTouches.length; ub++) this.release(bb.changedTouches[ub].identifier)
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
        for (const ub of [...this.followed.keys()])(0, Iu.d)(bb, ub) || this.release(ub)
      }
      releaseAll() {
        for (const bb of [...this.followed.keys()]) this.release(bb)
      }
      release(bb) {
        const ub = this.followed.get(bb);
        if (!ub) return;
        this.followed.delete(bb);
        for (const Ob of this.followed.values())
          if (Ob.key === ub.key) return;
        (0, Rb.e)(ub.hit, !1);
        const {
          key: hb
        } = ub, Bb = hb.style.translate;
        hb.style.translate = "", Bb && fu.set(hb, hb.animate({
          translate: [Bb, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Tu(bb, ub, hb) {
      let {
        key: Bb,
        x: Ob,
        y: Gb,
        reach: Ub
      } = bb;
      const Lb = ub - Ob,
        Yb = hb - Gb,
        Sb = Math.min(1, Ub / (Math.hypot(Lb, Yb) || 1));
      Bb.style.translate = `${Lb*Sb}px ${Yb*Sb}px`
    }
    const cu = () => {
      const bb = (0, fb.g)(),
        ub = (0, Db.r)();
      return bb || ub
    };

    function Qu(bb) {
      (0, cb.i)(bb.x, bb.y)
    }
    const Ru = (0, Bb.memo)((function() {
        const bb = cu(),
          {
            joystickMode: ub,
            touchSpeedCurve: hb,
            autorun: Ob
          } = (0, jb.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Bb.useEffect)((() => ((0, Qb.j)(kb.t.TouchControls, kb.t.TouchControls), () => {
          (0, Qb.j)(kb.t.TouchControls, 0), (0, cb.i)(0, 0)
        })), []), (0, Sb.jsx)("div", {
          className: Gb()("TouchMovementWrapper", {
            Hidden: bb
          }),
          "data-camera-keeper": "",
          children: (0, Sb.jsx)(ju, {
            onMove: Qu,
            mode: ub,
            speedCurve: hb ? xu : void 0,
            autorun: Ob
          })
        })
      })),
      bh = (0, Bb.memo)((function() {
        const bb = cu(),
          {
            clientEscMenuOptions: ub
          } = (0, jb.j)(["clientEscMenuOptions"]),
          hb = ub.touchActionButtons;
        return (0, Bb.useEffect)((() => new ku(cb.h).start()), []), (0, Bb.useEffect)((() => {
          Wb.i.vp(Xu.d)
        }), [bb]), (0, Sb.jsxs)("div", {
          className: Gb()("TouchComponentsButtons", {
            Hidden: bb
          }),
          "data-camera-keeper": "",
          children: [(0, Sb.jsx)(Fu, {
            lockable: ub.jumpLock && !bb
          }), (0, Sb.jsx)(wh, {
            hidden: bb,
            actionButtons: hb
          }), (0, Sb.jsx)(hh, {})]
        })
      }));

    function uh(bb) {
      const ub = ub => hb => {
        (0, Rb.e)(hb.currentTarget, ub), bb(ub, hb.nativeEvent)
      };
      return {
        onPointerDown: ub(!0),
        onPointerUp: ub(!1),
        onPointerCancel: ub(!1)
      }
    }

    function hh() {
      const bb = (0, Kb.f)("canCrouch"),
        ub = (0, rb.i)("crouching"),
        hb = (0, Bb.useRef)(!1);
      Mu(kb.s.Crouch, hb);
      const Ob = (bb, ub) => {
          hb.current = bb, (0, Tb.A)(kb.s.Crouch, bb, ub)
        },
        Gb = (0, Bb.useRef)(null),
        Ub = () => {
          hb.current && (Gb.current && (0, Rb.e)(Gb.current, !1), Ob(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        Lb = yu(Ub);
      return (0, Bb.useEffect)((() => {
        !1 === bb && Ub()
      }), [bb]), !1 === bb ? null : (0, Sb.jsx)(su, {
        ref: Gb,
        slot: gu,
        className: "CrouchKey",
        lit: ub,
        ...Lb,
        ...uh(Ob),
        children: (0, Sb.jsx)(sb.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Bh = [{
        icon: "arrows-rotate"
      }],
      Oh = [{
        icon: "Arrow"
      }],
      Gh = [{
        icon: "crosshairs"
      }],
      Uh = [{
        icon: "swords"
      }],
      Lh = [{
        icon: "hand-back-point-up"
      }],
      Yh = [{
        icon: "Firecracker"
      }];

    function Sh(bb, ub, hb, Bb) {
      return {
        id: JSON.stringify(ub),
        render: Ob => (0, Sb.jsx)(Zh, {
          code: bb,
          slot: Ob,
          icon: ub,
          label: Bb,
          hidden: hb
        })
      }
    }

    function ah(bb, ub) {
      return {
        id: "fly",
        render: hb => (0, Sb.jsx)(Hh, {
          slot: hb,
          flying: bb,
          label: ub
        })
      }
    }

    function Hh(bb) {
      let {
        slot: ub,
        flying: hb,
        label: Bb
      } = bb;
      return (0, Sb.jsx)(su, {
        slot: ub,
        className: "FlyKey",
        lit: hb,
        label: Bb,
        ...uh(((bb, ub) => {
          (0, Tb.A)(kb.s.Fly, bb, ub)
        })),
        children: (0, Sb.jsx)(sb.e, {
          name: "feather-pointed"
        })
      })
    }

    function wh(bb) {
      var ub, hb;
      let {
        hidden: Bb,
        actionButtons: Ob
      } = bb;
      const {
        t: Gb
      } = (0, gb.K)(), {
        gun: Ub,
        aimable: Lb,
        chargeName: Yb
      } = (0, rb.i)("heldItemAim"), ab = (0, rb.i)("gliderBoostFuel"), {
        canFly: Hb,
        flying: wb
      } = (0, rb.i)("flight"), Zb = (0, Kb.f)("touchscreenActionButton"), Xb = Ub ? Bh : Zb, pb = Lb ? {
        icon: Oh,
        label: Gb("touchKeys:aim")
      } : null, ob = null !== Yb ? {
        icon: [{
          icon: Yb
        }]
      } : null, Ab = null !== pb && void 0 !== pb ? pb : ob, lb = null !== (ub = null === (hb = Ub ? pb : null !== ob && void 0 !== ob ? ob : pb) || void 0 === hb ? void 0 : hb.icon) && void 0 !== ub ? ub : Lh, Wb = [!Ob && Ab ? Sh(cb.c.Action2, Ab.icon, Bb, Ab.label) : null, Ub ? Sh(cb.c.Action3, Gh, Bb, Gb("touchKeys:scope")) : null, Hb ? ah(wb, Gb("touchKeys:fly")) : null];
      return (0, Sb.jsxs)(Sb.Fragment, {
        children: [Xb && (0, Sb.jsx)(Zh, {
          code: cb.c.Action1,
          slot: eu,
          icon: Xb,
          label: Ub ? Gb("touchKeys:reload") : void 0,
          hidden: Bb
        }, JSON.stringify(Xb)), Ob && (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)(Zh, {
            code: cb.c.Attack,
            slot: Ju,
            icon: Uh,
            name: Gb("touchKeys:attack"),
            hidden: Bb
          }), (0, Sb.jsx)(Zh, {
            code: cb.c.Use,
            slot: vu,
            icon: lb,
            name: Gb("touchKeys:use"),
            hidden: Bb
          })]
        }), mu(Wb, Ob), ab > 0 && (0, Sb.jsx)(Zh, {
          code: cb.c.Boost,
          slot: Nu,
          icon: Yh,
          label: Gb("touchKeys:boost", {
            fuel: ab > 99 ? "99+" : ab
          }),
          hidden: Bb
        })]
      })
    }

    function Zh(bb) {
      let {
        code: ub,
        slot: hb,
        icon: Bb,
        label: Ob,
        name: Gb,
        hidden: Ub
      } = bb;
      const Lb = zu(ub, Ub);
      return (0, Sb.jsx)(su, {
        ref: Lb,
        slot: hb,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Ob,
        role: void 0 !== Gb ? "img" : void 0,
        "aria-label": Gb,
        children: (0, Sb.jsx)(Yb.c, {
          text: Bb
        })
      })
    }
    var Xh = hb(4030),
      ph = hb(2789),
      oh = hb(609);
    const Ah = (0, Bb.memo)((function() {
      (0, Ab.e)();
      const bb = (0, Bb.useRef)([]),
        ub = (0, ph.d)(),
        hb = (0, Bb.useRef)(0),
        Ob = (0, Bb.useRef)(0),
        Gb = (0, Bb.useRef)([]),
        Ub = (0, Bb.useRef)(null);

      function ab(hb, Bb, Ob, Gb) {
        const Ub = (0, oh.e)(),
          Lb = setTimeout((() => {
            bb.current = bb.current.filter((bb => bb.id !== Ub)), ub()
          }), Gb);
        wb.gameBridge.send("recordFlyingMiddleText", {
          content: hb,
          eh: Bb,
          angle: Ob,
          Nh: Gb
        }), bb.current.push({
          id: Ub,
          content: hb,
          eh: Bb,
          Nh: Gb,
          removeTimeout: Lb,
          angle: Ob
        }), ub()
      }
      return (0, rb.d)("shotDamageToShow", (bb => {
        let {
          damage: ub,
          wasCrit: hb,
          distance: Bb
        } = bb;
        const Ob = -Math.PI / 4 + Math.random() * Math.PI / 2;
        ab(hb ? [{
          str: ub.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [ub.toString()], Bb, Ob, 1e3)
      })), (0, Lb.h)("flyingMiddleMessage", (bb => {
        let {
          content: ub,
          eh: Bb,
          Nh: Lb
        } = bb;
        Gb.current.push({
          content: ub,
          eh: Bb,
          Nh: Lb
        });
        const Yb = () => {
          const {
            content: bb,
            eh: ub,
            Nh: Bb
          } = Gb.current.shift(), Ub = function(bb) {
            const ub = -Math.PI / 4,
              hb = Math.PI / 4,
              Bb = hb - ub,
              Ob = (1 + Math.sqrt(5)) / 2,
              Gb = 2 * Math.PI / (Ob * Ob);
            let Ub = bb + Gb;
            for (; Ub > hb;) Ub -= Bb;
            for (; Ub < ub;) Ub += Bb;
            const Lb = Math.PI / 6;
            if (Math.abs(Ub - bb) < Lb) {
              Ub = bb + (Math.sign(Ub - bb) || 1) * Lb, Ub > hb && (Ub = bb - Lb), Ub < ub && (Ub = bb + Lb)
            }
            return Ub
          }(Ob.current);
          Ob.current = Ub, hb.current = Date.now(), ab(bb, ub, Ub, Bb)
        };
        if (!Ub.current) {
          const bb = () => {
            Gb.current.length > 0 && Yb(), 0 === Gb.current.length && (clearInterval(Ub.current), Ub.current = null)
          };
          Ub.current = setInterval(bb, 200), hb.current + 200 < Date.now() && bb()
        }
        for (; Gb.current.length > 4;) Yb()
      })), (0, Lb.h)("forceFlyingMiddleMessage", (bb => {
        let {
          content: ub,
          eh: hb,
          angle: Bb,
          Nh: Ob
        } = bb;
        ab(ub, hb, Bb, Ob)
      })), (0, Bb.useEffect)((() => () => {
        clearInterval(Ub.current), Ub.current = null;
        for (const ub of bb.current) clearTimeout(ub.removeTimeout)
      }), []), (0, Sb.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: bb.current.map((bb => {
          const {
            id: ub,
            content: hb,
            eh: Bb,
            Nh: Ob,
            angle: Gb
          } = bb;
          return bb.pos || (bb.pos = function(bb, ub) {
            const hb = 50 / (bb ** .7 * .35);
            return {
              x: hb * Math.sin(ub),
              y: -hb * Math.cos(ub)
            }
          }(Bb, Gb)), (0, Sb.jsx)(lh, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Ob,
            enterActiveStyle: {
              transform: `translate(${bb.pos.x}vw, ${bb.pos.y}vh)`,
              transition: `transform ${Ob}ms ease-out`
            },
            children: (0, Sb.jsx)("div", {
              children: (0, Sb.jsx)(Yb.c, {
                text: hb
              })
            })
          }, ub)
        }))
      })
    }));

    function lh(bb) {
      let {
        children: ub,
        className: hb,
        classNames: Ob,
        timeout: Gb,
        enterActiveStyle: Ub
      } = bb;
      const [Lb, Yb] = (0, Bb.useState)(!1), [ab, Hb] = (0, Bb.useState)(!1), wb = (0, Bb.useRef)(null);
      return (0, Bb.useEffect)((() => {
        Yb(!0)
      }), []), (0, Sb.jsx)(Xh.e, {
        className: hb,
        classNames: Ob || hb,
        in: Lb,
        timeout: Gb,
        nodeRef: wb,
        onEntering: () => {
          Hb(!0)
        },
        children: (0, Bb.cloneElement)(ub, {
          ref: wb,
          style: ab && Ub || void 0
        })
      })
    }
    var Kh = hb(36208);

    function Wh() {
      const bb = (0, rb.i)("health");
      return (0, Sb.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Sb.jsx)(Kh.c, {
          placement: "statBars"
        }), (0, Sb.jsx)(Ch, {
          actualValue: bb.shield,
          maxValue: bb.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Sb.jsx)(Ch, {
          actualValue: bb.health,
          maxValue: bb.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Ch(bb) {
      let {
        actualValue: ub,
        maxValue: hb,
        hideAtValue: Bb,
        icon: Ob,
        className: Gb
      } = bb;
      return (0, Ab.f)(), null === ub || null === hb || ub === Bb || hb === Bb ? null : (0, Sb.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Sb.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Sb.jsx)("div", {
            className: `BottomScreenStatBar ${Gb}`,
            style: {
              transform: `scaleX(${Math.max(ub/hb,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Sb.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Sb.jsx)(sb.e, {
              name: Ob
            }), ` ${Math.ceil(ub)}/${hb}`]
          })]
        })
      })
    }
    var dh = hb(9085),
      rh = hb(4292),
      jh = hb(1227),
      nh = hb(2542),
      Dh = hb(1357),
      xh = hb(1206),
      zh = hb(3198),
      gh = hb(3256),
      ih = hb(3218),
      vh = hb(701),
      th = hb(3268),
      Jh = hb(115),
      eh = hb(8985),
      Nh = hb(314);

    function sh(bb, ub) {
      let {
        shownName: hb,
        lifeformType: Bb
      } = bb;
      return null !== hb ? hb : null !== Bb ? ub(`lifeform:${(0,Nh.oe)(Bb)}`) : null
    }
    var Mh = hb(3208),
      mh = hb(3213);
    const Ih = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Ph = (0, Bb.memo)((function() {
        var bb, ub;
        const hb = (0, Ab.e)(),
          Ob = (0, Zb.useNavigatePreserveSearch)(),
          {
            t: Ub
          } = (0, gb.K)(),
          {
            loadingOverlayVisible: Yb
          } = (0, jb.j)(["loadingOverlayVisible"]),
          ab = (0, Db.r)(),
          [Hb, Xb] = (0, Bb.useState)(!1),
          [pb, ob] = (0, Bb.useState)(!0),
          [lb, Wb] = (0, Bb.useState)(null),
          db = (0, ph.d)(),
          nb = (0, Kb.f)("respawnButtonText"),
          xb = (0, Kb.f)("usePlayAgainButton"),
          zb = (0, Kb.f)("useRespawnButton"),
          {
            gameNameWithVariation: ib
          } = (0, rb.i)("connectedGame"),
          vb = (0, Bb.useRef)(Cb.b.get("secsToRespawn")),
          tb = (0, Bb.useRef)(wb.gameBridge.latest("localPlayerAlive")),
          Jb = (0, Bb.useRef)(Cb.b.get("secsToRespawn")),
          eb = (0, Bb.useRef)(Cb.b.get("autoRespawn")),
          Nb = (0, Bb.useRef)(null),
          Mb = (0, Bb.useRef)(0),
          mb = (0, Bb.useRef)(0),
          [Ib, qb] = (0, Bb.useState)(!1),
          Eb = (0, Bb.useRef)(null),
          yb = (0, Bb.useRef)(null),
          Vb = (0, Bb.useRef)(null);
        (0, Kb.e)("secsToRespawn", (bb => {
          console.log("Received new secsToRespawn with", bb, "and current canRespawn value of ", eb.current), Jb.current = bb, Tb()
        })), (0, Kb.e)("autoRespawn", (bb => {
          console.log("Received autorespawn", bb, "current canRespawn value of ", vb.current), eb.current = bb, Tb()
        }));
        const Fb = bb => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", bb), bb || Mb.current++, tb.current = bb, Tb()
        };
        (0, rb.d)("localPlayerAliveSet", Fb), (0, Lb.h)(gh.k, (bb => {
          "connected" === bb && !tb.current && eb.current && vb.current <= 0 && (mb.current = 0, cb())
        })), (0, Bb.useEffect)((() => {
          const bb = wb.gameBridge.latest("localPlayerAlive");
          bb === tb.current ? (console.log("Updating respawn component from initial mount"), Tb()) : Fb(bb)
        }), []), (0, Bb.useEffect)((() => {
          if (Hb) {
            qb(!1);
            const bb = setTimeout((() => {
              qb(!0)
            }), 600);
            return (0, eh.e)(), () => {
              clearTimeout(bb)
            }
          }
          return () => {}
        }), [Hb]);
        (0, rb.d)("kill", (bb => {
          let {
            killer: ub,
            victim: hb,
            withItem: Bb
          } = bb;
          if (!hb.local) return;
          const Ob = ((bb, ub) => {
            if (bb.local) {
              const bb = Ih[ub];
              return bb ? Ub(bb) : null
            }
            const hb = sh(bb, Ub);
            return hb ? Ub("respawnPage:killedBy", {
              name: hb
            }) : null
          })(ub, Bb);
          Ob && Wb({
            text: Ob,
            deathCount: tb.current ? Mb.current + 1 : Mb.current
          })
        }));
        const fb = () => {
            Hb && eb.current && tb.current && Ib && Xb(!1)
          },
          kb = Hb && eb.current && tb.current && Ib && !Yb;
        (0, Lb.h)("usedKeyboard", (() => {
          fb()
        })), (0, mh.c)("respawn", kb, fb);
        const Tb = () => {
            ob(Jb.current >= 3 || !eb.current), tb.current ? (clearInterval(Nb.current), Nb.current = null, eb.current ? db() : Xb(!1)) : (Xb(!0), vb.current = Jb.current, db(), console.log("Running respawn stats updated", eb.current, vb.current), eb.current && vb.current <= 0 && cb(), clearInterval(Nb.current), vb.current > 0 && (Nb.current = setInterval((() => {
              vb.current = Math.max(vb.current - 1, 0), db(), vb.current <= 0 && (clearInterval(Nb.current), Nb.current = null, Cb.b.get("autoRespawn") && cb())
            }), 1e3)))
          },
          cb = () => {
            if (Date.now() - mb.current > 1e3) {
              const bb = () => {
                wb.gameBridge.send("respawn", null), mb.current = Date.now()
              };
              Cb.b.get("autoRespawn") ? bb() : (0, xh.fb)((() => {
                bb()
              }), "video_respawn")
            }
          },
          Qb = (0, Bb.useMemo)((() => {
            var bb;
            return null === (bb = (0, vh.q)(ib)) || void 0 === bb ? void 0 : bb.otherGameLinksOnRespawnPage
          }), [ib]),
          Rb = 0 === vb.current,
          bu = (null === lb || void 0 === lb ? void 0 : lb.deathCount) === Mb.current ? lb.text : null,
          uu = Hb && pb && !Yb,
          hu = ab && kb && null !== (bb = null === (ub = (0, Pb.h)()) || void 0 === ub ? void 0 : ub.getBoundButton("menuConfirm")) && void 0 !== bb ? bb : null,
          Bu = bb => Rb ? bb : Ub("respawnPage:actionInSeconds", {
            action: bb,
            seconds: vb.current
          });
        return (0, Sb.jsx)(dh.b, {
          showing: Hb,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Sb.jsx)(zh.d, {
            show: Hb,
            "data-holds-camera-keeper": "",
            children: (0, Sb.jsxs)(rh.b, {
              close: () => {
                Xb(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: eb.current || Yb ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Jh.j)() && (0, Sb.jsx)(Dh.d, {
                onClick: ih.e,
                children: Ub("homePage:backToGames")
              }), (0, Sb.jsxs)("div", {
                className: "RespawnContainer",
                onClick: fb,
                children: [(0, Sb.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Sb.jsx)("div", {
                    ref: yb,
                    className: "RespawnSideSquareBannerDiv",
                    children: hb[0] > 925 && (0, Sb.jsx)(nh.d, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: yb
                      },
                      showing: uu,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Sb.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Sb.jsxs)("div", {
                      className: Gb()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: ab
                      }),
                      children: [eb.current && (0, Sb.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Sb.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Sb.jsx)(sb.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Ub("respawnPage:youDied")]
                        }), (0, Sb.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === hu && (tb.current ? Ub("respawnPage:pressAnywhereToContinue") : Rb ? Ub("respawnPage:respawning") : Bu(Ub("general:respawn"))), null !== hu && (0, Sb.jsx)(Mh.b, {
                            text: Ub("controller:screensPressToContinue", {
                              button: Mh.f
                            }),
                            glyph: hu,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), bu && (0, Sb.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: bu
                        })]
                      }), !eb.current && (0, Sb.jsxs)(Sb.Fragment, {
                        children: [(0, Sb.jsxs)("div", {
                          className: Gb()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Qb
                          }),
                          children: [xb && (0, Sb.jsx)(Dh.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, xh.fb)((() => {
                                (0, jb.h)("inGameReplay");
                                const bb = (0, jh.e)(ib);
                                Ob(bb)
                              }), "video_start")
                            },
                            disabled: !Rb || !Ib,
                            touchPressOn: "pointerup",
                            children: Bu(Ub("respawnPage:playAgain"))
                          }), zb && (0, Sb.jsx)(Dh.e, {
                            className: "RespawnPageButton",
                            onClick: cb,
                            padDefaultFocus: !xb,
                            padBack: "sessionBasedGame:stayInLobby" === nb,
                            disabled: !Rb || !Ib,
                            touchPressOn: "pointerup",
                            children: Bu(Ub(nb))
                          }), !(0, Jh.j)() && (0, Sb.jsx)(Dh.H, {
                            className: "RespawnPageButton",
                            onClick: ih.e,
                            disabled: !Rb || !Ib,
                            touchPressOn: "pointerup",
                            children: Bu(Ub("respawnPage:exitGame"))
                          })]
                        }), Qb && (0, Sb.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Sb.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: Ub("respawnPage:orTry")
                          }), (0, Sb.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Qb.map((bb => (0, Sb.jsx)(th.e, {
                              source: {
                                type: "game",
                                gameNameWithVariation: bb
                              },
                              disabled: !Rb || !Ib,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, jb.h)("inGameReplay");
                                const ub = (0, jh.e)(bb);
                                Ob(ub)
                              }
                            }, bb)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Sb.jsx)("div", {
                    ref: Vb,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Sb.jsx)("div", {
                  ref: Eb,
                  className: "RespawnBottom",
                  children: (0, Sb.jsx)(nh.d, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Eb
                    },
                    showing: uu,
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
    var qh = hb(36226);
    const Eh = [{
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
      yh = [{
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
      Vh = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      Fh = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      fh = (0, Bb.memo)((function() {
        const bb = (0, Bb.useRef)(null),
          ub = (0, Bb.useRef)(null);

        function hb(hb) {
          var Bb;
          let {
            Db: Ob,
            screenPos: Gb
          } = hb;
          const Ub = bb.current;
          null === (Bb = ub.current) || void 0 === Bb || Bb.cancel(), Ub.classList.remove("HitmarkerCrit"), Gb ? (Ub.style.left = `${Gb.x}%`, Ub.style.top = `${Gb.y}%`) : (Ub.style.left = "50%", Ub.style.top = "50%"), Ub.style.rotate = 16 * (Math.random() - .5) + "deg", Ob && Ub.classList.add("HitmarkerCrit");
          const Lb = Ub.animate(Ob ? yh : Eh, Ob ? Fh : Vh);
          ub.current = Lb, Lb.onfinish = () => {
            Ub.classList.remove("HitmarkerCrit")
          }
        }
        return (0, Lb.h)("localGunHitmarker", (bb => {
          let {
            Db: ub
          } = bb;
          hb({
            Db: ub
          })
        })), (0, Lb.h)("yourAttackHit", (bb => {
          let {
            Db: ub,
            screenPos: Bb
          } = bb;
          hb({
            Db: ub,
            screenPos: jb.d.get("isTouchScreen") ? Bb : void 0
          })
        })), (0, Lb.h)("sendHitmarker", (bb => {
          let {
            Db: ub,
            screenPos: Bb
          } = bb;
          hb({
            Db: ub,
            screenPos: Bb
          })
        })), (0, Sb.jsxs)("div", {
          ref: bb,
          className: "Hitmarker",
          children: [(0, Sb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Sb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Sb.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Sb.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function kh() {
      const bb = (0, Bb.useRef)(!0);
      return (0, Lb.h)("localBlockMined", (() => {
        Ou.f.play("blockMined")
      })), (0, Lb.h)("yourAttackHit", (() => {
        Ou.f.play("hitLanded")
      })), (0, Lb.h)("localGunHitmarker", (() => {
        Ou.f.play("hitLanded")
      })), (0, Lb.h)("damagedByOtherPlayer", (() => {
        Ou.f.play("damageTaken")
      })), (0, rb.d)("localPlayerAliveSet", (ub => {
        !ub && bb.current && Ou.f.play("death"), bb.current = ub
      })), null
    }
    var Th = hb(1799),
      ch = hb(36242),
      Qh = hb.n(ch),
      Rh = hb(1914),
      bB = hb(1901),
      uB = hb(3063),
      hB = hb(9106);
    const BB = Nh.be ? 7e7 : 7e3,
      OB = Qh()("#ffffff").alpha(.5).string();

    function GB(bb) {
      const ub = (0, uB.e)(bb);
      return void 0 !== ub && "Gun" === (0, hB.itemTypeOf)(ub)
    }

    function UB(bb) {
      if (!bb) return console.error(`Killfeed colour was ${bb}`), OB;
      try {
        return Qh()(bb).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${bb} is not a colour`), OB
      }
    }
    const LB = (0, Bb.memo)((function() {
      const {
        t: bb
      } = (0, gb.K)(), ub = (0, Bb.useRef)([]), hb = (0, ph.d)();
      return (0, rb.d)("kill", (function(Bb) {
        var Ob, Gb;
        let {
          killer: Ub,
          victim: Lb,
          withItem: Yb,
          killstreak: Sb
        } = Bb;
        const ab = ub.current;
        if (ab.length >= 3) {
          const bb = ab.shift();
          clearTimeout(bb.timeout)
        }
        const Hb = wb.gameBridge.latest("hiddenPlayerNames"),
          Zb = {
            deadName: sh(Lb, bb),
            killerName: sh(Ub, bb),
            isFriend: {
              killer: (0, Rh.c)(Ub.realName, Hb),
              dead: (0, Rh.c)(Lb.realName, Hb)
            },
            withItem: Yb,
            wasHeadshot: !1,
            killstreak: Sb,
            timeout: setTimeout((() => {
              ab.shift(), hb()
            }), BB),
            reactId: `${null!==(Ob=Ub.id)&&void 0!==Ob?Ob:Ub.shownName}|${null!==(Gb=Lb.id)&&void 0!==Gb?Gb:Lb.shownName}|${Date.now()}`,
            killerBackground: UB(Ub.colour),
            deadBackground: UB(Lb.colour)
          };
        ab.push(Zb), hb()
      })), (0, Bb.useEffect)((() => {
        const bb = ub.current;
        return () => {
          for (; bb.length > 0;) {
            const {
              timeout: ub
            } = bb.pop();
            clearTimeout(ub)
          }
        }
      }), []), (0, Sb.jsx)("div", {
        className: "Killfeed",
        children: ub.current.map((bb => {
          let {
            deadName: ub,
            killerName: hb,
            withItem: Bb,
            wasHeadshot: Ob,
            killstreak: Gb,
            killerBackground: Ub,
            deadBackground: Lb,
            reactId: Yb,
            isFriend: ab
          } = bb;
          return (0, Sb.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Ub} calc(100% - 10rem), ${Lb} 100%)`
            },
            children: [Gb >= 2 ? (0, Sb.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, Nh.R)(Gb)
            }) : null, (0, Sb.jsx)("div", {
              className: "KillfeedKillerName",
              children: hb
            }), ab.killer && (0, Sb.jsx)(bB.b, {}), (0, Sb.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: GB(Bb) ? "7.5vmin" : "5vmin"
              },
              children: (0, Sb.jsx)(Th.d, {
                itemName: Bb,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Ob ? (0, Sb.jsx)(sb.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Sb.jsx)("div", {
              className: "KillfeedDeadName",
              children: ub
            }), ab.dead && (0, Sb.jsx)(bB.b, {})]
          }, Yb)
        }))
      })
    }));
    var YB = hb(36296),
      SB = hb(1044),
      aB = hb.n(SB),
      HB = hb(3174),
      wB = hb(36300),
      ZB = hb(1193);
    const XB = {},
      pB = (0, Bb.memo)((function() {
        const bb = (0, Bb.useRef)({}),
          [, ub] = (0, Bb.useReducer)((bb => bb + 1), 0);
        (0, Lb.h)("setDirectionArrow", (hb => {
          let {
            id: Bb,
            position: Ob,
            style: Gb,
            text: Ub,
            oB: Lb
          } = hb;
          const Yb = bb.current,
            Sb = Gb || XB,
            ab = Ub,
            Hb = Yb[Bb];
          if (!Hb) return Yb[Bb] = {
            position: Ob,
            style: Sb,
            text: ab,
            shouldShowDistance: Lb,
            JI: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void ub();
          const wb = !aB()(Hb.style, Sb) || !aB()(Hb.text, ab) || Hb.shouldShowDistance !== Lb;
          Hb.position = Ob, Hb.style = Sb, Hb.text = ab, Hb.shouldShowDistance = Lb, wb && ub()
        })), (0, Lb.h)("clearDirectionArrow", (hb => {
          let {
            id: Bb
          } = hb;
          const Ob = bb.current;
          if (null === Bb)
            for (const bb in Ob) delete Ob[bb];
          else delete Ob[Bb];
          ub()
        })), (0, Bb.useEffect)((() => {
          const ub = bb.current,
            hb = (0, ZB.s)((() => {
              ! function(bb) {
                const ub = wb.gameBridge.lookup("localPos", null),
                  hb = HB.e - oB,
                  Bb = (0, HB.o)() - oB;
                for (const Ob in bb) {
                  const Gb = bb[Ob];
                  if (!Gb.JI) continue;
                  const Ub = wb.gameBridge.lookup("screenPos", Gb.position),
                    Lb = Ub.x - 50,
                    Yb = Ub.y - 50;
                  Ub.x === Gb.lastScreenX && Ub.y === Gb.lastScreenY || (Gb.lastScreenX = Ub.x, Gb.lastScreenY = Ub.y, Gb.JI.style.translate = `${Ub.x}vw ${Ub.y}vh`, Gb.chevronElement && (Gb.chevronElement.style.rotate = `${Nh.d.fastATan2(Yb,Lb)}rad`));
                  const Sb = Math.abs(Lb) < hb && Math.abs(Yb) < Bb;
                  if (Sb !== Gb.onScreen && (Gb.onScreen = Sb, Gb.JI.classList.toggle("DirectionArrowOnScreen", Sb)), Gb.shouldShowDistance && Gb.distanceElement) {
                    const bb = Gb.position[0] - ub[0],
                      hb = Gb.position[1] - ub[1],
                      Bb = Gb.position[2] - ub[2],
                      Ob = Math.round(Math.sqrt(bb * bb + hb * hb + Bb * Bb));
                    (-1 === Gb.lastRenderedDist || (0, wB.c)(Ob, Gb.lastRenderedDist, Gb.lastDistUpdateTime)) && (Gb.distanceElement.textContent = `${Ob}m`, Gb.lastRenderedDist = Ob, Gb.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(ub)
            }));
          return () => {
            hb();
            for (const bb in ub) delete ub[bb]
          }
        }), []);
        const hb = bb.current;
        return (0, Sb.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(hb).map((bb => {
            var ub;
            let [Bb, Ob] = bb;
            const Gb = null !== (ub = (0, lb.fc)(Ob.style)) && void 0 !== ub ? ub : "#ffffff";
            return (0, Sb.jsxs)("div", {
              ref: bb => {
                hb[Bb] && (hb[Bb].JI = bb)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Ob.style.fontSize,
                opacity: Ob.style.opacity
              },
              children: [(0, Sb.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: bb => {
                  hb[Bb] && (hb[Bb].chevronElement = bb)
                },
                children: [(0, Sb.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Sb.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Sb.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Sb.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Sb.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Gb
                    }
                  }), (0, Sb.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: Gb
                    }
                  })]
                })]
              }), (0, Sb.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: Gb,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${Gb}`
                }
              }), Ob.text && (0, Sb.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: Gb,
                  fontWeight: Ob.style.fontWeight,
                  fontStyle: Ob.style.fontStyle
                },
                children: (0, Sb.jsx)(Yb.c, {
                  text: Ob.text
                })
              }), Ob.shouldShowDistance && (0, Sb.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: bb => {
                  hb[Bb] && (hb[Bb].distanceElement = bb)
                },
                style: {
                  color: Gb,
                  fontWeight: Ob.style.fontWeight,
                  fontStyle: Ob.style.fontStyle
                }
              })]
            }, Bb)
          }))
        })
      })),
      oB = .5;
    const AB = (0, Bb.memo)((function(bb) {
        let {
          isTouchScreen: ub
        } = bb;
        return (0, Sb.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Sb.jsx)(CB, {}), ub && (0, Sb.jsx)(bh, {})]
        })
      })),
      lB = {
        readyForNext: 0,
        running: 1
      },
      KB = 50;

    function WB(bb) {
      console.assert(bb.state.current === lB.readyForNext);
      const ub = bb.queue.current,
        hb = bb.foreground.current;
      if (ub.length > 0 && hb) {
        const {
          toFraction: Bb,
          toDuration: Ob
        } = ub.shift();
        bb.state.current = lB.running, hb.style.transition = `transform ${Math.max(Ob-KB,0)}ms linear`, hb.classList.remove("Complete"), bb.timeout.current = setTimeout((() => {
          hb.style.transform = `scaleX(${Bb})`, bb.timeout.current = setTimeout((() => {
            1 === Bb && hb.classList.add("Complete"), bb.state.current = lB.readyForNext, WB(bb)
          }), Math.max(Ob - KB, 0))
        }), KB)
      }
    }

    function CB() {
      const bb = (0, Bb.useRef)([]),
        ub = (0, Bb.useRef)(lB.readyForNext),
        hb = (0, Bb.useRef)(void 0),
        Ob = (0, Bb.useRef)(null),
        Gb = (0, Bb.useRef)({
          queue: bb,
          state: ub,
          timeout: hb,
          foreground: Ob
        }),
        Ub = (0, Kb.f)("showProgressBar");
      if ((0, Bb.useLayoutEffect)((() => (Ub && ub.current === lB.readyForNext && WB(Gb.current), () => {
          ub.current = lB.readyForNext, clearTimeout(hb.current), Ub && (bb.current.length = 0)
        })), [Ub]), (0, Lb.h)("progressBarUpdate", (hb => {
          let {
            toFraction: Bb,
            toDuration: Ob
          } = hb;
          bb.current.push({
            toFraction: Bb,
            toDuration: Ob
          }), ub.current === lB.readyForNext && WB(Gb.current)
        })), !Ub) return null;
      return (0, Sb.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Sb.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Ob,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var dB = hb(36309),
      rB = hb(2335);
    const jB = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function nB(bb) {
      let {
        classes: ub,
        gone: hb
      } = bb;
      const Bb = document.documentElement;
      Bb.classList.remove(...ub);
      for (const Ob of hb) Ob.style.display = "block";
      return () => {
        Bb.classList.add(...ub);
        for (const bb of hb) bb.style.display = ""
      }
    }

    function DB(bb) {
      const {
        isTouchScreen: ub
      } = (0, jb.j)(["isTouchScreen"]);
      (0, Bb.useLayoutEffect)((() => {
        if (!ub) return;
        const hb = bb.current,
          Bb = document.querySelector(`.${dB.g}`),
          Ob = bb => {
            const ub = () => {
              const ub = bb.querySelector(rB.i),
                Bb = function(bb) {
                  const ub = document.documentElement;
                  return {
                    classes: Hu.G.map(pu.D).filter((bb => ub.classList.contains(bb))),
                    gone: [...bb.querySelectorAll(`.TopRightTrayToggle.${rB.m}`)]
                  }
                }(bb);
              ub && function(bb, ub) {
                (0, rB.C)(bb, ub.classes.length > 0 || ub.gone.length > 0, (() => nB(ub)))
              }(ub, Bb);
              const Ob = `${Math.floor(function(bb,ub,hb){const Bb=document.documentElement,Ob=Bb.classList.contains((0,pu.G)("menu")),Gb=Bb.style.getPropertyValue((0,pu.I)("menu"));if(!Ob&&""===Gb)return bb.getBoundingClientRect().left;const Ub=ub?(0,rB.o)(ub):()=>{},Lb=nB(hb);Bb.classList.remove((0,pu.G)("menu")),Bb.style.removeProperty((0,pu.I)("menu"));const Yb=bb.getBoundingClientRect().left;return Lb(),Ub(),Ob&&Bb.classList.add((0,pu.G)("menu")),""!==Gb&&Bb.style.setProperty((0,pu.I)("menu"),Gb),Yb}(bb,ub,Bb)-hb.getBoundingClientRect().left-4)}px`;
              hb.style.getPropertyValue("--InGameHeaderMaxWidth") !== Ob && hb.style.setProperty("--InGameHeaderMaxWidth", Ob)
            };
            ub();
            const Ob = new ResizeObserver(ub);
            Ob.observe(bb), Ob.observe(Bb), window.addEventListener("resize", ub);
            const Gb = () => jB.map((bb => document.documentElement.style.getPropertyValue(bb))).join();
            let Ub = Gb();
            const Lb = new MutationObserver((() => {
              const bb = Gb();
              bb !== Ub && (Ub = bb, ub())
            }));
            Lb.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const Yb = (0, Wb.l)(pu.e, ub),
              Sb = new MutationObserver(ub);
            return Sb.observe(bb, {
              childList: !0,
              subtree: !0
            }), () => {
              Ob.disconnect(), Lb.disconnect(), Sb.disconnect(), Yb(), window.removeEventListener("resize", ub);
              const hb = bb.querySelector(rB.i);
              hb && (0, rB.o)(hb)
            }
          },
          Gb = () => Bb.querySelector(".TopRightIconsContainer"),
          Ub = Gb();
        let Lb;
        if (Ub) Lb = Ob(Ub);
        else {
          const bb = new MutationObserver((() => {
            const ub = Gb();
            ub && (bb.disconnect(), Lb = Ob(ub))
          }));
          bb.observe(Bb, {
            childList: !0,
            subtree: !0
          }), Lb = () => {
            bb.disconnect()
          }
        }
        return () => {
          Lb(), hb.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [ub, bb])
    }
    var xB = hb(3461),
      zB = hb(3458),
      gB = hb(1537),
      iB = hb(1398),
      vB = hb(1544),
      tB = hb(1622),
      JB = hb(1746),
      eB = hb(1038),
      NB = hb(4060),
      sB = hb(1380),
      MB = hb(1255);
    const mB = 2e4,
      IB = 6e5,
      PB = new Set;

    function qB() {
      const {
        gameEntrySource: bb,
        loadingOverlayVisible: ub
      } = (0, jb.j)(["gameEntrySource", "loadingOverlayVisible"]), hb = (0, rb.g)("connectedGame", (bb => (0, NB.h)(bb) ? bb.lobbyName : null)), Ob = (0, rb.i)("localPlayerAlive"), Gb = (0, rb.g)("players", (bb => null !== bb.localId && void 0 !== bb.byId[bb.localId])), [Ub, Lb] = (0, Bb.useState)(null);
      return !ub && Ob && Gb && null !== hb && Ub !== hb && Lb(hb), (0, Bb.useEffect)((() => {
        if (!(0, NB.l)(bb) || null === Ub || Ub !== hb || PB.has(Ub)) return;
        const ub = setTimeout((() => {
          PB.add(Ub), async function(bb) {
            const ub = await eB.userContextManager.getCurrentUserContext();
            let hb;
            try {
              hb = (await iB.e.getWorldOwnerFriendOffer(ub)).owner
            } catch (Ob) {
              return void console.warn("Couldn't ask who owns this world", Ob)
            }
            if (!hb || (0, NB.q)(hb.name, Date.now())) return;
            const Bb = hb;
            ! function(bb, ub) {
              const hb = Date.now() + IB;
              let Bb = Date.now(),
                Ob = 0;
              const Gb = () => {
                const Ub = Date.now(),
                  Lb = wb.gameBridge.latest("connectedGame");
                Lb.lobbyName !== bb || Ub > hb || (null === Lb.websocketUrl ? Bb = 1 / 0 : Bb === 1 / 0 && !jb.d.get("loadingOverlayVisible") && wb.gameBridge.latest("localPlayerAlive") && (Bb = Ub + mB), Ob = Ub < Bb || !wb.gameBridge.latest("localPlayerAlive") || jb.d.get("isUiHidden") || jb.d.get("isUiHiddenByCamera") || (0, tB.isTypingInInput)() || jb.d.get("loadingOverlayVisible") || (0, gB.q)() || (0, xB.e)() || (0, MB.k)() ? 0 : Ob + 1, Ob >= 2 ? ub() : setTimeout(Gb, 500))
              };
              Gb()
            }(bb, (() => {
              (0, NB.f)(vB.b.getSocialState().friends, Bb.name) || ((0, NB.p)(Bb.name, Date.now()), JB.f.showWorldOwnerOffer(Bb), (0, sB.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Ub).catch((bb => {
            console.error("Failed to offer the world's owner as a friend", bb)
          }))
        }), mB);
        return () => {
          clearTimeout(ub)
        }
      }), [bb, Ub, hb]), null
    }
    var EB = hb(1792);
    const yB = (0, Bb.memo)((function(bb) {
        let {
          durationMs: ub,
          endsAtMs: hb
        } = bb;
        const [, Ob] = (0, Bb.useReducer)((bb => bb + 1), 0), Gb = null === hb ? ub : Math.max(hb - Date.now(), 0);
        return (0, Bb.useEffect)((() => {
          if (null === hb || Gb <= 0) return;
          const bb = setTimeout(Ob, Gb - 1e3 * (Math.ceil(Gb / 1e3) - 1));
          return () => {
            clearTimeout(bb)
          }
        })), (0, Sb.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, Nh.jb)(Gb)
        })
      })),
      VB = (0, Bb.memo)((function() {
        const bb = (0, rb.i)("localEffects");
        return (0, Sb.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(bb).map((bb => {
            let [ub, {
              icon: hb,
              displayName: Bb,
              durationMs: Ob,
              endsAtMs: Gb,
              level: Ub
            }] = bb;
            return (0, Sb.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Sb.jsx)(EB.b, {
                icon: hb,
                className: "EffectInfoIcon"
              }), (0, Sb.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Ob ? "0" : "1rem"
                },
                children: [(0, Sb.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Sb.jsx)(Yb.c, {
                    text: null !== Bb && void 0 !== Bb ? Bb : ub,
                    className: "EffectInfoName SmallTextBold"
                  }), Ub > 1 && (0, Sb.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, Nh.R)(Ub)
                  })]
                }), null !== Ob && (0, Sb.jsx)(yB, {
                  durationMs: Ob,
                  endsAtMs: Gb
                })]
              })]
            }, ub)
          }))
        })
      }));
    var FB = hb(36318),
      fB = hb(36551),
      kB = hb(191),
      TB = hb(1249),
      cB = hb(2554),
      QB = hb(2734);

    function RB(bb, ub) {
      (0, Bb.useLayoutEffect)((() => {
        let ub, hb;
        const Bb = requestAnimationFrame((() => {
          hb = setTimeout((() => {
            hb = void 0;
            const Bb = bb();
            ub = "function" === typeof Bb ? Bb : void 0
          }), 0)
        }));
        return () => {
          var bb;
          cancelAnimationFrame(Bb), clearTimeout(hb), null === (bb = ub) || void 0 === bb || bb()
        }
      }), ub)
    }
    const bO = [5, 5, 5],
      uO = [7, 4, 4, 4];

    function hO(bb) {
      return bb.reduce(((bb, ub) => bb + ub), 0)
    }

    function BO(bb, ub, hb, Bb, Ob) {
      const Gb = bb.getContext("2d");
      if (!Gb) return null;
      const Ub = ub.fontFamily,
        Lb = ub.fontWeight;
      return bb.width = hb, bb.height = Bb, Gb.fillStyle = ub.color, Gb.textAlign = "center", Gb.textBaseline = "middle", Gb.font = `${Lb} ${Ob}px ${Ub}`, Gb
    }
    const OO = (0, Bb.memo)((function(bb) {
      let {
        show: ub
      } = bb;
      const hb = (0, Bb.useRef)(null),
        Ob = (0, Bb.useRef)(null),
        Gb = (0, Bb.useRef)(null),
        Ub = (0, Xb.l)();
      return (0, Bb.useEffect)((() => Ub.whenShown((() => {
        let bb = 0,
          ub = 0,
          hb = performance.now(),
          Bb = 0;
        const Ub = (0, ZB.s)((() => {
          var Ub, Lb, Yb;
          bb++, ub++;
          const Sb = performance.now();
          if (Sb - hb < 1e3) return;
          const ab = Math.round(bb / (Sb - hb) * 1e3);
          if (Ob.current = ab, null === (Ub = Gb.current) || void 0 === Ub || Ub.call(Gb, ab), bb = 0, hb = Sb, ab >= 55) return void(Bb = 0);
          if (Bb += 1, Bb < 15) return;
          const Hb = null !== (Lb = db.j.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== Lb ? Lb : 0,
            [Zb, Xb] = Cb.b.get("minChunkAddDist");
          if (function(bb, ub) {
              const hb = wb.gameBridge.lookup("VK", null);
              return null !== hb && (hb.horizontal > bb || hb.vertical > ub)
            }(Zb, Xb) && (null !== (Yb = db.j.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Yb ? Yb : 0) + 432e5 < Date.now() && Hb < 3) {
            db.j.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            TB.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((bb => {
              "notificationTornDown" !== bb && (bb ? (wb.gameBridge.send("setChunkAddDistance", {
                horizontal: Zb,
                vertical: Xb
              }), db.j.setItem("chunkHorizAddDist", Zb), db.j.setItem("chunkVertAddDist", Xb), Wb.i.vp("updatedChunkLoadDist"), db.j.setItem("decreaseLoadDistPromptDeniedCount", 0)) : db.j.setItem("decreaseLoadDistPromptDeniedCount", Hb + 1))
            }))
          }
        }));
        let Lb = performance.now();
        ub = 0;
        let Yb = null,
          Sb = !document.hidden;

        function ab() {
          const bb = performance.now() - Lb,
            hb = 1e3 * ub / bb;
          Sb && (null === Yb && (Yb = hb), cB.b.setFps(hb, Yb)), ub = 0, Lb = performance.now()
        }
        let Hb = setInterval(ab, QB.d);

        function Zb() {
          const bb = Sb;
          Sb = !document.hidden, !bb && Sb && (ub = 0, Lb = performance.now(), clearInterval(Hb), Hb = setInterval(ab, QB.d))
        }
        return document.addEventListener("visibilitychange", Zb), () => {
          Ub(), document.removeEventListener("visibilitychange", Zb), clearInterval(Hb)
        }
      }))), [Ub]), RB((() => {
        var bb;
        if (!ub || Gb.current) return;
        const Bb = hb.current,
          Ub = window.getComputedStyle(Bb.parentElement),
          Lb = null !== (bb = window.devicePixelRatio) && void 0 !== bb ? bb : 1,
          Yb = parseFloat(Ub.fontSize) * Lb,
          Sb = Math.round(3 * Yb),
          ab = Math.round(Yb),
          Hb = BO(Bb, Ub, Sb, ab, Yb);
        if (!Hb) return;
        const wb = bb => {
          Hb.clearRect(0, 0, Bb.width, Bb.height), Hb.fillText(bb.toString(), Bb.width / 2, Bb.height / 2)
        };
        Gb.current = wb, null !== Ob.current && wb(Ob.current)
      }), [ub]), (0, Sb.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: ub ? "flex" : "none"
        },
        children: [(0, Sb.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Sb.jsx)("canvas", {
          className: "FpsCanvas",
          ref: hb,
          width: 48,
          height: 16
        })]
      })
    }));

    function GO(bb) {
      return Math.sign(bb) * Math.round(100 * Math.abs(bb))
    }

    function UO(bb) {
      let {
        getCoordinates: ub,
        showChunkCoords: hb,
        columns: Ob
      } = bb;
      const Gb = (0, Bb.useRef)(null);
      return RB((() => {
        var bb;
        const Bb = Gb.current,
          Ub = window.getComputedStyle(Bb.parentElement),
          Lb = null !== (bb = window.devicePixelRatio) && void 0 !== bb ? bb : 1,
          Yb = parseFloat(Ub.fontSize) * Lb,
          Sb = Math.round(Yb * hO(Ob)),
          ab = Math.round(Yb),
          Hb = BO(Bb, Ub, Sb, ab, Yb);
        if (!Hb) return;
        let Zb = !0,
          Xb = 0,
          pb = 0,
          ob = 0,
          Ab = 0,
          lb = 0,
          Kb = 0;
        const Wb = () => {
          Zb = !0
        };
        document.fonts.load(Hb.font).then(Wb, Wb);
        const Cb = () => {
          BO(Bb, Ub, Sb, ab, Yb), Wb()
        };
        Bb.addEventListener("contextrestored", Cb);
        const db = (0, ZB.w)((() => {
          var bb, Gb, Ub, Lb, Sb, ab;
          const [Wb, Cb, db] = ub(), rb = GO(Wb), jb = GO(Cb), nb = GO(db);
          let Db = null;
          if (hb) {
            const bb = wb.gameBridge.lookup("localPos", null);
            Db = (0, bu.W)(bb[0], bb[1], bb[2])
          }
          const xb = null !== (bb = null === (Gb = Db) || void 0 === Gb ? void 0 : Gb[0]) && void 0 !== bb ? bb : 0,
            zb = null !== (Ub = null === (Lb = Db) || void 0 === Lb ? void 0 : Lb[1]) && void 0 !== Ub ? Ub : 0,
            gb = null !== (Sb = null === (ab = Db) || void 0 === ab ? void 0 : ab[2]) && void 0 !== Sb ? Sb : 0;
          if (!Zb && rb === Xb && jb === pb && nb === ob && xb === Ab && zb === lb && gb === Kb) return;
          Zb = !1, Xb = rb, pb = jb, ob = nb, Ab = xb, lb = zb, Kb = gb;
          const ib = [(rb / 100).toFixed(2), (jb / 100).toFixed(2), (nb / 100).toFixed(2)];
          Db && ib.unshift(`${xb} ${zb} ${gb}`), Hb.clearRect(0, 0, Bb.width, Bb.height);
          const vb = Bb.height / 2;
          let tb = 0;
          for (let ub = 0; ub < ib.length; ub++) {
            const bb = Yb * Ob[ub];
            Hb.fillText(ib[ub], tb + bb / 2, vb, bb), tb += bb
          }
        }));
        return () => {
          db(), Bb.removeEventListener("contextrestored", Cb)
        }
      }), [ub, hb, Ob]), (0, Sb.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Sb.jsx)("canvas", {
          ref: Gb,
          className: "CoordinateCanvas",
          width: 16 * hO(Ob),
          height: 16
        })
      })
    }
    const LO = (0, Bb.memo)((function() {
        const bb = (0, Bb.useCallback)((() => {
          const bb = wb.gameBridge.lookup("localPos", null);
          return [bb[0], bb[1], bb[2]]
        }), []);
        return (0, Sb.jsx)(UO, {
          getCoordinates: bb,
          showChunkCoords: !1,
          columns: bO
        })
      })),
      YO = (0, Bb.memo)((function() {
        const bb = (0, Bb.useCallback)((() => {
          const bb = wb.gameBridge.lookup("localPos", null),
            ub = kB.e.bX;
          let hb = bb[0] % ub,
            Bb = bb[1] % ub,
            Ob = bb[2] % ub;
          return hb < 0 && (hb += ub), Bb < 0 && (Bb += ub), Ob < 0 && (Ob += ub), [hb, Bb, Ob]
        }), []);
        return (0, Sb.jsx)(UO, {
          getCoordinates: bb,
          showChunkCoords: !0,
          columns: uO
        })
      }));
    var SO = hb(1943),
      aO = hb(1242),
      HO = hb(934),
      wO = hb(1124),
      ZO = hb(86),
      XO = hb(36386),
      pO = hb(1359),
      oO = hb(2941);
    const AO = (0, Bb.memo)((function() {
      const bb = (0, Kb.f)("maxAuraLevel");
      return 0 === bb ? null : (0, Sb.jsx)(lO, {
        maxLevel: bb
      })
    }));

    function lO(bb) {
      let {
        maxLevel: ub
      } = bb;
      const hb = (0, Kb.f)("auraPerLevel"),
        [Ob, Gb] = (0, Bb.useState)((() => {
          var bb;
          return null !== (bb = wb.gameBridge.latest("aura")) && void 0 !== bb ? bb : void 0
        })),
        [Ub, Lb] = (0, Bb.useState)((() => Wb(Ob))),
        [Yb, ab] = (0, Bb.useReducer)((bb => bb + 1), 0),
        Hb = (0, Bb.useRef)(null),
        Zb = (0, Bb.useRef)([]),
        Xb = (0, Bb.useRef)({
          width: 0,
          level: 0
        }),
        pb = (0, Bb.useRef)(null),
        ob = (0, Bb.useRef)(null);

      function lb() {
        if (null !== pb.current) return;
        if (0 === Zb.current.length) return;
        const {
          width: bb,
          level: ub
        } = Zb.current.shift();
        let hb;
        if (ub !== Xb.current.level && ub > Xb.current.level !== bb > Xb.current.width) {
          const Bb = ub > Xb.current.level;
          hb = Bb ? bb : 100 - bb, Hb.current.style.transition = "none", Hb.current.style.width = Bb ? "0%" : "100%", Hb.current.offsetWidth
        } else hb = Math.abs(bb - Xb.current.width);
        const Bb = 100 * hb / 20;
        Hb.current.style.transition = `width ${Bb}ms linear`, Lb(bb), Xb.current = {
          width: bb,
          level: ub
        }, Zb.current.length > 0 && (pb.current = setTimeout((() => {
          pb.current = null, lb()
        }), Bb))
      }

      function Wb(bb) {
        return Math.floor(bb / hb) === ub ? 100 : bb % hb / hb * 100
      }
      return (0, Bb.useEffect)((() => () => {
        clearTimeout(pb.current), clearTimeout(ob.current), pb.current = null, ob.current = null
      }), []), (0, rb.d)("aura", (bb => {
        if (ob.current && clearTimeout(ob.current), null === bb) return clearTimeout(pb.current), ob.current = null, pb.current = null, Zb.current = [], Xb.current = {
          width: 0,
          level: 0
        }, Gb(void 0), void Lb(0);
        ob.current = setTimeout((() => {
          const ub = Math.floor(Ob / hb),
            Bb = Math.floor(bb / hb),
            Ub = Wb(bb);
          bb > Ob && XO.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Bb > ub ? (Bb % 5 === 0 && XO.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), ab(), Zb.current.push({
            width: 100,
            level: ub
          })) : Bb < ub && Zb.current.push({
            width: 0,
            level: ub
          }), bb === Ob && Bb === ub || Zb.current.push({
            width: Ub,
            level: Bb
          }), Gb(bb), lb()
        }), 50)
      })), (0, Ab.f)(), (0, Sb.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Sb.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Sb.jsx)(pO.b, {
            showSignal: Yb,
            particleElement: (0, Sb.jsx)("img", {
              src: (0, oO.e)("glint"),
              alt: ""
            })
          }), (0, Sb.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, oO.e)("glint"),
            alt: "aura"
          }), (0, Sb.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Ob && void 0 !== Ob ? Ob : 0) / hb)
          })]
        }), (0, Sb.jsx)("div", {
          className: "AuraBar",
          children: (0, Sb.jsx)("div", {
            ref: Hb,
            className: "AuraBarBackground",
            style: {
              width: `${Ub}%`
            }
          })
        })]
      })
    }
    var KO = hb(2403);

    function WO(bb) {
      bb.timed && (bb.endedAnimation = bb.timed.animation, bb.timed = null)
    }
    const CO = (0, Bb.memo)((function() {
      const bb = (0, Bb.useRef)(null),
        ub = (0, Bb.useRef)(null),
        hb = (0, Bb.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, Lb.h)("middleScreenBarInitiate", (bb => {
        var Bb;
        let {
          duration: Ob,
          Zu: Gb,
          horizBarRemOffset: Ub
        } = bb;
        const Lb = hb.current;
        WO(Lb);
        const Yb = ub.current;
        if (!(Ob >= 0) || !Yb) return;
        null === (Bb = Lb.endedAnimation) || void 0 === Bb || Bb.cancel(), Lb.endedAnimation = null;
        const Sb = Yb.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Ob,
          fill: "forwards"
        });
        Lb.timed = {
          Zu: Gb,
          horizBarRemOffset: Ub,
          animation: Sb
        }
      })), (0, Lb.h)("middleScreenBarRemove", (() => {
        WO(hb.current)
      })), (0, Bb.useEffect)((() => {
        const Bb = hb.current;
        let Ob = Number.NaN,
          Gb = Number.NaN,
          Ub = Number.NaN;
        return (0, ZB.p)((() => {
          var hb, Lb, Yb, Sb;
          const ab = bb.current,
            Hb = ub.current;
          if (!ab || !Hb) return;
          null !== (hb = Bb.timed) && void 0 !== hb && hb.Zu && "finished" === Bb.timed.animation.playState && WO(Bb), null === (Lb = Bb.endedAnimation) || void 0 === Lb || Lb.cancel(), Bb.endedAnimation = null;
          let Zb = Bb.timed ? 1 : 0;
          if (!Bb.timed) {
            const bb = wb.gameBridge.lookup("momentumFrac", null);
            Zb = bb > 0 ? 1 : 0, bb !== Ub && (Ub = bb, Hb.style.transform = `scaleX(${bb})`)
          }
          const Xb = null !== (Yb = null === (Sb = Bb.timed) || void 0 === Sb ? void 0 : Sb.horizBarRemOffset) && void 0 !== Yb ? Yb : 0;
          Xb === Ob && Zb === Gb || (Ob = Xb, Gb = Zb, ab.style.transform = `translateX(calc(-50% + ${Xb}rem)) scaleX(${Zb})`)
        }))
      }), []), (0, Sb.jsx)("div", {
        className: "MiddleScreenBar",
        ref: bb,
        children: (0, Sb.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: ub
        })
      })
    }));
    var dO = hb(4444),
      rO = hb(2539);

    function jO() {
      const {
        t: bb
      } = (0, gb.K)(), ub = (0, Lb.k)("serverUpdating", null), hb = (0, rO.d)(250, null !== ub);
      return null === ub || hb - ub > 3e4 ? null : (0, Sb.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Sb.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: bb("updateWaiting:updatingIn", {
            countdown: (0, dO.n)(ub - hb)
          })
        }), (0, Sb.jsx)("div", {
          children: bb("updateWaiting:bringYouBack")
        })]
      })
    }
    var nO = hb(36579),
      DO = hb(1874);
    const xO = [{
        translationKey: "general:interact"
      }],
      zO = (0, Bb.memo)((function() {
        const bb = (0, Kb.f)("crosshairText"),
          {
            interactPrompt: ub,
            blockText: hb,
            neededTool: Ob
          } = (0, rb.i)("crosshairTarget"),
          {
            isTouchScreen: Gb
          } = (0, jb.j)(["isTouchScreen"]),
          Ub = (0, Db.r)(),
          ab = (0, zb.e)("alt-fire");
        (0, Bb.useEffect)((() => {
          wb.gameBridge.send("setCrosshairInteractPrompt", !Gb || Ub ? "key" : "touch")
        }), [Gb, Ub]);
        const [Hb, Zb] = (0, Bb.useReducer)((bb => bb + 1), 0);
        (0, Lb.h)("customBindingsChanged", Zb);
        var Xb;
        if (null !== ub && (Ub && null !== ab || !Gb && null !== (0, DO.n)("alt-fire"))) return (0, Sb.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Sb.jsx)(nb.e, {
            noaAction: "alt-fire"
          }), (0, Sb.jsx)(Yb.c, {
            text: null !== (Xb = ub.label) && void 0 !== Xb ? Xb : xO
          })]
        });
        let pb = null;
        return null !== hb ? pb = hb : null !== bb && "" !== bb ? pb = bb : null !== Ob && (pb = [{
          icon: Ob,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), pb ? (0, Sb.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Sb.jsx)(Yb.c, {
            text: pb
          })
        }) : null
      }));
    var gO = hb(2409);
    const iO = (0, Bb.memo)((function() {
      var bb;
      const {
        interactPrompt: ub
      } = (0, rb.i)("crosshairTarget"), {
        openInGameMenuName: hb,
        openEverythingMenuName: Bb
      } = (0, jb.j)(["openInGameMenuName", "openEverythingMenuName"]), Ob = (0, Lb.k)("aimingOverlay", "none"), Gb = (0, fb.g)(), Ub = (0, gO.c)();
      return null === ub || null !== hb || null !== Bb || "sniper" === Ob || Gb || Ub ? null : (0, Sb.jsx)(vO, {
        label: null !== (bb = ub.label) && void 0 !== bb ? bb : xO
      })
    }));

    function vO(bb) {
      let {
        label: ub
      } = bb;
      const hb = zu(cb.c.Interact, !1);
      return (0, Bb.useEffect)((() => (Wb.i.vp(pu.v), () => {
        Wb.i.vp(pu.v)
      })), []), (0, Sb.jsx)("div", {
        ref: hb,
        className: "TouchInteractHit",
        children: (0, Sb.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Sb.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Sb.jsx)(sb.e, {
              name: "hand-back-point-up"
            })
          }), (0, Sb.jsx)(Yb.c, {
            text: ub
          })]
        })
      })
    }
    var tO = hb(4531),
      JO = hb(4598);
    const eO = (0, Bb.forwardRef)((function(bb, ub) {
        let {
          text: hb,
          className: Bb,
          children: Ob
        } = bb;
        return hb.hasText ? (0, Sb.jsx)("div", {
          ref: ub,
          className: Gb()("HudTextPanel", Bb, {
            NoBackground: !hb.showBackground
          }),
          children: null !== Ob && void 0 !== Ob ? Ob : (0, Sb.jsx)(Yb.c, {
            text: hb.content
          })
        }) : null
      })),
      NO = (0, Bb.memo)((function() {
        const bb = (0, Kb.j)("middleTextTop"),
          [ub, hb] = (0, Bb.useState)(null),
          Ob = (0, dB.h)(ub);
        return bb.hasText ? (0, Sb.jsx)("div", {
          className: Gb()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Ob
          }),
          children: (0, Sb.jsx)(eO, {
            ref: hb,
            className: "MiddleTextTop",
            text: bb
          })
        }) : null
      })),
      sO = (0, Bb.memo)((function() {
        const bb = (0, Kb.d)();
        return (0, Sb.jsx)(Sb.Fragment, {
          children: bb.map(((bb, ub) => (0, Sb.jsx)(eO, {
            className: "HeaderChip",
            text: bb
          }, ub)))
        })
      }));
    var MO = hb(3409),
      mO = hb(4372);
    const IO = (0, Bb.memo)((function() {
      const {
        t: bb
      } = (0, gb.K)(), [ub, hb] = (0, Bb.useState)(!1), Ob = (0, Bb.useRef)(!1), Gb = function(bb) {
        let {
          gameNameWithVariation: ub,
          lobbyName: hb
        } = bb;
        if ((0, HO.i)(ub)) return PO;
        if ((0, wO.S)(hb)) return qO;
        return null
      }((0, rb.i)("connectedGame"));
      if (!Gb || ub) return null;
      const Ub = mO.d[Gb.target];
      return (0, Sb.jsx)(Nb.d, {
        tooltipInner: (0, Sb.jsx)("div", {
          children: bb(Ub.reportButtonTooltip)
        }),
        children: (0, Sb.jsx)("div", {
          children: (0, Sb.jsx)(Dh.M, {
            onClick: () => {
              Ob.current || (Ob.current = !0, (0, mO.f)(Gb.reportPolicyIds, Ub).then((bb => {
                null !== bb && void 0 !== bb && bb.selectedPolicyId && (wb.gameBridge.send("reportLobbyOrGame", {
                  target: Gb.target,
                  uS: bb.selectedPolicyId,
                  details: bb.hS
                }), hb(!0))
              })).finally((() => {
                Ob.current = !1
              })))
            }
          })
        })
      })
    }));
    const PO = {
        target: "customGame",
        reportPolicyIds: MO.d
      },
      qO = {
        target: "lobby",
        reportPolicyIds: MO.g
      };
    var EO = hb(8517),
      yO = hb(36600),
      VO = hb(36606),
      FO = hb(36612),
      fO = hb(36621),
      kO = hb(36644);

    function TO(bb) {
      return bb instanceof Error && cO.has(bb.message) ? bb.message : void 0
    }
    const cO = new Set([kO.e.saveBusy.text, kO.e.saveClosed.text, kO.e.cropBusy.text]);
    let QO = !1;
    async function RO(bb, ub) {
      var hb, Bb;
      const {
        files: Ob
      } = ub, Gb = Ob.replayKey();
      if (null === Gb) return "none";
      if (QO) throw new Error(kO.e.saveBusy.text);
      const Ub = null !== (hb = null === (Bb = Ob.saveRefusal) || void 0 === Bb ? void 0 : Bb.call(Ob)) && void 0 !== hb ? hb : null;
      if (null !== Ub) throw new Error(Ub);
      QO = !0;
      try {
        return await async function(bb, ub, hb) {
          const {
            files: Bb
          } = ub, Ob = () => Bb.replayKey() === hb, Gb = (bb, ub) => {
            Ob() && Bb.markSaved(bb, ub)
          };
          let Ub = null;
          if (ub.pickerSupported()) {
            try {
              if (Ub = await ub.chooseFile(bb ? null : Bb.fileHandle()), null === Ub) return "Lu"
            } catch (Yb) {
              ub.onFallback(Yb)
            }
            if (!Ob()) throw new Error(kO.e.saveClosed.text)
          }
          const Lb = await Bb.encode();
          if (null === Lb) {
            if (null !== Ub) throw new Error(kO.e.saveClosed.text);
            return "none"
          }
          if (null !== Ub) try {
            return await ub.write(Ub, Lb), Gb(Ub), "written"
          } catch (Yb) {
            ub.onFallback(Yb)
          }
          return Gb(null, ub.download(Lb)), "downloaded"
        }(bb, ub, Gb)
      } finally {
        QO = !1
      }
    }
    var bG = hb(4302),
      uG = hb(65);
    const hG = [1, 2, 4, 8, 16, 32, 64];

    function BG(bb, ub) {
      return Math.max(0, Math.min(bb, ub))
    }

    function OG(bb, ub, hb) {
      return hb <= ub ? 0 : (bb - ub) / (hb - ub) * 100
    }

    function GG(bb, ub, hb) {
      const Bb = hb - ub;
      return Math.round(ub + bb / 100 * Bb)
    }

    function UG(bb, ub) {
      const hb = Math.floor(bb / ub / 60),
        Bb = Math.floor(bb / ub % 60),
        Ob = bb % ub;
      return `${hb.toString().padStart(2,"0")}:${Bb.toString().padStart(2,"0")}:${Ob.toString().padStart(2,"0")}`
    }

    function LG(bb) {
      return Number.isInteger(bb) || hG.includes(bb) ? `${Math.round(bb)}\xd7` : `${bb.toFixed(1)}\xd7`
    }

    function YG(bb, ub) {
      const hb = hG.indexOf(bb);
      if (-1 !== hb) return "in" === ub ? hG[Math.min(hb + 1, hG.length - 1)] : hG[Math.max(hb - 1, 0)];
      if ("in" === ub) {
        for (const ub of hG)
          if (ub >= bb) return ub;
        return bb
      }
      for (let Bb = hG.length - 1; Bb >= 0; Bb--)
        if (hG[Bb] <= bb) return hG[Bb];
      return hG[0]
    }

    function SG(bb, ub) {
      const hb = ub.getBoundingClientRect();
      if (hb.width <= 0) return 0;
      const Bb = (bb - hb.left) / hb.width * 100;
      return Math.max(0, Math.min(100, Bb))
    }

    function aG(bb, ub) {
      return ub <= 0 ? 0 : bb / ub * 100
    }

    function HG(bb, ub, hb) {
      const Bb = [];
      let Ob = Math.ceil(bb / hb) * hb;
      for (; Ob <= ub;) Bb.push(Ob), Ob += hb;
      return Bb
    }
    var wG = hb(36647);
    const ZG = [{
        label: "Linear",
        easing: wG.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: wG.e
      }, {
        label: "Ease Out",
        easing: wG.g
      }, {
        label: "Ease In Out",
        easing: wG.c
      }],
      XG = 200,
      pG = 150;

    function oG(bb) {
      const ub = bb => Number(bb.toFixed(3)).toString();
      return `cubic-bezier(${ub(bb[0])}, ${ub(bb[1])}, ${ub(bb[2])}, ${ub(bb[3])})`
    }

    function AG(bb, ub) {
      return {
        cx: 25 + bb * pG,
        cy: 25 + (1 - ub) * pG
      }
    }

    function lG(bb, ub, hb) {
      const Bb = bb - hb.left,
        Ob = ub - hb.top;
      return {
        x: Nh.d.clamp((Bb - 25) / pG, 0, 1),
        y: Nh.d.clamp(1 - (Ob - 25) / pG, -1, 2)
      }
    }

    function KG(bb, ub, hb, Bb, Ob) {
      return {
        x: (0, wG.n)(bb, hb, Ob),
        y: (0, wG.n)(ub, Bb, Ob)
      }
    }
    const WG = (0, Bb.memo)((function(bb) {
      let {
        value: ub,
        onChange: hb
      } = bb;
      const Ob = (0, Bb.useRef)(null),
        Gb = (0, Bb.useRef)(null),
        [Ub, Lb] = (0, Bb.useState)(null),
        Yb = (0, Bb.useCallback)((() => {
          const bb = Ob.current;
          if (!bb) return;
          const hb = bb.getContext("2d");
          if (!hb) return;
          const Bb = window.devicePixelRatio || 1;
          bb.width = XG * Bb, bb.height = XG * Bb, hb.setTransform(Bb, 0, 0, Bb, 0, 0), hb.clearRect(0, 0, XG, XG), hb.fillStyle = "rgba(38, 52, 93, 0.85)", hb.fillRect(0, 0, XG, XG), hb.beginPath();
          const Gb = AG(0, 0),
            Lb = AG(1, 1);
          hb.moveTo(Gb.cx, Gb.cy), hb.lineTo(Lb.cx, Lb.cy), hb.strokeStyle = "rgba(164, 164, 164, 0.35)", hb.setLineDash([3, 3]), hb.stroke(), hb.setLineDash([]);
          const [Yb, Sb, ab, Hb] = ub, wb = AG(Yb, Sb), Zb = AG(ab, Hb);
          hb.strokeStyle = "rgba(252, 211, 115, 0.55)", hb.lineWidth = 1.5, hb.beginPath(), hb.moveTo(Gb.cx, Gb.cy), hb.lineTo(wb.cx, wb.cy), hb.moveTo(Lb.cx, Lb.cy), hb.lineTo(Zb.cx, Zb.cy), hb.stroke(), hb.strokeStyle = "#fcd373", hb.lineWidth = 2, hb.beginPath();
          for (let ub = 0; ub <= 50; ub++) {
            const bb = KG(Yb, Sb, ab, Hb, ub / 50),
              Bb = AG(bb.x, bb.y);
            0 === ub ? hb.moveTo(Bb.cx, Bb.cy) : hb.lineTo(Bb.cx, Bb.cy)
          }
          hb.stroke();
          const Xb = (bb, ub, Bb) => {
            hb.beginPath(), hb.arc(bb, ub, Bb ? 6 : 5, 0, 2 * Math.PI), hb.fillStyle = Bb ? "#ffb914" : "#fcd373", hb.fill(), hb.strokeStyle = "#1a1f2e", hb.lineWidth = 1.5, hb.stroke()
          };
          Xb(wb.cx, wb.cy, "p1" === Ub), Xb(Zb.cx, Zb.cy, "p2" === Ub)
        }), [Ub, ub]);
      (0, Bb.useEffect)((() => {
        Yb()
      }), [Yb]);
      const ab = (0, Bb.useCallback)(((bb, Bb) => {
          const Ub = Ob.current,
            Lb = Gb.current;
          if (!Ub || !Lb) return;
          const Yb = Ub.getBoundingClientRect(),
            {
              x: Sb,
              y: ab
            } = lG(bb, Bb, Yb);
          hb("p1" === Lb ? [Sb, ab, ub[2], ub[3]] : [ub[0], ub[1], Sb, ab])
        }), [hb, ub]),
        Hb = (0, Bb.useCallback)((bb => {
          const hb = Ob.current;
          if (!hb) return;
          const Bb = hb.getBoundingClientRect();
          let {
            x: Ub,
            y: Yb
          } = lG(bb.clientX, bb.clientY, Bb);
          Ub = Nh.d.clamp(Ub, 0, 1), Yb = Nh.d.clamp(Yb, 0, 1);
          const [Sb, Hb, wb, Zb] = ub.map((bb => Nh.d.clamp(bb, 0, 1))), Xb = Math.hypot(Ub - Sb, Yb - Hb), pb = Math.hypot(Ub - wb, Yb - Zb), ob = Xb <= pb ? "p1" : "p2";
          ("p1" === ob ? Xb : pb) > .12 || (Gb.current = ob, Lb(ob), hb.setPointerCapture(bb.pointerId), ab(bb.clientX, bb.clientY))
        }), [ab, ub]),
        wb = (0, Bb.useCallback)((bb => {
          Gb.current && ab(bb.clientX, bb.clientY)
        }), [ab]),
        Zb = (0, Bb.useCallback)((bb => {
          Gb.current = null, Lb(null), bb.currentTarget.hasPointerCapture(bb.pointerId) && bb.currentTarget.releasePointerCapture(bb.pointerId)
        }), []);
      return (0, Sb.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Sb.jsx)("canvas", {
          ref: Ob,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: XG,
            height: XG
          },
          onPointerDown: Hb,
          onPointerMove: wb,
          onPointerUp: Zb,
          onPointerCancel: Zb
        }), (0, Sb.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: oG(ub)
        })]
      })
    }));
    var CG = hb(1587),
      dG = hb(1572);
    const rG = 12;

    function jG(bb) {
      return {
        left: bb.left + bb.width / 2,
        top: bb.top - 8
      }
    }

    function nG(bb, ub) {
      const [hb, Ob] = (0, Bb.useState)(null);
      return (0, Bb.useLayoutEffect)((() => {
        const hb = bb.current;
        if (!hb) return;
        const {
          width: Bb,
          height: Gb
        } = hb.getBoundingClientRect();
        Ob(function(bb, ub, hb) {
          const Bb = window.innerWidth,
            Ob = window.innerHeight,
            Gb = ub / 2;
          let Ub = bb.left + bb.width / 2;
          Ub = Math.max(rG + Gb, Math.min(Ub, Bb - rG - Gb));
          const Lb = bb.top - 8 - rG,
            Yb = Ob - bb.bottom - 8 - rG,
            Sb = Lb < hb && Yb >= Lb;
          let ab;
          Sb ? (ab = bb.bottom + 8, ab + hb > Ob - rG && (ab = Ob - rG - hb), ab = Math.max(rG, ab)) : (ab = bb.top - 8, ab - hb < rG && (ab = rG + hb));
          return {
            left: Ub,
            top: ab,
            placeBelow: Sb
          }
        }(ub, Bb, Gb))
      }), [ub, bb]), hb
    }

    function DG(bb, ub, hb) {
      (0, Bb.useEffect)((() => (0, dG.c)("pointerdown", (Bb => {
        var Ob, Gb;
        const Ub = Bb.target;
        Ub instanceof Node && (null !== (Ob = bb.current) && void 0 !== Ob && Ob.contains(Ub) || null !== hb && void 0 !== hb && null !== (Gb = hb.current) && void 0 !== Gb && Gb.contains(Ub) || (0, CG.j)(Ub) || ub())
      }))), [hb, ub, bb])
    }

    function xG(bb) {
      let {
        label: ub,
        value: hb,
        onChange: Bb
      } = bb;
      return (0, Sb.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Sb.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: ub
        }), (0, Sb.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((bb, ub) => (0, Sb.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Sb.jsx)("span", {
              children: bb
            }), (0, Sb.jsx)("input", {
              type: "number",
              step: "any",
              value: hb[ub],
              onChange: bb => {
                const Ob = Number.parseFloat(bb.target.value);
                if (Number.isNaN(Ob)) return;
                const Gb = [hb[0], hb[1], hb[2]];
                Gb[ub] = Ob, Bb(Gb)
              }
            })]
          }, bb)))
        })]
      })
    }
    const zG = (0, Bb.memo)((function(bb) {
        var ub, hb, Ob;
        let {
          keyframe: Ub,
          anchor: Lb,
          hasOutgoingSegment: Yb,
          onClose: ab,
          onApply: Hb,
          onDelete: wb,
          onUseCurrentCamera: Zb
        } = bb;
        const Xb = (0, Bb.useRef)(null),
          pb = nG(Xb, Lb.rect),
          [ob, Ab] = (0, Bb.useState)((() => [Ub.position[0], Ub.position[1], Ub.position[2]])),
          [lb, Kb] = (0, Bb.useState)((() => [Ub.direction[0], Ub.direction[1], Ub.direction[2]])),
          [Wb, Cb] = (0, Bb.useState)((() => Ub.easing));
        (0, Bb.useEffect)((() => {
          Ab([Ub.position[0], Ub.position[1], Ub.position[2]]), Kb([Ub.direction[0], Ub.direction[1], Ub.direction[2]]), Cb(Ub.easing)
        }), [Ub]), DG(Xb, ab);
        const db = (0, Bb.useCallback)((() => {
            Hb({
              gH: Ub.gH,
              position: ob,
              direction: lb,
              easing: Wb
            }), ab()
          }), [lb, Wb, Ub.gH, Hb, ab, ob]),
          rb = (0, Bb.useCallback)((() => {
            wb(Ub.gH), ab()
          }), [Ub.gH, wb, ab]),
          jb = (0, Bb.useCallback)((() => {
            const bb = Zb();
            bb && (Ab([bb.position[0], bb.position[1], bb.position[2]]), Kb([bb.direction[0], bb.direction[1], bb.direction[2]]))
          }), [Zb]),
          nb = jG(Lb.rect);
        return (0, Sb.jsxs)("div", {
          ref: Xb,
          className: Gb()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (ub = null === pb || void 0 === pb ? void 0 : pb.placeBelow) && void 0 !== ub && ub,
            Positioned: null !== pb
          }),
          style: {
            left: `${null!==(hb=null===pb||void 0===pb?void 0:pb.left)&&void 0!==hb?hb:nb.left}px`,
            top: `${null!==(Ob=null===pb||void 0===pb?void 0:pb.top)&&void 0!==Ob?Ob:nb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: [(0, Sb.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Sb.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Sb.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", Lb.gH]
            })]
          }), (0, Sb.jsx)(xG, {
            label: "Position",
            value: ob,
            onChange: Ab
          }), (0, Sb.jsx)(xG, {
            label: "Direction",
            value: lb,
            onChange: Kb
          }), Yb && (0, Sb.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Sb.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Sb.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: ZG.map((bb => {
                const ub = (hb = Wb, Bb = bb.easing, hb[0] === Bb[0] && hb[1] === Bb[1] && hb[2] === Bb[2] && hb[3] === Bb[3]);
                var hb, Bb;
                return (0, Sb.jsx)(Dh.O, {
                  className: Gb()("ReplayKeyframePopoverPreset", {
                    Active: ub
                  }),
                  onClick: () => {
                    Cb(bb.easing)
                  },
                  children: bb.label
                }, bb.label)
              }))
            }), (0, Sb.jsx)(WG, {
              value: Wb,
              onChange: Cb
            })]
          }), (0, Sb.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Sb.jsx)(Dh.e, {
              className: "ReplayViewerCompactButton",
              onClick: jb,
              children: "Use current view"
            }), (0, Sb.jsx)(Dh.m, {
              className: "ReplayViewerCompactButton",
              onClick: db,
              children: "Apply"
            }), (0, Sb.jsx)(Dh.H, {
              className: "ReplayViewerCompactButton",
              onClick: rb,
              children: "Delete"
            })]
          })]
        })
      })),
      gG = (0, Bb.memo)((function(bb) {
        var ub, hb, Ob;
        let {
          anchor: Ub,
          hasPlaybackMark: Lb,
          onClose: Yb,
          onMark: ab,
          onZoom: Hb,
          onCrop: wb,
          onDeleteKeyframes: Zb,
          onClearMark: Xb
        } = bb;
        const pb = (0, Bb.useRef)(null),
          ob = nG(pb, Ub.rect),
          Ab = jG(Ub.rect),
          lb = {
            startTick: Ub.startTick,
            endTick: Ub.endTick
          },
          Kb = Ub.endTick > Ub.startTick;
        return DG(pb, Yb), (0, Sb.jsx)("div", {
          ref: pb,
          className: Gb()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (ub = null === ob || void 0 === ob ? void 0 : ob.placeBelow) && void 0 !== ub && ub,
            Positioned: null !== ob
          }),
          style: {
            left: `${null!==(hb=null===ob||void 0===ob?void 0:ob.left)&&void 0!==hb?hb:Ab.left}px`,
            top: `${null!==(Ob=null===ob||void 0===ob?void 0:ob.top)&&void 0!==Ob?Ob:Ab.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: (0, Sb.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Sb.jsx)(Dh.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                ab(lb)
              },
              disabled: !Kb,
              children: (0, Sb.jsx)("span", {
                children: " Play range "
              })
            }), (0, Sb.jsx)(Dh.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Hb(lb)
              },
              children: (0, Sb.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Sb.jsx)(Dh.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                wb(lb)
              },
              disabled: !Kb,
              children: (0, Sb.jsx)("span", {
                children: " Crop "
              })
            }), (0, Sb.jsx)(Dh.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Zb(lb)
              },
              children: (0, Sb.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), Lb && (0, Sb.jsx)(Dh.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Xb()
              },
              children: (0, Sb.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      iG = (0, Bb.memo)((function(bb) {
        var ub, hb;
        let {
          maxTick: Ob,
          displayTick: Ub,
          hN: Lb,
          cameraKeyframes: Yb,
          playbackMark: ab,
          onSeek: Hb,
          onPause: wb,
          onScrubTickChange: Zb,
          onMoveCameraKeyframe: Xb,
          onUpdateCameraKeyframe: pb,
          onDeleteCameraKeyframe: ob,
          onUseCurrentCamera: Ab,
          onMarkRange: lb,
          onCropRange: Kb,
          onDeleteKeyframesInRange: Wb,
          onClearMark: Cb,
          zoomLevel: db,
          onZoomLevelChange: rb
        } = bb;
        const jb = (0, Bb.useRef)(null),
          nb = (0, Bb.useRef)(null),
          Db = (0, Bb.useRef)(!1),
          xb = (0, Bb.useRef)(!1),
          zb = (0, Bb.useRef)(db),
          gb = (0, Bb.useRef)(null),
          ib = (0, Bb.useRef)(null),
          vb = (0, Bb.useRef)(null),
          tb = (0, Bb.useRef)(null),
          [Jb, eb] = (0, Bb.useState)(null),
          [Nb, sb] = (0, Bb.useState)(Ub),
          [Mb, mb] = (0, Bb.useState)(null),
          [Ib, Pb] = (0, Bb.useState)(null),
          [qb, Eb] = (0, Bb.useState)(null),
          [yb, Vb] = (0, Bb.useState)(null),
          Fb = (0, Bb.useMemo)((() => Yb.map((bb => bb.gH))), [Yb]),
          fb = null !== Jb && void 0 !== Jb ? Jb : Ub,
          {
            viewStart: kb,
            viewEnd: Tb
          } = (0, Bb.useMemo)((() => function(bb) {
            const ub = bb.maxTick + 1,
              hb = Math.max(1, Math.ceil(ub / bb.zoomLevel)),
              Bb = Math.floor(hb / 2);
            let Ob = bb.centerTick - Bb;
            return Ob = Math.max(0, Math.min(Ob, bb.maxTick - hb + 1)), {
              viewStart: Ob,
              viewEnd: Math.min(bb.maxTick, Ob + hb - 1)
            }
          }({
            maxTick: Ob,
            zoomLevel: db,
            centerTick: Nb
          })), [Ob, db, Nb]);
        (0, Bb.useEffect)((() => {
          if (null !== Jb || null !== ib.current || null !== vb.current || null !== tb.current) return;
          if (Db.current) return void(Db.current = !1);
          if (xb.current) return void(xb.current = !1);
          const bb = zb.current !== db;
          zb.current = db, bb && sb(Ub)
        }), [db, Ub, Jb]);
        const cb = (0, Bb.useCallback)((bb => {
            let ub = BG(bb, Ob);
            return ab && (ub = Math.max(ab.inTick, Math.min(ub, ab.outTick))), ub
          }), [Ob, ab]),
          Qb = (0, Bb.useCallback)(((bb, ub) => {
            const hb = cb(bb);
            Hb(hb), ub && sb(hb)
          }), [cb, Hb]),
          Rb = (0, Bb.useCallback)(((bb, ub) => {
            const hb = cb(bb);
            eb(hb), Zb(hb), Qb(hb, ub)
          }), [cb, Qb, Zb]),
          bu = (0, Bb.useCallback)((() => {
            eb((bb => (null !== bb && sb(bb), null))), Zb(null)
          }), [Zb]),
          uu = (0, Bb.useCallback)((() => {
            Eb(null), Vb(null)
          }), []),
          hu = (0, Bb.useCallback)((bb => {
            const ub = jb.current;
            if (!ub) return 0;
            return BG(GG(SG(bb, ub), kb, Tb), Ob)
          }), [Ob, Tb, kb]),
          Bu = (0, Bb.useCallback)((bb => {
            const ub = nb.current;
            if (!ub) return 0;
            return BG(GG(SG(bb, ub), 0, Ob), Ob)
          }), [Ob]),
          Ou = (0, Bb.useMemo)((() => {
            if (!Mb) return [...Fb];
            const bb = Fb.filter((bb => bb !== Mb.fromTick));
            return bb.push(Mb.previewTick), bb.sort(((bb, ub) => bb - ub)), bb
          }), [Fb, Mb]),
          Gu = (0, Bb.useMemo)((() => {
            var bb;
            return Ib && null !== (bb = Yb.find((bb => bb.gH === Ib.gH))) && void 0 !== bb ? bb : null
          }), [Yb, Ib]),
          Uu = (0, Bb.useMemo)((() => !!Gu && Yb.some((bb => bb.gH > Gu.gH))), [Yb, Gu]);
        (0, Bb.useEffect)((() => {
          Ib && !Gu && Pb(null)
        }), [Ib, Gu]), (0, Bb.useEffect)((() => {
          if (!yb) return () => {};
          const bb = bb => {
            "Escape" === bb.key && uu()
          };
          return window.addEventListener("keydown", bb), () => {
            window.removeEventListener("keydown", bb)
          }
        }), [uu, yb]);
        const Lu = (0, Bb.useCallback)(((bb, ub) => {
            uu(), wb(), Hb(bb, {
              ignorePlaybackMark: !0
            }), Pb({
              gH: bb,
              rect: ub.getBoundingClientRect()
            })
          }), [uu, wb, Hb]),
          Yu = (0, Bb.useCallback)(((bb, ub) => hb => {
            0 === hb.button && (hb.stopPropagation(), Pb(null), uu(), wb(), gb.current = {
              fromTick: bb,
              startX: hb.clientX,
              startY: hb.clientY,
              didDrag: !1,
              track: ub
            }, mb({
              fromTick: bb,
              previewTick: bb,
              track: ub
            }), hb.currentTarget.setPointerCapture(hb.pointerId))
          }), [uu, wb]),
          Su = (0, Bb.useCallback)((bb => {
            if (!Mb) return;
            bb.stopPropagation();
            const ub = gb.current;
            if (ub && !ub.didDrag) {
              const hb = bb.clientX - ub.startX,
                Bb = bb.clientY - ub.startY;
              Math.hypot(hb, Bb) > 5 && (ub.didDrag = !0)
            }
            const hb = "detail" === Mb.track ? hu(bb.clientX) : Bu(bb.clientX);
            hb !== Mb.previewTick && mb({
              ...Mb,
              previewTick: hb
            })
          }), [Mb, hu, Bu]),
          au = (0, Bb.useCallback)((bb => {
            if (!Mb) return;
            bb.stopPropagation();
            const ub = gb.current,
              hb = "detail" === Mb.track ? hu(bb.clientX) : Bu(bb.clientX);
            ub && !ub.didDrag ? Lu(ub.fromTick, bb.currentTarget) : hb !== Mb.fromTick && Xb(Mb.fromTick, hb), mb(null), gb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId)
          }), [Mb, Xb, Lu, hu, Bu]),
          Hu = (0, Bb.useCallback)((bb => {
            if (0 !== bb.button) return;
            Pb(null), wb();
            const ub = hu(bb.clientX);
            ib.current = {
              pointerId: bb.pointerId,
              startX: bb.clientX,
              startY: bb.clientY,
              startTick: ub,
              currentTick: ub,
              didSelect: !1
            }, Eb(null), Vb(null), bb.currentTarget.setPointerCapture(bb.pointerId)
          }), [wb, hu]),
          wu = (0, Bb.useCallback)((bb => {
            const ub = ib.current;
            if (!ub || ub.pointerId !== bb.pointerId) return;
            const hb = hu(bb.clientX);
            if (ub.currentTick = hb, !ub.didSelect) {
              const hb = bb.clientX - ub.startX,
                Bb = bb.clientY - ub.startY;
              if (Math.hypot(hb, Bb) <= 5) return;
              ub.didSelect = !0
            }
            const Bb = Math.min(ub.startTick, hb),
              Ob = Math.max(ub.startTick, hb);
            Eb({
              startTick: Bb,
              endTick: Ob
            })
          }), [hu]),
          Zu = (0, Bb.useCallback)((bb => {
            const ub = ib.current;
            if (!ub || ub.pointerId !== bb.pointerId) return;
            if (ib.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), !ub.didSelect) return uu(), void Qb(ub.startTick, !0);
            const hb = hu(bb.clientX),
              Bb = Math.min(ub.startTick, hb),
              Ob = Math.max(ub.startTick, hb),
              Gb = {
                startTick: Bb,
                endTick: Ob
              };
            Eb(Gb);
            const Ub = jb.current;
            if (!Ub) return;
            const Lb = Ub.getBoundingClientRect(),
              Yb = OG(Bb, kb, Tb) / 100,
              Sb = OG(Ob, kb, Tb) / 100,
              ab = Lb.left + Yb * Lb.width,
              Hb = Lb.left + Sb * Lb.width;
            Vb({
              ...Gb,
              rect: new DOMRect(ab, Lb.top, Math.max(Hb - ab, 1), Lb.height)
            })
          }), [uu, Qb, hu, Tb, kb]),
          Xu = (0, Bb.useCallback)((bb => ub => {
            if (0 !== ub.button) return;
            ub.stopPropagation(), Pb(null), uu(), wb(), vb.current = {
              pointerId: ub.pointerId,
              track: bb
            }, ub.currentTarget.setPointerCapture(ub.pointerId);
            const hb = "detail" === bb ? hu(ub.clientX) : Bu(ub.clientX);
            Rb(hb, !1)
          }), [uu, wb, Rb, hu, Bu]),
          pu = (0, Bb.useCallback)((bb => {
            const ub = vb.current;
            if (!ub || ub.pointerId !== bb.pointerId) return;
            bb.stopPropagation();
            const hb = "detail" === ub.track ? hu(bb.clientX) : Bu(bb.clientX);
            Rb(hb, !1)
          }), [Rb, hu, Bu]),
          ou = (0, Bb.useCallback)((bb => {
            const ub = vb.current;
            ub && ub.pointerId === bb.pointerId && (bb.stopPropagation(), vb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), bu())
          }), [bu]),
          Au = (0, Bb.useCallback)((bb => {
            0 === bb.button && (uu(), wb(), tb.current = {
              pointerId: bb.pointerId
            }, bb.currentTarget.setPointerCapture(bb.pointerId), Rb(Bu(bb.clientX), !0))
          }), [uu, wb, Rb, Bu]),
          lu = (0, Bb.useCallback)((bb => {
            const ub = tb.current;
            ub && ub.pointerId === bb.pointerId && Rb(Bu(bb.clientX), !0)
          }), [Rb, Bu]),
          Ku = (0, Bb.useCallback)((bb => {
            const ub = tb.current;
            ub && ub.pointerId === bb.pointerId && (tb.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId), bu())
          }), [bu]),
          Wu = (0, Bb.useCallback)((bb => {
            const ub = Math.max(1, bb.endTick - bb.startTick + 1),
              hb = Ob + 1,
              Bb = hb / ub,
              Gb = Math.max(1, Math.ceil(hb / Bb)),
              Ub = bb.startTick + Math.floor((Gb - 1) / 2);
            xb.current = !0, zb.current = Bb, sb(BG(Ub, Ob)), rb(Bb), uu()
          }), [uu, Ob, rb]),
          Cu = (0, Bb.useCallback)((bb => {
            lb(bb), uu()
          }), [uu, lb]),
          du = (0, Bb.useCallback)((bb => {
            Kb(bb), uu()
          }), [uu, Kb]),
          ru = (0, Bb.useCallback)((bb => {
            Wb(bb), uu()
          }), [uu, Wb]),
          ju = (0, Bb.useCallback)((() => {
            Cb(), uu()
          }), [uu, Cb]);
        (0, Bb.useEffect)((() => {
          const bb = jb.current;
          if (!bb) return () => {};
          const ub = ub => {
            ub.preventDefault();
            const hb = BG(GG(SG(ub.clientX, bb), kb, Tb), Ob),
              Bb = ub.deltaY < 0 ? "in" : "out",
              Gb = YG(db, Bb);
            Gb !== db && (Db.current = !0, sb(hb), rb(Gb))
          };
          return bb.addEventListener("wheel", ub, {
            passive: !1
          }), () => {
            bb.removeEventListener("wheel", ub)
          }
        }), [Ob, rb, Tb, kb, db]);
        const nu = OG(fb, kb, Tb),
          Du = aG(fb, Ob),
          xu = aG(kb, Ob),
          zu = Ob > 0 ? aG(Tb, Ob) : 100,
          gu = null !== ab,
          iu = null !== (ub = null === ab || void 0 === ab ? void 0 : ab.inTick) && void 0 !== ub ? ub : 0,
          vu = null !== (hb = null === ab || void 0 === ab ? void 0 : ab.outTick) && void 0 !== hb ? hb : Ob,
          tu = aG(iu, Ob),
          Ju = Math.max(aG(vu, Ob) - tu, 0),
          eu = OG(Math.max(iu, kb), kb, Tb),
          Nu = OG(Math.min(vu, Tb), kb, Tb),
          su = Math.max(Nu - eu, 0),
          Mu = gu && vu >= kb && iu <= Tb,
          mu = OG(iu, kb, Tb),
          Iu = OG(vu, kb, Tb),
          Pu = gu && iu >= kb && iu <= Tb,
          qu = gu && vu >= kb && vu <= Tb,
          Eu = aG(iu, Ob),
          yu = aG(vu, Ob),
          Vu = null !== qb && void 0 !== qb ? qb : yb ? {
            startTick: yb.startTick,
            endTick: yb.endTick
          } : null,
          Fu = Vu ? OG(Math.max(Vu.startTick, kb), kb, Tb) : 0,
          fu = Vu ? OG(Math.min(Vu.endTick, Tb), kb, Tb) : 0,
          ku = Math.max(fu - Fu, 0),
          Tu = null !== Vu && Vu.endTick >= kb && Vu.startTick <= Tb,
          cu = (0, Bb.useMemo)((() => HG(0, Ob, Lb)), [Ob, Lb]),
          Qu = (0, Bb.useMemo)((() => HG(kb, Tb, Lb)), [kb, Tb, Lb]),
          Ru = (0, Bb.useMemo)((() => Ou.filter((bb => bb >= kb && bb <= Tb))), [Ou, Tb, kb]),
          bh = (0, Bb.useCallback)(((bb, ub, hb) => {
            const Bb = "detail" === ub ? OG(bb, kb, Tb) : aG(bb, Ob),
              Ub = null !== Mb && hb === Mb.fromTick,
              Lb = null !== Ib && Ib.gH === hb;
            return (0, Sb.jsx)("button", {
              type: "button",
              className: Gb()("ReplayTimelineCameraKeyframeMarker", "detail" === ub ? "Detail" : "Overview", {
                Dragging: Ub,
                Selected: Lb
              }),
              style: {
                left: `${Bb}%`
              },
              onPointerDown: Yu(hb, ub),
              onPointerMove: Su,
              onPointerUp: au,
              onPointerCancel: au,
              "aria-label": `Camera keyframe at tick ${hb}`
            }, `cam-${ub}-${hb}`)
          }), [Yu, Ib, au, Mb, Ob, Su, Tb, kb]),
          uh = (0, Bb.useCallback)((bb => Mb && bb === Mb.previewTick ? Mb.fromTick : bb), [Mb]);
        return Ob <= 0 ? null : (0, Sb.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Ib && Gu && (0, uG.createPortal)((0, Sb.jsx)(zG, {
            keyframe: Gu,
            anchor: Ib,
            hasOutgoingSegment: Uu,
            onClose: () => {
              Pb(null)
            },
            onApply: pb,
            onDelete: ob,
            onUseCurrentCamera: Ab
          }), document.body), yb && (0, uG.createPortal)((0, Sb.jsx)(gG, {
            anchor: yb,
            hasPlaybackMark: gu,
            onClose: uu,
            onMark: Cu,
            onZoom: Wu,
            onCrop: du,
            onDeleteKeyframes: ru,
            onClearMark: ju
          }), document.body), (0, Sb.jsxs)("div", {
            className: Gb()("ReplayTimelineOverviewSection", {
              Hidden: db <= 1
            }),
            children: [(0, Sb.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Sb.jsxs)("div", {
              ref: nb,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: Au,
              onPointerMove: lu,
              onPointerUp: Ku,
              onPointerCancel: Ku,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Ob,
              "aria-valuenow": fb,
              tabIndex: 0,
              children: [cu.map((bb => {
                const ub = aG(bb, Ob);
                return (0, Sb.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${ub}%`
                  }
                }, bb)
              })), gu && (0, Sb.jsxs)(Sb.Fragment, {
                children: [(0, Sb.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${tu}%`,
                    width: `${Ju}%`
                  }
                }), (0, Sb.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${Eu}%`
                  },
                  "aria-hidden": !0
                }), (0, Sb.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${yu}%`
                  },
                  "aria-hidden": !0
                })]
              }), Ou.map((bb => bh(bb, "overview", uh(bb)))), (0, Sb.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${xu}%`,
                  width: `${Math.max(zu-xu,.5)}%`
                }
              }), (0, Sb.jsx)("button", {
                type: "button",
                className: Gb()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Jb
                }),
                style: {
                  left: `${Du}%`
                },
                onPointerDown: Xu("overview"),
                onPointerMove: pu,
                onPointerUp: ou,
                onPointerCancel: ou,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Sb.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Sb.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Sb.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Sb.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [UG(kb, Lb), " \u2013 ", UG(Tb, Lb), db > 1 && (0, Sb.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: LG(db)
                })]
              })]
            }), (0, Sb.jsxs)("div", {
              ref: jb,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Hu,
              onPointerMove: wu,
              onPointerUp: Zu,
              onPointerCancel: Zu,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": kb,
              "aria-valuemax": Tb,
              "aria-valuenow": fb,
              tabIndex: 0,
              children: [Qu.map((bb => {
                const ub = OG(bb, kb, Tb);
                return (0, Sb.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${ub}%`
                  }
                }, bb)
              })), Mu && (0, Sb.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${eu}%`,
                  width: `${su}%`
                }
              }), Pu && (0, Sb.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${mu}%`
                },
                "aria-label": `Play range start at tick ${iu}`
              }), qu && (0, Sb.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Iu}%`
                },
                "aria-label": `Play range end at tick ${vu}`
              }), Tu && Vu && (0, Sb.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Fu}%`,
                  width: `${ku}%`
                }
              }), Ru.map((bb => bh(bb, "detail", uh(bb)))), (0, Sb.jsx)("button", {
                type: "button",
                className: Gb()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Jb
                }),
                style: {
                  left: `${nu}%`
                },
                onPointerDown: Xu("detail"),
                onPointerMove: pu,
                onPointerUp: ou,
                onPointerCancel: ou,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Sb.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Sb.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      vG = (0, Bb.memo)((function(bb) {
        let {
          enabled: ub
        } = bb;
        const hb = (0, Bb.useRef)(!1),
          Ob = (0, Bb.useRef)(null),
          [Ub, Lb] = (0, Bb.useState)(!1),
          Yb = (0, Bb.useCallback)((bb => {
            ub && 0 === bb.button && (hb.current = !0, Lb(!0), Ob.current = {
              x: bb.clientX,
              y: bb.clientY
            }, bb.currentTarget.setPointerCapture(bb.pointerId))
          }), [ub]),
          ab = (0, Bb.useCallback)((bb => {
            if (!ub || !hb.current || !Ob.current) return;
            const Bb = bb.clientX - Ob.current.x,
              Gb = bb.clientY - Ob.current.y;
            Ob.current = {
              x: bb.clientX,
              y: bb.clientY
            }, wb.gameBridge.send("dragReplayCamera", {
              dx: Bb,
              dy: Gb
            })
          }), [ub]),
          Hb = (0, Bb.useCallback)((bb => {
            hb.current && (hb.current = !1, Lb(!1), Ob.current = null, bb.currentTarget.releasePointerCapture(bb.pointerId))
          }), []);
        return ub ? (0, Sb.jsx)("div", {
          className: Gb()("ReplayViewerCameraDragSurface", {
            Dragging: Ub
          }),
          onPointerDown: Yb,
          onPointerMove: ab,
          onPointerUp: Hb,
          onPointerCancel: Hb,
          "aria-hidden": !0
        }) : null
      }));
    var tG = hb(36656),
      JG = hb(36659);
    const eG = (0, Bb.memo)((function(bb) {
        var ub, hb, Ob;
        let {
          anchorRect: Ub,
          anchorRef: Yb,
          onClose: ab
        } = bb;
        const Hb = (0, Bb.useRef)(null),
          wb = nG(Hb, Ub),
          [Zb, Xb] = (0, Bb.useState)(JG.e),
          pb = (0, Bb.useMemo)((() => Object.values(Zb).every((bb => bb))), [Zb]);
        (0, Lb.h)("replayViewer|uiVisibilityChanged", (() => {
          Xb((0, JG.e)())
        })), DG(Hb, ab, Yb);
        const ob = (0, Bb.useCallback)(((bb, ub) => {
            (0, JG.i)(bb, ub), Xb((0, JG.e)())
          }), []),
          Ab = (0, Bb.useCallback)((bb => {
            for (const {
                group: ub
              }
              of tG.c)(0, JG.i)(ub, bb);
            Xb((0, JG.e)())
          }), []),
          lb = jG(Ub);
        return (0, uG.createPortal)((0, Sb.jsxs)("div", {
          ref: Hb,
          className: Gb()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (ub = null === wb || void 0 === wb ? void 0 : wb.placeBelow) && void 0 !== ub && ub,
            Positioned: null !== wb
          }),
          style: {
            left: `${null!==(hb=null===wb||void 0===wb?void 0:wb.left)&&void 0!==hb?hb:lb.left}px`,
            top: `${null!==(Ob=null===wb||void 0===wb?void 0:wb.top)&&void 0!==Ob?Ob:lb.top}px`
          },
          onPointerDown: bb => {
            bb.stopPropagation()
          },
          children: [(0, Sb.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Sb.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Sb.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Sb.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Sb.jsx)("input", {
                type: "checkbox",
                checked: pb,
                onChange: bb => {
                  Ab(bb.target.checked)
                }
              }), (0, Sb.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), tG.c.map((bb => {
              let {
                group: ub,
                label: hb
              } = bb;
              return (0, Sb.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Sb.jsx)("input", {
                  type: "checkbox",
                  checked: Zb[ub],
                  onChange: bb => {
                    ob(ub, bb.target.checked)
                  }
                }), (0, Sb.jsx)("span", {
                  children: hb
                })]
              }, ub)
            }))]
          })]
        }), document.body)
      })),
      NG = (0, Bb.memo)((function(bb) {
        let {
          disabled: ub
        } = bb;
        const hb = (0, Bb.useRef)(null),
          [Ob, Gb] = (0, Bb.useState)(!1),
          [Ub, Lb] = (0, Bb.useState)(null),
          Yb = (0, Bb.useCallback)((() => {
            hb.current && (Lb(hb.current.getBoundingClientRect()), Gb((bb => !bb)))
          }), []),
          ab = (0, Bb.useCallback)((() => {
            Gb(!1)
          }), []);
        return (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)("div", {
            ref: hb,
            children: (0, Sb.jsx)(Dh.e, {
              className: "ReplayViewerActionButton",
              onClick: Yb,
              disabled: ub,
              children: (0, Sb.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Ob && Ub && (0, Sb.jsx)(eG, {
            anchorRect: Ub,
            anchorRef: hb,
            onClose: ab
          })]
        })
      })),
      sG = ["freeCamUp", "freeCamDown"];

    function MG(bb, ub) {
      wb.gameBridge.send("holdReplayFreecamVertical", {
        action: bb,
        MS: ub
      })
    }
    const mG = (0, Bb.memo)((function() {
        (0, Bb.useEffect)((() => () => {
          ! function() {
            wb.gameBridge.send("moveReplayFreecam", null);
            for (const bb of sG) MG(bb, !1)
          }()
        }), []);
        const bb = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("moveReplayFreecam", bb)
          }), []),
          ub = (0, Bb.useCallback)((bb => ({
            onTouchStart: ub => {
              ub.preventDefault(), ub.stopPropagation(), MG(bb, !0)
            },
            onTouchEnd: ub => {
              ub.preventDefault(), ub.stopPropagation(), MG(bb, !1)
            },
            onTouchCancel: ub => {
              ub.preventDefault(), ub.stopPropagation(), MG(bb, !1)
            }
          })), []);
        return (0, Sb.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Sb.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Sb.jsx)(ju, {
              onMove: bb,
              mode: "pinned"
            })
          }), (0, Sb.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Sb.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...ub("freeCamUp"),
              children: (0, Sb.jsx)(sb.e, {
                name: "angle-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Sb.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...ub("freeCamDown"),
              children: (0, Sb.jsx)(sb.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      IG = [],
      PG = (0, Bb.memo)((function() {
        const bb = (0, fb.g)();
        return (0, rb.d)("replayViewerRequested", (bb => {
          (0, fb.e)("toggle" === bb ? !(0, fb.d)() : "open" === bb)
        })), bb ? (0, Sb.jsx)(qG, {}) : null
      })),
      qG = (0, Bb.memo)((function() {
        var bb, ub, hb, Ob, Ub, Lb, Yb, ab, Hb, Zb, Xb, pb;
        const ob = Bb.useRef(null),
          [Ab, lb] = (0, Bb.useState)(null),
          [Kb, Wb] = (0, Bb.useState)(1),
          [Cb, db] = (0, Bb.useState)(null),
          [Db, xb] = (0, Bb.useState)(!1),
          {
            isTouchScreen: zb
          } = (0, jb.j)(["isTouchScreen"]),
          gb = (0, rb.i)("replay"),
          ib = (0, rb.i)("replayEdits"),
          vb = null !== gb,
          tb = null !== (bb = null === gb || void 0 === gb ? void 0 : gb.gH) && void 0 !== bb ? bb : 0,
          Jb = null !== (ub = null === gb || void 0 === gb ? void 0 : gb.totalTicks) && void 0 !== ub ? ub : 0,
          eb = Math.max(0, Jb - 1),
          Mb = null !== (hb = null === gb || void 0 === gb ? void 0 : gb.playing) && void 0 !== hb && hb,
          mb = null !== (Ob = null === gb || void 0 === gb ? void 0 : gb.speed) && void 0 !== Ob ? Ob : 1,
          Ib = null !== (Ub = null === gb || void 0 === gb ? void 0 : gb.hN) && void 0 !== Ub ? Ub : 20,
          Pb = null !== Cb && void 0 !== Cb ? Cb : tb,
          qb = null !== (Lb = null === gb || void 0 === gb ? void 0 : gb.freecam) && void 0 !== Lb && Lb,
          Eb = null !== (Yb = null === gb || void 0 === gb ? void 0 : gb.cameraMode) && void 0 !== Yb ? Yb : "recording",
          yb = null !== (ab = null === ib || void 0 === ib ? void 0 : ib.cameraKeyframes) && void 0 !== ab ? ab : IG,
          Vb = null !== (Hb = null === ib || void 0 === ib ? void 0 : ib.playbackMark) && void 0 !== Hb ? Hb : null,
          Fb = null !== (Zb = null === ib || void 0 === ib ? void 0 : ib.fileName) && void 0 !== Zb ? Zb : null,
          kb = null !== (Xb = null === ib || void 0 === ib ? void 0 : ib.unsavedChanges) && void 0 !== Xb && Xb,
          Tb = null !== (pb = null === ib || void 0 === ib ? void 0 : ib.suggestSaveAs) && void 0 !== pb && pb,
          cb = (0, rb.i)("replayVideoExporting"),
          Qb = !cb && vb && ("freecam" === Eb || ("recording" === Eb || "keyframe" === Eb) && !Mb),
          Rb = zb && vb && "freecam" === Eb && !cb && !Db;
        (0, bG.c)(!0, !0, "ReplayViewerOverlay"), (0, Bb.useEffect)((() => {
          wb.gameBridge.send("syncReplayCameraMode", null)
        }), [qb]);
        const bu = (0, Bb.useCallback)(((bb, ub) => {
            wb.gameBridge.send("seekReplay", {
              gH: bb,
              ignorePlaybackMark: null === ub || void 0 === ub ? void 0 : ub.ignorePlaybackMark
            })
          }), []),
          uu = (0, Bb.useCallback)((() => {
            wb.gameBridge.send("setReplayPlaying", !1)
          }), []),
          hu = (0, Bb.useCallback)(((bb, ub) => {
            wb.gameBridge.send("moveReplayCameraKeyframe", {
              from: bb,
              to: ub
            })
          }), []),
          Bu = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("setReplayCameraKeyframe", bb)
          }), []),
          Ou = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("deleteReplayCameraKeyframes", {
              start: bb,
              end: bb
            })
          }), []),
          Gu = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("deleteReplayCameraKeyframes", {
              start: bb.startTick,
              end: bb.endTick
            })
          }), []),
          Uu = (0, Bb.useCallback)((() => wb.gameBridge.lookup("replayCamera", null)), []),
          Lu = (0, Bb.useCallback)((bb => {
            db(bb)
          }), []),
          Yu = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("setReplayPlaybackMark", {
              inTick: bb.startTick,
              outTick: bb.endTick
            })
          }), []),
          Su = (0, Bb.useCallback)((() => {
            wb.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          au = (0, Bb.useCallback)((bb => {
            const ub = wb.gameBridge.latest("replay");
            if (null === ub || bb.endTick <= bb.startTick) return;
            const hb = bb.startTick,
              Bb = bb.endTick;
            TB.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((bb => {
              var Ob;
              if (!0 !== bb) return;
              if ((null === (Ob = wb.gameBridge.latest("replay")) || void 0 === Ob ? void 0 : Ob.id) !== ub.id) return;
              wb.gameBridge.send("cropReplay", {
                start: hb,
                end: Bb
              }) && (db(null), Wb(1))
            }))
          }), []),
          Hu = (0, Bb.useCallback)(((bb, ub) => {
            lb(null), Wb(1), db(null), (0, yO.e)().open(bb, ub).catch((bb => {
              console.error(bb), lb(bb instanceof Error ? bb.message : "Failed to parse recording")
            }))
          }), []),
          wu = (0, Bb.useCallback)(((bb, ub) => {
            null !== wb.gameBridge.latest("connectedGame").websocketUrl ? TB.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((hb => {
              !0 === hb && Hu(bb, ub)
            })) : Hu(bb, ub)
          }), [Hu]),
          Zu = (0, Bb.useCallback)((bb => {
            var ub;
            const hb = null === (ub = bb.target.files) || void 0 === ub ? void 0 : ub[0];
            if (bb.target.value = "", !hb) return;
            const Bb = new FileReader;
            Bb.onload = () => {
              wu(new Uint8Array(Bb.result), {
                fileName: hb.name
              })
            }, Bb.onerror = () => {
              lb("Failed to read file")
            }, Bb.readAsArrayBuffer(hb)
          }), [wu]),
          Xu = (0, Bb.useCallback)((() => {
            const bb = () => {
              var bb;
              null === (bb = ob.current) || void 0 === bb || bb.click()
            };
            (0, fO.k)() ? (0, fO.i)().then((bb => {
              bb && wu(bb.bytes, {
                fileHandle: bb.handle
              })
            })).catch((ub => {
              console.error(ub), bb()
            })): bb()
          }), [wu]),
          pu = (0, Bb.useCallback)((async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let ub;
            try {
              ub = await RO(bb, {
                files: (0, yO.e)(),
                pickerSupported: fO.k,
                chooseFile: fO.e,
                write: fO.l,
                download: FO.k,
                onFallback: console.error
              })
            } catch (hb) {
              return void(bb => {
                console.error(bb), TB.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: TO(bb),
                  confirmText: "OK"
                })
              })(hb)
            }
            "written" !== ub && "downloaded" !== ub || (() => {
              const bb = TB.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                bb.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          ou = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("replayAction", bb)
          }), []),
          Au = (0, Bb.useCallback)((bb => {
            Wb((ub => YG(ub, bb)))
          }), []),
          lu = (0, Bb.useCallback)((bb => {
            if (!wb.gameBridge.latest("replayVideoExporting")) switch (bb) {
              case "replayLoad":
                Xu();
                break;
              case "replaySave":
                pu(!1);
                break;
              case "replaySaveAs":
                pu(!0);
                break;
              case "replayTimelineZoomIn":
                Au("in");
                break;
              case "replayTimelineZoomOut":
                Au("out")
            }
          }), [Xu, pu, Au]);
        (0, rb.d)("replayUiActionRequested", lu);
        const Ku = (0, Bb.useCallback)((bb => {
            wb.gameBridge.send("setReplayCameraMode", bb)
          }), []),
          Wu = vb ? Dh.e : Dh.m,
          Cu = kb && !Tb ? Dh.m : Dh.e,
          du = kb && Tb ? Dh.m : Dh.e;
        return (0, Sb.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Sb.jsx)(vG, {
            enabled: Qb
          }), Rb && (0, Sb.jsx)(mG, {}), (0, Sb.jsx)("input", {
            ref: ob,
            type: "file",
            accept: FO.e,
            className: "ReplayViewerFileInput",
            onChange: Zu
          }), (0, Sb.jsxs)("div", {
            className: Gb()("ReplayViewerBar", {
              Collapsed: Db
            }),
            children: [(0, Sb.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Db ? xb(!1) : vb ? xb(!0) : (0, fb.b)()
              },
              "aria-expanded": !Db,
              "aria-label": Db ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Sb.jsx)(sb.e, {
                name: Db ? "angle-up" : "angle-down"
              })
            }), !Db && (0, Sb.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [vb && Jb > 0 && (0, Sb.jsx)(iG, {
                maxTick: eb,
                displayTick: Pb,
                hN: Ib,
                cameraKeyframes: yb,
                playbackMark: Vb,
                onSeek: bu,
                onPause: uu,
                onScrubTickChange: Lu,
                onMoveCameraKeyframe: hu,
                onUpdateCameraKeyframe: Bu,
                onDeleteCameraKeyframe: Ou,
                onUseCurrentCamera: Uu,
                onMarkRange: Yu,
                onCropRange: au,
                onDeleteKeyframesInRange: Gu,
                onClearMark: Su,
                zoomLevel: Kb,
                onZoomLevelChange: Wb
              }, eb), (0, Sb.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Sb.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Sb.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [vb && (0, Sb.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Fb && void 0 !== Fb ? Fb : "Unsaved recording", kb ? " *" : ""]
                    }), (0, Sb.jsxs)(Wu, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        lu("replayLoad")
                      },
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Sb.jsxs)(Dh.e, {
                      className: "ReplayViewerActionButton",
                      onClick: fb.b,
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Sb.jsxs)(Cu, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        lu("replaySave")
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Sb.jsxs)(Dh.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        wb.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Sb.jsxs)(du, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        lu("replaySaveAs")
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Sb.jsxs)(Dh.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        wb.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !vb || 0 === Jb || cb,
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Sb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Sb.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Sb.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Sb.jsx)(nb.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Sb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Sb.jsx)(Nb.d, {
                        tooltipInner: (0, Sb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Sb.jsxs)(Dh.O, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Eb,
                          onClick: () => {
                            Ku("recording")
                          },
                          disabled: !vb,
                          children: ["Recorded ", (0, Sb.jsx)(sb.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Sb.jsx)(Nb.d, {
                        tooltipInner: (0, Sb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Sb.jsxs)(Dh.O, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Eb,
                          onClick: () => {
                            Ku("freecam")
                          },
                          disabled: !vb,
                          children: ["Free ", (0, Sb.jsx)(sb.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Sb.jsx)(Nb.d, {
                        tooltipInner: (0, Sb.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Sb.jsxs)(Dh.O, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Eb,
                          onClick: () => {
                            Ku("keyframe")
                          },
                          disabled: !vb,
                          children: ["Preview ", (0, Sb.jsx)(sb.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Sb.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Sb.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Sb.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Sb.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: UG(Pb, Ib)
                      }), (0, Sb.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Sb.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: UG(eb, Ib)
                      })]
                    }), (0, Sb.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Pb, " / ", eb]
                    })]
                  }), (0, Sb.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Sb.jsxs)(Dh.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        ou("replaySkipBack")
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsxs)("span", {
                        children: [" ", (0, Sb.jsx)(sb.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Sb.jsx)(nb.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Sb.jsxs)(Dh.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        wb.gameBridge.send("setReplayPlaying", !Mb)
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsxs)("span", {
                        children: [" ", Mb ? (0, Sb.jsx)(sb.e, {
                          name: "pause"
                        }) : (0, Sb.jsx)(sb.e, {
                          name: "play"
                        }), " "]
                      }), (0, Sb.jsx)(nb.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Sb.jsxs)(Dh.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        ou("replaySkipForward")
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsxs)("span", {
                        children: [" ", (0, Sb.jsx)(sb.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Sb.jsx)(nb.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Sb.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Sb.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Sb.jsxs)(Dh.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ou("replayRecordKeyframe")
                      },
                      disabled: !vb,
                      children: [(0, Sb.jsx)(nb.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Sb.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Sb.jsx)(NG, {
                      disabled: !vb
                    }), Vb && (0, Sb.jsx)(Dh.O, {
                      className: "ReplayViewerActionButton",
                      onClick: Su,
                      disabled: !vb,
                      children: (0, Sb.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Sb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Sb.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Sb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Sb.jsx)(Dh.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          ou("replaySpeedDown")
                        },
                        disabled: !vb || (0, VO.f)(mb),
                        children: (0, Sb.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Sb.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [mb, "\xd7"]
                      }), (0, Sb.jsx)(Dh.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          ou("replaySpeedUp")
                        },
                        disabled: !vb || (0, VO.e)(mb),
                        children: (0, Sb.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Sb.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Sb.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Sb.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Sb.jsxs)(Dh.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          lu("replayTimelineZoomOut")
                        },
                        disabled: !vb || Kb <= hG[0],
                        children: [(0, Sb.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Sb.jsx)(nb.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Sb.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: LG(Kb)
                      }), (0, Sb.jsxs)(Dh.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          lu("replayTimelineZoomIn")
                        },
                        disabled: !vb || Kb >= hG[hG.length - 1],
                        children: [(0, Sb.jsx)("span", {
                          children: " + "
                        }), (0, Sb.jsx)(nb.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Sb.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !vb && "Load a recording to begin playback"
              }), Ab && (0, Sb.jsx)("div", {
                className: "ReplayViewerError",
                children: Ab
              })]
            })]
          })]
        })
      }));
    var EG = hb(1218);

    function yG() {
      const [, bb] = (0, Bb.useState)(0);
      return (0, Lb.h)("replayViewer|uiVisibilityChanged", (() => {
          bb((bb => bb + 1))
        })), (0, Lb.h)("replayViewer|replayLoaded", (() => {
          bb((bb => bb + 1))
        })),
        function() {
          if (!(0, EG.c)()) return {};
          const bb = {
              [tG.b]: "true"
            },
            ub = (0, JG.e)();
          for (const {
              group: hb,
              dataAttr: Bb
            }
            of tG.c) Bb && !ub[hb] && (bb[Bb] = "true");
          return bb
        }()
    }
    var VG = hb(9077),
      FG = hb(1946),
      fG = hb(8463),
      kG = hb(8452),
      TG = hb(1951);
    const cG = (0, Bb.memo)((function() {
      var bb, ub, hb;
      const Ob = (0, Kb.f)("customButtons");
      (0, Bb.useEffect)((() => Ob ? (wb.gameBridge.send("bindCustomButtonKeys", Ob.filter(fG.g).map((bb => {
        let {
          id: ub,
          keycode: hb
        } = bb;
        return {
          id: ub,
          keycode: hb
        }
      }))), () => {
        wb.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Ob]);
      const Gb = null !== (bb = null === Ob || void 0 === Ob ? void 0 : Ob.filter(fG.g)) && void 0 !== bb ? bb : [],
        Ub = (0, kG.j)(),
        Lb = null !== (ub = null === (hb = (0, TG.c)()) || void 0 === hb ? void 0 : hb.hideButtonHints) && void 0 !== ub && ub,
        Yb = "customButton" !== (null === Ub || void 0 === Ub ? void 0 : Ub.kind) || Lb ? null : Ub.id,
        ab = Gb.length > 0,
        Hb = (0, Bb.useRef)(null);
      return (0, Bb.useLayoutEffect)((() => {
        if (!ab) return () => {};
        const bb = Hb.current,
          ub = bb.closest(".InGameUi"),
          hb = () => {
            ub.style.setProperty("--custom-buttons-top", `${bb.offsetTop}px`)
          };
        hb();
        const Bb = new ResizeObserver(hb);
        return Bb.observe(bb), Bb.observe(bb.parentElement), () => {
          Bb.disconnect(), ub.style.removeProperty("--custom-buttons-top")
        }
      }), [ab]), (0, Sb.jsx)("div", {
        ref: Hb,
        className: "" + ((0, ZO.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: Gb.map((bb => {
          var ub, hb;
          return (0, Sb.jsx)(QG, {
            button: bb,
            padGlyph: bb.id === Yb && null !== (ub = null === (hb = (0, Pb.h)()) || void 0 === hb ? void 0 : hb.getBoundButton("actionButton")) && void 0 !== ub ? ub : null
          }, bb.id)
        }))
      })
    }));

    function QG(bb) {
      let {
        button: ub,
        padGlyph: hb
      } = bb;
      const Ob = (0, Bb.useRef)(null),
        Gb = () => {
          null !== Ob.current && (Ob.current = null, wb.gameBridge.send("pressCustomButton", {
            id: ub.id,
            down: !1
          }))
        };
      (0, Bb.useEffect)((() => Gb), []);
      const Ub = yu(Gb, {
          pressesOnPointerDown: !0
        }),
        Lb = bb => {
          Ob.current === bb.pointerId && Gb()
        };
      return (0, Sb.jsxs)("div", {
        className: "CustomIcon",
        ...Ub,
        onLostPointerCapture: Lb,
        children: [(0, Sb.jsx)(FG.b, {
          icon: ub.icon,
          keyboardHint: (0, fG.c)(ub.keycode),
          padGlyph: hb,
          onPointerDown: bb => {
            try {
              bb.currentTarget.setPointerCapture(bb.pointerId)
            } catch {
              return
            }
            null === Ob.current && wb.gameBridge.send("pressCustomButton", {
              id: ub.id,
              down: !0
            }), Ob.current = bb.pointerId
          },
          onPointerUp: Lb,
          onPointerCancel: Lb,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), ub.description && (0, Sb.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: ub.description
        })]
      })
    }
    var RG = hb(2283),
      bU = hb(248);
    const uU = {
      frame: bb => {
        const ub = requestAnimationFrame((() => {
          bb()
        }));
        return () => {
          cancelAnimationFrame(ub)
        }
      },
      afterFrame: bb => {
        const ub = setTimeout(bb, 0);
        return () => {
          clearTimeout(ub)
        }
      }
    };
    class hU {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bU.e,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uU;
        this.idle = bb, this.frames = ub, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (bb(), () => {}) : (ub ? this.waiting.unshift(bb) : this.waiting.push(bb), this.schedule(), () => {
          const ub = this.waiting.indexOf(bb);
          ub >= 0 && (this.waiting.splice(ub, 1), this.settle())
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
        var bb, ub, hb;
        null === (bb = this.cancelIdle) || void 0 === bb || bb.call(this), this.cancelIdle = null, null === (ub = this.cancelFrame) || void 0 === ub || ub.call(this), this.cancelFrame = null, null === (hb = this.cancelAfterFrame) || void 0 === hb || hb.call(this), this.cancelAfterFrame = null
      }
    }
    const BU = (0, Bb.createContext)(null);

    function OU(bb) {
      let {
        children: ub,
        first: hb = !1
      } = bb;
      const Ob = (0, Bb.useContext)(BU),
        [Gb, Ub] = (0, Bb.useState)(null === Ob);
      return (0, Bb.useEffect)((() => {
        if (!Gb && null !== Ob) return Ob.request((() => {
          Ub(!0)
        }), hb)
      }), [hb, Gb, Ob]), Gb ? (0, Bb.createElement)(Bb.Fragment, null, ub) : null
    }
    const GU = (0, Bb.memo)((function(bb) {
        let {
          shown: ub
        } = bb;
        const [hb] = (0, Bb.useState)((() => new Xb.g(ub))), [Ob] = (0, Bb.useState)((() => ub ? null : new hU));
        return (0, Bb.useLayoutEffect)((() => {
          ub && (null === Ob || void 0 === Ob || Ob.show(), hb.show())
        }), [ub, hb, Ob]), (0, Sb.jsx)(Xb.c.Provider, {
          value: hb,
          children: (0, Sb.jsx)(BU.Provider, {
            value: Ob,
            children: (0, Sb.jsx)(UU, {})
          })
        })
      })),
      UU = (0, Bb.memo)((function() {
        const {
          isUiHidden: bb,
          isUiHiddenByCamera: ub,
          worldPanelHud: hb,
          isTouchScreen: Ob
        } = (0, jb.j)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), Ub = (0, fB.d)(), Lb = yG(), Yb = (0, Xb.l)(), ab = (0, Bb.useRef)(null), Hb = (0, Kb.f)("showKillfeed");
        return function() {
            const bb = (0, Xb.l)();
            (0, Bb.useEffect)((() => bb.whenShown(pb)), [bb])
          }(),
          function() {
            const bb = (0, Kb.f)("inventoryColourOverride");
            (0, Bb.useEffect)((() => {
              if (!bb) return;
              const {
                panel: ub,
                slot: hb,
                slotSelected: Bb,
                slotUnavailable: Ob
              } = Eb(bb), Gb = document.documentElement.style;
              return Gb.setProperty("--InventoryPanelColour", ub), Gb.setProperty("--InventorySlotColour", hb), Gb.setProperty("--InventorySlotSelectedColour", Bb), Gb.setProperty("--InventorySlotUnavailableColour", Ob), () => {
                Gb.removeProperty("--InventoryPanelColour"), Gb.removeProperty("--InventorySlotColour"), Gb.removeProperty("--InventorySlotSelectedColour"), Gb.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [bb])
          }(), (0, Bb.useLayoutEffect)((() => Yb.whenShown((() => {
            var bb;
            null === (bb = ab.current) || void 0 === bb || bb.classList.remove("PreMounted")
          }))), [Yb]), (0, Sb.jsxs)(Sb.Fragment, {
            children: [(0, Sb.jsxs)("div", {
              ref: ab,
              className: Gb()("InGameUi", {
                PreMounted: !Yb.shown,
                Hidden: bb,
                HiddenByCamera: ub,
                HiddenByWorldPanel: null !== hb,
                WorldPanelTouchControl: "touchControls" === hb
              }),
              ...Lb,
              children: [(0, Sb.jsxs)(OU, {
                children: [(0, Sb.jsx)(qh.b, {}), (0, Sb.jsx)(fh, {})]
              }), (0, Sb.jsx)(Xb.j, {
                children: (0, Sb.jsx)(kh, {})
              }), (0, Sb.jsxs)(OU, {
                children: [(0, Sb.jsx)(CO, {}), (0, Sb.jsx)(zO, {}), Ob && (0, Sb.jsx)(iO, {})]
              }), (0, Sb.jsxs)(OU, {
                children: [(0, Sb.jsx)(Ah, {}), (0, Sb.jsx)(YB.d, {}), (0, Sb.jsx)(pB, {})]
              }), (0, Sb.jsx)(Xb.j, {
                children: (0, Sb.jsx)(Ph, {})
              }), (0, Sb.jsxs)(OU, {
                children: [(0, Sb.jsx)(nO.c, {}), (0, Sb.jsx)(PG, {})]
              }), (0, Sb.jsxs)(OU, {
                children: [(0, Sb.jsx)(tO.d, {}), (0, Sb.jsx)(JO.g, {})]
              }), (0, Sb.jsx)(OU, {
                children: (0, Sb.jsx)(Kh.h, {})
              }), (0, Sb.jsx)(OU, {
                children: (0, Sb.jsx)(ZU, {
                  showChat: Ub
                })
              }), (0, Sb.jsxs)(OU, {
                children: [(0, Sb.jsx)(NO, {}), (0, Sb.jsx)(jO, {})]
              }), (0, Sb.jsxs)("div", {
                className: Gb()("RightElements", {
                  RightElementsTouchscreen: Ob
                }),
                "data-camera-keeper-host": "",
                children: [(0, Sb.jsxs)("div", {
                  className: dB.g,
                  "data-holds-camera-keeper": "",
                  children: [(0, Sb.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Sb.jsx)(OU, {
                      children: (0, Sb.jsx)(SO.d, {})
                    }), (0, Sb.jsxs)(OU, {
                      children: [(0, Sb.jsx)(Mb, {}), (0, Sb.jsx)(xB.b, {})]
                    }), ZO.featureFlags.useSocialFeatures && (0, Sb.jsx)(Xb.j, {
                      children: (0, Sb.jsx)(zB.e, {
                        placement: "inGame"
                      })
                    }), ZO.featureFlags.useSocialFeatures && (0, Sb.jsx)(Xb.j, {
                      children: (0, Sb.jsx)(qB, {})
                    }), Hb && (0, Sb.jsx)(Xb.j, {
                      children: (0, Sb.jsx)(LB, {})
                    }), (0, Sb.jsx)(OU, {
                      children: (0, Sb.jsx)(VG.c, {})
                    })]
                  }), ZO.featureFlags.useSocialFeatures && (0, Sb.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Sb.jsx)(OU, {
                      children: (0, Sb.jsx)(KO.b, {})
                    })
                  })]
                }), (0, Sb.jsxs)(OU, {
                  children: [(0, Sb.jsx)(Kh.c, {
                    placement: "topRight"
                  }), (0, Sb.jsx)(XU, {})]
                })]
              }), (0, Sb.jsx)("div", {
                className: "LeftCentre",
                children: (0, Sb.jsx)(OU, {
                  children: (0, Sb.jsx)(cG, {})
                })
              }), (0, Sb.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Ob ? "" : void 0,
                children: [(0, Sb.jsx)(Xb.j, {
                  children: (0, Sb.jsx)(ib, {})
                }), (0, Sb.jsx)(OU, {
                  children: (0, Sb.jsx)(YU, {})
                }), (0, Sb.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Ob ? "" : void 0,
                  children: [(0, Sb.jsx)("div", {
                    className: Gb()("BottomLeftElements", {
                      Touch: Ob
                    }),
                    children: (0, Sb.jsxs)(OU, {
                      children: [(0, Sb.jsx)(VB, {}), !Ob && (0, Sb.jsx)(RG.d, {})]
                    })
                  }), (0, Sb.jsx)(OU, {
                    children: (0, Sb.jsx)(wU, {})
                  }), (0, Sb.jsx)(OU, {
                    children: (0, Sb.jsx)(AB, {
                      isTouchScreen: Ob
                    })
                  })]
                })]
              }), (0, Sb.jsx)("div", {
                className: "MiddleLeft"
              }), Ob && (0, Sb.jsx)(OU, {
                children: (0, Sb.jsx)(Ru, {})
              }), (0, Sb.jsx)("div", {
                className: "CameraFadeHost",
                ref: Ku.j
              })]
            }), (0, Sb.jsx)(Xb.j, {
              children: (0, Sb.jsx)(EO.e, {})
            }), (0, Sb.jsx)(OU, {
              first: !0,
              children: (0, Sb.jsx)(FB.c, {})
            }), (0, Sb.jsx)(Xb.j, {
              children: (0, Sb.jsx)(LU, {})
            })]
          })
      }));

    function LU() {
      return (0, Bb.useEffect)((() => {
        const bb = setTimeout((() => {
          (0, Wb.f)()
        }), 0);
        return () => {
          clearTimeout(bb), Wb.i.Bl(!1)
        }
      }), []), null
    }
    const YU = (0, Bb.memo)((function() {
        const bb = (0, Lb.k)("aimingOverlay", "none");
        (0, Ab.e)();
        const ub = (0, Kb.j)("middleTextUpper"),
          hb = (0, Kb.j)("middleTextLower");
        return (0, Sb.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === bb ? {
            visibility: "hidden"
          } : {},
          children: [(0, Sb.jsx)(HU, {
            text: ub,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: SU
          }), (0, Sb.jsx)(HU, {
            text: hb,
            className: "MiddleText",
            maxHeightFraction: aU
          })]
        })
      })),
      SU = .3,
      aU = .2;

    function HU(bb) {
      let {
        text: ub,
        className: hb,
        maxHeightFraction: Ob
      } = bb;
      const Gb = (0, Bb.useRef)(null),
        Ub = (0, Bb.useRef)(null);
      return function(bb, ub, hb, Ob) {
        (0, Bb.useLayoutEffect)((() => {
          const Bb = bb.current,
            Ob = ub.current;
          if (!Bb || !Ob) return;
          let Gb = -1,
            Ub = -1;
          const Lb = bb => (Ob.style.setProperty("zoom", String(bb)), Bb.getBoundingClientRect().height),
            Yb = () => {
              const bb = document.documentElement.clientHeight * hb;
              let ub = 1;
              if (Lb(1) > bb) {
                let hb = .5,
                  Bb = 1;
                for (let ub = 0; ub < 6; ub++) {
                  const ub = (hb + Bb) / 2;
                  Lb(ub) <= bb ? hb = ub : Bb = ub
                }
                ub = hb
              }
              Ub = Lb(ub), Gb = Bb.getBoundingClientRect().width
            };
          Yb();
          let Sb = 0;
          const ab = () => {
              cancelAnimationFrame(Sb), Sb = requestAnimationFrame(Yb)
            },
            Hb = new ResizeObserver((() => {
              const {
                width: bb,
                height: ub
              } = Bb.getBoundingClientRect();
              bb === Gb && ub === Ub || ab()
            }));
          return Hb.observe(Bb), window.addEventListener("resize", ab), () => {
            Hb.disconnect(), window.removeEventListener("resize", ab), cancelAnimationFrame(Sb), Ob.style.removeProperty("zoom")
          }
        }), [bb, ub, hb, Ob])
      }(Gb, Ub, Ob, ub.content), (0, Sb.jsx)("div", {
        ref: Gb,
        className: "MiddleTextFit",
        children: (0, Sb.jsx)(eO, {
          ref: Ub,
          text: ub,
          className: hb
        })
      })
    }
    const wU = (0, Bb.memo)((function() {
        const bb = (0, Lb.k)("aimingOverlay", "none");
        (0, Ab.e)();
        const ub = (0, Kb.f)("useInventory");
        return (0, Sb.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === bb ? {
            visibility: "hidden"
          } : {},
          children: [(0, Sb.jsx)(ab, {}), (0, Sb.jsx)(Kh.c, {}), (0, Sb.jsx)(Wh, {}), (0, Sb.jsx)(Xb.j, {
            children: (0, Sb.jsx)(AO, {})
          }), (0, Sb.jsxs)("div", {
            className: "HotBarRow",
            children: [ub ? (0, Sb.jsx)(Ib.b, {}) : (0, Sb.jsx)(Ib.d, {}), (0, Sb.jsx)(qb, {})]
          })]
        })
      })),
      ZU = (0, Bb.memo)((function(bb) {
        let {
          showChat: ub
        } = bb;
        const {
          t: hb
        } = (0, gb.K)(), {
          clientEscMenuOptions: Ob,
          isTouchScreen: Ub
        } = (0, jb.j)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, Ab.e)();
        const {
          userContext: Lb,
          isUserContextUpdating: Yb
        } = (0, ob.d)(), ab = (0, Kb.f)("hideCoordinates"), wb = (0, Kb.f)("customVariationTitle"), {
          requestedGameNameWithVariation: Zb,
          gameNameWithVariation: Xb,
          lobbyName: pb,
          shownLobbyName: Wb
        } = (0, rb.i)("connectedGame"), Cb = (0, Hb.d)(Zb, pb, !1), [db, nb] = (0, Bb.useState)(null), Db = (0, HO.l)(Xb || Zb || ""), xb = wb || Db || "";
        (0, Bb.useEffect)((() => {
          Yb || iB.e.getFavouriteLobbies(Lb).then((bb => {
            console.log("Got favourite lobbies", bb), nb(bb)
          }))
        }), [Yb, Lb]);
        const zb = (0, Bb.useRef)(null);
        return (0, Bb.useLayoutEffect)((() => {
          const bb = zb.current,
            ub = document.documentElement,
            hb = new ResizeObserver((() => {
              ub.style.setProperty("--InGameHeaderRowsHeight", `${bb.offsetHeight}px`)
            }));
          return hb.observe(bb), () => {
            hb.disconnect(), ub.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), DB(zb), (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsxs)("div", {
            className: Gb()(dB.d, {
              Touchscreen: Ub
            }),
            ref: zb,
            children: [(0, Sb.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Sb.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: bb => {
                  bb.stopPropagation(), bb.preventDefault()
                },
                onClick: () => {
                  jb.d.set({
                    openEverythingMenuName: lb.u.SETTINGS
                  })
                },
                children: [(0, Sb.jsx)(aO.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Sb.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Sb.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === Cb && (0, Sb.jsx)(aO.c, {}), null !== Cb && (0, Sb.jsxs)(Sb.Fragment, {
                  children: [Cb, xb && ` ${xb}`]
                })]
              }), (0, Sb.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Sb.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: Wb
              }), (0, wO.S)(pb) && (0, Sb.jsx)(Nb.d, {
                tooltipInner: (0, Sb.jsx)("div", {
                  children: hb(null !== db && db.includes(pb) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Sb.jsx)("div", {
                  children: (0, Sb.jsx)(Dh.u, {
                    isLiked: null !== db && db.includes(pb),
                    onClick: () => {
                      try {
                        if (!db) return;
                        db.includes(pb) ? (iB.e.unfavouriteLobby(Lb, pb).catch((bb => {
                          console.error("Failed to favourite lobby", bb)
                        })), nb(db.filter((bb => bb !== pb)))) : (iB.e.favouriteLobby(Lb, pb).catch((bb => {
                          console.error("Failed to favourite lobby", bb)
                        })), nb([...db, pb]))
                      } catch (bb) {
                        console.error("Failed to like lobby", bb)
                      }
                    },
                    isLoading: null === db
                  })
                })
              }), (0, Sb.jsx)(IO, {})]
            }), (0, Sb.jsx)(OO, {
              show: Ob.showFPS
            }), !ab && Ob.showCoordinates && (0, Sb.jsx)(LO, {}), !ab && Ob.showChunkCoordinates && (0, Sb.jsx)(YO, {}), (0, Sb.jsx)(sO, {})]
          }), (0, Sb.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Sb.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: ub && (0, Sb.jsx)(Fb.e, {})
            })
          })]
        })
      })),
      XU = (0, Bb.memo)((function() {
        (0, Ab.e)();
        const bb = (0, Kb.j)("RightInfoText"),
          [ub, hb] = (0, Bb.useState)(null);
        return (0, Xu.k)(ub, ".RightElements"), bb.hasText ? (0, Sb.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Sb.jsx)(eO, {
            ref: hb,
            text: bb,
            className: "RightInfoDiv",
            children: (0, Sb.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Sb.jsx)(Yb.c, {
                text: bb.content
              })
            })
          })
        }) : null
      }))
  },
  4606: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(49),
      Ob = hb(298),
      Gb = hb(1799),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        text: ub
      } = bb;
      const hb = [];
      let Lb = "";
      return (0, Ob.nc)(ub).forEach(((bb, ub) => {
        if ("string" === typeof bb || !(0, Gb.e)(bb.icon)) return void(Lb += "string" === typeof bb ? bb : bb.icon);
        const Ob = Math.max(0, Lb.trimEnd().search(/\S{1,12}$/));
        hb.push((0, Ub.jsxs)(Bb.Fragment, {
          children: [Lb.slice(0, Ob), (0, Ub.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Lb.slice(Ob), (0, Ub.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Ub.jsx)(Gb.d, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, ub)), Lb = ""
      })), hb.push(Lb), (0, Ub.jsx)(Ub.Fragment, {
        children: hb
      })
    }
  },
  36145: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      c: () => ab,
      f: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1799),
      Lb = hb(1007);
    const Yb = 350;
    let Sb = 0;

    function ab() {
      return Sb += 1, Sb
    }

    function Hb(bb, ub) {
      let hb = 0;
      for (const Bb of bb) "ingredient" !== Bb.kind && Bb.fY === ub && (hb += Bb.amount);
      return hb > 0 ? {
        idx: ub,
        amount: hb
      } : null
    }

    function wb(bb) {
      var ub, hb;
      let {
        anim: Ob,
        onComplete: Sb
      } = bb;
      const ab = null !== (ub = Ob.delayMs) && void 0 !== ub ? ub : 0,
        Hb = null !== (hb = Ob.durationMs) && void 0 !== hb ? hb : Yb,
        [wb, Zb] = (0, Bb.useState)(Ob.from),
        [Xb, pb] = (0, Bb.useState)(0 === ab),
        [ob, Ab] = (0, Bb.useState)(!1),
        lb = (0, Bb.useRef)(!1);
      return (0, Bb.useEffect)((() => {
        let bb, ub;
        const hb = () => {
            lb.current = !0, pb(!0), bb = requestAnimationFrame((() => {
              ub = requestAnimationFrame((() => {
                Zb({
                  x: Ob.to.x,
                  y: Ob.to.y
                }), Ab(!0)
              }))
            }))
          },
          Bb = lb.current ? 0 : ab;
        let Gb;
        Bb > 0 ? Gb = setTimeout(hb, Bb) : hb();
        const Ub = setTimeout((() => {
          Sb(Ob.id)
        }), Bb + Hb + 50);
        return () => {
          clearTimeout(Gb), cancelAnimationFrame(bb), cancelAnimationFrame(ub), clearTimeout(Ub)
        }
      }), [Ob.id, Ob.to.x, Ob.to.y, Sb, ab, Hb]), (0, Lb.jsx)("div", {
        className: Gb()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Ob.kind,
          Waiting: !Xb,
          Arrived: ob
        }),
        style: {
          left: wb.x,
          top: wb.y,
          "--fly-duration": `${Hb}ms`
        },
        children: (0, Lb.jsx)(Ub.d, {
          itemName: Ob.itemName,
          amount: Ob.amount
        })
      })
    }
  },
  36129: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => eb,
      d: () => Mb
    });
    var Bb = hb(49),
      Ob = hb(2789),
      Gb = hb(6300),
      Ub = hb(1946),
      Lb = hb(2288),
      Yb = hb(8567),
      Sb = hb(314),
      ab = hb(16),
      Hb = hb(1348),
      wb = hb(29),
      Zb = hb(958),
      Xb = hb.n(Zb),
      pb = hb(298),
      ob = hb(36134),
      Ab = hb(1789),
      lb = hb(1857),
      Kb = hb(8417),
      Wb = hb(1007);

    function Cb(bb) {
      var ub, hb;
      let {
        slotIdx: Gb
      } = bb;
      const Ub = (0, lb.g)("hotbar", (bb => {
          var ub;
          return null !== (ub = bb.items[Gb]) && void 0 !== ub ? ub : null
        })),
        Yb = (0, lb.g)("hotbar", (bb => bb.ammo)),
        [ab, Hb] = (0, Bb.useState)(!1),
        wb = (0, Bb.useRef)(null),
        [Zb, pb] = (0, Bb.useState)(null),
        [ob, Cb] = (0, Bb.useState)(null),
        db = (0, Lb.f)("maxAuraLevel"),
        rb = (0, Ob.d)(),
        jb = (0, Bb.useCallback)((() => {
          if (clearTimeout(wb.current), Ub) {
            var bb, ub, hb, Bb;
            const Yb = Ub.displayName,
              ab = [],
              Hb = Array.isArray(Yb) ? Yb : [Yb],
              wb = {
                fontStyle: null !== (bb = Ub.attributes.customAttributes) && void 0 !== bb && bb.author ? "italic" : "normal"
              };
            for (const bb of Hb) bb.str ? ab.push(bb) : ab.push({
              str: bb,
              style: wb
            });
            if (null !== (ub = Ub.attributes.customAttributes) && void 0 !== ub && ub.enchantments) {
              ab.push(" ");
              const bb = Object.entries(Ub.attributes.customAttributes.enchantments).sort(((bb, ub) => ub[1] - bb[1])),
                ub = Ub.attributes.customAttributes.enchantmentData;
              for (const [hb, Bb] of bb) {
                var Ob, Gb;
                const bb = null !== (Ob = null === ub || void 0 === ub || null === (Gb = ub[hb]) || void 0 === Gb ? void 0 : Gb.icon) && void 0 !== Ob ? Ob : `${hb} Enchantment`;
                var Lb;
                if (Bb < 4)
                  for (let ub = 0; ub < Bb; ub++) ab.push({
                    icon: bb,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else ab.push({
                  icon: bb,
                  style: {
                    fontSize: "1.5em"
                  }
                }), ab.push(null !== (Lb = (0, Sb.R)(Bb)) && void 0 !== Lb ? Lb : Bb.toString())
              }
            }
            pb(ab), Cb(null !== (hb = null === (Bb = Ub.attributes.customAttributes) || void 0 === Bb ? void 0 : Bb.enchantmentTier) && void 0 !== hb ? hb : null)
          } else pb(null), Cb(null);
          Hb(!0), rb();
          const Yb = null === Ub || void 0 === Ub ? void 0 : Ub.attributes.customAttributes;
          void 0 === (null === Yb || void 0 === Yb ? void 0 : Yb.shotsLeft) && (wb.current = setTimeout((() => {
            Hb(!1)
          }), 2e3))
        }), [null === Ub || void 0 === Ub ? void 0 : Ub.name, Gb, null === Ub || void 0 === Ub ? void 0 : Ub.instance, null === Ub || void 0 === Ub ? void 0 : Ub.displayName]);
      (0, Bb.useEffect)((() => (jb(), () => {
        clearTimeout(wb.current), Hb(!1)
      })), [null === Ub || void 0 === Ub ? void 0 : Ub.name, Gb, null === Ub || void 0 === Ub ? void 0 : Ub.instance, jb]);
      const nb = null === Ub || void 0 === Ub || null === (ub = Ub.attributes.customAttributes) || void 0 === ub ? void 0 : ub.shotsLeft,
        Db = void 0 === nb ? null : (0, Wb.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${nb}|${Ub.requiresAmmo?`${Yb}x${Ub.clipSize}`:Ub.clipSize}`
        }),
        xb = (0, Kb.h)();
      return (0, Wb.jsx)(Wb.Fragment, {
        children: ab && Ub && !xb.showing ? (0, Wb.jsxs)("div", {
          className: Xb()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === db,
            Enchanted: null !== ob
          }),
          style: {
            "--enchantmentColour": null !== (hb = Sb.rb[ob]) && void 0 !== hb ? hb : Sb.rb.None,
            "--duration": ob ? (0, Sb.mb)(ob) + "s" : void 0
          },
          children: [ob && (0, Wb.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, Wb.jsx)(Ab.c, {
              text: Zb
            }), Db]
          }), (0, Wb.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, Wb.jsx)(Ab.c, {
              text: Zb
            }), Db]
          })]
        }) : null
      })
    }
    var db = hb(36145),
      rb = hb(13),
      jb = hb(1811),
      nb = hb(588),
      Db = hb(2297),
      xb = hb(3174),
      zb = hb(3183);
    var gb = hb(1027),
      ib = hb(1023),
      vb = hb(2358);

    function tb() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var Jb = hb(1366);
    const eb = (0, Bb.memo)((function() {
      const [bb, ub] = (0, Bb.useState)(0), hb = (0, Lb.f)("useFullInventory"), Ub = (0, Lb.f)("highlightedHotbarSlots"), {
        isTouchScreen: Yb,
        openInGameMenuName: Sb
      } = (0, rb.j)(["isTouchScreen", "openInGameMenuName"]), wb = null !== Sb && "inventory" !== Sb, Zb = (0, lb.i)("fullInventory") && "inventory" === Sb, pb = function() {
        const bb = (0, gb.i)(((bb, ub) => `${bb}:${(0,ib.e)(bb,ub)?"portrait":"landscape"}`)),
          [ub, hb] = (0, Bb.useState)(tb);
        return (0, Bb.useLayoutEffect)((() => {
          hb(tb())
        }), [bb]), (0, Hb.h)(vb.e, (() => {
          hb(tb())
        })), ub
      }(), Ab = Yb && !pb;
      ! function(bb, ub, hb) {
        (0, Bb.useLayoutEffect)((() => {
          const Bb = document.documentElement.classList;
          return bb && (Bb.add("TouchHotbar"), Bb.toggle("TouchHotbarKeysAbove", ub), Bb.toggle("TouchHotbarHasBag", hb)), (0, xb.m)(), ab.i.vp(zb.d), () => {
            Bb.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, xb.m)(), ab.i.vp(zb.d)
          }
        }), [bb, ub, hb])
      }(Yb, Ab, hb);
      const [Kb, Db] = (0, Gb.d)("changedHotbarUsingNumkeys", !0), Jb = (0, lb.g)("hotbar", (bb => bb.selectedSlot)), eb = null !== Jb && void 0 !== Jb ? Jb : bb, mb = (0, Ob.d)(), Ib = (0, Bb.useRef)(null), qb = (0, Hb.k)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Hb.h)("inventoryDraggedItemUpdated", (bb => {
        Ib.current = bb, mb()
      })), (0, lb.d)("hotbarScrolled", (bb => {
        null === Jb && yb(bb)
      })), (0, lb.d)("hotbarSlotRequested", (bb => {
        Eb(bb), Db(!1)
      })), (0, lb.d)("numberKeyPressed", (() => {
        Db(!1)
      })), (0, lb.d)("hotbarDropRequested", (bb => {
        const ub = jb.gameBridge.latest("hotbar").items[eb];
        if (ub) {
          var hb;
          const Bb = bb && null !== (hb = ub.amount) && void 0 !== hb ? hb : 1;
          jb.gameBridge.send("removeInventoryItem", {
            slot: eb,
            amount: Bb,
            drop: !0
          })
        }
      }));
      const Eb = bb => {
          jb.gameBridge.send("selectHotbarSlot", bb), ub(bb)
        },
        yb = bb => {
          Eb((eb + bb + nb.o) % nb.o)
        };
      let Vb, Fb = null,
        fb = null,
        kb = bb => bb => {},
        Tb = bb => ub => {
          Eb(bb)
        },
        cb = bb => bb => {},
        Qb = [];
      if (Zb) {
        var Rb;
        const bb = Ib.current;
        if (null === bb || void 0 === bb || !bb.setHovered) return (0, Wb.jsx)("div", {
          className: Xb()("HotBarContainer", {
            Touch: Yb,
            KeysAbove: Ab
          }),
          children: (0, Wb.jsx)("div", {
            className: "HotBar"
          })
        });
        Fb = bb.draggedInfo, fb = bb.specialItemInfo, kb = bb.setHovered, Tb = bb.pointerDown, cb = bb.pointerUp, Vb = bb.variation, Qb = null !== (Rb = bb.craftFlyAnims) && void 0 !== Rb ? Rb : []
      }
      return (0, Wb.jsxs)("div", {
        className: Xb()("HotBarContainer", {
          Touch: Yb,
          PopupOpen: Yb && wb,
          KeysAbove: Ab
        }),
        children: [(0, Wb.jsxs)("div", {
          className: Xb()("HotBar", {
            HoverDisabled: qb
          }),
          children: [Yb && (0, Wb.jsxs)(Wb.Fragment, {
            children: [(0, Wb.jsx)(sb, {
              useFullInventory: hb,
              inventoryOpen: Zb
            }), (0, Wb.jsx)(Nb, {
              direction: "Previous",
              onPress: () => {
                yb(-1)
              }
            })]
          }), !Yb && (0, Wb.jsxs)(Wb.Fragment, {
            children: [(0, Wb.jsx)(Mb, {}), (0, Wb.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, Wb.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((bb, ub) => (0, Wb.jsx)(ob.c, {
              idx: ub,
              draggedInfo: Fb,
              specialItemInfo: fb,
              craftFlyHoldbackInfo: (0, db.f)(Qb, ub),
              setHovered: kb(ub),
              pointerDown: Tb(ub),
              pointerUp: cb(ub),
              variation: Vb,
              isSelected: ub === eb,
              hotbarHighlighted: !0 === (null === Ub || void 0 === Ub ? void 0 : Ub.includes(ub)),
              hoverDisabled: qb,
              showNumber: Kb && !Yb
            }, ub)))
          }), Yb && (0, Wb.jsx)(Nb, {
            direction: "Next",
            onPress: () => {
              yb(1)
            }
          }), !Yb && (0, Wb.jsxs)(Wb.Fragment, {
            children: [(0, Wb.jsx)("div", {
              className: "HotBarFiller"
            }), (0, Wb.jsx)("div", {
              className: Xb()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !hb
              }),
              onPointerDown: () => {
                ab.i.vp("toggleMenu", "inventory")
              },
              children: (0, Wb.jsx)(Pb, {})
            })]
          })]
        }), (0, Wb.jsx)(Cb, {
          slotIdx: eb
        })]
      })
    }));

    function Nb(bb) {
      let {
        direction: ub,
        onPress: hb
      } = bb;
      return (0, Wb.jsx)("div", {
        className: Xb()("HotBarArrow", ub),
        ...Jb.c,
        children: (0, Wb.jsx)(Ub.b, {
          icon: "Previous" === ub ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: hb
        })
      })
    }
    const sb = (0, Bb.memo)((function(bb) {
        let {
          useFullInventory: ub,
          inventoryOpen: hb
        } = bb;
        const Ob = (0, Lb.f)("maxAuraLevel"),
          Gb = (0, Bb.useRef)(null);
        return function(bb, ub, hb) {
          (0, Bb.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", ub), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [ub]), (0, Bb.useLayoutEffect)((() => {
            const ub = bb.current.closest(".BottomMiddleElements");
            return ub.classList.toggle("TouchInventoryOpen", hb), () => {
              ub.classList.remove("TouchInventoryOpen")
            }
          }), [bb, hb])
        }(Gb, (0, Yb.c)(), hb), (0, Wb.jsxs)("div", {
          ref: Gb,
          className: Xb()("TouchInventoryKeys", {
            NoAuraBar: 0 === Ob,
            InventoryOpen: hb
          }),
          children: [(0, Wb.jsx)(Mb, {
            touchKey: !0
          }), (0, Wb.jsx)("div", {
            className: Xb()("TouchInventoryKey BagKey", {
              Hidden: !ub
            }),
            ...Jb.c,
            children: (0, Wb.jsx)(Pb, {
              touchKey: !0
            })
          })]
        })
      })),
      Mb = (0, Bb.memo)((function(bb) {
        let {
          touchKey: ub = !1
        } = bb;
        const hb = (0, Yb.c)();
        return (0, Wb.jsx)("div", {
          className: ub ? Xb()("TouchInventoryKey ShopKey", {
            Hidden: !hb
          }) : Xb()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !hb
          }),
          ...ub ? Jb.c : {},
          children: (0, Wb.jsx)(Ub.b, {
            icon: (0, Sb.cc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              hb && rb.d.set({
                openEverythingMenuName: pb.u.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function mb(bb) {
      let {
        player: ub
      } = bb;
      return ub.some((bb => null !== bb && Sb.Sc.includes(bb.name)))
    }

    function Ib(bb) {
      bb.creative || wb.j.getItem("LogInInventoryRedDotTutorialComplete") || (mb(bb) ? (ab.i.vp("RedDotOpenInventoryIcon", !0), ab.i.vp("TouchTutorialOpenInventoryIcon", !0)) : (ab.i.vp("RedDotOpenInventoryIcon", !1), ab.i.vp("TouchTutorialOpenInventoryIcon", !1)))
    }
    const Pb = (0, Bb.memo)((function(bb) {
      let {
        touchKey: ub = !1
      } = bb;
      const {
        backpackPointerRequested: hb
      } = (0, rb.j)(["backpackPointerRequested"]);
      (0, Bb.useEffect)((() => {
        Ib(jb.gameBridge.latest("inventory"))
      }), []), (0, lb.d)("inventory", Ib);
      const Ob = (0, Db.l)();
      return (0, Hb.h)("toggleMenu", (bb => {
        Ob.shown && (null !== bb && void 0 !== bb && bb.startsWith("inventory") && mb(jb.gameBridge.latest("inventory")) ? (wb.j.setItem("LogInInventoryRedDotTutorialComplete", !0), ab.i.vp("RedDotOpenInventoryIcon", !1), ab.i.vp("TouchTutorialOpenInventoryIcon", !1)) : "shop" === bb && ab.i.vp("showShopTouchTutorial", !1))
      })), ub ? (0, Wb.jsx)(Ub.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          ab.i.vp("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: hb,
        touchIconPosition: "topleft"
      }) : (0, Wb.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          ab.i.vp("toggleMenu", "inventory")
        },
        children: (0, Wb.jsx)(Ub.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: bb => {
            ab.i.vp("toggleMenu", "inventory"), bb.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: hb,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36134: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ob,
      d: () => Xb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1805),
      Lb = hb(1799),
      Yb = hb(1811),
      Sb = hb(1857),
      ab = hb(36138),
      Hb = hb(9100),
      wb = hb(1288),
      Zb = hb(1007);
    const Xb = (bb, ub, hb) => {
      let Bb = ub,
        Ob = !1;
      for (const Gb of hb)(null === Gb || void 0 === Gb ? void 0 : Gb.idx) === bb && (Ob = !0, Bb > 0 && (Bb -= Gb.amount));
      return {
        displayedAmt: Bb,
        shown: !Ob || Bb > 0
      }
    };
    const pb = bb => {
        let {
          idx: ub
        } = bb;
        return (0, wb.r)() ? null : (0, Zb.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: ub < 9 ? ub + 1 : 0
        })
      },
      ob = (0, Bb.memo)((function(bb) {
        var ub, hb, Bb;
        let {
          idx: Ob,
          setHovered: wb,
          pointerDown: ob,
          pointerUp: Ab,
          draggedInfo: lb,
          specialItemInfo: Kb,
          craftFlyHoldbackInfo: Wb,
          defaultIconB64: Cb = null,
          variation: db,
          isSelected: rb = !1,
          hotbarHighlighted: jb = !1,
          hoverDisabled: nb = !1,
          showNumber: Db = !1,
          showNewDot: xb = !1
        } = bb;
        const zb = (0, Sb.g)("inventory", (bb => Ob === ab.g ? null : (0, Hb.j)(bb, Ob)));
        let gb, ib, vb, tb;
        if (Ob === ab.g) Kb && (gb = Kb.name, vb = Kb.amount, tb = Kb.attributes);
        else if (zb) {
          var Jb;
          gb = zb.name, ib = zb.icon, vb = null !== (Jb = zb.amount) && void 0 !== Jb ? Jb : 0, tb = zb.attributes
        }
        const eb = null === (ub = tb) || void 0 === ub || null === (hb = ub.customAttributes) || void 0 === hb ? void 0 : hb.enchantmentTier,
          Nb = (0, Ub.i)(tb),
          {
            displayedAmt: sb,
            shown: Mb
          } = Xb(Ob, vb, [lb, Kb, Wb]),
          mb = gb && Mb,
          Ib = void 0 !== db && function(bb, ub) {
            const {
              enchantable: hb,
              salvageable: Bb
            } = Yb.gameBridge.latest("stationItems");
            return "Enchanting Table" === bb ? !0 === hb[ub] : "Salvaging Table" === bb && !0 === Bb[ub]
          }(db, gb);
        return (0, Zb.jsxs)("div", {
          className: Gb()("InvenItem", {
            Highlighted: mb && Ib,
            Selected: rb,
            HotbarHighlighted: jb,
            HoverDisabled: nb
          }),
          onPointerEnter: () => {
            null === wb || void 0 === wb || wb(!0)
          },
          onPointerLeave: () => {
            null === wb || void 0 === wb || wb(!1)
          },
          onPointerDown: ob,
          onPointerUp: Ab,
          "data-inven-idx": Ob,
          children: [mb && (0, Zb.jsx)(Lb.d, {
            itemName: null !== (Bb = ib) && void 0 !== Bb ? Bb : gb,
            amount: sb,
            enchantmentTier: eb,
            bar: Nb
          }), mb && xb && (0, Zb.jsx)("div", {
            className: "InvenItemNewDot"
          }), Db && (0, Zb.jsx)(pb, {
            idx: Ob
          }), Cb && !mb && (0, Zb.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Cb})`
            }
          })]
        })
      }))
  },
  9094: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(314),
      Ob = hb(9097);

    function Gb(bb, ub, hb) {
      const Gb = Object.entries(ub).sort(((bb, ub) => ub[1] - bb[1])),
        Ub = (0, Bb.wb)(bb);
      Ub.push(bb ? "\n\n" : "\n");
      for (const [Ob, Xb] of Gb) {
        var Lb, Yb, Sb;
        const bb = null !== (Lb = null === hb || void 0 === hb || null === (Yb = hb[Ob]) || void 0 === Yb ? void 0 : Yb.icon) && void 0 !== Lb ? Lb : `${Ob} Enchantment`;
        Ub.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Ub.push({
          str: `${Ob} ${null!==(Sb=(0,Bb.R)(Xb))&&void 0!==Sb?Sb:Xb}\n`
        })
      }
      Ub.push({
        str: "\n"
      });
      for (const [Bb, Xb] of Gb) {
        var ab, Hb, wb, Zb;
        const bb = null !== (ab = null === hb || void 0 === hb || null === (Hb = hb[Bb]) || void 0 === Hb ? void 0 : Hb.icon) && void 0 !== ab ? ab : `${Bb} Enchantment`,
          ub = null !== (wb = null === hb || void 0 === hb || null === (Zb = hb[Bb]) || void 0 === Zb ? void 0 : Zb.description) && void 0 !== wb ? wb : (0, Ob.l)(Bb);
        Ub.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Ub.push({
          str: ub,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Ub.push({
          str: "\n"
        })
      }
      return Ub
    }
  },
  36138: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      g: () => Ob
    });
    const Bb = -1,
      Ob = -2
  },
  9100: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb,
      g: () => lb,
      i: () => ob,
      j: () => Yb,
      k: () => Ab,
      n: () => ab,
      p: () => wb,
      q: () => pb,
      t: () => Hb
    });
    var Bb = hb(298),
      Ob = hb(588),
      Gb = hb(314),
      Ub = hb(4005),
      Lb = hb(9094);

    function Yb(bb, ub) {
      var hb;
      let {
        player: Bb,
        chestOrCreative: Ob
      } = bb;
      var Gb;
      return ub < Bb.length ? null !== (Gb = Bb[ub]) && void 0 !== Gb ? Gb : null : null !== (hb = Ob[ub - Bb.length]) && void 0 !== hb ? hb : null
    }

    function Sb(bb) {
      var ub;
      return null !== (ub = bb.amount) && void 0 !== ub ? ub : 0
    }

    function ab(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Hb(bb) {
      return !!bb.shiftKey
    }

    function wb(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const Zb = new Set,
      Xb = 50;

    function pb(bb, ub) {
      var hb;
      const Bb = null === (hb = bb[ub]) || void 0 === hb ? void 0 : hb.displayName;
      return (0, Ob.J)(Bb) ? "string" !== typeof ub ? "" : (!Zb.has(ub) && Zb.size < Xb && (Zb.add(ub), console.warn(`No item called "${ub}", so its hover shows the name as given`)), ub) : Bb
    }

    function ob(bb, ub, hb) {
      var Yb, Sb, ab, Hb, wb, Zb, Xb, ob, Ab, lb, Kb, Wb, Cb, db;
      const rb = bb.attributes,
        jb = null !== (Yb = null === (Sb = ub[bb.name]) || void 0 === Sb ? void 0 : Sb.rootName) && void 0 !== Yb ? Yb : bb.name,
        nb = null !== (ab = null !== (Hb = rb.customDisplayName) && void 0 !== Hb ? Hb : null === (wb = ub[bb.name]) || void 0 === wb ? void 0 : wb.displayName) && void 0 !== ab ? ab : pb(ub, jb);
      let Db = nb;
      const xb = null === (Zb = rb.customAttributes) || void 0 === Zb ? void 0 : Zb.enchantmentTier;
      xb && (Db = (0, Gb.wb)(nb, {
        colour: Gb.rb[xb]
      }));
      const zb = null !== (Xb = null !== (ob = null !== (Ab = function(bb, ub) {
        var hb;
        if (void 0 === bb || null !== (hb = ub.customAttributes) && void 0 !== hb && hb.author) return bb;
        const Ob = (0, Bb.nc)(bb);
        return Ob.every((bb => "string" === typeof bb)) ? bb : Ob.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(rb.customDescription, rb)) && void 0 !== Ab ? Ab : null === (lb = ub[bb.name]) || void 0 === lb ? void 0 : lb.description) && void 0 !== ob ? ob : null === (Kb = ub[jb]) || void 0 === Kb ? void 0 : Kb.description) && void 0 !== Xb ? Xb : "";
      let gb = zb;
      if (null !== (Wb = rb.customAttributes) && void 0 !== Wb && Wb.enchantments) gb = (0, Lb.d)(zb, rb.customAttributes.enchantments, rb.customAttributes.enchantmentData);
      else if (hb[jb]) gb = (0, Gb.wb)(zb), gb.push({
        str: "\n"
      }), gb.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Cb = rb.customAttributes) && void 0 !== Cb && Cb.mobSettings) {
        var ib, vb;
        const bb = rb.customAttributes.mobSettings;
        var tb, Jb;
        if (gb = [], (0, Ob.J)(rb.customAttributes.health) || (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: rb.customAttributes.health.toString()
          }), (0, Ob.J)(bb.maxHealth) || (gb.push({
            str: "/"
          }), gb.push({
            str: bb.maxHealth.toString()
          }))), !(0, Ob.J)(bb.attackDamage) && bb.attackDamage > 0 && (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: bb.attackDamage.toString()
          })), !(0, Ob.J)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Ob.J)(bb.baseRunningSpeed) || (gb.push({
            str: "\n"
          }), gb.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: " "
          }), gb.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) gb.push({
          str: "\n"
        }), gb.push({
          str: {
            translationKey: "general:has"
          }
        }), gb.push({
          str: " "
        }), gb.push({
          icon: null !== (tb = null === (Jb = bb.tameInfo) || void 0 === Jb ? void 0 : Jb.saddleItemName) && void 0 !== tb ? tb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (gb.push({
            str: "\n"
          }), gb.push({
            str: "\n"
          }), bb.petInfo && null !== (ib = bb.tameInfo) && void 0 !== ib && ib.supportsFriendship) {
          const ub = Ub.d.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of ub) gb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          gb.push({
            str: "\n"
          });
          const hb = Ub.d.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Ub.d.hungerLevelIcons[hb]) gb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          gb.push({
            str: " "
          }), gb.push({
            str: Ub.d.hungerLevelTranslations[hb],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (vb = bb.tameInfo) && void 0 !== vb && vb.supportsFriendship) {
          var eb, Nb;
          let ub = null !== (eb = bb.tameInfo.likedFoods) && void 0 !== eb ? eb : [];
          gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Superliked]
            }
          }), gb.push({
            str: " "
          }), null !== (Nb = bb.petInfo) && void 0 !== Nb && Nb.superlikedFoodKnown ? (gb.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ub = ub.filter((ub => ub !== bb.petInfo.superlikedFood))) : gb.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Liked]
            }
          }), gb.push({
            str: " "
          });
          for (const bb of ub) gb.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Neutral]
            }
          }), gb.push({
            str: " "
          });
          for (const hb of null !== (sb = bb.tameInfo.neutralFoods) && void 0 !== sb ? sb : []) {
            var sb;
            gb.push({
              icon: hb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          gb.push({
            str: "\n"
          }), gb.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Ub.d.feedTextColours[Ub.d.MobFoodType.Disliked]
            }
          }), gb.push({
            str: " "
          });
          for (const hb of null !== (Mb = bb.tameInfo.dislikedFoods) && void 0 !== Mb ? Mb : []) {
            var Mb;
            gb.push({
              icon: hb,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        gb.length > 0 ? (gb.shift(), gb.unshift(...(0, Gb.wb)(zb))) : gb = (0, Gb.wb)(zb)
      }
      return {
        name: Db,
        desc: gb,
        fontStyle: null !== (db = rb.customAttributes) && void 0 !== db && db.author ? "italic" : "normal"
      }
    }

    function Ab(bb, ub, hb, Bb) {
      const Ob = Yb(bb, hb),
        Gb = Yb(bb, Bb);
      if (!Ob) return !1;
      const Ub = ub[Ob.name].armourReduction,
        Lb = ub[Gb.name].armourReduction;
      if (Lb === Ub) {
        var Sb, ab, Hb, wb;
        const bb = null !== (Sb = null === (ab = Ob.attributes.customAttributes) || void 0 === ab ? void 0 : ab.enchantmentTier) && void 0 !== Sb ? Sb : "Tier 0",
          ub = null !== (Hb = null === (wb = Gb.attributes.customAttributes) || void 0 === wb ? void 0 : wb.enchantmentTier) && void 0 !== Hb ? Hb : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(ub.replace("Tier ", ""))
      }
      return Ub > Lb
    }

    function lb(bb) {
      let ub;
      if ("number" === typeof bb) {
        const hb = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!hb) return null;
        ub = hb.getBoundingClientRect()
      } else ub = bb.getBoundingClientRect();
      return {
        x: ub.left + ub.width / 2,
        y: ub.top + ub.height / 2
      }
    }
  },
  8978: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Zb,
      i: () => Xb,
      k: () => pb
    });
    var Bb = hb(1357),
      Ob = hb(49),
      Gb = hb(1206),
      Ub = hb(4292),
      Lb = hb(2230),
      Yb = hb(1095),
      Sb = hb(86),
      ab = hb(1857),
      Hb = hb(1242),
      wb = hb(1007);

    function Zb(bb) {
      let {
        show: ub,
        onClose: hb
      } = bb;
      const {
        requestedGameNameWithVariation: Bb,
        lobbyName: Ob,
        shownLobbyName: Gb
      } = (0, ab.i)("connectedGame"), Yb = (0, Lb.d)(Bb, Ob, !1);
      return Sb.featureFlags.canUseInviteLinks && (0, wb.jsx)(Ub.b, {
        show: ub,
        close: hb,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, wb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, wb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, wb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, wb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Yb ? (0, wb.jsx)(Hb.c, {}) : Yb, (0, wb.jsx)("br", {}), "Lobby Name: ", Gb, (0, wb.jsx)("br", {}), (0, wb.jsx)("br", {}), (0, wb.jsx)("br", {}), (0, wb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, wb.jsx)(Xb, {})]
        })
      })
    }

    function Xb() {
      var bb;
      const {
        t: ub
      } = (0, Yb.K)(), hb = null !== (bb = pb(Sb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...", [Gb, Ub] = (0, Ob.useState)(0), [Lb, ab] = (0, Ob.useReducer)((bb => bb + 1), 0);
      return (0, Ob.useEffect)((() => {
        const bb = setTimeout((() => {
          ab()
        }), 1100);
        return () => {
          clearTimeout(bb)
        }
      }), [Gb]), Sb.featureFlags.canUseInviteLinks && (0, wb.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, wb.jsx)("div", {
          className: "InviteLinkInner",
          children: hb
        }), (0, wb.jsx)(Bb.e, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(hb).catch((bb => {
              console.error("Failed to copy invite link:", bb)
            })), Ub(Date.now())
          },
          disabled: Date.now() - Gb < 1e3,
          children: Date.now() - Gb < 1e3 ? ub("general:copied") : ub("general:copy")
        })]
      })
    }

    function pb(bb) {
      const [ub, hb] = (0, Ob.useState)(null);
      return (0, Ob.useEffect)((() => {
        if (!bb) return;
        let ub = !0;
        return (0, Gb.C)().then((bb => {
          ub && hb(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          ub = !1
        }
      }), [bb]), ub
    }
  },
  36664: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => nb
    });
    var Bb = hb(49),
      Ob = hb(2288),
      Gb = hb(1789),
      Ub = hb(568),
      Lb = hb(16),
      Yb = hb(958),
      Sb = hb.n(Yb),
      ab = hb(36161),
      Hb = hb(2424),
      wb = hb(36166),
      Zb = hb(2451),
      Xb = hb(2429),
      pb = hb(3385),
      ob = hb(36169),
      Ab = hb(13),
      lb = hb(1914),
      Kb = hb(2238),
      Wb = hb(1124),
      Cb = hb(4679),
      db = hb(1857),
      rb = hb(86),
      jb = hb(1007);
    const nb = (0, Bb.memo)((function() {
      const bb = (0, Ob.f)("lobbyLeaderboardInfo"),
        ub = (0, db.i)("players"),
        hb = (0, db.i)("lobbyLeaderboardRows"),
        Lb = (0, db.i)("hiddenPlayerNames"),
        Yb = (0, Bb.useRef)(null),
        [Sb, ab] = (0, Bb.useReducer)((bb => bb + 1), 0);
      return (0, Bb.useEffect)((() => (0, lb.b)((() => {
        ab()
      }))), []), (0, jb.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, jb.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!bb) return (0, jb.jsx)(jb.Fragment, {});
            const Bb = JSON.parse(JSON.stringify(bb)),
              Ob = [...ub.ids],
              Sb = {},
              ab = {};
            for (const bb of Ob) {
              var Hb, Zb;
              Sb[bb] = null === (Hb = hb[bb]) || void 0 === Hb ? void 0 : Hb.colour;
              const ub = null === (Zb = hb[bb]) || void 0 === Zb ? void 0 : Zb.values;
              ub && (ab[bb] = {
                ...ub
              })
            }
            const Xb = Object.keys(Bb);
            Xb.sort(((bb, ub) => Bb[bb].sortPriority - Bb[ub].sortPriority)), Ob.sort(((bb, ub) => {
              if (!ab[bb] || !ab[ub]) return 0;
              for (const hb of Xb) {
                const Ob = ab[bb][hb],
                  Gb = ab[ub][hb];
                let Ub = 0;
                if ("string" == typeof Ob && "string" == typeof Gb ? Ub = Ob.localeCompare(Gb) : "number" == typeof Ob && "number" == typeof Gb ? Ub = Ob - Gb : "number" == typeof Ob && "string" == typeof Gb ? Ub = 1 : "string" == typeof Ob && "number" == typeof Gb && (Ub = -1), Ub) return Ub * ("ascending" === Bb[hb].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const bb of Ob) {
              var pb, ob, Ab;
              const {
                name: Bb,
                ranks: Ob,
                cosmetics: Gb
              } = ub.byId[bb], Lb = [], Yb = null !== (pb = null === (ob = hb[bb]) || void 0 === ob || null === (Ab = ob.tags) || void 0 === Ab ? void 0 : Ab.flatMap((bb => 0 === bb.length ? bb : [...bb, String.fromCharCode(8198)]))) && void 0 !== pb ? pb : [];
              Lb.push(...Yb), Lb.push(...(0, Wb.D)(Ob, Bb, (null === Gb || void 0 === Gb ? void 0 : Gb.nameColour) === Ub.d || null === Gb || void 0 === Gb ? void 0 : Gb.nameColour)), ab[bb] ??= {}, ab[bb].name = Lb
            }

            function db(bb, hb) {
              if (ab[bb] && void 0 !== ab[bb][hb]) {
                if ("name" === hb) {
                  const {
                    name: Bb,
                    cosmetics: Ob
                  } = ub.byId[bb];
                  return (0, jb.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Ob && (0, jb.jsx)(Kb.e, {
                      cosmetics: Ob
                    }), " ", (0, jb.jsx)(Gb.c, {
                      text: ab[bb][hb],
                      friendBadgeFor: (0, lb.c)(Bb, Lb) ? Bb : void 0
                    })]
                  })
                }
                return (0, jb.jsx)(Gb.c, {
                  text: ab[bb][hb]
                })
              }
              return ""
            }
            const rb = Object.keys(Bb).filter((bb => !0 !== Bb[bb].hidden)).map((bb => {
              var ub;
              return {
                key: bb,
                header: (0, jb.jsx)(Gb.c, {
                  text: null !== (ub = Bb[bb].displayName) && void 0 !== ub ? ub : ""
                })
              }
            }));
            return (0, jb.jsx)("div", {
              ref: Yb,
              className: "LobbyLeaderboard",
              children: (0, jb.jsx)(Cb.c, {
                columns: rb,
                rows: Ob,
                getRowKey: bb => bb,
                renderRow: bb => {
                  const hb = bb !== ub.localId;
                  return (0, jb.jsx)(Db, {
                    playerId: bb,
                    playerName: ub.byId[bb].name,
                    isOtherPlayer: hb,
                    opensProfileCard: (0, wb.f)(hb, ub.byId[bb].name, Lb),
                    lobbyLeaderboardInfo: Bb,
                    getPlayerValue: db,
                    playerColors: Sb
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Db(bb) {
      let {
        playerId: ub,
        playerName: hb,
        isOtherPlayer: Ob,
        opensProfileCard: Gb,
        lobbyLeaderboardInfo: Ub,
        getPlayerValue: Yb,
        playerColors: lb
      } = bb;
      const Kb = (0, Bb.useRef)(null);
      (0, Bb.useEffect)((() => () => {
        Hb.c.closeIfOwner(Kb)
      }), []);
      const Wb = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            Lb.i.vp("OpenReportMenu", {
              playerEId: ub,
              playerName: hb,
              XS: null,
              serverChatMsgId: null
            })
          }
        },
        Cb = () => ({
          ...(0, wb.e)(ub, hb),
          showLocation: !1,
          status: null,
          extraActions: [Wb],
          moderationActions: null === hb ? [] : (0, ob.d)(hb),
          friendRequestSource: "leaderboard"
        });
      return (0, jb.jsxs)("tr", {
        ref: Kb,
        "data-pad-focusable": Gb || void 0,
        [Hb.f]: Gb || void 0,
        onClick: Gb ? () => {
          var bb;
          Hb.c.toggle(Kb, {
            ...Cb(),
            anchor: null !== (bb = Kb.current.querySelector(".PlayerPfpAndName")) && void 0 !== bb ? bb : Kb.current
          })
        } : void 0,
        onContextMenu: Gb ? bb => {
          (0, Zb.g)(Kb, bb, Cb(), Ab.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Gb ? bb => {
          (0, Xb.b)(bb, (() => (0, wb.e)(ub, hb).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Ub).map((bb => !0 === Ub[bb].hidden ? null : (0, jb.jsxs)("td", {
          className: Sb()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Ob
          }),
          children: [(0, jb.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Yb(ub, bb)
          }), (0, jb.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: lb[ub]
            }
          })]
        }, bb))), Ob && !Gb && (0, jb.jsx)(ab.d, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Kb,
          options: [{
            icon: Wb.icon,
            text: Wb.text,
            onPointerDown: Wb.onClick
          }, ...null === hb || rb.featureFlags.useSocialFeatures ? [] : (0, pb.d)(null, hb)]
        })]
      })
    }
  },
  36169: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab
    });
    var Bb = hb(1836),
      Ob = hb(2309),
      Gb = hb(36178);
    const Ub = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function Lb(bb, ub) {
      return async () => function(bb, ub, hb) {
        return null === ub ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : ub.ok ? {
          message: {
            key: Ub[bb.type]
          },
          next: hb
        } : {
          message: {
            fromServer: ub.message
          },
          next: null
        }
      }(bb, await (0, Gb.d)(bb), ub())
    }

    function Yb(bb) {
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
        run: Lb({
          type: "ban",
          name: bb
        }, (() => function(bb) {
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
            run: Lb({
              type: "unban",
              name: bb
            }, (() => null))
          }
        }(bb)))
      }
    }

    function Sb(bb, ub) {
      if (null === bb) return [];
      const hb = [],
        Bb = function(bb, ub) {
          var hb, Bb;
          return null !== (hb = null !== (Bb = bb.here.find((bb => bb.name === ub))) && void 0 !== Bb ? Bb : bb.away.find((bb => bb.name === ub))) && void 0 !== hb ? hb : null
        }(bb, ub);
      var Gb, Ub;
      return null !== Bb && void 0 !== Bb && Bb.can.kick && hb.push((Gb = ub, Ub = Bb.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: Lb({
          type: "kick",
          name: Gb
        }, (() => Ub ? Yb(Gb) : null))
      })), null !== Bb && void 0 !== Bb && Bb.can.ban && hb.push(Yb(ub)), hb.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, Ob.h)({
            page: "players",
            focusName: ub,
            source: "profile_card"
          })
        }
      }), hb
    }

    function ab(bb) {
      var ub;
      return Sb(null !== (ub = Bb.b.get("lobbyManage")) && void 0 !== ub ? ub : null, bb)
    }
  },
  36178: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      d: () => Yb
    });
    var Bb = hb(1380),
      Ob = hb(1836),
      Gb = hb(1811);
    const Ub = 1e4;
    let Lb = 0;

    function Yb(bb) {
      const ub = ++Lb;
      return new Promise((hb => {
        const Lb = ub => {
            Yb(), clearTimeout(Sb), !1 === (null === ub || void 0 === ub ? void 0 : ub.ok) && (0, Bb.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: bb.type
            }), hb(ub)
          },
          Yb = Ob.b.subscribe("lobbyManage", (bb => {
            const hb = function(bb, ub) {
              var hb;
              return null !== (hb = null === bb || void 0 === bb ? void 0 : bb.results.find((bb => bb.requestId === ub))) && void 0 !== hb ? hb : null
            }(bb, ub);
            null !== hb && Lb(hb)
          })),
          Sb = setTimeout((() => {
            Lb(null)
          }), Ub);
        Gb.gameBridge.send("lobbyManage", {
          ...bb,
          requestId: ub
        })
      }))
    }
    const Sb = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class ab {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yb;
        this.onChange = bb, this.sendAction = ub, this.pending = new Map, this.statuses = new Map
      }
      send(bb, ub, hb) {
        var Bb;
        return this.statuses.delete(ub), this.pending.set(ub, (null !== (Bb = this.pending.get(ub)) && void 0 !== Bb ? Bb : 0) + 1), this.sendAction(bb).then((bb => {
          var Bb;
          const Ob = null !== bb && void 0 !== bb ? bb : {
              requestId: -1,
              ok: !1,
              message: Sb
            },
            Gb = (null !== (Bb = this.pending.get(ub)) && void 0 !== Bb ? Bb : 1) - 1;
          Gb > 0 ? this.pending.set(ub, Gb) : this.pending.delete(ub);
          const Ub = !Ob.ok || Ob.message.length > 0 ? Ob.message : null === hb ? null : [hb];
          return null !== Ub && this.statuses.set(ub, {
            ok: Ob.ok,
            text: Ub,
            until: Date.now() + 4e3
          }), this.onChange(), Ob
        }))
      }
      show(bb, ub) {
        this.statuses.set(bb, {
          ...ub,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(bb) {
        for (const [ub, hb] of this.statuses) hb.until <= bb && this.statuses.delete(ub)
      }
      nextDeadline() {
        let bb = null;
        for (const hb of this.statuses.values()) {
          var ub;
          bb = Math.min(null !== (ub = bb) && void 0 !== ub ? ub : 1 / 0, hb.until)
        }
        return bb
      }
      statusOf(bb, ub) {
        const hb = this.statuses.get(bb);
        return !hb || hb.until <= ub ? null : {
          ok: hb.ok,
          text: hb.text
        }
      }
      isPending(bb) {
        return this.pending.has(bb)
      }
    }
  },
  4531: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => lb,
      b: () => Ab
    });
    var Bb = hb(49),
      Ob = hb(1348),
      Gb = hb(1789),
      Ub = hb(4535),
      Lb = hb(1007);
    const Yb = (0, Bb.memo)((function(bb) {
      let {
        initialParameters: ub
      } = bb;
      const hb = (0, Bb.useRef)(null),
        Ob = (0, Bb.useRef)(null),
        Yb = (0, Bb.useRef)(0),
        Sb = (0, Bb.useRef)(null),
        ab = ub.description,
        Hb = ub.yB,
        {
          scale: wb,
          rotation: Zb
        } = null !== ub && void 0 !== ub ? ub : {},
        Xb = (0, Ub.g)();
      return (0, Bb.useEffect)((() => {
        const bb = Xb.onFrame((() => {
          const bb = Xb.getState();
          if (!bb.isActive || !hb.current || !Ob.current) return;
          const ub = bb.state;
          if (hb.current.value = ub.progress, ub.clickCount > Yb.current) {
            Yb.current = ub.clickCount;
            const bb = Ob.current;
            bb.classList.add("pulse"), Sb.current = setTimeout((() => {
              bb.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Sb.current), bb()
        }
      }), [Xb]), (0, Lb.jsx)(Lb.Fragment, {
        children: (0, Lb.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== wb && {
              "--scale": wb
            },
            ...null !== Zb && {
              "--rotation": `${Zb}deg`
            }
          },
          children: [(0, Lb.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: hb
          }), (0, Lb.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Ob,
            children: (0, Lb.jsx)(Gb.c, {
              text: [{
                icon: Hb
              }]
            })
          }), (0, Lb.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, Lb.jsx)(Gb.c, {
              text: ab
            })
          })]
        })
      })
    }));
    var Sb = hb(958),
      ab = hb.n(Sb);
    const Hb = 2 * Math.PI * 90,
      wb = (0, Bb.memo)((function(bb) {
        let {
          initialParameters: ub
        } = bb;
        const hb = (0, Bb.useRef)(null),
          Ob = (0, Bb.useRef)(null),
          Yb = (0, Bb.useRef)(null),
          Sb = ub.label,
          wb = ub.icon,
          Zb = ub.fB,
          {
            scale: Xb,
            rotation: pb,
            kB: ob
          } = null !== ub && void 0 !== ub ? ub : {},
          Ab = (0, Ub.g)();
        return (0, Bb.useEffect)((() => {
          const bb = Ab.onFrame((() => {
            var bb, ub;
            const Bb = Ab.getState();
            if (!Bb.isActive || !Ob.current) return;
            const Gb = Bb.state,
              Ub = null !== (bb = Gb.timeRemaining) && void 0 !== bb ? bb : 0,
              Lb = null !== (ub = Gb.FB) && void 0 !== ub ? ub : 1,
              Sb = Hb * (1 - Ub / Lb);
            Ob.current.style.strokeDashoffset = `${Sb}`, hb.current && (hb.current.style.opacity = Ub > 0 ? "1" : "0"), Yb.current && Zb && (Yb.current.textContent = `${(Ub/1e3).toFixed(1)}s`)
          }));
          return () => {
            bb()
          }
        }), [Ab, Zb]), (0, Lb.jsxs)("div", {
          className: "QTETimedClick",
          ref: hb,
          style: {
            ...null !== Xb && {
              "--scale": Xb
            },
            ...null !== pb && {
              "--rotation": `${pb}deg`
            }
          },
          children: [(0, Lb.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, Lb.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, Lb.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, Lb.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Hb,
                ref: Ob
              })]
            }), (0, Lb.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, Lb.jsx)(Gb.c, {
                text: [{
                  icon: wb
                }],
                className: ab()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: ob
                })
              })
            })]
          }), (0, Lb.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, Lb.jsx)(Gb.c, {
              text: Sb,
              className: "QTETimedClickLabelText"
            }), Zb && (0, Lb.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Yb
            })]
          })]
        })
      })),
      Zb = (0, Bb.memo)((function(bb) {
        let {
          initialParameters: ub
        } = bb;
        const hb = (0, Bb.useRef)(null),
          Ob = (0, Bb.useRef)(null),
          Yb = (0, Bb.useRef)(null),
          Sb = (0, Bb.useRef)(!1),
          ab = ub.description,
          Hb = null === ub || void 0 === ub ? void 0 : ub.icon,
          wb = (0, Ub.g)();
        return (0, Bb.useEffect)((() => {
          const bb = wb.onFrame((() => {
            const bb = wb.getState();
            if (!bb.isActive) return;
            const ub = bb.state;
            if (hb.current) {
              const bb = 100 * (ub.catchZonePosition - ub.cB / 2);
              hb.current.style.left = `${bb}%`, hb.current.style.width = 100 * ub.cB + "%", ub.isCatching !== Sb.current && (Sb.current = ub.isCatching, ub.isCatching ? hb.current.classList.add("catching") : hb.current.classList.remove("catching"))
            }
            Ob.current && (Ob.current.style.left = 100 * ub.moverPosition + "%"), Yb.current && (Yb.current.value = ub.progress)
          }));
          return () => {
            bb()
          }
        }), [wb]), (0, Lb.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, Lb.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, Lb.jsx)(Gb.c, {
              text: ab
            })
          }), (0, Lb.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Yb
          }), (0, Lb.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, Lb.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: hb
            }), (0, Lb.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Ob,
              children: (0, Lb.jsx)("span", {
                children: Hb && (0, Lb.jsx)(Gb.c, {
                  text: [{
                    icon: Hb,
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
    var Xb = hb(588);
    const pb = (0, Bb.memo)((function(bb) {
        let {
          initialParameters: ub
        } = bb;
        const hb = (0, Bb.useRef)(null),
          Ob = ub.label,
          Yb = ub.OO,
          {
            icon: Sb,
            scale: ab,
            rotation: Hb
          } = null !== ub && void 0 !== ub ? ub : {},
          wb = 100 * (.5 - Yb / 2),
          Zb = 100 * Yb,
          pb = (0, Ub.g)();
        return (0, Bb.useEffect)((() => {
          const bb = pb.onFrame((() => {
            const bb = pb.getState();
            if (!bb.isActive || !hb.current) return;
            const ub = bb.state;
            hb.current.style.left = 100 * ub.markerPosition + "%"
          }));
          return () => {
            bb()
          }
        }), [pb]), (0, Lb.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, Xb.J)(ab) && {
              "--scale": ab
            },
            ...!(0, Xb.J)(Hb) && {
              "--rotation": `${Hb}deg`
            }
          },
          children: [Sb && (0, Lb.jsx)(Gb.c, {
            text: [{
              icon: Sb
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, Lb.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, Lb.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${wb}%`,
                width: `${Zb}%`
              }
            }), (0, Lb.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: hb
            })]
          }), (0, Lb.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, Lb.jsx)(Gb.c, {
              text: Ob
            })
          })]
        })
      })),
      ob = (0, Bb.memo)((function(bb) {
        let {
          initialParameters: ub
        } = bb;
        const hb = (0, Bb.useRef)(null),
          [Ob, Yb] = (0, Bb.useState)((() => new Array(ub.UO).fill("pending"))),
          [Sb, ab] = (0, Bb.useState)((() => {
            const bb = ub.SO;
            return (0, Xb.J)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
          })),
          Hb = ub.label,
          {
            icon: wb
          } = ub,
          Zb = (0, Bb.useRef)(0),
          pb = (0, Bb.useRef)(0),
          ob = (0, Bb.useRef)([]),
          Ab = (0, Ub.g)();
        return (0, Bb.useEffect)((() => {
          const bb = Ab.onFrame((() => {
            const bb = Ab.getState();
            if (!bb.isActive || !hb.current) return;
            const ub = bb.state,
              Bb = 30 + 60 * ub.outerCircleProgress;
            if (hb.current.setAttribute("r", String(Bb)), !0 === ub.lastClickResult && ub.successes > Zb.current) {
              hb.current.classList.remove("QTERhythmClickOuterCircle--miss"), hb.current.classList.add("QTERhythmClickOuterCircle--hit");
              const bb = setTimeout((() => {
                var bb;
                null === (bb = hb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              ob.current.push(bb)
            } else if (!1 === ub.lastClickResult && ub.misses > pb.current) {
              hb.current.classList.remove("QTERhythmClickOuterCircle--hit"), hb.current.classList.add("QTERhythmClickOuterCircle--miss");
              const bb = setTimeout((() => {
                var bb;
                null === (bb = hb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              ob.current.push(bb)
            }
            ub.successes === Zb.current && ub.misses === pb.current || (Zb.current = ub.successes, pb.current = ub.misses, Yb((bb => {
              const hb = [...bb];
              for (let Bb = 0; Bb < ub.UO; Bb++) hb[Bb] = Bb < ub.successes ? "success" : "pending";
              return hb
            })), ab((bb => {
              if (0 === bb.length) return bb;
              const hb = [...bb];
              for (let Bb = 0; Bb < hb.length; Bb++) hb[Bb] = Bb < ub.misses ? "miss" : "pending";
              return hb
            })))
          }));
          return () => {
            bb();
            for (const bb of ob.current) clearTimeout(bb);
            ob.current = []
          }
        }), [Ab]), (0, Lb.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, Lb.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Ob.map(((bb, ub) => (0, Lb.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, ub)))
          }), (0, Lb.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, Lb.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, Lb.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, Lb.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: hb
              })]
            }), wb && (0, Lb.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, Lb.jsx)(Gb.c, {
                text: [{
                  icon: wb
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Sb.length > 0 && (0, Lb.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Sb.map(((bb, ub) => (0, Lb.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, ub)))
          }), (0, Lb.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, Lb.jsx)(Gb.c, {
              text: Hb
            })
          })]
        })
      }));

    function Ab(bb) {
      let {
        qte: ub
      } = bb;
      switch (ub.type) {
        case "progressBar":
          return (0, Lb.jsx)(Yb, {
            initialParameters: ub.parameters
          });
        case "timedClick":
          return (0, Lb.jsx)(wb, {
            initialParameters: ub.parameters
          });
        case "gravityBar":
          return (0, Lb.jsx)(Zb, {
            initialParameters: ub.parameters
          });
        case "precisionBar":
          return (0, Lb.jsx)(pb, {
            initialParameters: ub.parameters
          });
        case "rhythmClick":
          return (0, Lb.jsx)(ob, {
            initialParameters: ub.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const lb = (0, Bb.memo)((function() {
      const [bb, ub] = (0, Bb.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Ob.h)("qteStateUpdated", (bb => {
        ub(bb)
      })), bb.isActive && bb.type ? (0, Lb.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, Lb.jsx)(Ab, {
          qte: bb
        })
      }) : null
    }))
  },
  4535: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => Yb
    });
    var Bb = hb(49),
      Ob = hb(1193),
      Gb = hb(4542);
    const Ub = {
        getState: () => Gb.c.getCurrentState(),
        onFrame: Ob.p
      },
      Lb = (0, Bb.createContext)(Ub);

    function Yb() {
      return (0, Bb.useContext)(Lb)
    }
  },
  9077: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1857),
      Lb = hb(1007);

    function Yb(bb) {
      const ub = Math.floor(bb / 3600),
        hb = Math.floor(bb % 3600 / 60),
        Bb = Math.floor(bb % 60),
        Ob = `${hb.toString().padStart(2,"0")}:${Bb.toString().padStart(2,"0")}`;
      return ub > 0 ? `${ub}:${Ob}` : Ob
    }
    const Sb = (0, Bb.memo)((function(bb) {
      let {
        className: ub
      } = bb;
      const {
        recording: hb,
        seconds: Bb
      } = (0, Ub.i)("replayRecorder");
      return hb ? (0, Lb.jsxs)("div", {
        className: Gb()("RecordingIndicator", ub),
        children: [(0, Lb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Lb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Lb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Yb(Bb)
        })]
      }) : null
    }))
  },
  35975: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      e: () => wb
    });
    var Bb = hb(49),
      Ob = hb(1249),
      Gb = hb(1095),
      Ub = hb(1242),
      Lb = hb(3268),
      Yb = hb(4694),
      Sb = hb(1007);

    function ab(bb) {
      let {
        loading: ub,
        schematics: hb,
        onSchematicPicked: Bb,
        selectedSchematicIdList: Ob = [],
        disableAutoExport: Yb
      } = bb;
      const {
        t: ab
      } = (0, Gb.K)();
      return (0, Sb.jsxs)("div", {
        className: "SchematicList",
        children: [ub && (0, Sb.jsx)(Ub.c, {}), !ub && 0 === hb.length && (0, Sb.jsx)("div", {
          className: "NoSchematicsText",
          children: ab("worldBuilder:noSavedSchematic")
        }), !ub && hb.map((bb => (0, Sb.jsx)(Lb.e, {
          source: {
            type: "schematic",
            schematic: bb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Bb(bb)
          },
          isSelected: Ob.includes(bb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: bb.isAutoExported && Yb,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, bb.schematicId)))]
      })
    }

    function Hb(bb) {
      let {
        ownedSchematics: ub,
        currentWorldSchematicId: hb,
        onClose: Ob
      } = bb;
      const {
        t: Ub
      } = (0, Gb.K)(), [Lb, Hb] = (0, Bb.useState)(null);
      return (0, Sb.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === Lb && (0, Sb.jsxs)(Sb.Fragment, {
          children: [(0, Sb.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Ub("worldBuilder:schematicList")
          }), (0, Sb.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Ub("worldBuilder:clickSchematicForOptions")
          }), (0, Sb.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Sb.jsx)(ab, {
              loading: !1,
              schematics: ub,
              onSchematicPicked: bb => {
                Hb(bb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== Lb && (0, Sb.jsx)(Yb.i, {
          schematic: Lb,
          inSourceWorld: Lb.schematicId === hb,
          onSchematicUpdate: bb => {
            Hb(bb)
          },
          onClose: () => {
            Hb(null), Ob()
          }
        })]
      })
    }

    function wb(bb) {
      let {
        ownedSchematics: ub,
        currentWorldSchematicId: hb,
        onClose: Bb
      } = bb;
      Ob.NotificationProvider.showCustomPopup({
        body: bb => (0, Sb.jsx)(Hb, {
          ownedSchematics: ub,
          currentWorldSchematicId: hb,
          onClose: bb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Bb,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36579: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Cb,
      e: () => Wb
    });
    var Bb = hb(4030),
      Ob = hb(1348),
      Gb = hb(49),
      Ub = hb(6213),
      Lb = hb(4018),
      Yb = hb(1184),
      Sb = hb(1811),
      ab = hb(1789),
      Hb = hb(1357),
      wb = hb(1095),
      Zb = hb(36584),
      Xb = hb(958),
      pb = hb.n(Xb),
      ob = hb(1206),
      Ab = hb(966),
      lb = hb(1177),
      Kb = hb(1007);
    const Wb = "SleepingOverlay";

    function Cb() {
      const {
        t: bb
      } = (0, wb.K)(), [ub, hb] = (0, Gb.useState)(!1), [Xb, Cb] = (0, Gb.useState)(null), [rb, jb] = (0, Gb.useState)(1), [nb, Db] = (0, Gb.useState)(!1), [xb, zb] = (0, Gb.useState)(!1), gb = (0, Gb.useRef)(0), ib = (0, Gb.useRef)(!1), vb = (0, Gb.useRef)(!1), tb = (0, Gb.useRef)(), Jb = (0, Gb.useRef)(null);

      function eb() {
        const bb = null !== Xb && void 0 !== Xb ? Xb : "Rested Speed";
        Sb.gameBridge.send("wakeUp", xb ? bb : null), Jb.current = null, hb(!1), Cb(null), jb(1), Db(!1), zb(!1)
      }

      function Nb() {
        return !nb && (eb(), !0)
      }
      return (0, Ob.h)("PlayerPhysicsTypeUpdate", (bb => {
        bb !== Jb.current && (Jb.current = bb, bb === Ub.n.SLEEPING ? (vb.current || (gb.current = Sb.gameBridge.lookup("cameraZoom", null), vb.current = !0), ib.current = !0, Sb.gameBridge.send("setCameraZoom", 3), hb(!0), jb(function() {
          for (const bb of Sb.gameBridge.lookup("blocksStandingOn", null)) {
            if (Zb.e.leafBeds.includes(bb)) return console.log(`Found leaf bed: ${bb}`), 1;
            if (Zb.e.woolBeds.includes(bb)) return console.log(`Found woold bed: ${bb}`), 2;
            if (Zb.e.strongBeds.includes(bb)) return console.log(`Found strong bed ${bb}`), 3
          }
          return 1
        }())) : (vb.current = !1, hb(!1), Cb(null), jb(1)))
      })), (0, Gb.useEffect)((() => () => {
        (0, Yb.j)(Wb)
      }), []), (0, Gb.useEffect)((() => {
        ub ? (0, Yb.l)(Wb) : ((0, Yb.j)(Wb), ib.current && (Sb.gameBridge.send("setCameraZoom", gb.current), ib.current = !1))
      }), [ub]), (0, lb.v)("overlay", tb, Nb, ub), (0, Kb.jsx)(Bb.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: ub,
        timeout: 300,
        nodeRef: tb,
        unmountOnExit: !0,
        children: (0, Kb.jsx)("div", {
          ref: tb,
          onClick: bb => {
            Nb() && bb.stopPropagation()
          },
          children: (0, Kb.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Kb.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: Lb.h.map((ub => (0, Kb.jsxs)(db, {
                restedEffect: ub,
                KU: Xb,
                setChosenRestedEffect: Cb,
                children: [(0, Kb.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Kb.jsx)(ab.c, {
                    text: [{
                      icon: ub
                    }]
                  }), Lb.g[ub].shortName]
                }), (0, Kb.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: bb(Lb.g[ub].description, {
                    time: Lb.g[ub].effectLevelDurations[rb] / 6e4
                  })
                })]
              }, ub)))
            }), (0, Kb.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Kb.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Kb.jsxs)(Hb.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: bb => {
                  xb ? eb() : (Db(!0), (0, ob.bb)((() => {
                    Db(!1), zb(!0)
                  }), !0)), bb.stopPropagation()
                },
                loading: nb,
                children: [!xb && (0, Kb.jsxs)(Kb.Fragment, {
                  children: [(0, Kb.jsx)(Ab.e, {
                    name: "film"
                  }), " ", bb("classicGame:watchAdToGetRestedPerk")]
                }), xb && bb("classicGame:wakeUp")]
              }), (0, Kb.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Kb.jsx)("div", {
                  className: pb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === rb
                  }),
                  children: (0, Kb.jsx)(ab.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Kb.jsx)("div", {
                  className: pb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === rb
                  }),
                  children: (0, Kb.jsx)(ab.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Kb.jsx)("div", {
                  className: pb()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === rb
                  }),
                  children: (0, Kb.jsx)(ab.c, {
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
    const db = (0, Gb.memo)((function(bb) {
      let {
        children: ub,
        restedEffect: hb,
        KU: Bb,
        setChosenRestedEffect: Ob
      } = bb;
      return hb === Bb ? (0, Kb.jsx)(Hb.m, {
        onClick: bb => {
          bb.stopPropagation()
        },
        children: ub
      }) : (0, Kb.jsx)(Hb.g, {
        onClick: bb => {
          Ob(hb), bb.stopPropagation()
        },
        children: ub
      })
    }))
  },
  36166: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      f: () => Yb
    });
    var Bb = hb(568),
      Ob = hb(1811),
      Gb = hb(1544),
      Ub = hb(86),
      Lb = hb(1158);

    function Yb(bb, ub, hb) {
      return Ub.featureFlags.useSocialFeatures && bb && null === (0, Lb.d)(ub, hb)
    }

    function Sb(bb, ub) {
      var hb, Ub;
      const Lb = Gb.b.getSocialState().friends.find((bb => bb.name.toLowerCase() === ub.toLowerCase())),
        Yb = Ob.gameBridge.latest("players").byId[bb],
        Sb = void 0 !== Yb && Yb.name === ub,
        ab = Sb && null !== (hb = Yb.cosmetics) && void 0 !== hb ? hb : void 0,
        Hb = Lb && ab ? {
          ...Lb,
          cosmetics: ab
        } : Lb;
      return {
        playerSocialPreview: null !== Hb && void 0 !== Hb ? Hb : {
          isError: !1,
          name: ub,
          ranks: Sb ? [...Yb.ranks] : [],
          cosmetics: null !== ab && void 0 !== ab ? ab : {},
          nameColour: null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.nameColour) && void 0 !== Ub ? Ub : Bb.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Lb
      }
    }
  },
  9085: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(4296),
      Ob = hb(4302);

    function Gb(bb) {
      let {
        children: ub,
        showing: hb,
        globallyUniqueKey: Gb,
        alwaysMountChildren: Ub = !1,
        doGameplayStartStopOnShow: Lb = !0,
        keepsMovement: Yb = !1
      } = bb;
      return (0, Ob.c)(!0, hb, Gb, Yb), (0, Bb.c)(Lb, hb), hb || Ub ? ub : null
    }
  },
  4679: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        columns: ub,
        rows: hb,
        getRowKey: Ob,
        renderRow: Lb,
        className: Yb
      } = bb;
      return (0, Ub.jsxs)("table", {
        className: Gb()("Table", Yb),
        children: [(0, Ub.jsx)("thead", {
          children: (0, Ub.jsx)("tr", {
            children: ub.map((bb => (0, Ub.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Ub.jsx)("tbody", {
          children: hb.map((bb => (0, Ub.jsx)(Bb.Fragment, {
            children: Lb(bb)
          }, Ob(bb))))
        })]
      })
    }
  },
  36527: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => jb,
      d: () => db,
      h: () => rb,
      k: () => Xb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(65),
      Lb = hb(1264),
      Yb = hb(1357),
      Sb = hb(1260),
      ab = hb(1177),
      Hb = hb(1095),
      wb = hb(36533),
      Zb = hb(1007);

    function Xb(bb) {
      const [ub, hb] = (0, Gb.useState)((() => (0, wb.o)(bb)));
      return (0, Gb.useEffect)((() => (hb((0, wb.o)(bb)), (0, wb.G)((() => {
        hb((0, wb.o)(bb))
      })))), [bb]), ub
    }

    function pb(bb, ub) {
      "function" === typeof bb ? bb(ub) : bb && (bb.current = ub)
    }

    function ob(bb) {
      let {
        tutorial: ub,
        step: hb,
        enabled: Bb = !0
      } = bb;
      const Ob = Xb(ub);
      return Bb && Ob === hb
    }

    function Ab(bb, ub) {
      const hb = (0, wb.p)(bb),
        Bb = hb.indexOf(ub);
      return !hb.slice(Bb + 1).some((ub => (0, wb.v)(bb, ub)))
    }

    function lb(bb, ub, hb, Bb) {
      let {
        tutorial: Ob,
        step: Gb,
        waitForClick: Ub = !1,
        onPrevious: Lb
      } = bb;
      const Yb = ub && (0, wb.u)(Ob, Gb),
        Sb = ub && !Ab(Ob, Gb),
        Hb = Ub ? Bb : hb;
      let Zb = null;
      Yb ? Zb = () => {
        null === Lb || void 0 === Lb || Lb(), (0, wb.s)(Ob, Gb)
      } : Sb && (Zb = () => {
        (0, wb.k)(Ob)
      }), (0, ab.v)("popup", null !== Hb && void 0 !== Hb ? Hb : hb, Zb, ub && null !== Hb, null, Yb ? void 0 : "controller:menusSkipTutorial")
    }

    function Kb(bb) {
      let {
        tutorial: ub,
        step: hb,
        text: Bb,
        waitForClick: Ob = !1,
        onPrevious: Gb
      } = bb;
      const {
        t: Ub
      } = (0, Hb.K)(), Lb = Ab(ub, hb);
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)("div", {
          className: "TutorialStepText",
          children: Bb
        }), (0, Zb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, wb.u)(ub, hb) && (0, Zb.jsx)(Yb.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === Gb || void 0 === Gb || Gb(), (0, wb.s)(ub, hb)
            },
            children: Ub("tutorial:back")
          }), !Ob && (0, Zb.jsx)(Yb.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wb.h)(hb)
            },
            padDefaultFocus: !0,
            children: Ub(Lb ? "tutorial:done" : "tutorial:next")
          }), !Lb && (0, Zb.jsx)(Yb.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, wb.k)(ub)
            },
            children: Ub("tutorial:skip")
          })]
        })]
      })
    }
    const Wb = 6;

    function Cb(bb) {
      let {
        rect: ub,
        margin: hb
      } = bb;
      const Bb = Math.max(0, ub.top - hb),
        Ob = ub.bottom + hb,
        Gb = Math.max(0, ub.left - hb),
        Ub = ub.right + hb;
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Bb
          }
        }), (0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Ob,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Bb,
            left: 0,
            width: Gb,
            height: Ob - Bb
          }
        }), (0, Zb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Bb,
            left: Ub,
            right: 0,
            height: Ob - Bb
          }
        })]
      })
    }

    function db(bb) {
      let {
        target: ub,
        placement: hb,
        boxRef: Bb,
        className: Yb,
        spotlightMargin: ab = Wb,
        children: Hb
      } = bb;
      const {
        getArrowProps: wb,
        getTooltipProps: Xb,
        setTooltipRef: pb,
        setTriggerRef: ob
      } = (0, Lb.b)({
        placement: hb,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, ab]
      });
      (0, Gb.useLayoutEffect)((() => {
        ob(ub)
      }), [ub, ob]);
      const Ab = function(bb, ub) {
        const [hb, Bb] = (0, Gb.useState)(null);
        return (0, Gb.useEffect)((() => {
          if (!ub || !bb) return void Bb(null);
          let hb = 0,
            Ob = null;
          const Gb = () => {
            const ub = bb.getBoundingClientRect();
            Ob && ub.left === Ob.left && ub.top === Ob.top && ub.width === Ob.width && ub.height === Ob.height || (Ob = ub, Bb(ub)), hb = requestAnimationFrame(Gb)
          };
          return Gb(), () => {
            cancelAnimationFrame(hb)
          }
        }), [bb, ub]), hb
      }(ub, !0);
      (0, Gb.useEffect)((() => {
        null === ub || void 0 === ub || ub.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [ub]);
      const lb = (0, Gb.useCallback)((bb => {
        pb(bb), Bb && (Bb.current = bb)
      }), [pb, Bb]);
      return (0, Ub.createPortal)((0, Zb.jsxs)(Zb.Fragment, {
        children: [Ab && (0, Zb.jsx)(Cb, {
          rect: Ab,
          margin: ab
        }), (0, Zb.jsxs)("div", {
          ref: lb,
          ...Xb({
            className: Ob()("tooltip-container SmallTextLight TutorialStep", Yb)
          }),
          children: [Hb, (0, Zb.jsx)("div", {
            ...wb({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Sb.h)())
    }
    const rb = (0, Gb.forwardRef)((function(bb, ub) {
      let {
        placement: hb = "right",
        children: Bb,
        ...Ob
      } = bb;
      const Ub = ob(Ob),
        Lb = (0, Gb.useRef)(null),
        Yb = (0, Gb.useRef)(null);
      lb(Ob, Ub, Lb, Yb);
      const [Sb, ab] = (0, Gb.useState)(null), Hb = Bb.ref, wb = (0, Gb.useCallback)((bb => {
        Yb.current = bb, ab(bb), pb(ub, bb), pb(Hb, bb)
      }), [ub, Hb]);
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Gb.cloneElement)(Bb, {
          ref: wb
        }), Ub && (0, Zb.jsx)(db, {
          target: Sb,
          placement: hb,
          boxRef: Lb,
          children: (0, Zb.jsx)(Kb, {
            ...Ob
          })
        })]
      })
    }));

    function jb(bb) {
      const ub = ob(bb),
        hb = (0, Gb.useRef)(null);
      return lb(bb, ub, hb, null), ub ? (0, Ub.createPortal)((0, Zb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Zb.jsx)("div", {
          ref: hb,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Zb.jsx)(Kb, {
            ...bb
          })
        })
      }), (0, Sb.h)()) : null
    }
  },
  36309: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      d: () => Ub,
      g: () => Lb,
      h: () => Yb
    });
    var Bb = hb(49),
      Ob = hb(2903);
    const Gb = 8,
      Ub = "InGameHeaderContainer",
      Lb = "TopRightElements";

    function Yb(bb) {
      const [ub] = (0, Ob.e)(), [hb, Yb] = (0, Bb.useState)(!1);
      return (0, Bb.useLayoutEffect)((() => {
        if (!bb) return;
        const ub = document.querySelector(`.${Ub}`),
          hb = document.querySelector(`.${Lb}`),
          Bb = () => {
            const Bb = bb.getBoundingClientRect(),
              Ob = ub ? ub.getBoundingClientRect().right : 0,
              Ub = hb ? hb.getBoundingClientRect().left : window.innerWidth,
              Lb = Bb.left < Ob + Gb,
              Sb = Bb.right > Ub - Gb;
            Yb(Lb || Sb)
          };
        Bb();
        const Ob = new ResizeObserver(Bb);
        return Ob.observe(bb), ub && Ob.observe(ub), hb && Ob.observe(hb), () => {
          Ob.disconnect()
        }
      }), [bb, ub]), hb
    }
  },
  6300: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(29);

    function Gb(bb, ub) {
      var hb;
      const [Gb, Ub] = (0, Bb.useState)(null !== (hb = Ob.j.getItem(bb)) && void 0 !== hb ? hb : ub);
      return [Gb, ub => {
        Ob.j.setItem(bb, ub), Ub(ub)
      }]
    }
  },
  36364: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1585),
      Lb = hb(1357),
      Yb = hb(1242),
      Sb = hb(966),
      ab = hb(1007);

    function Hb(bb) {
      let {
        label: ub,
        icon: hb,
        placeholder: Ob,
        onSubmit: Hb
      } = bb;
      const wb = (0, Bb.useRef)(null),
        [Zb, Xb] = (0, Bb.useState)(""),
        [pb, ob] = (0, Bb.useState)("Enter"),
        [Ab, lb] = (0, Bb.useState)(null);
      (0, Bb.useEffect)((() => {
        if ("Success" !== pb && "Error" !== pb) return;
        const bb = setTimeout((() => {
          "Success" === pb && wb.current && (wb.current.value = "", Xb("")), ob("Enter")
        }), "Success" === pb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [pb]);
      const Kb = () => {
        const bb = Zb.trim();
        "" !== bb && "Enter" === pb && (ob("Loading"), Hb(bb).then((bb => {
          wb.current && ("error" in bb ? null === bb.error ? ob("Enter") : (lb(bb.error), ob("Error")) : ob("Success"))
        })))
      };
      return (0, ab.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: bb => {
          bb.target === wb.current && "Escape" !== bb.key && bb.stopPropagation()
        },
        children: [(0, ab.jsxs)("div", {
          className: Gb()("AddFriendBodyOverlay", `AddFriendBodyOverlay${pb}`),
          children: ["Loading" === pb && (0, ab.jsx)(Yb.c, {}), "Success" === pb && (0, ab.jsx)(Sb.e, {
            name: "check"
          }), "Error" === pb && Ab]
        }), (0, ab.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, ab.jsx)(Ub.b, {
            className: "PlayerSearchInput",
            domRef: wb,
            maxLength: 32,
            placeholderText: Ob,
            ariaLabel: Ob,
            stopPropagation: !1,
            onValueChange: bb => {
              Xb(bb)
            },
            onEnter: Kb
          }), (0, ab.jsxs)(Lb.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== pb || "" === Zb.trim(),
            onClick: Kb,
            children: [(0, ab.jsx)(Sb.e, {
              name: hb
            }), " ", ub]
          })]
        })]
      })
    }
  },
  36344: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1095),
      Lb = hb(966),
      Yb = hb(1007);
    const Sb = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      ab = ["unlisted", "public", "whitelist", "private"];

    function Hb(bb) {
      let {
        visibility: ub,
        onPick: hb
      } = bb;
      const {
        t: Ob
      } = (0, Ub.K)(), Hb = (0, Bb.useRef)([]);
      return (0, Yb.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Ob("worldSocial:whoCanJoin"),
        children: ab.map(((bb, Bb) => {
          const Ub = bb === ub;
          return (0, Yb.jsxs)("button", {
            ref: bb => {
              Hb.current[Bb] = bb
            },
            type: "button",
            className: Gb()("WorldSocialTile", {
              WorldSocialTileSelected: Ub
            }),
            "aria-pressed": Ub,
            tabIndex: Ub ? 0 : -1,
            onKeyDown: bb => {
              ((bb, ub) => {
                const hb = "ArrowRight" === bb.key || "ArrowDown" === bb.key ? 1 : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? -1 : 0;
                var Bb;
                0 !== hb && (bb.preventDefault(), null === (Bb = Hb.current[(ub + hb + ab.length) % ab.length]) || void 0 === Bb || Bb.focus())
              })(bb, Bb)
            },
            onClick: () => {
              hb(bb)
            },
            children: [(0, Yb.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Yb.jsx)(Lb.e, {
                name: Sb[bb]
              })
            }), (0, Yb.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Yb.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Ob(`worldSocial:${bb}`)
              }), (0, Yb.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Ob(`worldSocial:${bb}Description`)
              })]
            })]
          }, bb)
        }))
      })
    }
  },
  36356: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(1095),
      Ob = hb(2468),
      Gb = hb(4123),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        gH: ub,
        children: hb,
        ...Lb
      } = bb;
      const {
        t: Yb
      } = (0, Bb.K)();
      return (0, Ub.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ub.onChange(!ub.on)
        },
        children: (0, Ub.jsx)(Ob.f, {
          ...Lb,
          opensProfileCard: !1,
          children: (0, Ub.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: bb => {
              bb.stopPropagation()
            },
            children: [hb, (0, Ub.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Ub.jsx)(Gb.d, {
                checked: ub.on,
                disabled: !1,
                ariaLabel: Yb("worldSocial:letJoin", {
                  playerName: Lb.playerSocialPreview.name
                }),
                onChange: bb => {
                  ub.onChange(bb.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36342: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb
    });
    var Bb = hb(49),
      Ob = hb(1095),
      Gb = hb(1746),
      Ub = hb(86),
      Lb = hb(13),
      Yb = hb(1380),
      Sb = hb(2500),
      ab = hb(8978),
      Hb = hb(1357),
      wb = hb(966),
      Zb = hb(1007);

    function Xb(bb) {
      let {
        worldCode: ub,
        message: hb
      } = bb;
      const {
        t: Xb
      } = (0, Ob.K)(), {
        isTouchScreen: pb
      } = (0, Lb.j)(["isTouchScreen"]), ob = Ub.featureFlags.canUseInviteLinks, Ab = (0, ab.k)(ob && null === hb), [lb, Kb] = (0, Sb.h)(), Wb = (0, Bb.useRef)(null);
      if (null !== hb) return (0, Zb.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Zb.jsx)(wb.e, {
          name: "lock"
        }), (0, Zb.jsx)("span", {
          children: hb
        })]
      });
      const Cb = ob ? Ab : ub,
        db = pb && ob && (0, Sb.b)();
      return (0, Zb.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!ob && (0, Zb.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Xb("worldSocial:worldCode")
        }), (0, Zb.jsx)("input", {
          ref: Wb,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Cb && void 0 !== Cb ? Cb : "",
          "aria-label": Xb(ob ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, Zb.jsxs)(Hb.e, {
          className: "WorldSocialCopy",
          disabled: null === Cb,
          onClick: () => {
            null !== Cb && (0, Sb.f)(Cb, {
              useShareSheet: db,
              onOutcome: bb => {
                if ((0, Yb.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== bb || ob ? bb : "code"
                  }), "copied" === bb) Kb();
                else if ("failed" === bb) {
                  var ub;
                  null === (ub = Wb.current) || void 0 === ub || ub.focus(), Gb.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Zb.jsx)(wb.e, {
            name: lb ? "check" : db ? "up-from-bracket" : "copy"
          }), " ", Xb(lb ? "general:copied" : db ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36351: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Zb,
      g: () => wb,
      j: () => Hb
    });
    var Bb = hb(568),
      Ob = hb(1095),
      Gb = hb(1544),
      Ub = hb(2468),
      Lb = hb(2418),
      Yb = hb(1357),
      Sb = hb(36356),
      ab = hb(1007);

    function Hb(bb, ub) {
      var hb;
      return {
        isError: !1,
        name: bb,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ub && void 0 !== ub ? ub : {},
        nameColour: null !== (hb = null === ub || void 0 === ub ? void 0 : ub.nameColour) && void 0 !== hb ? hb : Bb.d,
        location: {
          status: "offline"
        }
      }
    }

    function wb(bb) {
      let {
        player: ub,
        isFriend: hb = !1,
        status: Bb,
        showLocation: Yb = void 0 === Bb,
        gH: Hb,
        onSendFriendRequest: wb,
        actions: Zb,
        zIndex: Xb
      } = bb;
      const {
        t: pb
      } = (0, Ob.K)();
      let ob = Bb;
      null !== Hb && void 0 !== Hb && Hb.on && (ob = (0, ab.jsxs)(ab.Fragment, {
        children: [null !== Bb && void 0 !== Bb ? Bb : (0, ab.jsx)(Lb.e, {
          socialPreview: ub
        }), (0, ab.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", pb("worldSocial:canJoin")]
        })]
      }));
      const Ab = {
        playerSocialPreview: ub,
        isFriend: hb,
        hideFriendBadge: !0,
        onFriendRemoved: hb ? bb => {
          Gb.b.removeFriendFromState(bb)
        } : void 0,
        status: ob,
        showLocation: Yb,
        onSendFriendRequest: wb,
        zIndex: Xb
      };
      return Hb ? (0, ab.jsx)(Sb.c, {
        ...Ab,
        gH: Hb,
        children: Zb
      }) : (0, ab.jsx)(Ub.f, {
        ...Ab,
        opensProfileCard: !1,
        children: Zb || void 0
      })
    }

    function Zb(bb) {
      let {
        row: ub,
        gH: hb,
        canInvite: Bb,
        invited: Gb,
        onInvite: Ub,
        zIndex: Lb
      } = bb;
      const {
        t: Sb
      } = (0, Ob.K)(), Hb = "online" === ub.place ? Yb.e : Yb.g;
      return (0, ab.jsx)(wb, {
        player: ub.friend,
        isFriend: !0,
        status: "here" === ub.place ? Sb("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        gH: hb,
        zIndex: Lb,
        actions: Bb && (0, ab.jsx)(Hb, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Gb,
          onClick: Ub,
          ariaLabel: `${Sb("worldSocial:invite")} ${ub.friend.name}`,
          children: Sb(Gb ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36329: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb,
      c: () => Ub,
      d: () => Sb
    });
    var Bb = hb(49),
      Ob = hb(4353),
      Gb = hb(1746);

    function Ub(bb) {
      const ub = {
        lobbyName: bb,
        answer: null,
        response: Ob.d.getSocialSettings(bb)
      };
      return ub.response.then((bb => {
        ub.answer = bb
      })), ub
    }
    const Lb = new Map;

    function Yb(bb) {
      Lb.set(bb.lobbyName, bb)
    }

    function Sb(bb) {
      const [ub] = (0, Bb.useState)((() => function(bb) {
        var ub;
        const hb = null !== (ub = Lb.get(bb)) && void 0 !== ub ? ub : null;
        return null !== hb && void 0 !== hb && hb.answer && "error" in hb.answer ? null : hb
      }(bb))), [hb, Ub] = (0, Bb.useState)((() => null !== ub && void 0 !== ub && ub.answer && "settings" in ub.answer ? ub.answer.settings : null)), [Yb, Sb] = (0, Bb.useState)(!0), [ab, Hb] = (0, Bb.useState)(null !== hb), wb = (0, Bb.useRef)(hb);
      wb.current = hb;
      const Zb = (0, Bb.useRef)(0),
        Xb = (0, Bb.useRef)(0),
        pb = (0, Bb.useRef)(!1),
        ob = (0, Bb.useRef)(!0),
        Ab = (0, Bb.useCallback)((async ub => {
          const hb = ++Zb.current,
            Bb = await (null !== ub && void 0 !== ub ? ub : Ob.d.getSocialSettings(bb));
          ob.current && hb === Zb.current && (Hb(!0), Sb(!1), "error" in Bb || Ub(Bb.settings))
        }), [bb]),
        lb = (0, Bb.useCallback)((() => {
          Sb(!0), Ab()
        }), [Ab]),
        Kb = (0, Bb.useCallback)((() => {
          Xb.current > 0 ? pb.current = !0 : Ab()
        }), [Ab]);
      (0, Bb.useEffect)((() => (ob.current = !0, Lb.delete(bb), Sb(!0), Ab(null === ub || void 0 === ub ? void 0 : ub.response), () => {
        ob.current = !1
      })), [Ab, bb, ub]);
      const Wb = bb => {
        Zb.current++, Sb(!1), wb.current = bb, Ub(bb)
      };
      return {
        settings: hb,
        loading: Yb,
        answered: ab,
        retry: lb,
        refresh: Kb,
        change: async function(ub, hb) {
          let {
            quiet: Bb = !1,
            onAnswer: Ub
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Lb = wb.current;
          if (null === Lb) return !1;
          Wb(hb(Lb)), Xb.current > 0 && (pb.current = !0), Xb.current++;
          const Yb = await Ob.d.setSocialSettings(bb, ub);
          Xb.current--;
          const Sb = !("error" in Yb);
          if (!ob.current) return Sb;
          if (null === Ub || void 0 === Ub || Ub(Yb), Bb);
          else if ("error" in Yb) Gb.f.showMessage({
            translationKey: Yb.error
          });
          else
            for (const bb of Yb.notFound) Gb.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: bb
              }
            });
          if (Xb.current > 0) return Sb;
          const ab = pb.current;
          return pb.current = !1, !ab && "settings" in Yb ? Wb(Yb.settings) : (ab || Wb(Lb), Ab()), Sb
        }
      }
    }
  },
  36373: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Gb
    });
    var Bb = hb(148);
    const Ob = new Map;

    function Gb(bb, ub) {
      var hb;
      const Bb = null !== (hb = Ob.get(bb)) && void 0 !== hb ? hb : new Map;
      Bb.set(ub, Date.now()), Ob.set(bb, Bb)
    }

    function Ub(bb) {
      const ub = Ob.get(bb);
      if (!ub) return [];
      const hb = Date.now();
      for (const [Ob, Gb] of ub) hb - Gb >= Bb.o && ub.delete(Ob);
      return [...ub.keys()]
    }
  },
  36338: (bb, ub, hb) => {
    function Bb(bb, ub) {
      const hb = ub.toLowerCase();
      for (const Bb of bb)
        if (Bb.toLowerCase() === hb) return !0;
      return !1
    }

    function Ob(bb, ub, hb) {
      const Ob = [],
        Gb = [],
        Ub = [];
      for (const Lb of bb) !Lb.isError && Lb.name && ("inGame" === Lb.location.status && Lb.location.inLobbyName === ub || Bb(hb, Lb.name) ? Gb.push({
        friend: Lb,
        place: "here"
      }) : "offline" === Lb.location.status ? Ub.push({
        friend: Lb,
        place: "offline"
      }) : Ob.push({
        friend: Lb,
        place: "online"
      }));
      return [...Ob, ...Gb, ...Ub]
    }

    function Gb(bb, ub, hb) {
      const Ob = [],
        Gb = bb.flatMap((bb => "here" === bb.place ? [bb.friend.name] : []));
      for (const Ub of [...Gb, ...ub]) Bb(Ob, Ub) || Bb(hb, Ub) || Ob.push(Ub);
      return Ob
    }

    function Ub(bb, ub) {
      return null === bb || void 0 === bb || !bb.canManage || Bb(bb.whitelist, ub) ? "none" : "whitelist" === bb.visibility ? "required" : "quiet"
    }

    function Lb(bb) {
      if (null === bb) return !0;
      const {
        visibility: ub
      } = bb;
      return "public" === ub || "unlisted" === ub || "whitelist" === ub && bb.canManage
    }

    function Yb(bb, ub, hb) {
      if (hb) {
        const hb = ub.filter((ub => !Bb(bb.whitelist, ub)));
        return {
          ...bb,
          whitelist: [...bb.whitelist, ...hb]
        }
      }
      return {
        ...bb,
        whitelist: bb.whitelist.filter((bb => !Bb(ub, bb)))
      }
    }

    function Sb(bb, ub) {
      const hb = [];
      for (let Bb = 0; Bb < bb.length; Bb += ub) hb.push(bb.slice(Bb, Bb + ub));
      return hb
    }
    hb.d(ub, {
      d: () => Lb,
      g: () => Gb,
      k: () => Ob,
      m: () => Bb,
      p: () => Sb,
      s: () => Ub,
      w: () => Yb
    })
  },
  36551: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(13),
      Ob = hb(1206);

    function Gb() {
      const {
        clientEscMenuOptions: bb
      } = (0, Bb.j)(["clientEscMenuOptions"]);
      return (0, Ob.z)() && bb.showChat
    }
  },
  36478: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(2560),
      Ob = hb(3463),
      Gb = hb(2712);
    const Ub = ["Unable to create vertex buffer"];
    let Lb = {};

    function Yb(bb, ub) {
      const hb = new Date;
      console.error(`${hb.getUTCHours()}:${hb.getUTCMinutes()}:${hb.getUTCSeconds()}`, bb, ub, null === ub || void 0 === ub ? void 0 : ub.stack), Ub.includes(null === ub || void 0 === ub ? void 0 : ub.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Bb.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${ub.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, Gb.logError)("warning", `${bb}\n ${ub} "\n" ${null===ub||void 0===ub?void 0:ub.stack}`);
      const Ob = bb + ub + (null === ub || void 0 === ub ? void 0 : ub.stack);
      Ob in Lb || ((0, Gb.logError)("error", `${bb}\n ${ub} "\n" ${null===ub||void 0===ub?void 0:ub.stack}`), Lb[Ob] = !0)
    }(0, Ob.onGameReset)((() => {
      Lb = {}
    }))
  },
  4611: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Jb,
      i: () => tb
    });
    var Bb = hb(4617),
      Ob = hb(298);
    const Gb = 120,
      Ub = 260,
      Lb = 1.15,
      Yb = 1.2,
      Sb = 2,
      ab = 1.08,
      Hb = .8,
      wb = .95,
      Zb = 8,
      Xb = "[\"')\\]\u300d\u300f\uff09]*",
      pb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Xb}$`),
      ob = new RegExp(`[?\uff1f]${Xb}$`),
      Ab = new RegExp(`[!\uff01]${Xb}$`),
      lb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Kb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Wb = new RegExp(`[${Kb}]`),
      Cb = new RegExp(`[${Kb}]|[^${Kb}]+`, "g"),
      db = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function rb(bb) {
      let ub = 2166136261;
      for (let hb = 0; hb < bb.length; hb++) ub ^= bb.charCodeAt(hb), ub = Math.imul(ub, 16777619);
      return (ub >>> 0) / 4294967295 * 2 - 1
    }

    function jb(bb) {
      var ub;
      if (Wb.test(bb)) return 1;
      const hb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Bb = hb.replace(/[^0-9]/g, "");
      if (Bb.length > 0 && !/\p{L}/u.test(hb)) return Math.min(Bb.length, 4);
      const Ob = null !== (ub = hb.match(db)) && void 0 !== ub ? ub : [];
      if (0 === Ob.length) {
        var Gb, Ub;
        const bb = null !== (Gb = null === (Ub = hb.match(/\p{L}/gu)) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Gb ? Gb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Zb)
      }
      const Lb = hb.replace(/[^\p{L}]/gu, ""),
        Yb = Ob.length > 1 && "e" === Ob.at(-1) && Lb.endsWith("e") && !Lb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ob.length - (Yb ? 1 : 0), Zb)
    }

    function nb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Db(bb) {
      const ub = bb.replace(/[^\p{L}]/gu, "");
      return ub.length >= 2 && ub === ub.toUpperCase() && ub !== ub.toLowerCase()
    }

    function xb(bb, ub) {
      var hb;
      const Zb = ub && (0, Bb.l)(ub),
        Xb = null !== (hb = null === Zb || void 0 === Zb ? void 0 : Zb.syllableMs) && void 0 !== hb ? hb : Bb.d,
        Kb = function(bb) {
          const ub = [];
          for (const Bb of (0, Ob.nc)(bb))
            if ("string" === typeof Bb)
              for (const bb of Bb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  ub.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!Wb.test(bb)) {
                  ub.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let Bb = !0;
                for (const Ob of null !== (hb = bb.match(Cb)) && void 0 !== hb ? hb : []) {
                  var hb;
                  const bb = ub.at(-1);
                  Bb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Wb.test(Ob) || /[\p{L}\p{N}]/u.test(Ob) ? (Bb || ub.push({
                    kind: "space",
                    text: "\u200b"
                  }), ub.push({
                    kind: "word",
                    text: Ob,
                    delayMs: 0
                  }), Bb = !1) : bb.text += Ob
                }
              } else ub.push({
                kind: "icon",
                text: Bb.icon,
                delayMs: 0
              });
          return ub
        }(bb),
        db = [];
      let xb = [];
      for (const Bb of Kb) "space" !== Bb.kind && (xb.push(Bb), pb.test(Bb.text) && (db.push(xb), xb = []));
      db.push(xb);
      const zb = [];
      let gb = 0;
      for (const Bb of db) {
        var ib, vb;
        const bb = null !== (ib = null === (vb = Bb.at(-1)) || void 0 === vb ? void 0 : vb.text) && void 0 !== ib ? ib : "",
          ub = ob.test(bb),
          hb = Ab.test(bb),
          Ob = Bb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
          Kb = Ob.findLastIndex((bb => bb > 0));
        for (const [ob, Ab] of Bb.entries()) {
          const bb = "word" === Ab.kind,
            Bb = Ob[ob];
          Ab.delayMs = gb;
          for (let Ob = 0; Zb && Ob < Bb; Ob++) {
            const {
              intonation: Gb
            } = Zb;
            let Ub = Kb > 0 ? -Gb.declineSemitones * (ob / Kb) : 0;
            Ub += rb(`${nb(Ab.text)}|${Ob}`) * Gb.variationSemitones;
            const pb = Math.min(1, Gb.variationSemitones);
            let lb = Zb.glideSemitones,
              Wb = 1;
            hb && (Ub += Gb.exclaimLiftSemitones, Wb *= Lb), ub && ob === Kb && (Ub += Gb.questionRiseSemitones * (Bb > 1 ? .5 + .5 * Ob / (Bb - 1) : 1), Ob === Bb - 1 && (lb = Math.abs(lb) + Gb.questionRiseSemitones / 2)), bb && Db(Ab.text) && (Ub += Sb * pb, Wb *= Yb), Bb > 1 && 0 === Ob && (Ub += Hb * pb, Wb *= ab), zb.push({
              atMs: gb + Ob * Xb,
              semitones: Ub,
              glideSemitones: lb,
              durationMs: Ob < Bb - 1 ? Math.min(Zb.durationMs, Xb * wb) : Zb.durationMs,
              level: Wb
            })
          }
          gb += Bb * Xb + (pb.test(Ab.text) ? Ub : lb.test(Ab.text) ? Gb : 0)
        }
      }
      return {
        pieces: Kb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: zb
      }
    }
    var zb = hb(1095),
      gb = hb(1144),
      ib = hb(1819);

    function vb(bb) {
      if ("string" === typeof bb) return bb;
      const ub = gb.h.get().getCurrentLanguageCode();
      return (0, zb.w)(ub, bb.translationKey, (0, zb.s)(bb.params, ib.d.shown))
    }

    function tb(bb) {
      const ub = void 0 === bb.voice ? null : (0, Bb.o)(bb.voice),
        hb = ub && (0, Bb.l)(ub);
      return {
        plan: xb(vb(bb.line), hb),
        synth: hb
      }
    }

    function Jb(bb) {
      const ub = [];
      let hb = [];
      for (const [Ob, Gb] of bb.entries()) {
        var Bb;
        "space" === Gb.kind && (" " !== Gb.text || "icon" !== (null === (Bb = bb[Ob + 1]) || void 0 === Bb ? void 0 : Bb.kind)) ? (hb.length > 0 && ub.push(hb), ub.push([Gb]), hb = []) : hb.push(Gb)
      }
      return hb.length > 0 && ub.push(hb), ub
    }
  },
  36300: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    const Bb = [{
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

    function Ob(bb, ub, hb) {
      const Ob = Math.abs(bb - ub),
        Gb = Date.now() - hb;
      for (const Ub of Bb)
        if (bb < Ub.maxDist) return Ob >= Ub.hardUpdateDist || Gb > Ub.timeBetweenSoftChecks && Ob >= Ub.softUpdateDist;
      return !1
    }
  },
  36606: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      f: () => Gb,
      i: () => Ob
    });
    const Bb = [.25, .5, 1, 2, 4, 8, 16];

    function Ob(bb, ub) {
      const hb = Bb;
      let Ob = hb.indexOf(bb);
      return -1 === Ob && (Ob = hb.findIndex((ub => ub >= bb)), -1 === Ob && (Ob = hb.length - 1)), "up" === ub ? hb[Math.min(Ob + 1, hb.length - 1)] : hb[Math.max(Ob - 1, 0)]
    }

    function Gb(bb) {
      return bb <= Bb[0]
    }

    function Ub(bb) {
      return bb >= Bb[Bb.length - 1]
    }
  },
  36656: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      c: () => Ob
    });
    const Bb = "data-replay-ui-active",
      Ob = [{
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
  36659: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      f: () => Hb,
      i: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(36656);

    function Ub() {
      const bb = {};
      for (const {
          group: ub
        }
        of Gb.c) bb[ub] = !0;
      return bb
    }
    let Lb = Ub();

    function Yb() {
      Ob.i.vp("replayViewer|uiVisibilityChanged")
    }

    function Sb() {
      return Lb
    }

    function ab(bb, ub) {
      Lb[bb] !== ub && (Lb = {
        ...Lb,
        [bb]: ub
      }, "nametag" === bb && Bb.d.set({
        areNametagsHidden: !ub
      }), Yb())
    }

    function Hb() {
      Lb = Ub(), Bb.d.set({
        areNametagsHidden: !1
      }), Yb()
    }
  },
  9124: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      c: () => Ob,
      g: () => ab
    });
    var Bb = hb(1463);

    function Ob(bb) {
      var ub;
      return {
        ...Ub.store,
        yaw: Ub.store.yaw + (null !== (ub = Bb.e[bb].previewYaw) && void 0 !== ub ? ub : 0)
      }
    }
    const Gb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Ub = {
        player: Gb,
        store: {
          ...Gb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Lb(bb, ub) {
      bb instanceof Promise ? bb.then(ub).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ub(bb)
    }
    class Yb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ub;
        this.view = bb, null === (ub = this.opened) || void 0 === ub || ub.show(bb)
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class Sb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Lb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ub;
        return null !== (bb = null === (ub = this.opened) || void 0 === ub ? void 0 : ub.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ub) {
        var hb;
        null === (hb = this.opened) || void 0 === hb || hb.setCosmetic(bb, ub)
      }
      playEmote(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.playEmote(bb)
      }
      setOrbit(bb) {
        var ub;
        null === (ub = this.opened) || void 0 === ub || ub.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ub;
        await this.ready, await (null === (ub = this.opened) || void 0 === ub ? void 0 : ub.untilDrawn(bb))
      }
      resize(bb, ub) {
        var hb;
        this.size = {
          width: bb,
          height: ub
        }, null === (hb = this.opened) || void 0 === hb || hb.resize(bb, ub)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const ab = new class {
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
        return new Yb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Yb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Yb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ub) {
        return new Sb(this.current().openCharacter(bb, ub))
      }
    }
  },
  9122: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb.b,
      f: () => Bb.c,
      j: () => Bb.g
    });
    var Bb = hb(9124);
    class Ob {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Gb {
      constructor() {
        this.mobScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(155)]).then((() => hb(40524))))), this.characterScene = new Ob((() => Promise.all([hb.e(70), hb.e(227), hb.e(226), hb.e(246), hb.e(95), hb.e(247), hb.e(73), hb.e(72), hb.e(244), hb.e(71), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(265), hb.e(223), hb.e(238), hb.e(249), hb.e(252), hb.e(75), hb.e(197), hb.e(217), hb.e(94), hb.e(220), hb.e(235), hb.e(114), hb.e(236), hb.e(74), hb.e(113), hb.e(154)]).then((() => hb(40617)))))
      }
      openMob(bb) {
        return this.mobScene.run((ub => ub.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ub => ub.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ub => ub.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ub) {
        return this.characterScene.run((hb => hb.openCharacterPreview(bb, ub)))
      }
    }
    Bb.g.setDefaultHost((() => new Gb))
  },
  36476: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      f: () => Gb
    });
    const Bb = new Map;

    function Ob(bb) {
      var ub;
      return null === bb ? null : null !== (ub = Bb.get(bb)) && void 0 !== ub ? ub : null
    }

    function Gb(bb, ub) {
      return Bb.set(bb, ub), () => {
        Bb.get(bb) === ub && Bb.delete(bb)
      }
    }
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  36627: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => cu,
      g: () => Tu
    });
    var Bb = hb(4013),
      Ob = hb(588),
      Gb = hb(3507),
      Ub = hb(3520),
      Lb = hb.n(Ub);
    const Yb = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Sb = "EV_boolean",
      ab = "EV_double",
      Hb = "EV_string",
      wb = "EV_doubleArr",
      Zb = "EV_armour",
      Xb = "EV_other",
      pb = "EV_cosmetics",
      ob = "OEV_boolean",
      Ab = "OEV_int",
      lb = "OEV_double",
      Kb = "OEV_string",
      Wb = "OEV_stringArr",
      Cb = "OEV_meshScaling",
      db = "IV_int",
      rb = "IV_string",
      jb = "IV_doubleArr",
      nb = "IV_double",
      Db = "HV_int",
      xb = "HV_slots",
      zb = "EnvV_string",
      gb = "EnvV_double",
      ib = "EnvV_doubleArr",
      vb = "EnvV_boolean",
      tb = {
        type: Hb,
        name: Hb,
        position: wb,
        rotation: wb,
        scale: ab,
        speed: ab,
        jumping: Sb,
        crouching: Sb,
        cameraPitch: ab,
        armSwinging: Sb,
        heldItemName: Hb,
        heldItemEnchantmentTier: Hb,
        pose: Hb,
        followingEId: Hb,
        ridingVehicleEId: Hb,
        leaderboardTop: Hb,
        meshKind: Hb,
        meshOpts: Hb,
        followingOffset: wb,
        shouldMatchFollowingEntityRotation: Sb,
        meshOffset: wb,
        baseRenderHeading: ab,
        armour: Zb,
        Qs: Xb,
        playerCustomisations: pb,
        variation: Hb,
        metaInfo: Hb,
        soundName: Hb,
        volume: ab,
        refDistance: ab,
        maxHearDist: ab,
        rate: ab,
        aiState: Hb
      },
      Jb = {
        opacity: lb,
        zIndex: Ab,
        overlayColour: Kb,
        canSee: ob,
        meshScaling: Cb,
        nameTagInfo: Kb,
        multilineTextBox: Kb,
        hasPriorityNametag: ob,
        ranks: Wb,
        nameColour: Kb,
        _isAlive: ob,
        _invisibleEffect: ob,
        _invincible: ob,
        killfeedColour: Kb,
        hideNameSeed: Ab,
        _glowingEffect: ob,
        lockHeadToBody: ob
      },
      eb = {
        itemName: rb,
        amount: db,
        position: jb,
        size: nb,
        attributes: rb
      },
      Nb = {
        skyBox: zb,
        fogColourOverride: zb,
        fogChunkDistanceOverride: gb,
        cameraTint: ib,
        fogOnSkybox: vb,
        fogBlockDistanceOverride: gb
      },
      sb = {
        type: "array",
        items: "double"
      },
      Mb = {
        type: "array",
        items: "int"
      },
      mb = {
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
      Ib = {
        type: "map",
        values: sb
      };

    function Pb(bb, ub) {
      return {
        type: "record",
        name: bb,
        fields: [{
          name: "x",
          type: ub
        }]
      }
    }
    const qb = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Pb(ob, "boolean"), Pb(Ab, "int"), Pb(lb, "double"), Pb(Kb, "string"), Pb(Wb, {
              type: "array",
              items: "string"
            }), Pb(Cb, Ib)]
          }]
        }
      },
      Eb = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Pb(Sb, "boolean"), Pb(ab, "double"), Pb(Hb, "string"), Pb(wb, sb), Pb(Zb, mb), Pb(Xb, qb), Pb(pb, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      yb = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Pb(db, "int"), Pb(rb, "string"), Pb(nb, "double"), Pb(jb, sb)]
          }]
        }
      },
      Vb = {
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
      Fb = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Pb(Db, "int"), Pb(xb, Vb)]
        }]
      },
      fb = {
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
      kb = {
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
      Tb = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Pb(zb, "string"), Pb(gb, "double"), Pb(ib, sb), Pb(vb, "boolean")]
          }]
        }
      },
      cb = [{
        name: "vJ",
        type: "record",
        fields: [{
          name: "pos",
          type: Mb
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
          type: Mb
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
      Qb = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "bh",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "Bh",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "Oh",
              type: ["null", "string", sb],
              default: null
            }, {
              name: "Gh",
              type: ["null", "double"],
              default: null
            }, {
              name: "Uh",
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
          name: "Ub",
          type: "string"
        }, {
          name: "Lb",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Yb",
          type: "double"
        }, {
          name: "Sb",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "DB",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: sb
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "fu",
          type: "string"
        }, {
          name: "Yh",
          type: ["null", "double"],
          default: null
        }, {
          name: "Sh",
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
          name: "eh",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Nh",
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
      Rb = [{
        name: "position",
        type: sb
      }, {
        name: "direction",
        type: sb
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

    function bu() {
      const bb = [{
        name: "entities",
        type: {
          type: "map",
          values: Eb
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: yb
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Rb
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
              items: Fb
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", fb],
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
              name: "fu",
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
        type: kb
      }, {
        name: "environment",
        type: Tb
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: cb
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: Qb
        }
      }), bb
    }
    const uu = {
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
                name: "gH",
                type: "int"
              }, {
                name: "position",
                type: sb
              }, {
                name: "direction",
                type: sb
              }, {
                name: "easing",
                type: sb
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
    let hu;

    function Bu(bb) {
      if (9 === bb) return hu ??= (ub = [{
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
              type: Mb
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
            fields: bu()
          }
        }
      }, uu], Lb().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: ub
      }, {
        Mw: Object.create(null)
      })), hu;
      var ub
    }
    var Ou = hb(2641);
    let Gu, Uu, Lu, Yu;
    const Su = 12;
    var au, Hu;
    const wu = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, 33554432, 2, 67108864, void 0, !1, !0, 4, null, 16, 109, 110, 111, 15, 106, 127, 128, 10, 5, 11, 9];

    function Zu(bb) {
      return typeof uh !== wu[5] && uh ? (new uh).decode(new hh(bb)) : typeof Bh !== wu[5] && Bh ? Bh.from(bb).toString("utf-8") : Uh(bb)
    }

    function Xu() {}

    function pu() {
      pu = function() {}
    }
    var ou, Au;
    pu(au = {}, Hu = ['B1"RBXAP)', "n4jM_ZaAx`qS{wFI;9d(N3S)^{00,z|I", ':/}np}ZOM.>^78z6~`KEGr1e"@)>a;GE(~$', 'cW*B`9JA(~JP1YYgb;G~"Z,7h~(%s:d"n:mEa:Nso.}z8;lg8G', 'y9JR(q<j}%=)f&q"_lJn@smm$9RW.^', "upwK;ds0e", '_lv3Bf"<#j', '<KFK/&QA^99pS^O_"oc~9B#sShWem]P1s)Y:w97gOgjoIZx./a=>', "Ax47+VpqN@zM0ZLw`{3q!&jz.2.)~:9OqF#~P{K0", "8kBnjVpe(~8{m8ImX`:w=IlsA`", ":kJ7H9D$", "OuzCR4:qL~%", "poOetXR_Cg?SY/(Rk.b~htSrKUnt0z3`", "qaX7.IZj/9I}S_$yziXM<9*S(~Xii;.rUsMOnr16H<4Ko0H#g~!>", '@>qO<XGE${vadipg$:B[XYuo2P~p2YlQErkQ<4vER`ilB{or"~f7c]G', ':/dB7"@Vr~,KPtY[o4u)a&Z$', 'd."d`IZoV]pp==)<9W]vP}pq}P9e!;/w}QKEE7!ePi', "Z~f>yS=_L>", "ng!dj(6eq]<tU=8A|s0Y[pG", 'Yod[2"E7n2Rr~161}kDvH9#0dutVn_Q`S]yOI!>z+', ']4e>q9ZqWg$)!0D"]]}:O]=7+2]eni_E.oKpWLoOl>0w_^', "DpW7$_vgg~ph<I~#>g+fq/7gt{j}@1QohluvQCoh)", 'c/&p`9x_%uV|"I>', '|yS:eV$zD>wWS];#x46V%}wOQ{bH4["gfloEr#R0', "r~.VytG", "]>PpM(lg^~N&$", "6{K~#~6e%.|.[1j", "5lcv}fnmy|,O]&co*~IQv}>er{j@]I)z]`z~`XfjU<lzx8um9u^", "H{hR!&G", "aas7ZLG", '.V8KfsEEn2:W+_S#)xlB_!Ggq|z`B/JOd]^BItENS{"/6[VI">1eW{#xe@6', "V)~RF6kq*~dsY]+mj40+n},76>CVv{e<dl8hrCp989wW$", ")[|OytWsN@8{{8?z;{:Kl_,N{;jt>{|[&~wM@s|<>M9]FjD[dlhM", "dofd!:+JWv2:.4,_N&Wn", 'Tu/wht>hV`j=%wzA=a6Kf"F@/g&p=8`#Or>wES9A[;/d$YREi$', '6{"ElVYgIjj@niC[`4OMm89jg97eOY|z.#^', "h.b~#~PAW%hQm4j", "=a.MpWOO#u|o;Zv<Rs*hn{}OQ{4z>/7r$i4:`X66~<bVf^", "qau~,31eJ.CP}0swC`>q[I/#9W$E=!lI*~eErZ>$,`.MgZ>QfG", "y9BnC_)vRU{S]82mbW47QpR_e", "sr3aI!57yWuhp/o6IlOnoT>$", "zi%~(%*s=9NDS!I1[1hM", "Z;1Mz9lmixT?O+[o[$", "P~PnET=7=>N$!&;#)4s>nfkX|`~", "kagaX_YNg~Jx|0~AX>I7gC4$", 'LRjfe}>Aa{/]c{cAyl3qO!zAd%|@R^0y<O=Cj9|<L9{7J;rQ"uGCK7n2n~_YG', "D)>w8CpeFu$):YKm;xN72@yP(~r^]&x<xxtvfrIx.<P;hn", "ix>q|fg0T@T+8;^QO{WQ1%EmEgP&Bz2`/4ZQxdYV{%J$aIb6JayO+{nge.", "w4/pjfH0e2dPh/EOroz~)YK7z;y", "=>{Ot3{N!PFX`D~Ar~lVM/.mpuX&2]wo.a2)>DaoW|3dG", "Z4~:<]H7vu)ED/z6G~|Ot7DOF`fQlw+g^{*v5a8$Q{Ojdw&g", "&^1VLXH@Ujb2z_S#f[tKxfDAe", ",F]hbIkTPPvqa@]o", "=s{f.4%0Px<t+=11kQ^+8k|jT2$Yqiaw&.#p1lRgGi)@2^q[=a4p4(^zn", "1)z)4D^A`xpR0zcr#V/:i_.0", "x[~RQ!vm*PZp~InQ=xrKNX{mv`w", "?/AEDk3!F;Zg>{)m)Pv>,8Zjbj,2znx[4l}pGY*N?<y;b6>Qryhe", "ulORo]zD39W7L8>Q06onzIXeY.m`un", "m.4>rZ@s)fKu}[>Qz~!d6T_VkhXg4&P`1y:aHC_0duY&Az7RE$", "SuJ>F&~l;*WP<0zF>gb~+h`!Pv+@5!A<Myi>", "ylMq7196Bv+0Dn]FD;;7!&QONj+}JijIDzRBASlE9u3Xrtez", '51b~4_"j"@Bv=!c=3V]BO', "{l,KCX!<L2nY3Y%rmoOMU]G", "ol2)Df~E{vEeXn", "HlVa!Pg2fjiEbid<i4gKl/`AH2pOpn", "#/Y~1%t7.>&n*z|<ql2:<97lm@LiCD9RK^gK{s`<EPl6An", ")gnO>Df6~<Ga1Y{ETRlM,9A9r{TVhYGgn*}~[p,x6{6*x]Ig>:gO[~3ADx", '9lv>QTuoYuJVa;hR#y$Ecps71jaSK!@FeO6K4rSr".;Z$=)1~4je]hoXTj6', "6~^K36M7A`gthYY<xg=>", "7ktKuYG", "xsK~;_Sr?x27kn)mBG", 'B]{O/%i<%u7d.{0mz4MB"!d7.94iIz8rgxJd(a!$', "|s_QF:8e!{SK{]=[4.S>_#9$F]z", "w~Wf3#uo:9I", 'E{th":~gT2C:J;963O;eH', "_{ROF&G", ',ukM11Pah~qSg(lg6y3EBX9O;UBDMD="LkY:PB{g].', 'Ex">s%A6.>)@C:kw}]":w9vN=*V?MZv', "m~rKF&aA_j/dt0{O/4MqNC:A?{#6Qt3`(uaMGN50", '7x^Y]"FE7jp&}&[A{;3a3TZoQ*>>DY,=_{gBSf0gY.}h"&(RaG', '@Wl+ufHv42L?4w~R!~d4u/k6y]Qwf;><ZWYaqI5E".Ee.^#z%;raS7Uj+M', "Gn)e{h;v.j", "no?O9a]O/xCvy;r`)Pkd^NEx[]Q`P;)z,kBe+rmEPP&{V:r_1~Nn.", "t.nV!qje_9Tz`{]`#y.M6C4$", 'iaI>G",V{W:X<^', '~x"7CVd7l<_X9/O_3a%p@Bh6+', "aa$E<D)sGx}&*tZOW]#:[8#mPh3^C:PEzikQAZQ<E]G)9/+1ggCRxfxgs*vo$", '"9hnt3J9D9@gP@&ItkVh_C3OZvP7EZRoNu^', '<go79Lx7<~p?J[I1WW4~nhBXDiiuS4P`.#z)}WqAr>l*6tII"~0', "fkI7slAT*xCn@jJH:G", "^~*+Gs~s<<#]_4#gpQGCR!6</>k]b]Y<<V^", "3y^O5qXj!x^ZdwcRgKMYN(p9m.(*_47#`4@hK#fe69{]m^", "y90KZ@RSh<", 's4^V2"19d%;}p:vgXQ|BMI"jh<cOf;j', "WNRcW0US", ".1eso5CS", "%:~Ys", "HN?0ocmA", '+p"8L?v4', "?by7F%c)", "mmn*Q", ",Jni5TIS", ")Q/kt9Av", "UzG6g0oe", "<m5!KYXX", "a(zQ4ZBX", "i/D=C:)X", "@:527;FX", "M=WGT", "B!#S", "Y!52NV]X", "?=@j", "+!P`,{&X", "E<}Es10D", "]#WK1PiC?`@58MP;", "B?mFQ4^e])SZj@XV", "$L>=5WBTT#o,}s;", "eO0c7a7uZl2d@;:", "`lR6O`GuE<+5!,^", "6Ub#Scr5URqw/8:", "wI^b2YeUt|MRL>*", "+~}c$4Gu.R),/;:", 'g+rt/]&@fm"b,L*t<U4Vzko5J{', "_$5FovE5esWSf>.t*+5Fi2XJF=", ",DYPHy9!X?22E];t8a`XpyBu=^", "gFFKq2[l<?1lS]t3~Wf~ryU;=^", "vFFK1d%Bk7*5~GV?n,_VWcXJ%=", ",DYPTC|1U?;yEy0}~Wb~(20Ou?", "uFD>f2oU.R+y`@0}!LE#yc6U{=", "t9bN", "ODsY[H.r", "dgU0", "F92V7(gC", ">G;+{9LX"]), pu(bh = function() {
      var bb, ub, hb, Bb = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      pu(bb = void 0, ub = []);
      try {
        pu(bb = Object, ub[wu[11]]("".__proto__.constructor.name))
      } catch (hh) {}
      bb: for (hb = wu[0]; hb < Bb[wu[4]]; hb++) try {
        var Ob;
        for (bb = Bb[hb](), Ob = wu[0]; Ob < ub[wu[4]]; Ob++)
          if (typeof bb[ub[Ob]] === wu[5]) continue bb;
        return bb
      } catch (hh) {}
      return bb || this
    }() || {}, uh = bh.TextDecoder, hh = bh.Uint8Array, Bh = bh.VZ, Oh = bh.String || String, Gh = bh.Array || Array, Uh = function() {
      var bb, ub, hb = new Gh(wu[33]);
      return pu(bb = Oh[wu[8]] || Oh.fromCharCode, ub = []),
        function(Bb) {
          var Ob, Gb, Ub, Lb;
          for (pu(Gb = void 0, Ub = Bb[wu[4]], ub[wu[4]] = wu[0]), Lb = wu[0]; Lb < Ub;) pu(Gb = Bb[Lb++], Gb <= wu[32] ? Ob = Gb : Gb <= 223 ? Ob = (31 & Gb) << wu[7] | Bb[Lb++] & wu[6] : Gb <= 239 ? Ob = (Gb & wu[30]) << wu[10] | (Bb[Lb++] & wu[6]) << wu[7] | Bb[Lb++] & wu[6] : Oh[wu[8]] ? Ob = (Gb & wu[9]) << 18 | (Bb[Lb++] & wu[6]) << wu[10] | (Bb[Lb++] & wu[6]) << wu[7] | Bb[Lb++] & wu[6] : (Ob = wu[6], Lb += wu[17]), ub[wu[11]](hb[Ob] || (hb[Ob] = bb(Ob))));
          return ub.join("")
        }
    }()), (() => {
      function bb(bb) {
        return typeof au[bb] === wu[5] ? au[bb] = function(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb;
          for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
            var Yb = 'tvSOouVn]i^a>#I:_DUZK+qd}`s&y(2%c~TR@Q"A;|h$3HM{Jb/X!1lwjW[LC=)zB,4rN5Y*k.<Em0x9PF6efpg7G8?'.indexOf(ub[Lb]);
            if (Yb !== -wu[1])
              if (Ub < wu[0]) Ub = Yb;
              else {
                pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                do {
                  pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                } while (Gb > wu[9]);
                Ub = -wu[1]
              }
          }
          return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
        }(Hu[bb]) : au[bb]
      }
      const ub = wu[26],
        hb = bb(94) + bb(95) + bb(96),
        Bb = [wu[0], wu[1], wu[19], wu[17]].map((bb => {
          (function(bb) {
            return typeof au[bb] === wu[5] ? au[bb] = function(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb;
              for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
                var Yb = 'PiAJpoq0u|_2B"$3,<=/CDx+a[&#E8ze>n)4QLws7Vm5:N{`r]!IhcdX%*TFk?^jvy;6H1US~fl9R@GKW(ZY}g.MtOb'.indexOf(ub[Lb]);
                if (Yb !== -wu[1])
                  if (Ub < wu[0]) Ub = Yb;
                  else {
                    pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                    do {
                      pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                    } while (Gb > wu[9]);
                    Ub = -wu[1]
                  }
              }
              return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
            }(Hu[bb]) : au[bb]
          })(97) in Xu && function() {
            function bb(bb) {
              return bb[wu[1]] * wu[20] + (bb[wu[0]] < wu[0] ? wu[18] | bb[wu[0]] : bb[wu[0]])
            }

            function ub(bb) {
              switch (((bb & wu[18]) !== wu[0]) * wu[1] + (bb < wu[0]) * wu[19]) {
                case wu[0]:
                  return [bb % wu[18], Math.trunc(bb / wu[20])];
                case wu[1]:
                  return [bb % wu[18] - wu[18], Math.trunc(bb / wu[20]) + wu[1]];
                case wu[19]:
                  return [((bb + wu[18]) % wu[18] + wu[18]) % wu[18], Math.round(bb / wu[20])];
                case wu[17]:
                  return [bb % wu[18], Math.trunc(bb / wu[20])]
              }
            }
            let hb = bb([wu[19], wu[24]]),
              Bb = bb([wu[1], wu[19]]),
              Ob = hb + Bb,
              Gb = Ob - Bb,
              Ub = Gb * wu[19],
              Lb = Ub / wu[19];
            pu(console.log(ub(Ob)), console.log(ub(Gb)), console.log(ub(Ub)), console.log(ub(Lb)))
          }();
          let ub = wu[0];
          for (let Bb = wu[17]; Bb >= wu[0]; Bb--) {
            function Ob(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb;
              for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
                var Yb = ':4)+[*8>{Ex.GNimW]OZ~/_b!X;}sQl=Lk@5KotFcvT3^09%I2gUy7?$VpjP&YD1dfqBnrS6<A,e|RHu#J(z`hCwM"a'.indexOf(ub[Lb]);
                if (Yb !== -wu[1])
                  if (Ub < wu[0]) Ub = Yb;
                  else {
                    pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                    do {
                      pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                    } while (Gb > wu[9]);
                    Ub = -wu[1]
                  }
              }
              return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
            }

            function Gb(bb) {
              return typeof au[bb] === wu[5] ? au[bb] = Ob(Hu[bb]) : au[bb]
            }

            function Ub() {
              var bb;
              pu(bb = function(ub, hb, Bb) {
                var Ob, Gb, Ub, Lb = {};
                if (ub[hb + Bb] !== wu[21]) return ub[hb + Bb];
                if (hb === Bb) return wu[23];
                for (Ob = wu[0]; Ob < hb.length; Ob++) Lb[hb[Ob]] === wu[21] && (Lb[hb[Ob]] = wu[0]), Lb[Bb[Ob]] === wu[21] && (Lb[Bb[Ob]] = wu[0]), pu(Lb[hb[Ob]]++, Lb[Bb[Ob]]--);
                for (Gb in Lb)
                  if (Lb[Gb] !== wu[0]) return ub[hb + Bb] = wu[22], wu[22];
                for (Ub = wu[1]; Ub < hb.length; Ub++)
                  if (bb(ub, hb.substr(wu[0], Ub), Bb.substr(wu[0], Ub)) && bb(ub, hb.substr(Ub), Bb.substr(Ub)) || bb(ub, hb.substr(wu[0], Ub), Bb.substr(Bb.length - Ub)) && bb(ub, hb.substr(Ub), Bb.substr(wu[0], Bb.length - Ub))) return ub[hb + Bb] = wu[23], wu[23];
                return ub[hb + Bb] = wu[22], wu[22]
              }, console.log((function(ub, hb) {
                return bb({}, ub, hb)
              })))
            }
            Gb(98) + "4" in Xu && Ub(), ub = ub << wu[2] | hb[Gb(99) + Gb(100)](bb * wu[24] + Bb)
          }
          return ub >>> wu[0]
        })),
        Ob = (ub, hb) => (bb(101), ub << hb | ub >>> 32 - hb),
        Gb = (ub, hb, Bb, Gb, Ub) => {
          bb(102) in Xu && function() {
            function bb(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb = 'AXefpF+B:mtQV/Gx>~oE3}LM1dcCkHlg!=9S)r,z_wb^Pj<8I6|hTDNK@a7qny".J[R5%]Y0&sOZ;{2#iU4$(v*W`u?';
              for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
                var Sb = Yb.indexOf(ub[Lb]);
                if (Sb !== -wu[1])
                  if (Ub < wu[0]) Ub = Sb;
                  else {
                    pu(Ub += Sb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                    do {
                      pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                    } while (Gb > wu[9]);
                    Ub = -wu[1]
                  }
              }
              return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
            }

            function ub(ub) {
              return typeof au[ub] === wu[5] ? au[ub] = bb(Hu[ub]) : au[ub]
            }
            const hb = require("path"),
              {
                version: Bb
              } = require("../../package"),
              {
                version: Ob
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: Gb
              } = require("@redacted/components/package"),
              {
                sdkVersion: Ub
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), hb.resolve(__dirname, ub(103) + ub(104) + "js")
          }(), pu(ub[hb] += ub[Bb], ub[Ub] = Ob(ub[Ub] ^ ub[hb], wu[26]), ub[Gb] += ub[Ub], ub[Bb] = Ob(ub[Bb] ^ ub[Gb], wu[10]), ub[hb] += ub[Bb], ub[Ub] = Ob(ub[Ub] ^ ub[hb], wu[2]), ub[Gb] += ub[Ub], ub[Bb] = Ob(ub[Bb] ^ ub[Gb], wu[9]))
        };
      Yu = (bb, hb, Ob, Ub) => {
        function Lb(bb) {
          return typeof au[bb] === wu[5] ? au[bb] = function(bb) {
            var ub, hb, Bb, Ob, Gb, Ub, Lb;
            for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
              var Yb = '*DXtjpENGySa(_i!>zY[P#F+u$&fCTB}24^%g@]vLcnoI9)kA<8QMe=;lx1H/wR|sr?5Uh3:"0V67`,md{qWKZ~JbO.'.indexOf(ub[Lb]);
              if (Yb !== -wu[1])
                if (Ub < wu[0]) Ub = Yb;
                else {
                  pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                  do {
                    pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                  } while (Gb > wu[9]);
                  Ub = -wu[1]
                }
            }
            return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
          }(Hu[bb]) : au[bb]
        }
        Lb(105) in Xu && function() {
          var bb = function(bb) {
            var ub, hb, Bb, Ob, Gb, Ub, Lb = wu[0];
            for (pu(ub = {}, hb = wu[0], Bb = wu[0], Ob = wu[0], Gb = bb.length), Ub = wu[0]; Ub < Gb; Ub++) {
              var Yb;
              for (pu(ub = {}, hb = wu[0], Bb = wu[1]), Yb = Ub + wu[1]; Yb < Gb; Yb++) bb[Ub].x !== bb[Yb].x || bb[Ub].y !== bb[Yb].y ? (ub[Ob = bb[Ub].y === bb[Yb].y ? Number.MAX_SAFE_INTEGER : (bb[Ub].x - bb[Yb].x) / (bb[Ub].y - bb[Yb].y)] || (ub[Ob] = wu[0]), pu(ub[Ob]++, hb = Math.max(hb, ub[Ob]))) : Bb++;
              pu(hb += Bb, Lb = Math.max(Lb, hb))
            }
            return Lb
          };
          console.log(bb)
        }();
        const Yb = new DataView(hb[Lb(wu[31])], hb[Lb(107) + Lb(108)], Su),
          Sb = new Uint32Array(ub);
        pu(Sb[Lb(wu[27])](Bb), Sb[Lb(wu[27])](bb, wu[24]), Sb[wu[15]] = Yb[Lb(wu[28]) + Lb(wu[29])](wu[0], wu[23]), Sb[wu[16]] = Yb[Lb(wu[28]) + Lb(wu[29])](wu[24], wu[23]), Sb[wu[30]] = Yb[Lb(wu[28]) + Lb(wu[29])](wu[2], wu[23]));
        const ab = new Uint32Array(ub),
          Hb = new Uint8Array(ab[Lb(wu[31])]);
        for (let wb = wu[0], Zb = Ob; wb < Ub[Lb(112)]; wb += ub * wu[24], Zb++) {
          function Xb(bb) {
            var ub, hb, Bb, Ob, Gb, Ub, Lb;
            for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
              var Yb = '5DCoz@4Sh0NTR"+9x_Z!2brF`ygK}^tQkHfBe%~w]13POJvd>nl6<|)*Wu8E&A:jUq,[?;{mGc#/MV7=$(Lp.IiYXsa'.indexOf(ub[Lb]);
              if (Yb !== -wu[1])
                if (Ub < wu[0]) Ub = Yb;
                else {
                  pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                  do {
                    pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                  } while (Gb > wu[9]);
                  Ub = -wu[1]
                }
            }
            return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
          }

          function pb(bb) {
            return typeof au[bb] === wu[5] ? au[bb] = Xb(Hu[bb]) : au[bb]
          }

          function ob() {
            var bb, ub, hb;

            function Bb(bb) {
              return typeof au[bb] === wu[5] ? au[bb] = function(bb) {
                var ub, hb, Bb, Ob, Gb, Ub, Lb;
                for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
                  var Yb = '%9@~8:$^#=._*;}+{?3!z|`UuDVK2gTctvJeiL&hkNA40/B1FbZ5R6)<IwGmMs7lYd"rCy,H>EOPXaxp]oWjS[Qn(fq'.indexOf(ub[Lb]);
                  if (Yb !== -wu[1])
                    if (Ub < wu[0]) Ub = Yb;
                    else {
                      pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                      do {
                        pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                      } while (Gb > wu[9]);
                      Ub = -wu[1]
                    }
                }
                return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
              }(Hu[bb]) : au[bb]
            }
            pu(bb = Bb(114) + Bb(115) + Bb(116), ub = Bb(117) + Bb(118) + Bb(119) + Bb(120) + Bb(121) + "?", hb = Bb(122) + Bb(123) + Bb(124) + Bb(125) + Bb(126) + Bb(wu[32]) + Bb(wu[33]) + ")", bb.match(ub + hb))
          }
          Lb(113) in Xu && ob(), pu(Sb[wu[10]] = Zb, ab[pb(129)](Sb));
          for (let lb = wu[0]; lb < wu[34]; lb++) pu(Gb(ab, wu[0], wu[24], wu[2], wu[10]), Gb(ab, wu[1], wu[35], wu[37], wu[15]), Gb(ab, wu[19], wu[7], wu[34], wu[16]), Gb(ab, wu[17], wu[9], wu[36], wu[30]), Gb(ab, wu[0], wu[35], wu[34], wu[30]), Gb(ab, wu[1], wu[7], wu[36], wu[10]), Gb(ab, wu[19], wu[9], wu[2], wu[15]), Gb(ab, wu[17], wu[24], wu[37], wu[16]));
          for (let Kb = wu[0]; Kb < ub; Kb++) {
            function Wb(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb;
              for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
                var Yb = '/IrsUPnp0V#?S)m|zjh@!_^gKeLBGYk;*Nd[A{o`=W.,X+Q4f&yM>~Tlt}cF82x3]b:$Zw9v7HuE6%(1qC<ia"ODJ5R'.indexOf(ub[Lb]);
                if (Yb !== -wu[1])
                  if (Ub < wu[0]) Ub = Yb;
                  else {
                    pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                    do {
                      pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                    } while (Gb > wu[9]);
                    Ub = -wu[1]
                  }
              }
              return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
            }

            function Cb(bb) {
              return typeof au[bb] === wu[5] ? au[bb] = Wb(Hu[bb]) : au[bb]
            }
            Cb(130), ab[Kb] += Sb[Kb]
          }
          const Ab = Math[pb(131)](ub * wu[24], Ub[pb(132)] - wb);
          for (let db = wu[0]; db < Ab; db++) {
            function rb(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb;
              for (pu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = wu[0], Gb = wu[0], Ub = -wu[1]), Lb = wu[0]; Lb < hb; Lb++) {
                var Yb = 'eTXjZgposJHDAWFrIqYKkEztul>(L65?^!n0SBC{;3hQ*2Gv[w@7d%1&xmMPN$VO,|U<bfR4a+i~`]"=:y98)_/#.c}'.indexOf(ub[Lb]);
                if (Yb !== -wu[1])
                  if (Ub < wu[0]) Ub = Yb;
                  else {
                    pu(Ub += Yb * wu[12], Ob |= Ub << Gb, Gb += (Ub & wu[13]) > wu[14] ? wu[15] : wu[16]);
                    do {
                      pu(Bb.push(Ob & wu[3]), Ob >>= wu[2], Gb -= wu[2])
                    } while (Gb > wu[9]);
                    Ub = -wu[1]
                  }
              }
              return Ub > -wu[1] && Bb.push((Ob | Ub << Gb) & wu[3]), Zu(Bb)
            }

            function jb(bb) {
              return typeof au[bb] === wu[5] ? au[bb] = rb(Hu[bb]) : au[bb]
            }

            function nb() {
              var bb;
              pu(bb = function(ub, hb, Bb, Ob, Gb, Ub) {
                var Lb, Yb = wu[25];
                if (!(Ub < wu[0])) {
                  if (Ub === wu[0]) return ub.push(hb);
                  for (Lb = Bb; Lb < Ob && !(Gb[Lb] > Ub); Lb++) Lb > Bb && Gb[Lb] === Gb[Lb - wu[1]] || pu(Yb = Array.from(hb), Yb.push(Gb[Lb]), bb(ub, Yb, Lb + wu[1], Ob, Gb, Ub - Gb[Lb]))
                }
              }, console.log((function(ub, hb) {
                var Bb, Ob = [];
                return pu(Bb = ub.length, ub.sort(((bb, ub) => bb - ub)), bb(Ob, [], wu[0], Bb, ub, hb)), Ob
              })))
            }
            jb(133) in Xu && nb(), Ub[wb + db] ^= Hb[db]
          }
        }
      }
    })();
    const lu = [88, 0, 1, 8, 219, 136, 52, 7, "e", 6, 25, 255, "length", 14, 122, 3, 16, "undefined", void 0, "c", 2, "d", 31, "a", 63, "fromCodePoint", 12, "push", "b", 107, 89, 9, "g", 91, "f", 8191, 13, 64, !1, 110, 5, 4, 27, 40, !0, 162, 62, 205, 80, 39, 238, 202, 191, 66, "i", 236, 121, "h", 166, 201, 43, 203, 127, 128, 214, 54, 57, 149, 140, 30, 169, 256, 65537, 100, 146, 178, 108, 61, 246, 134];

    function Ku(...bb) {
      return bb[lu[12]] = lu[2], typeof uh !== lu[17] && uh ? (new uh).decode(new hh(bb[lu[1]])) : typeof Bh !== lu[17] && Bh ? Bh.from(bb[lu[1]]).toString("utf-8") : Uh(bb[lu[1]])
    }

    function Wu() {}

    function Cu() {
      Cu = function() {}
    }
    Cu(ou = {}, Au = ["Lk+hB*ZPBm%L]UwcYS:~>~x!6`B`UAWv|Hsov!zTikOLFU", "P@^N_+0s^2B(`=)F", "*3@<dBp(|3<oUf~*iOw~Weyi;XVUkps*eV(d", '#kG3k&GL78OA{zFoHOa|[aVg@P+~ip9i,LC~O_ye]BxD^eUL#"AE', 'Z4t14/`uUC@8}U2<"#I(S7h!JIg.MpH', "U3cE[^Q$OXTB=pUjguXx!+Z;LXsw1oW", 'rO0Sk&aC.8`z9Muvzm^V>zv(wI{O.]1*{};|s$"eGHIu5$y@UWZ', "93WJB&RZ", "=Ucx!.$PRW)OM?@RN`@3fuGLok0L]!{VvO`gR", "E6w4c!}R62l", 'IOH7",*EKP{49S|ot@:dETjlb3$xpI;JLhyJ]u{y:}31?$Uc3]r4+,n', "zwhE</LEdsKw`Y%c=DNdb8KPGR7S]I9;JG", "IB>1<.mT|OrxG", "6k$J>}+wG3ssuo$vy|zKyy+z>b4mB8Y", "cj*Hfuw$f2fmNIlQu;l4m*TQ+O415$i*uH{K", "_OtVEe^652B(=NRVw|<SzxmW>qxDHpf@aKf4XfLEBm!b~NpReDJNNw<Z", "DcX~svGe8k!eEvW", 's@"(rv%iJB=B(Iqo.s"S/m22kH.}xA!*', "nRyfcD}6aHBSJvkQowuMCm65<`82LN*RDcAx2*xY1}Zci]Kv:muh2wu6sI", '~8Lp2P3TDs}D;9KQ@U`|dTDY6bO1M=J"T;pSZTm6`WrcG', 'JU(#zm;RG3Sst.ecDU"S2P|Cc5:`vc*J+kb(G_vz9q', 'rjs^ilM2dm)4>Ns9b96E~,JCuCI7EUfo`c"(u6n', "G`]SE&w<`Cp~b=>*XG", "[8T(|}qgoqn<t=*c[wc#vu662R4e{N^C^cQ<&>Vz9mWx9c(o#}Whn*~G", "I|@<5$((Wm$db]3wvui3TOw(zIkb+eolSwV#R,De!I_Ez!m<BknaW", "b@TJF/;Q`Ba1Q,tiAJex/#il(OtU{z)F4hf4gTKR4I@lSNd**/JSmB(R;s(", 'Q/3H;zR(WkW"#e[F:mx1x2p<.8u~$N."hjmVIvwZ1rr|kNIXrcL7U]@W8r$', 'd"mJG&sYaWRKBo:*"/2HCvx7$3>m`YVlkumS|Sn', "pkb1/w+QfHF&fv<$!wNfp$?@M3ox:/,olBX~GB;WYby_1,KR", "%uAJApPZ42(RCZ#L1>2KK_?wdmoU(UF9gOU", "*hQ3%plh}X@1RMKCg#01Q(zKfBD~0qV;?D|~01#WCB*lfL~*v3;7l8zP1g*", "[_~#Mw0s[X9U),#v=]b1c@tP4b1}{zwc23X#JD/O,B2`4/Xw", "P3i<&eI_RH[M6.&oJI61C^#<2WS16AU<pmR4C", 'x3}H+1JhWm+Az8jCA"PgTeshDX5rIq$s=L;|zOFgJ`scPY}iIHf|R$&iJW', 'n61M[v`P~86m?/"lu>AVm#oi?5I7o8NQ!mP_cy[mhb56xqe<O/.xO|mP]`>en', "7up3>lp(TC=_V/_VRHp3F#9<EdDhrvZQp|u/z=l7;XSq!P9$TK1#o", "Amz|*l|lIIPNFIZJ", "7rTE{Dq6J2sYvL5;mHH7X(UC&_Y.~Nl<", '^cBhM_k"s3@l8q$JFK^J:us_!IU^}pV$+]31LDV5F`D%I/W', "+c8__ctQUCpLPSmhqSuM}PeY2WrK,ZNv<j2D!PQ(?O@8;YoVMSTH", "MBNfKebYUWK39c7L&n", "$czKg=YENO`be]cQD;V~e=yhU3Qo8vm$4Ihx`=MC+2n+|q1C", "=J{|xwX(b5mAuU", "aK<xWf6W#skzf+zw4h7hFvpQ(3c]=$FXEG", "IjmJNm)u!IDgY]W9@3[_7ejYCOQ|lZ=w4#L7Y]:W6rh]_FX@JWcE", "E3I3np9$%C*1&!r*@9;o36Z5?5=BG", "Gllh{^vWWk/A_.H", "uD*V86Y!U5Oq.NAc`3pKKByEpkKF6Ym<lBXd", 'AX0V&>8";X6S`cw</X*S{>{h]`7h:,`cpsnHY', "Nh{3._yh=HK._]AQ%>0N", "kuc#`w$Z", '$"vE~,bE]W5}c]gCHWN#4@%|F`cx),lc=n', "?AlhNT&hv5y=yQb@2]G^]2rChqrdNUD*B@61Q1{i,B+rSN", "c36x>+_!}Ph((UAJ!mb#GB2Yik[=!q`Rf9w7y(ohG27%YF[;KBU", '8k$dFxTQ&BGYW8{Fb4)3J!@W62!ehSnjK"_#R', 'N3zSKxL=Kd~zZ9j9;#H<p1(<B8[5$/$Q:k"Nlz3Z18fr/qAR%|Z', 'Pk`_[>9Q8r[G$!{l"G', "P/@ocDARQsTfXU", "r2N~%pmQZ28(:Ums", "S|{gu]>Y~r", "Z3NJWT@$;kc(H$pR{mP~ll?(.}?2n*zw89L3L@aheCopyQ3@f]eE", "9Ivx?ehEjq^=7qDvXG", '|W$#U#jYE5npb.%se"8g4l|lQk6Dme[F*3BE@!>CQY2SFo@C=cmE', 'GSopex^PzIvEJqZ"3>>dw(n', ',>KH?,lY@s22>Nso%"{KaSN<mr?Bu8[;', "5D(dB67h~rnp2P]@4B;~~$A<e3z2(,!o!k@HA&XQbY(", "Qk>E`6B<.8PAacY", "P/,_H=rC4Rn^,A#v{}apN&w<)Ybpn", "|kB_Ew%losn^_]TiY/ux*u!Y6rf", "o/cVjlzW7r)$;.&*!3*1s$R$aB|", ".uFH5BB<68uLvY:C^8l#:.0lnBa", "vXM#M#%|vPa", "P8?JZ=1(!R/Db=0h{*B#X,w(WqEk[e2<$c2S1,<ZoXc17ogRr/n7_}n", ")r}H8wV<)Yp4[=MJXIg^cSn", "FRT1,/,YwIEUJZI", 'c3"<##5<aW2A~eF*HW3(F#$$$OlpmS5Q)8Fo0a%YROCe@p(VVX,M*SELdq', "0kLocl2hN5pz`AKcTn", '!cP4vy56<`ALPS|oGBl4ilK$~r22Q!g9WSo4We"EMCO', "E/O3n]ClFWapN$DCt3Yxi!CGwI", 'HWw4!7ki35w]V,n"3K^V&,/YaOSzB],w8mcx</#T9q`2tMI', '`mAN"yiG]OEXY]0ivm^1X', "ZbFKq]UC`BpGMpMLURN#>2d<N", 'm]Fo|2|G18"1,![;1s:d_2&hu5~gNIGQG`*Ho^)#>r/LR.AL', "pK:h?8eG", 'emb(jlUY1}X&(Nz*96/1Tv~E,BRp9=Xw0]k3Vy"_B8E!G', "6HIaU6^RFBv", "vUs|m~iOfHt1Q8ZsGbnHFOHi5B9Q;LUcmc/D[^IE}kF&^LhhOHAE", "9BW#i}Si`CEK48Q;3@jpnBse$35D+Zr", "x>d4:|/Y(3TB[Sbl3U8~<^$$52q&=SH", "88w7Q^166_6b(Ujv?DL|bOW61kB", '~>4ogm2|DPplVU0wFOC4]+c!3C%bIvJ<L".d"/2ikO_EnI19eK3x[Oy"SW:', "wu*HKp,GfHsuW/URNR?MB|6@Dqj]0qiJZW^1EmH7{s>dBUuLWc/He#n", '@h|~mPaiPk"o/Pq@1u7hRm&&FRXp+AV$LBbJ|+n;lCYXQ/ZQN`Q<czPZ', '=kN~"^+wt53D&!Jc&Ld4bOnQ2}g3mSAQAKH3c![@DXc', "z|AJ]P#KcC2(?!z90k`gs", '^ue(2#/GROE"=pn"8]Gpqvxy8r(}6YZRLuU', "m8(#|c#6Y8WplUH", "{k<NO*1Krs", "[8G4>|E_GBp}~Q1vL4U", 'VctNre1Rgd(R79Fw:/!V}AdgKxY"yBkcW2tN,aLe+3&$G]q', "Qj=3C=%i1m(Qlq=o@OvN", "BqR|t(AW22[MdM6CsBZ", "s2#M3*eG", "{a0<coM[a3bf&BLLnJju00(:MD!2x=V", "^U@eO5B}}WQ", "$_A1gGC!", "gflC%CRO", "z#OCYH+O", "W/bOUbbJ", "]~di4CfBB", "N.AgDh+@S", "MHXn`dEBS", "2ZDn$hX9S", "xNh!b&V(J", ":~,#=vF+Un5", "L~fz?j3EH+2", "wA1.y3nNXsp", "F+BphNeJH+K", '#"#M^MH_Ls8', "GAc#I3;_(+Y", "s<xU//w%#n#", "unQ+]O[G", "`mq.}i9<", "G&Af}>C<", 'T"?pm:sG', "[mu).E=<", "5B,p,$&X", "@?8t^6HS", "!u2G2+>S", "|A*&YqFm", "fG7100Jk/oR", "!}zpW$}`", "7U{ExsYy", "jDrF6eNy", "8VXM9ewy", "qDC)", "DDAn!e^y", "eJZKf", "{DiqLKA", "{DYW~?_y", "TDL)", "BIvQ~C]A", '?Srd!v"E', "dbh{Q6>E", "wl6RC@)=", "Q@;/}UbZHxfWEPCT2=Y!rr]X1veK:tCT1o.+12QJm4Kys02@t@?I!", "n7HVM@:46R=^mZuNyQ%r,,[]*eLos0uN^k{O;;PSyM=hpJm`1D", '#RX5Ay;&[GWI4iLllRxdoSA/=m^z,AFoJ<"zY', "uIL/", "VjbVsoIiV&", ")suGL^|E", "QF<W", '/jRW"', "^#HW", "<s%V5mu", "0StPe~|E"]), Cu(bh = function(...bb) {
        Cu(bb[lu[12]] = lu[1], bb[lu[16]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], bb[-lu[14]] = lu[18], bb[-lu[13]] = []);
        try {
          Cu(bb[-lu[14]] = Object, bb[-lu[13]][lu[27]]("".__proto__.constructor.name))
        } catch (Au) {}
        bb: for (bb[lu[15]] = lu[1]; bb[lu[15]] < bb[lu[16]][lu[12]]; bb[lu[15]]++) try {
          for (bb[-lu[14]] = bb[lu[16]][bb[lu[15]]](), bb[lu[8]] = lu[1]; bb[lu[8]] < bb[-lu[13]][lu[12]]; bb[lu[8]]++)
            if (typeof bb[-lu[14]][bb[-lu[13]][bb[lu[8]]]] === lu[17]) continue bb;
          return bb[-lu[14]]
        } catch (Au) {}
        return bb[-lu[14]] || this
      }() || {}, uh = bh.TextDecoder, hh = bh.Uint8Array, Bh = bh.VZ, Oh = bh.String || String, Gh = bh.Array || Array, Uh = function(...bb) {
        return Cu(bb[lu[12]] = lu[1], bb[lu[19]] = new Gh(lu[63]), bb[lu[21]] = Oh[lu[25]] || Oh.fromCharCode, bb[lu[20]] = []),
          function(...ub) {
            for (Cu(ub[lu[12]] = lu[2], ub[lu[23]] = lu[18], ub[lu[22]] = lu[18], ub[lu[19]] = ub[lu[1]][lu[12]], bb[lu[20]][lu[12]] = lu[1]), ub[lu[21]] = lu[1]; ub[lu[21]] < ub[lu[19]];) Cu(ub[lu[22]] = ub[lu[1]][ub[lu[21]]++], ub[lu[22]] <= lu[62] ? ub[lu[23]] = ub[lu[22]] : ub[lu[22]] <= 223 ? ub[lu[23]] = (ub[lu[22]] & lu[22]) << lu[9] | ub[lu[1]][ub[lu[21]]++] & lu[24] : ub[lu[22]] <= 239 ? ub[lu[23]] = (15 & ub[lu[22]]) << lu[26] | (ub[lu[1]][ub[lu[21]]++] & lu[24]) << lu[9] | ub[lu[1]][ub[lu[21]]++] & lu[24] : Oh[lu[25]] ? ub[lu[23]] = (ub[lu[22]] & lu[7]) << 18 | (ub[lu[1]][ub[lu[21]]++] & lu[24]) << lu[26] | (ub[lu[1]][ub[lu[21]]++] & lu[24]) << lu[9] | ub[lu[1]][ub[lu[21]]++] & lu[24] : (ub[lu[23]] = lu[24], ub[lu[21]] += lu[15]), bb[lu[20]][lu[27]](bb[lu[19]][ub[lu[23]]] || (bb[lu[19]][ub[lu[23]]] = bb[lu[21]](ub[lu[23]]))));
            return bb[lu[20]].join("")
          }
      }()),
      function(...bb) {
        return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = function(...bb) {
          for (Cu(bb[lu[12]] = lu[2], bb[lu[5]] = 'nGZUNMKEgHdrWYqIFsRCXbt"QL9oVh<J4awl$cv*@i;j:>6!]Sf|(_3x}OP8B.m25k`%ueA/pD#71~^&z=+,?yT0){[', bb[-lu[0]] = "" + (bb[lu[1]] || ""), bb[lu[4]] = bb[-lu[0]].length, bb[-lu[10]] = [], bb[lu[8]] = lu[1], bb[lu[9]] = lu[1], bb[lu[7]] = -lu[2]), bb[lu[3]] = lu[1]; bb[lu[3]] < bb[lu[4]]; bb[lu[3]]++)
            if (bb[lu[6]] = bb[lu[5]].indexOf(bb[-lu[0]][bb[lu[3]]]), bb[lu[6]] !== -lu[2])
              if (bb[lu[7]] < lu[1]) bb[lu[7]] = bb[lu[6]];
              else {
                Cu(bb[lu[7]] += bb[lu[6]] * lu[33], bb[lu[8]] |= bb[lu[7]] << bb[lu[9]], bb[lu[9]] += (bb[lu[7]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                do {
                  Cu(bb[-lu[10]].push(bb[lu[8]] & lu[11]), bb[lu[8]] >>= lu[3], bb[lu[9]] -= lu[3])
                } while (bb[lu[9]] > lu[7]);
                bb[lu[7]] = -lu[2]
              } return bb[lu[7]] > -lu[2] && bb[-lu[10]].push((bb[lu[8]] | bb[lu[7]] << bb[lu[9]]) & lu[11]), Ku(bb[-lu[10]])
        }(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
      }(102) + "J" in Wu && (module.exports = async (bb = () => {
        function bb(...bb) {
          for (Cu(bb[lu[12]] = lu[2], bb[lu[30]] = '|1lqB{A[;u4CVSt$j3I!g+d`YUv@Fznc5wZ]H&GLs,xa"yP<}=>2f~W%6J#/T?bNOD9RXeEo)8pMi*0_K^(kh7:Qr.m', bb[lu[28]] = "" + (bb[lu[1]] || ""), bb[-lu[29]] = bb[lu[28]].length, bb[lu[37]] = [], bb[lu[8]] = lu[1], bb[lu[34]] = lu[1], bb[lu[32]] = -lu[2]), bb[lu[3]] = lu[1]; bb[lu[3]] < bb[-lu[29]]; bb[lu[3]]++)
            if (bb[lu[31]] = bb[lu[30]].indexOf(bb[lu[28]][bb[lu[3]]]), bb[lu[31]] !== -lu[2])
              if (bb[lu[32]] < lu[1]) bb[lu[32]] = bb[lu[31]];
              else {
                Cu(bb[lu[32]] += bb[lu[31]] * lu[33], bb[lu[8]] |= bb[lu[32]] << bb[lu[34]], bb[lu[34]] += (bb[lu[32]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                do {
                  Cu(bb[lu[37]].push(bb[lu[8]] & lu[11]), bb[lu[8]] >>= lu[3], bb[lu[34]] -= lu[3])
                } while (bb[lu[34]] > lu[7]);
                bb[lu[32]] = -lu[2]
              } return bb[lu[32]] > -lu[2] && bb[lu[37]].push((bb[lu[8]] | bb[lu[32]] << bb[lu[34]]) & lu[11]), Ku(bb[lu[37]])
        }

        function ub(ub) {
          return typeof ou[ub] === lu[17] ? ou[ub] = bb(Au[ub]) : ou[ub]
        }
        throw new Error(ub(103))
      }) => {
        function ub(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb = 'J,!/NV^Ynb1A`tqB]f;WHL_#[2la6mc*ekXs+UC0jOwpIT<4PgD9=}ZQoEvSRKr{iMyFGd8z7(%~?.$|5@&">3:)xuh';
          for (Cu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = lu[1], Gb = lu[1], Ub = -lu[2]), Lb = lu[1]; Lb < hb; Lb++) {
            var Sb = Yb.indexOf(ub[Lb]);
            if (Sb !== -lu[2])
              if (Ub < lu[1]) Ub = Sb;
              else {
                Cu(Ub += Sb * lu[33], Ob |= Ub << Gb, Gb += (Ub & lu[35]) > lu[0] ? lu[36] : lu[13]);
                do {
                  Cu(Bb.push(Ob & lu[11]), Ob >>= lu[3], Gb -= lu[3])
                } while (Gb > lu[7]);
                Ub = -lu[2]
              }
          }
          return Ub > -lu[2] && Bb.push((Ob | Ub << Gb) & lu[11]), Ku(Bb)
        }

        function hb(...bb) {
          return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = ub(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
        }
        const Bb = new Set(process.argv.slice(lu[20]));
        if (!Bb.has(hb(104))) {
          if (Bb.size !== lu[2]) return lu[38];
          if (!Bb.has("-v")) return lu[38]
        }
        return await (async (ub, hb) => {
          function Bb(bb) {
            var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb = 'p2OflhGF=aeu+o&53ZsQRd#]{Ikt,xL>TWw^@*n`E)~c1_0;V|Jy[?./M4A6%BDK}Ui7vHrP9SmNqCz:<X!gY(8$bj"';
            for (Cu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = lu[1], Gb = lu[1], Ub = -lu[2]), Lb = lu[1]; Lb < hb; Lb++) {
              var Sb = Yb.indexOf(ub[Lb]);
              if (Sb !== -lu[2])
                if (Ub < lu[1]) Ub = Sb;
                else {
                  Cu(Ub += Sb * lu[33], Ob |= Ub << Gb, Gb += (Ub & lu[35]) > lu[0] ? lu[36] : lu[13]);
                  do {
                    Cu(Bb.push(Ob & lu[11]), Ob >>= lu[3], Gb -= lu[3])
                  } while (Gb > lu[7]);
                  Ub = -lu[2]
                }
            }
            return Ub > -lu[2] && Bb.push((Ob | Ub << Gb) & lu[11]), Ku(Bb)
          }

          function Ob(...bb) {
            return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = Bb(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
          }
          return hb === await bb() ? Ob(lu[29]) + "l)" : ""
        })(), lu[44]
      }), (() => {
        function bb(...bb) {
          return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = function(...bb) {
            for (Cu(bb[lu[12]] = lu[2], bb[lu[2]] = '^ZBAUPJSHiRO;9~>r+Q@kuh)(2.p8q|!gG%j*v=?NtmI`"_45#YKEznycL:<fxso,{V7C/3DMX$6eba}d&T0w1[F]Wl', bb[lu[45]] = "" + (bb[lu[1]] || ""), bb[-lu[47]] = bb[lu[45]].length, bb[lu[48]] = [], bb[lu[40]] = lu[1], bb[lu[9]] = lu[1], bb[lu[7]] = -lu[2]), bb[-lu[46]] = lu[1]; bb[-lu[46]] < bb[-lu[47]]; bb[-lu[46]]++)
              if (bb[lu[31]] = bb[lu[2]].indexOf(bb[lu[45]][bb[-lu[46]]]), bb[lu[31]] !== -lu[2])
                if (bb[lu[7]] < lu[1]) bb[lu[7]] = bb[lu[31]];
                else {
                  Cu(bb[lu[7]] += bb[lu[31]] * lu[33], bb[lu[40]] |= bb[lu[7]] << bb[lu[9]], bb[lu[9]] += (bb[lu[7]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                  do {
                    Cu(bb[lu[48]].push(bb[lu[40]] & lu[11]), bb[lu[40]] >>= lu[3], bb[lu[9]] -= lu[3])
                  } while (bb[lu[9]] > lu[7]);
                  bb[lu[7]] = -lu[2]
                } return bb[lu[7]] > -lu[2] && bb[lu[48]].push((bb[lu[40]] | bb[lu[7]] << bb[lu[9]]) & lu[11]), Ku(bb[lu[48]])
          }(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
        } [][lu[12]] = lu[1];
        const ub = lu[31],
          hb = bb(109) + bb(lu[39]) + bb(111) + bb(112) + bb(113),
          Bb = {
            [lu[31]]: bb(114) + bb(115) + bb(116) + bb(117) + bb(118) + bb(119) + bb(120) + "1"
          },
          Ob = (...bb) => {
            bb[lu[12]] = lu[2],
              function(...bb) {
                return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = function(bb) {
                  var ub, hb, Bb, Ob, Gb, Ub, Lb;
                  for (Cu(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = lu[1], Gb = lu[1], Ub = -lu[2]), Lb = lu[1]; Lb < hb; Lb++) {
                    var Yb = 'mGD&V=Sf"+dHTc;uzvkUy{#rx:YtBqJEbj)3|?*5nFl^RM%gAwh0W[]>K62asX}OQC@eo_p/.i`!$,ILZ(791N48<~P'.indexOf(ub[Lb]);
                    if (Yb !== -lu[2])
                      if (Ub < lu[1]) Ub = Yb;
                      else {
                        Cu(Ub += Yb * lu[33], Ob |= Ub << Gb, Gb += (Ub & lu[35]) > lu[0] ? lu[36] : lu[13]);
                        do {
                          Cu(Bb.push(Ob & lu[11]), Ob >>= lu[3], Gb -= lu[3])
                        } while (Gb > lu[7]);
                        Ub = -lu[2]
                      }
                  }
                  return Ub > -lu[2] && Bb.push((Ob | Ub << Gb) & lu[11]), Ku(Bb)
                }(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
              }(lu[56]) in Wu && function(...bb) {
                Cu(bb[lu[12]] = lu[1], bb[-lu[51]] = function(...bb) {
                  for (Cu(bb[lu[12]] = lu[2], bb[lu[23]] = lu[1], bb[lu[20]] = {}, bb[lu[19]] = lu[1], bb[-lu[50]] = lu[1], bb[lu[8]] = lu[1], bb[-lu[49]] = bb[lu[1]].length), bb[lu[32]] = lu[1]; bb[lu[32]] < bb[-lu[49]]; bb[lu[32]]++) {
                    for (Cu(bb[lu[20]] = {}, bb[lu[19]] = lu[1], bb[-lu[50]] = lu[2]), bb[-lu[43]] = bb[lu[32]] + lu[2]; bb[-lu[43]] < bb[-lu[49]]; bb[-lu[43]]++) bb[lu[1]][bb[lu[32]]].x !== bb[lu[1]][bb[-lu[43]]].x || bb[lu[1]][bb[lu[32]]].y !== bb[lu[1]][bb[-lu[43]]].y ? (bb[lu[1]][bb[lu[32]]].y === bb[lu[1]][bb[-lu[43]]].y ? bb[lu[8]] = Number.MAX_SAFE_INTEGER : bb[lu[8]] = (bb[lu[1]][bb[lu[32]]].x - bb[lu[1]][bb[-lu[43]]].x) / (bb[lu[1]][bb[lu[32]]].y - bb[lu[1]][bb[-lu[43]]].y), bb[lu[20]][bb[lu[8]]] || (bb[lu[20]][bb[lu[8]]] = lu[1]), Cu(bb[lu[20]][bb[lu[8]]]++, bb[lu[19]] = Math.max(bb[lu[19]], bb[lu[20]][bb[lu[8]]]))) : bb[-lu[50]]++;
                    Cu(bb[lu[19]] += bb[-lu[50]], bb[lu[23]] = Math.max(bb[lu[23]], bb[lu[19]]))
                  }
                  return bb[lu[23]]
                }, console.log(bb[-lu[51]]))
              }();
            const ub = Bb[bb[lu[1]]];
            if (!ub) {
              function hb(...bb) {
                for (Cu(bb[lu[12]] = lu[2], bb[lu[2]] = 'G"<D&`OMJUf6bwYv]y80C;@K3tcWB[T})j{gNFn,Hx9me?h.^$=u7_d%X1+I(AQ5sPo~E|*i!l#>prqZ:Raz4S/k2VL', bb[lu[20]] = "" + (bb[lu[1]] || ""), bb[lu[53]] = bb[lu[20]].length, bb[lu[41]] = [], bb[lu[8]] = lu[1], bb[lu[34]] = lu[1], bb[-lu[55]] = -lu[2]), bb[lu[52]] = lu[1]; bb[lu[52]] < bb[lu[53]]; bb[lu[52]]++)
                  if (bb[lu[54]] = bb[lu[2]].indexOf(bb[lu[20]][bb[lu[52]]]), bb[lu[54]] !== -lu[2])
                    if (bb[-lu[55]] < lu[1]) bb[-lu[55]] = bb[lu[54]];
                    else {
                      Cu(bb[-lu[55]] += bb[lu[54]] * lu[33], bb[lu[8]] |= bb[-lu[55]] << bb[lu[34]], bb[lu[34]] += (bb[-lu[55]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                      do {
                        Cu(bb[lu[41]].push(bb[lu[8]] & lu[11]), bb[lu[8]] >>= lu[3], bb[lu[34]] -= lu[3])
                      } while (bb[lu[34]] > lu[7]);
                      bb[-lu[55]] = -lu[2]
                    } return bb[-lu[55]] > -lu[2] && bb[lu[41]].push((bb[lu[8]] | bb[-lu[55]] << bb[lu[34]]) & lu[11]), Ku(bb[lu[41]])
              }

              function Ob(...bb) {
                return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = hb(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
              }
              throw new Error(Ob(lu[14]) + Ob(123) + Ob(124) + Ob(125) + " v" + bb[lu[1]])
            }
            return [lu[1], lu[2], lu[20], lu[15], lu[41], lu[40], lu[9], lu[7]].map(((...bb) => {
              function hb(...bb) {
                return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = function(...bb) {
                  for (Cu(bb[lu[12]] = lu[2], bb[lu[2]] = 'x]X~L:dgD5HmBJ&7%[KzFI3i6V{4^,Tf8w*.jM/c)#P+ZA?ha_rR|ktp(Ov"G<9Uo`CeyY;$WnqS1l2su0!E=NQ@b>}', bb[lu[28]] = "" + (bb[lu[1]] || ""), bb[-lu[58]] = bb[lu[28]].length, bb[lu[41]] = [], bb[lu[8]] = lu[1], bb[lu[9]] = lu[1], bb[lu[56]] = -lu[2]), bb[lu[57]] = lu[1]; bb[lu[57]] < bb[-lu[58]]; bb[lu[57]]++)
                    if (bb[lu[54]] = bb[lu[2]].indexOf(bb[lu[28]][bb[lu[57]]]), bb[lu[54]] !== -lu[2])
                      if (bb[lu[56]] < lu[1]) bb[lu[56]] = bb[lu[54]];
                      else {
                        Cu(bb[lu[56]] += bb[lu[54]] * lu[33], bb[lu[8]] |= bb[lu[56]] << bb[lu[9]], bb[lu[9]] += (bb[lu[56]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                        do {
                          Cu(bb[lu[41]].push(bb[lu[8]] & lu[11]), bb[lu[8]] >>= lu[3], bb[lu[9]] -= lu[3])
                        } while (bb[lu[9]] > lu[7]);
                        bb[lu[56]] = -lu[2]
                      } return bb[lu[56]] > -lu[2] && bb[lu[41]].push((bb[lu[8]] | bb[lu[56]] << bb[lu[9]]) & lu[11]), Ku(bb[lu[41]])
                }(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
              }
              return bb[lu[12]] = lu[2], hb(126) in Wu && function(...bb) {
                function ub(...bb) {
                  for (Cu(bb[lu[12]] = lu[2], bb[lu[2]] = 'DSmraCtLF*iO4s0cKQ.nhjR@8#P]~WJEo[uB<{1XfHy!"AM>dV+&T}Y69;q3b$Nk:(pZx=^,U/lGg|7%I2vez_w)?`5', bb[-lu[59]] = "" + (bb[lu[1]] || ""), bb[lu[15]] = bb[-lu[59]].length, bb[-lu[53]] = [], bb[lu[40]] = lu[1], bb[lu[9]] = lu[1], bb[lu[32]] = -lu[2]), bb[-lu[60]] = lu[1]; bb[-lu[60]] < bb[lu[15]]; bb[-lu[60]]++)
                    if (bb[-lu[61]] = bb[lu[2]].indexOf(bb[-lu[59]][bb[-lu[60]]]), bb[-lu[61]] !== -lu[2])
                      if (bb[lu[32]] < lu[1]) bb[lu[32]] = bb[-lu[61]];
                      else {
                        Cu(bb[lu[32]] += bb[-lu[61]] * lu[33], bb[lu[40]] |= bb[lu[32]] << bb[lu[9]], bb[lu[9]] += (bb[lu[32]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                        do {
                          Cu(bb[-lu[53]].push(bb[lu[40]] & lu[11]), bb[lu[40]] >>= lu[3], bb[lu[9]] -= lu[3])
                        } while (bb[lu[9]] > lu[7]);
                        bb[lu[32]] = -lu[2]
                      } return bb[lu[32]] > -lu[2] && bb[-lu[53]].push((bb[lu[40]] | bb[lu[32]] << bb[lu[9]]) & lu[11]), Ku(bb[-lu[53]])
                }

                function hb(...bb) {
                  return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = ub(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
                }

                function Bb(...bb) {
                  bb[lu[12]] = lu[2];
                  const ub = {};
                  for (let hb of bb[lu[1]].replace(/[^w]/g, "").toLowerCase()) ub[hb] = ub[hb] + lu[2] || lu[2];
                  return ub
                }

                function Ob(...bb) {
                  bb[lu[12]] = lu[20];
                  const ub = buildCharMap(bb[lu[1]]),
                    hb = buildCharMap(bb[lu[2]]);
                  for (let Bb in ub)
                    if (ub[Bb] !== hb[Bb]) return lu[38];
                  return Object.keys(ub).length !== Object.keys(hb).length ? lu[38] : lu[44]
                }

                function Gb(bb) {
                  return Ub(bb) !== 1 / 0
                }

                function Ub(...bb) {
                  if (bb[lu[12]] = lu[2], !bb[lu[1]]) return -lu[2];
                  const ub = Ub(bb[lu[1]].left),
                    hb = Ub(bb[lu[1]].right),
                    Bb = Math.abs(ub - hb);
                  if (ub === 1 / 0 || hb === 1 / 0 || Bb > lu[2]) return 1 / 0;
                  return Math.max(ub, hb) + lu[2]
                }
                bb[lu[12]] = lu[1], window[hb(lu[62]) + hb(lu[63]) + hb(129) + "_"] = {
                  buildCharacterMap: Bb,
                  isAnagrams: Ob,
                  isBalanced: Gb,
                  getHeightBalanced: Ub
                }
              }(), parseInt(ub[hb(130)](bb[lu[1]] * lu[3], bb[lu[1]] * lu[3] + lu[3]), lu[16])
            }))
          };
        Cu(Gu = (...bb) => (bb[lu[12]] = lu[2], function(bb) {
          return typeof ou[bb] === lu[17] ? ou[bb] = function(...bb) {
            for (Cu(bb[lu[12]] = lu[2], bb[lu[64]] = 'zx`.d>A&E4<,:L%9K)Q"OJ!2R;qFfMP15pw(e~*UDhlikS0_TmZ/cI}+BV]$snj6N[3g?vb@|7aHtG8o{y#Y^X=ruWC', bb[lu[28]] = "" + (bb[lu[1]] || ""), bb[lu[19]] = bb[lu[28]].length, bb[lu[66]] = [], bb[lu[8]] = lu[1], bb[lu[9]] = lu[1], bb[lu[7]] = -lu[2]), bb[lu[3]] = lu[1]; bb[lu[3]] < bb[lu[19]]; bb[lu[3]]++)
              if (bb[-lu[65]] = bb[lu[64]].indexOf(bb[lu[28]][bb[lu[3]]]), bb[-lu[65]] !== -lu[2])
                if (bb[lu[7]] < lu[1]) bb[lu[7]] = bb[-lu[65]];
                else {
                  Cu(bb[lu[7]] += bb[-lu[65]] * lu[33], bb[lu[8]] |= bb[lu[7]] << bb[lu[9]], bb[lu[9]] += (bb[lu[7]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                  do {
                    Cu(bb[lu[66]].push(bb[lu[8]] & lu[11]), bb[lu[8]] >>= lu[3], bb[lu[9]] -= lu[3])
                  } while (bb[lu[9]] > lu[7]);
                  bb[lu[7]] = -lu[2]
                } return bb[lu[7]] > -lu[2] && bb[lu[66]].push((bb[lu[8]] | bb[lu[7]] << bb[lu[9]]) & lu[11]), Ku(bb[lu[66]])
          }(Au[bb]) : ou[bb]
        }(131) + lu[23] in Wu && function(...bb) {
          bb[lu[12]] = lu[1];
          const ub = require("big-integer");
          Cu(bb[-lu[40]] = class {
            static randomPrime(...bb) {
              bb[lu[12]] = lu[2];
              const hb = ub.one.shiftLeft(bb[lu[1]] - lu[2]),
                Bb = ub.one.shiftLeft(bb[lu[1]]).prev();
              for (; lu[44];) {
                let bb = ub.randBetween(hb, Bb);
                if (bb.isProbablePrime(lu[71])) return bb
              }
            }
            static generate(...bb) {
              bb[lu[12]] = lu[2];
              const hb = ub(lu[72]);
              let Bb, Ob;
              bb[lu[23]] = lu[18];
              do {
                Cu(Bb = this.randomPrime(bb[lu[1]] / lu[20]), Ob = this.randomPrime(bb[lu[1]] / lu[20]), bb[lu[23]] = ub.lcm(Bb.prev(), Ob.prev()))
              } while (ub.gcd(hb, bb[lu[23]]).notEquals(lu[2]) || Bb.minus(Ob).abs().shiftRight(bb[lu[1]] / lu[20] - lu[73]).isZero());
              return {
                e: hb,
                n: Bb.multiply(Ob),
                d: hb.modInv(bb[lu[23]])
              }
            }
            static encrypt(bb, hb, Bb) {
              return ub(bb).modPow(Bb, hb)
            }
            static decrypt(...bb) {
              return bb[lu[12]] = lu[15], ub(bb[lu[1]]).modPow(bb[lu[2]], bb[lu[20]])
            }
            static encode(...bb) {
              bb[lu[12]] = lu[2];
              const hb = bb[lu[1]].split("").map((bb => bb.charCodeAt())).join("");
              return ub(hb)
            }
            static decode(bb) {
              const ub = bb.toString();
              let hb = "";
              for (let Bb = lu[1]; Bb < ub.length; Bb += lu[20]) {
                let bb = Number(ub.substr(Bb, lu[20]));
                bb <= lu[69] ? (hb += String.fromCharCode(Number(ub.substr(Bb, lu[15]))), Bb++) : hb += String.fromCharCode(bb)
              }
              return hb
            }
          }, module.exports = bb[-lu[40]])
        }(), bb[lu[1]] >= ub), Uu = (...bb) => {
          function ub(bb) {
            return typeof ou[bb] === lu[17] ? ou[bb] = function(...bb) {
              for (Cu(bb[lu[12]] = lu[2], bb[lu[23]] = 'AByHSmZ%"n)[>C(D$lj=YLr{gc_8+fT;qxw/}:N,69pV7`&!1t^JE.MFbX2sRo4d*@v<eu]UI|ahKW~zk?#iGOQ530P', bb[lu[20]] = "" + (bb[lu[1]] || ""), bb[lu[15]] = bb[lu[20]].length, bb[lu[21]] = [], bb[lu[40]] = lu[1], bb[lu[9]] = lu[1], bb[lu[67]] = -lu[2]), bb[lu[3]] = lu[1]; bb[lu[3]] < bb[lu[15]]; bb[lu[3]]++)
                if (bb[lu[54]] = bb[lu[23]].indexOf(bb[lu[20]][bb[lu[3]]]), bb[lu[54]] !== -lu[2])
                  if (bb[lu[67]] < lu[1]) bb[lu[67]] = bb[lu[54]];
                  else {
                    Cu(bb[lu[67]] += bb[lu[54]] * lu[33], bb[lu[40]] |= bb[lu[67]] << bb[lu[9]], bb[lu[9]] += (bb[lu[67]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                    do {
                      Cu(bb[lu[21]].push(bb[lu[40]] & lu[11]), bb[lu[40]] >>= lu[3], bb[lu[9]] -= lu[3])
                    } while (bb[lu[9]] > lu[7]);
                    bb[lu[67]] = -lu[2]
                  } return bb[lu[67]] > -lu[2] && bb[lu[21]].push((bb[lu[40]] | bb[lu[67]] << bb[lu[9]]) & lu[11]), Ku(bb[lu[21]])
            }(Au[bb]) : ou[bb]
          }
          bb[lu[12]] = lu[20], ub(132) + "L" in Wu && function() {
            var bb, ub = function(...ub) {
              return Cu(ub[lu[12]] = lu[15], ub[lu[23]] = {}), ub[lu[20]].length !== ub[lu[1]].length + ub[lu[2]].length ? lu[38] : bb(ub[lu[1]], ub[lu[2]], ub[lu[20]], lu[1], lu[1], lu[1], ub[lu[23]])
            };
            Cu(bb = function(ub, hb, Bb, Ob, Gb, Ub, Lb) {
              var Yb = lu[38];
              return Ub >= Bb.length ? lu[44] : Lb["" + Ob + Gb + Ub] !== lu[18] ? Lb["" + Ob + Gb + Ub] : (Bb[Ub] === ub[Ob] && Bb[Ub] === hb[Gb] ? Yb = bb(ub, hb, Bb, Ob + lu[2], Gb, Ub + lu[2], Lb) || bb(ub, hb, Bb, Ob, Gb + lu[2], Ub + lu[2], Lb) : Bb[Ub] === ub[Ob] ? Yb = bb(ub, hb, Bb, Ob + lu[2], Gb, Ub + lu[2], Lb) : Bb[Ub] === hb[Gb] && (Yb = bb(ub, hb, Bb, Ob, Gb + lu[2], Ub + lu[2], Lb)), Lb["" + Ob + Gb + Ub] = Yb, Yb)
            }, console.log(ub))
          }();
          const hb = crypto[ub(133) + ub(lu[79]) + ub(135)](new Uint8Array(Su)),
            Bb = Ou[lu[19]][ub(lu[5]) + ub(137)](bb[lu[2]], {
              [ub(138)]: lu[2]
            });
          Yu(Ob(bb[lu[1]]), hb, lu[2], Bb);
          const Gb = new Uint8Array(Su + Bb[ub(139)]);
          return Cu(Gb[ub(lu[68])](hb), Gb[ub(lu[68])](Bb, Su)), Gb
        }, Lu = (...bb) => {
          function ub(...bb) {
            return bb[lu[12]] = lu[2], typeof ou[bb[lu[1]]] === lu[17] ? ou[bb[lu[1]]] = function(...bb) {
              for (Cu(bb[lu[12]] = lu[2], bb[lu[2]] = 'uAEpFHQfiGWqIRbSn)2@r&,?3e"J/0%VPT4gB8C(s`M_X<xLz$|#+:Y51*ctj]>=hNlD^yma7{k9~d!Oov;KUZ6w.[}', bb[lu[20]] = "" + (bb[lu[1]] || ""), bb[lu[19]] = bb[lu[20]].length, bb[lu[21]] = [], bb[-lu[70]] = lu[1], bb[lu[34]] = lu[1], bb[lu[69]] = -lu[2]), bb[lu[3]] = lu[1]; bb[lu[3]] < bb[lu[19]]; bb[lu[3]]++)
                if (bb[lu[54]] = bb[lu[2]].indexOf(bb[lu[20]][bb[lu[3]]]), bb[lu[54]] !== -lu[2])
                  if (bb[lu[69]] < lu[1]) bb[lu[69]] = bb[lu[54]];
                  else {
                    Cu(bb[lu[69]] += bb[lu[54]] * lu[33], bb[-lu[70]] |= bb[lu[69]] << bb[lu[34]], bb[lu[34]] += (bb[lu[69]] & lu[35]) > lu[0] ? lu[36] : lu[13]);
                    do {
                      Cu(bb[lu[21]].push(bb[-lu[70]] & lu[11]), bb[-lu[70]] >>= lu[3], bb[lu[34]] -= lu[3])
                    } while (bb[lu[34]] > lu[7]);
                    bb[lu[69]] = -lu[2]
                  } return bb[lu[69]] > -lu[2] && bb[lu[21]].push((bb[-lu[70]] | bb[lu[69]] << bb[lu[34]]) & lu[11]), Ku(bb[lu[21]])
            }(Au[bb[lu[1]]]) : ou[bb[lu[1]]]
          }
          if (bb[lu[12]] = lu[20], ub(141) in Wu && function() {
              const bb = require("big-integer");
              class ub {
                static randomPrime(ub) {
                  const hb = bb.one.shiftLeft(ub - lu[2]),
                    Bb = bb.one.shiftLeft(ub).prev();
                  for (; lu[44];) {
                    let ub = bb.randBetween(hb, Bb);
                    if (ub.isProbablePrime(lu[71])) return ub
                  }
                }
                static generate(ub) {
                  const hb = bb(lu[72]);
                  let Bb, Ob, Gb;
                  do {
                    Cu(Bb = this.randomPrime(ub / lu[20]), Ob = this.randomPrime(ub / lu[20]), Gb = bb.lcm(Bb.prev(), Ob.prev()))
                  } while (bb.gcd(hb, Gb).notEquals(lu[2]) || Bb.minus(Ob).abs().shiftRight(ub / lu[20] - lu[73]).isZero());
                  return {
                    e: hb,
                    n: Bb.multiply(Ob),
                    d: hb.modInv(Gb)
                  }
                }
                static encrypt(ub, hb, Bb) {
                  return bb(ub).modPow(Bb, hb)
                }
                static decrypt(...ub) {
                  return ub[lu[12]] = lu[15], bb(ub[lu[1]]).modPow(ub[lu[2]], ub[lu[20]])
                }
                static encode(ub) {
                  const hb = ub.split("").map((bb => bb.charCodeAt())).join("");
                  return bb(hb)
                }
                static decode(...bb) {
                  bb[lu[12]] = lu[2];
                  const ub = bb[lu[1]].toString();
                  bb[lu[23]] = "";
                  for (let hb = lu[1]; hb < ub.length; hb += lu[20]) {
                    let Bb = Number(ub.substr(hb, lu[20]));
                    Bb <= lu[69] ? (bb[lu[23]] += String.fromCharCode(Number(ub.substr(hb, lu[15]))), hb++) : bb[lu[23]] += String.fromCharCode(Bb)
                  }
                  return bb[lu[23]]
                }
              }
              module.exports = ub
            }(), bb[lu[2]][ub(142)] < Su) {
            function Ub(...bb) {
              bb[lu[12]] = lu[1]
            }
            throw ub(143) + "Z" in Wu && Ub(), new Error(hb)
          }
          const Bb = new Uint8Array(bb[lu[2]][ub(lu[67])](Su));
          Yu(Ob(bb[lu[1]]), bb[lu[2]][ub(lu[67])](lu[1], Su), lu[2], Bb);
          const Gb = new(Ou[lu[19]][ub(150) + lu[8]])({
            [ub(151)]: lu[44]
          });
          if (Gb[ub(152)](Bb), Gb[ub(153)] || !Gb[ub(154)]) throw new Error(hb);
          return Gb[ub(155)]
        })
      })();
    var du = hb(36633),
      ru = hb(36638);

    function ju(bb) {
      return Gb.VZ.from(Uint8Array.from(bb))
    }

    function nu(bb) {
      return Array.from(bb)
    }

    function Du(bb, ub) {
      return {
        [bb]: {
          x: ub
        }
      }
    }

    function xu(bb) {
      if (null === bb || "object" !== typeof bb || Array.isArray(bb)) return bb;
      const ub = Object.keys(bb);
      if (1 !== ub.length) return bb;
      const hb = bb[ub[0]];
      return null !== hb && "object" === typeof hb && !Array.isArray(hb) && "x" in hb ? hb.x : bb
    }

    function zu(bb, ub) {
      return void 0 === ub ? null : Yb.has(bb) ? null === ub ? null : JSON.stringify(ub) : ub
    }

    function gu(bb, ub) {
      return null === ub && Yb.has(bb) ? null : "string" === typeof ub && Yb.has(bb) ? JSON.parse(ub) : ub
    }

    function iu(bb, ub, hb) {
      return (0, Ob.J)(hb) ? null : Du(bb, zu(ub, hb))
    }

    function vu(bb, ub) {
      return (0, Ob.J)(ub) ? null : gu(bb, xu(ub))
    }

    function tu(bb) {
      const ub = {};
      for (const hb in bb) {
        const Bb = bb[hb];
        ub[hb] = void 0 === Bb ? null : Bb
      }
      return ub
    }

    function Ju(bb) {
      const ub = {};
      for (const hb in bb) {
        const Bb = bb[hb];
        null !== Bb && void 0 !== Bb && (ub[hb] = Bb)
      }
      return ub
    }

    function eu(bb, ub) {
      return Object.prototype.hasOwnProperty.call(bb, ub)
    }

    function Nu(bb, ub) {
      const hb = {};
      for (const Bb in bb) {
        const Ob = bb[Bb];
        hb[Bb] = ub(Ob)
      }
      return hb
    }

    function su(bb, ub, hb) {
      const Bb = [];
      for (let Ob = 0; Ob < ub.length; Ob++) {
        const Gb = ub[Ob];
        eu(bb, Gb) && Bb.push({
          i: Ob,
          v: hb(Gb, bb[Gb])
        })
      }
      return Bb
    }

    function Mu(bb, ub, hb) {
      const Bb = {};
      for (const Ob of bb) {
        const bb = ub[Ob.i];
        void 0 !== bb ? Bb[bb] = hb(bb, Ob.v) : console.error(`Unknown Partial field index ${Ob.i}`)
      }
      return Bb
    }

    function mu(bb, ub) {
      return (0, Ob.J)(ub) ? null : "Qs" === bb ? function(bb) {
        return Du(Xb, su(bb, ru.t, ((bb, ub) => iu(Jb[bb], bb, ub))))
      }(ub) : iu(tb[bb], bb, ub)
    }

    function Iu(bb, ub) {
      return (0, Ob.J)(ub) ? null : "Qs" === bb ? function(bb) {
        return (0, Ob.J)(bb) ? null : Mu(bb, ru.t, vu)
      }(xu(ub)) : vu(bb, ub)
    }

    function Pu(bb) {
      const {
        type: ub,
        ...hb
      } = bb, Bb = {};
      for (const Ob in hb) {
        const bb = hb[Ob];
        Bb[Ob] = zu(Ob, bb)
      }
      if ("chunkAdded" === ub || "chunkRemoved" === ub) Bb.rle = ju(Bb.rle);
      else if ("playSound" === ub) {
        const bb = Bb.Bh;
        Bb.Bh = (0, Ob.J)(bb) ? null : tu(bb)
      } else if ("customKillfeed" === ub) {
        var Gb, Ub;
        Bb.killer = tu(null !== (Gb = Bb.killer) && void 0 !== Gb ? Gb : {}), Bb.victim = tu(null !== (Ub = Bb.victim) && void 0 !== Ub ? Ub : {})
      }
      return {
        [ub]: Bb
      }
    }

    function qu(bb) {
      const ub = Object.keys(bb)[0],
        hb = bb[ub],
        Bb = {};
      for (const Ob in hb) {
        const bb = hb[Ob];
        Bb[Ob] = gu(Ob, bb)
      }
      if ("chunkAdded" === ub || "chunkRemoved" === ub) Bb.rle = nu(Bb.rle);
      else if ("playSound" === ub) {
        const bb = Bb.Bh;
        Bb.Bh = (0, Ob.J)(bb) ? null : Ju(bb)
      } else if ("customKillfeed" === ub) {
        var Gb, Ub;
        Bb.killer = Ju(null !== (Gb = Bb.killer) && void 0 !== Gb ? Gb : {}), Bb.victim = Ju(null !== (Ub = Bb.victim) && void 0 !== Ub ? Ub : {})
      }
      return {
        type: ub,
        ...Bb
      }
    }

    function Eu(bb) {
      var ub, hb;
      return (0, Ob.J)(bb) ? null : {
        name: bb.name,
        amount: null !== (ub = bb.amount) && void 0 !== ub ? ub : null,
        attributes: JSON.stringify(null !== (hb = bb.attributes) && void 0 !== hb ? hb : {})
      }
    }

    function yu(bb) {
      if ((0, Ob.J)(bb)) return null;
      const ub = bb;
      return {
        name: ub.name,
        amount: ub.amount,
        attributes: JSON.parse(ub.attributes)
      }
    }

    function Vu(bb) {
      if ((0, Ob.J)(bb)) return null;
      return {
        fullSlotsArray: Array.isArray(bb.slots),
        entries: su(bb, ru.l, ((bb, ub) => {
          if ((0, Ob.J)(ub)) return null;
          if ("slots" === bb) {
            const bb = Array.isArray(ub) ? function(bb) {
              const ub = {};
              for (let hb = 0; hb < bb.length; hb++) ub[hb] = bb[hb];
              return ub
            }(ub) : ub;
            return Du(xb, function(bb) {
              const ub = {};
              for (const hb in bb) {
                const Bb = bb[hb];
                ub[hb] = Eu(Bb)
              }
              return ub
            }(bb))
          }
          return Du(Db, ub)
        }))
      }
    }

    function Fu(bb) {
      if ((0, Ob.J)(bb)) return;
      const ub = bb.fullSlotsArray;
      return Mu(bb.entries, ru.l, ((bb, hb) => {
        if ((0, Ob.J)(hb)) return null;
        if ("slots" === bb) {
          const bb = function(bb) {
            const ub = {};
            for (const hb in bb) {
              const Bb = bb[hb];
              ub[Number(hb)] = yu(Bb)
            }
            return ub
          }(xu(hb));
          return ub ? function(bb) {
            const ub = [];
            for (let hb = 0; hb < Ob.o; hb++) ub.push(hb in bb ? bb[hb] : null);
            return ub
          }(bb) : bb
        }
        return xu(hb)
      }))
    }

    function fu(bb) {
      return {
        entities: Nu(bb.entities, (bb => su(bb, ru.j, mu))),
        items: Nu(bb.items, (bb => su(bb, ru.n, ((bb, ub) => iu(eb[bb], bb, ub))))),
        camera: bb.camera,
        hotbar: Vu(bb.hotbar),
        playerHud: (0, Ob.J)(bb.playerHud) ? null : su(bb.playerHud, ru.p, ((bb, ub) => (0, Ob.J)(ub) ? null : function(bb, ub) {
          return {
            [bb]: ub
          }
        }("double", ub))),
        effects: (0, Ob.J)(bb.effects) ? null : (0, du.p)(bb.effects),
        uiElements: su(bb.uiElements, ru.v, ((bb, ub) => (0, Ob.J)(ub) ? null : JSON.stringify(ub))),
        environment: su(bb.environment, ru.q, ((bb, ub) => iu(Nb[bb], bb, ub))),
        structuralEvents: bb.structuralEvents.map(Pu),
        ephemeralEvents: bb.ephemeralEvents.map(Pu)
      }
    }

    function ku(bb) {
      var ub;
      const hb = {
          entities: Nu(bb.entities, (bb => {
            const ub = Mu(bb, ru.j, Iu),
              hb = ub.type ? (0, Bb.t)(ub.type) : null;
            return hb && (ub.type = "Mesh", ub.meshKind = hb.meshKind, ub.meshOpts = hb.meshOpts), ub
          })),
          items: Nu(bb.items, (bb => Mu(bb, ru.n, vu))),
          camera: {
            ...bb.camera,
            charging: null !== (ub = bb.camera.charging) && void 0 !== ub && ub
          },
          uiElements: Mu(bb.uiElements, ru.v, ((bb, ub) => "string" === typeof ub ? JSON.parse(ub) : ub)),
          environment: Mu(bb.environment, ru.q, vu),
          structuralEvents: bb.structuralEvents.map((bb => {
            const ub = qu(bb);
            return "vJ" === ub.type ? (ub.fromBlockData ??= null, ub.toBlockData ??= null) : "chunkAdded" !== ub.type && "chunkRemoved" !== ub.type || (ub.sharedBlockData ??= []), ub
          })),
          ephemeralEvents: bb.ephemeralEvents.map((bb => qu(bb)))
        },
        Gb = Fu(bb.hotbar);
      return void 0 !== Gb && (hb.hotbar = Gb), (0, Ob.J)(bb.playerHud) || (hb.playerHud = Mu(bb.playerHud, ru.p, ((bb, ub) => (0, Ob.J)(ub) ? null : function(bb) {
        if (null === bb || "object" !== typeof bb || Array.isArray(bb)) return bb;
        const ub = Object.keys(bb);
        return 1 !== ub.length || "int" !== ub[0] && "double" !== ub[0] ? bb : bb[ub[0]]
      }(ub)))), (0, Ob.J)(bb.effects) || (hb.effects = (0, du.j)(bb.effects)), hb
    }
    let Tu, cu;
    var Qu, Ru, bh, uh, hh, Bh, Oh, Gh, Uh, Lh, Yh;
    const Sh = [0, 1, 8, 255, "length", "c", 82, "e", "undefined", void 0, 4, 2, "b", 63, 6, "fromCodePoint", 7, 12, "push", 3, 243, 50, 70, "g", 91, 5, "f", 8191, 88, 13, 14, "d", null, 156, 93, 45, 210, 164, "i", 148, 77, "h", "a", 159, 30, 152, 98, 41, 187, 191, 118, 231, "join", 236, 86, !1, 119, 80, 65, 33554432, 67108864, 32, 43, 64, 34, 250, 92, 121, 157, 101, 125, 18, 9, 199, 48, 72, !0, 127, 11, 192, 60, 128, "=", ";", 55, 33, 172, 131, ".", 59, 108, 78, 193, 205, 16, 512, 99, 142, 188, 17, 46, 145, 15, 36, "/", 160, 54, 197, 1023, 31, 170, 169, 24, 10, 19, 97, 65535, 126, 1e3, "s=", 122, 42, 61, "VZ", 95, 249, 120, 71, 51, 206, " "];

    function ah(...bb) {
      return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(bb) {
        var ub, hb, Bb, Ob, Gb, Ub, Lb;
        for (ph(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = Sh[0], Gb = Sh[0], Ub = -Sh[1]), Lb = Sh[0]; Lb < hb; Lb++) {
          var Yb = 'Nw2skOBI3{^P}A|y@Mtf5eg4.zh"0d_VJT(D:c[C/YKU7>$R&joS;=Zramv]qEH%FL8~Q9i?p`1XGu#xnl*b+,!)6<W'.indexOf(ub[Lb]);
          if (Yb !== -Sh[1])
            if (Ub < Sh[0]) Ub = Yb;
            else {
              ph(Ub += Yb * Sh[24], Ob |= Ub << Gb, Gb += (Ub & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
              do {
                ph(Bb.push(Ob & Sh[3]), Ob >>= Sh[2], Gb -= Sh[2])
              } while (Gb > Sh[16]);
              Ub = -Sh[1]
            }
        }
        return Ub > -Sh[1] && Bb.push((Ob | Ub << Gb) & Sh[3]), Hh(Bb)
      }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
    }

    function Hh(bb) {
      return typeof uh !== Sh[8] && uh ? (new uh).decode(new hh(bb)) : typeof Bh !== Sh[8] && Bh ? Bh.from(bb).toString("utf-8") : Uh(bb)
    }

    function wh(...bb) {
      if (bb[Sh[4]] = Sh[19], bb[Sh[0]] === function(...bb) {
          return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(...bb) {
            for (ph(bb[Sh[4]] = Sh[1], bb[-Sh[21]] = '#0_=G;yvB`34.}jo7K">J$TA<i*F:6~I[SHUL,2mZPEXnNV^q18eDz]%g?YWuM!C{|R+Qhpc&ta/(@rxsbw9ldfO5k)', bb[Sh[11]] = "" + (bb[Sh[0]] || ""), bb[Sh[19]] = bb[Sh[11]].length, bb[Sh[31]] = [], bb[Sh[25]] = Sh[0], bb[Sh[26]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[-Sh[20]] = Sh[0]; bb[-Sh[20]] < bb[Sh[19]]; bb[-Sh[20]]++)
              if (bb[Sh[22]] = bb[-Sh[21]].indexOf(bb[Sh[11]][bb[-Sh[20]]]), bb[Sh[22]] !== -Sh[1])
                if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[Sh[22]];
                else {
                  ph(bb[Sh[23]] += bb[Sh[22]] * Sh[24], bb[Sh[25]] |= bb[Sh[23]] << bb[Sh[26]], bb[Sh[26]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                  do {
                    ph(bb[Sh[31]].push(bb[Sh[25]] & Sh[3]), bb[Sh[25]] >>= Sh[2], bb[Sh[26]] -= Sh[2])
                  } while (bb[Sh[26]] > Sh[16]);
                  bb[Sh[23]] = -Sh[1]
                } return bb[Sh[23]] > -Sh[1] && bb[Sh[31]].push((bb[Sh[25]] | bb[Sh[23]] << bb[Sh[26]]) & Sh[3]), Hh(bb[Sh[31]])
          }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
        }(Sh[66])) return bb[Sh[1]] + bb[Sh[11]]
    }

    function Zh() {}

    function Xh(bb, ub, hb, Bb = {}, Ob, Gb, Ub, Lb, Yb) {
      if (Ub || (Ub = function(...bb) {
          bb[Sh[4]] = Sh[0]
        }), Gb || (Gb = function(...bb) {
          return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = Ob(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
        }), Ob || (Ob = function(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb;
          for (ph(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = Sh[0], Gb = Sh[0], Ub = -Sh[1]), Lb = Sh[0]; Lb < hb; Lb++) {
            var Yb = 'Zd8c@Mlgh3DJeG!C?oQ)muHRpv.+j&L[BtOX2z1EN/:V74Yq|A5*<0aSsr~(I}`9K;P6"nU]T%bk{W^#w>ifx=y_$,F'.indexOf(ub[Lb]);
            if (Yb !== -Sh[1])
              if (Ub < Sh[0]) Ub = Yb;
              else {
                ph(Ub += Yb * Sh[24], Ob |= Ub << Gb, Gb += (Ub & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                do {
                  ph(Bb.push(Ob & Sh[3]), Ob >>= Sh[2], Gb -= Sh[2])
                } while (Gb > Sh[16]);
                Ub = -Sh[1]
              }
          }
          return Ub > -Sh[1] && Bb.push((Ob | Ub << Gb) & Sh[3]), Hh(Bb)
        }), Gb(Sh[124]) in Zh && Ub(), ph(Lb = void 0, Yb = {
          [Gb(Sh[69])]: function(bb, ub, hb) {
            hb || (hb = function(...bb) {
              var ub;
              ph(bb[Sh[4]] = Sh[0], ub = function(...bb) {
                ph(bb[Sh[4]] = Sh[1], this.LH = bb[Sh[0]], this.length = Sh[0], this.map = {}, this.head = Sh[32], this.tail = Sh[32])
              }, ub.prototype.get = function(bb) {
                var ub = this.map[bb];
                return ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -Sh[1]
              }, ub.prototype.put = function(...bb) {
                ph(bb[Sh[4]] = Sh[11], this.map[bb[Sh[0]]] ? (this.remove(this.map[bb[Sh[0]]]), this.insert(bb[Sh[0]], bb[Sh[1]])) : this.length === this.LH ? (this.remove(this.head), this.insert(bb[Sh[0]], bb[Sh[1]])) : (this.insert(bb[Sh[0]], bb[Sh[1]]), this.length++))
              }, ub.prototype.remove = function(...bb) {
                ph(bb[Sh[4]] = Sh[1], bb[-Sh[50]] = bb[Sh[0]].prev, bb[Sh[12]] = bb[Sh[0]].next), bb[Sh[12]] && (bb[Sh[12]].prev = bb[-Sh[50]]), bb[-Sh[50]] && (bb[-Sh[50]].next = bb[Sh[12]]), this.head === bb[Sh[0]] && (this.head = bb[Sh[12]]), this.tail === bb[Sh[0]] && (this.tail = bb[-Sh[50]]), delete this.map[bb[Sh[0]].key]
              }, ub.prototype.insert = function(...bb) {
                ph(bb[Sh[4]] = Sh[11], bb[Sh[51]] = new List(bb[Sh[0]], bb[Sh[1]]), this.tail ? (this.tail.next = bb[Sh[51]], bb[Sh[51]].prev = this.tail, this.tail = bb[Sh[51]]) : (this.tail = bb[Sh[51]], this.head = bb[Sh[51]]), this.map[bb[Sh[0]]] = bb[Sh[51]])
              }, console.log(ub))
            }), ub || (ub = function(...ub) {
              return ub[Sh[4]] = Sh[1], typeof Qu[ub[Sh[0]]] === Sh[8] ? Qu[ub[Sh[0]]] = bb(Ru[ub[Sh[0]]]) : Qu[ub[Sh[0]]]
            }), bb || (bb = function(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb;
              for (ph(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = Sh[0], Gb = Sh[0], Ub = -Sh[1]), Lb = Sh[0]; Lb < hb; Lb++) {
                var Yb = ';ltpUOA6DRJh?&ru@VIa[`"/v_Le]nm%ZSqsY4*fN!Hy|}E5X8Kb>o7w3g<WiG1~c)B9Cxz,2d$+Q^#{(0M=TF.k:Pj'.indexOf(ub[Lb]);
                if (Yb !== -Sh[1])
                  if (Ub < Sh[0]) Ub = Yb;
                  else {
                    ph(Ub += Yb * Sh[24], Ob |= Ub << Gb, Gb += (Ub & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                    do {
                      ph(Bb.push(Ob & Sh[3]), Ob >>= Sh[2], Gb -= Sh[2])
                    } while (Gb > Sh[16]);
                    Ub = -Sh[1]
                  }
              }
              return Ub > -Sh[1] && Bb.push((Ob | Ub << Gb) & Sh[3]), Hh(Bb)
            }), ub(102) in Zh && hb();
            var [
              [Bb, Ob, Gb], Ub
            ] = Yh;
            console[ub(103)]("" + Bb[Sh[52]](Sh[88]) + (ub(104) + ub(105)) + Gb[ub(106) + "me"] + ub(107) + Ob)
          }
        }), ub === Gb(Sh[90]) + Gb(109)) {
        Gb(110) + Sh[31] in Zh && (module.exports = async (bb = (...bb) => {
          throw bb[Sh[4]] = Sh[0], new Error(function(...bb) {
            if (bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8]) return Qu[bb[Sh[0]]] = function(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb = 'w7AyGv?WjNBC&O~+QIbn|(XlVP{g_="*R6>.Lc8tZ@)Du31e!<xkE^#r[Ss%TJ9`ofi2:0mU$z]hF4/p5H,;d}aMqYK';
              for (ph(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = Sh[0], Gb = Sh[0], Ub = -Sh[1]), Lb = Sh[0]; Lb < hb; Lb++) {
                var Sb = Yb.indexOf(ub[Lb]);
                if (Sb !== -Sh[1])
                  if (Ub < Sh[0]) Ub = Sb;
                  else {
                    ph(Ub += Sb * Sh[24], Ob |= Ub << Gb, Gb += (Ub & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                    do {
                      ph(Bb.push(Ob & Sh[3]), Ob >>= Sh[2], Gb -= Sh[2])
                    } while (Gb > Sh[16]);
                    Ub = -Sh[1]
                  }
              }
              Ub > -Sh[1] && Bb.push((Ob | Ub << Gb) & Sh[3]);
              return Hh(Bb)
            }(Ru[bb[Sh[0]]]);
            return Qu[bb[Sh[0]]]
          }(111))
        }) => {
          const ub = new Set(process.argv.slice(Sh[11]));
          if (!ub.has(function(bb) {
              if (typeof Qu[bb] === Sh[8]) return Qu[bb] = function(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[Sh[1]] = '(GcNu")O.!%8IeiS7fLos6AB+{D$vKPE#/=}>~Ut[lw^qbRF;MY<p|rdH*]9x3ma&5y124_WJg@zXjT,kQV:Cn0`Zh?', bb[Sh[53]] = "" + (bb[Sh[0]] || ""), bb[Sh[19]] = bb[Sh[53]].length, bb[Sh[10]] = [], bb[Sh[25]] = Sh[0], bb[Sh[54]] = Sh[0], bb[Sh[16]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[Sh[19]]; bb[Sh[2]]++)
                  if (bb[Sh[38]] = bb[Sh[1]].indexOf(bb[Sh[53]][bb[Sh[2]]]), bb[Sh[38]] !== -Sh[1])
                    if (bb[Sh[16]] < Sh[0]) bb[Sh[16]] = bb[Sh[38]];
                    else {
                      ph(bb[Sh[16]] += bb[Sh[38]] * Sh[24], bb[Sh[25]] |= bb[Sh[16]] << bb[Sh[54]], bb[Sh[54]] += (bb[Sh[16]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                      do {
                        ph(bb[Sh[10]].push(bb[Sh[25]] & Sh[3]), bb[Sh[25]] >>= Sh[2], bb[Sh[54]] -= Sh[2])
                      } while (bb[Sh[54]] > Sh[16]);
                      bb[Sh[16]] = -Sh[1]
                    } bb[Sh[16]] > -Sh[1] && bb[Sh[10]].push((bb[Sh[25]] | bb[Sh[16]] << bb[Sh[54]]) & Sh[3]);
                return Hh(bb[Sh[10]])
              }(Ru[bb]);
              return Qu[bb]
            }(112))) {
            if (ub.size !== Sh[1]) return Sh[55];
            if (!ub.has("-v")) return Sh[55]
          }
          return await (async () => {
            function ub(bb) {
              return typeof Qu[bb] === Sh[8] ? Qu[bb] = function(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[-Sh[57]] = '0lSPiAkpQBRh+.9$[j]HG,Fdqv<:s=x7_oV!2f~@My`O{^Z>|Uw&(nT"#65e}NbK4t1E/IY3%c?XWmLur8*z)Dg;JaC', bb[Sh[12]] = "" + (bb[Sh[0]] || ""), bb[Sh[56]] = bb[Sh[12]].length, bb[Sh[10]] = [], bb[Sh[7]] = Sh[0], bb[Sh[14]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[Sh[56]]; bb[Sh[2]]++)
                  if (bb[-Sh[58]] = bb[-Sh[57]].indexOf(bb[Sh[12]][bb[Sh[2]]]), bb[-Sh[58]] !== -Sh[1])
                    if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[-Sh[58]];
                    else {
                      ph(bb[Sh[23]] += bb[-Sh[58]] * Sh[24], bb[Sh[7]] |= bb[Sh[23]] << bb[Sh[14]], bb[Sh[14]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                      do {
                        ph(bb[Sh[10]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[14]] -= Sh[2])
                      } while (bb[Sh[14]] > Sh[16]);
                      bb[Sh[23]] = -Sh[1]
                    } bb[Sh[23]] > -Sh[1] && bb[Sh[10]].push((bb[Sh[7]] | bb[Sh[23]] << bb[Sh[14]]) & Sh[3]);
                return Hh(bb[Sh[10]])
              }(Ru[bb]) : Qu[bb]
            }
            return void 0 === await bb() ? ub(115) + "l)" : ""
          })(), Sh[76]
        }), Yh = []
      }
      if (ub === Gb(116) + Gb(117)) {
        function Sb(...ub) {
          var hb;
          if (ub[Sh[4]] = Sh[0], Gb(Sh[50]) in Zh && function(...bb) {
              function ub(...bb) {
                return bb[Sh[4]] = Sh[1], bb[Sh[0]][Sh[1]] * Sh[60] + (bb[Sh[0]][Sh[0]] < Sh[0] ? Sh[59] | bb[Sh[0]][Sh[0]] : bb[Sh[0]][Sh[0]])
              }

              function hb(bb) {
                switch (((bb & Sh[59]) !== Sh[0]) * Sh[1] + (bb < Sh[0]) * Sh[11]) {
                  case Sh[0]:
                    return [bb % Sh[59], Math.trunc(bb / Sh[60])];
                  case Sh[1]:
                    return [bb % Sh[59] - Sh[59], Math.trunc(bb / Sh[60]) + Sh[1]];
                  case Sh[11]:
                    return [((bb + Sh[59]) % Sh[59] + Sh[59]) % Sh[59], Math.round(bb / Sh[60])];
                  case Sh[19]:
                    return [bb % Sh[59], Math.trunc(bb / Sh[60])]
                }
              }
              bb[Sh[4]] = Sh[0], ph(bb[Sh[42]] = ub([Sh[11], Sh[10]]), bb[Sh[12]] = ub([Sh[1], Sh[11]]), bb[Sh[11]] = bb[Sh[42]] + bb[Sh[12]], bb[Sh[19]] = bb[Sh[11]] - bb[Sh[12]], bb[Sh[10]] = bb[Sh[19]] * Sh[11], bb[Sh[61]] = bb[Sh[10]] / Sh[11], console.log(hb(bb[Sh[11]])), console.log(hb(bb[Sh[19]])), console.log(hb(bb[Sh[10]])), console.log(hb(bb[Sh[61]])))
            }(), ph(hb = function(...ub) {
              return function(...bb) {
                return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(...bb) {
                  for (ph(bb[Sh[4]] = Sh[1], bb[Sh[63]] = 'dJrbYtgTBlqNnGa<6hWzo|.R{ED"0v(`#PSQpHs]MjALC/>?ZU!$fKycekOmI:w1Fi7)V+2~_5&=3,*u49@8[^%x};X', bb[Sh[62]] = "" + (bb[Sh[0]] || ""), bb[Sh[5]] = bb[Sh[62]].length, bb[-Sh[65]] = [], bb[Sh[7]] = Sh[0], bb[Sh[26]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[Sh[5]]; bb[Sh[2]]++)
                    if (bb[-Sh[64]] = bb[Sh[63]].indexOf(bb[Sh[62]][bb[Sh[2]]]), bb[-Sh[64]] !== -Sh[1])
                      if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[-Sh[64]];
                      else {
                        ph(bb[Sh[23]] += bb[-Sh[64]] * Sh[24], bb[Sh[7]] |= bb[Sh[23]] << bb[Sh[26]], bb[Sh[26]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                        do {
                          ph(bb[-Sh[65]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[26]] -= Sh[2])
                        } while (bb[Sh[26]] > Sh[16]);
                        bb[Sh[23]] = -Sh[1]
                      } return bb[Sh[23]] > -Sh[1] && bb[-Sh[65]].push((bb[Sh[7]] | bb[Sh[23]] << bb[Sh[26]]) & Sh[3]), Hh(bb[-Sh[65]])
                }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
              }(Sh[56]) in Zh && function(...bb) {
                bb[Sh[4]] = Sh[0]
              }(), Yh = ub, Yb[bb].apply(this)
            }, ub[Sh[12]] = Bb[bb]), ub[Sh[12]]) {
            function Ob(...bb) {
              for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = 'YzSt2D1r03F{&mTeyRL,=QK%4lhZJ;}Iwn~*No`cH!/s^MOi5f6)xv|kdWjVqC9BEuUg.pXbP<#>7AG+$:8@][?"_(a', bb[Sh[11]] = "" + (bb[Sh[0]] || ""), bb[Sh[5]] = bb[Sh[11]].length, bb[Sh[31]] = [], bb[Sh[7]] = Sh[0], bb[Sh[26]] = Sh[0], bb[Sh[68]] = -Sh[1]), bb[Sh[41]] = Sh[0]; bb[Sh[41]] < bb[Sh[5]]; bb[Sh[41]]++)
                if (bb[-Sh[67]] = bb[Sh[42]].indexOf(bb[Sh[11]][bb[Sh[41]]]), bb[-Sh[67]] !== -Sh[1])
                  if (bb[Sh[68]] < Sh[0]) bb[Sh[68]] = bb[-Sh[67]];
                  else {
                    ph(bb[Sh[68]] += bb[-Sh[67]] * Sh[24], bb[Sh[7]] |= bb[Sh[68]] << bb[Sh[26]], bb[Sh[26]] += (bb[Sh[68]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                    do {
                      ph(bb[Sh[31]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[26]] -= Sh[2])
                    } while (bb[Sh[26]] > Sh[16]);
                    bb[Sh[68]] = -Sh[1]
                  } return bb[Sh[68]] > -Sh[1] && bb[Sh[31]].push((bb[Sh[7]] | bb[Sh[68]] << bb[Sh[26]]) & Sh[3]), Hh(bb[Sh[31]])
            }

            function Ub(...bb) {
              return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = Ob(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
            }

            function Lb(...bb) {
              ph(bb[Sh[4]] = Sh[0], bb[Sh[42]] = function(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[-Sh[69]] = Sh[0], bb[Sh[12]] = {}, bb[Sh[5]] = Sh[0], bb[Sh[10]] = Sh[0], bb[Sh[25]] = Sh[0], bb[Sh[14]] = bb[Sh[0]].length), bb[Sh[29]] = Sh[0]; bb[Sh[29]] < bb[Sh[14]]; bb[Sh[29]]++) {
                  for (ph(bb[Sh[12]] = {}, bb[Sh[5]] = Sh[0], bb[Sh[10]] = Sh[1]), bb[Sh[2]] = bb[Sh[29]] + Sh[1]; bb[Sh[2]] < bb[Sh[14]]; bb[Sh[2]]++) bb[Sh[0]][bb[Sh[29]]].x !== bb[Sh[0]][bb[Sh[2]]].x || bb[Sh[0]][bb[Sh[29]]].y !== bb[Sh[0]][bb[Sh[2]]].y ? (bb[Sh[0]][bb[Sh[29]]].y === bb[Sh[0]][bb[Sh[2]]].y ? bb[Sh[25]] = Number.MAX_SAFE_INTEGER : bb[Sh[25]] = (bb[Sh[0]][bb[Sh[29]]].x - bb[Sh[0]][bb[Sh[2]]].x) / (bb[Sh[0]][bb[Sh[29]]].y - bb[Sh[0]][bb[Sh[2]]].y), bb[Sh[12]][bb[Sh[25]]] || (bb[Sh[12]][bb[Sh[25]]] = Sh[0]), ph(bb[Sh[12]][bb[Sh[25]]]++, bb[Sh[5]] = Math.max(bb[Sh[5]], bb[Sh[12]][bb[Sh[25]]]))) : bb[Sh[10]]++;
                  ph(bb[Sh[5]] += bb[Sh[10]], bb[-Sh[69]] = Math.max(bb[-Sh[69]], bb[Sh[5]]))
                }
                return bb[-Sh[69]]
              }, console.log(bb[Sh[42]]))
            }
            Ub(Sh[126]) in Zh && Lb(), ub[Sh[12]]
          }
          return hb
        }
        Lb = Lh[bb] || (Lh[bb] = Sb())
      } else {
        function ab(...bb) {
          for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = '4EjniGURkLeHDXPNJSrF~cl[ouvIA?{|(MyK)&O!*@q=%_pY.,:Z3#a7zTtW2Q68B}g1x/C"]V$>wh0m^b9sdf;5`+<', bb[Sh[70]] = "" + (bb[Sh[0]] || ""), bb[Sh[5]] = bb[Sh[70]].length, bb[Sh[17]] = [], bb[Sh[25]] = Sh[0], bb[Sh[14]] = Sh[0], bb[Sh[71]] = -Sh[1]), bb[Sh[41]] = Sh[0]; bb[Sh[41]] < bb[Sh[5]]; bb[Sh[41]]++)
            if (bb[Sh[72]] = bb[Sh[42]].indexOf(bb[Sh[70]][bb[Sh[41]]]), bb[Sh[72]] !== -Sh[1])
              if (bb[Sh[71]] < Sh[0]) bb[Sh[71]] = bb[Sh[72]];
              else {
                ph(bb[Sh[71]] += bb[Sh[72]] * Sh[24], bb[Sh[25]] |= bb[Sh[71]] << bb[Sh[14]], bb[Sh[14]] += (bb[Sh[71]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                do {
                  ph(bb[Sh[17]].push(bb[Sh[25]] & Sh[3]), bb[Sh[25]] >>= Sh[2], bb[Sh[14]] -= Sh[2])
                } while (bb[Sh[14]] > Sh[16]);
                bb[Sh[71]] = -Sh[1]
              } return bb[Sh[71]] > -Sh[1] && bb[Sh[17]].push((bb[Sh[25]] | bb[Sh[71]] << bb[Sh[14]]) & Sh[3]), Hh(bb[Sh[17]])
        }

        function Hb(...bb) {
          return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = ab(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
        }

        function wb(...bb) {
          function ub(...bb) {
            if (bb[Sh[4]] = Sh[1], !bb[Sh[0]]) return -Sh[1];
            const hb = ub(bb[Sh[0]].left),
              Bb = ub(bb[Sh[0]].right),
              Ob = Math.abs(hb - Bb);
            if (hb === 1 / 0 || Bb === 1 / 0 || Ob > Sh[1]) return 1 / 0;
            return Math.max(hb, Bb) + Sh[1]
          }
          bb[Sh[4]] = Sh[0], window[Hb(Sh[120]) + Hb(123) + function(...bb) {
            return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(...bb) {
              for (ph(bb[Sh[4]] = Sh[1], bb[Sh[1]] = 'N6B+95=!8WH{*S1g`0Gn#P~)ZO/y";u7M<]Vp@z?[3cvDw_$qj>}F2:4b%|U(.&dke,xQKr^YmlIfEsJaCtiARLhoTX', bb[-Sh[73]] = "" + (bb[Sh[0]] || ""), bb[Sh[74]] = bb[-Sh[73]].length, bb[Sh[10]] = [], bb[Sh[7]] = Sh[0], bb[Sh[14]] = Sh[0], bb[-Sh[75]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[Sh[74]]; bb[Sh[2]]++)
                if (bb[Sh[38]] = bb[Sh[1]].indexOf(bb[-Sh[73]][bb[Sh[2]]]), bb[Sh[38]] !== -Sh[1])
                  if (bb[-Sh[75]] < Sh[0]) bb[-Sh[75]] = bb[Sh[38]];
                  else {
                    ph(bb[-Sh[75]] += bb[Sh[38]] * Sh[24], bb[Sh[7]] |= bb[-Sh[75]] << bb[Sh[14]], bb[Sh[14]] += (bb[-Sh[75]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                    do {
                      ph(bb[Sh[10]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[14]] -= Sh[2])
                    } while (bb[Sh[14]] > Sh[16]);
                    bb[-Sh[75]] = -Sh[1]
                  } return bb[-Sh[75]] > -Sh[1] && bb[Sh[10]].push((bb[Sh[7]] | bb[-Sh[75]] << bb[Sh[14]]) & Sh[3]), Hh(bb[Sh[10]])
            }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
          }(124) + "_"] = {
            buildCharacterMap: function(...bb) {
              bb[Sh[4]] = Sh[1];
              const ub = {};
              for (let hb of bb[Sh[0]].replace(/[^w]/g, "").toLowerCase()) ub[hb] = ub[hb] + Sh[1] || Sh[1];
              return ub
            },
            isAnagrams: function(...bb) {
              bb[Sh[4]] = Sh[11];
              const ub = buildCharMap(bb[Sh[0]]),
                hb = buildCharMap(bb[Sh[1]]);
              for (let Bb in ub)
                if (ub[Bb] !== hb[Bb]) return Sh[55];
              return Object.keys(ub).length !== Object.keys(hb).length ? Sh[55] : Sh[76]
            },
            isBalanced: function(...bb) {
              return bb[Sh[4]] = Sh[1], ub(bb[Sh[0]]) !== 1 / 0
            },
            getHeightBalanced: ub
          }
        }
        Hb(Sh[67]) + Sh[41] in Zh && wb(), Lb = Yb[bb]()
      }
      if (hb === Gb(Sh[70]) + Gb(Sh[117])) {
        function Zb(...bb) {
          bb[Sh[4]] = Sh[0]
        }
        return Gb(Sh[77]) + "B" in Zh && Zb(), {
          [Gb(130) + Gb(Sh[87])]: Lb
        }
      } {
        function Xb(...bb) {
          bb[Sh[4]] = Sh[0]
        }
        return Gb(132) + "O" in Zh && Xb(), Lb
      }
    }

    function ph() {
      ph = function() {}
    }
    ph(Qu = {}, Ru = ["Bh(X{:on.vVH}?&(GL_j|9ud>=d5Bc9.!`suyrlm_tjPAqk_Q&lB", '|h~Jb?EA3A*uZA4DE09?y:jID{NX3s<DXHnS31lmz5:GV?"d$L4{}[N', '"$S3x:Q_%tin&sxh', "Y}tJ0RTI}e<uT@jChw", "WCfuh,9mgA8uR]*/kUV;@l3tMyzp+.<@gQr;ExEX?ArkJ]:t0?V{", "Idnj8$H$5mEIp?v:~Stda*y9:ZX3$ALtF4kO!,Tfs{YnpyI", "yq_rb[$v:fSe0s", "ddGoEp(tJ{", "*]9^:,Uw", "wjn`.RN", "omTSemg;Tq%IFbzdO%.Z]$zY_eu3<:N.OJs", "P4zS}!W.XM>V|cYfyjE;ioP=1MW~R*VKQ&xBDX};B", "YM@ZW`LSbmPshExh>B|;z`%d5f%;8j:V#L!GF$)w", "iVH0Lx8$W5qI@szD#iNX~&wfLtE|f|yC1SkdtG4Rh|8|e&a0", "WMv3RCZt2qP5+?`C{cOoIxt!cA|((E~c.heVWTn/*mPp_O#/P$P^5", 'j/("Z+dmye.AMpPfTB_0^le=uP', "2UZG3xef8qLj`&o0V1N_6;}2F{cGlp^ztZ83X&.;kf]nOOO_k4rj,b=d^M", ",>H06?h:E35VshsUx]xkmpz=>tEkj&;0c5!?Z%5.}|Xjkyw:CBXut[N", "|cKJ`qbws}ApmlN:HQ5VW;p!#aQ3+]s_`s6`VR_2", '8HYJk$3!2qiJb2O[;Z/j2HUwX|/]^OL.?st"aSDDgF)u3pDcKMp{"ZXw', "1c_VZ$wXwm@XGs6D({Q1u17$]3", "fyvS|lF_OfC^nyBc~H)Z<>)I@e)~e@9[{%a{N!HvO", '?|w"0Dq_R}2XAqVKKm*=g?mXcf~ejk', "Qs2ps1[;Lqx%+D^", "0101{lq_UP<m9.3[st{BN(}.YMF]/s0YqQQORECDm5RIeqF.I%?k_,//cFT", 'Z|k1DDsfytkS&s%:ps/`Pb;2>8{",qa(E00d8=N', 'I4w"%$+}>e', "oZg{(;MdvLevkC2M!>Fje;p;Y|PBIh(_Nm$I<bb,kZlw]*@5({x`#[pv>3a", "%HZIi:}2DqxP2z|5q?,VO1v!Df", '3?HI!?a/Ree9l&OUe4wSJ?sfOfy*6yHDYQ>^T]GBaM"9]sA[Vs=IT;CfMt', 'L&hX0R/;nt!tn?Kh,|+u4GzYH]KnJ?F:)L3"#r=4o{}"5ye"((x;[j[2', "xS+hBq^.UaG1EAYf<CsptlCfb{|AFs7fYL2", 'j>,0PH8.}]OBy[zYnz%Gk1II?AOx"hGf', 'L&Q?pG~Y?5L=M@6D2ZxB:E7}15#qQ"T4ZMuV[j~w3AYG@"3c?H2', "ft.`qpQ_QFG$M@A[6L:r<blY/MPQ>pIt", "/Q@_%q{AKMX3#j[.>hOo:axm]Hn=iA2.}$k1.", '+KMSoi&t3vx=!96(UQEIQ(MY~}T"wq.K)Ls', "9Q]J)GhF>=/&ps", "*VkOoc;$3^3sw", 'XSg`2&um2m.LgOTt+zyTGHxSP5(s5b&CTQ"d^1|v(qFJnyQc.5i?pGf=G|', "n0Dps$itXHNX?|c[QSQ1k=k:V8n$9q#/XN", "$QTZB&ktl};a$E)D!B@Z7n$;_e", "Vcp`#>J:#t3Aj@Cc.QoJnmn$s{@QQ&sc@cXd%v;/2y612*4YJcHI", 'hQ1=F(&_WHHj"hc_p>YSCj~dI5)~yoKh{j91#H+(X|7M9.TK)iV0{:N', "sqhuN$Sf,f*aC*&(<=zX;pAR`H+3izBt*c_VO=AfUP/HepV_", "v>>Gi(23~q/^{qA5V$_k{ma2s", "<L9I*buA+F..w", 'ZhCk>*h_{vp~~ieD~ZkI(#Q$W5e(Q"(4L4&Zu1DDPLY', '?KTSD`Bv<Lbyqy7CF`rG*o53jq`nRR"Yc1JBhZv$S}c`"]s_`S?;_#xS5Ah', 'F/g;GrjRAH3X3"[VIkErQr~m=fQnk@HD', 'is,IG[a/`5(]lp2:ySX1Sibw,Z)}LqWKYHGI"', 't/=^8:W}eFFDW9f"KSnjqu_!1HrGppn(Aj%;D/Uw', 'rS,hv+ddq=;9&qd:s8CjExI=v]iijj+"Mmw_H=,Y%}kp|h+"8ZrB|Gh21P+%w', '"y[r,G%DSf;%~v@/(("p./*$3A=`CR?zOU9oA9"d8%IQ+bcz&?_;SSN', '7cI;vuxd"]RVO@ktAyfdO(o/b}x=y|]:,VO1S$URU5TGV[YziN', "e1zZul(F*qSe^E6Ka&|T2$B_>tEuSihdc1d^/D4Do%DxtOoC[Qs", 'ddPJ"[XY3^}*Doh:#M?k9q5:$](8e@8cft~d7i1!_8kQw', "S&nZ#&@:d|", '[ZH`%x0tY5E%k?QtM?er0[N.|t~`N:e"dw', "vHzSV`g:(}wpM@Rh71C0Pm.;_yeAJ]Pho>f^lb51^|iiN", 'KQGhBp"D)5(xoim04{~J)>UAvLVLX|HK1axjV;6(R8n:KAQ[qV#V}9:;.M', 'H4e^"]sYsf(p5b7f6N', "sefuGowYn=>;_j=YH|HV$uOI$ym`}:VdE|E13H8tv5<1N", "SmRk2&mDfm2_ns+g{dfuUE,A^|KnU|t0J/=r{rbxOA+q`kk_f%GIq$N", "uLkoLqk.I", 'fJj"Z*ywJ{`JgO*CseR;Ki+.?5R8@"6Kk?c^flYm`5C0HAc[Z|vJs!Lw', 'HHXo3!Z;s{y*(AJ:E?"^=cMd6MPQ=kBVE|d1G9h3AHAcw', 'NkxGMm*voy;Db2$"2JkOKQVmKLh&fhj/:}!I~&dX*Z:pP]?cND)j3:N', "/haB@b6;$3nw4oi[(sJ`SSTDVytSyh#hLV!k|mo;>|", "qha{%+1_xq4vu:_Kr|c1Sv#B{r.", "`>*O*#uI@{u3vji.N}}1KXRASqY`O:]4hhN#2!H2", "d4W3Wm(tN}9nFb*0_(4je", "(s<B&*+/nmhACvs_!imB", "X]?B3lXSJe+d~[*({mu0PowzI", "[mx{zR:}|%Zn*h%dZ>_;X&3:{rmir[E4;>S1+GFnPMSa@yI.!Sb=t", "smYJfoK;Jy~`*|Z0KmZjV]H$pM79e&?z`Mk1?HbISqv", "S}Su*9GB7LU8izA", "4{uVt[#;jZ!}hlrY~>(Xja?AO", "fZIBfbtn>]CH&RaD@JA^1GJ_N{+dw", '0{dIq&cI"||X6sN_iH4k#r=Do}4GQ.ZY~>=^4m+vu=j', '5BITTZ:;Of.B"|6D&Z"^hZw=nt+z}?UCNmSp5', "2yq1!T]RvP6g;bf(JQm3", "o&S=oX!.vHLiZA|", 'S(Br49oF{L6~V*XCr5"JIx<MtmiqXh[[hyOI)[t.7H11f*9f~Mt"xG3!$t^Lw', "N$Cjfb4=3A", "VQzZo$XS$PZ`4sw4y{KSfb9d@8uw~*}CZLk^", "?HGh`m!nE=K;ckqD0/E1N!zDO", '9K_;5[4w`v,oM@%M"$y{$E+/UPwXsblCXBW3)R>,k', "j>+oylL4W]_|ay!@rLvJG[1.VqeBuqsMiQ2", "b(1Ja*qtK]gLw", '"/Ups$#;8ffXIhQM,]40v(Tllm?JEqh:Mh,oF(N', 'CBMZ/akF"]ma+sj/6`?0vvIwq=Z', "$o`/SrN0", "B14TEpbw", "8S[Vul52", ']"H[j^58', "A%]o0e1K", '3z]F5b.;}?,>DRK%)pP_JJh<EoL6WQK%Eq+nE)3k(X6C"M)zQzaH_', 'EN3kn)$BuA"?FqRKTm9ayy_W<=gvG;RK?J[r@@6bTn"|w#FdiL', "?&jJs0+M{$QhkeD22&=aGFsv]x^mtsCGO_bm4", "qhDv", "u;!g~0}d", "{WN8toKt", "Cb>^y(;", "ijNUKfJl", 'Zg=D,";', "w,sZ?w?t", "Eje=FNZ;", "<N+&1Nrd", "d&u[Q", "S`Sl#]_d", 'vD/e*UhWDI9EcGtt"SQN//,ahfnk)<&', ")~Q#lkS||od", "LFhRU/~S", "zPim}mGS", "LFSm)I+S", "c9f0E%gd", "r;{]v", "*.6B%n?8", "IDtcXftJ", "8<bJ]`NS", "]x|{h/@E", "[`oUC7@E", "=yb>b:YE", "EwW}:|8B", "BcBlUT]d", "_!8*o", "%(eDE}(d", "CN<^G&pA", "2l1bGV5D", "6aht]>Md", "/RYSv", "KRUgc6)d", "p2rH0=0[", "4_R8o`o[", "Djen", "ga`d3P?&sX#", "kr`@7dtQ,YB", "+p%GH.5^a&p", "/>~A7+1CD%]", "~pJ`,o:K4Y{", "+@[%`+Qeh)>", "~pE%*L&KLYp", "E]m{DzW~", '+l^"I5>O', "n3wn[T]0", "d&~+u", "e8hxQMI0", "n3wnV>NE", "H}h@/", "Zj</7l^?7=5", "*mzsM,dR5b4", "hXCv^Hvv&|T", "ViDmR~UVT[.", "N<X%#u__WnX", "`|gInggqT.>", "1%_5J^;CM,:", 'k+"%Tl~O', "=Lc+rbk[", "={gaMR!H", "VVZ#/:P8Kk", "`wqK%tF", "6gW,k=7(!", "`wqK%t)O", "l%8W", "R`7tBV<C", "FPd9^Ms", '($]T+"`O', "f?L9HcCO", "+3~CS*x;", "2+@`XY^;", 'DHf+g@?d!GtlIx]43UWvPP*mB9pcTa]4B(Z1B3D|"}cVuM3HaH$sv', "/8G1Z`U3?MNA<x@}w(_YssCc&#tk|{@}AQIVee^RwZNoDW<r=a", "Zv@`yNj=2U,DG|://vi?M*y;0oOp1yuMV]rpg", "xD:;", "<@T`T", ">lh`U=5;", "z5&[7", "dbE{U]4F", "ZKmr;_dG", "wVb.zz2G", "3RI>GIKf", ">1/>U*?J>`", 'ZQr"r', 'ZQr"Oq,!HX*=H', "nmX`VH*a[5ox>]BmcgD3Pp);", "z5*kK*X:(W5zd.:/kl*k>m96", "n%.gkN!~#cfyY]yM[j!`tNA;"]), ph(bh = function(...bb) {
      ph(bb[Sh[4]] = Sh[0], bb[-Sh[6]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[Sh[1]] = Sh[9], bb[Sh[5]] = []);
      try {
        ph(bb[Sh[1]] = Object, bb[Sh[5]][Sh[18]]("".__proto__.constructor.name))
      } catch (Ru) {}
      bb: for (bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[-Sh[6]][Sh[4]]; bb[Sh[2]]++) try {
        for (bb[Sh[1]] = bb[-Sh[6]][bb[Sh[2]]](), bb[Sh[7]] = Sh[0]; bb[Sh[7]] < bb[Sh[5]][Sh[4]]; bb[Sh[7]]++)
          if (typeof bb[Sh[1]][bb[Sh[5]][bb[Sh[7]]]] === Sh[8]) continue bb;
        return bb[Sh[1]]
      } catch (Ru) {}
      return bb[Sh[1]] || this
    }() || {}, uh = bh.TextDecoder, hh = bh.Uint8Array, Bh = bh[Sh[123]], Oh = bh.String || String, Gh = bh.Array || Array, Uh = function() {
      var bb, ub, hb = new Gh(Sh[81]);
      return ph(bb = Oh[Sh[15]] || Oh.fromCharCode, ub = []),
        function(...Bb) {
          for (ph(Bb[Sh[4]] = Sh[1], Bb[Sh[1]] = Sh[9], Bb[Sh[12]] = Sh[9], Bb[Sh[11]] = Bb[Sh[0]][Sh[4]], ub[Sh[4]] = Sh[0]), Bb[Sh[10]] = Sh[0]; Bb[Sh[10]] < Bb[Sh[11]];) ph(Bb[Sh[12]] = Bb[Sh[0]][Bb[Sh[10]]++], Bb[Sh[12]] <= Sh[77] ? Bb[Sh[1]] = Bb[Sh[12]] : Bb[Sh[12]] <= 223 ? Bb[Sh[1]] = (Bb[Sh[12]] & Sh[109]) << Sh[14] | Bb[Sh[0]][Bb[Sh[10]]++] & Sh[13] : Bb[Sh[12]] <= 239 ? Bb[Sh[1]] = (Bb[Sh[12]] & Sh[102]) << Sh[17] | (Bb[Sh[0]][Bb[Sh[10]]++] & Sh[13]) << Sh[14] | Bb[Sh[0]][Bb[Sh[10]]++] & Sh[13] : Oh[Sh[15]] ? Bb[Sh[1]] = (Bb[Sh[12]] & Sh[16]) << Sh[71] | (Bb[Sh[0]][Bb[Sh[10]]++] & Sh[13]) << Sh[17] | (Bb[Sh[0]][Bb[Sh[10]]++] & Sh[13]) << Sh[14] | Bb[Sh[0]][Bb[Sh[10]]++] & Sh[13] : (Bb[Sh[1]] = Sh[13], Bb[Sh[10]] += Sh[19]), ub[Sh[18]](hb[Bb[Sh[1]]] || (hb[Bb[Sh[1]]] = bb(Bb[Sh[1]]))));
          return ub[Sh[52]]("")
        }
    }()), ah(Sh[34]) in Zh && function(...bb) {
      bb[Sh[4]] = Sh[0]
    }(), ph(Lh = Object[ah(94)](Sh[32]), Yh = void 0), (() => {
      function bb(...bb) {
        return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(...bb) {
          for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = 'sO[ad/j1nTKA&B_>6fX)kv0Y]m@H#W8Z+;Pc5thQ?RrVSEqGl%p$}*2|3=N!oCzDI7yeLMw":~iFJ9u`bg,<^{(4.Ux', bb[Sh[84]] = "" + (bb[Sh[0]] || ""), bb[-Sh[85]] = bb[Sh[84]].length, bb[Sh[86]] = [], bb[Sh[7]] = Sh[0], bb[Sh[26]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[-Sh[85]]; bb[Sh[2]]++)
            if (bb[Sh[72]] = bb[Sh[42]].indexOf(bb[Sh[84]][bb[Sh[2]]]), bb[Sh[72]] !== -Sh[1])
              if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[Sh[72]];
              else {
                ph(bb[Sh[23]] += bb[Sh[72]] * Sh[24], bb[Sh[7]] |= bb[Sh[23]] << bb[Sh[26]], bb[Sh[26]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                do {
                  ph(bb[Sh[86]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[26]] -= Sh[2])
                } while (bb[Sh[26]] > Sh[16]);
                bb[Sh[23]] = -Sh[1]
              } return bb[Sh[23]] > -Sh[1] && bb[Sh[86]].push((bb[Sh[7]] | bb[Sh[23]] << bb[Sh[26]]) & Sh[3]), Hh(bb[Sh[86]])
        }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
      }
      bb(133) in Zh && function(...bb) {
        ph(bb[Sh[4]] = Sh[0], bb[-Sh[87]] = function(ub) {
          var hb = [];
          return (ub === Sh[1] || ub >= Sh[10]) && bb[Sh[30]](hb, [], ub, Sh[0]), hb
        }, bb[Sh[30]] = function(...ub) {
          for (ub[Sh[4]] = Sh[10], ub[Sh[10]] = ub[Sh[19]]; ub[Sh[10]] < ub[Sh[11]]; ub[Sh[10]]++) {
            if (ub[Sh[1]].length !== ub[Sh[10]]) return;
            for (ub[Sh[12]] = Sh[0]; ub[Sh[12]] < ub[Sh[11]]; ub[Sh[12]]++) bb[-Sh[89]](ub[Sh[1]], [ub[Sh[10]], ub[Sh[12]]]) && (ph(ub[Sh[1]].push([ub[Sh[10]], ub[Sh[12]]]), bb[Sh[30]](ub[Sh[0]], ub[Sh[1]], ub[Sh[11]], ub[Sh[10]] + Sh[1])), ub[Sh[1]].length === ub[Sh[11]] && ub[Sh[0]].push(bb[Sh[19]](ub[Sh[1]])), ub[Sh[1]].pop())
          }
        }, bb[Sh[19]] = function(bb) {
          var ub, hb, Bb = [];
          for (ub = bb.length, hb = Sh[0]; hb < ub; hb++) {
            var Ob;
            for (Bb[hb] = "", Ob = Sh[0]; Ob < ub; Ob++) Bb[hb] += bb[hb][Sh[1]] === Ob ? "Q" : Sh[88]
          }
          return Bb
        }, bb[-Sh[89]] = function(...bb) {
          for (ph(bb[Sh[4]] = Sh[11], bb[Sh[42]] = bb[Sh[0]].length), bb[Sh[19]] = Sh[0]; bb[Sh[19]] < bb[Sh[42]]; bb[Sh[19]]++) {
            if (bb[Sh[0]][bb[Sh[19]]][Sh[0]] === bb[Sh[1]][Sh[0]] || bb[Sh[0]][bb[Sh[19]]][Sh[1]] === bb[Sh[1]][Sh[1]]) return Sh[55];
            if (Math.abs((bb[Sh[0]][bb[Sh[19]]][Sh[0]] - bb[Sh[1]][Sh[0]]) / (bb[Sh[0]][bb[Sh[19]]][Sh[1]] - bb[Sh[1]][Sh[1]])) === Sh[1]) return Sh[55]
          }
          return Sh[76]
        }, console.log(bb[-Sh[87]]))
      }(), ph(Tu = (...ub) => {
        ub[Sh[4]] = Sh[1], bb(134) in Zh && function(...ub) {
          ph(ub[Sh[4]] = Sh[0], ub[Sh[90]] = function(...ub) {
            function hb(...bb) {
              return bb[Sh[4]] = Sh[1], Yb(Ub(Hb(bb[Sh[0]])))
            }

            function Bb(...bb) {
              return bb[Sh[4]] = Sh[11], Yb(Lb(Hb(bb[Sh[0]]), Hb(bb[Sh[1]])))
            }

            function Ob(bb, ub) {
              return Sb(Lb(Hb(bb), Hb(ub)))
            }

            function Gb(...bb) {
              return bb[Sh[4]] = Sh[19], ab(Lb(Hb(bb[Sh[0]]), Hb(bb[Sh[1]])), bb[Sh[11]])
            }

            function Ub(...bb) {
              return bb[Sh[4]] = Sh[1], Zb(db(wb(bb[Sh[0]]), bb[Sh[0]].length * Sh[2]))
            }

            function Lb(...bb) {
              function ub(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = ')~%:Yr>Q_mvi@yu]sJ9xOE1K[2R06M&baD^/?lF.CfTk8WdNU|hVgc*BS}I(;!peX7$nGo3Hq4,{=tzjZw"<PL+`5#A', bb[Sh[12]] = "" + (bb[Sh[0]] || ""), bb[Sh[19]] = bb[Sh[12]].length, bb[Sh[31]] = [], bb[Sh[7]] = Sh[0], bb[Sh[26]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[-Sh[58]] = Sh[0]; bb[-Sh[58]] < bb[Sh[19]]; bb[-Sh[58]]++)
                  if (bb[-Sh[93]] = bb[Sh[42]].indexOf(bb[Sh[12]][bb[-Sh[58]]]), bb[-Sh[93]] !== -Sh[1])
                    if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[-Sh[93]];
                    else {
                      ph(bb[Sh[23]] += bb[-Sh[93]] * Sh[24], bb[Sh[7]] |= bb[Sh[23]] << bb[Sh[26]], bb[Sh[26]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                      do {
                        ph(bb[Sh[31]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[26]] -= Sh[2])
                      } while (bb[Sh[26]] > Sh[16]);
                      bb[Sh[23]] = -Sh[1]
                    } return bb[Sh[23]] > -Sh[1] && bb[Sh[31]].push((bb[Sh[7]] | bb[Sh[23]] << bb[Sh[26]]) & Sh[3]), Hh(bb[Sh[31]])
              }

              function hb(...bb) {
                return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = ub(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
              }
              bb[Sh[4]] = Sh[11], bb[Sh[42]] = wb(bb[Sh[0]]), bb[Sh[42]].length > Sh[94] && (bb[Sh[42]] = db(bb[Sh[42]], bb[Sh[0]].length * Sh[2]));
              var Bb = Array(Sh[94]),
                Ob = Array(Sh[94]);
              for (bb[Sh[12]] = Sh[0]; bb[Sh[12]] < Sh[94]; bb[Sh[12]]++) ph(Bb[bb[Sh[12]]] = 909522486 ^ bb[Sh[42]][bb[Sh[12]]], Ob[bb[Sh[12]]] = 1549556828 ^ bb[Sh[42]][bb[Sh[12]]]);
              return bb[Sh[10]] = db(Bb.concat(wb(bb[Sh[1]])), Sh[95] + bb[Sh[1]].length * Sh[2]), Zb(db(Ob.concat(bb[Sh[10]]), wh(hb(143), Sh[95], 256)))
            }

            function Yb(...hb) {
              function Bb(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[-Sh[96]] = 't0Ev;1*Gf~9&}7NIFu2",XWmC/inBK`HeLVkMoy)w]{$JTU!8l<+Y@%4Rr_aszj(Q3A^>D=xOSbpg#c[PZ6qh:|5.?d', bb[-Sh[97]] = "" + (bb[Sh[0]] || ""), bb[Sh[98]] = bb[-Sh[97]].length, bb[Sh[31]] = [], bb[Sh[7]] = Sh[0], bb[-Sh[99]] = Sh[0], bb[Sh[16]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[Sh[98]]; bb[Sh[2]]++)
                  if (bb[Sh[72]] = bb[-Sh[96]].indexOf(bb[-Sh[97]][bb[Sh[2]]]), bb[Sh[72]] !== -Sh[1])
                    if (bb[Sh[16]] < Sh[0]) bb[Sh[16]] = bb[Sh[72]];
                    else {
                      ph(bb[Sh[16]] += bb[Sh[72]] * Sh[24], bb[Sh[7]] |= bb[Sh[16]] << bb[-Sh[99]], bb[-Sh[99]] += (bb[Sh[16]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                      do {
                        ph(bb[Sh[31]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[-Sh[99]] -= Sh[2])
                      } while (bb[-Sh[99]] > Sh[16]);
                      bb[Sh[16]] = -Sh[1]
                    } return bb[Sh[16]] > -Sh[1] && bb[Sh[31]].push((bb[Sh[7]] | bb[Sh[16]] << bb[-Sh[99]]) & Sh[3]), Hh(bb[Sh[31]])
              }

              function Ob(bb) {
                return typeof Qu[bb] === Sh[8] ? Qu[bb] = Bb(Ru[bb]) : Qu[bb]
              }
              hb[Sh[4]] = Sh[1];
              try {
                ub[-Sh[100]]
              } catch (Gb) {
                ub[-Sh[100]] = Sh[0]
              }
              for (ph(hb[Sh[1]] = ub[-Sh[100]] ? bb(144) + Ob(Sh[101]) + Ob(146) : Ob(147) + Ob(Sh[39]) + Ob(149), hb[Sh[11]] = "", hb[-Sh[43]] = Sh[9]), hb[Sh[13]] = Sh[0]; hb[Sh[13]] < hb[Sh[0]].length; hb[Sh[13]]++) ph(hb[-Sh[43]] = hb[Sh[0]].charCodeAt(hb[Sh[13]]), hb[Sh[11]] += hb[Sh[1]].charAt(hb[-Sh[43]] >>> Sh[10] & Sh[102]) + hb[Sh[1]].charAt(hb[-Sh[43]] & Sh[102]));
              return hb[Sh[11]]
            }

            function Sb(...hb) {
              function Bb(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[Sh[1]] = '1Rx3GwM@_ilJWObQhF[z;:kE>U+5!sDm`#<L9=^7p4fY)yCVTr/Sv.%,BXq2|H(coned}*?P~AK0ZIu{6&]"gNat$8j', bb[Sh[12]] = "" + (bb[Sh[0]] || ""), bb[Sh[19]] = bb[Sh[12]].length, bb[Sh[10]] = [], bb[Sh[7]] = Sh[0], bb[Sh[14]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[Sh[11]] = Sh[0]; bb[Sh[11]] < bb[Sh[19]]; bb[Sh[11]]++)
                  if (bb[-Sh[103]] = bb[Sh[1]].indexOf(bb[Sh[12]][bb[Sh[11]]]), bb[-Sh[103]] !== -Sh[1])
                    if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[-Sh[103]];
                    else {
                      ph(bb[Sh[23]] += bb[-Sh[103]] * Sh[24], bb[Sh[7]] |= bb[Sh[23]] << bb[Sh[14]], bb[Sh[14]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                      do {
                        ph(bb[Sh[10]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[14]] -= Sh[2])
                      } while (bb[Sh[14]] > Sh[16]);
                      bb[Sh[23]] = -Sh[1]
                    } return bb[Sh[23]] > -Sh[1] && bb[Sh[10]].push((bb[Sh[7]] | bb[Sh[23]] << bb[Sh[14]]) & Sh[3]), Hh(bb[Sh[10]])
              }

              function Ob(...bb) {
                return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = Bb(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
              }
              hb[Sh[4]] = Sh[1];
              try {
                ub[Sh[1]]
              } catch (Gb) {
                ub[Sh[1]] = ""
              }
              for (ph(hb[Sh[1]] = bb(150) + Ob(151) + Ob(Sh[45]) + Ob(153) + Ob(154) + Ob(155) + Ob(Sh[33]) + Sh[104], hb[Sh[106]] = "", hb[Sh[19]] = hb[Sh[0]].length), hb[Sh[105]] = Sh[0]; hb[Sh[105]] < hb[Sh[19]]; hb[Sh[105]] += Sh[19])
                for (hb[Sh[7]] = hb[Sh[0]].charCodeAt(hb[Sh[105]]) << Sh[94] | (hb[Sh[105]] + Sh[1] < hb[Sh[19]] ? hb[Sh[0]].charCodeAt(hb[Sh[105]] + Sh[1]) << Sh[2] : Sh[0]) | (hb[Sh[105]] + Sh[11] < hb[Sh[19]] ? hb[Sh[0]].charCodeAt(hb[Sh[105]] + Sh[11]) : Sh[0]), hb[Sh[26]] = Sh[0]; hb[Sh[26]] < Sh[10]; hb[Sh[26]]++) hb[Sh[105]] * Sh[2] + hb[Sh[26]] * Sh[14] > hb[Sh[0]].length * Sh[2] ? hb[Sh[106]] += ub[Sh[1]] : hb[Sh[106]] += hb[Sh[1]].charAt(hb[Sh[7]] >>> Sh[14] * (Sh[19] - hb[Sh[26]]) & Sh[13]);
              return hb[Sh[106]]
            }

            function ab(...bb) {
              var ub, hb, Bb, Ob;
              for (ph(bb[Sh[4]] = Sh[11], bb[Sh[11]] = bb[Sh[1]].length, bb[Sh[107]] = Array()), bb[Sh[5]] = Array(Math.ceil(bb[Sh[0]].length / Sh[11])), ub = Sh[0]; ub < bb[Sh[5]].length; ub++) bb[Sh[5]][ub] = bb[Sh[0]].charCodeAt(ub * Sh[11]) << Sh[2] | bb[Sh[0]].charCodeAt(ub * Sh[11] + Sh[1]);
              for (; bb[Sh[5]].length > Sh[0];) {
                for (ph(Ob = Array(), Bb = Sh[0]), ub = Sh[0]; ub < bb[Sh[5]].length; ub++) ph(Bb = (Bb << Sh[94]) + bb[Sh[5]][ub], hb = Math.floor(Bb / bb[Sh[11]]), Bb -= hb * bb[Sh[11]]), (Ob.length > Sh[0] || hb > Sh[0]) && (Ob[Ob.length] = hb);
                ph(bb[Sh[107]][bb[Sh[107]].length] = Bb, bb[Sh[5]] = Ob)
              }
              for (bb[Sh[31]] = "", ub = bb[Sh[107]].length - Sh[1]; ub >= Sh[0]; ub--) bb[Sh[31]] += bb[Sh[1]].charAt(bb[Sh[107]][ub]);
              for (bb[-Sh[17]] = Math.ceil(bb[Sh[0]].length * Sh[2] / (Math.log(bb[Sh[1]].length) / Math.log(Sh[11]))), ub = bb[Sh[31]].length; ub < bb[-Sh[17]]; ub++) bb[Sh[31]] = bb[Sh[1]][Sh[0]] + bb[Sh[31]];
              return bb[Sh[31]]
            }

            function Hb(...bb) {
              var ub, hb;
              for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = "", bb[Sh[11]] = -Sh[1]); ++bb[Sh[11]] < bb[Sh[0]].length;) ph(ub = bb[Sh[0]].charCodeAt(bb[Sh[11]]), hb = bb[Sh[11]] + Sh[1] < bb[Sh[0]].length ? bb[Sh[0]].charCodeAt(bb[Sh[11]] + Sh[1]) : Sh[0]), 55296 <= ub && ub <= 56319 && 56320 <= hb && hb <= 57343 && ph(ub = 65536 + ((ub & Sh[108]) << Sh[113]) + (hb & Sh[108]), bb[Sh[11]]++), ub <= Sh[77] ? bb[Sh[42]] += String.fromCharCode(ub) : ub <= 2047 ? bb[Sh[42]] += String.fromCharCode(Sh[79] | ub >>> Sh[14] & Sh[109], Sh[81] | ub & Sh[13]) : ub <= Sh[116] ? bb[Sh[42]] += String.fromCharCode(224 | ub >>> Sh[17] & Sh[102], Sh[81] | ub >>> Sh[14] & Sh[13], Sh[81] | ub & Sh[13]) : ub <= 2097151 && (bb[Sh[42]] += String.fromCharCode(240 | ub >>> Sh[71] & Sh[16], Sh[81] | ub >>> Sh[17] & Sh[13], Sh[81] | ub >>> Sh[14] & Sh[13], Sh[81] | ub & Sh[13]));
              return bb[Sh[42]]
            }

            function wb(bb) {
              var ub, hb = Array(bb.length >> Sh[11]);
              for (ub = Sh[0]; ub < hb.length; ub++) hb[ub] = Sh[0];
              for (ub = Sh[0]; ub < bb.length * Sh[2]; ub += Sh[2]) hb[ub >> Sh[25]] |= (bb.charCodeAt(ub / Sh[2]) & Sh[3]) << Sh[112] - ub % Sh[61];
              return hb
            }

            function Zb(...bb) {
              for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = ""), bb[Sh[11]] = Sh[0]; bb[Sh[11]] < bb[Sh[0]].length * Sh[61]; bb[Sh[11]] += Sh[2]) bb[Sh[42]] += String.fromCharCode(bb[Sh[0]][bb[Sh[11]] >> Sh[25]] >>> Sh[112] - bb[Sh[11]] % Sh[61] & Sh[3]);
              return bb[Sh[42]]
            }

            function Xb(...bb) {
              return bb[Sh[4]] = Sh[11], bb[Sh[0]] >>> bb[Sh[1]] | bb[Sh[0]] << Sh[61] - bb[Sh[1]]
            }

            function pb(bb, ub) {
              return bb >>> ub
            }

            function ob(...bb) {
              return bb[Sh[4]] = Sh[19], bb[Sh[0]] & bb[Sh[1]] ^ ~bb[Sh[0]] & bb[Sh[11]]
            }

            function Ab(bb, ub, hb) {
              return bb & ub ^ bb & hb ^ ub & hb
            }

            function lb(...bb) {
              return bb[Sh[4]] = Sh[1], Xb(bb[Sh[0]], Sh[11]) ^ Xb(bb[Sh[0]], Sh[29]) ^ Xb(bb[Sh[0]], 22)
            }

            function Kb(...bb) {
              return bb[Sh[4]] = Sh[1], Xb(bb[Sh[0]], Sh[14]) ^ Xb(bb[Sh[0]], Sh[78]) ^ Xb(bb[Sh[0]], 25)
            }

            function Wb(...bb) {
              return bb[Sh[4]] = Sh[1], Xb(bb[Sh[0]], Sh[16]) ^ Xb(bb[Sh[0]], Sh[71]) ^ pb(bb[Sh[0]], Sh[19])
            }

            function Cb(...bb) {
              return bb[Sh[4]] = Sh[1], Xb(bb[Sh[0]], Sh[99]) ^ Xb(bb[Sh[0]], Sh[114]) ^ pb(bb[Sh[0]], Sh[113])
            }

            function db(...bb) {
              var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb;
              for (ph(bb[Sh[4]] = Sh[11], bb[Sh[42]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), bb[Sh[12]] = new Array(Sh[63])), ph(bb[Sh[0]][bb[Sh[1]] >> Sh[25]] |= Sh[81] << Sh[112] - bb[Sh[1]] % Sh[61], bb[Sh[0]][(bb[Sh[1]] + Sh[63] >> Sh[72] << Sh[10]) + Sh[102]] = bb[Sh[1]]), ab = Sh[0]; ab < bb[Sh[0]].length; ab += Sh[94]) {
                for (ph(hb = bb[Sh[42]][Sh[0]], Bb = bb[Sh[42]][Sh[1]], Ob = bb[Sh[42]][Sh[11]], Gb = bb[Sh[42]][Sh[19]], Ub = bb[Sh[42]][Sh[10]], Lb = bb[Sh[42]][Sh[25]], Yb = bb[Sh[42]][Sh[14]], Sb = bb[Sh[42]][Sh[16]]), Hb = Sh[0]; Hb < Sh[63]; Hb++) ph(bb[Sh[12]][Hb] = Hb < Sh[94] ? bb[Sh[0]][Hb + ab] : rb(rb(rb(Cb(bb[Sh[12]][Hb - Sh[11]]), bb[Sh[12]][Hb - Sh[16]]), Wb(bb[Sh[12]][Hb - Sh[102]])), bb[Sh[12]][Hb - Sh[94]]), wb = rb(rb(rb(rb(Sb, Kb(Ub)), ob(Ub, Lb, Yb)), ub[Sh[31]][Hb]), bb[Sh[12]][Hb]), Zb = rb(lb(hb), Ab(hb, Bb, Ob)), Sb = Yb, Yb = Lb, Lb = Ub, Ub = rb(Gb, wb), Gb = Ob, Ob = Bb, Bb = hb, hb = rb(wb, Zb));
                ph(bb[Sh[42]][Sh[0]] = rb(hb, bb[Sh[42]][Sh[0]]), bb[Sh[42]][Sh[1]] = rb(Bb, bb[Sh[42]][Sh[1]]), bb[Sh[42]][Sh[11]] = rb(Ob, bb[Sh[42]][Sh[11]]), bb[Sh[42]][Sh[19]] = rb(Gb, bb[Sh[42]][Sh[19]]), bb[Sh[42]][Sh[10]] = rb(Ub, bb[Sh[42]][Sh[10]]), bb[Sh[42]][Sh[25]] = rb(Lb, bb[Sh[42]][Sh[25]]), bb[Sh[42]][Sh[14]] = rb(Yb, bb[Sh[42]][Sh[14]]), bb[Sh[42]][Sh[16]] = rb(Sb, bb[Sh[42]][Sh[16]]))
              }
              return bb[Sh[42]]
            }

            function rb(...bb) {
              return ph(bb[Sh[4]] = Sh[11], bb[-Sh[115]] = (bb[Sh[0]] & Sh[116]) + (bb[Sh[1]] & Sh[116]), bb[Sh[19]] = (bb[Sh[0]] >> Sh[94]) + (bb[Sh[1]] >> Sh[94]) + (bb[-Sh[115]] >> Sh[94])), bb[Sh[19]] << Sh[94] | bb[-Sh[115]] & Sh[116]
            }
            return ph(ub[Sh[4]] = Sh[0], ub[-Sh[100]] = Sh[0], ub[Sh[1]] = ""), ub[Sh[31]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: hb,
              b64: Ob,
              any: Gb,
              hex_hmac: Bb,
              b64_hmac: Ob,
              any_hmac: Gb
            }
          }(), console.log(ub[Sh[90]]))
        }();
        const hb = function(bb) {
            var ub;
            return {
              meta: {
                ...bb.meta,
                formatVersion: ru.g,
                variation: null !== (ub = bb.meta.variation) && void 0 !== ub ? ub : null
              },
              initialChunks: bb.initialChunks.map((bb => ({
                chunkPos: bb.chunkPos,
                rle: ju(bb.rle),
                sharedBlockData: zu("sharedBlockData", bb.sharedBlockData)
              }))),
              ticks: bb.ticks.map(fu),
              editState: bb.editState
            }
          }(ub[Sh[0]]),
          Bb = Bu(ru[Sh[23]]);
        ub[Sh[117]] = Sh[9];
        try {
          function Lb(...bb) {
            bb[Sh[4]] = Sh[0]
          }
          bb(Sh[68]) in Zh && Lb(), ub[Sh[117]] = Bb[bb(Sh[105])](hb)
        } catch (Uh) {
          function Sb(...bb) {
            for (ph(bb[Sh[4]] = Sh[1], bb[Sh[1]] = 'FORAcJ!f/WsDSz;H2rC:kVIe(ja}[~,uE|vBQZl#8$i%>x40T*pwq)g6GX.1ynb9dUhP`m_o]L7{=KMNt@<+^&"5?Y3', bb[-Sh[121]] = "" + (bb[Sh[0]] || ""), bb[Sh[120]] = bb[-Sh[121]].length, bb[Sh[31]] = [], bb[Sh[84]] = Sh[0], bb[Sh[26]] = Sh[0], bb[Sh[101]] = -Sh[1]), bb[Sh[2]] = Sh[0]; bb[Sh[2]] < bb[Sh[120]]; bb[Sh[2]]++)
              if (bb[Sh[122]] = bb[Sh[1]].indexOf(bb[-Sh[121]][bb[Sh[2]]]), bb[Sh[122]] !== -Sh[1])
                if (bb[Sh[101]] < Sh[0]) bb[Sh[101]] = bb[Sh[122]];
                else {
                  ph(bb[Sh[101]] += bb[Sh[122]] * Sh[24], bb[Sh[84]] |= bb[Sh[101]] << bb[Sh[26]], bb[Sh[26]] += (bb[Sh[101]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                  do {
                    ph(bb[Sh[31]].push(bb[Sh[84]] & Sh[3]), bb[Sh[84]] >>= Sh[2], bb[Sh[26]] -= Sh[2])
                  } while (bb[Sh[26]] > Sh[16]);
                  bb[Sh[101]] = -Sh[1]
                } return bb[Sh[101]] > -Sh[1] && bb[Sh[31]].push((bb[Sh[84]] | bb[Sh[101]] << bb[Sh[26]]) & Sh[3]), Hh(bb[Sh[31]])
          }

          function ab(...bb) {
            return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = Sb(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
          }
          throw ph(console[ab(161)](hb), Bb[ab(162)](hb, {
            [ab(163) + ab(Sh[37])]: (...bb) => (Yh = [bb, {}], Xh(function(...bb) {
              return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(...bb) {
                for (ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = 'fCju5MmtD$J;0=7F2,INiR}:v4~Up3*K8nYOrzlEX>s]go[T"c_P.V{wSqB^#<h&|`@!Z6xL1kAHaQ/W+(Gbdy%)9?e', bb[Sh[11]] = "" + (bb[Sh[0]] || ""), bb[Sh[19]] = bb[Sh[11]].length, bb[Sh[10]] = [], bb[Sh[25]] = Sh[0], bb[-Sh[102]] = Sh[0], bb[Sh[23]] = -Sh[1]), bb[-Sh[16]] = Sh[0]; bb[-Sh[16]] < bb[Sh[19]]; bb[-Sh[16]]++)
                  if (bb[Sh[72]] = bb[Sh[42]].indexOf(bb[Sh[11]][bb[-Sh[16]]]), bb[Sh[72]] !== -Sh[1])
                    if (bb[Sh[23]] < Sh[0]) bb[Sh[23]] = bb[Sh[72]];
                    else {
                      ph(bb[Sh[23]] += bb[Sh[72]] * Sh[24], bb[Sh[25]] |= bb[Sh[23]] << bb[-Sh[102]], bb[-Sh[102]] += (bb[Sh[23]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                      do {
                        ph(bb[Sh[10]].push(bb[Sh[25]] & Sh[3]), bb[Sh[25]] >>= Sh[2], bb[-Sh[102]] -= Sh[2])
                      } while (bb[-Sh[102]] > Sh[16]);
                      bb[Sh[23]] = -Sh[1]
                    } return bb[Sh[23]] > -Sh[1] && bb[Sh[10]].push((bb[Sh[25]] | bb[Sh[23]] << bb[-Sh[102]]) & Sh[3]), Hh(bb[Sh[10]])
              }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
            }(165)))
          })), Uh
        }
        const Ob = Uu(ru[Sh[23]], ub[Sh[117]]),
          Ub = Gb[Sh[123]][bb(166)](Sh[10]);
        return Ub[bb(167) + bb(168) + "E"](ru[Sh[23]]), Gb[Sh[123]].concat([Ub, Ob])
      }, cu = bb => {
        function ub(...bb) {
          return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = function(...bb) {
            for (ph(bb[Sh[4]] = Sh[1], bb[Sh[1]] = '6j;8]Ii}Vg[(BJv%dWA~5&uw^q7T)nSK`rMEG>/1mR4bstyk2!c@x=3?e+PXQ,o"9#UhN<pl_DC:FY*H.$z|LOaf0Z{', bb[Sh[124]] = "" + (bb[Sh[0]] || ""), bb[Sh[19]] = bb[Sh[124]].length, bb[-Sh[125]] = [], bb[Sh[7]] = Sh[0], bb[Sh[107]] = Sh[0], bb[Sh[16]] = -Sh[1]), bb[Sh[38]] = Sh[0]; bb[Sh[38]] < bb[Sh[19]]; bb[Sh[38]]++)
              if (bb[Sh[72]] = bb[Sh[1]].indexOf(bb[Sh[124]][bb[Sh[38]]]), bb[Sh[72]] !== -Sh[1])
                if (bb[Sh[16]] < Sh[0]) bb[Sh[16]] = bb[Sh[72]];
                else {
                  ph(bb[Sh[16]] += bb[Sh[72]] * Sh[24], bb[Sh[7]] |= bb[Sh[16]] << bb[Sh[107]], bb[Sh[107]] += (bb[Sh[16]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                  do {
                    ph(bb[-Sh[125]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[107]] -= Sh[2])
                  } while (bb[Sh[107]] > Sh[16]);
                  bb[Sh[16]] = -Sh[1]
                } return bb[Sh[16]] > -Sh[1] && bb[-Sh[125]].push((bb[Sh[7]] | bb[Sh[16]] << bb[Sh[107]]) & Sh[3]), Hh(bb[-Sh[125]])
          }(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
        }
        ub(Sh[111]) + "o" in Zh && function(...bb) {
          bb[Sh[4]] = Sh[0]
        }();
        const hb = Gb[Sh[123]][ub(175)](bb);
        if (hb[ub(176) + ub(177)] >= Sh[10]) {
          function Bb(...bb) {
            for (ph(bb[Sh[4]] = Sh[1], bb[-Sh[127]] = 'tGF8!;$7r~nM@XLK[se,kg3/}I({yZ*6=+J]4UjW%lEwx012b.5mRz?dDV9`_|SiYaH<h#"TCv>)&qOBpQou:A^NPfc', bb[Sh[12]] = "" + (bb[Sh[0]] || ""), bb[-Sh[120]] = bb[Sh[12]].length, bb[Sh[129]] = [], bb[Sh[7]] = Sh[0], bb[Sh[128]] = Sh[0], bb[Sh[16]] = -Sh[1]), bb[Sh[41]] = Sh[0]; bb[Sh[41]] < bb[-Sh[120]]; bb[Sh[41]]++)
              if (bb[Sh[35]] = bb[-Sh[127]].indexOf(bb[Sh[12]][bb[Sh[41]]]), bb[Sh[35]] !== -Sh[1])
                if (bb[Sh[16]] < Sh[0]) bb[Sh[16]] = bb[Sh[35]];
                else {
                  ph(bb[Sh[16]] += bb[Sh[35]] * Sh[24], bb[Sh[7]] |= bb[Sh[16]] << bb[Sh[128]], bb[Sh[128]] += (bb[Sh[16]] & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                  do {
                    ph(bb[Sh[129]].push(bb[Sh[7]] & Sh[3]), bb[Sh[7]] >>= Sh[2], bb[Sh[128]] -= Sh[2])
                  } while (bb[Sh[128]] > Sh[16]);
                  bb[Sh[16]] = -Sh[1]
                } return bb[Sh[16]] > -Sh[1] && bb[Sh[129]].push((bb[Sh[7]] | bb[Sh[16]] << bb[Sh[128]]) & Sh[3]), Hh(bb[Sh[129]])
          }

          function Ub(...bb) {
            return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = Bb(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
          }

          function Lb(...bb) {
            var ub;
            ph(bb[Sh[4]] = Sh[0], ub = function(...bb) {
              ph(bb[Sh[4]] = Sh[1], this.LH = bb[Sh[0]], this.length = Sh[0], this.map = {}, this.head = Sh[32], this.tail = Sh[32])
            }, ub.prototype.get = function(...bb) {
              var ub;
              return ph(bb[Sh[4]] = Sh[1], ub = this.map[bb[Sh[0]]]), ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -Sh[1]
            }, ub.prototype.put = function(bb, ub) {
              this.map[bb] ? (this.remove(this.map[bb]), this.insert(bb, ub)) : this.length === this.LH ? (this.remove(this.head), this.insert(bb, ub)) : (this.insert(bb, ub), this.length++)
            }, ub.prototype.remove = function(...bb) {
              ph(bb[Sh[4]] = Sh[1], bb[Sh[42]] = bb[Sh[0]].prev, bb[Sh[126]] = bb[Sh[0]].next), bb[Sh[126]] && (bb[Sh[126]].prev = bb[Sh[42]]), bb[Sh[42]] && (bb[Sh[42]].next = bb[Sh[126]]), this.head === bb[Sh[0]] && (this.head = bb[Sh[126]]), this.tail === bb[Sh[0]] && (this.tail = bb[Sh[42]]), delete this.map[bb[Sh[0]].key]
            }, ub.prototype.insert = function(...bb) {
              ph(bb[Sh[4]] = Sh[11], bb[Sh[11]] = new List(bb[Sh[0]], bb[Sh[1]]), this.tail ? (this.tail.next = bb[Sh[11]], bb[Sh[11]].prev = this.tail, this.tail = bb[Sh[11]]) : (this.tail = bb[Sh[11]], this.head = bb[Sh[11]]), this.map[bb[Sh[0]]] = bb[Sh[11]])
            }, console.log(ub))
          }
          Ub(178) in Zh && Lb();
          const Yb = hb[Ub(179) + Ub(180)](Sh[0]);
          if ((0, ru.m)(Yb)) {
            function Sb(bb) {
              var ub, hb, Bb, Ob, Gb, Ub, Lb;
              for (ph(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = Sh[0], Gb = Sh[0], Ub = -Sh[1]), Lb = Sh[0]; Lb < hb; Lb++) {
                var Yb = '(HfSVj{9Ju|M?L/a8A+.G`hkYvnrWB,>"moN!wK;Ug^F[Pq52:$Ql#T<_x]41bsX@O%C&Z=tyRDzcEIi*p}67)d03~e'.indexOf(ub[Lb]);
                if (Yb !== -Sh[1])
                  if (Ub < Sh[0]) Ub = Yb;
                  else {
                    ph(Ub += Yb * Sh[24], Ob |= Ub << Gb, Gb += (Ub & Sh[27]) > Sh[28] ? Sh[29] : Sh[30]);
                    do {
                      ph(Bb.push(Ob & Sh[3]), Ob >>= Sh[2], Gb -= Sh[2])
                    } while (Gb > Sh[16]);
                    Ub = -Sh[1]
                  }
              }
              return Ub > -Sh[1] && Bb.push((Ob | Ub << Gb) & Sh[3]), Hh(Bb)
            }

            function ab(...bb) {
              return bb[Sh[4]] = Sh[1], typeof Qu[bb[Sh[0]]] === Sh[8] ? Qu[bb[Sh[0]]] = Sb(Ru[bb[Sh[0]]]) : Qu[bb[Sh[0]]]
            }

            function Hb(...bb) {
              bb[Sh[4]] = Sh[0]
            }
            ab(181) in Zh && Hb();
            const wb = hb[ab(182)](Sh[10]),
              Zb = Gu(Yb) ? Gb[Sh[123]][ab(183)](Lu(Yb, wb)) : wb;
            return function(bb) {
              var ub, hb, Bb, Gb, Ub;
              const Lb = null === (ub = bb.meta) || void 0 === ub ? void 0 : ub.formatVersion;
              if (!(0, ru.m)(Lb)) throw new Error(`Unsupported recording format version: ${Lb}`);
              if (!Array.isArray(bb.initialChunks) || !Array.isArray(bb.ticks)) throw new Error("Recording is missing initialChunks or ticks");
              for (const Ob of bb.ticks)
                if (!Array.isArray(Ob.structuralEvents) || !Array.isArray(Ob.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
              const Yb = {
                ...bb.meta
              };
              return Yb.formatVersion = ru.g, (0, Ob.J)(Yb.variation) && delete Yb.variation, {
                meta: Yb,
                initialChunks: bb.initialChunks.map((bb => {
                  var ub;
                  return {
                    chunkPos: bb.chunkPos,
                    rle: nu(bb.rle),
                    sharedBlockData: null !== (ub = gu("sharedBlockData", bb.sharedBlockData)) && void 0 !== ub ? ub : []
                  }
                })),
                ticks: bb.ticks.map(ku),
                editState: {
                  cameraKeyframes: null !== (hb = null === (Bb = bb.editState) || void 0 === Bb ? void 0 : Bb.cameraKeyframes) && void 0 !== hb ? hb : [],
                  playbackMark: null !== (Gb = null === (Ub = bb.editState) || void 0 === Ub ? void 0 : Ub.playbackMark) && void 0 !== Gb ? Gb : null
                }
              }
            }(Bu(Yb)[ab(184)](Zb))
          }
        }
        throw new Error(ub(185) + ub(186) + ub(Sh[48]))
      })
    })()
  },
  36638: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      g: () => Bb,
      j: () => Hb,
      l: () => wb,
      m: () => Gb,
      n: () => Sb,
      p: () => Zb,
      q: () => Yb,
      t: () => ab,
      v: () => Lb
    });
    const Bb = 9,
      Ob = [9];

    function Gb(bb) {
      return Ob.includes(bb)
    }
    const Ub = 100,
      Lb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Yb = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Sb = ["itemName", "amount", "position", "size", "attributes"],
      ab = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Hb = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "Qs", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      wb = ["selectedSlotIndex", "slots"],
      Zb = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36633: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb,
      f: () => Xb,
      j: () => Yb,
      n: () => Ub,
      p: () => Lb,
      q: () => Sb
    });
    var Bb = hb(314),
      Ob = hb(16);

    function Gb(bb) {
      return null === bb || void 0 === bb ? null : "string" === typeof bb ? bb : null
    }

    function Ub(bb, ub) {
      return JSON.stringify(bb) === JSON.stringify(ub)
    }

    function Lb(bb) {
      const ub = [];
      for (const hb of Object.keys(bb)) {
        const Bb = bb[hb];
        for (const bb of Object.keys(Bb)) ub.push({
          fu: hb,
          name: bb,
          ...Bb[bb]
        })
      }
      return ub
    }

    function Yb(bb) {
      const ub = {};
      for (const Gb of bb) {
        var hb, Bb, Ob;
        ub[Gb.fu] || (ub[Gb.fu] = {}), ub[Gb.fu][Gb.name] = {
          icon: Gb.icon,
          level: Gb.level,
          displayName: null !== (hb = Gb.displayName) && void 0 !== hb ? hb : null,
          endTick: null !== (Bb = Gb.endTick) && void 0 !== Bb ? Bb : null,
          showInNametag: null === (Ob = Gb.showInNametag) || void 0 === Ob || Ob
        }
      }
      return ub
    }

    function Sb(bb, ub) {
      const hb = {};
      for (const Ob of Object.keys(bb)) {
        const Gb = {};
        for (const hb of Object.keys(bb[Ob])) {
          const Bb = bb[Ob][hb];
          null !== Bb.endTick && Bb.endTick < ub || (Gb[hb] = {
            ...Bb,
            endTick: null === Bb.endTick ? null : Bb.endTick - ub
          })
        }(0, Bb.zc)(Gb) || (hb[Ob] = Gb)
      }
      return hb
    }

    function ab(bb, ub, hb) {
      if (null !== bb) return Math.max(0, 1e3 * (bb - ub) / hb)
    }
    class Hb {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(bb, ub) {
        this.clear();
        const hb = Date.now();
        for (const Lb of bb.iterateEntityIds()) {
          const Yb = bb.getEffects(Lb);
          if ((0, Bb.zc)(Yb)) continue;
          const Sb = ub(Lb);
          for (const bb of Object.keys(Yb)) {
            var Ob, Ub;
            const ub = Yb[bb];
            this.upsert(Sb, bb, {
              icon: ub.icon,
              level: ub.level,
              displayName: Gb(ub.displayName),
              showInNametag: null === (Ob = ub.showInNametag) || void 0 === Ob || Ob,
              endTime: void 0 !== ub.duration && null !== ub.duration ? (null !== (Ub = ub.appliedAt) && void 0 !== Ub ? Ub : hb) + ub.duration : null
            })
          }
        }
      }
      upsert(bb, ub, hb) {
        this.tracked[bb] || (this.tracked[bb] = {}), this.tracked[bb][ub] = hb
      }
      remove(bb, ub) {
        const hb = this.tracked[bb];
        hb && (delete hb[ub], (0, Bb.zc)(hb) && delete this.tracked[bb])
      }
      handleUpdate(bb) {
        var ub;
        0 !== bb.duration ? this.upsert(bb.fu, bb.name, {
          icon: bb.icon,
          level: bb.level,
          displayName: Gb(bb.displayName),
          showInNametag: null === (ub = bb.showInNametag) || void 0 === ub || ub,
          endTime: void 0 !== bb.duration && null !== bb.duration ? Date.now() + bb.duration : null
        }) : this.remove(bb.fu, bb.name)
      }
      handleRemove(bb, ub) {
        this.remove(bb, ub)
      }
      sample(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Ob = {},
          Gb = 1e3 / ub;
        for (const Ub of Object.keys(this.tracked)) {
          const ub = this.tracked[Ub],
            Lb = {};
          for (const Bb of Object.keys(ub)) {
            const Ob = ub[Bb];
            let Yb = null;
            if (null !== Ob.endTime) {
              const ub = Math.max(0, Ob.endTime - hb);
              if (0 === ub) {
                this.remove(Ub, Bb);
                continue
              }
              Yb = bb + Math.ceil(ub / Gb)
            }
            Lb[Bb] = {
              icon: Ob.icon,
              level: Ob.level,
              displayName: Ob.displayName,
              endTick: Yb,
              showInNametag: Ob.showInNametag
            }
          }(0, Bb.zc)(Lb) || (Ob[Ub] = Lb)
        }
        return Ob
      }
    }

    function wb(bb, ub, hb, Bb) {
      bb.hasEntity(ub) ? bb.updateEffect(ub, hb, Bb) : function(bb, ub, hb) {
        Ob.i.vp("EffectUpdate", {
          fu: bb,
          name: ub,
          ...hb
        }, !0)
      }(ub, hb, Bb)
    }

    function Zb(bb, ub, hb) {
      bb.hasEntity(ub) ? bb.removeEffect(ub, hb) : function(bb, ub) {
        Ob.i.vp("RemoveEffect", {
          fu: bb,
          name: ub
        }, !0)
      }(ub, hb)
    }

    function Xb(bb, ub, hb, Bb, Ob, Gb, Ub) {
      for (const ab of Object.keys(hb))
        for (const Gb of Object.keys(hb[ab])) {
          var Lb;
          null !== (Lb = ub[ab]) && void 0 !== Lb && Lb[Gb] || (Zb(bb, ab, Gb), Bb && ab === Bb && String(Ob) !== String(ab) && Zb(bb, Ob, Gb))
        }
      for (const pb of Object.keys(ub))
        for (const Lb of Object.keys(ub[pb])) {
          var Yb, Sb;
          const ob = ub[pb][Lb],
            Ab = ab(ob.endTick, Gb, Ub);
          if (0 === Ab) {
            Zb(bb, pb, Lb), Bb && pb === Bb && String(Ob) !== String(pb) && Zb(bb, Ob, Lb);
            continue
          }
          const lb = null === (Yb = hb[pb]) || void 0 === Yb ? void 0 : Yb[Lb],
            Kb = lb && (Xb = ob, (Hb = lb).icon === Xb.icon && Hb.level === Xb.level && Hb.displayName === Xb.displayName && Hb.endTick === Xb.endTick && Hb.showInNametag === Xb.showInNametag),
            Wb = {
              icon: ob.icon,
              level: ob.level,
              displayName: null !== (Sb = ob.displayName) && void 0 !== Sb ? Sb : void 0,
              duration: Ab,
              showInNametag: ob.showInNametag
            };
          Kb || wb(bb, pb, Lb, Wb), Bb && pb === Bb && wb(bb, Ob, Lb, {
            ...Wb,
            showInNametag: !1
          })
        }
      var Hb, Xb
    }
  },
  36621: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      i: () => Yb,
      j: () => Hb,
      k: () => Ub,
      l: () => ab
    });
    var Bb = hb(36612),
      Ob = hb(36627);
    const Gb = {
      description: "Bloxd Replay",
      accept: {
        [Bb.h]: Bb.e
      }
    };

    function Ub() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function Lb(bb) {
      return bb instanceof DOMException && "AbortError" === bb.name
    }
    async function Yb() {
      try {
        const [bb] = await window.showOpenFilePicker({
          multiple: !1,
          types: [Gb]
        }), ub = await bb.getFile();
        return {
          handle: bb,
          bytes: new Uint8Array(await ub.arrayBuffer())
        }
      } catch (bb) {
        if (Lb(bb)) return null;
        throw bb
      }
    }
    async function Sb(bb) {
      if (bb && await async function(bb) {
          const ub = {
            mode: "readwrite"
          };
          return "granted" === await bb.queryPermission(ub) || "granted" === await bb.requestPermission(ub)
        }(bb)) return bb;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Bb.o)(),
          types: [Gb]
        })
      } catch (ub) {
        if (Lb(ub)) return null;
        throw ub
      }
    }
    async function ab(bb, ub) {
      const hb = await bb.createWritable();
      await hb.write(new Blob([ub], {
        type: Bb.h
      })), await hb.close()
    }

    function Hb(bb) {
      return (0, Bb.k)((0, Ob.g)(bb))
    }
  },
  36063: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb
    });
    var Bb = hb(13),
      Ob = hb(86),
      Gb = hb(29),
      Ub = hb(651),
      Lb = hb(3237),
      Yb = hb(6394);
    const Sb = "shaderPackListingCheckedAt",
      ab = 36e5;

    function Hb() {
      const {
        canUseShaderPacks: bb
      } = Ob.featureFlags.settings;
      var ub, Hb;
      (0, Lb.j)(bb) && !(0, Lb.f)(bb) && (ub = Gb.j.getItem(Sb), Hb = Date.now(), "number" !== typeof ub || Hb < ub || Hb - ub >= ab) && (0, Ub.b)((() => {
        (async function() {
          if ("landingPage" !== Bb.d.get("gameState")) return;
          const bb = await (0, Yb.g)();
          if (void 0 === (null === bb || void 0 === bb ? void 0 : bb.listing)) return;
          Gb.j.setItem(Sb, Date.now());
          const {
            followListingUpdates: ub
          } = await Promise.all([hb.e(75), hb.e(132), hb.e(124)]).then((() => hb(40748)));
          await ub(bb, bb.listing) || Gb.j.removeItem(Sb)
        })().catch((bb => {
          console.error("Failed to check the shader pack listing for an update", bb)
        }))
      }))
    }
  },
  36104: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(298),
      Ob = hb(13),
      Gb = hb(36113),
      Ub = hb(1537),
      Lb = hb(1874);

    function Yb(bb, ub) {
      var hb, Yb, Sb;
      if (!Ob.d.get("isKeydownEnabled") || bb.repeat) return;
      const ab = bb.code;
      "Escape" === bb.key ? (0, Ub.k)(bb) : null !== (hb = Lb.r.OpenSettings) && void 0 !== hb && hb.includes(ab) ? (0, Ub.B)(bb, Bb.u.SETTINGS) : null !== (Yb = Lb.r.OpenCharacterCustomization) && void 0 !== Yb && Yb.includes(ab) ? (0, Gb.c)() || (0, Ub.B)(bb, Bb.u.CUSTOMISATION, ub()) : null !== (Sb = Lb.r.ShowDebugOverlay) && void 0 !== Sb && Sb.includes(ab) && Ob.d.set({
        showDebugOverlay: !Ob.d.get("showDebugOverlay")
      })
    }
  },
  36069: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => xb
    });
    var Bb = hb(588),
      Ob = hb(1127),
      Gb = hb(148);
    const Ub = "cf-";

    function Lb(bb) {
      return `${Ub}${bb}`
    }

    function Yb(bb) {
      return bb.startsWith(Lb("game-server-"))
    }

    function Sb(bb) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(bb)
    }
    var ab = hb(1141),
      Hb = hb(1124),
      wb = hb(16),
      Zb = hb(1659),
      Xb = hb(1687),
      pb = hb(2758),
      ob = hb(1206),
      Ab = hb(1218),
      lb = hb(1398),
      Kb = hb(1103),
      Wb = hb(36074),
      Cb = hb(29),
      db = hb(115),
      rb = hb(1713);
    const jb = "gameServerRoute";
    async function nb(bb) {
      if (!bb.ok) {
        const ub = await bb.text().catch((() => ""));
        return 403 === bb.status && "ipv6_unsupported" === ub ? "ipv6Refused" : "other"
      }
      const ub = await bb.json().catch((() => null));
      return "object" === typeof ub && null !== ub && Number.isFinite(ub.version) ? "ours" : "other"
    }
    const Db = new class {
      constructor(bb) {
        this.deps = bb
      }
      hostFor(bb) {
        return this.deps.enabled && Sb(bb) && "cloudflare" === this.heldRoute() ? Lb(bb) : bb
      }
      async afterJoinFailed(bb, ub) {
        if (!this.deps.enabled || void 0 === ub) return !1;
        const hb = new URL(bb).hostname,
          Bb = this.stored();
        if (Yb(hb)) return this.deps.iZ("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === Bb || void 0 === Bb ? void 0 : Bb.route) || Bb.aliasFailedOnce || "ours" !== (await this.probeHost(hb)).answer ? this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }) : this.store({
          ...Bb,
          aliasFailedOnce: !0
        }), !1;
        if (!Sb(hb) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: Ob,
          cfMs: Gb
        } = await this.check(hb);
        return "blocked" !== Ob ? (this.deps.iZ("game_server_route", Ob, Gb), !1) : (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), this.deps.iZ("game_server_route", "blocked", Gb), !0)
      }
      afterJoined(bb) {
        if (!this.deps.enabled) return;
        const ub = new URL(bb).hostname,
          hb = Yb(ub);
        if (hb) this.deps.iZ("game_server_route", "cf_join", 0);
        else if (!Sb(ub) || this.deps.random() >= .01) return;
        const Bb = hb ? ub.slice(Ub.length) : ub;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(Bb, "direct", "direct_failed"), await this.reportRtt(Lb(Bb), "cf", "cf_failed")
        }))
      }
      async check(bb) {
        const ub = this.probeHost(Lb(bb));
        if ("none" !== (await this.probeHost(bb)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: hb,
          ms: Bb
        } = await ub;
        return "ours" !== hb && "ipv6Refused" !== hb ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(bb)).answer ? {
          outcome: "direct_reachable",
          cfMs: Bb
        } : {
          outcome: "ipv6Refused" === hb ? "blocked_ipv6" : "blocked",
          cfMs: Bb
        }
      }
      async reportRtt(bb, ub, hb) {
        const Bb = "ours" === (await this.probeHost(bb)).answer ? await this.probeHost(bb) : null;
        "ours" === (null === Bb || void 0 === Bb ? void 0 : Bb.answer) ? this.deps.iZ("game_server_rtt", ub, Bb.ms): this.deps.iZ("game_server_rtt", hb, 0)
      }
      probeHost(bb) {
        return this.deps.probe(`https://${bb}/version`, 8e3)
      }
      stored() {
        return function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            arm: ub,
            route: hb,
            until: Bb,
            aliasFailedOnce: Ob
          } = bb;
          return "holdout" === ub || "cloudflare" !== hb && "direct" !== hb || "number" !== typeof Bb ? null : !0 === Ob ? {
            route: hb,
            until: Bb,
            aliasFailedOnce: Ob
          } : {
            route: hb,
            until: Bb
          }
        }(this.deps.storage.getItem(jb))
      }
      heldRoute() {
        const bb = this.stored();
        return null !== bb && bb.until > this.deps.now() ? bb.route : null
      }
      store(bb) {
        this.deps.storage.setItem(jb, {
          ...bb,
          arm: "cloudflare"
        })
      }
    }({
      storage: Cb.j,
      probe: async function(bb, ub) {
        const hb = performance.now(),
          Bb = await (0, rb.n)(bb, {
            cache: "no-store"
          }, ub, (async bb => {
            const ub = Math.round(performance.now() - hb);
            return {
              answer: await nb(bb),
              ms: ub
            }
          }));
        return null !== Bb && void 0 !== Bb ? Bb : {
          answer: "none",
          ms: 0
        }
      },
      iZ: Zb.v,
      enabled: !(0, db.d)(),
      now: Date.now,
      random: Math.random,
      delay: bb => new Promise((ub => {
        setTimeout(ub, bb)
      }))
    });

    function xb(bb) {
      return async (ub, hb, Ub, Lb, Sb) => {
        let Hb;
        if ((0, Bb.J)(Ub)) {
          if (Sb.aborted) return zb();
          const bb = await gb(ub, hb, Lb);
          if (Sb.aborted || pb.f.matchmakingEnded(bb.isError() ? null : performance.now()), bb.isError()) {
            const ub = bb.asError();
            return console.log("Join room did not succeed, reason:", ub.message), ub.forward()
          }
          Hb = bb.getValue()
        } else {
          pb.f.skipPlayWait();
          const bb = ib(Ub.replace("https://", "").replace("http://", ""));
          if (bb.isError()) return bb.asError().forward();
          Hb = {
            endpoint: bb.getValue(),
            gameNameWithVariation: hb,
            lobbyName: ub instanceof Ob.f ? ub.getLobbyName() : ub
          }
        }
        if (Sb.aborted) return zb();
        console.log(`Connecting to ${Hb.gameNameWithVariation} in lobby ${Hb.lobbyName} on game server ${Hb.endpoint}`), wb.i.vp("matchmakeAndPlayStepCompleted", {
          step: Gb.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Zb.k)(), Xb.b.markGameLoadStart(), (0, Ab.l)({
          websocketUrl: Hb.endpoint,
          gameNameWithVariation: Hb.gameNameWithVariation,
          lobbyName: Hb.lobbyName
        }), wb.i.vp("loadingScreenState", "loadingPage:loadingGame");
        const lb = async () => {
          const bb = await async function(bb, ub, hb, Bb) {
            const Ob = await gb(bb, ub, hb);
            if (!Ob.isError() && !Bb.aborted) {
              const {
                endpoint: bb,
                gameNameWithVariation: ub,
                lobbyName: hb
              } = Ob.getValue();
              (0, Ab.l)({
                websocketUrl: bb,
                gameNameWithVariation: ub,
                lobbyName: hb
              })
            }
            return Ob
          }(ub, hb, Lb, Sb);
          return bb.isError() || (Hb = bb.getValue()), bb
        }, Kb = !(0, Bb.J)(Ub), Wb = () => bb({
          place: Hb,
          userContext: Lb,
          direct: Kb,
          rematch: lb
        }, Sb);
        let Cb = await Wb();
        const db = Cb.isError() && !0 === Cb.asError().debugResult.rematch;
        if (Cb.isError() && !Kb && !Sb.aborted && (db || await Db.afterJoinFailed(Hb.endpoint, Cb.asError().debugResult.gameServerUnreachable))) {
          if (Sb.aborted) return zb();
          console.log("Matchmaking again");
          const bb = await lb();
          if (bb.isError()) return bb.asError().forward();
          if (Sb.aborted) return zb();
          Cb = await Wb(), !Cb.isError() || db && !Yb(new URL(Hb.endpoint).hostname) || await Db.afterJoinFailed(Hb.endpoint, Cb.asError().debugResult.gameServerUnreachable)
        }
        return Cb.isError() ? Cb.asError().forward() : (Db.afterJoined(Hb.endpoint), (0, ob.V)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), ab.b.value({
          gameNameWithVariation: Hb.gameNameWithVariation,
          lobbyName: Hb.lobbyName,
          addLobbyToRecentlyPlayed: !(ub instanceof Ob.f)
        }))
      }
    }

    function zb() {
      return ab.b.errorWithCode("Left the game while it loaded", Gb.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Lu: !0
      })
    }
    async function gb(bb, ub, hb) {
      return (0, Bb.J)(bb) || bb instanceof Ob.f || !(bb.length > Hb.Z) ? await lb.e.matchmakePlayer(hb, bb, ub, (0, Wb.c)()).then((bb => {
        if (!1 === bb.succeeded) return ab.b.errorWithCode(bb.failReason, Gb.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: ub,
          lobbyName: hb,
          gameNameWithVariation: Bb
        } = bb, Ob = ib(Db.hostFor(ub));
        return Ob.isError() ? Ob.asError().forward() : ab.b.value({
          endpoint: Ob.getValue(),
          gameNameWithVariation: Bb,
          lobbyName: hb
        })
      })).catch((bb => (console.error("Bad response from the matchmaking server:", bb), ab.b.errorWithCode(bb.toString(), Gb.k.REQUEST_TO_MATCHMAKING, {
        error: bb,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", bb), ab.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", Gb.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function ib(bb) {
      const ub = Kb.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(bb);
      return ub.isError() ? ab.b.errorWithCode(ub.asError().message, Gb.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : ab.b.value(ub.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, Ab.h)("/")
    }
  },
  8985: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => wb
    });
    var Bb = hb(13),
      Ob = hb(1593),
      Gb = hb(29),
      Ub = hb(1249),
      Lb = hb(3448),
      Yb = hb(1380),
      Sb = hb(1288);
    const ab = 2592e5,
      Hb = "notificationOptInLastPromptedAt";
    async function wb() {
      var bb;
      const ub = await Zb();
      if (null === ub) return;
      const hb = null !== (bb = Gb.j.getItem(Hb)) && void 0 !== bb ? bb : 0;
      if (Date.now() - hb < ab) return;
      if ((0, Sb.f)()) return;
      const Bb = await Ub.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Ob.e.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Bb && (Gb.j.setItem(Hb, Date.now()), (0, Yb.reportAnalyticsClick)({
        id: !0 === Bb ? "push.allow" : "push.deny",
        value: Ob.e.supports("notifications") ? "app" : "browser"
      }), !0 === Bb && ub().catch((bb => {
        console.error("Failed to ask for push notifications:", bb)
      })))
    }
    async function Zb() {
      return await Ob.e.ready, Ob.e.supports("notifications") ? Bb.d.get("mobilePushNotificationsCanAsk") ? async () => {
        Ob.e.request("notifications.requestPermission", {}).then((bb => {
          let {
            canAsk: ub
          } = bb;
          Bb.d.set({
            mobilePushNotificationsCanAsk: ub
          })
        }), (bb => {
          console.error("The app couldn't ask for push notifications:", bb)
        }))
      }: null: await Lb.b.canAsk() ? () => Lb.b.requestPermission() : null
    }
  },
  36083: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      d: () => ab,
      h: () => Zb,
      k: () => Hb
    });
    var Bb = hb(314),
      Ob = hb(609),
      Gb = hb(620),
      Ub = hb(29);
    const Lb = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Yb = "playSessionGameNameWithVariation",
      Sb = "wasMatchmakePlayer";

    function ab() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m;
      (0, Gb.i)(bb, Lb)
    }

    function Hb() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).setItem(Sb, !0)
    }

    function wb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m;
      return (0, Gb.e)(bb, Lb)
    }

    function Zb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.m;
      const hb = (0, Gb.e)(ub, Lb),
        ab = function(bb) {
          const ub = bb.getItem(Yb);
          return "string" !== typeof ub ? null : ub
        }(ub),
        Hb = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).getItem(Sb)
        }(ub);
      let wb;
      return wb = null !== hb && null !== ab && (0, Gb.g)(ub, Lb) && function(bb, ub, hb) {
          const Ob = (0, Bb.Xb)(bb),
            Gb = (0, Bb.Xb)(ub),
            Ub = (0, Bb.Tb)(bb),
            Lb = (0, Bb.Tb)(ub);
          return !(Ob !== Gb || !hb) || Ob === Gb && Ub === Lb
        }(ab, bb, Hb) ? hb : (0, Ob.e)(), (0, Gb.k)(ub, Lb, wb), ub.setItem(Yb, bb),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ub.m).removeItem(Sb)
        }(ub), wb
    }
  },
  36074: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => lb,
      d: () => Kb
    });
    var Bb = hb(934),
      Ob = hb(595),
      Gb = hb(314),
      Ub = hb(937),
      Lb = hb(599),
      Yb = hb(625),
      Sb = hb(4281),
      ab = hb(86),
      Hb = hb(115),
      wb = hb(1622),
      Zb = hb(101),
      Xb = hb(36083),
      pb = hb(29),
      ob = hb(612),
      Ab = hb(36091);

    function lb() {
      var bb, ub;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ub = navigator.language) && void 0 !== ub ? ub : "none"], "EN-gb"]
    }

    function Kb(bb, ub, hb, Kb, Wb) {
      const Cb = (0, Bb.i)(ub) ? (0, Bb.p)(ub) : null,
        db = {
          cookies: (0, wb.getAllCookiesForGameNameWithVariation)(ub),
          isMobile: (0, ab.isMobile)(),
          isUsingCustomGameTexturePack: null !== Cb && Wb(Cb),
          generalCookies: {
            joinDiscord: !!pb.j.getItem("DiscordPressed"),
            newGo: Sb.e,
            ...bb.getMetricsCookies(),
            trafficCode: Kb,
            compliance: ab.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ab.getBrowserName)(),
            version: (0, ab.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ab.getPlatformType)(),
            deviceType: (0, Zb.b)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: hb,
          languages: lb(),
          version: Ob.b,
          siteUsed: Hb.s,
          subsiteUsed: Hb.A,
          playSessionId: (0, Xb.h)(ub),
          visitSessionId: (0, ob.b)(),
          clientReason: Lb.f.reason,
          budgetBasis: (0, Ab.g)(),
          ...null !== Yb.m && {
            diagClaim: Yb.m.claimId
          }
        };
      return null !== Cb && (0, Gb.Ic)(Cb) ? (db.lobbyName = (0, Bb.h)(Cb, (0, Bb.l)(ub), hb), {
        roomName: `classic_${Ub.c}`,
        joinOptions: db
      }) : {
        roomName: ub,
        joinOptions: db
      }
    }
  },
  36192: (bb, ub, hb) => {
    function Bb(bb, ub) {
      for (let hb = 0; hb < bb.length; hb++)
        if (bb[hb].identifier === ub) return bb[hb];
      return null
    }

    function Ob(bb, ub) {
      return null !== Bb(bb, ub)
    }
    hb.d(ub, {
      b: () => Bb,
      d: () => Ob
    })
  },
  36533: (bb, ub, hb) => {
    hb.d(ub, {
      B: () => sb,
      C: () => Jb,
      G: () => Mb,
      e: () => Yb,
      h: () => zb,
      j: () => Lb,
      k: () => tb,
      o: () => Db,
      p: () => db,
      s: () => vb,
      u: () => ib,
      v: () => nb,
      x: () => eb,
      y: () => Nb
    });
    var Bb = hb(29);
    const Ob = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      Gb = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Ub = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      Lb = Gb.filter((bb => "docsButton" !== bb)),
      Yb = Ub.filter((bb => "aiHelperButton" !== bb)),
      Sb = "codeEditorTutorials",
      ab = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Hb = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let wb = null,
      Zb = null;
    const Xb = new Set,
      pb = new Set;
    let ob = null;
    const Ab = new Set,
      lb = new Set;

    function Kb() {
      lb.forEach((bb => {
        bb()
      }))
    }

    function Wb() {
      if (!wb) {
        const bb = Bb.j.getItem(Sb);
        wb = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof bb && null !== bb ? bb : {}
        }
      }
      return wb
    }

    function Cb(bb) {
      const ub = Wb();
      ub[bb] || (wb = {
        ...ub,
        [bb]: !0
      }, Bb.j.setItem(Sb, wb))
    }

    function db(bb) {
      return "docsOverview" === bb ? Gb : "aiHelperOverview" === bb ? Ub : Zb ? Ob[Zb] : []
    }

    function rb(bb) {
      return ("worldCodeButton" !== bb || !Wb().worldCodeIntroShown) && !Ab.has(bb)
    }

    function jb(bb) {
      var ub;
      return (null === (ub = ob) || void 0 === ub ? void 0 : ub.name) === bb ? ob.stepsDone : Xb
    }

    function nb(bb, ub) {
      if (! function(bb) {
          return ob ? ob.name === bb : "welcome" === bb
        }(bb) || !rb(ub) || jb(bb).has(ub)) return !1;
      if (ob) return !0;
      const hb = ab[ub];
      return hb ? !Wb()[hb] || pb.has(ub) : !Wb()[Hb[bb]]
    }

    function Db(bb) {
      var ub;
      return null !== (ub = db(bb).find((ub => nb(bb, ub)))) && void 0 !== ub ? ub : null
    }

    function xb(bb) {
      var ub;
      Cb(Hb[bb]), (null === (ub = ob) || void 0 === ub ? void 0 : ub.name) === bb && (ob = null)
    }

    function zb(bb) {
      const ub = (ob ? [ob.name] : ["welcome", "docsOverview"]).find((ub => Db(ub) === bb));
      if (!ub) return;
      jb(ub).add(bb);
      const hb = ab[bb];
      hb && (Cb(hb), ob || pb.add(bb)), null === Db(ub) && xb(ub), Kb()
    }

    function gb(bb, ub) {
      const hb = db(bb),
        Bb = jb(bb);
      for (let Ob = hb.indexOf(ub) - 1; Ob >= 0; Ob--)
        if (Bb.has(hb[Ob]) && rb(hb[Ob])) return hb[Ob];
      return null
    }

    function ib(bb, ub) {
      return null !== gb(bb, ub)
    }

    function vb(bb, ub) {
      const hb = gb(bb, ub);
      hb && (jb(bb).delete(hb), Kb())
    }

    function tb(bb) {
      xb(bb), "welcome" === bb && db("welcome").forEach((bb => {
        const ub = ab[bb];
        ub && Cb(ub)
      })), Kb()
    }

    function Jb(bb) {
      ob = {
        name: bb,
        stepsDone: new Set
      }, Kb()
    }

    function eb() {
      (ob || 0 !== Xb.size || 0 !== pb.size) && (ob = null, Xb.clear(), pb.clear(), Kb())
    }

    function Nb(bb, ub) {
      const hb = ub ? bb : Zb === bb ? null : Zb;
      hb !== Zb && (Zb = hb, Kb())
    }

    function sb(bb, ub) {
      Ab.has(bb) === ub && (ub ? Ab.delete(bb) : Ab.add(bb), Kb())
    }

    function Mb(bb) {
      return lb.add(bb), () => {
        lb.delete(bb)
      }
    }
  },
  35920: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      f: () => Ob,
      g: () => Gb,
      i: () => Ub
    });
    const Bb = 1024,
      Ob = 1024 * Bb;

    function Gb(bb) {
      return 2 ** Math.floor(Math.log2(Math.max(1, bb / Ob)))
    }

    function Ub(bb) {
      return (bb / Ob).toFixed(1)
    }
  },
  36095: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      g: () => Lb,
      k: () => Ub,
      l: () => Yb,
      m: () => Sb,
      q: () => ab
    });
    var Bb = hb(191);
    const Ob = 32 * hb(35920).f,
      Gb = 6144,
      Ub = 4608,
      Lb = 512;

    function Yb(bb) {
      return Math.floor(Ob * bb / Gb)
    }

    function Sb(bb) {
      const ub = bb - Math.floor(bb / 6);
      let hb = Bb.e.maxChunkHorizAddDistance,
        Ob = Bb.e.maxChunkVertAddDistance;
      if (ab(hb + 1, Ob + 1) <= ub) return null;
      for (; ab(hb + 1, Ob + 1) > ub && (hb > 0 || Ob > 0);) hb > Ob ? hb-- : Ob--;
      return {
        horizontal: hb,
        vertical: Ob
      }
    }

    function ab(bb, ub) {
      const hb = Math.max(bb, ub);
      let Bb = 0;
      for (let Ob = -hb; Ob <= hb; Ob++)
        for (let Gb = -hb; Gb <= hb; Gb++)
          for (let Ub = -hb; Ub <= hb; Ub++) Hb(bb, ub, Ob, Gb, Ub) && Bb++;
      return Bb
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      const Gb = hb * hb + Ob * Ob;
      return bb === ub ? Gb + Bb * Bb <= bb * bb : bb > ub ? Math.abs(Bb) <= ub && Gb + Bb * Bb <= bb * bb : Gb <= bb * bb && Gb + Bb * Bb <= ub * ub
    }
  },
  36091: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => db,
      g: () => Cb,
      i: () => Wb
    });
    var Bb = hb(191),
      Ob = hb(86),
      Gb = hb(2710),
      Ub = hb(4156),
      Lb = hb(604),
      Yb = hb(36095);
    const Sb = 1048576,
      ab = 1024 * Sb,
      Hb = 400 * Sb,
      wb = 147456,
      Zb = .5,
      Xb = 1.5 * ab,
      pb = 768 * Sb;

    function ob(bb) {
      return Hb + bb * wb
    }

    function Ab(bb, ub, hb) {
      var Ob, Ub;
      let {
        footprintBytes: Lb,
        basis: Sb,
        namesLimit: Ab
      } = function(bb) {
        const {
          os: ub,
          deviceMemory: hb
        } = bb;
        if ("ios" === ub) switch ((0, Gb.f)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: ob(Yb.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: pb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Xb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: pb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof hb && Number.isFinite(hb) && hb > 0 ? {
          footprintBytes: hb * ab * Zb,
          basis: `memory-${hb}`,
          namesLimit: !0
        } : "android" === ub ? {
          footprintBytes: pb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: ob(Yb.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (hb) {
        const bb = Math.min(Lb, ob(Yb.e));
        Lb = Hb + Math.max(0, bb - Hb) / 2, Sb += "+killed", Ab = !0
      }
      null !== ub && ob(ub) < Lb && (Lb = ob(ub), Sb += "+learned", Ab = !0);
      const lb = function(bb) {
          const ub = Math.floor((bb - Hb) / wb);
          return Math.min(Yb.e, Math.max(Yb.g, ub))
        }(Lb),
        Kb = (0, Yb.m)(lb);
      return {
        footprintBytes: Lb,
        shedFootprintBytes: Ab ? Math.max(Lb, ob(lb)) : null,
        chunkCap: lb,
        maxHorizDistance: null !== (Ob = null === Kb || void 0 === Kb ? void 0 : Kb.horizontal) && void 0 !== Ob ? Ob : Bb.e.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Ub = null === Kb || void 0 === Kb ? void 0 : Kb.vertical) && void 0 !== Ub ? Ub : Bb.e.maxChunkVertAddDistance,
        basis: Sb
      }
    }
    let lb = null;

    function Kb() {
      return Ab({
        os: (0, Ob.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Gb.h)()
      }, (0, Ub.e)(), (0, Lb.E)("wasm").length > 0)
    }

    function Wb() {
      return lb ??= Kb(), lb
    }

    function Cb() {
      var bb;
      return (null !== (bb = lb) && void 0 !== bb ? bb : Kb()).basis
    }

    function db(bb, ub) {
      return bb.setChunkCap(ub.chunkCap)
    }
  },
  36201: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      g: () => wb,
      h: () => Ab,
      i: () => Sb
    });
    var Bb = hb(13),
      Ob = hb(2273),
      Gb = hb(2276),
      Ub = hb(2280),
      Lb = hb(2358),
      Yb = hb(16);

    function Sb(bb, ub) {
      return (!(0, Ub.e)() || 0 === bb && 0 === ub) && (0, Gb.y)(Ob.i.Joystick, 0, bb, ub, 0)
    }
    const ab = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Hb(bb) {
      return bb.classList.contains("TouchKeyHit") && Zb() ? null : bb.firstElementChild
    }

    function wb(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !Zb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: Xb(Hb(bb))
      }
    }

    function Zb() {
      return document.documentElement.classList.contains(Lb.k)
    }

    function Xb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function pb(bb, ub) {
      const hb = bb => Math.min(65535, Math.round(4 * bb));
      return (hb(bb) | hb(ub) << 16) >>> 0
    }

    function ob(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const Ab = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ub ? this.elements.set(bb, {
          element: ub,
          hidden: hb
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const ub of this.elements.keys()) this.measureOne(ub)
      }
      hitZone(bb, ub) {
        let hb = null,
          Bb = 1;
        for (const Ob of this.elements.keys()) {
          const Gb = this.shown(Ob);
          if (!Gb) continue;
          const {
            rect: Ub,
            element: Lb
          } = Gb, Yb = ob(Ub), Sb = Math.max(0, Ub.width / 2 - Yb.radius), ab = Math.max(0, Ub.height / 2 - Yb.radius), wb = Math.max(0, Math.abs(bb - Yb.x) - Sb), Zb = Math.max(0, Math.abs(ub - Yb.y) - ab), pb = Lb.firstElementChild;
          let Ab = Math.hypot(wb, Zb) / Yb.radius;
          const lb = Xb(Hb(Lb));
          lb && (Ab = Math.min(Ab, Math.max(2 * Math.abs(bb - Yb.x) / lb.width, 2 * Math.abs(ub - Yb.y) / lb.height))), Ab < Bb && (hb = {
            code: Ob,
            element: Lb,
            key: pb,
            ...Yb
          }, Bb = Ab)
        }
        return hb
      }
      measureOne(bb) {
        const ub = this.shown(bb);
        if (!ub) return void this.write(Ob.i.TouchZone, bb, 0, 0, 0);
        const {
          rect: hb,
          element: Bb
        } = ub, Gb = ob(hb);
        this.write(Ob.i.TouchZone, bb, Gb.x - this.canvasLeft, Gb.y - this.canvasTop, pb(hb.width, hb.height));
        const Ub = Xb(Hb(Bb));
        this.write(Ob.i.TouchZone, 256 | bb, 0, 0, Ub ? pb(Ub.width, Ub.height) : 0)
      }
      shown(bb) {
        const ub = this.elements.get(bb),
          hb = Bb.d.get("worldPanelHud");
        if (!ub || ub.hidden || "none" === hb) return null;
        const Ob = ub.element.getBoundingClientRect();
        return Ob.width <= 0 || Ob.height <= 0 ? null : {
          rect: Ob,
          element: ub.element
        }
      }
    }(Gb.y);
    (0, Yb.l)(Lb.e, (() => {
      Ab.measure()
    }))
  },
  36489: (bb, ub, hb) => {
    function Bb(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    hb.d(ub, {
      e: () => Ob,
      f: () => Ub,
      i: () => Yb,
      j: () => Lb,
      m: () => Bb,
      q: () => Gb
    });
    const Ob = "https://discord.gg/playbloxd";

    function Gb(bb) {
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

    function Ub(bb, ub) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ub ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: ub,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Lb() {
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

    function Yb(bb, ub, hb) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: hb ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: ub ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36549: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return null === bb || null === ub ? bb === ub : bb[0] === ub[0] && bb[1] === ub[1] && bb[2] === ub[2]
    }

    function Ob(bb) {
      return [bb[0] + .5, bb[1] + .5, bb[2] + .5]
    }
    hb.d(ub, {
      d: () => Ob,
      h: () => Bb
    })
  },
  36498: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb,
      f: () => Lb
    });
    const Bb = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Ob = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      Gb = {
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
      Ub = {
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
      Lb = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Bb.files,
          dependencies: Bb.dependencies,
          bundledSource: Bb.bundledSource,
          types: Bb.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Ob.files,
          dependencies: Ob.dependencies,
          bundledSource: Ob.bundledSource,
          types: Ob.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: Gb.files,
          dependencies: Gb.dependencies,
          bundledSource: Gb.bundledSource,
          types: Gb.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Ub.files,
          dependencies: Ub.dependencies,
          bundledSource: Ub.bundledSource,
          types: Ub.types
        }
      };

    function Yb(bb) {
      const ub = [],
        hb = new Set,
        Bb = bb => {
          if (hb.has(bb)) return;
          const Ob = Lb[bb];
          if (Ob) {
            hb.add(bb);
            for (const bb of Ob.dependencies) Bb(bb);
            ub.push(bb)
          }
        };
      for (const Ob of bb) Bb(Ob);
      return ub
    }
  },
  36502: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb,
      f: () => Lb,
      j: () => Ub,
      k: () => Gb,
      n: () => Sb,
      p: () => ab,
      q: () => Xb,
      t: () => Zb,
      v: () => wb
    });
    var Bb = hb(1133);
    const Ob = ["quickjs", "ses"];

    function Gb(bb) {
      return Ob.includes(bb)
    }

    function Ub(bb) {
      return bb === Bb.m || bb === Bb.o
    }

    function Lb(bb, ub) {
      return bb === Bb.m && ub === Bb.o || bb === Bb.o && ub === Bb.m
    }

    function Yb(bb) {
      const ub = Bb.o in bb,
        hb = Bb.m in bb;
      return ub && hb ? null : ub ? Bb.o : hb ? Bb.m : null
    }

    function Sb(bb, ub, hb) {
      const Bb = `${ub}/`;
      return bb.filter((bb => bb.startsWith(Bb))).map((bb => [bb, `${hb}/${bb.slice(Bb.length)}`]))
    }

    function ab(bb, ub) {
      let hb = 0;
      for (const [Bb, Ob] of Object.entries(bb)) Bb !== ub && (hb += Ob.length);
      return hb
    }
    const Hb = "@plugins/";

    function wb(bb) {
      return `${Hb}${bb}`
    }

    function Zb(bb, ub) {
      return `/node_modules/@plugins/${bb}/${ub}`
    }

    function Xb(bb) {
      if (!bb.startsWith(Hb)) return null;
      const ub = bb.slice(Hb.length);
      return function(bb) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(bb)
      }(ub) ? ub : null
    }
  },
  36513: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      e: () => Ob,
      i: () => Ub,
      k: () => Yb,
      n: () => Gb
    });
    var Bb = hb(36504);
    const Ob = 5,
      Gb = "[SCHEMATIC]",
      Ub = 1024e4;

    function Lb(bb) {
      return bb.endsWith(".bloxdschem") && (0, Bb.n)(bb.slice(0, -11) + ".ts") && bb.length <= 64
    }

    function Yb(bb) {
      return Object.fromEntries(Object.keys(bb).map((bb => [bb, Gb])))
    }
  },
  36504: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Gb,
      f: () => wb,
      i: () => Lb,
      j: () => Yb,
      l: () => Sb,
      n: () => Hb,
      q: () => ab,
      s: () => Ub
    });
    var Bb = hb(1133);
    let Ob = function(bb) {
        return bb[bb.Join = 0] = "Join", bb[bb.Leave = 1] = "Leave", bb[bb.Push = 2] = "Push", bb[bb.Cursor = 3] = "Cursor", bb[bb.Submit = 4] = "Submit", bb[bb.ReloadAsVariation = 5] = "ReloadAsVariation", bb[bb.CreateFile = 6] = "CreateFile", bb[bb.RenameFile = 7] = "RenameFile", bb[bb.DeleteFile = 8] = "DeleteFile", bb[bb.SetEngine = 9] = "SetEngine", bb[bb.RenameFolder = 10] = "RenameFolder", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.Joined = 0] = "Joined", bb[bb.Updates = 1] = "Updates", bb[bb.Presence = 2] = "Presence", bb[bb.RemoteCursor = 3] = "RemoteCursor", bb[bb.ForceClose = 4] = "ForceClose", bb[bb.LobbyFilesChanged = 5] = "LobbyFilesChanged", bb[bb.EngineSettings = 6] = "EngineSettings", bb
      }({});

    function Ub(bb) {
      return "lobby" === bb.kind ? `lobby:${bb.path}` : `codeBlock:${bb.pos[0]},${bb.pos[1]},${bb.pos[2]}`
    }

    function Lb(bb) {
      if ("lobby" === bb) return {
        kind: "lobby",
        path: Bb.m
      };
      if (bb.startsWith("lobby:")) {
        const ub = bb.slice(6);
        return Hb(ub) ? {
          kind: "lobby",
          path: ub
        } : null
      }
      const ub = bb.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return ub ? {
        kind: "codeBlock",
        pos: [parseInt(ub[1]), parseInt(ub[2]), parseInt(ub[3])]
      } : null
    }

    function Yb(bb) {
      return bb.endsWith(".d.ts")
    }

    function Sb(bb) {
      return bb.endsWith(".ts") && !Yb(bb)
    }
    const ab = 64;

    function Hb(bb) {
      if (!bb || bb !== bb.trim()) return !1;
      if (bb.length > ab) return !1;
      if (bb.startsWith("/") || bb.includes("\\") || bb.includes("\0")) return !1;
      if (!Yb(bb) && !Sb(bb) && ! function(bb) {
          return bb.endsWith(".js") && !bb.endsWith(".min.js") && !bb.endsWith(".bundle.js")
        }(bb)) return !1;
      const ub = bb.split("/");
      for (const hb of ub)
        if ("" === hb || "." === hb || ".." === hb) return !1;
      return !0
    }
    const wb = 14e3
  },
  4617: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      h: () => Bb,
      i: () => Gb,
      l: () => Yb,
      o: () => Ub
    });
    const Bb = ["sine", "triangle", "square", "sawtooth"],
      Ob = 55,
      Gb = {
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

    function Ub(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(Gb, bb) ? Gb[bb] : null
    }

    function Lb(bb, ub, hb) {
      return Math.min(hb, Math.max(ub, bb))
    }

    function Yb(bb) {
      const ub = Lb(bb.durationMs, 10, 500),
        hb = Lb(bb.attackMs, 0, ub),
        {
          intonation: Ob
        } = bb;
      return {
        waveform: Bb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Lb(bb.pitchHz, 20, 4e3),
        glideSemitones: Lb(bb.glideSemitones, -24, 24),
        durationMs: ub,
        attackMs: hb,
        releaseMs: Lb(bb.releaseMs, 0, ub - hb),
        lowpassHz: null === bb.lowpassHz ? null : Lb(bb.lowpassHz, 20, 2e4),
        volume: Lb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Lb(Ob.variationSemitones, 0, 6),
          declineSemitones: Lb(Ob.declineSemitones, 0, 12),
          questionRiseSemitones: Lb(Ob.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Lb(Ob.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Lb(bb.syllableMs, 25, 200)
      }
    }
  },
  9906: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  17986: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19952: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19954: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19959: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19961: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19968: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);