export const id = 74;
export const ids = [74];
export const modules = {
  35315: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Fy,
      g: () => Hy
    });
    var Uy = Wy(55),
      hy = Wy(1572),
      fy = Wy(35322),
      Zy = Wy.n(fy),
      cb = Wy(3742),
      Py = Wy(1546),
      oy = Wy(1268),
      By = Wy(94),
      Ky = Wy(105),
      ey = Wy(258),
      qb = Wy(898),
      sy = Wy.n(qb),
      Sy = Wy(19),
      Ey = Wy(910),
      ly = Wy(1458),
      mb = Wy(1496),
      Cy = Wy(1490),
      Ty = Wy(1636),
      Vy = Wy(1245),
      Jy = Wy(1708),
      gb = Wy(1239),
      Gy = Wy(7915),
      Oy = Wy(35324),
      Ry = Wy(35341),
      vb = Wy(1299),
      ib = Wy(2009),
      My = Wy(1042),
      Yy = Wy(35348);
    var Xy = Wy(952);
    const ny = Wy(35351),
      uy = ["enter", "t", "/"];
    let rb = !1;

    function Hy() {
      return rb || (0, mb.isTextEntry)(document.activeElement)
    }

    function ab() {
      var yb, bb;
      (0, Jy.d)();
      const Wy = null !== (yb = null === (bb = (0, Vy.g)()) || void 0 === bb ? void 0 : bb.getBoundButton("keyboardChannel")) && void 0 !== yb ? yb : null;
      return Wy ? (0, Xy.jsx)(Ty.d, {
        className: "ChatInputChannelGlyph",
        glyph: Wy
      }) : null
    }

    function Fy() {
      const {
        t: yb
      } = (0, My.D)(), {
        isTouchScreen: bb
      } = (0, Sy.h)(["isTouchScreen"]), Wy = (0, gb.q)(), [fy, qb] = (0, Uy.useState)(!1), Ty = (0, Uy.useRef)(fy), Vy = (0, Uy.useRef)(null), {
        messages: Jy,
        reportedPlayers: Hy,
        channel: Fy
      } = (0, Gy.n)(), Ly = (0, Uy.useRef)(0), Qy = (0, Uy.useRef)(""), jb = (0, Uy.useRef)(null);
      var Dy;
      Dy = jb, (0, Uy.useEffect)((() => {
        if (!(0, By.isIOS)()) return;
        const yb = Dy.current;
        let bb = null;
        const Wy = Wy => {
            const Uy = Wy.changedTouches[0];
            bb = "none" === getComputedStyle(yb).pointerEvents ? {
              id: Uy.identifier,
              y: Uy.clientY
            } : null
          },
          Uy = Wy => {
            const Uy = bb,
              hy = Uy && (0, Yy.e)(Wy.changedTouches, Uy.id);
            hy && (Wy.preventDefault(), yb.scrollBy({
              top: Uy.y - hy.clientY,
              behavior: "instant"
            }), Uy.y = hy.clientY)
          };
        return yb.addEventListener("touchstart", Wy, {
          passive: !0
        }), yb.addEventListener("touchmove", Uy, {
          passive: !1
        }), () => {
          yb.removeEventListener("touchstart", Wy), yb.removeEventListener("touchmove", Uy)
        }
      }), [Dy]);
      const [tb, wy] = (0, Uy.useState)(!1), [kb, Ny] = (0, Uy.useState)(!1), zb = (0, Uy.useRef)(tb), Iy = (0, Uy.useRef)(null), xb = (0, Uy.useRef)(!1), Ay = (0, Uy.useRef)(null), dy = (0, Uy.useRef)(null), yW = (0, Uy.useRef)(null), bW = (0, Uy.useRef)(fb);
      bW.current = fb;
      const Wb = (0, ib.l)();

      function Ub() {
        Ty.current = !1, qb(!1), dy.current.blur()
      }

      function hb(yb) {
        zb.current = yb, wy(yb)
      }

      function fb() {
        const yb = dy.current.value;
        dy.current.value = "", Zb(yb)
      }

      function Zb(yb) {
        (0, Gy.k)(yb), Ly.current = 0, hb(!1)
      }

      function cW(yb, bb) {
        0 === Ly.current && (Qy.current = dy.current.value);
        const Wy = (0, Gy.g)(Ly.current + yb, bb);
        Ly.current = Wy.stepsBack, dy.current.value = 0 === Wy.stepsBack ? Qy.current : Wy.text, setTimeout((() => {
          dy.current && dy.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Pb() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        jb.current && (!yb && zb.current || (jb.current.scrollTop = 1e5))
      }
      return (0, cb.b)(!0, fy, "ChatComponent"), (0, Uy.useEffect)((() => (rb = fy, () => {
        rb = !1
      })), [fy]), (0, oy.i)("appManagerUpdated|openEverythingMenuName", (() => {
        (0, ly.q)() && qb(!1)
      })), (0, Uy.useEffect)((() => {
        dy.current.addEventListener("blur", (yb => {
          if (null === dy.current) return;
          Array.from(document.querySelectorAll(":hover")).some((yb => yb.classList.contains("ChatInputChannel") || yb.classList.contains("ChatMsgSelectWrapper"))) || ((0, By.isMobile)() && Ty.current && "" !== dy.current.value && bW.current(), qb(!1))
        }));
        const yb = yb => {
          Vy.current.contains(yb.target) || (0, Cy.i)(yb.target) || qb(!1)
        };
        document.addEventListener("touchstart", yb, {
          capture: !0
        });
        const bb = yb => {
          (0, Ry.h)(yb.target) && (Ty.current = !1, qb(!1))
        };
        document.addEventListener("mousedown", bb, {
          capture: !0
        });
        const Wy = () => {
            clearTimeout(Iy.current), hb(!0)
          },
          Uy = () => {
            clearTimeout(Iy.current), Iy.current = setTimeout((() => {
              hb(!1), Pb()
            }), 4e3)
          },
          fy = () => {
            document.pointerLockElement ? (qb(!1), Ny(!0), xb.current = !1, hb(!1), Pb()) : Ny(!1)
          };
        jb.current.addEventListener("pointermove", (yb => {
          "touch" === yb.pointerType || xb.current || document.pointerLockElement || (xb.current = !0, clearTimeout(Iy.current))
        })), jb.current.addEventListener("pointerleave", (yb => {
          "touch" !== yb.pointerType && (xb.current = !1, zb.current && Uy())
        })), jb.current.addEventListener("pointerdown", (yb => {
          "touch" === yb.pointerType || document.pointerLockElement || (xb.current = !0, Wy())
        })), jb.current.addEventListener("wheel", (yb => {
          document.pointerLockElement || yb.deltaY >= 0 && Math.abs(jb.current.scrollTop) < 1 || (Wy(), xb.current || (Iy.current = setTimeout((() => {
            hb(!1)
          }), 4e3)))
        }), {
          passive: !0
        }), jb.current.addEventListener("touchstart", Wy), jb.current.addEventListener("touchend", Uy), jb.current.addEventListener("touchcancel", Uy), document.addEventListener("pointerlockchange", fy);
        const cb = yb => {
          if (Wb.shown && (Ty.current || ! function(yb) {
              if ((0, mb.isTypingInInput)()) return !0;
              const bb = document.activeElement;
              return (bb instanceof HTMLButtonElement || "button" === (null === bb || void 0 === bb ? void 0 : bb.getAttribute("role"))) && ["Enter", " "].includes(yb.key)
            }(yb)) && "codeEditor" !== Sy.d.get("openInGameMenuName") && "lobbyCodeEditor" !== Sy.d.get("openInGameMenuName") && !hy.gameBridge.latest("connectedGame").replay)
            if (Ty.current || !(0, ly.q)()) {
              if (Ty.current) {
                if ("ArrowUp" === yb.code || "ArrowDown" === yb.code) return cW("ArrowUp" === yb.code ? 1 : -1, !1), void yb.stopPropagation();
                if ("Tab" === yb.code) return Gy.b.selectNextChannel(), yb.stopPropagation(), void yb.preventDefault();
                if (yb.ctrlKey && py.includes(ny[yb.keyCode])) return yb.preventDefault(), void yb.stopPropagation()
              }
              if ([...uy, "esc"].includes(Zy()(yb)))
                if ("esc" !== Zy()(yb)) {
                  if (!Ty.current || "/" !== Zy()(yb)) {
                    if ("t" === Zy()(yb)) {
                      if (Ty.current) return void yb.stopPropagation();
                      yb.preventDefault()
                    }
                    Ty.current && "" !== dy.current.value && bW.current(), yb.repeat || (Ty.current || "/" === Zy()(yb) && (dy.current.value = "/", yb.preventDefault()), qb(!Ty.current))
                  }
                } else Ty.current && (qb(!1), yb.stopPropagation());
              else Ty.current && yb.stopPropagation()
            } else uy.includes(Zy()(yb)) && (yb.preventDefault(), yb.stopPropagation(), (0, ly.c)(yb))
        };
        document.addEventListener("keydown", cb, {
          capture: !0
        });
        const Py = jb.current;
        let oy = !1;
        const Ky = new ResizeObserver((() => {
            oy && (oy = !1, Pb())
          })),
          ey = () => {
            oy = !0, Ky.unobserve(Py), Ky.observe(Py)
          };
        Ay.current = ey;
        const sy = new MutationObserver(ey);
        return sy.observe(Py, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("keydown", cb, {
            capture: !0
          }), document.removeEventListener("touchstart", yb, {
            capture: !0
          }), document.removeEventListener("mousedown", bb, {
            capture: !0
          }), document.removeEventListener("pointerlockchange", fy), Ay.current = null, sy.disconnect(), Ky.disconnect(), clearTimeout(Iy.current)
        }
      }), []), (0, Cy.k)(dy, {
        open: () => {
          qb(!0)
        },
        close: () => {
          Ub()
        },
        submit: () => {
          "" !== dy.current.value && fb(), Ub()
        },
        stepHistory: () => {
          cW(1, !0)
        },
        sendLine: yb => {
          Zb(yb), Ub()
        },
        selectNextChannel: () => {
          Gy.b.selectNextChannel()
        }
      }), (0, Uy.useEffect)((() => {
        var yb;
        (Ty.current = fy, dy.current) && (fy ? (Ly.current = 0, dy.current.focus()) : (dy.current.blur(), null === (yb = Ay.current) || void 0 === yb || yb.call(Ay)))
      }), [fy]), (0, Xy.jsx)(Xy.Fragment, {
        children: (0, Xy.jsxs)("div", {
          ref: Vy,
          className: sy()("Chat", {
            Chatting: fy
          }),
          "data-camera-keeper": fy ? "" : void 0,
          children: [(0, Xy.jsx)("div", {
            ref: jb,
            className: sy()("ChatMessages", {
              HideScrollbar: !tb && !fy,
              NoScrolling: !(0, By.isMobile)() && kb
            }),
            children: (0, Xy.jsx)(Oy.d, {
              messages: Jy,
              reportedPlayers: Hy
            })
          }), bb && !fy && (0, Xy.jsx)("button", {
            type: "button",
            className: "ChatIconWrapper SmallTextLight",
            "aria-label": yb("general:chat"),
            ...(0, vb.g)((() => {
              qb(!0), yW.current.style.display = "flex", (0, By.isIOS)() && dy.current.focus()
            }), "pointerup"),
            children: (0, Xy.jsx)(Ey.e, {
              name: "comment-dots",
              className: "ChatIcon"
            })
          }), (0, Xy.jsxs)("div", {
            ref: yW,
            className: "ChatInputWrapper",
            style: {
              display: "" + (fy ? "flex" : "none")
            },
            children: [Fy && (0, Xy.jsx)("button", {
              type: "button",
              className: "ChatInputChannel",
              style: {
                backgroundColor: Fy.elementBgColor
              },
              onClick: yb => {
                Gy.b.selectNextChannel(), dy.current.focus()
              },
              children: (0, Xy.jsx)("span", {
                className: "SmallTextBold",
                children: (0, Xy.jsx)(Py.d, {
                  text: Fy.elementContent
                })
              })
            }), Fy && Wy && (0, Xy.jsx)(ab, {}), (0, Xy.jsx)("input", {
              className: "ChatInput",
              maxLength: ey.Rc,
              ref: dy,
              spellCheck: "false",
              autoComplete: "off",
              autoCorrect: "off",
              "aria-label": yb("general:chat"),
              placeholder: Fy ? `${Fy.channelName} Chat${"touchOnly"===(0,Ky.b)()||Wy?"":" [Tab]"}` : ""
            })]
          })]
        })
      })
    }
    const py = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35324: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Gy
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(7918),
      cb = Wy(23),
      Py = Wy(1956),
      oy = Wy(2886),
      By = Wy(1660),
      Ky = Wy(19),
      ey = Wy(1546),
      qb = Wy(35330),
      sy = Wy(1788),
      Sy = Wy(35337),
      Ey = Wy(2108),
      ly = Wy(2082),
      mb = Wy(2080),
      Cy = Wy(2902),
      Ty = Wy(2435),
      Vy = Wy(1612),
      Jy = Wy(952);

    function gb(yb) {
      for (let Wy = yb.length - 1; Wy >= 0; Wy--) {
        const Uy = "string" === typeof(bb = yb[Wy]) ? bb : "str" in bb && "string" === typeof bb.str ? bb.str : "";
        if ("" !== Uy.trim()) return Uy
      }
      var bb;
      return ""
    }

    function Gy(yb) {
      let {
        messages: bb,
        reportedPlayers: Wy
      } = yb;
      return (0, Jy.jsx)(Jy.Fragment, {
        children: bb.map((yb => (0, Jy.jsx)(Oy, {
          message: yb,
          reportedPlayers: Wy
        }, yb.clientChatMsgId)))
      })
    }
    const Oy = (0, Uy.memo)((function(yb) {
      var bb;
      let {
        message: Wy,
        reportedPlayers: hy
      } = yb;
      const Gy = (0, Uy.useRef)(null),
        [Oy] = (0, Uy.useState)(Ty.i),
        {
          author: Ry
        } = Wy,
        vb = null === Ry || void 0 === Ry ? void 0 : Ry.id,
        ib = null !== (bb = null === Ry || void 0 === Ry ? void 0 : Ry.name) && void 0 !== bb ? bb : void 0,
        My = (0, By.d)(ib),
        Yy = null !== Ry && void 0 !== Ry && Ry.profileEffect ? sy.f[Ry.profileEffect] : void 0,
        Xy = null !== Ry && !Ry.local,
        ny = null === Ry && null !== Wy.serverChatMsgId,
        uy = (0, Vy.i)("hiddenPlayerNames", (yb => (0, Sy.f)(Xy, ib, yb))),
        rb = null === Wy.serverChatMsgId || null === Ry ? null : {
          text: gb(Wy.content),
          serverChatMsgId: Wy.serverChatMsgId,
          authorId: Ry.id
        },
        Hy = ny || null !== rb && !hy.includes(vb),
        ab = (0, oy.g)(Xy && null !== ib && void 0 !== ib ? ib : null),
        Fy = (0, mb.h)(Gy);
      (0, Uy.useEffect)((() => () => {
        mb.e.closeIfOwner(Gy)
      }), []);
      const py = () => {
          ny ? cb.g.EZ("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            vc: (0, Zy.c)(Wy.content),
            serverChatMsgId: Wy.serverChatMsgId
          }) : null !== rb ? cb.g.EZ("OpenReportMenu", {
            playerEId: vb,
            playerName: ib,
            vc: rb.text,
            serverChatMsgId: rb.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Ly = void 0 === ib ? [] : (0, Cy.c)(ab, ib, rb);
      return (0, Jy.jsxs)("div", {
        ref: Gy,
        className: fy()("MessageWrapper", {
          ChatMsgSelectWrapper: vb,
          Still: Oy
        }),
        onContextMenu: uy ? yb => {
          (0, Ey.c)(Gy, yb, {
            ...(0, Sy.d)(vb, ib),
            showLocation: !1,
            status: null,
            extraActions: Hy ? [{
              icon: "flag",
              text: "Report",
              onClick: py
            }] : [],
            friendRequestSource: "chat"
          }, Ky.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: uy ? yb => {
          (0, ly.e)(yb, (() => (0, Sy.d)(vb, ib).playerSocialPreview))
        } : void 0,
        children: [Yy && (0, Jy.jsx)(Yy, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Xy || ny) && !Fy && (0, Jy.jsx)(qb.e, {
          className: "ChatFloatingActions",
          triggerElementRef: Gy,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: py,
            show: Hy
          }, ...Ly, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: yb => {
              (0, Py.n)(ib, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: uy && "blocked" !== ab
          }]
        }), (0, Jy.jsx)(ey.d, {
          text: Wy.content,
          friendBadgeFor: My ? ib : void 0
        }, Wy.clientChatMsgId)]
      }, Wy.clientChatMsgId)
    }))
  },
  35370: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => qb,
      f: () => sy,
      g: () => ey,
      k: () => Ky
    });
    var Uy = Wy(8408),
      hy = Wy(35379),
      fy = Wy(35383),
      Zy = Wy(7911),
      cb = Wy(1268),
      Py = Wy(55),
      oy = Wy(70),
      By = Wy(952);

    function Ky() {
      var yb;
      return (0, cb.m)(hy.e, (0, hy.s)()), (0, By.jsx)(By.Fragment, {
        children: null === (yb = (0, hy.s)()) || void 0 === yb ? void 0 : yb.content
      })
    }

    function ey(yb) {
      var bb;
      let {
        show: Wy
      } = yb;
      (0, cb.m)(hy.e, (0, hy.s)());
      const oy = null === (bb = (0, hy.s)()) || void 0 === bb ? void 0 : bb.menu;
      return (0, Py.useEffect)((() => {
        var yb;
        Wy || (null === oy || void 0 === oy || null === (yb = oy.onClose) || void 0 === yb || yb.call(oy), (0, fy.l)())
      }), [Wy, oy]), (0, Py.useEffect)((() => Wy ? (0, Zy.f)(fy.t, fy.e) : void 0), [Wy]), (0, By.jsx)(Uy.b, {
        showing: Wy,
        globallyUniqueKey: "clientGameMenu",
        children: null === oy || void 0 === oy ? void 0 : oy.content
      })
    }

    function qb(yb) {
      let {
        placement: bb = "bottom"
      } = yb;
      return (0, By.jsx)("div", {
        id: `clientGameHud-${bb}`,
        style: {
          display: "contents"
        }
      })
    }

    function sy(yb) {
      let {
        children: bb,
        placement: Wy = "bottom"
      } = yb;
      const [Uy, hy] = (0, Py.useState)(null);
      return (0, Py.useEffect)((() => {
        hy(document.getElementById(`clientGameHud-${Wy}`))
      }), [Wy]), Uy ? (0, oy.createPortal)(bb, Uy) : null
    }
  },
  35643: (yb, bb, Wy) => {
    Wy.d(bb, {
      A: () => hy,
      C: () => gb,
      c: () => Cy,
      f: () => Ey,
      g: () => sy,
      k: () => qb,
      l: () => mb,
      p: () => Oy,
      q: () => Ty,
      s: () => Jy,
      u: () => Vy,
      y: () => Gy
    });
    var Uy = Wy(55);
    const hy = 5e3,
      fy = 500,
      Zy = 3e3;
    let cb = null,
      Py = null,
      oy = null;
    const By = new Set;

    function Ky(yb) {
      cb = yb;
      for (const bb of By) bb()
    }

    function ey() {
      if (!cb || void 0 !== cb.endedAt) return;
      null !== Py && (clearTimeout(Py), Py = null), Ky({
        ...cb,
        endedAt: Date.now()
      });
      const yb = oy;
      oy = null, null === yb || void 0 === yb || yb()
    }

    function qb(yb, bb) {
      let {
        submit: Wy,
        reopen: Uy
      } = bb;
      null !== Py && clearTimeout(Py), oy = Uy, Ky({
        ...yb,
        startedAt: Date.now(),
        errors: []
      }), Py = setTimeout(ey, Zy), Wy()
    }

    function sy() {
      cb && void 0 === cb.endedAt && void 0 === cb.ranAt && (null !== Py && clearTimeout(Py), Ky({
        ...cb,
        ranAt: Date.now()
      }), Py = setTimeout(ey, hy))
    }
    const Sy = 3;

    function Ey(yb) {
      if (!cb || void 0 === cb.ranAt || void 0 !== cb.endedAt || cb.errors.includes(yb) || cb.errors.length >= Sy) return;
      const bb = 0 === cb.errors.length;
      Ky({
        ...cb,
        errors: [...cb.errors, yb]
      }), bb && (null !== Py && clearTimeout(Py), Py = setTimeout(ey, fy))
    }

    function ly(yb) {
      var bb;
      return (null === (bb = cb) || void 0 === bb ? void 0 : bb.chatKey) === yb ? cb : null
    }

    function mb(yb) {
      const bb = ly(yb);
      return bb && void 0 !== bb.endedAt ? (Ky(null), bb) : null
    }

    function Cy(yb) {
      var bb;
      (null === (bb = cb) || void 0 === bb ? void 0 : bb.chatKey) === yb && (null !== Py && (clearTimeout(Py), Py = null), oy = null, Ky(null))
    }
    const Ty = "These changes from your last answer didn't go in. Make them again.";

    function Vy(yb) {
      const bb = [...new Set(yb)].slice(0, Sy);
      return `Fix this in your change: when it ran, the world showed ${1===bb.length?"this error":"these errors"}: ${bb.join(" ")}`
    }

    function Jy(yb) {
      return `Your change didn't go in, because the code wouldn't run at all: ${yb.join(" ")} Send the whole change again with that fixed.`
    }

    function gb(yb) {
      return `Fix this in your change: ${yb.join(" ")}`
    }

    function Gy(yb) {
      var bb;
      if (void 0 === yb.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const Wy = Math.max(1, Math.round(((null !== (bb = yb.endedAt) && void 0 !== bb ? bb : yb.ranAt) - yb.ranAt) / 1e3)),
        Uy = `Your change ran in your world for ${Wy} ${1===Wy?"second":"seconds"}`;
      return 0 === yb.errors.length ? {
        title: "Tested: no errors",
        text: `${Uy} without an error.`
      } : {
        title: 1 === yb.errors.length ? "Tested: it showed an error" : `Tested: it showed ${yb.errors.length} errors`,
        text: `${Uy} and showed: ${yb.errors.join(" ")}`
      }
    }

    function Oy(yb) {
      const [bb, Wy] = (0, Uy.useState)((() => ly(yb)));
      return (0, Uy.useEffect)((() => {
        const bb = () => {
          Wy(ly(yb))
        };
        return bb(), By.add(bb), () => {
          By.delete(bb)
        }
      }), [yb]), bb
    }
  },
  35646: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => Uy
    });
    const Uy = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function hy(yb, bb, Wy) {
      return {
        key: yb,
        label: `Code block at ${bb.join(", ")}`,
        codeBlock: !0,
        pos: bb,
        canChangePos: Wy
      }
    }
  },
  35638: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      f: () => fy,
      g: () => Zy,
      k: () => hy
    });
    const Uy = "code block",
      hy = "World Code/";

    function fy(yb) {
      return yb.trim().toLowerCase().startsWith(hy.toLowerCase())
    }

    function Zy(yb) {
      return yb.trim().slice(hy.length).replace(/^\.?\//, "")
    }
  },
  35615: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => ey,
      F: () => ny,
      H: () => Gy,
      J: () => Oy,
      K: () => Xy,
      e: () => sy,
      i: () => Py,
      j: () => Sy,
      l: () => vb,
      m: () => cb,
      p: () => By,
      q: () => qb,
      u: () => Ey,
      v: () => Ty,
      y: () => ib,
      z: () => Ry
    });
    var Uy = Wy(35604),
      hy = Wy(35613);
    const fy = "bloxd-world-code-directory-sync",
      Zy = "handles",
      cb = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Py(yb, bb) {
      return `${yb}::${bb}`
    }
    const oy = new Set(["node_modules", ".git"]);

    function By() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Ky() {
      return new Promise(((yb, bb) => {
        const Wy = indexedDB.open(fy, 1);
        Wy.onupgradeneeded = () => {
          const yb = Wy.result;
          yb.objectStoreNames.contains(Zy) || yb.createObjectStore(Zy)
        }, Wy.onsuccess = () => {
          yb(Wy.result)
        }, Wy.onerror = () => {
          var yb;
          bb(null !== (yb = Wy.error) && void 0 !== yb ? yb : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function ey(yb, bb) {
      const Wy = await Ky();
      try {
        await new Promise(((Uy, hy) => {
          const fy = Wy.transaction(Zy, "readwrite");
          fy.objectStore(Zy).put(bb, yb), fy.oncomplete = () => {
            Uy()
          }, fy.onerror = () => {
            var yb;
            hy(null !== (yb = fy.error) && void 0 !== yb ? yb : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        Wy.close()
      }
    }
    async function qb(yb) {
      const bb = await Ky();
      try {
        return await new Promise(((Wy, Uy) => {
          const hy = bb.transaction(Zy, "readonly").objectStore(Zy).get(yb);
          hy.onsuccess = () => {
            var yb;
            Wy(null !== (yb = hy.result) && void 0 !== yb ? yb : null)
          }, hy.onerror = () => {
            var yb;
            Uy(null !== (yb = hy.error) && void 0 !== yb ? yb : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        bb.close()
      }
    }
    async function sy(yb) {
      const bb = await Ky();
      try {
        await new Promise(((Wy, Uy) => {
          const hy = bb.transaction(Zy, "readwrite");
          hy.objectStore(Zy).delete(yb), hy.oncomplete = () => {
            Wy()
          }, hy.onerror = () => {
            var yb;
            Uy(null !== (yb = hy.error) && void 0 !== yb ? yb : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        bb.close()
      }
    }
    async function Sy(yb) {
      const bb = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await yb.queryPermission(bb) || "granted" === await yb.requestPermission(bb)
    }
    async function Ey(yb) {
      if (!By()) return null;
      try {
        const bb = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await ey(yb, bb), bb
      } catch (bb) {
        if (function(yb) {
            return yb instanceof DOMException && "AbortError" === yb.name
          }(bb)) return null;
        throw bb
      }
    }

    function ly(yb) {
      return yb.startsWith(".") || oy.has(yb)
    }

    function mb(yb) {
      if (!yb) return !0;
      const bb = yb.split("/");
      for (const Wy of bb)
        if ("" === Wy || "." === Wy || ".." === Wy) return !1;
      return !0
    }
    async function Cy(yb, bb, Wy) {
      for await (const [fy, Zy] of yb.entries()) {
        if ("directory" === Zy.kind) {
          if (ly(fy)) continue;
          const yb = bb ? `${bb}/${fy}` : fy;
          if (!mb(yb)) continue;
          await Cy(Zy, yb, Wy);
          continue
        }
        const yb = bb ? `${bb}/${fy}` : fy;
        if (!(0, Uy.w)(yb) && !(0, hy.d)(yb)) continue;
        const cb = await Zy.getFile();
        Wy[yb] = (0, hy.d)(yb) ? await My(cb) : await cb.text()
      }
    }
    async function Ty(yb) {
      const bb = {};
      return await Cy(yb, "", bb), bb
    }

    function Vy(yb) {
      return !(!yb || yb !== yb.trim() || yb.startsWith("/") || yb.includes("\\") || yb.includes("\0")) && mb(yb)
    }
    async function Jy(yb, bb, Wy) {
      const Uy = bb.split("/"),
        hy = Uy[Uy.length - 1];
      let fy = yb;
      for (let Zy = 0; Zy < Uy.length - 1; Zy++) fy = await fy.getDirectoryHandle(Uy[Zy], {
        create: Wy
      });
      return {
        dir: fy,
        fileName: hy
      }
    }
    async function gb(yb, bb, Wy) {
      if (!Vy(bb)) throw new Error(`Refusing to write unsafe path: ${bb}`);
      const {
        dir: Uy,
        fileName: hy
      } = await Jy(yb, bb, !0), fy = await Uy.getFileHandle(hy, {
        create: !0
      }), Zy = await fy.createWritable();
      await Zy.write(Wy), await Zy.close()
    }
    async function Gy(yb, bb, Wy) {
      const Uy = await async function(yb, bb) {
        if (!Vy(bb)) return null;
        try {
          const {
            dir: Wy,
            fileName: Uy
          } = await Jy(yb, bb, !1), hy = await Wy.getFileHandle(Uy), fy = await hy.getFile();
          return await fy.text()
        } catch (Wy) {
          if (Wy instanceof DOMException && ("NotFoundError" === Wy.name || "NotAllowedError" === Wy.name)) return null;
          throw Wy
        }
      }(yb, bb);
      Uy !== Wy && await gb(yb, bb, Wy)
    }
    async function Oy(yb, bb, Wy) {
      if (!(0, Uy.w)(bb) && !(0, hy.d)(bb)) throw new Error(`Refusing to write non-allowlisted path: ${bb}`);
      if ((0, hy.d)(bb)) {
        if (await Yy(yb, bb) === cb) throw new Error(`Move the binary schematic ${bb} outside the linked folder before syncing its placeholder`)
      }
      await gb(yb, bb, Wy)
    }
    async function Ry(yb, bb) {
      if (!Vy(bb)) throw new Error(`Refusing to remove unsafe path: ${bb}`);
      try {
        const {
          dir: Wy,
          fileName: Uy
        } = await Jy(yb, bb, !1);
        await Wy.removeEntry(Uy)
      } catch (Wy) {
        if (Wy instanceof DOMException && ("NotFoundError" === Wy.name || "NotAllowedError" === Wy.name)) return;
        throw Wy
      }
    }
    async function vb(yb, bb) {
      if (!Vy(bb)) return null;
      try {
        const Wy = bb.split("/");
        let Uy = yb;
        for (const yb of Wy) Uy = await Uy.getDirectoryHandle(yb);
        return Uy
      } catch (Wy) {
        if (Wy instanceof DOMException && ("NotFoundError" === Wy.name || "NotAllowedError" === Wy.name)) return null;
        throw Wy
      }
    }
    async function ib(yb, bb) {
      if ((0, Uy.w)(bb) || (0, hy.d)(bb)) {
        if ((0, hy.d)(bb)) {
          if (await Yy(yb, bb) === cb) throw new Error(`Refusing to remove a binary schematic: ${bb}`)
        }
        await Ry(yb, bb)
      }
    }
    async function My(yb) {
      if (yb.size > 64) return cb;
      const bb = await yb.text();
      return Array.from(bb).some((yb => {
        const bb = yb.charCodeAt(0);
        return bb < 9 || bb > 13 && bb < 32 || 65533 === bb
      })) ? cb : bb
    }
    async function Yy(yb, bb) {
      try {
        const {
          dir: Wy,
          fileName: Uy
        } = await Jy(yb, bb, !1);
        return await My(await (await Wy.getFileHandle(Uy)).getFile())
      } catch (Wy) {
        if (Wy instanceof DOMException && "NotFoundError" === Wy.name) return null;
        throw Wy
      }
    }
    async function Xy(yb, bb) {
      const Wy = await Ty(yb);
      for (const Uy of Object.keys(Wy)) Uy in bb || (0, hy.d)(Uy) || await ib(yb, Uy);
      for (const [fy, Zy] of Object.entries(bb))((0, Uy.w)(fy) || (0, hy.d)(fy)) && await Oy(yb, fy, Zy)
    }

    function ny(yb, bb) {
      var Wy, Uy;
      let hy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const fy = null !== (Wy = hy.debounceMs) && void 0 !== Wy ? Wy : 300,
        Zy = null !== (Uy = hy.pollMs) && void 0 !== Uy ? Uy : 1e3;
      let cb = !1,
        Py = null,
        oy = null,
        By = null;
      const Ky = () => {
          cb || (Py && clearTimeout(Py), Py = setTimeout((() => {
            Py = null, ey()
          }), fy))
        },
        ey = async () => {
          if (!cb) try {
            if (!await Sy(yb, "readwrite")) return;
            const Wy = await Ty(yb);
            cb || bb(Wy)
          } catch (Wy) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", Wy)
          }
        };
      ey();
      const qb = window.FileSystemObserver;
      if (qb) try {
        By = new qb((() => {
          Ky()
        })), By.observe(yb, {
          recursive: !0
        })
      } catch (sy) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", sy), By = null
      }
      return By || (oy = setInterval((() => {
        Ky()
      }), Zy)), () => {
        cb = !0, Py && clearTimeout(Py), oy && clearInterval(oy), By && By.disconnect()
      }
    }
  },
  4037: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ey,
      d: () => ly
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(1042),
      cb = Wy(4046),
      Py = Wy(1546),
      oy = Wy(2005),
      By = Wy(4050),
      Ky = Wy(952);
    const ey = new WeakMap;
    let qb = 0;

    function sy(yb) {
      let bb = ey.get(yb);
      return void 0 === bb && (bb = qb++, ey.set(yb, bb)), bb
    }

    function Sy(yb) {
      let {
        piece: bb
      } = yb;
      return "space" === bb.kind ? (0, Ky.jsx)(Ky.Fragment, {
        children: bb.text
      }) : (0, Ky.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${bb.delayMs}ms`
        },
        children: (0, Ky.jsx)(cb.c, {
          text: "icon" === bb.kind ? `[[${bb.icon}]]` : bb.text
        })
      })
    }

    function Ey(yb) {
      let {
        display: bb
      } = yb;
      const {
        selectedLanguage: Wy
      } = (0, Zy.D)(), Uy = (0, fy.useMemo)((() => (0, By.d)((0, By.f)(bb).plan.pieces)), [bb, Wy.code]);
      return (0, Ky.jsxs)("div", {
        className: hy()("Dialogue", {
          DialogueAnimateIn: !1 !== bb.animateIn
        }),
        children: [bb.speakerName && (0, Ky.jsx)(Py.d, {
          text: bb.speakerName,
          className: "DialogueSpeaker"
        }), (0, Ky.jsx)("p", {
          className: "DialogueLine",
          children: Uy.map(((yb, bb) => 1 === yb.length && "space" === yb[0].kind ? yb[0].text : (0, Ky.jsx)("span", {
            className: "DialogueGlue",
            children: yb.map(((yb, bb) => (0, Ky.jsx)(Sy, {
              piece: yb
            }, bb)))
          }, bb)))
        })]
      })
    }
    const ly = (0, fy.memo)((function() {
      const yb = (0, oy.k)("dialogue");
      return (0, Ky.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: yb && (0, Ky.jsx)(Ey, {
          display: yb
        }, sy(yb))
      })
    }))
  },
  35471: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => qb,
      h: () => sy
    });
    var Uy = Wy(55),
      hy = Wy(2332),
      fy = Wy(1268),
      Zy = Wy(1612),
      cb = Wy(35406),
      Py = Wy(547),
      oy = Wy(898),
      By = Wy.n(oy),
      Ky = Wy(952);
    const ey = {},
      qb = (0, Uy.memo)((function() {
        const yb = (0, hy.e)();
        return (0, fy.i)("damagedByOtherPlayer", (bb => {
          let {
            xyy: Wy,
            direction: Uy
          } = bb;
          const hy = Wy || "nonDirectional";
          if (ey[hy]) {
            const bb = ey[hy];
            clearTimeout(bb.timeout), bb.direction = Uy, bb.timeout = setTimeout((() => {
              delete ey[hy], yb()
            }), 800)
          } else ey[hy] = {
            direction: Uy,
            rUy: null,
            timeout: setTimeout((() => {
              delete ey[hy], yb()
            }), 800)
          };
          yb()
        })), (0, Zy.e)("kill", (bb => {
          let {
            killer: Wy,
            victim: Uy
          } = bb;
          const hy = Uy.id;
          Wy.local && hy && hy in ey && (clearTimeout(ey[hy].timeout), delete ey[hy], yb())
        })), (0, Uy.useEffect)((() => {
          const yb = (0, cb.d)("turnDamageIndicators", sy);
          return () => {
            yb();
            for (const yb in ey) clearTimeout(ey[yb].timeout), delete ey[yb]
          }
        }), []), (0, Ky.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(ey).map((yb => {
            let [bb, Wy] = yb;
            const Uy = (0, Py.D)(Wy.direction);
            return (0, Ky.jsx)("div", {
              ref: yb => {
                ey[bb] && (ey[bb].rUy = yb)
              },
              className: By()("DamageIndicator", {
                DamageIndicatorFullCircle: Uy
              })
            }, bb)
          }))
        })
      }));

    function sy(yb) {
      for (const bb in ey) {
        const {
          direction: Wy,
          rUy: Uy
        } = ey[bb];
        if ((0, Py.D)(Wy)) continue;
        const hy = Wy - yb;
        Uy.style.rotate = `${hy}rad`
      }
    }
  },
  35330: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ey
    });
    var Uy = Wy(55),
      hy = Wy(70),
      fy = Wy(1042),
      Zy = Wy(898),
      cb = Wy.n(Zy),
      Py = Wy(1496),
      oy = Wy(910),
      By = Wy(1136),
      Ky = Wy(1304),
      ey = Wy(1477),
      qb = Wy(1299),
      sy = Wy(952);
    const Sy = 14;

    function Ey(yb) {
      let {
        className: bb,
        triggerElementRef: Wy,
        options: Zy
      } = yb;
      const {
        t: Ey
      } = (0, fy.D)(), [ly, mb] = (0, Uy.useState)(!1), [Cy, Ty] = (0, Uy.useState)({
        x: 0,
        y: 0
      }), Vy = (0, Uy.useRef)(null);
      (0, Uy.useEffect)((() => {
        let yb = null;
        const bb = bb => {
            yb = {
              x: bb.clientX,
              y: bb.clientY
            }
          },
          Uy = bb => {
            if (null === yb || !(0, qb.e)(yb, bb)) return;
            yb = null;
            const Wy = Sy * (0, Py.getRemInPx)();
            Ty({
              x: Math.min(bb.clientX, window.innerWidth - Wy - 5),
              y: bb.clientY
            }), mb((yb => !yb))
          },
          hy = yb => {
            var bb;
            null !== (bb = Vy.current) && void 0 !== bb && bb.contains(yb.relatedTarget) || mb(!1)
          },
          fy = Wy.current;
        return fy.addEventListener("pointerdown", bb), fy.addEventListener("pointerup", Uy), fy.addEventListener("mouseleave", hy), () => {
          fy.removeEventListener("pointerdown", bb), fy.removeEventListener("pointerup", Uy), fy.removeEventListener("mouseleave", hy)
        }
      }), [Wy]), (0, Uy.useEffect)((() => {
        if (ly) return (0, ey.e)("pointerdown", (yb => {
          !Vy.current || Vy.current.contains(yb.target) || Wy.current.contains(yb.target) || mb(!1)
        }))
      }), [ly, Wy]), (0, Uy.useLayoutEffect)((() => {
        if (!ly || !Vy.current) return;
        const yb = Vy.current.getBoundingClientRect().height,
          bb = Math.max(5, window.innerHeight - yb - 5);
        Cy.y > bb && Ty({
          x: Cy.x,
          y: bb
        })
      }), [ly, Cy]), (0, By.x)("popup", Vy, (() => {
        mb(!1)
      }), ly);
      const Jy = Zy.filter((yb => !1 !== yb.show));
      return ly && 0 !== Jy.length ? (0, hy.createPortal)((0, sy.jsx)("div", {
        ref: Vy,
        className: cb()("FloatingActions", {
          [bb]: bb
        }),
        style: {
          width: `${Sy}rem`,
          top: Cy.y,
          left: Cy.x
        },
        children: Jy.map((yb => {
          let {
            icon: bb,
            text: Wy,
            onPointerDown: Uy,
            analyticsClick: hy
          } = yb;
          return (0, sy.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: yb => {
              void 0 !== hy && (0, Ky.f)(hy), Uy(yb), mb(!1), yb.stopPropagation()
            },
            children: [(0, sy.jsx)(oy.e, {
              name: bb
            }), (0, sy.jsx)("div", {
              children: Ey(Wy)
            })]
          }, Wy)
        }))
      }), function() {
        var yb;
        return null !== (yb = document.querySelector(".WholeAppWrapperInner")) && void 0 !== yb ? yb : document.body
      }()) : null
    }
  },
  35499: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => uf
    });
    var Uy = Wy(35370),
      hy = Wy(55),
      fy = Wy(1701),
      Zy = Wy(3732),
      cb = Wy(3739),
      Py = Wy(2005),
      oy = Wy(1572),
      By = Wy(952);

    function Ky(yb) {
      let {
        className: bb,
        style: Wy,
        vw: Uy,
        maxPx: hy,
        children: fy
      } = yb;
      console.assert("number" === typeof Uy && "number" === typeof hy, "vw and maxPx passed to Text must be numbers");
      const Zy = window.innerWidth * (Uy / 100) > hy ? `${hy}px` : `${Uy}vw`;
      return (0, By.jsx)("div", {
        className: bb,
        style: {
          ...Wy,
          fontSize: Zy
        },
        children: fy
      })
    }
    var ey = Wy(35507),
      qb = Wy(1273),
      sy = Wy(23),
      Sy = Wy(1595),
      Ey = Wy(910);

    function ly(yb) {
      let {
        tasks: bb,
        lastDisplayedTasks: Wy
      } = yb;
      return (0, By.jsx)(By.Fragment, {
        children: Object.keys(bb).map((yb => (0, By.jsx)(mb, {
          task: bb[yb],
          lastDisplayedAs: Wy[yb]
        }, bb[yb].text)))
      })
    }

    function mb(yb) {
      let {
        task: bb,
        lastDisplayedAs: Wy
      } = yb;
      const [Uy, fy] = (0, hy.useState)(null !== Wy && void 0 !== Wy && Wy.progress ? Wy.progress / bb.goal : 0), [Zy, cb] = (0, hy.useState)(!1), [Py, oy] = (0, hy.useState)(bb.claimed || !1);
      return (0, hy.useEffect)((() => {
        fy(bb.progress / bb.goal)
      }), [bb.progress, bb.goal]), Py ? null : (0, By.jsxs)("div", {
        className: "Task",
        children: [(0, By.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, By.jsx)(Ky, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: bb.text
          })
        }), bb.progress < bb.goal ? (0, By.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Uy ? (0, By.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Uy + "%"
            }
          }) : null, (0, By.jsx)("div", {
            className: "TaskProgressText",
            children: `${bb.progress}/${bb.goal}`
          })]
        }) : (0, By.jsx)(qb.i, {
          className: "ClaimRewardButton",
          onClick: () => {
            cb(!0)
          },
          children: (0, By.jsx)(Ky, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), Zy ? (0, By.jsx)(Cy, {
          task: bb,
          close: () => {
            bb.claimed = !0, oy(!0), cb(!1)
          }
        }) : null]
      })
    }

    function Cy(yb) {
      let {
        task: bb,
        close: Wy
      } = yb;
      const [Uy, fy] = (0, hy.useState)({}), [Zy, cb] = (0, hy.useState)("closed");
      (0, hy.useEffect)((() => {
        let yb;
        return "animStart" === Zy && (yb = setTimeout((() => {
          cb("animEnd")
        }), 700)), () => {
          clearTimeout(yb)
        }
      }), [Zy]), (0, ey.b)((() => {
        oy.gameBridge.send("completeTask", bb.text)
      }));
      const Ky = (0, Py.k)("currencyAmounts");
      return (0, By.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === Zy)
            if (0 === bb.rewards.length) Wy(), oy.gameBridge.send("completeTask", bb.text);
            else {
              const yb = {
                ...Sy.c.get("currencyAmounts")
              };
              for (const bb in Uy) yb[bb] = {
                ...yb[bb],
                amount: yb[bb].amount + Uy[bb]
              };
              Sy.c.apply({
                currencyAmounts: yb
              }), cb("closed")
            }
          else "closed" === Zy && (fy(bb.rewards.pop()), cb("animStart"))
        },
        children: [(0, By.jsx)("img", {
          className: "Chest",
          alt: "closed" !== Zy ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==Zy?"open":"closed"}.png`
        }), (0, By.jsx)("div", {
          className: "Rewards",
          children: "closed" !== Zy ? Object.keys(Uy).map((yb => {
            const bb = null === Ky || void 0 === Ky ? void 0 : Ky[yb];
            return !bb || bb.hidden ? null : (0, By.jsxs)("div", {
              className: "Reward",
              children: [(0, By.jsx)(Ey.e, {
                name: bb.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: bb.iconColour
                }
              }), (0, By.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === Zy ? 0 : Uy[yb]
              })]
            }, yb)
          })) : null
        }), "animStart" === Zy ? (0, By.jsx)(Ty, {}) : null, (0, By.jsx)("div", {
          className: "ChestsLeft",
          children: bb.rewards.length
        })]
      })
    }

    function Ty() {
      const [yb, bb] = (0, hy.useState)(0);
      (0, hy.useEffect)((() => {
        bb(1)
      }), []);
      return (0, By.jsx)(By.Fragment, {
        children: Array.from({
          length: 40
        }).map(((bb, Wy) => (0, By.jsx)(Ey.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * yb * Math.cos(Wy / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * yb * Math.sin(Wy / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === yb ? 1 : 0
          }
        }, Wy)))
      })
    }
    sy.g.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const yb = new Image,
          bb = new Image;
        yb.src = "/textures/miscImages/Treasure Chest open.png", bb.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var Vy = Wy(2459),
      Jy = Wy(980),
      gb = Wy(1546),
      Gy = Wy(1268),
      Oy = Wy(258),
      Ry = Wy(1612),
      vb = Wy(1194);

    function ib(yb) {
      var bb, Wy;
      let {
        byId: Uy,
        localId: hy
      } = yb;
      return null === hy ? null : null !== (bb = null === (Wy = Uy[hy]) || void 0 === Wy ? void 0 : Wy.name) && void 0 !== bb ? bb : null
    }

    function My(yb) {
      let {
        lbStats: bb,
        storedState: Wy = {}
      } = yb;
      const {
        userContext: Uy
      } = (0, Jy.c)(), fy = (0, Ry.i)("players", ib), [Zy, cb] = (0, hy.useState)(Wy.selectedCat || (null === bb || void 0 === bb ? void 0 : bb[0]) || null), [Py, Ky] = (0, hy.useState)(Wy.selectedTimeframe || "Today"), [ey, qb] = (0, hy.useState)(null);
      (0, hy.useEffect)((() => {
        null === Zy && null !== bb && bb.length > 0 && cb(bb[0])
      }), [bb, Zy]);
      const [sy, Sy] = (0, hy.useState)(Wy.seeingTop || !1), [Ey, ly] = (0, hy.useState)(!1), mb = (0, hy.useCallback)((() => {
        null !== Zy && null !== Py && (oy.gameBridge.send("requestLeaderboard", {
          category: Zy.value,
          timeframe: Py,
          seeTop: sy
        }), Ty(!0), ny && uy(null))
      }), [Zy, Py, Wy, sy]);
      (0, hy.useEffect)((() => {
        mb(), Wy.selectedCat = Zy, Wy.selectedTimeframe = Py, Wy.seeingTop = sy
      }), [Zy, Py, Wy, sy, mb]), (0, hy.useEffect)((() => {
        if ((null === ey || void 0 === ey ? void 0 : ey.length) > 0)
          if (sy) sy && ly(null === My(ey));
          else {
            for (const yb of ey)
              if (1 === yb.place) return void ly(!1);
            ly(!0)
          }
      }), [ey, sy]), (0, Gy.i)("leaderboardResponse", (yb => {
        let {
          category: Wy,
          timeframe: Uy,
          data: hy
        } = yb;
        for (let fy = 0; fy < bb; fy++)
          if (bb[fy].value === Wy) {
            cb(bb[fy]);
            break
          } Ky(Uy), qb(hy), Ty(!1)
      }));
      const [Cy, Ty] = (0, hy.useState)(!0);

      function My(yb) {
        const bb = ib(oy.gameBridge.latest("players"));
        for (let Wy = 0; Wy < yb.length; Wy++)
          if (yb[Wy].name === bb) return yb[Wy].place;
        return null
      }
      const [Yy, Xy] = (0, hy.useState)(!1), [ny, uy] = (0, hy.useState)(null);
      (0, hy.useEffect)((() => {
        if (ey && !Yy) {
          const yb = My(ey);
          yb < (Wy.lastSeenPlayerPlace || 0) && uy(Wy.lastSeenPlayerPlace - yb), Xy(!0)
        }
      }), [ey, Wy, Yy]), (0, hy.useEffect)((() => () => {
        ey && (Wy.lastSeenPlayerPlace = My(ey))
      }), [ey, Wy]);
      const rb = (0, hy.useRef)(null),
        [Hy, ab] = (0, hy.useState)(void 0);
      return (0, hy.useEffect)((() => {
        var yb, bb;
        Hy !== (null === (yb = rb.current) || void 0 === yb ? void 0 : yb.offsetHeight) && ab(null === (bb = rb.current) || void 0 === bb ? void 0 : bb.offsetHeight)
      })), Uy.isLoggedIn() ? (0, By.jsxs)(By.Fragment, {
        children: [(0, By.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, By.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, By.jsx)(Vy.c, {
              options: bb.map((yb => ({
                label: yb.label,
                value: yb.value
              }))),
              value: Zy,
              onChange: yb => {
                cb(yb)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, By.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, By.jsx)(Vy.c, {
              options: Oy.Ic.map((yb => ({
                value: yb,
                label: yb,
                className: "LBDropdownMenuItem"
              }))),
              value: Py,
              onChange: yb => {
                Ky(yb.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), Ey ? (0, By.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              Sy(!sy)
            },
            children: sy ? "See Yourself" : "See Top"
          }) : null]
        }), (0, By.jsx)("div", {
          className: "LBTableWrapper",
          children: Cy ? (0, By.jsx)("div", {
            className: "LoaderContainer",
            children: (0, By.jsx)(vb.e, {})
          }) : null === ny ? (0, By.jsx)(By.Fragment, {
            children: (0, By.jsxs)("table", {
              className: "LBTable",
              children: [(0, By.jsx)("thead", {
                className: "LBTableTHead",
                ref: rb,
                children: (0, By.jsxs)("tr", {
                  children: [(0, By.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, By.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, By.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: Zy.label.toUpperCase()
                  })]
                })
              }), (0, By.jsx)("tbody", {
                children: ey.map((yb => (0, By.jsxs)("tr", {
                  className: "LBTableTR " + (yb.name === fy ? "LBTableTRYou" : ""),
                  children: [(0, By.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${yb.place}`
                  }), (0, By.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, By.jsx)(gb.d, {
                      text: [{
                        entityName: yb.name
                      }]
                    })
                  }), (0, By.jsx)("td", {
                    className: "LBTableTD",
                    children: yb.stat
                  })]
                }, yb.name)))
              })]
            })
          }) : (0, By.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              uy(null)
            },
            children: (0, By.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, By.jsx)("div", {
                className: "TriangleUp"
              }), (0, By.jsx)("div", {
                className: "LBIncreaseText",
                children: `${ny} Place${ny>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, By.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, By.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, By.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Yy = Wy(974),
      Xy = Wy(94),
      ny = Wy(33),
      uy = Wy(2720);
    const rb = (0, hy.memo)((function(yb) {
      let {
        show: bb,
        onClose: Wy
      } = yb;
      (0, Yy.d)();
      const Uy = (0, Py.k)("_tasks"),
        fy = (0, Py.k)("_availableLeaderboards"),
        [oy, Ky] = (0, hy.useState)({});
      Uy && Object.keys(Uy).length > 0 && 0 === Object.keys(oy).length && Ky(Uy);
      const [ey] = (0, hy.useState)({
        tasks: {},
        leaderboard: {}
      }), qb = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Uy && Object.keys(Uy).length > 0,
          content: (0, By.jsx)(ly, {
            tasks: Uy,
            lastDisplayedTasks: oy
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === fy || void 0 === fy ? void 0 : fy.length) > 0,
          content: (0, By.jsx)(My, {
            lbStats: fy,
            storedState: ey.leaderboard
          })
        }
      };

      function sy() {
        for (const yb in qb)
          if (qb[yb].getIsDefined()) return yb;
        return null
      }
      const [Sy, Ey] = (0, hy.useState)(sy());

      function mb() {
        Ky({
          ...Uy
        }), Wy()
      }(0, hy.useEffect)((() => {
        Sy || Ey(sy())
      }), [sy()]), (0, cb.b)(!0, Sy && bb), (0, hy.useEffect)((() => {
        bb && !Sy && (console.log("CLOSE"), mb())
      }), [bb, Sy]);
      const [Cy, Ty] = (0, hy.useState)(!1);
      return (0, hy.useEffect)((() => {
        bb && Sy && !Cy && Ty(!0)
      }), [bb, Cy, Sy]), (0, hy.useEffect)((() => {
        !Cy && Uy && "tasks" !== Sy && Ey("tasks")
      }), [Cy, Uy, Sy]), (0, By.jsx)(By.Fragment, {
        children: Sy ? (0, By.jsx)(uy.d, {
          className: "RetentionFeaturesWrapper",
          show: bb,
          children: (0, By.jsxs)(Zy.c, {
            close: mb,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, By.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, By.jsx)(ab, {}), (0, By.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, By.jsx)(Hy, {
                  setCategory: Ey,
                  menuCategories: qb,
                  selectedCat: Sy
                }), (0, By.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: qb[Sy].content
                })]
              })]
            }), (0, By.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Xy.featureFlags.useDiscord && (0, By.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, By.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, By.jsx)(Fy, {
                    tasks: Uy
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Hy(yb) {
      let {
        selectedCat: bb,
        setCategory: Wy,
        menuCategories: Uy
      } = yb;
      return (0, By.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Uy).map((yb => Uy[yb].getIsDefined() ? (0, By.jsx)("div", {
          className: "MenuHeaderCategory " + (yb === bb ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            Wy(yb)
          },
          children: Uy[yb].Title
        }, yb) : null))
      })
    }

    function ab() {
      const yb = (0, Py.k)("currencyAmounts");
      return (0, By.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== yb && void 0 !== yb ? yb : {}).map((bb => {
          const Wy = yb[bb];
          return Wy.hidden ? null : (0, By.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, By.jsx)(Ey.e, {
              name: Wy.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: Wy.iconColour
              }
            }), (0, By.jsx)("div", {
              className: "UiCurrencyAmount",
              children: Wy.amount
            })]
          }, bb)
        }))
      })
    }

    function Fy(yb) {
      let {
        tasks: bb
      } = yb;
      return (0, By.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, By.jsx)(Ey.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            ny.e.setItem("DiscordPressed", !0), oy.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in bb && sy.g.EZ("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, By.jsx)(fy.d, {})]
      })
    }
    var py = Wy(19),
      Ly = Wy(1458),
      Qy = Wy(35315),
      jb = Wy(8352),
      Dy = Wy(3838),
      tb = Wy(143),
      wy = Wy(1066),
      kb = Wy(1217),
      Ny = Wy(2127),
      zb = Wy(1042),
      Iy = Wy(1461),
      xb = Wy(1966),
      Ay = Wy(1956),
      dy = Wy(1738),
      yW = Wy(1676),
      bW = Wy(1122),
      Wb = Wy(1304),
      Ub = Wy(3788);

    function hb(yb) {
      const bb = {
        lobbyName: yb,
        answer: null,
        response: Ub.c.getSocialSettings(yb)
      };
      return bb.response.then((yb => {
        bb.answer = yb
      })), bb
    }
    const fb = new Map;

    function Zb(yb) {
      const [bb] = (0, hy.useState)((() => function(yb) {
        var bb;
        const Wy = null !== (bb = fb.get(yb)) && void 0 !== bb ? bb : null;
        return null !== Wy && void 0 !== Wy && Wy.answer && "error" in Wy.answer ? null : Wy
      }(yb))), [Wy, Uy] = (0, hy.useState)((() => null !== bb && void 0 !== bb && bb.answer && "settings" in bb.answer ? bb.answer.settings : null)), [fy, Zy] = (0, hy.useState)(!0), [cb, Py] = (0, hy.useState)(null !== Wy), oy = (0, hy.useRef)(Wy);
      oy.current = Wy;
      const By = (0, hy.useRef)(0),
        Ky = (0, hy.useRef)(0),
        ey = (0, hy.useRef)(!1),
        qb = (0, hy.useRef)(!0),
        sy = (0, hy.useCallback)((async bb => {
          const Wy = ++By.current,
            hy = await (null !== bb && void 0 !== bb ? bb : Ub.c.getSocialSettings(yb));
          qb.current && Wy === By.current && (Py(!0), Zy(!1), "error" in hy || Uy(hy.settings))
        }), [yb]),
        Sy = (0, hy.useCallback)((() => {
          Zy(!0), sy()
        }), [sy]);
      (0, hy.useEffect)((() => (qb.current = !0, fb.delete(yb), Zy(!0), sy(null === bb || void 0 === bb ? void 0 : bb.response), () => {
        qb.current = !1
      })), [sy, yb, bb]);
      const Ey = yb => {
        By.current++, Zy(!1), oy.current = yb, Uy(yb)
      };
      return {
        settings: Wy,
        loading: fy,
        answered: cb,
        retry: Sy,
        change: async function(bb, Wy) {
          let {
            quiet: Uy = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const hy = oy.current;
          if (null === hy) return !1;
          Ey(Wy(hy)), Ky.current > 0 && (ey.current = !0), Ky.current++;
          const fy = await Ub.c.setSocialSettings(yb, bb);
          Ky.current--;
          const Zy = !("error" in fy);
          if (!qb.current) return Zy;
          if (Uy);
          else if ("error" in fy) dy.e.showMessage({
            translationKey: fy.error
          });
          else
            for (const yb of fy.notFound) dy.e.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: yb
              }
            });
          if (Ky.current > 0) return Zy;
          const cb = ey.current;
          return ey.current = !1, !cb && "settings" in fy ? Ey(fy.settings) : (cb || Ey(hy), sy()), Zy
        }
      }
    }

    function cW(yb, bb) {
      const Wy = bb.toLowerCase();
      for (const Uy of yb)
        if (Uy.toLowerCase() === Wy) return !0;
      return !1
    }

    function Pb(yb) {
      if (null === yb) return !0;
      const {
        visibility: bb
      } = yb;
      return "public" === bb || "unlisted" === bb || "whitelist" === bb && yb.canManage
    }

    function ob(yb, bb, Wy) {
      if (Wy) {
        const Wy = bb.filter((bb => !cW(yb.whitelist, bb)));
        return {
          ...yb,
          whitelist: [...yb.whitelist, ...Wy]
        }
      }
      return {
        ...yb,
        whitelist: yb.whitelist.filter((yb => !cW(bb, yb)))
      }
    }
    var Bb = Wy(2143);

    function Kb(yb) {
      let {
        worldCode: bb,
        message: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), {
        isTouchScreen: fy
      } = (0, py.h)(["isTouchScreen"]), Zy = Xy.featureFlags.canUseInviteLinks, cb = (0, jb.k)(Zy && null === Wy), [Py, oy] = (0, Bb.i)(), Ky = (0, hy.useRef)(null);
      if (null !== Wy) return (0, By.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, By.jsx)(Ey.e, {
          name: "lock"
        }), (0, By.jsx)("span", {
          children: Wy
        })]
      });
      const ey = Zy ? cb : bb,
        sy = fy && Zy && (0, Bb.c)();
      return (0, By.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Zy && (0, By.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Uy("worldSocial:worldCode")
        }), (0, By.jsx)("input", {
          ref: Ky,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ey && void 0 !== ey ? ey : "",
          "aria-label": Uy(Zy ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: yb => {
            yb.currentTarget.select()
          }
        }), (0, By.jsxs)(qb.f, {
          className: "WorldSocialCopy",
          disabled: null === ey,
          onClick: () => {
            null !== ey && (0, Bb.e)(ey, {
              useShareSheet: sy,
              onOutcome: yb => {
                if ((0, Wb.f)({
                    id: "world_social.copy_link",
                    value: "copied" !== yb || Zy ? yb : "code"
                  }), "copied" === yb) oy();
                else if ("failed" === yb) {
                  var bb;
                  null === (bb = Ky.current) || void 0 === bb || bb.focus(), dy.e.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, By.jsx)(Ey.e, {
            name: Py ? "check" : sy ? "up-from-bracket" : "copy"
          }), " ", Uy(Py ? "general:copied" : sy ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var eb = Wy(898),
      qW = Wy.n(eb);
    const sb = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Sb = ["unlisted", "public", "whitelist", "private"];

    function Eb(yb) {
      let {
        visibility: bb,
        onPick: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), fy = (0, hy.useRef)([]);
      return (0, By.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Uy("worldSocial:whoCanJoin"),
        children: Sb.map(((yb, hy) => {
          const Zy = yb === bb;
          return (0, By.jsxs)("button", {
            ref: yb => {
              fy.current[hy] = yb
            },
            type: "button",
            className: qW()("WorldSocialTile", {
              WorldSocialTileSelected: Zy
            }),
            "aria-pressed": Zy,
            tabIndex: Zy ? 0 : -1,
            onKeyDown: yb => {
              ((yb, bb) => {
                const Wy = "ArrowRight" === yb.key || "ArrowDown" === yb.key ? 1 : "ArrowLeft" === yb.key || "ArrowUp" === yb.key ? -1 : 0;
                var Uy;
                0 !== Wy && (yb.preventDefault(), null === (Uy = fy.current[(bb + Wy + Sb.length) % Sb.length]) || void 0 === Uy || Uy.focus())
              })(yb, hy)
            },
            onClick: () => {
              Wy(yb)
            },
            children: [(0, By.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, By.jsx)(Ey.e, {
                name: sb[yb]
              })
            }), (0, By.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, By.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Uy(`worldSocial:${yb}`)
              }), (0, By.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Uy(`worldSocial:${yb}Description`)
              })]
            })]
          }, yb)
        }))
      })
    }
    var lb = Wy(530),
      mW = Wy(2119),
      Cb = Wy(2078),
      Tb = Wy(3630);

    function Vb(yb, bb) {
      var Wy;
      return {
        isError: !1,
        name: yb,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== bb && void 0 !== bb ? bb : {},
        nameColour: null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.nameColour) && void 0 !== Wy ? Wy : lb.e,
        location: {
          status: "offline"
        }
      }
    }

    function Jb(yb) {
      let {
        player: bb,
        isFriend: Wy = !1,
        status: Uy,
        showLocation: hy = void 0 === Uy,
        Zb: fy,
        onSendFriendRequest: Zy,
        actions: cb,
        zIndex: Py
      } = yb;
      const {
        t: oy
      } = (0, zb.D)();
      let Ky, ey = Uy;
      return null !== fy && void 0 !== fy && fy.on && (ey = (0, By.jsxs)(By.Fragment, {
        children: [null !== Uy && void 0 !== Uy ? Uy : (0, By.jsx)(Cb.c, {
          socialPreview: bb
        }), (0, By.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", oy("worldSocial:canJoin")]
        })]
      })), (cb || fy) && (Ky = (0, By.jsxs)(By.Fragment, {
        children: [cb, fy && (0, By.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, By.jsx)(Tb.c, {
            checked: fy.on,
            disabled: !1,
            ariaLabel: oy("worldSocial:letJoin", {
              playerName: bb.name
            }),
            onChange: yb => {
              fy.onChange(yb.target.checked)
            }
          })
        })]
      })), (0, By.jsx)(mW.g, {
        playerSocialPreview: bb,
        isFriend: Wy,
        hideFriendBadge: !0,
        onFriendRemoved: Wy ? yb => {
          Iy.d.removeFriendFromState(yb)
        } : void 0,
        status: ey,
        showLocation: hy,
        onSendFriendRequest: Zy,
        opensProfileCard: !1,
        zIndex: Py,
        children: Ky
      })
    }

    function gW(yb) {
      let {
        row: bb,
        Zb: Wy,
        canInvite: Uy,
        invited: hy,
        onInvite: fy,
        zIndex: Zy
      } = yb;
      const {
        t: cb
      } = (0, zb.D)(), Py = "online" === bb.place ? qb.f : qb.g;
      return (0, By.jsx)(Jb, {
        player: bb.friend,
        isFriend: !0,
        status: "here" === bb.place ? cb("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Zb: Wy,
        zIndex: Zy,
        actions: Uy && (0, By.jsx)(Py, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: hy,
          onClick: fy,
          ariaLabel: `${cb("worldSocial:invite")} ${bb.friend.name}`,
          children: cb(hy ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var Gb = Wy(2189);

    function Ob(yb) {
      let {
        playersHere: bb,
        exclude: Wy,
        cC: Uy
      } = yb;
      const {
        t: fy
      } = (0, zb.D)(), Zy = (0, Gb.k)(Gb.f), [cb, Py] = (0, hy.useState)([]), oy = [], Ky = (yb, bb) => {
        const Uy = [...Wy, ...oy.map((yb => yb.player.name))];
        oy.length < 3 && !cW(Uy, yb.name) && oy.push({
          player: yb,
          status: bb
        })
      };
      for (const hy of bb) Ky(Vb(hy.name, hy.cosmetics, hy.ranks), fy("worldSocial:inThisWorld"));
      if ("loaded" === Zy.state.status)
        for (const hy of Zy.state.recentPlayers) hy.preview.name && !hy.preview.isError && Ky({
          ...hy.preview,
          location: {
            status: "offline"
          }
        }, fy("worldSocial:playedWithYou"));
      const ey = yb => {
        Py((bb => [...bb, yb])), Uy(yb).finally((() => {
          Py((bb => bb.filter((bb => bb !== yb))))
        }))
      };
      return (0, By.jsx)(By.Fragment, {
        children: oy.map(((yb, bb) => {
          let {
            player: Wy,
            status: Uy
          } = yb;
          return (0, By.jsx)(Jb, {
            zIndex: oy.length - bb,
            player: Wy,
            status: Uy,
            onSendFriendRequest: () => {
              ey(Wy.name)
            },
            actions: (0, By.jsx)(kb.f, {
              tooltipInner: (0, By.jsx)(By.Fragment, {
                children: fy("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, By.jsx)(qb.f, {
                className: "FriendRequestButton",
                disabled: cb.includes(Wy.name),
                ariaLabel: `${fy("recentPlayers:addFriend")} ${Wy.name}`,
                onClick: () => {
                  ey(Wy.name)
                },
                children: (0, By.jsx)(Ey.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${Wy.name}`)
        }))
      })
    }
    var Rb = Wy(1486);

    function vW(yb) {
      let {
        cC: bb
      } = yb;
      const {
        t: Wy
      } = (0, zb.D)(), Uy = (0, hy.useRef)(null), [fy, Zy] = (0, hy.useState)(""), [cb, Py] = (0, hy.useState)(!1), oy = () => {
        const yb = fy.trim();
        "" === yb || cb || (Py(!0), bb(yb).then((yb => {
          yb && Uy.current && (Uy.current.value = "", Zy(""))
        })).finally((() => {
          Py(!1)
        })))
      };
      return (0, By.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: yb => {
          yb.target === Uy.current && "Escape" !== yb.key && yb.stopPropagation()
        },
        children: [(0, By.jsx)(Rb.c, {
          className: "WorldSocialAddFriendInput",
          domRef: Uy,
          maxLength: 32,
          placeholderText: Wy("worldSocial:addFriendPlaceholder"),
          ariaLabel: Wy("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: yb => {
            Zy(yb)
          },
          onEnter: oy
        }), (0, By.jsxs)(qb.f, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: cb || "" === fy.trim(),
          onClick: oy,
          children: [(0, By.jsx)(Ey.e, {
            name: "user-plus"
          }), " ", Wy("socialBar:sendRequest")]
        })]
      })
    }
    const iW = new Map;

    function Mb(yb) {
      const bb = iW.get(yb);
      if (!bb) return [];
      const Wy = Date.now();
      for (const [Uy, hy] of bb) Wy - hy >= tb.l && bb.delete(Uy);
      return [...bb.keys()]
    }
    var Yb = Wy(1080),
      Xb = Wy(1331),
      nb = Wy(3831),
      ub = Wy(127),
      rW = Wy(3815);
    const Hb = ["auto", "auto_existing"];

    function aW(yb) {
      return Hb.includes(yb)
    }

    function Fb(yb, bb) {
      const Wy = (0, Yb.tb)(yb);
      return null !== bb && (0, Yb.tb)(bb) === Wy || (0, rW.e)().some((yb => (0, Yb.tb)(yb.name) === Wy))
    }
    const pb = new Set;

    function Lb(yb) {
      return `worldSocialSeen:${yb}`
    }

    function Qb(yb) {
      return !yb || pb.has(yb) || !0 === ny.e.getItem(Lb(yb))
    }

    function jW(yb) {
      yb && !pb.has(yb) && (pb.add(yb), ny.e.setItem(Lb(yb), !0))
    }

    function Db(yb) {
      let {
        show: bb,
        onClose: Wy,
        opener: Uy
      } = yb;
      const {
        lobbyName: fy,
        shownLobbyName: cb
      } = (0, Ry.j)("connectedGame");
      return (0, hy.useEffect)((() => {
        bb && (0, Wb.f)({
          id: "world_social.open",
          value: Uy
        })
      }), [bb]), (0, By.jsx)(Zy.c, {
        show: bb && null !== fy,
        close: Wy,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== Uy,
        children: bb && null !== fy && (0, By.jsx)(tW, {
          lobbyName: fy,
          worldCode: null !== cb && void 0 !== cb ? cb : fy,
          onClose: Wy
        }, fy)
      })
    }

    function tW(yb) {
      var bb;
      let {
        lobbyName: Wy,
        worldCode: Uy,
        onClose: fy
      } = yb;
      const {
        t: Zy
      } = (0, zb.D)(), cb = (0, hy.useRef)(null), {
        settings: Py,
        loading: oy,
        answered: Ky,
        change: ey,
        retry: sy
      } = Zb(Wy), Sy = (0, Iy.i)(), ly = (0, Ry.j)("players"), mb = (0, Ry.j)("hiddenPlayerNames"), [Cy, Ty] = (0, hy.useState)([]), [Vy, gb] = (0, hy.useState)([]), [Gy, Oy] = (0, hy.useState)(!1), ib = (0, hy.useMemo)((() => {
        var yb, bb;
        const Wy = null === ly.localId ? null : null !== (yb = null === (bb = ly.byId[ly.localId]) || void 0 === bb ? void 0 : bb.name) && void 0 !== yb ? yb : null;
        return ly.ids.flatMap((yb => {
          const bb = ly.byId[yb];
          return null !== bb && void 0 !== bb && bb.name && bb.name !== Wy ? [{
            name: bb.name,
            cosmetics: bb.cosmetics,
            ranks: bb.ranks
          }] : []
        }))
      }), [ly]), My = (0, hy.useMemo)((() => function(yb, bb, Wy) {
        const Uy = [],
          hy = [],
          fy = [];
        for (const Zy of yb) !Zy.isError && Zy.name && ("inGame" === Zy.location.status && Zy.location.inLobbyName === bb || cW(Wy, Zy.name) ? hy.push({
          friend: Zy,
          place: "here"
        }) : "offline" === Zy.location.status ? fy.push({
          friend: Zy,
          place: "offline"
        }) : Uy.push({
          friend: Zy,
          place: "online"
        }));
        return [...Uy, ...hy, ...fy]
      }(Sy.friends, Wy, ib.map((yb => yb.name)))), [Sy.friends, Wy, ib]), Yy = Xy.featureFlags.canSeeRealPlayerNames ? ib.filter((yb => null === (0, bW.d)(yb.name, mb))) : [], ny = null !== Py && void 0 !== Py && Py.canManage ? Py : null, uy = null !== ny, rb = null !== (bb = null === Py || void 0 === Py ? void 0 : Py.visibility) && void 0 !== bb ? bb : null, Hy = "whitelist" === (null === ny || void 0 === ny ? void 0 : ny.visibility), ab = "private" === rb || "whitelist" === rb && !uy, {
        userContext: Fy
      } = (0, Jy.c)();
      (0, hy.useEffect)((() => {
        uy && Fb(Wy, Fy.getPersonalWorldLobbyName()) && jW(Fy.whamm)
      }), [uy, Wy, Fy]);
      const py = ab ? Zy("whitelist" === rb ? "socialBar:inviteWorldManagersOnly" : uy ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        Ly = null === py;
      (0, hy.useEffect)((() => ab ? void 0 : dy.e.quietFriendAdded()), [ab]), (0, hy.useEffect)((() => dy.e.quietFriendRequests()), []);
      const jb = (0, hy.useRef)(!1);
      (0, hy.useEffect)((() => {
        const yb = cb.current,
          bb = !jb.current;
        jb.current = !0;
        const Wy = null === document.activeElement || document.activeElement === document.body;
        null !== yb && void 0 !== yb && yb.contains(document.activeElement) || !bb && !Wy || (0, Qy.g)() || null === yb || void 0 === yb || yb.focus({
          preventScroll: !0
        })
      }), [Ly]), (0, hy.useEffect)((() => {
        const yb = yb => {
          "Escape" !== yb.key || null !== document.activeElement && document.activeElement !== document.body || fy()
        };
        return document.addEventListener("keydown", yb), () => {
          document.removeEventListener("keydown", yb)
        }
      }), [fy]);
      const Ub = null === Py && !Ky,
        hb = (oy || Sy.loading) && 0 === Sy.friends.length,
        fb = Sy.friends.flatMap((yb => yb.name ? [yb.name] : [])),
        Bb = Cy.filter((yb => !cW(fb, yb))),
        eb = My.length + 3,
        qW = Bb.length + eb,
        sb = Gy ? Sy.requests : Sy.requests.slice(0, 1),
        Sb = async function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const Wy of function(yb, bb) {
              const Wy = [];
              for (let Uy = 0; Uy < yb.length; Uy += bb) Wy.push(yb.slice(Uy, Uy + bb));
              return Wy
            }(yb, Dy.x)) {
            if (!await ey({
                whitelistAdd: Wy
              }, (yb => ob(yb, Wy, !0)), {
                quiet: bb
              })) return !1
          }
          return !0
        }, lb = async yb => {
          if (yb === rb) return;
          (0, Wb.f)({
            id: "world_social.set_mode",
            value: yb
          });
          const bb = [...Mb(Wy), ...Vy],
            Uy = "whitelist" === yb && Py ? function(yb, bb, Wy) {
              const Uy = [],
                hy = yb.flatMap((yb => "here" === yb.place ? [yb.friend.name] : []));
              for (const fy of [...hy, ...bb]) cW(Uy, fy) || cW(Wy, fy) || Uy.push(fy);
              return Uy
            }(My, bb, Py.whitelist) : [];
          await ey({
            setVisibility: yb
          }, (bb => ({
            ...bb,
            visibility: yb
          }))) && await Sb(Uy)
        }, mW = yb => {
          if (Hy && ny) return {
            on: cW(ny.whitelist, yb),
            onChange: bb => {
              (0, Wb.f)({
                id: "world_social.whitelist_toggle",
                value: bb ? "on" : "off"
              }), ey(bb ? {
                whitelistAdd: [yb]
              } : {
                whitelistRemove: yb
              }, (Wy => ob(Wy, [yb], bb)))
            }
          }
        }, Cb = async yb => {
          (0, Wb.f)({
            id: "world_social.invite",
            value: "friend"
          });
          const bb = () => {
            gb((bb => bb.filter((bb => bb !== yb))))
          };
          gb((bb => [...bb, yb]));
          const Uy = function(yb, bb) {
            return null === yb || void 0 === yb || !yb.canManage || cW(yb.whitelist, bb) ? "none" : "whitelist" === yb.visibility ? "required" : "quiet"
          }(Py, yb);
          if ("none" !== Uy) {
            const Wy = Sb([yb], "quiet" === Uy);
            if ("required" === Uy && !await Wy) return void bb()
          }
          await (0, xb.k)(yb, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(yb, bb) {
            var Wy;
            const Uy = null !== (Wy = iW.get(yb)) && void 0 !== Wy ? Wy : new Map;
            Uy.set(bb, Date.now()), iW.set(yb, Uy)
          }(Wy, yb), setTimeout(bb, tb.n)) : bb()
        }, Tb = async (yb, bb) => {
          (0, Wb.f)({
            id: "world_social.add_friend",
            value: bb
          });
          const Wy = await (0, Ay.k)(yb, "world_social");
          return (0, Ay.d)(Wy, yb, {
            announceSent: !1
          }), "failed" !== Wy.kind && ("sent" === Wy.kind && Ty((bb => cW(bb, yb) ? bb : [...bb, yb])), Hy && await Sb([yb]), !0)
        };
      return (0, By.jsxs)("div", {
        ref: cb,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: yb => {
          yb.target === yb.currentTarget && " " === yb.key && yb.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, By.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, By.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: Zy("worldSocial:title")
          }), (0, By.jsx)(qb.h, {
            className: "WorldSocialClose",
            onClick: fy
          })]
        }), Ub && (0, By.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, By.jsx)(vb.e, {})
        }), !Ub && (0, By.jsxs)(By.Fragment, {
          children: [(0, By.jsx)(Kb, {
            worldCode: Uy,
            message: py
          }), null === Py && !oy && (0, By.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: sy,
            children: Zy("worldSocial:loadFailed")
          }), uy && null !== rb && (0, By.jsx)(Eb, {
            visibility: rb,
            onPick: yb => {
              lb(yb)
            }
          }), Sy.requests.length > 0 && (0, By.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, By.jsx)(Ny.e, {
              label: (0, By.jsxs)(By.Fragment, {
                children: [(0, By.jsx)(Ey.e, {
                  name: yW.g
                }), " ", Zy("socialBar:requests")]
              }),
              meta: (0, By.jsxs)(By.Fragment, {
                children: [Sy.requests.length, Sy.requests.length === wy.p && (0, By.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: Zy("socialBar:limitReached")
                }), !Gy && Sy.requests.length > 1 && (0, By.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    Oy(!0)
                  },
                  children: Zy("worldSocial:moreRequests", {
                    count: Sy.requests.length - 1
                  })
                })]
              })
            }), (0, By.jsx)("div", {
              className: "PlayerRows",
              children: sb.map(((yb, bb) => (0, By.jsx)(Jb, {
                zIndex: sb.length - bb,
                player: yb,
                actions: (0, By.jsxs)(By.Fragment, {
                  children: [(0, By.jsx)(kb.f, {
                    tooltipInner: (0, By.jsx)(By.Fragment, {
                      children: Zy("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, By.jsx)(qb.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Zy("general:accept")} ${yb.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Ay.h)(yb.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, By.jsx)(Ey.e, {
                        name: "check"
                      })
                    })
                  }), (0, By.jsx)(kb.f, {
                    tooltipInner: (0, By.jsx)(By.Fragment, {
                      children: Zy("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, By.jsx)(qb.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${Zy("general:decline")} ${yb.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Ay.h)(yb.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, By.jsx)(Ey.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${yb.name}`)))
            })]
          }), (0, By.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, By.jsx)(Ny.e, {
              label: (0, By.jsxs)(By.Fragment, {
                children: [(0, By.jsx)(Ey.e, {
                  name: yW.c
                }), " ", Zy("socialBar:friends")]
              }),
              meta: Sy.loaded && !ab ? Sy.friends.length : void 0
            }), (0, By.jsx)(vW, {
              cC: yb => Tb(yb, "field")
            }), hb && (0, By.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, By.jsx)(vb.e, {})
            }), !hb && (0, By.jsxs)(By.Fragment, {
              children: [(0, By.jsxs)("div", {
                className: "PlayerRows",
                children: [Bb.map(((yb, bb) => (0, By.jsx)(Jb, {
                  zIndex: qW - bb,
                  player: Vb(yb, null),
                  status: Zy("worldSocial:requestSent"),
                  Zb: mW(yb)
                }, `request:${yb}`))), !ab && My.map(((yb, bb) => (0, By.jsx)(gW, {
                  zIndex: eb - bb,
                  row: yb,
                  Zb: mW(yb.friend.name),
                  canInvite: Pb(Py) && "here" !== yb.place,
                  invited: Vy.includes(yb.friend.name),
                  onInvite: () => {
                    Cb(yb.friend.name)
                  }
                }, yb.friend.name))), Sy.loaded && 0 === Sy.friends.length && (0, By.jsx)(Ob, {
                  playersHere: Yy,
                  exclude: Cy,
                  cC: yb => Tb(yb, "suggestion")
                })]
              }), Hy && Sy.loaded && 0 === Sy.friends.length && 0 === Bb.length && (0, By.jsx)("div", {
                className: "WorldSocialEmpty",
                children: Zy("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var wb = Wy(1996),
      kW = Wy(2009);

    function Nb(yb) {
      let {
        show: bb,
        onClose: Wy,
        option: Uy
      } = yb;
      const fy = (0, Ry.i)("connectedGame", (yb => (0, wb.d)(yb) ? yb.lobbyName : null));
      return function(yb) {
        const {
          gameEntrySource: bb,
          loadingOverlayVisible: Wy
        } = (0, py.h)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: Uy
        } = (0, Jy.c)(), fy = (0, Ry.j)("localPlayerAlive"), Zy = (0, Ry.i)("players", (yb => null !== yb.localId && void 0 !== yb.byId[yb.localId])), cb = (0, kW.l)(), Py = (0, hy.useRef)(null), oy = (0, hy.useRef)(null), By = "worldCreation" === bb, Ky = Uy.whamm, ey = Uy.getPersonalWorldLobbyName();
        (0, hy.useEffect)((() => {
          var bb;
          null !== yb && (null === (bb = oy.current) || void 0 === bb ? void 0 : bb.lobbyName) !== yb && null !== Ab(yb, By, Ky, ey) && (oy.current = hb(yb))
        }), [By, yb, Ky, ey]), (0, hy.useEffect)((() => {
          if (null !== yb && (!Wy && fy && Zy)) return cb.whenShown((() => {
            var bb;
            const Wy = Py.current === yb ? null : Ab(yb, By, Ky, ey);
            if (null === Wy) return;
            const Uy = (null === (bb = oy.current) || void 0 === bb ? void 0 : bb.lobbyName) === yb ? oy.current : hb(yb);
            oy.current = null, Py.current = yb,
              function(yb, bb, Wy, Uy) {
                const {
                  lobbyName: hy
                } = yb, fy = () => {
                  ! function(yb, bb) {
                    if (!UW()) return void bb(!0);
                    const Wy = performance.now() + bU;
                    let Uy = 0;
                    const hy = () => {
                      Uy = UW() ? 0 : Uy + 1, Uy >= 2 ? bb(!0) : !WW(yb) || performance.now() > Wy ? bb(!1) : setTimeout(hy, yU)
                    };
                    setTimeout(hy, yU)
                  }(hy, (fy => {
                    Uy();
                    const Zy = "auto_existing" === bb && Qb(Wy);
                    fy && WW(hy) && !Ib(hy) && !Zy && (db(yb) ? xW(hy) : (xW(hy), jW(Wy), function(yb) {
                      const bb = ub.e.world_social_popup_v1;
                      return (0, ub.k)("world_social_popup_v1"), (0, Wb.f)({
                        id: "world_social.auto_open",
                        value: `${bb}:${(0,nb.b)()}:${yb}`
                      }), (0, Xb.flushClientAnalyticsEvents)(), "auto_open" === bb
                    }(bb) && (! function(yb) {
                      fb.set(yb.lobbyName, yb)
                    }(yb), sy.g.EZ("toggleMenu", `inviteLink|${bb}`), "inviteLink" !== py.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === bb && !db(yb)) return void fy();
                yb.response.then((yb => {
                  if (!("error" in yb)) return yb.settings.canManage ? void fy() : (xW(hy), void Uy());
                  Uy()
                }))
              }(Uy, Wy, Ky, (() => {
                Py.current === yb && (Py.current = null)
              }))
          }))
        }), [cb, By, Wy, yb, fy, Zy, Ky, ey])
      }(fy), (0, hy.useEffect)((() => {
        bb && null !== fy && xW(fy)
      }), [bb, fy]), null !== fy ? (0, By.jsx)(Db, {
        show: bb,
        onClose: Wy,
        opener: aW(Uy) ? Uy : "icon"
      }) : (0, By.jsx)(jb.e, {
        show: bb,
        onClose: Wy
      })
    }
    const zW = new Set;

    function Ib(yb) {
      return zW.has(yb) || !!ny.g.getItem(`worldSocialShown:${yb}`)
    }

    function xW(yb) {
      zW.add(yb), ny.g.setItem(`worldSocialShown:${yb}`, !0)
    }

    function Ab(yb, bb, Wy, Uy) {
      return Ib(yb) ? null : function(yb) {
        let {
          justMade: bb,
          playerId: Wy,
          lobbyName: Uy,
          personalWorld: hy
        } = yb;
        return bb ? "auto" : !Qb(Wy) && Fb(Uy, hy) ? "auto_existing" : null
      }({
        justMade: bb,
        playerId: Wy,
        lobbyName: yb,
        personalWorld: Uy
      })
    }

    function db(yb) {
      let {
        answer: bb
      } = yb;
      return null !== bb && "settings" in bb && !bb.settings.canManage
    }
    const yU = 500,
      bU = 3e4;

    function WW(yb) {
      return "inGame" === py.d.get("gameState") && oy.gameBridge.latest("connectedGame").lobbyName === yb
    }

    function UW() {
      return (0, Qy.g)() || py.d.get("loadingOverlayVisible") || (0, Ly.n)()
    }
    var hW = Wy(35515),
      fW = Wy(2476),
      ZW = Wy(2479),
      cU = Wy(1620);
    const PW = (yb, bb) => {
        (0, hy.useEffect)((() => {
          setTimeout((() => {
            yb && yb.current && yb.current.focus()
          }), 1)
        }), [bb])
      },
      oW = (0, hy.memo)((function(yb) {
        let {
          isInputActive: bb,
          onClose: Wy,
          onChange: Uy,
          textAreaRef: hy,
          fontSize: fy,
          lineHeight: Zy,
          currText: cb
        } = yb;
        return (0, By.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, By.jsx)("img", {
            src: `${fW.e.getTexture("board_full",ZW.j.BLOCK).url}`,
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, By.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: cb,
            ref: hy,
            style: {
              fontSize: `${fy}rem`,
              lineHeight: `${Zy}rem`
            },
            onKeyDown: yb => {
              var bb;
              "Escape" !== yb.key && (yb.stopPropagation(), "Tab" === yb.key && function(yb) {
                yb.preventDefault();
                const bb = yb.target,
                  {
                    value: Wy
                  } = bb;
                let Uy = bb.selectionStart,
                  hy = bb.selectionEnd,
                  fy = Wy.slice(Uy, hy);
                if (!fy.includes("\n") && !yb.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Uy > 0 && "\n" !== Wy[Uy - 1];) Uy--;
                const Zy = "\n" === Wy[hy - 1];
                Zy && hy--;
                fy = Wy.slice(Uy, hy);
                const cb = fy.split("\n").map((bb => yb.shiftKey ? bb.replace(/^\t/, "") : "\t" + bb)).join("\n");
                if (yb.shiftKey && Wy.slice(Uy, hy) === cb) return;
                let {
                  selectionStart: Py
                } = bb;
                bb.setSelectionRange(Uy, hy), Py > Uy && (!yb.shiftKey || "\t" === fy[0]) && (Py += yb.shiftKey ? -1 : 1);
                hy = Uy + cb.length + (Zy ? 1 : 0), document.execCommand("insertText", !1, cb), bb.setSelectionRange(Py, hy)
              }(yb), /^F\d+$/i.test(yb.code) && null !== (bb = cU.w.OpenCodeEditor) && void 0 !== bb && bb.includes(yb.code) && Wy())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Uy
          })]
        })
      }));

    function BW(yb) {
      return 1.3 * yb
    }
    var KW = Wy(1490);
    const eW = (0, hy.memo)((function(yb) {
        let {
          show: bb,
          onOpen: Wy,
          onClose: Uy
        } = yb;
        const [fy, cb] = (0, hy.useState)(null), [Py, Ky] = (0, hy.useState)(""), [ey, sy] = (0, hy.useState)(0), [Sy, Ey] = (0, hy.useState)(null), [ly, mb] = (0, hy.useState)({
          text: "",
          textSize: 0
        }), Cy = (yb, bb) => Sy ? (0, hW.n)(yb, bb, Sy.width, Sy.height) : (0, hW.f)(yb, bb), Ty = yb => {
          Ky(Cy(Py, yb)), sy(yb), ny.e.setItem("lastBoardTextSize", yb)
        }, Vy = () => {
          Uy(), Sy && Py === ly.text && ey === ly.textSize || oy.gameBridge.send("writeOnBoard", {
            pos: fy,
            text: Py,
            textSize: ey
          })
        };
        (0, Ry.e)("boardEditRequested", (yb => {
          var hy, fy;
          if (!Xy.featureFlags.canSeePlayerWrittenText) return;
          if (null === yb) return cb(null), void(bb && Uy());
          const {
            pos: Zy,
            noticeboardSpan: Py,
            text: oy
          } = yb;
          cb(Zy), Ey(Py), Ky(oy);
          const By = null !== (hy = null !== (fy = yb.textSize) && void 0 !== fy ? fy : ny.e.getItem("lastBoardTextSize")) && void 0 !== hy ? hy : 0;
          sy(By), mb({
            text: oy,
            textSize: By
          }), ny.e.setItem("lastBoardTextSize", By), Wy()
        }));
        const Jy = (0, hy.useRef)(null);
        PW(Jy, bb), (0, KW.n)(Jy, {
          kind: "sign",
          submit: Vy
        });
        const gb = function(yb, bb) {
            const Wy = hW.b[yb];
            if (!bb) return Wy.uiFontSize;
            const {
              numLines: Uy,
              charsPerLine: hy
            } = (0, hW.x)(bb.width, bb.height, yb);
            return Wy.uiFontSize * Math.min(Wy.charsPerLine / hy, Wy.numLines / Uy)
          }(ey, Sy),
          Gy = BW(gb);
        return (0, By.jsxs)(Zy.c, {
          className: "WriteOnBoardBg",
          close: Vy,
          escDoesExit: !0,
          show: bb,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, By.jsx)(oW, {
            isInputActive: () => bb,
            onClose: Vy,
            onChange: yb => {
              Ky(Cy(yb.target.value, ey))
            },
            textAreaRef: Jy,
            fontSize: gb,
            lineHeight: Gy,
            currText: Py
          }), (0, By.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, By.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, By.jsx)(qb.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Ty(0)
              },
              disabled: 0 === ey,
              children: "Small"
            }), (0, By.jsx)(qb.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Ty(1)
              },
              disabled: 1 === ey,
              children: "Medium"
            }), (0, By.jsx)(qb.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                Ty(2)
              },
              disabled: 2 === ey,
              children: "Large"
            })]
          })]
        })
      })),
      qU = (0, hy.memo)((function(yb) {
        let {
          show: bb,
          onOpen: Wy,
          onClose: Uy
        } = yb;
        const [fy, cb] = (0, hy.useState)(""), Py = () => {
          Uy(), oy.gameBridge.send("writeNameTag", fy)
        };
        (0, Gy.i)("EditNameTag", (yb => {
          Xy.featureFlags.canSeePlayerWrittenText && null !== yb && (cb(yb), Wy())
        }));
        const Ky = (0, hy.useRef)(null);
        PW(Ky, bb), (0, KW.n)(Ky, {
          kind: "nameTag",
          submit: Py
        });
        const ey = hW.G.nameTag.uiFontSize,
          sy = BW(ey);
        return (0, By.jsxs)(Zy.c, {
          className: "WriteOnBoardBg",
          close: Py,
          escDoesExit: !0,
          show: bb,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, By.jsx)("div", {
            className: "NameTagTrim",
            children: (0, By.jsx)(oW, {
              isInputActive: () => bb,
              onClose: Py,
              onChange: yb => {
                const bb = yb.target.value.replaceAll("\n", "");
                cb((0, hW.r)(bb, "nameTag"))
              },
              textAreaRef: Ky,
              fontSize: ey,
              lineHeight: sy,
              currText: fy
            })
          }), (0, By.jsx)(qb.f, {
            onClick: Py,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      })),
      sW = (0, hy.memo)((function(yb) {
        let {
          show: bb,
          onOpen: Wy,
          onClose: Uy
        } = yb;
        const [fy, cb] = (0, hy.useState)(""), [Py, Ky] = (0, hy.useState)(0), [ey, sy] = (0, hy.useState)(!1), [Sy, Ey] = (0, hy.useState)(["", "", "", "", "", "", "", "", "", ""]), [ly, mb] = (0, hy.useState)("Title"), [Cy, Ty] = (0, hy.useState)(!0), [Vy, Jy] = (0, hy.useState)(!1);
        (0, Gy.i)("EditBook", (yb => {
          let {
            pages: bb,
            title: Uy,
            isPublished: hy
          } = yb;
          var fy;
          Xy.featureFlags.canSeePlayerWrittenText && (null !== bb ? (Ey(bb), cb(null !== (fy = bb[0]) && void 0 !== fy ? fy : ""), mb(Uy), Ky(0), sy(!1), Ty(!hy), Jy(!1), Wy()) : Ey(["", "", "", "", "", "", "", "", "", ""]))
        }));
        const gb = (0, hy.useRef)(null),
          Oy = (0, hy.useRef)(null);
        PW(gb, bb), (0, KW.n)(gb, {
          kind: "book"
        }), (0, KW.n)(Oy, {
          kind: "wY"
        });
        const Ry = hW.G.book.uiFontSize,
          vb = BW(Ry),
          ib = bb ? fW.e.getTexture("book_page", ZW.j.ITEM).url : void 0,
          My = () => {
            (Cy || Vy) && oy.gameBridge.send("writeBook", {
              pages: [...Sy],
              title: ly,
              published: !Cy && Vy
            })
          },
          Yy = yb => {
            ey && (Sy[Py] = fy, sy(!1)), cb(Sy[yb]), Ky(yb)
          };
        return (0, By.jsxs)(Zy.c, {
          className: "WriteOnBoardBg",
          close: () => {
            Uy(), Sy[Py] = fy, My()
          },
          escDoesExit: !0,
          show: bb,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnBookComp",
          children: [(0, By.jsxs)("div", {
            className: "WriteOnBookWrapper",
            children: [(0, By.jsx)("textarea", {
              className: "BookTitleTextArea SmallTextLight",
              value: ly,
              ref: Oy,
              style: {
                fontSize: "2.5rem",
                lineHeight: `${vb}rem`
              },
              onKeyDown: yb => {
                Cy && yb.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: yb => {
                let bb = yb.target.value;
                bb = (0, hW.r)(bb, "wY"), mb(bb)
              },
              readOnly: !Cy
            }), (0, By.jsx)("img", {
              src: ib,
              alt: "book_page",
              className: "WriteOnBookPageImg"
            }), (0, By.jsx)("div", {
              className: "BookTextAreaPadding",
              children: (0, By.jsx)("textarea", {
                className: "WriteOnBookPageTextArea",
                value: fy,
                ref: gb,
                style: {
                  fontSize: `${Ry}rem`,
                  lineHeight: `${vb}rem`
                },
                onKeyDown: yb => {
                  Cy && yb.stopPropagation()
                },
                spellCheck: "false",
                autoComplete: "off",
                onChange: yb => {
                  const bb = yb.target.value;
                  cb((0, hW.r)(bb, "book")), sy(!0)
                },
                readOnly: !Cy
              })
            })]
          }), (0, By.jsxs)("div", {
            className: "BookNavigationWrapper",
            children: [(0, By.jsx)(qb.f, {
              disabled: 0 === Py,
              onClick: () => {
                Yy(Py - 1)
              },
              className: "BookNavButton",
              children: "<"
            }), (0, By.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, By.jsx)(qb.f, {
              disabled: 9 === Py,
              onClick: () => {
                Yy(Py + 1)
              },
              className: "BookNavButton",
              children: ">"
            }), (0, By.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, By.jsx)(qb.f, {
              onClick: () => {
                Ty(!Cy), Jy(!0)
              },
              className: "BookNavButton",
              children: Cy ? "Publish" : "Edit"
            })]
          })]
        })
      }));
    var SW = Wy(35383),
      EW = Wy(7812),
      lW = Wy(1239),
      mU = Wy(1556);

    function CW(yb) {
      let {
        show: bb,
        buttons: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), fy = (0, hy.useRef)(null);
      return (0, hy.useEffect)((() => {
        var yb, Wy;
        const Uy = bb ? (0, SW.w)() : null;
        if (!Uy || !(0, lW.f)()) return;
        const hy = (0, SW.j)().findIndex((yb => yb.id === Uy));
        (0, EW.l)(null !== (yb = null === (Wy = fy.current) || void 0 === Wy ? void 0 : Wy.children[hy]) && void 0 !== yb ? yb : null)
      }), [bb]), 0 === Wy.length ? null : (0, By.jsx)("div", {
        ref: fy,
        className: "ClientGameInventoryButtons",
        onPointerDown: yb => {
          yb.stopPropagation()
        },
        onPointerUp: yb => {
          yb.stopPropagation()
        },
        children: Wy.map((yb => {
          const bb = Uy(yb.labelKey);
          return (0, By.jsxs)(qb.i, {
            className: yb.className,
            disabled: yb.disabled,
            onClick: () => {
              (0, SW.p)(yb)
            },
            ariaLabel: yb.iconOnly ? bb : void 0,
            title: yb.iconOnly ? bb : void 0,
            children: [yb.icon && (0, By.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === yb.icon.kind && (0, By.jsx)(mU.d, {
                itemName: yb.icon.name,
                amount: 0
              }), "image" === yb.icon.kind && (0, By.jsx)("img", {
                src: yb.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === yb.icon.kind && (0, By.jsx)(Ey.e, {
                name: yb.icon.name
              })]
            }), !yb.iconOnly && bb]
          }, yb.id)
        }))
      })
    }
    var TW = Wy(35519),
      VW = Wy(2209),
      JW = Wy(8425),
      gU = Wy(35312),
      GW = Wy(35305);
    let OW = null;
    window.setShowInventoryAdsOverride = yb => {
      OW = yb
    };
    const RW = 24e4;
    var vU = Wy(1564);

    function iU(yb) {
      var bb;
      let {
        draggedInfo: {
          name: Wy,
          attributes: Uy,
          amount: hy
        },
        toAddRef: fy
      } = yb;
      return (0, By.jsx)("div", {
        className: "DraggedInvenItem",
        ref: fy,
        children: (0, By.jsx)(mU.d, {
          itemName: Wy,
          amount: hy,
          enchantmentTier: null === Uy || void 0 === Uy || null === (bb = Uy.customAttributes) || void 0 === bb ? void 0 : bb.enchantmentTier,
          bar: (0, vU.h)(Uy)
        })
      })
    }

    function MW(yb) {
      let {
        className: bb = "",
        displayInfo: Wy,
        domRef: Uy
      } = yb;
      return (0, By.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${bb}`,
        ref: Uy,
        children: [(0, By.jsx)(gb.d, {
          text: (0, Oy.nb)(Wy.name, {
            fontStyle: Wy.fontStyle
          })
        }), (0, By.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, By.jsx)(gb.d, {
            text: Wy.desc
          })
        })]
      })
    }

    function YW(yb) {
      let {
        info: bb,
        draggedInfo: Wy
      } = yb;
      const Uy = (0, hy.useRef)(null);
      return (0, hy.useLayoutEffect)((() => {
        const yb = Uy.current,
          {
            left: Wy,
            top: hy
          } = function(yb, bb, Wy, Uy) {
            const hy = Uy.left * Wy.width / 100 + 4,
              fy = Wy.width - Uy.right * Wy.width / 100 - 4 - bb.width,
              Zy = Uy.top * Wy.height / 100 + 4,
              cb = Wy.height - 4 - bb.height;
            return {
              left: Math.max(hy, Math.min(yb.x - bb.width / 2, fy)),
              top: Math.max(Zy, Math.min(yb.y - 48 - bb.height, cb))
            }
          }({
            x: bb.initTouchX,
            y: bb.initTouchY
          }, {
            width: yb.offsetWidth,
            height: yb.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, py.d.get("notchSize"));
        yb.style.left = `${Wy}px`, yb.style.top = `${hy}px`
      }), [bb]), (0, By.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: Uy,
        children: [(0, By.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: Wy.amount / bb.maxAmount * 100 + "%"
          }
        }), (0, By.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [Wy.amount, "/", bb.maxAmount]
        })]
      })
    }
    var XW = Wy(167);
    const nW = (0, hy.memo)((function(yb) {
      let {
        show: bb,
        onOpen: Wy,
        onClose: Uy
      } = yb;
      const fy = (0, hy.useRef)({
          pos: null
        }),
        [cb, Py] = (0, hy.useState)([0, 0, 0, 0]),
        {
          userContext: Ky
        } = (0, Jy.c)();
      (0, Ry.e)("ironChestOpenRequested", (yb => {
        let {
          pos: bb,
          ownerDbId: Uy,
          cachedPasskey: hy
        } = yb;
        if (fy.current.pos = bb, Uy !== Ky.whamm) return null !== hy ? (Py(hy), void ey(hy)) : void Wy();
        ey(cb)
      })), (0, Ry.e)("localEffectUpdated", (yb => {
        "Thief" === yb && Uy()
      }));
      const ey = yb => {
        const {
          pos: bb
        } = fy.current;
        oy.gameBridge.send("openIronChest", {
          pos: bb,
          RP: yb
        })
      };
      return (0, By.jsx)(Zy.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Uy,
        escDoesExit: !0,
        show: bb,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, By.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, By.jsx)(uW, {
            RP: cb,
            onPasskeyUpdated: Py,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              ey(cb)
            }
          })
        })
      })
    }));

    function uW(yb) {
      let {
        className: bb = "",
        RP: Wy,
        onPasskeyUpdated: Uy,
        confirmText: hy,
        onConfirm: fy
      } = yb;
      const {
        t: Zy
      } = (0, zb.D)();
      return (0, By.jsxs)("div", {
        className: `${bb} IronChestPasskeyInput`,
        children: [(0, By.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: Zy("ironChest:passkeyInputTitle")
        }), (0, By.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(XW.c.ironChestPasskeyLength).fill(0).map(((yb, bb) => (0, By.jsx)(rU, {
            digit: Wy[bb],
            onPasskeyDigitUpdated: yb => {
              const hy = [...Wy];
              hy[bb] = yb, Uy(hy)
            }
          }, bb)))
        }), (0, By.jsx)(qb.i, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: fy,
          children: Zy(hy)
        })]
      })
    }

    function rU(yb) {
      let {
        digit: bb,
        onPasskeyDigitUpdated: Wy
      } = yb;
      return (0, By.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, By.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, By.jsx)(qb.i, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Wy(Oy.c.mod(bb + 1, 10))
            },
            children: (0, By.jsx)(Ey.e, {
              name: "angle-up"
            })
          }), (0, By.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: bb
          }), (0, By.jsx)(qb.i, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Wy(Oy.c.mod(bb - 1, 10))
            },
            children: (0, By.jsx)(Ey.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var HW = Wy(8420),
      aU = Wy(35547),
      FW = Wy(35303);

    function pW(yb) {
      let {
        specialItemInfo: bb,
        setHovered: Wy,
        pointerDown: Uy,
        pointerUp: fy,
        enchantingTablePosition: Zy,
        enchantingTableBlockName: cb
      } = yb;
      const {
        t: Ky
      } = (0, zb.D)(), [ey, sy] = (0, hy.useState)(null), [Sy, Ey] = (0, hy.useState)(null), ly = (0, Py.k)("auraPerLevel"), mb = Math.floor((0, Ry.j)("aura") / ly);
      (0, hy.useEffect)((() => {
        if (!bb) return void sy(null);
        let yb = !0;
        return oy.gameBridge.query("enchantingOffer", {
          slot: bb.idx,
          name: bb.name,
          blockName: cb
        }).then((Wy => {
          var Uy, hy;
          let {
            perks: fy,
            options: Zy
          } = Wy;
          if (!yb) return;
          const cb = {
            isEnchantable: fy.length > 0,
            possibleEnchantments: fy,
            options: Zy.map((yb => {
              let {
                level: bb,
                odds: Wy
              } = yb;
              return {
                level: bb,
                possibilities: Object.fromEntries(Wy.map(((yb, bb) => [`Tier ${bb+1}`, yb])))
              }
            })),
            isAlreadyEnchanted: fy.length > 0 && void 0 !== (null === (Uy = bb.attributes) || void 0 === Uy || null === (hy = Uy.customAttributes) || void 0 === hy ? void 0 : hy.enchantmentTier)
          };
          sy(cb), (yb => {
            const bb = yb.options.map((yb => Object.entries(yb.possibilities).map((yb => {
              let [bb, Wy] = yb;
              return {
                str: `${bb}: ${Wy>0?Wy<.01?Wy.toPrecision(1):Wy.toFixed(2):0}%\n`,
                style: {
                  color: Oy.ib[bb]
                }
              }
            }))));
            Ey(bb)
          })(cb)
        })), () => {
          yb = !1
        }
      }), [bb, Zy, cb]);
      const Cy = [];
      for (let hy = 0; hy < aU.b; hy++) {
        const yb = null === ey || void 0 === ey ? void 0 : ey.options[hy],
          Uy = !yb || yb.level > mb;
        Cy.push((0, By.jsx)(qb.f, {
          className: "EnchantmentButton",
          onPointerEnter: yb ? yb => null === Wy || void 0 === Wy ? void 0 : Wy()(!0, {
            name: "",
            desc: Sy[hy]
          }, yb) : void 0,
          onPointerLeave: yb ? () => null === Wy || void 0 === Wy ? void 0 : Wy()(!1) : void 0,
          onClick: Uy ? void 0 : () => {
            oy.gameBridge.send("enchantItem", {
              slot: bb.idx,
              level: yb.level,
              tablePos: Zy
            }), sy(null)
          },
          disabled: Uy,
          children: yb ? (0, By.jsxs)(By.Fragment, {
            children: [(0, By.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, By.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Ky("enchantments:cost"), ": "]
              }), " ", Ky("enchantments:levels", {
                level: yb.level
              })]
            }), (0, By.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, By.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, By.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Ky("enchantments:tier")
                }), Object.entries(yb.possibilities).map((yb => {
                  let [bb, Wy] = yb;
                  return 0 === Wy ? null : (0, By.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Oy.ib[bb]
                    },
                    children: bb
                  }, bb)
                }))]
              }), (0, By.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, By.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Ky("enchantments:odds")
                }), Object.entries(yb.possibilities).map((yb => {
                  let [bb, Wy] = yb;
                  return 0 === Wy ? null : (0, By.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Oy.ib[bb]
                    },
                    children: [Wy > 0 && Wy < .1 ? "<0.1" : Wy.toFixed(0 < Wy && Wy < .95 ? 1 : 0), "%"]
                  }, bb)
                }))]
              })]
            })]
          }) : !1 === (null === ey || void 0 === ey ? void 0 : ey.isEnchantable) ? (0, By.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Ky("enchantments:notEnchantable")
          }) : (0, By.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Ky("enchantments:enterItem")
          })
        }, hy))
      }
      return (0, By.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, By.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: cb
        }), (0, By.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, By.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, By.jsx)(FW.b, {
              idx: GW.d,
              setHovered: yb => {
                null === Wy || void 0 === Wy || Wy(GW.d)(yb)
              },
              pointerDown: Uy,
              pointerUp: fy,
              draggedInfo: null,
              specialItemInfo: bb,
              variation: "Enchanting Table"
            }), ey && ey.possibleEnchantments.length > 0 && (0, By.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, By.jsx)("h2", {
                children: "Possible Perks:"
              }), ey.possibleEnchantments.map((yb => (0, By.jsxs)(hy.Fragment, {
                children: [(0, By.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, By.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, By.jsx)(mU.d, {
                      itemName: `${yb} Enchantment`,
                      amount: 1
                    })
                  }), (0, By.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: yb
                  })]
                }), (0, By.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Ky((0, HW.h)(yb).translationKey)
                })]
              }, yb)))]
            })]
          }), (0, By.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [ey && ey.isAlreadyEnchanted && (0, By.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Ky("enchantments:alreadyEnchanted")
            }), Cy]
          })]
        })]
      })
    }
    var LW = Wy(35549);

    function QW(yb) {
      var bb;
      let {
        specialItemInfo: Wy,
        setSpecialItemInfo: Uy,
        setHovered: fy,
        pointerDown: Zy,
        pointerUp: cb
      } = yb;
      const {
        t: Py
      } = (0, zb.D)(), Ky = (0, Ry.i)("inventory", (yb => yb.freeSlots)), [ey, sy] = (0, hy.useState)(null);
      (0, hy.useEffect)((() => {
        if (Wy) {
          const yb = (0, LW.b)(Wy.name, Wy.amount);
          sy({
            salvageable: !!yb,
            produces: yb
          })
        } else sy(null)
      }), [Wy, null === Wy || void 0 === Wy ? void 0 : Wy.name, null === Wy || void 0 === Wy ? void 0 : Wy.amount]);
      const Sy = !!Wy && !(null === ey || void 0 === ey || !ey.salvageable) && !(null !== (bb = ey.produces) && void 0 !== bb && bb.some((yb => {
        let {
          amt: bb
        } = yb;
        return bb < 1
      })));
      return (0, By.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, By.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Py("item:salvagingTable")
        }), (0, By.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, By.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, By.jsx)(FW.b, {
              idx: GW.d,
              setHovered: yb => {
                null === fy || void 0 === fy || fy(GW.d)(yb)
              },
              pointerDown: Zy,
              pointerUp: cb,
              draggedInfo: null,
              specialItemInfo: Wy,
              variation: "Salvaging Table"
            })
          }), (0, By.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, By.jsx)(qb.f, {
              className: "SalvageButton",
              onClick: Sy ? () => {
                const {
                  idx: yb,
                  name: bb,
                  amount: hy
                } = Wy;
                oy.gameBridge.send("salvageItem", {
                  slot: yb,
                  name: bb,
                  amount: hy
                }) && (sy(null), Uy(null))
              } : void 0,
              disabled: !Sy,
              children: ey ? ey.salvageable ? ey.produces.some((yb => {
                let {
                  amt: bb
                } = yb;
                return bb < 1
              })) ? (0, By.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, By.jsx)("div", {
                  className: "SalvageText Error",
                  children: Py("salvagingTable:notEnoughResources")
                })
              }) : Ky < ey.produces.length ? (0, By.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, By.jsx)("div", {
                  className: "SalvageText Error",
                  children: Py("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, By.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, By.jsx)("div", {
                  className: "SalvageText",
                  children: Py("salvagingTable:salvage")
                }), (0, By.jsx)("div", {
                  className: "SalvageIcons",
                  children: ey.produces.map(((yb, bb) => {
                    let {
                      item: Wy,
                      amt: Uy
                    } = yb;
                    return (0, By.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: Wy,
                        amount: Math.floor(Uy)
                      })
                    }, bb)
                  }))
                })]
              }) : (0, By.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, By.jsx)("div", {
                  className: "SalvageText Error",
                  children: Py("salvagingTable:unsalvageable")
                })
              }) : (0, By.jsx)(By.Fragment, {})
            })
          })]
        })]
      })
    }
    var jU = Wy(618),
      DW = Wy(8459),
      tU = Wy(2171),
      wW = Wy(7829),
      kU = Wy(7821),
      NW = Wy(1477),
      zU = Wy(1636),
      IW = Wy(1245),
      xU = Wy(1708);

    function AW(yb, bb, Wy) {
      const Uy = yb.trim().toLowerCase();
      if ("" === Uy) return 0;
      let hy = null;
      for (const fy of bb) {
        const yb = fy.toLowerCase().indexOf(Uy);
        if (0 === yb) return 0;
        yb > 0 && (hy = 1)
      }
      if (null !== hy) return hy;
      for (const fy of Wy)
        if (fy.toLowerCase().includes(Uy)) return 2;
      return null
    }

    function dW(yb) {
      return yb.map((yb => {
        var bb;
        return yb ? {
          name: yb.name,
          amount: null !== (bb = yb.amount) && void 0 !== bb ? bb : 1
        } : null
      }))
    }

    function yh(yb) {
      return yb < 1e3 ? `${yb}` : yb < 1e4 ? Math.floor(yb / 100) / 10 + "k" : `${Math.floor(yb/1e3)}k`
    }
    var bh = Wy(35551);
    const WU = qb.f,
      UU = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      hU = () => {
        const yb = (0, IW.g)();
        return yb ? yb.getPadRepeatTiming(UU) : UU
      };

    function fU(yb, bb, Wy) {
      var Uy, hy;
      const fy = (0, JW.x)(bb, yb);
      let Zy = null === (Uy = bb[yb]) || void 0 === Uy ? void 0 : Uy.description;
      if (Wy && (null === (hy = (0, bh.h)().get(yb)) || void 0 === hy || !hy.hideIngredients)) {
        Zy ? (Zy = (0, Oy.nb)(Zy), Zy.push({
          str: "\n"
        })) : Zy = [], Zy.push({
          str: "\n"
        }), Zy.push({
          str: "Can be crafted from:\n"
        });
        for (const yb of Wy) "string" === typeof yb && (Zy.push({
          icon: yb,
          style: {
            fontSize: "1.5em"
          }
        }), Zy.push({
          str: " "
        }), Zy.push(...(0, Oy.nb)((0, JW.x)(bb, yb))), Zy.push({
          str: "\n"
        }))
      }
      return {
        name: fy,
        desc: Zy
      }
    }

    function ZU(yb) {
      let {
        name: bb,
        WH: Wy
      } = yb;
      return `${bb}_${Wy}`
    }

    function ch(yb) {
      var bb;
      let {
        onClick: Wy,
        itemName: Uy,
        recipeId: fy,
        isSelected: Zy,
        haveIngredients: cb,
        craftable: Py,
        setHovered: oy,
        padActions: Ky,
        marked: ey,
        lock: qb,
        itemInfo: sy
      } = yb;
      const Sy = (0, hy.useRef)(null);
      return (0, wW.f)(Sy, {
        press: yb => !cb || "secondary" === yb && !Py ? (Ky.refuse(), !1) : "primary" === yb ? (Ky.choose(), !0) : Ky.craft(),
        release: Ky.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, By.jsxs)("div", {
        ref: Sy,
        className: qW()("InvenItem", {
          CraftableItemNotEnoughIngredients: !cb && !qb,
          CraftableItemMarked: ey,
          CraftableItemLocked: void 0 !== qb,
          CraftableItemLockedFar: (null !== (bb = null === qb || void 0 === qb ? void 0 : qb.stepsAway) && void 0 !== bb ? bb : 1) > 1
        }),
        "data-recipe-key": fy,
        "data-pad-inventory-default": Zy ? "" : void 0,
        onClick: Wy,
        style: {
          cursor: Zy ? null : "pointer"
        },
        onPointerEnter: yb => {
          null === oy || void 0 === oy || oy(!0, fU(Uy, sy)), !Zy && (0, NW.u)(yb.nativeEvent) && (0, kU.g)() && Wy()
        },
        onPointerLeave: () => {
          null === oy || void 0 === oy || oy(!1)
        },
        children: [(0, By.jsx)(mU.d, {
          itemName: Uy,
          amount: 1
        }), ey && (0, By.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), qb && (0, By.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, By.jsx)(Ey.e, {
            name: "lock"
          }), (0, By.jsx)(gb.d, {
            text: qb.tag
          })]
        })]
      })
    }

    function PU(yb) {
      let {
        idx: bb,
        status: Wy,
        shownItem: Uy,
        dim: fy,
        onHoverStart: Zy,
        onHoverEnd: cb,
        onPadBack: Py
      } = yb;
      const oy = (0, hy.useRef)(null);
      (0, wW.f)(oy, {
        press: () => !1,
        back: Py,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Ky = Wy.need > 0 ? Math.min(Wy.have / Wy.need, 1) : 1;
      return (0, By.jsxs)("div", {
        ref: oy,
        className: qW()("CupTile", {
          Short: Wy.missing > 0
        }),
        style: {
          width: fy,
          height: fy
        },
        "data-craft-ingredient": bb,
        onPointerEnter: Zy,
        onPointerLeave: cb,
        children: [(0, By.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Ky})`
          }
        }), (0, By.jsx)(mU.d, {
          itemName: Uy,
          amount: 0
        }), (0, By.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [yh(Wy.have), "/", yh(Wy.need)]
        })]
      })
    }

    function oU(yb) {
      var bb, Wy, Uy, fy, Zy;
      let {
        show: cb,
        recipeItem: {
          name: Py,
          WH: Ky,
          requires: ey,
          produces: qb,
          haveIngredients: sy
        },
        detail: Sy,
        onCraft: Ey,
        setHovered: ly,
        craftButtonRef: mb,
        onPadBack: Cy,
        showPadShortcut: Ty,
        refusedCount: Vy,
        lock: Jy,
        itemInfo: Gy
      } = yb;
      const {
        t: Oy
      } = (0, zb.D)(), Ry = null !== Sy && !Sy.roomForOne, vb = null !== (bb = null === Sy || void 0 === Sy ? void 0 : Sy.craftAllTimes) && void 0 !== bb ? bb : 0, ib = function(yb, bb) {
        return yb.map((yb => {
          let {
            items: Wy,
            amt: Uy
          } = yb, hy = 0;
          const fy = [];
          for (const Zy of Wy) {
            const yb = bb(Zy);
            hy += yb, yb > 0 && fy.push(Zy)
          }
          return 0 === fy.length && fy.push(Wy[0]), {
            shownItems: fy,
            need: Uy,
            have: hy,
            missing: Math.max(Uy - hy, 0)
          }
        }))
      }(ey, (yb => {
        var bb;
        return null !== (bb = null === Sy || void 0 === Sy ? void 0 : Sy.amounts[yb]) && void 0 !== bb ? bb : 0
      }));
      let My = "4rem",
        Yy = 4;
      3 === ey.length || 4 === ey.length ? My = "3.75rem" : ey.length >= 5 && (My = "3rem"), 4 === ey.length ? Yy = 2 : ey.length <= 6 && (Yy = 3);
      const Xy = `calc(${Yy} * ${My} + ${Yy-1} * 0.4rem + 1px)`,
        ny = (0, hy.useRef)(null),
        uy = (0, hy.useRef)(null);
      (0, hy.useLayoutEffect)((() => {
        ny.current.scrollTop = 0
      }), [Py, Ky]);
      const rb = (0, hy.useRef)(Vy);
      (0, hy.useEffect)((() => {
        if (Vy === rb.current) return;
        rb.current = Vy;
        const yb = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Uy of null !== (bb = null === (Wy = ny.current) || void 0 === Wy ? void 0 : Wy.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== bb ? bb : []) {
          var bb, Wy;
          Uy.animate(yb, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [Vy]);
      const Hy = (yb, bb, Wy) => {
          var Uy;
          if ((0, bh.h)().has(Py)) return void(Wy && clearInterval(ab.current));
          const hy = null !== (Uy = null === Sy || void 0 === Sy ? void 0 : Sy.resultStackable) && void 0 !== Uy && Uy,
            fy = dW(oy.gameBridge.latest("inventory").player),
            {
              UH: Zy,
              cL: cb,
              amountAddedToSlot: By
            } = oy.gameBridge.send("craftRecipe", {
              name: Py,
              WH: Ky,
              times: bb || yb && hy ? null : 1
            });
          if (Zy > 0) {
            const bb = [],
              Uy = new Set(ey.flatMap((yb => {
                let {
                  items: bb
                } = yb;
                return bb
              }))),
              Zy = function(yb, bb, Wy) {
                const Uy = [];
                for (let hy = 0; hy < yb.length; hy++) {
                  const fy = yb[hy];
                  if (!fy || !Wy.has(fy.name)) continue;
                  const Zy = bb[hy],
                    cb = (null === Zy || void 0 === Zy ? void 0 : Zy.name) === fy.name ? Zy.amount : 0;
                  cb < fy.amount && Uy.push({
                    idx: hy,
                    itemName: fy.name,
                    amount: fy.amount - cb
                  })
                }
                return Uy
              }(fy, dW(oy.gameBridge.latest("inventory").player), Uy).slice(0, 12),
              Ky = Wy ? 0 : Math.min(50, 400 / Zy.length),
              sy = Wy ? 220 : 320;
            for (const yb of Zy) {
              var qb;
              const Wy = ey.findIndex((bb => {
                  let {
                    items: Wy
                  } = bb;
                  return Wy.includes(yb.itemName)
                })),
                Uy = null === (qb = ny.current) || void 0 === qb ? void 0 : qb.querySelector(`[data-craft-ingredient="${Wy}"]`),
                hy = (0, JW.d)(yb.idx);
              Uy && hy && bb.push({
                kind: "ingredient",
                itemName: yb.itemName,
                amount: yb.amount,
                cL: yb.idx,
                from: hy,
                to: (0, JW.d)(Uy),
                delayMs: Math.round(bb.length * Ky),
                durationMs: sy
              })
            }
            let Sy;
            if (null !== cb && By > 0 && uy.current) {
              const yb = bb.length > 0 ? bb[bb.length - 1].delayMs + .6 * sy : 0;
              Sy = {
                itemName: Py,
                amount: By,
                cL: cb,
                from: (0, JW.d)(uy.current),
                delayMs: Math.round(yb)
              }
            }
            Ey(Sy, yb && !hy ? cb : null, bb), TW.e.play("wood1", .5).rate(1.75)
          }
        },
        ab = (0, hy.useRef)(null);
      (0, hy.useEffect)((() => () => {
        clearInterval(ab.current)
      }), []);
      const Fy = (yb, bb) => {
          Hy(yb, !1, !1), clearInterval(ab.current), bb && (ab.current = setTimeout((() => {
            ab.current = setInterval((() => {
              Hy(yb, !1, !0)
            }), bb.intervalMs)
          }), bb.initialDelayMs))
        },
        py = () => {
          clearInterval(ab.current)
        },
        Ly = !sy || Ry || Boolean(Jy),
        Qy = (0, hy.useRef)(null),
        jb = null !== (Wy = null === (Uy = (0, xU.d)()) || void 0 === Uy ? void 0 : Uy.hideButtonHints) && void 0 !== Wy && Wy,
        Dy = null !== (fy = null === (Zy = (0, IW.g)()) || void 0 === Zy ? void 0 : Zy.getBoundButton("inventorySecondary")) && void 0 !== fy ? fy : null,
        tb = () => !Ly && (Hy(!1, !0, !1), !0);
      (0, wW.f)(mb, {
        press: yb => "secondary" === yb ? tb() : !Ly && (Fy(!1, hU()), !0),
        release: py,
        back: Cy,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, wW.f)(Qy, {
        press: tb,
        back: Cy,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [wy, kb] = (0, hy.useState)(0), [Ny, Iy] = (0, hy.useState)(null);
      (0, hy.useEffect)((() => {
        if (!0 === cb) {
          kb(0);
          const yb = setInterval((() => {
            kb((yb => yb + 1))
          }), 1e3);
          return () => {
            clearInterval(yb)
          }
        }
        return () => {}
      }), [cb]);
      const xb = null === Sy || void 0 === Sy ? void 0 : Sy.ingredientsCraftedFrom,
        Ay = (0, hy.useRef)(ly);
      (0, hy.useEffect)((() => {
        Ay.current = ly
      }), [ly]);
      const dy = !(null === Jy || void 0 === Jy || !Jy.hideIngredients);
      (0, hy.useEffect)((() => {
        var yb, bb;
        if (!Ny) return;
        if (dy) return Iy(null), void(null === (bb = Ay.current) || void 0 === bb || bb.call(Ay, !1));
        const Wy = Ny[wy % Ny.length];
        null === (yb = Ay.current) || void 0 === yb || yb.call(Ay, !0, fU(Wy, Gy, null === xb || void 0 === xb ? void 0 : xb[Wy]))
      }), [Ny, wy, Gy, xb, dy]);
      const yW = !!Jy,
        bW = (0, hy.useRef)(!1);
      (0, hy.useEffect)((() => {
        var yb;
        yW && (clearInterval(ab.current), dy && bW.current && (bW.current = !1, null === (yb = Ay.current) || void 0 === yb || yb.call(Ay, !1)))
      }), [yW, dy]);
      const Wb = (0, JW.x)(Gy, Py);
      return (0, By.jsxs)("div", {
        ref: ny,
        className: "CraftableInfo SmallTextBold",
        children: [(0, By.jsx)("div", {
          className: "CraftableHeader",
          children: (0, By.jsx)(gb.d, {
            text: Wb
          })
        }), !dy && (0, By.jsx)("div", {
          className: qW()("CraftableIngredients", {
            Compact: ey.length >= 5
          }),
          style: {
            maxWidth: Xy
          },
          children: ib.map(((yb, bb) => {
            const Wy = yb.shownItems[wy % yb.shownItems.length];
            return (0, By.jsx)(PU, {
              idx: bb,
              status: yb,
              shownItem: Wy,
              dim: My,
              onHoverStart: () => {
                Iy(yb.shownItems)
              },
              onHoverEnd: () => {
                Iy(null), null === ly || void 0 === ly || ly(!1)
              },
              onPadBack: Cy
            }, bb)
          }))
        }), Jy && (0, By.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, By.jsx)(gb.d, {
            text: Jy.reason
          })
        }), !Jy && (!sy || Ry) && (0, By.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!sy && "Missing ingredients", (0, By.jsx)("br", {}), Ry && "Inventory is full"]
        }), !dy && (0, By.jsxs)(By.Fragment, {
          children: [(0, By.jsxs)(WU, {
            ref: mb,
            className: "DoCraftButton",
            onPointerDown: yb => {
              Fy((0, JW.z)(yb), (0, NW.u)(yb.nativeEvent) ? hU() : UU)
            },
            onPointerUp: py,
            onPointerLeave: py,
            disabled: Ly,
            children: [Ty && Dy && !Ly && !jb && (0, By.jsx)(zU.d, {
              className: "CraftShortcutGlyph",
              glyph: Dy
            }), (0, By.jsx)("div", {
              ref: uy,
              className: "DoCraftItem",
              onPointerEnter: () => {
                bW.current = !0, null === ly || void 0 === ly || ly(!0, fU(Py, Gy))
              },
              onPointerLeave: () => {
                bW.current = !1, null === ly || void 0 === ly || ly(!1)
              },
              children: (0, By.jsx)(mU.d, {
                itemName: Py,
                amount: qb
              })
            })]
          }), (0, By.jsxs)(WU, {
            ref: Qy,
            className: "DoCraftAllButton",
            onPointerDown: yb => {
              Hy((0, JW.z)(yb), !0, !1)
            },
            disabled: Ly,
            children: [(0, By.jsx)("span", {
              className: "CraftAllLabel",
              children: Oy("general:craftAll")
            }), vb > 0 && (0, By.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", yh(vb)]
            })]
          })]
        })]
      })
    }

    function BU(yb) {
      let {
        selectedIdx: bb,
        hidden: Wy
      } = yb;
      const Uy = (0, lW.q)(),
        fy = (0, hy.useRef)(null);
      return (0, hy.useLayoutEffect)((() => {
        const yb = fy.current,
          Uy = null === yb || void 0 === yb ? void 0 : yb.parentElement;
        if (!Uy || !yb) return;
        const hy = Uy.querySelector(".CraftableItems"),
          Zy = () => {
            var fy, Zy;
            if (Wy) return void(yb.style.opacity = "0");
            const cb = null === hy || void 0 === hy ? void 0 : hy.children[bb],
              Py = null === (fy = null !== (Zy = null === cb || void 0 === cb ? void 0 : cb.querySelector(".InvenItem")) && void 0 !== Zy ? Zy : cb) || void 0 === fy ? void 0 : fy.getBoundingClientRect();
            if (!Py || 0 === Py.width) return void(yb.style.opacity = "0");
            const oy = Uy.getBoundingClientRect();
            yb.style.opacity = "1", yb.style.width = `${Py.width}px`, yb.style.height = `${Py.height}px`, yb.style.transform = `translate(${Py.left-oy.left+Uy.scrollLeft}px, ${Py.top-oy.top+Uy.scrollTop}px)`
          };
        Zy();
        const cb = new MutationObserver(Zy),
          Py = new ResizeObserver(Zy);
        return Py.observe(Uy), hy && (cb.observe(hy, {
          childList: !0,
          subtree: !0
        }), Py.observe(hy)), () => {
          cb.disconnect(), Py.disconnect()
        }
      }), [bb, Wy]), (0, By.jsx)("div", {
        ref: fy,
        className: qW()("SelectionReticle", {
          Secondary: Uy
        })
      })
    }

    function KU(yb, bb, Wy) {
      return yb ? (0, jU.c)(DW.h, yb) ? eU(yb, bb, Wy) : yb : Wy("classicGame:handCrafting")
    }

    function eU(yb, bb, Wy) {
      var Uy;
      const hy = null === (Uy = bb[yb]) || void 0 === Uy ? void 0 : Uy.displayName;
      if ("string" === typeof hy) return Wy(hy);
      const fy = oy.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(hy) ? hy.map((yb => {
        if ("string" === typeof yb) return yb;
        if ("translationKey" in yb) return Wy(yb.translationKey, (0, zb.s)(yb.params, fy));
        if ("str" in yb) {
          if ("string" === typeof yb.str) return yb.str;
          if ("translationKey" in yb.str) return Wy(yb.str.translationKey, (0, zb.s)(yb.str.params, fy))
        }
        return ""
      })).join("") : hy && "translationKey" in hy ? Wy(hy.translationKey, (0, zb.s)(hy.params, fy)) : yb
    }

    function qh(yb, bb) {
      return yb === bb || null !== yb && null !== bb && yb.name === bb.name && yb.WH === bb.WH
    }

    function sU(yb) {
      var bb, Wy, Uy;
      let {
        show: fy,
        onCraft: Zy,
        dispatchSelectedCraftable: cb,
        selectedCraftable: Py,
        craftingStation: Ky,
        setHovered: ey
      } = yb;
      const {
        t: qb
      } = (0, zb.D)(), [sy, Sy] = (0, hy.useState)(""), [Ey, ly] = (0, hy.useState)(0);
      (0, hy.useEffect)((() => {
        fy || (Sy(""), ly((yb => yb + 1)))
      }), [fy]);
      const [mb, Cy] = (0, hy.useState)(Ky);
      mb !== Ky && (Cy(Ky), "" !== sy && (Sy(""), ly((yb => yb + 1))));
      const Ty = (0, hy.useRef)(null),
        Vy = (0, hy.useRef)(null),
        Jy = (0, kU.j)(),
        gb = Jy.showing && "recipe" === Jy.kind,
        [Gy, Oy] = (0, hy.useState)(0),
        vb = null !== Ky && void 0 !== Ky ? Ky : null,
        ib = (0, hy.useRef)(null),
        My = yb => {
          return !((bb = ib.current) === (Wy = yb) || null !== bb && null !== Wy && bb.station === Wy.station && qh(bb.recipe, Wy.recipe)) && (ib.current = yb, oy.gameBridge.send("focusCrafting", yb), !0);
          var bb, Wy
        };
      My(fy ? {
        station: vb,
        recipe: (null === (bb = ib.current) || void 0 === bb ? void 0 : bb.station) === vb ? ib.current.recipe : null
      } : null);
      let Yy = oy.gameBridge.latest("crafting");
      const Xy = (0, Ry.j)("itemInfo"),
        ny = "" !== sy.trim(),
        uy = (0, bh.B)(),
        rb = (0, bh.A)(),
        Hy = (0, bh.E)(),
        ab = function(yb, bb) {
          const [Wy, Uy] = (0, hy.useState)(!1);
          (0, hy.useEffect)((() => {
            if (!yb) return void Uy(!1);
            const bb = setTimeout((() => {
              Uy(!0)
            }), 0);
            return () => {
              clearTimeout(bb)
            }
          }), [yb]);
          const fy = yb && Wy,
            Zy = (0, hy.useRef)({
              station: bb,
              at: new Map
            });
          return (Zy.current.station !== bb || !fy && Zy.current.at.size > 0) && (Zy.current = {
            station: bb,
            at: new Map
          }), fy ? Zy.current.at : null
        }(fy, Ky);
      let Fy = Yy.recipes.filter((yb => {
        let {
          listed: bb
        } = yb;
        return bb
      }));
      if (ny) {
        const yb = [];
        for (const bb of Yy.recipes) {
          var py;
          const Wy = null !== (py = rb.get(bb.name)) && void 0 !== py && py.hideIngredients ? [] : bb.requires.flatMap((yb => {
              let {
                items: bb
              } = yb;
              return bb.flatMap((yb => [yb, eU(yb, Xy, qb)]))
            })),
            Uy = AW(sy, [bb.name, eU(bb.name, Xy, qb)], Wy);
          null !== Uy && yb.push({
            item: bb,
            rank: Uy
          })
        }
        yb.sort(((yb, bb) => yb.rank - bb.rank)), Fy = yb.map((yb => {
          let {
            item: bb
          } = yb;
          return bb
        }))
      } else {
        if (ab && ab.size > 0) {
          const yb = Yy.recipes.filter((yb => !yb.listed && ab.has(ZU(yb))));
          Fy = Fy.concat(yb)
        }
        Fy = (0, bh.j)(Fy, uy, rb, Hy), ab && (Fy = (0, bh.i)(Fy, ab, ZU))
      }
      const Ly = yb => Fy.find((bb => ZU(bb) === yb)),
        Qy = `${Ky}|${sy}`,
        [jb, Dy] = (0, hy.useState)(null),
        tb = (null === jb || void 0 === jb ? void 0 : jb.context) === Qy ? jb.key : null,
        wy = Py ? ZU(Py) : null,
        kb = null !== (Wy = null !== (Uy = Ly(wy)) && void 0 !== Uy ? Uy : Ly(tb)) && void 0 !== Wy ? Wy : Fy[0],
        Ny = kb ? ZU(kb) : null,
        Iy = kb ? {
          name: kb.name,
          WH: kb.WH
        } : null;
      fy && My({
        station: vb,
        recipe: Iy
      }) && (Yy = oy.gameBridge.latest("crafting")), Ny !== wy && Ny !== tb && Dy(Ny ? {
        context: Qy,
        key: Ny
      } : null), (0, hy.useEffect)((() => () => {
        ib.current = null, oy.gameBridge.send("focusCrafting", null)
      }), []);
      const xb = qh(Yy.detail, Iy) ? Yy.detail : null,
        Ay = null !== xb && !xb.roomForOne,
        dy = Fy.findIndex((yb => ZU(yb) === ZU(kb))),
        yW = () => Vy.current ? (0, wW.e)(Vy.current) : null,
        bW = (0, hy.useRef)(null),
        Wb = (0, hy.useRef)(0);
      Wb.current++;
      const Ub = Wb.current;
      (0, hy.useEffect)((() => {
        const yb = bW.current;
        if (!yb || Ub <= yb.afterRender) return;
        if (bW.current = null, yb.key !== Ny) return;
        const bb = yW();
        var Wy;
        null !== bb && void 0 !== bb && bb.press("primary") && !yb.kW && (null === (Wy = bb.release) || void 0 === Wy || Wy.call(bb))
      }));
      const hb = yb => {
          const bb = {
            name: yb.name,
            WH: yb.WH
          };
          return {
            choose: () => {
              cb(bb), (0, EW.l)(Vy.current)
            },
            craft: () => {
              var yb, Wy;
              return cb(bb), ZU(bb) !== ZU(kb) ? (bW.current = {
                key: ZU(bb),
                kW: !0,
                afterRender: Wb.current
              }, !0) : null !== (yb = null === (Wy = yW()) || void 0 === Wy ? void 0 : Wy.press("primary")) && void 0 !== yb && yb
            },
            stopCraft: () => {
              var yb, bb;
              bW.current ? bW.current.kW = !1 : null === (yb = yW()) || void 0 === yb || null === (bb = yb.release) || void 0 === bb || bb.call(yb)
            },
            refuse: () => {
              ZU(bb) !== ZU(kb) && cb(bb), Oy((yb => yb + 1))
            }
          }
        },
        fb = () => {
          var yb, bb, Wy;
          (0, EW.l)(null !== (yb = null === (bb = Ty.current) || void 0 === bb || null === (Wy = bb.querySelector(".CraftableItems")) || void 0 === Wy ? void 0 : Wy.children[dy]) && void 0 !== yb ? yb : null)
        },
        Zb = Fy.map(ZU).join("|"),
        cW = (0, hy.useRef)(Zb);
      return (0, hy.useEffect)((() => {
        cW.current !== Zb && (cW.current = Zb, gb && dy >= 0 && (0, kU.g)() && fb())
      })), (0, By.jsxs)("div", {
        className: "Craftables",
        children: [(0, By.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: KU(Ky, Xy, qb)
        }), (0, By.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, By.jsx)(Rb.c, {
            className: "CraftingSearch",
            placeholderText: qb("general:searchRecipes"),
            defaultValue: sy,
            maxLength: 100,
            onValueChange: yb => {
              Sy(yb)
            },
            blurOnEnter: !0
          }, Ey), 0 === Fy.length && ny && (0, By.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: qb("general:noRecipesMatchSearch")
          }), Fy.length > 0 && (0, By.jsxs)(By.Fragment, {
            children: [(0, By.jsxs)("div", {
              ref: Ty,
              className: "CraftablesLeftSide",
              children: [(0, By.jsx)(tU.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Fy.map((yb => {
                  let {
                    name: bb,
                    WH: Wy,
                    haveIngredients: Uy
                  } = yb;
                  return {
                    name: bb,
                    WH: Wy,
                    haveIngredients: Uy
                  }
                })))],
                observing: fy,
                children: Fy.map((yb => {
                  const {
                    name: bb,
                    WH: Wy,
                    haveIngredients: Uy
                  } = yb, hy = ZU(yb);
                  return (0, By.jsx)(ch, {
                    recipeId: hy,
                    itemName: bb,
                    onClick: () => {
                      cb({
                        name: bb,
                        WH: Wy
                      })
                    },
                    isSelected: ZU(kb) === hy,
                    haveIngredients: Uy,
                    craftable: Uy && !rb.has(bb) && !(ZU(kb) === hy && Ay),
                    setHovered: ey,
                    padActions: hb(yb),
                    marked: uy.has(bb),
                    lock: rb.get(bb),
                    itemInfo: Xy
                  }, hy)
                }))
              }), (0, By.jsx)(BU, {
                selectedIdx: dy,
                hidden: gb && Jy.steppingSlots
              })]
            }), (0, By.jsx)(oU, {
              show: fy,
              recipeItem: kb,
              detail: xb,
              onCraft: Zy,
              setHovered: ey,
              craftButtonRef: Vy,
              onPadBack: fb,
              showPadShortcut: gb,
              refusedCount: Gy,
              lock: rb.get(kb.name),
              itemInfo: Xy
            })]
          })]
        })]
      })
    }
    var SU = Wy(35464),
      EU = Wy(2597),
      lU = Wy(1743),
      mh = Wy(7805);
    class CU {
      constructor(yb, bb, Wy) {
        this.commit = yb, this.delayMs = bb, this.defers = Wy, this.pending = null, this.timer = void 0, this.kW = !1, this.flush = () => {
          clearTimeout(this.timer);
          const yb = this.pending;
          null !== yb && (this.pending = null, this.commit(yb))
        }
      }
      type(yb) {
        this.pending = yb, clearTimeout(this.timer), this.kW || this.defers() ? this.kW || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(yb) {
        var bb;
        return null !== (bb = this.pending) && void 0 !== bb ? bb : yb
      }
      isHeld() {
        return this.kW
      }
      setHeld(yb) {
        this.kW = yb, yb || this.flush()
      }
    }

    function TU(yb) {
      return null === yb ? "creativeInventory:all" : `creativeInventory:${yb}`
    }

    function VU(yb) {
      let {
        category: bb
      } = yb;
      return null === bb ? (0, By.jsx)(Ey.e, {
        name: "layer-group"
      }) : (0, By.jsx)(mU.d, {
        itemName: SU.creativeItemCategoryIcons[bb],
        amount: 0
      })
    }

    function JU(yb) {
      let {
        labelKey: bb,
        isSelected: Wy,
        onSelect: Uy,
        setHovered: hy,
        children: fy
      } = yb;
      return (0, By.jsx)("div", {
        className: qW()("CreativeCategoryTab", {
          Selected: Wy
        }),
        onClick: Uy,
        onPointerEnter: yb => {
          (0, JW.v)(yb) || hy(!0, {
            name: {
              translationKey: bb
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          hy(!1)
        },
        children: fy
      })
    }

    function gh(yb) {
      let {
        categories: bb,
        selectedCategory: Wy,
        onSelect: Uy
      } = yb;
      const {
        t: fy
      } = (0, zb.D)(), [Zy, cb] = (0, hy.useState)(!1), Py = (0, hy.useRef)(null), oy = (0, hy.useCallback)((() => {
        cb(!1)
      }), []);
      return (0, lU.b)(Py, oy), (0, By.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Py,
        children: [(0, By.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            cb(!Zy)
          },
          children: [(0, By.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, By.jsx)(VU, {
              category: Wy
            })
          }), (0, By.jsx)("span", {
            children: fy(TU(Wy))
          }), (0, By.jsx)(Ey.e, {
            name: Zy ? "caret-up" : "caret-down"
          })]
        }), Zy && (0, By.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: bb.map((yb => (0, By.jsxs)("div", {
            className: qW()("CreativeCategoryDropdownOption", {
              Selected: Wy === yb
            }),
            onClick: () => {
              Uy(yb), cb(!1)
            },
            children: [(0, By.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, By.jsx)(VU, {
                category: yb
              })
            }), (0, By.jsx)("span", {
              children: fy(TU(yb))
            })]
          }, null !== yb && void 0 !== yb ? yb : "all")))
        })]
      })
    }
    const GU = (0, hy.memo)((function(yb) {
      let {
        creativeScrollDiv: bb,
        playerInvenNumSlots: Wy,
        getSetHoveringForIdx: Uy,
        getPointerDownForIdx: fy,
        getPointerUpForIdx: Zy,
        creativeSearchVal: cb,
        setCreativeSearchVal: oy,
        creativeCategory: Ky,
        setCreativeCategory: ey,
        show: qb
      } = yb;
      const {
        t: sy
      } = (0, zb.D)(), Sy = (0, Ry.j)("creativeVisibility"), {
        userContext: ly
      } = (0, Jy.c)(), mb = (0, Py.k)("canUseDevCreativeItems"), Cy = ly.playerHasRank("developer") || !!mb, Ty = (0, hy.useMemo)((() => RU("", Sy, Cy)), [Sy, Cy]), Vy = (0, hy.useMemo)((() => {
        const yb = (0, SU.creativeItemIds)(),
          bb = new Set(Ty.map((bb => (0, SU.creativeCategoryOf)(yb[bb]))));
        return SU.creativeItemCategories.filter((yb => bb.has(yb)))
      }), [Ty]), gb = null !== Ky && Vy.includes(Ky) ? Ky : null, Oy = (0, hy.useMemo)((() => "" === cb ? Ty : RU(cb, Sy, Cy)), [Ty, cb, Sy, Cy]), vb = (0, hy.useMemo)((() => {
        const yb = (0, SU.creativeItemIds)();
        return null !== gb ? Oy.filter((bb => (0, SU.creativeCategoryOf)(yb[bb]) === gb)) : "" === cb ? Oy.filter((bb => !(0, SU.showOnlyInCreativeCategory)(yb[bb]))) : Oy
      }), [Oy, gb, cb]), ib = Uy();

      function My(yb) {
        ey(yb), bb.current.scrollTop = 0
      }
      const Yy = [null, ...Vy],
        {
          isTouchScreen: Xy
        } = (0, py.h)(["isTouchScreen"]),
        ny = !Xy,
        uy = (0, hy.useRef)(null),
        [rb, Hy] = (0, hy.useState)(0);
      (0, hy.useEffect)((() => {
        const yb = uy.current;
        if (!yb) return;
        const bb = new ResizeObserver((yb => {
          Hy(yb[0].contentRect.height)
        }));
        return bb.observe(yb), () => {
          bb.disconnect()
        }
      }), [ny]);
      const ab = (0, hy.useRef)(null),
        Fy = (0, hy.useCallback)((function yb() {
          "up" === ab.current ? bb.current.scrollTop -= 10 : "down" === ab.current && (bb.current.scrollTop += 10), ab.current && requestAnimationFrame(yb)
        }), [bb]),
        Ly = (0, hy.useCallback)((function(yb) {
          ab.current || (ab.current = yb, Fy())
        }), [Fy]);

      function Qy() {
        ab.current = null
      }
      const jb = (0, hy.useRef)({
        creativeSearchVal: cb,
        setCreativeSearchVal: oy
      });
      jb.current = {
        creativeSearchVal: cb,
        setCreativeSearchVal: oy
      };
      const [Dy] = (0, hy.useState)((() => new CU((yb => {
        jb.current.setCreativeSearchVal(yb)
      }), 250, lW.f))), tb = yb => {
        var Wy;
        null === (Wy = bb.current) || void 0 === Wy || Wy.classList.toggle("CreativeItemSlotsStale", yb)
      };
      (0, Gy.i)(mh.b, (yb => {
        Dy.setHeld(yb), yb || tb(!1)
      })), (0, hy.useEffect)((() => Dy.flush), [Dy]);
      const wy = (0, By.jsx)(Rb.c, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: cb,
          maxLength: 1e4,
          onValueChange: (yb, bb) => {
            "" === Dy.getTyped(jb.current.creativeSearchVal) && "" !== yb && ey(null), Dy.type(yb), tb(Dy.isHeld())
          },
          onEnter: Dy.flush,
          blurOnEnter: !0
        }),
        kb = (0, By.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Xy && (0, By.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, By.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Ly("up")
              },
              onPointerLeave: Qy,
              onPointerUp: Qy,
              children: (0, By.jsx)(Ey.e, {
                name: "arrow-up"
              })
            }), (0, By.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Ly("down")
              },
              onPointerLeave: Qy,
              onPointerUp: Qy,
              children: (0, By.jsx)(Ey.e, {
                name: "arrow-up"
              })
            })]
          }), (0, By.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: bb,
            children: [0 === vb.length && "" !== cb && (0, By.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: sy("general:noResults")
            }), (0, By.jsx)(tU.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [cb, gb],
              observerRoot: "CreativeItemSlots",
              observing: qb,
              children: vb.map((yb => {
                const bb = Wy + yb;
                return (0, By.jsx)(FW.b, {
                  idx: bb,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Uy(bb),
                  pointerDown: fy(bb),
                  pointerUp: Zy(bb)
                }, bb)
              }))
            })]
          })]
        });
      return (0, By.jsxs)("div", {
        className: qW()("CreativeItemSlotsWrapper", ny ? "WithRail" : "WithDropdown"),
        children: [ny && (0, By.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: uy,
          style: {
            "--rail-height": rb > 0 ? `${rb}px` : void 0,
            "--tab-rows": Math.ceil(Yy.length / 2)
          },
          children: Yy.map((yb => (0, By.jsx)(JU, {
            labelKey: TU(yb),
            isSelected: gb === yb,
            onSelect: () => {
              My(yb)
            },
            setHovered: ib,
            children: (0, By.jsx)(VU, {
              category: yb
            })
          }, null !== yb && void 0 !== yb ? yb : "all")))
        }), (0, By.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, By.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [wy, !ny && (0, By.jsx)(gh, {
              categories: Yy,
              selectedCategory: gb,
              onSelect: My
            })]
          }), kb]
        })]
      })
    }));

    function OU(yb) {
      var bb;
      return null !== (bb = (0, EU.c)(yb)) && void 0 !== bb ? bb : ""
    }

    function RU(yb, bb, Wy) {
      let {
        publicLobby: Uy,
        shownInGame: hy
      } = bb;
      const fy = yb.toLowerCase(),
        Zy = (0, SU.creativeItemIds)(),
        cb = yb => {
          var bb;
          const fy = Zy[yb];
          return !(0, SU.itemIsDisabled)(fy, Uy, null === (bb = hy[OU(fy)]) || void 0 === bb || bb, Wy)
        };
      if ("" === fy) return Zy.map(((yb, bb) => bb)).filter((yb => !(0, SU.showOnlyInCreativeSearch)(Zy[yb]))).filter(cb);
      const Py = [];
      for (let oy = 0; oy < Zy.length; oy++) OU(Zy[oy]).toLowerCase().includes(fy) && Py.push(oy);
      Py.sort(((yb, bb) => {
        const Wy = OU(Zy[yb]).toLowerCase(),
          Uy = OU(Zy[bb]).toLowerCase();
        return Wy.indexOf(fy) - Uy.indexOf(fy)
      }));
      for (const [oy, By] of(0, SU.creativeAltNames)())
        for (const yb of By)
          if (yb.toLowerCase().includes(fy)) {
            const yb = Zy.indexOf(oy);
            Py.includes(yb) || Py.push(yb)
          } return Py.filter(cb)
    }
    var vh = Wy(35569),
      ih = Wy(547);

    function MU(yb) {
      return yb > ih.h
    }

    function YU(yb) {
      const bb = yb / 2,
        Wy = [];
      for (let Uy = 0; Uy < bb / 6; Uy++)
        for (let yb = 0; yb < 12; yb++) {
          const hy = yb < 6 ? 0 : bb;
          Wy.push(hy + 6 * Uy + yb % 6)
        }
      return Wy
    }

    function XU(yb) {
      let {
        numSlots: bb,
        renderSlot: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), fy = (0, hy.useRef)(null);
      var Zy;
      return Zy = fy, (0, hy.useLayoutEffect)((() => {
        var yb;
        const bb = null === (yb = Zy.current) || void 0 === yb ? void 0 : yb.closest(".InvenBody");
        if (!bb) return;
        const Wy = () => {
          bb.style.zoom = "";
          const yb = parseFloat(getComputedStyle(document.documentElement).fontSize),
            Wy = window.innerWidth - 2 * yb,
            Uy = bb.getBoundingClientRect().width;
          Uy > Wy && (bb.style.zoom = "" + Wy / Uy)
        };
        return Wy(), window.addEventListener("resize", Wy), () => {
          window.removeEventListener("resize", Wy), bb.style.zoom = ""
        }
      }), [Zy]), (0, By.jsxs)("div", {
        ref: fy,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, By.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Uy("doubleChest:title")
        }), (0, By.jsx)("div", {
          className: "GridItemSlots",
          children: YU(bb).map((yb => Wy(yb)))
        })]
      })
    }

    function nU(yb) {
      let {
        Dv: bb,
        initialPasskey: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), [fy, Zy] = (0, hy.useState)(Wy), [cb, Py] = (0, hy.useState)(Wy);
      (0, hy.useEffect)((() => {
        Zy(Wy), Py(Wy)
      }), [...bb]);
      return (0, By.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, By.jsx)("div", {
          className: "SmallTextBold",
          children: Uy("ironChest:currentPasskey", {
            currentPasskey: fy.join("")
          })
        }), (0, By.jsx)(uW, {
          className: "IronChestPasskeyEditor",
          RP: cb,
          onPasskeyUpdated: Py,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            oy.gameBridge.send("changeIronChestPasskey", {
              pos: [...bb],
              RP: [...cb]
            }), Zy([...cb])
          }
        })]
      })
    }

    function uU(yb) {
      let {
        variation: bb,
        canCraft: Wy,
        show: Uy,
        creativeMounted: hy,
        specialItemRef: fy,
        draggedInfo: Zy,
        getSetHovering: cb,
        getPointerDownForIdx: Py,
        getPointerUpForIdx: oy,
        enchantingTablePosition: Ky,
        enchantingTableBlockName: ey,
        selectedCraftable: qb,
        dispatchSelectedCraftable: sy,
        creativeScrollDiv: Sy,
        creativeSearchVal: Ey,
        setCreativeSearchVal: ly,
        creativeCategory: mb,
        setCreativeCategory: Cy,
        onCraft: Ty
      } = yb;
      const {
        userContext: Vy
      } = (0, Jy.c)(), {
        t: gb
      } = (0, zb.D)(), Gy = (0, Ry.i)("inventory", (yb => yb.chest)), Oy = (0, Ry.i)("inventory", (yb => yb.player.length)), vb = (0, Ry.i)("inventory", (yb => yb.creative));
      if (0 === Oy) return null;
      let ib, My;
      const Yy = yb => {
          const bb = Oy + yb;
          return (0, By.jsx)(FW.b, {
            idx: bb,
            draggedInfo: Zy,
            specialItemInfo: fy.current,
            setHovered: cb(bb),
            pointerDown: Py(bb),
            pointerUp: oy(bb)
          }, bb)
        },
        Xy = Gy ? (0, vh.c)(Gy.type) : null;
      if (Xy) ib = qW()("InvenLeftSideChestCustom", Xy.className), My = (0, By.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Xy.render({
          Dv: Gy.pos,
          renderSlot: Yy
        })
      });
      else if (Gy) {
        const yb = Gy.pos,
          bb = "Iron" === Gy.type || "Moonstone" === Gy.type ? Gy.type : "Standard";
        let Wy = !1,
          Uy = null;
        "Iron" === bb && (Wy = Gy.ironChest.ownerDbId === Vy.whamm, Uy = Gy.ironChest.RP), ib = `InvenLeftSideChest${bb}`;
        const hy = MU(Gy.numSlots);
        My = (0, By.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [Wy && (0, By.jsx)(nU, {
            Dv: yb,
            initialPasskey: Uy
          }), hy && (0, By.jsx)(XU, {
            numSlots: Gy.numSlots,
            renderSlot: Yy
          }), !hy && (0, By.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, By.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: gb("Moonstone" === bb ? "item:moonstoneChest" : "Iron" === bb ? "item:ironChest" : "item:chest")
            }), (0, By.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(Gy.numSlots).fill(0).map(((yb, bb) => Yy(bb)))
            })]
          })]
        })
      } else if (!vb || bb && Wy)
        if (Wy && "Enchanting Table" === bb) ib = `InvenLeftSide${(null!==ey&&void 0!==ey?ey:"").replace(/ /gi,"")}`, My = (0, By.jsx)(pW, {
          specialItemInfo: fy.current,
          setHovered: cb,
          pointerDown: Py(GW.d),
          pointerUp: oy(GW.d),
          enchantingTablePosition: Ky,
          enchantingTableBlockName: ey
        });
        else if (Wy && "Salvaging Table" === bb) ib = "InvenLeftSideSalvagingTable", My = (0, By.jsx)(QW, {
        specialItemInfo: fy.current,
        setSpecialItemInfo: yb => {
          fy.current = yb
        },
        setHovered: cb,
        pointerDown: Py(GW.d),
        pointerUp: oy(GW.d)
      });
      else {
        if (!Wy) return null;
        ib = `InvenLeftSide${(null!==bb&&void 0!==bb?bb:"HandCrafting").replace(/ /gi,"")}`, My = (0, By.jsx)(sU, {
          show: Uy,
          onCraft: Ty,
          craftingStation: bb,
          selectedCraftable: qb,
          dispatchSelectedCraftable: sy,
          setHovered: cb()
        })
      } else ib = "InvenLeftSideCreative", My = hy ? (0, By.jsx)(GU, {
        creativeScrollDiv: Sy,
        playerInvenNumSlots: Oy,
        getSetHoveringForIdx: cb,
        getPointerDownForIdx: Py,
        getPointerUpForIdx: oy,
        creativeSearchVal: Ey,
        setCreativeSearchVal: ly,
        creativeCategory: mb,
        setCreativeCategory: Cy,
        show: Uy
      }) : null;
      const ny = !!Gy || Wy && !!bb;
      return (0, By.jsx)("div", {
        className: `InvenLeftSide ${ib}`,
        "data-pad-inventory-start": ny ? "" : void 0,
        children: My
      })
    }
    var rh = Wy(535);
    const HU = {
      Helmet: "empty_armor_slot_helmet",
      Chestplate: "empty_armor_slot_chestplate",
      Gauntlets: "empty_armor_slot_gauntlets",
      Leggings: "empty_armor_slot_leggings",
      Boots: "empty_armor_slot_boots"
    };

    function ah(yb) {
      let {
        draggedInfo: bb,
        specialItemInfo: Wy,
        craftFlyAnims: Uy,
        getSetHovering: hy,
        getPointerDownForIdx: fy,
        getPointerUpForIdx: Zy,
        variation: cb,
        canCraft: Py,
        isNewSlot: oy
      } = yb;
      const Ky = (0, Ry.i)("inventory", (yb => yb.player.length));
      return 0 === Ky ? null : (0, By.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, By.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(rh.b.length).fill(0).map(((yb, ey) => {
            const qb = Ky - rh.b.length + ey;
            return (0, By.jsx)(FW.b, {
              idx: qb,
              draggedInfo: bb,
              specialItemInfo: Wy,
              craftFlyHoldbackInfo: (0, gU.i)(Uy, qb),
              setHovered: hy(qb),
              pointerDown: fy(qb),
              pointerUp: Zy(qb),
              defaultIconB64: fW.e.getTexture(HU[rh.b[ey]], ZW.j.ITEM).url,
              variation: Py ? cb : void 0,
              showNewDot: oy(qb)
            }, qb)
          }))
        }), (0, By.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Ky - 10 - rh.b.length).fill(0).map(((yb, ey) => {
            const qb = Ky - rh.b.length - ey - 1;
            return (0, By.jsx)(FW.b, {
              idx: qb,
              draggedInfo: bb,
              specialItemInfo: Wy,
              craftFlyHoldbackInfo: (0, gU.i)(Uy, qb),
              setHovered: hy(qb),
              pointerDown: fy(qb),
              pointerUp: Zy(qb),
              variation: Py ? cb : void 0,
              showNewDot: oy(qb)
            }, qb)
          }))
        })]
      })
    }
    var FU = Wy(35573),
      pU = Wy(35576);

    function LU(yb) {
      const {
        e: bb,
        idx: Wy
      } = yb, Uy = (0, JW.k)(yb.readInventory(), Wy), hy = (0, JW.s)(bb);
      Wy === GW.b ? function(yb, bb) {
        const {
          draggedInfoRef: Wy,
          removeItem: Uy,
          removeDraggedInfoRef: hy,
          close: fy
        } = yb;
        if (Wy.current) {
          const yb = bb && Wy.current.amount || 1;
          Uy(Wy.current.idx, yb, !0) && (Wy.current.amount -= yb, Wy.current.amount <= 0 && hy())
        } else bb && fy()
      }(yb, hy) : Wy === GW.d ? function(yb, bb) {
        const {
          e: Wy,
          draggedInfoRef: Uy,
          specialItemRef: hy,
          moveAmtIntoSlot: fy,
          removeDraggedInfoRef: Zy
        } = yb;
        if ((0, JW.z)(Wy) && hy.current) hy.current = null;
        else if (Uy.current && hy.current && (Uy.current.idx === hy.current.idx || (0, pU.d)(Uy.current, hy.current)) && Uy.current.amount > 0 && hy.current.amount > 0 && hy.current.amount < XW.c.maxItemStackSize)
          if (Uy.current.idx === hy.current.idx) {
            if (bb) {
              const yb = Math.min(Uy.current.amount, XW.c.maxItemStackSize - hy.current.amount);
              hy.current.amount += yb, Uy.current.amount -= yb
            } else Uy.current.amount--, hy.current.amount++;
            Uy.current.amount <= 0 && Zy()
          } else if (bb) {
          const yb = Math.min(Uy.current.amount, XW.c.maxItemStackSize - hy.current.amount);
          fy(hy.current.idx, yb) && (hy.current.amount += yb)
        } else {
          fy(hy.current.idx, 1) && hy.current.amount++
        } else if (!Uy.current || hy.current || bb) {
          const yb = Uy.current;
          Uy.current = hy.current, hy.current = yb
        } else Uy.current.amount--, hy.current = {
          idx: Uy.current.idx,
          name: Uy.current.name,
          attributes: Uy.current.attributes,
          amount: 1
        }
      }(yb, hy) : (0, JW.z)(bb) ? function(yb, bb) {
        var Wy, Uy;
        const {
          idx: hy,
          draggedInfoRef: fy,
          specialItemRef: Zy,
          canCraft: cb,
          variation: Py,
          swapSlots: oy,
          moveIntoSlots: By
        } = yb;
        if (!bb) return;
        let Ky = bb.amount;
        hy === (null === (Wy = fy.current) || void 0 === Wy ? void 0 : Wy.idx) && (Ky = fy.current.amount <= 0 ? 0 : bb.amount - fy.current.amount);
        hy === (null === (Uy = Zy.current) || void 0 === Uy ? void 0 : Uy.idx) && (Ky = Zy.current.amount <= 0 ? 0 : bb.amount - Zy.current.amount);
        if (0 === Ky) return;
        const ey = yb.readInventory(),
          qb = ey.player.length,
          sy = ey.chest,
          Sy = qb - rh.b.length,
          Ey = () => {
            if (!(0, lW.f)()) return void By(10, Sy, hy, Ky);
            const yb = yb => {
              const Wy = (0, JW.k)(ey, yb);
              return Wy ? {
                amount: Wy.amount,
                stacksWithMoved: (0, pU.d)(Wy, bb)
              } : null
            };
            for (const bb of ((yb, bb, Wy, Uy, hy) => {
                const fy = [];
                let Zy = Uy;
                if (null !== Uy) {
                  let cb = 0;
                  for (let Uy = bb; Uy < Wy; Uy++) {
                    const bb = yb(Uy);
                    null !== bb && void 0 !== bb && bb.stacksWithMoved && null !== bb.amount && bb.amount > 0 && (cb += Math.max(0, hy - bb.amount))
                  }
                  const Py = Math.min(Uy, cb);
                  if (Py > 0 && (fy.push({
                      start: bb,
                      end: Wy,
                      amount: Py
                    }), Zy = Uy - Py), Zy <= 0) return fy
                }
                for (let cb = Wy - 1; cb >= bb; cb--)
                  if (null === yb(cb)) {
                    fy.push({
                      start: cb,
                      end: cb + 1,
                      amount: Zy
                    });
                    break
                  } return fy
              })(yb, 10, Sy, Ky, XW.c.maxItemStackSize)) By(bb.start, bb.end, hy, bb.amount)
          };
        if (!cb || "Enchanting Table" !== Py && "Salvaging Table" !== Py) {
          const Wy = (0, Oy.xb)(bb.name),
            Uy = Wy ? (0, Oy.ub)(Wy) : null;
          if (!rh.b.includes(Wy) || hy !== Uy && (0, JW.o)(ey, yb.itemInfo, Uy, hy))
            if (sy)
              if (hy < qb) {
                var ly, mb;
                const [yb, bb] = null !== (ly = null === (mb = (0, vh.c)(sy.type)) || void 0 === mb ? void 0 : mb.quickMoveRange) && void 0 !== ly ? ly : [0, sy.numSlots];
                By(qb + yb, qb + bb, hy, Ky)
              } else By(0, qb - rh.b.length, hy, Ky);
          else ey.creative ? hy < 10 ? Ey() : hy < qb ? By(0, 10, hy, Ky) : By(0, qb - rh.b.length, hy, null !== bb.amount ? XW.c.maxItemStackSize : null) : hy < 10 ? Ey() : By(0, 10, hy, Ky);
          else hy < qb - rh.b.length || hy >= qb ? oy(Uy, hy) : (By(0, qb - rh.b.length, Uy, Ky), TW.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else Zy.current = {
          idx: hy,
          name: bb.name,
          attributes: bb.attributes,
          amount: null !== bb.amount ? Ky : 0
        }
      }(yb, Uy) : yb.draggedInfoRef.current ? function(yb, bb, Wy, Uy) {
        const {
          draggedInfoRef: hy,
          specialItemRef: fy,
          moveAmtIntoSlot: Zy,
          swapSlots: cb,
          removeItem: Py,
          removeDraggedInfoRef: oy
        } = yb, By = yb.readInventory(), Ky = hy.current.idx;
        if (Wy && (bb === Ky || (0, pU.d)(hy.current, Wy)) && hy.current.amount > 0 && (0, JW.b)(Wy) > 0 && (Wy.amount < XW.c.maxItemStackSize || bb === Ky)) Uy ? Wy.amount + hy.current.amount <= XW.c.maxItemStackSize || bb === Ky ? Zy(bb, hy.current.amount) : Zy(bb, XW.c.maxItemStackSize - Wy.amount) : Zy(bb, 1);
        else if (hy.current.amount > 0 && !Wy) Zy(bb, Uy ? hy.current.amount : 1);
        else if (Uy || Wy || 0 === hy.current.amount)
          if (By.creative && !By.chest && bb >= By.player.length) {
            const yb = 0 === hy.current.amount ? 1 : hy.current.amount;
            Py(hy.current.idx, yb, !1) && oy()
          } else {
            var ey;
            const Wy = (null === (ey = fy.current) || void 0 === ey ? void 0 : ey.idx) === bb;
            if (cb(bb, hy.current.idx)) {
              const Uy = yb.readInventory(),
                Zy = (0, JW.k)(Uy, Ky),
                cb = !Uy.chest && Uy.creative && hy.current.idx >= Uy.player.length;
              if (Zy && hy.current.idx !== bb && !cb) {
                let yb = (0, JW.b)(Zy);
                Wy && (yb -= fy.current.amount), hy.current = Wy && 0 === yb ? null : {
                  idx: hy.current.idx,
                  name: Zy.name,
                  attributes: Zy.attributes,
                  amount: yb
                }
              } else oy()
            }
          }
        else Zy(bb, 1)
      }(yb, Wy, Uy, hy) : function(yb, bb, Wy, Uy) {
        var hy;
        const {
          draggedInfoRef: fy,
          specialItemRef: Zy
        } = yb;
        if (!Wy) return;
        let cb = (0, JW.b)(Wy);
        const Py = (null === (hy = Zy.current) || void 0 === hy ? void 0 : hy.idx) === bb;
        Py && (cb -= Zy.current.amount);
        Uy || (cb = Math.ceil(cb / 2));
        fy.current = Py && 0 === cb ? null : {
          idx: bb,
          name: Wy.name,
          attributes: Wy.attributes,
          amount: cb
        }
      }(yb, Wy, Uy, hy)
    }

    function QU(yb, bb) {
      return !!bb && bb.name === yb.name
    }

    function jh() {
      return oy.gameBridge.latest("inventory")
    }

    function DU(yb, bb, Wy) {
      return oy.gameBridge.send("removeInventoryItem", {
        slot: yb,
        amount: bb,
        drop: Wy
      })
    }

    function th(yb) {
      return (0, JW.h)(yb, oy.gameBridge.latest("itemInfo"), oy.gameBridge.latest("stationItems").enchantable)
    }

    function wU(yb) {
      let {
        show: bb,
        close: Wy,
        canCraft: Uy,
        variation: fy,
        inventoryItemsMoveable: Zy,
        setCraftFlyAnims: cb
      } = yb;
      (0, Ry.j)("itemInfo");
      const [Py, By] = (0, hy.useState)(null), [Ky, ey] = (0, hy.useState)(null), [qb, sy] = (0, hy.useState)(!1), Sy = (0, hy.useRef)(null), Ey = (0, hy.useRef)(null), ly = (0, hy.useRef)(null), mb = (0, hy.useRef)(null), [Cy, Ty] = (0, hy.useReducer)((yb => yb + 1), 0), Vy = (0, hy.useCallback)((() => {
        bb && Ty()
      }), [bb, Ty]), Jy = (0, hy.useCallback)((() => {
        Ey.current = null, rb.current = null, Vy()
      }), [Vy]), gb = (0, hy.useCallback)(((yb, bb) => {
        cb((Wy => Wy.map((Wy => "ingredient" === Wy.kind ? Wy : Wy.cL === yb ? {
          ...Wy,
          cL: bb,
          to: (0, JW.d)(bb)
        } : Wy.cL === bb ? {
          ...Wy,
          cL: yb,
          to: (0, JW.d)(yb)
        } : Wy))))
      }), [cb]), Gy = (0, hy.useCallback)(((yb, bb) => {
        const Wy = Fy.current;
        if (Wy.x = yb, Wy.y = bb, Sy.current) !py.current.isTouch || py.current.itemBeingDragged && !rb.current ? (Sy.current.style.transform = `translate(${Wy.x}px, ${Wy.y}px)`, sy(py.current.isTouch && !rb.current)) : (Sy.current.style.transform = "translate(0.5rem, 0.5rem)", sy(!0));
        else if (mb.current) {
          const Wy = mb.current;
          let Uy = yb + 10,
            hy = bb + 10;
          const fy = Wy.offsetWidth,
            Zy = Wy.offsetHeight;
          Uy + fy > window.innerWidth && (Uy = yb - fy - 10), hy + Zy > window.innerHeight && (hy = bb - Zy - 10), Uy < 0 && (Uy = 0), hy < 0 && (hy = 0), mb.current.style.transform = `translate(${Uy}px, ${hy}px)`
        }
      }), []), vb = (0, hy.useCallback)((yb => (bb, Wy, Uy) => {
        if (By(bb && void 0 !== yb ? yb : null), bb) {
          if (void 0 === yb && !Wy) return void(0, FU.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== yb) {
            var hy;
            const bb = jh();
            let Wy;
            if (Wy = yb === GW.d ? ly.current ? (0, JW.k)(bb, ly.current.idx) : null : (0, JW.k)(bb, yb), !Wy) return void ey(null);
            if ((null === (hy = ly.current) || void 0 === hy ? void 0 : hy.idx) === yb) {
              if (0 === (0, JW.b)(Wy) - ly.current.amount) return void ey(null)
            }
            ey(th(Wy))
          } else ey({
            name: Wy.name,
            desc: Wy.desc,
            fontStyle: "normal"
          })
        } else ey(null);
        Uy && setTimeout((() => {
          Gy(Uy.pageX, Uy.pageY)
        }), 0)
      }), [Gy]), ib = (0, hy.useCallback)(((yb, bb) => {
        const Wy = oy.gameBridge.send("moveInventoryItem", {
          from: Ey.current.idx,
          to: yb,
          amount: bb
        });
        return Wy ? (Ey.current.amount -= bb, Ey.current.amount <= 0 && Jy()) : console.error("moveInventoryItem failed"), Wy
      }), [Jy]), My = (0, hy.useCallback)(((yb, bb) => {
        const Wy = ly.current,
          Uy = null === Wy || void 0 === Wy ? void 0 : Wy.idx;
        Wy && (Wy.idx = function(yb, bb, Wy) {
          return yb === bb ? Wy : yb === Wy ? bb : yb
        }(Uy, yb, bb));
        const hy = oy.gameBridge.send("swapInventorySlots", {
          a: yb,
          b: bb
        });
        return hy ? gb(yb, bb) : Wy && (Wy.idx = Uy), hy
      }), [gb]), Yy = (0, hy.useCallback)(((yb, bb, Wy, Uy) => {
        const hy = oy.gameBridge.send("quickMoveInventoryItem", {
          slot: Wy,
          start: yb,
          end: bb,
          amount: Uy
        });
        null !== hy && gb(Wy, hy)
      }), [gb]), Xy = (0, hy.useCallback)(((yb, bb) => {
        var hy;
        ((yb, bb, Wy) => {
          const Uy = yb - (Wy - rh.b.length);
          return !(!bb || Uy < 0 || Uy >= rh.b.length) && (0, Oy.xb)(bb) !== rh.b[Uy]
        })(bb, null === (hy = Ey.current) || void 0 === hy ? void 0 : hy.name, jh().player.length) || (LU({
          e: yb,
          idx: bb,
          readInventory: jh,
          itemInfo: oy.gameBridge.latest("itemInfo"),
          draggedInfoRef: Ey,
          specialItemRef: ly,
          moveAmtIntoSlot: ib,
          swapSlots: My,
          moveIntoSlots: Yy,
          removeItem: DU,
          removeDraggedInfoRef: Jy,
          close: Wy,
          canCraft: Uy,
          variation: fy
        }), Vy())
      }), [Uy, Wy, ib, Yy, Jy, My, fy, Vy]), ny = (0, hy.useRef)(0), uy = (0, hy.useRef)(null), rb = (0, hy.useRef)(null), Hy = (0, hy.useRef)(null), ab = (0, hy.useRef)(new Set), Fy = (0, hy.useRef)({
        x: 0,
        y: 0
      }), py = (0, hy.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Ly = (0, hy.useCallback)((() => (Hy.current = null, py.current.itemBeingDragged = !1, clearTimeout(uy.current), !!rb.current && (rb.current = null, Vy(), !0))), [Vy]);
      (0, hy.useEffect)((() => {
        Ly(), ab.current.clear()
      }), [bb]);
      const Qy = yb => void 0 !== yb && (ab.current.has(yb) || null !== Hy.current && yb !== Hy.current),
        jb = yb => {
          py.current.isTouch = (0, JW.v)(yb)
        },
        Dy = (0, hy.useCallback)((yb => bb => {
          const Uy = (0, JW.v)(bb);
          if (Uy || Gy(bb.pageX, bb.pageY), Zy)
            if (Qy(bb.pointerId)) void 0 !== bb.pointerId && ab.current.add(bb.pointerId);
            else {
              if (jb(bb), Uy) {
                ny.current = bb.timeStamp, py.current.itemBeingDragged = !0, Hy.current = bb.pointerId;
                const Wy = (0, JW.k)(jh(), yb);
                if (Wy && Wy.amount && Wy.amount > 0) {
                  const Wy = bb.pageX,
                    Uy = bb.pageY,
                    hy = Fy.current.x,
                    fy = Fy.current.y;
                  clearTimeout(uy.current), uy.current = setTimeout((() => {
                    if (Ey.current && Ey.current.idx === yb && (Math.abs(Wy - Fy.current.x) < 20 && Math.abs(Uy - Fy.current.y) < 20 || hy === Fy.current.x && fy === Fy.current.y) && py.current.itemBeingDragged) {
                      const yb = jh(),
                        Wy = yb.creative && !yb.chest && Ey.current.idx >= XW.c.numInvenSlots && null !== (0, JW.k)(yb, Ey.current.idx).amount ? XW.c.maxItemStackSize : Ey.current.amount;
                      rb.current = {
                        initTouchX: bb.pageX,
                        initTouchY: bb.pageY,
                        maxAmount: Wy
                      }, Ey.current.amount = Math.ceil(Ey.current.amount / 2), Sy.current.style.transform = "translate(0.5rem, 0.5rem)", sy(!0), Vy()
                    }
                  }), 500)
                }
              }
              Xy(bb, yb)
            }
          else yb === GW.b && (0, JW.s)(bb) && Wy()
        }), [Gy, Xy, Zy, Wy, Vy]),
        tb = (0, hy.useCallback)((yb => yb => {
          if (Qy(yb.pointerId)) return;
          const bb = (0, JW.v)(yb);
          if (jb(yb), !Ly()) {
            if (bb && Ey.current && yb.timeStamp - ny.current > 150) {
              const bb = document.elementFromPoint(yb.clientX, yb.clientY);
              if (null !== bb) {
                const Wy = bb.getAttribute("data-inven-idx");
                null !== Wy ? Xy(yb, parseInt(Wy)) : bb.classList.contains("InventoryBackgroundScreen") && Xy(yb, -1)
              }
            }
            Gy(yb.pageX, yb.pageY)
          }
        }), [Gy, Xy, Ly]);
      (0, hy.useEffect)((() => {
        let yb;
        const Wy = ["pointerup", "pointercancel"],
          Uy = yb => {
            ab.current.has(yb.pointerId) ? setTimeout((() => {
              ab.current.delete(yb.pointerId)
            }), 0) : yb.pointerId === Hy.current && setTimeout((() => {
              Hy.current === yb.pointerId && Ly()
            }), 0)
          };
        if (bb) {
          for (const yb of Wy) document.addEventListener(yb, Uy, !0);
          if (!py.current.isTouch) {
            const yb = Fy.current;
            Gy(yb.x, yb.y)
          }
          yb = yb => {
            yb.preventDefault(), Qy(yb.pointerId) || (jb(yb), Gy(yb.pageX, yb.pageY), rb.current && yb.pointerId === Hy.current && (yb => {
              if (!Ey.current) return rb.current = null, void Vy();
              const {
                initTouchX: bb,
                maxAmount: Wy
              } = rb.current, Uy = (yb.pageX - bb) * rb.current.maxAmount / 160, hy = Math.ceil(Wy / 2) + Math.ceil(Uy);
              Ey.current.amount = Math.min(Wy, Math.max(1, hy)), Vy()
            })(yb))
          }, document.addEventListener("pointermove", yb, !0)
        }
        return () => {
          document.removeEventListener("pointermove", yb, !0);
          for (const yb of Wy) document.removeEventListener(yb, Uy, !0)
        }
      }));
      const wy = (0, hy.useCallback)((() => {
          if (Ey.current) {
            const yb = (0, JW.k)(jh(), Ey.current.idx);
            (!QU(Ey.current, yb) || yb.amount < Ey.current.amount) && Jy()
          }
        }), [Jy]),
        kb = (0, hy.useCallback)((() => {
          const yb = Ey.current;
          if (yb) {
            const bb = (0, JW.k)(jh(), yb.idx);
            QU(yb, bb) && (yb.attributes = bb.attributes)
          }
        }), []);
      return {
        draggedDomRef: Sy,
        draggedInfoRef: Ey,
        specialItemRef: ly,
        hoverInfoDomRef: mb,
        longHoldSplitInfoRef: rb,
        currHoveredIdx: Py,
        currHoveredDisplayInfo: Ky,
        displayDraggedItemName: qb,
        forceRerenderIfVisible: Vy,
        removeDraggedInfoRef: Jy,
        checkDraggedItemConsistencyWithInven: wy,
        refreshDraggedAttributes: kb,
        swapSlots: My,
        getPointerDownForIdx: Dy,
        getPointerUpForIdx: tb,
        getSetHovering: vb,
        setCurrHoveredDisplayInfo: ey,
        moveFollowerTo: Gy
      }
    }
    class kh {
      constructor(yb) {
        this.snapshot = [], this.newSlots = new Set, this.update(yb, !1)
      }
      update(yb, bb) {
        const Wy = yb.map((yb => {
          var bb;
          return yb ? {
            name: yb.name,
            amount: null !== (bb = yb.amount) && void 0 !== bb ? bb : 1
          } : null
        }));
        Wy.forEach(((yb, Wy) => {
          const Uy = this.snapshot[Wy],
            hy = (null === yb || void 0 === yb ? void 0 : yb.name) !== (null === Uy || void 0 === Uy ? void 0 : Uy.name);
          (!yb || hy || yb.amount < Uy.amount) && this.newSlots.delete(Wy), bb && yb && (hy || yb.amount > Uy.amount) && this.newSlots.add(Wy)
        })), this.snapshot = Wy
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(yb) {
        return this.newSlots.has(yb)
      }
    }
    const NU = (yb, bb, Wy) => ({
      button: bb,
      shiftKey: Wy,
      pageX: yb.clientX,
      pageY: yb.clientY,
      clientX: yb.clientX,
      clientY: yb.clientY,
      pointerType: "mouse"
    });

    function zh(yb) {
      const [bb, Wy] = (0, hy.useState)(yb);
      return yb && !bb && Wy(!0), (0, hy.useEffect)((() => {
        if (bb) return;
        let yb = !0;
        const Uy = () => {
            yb && (yb = !1, Wy(!0))
          },
          hy = "function" === typeof window.requestIdleCallback,
          fy = hy ? window.requestIdleCallback(Uy, {
            timeout: 2e3
          }) : void 0,
          Zy = setTimeout(Uy, hy ? 2e3 : 1e3);
        return () => {
          yb = !1, clearTimeout(Zy), void 0 !== fy && window.cancelIdleCallback(fy)
        }
      }), [bb]), bb
    }
    const IU = (0, hy.memo)((function(yb) {
      var bb;
      let {
        show: Wy,
        onOpen: Uy,
        onClose: fy,
        variation: cb
      } = yb;
      const Ky = (0, hy.useRef)(null),
        ey = (0, hy.useRef)(null),
        qb = function(yb) {
          const [bb, Wy] = (0, hy.useState)(!0), [Uy, fy] = (0, hy.useState)(!1), Zy = (0, hy.useRef)(null), cb = (0, hy.useRef)(null), oy = (0, Py.k)("_shield"), By = (0, hy.useRef)(null), Ky = (0, Py.k)("_health"), ey = (0, hy.useRef)(null);

          function qb(yb) {
            const bb = Date.now() + yb;
            bb < cb.current || (Wy(!1), clearTimeout(Zy.current), cb.current = bb, Zy.current = setTimeout((() => {
              Wy(!0)
            }), yb))
          }
          return (0, hy.useEffect)((() => {
            qb(RW);
            const yb = sy.g.subscribe("requestingPlayVideoAd", (() => {
              qb(RW)
            }));
            return () => {
              clearTimeout(Zy.current), sy.g.unsubscribe(yb)
            }
          }), []), (0, hy.useEffect)((() => {
            (By.current > oy || ey.current > Ky) && qb(6e4), By.current = oy, ey.current = Ky
          }), [oy, Ky]), (0, hy.useEffect)((() => {
            let bb = null;
            return yb ? bb = setTimeout((() => {
              fy(!0)
            }), 250) : fy(!1), () => {
              clearTimeout(bb)
            }
          }), [yb]), bb && Uy
        }(Wy);
      (0, Gy.m)(SW.c, null);
      const Sy = (0, SW.j)(),
        Ey = Sy.some((yb => yb.panel)),
        ly = (0, Ry.i)("inventory", (yb => null !== yb.chest && (null !== yb.chest.ironChest || MU(yb.chest.numSlots)))),
        mb = zh(Wy),
        Cy = zh(Wy),
        [Ty, Vy] = (0, hy.useState)([]),
        Jy = (0, hy.useCallback)((yb => {
          Vy((bb => bb.filter((bb => bb.id !== yb))))
        }), []),
        gb = (0, hy.useRef)(null),
        vb = (0, hy.useRef)(0),
        ib = (0, hy.useCallback)((() => {
          gb.current && (vb.current = gb.current.scrollTop), fy()
        }), [fy]),
        My = (0, Py.k)("inventoryItemsMoveable"),
        Yy = (0, Py.k)("canCraft"),
        {
          clientEscMenuOptions: Xy
        } = (0, py.h)(["clientEscMenuOptions"]),
        ny = (0, hy.useRef)(null);
      ny.current || (ny.current = new kh(oy.gameBridge.latest("inventory").player));
      const rb = ny.current,
        {
          draggedDomRef: Hy,
          draggedInfoRef: ab,
          specialItemRef: Fy,
          hoverInfoDomRef: Ly,
          longHoldSplitInfoRef: Qy,
          currHoveredIdx: jb,
          currHoveredDisplayInfo: Dy,
          displayDraggedItemName: tb,
          forceRerenderIfVisible: wy,
          removeDraggedInfoRef: kb,
          checkDraggedItemConsistencyWithInven: Ny,
          refreshDraggedAttributes: zb,
          swapSlots: Iy,
          getPointerDownForIdx: xb,
          getPointerUpForIdx: Ay,
          getSetHovering: dy,
          setCurrHoveredDisplayInfo: yW,
          moveFollowerTo: bW
        } = wU({
          show: Wy,
          close: ib,
          canCraft: Yy,
          variation: cb,
          inventoryItemsMoveable: My,
          setCraftFlyAnims: Vy
        });
      (0, hy.useEffect)((() => {
        const yb = !Wy && null !== oy.gameBridge.latest("inventory").chest;
        if (yb && oy.gameBridge.send("closeChest", null), Wy || (rb.clearMarks(), dy(null)(!1)), yb) {
          TW.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [Wy]), (0, Ry.e)("chestToggled", (yb => {
        if (yb ? Uy() : Wy && ib(), yb) {
          TW.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Wb = (0, kW.l)();
      (0, Ry.e)("inventory", (yb => {
        let {
          player: bb
        } = yb;
        var Uy, hy, fy;
        (rb.update(bb, !Wy && Wb.shown), Fy.current) && (Fy.current = (hy = Fy.current, fy = null !== (Uy = bb[Fy.current.idx]) && void 0 !== Uy ? Uy : null, QU(hy, fy) ? (hy.attributes = fy.attributes, null !== fy.amount && hy.amount > fy.amount && (hy.amount = fy.amount), hy) : null));
        zb(), null !== jb && dy(jb)(!0), wy()
      })), (0, hy.useEffect)((() => (oy.gameBridge.send("setInventoryOpen", Wy), () => {
        oy.gameBridge.send("setInventoryOpen", !1)
      })), [Wy]);
      const Ub = (yb, bb) => {
        if (yb === GW.d) return void(yb => {
          const bb = Fy.current;
          if (!bb || null === (0, JW.k)(oy.gameBridge.latest("inventory"), bb.idx)) return;
          const Wy = yb ? Math.max(bb.amount, 1) : 1,
            Uy = bb.amount - Wy;
          if (!oy.gameBridge.send("removeInventoryItem", {
              slot: bb.idx,
              amount: Wy,
              drop: !0
            })) return;
          const hy = Fy.current;
          hy && (hy.amount = Math.min(hy.amount, Uy), hy.amount <= 0 && (Fy.current = null)), wy()
        })(bb);
        const Wy = null === yb ? null : (0, JW.k)(oy.gameBridge.latest("inventory"), yb);
        if (null !== Wy) {
          var Uy, hy, fy;
          const Zy = bb && null !== (Uy = Wy.amount) && void 0 !== Uy ? Uy : 1;
          oy.gameBridge.send("removeInventoryItem", {
            slot: yb,
            amount: Zy,
            drop: !0
          }), yb === (null === (hy = ab.current) || void 0 === hy ? void 0 : hy.idx) && (ab.current.amount -= Zy, ab.current.amount <= 0 && kb(), wy()), yb === (null === (fy = Fy.current) || void 0 === fy ? void 0 : fy.idx) && (Fy.current = null, wy())
        }
      };
      (0, Ry.e)("inventoryDropRequested", (yb => {
        Wy && jb !== GW.d && Ub(jb, yb)
      }));
      const hb = (yb, bb) => {
        let Wy = bb;
        if (bb === GW.d) {
          if (!Fy.current) return;
          Wy = Fy.current.idx
        }
        const Uy = Iy(yb, Wy);
        if (Uy && ab.current && (ab.current.idx === Wy ? ab.current.idx = yb : ab.current.idx === yb && (ab.current.idx = Wy)), Uy && bb === GW.d) {
          const yb = (0, JW.k)(oy.gameBridge.latest("inventory"), Wy);
          Fy.current = yb ? {
            idx: Wy,
            name: yb.name,
            attributes: yb.attributes,
            amount: yb.amount
          } : null
        }
        wy()
      };
      (0, Ry.e)("numberKeyPressed", (yb => {
        null !== jb && Wy && hb(yb - 1, jb)
      })), (0, hy.useEffect)((() => {
        Wy || (Fy.current = null, kb(), yW(null))
      }), [Wy, kb, yW, Fy]);
      const fb = Fy.current;
      (0, hy.useEffect)((() => {
        jb === GW.d && dy(GW.d)(!0)
      }), [fb, jb, dy]);
      const Zb = () => {
        Ny(), zb(), wy()
      };
      (0, Ry.e)("chestRefreshed", Zb), (0, Ry.e)("inventorySynced", Zb);
      const [cW, Pb] = (0, hy.useState)(new Map), ob = null !== (bb = cW.get(cb)) && void 0 !== bb ? bb : null, Bb = (yb, bb) => {
        Pb((Wy => {
          const Uy = Wy.get(yb);
          return Uy && Uy.name === bb.name && Uy.WH === bb.WH ? Wy : new Map(Wy).set(yb, bb)
        }))
      };
      (0, Gy.i)("craftingRecipesEdited", (() => {
        wy()
      })), (0, Gy.i)(bh.d, (yb => {
        let {
          variation: bb,
          itemName: Wy
        } = yb;
        Bb(bb, {
          name: Wy,
          WH: 0
        })
      }));
      const [Kb, eb] = (0, hy.useState)(null), [sb, Sb] = (0, hy.useState)(null);
      (0, Ry.e)("enchantingTableOpened", (yb => {
        let {
          position: bb,
          blockName: Wy
        } = yb;
        eb(bb), Sb(Wy)
      }));
      const [Eb, lb] = (0, hy.useState)(""), [mW, Cb] = (0, hy.useState)(null);
      (0, hy.useEffect)((() => {
        Wy && gb.current && (gb.current.scrollTop = vb.current)
      }), [Wy]);
      return (yb => {
        const bb = (0, hy.useRef)(yb);
        bb.current = yb, (0, hy.useEffect)((() => {
          if (!yb.show) return;
          const Wy = (yb, Wy, Uy, hy) => {
              const {
                getPointerDownForIdx: fy,
                getPointerUpForIdx: Zy
              } = bb.current;
              fy(yb)(NU(Wy, Uy, hy)), Zy(yb)(NU(Wy, Uy, hy))
            },
            Uy = {
              primary: (yb, bb) => {
                Wy(yb, bb, 0, !1)
              },
              secondary: (yb, bb) => {
                Wy(yb, bb, 2, !1)
              },
              quickMove: (yb, bb) => {
                Wy(yb, bb, 0, !0)
              },
              dropHeld: (yb, Wy) => {
                bb.current.getPointerDownForIdx(GW.b)(NU(Wy, yb ? 0 : 2, !1))
              },
              dropSlot: (yb, Wy) => {
                bb.current.dropFromIdx(yb, Wy)
              },
              swapWithHotbar: (yb, Wy) => {
                bb.current.swapWithHotbar(yb, Wy)
              },
              cancel: () => {
                bb.current.removeDraggedInfoRef()
              },
              isHolding: () => !!bb.current.draggedInfoRef.current,
              hasItemAt: yb => {
                const {
                  draggedInfoRef: Wy,
                  specialItemRef: Uy
                } = bb.current;
                if (yb === GW.d) return !!Uy.current;
                const hy = (0, JW.k)(oy.gameBridge.latest("inventory"), yb);
                return !!hy && (0, FW.d)(yb, (0, JW.b)(hy), [Wy.current, Uy.current]).shown
              },
              hover: (yb, Wy) => {
                const {
                  moveFollowerTo: Uy,
                  getSetHovering: hy
                } = bb.current;
                Uy(Wy.clientX, Wy.clientY), hy(null !== yb && void 0 !== yb ? yb : void 0)(null !== yb, void 0, {
                  pageX: Wy.clientX,
                  pageY: Wy.clientY
                })
              },
              moveTo: yb => {
                bb.current.moveFollowerTo(yb.clientX, yb.clientY)
              },
              close: () => {
                bb.current.close()
              }
            };
          return (0, EW.j)(Uy)
        }), [yb.show])
      })({
        show: Wy,
        close: ib,
        draggedInfoRef: ab,
        specialItemRef: Fy,
        getPointerDownForIdx: xb,
        getPointerUpForIdx: Ay,
        getSetHovering: dy,
        moveFollowerTo: bW,
        removeDraggedInfoRef: kb,
        dropFromIdx: Ub,
        swapWithHotbar: hb
      }), (0, hy.useEffect)((() => {
        sy.g.EZ("inventoryDraggedItemUpdated", {
          draggedInfo: ab.current,
          specialItemInfo: Fy.current,
          setHovered: dy,
          pointerDown: xb,
          pointerUp: Ay,
          variation: Yy ? cb : void 0,
          craftFlyAnims: Ty
        })
      })), (0, By.jsxs)(uy.d, {
        show: Wy,
        style: {
          touchAction: Wy ? "none" : void 0
        },
        children: [ab.current && (0, By.jsx)(iU, {
          draggedInfo: ab.current,
          toAddRef: Hy
        }), ab.current && tb && (0, By.jsx)(MW, {
          className: "DraggedInvenItemName",
          displayInfo: th(ab.current),
          domRef: null
        }), !ab.current && Dy && (0, By.jsx)(MW, {
          displayInfo: Dy,
          domRef: Ly
        }), Qy.current && ab.current && (0, By.jsx)(YW, {
          info: Qy.current,
          draggedInfo: ab.current
        }), Ty.map((yb => (0, By.jsx)(gU.b, {
          anim: yb,
          onComplete: Jy
        }, yb.id))), (0, By.jsx)(Zy.c, {
          show: Wy,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: ib,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: xb(GW.b),
          pointerUp: Ay(GW.b),
          doGameplayStartStopOnShow: !0
        }), mb && (0, By.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, By.jsx)("div", {
            ref: Ky,
            className: "InventoryAdOuter",
            children: (0, By.jsx)(VW.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Ky
              },
              verticalAlign: "start",
              showing: Wy && qb,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, By.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, By.jsxs)("div", {
              className: qW()("Inventory", {
                WithPanelButtons: Ey,
                WideChestOpen: ly
              }),
              children: [(0, By.jsx)("div", {
                className: "InventoryFiller"
              }), (0, By.jsx)(CW, {
                show: Wy,
                buttons: Sy
              }), (0, By.jsxs)("div", {
                className: "InvenBody",
                children: [(0, By.jsx)(uU, {
                  variation: cb,
                  canCraft: Yy,
                  show: Wy,
                  creativeMounted: Cy,
                  specialItemRef: Fy,
                  draggedInfo: ab.current,
                  getSetHovering: dy,
                  getPointerDownForIdx: xb,
                  getPointerUpForIdx: Ay,
                  enchantingTablePosition: Kb,
                  enchantingTableBlockName: sb,
                  selectedCraftable: ob,
                  dispatchSelectedCraftable: yb => {
                    Bb(cb, yb)
                  },
                  creativeScrollDiv: gb,
                  creativeSearchVal: Eb,
                  setCreativeSearchVal: lb,
                  creativeCategory: mW,
                  setCreativeCategory: Cb,
                  onCraft: function(yb, bb) {
                    let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Ny(), (yb || Wy.length > 0) && Vy((bb => {
                        const Uy = [...bb],
                          hy = bb.filter((yb => "ingredient" === yb.kind)).length;
                        for (const yb of Wy.slice(0, Math.max(0, 24 - hy))) Uy.push({
                          id: (0, gU.f)(),
                          ...yb,
                          to: yb.to
                        });
                        return yb && Uy.push({
                          id: (0, gU.f)(),
                          ...yb,
                          to: (0, JW.d)(yb.cL)
                        }), Uy
                      })), null !== bb) {
                      var Uy;
                      const yb = oy.gameBridge.latest("inventory");
                      (0, Oy.xb)(null === (Uy = (0, JW.k)(yb, bb)) || void 0 === Uy ? void 0 : Uy.name) ? xb(bb)({
                        button: 0,
                        shiftKey: !0
                      }): Iy(bb, yb.selectedSlot)
                    }
                  }
                }), (0, By.jsx)(ah, {
                  draggedInfo: ab.current,
                  specialItemInfo: Fy.current,
                  craftFlyAnims: Ty,
                  getSetHovering: dy,
                  getPointerDownForIdx: xb,
                  getPointerUpForIdx: Ay,
                  variation: cb,
                  canCraft: Yy,
                  isNewSlot: yb => Xy.showNewItemIndicator && rb.isNew(yb)
                })]
              })]
            }), (0, By.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, By.jsx)("div", {
                ref: ey,
                className: "InventoryAd",
                children: (0, By.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var xh = Wy(1260),
      AU = Wy(139);
    const dU = (0, hy.memo)((function(yb) {
      let {
        show: bb,
        onOpen: Wy,
        onClose: Uy
      } = yb;
      const fy = (0, hy.useRef)(0),
        cb = () => (0, xh.d)() && !(0, xh.h)() && fy.current <= 2;
      bb = cb() && bb;
      const Py = () => {
        fy.current++, Uy()
      };
      (0, Gy.i)("ctrlCrouchWithoutFullscreen", (() => {
        cb() && Wy()
      })), (0, Gy.i)("displaymodeFullscreenChange", (yb => {
        bb && yb && Py()
      }));
      const oy = "crazygames" === AU.u;
      return (0, By.jsx)(Zy.c, {
        close: Py,
        escDoesExit: !0,
        show: bb,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, By.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, By.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), oy && (0, By.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, By.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, By.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!oy && (0, By.jsx)(qb.i, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, xh.n)(), Py()
              },
              children: (0, By.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, By.jsx)(qb.C, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Py()
              },
              children: (0, By.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var yf = Wy(2911);
    Wy(2915);
    const bf = (0, hy.memo)((function(yb) {
        let {
          show: bb,
          onOpen: Wy,
          onClose: Uy
        } = yb;
        const [fy, cb] = (0, hy.useState)(""), [Py, Ky] = (0, hy.useState)(""), [ey, qb] = (0, hy.useState)(null), [sy, Sy] = (0, hy.useState)(null), Ey = (0, Ry.j)("hiddenPlayerNames"), ly = {
          kind: "worldCodeLine",
          onSubmit: (yb, bb) => {
            Uy(), oy.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: sy,
              CU: yb,
              details: bb
            })
          }
        }, mb = {
          kind: "player",
          shownPlayerName: (0, bW.g)(fy, Ey),
          onSubmit: (yb, bb) => {
            Uy(), (0, yf.e)({
              playerId: Py,
              playerName: fy,
              chatMsgId: sy,
              policyId: yb,
              details: bb
            })
          }
        };
        return (0, Gy.i)("OpenReportMenu", (yb => {
          let {
            playerEId: bb,
            playerName: Uy,
            vc: hy,
            serverChatMsgId: fy
          } = yb;
          Ky(bb), cb(Uy), qb(hy), Sy(fy), Wy()
        })), (0, By.jsx)(Zy.c, {
          show: bb,
          close: Uy,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, By.jsx)("div", {
            className: "ReportMenu",
            children: bb && (0, By.jsx)(yf.b, {
              reported: null === Py ? ly : mb,
              chatMessage: ey,
              inGame: !0,
              onCancel: Uy
            })
          })
        })
      })),
      Wh = (0, hy.memo)((function(yb) {
        let {
          show: bb,
          onOpen: Wy,
          onClose: Uy
        } = yb;
        const [fy, cb] = (0, hy.useState)(null), [Py, Ky] = (0, hy.useState)(0);
        (0, Gy.i)("OpenDiscordReportBox", (yb => {
          oy.gameBridge.send("requestDiscordReportKey", yb), Ky(0), Wy()
        }));
        return (0, Gy.i)("setDiscordReportKey", (yb => {
          cb(yb)
        })), (0, By.jsx)(Zy.c, {
          show: bb,
          close: () => {
            Uy(), cb(null), Ky(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, By.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, By.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, By.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, By.jsx)("br", {}), (0, By.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, By.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, By.jsx)("br", {}), "2. Copy the Report Key below", (0, By.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, By.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, By.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, By.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== fy && void 0 !== fy ? fy : "Loading report key..."
              }), (0, By.jsx)(qb.f, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(fy).catch((yb => {
                    console.error("Failed to copy report key:", yb)
                  })), Ky(Date.now())
                },
                disabled: Date.now() - Py < 1e3 || !fy,
                children: Date.now() - Py < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var Uh = Wy(1145);
    const hh = {
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
      fh = (0, hy.memo)((function(yb) {
        let {
          show: bb,
          onOpen: Wy,
          onClose: Uy
        } = yb;
        const [fy, cb] = (0, hy.useState)(null), Py = (0, hy.useRef)(0), Ky = (0, hy.useRef)(null), {
          t: ey
        } = (0, zb.D)();
        (0, Gy.i)("EditCustomLobbyBlock", (yb => {
          let {
            pos: bb
          } = yb;
          cb(bb), null !== bb && Wy(), Ky.current.scrollTo(0, Py.current)
        }));
        const qb = yb => {
          oy.gameBridge.send("setCustomLobbyBlock", {
            pos: fy,
            blockName: yb
          }), Uy()
        };
        return (0, By.jsx)(Zy.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: Uy,
          escDoesExit: !0,
          show: bb,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, By.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Ky,
            onScroll: () => {
              Py.current = Ky.current.scrollTop
            },
            children: (0, By.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(hh).map((yb => {
                let [bb, Wy] = yb;
                return (0, By.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, By.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: ey(bb)
                  }), (0, By.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(Wy).map((yb => {
                      let [bb, {
                        tooltip: Wy,
                        blocks: Uy
                      }] = yb;
                      return (0, By.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, By.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [ey(bb), (0, By.jsx)(kb.c, {
                            hoverInfo: ey(Wy),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, By.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Uy.map((yb => (0, By.jsx)(Zh, {
                            blockName: yb,
                            selectBlock: qb
                          }, yb)))
                        })]
                      }, bb)
                    }))
                  })]
                }, bb)
              }))
            })
          })
        })
      })),
      Zh = (0, hy.memo)((function(yb) {
        var bb;
        let {
          blockName: Wy,
          selectBlock: Uy
        } = yb;
        const hy = (0, EU.b)(Wy),
          fy = null !== (bb = void 0 === hy ? void 0 : (0, SU.displayNameOf)(hy)) && void 0 !== bb ? bb : Wy,
          Zy = void 0 === hy ? void 0 : (0, SU.descriptionOf)(hy);
        return (0, By.jsx)(kb.f, {
          tooltipInner: (0, By.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, By.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, By.jsx)(gb.d, {
                text: fy
              })
            }), Zy && (0, By.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, By.jsx)(gb.d, {
                text: Zy
              })
            })]
          }),
          children: (0, By.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Uy(Wy),
            children: (0, By.jsx)(mU.d, {
              itemName: Wy,
              amount: 1
            })
          })
        }, Wy)
      }));
    var cf = Wy(2332),
      Ph = Wy(3515),
      oh = Wy(35578);

    function Bh() {
      const yb = (0, Ry.j)("itemInfo");
      return (0, hy.useMemo)((() => function(yb) {
        return {
          getDefaultItemStat(bb, Wy) {
            var Uy;
            const hy = yb[bb];
            return "description" === Wy ? null === hy || void 0 === hy ? void 0 : hy.description : null !== (Uy = null === hy || void 0 === hy ? void 0 : hy.displayName) && void 0 !== Uy ? Uy : bb
          }
        }
      }(yb)), [yb])
    }
    const Kh = (0, hy.memo)((function(yb) {
        var bb, Wy, Uy, fy, cb, Py, oy, Ky, ey, qb, sy, Sy, ly, mb, Cy, Ty, Vy, Jy, gb, Oy, Ry, vb, ib;
        let {
          togglePointerLock: My,
          show: Yy,
          onOpen: Xy,
          onClose: ny
        } = yb;
        const {
          t: uy
        } = (0, zb.D)(), rb = Bh(), Hy = (0, hy.useRef)(null), ab = (0, hy.useRef)(Ph.c.MobHungerLevel.Hungry), Fy = (0, hy.useRef)(null), py = (0, cf.e)(), Ly = (0, hy.useRef)(null), Qy = (0, hy.useRef)(null), jb = Hy.current;
        (0, hy.useEffect)((() => {
          if (!Yy) return;
          const yb = oh.f.openPet(Ly.current);
          return Qy.current = yb, () => {
            yb.close(), Qy.current = null
          }
        }), [Yy]), (0, hy.useEffect)((() => {
          Yy && jb && Qy.current.show(function(yb) {
            var bb;
            let {
              mobType: Wy,
              mobSettings: Uy
            } = yb;
            return {
              mobType: Wy,
              variation: null !== (bb = Uy.variation) && void 0 !== bb ? bb : "default",
              metaInfo: Uy.metaInfo,
              tamed: !(0, ih.D)(Uy.ownerDbId)
            }
          }(jb))
        }), [Yy, jb]), (0, hy.useEffect)((() => {
          const yb = () => {
            var yb;
            const bb = Ph.c.getMobHungerLevel(null === (yb = Hy.current) || void 0 === yb ? void 0 : yb.mobSettings.petInfo.lastFedAt);
            if (bb !== ab.current && (ab.current = bb, py()), Fy.current) {
              var Wy;
              const yb = Date.now(),
                bb = Ph.c.getNextStateAt(null === (Wy = Hy.current) || void 0 === Wy ? void 0 : Wy.mobSettings.petInfo.lastFedAt);
              let Uy = Math.floor((bb - yb) / 1e3),
                hy = "";
              if (Uy > 3600) {
                hy += Math.floor(Uy / 60 / 60).toString().padStart(2, "0"), hy += ":", Uy %= 3600
              }
              const fy = Uy % 60;
              hy += Math.floor(Uy / 60).toString().padStart(2, "0"), hy += ":", hy += fy.toString().padStart(2, "0"), Fy.current.textContent = hy
            }
          };
          yb();
          const bb = setInterval(yb, 250);
          return () => {
            clearInterval(bb)
          }
        }), [jb, py]), (0, Gy.i)("showPetUi", (yb => {
          let {
            mobType: bb,
            mobSettings: Wy
          } = yb;
          Hy.current = {
            mobType: bb,
            mobSettings: Wy
          }, Yy || Xy()
        }));
        const Dy = null === (bb = Hy.current) || void 0 === bb ? void 0 : bb.mobSettings.health,
          tb = null === (Wy = Hy.current) || void 0 === Wy ? void 0 : Wy.mobSettings.maxHealth,
          wy = Ph.c.getFriendshipLevelInfo(null !== (Uy = null === (fy = Hy.current) || void 0 === fy ? void 0 : fy.mobSettings.petInfo.friendshipPoints) && void 0 !== Uy ? Uy : 0);
        return (0, By.jsx)(Zy.c, {
          className: "PetUIOuter",
          close: ny,
          escDoesExit: !0,
          show: Yy,
          togglePointerLock: My,
          forcePointerUnlock: Yy,
          globallyUniqueKey: "PetUI",
          children: (0, By.jsx)("div", {
            className: "PetUI",
            children: (0, By.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, By.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, By.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (cb = null === (Py = Hy.current) || void 0 === Py ? void 0 : Py.mobSettings.name) && void 0 !== cb ? cb : "Your Pet"
                }), (0, By.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Ly
                })]
              }), (0, By.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, ih.D)(null === (oy = Hy.current) || void 0 === oy ? void 0 : oy.mobSettings.petInfo.friendshipPoints) && (0, By.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, By.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: uy("mobAiPlugin:friendshipTitle")
                  }), (0, By.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Ph.c.getIconsFromFriendshipPoints(null !== (Ky = Hy.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Ky ? Ky : 0).map(((yb, bb) => (0, By.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, By.jsx)(mU.d, {
                        itemName: yb,
                        amount: 1
                      })
                    }, bb)))
                  }), (0, By.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, By.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, By.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${wy.totalPointsForNextLevel>0?Math.max(wy.pointsIntoCurrentLevel/wy.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, By.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: wy.totalPointsForNextLevel > 0 ? ` ${Math.ceil(wy.pointsIntoCurrentLevel)}/${Math.ceil(wy.totalPointsForNextLevel)}` : Math.ceil(wy.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, By.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, By.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: uy("mobAiPlugin:hungerTitle")
                  }), (0, By.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Ph.c.hungerLevelIcons[ab.current].map(((yb, bb) => (0, By.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: yb,
                        amount: 1
                      })
                    }, bb)))
                  }), (0, By.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [uy(Ph.c.hungerLevelTranslations[ab.current].translationKey), ab.current !== Ph.c.MobHungerLevel.Starving && !(0, ih.D)(null === (ey = Hy.current) || void 0 === ey ? void 0 : ey.mobSettings.petInfo.lastFedAt) && (0, By.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [uy("mobAiPlugin:nextFeedIn", {
                        state: uy(Ph.c.hungerLevelTranslations[ab.current + 1].translationKey)
                      }), ":", " ", (0, By.jsx)("span", {
                        ref: Fy
                      })]
                    })]
                  })]
                }), (0, By.jsx)(kb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, By.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: uy("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, By.jsxs)("div", {
                    className: qW()("PetUIQuickStatsItem", {
                      Disabled: (0, ih.D)(Dy) || (0, ih.D)(tb)
                    }),
                    children: [(0, By.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, By.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, ih.D)(Dy) || (0, ih.D)(tb) ? "" : (0, By.jsxs)(By.Fragment, {
                        children: [Math.ceil(Dy), (0, By.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(tb)]
                        })]
                      })
                    })]
                  })
                }), (0, By.jsx)(kb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, By.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: uy("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, By.jsxs)("div", {
                    className: qW()("PetUIQuickStatsItem", {
                      Disabled: (0, ih.D)(null === (qb = Hy.current) || void 0 === qb ? void 0 : qb.mobSettings.attackDamage) || Hy.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, By.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, By.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (sy = Hy.current) || void 0 === sy ? void 0 : sy.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, By.jsx)(kb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, By.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: uy("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, By.jsxs)("div", {
                    className: qW()("PetUIQuickStatsItem", {
                      Disabled: (0, ih.D)(null === (Sy = Hy.current) || void 0 === Sy ? void 0 : Sy.mobSettings.secondaryAttackDamage) || Hy.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, By.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, By.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (ly = Hy.current) || void 0 === ly ? void 0 : ly.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, By.jsx)(kb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, By.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: uy("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, By.jsxs)("div", {
                    className: qW()("PetUIQuickStatsItem", {
                      Disabled: (0, ih.D)(null === (mb = Hy.current) || void 0 === mb ? void 0 : mb.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, By.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, By.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Cy = null === (Ty = Hy.current) || void 0 === Ty || null === (Vy = Ty.mobSettings.baseRunningSpeed) || void 0 === Vy ? void 0 : Vy.toFixed(2)) && void 0 !== Cy ? Cy : ""
                    })]
                  })
                }), (0, By.jsx)(kb.f, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, By.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: uy("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, By.jsxs)("div", {
                    className: qW()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (Jy = Hy.current) || void 0 === Jy ? void 0 : Jy.mobSettings.metaInfo)
                    }),
                    children: [(0, By.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, By.jsx)(mU.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, By.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (gb = Hy.current) || void 0 === gb ? void 0 : gb.mobSettings.metaInfo) ? (0, By.jsx)(Ey.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, ih.D)(null === (Oy = Hy.current) || void 0 === Oy ? void 0 : Oy.mobSettings.tameInfo) && (0, By.jsxs)(By.Fragment, {
                  children: [(0, By.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, By.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, By.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, By.jsx)(qf, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ph.c.feedTextColours[Ph.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, By.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, By.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Hy.current.mobSettings.petInfo.superlikedFoodKnown ? (0, By.jsx)(eh, {
                            food: Hy.current.mobSettings.petInfo.superlikedFood
                          }) : (0, By.jsx)(qf, {
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
                    }), (0, By.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, By.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, By.jsx)(qf, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Ph.c.feedTextColours[Ph.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, By.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Ry = Hy.current.mobSettings.tameInfo.likedFoods) || void 0 === Ry ? void 0 : Ry.filter((yb => !Hy.current.mobSettings.petInfo.superlikedFoodKnown || yb !== Hy.current.mobSettings.petInfo.superlikedFood)).map((yb => (0, By.jsx)(eh, {
                          food: yb
                        }, yb)))
                      })]
                    }), (0, By.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, By.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, By.jsx)(qf, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Ph.c.feedTextColours[Ph.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, By.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (vb = Hy.current.mobSettings.tameInfo.neutralFoods) || void 0 === vb ? void 0 : vb.map((yb => (0, By.jsx)(eh, {
                          food: yb
                        }, yb)))
                      })]
                    }), (0, By.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, By.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, By.jsx)(qf, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Ph.c.feedTextColours[Ph.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, By.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (ib = Hy.current.mobSettings.tameInfo.dislikedFoods) || void 0 === ib ? void 0 : ib.map((yb => (0, By.jsx)(eh, {
                          food: yb
                        }, yb)))
                      })]
                    })]
                  }), Hy.current.mobSettings.tameInfo.levelUpBonuses && (0, By.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Ph.c.MAX_LEVEL + 1
                    }).map(((yb, bb) => {
                      const Wy = bb;
                      if (0 === Wy) return null;
                      const Uy = Hy.current.mobSettings.tameInfo.levelUpBonuses[Wy],
                        hy = Ph.c.getBonusDisplayInfo(rb, Hy.current.mobSettings, Hy.current.mobType, Uy);
                      return (0, By.jsxs)("div", {
                        className: qW()("PetUIFeedDropContainer", {
                          Selected: Wy === Ph.c.getFriendshipLevelInfo(Hy.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, By.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: Wy
                          }).map(((yb, bb) => (0, By.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, By.jsx)(mU.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${Wy}-${bb}`)))
                        }), (0, By.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: hy && (0, By.jsx)(qf, {
                            icon: hy.icon,
                            displayName: hy.displayName,
                            description: hy.description
                          })
                        })]
                      }, Wy)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      eh = (0, hy.memo)((function(yb) {
        let {
          food: bb,
          includeDescription: Wy = !1
        } = yb;
        const Uy = Bh(),
          hy = Uy.getDefaultItemStat(bb, "displayName"),
          fy = Uy.getDefaultItemStat(bb, "description");
        return (0, By.jsx)(qf, {
          icon: bb,
          displayName: hy,
          description: Wy ? fy : null
        })
      })),
      qf = (0, hy.memo)((function(yb) {
        let {
          icon: bb,
          displayName: Wy,
          description: Uy,
          tintColor: hy,
          className: fy = "PetUIFoodItem"
        } = yb;
        return (0, By.jsx)(kb.f, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, By.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, By.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, By.jsx)(gb.d, {
                text: Wy
              })
            }), Uy && (0, By.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, By.jsx)(gb.d, {
                text: Uy
              })
            })]
          }),
          children: (0, By.jsx)("div", {
            className: fy,
            children: (0, By.jsx)(mU.d, {
              itemName: bb,
              amount: 1,
              tintColor: hy
            })
          })
        })
      }));
    var sh = Wy(3050),
      Sh = Wy(987),
      Eh = Wy(1102),
      lh = Wy(35604),
      mf = Wy(35595),
      Ch = Wy(865),
      Th = Wy(1209),
      Vh = Wy(1207),
      Jh = Wy(1951);

    function gf(yb) {
      let {
        peers: bb
      } = yb;
      const [Wy, Uy] = (0, hy.useState)(null), fy = (0, Ry.j)("players");
      return (0, By.jsx)("div", {
        className: "CodeEditorPresence",
        children: bb.map((yb => {
          var bb, hy;
          const Zy = null !== (bb = null === (hy = fy.byId[yb.playerId]) || void 0 === hy ? void 0 : hy.cosmetics) && void 0 !== bb ? bb : {};
          return (0, By.jsxs)("div", {
            className: qW()("PresenceIcon", {
              Viewer: !yb.isEditor
            }),
            style: {
              backgroundColor: yb.colour
            },
            onMouseEnter: () => {
              Uy(yb.playerId)
            },
            onMouseLeave: () => {
              Uy(null)
            },
            children: [(0, By.jsx)(Jh.b, {
              cosmetics: Zy
            }), Wy === yb.playerId && (0, By.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: yb.colour
              },
              children: yb.playerName
            })]
          }, yb.playerId)
        }))
      })
    }
    var Gh = Wy(568),
      Oh = Wy(35586),
      Rh = Wy(35330),
      vf = Wy(35613);

    function Mh(yb) {
      const bb = yb.split("/"),
        Wy = [];
      for (let Uy = 1; Uy < bb.length; Uy++) Wy.push(bb.slice(0, Uy).join("/"));
      return Wy
    }

    function Yh(yb) {
      return yb.slice(yb.lastIndexOf("/") + 1)
    }
    const Xh = (0, hy.memo)((function(yb) {
      var bb;
      let {
        files: Wy,
        activePath: Uy,
        canEdit: fy,
        directoryLinked: Zy,
        pluginNames: cb,
        activePluginName: Py,
        activePluginFile: oy,
        onSelect: Ky,
        onSelectPlugin: ey,
        onCreate: sy,
        onRename: Sy,
        onRenameFolder: ly,
        onDelete: mb,
        onToggleDirectorySync: Cy,
        schematics: Ty,
        onManageSchematic: Vy
      } = yb;
      const {
        t: Jy
      } = (0, zb.D)(), gb = null !== (bb = (0, mf.b)(Wy)) && void 0 !== bb ? bb : Eh.h, Gy = Object.keys(Wy), [Oy, Ry] = (0, hy.useState)((() => new Set)), vb = function(yb, bb, Wy) {
        const Uy = {
          folders: new Map,
          files: []
        };
        for (const Zy of yb) {
          if (Zy === bb) continue;
          let yb = Uy;
          for (const bb of Mh(Zy)) {
            let Wy = yb.folders.get(bb);
            Wy || (Wy = {
              folders: new Map,
              files: []
            }, yb.folders.set(bb, Wy)), yb = Wy
          }
          yb.files.push(Zy)
        }
        const hy = [];
        yb.includes(bb) && hy.push({
          kind: "file",
          path: bb,
          name: Yh(bb),
          depth: 0
        });
        const fy = (yb, bb) => {
          const Uy = [...yb.folders.entries()].sort(((yb, bb) => {
            let [Wy] = yb, [Uy] = bb;
            return Wy.localeCompare(Uy)
          }));
          for (const [Zy, cb] of Uy) {
            const yb = Wy.has(Zy);
            hy.push({
              kind: "folder",
              path: Zy,
              name: Yh(Zy),
              depth: bb,
              collapsed: yb
            }), yb || fy(cb, bb + 1)
          }
          yb.files.sort(((yb, bb) => yb.localeCompare(bb)));
          for (const Wy of yb.files) hy.push({
            kind: "file",
            path: Wy,
            name: Yh(Wy),
            depth: bb
          })
        };
        return fy(Uy, 0), hy
      }(Gy, gb, Oy);
      (0, hy.useEffect)((() => {
        Ry((yb => {
          const bb = new Set(yb);
          let Wy = !1;
          for (const hy of Mh(Uy)) Wy = bb.delete(hy) || Wy;
          return Wy ? bb : yb
        }))
      }), [Uy]);
      const ib = Gy.length >= hW.D,
        My = (yb, bb) => {
          if (yb.length > lh.z) return `Path must be at most ${lh.z} characters`;
          if (!(0, lh.w)(yb)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === yb) return "index.d.ts cannot be the world-code entry";
          const Uy = !!bb && (0, mf.f)(bb, yb);
          if (bb && (0, mf.g)(bb) && !Uy) return `Cannot rename ${bb} (only swapping ${Eh.h} and ${Eh.k} is allowed)`;
          if (yb in Wy) return "A file with that path already exists";
          if ((0, mf.g)(yb) && !Uy) {
            if ((yb === Eh.h ? Eh.k : Eh.h) in Wy) return `World code cannot have both ${Eh.h} and ${Eh.k}`
          }
          return null
        },
        Yy = yb => {
          Vh.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === yb ? void 0 : `${yb}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: yb => My(yb)
          }).getResult().then((yb => {
            "notificationTornDown" !== yb && null !== yb && "submit" === yb.type && sy(yb.value)
          }))
        },
        Xy = yb => {
          Vh.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: yb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: bb => bb === yb ? "That is already the file's path" : My(bb, yb)
          }).getResult().then((bb => {
            "notificationTornDown" !== bb && null !== bb && "submit" === bb.type && Sy(yb, bb.value)
          }))
        },
        ny = yb => {
          const bb = yb => yb.replace(/\/+$/, "");
          Vh.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: yb,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Wy => {
              const Uy = bb(Wy);
              if (Uy === yb) return "That is already the folder's path";
              for (const [bb, hy] of(0, mf.j)(Gy, yb, Uy)) {
                const yb = My(hy, bb);
                if (null !== yb) return yb
              }
              return null
            }
          }).getResult().then((Wy => {
            "notificationTornDown" !== Wy && null !== Wy && "submit" === Wy.type && ly(yb, bb(Wy.value))
          }))
        },
        uy = yb => {
          Vh.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: yb
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((bb => {
            !0 === bb && mb(yb)
          }))
        };
      return (0, By.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, By.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, By.jsx)("span", {
            children: "Files"
          }), fy && !ib && (0, By.jsx)(qb.l, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Yy()
            },
            children: (0, By.jsx)(Ey.e, {
              name: "plus"
            })
          })]
        }), (0, By.jsxs)("div", {
          className: "FileTreeList",
          children: [vb.map((yb => {
            const bb = yb.path;
            if ("folder" === yb.kind) return (0, By.jsx)(rf, {
              path: bb,
              name: yb.name,
              depth: yb.depth,
              collapsed: yb.collapsed,
              onToggle: () => {
                var yb;
                yb = bb, Ry((bb => {
                  const Wy = new Set(bb);
                  return Wy.delete(yb) || Wy.add(yb), Wy
                }))
              },
              canCreate: fy && !ib,
              canRename: fy,
              onCreate: Yy,
              onRename: ny
            }, `folder:${bb}`);
            const hy = (0, mf.g)(bb),
              Zy = Eh.h in Wy && Eh.k in Wy,
              cb = !hy || Zy,
              oy = null === Py && bb === Uy;
            return (0, By.jsx)(af, {
              path: bb,
              label: yb.name,
              depth: yb.depth,
              isActive: oy,
              canRename: fy,
              onSelect: Ky,
              onRename: Xy,
              onDelete: uy,
              canDelete: cb && fy
            }, bb)
          })), (0, By.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, By.jsxs)("span", {
              children: ["Schematics (", Object.keys(Ty).length, "/", vf.e, ")"]
            }), fy && (0, By.jsx)(qb.l, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(Ty).length >= vf.e,
              onClick: () => {
                Vy("")
              },
              children: (0, By.jsx)(Ey.e, {
                name: "plus"
              })
            })]
          }), Object.keys(Ty).sort().map((yb => (0, By.jsx)(af, {
            path: yb,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: Vy
          }, yb))), cb.length > 0 && (0, By.jsxs)(By.Fragment, {
            children: [(0, By.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, By.jsx)("span", {
                children: "Plugins"
              })
            }), cb.map((yb => {
              var bb;
              const Wy = Oh.g[yb],
                Uy = Object.keys(null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.files) && void 0 !== bb ? bb : {
                  "index.ts": ""
                }).sort(((yb, bb) => "index.ts" === yb ? -1 : "index.ts" === bb ? 1 : yb.localeCompare(bb)));
              return (0, By.jsxs)("div", {
                children: [(0, By.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, mf.p)(yb)
                }), Uy.map((bb => (0, By.jsx)(af, {
                  path: bb,
                  nested: !0,
                  isActive: Py === yb && oy === bb,
                  canRename: !1,
                  onSelect: () => {
                    ey(yb, bb)
                  },
                  canDelete: !1
                }, bb)))]
              }, yb)
            }))]
          })]
        }), (0, By.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, By.jsx)(qb.f, {
            className: "FileTreeFooterButton",
            onClick: Cy,
            children: Jy(Zy ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function nh(yb) {
      return yb > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": yb
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function uh(yb) {
      let {
        depth: bb
      } = yb;
      return (0, By.jsx)(By.Fragment, {
        children: Array.from({
          length: bb
        }, ((yb, bb) => (0, By.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": bb
          }
        }, bb)))
      })
    }

    function rf(yb) {
      let {
        path: bb,
        name: Wy,
        depth: Uy,
        collapsed: hy,
        onToggle: fy,
        canCreate: Zy,
        canRename: cb,
        onCreate: Py,
        onRename: oy
      } = yb;
      const Ky = [];
      Zy && Ky.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Py(bb)
        }
      }), cb && Ky.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          oy(bb)
        }
      });
      const ey = nh(Uy);
      return (0, By.jsxs)("div", {
        className: qW()("FileTreeItem FileTreeFolder", ey.className),
        style: ey.style,
        children: [(0, By.jsx)(uh, {
          depth: Uy
        }), (0, By.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !hy,
          onClick: fy,
          children: [(0, By.jsx)(Ey.e, {
            className: "FileTreeFolderCaret",
            name: hy ? "caret-right" : "caret-down"
          }), (0, By.jsx)(Ey.e, {
            className: "FileTreeFolderIcon",
            name: hy ? "folder" : "folder-open"
          }), Wy]
        }), (0, By.jsx)(Hh, {
          path: bb,
          actions: Ky
        })]
      })
    }

    function Hh(yb) {
      let {
        path: bb,
        actions: Wy
      } = yb;
      const Uy = (0, hy.useRef)(null);
      return 0 === Wy.length ? null : (0, By.jsxs)("div", {
        ref: Uy,
        className: "FileTreeItemActions",
        children: [(0, By.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${bb}`,
          children: (0, By.jsx)(Ey.e, {
            name: "ellipsis"
          })
        }), (0, By.jsx)(Rh.e, {
          triggerElementRef: Uy,
          options: Wy
        })]
      })
    }

    function af(yb) {
      let {
        path: bb,
        label: Wy = bb,
        depth: Uy = 0,
        isActive: hy,
        canRename: fy,
        onSelect: Zy,
        onRename: cb,
        onDelete: Py,
        canDelete: oy,
        nested: Ky
      } = yb;
      const ey = [];
      fy && cb && ey.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          cb(bb)
        }
      }), oy && Py && ey.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Py(bb)
        }
      });
      const qb = nh(Uy);
      return (0, By.jsxs)("div", {
        className: qW()("FileTreeItem", qb.className, {
          Active: hy,
          Nested: Ky
        }),
        style: qb.style,
        children: [(0, By.jsx)(uh, {
          depth: Uy
        }), (0, By.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: Wy === bb ? void 0 : bb,
          onClick: () => {
            Zy(bb)
          },
          children: Wy
        }), (0, By.jsx)(Hh, {
          path: bb,
          actions: ey
        })]
      })
    }
    async function Fh(yb) {
      const bb = (0, mf.b)(yb);
      if (!bb || "" === yb[bb].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Uy
      } = await Promise.all([Wy.e(277), Wy.e(278)]).then((() => Wy(39912)));
      return (0, Oh.e)(Uy(yb))
    }
    var ph = Wy(35615);

    function Lh(yb, bb) {
      const Wy = Object.keys(yb),
        Uy = Object.keys(bb);
      if (Wy.length !== Uy.length) return !1;
      for (const hy of Wy)
        if (!(hy in bb) || yb[hy] !== bb[hy]) return !1;
      return !0
    }

    function Qh(yb, bb) {
      const Wy = [],
        Uy = [],
        hy = [];
      for (const fy of Object.keys(bb)) fy in yb ? yb[fy] !== bb[fy] && hy.push(fy) : Wy.push(fy);
      for (const fy of Object.keys(yb)) fy in bb || Uy.push(fy);
      return Wy.sort(), Uy.sort(), hy.sort(), {
        creates: Wy,
        deletes: Uy,
        updates: hy
      }
    }

    function jf(yb, bb) {
      var Wy;
      const Uy = {
          ...yb
        },
        hy = (0, mf.b)(bb),
        fy = (0, mf.b)(Uy);
      if (Eh.h in Uy && Eh.k in Uy) {
        const yb = null !== hy && void 0 !== hy ? hy : Eh.k,
          Wy = yb === Eh.h ? Eh.k : Eh.h;
        var Zy;
        if (!(yb in Uy)) Uy[yb] = null !== (Zy = bb[yb]) && void 0 !== Zy ? Zy : "";
        return delete Uy[Wy], Uy
      }
      var cb;
      return hy && !(hy in Uy) ? (fy || (Uy[hy] = null !== (cb = bb[hy]) && void 0 !== cb ? cb : ""), Uy) : (fy || hy || (Uy[Eh.h] = null !== (Wy = Uy[Eh.h]) && void 0 !== Wy ? Wy : "", delete Uy[Eh.k]), Uy)
    }

    function Dh(yb, bb) {
      const Wy = (0, mf.b)(bb),
        Uy = Eh.h in bb && Eh.k in bb;
      return yb.filter((yb => !(0, mf.g)(yb) || (!!Uy || Wy !== yb)))
    }
    async function tf(yb, bb, Uy) {
      const hy = yb.getLobbyFiles(),
        fy = (0, hW.l)(Uy, (0, mf.m)(hy, bb)),
        Zy = await yb.ensureJoined(bb),
        cb = (0, lh.A)(Zy.docKey);
      if (Zy.doc === fy) return;
      for (let Wy = 0; Wy < 100; Wy++) {
        const Wy = yb.getCollabSnapshot();
        if (Wy && (0, lh.A)(Wy.docKey) === cb && yb.getActivePath() === bb) {
          if (yb.replaceActiveDoc(cb, fy)) return;
          await (0, ih.H)(40)
        } else await (0, ih.H)(40)
      }
      const {
        ChangeSet: Py
      } = await Wy.e(273).then((() => Wy(39754))), By = yb.getCollabSnapshot(), Ky = By && (0, lh.A)(By.docKey) === cb ? By : Zy;
      await async function(yb, bb, Wy, Uy) {
        const hy = yb.of({
            from: 0,
            to: Wy.length,
            insert: Uy
          }, Wy.length),
          fy = JSON.stringify([{
            clientID: bb.clientID,
            changes: hy.toJSON()
          }]),
          Zy = (0, lh.A)(bb.docKey);
        fy.length <= lh.l ? oy.gameBridge.send("sendCodeCollab", {
          qY: lh.e.Push,
          EM: Zy,
          mY: bb.version,
          XM: fy
        }) : await (0, Sh.postJsonWithMetricsCookiesAndJsonResponse)(`${bb.httpConfig.gsUrl}/code/collab-push`, sh.l["collab-push"].toBuffer({
          gameNameWithVariation: bb.httpConfig.gameNameWithVariation,
          lobbyName: bb.httpConfig.lobbyName,
          docKey: Zy,
          version: bb.version,
          updates: fy
        }), {
          retries: 0
        })
      }(Py, Ky, Ky.doc, fy)
    }
    class wh {
      constructor(yb) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = yb
      }
      async writeLobbyFiles(yb) {
        const bb = {
            ...this.bridge.getLobbyFiles()
          },
          Wy = {
            ...bb
          };
        for (const {
            path: fy,
            text: Zy
          }
          of yb) Wy[fy] = Zy;
        if (!yb.every((yb => {
            let {
              path: bb,
              text: Uy
            } = yb;
            return (0, hW.l)(Uy, (0, mf.m)(Wy, bb)) === Uy
          }))) return !1;
        const Uy = [];
        try {
          for (const {
              path: bb,
              text: Wy
            }
            of yb) Uy.push(bb), bb in this.bridge.getLobbyFiles() || (this.bridge.createFile(bb, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(bb, !0)), await tf(this.bridge, bb, Wy)
        } catch (hy) {
          for (const yb of Uy) yb in bb ? await tf(this.bridge, yb, bb[yb]).catch((bb => {
            console.error("World Code AI: couldn't put back", yb, bb)
          })) : this.bridge.deleteFile(yb);
          throw hy
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const yb = await (0, ph.u)(this.bridge.getStorageKey());
        return !!yb && (this.handle = yb, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(yb), !0)
      }
      async unlinkFolder() {
        const yb = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, ph.e)(yb), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const yb = this.bridge.getStorageKey(),
          bb = await (0, ph.q)(yb);
        return !!bb && (!!await (0, ph.j)(bb, "readwrite") && (this.handle = bb, this.linked = !0, await (0, ph.D)(yb, bb), await this.scaffoldLocalTypes(bb), !0))
      }
      scaffoldLocalTypes(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Uy = (await Fh(bb)).map((yb => Oh.g[yb])),
              hy = Uy.map((yb => {
                var bb;
                return `${yb.name}:${Object.keys(null!==(bb=null===yb||void 0===yb?void 0:yb.files)&&void 0!==bb?bb:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === hy) return;
            const {
              ensureLocalBloxdTypes: fy
            } = await Promise.all([Wy.e(73), Wy.e(275), Wy.e(280)]).then((() => Wy(39920)));
            await fy(yb, Uy), this.scaffoldedPluginNamesKey = hy
          } catch (Uy) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Uy)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(yb) {
        this.handle && await this.scaffoldLocalTypes(this.handle, yb), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(yb)
      }
      async onDocTextChanged(yb, bb) {
        if (!this.handle) return;
        const Wy = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [yb]: bb
        })];
        this.running && (this.pendingDocText.set(yb, bb), Wy.push(this.flushDocTextToDisk())), await Promise.all(Wy)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const yb = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const bb = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [Wy, Uy] of bb) this.lastSynced[Wy] !== Uy && (await (0, ph.J)(yb, Wy, Uy), this.lastSynced = {
              ...this.lastSynced,
              [Wy]: Uy
            })
          }
        } catch (bb) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", bb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, ph.v)(this.handle))
          } catch (yb) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", yb)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, ph.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const bb = this.bridge.getLobbyFiles(),
              Wy = await (0, ph.v)(this.handle);
            for (const yb of Object.keys(bb).filter(vf.d)) {
              if (Wy[yb] === ph.m) return void this.bridge.setMessage(`Move ${yb} outside the linked folder before syncing its placeholder.`, "warning");
              Wy[yb] = vf.k
            }
            if (Lh(Wy, bb)) {
              for (const yb of Object.keys(bb).filter(vf.d)) await (0, ph.J)(this.handle, yb, vf.k);
              return this.lastSynced = {
                ...Wy
              }, void this.beginWatch()
            }
            const Uy = await this.promptReconcile(function(yb) {
              return null !== (0, mf.b)(yb)
            }(Wy));
            if ("unlink" === Uy) return void await this.unlinkFolder();
            if ("dismissed" === Uy) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Uy) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(Wy);
                for (const yb of Object.keys(bb).filter(vf.d)) await (0, ph.J)(this.handle, yb, vf.k);
                this.lastSynced = {
                  ...await (0, ph.v)(this.handle)
                }
              } else await (0, ph.K)(this.handle, bb), this.lastSynced = {
                ...bb
              }
            } catch (yb) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", yb), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(yb) {
        return await new Promise((bb => {
          const Wy = [{
              choice: "local",
              Button: qb.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: qb.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: qb.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Uy = (0, By.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, By.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, By.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: yb ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, By.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: Wy.filter((bb => "local" !== bb.choice || yb)).map((yb => {
                  let {
                    choice: Wy,
                    Button: Uy,
                    labelKey: fy,
                    descriptionKey: Zy
                  } = yb;
                  return (0, By.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, By.jsx)(Uy, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (yb => {
                          hy.tearDownNotification(), bb(yb)
                        })(Wy)
                      },
                      children: this.bridge.t(`codeEditor:${fy}`)
                    }), (0, By.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${Zy}`)
                    })]
                  }, Wy)
                }))
              })]
            }),
            hy = Vh.NotificationProvider.showCustomPopup({
              body: Uy,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          hy.getResult().then((yb => {
            "notificationTornDown" === yb && bb("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, ph.F)(this.handle, (yb => {
          this.onDiskFilesChanged(yb)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (yb) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", yb)
        }
      }
      async onDiskFilesChanged(yb) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const bb = this.bridge.getLobbyFiles();
        let Wy = jf(yb, this.lastSynced);
        for (const fy in bb)
          if ((0, vf.d)(fy) && Wy[fy] === ph.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Uy = Object.keys(Wy).filter((yb => (0, vf.d)(yb) && !(yb in bb)));
        Uy.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const fy of Object.keys(bb).filter(vf.d))(fy in Wy || Uy.length > 0 || !(fy in this.lastSynced)) && (Wy[fy] = vf.k);
        if (!Lh(Wy, yb)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(yb, Wy), Wy = jf(await (0, ph.v)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Lh(Wy, this.lastSynced)) {
          this.applying = !0;
          try {
            const yb = Qh(this.lastSynced, Wy);
            if (await this.pushDiskDeltaToLobby(Wy, bb), null !== this.lastLobbySeen)
              for (const Wy of [...yb.creates, ...yb.updates, ...yb.deletes])(0, vf.d)(Wy) || (Wy in bb ? this.lastLobbySeen[Wy] = bb[Wy] : delete this.lastLobbySeen[Wy]);
            this.lastSynced = {
              ...Wy
            }
          } catch (hy) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", hy), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(yb, bb) {
        if (this.handle) {
          for (const Wy of Object.keys(yb)) Wy in bb || await (0, ph.y)(this.handle, Wy);
          for (const [Wy, Uy] of Object.entries(bb)) yb[Wy] !== Uy && await (0, ph.J)(this.handle, Wy, Uy)
        }
      }
      async applyRemoteTreeToDisk(yb) {
        if (!this.handle) return;
        const bb = this.lastLobbySeen;
        if (null === bb) return void(this.lastLobbySeen = {
          ...yb
        });
        const Wy = Object.keys(yb).filter((Wy => bb[Wy] !== yb[Wy])),
          Uy = Object.keys(bb).filter((bb => !(bb in yb)));
        if (0 !== Wy.length || 0 !== Uy.length) {
          this.applying = !0;
          try {
            for (const bb of [...Uy, ...Wy]) try {
              if (bb in yb) await (0, ph.J)(this.handle, bb, yb[bb]), this.lastSynced = {
                ...this.lastSynced,
                [bb]: yb[bb]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [bb]: yb[bb]
              };
              else {
                await (0, ph.y)(this.handle, bb);
                const yb = {
                  ...this.lastSynced
                };
                delete yb[bb], this.lastSynced = yb;
                const Wy = {
                  ...this.lastLobbySeen
                };
                delete Wy[bb], this.lastLobbySeen = Wy
              }
            } catch (hy) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", hy), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(yb, bb) {
        const Wy = function(yb, bb) {
          const Wy = (0, mf.b)(yb),
            Uy = (0, mf.b)(bb);
          return Wy && Uy && Wy !== Uy ? {
            from: Wy,
            to: Uy
          } : null
        }(yb, bb);
        return !!Wy && (this.bridge.renameFile(Wy.from, Wy.to), await this.bridge.waitForLobbyPath(Wy.to, !0), !0)
      }
      async applyLocalTreeToLobby(yb) {
        var bb;
        const Wy = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), yb);
        const Uy = this.bridge.getLobbyFiles(),
          hy = Qh(Uy, yb),
          fy = Dh(hy.deletes, Uy);
        for (const oy of hy.creates)(0, vf.d)(oy) || (this.bridge.createFile(oy, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(oy, !0));
        for (const oy of fy)(0, vf.d)(oy) || (this.bridge.deleteFile(oy), await this.bridge.waitForLobbyPath(oy, !1));
        if (!(0, mf.b)(this.bridge.getLobbyFiles()) && !(0, mf.b)(yb)) {
          if (this.bridge.createFile(Eh.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Eh.h, !0), !this.handle) return;
          await (0, ph.J)(this.handle, Eh.h, ""), yb = {
            ...yb,
            [Eh.h]: ""
          }
        }
        const Zy = this.bridge.getLobbyFiles();
        for (const oy of Object.keys(yb))(0, vf.d)(oy) || Zy[oy] !== yb[oy] && await tf(this.bridge, oy, yb[oy]);
        const cb = this.bridge.getLobbyFiles(),
          Py = Wy in cb ? Wy : null !== (bb = (0, mf.b)(cb)) && void 0 !== bb ? bb : Eh.h;
        await this.bridge.ensureJoined(Py)
      }
      async pushDiskDeltaToLobby(yb, bb) {
        const Wy = this.bridge.getActivePath(),
          Uy = await this.renameLobbyEntryIfSwitched(bb, yb) ? this.bridge.getLobbyFiles() : bb,
          hy = Qh(this.lastSynced, yb),
          fy = Dh(hy.deletes, Uy).filter((yb => yb in Uy));
        for (const Zy of hy.creates)(0, vf.d)(Zy) || (Zy in this.bridge.getLobbyFiles() || (this.bridge.createFile(Zy, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Zy, !0)), await tf(this.bridge, Zy, yb[Zy]));
        for (const Zy of fy)(0, vf.d)(Zy) ? await this.bridge.deleteSchematic(Zy) : (this.bridge.deleteFile(Zy), await this.bridge.waitForLobbyPath(Zy, !1));
        for (const Zy of hy.updates)(0, vf.d)(Zy) || await tf(this.bridge, Zy, yb[Zy]);
        Wy in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== Wy && await this.bridge.ensureJoined(Wy)
      }
    }
    var kf = Wy(1052);

    function Nh() {
      const {
        websocketUrl: yb,
        gameNameWithVariation: bb,
        lobbyName: Wy
      } = oy.gameBridge.latest("connectedGame");
      return {
        gsUrl: kf.clientSideServerUrls.getHttpUrlFromWebSocketUrl(yb),
        gameNameWithVariation: bb,
        lobbyName: Wy
      }
    }
    async function zf(yb) {
      const {
        gsUrl: bb,
        gameNameWithVariation: Wy,
        lobbyName: Uy
      } = Nh();
      return await (0, Sh.postBinaryWithMetricsCookiesAndCustomResponse)(`${bb}/code/schematics`, sh.nk.schematics.toBuffer({
        gameNameWithVariation: Wy,
        lobbyName: Uy,
        request: JSON.stringify(yb)
      }), {
        retries: 0
      }, Sh.HttpPayloadType.json)
    }
    var Ih = Wy(35175);

    function xf(yb) {
      let {
        path: bb,
        revision: Wy
      } = yb;
      const [Uy, fy] = (0, hy.useState)(""), [Zy, cb] = (0, hy.useState)(!1), [Py, oy] = (0, hy.useState)(0);
      return (0, hy.useEffect)((() => {
        let yb = !1;
        return fy(""), cb(!1), zf({
          action: "preview",
          path: bb
        }).then((bb => {
          yb || fy(`data:image/webp;base64,${bb.previewBase64}`)
        })).catch((bb => {
          console.error("Could not load schematic preview", bb), yb || cb(!0)
        })), () => {
          yb = !0
        }
      }), [bb, Wy, Py]), (0, By.jsxs)("div", {
        className: "SchematicPreview",
        children: [Uy && (0, By.jsx)("img", {
          src: Uy,
          alt: `Preview of ${bb}`
        }), !Uy && !Zy && (0, By.jsx)(vb.e, {
          loaderType: "Secondary"
        }), Zy && (0, By.jsxs)(By.Fragment, {
          children: [(0, By.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, By.jsx)(qb.f, {
            onClick: () => {
              oy(Py + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function Ah(yb) {
      var bb;
      let {
        initialPath: Wy,
        onChanged: Uy,
        onClose: fy
      } = yb;
      const Zy = "" === Wy,
        [cb, Py] = (0, hy.useState)(null),
        [oy, Ky] = (0, hy.useState)(Wy),
        [ey, sy] = (0, hy.useState)(!1),
        [Sy, Ey] = (0, hy.useState)(!1),
        [ly, mb] = (0, hy.useState)(null),
        [Cy, Ty] = (0, hy.useState)(!1),
        [Vy, Jy] = (0, hy.useState)(""),
        gb = (0, hy.useRef)(null),
        Gy = (0, hy.useRef)(!1),
        Oy = (0, hy.useRef)(!0);
      (0, hy.useEffect)((() => (Oy.current = !0, zf({
        action: "state"
      }).then((yb => {
        Oy.current && Py(yb)
      })).catch((yb => {
        console.error("Could not load schematic assets", yb), Oy.current && Jy("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        Oy.current = !1
      })), []);
      const Ry = null === cb || void 0 === cb ? void 0 : cb.assets[Wy],
        vb = Object.keys(null !== (bb = null === cb || void 0 === cb ? void 0 : cb.assets) && void 0 !== bb ? bb : {}).length,
        ib = oy.trim(),
        My = ib ? (0, vf.d)(ib) ? null !== cb && void 0 !== cb && cb.assets[ib] && (Zy || ib !== Wy) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Yy = !!ib && !My && (Zy ? vb < vf.e : ib !== Wy),
        Xy = Cy || !cb;
      async function ny(yb) {
        if (!Gy.current && Oy.current) {
          Gy.current = !0, Ty(!0), Jy("");
          try {
            const bb = await zf({
              ...yb,
              expectedRevision: cb.revision
            });
            Uy(bb), Oy.current && fy()
          } catch (Wy) {
            var bb;
            if (console.error("Schematic asset operation failed", Wy), Oy.current) Jy(Wy instanceof tb.c ? null !== (bb = Wy.errorMessageForUser) && void 0 !== bb ? bb : Wy.message : String(Wy));
            try {
              const yb = await zf({
                action: "state"
              });
              Uy(yb), Oy.current && Py(yb)
            } catch (hy) {
              console.error("Could not refresh schematic assets", hy)
            }
          } finally {
            Gy.current = !1, Oy.current && Ty(!1)
          }
        }
      }
      return (0, By.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, By.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Zy ? "New schematic" : ey ? "Rename schematic" : "Schematic"
        }), Vy && (0, By.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: Vy
        }), !cb && !Vy && (0, By.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, By.jsxs)("fieldset", {
          disabled: Xy,
          children: [Zy || ey ? (0, By.jsxs)("label", {
            className: "SchematicField",
            children: [(0, By.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, By.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, By.jsx)(Rb.c, {
                className: "InputGenericPopupInput",
                defaultValue: Wy,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Ky
              }, ey ? "rename" : "create")
            })]
          }) : (0, By.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: Wy
          }), (Zy || ey) && My && (0, By.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: My
          }), Zy ? (0, By.jsxs)(By.Fragment, {
            children: [vb >= vf.e && (0, By.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", vf.e, " maximum)."]
            }), Sy ? (0, By.jsxs)(By.Fragment, {
              children: [(0, By.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, By.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Xy || !Yy,
                children: (0, By.jsx)(Ih.b, {
                  loading: null === ly,
                  schematics: null !== ly && void 0 !== ly ? ly : [],
                  disableAutoExport: !0,
                  onSchematicPicked: yb => {
                    !Xy && Yy && ny({
                      action: "profile",
                      path: ib,
                      schematicId: yb.schematicId
                    })
                  }
                })
              }), (0, By.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, By.jsx)(qb.f, {
                  className: "InputGenericPopupButton",
                  disabled: Xy,
                  onClick: () => {
                    Ey(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, By.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, By.jsx)(qb.f, {
                className: "InputGenericPopupButton",
                disabled: Xy || !Yy,
                onClick: () => {
                  gb.current.click()
                },
                children: "Upload Schematic"
              }), (0, By.jsx)(qb.f, {
                className: "InputGenericPopupButton",
                disabled: Xy || !Yy,
                onClick: () => {
                  !async function() {
                    if (Ey(!0), Jy(""), !ly) try {
                      const yb = await (0, Sh.postJsonWithMetricsCookiesAndJsonResponse)(`${kf.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      Oy.current && mb(yb)
                    } catch (yb) {
                      console.error("Could not load profile schematics", yb), Oy.current && (Ey(!1), Jy("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, By.jsx)("input", {
              ref: gb,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: yb => {
                var bb;
                const Wy = null === (bb = yb.target.files) || void 0 === bb ? void 0 : bb[0];
                if (yb.target.value = "", !Wy) return;
                if (Wy.size > vf.f) return void Jy("The schematic file is too large.");
                const Uy = ib;
                Ty(!0);
                const hy = new FileReader;
                hy.onload = () => {
                  ny({
                    action: "upload",
                    path: Uy,
                    base64: String(hy.result).split(",")[1]
                  })
                }, hy.onerror = () => {
                  console.error("Could not read schematic file", hy.error), Oy.current && (Ty(!1), Jy("Could not read the selected file."))
                }, hy.readAsDataURL(Wy)
              }
            })]
          }) : Ry ? (0, By.jsxs)(By.Fragment, {
            children: [!ey && (0, By.jsx)(xf, {
              path: Wy,
              revision: cb.revision
            }), !ey && (0, By.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Ry.byteSize / 1024), " KB \xb7 ", Ry.dimensions.join(" \xd7 "), " blocks"]
            }), (0, By.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: ey ? (0, By.jsxs)(By.Fragment, {
                children: [(0, By.jsx)(qb.f, {
                  className: "InputGenericPopupButton",
                  disabled: Xy || !Yy,
                  onClick: () => {
                    ny({
                      action: "rename",
                      path: Wy,
                      newPath: ib
                    })
                  },
                  children: "Rename"
                }), (0, By.jsx)(qb.f, {
                  className: "InputGenericPopupButton",
                  disabled: Xy,
                  onClick: () => {
                    sy(!1), Ky(Wy)
                  },
                  children: "Cancel"
                })]
              }) : (0, By.jsxs)(By.Fragment, {
                children: [(0, By.jsx)(qb.f, {
                  className: "InputGenericPopupButton",
                  disabled: Xy,
                  onClick: () => {
                    sy(!0)
                  },
                  children: "Rename"
                }), (0, By.jsx)(qb.C, {
                  className: "InputGenericPopupButton",
                  disabled: Xy,
                  onClick: () => {
                    ny({
                      action: "remove",
                      path: Wy
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : cb && (0, By.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function dh(yb) {
      if ("string" !== typeof yb) return null;
      try {
        const bb = JSON.parse(yb);
        return (0, mf.h)(null === bb || void 0 === bb ? void 0 : bb.worldCodeEngine) && "boolean" === typeof bb.engineLocked && function(yb) {
          if (null === yb) return !0;
          const bb = null === yb || void 0 === yb ? void 0 : yb.location;
          return "string" === typeof(null === yb || void 0 === yb ? void 0 : yb.reason) && (null === bb || "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.path) && Number.isInteger(bb.line))
        }(bb.fallback) ? bb : (console.error("[CodeCollab] Malformed engine settings", yb), null)
      } catch (bb) {
        return console.error("[CodeCollab] Failed to parse engine settings", bb), null
      }
    }

    function yZ(yb) {
      let {
        fallback: bb,
        onGoToLine: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), {
        location: hy
      } = bb;
      return (0, By.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Uy("codeEditorEngine:notice", {
          reason: bb.reason
        }), hy && (0, By.jsxs)(By.Fragment, {
          children: [" ", (0, By.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              Wy(hy.path, hy.line)
            },
            children: Uy("codeEditorEngine:goToLine", {
              line: String(hy.line)
            })
          })]
        })]
      })
    }
    var bZ = Wy(4148);

    function Wf(yb) {
      let {
        label: bb,
        hint: Wy,
        checked: Uy,
        onChange: hy
      } = yb;
      return (0, By.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, By.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, By.jsx)("span", {
            children: bb
          }), (0, By.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: Wy
          })]
        }), (0, By.jsx)("span", {
          className: "SwitchContainer",
          children: (0, By.jsx)(Tb.c, {
            className: "SwitchCheckbox",
            checked: Uy,
            onChange: yb => {
              hy(yb.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Uf(yb) {
      let {
        engine: bb,
        onSetEngine: Wy,
        aiHints: Uy,
        variation: hy
      } = yb;
      const {
        t: fy
      } = (0, zb.D)();
      return (0, By.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, By.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: fy("codeEditor:moreOptions")
        }), bb && (0, By.jsx)(Wf, {
          label: fy("codeEditorEngine:toggle"),
          hint: fy("codeEditorEngine:toggleHint"),
          checked: "ses" === bb,
          onChange: yb => {
            Wy(yb ? "ses" : "quickjs")
          }
        }), Uy && (0, By.jsx)(Wf, {
          label: fy("codeEditorAiHints:toggle"),
          hint: fy("codeEditorAiHints:toggleHint"),
          checked: Uy.shown,
          onChange: Uy.setShown
        }), hy && (0, By.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, By.jsx)(bZ.i, {
            label: "codeEditor:variationLabel",
            children: (0, By.jsx)(Rb.c, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: hy.name,
              onValueChange: hy.setName,
              onEnter: hy.reload
            })
          }), (0, By.jsx)(qb.r, {
            className: "CodeEditorButton",
            onClick: hy.reload,
            children: fy("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var hf = Wy(35619),
      ff = Wy(35625);

    function Zf(yb) {
      let {
        close: bb
      } = yb;
      const {
        t: Wy
      } = (0, zb.D)(), Uy = [{
        name: Wy("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: Wy("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: Wy("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, By.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, By.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Wy("codeEditor:tutorialsTitle")
        }), (0, By.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Uy.map((yb => (0, By.jsx)(qb.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              bb(), (0, ff.I)(yb.tutorial)
            },
            children: yb.name
          }, yb.tutorial)))
        })]
      })
    }
    var cZ = Wy(105),
      Pf = Wy(35324),
      of = Wy(7915);
    const Bf = (0, hy.forwardRef)((function(yb, bb) {
      let {
        value: Wy,
        onChange: Uy,
        onSubmit: hy,
        placeholder: fy,
        maxLength: Zy,
        rows: cb = 2,
        allowNewLines: Py = !1,
        onKeyDown: oy,
        before: Ky
      } = yb;
      const {
        t: ey
      } = (0, zb.D)(), sy = "" !== Wy.trim(), Sy = () => {
        sy && hy()
      };
      return (0, By.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Ky, (0, By.jsx)("textarea", {
          ref: bb,
          className: "PanelPromptInput",
          value: Wy,
          maxLength: Zy,
          rows: cb,
          placeholder: fy,
          spellCheck: !1,
          autoComplete: "off",
          onChange: yb => {
            Uy(Py ? yb.target.value : yb.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: yb => {
            yb.nativeEvent.isComposing || 229 === yb.nativeEvent.keyCode ? yb.stopPropagation() : "Escape" !== yb.key && (yb.stopPropagation(), null === oy || void 0 === oy || oy(yb), yb.defaultPrevented || "Enter" !== yb.key || Py && yb.shiftKey || (yb.preventDefault(), Sy()))
          }
        }), (0, By.jsx)(qb.f, {
          className: "PanelPromptSend",
          disabled: !sy,
          onClick: Sy,
          ariaLabel: ey("codeEditorPanels:send"),
          children: (0, By.jsx)(Ey.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function Kf(yb) {
      let {
        close: bb,
        inputRef: Wy
      } = yb;
      const {
        t: Uy
      } = (0, zb.D)(), {
        messages: fy,
        reportedPlayers: Zy,
        channel: cb
      } = (0, of.n)(), [Py, oy] = (0, hy.useState)(""), Ky = (0, hy.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, By.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, By.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, By.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: Uy("codeEditorChat:title")
          }), (0, By.jsx)(qb.h, {
            className: "CodeEditorChatHide",
            onClick: bb
          })]
        }), 0 === fy.length ? (0, By.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: Uy("codeEditorChat:empty")
        }) : (0, By.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, By.jsx)(Pf.d, {
            messages: fy,
            reportedPlayers: Zy
          })
        }), (0, By.jsx)(Bf, {
          ref: Wy,
          value: Py,
          onChange: oy,
          onSubmit: () => {
            (0, of.k)(Py), oy(""), Ky.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: Oy.Rc,
          rows: 1,
          placeholder: cb ? Uy("touchOnly" === (0, cZ.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: cb.channelName
          }) : Uy("codeEditorChat:placeholder"),
          before: cb && (0, By.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: cb.elementBgColor
            },
            onClick: () => {
              of.b.selectNextChannel(), Wy.current.focus()
            },
            children: (0, By.jsx)(gb.d, {
              text: cb.elementContent
            })
          }),
          onKeyDown: yb => {
            const bb = Py === Ky.current.text;
            if ("ArrowUp" !== yb.key && "ArrowDown" !== yb.key || !bb && "" !== Py) "Tab" === yb.key && !yb.shiftKey && cb && (yb.preventDefault(), of.b.selectNextChannel());
            else {
              yb.preventDefault();
              const Wy = bb ? Ky.current.stepsBack : 0;
              Ky.current = (0, of.g)(Wy + ("ArrowUp" === yb.key ? 1 : -1)), oy(Ky.current.text)
            }
          }
        })]
      })
    }

    function ef(yb) {
      let {
        side: bb,
        defaultWidth: Wy,
        children: Uy
      } = yb;
      const fy = (0, hy.useRef)(null),
        [Zy, cb] = (0, hy.useState)(null),
        Py = (0, hy.useRef)(null),
        oy = () => {
          Py.current = null
        };
      return (0, By.jsxs)("div", {
        ref: fy,
        className: qW()("ResizableSidePanel", `ResizableSidePanel-${bb}`),
        style: {
          width: null !== Zy && void 0 !== Zy ? Zy : Wy
        },
        children: [Uy, (0, By.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": "vertical",
          onPointerDown: yb => {
            if (0 !== yb.button) return;
            yb.preventDefault();
            const bb = fy.current,
              Wy = Array.from(bb.parentElement.children).reduce(((yb, Wy) => Wy !== bb && "0" !== getComputedStyle(Wy).flexGrow ? yb + Wy.clientWidth : yb), 0),
              Uy = bb.offsetWidth,
              hy = Math.min(200, Uy),
              Zy = Math.max(hy, Uy + Math.max(0, Wy - 160));
            Py.current = {
              startX: yb.clientX,
              startWidth: Uy,
              minWidth: hy,
              maxWidth: Zy
            }, yb.currentTarget.setPointerCapture(yb.pointerId)
          },
          onPointerMove: yb => {
            const Wy = Py.current;
            if (!Wy) return;
            const Uy = "left" === bb ? yb.clientX - Wy.startX : Wy.startX - yb.clientX;
            cb(Math.min(Wy.maxWidth, Math.max(Wy.minWidth, Wy.startWidth + Uy)))
          },
          onPointerUp: oy,
          onPointerCancel: oy,
          onLostPointerCapture: oy
        })]
      })
    }
    var qZ = Wy(35631);
    class sf {
      constructor(yb, bb) {
        this.storageKey = yb, this.defaultValue = bb, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const yb = ny.e.getItem(this.storageKey);
            this.value = "boolean" === typeof yb ? yb : this.defaultValue
          }
          return this.value
        }, this.set = yb => {
          this.value = yb, ny.e.setItem(this.storageKey, yb);
          for (const bb of this.listeners) bb(yb)
        }
      }
      subscribe(yb) {
        return this.listeners.add(yb), () => {
          this.listeners.delete(yb)
        }
      }
    }
    const Sf = new sf("codeEditorLightMode", !1),
      Ef = new sf("codeEditorAiHints", !0);

    function lf(yb) {
      const [bb, Wy] = (0, hy.useState)(yb.get);
      return (0, hy.useEffect)((() => {
        const bb = yb.subscribe(Wy);
        return Wy(yb.get()), bb
      }), [yb]), [bb, yb.set]
    }
    var mZ = Wy(35638),
      Cf = Wy(35643),
      Tf = Wy(35646);
    const Vf = (0, hy.lazy)((() => Promise.all([Wy.e(277), Wy.e(273), Wy.e(276), Wy.e(272), Wy.e(73), Wy.e(275), Wy.e(274), Wy.e(271)]).then((() => Wy(39748))))),
      Jf = (0, hy.lazy)((() => Promise.all([Wy.e(68), Wy.e(71), Wy.e(72), Wy.e(70), Wy.e(279)]).then((() => Wy(39894))))),
      gZ = (0, hy.lazy)((() => Promise.all([Wy.e(277), Wy.e(276), Wy.e(73), Wy.e(71), Wy.e(72), Wy.e(70), Wy.e(275), Wy.e(274), Wy.e(69), Wy.e(78)]).then((() => Wy(39900)))));

    function Gf(yb) {
      return oy.gameBridge.query("worldCodeAiChunk", yb)
    }

    function Of() {
      return oy.gameBridge.query("worldCodeAiGameState", null)
    }

    function Rf(yb) {
      const {
        gsUrl: bb,
        gameNameWithVariation: Wy,
        lobbyName: Uy
      } = Nh();
      return (0, Sh.postJsonWithMetricsCookiesAndJsonResponse)(`${bb}/code/get-lobby-code`, sh.nk["get-lobby-code"].toBuffer({
        gameNameWithVariation: Wy,
        lobbyName: Uy,
        path: yb
      }), {
        retries: 1
      })
    }
    let vZ = !1;
    const iZ = [],
      Mf = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      Yf = (0, hy.memo)((function(yb) {
        var bb, Wy;
        let {
          show: Uy,
          onOpen: fy,
          onClose: cb,
          isLobbyCode: Ky
        } = yb;
        const ey = (0, hy.useRef)(""),
          [Sy, ly] = (0, hy.useState)(null),
          mb = (0, hy.useRef)(Ky),
          [Cy, Ty] = (0, hy.useState)({
            message: null,
            type: null
          }),
          [Vy, Jy] = (0, hy.useState)(""),
          gb = Cy.message ? Cy : {
            message: Vy,
            type: "warning"
          },
          [ib, My] = (0, hy.useState)(!0),
          [Yy, ny] = lf(Sf),
          [uy, rb] = lf(Ef),
          [Hy, ab] = (0, hy.useState)(!1),
          [Fy, Qy] = (0, hy.useState)(!1),
          jb = (0, hy.useRef)(null),
          Dy = (0, hy.useRef)(!1);
        (0, hy.useEffect)((() => {
          var yb;
          Fy && Dy.current && (Dy.current = !1, null === (yb = jb.current) || void 0 === yb || yb.focus())
        }), [Fy]);
        const tb = (0, qZ.c)(),
          wy = (0, hy.useRef)(null),
          Ny = (0, hy.useRef)(null),
          {
            openInGameMenuName: Iy,
            openEverythingMenuName: xb
          } = (0, py.h)(["openInGameMenuName", "openEverythingMenuName"]),
          Ay = yb => {
            Uy && (wy.current = yb, Ob.current = !0)
          };
        (0, Gy.i)("OpenReportMenu", (() => {
          Ay("KU")
        })), (0, Gy.i)("OpenStoreFromCodeEditor", (() => {
          Ay("store")
        })), (0, hy.useEffect)((() => {
          const yb = wy.current;
          null === yb || "KU" === yb && ("makeReport" === Iy || "makeDiscordReport" === Iy) || "store" === yb && null !== xb || (wy.current = null, null === Iy && null === xb ? Ky ? (Ny.current = bU.current, sy.g.EZ("EditLobbyCode", Sy)) : sy.g.EZ("EditCodeBlock", {
            pos: Sy,
            canChangePos: mb.current
          }) : (0, ff.C)())
        }), [Iy, xb, Ky, Sy]), (0, hy.useEffect)((() => {
          if (Uy) return () => {
            Ny.current = null
          }
        }), [Uy]);
        const [dy, yW] = function() {
          const [yb, bb] = (0, hy.useState)(vZ);
          return (0, Gy.i)("CodeEditorAiHelperShown", (yb => {
            bb(yb)
          })), [yb, (0, hy.useCallback)((yb => {
            vZ = yb, sy.g.EZ("CodeEditorAiHelperShown", yb)
          }), [])]
        }(), [bW, Wb] = (0, hy.useState)(null), [Ub, hb] = (0, hy.useState)([]), [fb, Zb] = (0, hy.useState)(0), [cW, Pb] = (0, hy.useState)(0), [ob, Bb] = (0, hy.useState)(""), Kb = (0, hy.useRef)(null), [eb, sb] = (0, hy.useState)(Ky ? Tf.f : null), Sb = Ky || null !== Sy, Eb = (0, Py.k)("canEditCode"), lb = (0, Py.k)("canUseDevCreativeItems"), mW = (0, hf.h)("welcome"), Cb = (0, hf.h)("docsOverview"), Tb = Cb ? "docsOverview" : "welcome", Vb = null !== Cb && void 0 !== Cb ? Cb : mW, Jb = (0, hf.h)("aiHelperOverview"), gW = Jb ? "aiHelperOverview" : "welcome", Gb = null !== Jb && void 0 !== Jb ? Jb : mW, Ob = (0, hy.useRef)(!1), Rb = (0, hy.useRef)(!1), vW = (0, hy.useRef)(null), [iW, Mb] = (0, hy.useState)(""), [Xb, nb] = (0, hy.useState)(!1), [ub, rW] = (0, hy.useState)(null), Hb = (0, Ry.j)("connectedGame"), aW = Ky && Eb && "classic" === Hb.gameNameWithVariation && !(0, Yb.P)(Hb.lobbyName), [Fb, pb] = (0, hy.useState)(null), [Lb, Qb] = (0, hy.useState)({
          [Eh.h]: ""
        }), [jW, Db] = (0, hy.useState)({
          assets: {},
          revision: 0
        }), tW = (0, hy.useRef)(jW), wb = (0, hy.useCallback)((yb => {
          var bb;
          yb.revision < tW.current.revision || (tW.current = yb, Db(yb), Jy(yb.startupError ? `Schematics could not load: ${yb.startupError}` : ""), null === (bb = SW.current) || void 0 === bb || bb.onLobbyFilesChanged({
            ...PW.current,
            ...(0, vf.h)(yb.assets)
          }))
        }), []), [kW, Nb] = (0, hy.useState)(Eh.h), [zW, Ib] = (0, hy.useState)(null), [xW, Ab] = (0, hy.useState)(null), db = (0, hy.useRef)(!1), yU = (0, hy.useRef)(null), bU = (0, hy.useRef)(kW);
        bU.current = kW;
        const WW = (0, hy.useRef)(zW);
        WW.current = zW;
        const UW = zW ? null : ub,
          fW = UW && !UW.engineLocked ? UW.worldCodeEngine : null,
          ZW = (0, hy.useRef)(xW);
        ZW.current = xW;
        const PW = (0, hy.useRef)(Lb);
        PW.current = Lb;
        const oW = (0, hy.useRef)(null),
          BW = (0, hy.useRef)(null),
          [KW, eW] = (0, hy.useState)(!1),
          qU = (0, ph.p)(),
          sW = (0, hy.useRef)([]),
          SW = (0, hy.useRef)(null),
          EW = (0, hy.useRef)(null),
          lW = (0, hy.useRef)(null);

        function mU(yb) {
          Ty(yb), clearTimeout(vW.current), vW.current = setTimeout((() => {
            Ty({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const CW = (0, hy.useCallback)((function() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            db.current && yU.current && (oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.Leave,
              EM: (0, lh.A)(yU.current),
              zD: !!yb || null
            }), db.current = !1, yU.current = null), pb(null)
          }), []),
          TW = (0, hy.useCallback)((yb => {
            const bb = {
              kind: "lobby",
              path: yb
            };
            yU.current = bb, Nb(yb), ey.current = "", oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.Join,
              EM: (0, lh.A)(bb)
            }), db.current = !0
          }), []),
          VW = (0, hy.useCallback)((yb => {
            var bb;
            const Wy = null === (bb = EW.current) || void 0 === bb ? void 0 : bb.collabState;
            return Wy && "lobby" === Wy.docKey.kind && Wy.docKey.path === yb && bU.current === yb ? Promise.resolve({
              doc: Wy.doc,
              version: Wy.version,
              clientID: Wy.clientID,
              docKey: Wy.docKey,
              httpConfig: Wy.httpConfig
            }) : new Promise(((bb, Wy) => {
              const Uy = setTimeout((() => {
                  sW.current = sW.current.filter((yb => yb !== hy)), Wy(new Error(`Timed out joining ${yb}`))
                }), 15e3),
                hy = Wy => {
                  "lobby" === Wy.docKey.kind && Wy.docKey.path === yb && (clearTimeout(Uy), sW.current = sW.current.filter((yb => yb !== hy)), bb(Wy))
                };
              sW.current.push(hy), bU.current !== yb ? (CW(!0), TW(yb)) : db.current || TW(yb)
            }))
          }), [TW, CW]),
          JW = (0, hy.useCallback)((async function(yb, bb) {
            let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Uy = Date.now();
            let hy = yb in PW.current;
            for (; hy !== bb;) {
              if (Date.now() - Uy > Wy) throw new Error(`Timed out waiting for lobby path ${yb} present=${bb}`);
              await (0, ih.H)(50), hy = yb in PW.current
            }
          }), []),
          gU = (0, hy.useCallback)((yb => {
            const bb = PW.current,
              Wy = Eh.h in bb && Eh.k in bb;
            if (!(0, mf.g)(yb) || Wy) {
              if (bU.current === yb) {
                var Uy;
                const hy = Wy && (0, mf.g)(yb) ? yb === Eh.h ? Eh.k : Eh.h : null !== (Uy = (0, mf.b)(bb)) && void 0 !== Uy ? Uy : Eh.h;
                BW.current = {
                  fromPath: yb,
                  toPath: hy
                }, Nb(hy)
              }
              oy.gameBridge.send("sendCodeCollab", {
                qY: lh.e.DeleteFile,
                EM: (0, lh.A)({
                  kind: "lobby",
                  path: bU.current
                }),
                fD: yb
              })
            }
          }), []),
          GW = (0, hy.useCallback)((yb => {
            Ny.current = null, Ib(null), Ab(null), !Ky || yb === bU.current && db.current || (CW(!0), TW(yb))
          }), [Ky, CW, TW]),
          OW = (0, hy.useCallback)(((yb, bb) => {
            const Wy = Oh.g[yb],
              Uy = Wy && bb in Wy.files ? bb : "index.ts";
            if (yb !== WW.current || Uy !== ZW.current) {
              var hy;
              if (yb !== WW.current) null === (hy = SW.current) || void 0 === hy || hy.stopContinuousSync(), CW(!0);
              Ib(yb), Ab(Uy)
            }
          }), [CW]),
          RW = (0, hy.useCallback)((yb => {
            var bb;
            const Wy = bU.current,
              Uy = PW.current[Wy],
              hy = db.current && !WW.current && Wy in yb && void 0 !== Uy ? {
                ...yb,
                [Wy]: Uy
              } : yb;
            Qb(hy);
            const fy = oW.current;
            if (fy && fy in yb) oW.current = null, fy !== bU.current && GW(fy);
            else if (!(bU.current in yb) && db.current && !WW.current) {
              var Zy;
              GW(null !== (Zy = (0, mf.b)(yb)) && void 0 !== Zy ? Zy : Eh.h)
            }
            null === (bb = SW.current) || void 0 === bb || bb.onLobbyFilesChanged({
              ...hy,
              ...(0, vf.h)(tW.current.assets)
            })
          }), [GW]),
          vU = (0, hy.useCallback)((() => Rf(bU.current).then((async yb => {
            if (!db.current || !yb.files) return null;
            RW(yb.files);
            const bb = await zf({
              action: "state"
            });
            return wb(bb), {
              ...yb.files,
              ...(0, vf.h)(bb.assets)
            }
          })).catch((yb => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", yb), mU({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [RW, wb]),
          iU = () => {
            cb()
          };
        (0, hy.useEffect)((() => {
          if (Jy(""), !Uy || !Ky) return;
          let yb = !1;
          return tW.current = {
            assets: {},
            revision: 0
          }, Db(tW.current), zf({
            action: "state"
          }).then((bb => {
            yb || wb(bb)
          })).catch((bb => {
            console.error("Could not load project schematics", bb), yb || Jy("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            yb = !0
          }
        }), [Uy, Ky, wb]);
        const MW = (0, hy.useCallback)((() => {
            yU.current && oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.Submit,
              EM: (0, lh.A)(yU.current)
            })
          }), []),
          YW = (0, hy.useCallback)((() => {
            if (!yU.current || "lobby" !== yU.current.kind) return;
            const yb = iW.trim();
            (0, Ch.w)(yb) ? (oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.ReloadAsVariation,
              EM: (0, lh.A)(yU.current),
              XM: yb
            }), nb(!1)) : mU({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [iW]),
          XW = (0, hy.useCallback)((yb => {
            oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.SetEngine,
              EM: (0, lh.A)({
                kind: "lobby",
                path: bU.current
              }),
              XM: yb
            })
          }), []),
          nW = (0, hy.useCallback)((yb => {
            if (!WW.current && Eb && (mb.current || Ky)) {
              if (Ky) {
                var bb;
                const Wy = (0, mf.m)(PW.current, bU.current),
                  Uy = Math.min(hW.B, Math.max(0, hW.F - Wy)),
                  hy = yb.slice(0, Uy);
                return ey.current = hy, Qb((yb => ({
                  ...yb,
                  [bU.current]: hy
                }))), void(null === (bb = SW.current) || void 0 === bb || bb.onDocTextChanged(bU.current, hy))
              }
              ey.current = yb, Bb(yb)
            }
          }), [Eb, Ky]);
        (0, Gy.i)("EditLobbyCode", (yb => {
          var bb;
          Xy.featureFlags.canSeePlayerWrittenText && Ky && (CW(), ly(yb), ey.current = "", Qb({
            [Eh.h]: ""
          }), rW(null), Nb(Eh.h), Ib(null), Ab(null), oW.current = null, BW.current = null, null === (bb = SW.current) || void 0 === bb || bb.stopContinuousSync(), fy(), TW(Eh.h))
        })), (0, Gy.i)("EditCodeBlock", (yb => {
          let {
            pos: bb,
            canChangePos: Wy
          } = yb;
          if (Xy.featureFlags.canSeePlayerWrittenText && !Ky)
            if (CW(), null !== bb && (bb = [...bb]), ly(bb), mb.current = Wy, null !== bb) {
              ey.current = "", Bb(""), fy();
              const yb = {
                  kind: "codeBlock",
                  pos: bb
                },
                Uy = (0, lh.A)(yb);
              Kb.current !== Uy && (Kb.current = Uy, hb([]), Pb(fb)), sb((0, Tf.b)(Uy, [bb[0], bb[1], bb[2]], !!Wy)), yU.current = yb, oy.gameBridge.send("sendCodeCollab", {
                qY: lh.e.Join,
                EM: (0, lh.A)(yb)
              }), db.current = !0
            } else Uy && cb()
        })), (0, Gy.i)("codeCollabRejoin", (yb => {
          const bb = yU.current ? (0, lh.A)(yU.current) : null;
          bb && yb.docKey === bb && (ey.current = yb.doc, Ky || Bb(yb.doc), pb((bb => bb ? {
            ...bb,
            doc: yb.doc,
            version: yb.version,
            clientID: (0, Gh.e)()
          } : bb)))
        })), (0, Gy.i)("codeCollab", (yb => {
          var bb;
          const Wy = yU.current ? (0, lh.A)(yU.current) : null;
          if (yb.type === lh.h.LobbyFilesChanged && Ky) {
            if ("string" !== typeof yb.files) return void vU();
            try {
              RW(JSON.parse(yb.files))
            } catch (oy) {
              console.error("[CodeCollab] Failed to parse lobby files", oy), vU()
            }
            return
          }
          if (yb.type === lh.h.EngineSettings && Ky) return void rW(dh(yb.engineSettings));
          const hy = yb.type === lh.h.Joined ? (0, lh.o)(yb.docKey) : null,
            fy = Ky && "lobby" === (null === (bb = yU.current) || void 0 === bb ? void 0 : bb.kind) && (0, mf.g)(yU.current.path) && "lobby" === (null === hy || void 0 === hy ? void 0 : hy.kind) && (0, mf.g)(hy.path);
          if (!Wy || yb.docKey === Wy || fy)
            if (yb.type !== lh.h.ForceClose) {
              if (Uy)
                if (yb.type === lh.h.Joined) {
                  var Zy;
                  const By = JSON.parse(yb.peers),
                    qb = yb.existingCursors ? JSON.parse(yb.existingCursors) : [],
                    sy = (0, Gh.e)(),
                    Ey = Nh(),
                    {
                      gsUrl: ly,
                      gameNameWithVariation: mb,
                      lobbyName: Cy
                    } = Ey,
                    Vy = null !== (Zy = (0, lh.o)(yb.docKey)) && void 0 !== Zy ? Zy : yU.current;
                  Vy && (yU.current = Vy, "lobby" === Vy.kind && (Nb(Vy.path), bU.current = Vy.path));
                  const Jy = Vy || (Ky ? {
                    kind: "lobby",
                    path: bU.current
                  } : {
                    kind: "codeBlock",
                    pos: Sy
                  });

                  function gb(bb) {
                    var Wy, Uy;
                    if (!db.current) return;
                    const hy = null !== (Wy = bb.code) && void 0 !== Wy ? Wy : "",
                      fy = null !== (Uy = bb.collabVersion) && void 0 !== Uy ? Uy : 0;
                    ey.current = hy, Ky || Bb(hy), Ky && bb.files ? Qb(bb.files) : Ky && Qb((yb => ({
                      ...yb,
                      [bU.current]: hy
                    })));
                    const Zy = {
                      doc: hy,
                      version: fy,
                      clientID: sy,
                      docKey: Jy,
                      peers: By,
                      editorCount: yb.editorCount,
                      existingCursors: qb,
                      httpConfig: Ey
                    };
                    if (pb(Zy), "lobby" === Jy.kind) {
                      var cb;
                      const yb = {
                        doc: hy,
                        version: fy,
                        clientID: sy,
                        docKey: Jy,
                        httpConfig: Ey
                      };
                      for (const bb of [...sW.current]) bb(yb);
                      null === (cb = SW.current) || void 0 === cb || cb.startWhenReady()
                    }
                    bb.canSeeCode ? (clearTimeout(vW.current), Ty({
                      message: null,
                      type: null
                    })) : function(yb) {
                      clearTimeout(vW.current), Ty(yb)
                    }(Mf);
                    const Py = Ny.current;
                    Ny.current = null, Ky && Py && bb.files && Py in bb.files && Py !== bU.current && GW(Py)
                  }
                  Ky ? Rf(bU.current).then(gb).catch((yb => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", yb), CW()
                  })) : (0, Sh.postJsonWithMetricsCookiesAndJsonResponse)(`${ly}/code/get-code-block`, sh.nk["get-code-block"].toBuffer({
                    gameNameWithVariation: mb,
                    lobbyName: Cy,
                    pos: Sy
                  }), {
                    retries: 1
                  }).then(gb).catch((yb => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", yb), CW()
                  }))
                } else if (yb.type === lh.h.Presence) {
                if (!Wy) return;
                const Gy = JSON.parse(yb.peers);
                pb((bb => bb ? {
                  ...bb,
                  peers: Gy,
                  editorCount: yb.editorCount
                } : bb))
              }
            } else {
              var Py;
              if (!Wy) return;
              const Oy = yU.current;
              db.current = !1, yU.current = null, pb(null);
              if (!Ky || "close" === yb.updates) return (0, Cf.g)(), void(Uy && cb());
              if (!Uy) return;
              const Ry = PW.current,
                vb = BW.current;
              BW.current = null;
              const ib = "lobby" === (null === Oy || void 0 === Oy ? void 0 : Oy.kind) && Oy.path === (null === vb || void 0 === vb ? void 0 : vb.fromPath),
                My = vb && (ib || vb.toPath in Ry || (0, mf.g)(vb.toPath)) ? vb.toPath : bU.current in Ry ? bU.current : null !== (Py = (0, mf.b)(Ry)) && void 0 !== Py ? Py : Eh.h;
              TW(My)
            }
        })), (0, Gy.i)("refetchCode", (() => {
          Xy.featureFlags.canSeePlayerWrittenText && Uy && db.current && (Eb || (CW(), Ky ? sy.g.EZ("EditLobbyCode", Sy) : sy.g.EZ("EditCodeBlock", {
            pos: Sy,
            canChangePos: mb.current
          })))
        }));
        const uW = (0, hy.useCallback)((() => {
            Uy && (ab(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Uy]),
          rU = (0, hy.useCallback)((() => {
            ab(!1)
          }), []);
        (0, hy.useEffect)((() => {
          Uy && Eb && ("docsButton" === Vb && Hy ? (0, ff.i)("docsButton") : Vb && ff.j.includes(Vb) && !Hy && (ab(!0), yW(!1)))
        }), [Uy, Eb, Vb, Hy, yW]);
        const HW = (0, hy.useCallback)((() => {
          yW(!1)
        }), [yW]);
        (0, hy.useEffect)((() => {
          Uy && Eb && Sb && ("aiHelperButton" === Gb && dy ? (0, ff.i)("aiHelperButton") : Gb && ff.e.includes(Gb) && !dy && (yW(!0), ab(!1)))
        }), [Uy, Eb, Sb, Gb, dy, yW]), (0, hy.useEffect)((() => {
          if (!Uy || !Eb) return;
          const yb = Ky ? "worldCode" : "codeBlock";
          return (0, ff.D)(yb, !0), () => {
            (0, ff.D)(yb, !1)
          }
        }), [Uy, Eb, Ky]), (0, hy.useEffect)((() => {
          if (Uy) return () => {
            Ob.current ? Ob.current = !1 : (0, ff.C)()
          }
        }), [Uy]), (0, hy.useEffect)((() => {
          (0, ff.G)("exportButton", !!lb)
        }), [lb]);
        const {
          t: aU
        } = (0, zb.D)(), FW = !dy && fb > cW, pW = FW ? qb.C : qb.r, LW = (0, hy.useCallback)(((yb, bb) => {
          sy.g.EZ("CodeEditorGoToLine", {
            path: yb,
            line: bb
          }), GW(yb)
        }), [GW]), QW = (0, hy.useCallback)((yb => {
          lW.current = yb
        }), []), jU = function(yb, bb) {
          const [Wy, Uy] = (0, hy.useState)(null);
          return (0, hy.useEffect)((() => {
            if (!bb) return void Uy(null);
            let Wy = !1;
            return Fh(yb).then((yb => {
              Wy || Uy(yb)
            }), (yb => {
              console.error("[CodeEditor] could not collect the imported plugins", yb), Wy || Uy(null)
            })), () => {
              Wy = !0
            }
          }), [yb, bb]), Wy
        }(Lb, Uy);
        (0, hy.useEffect)((() => {
          jU && zW && !jU.includes(zW) && (Ib(null), Ab(null), Ky && !db.current && TW(bU.current))
        }), [zW, jU, Ky, TW]), EW.current = {
          collabState: Fb,
          ensureJoinedPath: VW,
          waitForLobbyPath: JW,
          pullLobbyFiles: vU,
          t: aU,
          canEditCode: !!Eb
        }, SW.current || (SW.current = new wh({
          getLobbyFiles: () => ({
            ...PW.current,
            ...(0, vf.h)(tW.current.assets)
          }),
          deleteSchematic: async yb => {
            const bb = await zf({
              action: "remove",
              path: yb,
              expectedRevision: tW.current.revision
            });
            wb(bb)
          },
          getActivePath: () => bU.current,
          getCollabSnapshot: () => {
            var yb;
            if (WW.current) return null;
            const bb = null === (yb = EW.current) || void 0 === yb ? void 0 : yb.collabState;
            return bb ? {
              doc: bb.doc,
              version: bb.version,
              clientID: bb.clientID,
              docKey: bb.docKey,
              httpConfig: bb.httpConfig
            } : null
          },
          replaceActiveDoc: (yb, bb) => {
            var Wy, Uy;
            return null !== (Wy = null === (Uy = lW.current) || void 0 === Uy ? void 0 : Uy.call(lW, yb, bb)) && void 0 !== Wy && Wy
          },
          ensureJoined: yb => EW.current.ensureJoinedPath(yb),
          createFile: (yb, bb) => {
            !1 !== (null === bb || void 0 === bb ? void 0 : bb.focus) && (oW.current = yb), oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.CreateFile,
              EM: (0, lh.A)({
                kind: "lobby",
                path: bU.current
              }),
              fD: yb
            })
          },
          renameFile: (yb, bb) => {
            const Wy = (0, lh.A)({
              kind: "lobby",
              path: bU.current
            });
            bU.current === yb && (BW.current = {
              fromPath: yb,
              toPath: bb
            }, Nb(bb)), oy.gameBridge.send("sendCodeCollab", {
              qY: lh.e.RenameFile,
              EM: Wy,
              fD: yb,
              ZD: bb
            })
          },
          deleteFile: yb => {
            gU(yb)
          },
          waitForLobbyPath: (yb, bb, Wy) => EW.current.waitForLobbyPath(yb, bb, Wy),
          pullLobbyFiles: () => EW.current.pullLobbyFiles(),
          setMessage: (yb, bb) => {
            mU({
              message: yb,
              type: bb
            })
          },
          onUnlinked: () => {
            eW(!1)
          },
          t: yb => EW.current.t(yb),
          canEditCode: () => EW.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: yb,
              lobbyName: bb
            } = oy.gameBridge.latest("connectedGame");
            return (0, ph.i)(yb, bb)
          }
        }));
        const DW = (0, hy.useCallback)((async yb => {
            const bb = SW.current;
            if (!bb) return !1;
            try {
              return await bb.writeLobbyFiles(yb)
            } catch (Wy) {
              return console.error("World Code AI: couldn't write the change", Wy), !1
            }
          }), []),
          tU = (0, hy.useCallback)((async yb => {
            var bb, Wy;
            const Uy = null === (bb = yb.find((yb => yb.path === mZ.c))) || void 0 === bb ? void 0 : bb.text,
              hy = yU.current;
            return void 0 !== Uy && "codeBlock" === (null === hy || void 0 === hy ? void 0 : hy.kind) && (!(null === (Wy = lW.current) || void 0 === Wy || !Wy.call(lW, (0, lh.A)(hy), Uy)) && (ey.current = Uy, Bb(Uy), !0))
          }), []),
          wW = (0, hy.useCallback)((async () => {
            try {
              var yb, bb;
              const Wy = await Rf(Eh.h);
              return !1 === Wy.canSeeCode ? null : null !== (yb = Wy.files) && void 0 !== yb ? yb : {
                [Eh.h]: null !== (bb = Wy.code) && void 0 !== bb ? bb : ""
              }
            } catch (Wy) {
              return console.error("World Code AI: couldn't read World Code for a code block", Wy), null
            }
          }), []),
          kU = (0, hy.useMemo)((() => ({
            [mZ.c]: ob
          })), [ob]),
          NW = (0, hy.useCallback)(((yb, bb) => {
            sy.g.EZ("CodeEditorGoToLine", {
              path: mZ.c,
              line: bb
            })
          }), []);
        (0, hy.useEffect)((() => {
          dy && Uy && Pb(fb)
        }), [dy, Uy, fb]);
        const zU = (0, hy.useCallback)((() => {
            var yb, bb;
            MW();
            const Wy = (0, Xy.isTouchscreen)() ? "open World Code again" : `press ${null!==(yb=null===(bb=cU.w.OpenCodeEditor)||void 0===bb?void 0:bb[0])&&void 0!==yb?yb:"F8"}`,
              Uy = Ky ? `\ud83e\udd16 Try out your change, then ${Wy} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            sy.g.EZ("chat", {
              content: [{
                str: Uy,
                style: {
                  color: Oy.K.cyanUiText
                }
              }]
            })
          }), [MW, Ky]),
          IW = (0, hy.useCallback)((yb => {
            const bb = Sy,
              Wy = mb.current;
            Ky || !bb || oy.gameBridge.lookup("codeBlockClickable", bb) ? (0, Cf.k)(yb, {
              submit: () => {
                MW(), sy.g.EZ("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: Oy.K.cyanUiText
                    }
                  }]
                }), !Ky && bb && setTimeout((() => {
                  oy.gameBridge.send("clickCodeBlock", bb)
                }), 1e3)
              },
              reopen: () => {
                (0, Ly.n)() || (Ky ? sy.g.EZ("EditLobbyCode", bb) : sy.g.EZ("EditCodeBlock", {
                  pos: bb,
                  canChangePos: Wy
                }))
              }
            }) : zU()
          }), [MW, Ky, Sy, zU]),
          xU = (0, hy.useCallback)((() => {
            yW(!1)
          }), [yW]),
          AW = (0, hy.useRef)(iU);
        AW.current = iU;
        const dW = (0, hy.useCallback)((function(yb) {
            let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            sy.g.EZ("WorldCodeAiDraft", {
              text: yb,
              send: bb
            }), AW.current(), sy.g.EZ("EditLobbyCode", Sy)
          }), [Sy]),
          yh = (0, hy.useCallback)((yb => {
            AW.current(), yb.codeBlock ? sy.g.EZ("EditCodeBlock", {
              pos: [...yb.pos],
              canChangePos: yb.canChangePos
            }) : sy.g.EZ("EditLobbyCode", Sy)
          }), [Sy]);
        (0, Gy.i)("WorldCodeAiDraft", (yb => {
          Ky && (Wb(yb), yW(!0))
        }));
        const bh = !!Eb && !!Vb && ff.j.includes(Vb);
        (0, hy.useEffect)((() => {
          Uy && dy && Sb && !bh && ab(!1)
        }), [Uy, dy, Sb, bh]);
        const WU = (0, hy.useCallback)((() => {
            Wb(null)
          }), []),
          [UU, hU] = (0, hy.useState)(null);
        (0, Gy.i)("WorldCodeAiSelection", (yb => {
          Uy && (hU(yb), yW(!0), ab(!1))
        }));
        const fU = (0, hy.useCallback)((() => {
          hU(null)
        }), []);
        (0, Gy.i)("chat", (yb => {
          let {
            content: bb
          } = yb;
          if (!Ky && null === Kb.current) return;
          const Wy = Array.isArray(bb) ? bb : [bb],
            Uy = Wy.some((yb => {
              var bb;
              return (null === yb || void 0 === yb || null === (bb = yb.style) || void 0 === bb ? void 0 : bb.color) === Oy.K.redUiText
            })),
            hy = Wy.map((yb => {
              var bb;
              const Wy = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.str) && void 0 !== bb ? bb : yb;
              return "string" === typeof Wy ? Wy : ""
            })).join("");
          Uy && /world code|error/i.test(hy) && (hb((yb => [...yb, hy].slice(-10))), Zb((yb => yb + 1)), (0, Cf.f)(hy))
        })), (0, hy.useEffect)((() => {
          if (!Uy || !Ky || !qU) return;
          let yb = !1;
          return (async (bb, Wy) => {
            const Uy = await (null === (bb = SW.current) || void 0 === bb ? void 0 : bb.tryRestoreHandle());
            !yb && Uy && (eW(!0), null === (Wy = SW.current) || void 0 === Wy || Wy.startWhenReady())
          })(), () => {
            yb = !0
          }
        }), [Uy, Ky, qU]), (0, hy.useEffect)((() => {
          var yb;
          Uy || (null === (yb = SW.current) || void 0 === yb || yb.stopContinuousSync(), CW(!1), Rb.current && (Rb.current = !1, oy.gameBridge.send("sendChatMessage", {
            vc: "//export",
            channelName: null
          })))
        }), [Uy, CW]);
        const ZU = (0, hy.useCallback)((async () => {
            if (qU && SW.current) try {
              if (!await SW.current.linkFolder()) return;
              eW(!0), await SW.current.startWhenReady()
            } catch (yb) {
              console.error("[WorldCodeDirectorySync] Link failed", yb), mU({
                message: aU("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [qU, aU]),
          ch = (0, hy.useCallback)((async () => {
            SW.current && await SW.current.unlinkFolder()
          }), []),
          PU = (0, hy.useCallback)((() => {
            qU ? KW ? ch() : ZU() : Vh.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [qU, KW, ZU, ch]);
        return (0, By.jsxs)(Zy.c, {
          className: qW()("CodeEditorBg", {
            CodeEditorLight: Yy
          }),
          close: iU,
          escDoesExit: !0,
          show: Uy,
          togglePointerLock: !1,
          globallyUniqueKey: Ky ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, By.jsx)(hf.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: aU("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!Eb && !Ky
          }), (0, By.jsx)(hf.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, By.jsxs)(By.Fragment, {
              children: [(0, By.jsx)("p", {
                children: aU("codeEditor:tutorialWorldCodeWelcome")
              }), (0, By.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, By.jsx)("li", {
                  children: aU("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, By.jsx)("li", {
                  children: aU("codeEditor:tutorialWorldCodeUseReact")
                }), (0, By.jsx)("li", {
                  children: aU("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!Eb && Ky
          }), (0, By.jsx)("div", {
            className: "CodeEditorTitle",
            children: Ky ? "World Code" : "Code Block"
          }), (0, By.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, By.jsx)("div", {
              className: "CodeEditorTopLeft",
              children: (0, By.jsx)(kb.f, {
                tooltipInner: aU(lb ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: lb ? void 0 : 0,
                hideTooltip: "exportButton" === mW,
                children: (0, By.jsx)(hf.g, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: aU("codeEditor:tutorialExport"),
                  enabled: !!Eb,
                  children: (0, By.jsx)(qb.i, {
                    className: "CodeEditorButton",
                    disabled: !lb,
                    onClick: () => {
                      "exportButton" === mW && ((0, ff.i)("exportButton"), Ob.current = !0), Rb.current = !0, iU()
                    },
                    padDestructive: !0,
                    children: aU("codeEditor:exportWorld")
                  })
                })
              })
            }), (0, By.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [Eb && (0, By.jsx)(kb.f, {
                tooltipInner: aU("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === mW,
                children: (0, By.jsx)(hf.g, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: aU("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, By.jsx)(qb.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: aU("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, ff.i)("helpButton"), Vh.NotificationProvider.showCustomPopup({
                        body: yb => (0, By.jsx)(Zf, {
                          close: yb
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, By.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, By.jsx)(Ey.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, By.jsx)(kb.f, {
                tooltipInner: aU("codeEditor:closeTooltip"),
                children: (0, By.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    iU()
                  },
                  children: (0, By.jsx)(qb.h, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, By.jsx)(gf, {
            peers: null !== (bb = null === Fb || void 0 === Fb ? void 0 : Fb.peers) && void 0 !== bb ? bb : []
          }), (0, By.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [Fy && tb && (0, By.jsx)(ef, {
              side: "left",
              defaultWidth: "max(16rem, 24%)",
              children: (0, By.jsx)(Kf, {
                inputRef: jb,
                close: () => {
                  Qy(!1)
                }
              })
            }), Ky && (0, By.jsx)(Xh, {
              schematics: jW.assets,
              onManageSchematic: yb => {
                Eb && Vh.NotificationProvider.showCustomPopup({
                  body: bb => (0, By.jsx)(Ah, {
                    initialPath: yb,
                    onChanged: wb,
                    onClose: bb
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Lb,
              activePath: kW,
              canEdit: !!Eb,
              directoryLinked: KW,
              pluginNames: null !== jU && void 0 !== jU ? jU : iZ,
              activePluginName: zW,
              activePluginFile: xW,
              onSelect: GW,
              onSelectPlugin: OW,
              onToggleDirectorySync: PU,
              onCreate: yb => {
                oW.current = yb, oy.gameBridge.send("sendCodeCollab", {
                  qY: lh.e.CreateFile,
                  EM: (0, lh.A)({
                    kind: "lobby",
                    path: bU.current
                  }),
                  fD: yb
                })
              },
              onRename: (yb, bb) => {
                bU.current === yb && (BW.current = {
                  fromPath: yb,
                  toPath: bb
                }, Nb(bb)), oy.gameBridge.send("sendCodeCollab", {
                  qY: lh.e.RenameFile,
                  EM: (0, lh.A)({
                    kind: "lobby",
                    path: bU.current
                  }),
                  fD: yb,
                  ZD: bb
                })
              },
              onRenameFolder: (yb, bb) => {
                const [Wy] = (0, mf.j)([bU.current], yb, bb);
                Wy && (BW.current = {
                  fromPath: Wy[0],
                  toPath: Wy[1]
                }, Nb(Wy[1])), oy.gameBridge.send("sendCodeCollab", {
                  qY: lh.e.RenameFolder,
                  EM: (0, lh.A)({
                    kind: "lobby",
                    path: bU.current
                  }),
                  fD: yb,
                  ZD: bb
                })
              },
              onDelete: gU
            }), (0, By.jsx)("div", {
              className: qW()("CodeEditorMessage", {
                CodeEditorMessageHidden: !gb.message,
                CodeEditorMessageSuccess: "success" === gb.type
              }),
              children: gb.message && (0, By.jsx)("div", {
                className: "CodeEditorMessageText",
                children: gb.message
              })
            }), (0, By.jsx)(hy.Suspense, {
              fallback: (0, By.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, By.jsx)(vb.e, {})
              }),
              children: (0, By.jsx)(Vf, {
                isLobbyCode: Ky,
                code: Fb ? Fb.doc : ey.current,
                files: Ky ? Lb : void 0,
                activePath: Ky ? kW : void 0,
                pluginName: zW,
                pluginFile: xW,
                pluginSource: zW && xW ? null === (Wy = Oh.g[zW]) || void 0 === Wy ? void 0 : Wy.files[xW] : void 0,
                onChange: nW,
                canEditCode: Eb,
                setTemporaryMessage: mU,
                close: iU,
                showTooltips: ib,
                lightMode: Yy,
                collabState: Fb,
                setActiveDocReplacer: QW,
                showAiHints: Sb && uy,
                canAiChangeCode: !!Eb && (Ky || !!mb.current),
                onRemoteDocChange: yb => {
                  var bb;
                  (ey.current = yb, Ky) ? (Qb((bb => ({
                    ...bb,
                    [bU.current]: yb
                  }))), null === (bb = SW.current) || void 0 === bb || bb.onDocTextChanged(bU.current, yb)) : Bb(yb)
                }
              })
            }), Hy && (0, By.jsx)(ef, {
              side: "right",
              defaultWidth: "40%",
              children: (0, By.jsx)(hy.Suspense, {
                fallback: (0, By.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, By.jsx)(vb.e, {})
                }),
                children: (0, By.jsx)(Jf, {
                  popOutDocs: uW,
                  hideDocs: rU,
                  tutorialEnabled: !!Eb
                })
              })
            }), dy && eb && Sb && (0, By.jsx)(ef, {
              side: "right",
              defaultWidth: "max(18rem, 36%)",
              children: (0, By.jsx)(hy.Suspense, {
                fallback: (0, By.jsx)("div", {
                  className: "CodeEditorPanelLoading",
                  children: (0, By.jsx)(vb.e, {})
                }),
                children: (0, By.jsx)(gZ, {
                  target: eb,
                  chatKey: `${Hb.gameNameWithVariation}/${Hb.lobbyName}/aiHelper`,
                  historyKey: `${Hb.gameNameWithVariation}/${Hb.lobbyName}/${eb.key}`,
                  files: eb.codeBlock ? kU : Lb,
                  activePath: eb.codeBlock ? mZ.c : kW,
                  canEdit: !!Eb && (eb.codeBlock ? !!mb.current : !zW),
                  isLoaded: null !== Fb,
                  errors: Ub,
                  errorCount: fb,
                  applyFiles: eb.codeBlock ? tU : DW,
                  submit: zU,
                  testRun: IW,
                  close: xU,
                  goToLine: eb.codeBlock ? NW : LW,
                  openWorldCode: eb.codeBlock ? dW : void 0,
                  readWorldCode: eb.codeBlock ? wW : void 0,
                  viewChunk: Gf,
                  viewGameState: Of,
                  openTarget: Eb ? yh : void 0,
                  draft: bW,
                  onDraftUsed: WU,
                  selection: UU,
                  onSelectionUsed: fU
                }, eb.key)
              })
            })]
          }), (null === UW || void 0 === UW ? void 0 : UW.fallback) && (0, By.jsx)(yZ, {
            fallback: UW.fallback,
            onGoToLine: LW
          }), (0, By.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, By.jsx)(kb.f, {
              tooltipInner: aU(Yy ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, By.jsx)(qb.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: aU(Yy ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  ny(!Yy)
                },
                children: (0, By.jsx)(Ey.e, {
                  name: Yy ? "moon" : "sun-bright"
                })
              })
            }), (0, By.jsx)(kb.f, {
              tooltipInner: aU("codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, By.jsx)(qb.i, {
                className: "CodeEditorButton",
                onClick: MW,
                padDefaultFocus: !0,
                children: aU("codeEditor:submitCode")
              })
            }), (0, By.jsx)(kb.f, {
              tooltipInner: aU(Hy ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Vb || "hideDocsButton" === Vb,
              children: (0, By.jsx)(hf.g, {
                tutorial: Tb,
                step: Hy ? "hideDocsButton" : "docsButton",
                text: aU(Hy ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!Eb,
                placement: "top",
                waitForClick: !0,
                onPrevious: Hy && "welcome" === Tb ? rU : void 0,
                children: (0, By.jsx)(qb.r, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, ff.i)(Hy ? "hideDocsButton" : "docsButton"), ab(!Hy), yW(!1)
                  },
                  children: aU(Hy ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Sb && (0, By.jsx)(hf.g, {
              tutorial: gW,
              step: dy ? "hideAiHelperButton" : "aiHelperButton",
              text: aU(dy ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === gW ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!Eb,
              placement: "top",
              waitForClick: !0,
              onPrevious: dy && "welcome" === gW ? HW : void 0,
              children: (0, By.jsx)(pW, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, ff.i)(dy ? "hideAiHelperButton" : "aiHelperButton"), yW(!dy), ab(!1)
                },
                children: dy ? "Hide AI Helper" : FW ? "Fix error with AI" : "AI Helper"
              })
            }), tb && (0, By.jsx)(kb.f, {
              tooltipInner: aU(Fy ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, By.jsx)(qb.r, {
                className: "CodeEditorButton",
                onClick: () => {
                  Dy.current = !Fy, Qy(!Fy)
                },
                children: aU(Fy ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, By.jsx)(kb.f, {
              tooltipInner: aU("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, By.jsx)(qb.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  sy.g.EZ("FormatCode")
                },
                children: aU("codeEditor:formatCode")
              })
            }), (0, By.jsx)(kb.f, {
              tooltipInner: aU("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, By.jsx)(qb.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(ey.current).then((() => {
                    mU({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    mU({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: aU("codeEditor:copyCode")
              })
            }), (0, By.jsx)(kb.f, {
              tooltipInner: aU(ib ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, By.jsx)(qb.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  My(!ib)
                },
                children: aU(ib ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Ky && (0, By.jsx)(kb.f, {
              tooltipInner: aU("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === mW,
              children: (0, By.jsx)(hf.g, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: aU("codeEditor:tutorialWorldCodeButton"),
                enabled: !!Eb,
                placement: "top",
                waitForClick: !0,
                children: (0, By.jsx)(qb.r, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === mW && ((0, ff.i)("worldCodeButton"), Ob.current = !0), iU(), sy.g.EZ("EditLobbyCode", Sy)
                  },
                  children: aU("codeEditor:worldCode")
                })
              })
            }), (aW || fW || Sb) && (0, By.jsx)(kb.f, {
              tooltipInner: aU("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, By.jsx)(qb.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  nb(!0)
                },
                children: (0, By.jsx)(Ey.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), Xb && (0, By.jsx)(Th.b, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              nb(!1)
            },
            body: (0, By.jsx)(Uf, {
              engine: fW,
              onSetEngine: XW,
              aiHints: Sb ? {
                shown: uy,
                setShown: rb
              } : null,
              variation: aW ? {
                name: iW,
                setName: Mb,
                reload: YW
              } : null
            })
          })]
        })
      })),
      Xf = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function nf(yb) {
      return "inventory" === yb
    }
    const uf = (0, hy.memo)((function() {
      const {
        openEverythingMenuName: yb,
        openInGameMenuName: bb
      } = (0, py.h)(["openEverythingMenuName", "openInGameMenuName"]), Wy = (0, Ry.j)("fullInventory"), fy = (0, hy.useRef)(null), Zy = (0, kW.l)();
      (0, Gy.i)("toggleMenu", (yb => {
        var bb;
        if (!Zy.shown) return;
        const Wy = py.d.get("openInGameMenuName");
        let Uy = yb.split("|")[0];
        const hy = null !== (bb = yb.split("|")[1]) && void 0 !== bb ? bb : null;
        ("closeCurrentMenu" === hy && Wy || Uy === Wy) && (fy.current = null, Uy = null);
        const cb = "closeCurrentMenu" === hy ? null : hy;
        fy.current !== cb && (fy.current = cb), null !== Uy && (0, Uh.h)("InGameMenu", {
          keepsMovement: nf(Uy)
        }), py.d.set({
          openInGameMenuName: Uy
        })
      }));
      const cb = (0, hy.useCallback)((yb => () => {
          sy.g.EZ("toggleMenu", yb)
        }), []),
        Py = (0, hy.useRef)({
          cantCrouchIfNotFullscreen: cb("cantCrouchIfNotFullscreen"),
          makeReport: cb("makeReport"),
          makeDiscordReport: cb("makeDiscordReport"),
          editBook: cb("editBook"),
          editNameTag: cb("editNameTag"),
          inventory: cb("inventory"),
          inviteLink: cb("inviteLink"),
          writeOnBoard: cb("writeOnBoard"),
          codeEditor: cb("codeEditor"),
          lobbyCodeEditor: cb("lobbyCodeEditor"),
          customLobbyBlockEditor: cb("customLobbyBlockEditor"),
          ironChestPasskeyInput: cb("ironChestPasskeyInput"),
          petUi: cb("petUi")
        }),
        oy = (0, hy.useCallback)((() => {
          py.d.set({
            openInGameMenuName: null
          })
        }), []),
        Ky = (0, hy.useRef)(null);
      return (0, hy.useEffect)((() => {
        if (bb) {
          var yb;
          (0, Uh.h)("InGameMenu", {
            keepsMovement: nf(bb)
          }), Ky.current = Xf.has(bb) ? null !== (yb = py.d.get("openEverythingMenuName")) && void 0 !== yb ? yb : Ky.current : null, py.d.set({
            openEverythingMenuName: null
          })
        } else {
          const yb = Ky.current;
          Ky.current = null, null !== yb && null === py.d.get("openEverythingMenuName") && py.d.set({
            openEverythingMenuName: yb
          }), fy.current = null, (0, Uh.g)("InGameMenu")
        }
      }), [bb]), (0, hy.useEffect)((() => {
        null !== yb && oy()
      }), [yb, oy]), (0, By.jsxs)(By.Fragment, {
        children: [(0, By.jsx)(Uy.g, {
          show: "clientGame" === bb
        }), (0, By.jsx)(dU, {
          show: "cantCrouchIfNotFullscreen" === bb,
          onOpen: Py.current.cantCrouchIfNotFullscreen,
          onClose: oy
        }), (0, By.jsx)(bf, {
          show: "makeReport" === bb,
          onOpen: Py.current.makeReport,
          onClose: oy
        }), (0, By.jsx)(Wh, {
          show: "makeDiscordReport" === bb,
          onOpen: Py.current.makeDiscordReport,
          onClose: oy
        }), (0, By.jsx)(sW, {
          show: "editBook" === bb,
          onOpen: Py.current.editBook,
          onClose: oy
        }), (0, By.jsx)(qU, {
          show: "editNameTag" === bb,
          onOpen: Py.current.editNameTag,
          onClose: oy
        }), Wy && (0, By.jsx)(IU, {
          show: "inventory" === bb,
          onOpen: Py.current.inventory,
          onClose: oy,
          variation: fy.current
        }), (0, By.jsx)(Nb, {
          show: "inviteLink" === bb,
          onClose: oy,
          option: fy.current
        }), (0, By.jsx)(rb, {
          show: "retentionFeatures" === bb,
          onClose: oy
        }), (0, By.jsx)(eW, {
          show: "writeOnBoard" === bb,
          onOpen: Py.current.writeOnBoard,
          onClose: oy
        }), (0, By.jsx)(Yf, {
          show: "lobbyCodeEditor" === bb,
          onOpen: Py.current.lobbyCodeEditor,
          onClose: oy,
          isLobbyCode: !0
        }), (0, By.jsx)(Yf, {
          show: "codeEditor" === bb,
          onOpen: Py.current.codeEditor,
          onClose: oy,
          isLobbyCode: !1
        }), (0, By.jsx)(fh, {
          show: "customLobbyBlockEditor" === bb,
          onOpen: Py.current.customLobbyBlockEditor,
          onClose: oy
        }), (0, By.jsx)(nW, {
          show: "ironChestPasskeyInput" === bb,
          onOpen: Py.current.ironChestPasskeyInput,
          onClose: oy
        }), (0, By.jsx)(Kh, {
          togglePointerLock: !0,
          show: "petUi" === bb,
          onOpen: Py.current.petUi,
          onClose: oy
        })]
      })
    }))
  },
  35284: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => jZ
    });
    Wy(35288);
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(3027),
      cb = Wy(1268),
      Py = Wy(1546),
      oy = Wy(952);

    function By() {
      const yb = 2e3,
        [bb, Wy] = (0, Uy.useState)(null),
        [hy, By] = (0, Uy.useState)(null),
        Ky = (0, Uy.useRef)(null);
      (0, cb.i)("showBottomMessage", (bb => {
        let {
          message: Wy,
          timeoutLength: Uy = yb,
          type: hy
        } = bb;
        By({
          message: Wy,
          type: hy
        }), clearTimeout(Ky.current), Ky.current = setTimeout((() => {
          By(null)
        }), Uy)
      })), (0, cb.i)("showPermanentBottomMessage", (yb => {
        Wy(yb)
      })), (0, Uy.useEffect)((() => ((0, Zy.c)((() => {
        Wy(null)
      })), () => {
        clearTimeout(Ky.current)
      })), []);
      const ey = hy || bb;
      return ey ? (0, oy.jsx)("div", {
        className: fy()("BottomScreenMessage", ey.type),
        children: (0, oy.jsx)(Py.d, {
          text: ey.message
        })
      }) : null
    }
    var Ky = Wy(1945),
      ey = Wy(1572),
      qb = Wy(1356),
      sy = Wy(2009);

    function Sy() {
      let yb;
      const bb = () => {
          clearTimeout(yb), yb = setTimeout((() => {
            ey.gameBridge.latest("connectedGame").replay || (ey.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, qb.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        Wy = () => {
          clearTimeout(yb)
        };
      return window.addEventListener("focus", Wy), window.addEventListener("blur", bb), () => {
        window.removeEventListener("blur", bb), window.removeEventListener("focus", Wy), clearTimeout(yb)
      }
    }
    var Ey = Wy(980),
      ly = Wy(974),
      mb = Wy(248),
      Cy = Wy(2005),
      Ty = Wy(23),
      Vy = Wy(1595),
      Jy = Wy(33),
      gb = Wy(1612),
      Gy = Wy(19),
      Oy = Wy(1614),
      Ry = Wy(1239),
      vb = Wy(7960),
      ib = Wy(1645),
      My = Wy(1042);
    const Yy = (0, Uy.memo)((function() {
      const {
        isTouchScreen: yb,
        loadingOverlayVisible: bb,
        openInGameMenuName: Wy,
        openEverythingMenuName: hy
      } = (0, Gy.h)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), Zy = (0, Ry.q)();
      (0, ly.d)();
      const cb = (0, Cy.k)("showBasicMovementControls"),
        [Py, By] = (0, Uy.useState)("movement"),
        Ky = "movement" === Py,
        ey = Zy && !1 !== cb;
      (0, Uy.useEffect)((() => {
        "padActions" !== Py || ey || By("done")
      }), [Py, ey]);
      const qb = bb || null !== Wy || null !== hy,
        sy = (0, Uy.useRef)({
          step: Py,
          ms: 0
        });
      return (0, Uy.useEffect)((() => {
        if (qb || "done" === Py) return;
        sy.current.step !== Py && (sy.current = {
          step: Py,
          ms: 0
        });
        const yb = sy.current,
          bb = performance.now(),
          Wy = setTimeout((() => {
            By("movement" === Py && (0, Ry.f)() ? "padActions" : "done")
          }), 7e3 - yb.ms);
        return () => {
          clearTimeout(Wy), yb.ms += performance.now() - bb
        }
      }), [qb, Py]), Jy.e.getItem(mb.Jb) > 2 ? (0, oy.jsx)(rb, {
        showingMovementControls: !1
      }) : (0, oy.jsxs)(oy.Fragment, {
        children: [yb && !Zy || !Ky || !1 === cb ? null : (0, oy.jsxs)("div", {
          className: fy()("ControlsTutorialDiv", {
            Covered: qb
          }),
          children: [(0, oy.jsx)(Xy, {}), (0, oy.jsx)(uy, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, oy.jsx)(uy, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === Py && ey && (0, oy.jsx)(ny, {
          covered: qb
        }), (0, oy.jsx)(rb, {
          showingMovementControls: "done" !== Py
        })]
      })
    }));

    function Xy() {
      const yb = (0, Ry.q)();
      return (0, oy.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, oy.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), yb && (0, oy.jsx)(Oy.e, {
          noaAction: "forward"
        }), !yb && (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, oy.jsx)(Oy.e, {
              noaAction: "forward"
            })
          }), (0, oy.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, oy.jsx)(Oy.e, {
              noaAction: "left"
            }), (0, oy.jsx)(Oy.e, {
              noaAction: "backward"
            }), (0, oy.jsx)(Oy.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function ny(yb) {
      let {
        covered: bb
      } = yb;
      const {
        t: Wy
      } = (0, My.D)(), Uy = (0, Cy.k)("useInventory");
      return (0, oy.jsxs)("div", {
        className: fy()("ControlsTutorialDiv", {
          Covered: bb
        }),
        children: [(0, oy.jsx)(uy, {
          header: Wy("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, oy.jsx)(uy, {
          header: Wy("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Uy && (0, oy.jsx)(uy, {
          header: Wy("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, oy.jsx)(uy, {
          header: Wy("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function uy(yb) {
      let {
        header: bb,
        noaAction: Wy
      } = yb;
      return (0, oy.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, oy.jsx)("div", {
          className: "KeyHeader",
          children: bb
        }), (0, oy.jsx)(Oy.e, {
          noaAction: Wy
        })]
      })
    }

    function rb(yb) {
      let {
        showingMovementControls: bb
      } = yb;
      const {
        isTouchScreen: Wy
      } = (0, Gy.h)(["isTouchScreen"]), hy = (0, Ry.q)(), fy = (0, ib.d)("OpenShop"), [Zy, cb] = (0, Uy.useState)(!1), Py = `SeenShopControls|${(0,gb.i)("connectedGame",(yb=>yb.gameNameWithVariation))}`, By = () => (!(0, Ry.f)() || null !== (0, vb.e)("OpenShop")) && !Jy.e.getItem(Py) && Vy.c.get("shopInfo") && !bb, Ky = () => (cb(!0), Jy.e.setItem(Py, !0), (0, Ry.f)() || Ty.g.EZ("showShopTouchTutorial"), setTimeout((() => {
        cb(!1)
      }), 7e3));
      (0, Uy.useEffect)((() => {
        let yb;
        const bb = Ty.g.subscribe("showShopTutorial", (() => {
          By() && (yb = Ky())
        }));
        return () => {
          clearTimeout(yb), Ty.g.unsubscribe(bb)
        }
      }), [bb]);
      const ey = (0, Uy.useRef)();
      return (0, Cy.g)("currencyAmounts", (yb => {
        if (By()) {
          let Wy = !1;
          const Uy = Vy.c.get("shopInfo");
          for (const hy in Uy) {
            for (const fy in Uy[hy].items) {
              var bb;
              const Zy = Uy[hy].items[fy];
              if (void 0 !== Zy.currency && yb[Zy.currency] && Zy.cost <= yb[Zy.currency].amount && (null === (bb = Zy.hidden) || void 0 === bb || !bb)) {
                Wy = !0;
                break
              }
            }
            if (Wy) break
          }
          Wy && (ey.current = Ky())
        }
      })), (0, Uy.useEffect)((() => () => {
        clearTimeout(ey.current)
      }), [bb]), !Zy || hy && !fy ? null : (0, oy.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: Wy && !hy ? null : (0, oy.jsx)(uy, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Hy = Wy(1217),
      ab = Wy(910);
    const Fy = (0, Uy.memo)((function() {
      return (0, ly.d)(), (0, oy.jsx)(py, {})
    }));
    class py extends Uy.Component {
      constructor(yb) {
        super(yb), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = Ty.g.subscribe("TopRightHelper", (yb => {
          this.showQueue.push(yb), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        Ty.g.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(yb, bb) {
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
        let yb, bb, Wy, Uy, hy, fy = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, yb = "slideIn") : "slideOut" === this.state.currState ? yb = "slideOut" : null === this.currMessage && (fy = !1), this.currMessage) {
          const fy = this.currMessage.color || "rgb(102, 102, 102)";
          bb = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === yb ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, Wy = {
            backgroundColor: fy
          }, Uy = {
            animation: "2s " + ("slideOut" === yb ? "CloseNotification" : "ExpandNotification")
          }, hy = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === yb ? "textDisappear" : "textAppear")
          }
        }
        return fy ? (0, oy.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...bb
          },
          children: [(0, oy.jsx)("div", {
            className: "LeftSide",
            style: Wy,
            children: (0, oy.jsx)(ab.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, oy.jsx)("div", {
            className: "RightSide",
            style: Uy,
            children: (0, oy.jsx)("div", {
              className: "HelperText",
              style: hy,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Ly = Wy(35296),
      Qy = Wy(1245);
    const jb = (0, Qy.i)((yb => yb.PadSneakChip));

    function Dy(yb) {
      const [bb, Wy, Uy] = function(yb) {
        const bb = parseInt(yb.substring(1), 16),
          Wy = (bb >> 16) / 255,
          Uy = (bb >> 8 & 255) / 255,
          hy = (255 & bb) / 255,
          fy = Math.max(Wy, Uy, hy),
          Zy = Math.min(Wy, Uy, hy),
          cb = (fy + Zy) / 2,
          Py = fy - Zy;
        if (0 === Py) return [0, 0, cb];
        const oy = Py / (1 - Math.abs(2 * cb - 1));
        let By;
        By = fy === Wy ? (Uy - hy) / Py % 6 : fy === Uy ? (hy - Wy) / Py + 2 : (Wy - Uy) / Py + 4;
        return [(60 * By + 360) % 360, oy, cb]
      }(yb), hy = 0 === Wy ? 0 : Math.min(.6, Wy + .03), fy = Uy > .5 ? -1 : 1, Zy = tb(Uy + .09 * fy);
      return {
        panel: yb,
        slot: wy(bb, hy, Zy),
        slotSelected: wy(bb, hy, tb(Zy + .2 * fy)),
        slotUnavailable: wy(bb, hy, tb(Uy + -.1 * fy))
      }
    }

    function tb(yb) {
      return Math.min(1, Math.max(0, yb))
    }

    function wy(yb, bb, Wy) {
      const Uy = (1 - Math.abs(2 * Wy - 1)) * bb,
        hy = Uy * (1 - Math.abs(yb / 60 % 2 - 1)),
        fy = Wy - Uy / 2;
      let Zy;
      return Zy = yb < 60 ? [Uy, hy, 0] : yb < 120 ? [hy, Uy, 0] : yb < 180 ? [0, Uy, hy] : yb < 240 ? [0, hy, Uy] : yb < 300 ? [hy, 0, Uy] : [Uy, 0, hy], "#" + Zy.map((yb => function(yb) {
        return Math.round(255 * yb).toString(16).padStart(2, "0")
      }(yb + fy))).join("")
    }
    var kb = Wy(35315),
      Ny = Wy(3553),
      zb = Wy(1977),
      Iy = Wy(1983),
      xb = Wy(35358),
      Ay = Wy(4022),
      dy = Wy(1295),
      yW = Wy(547);

    function bW(yb, bb, Wy, Uy) {
      yb.style.display = "";
      const hy = yb.offsetWidth,
        fy = yb.offsetHeight,
        Zy = Math.min(Math.max((bb.left + bb.right) / 2 - hy / 2, 8), window.innerWidth - 8 - hy);
      let cb = bb.top - Wy - fy;
      const Py = [...Uy].sort(((yb, bb) => bb.top - yb.top));
      for (const oy of Py) Zy < oy.right && Zy + hy > oy.left && cb < oy.bottom && cb + fy > oy.top && (cb = oy.top - 8 - fy);
      return cb < 8 ? (yb.style.display = "none", null) : (yb.style.transform = `translate(${Zy-bb.left}px, ${cb-bb.top}px)`, {
        left: Zy,
        top: cb,
        right: Zy + hy,
        bottom: cb + fy
      })
    }

    function Wb(yb) {
      const bb = [];
      for (const Wy of document.querySelectorAll(yb)) {
        const yb = Wy.getBoundingClientRect();
        yb.width > 0 && "visible" === getComputedStyle(Wy).visibility && bb.push(yb)
      }
      return bb
    }

    function Ub(yb, bb) {
      return yb.clientX >= bb.left - 8 && yb.clientX <= bb.right + 8 && yb.clientY >= bb.top - 8 && yb.clientY <= bb.bottom + 8
    }
    var hb = Wy(8026);
    class fb {
      constructor(yb) {
        this.deps = yb, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(yb) {
        yb && "armed" === this.phase ? this.setPhase("ready") : yb || "ready" !== this.phase || this.setPhase("armed")
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
      hold(yb, bb) {
        this.suspended || (this.offered ? bb || this.setPhase("idle") : yb && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : yb || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(yb) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const bb = this.phase;
        this.phase = yb, this.deps.onPhase(yb, bb)
      }
    }
    const Zb = 25 * Math.PI / 180,
      cW = 45 * Math.PI / 180;
    class Pb extends fb {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(yb, bb, Wy) {
        this.speed = Wy;
        const Uy = Math.hypot(yb, bb),
          hy = Uy > 0 ? Math.acos(Math.min(1, -bb / Uy)) : Math.PI;
        this.hold(Uy >= .8 && hy <= Zb, Uy >= .5 && hy <= cW)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var ob = Wy(1145);

    function Bb(yb, bb) {
      const Wy = (0, Uy.useRef)(null),
        hy = (0, Uy.useRef)(bb);
      return hy.current = bb, (0, Uy.useEffect)((() => {
        if (!yb) return;
        const {
          create: bb,
          elementRef: Uy,
          ringRef: fy,
          classPrefix: Zy,
          keptBehindMovementPanels: cb,
          resizeEnds: Py
        } = hy.current, oy = {
          charging: `${Zy}Charging`,
          armed: `${Zy}Armed`,
          ready: `${Zy}Ready`,
          locked: `${Zy}Locked`
        };
        let By = null;
        const Ky = bb({
          onPhase: (yb, bb) => {
            const Wy = Uy.current;
            if (null !== Wy) {
              for (const [bb, Uy] of Object.entries(oy)) Wy.classList.toggle(Uy, bb === yb);
              if ("charging" === yb) By = fy.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === yb) {
                var Zy;
                null === (Zy = By) || void 0 === Zy || Zy.cancel(), By = null
              }
              var cb, Py;
              if ("armed" === yb && "charging" === bb && hy.current.onArmed(), "ready" === yb && hb.e.play("lockReady"), "locked" === yb) hb.e.play("lockLocked"), null === (cb = (Py = hy.current).onLocked) || void 0 === cb || cb.call(Py);
              "locked" === bb && hy.current.onUnlocked()
            }
          }
        });
        Wy.current = Ky;
        const ey = () => {
            Ky.suspend()
          },
          qb = () => {
            "hidden" === document.visibilityState && ey()
          },
          sy = () => {
            Py ? Ky.suspend() : Ky.suspendArming()
          },
          Sy = (0, ob.c)((yb => {
            let {
              keepsMovement: bb
            } = yb;
            bb && cb ? Ky.suspendArming() : ey()
          }));
        return document.addEventListener("visibilitychange", qb), window.addEventListener("blur", ey), window.addEventListener("resize", sy), () => {
          Sy(), document.removeEventListener("visibilitychange", qb), window.removeEventListener("blur", ey), window.removeEventListener("resize", sy), Ky.cancel(), Wy.current = null
        }
      }), [yb]), (0, gb.e)("localPlayerAliveSet", (() => {
        var yb;
        null === (yb = Wy.current) || void 0 === yb || yb.suspend()
      })), Wy
    }
    const Kb = 50;

    function eb(yb) {
      let {
        onMove: bb,
        mode: Wy,
        speedCurve: hy,
        autorun: fy = !1
      } = yb;
      const Zy = (0, Uy.useRef)(null),
        cb = (0, Uy.useRef)(null),
        Py = (0, Uy.useRef)(null),
        By = (0, Uy.useRef)(null),
        Ky = (0, Uy.useRef)(null),
        qb = (0, Uy.useRef)(null),
        sy = (0, Uy.useRef)(null),
        Sy = (0, Uy.useRef)(null),
        Ey = (0, Uy.useRef)(!1),
        ly = (0, Uy.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: mb
        } = (0, My.D)(),
        Cy = "fixed_shown" === Wy || "fixed_hidden" === Wy,
        Ty = (0, Gy.h)(["notchSize"]).notchSize.left,
        Vy = function(yb, bb, Wy, hy, fy) {
          const Zy = (0, Uy.useRef)(null),
            cb = () => {
              clearInterval(Zy.current), Zy.current = null
            },
            Py = Bb(yb, {
              create: yb => new Pb(yb),
              elementRef: bb,
              ringRef: Wy,
              classPrefix: "Autorun",
              keptBehindMovementPanels: !0,
              resizeEnds: !0,
              onArmed: fy,
              onLocked: () => {
                Zy.current = setInterval((() => {
                  ey.gameBridge.lookup("dropAhead", null) && (hb.e.play("autorunLedgeStop"), Py.current.cancel())
                }), 100)
              },
              onUnlocked: () => {
                cb(), hy()
              }
            });
          return (0, Uy.useEffect)((() => cb), []), Py
        }(fy, cb, qb, (() => {
          ib(), vb()
        }), (() => {
          Jy(), null === Sy.current && Vy.current.suspend()
        }));

      function Jy() {
        const yb = cb.current.getBoundingClientRect();
        Sy.current = bW(sy.current, yb, 80, Wb(".TouchInventoryKey")), Ey.current = null !== Sy.current && Ub(ly.current, Sy.current)
      }

      function gb(yb) {
        cb.current.style.transform = `translate(${yb.x-Kb}px, ${yb.y-Kb}px)`
      }

      function Oy(yb) {
        const bb = cb.current;
        bb.classList.add("Resting"), bb.classList.toggle("Returning", yb), bb.style.display = "fixed_hidden" === Wy ? "none" : "block", gb(function() {
          const yb = Ty * window.innerWidth / 100,
            bb = window.innerHeight > window.innerWidth ? 135 : 100;
          return {
            x: yb + 90,
            y: window.innerHeight - bb
          }
        }())
      }
      const Ry = (0, Uy.useRef)({
        restFixed: Oy,
        release: Yy
      });

      function vb() {
        Cy ? Oy("fixed_shown" === Wy) : "floating" === Wy && (cb.current.style.display = "none"), bb({
          x: 0,
          y: 0
        })
      }

      function ib() {
        Ky.current = null, By.current = null, Py.current.style.transform = "translate(-50%, -50%)"
      }

      function Yy(yb) {
        ib();
        const Wy = Vy.current;
        yb && null !== Wy && void 0 !== Wy && Wy.lift() ? bb({
          x: 0,
          y: -Wy.lockedSpeed
        }) : (null === Wy || void 0 === Wy || Wy.cancel(), vb())
      }

      function Xy(yb) {
        const Wy = Array.from(yb.touches).find((yb => yb.identifier === Ky.current));
        if (null === By.current || null === Ky.current || (0, yW.D)(Wy)) return;
        const Uy = Vy.current,
          fy = Wy.clientX - By.current.x,
          Zy = Wy.clientY - By.current.y,
          cb = Math.hypot(fy, Zy),
          oy = cb > 0 ? Math.min(1, Kb / cb) : 0,
          ey = fy * oy,
          qb = Zy * oy,
          sy = Math.hypot(ey, qb) / Kb,
          mb = hy && sy > 0 ? hy(sy) / sy : 1;
        Py.current.style.transform = `translate(calc(-50% + ${ey}px), calc(-50% + ${qb}px))`;
        const Cy = ey / Kb,
          Ty = qb / Kb;
        if (bb({
            x: Cy * mb,
            y: Ty * mb
          }), null !== Uy && null !== Sy.current) {
          Uy.move(Cy, Ty, sy * mb), ly.current = {
            clientX: Wy.clientX,
            clientY: Wy.clientY
          };
          const yb = Ey.current;
          Ey.current = Ub(Wy, Sy.current), Ey.current !== yb && Uy.target(Ey.current)
        }
      }
      return Ry.current = {
        restFixed: Oy,
        release: Yy
      }, (0, Uy.useLayoutEffect)((() => {
        if (!Cy) return;
        null === Ky.current && Ry.current.restFixed(!1);
        const yb = () => {
          null === Ky.current && Ry.current.restFixed(!1)
        };
        window.addEventListener("resize", yb);
        const bb = cb.current;
        return () => {
          window.removeEventListener("resize", yb), bb.classList.remove("Resting", "Returning"), null === Ky.current && (bb.style.display = "", bb.style.transform = "")
        }
      }), [Cy, Wy, Ty]), (0, Uy.useEffect)((() => {
        const yb = yb => {
            const bb = Ky.current;
            null === bb || Array.from(yb.touches).some((yb => yb.identifier === bb)) || Ry.current.release("touchend" === yb.type && Array.from(yb.changedTouches).some((yb => yb.identifier === bb)))
          },
          bb = () => {
            null !== Ky.current && Ry.current.release(!1)
          },
          Wy = () => {
            "hidden" === document.visibilityState && bb()
          };
        document.addEventListener("touchstart", yb, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", yb, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", yb, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", yb, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", bb), document.addEventListener("visibilitychange", Wy);
        const Uy = (0, ob.c)((yb => {
          let {
            keepsMovement: Wy
          } = yb;
          Wy || bb()
        }));
        return () => {
          Uy(), document.removeEventListener("touchstart", yb, {
            capture: !0
          }), document.removeEventListener("touchmove", yb, {
            capture: !0
          }), document.removeEventListener("touchend", yb, {
            capture: !0
          }), document.removeEventListener("touchcancel", yb, {
            capture: !0
          }), window.removeEventListener("blur", bb), document.removeEventListener("visibilitychange", Wy)
        }
      }), []), (0, Uy.useEffect)((() => {
        const yb = Zy.current,
          bb = yb => {
            yb.preventDefault()
          };
        return yb.addEventListener("touchstart", bb, {
          passive: !1
        }), () => {
          yb.removeEventListener("touchstart", bb)
        }
      }), []), (0, oy.jsx)("div", {
        ref: Zy,
        className: "JoystickZone",
        onTouchStart: function(yb) {
          var bb;
          if (null !== Ky.current) return;
          const Uy = Array.from(yb.changedTouches).find((yb => {
            var bb;
            return null === (bb = Zy.current) || void 0 === bb ? void 0 : bb.contains(yb.target)
          }));
          if (Uy) {
            if (null === (bb = Vy.current) || void 0 === bb || bb.startTouch(), Ky.current = Uy.identifier, "pinned" === Wy) {
              const yb = cb.current.getBoundingClientRect();
              By.current = {
                x: yb.left + yb.width / 2,
                y: yb.top + yb.height / 2
              }
            } else By.current = {
              x: Uy.clientX,
              y: Uy.clientY
            }, cb.current.classList.remove("Resting", "Returning"), cb.current.style.display = "block", gb(By.current), fy && (ly.current = {
              clientX: Uy.clientX,
              clientY: Uy.clientY
            }, Jy());
            Xy(yb)
          }
        },
        onTouchMove: Xy,
        children: (0, oy.jsxs)("div", {
          ref: cb,
          className: "Joystick",
          style: {
            width: "100px",
            height: "100px",
            transform: "pinned" === Wy ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, oy.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: "100px",
              height: "100px"
            }
          }), fy && (0, oy.jsxs)(oy.Fragment, {
            children: [(0, oy.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, oy.jsx)("circle", {
                ref: qb,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, oy.jsxs)("div", {
              ref: sy,
              className: "AutorunTarget",
              children: [(0, oy.jsx)(ab.e, {
                name: "lock"
              }), mb("settingsMenu:autoRun")]
            })]
          }), (0, oy.jsx)("div", {
            ref: Py,
            className: "JoystickKnob",
            style: {
              width: "50px",
              height: "50px"
            }
          })]
        })
      })
    }
    var qW = Wy(35362),
      sb = Wy(2714);

    function Sb(yb, bb) {
      const Wy = (0, Uy.useRef)(null);
      return (0, Uy.useLayoutEffect)((() => (xb.g.set(yb, Wy.current, bb), () => {
        xb.g.set(yb, null)
      })), [yb, bb]), Wy
    }
    const Eb = "C",
      lb = "J",
      mW = "U",
      Cb = "P",
      Tb = "A",
      Vb = "G",
      Jb = "X",
      gW = (0, Uy.forwardRef)((function(yb, bb) {
        let {
          slot: Wy,
          canvasZone: hy = !1,
          lit: Zy = !1,
          label: cb,
          className: Py,
          children: By,
          ...Ky
        } = yb;
        return (0, Uy.useEffect)((() => (Ty.g.EZ(sb.d), () => {
          Ty.g.EZ(sb.d)
        })), []), (0, oy.jsx)("div", {
          ref: bb,
          className: fy()("TouchKeyHit", `TouchSlot${Wy}`, Py, {
            CanvasZone: hy
          }),
          ...Ky,
          children: (0, oy.jsxs)("div", {
            className: fy()("TouchKey", {
              Lit: Zy,
              Labelled: void 0 !== cb
            }),
            children: [By, void 0 !== cb && (0, oy.jsx)("span", {
              className: "TouchKeyLabel",
              children: cb
            })]
          })
        })
      }));

    function Gb(yb, bb) {
      (0, Uy.useEffect)((() => () => {
        bb.current && (bb.current = !1, (0, Iy.y)(yb, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Ob(yb, bb) {
      const Wy = bb ? [Jb] : [Cb, Jb];
      return yb.filter((yb => null !== yb)).slice(0, Wy.length).map(((yb, bb) => {
        const hy = Wy[bb];
        return (0, oy.jsx)(Uy.Fragment, {
          children: yb.render(hy)
        }, `${yb.id}:${hy}`)
      }))
    }
    var Rb = Wy(35348);
    class vW extends fb {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(yb, bb) {
        this.start = {
          x: yb,
          y: bb
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(yb, bb, Wy) {
        const Uy = Math.hypot(yb - this.start.x, bb - this.start.y) <= 12;
        this.moved ||= !Uy;
        const hy = null !== Wy && bb < this.start.y - 12 && Ub({
          clientX: yb,
          clientY: bb
        }, Wy);
        this.hold(!this.moved, Uy || hy)
      }
    }
    const iW = new Set;

    function Mb(yb) {
      const bb = new Set(Array.from(yb.touches, (yb => yb.identifier)));
      for (const Wy of iW) {
        for (const yb of Wy.ids) bb.has(yb) || Wy.ids.delete(yb);
        if (0 === Wy.ids.size) {
          iW.delete(Wy);
          Wy.pressesOnPointerDown && "touchstart" === yb.type && Array.from(yb.changedTouches).some((yb => yb.target instanceof Node && Wy.element.contains(yb.target))) || Wy.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const df of ["touchstart", "touchmove"]) window.addEventListener(df, Mb, {
        capture: !0,
        passive: !0
      });

    function Yb(yb) {
      let {
        pressesOnPointerDown: bb = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Wy = (0, Uy.useRef)(yb);
      Wy.current = yb;
      const hy = (0, Uy.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: bb,
        release: () => {
          Wy.current()
        }
      });
      (0, Uy.useEffect)((() => {
        const yb = hy.current;
        return () => {
          iW.delete(yb), yb.ids.clear()
        }
      }), []);
      const fy = yb => {
        const bb = hy.current;
        for (const Wy of Array.from(yb.changedTouches)) bb.ids.delete(Wy.identifier);
        0 === bb.ids.size && iW.delete(bb)
      };
      return {
        onTouchStart: yb => {
          const bb = hy.current;
          bb.element = yb.currentTarget;
          for (const Wy of Array.from(yb.changedTouches)) Wy.target instanceof Node && yb.currentTarget.contains(Wy.target) && bb.ids.add(Wy.identifier);
          bb.ids.size > 0 && iW.add(bb)
        },
        onTouchEnd: fy,
        onTouchCancel: fy
      }
    }

    function Xb(yb, bb) {
      return null === bb ? null : (0, Rb.e)(yb.nativeEvent.changedTouches, bb.id)
    }

    function nb(yb) {
      let {
        lockable: bb
      } = yb;
      const {
        t: Wy
      } = (0, My.D)(), hy = (0, Uy.useRef)(!1);
      Gb(zb.r.Jump, hy);
      const fy = (0, Uy.useRef)(null),
        Zy = (0, Uy.useRef)(null),
        cb = (0, Uy.useRef)(null),
        Py = (0, Uy.useRef)(null),
        By = (0, Uy.useRef)(null),
        Ky = (0, Uy.useRef)(null),
        ey = (0, Uy.useRef)(!1),
        qb = (yb, bb) => {
          hy.current = yb, (0, Iy.y)(zb.r.Jump, yb, bb)
        },
        sy = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          hy.current && (fy.current && (0, dy.j)(fy.current, !1), qb(!1, yb))
        },
        Sy = Bb(bb, {
          create: yb => new vW(yb),
          elementRef: fy,
          ringRef: Zy,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const yb = fy.current.getBoundingClientRect(),
              bb = cb.current.parentElement,
              Wy = bb.getBoundingClientRect(),
              Uy = {
                left: Wy.left + bb.clientLeft,
                top: Wy.top + bb.clientTop,
                right: Wy.right - bb.clientLeft,
                bottom: Wy.bottom - bb.clientTop
              };
            if (By.current = bW(cb.current, Uy, 16, Wb(".TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey")), null === By.current) return void Sy.current.suspend();
            const hy = By.current;
            Ky.current = {
              left: Math.min(yb.left, hy.left),
              top: hy.top,
              right: Math.max(yb.right, hy.right),
              bottom: yb.bottom
            }, ey.current = null !== Py.current && Ub({
              clientX: Py.current.x,
              clientY: Py.current.y
            }, hy)
          },
          onUnlocked: () => {
            null === Py.current && sy()
          }
        }),
        Ey = yb => {
          var bb;
          Py.current = null, null === (bb = Sy.current) || void 0 === bb || bb.cancel(), sy(yb)
        },
        ly = Yb((() => {
          Ey()
        })),
        mb = yb => {
          const bb = Py.current;
          var Wy;
          return null === bb ? null !== (Wy = Sy.current) && void 0 !== Wy && Wy.locked ? null : "lifted" : Xb(yb, bb) ? "lifted" : (0, Rb.i)(yb.nativeEvent.touches, bb.id) ? null : "dropped"
        };
      return (0, oy.jsxs)(gW, {
        ref: fy,
        slot: lb,
        className: "JumpKey",
        onTouchStart: yb => {
          ly.onTouchStart(yb), (0, dy.j)(yb.currentTarget, !0), null === Py.current || (0, Rb.i)(yb.nativeEvent.touches, Py.current.id) || Ey();
          const bb = yb.changedTouches[0];
          var Wy;
          null === Py.current && bb && (Py.current = {
            id: bb.identifier,
            x: bb.clientX,
            y: bb.clientY
          }, null === (Wy = Sy.current) || void 0 === Wy || Wy.press(bb.clientX, bb.clientY));
          hy.current || qb(!0, yb.nativeEvent)
        },
        onTouchMove: yb => {
          const bb = Py.current,
            Wy = Xb(yb, bb);
          if (!Wy) return;
          const Uy = Sy.current;
          if (null === Uy || void 0 === Uy || Uy.move(Wy.clientX, Wy.clientY, Ky.current), null !== Uy && void 0 !== Uy && Uy.offered) {
            const yb = Ub(Wy, By.current);
            yb !== ey.current && (ey.current = yb, Uy.target(yb))
          }
          bb.x = Wy.clientX, bb.y = Wy.clientY
        },
        onTouchEnd: yb => {
          var bb;
          ly.onTouchEnd(yb);
          const Wy = mb(yb);
          null !== Wy && ("dropped" !== Wy ? (Py.current = null, null !== (bb = Sy.current) && void 0 !== bb && bb.lift() ? (0, dy.j)(yb.currentTarget, !1) : sy(yb.nativeEvent)) : Ey(yb.nativeEvent))
        },
        onTouchCancel: yb => {
          ly.onTouchCancel(yb), null !== mb(yb) && Ey(yb.nativeEvent)
        },
        children: [(0, oy.jsx)(ab.e, {
          name: "arrow-up-from-line"
        }), bb && (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, oy.jsx)(ab.e, {
              name: "lock"
            })
          }), (0, oy.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, oy.jsx)("rect", {
              ref: Zy,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: "10",
              pathLength: 1
            })
          }), (0, oy.jsxs)("div", {
            ref: cb,
            className: "JumpLockTarget",
            children: [(0, oy.jsx)(ab.e, {
              name: "lock"
            }), Wy("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const ub = new WeakMap;
    class rW {
      constructor(yb) {
        this.zones = yb, this.followed = new Map, this.onStart = yb => {
          if (this.releaseMissing(yb.touches), yb.target instanceof HTMLCanvasElement)
            for (let Wy = 0; Wy < yb.changedTouches.length; Wy++) {
              var bb;
              const {
                identifier: Uy,
                clientX: hy,
                clientY: fy
              } = yb.changedTouches[Wy];
              this.release(Uy);
              const Zy = this.zones.hitZone(hy, fy);
              if (!Zy) continue;
              const {
                key: cb
              } = Zy;
              null === (bb = ub.get(cb)) || void 0 === bb || bb.cancel();
              const Py = {
                hit: Zy.element,
                key: cb,
                x: Zy.x,
                y: Zy.y,
                reach: .6 * Zy.radius
              };
              this.followed.set(Uy, Py), (0, dy.j)(Zy.element, !0), Hb(Py, hy, fy)
            }
        }, this.onMove = yb => {
          this.releaseMissing(yb.touches);
          for (let bb = 0; bb < yb.changedTouches.length; bb++) {
            const {
              identifier: Wy,
              clientX: Uy,
              clientY: hy
            } = yb.changedTouches[bb], fy = this.followed.get(Wy);
            fy && Hb(fy, Uy, hy)
          }
        }, this.onEnd = yb => {
          for (let bb = 0; bb < yb.changedTouches.length; bb++) this.release(yb.changedTouches[bb].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const yb = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, yb), document.addEventListener("touchmove", this.onMove, yb), document.addEventListener("touchend", this.onEnd, yb), document.addEventListener("touchcancel", this.onEnd, yb), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(yb) {
        for (const bb of [...this.followed.keys()])(0, Rb.i)(yb, bb) || this.release(bb)
      }
      releaseAll() {
        for (const yb of [...this.followed.keys()]) this.release(yb)
      }
      release(yb) {
        const bb = this.followed.get(yb);
        if (!bb) return;
        this.followed.delete(yb);
        for (const hy of this.followed.values())
          if (hy.key === bb.key) return;
        (0, dy.j)(bb.hit, !1);
        const {
          key: Wy
        } = bb, Uy = Wy.style.translate;
        Wy.style.translate = "", Uy && ub.set(Wy, Wy.animate({
          translate: [Uy, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Hb(yb, bb, Wy) {
      let {
        key: Uy,
        x: hy,
        y: fy,
        reach: Zy
      } = yb;
      const cb = bb - hy,
        Py = Wy - fy,
        oy = Math.min(1, Zy / (Math.hypot(cb, Py) || 1));
      Uy.style.translate = `${cb*oy}px ${Py*oy}px`
    }
    const aW = () => {
      const yb = (0, Ny.k)(),
        bb = (0, Ry.q)();
      return yb || bb
    };

    function Fb(yb) {
      (0, xb.k)(yb.x, yb.y)
    }
    const pb = (0, Uy.memo)((function() {
        const yb = aW(),
          {
            joystickMode: bb,
            touchSpeedCurve: Wy,
            autorun: hy
          } = (0, Gy.h)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Uy.useEffect)((() => ((0, Ay.h)(zb.v.TouchControls, zb.v.TouchControls), () => {
          (0, Ay.h)(zb.v.TouchControls, 0), (0, xb.k)(0, 0)
        })), []), (0, oy.jsx)("div", {
          className: fy()("TouchMovementWrapper", {
            Hidden: yb
          }),
          "data-camera-keeper": "",
          children: (0, oy.jsx)(eb, {
            onMove: Fb,
            mode: bb,
            speedCurve: Wy ? qW.b : void 0,
            autorun: hy
          })
        })
      })),
      Lb = (0, Uy.memo)((function() {
        const yb = aW(),
          {
            clientEscMenuOptions: bb
          } = (0, Gy.h)(["clientEscMenuOptions"]),
          Wy = bb.touchActionButtons;
        return (0, Uy.useEffect)((() => new rW(xb.g).start()), []), (0, Uy.useEffect)((() => {
          Ty.g.EZ(sb.d)
        }), [yb]), (0, oy.jsxs)("div", {
          className: fy()("TouchComponentsButtons", {
            Hidden: yb
          }),
          "data-camera-keeper": "",
          children: [(0, oy.jsx)(nb, {
            lockable: bb.jumpLock && !yb
          }), (0, oy.jsx)(db, {
            hidden: yb,
            actionButtons: Wy
          }), (0, oy.jsx)(jW, {})]
        })
      }));

    function Qb(yb) {
      const bb = bb => Wy => {
        (0, dy.j)(Wy.currentTarget, bb), yb(bb, Wy.nativeEvent)
      };
      return {
        onPointerDown: bb(!0),
        onPointerUp: bb(!1),
        onPointerCancel: bb(!1)
      }
    }

    function jW() {
      const yb = (0, Cy.k)("canCrouch"),
        bb = (0, gb.j)("crouching"),
        Wy = (0, Uy.useRef)(!1);
      Gb(zb.r.Crouch, Wy);
      const hy = (yb, bb) => {
          Wy.current = yb, (0, Iy.y)(zb.r.Crouch, yb, bb)
        },
        fy = (0, Uy.useRef)(null),
        Zy = () => {
          Wy.current && (fy.current && (0, dy.j)(fy.current, !1), hy(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        cb = Yb(Zy);
      return (0, Uy.useEffect)((() => {
        !1 === yb && Zy()
      }), [yb]), !1 === yb ? null : (0, oy.jsx)(gW, {
        ref: fy,
        slot: Eb,
        className: "CrouchKey",
        lit: bb,
        ...cb,
        ...Qb(hy),
        children: (0, oy.jsx)(ab.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Db = [{
        icon: "arrows-rotate"
      }],
      tW = [{
        icon: "Arrow"
      }],
      wb = [{
        icon: "crosshairs"
      }],
      kW = [{
        icon: "swords"
      }],
      Nb = [{
        icon: "hand-back-point-up"
      }],
      zW = [{
        icon: "Firecracker"
      }];

    function Ib(yb, bb, Wy, Uy) {
      return {
        id: JSON.stringify(bb),
        render: hy => (0, oy.jsx)(yU, {
          code: yb,
          slot: hy,
          icon: bb,
          label: Uy,
          hidden: Wy
        })
      }
    }

    function xW(yb, bb) {
      return {
        id: "fly",
        render: Wy => (0, oy.jsx)(Ab, {
          slot: Wy,
          flying: yb,
          label: bb
        })
      }
    }

    function Ab(yb) {
      let {
        slot: bb,
        flying: Wy,
        label: Uy
      } = yb;
      return (0, oy.jsx)(gW, {
        slot: bb,
        className: "FlyKey",
        lit: Wy,
        label: Uy,
        ...Qb(((yb, bb) => {
          (0, Iy.y)(zb.r.Fly, yb, bb)
        })),
        children: (0, oy.jsx)(ab.e, {
          name: "feather-pointed"
        })
      })
    }

    function db(yb) {
      var bb, Wy;
      let {
        hidden: Uy,
        actionButtons: hy
      } = yb;
      const {
        t: fy
      } = (0, My.D)(), {
        gun: Zy,
        aimable: cb,
        chargeName: Py
      } = (0, gb.j)("heldItemAim"), By = (0, gb.j)("gliderBoostFuel"), {
        canFly: Ky,
        flying: ey
      } = (0, gb.j)("flight"), qb = (0, Cy.k)("touchscreenActionButton"), sy = Zy ? Db : qb, Sy = cb ? {
        icon: tW,
        label: fy("touchKeys:aim")
      } : null, Ey = null !== Py ? {
        icon: [{
          icon: Py
        }]
      } : null, ly = null !== Sy && void 0 !== Sy ? Sy : Ey, mb = null !== (bb = null === (Wy = Zy ? Sy : null !== Ey && void 0 !== Ey ? Ey : Sy) || void 0 === Wy ? void 0 : Wy.icon) && void 0 !== bb ? bb : Nb, Ty = [!hy && ly ? Ib(xb.e.Action2, ly.icon, Uy, ly.label) : null, Zy ? Ib(xb.e.Action3, wb, Uy, fy("touchKeys:scope")) : null, Ky ? xW(ey, fy("touchKeys:fly")) : null];
      return (0, oy.jsxs)(oy.Fragment, {
        children: [sy && (0, oy.jsx)(yU, {
          code: xb.e.Action1,
          slot: Vb,
          icon: sy,
          label: Zy ? fy("touchKeys:reload") : void 0,
          hidden: Uy
        }, JSON.stringify(sy)), hy && (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)(yU, {
            code: xb.e.Attack,
            slot: Tb,
            icon: kW,
            name: fy("touchKeys:attack"),
            hidden: Uy
          }), (0, oy.jsx)(yU, {
            code: xb.e.Use,
            slot: mW,
            icon: mb,
            name: fy("touchKeys:use"),
            hidden: Uy
          })]
        }), Ob(Ty, hy), By > 0 && (0, oy.jsx)(yU, {
          code: xb.e.Boost,
          slot: Jb,
          icon: zW,
          label: fy("touchKeys:boost", {
            fuel: By > 99 ? "99+" : By
          }),
          hidden: Uy
        })]
      })
    }

    function yU(yb) {
      let {
        code: bb,
        slot: Wy,
        icon: Uy,
        label: hy,
        name: fy,
        hidden: Zy
      } = yb;
      const cb = Sb(bb, Zy);
      return (0, oy.jsx)(gW, {
        ref: cb,
        slot: Wy,
        className: "TouchActionKey",
        canvasZone: !0,
        label: hy,
        role: void 0 !== fy ? "img" : void 0,
        "aria-label": fy,
        children: (0, oy.jsx)(Py.d, {
          text: Uy
        })
      })
    }
    var bU = Wy(3539),
      WW = Wy(2332),
      UW = Wy(568);
    const hW = (0, Uy.memo)((function() {
      (0, ly.d)();
      const yb = (0, Uy.useRef)([]),
        bb = (0, WW.e)(),
        Wy = (0, Uy.useRef)(0),
        hy = (0, Uy.useRef)(0),
        fy = (0, Uy.useRef)([]),
        Zy = (0, Uy.useRef)(null);

      function By(Wy, Uy, hy, fy) {
        const Zy = (0, UW.e)(),
          cb = setTimeout((() => {
            yb.current = yb.current.filter((yb => yb.id !== Zy)), bb()
          }), fy);
        ey.gameBridge.send("recordFlyingMiddleText", {
          content: Wy,
          v_: Uy,
          angle: hy,
          i_: fy
        }), yb.current.push({
          id: Zy,
          content: Wy,
          v_: Uy,
          i_: fy,
          removeTimeout: cb,
          angle: hy
        }), bb()
      }
      return (0, gb.e)("shotDamageToShow", (yb => {
        let {
          damage: bb,
          wasCrit: Wy,
          distance: Uy
        } = yb;
        const hy = -Math.PI / 4 + Math.random() * Math.PI / 2;
        By(Wy ? [{
          str: bb.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [bb.toString()], Uy, hy, 1e3)
      })), (0, cb.i)("flyingMiddleMessage", (yb => {
        let {
          content: bb,
          v_: Uy,
          i_: cb
        } = yb;
        fy.current.push({
          content: bb,
          v_: Uy,
          i_: cb
        });
        const Py = () => {
          const {
            content: yb,
            v_: bb,
            i_: Uy
          } = fy.current.shift(), Zy = function(yb) {
            const bb = -Math.PI / 4,
              Wy = Math.PI / 4,
              Uy = Wy - bb,
              hy = (1 + Math.sqrt(5)) / 2,
              fy = 2 * Math.PI / (hy * hy);
            let Zy = yb + fy;
            for (; Zy > Wy;) Zy -= Uy;
            for (; Zy < bb;) Zy += Uy;
            const cb = Math.PI / 6;
            if (Math.abs(Zy - yb) < cb) {
              Zy = yb + (Math.sign(Zy - yb) || 1) * cb, Zy > Wy && (Zy = yb - cb), Zy < bb && (Zy = yb + cb)
            }
            return Zy
          }(hy.current);
          hy.current = Zy, Wy.current = Date.now(), By(yb, bb, Zy, Uy)
        };
        if (!Zy.current) {
          const yb = () => {
            fy.current.length > 0 && Py(), 0 === fy.current.length && (clearInterval(Zy.current), Zy.current = null)
          };
          Zy.current = setInterval(yb, 200), Wy.current + 200 < Date.now() && yb()
        }
        for (; fy.current.length > 4;) Py()
      })), (0, cb.i)("forceFlyingMiddleMessage", (yb => {
        let {
          content: bb,
          v_: Wy,
          angle: Uy,
          i_: hy
        } = yb;
        By(bb, Wy, Uy, hy)
      })), (0, Uy.useEffect)((() => () => {
        clearInterval(Zy.current), Zy.current = null;
        for (const bb of yb.current) clearTimeout(bb.removeTimeout)
      }), []), (0, oy.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: yb.current.map((yb => {
          const {
            id: bb,
            content: Wy,
            v_: Uy,
            i_: hy,
            angle: fy
          } = yb;
          return yb.pos || (yb.pos = function(yb, bb) {
            const Wy = 50 / (yb ** .7 * .35);
            return {
              x: Wy * Math.sin(bb),
              y: -Wy * Math.cos(bb)
            }
          }(Uy, fy)), (0, oy.jsx)(fW, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: hy,
            enterActiveStyle: {
              transform: `translate(${yb.pos.x}vw, ${yb.pos.y}vh)`,
              transition: `transform ${hy}ms ease-out`
            },
            children: (0, oy.jsx)("div", {
              children: (0, oy.jsx)(Py.d, {
                text: Wy
              })
            })
          }, bb)
        }))
      })
    }));

    function fW(yb) {
      let {
        children: bb,
        className: Wy,
        classNames: hy,
        timeout: fy,
        enterActiveStyle: Zy
      } = yb;
      const [cb, Py] = (0, Uy.useState)(!1), [By, Ky] = (0, Uy.useState)(!1), ey = (0, Uy.useRef)(null);
      return (0, Uy.useEffect)((() => {
        Py(!0)
      }), []), (0, oy.jsx)(bU.e, {
        className: Wy,
        classNames: hy || Wy,
        in: cb,
        timeout: fy,
        nodeRef: ey,
        onEntering: () => {
          Ky(!0)
        },
        children: (0, Uy.cloneElement)(bb, {
          ref: ey,
          style: By && Zy || void 0
        })
      })
    }
    var ZW = Wy(35370);

    function cU() {
      const yb = (0, gb.j)("health");
      return (0, oy.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, oy.jsx)(ZW.b, {
          placement: "statBars"
        }), (0, oy.jsx)(PW, {
          actualValue: yb.shield,
          maxValue: yb.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, oy.jsx)(PW, {
          actualValue: yb.health,
          maxValue: yb.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function PW(yb) {
      let {
        actualValue: bb,
        maxValue: Wy,
        hideAtValue: Uy,
        icon: hy,
        className: fy
      } = yb;
      return (0, ly.e)(), null === bb || null === Wy || bb === Uy || Wy === Uy ? null : (0, oy.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, oy.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, oy.jsx)("div", {
            className: `BottomScreenStatBar ${fy}`,
            style: {
              transform: `scaleX(${Math.max(bb/Wy,0)})`,
              transformOrigin: "left center"
            }
          }), (0, oy.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, oy.jsx)(ab.e, {
              name: hy
            }), ` ${Math.ceil(bb)}/${Wy}`]
          })]
        })
      })
    }
    var oW = Wy(8408),
      BW = Wy(3732),
      KW = Wy(1185),
      eW = Wy(2209),
      qU = Wy(1273),
      sW = Wy(1162),
      SW = Wy(2720),
      EW = Wy(2767),
      lW = Wy(2739),
      mU = Wy(615),
      CW = Wy(2781),
      TW = Wy(139),
      VW = Wy(8359),
      JW = Wy(258);

    function gU(yb, bb) {
      let {
        shownName: Wy,
        lifeformType: Uy
      } = yb;
      return null !== Wy ? Wy : null !== Uy ? bb(`lifeform:${(0,JW.oe)(Uy)}`) : null
    }
    var GW = Wy(2726),
      OW = Wy(2734);
    const RW = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      vU = (0, Uy.memo)((function() {
        var yb, bb;
        const Wy = (0, ly.d)(),
          hy = (0, qb.useNavigatePreserveSearch)(),
          {
            t: Zy
          } = (0, My.D)(),
          {
            loadingOverlayVisible: Py
          } = (0, Gy.h)(["loadingOverlayVisible"]),
          By = (0, Ry.q)(),
          [Ky, sy] = (0, Uy.useState)(!1),
          [Sy, Ey] = (0, Uy.useState)(!0),
          [mb, Ty] = (0, Uy.useState)(null),
          Jy = (0, WW.e)(),
          Oy = (0, Cy.k)("respawnButtonText"),
          vb = (0, Cy.k)("usePlayAgainButton"),
          ib = (0, Cy.k)("useRespawnButton"),
          {
            gameNameWithVariation: Yy
          } = (0, gb.j)("connectedGame"),
          Xy = (0, Uy.useRef)(Vy.c.get("secsToRespawn")),
          ny = (0, Uy.useRef)(ey.gameBridge.latest("localPlayerAlive")),
          uy = (0, Uy.useRef)(Vy.c.get("secsToRespawn")),
          rb = (0, Uy.useRef)(Vy.c.get("autoRespawn")),
          Hy = (0, Uy.useRef)(null),
          Fy = (0, Uy.useRef)(0),
          py = (0, Uy.useRef)(0),
          [Ly, jb] = (0, Uy.useState)(!1),
          Dy = (0, Uy.useRef)(null),
          tb = (0, Uy.useRef)(null),
          wy = (0, Uy.useRef)(null);
        (0, Cy.g)("secsToRespawn", (yb => {
          console.log("Received new secsToRespawn with", yb, "and current canRespawn value of ", rb.current), uy.current = yb, Iy()
        })), (0, Cy.g)("autoRespawn", (yb => {
          console.log("Received autorespawn", yb, "current canRespawn value of ", Xy.current), rb.current = yb, Iy()
        }));
        const kb = yb => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", yb), yb || Fy.current++, ny.current = yb, Iy()
        };
        (0, gb.e)("localPlayerAliveSet", kb), (0, cb.i)(EW.o, (yb => {
          "connected" === yb && !ny.current && rb.current && Xy.current <= 0 && (py.current = 0, xb())
        })), (0, Uy.useEffect)((() => {
          const yb = ey.gameBridge.latest("localPlayerAlive");
          yb === ny.current ? (console.log("Updating respawn component from initial mount"), Iy()) : kb(yb)
        }), []), (0, Uy.useEffect)((() => {
          if (Ky) {
            jb(!1);
            const yb = setTimeout((() => {
              jb(!0)
            }), 600);
            return (0, VW.d)(), () => {
              clearTimeout(yb)
            }
          }
          return () => {}
        }), [Ky]);
        (0, gb.e)("kill", (yb => {
          let {
            killer: bb,
            victim: Wy,
            withItem: Uy
          } = yb;
          if (!Wy.local) return;
          const hy = ((yb, bb) => {
            if (yb.local) {
              const yb = RW[bb];
              return yb ? Zy(yb) : null
            }
            const Wy = gU(yb, Zy);
            return Wy ? Zy("respawnPage:killedBy", {
              name: Wy
            }) : null
          })(bb, Uy);
          hy && Ty({
            text: hy,
            deathCount: ny.current ? Fy.current + 1 : Fy.current
          })
        }));
        const Ny = () => {
            Ky && rb.current && ny.current && Ly && sy(!1)
          },
          zb = Ky && rb.current && ny.current && Ly && !Py;
        (0, cb.i)("usedKeyboard", (() => {
          Ny()
        })), (0, OW.e)("respawn", zb, Ny);
        const Iy = () => {
            Ey(uy.current >= 3 || !rb.current), ny.current ? (clearInterval(Hy.current), Hy.current = null, rb.current ? Jy() : sy(!1)) : (sy(!0), Xy.current = uy.current, Jy(), console.log("Running respawn stats updated", rb.current, Xy.current), rb.current && Xy.current <= 0 && xb(), clearInterval(Hy.current), Xy.current > 0 && (Hy.current = setInterval((() => {
              Xy.current = Math.max(Xy.current - 1, 0), Jy(), Xy.current <= 0 && (clearInterval(Hy.current), Hy.current = null, Vy.c.get("autoRespawn") && xb())
            }), 1e3)))
          },
          xb = () => {
            if (Date.now() - py.current > 1e3) {
              const yb = () => {
                ey.gameBridge.send("respawn", null), py.current = Date.now()
              };
              Vy.c.get("autoRespawn") ? yb() : (0, sW.Y)((() => {
                yb()
              }), "video_respawn")
            }
          },
          Ay = (0, Uy.useMemo)((() => {
            var yb;
            return null === (yb = (0, mU.j)(Yy)) || void 0 === yb ? void 0 : yb.otherGameLinksOnRespawnPage
          }), [Yy]),
          dy = 0 === Xy.current,
          yW = (null === mb || void 0 === mb ? void 0 : mb.deathCount) === Fy.current ? mb.text : null,
          bW = Ky && Sy && !Py,
          Wb = By && zb && null !== (yb = null === (bb = (0, Qy.g)()) || void 0 === bb ? void 0 : bb.getBoundButton("menuConfirm")) && void 0 !== yb ? yb : null,
          Ub = yb => dy ? yb : Zy("respawnPage:actionInSeconds", {
            action: yb,
            seconds: Xy.current
          });
        return (0, oy.jsx)(oW.b, {
          showing: Ky,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, oy.jsx)(SW.d, {
            show: Ky,
            children: (0, oy.jsxs)(BW.c, {
              close: () => {
                sy(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: rb.current || Py ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, TW.o)() && (0, oy.jsx)(qU.d, {
                onClick: lW.d,
                children: Zy("homePage:backToGames")
              }), (0, oy.jsxs)("div", {
                className: "RespawnContainer",
                onClick: Ny,
                children: [(0, oy.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, oy.jsx)("div", {
                    ref: tb,
                    className: "RespawnSideSquareBannerDiv",
                    children: Wy[0] > 925 && (0, oy.jsx)(eW.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: tb
                      },
                      showing: bW,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, oy.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, oy.jsxs)("div", {
                      className: fy()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: By
                      }),
                      children: [rb.current && (0, oy.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, oy.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, oy.jsx)(ab.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), Zy("respawnPage:youDied")]
                        }), (0, oy.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Wb && (ny.current ? Zy("respawnPage:pressAnywhereToContinue") : dy ? Zy("respawnPage:respawning") : Ub(Zy("general:respawn"))), null !== Wb && (0, oy.jsx)(GW.e, {
                            text: Zy("controller:screensPressToContinue", {
                              button: GW.g
                            }),
                            glyph: Wb,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), yW && (0, oy.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: yW
                        })]
                      }), !rb.current && (0, oy.jsxs)(oy.Fragment, {
                        children: [(0, oy.jsxs)("div", {
                          className: fy()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Ay
                          }),
                          children: [vb && (0, oy.jsx)(qU.i, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, sW.Y)((() => {
                                (0, Gy.g)("inGameReplay");
                                const yb = (0, KW.b)(Yy);
                                hy(yb)
                              }), "video_start")
                            },
                            disabled: !dy || !Ly,
                            touchPressOn: "pointerup",
                            children: Ub(Zy("respawnPage:playAgain"))
                          }), ib && (0, oy.jsx)(qU.f, {
                            className: "RespawnPageButton",
                            onClick: xb,
                            padDefaultFocus: !vb,
                            padBack: "sessionBasedGame:stayInLobby" === Oy,
                            disabled: !dy || !Ly,
                            touchPressOn: "pointerup",
                            children: Ub(Zy(Oy))
                          }), !(0, TW.o)() && (0, oy.jsx)(qU.C, {
                            className: "RespawnPageButton",
                            onClick: lW.d,
                            disabled: !dy || !Ly,
                            touchPressOn: "pointerup",
                            children: Ub(Zy("respawnPage:exitGame"))
                          })]
                        }), Ay && (0, oy.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, oy.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: Zy("respawnPage:orTry")
                          }), (0, oy.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Ay.map((yb => (0, oy.jsx)(CW.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: yb
                              },
                              disabled: !dy || !Ly,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, Gy.g)("inGameReplay");
                                const bb = (0, KW.b)(yb);
                                hy(bb)
                              }
                            }, yb)))
                          })]
                        })]
                      })]
                    })
                  }), (0, oy.jsx)("div", {
                    ref: wy,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, oy.jsx)("div", {
                  ref: Dy,
                  className: "RespawnBottom",
                  children: (0, oy.jsx)(eW.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Dy
                    },
                    showing: bW,
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
    var iU = Wy(35390);
    const MW = [{
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
      YW = [{
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
      XW = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      nW = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      uW = (0, Uy.memo)((function() {
        const yb = (0, Uy.useRef)(null),
          bb = (0, Uy.useRef)(null);

        function Wy(Wy) {
          var Uy;
          let {
            oN: hy,
            screenPos: fy
          } = Wy;
          const Zy = yb.current;
          null === (Uy = bb.current) || void 0 === Uy || Uy.cancel(), Zy.classList.remove("HitmarkerCrit"), fy ? (Zy.style.left = `${fy.x}%`, Zy.style.top = `${fy.y}%`) : (Zy.style.left = "50%", Zy.style.top = "50%"), Zy.style.rotate = 16 * (Math.random() - .5) + "deg", hy && Zy.classList.add("HitmarkerCrit");
          const cb = Zy.animate(hy ? YW : MW, hy ? nW : XW);
          bb.current = cb, cb.onfinish = () => {
            Zy.classList.remove("HitmarkerCrit")
          }
        }
        return (0, cb.i)("localGunHitmarker", (yb => {
          let {
            oN: bb
          } = yb;
          Wy({
            oN: bb
          })
        })), (0, cb.i)("yourAttackHit", (yb => {
          let {
            oN: bb,
            screenPos: Uy
          } = yb;
          Wy({
            oN: bb,
            screenPos: Gy.d.get("isTouchScreen") ? Uy : void 0
          })
        })), (0, cb.i)("sendHitmarker", (yb => {
          let {
            oN: bb,
            screenPos: Uy
          } = yb;
          Wy({
            oN: bb,
            screenPos: Uy
          })
        })), (0, oy.jsxs)("div", {
          ref: yb,
          className: "Hitmarker",
          children: [(0, oy.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, oy.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, oy.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, oy.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function rU() {
      const yb = (0, Uy.useRef)(!0);
      return (0, cb.i)("localBlockMined", (() => {
        hb.e.play("blockMined")
      })), (0, cb.i)("yourAttackHit", (() => {
        hb.e.play("hitLanded")
      })), (0, cb.i)("localGunHitmarker", (() => {
        hb.e.play("hitLanded")
      })), (0, cb.i)("damagedByOtherPlayer", (() => {
        hb.e.play("damageTaken")
      })), (0, gb.e)("localPlayerAliveSet", (bb => {
        !bb && yb.current && hb.e.play("death"), yb.current = bb
      })), null
    }
    var HW = Wy(1556),
      aU = Wy(35415),
      FW = Wy.n(aU),
      pW = Wy(1667),
      LW = Wy(1656),
      QW = Wy(2597),
      jU = Wy(35464);
    const DW = JW.Zd ? 7e7 : 7e3,
      tU = FW()("#ffffff").alpha(.5).string();

    function wW(yb) {
      const bb = (0, QW.b)(yb);
      return void 0 !== bb && "Gun" === (0, jU.itemTypeOf)(bb)
    }

    function kU(yb) {
      if (!yb) return console.error(`Killfeed colour was ${yb}`), tU;
      try {
        return FW()(yb).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${yb} is not a colour`), tU
      }
    }
    const NW = (0, Uy.memo)((function() {
      const {
        t: yb
      } = (0, My.D)(), bb = (0, Uy.useRef)([]), Wy = (0, WW.e)();
      return (0, gb.e)("kill", (function(Uy) {
        var hy, fy;
        let {
          killer: Zy,
          victim: cb,
          withItem: Py,
          killstreak: oy
        } = Uy;
        const By = bb.current;
        if (By.length >= 3) {
          const yb = By.shift();
          clearTimeout(yb.timeout)
        }
        const Ky = ey.gameBridge.latest("hiddenPlayerNames"),
          qb = {
            deadName: gU(cb, yb),
            killerName: gU(Zy, yb),
            isFriend: {
              killer: (0, pW.f)(Zy.realName, Ky),
              dead: (0, pW.f)(cb.realName, Ky)
            },
            withItem: Py,
            wasHeadshot: !1,
            killstreak: oy,
            timeout: setTimeout((() => {
              By.shift(), Wy()
            }), DW),
            reactId: `${null!==(hy=Zy.id)&&void 0!==hy?hy:Zy.shownName}|${null!==(fy=cb.id)&&void 0!==fy?fy:cb.shownName}|${Date.now()}`,
            killerBackground: kU(Zy.colour),
            deadBackground: kU(cb.colour)
          };
        By.push(qb), Wy()
      })), (0, Uy.useEffect)((() => {
        const yb = bb.current;
        return () => {
          for (; yb.length > 0;) {
            const {
              timeout: bb
            } = yb.pop();
            clearTimeout(bb)
          }
        }
      }), []), (0, oy.jsx)("div", {
        className: "Killfeed",
        children: bb.current.map((yb => {
          let {
            deadName: bb,
            killerName: Wy,
            withItem: Uy,
            wasHeadshot: hy,
            killstreak: fy,
            killerBackground: Zy,
            deadBackground: cb,
            reactId: Py,
            isFriend: By
          } = yb;
          return (0, oy.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${Zy} calc(100% - 10rem), ${cb} 100%)`
            },
            children: [fy >= 2 ? (0, oy.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, JW.S)(fy)
            }) : null, (0, oy.jsx)("div", {
              className: "KillfeedKillerName",
              children: Wy
            }), By.killer && (0, oy.jsx)(LW.d, {}), (0, oy.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: wW(Uy) ? "7.5vmin" : "5vmin"
              },
              children: (0, oy.jsx)(HW.d, {
                itemName: Uy,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), hy ? (0, oy.jsx)(ab.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, oy.jsx)("div", {
              className: "KillfeedDeadName",
              children: bb
            }), By.dead && (0, oy.jsx)(LW.d, {})]
          }, Py)
        }))
      })
    }));
    var zU = Wy(35471),
      IW = Wy(35479),
      xU = Wy.n(IW),
      AW = Wy(2706),
      dW = Wy(35487),
      yh = Wy(1156);
    const bh = {},
      WU = (0, Uy.memo)((function() {
        const yb = (0, Uy.useRef)({}),
          [, bb] = (0, Uy.useReducer)((yb => yb + 1), 0);
        (0, cb.i)("setDirectionArrow", (Wy => {
          let {
            id: Uy,
            position: hy,
            style: fy,
            text: Zy,
            aby: cb
          } = Wy;
          const Py = yb.current,
            oy = fy || bh,
            By = Zy,
            Ky = Py[Uy];
          if (!Ky) return Py[Uy] = {
            position: hy,
            style: oy,
            text: By,
            shouldShowDistance: cb,
            rUy: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void bb();
          const ey = !xU()(Ky.style, oy) || !xU()(Ky.text, By) || Ky.shouldShowDistance !== cb;
          Ky.position = hy, Ky.style = oy, Ky.text = By, Ky.shouldShowDistance = cb, ey && bb()
        })), (0, cb.i)("clearDirectionArrow", (Wy => {
          let {
            id: Uy
          } = Wy;
          const hy = yb.current;
          if (null === Uy)
            for (const yb in hy) delete hy[yb];
          else delete hy[Uy];
          bb()
        })), (0, Uy.useEffect)((() => {
          const bb = yb.current,
            Wy = (0, yh.l)((() => {
              ! function(yb) {
                const bb = ey.gameBridge.lookup("localPos", null),
                  Wy = AW.d - UU,
                  Uy = (0, AW.h)() - UU;
                for (const hy in yb) {
                  const fy = yb[hy];
                  if (!fy.rUy) continue;
                  const Zy = ey.gameBridge.lookup("screenPos", fy.position),
                    cb = Zy.x - 50,
                    Py = Zy.y - 50;
                  Zy.x === fy.lastScreenX && Zy.y === fy.lastScreenY || (fy.lastScreenX = Zy.x, fy.lastScreenY = Zy.y, fy.rUy.style.translate = `${Zy.x}vw ${Zy.y}vh`, fy.chevronElement && (fy.chevronElement.style.rotate = `${JW.c.fastATan2(Py,cb)}rad`));
                  const oy = Math.abs(cb) < Wy && Math.abs(Py) < Uy;
                  if (oy !== fy.onScreen && (fy.onScreen = oy, fy.rUy.classList.toggle("DirectionArrowOnScreen", oy)), fy.shouldShowDistance && fy.distanceElement) {
                    const yb = fy.position[0] - bb[0],
                      Wy = fy.position[1] - bb[1],
                      Uy = fy.position[2] - bb[2],
                      hy = Math.round(Math.sqrt(yb * yb + Wy * Wy + Uy * Uy));
                    (-1 === fy.lastRenderedDist || (0, dW.d)(hy, fy.lastRenderedDist, fy.lastDistUpdateTime)) && (fy.distanceElement.textContent = `${hy}m`, fy.lastRenderedDist = hy, fy.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(bb)
            }));
          return () => {
            Wy();
            for (const yb in bb) delete bb[yb]
          }
        }), []);
        const Wy = yb.current;
        return (0, oy.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(Wy).map((yb => {
            var bb;
            let [Uy, hy] = yb;
            const fy = null !== (bb = (0, mb.Sb)(hy.style)) && void 0 !== bb ? bb : "#ffffff";
            return (0, oy.jsxs)("div", {
              ref: yb => {
                Wy[Uy] && (Wy[Uy].rUy = yb)
              },
              className: "DirectionArrow",
              style: {
                fontSize: hy.style.fontSize,
                opacity: hy.style.opacity
              },
              children: [(0, oy.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: yb => {
                  Wy[Uy] && (Wy[Uy].chevronElement = yb)
                },
                children: [(0, oy.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, oy.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, oy.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, oy.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, oy.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: fy
                    }
                  }), (0, oy.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: fy
                    }
                  })]
                })]
              }), (0, oy.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: fy,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${fy}`
                }
              }), hy.text && (0, oy.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: fy,
                  fontWeight: hy.style.fontWeight,
                  fontStyle: hy.style.fontStyle
                },
                children: (0, oy.jsx)(Py.d, {
                  text: hy.text
                })
              }), hy.shouldShowDistance && (0, oy.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: yb => {
                  Wy[Uy] && (Wy[Uy].distanceElement = yb)
                },
                style: {
                  color: fy,
                  fontWeight: hy.style.fontWeight,
                  fontStyle: hy.style.fontStyle
                }
              })]
            }, Uy)
          }))
        })
      })),
      UU = .5;
    const hU = (0, Uy.memo)((function(yb) {
        let {
          isTouchScreen: bb
        } = yb;
        return (0, oy.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, oy.jsx)(PU, {}), bb && (0, oy.jsx)(Lb, {})]
        })
      })),
      fU = {
        readyForNext: 0,
        running: 1
      },
      ZU = 50;

    function ch(yb) {
      console.assert(yb.state.current === fU.readyForNext);
      const bb = yb.queue.current,
        Wy = yb.foreground.current;
      if (bb.length > 0 && Wy) {
        const {
          toFraction: Uy,
          toDuration: hy
        } = bb.shift();
        yb.state.current = fU.running, Wy.style.transition = `transform ${Math.max(hy-ZU,0)}ms linear`, Wy.classList.remove("Complete"), yb.timeout.current = setTimeout((() => {
          Wy.style.transform = `scaleX(${Uy})`, yb.timeout.current = setTimeout((() => {
            1 === Uy && Wy.classList.add("Complete"), yb.state.current = fU.readyForNext, ch(yb)
          }), Math.max(hy - ZU, 0))
        }), ZU)
      }
    }

    function PU() {
      const yb = (0, Uy.useRef)([]),
        bb = (0, Uy.useRef)(fU.readyForNext),
        Wy = (0, Uy.useRef)(void 0),
        hy = (0, Uy.useRef)(null),
        fy = (0, Uy.useRef)({
          queue: yb,
          state: bb,
          timeout: Wy,
          foreground: hy
        }),
        Zy = (0, Cy.k)("showProgressBar");
      if ((0, Uy.useLayoutEffect)((() => (Zy && bb.current === fU.readyForNext && ch(fy.current), () => {
          bb.current = fU.readyForNext, clearTimeout(Wy.current), Zy && (yb.current.length = 0)
        })), [Zy]), (0, cb.i)("progressBarUpdate", (Wy => {
          let {
            toFraction: Uy,
            toDuration: hy
          } = Wy;
          yb.current.push({
            toFraction: Uy,
            toDuration: hy
          }), bb.current === fU.readyForNext && ch(fy.current)
        })), !Zy) return null;
      return (0, oy.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, oy.jsx)("div", {
          className: "ProgressBarForeground",
          ref: hy,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var oU = Wy(35490);
    var BU = Wy(2968),
      KU = Wy(2963),
      eU = Wy(1458),
      qh = Wy(1339),
      sU = Wy(1461),
      SU = Wy(1496),
      EU = Wy(1738),
      lU = Wy(987),
      mh = Wy(3562),
      CU = Wy(1304),
      TU = Wy(1209);
    const VU = 2e4,
      JU = 6e5,
      gh = new Set;

    function GU() {
      const {
        gameEntrySource: yb,
        loadingOverlayVisible: bb
      } = (0, Gy.h)(["gameEntrySource", "loadingOverlayVisible"]), Wy = (0, gb.i)("connectedGame", (yb => (0, mh.h)(yb) ? yb.lobbyName : null)), hy = (0, gb.j)("localPlayerAlive"), fy = (0, gb.i)("players", (yb => null !== yb.localId && void 0 !== yb.byId[yb.localId])), [Zy, cb] = (0, Uy.useState)(null);
      return !bb && hy && fy && null !== Wy && Zy !== Wy && cb(Wy), (0, Uy.useEffect)((() => {
        if (!(0, mh.j)(yb) || null === Zy || Zy !== Wy || gh.has(Zy)) return;
        const bb = setTimeout((() => {
          gh.add(Zy), async function(yb) {
            const bb = await lU.userContextManager.getCurrentUserContext();
            let Wy;
            try {
              Wy = (await qh.c.getWorldOwnerFriendOffer(bb)).owner
            } catch (hy) {
              return void console.warn("Couldn't ask who owns this world", hy)
            }
            if (!Wy || (0, mh.n)(Wy.name, Date.now())) return;
            const Uy = Wy;
            ! function(yb, bb) {
              const Wy = Date.now() + JU;
              let Uy = Date.now(),
                hy = 0;
              const fy = () => {
                const Zy = Date.now(),
                  cb = ey.gameBridge.latest("connectedGame");
                cb.lobbyName !== yb || Zy > Wy || (null === cb.websocketUrl ? Uy = 1 / 0 : Uy === 1 / 0 && !Gy.d.get("loadingOverlayVisible") && ey.gameBridge.latest("localPlayerAlive") && (Uy = Zy + VU), hy = Zy < Uy || !ey.gameBridge.latest("localPlayerAlive") || Gy.d.get("isUiHidden") || Gy.d.get("isUiHiddenByCamera") || (0, SU.isTypingInInput)() || Gy.d.get("loadingOverlayVisible") || (0, eU.n)() || (0, BU.g)() || (0, TU.j)() ? 0 : hy + 1, hy >= 2 ? bb() : setTimeout(fy, 500))
              };
              fy()
            }(yb, (() => {
              (0, mh.e)(sU.d.getSocialState().friends, Uy.name) || ((0, mh.k)(Uy.name, Date.now()), EU.e.showWorldOwnerOffer(Uy), (0, CU.f)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(Zy).catch((yb => {
            console.error("Failed to offer the world's owner as a friend", yb)
          }))
        }), VU);
        return () => {
          clearTimeout(bb)
        }
      }), [yb, Zy, Wy]), null
    }
    var OU = Wy(1549);
    const RU = (0, Uy.memo)((function(yb) {
        let {
          durationMs: bb,
          endsAtMs: Wy
        } = yb;
        const [, hy] = (0, Uy.useReducer)((yb => yb + 1), 0), fy = null === Wy ? bb : Math.max(Wy - Date.now(), 0);
        return (0, Uy.useEffect)((() => {
          if (null === Wy || fy <= 0) return;
          const yb = setTimeout(hy, fy - 1e3 * (Math.ceil(fy / 1e3) - 1));
          return () => {
            clearTimeout(yb)
          }
        })), (0, oy.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, JW.cb)(fy)
        })
      })),
      vh = (0, Uy.memo)((function() {
        const yb = (0, gb.j)("localEffects");
        return (0, oy.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(yb).map((yb => {
            let [bb, {
              icon: Wy,
              displayName: Uy,
              durationMs: hy,
              endsAtMs: fy,
              level: Zy
            }] = yb;
            return (0, oy.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, oy.jsx)(OU.b, {
                icon: Wy,
                className: "EffectInfoIcon"
              }), (0, oy.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== hy ? "0" : "1rem"
                },
                children: [(0, oy.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, oy.jsx)(Py.d, {
                    text: null !== Uy && void 0 !== Uy ? Uy : bb,
                    className: "EffectInfoName SmallTextBold"
                  }), Zy > 1 && (0, oy.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, JW.S)(Zy)
                  })]
                }), null !== hy && (0, oy.jsx)(RU, {
                  durationMs: hy,
                  endsAtMs: fy
                })]
              })]
            }, bb)
          }))
        })
      }));
    var ih = Wy(35499),
      MU = Wy(35631),
      YU = Wy(167),
      XU = Wy(1207),
      nU = Wy(2230);

    function uU(yb, bb) {
      (0, Uy.useLayoutEffect)((() => {
        let bb, Wy;
        const Uy = requestAnimationFrame((() => {
          Wy = setTimeout((() => {
            Wy = void 0;
            const Uy = yb();
            bb = "function" === typeof Uy ? Uy : void 0
          }), 0)
        }));
        return () => {
          var yb;
          cancelAnimationFrame(Uy), clearTimeout(Wy), null === (yb = bb) || void 0 === yb || yb()
        }
      }), bb)
    }
    const rh = [5, 5, 5],
      HU = [7, 4, 4, 4];

    function ah(yb) {
      return yb.reduce(((yb, bb) => yb + bb), 0)
    }

    function FU(yb, bb, Wy, Uy, hy) {
      const fy = yb.getContext("2d");
      if (!fy) return null;
      const Zy = bb.fontFamily,
        cb = bb.fontWeight;
      return yb.width = Wy, yb.height = Uy, fy.fillStyle = bb.color, fy.textAlign = "center", fy.textBaseline = "middle", fy.font = `${cb} ${hy}px ${Zy}`, fy
    }
    const pU = (0, Uy.memo)((function(yb) {
      let {
        show: bb
      } = yb;
      const Wy = (0, Uy.useRef)(null),
        hy = (0, Uy.useRef)(null),
        fy = (0, Uy.useRef)(null),
        Zy = (0, sy.l)();
      return (0, Uy.useEffect)((() => Zy.whenShown((() => {
        let yb = 0,
          bb = 0,
          Wy = 0,
          Uy = 0;
        const Zy = (0, yh.l)((() => {
          var Zy;
          yb++, bb++;
          const cb = performance.now();
          if (cb - Wy < 1e3) return;
          const Py = Math.round(yb / (cb - Wy) * 1e3);
          if (hy.current = Py, null === (Zy = fy.current) || void 0 === Zy || Zy.call(fy, Py), yb = 0, Wy = cb, Py < 55) {
            var oy, By;
            Uy += 1;
            const yb = Jy.e.getItem("decreaseLoadDistPromptDeniedCount"),
              [bb, Wy] = Vy.c.get("minChunkAddDist");
            if (Uy >= 15 && function(yb, bb) {
                const Wy = ey.gameBridge.lookup("yC", null);
                return null !== Wy && (Wy.horizontal > yb || Wy.vertical > bb)
              }(bb, Wy) && (null !== (oy = Jy.e.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== oy ? oy : 0) + 432e5 < Date.now() && (null !== (By = Jy.e.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== By ? By : 0) < 3) {
              Jy.e.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              XU.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((Uy => {
                Uy ? (ey.gameBridge.send("setChunkAddDistance", {
                  horizontal: bb,
                  vertical: Wy
                }), Jy.e.setItem("chunkHorizAddDist", bb), Jy.e.setItem("chunkVertAddDist", Wy), Ty.g.EZ("updatedChunkLoadDist"), Jy.e.setItem("decreaseLoadDistPromptDeniedCount", 0)) : Jy.e.setItem("decreaseLoadDistPromptDeniedCount", yb + 1)
              }))
            }
          } else Uy = 0
        }));
        let cb = performance.now();
        bb = 0;
        let Py = null,
          oy = !document.hidden;

        function By() {
          const yb = performance.now() - cb,
            Wy = 1e3 * bb / yb;
          oy && (null === Py && (Py = Wy), nU.b.setFps(Wy, Py)), bb = 0, cb = performance.now()
        }
        let Ky = setInterval(By, 15e3);

        function qb() {
          const yb = oy;
          oy = !document.hidden, !yb && oy && (bb = 0, cb = performance.now(), clearInterval(Ky), Ky = setInterval(By, 15e3))
        }
        return document.addEventListener("visibilitychange", qb), () => {
          Zy(), document.removeEventListener("visibilitychange", qb), clearInterval(Ky)
        }
      }))), [Zy]), uU((() => {
        var yb;
        if (!bb || fy.current) return;
        const Uy = Wy.current,
          Zy = window.getComputedStyle(Uy.parentElement),
          cb = null !== (yb = window.devicePixelRatio) && void 0 !== yb ? yb : 1,
          Py = parseFloat(Zy.fontSize) * cb,
          oy = Math.round(3 * Py),
          By = Math.round(Py),
          Ky = FU(Uy, Zy, oy, By, Py);
        if (!Ky) return;
        const ey = yb => {
          Ky.clearRect(0, 0, Uy.width, Uy.height), Ky.fillText(yb.toString(), Uy.width / 2, Uy.height / 2)
        };
        fy.current = ey, null !== hy.current && ey(hy.current)
      }), [bb]), (0, oy.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: bb ? "flex" : "none"
        },
        children: [(0, oy.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, oy.jsx)("canvas", {
          className: "FpsCanvas",
          ref: Wy,
          width: 48,
          height: 16
        })]
      })
    }));

    function LU(yb) {
      return Math.sign(yb) * Math.round(100 * Math.abs(yb))
    }

    function QU(yb) {
      let {
        getCoordinates: bb,
        showChunkCoords: Wy,
        columns: hy
      } = yb;
      const fy = (0, Uy.useRef)(null);
      return uU((() => {
        var yb;
        const Uy = fy.current,
          Zy = window.getComputedStyle(Uy.parentElement),
          cb = null !== (yb = window.devicePixelRatio) && void 0 !== yb ? yb : 1,
          Py = parseFloat(Zy.fontSize) * cb,
          oy = Math.round(Py * ah(hy)),
          By = Math.round(Py),
          Ky = FU(Uy, Zy, oy, By, Py);
        if (!Ky) return;
        let qb = !0,
          sy = 0,
          Sy = 0,
          Ey = 0,
          ly = 0,
          mb = 0,
          Cy = 0;
        const Ty = () => {
          qb = !0
        };
        document.fonts.load(Ky.font).then(Ty, Ty);
        const Vy = () => {
          FU(Uy, Zy, oy, By, Py), Ty()
        };
        Uy.addEventListener("contextrestored", Vy);
        const Jy = (0, yh.r)((() => {
          var yb, fy, Zy, cb, oy, By;
          const [Ty, Vy, Jy] = bb(), gb = LU(Ty), Gy = LU(Vy), Oy = LU(Jy);
          let Ry = null;
          if (Wy) {
            const yb = ey.gameBridge.lookup("localPos", null);
            Ry = (0, yW.S)(yb[0], yb[1], yb[2])
          }
          const vb = null !== (yb = null === (fy = Ry) || void 0 === fy ? void 0 : fy[0]) && void 0 !== yb ? yb : 0,
            ib = null !== (Zy = null === (cb = Ry) || void 0 === cb ? void 0 : cb[1]) && void 0 !== Zy ? Zy : 0,
            My = null !== (oy = null === (By = Ry) || void 0 === By ? void 0 : By[2]) && void 0 !== oy ? oy : 0;
          if (!qb && gb === sy && Gy === Sy && Oy === Ey && vb === ly && ib === mb && My === Cy) return;
          qb = !1, sy = gb, Sy = Gy, Ey = Oy, ly = vb, mb = ib, Cy = My;
          const Yy = [(gb / 100).toFixed(2), (Gy / 100).toFixed(2), (Oy / 100).toFixed(2)];
          Ry && Yy.unshift(`${vb} ${ib} ${My}`), Ky.clearRect(0, 0, Uy.width, Uy.height);
          const Xy = Uy.height / 2;
          let ny = 0;
          for (let bb = 0; bb < Yy.length; bb++) {
            const yb = Py * hy[bb];
            Ky.fillText(Yy[bb], ny + yb / 2, Xy, yb), ny += yb
          }
        }));
        return () => {
          Jy(), Uy.removeEventListener("contextrestored", Vy)
        }
      }), [bb, Wy, hy]), (0, oy.jsx)("div", {
        className: "CoordinateUI",
        children: (0, oy.jsx)("canvas", {
          ref: fy,
          className: "CoordinateCanvas",
          width: 16 * ah(hy),
          height: 16
        })
      })
    }
    const jh = (0, Uy.memo)((function() {
        const yb = (0, Uy.useCallback)((() => {
          const yb = ey.gameBridge.lookup("localPos", null);
          return [yb[0], yb[1], yb[2]]
        }), []);
        return (0, oy.jsx)(QU, {
          getCoordinates: yb,
          showChunkCoords: !1,
          columns: rh
        })
      })),
      DU = (0, Uy.memo)((function() {
        const yb = (0, Uy.useCallback)((() => {
          const yb = ey.gameBridge.lookup("localPos", null),
            bb = YU.c.DU;
          let Wy = yb[0] % bb,
            Uy = yb[1] % bb,
            hy = yb[2] % bb;
          return Wy < 0 && (Wy += bb), Uy < 0 && (Uy += bb), hy < 0 && (hy += bb), [Wy, Uy, hy]
        }), []);
        return (0, oy.jsx)(QU, {
          getCoordinates: yb,
          showChunkCoords: !0,
          columns: HU
        })
      }));
    var th = Wy(1690),
      wU = Wy(1194),
      kh = Wy(865),
      NU = Wy(1080),
      zh = Wy(94),
      IU = Wy(35519),
      xh = Wy(1278),
      AU = Wy(2476);
    const dU = (0, Uy.memo)((function() {
      const yb = (0, Cy.k)("maxAuraLevel");
      return 0 === yb ? null : (0, oy.jsx)(yf, {
        maxLevel: yb
      })
    }));

    function yf(yb) {
      let {
        maxLevel: bb
      } = yb;
      const Wy = (0, Cy.k)("auraPerLevel"),
        [hy, fy] = (0, Uy.useState)((() => {
          var yb;
          return null !== (yb = ey.gameBridge.latest("aura")) && void 0 !== yb ? yb : void 0
        })),
        [Zy, cb] = (0, Uy.useState)((() => Ty(hy))),
        [Py, By] = (0, Uy.useReducer)((yb => yb + 1), 0),
        Ky = (0, Uy.useRef)(null),
        qb = (0, Uy.useRef)([]),
        sy = (0, Uy.useRef)({
          width: 0,
          level: 0
        }),
        Sy = (0, Uy.useRef)(null),
        Ey = (0, Uy.useRef)(null);

      function mb() {
        if (null !== Sy.current) return;
        if (0 === qb.current.length) return;
        const {
          width: yb,
          level: bb
        } = qb.current.shift();
        let Wy;
        if (bb !== sy.current.level && bb > sy.current.level !== yb > sy.current.width) {
          const Uy = bb > sy.current.level;
          Wy = Uy ? yb : 100 - yb, Ky.current.style.transition = "none", Ky.current.style.width = Uy ? "0%" : "100%", Ky.current.offsetWidth
        } else Wy = Math.abs(yb - sy.current.width);
        const Uy = 100 * Wy / 20;
        Ky.current.style.transition = `width ${Uy}ms linear`, cb(yb), sy.current = {
          width: yb,
          level: bb
        }, qb.current.length > 0 && (Sy.current = setTimeout((() => {
          Sy.current = null, mb()
        }), Uy))
      }

      function Ty(yb) {
        return Math.floor(yb / Wy) === bb ? 100 : yb % Wy / Wy * 100
      }
      return (0, Uy.useEffect)((() => () => {
        clearTimeout(Sy.current), clearTimeout(Ey.current), Sy.current = null, Ey.current = null
      }), []), (0, gb.e)("aura", (yb => {
        if (Ey.current && clearTimeout(Ey.current), null === yb) return clearTimeout(Sy.current), Ey.current = null, Sy.current = null, qb.current = [], sy.current = {
          width: 0,
          level: 0
        }, fy(void 0), void cb(0);
        Ey.current = setTimeout((() => {
          const bb = Math.floor(hy / Wy),
            Uy = Math.floor(yb / Wy),
            Zy = Ty(yb);
          yb > hy && IU.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), Uy > bb ? (Uy % 5 === 0 && IU.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), By(), qb.current.push({
            width: 100,
            level: bb
          })) : Uy < bb && qb.current.push({
            width: 0,
            level: bb
          }), yb === hy && Uy === bb || qb.current.push({
            width: Zy,
            level: Uy
          }), fy(yb), mb()
        }), 50)
      })), (0, ly.e)(), (0, oy.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, oy.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, oy.jsx)(xh.d, {
            showSignal: Py,
            particleElement: (0, oy.jsx)("img", {
              src: (0, AU.f)("glint"),
              alt: ""
            })
          }), (0, oy.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, AU.f)("glint"),
            alt: "aura"
          }), (0, oy.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== hy && void 0 !== hy ? hy : 0) / Wy)
          })]
        }), (0, oy.jsx)("div", {
          className: "AuraBar",
          children: (0, oy.jsx)("div", {
            ref: Ky,
            className: "AuraBarBackground",
            style: {
              width: `${Zy}%`
            }
          })
        })]
      })
    }
    var bf = Wy(2063);

    function Wh(yb) {
      yb.timed && (yb.endedAnimation = yb.timed.animation, yb.timed = null)
    }
    const Uh = (0, Uy.memo)((function() {
      const yb = (0, Uy.useRef)(null),
        bb = (0, Uy.useRef)(null),
        Wy = (0, Uy.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, cb.i)("middleScreenBarInitiate", (yb => {
        var Uy;
        let {
          duration: hy,
          J9: fy,
          horizBarRemOffset: Zy
        } = yb;
        const cb = Wy.current;
        Wh(cb);
        const Py = bb.current;
        if (!(hy >= 0) || !Py) return;
        null === (Uy = cb.endedAnimation) || void 0 === Uy || Uy.cancel(), cb.endedAnimation = null;
        const oy = Py.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: hy,
          fill: "forwards"
        });
        cb.timed = {
          J9: fy,
          horizBarRemOffset: Zy,
          animation: oy
        }
      })), (0, cb.i)("middleScreenBarRemove", (() => {
        Wh(Wy.current)
      })), (0, Uy.useEffect)((() => {
        const Uy = Wy.current;
        let hy = Number.NaN,
          fy = Number.NaN,
          Zy = Number.NaN;
        return (0, yh.h)((() => {
          var Wy, cb, Py, oy;
          const By = yb.current,
            Ky = bb.current;
          if (!By || !Ky) return;
          null !== (Wy = Uy.timed) && void 0 !== Wy && Wy.J9 && "finished" === Uy.timed.animation.playState && Wh(Uy), null === (cb = Uy.endedAnimation) || void 0 === cb || cb.cancel(), Uy.endedAnimation = null;
          let qb = Uy.timed ? 1 : 0;
          if (!Uy.timed) {
            const yb = ey.gameBridge.lookup("momentumFrac", null);
            qb = yb > 0 ? 1 : 0, yb !== Zy && (Zy = yb, Ky.style.transform = `scaleX(${yb})`)
          }
          const sy = null !== (Py = null === (oy = Uy.timed) || void 0 === oy ? void 0 : oy.horizBarRemOffset) && void 0 !== Py ? Py : 0;
          sy === hy && qb === fy || (hy = sy, fy = qb, By.style.transform = `translateX(calc(-50% + ${sy}rem)) scaleX(${qb})`)
        }))
      }), []), (0, oy.jsx)("div", {
        className: "MiddleScreenBar",
        ref: yb,
        children: (0, oy.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: bb
        })
      })
    }));
    var hh = Wy(3883),
      fh = Wy(2201);

    function Zh() {
      const {
        t: yb
      } = (0, My.D)(), bb = (0, cb.m)("serverUpdating", null), Wy = (0, fh.b)(250, null !== bb);
      return null === bb || Wy - bb > 3e4 ? null : (0, oy.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, oy.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: yb("updateWaiting:updatingIn", {
            countdown: (0, hh.o)(bb - Wy)
          })
        }), (0, oy.jsx)("div", {
          children: yb("updateWaiting:bringYouBack")
        })]
      })
    }
    var cf = Wy(35649),
      Ph = Wy(1620);
    const oh = [{
        translationKey: "general:interact"
      }],
      Bh = (0, Uy.memo)((function() {
        const yb = (0, Cy.k)("crosshairText"),
          {
            interactPrompt: bb,
            blockText: Wy,
            neededTool: hy
          } = (0, gb.j)("crosshairTarget"),
          {
            isTouchScreen: fy
          } = (0, Gy.h)(["isTouchScreen"]),
          Zy = (0, Ry.q)(),
          By = (0, ib.d)("alt-fire");
        (0, Uy.useEffect)((() => {
          ey.gameBridge.send("setCrosshairInteractPrompt", !fy || Zy ? "key" : "touch")
        }), [fy, Zy]);
        const [Ky, qb] = (0, Uy.useReducer)((yb => yb + 1), 0);
        (0, cb.i)("customBindingsChanged", qb);
        var sy;
        if (null !== bb && (Zy && null !== By || !fy && null !== (0, Ph.q)("alt-fire"))) return (0, oy.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, oy.jsx)(Oy.e, {
            noaAction: "alt-fire"
          }), (0, oy.jsx)(Py.d, {
            text: null !== (sy = bb.label) && void 0 !== sy ? sy : oh
          })]
        });
        let Sy = null;
        return null !== Wy ? Sy = Wy : null !== yb && "" !== yb ? Sy = yb : null !== hy && (Sy = [{
          icon: hy,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), Sy ? (0, oy.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, oy.jsx)(Py.d, {
            text: Sy
          })
        }) : null
      }));
    var Kh = Wy(2070);
    const eh = (0, Uy.memo)((function() {
      var yb;
      const {
        interactPrompt: bb
      } = (0, gb.j)("crosshairTarget"), {
        openInGameMenuName: Wy,
        openEverythingMenuName: Uy
      } = (0, Gy.h)(["openInGameMenuName", "openEverythingMenuName"]), hy = (0, cb.m)("aimingOverlay", "none"), fy = (0, Ny.k)(), Zy = (0, Kh.e)();
      return null === bb || null !== Wy || null !== Uy || "sniper" === hy || fy || Zy ? null : (0, oy.jsx)(qf, {
        label: null !== (yb = bb.label) && void 0 !== yb ? yb : oh
      })
    }));

    function qf(yb) {
      let {
        label: bb
      } = yb;
      const Wy = Sb(xb.e.Interact, !1);
      return (0, oy.jsx)("div", {
        ref: Wy,
        className: "TouchInteractHit",
        children: (0, oy.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, oy.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, oy.jsx)(ab.e, {
              name: "hand-back-point-up"
            })
          }), (0, oy.jsx)(Py.d, {
            text: bb
          })]
        })
      })
    }
    var sh = Wy(3970),
      Sh = Wy(4037);
    const Eh = (0, Uy.forwardRef)((function(yb, bb) {
        let {
          text: Wy,
          className: Uy,
          children: hy
        } = yb;
        return Wy.hasText ? (0, oy.jsx)("div", {
          ref: bb,
          className: fy()("HudTextPanel", Uy, {
            NoBackground: !Wy.showBackground
          }),
          children: null !== hy && void 0 !== hy ? hy : (0, oy.jsx)(Py.d, {
            text: Wy.content
          })
        }) : null
      })),
      lh = (0, Uy.memo)((function() {
        const yb = (0, Cy.l)("middleTextTop"),
          [bb, Wy] = (0, Uy.useState)(null),
          hy = (0, oU.m)(bb);
        return yb.hasText ? (0, oy.jsx)("div", {
          className: fy()("MiddleTextTopContainer", {
            MiddleTextTopBelow: hy
          }),
          children: (0, oy.jsx)(Eh, {
            ref: Wy,
            className: "MiddleTextTop",
            text: yb
          })
        }) : null
      })),
      mf = (0, Uy.memo)((function() {
        const yb = (0, Cy.c)();
        return (0, oy.jsx)(oy.Fragment, {
          children: yb.map(((yb, bb) => (0, oy.jsx)(Eh, {
            className: "HeaderChip",
            text: yb
          }, bb)))
        })
      }));
    var Ch = Wy(2922),
      Th = Wy(3806);
    const Vh = (0, Uy.memo)((function() {
      const {
        t: yb
      } = (0, My.D)(), [bb, Wy] = (0, Uy.useState)(!1), hy = (0, Uy.useRef)(!1), fy = function(yb) {
        let {
          gameNameWithVariation: bb,
          lobbyName: Wy
        } = yb;
        if ((0, kh.p)(bb)) return Jh;
        if ((0, NU.I)(Wy)) return gf;
        return null
      }((0, gb.j)("connectedGame"));
      if (!fy || bb) return null;
      const Zy = Th.d[fy.target];
      return (0, oy.jsx)(Hy.f, {
        tooltipInner: (0, oy.jsx)("div", {
          children: yb(Zy.reportButtonTooltip)
        }),
        children: (0, oy.jsx)("div", {
          children: (0, oy.jsx)(qU.J, {
            onClick: () => {
              hy.current || (hy.current = !0, (0, Th.h)(fy.reportPolicyIds, Zy).then((yb => {
                null !== yb && void 0 !== yb && yb.selectedPolicyId && (ey.gameBridge.send("reportLobbyOrGame", {
                  target: fy.target,
                  CU: yb.selectedPolicyId,
                  details: yb.pR
                }), Wy(!0))
              })).finally((() => {
                hy.current = !1
              })))
            }
          })
        })
      })
    }));
    const Jh = {
        target: "customGame",
        reportPolicyIds: Ch.d
      },
      gf = {
        target: "lobby",
        reportPolicyIds: Ch.h
      };
    var Gh = Wy(7923),
      Oh = Wy(35667),
      Rh = Wy(35669),
      vf = Wy(35671),
      Mh = Wy(35678),
      Yh = Wy(35712);

    function Xh(yb) {
      return yb instanceof Error && nh.has(yb.message) ? yb.message : void 0
    }
    const nh = new Set([Yh.d.saveBusy.text, Yh.d.saveClosed.text, Yh.d.cropBusy.text]);
    let uh = !1;
    async function rf(yb, bb) {
      var Wy, Uy;
      const {
        files: hy
      } = bb, fy = hy.replayKey();
      if (null === fy) return "none";
      if (uh) throw new Error(Yh.d.saveBusy.text);
      const Zy = null !== (Wy = null === (Uy = hy.saveRefusal) || void 0 === Uy ? void 0 : Uy.call(hy)) && void 0 !== Wy ? Wy : null;
      if (null !== Zy) throw new Error(Zy);
      uh = !0;
      try {
        return await async function(yb, bb, Wy) {
          const {
            files: Uy
          } = bb, hy = () => Uy.replayKey() === Wy, fy = (yb, bb) => {
            hy() && Uy.markSaved(yb, bb)
          };
          let Zy = null;
          if (bb.pickerSupported()) {
            try {
              if (Zy = await bb.chooseFile(yb ? null : Uy.fileHandle()), null === Zy) return "RZ"
            } catch (Py) {
              bb.onFallback(Py)
            }
            if (!hy()) throw new Error(Yh.d.saveClosed.text)
          }
          const cb = await Uy.encode();
          if (null === cb) {
            if (null !== Zy) throw new Error(Yh.d.saveClosed.text);
            return "none"
          }
          if (null !== Zy) try {
            return await bb.write(Zy, cb), fy(Zy), "written"
          } catch (Py) {
            bb.onFallback(Py)
          }
          return fy(null, bb.download(cb)), "downloaded"
        }(yb, bb, fy)
      } finally {
        uh = !1
      }
    }
    var Hh = Wy(3742),
      af = Wy(70);
    const Fh = [1, 2, 4, 8, 16, 32, 64];

    function ph(yb, bb) {
      return Math.max(0, Math.min(yb, bb))
    }

    function Lh(yb, bb, Wy) {
      return Wy <= bb ? 0 : (yb - bb) / (Wy - bb) * 100
    }

    function Qh(yb, bb, Wy) {
      const Uy = Wy - bb;
      return Math.round(bb + yb / 100 * Uy)
    }

    function jf(yb, bb) {
      const Wy = Math.floor(yb / bb / 60),
        Uy = Math.floor(yb / bb % 60),
        hy = yb % bb;
      return `${Wy.toString().padStart(2,"0")}:${Uy.toString().padStart(2,"0")}:${hy.toString().padStart(2,"0")}`
    }

    function Dh(yb) {
      return Number.isInteger(yb) || Fh.includes(yb) ? `${Math.round(yb)}\xd7` : `${yb.toFixed(1)}\xd7`
    }

    function tf(yb, bb) {
      const Wy = Fh.indexOf(yb);
      if (-1 !== Wy) return "in" === bb ? Fh[Math.min(Wy + 1, Fh.length - 1)] : Fh[Math.max(Wy - 1, 0)];
      if ("in" === bb) {
        for (const bb of Fh)
          if (bb >= yb) return bb;
        return yb
      }
      for (let Uy = Fh.length - 1; Uy >= 0; Uy--)
        if (Fh[Uy] <= yb) return Fh[Uy];
      return Fh[0]
    }

    function wh(yb, bb) {
      const Wy = bb.getBoundingClientRect();
      if (Wy.width <= 0) return 0;
      const Uy = (yb - Wy.left) / Wy.width * 100;
      return Math.max(0, Math.min(100, Uy))
    }

    function kf(yb, bb) {
      return bb <= 0 ? 0 : yb / bb * 100
    }

    function Nh(yb, bb, Wy) {
      const Uy = [];
      let hy = Math.ceil(yb / Wy) * Wy;
      for (; hy <= bb;) Uy.push(hy), hy += Wy;
      return Uy
    }
    var zf = Wy(35719);
    const Ih = [{
        label: "Linear",
        easing: zf.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: zf.e
      }, {
        label: "Ease Out",
        easing: zf.g
      }, {
        label: "Ease In Out",
        easing: zf.b
      }],
      xf = 200,
      Ah = 150;

    function dh(yb) {
      const bb = yb => Number(yb.toFixed(3)).toString();
      return `cubic-bezier(${bb(yb[0])}, ${bb(yb[1])}, ${bb(yb[2])}, ${bb(yb[3])})`
    }

    function yZ(yb, bb) {
      return {
        cx: 25 + yb * Ah,
        cy: 25 + (1 - bb) * Ah
      }
    }

    function bZ(yb, bb, Wy) {
      const Uy = yb - Wy.left,
        hy = bb - Wy.top;
      return {
        x: JW.c.clamp((Uy - 25) / Ah, 0, 1),
        y: JW.c.clamp(1 - (hy - 25) / Ah, -1, 2)
      }
    }

    function Wf(yb, bb, Wy, Uy, hy) {
      return {
        x: (0, zf.s)(yb, Wy, hy),
        y: (0, zf.s)(bb, Uy, hy)
      }
    }
    const Uf = (0, Uy.memo)((function(yb) {
      let {
        value: bb,
        onChange: Wy
      } = yb;
      const hy = (0, Uy.useRef)(null),
        fy = (0, Uy.useRef)(null),
        [Zy, cb] = (0, Uy.useState)(null),
        Py = (0, Uy.useCallback)((() => {
          const yb = hy.current;
          if (!yb) return;
          const Wy = yb.getContext("2d");
          if (!Wy) return;
          const Uy = window.devicePixelRatio || 1;
          yb.width = xf * Uy, yb.height = xf * Uy, Wy.setTransform(Uy, 0, 0, Uy, 0, 0), Wy.clearRect(0, 0, xf, xf), Wy.fillStyle = "rgba(38, 52, 93, 0.85)", Wy.fillRect(0, 0, xf, xf), Wy.beginPath();
          const fy = yZ(0, 0),
            cb = yZ(1, 1);
          Wy.moveTo(fy.cx, fy.cy), Wy.lineTo(cb.cx, cb.cy), Wy.strokeStyle = "rgba(164, 164, 164, 0.35)", Wy.setLineDash([3, 3]), Wy.stroke(), Wy.setLineDash([]);
          const [Py, oy, By, Ky] = bb, ey = yZ(Py, oy), qb = yZ(By, Ky);
          Wy.strokeStyle = "rgba(252, 211, 115, 0.55)", Wy.lineWidth = 1.5, Wy.beginPath(), Wy.moveTo(fy.cx, fy.cy), Wy.lineTo(ey.cx, ey.cy), Wy.moveTo(cb.cx, cb.cy), Wy.lineTo(qb.cx, qb.cy), Wy.stroke(), Wy.strokeStyle = "#fcd373", Wy.lineWidth = 2, Wy.beginPath();
          for (let bb = 0; bb <= 50; bb++) {
            const yb = Wf(Py, oy, By, Ky, bb / 50),
              Uy = yZ(yb.x, yb.y);
            0 === bb ? Wy.moveTo(Uy.cx, Uy.cy) : Wy.lineTo(Uy.cx, Uy.cy)
          }
          Wy.stroke();
          const sy = (yb, bb, Uy) => {
            Wy.beginPath(), Wy.arc(yb, bb, Uy ? 6 : 5, 0, 2 * Math.PI), Wy.fillStyle = Uy ? "#ffb914" : "#fcd373", Wy.fill(), Wy.strokeStyle = "#1a1f2e", Wy.lineWidth = 1.5, Wy.stroke()
          };
          sy(ey.cx, ey.cy, "p1" === Zy), sy(qb.cx, qb.cy, "p2" === Zy)
        }), [Zy, bb]);
      (0, Uy.useEffect)((() => {
        Py()
      }), [Py]);
      const By = (0, Uy.useCallback)(((yb, Uy) => {
          const Zy = hy.current,
            cb = fy.current;
          if (!Zy || !cb) return;
          const Py = Zy.getBoundingClientRect(),
            {
              x: oy,
              y: By
            } = bZ(yb, Uy, Py);
          Wy("p1" === cb ? [oy, By, bb[2], bb[3]] : [bb[0], bb[1], oy, By])
        }), [Wy, bb]),
        Ky = (0, Uy.useCallback)((yb => {
          const Wy = hy.current;
          if (!Wy) return;
          const Uy = Wy.getBoundingClientRect();
          let {
            x: Zy,
            y: Py
          } = bZ(yb.clientX, yb.clientY, Uy);
          Zy = JW.c.clamp(Zy, 0, 1), Py = JW.c.clamp(Py, 0, 1);
          const [oy, Ky, ey, qb] = bb.map((yb => JW.c.clamp(yb, 0, 1))), sy = Math.hypot(Zy - oy, Py - Ky), Sy = Math.hypot(Zy - ey, Py - qb), Ey = sy <= Sy ? "p1" : "p2";
          ("p1" === Ey ? sy : Sy) > .12 || (fy.current = Ey, cb(Ey), Wy.setPointerCapture(yb.pointerId), By(yb.clientX, yb.clientY))
        }), [By, bb]),
        ey = (0, Uy.useCallback)((yb => {
          fy.current && By(yb.clientX, yb.clientY)
        }), [By]),
        qb = (0, Uy.useCallback)((yb => {
          fy.current = null, cb(null), yb.currentTarget.hasPointerCapture(yb.pointerId) && yb.currentTarget.releasePointerCapture(yb.pointerId)
        }), []);
      return (0, oy.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, oy.jsx)("canvas", {
          ref: hy,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: xf,
            height: xf
          },
          onPointerDown: Ky,
          onPointerMove: ey,
          onPointerUp: qb,
          onPointerCancel: qb
        }), (0, oy.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: dh(bb)
        })]
      })
    }));
    var hf = Wy(1490),
      ff = Wy(1477);
    const Zf = 12;

    function cZ(yb) {
      return {
        left: yb.left + yb.width / 2,
        top: yb.top - 8
      }
    }

    function Pf(yb, bb) {
      const [Wy, hy] = (0, Uy.useState)(null);
      return (0, Uy.useLayoutEffect)((() => {
        const Wy = yb.current;
        if (!Wy) return;
        const {
          width: Uy,
          height: fy
        } = Wy.getBoundingClientRect();
        hy(function(yb, bb, Wy) {
          const Uy = window.innerWidth,
            hy = window.innerHeight,
            fy = bb / 2;
          let Zy = yb.left + yb.width / 2;
          Zy = Math.max(Zf + fy, Math.min(Zy, Uy - Zf - fy));
          const cb = yb.top - 8 - Zf,
            Py = hy - yb.bottom - 8 - Zf,
            oy = cb < Wy && Py >= cb;
          let By;
          oy ? (By = yb.bottom + 8, By + Wy > hy - Zf && (By = hy - Zf - Wy), By = Math.max(Zf, By)) : (By = yb.top - 8, By - Wy < Zf && (By = Zf + Wy));
          return {
            left: Zy,
            top: By,
            placeBelow: oy
          }
        }(bb, Uy, fy))
      }), [bb, yb]), Wy
    }

    function of(yb, bb, Wy) {
      (0, Uy.useEffect)((() => (0, ff.e)("pointerdown", (Uy => {
        var hy, fy;
        const Zy = Uy.target;
        Zy instanceof Node && (null !== (hy = yb.current) && void 0 !== hy && hy.contains(Zy) || null !== Wy && void 0 !== Wy && null !== (fy = Wy.current) && void 0 !== fy && fy.contains(Zy) || (0, hf.i)(Zy) || bb())
      }))), [Wy, bb, yb])
    }

    function Bf(yb) {
      let {
        label: bb,
        value: Wy,
        onChange: Uy
      } = yb;
      return (0, oy.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, oy.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: bb
        }), (0, oy.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((yb, bb) => (0, oy.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, oy.jsx)("span", {
              children: yb
            }), (0, oy.jsx)("input", {
              type: "number",
              step: "any",
              value: Wy[bb],
              onChange: yb => {
                const hy = Number.parseFloat(yb.target.value);
                if (Number.isNaN(hy)) return;
                const fy = [Wy[0], Wy[1], Wy[2]];
                fy[bb] = hy, Uy(fy)
              }
            })]
          }, yb)))
        })]
      })
    }
    const Kf = (0, Uy.memo)((function(yb) {
        var bb, Wy, hy;
        let {
          keyframe: Zy,
          anchor: cb,
          hasOutgoingSegment: Py,
          onClose: By,
          onApply: Ky,
          onDelete: ey,
          onUseCurrentCamera: qb
        } = yb;
        const sy = (0, Uy.useRef)(null),
          Sy = Pf(sy, cb.rect),
          [Ey, ly] = (0, Uy.useState)((() => [Zy.position[0], Zy.position[1], Zy.position[2]])),
          [mb, Cy] = (0, Uy.useState)((() => [Zy.direction[0], Zy.direction[1], Zy.direction[2]])),
          [Ty, Vy] = (0, Uy.useState)((() => Zy.easing));
        (0, Uy.useEffect)((() => {
          ly([Zy.position[0], Zy.position[1], Zy.position[2]]), Cy([Zy.direction[0], Zy.direction[1], Zy.direction[2]]), Vy(Zy.easing)
        }), [Zy]), of(sy, By);
        const Jy = (0, Uy.useCallback)((() => {
            Ky({
              Zb: Zy.Zb,
              position: Ey,
              direction: mb,
              easing: Ty
            }), By()
          }), [mb, Ty, Zy.Zb, Ky, By, Ey]),
          gb = (0, Uy.useCallback)((() => {
            ey(Zy.Zb), By()
          }), [Zy.Zb, ey, By]),
          Gy = (0, Uy.useCallback)((() => {
            const yb = qb();
            yb && (ly([yb.position[0], yb.position[1], yb.position[2]]), Cy([yb.direction[0], yb.direction[1], yb.direction[2]]))
          }), [qb]),
          Oy = cZ(cb.rect);
        return (0, oy.jsxs)("div", {
          ref: sy,
          className: fy()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (bb = null === Sy || void 0 === Sy ? void 0 : Sy.placeBelow) && void 0 !== bb && bb,
            Positioned: null !== Sy
          }),
          style: {
            left: `${null!==(Wy=null===Sy||void 0===Sy?void 0:Sy.left)&&void 0!==Wy?Wy:Oy.left}px`,
            top: `${null!==(hy=null===Sy||void 0===Sy?void 0:Sy.top)&&void 0!==hy?hy:Oy.top}px`
          },
          onPointerDown: yb => {
            yb.stopPropagation()
          },
          children: [(0, oy.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, oy.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, oy.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", cb.Zb]
            })]
          }), (0, oy.jsx)(Bf, {
            label: "Position",
            value: Ey,
            onChange: ly
          }), (0, oy.jsx)(Bf, {
            label: "Direction",
            value: mb,
            onChange: Cy
          }), Py && (0, oy.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, oy.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, oy.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: Ih.map((yb => {
                const bb = (Wy = Ty, Uy = yb.easing, Wy[0] === Uy[0] && Wy[1] === Uy[1] && Wy[2] === Uy[2] && Wy[3] === Uy[3]);
                var Wy, Uy;
                return (0, oy.jsx)(qU.M, {
                  className: fy()("ReplayKeyframePopoverPreset", {
                    Active: bb
                  }),
                  onClick: () => {
                    Vy(yb.easing)
                  },
                  children: yb.label
                }, yb.label)
              }))
            }), (0, oy.jsx)(Uf, {
              value: Ty,
              onChange: Vy
            })]
          }), (0, oy.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, oy.jsx)(qU.f, {
              className: "ReplayViewerCompactButton",
              onClick: Gy,
              children: "Use current view"
            }), (0, oy.jsx)(qU.i, {
              className: "ReplayViewerCompactButton",
              onClick: Jy,
              children: "Apply"
            }), (0, oy.jsx)(qU.C, {
              className: "ReplayViewerCompactButton",
              onClick: gb,
              children: "Delete"
            })]
          })]
        })
      })),
      ef = (0, Uy.memo)((function(yb) {
        var bb, Wy, hy;
        let {
          anchor: Zy,
          hasPlaybackMark: cb,
          onClose: Py,
          onMark: By,
          onZoom: Ky,
          onCrop: ey,
          onDeleteKeyframes: qb,
          onClearMark: sy
        } = yb;
        const Sy = (0, Uy.useRef)(null),
          Ey = Pf(Sy, Zy.rect),
          ly = cZ(Zy.rect),
          mb = {
            startTick: Zy.startTick,
            endTick: Zy.endTick
          },
          Cy = Zy.endTick > Zy.startTick;
        return of(Sy, Py), (0, oy.jsx)("div", {
          ref: Sy,
          className: fy()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (bb = null === Ey || void 0 === Ey ? void 0 : Ey.placeBelow) && void 0 !== bb && bb,
            Positioned: null !== Ey
          }),
          style: {
            left: `${null!==(Wy=null===Ey||void 0===Ey?void 0:Ey.left)&&void 0!==Wy?Wy:ly.left}px`,
            top: `${null!==(hy=null===Ey||void 0===Ey?void 0:Ey.top)&&void 0!==hy?hy:ly.top}px`
          },
          onPointerDown: yb => {
            yb.stopPropagation()
          },
          children: (0, oy.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, oy.jsx)(qU.i, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                By(mb)
              },
              disabled: !Cy,
              children: (0, oy.jsx)("span", {
                children: " Play range "
              })
            }), (0, oy.jsx)(qU.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Ky(mb)
              },
              children: (0, oy.jsx)("span", {
                children: " Zoom "
              })
            }), (0, oy.jsx)(qU.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                ey(mb)
              },
              disabled: !Cy,
              children: (0, oy.jsx)("span", {
                children: " Crop "
              })
            }), (0, oy.jsx)(qU.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                qb(mb)
              },
              children: (0, oy.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), cb && (0, oy.jsx)(qU.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                sy()
              },
              children: (0, oy.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      qZ = (0, Uy.memo)((function(yb) {
        var bb, Wy;
        let {
          maxTick: hy,
          displayTick: Zy,
          tWy: cb,
          cameraKeyframes: Py,
          playbackMark: By,
          onSeek: Ky,
          onPause: ey,
          onScrubTickChange: qb,
          onMoveCameraKeyframe: sy,
          onUpdateCameraKeyframe: Sy,
          onDeleteCameraKeyframe: Ey,
          onUseCurrentCamera: ly,
          onMarkRange: mb,
          onCropRange: Cy,
          onDeleteKeyframesInRange: Ty,
          onClearMark: Vy,
          zoomLevel: Jy,
          onZoomLevelChange: gb
        } = yb;
        const Gy = (0, Uy.useRef)(null),
          Oy = (0, Uy.useRef)(null),
          Ry = (0, Uy.useRef)(!1),
          vb = (0, Uy.useRef)(!1),
          ib = (0, Uy.useRef)(Jy),
          My = (0, Uy.useRef)(null),
          Yy = (0, Uy.useRef)(null),
          Xy = (0, Uy.useRef)(null),
          ny = (0, Uy.useRef)(null),
          [uy, rb] = (0, Uy.useState)(null),
          [Hy, ab] = (0, Uy.useState)(Zy),
          [Fy, py] = (0, Uy.useState)(null),
          [Ly, Qy] = (0, Uy.useState)(null),
          [jb, Dy] = (0, Uy.useState)(null),
          [tb, wy] = (0, Uy.useState)(null),
          kb = (0, Uy.useMemo)((() => Py.map((yb => yb.Zb))), [Py]),
          Ny = null !== uy && void 0 !== uy ? uy : Zy,
          {
            viewStart: zb,
            viewEnd: Iy
          } = (0, Uy.useMemo)((() => function(yb) {
            const bb = yb.maxTick + 1,
              Wy = Math.max(1, Math.ceil(bb / yb.zoomLevel)),
              Uy = Math.floor(Wy / 2);
            let hy = yb.centerTick - Uy;
            return hy = Math.max(0, Math.min(hy, yb.maxTick - Wy + 1)), {
              viewStart: hy,
              viewEnd: Math.min(yb.maxTick, hy + Wy - 1)
            }
          }({
            maxTick: hy,
            zoomLevel: Jy,
            centerTick: Hy
          })), [hy, Jy, Hy]);
        (0, Uy.useEffect)((() => {
          if (null !== uy || null !== Yy.current || null !== Xy.current || null !== ny.current) return;
          if (Ry.current) return void(Ry.current = !1);
          if (vb.current) return void(vb.current = !1);
          const yb = ib.current !== Jy;
          ib.current = Jy, yb && ab(Zy)
        }), [Jy, Zy, uy]);
        const xb = (0, Uy.useCallback)((yb => {
            let bb = ph(yb, hy);
            return By && (bb = Math.max(By.inTick, Math.min(bb, By.outTick))), bb
          }), [hy, By]),
          Ay = (0, Uy.useCallback)(((yb, bb) => {
            const Wy = xb(yb);
            Ky(Wy), bb && ab(Wy)
          }), [xb, Ky]),
          dy = (0, Uy.useCallback)(((yb, bb) => {
            const Wy = xb(yb);
            rb(Wy), qb(Wy), Ay(Wy, bb)
          }), [xb, Ay, qb]),
          yW = (0, Uy.useCallback)((() => {
            rb((yb => (null !== yb && ab(yb), null))), qb(null)
          }), [qb]),
          bW = (0, Uy.useCallback)((() => {
            Dy(null), wy(null)
          }), []),
          Wb = (0, Uy.useCallback)((yb => {
            const bb = Gy.current;
            if (!bb) return 0;
            return ph(Qh(wh(yb, bb), zb, Iy), hy)
          }), [hy, Iy, zb]),
          Ub = (0, Uy.useCallback)((yb => {
            const bb = Oy.current;
            if (!bb) return 0;
            return ph(Qh(wh(yb, bb), 0, hy), hy)
          }), [hy]),
          hb = (0, Uy.useMemo)((() => {
            if (!Fy) return [...kb];
            const yb = kb.filter((yb => yb !== Fy.fromTick));
            return yb.push(Fy.previewTick), yb.sort(((yb, bb) => yb - bb)), yb
          }), [kb, Fy]),
          fb = (0, Uy.useMemo)((() => {
            var yb;
            return Ly && null !== (yb = Py.find((yb => yb.Zb === Ly.Zb))) && void 0 !== yb ? yb : null
          }), [Py, Ly]),
          Zb = (0, Uy.useMemo)((() => !!fb && Py.some((yb => yb.Zb > fb.Zb))), [Py, fb]);
        (0, Uy.useEffect)((() => {
          Ly && !fb && Qy(null)
        }), [Ly, fb]), (0, Uy.useEffect)((() => {
          if (!tb) return () => {};
          const yb = yb => {
            "Escape" === yb.key && bW()
          };
          return window.addEventListener("keydown", yb), () => {
            window.removeEventListener("keydown", yb)
          }
        }), [bW, tb]);
        const cW = (0, Uy.useCallback)(((yb, bb) => {
            bW(), ey(), Ky(yb, {
              ignorePlaybackMark: !0
            }), Qy({
              Zb: yb,
              rect: bb.getBoundingClientRect()
            })
          }), [bW, ey, Ky]),
          Pb = (0, Uy.useCallback)(((yb, bb) => Wy => {
            0 === Wy.button && (Wy.stopPropagation(), Qy(null), bW(), ey(), My.current = {
              fromTick: yb,
              startX: Wy.clientX,
              startY: Wy.clientY,
              didDrag: !1,
              track: bb
            }, py({
              fromTick: yb,
              previewTick: yb,
              track: bb
            }), Wy.currentTarget.setPointerCapture(Wy.pointerId))
          }), [bW, ey]),
          ob = (0, Uy.useCallback)((yb => {
            if (!Fy) return;
            yb.stopPropagation();
            const bb = My.current;
            if (bb && !bb.didDrag) {
              const Wy = yb.clientX - bb.startX,
                Uy = yb.clientY - bb.startY;
              Math.hypot(Wy, Uy) > 5 && (bb.didDrag = !0)
            }
            const Wy = "detail" === Fy.track ? Wb(yb.clientX) : Ub(yb.clientX);
            Wy !== Fy.previewTick && py({
              ...Fy,
              previewTick: Wy
            })
          }), [Fy, Wb, Ub]),
          Bb = (0, Uy.useCallback)((yb => {
            if (!Fy) return;
            yb.stopPropagation();
            const bb = My.current,
              Wy = "detail" === Fy.track ? Wb(yb.clientX) : Ub(yb.clientX);
            bb && !bb.didDrag ? cW(bb.fromTick, yb.currentTarget) : Wy !== Fy.fromTick && sy(Fy.fromTick, Wy), py(null), My.current = null, yb.currentTarget.releasePointerCapture(yb.pointerId)
          }), [Fy, sy, cW, Wb, Ub]),
          Kb = (0, Uy.useCallback)((yb => {
            if (0 !== yb.button) return;
            Qy(null), ey();
            const bb = Wb(yb.clientX);
            Yy.current = {
              pointerId: yb.pointerId,
              startX: yb.clientX,
              startY: yb.clientY,
              startTick: bb,
              currentTick: bb,
              didSelect: !1
            }, Dy(null), wy(null), yb.currentTarget.setPointerCapture(yb.pointerId)
          }), [ey, Wb]),
          eb = (0, Uy.useCallback)((yb => {
            const bb = Yy.current;
            if (!bb || bb.pointerId !== yb.pointerId) return;
            const Wy = Wb(yb.clientX);
            if (bb.currentTick = Wy, !bb.didSelect) {
              const Wy = yb.clientX - bb.startX,
                Uy = yb.clientY - bb.startY;
              if (Math.hypot(Wy, Uy) <= 5) return;
              bb.didSelect = !0
            }
            const Uy = Math.min(bb.startTick, Wy),
              hy = Math.max(bb.startTick, Wy);
            Dy({
              startTick: Uy,
              endTick: hy
            })
          }), [Wb]),
          qW = (0, Uy.useCallback)((yb => {
            const bb = Yy.current;
            if (!bb || bb.pointerId !== yb.pointerId) return;
            if (Yy.current = null, yb.currentTarget.releasePointerCapture(yb.pointerId), !bb.didSelect) return bW(), void Ay(bb.startTick, !0);
            const Wy = Wb(yb.clientX),
              Uy = Math.min(bb.startTick, Wy),
              hy = Math.max(bb.startTick, Wy),
              fy = {
                startTick: Uy,
                endTick: hy
              };
            Dy(fy);
            const Zy = Gy.current;
            if (!Zy) return;
            const cb = Zy.getBoundingClientRect(),
              Py = Lh(Uy, zb, Iy) / 100,
              oy = Lh(hy, zb, Iy) / 100,
              By = cb.left + Py * cb.width,
              Ky = cb.left + oy * cb.width;
            wy({
              ...fy,
              rect: new DOMRect(By, cb.top, Math.max(Ky - By, 1), cb.height)
            })
          }), [bW, Ay, Wb, Iy, zb]),
          sb = (0, Uy.useCallback)((yb => bb => {
            if (0 !== bb.button) return;
            bb.stopPropagation(), Qy(null), bW(), ey(), Xy.current = {
              pointerId: bb.pointerId,
              track: yb
            }, bb.currentTarget.setPointerCapture(bb.pointerId);
            const Wy = "detail" === yb ? Wb(bb.clientX) : Ub(bb.clientX);
            dy(Wy, !1)
          }), [bW, ey, dy, Wb, Ub]),
          Sb = (0, Uy.useCallback)((yb => {
            const bb = Xy.current;
            if (!bb || bb.pointerId !== yb.pointerId) return;
            yb.stopPropagation();
            const Wy = "detail" === bb.track ? Wb(yb.clientX) : Ub(yb.clientX);
            dy(Wy, !1)
          }), [dy, Wb, Ub]),
          Eb = (0, Uy.useCallback)((yb => {
            const bb = Xy.current;
            bb && bb.pointerId === yb.pointerId && (yb.stopPropagation(), Xy.current = null, yb.currentTarget.releasePointerCapture(yb.pointerId), yW())
          }), [yW]),
          lb = (0, Uy.useCallback)((yb => {
            0 === yb.button && (bW(), ey(), ny.current = {
              pointerId: yb.pointerId
            }, yb.currentTarget.setPointerCapture(yb.pointerId), dy(Ub(yb.clientX), !0))
          }), [bW, ey, dy, Ub]),
          mW = (0, Uy.useCallback)((yb => {
            const bb = ny.current;
            bb && bb.pointerId === yb.pointerId && dy(Ub(yb.clientX), !0)
          }), [dy, Ub]),
          Cb = (0, Uy.useCallback)((yb => {
            const bb = ny.current;
            bb && bb.pointerId === yb.pointerId && (ny.current = null, yb.currentTarget.releasePointerCapture(yb.pointerId), yW())
          }), [yW]),
          Tb = (0, Uy.useCallback)((yb => {
            const bb = Math.max(1, yb.endTick - yb.startTick + 1),
              Wy = hy + 1,
              Uy = Wy / bb,
              fy = Math.max(1, Math.ceil(Wy / Uy)),
              Zy = yb.startTick + Math.floor((fy - 1) / 2);
            vb.current = !0, ib.current = Uy, ab(ph(Zy, hy)), gb(Uy), bW()
          }), [bW, hy, gb]),
          Vb = (0, Uy.useCallback)((yb => {
            mb(yb), bW()
          }), [bW, mb]),
          Jb = (0, Uy.useCallback)((yb => {
            Cy(yb), bW()
          }), [bW, Cy]),
          gW = (0, Uy.useCallback)((yb => {
            Ty(yb), bW()
          }), [bW, Ty]),
          Gb = (0, Uy.useCallback)((() => {
            Vy(), bW()
          }), [bW, Vy]);
        (0, Uy.useEffect)((() => {
          const yb = Gy.current;
          if (!yb) return () => {};
          const bb = bb => {
            bb.preventDefault();
            const Wy = ph(Qh(wh(bb.clientX, yb), zb, Iy), hy),
              Uy = bb.deltaY < 0 ? "in" : "out",
              fy = tf(Jy, Uy);
            fy !== Jy && (Ry.current = !0, ab(Wy), gb(fy))
          };
          return yb.addEventListener("wheel", bb, {
            passive: !1
          }), () => {
            yb.removeEventListener("wheel", bb)
          }
        }), [hy, gb, Iy, zb, Jy]);
        const Ob = Lh(Ny, zb, Iy),
          Rb = kf(Ny, hy),
          vW = kf(zb, hy),
          iW = hy > 0 ? kf(Iy, hy) : 100,
          Mb = null !== By,
          Yb = null !== (bb = null === By || void 0 === By ? void 0 : By.inTick) && void 0 !== bb ? bb : 0,
          Xb = null !== (Wy = null === By || void 0 === By ? void 0 : By.outTick) && void 0 !== Wy ? Wy : hy,
          nb = kf(Yb, hy),
          ub = Math.max(kf(Xb, hy) - nb, 0),
          rW = Lh(Math.max(Yb, zb), zb, Iy),
          Hb = Lh(Math.min(Xb, Iy), zb, Iy),
          aW = Math.max(Hb - rW, 0),
          Fb = Mb && Xb >= zb && Yb <= Iy,
          pb = Lh(Yb, zb, Iy),
          Lb = Lh(Xb, zb, Iy),
          Qb = Mb && Yb >= zb && Yb <= Iy,
          jW = Mb && Xb >= zb && Xb <= Iy,
          Db = kf(Yb, hy),
          tW = kf(Xb, hy),
          wb = null !== jb && void 0 !== jb ? jb : tb ? {
            startTick: tb.startTick,
            endTick: tb.endTick
          } : null,
          kW = wb ? Lh(Math.max(wb.startTick, zb), zb, Iy) : 0,
          Nb = wb ? Lh(Math.min(wb.endTick, Iy), zb, Iy) : 0,
          zW = Math.max(Nb - kW, 0),
          Ib = null !== wb && wb.endTick >= zb && wb.startTick <= Iy,
          xW = (0, Uy.useMemo)((() => Nh(0, hy, cb)), [hy, cb]),
          Ab = (0, Uy.useMemo)((() => Nh(zb, Iy, cb)), [zb, Iy, cb]),
          db = (0, Uy.useMemo)((() => hb.filter((yb => yb >= zb && yb <= Iy))), [hb, Iy, zb]),
          yU = (0, Uy.useCallback)(((yb, bb, Wy) => {
            const Uy = "detail" === bb ? Lh(yb, zb, Iy) : kf(yb, hy),
              Zy = null !== Fy && Wy === Fy.fromTick,
              cb = null !== Ly && Ly.Zb === Wy;
            return (0, oy.jsx)("button", {
              type: "button",
              className: fy()("ReplayTimelineCameraKeyframeMarker", "detail" === bb ? "Detail" : "Overview", {
                Dragging: Zy,
                Selected: cb
              }),
              style: {
                left: `${Uy}%`
              },
              onPointerDown: Pb(Wy, bb),
              onPointerMove: ob,
              onPointerUp: Bb,
              onPointerCancel: Bb,
              "aria-label": `Camera keyframe at tick ${Wy}`
            }, `cam-${bb}-${Wy}`)
          }), [Pb, Ly, Bb, Fy, hy, ob, Iy, zb]),
          bU = (0, Uy.useCallback)((yb => Fy && yb === Fy.previewTick ? Fy.fromTick : yb), [Fy]);
        return hy <= 0 ? null : (0, oy.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Ly && fb && (0, af.createPortal)((0, oy.jsx)(Kf, {
            keyframe: fb,
            anchor: Ly,
            hasOutgoingSegment: Zb,
            onClose: () => {
              Qy(null)
            },
            onApply: Sy,
            onDelete: Ey,
            onUseCurrentCamera: ly
          }), document.body), tb && (0, af.createPortal)((0, oy.jsx)(ef, {
            anchor: tb,
            hasPlaybackMark: Mb,
            onClose: bW,
            onMark: Vb,
            onZoom: Tb,
            onCrop: Jb,
            onDeleteKeyframes: gW,
            onClearMark: Gb
          }), document.body), (0, oy.jsxs)("div", {
            className: fy()("ReplayTimelineOverviewSection", {
              Hidden: Jy <= 1
            }),
            children: [(0, oy.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, oy.jsxs)("div", {
              ref: Oy,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: lb,
              onPointerMove: mW,
              onPointerUp: Cb,
              onPointerCancel: Cb,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": hy,
              "aria-valuenow": Ny,
              tabIndex: 0,
              children: [xW.map((yb => {
                const bb = kf(yb, hy);
                return (0, oy.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${bb}%`
                  }
                }, yb)
              })), Mb && (0, oy.jsxs)(oy.Fragment, {
                children: [(0, oy.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${nb}%`,
                    width: `${ub}%`
                  }
                }), (0, oy.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${Db}%`
                  },
                  "aria-hidden": !0
                }), (0, oy.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${tW}%`
                  },
                  "aria-hidden": !0
                })]
              }), hb.map((yb => yU(yb, "overview", bU(yb)))), (0, oy.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${vW}%`,
                  width: `${Math.max(iW-vW,.5)}%`
                }
              }), (0, oy.jsx)("button", {
                type: "button",
                className: fy()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== uy
                }),
                style: {
                  left: `${Rb}%`
                },
                onPointerDown: sb("overview"),
                onPointerMove: Sb,
                onPointerUp: Eb,
                onPointerCancel: Eb,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, oy.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, oy.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, oy.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, oy.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [jf(zb, cb), " \u2013 ", jf(Iy, cb), Jy > 1 && (0, oy.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: Dh(Jy)
                })]
              })]
            }), (0, oy.jsxs)("div", {
              ref: Gy,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Kb,
              onPointerMove: eb,
              onPointerUp: qW,
              onPointerCancel: qW,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": zb,
              "aria-valuemax": Iy,
              "aria-valuenow": Ny,
              tabIndex: 0,
              children: [Ab.map((yb => {
                const bb = Lh(yb, zb, Iy);
                return (0, oy.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${bb}%`
                  }
                }, yb)
              })), Fb && (0, oy.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${rW}%`,
                  width: `${aW}%`
                }
              }), Qb && (0, oy.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${pb}%`
                },
                "aria-label": `Play range start at tick ${Yb}`
              }), jW && (0, oy.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Lb}%`
                },
                "aria-label": `Play range end at tick ${Xb}`
              }), Ib && wb && (0, oy.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${kW}%`,
                  width: `${zW}%`
                }
              }), db.map((yb => yU(yb, "detail", bU(yb)))), (0, oy.jsx)("button", {
                type: "button",
                className: fy()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== uy
                }),
                style: {
                  left: `${Ob}%`
                },
                onPointerDown: sb("detail"),
                onPointerMove: Sb,
                onPointerUp: Eb,
                onPointerCancel: Eb,
                "aria-label": "Scrub playhead"
              })]
            }), (0, oy.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, oy.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      sf = (0, Uy.memo)((function(yb) {
        let {
          enabled: bb
        } = yb;
        const Wy = (0, Uy.useRef)(!1),
          hy = (0, Uy.useRef)(null),
          [Zy, cb] = (0, Uy.useState)(!1),
          Py = (0, Uy.useCallback)((yb => {
            bb && 0 === yb.button && (Wy.current = !0, cb(!0), hy.current = {
              x: yb.clientX,
              y: yb.clientY
            }, yb.currentTarget.setPointerCapture(yb.pointerId))
          }), [bb]),
          By = (0, Uy.useCallback)((yb => {
            if (!bb || !Wy.current || !hy.current) return;
            const Uy = yb.clientX - hy.current.x,
              fy = yb.clientY - hy.current.y;
            hy.current = {
              x: yb.clientX,
              y: yb.clientY
            }, ey.gameBridge.send("dragReplayCamera", {
              dx: Uy,
              dy: fy
            })
          }), [bb]),
          Ky = (0, Uy.useCallback)((yb => {
            Wy.current && (Wy.current = !1, cb(!1), hy.current = null, yb.currentTarget.releasePointerCapture(yb.pointerId))
          }), []);
        return bb ? (0, oy.jsx)("div", {
          className: fy()("ReplayViewerCameraDragSurface", {
            Dragging: Zy
          }),
          onPointerDown: Py,
          onPointerMove: By,
          onPointerUp: Ky,
          onPointerCancel: Ky,
          "aria-hidden": !0
        }) : null
      }));
    var Sf = Wy(35726),
      Ef = Wy(35728);
    const lf = (0, Uy.memo)((function(yb) {
        var bb, Wy, hy;
        let {
          anchorRect: Zy,
          anchorRef: Py,
          onClose: By
        } = yb;
        const Ky = (0, Uy.useRef)(null),
          ey = Pf(Ky, Zy),
          [qb, sy] = (0, Uy.useState)(Ef.d),
          Sy = (0, Uy.useMemo)((() => Object.values(qb).every((yb => yb))), [qb]);
        (0, cb.i)("replayViewer|uiVisibilityChanged", (() => {
          sy((0, Ef.d)())
        })), of(Ky, By, Py);
        const Ey = (0, Uy.useCallback)(((yb, bb) => {
            (0, Ef.g)(yb, bb), sy((0, Ef.d)())
          }), []),
          ly = (0, Uy.useCallback)((yb => {
            for (const {
                group: bb
              }
              of Sf.d)(0, Ef.g)(bb, yb);
            sy((0, Ef.d)())
          }), []),
          mb = cZ(Zy);
        return (0, af.createPortal)((0, oy.jsxs)("div", {
          ref: Ky,
          className: fy()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (bb = null === ey || void 0 === ey ? void 0 : ey.placeBelow) && void 0 !== bb && bb,
            Positioned: null !== ey
          }),
          style: {
            left: `${null!==(Wy=null===ey||void 0===ey?void 0:ey.left)&&void 0!==Wy?Wy:mb.left}px`,
            top: `${null!==(hy=null===ey||void 0===ey?void 0:ey.top)&&void 0!==hy?hy:mb.top}px`
          },
          onPointerDown: yb => {
            yb.stopPropagation()
          },
          children: [(0, oy.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, oy.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, oy.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, oy.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, oy.jsx)("input", {
                type: "checkbox",
                checked: Sy,
                onChange: yb => {
                  ly(yb.target.checked)
                }
              }), (0, oy.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), Sf.d.map((yb => {
              let {
                group: bb,
                label: Wy
              } = yb;
              return (0, oy.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, oy.jsx)("input", {
                  type: "checkbox",
                  checked: qb[bb],
                  onChange: yb => {
                    Ey(bb, yb.target.checked)
                  }
                }), (0, oy.jsx)("span", {
                  children: Wy
                })]
              }, bb)
            }))]
          })]
        }), document.body)
      })),
      mZ = (0, Uy.memo)((function(yb) {
        let {
          disabled: bb
        } = yb;
        const Wy = (0, Uy.useRef)(null),
          [hy, fy] = (0, Uy.useState)(!1),
          [Zy, cb] = (0, Uy.useState)(null),
          Py = (0, Uy.useCallback)((() => {
            Wy.current && (cb(Wy.current.getBoundingClientRect()), fy((yb => !yb)))
          }), []),
          By = (0, Uy.useCallback)((() => {
            fy(!1)
          }), []);
        return (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)("div", {
            ref: Wy,
            children: (0, oy.jsx)(qU.f, {
              className: "ReplayViewerActionButton",
              onClick: Py,
              disabled: bb,
              children: (0, oy.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), hy && Zy && (0, oy.jsx)(lf, {
            anchorRect: Zy,
            anchorRef: Wy,
            onClose: By
          })]
        })
      })),
      Cf = ["freeCamUp", "freeCamDown"];

    function Tf(yb, bb) {
      ey.gameBridge.send("holdReplayFreecamVertical", {
        action: yb,
        kW: bb
      })
    }
    const Vf = (0, Uy.memo)((function() {
        (0, Uy.useEffect)((() => () => {
          ! function() {
            ey.gameBridge.send("moveReplayFreecam", null);
            for (const yb of Cf) Tf(yb, !1)
          }()
        }), []);
        const yb = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("moveReplayFreecam", yb)
          }), []),
          bb = (0, Uy.useCallback)((yb => ({
            onTouchStart: bb => {
              bb.preventDefault(), bb.stopPropagation(), Tf(yb, !0)
            },
            onTouchEnd: bb => {
              bb.preventDefault(), bb.stopPropagation(), Tf(yb, !1)
            },
            onTouchCancel: bb => {
              bb.preventDefault(), bb.stopPropagation(), Tf(yb, !1)
            }
          })), []);
        return (0, oy.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, oy.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, oy.jsx)(eb, {
              onMove: yb,
              mode: "pinned"
            })
          }), (0, oy.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, oy.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...bb("freeCamUp"),
              children: (0, oy.jsx)(ab.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, oy.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...bb("freeCamDown"),
              children: (0, oy.jsx)(ab.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Jf = [],
      gZ = (0, Uy.memo)((function() {
        const yb = (0, Ny.k)();
        return (0, gb.e)("replayViewerRequested", (yb => {
          (0, Ny.g)("toggle" === yb ? !(0, Ny.e)() : "open" === yb)
        })), yb ? (0, oy.jsx)(Gf, {}) : null
      })),
      Gf = (0, Uy.memo)((function() {
        var yb, bb, Wy, hy, Zy, cb, Py, By, Ky, qb, sy, Sy;
        const Ey = Uy.useRef(null),
          [ly, mb] = (0, Uy.useState)(null),
          [Cy, Ty] = (0, Uy.useState)(1),
          [Vy, Jy] = (0, Uy.useState)(null),
          [Ry, vb] = (0, Uy.useState)(!1),
          {
            isTouchScreen: ib
          } = (0, Gy.h)(["isTouchScreen"]),
          My = (0, gb.j)("replay"),
          Yy = (0, gb.j)("replayEdits"),
          Xy = null !== My,
          ny = null !== (yb = null === My || void 0 === My ? void 0 : My.Zb) && void 0 !== yb ? yb : 0,
          uy = null !== (bb = null === My || void 0 === My ? void 0 : My.totalTicks) && void 0 !== bb ? bb : 0,
          rb = Math.max(0, uy - 1),
          Fy = null !== (Wy = null === My || void 0 === My ? void 0 : My.playing) && void 0 !== Wy && Wy,
          py = null !== (hy = null === My || void 0 === My ? void 0 : My.speed) && void 0 !== hy ? hy : 1,
          Ly = null !== (Zy = null === My || void 0 === My ? void 0 : My.tWy) && void 0 !== Zy ? Zy : 20,
          Qy = null !== Vy && void 0 !== Vy ? Vy : ny,
          jb = null !== (cb = null === My || void 0 === My ? void 0 : My.freecam) && void 0 !== cb && cb,
          Dy = null !== (Py = null === My || void 0 === My ? void 0 : My.cameraMode) && void 0 !== Py ? Py : "recording",
          tb = null !== (By = null === Yy || void 0 === Yy ? void 0 : Yy.cameraKeyframes) && void 0 !== By ? By : Jf,
          wy = null !== (Ky = null === Yy || void 0 === Yy ? void 0 : Yy.playbackMark) && void 0 !== Ky ? Ky : null,
          kb = null !== (qb = null === Yy || void 0 === Yy ? void 0 : Yy.fileName) && void 0 !== qb ? qb : null,
          zb = null !== (sy = null === Yy || void 0 === Yy ? void 0 : Yy.unsavedChanges) && void 0 !== sy && sy,
          Iy = null !== (Sy = null === Yy || void 0 === Yy ? void 0 : Yy.suggestSaveAs) && void 0 !== Sy && Sy,
          xb = (0, gb.j)("replayVideoExporting"),
          Ay = !xb && Xy && ("freecam" === Dy || ("recording" === Dy || "keyframe" === Dy) && !Fy),
          dy = ib && Xy && "freecam" === Dy && !xb && !Ry;
        (0, Hh.b)(!0, !0, "ReplayViewerOverlay"), (0, Uy.useEffect)((() => {
          ey.gameBridge.send("syncReplayCameraMode", null)
        }), [jb]);
        const yW = (0, Uy.useCallback)(((yb, bb) => {
            ey.gameBridge.send("seekReplay", {
              Zb: yb,
              ignorePlaybackMark: null === bb || void 0 === bb ? void 0 : bb.ignorePlaybackMark
            })
          }), []),
          bW = (0, Uy.useCallback)((() => {
            ey.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Wb = (0, Uy.useCallback)(((yb, bb) => {
            ey.gameBridge.send("moveReplayCameraKeyframe", {
              from: yb,
              to: bb
            })
          }), []),
          Ub = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("setReplayCameraKeyframe", yb)
          }), []),
          hb = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("deleteReplayCameraKeyframes", {
              start: yb,
              end: yb
            })
          }), []),
          fb = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("deleteReplayCameraKeyframes", {
              start: yb.startTick,
              end: yb.endTick
            })
          }), []),
          Zb = (0, Uy.useCallback)((() => ey.gameBridge.lookup("replayCamera", null)), []),
          cW = (0, Uy.useCallback)((yb => {
            Jy(yb)
          }), []),
          Pb = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("setReplayPlaybackMark", {
              inTick: yb.startTick,
              outTick: yb.endTick
            })
          }), []),
          ob = (0, Uy.useCallback)((() => {
            ey.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Bb = (0, Uy.useCallback)((yb => {
            const bb = ey.gameBridge.latest("replay");
            if (null === bb || yb.endTick <= yb.startTick) return;
            const Wy = yb.startTick,
              Uy = yb.endTick;
            XU.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((yb => {
              var hy;
              if (!0 !== yb) return;
              if ((null === (hy = ey.gameBridge.latest("replay")) || void 0 === hy ? void 0 : hy.id) !== bb.id) return;
              ey.gameBridge.send("cropReplay", {
                start: Wy,
                end: Uy
              }) && (Jy(null), Ty(1))
            }))
          }), []),
          Kb = (0, Uy.useCallback)(((yb, bb) => {
            mb(null), Ty(1), Jy(null), (0, Oh.b)().open(yb, bb).catch((yb => {
              console.error(yb), mb(yb instanceof Error ? yb.message : "Failed to parse recording")
            }))
          }), []),
          eb = (0, Uy.useCallback)(((yb, bb) => {
            null !== ey.gameBridge.latest("connectedGame").websocketUrl ? XU.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((Wy => {
              !0 === Wy && Kb(yb, bb)
            })) : Kb(yb, bb)
          }), [Kb]),
          qW = (0, Uy.useCallback)((yb => {
            var bb;
            const Wy = null === (bb = yb.target.files) || void 0 === bb ? void 0 : bb[0];
            if (yb.target.value = "", !Wy) return;
            const Uy = new FileReader;
            Uy.onload = () => {
              eb(new Uint8Array(Uy.result), {
                fileName: Wy.name
              })
            }, Uy.onerror = () => {
              mb("Failed to read file")
            }, Uy.readAsArrayBuffer(Wy)
          }), [eb]),
          sb = (0, Uy.useCallback)((() => {
            const yb = () => {
              var yb;
              null === (yb = Ey.current) || void 0 === yb || yb.click()
            };
            (0, Mh.i)() ? (0, Mh.e)().then((yb => {
              yb && eb(yb.bytes, {
                fileHandle: yb.handle
              })
            })).catch((bb => {
              console.error(bb), yb()
            })): yb()
          }), [eb]),
          Sb = (0, Uy.useCallback)((async function() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let bb;
            try {
              bb = await rf(yb, {
                files: (0, Oh.b)(),
                pickerSupported: Mh.i,
                chooseFile: Mh.c,
                write: Mh.j,
                download: vf.i,
                onFallback: console.error
              })
            } catch (Wy) {
              return void(yb => {
                console.error(yb), XU.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: Xh(yb),
                  confirmText: "OK"
                })
              })(Wy)
            }
            "written" !== bb && "downloaded" !== bb || (() => {
              const yb = XU.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                yb.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Eb = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("replayAction", yb)
          }), []),
          lb = (0, Uy.useCallback)((yb => {
            Ty((bb => tf(bb, yb)))
          }), []),
          mW = (0, Uy.useCallback)((yb => {
            if (!ey.gameBridge.latest("replayVideoExporting")) switch (yb) {
              case "replayLoad":
                sb();
                break;
              case "replaySave":
                Sb(!1);
                break;
              case "replaySaveAs":
                Sb(!0);
                break;
              case "replayTimelineZoomIn":
                lb("in");
                break;
              case "replayTimelineZoomOut":
                lb("out")
            }
          }), [sb, Sb, lb]);
        (0, gb.e)("replayUiActionRequested", mW);
        const Cb = (0, Uy.useCallback)((yb => {
            ey.gameBridge.send("setReplayCameraMode", yb)
          }), []),
          Tb = Xy ? qU.f : qU.i,
          Vb = zb && !Iy ? qU.i : qU.f,
          Jb = zb && Iy ? qU.i : qU.f;
        return (0, oy.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, oy.jsx)(sf, {
            enabled: Ay
          }), dy && (0, oy.jsx)(Vf, {}), (0, oy.jsx)("input", {
            ref: Ey,
            type: "file",
            accept: vf.e,
            className: "ReplayViewerFileInput",
            onChange: qW
          }), (0, oy.jsxs)("div", {
            className: fy()("ReplayViewerBar", {
              Collapsed: Ry
            }),
            children: [(0, oy.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Ry ? vb(!1) : Xy ? vb(!0) : (0, Ny.c)()
              },
              "aria-expanded": !Ry,
              "aria-label": Ry ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, oy.jsx)(ab.e, {
                name: Ry ? "angle-up" : "angle-down"
              })
            }), !Ry && (0, oy.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Xy && uy > 0 && (0, oy.jsx)(qZ, {
                maxTick: rb,
                displayTick: Qy,
                tWy: Ly,
                cameraKeyframes: tb,
                playbackMark: wy,
                onSeek: yW,
                onPause: bW,
                onScrubTickChange: cW,
                onMoveCameraKeyframe: Wb,
                onUpdateCameraKeyframe: Ub,
                onDeleteCameraKeyframe: hb,
                onUseCurrentCamera: Zb,
                onMarkRange: Pb,
                onCropRange: Bb,
                onDeleteKeyframesInRange: fb,
                onClearMark: ob,
                zoomLevel: Cy,
                onZoomLevelChange: Ty
              }, rb), (0, oy.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, oy.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, oy.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Xy && (0, oy.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== kb && void 0 !== kb ? kb : "Unsaved recording", zb ? " *" : ""]
                    }), (0, oy.jsxs)(Tb, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        mW("replayLoad")
                      },
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, oy.jsxs)(qU.f, {
                      className: "ReplayViewerActionButton",
                      onClick: Ny.c,
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, oy.jsxs)(Vb, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        mW("replaySave")
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, oy.jsxs)(qU.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ey.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, oy.jsxs)(Jb, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        mW("replaySaveAs")
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, oy.jsxs)(qU.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        ey.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Xy || 0 === uy || xb,
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, oy.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, oy.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, oy.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, oy.jsx)(Oy.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, oy.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, oy.jsx)(Hy.f, {
                        tooltipInner: (0, oy.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, oy.jsxs)(qU.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Dy,
                          onClick: () => {
                            Cb("recording")
                          },
                          disabled: !Xy,
                          children: ["Recorded ", (0, oy.jsx)(ab.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, oy.jsx)(Hy.f, {
                        tooltipInner: (0, oy.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, oy.jsxs)(qU.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Dy,
                          onClick: () => {
                            Cb("freecam")
                          },
                          disabled: !Xy,
                          children: ["Free ", (0, oy.jsx)(ab.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, oy.jsx)(Hy.f, {
                        tooltipInner: (0, oy.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, oy.jsxs)(qU.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Dy,
                          onClick: () => {
                            Cb("keyframe")
                          },
                          disabled: !Xy,
                          children: ["Preview ", (0, oy.jsx)(ab.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, oy.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, oy.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, oy.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, oy.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: jf(Qy, Ly)
                      }), (0, oy.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, oy.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: jf(rb, Ly)
                      })]
                    }), (0, oy.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Qy, " / ", rb]
                    })]
                  }), (0, oy.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, oy.jsxs)(qU.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Eb("replaySkipBack")
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsxs)("span", {
                        children: [" ", (0, oy.jsx)(ab.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, oy.jsx)(Oy.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, oy.jsxs)(qU.i, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        ey.gameBridge.send("setReplayPlaying", !Fy)
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsxs)("span", {
                        children: [" ", Fy ? (0, oy.jsx)(ab.e, {
                          name: "pause"
                        }) : (0, oy.jsx)(ab.e, {
                          name: "play"
                        }), " "]
                      }), (0, oy.jsx)(Oy.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, oy.jsxs)(qU.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Eb("replaySkipForward")
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsxs)("span", {
                        children: [" ", (0, oy.jsx)(ab.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, oy.jsx)(Oy.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, oy.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, oy.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, oy.jsxs)(qU.i, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Eb("replayRecordKeyframe")
                      },
                      disabled: !Xy,
                      children: [(0, oy.jsx)(Oy.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, oy.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, oy.jsx)(mZ, {
                      disabled: !Xy
                    }), wy && (0, oy.jsx)(qU.M, {
                      className: "ReplayViewerActionButton",
                      onClick: ob,
                      disabled: !Xy,
                      children: (0, oy.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, oy.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, oy.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, oy.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, oy.jsx)(qU.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Eb("replaySpeedDown")
                        },
                        disabled: !Xy || (0, Rh.d)(py),
                        children: (0, oy.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, oy.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [py, "\xd7"]
                      }), (0, oy.jsx)(qU.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Eb("replaySpeedUp")
                        },
                        disabled: !Xy || (0, Rh.c)(py),
                        children: (0, oy.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, oy.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, oy.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, oy.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, oy.jsxs)(qU.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          mW("replayTimelineZoomOut")
                        },
                        disabled: !Xy || Cy <= Fh[0],
                        children: [(0, oy.jsx)("span", {
                          children: " \u2212 "
                        }), (0, oy.jsx)(Oy.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, oy.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: Dh(Cy)
                      }), (0, oy.jsxs)(qU.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          mW("replayTimelineZoomIn")
                        },
                        disabled: !Xy || Cy >= Fh[Fh.length - 1],
                        children: [(0, oy.jsx)("span", {
                          children: " + "
                        }), (0, oy.jsx)(Oy.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, oy.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Xy && "Load a recording to begin playback"
              }), ly && (0, oy.jsx)("div", {
                className: "ReplayViewerError",
                children: ly
              })]
            })]
          })]
        })
      }));
    var Of = Wy(1177);

    function Rf() {
      const [, yb] = (0, Uy.useState)(0);
      return (0, cb.i)("replayViewer|uiVisibilityChanged", (() => {
          yb((yb => yb + 1))
        })), (0, cb.i)("replayViewer|replayLoaded", (() => {
          yb((yb => yb + 1))
        })),
        function() {
          if (!(0, Of.f)()) return {};
          const yb = {
              [Sf.b]: "true"
            },
            bb = (0, Ef.d)();
          for (const {
              group: Wy,
              dataAttr: Uy
            }
            of Sf.d) Uy && !bb[Wy] && (yb[Uy] = "true");
          return yb
        }()
    }
    var vZ = Wy(8403),
      iZ = Wy(1696),
      Mf = Wy(7857),
      Yf = Wy(7846),
      Xf = Wy(1708);
    const nf = (0, Uy.memo)((function() {
      var yb, bb, Wy;
      const hy = (0, Cy.k)("customButtons");
      (0, Uy.useEffect)((() => hy ? (ey.gameBridge.send("bindCustomButtonKeys", hy.filter(Mf.f).map((yb => {
        let {
          id: bb,
          keycode: Wy
        } = yb;
        return {
          id: bb,
          keycode: Wy
        }
      }))), () => {
        ey.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [hy]);
      const fy = null !== (yb = null === hy || void 0 === hy ? void 0 : hy.filter(Mf.f)) && void 0 !== yb ? yb : [],
        Zy = (0, Yf.j)(),
        cb = null !== (bb = null === (Wy = (0, Xf.d)()) || void 0 === Wy ? void 0 : Wy.hideButtonHints) && void 0 !== bb && bb,
        Py = "customButton" !== (null === Zy || void 0 === Zy ? void 0 : Zy.kind) || cb ? null : Zy.id,
        By = fy.length > 0,
        Ky = (0, Uy.useRef)(null);
      return (0, Uy.useLayoutEffect)((() => {
        if (!By) return () => {};
        const yb = Ky.current,
          bb = yb.closest(".InGameUi"),
          Wy = () => {
            bb.style.setProperty("--custom-buttons-top", `${yb.offsetTop}px`)
          };
        Wy();
        const Uy = new ResizeObserver(Wy);
        return Uy.observe(yb), Uy.observe(yb.parentElement), () => {
          Uy.disconnect(), bb.style.removeProperty("--custom-buttons-top")
        }
      }), [By]), (0, oy.jsx)("div", {
        ref: Ky,
        className: "" + ((0, zh.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: fy.map((yb => {
          var bb, Wy;
          return (0, oy.jsx)(uf, {
            button: yb,
            padGlyph: yb.id === Py && null !== (bb = null === (Wy = (0, Qy.g)()) || void 0 === Wy ? void 0 : Wy.getBoundButton("actionButton")) && void 0 !== bb ? bb : null
          }, yb.id)
        }))
      })
    }));

    function uf(yb) {
      let {
        button: bb,
        padGlyph: Wy
      } = yb;
      const hy = (0, Uy.useRef)(null),
        fy = () => {
          null !== hy.current && (hy.current = null, ey.gameBridge.send("pressCustomButton", {
            id: bb.id,
            down: !1
          }))
        };
      (0, Uy.useEffect)((() => fy), []);
      const Zy = Yb(fy, {
          pressesOnPointerDown: !0
        }),
        cb = yb => {
          hy.current === yb.pointerId && fy()
        };
      return (0, oy.jsxs)("div", {
        className: "CustomIcon",
        ...Zy,
        onLostPointerCapture: cb,
        children: [(0, oy.jsx)(iZ.e, {
          icon: bb.icon,
          keyboardHint: (0, Mf.b)(bb.keycode),
          padGlyph: Wy,
          onPointerDown: yb => {
            try {
              yb.currentTarget.setPointerCapture(yb.pointerId)
            } catch {
              return
            }
            null === hy.current && ey.gameBridge.send("pressCustomButton", {
              id: bb.id,
              down: !0
            }), hy.current = yb.pointerId
          },
          onPointerUp: cb,
          onPointerCancel: cb,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), bb.description && (0, oy.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: bb.description
        })]
      })
    }
    var rZ = Wy(2001),
      Hf = Wy(35341),
      aZ = Wy(2431);
    const Ff = {
      frame: yb => {
        const bb = requestAnimationFrame((() => {
          yb()
        }));
        return () => {
          cancelAnimationFrame(bb)
        }
      },
      afterFrame: yb => {
        const bb = setTimeout(yb, 0);
        return () => {
          clearTimeout(bb)
        }
      }
    };
    class pf {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aZ.c,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ff;
        this.idle = yb, this.frames = bb, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (yb(), () => {}) : (bb ? this.waiting.unshift(yb) : this.waiting.push(yb), this.schedule(), () => {
          const bb = this.waiting.indexOf(yb);
          bb >= 0 && (this.waiting.splice(bb, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((yb => {
          for (this.cancelIdle = null; this.waiting.length > 0 && yb.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const yb = this.waiting.shift();
        try {
          yb()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var yb, bb, Wy;
        null === (yb = this.cancelIdle) || void 0 === yb || yb.call(this), this.cancelIdle = null, null === (bb = this.cancelFrame) || void 0 === bb || bb.call(this), this.cancelFrame = null, null === (Wy = this.cancelAfterFrame) || void 0 === Wy || Wy.call(this), this.cancelAfterFrame = null
      }
    }
    const Lf = (0, Uy.createContext)(null);

    function Qf(yb) {
      let {
        children: bb,
        first: Wy = !1
      } = yb;
      const hy = (0, Uy.useContext)(Lf),
        [fy, Zy] = (0, Uy.useState)(null === hy);
      return (0, Uy.useEffect)((() => {
        if (!fy && null !== hy) return hy.request((() => {
          Zy(!0)
        }), Wy)
      }), [Wy, fy, hy]), fy ? (0, Uy.createElement)(Uy.Fragment, null, bb) : null
    }
    const jZ = (0, Uy.memo)((function(yb) {
        let {
          shown: bb
        } = yb;
        const [Wy] = (0, Uy.useState)((() => new sy.h(bb))), [hy] = (0, Uy.useState)((() => bb ? null : new pf));
        return (0, Uy.useLayoutEffect)((() => {
          bb && (null === hy || void 0 === hy || hy.show(), Wy.show())
        }), [bb, Wy, hy]), (0, oy.jsx)(sy.d.Provider, {
          value: Wy,
          children: (0, oy.jsx)(Lf.Provider, {
            value: hy,
            children: (0, oy.jsx)(Df, {})
          })
        })
      })),
      Df = (0, Uy.memo)((function() {
        const {
          isUiHidden: yb,
          isUiHiddenByCamera: bb,
          isTouchScreen: Wy
        } = (0, Gy.h)(["isUiHidden", "isUiHiddenByCamera", "isTouchScreen"]), hy = (0, MU.c)(), Zy = Rf(), cb = (0, sy.l)(), Py = (0, Uy.useRef)(null), By = (0, Cy.k)("showKillfeed");
        return function() {
            const yb = (0, sy.l)();
            (0, Uy.useEffect)((() => yb.whenShown(Sy)), [yb])
          }(),
          function() {
            const yb = (0, Cy.k)("inventoryColourOverride");
            (0, Uy.useEffect)((() => {
              if (!yb) return;
              const {
                panel: bb,
                slot: Wy,
                slotSelected: Uy,
                slotUnavailable: hy
              } = Dy(yb), fy = document.documentElement.style;
              return fy.setProperty("--InventoryPanelColour", bb), fy.setProperty("--InventorySlotColour", Wy), fy.setProperty("--InventorySlotSelectedColour", Uy), fy.setProperty("--InventorySlotUnavailableColour", hy), () => {
                fy.removeProperty("--InventoryPanelColour"), fy.removeProperty("--InventorySlotColour"), fy.removeProperty("--InventorySlotSelectedColour"), fy.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [yb])
          }(), (0, Uy.useLayoutEffect)((() => cb.whenShown((() => {
            var yb;
            null === (yb = Py.current) || void 0 === yb || yb.classList.remove("PreMounted")
          }))), [cb]), (0, oy.jsxs)(oy.Fragment, {
            children: [(0, oy.jsxs)("div", {
              ref: Py,
              className: fy()("InGameUi", {
                PreMounted: !cb.shown,
                Hidden: yb,
                HiddenByCamera: bb
              }),
              ...Zy,
              children: [(0, oy.jsxs)(Qf, {
                children: [(0, oy.jsx)(iU.e, {}), (0, oy.jsx)(uW, {})]
              }), (0, oy.jsx)(sy.j, {
                children: (0, oy.jsx)(rU, {})
              }), (0, oy.jsxs)(Qf, {
                children: [(0, oy.jsx)(Uh, {}), (0, oy.jsx)(Bh, {}), Wy && (0, oy.jsx)(eh, {})]
              }), (0, oy.jsxs)(Qf, {
                children: [(0, oy.jsx)(hW, {}), (0, oy.jsx)(zU.e, {}), (0, oy.jsx)(WU, {})]
              }), (0, oy.jsx)(sy.j, {
                children: (0, oy.jsx)(vU, {})
              }), (0, oy.jsxs)(Qf, {
                children: [(0, oy.jsx)(cf.b, {}), (0, oy.jsx)(gZ, {})]
              }), (0, oy.jsxs)(Qf, {
                children: [(0, oy.jsx)(sh.e, {}), (0, oy.jsx)(Sh.d, {})]
              }), (0, oy.jsx)(Qf, {
                children: (0, oy.jsx)(ZW.k, {})
              }), (0, oy.jsx)(Qf, {
                children: (0, oy.jsx)(xZ, {
                  showChat: hy
                })
              }), (0, oy.jsxs)(Qf, {
                children: [(0, oy.jsx)(lh, {}), (0, oy.jsx)(Zh, {})]
              }), (0, oy.jsxs)("div", {
                className: fy()("RightElements", {
                  RightElementsTouchscreen: Wy
                }),
                "data-camera-keeper-host": "",
                children: [(0, oy.jsxs)("div", {
                  className: oU.i,
                  children: [(0, oy.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    children: [(0, oy.jsx)(Qf, {
                      children: (0, oy.jsx)(th.c, {})
                    }), (0, oy.jsxs)(Qf, {
                      children: [(0, oy.jsx)(Fy, {}), (0, oy.jsx)(BU.e, {})]
                    }), zh.featureFlags.useSocialFeatures && (0, oy.jsx)(sy.j, {
                      children: (0, oy.jsx)(KU.d, {
                        placement: "inGame"
                      })
                    }), zh.featureFlags.useSocialFeatures && (0, oy.jsx)(sy.j, {
                      children: (0, oy.jsx)(GU, {})
                    }), By && (0, oy.jsx)(sy.j, {
                      children: (0, oy.jsx)(NW, {})
                    }), (0, oy.jsx)(Qf, {
                      children: (0, oy.jsx)(vZ.e, {})
                    })]
                  }), zh.featureFlags.useSocialFeatures && (0, oy.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, oy.jsx)(Qf, {
                      children: (0, oy.jsx)(bf.e, {})
                    })
                  })]
                }), (0, oy.jsxs)(Qf, {
                  children: [(0, oy.jsx)(ZW.b, {
                    placement: "topRight"
                  }), (0, oy.jsx)(Af, {})]
                })]
              }), (0, oy.jsx)("div", {
                className: "LeftCentre",
                children: (0, oy.jsx)(Qf, {
                  children: (0, oy.jsx)(nf, {})
                })
              }), (0, oy.jsxs)("div", {
                className: "BottomCentre",
                children: [(0, oy.jsx)(sy.j, {
                  children: (0, oy.jsx)(Yy, {})
                }), (0, oy.jsx)(Qf, {
                  children: (0, oy.jsx)(wf, {})
                }), (0, oy.jsxs)("div", {
                  className: "BottomElements",
                  children: [(0, oy.jsx)("div", {
                    className: fy()("BottomLeftElements", {
                      Touch: Wy
                    }),
                    children: (0, oy.jsxs)(Qf, {
                      children: [(0, oy.jsx)(vh, {}), !Wy && (0, oy.jsx)(rZ.d, {})]
                    })
                  }), (0, oy.jsx)(Qf, {
                    children: (0, oy.jsx)(If, {})
                  }), (0, oy.jsx)(Qf, {
                    children: (0, oy.jsx)(hU, {
                      isTouchScreen: Wy
                    })
                  })]
                })]
              }), (0, oy.jsx)("div", {
                className: "MiddleLeft"
              }), Wy && (0, oy.jsx)(Qf, {
                children: (0, oy.jsx)(pb, {})
              }), (0, oy.jsx)("div", {
                className: "CameraFadeHost",
                ref: Hf.k
              })]
            }), (0, oy.jsx)(sy.j, {
              children: (0, oy.jsx)(Gh.b, {})
            }), (0, oy.jsx)(Qf, {
              first: !0,
              children: (0, oy.jsx)(ih.b, {})
            }), (0, oy.jsx)(sy.j, {
              children: (0, oy.jsx)(tZ, {})
            })]
          })
      }));

    function tZ() {
      return (0, Uy.useEffect)((() => {
        const yb = setTimeout((() => {
          (0, Ty.f)()
        }), 0);
        return () => {
          clearTimeout(yb), Ty.g.YB(!1)
        }
      }), []), null
    }
    const wf = (0, Uy.memo)((function() {
        const yb = (0, cb.m)("aimingOverlay", "none");
        (0, ly.d)();
        const bb = (0, Cy.l)("middleTextUpper"),
          Wy = (0, Cy.l)("middleTextLower");
        return (0, oy.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === yb ? {
            visibility: "hidden"
          } : {},
          children: [(0, oy.jsx)(zZ, {
            text: bb,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: kZ
          }), (0, oy.jsx)(zZ, {
            text: Wy,
            className: "MiddleText",
            maxHeightFraction: Nf
          })]
        })
      })),
      kZ = .3,
      Nf = .2;

    function zZ(yb) {
      let {
        text: bb,
        className: Wy,
        maxHeightFraction: hy
      } = yb;
      const fy = (0, Uy.useRef)(null),
        Zy = (0, Uy.useRef)(null);
      return function(yb, bb, Wy, hy) {
        (0, Uy.useLayoutEffect)((() => {
          const Uy = yb.current,
            hy = bb.current;
          if (!Uy || !hy) return;
          let fy = -1,
            Zy = -1;
          const cb = yb => (hy.style.setProperty("zoom", String(yb)), Uy.getBoundingClientRect().height),
            Py = () => {
              const yb = document.documentElement.clientHeight * Wy;
              let bb = 1;
              if (cb(1) > yb) {
                let Wy = .5,
                  Uy = 1;
                for (let bb = 0; bb < 6; bb++) {
                  const bb = (Wy + Uy) / 2;
                  cb(bb) <= yb ? Wy = bb : Uy = bb
                }
                bb = Wy
              }
              Zy = cb(bb), fy = Uy.getBoundingClientRect().width
            };
          Py();
          let oy = 0;
          const By = () => {
              cancelAnimationFrame(oy), oy = requestAnimationFrame(Py)
            },
            Ky = new ResizeObserver((() => {
              const {
                width: yb,
                height: bb
              } = Uy.getBoundingClientRect();
              yb === fy && bb === Zy || By()
            }));
          return Ky.observe(Uy), window.addEventListener("resize", By), () => {
            Ky.disconnect(), window.removeEventListener("resize", By), cancelAnimationFrame(oy), hy.style.removeProperty("zoom")
          }
        }), [yb, bb, Wy, hy])
      }(fy, Zy, hy, bb.content), (0, oy.jsx)("div", {
        ref: fy,
        className: "MiddleTextFit",
        children: (0, oy.jsx)(Eh, {
          ref: Zy,
          text: bb,
          className: Wy
        })
      })
    }
    const If = (0, Uy.memo)((function() {
        const yb = (0, cb.m)("aimingOverlay", "none");
        (0, ly.d)();
        const bb = (0, Cy.k)("useInventory");
        return (0, oy.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === yb ? {
            visibility: "hidden"
          } : {},
          children: [(0, oy.jsx)(By, {}), (0, oy.jsx)(ZW.b, {}), (0, oy.jsx)(cU, {}), (0, oy.jsx)(sy.j, {
            children: (0, oy.jsx)(dU, {})
          }), (0, oy.jsxs)("div", {
            className: "HotBarRow",
            children: [bb ? (0, oy.jsx)(Ly.d, {}) : (0, oy.jsx)(Ly.h, {}), (0, oy.jsx)(jb, {})]
          })]
        })
      })),
      xZ = (0, Uy.memo)((function(yb) {
        let {
          showChat: bb
        } = yb;
        const {
          t: Wy
        } = (0, My.D)(), {
          clientEscMenuOptions: hy,
          isTouchScreen: Zy
        } = (0, Gy.h)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, ly.d)();
        const {
          userContext: cb,
          isUserContextUpdating: Py
        } = (0, Ey.c)(), By = (0, Cy.k)("hideCoordinates"), ey = (0, Cy.k)("customVariationTitle"), {
          requestedGameNameWithVariation: qb,
          gameNameWithVariation: sy,
          lobbyName: Sy,
          shownLobbyName: Ty
        } = (0, gb.j)("connectedGame"), Vy = (0, Ky.c)(qb, Sy, !1), [Jy, Oy] = (0, Uy.useState)(null), Ry = (0, kh.r)(sy || qb || ""), vb = ey || Ry || "";
        (0, Uy.useEffect)((() => {
          Py || qh.c.getFavouriteLobbies(cb).then((yb => {
            console.log("Got favourite lobbies", yb), Oy(yb)
          }))
        }), [Py, cb]);
        const ib = (0, Uy.useRef)(null);
        return (0, Uy.useLayoutEffect)((() => {
            const yb = ib.current,
              bb = document.documentElement,
              Wy = new ResizeObserver((() => {
                bb.style.setProperty("--InGameHeaderRowsHeight", `${yb.offsetHeight}px`)
              }));
            return Wy.observe(yb), () => {
              Wy.disconnect(), bb.style.removeProperty("--InGameHeaderRowsHeight")
            }
          }), []),
          function(yb) {
            const {
              isTouchScreen: bb
            } = (0, Gy.h)(["isTouchScreen"]);
            (0, Uy.useLayoutEffect)((() => {
              if (!bb) return;
              const Wy = yb.current,
                Uy = document.querySelector(`.${oU.i}`),
                hy = yb => {
                  const bb = () => {
                    const bb = `${Math.floor(yb.getBoundingClientRect().left-Wy.getBoundingClientRect().left-4)}px`;
                    Wy.style.getPropertyValue("--InGameHeaderMaxWidth") !== bb && Wy.style.setProperty("--InGameHeaderMaxWidth", bb)
                  };
                  bb();
                  const hy = new ResizeObserver(bb);
                  hy.observe(yb), hy.observe(Uy), window.addEventListener("resize", bb);
                  const fy = new MutationObserver(bb);
                  return fy.observe(document.documentElement, {
                    attributes: !0,
                    attributeFilter: ["style"]
                  }), () => {
                    hy.disconnect(), fy.disconnect(), window.removeEventListener("resize", bb)
                  }
                },
                fy = () => Uy.querySelector(".TopRightIconsContainer"),
                Zy = fy();
              let cb;
              if (Zy) cb = hy(Zy);
              else {
                const yb = new MutationObserver((() => {
                  const bb = fy();
                  bb && (yb.disconnect(), cb = hy(bb))
                }));
                yb.observe(Uy, {
                  childList: !0,
                  subtree: !0
                }), cb = () => {
                  yb.disconnect()
                }
              }
              return () => {
                cb(), Wy.style.removeProperty("--InGameHeaderMaxWidth")
              }
            }), [bb, yb])
          }(ib), (0, oy.jsxs)(oy.Fragment, {
            children: [(0, oy.jsxs)("div", {
              className: fy()(oU.g, {
                Touchscreen: Zy
              }),
              ref: ib,
              children: [(0, oy.jsxs)("div", {
                className: "InGameHeader",
                children: [(0, oy.jsxs)("div", {
                  className: "InGameHeaderLogo",
                  onMouseDown: yb => {
                    yb.stopPropagation(), yb.preventDefault()
                  },
                  onClick: () => {
                    Gy.d.set({
                      openEverythingMenuName: mb.o.SETTINGS
                    })
                  },
                  children: [(0, oy.jsx)(wU.e, {
                    showFace: !0,
                    loading: !1
                  }), "bloxd.io"]
                }), (0, oy.jsx)("div", {
                  className: "InGameHeaderSpacer"
                }), (0, oy.jsxs)("div", {
                  className: "InGameHeaderGameName",
                  children: [null === Vy && (0, oy.jsx)(wU.e, {}), null !== Vy && (0, oy.jsxs)(oy.Fragment, {
                    children: [Vy, vb && ` ${vb}`]
                  })]
                }), (0, oy.jsx)("div", {
                  className: "InGameHeaderSpacer"
                }), (0, oy.jsx)("div", {
                  className: "InGameHeaderLobbyName",
                  children: Ty
                }), (0, NU.I)(Sy) && (0, oy.jsx)(Hy.f, {
                  tooltipInner: (0, oy.jsx)("div", {
                    children: Wy(null !== Jy && Jy.includes(Sy) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                  }),
                  children: (0, oy.jsx)("div", {
                    children: (0, oy.jsx)(qU.n, {
                      isLiked: null !== Jy && Jy.includes(Sy),
                      onClick: () => {
                        try {
                          if (!Jy) return;
                          Jy.includes(Sy) ? (qh.c.unfavouriteLobby(cb, Sy).catch((yb => {
                            console.error("Failed to favourite lobby", yb)
                          })), Oy(Jy.filter((yb => yb !== Sy)))) : (qh.c.favouriteLobby(cb, Sy).catch((yb => {
                            console.error("Failed to favourite lobby", yb)
                          })), Oy([...Jy, Sy]))
                        } catch (yb) {
                          console.error("Failed to like lobby", yb)
                        }
                      },
                      isLoading: null === Jy
                    })
                  })
                }), (0, oy.jsx)(Vh, {})]
              }), (0, oy.jsx)(pU, {
                show: hy.showFPS
              }), !By && hy.showCoordinates && (0, oy.jsx)(jh, {}), !By && hy.showChunkCoordinates && (0, oy.jsx)(DU, {}), (0, oy.jsx)(mf, {})]
            }), (0, oy.jsx)("div", {
              className: "TopLeftElements",
              children: (0, oy.jsx)("div", {
                className: "InGameHeaderAndChat",
                children: bb && (0, oy.jsx)(kb.e, {})
              })
            })]
          })
      })),
      Af = (0, Uy.memo)((function() {
        (0, ly.d)();
        const yb = (0, Cy.l)("RightInfoText"),
          [bb, Wy] = (0, Uy.useState)(null);
        return (0, sb.j)(bb, ".RightElements"), yb.hasText ? (0, oy.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, oy.jsx)(Eh, {
            ref: Wy,
            text: yb,
            className: "RightInfoDiv",
            children: (0, oy.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, oy.jsx)(Py.d, {
                text: yb.content
              })
            })
          })
        }) : null
      }))
  },
  4046: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(55),
      hy = Wy(248),
      fy = Wy(1556),
      Zy = Wy(952);

    function cb(yb) {
      let {
        text: bb
      } = yb;
      const Wy = [];
      let cb = "";
      return (0, hy.Vb)(bb).forEach(((yb, bb) => {
        if ("string" === typeof yb || !(0, fy.h)(yb.icon)) return void(cb += "string" === typeof yb ? yb : yb.icon);
        const hy = Math.max(0, cb.trimEnd().search(/\S{1,12}$/));
        Wy.push((0, Zy.jsxs)(Uy.Fragment, {
          children: [cb.slice(0, hy), (0, Zy.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [cb.slice(hy), (0, Zy.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": yb.icon,
              children: (0, Zy.jsx)(fy.d, {
                itemName: yb.icon,
                amount: 0
              })
            })]
          })]
        }, bb)), cb = ""
      })), Wy.push(cb), (0, Zy.jsx)(Zy.Fragment, {
        children: Wy
      })
    }
  },
  35312: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      f: () => By,
      i: () => Ky
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(1556),
      cb = Wy(952);
    const Py = 350;
    let oy = 0;

    function By() {
      return oy += 1, oy
    }

    function Ky(yb, bb) {
      let Wy = 0;
      for (const Uy of yb) "ingredient" !== Uy.kind && Uy.cL === bb && (Wy += Uy.amount);
      return Wy > 0 ? {
        idx: bb,
        amount: Wy
      } : null
    }

    function ey(yb) {
      var bb, Wy;
      let {
        anim: hy,
        onComplete: oy
      } = yb;
      const By = null !== (bb = hy.delayMs) && void 0 !== bb ? bb : 0,
        Ky = null !== (Wy = hy.durationMs) && void 0 !== Wy ? Wy : Py,
        [ey, qb] = (0, Uy.useState)(hy.from),
        [sy, Sy] = (0, Uy.useState)(0 === By),
        [Ey, ly] = (0, Uy.useState)(!1),
        mb = (0, Uy.useRef)(!1);
      return (0, Uy.useEffect)((() => {
        let yb, bb;
        const Wy = () => {
            mb.current = !0, Sy(!0), yb = requestAnimationFrame((() => {
              bb = requestAnimationFrame((() => {
                qb({
                  x: hy.to.x,
                  y: hy.to.y
                }), ly(!0)
              }))
            }))
          },
          Uy = mb.current ? 0 : By;
        let fy;
        Uy > 0 ? fy = setTimeout(Wy, Uy) : Wy();
        const Zy = setTimeout((() => {
          oy(hy.id)
        }), Uy + Ky + 50);
        return () => {
          clearTimeout(fy), cancelAnimationFrame(yb), cancelAnimationFrame(bb), clearTimeout(Zy)
        }
      }), [hy.id, hy.to.x, hy.to.y, oy, By, Ky]), (0, cb.jsx)("div", {
        className: fy()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === hy.kind,
          Waiting: !sy,
          Arrived: Ey
        }),
        style: {
          left: ey.x,
          top: ey.y,
          "--fly-duration": `${Ky}ms`
        },
        children: (0, cb.jsx)(Zy.d, {
          itemName: hy.itemName,
          amount: hy.amount
        })
      })
    }
  },
  35296: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Xy,
      h: () => rb
    });
    var Uy = Wy(55),
      hy = Wy(2332),
      fy = Wy(5819),
      Zy = Wy(1696),
      cb = Wy(2005),
      Py = Wy(7974),
      oy = Wy(258),
      By = Wy(23),
      Ky = Wy(1268),
      ey = Wy(33),
      qb = Wy(898),
      sy = Wy.n(qb),
      Sy = Wy(248),
      Ey = Wy(35303),
      ly = Wy(1546),
      mb = Wy(1612),
      Cy = Wy(7821),
      Ty = Wy(952);

    function Vy(yb) {
      var bb, Wy;
      let {
        slotIdx: fy
      } = yb;
      const Zy = (0, mb.i)("hotbar", (yb => {
          var bb;
          return null !== (bb = yb.items[fy]) && void 0 !== bb ? bb : null
        })),
        Py = (0, mb.i)("hotbar", (yb => yb.ammo)),
        [By, Ky] = (0, Uy.useState)(!1),
        ey = (0, Uy.useRef)(null),
        [qb, Sy] = (0, Uy.useState)(null),
        [Ey, Vy] = (0, Uy.useState)(null),
        Jy = (0, cb.k)("maxAuraLevel"),
        gb = (0, hy.e)(),
        Gy = (0, Uy.useCallback)((() => {
          if (clearTimeout(ey.current), Zy) {
            var yb, bb, Wy, Uy;
            const Py = Zy.displayName,
              By = [],
              Ky = Array.isArray(Py) ? Py : [Py],
              ey = {
                fontStyle: null !== (yb = Zy.attributes.customAttributes) && void 0 !== yb && yb.author ? "italic" : "normal"
              };
            for (const yb of Ky) yb.str ? By.push(yb) : By.push({
              str: yb,
              style: ey
            });
            if (null !== (bb = Zy.attributes.customAttributes) && void 0 !== bb && bb.enchantments) {
              By.push(" ");
              const yb = Object.entries(Zy.attributes.customAttributes.enchantments).sort(((yb, bb) => bb[1] - yb[1])),
                bb = Zy.attributes.customAttributes.enchantmentData;
              for (const [Wy, Uy] of yb) {
                var hy, fy;
                const yb = null !== (hy = null === bb || void 0 === bb || null === (fy = bb[Wy]) || void 0 === fy ? void 0 : fy.icon) && void 0 !== hy ? hy : `${Wy} Enchantment`;
                var cb;
                if (Uy < 4)
                  for (let bb = 0; bb < Uy; bb++) By.push({
                    icon: yb,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else By.push({
                  icon: yb,
                  style: {
                    fontSize: "1.5em"
                  }
                }), By.push(null !== (cb = (0, oy.S)(Uy)) && void 0 !== cb ? cb : Uy.toString())
              }
            }
            Sy(By), Vy(null !== (Wy = null === (Uy = Zy.attributes.customAttributes) || void 0 === Uy ? void 0 : Uy.enchantmentTier) && void 0 !== Wy ? Wy : null)
          } else Sy(null), Vy(null);
          Ky(!0), gb();
          const Py = null === Zy || void 0 === Zy ? void 0 : Zy.attributes.customAttributes;
          void 0 === (null === Py || void 0 === Py ? void 0 : Py.shotsLeft) && (ey.current = setTimeout((() => {
            Ky(!1)
          }), 2e3))
        }), [null === Zy || void 0 === Zy ? void 0 : Zy.name, fy, null === Zy || void 0 === Zy ? void 0 : Zy.instance, null === Zy || void 0 === Zy ? void 0 : Zy.displayName]);
      (0, Uy.useEffect)((() => (Gy(), () => {
        clearTimeout(ey.current), Ky(!1)
      })), [null === Zy || void 0 === Zy ? void 0 : Zy.name, fy, null === Zy || void 0 === Zy ? void 0 : Zy.instance, Gy]);
      const Oy = null === Zy || void 0 === Zy || null === (bb = Zy.attributes.customAttributes) || void 0 === bb ? void 0 : bb.shotsLeft,
        Ry = void 0 === Oy ? null : (0, Ty.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${Oy}|${Zy.requiresAmmo?`${Py}x${Zy.clipSize}`:Zy.clipSize}`
        }),
        vb = (0, Cy.j)();
      return (0, Ty.jsx)(Ty.Fragment, {
        children: By && Zy && !vb.showing ? (0, Ty.jsxs)("div", {
          className: sy()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === Jy,
            Enchanted: null !== Ey
          }),
          style: {
            "--enchantmentColour": null !== (Wy = oy.ib[Ey]) && void 0 !== Wy ? Wy : oy.ib.None,
            "--duration": Ey ? (0, oy.db)(Ey) + "s" : void 0
          },
          children: [Ey && (0, Ty.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, Ty.jsx)(ly.d, {
              text: qb
            }), Ry]
          }), (0, Ty.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, Ty.jsx)(ly.d, {
              text: qb
            }), Ry]
          })]
        }) : null
      })
    }
    var Jy = Wy(35312),
      gb = Wy(19),
      Gy = Wy(1572),
      Oy = Wy(547),
      Ry = Wy(2009),
      vb = Wy(2706),
      ib = Wy(2714);
    var My = Wy(1717);
    var Yy = Wy(1295);
    const Xy = (0, Uy.memo)((function() {
      const [yb, bb] = (0, Uy.useState)(0), Wy = (0, cb.k)("useFullInventory"), Zy = (0, cb.k)("highlightedHotbarSlots"), {
        isTouchScreen: Py,
        openInGameMenuName: oy
      } = (0, gb.h)(["isTouchScreen", "openInGameMenuName"]), ey = null !== oy && "inventory" !== oy, qb = (0, mb.j)("fullInventory") && "inventory" === oy, Sy = function() {
        const yb = (0, Uy.useRef)(null);
        return (0, My.d)(((bb, Wy) => {
          var Uy;
          const hy = Wy >= bb;
          if ((null === (Uy = yb.current) || void 0 === Uy ? void 0 : Uy.width) !== bb || yb.current.portrait !== hy) {
            const Wy = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare"));
            yb.current = {
              width: bb,
              portrait: hy,
              atEnds: Wy >= 0
            }
          }
          return yb.current.atEnds
        }))
      }(), ly = Py && !Sy;
      ! function(yb, bb, Wy) {
        (0, Uy.useLayoutEffect)((() => {
          const Uy = document.documentElement.classList;
          return yb && (Uy.add("TouchHotbar"), Uy.toggle("TouchHotbarKeysAbove", bb), Uy.toggle("TouchHotbarHasBag", Wy)), (0, vb.g)(), By.g.EZ(ib.d), () => {
            Uy.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, vb.g)(), By.g.EZ(ib.d)
          }
        }), [yb, bb, Wy])
      }(Py, ly, Wy);
      const [Cy, Ry] = (0, fy.d)("changedHotbarUsingNumkeys", !0), Yy = (0, mb.i)("hotbar", (yb => yb.selectedSlot)), Xy = null !== Yy && void 0 !== Yy ? Yy : yb, Hy = (0, hy.e)(), ab = (0, Uy.useRef)(null), py = (0, Ky.m)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Ky.i)("inventoryDraggedItemUpdated", (yb => {
        ab.current = yb, Hy()
      })), (0, mb.e)("hotbarScrolled", (yb => {
        null === Yy && Qy(yb)
      })), (0, mb.e)("hotbarSlotRequested", (yb => {
        Ly(yb), Ry(!1)
      })), (0, mb.e)("numberKeyPressed", (() => {
        Ry(!1)
      })), (0, mb.e)("hotbarDropRequested", (yb => {
        const bb = Gy.gameBridge.latest("hotbar").items[Xy];
        if (bb) {
          var Wy;
          const Uy = yb && null !== (Wy = bb.amount) && void 0 !== Wy ? Wy : 1;
          Gy.gameBridge.send("removeInventoryItem", {
            slot: Xy,
            amount: Uy,
            drop: !0
          })
        }
      }));
      const Ly = yb => {
          Gy.gameBridge.send("selectHotbarSlot", yb), bb(yb)
        },
        Qy = yb => {
          Ly((Xy + yb + Oy.l) % Oy.l)
        };
      let jb, Dy = null,
        tb = null,
        wy = yb => yb => {},
        kb = yb => bb => {
          Ly(yb)
        },
        Ny = yb => yb => {},
        zb = [];
      if (qb) {
        var Iy;
        const yb = ab.current;
        if (null === yb || void 0 === yb || !yb.setHovered) return (0, Ty.jsx)("div", {
          className: sy()("HotBarContainer", {
            Touch: Py,
            KeysAbove: ly
          }),
          children: (0, Ty.jsx)("div", {
            className: "HotBar"
          })
        });
        Dy = yb.draggedInfo, tb = yb.specialItemInfo, wy = yb.setHovered, kb = yb.pointerDown, Ny = yb.pointerUp, jb = yb.variation, zb = null !== (Iy = yb.craftFlyAnims) && void 0 !== Iy ? Iy : []
      }
      return (0, Ty.jsxs)("div", {
        className: sy()("HotBarContainer", {
          Touch: Py,
          PopupOpen: Py && ey,
          KeysAbove: ly
        }),
        children: [(0, Ty.jsxs)("div", {
          className: sy()("HotBar", {
            HoverDisabled: py
          }),
          children: [Py && (0, Ty.jsxs)(Ty.Fragment, {
            children: [(0, Ty.jsx)(uy, {
              useFullInventory: Wy,
              inventoryOpen: qb
            }), (0, Ty.jsx)(ny, {
              direction: "Previous",
              onPress: () => {
                Qy(-1)
              }
            })]
          }), !Py && (0, Ty.jsxs)(Ty.Fragment, {
            children: [(0, Ty.jsx)(rb, {}), (0, Ty.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, Ty.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((yb, bb) => (0, Ty.jsx)(Ey.b, {
              idx: bb,
              draggedInfo: Dy,
              specialItemInfo: tb,
              craftFlyHoldbackInfo: (0, Jy.i)(zb, bb),
              setHovered: wy(bb),
              pointerDown: kb(bb),
              pointerUp: Ny(bb),
              variation: jb,
              isSelected: bb === Xy,
              hotbarHighlighted: !0 === (null === Zy || void 0 === Zy ? void 0 : Zy.includes(bb)),
              hoverDisabled: py,
              showNumber: Cy && !Py
            }, bb)))
          }), Py && (0, Ty.jsx)(ny, {
            direction: "Next",
            onPress: () => {
              Qy(1)
            }
          }), !Py && (0, Ty.jsxs)(Ty.Fragment, {
            children: [(0, Ty.jsx)("div", {
              className: "HotBarFiller"
            }), (0, Ty.jsx)("div", {
              className: sy()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !Wy
              }),
              onPointerDown: () => {
                By.g.EZ("toggleMenu", "inventory")
              },
              children: (0, Ty.jsx)(Fy, {})
            })]
          })]
        }), (0, Ty.jsx)(Vy, {
          slotIdx: Xy
        })]
      })
    }));

    function ny(yb) {
      let {
        direction: bb,
        onPress: Wy
      } = yb;
      return (0, Ty.jsx)("div", {
        className: sy()("HotBarArrow", bb),
        ...Yy.i,
        children: (0, Ty.jsx)(Zy.e, {
          icon: "Previous" === bb ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: Wy
        })
      })
    }
    const uy = (0, Uy.memo)((function(yb) {
        let {
          useFullInventory: bb,
          inventoryOpen: Wy
        } = yb;
        const hy = (0, cb.k)("maxAuraLevel"),
          fy = (0, Uy.useRef)(null);
        return function(yb, bb, Wy) {
          (0, Uy.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", bb), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [bb]), (0, Uy.useLayoutEffect)((() => {
            const bb = yb.current.closest(".BottomMiddleElements");
            return bb.classList.toggle("TouchInventoryOpen", Wy), () => {
              bb.classList.remove("TouchInventoryOpen")
            }
          }), [yb, Wy])
        }(fy, (0, Py.d)(), Wy), (0, Ty.jsxs)("div", {
          ref: fy,
          className: sy()("TouchInventoryKeys", {
            NoAuraBar: 0 === hy,
            InventoryOpen: Wy
          }),
          children: [(0, Ty.jsx)(rb, {
            touchKey: !0
          }), (0, Ty.jsx)("div", {
            className: sy()("TouchInventoryKey BagKey", {
              Hidden: !bb
            }),
            ...Yy.i,
            children: (0, Ty.jsx)(Fy, {
              touchKey: !0
            })
          })]
        })
      })),
      rb = (0, Uy.memo)((function(yb) {
        let {
          touchKey: bb = !1
        } = yb;
        const Wy = (0, Py.d)();
        return (0, Ty.jsx)("div", {
          className: bb ? sy()("TouchInventoryKey ShopKey", {
            Hidden: !Wy
          }) : sy()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !Wy
          }),
          ...bb ? Yy.i : {},
          children: (0, Ty.jsx)(Zy.e, {
            icon: (0, oy.bc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerup",
            onClick: () => {
              Wy && gb.d.set({
                openEverythingMenuName: Sy.o.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Hy(yb) {
      let {
        player: bb
      } = yb;
      return bb.some((yb => null !== yb && oy.Mc.includes(yb.name)))
    }

    function ab(yb) {
      yb.creative || ey.e.getItem("LogInInventoryRedDotTutorialComplete") || (Hy(yb) ? (By.g.EZ("RedDotOpenInventoryIcon", !0), By.g.EZ("TouchTutorialOpenInventoryIcon", !0)) : (By.g.EZ("RedDotOpenInventoryIcon", !1), By.g.EZ("TouchTutorialOpenInventoryIcon", !1)))
    }
    const Fy = (0, Uy.memo)((function(yb) {
      let {
        touchKey: bb = !1
      } = yb;
      const {
        backpackPointerRequested: Wy
      } = (0, gb.h)(["backpackPointerRequested"]);
      (0, Uy.useEffect)((() => {
        ab(Gy.gameBridge.latest("inventory"))
      }), []), (0, mb.e)("inventory", ab);
      const hy = (0, Ry.l)();
      return (0, Ky.i)("toggleMenu", (yb => {
        hy.shown && (null !== yb && void 0 !== yb && yb.startsWith("inventory") && Hy(Gy.gameBridge.latest("inventory")) ? (ey.e.setItem("LogInInventoryRedDotTutorialComplete", !0), By.g.EZ("RedDotOpenInventoryIcon", !1), By.g.EZ("TouchTutorialOpenInventoryIcon", !1)) : "shop" === yb && By.g.EZ("showShopTouchTutorial", !1))
      })), bb ? (0, Ty.jsx)(Zy.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerup",
        onClick: () => {
          By.g.EZ("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: Wy,
        touchIconPosition: "topleft"
      }) : (0, Ty.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          By.g.EZ("toggleMenu", "inventory")
        },
        children: (0, Ty.jsx)(Zy.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: yb => {
            By.g.EZ("toggleMenu", "inventory"), yb.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: Wy,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35303: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ey,
      d: () => sy
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(1564),
      cb = Wy(1556),
      Py = Wy(1572),
      oy = Wy(1612),
      By = Wy(35305),
      Ky = Wy(8425),
      ey = Wy(1239),
      qb = Wy(952);
    const sy = (yb, bb, Wy) => {
      let Uy = bb,
        hy = !1;
      for (const fy of Wy)(null === fy || void 0 === fy ? void 0 : fy.idx) === yb && (hy = !0, Uy > 0 && (Uy -= fy.amount));
      return {
        displayedAmt: Uy,
        shown: !hy || Uy > 0
      }
    };
    const Sy = yb => {
        let {
          idx: bb
        } = yb;
        return (0, ey.q)() ? null : (0, qb.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: bb < 9 ? bb + 1 : 0
        })
      },
      Ey = (0, Uy.memo)((function(yb) {
        var bb, Wy, Uy;
        let {
          idx: hy,
          setHovered: ey,
          pointerDown: Ey,
          pointerUp: ly,
          draggedInfo: mb,
          specialItemInfo: Cy,
          craftFlyHoldbackInfo: Ty,
          defaultIconB64: Vy = null,
          variation: Jy,
          isSelected: gb = !1,
          hotbarHighlighted: Gy = !1,
          hoverDisabled: Oy = !1,
          showNumber: Ry = !1,
          showNewDot: vb = !1
        } = yb;
        const ib = (0, oy.i)("inventory", (yb => hy === By.d ? null : (0, Ky.k)(yb, hy)));
        let My, Yy, Xy, ny;
        if (hy === By.d) Cy && (My = Cy.name, Xy = Cy.amount, ny = Cy.attributes);
        else if (ib) {
          var uy;
          My = ib.name, Yy = ib.icon, Xy = null !== (uy = ib.amount) && void 0 !== uy ? uy : 0, ny = ib.attributes
        }
        const rb = null === (bb = ny) || void 0 === bb || null === (Wy = bb.customAttributes) || void 0 === Wy ? void 0 : Wy.enchantmentTier,
          Hy = (0, Zy.h)(ny),
          {
            displayedAmt: ab,
            shown: Fy
          } = sy(hy, Xy, [mb, Cy, Ty]),
          py = My && Fy,
          Ly = void 0 !== Jy && function(yb, bb) {
            const {
              enchantable: Wy,
              salvageable: Uy
            } = Py.gameBridge.latest("stationItems");
            return "Enchanting Table" === yb ? !0 === Wy[bb] : "Salvaging Table" === yb && !0 === Uy[bb]
          }(Jy, My);
        return (0, qb.jsxs)("div", {
          className: fy()("InvenItem", {
            Highlighted: py && Ly,
            Selected: gb,
            HotbarHighlighted: Gy,
            HoverDisabled: Oy
          }),
          onPointerEnter: () => {
            null === ey || void 0 === ey || ey(!0)
          },
          onPointerLeave: () => {
            null === ey || void 0 === ey || ey(!1)
          },
          onPointerDown: Ey,
          onPointerUp: ly,
          "data-inven-idx": hy,
          children: [py && (0, qb.jsx)(cb.d, {
            itemName: null !== (Uy = Yy) && void 0 !== Uy ? Uy : My,
            amount: ab,
            enchantmentTier: rb,
            bar: Hy
          }), py && vb && (0, qb.jsx)("div", {
            className: "InvenItemNewDot"
          }), Ry && (0, qb.jsx)(Sy, {
            idx: hy
          }), Vy && !py && (0, qb.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${Vy})`
            }
          })]
        })
      }))
  },
  8412: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(258),
      hy = Wy(8420);

    function fy(yb, bb, Wy) {
      const fy = Object.entries(bb).sort(((yb, bb) => bb[1] - yb[1])),
        Zy = (0, Uy.nb)(yb);
      Zy.push(yb ? "\n\n" : "\n");
      for (const [hy, sy] of fy) {
        var cb, Py, oy;
        const yb = null !== (cb = null === Wy || void 0 === Wy || null === (Py = Wy[hy]) || void 0 === Py ? void 0 : Py.icon) && void 0 !== cb ? cb : `${hy} Enchantment`;
        Zy.push({
          icon: yb,
          style: {
            fontSize: "1.5rem"
          }
        }), Zy.push({
          str: `${hy} ${null!==(oy=(0,Uy.S)(sy))&&void 0!==oy?oy:sy}\n`
        })
      }
      Zy.push({
        str: "\n"
      });
      for (const [Uy, sy] of fy) {
        var By, Ky, ey, qb;
        const yb = null !== (By = null === Wy || void 0 === Wy || null === (Ky = Wy[Uy]) || void 0 === Ky ? void 0 : Ky.icon) && void 0 !== By ? By : `${Uy} Enchantment`,
          bb = null !== (ey = null === Wy || void 0 === Wy || null === (qb = Wy[Uy]) || void 0 === qb ? void 0 : qb.description) && void 0 !== ey ? ey : (0, hy.h)(Uy);
        Zy.push({
          icon: yb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Zy.push({
          str: bb,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Zy.push({
          str: "\n"
        })
      }
      return Zy
    }
  },
  35305: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      d: () => hy
    });
    const Uy = -1,
      hy = -2
  },
  8425: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => oy,
      d: () => mb,
      h: () => Ey,
      k: () => Py,
      o: () => ly,
      s: () => By,
      v: () => ey,
      x: () => Sy,
      z: () => Ky
    });
    var Uy = Wy(248),
      hy = Wy(547),
      fy = Wy(258),
      Zy = Wy(3515),
      cb = Wy(8412);

    function Py(yb, bb) {
      var Wy;
      let {
        player: Uy,
        chestOrCreative: hy
      } = yb;
      var fy;
      return bb < Uy.length ? null !== (fy = Uy[bb]) && void 0 !== fy ? fy : null : null !== (Wy = hy[bb - Uy.length]) && void 0 !== Wy ? Wy : null
    }

    function oy(yb) {
      var bb;
      return null !== (bb = yb.amount) && void 0 !== bb ? bb : 0
    }

    function By(yb) {
      return 0 === yb.button || void 0 === yb.button
    }

    function Ky(yb) {
      return !!yb.shiftKey
    }

    function ey(yb) {
      return "touches" in yb || "touch" === yb.pointerType || "pen" === yb.pointerType
    }
    const qb = new Set,
      sy = 50;

    function Sy(yb, bb) {
      var Wy;
      const Uy = null === (Wy = yb[bb]) || void 0 === Wy ? void 0 : Wy.displayName;
      return (0, hy.D)(Uy) ? "string" !== typeof bb ? "" : (!qb.has(bb) && qb.size < sy && (qb.add(bb), console.warn(`No item called "${bb}", so its hover shows the name as given`)), bb) : Uy
    }

    function Ey(yb, bb, Wy) {
      var Py, oy, By, Ky, ey, qb, sy, Ey, ly, mb, Cy, Ty, Vy, Jy;
      const gb = yb.attributes,
        Gy = null !== (Py = null === (oy = bb[yb.name]) || void 0 === oy ? void 0 : oy.rootName) && void 0 !== Py ? Py : yb.name,
        Oy = null !== (By = null !== (Ky = gb.customDisplayName) && void 0 !== Ky ? Ky : null === (ey = bb[yb.name]) || void 0 === ey ? void 0 : ey.displayName) && void 0 !== By ? By : Sy(bb, Gy);
      let Ry = Oy;
      const vb = null === (qb = gb.customAttributes) || void 0 === qb ? void 0 : qb.enchantmentTier;
      vb && (Ry = (0, fy.nb)(Oy, {
        colour: fy.ib[vb]
      }));
      const ib = null !== (sy = null !== (Ey = null !== (ly = function(yb, bb) {
        var Wy;
        if (void 0 === yb || null !== (Wy = bb.customAttributes) && void 0 !== Wy && Wy.author) return yb;
        const hy = (0, Uy.Vb)(yb);
        return hy.every((yb => "string" === typeof yb)) ? yb : hy.map((yb => "string" === typeof yb ? yb : {
          icon: yb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(gb.customDescription, gb)) && void 0 !== ly ? ly : null === (mb = bb[yb.name]) || void 0 === mb ? void 0 : mb.description) && void 0 !== Ey ? Ey : null === (Cy = bb[Gy]) || void 0 === Cy ? void 0 : Cy.description) && void 0 !== sy ? sy : "";
      let My = ib;
      if (null !== (Ty = gb.customAttributes) && void 0 !== Ty && Ty.enchantments) My = (0, cb.b)(ib, gb.customAttributes.enchantments, gb.customAttributes.enchantmentData);
      else if (Wy[Gy]) My = (0, fy.nb)(ib), My.push({
        str: "\n"
      }), My.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Vy = gb.customAttributes) && void 0 !== Vy && Vy.mobSettings) {
        var Yy, Xy;
        const yb = gb.customAttributes.mobSettings;
        var ny, uy;
        if (My = [], (0, hy.D)(gb.customAttributes.health) || (My.push({
            str: "\n"
          }), My.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: gb.customAttributes.health.toString()
          }), (0, hy.D)(yb.maxHealth) || (My.push({
            str: "/"
          }), My.push({
            str: yb.maxHealth.toString()
          }))), !(0, hy.D)(yb.attackDamage) && yb.attackDamage > 0 && (My.push({
            str: "\n"
          }), My.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: yb.attackDamage.toString()
          })), !(0, hy.D)(yb.secondaryAttackDamage) && yb.secondaryAttackDamage > 0 && (My.push({
            str: "\n"
          }), My.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: yb.secondaryAttackDamage.toString()
          })), (0, hy.D)(yb.baseRunningSpeed) || (My.push({
            str: "\n"
          }), My.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: " "
          }), My.push({
            str: yb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === yb.metaInfo) My.push({
          str: "\n"
        }), My.push({
          str: {
            translationKey: "general:has"
          }
        }), My.push({
          str: " "
        }), My.push({
          icon: null !== (ny = null === (uy = yb.tameInfo) || void 0 === uy ? void 0 : uy.saddleItemName) && void 0 !== ny ? ny : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (My.push({
            str: "\n"
          }), My.push({
            str: "\n"
          }), yb.petInfo && null !== (Yy = yb.tameInfo) && void 0 !== Yy && Yy.supportsFriendship) {
          const bb = Zy.c.getIconsFromFriendshipPoints(yb.petInfo.friendshipPoints);
          for (const yb of bb) My.push({
            icon: yb,
            style: {
              fontSize: "1.5em"
            }
          });
          My.push({
            str: "\n"
          });
          const Wy = Zy.c.getMobHungerLevel(yb.petInfo.lastFedAt);
          for (const yb of Zy.c.hungerLevelIcons[Wy]) My.push({
            icon: yb,
            style: {
              fontSize: "1.5em"
            }
          });
          My.push({
            str: " "
          }), My.push({
            str: Zy.c.hungerLevelTranslations[Wy],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (yb.tameInfo && null !== (Xy = yb.tameInfo) && void 0 !== Xy && Xy.supportsFriendship) {
          var rb, Hy;
          let bb = null !== (rb = yb.tameInfo.likedFoods) && void 0 !== rb ? rb : [];
          My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Superliked]
            }
          }), My.push({
            str: " "
          }), null !== (Hy = yb.petInfo) && void 0 !== Hy && Hy.superlikedFoodKnown ? (My.push({
            icon: yb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), bb = bb.filter((bb => bb !== yb.petInfo.superlikedFood))) : My.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Liked]
            }
          }), My.push({
            str: " "
          });
          for (const yb of bb) My.push({
            icon: yb,
            style: {
              fontSize: "1.5em"
            }
          });
          My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Neutral]
            }
          }), My.push({
            str: " "
          });
          for (const Wy of null !== (ab = yb.tameInfo.neutralFoods) && void 0 !== ab ? ab : []) {
            var ab;
            My.push({
              icon: Wy,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          My.push({
            str: "\n"
          }), My.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Zy.c.feedTextColours[Zy.c.MobFoodType.Disliked]
            }
          }), My.push({
            str: " "
          });
          for (const Wy of null !== (Fy = yb.tameInfo.dislikedFoods) && void 0 !== Fy ? Fy : []) {
            var Fy;
            My.push({
              icon: Wy,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        My.length > 0 ? (My.shift(), My.unshift(...(0, fy.nb)(ib))) : My = (0, fy.nb)(ib)
      }
      return {
        name: Ry,
        desc: My,
        fontStyle: null !== (Jy = gb.customAttributes) && void 0 !== Jy && Jy.author ? "italic" : "normal"
      }
    }

    function ly(yb, bb, Wy, Uy) {
      const hy = Py(yb, Wy),
        fy = Py(yb, Uy);
      if (!hy) return !1;
      const Zy = bb[hy.name].armourReduction,
        cb = bb[fy.name].armourReduction;
      if (cb === Zy) {
        var oy, By, Ky, ey;
        const yb = null !== (oy = null === (By = hy.attributes.customAttributes) || void 0 === By ? void 0 : By.enchantmentTier) && void 0 !== oy ? oy : "Tier 0",
          bb = null !== (Ky = null === (ey = fy.attributes.customAttributes) || void 0 === ey ? void 0 : ey.enchantmentTier) && void 0 !== Ky ? Ky : "Tier 0";
        return parseInt(yb.replace("Tier ", "")) >= parseInt(bb.replace("Tier ", ""))
      }
      return Zy > cb
    }

    function mb(yb) {
      let bb;
      if ("number" === typeof yb) {
        const Wy = document.querySelector(`[data-inven-idx="${yb}"]`);
        if (!Wy) return null;
        bb = Wy.getBoundingClientRect()
      } else bb = yb.getBoundingClientRect();
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2
      }
    }
  },
  8352: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => qb,
      i: () => sy,
      k: () => Sy
    });
    var Uy = Wy(1273),
      hy = Wy(55),
      fy = Wy(1162),
      Zy = Wy(3732),
      cb = Wy(1945),
      Py = Wy(1042),
      oy = Wy(94),
      By = Wy(1612),
      Ky = Wy(1194),
      ey = Wy(952);

    function qb(yb) {
      let {
        show: bb,
        onClose: Wy
      } = yb;
      const {
        requestedGameNameWithVariation: Uy,
        lobbyName: hy,
        shownLobbyName: fy
      } = (0, By.j)("connectedGame"), Py = (0, cb.c)(Uy, hy, !1);
      return oy.featureFlags.canUseInviteLinks && (0, ey.jsx)(Zy.c, {
        show: bb,
        close: Wy,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, ey.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, ey.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, ey.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, ey.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Py ? (0, ey.jsx)(Ky.e, {}) : Py, (0, ey.jsx)("br", {}), "Lobby Name: ", fy, (0, ey.jsx)("br", {}), (0, ey.jsx)("br", {}), (0, ey.jsx)("br", {}), (0, ey.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, ey.jsx)(sy, {})]
        })
      })
    }

    function sy() {
      var yb;
      const {
        t: bb
      } = (0, Py.D)(), Wy = null !== (yb = Sy(oy.featureFlags.canUseInviteLinks)) && void 0 !== yb ? yb : "Loading Link...", [fy, Zy] = (0, hy.useState)(0), [cb, By] = (0, hy.useReducer)((yb => yb + 1), 0);
      return (0, hy.useEffect)((() => {
        const yb = setTimeout((() => {
          By()
        }), 1100);
        return () => {
          clearTimeout(yb)
        }
      }), [fy]), oy.featureFlags.canUseInviteLinks && (0, ey.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, ey.jsx)("div", {
          className: "InviteLinkInner",
          children: Wy
        }), (0, ey.jsx)(Uy.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Wy).catch((yb => {
              console.error("Failed to copy invite link:", yb)
            })), Zy(Date.now())
          },
          disabled: Date.now() - fy < 1e3,
          children: Date.now() - fy < 1e3 ? bb("general:copied") : bb("general:copy")
        })]
      })
    }

    function Sy(yb) {
      const [bb, Wy] = (0, hy.useState)(null);
      return (0, hy.useEffect)((() => {
        if (!yb) return;
        let bb = !0;
        return (0, fy.u)().then((yb => {
          bb && Wy(yb)
        })).catch((yb => {
          console.error("Failed to get invite link:", yb)
        })), () => {
          bb = !1
        }
      }), [yb]), bb
    }
  },
  35732: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Gy
    });
    var Uy = Wy(55),
      hy = Wy(2005),
      fy = Wy(1546),
      Zy = Wy(530),
      cb = Wy(23),
      Py = Wy(898),
      oy = Wy.n(Py),
      By = Wy(35330),
      Ky = Wy(2080),
      ey = Wy(35337),
      qb = Wy(2108),
      sy = Wy(2082),
      Sy = Wy(2902),
      Ey = Wy(19),
      ly = Wy(1667),
      mb = Wy(1951),
      Cy = Wy(1080),
      Ty = Wy(4116),
      Vy = Wy(1612),
      Jy = Wy(94),
      gb = Wy(952);
    const Gy = (0, Uy.memo)((function() {
      const yb = (0, hy.k)("lobbyLeaderboardInfo"),
        bb = (0, Vy.j)("players"),
        Wy = (0, Vy.j)("lobbyLeaderboardRows"),
        cb = (0, Vy.j)("hiddenPlayerNames"),
        Py = (0, Uy.useRef)(null),
        [oy, By] = (0, Uy.useReducer)((yb => yb + 1), 0);
      return (0, Uy.useEffect)((() => (0, ly.b)((() => {
        By()
      }))), []), (0, gb.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, gb.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!yb) return (0, gb.jsx)(gb.Fragment, {});
            const Uy = JSON.parse(JSON.stringify(yb)),
              hy = [...bb.ids],
              oy = {},
              By = {};
            for (const yb of hy) {
              var Ky, qb;
              oy[yb] = null === (Ky = Wy[yb]) || void 0 === Ky ? void 0 : Ky.colour;
              const bb = null === (qb = Wy[yb]) || void 0 === qb ? void 0 : qb.values;
              bb && (By[yb] = {
                ...bb
              })
            }
            const sy = Object.keys(Uy);
            sy.sort(((yb, bb) => Uy[yb].sortPriority - Uy[bb].sortPriority)), hy.sort(((yb, bb) => {
              if (!By[yb] || !By[bb]) return 0;
              for (const Wy of sy) {
                const hy = By[yb][Wy],
                  fy = By[bb][Wy];
                let Zy = 0;
                if ("string" == typeof hy && "string" == typeof fy ? Zy = hy.localeCompare(fy) : "number" == typeof hy && "number" == typeof fy ? Zy = hy - fy : "number" == typeof hy && "string" == typeof fy ? Zy = 1 : "string" == typeof hy && "number" == typeof fy && (Zy = -1), Zy) return Zy * ("ascending" === Uy[Wy].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const yb of hy) {
              var Sy, Ey, Vy;
              const {
                name: Uy,
                ranks: hy,
                cosmetics: fy
              } = bb.byId[yb], cb = [], Py = null !== (Sy = null === (Ey = Wy[yb]) || void 0 === Ey || null === (Vy = Ey.tags) || void 0 === Vy ? void 0 : Vy.flatMap((yb => 0 === yb.length ? yb : [...yb, String.fromCharCode(8198)]))) && void 0 !== Sy ? Sy : [];
              cb.push(...Py), cb.push(...(0, Cy.v)(hy, Uy, (null === fy || void 0 === fy ? void 0 : fy.nameColour) === Zy.e || null === fy || void 0 === fy ? void 0 : fy.nameColour)), By[yb] ??= {}, By[yb].name = cb
            }

            function Jy(yb, Wy) {
              if (By[yb] && void 0 !== By[yb][Wy]) {
                if ("name" === Wy) {
                  const {
                    name: Uy,
                    cosmetics: hy
                  } = bb.byId[yb];
                  return (0, gb.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [hy && (0, gb.jsx)(mb.b, {
                      cosmetics: hy
                    }), " ", (0, gb.jsx)(fy.d, {
                      text: By[yb][Wy],
                      friendBadgeFor: (0, ly.f)(Uy, cb) ? Uy : void 0
                    })]
                  })
                }
                return (0, gb.jsx)(fy.d, {
                  text: By[yb][Wy]
                })
              }
              return ""
            }
            const Gy = Object.keys(Uy).filter((yb => !0 !== Uy[yb].hidden)).map((yb => {
              var bb;
              return {
                key: yb,
                header: (0, gb.jsx)(fy.d, {
                  text: null !== (bb = Uy[yb].displayName) && void 0 !== bb ? bb : ""
                })
              }
            }));
            return (0, gb.jsx)("div", {
              ref: Py,
              className: "LobbyLeaderboard",
              children: (0, gb.jsx)(Ty.c, {
                columns: Gy,
                rows: hy,
                getRowKey: yb => yb,
                renderRow: yb => {
                  const Wy = yb !== bb.localId;
                  return (0, gb.jsx)(Oy, {
                    playerId: yb,
                    playerName: bb.byId[yb].name,
                    isOtherPlayer: Wy,
                    opensProfileCard: (0, ey.f)(Wy, bb.byId[yb].name, cb),
                    lobbyLeaderboardInfo: Uy,
                    getPlayerValue: Jy,
                    playerColors: oy
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Oy(yb) {
      let {
        playerId: bb,
        playerName: Wy,
        isOtherPlayer: hy,
        opensProfileCard: fy,
        lobbyLeaderboardInfo: Zy,
        getPlayerValue: Py,
        playerColors: ly
      } = yb;
      const mb = (0, Uy.useRef)(null);
      (0, Uy.useEffect)((() => () => {
        Ky.e.closeIfOwner(mb)
      }), []);
      const Cy = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            cb.g.EZ("OpenReportMenu", {
              playerEId: bb,
              playerName: Wy,
              vc: null,
              serverChatMsgId: null
            })
          }
        },
        Ty = () => ({
          ...(0, ey.d)(bb, Wy),
          showLocation: !1,
          status: null,
          extraActions: [Cy],
          friendRequestSource: "leaderboard"
        });
      return (0, gb.jsxs)("tr", {
        ref: mb,
        "data-pad-focusable": fy || void 0,
        [Ky.f]: fy || void 0,
        onClick: fy ? () => {
          var yb;
          Ky.e.toggle(mb, {
            ...Ty(),
            anchor: null !== (yb = mb.current.querySelector(".PlayerPfpAndName")) && void 0 !== yb ? yb : mb.current
          })
        } : void 0,
        onContextMenu: fy ? yb => {
          (0, qb.c)(mb, yb, Ty(), Ey.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: fy ? yb => {
          (0, sy.e)(yb, (() => (0, ey.d)(bb, Wy).playerSocialPreview))
        } : void 0,
        children: [Object.keys(Zy).map((yb => !0 === Zy[yb].hidden ? null : (0, gb.jsxs)("td", {
          className: oy()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !hy
          }),
          children: [(0, gb.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Py(bb, yb)
          }), (0, gb.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: ly[bb]
            }
          })]
        }, yb))), hy && !fy && (0, gb.jsx)(By.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: mb,
          options: [{
            icon: Cy.icon,
            text: Cy.text,
            onPointerDown: Cy.onClick
          }, ...null === Wy || Jy.featureFlags.useSocialFeatures ? [] : (0, Sy.c)(null, Wy)]
        })]
      })
    }
  },
  3970: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => mb,
      d: () => ly
    });
    var Uy = Wy(55),
      hy = Wy(1268),
      fy = Wy(1546),
      Zy = Wy(3974),
      cb = Wy(952);
    const Py = (0, Uy.memo)((function(yb) {
      let {
        initialParameters: bb
      } = yb;
      const Wy = (0, Uy.useRef)(null),
        hy = (0, Uy.useRef)(null),
        Py = (0, Uy.useRef)(0),
        oy = (0, Uy.useRef)(null),
        By = bb.description,
        Ky = bb.U3,
        {
          scale: ey,
          rotation: qb
        } = null !== bb && void 0 !== bb ? bb : {},
        sy = (0, Zy.e)();
      return (0, Uy.useEffect)((() => {
        const yb = sy.onFrame((() => {
          const yb = sy.getState();
          if (!yb.isActive || !Wy.current || !hy.current) return;
          const bb = yb.state;
          if (Wy.current.value = bb.progress, bb.clickCount > Py.current) {
            Py.current = bb.clickCount;
            const yb = hy.current;
            yb.classList.add("pulse"), oy.current = setTimeout((() => {
              yb.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(oy.current), yb()
        }
      }), [sy]), (0, cb.jsx)(cb.Fragment, {
        children: (0, cb.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== ey && {
              "--scale": ey
            },
            ...null !== qb && {
              "--rotation": `${qb}deg`
            }
          },
          children: [(0, cb.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: Wy
          }), (0, cb.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: hy,
            children: (0, cb.jsx)(fy.d, {
              text: [{
                icon: Ky
              }]
            })
          }), (0, cb.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, cb.jsx)(fy.d, {
              text: By
            })
          })]
        })
      })
    }));
    var oy = Wy(898),
      By = Wy.n(oy);
    const Ky = 2 * Math.PI * 90,
      ey = (0, Uy.memo)((function(yb) {
        let {
          initialParameters: bb
        } = yb;
        const Wy = (0, Uy.useRef)(null),
          hy = (0, Uy.useRef)(null),
          Py = (0, Uy.useRef)(null),
          oy = bb.label,
          ey = bb.icon,
          qb = bb.K3,
          {
            scale: sy,
            rotation: Sy,
            i5: Ey
          } = null !== bb && void 0 !== bb ? bb : {},
          ly = (0, Zy.e)();
        return (0, Uy.useEffect)((() => {
          const yb = ly.onFrame((() => {
            var yb, bb;
            const Uy = ly.getState();
            if (!Uy.isActive || !hy.current) return;
            const fy = Uy.state,
              Zy = null !== (yb = fy.timeRemaining) && void 0 !== yb ? yb : 0,
              cb = null !== (bb = fy.B3) && void 0 !== bb ? bb : 1,
              oy = Ky * (1 - Zy / cb);
            hy.current.style.strokeDashoffset = `${oy}`, Wy.current && (Wy.current.style.opacity = Zy > 0 ? "1" : "0"), Py.current && qb && (Py.current.textContent = `${(Zy/1e3).toFixed(1)}s`)
          }));
          return () => {
            yb()
          }
        }), [ly, qb]), (0, cb.jsxs)("div", {
          className: "QTETimedClick",
          ref: Wy,
          style: {
            ...null !== sy && {
              "--scale": sy
            },
            ...null !== Sy && {
              "--rotation": `${Sy}deg`
            }
          },
          children: [(0, cb.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, cb.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, cb.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, cb.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Ky,
                ref: hy
              })]
            }), (0, cb.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, cb.jsx)(fy.d, {
                text: [{
                  icon: ey
                }],
                className: By()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: Ey
                })
              })
            })]
          }), (0, cb.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, cb.jsx)(fy.d, {
              text: oy,
              className: "QTETimedClickLabelText"
            }), qb && (0, cb.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: Py
            })]
          })]
        })
      })),
      qb = (0, Uy.memo)((function(yb) {
        let {
          initialParameters: bb
        } = yb;
        const Wy = (0, Uy.useRef)(null),
          hy = (0, Uy.useRef)(null),
          Py = (0, Uy.useRef)(null),
          oy = (0, Uy.useRef)(!1),
          By = bb.description,
          Ky = null === bb || void 0 === bb ? void 0 : bb.icon,
          ey = (0, Zy.e)();
        return (0, Uy.useEffect)((() => {
          const yb = ey.onFrame((() => {
            const yb = ey.getState();
            if (!yb.isActive) return;
            const bb = yb.state;
            if (Wy.current) {
              const yb = 100 * (bb.catchZonePosition - bb.t5 / 2);
              Wy.current.style.left = `${yb}%`, Wy.current.style.width = 100 * bb.t5 + "%", bb.isCatching !== oy.current && (oy.current = bb.isCatching, bb.isCatching ? Wy.current.classList.add("catching") : Wy.current.classList.remove("catching"))
            }
            hy.current && (hy.current.style.left = 100 * bb.moverPosition + "%"), Py.current && (Py.current.value = bb.progress)
          }));
          return () => {
            yb()
          }
        }), [ey]), (0, cb.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, cb.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, cb.jsx)(fy.d, {
              text: By
            })
          }), (0, cb.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: Py
          }), (0, cb.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, cb.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: Wy
            }), (0, cb.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: hy,
              children: (0, cb.jsx)("span", {
                children: Ky && (0, cb.jsx)(fy.d, {
                  text: [{
                    icon: Ky,
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
    var sy = Wy(547);
    const Sy = (0, Uy.memo)((function(yb) {
        let {
          initialParameters: bb
        } = yb;
        const Wy = (0, Uy.useRef)(null),
          hy = bb.label,
          Py = bb.i6,
          {
            icon: oy,
            scale: By,
            rotation: Ky
          } = null !== bb && void 0 !== bb ? bb : {},
          ey = 100 * (.5 - Py / 2),
          qb = 100 * Py,
          Sy = (0, Zy.e)();
        return (0, Uy.useEffect)((() => {
          const yb = Sy.onFrame((() => {
            const yb = Sy.getState();
            if (!yb.isActive || !Wy.current) return;
            const bb = yb.state;
            Wy.current.style.left = 100 * bb.markerPosition + "%"
          }));
          return () => {
            yb()
          }
        }), [Sy]), (0, cb.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, sy.D)(By) && {
              "--scale": By
            },
            ...!(0, sy.D)(Ky) && {
              "--rotation": `${Ky}deg`
            }
          },
          children: [oy && (0, cb.jsx)(fy.d, {
            text: [{
              icon: oy
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, cb.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, cb.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${ey}%`,
                width: `${qb}%`
              }
            }), (0, cb.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: Wy
            })]
          }), (0, cb.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, cb.jsx)(fy.d, {
              text: hy
            })
          })]
        })
      })),
      Ey = (0, Uy.memo)((function(yb) {
        let {
          initialParameters: bb
        } = yb;
        const Wy = (0, Uy.useRef)(null),
          [hy, Py] = (0, Uy.useState)((() => new Array(bb.I5).fill("pending"))),
          [oy, By] = (0, Uy.useState)((() => {
            const yb = bb.R6;
            return (0, sy.D)(yb) || yb <= 0 ? [] : new Array(yb).fill("pending")
          })),
          Ky = bb.label,
          {
            icon: ey
          } = bb,
          qb = (0, Uy.useRef)(0),
          Sy = (0, Uy.useRef)(0),
          Ey = (0, Uy.useRef)([]),
          ly = (0, Zy.e)();
        return (0, Uy.useEffect)((() => {
          const yb = ly.onFrame((() => {
            const yb = ly.getState();
            if (!yb.isActive || !Wy.current) return;
            const bb = yb.state,
              Uy = 30 + 60 * bb.outerCircleProgress;
            if (Wy.current.setAttribute("r", String(Uy)), !0 === bb.lastClickResult && bb.successes > qb.current) {
              Wy.current.classList.remove("QTERhythmClickOuterCircle--miss"), Wy.current.classList.add("QTERhythmClickOuterCircle--hit");
              const yb = setTimeout((() => {
                var yb;
                null === (yb = Wy.current) || void 0 === yb || yb.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              Ey.current.push(yb)
            } else if (!1 === bb.lastClickResult && bb.misses > Sy.current) {
              Wy.current.classList.remove("QTERhythmClickOuterCircle--hit"), Wy.current.classList.add("QTERhythmClickOuterCircle--miss");
              const yb = setTimeout((() => {
                var yb;
                null === (yb = Wy.current) || void 0 === yb || yb.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              Ey.current.push(yb)
            }
            bb.successes === qb.current && bb.misses === Sy.current || (qb.current = bb.successes, Sy.current = bb.misses, Py((yb => {
              const Wy = [...yb];
              for (let Uy = 0; Uy < bb.I5; Uy++) Wy[Uy] = Uy < bb.successes ? "success" : "pending";
              return Wy
            })), By((yb => {
              if (0 === yb.length) return yb;
              const Wy = [...yb];
              for (let Uy = 0; Uy < Wy.length; Uy++) Wy[Uy] = Uy < bb.misses ? "miss" : "pending";
              return Wy
            })))
          }));
          return () => {
            yb();
            for (const yb of Ey.current) clearTimeout(yb);
            Ey.current = []
          }
        }), [ly]), (0, cb.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, cb.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: hy.map(((yb, bb) => (0, cb.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === yb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, bb)))
          }), (0, cb.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, cb.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, cb.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, cb.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: Wy
              })]
            }), ey && (0, cb.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, cb.jsx)(fy.d, {
                text: [{
                  icon: ey
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), oy.length > 0 && (0, cb.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: oy.map(((yb, bb) => (0, cb.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === yb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, bb)))
          }), (0, cb.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, cb.jsx)(fy.d, {
              text: Ky
            })
          })]
        })
      }));

    function ly(yb) {
      let {
        qte: bb
      } = yb;
      switch (bb.type) {
        case "progressBar":
          return (0, cb.jsx)(Py, {
            initialParameters: bb.parameters
          });
        case "timedClick":
          return (0, cb.jsx)(ey, {
            initialParameters: bb.parameters
          });
        case "gravityBar":
          return (0, cb.jsx)(qb, {
            initialParameters: bb.parameters
          });
        case "precisionBar":
          return (0, cb.jsx)(Sy, {
            initialParameters: bb.parameters
          });
        case "rhythmClick":
          return (0, cb.jsx)(Ey, {
            initialParameters: bb.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const mb = (0, Uy.memo)((function() {
      const [yb, bb] = (0, Uy.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, hy.i)("qteStateUpdated", (yb => {
        bb(yb)
      })), yb.isActive && yb.type ? (0, cb.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, cb.jsx)(ly, {
          qte: yb
        })
      }) : null
    }))
  },
  3974: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb,
      e: () => Py
    });
    var Uy = Wy(55),
      hy = Wy(1156),
      fy = Wy(3983);
    const Zy = {
        getState: () => fy.e.getCurrentState(),
        onFrame: hy.h
      },
      cb = (0, Uy.createContext)(Zy);

    function Py() {
      return (0, Uy.useContext)(cb)
    }
  },
  8403: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(1612),
      cb = Wy(952);

    function Py(yb) {
      const bb = Math.floor(yb / 3600),
        Wy = Math.floor(yb % 3600 / 60),
        Uy = Math.floor(yb % 60),
        hy = `${Wy.toString().padStart(2,"0")}:${Uy.toString().padStart(2,"0")}`;
      return bb > 0 ? `${bb}:${hy}` : hy
    }
    const oy = (0, Uy.memo)((function(yb) {
      let {
        className: bb
      } = yb;
      const {
        recording: Wy,
        seconds: Uy
      } = (0, Zy.j)("replayRecorder");
      return Wy ? (0, cb.jsxs)("div", {
        className: fy()("RecordingIndicator", bb),
        children: [(0, cb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, cb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, cb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Py(Uy)
        })]
      }) : null
    }))
  },
  35175: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      d: () => ey
    });
    var Uy = Wy(55),
      hy = Wy(1207),
      fy = Wy(1042),
      Zy = Wy(1194),
      cb = Wy(2781),
      Py = Wy(4139),
      oy = Wy(952);

    function By(yb) {
      let {
        loading: bb,
        schematics: Wy,
        onSchematicPicked: Uy,
        selectedSchematicIdList: hy = [],
        disableAutoExport: Py
      } = yb;
      const {
        t: By
      } = (0, fy.D)();
      return (0, oy.jsxs)("div", {
        className: "SchematicList",
        children: [bb && (0, oy.jsx)(Zy.e, {}), !bb && 0 === Wy.length && (0, oy.jsx)("div", {
          className: "NoSchematicsText",
          children: By("worldBuilder:noSavedSchematic")
        }), !bb && Wy.map((yb => (0, oy.jsx)(cb.f, {
          source: {
            type: "schematic",
            schematic: yb
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Uy(yb)
          },
          isSelected: hy.includes(yb.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: yb.isAutoExported && Py,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, yb.schematicId)))]
      })
    }

    function Ky(yb) {
      let {
        ownedSchematics: bb,
        currentWorldSchematicId: Wy,
        onClose: hy
      } = yb;
      const {
        t: Zy
      } = (0, fy.D)(), [cb, Ky] = (0, Uy.useState)(null);
      return (0, oy.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === cb && (0, oy.jsxs)(oy.Fragment, {
          children: [(0, oy.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: Zy("worldBuilder:schematicList")
          }), (0, oy.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: Zy("worldBuilder:clickSchematicForOptions")
          }), (0, oy.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, oy.jsx)(By, {
              loading: !1,
              schematics: bb,
              onSchematicPicked: yb => {
                Ky(yb)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== cb && (0, oy.jsx)(Py.h, {
          schematic: cb,
          inSourceWorld: cb.schematicId === Wy,
          onSchematicUpdate: yb => {
            Ky(yb)
          },
          onClose: () => {
            Ky(null), hy()
          }
        })]
      })
    }

    function ey(yb) {
      let {
        ownedSchematics: bb,
        currentWorldSchematicId: Wy,
        onClose: Uy
      } = yb;
      hy.NotificationProvider.showCustomPopup({
        body: yb => (0, oy.jsx)(Ky, {
          ownedSchematics: bb,
          currentWorldSchematicId: Wy,
          onClose: yb
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Uy,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35649: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Vy,
      e: () => Ty
    });
    var Uy = Wy(3539),
      hy = Wy(1268),
      fy = Wy(55),
      Zy = Wy(5736),
      cb = Wy(3528),
      Py = Wy(1145),
      oy = Wy(1572),
      By = Wy(1546),
      Ky = Wy(1273),
      ey = Wy(1042),
      qb = Wy(35658),
      sy = Wy(898),
      Sy = Wy.n(sy),
      Ey = Wy(1162),
      ly = Wy(910),
      mb = Wy(1136),
      Cy = Wy(952);
    const Ty = "SleepingOverlay";

    function Vy() {
      const {
        t: yb
      } = (0, ey.D)(), [bb, Wy] = (0, fy.useState)(!1), [sy, Vy] = (0, fy.useState)(null), [gb, Gy] = (0, fy.useState)(1), [Oy, Ry] = (0, fy.useState)(!1), [vb, ib] = (0, fy.useState)(!1), My = (0, fy.useRef)(0), Yy = (0, fy.useRef)(!1), Xy = (0, fy.useRef)(!1), ny = (0, fy.useRef)(), uy = (0, fy.useRef)(null);

      function rb() {
        const yb = null !== sy && void 0 !== sy ? sy : "Rested Speed";
        oy.gameBridge.send("wakeUp", vb ? yb : null), uy.current = null, Wy(!1), Vy(null), Gy(1), Ry(!1), ib(!1)
      }

      function Hy() {
        return !Oy && (rb(), !0)
      }
      return (0, hy.i)("PlayerPhysicsTypeUpdate", (yb => {
        yb !== uy.current && (uy.current = yb, yb === Zy.q.SLEEPING ? (Xy.current || (My.current = oy.gameBridge.lookup("cameraZoom", null), Xy.current = !0), Yy.current = !0, oy.gameBridge.send("setCameraZoom", 3), Wy(!0), Gy(function() {
          for (const yb of oy.gameBridge.lookup("blocksStandingOn", null)) {
            if (qb.e.leafBeds.includes(yb)) return console.log(`Found leaf bed: ${yb}`), 1;
            if (qb.e.woolBeds.includes(yb)) return console.log(`Found woold bed: ${yb}`), 2;
            if (qb.e.strongBeds.includes(yb)) return console.log(`Found strong bed ${yb}`), 3
          }
          return 1
        }())) : (Xy.current = !1, Wy(!1), Vy(null), Gy(1)))
      })), (0, fy.useEffect)((() => () => {
        (0, Py.g)(Ty)
      }), []), (0, fy.useEffect)((() => {
        bb ? (0, Py.h)(Ty) : ((0, Py.g)(Ty), Yy.current && (oy.gameBridge.send("setCameraZoom", My.current), Yy.current = !1))
      }), [bb]), (0, mb.x)("overlay", ny, Hy, bb), (0, Cy.jsx)(Uy.e, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: bb,
        timeout: 300,
        nodeRef: ny,
        unmountOnExit: !0,
        children: (0, Cy.jsx)("div", {
          ref: ny,
          onClick: yb => {
            Hy() && yb.stopPropagation()
          },
          children: (0, Cy.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Cy.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: cb.f.map((bb => (0, Cy.jsxs)(Jy, {
                restedEffect: bb,
                KD: sy,
                setChosenRestedEffect: Vy,
                children: [(0, Cy.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Cy.jsx)(By.d, {
                    text: [{
                      icon: bb
                    }]
                  }), cb.c[bb].shortName]
                }), (0, Cy.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: yb(cb.c[bb].description, {
                    time: cb.c[bb].effectLevelDurations[gb] / 6e4
                  })
                })]
              }, bb)))
            }), (0, Cy.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Cy.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Cy.jsxs)(Ky.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: yb => {
                  vb ? rb() : (Ry(!0), (0, Ey.V)((() => {
                    Ry(!1), ib(!0)
                  }), !0)), yb.stopPropagation()
                },
                loading: Oy,
                children: [!vb && (0, Cy.jsxs)(Cy.Fragment, {
                  children: [(0, Cy.jsx)(ly.e, {
                    name: "film"
                  }), " ", yb("classicGame:watchAdToGetRestedPerk")]
                }), vb && yb("classicGame:wakeUp")]
              }), (0, Cy.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Cy.jsx)("div", {
                  className: Sy()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === gb
                  }),
                  children: (0, Cy.jsx)(By.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Cy.jsx)("div", {
                  className: Sy()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === gb
                  }),
                  children: (0, Cy.jsx)(By.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Cy.jsx)("div", {
                  className: Sy()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === gb
                  }),
                  children: (0, Cy.jsx)(By.d, {
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
    const Jy = (0, fy.memo)((function(yb) {
      let {
        children: bb,
        restedEffect: Wy,
        KD: Uy,
        setChosenRestedEffect: hy
      } = yb;
      return Wy === Uy ? (0, Cy.jsx)(Ky.i, {
        onClick: yb => {
          yb.stopPropagation()
        },
        children: bb
      }) : (0, Cy.jsx)(Ky.g, {
        onClick: yb => {
          hy(Wy), yb.stopPropagation()
        },
        children: bb
      })
    }))
  },
  35337: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      f: () => Py
    });
    var Uy = Wy(530),
      hy = Wy(1572),
      fy = Wy(1461),
      Zy = Wy(94),
      cb = Wy(1122);

    function Py(yb, bb, Wy) {
      return Zy.featureFlags.useSocialFeatures && yb && null === (0, cb.d)(bb, Wy)
    }

    function oy(yb, bb) {
      var Wy, Zy;
      const cb = fy.d.getSocialState().friends.find((yb => yb.name.toLowerCase() === bb.toLowerCase())),
        Py = hy.gameBridge.latest("players").byId[yb],
        oy = void 0 !== Py && Py.name === bb,
        By = oy && null !== (Wy = Py.cosmetics) && void 0 !== Wy ? Wy : void 0,
        Ky = cb && By ? {
          ...cb,
          cosmetics: By
        } : cb;
      return {
        playerSocialPreview: null !== Ky && void 0 !== Ky ? Ky : {
          isError: !1,
          name: bb,
          ranks: oy ? [...Py.ranks] : [],
          cosmetics: null !== By && void 0 !== By ? By : {},
          nameColour: null !== (Zy = null === By || void 0 === By ? void 0 : By.nameColour) && void 0 !== Zy ? Zy : Uy.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== cb
      }
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  4116: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(952);

    function cb(yb) {
      let {
        columns: bb,
        rows: Wy,
        getRowKey: hy,
        renderRow: cb,
        className: Py
      } = yb;
      return (0, Zy.jsxs)("table", {
        className: fy()("Table", Py),
        children: [(0, Zy.jsx)("thead", {
          children: (0, Zy.jsx)("tr", {
            children: bb.map((yb => (0, Zy.jsx)("th", {
              children: yb.header
            }, yb.key)))
          })
        }), (0, Zy.jsx)("tbody", {
          children: Wy.map((yb => (0, Zy.jsx)(Uy.Fragment, {
            children: cb(yb)
          }, hy(yb))))
        })]
      })
    }
  },
  35619: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Gy,
      f: () => Jy,
      g: () => gb,
      h: () => sy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(70),
      cb = Wy(1219),
      Py = Wy(1273),
      oy = Wy(1217),
      By = Wy(1136),
      Ky = Wy(1042),
      ey = Wy(35625),
      qb = Wy(952);

    function sy(yb) {
      const [bb, Wy] = (0, fy.useState)((() => (0, ey.n)(yb)));
      return (0, fy.useEffect)((() => (Wy((0, ey.n)(yb)), (0, ey.K)((() => {
        Wy((0, ey.n)(yb))
      })))), [yb]), bb
    }

    function Sy(yb, bb) {
      "function" === typeof yb ? yb(bb) : yb && (yb.current = bb)
    }

    function Ey(yb) {
      let {
        tutorial: bb,
        step: Wy,
        enabled: Uy = !0
      } = yb;
      const hy = sy(bb);
      return Uy && hy === Wy
    }

    function ly(yb, bb) {
      const Wy = (0, ey.r)(yb),
        Uy = Wy.indexOf(bb);
      return !Wy.slice(Uy + 1).some((bb => (0, ey.z)(yb, bb)))
    }

    function mb(yb, bb, Wy, Uy) {
      let {
        tutorial: hy,
        step: fy,
        waitForClick: Zy = !1,
        onPrevious: cb
      } = yb;
      const Py = bb && (0, ey.x)(hy, fy),
        oy = bb && !ly(hy, fy),
        Ky = Zy ? Uy : Wy;
      let qb = null;
      Py ? qb = () => {
        null === cb || void 0 === cb || cb(), (0, ey.v)(hy, fy)
      } : oy && (qb = () => {
        (0, ey.k)(hy)
      }), (0, By.x)("popup", null !== Ky && void 0 !== Ky ? Ky : Wy, qb, bb && null !== Ky, null, Py ? void 0 : "controller:menusSkipTutorial")
    }

    function Cy(yb) {
      let {
        tutorial: bb,
        step: Wy,
        text: Uy,
        waitForClick: hy = !1,
        onPrevious: fy
      } = yb;
      const {
        t: Zy
      } = (0, Ky.D)(), cb = ly(bb, Wy);
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, qb.jsx)("div", {
          className: "TutorialStepText",
          children: Uy
        }), (0, qb.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, ey.x)(bb, Wy) && (0, qb.jsx)(Py.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === fy || void 0 === fy || fy(), (0, ey.v)(bb, Wy)
            },
            children: Zy("tutorial:back")
          }), !hy && (0, qb.jsx)(Py.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ey.i)(Wy)
            },
            padDefaultFocus: !0,
            children: Zy(cb ? "tutorial:done" : "tutorial:next")
          }), !cb && (0, qb.jsx)(Py.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, ey.k)(bb)
            },
            children: Zy("tutorial:skip")
          })]
        })]
      })
    }
    const Ty = 6;

    function Vy(yb) {
      let {
        rect: bb,
        margin: Wy
      } = yb;
      const Uy = Math.max(0, bb.top - Wy),
        hy = bb.bottom + Wy,
        fy = Math.max(0, bb.left - Wy),
        Zy = bb.right + Wy;
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: Uy
          }
        }), (0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hy,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Uy,
            left: 0,
            width: fy,
            height: hy - Uy
          }
        }), (0, qb.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Uy,
            left: Zy,
            right: 0,
            height: hy - Uy
          }
        })]
      })
    }

    function Jy(yb) {
      let {
        target: bb,
        placement: Wy,
        boxRef: Uy,
        className: Py,
        spotlightMargin: By = Ty,
        children: Ky
      } = yb;
      const {
        getArrowProps: ey,
        getTooltipProps: sy,
        setTooltipRef: Sy,
        setTriggerRef: Ey
      } = (0, cb.e)({
        placement: Wy,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, By]
      });
      (0, fy.useLayoutEffect)((() => {
        Ey(bb)
      }), [bb, Ey]);
      const ly = function(yb, bb) {
        const [Wy, Uy] = (0, fy.useState)(null);
        return (0, fy.useEffect)((() => {
          if (!bb || !yb) return void Uy(null);
          let Wy = 0,
            hy = null;
          const fy = () => {
            const bb = yb.getBoundingClientRect();
            hy && bb.left === hy.left && bb.top === hy.top && bb.width === hy.width && bb.height === hy.height || (hy = bb, Uy(bb)), Wy = requestAnimationFrame(fy)
          };
          return fy(), () => {
            cancelAnimationFrame(Wy)
          }
        }), [yb, bb]), Wy
      }(bb, !0);
      (0, fy.useEffect)((() => {
        null === bb || void 0 === bb || bb.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [bb]);
      const mb = (0, fy.useCallback)((yb => {
        Sy(yb), Uy && (Uy.current = yb)
      }), [Sy, Uy]);
      return (0, Zy.createPortal)((0, qb.jsxs)(qb.Fragment, {
        children: [ly && (0, qb.jsx)(Vy, {
          rect: ly,
          margin: By
        }), (0, qb.jsxs)("div", {
          ref: mb,
          ...sy({
            className: hy()("tooltip-container SmallTextLight TutorialStep", Py)
          }),
          children: [Ky, (0, qb.jsx)("div", {
            ...ey({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, oy.i)())
    }
    const gb = (0, fy.forwardRef)((function(yb, bb) {
      let {
        placement: Wy = "right",
        children: Uy,
        ...hy
      } = yb;
      const Zy = Ey(hy),
        cb = (0, fy.useRef)(null),
        Py = (0, fy.useRef)(null);
      mb(hy, Zy, cb, Py);
      const [oy, By] = (0, fy.useState)(null), Ky = Uy.ref, ey = (0, fy.useCallback)((yb => {
        Py.current = yb, By(yb), Sy(bb, yb), Sy(Ky, yb)
      }), [bb, Ky]);
      return (0, qb.jsxs)(qb.Fragment, {
        children: [(0, fy.cloneElement)(Uy, {
          ref: ey
        }), Zy && (0, qb.jsx)(Jy, {
          target: oy,
          placement: Wy,
          boxRef: cb,
          children: (0, qb.jsx)(Cy, {
            ...hy
          })
        })]
      })
    }));

    function Gy(yb) {
      const bb = Ey(yb),
        Wy = (0, fy.useRef)(null);
      return mb(yb, bb, Wy, null), bb ? (0, Zy.createPortal)((0, qb.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, qb.jsx)("div", {
          ref: Wy,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, qb.jsx)(Cy, {
            ...yb
          })
        })
      }), (0, oy.i)()) : null
    }
  },
  35490: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      g: () => Zy,
      i: () => cb,
      m: () => Py
    });
    var Uy = Wy(55),
      hy = Wy(974);
    const fy = 8,
      Zy = "InGameHeaderContainer",
      cb = "TopRightElements";

    function Py(yb) {
      const [bb] = (0, hy.d)(), [Wy, Py] = (0, Uy.useState)(!1);
      return (0, Uy.useLayoutEffect)((() => {
        if (!yb) return;
        const bb = document.querySelector(`.${Zy}`),
          Wy = document.querySelector(`.${cb}`),
          Uy = () => {
            const Uy = yb.getBoundingClientRect(),
              hy = bb ? bb.getBoundingClientRect().right : 0,
              Zy = Wy ? Wy.getBoundingClientRect().left : window.innerWidth,
              cb = Uy.left < hy + fy,
              oy = Uy.right > Zy - fy;
            Py(cb || oy)
          };
        Uy();
        const hy = new ResizeObserver(Uy);
        return hy.observe(yb), bb && hy.observe(bb), Wy && hy.observe(Wy), () => {
          hy.disconnect()
        }
      }), [yb, bb]), Wy
    }
  },
  5819: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(55),
      hy = Wy(33);

    function fy(yb, bb) {
      var Wy;
      const [fy, Zy] = (0, Uy.useState)(null !== (Wy = hy.e.getItem(yb)) && void 0 !== Wy ? Wy : bb);
      return [fy, bb => {
        hy.e.setItem(yb, bb), Zy(bb)
      }]
    }
  },
  35631: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy
    });
    var Uy = Wy(19),
      hy = Wy(1162);

    function fy() {
      const {
        clientEscMenuOptions: yb
      } = (0, Uy.h)(["clientEscMenuOptions"]);
      return (0, hy.s)() && yb.showChat
    }
  },
  35573: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py
    });
    var Uy = Wy(2234),
      hy = Wy(2977),
      fy = Wy(2293);
    const Zy = ["Unable to create vertex buffer"];
    let cb = {};

    function Py(yb, bb) {
      const Wy = new Date;
      console.error(`${Wy.getUTCHours()}:${Wy.getUTCMinutes()}:${Wy.getUTCSeconds()}`, yb, bb, null === bb || void 0 === bb ? void 0 : bb.stack), Zy.includes(null === bb || void 0 === bb ? void 0 : bb.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Uy.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${bb.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, fy.logError)("warning", `${yb}\n ${bb} "\n" ${null===bb||void 0===bb?void 0:bb.stack}`);
      const hy = yb + bb + (null === bb || void 0 === bb ? void 0 : bb.stack);
      hy in cb || ((0, fy.logError)("error", `${yb}\n ${bb} "\n" ${null===bb||void 0===bb?void 0:bb.stack}`), cb[hy] = !0)
    }(0, hy.onGameReset)((() => {
      cb = {}
    }))
  },
  4050: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => uy,
      f: () => ny
    });
    var Uy = Wy(4052),
      hy = Wy(248);
    const fy = 120,
      Zy = 260,
      cb = 1.15,
      Py = 1.2,
      oy = 2,
      By = 1.08,
      Ky = .8,
      ey = .95,
      qb = 8,
      sy = "[\"')\\]\u300d\u300f\uff09]*",
      Sy = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${sy}$`),
      Ey = new RegExp(`[?\uff1f]${sy}$`),
      ly = new RegExp(`[!\uff01]${sy}$`),
      mb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Cy = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Ty = new RegExp(`[${Cy}]`),
      Vy = new RegExp(`[${Cy}]|[^${Cy}]+`, "g"),
      Jy = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function gb(yb) {
      let bb = 2166136261;
      for (let Wy = 0; Wy < yb.length; Wy++) bb ^= yb.charCodeAt(Wy), bb = Math.imul(bb, 16777619);
      return (bb >>> 0) / 4294967295 * 2 - 1
    }

    function Gy(yb) {
      var bb;
      if (Ty.test(yb)) return 1;
      const Wy = yb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Uy = Wy.replace(/[^0-9]/g, "");
      if (Uy.length > 0 && !/\p{L}/u.test(Wy)) return Math.min(Uy.length, 4);
      const hy = null !== (bb = Wy.match(Jy)) && void 0 !== bb ? bb : [];
      if (0 === hy.length) {
        var fy, Zy;
        const yb = null !== (fy = null === (Zy = Wy.match(/\p{L}/gu)) || void 0 === Zy ? void 0 : Zy.length) && void 0 !== fy ? fy : 0;
        return 0 === yb ? 0 : Math.min(Math.max(1, Math.round(yb / 2.5)), qb)
      }
      const cb = Wy.replace(/[^\p{L}]/gu, ""),
        Py = hy.length > 1 && "e" === hy.at(-1) && cb.endsWith("e") && !cb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(yb.replace(/[^\p{L}]/gu, ""));
      return Math.min(hy.length - (Py ? 1 : 0), qb)
    }

    function Oy(yb) {
      return yb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ry(yb) {
      const bb = yb.replace(/[^\p{L}]/gu, "");
      return bb.length >= 2 && bb === bb.toUpperCase() && bb !== bb.toLowerCase()
    }

    function vb(yb, bb) {
      var Wy;
      const qb = bb && (0, Uy.l)(bb),
        sy = null !== (Wy = null === qb || void 0 === qb ? void 0 : qb.syllableMs) && void 0 !== Wy ? Wy : Uy.d,
        Cy = function(yb) {
          const bb = [];
          for (const Uy of (0, hy.Vb)(yb))
            if ("string" === typeof Uy)
              for (const yb of Uy.split(/(\s+)/)) {
                if ("" === yb) continue;
                if (/^\s+$/.test(yb)) {
                  bb.push({
                    kind: "space",
                    text: yb
                  });
                  continue
                }
                if (!Ty.test(yb)) {
                  bb.push({
                    kind: "word",
                    text: yb,
                    delayMs: 0
                  });
                  continue
                }
                let Uy = !0;
                for (const hy of null !== (Wy = yb.match(Vy)) && void 0 !== Wy ? Wy : []) {
                  var Wy;
                  const yb = bb.at(-1);
                  Uy || "word" !== (null === yb || void 0 === yb ? void 0 : yb.kind) || Ty.test(hy) || /[\p{L}\p{N}]/u.test(hy) ? (Uy || bb.push({
                    kind: "space",
                    text: "\u200b"
                  }), bb.push({
                    kind: "word",
                    text: hy,
                    delayMs: 0
                  }), Uy = !1) : yb.text += hy
                }
              } else bb.push({
                kind: "icon",
                text: Uy.icon,
                delayMs: 0
              });
          return bb
        }(yb),
        Jy = [];
      let vb = [];
      for (const Uy of Cy) "space" !== Uy.kind && (vb.push(Uy), Sy.test(Uy.text) && (Jy.push(vb), vb = []));
      Jy.push(vb);
      const ib = [];
      let My = 0;
      for (const Uy of Jy) {
        var Yy, Xy;
        const yb = null !== (Yy = null === (Xy = Uy.at(-1)) || void 0 === Xy ? void 0 : Xy.text) && void 0 !== Yy ? Yy : "",
          bb = Ey.test(yb),
          Wy = ly.test(yb),
          hy = Uy.map((yb => "word" === yb.kind ? Gy(yb.text) : 1)),
          Cy = hy.findLastIndex((yb => yb > 0));
        for (const [Ey, ly] of Uy.entries()) {
          const yb = "word" === ly.kind,
            Uy = hy[Ey];
          ly.delayMs = My;
          for (let hy = 0; qb && hy < Uy; hy++) {
            const {
              intonation: fy
            } = qb;
            let Zy = Cy > 0 ? -fy.declineSemitones * (Ey / Cy) : 0;
            Zy += gb(`${Oy(ly.text)}|${hy}`) * fy.variationSemitones;
            const Sy = Math.min(1, fy.variationSemitones);
            let mb = qb.glideSemitones,
              Ty = 1;
            Wy && (Zy += fy.exclaimLiftSemitones, Ty *= cb), bb && Ey === Cy && (Zy += fy.questionRiseSemitones * (Uy > 1 ? .5 + .5 * hy / (Uy - 1) : 1), hy === Uy - 1 && (mb = Math.abs(mb) + fy.questionRiseSemitones / 2)), yb && Ry(ly.text) && (Zy += oy * Sy, Ty *= Py), Uy > 1 && 0 === hy && (Zy += Ky * Sy, Ty *= By), ib.push({
              atMs: My + hy * sy,
              semitones: Zy,
              glideSemitones: mb,
              durationMs: hy < Uy - 1 ? Math.min(qb.durationMs, sy * ey) : qb.durationMs,
              level: Ty
            })
          }
          My += Uy * sy + (Sy.test(ly.text) ? Zy : mb.test(ly.text) ? fy : 0)
        }
      }
      return {
        pieces: Cy.map((yb => "space" === yb.kind ? yb : "icon" === yb.kind ? {
          kind: "icon",
          icon: yb.text,
          delayMs: yb.delayMs
        } : {
          kind: "word",
          text: yb.text,
          delayMs: yb.delayMs
        })),
        blips: ib
      }
    }
    var ib = Wy(1042),
      My = Wy(1115),
      Yy = Wy(1580);

    function Xy(yb) {
      if ("string" === typeof yb) return yb;
      const bb = My.f.get().getCurrentLanguageCode();
      return (0, ib.t)(bb, yb.translationKey, (0, ib.s)(yb.params, Yy.d.shown))
    }

    function ny(yb) {
      const bb = void 0 === yb.voice ? null : (0, Uy.p)(yb.voice),
        Wy = bb && (0, Uy.l)(bb);
      return {
        plan: vb(Xy(yb.line), Wy),
        synth: Wy
      }
    }

    function uy(yb) {
      const bb = [];
      let Wy = [];
      for (const [hy, fy] of yb.entries()) {
        var Uy;
        "space" === fy.kind && (" " !== fy.text || "icon" !== (null === (Uy = yb[hy + 1]) || void 0 === Uy ? void 0 : Uy.kind)) ? (Wy.length > 0 && bb.push(Wy), bb.push([fy]), Wy = []) : Wy.push(fy)
      }
      return Wy.length > 0 && bb.push(Wy), bb
    }
  },
  35487: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    const Uy = [{
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

    function hy(yb, bb, Wy) {
      const hy = Math.abs(yb - bb),
        fy = Date.now() - Wy;
      for (const Zy of Uy)
        if (yb < Zy.maxDist) return hy >= Zy.hardUpdateDist || fy > Zy.timeBetweenSoftChecks && hy >= Zy.softUpdateDist;
      return !1
    }
  },
  35669: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      d: () => fy,
      h: () => hy
    });
    const Uy = [.25, .5, 1, 2, 4, 8, 16];

    function hy(yb, bb) {
      const Wy = Uy;
      let hy = Wy.indexOf(yb);
      return -1 === hy && (hy = Wy.findIndex((bb => bb >= yb)), -1 === hy && (hy = Wy.length - 1)), "up" === bb ? Wy[Math.min(hy + 1, Wy.length - 1)] : Wy[Math.max(hy - 1, 0)]
    }

    function fy(yb) {
      return yb <= Uy[0]
    }

    function Zy(yb) {
      return yb >= Uy[Uy.length - 1]
    }
  },
  35726: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      d: () => hy
    });
    const Uy = "data-replay-ui-active",
      hy = [{
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
  35728: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      e: () => Ky,
      g: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(35726);

    function Zy() {
      const yb = {};
      for (const {
          group: bb
        }
        of fy.d) yb[bb] = !0;
      return yb
    }
    let cb = Zy();

    function Py() {
      hy.g.EZ("replayViewer|uiVisibilityChanged")
    }

    function oy() {
      return cb
    }

    function By(yb, bb) {
      cb[yb] !== bb && (cb = {
        ...cb,
        [yb]: bb
      }, "nametag" === yb && Uy.d.set({
        areNametagsHidden: !bb
      }), Py())
    }

    function Ky() {
      cb = Zy(), Uy.d.set({
        areNametagsHidden: !1
      }), Py()
    }
  },
  35580: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      f: () => cb
    });
    const Uy = {
      yaw: .61 * Math.PI,
      pitch: Math.PI / 2.05,
      radius: 30
    };

    function hy(yb, bb) {
      yb instanceof Promise ? yb.then(bb).catch((yb => {
        console.error("Couldn't open the preview", yb)
      })) : bb(yb)
    }
    class fy {
      constructor(yb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hy(yb, (yb => {
          this.closed ? yb.close() : (this.opened = yb, null !== this.size && yb.resize(this.size.width, this.size.height), null !== this.view && yb.show(this.view))
        }))
      }
      show(yb) {
        var bb;
        this.view = yb, null === (bb = this.opened) || void 0 === bb || bb.show(yb)
      }
      resize(yb, bb) {
        var Wy;
        this.size = {
          width: yb,
          height: bb
        }, null === (Wy = this.opened) || void 0 === Wy || Wy.resize(yb, bb)
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.opened) || void 0 === yb || yb.close(), this.opened = null
      }
    }
    class Zy {
      constructor(yb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(yb).then((yb => yb.ready)), hy(yb, (yb => {
          this.closed ? yb.close() : (this.opened = yb, null !== this.size && yb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var yb, bb;
        return null !== (yb = null === (bb = this.opened) || void 0 === bb ? void 0 : bb.isReady()) && void 0 !== yb && yb
      }
      setCosmetic(yb, bb) {
        var Wy;
        null === (Wy = this.opened) || void 0 === Wy || Wy.setCosmetic(yb, bb)
      }
      playEmote(yb) {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.playEmote(yb)
      }
      resetCamera() {
        var yb;
        null === (yb = this.opened) || void 0 === yb || yb.resetCamera()
      }
      async untilDrawn(yb) {
        var bb;
        await this.ready, await (null === (bb = this.opened) || void 0 === bb ? void 0 : bb.untilDrawn(yb))
      }
      resize(yb, bb) {
        var Wy;
        this.size = {
          width: yb,
          height: bb
        }, null === (Wy = this.opened) || void 0 === Wy || Wy.resize(yb, bb)
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.opened) || void 0 === yb || yb.close(), this.opened = null
      }
    }
    const cb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(yb) {
        this.host = yb
      }
      setDefaultHost(yb) {
        this.makeDefault = yb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(yb) {
        return new fy(this.current().openMob(yb))
      }
      openPet(yb) {
        return new fy(this.current().openPet(yb))
      }
      openMobLineup(yb) {
        return new fy(this.current().openMobLineup(yb))
      }
      openCharacter(yb) {
        return new Zy(this.current().openCharacter(yb))
      }
    }
  },
  35578: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy.e,
      f: () => Uy.f
    });
    var Uy = Wy(35580);
    class hy {
      constructor(yb) {
        this.load = yb, this.loaded = null, this.loading = null
      }
      run(yb) {
        return null !== this.loaded ? yb(this.loaded) : (this.loading ??= this.load().then((yb => (this.loaded = yb, yb)), (yb => {
          throw this.loading = null, yb
        })), this.loading.then(yb))
      }
    }
    class fy {
      constructor() {
        this.mobScene = new hy((() => Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(66), Wy.e(65), Wy.e(231), Wy.e(64), Wy.e(241), Wy.e(235), Wy.e(240), Wy.e(238), Wy.e(230), Wy.e(205), Wy.e(269), Wy.e(210), Wy.e(223), Wy.e(236), Wy.e(239), Wy.e(126), Wy.e(182), Wy.e(206), Wy.e(221), Wy.e(204), Wy.e(104), Wy.e(102), Wy.e(270), Wy.e(146)]).then((() => Wy(39662))))), this.characterScene = new hy((() => Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(66), Wy.e(65), Wy.e(231), Wy.e(64), Wy.e(241), Wy.e(235), Wy.e(240), Wy.e(238), Wy.e(230), Wy.e(205), Wy.e(269), Wy.e(210), Wy.e(223), Wy.e(236), Wy.e(239), Wy.e(126), Wy.e(182), Wy.e(206), Wy.e(221), Wy.e(204), Wy.e(104), Wy.e(102), Wy.e(270), Wy.e(145)]).then((() => Wy(39743)))))
      }
      openMob(yb) {
        return this.mobScene.run((bb => bb.openMobPreview(yb)))
      }
      openPet(yb) {
        return this.mobScene.run((bb => bb.openPetPreview(yb)))
      }
      openMobLineup(yb) {
        return this.mobScene.run((bb => bb.openMobLineupPreview(yb)))
      }
      openCharacter(yb) {
        return this.characterScene.run((bb => bb.openCharacterPreview(yb)))
      }
    }
    Uy.f.setDefaultHost((() => new fy))
  },
  35569: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      d: () => fy
    });
    const Uy = new Map;

    function hy(yb) {
      var bb;
      return null === yb ? null : null !== (bb = Uy.get(yb)) && void 0 !== bb ? bb : null
    }

    function fy(yb, bb) {
      return Uy.set(yb, bb), () => {
        Uy.get(yb) === bb && Uy.delete(yb)
      }
    }
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  35683: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => xW,
      f: () => Ib
    });
    var Uy = Wy(3525),
      hy = Wy(547),
      fy = Wy(3036),
      Zy = Wy(3059),
      cb = Wy.n(Zy);
    const Py = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      oy = "EV_boolean",
      By = "EV_double",
      Ky = "EV_string",
      ey = "EV_doubleArr",
      qb = "EV_armour",
      sy = "EV_other",
      Sy = "EV_cosmetics",
      Ey = "OEV_boolean",
      ly = "OEV_int",
      mb = "OEV_double",
      Cy = "OEV_string",
      Ty = "OEV_stringArr",
      Vy = "OEV_meshScaling",
      Jy = "IV_int",
      gb = "IV_string",
      Gy = "IV_doubleArr",
      Oy = "IV_double",
      Ry = "HV_int",
      vb = "HV_slots",
      ib = "EnvV_string",
      My = "EnvV_double",
      Yy = "EnvV_doubleArr",
      Xy = "EnvV_boolean",
      ny = {
        type: Ky,
        name: Ky,
        position: ey,
        rotation: ey,
        scale: By,
        speed: By,
        jumping: oy,
        crouching: oy,
        cameraPitch: By,
        armSwinging: oy,
        heldItemName: Ky,
        heldItemEnchantmentTier: Ky,
        pose: Ky,
        followingEId: Ky,
        ridingVehicleEId: Ky,
        leaderboardTop: Ky,
        meshKind: Ky,
        meshOpts: Ky,
        followingOffset: ey,
        shouldMatchFollowingEntityRotation: oy,
        meshOffset: ey,
        baseRenderHeading: By,
        armour: qb,
        KWy: sy,
        playerCustomisations: Sy,
        variation: Ky,
        metaInfo: Ky,
        soundName: Ky,
        volume: By,
        refDistance: By,
        maxHearDist: By,
        rate: By,
        aiState: Ky
      },
      uy = {
        opacity: mb,
        zIndex: ly,
        overlayColour: Cy,
        canSee: Ey,
        meshScaling: Vy,
        nameTagInfo: Cy,
        multilineTextBox: Cy,
        hasPriorityNametag: Ey,
        ranks: Ty,
        nameColour: Cy,
        _isAlive: Ey,
        _invisibleEffect: Ey,
        _invincible: Ey,
        killfeedColour: Cy,
        hideNameSeed: ly,
        _glowingEffect: Ey,
        lockHeadToBody: Ey
      },
      rb = {
        itemName: gb,
        amount: Jy,
        position: Gy,
        size: Oy,
        attributes: gb
      },
      Hy = {
        skyBox: ib,
        fogColourOverride: ib,
        fogChunkDistanceOverride: My,
        cameraTint: Yy,
        fogOnSkybox: Xy,
        fogBlockDistanceOverride: My
      },
      ab = {
        type: "array",
        items: "double"
      },
      Fy = {
        type: "array",
        items: "int"
      },
      py = {
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
      Ly = {
        type: "map",
        values: ab
      };

    function Qy(yb, bb) {
      return {
        type: "record",
        name: yb,
        fields: [{
          name: "x",
          type: bb
        }]
      }
    }
    const jb = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Qy(Ey, "boolean"), Qy(ly, "int"), Qy(mb, "double"), Qy(Cy, "string"), Qy(Ty, {
              type: "array",
              items: "string"
            }), Qy(Vy, Ly)]
          }]
        }
      },
      Dy = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Qy(oy, "boolean"), Qy(By, "double"), Qy(Ky, "string"), Qy(ey, ab), Qy(qb, py), Qy(sy, jb), Qy(Sy, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      tb = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Qy(Jy, "int"), Qy(gb, "string"), Qy(Oy, "double"), Qy(Gy, ab)]
          }]
        }
      },
      wy = {
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
      kb = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Qy(Ry, "int"), Qy(vb, wy)]
        }]
      },
      Ny = {
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
      zb = {
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
      Iy = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Qy(ib, "string"), Qy(My, "double"), Qy(Yy, ab), Qy(Xy, "boolean")]
          }]
        }
      },
      xb = [{
        name: "uby",
        type: "record",
        fields: [{
          name: "pos",
          type: Fy
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
          type: Fy
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
      Ay = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "S_",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "l_",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "myy",
              type: ["null", "string", ab],
              default: null
            }, {
              name: "T_",
              type: ["null", "double"],
              default: null
            }, {
              name: "J_",
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
          name: "pM",
          type: "string"
        }, {
          name: "yby",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Wyy",
          type: "double"
        }, {
          name: "Uyy",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "xyy",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: ab
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "hY",
          type: "string"
        }, {
          name: "Q8",
          type: ["null", "double"],
          default: null
        }, {
          name: "B7",
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
          name: "v_",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "i_",
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
      dy = [{
        name: "position",
        type: ab
      }, {
        name: "direction",
        type: ab
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

    function yW() {
      const yb = [{
        name: "entities",
        type: {
          type: "map",
          values: Dy
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: tb
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: dy
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
              items: kb
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", Ny],
        default: null
      }];
      return yb.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "hY",
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
      }), yb.push({
        name: "uiElements",
        type: zb
      }, {
        name: "environment",
        type: Iy
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
          items: Ay
        }
      }), yb
    }
    const bW = {
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
                name: "Zb",
                type: "int"
              }, {
                name: "position",
                type: ab
              }, {
                name: "direction",
                type: ab
              }, {
                name: "easing",
                type: ab
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
    let Wb;

    function Ub(yb) {
      if (9 === yb) return Wb ??= (bb = [{
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
            name: "tWy",
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
              type: Fy
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
            fields: yW()
          }
        }
      }, bW], cb().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: bb
      }, {
        EW: Object.create(null)
      })), Wb;
      var bb
    }
    var hb = Wy(35686);
    let fb, Zb, cW, Pb;
    const ob = 12;
    var Bb, Kb;
    const eb = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 2, 3, null, 16, 123, 4, 124, 125, !0, 15, 120, 127, 128, 512, 10, 1023, 31, 18, 32, 5, 24, 19, 64, 65535, 9, 11, 60, "/"];

    function qW(yb) {
      return typeof bU !== eb[5] && bU ? (new bU).decode(new WW(yb)) : typeof UW !== eb[5] && UW ? UW.from(yb).toString("utf-8") : ZW(yb)
    }

    function sb() {}

    function Sb() {
      Sb = function() {}
    }
    var Eb, lb;
    Sb(Bb = {}, Kb = [",NYB&Gj|ls:r.Xq<^Z7q@cPF|?{J5`1w2t`^CVjoH_WyT|4/", "r&f8NEzj^`U86=", 'TR,G2MJ|PS#*;/MBuCP#`"Cq`w7dxd#}Zdj/*%LH"F}xWG9@>Y=Bpxl*', "VeB8kd&M5~3Q}hUH^ujaqyxXNXxw4Ye}ntaV[mEq0PrU@u", "bHpf[M1_}t92;", "HssEq>WyAt>bnu3}fH$aVMDXu,>`jujCO:,N`c/qXY8NCm1Ilc$sCk;", "9@5GWMowns`3L3igJo$N", "Ll*/r:Av)MHUL6#$?cEGw|(tO7r5UZ]~ItC8", "s}=lg#E6]wrkpcRB&};sO!@+A7H", 'AMvldza?i~dfUKMC1C}l:K?C"TdxAcN.Kt83llVw]wZ"#.<RRl:J<{;', 'sM"BNE;', 'cec@[.%ov_y*eU_g1RBq8"Qo&w()Yu', 'iealSF7*;aWmNKg<8I12kSPCUwRN"/*|0lZ8+4jvkt.qfu', "Xnzl;dOCjP)kS/=PAy3a+fgo*`VD|u)j:dRk@4%:BU", "k&bf1ou?Psf", 'muklw|++0U~"?6%bGMYBT|DBN,M<_XrZ;H{vvS&qv8_4]dDZR*', 'bRhq_2ios?Z"OmKROS@2;S.=', "/cEf,oij_PEGsK#$k&}3^fm=", ";sv#gzq*Y~@", "^:!OZG*<Gr`P4/l/(UaVN|$qGwATi<X.5;", "&Tpked>B7sU8Hu}@3s[kx:[q5Tpok16HFd!}Lljy6`=a7|.jZS}/q:E*", "pervdn@+&e", "OR=3{VHo4D}u/UW:Na7y&2k0kP%Q;`awGc18dGjj%a4G*", "dZAy)EQ_1af4<ZU", "Kt[a#Mvj6wDY_<0OMY)8@YtAPMaXEzqZ9lUEkMC>tvNn2<v.jlWaT>K*", "2n&EK:=vzMXE)_`/9F*/hFmo>a!S*3*|DRBEi{d+Ura~6UY|n&!@QdM!N", "vGb1oD*<yUup1]~0TlYvpM5+qX<j{}I.z:lBs%Iqj_|d&1q<", ',k:/U>Xq%a[ypU?@OM~quWDCLP"y@]m@zYu2bf}=q', 'raHGJnXq"T@:gKWbwZ=l"ml*', '`}@y~x2B4S3k5`&/dc)2rF6!dS8N{U$?JIE"z>aqPwTQ}ZL}ET!Oi&@Aj_[Q;', "OnXy6#U=9tro%u", "Rn(N)oL,EXK2{`,RJu8/R6xBuM45oKp/JocNOs@flS&7tx<CCB#vj{S=", 'CBlJz"Aj=M~"=K6$WUa#c>u?aEI4GS1wKU4kn:[x/P}l~uzHAcTJ;dERh?C', "Maqfo5V:pFanju", "PII34{CCx?TQA`Q.|lt@)31+l?I", "1I(a|VQfKY83?u`~sdK13E[0?,pe=h[BVYas:4=4]rc)}ZT|)tzvd#0*", "{~lJZkF6JS9*tG[CaDjaV>Cq1", "bnCJwtL+1XXP[}90kY)8{VLfDvc4bZ+g", '2U(aVmlqqX]l5/PHDnc"BKu?N8}EO=S+,@=', "Y:g3^YI**Sro:hg<YcV@<Ho43~IU=<xZLnmFZKF0LFjtv$C<BsmB%f(Wtv", "!Q%c4{:|OSGP1uK|_Yv#dn?xAtLEH{<0CuSyj", "$N/BWx<>{a;zi>Tj(NA2|65wZ_EQ)YU", "<yR^r:!PUD.r?.G/8cA2kdWfNXE", "9uPVlDFqzS?Zm<[bzTpa9.TD]r9)91>/9@Rk;p:|Xw54D`o?<J+fA{;", "~A~yO69R67.", "yY(a,y?q!,Pz=KJgqJu", "4ll8bf@+OSbNw>d$XIG/DE;", "U}:#T>eqYY/38KA?W~7y4MtNzA+jkdp/bMFOSFEq(XK*]{w@%N=#1:@4N", "p5nyVEd+q", "wBZENd*>}~~lHco}Tk@Bc:;", '*aX8]>cB"Thn(u', "7`EaxEk*hsanlYt|A1Bq+", '~sMvK34NUwNRQG"}1st@J6d_(~mxB1V$', "4lXyBkFBSYhsF]3<Anjk7!O0?s`:S`7Cgcu8aSv|h", "~MPVRf+|>`$@(cl:DnjG.4C6D5FC4/p/)&`a?Vsfl?nSR}L.@T1qIK;", "HIu3ikeD:saN_x5g%YnBQd20}Tl4hd)Z", '_ns"}V"j65j/_<CZjSxyc>Q+pF/qu.I$]DtO$C4oq_1K*', 'l&9JKljvI~%Jo<v.ZNb@y"GC7?Yq$.A$_HtEdlb|n,LqC.X/vwglE:t=', "QN5NR6S4Uw|8C=g$[&%FBH^Mb?@:]u", '8JnBis%j;S)2?zL$/ZZ8m52l%a!2}hd}anm2>t^CAUq+.G;jGA$"_lSnu?R~*', "5&b@.s5wO`M5Y_8", '*s6s:k{qSt7NW>#?xn@Ellbjb?o"R{X$AM]s~', 'sA:/`c||?,S2EU%/+A"y.z=4Q,anC};g%u^s!x,oP`z`1u:R', '"tbOp&Aos,8+sZL$', '8JnhO6Lok~G"?mW]xnE@+cd+N', "+Z>NHs!*GSGk]|<CTP^/{m1|d`{JHcX~c;", "+o7fwM$C/PU/E.>/tZfFutkXb_X/D_t|{Y(GktKRuM;/4`Zj8MvadljWgtxS*", "p~*#!!P0yP!yM3A", "5P=#ut]|N8[?`z7H@oW1no;", "oMfyM%L+~?yJQ>GHM;", "&ONOUd__._~:*", "]lZfD_ooyYItmG:+", 'joTlonD6#vW<(u)ZHBYFfZ1w!?+"a>H}O`dNO!;g/~', 'r:Q1s2HfSt{hEUk$fsq+!{ZXIv}3sX1w)RXE|!oH`r5q6=}|Ssc"/c&M1', "ZZ:#|K]fwM$fO}}0Zu1Bz^8_UY]n|d.Z+s9vgK/6>a", "5U!ymzBquAK5H{/PiUuB@HXX}PO:!d<BsU6k~YG*JD<X?=c.8nGNd$PCN", 'b~$"lD9xKYx`{};P<Ts1@.<x=AApZ14/qcg/XdL,0Tj3sX5BF;', "<R]+?{,oVDE<_KP$0TMvl_wy>`mx,|y.uA7quy=WN", "cP*/cx8Q|,PlxjQ<X*", "ydm/`tS+PSDYh|=Pit)B7{PXLe+th]JRqG0/>.DD}tXX#UuZ?}0/NWn+h", '[&umTdnN{aF1c.O+Ca_J"mMR~X8#;', "JSbGmljv]wd@C=", "EY0JD2;", "ktKfxS^x&e;n)`U", "W~GNvSH+HTrv~{A", "OS03E%E0LYWQ.ZrPQa<N", "1wiJAmTDYP?l*", 'KU!O8yDRUD}X;`CjXH<sf2o_!sva{}"$1c@23dH+CA', "0tfy!^;", "1M{vOc}=", "8]/2|HpW", 'O:Ex+mH"#V', "U`9(gx6ih9", "Kcxv?;NWN0", "_w?)7%((LR", "YQn1w%HU", "i{?C]r]kvuY/U|*", "Vu}1{V_k[t.lRf9", "1W$:oCGlW}n5B8*", "5b9$YFiW!>g}IX`", ".P~CLQ_k,}=fB|*", "D.G!BO2UMd3$fI`!tWQ)yj4liNL<hkL", "td0)g/VfRgpAZ8+wk<f$MY8{jt^A(N`", "bb1KxFLFQ]3$U$S~D<<xnYcut#+uoOL", "4hu(WYLF)#|aI|B~=I8KkFR+T}jOa|*", "=I($6H$liNdAZ8+wk<=$MY8{:9c5T_9", "1W($m2xcb#+upiT@=[ePIYbL@z^5s", "m=z1mR|u", "oMKP`HXu", "UIkjP", "[e2h^0l!", ".jZP^;6{", "994n3", "Nf9clj3V", "g+vY1`Tl", '$H8Y.dAxEvX>oWF0?_}<##K7^bCl[cF0^2|"^?$SOLlt6&?HcHf:<', 'C;#Yoz3TwcbuAqrFVN}a//x?"=Qvk@rFuRyD[[^lVob<K5ALXZ', ",#*?@tpbyvGkc^/44#u+1$@D]<[nN@R1CV_n{", "%k/D", "1Tpvs~bW", "wD(7bzZ6", "nztxU|36", "<7XR.", "v5re", "l5txV]o6", "27nM", 'P5!{)#"6', "dfOu", "tT1haPLD", "UJv]", "pm6n|}r!y@F", "Tw+[1UAe>x`", "N${kE*C48n$", ")@&.1NpgV{~", '&$L+>vcs"xq', "N[r{+Nei}D@", "&$y{a:ns:x$", "<%+xwPND", "KIrK;,$u", "*Og:<", "[^s~W6Tu", "KIrKBLAV", "Njs@2", "$CGDNiP&N^/=(iOxD6r(*^|y?t", '%Ny|p_>k6lzAyG70;(&I"cg#]V', "XrkEmYHul4:Y3k%l5F}p5~Wrzh", "(GCDJRW,", "4S]Do)k,", "=l}aPX@M", "VG[(", "jfkelIG,"]), Sb(yU = function() {
        var yb, bb, Wy, Uy = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        Sb(yb = void 0, bb = []);
        try {
          Sb(yb = Object, bb[eb[11]]("".__proto__.constructor.name))
        } catch (WW) {}
        yb: for (Wy = eb[0]; Wy < Uy[eb[4]]; Wy++) try {
          var hy;
          for (yb = Uy[Wy](), hy = eb[0]; hy < bb[eb[4]]; hy++)
            if (typeof yb[bb[hy]] === eb[5]) continue yb;
          return yb
        } catch (WW) {}
        return yb || this
      }() || {}, bU = yU.TextDecoder, WW = yU.Uint8Array, UW = yU.uU, hW = yU.String || String, fW = yU.Array || Array, ZW = function() {
        var yb, bb, Wy = new fW(eb[29]);
        return Sb(yb = hW[eb[8]] || hW.fromCharCode, bb = []),
          function(Uy) {
            var hy, fy, Zy, cb;
            for (Sb(fy = void 0, Zy = Uy[eb[4]], bb[eb[4]] = eb[0]), cb = eb[0]; cb < Zy;) Sb(fy = Uy[cb++], fy <= eb[28] ? hy = fy : fy <= 223 ? hy = (fy & eb[33]) << eb[7] | Uy[cb++] & eb[6] : fy <= 239 ? hy = (fy & eb[26]) << eb[10] | (Uy[cb++] & eb[6]) << eb[7] | Uy[cb++] & eb[6] : hW[eb[8]] ? hy = (fy & eb[9]) << eb[34] | (Uy[cb++] & eb[6]) << eb[10] | (Uy[cb++] & eb[6]) << eb[7] | Uy[cb++] & eb[6] : (hy = eb[6], cb += eb[18]), bb[eb[11]](Wy[hy] || (Wy[hy] = yb(hy))));
            return bb.join("")
          }
      }()),
      function(yb) {
        return typeof Bb[yb] === eb[5] ? Bb[yb] = function(yb) {
          var bb, Wy, Uy, hy, fy, Zy, cb;
          for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
            var Py = ';*=u1hNqva8eAXU`]Pw?~7bRj<}/@B+OJ^:C|Z.$H0gIL&o6dGmlfFsE5M_YSKtD,Tr)nxQc3ky#"2Vp4>z{%!W[(9i'.indexOf(bb[cb]);
            if (Py !== -eb[1])
              if (Zy < eb[0]) Zy = Py;
              else {
                Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                do {
                  Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                } while (fy > eb[9]);
                Zy = -eb[1]
              }
          }
          return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
        }(Kb[yb]) : Bb[yb]
      }(89) + "i" in sb && function() {
        var yb = function(yb) {
          var bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky = yb.length;
          if (Ky < eb[17]) return eb[0];
          if (Sb(bb = Math.max(...yb), Wy = Math.min(...yb)), bb === Wy) return eb[0];
          for (Sb(Uy = Array(Ky - eb[1]).fill(Number.MAX_SAFE_INTEGER), hy = Array(Ky - eb[1]).fill(Number.MIN_SAFE_INTEGER), fy = Math.ceil((bb - Wy) / (Ky - eb[1])), Zy = eb[0]), cb = eb[0]; cb < Ky; cb++) yb[cb] !== Wy && yb[cb] !== bb && Sb(Zy = Math.floor((yb[cb] - Wy) / fy), Uy[Zy] = Math.min(Uy[Zy], yb[cb]), hy[Zy] = Math.max(hy[Zy], yb[cb]));
          for (Sb(Py = Number.MIN_SAFE_INTEGER, oy = Wy), By = eb[0]; By < Ky - eb[1]; By++) Uy[By] === Number.MAX_SAFE_INTEGER && hy[By] === Number.MIN_SAFE_INTEGER || Sb(Py = Math.max(Py, Uy[By] - oy), oy = hy[By]);
          return Py = Math.max(Py, bb - oy)
        };
        console.log(yb)
      }(), (() => {
        function yb(yb) {
          return typeof Bb[yb] === eb[5] ? Bb[yb] = function(yb) {
            var bb, Wy, Uy, hy, fy, Zy, cb;
            for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
              var Py = 'AWu&`%@"+!3/#;4IQi|78$}9*.P,wD6U1khzxLJB^<rNYe:SnbOTvMcEgmFfX?>](dVa=Hjp2oql{Ry[t~sK05C_G)Z'.indexOf(bb[cb]);
              if (Py !== -eb[1])
                if (Zy < eb[0]) Zy = Py;
                else {
                  Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                  do {
                    Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                  } while (fy > eb[9]);
                  Zy = -eb[1]
                }
            }
            return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
          }(Kb[yb]) : Bb[yb]
        }
        yb(90) in sb && function() {
          var yb, bb, Wy;

          function Uy(yb) {
            var bb, Wy, Uy, hy, fy, Zy, cb, Py = 's6UP8*L9:z,0`|~.@#SRy>VWkh)xYD(C!7wiHI2;jZJQ?BA+<$vl}1=tb5_dgN]uF/3G"afKX[{mqr%&O4EpocT^eMn';
            for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
              var oy = Py.indexOf(bb[cb]);
              if (oy !== -eb[1])
                if (Zy < eb[0]) Zy = oy;
                else {
                  Sb(Zy += oy * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                  do {
                    Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                  } while (fy > eb[9]);
                  Zy = -eb[1]
                }
            }
            return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
          }

          function hy(yb) {
            return typeof Bb[yb] === eb[5] ? Bb[yb] = Uy(Kb[yb]) : Bb[yb]
          }
          Sb(yb = hy(eb[12]) + hy(92) + hy(93) + hy(94) + hy(95), bb = hy(96) + hy(97) + hy(98) + hy(99) + hy(100) + "?", Wy = hy(101) + hy(102) + hy(103) + hy(104) + hy(105) + hy(106), yb.match(bb + Wy))
        }();
        const bb = eb[20],
          Wy = yb(107) + yb(108) + yb(109),
          Uy = [eb[0], eb[1], eb[17], eb[18]].map((yb => {
            let bb = eb[0];
            for (let Uy = eb[18]; Uy >= eb[0]; Uy--) {
              function hy(yb) {
                var bb, Wy, Uy, hy, fy, Zy, cb;
                for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                  var Py = 'I!{Dcn&S#@p}_l(9?m/$>suj2`7<]3Ce),FW%if^6=~gzVJ;K1YqZP.kNBMoEaU5bxH+4v"w8hTX[|tA*y0:GQRLOdr'.indexOf(bb[cb]);
                  if (Py !== -eb[1])
                    if (Zy < eb[0]) Zy = Py;
                    else {
                      Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                      do {
                        Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                      } while (fy > eb[9]);
                      Zy = -eb[1]
                    }
                }
                return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
              }

              function fy(yb) {
                return typeof Bb[yb] === eb[5] ? Bb[yb] = hy(Kb[yb]) : Bb[yb]
              }
              fy(110), bb = bb << eb[2] | Wy[fy(111) + fy(112)](yb * eb[22] + Uy)
            }
            return bb >>> eb[0]
          })),
          hy = (yb, bb) => (function(yb) {
            typeof Bb[yb] === eb[5] ? Bb[yb] = function(yb) {
              var bb, Wy, Uy, hy, fy, Zy, cb;
              for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                var Py = 'wVILWhtocDnQpF>vU[!?y}xY_1<a#ZB`NPAq$5,JudzKiC%Se3&mT~8jbf(2M0)EHXOGr4;l+sg@/|7=k*R96.{:"^]'.indexOf(bb[cb]);
                if (Py !== -eb[1])
                  if (Zy < eb[0]) Zy = Py;
                  else {
                    Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                    do {
                      Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                    } while (fy > eb[9]);
                    Zy = -eb[1]
                  }
              }
              return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
            }(Kb[yb]) : Bb[yb]
          }(113), yb << bb | yb >>> eb[35] - bb),
          fy = (yb, bb, Wy, Uy, fy) => {
            Sb(yb[bb] += yb[Wy], yb[fy] = hy(yb[fy] ^ yb[bb], eb[20]), yb[Uy] += yb[fy], yb[Wy] = hy(yb[Wy] ^ yb[Uy], eb[10]), yb[bb] += yb[Wy], yb[fy] = hy(yb[fy] ^ yb[bb], eb[2]), yb[Uy] += yb[fy], yb[Wy] = hy(yb[Wy] ^ yb[Uy], eb[9]))
          };
        Pb = (Wy, hy, Zy, cb) => {
          function Py(yb) {
            return typeof Bb[yb] === eb[5] ? Bb[yb] = function(yb) {
              var bb, Wy, Uy, hy, fy, Zy, cb;
              for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                var Py = '9(6/M%GVRQej~uw5aAlB!r3PiL",b.vHx@^JKnoq}4:F?>ZIY+O8<E7|=Ss&Dfk[`T2tdc_z;*]yU{)hC#0X$m1NgpW'.indexOf(bb[cb]);
                if (Py !== -eb[1])
                  if (Zy < eb[0]) Zy = Py;
                  else {
                    Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                    do {
                      Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                    } while (fy > eb[9]);
                    Zy = -eb[1]
                  }
              }
              return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
            }(Kb[yb]) : Bb[yb]
          }
          yb(119) + "5" in sb && function() {
            var yb = function(yb) {
              var bb, Wy, Uy, hy, fy, Zy, cb = eb[0];
              for (Sb(bb = {}, Wy = eb[0], Uy = eb[0], hy = eb[0], fy = yb.length), Zy = eb[0]; Zy < fy; Zy++) {
                var Py;
                for (Sb(bb = {}, Wy = eb[0], Uy = eb[1]), Py = Zy + eb[1]; Py < fy; Py++) yb[Zy].x !== yb[Py].x || yb[Zy].y !== yb[Py].y ? (bb[hy = yb[Zy].y === yb[Py].y ? Number.MAX_SAFE_INTEGER : (yb[Zy].x - yb[Py].x) / (yb[Zy].y - yb[Py].y)] || (bb[hy] = eb[0]), Sb(bb[hy]++, Wy = Math.max(Wy, bb[hy]))) : Uy++;
                Sb(Wy += Uy, cb = Math.max(cb, Wy))
              }
              return cb
            };
            console.log(yb)
          }();
          const oy = new DataView(hy[Py(eb[27])], hy[Py(121) + Py(122)], ob),
            By = new Uint32Array(bb);
          Sb(By[Py(eb[21])](Uy), By[Py(eb[21])](Wy, eb[22]), By[eb[15]] = oy[Py(eb[23]) + Py(eb[24])](eb[0], eb[25]), By[eb[16]] = oy[Py(eb[23]) + Py(eb[24])](eb[22], eb[25]), By[eb[26]] = oy[Py(eb[23]) + Py(eb[24])](eb[2], eb[25]));
          const Ky = new Uint32Array(bb),
            ey = new Uint8Array(Ky[Py(eb[27])]);
          for (let qb = eb[0], sy = Zy; qb < cb[Py(126)]; qb += bb * eb[22], sy++) {
            function Sy(yb) {
              var bb, Wy, Uy, hy, fy, Zy, cb;
              for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                var Py = '/#,1>9%!*(u&W"hfMA|3kOnj6LGza@dqD<H]iT:Ympo.=J$VvrZ~wcN8x4FB+E{`[?52SXyP;QC_sel7)IR^Kgt}0Ub'.indexOf(bb[cb]);
                if (Py !== -eb[1])
                  if (Zy < eb[0]) Zy = Py;
                  else {
                    Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                    do {
                      Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                    } while (fy > eb[9]);
                    Zy = -eb[1]
                  }
              }
              return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
            }

            function Ey(yb) {
              return typeof Bb[yb] === eb[5] ? Bb[yb] = Sy(Kb[yb]) : Bb[yb]
            }
            Sb(By[eb[10]] = sy, Ky[Ey(eb[28])](By));
            for (let mb = eb[0]; mb < eb[31]; mb++) {
              function Cy(yb) {
                var bb, Wy, Uy, hy, fy, Zy, cb;
                for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                  var Py = 'yDGmnWJS]/1V!C?NzR@)K#:Y.7BeF*k;<j}{PdcQrI9,gis~%83bfHTA|LEoM^5UwO$vt&qxX_2h>0a6lp4Z+[(u"=`'.indexOf(bb[cb]);
                  if (Py !== -eb[1])
                    if (Zy < eb[0]) Zy = Py;
                    else {
                      Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                      do {
                        Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                      } while (fy > eb[9]);
                      Zy = -eb[1]
                    }
                }
                return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
              }

              function Ty(yb) {
                return typeof Bb[yb] === eb[5] ? Bb[yb] = Cy(Kb[yb]) : Bb[yb]
              }

              function Vy() {
                var yb = function() {
                  var yb, bb, Wy = eb[0];

                  function Uy(yb, bb) {
                    return cb(fy(Py(yb), Py(bb)))
                  }

                  function hy(yb, bb, Wy) {
                    return function(yb, bb) {
                      var Wy, Uy, hy, fy, Zy, cb, Py, oy, By = bb.length;
                      for (Wy = Array(), Uy = Array(Math.ceil(yb.length / eb[17])), Zy = eb[0]; Zy < Uy.length; Zy++) Uy[Zy] = yb.charCodeAt(Zy * eb[17]) << eb[2] | yb.charCodeAt(Zy * eb[17] + eb[1]);
                      for (; Uy.length > eb[0];) {
                        for (Sb(oy = Array(), Py = eb[0]), Zy = eb[0]; Zy < Uy.length; Zy++) Sb(Py = (Py << eb[20]) + Uy[Zy], cb = Math.floor(Py / By), Py -= cb * By), (oy.length > eb[0] || cb > eb[0]) && (oy[oy.length] = cb);
                        Sb(Wy[Wy.length] = Py, Uy = oy)
                      }
                      for (hy = "", Zy = Wy.length - eb[1]; Zy >= eb[0]; Zy--) hy += bb.charAt(Wy[Zy]);
                      for (fy = Math.ceil(yb.length * eb[2] / (Math.log(bb.length) / Math.log(eb[17]))), Zy = hy.length; Zy < fy; Zy++) hy = bb[eb[0]] + hy;
                      return hy
                    }(fy(Py(yb), Py(bb)), Wy)
                  }

                  function fy(yb, bb) {
                    var Wy, Uy, hy = oy(yb);
                    hy.length > eb[20] && (hy = Cy(hy, yb.length * eb[2]));
                    var fy = Array(eb[20]),
                      Zy = Array(eb[20]);
                    for (Wy = eb[0]; Wy < eb[20]; Wy++) Sb(fy[Wy] = 909522486 ^ hy[Wy], Zy[Wy] = 1549556828 ^ hy[Wy]);
                    return Uy = Cy(fy.concat(oy(bb)), eb[30] + bb.length * eb[2]), By(Cy(Zy.concat(Uy), eb[30] + 256))
                  }

                  function Zy(yb) {
                    var bb, Uy, hy, fy;

                    function Zy(yb) {
                      return typeof Bb[yb] === eb[5] ? Bb[yb] = function(yb) {
                        var bb, Wy, Uy, hy, fy, Zy, cb;
                        for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                          var Py = 'MuVniDQXtgkOjmATb<"aG8Y0U2cKv(yN[)BZ6fPpr$4J9,{!^%C:}@d`h_+>S?]HWIo5LzR~1w/Exe=;3#7Fsl|q.&*'.indexOf(bb[cb]);
                          if (Py !== -eb[1])
                            if (Zy < eb[0]) Zy = Py;
                            else {
                              Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                              do {
                                Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                              } while (fy > eb[9]);
                              Zy = -eb[1]
                            }
                        }
                        return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
                      }(Kb[yb]) : Bb[yb]
                    }
                    for (Sb(bb = Wy ? Ty(137) + Zy(138) + Zy(139) : Zy(140) + Zy(141) + Zy(142), Uy = "", hy = void 0), fy = eb[0]; fy < yb.length; fy++) Sb(hy = yb.charCodeAt(fy), Uy += bb.charAt(hy >>> eb[22] & eb[26]) + bb.charAt(hy & eb[26]));
                    return Uy
                  }

                  function cb(bb) {
                    var Wy, Uy, hy, fy;

                    function Zy(yb) {
                      return typeof Bb[yb] === eb[5] ? Bb[yb] = function(yb) {
                        var bb, Wy, Uy, hy, fy, Zy, cb;
                        for (Sb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = eb[0], fy = eb[0], Zy = -eb[1]), cb = eb[0]; cb < Wy; cb++) {
                          var Py = '?MsKRDChdIETbk=tOlfVBL:)y8;x1(|$,23>0[~9&u/6`@wQiparAJzmF^U%+o}_7N4qv]{Z.ng5cS!WX*YGPe#"jH<'.indexOf(bb[cb]);
                          if (Py !== -eb[1])
                            if (Zy < eb[0]) Zy = Py;
                            else {
                              Sb(Zy += Py * eb[12], hy |= Zy << fy, fy += (Zy & eb[13]) > eb[14] ? eb[15] : eb[16]);
                              do {
                                Sb(Uy.push(hy & eb[3]), hy >>= eb[2], fy -= eb[2])
                              } while (fy > eb[9]);
                              Zy = -eb[1]
                            }
                        }
                        return Zy > -eb[1] && Uy.push((hy | Zy << fy) & eb[3]), qW(Uy)
                      }(Kb[yb]) : Bb[yb]
                    }
                    for (Sb(Wy = Zy(143) + Zy(144) + Zy(145) + eb[44], Uy = "", hy = bb.length), fy = eb[0]; fy < hy; fy += eb[18]) {
                      var cb, Py = bb.charCodeAt(fy) << eb[20] | (fy + eb[1] < hy ? bb.charCodeAt(fy + eb[1]) << eb[2] : eb[0]) | (fy + eb[17] < hy ? bb.charCodeAt(fy + eb[17]) : eb[0]);
                      for (cb = eb[0]; cb < eb[22]; cb++) fy * eb[2] + cb * eb[7] > bb.length * eb[2] ? Uy += yb : Uy += Wy.charAt(Py >>> eb[7] * (eb[18] - cb) & eb[6])
                    }
                    return Uy
                  }

                  function Py(yb) {
                    var bb, Wy, Uy, hy = "";
                    for (bb = -eb[1]; ++bb < yb.length;) Sb(Wy = yb.charCodeAt(bb), Uy = bb + eb[1] < yb.length ? yb.charCodeAt(bb + eb[1]) : eb[0]), 55296 <= Wy && Wy <= 56319 && 56320 <= Uy && Uy <= 57343 && Sb(Wy = 65536 + ((Wy & eb[32]) << eb[31]) + (Uy & eb[32]), bb++), Wy <= eb[28] ? hy += String.fromCharCode(Wy) : Wy <= 2047 ? hy += String.fromCharCode(192 | Wy >>> eb[7] & eb[33], eb[29] | Wy & eb[6]) : Wy <= eb[40] ? hy += String.fromCharCode(224 | Wy >>> eb[10] & eb[26], eb[29] | Wy >>> eb[7] & eb[6], eb[29] | Wy & eb[6]) : Wy <= 2097151 && (hy += String.fromCharCode(240 | Wy >>> eb[34] & eb[9], eb[29] | Wy >>> eb[10] & eb[6], eb[29] | Wy >>> eb[7] & eb[6], eb[29] | Wy & eb[6]));
                    return hy
                  }

                  function oy(yb) {
                    var bb, Wy = Array(yb.length >> eb[17]);
                    for (bb = eb[0]; bb < Wy.length; bb++) Wy[bb] = eb[0];
                    for (bb = eb[0]; bb < yb.length * eb[2]; bb += eb[2]) Wy[bb >> eb[36]] |= (yb.charCodeAt(bb / eb[2]) & eb[3]) << eb[37] - bb % eb[35];
                    return Wy
                  }

                  function By(yb) {
                    var bb, Wy = "";
                    for (bb = eb[0]; bb < yb.length * eb[35]; bb += eb[2]) Wy += String.fromCharCode(yb[bb >> eb[36]] >>> eb[37] - bb % eb[35] & eb[3]);
                    return Wy
                  }

                  function Ky(yb, bb) {
                    return yb >>> bb | yb << eb[35] - bb
                  }

                  function ey(yb, bb) {
                    return yb >>> bb
                  }

                  function qb(yb, bb, Wy) {
                    return yb & bb ^ ~yb & Wy
                  }

                  function sy(yb, bb, Wy) {
                    return yb & bb ^ yb & Wy ^ bb & Wy
                  }

                  function Sy(yb) {
                    return Ky(yb, eb[17]) ^ Ky(yb, eb[15]) ^ Ky(yb, 22)
                  }

                  function Ey(yb) {
                    return Ky(yb, eb[7]) ^ Ky(yb, eb[42]) ^ Ky(yb, 25)
                  }

                  function ly(yb) {
                    return Ky(yb, eb[9]) ^ Ky(yb, eb[34]) ^ ey(yb, eb[18])
                  }

                  function mb(yb) {
                    return Ky(yb, 17) ^ Ky(yb, eb[38]) ^ ey(yb, eb[31])
                  }

                  function Cy(yb, Wy) {
                    var Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, Cy, Ty, Jy, gb = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                    for (Uy = new Array(eb[39]), Sb(yb[Wy >> eb[36]] |= eb[29] << eb[37] - Wy % eb[35], yb[(Wy + eb[39] >> eb[41] << eb[22]) + eb[26]] = Wy), ey = eb[0]; ey < yb.length; ey += eb[20]) {
                      for (Sb(hy = gb[eb[0]], fy = gb[eb[1]], Zy = gb[eb[17]], cb = gb[eb[18]], Py = gb[eb[22]], oy = gb[eb[36]], By = gb[eb[7]], Ky = gb[eb[9]]), Cy = eb[0]; Cy < eb[39]; Cy++) Sb(Cy < eb[20] ? Uy[Cy] = yb[Cy + ey] : Uy[Cy] = Vy(Vy(Vy(mb(Uy[Cy - eb[17]]), Uy[Cy - eb[9]]), ly(Uy[Cy - eb[26]])), Uy[Cy - eb[20]]), Ty = Vy(Vy(Vy(Vy(Ky, Ey(Py)), qb(Py, oy, By)), bb[Cy]), Uy[Cy]), Jy = Vy(Sy(hy), sy(hy, fy, Zy)), Ky = By, By = oy, oy = Py, Py = Vy(cb, Ty), cb = Zy, Zy = fy, fy = hy, hy = Vy(Ty, Jy));
                      Sb(gb[eb[0]] = Vy(hy, gb[eb[0]]), gb[eb[1]] = Vy(fy, gb[eb[1]]), gb[eb[17]] = Vy(Zy, gb[eb[17]]), gb[eb[18]] = Vy(cb, gb[eb[18]]), gb[eb[22]] = Vy(Py, gb[eb[22]]), gb[eb[36]] = Vy(oy, gb[eb[36]]), gb[eb[7]] = Vy(By, gb[eb[7]]), gb[eb[9]] = Vy(Ky, gb[eb[9]]))
                    }
                    return gb
                  }

                  function Vy(yb, bb) {
                    var Wy = (yb & eb[40]) + (bb & eb[40]);
                    return (yb >> eb[20]) + (bb >> eb[20]) + (Wy >> eb[20]) << eb[20] | Wy & eb[40]
                  }
                  return yb = "", bb = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                    hex: function(yb) {
                      return Zy(function(yb) {
                        return By(Cy(oy(yb), yb.length * eb[2]))
                      }(Py(yb)))
                    },
                    b64: Uy,
                    any: hy,
                    hex_hmac: function(yb, bb) {
                      return Zy(fy(Py(yb), Py(bb)))
                    },
                    b64_hmac: Uy,
                    any_hmac: hy
                  }
                }();
                console.log(yb)
              }
              Ty(eb[29]) in sb && Vy(), Sb(fy(Ky, eb[0], eb[22], eb[2], eb[10]), fy(Ky, eb[1], eb[36], eb[41], eb[15]), fy(Ky, eb[17], eb[7], eb[31], eb[16]), fy(Ky, eb[18], eb[9], eb[42], eb[26]), fy(Ky, eb[0], eb[36], eb[31], eb[26]), fy(Ky, eb[1], eb[7], eb[42], eb[10]), fy(Ky, eb[17], eb[9], eb[2], eb[15]), fy(Ky, eb[18], eb[22], eb[41], eb[16]))
            }
            for (let Jy = eb[0]; Jy < bb; Jy++) {
              Ey(146), Ky[Jy] += By[Jy]
            }
            const ly = Math[Ey(149)](bb * eb[22], cb[Ey(150)] - qb);
            for (let gb = eb[0]; gb < ly; gb++) cb[qb + gb] ^= ey[gb]
          }
        }
      })();
    const mW = [1, "b", 0, 25, "c", 144, "g", 88, 6, 4, 8, 255, "length", 181, 180, 3, "a", "e", "undefined", void 0, 139, 2, 157, 63, "fromCodePoint", 7, 12, "push", 150, 124, 140, "i", 91, 5, 30, 8191, 13, 14, 69, 183, 66, "d", 33, !1, "h", 179, 195, 9, 127, 128, 111, 22, 104, 73, 126, 204, 211, 19, "f", 214, 168, 50, 213, 245, !0, 241, 146, 224, 137, 103, 221, 148];

    function Cb(yb) {
      return typeof bU !== mW[18] && bU ? (new bU).decode(new WW(yb)) : typeof UW !== mW[18] && UW ? UW.from(yb).toString("utf-8") : ZW(yb)
    }

    function Tb() {}

    function Vb() {
      Vb = function() {}
    }
    Vb(Eb = {}, lb = ['Kg`(7r($JE}5DTI["geWimC<Xy1SN6', "}(Oivt:hbS/Sf#4JGVOh>", "uKK0[h(j?Q(D^69o#V$jrrY5DRu<DT`Fvp!*r/yJ@pEsN6", "ruM*7)3}Py`iHfm[NAb)E", "z)I&S:%5A&B6lB}DNVj0diaah&]ODH@oevJC=:Ca13tY>!{4nIGdjRN#Eg0C$", '$O@~GlJsRQm<]f+I030=/N4)0xIs&bhVSJJ_"u>L5Q/bCb`"bg]gE', ";vAiUbT{ju!B:M{dZE(a[hz", "rYf=VME`[y@=t^m}(z", "TgO[F^/2i7LAdvC.Hv=d:r%5*", "ob^<aDo5pgyDNU1[gz", "k(}?VM9$", 'CK:)3sRMgxbWTHZGd)e(C2d"[yff*.A?bALgAR8K6', ":*fr+s&Lr7E*co3,V(vwnCp#AR}(rOhV:Y8r7Xa<HgM9|FO?]**<]2e4h#@", "FBrIwgz", 'AR[&ZRX$wpI4"ve!dn1*', 'xgK=ahpM}5wQN!uLvD(a9RSt%3?~G+y"g.~(g:~[Ob(%1v#', 'da4wP)n$x156YX"IC(ewYR@}&QBP=H!4%m(WMjx#=#Pt|#^[YtC(ybz', "gVMr/uZ8f1bW$B6[", "=god:s+0^u8G_6y[", "((3aaME}H&F=n5y|_*`", "G*od{Rd[bmkQX%X,u]@W?]E5fx", "/EKaTjP*_gL", "%QKT15J$", '4aNI;lU}Ex:)KOUFxyS*=F|}r7)fIv`"p)w**"N$xg&BZ/j>Sz', "uAa~B(r39ut_H_&I<R(7", "2*9w789#$yZXTFp??E:.}MR$6#26ZO8Dj|mdT_z", "lQA*6=0l)YG2p+~>Z9^=kC)})Y5", '^K;7%"aMs#e+LUu|GOw[8Rt`zyh6JYY?h]}[qt[1p#wYsBB,8E5wa', "ggy_<mS`", 'Zd5(M(V[pxVu!?0dH4")crn#<', "mJt=<0tt#Y_", 'q&w*=5k<"R/y5F^"Qdmheo(J}AM_7/$Fva8I/mK%PgQys"&', '1V?wJ/z[Db0I{FKo"O|?xRu$W7H>$', ";As<f2ftOO{Un`)x4ah0d", '"(X7!=e3&mF<3v#EZNbW>u+0i06Fd?f>J*=_q),$', "yBKWkKXLv", '_v?w/s0Lpx8f"/Y', 'x]"~Y"&0S#,DR"M.FF<hki]Lap', "2mnw#R;J~QBS5>SL>t^rxm$0<", '8B}[1:]<REgDV?IaDRIr8R5Kpx)G^"6}sIz[@g.1rSAQ.+9>;YmrsUK*?E5', 'aEYIer2LKxE5g^X,RB"=B,QL.ECfV?8!8>haRbEhREEsN#U>:|W<', '5B,hnS.`$36&)_Q"aOAi+B^JK#@~Y+', '_R%(C=b5F1G(K/4}%Yw[Gr3{cE]{V?b"', "x(i&{R!}<#NADTKIh(>[R2|}*", "[4ir#)b`", '4JJrZoA<61m6jo*o_N%&6B[h"1@Ba62.;|o<:ulAtphsZ%aa`_CgPXW(|u=', "h(r0kg,MYPQf__tVB]_(gWc2qx.*z?5L_(M&!rghz&4I8_&", "7yohDDfhOb#Uru^J:z", "~VK.l]2(/g$jzB9xjK,rbb!fz3x2D]aaER0IgWpaF#kvs}5D,AL*", 'Hd{?0F0$dQmuPFL,#yW)NWz"vg;RxYHdXYCgm5,Rf1OF/Y1a3]Davmz', "y*3){RVh=10PE]_?wBzk3/U{{xTsz", 'kRFIdoQ$fxsf8f<FeElI<XStLmf{I.q"U(k(gtpDsxDU0!i?632r@H1)dY', "9widGl~83m{Ug5p?FB$", "(Em<8]ttp#o2!/;L~yh),KZ}Ip_p?T^A2F,_,D84vRlfxMbD>)M&", "zglrTfp0i0l$NUSd^Jzg5Us$oxK%$", "^]!kUB7}G#YFufsF~$", "A]y6}Mz", "aJ?a$0i4@7P{P_M.n3`", '%SNI[h?<kRZXkUvA`Oq+9Xy$^{lf7B1"BV.?THIav', ':I}iIgRa"x*HN!`{', ";Sf&kh^J*", "oF=6]m[3*~AFE/5L0.z&", "dbV&)X1);Q65ITVoeBmr;l:}y7DIfsVo*$", "|3$?}MyJ4xBCD5rovy5akC6}ZABdbO9><DEa[", "2Cb~$2o55EnY(oW?,n6+", ".wtdb(ss(&y9bvzn:([dQX/Rm{", "=NP0sX37CYIsWBwJhI^I<2Bt?m4", 'X>P7"^H}uE3F,.=4NR/.P)Nl^uy$DHcL1Fa=j=|hV5A?MHm|O.hW/mz', '>]k(gFo"O{YH4>Wo2QX7&"NjV5prYTw"u4G6!)(xx3hsJv', "qAh0=,_M~E&B9.xE", "p)<k;Cm3#{[Q2o}D=ROi;/O#J#,~zvdA0]N~dDM$", "oBlhZ]qaU5:)F>zJ,E2&;RA#6", "6)UCjBj26", 'pK,*&BGt/g2"%Dz}6]_7Zo%49Y,mzv7>B47*A', "@KO*S5caP&AmzvLIiSGCm0g{[piOKO(4bBk?o^j(=EuS@?fI{be(Tj`}j9(%$", 'HBbIVD"[CA"=@/;dyQD~sU+$', "NQK~(f+s81Vr,oN,9t~wZk_$", "4&6)i)<<*~@svv!.fvcCJiH5H&", "CK0hAsQLQg=9F6mDlE+~?Cz", "cE7g$t>L*", 'oQqaH"P5$P<KMf@,KBziW"@hE#8)9`TVM]vWSbz', "](o_ID@3em0<!/O.D(<[F^j<^m4", "hNV(YBs#i9cfss+FbB)(^:eh[O^%LUv>I$", '+3z[#RuL_R=hDom[zVGh:m6"!{#j55lDv3~(9oLskObW*^Z!7]z*G', "iuf_z==L_RZfKB0dg*`", "$b(0wC,$", "f*aIC2[[1092?oB4Smw[!RS[jQ)D,fy[2*`", 'LRY=r/G}IyWbrv^"Fb2hKt{)7~(mf#F[EyJkCs|`', 'B..("i~7|mFAT^`Fsg|jahlax&65"?.|mKe7?g<y@SZG"/JD', "CYjwkMR#*", '1meWXo`}_g3J"/g4MVS&WTjlpxasRBvA3JDay=_x4xX6T^O,~$', "yVQ(Dg>at0(<:M*", ';C_?Kbz|_3NmsUya,vrTIhH83YW6#b,xV*s]mbyMdAl09Hl?LQxwi="{v', "_NNr?/2#WY", 'UJa<CBV[Q&u{m#6{)NygOmRMj9`HQ"zncEzg$X,R%yOE,Hl?x$', "e9o<Zhd}NYy{?H*", "~)Ok)r5tHR^{l%tV?V`w#X}[Fgfb$", "|FTw0W(xEgg%vv", "C(lh%hitpx1CUU3", "UNu)LjZV&YwhI`Zahg1(/Xz", 'j(|?P:C(y0Bs}B@,h*s]RU2R"gy9$', ',Rf63BOLh&65#b%VRgcgWr*|bQ`i"?VFUF0<;rh5k{u', "{ymCf2kRKR]$(YXVGadaegaa@Y?vs6|>`gMrhWX$zO", "VRmCr)/aPOGFC}E4UgMg`:1KkR9Q2fPFIvna64S8N0qwIT7I)Fvw/]J$", "mIGdz)84W77KvOC>aE:0z,?05mG=c.ba9_)73", 'vD]&U"Hhi0Hfk6K>#_(0F^K}_ysy@vwJ', "xRN<,gz", "wB,d=5_#+", "#]NdNjxD4O~v8sx4Dv~wk_;DkgO[%D8GP(N~iNe4Np", "Z($U(W/R4OEjio0LM*&j!R%)W0@r1v+n+ae7IMo1&A]_n`$n", '_v{w[l)*{RWy;"U{GQu)7rz%.Y', "yukj9=Z3am~g6vH,)*(U))Wl/RL", "t&6TK=U[BOcR:/Zd=4m6X/Lxp1i7~^1}DBR*h,#0^Y", "tV[h|_l$", "/BFr7=JL9u59DY^AGRdISH0<c#0sBU_VDFv", 'nmb=64G"eu1fKb+n9)B&cre48#j6xHh?x{iI|fIaG5h', 'I*NI:uxL+g:W^sZ!$)N<%X:39AzF4#|.+&2C>V&#4g{j+UQ"uJR(Kbm`tuF', "ntme#tjB", "+.`b~]yj+_B", "aAHpA3YmY&v", "4y`b=/E;(T5", "4yQ*d]_4Um", "5.(SOfXmDcu", "v.yYVi<BMmp", "rW%qt<cN}_x", "Xmjx/NJnMm6", "S7S)C)M@v_z", "lWLS[<{@Zm#", "_U$DPProScS", 'IU"!jwDT', "As5lj|rT", "Ybu.U><A", "oU9W!q0T", "}];bDDSX{&t", ">W94*2gF", "w~bm+TA2", "}oQhQJZ2", "D.p?`s<3", "i<z717zy", "Z2uI6HOv", "*}07mHNv", "W2bF", "22xz)H9v", 'H5wY"', "T2SWtYx", "T2%Uk]1v", "C2tF", "sebn]y0A", "<W4<IVtT<`", "9I@_E1MA", "fzX%", "wWF%0", "13$%", "XIY<7i@", "BeOQx^MA"]), Vb(yU = function(...yb) {
      Vb(yb[mW[12]] = mW[2], yb[mW[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], yb[mW[13]] = mW[19], yb[mW[14]] = []);
      try {
        Vb(yb[mW[13]] = Object, yb[mW[14]][mW[27]]("".__proto__.constructor.name))
      } catch (lb) {}
      yb: for (yb[mW[15]] = mW[2]; yb[mW[15]] < yb[mW[16]][mW[12]]; yb[mW[15]]++) try {
        for (yb[mW[13]] = yb[mW[16]][yb[mW[15]]](), yb[mW[17]] = mW[2]; yb[mW[17]] < yb[mW[14]][mW[12]]; yb[mW[17]]++)
          if (typeof yb[mW[13]][yb[mW[14]][yb[mW[17]]]] === mW[18]) continue yb;
        return yb[mW[13]]
      } catch (lb) {}
      return yb[mW[13]] || this
    }() || {}, bU = yU.TextDecoder, WW = yU.Uint8Array, UW = yU.uU, hW = yU.String || String, fW = yU.Array || Array, ZW = function() {
      var yb, bb, Wy = new fW(mW[49]);
      return Vb(yb = hW[mW[24]] || hW.fromCharCode, bb = []),
        function(...Uy) {
          for (Vb(Uy[mW[12]] = mW[0], Uy[mW[22]] = mW[19], Uy[mW[21]] = mW[19], Uy[mW[15]] = Uy[mW[2]][mW[12]], bb[mW[12]] = mW[2]), Uy[-mW[20]] = mW[2]; Uy[-mW[20]] < Uy[mW[15]];) Vb(Uy[mW[21]] = Uy[mW[2]][Uy[-mW[20]]++], Uy[mW[21]] <= mW[48] ? Uy[mW[22]] = Uy[mW[21]] : Uy[mW[21]] <= 223 ? Uy[mW[22]] = (31 & Uy[mW[21]]) << mW[8] | Uy[mW[2]][Uy[-mW[20]]++] & mW[23] : Uy[mW[21]] <= 239 ? Uy[mW[22]] = (15 & Uy[mW[21]]) << mW[26] | (Uy[mW[2]][Uy[-mW[20]]++] & mW[23]) << mW[8] | Uy[mW[2]][Uy[-mW[20]]++] & mW[23] : hW[mW[24]] ? Uy[mW[22]] = (Uy[mW[21]] & mW[25]) << 18 | (Uy[mW[2]][Uy[-mW[20]]++] & mW[23]) << mW[26] | (Uy[mW[2]][Uy[-mW[20]]++] & mW[23]) << mW[8] | Uy[mW[2]][Uy[-mW[20]]++] & mW[23] : (Uy[mW[22]] = mW[23], Uy[-mW[20]] += mW[15]), bb[mW[27]](Wy[Uy[mW[22]]] || (Wy[Uy[mW[22]]] = yb(Uy[mW[22]]))));
          return bb.join("")
        }
    }()), (() => {
      function yb(...yb) {
        return yb[mW[12]] = mW[0], typeof Eb[yb[mW[2]]] === mW[18] ? Eb[yb[mW[2]]] = function(...yb) {
          for (Vb(yb[mW[12]] = mW[0], yb[mW[45]] = 'CFjWDTn1Mbw?{;.ARm:&Q0/aZpqxzh4GHloiKfOVN9e[d7@~uS#6BYctLv5Uy$_E(,>"]P<|)}s=J*Ig`382r%!X+^k', yb[mW[1]] = "" + (yb[mW[2]] || ""), yb[mW[15]] = yb[mW[1]].length, yb[mW[46]] = [], yb[mW[33]] = mW[2], yb[mW[8]] = mW[2], yb[mW[6]] = -mW[0]), yb[mW[44]] = mW[2]; yb[mW[44]] < yb[mW[15]]; yb[mW[44]]++)
            if (yb[mW[31]] = yb[mW[45]].indexOf(yb[mW[1]][yb[mW[44]]]), yb[mW[31]] !== -mW[0])
              if (yb[mW[6]] < mW[2]) yb[mW[6]] = yb[mW[31]];
              else {
                Vb(yb[mW[6]] += yb[mW[31]] * mW[32], yb[mW[33]] |= yb[mW[6]] << yb[mW[8]], yb[mW[8]] += (yb[mW[6]] & mW[35]) > mW[7] ? mW[36] : mW[37]);
                do {
                  Vb(yb[mW[46]].push(yb[mW[33]] & mW[11]), yb[mW[33]] >>= mW[10], yb[mW[8]] -= mW[10])
                } while (yb[mW[8]] > mW[25]);
                yb[mW[6]] = -mW[0]
              } return yb[mW[6]] > -mW[0] && yb[mW[46]].push((yb[mW[33]] | yb[mW[6]] << yb[mW[8]]) & mW[11]), Cb(yb[mW[46]])
        }(lb[yb[mW[2]]]) : Eb[yb[mW[2]]]
      } [][mW[12]] = mW[2];
      const bb = mW[47],
        Wy = yb(118) + yb(119) + yb(120) + yb(121),
        Uy = {
          [mW[47]]: yb(122) + yb(123) + yb(mW[29]) + yb(125) + yb(mW[54]) + yb(mW[48]) + yb(mW[49]) + "1"
        },
        hy = yb => {
          const bb = Uy[yb];
          if (!bb) {
            function Wy(...yb) {
              for (Vb(yb[mW[12]] = mW[0], yb[mW[0]] = 'AbTHsIfGLplBKkJVOEZarehRnCiXtoYjWQFm}/#_z6DUMux!=709NcP+(?,4@5~)<d3vqg:w;8[|.2"^>y$`{&1%*]S', yb[mW[21]] = "" + (yb[mW[2]] || ""), yb[mW[15]] = yb[mW[21]].length, yb[mW[52]] = [], yb[mW[17]] = mW[2], yb[mW[51]] = mW[2], yb[mW[6]] = -mW[0]), yb[mW[44]] = mW[2]; yb[mW[44]] < yb[mW[15]]; yb[mW[44]]++)
                if (yb[-mW[50]] = yb[mW[0]].indexOf(yb[mW[21]][yb[mW[44]]]), yb[-mW[50]] !== -mW[0])
                  if (yb[mW[6]] < mW[2]) yb[mW[6]] = yb[-mW[50]];
                  else {
                    Vb(yb[mW[6]] += yb[-mW[50]] * mW[32], yb[mW[17]] |= yb[mW[6]] << yb[mW[51]], yb[mW[51]] += (yb[mW[6]] & mW[35]) > mW[7] ? mW[36] : mW[37]);
                    do {
                      Vb(yb[mW[52]].push(yb[mW[17]] & mW[11]), yb[mW[17]] >>= mW[10], yb[mW[51]] -= mW[10])
                    } while (yb[mW[51]] > mW[25]);
                    yb[mW[6]] = -mW[0]
                  } return yb[mW[6]] > -mW[0] && yb[mW[52]].push((yb[mW[17]] | yb[mW[6]] << yb[mW[51]]) & mW[11]), Cb(yb[mW[52]])
            }

            function hy(...yb) {
              return yb[mW[12]] = mW[0], typeof Eb[yb[mW[2]]] === mW[18] ? Eb[yb[mW[2]]] = Wy(lb[yb[mW[2]]]) : Eb[yb[mW[2]]]
            }
            throw new Error(hy(129) + hy(130) + hy(131) + hy(132) + " v" + yb)
          }
          return [mW[2], mW[0], mW[21], mW[15], mW[9], mW[33], mW[8], mW[25]].map(((...yb) => (yb[mW[12]] = mW[0], parseInt(bb[function(yb) {
            return typeof Eb[yb] === mW[18] ? Eb[yb] = function(...yb) {
              for (Vb(yb[mW[12]] = mW[0], yb[-mW[56]] = '|ZWrGaLHcCohISO;T=ux9J>RKl8p+,2}yqj6)B{`N"F_Vi!:ve%tgX@(w4Q5]/m$&z*f#0MY7UA.b3^k[DPE~sn?d1<', yb[-mW[53]] = "" + (yb[mW[2]] || ""), yb[-mW[55]] = yb[-mW[53]].length, yb[-mW[54]] = [], yb[mW[33]] = mW[2], yb[mW[58]] = mW[2], yb[mW[6]] = -mW[0]), yb[mW[10]] = mW[2]; yb[mW[10]] < yb[-mW[55]]; yb[mW[10]]++)
                if (yb[mW[57]] = yb[-mW[56]].indexOf(yb[-mW[53]][yb[mW[10]]]), yb[mW[57]] !== -mW[0])
                  if (yb[mW[6]] < mW[2]) yb[mW[6]] = yb[mW[57]];
                  else {
                    Vb(yb[mW[6]] += yb[mW[57]] * mW[32], yb[mW[33]] |= yb[mW[6]] << yb[mW[58]], yb[mW[58]] += (yb[mW[6]] & mW[35]) > mW[7] ? mW[36] : mW[37]);
                    do {
                      Vb(yb[-mW[54]].push(yb[mW[33]] & mW[11]), yb[mW[33]] >>= mW[10], yb[mW[58]] -= mW[10])
                    } while (yb[mW[58]] > mW[25]);
                    yb[mW[6]] = -mW[0]
                  } return yb[mW[6]] > -mW[0] && yb[-mW[54]].push((yb[mW[33]] | yb[mW[6]] << yb[mW[58]]) & mW[11]), Cb(yb[-mW[54]])
            }(lb[yb]) : Eb[yb]
          }(133)](yb[mW[2]] * mW[10], yb[mW[2]] * mW[10] + mW[10]), 16))))
        };
      Vb(fb = (...Wy) => (Wy[mW[12]] = mW[0], yb(134) + "p" in Tb && function() {
        function yb(...yb) {
          for (Vb(yb[mW[12]] = mW[0], yb[-mW[60]] = 't23S[)m%<pM^$49l=_dx#c8wb:OeU]!an1oj7z&y0A6}>.VZYIJ?gE`TrGs,"N5@Bq;HXW+|Rk(hfD/vPQiuK*LC~{F', yb[mW[1]] = "" + (yb[mW[2]] || ""), yb[mW[4]] = yb[mW[1]].length, yb[-mW[63]] = [], yb[-mW[62]] = mW[2], yb[mW[8]] = mW[2], yb[mW[6]] = -mW[0]), yb[-mW[59]] = mW[2]; yb[-mW[59]] < yb[mW[4]]; yb[-mW[59]]++)
            if (yb[-mW[61]] = yb[-mW[60]].indexOf(yb[mW[1]][yb[-mW[59]]]), yb[-mW[61]] !== -mW[0])
              if (yb[mW[6]] < mW[2]) yb[mW[6]] = yb[-mW[61]];
              else {
                Vb(yb[mW[6]] += yb[-mW[61]] * mW[32], yb[-mW[62]] |= yb[mW[6]] << yb[mW[8]], yb[mW[8]] += (yb[mW[6]] & mW[35]) > mW[7] ? mW[36] : mW[37]);
                do {
                  Vb(yb[-mW[63]].push(yb[-mW[62]] & mW[11]), yb[-mW[62]] >>= mW[10], yb[mW[8]] -= mW[10])
                } while (yb[mW[8]] > mW[25]);
                yb[mW[6]] = -mW[0]
              } return yb[mW[6]] > -mW[0] && yb[-mW[63]].push((yb[-mW[62]] | yb[mW[6]] << yb[mW[8]]) & mW[11]), Cb(yb[-mW[63]])
        }

        function bb(...bb) {
          return bb[mW[12]] = mW[0], typeof Eb[bb[mW[2]]] === mW[18] ? Eb[bb[mW[2]]] = yb(lb[bb[mW[2]]]) : Eb[bb[mW[2]]]
        }

        function Wy(...yb) {
          yb[mW[12]] = mW[0];
          const bb = {};
          for (let Wy of yb[mW[2]].replace(/[^w]/g, "").toLowerCase()) bb[Wy] = bb[Wy] + mW[0] || mW[0];
          return bb
        }

        function Uy(yb, bb) {
          const Wy = buildCharMap(yb),
            Uy = buildCharMap(bb);
          for (let hy in Wy)
            if (Wy[hy] !== Uy[hy]) return mW[43];
          return Object.keys(Wy).length !== Object.keys(Uy).length ? mW[43] : mW[64]
        }

        function hy(yb) {
          return fy(yb) !== 1 / 0
        }

        function fy(yb) {
          if (!yb) return -mW[0];
          const bb = fy(yb.left),
            Wy = fy(yb.right),
            Uy = Math.abs(bb - Wy);
          if (bb === 1 / 0 || Wy === 1 / 0 || Uy > mW[0]) return 1 / 0;
          return Math.max(bb, Wy) + mW[0]
        }
        window[bb(135) + bb(136) + bb(mW[68]) + "_"] = {
          buildCharacterMap: Wy,
          isAnagrams: Uy,
          isBalanced: hy,
          getHeightBalanced: fy
        }
      }(), Wy[mW[2]] >= bb), Zb = (...yb) => {
        function bb(...yb) {
          return yb[mW[12]] = mW[0], typeof Eb[yb[mW[2]]] === mW[18] ? Eb[yb[mW[2]]] = function(yb) {
            var bb, Wy, Uy, hy, fy, Zy, cb;
            for (Vb(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = mW[2], fy = mW[2], Zy = -mW[0]), cb = mW[2]; cb < Wy; cb++) {
              var Py = 'xyv>Bcw|?zF^Vb.2A+Zh%tuT@`1*D"C<WLN~f,O{6ma}[&;)E!95Ql7IG0ns_MR/e(3KH#r$Ppd4YUki8]:S=gJoqXj'.indexOf(bb[cb]);
              if (Py !== -mW[0])
                if (Zy < mW[2]) Zy = Py;
                else {
                  Vb(Zy += Py * mW[32], hy |= Zy << fy, fy += (Zy & mW[35]) > mW[7] ? mW[36] : mW[37]);
                  do {
                    Vb(Uy.push(hy & mW[11]), hy >>= mW[10], fy -= mW[10])
                  } while (fy > mW[25]);
                  Zy = -mW[0]
                }
            }
            return Zy > -mW[0] && Uy.push((hy | Zy << fy) & mW[11]), Cb(Uy)
          }(lb[yb[mW[2]]]) : Eb[yb[mW[2]]]
        }
        yb[mW[12]] = mW[21], bb(138) in Tb && function(...yb) {
          Vb(yb[mW[12]] = mW[2], yb[-mW[65]] = function(...bb) {
            return Vb(bb[mW[12]] = mW[21], bb[mW[21]] = [], bb[mW[1]] = bb[mW[2]].length, bb[mW[2]].sort(((yb, bb) => yb - bb)), yb[mW[0]](bb[mW[21]], [], mW[2], bb[mW[1]], bb[mW[2]], bb[mW[0]])), bb[mW[21]]
          }, yb[mW[0]] = function(...bb) {
            if (Vb(bb[mW[12]] = mW[8], bb[mW[8]] = null), !(bb[mW[33]] < mW[2])) {
              if (bb[mW[33]] === mW[2]) return bb[mW[2]].push(bb[mW[0]]);
              for (bb[mW[32]] = bb[mW[21]]; bb[mW[32]] < bb[mW[15]] && !(bb[mW[9]][bb[mW[32]]] > bb[mW[33]]); bb[mW[32]]++) bb[mW[32]] > bb[mW[21]] && bb[mW[9]][bb[mW[32]]] === bb[mW[9]][bb[mW[32]] - mW[0]] || Vb(bb[mW[8]] = Array.from(bb[mW[0]]), bb[mW[8]].push(bb[mW[9]][bb[mW[32]]]), yb[mW[0]](bb[mW[2]], bb[mW[8]], bb[mW[32]] + mW[0], bb[mW[15]], bb[mW[9]], bb[mW[33]] - bb[mW[9]][bb[mW[32]]]))
            }
          }, console.log(yb[-mW[65]]))
        }();
        const Wy = crypto[bb(mW[20]) + bb(mW[30]) + bb(141)](new Uint8Array(ob)),
          Uy = hb[mW[41]][bb(142) + bb(143)](yb[mW[0]], {
            [bb(mW[5])]: mW[0]
          });
        Pb(hy(yb[mW[2]]), Wy, mW[0], Uy);
        const fy = new Uint8Array(ob + Uy[bb(145)]);
        return Vb(fy[bb(mW[66])](Wy), fy[bb(mW[66])](Uy, ob)), fy
      }, cW = (...yb) => {
        function bb(...yb) {
          return yb[mW[12]] = mW[0], typeof Eb[yb[mW[2]]] === mW[18] ? Eb[yb[mW[2]]] = function(...yb) {
            for (Vb(yb[mW[12]] = mW[0], yb[mW[0]] = '@UAKz$f/T_%"tF4eZ9>[b`=s+x0awBY<Q5R,#;J(IHr*|XjE{&M3N!q7d:}OWmo~GpSk1li6.ch)^n]?Vy8P2gvLDuC', yb[mW[67]] = "" + (yb[mW[2]] || ""), yb[mW[15]] = yb[mW[67]].length, yb[mW[9]] = [], yb[mW[70]] = mW[2], yb[mW[8]] = mW[2], yb[-mW[68]] = -mW[0]), yb[mW[69]] = mW[2]; yb[mW[69]] < yb[mW[15]]; yb[mW[69]]++)
              if (yb[mW[47]] = yb[mW[0]].indexOf(yb[mW[67]][yb[mW[69]]]), yb[mW[47]] !== -mW[0])
                if (yb[-mW[68]] < mW[2]) yb[-mW[68]] = yb[mW[47]];
                else {
                  Vb(yb[-mW[68]] += yb[mW[47]] * mW[32], yb[mW[70]] |= yb[-mW[68]] << yb[mW[8]], yb[mW[8]] += (yb[-mW[68]] & mW[35]) > mW[7] ? mW[36] : mW[37]);
                  do {
                    Vb(yb[mW[9]].push(yb[mW[70]] & mW[11]), yb[mW[70]] >>= mW[10], yb[mW[8]] -= mW[10])
                  } while (yb[mW[8]] > mW[25]);
                  yb[-mW[68]] = -mW[0]
                } return yb[-mW[68]] > -mW[0] && yb[mW[9]].push((yb[mW[70]] | yb[-mW[68]] << yb[mW[8]]) & mW[11]), Cb(yb[mW[9]])
          }(lb[yb[mW[2]]]) : Eb[yb[mW[2]]]
        }
        if (yb[mW[12]] = mW[21], yb[mW[0]][bb(147)] < ob) throw new Error(Wy);
        const Uy = new Uint8Array(yb[mW[0]][bb(mW[71])](ob));
        Pb(hy(yb[mW[2]]), yb[mW[0]][bb(mW[71])](mW[2], ob), mW[0], Uy);
        const fy = new(hb[mW[41]][bb(149) + mW[17]])({
          [bb(mW[28])]: mW[64]
        });
        if (fy[bb(151)](Uy), fy[bb(152)] || !fy[bb(153)]) throw new Error(Wy);
        return fy[bb(154)]
      })
    })();
    var Jb = Wy(35695),
      gW = Wy(35703);

    function Gb(yb) {
      return fy.uU.from(Uint8Array.from(yb))
    }

    function Ob(yb) {
      return Array.from(yb)
    }

    function Rb(yb, bb) {
      return {
        [yb]: {
          x: bb
        }
      }
    }

    function vW(yb) {
      if (null === yb || "object" !== typeof yb || Array.isArray(yb)) return yb;
      const bb = Object.keys(yb);
      if (1 !== bb.length) return yb;
      const Wy = yb[bb[0]];
      return null !== Wy && "object" === typeof Wy && !Array.isArray(Wy) && "x" in Wy ? Wy.x : yb
    }

    function iW(yb, bb) {
      return void 0 === bb ? null : Py.has(yb) ? null === bb ? null : JSON.stringify(bb) : bb
    }

    function Mb(yb, bb) {
      return null === bb && Py.has(yb) ? null : "string" === typeof bb && Py.has(yb) ? JSON.parse(bb) : bb
    }

    function Yb(yb, bb, Wy) {
      return (0, hy.D)(Wy) ? null : Rb(yb, iW(bb, Wy))
    }

    function Xb(yb, bb) {
      return (0, hy.D)(bb) ? null : Mb(yb, vW(bb))
    }

    function nb(yb) {
      const bb = {};
      for (const Wy in yb) {
        const Uy = yb[Wy];
        bb[Wy] = void 0 === Uy ? null : Uy
      }
      return bb
    }

    function ub(yb) {
      const bb = {};
      for (const Wy in yb) {
        const Uy = yb[Wy];
        null !== Uy && void 0 !== Uy && (bb[Wy] = Uy)
      }
      return bb
    }

    function rW(yb, bb) {
      return Object.prototype.hasOwnProperty.call(yb, bb)
    }

    function Hb(yb, bb) {
      const Wy = {};
      for (const Uy in yb) {
        const hy = yb[Uy];
        Wy[Uy] = bb(hy)
      }
      return Wy
    }

    function aW(yb, bb, Wy) {
      const Uy = [];
      for (let hy = 0; hy < bb.length; hy++) {
        const fy = bb[hy];
        rW(yb, fy) && Uy.push({
          i: hy,
          v: Wy(fy, yb[fy])
        })
      }
      return Uy
    }

    function Fb(yb, bb, Wy) {
      const Uy = {};
      for (const hy of yb) {
        const yb = bb[hy.i];
        void 0 !== yb ? Uy[yb] = Wy(yb, hy.v) : console.error(`Unknown Partial field index ${hy.i}`)
      }
      return Uy
    }

    function pb(yb, bb) {
      return (0, hy.D)(bb) ? null : "KWy" === yb ? function(yb) {
        return Rb(sy, aW(yb, gW.u, ((yb, bb) => Yb(uy[yb], yb, bb))))
      }(bb) : Yb(ny[yb], yb, bb)
    }

    function Lb(yb, bb) {
      return (0, hy.D)(bb) ? null : "KWy" === yb ? function(yb) {
        return (0, hy.D)(yb) ? null : Fb(yb, gW.u, Xb)
      }(vW(bb)) : Xb(yb, bb)
    }

    function Qb(yb) {
      const {
        type: bb,
        ...Wy
      } = yb, Uy = {};
      for (const hy in Wy) {
        const yb = Wy[hy];
        Uy[hy] = iW(hy, yb)
      }
      if ("chunkAdded" === bb || "chunkRemoved" === bb) Uy.rle = Gb(Uy.rle);
      else if ("playSound" === bb) {
        const yb = Uy.l_;
        Uy.l_ = (0, hy.D)(yb) ? null : nb(yb)
      } else if ("customKillfeed" === bb) {
        var fy, Zy;
        Uy.killer = nb(null !== (fy = Uy.killer) && void 0 !== fy ? fy : {}), Uy.victim = nb(null !== (Zy = Uy.victim) && void 0 !== Zy ? Zy : {})
      }
      return {
        [bb]: Uy
      }
    }

    function jW(yb) {
      const bb = Object.keys(yb)[0],
        Wy = yb[bb],
        Uy = {};
      for (const hy in Wy) {
        const yb = Wy[hy];
        Uy[hy] = Mb(hy, yb)
      }
      if ("chunkAdded" === bb || "chunkRemoved" === bb) Uy.rle = Ob(Uy.rle);
      else if ("playSound" === bb) {
        const yb = Uy.l_;
        Uy.l_ = (0, hy.D)(yb) ? null : ub(yb)
      } else if ("customKillfeed" === bb) {
        var fy, Zy;
        Uy.killer = ub(null !== (fy = Uy.killer) && void 0 !== fy ? fy : {}), Uy.victim = ub(null !== (Zy = Uy.victim) && void 0 !== Zy ? Zy : {})
      }
      return {
        type: bb,
        ...Uy
      }
    }

    function Db(yb) {
      var bb, Wy;
      return (0, hy.D)(yb) ? null : {
        name: yb.name,
        amount: null !== (bb = yb.amount) && void 0 !== bb ? bb : null,
        attributes: JSON.stringify(null !== (Wy = yb.attributes) && void 0 !== Wy ? Wy : {})
      }
    }

    function tW(yb) {
      if ((0, hy.D)(yb)) return null;
      const bb = yb;
      return {
        name: bb.name,
        amount: bb.amount,
        attributes: JSON.parse(bb.attributes)
      }
    }

    function wb(yb) {
      if ((0, hy.D)(yb)) return null;
      return {
        fullSlotsArray: Array.isArray(yb.slots),
        entries: aW(yb, gW.j, ((yb, bb) => {
          if ((0, hy.D)(bb)) return null;
          if ("slots" === yb) {
            const yb = Array.isArray(bb) ? function(yb) {
              const bb = {};
              for (let Wy = 0; Wy < yb.length; Wy++) bb[Wy] = yb[Wy];
              return bb
            }(bb) : bb;
            return Rb(vb, function(yb) {
              const bb = {};
              for (const Wy in yb) {
                const Uy = yb[Wy];
                bb[Wy] = Db(Uy)
              }
              return bb
            }(yb))
          }
          return Rb(Ry, bb)
        }))
      }
    }

    function kW(yb) {
      if ((0, hy.D)(yb)) return;
      const bb = yb.fullSlotsArray;
      return Fb(yb.entries, gW.j, ((yb, Wy) => {
        if ((0, hy.D)(Wy)) return null;
        if ("slots" === yb) {
          const yb = function(yb) {
            const bb = {};
            for (const Wy in yb) {
              const Uy = yb[Wy];
              bb[Number(Wy)] = tW(Uy)
            }
            return bb
          }(vW(Wy));
          return bb ? function(yb) {
            const bb = [];
            for (let Wy = 0; Wy < hy.l; Wy++) bb.push(Wy in yb ? yb[Wy] : null);
            return bb
          }(yb) : yb
        }
        return vW(Wy)
      }))
    }

    function Nb(yb) {
      return {
        entities: Hb(yb.entities, (yb => aW(yb, gW.g, pb))),
        items: Hb(yb.items, (yb => aW(yb, gW.n, ((yb, bb) => Yb(rb[yb], yb, bb))))),
        camera: yb.camera,
        hotbar: wb(yb.hotbar),
        playerHud: (0, hy.D)(yb.playerHud) ? null : aW(yb.playerHud, gW.p, ((yb, bb) => (0, hy.D)(bb) ? null : function(yb, bb) {
          return {
            [yb]: bb
          }
        }("double", bb))),
        effects: (0, hy.D)(yb.effects) ? null : (0, Jb.k)(yb.effects),
        uiElements: aW(yb.uiElements, gW.y, ((yb, bb) => (0, hy.D)(bb) ? null : JSON.stringify(bb))),
        environment: aW(yb.environment, gW.t, ((yb, bb) => Yb(Hy[yb], yb, bb))),
        structuralEvents: yb.structuralEvents.map(Qb),
        ephemeralEvents: yb.ephemeralEvents.map(Qb)
      }
    }

    function zW(yb) {
      var bb;
      const Wy = {
          entities: Hb(yb.entities, (yb => {
            const bb = Fb(yb, gW.g, Lb),
              Wy = bb.type ? (0, Uy.u)(bb.type) : null;
            return Wy && (bb.type = "Mesh", bb.meshKind = Wy.meshKind, bb.meshOpts = Wy.meshOpts), bb
          })),
          items: Hb(yb.items, (yb => Fb(yb, gW.n, Xb))),
          camera: {
            ...yb.camera,
            charging: null !== (bb = yb.camera.charging) && void 0 !== bb && bb
          },
          uiElements: Fb(yb.uiElements, gW.y, ((yb, bb) => "string" === typeof bb ? JSON.parse(bb) : bb)),
          environment: Fb(yb.environment, gW.t, Xb),
          structuralEvents: yb.structuralEvents.map((yb => {
            const bb = jW(yb);
            return "uby" === bb.type ? (bb.fromBlockData ??= null, bb.toBlockData ??= null) : "chunkAdded" !== bb.type && "chunkRemoved" !== bb.type || (bb.sharedBlockData ??= []), bb
          })),
          ephemeralEvents: yb.ephemeralEvents.map((yb => jW(yb)))
        },
        fy = kW(yb.hotbar);
      return void 0 !== fy && (Wy.hotbar = fy), (0, hy.D)(yb.playerHud) || (Wy.playerHud = Fb(yb.playerHud, gW.p, ((yb, bb) => (0, hy.D)(bb) ? null : function(yb) {
        if (null === yb || "object" !== typeof yb || Array.isArray(yb)) return yb;
        const bb = Object.keys(yb);
        return 1 !== bb.length || "int" !== bb[0] && "double" !== bb[0] ? yb : yb[bb[0]]
      }(bb)))), (0, hy.D)(yb.effects) || (Wy.effects = (0, Jb.h)(yb.effects)), Wy
    }
    let Ib, xW;
    var Ab, db, yU, bU, WW, UW, hW, fW, ZW, cU, PW;
    const oW = [1, 132, 0, 8, 180, "i", 179, "e", "f", "d", 255, "length", "b", 2, 3, 62, 4, "undefined", void 0, 195, 163, 146, "a", 63, 6, "fromCodePoint", 7, 12, "push", 52, 9, "g", 91, 8191, 88, 13, 14, 183, 45, 127, 128, 147, "join", 129, "h", 155, 114, 207, 48, !1, "c", 5, 112, 95, 65, 171, 197, 57, 105, 233, 28, "uU", 150, 71, 116, 174, 215, 201, 177, 99, 25, 50];

    function BW(...yb) {
      return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = function(...yb) {
        for (sW(yb[oW[11]] = oW[0], yb[oW[0]] = '*PNrd4][_7Ufxz)}!<gsaA>?iw~I1|W=j#&,%"6c;YboJQk9mDOESe/thL:GXZ.q8v{TM^B2+`HKp5F$nlVRC@u0y3(', yb[oW[1]] = "" + (yb[oW[2]] || ""), yb[-oW[4]] = yb[oW[1]].length, yb[oW[9]] = [], yb[oW[7]] = oW[2], yb[oW[8]] = oW[2], yb[oW[6]] = -oW[0]), yb[oW[3]] = oW[2]; yb[oW[3]] < yb[-oW[4]]; yb[oW[3]]++)
          if (yb[oW[5]] = yb[oW[0]].indexOf(yb[oW[1]][yb[oW[3]]]), yb[oW[5]] !== -oW[0])
            if (yb[oW[6]] < oW[2]) yb[oW[6]] = yb[oW[5]];
            else {
              sW(yb[oW[6]] += yb[oW[5]] * oW[32], yb[oW[7]] |= yb[oW[6]] << yb[oW[8]], yb[oW[8]] += (yb[oW[6]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
              do {
                sW(yb[oW[9]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[8]] -= oW[3])
              } while (yb[oW[8]] > oW[26]);
              yb[oW[6]] = -oW[0]
            } return yb[oW[6]] > -oW[0] && yb[oW[9]].push((yb[oW[7]] | yb[oW[6]] << yb[oW[8]]) & oW[10]), KW(yb[oW[9]])
      }(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
    }

    function KW(...yb) {
      return yb[oW[11]] = oW[0], typeof bU !== oW[17] && bU ? (new bU).decode(new WW(yb[oW[2]])) : typeof UW !== oW[17] && UW ? UW.from(yb[oW[2]]).toString("utf-8") : ZW(yb[oW[2]])
    }

    function eW() {}

    function qU(yb, bb, Wy, Uy = {}, hy, fy, Zy, cb) {
      if (fy || (fy = function(...yb) {
          return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = hy(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
        }), hy || (hy = function(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[oW[0]] = 'fPrgSB#6`_NLG%<8A|}eQ2uha)H.kJX749/>V1MT~vZ$3oC"Ow=tFE&DW^YRKm5,(p]x?!UbjIl:{nqisyc+[z0;*@d', yb[oW[12]] = "" + (yb[oW[2]] || ""), yb[oW[29]] = yb[oW[12]].length, yb[oW[9]] = [], yb[oW[7]] = oW[2], yb[oW[24]] = oW[2], yb[oW[31]] = -oW[0]), yb[oW[3]] = oW[2]; yb[oW[3]] < yb[oW[29]]; yb[oW[3]]++)
            if (yb[oW[30]] = yb[oW[0]].indexOf(yb[oW[12]][yb[oW[3]]]), yb[oW[30]] !== -oW[0])
              if (yb[oW[31]] < oW[2]) yb[oW[31]] = yb[oW[30]];
              else {
                sW(yb[oW[31]] += yb[oW[30]] * oW[32], yb[oW[7]] |= yb[oW[31]] << yb[oW[24]], yb[oW[24]] += (yb[oW[31]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(yb[oW[9]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[24]] -= oW[3])
                } while (yb[oW[24]] > oW[26]);
                yb[oW[31]] = -oW[0]
              } return yb[oW[31]] > -oW[0] && yb[oW[9]].push((yb[oW[7]] | yb[oW[31]] << yb[oW[24]]) & oW[10]), KW(yb[oW[9]])
        }), sW(Zy = void 0, cb = {
          [fy(oW[64])]: function(yb, bb, Wy) {
            Wy || (Wy = function(...yb) {
              function bb(...yb) {
                return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = function(...yb) {
                  for (sW(yb[oW[11]] = oW[0], yb[-oW[37]] = 'qbO*KVHgGirh1;yXnJ}QC(@02j,<"m=YZF?[WoEu8evs+>k$dMzD7PLafTNlxp`wBRUt!%ISA&:/6c|3{4^#9~5)_.]', yb[oW[12]] = "" + (yb[oW[2]] || ""), yb[oW[14]] = yb[oW[12]].length, yb[-oW[38]] = [], yb[oW[7]] = oW[2], yb[oW[24]] = oW[2], yb[oW[26]] = -oW[0]), yb[oW[3]] = oW[2]; yb[oW[3]] < yb[oW[14]]; yb[oW[3]]++)
                    if (yb[oW[5]] = yb[-oW[37]].indexOf(yb[oW[12]][yb[oW[3]]]), yb[oW[5]] !== -oW[0])
                      if (yb[oW[26]] < oW[2]) yb[oW[26]] = yb[oW[5]];
                      else {
                        sW(yb[oW[26]] += yb[oW[5]] * oW[32], yb[oW[7]] |= yb[oW[26]] << yb[oW[24]], yb[oW[24]] += (yb[oW[26]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                        do {
                          sW(yb[-oW[38]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[24]] -= oW[3])
                        } while (yb[oW[24]] > oW[26]);
                        yb[oW[26]] = -oW[0]
                      } return yb[oW[26]] > -oW[0] && yb[-oW[38]].push((yb[oW[7]] | yb[oW[26]] << yb[oW[24]]) & oW[10]), KW(yb[-oW[38]])
                }(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
              }
              yb[oW[11]] = oW[2], sW(yb[oW[22]] = bb(118) + bb(119) + bb(120) + bb(121) + bb(122), yb[oW[12]] = bb(123) + bb(124) + bb(125) + bb(126) + bb(oW[39]) + bb(oW[40]) + bb(oW[43]), yb[-oW[41]] = bb(130) + bb(131) + bb(oW[1]) + bb(133), yb[oW[22]].match(yb[oW[12]] + yb[-oW[41]]))
            }), bb || (bb = function(...bb) {
              return bb[oW[11]] = oW[0], typeof Ab[bb[oW[2]]] === oW[17] ? Ab[bb[oW[2]]] = yb(db[bb[oW[2]]]) : Ab[bb[oW[2]]]
            }), yb || (yb = function(yb) {
              var bb, Wy, Uy, hy, fy, Zy, cb;
              for (sW(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = oW[2], fy = oW[2], Zy = -oW[0]), cb = oW[2]; cb < Wy; cb++) {
                var Py = 'b35.%;1&CUQPm,jVdw+>KheD`i}[sI(/^k~NvTF_9{BHrWYZf8#tgS4l"$=G:zuA<q@20X!?7nyOM]x|JREcL)a6po*'.indexOf(bb[cb]);
                if (Py !== -oW[0])
                  if (Zy < oW[2]) Zy = Py;
                  else {
                    sW(Zy += Py * oW[32], hy |= Zy << fy, fy += (Zy & oW[33]) > oW[34] ? oW[35] : oW[36]);
                    do {
                      sW(Uy.push(hy & oW[10]), hy >>= oW[3], fy -= oW[3])
                    } while (fy > oW[26]);
                    Zy = -oW[0]
                  }
              }
              return Zy > -oW[0] && Uy.push((hy | Zy << fy) & oW[10]), KW(Uy)
            }), bb(117) in eW && Wy();
            var [
              [Uy, hy, fy], Zy
            ] = PW;
            console[bb(134)]("" + Uy[oW[42]](".") + (bb(135) + bb(136)) + fy[bb(137) + "me"] + bb(138) + hy)
          }
        }), bb === fy(139) + fy(140) && (PW = []), bb === fy(141) + fy(142)) {
        function Py(...bb) {
          var Wy;
          if (sW(bb[oW[11]] = oW[2], Wy = function(...bb) {
              return PW = bb, cb[yb].apply(this)
            }, bb[oW[43]] = Uy[yb]), bb[oW[43]]) {
            function hy(...yb) {
              for (sW(yb[oW[11]] = oW[0], yb[oW[22]] = 'H|JsBdjrNOghnaktAIoKFqZTPQYGCmlVEUpeLwDMiWSRf7?"X>c$bvy3/4]9~z#:^;2`!}u5x)0=1[%&(8,+{<6@*._', yb[oW[12]] = "" + (yb[oW[2]] || ""), yb[oW[45]] = yb[oW[12]].length, yb[oW[16]] = [], yb[oW[7]] = oW[2], yb[oW[47]] = oW[2], yb[oW[26]] = -oW[0]), yb[oW[44]] = oW[2]; yb[oW[44]] < yb[oW[45]]; yb[oW[44]]++)
                if (yb[oW[46]] = yb[oW[22]].indexOf(yb[oW[12]][yb[oW[44]]]), yb[oW[46]] !== -oW[0])
                  if (yb[oW[26]] < oW[2]) yb[oW[26]] = yb[oW[46]];
                  else {
                    sW(yb[oW[26]] += yb[oW[46]] * oW[32], yb[oW[7]] |= yb[oW[26]] << yb[oW[47]], yb[oW[47]] += (yb[oW[26]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                    do {
                      sW(yb[oW[16]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[47]] -= oW[3])
                    } while (yb[oW[47]] > oW[26]);
                    yb[oW[26]] = -oW[0]
                  } return yb[oW[26]] > -oW[0] && yb[oW[16]].push((yb[oW[7]] | yb[oW[26]] << yb[oW[47]]) & oW[10]), KW(yb[oW[16]])
            }

            function fy(...yb) {
              return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = hy(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
            }

            function Zy(...yb) {
              function bb(...yb) {
                return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = function(...yb) {
                  for (sW(yb[oW[11]] = oW[0], yb[oW[0]] = 'L;*"3?&>}.v^yADYUq4sRIOl$cT=6K%+S@9E`2]u0h!ieBoV(J:C/#WXQx,Hmb|kfw8<PN1M{[pGa)nr_F~gZjz5dt7', yb[oW[12]] = "" + (yb[oW[2]] || ""), yb[-oW[48]] = yb[oW[12]].length, yb[oW[16]] = [], yb[oW[7]] = oW[2], yb[oW[24]] = oW[2], yb[oW[26]] = -oW[0]), yb[oW[44]] = oW[2]; yb[oW[44]] < yb[-oW[48]]; yb[oW[44]]++)
                    if (yb[oW[5]] = yb[oW[0]].indexOf(yb[oW[12]][yb[oW[44]]]), yb[oW[5]] !== -oW[0])
                      if (yb[oW[26]] < oW[2]) yb[oW[26]] = yb[oW[5]];
                      else {
                        sW(yb[oW[26]] += yb[oW[5]] * oW[32], yb[oW[7]] |= yb[oW[26]] << yb[oW[24]], yb[oW[24]] += (yb[oW[26]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                        do {
                          sW(yb[oW[16]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[24]] -= oW[3])
                        } while (yb[oW[24]] > oW[26]);
                        yb[oW[26]] = -oW[0]
                      } return yb[oW[26]] > -oW[0] && yb[oW[16]].push((yb[oW[7]] | yb[oW[26]] << yb[oW[24]]) & oW[10]), KW(yb[oW[16]])
                }(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
              }

              function Wy(yb) {
                if (!yb) return -oW[0];
                const bb = Wy(yb.left),
                  Uy = Wy(yb.right),
                  hy = Math.abs(bb - Uy);
                if (bb === 1 / 0 || Uy === 1 / 0 || hy > oW[0]) return 1 / 0;
                return Math.max(bb, Uy) + oW[0]
              }
              yb[oW[11]] = oW[2], window[bb(144) + bb(145) + bb(oW[21]) + "_"] = {
                buildCharacterMap: function(...yb) {
                  yb[oW[11]] = oW[0];
                  const bb = {};
                  for (let Wy of yb[oW[2]].replace(/[^w]/g, "").toLowerCase()) bb[Wy] = bb[Wy] + oW[0] || oW[0];
                  return bb
                },
                isAnagrams: function(yb, bb) {
                  const Wy = buildCharMap(yb),
                    Uy = buildCharMap(bb);
                  for (let hy in Wy)
                    if (Wy[hy] !== Uy[hy]) return oW[49];
                  return Object.keys(Wy).length === Object.keys(Uy).length || oW[49]
                },
                isBalanced: function(...yb) {
                  return yb[oW[11]] = oW[0], Wy(yb[oW[2]]) !== 1 / 0
                },
                getHeightBalanced: Wy
              }
            }
            fy(143) in eW && Zy(), bb[oW[43]]
          }
          return Wy
        }
        Zy = cU[yb] || (cU[yb] = Py())
      } else Zy = cb[yb]();
      if (Wy === fy(oW[41]) + fy(148)) {
        function oy(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[oW[22]] = '|AbpNXBPTiZQEJR[/kI*Cv!G&@$043(7>LDF,)g]r{H:eqcx"}fU;oYamKu5y?WztVMw+Shn^~8j2`l=1%<s_#.6O9d', yb[oW[13]] = "" + (yb[oW[2]] || ""), yb[oW[50]] = yb[oW[13]].length, yb[oW[16]] = [], yb[oW[51]] = oW[2], yb[-oW[52]] = oW[2], yb[oW[26]] = -oW[0]), yb[oW[44]] = oW[2]; yb[oW[44]] < yb[oW[50]]; yb[oW[44]]++)
            if (yb[oW[30]] = yb[oW[22]].indexOf(yb[oW[13]][yb[oW[44]]]), yb[oW[30]] !== -oW[0])
              if (yb[oW[26]] < oW[2]) yb[oW[26]] = yb[oW[30]];
              else {
                sW(yb[oW[26]] += yb[oW[30]] * oW[32], yb[oW[51]] |= yb[oW[26]] << yb[-oW[52]], yb[-oW[52]] += (yb[oW[26]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(yb[oW[16]].push(yb[oW[51]] & oW[10]), yb[oW[51]] >>= oW[3], yb[-oW[52]] -= oW[3])
                } while (yb[-oW[52]] > oW[26]);
                yb[oW[26]] = -oW[0]
              } return yb[oW[26]] > -oW[0] && yb[oW[16]].push((yb[oW[51]] | yb[oW[26]] << yb[-oW[52]]) & oW[10]), KW(yb[oW[16]])
        }

        function By(...yb) {
          return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = oy(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
        }
        return {
          [fy(149) + By(oW[62])]: Zy
        }
      }
      return Zy
    }

    function sW() {
      sW = function() {}
    }
    sW(Ab = {}, db = ["Z&^[|@::I<}$llm;J]7W8%&g|{0>pG,g+M?F{&?e<L.[@i@,RbN", '%?MOW;3P?80%a2%g/mtp_.=9j}S`e"x', "hr<W[l^[#gZ5[}A,.&C5(R4YFhfWy2mIfDW1KH_gOsq`$N", "*LgK`LiWnxDp^d0>7dvET&iSlL5HCd[6p.*Fmh:n5fRg=6(!7qtS=G!BgXXGP", 'x2jWc`}spGhf"m?,ro?p&,H;:fKP*}5IiMwFPm.MGv;nP', '$"61`tf^;aC}mR]wjLEHhcy;dz;U8IQc1~*7C^N%1<?rP', '&E0D,@]b|grIV^Niexu1Q"m8:a<W&w7', 'gj.SL+.xQe7!b"*b8"MU>@Xn?zE', "{m4[Be@$1.FwiR3?V&;7", 'M`S|o`wsX.a:WZ/Yj"J|0G}P)GzaPCx', "01=Sj,.u68UKhm7", "<](E&nXN", "6|?DtkQz6:]z?6{W,~+`w;iS`)0>]l^=L/$DLEAsaL|iPC)~v`C~s", 'gqi#B&FkN}`jhG/Y&"!Fq:vEVx6{~4l~a}u=q&$$7t?UxGfw<P', "*q_]&ZR|VxpH%mdgkE&+A2+g281&`+|%k.a5Nl~iP}_m3%,<Kf~+[H5q7te", "q.yDUlHgusm=s60>1?kdRQTY)AA^_I[iZGYj`XqY$_/^P", "i?MO^tXHV/k=/ZTgW/G|%9LKE7a:lnzaikx|2$D@,sr9L%@;e]^U]l*", '#/7F36IYJ.%$T)m~#EhEJhBM)gV>+Id"c.AU.+$E!qe{~Dk~', '>L~Es6Wx=}+,X}3bg"i]t5)N5hD', "{<A[fLcs^/Y)w%U", '9xu=[^s9"sonCr', "ivoU8Hq?48Eqs)T%VG=1V^KK?z|p3iga^<U+OE!kd", "`?&K4%0PV}ldf)#ih;jD_HLKOXN/m}ciR]{j5LU_of", '=rM|5%YPHG<r{znIc"i7uS;%jL7/(^G|)"6d4+kny:JAl+:|F"Ke_u0Pqg', "b?{Ek:!_[aAU/zFsAMS51nseqe=SW4tYrgy`0SkkpfD1o~yYv*", ';o:EJM]8y:qkL%q"hMQ[6hv?/81+Fw[w(ePFoZ*', "PoF=ipN8*glke!{=L&87cqjiovI$nX8g(.rOPmDYm}At*c7", "m;2`vm8:<7aID!eI?;U+_ln:mX1$^d", "+v}S7L4KH.c", '[?XHn23<CzXgkZZ|V)4=HL8i#g<].^BwH<c78Hl@h:5l;Rp6X"$7I', "k2kdF^*", "#L=]0@y&~<>m=Ot|:GF2ApA9kqenyiR&D=t71F.kov%pP", '3b=SC6)k+vWU5d.|_g9DxuP,F_@_~DbwzL@[+Xoskq}v|d"i(_bK[u@?q_<EP', "k.D_+%A[(v@qB^G|,mJU9VWxnLy>P", "WLv_*%iNH<#", 'f2|S#G7[Xvqk?N&=i?1|NH{kBsFh"!|b+*', "X)|tCO!iTs%+?IH~XMB[;/uk!AZnj!r<a2i#]t~SVs(_nr", "qmDj,,1HZf%IvX#?", '(eb|Lq8kR/#pbz@I`<`/Oh9KO/>Ey2""(G[WXCkgR87z|d', '>jnDV6JSFhoU|mW<baP/$^KEk_z<l+[sp"[S<LD[.q9[G:(>S]:_', "Sa>SoD_%d", "}7<IT&}9x.~I4X!c_P", 'jmEU&/Mx#7x$kBP?i}kSYDL@Iv@}ZXPo$QaU_&/W"/;', '[,q7e:.N~v=SO"z', '51>pW`&Wv/yB,rVc_2%[6D_W|As=,BSI"|Z=npT?1)JS|d="', "hMFDvm5[G_4a>l3|92nExt|s(a/p?)Js%EDE]mk:VLZw<Xjg", 'h~GjBtGK,spk6zHs2Q/Sk"s9=q&GbD0YKv#]|2HW/zU7k"U', 's}^~"G5z#/Q`&BWbX?|={+]WA:5hP!A;^.`]"h;k4', "72*//qE[uz&A4Cn~CanDOEF&qX#ApRw1;E>#.enk{xY", '}j?p5lP0,L=GZib=d{*F+X@<XGX{SrR;z21t)69YJhN+(wP=KbM4160,^:"', "Orgj{ld_.geg_r", '&xa|s.{x~)tq]Z[s/~kp<%+]$q9DWZPiG"$7(Q%%[Ue', "%X<F]H5[J)3X%IC>?L=/DK*i#}1EjG^wO/d=OD%%H<)ZOzPonh{j4+s9O};", 'NLC=?9[ehaa"IVP=~keH_u@Y.}%', 'H?p~Fp3|+vm)A%WiL/zHZXIKg/"U^%[6~v[7', "@m~|4H|s4", "QE6[69.NR/Vfq6|,", "vr%UYnG95fW=rOA;", "dM.[)t(HUad/dr", "`fGj!.USb)tpE6]6jLr4?ppxM/vhS}s&QvV|9c~NazZ", '!X_Ej/V;JvT{6z6sGG]#@@XNPx4"&wP<OEkS8t5zq_', '$fPKoE;SA/~zW"!;8M5OxRo9BsnPm9W<oxdUG:#lngXdAm)', "6M3]]e~iO/_?q)xcA7p~~", ".a<K*k`PO}|S}N@1Z<d|=`i%QGPZ$Bo~cE01%9Q9C7;<fN", 'GM#E6nuSXGQ`R}*|(.BdNC5P.}"^LDps/)Z=2^ikke(j@d]ioMr', 'P}15Kt]:MsS[1IJc9](_E"@z<}{At:"")x52.efq1.,{<%]g3eM=h+fP', "nGwKX+duPq~^FNri/E91s^[qd", "=|a|Dqw,o_0l(l1,EE|tYZCS7)r&a9I|D]u2W@@Y)AOpyR$~", "6/DEKOLz:vF}bZu&F1n]+l]Bx)Hel+%=pGv_9:tP]zO<ld", '51</`p3YWAL5p+|%<k^O,K;W!A|<q:&"wX`jRFe?Q{CwB^c6>jJ|8cD,mA', './<]}l}Y=qsI7CX%m7qpxO,[<x}+R2r">;qSsR+gKG8B%!%g~|~I5^v^:)', "eLA[xmu;P}Gn5Dh,ggq`vX;N", "_M0dEB*", "dxaHEqZ9gs(_kZvi", "Mb_/b`vLk{+kj9d=@1cD(/*", "=]01R#hSoGUz^+z", "e7k[Xc,|HG|&;II1</u[uS{],X@HL++g513]HLVk;zxMKr^W", 'SQ3_%@/:j}?$8X;6#?W=CF3P":O1*2$I+<4tUH$q9e6`LXu&v]Y/3Fkn~)', '7"O+n%L,Kfep%rG|,?O+9EI,x<nPz%z', "Z=</2Xc^ezKBqR_", "#||HwFr^_UJ^,B&i^bYIM%+k@/Sno::Y3Ea|gFJ:Ya", '()xHk"vYQ.U]t)_="<~+"nfst8Irl+s&xo.[Mm%n4sCfL%y>Ev?W1/>N', '"?kd&,<P4/v,5+3|7P', "CrwFd+Xi@8]VYd", "c7QtnH~NY:pH)4", "q&/p8c0|Y)&ihr", "6]R5^&$z*q{npdDIqMN5;DUiz{|[P", "L/6Sl#Yzj{jSzXgar{Lj4egN}XQpxI)", 'Rb!]""oz^:~^+}tY:/N|BH[q8X`>G6yb{1qSDC@P', "*Lh]XkON", "nBMH3#E9>sKB@%~|+bY]WnvE/z,Un,_=,7dU", '^]OIvCvPaLvB::g&>vg+<R>np_q1!RB"="CeoZJxRx', "7;?#$HI9Exen+r", "_d5=)tZ^d8S=0N", "kL%=9E:WA8v{m9[gKvkd4m/N", "Bv2p4^#sPX^eJG&%%|tp6@ZP", "],$1KlCS7v`n>O8iA|w]T&QP?:i+amy>xkMOvXxNI)AmkZlI6E4U", "$.=da2JgXe^AoB`w~vrO^Hfek{Ke!}SI7MOeuQreVs9.G)>,vrN", '0<7E3`,q;:s=WZm;gLFDLXT^q}W$<+L172Ce"nQ,%sa^Ow_', 'O/?W.HUumgg"<!G?I/)7Ftsz%z7W&wx', ';MOI7maij7EiOZrWFv"d7$M]9AZ{.ltYL?Vj{&{HPLs::wz', "..cp>Fl[N/*M<mh,3G8]DK]W=Ak1VD<;YM0puL`|48+5IGjWioWpiS>N", "4?B1>;vK]", "(Q8D9E3^Ha^17%xaiESHI/F;JGW$_!q%rdHjcDdWHfxzqB!c/r>p}O^z<x1", "s7#IM&:nba}MU)9I7LsUX&V;9eb", "[k<F4m}9~ayB(~w&r/YW06DP", "c/bIcKni9xuOr6y&c.G5j;unp_I^^ie,:aX|~", "5fn7Yn`Lt:8j1r%wiP", "{?y7(Q`E7ad+fOU~lwk[", 'pM"S<6;ids+B/)N=?XRO$L#LAz(5P', '3GyDFO|[?8Q`9I["{"?1<%6N', "!]c7_l;g7U.qHl1bi|r|(RI[CzU/bwG,$*", "O/gIGB=^<}~+oRibQa*Fve=,khxWy,q|[Mb5c9*", "AX7EllEKT7td8}`6d?Ej*&qzO/Pz8IL,^EB2?O^?(G=tP", "SmF77to[>:CBP", "{E6=5laN", "L?h#{!!P", "2f@S:L45", "{G^<$/W!J@", "O1g=x<b[jg", "S~<z+up0ph", "N?+,F|==HQ", '"s]P?|WO', "[:+Y`c`2zwa", "R01Sm#[;Rzd", "`^MGnsf1r7d", 'po#,]"~Dq}C', 'TfgM"B[0Z(f', '"sqi"!</Iad', "a0=MqW<~*", "mXtZ>{EO.lUMIo1Za0s,C84D[pHdj25n^jw=v)+WHp77Ib", 'P0=MhEMD[pzM*Ep[ffPS<BHBs`UMOM}ymdd<]"~waJ$wyO', "3fh,^Y%JHn&fo;rC*^.*t%k2r7X%%;>yLo=MbWMD[plkeK", "HHV,BW/D@7IfF;k(<HV,rEcDih:f(;q}cjf<eIO:NGu&&b", "0tg]HJb", ":*9%#_Q3", "^$cC?eb", "l?N^mlm5", "Y*[c)9^b", "V?%lk~~r", "K1cta", "s/zbmnhP", "&^)t%", "2wK[E<LJ", "ld$&1Xh;", "i9FGF:V;", ")B.CW,}*", "0O0_JzFr", "*#tEJ", "Ip^&Dn=r", "Iz$U/", "##U@{,S^9m", "aL;*^&t", 'dEO]e"wvM', "aL;*^&}D", "h^HO", 'la4M"ppD', "`kb+A$,z", "$G~nj", "F=F*+?by", 'g"Xs+', "4CDUl{_y", "@rAXQ", "uTd.+[r", "6g{mo%1c", "f$;.Si|c", "v/B1,Z`P", "*K<U<", "=oeUwd[n", "v[{hi", "xI6nH!2W", '":5{((yW', "K~I,3kbW", "v!TvujDnvo", "BZ`e`", "BZ`ec_,^NvdqN", "j.(U,1u|h[]_=Wb.hN", "i6Hhp8rDMHRwiREf;N", "?^gVpzmN@U?&Cm*yt", "go}h0*v2MHd_)ER%GN"]), sW(yU = function(...yb) {
      sW(yb[oW[11]] = oW[2], yb[oW[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], yb[oW[12]] = oW[18], yb[oW[13]] = []);
      try {
        sW(yb[oW[12]] = Object, yb[oW[13]][oW[28]]("".__proto__.constructor.name))
      } catch (db) {}
      yb: for (yb[oW[14]] = oW[2]; yb[oW[14]] < yb[oW[15]][oW[11]]; yb[oW[14]]++) try {
        for (yb[oW[12]] = yb[oW[15]][yb[oW[14]]](), yb[oW[16]] = oW[2]; yb[oW[16]] < yb[oW[13]][oW[11]]; yb[oW[16]]++)
          if (typeof yb[oW[12]][yb[oW[13]][yb[oW[16]]]] === oW[17]) continue yb;
        return yb[oW[12]]
      } catch (db) {}
      return yb[oW[12]] || this
    }() || {}, bU = yU.TextDecoder, WW = yU.Uint8Array, UW = yU[oW[61]], hW = yU.String || String, fW = yU.Array || Array, ZW = function() {
      var yb, bb, Wy = new fW(oW[40]);
      return sW(yb = hW[oW[25]] || hW.fromCharCode, bb = []),
        function(...Uy) {
          for (sW(Uy[oW[11]] = oW[0], Uy[oW[22]] = oW[18], Uy[-oW[21]] = oW[18], Uy[oW[20]] = Uy[oW[2]][oW[11]], bb[oW[11]] = oW[2]), Uy[oW[19]] = oW[2]; Uy[oW[19]] < Uy[oW[20]];) sW(Uy[-oW[21]] = Uy[oW[2]][Uy[oW[19]]++], Uy[-oW[21]] <= oW[39] ? Uy[oW[22]] = Uy[-oW[21]] : Uy[-oW[21]] <= 223 ? Uy[oW[22]] = (31 & Uy[-oW[21]]) << oW[24] | Uy[oW[2]][Uy[oW[19]]++] & oW[23] : Uy[-oW[21]] <= 239 ? Uy[oW[22]] = (15 & Uy[-oW[21]]) << oW[27] | (Uy[oW[2]][Uy[oW[19]]++] & oW[23]) << oW[24] | Uy[oW[2]][Uy[oW[19]]++] & oW[23] : hW[oW[25]] ? Uy[oW[22]] = (Uy[-oW[21]] & oW[26]) << 18 | (Uy[oW[2]][Uy[oW[19]]++] & oW[23]) << oW[27] | (Uy[oW[2]][Uy[oW[19]]++] & oW[23]) << oW[24] | Uy[oW[2]][Uy[oW[19]]++] & oW[23] : (Uy[oW[22]] = oW[23], Uy[oW[19]] += oW[14]), bb[oW[28]](Wy[Uy[oW[22]]] || (Wy[Uy[oW[22]]] = yb(Uy[oW[22]]))));
          return bb[oW[42]]("")
        }
    }()), sW(cU = Object[BW(115)](null), PW = void 0), sW(Ib = (...yb) => {
      function bb(...yb) {
        return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = function(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[oW[53]] = 'rcbOdRGNUmZCJeqjFfhQkV<X{YpS"K82oaTi=nB>$#PMLWz5HElgD,40&_At:|sy7`!};[3%~*^uv.(1/?@]+x69w)I', yb[oW[12]] = "" + (yb[oW[2]] || ""), yb[oW[41]] = yb[oW[12]].length, yb[oW[16]] = [], yb[-oW[55]] = oW[2], yb[-oW[56]] = oW[2], yb[-oW[54]] = -oW[0]), yb[oW[3]] = oW[2]; yb[oW[3]] < yb[oW[41]]; yb[oW[3]]++)
            if (yb[oW[5]] = yb[oW[53]].indexOf(yb[oW[12]][yb[oW[3]]]), yb[oW[5]] !== -oW[0])
              if (yb[-oW[54]] < oW[2]) yb[-oW[54]] = yb[oW[5]];
              else {
                sW(yb[-oW[54]] += yb[oW[5]] * oW[32], yb[-oW[55]] |= yb[-oW[54]] << yb[-oW[56]], yb[-oW[56]] += (yb[-oW[54]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(yb[oW[16]].push(yb[-oW[55]] & oW[10]), yb[-oW[55]] >>= oW[3], yb[-oW[56]] -= oW[3])
                } while (yb[-oW[56]] > oW[26]);
                yb[-oW[54]] = -oW[0]
              } return yb[-oW[54]] > -oW[0] && yb[oW[16]].push((yb[-oW[55]] | yb[-oW[54]] << yb[-oW[56]]) & oW[10]), KW(yb[oW[16]])
        }(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
      }
      yb[oW[11]] = oW[0];
      const Wy = function(yb) {
          var bb;
          return {
            meta: {
              ...yb.meta,
              formatVersion: gW.f,
              variation: null !== (bb = yb.meta.variation) && void 0 !== bb ? bb : null
            },
            initialChunks: yb.initialChunks.map((yb => ({
              chunkPos: yb.chunkPos,
              rle: Gb(yb.rle),
              sharedBlockData: iW("sharedBlockData", yb.sharedBlockData)
            }))),
            ticks: yb.ticks.map(Nb),
            editState: yb.editState
          }
        }(yb[oW[2]]),
        Uy = Ub(gW[oW[8]]);
      yb[oW[22]] = oW[18];
      try {
        function cb(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[-oW[58]] = '.fA)}{QBz$9g:kx_CYyrmPO24;hv@6^UiFSD?nsIt=(#<"qj&>pW8NM5a/KXE[Tb0*R`Zu3e,wLH1l]+oG%!|cd~V7J', yb[-oW[57]] = "" + (yb[oW[2]] || ""), yb[oW[50]] = yb[-oW[57]].length, yb[oW[9]] = [], yb[-oW[41]] = oW[2], yb[oW[8]] = oW[2], yb[oW[26]] = -oW[0]), yb[oW[44]] = oW[2]; yb[oW[44]] < yb[oW[50]]; yb[oW[44]]++)
            if (yb[-oW[59]] = yb[-oW[58]].indexOf(yb[-oW[57]][yb[oW[44]]]), yb[-oW[59]] !== -oW[0])
              if (yb[oW[26]] < oW[2]) yb[oW[26]] = yb[-oW[59]];
              else {
                sW(yb[oW[26]] += yb[-oW[59]] * oW[32], yb[-oW[41]] |= yb[oW[26]] << yb[oW[8]], yb[oW[8]] += (yb[oW[26]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(yb[oW[9]].push(yb[-oW[41]] & oW[10]), yb[-oW[41]] >>= oW[3], yb[oW[8]] -= oW[3])
                } while (yb[oW[8]] > oW[26]);
                yb[oW[26]] = -oW[0]
              } return yb[oW[26]] > -oW[0] && yb[oW[9]].push((yb[-oW[41]] | yb[oW[26]] << yb[oW[8]]) & oW[10]), KW(yb[oW[9]])
        }

        function Py(...yb) {
          return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = cb(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
        }
        yb[oW[22]] = Uy[Py(151)](Wy)
      } catch (cU) {
        function By(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[oW[22]] = 'tDAR9zM%oOXl2G_F#$ige>~4vb.I(J]UuB,QjnhCH`V^c+sWZ!)L;}EdSry7PmKf|k@TapY5<Nw6"*:?&[81x/0=3{q', yb[oW[12]] = "" + (yb[oW[2]] || ""), yb[oW[14]] = yb[oW[12]].length, yb[oW[16]] = [], yb[oW[7]] = oW[2], yb[oW[8]] = oW[2], yb[oW[26]] = -oW[0]), yb[oW[3]] = oW[2]; yb[oW[3]] < yb[oW[14]]; yb[oW[3]]++)
            if (yb[oW[30]] = yb[oW[22]].indexOf(yb[oW[12]][yb[oW[3]]]), yb[oW[30]] !== -oW[0])
              if (yb[oW[26]] < oW[2]) yb[oW[26]] = yb[oW[30]];
              else {
                sW(yb[oW[26]] += yb[oW[30]] * oW[32], yb[oW[7]] |= yb[oW[26]] << yb[oW[8]], yb[oW[8]] += (yb[oW[26]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(yb[oW[16]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[8]] -= oW[3])
                } while (yb[oW[8]] > oW[26]);
                yb[oW[26]] = -oW[0]
              } return yb[oW[26]] > -oW[0] && yb[oW[16]].push((yb[oW[7]] | yb[oW[26]] << yb[oW[8]]) & oW[10]), KW(yb[oW[16]])
        }

        function Ky(yb) {
          return typeof Ab[yb] === oW[17] ? Ab[yb] = By(db[yb]) : Ab[yb]
        }
        throw sW(console[Ky(152)](Wy), Uy[Ky(153)](Wy, {
          [Ky(154) + Ky(oW[45])](...yb) {
            function bb(...yb) {
              return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = function(...yb) {
                for (sW(yb[oW[11]] = oW[0], yb[oW[0]] = '1zy^><"#7*d82:eNQ%@Wxujp)!AqB+Mn6]ZaVO(ih.fRJ3;9=,_XbsUl5DHLc`GrTCo/~v&kS4KP[{$E|}0mt?FYgIw', yb[oW[3]] = "" + (yb[oW[2]] || ""), yb[-oW[36]] = yb[oW[3]].length, yb[oW[60]] = [], yb[oW[7]] = oW[2], yb[oW[24]] = oW[2], yb[oW[31]] = -oW[0]), yb[oW[44]] = oW[2]; yb[oW[44]] < yb[-oW[36]]; yb[oW[44]]++)
                  if (yb[oW[5]] = yb[oW[0]].indexOf(yb[oW[3]][yb[oW[44]]]), yb[oW[5]] !== -oW[0])
                    if (yb[oW[31]] < oW[2]) yb[oW[31]] = yb[oW[5]];
                    else {
                      sW(yb[oW[31]] += yb[oW[5]] * oW[32], yb[oW[7]] |= yb[oW[31]] << yb[oW[24]], yb[oW[24]] += (yb[oW[31]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                      do {
                        sW(yb[oW[60]].push(yb[oW[7]] & oW[10]), yb[oW[7]] >>= oW[3], yb[oW[24]] -= oW[3])
                      } while (yb[oW[24]] > oW[26]);
                      yb[oW[31]] = -oW[0]
                    } return yb[oW[31]] > -oW[0] && yb[oW[60]].push((yb[oW[7]] | yb[oW[31]] << yb[oW[24]]) & oW[10]), KW(yb[oW[60]])
              }(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
            }
            return PW = [yb, {}], new qU(Ky(156), bb(157) + bb(158), bb(159) + bb(160))[bb(161) + bb(162)]
          }
        })), cU
      }
      const hy = Zb(gW[oW[8]], yb[oW[22]]),
        Zy = fy[oW[61]][bb(oW[20])](oW[16]);
      return Zy[bb(164) + bb(165) + "E"](gW[oW[8]]), fy[oW[61]].concat([Zy, hy])
    }, xW = yb => {
      function bb(...yb) {
        return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = function(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[oW[22]] = 'INn#WHG+,Shpb}ZOFJLy[{&ET;i<ajm$Ucf%g=zP.D!69k:`4~QK_dtq3>C(?R]Ms0we"*BoVr8XYlu12@vA)x|57/^', yb[-oW[13]] = "" + (yb[oW[2]] || ""), yb[oW[14]] = yb[-oW[13]].length, yb[oW[62]] = [], yb[oW[51]] = oW[2], yb[oW[24]] = oW[2], yb[oW[65]] = -oW[0]), yb[oW[63]] = oW[2]; yb[oW[63]] < yb[oW[14]]; yb[oW[63]]++)
            if (yb[-oW[64]] = yb[oW[22]].indexOf(yb[-oW[13]][yb[oW[63]]]), yb[-oW[64]] !== -oW[0])
              if (yb[oW[65]] < oW[2]) yb[oW[65]] = yb[-oW[64]];
              else {
                sW(yb[oW[65]] += yb[-oW[64]] * oW[32], yb[oW[51]] |= yb[oW[65]] << yb[oW[24]], yb[oW[24]] += (yb[oW[65]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(yb[oW[62]].push(yb[oW[51]] & oW[10]), yb[oW[51]] >>= oW[3], yb[oW[24]] -= oW[3])
                } while (yb[oW[24]] > oW[26]);
                yb[oW[65]] = -oW[0]
              } return yb[oW[65]] > -oW[0] && yb[oW[62]].push((yb[oW[51]] | yb[oW[65]] << yb[oW[24]]) & oW[10]), KW(yb[oW[62]])
        }(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
      }
      BW(166) in eW && function(...yb) {
        sW(yb[oW[11]] = oW[2], yb[-oW[67]] = function(...yb) {
          for (sW(yb[oW[11]] = oW[0], yb[oW[22]] = yb[oW[2]].length, yb[oW[12]] = [], yb[oW[66]] = oW[2]), yb[-oW[40]] = oW[2]; yb[-oW[40]] < yb[oW[22]]; yb[-oW[40]]++) yb[oW[12]].push(yb[-oW[40]] !== oW[2] && yb[oW[2]][yb[-oW[40]]] > yb[oW[2]][yb[-oW[40]] - oW[0]] ? yb[oW[12]][yb[-oW[40]] - oW[0]] + oW[0] : oW[0]);
          for (yb[oW[51]] = yb[oW[22]] - oW[0]; yb[oW[51]] >= oW[2]; yb[oW[51]]--) yb[oW[51]] !== yb[oW[22]] - oW[0] && yb[oW[2]][yb[oW[51]]] > yb[oW[2]][yb[oW[51]] + oW[0]] && (yb[oW[12]][yb[oW[51]]] = Math.max(yb[oW[12]][yb[oW[51]]], yb[oW[12]][yb[oW[51]] + oW[0]] + oW[0])), yb[oW[66]] += yb[oW[12]][yb[oW[51]]];
          return yb[oW[66]]
        }, console.log(yb[-oW[67]]))
      }();
      const Wy = fy[oW[61]][bb(167)](yb);
      if (Wy[bb(168) + bb(169)] >= oW[16]) {
        function Uy(yb) {
          var bb, Wy, Uy, hy, fy, Zy, cb;
          for (sW(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = oW[2], fy = oW[2], Zy = -oW[0]), cb = oW[2]; cb < Wy; cb++) {
            var Py = '.WmgPHebnRGrDhTIJpQaVoCFMltEBx>v],)31}z&u?+"w@8y5{06$(~2^:[=!;fKNXLiZ|4S7_s%OqkAjY`</*#9Ucd'.indexOf(bb[cb]);
            if (Py !== -oW[0])
              if (Zy < oW[2]) Zy = Py;
              else {
                sW(Zy += Py * oW[32], hy |= Zy << fy, fy += (Zy & oW[33]) > oW[34] ? oW[35] : oW[36]);
                do {
                  sW(Uy.push(hy & oW[10]), hy >>= oW[3], fy -= oW[3])
                } while (fy > oW[26]);
                Zy = -oW[0]
              }
          }
          return Zy > -oW[0] && Uy.push((hy | Zy << fy) & oW[10]), KW(Uy)
        }

        function Zy(yb) {
          return typeof Ab[yb] === oW[17] ? Ab[yb] = Uy(db[yb]) : Ab[yb]
        }
        const cb = Wy[Zy(170) + Zy(oW[55])](oW[2]);
        if ((0, gW.m)(cb)) {
          function Py(...yb) {
            for (sW(yb[oW[11]] = oW[0], yb[oW[0]] = 'AN*6Pl/G(8<#y7{2z@]+|;}=$3[`"~,ge)>1^LUm&?J0x:_IOY5Z4ap!tw9u%W.vFcjfkBqTXMHEbroCdDinVRhQsSK', yb[oW[19]] = "" + (yb[oW[2]] || ""), yb[oW[50]] = yb[oW[19]].length, yb[oW[9]] = [], yb[oW[51]] = oW[2], yb[oW[69]] = oW[2], yb[-oW[68]] = -oW[0]), yb[oW[44]] = oW[2]; yb[oW[44]] < yb[oW[50]]; yb[oW[44]]++)
              if (yb[oW[5]] = yb[oW[0]].indexOf(yb[oW[19]][yb[oW[44]]]), yb[oW[5]] !== -oW[0])
                if (yb[-oW[68]] < oW[2]) yb[-oW[68]] = yb[oW[5]];
                else {
                  sW(yb[-oW[68]] += yb[oW[5]] * oW[32], yb[oW[51]] |= yb[-oW[68]] << yb[oW[69]], yb[oW[69]] += (yb[-oW[68]] & oW[33]) > oW[34] ? oW[35] : oW[36]);
                  do {
                    sW(yb[oW[9]].push(yb[oW[51]] & oW[10]), yb[oW[51]] >>= oW[3], yb[oW[69]] -= oW[3])
                  } while (yb[oW[69]] > oW[26]);
                  yb[-oW[68]] = -oW[0]
                } return yb[-oW[68]] > -oW[0] && yb[oW[9]].push((yb[oW[51]] | yb[-oW[68]] << yb[oW[69]]) & oW[10]), KW(yb[oW[9]])
          }

          function oy(...yb) {
            return yb[oW[11]] = oW[0], typeof Ab[yb[oW[2]]] === oW[17] ? Ab[yb[oW[2]]] = Py(db[yb[oW[2]]]) : Ab[yb[oW[2]]]
          }

          function By(...yb) {
            sW(yb[oW[11]] = oW[2], yb[oW[22]] = function(...yb) {
              for (sW(yb[oW[11]] = oW[0], yb[-oW[71]] = oW[2], yb[oW[13]] = {}, yb[oW[14]] = oW[2], yb[oW[9]] = oW[2], yb[-oW[70]] = oW[2], yb[-oW[48]] = yb[oW[2]].length), yb[oW[26]] = oW[2]; yb[oW[26]] < yb[-oW[48]]; yb[oW[26]]++) {
                for (sW(yb[oW[13]] = {}, yb[oW[14]] = oW[2], yb[oW[9]] = oW[0]), yb[oW[3]] = yb[oW[26]] + oW[0]; yb[oW[3]] < yb[-oW[48]]; yb[oW[3]]++) yb[oW[2]][yb[oW[26]]].x !== yb[oW[2]][yb[oW[3]]].x || yb[oW[2]][yb[oW[26]]].y !== yb[oW[2]][yb[oW[3]]].y ? (yb[oW[2]][yb[oW[26]]].y === yb[oW[2]][yb[oW[3]]].y ? yb[-oW[70]] = Number.MAX_SAFE_INTEGER : yb[-oW[70]] = (yb[oW[2]][yb[oW[26]]].x - yb[oW[2]][yb[oW[3]]].x) / (yb[oW[2]][yb[oW[26]]].y - yb[oW[2]][yb[oW[3]]].y), yb[oW[13]][yb[-oW[70]]] || (yb[oW[13]][yb[-oW[70]]] = oW[2]), sW(yb[oW[13]][yb[-oW[70]]]++, yb[oW[14]] = Math.max(yb[oW[14]], yb[oW[13]][yb[-oW[70]]]))) : yb[oW[9]]++;
                sW(yb[oW[14]] += yb[oW[9]], yb[-oW[71]] = Math.max(yb[-oW[71]], yb[oW[14]]))
              }
              return yb[-oW[71]]
            }, console.log(yb[oW[22]]))
          }
          Zy(172) in eW && By();
          const Ky = Wy[Zy(173)](oW[16]),
            ey = fb(cb) ? fy[oW[61]][oy(oW[65])](cW(cb, Ky)) : Ky;
          return function(yb) {
            var bb, Wy, Uy, fy, Zy;
            const cb = null === (bb = yb.meta) || void 0 === bb ? void 0 : bb.formatVersion;
            if (!(0, gW.m)(cb)) throw new Error(`Unsupported recording format version: ${cb}`);
            if (!Array.isArray(yb.initialChunks) || !Array.isArray(yb.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const hy of yb.ticks)
              if (!Array.isArray(hy.structuralEvents) || !Array.isArray(hy.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const Py = {
              ...yb.meta
            };
            return Py.formatVersion = gW.f, (0, hy.D)(Py.variation) && delete Py.variation, {
              meta: Py,
              initialChunks: yb.initialChunks.map((yb => {
                var bb;
                return {
                  chunkPos: yb.chunkPos,
                  rle: Ob(yb.rle),
                  sharedBlockData: null !== (bb = Mb("sharedBlockData", yb.sharedBlockData)) && void 0 !== bb ? bb : []
                }
              })),
              ticks: yb.ticks.map(zW),
              editState: {
                cameraKeyframes: null !== (Wy = null === (Uy = yb.editState) || void 0 === Uy ? void 0 : Uy.cameraKeyframes) && void 0 !== Wy ? Wy : [],
                playbackMark: null !== (fy = null === (Zy = yb.editState) || void 0 === Zy ? void 0 : Zy.playbackMark) && void 0 !== fy ? fy : null
              }
            }
          }(Ub(cb)[oy(175)](ey))
        }
      }
      throw new Error(bb(176) + bb(oW[68]) + bb(178) + bb(oW[6]) + oW[9])
    })
  },
  35703: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => Uy,
      g: () => Ky,
      j: () => ey,
      m: () => fy,
      n: () => oy,
      p: () => qb,
      t: () => Py,
      u: () => By,
      y: () => cb
    });
    const Uy = 9,
      hy = [9];

    function fy(yb) {
      return hy.includes(yb)
    }
    const Zy = 100,
      cb = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      Py = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      oy = ["itemName", "amount", "position", "size", "attributes"],
      By = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Ky = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "KWy", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      ey = ["selectedSlotIndex", "slots"],
      qb = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35695: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky,
      d: () => sy,
      h: () => Py,
      j: () => Zy,
      k: () => cb,
      l: () => oy
    });
    var Uy = Wy(258),
      hy = Wy(23);

    function fy(yb) {
      return null === yb || void 0 === yb ? null : "string" === typeof yb ? yb : null
    }

    function Zy(yb, bb) {
      return JSON.stringify(yb) === JSON.stringify(bb)
    }

    function cb(yb) {
      const bb = [];
      for (const Wy of Object.keys(yb)) {
        const Uy = yb[Wy];
        for (const yb of Object.keys(Uy)) bb.push({
          hY: Wy,
          name: yb,
          ...Uy[yb]
        })
      }
      return bb
    }

    function Py(yb) {
      const bb = {};
      for (const fy of yb) {
        var Wy, Uy, hy;
        bb[fy.hY] || (bb[fy.hY] = {}), bb[fy.hY][fy.name] = {
          icon: fy.icon,
          level: fy.level,
          displayName: null !== (Wy = fy.displayName) && void 0 !== Wy ? Wy : null,
          endTick: null !== (Uy = fy.endTick) && void 0 !== Uy ? Uy : null,
          showInNametag: null === (hy = fy.showInNametag) || void 0 === hy || hy
        }
      }
      return bb
    }

    function oy(yb, bb) {
      const Wy = {};
      for (const hy of Object.keys(yb)) {
        const fy = {};
        for (const Wy of Object.keys(yb[hy])) {
          const Uy = yb[hy][Wy];
          null !== Uy.endTick && Uy.endTick < bb || (fy[Wy] = {
            ...Uy,
            endTick: null === Uy.endTick ? null : Uy.endTick - bb
          })
        }(0, Uy.uc)(fy) || (Wy[hy] = fy)
      }
      return Wy
    }

    function By(yb, bb, Wy) {
      if (null !== yb) return Math.max(0, 1e3 * (yb - bb) / Wy)
    }
    class Ky {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(yb, bb) {
        this.clear();
        const Wy = Date.now();
        for (const cb of yb.iterateEntityIds()) {
          const Py = yb.getEffects(cb);
          if ((0, Uy.uc)(Py)) continue;
          const oy = bb(cb);
          for (const yb of Object.keys(Py)) {
            var hy, Zy;
            const bb = Py[yb];
            this.upsert(oy, yb, {
              icon: bb.icon,
              level: bb.level,
              displayName: fy(bb.displayName),
              showInNametag: null === (hy = bb.showInNametag) || void 0 === hy || hy,
              endTime: void 0 !== bb.duration && null !== bb.duration ? (null !== (Zy = bb.appliedAt) && void 0 !== Zy ? Zy : Wy) + bb.duration : null
            })
          }
        }
      }
      upsert(yb, bb, Wy) {
        this.tracked[yb] || (this.tracked[yb] = {}), this.tracked[yb][bb] = Wy
      }
      remove(yb, bb) {
        const Wy = this.tracked[yb];
        Wy && (delete Wy[bb], (0, Uy.uc)(Wy) && delete this.tracked[yb])
      }
      handleUpdate(yb) {
        var bb;
        0 !== yb.duration ? this.upsert(yb.hY, yb.name, {
          icon: yb.icon,
          level: yb.level,
          displayName: fy(yb.displayName),
          showInNametag: null === (bb = yb.showInNametag) || void 0 === bb || bb,
          endTime: void 0 !== yb.duration && null !== yb.duration ? Date.now() + yb.duration : null
        }) : this.remove(yb.hY, yb.name)
      }
      handleRemove(yb, bb) {
        this.remove(yb, bb)
      }
      sample(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const hy = {},
          fy = 1e3 / bb;
        for (const Zy of Object.keys(this.tracked)) {
          const bb = this.tracked[Zy],
            cb = {};
          for (const Uy of Object.keys(bb)) {
            const hy = bb[Uy];
            let Py = null;
            if (null !== hy.endTime) {
              const bb = Math.max(0, hy.endTime - Wy);
              if (0 === bb) {
                this.remove(Zy, Uy);
                continue
              }
              Py = yb + Math.ceil(bb / fy)
            }
            cb[Uy] = {
              icon: hy.icon,
              level: hy.level,
              displayName: hy.displayName,
              endTick: Py,
              showInNametag: hy.showInNametag
            }
          }(0, Uy.uc)(cb) || (hy[Zy] = cb)
        }
        return hy
      }
    }

    function ey(yb, bb, Wy, Uy) {
      yb.hasEntity(bb) ? yb.updateEffect(bb, Wy, Uy) : function(yb, bb, Wy) {
        hy.g.EZ("EffectUpdate", {
          hY: yb,
          name: bb,
          ...Wy
        }, !0)
      }(bb, Wy, Uy)
    }

    function qb(yb, bb, Wy) {
      yb.hasEntity(bb) ? yb.removeEffect(bb, Wy) : function(yb, bb) {
        hy.g.EZ("RemoveEffect", {
          hY: yb,
          name: bb
        }, !0)
      }(bb, Wy)
    }

    function sy(yb, bb, Wy, Uy, hy, fy, Zy) {
      for (const By of Object.keys(Wy))
        for (const fy of Object.keys(Wy[By])) {
          var cb;
          null !== (cb = bb[By]) && void 0 !== cb && cb[fy] || (qb(yb, By, fy), Uy && By === Uy && String(hy) !== String(By) && qb(yb, hy, fy))
        }
      for (const Sy of Object.keys(bb))
        for (const cb of Object.keys(bb[Sy])) {
          var Py, oy;
          const Ey = bb[Sy][cb],
            ly = By(Ey.endTick, fy, Zy);
          if (0 === ly) {
            qb(yb, Sy, cb), Uy && Sy === Uy && String(hy) !== String(Sy) && qb(yb, hy, cb);
            continue
          }
          const mb = null === (Py = Wy[Sy]) || void 0 === Py ? void 0 : Py[cb],
            Cy = mb && (sy = Ey, (Ky = mb).icon === sy.icon && Ky.level === sy.level && Ky.displayName === sy.displayName && Ky.endTick === sy.endTick && Ky.showInNametag === sy.showInNametag),
            Ty = {
              icon: Ey.icon,
              level: Ey.level,
              displayName: null !== (oy = Ey.displayName) && void 0 !== oy ? oy : void 0,
              duration: ly,
              showInNametag: Ey.showInNametag
            };
          Cy || ey(yb, Sy, cb, Ty), Uy && Sy === Uy && ey(yb, hy, cb, {
            ...Ty,
            showInNametag: !1
          })
        }
      var Ky, sy
    }
  },
  35678: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy,
      e: () => Py,
      h: () => Ky,
      i: () => Zy,
      j: () => By
    });
    var Uy = Wy(35671),
      hy = Wy(35683);
    const fy = {
      description: "Bloxd Replay",
      accept: {
        [Uy.g]: Uy.e
      }
    };

    function Zy() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function cb(yb) {
      return yb instanceof DOMException && "AbortError" === yb.name
    }
    async function Py() {
      try {
        const [yb] = await window.showOpenFilePicker({
          multiple: !1,
          types: [fy]
        }), bb = await yb.getFile();
        return {
          handle: yb,
          bytes: new Uint8Array(await bb.arrayBuffer())
        }
      } catch (yb) {
        if (cb(yb)) return null;
        throw yb
      }
    }
    async function oy(yb) {
      if (yb && await async function(yb) {
          const bb = {
            mode: "readwrite"
          };
          return "granted" === await yb.queryPermission(bb) || "granted" === await yb.requestPermission(bb)
        }(yb)) return yb;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Uy.l)(),
          types: [fy]
        })
      } catch (bb) {
        if (cb(bb)) return null;
        throw bb
      }
    }
    async function By(yb, bb) {
      const Wy = await yb.createWritable();
      await Wy.write(new Blob([bb], {
        type: Uy.g
      })), await Wy.close()
    }

    function Ky(yb) {
      return (0, Uy.i)((0, hy.f)(yb))
    }
  },
  35252: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky
    });
    var Uy = Wy(19),
      hy = Wy(94),
      fy = Wy(33),
      Zy = Wy(2878),
      cb = Wy(2754),
      Py = Wy(5923);
    const oy = "shaderPackListingCheckedAt",
      By = 36e5;

    function Ky() {
      const {
        canUseShaderPacks: yb
      } = hy.featureFlags.settings;
      var bb, Ky;
      (0, cb.m)(yb) && !(0, cb.i)(yb) && (bb = fy.e.getItem(oy), Ky = Date.now(), "number" !== typeof bb || Ky < bb || Ky - bb >= By) && (0, Zy.e)((() => {
        (async function() {
          if ("landingPage" !== Uy.d.get("gameState")) return;
          const yb = await (0, Py.g)();
          if (void 0 === (null === yb || void 0 === yb ? void 0 : yb.listing)) return;
          fy.e.setItem(oy, Date.now());
          const {
            followListingUpdates: bb
          } = await Promise.all([Wy.e(126), Wy.e(123), Wy.e(115)]).then((() => Wy(39656)));
          await bb(yb, yb.listing) || fy.e.removeItem(oy)
        })().catch((yb => {
          console.error("Failed to check the shader pack listing for an update", yb)
        }))
      }))
    }
  },
  5923: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      g: () => fy
    });
    var Uy = Wy(33);
    const hy = "shaderPack";
    async function fy() {
      var yb;
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (yb = await Uy.d.getItem(hy, bb)) && void 0 !== yb ? yb : null
    }
  },
  35277: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Py
    });
    var Uy = Wy(248),
      hy = Wy(19),
      fy = Wy(35279),
      Zy = Wy(1458),
      cb = Wy(1620);

    function Py(yb, bb) {
      var Wy, Py, oy;
      if (!hy.d.get("isKeydownEnabled") || yb.repeat) return;
      const By = yb.code;
      "Escape" === yb.key ? (0, Zy.i)(yb) : null !== (Wy = cb.w.OpenSettings) && void 0 !== Wy && Wy.includes(By) ? (0, Zy.r)(yb, Uy.o.SETTINGS) : null !== (Py = cb.w.OpenCharacterCustomization) && void 0 !== Py && Py.includes(By) ? (0, fy.e)() || (0, Zy.r)(yb, Uy.o.CUSTOMISATION, bb()) : null !== (oy = cb.w.ShowDebugOverlay) && void 0 !== oy && oy.includes(By) && hy.d.set({
        showDebugOverlay: !hy.d.get("showDebugOverlay")
      })
    }
  },
  35260: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ly
    });
    var Uy = Wy(547),
      hy = Wy(1086),
      fy = Wy(143),
      Zy = Wy(1109),
      cb = Wy(1080),
      Py = Wy(23),
      oy = Wy(1516),
      By = Wy(1532),
      Ky = Wy(2311),
      ey = Wy(1162),
      qb = Wy(1177),
      sy = Wy(1339),
      Sy = Wy(1052),
      Ey = Wy(35269);

    function ly(yb) {
      return async (bb, Wy, cb, sy, Sy) => {
        let Ey;
        if ((0, Uy.D)(cb)) {
          if (Sy.aborted) return mb();
          const yb = await Cy(bb, Wy, sy);
          if (Sy.aborted || Ky.f.matchmakingEnded(yb.isError() ? null : performance.now()), yb.isError()) {
            const bb = yb.asError();
            return console.log("Join room did not succeed, reason:", bb.message), bb.forward()
          }
          Ey = yb.getValue()
        } else {
          Ky.f.skipPlayWait();
          const yb = Ty(cb.replace("https://", "").replace("http://", ""));
          if (yb.isError()) return yb.asError().forward();
          Ey = {
            endpoint: yb.getValue(),
            gameNameWithVariation: Wy,
            lobbyName: bb instanceof hy.g ? bb.getLobbyName() : bb
          }
        }
        if (Sy.aborted) return mb();
        console.log(`Connecting to ${Ey.gameNameWithVariation} in lobby ${Ey.lobbyName} on game server ${Ey.endpoint}`), Py.g.EZ("matchmakeAndPlayStepCompleted", {
          step: fy.i.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, oy.h)(), By.b.markGameLoadStart(), (0, qb.n)({
          websocketUrl: Ey.endpoint,
          gameNameWithVariation: Ey.gameNameWithVariation,
          lobbyName: Ey.lobbyName
        }), Py.g.EZ("loadingScreenState", "loadingPage:loadingGame");
        const ly = async () => {
          const yb = await async function(yb, bb, Wy, Uy) {
            const hy = await Cy(yb, bb, Wy);
            if (!hy.isError() && !Uy.aborted) {
              const {
                endpoint: yb,
                gameNameWithVariation: bb,
                lobbyName: Wy
              } = hy.getValue();
              (0, qb.n)({
                websocketUrl: yb,
                gameNameWithVariation: bb,
                lobbyName: Wy
              })
            }
            return hy
          }(bb, Wy, sy, Sy);
          return yb.isError() || (Ey = yb.getValue()), yb
        }, Vy = !(0, Uy.D)(cb), Jy = () => yb({
          place: Ey,
          userContext: sy,
          direct: Vy,
          rematch: ly
        }, Sy);
        let gb = await Jy();
        if (gb.isError() && !0 === gb.asError().debugResult.rematch && !Vy && !Sy.aborted) {
          console.log("The place refused the join: matchmaking again");
          const yb = await ly();
          if (yb.isError()) return yb.asError().forward();
          if (Sy.aborted) return mb();
          gb = await Jy()
        }
        return gb.isError() ? gb.asError().forward() : ((0, ey.L)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), Zy.c.value({
          gameNameWithVariation: Ey.gameNameWithVariation,
          lobbyName: Ey.lobbyName,
          addLobbyToRecentlyPlayed: !(bb instanceof hy.g)
        }))
      }
    }

    function mb() {
      return Zy.c.errorWithCode("Left the game while it loaded", fy.i.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        RZ: !0
      })
    }
    async function Cy(yb, bb, Wy) {
      return (0, Uy.D)(yb) || yb instanceof hy.g || !(yb.length > cb.Q) ? await sy.c.matchmakePlayer(Wy, yb, bb, (0, Ey.e)()).then((yb => {
        if (!1 === yb.succeeded) return Zy.c.errorWithCode(yb.failReason, fy.i.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: bb,
          lobbyName: Wy,
          gameNameWithVariation: Uy
        } = yb, hy = Ty(bb);
        return hy.isError() ? hy.asError().forward() : Zy.c.value({
          endpoint: hy.getValue(),
          gameNameWithVariation: Uy,
          lobbyName: Wy
        })
      })).catch((yb => (console.error("Bad response from the matchmaking server:", yb), Zy.c.errorWithCode(yb.toString(), fy.i.REQUEST_TO_MATCHMAKING, {
        error: yb,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", yb), Zy.c.errorWithCode("This lobby link's name is too long. Ask for a new link.", fy.i.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function Ty(yb) {
      const bb = Sy.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(yb);
      return bb.isError() ? Zy.c.errorWithCode(bb.asError().message, fy.i.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : Zy.c.value(bb.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, qb.l)("/")
    }
  },
  8359: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => qb,
      d: () => ey
    });
    var Uy = Wy(19),
      hy = Wy(1524),
      fy = Wy(33),
      Zy = Wy(1207),
      cb = Wy(2956),
      Py = Wy(1304),
      oy = Wy(1239);
    const By = 2592e5,
      Ky = "notificationOptInLastPromptedAt";
    async function ey() {
      var yb;
      const bb = await qb();
      if (null === bb) return;
      const Wy = null !== (yb = fy.e.getItem(Ky)) && void 0 !== yb ? yb : 0;
      if (Date.now() - Wy < By) return;
      if ((0, oy.f)()) return;
      const Uy = await Zy.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: (0, hy.h)() ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== Uy && (fy.e.setItem(Ky, Date.now()), (0, Py.f)({
        id: !0 === Uy ? "push.allow" : "push.deny",
        value: (0, hy.h)() ? "app" : "browser"
      }), !0 === Uy && bb())
    }
    async function qb() {
      return (0, hy.h)() ? Uy.d.get("mobilePushNotificationsCanAsk") ? async () => {
        (0, hy.o)("requestNotificationPermission", {})
      }: null: await cb.b.canAsk() ? () => cb.b.requestPermission() : null
    }
  },
  35269: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ey,
      g: () => ly
    });
    var Uy = Wy(865),
      hy = Wy(552),
      fy = Wy(258),
      Zy = Wy(873),
      cb = Wy(562),
      Py = Wy(3725),
      oy = Wy(94),
      By = Wy(139),
      Ky = Wy(1496),
      ey = Wy(105),
      qb = Wy(35272),
      sy = Wy(33),
      Sy = Wy(942);

    function Ey() {
      var yb, bb;
      return [...null !== (yb = navigator.languages) && void 0 !== yb ? yb : [null !== (bb = navigator.language) && void 0 !== bb ? bb : "none"], "En-GB"]
    }

    function ly(yb, bb, Wy, ly, mb) {
      const Cy = (0, Uy.p)(bb) ? (0, Uy.v)(bb) : null,
        Ty = {
          cookies: (0, Ky.getAllCookiesForGameNameWithVariation)(bb),
          isMobile: (0, oy.isMobile)(),
          isUsingCustomGameTexturePack: null !== Cy && mb(Cy),
          generalCookies: {
            joinDiscord: !!sy.e.getItem("DiscordPressed"),
            newGo: Py.c,
            ...yb.getMetricsCookies(),
            trafficCode: ly,
            compliance: oy.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, oy.getBrowserName)(),
            version: (0, oy.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, oy.getPlatformType)(),
            deviceType: (0, ey.b)()
          },
          isLoggedIn: yb.isLoggedIn(),
          lobbyName: Wy,
          languages: Ey(),
          version: hy.b,
          siteUsed: By.u,
          subsiteUsed: By.B,
          playSessionId: (0, qb.l)(bb),
          visitSessionId: (0, Sy.d)(),
          clientReason: cb.h.reason
        };
      return null !== Cy && (0, fy.yc)(Cy) ? (Ty.lobbyName = (0, Uy.l)(Cy, (0, Uy.r)(bb), Wy), {
        roomName: `classic_${Zy.e}`,
        joinOptions: Ty
      }) : {
        roomName: bb,
        joinOptions: Ty
      }
    }
  },
  35348: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      for (let Wy = 0; Wy < yb.length; Wy++)
        if (yb[Wy].identifier === bb) return yb[Wy];
      return null
    }

    function hy(yb, bb) {
      return null !== Uy(yb, bb)
    }
    Wy.d(bb, {
      e: () => Uy,
      i: () => hy
    })
  },
  35625: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => rb,
      D: () => Hy,
      G: () => ab,
      I: () => uy,
      K: () => Fy,
      e: () => Py,
      i: () => ib,
      j: () => cb,
      k: () => ny,
      n: () => Ry,
      r: () => Jy,
      v: () => Xy,
      x: () => Yy,
      z: () => Oy
    });
    var Uy = Wy(33);
    const hy = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      fy = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      Zy = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      cb = fy.filter((yb => "docsButton" !== yb)),
      Py = Zy.filter((yb => "aiHelperButton" !== yb)),
      oy = "codeEditorTutorials",
      By = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Ky = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let ey = null,
      qb = null;
    const sy = new Set,
      Sy = new Set;
    let Ey = null;
    const ly = new Set,
      mb = new Set;

    function Cy() {
      mb.forEach((yb => {
        yb()
      }))
    }

    function Ty() {
      if (!ey) {
        const yb = Uy.e.getItem(oy);
        ey = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof yb && null !== yb ? yb : {}
        }
      }
      return ey
    }

    function Vy(yb) {
      const bb = Ty();
      bb[yb] || (ey = {
        ...bb,
        [yb]: !0
      }, Uy.e.setItem(oy, ey))
    }

    function Jy(yb) {
      return "docsOverview" === yb ? fy : "aiHelperOverview" === yb ? Zy : qb ? hy[qb] : []
    }

    function gb(yb) {
      return ("worldCodeButton" !== yb || !Ty().worldCodeIntroShown) && !ly.has(yb)
    }

    function Gy(yb) {
      var bb;
      return (null === (bb = Ey) || void 0 === bb ? void 0 : bb.name) === yb ? Ey.stepsDone : sy
    }

    function Oy(yb, bb) {
      if (! function(yb) {
          return Ey ? Ey.name === yb : "welcome" === yb
        }(yb) || !gb(bb) || Gy(yb).has(bb)) return !1;
      if (Ey) return !0;
      const Wy = By[bb];
      return Wy ? !Ty()[Wy] || Sy.has(bb) : !Ty()[Ky[yb]]
    }

    function Ry(yb) {
      var bb;
      return null !== (bb = Jy(yb).find((bb => Oy(yb, bb)))) && void 0 !== bb ? bb : null
    }

    function vb(yb) {
      var bb;
      Vy(Ky[yb]), (null === (bb = Ey) || void 0 === bb ? void 0 : bb.name) === yb && (Ey = null)
    }

    function ib(yb) {
      const bb = (Ey ? [Ey.name] : ["welcome", "docsOverview"]).find((bb => Ry(bb) === yb));
      if (!bb) return;
      Gy(bb).add(yb);
      const Wy = By[yb];
      Wy && (Vy(Wy), Ey || Sy.add(yb)), null === Ry(bb) && vb(bb), Cy()
    }

    function My(yb, bb) {
      const Wy = Jy(yb),
        Uy = Gy(yb);
      for (let hy = Wy.indexOf(bb) - 1; hy >= 0; hy--)
        if (Uy.has(Wy[hy]) && gb(Wy[hy])) return Wy[hy];
      return null
    }

    function Yy(yb, bb) {
      return null !== My(yb, bb)
    }

    function Xy(yb, bb) {
      const Wy = My(yb, bb);
      Wy && (Gy(yb).delete(Wy), Cy())
    }

    function ny(yb) {
      vb(yb), "welcome" === yb && Jy("welcome").forEach((yb => {
        const bb = By[yb];
        bb && Vy(bb)
      })), Cy()
    }

    function uy(yb) {
      Ey = {
        name: yb,
        stepsDone: new Set
      }, Cy()
    }

    function rb() {
      (Ey || 0 !== sy.size || 0 !== Sy.size) && (Ey = null, sy.clear(), Sy.clear(), Cy())
    }

    function Hy(yb, bb) {
      const Wy = bb ? yb : qb === yb ? null : qb;
      Wy !== qb && (qb = Wy, Cy())
    }

    function ab(yb, bb) {
      ly.has(yb) === bb && (bb ? ly.delete(yb) : ly.add(yb), Cy())
    }

    function Fy(yb) {
      return mb.add(yb), () => {
        mb.delete(yb)
      }
    }
  },
  35358: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      g: () => Ky,
      k: () => Zy
    });
    var Uy = Wy(1977),
      hy = Wy(1983),
      fy = Wy(1991);

    function Zy(yb, bb) {
      return (!(0, fy.d)() || 0 === yb && 0 === bb) && (0, hy.w)(Uy.f.Joystick, 0, yb, bb, 0)
    }
    const cb = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Py(yb) {
      return !(yb instanceof HTMLElement) || yb.offsetWidth <= 0 || yb.offsetHeight <= 0 ? null : {
        width: yb.offsetWidth,
        height: yb.offsetHeight
      }
    }

    function oy(yb, bb) {
      const Wy = yb => Math.min(65535, Math.round(4 * yb));
      return (Wy(yb) | Wy(bb) << 16) >>> 0
    }

    function By(yb) {
      return {
        x: yb.left + yb.width / 2,
        y: yb.top + yb.height / 2,
        radius: Math.min(yb.width, yb.height) / 2
      }
    }
    const Ky = new class {
      constructor(yb) {
        this.write = yb, this.elements = new Map
      }
      set(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bb ? this.elements.set(yb, {
          element: bb,
          hidden: Wy
        }) : this.elements.delete(yb), this.measureOne(yb)
      }
      measure() {
        for (const yb of this.elements.keys()) this.measureOne(yb)
      }
      hitZone(yb, bb) {
        let Wy = null,
          Uy = 1;
        for (const hy of this.elements.keys()) {
          const fy = this.shown(hy);
          if (!fy) continue;
          const {
            rect: Zy,
            element: cb
          } = fy, oy = By(Zy), Ky = Math.max(0, Zy.width / 2 - oy.radius), ey = Math.max(0, Zy.height / 2 - oy.radius), qb = Math.max(0, Math.abs(yb - oy.x) - Ky), sy = Math.max(0, Math.abs(bb - oy.y) - ey), Sy = cb.firstElementChild;
          let Ey = Math.hypot(qb, sy) / oy.radius;
          const ly = Py(Sy);
          ly && (Ey = Math.min(Ey, Math.max(2 * Math.abs(yb - oy.x) / ly.width, 2 * Math.abs(bb - oy.y) / ly.height))), Ey < Uy && (Wy = {
            code: hy,
            element: cb,
            key: Sy,
            ...oy
          }, Uy = Ey)
        }
        return Wy
      }
      measureOne(yb) {
        const bb = this.shown(yb);
        if (!bb) return void this.write(Uy.f.TouchZone, yb, 0, 0, 0);
        const {
          rect: Wy,
          element: hy
        } = bb, fy = By(Wy);
        this.write(Uy.f.TouchZone, yb, fy.x, fy.y, oy(Wy.width, Wy.height));
        const Zy = Py(hy.firstElementChild);
        this.write(Uy.f.TouchZone, 256 | yb, 0, 0, Zy ? oy(Zy.width, Zy.height) : 0)
      }
      shown(yb) {
        const bb = this.elements.get(yb);
        if (!bb || bb.hidden) return null;
        const Wy = bb.element.getBoundingClientRect();
        return Wy.width <= 0 || Wy.height <= 0 ? null : {
          rect: Wy,
          element: bb.element
        }
      }
    }(hy.w)
  },
  35586: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Py,
      g: () => cb
    });
    const Uy = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      hy = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      fy = {
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
      Zy = {
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
      cb = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Uy.files,
          dependencies: Uy.dependencies,
          bundledSource: Uy.bundledSource,
          types: Uy.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: hy.files,
          dependencies: hy.dependencies,
          bundledSource: hy.bundledSource,
          types: hy.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: fy.files,
          dependencies: fy.dependencies,
          bundledSource: fy.bundledSource,
          types: fy.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: Zy.files,
          dependencies: Zy.dependencies,
          bundledSource: Zy.bundledSource,
          types: Zy.types
        }
      };

    function Py(yb) {
      const bb = [],
        Wy = new Set,
        Uy = yb => {
          if (Wy.has(yb)) return;
          const hy = cb[yb];
          if (hy) {
            Wy.add(yb);
            for (const yb of hy.dependencies) Uy(yb);
            bb.push(yb)
          }
        };
      for (const hy of yb) Uy(hy);
      return bb
    }
  },
  35595: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      f: () => cb,
      g: () => Zy,
      h: () => fy,
      j: () => oy,
      m: () => By,
      n: () => sy,
      o: () => qb,
      p: () => ey
    });
    var Uy = Wy(1102);
    const hy = ["quickjs", "ses"];

    function fy(yb) {
      return hy.includes(yb)
    }

    function Zy(yb) {
      return yb === Uy.h || yb === Uy.k
    }

    function cb(yb, bb) {
      return yb === Uy.h && bb === Uy.k || yb === Uy.k && bb === Uy.h
    }

    function Py(yb) {
      const bb = Uy.k in yb,
        Wy = Uy.h in yb;
      return bb && Wy ? null : bb ? Uy.k : Wy ? Uy.h : null
    }

    function oy(yb, bb, Wy) {
      const Uy = `${bb}/`;
      return yb.filter((yb => yb.startsWith(Uy))).map((yb => [yb, `${Wy}/${yb.slice(Uy.length)}`]))
    }

    function By(yb, bb) {
      let Wy = 0;
      for (const [Uy, hy] of Object.entries(yb)) Uy !== bb && (Wy += hy.length);
      return Wy
    }
    const Ky = "@plugins/";

    function ey(yb) {
      return `${Ky}${yb}`
    }

    function qb(yb, bb) {
      return `/node_modules/@plugins/${yb}/${bb}`
    }

    function sy(yb) {
      if (!yb.startsWith(Ky)) return null;
      const bb = yb.slice(Ky.length);
      return function(yb) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(yb)
      }(bb) ? bb : null
    }
  },
  35613: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      e: () => hy,
      f: () => Zy,
      h: () => Py,
      k: () => fy
    });
    var Uy = Wy(35604);
    const hy = 5,
      fy = "[SCHEMATIC]",
      Zy = 1024e4;

    function cb(yb) {
      return yb.endsWith(".bloxdschem") && (0, Uy.w)(yb.slice(0, -11) + ".ts") && yb.length <= 64
    }

    function Py(yb) {
      return Object.fromEntries(Object.keys(yb).map((yb => [yb, fy])))
    }
  },
  4052: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      h: () => Uy,
      i: () => fy,
      l: () => Py,
      p: () => Zy
    });
    const Uy = ["sine", "triangle", "square", "sawtooth"],
      hy = 55,
      fy = {
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

    function Zy(yb) {
      return "string" !== typeof yb ? yb : Object.hasOwn(fy, yb) ? fy[yb] : null
    }

    function cb(yb, bb, Wy) {
      return Math.min(Wy, Math.max(bb, yb))
    }

    function Py(yb) {
      const bb = cb(yb.durationMs, 10, 500),
        Wy = cb(yb.attackMs, 0, bb),
        {
          intonation: hy
        } = yb;
      return {
        waveform: Uy.includes(yb.waveform) ? yb.waveform : "sine",
        pitchHz: cb(yb.pitchHz, 20, 4e3),
        glideSemitones: cb(yb.glideSemitones, -24, 24),
        durationMs: bb,
        attackMs: Wy,
        releaseMs: cb(yb.releaseMs, 0, bb - Wy),
        lowpassHz: null === yb.lowpassHz ? null : cb(yb.lowpassHz, 20, 2e4),
        volume: cb(yb.volume, 0, 2),
        intonation: {
          variationSemitones: cb(hy.variationSemitones, 0, 6),
          declineSemitones: cb(hy.declineSemitones, 0, 12),
          questionRiseSemitones: cb(hy.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: cb(hy.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: cb(yb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);